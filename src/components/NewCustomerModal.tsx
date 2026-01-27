import type { NewCustomerModalProps, NewUserDataType } from "../utils/types"
import { initialFormState, roles } from "../utils/userRoles"
import Button from "./Button"
import Dropdown from "./Dropdown"
import Input from "./Input"
import { useNewUserModal } from "../store/NewUserModal/NewUserModalContext"
import { useDropdown } from "../store/Dropdown/DropdownContext"

const NewCustomerModal = ({ heading, onSubmit }: NewCustomerModalProps) => {
    const { newCustErrors, newUserData, updateNewUserData, clearNewUserData, updateModalVisible } = useNewUserModal()
    const { updateDropdownValue } = useDropdown()
    const handleInputValue = (inpEvent: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = inpEvent.target
        updateNewUserData?.(name as keyof NewUserDataType, value)
    }
    const handleCancel = () => {
        clearNewUserData?.()
        updateModalVisible?.(false)
        updateDropdownValue?.('select a role')
    }

    return (
        <div className="bg-white rounded-lg px-4 py-8 w-full max-w-[600px]">
            <p className="capitalize text-2xl font-semibold">{heading}</p>

            {/* INPUTS */}
            <div className="mt-4 flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* FN */}
                    <Input inpLabel="full name" inpType="text" inpName="fullName" inpPlaceholder="firstname lastname" inpErr={newCustErrors?.fullName} getValue={newUserData?.fullName} getChangeFn={handleInputValue} />
                    {/* Email */}
                    <Input inpLabel="email" inpType="text" inpName="email" inpPlaceholder="email@email.com" inpErr={newCustErrors?.email} getValue={newUserData?.email} getChangeFn={handleInputValue} />
                </div>

                {/* Role */}
                <Dropdown options={roles} errorMsg={newCustErrors?.role} />

                {/* BUTTONS */}
                <div className="flex gap-3">
                    <Button name="cancel" variant="secondary" getActionFn={handleCancel} />

                    {/* Submit */}
                    <Button name="add record" getActionFn={() => {
                        console.log("SUBMITTING USER →", newUserData)
                        onSubmit?.(newUserData ?? initialFormState)
                    }} />
                </div>
            </div>
        </div>
    )
}

export default NewCustomerModal
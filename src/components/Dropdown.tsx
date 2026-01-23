import { useDropdown } from "../store/Dropdown/DropdownContext"
import { useNewUserModal } from "../store/NewUserModal/NewUserModalContext"
import type { DropDownOptionType, DropDownProps } from "../utils/types"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

const Dropdown = ({ options }: DropDownProps) => {
    const { dropdownValue, updateDropdownValue, optionsVisible, updateOptionsVisible } = useDropdown()
    const { updateNewUserData, newCustErrors } = useNewUserModal()


    const handleOptions = () => {
        updateOptionsVisible?.(!optionsVisible)
    }

    const handleSelectedOption = (opt: string) => {
        updateDropdownValue?.(opt)
        updateOptionsVisible?.(false)
        updateNewUserData?.('role', opt ?? '')
    }

    return (
        <div>
            {/* <p className="inputLabel">select your role</p> */}
            <div className={`border border-colorPrime rounded-lg px-3 py-2 relative cursor-pointer`}>
                {/* selected value */}
                <div className="flex justify-between items-center" onClick={handleOptions}>
                    <p className="font-semibold text-base capitalize">{dropdownValue}</p>
                    {optionsVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                {/* options */}
                {optionsVisible && <div className={`absolute bg-white w-full -left-[1px] top-11 rounded-lg px-3 py-2 max-h-32 flex flex-col gap-3 overflow-y-auto border border-colorPrime`}>{options?.map((opt: DropDownOptionType) => <p key={opt?.value} className="capitalize" onClick={() => handleSelectedOption?.(opt?.value ?? '')}>{opt?.value}</p>)}</div>}
            </div>
            {newCustErrors?.role && <p className="text-red-500 text-sm">{newCustErrors?.role}</p>}
        </div>
    )
}

export default Dropdown
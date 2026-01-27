import { memo } from "react"
import { useDropdown } from "../store/Dropdown/DropdownContext"
import { useNewUserModal } from "../store/NewUserModal/NewUserModalContext"
import type { DropDownOptionType, DropDownProps } from "../utils/types"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

const Dropdown = ({ options, label, errorMsg }: DropDownProps) => {
    const { dropdownValue, updateDropdownValue, optionsVisible, updateOptionsVisible } = useDropdown()
    const { updateNewUserData } = useNewUserModal()


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
            {label && <p className="inputLabel">{label}</p>}
            <div className={`border border-borderPrime rounded-lg px-3 py-2 relative cursor-pointer`}>
                {/* selected value */}
                <div className="flex justify-between items-center" onClick={handleOptions}>
                    <p className="font-semibold text-base capitalize">{dropdownValue}</p>
                    {optionsVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                {/* options */}
                {optionsVisible && <div className={`absolute bg-white w-full -left-[1px] top-11 rounded-lg px-3 py-2 max-h-32 flex flex-col gap-3 overflow-y-auto border border-borderPrime`}>{options?.map((opt: DropDownOptionType) => <p key={opt?.value} className="capitalize" onClick={() => handleSelectedOption?.(opt?.value ?? '')}>{opt?.value}</p>)}</div>}
            </div>
            {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
        </div>
    )
}

export default memo(Dropdown)
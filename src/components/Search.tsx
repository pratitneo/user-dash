// import { IoIosClose } from "react-icons/io"
import type { SearchProps } from "../utils/types"
import { IoIosClose, IoIosSearch } from "react-icons/io"

const Search = ({ placeholder, inputName, getActionFn, inputValue, getClearSearch }: SearchProps) => {
    return (
        <div className="border border-borderPrime rounded-lg bg-white flex items-center justify-between flex-1 py-2 px-3">
            <input type="text" name={inputName} placeholder={placeholder} value={inputValue} autoComplete="off" className="w-full focus-visible:outline-none text-sm" onChange={(inputEvent) => getActionFn?.(inputEvent)} />
            <div className="flex">
                {inputValue ? <IoIosClose size={24} onClick={getClearSearch} /> : <IoIosSearch size={24} />}


            </div>
        </div>
    )
}

export default Search
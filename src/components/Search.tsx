// import { IoIosClose } from "react-icons/io"
import type { SearchProps } from "../utils/types"
import { IoIosSearch } from "react-icons/io"

const Search: React.FC<SearchProps> = ({ placeholder, inputName }) => {
    return (
        <div className="border border-borderPrime rounded-lg bg-white flex items-center justify-between flex-1 py-2 px-3">
            <input type="text" name={inputName} placeholder={placeholder} className="w-full focus-visible:outline-none text-sm" />
            <div className="flex">
                {/* <IoIosClose /> */}
                <IoIosSearch />
            </div>
        </div>
    )
}

export default Search
import { HiOutlineMenuAlt4, HiOutlineUserCircle } from "react-icons/hi"
import type { HeaderProps } from "../utils/types"

const Header: React.FC<HeaderProps> = ({ appName }) => {
    return (
        <div className="border border-borderPrime rounded-lg bg-white p-3 flex justify-between items-center flex-1 gap-4 lg:flex-initial lg:items-center lg:border-none lg:bg-transparent lg:w-52 lg:p-0">
            <p className="capitalize font-bold text-2xl lg:text-3xl">{appName}</p>
            <div className="flex gap-4">
                <HiOutlineMenuAlt4 size={24} />
                <HiOutlineUserCircle size={24} />
            </div>
        </div>
    )
}

export default Header
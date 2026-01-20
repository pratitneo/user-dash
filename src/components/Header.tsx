import { HiOutlineMenuAlt4, HiOutlineUserCircle } from "react-icons/hi"

const Header = () => {
    return (
        <div className="border border-borderPrime rounded-xl px-3 py-3 flex justify-between items-center">
            <p className="capitalize font-semibold">cliently</p>
            <div className="flex gap-4">
                <HiOutlineMenuAlt4 size={24} />
                <HiOutlineUserCircle size={24} />
            </div>
        </div>
    )
}

export default Header
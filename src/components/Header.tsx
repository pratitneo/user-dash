import { HiOutlineMenuAlt4, HiOutlineUserCircle } from "react-icons/hi"
import type { HeaderProps, SideLinkType } from "../utils/types"
import { useState } from "react"
import { useMediaQuery } from "react-responsive"
import Link from "./Link"

const Header: React.FC<HeaderProps> = ({ appName, links }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 1023px)' })
    const [menuVisible, setMenuVisible] = useState(false)
    const handleMenuVisible = () => setMenuVisible(!menuVisible)

    return (
        <div className="border border-borderPrime rounded-lg relative bg-white p-3 flex justify-between items-center flex-1 gap-4 lg:flex-initial lg:items-center lg:border-none lg:bg-transparent lg:w-52 lg:p-0">
            <p className="capitalize font-bold text-2xl lg:text-3xl">{appName}</p>
            <div className="flex gap-4">
                {isMobile && <div className="">
                    {<HiOutlineMenuAlt4 size={24} onClick={handleMenuVisible} />}
                    {menuVisible && <div className=" absolute right-0 top-16 bg-white border rounded-lg p-4 flex flex-col items-end gap-2">
                        <p className="font-bold capitalize text-xl underline">menu</p>
                        {links?.map((link: SideLinkType) => <Link key={link?.name} linkName={link?.name} sizeValue={28} />)}
                    </div>}
                </div>}
                <HiOutlineUserCircle size={24} />
            </div>
        </div>
    )
}

export default Header
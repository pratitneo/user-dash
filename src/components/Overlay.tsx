import { IoIosCloseCircle } from "react-icons/io"
import type { OverlayProps } from "../utils/types"
import { memo } from "react"

const Overlay = ({ children, getActionFn }: OverlayProps) => {

    return (
        <div className='bg-overlay fixed top-0 left-0 min-h-screen min-w-full flex flex-col justify-center items-center px-2 py-16 z-10'>
            <IoIosCloseCircle color="white" size={40} className="absolute right-4 top-4 cursor-pointer" onClick={getActionFn} />
            {children}
        </div>
    )
}

export default memo(Overlay)
import { memo } from 'react'
import type { SidebarProps, SideLinkType } from '../utils/types'

const Sidebar = ({ links }: SidebarProps) => {
    return (
        <div className='hidden lg:flex lg:flex-col lg:gap-4 bg-white border border-borderPrime rounded-lg min-h-[calc(100vh-110px)] w-52 p-4'>
            {links?.map((link: SideLinkType) => {
                const Icon = link.icon

                return (
                    <div key={link.name} className="flex items-center gap-4">
                        {Icon && <Icon size={28} />}
                        <p className="capitalize text-lg">{link.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default memo(Sidebar)
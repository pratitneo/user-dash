import { sideLinks } from '../utils/sideLinks'
import type { SideLinkType } from '../utils/types'
import Loader from './Loader'

const Sidebar = () => {
    return (
        <div className='hidden lg:flex lg:flex-col lg:gap-4 bg-white border border-borderPrime rounded-lg min-h-[calc(100vh-110px)] w-52 p-4'>
            {sideLinks.map((link: SideLinkType) => {
                const Icon = link.icon

                return (
                    <div key={link.name} className="flex items-center gap-4">
                        {Icon && <Icon size={28} />}
                        <p className="capitalize text-lg">{link.name}</p>
                    </div>
                )
            })}
            <Loader />
        </div>
    )
}

export default Sidebar
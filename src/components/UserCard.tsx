import { FaCaretDown, FaCaretUp } from "react-icons/fa"
import type { UserCardProps } from "../utils/types"
import { memo } from "react"

const UserCard: React.FC<UserCardProps> = ({ rank, name, networth, place }) => {
    return (
        <div className="whitespace-nowrap bg-white rounded-lg px-4 py-3 flex-1 shadow-md">
            <div className="flex items-center gap-1">
                {rank && <p>{rank}.</p>}
                {name && <p className="font-bold capitalize text-lg">{name}</p>}
            </div>
            <div className="mt-1">
                {networth && <p className="capitalize">net worth: {networth}</p>}
                {place && <p className="flex items-center capitalize">position: {place === 'up' ? <FaCaretUp color="#66BB6A" size={28} /> : <FaCaretDown color="#F44336" size={28} />}</p>}
            </div>
        </div>
    )
}

export default memo(UserCard)
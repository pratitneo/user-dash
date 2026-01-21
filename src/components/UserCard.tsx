import { FaCaretDown, FaCaretUp } from "react-icons/fa"
import type { UserCardProps } from "../utils/types"

const UserCard: React.FC<UserCardProps> = ({ rank, name, networth, place }) => {
    return (
        <div className="whitespace-nowrap bg-white rounded-lg p-4 flex-1">
            <div className="flex items-center gap-2">
                <p>{rank}.</p>
                <p className="font-bold capitalize text-lg">{name}</p>
            </div>
            <div className="mt-2">
                <p className="capitalize">net worth: {networth}</p>
                <p className="flex items-center capitalize">position: {place === 'up' ? <FaCaretUp color="#66BB6A" size={28} /> : <FaCaretDown color="#F44336" size={28} />}</p>
            </div>
        </div>
    )
}

export default UserCard
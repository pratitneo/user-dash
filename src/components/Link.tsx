import type { LinkProps } from "../utils/types"

const Link = ({ Icon, linkName, sizeValue }: LinkProps) => {
    return (
        <div className="flex items-center gap-4">
            {Icon && <Icon size={sizeValue} />}
            <p className="capitalize text-lg">{linkName}</p>
        </div>
    )
}

export default Link
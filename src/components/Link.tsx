import { memo } from "react"
import type { LinkProps } from "../utils/types"

const Link = ({ Icon, linkName, sizeValue }: LinkProps) => {
    return (
        <div className="flex items-center gap-4">
            {Icon && <Icon size={sizeValue} />}
            {linkName && <p className="capitalize text-lg">{linkName}</p>}
        </div>
    )
}

export default memo(Link)
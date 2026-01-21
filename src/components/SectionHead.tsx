import type { SectionHeadProps } from "../utils/types"

const SectionHead = ({ head }: SectionHeadProps) => {
    return (
        <p className="font-bold capitalize text-xl">{head}</p>
    )
}

export default SectionHead
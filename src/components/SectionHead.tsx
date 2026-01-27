import { memo } from "react"
import type { SectionHeadProps } from "../utils/types"

const SectionHead = ({ head }: SectionHeadProps) => head && <p className="font-bold capitalize text-xl">{head}</p>

export default memo(SectionHead)
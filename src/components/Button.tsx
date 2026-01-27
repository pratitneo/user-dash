import { memo } from 'react'
import { buttonVariants, type ButtonProps } from '../utils/types'

const Button = ({ trailingIcon, name, leadingIcon, variant = 'primary', getActionFn }: ButtonProps) => {

    return (
        <div className={`rounded-lg p-2 flex items-center self-end w-fit cursor-pointer capitalize ${buttonVariants[variant]}`} onClick={getActionFn}>
            {trailingIcon}
            {name && <p className='text-sm'>{name}</p>}
            {leadingIcon}
        </div>
    )
}

export default memo(Button)
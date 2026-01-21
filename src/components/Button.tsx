import { buttonVariants, type ButtonProps } from '../utils/types'

const Button = ({ trailingIcon, name, leadingIcon, variant = 'primary', getActionFn }: ButtonProps) => {

    return (
        <div className={`rounded-lg p-2 flex items-center gap-2 self-end w-fit ${buttonVariants[variant]}`} onClick={getActionFn}>
            {trailingIcon}
            {name && <p className='text-sm'>{name}</p>}
            {leadingIcon}
        </div>
    )
}

export default Button
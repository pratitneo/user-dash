import type { InputProps } from '../utils/types'

const Input = ({ inpLabel, inpType, inpName, inpId, inpPlaceholder, getValue, getChangeFn }: InputProps) => {
    return (
        <div className='flex flex-col flex-1 rounded-lg'>
            <label htmlFor="inpName" className='inputLabel'>{inpLabel}</label>
            <input type={inpType} name={inpName} id={inpId} placeholder={inpPlaceholder} value={getValue ?? ''} onChange={getChangeFn} autoComplete='off' className='border border-colorPrime rounded-lg p-2' />
        </div>
    )
}

export default Input
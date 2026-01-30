import { FaCheckCircle } from 'react-icons/fa'

const SuccessMsg = () => {
    return (
        <div className="flex items-center gap-2 text-green-700 capitalize">
            <FaCheckCircle />
            <p className="text-green-700 text-sm font-semibold">successfully added this user to the table</p>
        </div>
    )
}

export default SuccessMsg
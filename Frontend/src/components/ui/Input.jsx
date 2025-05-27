import React ,{useID} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    placeholder = '',
    className = '',
    id = useID(),
    ...props}, ref) {
        return (
            <div className={`flex flex-col ${className}`}>
                {label && <label htmlFor={id} className="mb-2 text-sm font-medium">{label}</label>}
                <input
                    ref={ref}
                    type={type}
                    placeholder={placeholder}
                    className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...props}
                />
            </div>
        )
})

export default Input
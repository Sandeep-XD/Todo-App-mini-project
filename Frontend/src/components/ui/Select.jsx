import React from 'react'

const Select = ({
    options = [],
    value,
    onChange,
    className = '',
    placeholder = 'Select an option',
    ...props
},ref) => {
    const id = React.useId();
  return (
    <select
      className={`px-4 py-2 rounded ${className}`}
      value={value}
      onChange={onChange}
      {...props}
      ref={ref}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
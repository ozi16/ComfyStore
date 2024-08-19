import React from 'react'

const FormCheckbox = ({ label, name, defaulValue, size }) => {
  return (
    <div className='form-control items-center'>
      <label htmlFor={name} className='label cursor-pointer'>
        <span className='capitalize label-text'>{label}</span>
      </label>
      <input type="checkbox" name={name} defaultChecked={defaulValue} className={`checkbox checkbox-primary ${size}`} />
    </div>
  )
}

export default FormCheckbox
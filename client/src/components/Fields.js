import React from 'react'
export default ({ input, label }) => {
    return (
        <div className="input-field ">
            <label>{label}</label>
            <input {...input} className='validate' required />

        </div>
    )
}
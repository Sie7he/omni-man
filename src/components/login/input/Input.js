import React from 'react';

export const Input = ({attribute, handleChange, param}) => {
    return (
        <div className='mb-3'>
            <input 
                id={attribute.id}
                name={attribute.name}
                placeholder={attribute.placeholder}
                type={attribute.type}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className={param ? 'input-error' : 'regular-style'}
            />
        </div>
    )
}

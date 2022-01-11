/** @format */

import React, { useState } from 'react';

const FormInput = props => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, ...inputProps } = props;

  const handleFocus = e => {
    setFocused(true);
  };
  return (
    <div className='formInput'>
      <label className='label' htmlFor=''>
        {label}
      </label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
        focused={focused.toString()}
      />
      <span className='error'>{errorMessage}</span>
    </div>
  );
};

export default FormInput;

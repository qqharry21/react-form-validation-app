/** @format */

import React, { useState, useRef } from 'react';
import FormInput from './FormInput';

const FormContainer = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    birthday: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      label: 'Username',
      errorMessage: "Username should be 3-16 characters and shouldn't include special characters",
      pattern: '^[a-zA-Z0-9]{3,16}$',
      required: true,
      autoComplete: 'family-name',
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      label: 'Email',
      errorMessage: 'It should be a valid email address',
      required: true,
      autoComplete: 'email',
    },
    {
      id: 3,
      name: 'fullName',
      type: 'text',
      placeholder: 'Full Name',
      label: 'Full Name',
      errorMessage: 'Only letters and spaces are allowed',
      required: true,
      autoComplete: 'name',
    },
    {
      id: 4,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: 'Birthday',
      autoComplete: 'bday',
    },
    {
      id: 5,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least one number and one special character',
      pattern: '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
      required: true,
      autoComplete: 'new-password',
    },
    {
      id: 6,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      label: 'Confirm Password',
      errorMessage: "Password don't match",
      pattern: values.password,
      required: true,
      autoComplete: 'new-password',
    },
  ];

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  /**  useRef can't prevent re-rendering */
  // const usernameRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    // const formData = new FormData(e.target);
    // console.log(Object.fromEntries(formData.entries()));
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      {/* <FormInput ref={usernameRef} placeholder='UserName' /> */}
      <h1 className='title'>Register</h1>
      {inputs.map(input => (
        <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange} />
      ))}
      <button>Submit</button>
    </form>
  );
};

export default FormContainer;

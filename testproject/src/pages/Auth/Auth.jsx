import React from 'react';
import './Auth.css';

const Auth = (props) => {
  return (
    <section className='auth-form'>{props.children}</section>
  )
}

export default Auth;
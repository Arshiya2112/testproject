import React from 'react';
import './Button.css';
import { Link } from "react-router-dom";

const Button = ({
    design, mode, onClick, disabled, loading, type='button', link, children
}) => {
  const buttonContent = loading ? 'Loading...' : children;

  const buttonClasses = [
    'button',
    `button--${design}`,
    `button--${mode}`
  ].join(' ');

  return !link ? (
    <button
    className={buttonClasses}
    onClick={onClick}
    disabled={disabled || loading}
    type={type}
    >
        {buttonContent}
    </button>
  ) : (
    <Link className={buttonClasses} to={link}>
        {buttonContent}
    </Link>
  );
};

export default Button;
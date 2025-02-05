import React from "react";
import "./Input.css";

const Input = (props) => {
  const inputClasses = [
    !props.valid ? "invalid" : "valid",
    props.touched ? "touched" : "untouched",
  ].join(" ");

  return (
    <div className="input">
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      {props.control === "input" && (
        <input
          className={inputClasses}
          type={props.type}
          id={props.id}
          required={props.required}
          value={props.value}
          placeholder={props.placeholder}
          onChange={(e) =>
            props.onChange(props.id, e.target.value, e.target.files)
          }
          onBlur={props.onBlur}
        />
      )}

      {props.control === "textarea" && (
        <textarea
          className={inputClasses}
          id={props.id}
          rows={props.rows}
          required={props.required}
          value={props.value}
          onChange={(e) => props.onChange(props.id, e.target.value)}
          onBlur={props.onBlur}
        />
      )}
    </div>
  );
};

export default Input;

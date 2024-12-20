import React from "react";
import "./Input.css";

const FilePicker = (props) => {
  const inputClasses = [
    !props.valid ? "invalid" : "valid",
    props.touched ? "touched" : "untouched",
  ].join(" ");

  return (
    <div className="input">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={inputClasses}
        type="file"
        id={props.id}
        onChange={(e) =>
          props.onChange(props.id, e.target.value, e.target.files)
        }
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default FilePicker;

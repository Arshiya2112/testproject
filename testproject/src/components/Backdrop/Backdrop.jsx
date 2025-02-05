import React from 'react';
import ReactDOM from 'react-dom';
import './Backdrop.css';

const Backdrop = (props) => {
    ReactDOM.createPortal(
        <div className={['backdrop', props.open?'open':''].join('')}
            onClick={props.onClick}>
        </div>,
        document.getElementById('backdrop-root')
    );
};
  

export default Backdrop;
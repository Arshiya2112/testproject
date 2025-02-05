import React from 'react'
import './Paginator.css';

const Paginator = (props) => {
  return (
    <div className='paginator'>
        {props.children}
        <div className='paginator__controls'>
            {props.currentPage > 1 && (
                <button className='paginator__control' onClick={props.onPrevious}>
                    Previous
                </button>
            )}
            {props.currentPage<props.lastPage && (
                <button className='paginator__control' onClick={props.onNext}>
                    Next
                </button>
            )}
        </div>
    </div>
  );
};

export default Paginator;
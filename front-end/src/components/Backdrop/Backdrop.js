import React from 'react';
import './Backdrop.css';

const Backdrop = ({showModal}) =>{
    return (
       showModal ?  <div className="Backdrop"></div> : null
    )
};

export default Backdrop;
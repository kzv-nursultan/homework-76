import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';
import {Button} from 'reactstrap';

const Modal = props => {

    return(
       <div>
            <Backdrop showModal = {props.showModal}/>
             <div className="Modal" 
                    style={{transform: props.showModal ? 'transformY(0)': 'transformY(-100vh)',
                    opacity: props.showModal ? '1' : '0'}}>
                    <div>
                        <h3>Input your name: </h3>
                    </div>

                   <p>
                        <input 
                        onChange={(e)=>props.modalChange(e)}
                        value={props.value}/> 
                   </p>

                   <p>
                        <Button 
                        onClick={props.closeModalWindow}
                        >
                            Save
                         </Button> 
                   </p>  
            </div>
       </div>
    )
};

export default Modal;
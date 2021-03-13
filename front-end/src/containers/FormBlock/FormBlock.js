import React, {useState} from 'react';
import {Button} from 'reactstrap';
import Modal from '../../components/Modal/Modal';

const FormBlock = props => {
    const [message, setMessage] = useState();
    const [author, setAuthor] = useState('Nurs')
    const [showModal, setShowModal] = useState(false)


    const ShowModalWindow = () => {
        setShowModal(true);
    }

    const closeModalWindow = () => {
        setShowModal(false);
    };



    const messageTyping = e => {
        setMessage(e.target.value);
    };

    const postMessage = async () =>{
        const data = new URLSearchParams();
        data.set('message', message);
        data.set('author', author);

        const response = await fetch(props.url, {
        method: 'post',
        body: data,
        });
        console.log(response);
    };

    const modalChangeName = e => {
        setAuthor(e.target.value);
    }

    return(
        <>
            <div className="m-3 d-flex justify-content-evenly ">
                <div className="input-group">
                    <span className="input-group-text">Message</span>
                    <textarea 
                    className="form-control" 
                    aria-label="With textarea"
                    onChange={messageTyping}></textarea>
                </div>
                <Button 
                color="secondary"
                onClick={postMessage}
                disabled={false}>
                    SEND
                </Button>

                <Modal
                showModal={showModal}
                closeModalWindow={closeModalWindow}
                modalChange={modalChangeName}
                value={author}/>
            </div>
            <p className='text-center'>
                <Button 
                color="danger"
                onClick={ShowModalWindow}>
                    Edit Profile
                </Button>
            </p>
        </>
    );
};

export default FormBlock;
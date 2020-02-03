import React from 'react';

function Modal({}){
    return (
        <div className='modal_container'>
            <div className='modal_message_box'>
                <img src='' ></img>
                <div class='modal_text'>
                    Do you want to send an order request to Magliflex?
                </div>
            </div>
        </div>
    )
}

Modal.defaultProps= {

};
export default Modal;
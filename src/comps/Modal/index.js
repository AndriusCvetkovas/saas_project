import React from 'react';
import Button from '../Button';
function Modal({mark, message, buttons}){
    var img = require("../../imgs/icon-success.png");
    if(mark == 'checkmark'){
        img = require("../../imgs/icon-success.png");
    } else if (mark == 'question'){
        img = require("../../imgs/icon-question.png");
    }
    var but = <Button
    type='shadowBlue'
    text='Ok'
    wide={true}
    onClick ={()=>{alert('Sort')}}
    />;
    var but2 ='';
    if(buttons == 1) {
        but = <Button
        type='shadowBlue'
        text='Ok'
        wide={true}
        onClick ={()=>{alert('Sort')}}
    />;
    }else {
        but2 = <Button type='borderBlue' text='cancel' wide={true} onClick={()=>{alert('cancelled')}}/>
    }
    return (
        <div className='modal_container'>
            <div className='modal_message_box'>
                <img src={img} ></img>
                <div class='modal_text'>
                    {message}
                </div>
                <div className='buttons'>
                    {but}
                    {but2}
                </div>
                
            </div>
        </div>
    )
}

Modal.defaultProps= {
    message: 'default',
    buttons: 1
};
export default Modal;
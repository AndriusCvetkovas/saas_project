import React from 'react';
import Button from '../Button';
function ModalCard({mark, message, buttons, setIsOpen, setIsOpen2, modalIsOpen2, setIsOpen3}){
    var img = require("../../imgs/icon-success.png");
    if(mark == 'checkmark'){
        img = require("../../imgs/icon-success.png");
    } else if (mark == 'question'){
        img = require("../../imgs/icon-question.png");
    }
    if(setIsOpen2 || setIsOpen3){
        var but = <Button
        type='shadowBlue'
        text='Ok'
        wide={true}
        onClick ={()=>setIsOpen2(!modalIsOpen2)}
        />;
    }else {
        var but = <Button
        type='shadowBlue'
        text='Ok'
        wide={true}
        onClick ={()=>setIsOpen3(false)}
    />;
    }
    
    var but2 ='';
    
    if(buttons == 1) {
        but = <Button
        type='shadowBlue'
        text='Ok'
        wide={true}
        onClick ={()=>setIsOpen(false)}
    />;
    }else {
        if(setIsOpen){
            but2 = <Button type='borderBlue' text='Cancel' wide={true} onClick={()=>setIsOpen(false)}/>
        }else {
            but2 = <Button type='borderBlue' text='Cancel' wide={true} onClick={()=>setIsOpen3(false)}/>
        }
        //but2 = <Button type='borderBlue' text='Cancel' wide={true} onClick={()=>setIsOpen3(false)}/>
        
    }
    return (
        <div className='modal_container'>
            <div className='modal_message_box'>
                <img src={img} ></img>
                <div class='modal_text'>
                    {message}
                </div>
                <div className='buttons'>
                    {but2}
                    {but}
                </div>
                
            </div>
        </div>
    )
}

ModalCard.defaultProps= {
    message: 'default',
    buttons: 1
};
export default ModalCard;
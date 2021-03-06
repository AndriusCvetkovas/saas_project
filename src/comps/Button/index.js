import React from 'react';

function Button({type, wide, text, onClick}){
    var cn = 'button';
    if(wide ===true){
        cn ='button wide'
    }
    if(type === 'blue'){
        cn = 'button button_blue';
        if(wide === true){
            cn += ' wide';
        }
    }
    if(type === 'borderBlue'){
        cn = 'button border_blue';
        if(wide === true){
            cn += ' wide';
        }
    }
    if(type === 'shadowBlue'){
        cn = 'button button_blue button_shadow'
        if(wide === true){
            cn += ' wide';
        }
    }
    if(type === 'delete'){
        cn = 'delete'
    }

    if(type === 'longwideshadowBlue'){
        cn = "longwideBlue"
    }

    return (
    <button className={cn} onClick={onClick}>{text}</button>
    )
}

Button.defaultProps = {
    type: '',
    wide: false,
    text: 'text'
};
export default Button;
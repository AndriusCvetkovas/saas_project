import React from 'react';

function Button({type, wide, text}){
    var cn = 'button';
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

    return (
    <button className={cn}>{text}</button>
    )
}

Button.defaultProps = {
    type: '',
    wide: false,
    text: 'text'
};
export default Button;
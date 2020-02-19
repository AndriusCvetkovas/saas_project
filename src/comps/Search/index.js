import React from 'react'

function Search({shadow, wide, showplaceholder, placeholder}){
    var cn ='input'
    if(shadow){
        cn += ' shadow'
    }
    if(wide){
        cn += ' large'
    }

    var ph= ''
    if(showplaceholder){
        ph = placeholder;
    }
    return(
        <div>
            <input className={cn} type='text' placeholder={ph} ></input>
            <img src={require('../../imgs/icon-search.png')} className='icon'/>
        </div>
    )
}

Search.defaultProps = {

}
export default Search;
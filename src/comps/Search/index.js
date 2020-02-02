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
        </div>
    )
}

Search.defaultProps = {

}
export default Search;
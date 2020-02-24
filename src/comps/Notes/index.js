import React from 'react';

function Notes({content, placeholder}){
    return(
        <div className='notes_container'>
            <input type ='text' name='content' value={content} placeholder={placeholder}></input>
        </div>
    )
}
Notes.defaultProps = {
    content: 'default'
}
export default Notes;
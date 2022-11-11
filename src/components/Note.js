import {MdDeleteForever} from 'react-icons/md'  //*package for deleting the note
import React from 'react'
//!It contains an individual note list
const Note = () => {
    return (
        <div className='note'>
            {/* Text content */}
            <span>Hello! this is our first note! Hurray!</span> 
           
            {/* All the footer elements */}
            <div className="note-footer">   
                <small>13/04/2021</small>  
                <MdDeleteForever className='delete-icon' size='1.3em'/>
            </div>
        </div>
    )
};
export default Note;
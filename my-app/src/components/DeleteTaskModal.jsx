import React from 'react'


function DeleteTaskModal(){
    return(
        <>
             <dialog>
                <h4>Delete this task?</h4>
                <p className='light--text'>Lorem, ipsum dolor sit amet consectetur 
                adipisicing elit. Est suscipit reprehenderit amet eveniet hic at nulla incidunt debitis dolorem provident?
                </p>

                <div>
                    <button className='deleteBtn'>Delete</button>
                    <button className='cancelBtn'>Cancel</button>
                </div>
            </dialog>
        </>
    )
}


export default DeleteTaskModal
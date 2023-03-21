import React from 'react'


function DeleteTaskModal(){

    return(
        <>
             <dialog>
                <h3>Delete this task?</h3>
                <p className='light--text'>Lorem, ipsum dolor sit amet consectetur 
                adipisicing elit. Est suscipit reprehenderit amet eveniet hic at nulla incidunt debitis dolorem provident?
                </p>

                <div>
                    <button className='deleteBtn'>Delete</button>
                    <button className='cancelBtn'>Cancel</button>
                </div>
            </dialog>
            {/* <button onClick={openModal}></button> */}
        </>
    )
}


export default DeleteTaskModal
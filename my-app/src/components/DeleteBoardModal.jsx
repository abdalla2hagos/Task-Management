import React from 'react'

function DeleteBoardModal(){
    return(
        <>
            <dialog>
                <h4>Delete this board?</h4>
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

export default DeleteBoardModal
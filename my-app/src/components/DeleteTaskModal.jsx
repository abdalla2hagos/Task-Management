import React, {useRef} from 'react'


function DeleteTaskModal(){

    const modal = useRef()

    function openModal(){
        modal.current.showModal()
    }

    return(
        <>
             <dialog ref={modal} className='dialog' >
                <h3 className='modal--title orangeText--1 fs-1-2 fw--bold'>Delete this task?</h3>

                <p className='modal--text grayText--1'>Lorem, ipsum dolor sit amet consectetur 
                adipisicing elit. Est suscipit reprehenderit amet eveniet hic at nulla incidunt debitis dolorem provident?
                </p>

                <div className='flex--delete fw--medium'>
                    <button className='deleteBtn whiteText orangeBackground--1'>Delete</button>
                    <button className='cancelBtn purpleText--1'>Cancel</button>
                </div>
            </dialog>
            <button onClick={openModal}>open modal</button>
        </>
    )
}


export default DeleteTaskModal
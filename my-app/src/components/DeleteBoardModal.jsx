import React, {useRef} from 'react'

function DeleteBoardModal(){
    const modal = useRef()

    function openModal(){
        modal.current.showModal()
    }
    return(
        <>
            <dialog ref={modal} className='dialog' aria-labelledby='modal_title15' id='dialog_deleteBoard'>
                <h2 className='modal--title orangeText--1 fs-1-2 fw--bold' id='modal_title5'>Delete this board?</h2>

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

export default DeleteBoardModal
import React, {useState, useRef, useEffect} from 'react'

function EditBoardModal(){

    const modal = useRef()

    function openModal(){
        modal.current.showModal()
    }
   

    useEffect(()=>{
        modal.current.addEventListener('cancel', (e)=> e.preventDefault())
    },[])

    return(
        <>
            <dialog ref={modal} className='dialog' aria-labelledby='modal_title2' id='dialog_editBoard'> 
                <h2 className='modal--title fw--bold fs-1-2' id='modal_title2'>Edit Board</h2>

                <form className='grid'>

                    <div className='grid--flow'>
                        <label className='fw--bold grayText--1'>Board Name</label>
                        <input className='fs--0-875' type='text' name='editBoardName' placeholder='e.g. Web Design'/>
                    </div>

                    <div>
                        <label className='fw--bold grayText--1'>Board Columns</label>

                        <div className='flex--flow'>
                            <input className='fs--0-875 text--input' type='text' name='editBoardColumns' placeholder='e.g. ToDo'/>
                            <button className='removeItemIcon'>
                                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>
                            </button>
                        </div>

                        <div className='flex--flow'>
                            <input className='fs--0-875 text--input' type='text' name='editBoardColumns' placeholder='e.g. Doning'/>
                            <button className='removeItemIcon'>
                                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>
                            </button>
                        </div>

                        
                        <button className='light--Button purpleText--1 grayBackground--3 fw--bold addBtn'>
                            <svg className='Plus--icon purpleText--1' width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="var(--clr-purple-1)" d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"/></svg>
                            Add New Column
                        </button>
                    </div>
                </form>

                <button className='dark--Button whiteText purpleBackground--1'>Save Changes</button>
            </dialog>

            <button onClick={openModal}>open modal</button>
        </>
    )
}


export default EditBoardModal
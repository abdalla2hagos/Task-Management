import React, {useState, useRef, useEffect} from 'react'

function EditBoardModal(){

    // const modal = useRef(null)

    // function openModal(){
    //     modal.current.showModal()
    // }
    // function handlChange(e){
    //     e.preventDefault()
    //     modal.current.close()
    // }

    // useEffect(()=>{
    //     modal.current.addEventListener('cancel', (e)=> e.preventDefault())
    // },[])

    return(
        <>
            {/* <dialog ref={modal}> */}
            <dialog> 
                <h3 className='modal--Title'>Edit Board</h3>

                {/* <form onSubmit={handlChange}> */}
                <form>
                    <label>Board Name</label>
                    <input type='text' name='editBoardName' placeholder='e.g. Web Design'/>

                    <label>Board Columns</label>
                    <div>
                        <input type='text' name='editBoardColumns' placeholder='e.g. ToDo'/>
                        <button className='removeItemIcon'>
                            <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>
                        </button>
                    </div>
                    <div>
                        <input type='text' name='editBoardColumns' placeholder='e.g. Doning'/>
                        <button className='removeItemIcon'>
                            <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>
                        </button>
                    </div>

                    <button className='dark--Button'>Save Changes</button>
                </form>
                <button className='light-button'>
                    <svg className='Plus--icon' width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#FFF" d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"/></svg>
                    Add New Column
                </button>
            </dialog>

            {/* <button onClick={openModal}>open modal</button> */}
        </>
    )
}


export default EditBoardModal
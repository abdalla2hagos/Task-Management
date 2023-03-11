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
                            <img src="/icon-cross.svg" alt="" />
                        </button>
                    </div>
                    <div>
                        <input type='text' name='editBoardColumns' placeholder='e.g. Doning'/>
                        <button className='removeItemIcon'>
                            <img src="/icon-cross.svg" alt="" />
                        </button>
                    </div>

                    <button className='dark--Button'>Save Changes</button>
                </form>
                <button className='light-button'>
                    <img className='Plus--icon' src="/icon-add-task-mobile.svg" alt="plus sign icon" />
                    Add New Column
                </button>
            </dialog>

            {/* <button onClick={openModal}>open modal</button> */}
        </>
    )
}


export default EditBoardModal
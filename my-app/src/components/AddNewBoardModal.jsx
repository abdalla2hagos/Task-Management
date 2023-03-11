import React from 'react'


function AddNewBoardModal(){
    return(
        <>
            {/* <dialog ref={modal}> */}
            <dialog> 
                <h3 className='modal--title'>Add New Board</h3>

                {/* <form onSubmit={handlChange}> */}
                <form>
                    <label>Add New Board</label>
                    <input type='text' name='addBoardName' placeholder='e.g. Web Design'/>

                    <label>Board Columns</label>
                    <div>
                        <input type='text' name='addBoardColumns' placeholder='e.g. ToDo'/>
                        <button className='removeItemIcon'>
                            <img src="/icon-cross.svg" alt="" />
                        </button>
                    </div>
                    <div>
                        <input type='text' name='addBoardColumns' placeholder='e.g. Doning'/>
                        <button className='removeItemIcon'>
                            <img src="/icon-cross.svg" alt="" />
                        </button>
                    </div>

                    <button className='dark--Button'>Create New Board</button>
                </form>
                <button className='light--Button'>
                    <img className='Plus--icon' src="/icon-add-task-mobile.svg" alt="plus sign icon" />
                    Add New Column
                </button>
            </dialog>

            {/* <button onClick={openModal}>open modal</button> */}
        </>
    )
}

export default AddNewBoardModal
import React from 'react'


function EditTaskModal(){
    return(
        <>
            {/* <dialog ref={modal}> */}
            <dialog> 
                <h3 className='modal--title'>Edit Task</h3>

                {/* <form onSubmit={handlChange}> */}
                <form>
                    <label>Title</label>
                    <input type='text' name='editTaskName' placeholder='e.g. Take coffee break'/>

                    <label>Description</label>
                    <textarea name="editTaskDesc" cols="30" rows="5" placeholder='e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.'/>

                    <label>Subtasks</label>
                    <div>
                        <input type='text' name='editSubtask' placeholder='e.g. Make coffe'/>
                        <button className='removeItemIcon'>
                            <img src="/icon-cross.svg" alt="" />
                        </button>
                    </div>
                    <div>
                        <input type='text' name='addSubtask' placeholder='e.g. Drink coffee & smile'/>
                        <button className='removeItemIcon'>
                            <img src="/icon-cross.svg" alt="" />
                        </button>
                    </div>

                    <button className='dark--Button'>Create New Task</button>
                    
                    <label>Status</label>
                    <select name="" id="">
                        <option value="Doing">Doing</option>
                        <option value="ToDo">ToDo</option>
                    </select>
                </form>
                <button className='light--Button'>
                    <img className='Plus--icon' src="/icon-add-task-mobile.svg" alt="plus sign icon" />
                    Add New Subtask
                </button>
            </dialog>

            {/* <button onClick={openModal}>open modal</button> */}
        </>
    )
}

export default EditTaskModal
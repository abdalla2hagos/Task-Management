import React from 'react'


function EditTaskModal(){
    return(
        <>
            {/* <dialog ref={modal}> */}
            <dialog > 
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
                            <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>
                        </button>
                    </div>
                    <div>
                        <input type='text' name='addSubtask' placeholder='e.g. Drink coffee & smile'/>
                        <button className='removeItemIcon'>
                            <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>
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
                    <svg className='Plus--icon' width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#FFF" d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"/></svg>
                    Add New Subtask
                </button>
            </dialog>

            {/* <button onClick={openModal}>open modal</button> */}
        </>
    )
}

export default EditTaskModal
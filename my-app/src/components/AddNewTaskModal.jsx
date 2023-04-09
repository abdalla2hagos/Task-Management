import React, {useRef, useState, useEffect} from 'react'


function AddNewTaskModal(){
    const [formData, setFormData] = useState(form())

    useEffect(()=>{
        localStorage.setItem('item', JSON.stringify(formData))
    }, [formData])

    function form(){
        const storedFormValues = localStorage.getItem('item')
        if(!storedFormValues)return{
            addTaskTitle: '',
            addTaskDesc: '',
            addSubtask1:'',
            addSubtask2: '',
            status: ''
        }
        return JSON.parse(storedFormValues)
    }

    function handleForm(e){
        const {name, value} = e.target
        setFormData(prevForm => {
            return{
                ...prevForm,
                [name]: value
            }
        })
    }

    function handleFormSubmission(e){
        e.preventDefault()
        console.log(formData)
    }
    
    const modal = useRef()
    function openModal(){
        modal.current.showModal()
    }

    return(
        <>
            <dialog ref={modal} className='dialog' aria-labelledby='modal_title3' id='dialog_addNewTask'> 
                <h2 className='modal--title fs-1-2 fw--bold' id='modal_title3'>Add New Task</h2>

                <form className='grid' onSubmit={handleFormSubmission}>

                    <div className='grid--flow'>
                        <label className='fw--bold grayText--1'>Title</label>
                        <input className='fs--0-875' type='text' name='addTaskTitle' value={formData.addTaskTitle} onChange={handleForm} placeholder='e.g. Take coffee break'/>
                    </div>

                    <div className='grid--flow'>
                        <label className='fw--bold grayText--1'>Description</label>
                        <textarea className='fs--0-875' name="addTaskDesc" value={formData.addTaskDesc} onChange={handleForm} cols="30" rows="3" placeholder='e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.'/>
                    </div>

                    <div>
                        <label className='fw--bold grayText--1'>Subtasks</label>

                        <div className='flex--flow'>
                            <input className='fs--0-875 text--input' type='text' name='addSubtask1' value={formData.addSubtask1} onChange={handleForm} placeholder='e.g. Make coffe'/>
                            <button className='removeItemIcon'>
                                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>
                            </button>
                        </div>

                        <div className='flex--flow'>
                            <input className='fs--0-875 text--input' type='text' name='addSubtask2' value={formData.addSubtask2} placeholder='e.g. Drink coffee & smile'/>
                            <button className='removeItemIcon'>
                                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>
                            </button>
                        </div>

                        <button className='light--Button purpleText--1 grayBackground--3 fw--bold addBtn'>
                            <svg className='Plus--icon purpleText--1' width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="var(--clr-purple-1)" d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"/></svg>
                            Add New Subtask
                        </button>
                    </div>

                    <div className='grid--flow'>
                        <label className='fw--bold grayText--1'>Status</label>
                        <select name="status" id="" value={formData.status} onChange={handleForm}>
                            <option value="Doing">Doing</option>
                            <option value="ToDo">ToDo</option>
                        </select>
                    </div>
                </form>

                <button className='dark--Button whiteText purpleBackground--1'>Create Task</button>
            </dialog>

            <button onClick={openModal}>open modal</button>
        </>
    )
}

export default AddNewTaskModal
import React from 'react'

function Header(){
    return(
        <>
            <header className='header'>
                <div className='wrapper'>
                    <div className='flex__header'>
                        <img className='logo' src="/logo-mobile.svg" alt="kanban logo" />
                        <h1 className='primaryHeading hidden--item'>Kanban</h1>

                        {/* p only visible on desktop version cuz it is not a button anymore */}
                        {/* <p>Platform Launch</p> */}
                        <button className='boardTitle fw--bold blackText--1' aria-expanded='false'>
                            Platform Launch
                            <img className='boardTitle__arrow' src="/icon-chevron-up.svg" alt="arrow icon" />
                        </button>
                        
                        <button className='newTask purpleBackground--1' data-cursor='pointer'>
                            <img className='Plus--icon' src="/icon-add-task-mobile.svg" alt="plus sign icon" />
                           <span className='hidden--item'>Add New Task</span>
                        </button>
                        
                        <button className='ellipsis'>
                            <img className='ellipsis__Icon' src="/icon-vertical-ellipsis.svg" alt="vertical ellipsis icon" />
                        </button>
                    </div>  
                </div>
            </header>

            <header className='sideBar'>
                <div className='wrapper'>
                    <div className='flex__sideBar sideBar__wrapper grayText--1'>
                        <nav className='nav'>
                            <p className='nav__title fs--1'>ALL BOARDS ( 3 )</p>

                            <ul className='nav__menu grayText--1'>
                                <li className='nav__item'>
                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" fill="#828FA3"/></svg>
                                    <a href="" className='nav__link grayText--1 fs--0-875'>Platform Luanch</a>
                                </li>

                                <li className='nav__item'>
                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" fill="#828FA3"/></svg>
                                    <a href="" className='nav__link grayText--1 fs--0-875'>Marketing Plan</a>
                                </li>

                                <li className='nav__item'>
                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" fill="#828FA3"/></svg>
                                    <button className='nav__addBoard purpleText--1'>
                                        <svg  className='Plus--icon' width='12' height='12' xmlns='http://www.w3.org/2000/svg'><path d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"/></svg>
                                        Create New Board
                                    </button>
                                </li>
                            </ul>
                        </nav>

                        <div className='theme'>
                            <img className='theme__light' src="/icon-light-theme.svg" alt="light them icon" />
                            <img className='theme__dark' src="/icon-dark-theme.svg" alt="dark theme icon" />
                        </div>
                        
                        <button className='hideSidebar' aria-expanded='false'>
                            <img className='hideSidebar__icon' src="/icon-hide-sidebar.svg" alt="hide side bar icon" />
                            Hide Sidebar
                        </button>
                        {/* show side bar icon should be psudo class on the div */}
                    </div>    
                </div>
            </header>
        </>
    )
}

export default Header
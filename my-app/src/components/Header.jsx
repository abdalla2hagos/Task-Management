import React from 'react'

function Header(){
    return(
        <>
            <header className='header'>
                <div className='wrapper'>
                    <div className='flexHeader'>
                        <img className='logo' src="/logo-mobile.svg" alt="kanban logo" />
                        <h1 className='primaryHeading hiddenLogo'>Kanban</h1>

                        {/* p only visible on desktop version cuz it is not a button anymore */}
                        {/* <p>Platform Launch</p> */}
                        <button className='boardTitle' aria-expanded='false'>
                            Platform Launch
                            <img className='platformLaunch__arrow' src="/icon-chevron-up.svg" alt="arrow icon" />
                        </button>
                        
                        <button className='newTask'>
                            <img className='Plus--icon' src="/icon-add-task-mobile.svg" alt="plus sign icon" />
                           <span>Add New Task</span>
                        </button>

                        <img className='ellipsisIcon' src="/icon-vertical-ellipsis.svg" alt="vertical ellipsis icon" />
                    </div>  

                    <div className='sideBar'>
                        <nav className='nav'>
                            <p className='nav__title'>ALL BOARDS ( 3 )</p>
                            <ul className='nav__menu'>
                                <li className='nav__item'><a href="" className='nav__link'>Platform Luanch</a></li>
                                <li className='nav__item'><a href="" className='nav__link'>Marketing Plan</a></li>
                            </ul>
                            <button className='nav__addBoard'>
                                <img src="/icon-add-task-mobile.svg" alt="plus sign icon" className='Plus--icon'/> 
                                Create New Board
                            </button>
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
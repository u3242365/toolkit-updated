import React from "react";
import './MainContainer.css'

import { FaListAlt, FaClipboardCheck, FaPoll } from 'react-icons/fa';



const SideBar = () => {
    return (
        <aside id="sidebar">
                <div className='sidebar-title'>
                    <div className='sidebar-brand'>
                        <img src="./images/logo3.png" alt="My Icon" className="admin-logo"/>
                    </div>

                </div>

                <ul class="sidebar-list">
                    <li class="sidebar-list-item">
                        <a href="/dashboard" target="_blank">
                            <FaListAlt /> All Rubrics
                        </a>
                    </li>

                    <li class="sidebar-list-item">
                        <a href="/rubrics" target="_blank">
                            <FaClipboardCheck /> Export Rubric
                        </a>
                    </li>

                    <li class="sidebar-list-item">
                        <a href="/allsubject" target="_blank">
                            <FaPoll /> View by subject
                        </a>
                    </li>
    
                </ul>
        </aside>

    );
};

export default SideBar;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import GroupImage from '../assets/img/Group.png';
import Bell1 from '../assets/img/Bell 1.png';

import Code from '../assets/img/Code.png';
import Squares from '../assets/img/Squares four 1.png';
import Chat from '../assets/img/Chat.png';

import Folder from '../assets/img/Folder.png';
import Groups from '../assets/img/Groups.png';
import Logo from '../assets/img/Image 1858.png';
import Pie_chart from '../assets/img/Pie chart.png';

import Question_1 from '../assets/img/Question 1.png';
import Search from '../assets/img/Search.png';

import Avatar1 from '../assets/img/Avatar (1).png';
import { Link, NavLink } from 'react-router-dom';
import Overview from './Overview';
import Dashboard from './Dashboard';
function Menu() {
    return (
        <div className="flex flex-col h-screen">
            <img src={Logo} alt="Group" className="max-w-20 my-5" />

            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? 'flex items-center py-2 border-b text-pink-600 font-bold bg-pink-200'
                        : 'flex items-center py-2 border-b'
                }>
                <img src={Squares} alt="Group" className="max-w-20 mr-2" />
                <span>Dashboard</span>
            </NavLink>
            <NavLink
                to="/projects"
                className={({ isActive }) =>
                    isActive
                        ? 'flex items-center py-2 border-b text-pink-600 font-bold bg-pink-200'
                        : 'flex items-center py-2 border-b'
                }>
                <img src={Folder} alt="Group" className="max-w-20 mr-2" />
                <span>Projects</span>
            </NavLink>
            <NavLink
                to="/teams"
                className={({ isActive }) =>
                    isActive
                        ? 'flex items-center py-2 border-b text-pink-600 font-bold bg-pink-200'
                        : 'flex items-center py-2 border-b'
                }>
                <img src={Groups} alt="Group" className="max-w-20 mr-2" />
                <span>Teams</span>
            </NavLink>
            <NavLink
                to="/analytics"
                className={({ isActive }) =>
                    isActive
                        ? 'flex items-center py-2 border-b text-pink-600 font-bold bg-pink-200'
                        : 'flex items-center py-2 border-b'
                }>
                <img src={Pie_chart} alt="Group" className="max-w-20 mr-2" />
                <span>Analytics</span>
            </NavLink>

            <NavLink
                to="/messages"
                className={({ isActive }) =>
                    isActive
                        ? 'flex items-center py-2 border-b text-pink-600 font-bold bg-pink-200'
                        : 'flex items-center py-2 border-b'
                }>
                <img src={Chat} alt="Group" className="max-w-20 mr-2" />
                <span>Messages</span>
            </NavLink>
            <NavLink
                to="/integrations"
                className={({ isActive }) =>
                    isActive
                        ? 'flex items-center py-2 border-b text-pink-600 font-bold bg-pink-200'
                        : 'flex items-center py-2 border-b'
                }>
                <img src={Code} alt="Group" className="max-w-20 mr-2" />
                <span>Integrations</span>
            </NavLink>

            <div className="mt-auto border-t  pt-4">
                <img src={GroupImage} alt="Group" />
            </div>
        </div>
    );
}

export default Menu;

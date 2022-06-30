import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <nav>
                                <Link to="/">To-Do</Link>
                            </nav>
                            <nav>
                                <Link to="/Completed">Completed-Task</Link>
                            </nav>
                            <nav>
                                <Link to="/Calender">Calender</Link>
                            </nav>

                        </ul>
                    </div>
                    <Link className='mr-3 btn btn-ghost normal-case text-xl' to="/">Task-Management</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <nav>
                            <Link className='mr-3' to="/">To-Do</Link>
                        </nav>
                        <nav>
                            <Link className='mr-3' to="/Completed">Completed-Task</Link>
                        </nav>
                        <nav>
                            <Link className='mr-3' to="/Calender">Calender</Link>
                        </nav>
                    </ul>
                </div>
                <div class="navbar-end">
                    <Link className='mr-3 btn' to="/Placetask">Place Your Task</Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/'>Services</Link></li>
        <li><Link to='/'>Contact</Link></li>
    </>
    return (
        <div class="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0  text-white">
                    {menu}
                </ul>
            </div>
            <div class="navbar-end">
                <Link to='/' class="btn">Get appointment</Link>
            </div>
        </div>
    );
};

export default Header;
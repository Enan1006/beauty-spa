import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    const menu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/'>Contact</Link></li>
        {
            user ?
                <button onClick={logout} className='py-3 px-4 text-red-700 bg-red-200 rounded-lg'>Logout</button>
                :
                <div className='md:flex'>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Register</Link></li>
                </div>
        }
    </>
    return (
        <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0  text-white">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/' className="btn">Get appointment</Link>
            </div>
        </div>
    );
};

export default Header;
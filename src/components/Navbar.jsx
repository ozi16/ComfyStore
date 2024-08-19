import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks';
import { useState, useEffect } from 'react';

const themes = {
    winter: 'winter',
    dark: 'dark'
}

const getThemeFromLocalStorage = () => {
    return localStorage.getItem('theme') || themes.winter
}

const Navbar = () => {
    const [theme, setTheme] = useState(getThemeFromLocalStorage());
    const handleTheme = () => {
        const { winter, dark } = themes;
        const newTheme = theme === winter ? dark : winter;
        setTheme(newTheme);
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <nav className='bg-base-200'>
            <div className='navbar align-element '>
                <div className='navbar-start'>
                    {/*TITLE */}
                    <NavLink to='/' className='hidden lg:flex btn btn-primary text-3xl items-center '>C
                    </NavLink>
                    {/* DROP DOWN*/}
                    <div className='dropdown'>
                        <label tabIndex={0} className='btn btn-ghost lg:hidden'><FaBarsStaggered className='h-6 w-6' /></label>
                        <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box bg-base-200 w-52 z-[1] '>
                            <NavLinks />
                        </ul>
                    </div>
                </div>
                <div className='navbar-center lg:flex hidden  '>
                    <ul className='menu menu-horizontal'><NavLinks /></ul>
                </div>

                <div className='navbar-end'>
                    {/*THEME ICONS */}
                    <label className='swap swap-rotate'>
                        {/* this hidden checkbox controls the state */}
                        <input type='checkbox' onChange={handleTheme} />
                        {/* SUN ICON */}
                        <BsSunFill className='swap-on h-4 w-4' />
                        {/* MOON ICON */}
                        <BsMoonFill className='swap-off h-4 w-4' />

                    </label>
                    {/* CART LINKS*/}
                    <NavLink to='cart' className='btn btn-ghost btn-circle  '>
                        <div className='indicator'>
                            <BsCart3 className='h-6 w-6' />
                            <span className='badge badge-sm badge-primary indicator-item  '>8</span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
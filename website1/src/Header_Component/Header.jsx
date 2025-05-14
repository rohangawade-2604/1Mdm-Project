import React from 'react'
import { Link } from 'react-router-dom'
import LogoPart from "../assets/Logo.png"

const Header = () => {
    return (
        <>
            <section className='flex justify-between mx-25 mt-3'>
            <img src={LogoPart} alt="" className='' />
                <nav className='mt-4 list-none'>
                    <li className=''>
                        <Link to="/" className='ml-5 transition all duration-100 hover:text-red-600'>About Us</Link>
                        <Link to="/" className='ml-5 transition all duration-100 hover:text-red-600'>Our Story</Link>
                        <Link to="/" className='ml-5 transition all duration-100 hover:text-red-600'>Sell on 1MDM</Link>
                        <Link to="/" className='ml-5 transition all duration-100 hover:text-red-600'>Pricing</Link>
                    </li>

                </nav>
            </section>
        </>
    )
}

export default Header

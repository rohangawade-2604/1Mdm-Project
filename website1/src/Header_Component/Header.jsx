import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import LogoPart from "../assets/Logo.png"

const Header = () => {
  

    return (
        <>
            <section className='flex justify-between mx-25 mt-3 max-sm:mx-0'>
                <div className="logo">
                     <img src={LogoPart} alt="" className='' />
                </div>
           
                <nav className='mt-4 list-none'>
                    <ul  style={{maxHeight: "0px"}}>
                        <li  className='menulist transition-all duration-300 max-sm:flex max-sm:flex-col max-sm:absolute max-sm:top-40 max-sm:left-0 gap-4 max-sm:overflow-hidden max-sm:align-center max-sm:w-full max-sm:bg-white'>
                        <Link to="/" className='ml-5 transition all duration-100 hover:text-red-600'>About Us</Link>
                        <Link to="/" className='ml-5 transition all duration-100 hover:text-red-600'>Our Story</Link>
                        <Link to="/" className='ml-5 transition all duration-100 hover:text-red-600'>Sell on 1MDM</Link>
                        <Link to="/" className='ml-5 transition all duration-100 hover:text-red-600'>Pricing</Link>
                    </li>
                    </ul>
                   

                </nav>

                <div className="hamburg hidden max-sm:block" onClick={showMenu}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-cwMeLLj8MfIo3HoXJKFcOFB1g9U4DDMHA&s" alt="" className=' hidden max-sm:block max-sm:w-20 max-sm:h-15 max-sm:cursor-pointer'/>
                </div>
            </section>
        </>
    )
}

export default Header

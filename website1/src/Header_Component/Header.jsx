
import { Link } from 'react-router-dom'
import LogoPart from "../assets/Logo.png"
import { useState } from 'react'

const Header = () => {
    
     const [menuOpen, setMenuOpen] = useState(false);

     const toggleMenu = () => {
        setMenuOpen(!menuOpen);
     }

    return (
        <>
            <section className='flex justify-between mx-25 mt-3 max-sm:mx-5'>
                <div className="logo">
                     <img src={LogoPart} alt="" className='' />
                </div>
           
                <nav className='mt-4 list-none'>
                    <ul>
                        <li  className='menulist gap-4 max-sm:hidden '>
                            <Link to="/" className='ml-5 transition all duration-100 hover:text-red-600'>About Us</Link>
                            <Link to="/" className='ml-5 transition all duration-100 hover:text-red-600'>Our Story</Link>
                            <Link to="/" className='ml-5 transition all duration-100 hover:text-red-600'>Sell on 1MDM</Link>
                            <Link to="/" className='ml-5 transition all duration-100 hover:text-red-600'>Pricing</Link>
                        </li>
                    </ul>       
                </nav>

                {/* hamburger of the page below the page*/}

                {
                    menuOpen && (
                    <ul className='hidden max-sm:flex-col max-sm:block max-sm:absolute max-sm:top-40 max-sm:w-full max-sm: '>
                       <li className='max-sm:flex max-sm:flex-col max-sm:bg-white max-sm:gap-3'>
                            <Link to="/" className='ml-5 transition all duration-100 hover:text-red-600'>About Us</Link>
                            <Link to="/" className='ml-5 transition all duration-100 hover:text-red-600'>Our Story</Link>
                            <Link to="/" className='ml-5 transition all duration-100 hover:text-red-600'>Sell on 1MDM</Link>
                            <Link to="/" className='ml-5 transition all duration-100 hover:text-red-600'>Pricing</Link>
                       </li>
                    </ul>
                    )
                }


                {/* hamburger of the page */}
                <div className="hamburg hidden max-sm:block max-sm:cursor-pointer max-sm:w-15 max-sm:h-10 " onClick={toggleMenu} >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-cwMeLLj8MfIo3HoXJKFcOFB1g9U4DDMHA&s" alt="" className=' hidden max-sm:block max-sm:w-15 max-sm:h-15 max-sm:cursor-pointer'/>
                </div>

            </section>
        </>
    )
}

export default Header

import React from 'react'
import "./footer.css"
import fotte from "../assets/footer.png"

const Footer = () => {
    return (
        <>
        <div className="fotte-part">
             <div className='footer-part'>
                <img src={fotte} alt="" className='image1'/>
                <p style={{marginTop: "20px" , color: "gray" , width:"150px"}}>One Medical Device Market Place</p>
            </div>

            <div className='Platform'>
                <h1 className='heading'>Platform</h1>
                <h1 style={{marginTop:"20px", color: "gray"}}>Sell on 1MDM</h1>
                <h1 style={{marginTop:"20px", color: "gray"}}>Pricing</h1>
                <h1 style={{marginTop:"20px", color: "gray"}}>About Us</h1>
                <h1 style={{marginTop:"20px", color: "gray"}}>Our Story</h1>
                <h1 style={{marginTop:"20px", color: "gray"}}>Careers</h1>
                <h1 style={{marginTop:"20px", color: "gray"}}>Blogs</h1>
                <h1 style={{marginTop:"20px", color: "gray"}}>Brands</h1>
            </div>

            <div className='Press-Policies'>
                <div className='Press-Rooms'>
                    <h1 className='heading'>Press Rooms</h1>
                    <h1 style={{marginTop:"20px", color: "gray"}}>Images & B-roll</h1>
                </div>
                <div className='Policies'>
                    <h1 className='heading' style={{marginTop:"20px"}}>Policies</h1>
                    <h1 style={{marginTop:"20px", color: "gray"}}>Terms of Services</h1>
                    <h1 style={{marginTop:"20px", color: "gray"}}>Privacy Policy</h1>
                    <h1 style={{marginTop:"20px", color: "gray"}}>Delivery Information</h1>
                </div>
            </div>

            <div className='Reach-Us'>
                <h1 className='heading'>Reach Us</h1>
                <h1 style={{marginTop:"20px", color: "gray"}}>Corporate Information</h1>
                <h1 style={{marginTop:"20px", color: "gray"}}>Contact US</h1>
            </div>
        </div>
           
        </>
    )
}

export default Footer

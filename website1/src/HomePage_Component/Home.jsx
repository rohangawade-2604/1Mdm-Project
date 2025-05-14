import React from 'react'
import "./home.css"
import Header from '../Header_Component/Header'
import CountUp from 'react-countup'
import {Ecomm} from './Ecomm'
import {Product} from './Product'
import {Bussiness} from './Bussiness'
import { ToolBuilts } from './ToolBuilts'

const Home = () => {

  const Count = [
      {
        id:1,
        value: 26000000,
        p:"Active buyers globally"
      },

      {
        id:2,
        value: 400000,
        p:"product inquiries daily"
      },

        {
        id:3,
        value: 200,
        p:"countries and regions represented"
      },

  ]

  return (
    <>
      <div className="HomePage">

        <div className="Equipment-part mb-3">
            <div className="first">
                <h1>World's Largest Medical Equipment Market Place</h1>
            </div>
           
           <div className="button">
            <button >My account</button>
            <button style={{marginLeft:"20px"}}>Contact Us</button>
           </div>           
             
        </div>
      
        <hr style={{marginInline:"100px"}} className='text-gray-400' />
        
        
        {/*------ Header Part------ */}

      <Header/>

      {/*--Front Page--*/}

      <div className="Front-Page px-23 mt-2 flex py-23 justify-between">
        <div className="reach-millions ">
          <h1 className='text-[24px] font-semibold'>Sell on 1mdm.com</h1>
          <p className='text-[42px] font-semibold w-150'>Reach millions of B2B buyers globally</p>
          <button className='text-[16px] border-1 border-red-500 rounded-2xl p-2 bg-red-600 text-white mt-15 '>Start Selling</button>
          <button className='text-[16px] border-1 border-red-500 rounded-2xl p-2 mt-15 ml-3'>Chats with Consultants</button>
          
        </div>

        <div className="counting">
            {
              Count.map((el, id) => (
                <div key={id}>
                  <CountUp end={el.value} duration={5} className='font-semibold text-[28px] mt-4'/>
                  <h1 className='mb-10'>{el.p}</h1>
                </div>
              ))
            }
        </div>
      </div>

      {/*------------- E-Commerce Platforms------------------ */}

      <Ecomm/>

      {/*------- Product and Categories-------- */}

      <Product/>

      {/* ---------------Tools and Builds--------------- */}

      <ToolBuilts/>

      {/*-------- Business-Part---------- */}

      <Bussiness/>

      </div>
    </>
  )
}

export default Home

import React, { useState } from 'react'


export const ToolBuilts = () => {

    const [content, setContent] = useState(0);


    const Tools = [
        {
            id: 1,
            btn: "Custom Storefront",
            h1: "Set up a store that showcases your brand",
            p: "Differentiate yourself from the competition with a full store dedicated to your products- no coding or design skills necessary!",
            pic: "https://1mdm.com/about/assets/1mdm-product-1.png"
        },

        {
            id: 2,
            btn: "Advertising Tools",
            h1: "Increase exposure by up to 120% with a suite of smart advertising tools.",
            p: "Get your products placed in the right spots to be noticed by the exact audience you are targeting.",
            pic: "https://1mdm.com/about/assets/1mdm-product-image-4.png"
        },

        {
            id: 3,
            btn: "Data and Analytics",
            h1: "Optimize your every move with in-depth data and customer insights",
            p: "Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more.!",
            pic: "https://1mdm.com/about/assets/1mdm-product-2.png"
        },

        {
            id: 1,
            btn: "Customer Supports",
            h1: "Know you’re supported throughout your journey",
            p: "From onboarding help to online chats to local support during business hours and account optimization tips -- we’re here for you",
            pic: "https://1mdm.com/about/assets/1mdm-product-3.png"
        },

    ]

    const defaultStyle = {
        borderLeft: '7px solid white',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }

    const ActiveStyle = {
        borderLeft: '4px solid red',
        color: 'red',
    }

    return (
        <>
            <div className="parent-build mx-30">
                <h1 className='text-[32px] text-red-700 font-bold text-center mt-15'>Grow your business with a suite of tools built for you</h1>

                <div className="child-parent flex justify-around w-120 mt-30 h-80 gap-2">
                    <div>
                        <div className="build border-l-2 gap-3" >
                            {
                                Tools.map((el, id) => (
                                    <div className="btn_part w-100  border-l-2 " key={id} onClick={() => setContent(id)} style={content === id ? ActiveStyle : defaultStyle}>
                                        <h1 className='mb-5 cursor-pointer w-20 font-bold'>{el.btn}</h1>
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                    <div className="content_pic relative h-100 " >
                        {
                            Tools.length > 0 &&
                            <h1 className='flex flex-col text-[30px] mb-5 font-bold'>{Tools[content].h1} <br />
                                <h1 className='w-120 text-[20px] mt-5 font-semibold'>{Tools[content].p}</h1>
                                <img src={Tools[content].pic} alt={Tools[content].btn} className='h-80 w-150 flex absolute left-120 bottom-20' />
                            </h1>
                        }
                    </div>
                </div>




            </div>
        </>
    )
}



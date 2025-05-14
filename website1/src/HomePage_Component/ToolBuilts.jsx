import React, { useState } from 'react'
import { Connect } from 'vite';

export const ToolBuilts = () => {

    const [content , setContent] = useState(0);


    const Tools = [
        {
            id:1,
            btn: "Custom Storefront",
            h1:"Set up a store that showcases your brand",
            p:"Differentiate yourself from the competition with a full store dedicated to your products- no coding or design skills necessary!",
            pic: "https://1mdm.com/about/assets/1mdm-product-1.png"
        },

        {
            id:2,
            btn: "Advertising Tools",
            h1:"Increase exposure by up to 120% with a suite of smart advertising tools.",
            p:"Get your products placed in the right spots to be noticed by the exact audience you are targeting.",
            pic: "https://1mdm.com/about/assets/1mdm-product-image-4.png"
        },

        {
            id:3,
            btn: "Data and Analytics",
            h1:"Optimize your every move with in-depth data and customer insights",
            p:"Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more.!",
            pic: "https://1mdm.com/about/assets/1mdm-product-2.png"
        },

        {
            id:1,
            btn: "Customer Supports",
            h1:"Know you’re supported throughout your journey",
            p:"From onboarding help to online chats to local support during business hours and account optimization tips -- we’re here for you",
            pic: "https://1mdm.com/about/assets/1mdm-product-3.png"
        },



    ]

  return (
    <>
      <div className="parent-build">
        <h1>Grow your business with a suite of tools built for you</h1>

        <div className="build">
            {
                Tools.map((el , id) => (
                    <div className="btn_part border-2 w-100" key={id}>
                        <h1>{el.btn}</h1>
                    </div>
                ))
            }
        </div>

        <div className="content_pic">
            {
                Tools.length > 0 &&
                <h1>{Tools[content].h1}
                <span>{Tools[content].p}</span>
                <img src={Tools[content].pic} alt={Tools[content].btn} />
                </h1>
            }
        </div>
      </div>
    </>
  )
}



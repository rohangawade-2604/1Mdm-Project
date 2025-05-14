import React from 'react'

export const Ecomm = () => {
    return (
        <>
            <div className="Ecomm h-130 my-10 mx-23">
                <h1 className='text-[32px] font-semibold w-190 text-center align-center ml-80'>1mdm.com is a leading ecommerce platform that helps SMEs go global</h1>

                <div className="video-Content flex justify-evently mt-10 mx-18">
                    <div className="iframe-part">
                        <iframe width="640" height="315" src="https://www.youtube.com/embed/TN7iJyc5Uks?si=epyqZ1QejjI9uJ4X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className="content my-3 w-270 ml-5">
                        <p  className='mt-12 text-[17px] font-normal   '>Connect with millions of business buyers from around the world.</p>
                        <p className='mt-12 text-[17px] font-normal '>Get the tools and know-how to build a successful ecommerce presence  for your business.</p>
                        <p className='mt-12 text-[17px] font-normal '>Pocket more from each sale, with take rates as low as 0% in some cases.</p>
                    </div>
                </div>
            </div>
        </>
    )
}



import React, { useState } from 'react';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight, FaShoppingCart, FaHeadset } from 'react-icons/fa';

const Success = () => {
  const Partners = [
    {
      id: 1,
      h1: "Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional",
      img: "https://1mdm.com/about/assets/slider-1.webp"
    },
    {
      id: 2,
      h1: "Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company’s team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.",
      img: "https://1mdm.com/about/assets/slider-2.webp"
    },
    {
      id: 3,
      h1: "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line",
      img: "https://1mdm.com/about/assets/slider-3.webp"
    },
    {
      id: 4,
      h1: "LTA International Global Services LLC is a Florida-based export management company that sells top Medical device products from major US brands to importers and distributors around the globe. Founded in 1994 by Loyd, LTA's long-standing expertise in logistics and pricing has made it one of the most successful international trade businesses in the USA",
      img: "https://1mdm.com/about/assets/slider-4.webp"
    },
  ];

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? Partners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === Partners.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-gray-100 py-10 px-4">
      <h1 className="text-2xl font-semibold text-center mb-8 text-red-800">
        Success stories from 1mdm.com sellers
      </h1>

      <div className="relative max-w-3x1 mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full z-10 hover:bg-red-600"
        >
          <FaArrowLeft />
        </button>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <FaQuoteLeft className="text-red-500 text-3xl mb-4" />
          <p className="text-gray-700 text-base leading-relaxed">
            {Partners[index].h1}
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          <img
            src={Partners[index].img}
            alt="Partner"
            className="h-full w-full object-cover"
          />

          {/* Action Buttons */}
        
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full z-10 hover:bg-red-600"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Success;

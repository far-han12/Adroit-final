import React from 'react';

const ReviewCard = () => {
    return (
        <div>
                         <div className=" mx-auto mb-[20px]  bg-white shadow-[0px_0px_16px_0px_rgba(0,0,0,0.16)] rounded-lg p-6">
      <blockquote className="text-2xl font-[450] text-[#0C0C0C] mb-4">
        “Adroit didn't only help me with my admission, but helped me be a better person.”
      </blockquote>
      <button className="bg-[#EC632F3D] text-[#EC632F] font-[500] leading-6 text-left py-2 px-4 rounded w-full mb-4">
        Learn more
      </button>
      <hr className="w-full border-t-2  border-[#0000001F] my-[29px]" />
      <div className="divider "></div> 
      <div className="flex items-center">
        <img
          src="path-to-your-image.jpg"
          alt="Lilian Chepkoech Korir"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="font-semibold">Lilian Chepkoech Korir</p>
          <p className="text-sm">Class of 2026</p>
         
      <div>
        <img src="https://i.ibb.co/CPPTk2q/reed-college-lockup-red.png" alt="" />

      </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ReviewCard;
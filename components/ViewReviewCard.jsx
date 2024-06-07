import React from 'react';

const ViewReviewCard = () => {
    return (
        <div>
     <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className=" p-4">
        <img src='' alt="Lilian Chepkoech Korir" className="w-32 h-32 rounded-full mx-auto" />
      </div>
      <div className="p-8 text-left">
        <div>
        <h2 className="text-xl font-semibold ">Lilian Chepkoech Korir</h2>
        <p className="text-[#0C0C0C] font-[450]">Class of 2026</p>
        </div>
       <div>
       <p className=" mb-0 mt-8 font-[450] text-[#0C0C0C]">HOME</p>
        <p className="text-gray-700 mb-8 font-semibold">Dhaka, Bangladesh</p>
       </div>
       <div className='flex justify-start'>
       <img src="https://i.ibb.co/mqhTrnt/reed-college-lockup-red-1.png" alt="Cornell College" className="" />
       </div>
      </div>
    </div>
        </div>
    );
};

export default ViewReviewCard;
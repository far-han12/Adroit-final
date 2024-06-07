import React from 'react';

const ScholarCard = () => {
    return (
       <div>
    <div className="card card-side flex flex-col md:flex-row lg:flex-row mb-[27px]  bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/Xp3ZqKX/12.jpg" className='w-[287px] ' alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="text-[32px] text-[#0C0C0C] font-semibold">Lilian Chepkoech Korir</h2>
    <p className='text-[20px] font-[450] text-[#0C0C0C]'>Class of 2026</p>
    <div className=" flex flex-col">
      <p className='text-[#0C0C0C] text-base line-clamp-1 font-[450]'>Home</p>
      <p className='text-[#000] font-semibold text-xl'>Dhaka, Bangladesh</p>
    </div>
  </div>
</div>
       </div>
    
    );
};

export default ScholarCard;
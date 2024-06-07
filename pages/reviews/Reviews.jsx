import ReviewCard from '@/components/ReviewCard';
import React from 'react';

const Reviews = () => {
    return (
        <div className='grid mt-[51px] lg:mt-[80px] mb-[180px]  mx-auto max-w-[1170px] lg:grid-cols-3 gap-[26px]'>
           <div className='mr-28 text-center mx-auto md:col-span-2 lg:col-span-1'>
           <h2 className='font-bold text-[32px]'>Our Adroits say it themselves!</h2>
            <p className='text-xl font-[400]'>Learn about the Adroit experience from the students themselves. It has been life changing for all of them!</p>
           </div>
     <div className='col-span-2  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-[26px]'>

   <ReviewCard></ReviewCard>
     <ReviewCard></ReviewCard>
     <ReviewCard></ReviewCard>
     <ReviewCard></ReviewCard>
     <ReviewCard></ReviewCard>
     <ReviewCard></ReviewCard>

 
     </div>
        </div>
    );
};

export default Reviews;
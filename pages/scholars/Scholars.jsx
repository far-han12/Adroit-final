import ScholarCard from '@/components/ScholarCard';
import React, { useRef, useState } from 'react';
import { NavLink } from 'react-bootstrap';
// import {  NavLink } from 'react-router-dom';

const Scholars = () => {

  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedCollege, setSelectedCollege] = useState(null);

  const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015]; // Added more years for scroll demonstration
  const colleges = ['Barnard', 'Bates', 'Bowdoin', 'Amherst', 'Colby', 'Hamilton', 'Middlebury', 'Trinity', 'Wesleyan']; // Added more colleges for scroll demonstration

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  const handleCollegeClick = (college) => {
    setSelectedCollege(college);
  };

  const itemStyle = (isSelected) => ({
    padding: '12px 16px',
    backgroundColor: isSelected ? '#EC632F' : '#EC632F3D',
    color: isSelected ? '#F1F1F1' : '#EC632F',
    cursor: 'pointer',
    marginBottom: '5px',
    borderRadius: '8px',
  });

  // References for the scrollable containers
  const yearListRef = useRef(null);
  const collegeListRef = useRef(null);

  const handlePointerDown = (e, ref) => {
    ref.current.isPointerDown = true;
    ref.current.startY = e.clientY;
    ref.current.scrollTopStart = ref.current.scrollTop;
  };

  const handlePointerMove = (e, ref) => {
    if (!ref.current.isPointerDown) return;
    const diffY = e.clientY - ref.current.startY;
    ref.current.scrollTop = ref.current.scrollTopStart - diffY;
  };

  const handlePointerUp = (ref) => {
    ref.current.isPointerDown = false;
  };

  // Define styles using JavaScript objects
  const scrollableStyle = {
    listStyleType: 'none',
    padding: "0px",
    maxHeight: '200px',
    overflowY: 'auto',
    msOverflowStyle: 'none',  // IE and Edge
    scrollbarWidth: 'none',   // Firefox
  };

  const hideScrollbarStyle = {
    ...scrollableStyle,
    '&::-webkit-scrollbar': {
      display: 'none', // Safari and Chrome
    },
  };
  
    return (
        <div className='mt-[64px] mb-[293px] grid gap-x-[127px]  grid-cols-3 mx-auto max-w-[1170px]'>
 <div  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className='border shadow-[0px_0px_16px_0px_rgba(0,0,0,0.16)] bg-[#FFFFFF]  rounded-lg p-[20px]'>
     <div className='ml-4 mb-[16px]'>
     <h3  className='text-xl '>Filter Year</h3>
     </div>
        <ul
        
          ref={yearListRef}
          style={hideScrollbarStyle}
          onPointerDown={(e) => handlePointerDown(e, yearListRef)}
          onPointerMove={(e) => handlePointerMove(e, yearListRef)}
          onPointerUp={() => handlePointerUp(yearListRef)}
          onPointerLeave={() => handlePointerUp(yearListRef)}
        >
         
          {years.map((year) => (
            <li
              key={year}
              style={itemStyle(selectedYear === year)}
              onClick={() => handleYearClick(year)}
            >
              {year}
            </li>
          ))}
        </ul>
      </div>
      <div className='border shadow-[0px_0px_16px_0px_rgba(0,0,0,0.16)] bg-[#FFFFFF] rounded-lg p-[20px]'>
        <h3 className='ml-4 mb-[16px] text-xl'>Filter College</h3>
        <ul
          ref={collegeListRef}
          style={hideScrollbarStyle}
          onPointerDown={(e) => handlePointerDown(e, collegeListRef)}
          onPointerMove={(e) => handlePointerMove(e, collegeListRef)}
          onPointerUp={() => handlePointerUp(collegeListRef)}
          onPointerLeave={() => handlePointerUp(collegeListRef)}
        >
          {colleges.map((college) => (
            <li
              key={college}
              style={itemStyle(selectedCollege === college)}
              onClick={() => handleCollegeClick(college)}
            >
              {college}
            </li>
          ))}
        </ul>
      </div>
    </div>
      <div className='col-span-2'>
        <div className='flex justify-between items-center'>
          <h2 className="mb-0 font-['Open-sans'] text-[#51247A] text-5xl  " >Amherst <br /> <p>College</p></h2>
          <div className=''>


          <p className='mb-0 text-[24px]'>
          Admitted in 
          </p>
          <p className='flex justify-end font-bold text-[32px]'>2024</p>
          </div>
        </div>
          <hr className="w-full border-t-2 border-[#0000001F] mt-[21px] mb-[54px]" />
        
      <ScholarCard></ScholarCard>
      <ScholarCard></ScholarCard>
      </div>
     
        </div>
    );
};

export default Scholars;
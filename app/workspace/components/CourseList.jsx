'use client';

import React, { use, useState } from 'react'
import Image from 'next/image';
import { Button } from '@mui/material';
import AddNewCourseDialog from './AddNewCourseDialog';
const CourseList = () => {
    const [courseList, setCourseList]= useState([]);

  return (
    <div className='mt-10 '> 
      <h2 className='font bold text-3xl'>Course List</h2>
      {courseList?.length == 0 ? 
      <div className='flex item-centre items-center flex-col border rounded-xl mt-2 bg-gray-300'>
        <Image src= {'/Learning.png'} alt='learning' width={80} height={80} />
        <h2 className='my-2 text-lg font-bold '> Look like ypu havent created any courses yet</h2>
        <AddNewCourseDialog>
        <Button>+ Create youf first course</Button>
        </AddNewCourseDialog>
        </div> : 
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 justify-center items-center'> List of courses will be here </div>}
    </div>
  )
}

export default CourseList

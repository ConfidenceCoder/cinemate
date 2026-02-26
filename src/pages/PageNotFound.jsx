import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NotfoundImage from '../assets/notfoundimage.jpg'
export const PageNotFound = () => {
useEffect(()=>{
  document.title=`page not found/cinemate`;
})

  return (
    <section>
      <div className='text-center  pt-10'>
      <h4 className='text-6xl font-bold dark:text-white '>404, Oops!</h4>
      <img src={NotfoundImage} alt=""  className='w-sm py-8 mx-auto'/>
      <Link to={"/"}>
      <button className='bg-blue-500 rounded-lg px-3 py-2'> Back To Cinemate</button>
      </Link>
      </div>
    </section>
  )
}

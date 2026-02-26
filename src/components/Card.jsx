import React from 'react'
import { Link } from 'react-router-dom'
import backupimage from '../assets/imag.jpg'
export const Card = ({movi}) => {
  const {id,original_title,overview,poster_path} =movi;
  const image =poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}`:backupimage;
  return (
    
      <div className="bg-neutral-primary-soft inline-block  max-w-sm h-9xl  border dark:border-gray-600 border-gray-300 rounded-md ">
    <Link to={`/movie/${id}`} id={id}>
        <img className="rounded-base w-500 h-[550px]"  src={image} alt=""   />
    </Link>
    <div className='px-6 pt-2  pb-4'>
    <Link to={`/movie/${id}`}>
        <h5 className=" mb-2 text-2xl font-semibold tracking-tight dark:text-gray-200 text-heading">{original_title}</h5>
    </Link>
  <p className=" text-body dark:text-gray-400">{overview}</p>
    </div>
</div>

    
  )
}

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import backupimage from '../assets/download.png'
import StarIcon from '@mui/icons-material/Star';
import { useTitle } from '../hooks/useTitle';

export const MovieDetail = () => {
  const params = useParams();
  const [data, setData] = useState({});


  const { poster_path, release_date, vote_count, original_title, budget, genres, overview, vote_average, runtime, revenue,imdb_id } = data;

  useEffect(() => {
    async function fetchMovie() {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}`);
      const json = await response.json();
      setData(json);

    }
    fetchMovie();
  }, [])


useTitle(original_title)

  const image = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : backupimage;


  

  return (
    <section>
      <div className='flex justify-around flex-wrap py-7 '>
        <div className=''>
          <img src={image} alt="" className='w-sm rounded-md' />
        </div>

        <div className='w-2xl pt-3 max-sm:text-center'>
          <h4 className='text-5xl font-bold mb-4'>{original_title}</h4>
          <p >{overview}</p>
          <div className='py-8 flex flex-wrap '>
            {genres?.map((item) => (
              <span key={item.id} className='px-3 border m-2  rounded-md py-2 bg-blue-400 text-white dark:bg-gray-700 border-gray-400 max-sm:mx-auto'>{item.name}</span>
            ))}
          </div>
          <div>
            <h6 className=' mb-3 text-lg'><StarIcon sx={{ fontSize: 25 }} className='text-yellow-400 text-lg  pb-1.5' /> {`${vote_average} • ${vote_count}`} reviews</h6>
            <h6 className='mb-4'><span className='font-bold text-lg '>Runtime:</span> {runtime} min.</h6>
            <h6 className='mb-4'><span className='font-bold text-lg'>Budget:</span>  {budget}</h6>
            <h6 className='mb-4'><span className='font-bold text-lg'>Revenue:</span>  {revenue}</h6>
            <h6 className='mb-4'><span className='font-bold text-lg'>Release Date:</span> {release_date}</h6>
             <h6 className='mb-4'><span className='font-bold text-lg'>IMDB Code:</span> 
             <a href={`https://www.imdb.com/title/${imdb_id}`} target='_blank'> {imdb_id}</a></h6>
          </div>
        </div>
      </div>

    </section>
  )
}

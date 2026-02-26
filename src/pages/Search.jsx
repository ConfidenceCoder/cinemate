import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';
export const Search = ({apiPath}) => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const {data: movie=[]} =useFetch(apiPath,query);
    useTitle(`search result for ${query}/cinemate`)
console.log(movie);
  return (
    <div>
      <p className='text-3xl text-gray-700 dark:text-white py-7 px-9'> {movie.length===0 ? `No result found for ${query}`: `result for ${query}`}</p>
    <section className='ml-3 gap-3  flex justify-center max-w-7xl flex-wrap py-10  '>
      {
        movie.map((movi)=>(
          <Card key={movi.id} movi={movi} />
        ))
      }

    
    </section>
    </div>
  )
}

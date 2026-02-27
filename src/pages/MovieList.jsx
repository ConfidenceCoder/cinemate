import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';
export const MovieList = ({apiPath,title}) => {

  const {data: movie=[]} =useFetch(apiPath);
  useTitle(title);
  return (
    <div>
    <section className='  mx-auto gap-3 flex justify-center max-w-7xl flex-wrap py-10  '>
      {
        movie.map((movi)=>(
          <Card key={movi.id} movi={movi} />
        ))
      }

    
    </section>
    </div>
  )
}

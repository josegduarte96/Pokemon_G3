import React from 'react';
import { useState, useEffect } from 'react' ;

export default function Pagination({ handleIdChange, idPokemon }) {
  const [ pages, setPages ] = useState([])

  useEffect(() => {
    fetchPagination();
  }, [idPokemon])

  async function fetchPagination() {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${idPokemon - 2}&limit=3`
    const res = await fetch(url)
                  .then(response => response.json())
                  .catch(err => console.log(err))
                        
    setPages([res.results[0], res.results[2]])
  } 

  const previousPokemon = () =>{
    handleIdChange(idPokemon - 1)
  }

  const nextPokemon = () =>{
    handleIdChange(idPokemon + 1)
  }

  return (
    <div className='flex flex-row py-8 gap-4'>
      <a href='#' className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-800' onClick={previousPokemon}>
        <svg aria-hidden='true' className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z' clipRule='evenodd'></path></svg>
        { pages[0]
            ? `Nº ${idPokemon - 1} ${pages[0].name}`
            : ''
        }
      </a>
      <a href='#' className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-800' onClick={nextPokemon}>
        { pages[1]
            ? `Nº ${idPokemon + 1} ${pages[1].name}`
            : ''  
        }
        <svg aria-hidden='true' className='w-5 h-5 ml-2' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
      </a>
    </div>
  )
}

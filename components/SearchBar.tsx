import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {}

function SearchBar({}: Props) {
  return (
    <div className=' flex flex-row justify-between p-10'>
        <input placeholder='Search...' type="text" className='input' />
        <button>
            <MagnifyingGlassCircleIcon className='h-7 w-7' />
        </button>
        
    </div>
  )
}

export default SearchBar
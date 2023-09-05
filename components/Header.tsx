import { PhoneIcon } from '@heroicons/react/20/solid'
import { SunIcon } from '@heroicons/react/24/outline'
import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-10 flex items-start justify-between p-10 max-w-7xl 
    mx-auto z-20 xl:items-center'>

      
    
        <h1 className='top-24 tracking-[5px] uppercase text-gray-500 text-2xl'>Dev_detective</h1>
            
       <div className='flex justify-between'>
            
            <button className='top-24 tracking-[5px] uppercase text-gray-500 text-2xl'>
                Light On
            </button>
            <SunIcon className='top-24  text-2xl text-[#f1bb44] h-7 w-7 animate-pulse' />


       </div>

        

     



    </header>

  )
}

export default Header
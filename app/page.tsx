import Header from '@/components/Header'
import ProfileC from '@/components/ProfileC'
import SearchBar from '@/components/SearchBar'
import Image from 'next/image'
import { Profiler } from 'react'

export default function Home() {
  return (

    <main className=''>

      {/* Header */}

      <Header />

      {/* Searchbar */}
      <SearchBar />

      {/* profile container */}
      <ProfileC />

    </main>
    
  )
}

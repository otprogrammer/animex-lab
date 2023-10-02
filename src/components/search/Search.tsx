"use client"
import React, { useState } from 'react'

export default function Search() {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div>

<div className="search-container">
            {isOpen ? (
                 <button onClick={() => setIsOpen(false)} className=" open-button flex items-center bg-neutral-800 h-auto  p-2 gap-2 btn-ghost btn-circle">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                 <input placeholder='Search for animes' className='bg-transparent focus:outline-none' />
               </button>
            ) : (
                <button onClick={() => setIsOpen(true)} className="closed-button transfrom w-fit btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
            )}
        </div>

        
        
    </div>
  )
}

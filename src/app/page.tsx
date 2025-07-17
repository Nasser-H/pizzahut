'use client'
import React, { useContext } from 'react'
import { categories } from './_components/navbar/links'
import { CategoryContext } from '@/context/categoryContext'
import Image from 'next/image';

export default function Home() {
    const context = useContext(CategoryContext);
    if(!context) return null;
    const { category } = context;
    const matchedCategory = categories.find(cat => cat.link.includes(category));
  return <>
  <div dir='rtl' className='px-5 md:px-11 py-5'>
    <div className='border-b-2 flex gap-x-2'>
      <h1 className='font-extrabold text-2xl border-b-4 border-main w-fit pb-3'>{matchedCategory?.catName}</h1>
      <picture className='block size-10 overflow-hidden rounded-full'>
        {matchedCategory?.image &&        
        <Image 
          className='w-full' 
          width={50} 
          height={50} 
          src={matchedCategory?.image} 
          alt={matchedCategory?.catName} />
        }
      </picture>
    </div>
    <div className='flex justify-start flex-wrap gap-2 md:gap-4 pt-6 bg-slate-100'>
      {matchedCategory?.data.map((item,Index)=>    
      <div key={Index} className='w-full sm:w-[44%] md:w-[27%] mx-4  shadow-lg rounded-lg bg-white p-4'>
        <h1 className='font-medium'>{item.name}</h1>
        <p className='text-sm h-24 text-black/50 mt-4 font-light'>{item.description}</p>
        <picture className='block max-w-[172px] mx-auto relative'>
          <Image
            className='w-full'
            src={item.image}
            alt={item.name}
          />
          <p className='text-white absolute bottom-6 -left-4 bg-main px-2 py-1 rounded-s-full'>{item.price}.00EG</p>
        </picture>
      </div>
      )}
    </div>
  </div>
  </>
}

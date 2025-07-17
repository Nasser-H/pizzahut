'use client'
import React, { useContext, useState } from 'react'
import { categories } from './links';
import Image from 'next/image';
import { CategoryContext } from '@/context/categoryContext';

export default function CategorySlider() {

    const [page, setPage] = useState(0);
    const itemsPerPage = 6;
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const hasPrev = page > 0;
    const hasNext = endIndex < categories.length;
    const context = useContext(CategoryContext);
    if(!context) return null;
    const {setCategory} = context;
    function handelSlider(){
        if(hasNext){
            setPage(prev => prev + 1);
        }else if(hasPrev){
            setPage(prev => prev - 1);
        }
    }
  return <>
        <div className='relative mx-auto hidden lg:block'>
            <button
                className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white/50 size-8 flex justify-center items-center text-2xl font-bold border-main border text-main rounded-full z-10"
                onClick={()=> handelSlider()}>
                <span className='pb-1'>{hasNext ? '>': hasPrev ? '<' : ''}</span>
            </button>               
            <ul className='flex gap-x-2'>
                {categories.slice(startIndex, endIndex).map((category, index)=>
                    <li onClick={()=>setCategory(category.link)} className='cursor-pointer px-2 py-3 rounded-t-2xl hover:bg-main/[.08] group relative' key={index}>
                        <div className='flex items-center'>
                            {category.catName}
                            <picture className='block size-8 rounded-full overflow-hidden'>
                                <Image className='w-full' width={40} height={40} src={category.image} alt={category.catName} />
                            </picture>
                        </div>
                        <div className='h-1 absolute bottom-0 bg-main group-hover:block hidden -left-1 -right-1 rounded-t-full'></div>
                    </li>
                )}
            </ul>
      </div>
  </>
}

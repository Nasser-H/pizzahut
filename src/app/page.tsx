'use client'
import React, { useContext } from 'react'
import { CategoryContext } from '@/context/categoryContext'
import Image from 'next/image';
import useGetProducts from './_components/hooks/useGetProducts';
import Loading from './_components/loading/loading';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
};
export default function Home() {
    const context = useContext(CategoryContext);
    const category = context?.category || 'new';
    const {data, isLoading} = useGetProducts(category);
  return <>
  {isLoading? <Loading/>:
    <div dir='rtl' className='px-5 md:px-11 py-5'>
      <div className='border-b-2 flex gap-x-2'>
        <h1 className='font-extrabold text-2xl border-b-4 border-main w-fit pb-3'>{data?.category_name}</h1>
        <picture className='block size-10 overflow-hidden rounded-full'>
          {data?.category_img &&        
          <Image 
            className='w-full' 
            width={50} 
            height={50} 
            src={data?.category_img} 
            alt={data?.category_name} />
          }
        </picture>
      </div>
      <div className='flex justify-start flex-wrap gap-2 md:gap-4 pt-6 bg-[#fdf5f3]'>
        {data?.data.map((item: Product,index: number)=>    
        <div key={index} className='w-full sm:w-[44%] md:w-[27%] mx-4  shadow-lg rounded-lg bg-white p-4'>
          <h1 className='font-medium'>{item.name}</h1>
          <p className='text-sm h-24 text-black/50 mt-4 font-light'>{item.description}</p>
          <picture className='block max-w-[172px] mx-auto relative'>
            <Image
              className='w-full'
              src={item.img}
              alt={item.name}
              width={100}
              height={100}
              priority = {index == 0}
            />
            <p className='text-white absolute bottom-6 -left-4 bg-main px-2 py-1 rounded-s-full'>{item.price}.00EG</p>
          </picture>
        </div>
        )}
      </div>
    </div>
  }

  </>
}

'use client'
import Image from 'next/image'
import React, { useContext } from 'react'
import { categories } from './links'
import { CategoryContext } from '@/context/categoryContext'
import { motion } from 'framer-motion'

export default function Menu({ setOpenMenu}: { setOpenMenu:React.Dispatch<React.SetStateAction<boolean>>}) {

    const context = useContext(CategoryContext);
    if(!context) return null;
    const { setCategory } = context;
  return <>
    <motion.div
        className='bg-[#00000080] absolute inset-0 z-20 lg:hidden'
        initial={{ opacity:0 }}
        animate={{ opacity: 1}}
        transition = {{ duration:0.3 }}
        exit={{ opacity: 0 }}
    >
        <motion.div 
            className='custom-scroll bg-[#f7fafe] bottom-0 top-36 left-0 right-0 px-5 md:px-10 py-5 absolute rounded-t-3xl overflow-y-scroll'
            initial={{ opacity:0, y: 100 }}
            animate={{ opacity: 1, y:0 }}
            transition = {{ duration:0.3 }}
            exit={{ opacity: 0, y:100 }}           
        >
            <div className='flex items-center justify-between'>
                <h2 className='text-xl font-bold'>استكشف فئات القائمة</h2>
                <button onClick={()=>setOpenMenu(false)} className='text-2xl size-11 bg-white flex justify-center items-center shadow-lg rounded-xl'><i className="fa-solid fa-xmark"></i></button>
            </div>
            <div className='flex flex-wrap border mt-5'>
                {categories.map((category,Index)=>
                    <div key={Index} className='w-1/2'>
                        <div onClick={()=>{setCategory(category.link);setOpenMenu(false);}} className='flex text-right border gap-x-3 p-2 cursor-pointer'>
                            <picture className='block w-16 rounded-full overflow-hidden'>
                                <Image className='w-full' src={category.image} width={80} height={80} alt={category.catName}/>
                            </picture>
                            <div className='text-left space-y-2'>
                                <p className='font-semibold'>{category.count}</p>
                                <p className='text-black/70'>{category.catName}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    </motion.div>
  </>
}

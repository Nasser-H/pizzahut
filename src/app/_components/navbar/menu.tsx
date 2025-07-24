'use client'
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'
import { CategoryContext } from '@/context/categoryContext'
import { motion } from 'framer-motion'
import useGetCategories from '../hooks/useGetCategories'
import { useRouter } from 'next/navigation'

export default function Menu({ setOpenMenu}: { setOpenMenu:React.Dispatch<React.SetStateAction<boolean>>}) {
    useEffect(() => {
        document.body.classList.add('no-scroll');
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);
    const router = useRouter()
    const context = useContext(CategoryContext);
    const {data, isLoading} = useGetCategories();
    if (!context || isLoading || !data || !Array.isArray(data)) return null;
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
                {data.map((category,Index)=>
                    <div key={Index} className='w-1/2'>
                        <div onClick={()=>{setCategory(category.link);setOpenMenu(false);router.push('/')}} className='flex text-right border gap-x-3 p-2 cursor-pointer'>
                            <picture className='block size-16 rounded-full overflow-hidden'>
                                <Image className='w-full rounded-full' src={category.image} width={80} height={80} alt={category.name}/>
                            </picture>
                            <div className='text-left space-y-2'>
                                <p className='font-semibold'>{category.products_count}</p>
                                <p className='text-black/70'>{category.name}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    </motion.div>
  </>
}

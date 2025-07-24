'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../../../assets/images/Pizza Hut Red Logo HD Transparent Background - 1000x1000.png'
import Link from 'next/link'
import CategorySlider from './CategorySlider';
import Menu from './menu';
import { AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return <>
  <nav dir='rtl' className='px-5 md:px-11 py-2'>
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-x-2'>
        {!openMenu &&
          <button onClick={()=>setOpenMenu(true)} className='text-2xl text-main lg:hidden'>
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
        }
        <Link href={'/'}>
          <picture className='block w-14 sm:w-16 md:w-20'>
            <Image className='w-full' priority src={Logo} width={90} height={90} alt='pizza hut logo'/>
          </picture>
        </Link>
      </div>

      <CategorySlider/>
      <div className='flex items-center gap-x-4 ms-4'>
        {/* <Link href={'/about'} className='border-2 border-main px-2 py-1 rounded-full text-main hover:bg-main hover:text-white transition-all duration-200'>ENGLISH</Link> */}
        <Link href={'/about'} className='text-second border-2 border-[#6a6e7b1a] px-4 py-1 rounded-full hover:border-second transition-all duration-200'>من نحن</Link>
        <Link href={'/contact-us'} className='text-second border-2 border-[#6a6e7b1a] px-4 py-1 rounded-full hover:border-second transition-all duration-200'>تواصل معنا</Link>
      </div>
    </div>
    <AnimatePresence mode='wait'>
      {openMenu &&
        <Menu key="menu" setOpenMenu={setOpenMenu} />
      }
    </AnimatePresence>
  </nav>
  </>
}
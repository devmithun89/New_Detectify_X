import {useState} from 'react'

import {CgMenuRightAlt} from 'react-icons/cg';

import MainLogo from './../../assets/Images/DetectifyX.png'
function MobileHeader() {

    const [IsOpen,setIsOpen] =useState()
  return (
    <>
    <div className='bg-white  fixed w-screen py-8 md:py-0 flex z-[1] justify-between shadow-md items-center px-4 md:hidden h-[10%]'>
     <img className='w-40 ' src={MainLogo} alt="" />
      <div onClick={()=>setIsOpen(!IsOpen)}>
      <CgMenuRightAlt size={40}/>
       </div>
    </div>
    <div className={` bg-sliver md:hidden absolute  duration-500 ease-in-out flex justify-center items-start  h-[100%] w-full ${IsOpen ? "top-0":"top-[-100%]"} `}>
      <ul className='flex-col font-Jost py-10 pt-24 text-brown text-center '>
           <li className='pb-6 font-semibold text-4xl'>Our Tools</li>
        <li className='pb-4 font-medium text-2xl'>
            Ai Content Detector
        </li>
      </ul>
    </div>
    </>
  )
}

export default MobileHeader
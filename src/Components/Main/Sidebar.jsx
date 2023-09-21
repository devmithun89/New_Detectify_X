import React from 'react'

import MainLogo from './../../assets/Images/DetectifyX.png'

 import {VscTools}from 'react-icons/vsc';
 import {TbListSearch}from 'react-icons/tb';
function Sidebar() {
  return (
    <>
    <div className='md:bg-pink-400 hidden md:block fixed  md:h-screen md:w-[20%]'>
        <div className='h-[15vh] flex justify-center  items-center border-b-2  border-r-2  border-solid border-#E9EDF7  bg-white'>
         <img className='md:w-52' src={MainLogo} alt="" />
        </div>
        <div className='h-[85vh] bg-white'>
            <div className='w-full h-20 justify-center items-center gap-2 flex '>
                
                   <VscTools size={30}/>
                    <h2 className='font-Jost font-medium text-brown text-xl'>Our Tools</h2>
            </div>
            <div className='w-full border-l-4 border-solid border-primary bg-gray-200  flex '>
                <div className='w-[30%] flex justify-center items-center h-20' >
                   <TbListSearch size={30}/>
                </div>
                <div className='w-[70%] flex items-center '>
                    <h2 className='font-Jost font-medium text-brown text-xl'>Ai Content Detector</h2>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Sidebar
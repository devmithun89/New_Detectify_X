import {useState,useEffect} from 'react'

import ContentHeder from './ContentHeader/ContentHeder'

import ButtonsGroup from './../Content/Buttons/ButtonsGroup'

import Inputbox from './InputBox/Inputbox'

import InputSubBtn from './Buttons/Button'

import { aiPlusHuman, chatGpt ,GPT4, human ,bard} from './../Content/InputBox/dummy'

function Content() {
 
  const [value, setValue] =useState('')
  
  return (

    <>
  
    <div className='md:w-[80%] flex flex-col-reverse  md:flex-row  right-0  z-[-1] absolute w-full '>
      <div className='md:w-[80%] w-full py-4 md:py-6 md:px-6  px-4 flex-col  bg-white'>

     {/*========================================================
                       <======== Header ========>
        ========================================================*/}
    <div>
        <ContentHeder/>
    </div>

   {/* ======================================================= */}


   {/*========================================================
                 <======== Buttons Groups ========>
      ========================================================*/}
    <div className='flex gap-2 flex-wrap pt-10'>
     <ButtonsGroup onClick={() => setValue(chatGpt)} text="ChatGPT"/>
     <ButtonsGroup onClick={() => setValue(GPT4)} text="GPT4"/>
     <ButtonsGroup onClick={() => setValue(human)} text="Human"/>
     <ButtonsGroup onClick={() => setValue(bard)} text="AI+Human"/>
     <ButtonsGroup onClick={() => setValue(aiPlusHuman)} text="Bard"/>
    </div>
   {/* ======================================================= */}


   {/*========================================================
                 <======== Input Fields ========>
      ========================================================*/}

      <div>
       <Inputbox/>
      </div>
   {/* ======================================================= */}

    {/*========================================================
              <======== Input Submite Button ========>
      ========================================================*/}
   <div className='flex justify-end mt-4 xl:mr-44 '>

         <InputSubBtn/>

    </div>

 {/* ======================================================= */}
   </div>

   <div className='md:w-[20%] w-full  pt-20 md:pt-10 flex'>

    <img
    src="https://adespresso.com/wp-content/uploads/2020/05/image15-2.png"
    
    
    alt="ads" />

</div>


    </div>
    </>
  )
}

export default Content
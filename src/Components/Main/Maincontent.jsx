import React from 'react'

import Sidebar from './Sidebar'

import MobileHeader from './MobileHeader'
import Content from './Content'
function Maincontent() {
  return (
    <div className='w-screen flex flex-col md:flex-row  bg-blue-400'>
    <Sidebar/>
    <MobileHeader/>
    <Content/>
    </div>

  )
}

export default Maincontent
import React from 'react'

function Button({onSubmit, disabled}) {
  return (
    
    <div>
        <button disabled={disabled} onClick={() => onSubmit()} className={`py-3 px-8 font-Jost font-normal text-base text-white rounded-3xl ${disabled ? 'bg-slate-500' : 'bg-primary hover:bg-opacity-80'}   duration-500 hover:text-white border-lite.grey border-2 border-solid`}>Detect Ai Content</button>
  
    </div>
  )
}

export default Button
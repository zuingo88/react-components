import React from 'react';
import "tailwindcss/tailwind.css"

const TailwindComponent = () => {
  return (
    <div className='container p-2'>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center justify-around space-x-4">
        <div>
          <div className="text-xl font-medium text-primary">ChitChat</div>
          <p className="text-blue-450">You have a new message!</p>
        </div>
        <TailwindCSSButton>ciao</TailwindCSSButton>
      </div>
    </div>
  )
}

const TailwindCSSButton = (props) => {
  return (
    <button
      className='bg-blue-500 text-white font-medium px-4 py-2 border border-black rounded hover:bg-blue-600'
    >{props.children}</button>
  )
}

export default TailwindComponent
import React from 'react'

export default function CircleExercise() {
  return (
    <div className="App radial-blue min-h-screen grid place-content-center">
      <div className="bg-emerald-500 w-52 h-52 rounded-full grid place-content-center shadow-2xl" >
        <div className='bg-teal-200 w-32 h-32 rounded-full grid place-content-center'>
          <div className='bg-red-500 w-16 h-16 rounded-full'></div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import Header from '../components'


export default function Landing() {
  return (
    <>
      <Header />
      <main>
        {/* Check if section's padding looks decent in other devices/viewports */}
        <section className='pt-28 custom-max-width mx-auto hero text-white gap-y-5 flex flex-col items-center'>
          <div className='sm:w-full gap-y-11 flex-col flex md:w-2/4 mx-auto hero-text'>
            <h1 className='text-4xl md:text-3xl lg:text-6xl sm:text-4xl'>
              Hi, I’m TheDARKOMETER.
              <br />
              Full stack developer.
            </h1>
            <p className='leading-loose'>
              I like to create full stack web applications, create machine learning solutions, and I love to learn and to code.
            </p>
          </div>
          <div className='sm:w-full gap-y-11 flex-col flex md:w-2/4 mx-auto justify-center content-center'>
            <div className='mt-4 flex justify-center'>
              <button className='mr-4 btn-primary flex content-center justify-center'>Hire Me</button>
              <button className='btn-secondary flex content-center justify-center'>
                Browse Projects
                <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className='flex flex-col'>
            <h1>Ass</h1>
          </div>
        </section>
      </main>

    </>

  )
}

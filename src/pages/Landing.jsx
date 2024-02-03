import React from 'react'
import Header from '../components'
import GitHubLogo from '../assets/images/github-mark-white.svg'
import LinkedInLogo from '../assets/images/In-White-96.png'

export default function Landing() {
  return (
    <>
      <Header />
      <main>
        {/* Check if section's padding looks decent in other devices/viewports */}
        <section className='mt-28 custom-max-width mx-auto hero text-white gap-y-5 flex flex-col items-center'>
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
          <div className='mt-4 flex justify-center'>
            <button className='mr-4 btn-primary flex content-center justify-center'>Hire Me</button>
            <button className='btn-secondary flex content-center justify-center'>
              Browse Projects
              <span className="material-symbols-outlined ml-1">arrow_forward</span>
            </button>
          </div>
          <div className='mt-28 flex flex-wrap socials gap-12'>
            <figure className='GitHub-Link flex items-center gap-2 shrink-0'>
              <a href='https://github.com/TheDARKOMETER/'>
                <img src={GitHubLogo} alt='GitHub Logo' />
              </a>
              <figcaption>
                github.com/TheDARKOMETER/
              </figcaption>
            </figure>

            <figure className='GitHub-Link flex items-center gap-2 shrink-0'>
              <a href='https://linkedin.com/in/vonchezdev'>
                <img src={LinkedInLogo}></img>
              </a>
              <figcaption>
                linkedin.com/in/vonchezdev
              </figcaption>
            </figure>
          </div>
        </section>
      </main>

    </>

  )
}

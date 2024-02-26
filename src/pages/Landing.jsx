import React from 'react'
import Header from '../components'
import GitHubLogo from '../assets/images/github-mark-white.svg'
import LinkedInLogo from '../assets/images/In-White-96.png'
import MailLogo from '../assets/images/Email.png'
import RandomShape from '../assets/images/Vector.svg'
import RandomGuy from '../assets/images/someguy.svg'

export default function Landing() {
  return (
    <>
      <Header />
      <main>
        {/* Check if section's padding looks decent in other devices/viewports */}
        <section className='h-full mt-28 custom-max-width mx-auto hero text-white gap-y-5 flex flex-col items-center lg:h-screen'>
          <div className='sm:w-full gap-y-11 flex-col flex md:w-2/4 mx-auto hero-text'>
            <h1 className='h1-brand'>
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
          <div className='mt-16 sm:mt-48 flex-row md:flex socials gap-12'>
            <figure className='GitHub-Link flex items-center gap-2 shrink-0'>
              <a href='https://github.com/TheDARKOMETER/'>
                <img src={GitHubLogo} className='social-img' alt='GitHub Logo' />
              </a>
              <figcaption>
                github.com/TheDARKOMETER/
              </figcaption>
            </figure>
            <figure className='GitHub-Link mt-4 md:mt-0 flex items-center gap-2 shrink-0'>
              <a href='https://linkedin.com/in/vonchezdev'>
                <img src={LinkedInLogo} className='social-img'></img>
              </a>
              <figcaption>
                linkedin.com/in/vonchezdev
              </figcaption>
            </figure>
            <figure className='GitHub-Link mt-4 md:mt-0 flex items-center gap-2 shrink-0'>
              <a href='https://linkedin.com/in/vonchezdev'>
                <img src={MailLogo} className='social-img'></img>
              </a>
              <figcaption>
                linkedin.com/in/vonchezdev
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
      <div className='about-me bg-white flex flex-col-reverse sm:flex-row justify-center center-content items-center pt-8 pb-8'>
        <section className='pl-4 w-full text-center mt-10 sm:mt-0 sm:w-1/2 flex'>
          <div className='about-wrapper'>
            <h1 className='h1-brand'>
              About me
            </h1>
            <h2 className='h2-brand text-left'>
              Who am I?
            </h2>
            <p className='leading-loose text-left'>
              I’m an aspiring developer who is committed to the
              life long learning journey in tech, coding, and programming.
              Ever since I was young I always found web development a fun
              challenge and I thought it would be awesome if I could make
              a career out of it. I also do machine learning and other various coding.
            </p>
          </div>
        </section>
        <div className='flex combine-images relative'>
          <img src={RandomShape} className='sm:h-full relative inset-0' />
          <img src={RandomGuy} className='absolute object-contain position-specific'/>
        </div>
      </div>

    </>

  )
}

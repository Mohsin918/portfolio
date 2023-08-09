import React from 'react'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
      <h1 className='text-white'>Hi, I'm</h1>
      <h1 className='text-5xl text-secondary font-semibold'>Mohsin</h1>
      <h1 className='text-4xl text-white font-semibold'>Creating Web Solutions that Empower and Inspire.</h1>

      <p className="text-white w-2/3">
        I am a passionate full-stack developer with a journey of around 3 years.
        Currently working at SAP Labs India. 
        I'm dedicated to turning innovative ideas into robust digital solutions that 
        not only meet but exceed expectations.
        Let's connect and explore the boundless possibilities of coding together!
      </p>

      <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
    </div>
  )
}

export default Intro
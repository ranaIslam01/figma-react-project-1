import React from 'react'

function AboutProgram() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2  pt-20 pb-26 px-16'>

      <div className='pr-30 relative md:block hidden '>
        <div>
          <img className='h-120 w-full rounded-2xl bg-cover bg-center ' src="/images/About-program1.png" alt="" />
        </div>
        <div className='absolute -bottom-10 right-10 border-8 rounded-2xl border-white'>
          <img className='h-55 w-40  rounded-2xl ' src="/images/About-program2.png" alt="" />
        </div>
      </div>

      <div className='flex justify-center items-left  flex-col'>
        <h1 className='text-4xl font-semibold'>About The Program</h1>
        <p className='text-gray-500 text-base mt-3 leading-6'>The Cybersecurity High School Summer Youth Apprenticeship Program provides a unique opportunity for students from underrepresented communities to learn valuable skills in technology and cyber-security. High school juniors and seniors receive free training over 8 weeks in the summer that includes
        instructor-led lessons and paid on-the-job training with employer partners.</p>
      </div>

    </div>
  )
}

export default AboutProgram

import React from 'react'

function CourseGoal() {
  return (
    <div className='pt-16 pb-24 px-[6%] bg-gray-100'>

      <h1 className='flex justify-center items-center text-3xl font-semibold'>Course Goal</h1>

      {/* Card */}
      <div className='grid grid-cols-1 md:grid-cols-3 pt-10 gap-6'>

            {/* Card1 */}
            <div className='bg-white rounded-2xl py-6 px-8 flex text-center items-center flex-col gap-3'>
              <img className='w-16 h-16' src="/images/Course-goal1.png" alt="#" />
              <h4 className='text-xl font-bold'>Gain insight into cybersecurity careers & opportunities.</h4>
              <p className='text-gray-500 text-sm'>Discover the exciting world of cybersecurity through real-world insights, hands-on activities, and expert guidance.</p>
            </div>
            {/* Card2 */}
            <div className='bg-white rounded-2xl py-6 px-8 flex  text-center items-center flex-col gap-3'>
              <img className='w-16 h-16' src="/images/Course-goal2.png" alt="#" />
              <h4 className='text-xl font-bold'>Practice Communicating & Presenting more effectively to an audience.</h4>
              <p className='text-gray-500 text-sm'>Build confidence in public speaking and improve your ability to clearly communicate ideas to any audience through interactive practice and feedback.</p>
            </div>
            {/* Card3 */}
            <div className='bg-white rounded-2xl py-6 px-8 flex text-center items-center flex-col gap-3'>
              <img className='w-16 h-16' src="/images/Course-goal3.png" alt="#" />
              <h4 className='text-xl font-bold'>Learn more about cyber security attacks and safeguards.</h4>
              <p className='text-gray-500 text-sm'>Understand common cyber attacks and discover how to protect systems and data using essential cybersecurity practices.</p>
            </div>
            {/* Card4 */}
            <div className='bg-white rounded-2xl py-6 px-8 flex text-center items-center flex-col gap-3'>
              <img className='w-16 h-16' src="/images/Course-goal4.png" alt="#" />
              <h4 className='text-xl font-bold'>Learn how to build and secure a PC</h4>
              <p className='text-gray-500 text-sm'>Gain hands-on experience assembling a PC and learn how to secure it against common cyber threats and vulnerabilities.</p>
            </div>
            {/* Card5 */}
            <div className='bg-white rounded-2xl py-6 px-8 flex  text-center items-center flex-col gap-3'>
              <img className='w-16 h-16' src="/images/Course-goal5.png" alt="#" />
              <h4 className='text-xl font-bold'>Earn your CompTIA II Fundamentals+ Certification</h4>
              <p className='text-gray-500 text-sm'>Prepare for and earn your CompTIA IT Fundamentals+ certification, validating your foundational knowledge of IT concepts, devices, software, and security.</p>
            </div>
            {/* Card6 */}
            <div className='bg-white rounded-2xl py-6 px-8 flex  text-center items-center flex-col gap-3'>
              <img className='w-16 h-16' src="/images/Course-goal6.png" alt="#" />
              <h4 className='text-xl font-bold'>Learn how to build and secure a PC</h4>
              <p className='text-gray-500 text-sm'>Learn the basics of building a computer from scratch and securing it with essential cybersecurity tools and practices.</p>
            </div>
            
      </div>

    </div>
  )
}

export default CourseGoal

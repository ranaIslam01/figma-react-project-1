import React from 'react'

function AboutPreview() {
  return (
    <div>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-12">
              <div className="relative">
                <img
                  className="w-full h-142 rounded-2xl object-cover"
                  src="/images/5c006d71ab3cc23a97b1df3328e16c5ef3992b9b.png"
                  alt="Team members collaborating"
                />
                <div className="flex flex-col w-60 gap-2 text-white bg-[#F6931D] p-4 text-sm rounded-2xl md:absolute -bottom-8 -right-8 md:mt-0 mt-4">
                  <h3 className="font-bold text-lg">OUR VISION</h3>
                  <p className="text-xs">
                    To enhance inclusion and representation in the tech industry through training, mentoring, networking, and visibility programs.
                  </p>
                </div>
              </div>
              <div className="flex flex-col text-center md:text-left items-center md:items-start">
                <h6 className="text-[#F6931D] text-base font-semibold">About Us</h6>
                <h2 className="text-3xl font-semibold mt-1">
                  Empowering Tomorrow’s Cyber Defenders Through Inclusive Innovation
                </h2>
                <p className="text-sm text-gray-500 mt-4 max-w-lg">
                  We believe that true innovation in cybersecurity begins with inclusion. As a nonprofit organization, our mission is to empower underrepresented communities by providing accessible pathways into technology and cybersecurity careers.
                </p>
                <button className="px-6 py-2 mt-6 text-white bg-[#F6931D] rounded-full hover:opacity-90">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default AboutPreview

import React from 'react'

function LuckOfDeversity() {
  return (
    <div>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-3 justify-center items-center max-w-2xl mx-auto text-center">
              <h4 className="text-base text-gray-500">The Main Problem</h4>
              <h2 className="text-3xl text-black font-semibold">
                Lack Of Diversity In Cybersecurity
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                Representation in the cybersecurity industry is still alarmingly
                low for women and people from minority backgrounds.
              </p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 my-10">
              <div className="bg-[#F6931D] text-center p-8 rounded-2xl shadow-2xl flex justify-center items-center flex-col gap-4">
                <img
                  className="h-12 w-12"
                  src="/images/Frame 2147227366.png"
                  alt="Minority representation icon"
                />
                <span className="font-semibold text-white">
                  Less than 10% of the cyber security workforce is from a
                  minority background.
                </span>
              </div>
              <div className="bg-white text-center p-8 rounded-2xl shadow-lg flex justify-center items-center flex-col gap-4">
                <img
                  className="h-12 w-12"
                  src="/images/Group 6 (1).png"
                  alt="Gender diversity icon"
                />
                <span className="font-semibold">
                  Women make up only 24% of the cybersecurity workforce,
                  creating a significant gender gap.
                </span>
              </div>
              <div className="bg-white text-center p-8 rounded-2xl shadow-lg flex justify-center items-center flex-col gap-4">
                <img
                  className="h-12 w-12"
                  src="/images/Group 6 (2).png"
                  alt="Service description icon"
                />
                <span className="font-semibold">
                  Lack of inclusive training programs often discourages diverse
                  talent from entering the field.
                </span>
              </div>
              <div className="bg-white text-center p-8 rounded-2xl shadow-lg flex justify-center items-center flex-col gap-4">
                <img
                  className="h-12 w-12"
                  src="/images/Group 6 (3).png"
                  alt="Systemic challenges icon"
                />
                <span className="font-semibold">
                  Many underrepresented groups face systemic challenges and lack
                  of access to opportunities.
                </span>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}

export default LuckOfDeversity

import React from "react";

function VisionMissionGlowCard() {
  return (
    <div>
      {/* Unlocking Opportunity Through Cybersecurity Education and Empowerment */}
      <section className="py-20 bg-gray-100 mt-4">
        <div className="flex justify-center flex-col items-center max-w-2xl mx-auto text-center gap-3 mb-20 px-5 md:px-0">
          <h1 className="text-3xl text-black font-semibold">
            Unlocking Opportunity Through Cybersecurity Education and
            Empowerment
          </h1>
          <p className="text-base text-gray-500">
            We empower underserved communities through cybersecurity education,
            training, and career support—building a more inclusive and secure
            digital future.
          </p>
        </div>

        {/* Vision / Mission / Glow Cards */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 container mx-auto px-6">
          <div className="shadow-lg w-full rounded-2xl bg-white px-6 pt-4 pb-10">
            <span className="-tracking-2 font-semibold text-gray-400 text-lg">
              01
            </span>
            <div className="flex justify-center items-center flex-col gap-2">
              <img className="w-20 h-20" src="/images/Group 41.png" alt="" />
              <h1 className="text-xl font-semibold">Our Vision</h1>
              <p className="text-sm text-gray-500">
                Our vision is to foster inclusion and representation in tech
                through training, mentorship, networking, and visibility.
              </p>
            </div>
          </div>
          <div className="shadow-lg w-full rounded-2xl bg-white px-6 pt-4 pb-10">
            <span className="-tracking-2 font-semibold text-gray-400 text-lg">
              02
            </span>
            <div className="flex justify-center items-center flex-col gap-2">
              <img
                className="w-20 h-20"
                src="/images/Group 41 (1).png"
                alt=""
              />
              <h1 className="text-xl font-semibold">Our Mission</h1>
              <p className="text-sm text-gray-500">
                Our mission is to empower underrepresented communities in tech
                through education and mentorship.
              </p>
            </div>
          </div>
          <div className="shadow-lg w-full rounded-2xl bg-white px-6 pt-4 pb-10">
            <span className="-tracking-2 font-semibold text-gray-400 text-lg">
              03
            </span>
            <div className="flex justify-center items-center flex-col gap-2">
              <img className="w-20 h-20" src="/images/Group 41.png" alt="" />
              <h1 className="text-xl font-semibold">Our Glow</h1>
              <p className="text-sm text-gray-500">
                We shine by creating opportunities and pathways for future
                leaders in cybersecurity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VisionMissionGlowCard;

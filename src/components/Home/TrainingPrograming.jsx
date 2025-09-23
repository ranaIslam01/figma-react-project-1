import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faCheck  } from '@fortawesome/free-solid-svg-icons';

function TrainingPrograming() {
  return (
    <div>
        <section className="py-20 bg-gray-100">
          <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center text-center flex-col max-w-2xl mx-auto">
              <h2 className="text-3xl text-black font-semibold">
                Explore Our Cyber & Tech Training Programs
              </h2>
              <h6 className="text-sm text-gray-500 mt-2">
                Our hands-on programs help students and professionals build
                essential cybersecurity and IT skills through guided learning,
                mentorship, and real-world experience.
              </h6>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center mt-12 mx-10">

              {/* card1 */}
              <div className="bg-white shadow-md p-4 w-full rounded-lg flex flex-col gap-3">
                <img
                  className="w-full h-50 rounded-lg bg-cover bg-center"
                  src="/images/1ab0940df74bb78ba7a4db2b9c82d2f8392dd23e.png"
                  alt="High School Cyber Program"
                />
                <img
                  className="h-8 w-8"
                  src="/images/Frame 2147227386.png"
                  alt="Program Icon"
                />
                <div className="flex flex-col gap-2 mt-2">
                  <h3 className="font-bold text-lg">
                    High School Cyber Program
                  </h3>
                  <p className="text-xs text-gray-500">
                    A six-week summer youth apprenticeship to teach students
                    entry-level cybersecurity skills with paid internships.
                  </p>
                  <span className="text-xs text-gray-500">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-yellow-400 mr-2"
                    />{" "}
                    Entry-level cybersecurity skills
                  </span>
                  <span className="text-xs text-gray-500">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-yellow-400 mr-2"
                    />{" "}
                    Hands-on experience
                  </span>
                  <span className="text-xs text-gray-500">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-yellow-400 mr-2"
                    />{" "}
                    Paid internship opportunity
                  </span>
                  <button className="bg-[#F6931D] text-white rounded-full py-1 px-2 mt-3 text-sm hover:opacity-90">
                    Learn More
                  </button>
                </div>
              </div>

              {/* card2 */}
              <div className="bg-white shadow-md p-4 w-full rounded-lg flex flex-col gap-3">
                <img
                  className="w-full h-50 rounded-lg bg-cover bg-center"
                  src="/images/22d3f16f1550a69135186f281ca9fccbacd4ee29.png"
                  alt="CompTIA Tech+ Career"
                />
                <img
                  className="h-8 w-8"
                  src="/images/Frame 2147227386 (1).png"
                  alt="Program Icon"
                />
                <div className="flex flex-col gap-2 mt-2">
                  <h3 className="font-bold text-lg">CompTIA Tech+ Career</h3>
                  <p className="text-xs text-gray-500">
                    Get certified with CompTIA A+, Network+, and Security+ to
                    start your career in IT and cybersecurity.
                  </p>
                  <span className="text-xs text-gray-500">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-yellow-400 mr-2"
                    />{" "}
                    Industry-recognized certifications
                  </span>
                  <span className="text-xs text-gray-500">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-yellow-400 mr-2"
                    />{" "}
                    Career-focused training
                  </span>
                  <span className="text-xs text-gray-500">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-yellow-400 mr-2"
                    />{" "}
                    Job placement assistance
                  </span>
                  <button className="hover:bg-[#F6931D] hover:text-white text-[#F6931D] border border-[#F6931D] rounded-full py-1 px-2 mt-3 text-sm transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>

              {/* card3 */}
              <div className="bg-white shadow-md p-4 w-full rounded-lg flex flex-col gap-3">
                <img
                  className="w-full h-50 rounded-lg bg-cover bg-center"
                  src="/images/22d3f16f1550a69135186f281ca9fccbacd4ee29.png"
                  alt="CompTIA Tech+ Career"
                />
                <img
                  className="h-8 w-8"
                  src="/images/Frame 2147227386 (1).png"
                  alt="Program Icon"
                />
                <div className="flex flex-col gap-2 mt-2">
                  <h3 className="font-bold text-lg">CompTIA Tech+ Career</h3>
                  <p className="text-xs text-gray-500">
                    Get certified with CompTIA A+, Network+, and Security+ to
                    start your career in IT and cybersecurity.
                  </p>
                  <span className="text-xs text-gray-500">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-yellow-400 mr-2"
                    />{" "}
                    Industry-recognized certifications
                  </span>
                  <span className="text-xs text-gray-500">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-yellow-400 mr-2"
                    />{" "}
                    Career-focused training
                  </span>
                  <span className="text-xs text-gray-500">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-yellow-400 mr-2"
                    />{" "}
                    Job placement assistance
                  </span>
                  <button className="hover:bg-[#F6931D] hover:text-white text-[#F6931D] border border-[#F6931D] rounded-full py-1 px-2 mt-3 text-sm transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>


              {/* card4 */}
              <div className="bg-white shadow-md p-4 w-full rounded-lg flex flex-col gap-3">
                <img
                  className="w-full h-50 rounded-lg bg-cover bg-center"
                  src="/images/22d3f16f1550a69135186f281ca9fccbacd4ee29.png"
                  alt="CompTIA Tech+ Career"
                />
                <img
                  className="h-8 w-8"
                  src="/images/Frame 2147227386 (1).png"
                  alt="Program Icon"
                />
                <div className="flex flex-col gap-2 mt-2">
                  <h3 className="font-bold text-lg">CompTIA Tech+ Career</h3>
                  <p className="text-xs text-gray-500">
                    Get certified with CompTIA A+, Network+, and Security+ to
                    start your career in IT and cybersecurity.
                  </p>
                  <span className="text-xs text-gray-500">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-yellow-400 mr-2"
                    />{" "}
                    Industry-recognized certifications
                  </span>
                  <span className="text-xs text-gray-500">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-yellow-400 mr-2"
                    />{" "}
                    Career-focused training
                  </span>
                  <span className="text-xs text-gray-500">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-yellow-400 mr-2"
                    />{" "}
                    Job placement assistance
                  </span>
                  <button className="hover:bg-[#F6931D] hover:text-white text-[#F6931D] border border-[#F6931D] rounded-full py-1 px-2 mt-3 text-sm transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}

export default TrainingPrograming

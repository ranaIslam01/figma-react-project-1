import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faCheck,faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function GetInTouch() {
  return (
    <div>
        <section className="bg-orange-50 py-20">
          <div className="container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-12 px-6">
            <div className="lg:col-span-1 flex flex-col gap-6 justify-center items-left">
              <div>
                <h2 className="text-3xl font-semibold">Get in Touch</h2>
                <p className="text-gray-500 text-sm mt-2">
                  We'd love to hear from you. Reach out to learn more or get
                  involved.
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">
                  3350 Riverwood Pkwy, Suite 1900. Atlanta, Georgia 30339
                </p>
                <p className="text-gray-600 text-sm mt-4 flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-[#F6931D]"
                  />{" "}
                  support@dcc.com
                </p>
                <p className="text-gray-600 text-sm mt-2 flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} className="text-[#F6931D]" />{" "}
                  (404) 905-1613
                </p>
              </div>
              <div className="flex list-none gap-4">
                <a
                  href="#"
                  className="border border-[#F6931D] text-[#F6931D] w-8 h-8 hover:bg-[#F6931D] hover:text-white transition-colors duration-300 flex justify-center items-center rounded-full"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="#"
                  className="border border-[#F6931D] text-[#F6931D] w-8 h-8 hover:bg-[#F6931D] hover:text-white transition-colors duration-300 flex justify-center items-center rounded-full"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="#"
                  className="border border-[#F6931D] text-[#F6931D] w-8 h-8 hover:bg-[#F6931D] hover:text-white transition-colors duration-300 flex justify-center items-center rounded-full"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  href="#"
                  className="border border-[#F6931D] text-[#F6931D] w-8 h-8 hover:bg-[#F6931D] hover:text-white transition-colors duration-300 flex justify-center items-center rounded-full"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
            <div className="bg-orange-100 lg:col-span-2 rounded-2xl p-8">
              <form action="#" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      className="mt-2 px-4 py-2 outline-none w-full bg-white rounded-full"
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      className="mt-2 px-4 py-2 outline-none w-full bg-white rounded-full"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="mt-2 px-4 py-2 outline-none w-full bg-white rounded-full"
                    type="text"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="mt-2 px-4 py-2 outline-none w-full bg-white rounded-2xl"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F6931D] text-white py-3 rounded-full font-semibold hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
    </div>
  )
}

export default GetInTouch
{/* =================================== */}
        {/* Get in Touch Section */}
        {/* =================================== */}
        <section className="bg-orange-50 py-20">
          <div className="container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-12 px-6">
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div>
                <h2 className="text-3xl font-semibold">Get in Touch</h2>
                <p className="text-gray-500 text-sm mt-2">
                  We'd love to hear from you. Reach out to learn more or get
                  involved.
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">
                  3350 Riverwood Pkwy, Suite 1900. Atlanta, Georgia 30339
                </p>
                <p className="text-gray-600 text-sm mt-4 flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-[#F6931D]"
                  />{" "}
                  support@dcc.com
                </p>
                <p className="text-gray-600 text-sm mt-2 flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} className="text-[#F6931D]" />{" "}
                  (404) 905-1613
                </p>
              </div>
              <div className="flex list-none gap-4">
                <a
                  href="#"
                  className="border border-[#F6931D] text-[#F6931D] w-8 h-8 hover:bg-[#F6931D] hover:text-white transition-colors duration-300 flex justify-center items-center rounded-full"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="#"
                  className="border border-[#F6931D] text-[#F6931D] w-8 h-8 hover:bg-[#F6931D] hover:text-white transition-colors duration-300 flex justify-center items-center rounded-full"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="#"
                  className="border border-[#F6931D] text-[#F6931D] w-8 h-8 hover:bg-[#F6931D] hover:text-white transition-colors duration-300 flex justify-center items-center rounded-full"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  href="#"
                  className="border border-[#F6931D] text-[#F6931D] w-8 h-8 hover:bg-[#F6931D] hover:text-white transition-colors duration-300 flex justify-center items-center rounded-full"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
            <div className="bg-orange-100 lg:col-span-2 rounded-2xl p-8">
              <form action="#" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      className="mt-2 px-4 py-2 outline-none w-full bg-white rounded-full"
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      className="mt-2 px-4 py-2 outline-none w-full bg-white rounded-full"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="mt-2 px-4 py-2 outline-none w-full bg-white rounded-full"
                    type="text"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="mt-2 px-4 py-2 outline-none w-full bg-white rounded-2xl"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F6931D] text-white py-3 rounded-full font-semibold hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
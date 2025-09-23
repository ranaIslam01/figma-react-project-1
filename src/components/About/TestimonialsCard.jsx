import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faStar,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

function TestimonialsCard() {
  return (
    <div>
      
        {/* Testimonials Section */}
        <section className="bg-[linear-gradient(to_right,#F8DAB0,#F1F9FD)]">
          <div className="flex flex-col justify-center items-center text-center max-w-2xl mx-auto py-20 px-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl text-black font-semibold">
                What Our Users are Saying About Us
              </h1>
              <p className="text-sm text-gray-500">
                Discover what our satisfied clients have to say about their
                seamless real estate journeys with us. Their success stories are
                a testament to our commitment and dedication.
              </p>
            </div>
          </div>

          {/* Testimonials Cards */}
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 px-10 pb-20">
            {/* Card 01 */}
            <div className="shadow-lg bg-white rounded-2xl p-6 relative">
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  <span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src="/images/885be3cd1021c77f95b778f135197c71e41fe685.jpg"
                      alt=""
                    />
                  </span>
                  <div>
                    <h4 className="font-semibold">Ben raid</h4>
                    <h5 className="text-sm text-gray-500">Real estate owner</h5>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                  <p>5.0</p>
                </div>
              </div>
              <p className="py-6 text-[#737373]">
                Realtor Finder helped me find an agent to sell an out-of-state
                inherited property, they even negotiated the commission for me!
              </p>
              <span className="flex justify-end text-gray-500 absolute bottom-4 right-4">
                <FontAwesomeIcon icon={faQuoteRight} />
                <FontAwesomeIcon icon={faQuoteRight} />
              </span>
            </div>

            {/* Card 02 */}
            <div className="shadow-lg bg-white rounded-2xl p-6 relative">
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  <span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src="/images/a2fe25a1cd559ef44e44e135e5323a43774df24c.jpg"
                      alt=""
                    />
                  </span>
                  <div>
                    <h4 className="font-semibold">Marker Jingson</h4>
                    <h5 className="text-sm text-gray-500">Real estate owner</h5>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                  <p>5.0</p>
                </div>
              </div>
              <p className="py-6 text-[#737373]">
                For sale by owner did not work for me, but neither did
                overpaying on commission. Realtor Finder made it easy to find
                the realtor I wanted on the terms I required.
              </p>
              <span className="flex justify-end text-gray-500 absolute bottom-4 right-4">
                <FontAwesomeIcon icon={faQuoteRight} />
                <FontAwesomeIcon icon={faQuoteRight} />
              </span>
            </div>

            {/* Card 03 */}
            <div className="shadow-lg bg-white rounded-2xl p-6 relative">
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  <span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src="/images/dd8eb987420ffd4f469382ef227592928175e4b8.jpg"
                      alt=""
                    />
                  </span>
                  <div>
                    <h4 className="font-semibold">Wells Marco</h4>
                    <h5 className="text-sm text-gray-500">Real estate owner</h5>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                  <p>5.0</p>
                </div>
              </div>
              <p className="py-6 text-[#737373]">
                Realtor Finder was perfect. I invest in land through an SDIRA –
                they found the perfect agent for me.
              </p>
              <span className="flex justify-end text-gray-500 absolute bottom-4 right-4">
                <FontAwesomeIcon icon={faQuoteRight} />
                <FontAwesomeIcon icon={faQuoteRight} />
              </span>
            </div>
          </div>
        </section>
    </div>
  )
}

export default TestimonialsCard

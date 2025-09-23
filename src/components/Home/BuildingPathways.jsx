import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars ,faArrowRight} from '@fortawesome/free-solid-svg-icons';

function BuildingPathways() {
  return (
    <div>
        <section className="py-10">
          <div className="bg-[#1A5B81] flex justify-between items-center p-8 md:m-10 m-5 rounded-2xl">
            <img
              className="md:block hidden w-24 h-auto"
              src="/images/Vector.png"
              alt="Decorative vector graphic"
            />
            <div className="flex justify-center items-center flex-col text-center mx-auto max-w-3xl gap-4">
              <h2 className="text-white font-bold text-3xl">
                Building Pathways to Equity in Tech
              </h2>
              <p className="text-gray-300 text-sm">
                At the heart of innovation lies inclusion. We are committed to
                building clear, accessible pathways that lead underrepresented
                individuals into meaningful careers in technology.
              </p>
              <button className="text-white bg-[#F6931D] px-5 py-2 rounded-full mt-2 hover:opacity-90 inline-flex items-center gap-2">
                <span>Get In Touch</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <img
              className="md:block hidden w-24 h-auto"
              src="/images/Group.png"
              alt="Decorative group graphic"
            />
          </div>
        </section>
    </div>
  )
}

export default BuildingPathways

import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
      <footer className="bg-[linear-gradient(to_right,#F1F9FD,#F8DAB0)]">
        <div className="pt-16 container mx-auto px-6">
          <h2 className="md:text-6xl text-3xl font-extrabold bg-gradient-to-r from-[#21519970] to-[#FFB54E] bg-clip-text text-transparent text-center">
            DIVERSITY CYBER COUNCIL
          </h2>
          <div className="mt-10">
            <img
              className="w-40 -mb-4 ml-6"
              src="/images/image 7.png"
              alt="Diversity Cyber Council Logo"
            />
          </div>
          <div className="mx-6 py-8 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
            <div>
              <h4 className="font-bold text-gray-700 mb-3">Contact</h4>
              <ul className="list-none flex gap-3 flex-col">
                <li className="text-sm text-gray-600">
                  3350 Riverwood Pkwy, Suite 1900. Atlanta, Georgia 30339
                </li>
                <li className="text-sm text-gray-600">
                  support@diversitycybercouncil.com
                </li>
                <li className="text-sm text-gray-600">404.905.1613</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-3">Quick Links</h4>
              <ul className="list-none flex gap-2 flex-col">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-gray-600 hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-gray-600 hover:underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programs"
                    className="text-sm text-gray-600 hover:underline"
                  >
                    Career Programs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-involved"
                    className="text-sm text-gray-600 hover:underline"
                  >
                    Get Involved
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-3">
                Registration Forms
              </h4>
              <ul className="list-none flex gap-2 flex-col">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:underline">
                    Training Candidate
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:underline">
                    Employer Partner
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:underline">
                    Strategic Partner
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-3">Legal</h4>
              <ul className="list-none flex gap-2 flex-col">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:underline">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:underline">
                    Terms of service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm pb-10 py-5 border-t mt-4">
            © 2025 Diversity Cyber Council. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
import Newsletter from "./Newsletter"
import hemmglogo from '../assets/icons/HEMMG_logo.png'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
        <div className="lg:px-12 px-6">
            <div className=" my-2 border-b border-[#949697]">	&nbsp; </div>
            <Newsletter/>
        </div>

{/* bg-gray-800 */}
        <div className="bg-[#1A3855] text-white lg:p-12 p-9">
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Social Media */}
                <div className="space-y-5">
                    <img src={hemmglogo} alt="Company Logo" className="h-12" />
                    <p className="text-gray-400">
                        Receive the latest updates and insights straight to your inbox.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="lg" className="hover:text-blue-400 transition" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="lg" className="hover:text-blue-600 transition" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" className="hover:text-blue-700 transition" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="lg" className="hover:text-pink-500 transition" />
                        </a>
                    </div>
                </div>

                {/* Product Links */}
                <div className="space-y-4 flex flex-col">
                    <p className="text-lg font-semibold">Product</p>
                    <div className="lg:flex lg:flex-col lg:space-y-4 lg:space-x-0 flex flex-row space-x-4">
                        <Link to="/testimonial" className="text-gray-400 hover:text-white transition">Testimonial</Link>
                        <Link to="/resources" className="text-gray-400 hover:text-white transition">Resources</Link>
                        <Link to="/faq" className="text-gray-400 hover:text-white transition">FAQ</Link>
                    </div>
                </div>

                {/* Company Links */}
                <div className="space-y-4 flex flex-col">
                    <p className="text-lg font-semibold">Company</p>
                    <div className="lg:flex lg:flex-col lg:space-y-4 lg:space-x-0 flex flex-row space-x-4">
                        <Link to="/about-us" className="text-gray-400 hover:text-white transition">About us</Link>
                        <Link to="/programs" className="text-gray-400 hover:text-white transition">Programs</Link>
                        <Link to="/contact-us" className="text-gray-400 hover:text-white transition">Contact us</Link>
                    </div>
                </div>

                {/* Account Links */}
                <div className="space-y-4 flex flex-col">
                    <p className="text-lg font-semibold">Account</p>
                    <div className="lg:flex lg:flex-col lg:space-y-4 lg:space-x-0 flex flex-row space-x-4">
                        <Link to="/get-started" className="text-gray-400 hover:text-white transition">Get Started</Link>
                        <Link to="/login" className="text-gray-400 hover:text-white transition">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Footer
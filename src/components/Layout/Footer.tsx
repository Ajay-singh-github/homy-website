import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import { Facebook } from "lucide-react"
import { Link } from "react-router-dom"
import playstore from "../../assets/playStore.png"
import appStore from "../../assets/appStore.png"
import homyLogo from "../../assets/HomyLogo.svg"

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4 text-center md:text-left">
            <Link to="/" className="inline-block">
              <img
                src={homyLogo}
                alt="Homy Logo"
                className="h-[7.3rem] w-auto"
              />
            </Link>
          </div>

          {/* Pages Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-gray-300 hover:text-white transition-colors">
                  Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-gray-300 hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in touch Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
            <div className="flex space-x-4 mb-6">
              <Link
                to="https://x.com/i/flow/login?redirect_after_login=%2Fthehomy_in"
                className="bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors"
                aria-label="Twitter"
              >
                <TwitterLogoIcon className="h-5 w-5" />
              </Link>
              <Link
                to="https://www.facebook.com/people/Thehomy/61553486985244/"
                className="bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                to="https://www.instagram.com/thehomy.in/"
                className="bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogoIcon className="h-5 w-5" />
              </Link>
              <Link
                to="https://in.linkedin.com/company/thehomy-in"
                className="bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors"
                aria-label="GitHub"
              >
                <LinkedInLogoIcon className="h-5 w-5" />
              </Link>
            </div>
            <div className="space-y-4">
              <Link to="https://play.google.com/store/apps/details?id=etsd.tdfcx.agh&pcampaignid=web_share" className="block">
                <img
                  src={playstore}
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="h-10 w-auto"
                />
              </Link>
              <Link to="#" className="block">
                <img
                  src={appStore}
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-16 mb-8">
          <h2 className="text-2xl font-semibold">Your Meal, Your Chef, Your Way!</h2>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 border-t border-gray-800 pt-8">
          <p>Copyright © 2024 Homy. All Rights Reserved</p>
        </div>
      </div>
      </footer>
  )
}

export default Footer
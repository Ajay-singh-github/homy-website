import { Button } from '@/components/ui/button'
import homyLogo from '../../assets/Homy.svg'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate  = useNavigate()
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={homyLogo}
              alt="Homy Logo"
              className="h-20 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-sm font-medium text-gray-900 hover:text-red-500 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/plans"
              className="text-sm font-medium text-gray-900 hover:text-red-500 transition-colors"
            >
              Plans
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-gray-900 hover:text-red-500 transition-colors"
            >
              About
            </Link>
            <Link
              to="/gallery"
              className="text-sm font-medium text-gray-900 hover:text-red-500 transition-colors"
            >
              Gallery
            </Link>
            <Link
              to="/blogs"
              className="text-sm font-medium text-gray-900 hover:text-red-500 transition-colors"
            >
              Blogs
            </Link>
          </nav>

          {/* Contact Button */}
          <Button
            variant="default"
            className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-full px-6"
            onClick={()=>{
                navigate("/contact")
            }}
          >
            Contact us
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
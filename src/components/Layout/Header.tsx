import { Link, useNavigate } from "react-router-dom";
import {  Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarTrigger,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import homyLogo from "../../assets/Homy.svg";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Plans", path: "/plans" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blogs", path: "/blogs" },
];

const HeaderContent = () => {
  const navigate = useNavigate();
  const { setOpen } = useSidebar();

  return (
    <>
    <div className="w-full fixed z-10 bg-white">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={homyLogo} alt="Homy Logo" className="h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm font-medium text-gray-900 hover:text-red-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <Button
            variant="default"
            className="hidden md:inline-flex bg-zinc-900 text-white hover:bg-zinc-800 rounded-full px-6"
            onClick={() => navigate("/contact")}
          >
            Contact us
          </Button>

          {/* Mobile Menu Button */}
          <SidebarTrigger>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SidebarTrigger>
        </div>

      <Sidebar>
        <SidebarHeader className="px-4 py-2">
          <img src={homyLogo} alt="Homy Logo" className="h-16 w-auto" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton>
                  <Link
                    to={item.path}
                    className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <Button
            variant="default"
            className="w-full bg-zinc-900 text-white hover:bg-zinc-800 rounded-full"
            onClick={() => {
              navigate("/contact");
              setOpen(false);
            }}
          >
            Contact us
          </Button>
        </SidebarFooter>
      </Sidebar>
    </div>
    </>
  );
};

const Header = () => {
  return (
      <HeaderContent />
  );
};

export default Header;

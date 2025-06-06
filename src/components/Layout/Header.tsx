import { Link, useNavigate } from "react-router-dom";
import menu from "@/assets/menu.svg";
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
import homyLogo from "../../assets/HomyLogo.svg";
import { useEffect } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Plans", path: "/plans" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blogs", path: "/blogs" },
];

const HeaderContent = () => {
  const navigate = useNavigate();
  const { setOpen,toggleSidebar } = useSidebar();
  // const [isOpen,setIsOpen] = useState();
  // useEffect(()=>{
  //   setOpen(isOpen);
  // },[isOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once on mount to set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, [setOpen]);

  return (
    <>
      <header className="w-full pt-3 h-20 sticky top-0 left-0 right-0 bg-white border-b z-[50]">
        <div className="container mx-auto px-2 sm:px-4 h-full">
          <div className="flex items-center justify-between h-full">
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
            <SidebarTrigger
              children={<img src={menu} alt="" />}
              className="md:hidden"
            />
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className="hidden">
        <Sidebar className="md:hidden">
          <SidebarHeader className="px-4 py-2">
            <img src={homyLogo} alt="Homy Logo" className="h-16 w-auto" />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton>
                    <div
                      className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
                      onClick={() => {
                        toggleSidebar()
                        navigate(item.path)
                      }}
                    >
                      {item.name}
                    </div>
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
  return <HeaderContent />;
};

export default Header;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLargeScreen = window.innerWidth >= 800;
  const [shouldRender, setShouldRender] = useState(isLargeScreen);


  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleResize = () => {
      setShouldRender(window.innerWidth >= 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleMobileMenuOpen() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <div className="navbar w-full px-24 py-3">
      <div className="flex justify-between items-center">
        <div className="logo">
          <Link to="/">
            <h1 className="text-[36px] text-white font-bold">
              get<span className="text-[#D434FE]">Linked</span>
            </h1>
          </Link>
        </div>
        {shouldRender && (
          <div className="nav">
          <nav className="">
            <ul className="text-white flex">
              {pathname === "/" && (
                <>
                  <li className="text-white mr-3 text-gradient-hover">Timeline</li>
                  <li className="text-white mr-3 text-gradient-hover">Overview</li>
                  <li className="text-white mr-3 text-gradient-hover">
                    <a href="#faqs">FAQs</a>
                  </li>
                </>
              )}
              {pathname !== "/" && (
                <Link to="/">
                  <li className="text-white mr-3 text-gradient-hover">Home</li>
                </Link>
              )}
              {pathname !== "/contact" && (
                <Link to="/contact">
                  <li className="text-white mr-3 text-gradient-hover">Contact</li>
                </Link>
              )}
              <Link to="/register">
                <li className="primaryColor px-2 py-1 rounded">Register</li>
              </Link>
            </ul>
          </nav>
          </div>
        )}
        
          {!shouldRender && (
              <AiOutlineMenu
                color="white"
                size={20}
                className="cursor-pointer"
                onClick={toggleMobileMenuOpen}
              />
            )}
          {/* {isMobileMenuOpen && !shouldRender && (
        <MobileMenu
          closeMobileMenu={closeMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      )} */}
      </div>
    </div>
  );
};

export default Navbar;

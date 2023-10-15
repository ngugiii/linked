import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import close from "../../assets/close.svg"


const MobileMenu =({closeMobileMenu})=>{
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="absolute top-[4rem] bg-[#150e28] border-2 z-10 border-[#d434fe] p-8 rounded-md right-4 w-[14rem] h-3rem">
      <div className="close w-full flex justify-end mb-3">
        <img src={close} alt="" onClick={closeMobileMenu} />
      </div>
      <div className="">
      <nav className="">
            <ul className="text-white flex flex-col">
              {pathname === "/" && (
                <>
                  <li className="text-white mr-3 mb-2 text-gradient-hover">
                    <a href="#timeline" onClick={closeMobileMenu}>Timeline</a></li>
                    <li className="text-white mr-3 mb-2 text-gradient-hover">
                    <a href="#introduction" onClick={closeMobileMenu}>Overview</a></li>
                  <li className="text-white mr-3 mb-2 text-gradient-hover">
                    <a href="#faqs" onClick={closeMobileMenu}>FAQs</a>
                  </li>
                </>
              )}
              {pathname !== "/" && (
                <Link to="/">
                  <li className="text-white mr-3 mb-2 text-gradient-hover" onClick={closeMobileMenu}>Home</li>
                </Link>
              )}
              {pathname !== "/contact" && (
                <Link to="/contact">
                  <li className="text-white mr-3 mb-2 text-gradient-hover" onClick={closeMobileMenu}>Contact</li>
                </Link>
              )}
              <Link to="/register">
                <li className="primaryColor text-center px-2 py-1 rounded" onClick={closeMobileMenu}>Register</li>
              </Link>
            </ul>
          </nav>
      </div>
    </div>
  )
}


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
    <div className="navbar relative w-full sm:px-24 px-4 py-3">
      <div className="w-full flex justify-between items-center">
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
                  <li className="text-white mr-3 mb-2 text-gradient-hover">
                    <a href="#timeline">Timeline</a></li>
                    <li className="text-white mr-3 mb-2 text-gradient-hover">
                    <a href="#introduction">Overview</a></li>
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
          {isMobileMenuOpen && !shouldRender && (
        <MobileMenu
          closeMobileMenu={closeMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      )}
      </div>
    </div>
  );
};

export default Navbar;

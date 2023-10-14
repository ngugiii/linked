import React from "react";

const Navbar = () => {
  return (
    <div className="navbar w-full px-24 py-3">
      <div className="flex justify-between items-center">
        <div className="logo">
            <h1 className="text-[36px] text-white font-bold">get<span className="text-[#D434FE]">Linked</span></h1>
        </div>
        <div className="nav">
            <nav className="">
                <ul className="text-white flex">
                    <li className="text-white mr-3">Timeline</li>
                    <li className="text-white mr-3">Overview</li>
                    <li className="text-white mr-3">
                        <a href="#faqs">FAQs</a>
                    </li>
                    <li className="text-white mr-3">Contact</li>
                    <li className="primaryColor px-2 py-1 rounded">Register</li>
                </ul>
            </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

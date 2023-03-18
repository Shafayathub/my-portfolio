import React from 'react';
// images
import logo from '../assets/logo.png';
// icons
import { AiOutlineWhatsApp } from 'react-icons/ai';

const Header = () => {
  return (
    <header className="bg-black py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a
            href="https://www.linkedin.com/in/md-shafayat-islam-97000110b/"
            rel="noreferrer"
            target="_blank">
            <img src={logo} alt="MD Shafayat Islam" />
          </a>
          <a
            href="https://wa.me/+8801718053201"
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm flex items-center">
            Contact me <AiOutlineWhatsApp className="text-xl ml-2" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

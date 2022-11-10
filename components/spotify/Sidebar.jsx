import { useState } from "react";
import Link from 'next/link'
import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../../assets'
//names,url,icons
import { links } from '../../assets/constants';
import { HiOutlineMenu } from "react-icons/hi";


const NavLinks = ({ handleClick }) => {
  return (
    <> <div className="mt-10">
      {links.map((item,i) => {
        return (
          <button
            key={item.name}
            
            className='flex text-gray-400 hover:text-cyan-400 md:grid space-x-4 text-left ml-2 my-8 text-sm font-medium '
            onClick={(i) => handleClick && handleClick(i)}
          >
            <item.icon className="w-6 h-6 mr-2" />

            {item.name}</button>);
      })}
    </div>

    </>
  )
    ;
}

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={logo} alt="logo"
          className="w-full h-14 object-contain" />
        <NavLinks />


      </div>

      { /*mobile menu */}
      <div className="absolute right-3 md:hidden block top-6">
        {mobileMenuOpen ? (
          <RiCloseLine className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) :
          (<HiOutlineMenu className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(true)}
          />)}
      </div>
      { /*similar menu to desktop except styles different */}
      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b]
          backdrop-blur-lg z-10 p-6 md:hidden smooth-transition
          ${mobileMenuOpen ? 'left-0' : '-left-full'}
        `}>
        <img src={logo} alt="logo"
          className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>

    </>
  );
}

export default Sidebar;

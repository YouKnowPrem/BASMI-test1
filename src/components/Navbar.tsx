import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, React_useState_isOpen] = React.useState(false);

  const links = [
    { name: 'About Us', path: '/about' },
    { name: 'UAS Systems', path: '/uas' },
    { name: 'HVM Parameters', path: '/security' },
    { name: 'Tactical Gear', path: '/tactical' },
    { name: 'Aerospace & Naval', path: '/aerospace' },
    { name: 'Indigenization', path: '/indigenization' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 glass-panel border-b border-white/10 rounded-none shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center space-x-3">
            <img src="/basmi_logo.png" alt="BASMI Logo" className="h-16 w-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          </NavLink>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => React_useState_isOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-panel rounded-none border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => React_useState_isOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

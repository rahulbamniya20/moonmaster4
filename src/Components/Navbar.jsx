// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';

// function Navbar({ scrollToAbout, scrollToServices, scrollToContact }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef(null);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('button')) {
//         setIsOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuRef]);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const closeMenu = () => setIsOpen(false);

//   return (
//     <nav className="absolute top-8 left-0 right-0 z-20 flex items-center justify-between px-8">
//       <div className="text-white font-bold text-xl">moonMaster</div>
//       <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full px-6 py-2">
//         <NavItem onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} text="Home" />
//         <NavItem onClick={scrollToAbout} text="About" />
//         <NavItem onClick={scrollToServices} text="Services" />
//         <NavItem onClick={scrollToContact} text="Contact Us" />
//       </div>
//       <div className="hidden md:block">
//         <ApplyButton />
//       </div>
//       <div className="md:hidden">
//         <motion.button
//           whileTap={{ scale: 0.95 }}
//           onClick={toggleMenu}
//           className="text-white z-50 relative"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </motion.button>
//       </div>
//       <AnimatePresence>
//         {isOpen && (
//           <MobileMenu 
//             closeMenu={closeMenu} 
//             menuRef={menuRef}
//             scrollToAbout={scrollToAbout}
//             scrollToServices={scrollToServices}
//             scrollToContact={scrollToContact}
//           />
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

// function NavItem({ onClick, text }) {
//   return (
//     <motion.div
//       className="relative text-white px-3 py-1 rounded-full transition-colors cursor-pointer"
//       whileHover="hover"
//       initial="rest"
//       animate="rest"
//       onClick={onClick}
//     >
//       <motion.span
//         className="relative z-10"
//         variants={{
//           rest: { y: 0 },
//           hover: { y: -5 }
//         }}
//       >
//         {text}
//       </motion.span>
//       <motion.div
//         className="absolute inset-0 bg-white bg-opacity-20 rounded-full"
//         variants={{
//           rest: { scale: 0, opacity: 0 },
//           hover: { 
//             scale: 1, 
//             opacity: 1,
//             transition: { type: "spring", stiffness: 400, damping: 10 }
//           }
//         }}
//       />
//       <motion.div
//         className="absolute inset-0 bg-purple-500 rounded-full"
//         variants={{
//           rest: { scale: 0, opacity: 0 },
//           hover: { 
//             scale: 1.1, 
//             opacity: 0.2,
//             transition: { 
//               type: "spring", 
//               stiffness: 400, 
//               damping: 10, 
//               delay: 0.1 
//             }
//           }
//         }}
//       />
//     </motion.div>
//   );
// }

// function ApplyButton({ onClick }) {
//   return (
//     <motion.div
//       className="relative"
//       whileHover="hover"
//       initial="rest"
//       animate="rest"
//       onClick={onClick}
//     >
//       <motion.div
//         className="absolute inset-0 bg-purple-400 rounded-md filter blur-md"
//         variants={{
//           rest: { opacity: 0, scale: 1 },
//           hover: { 
//             opacity: 0.6, 
//             scale: 1.1,
//             transition: { 
//               duration: 0.3,
//               yoyo: Infinity,
//               repeatType: "reverse"
//             }
//           }
//         }}
//       />
//       <motion.button
//         className="relative bg-gradient-to-r from-purple-600 to-[#33069d] hover:from-[#33069d] hover:to-purple-600  text-white px-4 py-2 rounded-lg font-small"
//         variants={{
//           hover: { scale: 1.1 },
//           rest: { scale: 1 }
//         }}
//         transition={{ type: "spring", stiffness: 400, damping: 10 }}
//       >
//         Apply to become a Client →
//       </motion.button>
//     </motion.div>
//   );
// }


// function MobileMenu({ closeMenu, menuRef, scrollToAbout, scrollToServices, scrollToContact }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.2 }}
//       className="fixed inset-0 bg-black bg-opacity-50 z-40"
//     >
//       <motion.div
//         ref={menuRef}
//         initial={{ x: "100%" }}
//         animate={{ x: 0 }}
//         exit={{ x: "100%" }}
//         transition={{ type: "spring", stiffness: 300, damping: 30 }}
//         className="absolute right-0 top-0 bottom-0 w-64 bg-[#19083E] p-8 flex flex-col space-y-4"
//       >
//         <NavItem onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu(); }} text="Home" />
//         <NavItem onClick={() => { scrollToAbout(); closeMenu(); }} text="About" />
//         <NavItem onClick={() => { scrollToServices(); closeMenu(); }} text="Services" />
//         <NavItem onClick={() => { scrollToContact(); closeMenu(); }} text="Contact Us" />
//         <div className="mt-auto">
//           <ApplyButton onClick={closeMenu} />
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Navbar;

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/KOlsImage/Logo.png';

function Navbar({ scrollToAbout, scrollToServices, scrollToContact }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('button')) {
        setIsOpen(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="absolute top-[-10px] left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-8">
      <div className="flex items-center w-1/3">
        <motion.img 
          src={Logo} 
          alt="moonMaster Logo" 
          className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
          animate={{ opacity: isScrolled ? 0 : 1, scale: isScrolled ? 0.8 : 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className={`hidden lg:flex w-1/3 justify-center items-center space-x-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full px-6 py-2 ${isScrolled ? 'fixed top-4 left-1/2 transform -translate-x-1/2 z-50' : ''}`}>
        <NavItem onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} text="Home" />
        <NavItem onClick={scrollToAbout} text="About" />
        <NavItem onClick={scrollToServices} text="Services" />
        <NavItem onClick={scrollToContact} text="Contact Us" />
      </div>
      <div className="hidden lg:flex w-1/3 justify-end">
        <motion.div
          animate={{ opacity: isScrolled ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <ApplyButton />
        </motion.div>
      </div>
      <div className="lg:hidden">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleMenu}
          className="text-white z-50 relative p-2 h-12 w-12 flex items-center justify-center"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <MobileMenu 
            closeMenu={closeMenu} 
            menuRef={menuRef}
            scrollToAbout={scrollToAbout}
            scrollToServices={scrollToServices}
            scrollToContact={scrollToContact}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavItem({ onClick, text }) {
  return (
    <motion.div
      className="relative text-white px-3 py-1 rounded-full transition-colors cursor-pointer"
      whileHover="hover"
      initial="rest"
      animate="rest"
      onClick={onClick}
    >
      <motion.span
        className="relative z-10"
        variants={{
          rest: { y: 0 },
          hover: { y: -5 }
        }}
      >
        {text}
      </motion.span>
      <motion.div
        className="absolute inset-0 bg-white bg-opacity-20 rounded-full"
        variants={{
          rest: { scale: 0, opacity: 0 },
          hover: { 
            scale: 1, 
            opacity: 1,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }
        }}
      />
      <motion.div
        className="absolute inset-0 bg-purple-500 rounded-full"
        variants={{
          rest: { scale: 0, opacity: 0 },
          hover: { 
            scale: 1.1, 
            opacity: 0.2,
            transition: { 
              type: "spring", 
              stiffness: 400, 
              damping: 10, 
              delay: 0.1 
            }
          }
        }}
      />
    </motion.div>
  );
}

function ApplyButton({ onClick }) {
  return (
    <motion.div
      className="relative"
      whileHover="hover"
      initial="rest"
      animate="rest"
      onClick={onClick}
    >
      <motion.div
        className="absolute inset-0 bg-purple-400 rounded-md filter blur-md"
        variants={{
          rest: { opacity: 0, scale: 1 },
          hover: { 
            opacity: 0.6, 
            scale: 1.1,
            transition: { 
              duration: 0.3,
              yoyo: Infinity,
              repeatType: "reverse"
            }
          }
        }}
      />
      <motion.button
        className="relative bg-gradient-to-r from-purple-600 to-[#33069d] hover:from-[#33069d] hover:to-purple-600 text-white px-4 py-2 rounded-lg font-small text-sm sm:text-base"
        variants={{
          hover: { scale: 1.1 },
          rest: { scale: 1 }
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Apply to become a Client →
      </motion.button>
    </motion.div>
  );
}

function MobileMenu({ closeMenu, menuRef, scrollToAbout, scrollToServices, scrollToContact }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50"
    >
      <motion.div
        ref={menuRef}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute right-0 top-0 h-auto max-h-screen overflow-y-auto w-64 sm:w-80 bg-[#19083E] p-8 flex flex-col space-y-4"
      >
        <div className="flex justify-end mb-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={closeMenu}
            className="text-white z-50 relative p-2 h-12 w-12 flex items-center justify-center"
          >
            <X size={24} />
          </motion.button>
        </div>
        <NavItem onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu(); }} text="Home" />
        <NavItem onClick={() => { scrollToAbout(); closeMenu(); }} text="About" />
        <NavItem onClick={() => { scrollToServices(); closeMenu(); }} text="Services" />
        <NavItem onClick={() => { scrollToContact(); closeMenu(); }} text="Contact Us" />
        <div className="mt-auto">
          <ApplyButton onClick={closeMenu} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
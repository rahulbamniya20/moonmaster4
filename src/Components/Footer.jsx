import React from 'react';
// import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Footer = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <footer className="relative text-white overflow-hidden">
      <style jsx>{`
        @keyframes move-twink-back {
          from {
            background-position: 0 0;
          }
          to {
            background-position: -10000px 5000px;
          }
        }

        .stars,
        .twinkling {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          display: block;
        }

        .stars {
          background: #000
            url(http://www.script-tutorials.com/demos/360/images/stars.png)
            repeat top center;
          z-index: 0;
        }

        .twinkling {
          background: transparent
            url(http://www.script-tutorials.com/demos/360/images/twinkling.png)
            repeat top center;
          z-index: 1;
          animation: move-twink-back 200s linear infinite;
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, #000000, #110146, #000000);
          opacity: 0.9;
          z-index: 2;
        }

        .content {
          position: relative;
          z-index: 3;
        }

        .hover-glow:hover {
          text-shadow: 0 0 8px rgba(168, 85, 247, 0.6);
        }
      `}</style>

      {/* Particle background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "#000033",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Animated stars */}
      <div className="stars"></div>
      <div className="twinkling"></div>

      {/* Gradient overlay */}
      <div className="gradient-overlay"></div>

      {/* Content */}
      <div className="content container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className=" mb-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500">
              MoonMaster
            </h3>
            {/* <h3 className="text-2xl font-bold text-transparent  text-purple-400 mb-4">MoonMaster</h3> */}
            <p className="mb-4 text-sm">
              Building the strongest communities for the most powerful crypto
              pumps!
            </p>
            {/* <div className="mb-12">
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto sm:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white bg-opacity-10 px-4 py-2 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-purple-400 w-full sm:w-2/3"
                />
                <button className=" text-xs bg-gradient-to-r from-purple-600 to-[#33069d] hover:from-[#33069d] hover:to-purple-600 text-white px-6 py-2 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none transition-all duration-300 mt-2 sm:mt-0">
                  Connect
                </button>
              </div>
            </div> */}
            {/* <div className="flex space-x-4">
              <a href="#" className="hover-glow">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover-glow">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover-glow">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover-glow">
                <Linkedin className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover-glow">
                  Community Building
                </a>
              </li>
              <li>
                <a href="#" className="hover-glow">
                  Meme Coin Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover-glow">
                  Influencer Partnerships
                </a>
              </li>
              <li>
                <a href="#" className="hover-glow">
                  Token Launch Support
                </a>
              </li>
              <li>
                <a href="#" className="hover-glow">
                  Crypto Education
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover-glow">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover-glow">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover-glow">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover-glow">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover-glow">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover-glow">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover-glow">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="hover-glow">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover-glow">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover-glow">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-12">
          <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto sm:mx-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white bg-opacity-10 px-4 py-2 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-purple-400 w-full sm:w-2/3"
            />
            <button className="bg-gradient-to-r from-purple-600 to-[#33069d] hover:from-[#33069d] hover:to-purple-600 text-white px-6 py-2 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none transition-all duration-300 mt-2 sm:mt-0">
              Get in touch
            </button>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-white opacity-20 mb-8" />

        {/* Copyright and Additional Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-60 mb-4 md:mb-0">
            © 2024 MoonMaster. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
            <a href="#" className="hover-glow">
              Terms of Service
            </a>
            <a href="#" className="hover-glow">
              Privacy Policy
            </a>
            <a href="#" className="hover-glow">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
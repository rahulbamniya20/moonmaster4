// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import APUSTAJA from '../assets/KOlsImage/APUSTAJA.jpg';
// import Myro from '../assets/KOlsImage/Myro.jpg';
// import MANEKI from '../assets/KOlsImage/MANEKI.jpg';
// import PeiPei from '../assets/KOlsImage/PeiPei.jpg';
// import Vita from '../assets/KOlsImage/Vita.jpg';
// import ToshiTheCat from '../assets/KOlsImage/ToshiTheCat.jpg';

// const collaborations = [
//   { name: 'APU (APUSTAJA)', image: APUSTAJA },
//   { name: 'MYRO', image: Myro },
//   { name: 'Maneki Coin', image: MANEKI },
//   { name: 'PeiPei Coin', image: PeiPei },
//   { name: 'Vita Inu', image: Vita },
//   { name: 'ToshiTheCat', image: ToshiTheCat },
// ];

// const SCROLL_SPEED = 30; // pixels per second

// const TopCollaborations = () => {
//   const [scrollX, setScrollX] = useState(0);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const totalWidth = container.scrollWidth;
//     let animationFrameId;
//     let lastTimestamp = 0;

//     const animate = (timestamp) => {
//       if (!lastTimestamp) lastTimestamp = timestamp;
//       const delta = timestamp - lastTimestamp;
//       lastTimestamp = timestamp;

//       setScrollX((prevScrollX) => {
//         let newScrollX = prevScrollX + (SCROLL_SPEED * delta) / 1000;
//         if (newScrollX >= totalWidth / 2) {
//           newScrollX -= totalWidth / 2;
//         }
//         return newScrollX;
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animationFrameId = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   return (
//     <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000000] via-[#110146] to-[#000000] overflow-hidden">
//       <div className="radiant-glow"></div>
//       <div className="soft-light"></div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500 text-center mb-12 relative z-20">
//           Our Top Collaboration
//         </h2>

//         <div className="w-full overflow-hidden relative">
//           <div
//             ref={containerRef}
//             className="flex"
//             style={{
//               transform: `translateX(${-scrollX}px)`,
//               width: `${collaborations.length * 300}px`,
//             }}
//           >
//             {[...collaborations, ...collaborations].map((collab, index) => (
//               <motion.div
//                 key={`${collab.name}-${index}`}
//                 className="flex-shrink-0 w-72 mx-4"
//                 whileHover={{ scale: 1.07, y: -10 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 5 }}>
//                 <motion.div
//                   className="mt-8 bg-purple-900 bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl border border-purple-500/30"
//                   whileHover={{ boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }}
//                 >
//                   <div className="flex items-center p-4 mb-3">
//                     <img
//                       src={collab.image}
//                       alt={collab.name}
//                       className="w-20 h-20 rounded-full object-cover border-2 border-purple-400"
//                     />
//                     <div className="flex-grow flex justify-center">
//                       <p className="text-purple-200 font-bold text-lg">
//                         {collab.name}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopCollaborations;

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import APUSTAJA from '../assets/KOlsImage/APUSTAJA.jpg';
import Myro from '../assets/KOlsImage/Myro.jpg';
import MANEKI from '../assets/KOlsImage/MANEKI.jpg';
import PeiPei from '../assets/KOlsImage/PeiPei.jpg';
import Vita from '../assets/KOlsImage/Vita.jpg';
import ToshiTheCat from '../assets/KOlsImage/ToshiTheCat.jpg';

const collaborations = [
  { name: 'APU (APUSTAJA)', image: APUSTAJA },
  { name: 'MYRO', image: Myro },
  { name: 'Maneki Coin', image: MANEKI },
  { name: 'PeiPei Coin', image: PeiPei },
  { name: 'Vita Inu', image: Vita },
  { name: 'ToshiTheCat', image: ToshiTheCat },
];

const SCROLL_SPEED = 30; // pixels per second

const TopCollaborations = () => {
  const [scrollX1, setScrollX1] = useState(0);
  const [scrollX2, setScrollX2] = useState(0);
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);

  useEffect(() => {
    const container1 = containerRef1.current;
    const container2 = containerRef2.current;
    if (!container1 || !container2) return;

    const totalWidth = container1.scrollWidth / 2; // Divide by 2 because we're duplicating the items
    let animationFrameId;
    let lastTimestamp = 0;

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      setScrollX1((prevScrollX) => {
        let newScrollX = prevScrollX + (SCROLL_SPEED * delta) / 1000;
        if (newScrollX >= totalWidth) {
          newScrollX -= totalWidth;
        }
        return newScrollX;
      });

      setScrollX2((prevScrollX) => {
        let newScrollX = prevScrollX - (SCROLL_SPEED * delta) / 1000;
        if (newScrollX <= 0) {
          newScrollX += totalWidth;
        }
        return newScrollX;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const renderCollaborations = (scrollX, ref) => (
    <div
      ref={ref}
      className="flex"
      style={{
        transform: `translateX(${-scrollX}px)`,
        width: `${collaborations.length * 300}px`,
      }}
    >
      {[...collaborations, ...collaborations].map((collab, index) => (
        <motion.div
          key={`${collab.name}-${index}`}
          className="flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 mx-2 sm:mx-3 md:mx-4"
          whileHover={{ scale: 1.07, y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 5 }}
        >
          <motion.div
            className="mt-4 sm:mt-6 md:mt-8 bg-purple-900 bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl border border-purple-500/30"
            whileHover={{ boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }}
          >
            <div className="flex items-center p-2 sm:p-3 md:p-4 mb-2 md:mb-3">
              <img
                src={collab.image}
                alt={collab.name}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-purple-400"
              />
              <div className="flex-grow flex justify-center">
                <p className="text-purple-200 font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                  {collab.name}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="relative py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000000] via-[#110146] to-[#000000] overflow-hidden">
      <div className="radiant-glow"></div>
      <div className="soft-light"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500 text-center mb-8 md:mb-12 relative z-20">
          Our Top Collaboration
        </h2>

        <div className="w-full overflow-hidden relative">
          <div className="mb-4 sm:mb-6 md:mb-8">
            {renderCollaborations(scrollX1, containerRef1)}
          </div>
          <div className="sm:hidden">
            {renderCollaborations(scrollX2, containerRef2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCollaborations;
// import React, { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import CountUp from 'react-countup';

// const StatItem = ({ value, label, animate, delay, gradientColor }) => {
//   const numValue = parseFloat(value.replace(/\D/g, ''));
//   return (
//     <motion.div
//       className="relative overflow-hidden rounded-xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-lg h-40"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay }}
//     >
//       <div className="absolute inset-0" style={{
//         background: `radial-gradient(circle at center, ${gradientColor} 0%, rgba(255, 255, 255, 0) 70%)`
//       }}></div>
//       <div className="relative z-10 flex flex-col items-center justify-center h-full">
//         <motion.div
//           className="text-white mb-4"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{
//             delay: delay + 0.2,
//             type: "spring",
//             stiffness: 260,
//             damping: 20,
//           }}
//         >
          
//         </motion.div>
//         <div className="text-3xl font-bold text-white mb-2 text-center">
//           <CountUp
//             start={0}
//             end={numValue}
//             duration={2.5}
//             separator=","
//             prefix={value.startsWith("$") ? "$" : ""}
//             suffix={value.endsWith("+") ? "+" : ""}
//             useEasing={true}
//             useGrouping={true}
//             preserveValue={true}
//             startOnMount={false}
//             redraw={animate}
//           >
//             {({ countUpRef, start }) => (
//               <span ref={countUpRef} onMouseEnter={animate ? start : undefined} />
//             )}
//           </CountUp>
//         </div>
//         <div className="text-sm text-gray-300 font-medium text-center">
//           {label}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const OurNumbers = () => {
//   const [animate, setAnimate] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const [entry] = entries;
//         if (entry.isIntersecting) {
//           setAnimate(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       {
//         threshold: 0.2,
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="relative py-24 px-4 bg-gradient-to-b from-[#000000] via-[#110146] to-[#000000]" ref={sectionRef}>
//       <div className="relative max-w-6xl mx-auto">
//       <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500 text-center mb-12 relative z-20">
//           Our Numbers Speak For Themselves
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <StatItem value="2500+" label="Global KOLs Partners."  animate={animate} delay={0.1} gradientColor="rgba(99, 102, 241, 0.2)" />
//           <StatItem value="1000000+" label="Token Holders."  animate={animate} delay={0.1} gradientColor="rgba(99, 102, 241, 0.2)" />
//           <StatItem value="50+" label="Memecoin Launches" animate={animate} delay={0.3} gradientColor="rgba(236, 72, 153, 0.2)" />
//           <StatItem value="$100 Million+" label="Volume generated"  animate={animate} delay={0.4} gradientColor="rgba(99, 102, 241, 0.2)" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurNumbers;

import React from 'react';
import { motion } from 'framer-motion';

const statItems = [
  { value: '2500+', label: 'Global KOLs Partners' },
  { value: '1 Million+', label: 'Token Holders' },
  { value: '50+', label: 'Memecoin Launches' },
  { value: '$100 Million+', label: 'Volume generated' },
];

const StatItem = ({ value, label }) => (
  <motion.div
    className="flex flex-col items-center justify-center p-6 rounded-xl bg-purple-900 bg-opacity-10 backdrop-filter backdrop-blur-sm border border-purple-500/30"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.07, y: -10, boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }}
    transition={{ type: "spring", stiffness: 300, damping: 5 }}
  >
    <div className="text-2xl font-bold text-purple-200 mb-2">{value}</div>
    <div className="text-xl text-gray-300 text-center">{label}</div>
  </motion.div>
);

const OurNumbers = () => {
  return (
    <div className="relative py-24 px-4 bg-gradient-to-b from-[#000000] via-[#110146] to-[#000000] overflow-hidden">
      <div className="radiant-glow"></div>
      <div className="soft-light"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500 text-center mb-12">
          Our Numbers Speak For Themselves
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-extrabold text-[40px]">
          {statItems.map((item, index) => (
            <StatItem key={index} value={item.value} label={item.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurNumbers;
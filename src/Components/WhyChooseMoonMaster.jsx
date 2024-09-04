// import React from 'react';
// import { motion } from 'framer-motion';
// import { Globe, Rocket, Link } from 'lucide-react';

// const FeatureItem = ({ Icon, title, description, gradientColor }) => (
//   <div className="relative overflow-hidden rounded-xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-lg h-40">
//     <div className="absolute inset-0" style={{
//       background: `radial-gradient(circle at center, ${gradientColor} 0%, rgba(255, 255, 255, 0) 70%)`
//     }}></div>
//     <div className="relative z-10 flex">
//       <div className="mr-4">
//         <Icon className="text-white" size={24} />
//       </div>
//       <div>
//         <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
//         <p className="text-gray-300 text-md">{description}</p>
//       </div>
//     </div>
//   </div>
// );

// const WhyChooseMoonMaster = () => {
//   return (
//     <div className="bg-gradient-to-b from-[#000000] via-[#110146] to-[#000000] min-h-screen flex items-center justify-center py-20 px-4">
//       <div className="max-w-6xl w-full">
//       <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500 text-center mb-12 relative z-20">
//       Why It's a Big Advantage To Choose Us!
//         </h2>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
//             <FeatureItem 
//               Icon={Globe}
//               title="Global Influence"
//               description="Our network spans across continents, ensuring your meme coin gets worldwide exposure."
//               // gradientColor="rgba(99, 102, 241, 0.2)"
//               gradientColor="rgb(0, 194, 255, 0.2)"
//             />
//           </motion.div>

//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
//             <FeatureItem 
//               Icon={Rocket}
//               title="Meme Mastery"
//               description="We don't just understand memes; we breathe them. Our strategies are fine-tuned for virality."
//               gradientColor="rgba(168, 85, 247, 0.2)"
//             />
//           </motion.div>

//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
//             <FeatureItem 
//               Icon={Link}
//               title="Web3 Native"
//               description="Born in the blockchain, we navigate the complexities of Web3 with ease and expertise."
//               gradientColor="rgba(236, 72, 153, 0.2)"
//             />
//           </motion.div>
//         </div>

//         <motion.div 
//           className="mt-20 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.7 }}
//         >
//           <motion.button 
//             className="bg-gradient-to-r from-purple-600 to-[#33069d] text-white px-6 py-2 rounded-md text-md font-normal hover:from-[#33069d] hover:to-purple-600 ease-in-out transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             animate={{
//               boxShadow: [
//                 "0 0 0 0 rgba(169, 130, 255, 2)",
//                 "0 0 0 10px rgba(167, 139, 250, 0.1)",
//                 "0 0 0 20px rgba(167, 139, 250, 0.05)",
//                 "0 0 0 30px rgba(167, 139, 250, 0)",
//               ],
//             }}
//             transition={{
//               boxShadow: {
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               },
//             }}
//           >
//             Launch Your Coin With Us
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseMoonMaster;

import React from 'react';
import { motion } from 'framer-motion';
// import { Globe, Rocket, Link } from 'lucide-react';

const FeatureItem = ({ title, description }) => (
  <motion.div 
    className="relative overflow-hidden rounded-xl backdrop-blur-sm bg-purple-900 bg-opacity-10 border border-purple-500/30 p-6 shadow-lg h-40"
    whileHover={{ scale: 1.05, y: -10, boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
  >
    <div className="relative z-10 flex">
      {/* <div className="mr-4"> */}
        {/* <Icon className="text-purple-200" size={24} /> */}
      {/* </div> */}
      <div>
        <h3 className="text-purple-200 text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-md font-bold">{description}</p>
      </div>
    </div>
  </motion.div>
);

const WhyChooseMoonMaster = () => {
  return (
    <div className="pb-0 mb-0 relative bg-gradient-to-b from-[#000000] via-[#110146] to-[#000000] min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="radiant-glow absolute inset-0 opacity-50"></div>
      <div className="soft-light absolute inset-0 opacity-50"></div>
      
      <div className="max-w-6xl w-full relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500 text-center mb-12 relative z-20">
          Why It's a Big Advantage To Choose Us!
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <FeatureItem 
              // Icon={Globe}
              title="Global Influence"
              description="Our network spans across continents, ensuring your meme coin gets worldwide exposure."
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <FeatureItem 
              // Icon={Rocket}
              title="Meme Mastery"
              description="We don't just understand memes; we breathe them. Our strategies are fine-tuned for virality."
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <FeatureItem 
              // Icon={Link}
              title="Web3 Native"
              description="Born in the blockchain, we navigate the complexities of Web3 with ease and expertise."
            />
          </motion.div>
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-purple-600 to-[#33069d] text-white px-6 py-2 rounded-md text-md font-normal hover:from-[#33069d] hover:to-purple-600 ease-in-out transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(169, 130, 255, 2)",
                "0 0 0 10px rgba(167, 139, 250, 0.1)",
                "0 0 0 20px rgba(167, 139, 250, 0.05)",
                "0 0 0 30px rgba(167, 139, 250, 0)",
              ],
            }}
            transition={{
              boxShadow: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          >
            Launch Your Coin With Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseMoonMaster;
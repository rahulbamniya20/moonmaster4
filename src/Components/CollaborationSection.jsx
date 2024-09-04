// import React from 'react';
// import { motion } from 'framer-motion';
// import styled from '@emotion/styled';
// import { Send } from 'lucide-react';

// const SectionWrapper = styled.section`
//   background: linear-gradient(to bottom, #000000, #110146, #000000);
//   padding: 4rem 1rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 300px;
// `;

// const ContentContainer = styled.div`
//   max-width: 800px;
//   width: 100%;
//   text-align: center;
// `;

// const Title = styled(motion.h2)`
//   font-size: 3rem;
//   font-weight: bold;
//   color: #a78bfa;
//   margin-bottom: 1rem;
// `;

// const Subtitle = styled(motion.p)`
//   font-size: 1.25rem;
//   color: #d1d5db;
//   margin-bottom: 2rem;
// `;

// const Button = styled(motion.button)`
//   background: linear-gradient(to right, #8B5CF6, #6366F1);
//   color: white;
//   font-weight: bold;
//   padding: 0.75rem 2rem;
//   border-radius: 9999px;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;
//   transition: all 0.3s ease;
//   border: none;
//   cursor: pointer;
//   box-shadow: 0 4px 6px rgba(139, 92, 246, 0.25);

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 6px 8px rgba(139, 92, 246, 0.3);
//   }
// `;

// const CollaborationSection = () => {
//   return (
//     <SectionWrapper>
//       <ContentContainer>
//       <h2 className="text-3xl md:text-4xl text-white font-semibold text-center mb-12">
//         Let's get to   <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500 text-center mb-12 relative z-20">WORK </span>
//         </h2>
//         <Subtitle
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           We're ready to help you build the strongest community for the most powerful pumps All you need to do is hit the button below!  🚀
//           {/* We’re ready to get started on your next creative project. All you need to do is hit the button below 🚀 */}
//         </Subtitle>
//         <motion.div
//           className="mt-20 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.7 }}
//         >
//           <motion.button
//             className="bg-gradient-to-r from-purple-600 to-[#33069d] text-white px-6 py-2 rounded-md text-md font-normal hover:from-[#33069d] hover:to-purple-600 ease-in-out transition-all duration-300 inline-flex items-center"
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
//             Start Your Collaboration
//             <Send className="w-4 h-4 ml-2" />
//           </motion.button>
//         </motion.div>
//       </ContentContainer>
//     </SectionWrapper>
//   );
// };

// export default CollaborationSection;


import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const CollaborationSection = () => {
  return (
    <div className="-mt-[35px] relative bg-gradient-to-b from-[#000000] via-[#110146] to-[#000000] py-10 flex items-center justify-center p-4 overflow-hidden">

        <div className="radiant-glow absolute inset-0 opacity-50"></div>
        <div className="soft-light absolute inset-0 opacity-50"></div>

      <motion.div
        className="relative z-10 w-full max-w-5xl h-auto rounded-xl backdrop-blur-sm bg-purple-900 bg-opacity-10 border border-purple-500/30 p-8 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <h2 className="text-3xl md:text-4xl text-white font-semibold text-center mb-6">
          {/* Let's get to{" "} */}
          <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500">
          Let's get to work
          </span>
        </h2>

        <p className="text-lg text-white text-center mb-10">
          We're ready to help you build the strongest community for the most
          powerful pumps.🚀
        </p>

        <div className="text-center">
          <motion.button
            className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-normal text-white rounded-md group bg-gradient-to-r from-purple-600 to-[#33069d] hover:from-[#33069d] hover:to-purple-600"
            >
            Start Your Collaboration
            <Send className="w-4 h-4 ml-2" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default CollaborationSection;
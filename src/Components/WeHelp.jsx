// import React from 'react';
// import { motion } from 'framer-motion';
// import { VisibilityOutlined, GroupsOutlined, DescriptionOutlined, AnalyticsOutlined, SpaOutlined } from '@mui/icons-material';

// const ServiceItem = ({ Icon, title, description, gradientColor, className }) => (
//   <motion.div 
//     initial={{ opacity: 0, y: 20 }} 
//     animate={{ opacity: 1, y: 0 }} 
//     transition={{ duration: 0.5 }}
//     className={`relative overflow-hidden rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/20 p-3 sm:p-4 shadow-lg ${className}`}
//   >
//     <div className="absolute inset-0" style={{
//       // background: `radial-gradient(circle at center, ${gradientColor} 0%, rgba(255, 255, 255, 0) 70%)`
//     }}></div>
//     <div className="relative z-10 h-full flex flex-col">
//       <div className="flex items-center mb-2">
//         <div className="bg-white/20 p-1 sm:p-1.5 rounded-full mr-2">
//           <Icon className="text-white text-lg sm:text-xl" />
//         </div>
//         <h3 className="text-white text-base sm:text-lg font-semibold">{title}</h3>
//       </div>
//       <p className="text-sm sm:text-base leading-relaxed flex-grow text-purple-200">{description}</p>
//     </div>
//   </motion.div>
// );

// const WeHelp = () => {
//   return (
//     <div className="bg-gradient-to-b from-[#000000] via-[#110146] to-[#000000] h-screen flex items-center justify-center p-4">
//       <div className="w-full max-w-4xl h-full max-h-[850px] flex flex-col">
//       <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500 text-center mb-12 relative z-20">
//           We Like Keeping Things Simple We Help You With
//         </h2>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 flex-grow font-semibold leading-6">
//           <ServiceItem 
//             Icon={VisibilityOutlined}
//             title="Laser-focused KOL"
//             description="Find perfect influencers for your brand and maximize your reach with our data-driven approach to KOL selection. Find perfect influencers for your brand and maximize your reach with our data-driven approach to KOL selection."
//             gradientColor="rgba(99, 102, 241, 0.2)"
//             className="sm:col-span-2 lg:col-span-1 lg:row-span-2 leading-5"
//           />
//           <ServiceItem 
//             Icon={GroupsOutlined}
//             title="A to Z Campaign Management"
//             description="Full oversight from concept to completion, ensuring seamless execution and optimal results."
//             gradientColor="rgba(168, 85, 247, 0.2)"
//             className="sm:col-span-2 lg:col-span-2"
//           />
//           <ServiceItem 
//             Icon={DescriptionOutlined}
//             title="Expert Content"
//             description="Our team creates engaging narratives that resonate with your target demographic."
//             gradientColor="rgba(236, 72, 153, 0.2)"
//           />
//           <ServiceItem 
//             Icon={AnalyticsOutlined}
//             title="Content Tracking"
//             description="Maximize impact with data-driven insights for your campaigns."
//             gradientColor="rgba(99, 102, 241, 0.2)"
//           />
//           <ServiceItem 
//             Icon={SpaOutlined}
//             title="Exclusive Perks & Benefits"
//             description="Unique advantages setting your influencer campaigns apart, ensuring maximum engagement and ROI. Cutting-edge tools to amplify your brand’s presence."
//             gradientColor="rgba(236, 72, 153, 0.2)"
//             className="sm:col-span-2"
//           />
//           <ServiceItem 
//             Icon={VisibilityOutlined}
//             title="Strategic Partnerships"
//             description="Build lasting influencer relationships that drive long-term value for your brand."
//             gradientColor="rgba(168, 85, 247, 0.2)"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeHelp;


import React from 'react';
import { motion } from 'framer-motion';
import { VisibilityOutlined, GroupsOutlined, DescriptionOutlined, AnalyticsOutlined, SpaOutlined } from '@mui/icons-material';

const ServiceItem = ({ Icon, title, description, className }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    whileHover={{ scale: 1.05, y: -10, boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
    className={`relative overflow-hidden rounded-xl backdrop-blur-sm bg-purple-900 bg-opacity-10 border border-purple-500/30 p-3 sm:p-4 shadow-lg ${className}`}
  >
    <div className="relative z-10 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-3">
          <div className="bg-white/20 p-1 sm:p-1.5 rounded-full mr-2">
            <Icon className="text-purple-200 text-lg sm:text-xl" />
          </div>
          <h3 className="text-purple-200 text-base sm:text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-sm sm:text-base leading-relaxed text-gray-300" dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </div>
  </motion.div>
);

const WeHelp = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#000000] via-[#110146] to-[#000000] py-10 flex items-center justify-center p-4 overflow-hidden">
      <div className="radiant-glow absolute inset-0 opacity-50"></div>
      <div className="soft-light absolute inset-0 opacity-50"></div>
      
      <div className="relative z-10 w-full max-w-4xl flex flex-col">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500 text-center mb-12 relative z-20">
          We Like Keeping Things Simple We Help You With
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 flex-grow font-semibold leading-6">
          <ServiceItem 
            Icon={VisibilityOutlined}
            title="Laser-focused KOL"
            description="Find perfect influencers for your brand and maximize your reach with our data-driven approach to KOL selection.<br><br>Our expert team leverages advanced analytics to identify the most impactful KOLs for your specific niche and campaign goals."
            className="sm:col-span-2 lg:col-span-1 lg:row-span-2"
          />
          <ServiceItem 
            Icon={GroupsOutlined}
            title="A to Z Campaign Management"
            description="Full oversight from concept to completion, ensuring seamless execution and optimal results."
            className="sm:col-span-2 lg:col-span-2"
          />
          <ServiceItem 
            Icon={DescriptionOutlined}
            title="Expert Content"
            description="Our team creates engaging narratives that resonate with your target demographic."
          />
          <ServiceItem 
            Icon={AnalyticsOutlined}
            title="Content Tracking"
            description="Maximize impact with data-driven insights for your campaigns."
          />
          <ServiceItem 
            Icon={SpaOutlined}
            title="Exclusive Perks & Benefits"
            description="Unique advantages setting your influencer campaigns apart, ensuring maximum engagement and ROI. Cutting-edge tools to amplify your brand's presence."
            className="sm:col-span-2"
          />
          <ServiceItem 
            Icon={VisibilityOutlined}
            title="Strategic Partnerships"
            description="Build lasting influencer relationships that drive long-term value for your brand."
          />
        </div>
      </div>
    </div>
  );
};

export default WeHelp;
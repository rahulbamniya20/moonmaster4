import React from 'react';
import { motion } from 'framer-motion';
import { VisibilityOutlined, GroupsOutlined, DescriptionOutlined, AnalyticsOutlined, SpaOutlined } from '@mui/icons-material';

const ServiceItem = ({ Icon, title, description, gradientColor, className }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5 }}
    className={`relative overflow-hidden rounded-xl backdrop-blur-md bg-white/10 border border-white/20 p-3 sm:p-4 shadow-lg ${className}`}
  >
    <div className="absolute inset-0" style={{
      background: `radial-gradient(circle at center, ${gradientColor} 0%, rgba(255, 255, 255, 0) 70%)`
    }}></div>
    <div className="relative z-10 h-full flex flex-col">
      <div className="flex items-center mb-2">
        <div className="bg-white/20 p-1 sm:p-1.5 rounded-full mr-2">
          <Icon className="text-white text-lg sm:text-xl" />
        </div>
        <h3 className="text-white text-base sm:text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-200 text-sm sm:text-base leading-relaxed flex-grow">{description}</p>
    </div>
  </motion.div>
);

const WeHelp = () => {
  return (
    <div className="bg-gradient-to-b from-[#000000] via-[#110146] to-[#000000] h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-full max-h-[850px] flex flex-col">
        <h2 className="text-3xl sm:text-2xl md:text-3xl text-white font-semibold text-center mb-4 sm:mb-6">
          We like keeping things <span className="text-2xl sm:text-3xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500">SIMPLE</span> we help you with
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 flex-grow">
          <ServiceItem 
            Icon={VisibilityOutlined}
            title="Laser-focused KOL Selection"
            description="Find perfect influencers for your brand and maximize your reach with our data-driven approach to KOL selection.
            Our advanced algorithms analyze millions of profiles to identify the most relevant and impactful KOLs for your specific niche and campaign goals."
            gradientColor="rgba(99, 102, 241, 0.2)"
            className="sm:col-span-2 lg:col-span-1 lg:row-span-2"
          />
          <ServiceItem 
            Icon={GroupsOutlined}
            title="A to Z Campaign Management"
            description="Full oversight from concept to completion, ensuring seamless execution and optimal results."
            gradientColor="rgba(168, 85, 247, 0.2)"
            className="sm:col-span-2 lg:col-span-2"
          />
          <ServiceItem 
            Icon={DescriptionOutlined}
            title="Expert Content Support"
            description="Our team creates engaging narratives that resonate with your target demographic."
            gradientColor="rgba(236, 72, 153, 0.2)"
          />
          <ServiceItem 
            Icon={AnalyticsOutlined}
            title="Content Tracking & Analysis"
            description="Maximize impact with data-driven insights for your campaigns."
            gradientColor="rgba(99, 102, 241, 0.2)"
          />
          <ServiceItem 
            Icon={SpaOutlined}
            title="Exclusive Perks & Benefits"
            description="Unique advantages setting your influencer campaigns apart, ensuring maximum engagement and ROI."
            gradientColor="rgba(236, 72, 153, 0.2)"
            className="sm:col-span-2"
          />
          <ServiceItem 
            Icon={VisibilityOutlined}
            title="Strategic Partnerships"
            description="Build lasting influencer relationships that drive long-term value for your brand."
            gradientColor="rgba(168, 85, 247, 0.2)"
          />
        </div>
      </div>
    </div>
  );
};

export default WeHelp;
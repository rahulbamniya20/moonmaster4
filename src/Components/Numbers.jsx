import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { TrendingUp, Users, Rocket, DollarSign } from 'lucide-react';

const StatItem = ({ value, label, icon: Icon, animate, delay, gradientColor }) => {
  const numValue = parseFloat(value.replace(/\D/g, ''));
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-lg h-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="absolute inset-0" style={{
        background: `radial-gradient(circle at center, ${gradientColor} 0%, rgba(255, 255, 255, 0) 70%)`
      }}></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <motion.div
          className="text-white mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: delay + 0.2,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Icon size={36} />
        </motion.div>
        <div className="text-3xl font-bold text-white mb-2 text-center">
          <CountUp
            start={0}
            end={numValue}
            duration={2.5}
            separator=","
            prefix={value.startsWith("$") ? "$" : ""}
            suffix={value.endsWith("+") ? "+" : ""}
            useEasing={true}
            useGrouping={true}
            preserveValue={true}
            startOnMount={false}
            redraw={animate}
          >
            {({ countUpRef, start }) => (
              <span ref={countUpRef} onMouseEnter={animate ? start : undefined} />
            )}
          </CountUp>
        </div>
        <div className="text-sm text-gray-300 font-medium text-center">
          {label}
        </div>
      </div>
    </motion.div>
  );
};

const OurNumbers = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="relative py-24 px-4 bg-gradient-to-b from-[#000000] via-[#110146] to-[#000000]" ref={sectionRef}>
      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-3xl text-white font-semibold text-center mb-12">
          Our Numbers <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500 text-center mb-12 relative z-20">SPEAK </span>
          for Themselves
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem value="$100+" label="Total Volume" icon={DollarSign} animate={animate} delay={0.1} gradientColor="rgba(99, 102, 241, 0.2)" />
          <StatItem value="100,000+" label="Token Holders" icon={Users} animate={animate} delay={0.2} gradientColor="rgba(168, 85, 247, 0.2)" />
          <StatItem value="50+" label="Memecoin Launches" icon={Rocket} animate={animate} delay={0.3} gradientColor="rgba(236, 72, 153, 0.2)" />
          <StatItem value="$1000+" label="Trading Volume" icon={TrendingUp} animate={animate} delay={0.4} gradientColor="rgba(99, 102, 241, 0.2)" />
        </div>
      </div>
    </div>
  );
};

export default OurNumbers;



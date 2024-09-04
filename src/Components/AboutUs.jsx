// import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
// import Spline from '@splinetool/react-spline';
// import { motion } from 'framer-motion';
// import gsap from 'gsap';
// import { TextPlugin } from 'gsap/TextPlugin';
// import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

// // Register the TextPlugin
// gsap.registerPlugin(TextPlugin);

// const AboutUs = () => {
//   const headingRef = useRef(null);
//   const contentRef = useRef(null);
//   const animationRef = useRef(null);
//   const roughNotationRef = useRef(null);
//   const [showRoughNotation, setShowRoughNotation] = useState(false);

//   const phrases = useMemo(() => [
//     "About",
//     "Launching",
//     "Crafting",
//     "Building"
//   ], []);

//   const animateText = useCallback(() => {
//     if (animationRef.current) animationRef.current.kill();

//     const tl = gsap.timeline({ repeat: -1 });
//     animationRef.current = tl;

//     phrases.forEach((phrase) => {
//       tl.to(headingRef.current, {
//         duration: 1,
//         text: phrase,
//         ease: "power4.out",
//       })
//       .to({}, { duration: 3 }); // Pause for 3 seconds before next phrase
//     });
//   }, [phrases]);

//   useEffect(() => {
//     animateText();
//     return () => {
//       if (animationRef.current) animationRef.current.kill();
//     };
//   }, [animateText]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setShowRoughNotation(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (roughNotationRef.current) {
//       observer.observe(roughNotationRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const fadeInUp = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 }
//   };

//   const stagger = {
//     animate: {
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   return (
//     <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#000000] via-[#100349] to-[#000000]">
//       <motion.div 
//         className="relative z-20 container mx-auto px-4 py-20"
//         initial="initial"
//         animate="animate"
//         variants={stagger}
//         ref={contentRef}
//       >
//         <motion.h2 
//           className="text-3xl md:text-3xl text-white font-semibold text-center mb-12"
//           variants={fadeInUp}
//           whileHover={{ scale: 1.05 }}
//         >
//           <span ref={headingRef}>About</span>{" "}
//           <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500 relative z-20">
//             MOON MASTER
//           </span>
//         </motion.h2>

//         <div className="flex flex-col md:flex-row gap-12 items-center">
//           <motion.div className="space-y-6 md:w-1/2" variants={fadeInUp} ref={roughNotationRef}>
//             <RoughNotationGroup show={showRoughNotation}>
//               <p className="text-xl leading-relaxed text-white">
//                 At <RoughNotation type="highlight" color="rgba(239, 68, 68, 0.2)">MoonMaster</RoughNotation>, we're not just another crypto marketing team. We're
//                 a <RoughNotation type="underline" color="#60A5FA">constellation</RoughNotation> of top Crypto KOLs, united by our passion for
//                 launching meme coins into the <RoughNotation type="circle" color="#FBBF24">stratosphere</RoughNotation> of success.
//               </p>
//               <p className="text-xl leading-relaxed text-white">
//                 Founded by <RoughNotation type="box" color="#8B5CF6">industry-leading</RoughNotation> Key Opinion Leaders, we bring
//                 unparalleled expertise and influence to every project we touch.
//                 Our mission? To guide your <RoughNotation type="highlight" color="rgba(16, 185, 129, 0.2)">meme coin</RoughNotation> through the vast crypto
//                 universe and land it safely on the <RoughNotation type="underline" color="#F59E0B">moon</RoughNotation>.
//               </p>
//             </RoughNotationGroup>
//           </motion.div>

//           <motion.div 
//             className="relative w-full md:w-1/2 h-[300px] md:h-[400px] overflow-hidden"
//             variants={fadeInUp}
//           >
//             <div className="absolute inset-0 w-[150%] h-[150%] -left-1/4 -top-1/4">
//               {/* <Spline scene="https://prod.spline.design/LwX1NK-f5Or9ovwY/scene.splinecode" /> */}
//               {/* <Spline scene="https://prod.spline.design/76JOjuPA3x8mmk-S/scene.splinecode" /> */}
//               <Spline scene="https://prod.spline.design/viMqCvIhaEGsmCyu/scene.splinecode" />
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default AboutUs;

import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

const AboutUs = () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);
  const roughNotationRef = useRef(null);
  const [showRoughNotation, setShowRoughNotation] = useState(false);

  const phrases = useMemo(() => [
    "About",
    "Launching",
    "Crafting",
    "Building"
  ], []);

  const animateText = useCallback(() => {
    if (animationRef.current) animationRef.current.kill();

    const tl = gsap.timeline({ repeat: -1 });
    animationRef.current = tl;

    phrases.forEach((phrase) => {
      tl.to(headingRef.current, {
        duration: 1,
        text: phrase,
        ease: "power4.out",
      })
      .to({}, { duration: 3 }); // Pause for 3 seconds before next phrase
    });
  }, [phrases]);

  useEffect(() => {
    animateText();
    return () => {
      if (animationRef.current) animationRef.current.kill();
    };
  }, [animateText]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowRoughNotation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (roughNotationRef.current) {
      observer.observe(roughNotationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#000000] via-[#100349] to-[#000000] py-20">
      <motion.div 
        className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl"
        initial="initial"
        animate="animate"
        variants={stagger}
        ref={contentRef}
      >
        <motion.h2 
          className="text-3xl md:text-3xl lg:text-4xl text-white font-semibold text-center mb-12"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          <span ref={headingRef}>About</span>{" "}
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500 relative z-20">
            MOON MASTER
          </span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center text-pretty justify-center">
          <motion.div className="space-y-6 w-full lg:w-1/2 max-w-2xl" variants={fadeInUp} ref={roughNotationRef}>
            <RoughNotationGroup show={showRoughNotation}>
              <p className="text-lg sm:text-xl leading-relaxed text-white text-center lg:text-left">
                At <RoughNotation type="highlight" color="rgba(239, 68, 68, 0.2)">MoonMaster</RoughNotation>, we're not just another crypto marketing team. We're
                a <RoughNotation type="underline" color="#60A5FA">constellation</RoughNotation> of top Crypto KOLs, united by our passion for
                launching meme coins into the <RoughNotation type="circle" color="#FBBF24">stratosphere</RoughNotation> of success.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-white text-center lg:text-left">
                Founded by <RoughNotation type="box" color="#8B5CF6">industry-leading</RoughNotation> Key Opinion Leaders, we bring
                unparalleled expertise and influence to every project we touch.
                Our mission? To guide your meme coin through the vast crypto
                universe and land it safely on the <RoughNotation type="underline" color="#F59E0B">moon</RoughNotation>.
              </p>
            </RoughNotationGroup>
          </motion.div>

          <motion.div 
            className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] max-w-2xl overflow-hidden"
            variants={fadeInUp}
          >
            <div className="absolute inset-0 w-[150%] h-[150%] -left-1/4 -top-1/4">
              <Spline scene="https://prod.spline.design/EooCyRn4gGKsonxZ/scene.splinecode" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
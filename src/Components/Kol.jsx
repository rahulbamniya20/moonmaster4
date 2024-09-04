// import React from 'react';
// import { motion } from 'framer-motion';
// import styled from '@emotion/styled';
// import { css, keyframes } from '@emotion/react';
// import Gordon from '../assets/KOlsImage/Gordon.jpg';
// import Davinci from '../assets/KOlsImage/Davinci.jpg';
// import Bitlord from '../assets/KOlsImage/Bitlord.jpg';
// import Bull from '../assets/KOlsImage/Bull.jpg';
// import Elja from '../assets/KOlsImage/Elja.jpg';
// import Martini from '../assets/KOlsImage/Martini.jpg';
// import King from '../assets/KOlsImage/King.jpg';
// import MASON from '../assets/KOlsImage/MASON.jpg';
// import Rover from '../assets/KOlsImage/Rover.jpg';
// import  Tony from '../assets/KOlsImage/ Tony.jpg';

// const kols = [
//   { name: 'Gordon', image: Gordon },
//   { name: 'Davincij15', image: Davinci },
//   { name: 'Crypto Bitlord', image: Bitlord },
//   { name: 'Bull BNB', image: Bull },
//   { name: 'Crypto Tony', image: Tony },
//   { name: 'Eljaboom', image: Elja },
//   { name: 'Martini Guy', image: Martini },
//   { name: 'Cryptoking', image: King },
//   { name: 'Mason Versluis', image: MASON },
//   { name: 'Rover', image: Rover },
// ];

// const shine = keyframes`
//   0% { background-position: 200% center; }
//   100% { background-position: -200% center; }
// `;

// const KolCardWrapper = styled(motion.div)`
//   position: relative;
//   border-radius: 16px;
//   overflow: hidden;
//   aspect-ratio: 1;
//   cursor: pointer;
  
//   &::before {
//     content: '';
//     position: absolute;
//     inset: 0;
//     background: linear-gradient(
//       60deg,
//       transparent 20%,
//       rgba(255, 255, 255, 0.2),
//       transparent 80%
//     );
//     background-size: 200% auto;
//     animation: ${shine} 3s linear infinite;
//     z-index: 2;
//   }
// `;

// const KolImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: transform 0.3s ease;

//   ${KolCardWrapper}:hover & {
//     transform: scale(1.05);
//   }
// `;

// const NameOverlay = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   padding: 12px 8px;
//   background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4));
//   color: white;
//   text-align: center;
//   z-index: 3;
//   transition: all 0.3s ease;

//   ${KolCardWrapper}:hover & {
//     padding-bottom: 16px;
//     background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5));
//   }
// `;

// const KolName = styled.h3`
//   margin: 0;
//   font-size: 1rem;
//   font-weight: bold;
//   ${'' /* text-transform: uppercase; */}
//   letter-spacing: 0.5px;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
//   transition: all 0.3s ease;

//   ${KolCardWrapper}:hover & {
//     transform: scale(1.05);
//     text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
//   }
// `;

// const KolCard = ({ kol }) => {
//   return (
//     <KolCardWrapper
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       transition={{ type: "spring", stiffness: 300, damping: 10 }}
//     >
//       <KolImage src={kol.image} alt={kol.name} />
//       <NameOverlay>
//         <KolName>{kol.name}</KolName>
//       </NameOverlay>
//     </KolCardWrapper>
//   );
// };

// const KolSection = styled.section`
//   padding: 5rem 0;
//   background: linear-gradient(to bottom, #000000, #110146, #000000);
//   overflow: hidden;
// `;
// // from-[#000000] via-[#110146] to-[#000000]

// const KolContainer = styled.div`
//   max-width: 1000px;
//   margin: 0 auto;
//   padding: 0 1rem;
// `;

// const KolTitle = styled(motion.h2)`
//   font-size: 3rem;
//   font-weight: bold;
//   text-align: center;
//   background: linear-gradient(to right, #A78BFA, #818CF8);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   margin-bottom: 4rem;
// `;

// const KolGrid = styled(motion.div)`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//   gap: 1.5rem;
// `;

// const Kol = () => {
//   return (
//     <KolSection>
//       <KolContainer>
//       <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500 text-center mb-12 relative z-20">
//           Our Top KOLs
//         </h2>
//         <KolGrid
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.4, delay: 2 }}
//         >
//           {kols.map((kol, index) => (
//             <motion.div
//               key={kol.name}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <KolCard kol={kol} />
//             </motion.div>
//           ))}
//         </KolGrid>
//       </KolContainer>
//     </KolSection>
//   );
// };

// export default Kol;


import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import Gordon from '../assets/KOlsImage/Gordon.jpg';
import Davinci from '../assets/KOlsImage/Davinci.jpg';
import Bitlord from '../assets/KOlsImage/Bitlord.jpg';
import Bull from '../assets/KOlsImage/Bull.jpg';
import Elja from '../assets/KOlsImage/Elja.jpg';
import Martini from '../assets/KOlsImage/Martini.jpg';
import King from '../assets/KOlsImage/King.jpg';
import MASON from '../assets/KOlsImage/MASON.jpg';
import Rover from '../assets/KOlsImage/Rover.jpg';
import Tony from '../assets/KOlsImage/ Tony.jpg';

const kols = [
  { name: 'Gordon', image: Gordon, link: 'https://x.com/AltcoinGordon' },
  { name: 'Davincij15', image: Davinci, link: 'https://x.com/Davincij15' },
  { name: 'Crypto Bitlord', image: Bitlord, link: 'https://x.com/crypto_bitlord7' },
  { name: 'Bull BNB', image: Bull, link: 'https://x.com/bull_bnb' },
  { name: 'Crypto Tony', image: Tony, link: 'https://x.com/CryptoTony__' },
  { name: 'Eljaboom', image: Elja, link: 'https://x.com/Eljaboom' },
  { name: 'Martini Guy', image: Martini, link: 'https://x.com/MartiniGuyYT' },
  { name: 'Cryptoking', image: King, link: 'https://x.com/Cryptoking' },
  { name: 'Mason Versluis', image: MASON, link: 'https://x.com/MasonVersluis' },
  { name: 'Rover', image: Rover, link: 'https://x.com/rovercrc' },
];

const KolCardWrapper = styled(motion.div)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;
`;

const KolImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${KolCardWrapper}:hover & {
    transform: scale(1.05);
  }
`;

const NameOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 8px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4));
  text-align: center;
  z-index: 3;
  transition: all 0.3s ease;

  ${KolCardWrapper}:hover & {
    padding-bottom: 16px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5));
  }
`;

const KolName = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  color: #e9d5ff; // text-purple-200

  ${KolCardWrapper}:hover & {
    transform: scale(1.05);
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
  }
`;

const KolCard = ({ kol }) => {
  return (
    <KolCardWrapper
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      onClick={() => window.open(kol.link, '_blank')}
    >
      <KolImage src={kol.image} alt={kol.name} />
      <NameOverlay>
        <KolName>{kol.name}</KolName>
      </NameOverlay>
    </KolCardWrapper>
  );
};

const KolSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(to bottom, #000000, #110146, #000000);
  overflow: hidden;
`;

const KolContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const KolGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
`;

const Kol = () => {
  return (
    <KolSection>
      <KolContainer>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500 text-center mb-12 relative z-20">
          Our Top KOLs
        </h2>
        <KolGrid
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2 }}
        >
          {kols.map((kol, index) => (
            <motion.div
              key={kol.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <KolCard kol={kol} />
            </motion.div>
          ))}
        </KolGrid>
      </KolContainer>
    </KolSection>
  );
};

export default Kol;

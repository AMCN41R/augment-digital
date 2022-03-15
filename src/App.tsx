import React from 'react';
// import styled from 'styled-components';
// import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Background } from './components/Background';
import { Home } from './components/Home';
// import { About } from './components/About';

interface IProps { }

// const DownArrow = styled.div`
//   position: absolute;
//   bottom: 20px;
//   font-size: 47px;
//   text-align: center;
//   width: 100%;
//   cursor: pointer;

//   animation: bounce 2s infinite;

//   @keyframes bounce {
//     0%, 50%, 100% {
//       transform: translateY(0);
//     }
//     25%, 75% {
//       transform: translateY(15px);
//     }
//   }
// `;

export const App: React.FC<IProps> = (props): JSX.Element => {
  // const scroll = () => document
  //   .getElementById('id-about-page')
  //   ?.scrollIntoView({behavior: 'smooth'});

  return (
  <>
    <Background />

    <Home />
    {/*
    <About id="id-about-page" />

    <DownArrow onClick={scroll}>
      <FontAwesomeIcon icon={faAngleDown} fixedWidth={true} />
    </DownArrow>
    */}
  </>
)}
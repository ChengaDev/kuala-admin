import styled, { keyframes } from 'styled-components';

const show = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
    z-index: -1;
  } 
  to {
    transform: scale(1);
    opacity: 1;
    z-index: 2;
  }
`;

export const DarkOverlay = styled.div`
    animation: ${show} 0.3s linear;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0px;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.8);
    pointer-events: none !important;
    transition: 0.15s ease-in-out all;
`;

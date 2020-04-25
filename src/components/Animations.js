import { keyframes } from 'styled-components';

export const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Rotate = keyframes`
    to {
        transform: rotateZ(360deg);
    }
`;
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 :root {
    --primary-blue-dark: #012169; /* Pantone 280 C */
    --primary-blue: #0032A0;     /* Pantone 286 C */
    --primary-blue-light: #307FE2; /* Pantone 2727 C */
    --secondary-yellow-dark: #A09200; /* Pantone 399 C */
    --secondary-yellow: #EADA24;    /* Pantone 604 C */
    --secondary-yellow-light: #F9E267; /* Pantone 2003 C */


    --primary: #E27B30;
    --primary-dark: #9d4933;
    --secondary: #1f2a2b; 
    --secondary-light: #a9b0b3;



    --status-success-100: #D1FADF;
    --status-success-500: #12B76A;
    --status-success-950: #05603A;

    --status-warning-500: #FDB022;

    --status-error-100: #FEE4E2;
    --status-error-950: #912018;

 

    --neutral-250: #5f656b;
   
    --neutral-black: #000000;
    --neutral-white: #FFFFFF;
    --neutral-50: #FAFAFA;
    --neutral-150: #f2f1ec;
    --neutral-100: #F9F9F9;
    --neutral-200: #E4E7EC;
    --neutral-300: #D0D5DD;
    --neutral-400: #98A2B3;
    --neutral-500: #667085;
    --neutral-800: #1D2939;

    --fontWeightRegular: 400;
    --fontWeightMedium: 500;
    --fontWeightSemiBold: 600;
    --fontWeightBold: 700;
    --fontWeightExtraBold: 800;

    --transparent: transparent
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
  html {
    background-color: var(--neutral-white);
  

    @media (max-width: 1080px) {
      font-size: 93.75%; 
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
`;

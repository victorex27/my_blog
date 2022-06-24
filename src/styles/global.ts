import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*, *::before,*::after{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: inherit;
    font-family: 'Open Sans', sans-serif;
}

html{
    font-size: 62.5%;
}

body{
   
    font-family: 'LATO', sans-serif;
  font-weight: 400;
  line-height: 1.7;
  /* padding: 3rem; */
  box-sizing: border-box;
  min-height: 100vh;
}

#root{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    
    min-height: 100vh;
}
`
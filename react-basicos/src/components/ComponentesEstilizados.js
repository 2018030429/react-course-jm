import React, { Fragment } from "react";
import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from "styled-components";

export default function ComponentesEstilizados() {

  let mainColor = "#DB7093",
    mainAlphaColor80 = "#DB709380";

  const setTransitionTime = (time) => `all ${ time } ease-in-out`; 

  const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
  `;

  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    color: ${ ({ color }) => color || "#000" };
    background-color: ${ mainColor };
    transition: ${ setTransitionTime("1s") };
    animation: ${ fadeIn } 5s ease-out;

    ${({ isButton }) => isButton && css`
      margin: auto;
      max-width: 50%;
      border-radius: .25rem;
      cursor: pointer;
    `}

    &:hover {
      background-color: ${ mainAlphaColor80 };
    }
  `;

  const light = {
    color: "#222",
    bgColor: "#DDD"
  }

  const dark = {
    color: "#DDD",
    bgColor: "#222"
  }

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({theme}) => theme.color};
    background-color: ${({theme}) => theme.bgColor};
  `;

  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;

  const GlobalStyle = createGlobalStyle`
    h2 {
      padding: 2rem;
      background-color: #fff;
      color: #61dafb;
      text-transform: uppercase;
    }
  `;

  return (
    <Fragment>
      <GlobalStyle/>
      <h2> Styled Components </h2>
      <MyH3>Hello I am a h3 styled with styled-components</MyH3>
      <MyH3 color="#61dafb">Hello I am a h3 styled with styled-components</MyH3>
      <MyH3 isButton> I am a styled h3 button </MyH3>
      <ThemeProvider theme={light}>
        <Box>I am a light Box</Box>
        <BoxRounded>I am a light Rounded Box</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>I am a dark Box</Box>
        <BoxRounded>I am a dark Rounded Box</BoxRounded>
      </ThemeProvider>
    </Fragment>
  );
}

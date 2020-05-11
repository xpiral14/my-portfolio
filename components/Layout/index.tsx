import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 4rem;
  width: 90%;
  margin: 4rem auto 0;
  max-width: 1400px;
  display: grid;
  grid-template:
    "main side" auto
    "hab hab" auto
    / 0.65fr 0.35fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  height: 100%;
  padding-bottom: 2rem;
  @media screen and (max-width: 768px) {
    grid-template:
      "main" 1fr
      "side" auto
      "hab" auto
      / 1fr;
  }
`;
export const Layout: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

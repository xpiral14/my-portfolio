import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

interface StyledTagProps {
  bg?: string;
  shadow?: boolean;
}
interface Props extends StyledTagProps {
  text: string;
  link?: string;
}

const Container = styled.section<StyledTagProps>`
  position: relative;
  transition: all 0.1s ease-in-out;
  padding: 0.4rem 1rem;
  background-color: ${(p) => p.bg || ""};
  border-radius: 0.5rem;
  border: 1px solid #00000025;

  transition: all 0.1s ease-in-out;
  bottom: 0;
  &:hover {
    bottom: 5px;
  }

  ${(p) =>
    p.shadow &&
    css`
      box-shadow: 0 2px 7px #00000010;
    `};
`;

const StyledTag = styled.span`
  font-weight: bold;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #212121;
  }
  a:hover {
    color: blue;
  }
`;

export const Tag: React.FC<Props> = ({ text, link, bg, shadow }) => (
  <Container bg={bg} shadow={shadow}>
    <StyledTag>
      <Link href={link || "#"}>
        <a>{text}</a>
      </Link>
    </StyledTag>
  </Container>
);

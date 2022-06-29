import styled from 'styled-components';

export const MiniHeader = styled.span`
  color: gray;
`;

export const Title = styled.h2`
  font-size: 10em;
  line-height: 1em;
  margin-top: 0.4em;
  margin-bottom: 0.4em;

  @media (max-width: 768px) {
    font-size: 3em;
  }
`;

export const BlogImage = styled.img`
  width: 100%;
  height: auto;
`;

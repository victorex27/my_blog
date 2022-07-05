import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
      justify-content: space-between;
    }
`;

export const CustomLink = styled.a`
  text-decoration: none;
  color: #131a22;
  flex: 1 1 100%;
  /* border: 1px solid black; */
  

  span {
    font-size: 1.6em;
    font-weight: bolder;
    display: inline-block;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  color: #131a22;
  border-bottom: 1px solid #d8f5f9;
  /* min-height: 100px; */
  flex: 0 0 100Px;
 

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 0 0 25%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.h1`
 
  text-transform: uppercase;
`;

export const NavBarLink = styled(Link)`
  color: #131a22;
  font-size: small;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  text-decoration: none;
  margin: 10px;
  &:hover,
  &:focus {
    color: #131f33;
  }
  &:active {
    color: #132f33;
  }
`;

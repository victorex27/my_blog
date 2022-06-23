import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  color: #131a22;
  width: 20%;
  /* min-height: 100px; */
 

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

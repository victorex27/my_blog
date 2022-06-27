import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* flex-grow: 1; */
  align-items: flex-start;
  background-color: white;
  color: #131a22;
  flex: 0 0 30%;
  border-left: 1px solid #d8f5f9;
  min-height: 100%;
  padding: 15em;


  @media (max-width: 768px) {
    max-width: 100%;
    padding: 2em;
    overflow: hidden;
  }

  @media (max-width: 1586px) {
    max-width: 100%;
    padding: 10em 2em 2em 2em;
    
    overflow: hidden;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* flex-grow: 1; */
  align-items: flex-start;
  background-color: white;
  color: #131a22;
  padding: 10em;
  /* width: 50%; */
  border-right: 1px solid #d8f5f9;
 
  /* min-height: 100px; */
  flex: 0 0 60%;
  /* min-height: 100%; */
 

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    
    padding: 2em;

  }
`;

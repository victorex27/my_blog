import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* flex-grow: 1; */
  align-items: center;
  padding-top: 20em;
  background-color: white;
  color: #131a22;
  /* height: 100%; */
  /* border: 1px solid blue; */
  /* min-height: 100px; */

  flex: 0 0 10%;
 

  @media (max-width: 768px) {
    display: none;
  }
`;

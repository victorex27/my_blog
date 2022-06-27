import styled from 'styled-components';

export const Container = styled.div`
  /* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh; */
  /* display: flex; */
  /* flex-direction: column; */
  /* min-height: 100%; */
  display: flex ;
  /* justify-content: flex-start; */
  /* align-items: center; */
  flex-direction: column;
  height: 100%;
  width: 100%;
  /* border: 1px solid red; */
  /* flex: 1; */
  /* justify-content: stretch; */


`;

export const SubContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1 1 100%;
  /* justify-content: stretch; */
  /* flex-grow: 1; */
  /* min-height: 100%; */
  /* flex: 1; */
  @media (max-width:768px) {
    flex-direction: column;
  }
  
`;

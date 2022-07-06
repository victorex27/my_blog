import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 2rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  padding: 1em;
  flex: 0 0 30%;

  text-align: right;
  font-size: 1.2rem;

  span {
    color:gray;
  }

  h3 {
    font-size: 1.7rem;
  }

  @media (max-width: 768px) {
    margin-left: 1.4em;
    text-align: left;
  }
`;

export const Description = styled.div`
  padding: 1em;
  flex: 1 1 100%;
  position: relative;
  margin-left: 2em;

  h4 {
    font-size: 1.4rem;
  }

  article {
    border-top: 3px solid rgba(19,26,34,.5);
    font-size: 1.2em;
    color: gray;
  }

  &::before {
    content: '';
    background: url('./icons8_laptop.gif');
    background-position: center center;
    background-size: cover;
    opacity: 0.5;
    height: 39px;
    margin: -20px;
    width: 39px;
    position: absolute;
    left: -10px;
    border-color: black;
    border-radius: 100%;
    z-index: 0;
  }

  @media (max-width: 768px) {
    margin-left: 1.4em;
    &::before {
      left: -1.2em;
      top: -40px;
    }
  }
`;

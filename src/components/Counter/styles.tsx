import styled from 'styled-components';

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: block;
  ${(props) => (props.isActive ? `color: #131a22;` : `color: rgba(19, 26, 34, .5);`)}
  font-weight: bold;
  font-size: 2.3em;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  height: 2.8em;
  width: auto;
  /* line-height: 2em; */
  
`;

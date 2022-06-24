import styled from 'styled-components';

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: block;
  ${(props) => (props.isActive ? `color: blue;` : `color: red;`)}
  font-weight: bolder;
  font-size: 5.3em;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  
`;

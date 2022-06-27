import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5em;
  /* border-bottom: 1px solid red; */
  max-width: 100%;
  /* overflow: hidden; */
 
`;

export const Label = styled.label`
  font-weight: bolder;
  font-size: 1.5em;
  margin-bottom: 0.6em;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #131a22;
`;

export const Article = styled.article`
  color: gray;
  font-size: 1.25em;
  word-wrap: break-word;
  /* font-weight: medium; */
  /* width: 100%; */
  /* white-space: nowrap; */

  height: 105px;
  /* white-space: pre-wrap; */
  overflow: hidden;
  text-overflow: ellipsis;
  /* resize: horizontal; */

`;

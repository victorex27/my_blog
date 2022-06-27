import { SportsBaseball } from '@material-ui/icons';
import React, { FC } from 'react';
import ArticleDiv from '../ArticleDiv';
import { Container } from './styles';

interface Props {
  items?: { title: string; link: string; content: string }[];
}

const RightBar: FC<Props> = ({ items }) => {
  return (
    <Container>
    
      
      <SportsBaseball color="primary"/>
      {items && items.map((props) => <ArticleDiv {...props} />)}
    </Container>
  );
};

export default RightBar;

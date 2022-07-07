import { SportsBaseball } from '@material-ui/icons';
import  { FC } from 'react';
import ArticleDiv from '../ArticleDiv';
import { Container } from './styles';

interface Props {
  items?: { title: string; link: string; content: string }[];
}

const RightBar: FC<Props> = ({ items }) => {
  return (
    <Container>
      {items && <SportsBaseball color='primary' />}
      {items && items.map((props) => <ArticleDiv {...props} />)}
    </Container>
  );
};

export default RightBar;

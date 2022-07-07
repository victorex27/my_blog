import  { FC } from 'react';
import { Link } from 'react-router-dom';
import RootPage from '../RootPage';

const ComingSoonPage: FC = () => {
  return (
    <RootPage>
      <div>Work in progress. You can check out My <Link to='/resume'>resume page</Link></div>
    </RootPage>
  );
};

//<a target="_blank" href="https://icons8.com/icon/103207/work">Work</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

export default ComingSoonPage;

import  { FC } from 'react';
import BlogPost from '../../components/BlogPost';
import RootPage from '../RootPage';

const LandingPage: FC = () => {
  return (
    <RootPage>
      <BlogPost></BlogPost>
    </RootPage>
  );
};

export default LandingPage;

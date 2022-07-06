import  { FC } from 'react';
import WorkExperienceDiv from '../../components/WorkExperienceDiv';
import RootPage from '../RootPage';

const LandingPage: FC = () => {
  return (
    <RootPage>
      <WorkExperienceDiv/>
      <WorkExperienceDiv/>
      <WorkExperienceDiv/>
    </RootPage>
  );
};

export default LandingPage;

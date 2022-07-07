import { FC } from 'react';
import WorkExperienceDiv from '../../components/WorkExperienceDiv';
import RootPage from '../RootPage';

import experiences from '../../utils/experience';

const LandingPage: FC = () => {
  return (
    <RootPage>
      <h3>My Resume</h3>
      {experiences.map(({ title, company, date, article }) => (
        <WorkExperienceDiv
          title={title}
          date={date}
          company={company}
          article={article}
        />
      ))}
    </RootPage>
  );
};

export default LandingPage;

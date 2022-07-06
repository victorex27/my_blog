import { FC } from 'react';
import { Container, Title, Description } from './styles';

const WorkExperienceDiv: FC = () => {
  return (
    <Container>
      <Title>
        <h3> Application Developer II</h3>
        <span> April 2021 - March 2022</span>
      </Title>
      <div></div>
      <Description>
        <h4>Access Bank Plc</h4>
        <article>
          Transforming business requirements into breakable programming tasks.
          Designing and implementing the database system to fit system use.
          Collaboration and Coordination of Team members. Making effective
          communication channels between the business team and the development
          team. Conducting code review sessions with team members Reporting to
          superiors concerning the progress of the projects and any impediments
          encountered. Implementation of backend system based on tasks already
          defined. Maintaining and enhancing already existing applications to
          fit business owners' requirements.
        </article>
      </Description>
    </Container>
  );
};

export default WorkExperienceDiv;

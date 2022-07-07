import { FC } from 'react';
import { Container, Title, Description } from './styles';

interface PropType {
  title: string;
  date: string;
  company: string;
  article: string;
}

const WorkExperienceDiv: FC<PropType> = ({ title, date, company, article }) => {
  return (
    <Container>
      <Title>
        <h3> {title}</h3>
        <span> {date}</span>
      </Title>

      <Description>
        <h4>{company}</h4>
        <article>{article}</article>
      </Description>
    </Container>
  );
};

export default WorkExperienceDiv;

import React, { FC } from 'react';
import { Article, Container, Label, StyledLink } from './styles';

interface PropType {
  title: string;
  link: string;
  content: string;
}

const ArticleDiv: FC<PropType> = ({ title, link, content }) => {
  return (
    <Container>
      <Label>
        <StyledLink to={link}>{title}</StyledLink>
      </Label>
      <Article>{content}</Article>
    </Container>
  );
};

export default ArticleDiv;

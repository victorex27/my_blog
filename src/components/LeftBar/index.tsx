import React, { FC } from 'react';
import Counter from '../Counter';
import { Container } from './styles';

interface LeftBarPropType {
  content?: { title: string; link: string; isActive: boolean }[];
}

const LeftBar: FC<LeftBarPropType> = ({ content }) => {
  return (
    <Container>
      {content && content.map((props, index) => (
        <Counter key={index} {...props} />
      ))}
    </Container>
  );
};

export default LeftBar;

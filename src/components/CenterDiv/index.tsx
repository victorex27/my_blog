import React, { FC } from 'react';
import { Container } from './styles';

interface PropType {
  children?: React.ReactNode;
}

const CenterDiv: FC<PropType> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CenterDiv;

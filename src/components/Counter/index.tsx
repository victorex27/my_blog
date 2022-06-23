import React, { FC } from 'react';
import { Container } from './styles';

interface CounterPropsType {
  title: string;
  link: string;
  isActive: boolean;
}

const Counter: FC<CounterPropsType> = ({isActive, title, link}) => {
  return <Container isActive={isActive}> {title}</Container>;
};

export default Counter;

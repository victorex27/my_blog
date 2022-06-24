import React, { FC } from 'react';
import LeftBar from '../../components/LeftBar';
import NavBar from '../../components/NavBar';
import { Container, SubContainer } from './styles';

interface ChildrenPropType {
  children?: React.ReactNode;
}

const RootPage: FC<ChildrenPropType> = ({ children }) => {
  const leftBarContent = [
    { title: '01', link: '/', isActive: true },
    { title: '02', link: '/', isActive: false },
    { title: '03', link: '/', isActive: false },
    { title: '04', link: '/', isActive: false },
  ];

  return (
    <>
      <Container>
        <NavBar />
        <SubContainer>
          <LeftBar content={leftBarContent} />
          {children}
        </SubContainer>
      </Container>
    </>
  );
};

export default RootPage;

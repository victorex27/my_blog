import React, { FC } from 'react';
import { Container, SubContainer, Header, NavBarLink } from './styles';

const NavBar: FC = () => {
  return (
    <Container>
      <SubContainer>
        <NavBarLink to='/about'> About Me</NavBarLink>
        <NavBarLink to='/resume'> My Resume</NavBarLink>
      </SubContainer>

      <Header> Amaobi Victor </Header>
      <SubContainer>
        <NavBarLink to='/project'> Projects</NavBarLink>
        <NavBarLink to='/blog'> Blog Posts</NavBarLink>
      </SubContainer>
    </Container>
  );
};

export default NavBar;

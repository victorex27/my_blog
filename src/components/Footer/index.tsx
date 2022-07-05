import { GitHub, LinkedIn, Twitter } from '@material-ui/icons';
import React, { FC } from 'react';
import { Container, CustomLink } from './styles';

const Footer: FC = () => {
  return (
    <Container>
     

      <CustomLink
        href='https://www.twitter.com/victorvents/'
        rel='noopenner'
        target='_blank'
      >
        <Twitter color='primary' fontSize="large"/>
        <span>@victorvents</span>
      </CustomLink>

      <CustomLink
        href='https://github.com/victorex27'
        rel='noopenner'
        target='_blank'
      >
        <GitHub color='primary' fontSize="large"/>
        <span>@victorex27</span>
      </CustomLink>

      <CustomLink
        href='https://www.linkedin.com/in/amaobivictor/'
        rel='noopenner'
        target='_blank'
      >
        <LinkedIn color='primary' fontSize="large"/>
        <span>Obikobe Amaobi Victor</span>
      </CustomLink>
    </Container>
  );
};

export default Footer;

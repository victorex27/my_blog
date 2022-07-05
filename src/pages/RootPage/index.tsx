import React, { FC } from 'react';
import CenterDiv from '../../components/CenterDiv';
import Footer from '../../components/Footer';
import LeftBar from '../../components/LeftBar';
import NavBar from '../../components/NavBar';
import RightBar from '../../components/RightBar';
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

  const dummyText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

  Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
  
  `;


  const rightBarContent = [
    { title: 'What is Lorem Ipsum?', link: '/', content: dummyText },
    { title: 'Where can I get some?', link: '/', content: dummyText },
    { title: 'Where does it come from?', link: '/', content: dummyText },
    { title: 'Why do we use it?', link: '/', content: dummyText },
  ];



  return (
    <>
      <Container>
        <NavBar />
        <SubContainer>
          <LeftBar content={leftBarContent} />
          <CenterDiv>{children}</CenterDiv>
          <RightBar items={rightBarContent} />
        </SubContainer>
        <SubContainer>
          <LeftBar  />
          <CenterDiv><Footer/></CenterDiv>
          <RightBar />
        </SubContainer>
      </Container>
    </>
  );
};

export default RootPage;

import React, { FC } from 'react';
import LeftBar from '../components/LeftBar';
import NavBar from '../components/NavBar';

interface ChildrenPropType {
  children: React.HTMLAttributes<HTMLAreaElement>;
}



const RootPage: FC<ChildrenPropType> = (props) => {
  const leftBarContent = [
    { title: '01', link: '/', isActive: true },
    { title: '02', link: '/', isActive: false },
    { title: '03', link: '/', isActive: false },
    { title: '04', link: '/', isActive: false },
  ];

  return (
    <>
      <NavBar />
      <LeftBar content={leftBarContent} />
      {props.children}
    </>
  );
};

export default RootPage;

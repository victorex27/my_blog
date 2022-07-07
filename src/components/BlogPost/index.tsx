import  { FC } from 'react';
import { BlogImage, MiniHeader, Title } from './styles';
import img1 from '../../assests/img1.jpg';
const BlogPost: FC = () => {
  return (
    <>
      <MiniHeader> 27 June 2022 . Blog</MiniHeader>
      <Title>We create a modern beautiful image.</Title>
      <BlogImage src={img1} alt="Javascript code image" />
    </>
  );
};

export default BlogPost;

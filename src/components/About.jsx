import React from 'react';
import styled from 'styled-components';
import aboutPicture from '../images/aboutPicture.jpg'

const Container = styled.div`
 background-image: linear-gradient(45deg, #32CD32, #7CFC00);
  width: auto;
`;


const About = () => {
  return (
      <Container>
      <img src={aboutPicture} alt='pic' className='photo' />
      </Container>
  )
}

export default About

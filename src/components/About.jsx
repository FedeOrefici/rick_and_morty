import React from 'react';
import styled from 'styled-components';
import aboutPicture from '../images/aboutPicture.jpg'


const Container = styled.div`
  background: linear-gradient(45deg, #383838 0%, #383838 50%, #32CD32 50%, #7CFC00 100%);
  color: white;
  width: 90%;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-around;
  margin-top: 80px;
  margin-bottom: 80px;
  border-radius: 6px;
  height: 400px;
  border: 1px solid black;
`;


const About = () => {
  return (
      <Container>
        <h2>App by Federico Orefici</h2>
        <img src={aboutPicture} alt='pic' className='photo' />
      </Container>
  )
}

export default About

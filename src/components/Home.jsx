import React from 'react'
import styled from 'styled-components'
import mainPicture from '../images/image-hero.png'
import mainLogo from '../images/rick-and-morty-logo.png';

const Container = styled.div`
    background-image: linear-gradient(45deg, #32CD32, #7CFC00);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 40px;
`;


const Home = () => {
  return (
    <Container>
      <img src={mainPicture} alt='main-Pic' style={{width: '35%'}}/>
      <img src={mainLogo} alt='logo' className="logo"/>
    </Container>
  )
}

export default Home

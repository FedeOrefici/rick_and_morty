import React, { useState } from 'react';
import styled from 'styled-components';
import imageLogo from '../images/image-hero.png'
import validation from './validation';


const Container = styled.form`
    background-color: #383838;
    color: white;
    width: 45%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 60px;
    margin-bottom: 60px;
`;

const DivContainerMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 6px;
    width: 90%;
    margin: auto;
`;

const ContainerDos = styled.div`
    background-color: #303030;
    color: white;
    width: 45%;
    height: 600px;
    margin-top: 60px;
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Button = styled.button`
margin-top: 10px;
   width: 150px;
   height: 30px;
   background-color: #383838;
   color: black;
   border: none;
   border-radius: 3px;
   background-image: linear-gradient(45deg, #32CD32, #7CFC00);
   margin-bottom: 5px;

   cursor: pointer;
   :hover {
    transition: .2s;
    opacity: 0.7;
   }
`;

const Input = styled.input`
    border: none !important;
    width: 300px;
    height: 30px;
    border-radius: 6px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: transparent;
    border-bottom: 1px solid gray;
    color: white;
`;



const Form = ({login}) => {

  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  })

  //funcion que toma los datos que recibo del usuario
  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name] : event.target.value
    })

    setErrors(validation({
      ...userData,
      [event.target.name] : event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  }



  return (
    <DivContainerMain>

          <ContainerDos>
              <img src={imageLogo} className='imgLogin' alt='imgLogin' />
          </ContainerDos>

        <Container onSubmit={handleSubmit}> 

          <label>Username</label>
          <Input 
          type='email' 
          placeholder='Insert your username...' 
          name='username' 
          value={userData.username}
          onChange={handleInputChange}
          />
          {errors.username && <p className='error'>{errors.username}</p>}

          <label className='label'>Password</label>
          <Input
          type='password'
          placeholder='Insert your password...'
          name='password'
          value={userData.password}
          onChange={handleInputChange}
          />
          {errors.password && <p className='error'>{errors.password}</p>}

          <Button>Login</Button>

        </Container>

    </DivContainerMain>
  )
}

export default Form;

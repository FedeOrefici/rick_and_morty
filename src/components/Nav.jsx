import React  from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from './SearchBar';


const BarNav = styled.div`
   width: 90%;
   height: 100px;
   display: flex;
   align-items: center;
   justify-content: space-around;
   margin: auto;
`;


const Nav = ({ onSearch }) => {


  return (
    <BarNav>
      <Link className='links' to='/' style={{textDecoration: 'none', color: 'white'}}>Home</Link>
      <Link className='links' to='/cards' style={{textDecoration: 'none', color: 'white'}}>Cards</Link>
      <Link className='links' to='/about' style={{textDecoration: 'none', color: 'white'}}>About</Link>          
      <SearchBar onSearch={onSearch}/>
    </BarNav>
  )
}


export default Nav;

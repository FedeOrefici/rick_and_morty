import React  from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import navLogo from '../images/rick-and-morty-logo.png'

const BarNav = styled.div`
   width: 90%;
   height: 100px;
   display: flex;
   align-items: center;
   justify-content: space-around;
   margin: auto;
   margin-top: 20px;
`;


const Nav = ({ onSearch }) => {

  return (
    <BarNav>
        <img src={navLogo} className='nav-logo' alt='nav-logo'/>
          <Link to='/home' style={{textDecoration: 'none', color: '#383838'}} className='effect'>Cards</Link>
          <Link to='/favorites' style={{textDecoration: 'none', color: '#383838'}} className='effect'>Favorites</Link>  
          <Link to='/about' style={{textDecoration: 'none', color: '#383838'}} className='effect'>About</Link> 
        <SearchBar onSearch={onSearch}/>
        <Link to='/'><span className="material-symbols-outlined" style={{textDecoration: 'none', color: '#383838'}}>logout</span></Link>
    </BarNav>
  )
}


export default Nav;

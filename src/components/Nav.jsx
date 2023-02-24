import React from 'react'
import SearchBar from './SearchBar';

const Nav = (props) => {

const { onSearch } = props;

  return (
    <div>
      <SearchBar onSearch={onSearch}
      />
    </div>
  )
}

export default Nav;

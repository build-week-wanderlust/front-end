import React from 'react';
import { Search } from 'semantic-ui-react'


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchValue: '',

     };
  }
  render() {
    return (
        <Search>
          <input type="text"/>
          <button>Search</button>
        </Search>
    );
  }
}

export default SearchBar;
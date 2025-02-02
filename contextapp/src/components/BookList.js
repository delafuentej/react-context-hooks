import React, { Component } from 'react';
/* import { AuthContext } from '../contexts/AuthContext'; */
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  static contextType= ThemeContext;
  /* static contextType= AuthContext; */
  render() { 
    const {isLightTheme, light, dark }= this.context;
    const theme= isLightTheme ? light: dark;
    return ( 
      <div 
      className="book-list"
      style={{
        background: theme.bg, 
        color:theme.syntax 
      }}
      >
        <ul>
          <li  style={{background:theme.ui}}>the way of kings</li>
          <li style={{background:theme.ui}}>the name of the wind</li>
          <li style={{background:theme.ui}}>the final empire</li>
        </ul>
      </div>
    );
  }
}
 
export default BookList;
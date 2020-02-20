import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className='header-main'>
        <nav className='nav-list'>
          <li className='nav-list__item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-list__item'>
            <Link to='/users'>Users</Link>
          </li>
        </nav>
      </header>
    );
  }
}

import React, { Component } from 'react';
import Lists from '../components/Lists';

import axios from 'axios';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      firstName: '',
      lastName: ''
    };
    axios({
      url: 'http://localhost:4000/graphql',
      method: 'post',
      data: {
        query: `
        {users{id,firstName,lastName}
  
      }
          `
      }
    }).then(({ data }) => {
      this.setState({ users: data.data.users });
    });
  }

  render() {
    const handleChangeName = (event) => {
      this.setState({ [event.target.name]: event.target.value });
      console.log(this.state);
    };
    return (
      <div>
        <Lists elements={this.state.users} />
        <form>
          <div className='form-group'>
            <label htmlFor='firstName'>Nom</label>
            <input
              type='text'
              name='firstName'
              value={this.state.firstName}
              onChange={handleChangeName}></input>
          </div>
          <div className='form-group'>
            <label htmlFor='lastName'>Prenom</label>
            <input
              type='text'
              name='lastName'
              value={this.state.lastName}
              onChange={handleChangeName}></input>
          </div>
        </form>
      </div>
    );
  }
}

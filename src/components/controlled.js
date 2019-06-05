import React, { Component } from 'react';

class Controlled extends Component {
  state = {
    name: '',
    lastname: '',
  };

  handleNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  };
  handleLastNameChange = event => {
    this.setState({
      lastname: event.target.value,
    });
  };
  onSubmithandler = event => {
    event.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.onSubmithandler}>
            <div className='form_element'>
              <label>first name</label>
              <input type='text' onChange={this.handleNameChange} value={this.state.name} />
            </div>

            <div className='form_element'>
              <label>last Name</label>
              <input type='text' onChange={this.handleLastNameChange} value={this.state.lastname} />
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Controlled;

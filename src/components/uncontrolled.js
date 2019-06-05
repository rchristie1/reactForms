import React, { Component } from 'react';

class Uncontrolled extends Component {
  handleSubmit = event => {
    event.preventDefault();

    const values = {
      name: this.name.value,
      lastname: this.lastname.value,
    };

    console.log(values);
  };

  render() {
    return (
      <div>
        <div>
          <form>
            <div className='form_element'>
              <label>first name</label>
              <input type='text' input={input => (this.name = input)} />
            </div>

            <div className='form_element'>
              <label>last Name</label>
              <input type='text' input={input => (this.lastname = input)} />
            </div>
            <button onClick={this.handleSubmit}>BTN</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Uncontrolled;

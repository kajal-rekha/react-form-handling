import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      skill: "",
    };
  }

  firstNameHandaler(e) {
    //console.log(e.target.value);
    this.setState({
      firstName: e.target.value,
    });
  }

  lastNameHandaler(e) {
    console.log(e.target.value);
    this.setState({
      lastName: e.target.value,
    });
  }

  skillHandaler(e) {
    console.log(e.target.value);
    this.setState({
      skill: e.target.value,
    });
  }
  submitHandaler(e) {
    e.preventDefault();
    console.log(this.state.firstName, this.state.lastName, this.state.skill);
  }

  render() {
    return (
      <form onSubmit={(e) => this.submitHandaler(e)}>
        <div>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={this.state.firstName}
            required
            onChange={(e) => this.firstNameHandaler(e)}
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="first-name"
            value={this.state.lastName}
            required
            onChange={(e) => this.lastNameHandaler(e)}
          />
        </div>
        <select
          value={this.state.skill}
          onChange={(e) => this.skillHandaler(e)}
        >
          <option value="">Select your skill</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="angular">Angular</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}






import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
    };
  }

  fullNameHandaler(e) {
    this.setState({
      fullName: e.target.value,
    });
  }

  emailHandaler(e) {
    this.setState({
      email: e.target.value,
    });
  }

  submitHandaler(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={(e) => this.submitHandaler(e)}>
        <div>
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            id="full-name"
            value={this.state.fullName}
            required
            onChange={(e) => this.fullNameHandaler(e)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={this.state.email}
            required
            onChange={(e) => this.emailHandaler(e)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

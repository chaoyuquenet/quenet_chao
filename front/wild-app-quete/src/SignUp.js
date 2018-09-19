import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state= {
      email: '',
      password: '',
      passwordConfirm: '',
      firstName: '',
      lastName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Email Renseigné Dans Input</h1>
        <form onSubmit={this.handleSubmit}>
          Email :<br />
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/><br />
          Mot de passe :<br />
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br />
          Mot de passe de vérification :<br />
          <input type="password" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.handleChange}/><br />
          Prénom :<br />
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} /><br />
          Nom :<br />
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} /><br />

          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default SignUp;

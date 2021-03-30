import React from "react";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
    console.log(this.state);
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Already I have an account</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={this.handleChange}
            required
            value={this.state.email}
          />
          <label>Email:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            required
            value={this.state.password}
          />
          <label>Password:</label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignIn;

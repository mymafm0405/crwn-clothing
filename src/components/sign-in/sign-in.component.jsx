import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import { signIn } from "../../firebase/firebase-utlis";

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
        <p className="title">Sign in with your email and password</p>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            required
            value={this.state.email}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            required
            value={this.state.password}
            label="Password"
          />

          <CustomButton type="submit">Submit</CustomButton>
          <CustomButton onClick={signIn}>Sign-in-with-Google</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;

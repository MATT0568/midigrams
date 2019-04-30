import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class SignUp extends Component {
  state = {
    users: [],
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.saveUser({
        email: this.state.email.toLowerCase(),
        password: this.state.password
      })
        .then(res => {
          this.setState({
            redirectTo: '/login'
          })
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12" className="col-offset-6 centered">
            <div class="hero-bkg-animated">
              <h1>Create an Account</h1>
            </div>
            <div className="login">
              <form>
                <Input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="email (required)"
                />
                <Input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="password (required)"
                />
                <FormBtn
                  disabled={!(this.state.password && this.state.email)}
                  onClick={this.handleFormSubmit}
                >
                  Submit
              </FormBtn>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUp;

import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Cookies from "js-cookie";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      email: "",
      password: "",
      loggedIn: false
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = (event, props) => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.login({
        email: this.state.email.toLowerCase(),
        password: this.state.password
      })
        .then(res => {
          if (res.data.valid === true) {
            console.log("VALID!");
            Cookies.set('userId', this.state.email.toLowerCase());
            this.props.loggedCheck();
          }
          else console.log("INVALID!");
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <div className="hero-bkg-animated">
              <h1>Login</h1>
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
                  Login
              </FormBtn>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;

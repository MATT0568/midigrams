import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

class Detail extends Component {
  state = {
    users: {
      email: 'lesniewicz@vcu.edu',
      password: 'Puggl3s1'
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Users On My List</h1>
            </Jumbotron>
            {this.state.users.length ? (
              <div>
                <Row>
                  <Col size="md-12">
                    <h3>
                      Saved Users:
                    </h3>
                    {this.state.users.map(user => (
                      <div className="border border-primary" key={user.email}>
                        <Row>
                          <Col size="md-12">
                            <h3>
                              {"email: " + user.email + " password: " + user.password}
                            </h3>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </Col>
                </Row>
              </div>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;

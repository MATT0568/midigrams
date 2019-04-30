import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Info() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <div className="hero-bkg-animated">
            <h1>Info</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <div className="info-box mx-auto">
            <h1 className="info">
              This algorithm creates an n-gram model from nes midi files and generates tracks.
            </h1>
            <h1 className="info">
              The midi binary data is converted into JSON format, filtered, and then converted into string form where each note is deltatime:notenumber,deltatime:notenumber where before the comma is the on note and after is the off note and each track ends with a ?.
            </h1>
            <h1 className="info">
              You may download the script without the website from <a href="https://github.com/MATT0568/midigrams-scripts">here</a>
            </h1>
            <h1 className="info">
              You must have node installed and the command to run is node midi.js. There is already a blueprint for you called tracks.txt. If you wish to create your own blueprint change the file name in fileloop() to your file and run fileloop().
            </h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Info;

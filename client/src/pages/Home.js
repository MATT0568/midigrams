import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import FileSaver from 'file-saver';
import midiConverter from 'midi-converter';
import blueprint from '../utils/blueprint';
class Home extends Component {
  state = {
    probs: "",
    track: ""
  }

  runNgramModel = () => {
    API.midi({})
      .then(res => {
        // console.log(blueprint);
        // console.log(res.data.probs);
        this.setState({
          probs: JSON.parse(res.data.probs),
          track: res.data.track
        })
        var bytes = midiConverter.jsonToMidi(res.data.track);
        var u8 = new Uint8Array(bytes.length)
        for (var i = 0; i < bytes.length; i++) {
          u8[i] = bytes[i].charCodeAt(0)
        }
        var blob = new Blob([u8], { type: 'audio/midi' })
        FileSaver.saveAs(blob, "music.mid")
      })
  };


  compareMidi = () => {
    var tracks = blueprint.split("?");
    for (var i = 0; i < tracks.length; i++) {
      console.log(tracks[i]);
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <div class="hero-bkg-animated-button">
              <h1>
                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                  <button type="button" onClick={() => this.runNgramModel()} className="btn btn-warning myButton">Create MIDI</button>
                </span>
              </h1>
            </div>
            <Row>
              <Col size="md-6" className="column-padding">
              <div className="card mx-auto">
                  <div className="card-header">
                    Probabilities
                  </div>
                  <pre className="card-body content">
                    {JSON.stringify(this.state.probs, null, 2)}
                  </pre>
                </div>
              </Col>
              <Col size="md-6">
                <div className="card mx-auto">
                  <div className="card-header">
                    Song Generated
                  </div>
                  <pre className="card-body content">
                    {JSON.stringify(this.state.track, null, 2)}
                  </pre>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
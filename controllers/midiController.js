const db = require("../models");
const exec = require('child_process');
const midiConverter = require('midi-converter');
const fs = require('fs');
var fileDownload = require('js-file-download');
var MidiPlayer = require('midi-player-js');

// Defining methods for the midiController
module.exports = {
  midi: function (req, res) {
    var trackShell = {
      header: {
        formatType: 1,
        trackCount: 2,
        ticksPerBeat: 170
      },
      tracks: [
        [
          {
            deltaTime: 0,
            type: "meta",
            subtype: "timeSignature",
            numerator: 4,
            denominator: 4,
            metronome: 24,
            thirtyseconds: 8
          },
          {
            deltaTime: 0,
            type: "meta",
            subtype: "setTempo",
            microsecondsPerBeat: 300000
          },
          {
            deltaTime: 0,
            type: "meta",
            subtype: "trackName",
            text: "Tempo Track"
          },
          {
            deltaTime: 0,
            type: "meta",
            subtype: "endOfTrack"
          }
        ],
        [
          {
            deltaTime: 0,
            type: "meta",
            subtype: "trackName",
            text: "New Instrument"
          },
          {
            deltaTime: 10000,
            type: "meta",
            subtype: "endOfTrack"
          }
        ]
      ]
    }
    // var file = JSON.stringify(exec.execSync('node scripts/midi.js'));
    // console.log(file);
    // res.json({file});
    var ngram = exec.execSync('perl scripts/ngram.pl 3 1 scripts/tracks.txt').toString();
    var sections = ngram.split("&&&&&");

    var notes = sections[0].split(" ");
    var probs = sections[1];
    //console.log(probs);

    for (var note = 2; note < notes.length - 1; note++) {
      var noteOnOff = notes[note].split(",");
      var onNote = noteOnOff[0].split(":");
      var offNote = noteOnOff[1].split(":");

      var onNoteJson = {
        deltaTime: onNote[0],
        channel: 0,
        type: "channel",
        noteNumber: onNote[1],
        velocity: 127,
        subtype: "noteOn"
      }
      var offNoteJson = {
        deltaTime: offNote[0],
        channel: 0,
        type: "channel",
        noteNumber: offNote[1],
        velocity: 127,
        subtype: "noteOff"
      }
      trackShell.tracks[trackShell.tracks.length - 1].splice(trackShell.tracks[trackShell.tracks.length - 1].length - 2, 0, onNoteJson);
      trackShell.tracks[trackShell.tracks.length - 1].splice(trackShell.tracks[trackShell.tracks.length - 1].length - 2, 0, offNoteJson);
    }
    res.json({
      track: trackShell,
      probs: probs
    });
  }
};

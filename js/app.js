console.log("Document linked!")

var sequence = [];
var copy = [];

// Associating sound clips with piano key

$(document).ready(function() {
  $('#C1').on('click', function() {
    console.log("got it");
    toneC1.load();
    toneC1.play();
  });
  $('#Cs1').on('click', function() {
    toneCs1.load();
    toneCs1.play();
  });
  $('#D1').on('click', function() {
    toneD1.load();
    toneD1.play();
  })
  $('#Ds1').on('click', function() {
    toneDs1.load();
    toneDs1.play();
  })
  $('#E1').on('click', function() {
    toneE1.load();
    toneE1.play();
  })
  $('#F1').on('click', function() {
    toneF1.load();
    toneF1.play();
  })
  $('#Fs1').on('click', function() {
    toneFs1.load();
    toneFs1.play();
  })
  $('#G1').on('click', function() {
    toneG1.load();
    toneG1.play();
  })
  $('#Gs1').on('click', function() {
    toneGs1.load();
    toneGs1.play();
  })
  $('#A1').on('click', function() {
    toneA1.load();
    toneA1.play();
  })
  $('#As1').on('click', function() {
    toneAs1.load();
    toneAs1.play();
  })
  $('#B1').on('click', function() {
    toneB1.load();
    toneB1.play();
  })
  $('#C2').on('click', function() {
    toneC2.load();
    toneC2.play();
  })
  $('#Cs2').on('click', function() {
    toneCs2.load();
    toneCs2.play();
  })
  $('#D2').on('click', function() {
    toneD2.load();
    toneD2.play();
  })
  $('#Ds2').on('click', function() {
    toneDs2.load();
    toneDs2.play();
  })
  $('#E2').on('click', function() {
    toneE2.load();
    toneE2.play();
  });
});

// computer picks a note randomly
var pianoNotes = [C1, Cs1, D1, Ds1, E1, F1, Fs1, G1, Gs1, A1, As1, B1, C2, Cs2, D2, Ds2, E2]

function computerChoice() {

}

// computer's choice of note should trigger the active/pressed CSS button styling and tone load/play

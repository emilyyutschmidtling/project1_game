console.log("Document linked!")

// The piano sounds were taken from Piano in 162, a sample library of a Steinway Model B grand piano performed by Simon Dalzell, an undergraduate at The University of Arizona.

// Associating sound clips with piano key

$(document).ready(function() {
  $('#C1').on('click', function() {
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

var pianoNotes = $('.key');

// computer picks a note randomly, which is then added to the sequence array
var sequence = [];


$('#start').on('click', function() {
  return randomPlay();
});

function randomPlay() {
  var nextNote = pianoNotes[Math.floor(Math.random() * pianoNotes.length)];
  sequence.push(nextNote);
  console.log("computer: ", sequence);
  playSequence(sequence);
}

// Courtesy of Mike Wong and Josh
// The following code enables the computer to play sound and simulate the appearance of the piano key being pressed.  This is the code the computer uses to play the sequence to be duplicated by the player.  The appearance of the key press is achieved by briefly adding then removing a class tied to a CSS style.  The sound is triggered by basically a "fake" click.

function playEach() {
  for(var i = 0; i < sequence.length; i++) {
    var currentNote = sequence[i].id;
    // console.log("This note is ", sequence[i].id);
    setTimeOut(playEach(), 1500);
  }
}

// .trigger('click') simulates a click when there isn't really one, but the computer perceives it as an actual click; .triggerHandler('click') does the same thing but the computer doesn't mistake it for an actual click.
function playNote(div) {
  $(div).addClass('play');
  $(div).triggerHandler('click');
  setTimeout(function() {
    $(div).removeClass('play');
  }, 500)
}

function playSequence(arr) {
  var index = 0;
  var interval = setInterval(function() {
    playNote(arr[index]);
    index++;
    if(index == arr.length) {
      clearInterval(interval);
    }
  }, 1000);
}

var player = [];

// This adds event listeners that detect which key is pressed by the player.  Since all this code does is add event listeners to the piano keys and there's no reason to wait to start detection, this code isn't tied to a name and goes into effect immediately without needing to be called.
for(var i = 0; i < pianoNotes.length; i++) {
  pianoNotes[i].addEventListener('click', function() {
    // console.log("i heard you!")
    player.push(this);
    evalPlayerInput();
  });
}

function evalPlayerInput() {
  if(sequence.length === player.length) {
    if(isSame(sequence, player)) {
      player = [];
      randomPlay();
    }
    else {
      alert("Game over - Congratulations, you have reached Level: " + sequence.length);
      player = [];
    }
  }
}

function isSame(arr1, arr2) {
  for(i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

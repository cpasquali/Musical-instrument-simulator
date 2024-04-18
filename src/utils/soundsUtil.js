import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination();

const NOTASPIANO = {
  C4: () => {},
  D4: () => {},
  E4: () => {},
  F4: () => {},
  G4: () => {},
  A4: () => {},
  B4: () => {},
};

const soundToPlay = (note) => {
  const notaRepro = NOTASPIANO[note];
  if (notaRepro) {
    notaRepro();
  }

  switch(note){
    case "A":
      synth.triggerAttackRelease("C4", '0.2');
      break;
    case "S":
      synth.triggerAttackRelease("D4", '0.2');
      break;
    case "D":
      synth.triggerAttackRelease("E4", '0.2');
      break;
    case "F":
      synth.triggerAttackRelease("F4", '0.2');
      break;
    case "G":
      synth.triggerAttackRelease("G4", '0.2');
      break;
    case "H":
      synth.triggerAttackRelease("A4", '0.2');
      break;
    case "J":
      synth.triggerAttackRelease("B4", '0.2');
      break
  }
};

const soundToPlayClick = (note) => {
  const notaRepro = NOTASPIANO[note];
  if (notaRepro) {
    soundToPlay(note);
  }

};

export { NOTASPIANO, soundToPlay, soundToPlayClick };
const synth = new Tone.PolySynth(Tone.FMSynth, {
  harmonicity: 4,
  modulationIndex: 2,
  envelope: {
    attack: 0.01,
    decay: 0.2,
    sustain: 0.8,
    release: 3
  },
  modulationEnvelope: {
    attack: 0.2,
    decay: 0.01,
    sustain: 0.5,
    release: 1
  }
});
synth.maxPolyphony = 32;

const sampler = new Tone.Sampler({
	urls: {
		A1: "A1.mp3",
		A2: "A2.mp3",
	},
	baseUrl: "https://tonejs.github.io/audio/casio/"
})

const gain = new Tone.Gain(0.5);
const reverb = new Tone.Reverb({
    decay: 3,
    preDelay: 0.3,
    wet: 0.4
});


sampler.chain(reverb, gain);

gain.toDestination();
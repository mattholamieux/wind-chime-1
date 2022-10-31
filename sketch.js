let things = [];
const notes = [
  "C2",
  "D2",
  "E2",
  "G2",
  "A2",
  "C3",
  "D3",
  "E3",
  "G3",
  "A3",
  "C4",
  "D4",
  "E4",
  "G4",
  "A4"
];
let init = false;

function setup() {
  rectMode(CENTER);
  createCanvas(500, 500);
  for (let i = 0; i < 5; i++) {
    let note = random(notes);
    let index = notes.indexOf(note);
    notes.splice(index, 1);
    let thing1 = new Thing(100, i * 80 + 80, 40, random(2), 0, note);
    note = random(notes);
    index = notes.indexOf(note);
    notes.splice(index, 1);
    let thing2 = new Thing(i * 80 + 80, 450, 40, 0, random(2), random(notes));
    things.push(thing1, thing2);
  }
}

function draw() {
  background(0, 10);
  noStroke();
  if (init) {
    for (let thing of things) {
      thing.show();
      thing.move();
      for (let other of things) {
        if (thing !== other) {
          thing.collision(other);
        }
      }
    }
  } else {
    fill(255);
    text('click to start', 220, 250);
  }
}

function mousePressed() {
  if (!init) {
    Tone.start();
  } else {
    // Tone.stop();
  }
  init = !init;
}

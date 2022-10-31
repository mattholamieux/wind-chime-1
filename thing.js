class Thing {
  constructor(x, y, w, xVel, yVel, note){
    this.x = x;
    this.y = y;
    this.w = w;
    this.xVel = xVel;
    this.yVel = yVel;
    this.color = 255;
    this.note = note;
  }
  
  show() {
    fill(color(this.color));
    rect(this.x, this.y, this.w);
  }
  
  move() {
    this.x += this.xVel;
    this.y += this.yVel;
    
    if (this.x > width-this.w/2 || this.x < this.w-this.w/2){
      this.xVel *=-1;
    }
    if (this.y > height-this.w/2 || this.y < this.w-this.w/2){
      this.yVel *=-1;
    }
  }
  
  changeColor(){
    this.color = [random(255), random(255), random(255)];
    // this.note = notes[floor(map(this.color[0], 0, 255, 0, notes.length-1))]
  }
  
  collision(other) {
    let d = (dist(this.x, this.y, other.x, other.y));
      if (d < this.w/2 + other.w/2){
        this.changeColor();
        this.xVel *= -1;
        this.yVel *= -1;
        sampler.triggerAttackRelease(this.note, "4n");
      }
  }
  
}
class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction  = 'up';
  }

  start() {
    return this.intervalID = setInterval(() => this.floorDown(), 1000);
  }
  stop() {
    this.clearInterval(this.intervalID);
  }
  update() {
    return this.log();
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
    this.floor = this.floor < this.MAXFLOOR ? this.floor +1 : this.floor;
    this.update();
  }
  floorDown() {
    this.floor = this.floor > 0 ? this.floor -1 : this.floor;
    this.update();
  }
  call(person) {
    this.requests.push(person);
  }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;

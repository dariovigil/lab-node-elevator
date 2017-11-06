class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.waitingList = [];
    this.passengers = [];
    this.direction  = 'up';
  }

  start() {
    console.log('start called');
    this.intervalID = setInterval(() => this.update(), 1000);
  }
  stop() {
    // console.log(this.requests);
    // clearInterval(this.intervalID);
  }
  update() {
    console.log(this.requests);
    // console.log(this.waitingList);

    if(this.requests.length === 0) {
      this.stop();
      console.log('-IDLE ELEVATOR-');
    } else {
      // Put the waiting passengers in the elevator if the elevator is in the same floor as the person
      for(let i = this.waitingList.length -1; i >= 0; i--) {
        if(this.floor === this.waitingList[i].originFloor) {
          this._passengersEnter(this.waitingList[i]);
          console.log(this.waitingList);
          //Take the person out of the waiting list and create a put a request into requests array
          this.requests.push(this.waitingList[i].destinationFloor);
          this.waitingList.splice(i, 1);
          console.log(this.requests);
        }
      }
      }
    // if(this.passengers.length === 0) {
    //   console.log('-EMPTY ELEVATOR-');
    // } else {
    //   //Take the person out of the elevator if it has arrived to destination floor
    //   for(let i = this.passengers.length -1; i >= 0; i--) {
    //     if(this.floor === this.passengers[i].destinationFloor) {
    //       this._passengersLeave(i, this.passengers[i]);
    //     }
    //   }
    // }
    // // Delete the completed requests then move the elevator if not completed
    // for(let i = this.requests.length -1; i >= 0; i--) {
    //   if(this.floor === this.requests[i]) {
    //     this.requests.splice(i, 1);
    //   }
    // }
    // // Move the elevator
    // let floorToGo = this.requests[0];
    // this.destination = floorToGo > this.floor ? 'up' : 'down';
    // this.log();
    //
    // if(this.direction === 'up') this.floorUp();
    // if(this.direction === 'down') this.floorDown();
  }
  _passengersEnter(person) {
    this.passengers.push(person);
    console.log(`${person.name} has entered the elevator`);
  }
  _passengersLeave(index, person) {
    console.log(`${person.name} has left the elevator`);
    this.passengers.splice(index, 1);
  }
  floorUp() {
    this.floor = this.floor < this.MAXFLOOR ? this.floor +1 : this.floor;
    this.update();
  }
  floorDown() {
    this.floor = this.floor > 0 ? this.floor -1 : this.floor;
    this.update();
  }
  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
    console.log(`${person.name} has called the elevator from ${person.originFloor} to go to ${person.destinationFloor}`);

  }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;

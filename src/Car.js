function Car(make, model, year, color, seats, passengers) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats;
  // TODO: add color, seats here
  this.running = false;
  this.owner = 'manufacturer';
  this.previousOwners = [];
  this.passengers = passengers || [];
}

Car.prototype.sell = function(newOwner) {
  this.previousOwners.push(this.owner);
  this.owner = newOwner;
  return newOwner;
};

Car.prototype.paint = function(newColor) {
  this.color = newColor;
  return newColor;
};

Car.prototype.start = function(running) {
  this.running = true;
  return true;
}

Car.prototype.off = function(running) {
  this.running = false;
  return false;
}

Car.prototype.driveTo = function(destination) {
  if (this.running === false) {
    return false;
  } else if (this.running === true) {
    console.log("driving to" + destination);
    return true;
  }
}

Car.prototype.park = function(running) {
  if (this.running === false) {
    console.log("parked!!");
    return true;
  } else if (this.running === true) {
    return false;
  }
}

Car.prototype.pickUp = function(name) {
  if ((this.running === true) && (this.passengers.length < this.seats-1)) {
    console.log("driving to pick up " + name);
    this.passengers.push(name);
    console.log(this.passengers);
    return true;
  } else if (this.passengers.length >= this.seats) {
    console.log('cant pick up cos full');
    return false;
  } else {
    console.log('No pick up!!!');
    return false;
  }
}

Car.prototype.dropOff = function(name) {
  if ((this.passengers.includes(name)===true) && (this.running === true)) {
    console.log("driving to drop off " + name);
    this.passengers.splice((this.passengers.indexOf(name)),1);
    return true
  } else {
    return false
  }
}

Car.prototype.passengerCount = function () {
  return this.passengers.length
}

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;

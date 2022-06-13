let hawaii = {
  location: 'america',
  landmarks: 'beach',
  time: 'summer',
  notes: 'fun'
};

let shanghai = {
  location: "china",
  landmarks: "Pearl TV Tower",
  time: "summer",
  notes: "home"
}

function Place(location, landmarks, time, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
};


let leavenworth = new Place("leavenworth","museum","summer","Reindeers are cute!")
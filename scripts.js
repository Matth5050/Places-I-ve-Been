
function Place(location, landmarks, time, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
};


let places = [
  { name: "hawaii",
    location: 'america',
    landmarks: 'beach',
    time: 'summer',
    notes: 'fun'
   },
   { name: "shanghai",
     location: "china",
     landmarks: "Pearl TV Tower",
     time: "summer",
     notes: "home"
  },
  { name:"leavenworth",
    location: "america",
    landmarks: "museum",
    time: "summer",
    notes: "Reindeers are cute!" 
  },
  { name: "Texas",
    location: "america",
    landmarks: "whatever",
    time: "summer",
    notes: "fun"
  }
]

// Business logic
$(document).ready(function(){
  $("p.hawaii").click(function(event){
    event.preventDefault();
      $("ul.hawaii").append("<li>" + places[0].location + "</li>");
      $("ul.hawaii").append("<li>" + places[0].landmarks + "</li>");
      $("ul.hawaii").append("<li>" + places[0].time + "</li>");
      $("ul.hawaii").append("<li>" + places[0].notes + "</li>");
    })
  $("p.shanghai").click(function(event){
    event.preventDefault();
      $("ul.shanghai").append("<li>" + places[1].location + "</li>");
      $("ul.shanghai").append("<li>" + places[1].landmarks + "</li>");
      $("ul.shanghai").append("<li>" + places[1].time + "</li>");
      $("ul.shanghai").append("<li>" + places[1].notes + "</li>");
    })
  $("p.leavenworth").click(function(event){
    event.preventDefault();
      $("ul.leavenworth").append("<li>" + places[2].location + "</li>");
      $("ul.leavenworth").append("<li>" + places[2].landmarks + "</li>");
      $("ul.leavenworth").append("<li>" + places[2].time + "</li>");
      $("ul.leavenworth").append("<li>" + places[2].notes + "</li>");
    })
  $("p.texas").click(function(event){
    event.preventDefault();
      $("ul.texas").append("<li>" + places[3].location + "</li>");
      $("ul.texas").append("<li>" + places[3].landmarks + "</li>");
      $("ul.texas").append("<li>" + places[3].time + "</li>");
      $("ul.texas").append("<li>" + places[3].notes + "</li>");
    })
  });
 
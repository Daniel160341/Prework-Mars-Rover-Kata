// Rover Object Goes Here
// ======================
var rover ={
  direction: "N",
  position:[0,0],
  travelLog:[]
};
// ======================

function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;    
  }
  console.log("turnLeft was called!");

}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;    
  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  if (rover.direction === "N") {
    rover.position[1]--;
    console.log(rover.position); 
  }
  else if (rover.direction === "S") {
    rover.position[1]++;
    console.log(rover.position);
  } 
  else if (rover.direction === "E"){
    rover.position[0]--;
    console.log(rover.position);
  }
  else if (rover.position === "W"){
    rover.position[0]++;
    console.log(rover.position);
  }
  else {
    console.log("something is failing");
  }
  console.log("moveForward was called")
  rover.travelLog.push.apply(rover.travelLog, rover.position);
  
}

function command(str){
  for(var i = 0; i < str.length; i++){
    if(str[i] !== "l" && str[i] !== "r" && str[i] !== "f" && str[i] !== "b"){
      return "You can use only: 'l', 'r', 'f', or 'b'.";
    }
  } 
  for(i = 0; i < str.length; i++){
  switch (str[i]) {
    case 'l':
      turnLeft(rover);
      break;
    case 'r':
      turnRight(rover);
      break;
    case 'f':
      moveForward(rover);
      break;
    case 'b':
      moveBackward(rover);
      break;
    }
    
  } 
    console.log(rover.travelLog);
}

function moveBackward (rover){
  if (rover.direction === "N") {
    rover.position[1]++;
    console.log(rover.position); 
  }
  else if (rover.direction === "S") {
    rover.position[1]--;
    console.log(rover.position);
  } 
  else if (rover.direction === "E"){
    rover.position[0]++;
    console.log(rover.position);
  }
  else if (rover.position === "W"){
    rover.position[0]--;
    console.log(rover.position);
  }
  else {
    console.log("something is failing");
  }
  console.log("moveBackward was called")
  rover.travelLog.push.apply(rover.travelLog, rover.position);

}
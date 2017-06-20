function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandRestaurant() { 
	eat = setInterval(function() { 
      randRestaurant()}, 300);
}

function randRestaurant(){
	restaurantArray = ["KFC", "McDonalds", "Wendys", "Carls Jr", "Texas Chicken", "Burger King"];
	restaurantLength = restaurantArray.length;
	rand = getRandomInt(0, restaurantLength);
	restaurant = document.getElementById("restaurant");
	restaurant.innerHTML = restaurantArray[rand];
}

function removeElement() {
	var element = document.getElementById('result');
    element.parentNode.removeChild(element);
  }

function addResult() {
    var newElement = document.createElement("P");
    var text = document.createTextNode("Great! Lets go to " + restaurantArray[rand]);
    newElement.appendChild(text);
    document.body.appendChild(newElement);
    newElement.setAttribute('id','result');

  }

function getTheRestaurant(){
  clearInterval(eat);
  if(!document.getElementById('result')){
    addResult()
  }
  else {
    removeElement();
    addResult();
  }
}

 function addRestaurantListener(){
  startBtn = document.getElementById('start-random-button');
  
  // Replace 'functionName' with the name of the function that you have written
  startBtn.addEventListener("click", getRandRestaurant)

  getBtn = document.getElementById('get-restaurant-button');
  
  // Replace 'functionName' with the name of the function that you have written
  getBtn.addEventListener("click", getTheRestaurant);
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);


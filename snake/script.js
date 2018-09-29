let snake = new Snake()

game = {
  over: false,
  score: 0,
  fps: 8,
  
  message: null,
  
  start: function() {
    game.over = false;
    game.message = null;
    game.score = 0;
    game.fps = 8; //frames per second
    
    snake.init();
    food.set();
  },
  
  stop: function() {  //sets the game state to over
    game.over = true;
    game.message = 'GAME OVER - PRESS SPACEBAR';
  },
  
  drawBox: function(x, y, size, color) {
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(x - (size / 2), y - (size / 2));
    context.lineTo(x + (size / 2), y - (size / 2));
    context.lineTo(x + (size / 2), y + (size / 2));
    context.lineTo(x - (size / 2), y + (size / 2));
    context.closePath();
    context.fill();
  },
  
  drawScore: function() {  //displays the score almost full hight of the canvas
    context.fillStyle = '#999';
    context.font = (canvas.height) + 'px Impact, sans-serif';
    context.textAlign = 'center';
    context.fillText(game.score, canvas.width / 2, canvas.height * 0.9);
  },
  
  drawMessage: function() {  //checks if a game.message exists, and puts in on the canvas 
    if (game.message !== null) {
      context.fillStyle = '#00F';
      context.strokeStyle = '#FFF';
      context.font = (canvas.height / 10)+ 'px Impact';
      context.textAlign = 'center';
      context.fillText(game.message, canvas.width / 2, canvas.height / 2);
      context.strokeText(game.message, canvas.width / 2, canvas.height / 2);
    }
  },
  
  resetCanvas: function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
  
};

class Food {
  constructor(){
    this.arr =[];
    this.size = null;
    this.x = null;
    this.y = null;
    this.color = '#0FF';
  }
  

  
  set() {
    this.size = snake.size;
    this.x = (Math.ceil(Math.random() * 10) * snake.size * 4) - snake.size / 2;
    this.y = (Math.ceil(Math.random() * 10) * snake.size * 3) - snake.size / 2;
  }
  
  draw() {
    this.drawSection(this.sections[i].split(','));

    game.drawBox(this.x, this.y, this.size, this.color);
  
  }
  
};

let food = new Food();


let arr = [];

for(let i = 0; i < 5; i++){
  food.set();
  arr.push({x: food.x, y: food.y});
}
console.log(arr)
for(let i = 0; i < arr.length; i++){
game.drawBox(arr[i].x, arr[i].y, snake.size, 'red');
}





let inverseDirection = {
  'up': 'down',
  'left': 'right',
  'right': 'left',
  'down': 'up'
};

let keys = {
  up: [38, 75, 87],
  down: [40, 74, 83],
  left: [37, 65, 72],
  right: [39, 68, 76],
  start_game: [13, 32]
};

function getKey(value){//we can see if a key code is present in our keys object,
  for (let key in keys){ //  and if so return the key of the matched value
    if (keys[key] instanceof Array && keys[key].indexOf(value) >= 0){
      return key;
    }
  }
  return null;
}

addEventListener("keydown", function (e) {  
    let lastKey = getKey(e.keyCode);  
    if (['up', 'down', 'left', 'right'].indexOf(lastKey) >= 0
        && lastKey != inverseDirection[snake.direction]) {
      snake.direction = lastKey;
    } else if (['start_game'].indexOf(lastKey) >= 0 && game.over) {
      game.start();
    }
}, false);



let requestAnimationFrame = window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame;


function loop() {
  if (game.over == false) {
    game.resetCanvas(); //Clears the canvas of all drawings
    game.drawScore();//Draws the game.score into the background of our game board
    snake.move();//Calculates the new head position of our snake
    food.draw();//Places a piece of food on the game board
    snake.draw();//Draws our snake by iterating through the snake.sections array
    game.drawMessage();//Displays game messages on screen, used for GAME OVER message
  
  } else if(game.over == true && game.score!== 0 && game.score > localStorage.getItem("high")){
    localStorage.setItem("high", JSON.stringify(game.score));
  }





  

  setTimeout(function() {
    requestAnimationFrame(loop);
  }, 1000 / game.fps);
}





requestAnimationFrame(loop);
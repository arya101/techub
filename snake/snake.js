let canvas = document.getElementById("the-game");
let context = canvas.getContext("2d");
context.canvas.width = 800;
canvas.height = 700;


class Game {
    constructor(x, y, size, color){
    this.score = 0;
    this.fps = 8;
    this.over = false;
    this.message = null;
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    }

    // start() {
    //     this.over = false;
    //     this.message = null;
    //     this.score = 0;
    //     this.fps = 8;
    //     snake.init();
    //     food.set();
    //   }

    //   stop() {
    //     this.over = true;
    //     this.message = 'GAME OVER - PRESS SPACEBAR';
    //   }

      drawBox() {
        context.fillStyle = this.color;
        context.beginPath();
        context.moveTo(this.x - (this.size / 2), this.y - (this.size / 2));
        context.lineTo(this.x + (this.size / 2), this.y - (this.size / 2));
        context.lineTo(this.x + (this.size / 2), this.y + (this.size / 2));
        context.lineTo(this.x - (this.size / 2), this.y + (this.size / 2));
        context.closePath();
        context.fill();
      }

    //   drawMessage() {
    //     if (game.message !== null) {
    //       context.fillStyle = '#00F';
    //       context.strokeStyle = '#FFF';
    //       context.font = (canvas.height / 10) + 'px Impact';
    //       context.textAlign = 'center';
    //       context.fillText(game.message, canvas.width/2, canvas.height/2);
    //       context.strokeText(game.message, canvas.width/2, canvas.height/2);
    //     }
      //}

      clearRect() {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }



}

let game = new Game(0,0,500,'seagreen');
game.drawBox()
game.over = true;



class Snake {
    constructor(number){
    this.number = number;
    this.size = canvas.width / 40,
    this.x = null;
    this.y = null;
    this.color = '#red';
    this.direction = 'left';
    this.sections = [];

    }

    init() {
        this.sections = [];
        this.direction = 'left';
        this.x = canvas.width / 2 + this.size / 2;
        this.y = canvas.height /2 + this.size / 2;
        for (let i = this.x + (this.number * this.size); i >= this.x; i-=this.size) {
          this.sections.push(i + ',' + this.y);
        }
      }

    //   drawSection() {
    //     game.drawBox(parseInt(section[0]), parseInt(section[1]), snake.size, snake.color);
    //   }

      draw() {
        for (let i = 0; i < this.sections.length; i++) {
          this.sections[i].split(',');
          game.drawBox(parseInt(this.sections[0]), parseInt(this.sections[1]), snake.size, snake.color);
        }    
      }

}

let snake = new Snake(4);
snake.init()
snake.draw()


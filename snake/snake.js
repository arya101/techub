let canvas = document.getElementById("the-game");
let context = canvas.getContext("2d");
context.canvas.width = 800;

class Game {
    constructor(x, y, size, color) {
        this.score = 0;
        this.fps = 8;//frames per second
        this.over = false;
        this.message = null;
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;

    }

    start() {
        this.over = false;
        this.message = null;
        this.score = 0;
        this.fps = 8;
        snake.init();
        food.set();
    }

    stop() {
        this.over = true;
        this.message = 'GAME OVER - PRESS SPACEBAR';
    }

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

    //drawScore

    drawMessage() {
        if (this.message !== null) {
            context.fillStyle = '#00F';
            context.strokeStyle = '#FFF';
            context.font = (canvas.height / 10) + 'px Impact';
            context.textAlign = 'center';
            context.fillText(game.message, canvas.width / 2, canvas.height / 2);
            context.strokeText(game.message, canvas.width / 2, canvas.height / 2);
        }
    }

    resetCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }




}


let game = new Game(10, 10, canvas.width, 'seagreen');



class Snake {
    constructor(size) {
        this.size = size;
        this.x = null;
        this.y = null;
        this.color = "#0F0";
        this.direction = 'left';
        this.sections = [];
        this.section = [];
    }

    init() {
        this.sections = [];
        this.direction = 'left';
        this.x = canvas.width / 2 + this.size / 2;
        this.y = canvas.height / 2 + this.size / 2;
        
        for (let i = this.x + (5 * this.size); i >= this.x; i -= this.size) {
            snake.sections.push(i + ',' + this.y);
        }
    }

    move() {
        switch (snake.direction) {
            case 'up':
                snake.y -= snake.size;
                break;
            case 'down':
                snake.y += snake.size;
                break;
            case 'left':
                snake.x -= snake.size;
                break;
            case 'right':
                snake.x += snake.size;
                break;
        }
        this.checkCollision();
        this.checkGrowth();
        this.sections.push(this.x + ',' + this.y);
    }

    draw() {
        for (let i = 0; i < this.sections.length; i++) {
            this.drawSection(this.sections[i].split(','));
        }
    }

    drawSection() {
        game.drawBox(parseInt(this.section[0]), parseInt(this.section[1]), this.size, this.color);
    }

    checkCollision() {
        if (this.isCollision(this.x, this.y) === true) {
            game.stop();
        }
    }

    isCollision() {
        if (this.x < this.size / 2 ||
            this.x > canvas.width ||
            this.y < this.size / 2 ||
            this.y > canvas.height ||
            this.sections.indexOf(this.x + ',' + this.y) >= 0) {
            return true;
        }
    }

    checkGrowth() {
        if (this.x == food.x && this.y == food.y) {
            game.score++;
            if (game.score % 5 == 0 && game.fps < 60) {
                game.fps++;
            }
            food.set();
        } else {
            this.sections.shift();
        }
    }


}


let snake = new Snake(5);


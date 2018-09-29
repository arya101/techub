class Snake {
    constructor() {
        this.size = canvas.width / 40,
            this.x = null,
            this.y = null,
            this.color = '#0F0',
            this.direction = 'left',
            this.sections = []
    }
    init() {  //builds starting snake
        this.sections = [];
        this.direction = 'left';
        this.x = canvas.width / 2 + this.size / 2;
        this.y = canvas.height / 2 + this.size / 2;
        for (let i = snake.x + (snakeLength * this.size); i >= this.x; i -= this.size) {
            this.sections.push(i + ',' + this.y);
        }
    }
    move() { //checks the snake.direction, which is updated later in the script, and then manipulates the head of the snake accordingly
        switch (this.direction) {
            case 'up':
                this.y -= this.size;
                break;
            case 'down':
                this.y += this.size;
                break;
            case 'left':
                this.x -= this.size;
                break;
            case 'right':
                this.x += this.size;
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
    drawSection(section) {
        game.drawBox(parseInt(section[0]), parseInt(section[1]), this.size, this.color);
    }

    checkCollision() {
        if (snake.isCollision(this.x, this.y) === true) {
            game.stop();
            
        }
    }

    isCollision(x, y) {
        if (x < this.size / 2 ||
            x > canvas.width ||
            y < this.size / 2 ||
            y > canvas.height ||
            this.sections.indexOf(x + ',' + y) >= 0) {
            return true;
        }
    }

    checkGrowth() { //allow the snake to grow if it is on the same position as a piece of food
        if (this.x == food.x && this.y == food.y) {
            game.score += 10;
            if (game.score % 100 == 0 && game.fps < 60) {
                game.fps++;
            }
            food.set();
        } else {
            this.sections.shift();
        }

    }
    

}



 

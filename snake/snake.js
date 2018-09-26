window.onload = function () {

    let canvas = document.createElement('canvas');
    let rowNum = 40;
    let colNum = 50;
    canvas.height = rowNum * 10;
    canvas.width = colNum * 10;
    let context = canvas.getContext('2d');
    let body = document.getElementsByTagName('body')[0];
    body.appendChild(canvas);

    class Board {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }

        drawBoard() {

            for (let x = 0; x <= this.width; x += 10) {
                context.moveTo(x, 0);
                context.lineTo(x, this.height);
            }


            for (let x = 0; x <= this.height; x += 10) {
                context.moveTo(0, x);
                context.lineTo(this.width, x);
            }

            context.strokeStyle = "black";
            context.stroke();
        }



    }

    let board = new Board(canvas.height, canvas.width);
    board.drawBoard();


    class Snake {
        constructor(length) {
            
            this.snake = [];
            this.length = length;
        }

        generateSnake() {
            let x = Math.floor(Math.random()*10) * canvas.width/10;
            let y = Math.floor(Math.random()*10) * canvas.height/10;
            
            for(let i = this.length; i > 0; i--){
                this.snake.push({x, y});
            }

            
           
            while(canvas.width - x < this.length * 10){
                x = Math.floor(Math.random()*10) * canvas.width/10;
            }
                   
                context.fillStyle = 'green';
                context.fillRect(x, y, snake.length *10, 10);
                context.strokeStyle = 'darkgreen';
                context.strokeRect(x, y, snake.length *10, 10);
                   
       
                this.snake[0] = 1;

        }
        


    }

    let snake = new Snake(20);
    snake.generateSnake()


    class Food{

        constructor(number){
            this.food = [];
            this.number = number;
        }
        generateFood(){

            //let x = Math.floor(Math.random()*10) * canvas.width/10;
            //let y = Math.floor(Math.random()*10) * canvas.height/10;

            

            while(this.number){
               let x = Math.floor(Math.random()*10) * canvas.width/10;
               let y = Math.floor(Math.random()*10) * canvas.height/10;
               
               let obj = {
                   x : x,
                   y: y
               }
               
               
                this.food.push(obj);
                console.log(this.food)
                this.number--;
                
            }
            

           // console.log(this.food)
            
            do{
                context.fillStyle = 'orange';
                context.fillRect(this.food[0].x, this.food[0].y, 10, 10);
                console.log(this.food.length);
                this.food.length--;
                
                //console.log(this.food[0].x)
                
            } while(this.food.length > 0)

            this.food.forEach(function(el){
                el = 2;
            })
            
        }
        


    }


    let food = new Food(4);
    food.generateFood();










}
















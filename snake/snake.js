window.onload = function () {

    let canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        score = 0,
        level = 0,
        direction = 0;

    canvas.width = 204;
    canvas.height = 224;

    let body = document.getElementsByTagName('body')[0];
    body.appendChild(canvas);


    var map = new Array((canvas.width - 4) / 10);
    for (var i = 0; i < map.length; i++) {
        map[i] = new Array((canvas.height - 24) / 10);
    }









    class DrawMain {

        drawMain() {
            ctx.lineWidth = 2; // Our border will have a thickness of 2 pixels
            ctx.strokeStyle = 'black'; // The border will also be black


            ctx.strokeRect(2, 20, canvas.width - 4, canvas.height - 24);

            ctx.font = '12px sans-serif';
            ctx.fillText('Score: ' + score + ' - Level: ' + level, 2, 12);
        }


    }

    let drawMain = new DrawMain();
    drawMain.drawMain();



    class Draw {

        drawGame() {
            //Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            //Draw the border as well as the score
            drawMain.drawMain();

            // // Start cycling the matrix
            // for (let x = 0; x < map.length; x++) {
            //     for (let y = 0; y < map[0].length; y++) {
            //         if (map[x][y] === 1) {
            //             ctx.fillStyle = 'black';
            //             ctx.fillRect(x * 10, y * 10 + 20, 10, 10);
            //         } else if (map[x][y] === 2) {
            //             ctx.fillStyle = 'orange';
            //             ctx.fillRect(x * 10, y * 10 + 20, 10, 10);
            //         }
            //     }
            // }
        }
    }

    let draw = new Draw();
    draw.drawGame();


    class Food {
        constructor(map, number) {
            this.map = map;
            this.number = number;
        }
        generateFood() {
            // Generate a random position for the rows and the columns.
                let rndX = Math.round(Math.random() * (canvas.width - 4) / 10 - 1);
                let rndY = Math.round(Math.random() * (canvas.height - 24) / 10 - 1);
            


            // We also need to watch so as to not place the food
            // on the same matrix position occupied by a part of the
            // snake's body.
            while (map[rndX][rndY] === 2 && this.number) {
                rndX = Math.round(Math.random() * (canvas.width - 4) / 10 - 1);
                rndY = Math.round(Math.random() * (canvas.height - 24) / 10 - 1);
                this.number--;
            }

            map[rndX][rndY] = 1;
            return map;
        }

        draw() {
            for (let x = 0; x < map.length; x++) {
                for (let y = 0; y < map[0].length; y++) {
                    if (map[x][y] === 1) {
                        ctx.fillStyle = 'black';
                        ctx.fillRect(x * 10, y * 10 + 20, 10, 10);
                    }

                }
            }
        }

    }

    // Add the food
    let food = new Food(map, 5);
    map = food.generateFood(map);
    food.draw();



    let snake = new Array(3);


    class GenerateSnake {


        generateSnake(map) {
            // Generate a random position for the row and the column of the head.
            let rndX = Math.round(Math.random() * (canvas.width - 4) / 10 - 1);
            let rndY = Math.round(Math.random() * (canvas.height - 24) / 10 - 1);

            // Let's make sure that we're not out of bounds as we also need to 
            // make space to accomodate the other body pieces
            while ((rndX - snake.length) < 0) {
                rndX = Math.round(Math.random() * (canvas.width - 4) / 10 - 1);
            }

            for (let i = 0; i < snake.length; i++) {
                snake[i] = { x: rndX - i, y: rndY };
                map[rndX - i][rndY] = 2;

            }



            return map;
        }

        draw() {

            for (let x = 0; x < map.length; x++) {
                for (let y = 0; y < map[0].length; y++) {
                    if (map[x][y] === 2) {
                        ctx.fillStyle = 'orange';
                        ctx.fillRect(x * 10, y * 10 + 20, 10, 10);
                    }
                }
            }
        }




    }

    let generateSnake = new GenerateSnake();
    generateSnake.generateSnake(map);
    generateSnake.draw();


}
















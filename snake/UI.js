
document.getElementById('snakeLength').addEventListener('input', function(e){
    snakeLength = e.target.value;
});

document.getElementById('boardSize').addEventListener('input', function(e){
    canvas.width = parseInt(e.target.value);
    
})

let highScore = localStorage.getItem('high');
console.log(highScore)

document.getElementById('high-score').innerHTML +=  highScore;

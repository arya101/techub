

document.getElementById("bt1").addEventListener( 'onclick', function() {
    let msg = document.getElementById("boardSize").value;
    canvas.width = msg;
    
});

document.getElementById('snakeLength').addEventListener('mouseout',function(e){
   snakeLength = e.target.value;
})


localStorage.setItem("boardsize", JSON.stringify(canvas.width));

let highScore = localStorage.getItem('high');
console.log(highScore)

document.getElementById('high-score').innerHTML +=  highScore;

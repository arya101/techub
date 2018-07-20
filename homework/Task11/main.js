// for (let node of document.body.firstElementChild.children){
//     if()
// }

let y = document.body.firstElementChild.children;
console.log(y);
let l = y.length;
for(let i = 2; i < l; i += 6){
    if(i % 20 != 0){
        y[i].style.backgroundColor = "blue";
    }
    else{
        y[i].style.backgroundColor = "orange";
    }
}

for(let i = 3; i < l; i += 6){
    if(i % 15 != 0){
        y[i].style.backgroundColor = "blue";
    }
    else{
        y[i].style.backgroundColor = "orange";
    }
}

for( let i = 12; i < 24; i++){
    if( (i % 14 != 0) && (i % 21 != 0)){
        y[i].style.backgroundColor = "orange";
    }
    
 }
    

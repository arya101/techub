function sumInput(){
    
    let set = [];

    while( 1 ){

        let num = prompt("enter a number");

        if ( num === null || num === "" || !isFinite(num)) break;

        set.push(+num);
    }

    let sum = 0;
    for (let num of set){
        sum +=num;
    }

    return sum;
}

alert(sumInput() );

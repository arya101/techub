let ans = prompt("who is there");

if (ans == "Admin"){
    let pass = prompt("enter password");
       if (pass == "TheMaster"){
          alert('Welcome');
       }
       else if (pass == '' || pass == null){
          alert('Canceled');
       }
       else{
          alert('Wrong password');
       }
}
else if ( ans == '' || ans == null){
    alert('Canceled');
 }

else{
    alert("I don't know");
}

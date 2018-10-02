let Car = function(name,color,brand){
    
    this.setName = name;
    this.setColor =color;
    this.setBrand=brand;
    this.save=function(){
        console.log(`saving  ${this.setName} ,color - ${this.setColor} ,brand - ${this.setBrand}`)
    }
}
// funqciis gamodzaxeba
mycar=new Car('minicooper','blue','S')
mycar.save()
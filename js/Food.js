class Food{
    constructor(){
        this.foodStock = 0;
        this.lastFed;
        this.image = loadImage('virtual pet images/Food Stock.png')
    }

    display(){
        //console.log("100000000000000000000000000000000000")
        var q = 50;
        var w = 90;
        if(this.foodStock>0){
          for(var i = 1;i<=this.foodStock;i++){
              if(i%11===0){
                  w = w+50
                  q = 20;
                }
              image(this.image,q,w,50,50)
              q = q+50;
          }  
        }
    }
    getFoodStock(){
        return this.foodStock;
    }
    updateFoodStock(b){
        this.foodStock = b;

    }
    deductFood(){}
}
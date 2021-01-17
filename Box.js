class Box
{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0,

            
        }
        this.boxObject = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.boxObject);
        this.width = width;
        this.height = height;
       
     
      }
      score(){
        if(this.boxObject.visibility<0 && this.boxObject.visibility >-105){
          score++;
        }
      }
      display(){
        if(this.boxObject.speed < 8){
          push();
          var pos =this.boxObject.position;
            fill("blue")
          rectMode(CENTER);
          rect(pos.x,pos.y, this.width, this.height);

  
   pop();
         }
         else{
           World.remove(world, this.boxObject);
           push();
           this.Visiblity = this.Visiblity - 100;
         
           pop();
         }
          
   }
  
}

class Rubber {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1.0
      }
     this.body = Matter.Bodies.circle(x, y, radius);
     matter.Bodies.rubber(300,400,50,50);
      
     
    }
    display(){
     
      ellipse(0, 0, this.radius);
    
    }
  };
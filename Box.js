class Box{
    constructor(x,y,w,h){
        var option={
            isStatic:true
        }
        this.body1=Bodies.rectangle(x,y,w,h/2,option);
        World.add(world,this.body1);

        this.body2=Bodies.rectangle(x-w/2,y,20,200,option);
        World.add(world,this.body2)

        this.body3=Bodies.rectangle(x+w/2,y,20,200,option);
        World.add(world,this.body3)
        this.height = h;
        this.image=loadImage("images/dustbingreen.png")
    }

    display(){
        var pos1=this.body1.position;
        var pos2=this.body2.position;
        var pos3=this.body3.position;
        push ()
        rectMode(CENTER);
        fill ("white");
     //   rect ( pos1.x,pos1.y,200,this.height);
     //   rect ( pos2.x,pos2.y,20,200);
     //   rect ( pos3.x,pos3.y,20,200);
        imageMode (CENTER);
        tint (255,200)
        image(this.image,pos1.x,pos1.y-150)
        pop ()
    }
}
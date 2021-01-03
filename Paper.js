class Paper{
    constructor(x,y,r){
        var option={
            //isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:2.2
        }
        this.body=Bodies.rectangle(x,y,r,r/2,option);
        World.add(world,this.body);
        this.r=r;
        this.image=loadImage("images/paper.png")
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        fill ("pink");
       // ellipseMode(RADIUS)
        imageMode(CENTER);
       // rectMode(CENTER)
       
        image(this.image,0,0,this.r,this.r);
        pop ();
       
    }
}
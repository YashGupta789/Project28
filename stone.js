class Stone{
    constructor(x,y,r){
        var option={
            isStatic:false,
            restitution:0,
            friction:1,
            density:200,
        }
        this.x=x;
		this.y=y;
		this.r=r;
        this.image=loadImage("stone.png");
        this.body=Bodies.circle(this.x, this.y, this.r/2, option)
        World.add(world,this.body);
    }
    display(){
        var stonepos=this.body.position;		
        push()
        translate(stonepos.x, stonepos.y);
        imageMode(CENTER);
        ellipseMode(RADIUS)
        image(this.image, 0,0,this.r*2, this.r*2)
        pop()
    }
}
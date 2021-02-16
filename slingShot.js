class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 5
        }
        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    }
    fly(){
        this.slingshot.bodyA=null;
    }
    reattach(body){ 
        this.slingshot.bodyA=body;
        }
    display(){
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }  
}

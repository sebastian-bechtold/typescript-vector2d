export class Vec2d {
    
    x : number = 0;
    y : number = 0;
    
    constructor(x : number, y : number) {
        this.x = x;
        this.y = y;
    }
    
    add(v : Vec2d) : Vec2d {        
        return new Vec2d(this.x + v.x, this.y + v.y);
    }
    
    
    copy() : Vec2d {        
        return new Vec2d(this.x, this.y);
    }
    
    
    mult(scalar : number) {
        return new Vec2d(this.x * scalar, this.y * scalar);
    }
    
    subtract(v : Vec2d) : Vec2d {        
        return new Vec2d(this.x - v.x, this.y - v.y);
    }
    
    
    toString() : string {
        return "(" + this.x + ", " + this.y + ")";
    }
}

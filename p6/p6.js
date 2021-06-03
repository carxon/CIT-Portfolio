class Shape {
    constructor (sides = []) {
        this.sides = sides;
    }
    perimeter = () => {return this.sides = (this.sides.length === 0 ) ? console.log("Not enough sides") : this.sides.reduce((addSide, currentValue) => addSide + currentValue);}
}

class Rectangle extends Shape {
    constructor (   
        length = 0,
        width = 0,
    ) {
    super([length, width, length, width]);
    this.length = length;
    this.width = width;
    }

    area = () => { return this.length * this.width; }

}

class Triangle extends Shape {
    constructor (
        sideA = 0,
        sideB = 0,
        sideC = 0,
    ) {
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    area = () => {
        let s = (this.sideA + this.sideB + this.sideC) / 2
        return Math.sqrt(s * ((s - this.sideA) * (s - this.sideB) * (s - this.sideC)))
    }

}

const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];
let shape = null;

data.map( (item => {
    switch (item.length) {
        case 2:
            shapePerimeter = new Rectangle(...item).perimeter();
            shapeArea = new Rectangle(...item).area();
            console.log("Rectangle with sides " + `${item}` 
            + " has a perimeter of " + `${shapePerimeter}` 
            + " and an area of " + `${shapeArea}` )
            
            break;
        case 3:
            shapePerimeter = new Triangle(...item).perimeter();
            shapeArea = new Triangle(...item).area();
            console.log("Triangle with sides " + `${item}` 
            + " has a perimeter of " + `${shapePerimeter}` 
            + " and an area of " + `${shapeArea}` )
            break;
        default:
            console.log("Shape with " + `${item.length}` + " sides is unsupported")
            break;
    }
}))

//console.log("Rectange with a side of 3,4 has a perimeter of ")

/*
console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0

console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0

console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0
*/

//thursday class has part 6
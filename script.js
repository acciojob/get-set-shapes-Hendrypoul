//complete this code
class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
	get Width() {
		return this.width;
	}
	get Height() {
		return this.height;
	}
	getArea() {
		return (this.width) * (this.height);
	}
}

class Square extends Animal {
	constructor(side) {
    super(side, side);
  }
	getPerimeter() {
		return 2 * (this.width) + 2 * (this.height);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

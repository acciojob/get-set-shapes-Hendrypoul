//complete this code
class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
	get getWidth() {
		return this.width;
	}
	get getHeight() {
		return this.height;
	}
	getArea() {
		return (this.width) * (this.height);
	}
}

class Square extends Animal {
	getPerimeter() {
		return 2 * (this.width) + 2 * (this.height);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

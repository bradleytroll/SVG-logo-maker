class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color
    }

    render() {
        return '';
    }

}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="150" r="80" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,20 250,180 50,180" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="70" y="50" width="160" height="160" fill="${this.color}" />`
    }
}

module.exports = { Circle, Triangle, Square };


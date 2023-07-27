class Shapes {
    constructor(text, color, textColor) {
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    }
}

class Square extends Shapes {
    render() {
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="30" height="30" fill="${this.color}"/><text fill="${this.textColor}">${this.text}</text></svg>`;
    }
};

class Triangle extends Shapes {
    render() {
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 100,0 50,100" fill="${this.color}"/><text fill="${this.textColor}">${this.text}</text></svg>`;
    }
};

class Circle extends Shapes {
    render() {
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}"><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</>text></svg>`;
    }
};

module.exports = {Square, Triangle, Circle};
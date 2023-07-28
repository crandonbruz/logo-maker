class Shapes {
  constructor(text, color, textColor) {
    if(text.length > 3 ){
        throw new Error("You can't use more than 3 letters")
    }
    this.text = text;
    this.textColor = textColor;
    this.color = color;
  }
}

class Square extends Shapes {
  render() {
    return `<svg width="300" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="100" width="130" height="130" fill="${this.color}"/><text x="170" y="180" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

class Triangle extends Shapes {
  render() {
    return `<svg width="300" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150,50 92.25,150 207.75,150" fill="${this.color}"/><text x="150" y="120" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

class Circle extends Shapes {
  render() {
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

module.exports = { Square, Triangle, Circle };

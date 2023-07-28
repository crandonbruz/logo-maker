const { Circle, Square, Triangle } = require("./shapes.js");

describe("Square", () => {
  it("should make a purple svg square", () => {
    let exampleSquare = `<svg width="300" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="100" width="130" height="130" fill="purple"/><text x="170" y="180" font-size="60" text-anchor="middle" fill="white">svg</text></svg>`;
    let madeSquare = new Square("svg", "purple", "white");
    expect(madeSquare.render()).toMatch(exampleSquare);
  });
  describe("Triangle", () => {
    it("should make a orange svg triangle", () => {
      let exampleTriangle = `<svg width="300" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150,50 92.25,150 207.75,150" fill="orange"/><text x="150" y="120" font-size="40" text-anchor="middle" fill="white">svg</text></svg>`;
      let madeTriangle = new Triangle("svg", "orange", "white");
      expect(madeTriangle.render()).toMatch(exampleTriangle);
    });
  });

  describe("Circle", () => {
    it("should make a green svg circle", () => {
      let exampleCircle = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">svg</text></svg>`;
      let madeCircle = new Circle("svg", "green", "white");
      expect(madeCircle.render()).toMatch(exampleCircle);
    });
  });
});

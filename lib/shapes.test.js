const { Circle, Square, Triangle } = require("./shapes.js");

describe("Square", () => {
  it("should make a purple svg square", () => {
    let exampleSquare = `<rect x="100" y="100" width="130" height="130" fill="purple"/>`;
    let madeSquare = new Square("svg","white", "purple");
    expect(madeSquare.render()).toMatch(exampleSquare);
  });
  describe("Triangle", () => {
    it("should make a orange svg triangle", () => {
      let exampleTriangle = `<polygon points="150,50 92.25,150 207.75,150" fill="orange"/>`;
      let madeTriangle = new Triangle("svg","white", "orange");
      expect(madeTriangle.render()).toMatch(exampleTriangle);
    });
  });

  describe("Circle", () => {
    it("should make a green svg circle", () => {
      let exampleCircle = `<circle cx="150" cy="100" r="80" fill="green"/>`;
      let madeCircle = new Circle("svg","white", "green");
      expect(madeCircle.render()).toMatch(exampleCircle);
    });
  });
});

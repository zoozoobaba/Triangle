describe("triangle", function() {
  it("returns 'Equilateral Triangle' if all three sides are the same", function() {
    triangle(3,3,3).should.equal("Equilateral triangle");
  });
});

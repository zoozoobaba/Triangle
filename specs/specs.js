describe("triangle", function() {
  it("returns 'Equilateral triangle' if all three sides are the same", function() {
    triangle(3,3,3).should.equal("Equilateral triangle");
  });

  it("returns 'Not a triangle' if one side is greater than the other two sides combined", function() {
    triangle(2,2,9).should.equal('Not a triangle');
  });
});

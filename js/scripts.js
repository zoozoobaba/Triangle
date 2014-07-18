var triangle = function(side1, side2, side3) {
  if (side1 === side2 && side1 === side3) {
    return "Equilateral triangle";
  } else if (side1 >= (side2 + side3) || side2 >= (side1 + side3) || side3 >= (side1 + side2)) {
    return "Not a triangle";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return "Isosceles triangle";
  } else {
    return "Scalene triangle";
  };
}; 



$(document).ready(function(){
  $("form#triangle-form").submit(function(event) {
    event.preventDefault();
    var side1 = $("#side1").val()
    var side2 = $("#side2").val()
    var side3 = $("#side3").val()
    $("#result").text(triangle(parseInt(side1), parseInt(side2), parseInt(side3)));
  });
});
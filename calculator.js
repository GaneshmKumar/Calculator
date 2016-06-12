$(document).ready(function() {

  $("#display").click(function() {
    $("#display").blur();
  });
  var expression = "";
$(".button").click(function() {
  var key = $(this).attr("value");
  if(key === "AC")
    {
      $("#display").val('');
      expression = "";
    }
  else if(key === "CE")
    {
      if(expression !== "")
        {
      expression = expression.slice(0,-1);
      $("#display").val(expression);
          }
    }
  else if(key === "=")
    {
      var result = eval(expression);
      $("#display").val(result);
      expression = "";
    }
  else
    {
      expression += key;

      $("#display").val(expression);

    }//end if key not equal

}); //end click

  });//end ready

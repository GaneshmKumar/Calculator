/*
* @Author: GaNeShKuMaRm
* @Date:   2017-05-14 19:01:19
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-05-14 19:01:35
*/

'use strict';
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
    //alert(expression);
    }//end if key not equal

}); //end click

  });//end ready
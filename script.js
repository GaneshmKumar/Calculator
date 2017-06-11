/*
* @Author: GaNeShKuMaRm
* @Date:   2017-05-14 19:01:19
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-05-14 19:01:35
*/

'use strict';
$(document).ready(function() {
  var expression = "";
  $(".buttons div").on('click', function() {
    var key = $(this).text();
    if(key == 'AC')
    {
      $('input').val("");
      expression = "";
    }
    else if(key == 'CE')
    {
      if(expression.length == 1)
        expression = "";
      else
        expression = expression.slice(0, expression.length - 1);
      $('input').val(expression);
    }
    else if(key == '=')
    { 
      var result = eval(expression);
      $('input').val(result);
      expression = result.toString();
    }
    else
    {
      if($(this).attr('id') == 'mul')
        expression += '*'
      else if($(this).attr('id') == 'div')
        expression += '/';
      else
        expression += key;
      $('input').val(expression);
    }
  });
});
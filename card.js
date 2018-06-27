$('#myButton').click(function() {
    $('#myDiv').toggle('slow', function() {
      // Animation complete.
    });
  });

function ShowDiv() {
    document.getElementById("myDiv").style.display = "";
}
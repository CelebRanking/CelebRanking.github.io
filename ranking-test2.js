$(document).ready(function() {
  $.getJSON("data.json", function(data) {
    $.each(data, function(index, value) {
      $("#myTable tbody").append("<tr><td>" + value.name + "</td><td>" + value.ratingFace + "</td><td>" + value.ratingTits + "</td><td>" + value.ratingAss + "</td><td>" + value.ratingOverall + "</td></tr>");
    });

    $('#myTable').DataTable();
  });
});

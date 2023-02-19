$(document).ready(function() {
  // Load JSON data
  $.getJSON('ratings.json', function(data) {
    // Populate table with data
    $('#myTable').DataTable({
      data: data,
      columns: [
        { data: 'name' },
        { data: 'ratingFace' },
        { data: 'ratingTits' },
        { data: 'ratingAss' },
        { data: 'ratingOverall' }
      ]
    });

    // Highlight the highest value in each column
    $('table tr').each(function() {
      $(this).find('td').not(':first-child').each(function(index) {
        var columnData = [];
        $('table tr td:nth-child(' + (index + 2) + ')').each(function() {
          columnData.push(parseFloat($(this).text()));
        });
        var max = Math.max.apply(null, columnData);
        if (parseFloat($(this).text()) == max) {
          $(this).addClass('highlight');
        }
      });
    });
  });
});

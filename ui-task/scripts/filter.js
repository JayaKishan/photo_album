$(document).ready(function(){
  var carCounts = $("img").length;
  $('.carCount').text(carCounts);
  $("#filter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".column").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
    var carCount = $('div.column').filter(function() {
        return $(this).css('display') !== 'none';
    }).length;

    $('.carCount').text(carCount);
  });
});

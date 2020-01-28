$(document).on('mouseenter', '.column', function () {
    if ($(this).parent().attr('id') == 'dvDest') {
      $(this).children('button').removeClass('addBtn').addClass('delBtn').text('-');
      $(this).children('button').css("background-color", "red");
      $(this).find(":button").show();
    }else if ($(this).parent().attr('id') == 'selectImg') {
      $(this).children('button').removeClass('delBtn').addClass('addBtn').text('+');
      $(this).children('button').css("background-color", "#4CAF50");
      $(this).find(":button").show();
    }
    else {
      $(this).find(":button").show();
    }
}).on('mouseleave', '.column', function () {
    $(this).find(":button").hide();
});

$(document).on('click', '.addBtn', function() {
	console.log('button clicked');
  var img = $(this).parent('.column')[0];
	$('div.selectedImages #dvDest').append(img);
	var contentDiv = $('div.selectedImages .dvDest');
});

$(document).on('click', '.delBtn', function() {
  var imgAttr = $(this).siblings('img').attr('alt');
  var reAddImg = $(this).parent('.column')[0];
  $('div#'+imgAttr+ ' div.row').append(reAddImg);
  console.log($('div#'+imgAttr+ 'div.row'));
});

$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");
	$.getJSON('data.json', function(data) {
		var output = '<ul class="searchresults">';
		$.each(data, function(key, val) {
			if ((val.name.search(myExp) != -1) ||
			(val.meta.search(myExp) != -1)) {
				output += '<li>';
				output += '<h2>' + val.name + '</h2>';
				output += '<a href="data.json"><img src="images/' + val.image + '.jpg" alt="' + val.name + '"/></a>'
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	});
});



//$('.searchresults').find('a').on('click', function(e){
//	e.preventDefault();
//	$('#update').getJSON('data.json', function(data) {
//		var output = '<ul class="searchresults">';
//		output += '<p>' + val.meta + '</p>';
//	}
//});
$('a').click(function(event) {
	event.preventDefault();
	$( "<div>" )
    .append( "default " + event.type + " prevented" )
});

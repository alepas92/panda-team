//неточність введення з сторінки
function readForecastOutlays(){
	var category = $( '#manage-forecast select.sel-cat' ).val();
	var cost = $('#manage-forecast .inp-cos').val();
	data.setForecast(category, cost, 'month', 'outlays' );
}

$('#manage-forecast .btn-submit').click(function() {	
	alert('click');
	readForecastOutlays();
});

function removeForecastOutlays(){
	var category = $( '' ).val();
	var cost = $('').val();
	data.setForecast(category, cost, 'month', 'outlays' );
}

$('').click(function() {	
	alert('click');
	removeForecastOutlays();
});

function changeForecastOutlays(){
	var category = $( '' ).val();
	var cost = $('').val();
	data.setForecast(category, cost, 'month', 'outlays' );
}

$('').click(function() {	
	alert('click');
	removeForecastOutlays();
});
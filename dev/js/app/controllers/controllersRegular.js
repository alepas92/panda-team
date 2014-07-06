function readRegularOutlays(){
	var category = $( '#regular-outlay .sel-cat' ).val(),
		cost = $('#regular-outlay .inp-cos').val();
		//time = $('#regular-outlay .inp-dat').val();
	dataRegular.setRegular(category, cost, 'day', 'outlays' );
}

$('#regular-outlay .btn-submit').click(function() {	
	
	readRegularOutlays();
});
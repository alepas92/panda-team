

$('#regular-outlays .btn-submit').click(function() {	
	
	var category = $( '#regular-outlays .sel-cat' ).val(),
	//time = $('#regular-outlay .inp-dat').val();
		
		cost = $('#regular-outlays .inp-cos').val();
		if(!category){
			appearInfoBlock('Select a categoty please');
		}else
		if(!isNonNegative(cost)){
			appearInfoBlock('Invalid cost value');
		}
		else{
			dataRegular.setRegular(category, cost, 'month', 'outlays' );
			appearInfoBlock();
			$( '#regular-outlays .sel-cat' ).val('');
			$('#regular-outlays .inp-cos').val('');
		}

});


$('#regular-incomes .btn-submit').click(function() {	
	
	var category = $( '#regular-incomes .sel-cat' ).val(),
		cost = $('#regular-incomes .inp-cos').val();
		//time = $('#regular-outlay .inp-dat').val();
		if(!category){
			appearInfoBlock('Select a categoty please');
		}else
		if(!isNonNegative(cost)){
			appearInfoBlock('Invalid cost value');
		}
		else{
			dataRegular.setRegular(category, cost, 'month', 'incomes' );
			appearInfoBlock();
			$( '#regular-incomes .sel-cat' ).val('');
			$('#regular-incomes .inp-cos').val('');
		}

});


$('#manage-forecast .sel-cat').change(function() {
	if($(this).val()!=''){
		
		$(this).siblings('.sel-cat').prop('disabled', true);
		
	}
	else{
		
		$(this).siblings('.sel-cat').prop('disabled', false);
		
	}
	
});
$('#manage-forecast .sel-cat').click(function() {
	if($(this).attr('disabled')!== undefined)
		appearInfoBlock('You can choose either incomes or outlays category');

});


$('#manage-forecast .btn-submit').click(function(){
	var cost = $('#manage-forecast .inp-cos').val();
	if(!isNonNegative(cost)) {
		appearInfoBlock('Invalid cost value');
	}
	else if($("#manage-forecast .sel-cat[list='outlaysCategoriesDatalist']").val()){
		console.log('outl');
		var cat=$("#manage-forecast .sel-cat[list='outlaysCategoriesDatalist']").val();
		dataForecast.setForecast(cat,cost,'month','outlays');
		appearInfoBlock();
		$("#manage-forecast .sel-cat[list='outlaysCategoriesDatalist']").val('');
		$('#manage-forecast .inp-cos').val('');
	}
	else if($("#manage-forecast .sel-cat[list='incomesCategoriesDatalist']").val()){		
		console.log('incm');
		var cat=$("#manage-forecast .sel-cat[list='incomesCategoriesDatalist']").val();

		dataForecast.setForecast(cat,cost,'month','incomes');
		appearInfoBlock();
		$("#manage-forecast .sel-cat[list='incomesCategoriesDatalist']").val('');
		$('#manage-forecast .inp-cos').val('');
	}	
	else{
		appearInfoBlock('Select a category please');
	}
	

});
//неточність введення з сторінки
/*function readForecastOutlays(){
	var category = $( '#manage-forecast select.sel-cat' ).val();
	var cost = $('#manage-forecast .inp-cos').val();
	data.setForecast(category, cost, 'month', 'outlays' );
}

$('#manage-forecast .btn-submit').click(function() {	
	
	readForecastOutlays();
	
});

function removeForecastOutlays(){
	var category = $( '' ).val();
	var cost = $('').val();
	data.setForecast(category, cost, 'month', 'outlays' );
}

$('').click(function() {	
	
	removeForecastOutlays();
});

function changeForecastOutlays(){
	var category = $( '' ).val();
	var cost = $('').val();
	data.setForecast(category, cost, 'month', 'outlays' );
}

$('').click(function() {	
	
	removeForecastOutlays();
});*/
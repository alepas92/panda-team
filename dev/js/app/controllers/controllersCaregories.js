//Daily Categories outlays/income

//Daily Outlays
$('#new-outlay .btn-add').click(function() {	
	var category = $( '#new-outlay .inp-cat' ).val();
	
	if(dataCategories.setCategory(category, 'outlays' )){
		optionPainting('outlays', category);
		appearInfoBlock();
	}
	else{
		appearInfoBlock('Category already exists');
	}
	$('#new-outlay .inp-cat').val('');
	
});
//Daily Incomes
$('#new-income .btn-add').click(function() {	
	var category = $( '#new-income .inp-cat' ).val();
	
	if (dataCategories.setCategory(category, 'incomes' )){
		optionPainting('incomes', category);
		appearInfoBlock()
	}else{
		appearInfoBlock('Category already exists');
	}
	$( '#new-income .inp-cat' ).val('');
	
});




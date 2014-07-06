//Daily Categories outlays/income

//Daily Outlays
$('#new-outlay .btn-add').click(function() {	
	var category = $( '#new-outlay .inp-cat' ).val();
	
	if(dataCategories.setCategory(category, 'outlays' )){
		optionPainting('outlays', category);
	}
	
	$('#new-outlay .inp-cat').val('');
});
//Daily Incomes
$('#new-income .btn-add').click(function() {	
	var category = $( '#new-income .inp-cat' ).val();
	
	if (dataCategories.setCategory(category, 'incomes' )){
		optionPainting('incomes', category);
	}
	$( '#new-income .inp-cat' ).val('');
});

$("#new-income .inp-cat").keyup( function(e) {

    if ( e.keyCode !== 8) {

    }

    if ( e.keyCode !== 46 ) {

            

    }
    
});




function removeCategoryOutlays(){
	
	var category = $( '' ).val();
	dataCategories.setCategory(category, 'outlays' );
}

$('').click(function() {	
	
	removeCategoryOutlays();
});


function removeCategoryIncomes(){
	var category = $( '' ).val();
	dataCategories.setCategory(category, 'incomes' );
}

$('').click(function() {	
	
	removeCategoryIncomes();
});
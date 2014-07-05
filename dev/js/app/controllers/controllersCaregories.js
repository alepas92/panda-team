//Daily Categories outlays/income

function readCategoryOutlays(){
	var category = $( '#new-outlay .inp-cat' ).val();
	dataCategories.setCategory(category, 'outlays' );
}

$('#new-outlay .btn-add').click(function() {	
	
	readCategoryOutlays();
});


function readCategoryIncomes(){
	var category = $( '#new-income .inp-cat' ).val();
	dataCategories.setCategory(category, 'incomes' );
}

$('#new-income .btn-add').click(function() {	
	readCategoryIncomes();
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
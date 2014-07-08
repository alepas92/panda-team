//read Daily Outlays
$('#new-outlay .btn-submit').click(function() {	
	var category = $( '#new-outlay input.sel-cat' ).val(),
		cost = $('#new-outlay .inp-cos').val();
	if (!category){
		appearInfoBlock('Select a category please');
	} else if (!isNonNegative(cost)){
		appearInfoBlock('Invalid cost value');
	} else {
		dataDayly.setDaily(todayKeyWord, category, cost, 'outlays' );
		appearInfoBlock();
		$('#new-outlay input.sel-cat').val('');
		$('#new-outlay .inp-cos').val('');
	}
});


//read Daily Incomes
$('#new-income .btn-submit').click(function() {	
	var category = $( '#new-income input.sel-cat' ).val(),
		cost = $('#new-income .inp-cos').val();
	if (!category){
		appearInfoBlock('Select a category please');
	} else if (!isNonNegative(cost)){
		appearInfoBlock('Invalid cost value');
	} else  {
		dataDayly.setDaily(todayKeyWord, category, cost, 'incomes' );
		$( '#new-income input.sel-cat' ).val('');
		$('#new-income .inp-cos').val('');
		appearInfoBlock();
	}
});



//to do
/*function removeDailyOutlays(){
	var category = $( '' ).val(),
		cost = $('').val();
		if (category && cost) {
			dataDayly.setDaily(todayKeyWord, category, cost, 'outlays' );
		} else{
			console.log('you have some problem with data')
		};
	
}

$('').click(function() {	
	
	readDailyOutlays();
});

function removeDailyIncomes(){
	var category = $( '' ).val(),
		cost = $('').val();
	dataDayly.setDaily(todayKeyWord, category, cost, 'incomes' );
}

$('').click(function() {	
	
	readDailyIncomes();
});

function changeDailyOutlays(){
	var category = $( '' ).val(),
		cost = $('').val();
		if (category && cost) {
			dataDayly.setDaily(todayKeyWord, category, cost, 'outlays' );
		} else{
			console.log('you have some problem with data')
		};
	
}

$('').click(function() {	
	
	readDailyOutlays();
});

function changeDailyIncomes(){
	var category = $( '' ).val(),
		cost = $('').val();
	dataDayly.setDaily(todayKeyWord, category, cost, 'incomes' );
}

$('').click(function() {	
	
	readDailyIncomes();
});*/
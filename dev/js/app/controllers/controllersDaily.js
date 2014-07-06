//read Daily Outlays
$('#new-outlay .btn-submit').click(function() {	
	var category = $( '#new-outlay input.sel-cat' ).val(),
		cost = $('#new-outlay .inp-cos').val();
	if (category && cost) {
		dataDayly.setDaily(todayKeyWord, category, cost, 'outlays' );
	} else{
		console.log('you have some problem with data')
	};
	$('#new-outlay input.sel-cat').val('');
	$('#new-outlay .inp-cos').val('');
});


//read Daily Incomes
$('#new-income .btn-submit').click(function() {	
	var category = $( '#new-income input.sel-cat' ).val(),
		cost = $('#new-income .inp-cos').val();
	if (category && cost) {
		dataDayly.setDaily(todayKeyWord, category, cost, 'incomes' );
	} else{
		console.log('you have some problem with data')
	};
	$( '#new-income input.sel-cat' ).val('');
	$('#new-income .inp-cos').val('');
});




function removeDailyOutlays(){
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
});
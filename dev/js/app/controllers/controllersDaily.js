function readDailyOutlays(){
	var category = $( '#new-outlay input.sel-cat' ).val(),
		cost = $('#new-outlay .inp-cos').val();
		if (category && cost) {
			dataDaily.setDaily(todayKeyWord, category, cost, 'outlays' );
		} else{
			console.log('you have some problem with data')
		};
	
}

$('#new-outlay .btn-submit').click(function() {	
	
	readDailyOutlays();
});

function readDailyIncomes(){
	var category = $( '#new-income input.sel-cat' ).val(),
		cost = $('#new-income .inp-cos').val();
	dataDaily.setDaily(todayKeyWord, category, cost, 'incomes' );
}

$('#new-income .btn-submit').click(function() {	
	
	readDailyIncomes();
});


function removeDailyOutlays(){
	var category = $( '' ).val(),
		cost = $('').val();
		if (category && cost) {
			dataDaily.setDaily(todayKeyWord, category, cost, 'outlays' );
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
	dataDaily.setDaily(todayKeyWord, category, cost, 'incomes' );
}

$('').click(function() {	
	
	readDailyIncomes();
});

function changeDailyOutlays(){
	var category = $( '' ).val(),
		cost = $('').val();
		if (category && cost) {
			dataDaily.setDaily(todayKeyWord, category, cost, 'outlays' );
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
	dataDaily.setDaily(todayKeyWord, category, cost, 'incomes' );
}

$('').click(function() {	
	
	readDailyIncomes();
});
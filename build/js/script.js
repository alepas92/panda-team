
//New Outlay/Income    Daily
/*function readDailyOutlays(){
	var category = $( '#new-outlay input.sel-cat' ).val(),
		cost = $('#new-outlay .inp-cos').val();
		if (category && cost) {
			data.setDaily(todayKeyWord, category, cost, 'outlays' );
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
	data.setDaily(todayKeyWord, category, cost, 'incomes' );
}

$('#new-income .btn-submit').click(function() {	
	
	readDailyIncomes();
});


//Daily Categories outlays/income

function readCategoryOutlays(){
	var category = $( '#new-outlay .inp-cat' ).val();
	data.setCategory(category, 'outlays' );
}

$('#new-outlay .btn-add').click(function() {	
	
	readCategoryOutlays();
});



function readCategoryIncomes(){
	var category = $( '#new-income .inp-cat' ).val();
	data.setCategory(category, 'incomes' );
}

$('#new-income .btn-add').click(function() {	
	alert('click');
	readCategoryIncomes();
});


//Regular day,Outlay
/*	var category = $( '#regular-outlay select.sel-cat' ).val(),
		cost = $('#regular-outlay .inp-cos').val();
		//time = $('#regular-outlay .inp-dat').val();
	//data.setRegular(category, cost, 'day', 'outlays' );
}

$('#regular-outlay .btn-submit').click(function() {	
	alert('click');
	readRegularOutlays();
});



//Manage forecast(month, outlays)
function readForecastOutlays(){
	var category = $( '#manage-forecast select.sel-cat' ).val();
	var cost = $('#manage-forecast .inp-cos').val();
	data.setForecast(category, cost, 'month', 'outlays' );
}

$('#manage-forecast .btn-submit').click(function() {	
	alert('click');
	readForecastOutlays();
});





*/














//Regular Income


//Manage balance
//Statistics
;//Daily Categories outlays/income

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
});;function readDailyOutlays(){
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
});;//неточність введення з сторінки
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
});;function readRegularOutlays(){
	var category = $( '#regular-outlay .sel-cat' ).val(),
		cost = $('#regular-outlay .inp-cos').val();
		//time = $('#regular-outlay .inp-dat').val();
	dataRegular.setRegular(category, cost, 'day', 'outlays' );
}

$('#regular-outlay .btn-submit').click(function() {	
	alert('click');
	readRegularOutlays();
});;;function LS () {}

LS.get = function (keyWord) {
	if (localStorage[name] !== null) {
		return JSON.parse(localStorage[keyWord]);
	}

	return false;
}

LS.set = function (keyWord, value) {
	if (!keyWord||!value) {
		return false;
	} else if (typeof value === 'object') {
		localStorage[keyWord] = JSON.stringify(value);
	} else {
		localStorage[keyWord] = value;
	}
}

LS.deleteItem = function (keyword) {
	localStorage.removeItem(keyword);
}

LS.getMonthStatistic = function () {
	localStorage['month_' + date.month];
}

LS.clear = function(){
	localStorage.clear();
};function DataCategories () {
	this.categories = {};
}

DataCategories.prototype.getCategories = function () {
	if (!localStorage.categories) {
		var defaultCategories = {
			'outlays' : ['hobbies', 'eating', 'transport'], 
			'incomes' : ['salary']
		};

		LS.set('categories', defaultCategories);
		this.categories = LS.get('categories');
	} else {
		this.categories = LS.get('categories');
	}
};

// set category outlays and incomes 
DataCategories.prototype.setCategory = function(category, type){
	var setCat = LS.get('categories');
	if (setCat[type].indexOf(category) == (-1)) {
		setCat[type].push(category);

		LS.set('categories', setCat)
	} else{
		return false
	}; 
	this.categories = LS.get('categories');
}

// remove category outlays and incomes
DataCategories.prototype.removeCategory = function(category, type){
	var removeCat = LS.get('categories');
	var ind = -1;
	removeCat[type].forEach(function(value, index, ar){
		if (value == category) {
			ind = index;
			console.log(ind)
		} 
	})
	if (ind >= 0) {
		removeCat[type].splice(ind, 1);

		LS.set('categories', removeCat)
	} else {
		return false
	}		
	this.categories = LS.get('categories');
}

// category - назва категорії - передається в вигляді строки, наприклад - "транспорт"
// type - тип - витрати аюо доходи - 'outlays' or 'incomes'

var dataCategories = new DataCategories();
dataCategories.getCategories();
dataCategories.setCategory('car', 'incomes');
dataCategories.setCategory('car', 'outlays');
// dataCategories.removeCategory('transport', 'outlays');
console.log('dataCategories  -  ' + dataCategories);var date = getDate();
var todayKeyWord = 'day' + date.day + '_' + date.month + '_' + date.year;

function DataDaily () {
	this[todayKeyWord] = {};
	this[todayKeyWord + '_statistic'] = {};
	this[todayKeyWord + '_plan']
}

DataDaily.prototype.getDaily = function () {
	if (!localStorage[todayKeyWord]){
		var defaultDayly = {
			'outlays' : {},
			'incomes' : {}
		};

		LS.set(todayKeyWord, defaultDayly);
		this[todayKeyWord] = LS.get(todayKeyWord);
	} else {
		this[todayKeyWord] = LS.get(todayKeyWord);
	}
};

DataDaily.prototype.getDailyStatistic = function () {
	var keyWord = todayKeyWord + '_statistic';
	if (!localStorage[keyWord]){
		var defaultDaylyStatistic = {
			'outlays' : {},
			'incomes' : {}
		};

		LS.set(keyWord, defaultDaylyStatistic);
		this[keyWord] = LS.get(keyWord);
	} else {
		this[keyWord] = LS.get(keyWord);
	}
};

DataDaily.prototype.getDailyPlan = function () {
	var keyWord = todayKeyWord + '_plan';
	if (!localStorage[keyWord]){
		var defaultDaylyPlan = {
			'outlays' : {},
			'incomes' : {}
		};

		LS.set(keyWord, defaultDaylyPlan);
		this[keyWord] = LS.get(keyWord);
	} else {
		this[keyWord] = LS.get(keyWord);
	}
};

// set dayly outlays and incomes
DataDaily.prototype.setDaily = function(keyWord, category, cost, type) {
	var defDayly = LS.get(keyWord),
		count = 0,
		keyWordL = '';

	if (type == "outlays") {
		keyWordL = 'out';
	} else if (type == "incomes") {
		keyWordL = 'inc';
	};

	for (key in defDayly[type]) {
		count++;
	}

	var setDaylyObj = {};
	setDaylyObj['cat'] = category;
	setDaylyObj['cost'] = cost;
	defDayly[type]['' + keyWordL + count + '_' + Math.floor((Math.random() * 100) + 1)] = setDaylyObj;

	LS.set(keyWord, defDayly);
	this[keyWord] = LS.get(keyWord);
}

// remove dayly outlays and incomes
DataDaily.prototype.removeDaily = function(keyWord, category, cost, type) {
	var removeDay = LS.get(keyWord),
		ind;

	for (key in removeDay[type]) {
		if (removeDay[type][key]['cat'] == category && removeDay[type][key]['cost'] == cost) {
			ind = key;
		}
	}
		
	if (ind) {
		delete removeDay[type][ind]
	} else {
		console.log('in your data are some mistake'); // only for debugging
	}

	LS.set(keyWord, removeDay);
	this[keyWord] = LS.get(keyWord);
}


DataDaily.prototype.changeDaily = function(keyWord, category, cost, type, id) {
	var changeDay = LS.get(keyWord);
	var buffObj = {};

	buffObj['cat'] = category;
	buffObj['cost'] = cost;

	if (id in changeDay[type]) {
		changeDay[type][id] = buffObj;
	} else {
		console.log('in your data are some mistake')
	}

	LS.set(keyWord, changeDay);
	this[keyWord] = LS.get(keyWord);
}	


// set dayly Statistick outlays and incomes
DataDaily.prototype.setDailyStat = function(keyWord, category, cost, type) {
	var keyWordStat = keyWord + '_statistic';
	var defDaylyStat = LS.get(keyWordStat),
		count = 0,
		keyWordL = '';

	if (type == "outlays") {
		keyWordL = 'out';
	} else if (type == "incomes") {
		keyWordL = 'inc';
	};

	for (key in defDaylyStat[type]) {
		count++;
	}

	var setDaylyStatObj = {};
	setDaylyStatObj['cat'] = category;
	setDaylyStatObj['cost'] = cost;
	defDaylyStat[type]['' + keyWordL + count + '_' + Math.floor((Math.random() * 100) + 1)] = setDaylyStatObj;

	LS.set(keyWordStat, defDaylyStat);
	this[keyWordStat] = LS.get(keyWordStat);
}

// remove Dayly Statistic
DataDaily.prototype.removeDailyStat = function(keyWord, category, cost, type) {
	var keyW = keyWord + '_statistic';
	var removeDayStat = LS.get(keyW),
		ind;

	for (key in removeDayStat[type]) {
		if (removeDayStat[type][key]['cat'] == category && removeDayStat[type][key]['cost'] == cost) {
			ind = key;
		}
	}
		
	if (ind) {
		delete removeDayStat[type][ind]
	} else {
		console.log('in your data are some mistake'); // only for debugging
	}

	LS.set(keyW, removeDayStat);
	this[keyW] = LS.get(keyW);
}

DataDaily.prototype.changeDailyStat = function(keyWord, category, cost, type, id) {
	var keyW = keyWord + '_statistic';
	var changeDayStat = LS.get(keyW);

	var buffObj = {};
	buffObj['cat'] = category;
	buffObj['cost'] = cost;

	if (id in changeDayStat[type]) {
		changeDayStat[type][id] = buffObj;
	} else{
		console.log('in your data are some mistake')
	};


	LS.set(keyW, changeDayStat);
	this[keyW] = LS.get(keyW);
}



// set daylyPlan outlays and incomes
DataDaily.prototype.setDailyPlan = function(keyWord, category, cost, type) {
	var keyWordPlan = keyWord + '_plan'
	var defDaylyPlan = LS.get(keyWordPlan),
		count = 0,
		keyWordL = '';

	if (type == "outlays") {
		keyWordL = 'out';
	} else if (type == "incomes") {
		keyWordL = 'inc';
	};

	for (key in defDaylyPlan[type]) {
		count++;
	}

	var setDaylyPlanObj = {};
	setDaylyPlanObj['cat'] = category;
	setDaylyPlanObj['cost'] = cost;
	defDaylyPlan[type]['' + keyWordL + count + '_' + Math.floor((Math.random() * 100) + 1)] = setDaylyPlanObj;

	LS.set(keyWordPlan, defDaylyPlan);
	this[keyWordPlan] = LS.get(keyWordPlan);
}

// remove daylyPlan outlays and incomes
DataDaily.prototype.removeDailyPlan = function(keyWord, category, cost, type) {
	var keyWordPlan = keyWord + '_plan'
	var removeDaylyPlan = LS.get(keyWordPlan),
		ind;

	for (key in removeDaylyPlan[type]) {
		if (removeDaylyPlan[type][key]['cat'] == category && removeDaylyPlan[type][key]['cost'] == cost) {
			ind = key;
		}
	}
		
	if (ind) {
		delete removeDaylyPlan[type][ind]
	} else {
		console.log('in your data are some mistake'); // only for debugging
	}

	LS.set(keyWordPlan, removeDaylyPlan);
	this[keyWordPlan] = LS.get(keyWordPlan);
}


DataDaily.prototype.changeDailyPlan = function(keyWord, category, cost, type, id) {
	var keyW = keyWord + '_plan';
	var changeDayPlan = LS.get(keyW);

	var buffObj = {};
	buffObj['cat'] = category;
	buffObj['cost'] = cost;

	if (id in changeDayPlan[type]) {
		changeDayPlan[type][id] = buffObj;
	} else
		console.log('in your data are some mistake');


	LS.set(keyW, changeDayPlan);
	this[keyW] = LS.get(keyW);
}


var dataDaily = new DataDaily();
dataDaily.getDailyStatistic();
dataDaily.getDaily();
dataDaily.getDailyPlan();

console.log('dataDaily  -  ' + dataDaily);





// dataDayly.setDaily(todayKeyWord, 'habar1', '160', 'incomes');
// dataDayly.setDaily(todayKeyWord, 'habar11', '260', 'incomes');
// dataDayly.setDaily(todayKeyWord, 'habar12', '360', 'incomes');
// dataDayly.setDaily(todayKeyWord, 'habar13', '432', 'outlays');
// dataDayly.setDaily(todayKeyWord, 'habar14', '544', 'outlays');
// dataDayly.removeDaily(todayKeyWord, 'habar1', '160', 'incomes');
// dataDayly.removeDaily(todayKeyWord, 'habar14', '544', 'outlays');

// dataDayly.setDailyStat(todayKeyWord, 'habar2', '350', 'outlays');
// dataDayly.setDailyStat(todayKeyWord, 'habar21', '350', 'outlays');
// dataDayly.setDailyStat(todayKeyWord, 'habar22', '350', 'outlays');
// dataDayly.setDailyStat(todayKeyWord, 'habar33', '350', 'incomes');
// dataDayly.setDailyStat(todayKeyWord, 'habar24', '350', 'incomes');
// dataDayly.removeDailyStat(todayKeyWord, 'habar33', '350', 'incomes');
// dataDayly.removeDailyStat(todayKeyWord, 'habar21', '350', 'outlays');

// dataDayly.setDailyPlan(todayKeyWord, 'pivo1', '350', 'outlays');
// dataDayly.setDailyPlan(todayKeyWord, 'pivo2', '350', 'outlays');
// dataDayly.setDailyPlan(todayKeyWord, 'pivo3', '350', 'outlays');
// dataDayly.setDailyPlan(todayKeyWord, 'pivo4', '350', 'incomes');
// // dataDayly.setDailyPlan(todayKeyWord, 'pivo5', '350', 'incomes');
dataDaily.removeDailyPlan(todayKeyWord, 'pivo2', '350', 'outlays');
dataDaily.removeDailyPlan(todayKeyWord, 'pivo5', '350', 'incomes');



//Date
function getDate() {
	var d = new Date(),
		date = {};


	date.day = d.getDate(),
	date.month = d.getMonth()+1,
	date.year = d.getFullYear();
	
	if (date.day < 10) {
		date.day = '0' + date.day;
	}

	if (date.month < 10) {
		date.month = '0' + date.month;
	}


	return date;
};function DataForecast () {
	this.forecast = {};
}

DataForecast.prototype.getForecast = function () {
	if (!localStorage.forecast) {
		var defaultForecast = {
			'month' : {
				'outlays' : {},
				'incomes' : {}
			},

			'year' : {
				'outlays' : {},
				'incomes' : {}
			}
		};

		LS.set('forecast', defaultForecast);
		this.forecast = LS.get('forecast');
	} else {
		this.forecast = LS.get('forecast');
	}
};

// set forecast
DataForecast.prototype.setForecast = function(category, cost, time, type) {
	var setFor = LS.get('forecast'), 
		count = 0,
		keyWordL = '';

	if (type == "outlays") {
		keyWordL = 'out';
	} else if (type == "incomes") {
		keyWordL = 'inc';
	};

	for (key in setFor[time][type]) {
		count++;
	}

	var setForObj = {};
	setForObj['cat'] = category;
	setForObj['cost'] = cost;
	setFor[time][type]['' + keyWordL + count + '_' + Math.floor((Math.random() * 100) + 1)] = setForObj;

	LS.set('forecast', setFor);
	this.forecast = LS.get('forecast');
}

// remove forecast outlays and incomes
DataForecast.prototype.removeForecast = function(category, cost, time, type) {
	var removeFor = LS.get('forecast'),
		ind;

	for (key in removeFor[time][type]) {
		if (removeFor[time][type][key]['cat'] == category && removeFor[time][type][key]['cost'] == cost) {
			ind = key;
		}
	}
		
	if (ind) {
		delete removeFor[time][type][ind]
	} else {
		console.log('in your data are some mistake'); // only for debugging
	}

	LS.set('forecast', removeFor);
	this.forecast = LS.get('forecast');
}


DataForecast.prototype.changeForecast = function(category, cost, time, type, id) {
	var changeFor = LS.get('forecast');
	
	var buffObj = {};
	buffObj['cat'] = category;
	buffObj['cost'] = cost;

	if (id in changeFor[time][type]) {
		changeFor[time][type][id] = buffObj
	} else {
		console.log('in your data are some mistake'); // only for debugging
	};

	LS.set('forecast', removeFor);
	this.forecast = LS.get('forecast');
}


var dataForecast = new DataForecast();
dataForecast.getForecast();

console.log('dataForecast  -  ' + dataForecast);

// dataForecast.setForecast('baby', 500, 'month', 'incomes');
// dataForecast.setForecast('baby1', 1500, 'year', 'incomes');
// dataForecast.setForecast('baby2', 2500, 'year', 'incomes');
// dataForecast.setForecast('baby3', 3500, 'month', 'outlays');
// dataForecast.setForecast('baby4', 4500, 'month', 'outlays');
// dataForecast.setForecast('baby5', 5500, 'year', 'outlays');

// dataForecast.removeForecast('baby3', 3500, 'month', 'outlays');
// dataForecast.removeForecast('baby', 500, 'month', 'incomes');
// dataForecast.removeForecast('baby2', 2500, 'year', 'incomes');

;function DataRegular () {
	this.regular = {};
}

DataRegular.prototype.getRegular = function () {
	if (!localStorage.regular) {
		var defaultRegular = {
			'day' : {
				'outlays' : {
					'out0_12' : {
						'cat' : 'transport',
						'cost' : 500
					}
				},
				'incomes' : {}
			},

			'month' : {
				'outlays' : {},
				'incomes' : {
					'inc0_45' : {
						'cat' : 'salary',
						'cost' : 1000
					}
				}
			},

			'year' : {
				'outlays' : {},
				'incomes' : {}
			}
		};

		LS.set('regular', defaultRegular);
		this.regular = LS.get('regular');
	} else {
		this.regular = LS.get('regular');
	}
};

// set regulars outlays and incomes
DataRegular.prototype.setRegular = function(category, cost, time, type) {
	var setReg = LS.get('regular'), 
		count = 0,
		keyWordL = '';

	if (type == "outlays") {
		keyWordL = 'out';
	} else if (type == "incomes") {
		keyWordL = 'inc';
	};

	for (key in setReg[time][type]) {
		count++;
	}

	var setRegObj = {};
	setRegObj['cat'] = category;
	setRegObj['cost'] = cost;
	setReg[time][type]['' + keyWordL + count + '_' + Math.floor((Math.random() * 100) + 1)] = setRegObj;

	LS.set('regular', setReg);
	this.regular = LS.get('regular');
	}
// remove regulars outlays and incomes
DataRegular.prototype.removeRegular = function(category, cost, time, type) {
	var removeReg = LS.get('regular'),
		ind;

	for (key in removeReg[time][type]) {
		if (removeReg[time][type][key]['cat'] == category && removeReg[time][type][key]['cost'] == cost) {
			ind = key;
		}
	}
		
	if (ind) {
		delete removeReg[time][type][ind]
	} else {
		console.log('in your data are some mistake'); // only for debugging
	}

	LS.set('regular', removeReg);
	this.regular = LS.get('regular');
}

DataRegular.prototype.changeRegular = function(category, cost, time, type, id) {
	var changeReg = LS.get('regular');

	var bufObj = {};
	bufObj['cat'] = category;
	bufObj['cost'] = cost;

	if (id in changeReg[time][type]) {
		changeReg[time][type][id] = bufObj;
		LS.set('regular', removeReg);
		this.regular = LS.get('regular');
	} else {
		console.log('some arguments in function are invalid')
	};
	
	LS.set('regular', removeReg);
	this.regular = LS.get('regular');
}


var dataRegular = new DataRegular();
dataRegular.getRegular();

console.log('dataRegular  -  ' + dataRegular);

// dataRegular.setRegular('guns', 500, 'month', 'incomes');
// dataRegular.setRegular('guns', 600, 'month', 'outlays');
// dataRegular.setRegular('guns1', 800, 'year', 'outlays');
// dataRegular.setRegular('guns2', 700, 'year', 'outlays');
// dataRegular.setRegular('guns3', 600, 'year', 'outlays');
// dataRegular.setRegular('guns4', 500, 'year', 'outlays');

// dataRegular.removeRegular('guns', 500, 'month', 'incomes');
;function DataTotalStat () {
	this.totalStatistic = {};
}

DataTotalStat.prototype.getTotalStatistic = function () {
	if (!localStorage.totalStatistic){
		var defaultTotalStatistic = {
			'currentBalance' : 0,
			'currentOutlays' : 0,
			'currentIncomes' : 0
		};

		defaultTotalStatistic['month_' + date.month + '_' + date.year] = {
			'outlays' : {},
			'incomes' : {}
		};

		defaultTotalStatistic['year_' + date.year] = {
			'outlays' : {},
			'incomes' : {}
		};

		LS.set('totalStatistic', defaultTotalStatistic);
		this.totalStatistic = LS.get('totalStatistic');
	} else {
		this.totalStatistic = LS.get('totalStatistic');
	}
};

// set total statistic
	
DataTotalStat.prototype.setTotalCurrentStat = function(type, cost) {
	var CurrentT = LS.get('totalStatistic');
	var buffType = '';
	if (type == 'balance') {
		buffType = 'currentBalance';
	} else if (type == 'outlays') {
		buffType = 'currentOutlays';
	} else if (type == 'incomes') {
		buffType = 'currentIncomes'
	}
	CurrentT[buffType] = cost;

	LS.set('totalStatistic', CurrentT);
	this.totalStatistic =  LS.get('totalStatistic');
} 
// type - balance, outlays or incomes
// cost - варітсть в грошовоу еквіваленті
// для setTotalCurrentStat не має смислу писати метод видалення - ці значення можна просто перезаписати

// month and year ststistic
DataTotalStat.prototype.setTotalTimeStat = function(category, cost, time, numberMonth, numberYear, type) {
	var totalTime = LS.get('totalStatistic'),
		buffObj = {},
		count = 0,
		keyWordL = '',
		numbMonth = numberMonth;
		numbYear = numberYear;

	buffObj['cat'] = category;
	buffObj['cost'] = cost;	

	if (numberMonth < 10) {
		numbMonth = '0' + numberMonth;
	};
	if (type == "outlays") {
		keyWordL = 'out';
	} else if (type == "incomes") {
		keyWordL = 'inc';
	};

	if (totalTime[time + '_' + numbMonth + '_' + numbYear]) {
		for (key in totalTime[time + '_' + numbMonth + '_' + numbYear][type]) {
			count++;
		}
		console.log('this month is')
	} else {
		if (time == 'month') {
			totalTime['month_' + numbMonth + '_' + numbYear] = {
				'outlays' : {},
				'incomes' : {}
			};
		};		
	}
	if (totalTime[time + '_' + numbYear]) {
		console.log('this year is')
		for (key in totalTime[time + '_' + numbYear][type]) {
			count++;
		}
	} else {
		if (time == 'year') {
			totalTime['year_' + numbYear] = {
				'outlays' : {},
				'incomes' : {}
			};
		};
	}

	if (time == "month") {
		totalTime[time + '_' + numbMonth + '_' + numbYear][type]['' + keyWordL + count + '_' + Math.floor((Math.random() * 100) + 1)] = buffObj;
	} else {
		totalTime[time + '_' + numbYear][type]['' + keyWordL + count + '_' + Math.floor((Math.random() * 100) + 1)] = buffObj;
	};
	
	console.log('totalTime  -   ' + totalTime)
	
	
	LS.set('totalStatistic', totalTime);
	this.totalStatistic = LS.get('totalStatistic');
}

DataTotalStat.prototype.remTotalTimeStat = function(category, cost, time, numberMonth, numberYear, type) {
	var removeFor = LS.get('totalStatistic'),
		ind,
		numbMonth = numberMonth;
		numbYear = numberYear;

	if (numbMonth < 10) {
		numbMonth = '0' + numberMonth;
	};

	if (removeFor[time + '_' + numbMonth + '_' + numbYear]) {
		for (key in removeFor[time + '_' + numbMonth + '_' + numbYear][type]) {
			if (removeFor[time + '_' + numbMonth + '_' + numbYear][type][key]['cat'] == category && removeFor[time + '_' + numbMonth + '_' + numbYear][type][key]['cost'] == cost) {
				ind = key;
			}
		}
		if (ind) {
			delete removeFor[time + '_' + numbMonth + '_' + numbYear][type][ind]
		} else {
			console.log('in your data are some mistake'); // only for debugging
		}
	} else {
		console.log('in your data are some mistake')
	}   

	if (removeFor[time + '_' + numbYear]) {
		for (key in removeFor[time + '_' + numbYear][type]) {
			if (removeFor[time + '_' + numbYear][type][key]['cat'] == category && removeFor[time + '_' + numbYear][type][key]['cost'] == cost) {
				ind = key;
			}
		}
			
		if (ind) {
			delete removeFor[time + '_' + numbYear][type][ind]
		} else {
			console.log('in your data are some mistake'); // only for debugging
		}
	} else {
		console.log('in your data are some mistake')
	}     

	LS.set('totalStatistic', removeFor);
	this.totalStatistic = LS.get('totalStatistic');            
}

DataTotalStat.prototype.changeTotalTimeStat = function(category, cost, time, numberMonth, numberYear, type, id) {
	var changeTotal = LS.get('totalStatistic'),
		ind,
		numbMonth = numberMonth;
		numbYear = numberYear;

	if (numbMonth < 10) {
		numbMonth = '0' + numberMonth;
	};
	var buffObj = {};
	buffObj['cat'] = category;
	buffObj['cost'] = cost;

	if (changeTotal[time + '_' + numbMonth + '_' + numbYear]) {
		if (id in changeTotal[time + '_' + numbMonth + '_' + numbYear][type]){
			changeTotal[time + '_' + numbMonth + '_' + numbYear][type][id] = buffObj;
		}
	}

	if (changeTotal[time + '_' + numbYear]) {
		if (id in changeTotal[time + '_' + numbYear][type]){
			changeTotal[time + '_' + numbYear][type][id] = buffObj;
		}
	}

	LS.set('totalStatistic', changeTotal);
	this.totalStatistic = LS.get('totalStatistic'); 
}


// numberTime - це номер місяця або року для якого записуються дані в статистику
// наприклад dataTotalStat.setTotalTimeStat('transport', 12, month, 6, 2014, 'outlays')
// створиться властивість з назвою - (time + '_' + numbMonth + '_' + numbYear) -> 'month_07_2014'

var dataTotalStat = new DataTotalStat();
dataTotalStat.getTotalStatistic();

console.log('dataTotalStat  -  ' + dataTotalStat);
// dataTotalStat.setTotalCurrentStat('balance', 2420.25);
// dataTotalStat.setTotalTimeStat('habar11', 1111, 'month', 7, 2014, 'incomes');
// dataTotalStat.setTotalTimeStat('car', 555555, 'year', '', 2015, 'outlays');
// dataTotalStat.remTotalTimeStat('habar11', 1111, 'month', 7, 2014, 'incomes');
;//
// Datalist painting painting
//
function datalistPainting (category) {
	var datalist = document.createElement("datalist");
		datalist.id = category + "CategoriesDatalist",
		categories = dataCategories.categories[category];

	for (var i = 0; i < categories.length; i++) {
		var option = document.createElement("option");
		option.value = categories[i];
		datalist.appendChild(option);
	}
	document.body.appendChild(datalist);
}

datalistPainting('outlays');
datalistPainting('incomes');;
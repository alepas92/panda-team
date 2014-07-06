function callendarDayClick() {
    var tableA = document.getElementsByTagName('tbody')[0];
    var tableLink = tableA.getElementsByTagName('span');
    for (var j = 0; j < tableLink.length; j++) {
        tableLink[j].classList.remove('myCssClass')
    };
    var k = this;
    console.log(k.firstChild.getAttribute('data-day'))
    k.firstChild.classList.add('myCssClass');
    paintIncOut(k.firstChild.getAttribute('data-day'));
}

function callendarMonthClick() {
    console.log(this.getAttribute('data-month-work'))
}

function callendarYearClick() {
    console.log(this.getAttribute('data-year-work'))
};
//New Outlay/Income    Daily
/*function readDailyOutlays(){
	var category = $( '#new-outlay select.sel-cat' ).val(),
		cost = $('#new-outlay .inp-cos').val();
	data.setDaily(todayKeyWord, category, cost, 'outlays' );
}

$('#new-outlay .btn-submit').click(function() {	
	
	readDailyOutlays();
});

function readDailyIncomes(){
	var category = $( '#new-income select.sel-cat' ).val(),
		cost = $('#new-income .inp-cos').val();
	data.setDaily(todayKeyWord, category, cost, 'incomes' );
}

$('#new-income .btn-submit').click(function() {	
	alert('click');
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

//Daily Outlays
$('#new-outlay .btn-add').click(function() {	
	var category = $( '#new-outlay .inp-cat' ).val();
	
	if(dataCategories.setCategory(category, 'outlays' )){
		optionPainting('outlays', category);
	}
	
	$('#new-outlay .inp-cat').val('');
	appearInfoBlock();
});
//Daily Incomes
$('#new-income .btn-add').click(function() {	
	var category = $( '#new-income .inp-cat' ).val();
	
	if (dataCategories.setCategory(category, 'incomes' )){
		optionPainting('incomes', category);
	}
	$( '#new-income .inp-cat' ).val('');
	appearInfoBlock()
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
});;//read Daily Outlays
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
	appearInfoBlock();
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
	appearInfoBlock();
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
});;//неточність введення з сторінки
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
});*/;function readRegularOutlays(){
	var category = $( '#regular-outlay .sel-cat' ).val(),
		cost = $('#regular-outlay .inp-cos').val();
		//time = $('#regular-outlay .inp-dat').val();
	dataRegular.setRegular(category, cost, 'day', 'outlays' );
}

$('#regular-outlay .btn-submit').click(function() {	
	
	readRegularOutlays();
});;
$('#manage-balance .btn-add').click(function() {	
	var cost = $('#manage-balance .inp-cat').val();
	if (cost) {
		dataTotalStat.setTotalCurrentStat('balance', cost );
	} else{
		console.log('you have some problem with data')
	};
	$('#manage-balance .inp-cat').val('');
	$('#curBalance').html('Your current balance:' +cost);
	appearInfoBlock();
});
$(function(){

	var balance=dataTotalStat.totalStatistic['currentBalance'];
	if(balance!==null)
		$('#curBalance').html('Your current balance:' +balance);
});$('#manage-outlay-painting').click(function() {
	managePanelPainting('outlays');
});

$('#manage-incomes-painting').click(function() {
	managePanelPainting('incomes');
});;function LS () {}

LS.get = function (keyWord) {
	if (localStorage[keyWord] !== null && localStorage[keyWord] !== undefined ) {
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

		LS.set('categories', setCat);
		return true;
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
dataCategories.setCategory('car1', 'incomes');
dataCategories.setCategory('car2', 'outlays');
dataCategories.setCategory('car3', 'incomes');
dataCategories.setCategory('car4', 'outlays');
// dataCategories.removeCategory('transport', 'outlays');
console.log('dataCategories  -  ' + dataCategories);var date = getDate();
var todayKeyWord = 'day' + date.day + '_' + date.month + '_' + date.year;

function DataDayly () {
	this[todayKeyWord] = {};
	this[todayKeyWord + '_statistic'] = {};
	this[todayKeyWord + '_plan']
}

DataDayly.prototype.getDayly = function () {
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

DataDayly.prototype.getDaylyStatistic = function () {
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

DataDayly.prototype.getDaylyPlan = function () {
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
DataDayly.prototype.setDaily = function(keyWord, category, cost, type) {
	if (!localStorage[keyWord]){
		var defaultDayly = {
			'outlays' : {},
			'incomes' : {}
		};

		LS.set(keyWord, defaultDayly);
	}
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
	console.log(setDaylyObj);
	console.log(defDayly);
	console.log(defDayly[type]);
	defDayly[type]['' + keyWordL + count + '_' + Math.floor((Math.random() * 100) + 1)] = setDaylyObj;

	LS.set(keyWord, defDayly);
	this[keyWord] = LS.get(keyWord);
	var thisID = '' + keyWordL + count + '_' + Math.floor((Math.random() * 100) + 1);
	setToStatistic(keyWord, category, cost, type, thisID);
}

function setToStatistic(keyWord, category, cost, type, thisID) {
	if (!localStorage['stat_' + type]){
		var defaultStat = [];

		LS.set('stat_' + type, defaultStat);
	}
	
	var newArItem = [];
	newArItem.push(keyWord);
	newArItem.push(category);
	newArItem.push(cost);
	newArItem.push(thisID);

	var StatArr = LS.get('stat_' + type);
	StatArr.push(newArItem);

	LS.set('stat_' + type, StatArr);
}

// remove dayly outlays and incomes
DataDayly.prototype.removeDaily = function(keyWord, category, cost, type) {
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

	removeFromStatistic(keyWord, category, cost, type)
}

function removeFromStatistic(keyWord, category, cost, type) {
	if (!localStorage['stat_' + type]){
		var defaultStat = [];

		LS.set('stat_' + type, defaultStat);
	}
	if (localStorage['stat_' + type]){
		var StatArr = LS.get('stat_' + type);
		var ind;
		
		for (var i = 0; i < StatArr.length; i++) {
			if (StatArr[i][0] == keyWord && StatArr[i][1] == category && parseInt(StatArr[i][2]) == parseInt(cost)) {
				ind = i;
			};
		};

		if (ind >= 0) {
			StatArr.splice(ind, 1);
		} else {
			console.log('this data is undefined');
		}
		console.log(i)

		LS.set('stat_' + type, StatArr);
	} else {
		console.log('this localStorage item is undefined');
	}
}


DataDayly.prototype.changeDaily = function(keyWord, category, cost, type, id) {
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

	changeInStatistick(keyWord, category, cost, type, id);
}	

function changeInStatistick(keyWord, category, cost, type, id) {
	if (!localStorage['stat_' + type]){
		var StatArr = LS.get('stat_' + type);
		var ind;
		
		for (var i = 0; i < StatArr.length; i++) {
			if (StatArr[i][0] == keyWord && StatArr[i][3] == id) {
				StatArr[i][0] = keyWord;
				StatArr[i][1] = category;
				StatArr[i][2] = cost;
			};
		};

		LS.set('stat_' + type, StatArr);
	} else {
		console.log('this localStorage item is undefined');
	}
}

// set dayly Statistick outlays and incomes
DataDayly.prototype.setDailyStat = function(keyWord, category, cost, type) {
	var keyWordStat = keyWord + '_statistic';
	if (!localStorage[keyWordStat]){
		var defaultDaylyStatistic = {
			'outlays' : {},
			'incomes' : {}
		};

		LS.set(keyWordStat, defaultDaylyStatistic);
	}
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
DataDayly.prototype.removeDailyStat = function(keyWord, category, cost, type) {
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

DataDayly.prototype.changeDailyStat = function(keyWord, category, cost, type, id) {
	var keyW = keyWord + '_statistic';
	var changeDayStat = LS.get(keyW);

	var buffObj = {};
	buffObj['cat'] = category;
	buffObj['cost'] = cost;

	if (id in changeDayStat[type]) {
		changeDayStat[type][id] = buffObj;
	} else {
		console.log('in your data are some mistake')
	};


	LS.set(keyW, changeDayStat);
	this[keyW] = LS.get(keyW);
}



// set daylyPlan outlays and incomes
DataDayly.prototype.setDailyPlan = function(keyWord, category, cost, type) {
	var keyWordPlan = keyWord + '_plan'
	if (!localStorage[keyWordPlan]){
		var defaultDaylyPlan = {
			'outlays' : {},
			'incomes' : {}
		};

		LS.set(keyWordPlan, defaultDaylyPlan);
	}
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
DataDayly.prototype.removeDailyPlan = function(keyWord, category, cost, type) {
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


DataDayly.prototype.changeDailyPlan = function(keyWord, category, cost, type, id) {
	var keyW = keyWord + '_plan';
	var changeDayPlan = LS.get(keyW);

	var buffObj = {};
	buffObj['cat'] = category;
	buffObj['cost'] = cost;

	if (id in changeDayPlan[type]) {
		changeDayPlan[type][id] = buffObj;
	} else {
		console.log('in your data are some mistake')
	};


	LS.set(keyW, changeDayPlan);
	this[keyW] = LS.get(keyW);
}


var dataDayly = new DataDayly();
dataDayly.getDaylyStatistic();
dataDayly.getDayly();
dataDayly.getDaylyPlan();

console.log('dataDayly  -  ' + dataDayly);

// dataDayly.setDaily('day30_07_2014', 'habar1', '160', 'incomes');
// dataDayly.setDaily(todayKeyWord, 'habar1', '160', 'incomes');
// dataDayly.setDaily(todayKeyWord, 'habar11', '260', 'incomes');
// dataDayly.setDaily(todayKeyWord, 'habar12', '360', 'incomes');
// dataDayly.setDaily(todayKeyWord, 'habar13', '432', 'outlays');
// dataDayly.setDaily(todayKeyWord, 'habar14', '544', 'outlays');
dataDayly.removeDaily(todayKeyWord, 'habar1', '160', 'incomes');
dataDayly.removeDaily(todayKeyWord, 'habar14', '544', 'outlays');

// dataDayly.setDailyStat('day30_07_2014', 'habar2', '350', 'outlays');
// dataDayly.setDailyStat(todayKeyWord, 'habar21', '350', 'outlays');
// dataDayly.setDailyStat(todayKeyWord, 'habar22', '350', 'outlays');
// dataDayly.setDailyStat(todayKeyWord, 'habar33', '350', 'incomes');
// dataDayly.setDailyStat(todayKeyWord, 'habar24', '350', 'incomes');
// dataDayly.removeDailyStat(todayKeyWord, 'habar33', '350', 'incomes');
// dataDayly.removeDailyStat(todayKeyWord, 'habar21', '350', 'outlays');

// dataDayly.setDailyPlan('day30_07_2014', 'pivo1', '350', 'outlays');
// dataDayly.setDailyPlan(todayKeyWord, 'pivo2', '350', 'outlays');
// dataDayly.setDailyPlan(todayKeyWord, 'pivo3', '350', 'outlays');
// dataDayly.setDailyPlan(todayKeyWord, 'pivo4', '350', 'incomes');
// // dataDayly.setDailyPlan(todayKeyWord, 'pivo5', '350', 'incomes');
// dataDayly.removeDailyPlan(todayKeyWord, 'pivo2', '350', 'outlays');
// dataDayly.removeDailyPlan(todayKeyWord, 'pivo5', '350', 'incomes');



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

	setForecastStat(category, cost, time, type);
}


function setForecastStat(category, cost, time, type) {
	if (!localStorage['stat_Forecast_' + type]){
		var defaultStat = [];

		LS.set('stat_Forecast_' + type, defaultStat);
	}

	var newArItem = [];
	newArItem.push(time);
	newArItem.push(category);
	newArItem.push(cost);

	var StatArr = LS.get('stat_Forecast_' + type);
	StatArr.push(newArItem);

	LS.set('stat_Forecast_' + type, StatArr);
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


	removeForecastStat(time, category, cost, type);
}


function removeForecastStat(time, category, cost, type) {
	if (localStorage['stat_Forecast_' + type]){

		var StatArr = LS.get('stat_Forecast_' + type);
		var ind;
		
		for (var i = 0; i < StatArr.length; i++) {
			if (StatArr[i][0] == time && StatArr[i][1] == category && parseInt(StatArr[i][2]) == parseInt(cost)) {
				ind = i;
			};
		};
		if (ind >= 0) {
			StatArr.splice(ind, 1);
		} else {
			console.log('this data is undefined');
		}

		LS.set('stat_Forecast_' + type, StatArr);
	} else {
		console.log('this localStorage item is undefined');
	}
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

dataForecast.removeForecast('baby4', 4500, 'month', 'outlays');
dataForecast.removeForecast('baby3', 3500, 'month', 'outlays');
dataForecast.removeForecast('baby5', 5500, 'year', 'outlays');

;function DataRegular () {
	this.regular = {};
}

DataRegular.prototype.getRegular = function () {
	if (!localStorage.regular) {
		var defaultRegular = {
			'day' : {
				'outlays' : {},
				'incomes' : {}
			},

			'month' : {
				'outlays' : {},
				'incomes' : {}
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

	setRegStat(category, cost, time, type);
}

function setRegStat(category, cost, time, type) {
	if (!localStorage['stat_Reg_' + type]){
		var defaultStat = [];

		LS.set('stat_Reg_' + type, defaultStat);
	}

	var newArItem = [];
	newArItem.push(time);
	newArItem.push(category);
	newArItem.push(cost);

	var StatArr = LS.get('stat_Reg_' + type);
	StatArr.push(newArItem);

	LS.set('stat_Reg_' + type, StatArr);
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

	removeRegStat(time, category, cost, type);
}

function removeRegStat(time, category, cost, type) {
	if (localStorage['stat_Reg_' + type]){

		var StatArr = LS.get('stat_Reg_' + type);
		var ind;
		
		for (var i = 0; i < StatArr.length; i++) {
			if (StatArr[i][0] == time && StatArr[i][1] == category && parseInt(StatArr[i][2]) == parseInt(cost)) {
				ind = i;
			};
		};
		if (ind >= 0) {
			StatArr.splice(ind, 1);
		} else {
			console.log('this data is undefined');
		}

		LS.set('stat_Reg_' + type, StatArr);
	} else {
		console.log('this localStorage item is undefined');
	}
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

// dataRegular.removeRegular('guns3', 600, 'year', 'outlays');
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
// dataTotalStat.setTotalTimeStat('bla', 1111, 'month', 9, 2015, 'incomes');
// dataTotalStat.setTotalTimeStat('vla1', 555555, 'year', '', 2013, 'outlays');
// dataTotalStat.setTotalTimeStat('bla', 1111, 'month', 9, 2019, 'incomes');
// dataTotalStat.setTotalTimeStat('vla1', 555555, 'year', '', 2019, 'outlays');
// dataTotalStat.remTotalTimeStat('habar11', 1111, 'month', 7, 2014, 'incomes');
;function paintIncOut(dayData){
	if (dayData < todayKeyWord) {
		writeErrorMessage(dayData);
	} else if (dayData == todayKeyWord) {
		showToday()
	} else if (dayData > todayKeyWord) {

	}
}

function writeErrorMessage(dayData){
	document.getElementById('last-day').innerHTML = '';
	$('#last-day-butt').click();
	var listOut =  document.getElementById('outlay-section').getElementsByTagName('ul')[0].getElementsByTagName('li');
	for (var i = 0; i < listOut.length; i++) {
		listOut[i].style.display = 'none';
	};
	var beforeDayOut = document.getElementById('showBeforeDay');
	beforeDayOut.style.display = 'block';
	document.getElementById('last-day').style.display = 'block';
	var newDayObj = LS.get(dayData).outlays;
	if (newDayObj) {
		for (key in newDayObj) {
			createInputsFieldF ('last-day', key, newDayObj[key].cat, newDayObj[key].cost, 'outlays');
		}
	} else {
		console.log('some new kaka')
		var messErr = document.createElement('div');
		messErr.className = 'ErrorMessage';
		messErr.innerHTML = 'in this day you have not any outlays';
		document.getElementById('last-day').appendChild(messErr);
	}

	document.getElementById('last-day-incForm').innerHTML = '';
	$('#last-day-income').click();
	var listInc = document.getElementById('income-section').getElementsByTagName('ul')[0].getElementsByTagName('li');
	for (var i = 0; i < listInc.length; i++) {
		listInc[i].style.display = 'none';
	};
	var beforeDayInc = document.getElementById('showBeforeDayIn');
	beforeDayInc.style.display = 'block';
	document.getElementById('last-day-incForm').style.display = 'block';
	var newDayObjInc = LS.get(dayData).incomes;
	if (newDayObjInc) {
		for (key in newDayObjInc) {
			createInputsFieldF ('last-day-incForm', key, newDayObjInc[key].cat, newDayObjInc[key].cost, 'incomes');
		}
	} else {
		var messErrInc = document.createElement('div');
		messErrInc.className = 'ErrorMessage';
		messErrInc.innerHTML = 'in this day you have not any incomes';
		document.getElementById('last-day-incForm').appendChild(messErrInc);
	}
}

	function createInputsFieldF (placeholderId, key, categoryValue, costValue, legendTitle) {
		var fieldset, categoryInput, costInput;
		var placeholder = document.getElementById(placeholderId);

		fieldset = createFieldset(key, legendTitle);
		categoryInput = createInputLabelf('Category: ', categoryValue);
		costInput = createInputLabelf('Cost: ', costValue);

		placeholder.appendChild(fieldset).appendChild(categoryInput);
		placeholder.appendChild(fieldset).appendChild(costInput);

	}

	function createFieldset (id, legendValue) {
		var fieldset = document.createElement('fieldset');
		fieldset.className = 'manage-panel-fieldset';
		fieldset.id = id;

		var legend = document.createElement('legend');
		legend.innerHTML = legendValue;

		fieldset.appendChild(legend); 
		
		return fieldset
	}

	function createInputLabelf (labelValue, inputValue) {
		var label = createLable(labelValue),
		input = document.createElement('input');
		
		input.type = 'text';
		input.value = inputValue;
		input.setAttribute('disabled', 'disabled');
		input.className = 'inp-cat';
		label.appendChild(input);

		return label;
	}

	function createLable (text) {
		var label = document.createElement('label');
		label.textContent = text;

		return label
	}

function showToday() {
	var listOut =  document.getElementById('outlay-section').getElementsByTagName('ul')[0].getElementsByTagName('li');
	for (var i = 0; i < listOut.length; i++) {
		listOut[i].style.display = 'block';
	};
	document.getElementById('showBeforeDay').style.display = 'none';
	$('#outlay-section > ul li:first-child a').click();



	var listInc = document.getElementById('income-section').getElementsByTagName('ul')[0].getElementsByTagName('li');
	for (var i = 0; i < listInc.length; i++) {
		listInc[i].style.display = 'block';
	};
	document.getElementById('showBeforeDayIn').style.display = 'none';	
	$('#income-section > ul li:first-child a').click();
};function datalistPainting (category) {
	var datalist = document.createElement('datalist');
		datalist.id = category + 'CategoriesDatalist',
		categories = dataCategories.categories[category];

	for (var i = 0; i < categories.length; i++) {
		var option = document.createElement('option');
		option.value = categories[i];
		datalist.appendChild(option);
	}
	document.body.appendChild(datalist);
}

datalistPainting('outlays');
datalistPainting('incomes');

function optionPainting (category, value) {
	var datalist = document.getElementById(category + 'CategoriesDatalist');
	
	var option = document.createElement('option');
	option.value = value;

	datalist.appendChild(option);
};window.onload = function CheckCurrentBalance() {
	var infoBlock = document.getElementsByClassName("info-block")[0];
	if (dataTotalStat.totalStatistic.currentBalance == 0) {
		infoBlock.style.display = "block";
		infoBlock.innerHTML += "Hi! I'm Panda-economist. First of all, set your current balance. Thank you!";
		document.getElementById("close-info-block").onclick = closeInfoBlock;
	}
}

var closeInfoBlock = function closeInfoBlock() {
		var infoBlock = document.getElementsByClassName("info-block")[0];
		infoBlock.style.display = "none";
}

var checkInfoBlock = function checkInfoBlock() {
	var infoBlock = document.getElementsByClassName("info-block")[0];
	if (infoBlock.style.display == "block") {
		setTimeout(closeInfoBlock, 4000);
	}
}

setInterval(checkInfoBlock, 1000);

function appearInfoBlock() {
	var infoBlock = document.getElementsByClassName("info-block")[0];
	infoBlock.style.display = "block";
	infoBlock.innerHTML = "	<header><h3>New message</h3></header>Information successfully updated!";
	checkInfoBlock();
}


;;window.onscroll = function() {
	var leftNavBar = document.getElementsByClassName("leftNavBar")[0];
	if (window.pageYOffset > 96) {
		leftNavBar.style.display = "block";
	} else {
		leftNavBar.style.display = "none";
	}
};function managePanelPainting (type) {

	if (type === 'outlays') {
		
		for (var key in dataDayly[todayKeyWord].outlays) {
			createInputsField('manage-outlay', key, dataDayly[todayKeyWord].outlays[key].cat, dataDayly[todayKeyWord].outlays[key].cost, 'Outlay');
		}

		var button = createButton('submit-edited-outlays', '', 'Submit');
		document.getElementById('manage-outlay').appendChild(button);

	} else if ( type === 'incomes' ) {

		for (var key in dataDayly[todayKeyWord].incomes) {
			createInputsField('manage-income', key, dataDayly[todayKeyWord].incomes[key].cat, dataDayly[todayKeyWord].incomes[key].cost, 'Income');
		}

		var button = createButton('submit-edited-outlays', '', 'Submit');
		document.getElementById('manage-outlay').appendChild(button);

	} else {
		console.log('error(outlayManagePainting.js)');
	}
}

	function createInputsField (placeholderId, key, categoryValue, costValue, legendTitle) {
		var fieldset, categoryInput, costInput, deleteButton;
		var placeholder = document.getElementById(placeholderId);

		fieldset = createFieldset(key, legendTitle);
		categoryInput = createInputLabel('Category: ', categoryValue);
		costInput = createInputLabel('Cost: ', costValue);
		deleteButton = createButton(key, 'manage-delete-button', 'delete');

		placeholder.appendChild(fieldset).appendChild(categoryInput);
		placeholder.appendChild(fieldset).appendChild(costInput);
		placeholder.appendChild(fieldset).appendChild(deleteButton);

	}

	function createFieldset (id, legendValue) {
		var fieldset = document.createElement('fieldset');
		fieldset.className = 'manage-panel-fieldset';
		fieldset.id = id;

		var legend = document.createElement('legend');
		legend.innerHTML = legendValue;

		fieldset.appendChild(legend); 
		
		return fieldset
	}

	function createInputLabel (labelValue, inputValue) {
		var label = createLable(labelValue),
		input = document.createElement('input');
		
		input.type = 'text';
		input.value = inputValue;

		label.appendChild(input);

		return label;
	}

	function createButton (id, buttonClass, value) {
		var button = document.createElement('input');

		button.type = 'button';
		button.id = id;
		button.className = buttonClass;
		button.value = value;

		return button
	}

		function createLable (text) {
			var label = document.createElement('label');
			label.textContent = text;

			return label
		};function managePanelPainting (type) {
	if (type === 'outlays') {
		
		for (var key in dataDayly[todayKeyWord].outlays) {
			createInputsField('manage-outlay', key, dataDayly[todayKeyWord].outlays[key].cat, dataDayly[todayKeyWord].outlays[key].cost, 'Outlay');
		}

		var button = createButton('submit-edited-outlays', '', 'Submit');
		document.getElementById('manage-outlay').appendChild(button);

	} else if ( type === 'incomes' ) {

		for (var key in dataDayly[todayKeyWord].incomes) {
			createInputsField('manage-income', key, dataDayly[todayKeyWord].incomes[key].cat, dataDayly[todayKeyWord].incomes[key].cost, 'Income');
		}

		var button = createButton('submit-edited-outlays', '', 'Submit');
		document.getElementById('manage-income').appendChild(button);

	}
}

	function createInputsField (placeholderId, key, categoryValue, costValue, legendTitle) {
		var fieldset, categoryInput, costInput, deleteButton;
		var placeholder = document.getElementById(placeholderId);

		fieldset = createFieldset(key, legendTitle);
		categoryInput = createInputLabel('Category: ', categoryValue);
		costInput = createInputLabel('Cost: ', costValue);
		deleteButton = createButton(key, 'manage-delete-button', 'delete');

		placeholder.appendChild(fieldset).appendChild(categoryInput);
		placeholder.appendChild(fieldset).appendChild(costInput);
		placeholder.appendChild(fieldset).appendChild(deleteButton);

	}

	function createFieldset (id, legendValue) {
		var fieldset = document.createElement('fieldset');
		fieldset.className = 'manage-panel-fieldset';
		fieldset.id = id;

		var legend = document.createElement('legend');
		legend.innerHTML = legendValue;

		fieldset.appendChild(legend); 
		
		return fieldset
	}

	function createInputLabel (labelValue, inputValue) {
		var label = createLable(labelValue),
		input = document.createElement('input');
		
		input.type = 'text';
		input.value = inputValue;

		label.appendChild(input);

		return label;
	}

	function createButton (id, buttonClass, value) {
		var button = document.createElement('input');

		button.type = 'button';
		button.id = id;
		button.className = buttonClass;
		button.value = value;

		return button
	}

		function createLable (text) {
			var label = document.createElement('label');
			label.textContent = text;

			return label
		};$(document).ready(function() {
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});
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
    renderingData(k.firstChild.getAttribute('data-day'));
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



;//read Daily Outlays
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
});*/;

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
});*/;

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

});;
$('#manage-balance .btn-add').click(function() {	
	var cost = $('#manage-balance .inp-cos').val();
	if (cost && isNonNegative(cost)) {
		dataTotalStat.setTotalCurrentStat('balance', cost );
		$('#curBalance').html('Your current balance:' +cost);
			appearInfoBlock();
		$('#manage-balance .inp-cos').val('');
	} else{

		console.log('you have some problem with data');
		appearInfoBlock("Invalid balance value");

	};
	
	

});
$(function(){

	var balance=dataTotalStat.totalStatistic['currentBalance'];
	if(balance!==null)
		$('#curBalance').html('Your current balance:' +balance);
});$('#manage-outlay-painting').click(function() {
	
	
	managePanelPainting('outlays');
	$(" .manage-delete-button").click(function() {
		//alert('type');
		var cat=$(this).siblings().children('input.sel-cat').val();
		var cost=$(this).siblings().children('input.inp-cos').val();
		console.log(cat);
		console.log(cost);
		dataDayly.removeDaily(todayKeyWord, cat,cost, 'outlays');		
		$(this).parent().hide();


	}
	);
});

$('#manage-incomes-painting').click(function() {

	managePanelPainting('incomes');

	$(" .manage-delete-button").click(function() {
	//	alert('incomes');
		var cat=$(this).siblings().children('input.sel-cat').val();
		var cost=$(this).siblings().children('input.inp-cos').val();
		console.log(cat);
		console.log(cost);
		dataDayly.removeDaily(todayKeyWord, cat,cost, 'incomes');		
		$(this).parent().hide();


	}
	);
});
	// function deleteDaily(type){
	// 	alert(type);
	// 	var cat=$(this).siblings().children('input.sel-cat').val();
	// 	var cost=$(this).siblings().children('input.inp-cos').val();
	// 	console.log(cat);
	// 	console.log(cost);
	// 	dataDayly.removeDaily(todayKeyWord, cat,cost, type);		
	// 	$(this).parent().remove();
	// }
;document.getElementsByClassName("manage-button")[0].onclick = function() {
	showManagePanel();
	paintToolsPanelCategories();
	paintToolsPanelDaily('incomes');
	paintToolsPanelDaily('outlays');
}

document.getElementById("close-manage-block").onclick = function() {
	hideManagePanel();
}


function removeOutlayCategory () { 
	dataCategories.removeCategory(this.id, 'outlays');
	this.parentNode.remove();
}

function removeIncomeCategory () {
	dataCategories.removeCategory(this.id, 'incomes');
	this.parentNode.remove();
}

function getCategoryInputFieldOutlay (btn) {	
	paintingAddCategoryField('outlay', btn);
}

function getCategoryInputFieldIncome () {
	alert('click');
}

function deleteDailyDataButton (button) {
	var cat = button.getAttribute('data-cat'),
	cost = button.getAttribute('data-cost'),
	type = button.getAttribute('data-type');
	
	console.log(todayKeyWord, cat, cost, type);
	dataDayly.removeDaily(todayKeyWord, cat, cost, type);

	if (type === 'outlays') {
		repaintDailyOutlaysPanelTools ()
	} else {
		repaintDailyIncomesPanelTools ()
	}
};function isNumber(obj) {return /^-?[\d.]+(?:e-?\d+)?$/.test(obj); }
function isNonNegative(obj) { return (isNumber(obj) && obj>=0)}
;function LS () {}

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
dataCategories.setCategory('car4', 'outlays');
//dataCategories.removeCategory('transport', 'outlays');
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
;// Парсення поточної дати

function parseCurrentDate() {
	var currentDate = getDate();
	parsedDateValue = "day" + currentDate.day + "_" + currentDate.month + "_" + currentDate.year;
	return parsedDateValue; 
};

// Рендерінг на сторінку
function renderingData(currentDate) {
	document.getElementById("daily-total-incomes").innerHTML = dailyTotalIncomes(currentDate);
	document.getElementById("daily-total-outlays").innerHTML = dailyTotalOutlays(currentDate);
	dailyOutlaysByCategories(currentDate);
	dailyIncomesByCategories(currentDate);
	weeklyOutlaysStatistics();
	weeklyIncomesStatistics();
	weeklyOutlaysStatisticsByCategories();
	weeklyIncomesStatisticsByCategories();
	monthlyOutlaysStatistics();
	monthlyIncomesStatistics();
	monthlyOutlaysStatisticsByCategories(currentDate);
	monthlyIncomesStatisticsByCategories(currentDate);

}

// Встановлення поточних даних по замовчуванню
(function setCurrentDayTotalInfo() {
	var currentDate = parseCurrentDate();
	renderingData(currentDate);
})();

//Загальні надходження за вказаний день
function dailyTotalIncomes(selectedDate) {
	var currentDay = LS.get(selectedDate),
		currentDayIncomes = currentDay.incomes;
	var property, totalIncomesValue = 0;
	for (property in currentDayIncomes) {
		totalIncomesValue += parseInt(currentDayIncomes[property].cost);
	}
	return totalIncomesValue;
};

//Загальні витрати за вказаний день
function dailyTotalOutlays(selectedDate) {
	var currentDay = LS.get(selectedDate),
		currentDayOutlays = currentDay.outlays;
	var property, totalOutlaysValue = 0;
	for (property in currentDayOutlays) {
		totalOutlaysValue += parseInt(currentDayOutlays[property].cost);
	}
	return totalOutlaysValue;
};

//Витрати по категоріям з рендером
function dailyOutlaysByCategories(selectedDate) {
	var currentDay = LS.get(selectedDate),
		currentDayOutlays = currentDay.outlays;
		allCategories = LS.get("categories"),
		allOutlaysCategories = allCategories.outlays,
		fieldSetInto = document.getElementById("daily-statistic-by-categories-outlays");
		fieldSetInto.innerHTML = "";
	var category = 0, property, totalCatOutlayValue = 0, className = "calculated-data";
	for (; category < allOutlaysCategories.length; category++) {
		for (property in currentDayOutlays) {
			if ((currentDayOutlays[property].cat == allOutlaysCategories[category]) && (currentDayOutlays[property].cost != "")) {
				totalCatOutlayValue += parseInt(currentDayOutlays[property].cost);
			}
			if (totalCatOutlayValue == "undefined") {
				totalCatOutlayValue = 0;
			}
		}
		fieldSetInto.innerHTML += allOutlaysCategories[category] + "<span class=" + className + ">" + totalCatOutlayValue +"</span></br>";
		totalCatOutlayValue = 0;
	}
}

//Прибутки по категоріям з рендером
function dailyIncomesByCategories(selectedDate) {
	var currentDay = LS.get(selectedDate),
		currentDayIncomes = currentDay.incomes;
		allCategories = LS.get("categories"),
		allIncomesCategories = allCategories.incomes,
		fieldSetInto = document.getElementById("daily-statistic-by-categories-incomes");
		fieldSetInto.innerHTML = "";
	var category = 0, property, totalCatIncomeValue = 0, className = "calculated-data";
	for (; category < allIncomesCategories.length; category++) {
		for (property in currentDayIncomes) {
			if ((currentDayIncomes[property].cat == allIncomesCategories[category]) && (currentDayIncomes[property].cost != "")) {
				totalCatIncomeValue += parseInt(currentDayIncomes[property].cost);
			}
			if (totalCatIncomeValue == "undefined") {
				totalCatIncomeValue = 0;
			}
		}
		fieldSetInto.innerHTML += allIncomesCategories[category] + "<span class=" + className + ">" + totalCatIncomeValue +"</span></br>";
		totalCatIncomeValue = 0;
	}
}

//Витрати по категоріям без рендера з занесенням в масив
function dailyOutlaysByCategoriesNoRender(selectedDate) {
	var currentDay = LS.get(selectedDate),
		currentDayOutlays = currentDay.outlays;
		allCategories = LS.get("categories"),
		allOutlaysCategories = allCategories.outlays,
		allDailyData = [];
	var category = 0, property, totalCatOutlayValue = 0, className = "calculated-data";
	for (; category < allOutlaysCategories.length; category++) {
		for (property in currentDayOutlays) {
			if ((currentDayOutlays[property].cat == allOutlaysCategories[category]) && (currentDayOutlays[property].cost != "")) {
				totalCatOutlayValue += parseInt(currentDayOutlays[property].cost);
			}
			if (totalCatOutlayValue == "undefined") {
				totalCatOutlayValue = 0;
			}
		}
		allDailyData.push([allOutlaysCategories[category], totalCatOutlayValue]);
		totalCatOutlayValue = 0;
	}
	return allDailyData;
}

//Прибутки по категоріям без рендера з занесенням в масив
function dailyIncomesByCategoriesNoRender(selectedDate) {
	var currentDay = LS.get(selectedDate),
		currentDayIncomes = currentDay.incomes;
		allCategories = LS.get("categories"),
		allIncomesCategories = allCategories.incomes, 
		allDailyData = [];
	var category = 0, property, totalCatIncomeValue = 0, className = "calculated-data";
	for (; category < allIncomesCategories.length; category++) {
		for (property in currentDayIncomes) {
			if ((currentDayIncomes[property].cat == allIncomesCategories[category]) && (currentDayIncomes[property].cost != "")) {
				totalCatIncomeValue += parseInt(currentDayIncomes[property].cost);
			}
			if (totalCatIncomeValue == "undefined") {
				totalCatIncomeValue = 0;
			}
		}
		allDailyData.push([allIncomesCategories[category],totalCatIncomeValue]);
		totalCatIncomeValue = 0;
	}
	return allDailyData;
}

//Загальна статистика за останні сім днів місяця
function weeklyOutlaysStatistics() {
	var currentDate = getDate(),
		day = parseInt(currentDate.day),
		dates = [], datesValue, weeklyTotalOutlays = 0;
		document.getElementById("weekly-total-outlays").innerHTML = "";
	if (day >= 7) {
		for (var counter = 0; counter < 7; counter++, day--) {
			datesValue = "day0" + day + "_" + currentDate.month + "_" + currentDate.year;
			dates.push(datesValue);
		}
		for (var counter = 0; counter < dates.length; counter++) {
			if (dailyTotalOutlays(dates[counter])) {
				weeklyTotalOutlays += dailyTotalOutlays(dates[counter]);
			}
		}
		document.getElementById("weekly-total-outlays").innerHTML += weeklyTotalOutlays;
	} else {
		document.getElementById("weekly-total-outlays").innerHTML += "Unavailable";
	}
}

function weeklyIncomesStatistics() {
	var currentDate = getDate(),
		day = parseInt(currentDate.day),
		dates = [], datesValue, weeklyTotalIncomes = 0;
		document.getElementById("weekly-total-incomes").innerHTML = "";
	if (day >= 7) {
		for (var counter = 0; counter < 7; counter++, day--) {
			datesValue = "day0" + day + "_" + currentDate.month + "_" + currentDate.year;
			dates.push(datesValue);
		}
		for (var counter = 0; counter < dates.length; counter++) {
			if (dailyTotalIncomes(dates[counter])) {
				weeklyTotalIncomes += dailyTotalIncomes(dates[counter]);
			}
		}
		document.getElementById("weekly-total-incomes").innerHTML += weeklyTotalIncomes;
	} else {
		document.getElementById("weekly-total-incomes").innerHTML += "Unavailable";
	}
}

//Статистика за сім днів по категоріям
function weeklyOutlaysStatisticsByCategories() {
	var currentDate = getDate(),
		day = parseInt(currentDate.day),
		dates = [], datesValue, weeklyTotalOutlayByCategory = 0, 
		allDailyCategoryStatistics = [], className = "calculated-data";
		document.getElementById("weekly-statistic-by-categories-outlays").innerHTML = "";
	if (day >= 7) {
		for (var counter = 0; counter < 7; counter++, day--) {
			datesValue = "day0" + day + "_" + currentDate.month + "_" + currentDate.year;
			dates.push(datesValue);
		}
	}
	for (var counter = 0; counter < dates.length; counter++) {
		allDailyCategoryStatistics.push(dailyOutlaysByCategoriesNoRender(dates[counter]));
	}	
	console.log(allDailyCategoryStatistics);
	for (var categCounter = 0; categCounter < allDailyCategoryStatistics[0].length; categCounter++) {
		for (var dayCounter = 0; dayCounter < allDailyCategoryStatistics.length; dayCounter++) {
			weeklyTotalOutlayByCategory += allDailyCategoryStatistics[dayCounter][categCounter][1];
		}
		document.getElementById("weekly-statistic-by-categories-outlays").innerHTML += allDailyCategoryStatistics[0][categCounter][0] + "<span class=" + className + ">" + weeklyTotalOutlayByCategory +"</span></br>";
		weeklyTotalOutlayByCategory = 0;
	}
}

function weeklyIncomesStatisticsByCategories() {
	var currentDate = getDate(),
		day = parseInt(currentDate.day),
		dates = [], datesValue, weeklyTotalIncomeByCategory = 0, 
		allDailyCategoryStatistics = [], className = "calculated-data";
		document.getElementById("weekly-statistic-by-categories-incomes").innerHTML = "";
	if (day >= 7) {
		for (var counter = 0; counter < 7; counter++, day--) {
			datesValue = "day0" + day + "_" + currentDate.month + "_" + currentDate.year;
			dates.push(datesValue);
		}
	}
	for (var counter = 0; counter < dates.length; counter++) {
		allDailyCategoryStatistics.push(dailyIncomesByCategoriesNoRender(dates[counter]));
	}	
	console.log(allDailyCategoryStatistics);
	for (var categCounter = 0; categCounter < allDailyCategoryStatistics[0].length; categCounter++) {
		for (var dayCounter = 0; dayCounter < allDailyCategoryStatistics.length; dayCounter++) {
			weeklyTotalIncomeByCategory += allDailyCategoryStatistics[dayCounter][categCounter][1];
		}
		document.getElementById("weekly-statistic-by-categories-incomes").innerHTML += allDailyCategoryStatistics[0][categCounter][0] + "<span class=" + className + ">" + weeklyTotalIncomeByCategory +"</span></br>";
		weeklyTotalIncomeByCategory = 0;
	}
}

//Статистика від початку місяця і до сьогодні
function monthlyOutlaysStatistics(currentDate) {
	var currentDate = getDate(),
		day = parseInt(currentDate.day),
		dates = [], datesValue, monthlyTotalOutlays = 0;
		document.getElementById("monthly-total-outlays").innerHTML = "";
		for (var counter = 0; counter < day; counter++) {
			datesValue = "day0" + (counter+1) + "_" + currentDate.month + "_" + currentDate.year;
			dates.push(datesValue);
		}
		for (var counter = 0; counter < dates.length; counter++) {
			if (dailyTotalOutlays(dates[counter])) {
				monthlyTotalOutlays += dailyTotalOutlays(dates[counter]);
			}
		}
		document.getElementById("monthly-total-outlays").innerHTML += monthlyTotalOutlays;
}

function monthlyIncomesStatistics(currentDate) {
	var currentDate = getDate(),
		day = parseInt(currentDate.day),
		dates = [], datesValue, monthlyTotalIncomes = 0;
		document.getElementById("monthly-total-incomes").innerHTML = "";
		for (var counter = 0; counter < day; counter++) {
			datesValue = "day0" + (counter+1) + "_" + currentDate.month + "_" + currentDate.year;
			dates.push(datesValue);
		}
		for (var counter = 0; counter < dates.length; counter++) {
			if (dailyTotalIncomes(dates[counter])) {
				monthlyTotalIncomes += dailyTotalIncomes(dates[counter]);
			}
		}
		document.getElementById("monthly-total-incomes").innerHTML += monthlyTotalIncomes;
}

//Статистика від початку місяця і до сьогодні по категоріям
function monthlyOutlaysStatisticsByCategories(currentDate) {
	var currentDate = getDate(),
		day = parseInt(currentDate.day),
		dates = [], datesValue, monthlyTotalOutlayByCategory = 0, 
		allDailyCategoryStatistics = [], className = "calculated-data";
		document.getElementById("monthly-statistic-by-categories-outlays").innerHTML = "";
	for (var counter = 0; counter < day; counter++) {
		datesValue = "day0" + (counter+1) + "_" + currentDate.month + "_" + currentDate.year;
		dates.push(datesValue);
	}
	for (var counter = 0; counter < dates.length; counter++) {
		allDailyCategoryStatistics.push(dailyOutlaysByCategoriesNoRender(dates[counter]));
	}	
	for (var categCounter = 0; categCounter < allDailyCategoryStatistics[0].length; categCounter++) {
		for (var dayCounter = 0; dayCounter < allDailyCategoryStatistics.length; dayCounter++) {
			monthlyTotalOutlayByCategory += allDailyCategoryStatistics[dayCounter][categCounter][1];
		}
		document.getElementById("monthly-statistic-by-categories-outlays").innerHTML += allDailyCategoryStatistics[0][categCounter][0] + "<span class=" + className + ">" + monthlyTotalOutlayByCategory +"</span></br>";
		monthlyTotalOutlayByCategory = 0;
	}
}

function monthlyIncomesStatisticsByCategories(currentDate) {
	var currentDate = getDate(),
		day = parseInt(currentDate.day),
		dates = [], datesValue, monthlyTotalIncomeByCategory = 0, 
		allDailyCategoryStatistics = [], className = "calculated-data";
		document.getElementById("monthly-statistic-by-categories-incomes").innerHTML = "";
	for (var counter = 0; counter < day; counter++) {
		datesValue = "day0" + (counter+1) + "_" + currentDate.month + "_" + currentDate.year;
		dates.push(datesValue);
	}
	for (var counter = 0; counter < dates.length; counter++) {
		allDailyCategoryStatistics.push(dailyIncomesByCategoriesNoRender(dates[counter]));
	}	
	console.log(allDailyCategoryStatistics);
	for (var categCounter = 0; categCounter < allDailyCategoryStatistics[0].length; categCounter++) {
		for (var dayCounter = 0; dayCounter < allDailyCategoryStatistics.length; dayCounter++) {
			monthlyTotalIncomeByCategory += allDailyCategoryStatistics[dayCounter][categCounter][1];
		}
		document.getElementById("monthly-statistic-by-categories-incomes").innerHTML += allDailyCategoryStatistics[0][categCounter][0] + "<span class=" + className + ">" + monthlyTotalIncomeByCategory +"</span></br>";
		monthlyTotalIncomeByCategory = 0;
	}
}


;function paintIncOut(dayData){
	if (dayData < todayKeyWord) {
		showCalendarData(dayData);
	} else if (dayData == todayKeyWord) {
		showToday()
	} else if (dayData > todayKeyWord) {

	}
}

function showCalendarData(dayData){
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
		paintTable('outlays', 'last-day', newDayObj)
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
		paintTable('incomes', 'last-day-incForm', newDayObjInc)
	} else {
		var messErrInc = document.createElement('div');
		messErrInc.className = 'ErrorMessage';
		messErrInc.innerHTML = 'in this day you have not any incomes';
		document.getElementById('last-day-incForm').appendChild(messErrInc);
	}
}

	function paintTable(type, id, obj) {
		var table = document.createElement('table');
		table.className = 'beforeDaiInfo'
		var caption = document.createElement('caption');
		caption.innerHTML = type + ' for the previous days (view only)';
		table.appendChild(caption);
		var thead = document.createElement('thead');
		var trThead = document.createElement('tr');
		var thCat = document.createElement('th');
		thCat.innerHTML = 'Category';
		var thCost = document.createElement('th');
		thCost.innerHTML = 'Cost';
		trThead.appendChild(thCat);
		trThead.appendChild(thCost);
		thead.appendChild(trThead);
		var tbody = document.createElement('tbody');
		for (key in obj) {
			// createInputsFieldF ('last-day-incForm', key, newDayObjInc[key].cat, newDayObjInc[key].cost, 'incomes');
			var trTbody = document.createElement('tr');
			var tdCat = document.createElement('td');
			tdCat.innerHTML = obj[key].cat;
			var tdCost = document.createElement('td');
			tdCost.innerHTML = obj[key].cost + ' uah'
			trTbody.appendChild(tdCat);
			trTbody.appendChild(tdCost);
			tbody.appendChild(trTbody);
		}
		table.appendChild(thead);
		table.appendChild(tbody);
		document.getElementById(id).appendChild(table);
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

function appearInfoBlock(message) {
	if(message==undefined)
		message="Information successfully updated!";
	var infoBlock = document.getElementsByClassName("info-block")[0];
	infoBlock.style.display = "block";
	infoBlock.innerHTML = "	<header><h3>New message</h3></header>"+message;
	checkInfoBlock();
}


;window.onscroll = function() {
	var leftNavBar = document.getElementsByClassName("leftNavBar")[0];
	if (window.pageYOffset > 96) {
		leftNavBar.style.display = "block";
	} else {
		leftNavBar.style.display = "none";
	}
};function managePanelPainting (type) {
	if (type === 'outlays') {

		createPlaceholderManagePanel ('manage-outlay');
		
		for (var key in dataDayly[todayKeyWord].outlays) {
			createInputsField('manage-outlay-placeholder', key, dataDayly[todayKeyWord].outlays[key].cat, dataDayly[todayKeyWord].outlays[key].cost, 'Outlay');
		}

	
		var button = createButton('submit-manage-outlay', 'btn-submit', 'Submit');
		document.getElementById('manage-outlay').appendChild(button);

	} else if ( type === 'incomes' ) {

		createPlaceholderManagePanel ('manage-income');

		for (var key in dataDayly[todayKeyWord].incomes) {
			createInputsField('manage-income-placeholder', key, dataDayly[todayKeyWord].incomes[key].cat, dataDayly[todayKeyWord].incomes[key].cost, 'Income');
		}

		var button = createButton('submit-manage-income', 'btn-submit', 'Submit');
		document.getElementById('manage-income').appendChild(button);

	}
}
	function createPlaceholderManagePanel (idPiece) {
		var element = document.getElementById(idPiece + '-placeholder');

		if (element !== null) {
			element.remove();
			document.getElementById('submit-' + idPiece).remove();

			var placeholder = document.createElement('div');
			placeholder.id = idPiece + '-placeholder';

			document.getElementById(idPiece).appendChild(placeholder);	
		} else {
			var placeholder = document.createElement('div');
			placeholder.id = idPiece + '-placeholder';

			document.getElementById(idPiece).appendChild(placeholder);	
		}
	}

	function createInputsField (placeholderId, key, categoryValue, costValue, legendTitle) {
		var fieldset, categoryInput, costInput, deleteButton;
		var placeholder = document.getElementById(placeholderId);

		fieldset = createFieldset(key, legendTitle);
		categoryInput = createInputLabel('Category: ', categoryValue, 'sel-cat');
		costInput = createInputLabel('Cost: ', costValue, 'inp-cos');
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

	function createInputLabel (labelValue, inputValue, inputClass) {
		var label = createLable(labelValue),
		input = document.createElement('input');
		
		input.type = 'text';
		input.value = inputValue;
		input.className = inputClass;

		label.appendChild(input);

		return label;
	}

	function createButton (id, buttonClass, value, onclickEvent) {
		var button = document.createElement('input');

		button.type = 'button';
		button.id = id;
		button.className = buttonClass;
		button.value = value;
		if (onclickEvent) {
			button.setAttribute('onclick',onclickEvent + '()');
		}

		return button
	}

		function createLable (text) {
			var label = document.createElement('label');
			label.textContent = text;

			return label
		}

function showTodayList(placeholder) {

};$(document).ready(function() {
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 		
 		console.log();


        if ($(this).attr('href') === "#empty") {
        } else if ($(this).parents('li:eq(1)').attr('id') === 'dropdown-item') {
        	$('.tabs ' + currentAttrValue).show().siblings().hide();
 			$(this).parents('li:eq(1)').addClass('active').siblings().removeClass('active');
 			e.preventDefault();
 		} else {
 			$('.tabs ' + currentAttrValue).show().siblings().hide();
	        $(this).parent('li').addClass('active').siblings().removeClass('active');
	        e.preventDefault();
 		}
    });
});;function showManagePanel () {
	var shadowLayer = document.getElementById('shadow-layer'),
		manageBlock = document.getElementById('manage-block');
	
	shadowLayer.style.display = 'block';
	manageBlock.style.display = 'block';
}

function hideManagePanel () {
	var shadowLayer = document.getElementById('shadow-layer'),
		manageBlock = document.getElementById('manage-block');
	shadowLayer.style.display = 'none';
	manageBlock.style.display = 'none';
}

function paintToolsPanelCategories() {
	var catTools, button, placeholder;

	placeholder = createPlaceholderToolsPanel('ul','outlays-list-tools-panel-ul', 'outlays-list-tools-panel');

	catTools = document.getElementById('outlays-list-tools-panel-ul');
	for (var i = 0; i < dataCategories.categories.outlays.length; i++) {
		var li = document.createElement('li');
			li.textContent = dataCategories.categories.outlays[i];
		
		
		button = createDeleteCategoryButton(dataCategories.categories.outlays[i], 'outlays');
		li.appendChild(button);

		catTools.appendChild(li);
	}
	//button = createButton('add-outlay-category-button', 'btn-add-category', 'Add outlay category', 'getCategoryInputFieldOutlay(this)');
	//catTools.appendChild(button);

	placeholder = createPlaceholderToolsPanel('ul','incomes-list-tools-panel-ul', 'incomes-list-tools-panel');
	catTools = document.getElementById('incomes-list-tools-panel-ul');
	for (var i = 0; i < dataCategories.categories.incomes.length; i++) {
		var li = document.createElement('li');
			li.textContent = dataCategories.categories.incomes[i];
		

		button = createDeleteCategoryButton(dataCategories.categories.incomes[i], 'incomes');
		li.appendChild(button);

		catTools.appendChild(li);
	}
	//button = createButton('add-income-category-button', 'btn-add-category', 'Add income category', 'getCategoryInputFieldIncome(this)');
	//catTools.appendChild(button);
}

function createPlaceholderToolsPanel (elementTag, id, place) {
	var element = document.getElementById(id);
	
	if (element !== null){
		element.remove();

		var placeholder = document.createElement(elementTag);
		placeholder.id = id;
		
		document.getElementById(place).appendChild(placeholder);
	} else {
		var placeholder = document.createElement(elementTag);
		placeholder.id = id;
		
		document.getElementById(place).appendChild(placeholder);
	}
}

function createDeleteCategoryButton (id, type) {
	var button = document.createElement('input');

	button.type = 'button';
	button.id = id;
	button.className = 'btn-delete';
	button.value = 'Delete';
	if (type === 'incomes') {
		button.onclick = removeIncomeCategory;
	} else {
		button.onclick = removeOutlayCategory;
	}
	return button
}

function paintingAddCategoryField (type, placeholder) {
	var field = createInputLabel('New '+ type + 'category name: ' , '', 'inp-cat');
	placeholder.parentNode.appendChild(field);
}

function paintToolsPanelDaily (type) {
	var key, placeholder;

	if (type === 'incomes') {
		createPlaceholderToolsPanel('ul','daily-incomes-tools-panel-ul', 'daily-incomes-tools-panel');
		for (key in dataDayly[todayKeyWord].incomes) {
			createDailyListElement ('incomes', 'daily-incomes-tools-panel-ul', dataDayly[todayKeyWord].incomes[key], key);
		}
	} else if (type === 'outlays') {
		createPlaceholderToolsPanel('ul','daily-outlays-tools-panel-ul', 'daily-outlays-tools-panel');
		for (key in dataDayly[todayKeyWord].outlays) {
			createDailyListElement ('outlays', 'daily-outlays-tools-panel-ul', dataDayly[todayKeyWord].outlays[key], key);
		}
	}
}

function createDailyListElement (type, placeholderId, value, keyForButton) {
	var placeholder, li, span, button;

	placeholder = document.getElementById(placeholderId);
	li = document.createElement('li');

	span = document.createElement('span');
	span.className = 'text-tools-panel-list';
	span.textContent = 'Category: ' + value.cat + '; Cost: ' + (value.cost) + ' uah';

	button = createRemoveButton(key, 'deleteDailyDataButton(this)', type, value.cat, value.cost);
	li.appendChild(span);
	li.appendChild(button);
	placeholder.appendChild(li);
}

	function createRemoveButton (id, fctName, type, cat, cost) {
		var btn = document.createElement('input');
		btn.type = 'button';
		btn.value = 'Delete';
		btn.id = id;
		
		if (fctName) {
			btn.setAttribute('onclick', fctName);			
		}

		btn.setAttribute('data-cat', cat);
		btn.setAttribute('data-cost', cost);
		btn.setAttribute('data-type', type);

		return btn
	}

function repaintDailyIncomesPanelTools () {
	createPlaceholderToolsPanel('ul','daily-incomes-tools-panel-ul', 'daily-incomes-tools-panel');
}

function repaintDailyOutlaysPanelTools () {
	createPlaceholderToolsPanel('ul','daily-outlays-tools-panel-ul', 'daily-outlays-tools-panel');
}

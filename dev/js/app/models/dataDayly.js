var date = getDate();
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
}
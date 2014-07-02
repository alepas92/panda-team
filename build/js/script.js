;function LS () {}

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
};var date = getDate();
var todayKeyWord = 'day' + date.day + '_' + date.month + '_' + date.year;


// Categories
function Data () {
	this.categories = {};
	this.regular = {};
	this.forecast = {};
	this[todayKeyWord] = {};
	this[todayKeyWord + '_statistic'] = {};
	this.totalStatistic = {};
}
	Data.prototype.getCategories = function () {
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








	Data.prototype.getRegular = function () {
		if (!localStorage.regular) {
			var defaultRegular = {
				'day' : {
					'outlays' : {
						'out0' : {
							'cat' : 'transport',
							'cost' : 500
						}
					},
					'incomes' : {}
				},

				'month' : {
					'outlays' : {},
					'incomes' : {
						'inc0' : {
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




	Data.prototype.getForecast = function () {
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

	Data.prototype.getDayly = function () {
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

	Data.prototype.getDaylyStatistic = function () {
		var keyWord = todayKeyWord + '_statistic';
		if (!localStorage[keyWord]){
			var defaultDaylyStatistic = {
				'outlays' : {},
				'incomes' : {}
			};

			LS.set(keyWord, defaultDaylyStatistic);
			this[keyWord] = LS.get(keyWord, defaultDaylyStatistic);
		} else {
			this[keyWord] = LS.get(keyWord);
		}
	};

	Data.prototype.getTotalStatistic = function () {
		if (!localStorage.totalStatistic){
			var defaultTotalStatistic = {
				'currentBalance' : 0,
				'currentOutlays' : 0,
				'currentIncomes' : 0
			};

			defaultTotalStatistic['month_' + date.month] = {
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

// Roman Volkov

// set category outlays and incomes 
	Data.prototype.setCategory = function(category, type){
		var setCat = LS.get('categories');
		if (setCat[type].indexOf(category) == (-1)) {
			setCat[type].push(category);

			LS.set('categories', setCat)
		} else{
			return false
		}; 
		this.outlayCat = LS.get('categories');
	}

// remove category outlays and incomes
	Data.prototype.removeCategory = function(category, type){
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
		this[type] = LS.get('categories');
	}
// set regulars outlays and incomes
	Data.prototype.setRegular = function(category, cost, time, type) {
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
	Data.prototype.removeRegular = function(category, cost, time, type) {
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

// set forecast
	Data.prototype.setForecast = function(category, cost, time, type) {
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
	Data.prototype.removeForecast = function(category, cost, time, type) {
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
		this.regular = LS.get('forecast');
		this.key = ind; //                                    !!! - key for change value if it needs
	}

// set dayly outlays and incomes
	Data.prototype.setDaily = function(keyWord, category, cost, type) {
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

	Data.prototype.removeDaily = function(keyWord, category, cost, type) {
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
		this.regular = LS.get(keyWord);
	}


// set dayly Statistick outlays and incomes
	Data.prototype.setDailyStat = function(keyWord, category, cost, type) {
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
	Data.prototype.removeDailyStat = function(keyWord, category, cost, type) {
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
		this.regular = LS.get(keyW);
	}


// set total statistic
	
	Data.prototype.setTotalCurrentStat = function(type, cost) {
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
	// для setTotalCurrentStat не має смислу писати метод видалення - ці значення можна просто перезаписати

	// month and year ststistic
	Data.prototype.setTotalTimeStat = function(category, cost, time, numberTime, type) {
		var totalTime = LS.get('totalStatistic'),
			buffObj = {},
			count = 0,
			keyWordL = '',
			numbTime = numberTime;


		if (numberTime < 10) {
			numbTime = '0' + numbTime;
		};

		if (totalTime[time + '_' + numbTime]) {
			console.log('this day is')
		} else {
			if (time == 'month') {
				totalTime['month_' + numbTime] = {
					'outlays' : {},
					'incomes' : {}
				};
			};
			if (time == 'year') {
				totalTime['year_' + numbTime] = {
					'outlays' : {},
					'incomes' : {}
				};
			};
		}

		if (type == "outlays") {
			keyWordL = 'out';
		} else if (type == "incomes") {
			keyWordL = 'inc';
		};

		for (key in totalTime[time + '_' + numbTime][type]) {
			count++;
		}

		buffObj['cat'] = category;
		buffObj['cost'] = cost;	
		console.log(totalTime[time + '_' + numbTime])
		totalTime[time + '_' + numbTime][type]['' + keyWordL + count + '_' + Math.floor((Math.random() * 100) + 1)] = buffObj;
		
		LS.set('totalStatistic', totalTime);
		this.totalStatistic = LS.get('totalStatistic');
	}
	Data.prototype.remTotalTimaStat = function(category, cost, time, numberTime, type) {
		var removeFor = LS.get('totalStatistic'),
			ind,
			numbTime = numberTime;

		if (numberTime < 10) {
			numbTime = '0' + numbTime;
		};

		if (totalTime[time + '_' + numbTime]) {
			for (key in removeFor[time + '_' + numbTime][type]) {
				if (removeFor[time + '_' + numbTime][type][key]['cat'] == category && removeFor[time + '_' + numbTime][type][key]['cost'] == cost) {
					ind = key;
				}
			}
				
			if (ind) {
				delete removeFor[time + '_' + numbTime][type][ind]
			} else {
				console.log('in your data are some mistake'); // only for debugging
			}

			LS.set('totalStatistic', removeFor);
			this.regular = LS.get('totalStatistic'); 
		} else {
			console.log('in your data are some mistake')
		}
		                
	}
// LS.clear();

var data = new Data();
data.getCategories();
data.getRegular();
data.getForecast();
data.getDaylyStatistic();
data.getDayly();
data.getTotalStatistic();



// set
console.log( localStorage.categories);
// data.setCategory('car', 'outlays');
// data.setCategory('car', 'incomes');
// data.removeCategory('girls111', 'incomes');
// data.setRegular('sex1', '250', 'year', 'outlays');
// data.removeRegular('sex1', '250', 'day', 'outlays');
// data.setForecast('salary', '2550', 'month', 'incomes')
// data.setForecast('car', '250', 'month', 'incomes')
// data.setForecast('hobbies', '250', 'month', 'outlays')
// data.setForecast('eating', '250', 'month', 'outlays')
// data.setForecast('transport', '250', 'month', 'outlays')
// data.setForecast('girlsw', '250', 'month', 'outlays')
// data.setForecast('car', '250', 'month', 'outlays')

// data.setForecast('salary', '2550', 'year', 'incomes')
// data.setForecast('car', '250', 'year', 'incomes')
// data.setForecast('hobbies', '250', 'year', 'outlays')
// data.setForecast('eating', '250', 'year', 'outlays')
// data.setForecast('transport', '250', 'year', 'outlays')
// data.setForecast('girlsw', '250', 'year', 'outlays')
// data.setForecast('car', '250', 'year', 'outlays')
// console.log(LS.get(todayKeyWord))
// data.removeForecast('car', '250', 'year', 'outlays');
// data.setDaily(todayKeyWord, 'habar_1', '260', 'incomes')
// data.removeDaily(todayKeyWord, 'habar', '250', 'incomes')
//data.setDailyStat(todayKeyWord, 'habar1111z111', '250', 'incomes')
// data.removeDailyStat(todayKeyWord, 'habar', '250', 'outlays')
// data.setTotalCurrentStat('incomes', 700)
data.setTotalTimeStat('play', 50000, 'month', 6, 'incomes')
// data.remTotalTimaStat('spaday', 500, 'year', 'incomes')
console.log(LS.get(todayKeyWord+'_statistic'))
console.log(data);
console.log(LS.get('regular'))
console.log(LS.get('forecast'))


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
};//
// Datalist painting painting
//
function datalistPainting (category) {
	var datalist = document.createElement("datalist");
		datalist.id = category + "CategoriesDatalist",
		categories = data.categories[category];

	for (var i = 0; i < categories.length; i++) {
		var option = document.createElement("option");
		option.value = categories[i];
		datalist.appendChild(option);
	}
	document.body.appendChild(datalist);
}

datalistPainting('outlays');
datalistPainting('incomes');;
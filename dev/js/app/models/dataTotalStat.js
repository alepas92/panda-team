function DataTotalStat () {
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

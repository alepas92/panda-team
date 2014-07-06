function DataForecast () {
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


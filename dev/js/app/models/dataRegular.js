function DataRegular () {
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

function paintIncOut(dayData){
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
}
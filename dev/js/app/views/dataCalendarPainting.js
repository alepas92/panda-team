function paintIncOut(dayData){
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
}
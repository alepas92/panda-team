function managePanelPainting (type) {
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

}
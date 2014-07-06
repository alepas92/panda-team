function managePanelPainting (type) {

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
		}
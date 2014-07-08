function showManagePanel () {
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
		
		var span = document.createElement('span');
			span.textContent = dataCategories.categories.outlays[i];
			span.className = 'text-tools-panel-list';

		li.appendChild(span);

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
		
		var span = document.createElement('span');
			span.textContent = dataCategories.categories.incomes[i];
			span.className = 'text-tools-panel-list';

		li.appendChild(span);

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
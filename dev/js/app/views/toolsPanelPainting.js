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

function paintManagePanelCategories() {
	var catTools, button, placeholder;

	placeholder = createPlaceholderToolsPanel('ul','outlays-list-tools-panel-ul', 'outlays-list-tools-panel');

	catTools = document.getElementById('outlays-list-tools-panel-ul');
	for (var i = 0; i < dataCategories.categories.outlays.length; i++) {
		var li = document.createElement('li');
			li.textContent = dataCategories.categories.outlays[i];
		
		
		button = createDeleteCategoryButton(dataCategories.categories.outlays[i], 'outlays');
		li.appendChild(button);

		catTools.appendChild(li);
	}
	placeholder = createPlaceholderToolsPanel('ul','incomes-list-tools-panel-ul', 'incomes-list-tools-panel');

	catTools = document.getElementById('incomes-list-tools-panel-ul');
	for (var i = 0; i < dataCategories.categories.incomes.length; i++) {
		var li = document.createElement('li');
			li.textContent = dataCategories.categories.incomes[i];
		

		button = createDeleteCategoryButton(dataCategories.categories.incomes[i], 'incomes');
		li.appendChild(button);

		catTools.appendChild(li);
	}
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
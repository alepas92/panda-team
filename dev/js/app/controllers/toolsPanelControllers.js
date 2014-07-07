document.getElementsByClassName("manage-button")[0].onclick = function() {
	showManagePanel();
	paintToolsPanelCategories();
	paintToolsPanelDaily('incomes');
	paintToolsPanelDaily('outlays');
}

document.getElementById("close-manage-block").onclick = function() {
	hideManagePanel();
}


function removeOutlayCategory () { 
	dataCategories.removeCategory(this.id, 'outlays');
	this.parentNode.remove();
}

function removeIncomeCategory () {
	dataCategories.removeCategory(this.id, 'incomes');
	this.parentNode.remove();
}

function getCategoryInputFieldOutlay (btn) {	
	paintingAddCategoryField('outlay', btn);
}

function getCategoryInputFieldIncome () {
	alert('click');
}

function deleteDailyDataButton (button) {
	var cat = button.getAttribute('data-cat'),
	cost = button.getAttribute('data-cost'),
	type = button.getAttribute('data-type');
	
	console.log(todayKeyWord, cat, cost, type);
	dataDayly.removeDaily(todayKeyWord, cat, cost, type);

	if (type === 'outlays') {
		repaintDailyOutlaysPanelTools ()
	} else {
		repaintDailyIncomesPanelTools ()
	}
}
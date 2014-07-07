document.getElementsByClassName("manage-button")[0].onclick = function() {
	showManagePanel();
	paintManagePanelCategories();
}

document.getElementById("close-manage-block").onclick = function() {
	hideManagePanel();
}


function removeOutlayCategory() { 
	dataCategories.removeCategory(this.id, 'outlays');
	this.parentNode.remove();
}

function removeIncomeCategory() {
	dataCategories.removeCategory(this.id, 'incomes');
	this.parentNode.remove();
}
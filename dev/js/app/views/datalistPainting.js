function datalistPainting (category) {
	var datalist = document.createElement('datalist');
		datalist.id = category + 'CategoriesDatalist',
		categories = data.categories[category];

	for (var i = 0; i < categories.length; i++) {
		var option = document.createElement('option');
		option.value = categories[i];
		datalist.appendChild(option);
	}
	document.body.appendChild(datalist);
}

datalistPainting('outlays');
datalistPainting('incomes');

function optionPainting (category, value) {
	var datalist = document.getElementById(category + 'CategoriesDatalist');
	
	var option = document.createElement('option');
	option.value = value;

	datalist.appendChild(option);
}
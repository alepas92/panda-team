// Парсення поточної дати

function parseCurrentDate() {
	var currentDate = getDate();
	parsedDateValue = "day" + currentDate.day + "_" + currentDate.month + "_" + currentDate.year;
	return parsedDateValue; 
};

// Рендерінг на сторінку
function renderingData(currentDate) {
	document.getElementById("daily-total-incomes").innerHTML = dailyTotalIncomes(currentDate);
	document.getElementById("daily-total-outlays").innerHTML = dailyTotalOutlays(currentDate);
	dailyOutlaysByCategories(currentDate);
	dailyIncomesByCategories(currentDate);
	weeklyOutlaysStatistics();
	weeklyIncomesStatistics();
	weeklyOutlaysStatisticsByCategories();
	weeklyIncomesStatisticsByCategories();
	monthlyOutlaysStatistics(currentDate);
	monthlyIncomesStatistics(currentDate);
	monthlyOutlaysStatisticsByCategories(currentDate);
	monthlyIncomesStatisticsByCategories(currentDate);

}

// Встановлення поточних даних по замовчуванню
(function setCurrentDayTotalInfo() {
	var currentDate = parseCurrentDate();
	renderingData(currentDate);
})();

//Загальні надходження за вказаний день
function dailyTotalIncomes(selectedDate) {
	var currentDay = LS.get(selectedDate),
		currentDayIncomes = currentDay.incomes;
	var property, totalIncomesValue = 0;
	for (property in currentDayIncomes) {
		totalIncomesValue += parseInt(currentDayIncomes[property].cost);
	}
	return totalIncomesValue;
};

//Загальні витрати за вказаний день
function dailyTotalOutlays(selectedDate) {
	var currentDay = LS.get(selectedDate),
		currentDayOutlays = currentDay.outlays;
	var property, totalOutlaysValue = 0;
	for (property in currentDayOutlays) {
		totalOutlaysValue += parseInt(currentDayOutlays[property].cost);
	}
	return totalOutlaysValue;
};

//Витрати по категоріям з рендером
function dailyOutlaysByCategories(selectedDate) {
	var currentDay = LS.get(selectedDate),
		currentDayOutlays = currentDay.outlays;
		allCategories = LS.get("categories"),
		allOutlaysCategories = allCategories.outlays,
		fieldSetInto = document.getElementById("daily-statistic-by-categories-outlays");
		fieldSetInto.innerHTML = "";
	var category = 0, property, totalCatOutlayValue = 0, className = "calculated-data";
	for (; category < allOutlaysCategories.length; category++) {
		for (property in currentDayOutlays) {
			if ((currentDayOutlays[property].cat == allOutlaysCategories[category]) && (currentDayOutlays[property].cost != "")) {
				totalCatOutlayValue += parseInt(currentDayOutlays[property].cost);
			}
			if (totalCatOutlayValue == "undefined") {
				totalCatOutlayValue = 0;
			}
		}
		fieldSetInto.innerHTML += allOutlaysCategories[category] + "<span class=" + className + ">" + totalCatOutlayValue +"</span></br>";
		totalCatOutlayValue = 0;
	}
}

//Прибутки по категоріям з рендером
function dailyIncomesByCategories(selectedDate) {
	var currentDay = LS.get(selectedDate),
		currentDayIncomes = currentDay.incomes;
		allCategories = LS.get("categories"),
		allIncomesCategories = allCategories.incomes,
		fieldSetInto = document.getElementById("daily-statistic-by-categories-incomes");
		fieldSetInto.innerHTML = "";
	var category = 0, property, totalCatIncomeValue = 0, className = "calculated-data";
	for (; category < allIncomesCategories.length; category++) {
		for (property in currentDayIncomes) {
			if ((currentDayIncomes[property].cat == allIncomesCategories[category]) && (currentDayIncomes[property].cost != "")) {
				totalCatIncomeValue += parseInt(currentDayIncomes[property].cost);
			}
			if (totalCatIncomeValue == "undefined") {
				totalCatIncomeValue = 0;
			}
		}
		fieldSetInto.innerHTML += allIncomesCategories[category] + "<span class=" + className + ">" + totalCatIncomeValue +"</span></br>";
		totalCatIncomeValue = 0;
	}
}

//Витрати по категоріям без рендера з занесенням в масив
function dailyOutlaysByCategoriesNoRender(selectedDate) {
	var currentDay = LS.get(selectedDate),
		currentDayOutlays = currentDay.outlays;
		allCategories = LS.get("categories"),
		allOutlaysCategories = allCategories.outlays,
		allDailyData = [];
	var category = 0, property, totalCatOutlayValue = 0, className = "calculated-data";
	for (; category < allOutlaysCategories.length; category++) {
		for (property in currentDayOutlays) {
			if ((currentDayOutlays[property].cat == allOutlaysCategories[category]) && (currentDayOutlays[property].cost != "")) {
				totalCatOutlayValue += parseInt(currentDayOutlays[property].cost);
			}
			if (totalCatOutlayValue == "undefined") {
				totalCatOutlayValue = 0;
			}
		}
		allDailyData.push([allOutlaysCategories[category], totalCatOutlayValue]);
		totalCatOutlayValue = 0;
	}
	return allDailyData;
}

//Прибутки по категоріям без рендера з занесенням в масив
function dailyIncomesByCategoriesNoRender(selectedDate) {
	var currentDay = LS.get(selectedDate),
		currentDayIncomes = currentDay.incomes;
		allCategories = LS.get("categories"),
		allIncomesCategories = allCategories.incomes, 
		allDailyData = [];
	var category = 0, property, totalCatIncomeValue = 0, className = "calculated-data";
	for (; category < allIncomesCategories.length; category++) {
		for (property in currentDayIncomes) {
			if ((currentDayIncomes[property].cat == allIncomesCategories[category]) && (currentDayIncomes[property].cost != "")) {
				totalCatIncomeValue += parseInt(currentDayIncomes[property].cost);
			}
			if (totalCatIncomeValue == "undefined") {
				totalCatIncomeValue = 0;
			}
		}
		allDailyData.push([allIncomesCategories[category],totalCatIncomeValue]);
		totalCatIncomeValue = 0;
	}
	return allDailyData;
}

//Загальна статистика за останні сім днів місяця
function weeklyOutlaysStatistics() {
	var currentDate = getDate(),
		day = parseInt(currentDate.day),
		dates = [], datesValue, weeklyTotalOutlays = 0;
		document.getElementById("weekly-total-outlays").innerHTML = "";
	if (day >= 7) {
		for (var counter = 0; counter < 7; counter++, day--) {
			datesValue = "day0" + day + "_" + currentDate.month + "_" + currentDate.year;
			dates.push(datesValue);
		}
		for (var counter = 0; counter < dates.length; counter++) {
			if (dailyTotalOutlays(dates[counter])) {
				weeklyTotalOutlays += dailyTotalOutlays(dates[counter]);
			}
		}
		document.getElementById("weekly-total-outlays").innerHTML += weeklyTotalOutlays;
	} else {
		document.getElementById("weekly-total-outlays").innerHTML += "Unavailable";
	}
}

function weeklyIncomesStatistics() {
	var currentDate = getDate(),
		day = parseInt(currentDate.day),
		dates = [], datesValue, weeklyTotalIncomes = 0;
		document.getElementById("weekly-total-incomes").innerHTML = "";
	if (day >= 7) {
		for (var counter = 0; counter < 7; counter++, day--) {
			datesValue = "day0" + day + "_" + currentDate.month + "_" + currentDate.year;
			dates.push(datesValue);
		}
		for (var counter = 0; counter < dates.length; counter++) {
			if (dailyTotalIncomes(dates[counter])) {
				weeklyTotalIncomes += dailyTotalIncomes(dates[counter]);
			}
		}
		document.getElementById("weekly-total-incomes").innerHTML += weeklyTotalIncomes;
	} else {
		document.getElementById("weekly-total-incomes").innerHTML += "Unavailable";
	}
}

//Статистика за сім днів по категоріям
function weeklyOutlaysStatisticsByCategories() {
	var currentDate = getDate(),
		day = parseInt(currentDate.day),
		dates = [], datesValue, weeklyTotalOutlayByCategory = 0, 
		allDailyCategoryStatistics = [], className = "calculated-data";
		document.getElementById("weekly-statistic-by-categories-outlays").innerHTML = "";
	if (day >= 7) {
		for (var counter = 0; counter < 7; counter++, day--) {
			datesValue = "day0" + day + "_" + currentDate.month + "_" + currentDate.year;
			dates.push(datesValue);
		}
	}
	for (var counter = 0; counter < dates.length; counter++) {
		allDailyCategoryStatistics.push(dailyOutlaysByCategoriesNoRender(dates[counter]));
	}	
	console.log(allDailyCategoryStatistics);
	for (var categCounter = 0; categCounter < allDailyCategoryStatistics[0].length; categCounter++) {
		for (var dayCounter = 0; dayCounter < allDailyCategoryStatistics.length; dayCounter++) {
			weeklyTotalOutlayByCategory += allDailyCategoryStatistics[dayCounter][categCounter][1];
		}
		document.getElementById("weekly-statistic-by-categories-outlays").innerHTML += allDailyCategoryStatistics[0][categCounter][0] + "<span class=" + className + ">" + weeklyTotalOutlayByCategory +"</span></br>";
		weeklyTotalOutlayByCategory = 0;
	}
}

function weeklyIncomesStatisticsByCategories() {
	var currentDate = getDate(),
		day = parseInt(currentDate.day),
		dates = [], datesValue, weeklyTotalIncomeByCategory = 0, 
		allDailyCategoryStatistics = [], className = "calculated-data";
		document.getElementById("weekly-statistic-by-categories-incomes").innerHTML = "";
	if (day >= 7) {
		for (var counter = 0; counter < 7; counter++, day--) {
			datesValue = "day0" + day + "_" + currentDate.month + "_" + currentDate.year;
			dates.push(datesValue);
		}
	}
	for (var counter = 0; counter < dates.length; counter++) {
		allDailyCategoryStatistics.push(dailyIncomesByCategoriesNoRender(dates[counter]));
	}	
	console.log(allDailyCategoryStatistics);
	for (var categCounter = 0; categCounter < allDailyCategoryStatistics[0].length; categCounter++) {
		for (var dayCounter = 0; dayCounter < allDailyCategoryStatistics.length; dayCounter++) {
			weeklyTotalIncomeByCategory += allDailyCategoryStatistics[dayCounter][categCounter][1];
		}
		document.getElementById("weekly-statistic-by-categories-incomes").innerHTML += allDailyCategoryStatistics[0][categCounter][0] + "<span class=" + className + ">" + weeklyTotalIncomeByCategory +"</span></br>";
		weeklyTotalIncomeByCategory = 0;
	}
}

//Статистика від початку місяця і до сьогодні
function monthlyOutlaysStatistics(currentDate) {
	var currentDate = currentDate,
		day = 31, splitCurrentDate = currentDate.split("_"),
		dates = [], datesValue, monthlyTotalOutlays = 0;
		document.getElementById("monthly-total-outlays").innerHTML = "";
		for (var counter = 0; counter < day; counter++) {
			datesValue = "day0" + (counter+1) + "_" + splitCurrentDate[1] + "_" + splitCurrentDate[2];
			dates.push(datesValue);
		}
		for (var counter = 0; counter < dates.length; counter++) {
			if (dailyTotalOutlays(dates[counter])) {
				monthlyTotalOutlays += dailyTotalOutlays(dates[counter]);
			}
		}
		document.getElementById("monthly-total-outlays").innerHTML += monthlyTotalOutlays;
}

function monthlyIncomesStatistics(currentDate) {
	var currentDate = currentDate,
		day = 31, splitCurrentDate = currentDate.split("_"),
		dates = [], datesValue, monthlyTotalIncomes = 0;
		document.getElementById("monthly-total-incomes").innerHTML = "";
		for (var counter = 0; counter < day; counter++) {
			datesValue = "day0" + (counter+1) + "_" + splitCurrentDate[1] + "_" + splitCurrentDate[2];
			dates.push(datesValue);
		}
		for (var counter = 0; counter < dates.length; counter++) {
			if (dailyTotalIncomes(dates[counter])) {
				monthlyTotalIncomes += dailyTotalIncomes(dates[counter]);
			}
		}
		document.getElementById("monthly-total-incomes").innerHTML += monthlyTotalIncomes;
}

//Статистика від початку місяця і до сьогодні по категоріям
function monthlyOutlaysStatisticsByCategories(currentDate) {
	var currentDate = currentDate,
		day = 31, splitCurrentDate = currentDate.split("_"),
		dates = [], datesValue, monthlyTotalOutlayByCategory = 0, 
		allDailyCategoryStatistics = [], className = "calculated-data";
		document.getElementById("monthly-statistic-by-categories-outlays").innerHTML = "";
	for (var counter = 0; counter < day; counter++) {
		datesValue = "day0" + (counter+1) + "_" + splitCurrentDate[1] + "_" + splitCurrentDate[2];
		dates.push(datesValue);
	}
	for (var counter = 0; counter < dates.length; counter++) {
		allDailyCategoryStatistics.push(dailyOutlaysByCategoriesNoRender(dates[counter]));
	}	
	for (var categCounter = 0; categCounter < allDailyCategoryStatistics[0].length; categCounter++) {
		for (var dayCounter = 0; dayCounter < allDailyCategoryStatistics.length; dayCounter++) {
			monthlyTotalOutlayByCategory += allDailyCategoryStatistics[dayCounter][categCounter][1];
		}
		document.getElementById("monthly-statistic-by-categories-outlays").innerHTML += allDailyCategoryStatistics[0][categCounter][0] + "<span class=" + className + ">" + monthlyTotalOutlayByCategory +"</span></br>";
		monthlyTotalOutlayByCategory = 0;
	}
}

function monthlyIncomesStatisticsByCategories(currentDate) {
	var currentDate = currentDate,
		day = 31, splitCurrentDate = currentDate.split("_"),
		dates = [], datesValue, monthlyTotalIncomeByCategory = 0, 
		allDailyCategoryStatistics = [], className = "calculated-data";
		document.getElementById("monthly-statistic-by-categories-incomes").innerHTML = "";
	for (var counter = 0; counter < day; counter++) {
		datesValue = "day0" + (counter+1) + "_" + splitCurrentDate[1] + "_" + splitCurrentDate[2];
		dates.push(datesValue);
	}
	for (var counter = 0; counter < dates.length; counter++) {
		allDailyCategoryStatistics.push(dailyIncomesByCategoriesNoRender(dates[counter]));
	}	
	console.log(allDailyCategoryStatistics);
	for (var categCounter = 0; categCounter < allDailyCategoryStatistics[0].length; categCounter++) {
		for (var dayCounter = 0; dayCounter < allDailyCategoryStatistics.length; dayCounter++) {
			monthlyTotalIncomeByCategory += allDailyCategoryStatistics[dayCounter][categCounter][1];
		}
		document.getElementById("monthly-statistic-by-categories-incomes").innerHTML += allDailyCategoryStatistics[0][categCounter][0] + "<span class=" + className + ">" + monthlyTotalIncomeByCategory +"</span></br>";
		monthlyTotalIncomeByCategory = 0;
	}
}



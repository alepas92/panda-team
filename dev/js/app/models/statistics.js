function parseCurrentDate() {
	var currentDate = getDate();
	parsedDateValue = "day" + currentDate.day + "_" + currentDate.month + "_" + currentDate.year;
	console.log(parsedDateValue); 
};


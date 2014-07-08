function changeCurrentBalance(type, cost) {
	var curBalance = LS.get('totalStatistic');
	var newBalance;
	if (type == 'incomes') {
		newBalance = parseFloat(curBalance.currentBalance) + parseFloat(cost);
		// newBalance = 1000;
		setNewBalance(curBalance, newBalance)
	} else if (type == 'outlays') {
		newBalance = parseFloat(curBalance.currentBalance) - parseFloat(cost);
		setNewBalance(curBalance, newBalance)
		// newBalance = 1000;
	}
}

function setNewBalance(obj, val) {
	var newVal = val.toFixed(2);
	obj.currentBalance = newVal;
	LS.set('totalStatistic', obj);
	dataTotalStat.setTotalCurrentStat('balance', newVal);
	var enterPVal = document.getElementById('currBalanceCont');
	console.log(newVal);
	enterPVal.innerHTML = newVal;
}
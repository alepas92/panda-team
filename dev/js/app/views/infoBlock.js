window.onload = function CheckCurrentBalance() {
	var infoBlock = document.getElementsByClassName("info-block")[0];
	if (dataTotalStat.totalStatistic.currentBalance == 0) {
		infoBlock.style.display = "block";
		infoBlock.innerHTML += "Hi! I'm Panda-economist. First of all, set your current balance. Thank you!";
		document.getElementById("close-info-block").onclick = closeInfoBlock;
	}
}

var closeInfoBlock = function closeInfoBlock() {
		var infoBlock = document.getElementsByClassName("info-block")[0];
		infoBlock.style.display = "none";
}

var checkInfoBlock = function checkInfoBlock() {
	var infoBlock = document.getElementsByClassName("info-block")[0];
	if (infoBlock.style.display == "block") {
		setTimeout(closeInfoBlock, 4000);
	}
}

setInterval(checkInfoBlock, 1000);

function appearInfoBlock() {
	var infoBlock = document.getElementsByClassName("info-block")[0];
	infoBlock.style.display = "block";
	infoBlock.innerHTML = "	<header><h3>New message</h3></header>Information successfully updated!";
	checkInfoBlock();
}



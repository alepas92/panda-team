document.getElementsByClassName("manage-button")[0].onclick = function() {
	var shadowLayer = document.getElementById("shadow-layer"),
		manageBlock = document.getElementById("manage-block");
	shadowLayer.style.display = "block";
	manageBlock.style.display = "block";
}

document.getElementById("close-manage-block").onclick = function() {
	var shadowLayer = document.getElementById("shadow-layer"),
		manageBlock = document.getElementById("manage-block");
	shadowLayer.style.display = "none";
	manageBlock.style.display = "none";
}


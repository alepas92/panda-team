window.onscroll = function() {
	var leftNavBar = document.getElementsByClassName("leftNavBar")[0];
	if (window.pageYOffset > 96) {
		leftNavBar.style.display = "block";
	} else {
		leftNavBar.style.display = "none";
	}
}
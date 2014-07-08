function callendarDayClick() {
    var tableA = document.getElementsByTagName('tbody')[0];
    var tableLink = tableA.getElementsByTagName('span');
    for (var j = 0; j < tableLink.length; j++) {
        tableLink[j].classList.remove('myCssClass')
    };
    var k = this;
    console.log(k.firstChild.getAttribute('data-day'))
    k.firstChild.classList.add('myCssClass');
    paintIncOut(k.firstChild.getAttribute('data-day'));
    renderingData(k.firstChild.getAttribute('data-day'));
}

function callendarMonthClick() {
    console.log(this.getAttribute('data-month-work'))
}

function callendarYearClick() {
    console.log(this.getAttribute('data-year-work'))
}
function Calendar2(id, year, month) {
    var Dlast = new Date(year,month+1,0).getDate(),
        D = new Date(year,month,Dlast),
        DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
        calendar = '<tr>',
        month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        console.log(D.getMonth())
        var numbMonth = D.getMonth()+1;
        if (numbMonth < 10) {
            numbMonth = '0' + numbMonth;
        };
    if (DNfirst != 0) {
        for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
    }else{
        for(var  i = 0; i < 6; i++) calendar += '<td>';
    }
    for(var  i = 1; i <= Dlast; i++) {
        var k = i;
        if (i < 10) {
            k = '0' + i;
        };
        if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
            calendar += '<td class="today"><span data-day="' + 'day' + k + '_' + numbMonth + '_' + D.getFullYear() +'">' + i;
        }else{
            calendar += '<td><span data-day="' + 'day' + k + '_' + numbMonth + '_' + D.getFullYear() +'">' + i;
        }
        if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
            calendar += '<tr>';
        }
    }

    for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
    document.querySelector('#'+id+' tbody').innerHTML = calendar;
    document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()];
    document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
    document.querySelector('#'+id+' thead td:nth-child(4)').innerHTML = D.getFullYear();
    document.querySelector('#'+id+' thead td:nth-child(4)').dataset.month = D.getMonth();
    document.querySelector('#'+id+' thead td:nth-child(4)').dataset.year = D.getFullYear();


    document.querySelector('#'+id+' thead td:nth-child(2)').dataset.monthWork = 'month_' + numbMonth + '_' + D.getFullYear();
    document.querySelector('#'+id+' thead td:nth-child(4)').dataset.yearWork = 'year_' + D.getFullYear();
    if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
        document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
    }
    var tableA = document.getElementsByTagName('tbody')[0];
    var tableLink = tableA.getElementsByTagName('td');
    for (var i = 0; i < tableLink.length; i++) {
        tableLink[i].onclick = callendarDayClick;
    };



    var tableMonth = document.getElementsByTagName('thead')[0].getElementsByTagName('td')[1];
    tableMonth.onclick = callendarMonthClick;
    var tableYear = document.getElementsByTagName('thead')[0].getElementsByTagName('td')[3];
    tableYear.onclick = callendarYearClick;
}

Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());

// переключатель минус месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
}
// переключатель плюс месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
}






$('#manage-balance .btn-add').click(function() {	
	var cost = $('#manage-balance .inp-cat').val();
	if (cost) {
		dataTotalStat.setTotalCurrentStat('balance', cost );
	} else{
		console.log('you have some problem with data')
	};
	$('#manage-balance .inp-cat').val('');
	$('#curBalance').html('Your current balance:' +cost);
});
$(function(){

	var balance=dataTotalStat.totalStatistic['currentBalance'];
	if(balance!==null)
		$('#curBalance').html('Your current balance:' +balance);
})
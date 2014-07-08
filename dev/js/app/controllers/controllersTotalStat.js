
$('#manage-balance .btn-add').click(function() {	
	var cost = $('#manage-balance .inp-cos').val();
	if (cost && isNonNegative(cost)) {
		dataTotalStat.setTotalCurrentStat('balance', cost );
		$('#curBalance').html('Your current balance:' +cost);
			appearInfoBlock();
		$('#manage-balance .inp-cos').val('');
	} else{

		console.log('you have some problem with data');
		appearInfoBlock("Invalid balance value");

	};
	
	

});
$(function(){

	var balance=dataTotalStat.totalStatistic['currentBalance'];
	if(balance!==null)
		$('#curBalance').html('Your current balance:' +balance);
})
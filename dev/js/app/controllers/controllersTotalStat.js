
$('#manage-balance .btn-add').click(function() {	
	var cost = $('#manage-balance .inp-cos').val();
	if (cost && isNonNegative(cost)) {
		dataTotalStat.setTotalCurrentStat('balance', cost );
		var balance=dataTotalStat.totalStatistic['currentBalance'];
		console.log(balance + '     ' + typeof balance);
		var balanceBlock = document.createElement('span');
		balanceBlock.setAttribute('id', 'currBalanceCont');
		balanceBlock.innerHTML =balance;
		if(balance!==null)
			$('#curBalance').html('<span class="currBalanceTitle">Your current balance: <span>').append(balanceBlock);
		$('#manage-balance .inp-cos').val('');
	} else{

		console.log('you have some problem with data');
		appearInfoBlock("Invalid balance value");

	};
	
	

});
$(function(){

	var balance=dataTotalStat.totalStatistic['currentBalance'];
	console.log(balance + '     ' + typeof balance);
	var balanceBlock = document.createElement('span');
	balanceBlock.setAttribute('id', 'currBalanceCont');
	balanceBlock.innerHTML =balance;
	if(balance!==null)
		$('#curBalance').html('<span class="currBalanceTitle">Your current balance: <span>').append(balanceBlock);
})
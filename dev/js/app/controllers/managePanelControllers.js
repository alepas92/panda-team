$('#manage-outlay-painting').click(function() {
	
	
	managePanelPainting('outlays');
	$(" .manage-delete-button").click(function() {
		//alert('type');
		var cat=$(this).siblings().children('input.sel-cat').val();
		var cost=$(this).siblings().children('input.inp-cos').val();
		console.log(cat);
		console.log(cost);
		dataDayly.removeDaily(todayKeyWord, cat,cost, 'outlays');		
		$(this).parent().hide();


	}
	);
});

$('#manage-incomes-painting').click(function() {

	managePanelPainting('incomes');

	$(" .manage-delete-button").click(function() {
	//	alert('incomes');
		var cat=$(this).siblings().children('input.sel-cat').val();
		var cost=$(this).siblings().children('input.inp-cos').val();
		console.log(cat);
		console.log(cost);
		dataDayly.removeDaily(todayKeyWord, cat,cost, 'incomes');		
		$(this).parent().hide();


	}
	);
});
	// function deleteDaily(type){
	// 	alert(type);
	// 	var cat=$(this).siblings().children('input.sel-cat').val();
	// 	var cost=$(this).siblings().children('input.inp-cos').val();
	// 	console.log(cat);
	// 	console.log(cost);
	// 	dataDayly.removeDaily(todayKeyWord, cat,cost, type);		
	// 	$(this).parent().remove();
	// }

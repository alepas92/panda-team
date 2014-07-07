$(document).ready(function() {
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 		
 		console.log();


        if ($(this).attr('href') === "#empty") {
        } else if ($(this).parents('li:eq(1)').attr('id') === 'dropdown-item') {
        	$('.tabs ' + currentAttrValue).show().siblings().hide();
 			$(this).parents('li:eq(1)').addClass('active').siblings().removeClass('active');
 			e.preventDefault();
 		} else {
 			$('.tabs ' + currentAttrValue).show().siblings().hide();
	        $(this).parent('li').addClass('active').siblings().removeClass('active');
	        e.preventDefault();
 		}
    });
});
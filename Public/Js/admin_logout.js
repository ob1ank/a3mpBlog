$(function(){
	//根本不需要
	$(window).bind('beforeunload',function(){
		$("#searchform").submit();
	});
	$(window).bind('unload',function(){
		$("#searchform").submit();
	});
})
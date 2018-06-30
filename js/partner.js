$(document).ready(function(){
	
	
	console.log("this is partnerpage");
	$('#sign-up').click(function(){
		
		var partnerOption = $('#partner-radio').is(':checked');
		var sourceOption = $('#source-radio').is(':checked');
		console.log(partnerOption);
		console.log(sourceOption);
		$('#partnerOpt').val(partnerOption);
		$('#sourceOpt').val(sourceOption);
		document.getElementById("signup-form").submit();
		
	});
	
	
});
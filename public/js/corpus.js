

var buildPage;
$(document).ready(function(){
	buildPage = new BuildPage();
	initListeners();
});

function initListeners(){
	$('body').on('keypress',(e)=>{
		console.log(e.which);
		if(e.which==110){
			//new entry
			$('.firstPage').hide();
		}
	});
}




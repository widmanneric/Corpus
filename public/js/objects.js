
class BuildPage{
	constructor(){
		var it = this;
		this.newEntryButton = $('.makeEntry');
		this.newEntryButton.on('click touch',function(){
			it.animateEntryModal();
		});
		this.entryModal = $('.newEntryModal');

	}


	loadDocuments(){
		var it = this;
		$.ajax({
			type:"GET",
			url:'documents.json',
			dataType: "json",
			success: function(data){
				console.log("::DOCUMENTS RECIEVED");
				it.documents = data;
			}
		});
	}

	animateEntryModal(){
		this.entryModal.css({
			opacity: 0
		});
		this.entryModal.show();
		this.entryModal.velocity({
			opacity: 1
		},{
			duration : 2000,
			easing: 'linear'
		});
	}
}




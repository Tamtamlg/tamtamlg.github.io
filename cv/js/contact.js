jQuery(document).ready(function($) {
	$("#contact").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "../mail.php",
			data: str,
			success: function(msg) {
				if(msg == 'OK') {
					alert('Сообщение отправлено');
				}
			}
		});
		return false;
	});
});
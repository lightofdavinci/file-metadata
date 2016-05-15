$(document).ready(function() {

			var file;
			$('input[type=file]').on('change', function(event) {
				file = event.target.files;
			});
			$('form').on('submit', function(event) {

				event.stopPropagation();
				event.preventDefault();

				var data = new FormData();
				$.each(file, function(key, value) {
					data.append(key, value);
				});
				console.log(data);
				$.ajax({
					url: window.location.origin + '/upload',
					type: 'POST',
					data: data,
					cache: false,
					processData: false,
					contentType: false,
					error: function(jqXHR, textStatus, errorThrown) {
						alert('ERRORS: ' + textStatus);
					},
					success: function(data) {
						alert('FILE SIZE: ' + data.size);
					}
				});
			});
		});
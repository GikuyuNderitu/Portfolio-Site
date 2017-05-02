$mdToastProvider.addPreset('successfulEmail', {
	options: function(sender) {
		return {
			template:
				`
				<md-toast>
					<div class="md-toast-content">
						Thank you for the email ${sender}!
					</div>
				</md-toast>
				`
		}
	}
})

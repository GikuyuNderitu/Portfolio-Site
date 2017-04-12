const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');
const helper = require('sendgrid').mail;
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
const to_email = new helper.Email("atypicaldev@gmail.com", "Gikuyu Nderitu");
let request_mail = sg.emptyRequest({
	method: 'POST',
	path: '/v3/mail/send'
});


module.exports = {
	contact: function (req, res) {
		Contact.create(req.body, (err, contact) => {
			if (err) {
				console.log(err);
				return res.status(400).res.json(err)
			}

			let from_email = new helper.Email(contact.email, contact.name);
			let subject = contact.subject;
			let content = new helper.Content("text/plain", contact.message);
			let mail = new helper.Mail(from_email, subject, to_email, content);
			request_mail.body = mail.toJSON()

			sg.API(request_mail, function(error, response) {
				if (error) {
					console.error(error);
					return res.status(401).json({error: error})
				}
				console.log(response.statusCode);
				console.log(response.body);
				console.log(response.headers);
				return res.status(201).json(contact)
			})
		})
	}
}

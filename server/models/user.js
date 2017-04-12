'use strict';
const mongoose = require('mongoose'),
	EMAIL_REGEX = /^[a-z0-9;.'/!#$^*()]{2,}@.{2,}\..{2,}$/i;

const ContactSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name required"],
		validate: {
			validator(name) {
				return name.length >= 2
			},
			message: "Name must be two or more characters long"
		}
	},
	email: {
		type: String,
		required: [true, "Email required"],
		validate: {
			validator(email) {
				return EMAIL_REGEX.test(email)
			},
			message: "{VALUE} does not look like a valid email."
		}
	},
	subject: {
		type: String,
		required: [true, "Subject required"],
		validate: {
			validator(name) {
				return name.length > 2
			},
			message: "Subject must 3 or more characters long"
		}
	},
	message: {
		type: String,
		required: [true, "Message content required"],
		validate: {
			validator(name) {
				return name.length >= 10
			},
			message: "Message must be 10 or more characters long"
		}
	}
})
const Contact = mongoose.model('Contact', ContactSchema)

const EMAIL_REGEX = /^[a-z0-9;.'/!#$^*()]{2,}@.{2,}\..{2,}$/i,
validateContactInformation = function (obj) {
	let errors = {}
	if(!obj.name) errors.name = "Name required"
	else if(obj.name.length < 2) errors.name = "Name must be two or more characters long"
	if(!obj.email) errors.email = "Email required"
	else if(!EMAIL_REGEX.test(obj.email)) errors.email = `${obj.email} does not look like a valid email.`
	if(!obj.subject) errors.subject = "Subject required"
	else if(obj.subject.length < 3) errors.subject = "Subject must be 3 or more characters long"
	if(!obj.message) errors.message = "Message content required"
	else if(obj.message.length < 10) errors.message = "Message must be 10 or more characters long"

	return new Promise((res, rej) => {
		if(errors.name || errors.subject || errors.email || errors.message)
			rej(errors)
		else
			res(obj)
	})
}


app.service('mailService', ['$http', function ($http) {
	const postData = function (email) {
		return $http.post(`/contact`, email)
	}

	this.sendMail = function (obj, callback) {
		validateContactInformation(obj)
		.then(postData)
		.then(data => {
			console.log(data);
			callback(undefined, data.data)
		})
		.catch(err => {
			console.log(err);
			if (err.data) {
				callback(err.data, undefined)
			} else {
				callback(err, undefined)
			}
		})
	}
}])

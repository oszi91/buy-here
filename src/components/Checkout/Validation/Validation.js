const hasNumber = txt => /\d/.test(txt);

export const Validation = data => {
	let errorsList={}

	if (data.name.length < 3 || hasNumber(data.name)) {
		errorsList = {
			...errorsList,
			name: `Field must contain min. 3 characters (cannot be numbers)`,
		};
	}

	if (data.surname.length < 3 || hasNumber(data.surname)) {
		errorsList = {
			...errorsList,
			surname: `Field must contain min. 3 characters (cannot be numbers)`,
		};
	}

	if (data.street.length < 2 || hasNumber(data.street)) {
		errorsList = {
			...errorsList,
			street: `Field must contain min. 2 characters (cannot be numbers)`,
		};
	}

	if (data.streetNumber.length <= 0) {
		errorsList = {
			...errorsList,
			streetNumber: `Field can't be empty`,
		};
	}

    if (data.city.length < 3 || hasNumber(data.city)) {
		errorsList = {
			...errorsList,
			city: `Field must contain min. 3 characters (cannot be numbers)`,
		};
	}

	if (data.postCode.toString().length !== 5 || isNaN(data.postCode)) {
		errorsList = {
			...errorsList,
			postCode: `Field must contain 5 numbers (XXXXX)`,
		};
	}

	if (data.phoneNumber.toString().length < 8 || isNaN(data.phoneNumber)) {
		errorsList = {
			...errorsList,
			phoneNumber: `Field must contain min. 8 characters (only numbers)`,
		};
	}

	if (data.email.length < 5 && data.email.indexOf('@') < 0) {
		errorsList = {
			...errorsList,
			email: `Field must contain '@' and min. 5 characters`,
		};
	}

	return errorsList;
};

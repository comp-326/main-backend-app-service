const checkPassword = (password: string) => {
	if (!new RegExp(/[a-z]/).test(password)) return false;
	if (!new RegExp(/[A-Z]/).test(password)) return false;
	if (!new RegExp(/[0-9]/).test(password)) return false;
	if (!new RegExp(/[.*+?^${}#%^@!`"'-()|[\]\\]/).test(password)) return false;
	if (new RegExp(/[.*+?^${}#%^@!`"'-()|[\]\\]{4,}/).test(password)) return false;
	if (!new RegExp(/[\w]{7,16}/).test(password)) return false;

	return true;
};

export { checkPassword };

export type checkPasswordType = typeof checkPassword;

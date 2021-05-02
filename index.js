const fetch = require("node-fetch");
const Constants = {
	url: `db.hostinghq.xyz`,
	apiVersion: `1`
};

exports.get = async (Authorization, key) => {
	if (typeof Authorization !== "object") {
		throw new TypeError("Authorization must be an object containing the user's Client ID and the Token.");
	}
	const body = {
		key: key
	};
	let f = await fetch(`https://${Constants.url}/v${Constants.apiVersion}/}query`, {
		method: "POST",
		headers: {
			"Authorization": Authorization.token,
			"client-id": Authorization.clientID
		},
		body: JSON.stringify(body)
	});
	if (f.status == 401) {
		throw new Error("You are unauthorized. This is most likely because of an incorrect API key or none at all.");
	}
	f = f.json();
	return f.data.value;
};

exports.set = async (Authorization, key, value, expire) => {
	if (!expire) {
		expire == null;
	}
	if (typeof Authorization !== "object") {
		throw new TypeError("Authorization must be an object containing the user's Client ID and the Token.");
	}
	if (typeof expire !== "number" && typeof expire !== null) {
		throw new TypeError("Expire must be either a number or null");
	}
	const body = {
		key: key,
		value: value,
		expire: expire
	};
	let f = await fetch(`https://${Constants.url}/v${Constants.apiVersion}/post`, {
		method: "POST",
		headers: {
			"Authorization": Authorization.token,
			"client-id": Authorization.clientID
		},
		body: JSON.stringify(body)
	});
	if (f.status == 401) {
		throw new Error("401 - Unauthorized | Your clientID is either missing or invalid.");
	} else if (f.status == 402) {
		throw new Error("402 - Payment Required | You need to validate your license key before using this database.");
	} else if (f.status == 403) {
		throw new Error("403 - Forbidden | Your token is either missing or invalid.");
	} else if (f.status == 404) {
		return undefined;
	} else if (f.status == 500) {
		return undefined;
	}
	f = f.json();
	return f.data;
};

exports.delete = async (Authorization, key) => {
	if (typeof Authorization !== "object") {
		throw new TypeError("Authorization must be an object containing the user's Client ID and the Token.");
	}
	const body = {
		key: key
	};
	let f = await fetch(`https://${Constants.url}/v${Constants.apiVersion}/delete`, {
		method: "POST",
		headers: {
			"Authorization": Authorization.token,
			"client-id": Authorization.clientID
		},
		body: JSON.stringify(body)
	});
	if (f.status == 401) {
		throw new Error("401 - Unauthorized | Your clientID is either missing or invalid.");
	} else if (f.status == 402) {
		throw new Error("402 - Payment Required | You need to validate your license key before using this database.");
	} else if (f.status == 403) {
		throw new Error("403 - Forbidden | Your token is either missing or invalid.");
	} else if (f.status == 404) {
		return undefined;
	} else if (f.status == 500) {
		return undefined;
	}
	return undefined;
};

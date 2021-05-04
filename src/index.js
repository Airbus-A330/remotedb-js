const fetch = require("node-fetch");
const Constants = {
	url: `db.hostinghq.xyz`,
	apiVersion: `1`
};
const throwError = require("./Functions/error.js");

class Options {
	constructor(clientID, token, p, o, s, d) {
		this.clientID = clientID
		this.token = token
		this.pretty = p
		this.object = o
		this.status = s
		this.data = d
		this.get = async (key) => {
			const body = {
				key: key
			};
			let f = await fetch(`https://${Constants.url}/v${Constants.apiVersion}/query`, {
				method: "POST",
				headers: {
					"Authorization": this.token,
					"client-id": this.clientID,
          "Content-Type": "application/json"
				},
				body: JSON.stringify(body)
			});
			if (this.pretty == true || this.status == true) {
				if (f.status == 401) {
					throwError._401(res, "Invalid Client ID | You have an invalid or missing Client ID.")
				} else if (f.status == 402) {
					throwError._402(res, "Payment Required | You need to validate your license key before using this database.");
				} else if (f.status == 403) {
					throwError._403(res, "Forbidden | Your token is either missing or invalid.");
				}
			}
			f = await f.json();
			if (this.object == true) {
				return f;
			} else if (this.data == true) {
				return f.data;
			} else if (this.status == true) {
				return f.status;
			} else {
				return f;
			}
		};
		this.set = async (key, value, expire) => {
			if (!expire) expire = null;
			const body = {
				key: key,
				value: value,
				expire: expire
			};
			let f = await fetch(`https://${Constants.url}/v${Constants.apiVersion}/post`, {
				method: "POST",
				headers: {
					"Authorization": this.token,
					"client-id": this.clientID,
          "Content-Type": "application/json"
				},
				body: JSON.stringify(body)
			});
			if (this.pretty == true || this.status == true) {
				if (f.status == 401) {
					throwError._401(res, "Invalid Client ID | You have an invalid or missing Client ID.")
				} else if (f.status == 402) {
					throwError._402(res, "Payment Required | You need to validate your license key before using this database.");
				} else if (f.status == 403) {
					throwError._403(res, "Forbidden | Your token is either missing or invalid.");
				}
			}
			f = await f.json();
			if (this.object == true) {
				return f;
			} else if (this.data == true) {
				return f.data;
			} else if (this.status == true) {
				return f.status;
			} else {
				return f;
			}
		};
		this.delete = async (key) => {
			const body = {
				key: key
			};

			let f = await fetch(`https://${Constants.url}/v${Constants.apiVersion}/delete`, {
				method: "POST",
				headers: {
					"Authorization": this.token,
					"client-id": this.clientID,
          "Content-Type": "application/json"
				},
				body: JSON.stringify(body)
			});
			if (this.pretty == true || this.status == true) {
				if (f.status == 401) {
					throwError._401(res, "Invalid Client ID | You have an invalid or missing Client ID.")
				} else if (f.status == 402) {
					throwError._402(res, "Payment Required | You need to validate your license key before using this database.");
				} else if (f.status == 403) {
					throwError._403(res, "Forbidden | Your token is either missing or invalid.");
				}
			}
			f = await f.json();
			if (this.object == true) {
				return f;
			} else if (this.data == true) {
				return f.data;
			} else if (this.status == true) {
				return f.status;
			} else {
				return f;
			}
		};
	}
}

module.exports = {
	Options
};
(async () => {
	let Database = require("../src/index.js");

	let db = new Database.Options(process.env.CLIENT_ID, process.env.TOKEN);

	let a = await db.set("hello", "world");
	let b = await db.get("hello");
	let c = await db.delete("hello");
	console.log(a);
	console.log(b);
	console.log(c);
})();
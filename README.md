
![Hosting HQ Assets | TYPE: Banner | Format: PNG](https://hostinghq.xyz/assets/banner.png)

![Github Issues Sheid](https://img.shields.io/github/issues/Hosting-HQ/remotedb-py)  ![Last Commit](https://img.shields.io/github/last-commit/Hosting-HQ/remotedb-py)  ![Github License Shield](https://img.shields.io/github/license/Hosting-HQ/remotedb-py)  ![PyPi Version](https://img.shields.io/pypi/v/remotedb)  ![Python Version](https://img.shields.io/pypi/pyversions/remotedb)  ![Wheel?](https://img.shields.io/pypi/wheel/remotedb)  ![Maintained?](https://img.shields.io/maintenance/yes/2021)  ![Size](https://img.shields.io/github/repo-size/Hosting-HQ/remotedb-py)

# RemoteDB

Hosting HQ RemoteDB is a service that provides Hosting HQ clients and non-clients a remote database solution to ease the burden of utilizing complex frameworks to manage their database.

  
  

## Prerequisites

- RemoteDB API Client ID (Check your Dashboard)

- RemoteDB API Token (Check your Dashboard)

- Validated RemoteDB License (Don't have one? Purchase one [here](https://members.hostinghq.xyz/index.php?rp=/store/remotedb))

  

## System Requirements

- Node.js v12 or higher

  

## Usage

```javascript

const Database = require("remotedb);
const db = new Database("client_id", "token", [options]);

```

### .set(key, value, [expire])

```JS
// Without async function
db.set("key", "value", [expire]).then(() => {
});

// With async function
await db.set("key", "value");
```

### .get(key)

```JS
// Without async function
db.get("key").then(() => {
});

// With async function
await db.get("key");
```

### .delete(key)

```JS
// Without async function
db.delete("key").then(() => {
});

// With async function
await db.delete("key");
```

## Response Options

### .set(key, value, [expire])

* You can set the default response object using the class. It will return what you set it to until you edit the class. 
```js
const Database = require("remotedb");
const db = new Database("client_id", "token", [p, s, o, d]);
/**
* Options accept only boolean (true or false) values.
* There are four option values, all are optional but you must specify them all if you want a specific option only.
* By default, it will return the entire response object, but you can set it to return only the prettified object, the entire object, the response status, or the data object itself.
* 
* p = prettified object (will show prettified errors too)
* s = status (will only show the HTTP status code)
* o = object (true by default, it will show the entire response object)
* d = data object (will only show the data object)
*/
```
* If you do not want to configure the class, you can get your desired value through the response object.

### .get(key)

* You can set the default response object using the class. It will return what you set it to until you edit the class. 
```js
const Database = require("remotedb");
const db = new Database("client_id", "token", [p, s, o, d]);
/**
* Options accept only boolean (true or false) values.
* There are four option values, all are optional but you must specify them all if you want a specific option only.
* By default, it will return the entire response object, but you can set it to return only the prettified object, the entire object, the response status, or the data object itself.
* 
* p = prettified object (will show prettified errors too)
* s = status (will only show the HTTP status code)
* o = object (true by default, it will show the entire response object)
* d = data object (will only show the data object)
*/
```
* If you do not want to configure the class, you can get your desired value through the response object.
### .delete(key)

* You can set the default response object using the class. It will return what you set it to until you edit the class. 
```js
const Database = require("remotedb");
const db = new Database("client_id", "token", [p, s, o, d]);
/**
* Options accept only boolean (true or false) values.
* There are four option values, all are optional but you must specify them all if you want a specific option only.
* By default, it will return the entire response object, but you can set it to return only the prettified object, the entire object, the response status, or the data object itself.
* 
* p = prettified object (will show prettified errors too)
* s = status (will only show the HTTP status code)
* o = object (true by default, it will show the entire response object)
* d = data object (will only show the data object)
*/
```
* If you do not want to configure the class, you can get your desired value through the response object.

# Documentation

You can view our API documentation including API changelog at [https://docs.hostinghq.xyz/api](https://docs.hostinghq.xyz/api)

# Support

You can get support with RemoteDB and our packages in our Official [Discord Server](https://discord.gg/hostinghq)

# Contributing

Contribution to our packages is restricted to authorized contributors. If you believe a change needs to be made, open an [issue](https://github.com/Hosting-HQ/remotedb/issues) and we will review it.

# License

Hosting HQ RemoteDB Python Package is Licensed under GPL-3.0. The full license can be viewed [here](https://github.com/Hosting-HQ/remotedb/blob/main/LICENSE)
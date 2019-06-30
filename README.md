# Node Async/Await Try Catch Helper
A try catch helper for await calls

## Installation

Using npm:
```shell
$ npm i @codyholmes/tc-async-helper
```
Note: add --save if you are using npm < 5.0.0

In Node.js:
```js
const tc = require('@codyholmes/tc-async-helper');

const request = async () => {
    const [err, res] = await tc(fetch('https://randomuser.me/api/'));

    if(err) {
        // handle error
    }

    const json = await res.json();
    console.log(json);
}

request();

```
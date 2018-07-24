# fork from babel 

> Babel preset for all React plugins.

This preset includes the following plugins/presets:

- [preset-flow](https://babeljs.io/docs/plugins/preset-flow/)
- [syntax-jsx](https://babeljs.io/docs/plugins/syntax-jsx/)
- [transform-react-jsx](https://babeljs.io/docs/plugins/transform-react-jsx/)
- [transform-react-display-name](https://babeljs.io/docs/plugins/transform-react-display-name/)

## Install

> You can also check out the React [Getting Started page](https://facebook.github.io/react/docs/hello-world.html)

> For more info, check out the setup page on the [cli](/docs/setup/) and the [usage](/docs/usage/cli/) docs.

Install the CLI and this preset

```sh
npm install --save-dev babel-cli @stayjs/stay-loader
```

Make a .babelrc config file with the preset

```sh
echo '{ "presets": ["@stayjs/stay-loader"] }' > .babelrc
```

Create a file to run on

```sh
echo '<h1>Hello, world!</h1>' > index.js
```

View the output

```sh
./node_modules/.bin/babel index.js
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["@stayjs/stay-loader"]
}
```

### Via CLI

```sh
babel script.js --presets @stayjs/stay-loader 
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["@stayjs/stay-loader"]
});
```

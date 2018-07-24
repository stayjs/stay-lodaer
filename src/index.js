let presetFlow = require('babel-preset-flow')
let transformReactJSX = require('babel-plugin-transform-react-jsx')
let transformSyntaxJSX = require('babel-plugin-syntax-jsx')
let transformReactDisplayName = require('babel-plugin-transform-react-display-name')

module.exports =  {
  presets: [
    presetFlow
  ],
  plugins: [
    transformReactJSX,
    transformSyntaxJSX,
    transformReactDisplayName
  ],
  env: {
    development: {
      plugins: [
        // transformReactJSXSource,
        // transformReactJSXSelf
      ]
    }
  }
};

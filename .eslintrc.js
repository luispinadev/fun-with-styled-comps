module.exports = {

  "root": true,

  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },

  "parser": "babel-eslint",

  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "classes": true
    }
  },

  "plugins": [
     "babel",
     "react",
     "import"
  ],

  "extends": ["eslint:recommended", "plugin:react/recommended", "react-app"],

  "rules" : {
    "no-console": [ "warn", { "allow": ["error", "warn"] } ],
    "max-len": ["error", 80, { "ignoreComments": true }],
    "no-unused-vars": "warn",
    "no-sequences": 0
  },

  "globals": {
    "jest": true,
    "expect": true,
    "describe": true,
    "it": true,
    "beforeEach": true,
    "before": true,
    "after": true,
  }

}
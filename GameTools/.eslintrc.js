module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "react-native/react-native": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "rules": {
        "no-debugger": "warn",
        "no-console": "warn",
        "react/jsx-uses-vars": 1,
    }
};
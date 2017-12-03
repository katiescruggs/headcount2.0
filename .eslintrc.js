module.exports = {
    "env": {
        "browser": true,
        "jest": true,
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "warn",
            2
        ],
        "curly": "error",
        "eqeqeq": [
            "error",
            "always"
        ],
        "key-spacing" : [
            "error", {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "keyword-spacing": [
            "error", {
                "before": true,
                "after": true
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "max-len": [
            "error",
            80
        ],
        "new-cap": [
            "error", {
                "newIsCap": true
            }
        ],
        "newline-after-var": [
            "error",
            "always"
        ],
        "object-shorthand": [
            "error",
            "always"
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "semi": [
            "error",
            "always"
        ],
        "semi-spacing": [
            "error", {
                "before": false,
                "after": true
            }
        ],
        "space-before-blocks": [
            "error", {
                "functions": "always",
                "keywords": "always",
                "classes": "always"
            }
        ],
        "space-infix-ops": [
            "error", {
                "int32Hint": false
            }
        ],
        "globals": {
            "expect": true
        }
    }
};
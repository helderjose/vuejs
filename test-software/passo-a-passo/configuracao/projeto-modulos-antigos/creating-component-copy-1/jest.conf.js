// jest.config.js
const {defaults} = require('jest-config');
module.exports = {
  "moduleFileExtensions": [
    "js",
    "vue"
  ],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  "snapshotSerializers": [
    "<rootDir>/node_modules/jest-serializer-vue"
  ]
}


// const path = require('path');

// module.exports = {
//   rootDir: path.dirname(__dirname),
//   moduleFileExtensions: ["js", "vue"],
//   moduleNameMapper: {
//     "^@/(.*)$": "<rootDir>/src/$1"
//   },
//   transform: {
//     "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
//     ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
//   },
//   snapshotSerializers: [
//     "<rootDir>/node_modules/jest-serializer-vue"
//   ]
// }


// {
//   "moduleFileExtensions": [
//     "js",
//     "vue"
//   ],
//   "moduleNameMapper": {
//     "^@/(.*)$": "<rootDir>/src/$1"
//   },
//   "transform": {
//     "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
//     ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
//   },
//   "snapshotSerializers": [
//     "<rootDir>/node_modules/jest-serializer-vue"
//   ]
// }
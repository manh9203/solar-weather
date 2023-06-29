const config = {
    "moduleNameMapper": {
      "\\.(css|less|sass|scss)$": "<rootDir>/styleMock.js",
      "\\.(gif|ttf|eot|svg|png|jpg)$": "<rootDir>/fileMock.js"
    }

}

module.exports = config;
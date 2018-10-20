/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: loadContacts, updateActiveContact, searchContacts, sendMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadContacts\", function() { return loadContacts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateActiveContact\", function() { return updateActiveContact; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchContacts\", function() { return searchContacts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendMessage\", function() { return sendMessage; });\n/* harmony import */ var _helpers_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/account */ \"./src/helpers/account.js\");\n/* harmony import */ var _helpers_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/dom */ \"./src/helpers/dom.js\");\n/* harmony import */ var _bot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bot */ \"./src/bot/index.js\");\n\r\n\r\n\r\n\r\nconst contactList = document.getElementById(\"contacts\");\r\nconst messageList = document.getElementById(\"messages\");\r\n\r\nfunction loadContacts() {\r\n  const contacts = _helpers_account__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getContacts();\r\n  _helpers_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearList(\"contacts\");\r\n  contacts.forEach(contact => {\r\n    contactList.appendChild(_helpers_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createContact(contact));\r\n  });\r\n}\r\n\r\nasync function updateActiveContact(name) {\r\n  // just to demonstrate await and promises\r\n  try {\r\n    const activeContact = await _helpers_account__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pickContact(name);\r\n    _helpers_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].highlightActiveContact(name);\r\n    const messages = await _helpers_account__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getMessages(activeContact);\r\n    _helpers_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateDialogueHeader(activeContact);\r\n    _helpers_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateMessageSection(messages);\r\n    messageList.scrollTop = messageList.scrollHeight;\r\n  } catch (err) {\r\n    _helpers_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateEmptyDialogue();\r\n  }\r\n}\r\n\r\nfunction searchContacts(query) {\r\n  const contacts = _helpers_account__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findContacts(query);\r\n  if (!contacts || !contacts.length) loadContacts();\r\n  else {\r\n    _helpers_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearList(\"contacts\");\r\n    contacts.forEach(contact => {\r\n      contactList.appendChild(_helpers_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createContact(contact));\r\n    });\r\n  }\r\n}\r\n\r\nfunction sendMessage(message, fromBot) {\r\n  if (_helpers_account__WEBPACK_IMPORTED_MODULE_0__[\"default\"].firstMessageInDialogue(message)) _helpers_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearList(\"messages\");\r\n  _helpers_account__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addMessage(message);\r\n  messageList.appendChild(_helpers_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createMessage(message));\r\n  messageList.scrollTop = messageList.scrollHeight;\r\n  if (!fromBot) {\r\n    try {\r\n      const response = Object(_bot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(message);\r\n      sendMessage(response, true);\r\n    } catch (err) {\r\n      console.error(err.message);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/bot/adviseBot.js":
/*!******************************!*\
  !*** ./src/bot/adviseBot.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bot */ \"./src/bot/bot.js\");\n/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands */ \"./src/bot/commands.js\");\n\r\n\r\n\r\nclass AdviseBot extends _bot__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor() {\r\n    super();\r\n    this.advises = [\r\n      \"You need to find the rebels.\",\r\n      \"Use the force.\",\r\n      \"You must finish your training. You`re not ready yet.\",\r\n      \"Go on Dagoba, find master Yoda there. He`ll finish your training.\",\r\n      \"You have a sister - find her.\",\r\n      \"We must get out from this planet.\"\r\n    ];\r\n  }\r\n\r\n  parseCommand(query) {\r\n    if (new RegExp(\"^[A-Za-z0-9 ,.]+[?]$\").test(query)) return _commands__WEBPACK_IMPORTED_MODULE_1__[\"ADVISE\"];\r\n    throw new Error(\r\n      \"I`m here to help. Just ask me something like this 'question?'\"\r\n    );\r\n  }\r\n\r\n  parseParams(query, command) {\r\n    switch (command) {\r\n      case _commands__WEBPACK_IMPORTED_MODULE_1__[\"ADVISE\"]:\r\n        return null;\r\n      default:\r\n        throw new Error(\"Params parser error.\");\r\n    }\r\n  }\r\n\r\n  execute(command, params) {\r\n    switch (command) {\r\n      case _commands__WEBPACK_IMPORTED_MODULE_1__[\"ADVISE\"]:\r\n        return this.randomAdvise();\r\n      default:\r\n        throw new Error(\"Command execution error.\");\r\n    }\r\n  }\r\n\r\n  generateText(command, params, result) {\r\n    switch (command) {\r\n      case _commands__WEBPACK_IMPORTED_MODULE_1__[\"ADVISE\"]:\r\n        return result;\r\n      default:\r\n        throw new Error(\"Response generator error.\");\r\n    }\r\n  }\r\n\r\n  randomAdvise() {\r\n    return this.advises[\r\n      Math.floor(Math.random() * Math.floor(this.advises.length))\r\n    ];\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new AdviseBot());\r\n\n\n//# sourceURL=webpack:///./src/bot/adviseBot.js?");

/***/ }),

/***/ "./src/bot/bot.js":
/*!************************!*\
  !*** ./src/bot/bot.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Bot {\r\n  getResponse(message) {\r\n    const response = {\r\n      from: message.to,\r\n      to: message.from,\r\n      text: this.generateResponse(message.text)\r\n    };\r\n    return response;\r\n  }\r\n\r\n  generateResponse(query) {\r\n    try {\r\n      const command = this.parseCommand(query);\r\n      const params = this.parseParams(query, command);\r\n      const result = this.execute(command, params);\r\n      return this.generateText(command, params, result);\r\n    } catch (err) {\r\n      return err.message;\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bot);\r\n\n\n//# sourceURL=webpack:///./src/bot/bot.js?");

/***/ }),

/***/ "./src/bot/bots.js":
/*!*************************!*\
  !*** ./src/bot/bots.js ***!
  \*************************/
/*! exports provided: CURRENCY_BOT, ADVISE_BOT, QUOTE_BOT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURRENCY_BOT\", function() { return CURRENCY_BOT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADVISE_BOT\", function() { return ADVISE_BOT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUOTE_BOT\", function() { return QUOTE_BOT; });\nconst CURRENCY_BOT = \"Walter White\";\r\nconst ADVISE_BOT = \"Obi-Wan Kenobi\";\r\nconst QUOTE_BOT = \"Mia Wallace\";\r\n\n\n//# sourceURL=webpack:///./src/bot/bots.js?");

/***/ }),

/***/ "./src/bot/commands.js":
/*!*****************************!*\
  !*** ./src/bot/commands.js ***!
  \*****************************/
/*! exports provided: CONVERT, QUOTE, ADVISE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CONVERT\", function() { return CONVERT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUOTE\", function() { return QUOTE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADVISE\", function() { return ADVISE; });\nconst CONVERT = \"convert\";\r\nconst QUOTE = \"show quote\";\r\nconst ADVISE = \"advise\";\r\n\n\n//# sourceURL=webpack:///./src/bot/commands.js?");

/***/ }),

/***/ "./src/bot/convertBot.js":
/*!*******************************!*\
  !*** ./src/bot/convertBot.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bot */ \"./src/bot/bot.js\");\n/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands */ \"./src/bot/commands.js\");\n\r\n\r\n\r\nclass ConvertBot extends _bot__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor() {\r\n    super();\r\n    this.rates = new Map();\r\n    this.rates.set(\"usd/uah\", 26);\r\n    this.rates.set(\"usd/eur\", 0.86);\r\n    this.rates.set(\"usd/gbp\", 0.76);\r\n    this.rates.set(\"eur/uah\", 31);\r\n    this.rates.set(\"eur/gbp\", 0.89);\r\n    this.rates.set(\"gbp/uah\", 35);\r\n  }\r\n\r\n  parseCommand(query) {\r\n    if (new RegExp(\"^convert [-0-9.]+ [A-Za-z]+ to [A-Za-z]+$\").test(query))\r\n      return _commands__WEBPACK_IMPORTED_MODULE_1__[\"CONVERT\"];\r\n    throw new Error(\r\n      \"Hi, I can convert currencies for you. Just try 'convert <amount> <currency> to <currency>'\"\r\n    );\r\n  }\r\n\r\n  parseParams(query, command) {\r\n    switch (command) {\r\n      case _commands__WEBPACK_IMPORTED_MODULE_1__[\"CONVERT\"]:\r\n        return this.parseConvertParams(query);\r\n      default:\r\n        throw new Error(\"Params parser error.\");\r\n    }\r\n  }\r\n\r\n  execute(command, params) {\r\n    switch (command) {\r\n      case _commands__WEBPACK_IMPORTED_MODULE_1__[\"CONVERT\"]:\r\n        return this.convert(\r\n          params.currentCurrency,\r\n          params.requestedCurrency,\r\n          params.amount\r\n        );\r\n      default:\r\n        throw new Error(\"Command execution error.\");\r\n    }\r\n  }\r\n\r\n  generateText(command, params, result) {\r\n    switch (command) {\r\n      case _commands__WEBPACK_IMPORTED_MODULE_1__[\"CONVERT\"]:\r\n        return `${params.amount} ${params.currentCurrency} = ${result} ${\r\n          params.requestedCurrency\r\n        }`;\r\n      default:\r\n        throw new Error(\"Response generator error.\");\r\n    }\r\n  }\r\n\r\n  parseConvertParams(query) {\r\n    let params = {\r\n      currentCurrency: \"\",\r\n      requestedCurrency: \"\",\r\n      amount: 0\r\n    };\r\n    let amountString = \"\",\r\n      i = 8;\r\n    for (; i < query.length; i++) {\r\n      if (query.charAt(i) === \" \") break;\r\n      amountString += query.charAt(i);\r\n    }\r\n    if (Number(amountString) === NaN)\r\n      throw new Error(\"Something wrong with your numbers, son.\");\r\n    if (Number(amountString) <= 0)\r\n      throw new Error(\"I don`t work with people who are in debts, son.\");\r\n    params.amount = amountString;\r\n    i++;\r\n    for (; i < query.length; i++) {\r\n      if (query.charAt(i) === \" \") break;\r\n      params.currentCurrency += query.charAt(i);\r\n    }\r\n    for (let j = query.indexOf(\"to\") + 3; j < query.length; j++) {\r\n      if (query.charAt(j) === \" \") break;\r\n      params.requestedCurrency += query.charAt(j);\r\n    }\r\n    return params;\r\n  }\r\n\r\n  convert(currentCurrency, requestedCurrency, amount) {\r\n    return (\r\n      Number(amount) * this.convertRate(currentCurrency, requestedCurrency)\r\n    ).toFixed(2);\r\n  }\r\n\r\n  convertRate(currentCurrency, requestedCurrency) {\r\n    if (\r\n      !this.rates.get(\r\n        `${currentCurrency.toLowerCase()}/${requestedCurrency.toLowerCase()}`\r\n      ) &&\r\n      !this.rates.get(\r\n        `${requestedCurrency.toLowerCase()}/${currentCurrency.toLowerCase()}`\r\n      )\r\n    )\r\n      throw new Error(\"I only deal with usd, uah, eur and gbp, son.\");\r\n    if (\r\n      !this.rates.get(\r\n        `${currentCurrency.toLowerCase()}/${requestedCurrency.toLowerCase()}`\r\n      )\r\n    )\r\n      return (\r\n        1 /\r\n        this.rates.get(\r\n          `${requestedCurrency.toLowerCase()}/${currentCurrency.toLowerCase()}`\r\n        )\r\n      );\r\n    return this.rates.get(\r\n      `${currentCurrency.toLowerCase()}/${requestedCurrency.toLowerCase()}`\r\n    );\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new ConvertBot());\r\n\n\n//# sourceURL=webpack:///./src/bot/convertBot.js?");

/***/ }),

/***/ "./src/bot/index.js":
/*!**************************!*\
  !*** ./src/bot/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getBotResponse; });\n/* harmony import */ var _convertBot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertBot */ \"./src/bot/convertBot.js\");\n/* harmony import */ var _quoteBot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quoteBot */ \"./src/bot/quoteBot.js\");\n/* harmony import */ var _adviseBot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adviseBot */ \"./src/bot/adviseBot.js\");\n/* harmony import */ var _bots__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bots */ \"./src/bot/bots.js\");\n\r\n\r\n\r\n\r\n\r\nfunction getBotResponse(message) {\r\n  switch (message.to.name) {\r\n    case _bots__WEBPACK_IMPORTED_MODULE_3__[\"CURRENCY_BOT\"]:\r\n      return _convertBot__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getResponse(message);\r\n    case _bots__WEBPACK_IMPORTED_MODULE_3__[\"QUOTE_BOT\"]:\r\n      return _quoteBot__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getResponse(message);\r\n    case _bots__WEBPACK_IMPORTED_MODULE_3__[\"ADVISE_BOT\"]:\r\n      return _adviseBot__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getResponse(message);\r\n    default:\r\n      throw new Error(\"Undefined bot\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/bot/index.js?");

/***/ }),

/***/ "./src/bot/quoteBot.js":
/*!*****************************!*\
  !*** ./src/bot/quoteBot.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bot */ \"./src/bot/bot.js\");\n/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands */ \"./src/bot/commands.js\");\n\r\n\r\n\r\nclass QuoteBot extends _bot__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor() {\r\n    super();\r\n    this.quotes = [\r\n      \"English motherfucker! Do you speak it?!\",\r\n      \"Describe Marcellus Wallace for me!\",\r\n      \"How could you forget my fathers watch?!\",\r\n      \"Does it bother you? Uncomfortable silence.\",\r\n      \"It was a fucking miracle, that happened there, and I want you to admit it.\",\r\n      \"Pigs are disgusting animals. I don`t eat disgusting animals.\"\r\n    ];\r\n  }\r\n\r\n  parseCommand(query) {\r\n    if (new RegExp(\"^show quote$\").test(query)) return _commands__WEBPACK_IMPORTED_MODULE_1__[\"QUOTE\"];\r\n    throw new Error(\"Come on! Just try 'show quote'\");\r\n  }\r\n\r\n  parseParams(query, command) {\r\n    switch (command) {\r\n      case _commands__WEBPACK_IMPORTED_MODULE_1__[\"QUOTE\"]:\r\n        return null;\r\n      default:\r\n        throw new Error(\"Params parser error.\");\r\n    }\r\n  }\r\n\r\n  execute(command, params) {\r\n    switch (command) {\r\n      case _commands__WEBPACK_IMPORTED_MODULE_1__[\"QUOTE\"]:\r\n        return this.randomQuote();\r\n      default:\r\n        throw new Error(\"Command execution error.\");\r\n    }\r\n  }\r\n\r\n  generateText(command, params, result) {\r\n    switch (command) {\r\n      case _commands__WEBPACK_IMPORTED_MODULE_1__[\"QUOTE\"]:\r\n        return result;\r\n      default:\r\n        throw new Error(\"Response generator error.\");\r\n    }\r\n  }\r\n\r\n  randomQuote() {\r\n    return this.quotes[\r\n      Math.floor(Math.random() * Math.floor(this.quotes.length))\r\n    ];\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new QuoteBot());\r\n\n\n//# sourceURL=webpack:///./src/bot/quoteBot.js?");

/***/ }),

/***/ "./src/helpers/account.js":
/*!********************************!*\
  !*** ./src/helpers/account.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/helpers/constants.js\");\n\r\n\r\nclass Account {\r\n  constructor() {\r\n    this.user = {\r\n      name: _constants__WEBPACK_IMPORTED_MODULE_0__[\"USER_NAME\"],\r\n      avatar: _constants__WEBPACK_IMPORTED_MODULE_0__[\"USER_AVATAR\"]\r\n    };\r\n    this.contacts = [\r\n      {\r\n        name: \"Mia Wallace\",\r\n        avatar: \"./assets/images/avatar1.png\",\r\n        active: false\r\n      },\r\n      {\r\n        name: \"Obi-Wan Kenobi\",\r\n        avatar: \"./assets/images/avatar2.png\",\r\n        active: false\r\n      },\r\n      {\r\n        name: \"Walter White\",\r\n        avatar: \"./assets/images/avatar3.png\",\r\n        active: false\r\n      }\r\n    ];\r\n    this.messages = [\r\n      {\r\n        text: \"Hi, Mia! Remind me of some Pulp Fiction quotes, please.\",\r\n        from: this.user,\r\n        to: this.contacts[0]\r\n      },\r\n      {\r\n        text: \"Sure, Batman. Just type 'show quote'\",\r\n        from: this.contacts[0],\r\n        to: this.user\r\n      }\r\n    ];\r\n  }\r\n\r\n  getMessages(author) {\r\n    if (!author) return Promise.reject(_constants__WEBPACK_IMPORTED_MODULE_0__[\"CHOOSE_DIALOGUE_MESSAGE\"]);\r\n    else\r\n      return Promise.resolve(\r\n        this.messages.filter(message => {\r\n          if (\r\n            message.from.name === author.name ||\r\n            (message.from.name === this.user.name &&\r\n              message.to.name === author.name)\r\n          )\r\n            return true;\r\n          return false;\r\n        })\r\n      );\r\n  }\r\n\r\n  getContacts() {\r\n    return this.contacts;\r\n  }\r\n\r\n  getActiveContact() {\r\n    return this.contacts.find(contact => {\r\n      if (contact.active) return true;\r\n      return false;\r\n    });\r\n  }\r\n\r\n  getUser() {\r\n    return this.user;\r\n  }\r\n\r\n  findContacts(query) {\r\n    return this.contacts.filter(contact => {\r\n      if (contact.name.toLowerCase().includes(query.toLowerCase())) return true;\r\n      return false;\r\n    });\r\n  }\r\n\r\n  pickContact(contactName) {\r\n    if (!contactName) return Promise.reject(_constants__WEBPACK_IMPORTED_MODULE_0__[\"CHOOSE_DIALOGUE_MESSAGE\"]);\r\n    let result;\r\n    this.contacts.forEach(contact => {\r\n      if (contact.name === contactName) {\r\n        contact.active = true;\r\n        result = contact;\r\n      } else contact.active = false;\r\n    });\r\n    return Promise.resolve(result);\r\n  }\r\n\r\n  firstMessageInDialogue(message) {\r\n    return !this.messages.find(item => {\r\n      if (message.from.name === this.user.name) {\r\n        if (\r\n          item.to.name === message.to.name ||\r\n          item.from.name === message.to.name\r\n        )\r\n          return true;\r\n      } else {\r\n        if (\r\n          item.to.name === message.from.name ||\r\n          item.from.name === message.from.name\r\n        )\r\n          return true;\r\n      }\r\n    });\r\n  }\r\n\r\n  addMessage(message) {\r\n    this.messages.push(message);\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Account());\r\n\n\n//# sourceURL=webpack:///./src/helpers/account.js?");

/***/ }),

/***/ "./src/helpers/constants.js":
/*!**********************************!*\
  !*** ./src/helpers/constants.js ***!
  \**********************************/
/*! exports provided: USER_NAME, USER_AVATAR, DEFAULT_DIALOGUE_HEADER_ICON, CHOOSE_DIALOGUE_MESSAGE, EMPTY_DIALOGUE_MESSAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_NAME\", function() { return USER_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_AVATAR\", function() { return USER_AVATAR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DEFAULT_DIALOGUE_HEADER_ICON\", function() { return DEFAULT_DIALOGUE_HEADER_ICON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHOOSE_DIALOGUE_MESSAGE\", function() { return CHOOSE_DIALOGUE_MESSAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EMPTY_DIALOGUE_MESSAGE\", function() { return EMPTY_DIALOGUE_MESSAGE; });\nconst USER_NAME = \"me\";\r\nconst USER_AVATAR = \"./assets/images/avatar4.png\";\r\nconst DEFAULT_DIALOGUE_HEADER_ICON = \"./assets/images/favicon.png\";\r\nconst CHOOSE_DIALOGUE_MESSAGE = \"Pick up a dialogue!\";\r\nconst EMPTY_DIALOGUE_MESSAGE = \"No messages here yet!\";\r\n\n\n//# sourceURL=webpack:///./src/helpers/constants.js?");

/***/ }),

/***/ "./src/helpers/dom.js":
/*!****************************!*\
  !*** ./src/helpers/dom.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/helpers/constants.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ \"./src/app.js\");\n\r\n\r\n\r\nclass Dom {\r\n  toggleSidebar() {\r\n    document.getElementById(\"sidebar\").classList.toggle(\"opened\");\r\n  }\r\n\r\n  hideSidebar() {\r\n    document.getElementById(\"sidebar\").classList.remove(\"opened\");\r\n  }\r\n\r\n  clearList(listName) {\r\n    let list = document.getElementById(listName);\r\n    while (list.childNodes.length > 1) {\r\n      list.removeChild(list.childNodes[list.childNodes.length - 1]);\r\n    }\r\n  }\r\n\r\n  updateEmptyDialogue() {\r\n    this.messageFormEnabled(false);\r\n    this.updateDialogueHeader();\r\n    this.updateMessageSection();\r\n  }\r\n\r\n  updateDialogueHeader(contact) {\r\n    let dialogueHeader = document.getElementById(\"current-dialogue\");\r\n    let image = dialogueHeader.childNodes[1];\r\n    let name = dialogueHeader.childNodes[3];\r\n    if (!contact) {\r\n      image.src = _constants__WEBPACK_IMPORTED_MODULE_0__[\"DEFAULT_DIALOGUE_HEADER_ICON\"];\r\n      name.innerText = \"\";\r\n    } else {\r\n      image.src = contact.avatar;\r\n      name.innerText = contact.name;\r\n    }\r\n  }\r\n\r\n  updateMessageSection(messages) {\r\n    let messageSection = document.getElementById(\"messages\");\r\n\r\n    this.clearList(\"messages\");\r\n    if (!messages) {\r\n      messageSection.appendChild(\r\n        this.createServiceMessage(_constants__WEBPACK_IMPORTED_MODULE_0__[\"CHOOSE_DIALOGUE_MESSAGE\"])\r\n      );\r\n    } else {\r\n      if (!messages.length)\r\n        messageSection.appendChild(\r\n          this.createServiceMessage(_constants__WEBPACK_IMPORTED_MODULE_0__[\"EMPTY_DIALOGUE_MESSAGE\"])\r\n        );\r\n      messages.forEach(message => {\r\n        messageSection.appendChild(this.createMessage(message));\r\n      });\r\n    }\r\n  }\r\n\r\n  messageFormEnabled(enabled) {\r\n    document.getElementById(\"message-form\").childNodes[1].disabled = !enabled;\r\n  }\r\n\r\n  highlightActiveContact(name) {\r\n    this.messageFormEnabled(true);\r\n    const contactList = document.getElementById(\"contacts\");\r\n    for (let i = 1; i < contactList.childNodes.length; i++) {\r\n      let currentNode = contactList.childNodes[i];\r\n      if (currentNode.childNodes[1].innerText === name) {\r\n        currentNode.classList.add(\"contacts__contact--active\");\r\n      } else {\r\n        currentNode.classList.remove(\"contacts__contact--active\");\r\n      }\r\n    }\r\n  }\r\n\r\n  createContact(contact) {\r\n    let nodeClasses = [\"contacts__contact\"];\r\n    if (contact.active) nodeClasses.push(\"contacts__contact--active\");\r\n    let node = this.createElement(\"div\", nodeClasses);\r\n\r\n    let image = this.createImage([\"contact__avatar\"], contact.avatar);\r\n    node.appendChild(image);\r\n    let name = this.createElement(\"p\", [\"contact__name\"], contact.name);\r\n    node.appendChild(name);\r\n\r\n    node.addEventListener(\"click\", event => {\r\n      _app__WEBPACK_IMPORTED_MODULE_1__[\"updateActiveContact\"](event.currentTarget.childNodes[1].innerText);\r\n      this.hideSidebar();\r\n    });\r\n\r\n    return node;\r\n  }\r\n\r\n  createServiceMessage(text) {\r\n    let node = this.createElement(\"h1\", [\"messages__service\"], text);\r\n    return node;\r\n  }\r\n\r\n  createMessage(message) {\r\n    let classes = [\"messages__message\"];\r\n    let text = this.createElement(\"p\", [\"message__text\"], message.text);\r\n    let image = this.createImage([\"message__avatar\"], message.from.avatar);\r\n    let node;\r\n    if (message.from.name === _constants__WEBPACK_IMPORTED_MODULE_0__[\"USER_NAME\"]) {\r\n      classes.push(\"messages__message--right\");\r\n      node = this.createElement(\"div\", classes);\r\n      node.appendChild(text);\r\n      node.appendChild(image);\r\n    } else {\r\n      classes.push(\"messages__message--left\");\r\n      node = this.createElement(\"div\", classes);\r\n      node.appendChild(image);\r\n      node.appendChild(text);\r\n    }\r\n    return node;\r\n  }\r\n\r\n  createElement(tag, classes, content) {\r\n    let node = document.createElement(tag);\r\n    node.classList.add(...classes);\r\n    if (content) {\r\n      node.innerText = content;\r\n    }\r\n    return node;\r\n  }\r\n\r\n  createImage(classes, src) {\r\n    let image = document.createElement(\"img\");\r\n    image.classList.add(...classes);\r\n    image.src = src;\r\n    return image;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Dom());\r\n\n\n//# sourceURL=webpack:///./src/helpers/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _helpers_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/account */ \"./src/helpers/account.js\");\n/* harmony import */ var _helpers_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/dom */ \"./src/helpers/dom.js\");\n\r\n\r\n\r\n\r\n_app__WEBPACK_IMPORTED_MODULE_0__[\"loadContacts\"]();\r\n_app__WEBPACK_IMPORTED_MODULE_0__[\"updateActiveContact\"]();\r\n\r\nsubscribeSidebar();\r\nsubscribeSearch();\r\nsubscribeMessageSend();\r\n\r\nfunction subscribeSearch() {\r\n  document.getElementById(\"search-form\").addEventListener(\"submit\", event => {\r\n    event.preventDefault();\r\n  });\r\n\r\n  document\r\n    .getElementById(\"search-form\")\r\n    .childNodes[1].addEventListener(\"input\", event => {\r\n      const query = event.currentTarget.value;\r\n      _app__WEBPACK_IMPORTED_MODULE_0__[\"searchContacts\"](query);\r\n    });\r\n}\r\n\r\nfunction subscribeMessageSend() {\r\n  document.getElementById(\"message-form\").addEventListener(\"submit\", event => {\r\n    event.preventDefault();\r\n  });\r\n\r\n  document.getElementById(\"message-form\").addEventListener(\"submit\", event => {\r\n    let message = {\r\n      text: event.currentTarget.childNodes[1].value,\r\n      from: _helpers_account__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getUser(),\r\n      to: _helpers_account__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getActiveContact()\r\n    };\r\n    if (!message || !message.text.length) return;\r\n    _app__WEBPACK_IMPORTED_MODULE_0__[\"sendMessage\"](message);\r\n    event.currentTarget.reset();\r\n  });\r\n}\r\n\r\nfunction subscribeSidebar() {\r\n  document\r\n    .getElementById(\"hamburger\")\r\n    .addEventListener(\"click\", _helpers_dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toggleSidebar);\r\n  document\r\n    .getElementById(\"messages\")\r\n    .addEventListener(\"click\", _helpers_dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hideSidebar);\r\n  document\r\n    .getElementById(\"message-form\")\r\n    .addEventListener(\"click\", _helpers_dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hideSidebar);\r\n  document\r\n    .getElementById(\"current-dialogue\")\r\n    .addEventListener(\"click\", _helpers_dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hideSidebar);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
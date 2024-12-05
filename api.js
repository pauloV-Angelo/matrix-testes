(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.mxwidgets = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientWidgetApi = void 0;
var _events = require("events");
var _PostmessageTransport = require("./transport/PostmessageTransport");
var _WidgetApiDirection = require("./interfaces/WidgetApiDirection");
var _WidgetApiAction = require("./interfaces/WidgetApiAction");
var _Capabilities = require("./interfaces/Capabilities");
var _ApiVersion = require("./interfaces/ApiVersion");
var _WidgetEventCapability = require("./models/WidgetEventCapability");
var _GetOpenIDAction = require("./interfaces/GetOpenIDAction");
var _SimpleObservable = require("./util/SimpleObservable");
var _Symbols = require("./Symbols");
var _UpdateDelayedEventAction = require("./interfaces/UpdateDelayedEventAction");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(value) { var ret = this.s["return"]; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, "throw": function _throw(value) { var thr = this.s["return"]; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * Copyright 2020 - 2024 The Matrix.org Foundation C.I.C.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             *         http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */
/**
 * API handler for the client side of widgets. This raises events
 * for each action received as `action:${action}` (eg: "action:screenshot").
 * Default handling can be prevented by using preventDefault() on the
 * raised event. The default handling varies for each action: ones
 * which the SDK can handle safely are acknowledged appropriately and
 * ones which are unhandled (custom or require the client to do something)
 * are rejected with an error.
 *
 * Events which are preventDefault()ed must reply using the transport.
 * The events raised will have a default of an IWidgetApiRequest
 * interface.
 *
 * When the ClientWidgetApi is ready to start sending requests, it will
 * raise a "ready" CustomEvent. After the ready event fires, actions can
 * be sent and the transport will be ready.
 *
 * When the widget has indicated it has loaded, this class raises a
 * "preparing" CustomEvent. The preparing event does not indicate that
 * the widget is ready to receive communications - that is signified by
 * the ready event exclusively.
 *
 * This class only handles one widget at a time.
 */
var ClientWidgetApi = /*#__PURE__*/function (_EventEmitter) {
  _inherits(ClientWidgetApi, _EventEmitter);
  var _super = _createSuper(ClientWidgetApi);
  /**
   * Creates a new client widget API. This will instantiate the transport
   * and start everything. When the iframe is loaded under the widget's
   * conditions, a "ready" event will be raised.
   * @param {Widget} widget The widget to communicate with.
   * @param {HTMLIFrameElement} iframe The iframe the widget is in.
   * @param {WidgetDriver} driver The driver for this widget/client.
   */
  function ClientWidgetApi(widget, iframe, driver) {
    var _this;
    _classCallCheck(this, ClientWidgetApi);
    _this = _super.call(this);
    _this.widget = widget;
    _this.iframe = iframe;
    _this.driver = driver;
    _defineProperty(_assertThisInitialized(_this), "transport", void 0);
    // contentLoadedActionSent is used to check that only one ContentLoaded request is send.
    _defineProperty(_assertThisInitialized(_this), "contentLoadedActionSent", false);
    _defineProperty(_assertThisInitialized(_this), "allowedCapabilities", new Set());
    _defineProperty(_assertThisInitialized(_this), "allowedEvents", []);
    _defineProperty(_assertThisInitialized(_this), "isStopped", false);
    _defineProperty(_assertThisInitialized(_this), "turnServers", null);
    _defineProperty(_assertThisInitialized(_this), "contentLoadedWaitTimer", void 0);
    if (!(iframe !== null && iframe !== void 0 && iframe.contentWindow)) {
      throw new Error("No iframe supplied");
    }
    if (!widget) {
      throw new Error("Invalid widget");
    }
    if (!driver) {
      throw new Error("Invalid driver");
    }
    _this.transport = new _PostmessageTransport.PostmessageTransport(_WidgetApiDirection.WidgetApiDirection.ToWidget, widget.id, iframe.contentWindow, window);
    _this.transport.targetOrigin = widget.origin;
    _this.transport.on("message", _this.handleMessage.bind(_assertThisInitialized(_this)));
    iframe.addEventListener("load", _this.onIframeLoad.bind(_assertThisInitialized(_this)));
    _this.transport.start();
    return _this;
  }
  _createClass(ClientWidgetApi, [{
    key: "hasCapability",
    value: function hasCapability(capability) {
      return this.allowedCapabilities.has(capability);
    }
  }, {
    key: "canUseRoomTimeline",
    value: function canUseRoomTimeline(roomId) {
      return this.hasCapability("org.matrix.msc2762.timeline:".concat(_Symbols.Symbols.AnyRoom)) || this.hasCapability("org.matrix.msc2762.timeline:".concat(roomId));
    }
  }, {
    key: "canSendRoomEvent",
    value: function canSendRoomEvent(eventType) {
      var msgtype = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return this.allowedEvents.some(function (e) {
        return e.matchesAsRoomEvent(_WidgetEventCapability.EventDirection.Send, eventType, msgtype);
      });
    }
  }, {
    key: "canSendStateEvent",
    value: function canSendStateEvent(eventType, stateKey) {
      return this.allowedEvents.some(function (e) {
        return e.matchesAsStateEvent(_WidgetEventCapability.EventDirection.Send, eventType, stateKey);
      });
    }
  }, {
    key: "canSendToDeviceEvent",
    value: function canSendToDeviceEvent(eventType) {
      return this.allowedEvents.some(function (e) {
        return e.matchesAsToDeviceEvent(_WidgetEventCapability.EventDirection.Send, eventType);
      });
    }
  }, {
    key: "canReceiveRoomEvent",
    value: function canReceiveRoomEvent(eventType) {
      var msgtype = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return this.allowedEvents.some(function (e) {
        return e.matchesAsRoomEvent(_WidgetEventCapability.EventDirection.Receive, eventType, msgtype);
      });
    }
  }, {
    key: "canReceiveStateEvent",
    value: function canReceiveStateEvent(eventType, stateKey) {
      return this.allowedEvents.some(function (e) {
        return e.matchesAsStateEvent(_WidgetEventCapability.EventDirection.Receive, eventType, stateKey);
      });
    }
  }, {
    key: "canReceiveToDeviceEvent",
    value: function canReceiveToDeviceEvent(eventType) {
      return this.allowedEvents.some(function (e) {
        return e.matchesAsToDeviceEvent(_WidgetEventCapability.EventDirection.Receive, eventType);
      });
    }
  }, {
    key: "canReceiveRoomAccountData",
    value: function canReceiveRoomAccountData(eventType) {
      return this.allowedEvents.some(function (e) {
        return e.matchesAsRoomAccountData(_WidgetEventCapability.EventDirection.Receive, eventType);
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      this.isStopped = true;
      this.transport.stop();
    }
  }, {
    key: "beginCapabilities",
    value: function beginCapabilities() {
      var _this2 = this;
      // widget has loaded - tell all the listeners that
      this.emit("preparing");
      var requestedCaps;
      this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.Capabilities, {}).then(function (caps) {
        requestedCaps = caps.capabilities;
        return _this2.driver.validateCapabilities(new Set(caps.capabilities));
      }).then(function (allowedCaps) {
        console.log("Widget ".concat(_this2.widget.id, " is allowed capabilities:"), Array.from(allowedCaps));
        _this2.allowedCapabilities = allowedCaps;
        _this2.allowedEvents = _WidgetEventCapability.WidgetEventCapability.findEventCapabilities(allowedCaps);
        _this2.notifyCapabilities(requestedCaps);
        _this2.emit("ready");
      })["catch"](function (e) {
        _this2.emit("error:preparing", e);
      });
    }
  }, {
    key: "notifyCapabilities",
    value: function notifyCapabilities(requested) {
      var _this3 = this;
      this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.NotifyCapabilities, {
        requested: requested,
        approved: Array.from(this.allowedCapabilities)
      })["catch"](function (e) {
        console.warn("non-fatal error notifying widget of approved capabilities:", e);
      }).then(function () {
        _this3.emit("capabilitiesNotified");
      });
    }
  }, {
    key: "onIframeLoad",
    value: function onIframeLoad(ev) {
      if (this.widget.waitForIframeLoad) {
        // If the widget is set to waitForIframeLoad the capabilities immediatly get setup after load.
        // The client does not wait for the ContentLoaded action.
        this.beginCapabilities();
      } else {
        // Reaching this means, that the Iframe got reloaded/loaded and
        // the clientApi is awaiting the FIRST ContentLoaded action.
        console.log("waitForIframeLoad is false: waiting for widget to send contentLoaded");
        this.contentLoadedWaitTimer = setTimeout(function () {
          console.error("Widget specified waitForIframeLoad=false but timed out waiting for contentLoaded event!");
        }, 10000);
        this.contentLoadedActionSent = false;
      }
    }
  }, {
    key: "handleContentLoadedAction",
    value: function handleContentLoadedAction(action) {
      if (this.contentLoadedWaitTimer !== undefined) {
        clearTimeout(this.contentLoadedWaitTimer);
        this.contentLoadedWaitTimer = undefined;
      }
      if (this.contentLoadedActionSent) {
        throw new Error("Improper sequence: ContentLoaded Action can only be sent once after the widget loaded " + "and should only be used if waitForIframeLoad is false (default=true)");
      }
      if (this.widget.waitForIframeLoad) {
        this.transport.reply(action, {
          error: {
            message: "Improper sequence: not expecting ContentLoaded event if " + "waitForIframeLoad is true (default=true)"
          }
        });
      } else {
        this.transport.reply(action, {});
        this.beginCapabilities();
      }
      this.contentLoadedActionSent = true;
    }
  }, {
    key: "replyVersions",
    value: function replyVersions(request) {
      this.transport.reply(request, {
        supported_versions: _ApiVersion.CurrentApiVersions
      });
    }
  }, {
    key: "handleCapabilitiesRenegotiate",
    value: function handleCapabilitiesRenegotiate(request) {
      var _request$data,
        _this4 = this;
      // acknowledge first
      this.transport.reply(request, {});
      var requested = ((_request$data = request.data) === null || _request$data === void 0 ? void 0 : _request$data.capabilities) || [];
      var newlyRequested = new Set(requested.filter(function (r) {
        return !_this4.hasCapability(r);
      }));
      if (newlyRequested.size === 0) {
        // Nothing to do - notify capabilities
        return this.notifyCapabilities([]);
      }
      this.driver.validateCapabilities(newlyRequested).then(function (allowed) {
        allowed.forEach(function (c) {
          return _this4.allowedCapabilities.add(c);
        });
        var allowedEvents = _WidgetEventCapability.WidgetEventCapability.findEventCapabilities(allowed);
        allowedEvents.forEach(function (c) {
          return _this4.allowedEvents.push(c);
        });
        return _this4.notifyCapabilities(Array.from(newlyRequested));
      });
    }
  }, {
    key: "handleNavigate",
    value: function handleNavigate(request) {
      var _request$data2,
        _request$data3,
        _this5 = this;
      if (!this.hasCapability(_Capabilities.MatrixCapabilities.MSC2931Navigate)) {
        return this.transport.reply(request, {
          error: {
            message: "Missing capability"
          }
        });
      }
      if (!((_request$data2 = request.data) !== null && _request$data2 !== void 0 && _request$data2.uri) || !((_request$data3 = request.data) !== null && _request$data3 !== void 0 && _request$data3.uri.toString().startsWith("https://matrix.to/#"))) {
        return this.transport.reply(request, {
          error: {
            message: "Invalid matrix.to URI"
          }
        });
      }
      var onErr = function onErr(e) {
        console.error("[ClientWidgetApi] Failed to handle navigation: ", e);
        _this5.handleDriverError(e, request, "Error handling navigation");
      };
      try {
        this.driver.navigate(request.data.uri.toString())["catch"](function (e) {
          return onErr(e);
        }).then(function () {
          return _this5.transport.reply(request, {});
        });
      } catch (e) {
        return onErr(e);
      }
    }
  }, {
    key: "handleOIDC",
    value: function handleOIDC(request) {
      var _this6 = this;
      var phase = 1; // 1 = initial request, 2 = after user manual confirmation

      var replyState = function replyState(state, credential) {
        credential = credential || {};
        if (phase > 1) {
          return _this6.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.OpenIDCredentials, _objectSpread({
            state: state,
            original_request_id: request.requestId
          }, credential));
        } else {
          return _this6.transport.reply(request, _objectSpread({
            state: state
          }, credential));
        }
      };
      var replyError = function replyError(msg) {
        console.error("[ClientWidgetApi] Failed to handle OIDC: ", msg);
        if (phase > 1) {
          // We don't have a way to indicate that a random error happened in this flow, so
          // just block the attempt.
          return replyState(_GetOpenIDAction.OpenIDRequestState.Blocked);
        } else {
          return _this6.transport.reply(request, {
            error: {
              message: msg
            }
          });
        }
      };
      var observer = new _SimpleObservable.SimpleObservable(function (update) {
        if (update.state === _GetOpenIDAction.OpenIDRequestState.PendingUserConfirmation && phase > 1) {
          observer.close();
          return replyError("client provided out-of-phase response to OIDC flow");
        }
        if (update.state === _GetOpenIDAction.OpenIDRequestState.PendingUserConfirmation) {
          replyState(update.state);
          phase++;
          return;
        }
        if (update.state === _GetOpenIDAction.OpenIDRequestState.Allowed && !update.token) {
          return replyError("client provided invalid OIDC token for an allowed request");
        }
        if (update.state === _GetOpenIDAction.OpenIDRequestState.Blocked) {
          update.token = undefined; // just in case the client did something weird
        }

        observer.close();
        return replyState(update.state, update.token);
      });
      this.driver.askOpenID(observer);
    }
  }, {
    key: "handleReadRoomAccountData",
    value: function handleReadRoomAccountData(request) {
      var _this7 = this;
      var events = Promise.resolve([]);
      events = this.driver.readRoomAccountData(request.data.type);
      if (!this.canReceiveRoomAccountData(request.data.type)) {
        return this.transport.reply(request, {
          error: {
            message: "Cannot read room account data of this type"
          }
        });
      }
      return events.then(function (evs) {
        _this7.transport.reply(request, {
          events: evs
        });
      });
    }
  }, {
    key: "handleReadEvents",
    value: function handleReadEvents(request) {
      var _this8 = this;
      if (!request.data.type) {
        return this.transport.reply(request, {
          error: {
            message: "Invalid request - missing event type"
          }
        });
      }
      if (request.data.limit !== undefined && (!request.data.limit || request.data.limit < 0)) {
        return this.transport.reply(request, {
          error: {
            message: "Invalid request - limit out of range"
          }
        });
      }
      var askRoomIds = null; // null denotes current room only
      if (request.data.room_ids) {
        askRoomIds = request.data.room_ids;
        if (!Array.isArray(askRoomIds)) {
          askRoomIds = [askRoomIds];
        }
        var _iterator2 = _createForOfIteratorHelper(askRoomIds),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var roomId = _step2.value;
            if (!this.canUseRoomTimeline(roomId)) {
              return this.transport.reply(request, {
                error: {
                  message: "Unable to access room timeline: ".concat(roomId)
                }
              });
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      var limit = request.data.limit || 0;
      var since = request.data.since;
      var events = Promise.resolve([]);
      if (request.data.state_key !== undefined) {
        var stateKey = request.data.state_key === true ? undefined : request.data.state_key.toString();
        if (!this.canReceiveStateEvent(request.data.type, stateKey !== null && stateKey !== void 0 ? stateKey : null)) {
          return this.transport.reply(request, {
            error: {
              message: "Cannot read state events of this type"
            }
          });
        }
        events = this.driver.readStateEvents(request.data.type, stateKey, limit, askRoomIds);
      } else {
        if (!this.canReceiveRoomEvent(request.data.type, request.data.msgtype)) {
          return this.transport.reply(request, {
            error: {
              message: "Cannot read room events of this type"
            }
          });
        }
        events = this.driver.readRoomEvents(request.data.type, request.data.msgtype, limit, askRoomIds, since);
      }
      return events.then(function (evs) {
        return _this8.transport.reply(request, {
          events: evs
        });
      });
    }
  }, {
    key: "handleSendEvent",
    value: function handleSendEvent(request) {
      var _this9 = this;
      if (!request.data.type) {
        return this.transport.reply(request, {
          error: {
            message: "Invalid request - missing event type"
          }
        });
      }
      if (!!request.data.room_id && !this.canUseRoomTimeline(request.data.room_id)) {
        return this.transport.reply(request, {
          error: {
            message: "Unable to access room timeline: ".concat(request.data.room_id)
          }
        });
      }
      var isDelayedEvent = request.data.delay !== undefined || request.data.parent_delay_id !== undefined;
      if (isDelayedEvent && !this.hasCapability(_Capabilities.MatrixCapabilities.MSC4157SendDelayedEvent)) {
        return this.transport.reply(request, {
          error: {
            message: "Missing capability"
          }
        });
      }
      var sendEventPromise;
      if (request.data.state_key !== undefined) {
        if (!this.canSendStateEvent(request.data.type, request.data.state_key)) {
          return this.transport.reply(request, {
            error: {
              message: "Cannot send state events of this type"
            }
          });
        }
        if (!isDelayedEvent) {
          sendEventPromise = this.driver.sendEvent(request.data.type, request.data.content || {}, request.data.state_key, request.data.room_id);
        } else {
          var _request$data$delay, _request$data$parent_;
          sendEventPromise = this.driver.sendDelayedEvent((_request$data$delay = request.data.delay) !== null && _request$data$delay !== void 0 ? _request$data$delay : null, (_request$data$parent_ = request.data.parent_delay_id) !== null && _request$data$parent_ !== void 0 ? _request$data$parent_ : null, request.data.type, request.data.content || {}, request.data.state_key, request.data.room_id);
        }
      } else {
        var content = request.data.content || {};
        var msgtype = content['msgtype'];
        if (!this.canSendRoomEvent(request.data.type, msgtype)) {
          return this.transport.reply(request, {
            error: {
              message: "Cannot send room events of this type"
            }
          });
        }
        if (!isDelayedEvent) {
          sendEventPromise = this.driver.sendEvent(request.data.type, content, null,
          // not sending a state event
          request.data.room_id);
        } else {
          var _request$data$delay2, _request$data$parent_2;
          sendEventPromise = this.driver.sendDelayedEvent((_request$data$delay2 = request.data.delay) !== null && _request$data$delay2 !== void 0 ? _request$data$delay2 : null, (_request$data$parent_2 = request.data.parent_delay_id) !== null && _request$data$parent_2 !== void 0 ? _request$data$parent_2 : null, request.data.type, content, null,
          // not sending a state event
          request.data.room_id);
        }
      }
      sendEventPromise.then(function (sentEvent) {
        return _this9.transport.reply(request, _objectSpread({
          room_id: sentEvent.roomId
        }, "eventId" in sentEvent ? {
          event_id: sentEvent.eventId
        } : {
          delay_id: sentEvent.delayId
        }));
      })["catch"](function (e) {
        console.error("error sending event: ", e);
        _this9.handleDriverError(e, request, "Error sending event");
      });
    }
  }, {
    key: "handleUpdateDelayedEvent",
    value: function handleUpdateDelayedEvent(request) {
      var _this10 = this;
      if (!request.data.delay_id) {
        return this.transport.reply(request, {
          error: {
            message: "Invalid request - missing delay_id"
          }
        });
      }
      if (!this.hasCapability(_Capabilities.MatrixCapabilities.MSC4157UpdateDelayedEvent)) {
        return this.transport.reply(request, {
          error: {
            message: "Missing capability"
          }
        });
      }
      switch (request.data.action) {
        case _UpdateDelayedEventAction.UpdateDelayedEventAction.Cancel:
        case _UpdateDelayedEventAction.UpdateDelayedEventAction.Restart:
        case _UpdateDelayedEventAction.UpdateDelayedEventAction.Send:
          this.driver.updateDelayedEvent(request.data.delay_id, request.data.action).then(function () {
            return _this10.transport.reply(request, {});
          })["catch"](function (e) {
            console.error("error updating delayed event: ", e);
            _this10.handleDriverError(e, request, "Error updating delayed event");
          });
          break;
        default:
          return this.transport.reply(request, {
            error: {
              message: "Invalid request - unsupported action"
            }
          });
      }
    }
  }, {
    key: "handleSendToDevice",
    value: function () {
      var _handleSendToDevice = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (request.data.type) {
                _context.next = 5;
                break;
              }
              _context.next = 3;
              return this.transport.reply(request, {
                error: {
                  message: "Invalid request - missing event type"
                }
              });
            case 3:
              _context.next = 31;
              break;
            case 5:
              if (request.data.messages) {
                _context.next = 10;
                break;
              }
              _context.next = 8;
              return this.transport.reply(request, {
                error: {
                  message: "Invalid request - missing event contents"
                }
              });
            case 8:
              _context.next = 31;
              break;
            case 10:
              if (!(typeof request.data.encrypted !== "boolean")) {
                _context.next = 15;
                break;
              }
              _context.next = 13;
              return this.transport.reply(request, {
                error: {
                  message: "Invalid request - missing encryption flag"
                }
              });
            case 13:
              _context.next = 31;
              break;
            case 15:
              if (this.canSendToDeviceEvent(request.data.type)) {
                _context.next = 20;
                break;
              }
              _context.next = 18;
              return this.transport.reply(request, {
                error: {
                  message: "Cannot send to-device events of this type"
                }
              });
            case 18:
              _context.next = 31;
              break;
            case 20:
              _context.prev = 20;
              _context.next = 23;
              return this.driver.sendToDevice(request.data.type, request.data.encrypted, request.data.messages);
            case 23:
              _context.next = 25;
              return this.transport.reply(request, {});
            case 25:
              _context.next = 31;
              break;
            case 27:
              _context.prev = 27;
              _context.t0 = _context["catch"](20);
              console.error("error sending to-device event", _context.t0);
              this.handleDriverError(_context.t0, request, "Error sending event");
            case 31:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[20, 27]]);
      }));
      function handleSendToDevice(_x) {
        return _handleSendToDevice.apply(this, arguments);
      }
      return handleSendToDevice;
    }()
  }, {
    key: "pollTurnServers",
    value: function () {
      var _pollTurnServers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(turnServers, initialServer) {
        var _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, server;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.UpdateTurnServers, initialServer // it's compatible, but missing the index signature
              );
            case 3:
              // Pick the generator up where we left off
              _iteratorAbruptCompletion = false;
              _didIteratorError = false;
              _context2.prev = 5;
              _iterator = _asyncIterator(turnServers);
            case 7:
              _context2.next = 9;
              return _iterator.next();
            case 9:
              if (!(_iteratorAbruptCompletion = !(_step = _context2.sent).done)) {
                _context2.next = 16;
                break;
              }
              server = _step.value;
              _context2.next = 13;
              return this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.UpdateTurnServers, server // it's compatible, but missing the index signature
              );
            case 13:
              _iteratorAbruptCompletion = false;
              _context2.next = 7;
              break;
            case 16:
              _context2.next = 22;
              break;
            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](5);
              _didIteratorError = true;
              _iteratorError = _context2.t0;
            case 22:
              _context2.prev = 22;
              _context2.prev = 23;
              if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
                _context2.next = 27;
                break;
              }
              _context2.next = 27;
              return _iterator["return"]();
            case 27:
              _context2.prev = 27;
              if (!_didIteratorError) {
                _context2.next = 30;
                break;
              }
              throw _iteratorError;
            case 30:
              return _context2.finish(27);
            case 31:
              return _context2.finish(22);
            case 32:
              _context2.next = 37;
              break;
            case 34:
              _context2.prev = 34;
              _context2.t1 = _context2["catch"](0);
              console.error("error polling for TURN servers", _context2.t1);
            case 37:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 34], [5, 18, 22, 32], [23,, 27, 31]]);
      }));
      function pollTurnServers(_x2, _x3) {
        return _pollTurnServers.apply(this, arguments);
      }
      return pollTurnServers;
    }()
  }, {
    key: "handleWatchTurnServers",
    value: function () {
      var _handleWatchTurnServers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var turnServers, _yield$turnServers$ne, done, value;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (this.hasCapability(_Capabilities.MatrixCapabilities.MSC3846TurnServers)) {
                _context3.next = 5;
                break;
              }
              _context3.next = 3;
              return this.transport.reply(request, {
                error: {
                  message: "Missing capability"
                }
              });
            case 3:
              _context3.next = 30;
              break;
            case 5:
              if (!this.turnServers) {
                _context3.next = 10;
                break;
              }
              _context3.next = 8;
              return this.transport.reply(request, {});
            case 8:
              _context3.next = 30;
              break;
            case 10:
              _context3.prev = 10;
              turnServers = this.driver.getTurnServers(); // Peek at the first result, so we can at least verify that the
              // client isn't banned from getting TURN servers entirely
              _context3.next = 14;
              return turnServers.next();
            case 14:
              _yield$turnServers$ne = _context3.sent;
              done = _yield$turnServers$ne.done;
              value = _yield$turnServers$ne.value;
              if (!done) {
                _context3.next = 19;
                break;
              }
              throw new Error("Client refuses to provide any TURN servers");
            case 19:
              _context3.next = 21;
              return this.transport.reply(request, {});
            case 21:
              // Start the poll loop, sending the widget the initial result
              this.pollTurnServers(turnServers, value);
              this.turnServers = turnServers;
              _context3.next = 30;
              break;
            case 25:
              _context3.prev = 25;
              _context3.t0 = _context3["catch"](10);
              console.error("error getting first TURN server results", _context3.t0);
              _context3.next = 30;
              return this.transport.reply(request, {
                error: {
                  message: "TURN servers not available"
                }
              });
            case 30:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[10, 25]]);
      }));
      function handleWatchTurnServers(_x4) {
        return _handleWatchTurnServers.apply(this, arguments);
      }
      return handleWatchTurnServers;
    }()
  }, {
    key: "handleUnwatchTurnServers",
    value: function () {
      var _handleUnwatchTurnServers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (this.hasCapability(_Capabilities.MatrixCapabilities.MSC3846TurnServers)) {
                _context4.next = 5;
                break;
              }
              _context4.next = 3;
              return this.transport.reply(request, {
                error: {
                  message: "Missing capability"
                }
              });
            case 3:
              _context4.next = 15;
              break;
            case 5:
              if (this.turnServers) {
                _context4.next = 10;
                break;
              }
              _context4.next = 8;
              return this.transport.reply(request, {});
            case 8:
              _context4.next = 15;
              break;
            case 10:
              _context4.next = 12;
              return this.turnServers["return"](undefined);
            case 12:
              this.turnServers = null;
              _context4.next = 15;
              return this.transport.reply(request, {});
            case 15:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function handleUnwatchTurnServers(_x5) {
        return _handleUnwatchTurnServers.apply(this, arguments);
      }
      return handleUnwatchTurnServers;
    }()
  }, {
    key: "handleReadRelations",
    value: function () {
      var _handleReadRelations = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request) {
        var _this11 = this;
        var result, chunk;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (request.data.event_id) {
                _context5.next = 2;
                break;
              }
              return _context5.abrupt("return", this.transport.reply(request, {
                error: {
                  message: "Invalid request - missing event ID"
                }
              }));
            case 2:
              if (!(request.data.limit !== undefined && request.data.limit < 0)) {
                _context5.next = 4;
                break;
              }
              return _context5.abrupt("return", this.transport.reply(request, {
                error: {
                  message: "Invalid request - limit out of range"
                }
              }));
            case 4:
              if (!(request.data.room_id !== undefined && !this.canUseRoomTimeline(request.data.room_id))) {
                _context5.next = 6;
                break;
              }
              return _context5.abrupt("return", this.transport.reply(request, {
                error: {
                  message: "Unable to access room timeline: ".concat(request.data.room_id)
                }
              }));
            case 6:
              _context5.prev = 6;
              _context5.next = 9;
              return this.driver.readEventRelations(request.data.event_id, request.data.room_id, request.data.rel_type, request.data.event_type, request.data.from, request.data.to, request.data.limit, request.data.direction);
            case 9:
              result = _context5.sent;
              // only return events that the user has the permission to receive
              chunk = result.chunk.filter(function (e) {
                if (e.state_key !== undefined) {
                  return _this11.canReceiveStateEvent(e.type, e.state_key);
                } else {
                  return _this11.canReceiveRoomEvent(e.type, e.content['msgtype']);
                }
              });
              return _context5.abrupt("return", this.transport.reply(request, {
                chunk: chunk,
                prev_batch: result.prevBatch,
                next_batch: result.nextBatch
              }));
            case 14:
              _context5.prev = 14;
              _context5.t0 = _context5["catch"](6);
              console.error("error getting the relations", _context5.t0);
              this.handleDriverError(_context5.t0, request, "Unexpected error while reading relations");
            case 18:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[6, 14]]);
      }));
      function handleReadRelations(_x6) {
        return _handleReadRelations.apply(this, arguments);
      }
      return handleReadRelations;
    }()
  }, {
    key: "handleUserDirectorySearch",
    value: function () {
      var _handleUserDirectorySearch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(request) {
        var result;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (this.hasCapability(_Capabilities.MatrixCapabilities.MSC3973UserDirectorySearch)) {
                _context6.next = 2;
                break;
              }
              return _context6.abrupt("return", this.transport.reply(request, {
                error: {
                  message: "Missing capability"
                }
              }));
            case 2:
              if (!(typeof request.data.search_term !== 'string')) {
                _context6.next = 4;
                break;
              }
              return _context6.abrupt("return", this.transport.reply(request, {
                error: {
                  message: "Invalid request - missing search term"
                }
              }));
            case 4:
              if (!(request.data.limit !== undefined && request.data.limit < 0)) {
                _context6.next = 6;
                break;
              }
              return _context6.abrupt("return", this.transport.reply(request, {
                error: {
                  message: "Invalid request - limit out of range"
                }
              }));
            case 6:
              _context6.prev = 6;
              _context6.next = 9;
              return this.driver.searchUserDirectory(request.data.search_term, request.data.limit);
            case 9:
              result = _context6.sent;
              return _context6.abrupt("return", this.transport.reply(request, {
                limited: result.limited,
                results: result.results.map(function (r) {
                  return {
                    user_id: r.userId,
                    display_name: r.displayName,
                    avatar_url: r.avatarUrl
                  };
                })
              }));
            case 13:
              _context6.prev = 13;
              _context6.t0 = _context6["catch"](6);
              console.error("error searching in the user directory", _context6.t0);
              this.handleDriverError(_context6.t0, request, "Unexpected error while searching in the user directory");
            case 17:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[6, 13]]);
      }));
      function handleUserDirectorySearch(_x7) {
        return _handleUserDirectorySearch.apply(this, arguments);
      }
      return handleUserDirectorySearch;
    }()
  }, {
    key: "handleGetMediaConfig",
    value: function () {
      var _handleGetMediaConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(request) {
        var result;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (this.hasCapability(_Capabilities.MatrixCapabilities.MSC4039UploadFile)) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return", this.transport.reply(request, {
                error: {
                  message: "Missing capability"
                }
              }));
            case 2:
              _context7.prev = 2;
              _context7.next = 5;
              return this.driver.getMediaConfig();
            case 5:
              result = _context7.sent;
              return _context7.abrupt("return", this.transport.reply(request, result));
            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7["catch"](2);
              console.error("error while getting the media configuration", _context7.t0);
              this.handleDriverError(_context7.t0, request, "Unexpected error while getting the media configuration");
            case 13:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[2, 9]]);
      }));
      function handleGetMediaConfig(_x8) {
        return _handleGetMediaConfig.apply(this, arguments);
      }
      return handleGetMediaConfig;
    }()
  }, {
    key: "handleUploadFile",
    value: function () {
      var _handleUploadFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(request) {
        var result;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (this.hasCapability(_Capabilities.MatrixCapabilities.MSC4039UploadFile)) {
                _context8.next = 2;
                break;
              }
              return _context8.abrupt("return", this.transport.reply(request, {
                error: {
                  message: "Missing capability"
                }
              }));
            case 2:
              _context8.prev = 2;
              _context8.next = 5;
              return this.driver.uploadFile(request.data.file);
            case 5:
              result = _context8.sent;
              return _context8.abrupt("return", this.transport.reply(request, {
                content_uri: result.contentUri
              }));
            case 9:
              _context8.prev = 9;
              _context8.t0 = _context8["catch"](2);
              console.error("error while uploading a file", _context8.t0);
              this.handleDriverError(_context8.t0, request, "Unexpected error while uploading a file");
            case 13:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[2, 9]]);
      }));
      function handleUploadFile(_x9) {
        return _handleUploadFile.apply(this, arguments);
      }
      return handleUploadFile;
    }()
  }, {
    key: "handleDownloadFile",
    value: function () {
      var _handleDownloadFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(request) {
        var result;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (this.hasCapability(_Capabilities.MatrixCapabilities.MSC4039DownloadFile)) {
                _context9.next = 2;
                break;
              }
              return _context9.abrupt("return", this.transport.reply(request, {
                error: {
                  message: "Missing capability"
                }
              }));
            case 2:
              _context9.prev = 2;
              _context9.next = 5;
              return this.driver.downloadFile(request.data.content_uri);
            case 5:
              result = _context9.sent;
              return _context9.abrupt("return", this.transport.reply(request, {
                file: result.file
              }));
            case 9:
              _context9.prev = 9;
              _context9.t0 = _context9["catch"](2);
              console.error("error while downloading a file", _context9.t0);
              this.handleDriverError(_context9.t0, request, "Unexpected error while downloading a file");
            case 13:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[2, 9]]);
      }));
      function handleDownloadFile(_x10) {
        return _handleDownloadFile.apply(this, arguments);
      }
      return handleDownloadFile;
    }()
  }, {
    key: "handleDriverError",
    value: function handleDriverError(e, request, message) {
      var data = this.driver.processError(e);
      this.transport.reply(request, {
        error: _objectSpread({
          message: message
        }, data)
      });
    }
  }, {
    key: "handleMessage",
    value: function handleMessage(ev) {
      if (this.isStopped) return;
      var actionEv = new CustomEvent("action:".concat(ev.detail.action), {
        detail: ev.detail,
        cancelable: true
      });
      this.emit("action:".concat(ev.detail.action), actionEv);
      if (!actionEv.defaultPrevented) {
        switch (ev.detail.action) {
          case _WidgetApiAction.WidgetApiFromWidgetAction.ContentLoaded:
            return this.handleContentLoadedAction(ev.detail);
          case _WidgetApiAction.WidgetApiFromWidgetAction.SupportedApiVersions:
            return this.replyVersions(ev.detail);
          case _WidgetApiAction.WidgetApiFromWidgetAction.SendEvent:
            return this.handleSendEvent(ev.detail);
          case _WidgetApiAction.WidgetApiFromWidgetAction.SendToDevice:
            return this.handleSendToDevice(ev.detail);
          case _WidgetApiAction.WidgetApiFromWidgetAction.GetOpenIDCredentials:
            return this.handleOIDC(ev.detail);
          case _WidgetApiAction.WidgetApiFromWidgetAction.MSC2931Navigate:
            return this.handleNavigate(ev.detail);
          case _WidgetApiAction.WidgetApiFromWidgetAction.MSC2974RenegotiateCapabilities:
            return this.handleCapabilitiesRenegotiate(ev.detail);
          case _WidgetApiAction.WidgetApiFromWidgetAction.MSC2876ReadEvents:
            return this.handleReadEvents(ev.detail);
          case _WidgetApiAction.WidgetApiFromWidgetAction.WatchTurnServers:
            return this.handleWatchTurnServers(ev.detail);
          case _WidgetApiAction.WidgetApiFromWidgetAction.UnwatchTurnServers:
            return this.handleUnwatchTurnServers(ev.detail);
          case _WidgetApiAction.WidgetApiFromWidgetAction.MSC3869ReadRelations:
            return this.handleReadRelations(ev.detail);
          case _WidgetApiAction.WidgetApiFromWidgetAction.MSC3973UserDirectorySearch:
            return this.handleUserDirectorySearch(ev.detail);
          case _WidgetApiAction.WidgetApiFromWidgetAction.BeeperReadRoomAccountData:
            return this.handleReadRoomAccountData(ev.detail);
          case _WidgetApiAction.WidgetApiFromWidgetAction.MSC4039GetMediaConfigAction:
            return this.handleGetMediaConfig(ev.detail);
          case _WidgetApiAction.WidgetApiFromWidgetAction.MSC4039UploadFileAction:
            return this.handleUploadFile(ev.detail);
          case _WidgetApiAction.WidgetApiFromWidgetAction.MSC4039DownloadFileAction:
            return this.handleDownloadFile(ev.detail);
          case _WidgetApiAction.WidgetApiFromWidgetAction.MSC4157UpdateDelayedEvent:
            return this.handleUpdateDelayedEvent(ev.detail);
          default:
            return this.transport.reply(ev.detail, {
              error: {
                message: "Unknown or unsupported action: " + ev.detail.action
              }
            });
        }
      }
    }

    /**
     * Takes a screenshot of the widget.
     * @returns Resolves to the widget's screenshot.
     * @throws Throws if there is a problem.
     */
  }, {
    key: "takeScreenshot",
    value: function takeScreenshot() {
      return this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.TakeScreenshot, {});
    }

    /**
     * Alerts the widget to whether or not it is currently visible.
     * @param {boolean} isVisible Whether the widget is visible or not.
     * @returns {Promise<IWidgetApiResponseData>} Resolves when the widget acknowledges the update.
     */
  }, {
    key: "updateVisibility",
    value: function updateVisibility(isVisible) {
      return this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.UpdateVisibility, {
        visible: isVisible
      });
    }
  }, {
    key: "sendWidgetConfig",
    value: function sendWidgetConfig(data) {
      return this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.WidgetConfig, data).then();
    }
  }, {
    key: "notifyModalWidgetButtonClicked",
    value: function notifyModalWidgetButtonClicked(id) {
      return this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.ButtonClicked, {
        id: id
      }).then();
    }
  }, {
    key: "notifyModalWidgetClose",
    value: function notifyModalWidgetClose(data) {
      return this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.CloseModalWidget, data).then();
    }

    /**
     * Feeds an event to the widget. If the widget is not able to accept the event due to
     * permissions, this will no-op and return calmly. If the widget failed to handle the
     * event, this will raise an error.
     * @param {IRoomEvent} rawEvent The event to (try to) send to the widget.
     * @param {string} currentViewedRoomId The room ID the user is currently interacting with.
     * Not the room ID of the event.
     * @returns {Promise<void>} Resolves when complete, rejects if there was an error sending.
     */
  }, {
    key: "feedEvent",
    value: function () {
      var _feedEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(rawEvent, currentViewedRoomId) {
        var _rawEvent$content;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              if (!(rawEvent.room_id !== currentViewedRoomId && !this.canUseRoomTimeline(rawEvent.room_id))) {
                _context10.next = 2;
                break;
              }
              return _context10.abrupt("return");
            case 2:
              if (!(rawEvent.state_key !== undefined && rawEvent.state_key !== null)) {
                _context10.next = 7;
                break;
              }
              if (this.canReceiveStateEvent(rawEvent.type, rawEvent.state_key)) {
                _context10.next = 5;
                break;
              }
              return _context10.abrupt("return");
            case 5:
              _context10.next = 9;
              break;
            case 7:
              if (this.canReceiveRoomEvent(rawEvent.type, (_rawEvent$content = rawEvent.content) === null || _rawEvent$content === void 0 ? void 0 : _rawEvent$content["msgtype"])) {
                _context10.next = 9;
                break;
              }
              return _context10.abrupt("return");
            case 9:
              _context10.next = 11;
              return this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.SendEvent, rawEvent // it's compatible, but missing the index signature
              );
            case 11:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function feedEvent(_x11, _x12) {
        return _feedEvent.apply(this, arguments);
      }
      return feedEvent;
    }()
    /**
     * Feeds a to-device event to the widget. If the widget is not able to accept the
     * event due to permissions, this will no-op and return calmly. If the widget failed
     * to handle the event, this will raise an error.
     * @param {IRoomEvent} rawEvent The event to (try to) send to the widget.
     * @param {boolean} encrypted Whether the event contents were encrypted.
     * @returns {Promise<void>} Resolves when complete, rejects if there was an error sending.
     */
  }, {
    key: "feedToDevice",
    value: function () {
      var _feedToDevice = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(rawEvent, encrypted) {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              if (!this.canReceiveToDeviceEvent(rawEvent.type)) {
                _context11.next = 3;
                break;
              }
              _context11.next = 3;
              return this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.SendToDevice, // it's compatible, but missing the index signature
              _objectSpread(_objectSpread({}, rawEvent), {}, {
                encrypted: encrypted
              }));
            case 3:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function feedToDevice(_x13, _x14) {
        return _feedToDevice.apply(this, arguments);
      }
      return feedToDevice;
    }()
  }]);
  return ClientWidgetApi;
}(_events.EventEmitter);
exports.ClientWidgetApi = ClientWidgetApi;

},{"./Symbols":2,"./interfaces/ApiVersion":6,"./interfaces/Capabilities":7,"./interfaces/GetOpenIDAction":12,"./interfaces/UpdateDelayedEventAction":36,"./interfaces/WidgetApiAction":39,"./interfaces/WidgetApiDirection":40,"./models/WidgetEventCapability":45,"./transport/PostmessageTransport":51,"./util/SimpleObservable":52,"events":53}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Symbols = void 0;
/*
 * Copyright 2021 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Symbols = /*#__PURE__*/function (Symbols) {
  Symbols["AnyRoom"] = "*";
  return Symbols;
}({});
exports.Symbols = Symbols;

},{}],3:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetApiResponseError = exports.WidgetApi = void 0;
var _events = require("events");
var _WidgetApiDirection = require("./interfaces/WidgetApiDirection");
var _ApiVersion = require("./interfaces/ApiVersion");
var _PostmessageTransport = require("./transport/PostmessageTransport");
var _WidgetApiAction = require("./interfaces/WidgetApiAction");
var _GetOpenIDAction = require("./interfaces/GetOpenIDAction");
var _WidgetType = require("./interfaces/WidgetType");
var _ModalWidgetActions = require("./interfaces/ModalWidgetActions");
var _WidgetEventCapability = require("./models/WidgetEventCapability");
var _Symbols = require("./Symbols");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _awaitAsyncGenerator(value) { return new _OverloadYield(value, 0); }
function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }
function _AsyncGenerator(gen) { var front, back; function resume(key, arg) { try { var result = gen[key](arg), value = result.value, overloaded = value instanceof _OverloadYield; Promise.resolve(overloaded ? value.v : value).then(function (arg) { if (overloaded) { var nextKey = "return" === key ? "return" : "next"; if (!value.k || arg.done) return resume(nextKey, arg); arg = gen[nextKey](arg).value; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: !0 }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: !1 }); } (front = front.next) ? resume(front.key, front.arg) : back = null; } this._invoke = function (key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; back ? back = back.next = request : (front = back = request, resume(key, arg)); }); }, "function" != typeof gen["return"] && (this["return"] = void 0); }
_AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; }, _AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); }, _AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); }, _AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };
function _OverloadYield(value, kind) { this.v = value, this.k = kind; } /*
                                                                         * Copyright 2020 - 2024 The Matrix.org Foundation C.I.C.
                                                                         *
                                                                         * Licensed under the Apache License, Version 2.0 (the "License");
                                                                         * you may not use this file except in compliance with the License.
                                                                         * You may obtain a copy of the License at
                                                                         *
                                                                         *         http://www.apache.org/licenses/LICENSE-2.0
                                                                         *
                                                                         * Unless required by applicable law or agreed to in writing, software
                                                                         * distributed under the License is distributed on an "AS IS" BASIS,
                                                                         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                         * See the License for the specific language governing permissions and
                                                                         * limitations under the License.
                                                                         */
var WidgetApiResponseError = /*#__PURE__*/function (_Error) {
  _inherits(WidgetApiResponseError, _Error);
  var _super = _createSuper(WidgetApiResponseError);
  function WidgetApiResponseError(message, data) {
    var _this2;
    _classCallCheck(this, WidgetApiResponseError);
    _this2 = _super.call(this, message);
    _this2.data = data;
    return _this2;
  }
  return _createClass(WidgetApiResponseError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * API handler for widgets. This raises events for each action
 * received as `action:${action}` (eg: "action:screenshot").
 * Default handling can be prevented by using preventDefault()
 * on the raised event. The default handling varies for each
 * action: ones which the SDK can handle safely are acknowledged
 * appropriately and ones which are unhandled (custom or require
 * the widget to do something) are rejected with an error.
 *
 * Events which are preventDefault()ed must reply using the
 * transport. The events raised will have a detail of an
 * IWidgetApiRequest interface.
 *
 * When the WidgetApi is ready to start sending requests, it will
 * raise a "ready" CustomEvent. After the ready event fires, actions
 * can be sent and the transport will be ready.
 */
exports.WidgetApiResponseError = WidgetApiResponseError;
WidgetApiResponseError.prototype.name = WidgetApiResponseError.name;
var WidgetApi = /*#__PURE__*/function (_EventEmitter) {
  _inherits(WidgetApi, _EventEmitter);
  var _super2 = _createSuper(WidgetApi);
  /**
   * Creates a new API handler for the given widget.
   * @param {string} widgetId The widget ID to listen for. If not supplied then
   * the API will use the widget ID from the first valid request it receives.
   * @param {string} clientOrigin The origin of the client, or null if not known.
   */
  function WidgetApi() {
    var _this3;
    var widgetId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var clientOrigin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, WidgetApi);
    _this3 = _super2.call(this);
    _this3.clientOrigin = clientOrigin;
    _defineProperty(_assertThisInitialized(_this3), "transport", void 0);
    _defineProperty(_assertThisInitialized(_this3), "capabilitiesFinished", false);
    _defineProperty(_assertThisInitialized(_this3), "supportsMSC2974Renegotiate", false);
    _defineProperty(_assertThisInitialized(_this3), "requestedCapabilities", []);
    _defineProperty(_assertThisInitialized(_this3), "approvedCapabilities", void 0);
    _defineProperty(_assertThisInitialized(_this3), "cachedClientVersions", void 0);
    _defineProperty(_assertThisInitialized(_this3), "turnServerWatchers", 0);
    if (!window.parent) {
      throw new Error("No parent window. This widget doesn't appear to be embedded properly.");
    }
    _this3.transport = new _PostmessageTransport.PostmessageTransport(_WidgetApiDirection.WidgetApiDirection.FromWidget, widgetId, window.parent, window);
    _this3.transport.targetOrigin = clientOrigin;
    _this3.transport.on("message", _this3.handleMessage.bind(_assertThisInitialized(_this3)));
    return _this3;
  }

  /**
   * Determines if the widget was granted a particular capability. Note that on
   * clients where the capabilities are not fed back to the widget this function
   * will rely on requested capabilities instead.
   * @param {Capability} capability The capability to check for approval of.
   * @returns {boolean} True if the widget has approval for the given capability.
   */
  _createClass(WidgetApi, [{
    key: "hasCapability",
    value: function hasCapability(capability) {
      if (Array.isArray(this.approvedCapabilities)) {
        return this.approvedCapabilities.includes(capability);
      }
      return this.requestedCapabilities.includes(capability);
    }

    /**
     * Request a capability from the client. It is not guaranteed to be allowed,
     * but will be asked for.
     * @param {Capability} capability The capability to request.
     * @throws Throws if the capabilities negotiation has already started and the
     * widget is unable to request additional capabilities.
     */
  }, {
    key: "requestCapability",
    value: function requestCapability(capability) {
      if (this.capabilitiesFinished && !this.supportsMSC2974Renegotiate) {
        throw new Error("Capabilities have already been negotiated");
      }
      this.requestedCapabilities.push(capability);
    }

    /**
     * Request capabilities from the client. They are not guaranteed to be allowed,
     * but will be asked for if the negotiation has not already happened.
     * @param {Capability[]} capabilities The capabilities to request.
     * @throws Throws if the capabilities negotiation has already started.
     */
  }, {
    key: "requestCapabilities",
    value: function requestCapabilities(capabilities) {
      var _this4 = this;
      capabilities.forEach(function (cap) {
        return _this4.requestCapability(cap);
      });
    }

    /**
     * Requests the capability to interact with rooms other than the user's currently
     * viewed room. Applies to event receiving and sending.
     * @param {string | Symbols.AnyRoom} roomId The room ID, or `Symbols.AnyRoom` to
     * denote all known rooms.
     */
  }, {
    key: "requestCapabilityForRoomTimeline",
    value: function requestCapabilityForRoomTimeline(roomId) {
      this.requestCapability("org.matrix.msc2762.timeline:".concat(roomId));
    }

    /**
     * Requests the capability to send a given state event with optional explicit
     * state key. It is not guaranteed to be allowed, but will be asked for if the
     * negotiation has not already happened.
     * @param {string} eventType The state event type to ask for.
     * @param {string} stateKey If specified, the specific state key to request.
     * Otherwise all state keys will be requested.
     */
  }, {
    key: "requestCapabilityToSendState",
    value: function requestCapabilityToSendState(eventType, stateKey) {
      this.requestCapability(_WidgetEventCapability.WidgetEventCapability.forStateEvent(_WidgetEventCapability.EventDirection.Send, eventType, stateKey).raw);
    }

    /**
     * Requests the capability to receive a given state event with optional explicit
     * state key. It is not guaranteed to be allowed, but will be asked for if the
     * negotiation has not already happened.
     * @param {string} eventType The state event type to ask for.
     * @param {string} stateKey If specified, the specific state key to request.
     * Otherwise all state keys will be requested.
     */
  }, {
    key: "requestCapabilityToReceiveState",
    value: function requestCapabilityToReceiveState(eventType, stateKey) {
      this.requestCapability(_WidgetEventCapability.WidgetEventCapability.forStateEvent(_WidgetEventCapability.EventDirection.Receive, eventType, stateKey).raw);
    }

    /**
     * Requests the capability to send a given to-device event. It is not
     * guaranteed to be allowed, but will be asked for if the negotiation has
     * not already happened.
     * @param {string} eventType The room event type to ask for.
     */
  }, {
    key: "requestCapabilityToSendToDevice",
    value: function requestCapabilityToSendToDevice(eventType) {
      this.requestCapability(_WidgetEventCapability.WidgetEventCapability.forToDeviceEvent(_WidgetEventCapability.EventDirection.Send, eventType).raw);
    }

    /**
     * Requests the capability to receive a given to-device event. It is not
     * guaranteed to be allowed, but will be asked for if the negotiation has
     * not already happened.
     * @param {string} eventType The room event type to ask for.
     */
  }, {
    key: "requestCapabilityToReceiveToDevice",
    value: function requestCapabilityToReceiveToDevice(eventType) {
      this.requestCapability(_WidgetEventCapability.WidgetEventCapability.forToDeviceEvent(_WidgetEventCapability.EventDirection.Receive, eventType).raw);
    }

    /**
     * Requests the capability to send a given room event. It is not guaranteed to be
     * allowed, but will be asked for if the negotiation has not already happened.
     * @param {string} eventType The room event type to ask for.
     */
  }, {
    key: "requestCapabilityToSendEvent",
    value: function requestCapabilityToSendEvent(eventType) {
      this.requestCapability(_WidgetEventCapability.WidgetEventCapability.forRoomEvent(_WidgetEventCapability.EventDirection.Send, eventType).raw);
    }

    /**
     * Requests the capability to receive a given room event. It is not guaranteed to be
     * allowed, but will be asked for if the negotiation has not already happened.
     * @param {string} eventType The room event type to ask for.
     */
  }, {
    key: "requestCapabilityToReceiveEvent",
    value: function requestCapabilityToReceiveEvent(eventType) {
      this.requestCapability(_WidgetEventCapability.WidgetEventCapability.forRoomEvent(_WidgetEventCapability.EventDirection.Receive, eventType).raw);
    }

    /**
     * Requests the capability to send a given message event with optional explicit
     * `msgtype`. It is not guaranteed to be allowed, but will be asked for if the
     * negotiation has not already happened.
     * @param {string} msgtype If specified, the specific msgtype to request.
     * Otherwise all message types will be requested.
     */
  }, {
    key: "requestCapabilityToSendMessage",
    value: function requestCapabilityToSendMessage(msgtype) {
      this.requestCapability(_WidgetEventCapability.WidgetEventCapability.forRoomMessageEvent(_WidgetEventCapability.EventDirection.Send, msgtype).raw);
    }

    /**
     * Requests the capability to receive a given message event with optional explicit
     * `msgtype`. It is not guaranteed to be allowed, but will be asked for if the
     * negotiation has not already happened.
     * @param {string} msgtype If specified, the specific msgtype to request.
     * Otherwise all message types will be requested.
     */
  }, {
    key: "requestCapabilityToReceiveMessage",
    value: function requestCapabilityToReceiveMessage(msgtype) {
      this.requestCapability(_WidgetEventCapability.WidgetEventCapability.forRoomMessageEvent(_WidgetEventCapability.EventDirection.Receive, msgtype).raw);
    }

    /**
     * Requests the capability to receive a given item in room account data. It is not guaranteed to be
     * allowed, but will be asked for if the negotiation has not already happened.
     * @param {string} eventType The state event type to ask for.
     */
  }, {
    key: "requestCapabilityToReceiveRoomAccountData",
    value: function requestCapabilityToReceiveRoomAccountData(eventType) {
      this.requestCapability(_WidgetEventCapability.WidgetEventCapability.forRoomAccountData(_WidgetEventCapability.EventDirection.Receive, eventType).raw);
    }

    /**
     * Requests an OpenID Connect token from the client for the currently logged in
     * user. This token can be validated server-side with the federation API. Note
     * that the widget is responsible for validating the token and caching any results
     * it needs.
     * @returns {Promise<IOpenIDCredentials>} Resolves to a token for verification.
     * @throws Throws if the user rejected the request or the request failed.
     */
  }, {
    key: "requestOpenIDConnectToken",
    value: function requestOpenIDConnectToken() {
      var _this5 = this;
      return new Promise(function (resolve, reject) {
        _this5.transport.sendComplete(_WidgetApiAction.WidgetApiFromWidgetAction.GetOpenIDCredentials, {}).then(function (response) {
          var rdata = response.response;
          if (rdata.state === _GetOpenIDAction.OpenIDRequestState.Allowed) {
            resolve(rdata);
          } else if (rdata.state === _GetOpenIDAction.OpenIDRequestState.Blocked) {
            reject(new Error("User declined to verify their identity"));
          } else if (rdata.state === _GetOpenIDAction.OpenIDRequestState.PendingUserConfirmation) {
            var handlerFn = function handlerFn(ev) {
              ev.preventDefault();
              var request = ev.detail;
              if (request.data.original_request_id !== response.requestId) return;
              if (request.data.state === _GetOpenIDAction.OpenIDRequestState.Allowed) {
                resolve(request.data);
                _this5.transport.reply(request, {}); // ack
              } else if (request.data.state === _GetOpenIDAction.OpenIDRequestState.Blocked) {
                reject(new Error("User declined to verify their identity"));
                _this5.transport.reply(request, {}); // ack
              } else {
                reject(new Error("Invalid state on reply: " + rdata.state));
                _this5.transport.reply(request, {
                  error: {
                    message: "Invalid state"
                  }
                });
              }
              _this5.off("action:".concat(_WidgetApiAction.WidgetApiToWidgetAction.OpenIDCredentials), handlerFn);
            };
            _this5.on("action:".concat(_WidgetApiAction.WidgetApiToWidgetAction.OpenIDCredentials), handlerFn);
          } else {
            reject(new Error("Invalid state: " + rdata.state));
          }
        })["catch"](reject);
      });
    }

    /**
     * Asks the client for additional capabilities. Capabilities can be queued for this
     * request with the requestCapability() functions.
     * @returns {Promise<void>} Resolves when complete. Note that the promise resolves when
     * the capabilities request has gone through, not when the capabilities are approved/denied.
     * Use the WidgetApiToWidgetAction.NotifyCapabilities action to detect changes.
     */
  }, {
    key: "updateRequestedCapabilities",
    value: function updateRequestedCapabilities() {
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.MSC2974RenegotiateCapabilities, {
        capabilities: this.requestedCapabilities
      }).then();
    }

    /**
     * Tell the client that the content has been loaded.
     * @returns {Promise} Resolves when the client acknowledges the request.
     */
  }, {
    key: "sendContentLoaded",
    value: function sendContentLoaded() {
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.ContentLoaded, {}).then();
    }

    /**
     * Sends a sticker to the client.
     * @param {IStickerActionRequestData} sticker The sticker to send.
     * @returns {Promise} Resolves when the client acknowledges the request.
     */
  }, {
    key: "sendSticker",
    value: function sendSticker(sticker) {
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.SendSticker, sticker).then();
    }

    /**
     * Asks the client to set the always-on-screen status for this widget.
     * @param {boolean} value The new state to request.
     * @returns {Promise<boolean>} Resolve with true if the client was able to fulfill
     * the request, resolves to false otherwise. Rejects if an error occurred.
     */
  }, {
    key: "setAlwaysOnScreen",
    value: function setAlwaysOnScreen(value) {
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.UpdateAlwaysOnScreen, {
        value: value
      }).then(function (res) {
        return res.success;
      });
    }

    /**
     * Opens a modal widget.
     * @param {string} url The URL to the modal widget.
     * @param {string} name The name of the widget.
     * @param {IModalWidgetOpenRequestDataButton[]} buttons The buttons to have on the widget.
     * @param {IModalWidgetCreateData} data Data to supply to the modal widget.
     * @param {WidgetType} type The type of modal widget.
     * @returns {Promise<void>} Resolves when the modal widget has been opened.
     */
  }, {
    key: "openModalWidget",
    value: function openModalWidget(url, name) {
      var buttons = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _WidgetType.MatrixWidgetType.Custom;
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.OpenModalWidget, {
        type: type,
        url: url,
        name: name,
        buttons: buttons,
        data: data
      }).then();
    }

    /**
     * Closes the modal widget. The widget's session will be terminated shortly after.
     * @param {IModalWidgetReturnData} data Optional data to close the modal widget with.
     * @returns {Promise<void>} Resolves when complete.
     */
  }, {
    key: "closeModalWidget",
    value: function closeModalWidget() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.CloseModalWidget, data).then();
    }
  }, {
    key: "sendRoomEvent",
    value: function sendRoomEvent(eventType, content, roomId, delay, parentDelayId) {
      return this.sendEvent(eventType, undefined, content, roomId, delay, parentDelayId);
    }
  }, {
    key: "sendStateEvent",
    value: function sendStateEvent(eventType, stateKey, content, roomId, delay, parentDelayId) {
      return this.sendEvent(eventType, stateKey, content, roomId, delay, parentDelayId);
    }
  }, {
    key: "sendEvent",
    value: function sendEvent(eventType, stateKey, content, roomId, delay, parentDelayId) {
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.SendEvent, _objectSpread(_objectSpread(_objectSpread(_objectSpread({
        type: eventType,
        content: content
      }, stateKey !== undefined && {
        state_key: stateKey
      }), roomId !== undefined && {
        room_id: roomId
      }), delay !== undefined && {
        delay: delay
      }), parentDelayId !== undefined && {
        parent_delay_id: parentDelayId
      }));
    }

    /**
     * @deprecated This currently relies on an unstable MSC (MSC4157).
     */
  }, {
    key: "updateDelayedEvent",
    value: function updateDelayedEvent(delayId, action) {
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.MSC4157UpdateDelayedEvent, {
        delay_id: delayId,
        action: action
      });
    }

    /**
     * Sends a to-device event.
     * @param {string} eventType The type of events being sent.
     * @param {boolean} encrypted Whether to encrypt the message contents.
     * @param {Object} contentMap A map from user IDs to device IDs to message contents.
     * @returns {Promise<ISendToDeviceFromWidgetResponseData>} Resolves when complete.
     */
  }, {
    key: "sendToDevice",
    value: function sendToDevice(eventType, encrypted, contentMap) {
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.SendToDevice, {
        type: eventType,
        encrypted: encrypted,
        messages: contentMap
      });
    }
  }, {
    key: "readRoomAccountData",
    value: function readRoomAccountData(eventType, roomIds) {
      var data = {
        type: eventType
      };
      if (roomIds) {
        if (roomIds.includes(_Symbols.Symbols.AnyRoom)) {
          data.room_ids = _Symbols.Symbols.AnyRoom;
        } else {
          data.room_ids = roomIds;
        }
      }
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.BeeperReadRoomAccountData, data).then(function (r) {
        return r.events;
      });
    }
  }, {
    key: "readRoomEvents",
    value: function readRoomEvents(eventType, limit, msgtype, roomIds, since) {
      var data = {
        type: eventType,
        msgtype: msgtype
      };
      if (limit !== undefined) {
        data.limit = limit;
      }
      if (roomIds) {
        if (roomIds.includes(_Symbols.Symbols.AnyRoom)) {
          data.room_ids = _Symbols.Symbols.AnyRoom;
        } else {
          data.room_ids = roomIds;
        }
      }
      if (since) {
        data.since = since;
      }
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.MSC2876ReadEvents, data).then(function (r) {
        return r.events;
      });
    }

    /**
     * Reads all related events given a known eventId.
     * @param eventId The id of the parent event to be read.
     * @param roomId The room to look within. When undefined, the user's currently
     * viewed room.
     * @param relationType The relationship type of child events to search for.
     * When undefined, all relations are returned.
     * @param eventType The event type of child events to search for. When undefined,
     * all related events are returned.
     * @param limit The maximum number of events to retrieve per room. If not
     * supplied, the server will apply a default limit.
     * @param from The pagination token to start returning results from, as
     * received from a previous call. If not supplied, results start at the most
     * recent topological event known to the server.
     * @param to The pagination token to stop returning results at. If not
     * supplied, results continue up to limit or until there are no more events.
     * @param direction The direction to search for according to MSC3715.
     * @returns Resolves to the room relations.
     */
  }, {
    key: "readEventRelations",
    value: function () {
      var _readEventRelations = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(eventId, roomId, relationType, eventType, limit, from, to, direction) {
        var versions, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.getClientVersions();
            case 2:
              versions = _context.sent;
              if (versions.includes(_ApiVersion.UnstableApiVersion.MSC3869)) {
                _context.next = 5;
                break;
              }
              throw new Error("The read_relations action is not supported by the client.");
            case 5:
              data = {
                event_id: eventId,
                rel_type: relationType,
                event_type: eventType,
                room_id: roomId,
                to: to,
                from: from,
                limit: limit,
                direction: direction
              };
              return _context.abrupt("return", this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.MSC3869ReadRelations, data));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function readEventRelations(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8) {
        return _readEventRelations.apply(this, arguments);
      }
      return readEventRelations;
    }()
  }, {
    key: "readStateEvents",
    value: function readStateEvents(eventType, limit, stateKey, roomIds) {
      var data = {
        type: eventType,
        state_key: stateKey === undefined ? true : stateKey
      };
      if (limit !== undefined) {
        data.limit = limit;
      }
      if (roomIds) {
        if (roomIds.includes(_Symbols.Symbols.AnyRoom)) {
          data.room_ids = _Symbols.Symbols.AnyRoom;
        } else {
          data.room_ids = roomIds;
        }
      }
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.MSC2876ReadEvents, data).then(function (r) {
        return r.events;
      });
    }

    /**
     * Sets a button as disabled or enabled on the modal widget. Buttons are enabled by default.
     * @param {ModalButtonID} buttonId The button ID to enable/disable.
     * @param {boolean} isEnabled Whether or not the button is enabled.
     * @returns {Promise<void>} Resolves when complete.
     * @throws Throws if the button cannot be disabled, or the client refuses to disable the button.
     */
  }, {
    key: "setModalButtonEnabled",
    value: function setModalButtonEnabled(buttonId, isEnabled) {
      if (buttonId === _ModalWidgetActions.BuiltInModalButtonID.Close) {
        throw new Error("The close button cannot be disabled");
      }
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.SetModalButtonEnabled, {
        button: buttonId,
        enabled: isEnabled
      }).then();
    }

    /**
     * Attempts to navigate the client to the given URI. This can only be called with Matrix URIs
     * (currently only matrix.to, but in future a Matrix URI scheme will be defined).
     * @param {string} uri The URI to navigate to.
     * @returns {Promise<void>} Resolves when complete.
     * @throws Throws if the URI is invalid or cannot be processed.
     * @deprecated This currently relies on an unstable MSC (MSC2931).
     */
  }, {
    key: "navigateTo",
    value: function navigateTo(uri) {
      if (!uri || !uri.startsWith("https://matrix.to/#")) {
        throw new Error("Invalid matrix.to URI");
      }
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.MSC2931Navigate, {
        uri: uri
      }).then();
    }

    /**
     * Starts watching for TURN servers, yielding an initial set of credentials as soon as possible,
     * and thereafter yielding new credentials whenever the previous ones expire.
     * @yields {ITurnServer} The TURN server URIs and credentials currently available to the widget.
     */
  }, {
    key: "getTurnServers",
    value: function getTurnServers() {
      var _this = this;
      return _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var setTurnServer, onUpdateTurnServers;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              onUpdateTurnServers = /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ev) {
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        ev.preventDefault();
                        setTurnServer(ev.detail.data);
                        _context2.next = 4;
                        return _this.transport.reply(ev.detail, {});
                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function onUpdateTurnServers(_x9) {
                  return _ref.apply(this, arguments);
                };
              }(); // Start listening for updates before we even start watching, to catch
              // TURN data that is sent immediately
              _this.on("action:".concat(_WidgetApiAction.WidgetApiToWidgetAction.UpdateTurnServers), onUpdateTurnServers);

              // Only send the 'watch' action if we aren't already watching
              if (!(_this.turnServerWatchers === 0)) {
                _context3.next = 12;
                break;
              }
              _context3.prev = 3;
              _context3.next = 6;
              return _awaitAsyncGenerator(_this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.WatchTurnServers, {}));
            case 6:
              _context3.next = 12;
              break;
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](3);
              _this.off("action:".concat(_WidgetApiAction.WidgetApiToWidgetAction.UpdateTurnServers), onUpdateTurnServers);
              throw _context3.t0;
            case 12:
              _this.turnServerWatchers++;
              _context3.prev = 13;
            case 14:
              if (!true) {
                _context3.next = 21;
                break;
              }
              _context3.next = 17;
              return _awaitAsyncGenerator(new Promise(function (resolve) {
                return setTurnServer = resolve;
              }));
            case 17:
              _context3.next = 19;
              return _context3.sent;
            case 19:
              _context3.next = 14;
              break;
            case 21:
              _context3.prev = 21;
              // The loop was broken by the caller - clean up
              _this.off("action:".concat(_WidgetApiAction.WidgetApiToWidgetAction.UpdateTurnServers), onUpdateTurnServers);

              // Since sending the 'unwatch' action will end updates for all other
              // consumers, only send it if we're the only consumer remaining
              _this.turnServerWatchers--;
              if (!(_this.turnServerWatchers === 0)) {
                _context3.next = 27;
                break;
              }
              _context3.next = 27;
              return _awaitAsyncGenerator(_this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.UnwatchTurnServers, {}));
            case 27:
              return _context3.finish(21);
            case 28:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[3, 8], [13,, 21, 28]]);
      }))();
    }

    /**
     * Search for users in the user directory.
     * @param searchTerm The term to search for.
     * @param limit The maximum number of results to return. If not supplied, the
     * @returns Resolves to the search results.
     */
  }, {
    key: "searchUserDirectory",
    value: function () {
      var _searchUserDirectory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(searchTerm, limit) {
        var versions, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.getClientVersions();
            case 2:
              versions = _context4.sent;
              if (versions.includes(_ApiVersion.UnstableApiVersion.MSC3973)) {
                _context4.next = 5;
                break;
              }
              throw new Error("The user_directory_search action is not supported by the client.");
            case 5:
              data = {
                search_term: searchTerm,
                limit: limit
              };
              return _context4.abrupt("return", this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.MSC3973UserDirectorySearch, data));
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function searchUserDirectory(_x10, _x11) {
        return _searchUserDirectory.apply(this, arguments);
      }
      return searchUserDirectory;
    }()
    /**
     * Get the config for the media repository.
     * @returns Promise which resolves with an object containing the config.
     */
  }, {
    key: "getMediaConfig",
    value: function () {
      var _getMediaConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var versions, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.getClientVersions();
            case 2:
              versions = _context5.sent;
              if (versions.includes(_ApiVersion.UnstableApiVersion.MSC4039)) {
                _context5.next = 5;
                break;
              }
              throw new Error("The get_media_config action is not supported by the client.");
            case 5:
              data = {};
              return _context5.abrupt("return", this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.MSC4039GetMediaConfigAction, data));
            case 7:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function getMediaConfig() {
        return _getMediaConfig.apply(this, arguments);
      }
      return getMediaConfig;
    }()
    /**
     * Upload a file to the media repository on the homeserver.
     * @param file - The object to upload. Something that can be sent to
     *               XMLHttpRequest.send (typically a File).
     * @returns Resolves to the location of the uploaded file.
     */
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(file) {
        var versions, data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.getClientVersions();
            case 2:
              versions = _context6.sent;
              if (versions.includes(_ApiVersion.UnstableApiVersion.MSC4039)) {
                _context6.next = 5;
                break;
              }
              throw new Error("The upload_file action is not supported by the client.");
            case 5:
              data = {
                file: file
              };
              return _context6.abrupt("return", this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.MSC4039UploadFileAction, data));
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function uploadFile(_x12) {
        return _uploadFile.apply(this, arguments);
      }
      return uploadFile;
    }()
    /**
     * Download a file from the media repository on the homeserver.
     * @param contentUri - MXC URI of the file to download.
     * @returns Resolves to the contents of the file.
     */
  }, {
    key: "downloadFile",
    value: function () {
      var _downloadFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(contentUri) {
        var versions, data;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.getClientVersions();
            case 2:
              versions = _context7.sent;
              if (versions.includes(_ApiVersion.UnstableApiVersion.MSC4039)) {
                _context7.next = 5;
                break;
              }
              throw new Error("The download_file action is not supported by the client.");
            case 5:
              data = {
                content_uri: contentUri
              };
              return _context7.abrupt("return", this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.MSC4039DownloadFileAction, data));
            case 7:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function downloadFile(_x13) {
        return _downloadFile.apply(this, arguments);
      }
      return downloadFile;
    }()
    /**
     * Starts the communication channel. This should be done early to ensure
     * that messages are not missed. Communication can only be stopped by the client.
     */
  }, {
    key: "start",
    value: function start() {
      var _this6 = this;
      this.transport.start();
      this.getClientVersions().then(function (v) {
        if (v.includes(_ApiVersion.UnstableApiVersion.MSC2974)) {
          _this6.supportsMSC2974Renegotiate = true;
        }
      });
    }
  }, {
    key: "handleMessage",
    value: function handleMessage(ev) {
      var actionEv = new CustomEvent("action:".concat(ev.detail.action), {
        detail: ev.detail,
        cancelable: true
      });
      this.emit("action:".concat(ev.detail.action), actionEv);
      if (!actionEv.defaultPrevented) {
        switch (ev.detail.action) {
          case _WidgetApiAction.WidgetApiToWidgetAction.SupportedApiVersions:
            return this.replyVersions(ev.detail);
          case _WidgetApiAction.WidgetApiToWidgetAction.Capabilities:
            return this.handleCapabilities(ev.detail);
          case _WidgetApiAction.WidgetApiToWidgetAction.UpdateVisibility:
            return this.transport.reply(ev.detail, {});
          // ack to avoid error spam
          case _WidgetApiAction.WidgetApiToWidgetAction.NotifyCapabilities:
            return this.transport.reply(ev.detail, {});
          // ack to avoid error spam
          default:
            return this.transport.reply(ev.detail, {
              error: {
                message: "Unknown or unsupported action: " + ev.detail.action
              }
            });
        }
      }
    }
  }, {
    key: "replyVersions",
    value: function replyVersions(request) {
      this.transport.reply(request, {
        supported_versions: _ApiVersion.CurrentApiVersions
      });
    }
  }, {
    key: "getClientVersions",
    value: function getClientVersions() {
      var _this7 = this;
      if (Array.isArray(this.cachedClientVersions)) {
        return Promise.resolve(this.cachedClientVersions);
      }
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.SupportedApiVersions, {}).then(function (r) {
        _this7.cachedClientVersions = r.supported_versions;
        return r.supported_versions;
      })["catch"](function (e) {
        console.warn("non-fatal error getting supported client versions: ", e);
        return [];
      });
    }
  }, {
    key: "handleCapabilities",
    value: function handleCapabilities(request) {
      var _this8 = this;
      if (this.capabilitiesFinished) {
        return this.transport.reply(request, {
          error: {
            message: "Capability negotiation already completed"
          }
        });
      }

      // See if we can expect a capabilities notification or not
      return this.getClientVersions().then(function (v) {
        if (v.includes(_ApiVersion.UnstableApiVersion.MSC2871)) {
          _this8.once("action:".concat(_WidgetApiAction.WidgetApiToWidgetAction.NotifyCapabilities), function (ev) {
            _this8.approvedCapabilities = ev.detail.data.approved;
            _this8.emit("ready");
          });
        } else {
          // if we can't expect notification, we're as done as we can be
          _this8.emit("ready");
        }

        // in either case, reply to that capabilities request
        _this8.capabilitiesFinished = true;
        return _this8.transport.reply(request, {
          capabilities: _this8.requestedCapabilities
        });
      });
    }
  }]);
  return WidgetApi;
}(_events.EventEmitter);
exports.WidgetApi = WidgetApi;

},{"./Symbols":2,"./interfaces/ApiVersion":6,"./interfaces/GetOpenIDAction":12,"./interfaces/ModalWidgetActions":23,"./interfaces/WidgetApiAction":39,"./interfaces/WidgetApiDirection":40,"./interfaces/WidgetType":43,"./models/WidgetEventCapability":45,"./transport/PostmessageTransport":51,"events":53}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetDriver = void 0;
var _ = require("..");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * Copyright 2020 - 2024 The Matrix.org Foundation C.I.C.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                               * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                               * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               *         http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                               * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                               * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                               * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * Represents the functions and behaviour the widget-api is unable to
 * do, such as prompting the user for information or interacting with
 * the UI. Clients are expected to implement this class and override
 * any functions they need/want to support.
 *
 * This class assumes the client will have a context of a Widget
 * instance already.
 */
var WidgetDriver = /*#__PURE__*/function () {
  function WidgetDriver() {
    _classCallCheck(this, WidgetDriver);
  }
  _createClass(WidgetDriver, [{
    key: "validateCapabilities",
    value:
    /**
     * Verifies the widget's requested capabilities, returning the ones
     * it is approved to use. Mutating the requested capabilities will
     * have no effect.
     *
     * This SHOULD result in the user being prompted to approve/deny
     * capabilities.
     *
     * By default this rejects all capabilities (returns an empty set).
     * @param {Set<Capability>} requested The set of requested capabilities.
     * @returns {Promise<Set<Capability>>} Resolves to the allowed capabilities.
     */
    function validateCapabilities(requested) {
      return Promise.resolve(new Set());
    }

    /**
     * Sends an event into a room. If `roomId` is falsy, the client should send the event
     * into the room the user is currently looking at. The widget API will have already
     * verified that the widget is capable of sending the event to that room.
     * @param {string} eventType The event type to be sent.
     * @param {*} content The content for the event.
     * @param {string|null} stateKey The state key if this is a state event, otherwise null.
     * May be an empty string.
     * @param {string|null} roomId The room ID to send the event to. If falsy, the room the
     * user is currently looking at.
     * @returns {Promise<ISendEventDetails>} Resolves when the event has been sent with
     * details of that event.
     * @throws Rejected when the event could not be sent.
     */
  }, {
    key: "sendEvent",
    value: function sendEvent(eventType, content) {
      var stateKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var roomId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      return Promise.reject(new Error("Failed to override function"));
    }

    /**
     * @experimental Part of MSC4140 & MSC4157
     * Sends a delayed event into a room. If `roomId` is falsy, the client should send it
     * into the room the user is currently looking at. The widget API will have already
     * verified that the widget is capable of sending the event to that room.
     * @param {number|null} delay How much later to send the event, or null to not send the
     * event automatically. May not be null if {@link parentDelayId} is null.
     * @param {string|null} parentDelayId The ID of the delayed event this one is grouped with,
     * or null if it will be put in a new group. May not be null if {@link delay} is null.
     * @param {string} eventType The event type of the event to be sent.
     * @param {*} content The content for the event to be sent.
     * @param {string|null} stateKey The state key if the event to be sent a state event,
     * otherwise null. May be an empty string.
     * @param {string|null} roomId The room ID to send the event to. If falsy, the room the
     * user is currently looking at.
     * @returns {Promise<ISendDelayedEventDetails>} Resolves when the delayed event has been
     * prepared with details of how to refer to it for updating/sending/canceling it later.
     * @throws Rejected when the delayed event could not be sent.
     */
  }, {
    key: "sendDelayedEvent",
    value: function sendDelayedEvent(delay, parentDelayId, eventType, content) {
      var stateKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var roomId = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
      return Promise.reject(new Error("Failed to override function"));
    }

    /**
     * @experimental Part of MSC4140 & MSC4157
     * Run the specified {@link action} for the delayed event matching the provided {@link delayId}.
     * @throws Rejected when there is no matching delayed event, or when the action failed to run.
     */
  }, {
    key: "updateDelayedEvent",
    value: function updateDelayedEvent(delayId, action) {
      return Promise.reject(new Error("Failed to override function"));
    }

    /**
     * Sends a to-device event. The widget API will have already verified that the widget
     * is capable of sending the event.
     * @param {string} eventType The event type to be sent.
     * @param {boolean} encrypted Whether to encrypt the message contents.
     * @param {Object} contentMap A map from user ID and device ID to event content.
     * @returns {Promise<void>} Resolves when the event has been sent.
     * @throws Rejected when the event could not be sent.
     */
  }, {
    key: "sendToDevice",
    value: function sendToDevice(eventType, encrypted, contentMap) {
      return Promise.reject(new Error("Failed to override function"));
    }
    /**
     * Reads an element of room account data. The widget API will have already verified that the widget is
     * capable of receiving the `eventType` of the requested information. If `roomIds` is supplied, it may
     * contain `Symbols.AnyRoom` to denote that the piece of room account data in each of the client's known
     * rooms should be returned. When `null`, only the room the user is currently looking at should be considered.
     * @param eventType The event type to be read.
     * @param roomIds When null, the user's currently viewed room. Otherwise, the list of room IDs
     * to look within, possibly containing Symbols.AnyRoom to denote all known rooms.
     * @returns {Promise<IRoomAccountData[]>} Resolves to the element of room account data, or an empty array.
     */
  }, {
    key: "readRoomAccountData",
    value: function readRoomAccountData(eventType) {
      var roomIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return Promise.resolve([]);
    }

    /**
     * Reads all events of the given type, and optionally `msgtype` (if applicable/defined),
     * the user has access to. The widget API will have already verified that the widget is
     * capable of receiving the events. Less events than the limit are allowed to be returned,
     * but not more. If `roomIds` is supplied, it may contain `Symbols.AnyRoom` to denote that
     * `limit` in each of the client's known rooms should be returned. When `null`, only the
     * room the user is currently looking at should be considered. If `since` is specified but
     * the event ID isn't present in the number of events fetched by the client due to `limit`,
     * the client will return all the events.
     * @param eventType The event type to be read.
     * @param msgtype The msgtype of the events to be read, if applicable/defined.
     * @param limit The maximum number of events to retrieve per room. Will be zero to denote "as many
     * as possible".
     * @param roomIds When null, the user's currently viewed room. Otherwise, the list of room IDs
     * to look within, possibly containing Symbols.AnyRoom to denote all known rooms.
     * @param since When null, retrieves the number of events specified by the "limit" parameter.
     * Otherwise, the event ID at which only subsequent events will be returned, as many as specified
     * in "limit".
     * @returns {Promise<IRoomEvent[]>} Resolves to the room events, or an empty array.
     */
  }, {
    key: "readRoomEvents",
    value: function readRoomEvents(eventType, msgtype, limit) {
      var roomIds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var since = arguments.length > 4 ? arguments[4] : undefined;
      return Promise.resolve([]);
    }

    /**
     * Reads all events of the given type, and optionally state key (if applicable/defined),
     * the user has access to. The widget API will have already verified that the widget is
     * capable of receiving the events. Less events than the limit are allowed to be returned,
     * but not more. If `roomIds` is supplied, it may contain `Symbols.AnyRoom` to denote that
     * `limit` in each of the client's known rooms should be returned. When `null`, only the
     * room the user is currently looking at should be considered.
     * @param eventType The event type to be read.
     * @param stateKey The state key of the events to be read, if applicable/defined.
     * @param limit The maximum number of events to retrieve. Will be zero to denote "as many
     * as possible".
     * @param roomIds When null, the user's currently viewed room. Otherwise, the list of room IDs
     * to look within, possibly containing Symbols.AnyRoom to denote all known rooms.
     * @returns {Promise<IRoomEvent[]>} Resolves to the state events, or an empty array.
     */
  }, {
    key: "readStateEvents",
    value: function readStateEvents(eventType, stateKey, limit) {
      var roomIds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      return Promise.resolve([]);
    }

    /**
     * Reads all events that are related to a given event. The widget API will
     * have already verified that the widget is capable of receiving the event,
     * or will make sure to reject access to events which are returned from this
     * function, but are not capable of receiving. If `relationType` or `eventType`
     * are set, the returned events should already be filtered. Less events than
     * the limit are allowed to be returned, but not more.
     * @param eventId The id of the parent event to be read.
     * @param roomId The room to look within. When undefined, the user's
     * currently viewed room.
     * @param relationType The relationship type of child events to search for.
     * When undefined, all relations are returned.
     * @param eventType The event type of child events to search for. When undefined,
     * all related events are returned.
     * @param from The pagination token to start returning results from, as
     * received from a previous call. If not supplied, results start at the most
     * recent topological event known to the server.
     * @param to The pagination token to stop returning results at. If not
     * supplied, results continue up to limit or until there are no more events.
     * @param limit The maximum number of events to retrieve per room. If not
     * supplied, the server will apply a default limit.
     * @param direction The direction to search for according to MSC3715
     * @returns Resolves to the room relations.
     */
  }, {
    key: "readEventRelations",
    value: function readEventRelations(eventId, roomId, relationType, eventType, from, to, limit, direction) {
      return Promise.resolve({
        chunk: []
      });
    }

    /**
     * Asks the user for permission to validate their identity through OpenID Connect. The
     * interface for this function is an observable which accepts the state machine of the
     * OIDC exchange flow. For example, if the client/user blocks the request then it would
     * feed back a `{state: Blocked}` into the observable. Similarly, if the user already
     * approved the widget then a `{state: Allowed}` would be fed into the observable alongside
     * the token itself. If the client is asking for permission, it should feed in a
     * `{state: PendingUserConfirmation}` followed by the relevant Allowed or Blocked state.
     *
     * The widget API will reject the widget's request with an error if this contract is not
     * met properly. By default, the widget driver will block all OIDC requests.
     * @param {SimpleObservable<IOpenIDUpdate>} observer The observable to feed updates into.
     */
  }, {
    key: "askOpenID",
    value: function askOpenID(observer) {
      observer.update({
        state: _.OpenIDRequestState.Blocked
      });
    }

    /**
     * Navigates the client with a matrix.to URI. In future this function will also be provided
     * with the Matrix URIs once matrix.to is replaced. The given URI will have already been
     * lightly checked to ensure it looks like a valid URI, though the implementation is recommended
     * to do further checks on the URI.
     * @param {string} uri The URI to navigate to.
     * @returns {Promise<void>} Resolves when complete.
     * @throws Throws if there's a problem with the navigation, such as invalid format.
     */
  }, {
    key: "navigate",
    value: function navigate(uri) {
      throw new Error("Navigation is not implemented");
    }

    /**
     * Polls for TURN server data, yielding an initial set of credentials as soon as possible, and
     * thereafter yielding new credentials whenever the previous ones expire. The widget API will
     * have already verified that the widget has permission to access TURN servers.
     * @yields {ITurnServer} The TURN server URIs and credentials currently available to the client.
     */
  }, {
    key: "getTurnServers",
    value: function getTurnServers() {
      throw new Error("TURN server support is not implemented");
    }

    /**
     * Search for users in the user directory.
     * @param searchTerm The term to search for.
     * @param limit The maximum number of results to return. If not supplied, the
     * @returns Resolves to the search results.
     */
  }, {
    key: "searchUserDirectory",
    value: function searchUserDirectory(searchTerm, limit) {
      return Promise.resolve({
        limited: false,
        results: []
      });
    }

    /**
     * Get the config for the media repository.
     * @returns Promise which resolves with an object containing the config.
     */
  }, {
    key: "getMediaConfig",
    value: function getMediaConfig() {
      throw new Error("Get media config is not implemented");
    }

    /**
     * Upload a file to the media repository on the homeserver.
     * @param file - The object to upload. Something that can be sent to
     *               XMLHttpRequest.send (typically a File).
     * @returns Resolves to the location of the uploaded file.
     */
  }, {
    key: "uploadFile",
    value: function uploadFile(file) {
      throw new Error("Upload file is not implemented");
    }

    /**
     * Download a file from the media repository on the homeserver.
     * @param contentUri - MXC URI of the file to download.
     * @returns Resolves to the contents of the file.
     */
  }, {
    key: "downloadFile",
    value: function downloadFile(contentUri) {
      throw new Error("Download file is not implemented");
    }

    /**
     * Expresses an error thrown by this driver in a format compatible with the Widget API.
     * @param error The error to handle.
     * @returns The error expressed as a {@link IWidgetApiErrorResponseDataDetails},
     * or undefined if it cannot be expressed as one.
     */
  }, {
    key: "processError",
    value: function processError(error) {
      return undefined;
    }
  }]);
  return WidgetDriver;
}();
exports.WidgetDriver = WidgetDriver;

},{"..":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _WidgetApi = require("./WidgetApi");
Object.keys(_WidgetApi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WidgetApi[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WidgetApi[key];
    }
  });
});
var _ClientWidgetApi = require("./ClientWidgetApi");
Object.keys(_ClientWidgetApi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ClientWidgetApi[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ClientWidgetApi[key];
    }
  });
});
var _Symbols = require("./Symbols");
Object.keys(_Symbols).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Symbols[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Symbols[key];
    }
  });
});
var _ITransport = require("./transport/ITransport");
Object.keys(_ITransport).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ITransport[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ITransport[key];
    }
  });
});
var _PostmessageTransport = require("./transport/PostmessageTransport");
Object.keys(_PostmessageTransport).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PostmessageTransport[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PostmessageTransport[key];
    }
  });
});
var _ICustomWidgetData = require("./interfaces/ICustomWidgetData");
Object.keys(_ICustomWidgetData).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ICustomWidgetData[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ICustomWidgetData[key];
    }
  });
});
var _IJitsiWidgetData = require("./interfaces/IJitsiWidgetData");
Object.keys(_IJitsiWidgetData).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IJitsiWidgetData[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IJitsiWidgetData[key];
    }
  });
});
var _IStickerpickerWidgetData = require("./interfaces/IStickerpickerWidgetData");
Object.keys(_IStickerpickerWidgetData).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IStickerpickerWidgetData[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IStickerpickerWidgetData[key];
    }
  });
});
var _IWidget = require("./interfaces/IWidget");
Object.keys(_IWidget).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IWidget[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IWidget[key];
    }
  });
});
var _WidgetType = require("./interfaces/WidgetType");
Object.keys(_WidgetType).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WidgetType[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WidgetType[key];
    }
  });
});
var _IWidgetApiErrorResponse = require("./interfaces/IWidgetApiErrorResponse");
Object.keys(_IWidgetApiErrorResponse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IWidgetApiErrorResponse[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IWidgetApiErrorResponse[key];
    }
  });
});
var _IWidgetApiRequest = require("./interfaces/IWidgetApiRequest");
Object.keys(_IWidgetApiRequest).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IWidgetApiRequest[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IWidgetApiRequest[key];
    }
  });
});
var _IWidgetApiResponse = require("./interfaces/IWidgetApiResponse");
Object.keys(_IWidgetApiResponse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IWidgetApiResponse[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IWidgetApiResponse[key];
    }
  });
});
var _WidgetApiAction = require("./interfaces/WidgetApiAction");
Object.keys(_WidgetApiAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WidgetApiAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WidgetApiAction[key];
    }
  });
});
var _WidgetApiDirection = require("./interfaces/WidgetApiDirection");
Object.keys(_WidgetApiDirection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WidgetApiDirection[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WidgetApiDirection[key];
    }
  });
});
var _ApiVersion = require("./interfaces/ApiVersion");
Object.keys(_ApiVersion).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ApiVersion[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ApiVersion[key];
    }
  });
});
var _Capabilities = require("./interfaces/Capabilities");
Object.keys(_Capabilities).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Capabilities[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Capabilities[key];
    }
  });
});
var _CapabilitiesAction = require("./interfaces/CapabilitiesAction");
Object.keys(_CapabilitiesAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CapabilitiesAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CapabilitiesAction[key];
    }
  });
});
var _ContentLoadedAction = require("./interfaces/ContentLoadedAction");
Object.keys(_ContentLoadedAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ContentLoadedAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ContentLoadedAction[key];
    }
  });
});
var _ScreenshotAction = require("./interfaces/ScreenshotAction");
Object.keys(_ScreenshotAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ScreenshotAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ScreenshotAction[key];
    }
  });
});
var _StickerAction = require("./interfaces/StickerAction");
Object.keys(_StickerAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _StickerAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _StickerAction[key];
    }
  });
});
var _StickyAction = require("./interfaces/StickyAction");
Object.keys(_StickyAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _StickyAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _StickyAction[key];
    }
  });
});
var _SupportedVersionsAction = require("./interfaces/SupportedVersionsAction");
Object.keys(_SupportedVersionsAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SupportedVersionsAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SupportedVersionsAction[key];
    }
  });
});
var _VisibilityAction = require("./interfaces/VisibilityAction");
Object.keys(_VisibilityAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _VisibilityAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _VisibilityAction[key];
    }
  });
});
var _GetOpenIDAction = require("./interfaces/GetOpenIDAction");
Object.keys(_GetOpenIDAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _GetOpenIDAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _GetOpenIDAction[key];
    }
  });
});
var _OpenIDCredentialsAction = require("./interfaces/OpenIDCredentialsAction");
Object.keys(_OpenIDCredentialsAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _OpenIDCredentialsAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _OpenIDCredentialsAction[key];
    }
  });
});
var _WidgetKind = require("./interfaces/WidgetKind");
Object.keys(_WidgetKind).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WidgetKind[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WidgetKind[key];
    }
  });
});
var _ModalButtonKind = require("./interfaces/ModalButtonKind");
Object.keys(_ModalButtonKind).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ModalButtonKind[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ModalButtonKind[key];
    }
  });
});
var _ModalWidgetActions = require("./interfaces/ModalWidgetActions");
Object.keys(_ModalWidgetActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ModalWidgetActions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ModalWidgetActions[key];
    }
  });
});
var _SetModalButtonEnabledAction = require("./interfaces/SetModalButtonEnabledAction");
Object.keys(_SetModalButtonEnabledAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SetModalButtonEnabledAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SetModalButtonEnabledAction[key];
    }
  });
});
var _WidgetConfigAction = require("./interfaces/WidgetConfigAction");
Object.keys(_WidgetConfigAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WidgetConfigAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WidgetConfigAction[key];
    }
  });
});
var _SendEventAction = require("./interfaces/SendEventAction");
Object.keys(_SendEventAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SendEventAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SendEventAction[key];
    }
  });
});
var _SendToDeviceAction = require("./interfaces/SendToDeviceAction");
Object.keys(_SendToDeviceAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SendToDeviceAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SendToDeviceAction[key];
    }
  });
});
var _ReadEventAction = require("./interfaces/ReadEventAction");
Object.keys(_ReadEventAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ReadEventAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ReadEventAction[key];
    }
  });
});
var _IRoomEvent = require("./interfaces/IRoomEvent");
Object.keys(_IRoomEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IRoomEvent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IRoomEvent[key];
    }
  });
});
var _IRoomAccountData = require("./interfaces/IRoomAccountData");
Object.keys(_IRoomAccountData).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IRoomAccountData[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IRoomAccountData[key];
    }
  });
});
var _NavigateAction = require("./interfaces/NavigateAction");
Object.keys(_NavigateAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _NavigateAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _NavigateAction[key];
    }
  });
});
var _TurnServerActions = require("./interfaces/TurnServerActions");
Object.keys(_TurnServerActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TurnServerActions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TurnServerActions[key];
    }
  });
});
var _ReadRelationsAction = require("./interfaces/ReadRelationsAction");
Object.keys(_ReadRelationsAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ReadRelationsAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ReadRelationsAction[key];
    }
  });
});
var _GetMediaConfigAction = require("./interfaces/GetMediaConfigAction");
Object.keys(_GetMediaConfigAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _GetMediaConfigAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _GetMediaConfigAction[key];
    }
  });
});
var _UpdateDelayedEventAction = require("./interfaces/UpdateDelayedEventAction");
Object.keys(_UpdateDelayedEventAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UpdateDelayedEventAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _UpdateDelayedEventAction[key];
    }
  });
});
var _UploadFileAction = require("./interfaces/UploadFileAction");
Object.keys(_UploadFileAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UploadFileAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _UploadFileAction[key];
    }
  });
});
var _DownloadFileAction = require("./interfaces/DownloadFileAction");
Object.keys(_DownloadFileAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DownloadFileAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DownloadFileAction[key];
    }
  });
});
var _WidgetEventCapability = require("./models/WidgetEventCapability");
Object.keys(_WidgetEventCapability).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WidgetEventCapability[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WidgetEventCapability[key];
    }
  });
});
var _url = require("./models/validation/url");
Object.keys(_url).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _url[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _url[key];
    }
  });
});
var _utils = require("./models/validation/utils");
Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});
var _Widget = require("./models/Widget");
Object.keys(_Widget).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Widget[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Widget[key];
    }
  });
});
var _WidgetParser = require("./models/WidgetParser");
Object.keys(_WidgetParser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WidgetParser[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WidgetParser[key];
    }
  });
});
var _urlTemplate = require("./templating/url-template");
Object.keys(_urlTemplate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _urlTemplate[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _urlTemplate[key];
    }
  });
});
var _SimpleObservable = require("./util/SimpleObservable");
Object.keys(_SimpleObservable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SimpleObservable[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SimpleObservable[key];
    }
  });
});
var _WidgetDriver = require("./driver/WidgetDriver");
Object.keys(_WidgetDriver).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WidgetDriver[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WidgetDriver[key];
    }
  });
});

},{"./ClientWidgetApi":1,"./Symbols":2,"./WidgetApi":3,"./driver/WidgetDriver":4,"./interfaces/ApiVersion":6,"./interfaces/Capabilities":7,"./interfaces/CapabilitiesAction":8,"./interfaces/ContentLoadedAction":9,"./interfaces/DownloadFileAction":10,"./interfaces/GetMediaConfigAction":11,"./interfaces/GetOpenIDAction":12,"./interfaces/ICustomWidgetData":13,"./interfaces/IJitsiWidgetData":14,"./interfaces/IRoomAccountData":15,"./interfaces/IRoomEvent":16,"./interfaces/IStickerpickerWidgetData":17,"./interfaces/IWidget":18,"./interfaces/IWidgetApiErrorResponse":19,"./interfaces/IWidgetApiRequest":20,"./interfaces/IWidgetApiResponse":21,"./interfaces/ModalButtonKind":22,"./interfaces/ModalWidgetActions":23,"./interfaces/NavigateAction":24,"./interfaces/OpenIDCredentialsAction":25,"./interfaces/ReadEventAction":26,"./interfaces/ReadRelationsAction":27,"./interfaces/ScreenshotAction":28,"./interfaces/SendEventAction":29,"./interfaces/SendToDeviceAction":30,"./interfaces/SetModalButtonEnabledAction":31,"./interfaces/StickerAction":32,"./interfaces/StickyAction":33,"./interfaces/SupportedVersionsAction":34,"./interfaces/TurnServerActions":35,"./interfaces/UpdateDelayedEventAction":36,"./interfaces/UploadFileAction":37,"./interfaces/VisibilityAction":38,"./interfaces/WidgetApiAction":39,"./interfaces/WidgetApiDirection":40,"./interfaces/WidgetConfigAction":41,"./interfaces/WidgetKind":42,"./interfaces/WidgetType":43,"./models/Widget":44,"./models/WidgetEventCapability":45,"./models/WidgetParser":46,"./models/validation/url":47,"./models/validation/utils":48,"./templating/url-template":49,"./transport/ITransport":50,"./transport/PostmessageTransport":51,"./util/SimpleObservable":52}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnstableApiVersion = exports.MatrixApiVersion = exports.CurrentApiVersions = void 0;
/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MatrixApiVersion = /*#__PURE__*/function (MatrixApiVersion) {
  MatrixApiVersion["Prerelease1"] = "0.0.1";
  MatrixApiVersion["Prerelease2"] = "0.0.2";
  return MatrixApiVersion;
}({}); //V010 = "0.1.0", // first release
exports.MatrixApiVersion = MatrixApiVersion;
var UnstableApiVersion = /*#__PURE__*/function (UnstableApiVersion) {
  UnstableApiVersion["MSC2762"] = "org.matrix.msc2762";
  UnstableApiVersion["MSC2871"] = "org.matrix.msc2871";
  UnstableApiVersion["MSC2931"] = "org.matrix.msc2931";
  UnstableApiVersion["MSC2974"] = "org.matrix.msc2974";
  UnstableApiVersion["MSC2876"] = "org.matrix.msc2876";
  UnstableApiVersion["MSC3819"] = "org.matrix.msc3819";
  UnstableApiVersion["MSC3846"] = "town.robin.msc3846";
  UnstableApiVersion["MSC3869"] = "org.matrix.msc3869";
  UnstableApiVersion["MSC3973"] = "org.matrix.msc3973";
  UnstableApiVersion["MSC4039"] = "org.matrix.msc4039";
  return UnstableApiVersion;
}({});
exports.UnstableApiVersion = UnstableApiVersion;
var CurrentApiVersions = [MatrixApiVersion.Prerelease1, MatrixApiVersion.Prerelease2,
//MatrixApiVersion.V010,
UnstableApiVersion.MSC2762, UnstableApiVersion.MSC2871, UnstableApiVersion.MSC2931, UnstableApiVersion.MSC2974, UnstableApiVersion.MSC2876, UnstableApiVersion.MSC3819, UnstableApiVersion.MSC3846, UnstableApiVersion.MSC3869, UnstableApiVersion.MSC3973, UnstableApiVersion.MSC4039];
exports.CurrentApiVersions = CurrentApiVersions;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoConferenceCapabilities = exports.StickerpickerCapabilities = exports.MatrixCapabilities = void 0;
exports.getTimelineRoomIDFromCapability = getTimelineRoomIDFromCapability;
exports.isTimelineCapability = isTimelineCapability;
exports.isTimelineCapabilityFor = isTimelineCapabilityFor;
/*
 * Copyright 2020 - 2021 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MatrixCapabilities = /*#__PURE__*/function (MatrixCapabilities) {
  MatrixCapabilities["Screenshots"] = "m.capability.screenshot";
  MatrixCapabilities["StickerSending"] = "m.sticker";
  MatrixCapabilities["AlwaysOnScreen"] = "m.always_on_screen";
  MatrixCapabilities["RequiresClient"] = "io.element.requires_client";
  MatrixCapabilities["MSC2931Navigate"] = "org.matrix.msc2931.navigate";
  MatrixCapabilities["MSC3846TurnServers"] = "town.robin.msc3846.turn_servers";
  MatrixCapabilities["MSC3973UserDirectorySearch"] = "org.matrix.msc3973.user_directory_search";
  MatrixCapabilities["MSC4039UploadFile"] = "org.matrix.msc4039.upload_file";
  MatrixCapabilities["MSC4039DownloadFile"] = "org.matrix.msc4039.download_file";
  MatrixCapabilities["MSC4157SendDelayedEvent"] = "org.matrix.msc4157.send.delayed_event";
  MatrixCapabilities["MSC4157UpdateDelayedEvent"] = "org.matrix.msc4157.update_delayed_event";
  return MatrixCapabilities;
}({});
exports.MatrixCapabilities = MatrixCapabilities;
var StickerpickerCapabilities = [MatrixCapabilities.StickerSending];
exports.StickerpickerCapabilities = StickerpickerCapabilities;
var VideoConferenceCapabilities = [MatrixCapabilities.AlwaysOnScreen];

/**
 * Determines if a capability is a capability for a timeline.
 * @param {Capability} capability The capability to test.
 * @returns {boolean} True if a timeline capability, false otherwise.
 */
exports.VideoConferenceCapabilities = VideoConferenceCapabilities;
function isTimelineCapability(capability) {
  // TODO: Change when MSC2762 becomes stable.
  return capability === null || capability === void 0 ? void 0 : capability.startsWith("org.matrix.msc2762.timeline:");
}

/**
 * Determines if a capability is a timeline capability for the given room.
 * @param {Capability} capability The capability to test.
 * @param {string | Symbols.AnyRoom} roomId The room ID, or `Symbols.AnyRoom` for that designation.
 * @returns {boolean} True if a matching capability, false otherwise.
 */
function isTimelineCapabilityFor(capability, roomId) {
  return capability === "org.matrix.msc2762.timeline:".concat(roomId);
}

/**
 * Gets the room ID described by a timeline capability.
 * @param {string} capability The capability to parse.
 * @returns {string} The room ID.
 */
function getTimelineRoomIDFromCapability(capability) {
  return capability.substring(capability.indexOf(":") + 1);
}

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenIDRequestState = void 0;
/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var OpenIDRequestState = /*#__PURE__*/function (OpenIDRequestState) {
  OpenIDRequestState["Allowed"] = "allowed";
  OpenIDRequestState["Blocked"] = "blocked";
  OpenIDRequestState["PendingUserConfirmation"] = "request";
  return OpenIDRequestState;
}({});
exports.OpenIDRequestState = OpenIDRequestState;

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isErrorResponse = isErrorResponse;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*
 * Copyright 2020 - 2024 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The format of errors returned by Matrix API requests
 * made by a WidgetDriver.
 */

function isErrorResponse(responseData) {
  var error = responseData.error;
  return _typeof(error) === "object" && error !== null && "message" in error && typeof error.message === "string";
}

},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalButtonKind = void 0;
/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ModalButtonKind = /*#__PURE__*/function (ModalButtonKind) {
  ModalButtonKind["Primary"] = "m.primary";
  ModalButtonKind["Secondary"] = "m.secondary";
  ModalButtonKind["Warning"] = "m.warning";
  ModalButtonKind["Danger"] = "m.danger";
  ModalButtonKind["Link"] = "m.link";
  return ModalButtonKind;
}({});
exports.ModalButtonKind = ModalButtonKind;

},{}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BuiltInModalButtonID = void 0;
/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var BuiltInModalButtonID = /*#__PURE__*/function (BuiltInModalButtonID) {
  BuiltInModalButtonID["Close"] = "m.close";
  return BuiltInModalButtonID;
}({}); // Types for a normal modal requesting the opening a modal widget
// Types for a modal widget receiving notifications that its buttons have been pressed
// Types for a modal widget requesting close
// Types for a normal widget being notified that the modal widget it opened has been closed
exports.BuiltInModalButtonID = BuiltInModalButtonID;

},{}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateDelayedEventAction = void 0;
/*
 * Copyright 2020 - 2024 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var UpdateDelayedEventAction = /*#__PURE__*/function (UpdateDelayedEventAction) {
  UpdateDelayedEventAction["Cancel"] = "cancel";
  UpdateDelayedEventAction["Restart"] = "restart";
  UpdateDelayedEventAction["Send"] = "send";
  return UpdateDelayedEventAction;
}({});
exports.UpdateDelayedEventAction = UpdateDelayedEventAction;

},{}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetApiToWidgetAction = exports.WidgetApiFromWidgetAction = void 0;
/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var WidgetApiToWidgetAction = /*#__PURE__*/function (WidgetApiToWidgetAction) {
  WidgetApiToWidgetAction["SupportedApiVersions"] = "supported_api_versions";
  WidgetApiToWidgetAction["Capabilities"] = "capabilities";
  WidgetApiToWidgetAction["NotifyCapabilities"] = "notify_capabilities";
  WidgetApiToWidgetAction["TakeScreenshot"] = "screenshot";
  WidgetApiToWidgetAction["UpdateVisibility"] = "visibility";
  WidgetApiToWidgetAction["OpenIDCredentials"] = "openid_credentials";
  WidgetApiToWidgetAction["WidgetConfig"] = "widget_config";
  WidgetApiToWidgetAction["CloseModalWidget"] = "close_modal";
  WidgetApiToWidgetAction["ButtonClicked"] = "button_clicked";
  WidgetApiToWidgetAction["SendEvent"] = "send_event";
  WidgetApiToWidgetAction["SendToDevice"] = "send_to_device";
  WidgetApiToWidgetAction["UpdateTurnServers"] = "update_turn_servers";
  return WidgetApiToWidgetAction;
}({});
exports.WidgetApiToWidgetAction = WidgetApiToWidgetAction;
var WidgetApiFromWidgetAction = /*#__PURE__*/function (WidgetApiFromWidgetAction) {
  WidgetApiFromWidgetAction["SupportedApiVersions"] = "supported_api_versions";
  WidgetApiFromWidgetAction["ContentLoaded"] = "content_loaded";
  WidgetApiFromWidgetAction["SendSticker"] = "m.sticker";
  WidgetApiFromWidgetAction["UpdateAlwaysOnScreen"] = "set_always_on_screen";
  WidgetApiFromWidgetAction["GetOpenIDCredentials"] = "get_openid";
  WidgetApiFromWidgetAction["CloseModalWidget"] = "close_modal";
  WidgetApiFromWidgetAction["OpenModalWidget"] = "open_modal";
  WidgetApiFromWidgetAction["SetModalButtonEnabled"] = "set_button_enabled";
  WidgetApiFromWidgetAction["SendEvent"] = "send_event";
  WidgetApiFromWidgetAction["SendToDevice"] = "send_to_device";
  WidgetApiFromWidgetAction["WatchTurnServers"] = "watch_turn_servers";
  WidgetApiFromWidgetAction["UnwatchTurnServers"] = "unwatch_turn_servers";
  WidgetApiFromWidgetAction["BeeperReadRoomAccountData"] = "com.beeper.read_room_account_data";
  WidgetApiFromWidgetAction["MSC2876ReadEvents"] = "org.matrix.msc2876.read_events";
  WidgetApiFromWidgetAction["MSC2931Navigate"] = "org.matrix.msc2931.navigate";
  WidgetApiFromWidgetAction["MSC2974RenegotiateCapabilities"] = "org.matrix.msc2974.request_capabilities";
  WidgetApiFromWidgetAction["MSC3869ReadRelations"] = "org.matrix.msc3869.read_relations";
  WidgetApiFromWidgetAction["MSC3973UserDirectorySearch"] = "org.matrix.msc3973.user_directory_search";
  WidgetApiFromWidgetAction["MSC4039GetMediaConfigAction"] = "org.matrix.msc4039.get_media_config";
  WidgetApiFromWidgetAction["MSC4039UploadFileAction"] = "org.matrix.msc4039.upload_file";
  WidgetApiFromWidgetAction["MSC4039DownloadFileAction"] = "org.matrix.msc4039.download_file";
  WidgetApiFromWidgetAction["MSC4157UpdateDelayedEvent"] = "org.matrix.msc4157.update_delayed_event";
  return WidgetApiFromWidgetAction;
}({});
exports.WidgetApiFromWidgetAction = WidgetApiFromWidgetAction;

},{}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetApiDirection = void 0;
exports.invertedDirection = invertedDirection;
/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var WidgetApiDirection = /*#__PURE__*/function (WidgetApiDirection) {
  WidgetApiDirection["ToWidget"] = "toWidget";
  WidgetApiDirection["FromWidget"] = "fromWidget";
  return WidgetApiDirection;
}({});
exports.WidgetApiDirection = WidgetApiDirection;
function invertedDirection(dir) {
  if (dir === WidgetApiDirection.ToWidget) {
    return WidgetApiDirection.FromWidget;
  } else if (dir === WidgetApiDirection.FromWidget) {
    return WidgetApiDirection.ToWidget;
  } else {
    throw new Error("Invalid direction");
  }
}

},{}],41:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],42:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetKind = void 0;
/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var WidgetKind = /*#__PURE__*/function (WidgetKind) {
  WidgetKind["Room"] = "room";
  WidgetKind["Account"] = "account";
  WidgetKind["Modal"] = "modal";
  return WidgetKind;
}({});
exports.WidgetKind = WidgetKind;

},{}],43:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MatrixWidgetType = void 0;
/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MatrixWidgetType = /*#__PURE__*/function (MatrixWidgetType) {
  MatrixWidgetType["Custom"] = "m.custom";
  MatrixWidgetType["JitsiMeet"] = "m.jitsi";
  MatrixWidgetType["Stickerpicker"] = "m.stickerpicker";
  return MatrixWidgetType;
}({});
exports.MatrixWidgetType = MatrixWidgetType;

},{}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Widget = void 0;
var _utils = require("./validation/utils");
var _ = require("..");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * Copyright 2020 The Matrix.org Foundation C.I.C.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                               * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                               * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               *         http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                               * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                               * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                               * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * Represents the barest form of widget.
 */
var Widget = /*#__PURE__*/function () {
  function Widget(definition) {
    _classCallCheck(this, Widget);
    this.definition = definition;
    if (!this.definition) throw new Error("Definition is required");
    (0, _utils.assertPresent)(definition, "id");
    (0, _utils.assertPresent)(definition, "creatorUserId");
    (0, _utils.assertPresent)(definition, "type");
    (0, _utils.assertPresent)(definition, "url");
  }

  /**
   * The user ID who created the widget.
   */
  _createClass(Widget, [{
    key: "creatorUserId",
    get: function get() {
      return this.definition.creatorUserId;
    }

    /**
     * The type of widget.
     */
  }, {
    key: "type",
    get: function get() {
      return this.definition.type;
    }

    /**
     * The ID of the widget.
     */
  }, {
    key: "id",
    get: function get() {
      return this.definition.id;
    }

    /**
     * The name of the widget, or null if not set.
     */
  }, {
    key: "name",
    get: function get() {
      return this.definition.name || null;
    }

    /**
     * The title for the widget, or null if not set.
     */
  }, {
    key: "title",
    get: function get() {
      return this.rawData.title || null;
    }

    /**
     * The templated URL for the widget.
     */
  }, {
    key: "templateUrl",
    get: function get() {
      return this.definition.url;
    }

    /**
     * The origin for this widget.
     */
  }, {
    key: "origin",
    get: function get() {
      return new URL(this.templateUrl).origin;
    }

    /**
     * Whether or not the client should wait for the iframe to load. Defaults
     * to true.
     */
  }, {
    key: "waitForIframeLoad",
    get: function get() {
      if (this.definition.waitForIframeLoad === false) return false;
      if (this.definition.waitForIframeLoad === true) return true;
      return true; // default true
    }

    /**
     * The raw data for the widget. This will always be defined, though
     * may be empty.
     */
  }, {
    key: "rawData",
    get: function get() {
      return this.definition.data || {};
    }

    /**
     * Gets a complete widget URL for the client to render.
     * @param {ITemplateParams} params The template parameters.
     * @returns {string} A templated URL.
     */
  }, {
    key: "getCompleteUrl",
    value: function getCompleteUrl(params) {
      return (0, _.runTemplate)(this.templateUrl, this.definition, params);
    }
  }]);
  return Widget;
}();
exports.Widget = Widget;

},{"..":5,"./validation/utils":48}],45:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetEventCapability = exports.EventKind = exports.EventDirection = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var EventKind = /*#__PURE__*/function (EventKind) {
  EventKind["Event"] = "event";
  EventKind["State"] = "state_event";
  EventKind["ToDevice"] = "to_device";
  EventKind["RoomAccount"] = "room_account";
  return EventKind;
}({});
exports.EventKind = EventKind;
var EventDirection = /*#__PURE__*/function (EventDirection) {
  EventDirection["Send"] = "send";
  EventDirection["Receive"] = "receive";
  return EventDirection;
}({});
exports.EventDirection = EventDirection;
var WidgetEventCapability = /*#__PURE__*/function () {
  function WidgetEventCapability(direction, eventType, kind, keyStr, raw) {
    _classCallCheck(this, WidgetEventCapability);
    this.direction = direction;
    this.eventType = eventType;
    this.kind = kind;
    this.keyStr = keyStr;
    this.raw = raw;
  }
  _createClass(WidgetEventCapability, [{
    key: "matchesAsStateEvent",
    value: function matchesAsStateEvent(direction, eventType, stateKey) {
      if (this.kind !== EventKind.State) return false; // not a state event
      if (this.direction !== direction) return false; // direction mismatch
      if (this.eventType !== eventType) return false; // event type mismatch
      if (this.keyStr === null) return true; // all state keys are allowed
      if (this.keyStr === stateKey) return true; // this state key is allowed

      // Default not allowed
      return false;
    }
  }, {
    key: "matchesAsToDeviceEvent",
    value: function matchesAsToDeviceEvent(direction, eventType) {
      if (this.kind !== EventKind.ToDevice) return false; // not a to-device event
      if (this.direction !== direction) return false; // direction mismatch
      if (this.eventType !== eventType) return false; // event type mismatch

      // Checks passed, the event is allowed
      return true;
    }
  }, {
    key: "matchesAsRoomEvent",
    value: function matchesAsRoomEvent(direction, eventType) {
      var msgtype = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (this.kind !== EventKind.Event) return false; // not a room event
      if (this.direction !== direction) return false; // direction mismatch
      if (this.eventType !== eventType) return false; // event type mismatch

      if (this.eventType === "m.room.message") {
        if (this.keyStr === null) return true; // all message types are allowed
        if (this.keyStr === msgtype) return true; // this message type is allowed
      } else {
        return true; // already passed the check for if the event is allowed
      }

      // Default not allowed
      return false;
    }
  }, {
    key: "matchesAsRoomAccountData",
    value: function matchesAsRoomAccountData(direction, eventType) {
      if (this.kind !== EventKind.RoomAccount) return false; // not room account data
      if (this.direction !== direction) return false; // direction mismatch
      if (this.eventType !== eventType) return false; // event type mismatch

      // Checks passed, the event is allowed
      return true;
    }
  }], [{
    key: "forStateEvent",
    value: function forStateEvent(direction, eventType, stateKey) {
      // TODO: Enable support for m.* namespace once the MSC lands.
      // https://github.com/matrix-org/matrix-widget-api/issues/22
      eventType = eventType.replace(/#/g, '\\#');
      stateKey = stateKey !== null && stateKey !== undefined ? "#".concat(stateKey) : '';
      var str = "org.matrix.msc2762.".concat(direction, ".state_event:").concat(eventType).concat(stateKey);

      // cheat by sending it through the processor
      return WidgetEventCapability.findEventCapabilities([str])[0];
    }
  }, {
    key: "forToDeviceEvent",
    value: function forToDeviceEvent(direction, eventType) {
      // TODO: Enable support for m.* namespace once the MSC lands.
      // https://github.com/matrix-org/matrix-widget-api/issues/56
      var str = "org.matrix.msc3819.".concat(direction, ".to_device:").concat(eventType);

      // cheat by sending it through the processor
      return WidgetEventCapability.findEventCapabilities([str])[0];
    }
  }, {
    key: "forRoomEvent",
    value: function forRoomEvent(direction, eventType) {
      // TODO: Enable support for m.* namespace once the MSC lands.
      // https://github.com/matrix-org/matrix-widget-api/issues/22
      var str = "org.matrix.msc2762.".concat(direction, ".event:").concat(eventType);

      // cheat by sending it through the processor
      return WidgetEventCapability.findEventCapabilities([str])[0];
    }
  }, {
    key: "forRoomMessageEvent",
    value: function forRoomMessageEvent(direction, msgtype) {
      // TODO: Enable support for m.* namespace once the MSC lands.
      // https://github.com/matrix-org/matrix-widget-api/issues/22
      msgtype = msgtype === null || msgtype === undefined ? '' : msgtype;
      var str = "org.matrix.msc2762.".concat(direction, ".event:m.room.message#").concat(msgtype);

      // cheat by sending it through the processor
      return WidgetEventCapability.findEventCapabilities([str])[0];
    }
  }, {
    key: "forRoomAccountData",
    value: function forRoomAccountData(direction, eventType) {
      var str = "com.beeper.capabilities.".concat(direction, ".room_account_data:").concat(eventType);
      return WidgetEventCapability.findEventCapabilities([str])[0];
    }

    /**
     * Parses a capabilities request to find all the event capability requests.
     * @param {Iterable<Capability>} capabilities The capabilities requested/to parse.
     * @returns {WidgetEventCapability[]} An array of event capability requests. May be empty, but never null.
     */
  }, {
    key: "findEventCapabilities",
    value: function findEventCapabilities(capabilities) {
      var parsed = [];
      var _iterator = _createForOfIteratorHelper(capabilities),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var cap = _step.value;
          var _direction = null;
          var eventSegment = void 0;
          var _kind = null;

          // TODO: Enable support for m.* namespace once the MSCs land.
          // https://github.com/matrix-org/matrix-widget-api/issues/22
          // https://github.com/matrix-org/matrix-widget-api/issues/56

          if (cap.startsWith("org.matrix.msc2762.send.event:")) {
            _direction = EventDirection.Send;
            _kind = EventKind.Event;
            eventSegment = cap.substring("org.matrix.msc2762.send.event:".length);
          } else if (cap.startsWith("org.matrix.msc2762.send.state_event:")) {
            _direction = EventDirection.Send;
            _kind = EventKind.State;
            eventSegment = cap.substring("org.matrix.msc2762.send.state_event:".length);
          } else if (cap.startsWith("org.matrix.msc3819.send.to_device:")) {
            _direction = EventDirection.Send;
            _kind = EventKind.ToDevice;
            eventSegment = cap.substring("org.matrix.msc3819.send.to_device:".length);
          } else if (cap.startsWith("org.matrix.msc2762.receive.event:")) {
            _direction = EventDirection.Receive;
            _kind = EventKind.Event;
            eventSegment = cap.substring("org.matrix.msc2762.receive.event:".length);
          } else if (cap.startsWith("org.matrix.msc2762.receive.state_event:")) {
            _direction = EventDirection.Receive;
            _kind = EventKind.State;
            eventSegment = cap.substring("org.matrix.msc2762.receive.state_event:".length);
          } else if (cap.startsWith("org.matrix.msc3819.receive.to_device:")) {
            _direction = EventDirection.Receive;
            _kind = EventKind.ToDevice;
            eventSegment = cap.substring("org.matrix.msc3819.receive.to_device:".length);
          } else if (cap.startsWith("com.beeper.capabilities.receive.room_account_data:")) {
            _direction = EventDirection.Receive;
            _kind = EventKind.RoomAccount;
            eventSegment = cap.substring("com.beeper.capabilities.receive.room_account_data:".length);
          }
          if (_direction === null || _kind === null || eventSegment === undefined) continue;

          // The capability uses `#` as a separator between event type and state key/msgtype,
          // so we split on that. However, a # is also valid in either one of those so we
          // join accordingly.
          // Eg: `m.room.message##m.text` is "m.room.message" event with msgtype "#m.text".
          var expectingKeyStr = eventSegment.startsWith("m.room.message#") || _kind === EventKind.State;
          var _keyStr = null;
          if (eventSegment.includes('#') && expectingKeyStr) {
            // Dev note: regex is difficult to write, so instead the rules are manually written
            // out. This is probably just as understandable as a boring regex though, so win-win?

            // Test cases:
            // str                      eventSegment        keyStr
            // -------------------------------------------------------------
            // m.room.message#          m.room.message      <empty string>
            // m.room.message#test      m.room.message      test
            // m.room.message\#         m.room.message#     test
            // m.room.message##test     m.room.message      #test
            // m.room.message\##test    m.room.message#     test
            // m.room.message\\##test   m.room.message\#    test
            // m.room.message\\###test  m.room.message\#    #test

            // First step: explode the string
            var parts = eventSegment.split('#');

            // To form the eventSegment, we'll keep finding parts of the exploded string until
            // there's one that doesn't end with the escape character (\). We'll then join those
            // segments together with the exploding character. We have to remember to consume the
            // escape character as well.
            var idx = parts.findIndex(function (p) {
              return !p.endsWith("\\");
            });
            eventSegment = parts.slice(0, idx + 1).map(function (p) {
              return p.endsWith('\\') ? p.substring(0, p.length - 1) : p;
            }).join('#');

            // The keyStr is whatever is left over.
            _keyStr = parts.slice(idx + 1).join('#');
          }
          parsed.push(new WidgetEventCapability(_direction, eventSegment, _kind, _keyStr, cap));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return parsed;
    }
  }]);
  return WidgetEventCapability;
}();
exports.WidgetEventCapability = WidgetEventCapability;

},{}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetParser = void 0;
var _Widget = require("./Widget");
var _url = require("./validation/url");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * Copyright 2020 The Matrix.org Foundation C.I.C.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                               * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                               * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               *         http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                               * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                               * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                               * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                               */
var WidgetParser = /*#__PURE__*/function () {
  function WidgetParser() {
    _classCallCheck(this, WidgetParser);
  } // private constructor because this is a util class

  /**
   * Parses widgets from the "m.widgets" account data event. This will always
   * return an array, though may be empty if no valid widgets were found.
   * @param {IAccountDataWidgets} content The content of the "m.widgets" account data.
   * @returns {Widget[]} The widgets in account data, or an empty array.
   */
  _createClass(WidgetParser, null, [{
    key: "parseAccountData",
    value: function parseAccountData(content) {
      if (!content) return [];
      var result = [];
      for (var _i = 0, _Object$keys = Object.keys(content); _i < _Object$keys.length; _i++) {
        var _widgetId = _Object$keys[_i];
        var roughWidget = content[_widgetId];
        if (!roughWidget) continue;
        if (roughWidget.type !== "m.widget" && roughWidget.type !== "im.vector.modular.widgets") continue;
        if (!roughWidget.sender) continue;
        var probableWidgetId = roughWidget.state_key || roughWidget.id;
        if (probableWidgetId !== _widgetId) continue;
        var asStateEvent = {
          content: roughWidget.content,
          sender: roughWidget.sender,
          type: "m.widget",
          state_key: _widgetId,
          event_id: "$example",
          room_id: "!example",
          origin_server_ts: 1
        };
        var widget = WidgetParser.parseRoomWidget(asStateEvent);
        if (widget) result.push(widget);
      }
      return result;
    }

    /**
     * Parses all the widgets possible in the given array. This will always return
     * an array, though may be empty if no widgets could be parsed.
     * @param {IStateEvent[]} currentState The room state to parse.
     * @returns {Widget[]} The widgets in the state, or an empty array.
     */
  }, {
    key: "parseWidgetsFromRoomState",
    value: function parseWidgetsFromRoomState(currentState) {
      if (!currentState) return [];
      var result = [];
      var _iterator = _createForOfIteratorHelper(currentState),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var state = _step.value;
          var widget = WidgetParser.parseRoomWidget(state);
          if (widget) result.push(widget);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return result;
    }

    /**
     * Parses a state event into a widget. If the state event does not represent
     * a widget (wrong event type, invalid widget, etc) then null is returned.
     * @param {IStateEvent} stateEvent The state event.
     * @returns {Widget|null} The widget, or null if invalid
     */
  }, {
    key: "parseRoomWidget",
    value: function parseRoomWidget(stateEvent) {
      if (!stateEvent) return null;

      // TODO: [Legacy] Remove legacy support
      if (stateEvent.type !== "m.widget" && stateEvent.type !== "im.vector.modular.widgets") {
        return null;
      }

      // Dev note: Throughout this function we have null safety to ensure that
      // if the caller did not supply something useful that we don't error. This
      // is done against the requirements of the interface because not everyone
      // will have an interface to validate against.

      var content = stateEvent.content || {};

      // Form our best approximation of a widget with the information we have
      var estimatedWidget = {
        id: stateEvent.state_key,
        creatorUserId: content['creatorUserId'] || stateEvent.sender,
        name: content['name'],
        type: content['type'],
        url: content['url'],
        waitForIframeLoad: content['waitForIframeLoad'],
        data: content['data']
      };

      // Finally, process that widget
      return WidgetParser.processEstimatedWidget(estimatedWidget);
    }
  }, {
    key: "processEstimatedWidget",
    value: function processEstimatedWidget(widget) {
      // Validate that the widget has the best chance of passing as a widget
      if (!widget.id || !widget.creatorUserId || !widget.type) {
        return null;
      }
      if (!(0, _url.isValidUrl)(widget.url)) {
        return null;
      }
      // TODO: Validate data for known widget types
      return new _Widget.Widget(widget);
    }
  }]);
  return WidgetParser;
}();
exports.WidgetParser = WidgetParser;

},{"./Widget":44,"./validation/url":47}],47:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidUrl = isValidUrl;
/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function isValidUrl(val) {
  if (!val) return false; // easy: not valid if not present

  try {
    var parsed = new URL(val);
    if (parsed.protocol !== "http" && parsed.protocol !== "https") {
      return false;
    }
    return true;
  } catch (e) {
    if (e instanceof TypeError) {
      return false;
    }
    throw e;
  }
}

},{}],48:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertPresent = assertPresent;
/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function assertPresent(obj, key) {
  if (!obj[key]) {
    throw new Error("".concat(String(key), " is required"));
  }
}

},{}],49:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runTemplate = runTemplate;
exports.toString = toString;
/*
 * Copyright 2020, 2021 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function runTemplate(url, widget, params) {
  // Always apply the supplied params over top of data to ensure the data can't lie about them.
  var variables = Object.assign({}, widget.data, {
    'matrix_room_id': params.widgetRoomId || "",
    'matrix_user_id': params.currentUserId,
    'matrix_display_name': params.userDisplayName || params.currentUserId,
    'matrix_avatar_url': params.userHttpAvatarUrl || "",
    'matrix_widget_id': widget.id,
    // TODO: Convert to stable (https://github.com/matrix-org/matrix-doc/pull/2873)
    'org.matrix.msc2873.client_id': params.clientId || "",
    'org.matrix.msc2873.client_theme': params.clientTheme || "",
    'org.matrix.msc2873.client_language': params.clientLanguage || "",
    // TODO: Convert to stable (https://github.com/matrix-org/matrix-spec-proposals/pull/3819)
    'org.matrix.msc3819.matrix_device_id': params.deviceId || "",
    // TODO: Convert to stable (https://github.com/matrix-org/matrix-spec-proposals/pull/4039)
    'org.matrix.msc4039.matrix_base_url': params.baseUrl || ""
  });
  var result = url;
  for (var _i = 0, _Object$keys = Object.keys(variables); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    // Regex escape from https://stackoverflow.com/a/6969486/7037379
    var pattern = "$".concat(key).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    var rexp = new RegExp(pattern, 'g');

    // This is technically not what we're supposed to do for a couple of reasons:
    // 1. We are assuming that there won't later be a $key match after we replace a variable.
    // 2. We are assuming that the variable is in a place where it can be escaped (eg: path or query string).
    result = result.replace(rexp, encodeURIComponent(toString(variables[key])));
  }
  return result;
}
function toString(a) {
  if (a === null || a === undefined) {
    return "".concat(a);
  }
  return String(a);
}

},{}],50:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}],51:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostmessageTransport = void 0;
var _events = require("events");
var _ = require("..");
var _excluded = ["message"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * Copyright 2020 - 2024 The Matrix.org Foundation C.I.C.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                               * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                               * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               *         http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                               * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                               * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                               * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * Transport for the Widget API over postMessage.
 */
var PostmessageTransport = /*#__PURE__*/function (_EventEmitter) {
  _inherits(PostmessageTransport, _EventEmitter);
  var _super = _createSuper(PostmessageTransport);
  function PostmessageTransport(sendDirection, initialWidgetId, transportWindow, inboundWindow) {
    var _this;
    _classCallCheck(this, PostmessageTransport);
    _this = _super.call(this);
    _this.sendDirection = sendDirection;
    _this.initialWidgetId = initialWidgetId;
    _this.transportWindow = transportWindow;
    _this.inboundWindow = inboundWindow;
    _defineProperty(_assertThisInitialized(_this), "strictOriginCheck", false);
    _defineProperty(_assertThisInitialized(_this), "targetOrigin", "*");
    _defineProperty(_assertThisInitialized(_this), "timeoutSeconds", 10);
    _defineProperty(_assertThisInitialized(_this), "_ready", false);
    _defineProperty(_assertThisInitialized(_this), "_widgetId", null);
    _defineProperty(_assertThisInitialized(_this), "outboundRequests", new Map());
    _defineProperty(_assertThisInitialized(_this), "stopController", new AbortController());
    _this._widgetId = initialWidgetId;
    return _this;
  }
  _createClass(PostmessageTransport, [{
    key: "ready",
    get: function get() {
      return this._ready;
    }
  }, {
    key: "widgetId",
    get: function get() {
      return this._widgetId || null;
    }
  }, {
    key: "nextRequestId",
    get: function get() {
      var idBase = "widgetapi-".concat(Date.now());
      var index = 0;
      var id = idBase;
      while (this.outboundRequests.has(id)) {
        id = "".concat(idBase, "-").concat(index++);
      }

      // reserve the ID
      this.outboundRequests.set(id, null);
      return id;
    }
  }, {
    key: "sendInternal",
    value: function sendInternal(message) {
      console.log("[PostmessageTransport] Sending object to ".concat(this.targetOrigin, ": "), message);
      this.transportWindow.postMessage(message, this.targetOrigin);
    }
  }, {
    key: "reply",
    value: function reply(request, responseData) {
      return this.sendInternal(_objectSpread(_objectSpread({}, request), {}, {
        response: responseData
      }));
    }
  }, {
    key: "send",
    value: function send(action, data) {
      return this.sendComplete(action, data).then(function (r) {
        return r.response;
      });
    }
  }, {
    key: "sendComplete",
    value: function sendComplete(action, data) {
      var _this2 = this;
      if (!this.ready || !this.widgetId) {
        return Promise.reject(new Error("Not ready or unknown widget ID"));
      }
      var request = {
        api: this.sendDirection,
        widgetId: this.widgetId,
        requestId: this.nextRequestId,
        action: action,
        data: data
      };
      if (action === _.WidgetApiToWidgetAction.UpdateVisibility) {
        request['visible'] = data['visible'];
      }
      return new Promise(function (prResolve, prReject) {
        var resolve = function resolve(response) {
          cleanUp();
          prResolve(response);
        };
        var reject = function reject(err) {
          cleanUp();
          prReject(err);
        };
        var timerId = setTimeout(function () {
          return reject(new Error("Request timed out"));
        }, (_this2.timeoutSeconds || 1) * 1000);
        var onStop = function onStop() {
          return reject(new Error("Transport stopped"));
        };
        _this2.stopController.signal.addEventListener("abort", onStop);
        var cleanUp = function cleanUp() {
          _this2.outboundRequests["delete"](request.requestId);
          clearTimeout(timerId);
          _this2.stopController.signal.removeEventListener("abort", onStop);
        };
        _this2.outboundRequests.set(request.requestId, {
          request: request,
          resolve: resolve,
          reject: reject
        });
        _this2.sendInternal(request);
      });
    }
  }, {
    key: "start",
    value: function start() {
      var _this3 = this;
      this.inboundWindow.addEventListener("message", function (ev) {
        _this3.handleMessage(ev);
      });
      this._ready = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      this._ready = false;
      this.stopController.abort();
    }
  }, {
    key: "handleMessage",
    value: function handleMessage(ev) {
      if (this.stopController.signal.aborted) return;
      if (!ev.data) return; // invalid event

      if (this.strictOriginCheck && ev.origin !== window.origin) return; // bad origin

      // treat the message as a response first, then downgrade to a request
      var response = ev.data;
      if (!response.action || !response.requestId || !response.widgetId) return; // invalid request/response

      if (!response.response) {
        // it's a request
        var request = response;
        if (request.api !== (0, _.invertedDirection)(this.sendDirection)) return; // wrong direction
        this.handleRequest(request);
      } else {
        // it's a response
        if (response.api !== this.sendDirection) return; // wrong direction
        this.handleResponse(response);
      }
    }
  }, {
    key: "handleRequest",
    value: function handleRequest(request) {
      if (this.widgetId) {
        if (this.widgetId !== request.widgetId) return; // wrong widget
      } else {
        this._widgetId = request.widgetId;
      }
      this.emit("message", new CustomEvent("message", {
        detail: request
      }));
    }
  }, {
    key: "handleResponse",
    value: function handleResponse(response) {
      if (response.widgetId !== this.widgetId) return; // wrong widget

      var req = this.outboundRequests.get(response.requestId);
      if (!req) return; // response to an unknown request

      if ((0, _.isErrorResponse)(response.response)) {
        var _response$response$er = response.response.error,
          message = _response$response$er.message,
          data = _objectWithoutProperties(_response$response$er, _excluded);
        req.reject(new _.WidgetApiResponseError(message, data));
      } else {
        req.resolve(response);
      }
    }
  }]);
  return PostmessageTransport;
}(_events.EventEmitter);
exports.PostmessageTransport = PostmessageTransport;

},{"..":5,"events":53}],52:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleObservable = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SimpleObservable = /*#__PURE__*/function () {
  function SimpleObservable(initialFn) {
    _classCallCheck(this, SimpleObservable);
    _defineProperty(this, "listeners", []);
    if (initialFn) this.listeners.push(initialFn);
  }
  _createClass(SimpleObservable, [{
    key: "onUpdate",
    value: function onUpdate(fn) {
      this.listeners.push(fn);
    }
  }, {
    key: "update",
    value: function update(val) {
      var _iterator = _createForOfIteratorHelper(this.listeners),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var listener = _step.value;
          listener(val);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.listeners = []; // reset
    }
  }]);
  return SimpleObservable;
}();
exports.SimpleObservable = SimpleObservable;

},{}],53:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

},{}]},{},[5])(5)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvQ2xpZW50V2lkZ2V0QXBpLmpzIiwibGliL1N5bWJvbHMuanMiLCJsaWIvV2lkZ2V0QXBpLmpzIiwibGliL2RyaXZlci9XaWRnZXREcml2ZXIuanMiLCJsaWIvaW5kZXguanMiLCJsaWIvaW50ZXJmYWNlcy9BcGlWZXJzaW9uLmpzIiwibGliL2ludGVyZmFjZXMvQ2FwYWJpbGl0aWVzLmpzIiwibGliL2ludGVyZmFjZXMvQ2FwYWJpbGl0aWVzQWN0aW9uLmpzIiwibGliL2ludGVyZmFjZXMvQ29udGVudExvYWRlZEFjdGlvbi5qcyIsImxpYi9pbnRlcmZhY2VzL0Rvd25sb2FkRmlsZUFjdGlvbi5qcyIsImxpYi9pbnRlcmZhY2VzL0dldE1lZGlhQ29uZmlnQWN0aW9uLmpzIiwibGliL2ludGVyZmFjZXMvR2V0T3BlbklEQWN0aW9uLmpzIiwibGliL2ludGVyZmFjZXMvSUN1c3RvbVdpZGdldERhdGEuanMiLCJsaWIvaW50ZXJmYWNlcy9JSml0c2lXaWRnZXREYXRhLmpzIiwibGliL2ludGVyZmFjZXMvSVJvb21BY2NvdW50RGF0YS5qcyIsImxpYi9pbnRlcmZhY2VzL0lSb29tRXZlbnQuanMiLCJsaWIvaW50ZXJmYWNlcy9JU3RpY2tlcnBpY2tlcldpZGdldERhdGEuanMiLCJsaWIvaW50ZXJmYWNlcy9JV2lkZ2V0LmpzIiwibGliL2ludGVyZmFjZXMvSVdpZGdldEFwaUVycm9yUmVzcG9uc2UuanMiLCJsaWIvaW50ZXJmYWNlcy9JV2lkZ2V0QXBpUmVxdWVzdC5qcyIsImxpYi9pbnRlcmZhY2VzL0lXaWRnZXRBcGlSZXNwb25zZS5qcyIsImxpYi9pbnRlcmZhY2VzL01vZGFsQnV0dG9uS2luZC5qcyIsImxpYi9pbnRlcmZhY2VzL01vZGFsV2lkZ2V0QWN0aW9ucy5qcyIsImxpYi9pbnRlcmZhY2VzL05hdmlnYXRlQWN0aW9uLmpzIiwibGliL2ludGVyZmFjZXMvT3BlbklEQ3JlZGVudGlhbHNBY3Rpb24uanMiLCJsaWIvaW50ZXJmYWNlcy9SZWFkRXZlbnRBY3Rpb24uanMiLCJsaWIvaW50ZXJmYWNlcy9SZWFkUmVsYXRpb25zQWN0aW9uLmpzIiwibGliL2ludGVyZmFjZXMvU2NyZWVuc2hvdEFjdGlvbi5qcyIsImxpYi9pbnRlcmZhY2VzL1NlbmRFdmVudEFjdGlvbi5qcyIsImxpYi9pbnRlcmZhY2VzL1NlbmRUb0RldmljZUFjdGlvbi5qcyIsImxpYi9pbnRlcmZhY2VzL1NldE1vZGFsQnV0dG9uRW5hYmxlZEFjdGlvbi5qcyIsImxpYi9pbnRlcmZhY2VzL1N0aWNrZXJBY3Rpb24uanMiLCJsaWIvaW50ZXJmYWNlcy9TdGlja3lBY3Rpb24uanMiLCJsaWIvaW50ZXJmYWNlcy9TdXBwb3J0ZWRWZXJzaW9uc0FjdGlvbi5qcyIsImxpYi9pbnRlcmZhY2VzL1R1cm5TZXJ2ZXJBY3Rpb25zLmpzIiwibGliL2ludGVyZmFjZXMvVXBkYXRlRGVsYXllZEV2ZW50QWN0aW9uLmpzIiwibGliL2ludGVyZmFjZXMvVXBsb2FkRmlsZUFjdGlvbi5qcyIsImxpYi9pbnRlcmZhY2VzL1Zpc2liaWxpdHlBY3Rpb24uanMiLCJsaWIvaW50ZXJmYWNlcy9XaWRnZXRBcGlBY3Rpb24uanMiLCJsaWIvaW50ZXJmYWNlcy9XaWRnZXRBcGlEaXJlY3Rpb24uanMiLCJsaWIvaW50ZXJmYWNlcy9XaWRnZXRDb25maWdBY3Rpb24uanMiLCJsaWIvaW50ZXJmYWNlcy9XaWRnZXRLaW5kLmpzIiwibGliL2ludGVyZmFjZXMvV2lkZ2V0VHlwZS5qcyIsImxpYi9tb2RlbHMvV2lkZ2V0LmpzIiwibGliL21vZGVscy9XaWRnZXRFdmVudENhcGFiaWxpdHkuanMiLCJsaWIvbW9kZWxzL1dpZGdldFBhcnNlci5qcyIsImxpYi9tb2RlbHMvdmFsaWRhdGlvbi91cmwuanMiLCJsaWIvbW9kZWxzL3ZhbGlkYXRpb24vdXRpbHMuanMiLCJsaWIvdGVtcGxhdGluZy91cmwtdGVtcGxhdGUuanMiLCJsaWIvdHJhbnNwb3J0L0lUcmFuc3BvcnQuanMiLCJsaWIvdHJhbnNwb3J0L1Bvc3RtZXNzYWdlVHJhbnNwb3J0LmpzIiwibGliL3V0aWwvU2ltcGxlT2JzZXJ2YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaDBDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNTlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdGpCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkNsaWVudFdpZGdldEFwaSA9IHZvaWQgMDtcbnZhciBfZXZlbnRzID0gcmVxdWlyZShcImV2ZW50c1wiKTtcbnZhciBfUG9zdG1lc3NhZ2VUcmFuc3BvcnQgPSByZXF1aXJlKFwiLi90cmFuc3BvcnQvUG9zdG1lc3NhZ2VUcmFuc3BvcnRcIik7XG52YXIgX1dpZGdldEFwaURpcmVjdGlvbiA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvV2lkZ2V0QXBpRGlyZWN0aW9uXCIpO1xudmFyIF9XaWRnZXRBcGlBY3Rpb24gPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL1dpZGdldEFwaUFjdGlvblwiKTtcbnZhciBfQ2FwYWJpbGl0aWVzID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9DYXBhYmlsaXRpZXNcIik7XG52YXIgX0FwaVZlcnNpb24gPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL0FwaVZlcnNpb25cIik7XG52YXIgX1dpZGdldEV2ZW50Q2FwYWJpbGl0eSA9IHJlcXVpcmUoXCIuL21vZGVscy9XaWRnZXRFdmVudENhcGFiaWxpdHlcIik7XG52YXIgX0dldE9wZW5JREFjdGlvbiA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvR2V0T3BlbklEQWN0aW9uXCIpO1xudmFyIF9TaW1wbGVPYnNlcnZhYmxlID0gcmVxdWlyZShcIi4vdXRpbC9TaW1wbGVPYnNlcnZhYmxlXCIpO1xudmFyIF9TeW1ib2xzID0gcmVxdWlyZShcIi4vU3ltYm9sc1wiKTtcbnZhciBfVXBkYXRlRGVsYXllZEV2ZW50QWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9VcGRhdGVEZWxheWVkRXZlbnRBY3Rpb25cIik7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5mdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkgeyBcInVzZSBzdHJpY3RcIjsgLyohIHJlZ2VuZXJhdG9yLXJ1bnRpbWUgLS0gQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuIC0tIGxpY2Vuc2UgKE1JVCk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vTElDRU5TRSAqLyBfcmVnZW5lcmF0b3JSdW50aW1lID0gZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHsgcmV0dXJuIGV4cG9ydHM7IH07IHZhciBleHBvcnRzID0ge30sIE9wID0gT2JqZWN0LnByb3RvdHlwZSwgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHksIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5IHx8IGZ1bmN0aW9uIChvYmosIGtleSwgZGVzYykgeyBvYmpba2V5XSA9IGRlc2MudmFsdWU7IH0sICRTeW1ib2wgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCA/IFN5bWJvbCA6IHt9LCBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCIsIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIiwgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiOyBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7IHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwIH0pLCBvYmpba2V5XTsgfSB0cnkgeyBkZWZpbmUoe30sIFwiXCIpOyB9IGNhdGNoIChlcnIpIHsgZGVmaW5lID0gZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkgeyByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTsgfTsgfSBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7IHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yLCBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSksIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7IHJldHVybiBkZWZpbmVQcm9wZXJ0eShnZW5lcmF0b3IsIFwiX2ludm9rZVwiLCB7IHZhbHVlOiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIH0pLCBnZW5lcmF0b3I7IH0gZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7IHRyeSB7IHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTsgfSBjYXRjaCAoZXJyKSB7IHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTsgfSB9IGV4cG9ydHMud3JhcCA9IHdyYXA7IHZhciBDb250aW51ZVNlbnRpbmVsID0ge307IGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9IGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge30gZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fSB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTsgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7IHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiwgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJiBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpICYmIChJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlKTsgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpOyBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7IFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHsgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbiAoYXJnKSB7IHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpOyB9KTsgfSk7IH0gZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7IGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7IHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpOyBpZiAoXCJ0aHJvd1wiICE9PSByZWNvcmQudHlwZSkgeyB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZywgdmFsdWUgPSByZXN1bHQudmFsdWU7IHJldHVybiB2YWx1ZSAmJiBcIm9iamVjdFwiID09IF90eXBlb2YodmFsdWUpICYmIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikgPyBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7IGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7IH0sIGZ1bmN0aW9uIChlcnIpIHsgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpOyB9KSA6IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHVud3JhcHBlZCkgeyByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQsIHJlc29sdmUocmVzdWx0KTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTsgfSk7IH0gcmVqZWN0KHJlY29yZC5hcmcpOyB9IHZhciBwcmV2aW91c1Byb21pc2U7IGRlZmluZVByb3BlcnR5KHRoaXMsIFwiX2ludm9rZVwiLCB7IHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShtZXRob2QsIGFyZykgeyBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHsgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTsgfSk7IH0gcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9IHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpOyB9IH0pOyB9IGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkgeyB2YXIgc3RhdGUgPSBcInN1c3BlbmRlZFN0YXJ0XCI7IHJldHVybiBmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHsgaWYgKFwiZXhlY3V0aW5nXCIgPT09IHN0YXRlKSB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpOyBpZiAoXCJjb21wbGV0ZWRcIiA9PT0gc3RhdGUpIHsgaWYgKFwidGhyb3dcIiA9PT0gbWV0aG9kKSB0aHJvdyBhcmc7IHJldHVybiBkb25lUmVzdWx0KCk7IH0gZm9yIChjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZCwgY29udGV4dC5hcmcgPSBhcmc7OykgeyB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlOyBpZiAoZGVsZWdhdGUpIHsgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7IGlmIChkZWxlZ2F0ZVJlc3VsdCkgeyBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlOyByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7IH0gfSBpZiAoXCJuZXh0XCIgPT09IGNvbnRleHQubWV0aG9kKSBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7ZWxzZSBpZiAoXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkgeyBpZiAoXCJzdXNwZW5kZWRTdGFydFwiID09PSBzdGF0ZSkgdGhyb3cgc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0LmFyZzsgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7IH0gZWxzZSBcInJldHVyblwiID09PSBjb250ZXh0Lm1ldGhvZCAmJiBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7IHN0YXRlID0gXCJleGVjdXRpbmdcIjsgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpOyBpZiAoXCJub3JtYWxcIiA9PT0gcmVjb3JkLnR5cGUpIHsgaWYgKHN0YXRlID0gY29udGV4dC5kb25lID8gXCJjb21wbGV0ZWRcIiA6IFwic3VzcGVuZGVkWWllbGRcIiwgcmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7IHJldHVybiB7IHZhbHVlOiByZWNvcmQuYXJnLCBkb25lOiBjb250ZXh0LmRvbmUgfTsgfSBcInRocm93XCIgPT09IHJlY29yZC50eXBlICYmIChzdGF0ZSA9IFwiY29tcGxldGVkXCIsIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmcpOyB9IH07IH0gZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkgeyB2YXIgbWV0aG9kTmFtZSA9IGNvbnRleHQubWV0aG9kLCBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2ROYW1lXTsgaWYgKHVuZGVmaW5lZCA9PT0gbWV0aG9kKSByZXR1cm4gY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIFwidGhyb3dcIiA9PT0gbWV0aG9kTmFtZSAmJiBkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSAmJiAoY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCwgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCksIFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHx8IFwicmV0dXJuXCIgIT09IG1ldGhvZE5hbWUgJiYgKGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICdcIiArIG1ldGhvZE5hbWUgKyBcIicgbWV0aG9kXCIpKSwgQ29udGludWVTZW50aW5lbDsgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTsgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHJldHVybiBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbDsgdmFyIGluZm8gPSByZWNvcmQuYXJnOyByZXR1cm4gaW5mbyA/IGluZm8uZG9uZSA/IChjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZSwgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYywgXCJyZXR1cm5cIiAhPT0gY29udGV4dC5tZXRob2QgJiYgKGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWwpIDogaW5mbyA6IChjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIiksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKTsgfSBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykgeyB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9OyAxIGluIGxvY3MgJiYgKGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXSksIDIgaW4gbG9jcyAmJiAoZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl0sIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXSksIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTsgfSBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7IHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9OyByZWNvcmQudHlwZSA9IFwibm9ybWFsXCIsIGRlbGV0ZSByZWNvcmQuYXJnLCBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkOyB9IGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHsgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XSwgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpLCB0aGlzLnJlc2V0KCEwKTsgfSBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHsgaWYgKGl0ZXJhYmxlKSB7IHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTsgaWYgKGl0ZXJhdG9yTWV0aG9kKSByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7IGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGl0ZXJhYmxlLm5leHQpIHJldHVybiBpdGVyYWJsZTsgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7IHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkgeyBmb3IgKDsgKytpIDwgaXRlcmFibGUubGVuZ3RoOykgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkgcmV0dXJuIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXSwgbmV4dC5kb25lID0gITEsIG5leHQ7IHJldHVybiBuZXh0LnZhbHVlID0gdW5kZWZpbmVkLCBuZXh0LmRvbmUgPSAhMCwgbmV4dDsgfTsgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7IH0gfSByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07IH0gZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHsgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogITAgfTsgfSByZXR1cm4gR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZVByb3BlcnR5KEdwLCBcImNvbnN0cnVjdG9yXCIsIHsgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBjb25maWd1cmFibGU6ICEwIH0pLCBkZWZpbmVQcm9wZXJ0eShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCB7IHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvbiwgY29uZmlndXJhYmxlOiAhMCB9KSwgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpLCBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAoZ2VuRnVuKSB7IHZhciBjdG9yID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBnZW5GdW4gJiYgZ2VuRnVuLmNvbnN0cnVjdG9yOyByZXR1cm4gISFjdG9yICYmIChjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIgPT09IChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkpOyB9LCBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbiAoZ2VuRnVuKSB7IHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSkgOiAoZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSksIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKSwgZ2VuRnVuOyB9LCBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24gKGFyZykgeyByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTsgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKSwgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSwgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvciwgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uIChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHsgdm9pZCAwID09PSBQcm9taXNlSW1wbCAmJiAoUHJvbWlzZUltcGwgPSBQcm9taXNlKTsgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSwgUHJvbWlzZUltcGwpOyByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pID8gaXRlciA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkgeyByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTsgfSk7IH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCksIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpLCBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSwgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7IH0pLCBleHBvcnRzLmtleXMgPSBmdW5jdGlvbiAodmFsKSB7IHZhciBvYmplY3QgPSBPYmplY3QodmFsKSwga2V5cyA9IFtdOyBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSBrZXlzLnB1c2goa2V5KTsgcmV0dXJuIGtleXMucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkgeyBmb3IgKDsga2V5cy5sZW5ndGg7KSB7IHZhciBrZXkgPSBrZXlzLnBvcCgpOyBpZiAoa2V5IGluIG9iamVjdCkgcmV0dXJuIG5leHQudmFsdWUgPSBrZXksIG5leHQuZG9uZSA9ICExLCBuZXh0OyB9IHJldHVybiBuZXh0LmRvbmUgPSAhMCwgbmV4dDsgfTsgfSwgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXMsIENvbnRleHQucHJvdG90eXBlID0geyBjb25zdHJ1Y3RvcjogQ29udGV4dCwgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KHNraXBUZW1wUmVzZXQpIHsgaWYgKHRoaXMucHJldiA9IDAsIHRoaXMubmV4dCA9IDAsIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQsIHRoaXMuZG9uZSA9ICExLCB0aGlzLmRlbGVnYXRlID0gbnVsbCwgdGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5hcmcgPSB1bmRlZmluZWQsIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpLCAhc2tpcFRlbXBSZXNldCkgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSBcInRcIiA9PT0gbmFtZS5jaGFyQXQoMCkgJiYgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiYgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSAmJiAodGhpc1tuYW1lXSA9IHVuZGVmaW5lZCk7IH0sIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7IHRoaXMuZG9uZSA9ICEwOyB2YXIgcm9vdFJlY29yZCA9IHRoaXMudHJ5RW50cmllc1swXS5jb21wbGV0aW9uOyBpZiAoXCJ0aHJvd1wiID09PSByb290UmVjb3JkLnR5cGUpIHRocm93IHJvb3RSZWNvcmQuYXJnOyByZXR1cm4gdGhpcy5ydmFsOyB9LCBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gZGlzcGF0Y2hFeGNlcHRpb24oZXhjZXB0aW9uKSB7IGlmICh0aGlzLmRvbmUpIHRocm93IGV4Y2VwdGlvbjsgdmFyIGNvbnRleHQgPSB0aGlzOyBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHsgcmV0dXJuIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiLCByZWNvcmQuYXJnID0gZXhjZXB0aW9uLCBjb250ZXh0Lm5leHQgPSBsb2MsIGNhdWdodCAmJiAoY29udGV4dC5tZXRob2QgPSBcIm5leHRcIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQpLCAhIWNhdWdodDsgfSBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7IHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXSwgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjsgaWYgKFwicm9vdFwiID09PSBlbnRyeS50cnlMb2MpIHJldHVybiBoYW5kbGUoXCJlbmRcIik7IGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7IHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpLCBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTsgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHsgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7IGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpOyB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7IGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgITApOyB9IGVsc2UgeyBpZiAoIWhhc0ZpbmFsbHkpIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpOyBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTsgfSB9IH0gfSwgYWJydXB0OiBmdW5jdGlvbiBhYnJ1cHQodHlwZSwgYXJnKSB7IGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHsgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldOyBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJiBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHsgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5OyBicmVhazsgfSB9IGZpbmFsbHlFbnRyeSAmJiAoXCJicmVha1wiID09PSB0eXBlIHx8IFwiY29udGludWVcIiA9PT0gdHlwZSkgJiYgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiYgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jICYmIChmaW5hbGx5RW50cnkgPSBudWxsKTsgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307IHJldHVybiByZWNvcmQudHlwZSA9IHR5cGUsIHJlY29yZC5hcmcgPSBhcmcsIGZpbmFsbHlFbnRyeSA/ICh0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYywgQ29udGludWVTZW50aW5lbCkgOiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7IH0sIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZShyZWNvcmQsIGFmdGVyTG9jKSB7IGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSB0aHJvdyByZWNvcmQuYXJnOyByZXR1cm4gXCJicmVha1wiID09PSByZWNvcmQudHlwZSB8fCBcImNvbnRpbnVlXCIgPT09IHJlY29yZC50eXBlID8gdGhpcy5uZXh0ID0gcmVjb3JkLmFyZyA6IFwicmV0dXJuXCIgPT09IHJlY29yZC50eXBlID8gKHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZywgdGhpcy5tZXRob2QgPSBcInJldHVyblwiLCB0aGlzLm5leHQgPSBcImVuZFwiKSA6IFwibm9ybWFsXCIgPT09IHJlY29yZC50eXBlICYmIGFmdGVyTG9jICYmICh0aGlzLm5leHQgPSBhZnRlckxvYyksIENvbnRpbnVlU2VudGluZWw7IH0sIGZpbmlzaDogZnVuY3Rpb24gZmluaXNoKGZpbmFsbHlMb2MpIHsgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkgeyB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07IGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSByZXR1cm4gdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyksIHJlc2V0VHJ5RW50cnkoZW50cnkpLCBDb250aW51ZVNlbnRpbmVsOyB9IH0sIFwiY2F0Y2hcIjogZnVuY3Rpb24gX2NhdGNoKHRyeUxvYykgeyBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7IHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTsgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7IHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uOyBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkgeyB2YXIgdGhyb3duID0gcmVjb3JkLmFyZzsgcmVzZXRUcnlFbnRyeShlbnRyeSk7IH0gcmV0dXJuIHRocm93bjsgfSB9IHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTsgfSwgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24gZGVsZWdhdGVZaWVsZChpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykgeyByZXR1cm4gdGhpcy5kZWxlZ2F0ZSA9IHsgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsIG5leHRMb2M6IG5leHRMb2MgfSwgXCJuZXh0XCIgPT09IHRoaXMubWV0aG9kICYmICh0aGlzLmFyZyA9IHVuZGVmaW5lZCksIENvbnRpbnVlU2VudGluZWw7IH0gfSwgZXhwb3J0czsgfVxuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7IH0gfVxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7IGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTsgfSBmdW5jdGlvbiBfdGhyb3coZXJyKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpOyB9IF9uZXh0KHVuZGVmaW5lZCk7IH0pOyB9OyB9XG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTsgaWYgKCFpdCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBpdC5jYWxsKG8pOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1wicmV0dXJuXCJdICE9IG51bGwpIGl0W1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTsgcmV0dXJuIGFycjI7IH1cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbmZ1bmN0aW9uIF9hc3luY0l0ZXJhdG9yKGl0ZXJhYmxlKSB7IHZhciBtZXRob2QsIGFzeW5jLCBzeW5jLCByZXRyeSA9IDI7IGZvciAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIChhc3luYyA9IFN5bWJvbC5hc3luY0l0ZXJhdG9yLCBzeW5jID0gU3ltYm9sLml0ZXJhdG9yKTsgcmV0cnktLTspIHsgaWYgKGFzeW5jICYmIG51bGwgIT0gKG1ldGhvZCA9IGl0ZXJhYmxlW2FzeW5jXSkpIHJldHVybiBtZXRob2QuY2FsbChpdGVyYWJsZSk7IGlmIChzeW5jICYmIG51bGwgIT0gKG1ldGhvZCA9IGl0ZXJhYmxlW3N5bmNdKSkgcmV0dXJuIG5ldyBBc3luY0Zyb21TeW5jSXRlcmF0b3IobWV0aG9kLmNhbGwoaXRlcmFibGUpKTsgYXN5bmMgPSBcIkBAYXN5bmNJdGVyYXRvclwiLCBzeW5jID0gXCJAQGl0ZXJhdG9yXCI7IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBpcyBub3QgYXN5bmMgaXRlcmFibGVcIik7IH1cbmZ1bmN0aW9uIEFzeW5jRnJvbVN5bmNJdGVyYXRvcihzKSB7IGZ1bmN0aW9uIEFzeW5jRnJvbVN5bmNJdGVyYXRvckNvbnRpbnVhdGlvbihyKSB7IGlmIChPYmplY3QocikgIT09IHIpIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKHIgKyBcIiBpcyBub3QgYW4gb2JqZWN0LlwiKSk7IHZhciBkb25lID0gci5kb25lOyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogZG9uZSB9OyB9KTsgfSByZXR1cm4gQXN5bmNGcm9tU3luY0l0ZXJhdG9yID0gZnVuY3Rpb24gQXN5bmNGcm9tU3luY0l0ZXJhdG9yKHMpIHsgdGhpcy5zID0gcywgdGhpcy5uID0gcy5uZXh0OyB9LCBBc3luY0Zyb21TeW5jSXRlcmF0b3IucHJvdG90eXBlID0geyBzOiBudWxsLCBuOiBudWxsLCBuZXh0OiBmdW5jdGlvbiBuZXh0KCkgeyByZXR1cm4gQXN5bmNGcm9tU3luY0l0ZXJhdG9yQ29udGludWF0aW9uKHRoaXMubi5hcHBseSh0aGlzLnMsIGFyZ3VtZW50cykpOyB9LCBcInJldHVyblwiOiBmdW5jdGlvbiBfcmV0dXJuKHZhbHVlKSB7IHZhciByZXQgPSB0aGlzLnNbXCJyZXR1cm5cIl07IHJldHVybiB2b2lkIDAgPT09IHJldCA/IFByb21pc2UucmVzb2x2ZSh7IHZhbHVlOiB2YWx1ZSwgZG9uZTogITAgfSkgOiBBc3luY0Zyb21TeW5jSXRlcmF0b3JDb250aW51YXRpb24ocmV0LmFwcGx5KHRoaXMucywgYXJndW1lbnRzKSk7IH0sIFwidGhyb3dcIjogZnVuY3Rpb24gX3Rocm93KHZhbHVlKSB7IHZhciB0aHIgPSB0aGlzLnNbXCJyZXR1cm5cIl07IHJldHVybiB2b2lkIDAgPT09IHRociA/IFByb21pc2UucmVqZWN0KHZhbHVlKSA6IEFzeW5jRnJvbVN5bmNJdGVyYXRvckNvbnRpbnVhdGlvbih0aHIuYXBwbHkodGhpcy5zLCBhcmd1bWVudHMpKTsgfSB9LCBuZXcgQXN5bmNGcm9tU3luY0l0ZXJhdG9yKHMpOyB9IC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQ29weXJpZ2h0IDIwMjAgLSAyMDI0IFRoZSBNYXRyaXgub3JnIEZvdW5kYXRpb24gQy5JLkMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qKlxyXG4gKiBBUEkgaGFuZGxlciBmb3IgdGhlIGNsaWVudCBzaWRlIG9mIHdpZGdldHMuIFRoaXMgcmFpc2VzIGV2ZW50c1xyXG4gKiBmb3IgZWFjaCBhY3Rpb24gcmVjZWl2ZWQgYXMgYGFjdGlvbjoke2FjdGlvbn1gIChlZzogXCJhY3Rpb246c2NyZWVuc2hvdFwiKS5cclxuICogRGVmYXVsdCBoYW5kbGluZyBjYW4gYmUgcHJldmVudGVkIGJ5IHVzaW5nIHByZXZlbnREZWZhdWx0KCkgb24gdGhlXHJcbiAqIHJhaXNlZCBldmVudC4gVGhlIGRlZmF1bHQgaGFuZGxpbmcgdmFyaWVzIGZvciBlYWNoIGFjdGlvbjogb25lc1xyXG4gKiB3aGljaCB0aGUgU0RLIGNhbiBoYW5kbGUgc2FmZWx5IGFyZSBhY2tub3dsZWRnZWQgYXBwcm9wcmlhdGVseSBhbmRcclxuICogb25lcyB3aGljaCBhcmUgdW5oYW5kbGVkIChjdXN0b20gb3IgcmVxdWlyZSB0aGUgY2xpZW50IHRvIGRvIHNvbWV0aGluZylcclxuICogYXJlIHJlamVjdGVkIHdpdGggYW4gZXJyb3IuXHJcbiAqXHJcbiAqIEV2ZW50cyB3aGljaCBhcmUgcHJldmVudERlZmF1bHQoKWVkIG11c3QgcmVwbHkgdXNpbmcgdGhlIHRyYW5zcG9ydC5cclxuICogVGhlIGV2ZW50cyByYWlzZWQgd2lsbCBoYXZlIGEgZGVmYXVsdCBvZiBhbiBJV2lkZ2V0QXBpUmVxdWVzdFxyXG4gKiBpbnRlcmZhY2UuXHJcbiAqXHJcbiAqIFdoZW4gdGhlIENsaWVudFdpZGdldEFwaSBpcyByZWFkeSB0byBzdGFydCBzZW5kaW5nIHJlcXVlc3RzLCBpdCB3aWxsXHJcbiAqIHJhaXNlIGEgXCJyZWFkeVwiIEN1c3RvbUV2ZW50LiBBZnRlciB0aGUgcmVhZHkgZXZlbnQgZmlyZXMsIGFjdGlvbnMgY2FuXHJcbiAqIGJlIHNlbnQgYW5kIHRoZSB0cmFuc3BvcnQgd2lsbCBiZSByZWFkeS5cclxuICpcclxuICogV2hlbiB0aGUgd2lkZ2V0IGhhcyBpbmRpY2F0ZWQgaXQgaGFzIGxvYWRlZCwgdGhpcyBjbGFzcyByYWlzZXMgYVxyXG4gKiBcInByZXBhcmluZ1wiIEN1c3RvbUV2ZW50LiBUaGUgcHJlcGFyaW5nIGV2ZW50IGRvZXMgbm90IGluZGljYXRlIHRoYXRcclxuICogdGhlIHdpZGdldCBpcyByZWFkeSB0byByZWNlaXZlIGNvbW11bmljYXRpb25zIC0gdGhhdCBpcyBzaWduaWZpZWQgYnlcclxuICogdGhlIHJlYWR5IGV2ZW50IGV4Y2x1c2l2ZWx5LlxyXG4gKlxyXG4gKiBUaGlzIGNsYXNzIG9ubHkgaGFuZGxlcyBvbmUgd2lkZ2V0IGF0IGEgdGltZS5cclxuICovXG52YXIgQ2xpZW50V2lkZ2V0QXBpID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfRXZlbnRFbWl0dGVyKSB7XG4gIF9pbmhlcml0cyhDbGllbnRXaWRnZXRBcGksIF9FdmVudEVtaXR0ZXIpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKENsaWVudFdpZGdldEFwaSk7XG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgY2xpZW50IHdpZGdldCBBUEkuIFRoaXMgd2lsbCBpbnN0YW50aWF0ZSB0aGUgdHJhbnNwb3J0XHJcbiAgICogYW5kIHN0YXJ0IGV2ZXJ5dGhpbmcuIFdoZW4gdGhlIGlmcmFtZSBpcyBsb2FkZWQgdW5kZXIgdGhlIHdpZGdldCdzXHJcbiAgICogY29uZGl0aW9ucywgYSBcInJlYWR5XCIgZXZlbnQgd2lsbCBiZSByYWlzZWQuXHJcbiAgICogQHBhcmFtIHtXaWRnZXR9IHdpZGdldCBUaGUgd2lkZ2V0IHRvIGNvbW11bmljYXRlIHdpdGguXHJcbiAgICogQHBhcmFtIHtIVE1MSUZyYW1lRWxlbWVudH0gaWZyYW1lIFRoZSBpZnJhbWUgdGhlIHdpZGdldCBpcyBpbi5cclxuICAgKiBAcGFyYW0ge1dpZGdldERyaXZlcn0gZHJpdmVyIFRoZSBkcml2ZXIgZm9yIHRoaXMgd2lkZ2V0L2NsaWVudC5cclxuICAgKi9cbiAgZnVuY3Rpb24gQ2xpZW50V2lkZ2V0QXBpKHdpZGdldCwgaWZyYW1lLCBkcml2ZXIpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENsaWVudFdpZGdldEFwaSk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICBfdGhpcy53aWRnZXQgPSB3aWRnZXQ7XG4gICAgX3RoaXMuaWZyYW1lID0gaWZyYW1lO1xuICAgIF90aGlzLmRyaXZlciA9IGRyaXZlcjtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidHJhbnNwb3J0XCIsIHZvaWQgMCk7XG4gICAgLy8gY29udGVudExvYWRlZEFjdGlvblNlbnQgaXMgdXNlZCB0byBjaGVjayB0aGF0IG9ubHkgb25lIENvbnRlbnRMb2FkZWQgcmVxdWVzdCBpcyBzZW5kLlxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjb250ZW50TG9hZGVkQWN0aW9uU2VudFwiLCBmYWxzZSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImFsbG93ZWRDYXBhYmlsaXRpZXNcIiwgbmV3IFNldCgpKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiYWxsb3dlZEV2ZW50c1wiLCBbXSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImlzU3RvcHBlZFwiLCBmYWxzZSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInR1cm5TZXJ2ZXJzXCIsIG51bGwpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjb250ZW50TG9hZGVkV2FpdFRpbWVyXCIsIHZvaWQgMCk7XG4gICAgaWYgKCEoaWZyYW1lICE9PSBudWxsICYmIGlmcmFtZSAhPT0gdm9pZCAwICYmIGlmcmFtZS5jb250ZW50V2luZG93KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gaWZyYW1lIHN1cHBsaWVkXCIpO1xuICAgIH1cbiAgICBpZiAoIXdpZGdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB3aWRnZXRcIik7XG4gICAgfVxuICAgIGlmICghZHJpdmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRyaXZlclwiKTtcbiAgICB9XG4gICAgX3RoaXMudHJhbnNwb3J0ID0gbmV3IF9Qb3N0bWVzc2FnZVRyYW5zcG9ydC5Qb3N0bWVzc2FnZVRyYW5zcG9ydChfV2lkZ2V0QXBpRGlyZWN0aW9uLldpZGdldEFwaURpcmVjdGlvbi5Ub1dpZGdldCwgd2lkZ2V0LmlkLCBpZnJhbWUuY29udGVudFdpbmRvdywgd2luZG93KTtcbiAgICBfdGhpcy50cmFuc3BvcnQudGFyZ2V0T3JpZ2luID0gd2lkZ2V0Lm9yaWdpbjtcbiAgICBfdGhpcy50cmFuc3BvcnQub24oXCJtZXNzYWdlXCIsIF90aGlzLmhhbmRsZU1lc3NhZ2UuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xuICAgIGlmcmFtZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBfdGhpcy5vbklmcmFtZUxvYWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xuICAgIF90aGlzLnRyYW5zcG9ydC5zdGFydCgpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoQ2xpZW50V2lkZ2V0QXBpLCBbe1xuICAgIGtleTogXCJoYXNDYXBhYmlsaXR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0NhcGFiaWxpdHkoY2FwYWJpbGl0eSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWxsb3dlZENhcGFiaWxpdGllcy5oYXMoY2FwYWJpbGl0eSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhblVzZVJvb21UaW1lbGluZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5Vc2VSb29tVGltZWxpbmUocm9vbUlkKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXNDYXBhYmlsaXR5KFwib3JnLm1hdHJpeC5tc2MyNzYyLnRpbWVsaW5lOlwiLmNvbmNhdChfU3ltYm9scy5TeW1ib2xzLkFueVJvb20pKSB8fCB0aGlzLmhhc0NhcGFiaWxpdHkoXCJvcmcubWF0cml4Lm1zYzI3NjIudGltZWxpbmU6XCIuY29uY2F0KHJvb21JZCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYW5TZW5kUm9vbUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblNlbmRSb29tRXZlbnQoZXZlbnRUeXBlKSB7XG4gICAgICB2YXIgbXNndHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgICAgIHJldHVybiB0aGlzLmFsbG93ZWRFdmVudHMuc29tZShmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5tYXRjaGVzQXNSb29tRXZlbnQoX1dpZGdldEV2ZW50Q2FwYWJpbGl0eS5FdmVudERpcmVjdGlvbi5TZW5kLCBldmVudFR5cGUsIG1zZ3R5cGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhblNlbmRTdGF0ZUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblNlbmRTdGF0ZUV2ZW50KGV2ZW50VHlwZSwgc3RhdGVLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmFsbG93ZWRFdmVudHMuc29tZShmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5tYXRjaGVzQXNTdGF0ZUV2ZW50KF9XaWRnZXRFdmVudENhcGFiaWxpdHkuRXZlbnREaXJlY3Rpb24uU2VuZCwgZXZlbnRUeXBlLCBzdGF0ZUtleSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FuU2VuZFRvRGV2aWNlRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuU2VuZFRvRGV2aWNlRXZlbnQoZXZlbnRUeXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbGxvd2VkRXZlbnRzLnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUubWF0Y2hlc0FzVG9EZXZpY2VFdmVudChfV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LkV2ZW50RGlyZWN0aW9uLlNlbmQsIGV2ZW50VHlwZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FuUmVjZWl2ZVJvb21FdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5SZWNlaXZlUm9vbUV2ZW50KGV2ZW50VHlwZSkge1xuICAgICAgdmFyIG1zZ3R5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gICAgICByZXR1cm4gdGhpcy5hbGxvd2VkRXZlbnRzLnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUubWF0Y2hlc0FzUm9vbUV2ZW50KF9XaWRnZXRFdmVudENhcGFiaWxpdHkuRXZlbnREaXJlY3Rpb24uUmVjZWl2ZSwgZXZlbnRUeXBlLCBtc2d0eXBlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYW5SZWNlaXZlU3RhdGVFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5SZWNlaXZlU3RhdGVFdmVudChldmVudFR5cGUsIHN0YXRlS2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5hbGxvd2VkRXZlbnRzLnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUubWF0Y2hlc0FzU3RhdGVFdmVudChfV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LkV2ZW50RGlyZWN0aW9uLlJlY2VpdmUsIGV2ZW50VHlwZSwgc3RhdGVLZXkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhblJlY2VpdmVUb0RldmljZUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblJlY2VpdmVUb0RldmljZUV2ZW50KGV2ZW50VHlwZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWxsb3dlZEV2ZW50cy5zb21lKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLm1hdGNoZXNBc1RvRGV2aWNlRXZlbnQoX1dpZGdldEV2ZW50Q2FwYWJpbGl0eS5FdmVudERpcmVjdGlvbi5SZWNlaXZlLCBldmVudFR5cGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhblJlY2VpdmVSb29tQWNjb3VudERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUmVjZWl2ZVJvb21BY2NvdW50RGF0YShldmVudFR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmFsbG93ZWRFdmVudHMuc29tZShmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5tYXRjaGVzQXNSb29tQWNjb3VudERhdGEoX1dpZGdldEV2ZW50Q2FwYWJpbGl0eS5FdmVudERpcmVjdGlvbi5SZWNlaXZlLCBldmVudFR5cGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMudHJhbnNwb3J0LnN0b3AoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmVnaW5DYXBhYmlsaXRpZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmVnaW5DYXBhYmlsaXRpZXMoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICAgIC8vIHdpZGdldCBoYXMgbG9hZGVkIC0gdGVsbCBhbGwgdGhlIGxpc3RlbmVycyB0aGF0XG4gICAgICB0aGlzLmVtaXQoXCJwcmVwYXJpbmdcIik7XG4gICAgICB2YXIgcmVxdWVzdGVkQ2FwcztcbiAgICAgIHRoaXMudHJhbnNwb3J0LnNlbmQoX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlUb1dpZGdldEFjdGlvbi5DYXBhYmlsaXRpZXMsIHt9KS50aGVuKGZ1bmN0aW9uIChjYXBzKSB7XG4gICAgICAgIHJlcXVlc3RlZENhcHMgPSBjYXBzLmNhcGFiaWxpdGllcztcbiAgICAgICAgcmV0dXJuIF90aGlzMi5kcml2ZXIudmFsaWRhdGVDYXBhYmlsaXRpZXMobmV3IFNldChjYXBzLmNhcGFiaWxpdGllcykpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoYWxsb3dlZENhcHMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJXaWRnZXQgXCIuY29uY2F0KF90aGlzMi53aWRnZXQuaWQsIFwiIGlzIGFsbG93ZWQgY2FwYWJpbGl0aWVzOlwiKSwgQXJyYXkuZnJvbShhbGxvd2VkQ2FwcykpO1xuICAgICAgICBfdGhpczIuYWxsb3dlZENhcGFiaWxpdGllcyA9IGFsbG93ZWRDYXBzO1xuICAgICAgICBfdGhpczIuYWxsb3dlZEV2ZW50cyA9IF9XaWRnZXRFdmVudENhcGFiaWxpdHkuV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LmZpbmRFdmVudENhcGFiaWxpdGllcyhhbGxvd2VkQ2Fwcyk7XG4gICAgICAgIF90aGlzMi5ub3RpZnlDYXBhYmlsaXRpZXMocmVxdWVzdGVkQ2Fwcyk7XG4gICAgICAgIF90aGlzMi5lbWl0KFwicmVhZHlcIik7XG4gICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzMi5lbWl0KFwiZXJyb3I6cHJlcGFyaW5nXCIsIGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm5vdGlmeUNhcGFiaWxpdGllc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBub3RpZnlDYXBhYmlsaXRpZXMocmVxdWVzdGVkKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcbiAgICAgIHRoaXMudHJhbnNwb3J0LnNlbmQoX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlUb1dpZGdldEFjdGlvbi5Ob3RpZnlDYXBhYmlsaXRpZXMsIHtcbiAgICAgICAgcmVxdWVzdGVkOiByZXF1ZXN0ZWQsXG4gICAgICAgIGFwcHJvdmVkOiBBcnJheS5mcm9tKHRoaXMuYWxsb3dlZENhcGFiaWxpdGllcylcbiAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwibm9uLWZhdGFsIGVycm9yIG5vdGlmeWluZyB3aWRnZXQgb2YgYXBwcm92ZWQgY2FwYWJpbGl0aWVzOlwiLCBlKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuZW1pdChcImNhcGFiaWxpdGllc05vdGlmaWVkXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uSWZyYW1lTG9hZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbklmcmFtZUxvYWQoZXYpIHtcbiAgICAgIGlmICh0aGlzLndpZGdldC53YWl0Rm9ySWZyYW1lTG9hZCkge1xuICAgICAgICAvLyBJZiB0aGUgd2lkZ2V0IGlzIHNldCB0byB3YWl0Rm9ySWZyYW1lTG9hZCB0aGUgY2FwYWJpbGl0aWVzIGltbWVkaWF0bHkgZ2V0IHNldHVwIGFmdGVyIGxvYWQuXG4gICAgICAgIC8vIFRoZSBjbGllbnQgZG9lcyBub3Qgd2FpdCBmb3IgdGhlIENvbnRlbnRMb2FkZWQgYWN0aW9uLlxuICAgICAgICB0aGlzLmJlZ2luQ2FwYWJpbGl0aWVzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZWFjaGluZyB0aGlzIG1lYW5zLCB0aGF0IHRoZSBJZnJhbWUgZ290IHJlbG9hZGVkL2xvYWRlZCBhbmRcbiAgICAgICAgLy8gdGhlIGNsaWVudEFwaSBpcyBhd2FpdGluZyB0aGUgRklSU1QgQ29udGVudExvYWRlZCBhY3Rpb24uXG4gICAgICAgIGNvbnNvbGUubG9nKFwid2FpdEZvcklmcmFtZUxvYWQgaXMgZmFsc2U6IHdhaXRpbmcgZm9yIHdpZGdldCB0byBzZW5kIGNvbnRlbnRMb2FkZWRcIik7XG4gICAgICAgIHRoaXMuY29udGVudExvYWRlZFdhaXRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJXaWRnZXQgc3BlY2lmaWVkIHdhaXRGb3JJZnJhbWVMb2FkPWZhbHNlIGJ1dCB0aW1lZCBvdXQgd2FpdGluZyBmb3IgY29udGVudExvYWRlZCBldmVudCFcIik7XG4gICAgICAgIH0sIDEwMDAwKTtcbiAgICAgICAgdGhpcy5jb250ZW50TG9hZGVkQWN0aW9uU2VudCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVDb250ZW50TG9hZGVkQWN0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUNvbnRlbnRMb2FkZWRBY3Rpb24oYWN0aW9uKSB7XG4gICAgICBpZiAodGhpcy5jb250ZW50TG9hZGVkV2FpdFRpbWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY29udGVudExvYWRlZFdhaXRUaW1lcik7XG4gICAgICAgIHRoaXMuY29udGVudExvYWRlZFdhaXRUaW1lciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbnRlbnRMb2FkZWRBY3Rpb25TZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkltcHJvcGVyIHNlcXVlbmNlOiBDb250ZW50TG9hZGVkIEFjdGlvbiBjYW4gb25seSBiZSBzZW50IG9uY2UgYWZ0ZXIgdGhlIHdpZGdldCBsb2FkZWQgXCIgKyBcImFuZCBzaG91bGQgb25seSBiZSB1c2VkIGlmIHdhaXRGb3JJZnJhbWVMb2FkIGlzIGZhbHNlIChkZWZhdWx0PXRydWUpXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMud2lkZ2V0LndhaXRGb3JJZnJhbWVMb2FkKSB7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LnJlcGx5KGFjdGlvbiwge1xuICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIkltcHJvcGVyIHNlcXVlbmNlOiBub3QgZXhwZWN0aW5nIENvbnRlbnRMb2FkZWQgZXZlbnQgaWYgXCIgKyBcIndhaXRGb3JJZnJhbWVMb2FkIGlzIHRydWUgKGRlZmF1bHQ9dHJ1ZSlcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRyYW5zcG9ydC5yZXBseShhY3Rpb24sIHt9KTtcbiAgICAgICAgdGhpcy5iZWdpbkNhcGFiaWxpdGllcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb250ZW50TG9hZGVkQWN0aW9uU2VudCA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlcGx5VmVyc2lvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVwbHlWZXJzaW9ucyhyZXF1ZXN0KSB7XG4gICAgICB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgIHN1cHBvcnRlZF92ZXJzaW9uczogX0FwaVZlcnNpb24uQ3VycmVudEFwaVZlcnNpb25zXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlQ2FwYWJpbGl0aWVzUmVuZWdvdGlhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2FwYWJpbGl0aWVzUmVuZWdvdGlhdGUocmVxdWVzdCkge1xuICAgICAgdmFyIF9yZXF1ZXN0JGRhdGEsXG4gICAgICAgIF90aGlzNCA9IHRoaXM7XG4gICAgICAvLyBhY2tub3dsZWRnZSBmaXJzdFxuICAgICAgdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge30pO1xuICAgICAgdmFyIHJlcXVlc3RlZCA9ICgoX3JlcXVlc3QkZGF0YSA9IHJlcXVlc3QuZGF0YSkgPT09IG51bGwgfHwgX3JlcXVlc3QkZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3JlcXVlc3QkZGF0YS5jYXBhYmlsaXRpZXMpIHx8IFtdO1xuICAgICAgdmFyIG5ld2x5UmVxdWVzdGVkID0gbmV3IFNldChyZXF1ZXN0ZWQuZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIHJldHVybiAhX3RoaXM0Lmhhc0NhcGFiaWxpdHkocik7XG4gICAgICB9KSk7XG4gICAgICBpZiAobmV3bHlSZXF1ZXN0ZWQuc2l6ZSA9PT0gMCkge1xuICAgICAgICAvLyBOb3RoaW5nIHRvIGRvIC0gbm90aWZ5IGNhcGFiaWxpdGllc1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnlDYXBhYmlsaXRpZXMoW10pO1xuICAgICAgfVxuICAgICAgdGhpcy5kcml2ZXIudmFsaWRhdGVDYXBhYmlsaXRpZXMobmV3bHlSZXF1ZXN0ZWQpLnRoZW4oZnVuY3Rpb24gKGFsbG93ZWQpIHtcbiAgICAgICAgYWxsb3dlZC5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5hbGxvd2VkQ2FwYWJpbGl0aWVzLmFkZChjKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBhbGxvd2VkRXZlbnRzID0gX1dpZGdldEV2ZW50Q2FwYWJpbGl0eS5XaWRnZXRFdmVudENhcGFiaWxpdHkuZmluZEV2ZW50Q2FwYWJpbGl0aWVzKGFsbG93ZWQpO1xuICAgICAgICBhbGxvd2VkRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0LmFsbG93ZWRFdmVudHMucHVzaChjKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfdGhpczQubm90aWZ5Q2FwYWJpbGl0aWVzKEFycmF5LmZyb20obmV3bHlSZXF1ZXN0ZWQpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVOYXZpZ2F0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVOYXZpZ2F0ZShyZXF1ZXN0KSB7XG4gICAgICB2YXIgX3JlcXVlc3QkZGF0YTIsXG4gICAgICAgIF9yZXF1ZXN0JGRhdGEzLFxuICAgICAgICBfdGhpczUgPSB0aGlzO1xuICAgICAgaWYgKCF0aGlzLmhhc0NhcGFiaWxpdHkoX0NhcGFiaWxpdGllcy5NYXRyaXhDYXBhYmlsaXRpZXMuTVNDMjkzMU5hdmlnYXRlKSkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIk1pc3NpbmcgY2FwYWJpbGl0eVwiXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICghKChfcmVxdWVzdCRkYXRhMiA9IHJlcXVlc3QuZGF0YSkgIT09IG51bGwgJiYgX3JlcXVlc3QkZGF0YTIgIT09IHZvaWQgMCAmJiBfcmVxdWVzdCRkYXRhMi51cmkpIHx8ICEoKF9yZXF1ZXN0JGRhdGEzID0gcmVxdWVzdC5kYXRhKSAhPT0gbnVsbCAmJiBfcmVxdWVzdCRkYXRhMyAhPT0gdm9pZCAwICYmIF9yZXF1ZXN0JGRhdGEzLnVyaS50b1N0cmluZygpLnN0YXJ0c1dpdGgoXCJodHRwczovL21hdHJpeC50by8jXCIpKSkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIkludmFsaWQgbWF0cml4LnRvIFVSSVwiXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHZhciBvbkVyciA9IGZ1bmN0aW9uIG9uRXJyKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltDbGllbnRXaWRnZXRBcGldIEZhaWxlZCB0byBoYW5kbGUgbmF2aWdhdGlvbjogXCIsIGUpO1xuICAgICAgICBfdGhpczUuaGFuZGxlRHJpdmVyRXJyb3IoZSwgcmVxdWVzdCwgXCJFcnJvciBoYW5kbGluZyBuYXZpZ2F0aW9uXCIpO1xuICAgICAgfTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZHJpdmVyLm5hdmlnYXRlKHJlcXVlc3QuZGF0YS51cmkudG9TdHJpbmcoKSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBvbkVycihlKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNS50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge30pO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIG9uRXJyKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVPSURDXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU9JREMocmVxdWVzdCkge1xuICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG4gICAgICB2YXIgcGhhc2UgPSAxOyAvLyAxID0gaW5pdGlhbCByZXF1ZXN0LCAyID0gYWZ0ZXIgdXNlciBtYW51YWwgY29uZmlybWF0aW9uXG5cbiAgICAgIHZhciByZXBseVN0YXRlID0gZnVuY3Rpb24gcmVwbHlTdGF0ZShzdGF0ZSwgY3JlZGVudGlhbCkge1xuICAgICAgICBjcmVkZW50aWFsID0gY3JlZGVudGlhbCB8fCB7fTtcbiAgICAgICAgaWYgKHBoYXNlID4gMSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczYudHJhbnNwb3J0LnNlbmQoX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlUb1dpZGdldEFjdGlvbi5PcGVuSURDcmVkZW50aWFscywgX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBvcmlnaW5hbF9yZXF1ZXN0X2lkOiByZXF1ZXN0LnJlcXVlc3RJZFxuICAgICAgICAgIH0sIGNyZWRlbnRpYWwpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM2LnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZVxuICAgICAgICAgIH0sIGNyZWRlbnRpYWwpKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHZhciByZXBseUVycm9yID0gZnVuY3Rpb24gcmVwbHlFcnJvcihtc2cpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltDbGllbnRXaWRnZXRBcGldIEZhaWxlZCB0byBoYW5kbGUgT0lEQzogXCIsIG1zZyk7XG4gICAgICAgIGlmIChwaGFzZSA+IDEpIHtcbiAgICAgICAgICAvLyBXZSBkb24ndCBoYXZlIGEgd2F5IHRvIGluZGljYXRlIHRoYXQgYSByYW5kb20gZXJyb3IgaGFwcGVuZWQgaW4gdGhpcyBmbG93LCBzb1xuICAgICAgICAgIC8vIGp1c3QgYmxvY2sgdGhlIGF0dGVtcHQuXG4gICAgICAgICAgcmV0dXJuIHJlcGx5U3RhdGUoX0dldE9wZW5JREFjdGlvbi5PcGVuSURSZXF1ZXN0U3RhdGUuQmxvY2tlZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNi50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogbXNnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgX1NpbXBsZU9ic2VydmFibGUuU2ltcGxlT2JzZXJ2YWJsZShmdW5jdGlvbiAodXBkYXRlKSB7XG4gICAgICAgIGlmICh1cGRhdGUuc3RhdGUgPT09IF9HZXRPcGVuSURBY3Rpb24uT3BlbklEUmVxdWVzdFN0YXRlLlBlbmRpbmdVc2VyQ29uZmlybWF0aW9uICYmIHBoYXNlID4gMSkge1xuICAgICAgICAgIG9ic2VydmVyLmNsb3NlKCk7XG4gICAgICAgICAgcmV0dXJuIHJlcGx5RXJyb3IoXCJjbGllbnQgcHJvdmlkZWQgb3V0LW9mLXBoYXNlIHJlc3BvbnNlIHRvIE9JREMgZmxvd1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXBkYXRlLnN0YXRlID09PSBfR2V0T3BlbklEQWN0aW9uLk9wZW5JRFJlcXVlc3RTdGF0ZS5QZW5kaW5nVXNlckNvbmZpcm1hdGlvbikge1xuICAgICAgICAgIHJlcGx5U3RhdGUodXBkYXRlLnN0YXRlKTtcbiAgICAgICAgICBwaGFzZSsrO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXBkYXRlLnN0YXRlID09PSBfR2V0T3BlbklEQWN0aW9uLk9wZW5JRFJlcXVlc3RTdGF0ZS5BbGxvd2VkICYmICF1cGRhdGUudG9rZW4pIHtcbiAgICAgICAgICByZXR1cm4gcmVwbHlFcnJvcihcImNsaWVudCBwcm92aWRlZCBpbnZhbGlkIE9JREMgdG9rZW4gZm9yIGFuIGFsbG93ZWQgcmVxdWVzdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXBkYXRlLnN0YXRlID09PSBfR2V0T3BlbklEQWN0aW9uLk9wZW5JRFJlcXVlc3RTdGF0ZS5CbG9ja2VkKSB7XG4gICAgICAgICAgdXBkYXRlLnRva2VuID0gdW5kZWZpbmVkOyAvLyBqdXN0IGluIGNhc2UgdGhlIGNsaWVudCBkaWQgc29tZXRoaW5nIHdlaXJkXG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlci5jbG9zZSgpO1xuICAgICAgICByZXR1cm4gcmVwbHlTdGF0ZSh1cGRhdGUuc3RhdGUsIHVwZGF0ZS50b2tlbik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZHJpdmVyLmFza09wZW5JRChvYnNlcnZlcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVJlYWRSb29tQWNjb3VudERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlUmVhZFJvb21BY2NvdW50RGF0YShyZXF1ZXN0KSB7XG4gICAgICB2YXIgX3RoaXM3ID0gdGhpcztcbiAgICAgIHZhciBldmVudHMgPSBQcm9taXNlLnJlc29sdmUoW10pO1xuICAgICAgZXZlbnRzID0gdGhpcy5kcml2ZXIucmVhZFJvb21BY2NvdW50RGF0YShyZXF1ZXN0LmRhdGEudHlwZSk7XG4gICAgICBpZiAoIXRoaXMuY2FuUmVjZWl2ZVJvb21BY2NvdW50RGF0YShyZXF1ZXN0LmRhdGEudHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgbWVzc2FnZTogXCJDYW5ub3QgcmVhZCByb29tIGFjY291bnQgZGF0YSBvZiB0aGlzIHR5cGVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXZlbnRzLnRoZW4oZnVuY3Rpb24gKGV2cykge1xuICAgICAgICBfdGhpczcudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICBldmVudHM6IGV2c1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVSZWFkRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVJlYWRFdmVudHMocmVxdWVzdCkge1xuICAgICAgdmFyIF90aGlzOCA9IHRoaXM7XG4gICAgICBpZiAoIXJlcXVlc3QuZGF0YS50eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCByZXF1ZXN0IC0gbWlzc2luZyBldmVudCB0eXBlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHJlcXVlc3QuZGF0YS5saW1pdCAhPT0gdW5kZWZpbmVkICYmICghcmVxdWVzdC5kYXRhLmxpbWl0IHx8IHJlcXVlc3QuZGF0YS5saW1pdCA8IDApKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCByZXF1ZXN0IC0gbGltaXQgb3V0IG9mIHJhbmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdmFyIGFza1Jvb21JZHMgPSBudWxsOyAvLyBudWxsIGRlbm90ZXMgY3VycmVudCByb29tIG9ubHlcbiAgICAgIGlmIChyZXF1ZXN0LmRhdGEucm9vbV9pZHMpIHtcbiAgICAgICAgYXNrUm9vbUlkcyA9IHJlcXVlc3QuZGF0YS5yb29tX2lkcztcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFza1Jvb21JZHMpKSB7XG4gICAgICAgICAgYXNrUm9vbUlkcyA9IFthc2tSb29tSWRzXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGFza1Jvb21JZHMpLFxuICAgICAgICAgIF9zdGVwMjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xuICAgICAgICAgICAgdmFyIHJvb21JZCA9IF9zdGVwMi52YWx1ZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5jYW5Vc2VSb29tVGltZWxpbmUocm9vbUlkKSkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlVuYWJsZSB0byBhY2Nlc3Mgcm9vbSB0aW1lbGluZTogXCIuY29uY2F0KHJvb21JZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yMi5lKGVycik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgX2l0ZXJhdG9yMi5mKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBsaW1pdCA9IHJlcXVlc3QuZGF0YS5saW1pdCB8fCAwO1xuICAgICAgdmFyIHNpbmNlID0gcmVxdWVzdC5kYXRhLnNpbmNlO1xuICAgICAgdmFyIGV2ZW50cyA9IFByb21pc2UucmVzb2x2ZShbXSk7XG4gICAgICBpZiAocmVxdWVzdC5kYXRhLnN0YXRlX2tleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBzdGF0ZUtleSA9IHJlcXVlc3QuZGF0YS5zdGF0ZV9rZXkgPT09IHRydWUgPyB1bmRlZmluZWQgOiByZXF1ZXN0LmRhdGEuc3RhdGVfa2V5LnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICghdGhpcy5jYW5SZWNlaXZlU3RhdGVFdmVudChyZXF1ZXN0LmRhdGEudHlwZSwgc3RhdGVLZXkgIT09IG51bGwgJiYgc3RhdGVLZXkgIT09IHZvaWQgMCA/IHN0YXRlS2V5IDogbnVsbCkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJDYW5ub3QgcmVhZCBzdGF0ZSBldmVudHMgb2YgdGhpcyB0eXBlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBldmVudHMgPSB0aGlzLmRyaXZlci5yZWFkU3RhdGVFdmVudHMocmVxdWVzdC5kYXRhLnR5cGUsIHN0YXRlS2V5LCBsaW1pdCwgYXNrUm9vbUlkcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXRoaXMuY2FuUmVjZWl2ZVJvb21FdmVudChyZXF1ZXN0LmRhdGEudHlwZSwgcmVxdWVzdC5kYXRhLm1zZ3R5cGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2Fubm90IHJlYWQgcm9vbSBldmVudHMgb2YgdGhpcyB0eXBlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBldmVudHMgPSB0aGlzLmRyaXZlci5yZWFkUm9vbUV2ZW50cyhyZXF1ZXN0LmRhdGEudHlwZSwgcmVxdWVzdC5kYXRhLm1zZ3R5cGUsIGxpbWl0LCBhc2tSb29tSWRzLCBzaW5jZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXZlbnRzLnRoZW4oZnVuY3Rpb24gKGV2cykge1xuICAgICAgICByZXR1cm4gX3RoaXM4LnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgZXZlbnRzOiBldnNcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlU2VuZEV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVNlbmRFdmVudChyZXF1ZXN0KSB7XG4gICAgICB2YXIgX3RoaXM5ID0gdGhpcztcbiAgICAgIGlmICghcmVxdWVzdC5kYXRhLnR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgbWVzc2FnZTogXCJJbnZhbGlkIHJlcXVlc3QgLSBtaXNzaW5nIGV2ZW50IHR5cGVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoISFyZXF1ZXN0LmRhdGEucm9vbV9pZCAmJiAhdGhpcy5jYW5Vc2VSb29tVGltZWxpbmUocmVxdWVzdC5kYXRhLnJvb21faWQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVW5hYmxlIHRvIGFjY2VzcyByb29tIHRpbWVsaW5lOiBcIi5jb25jYXQocmVxdWVzdC5kYXRhLnJvb21faWQpXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHZhciBpc0RlbGF5ZWRFdmVudCA9IHJlcXVlc3QuZGF0YS5kZWxheSAhPT0gdW5kZWZpbmVkIHx8IHJlcXVlc3QuZGF0YS5wYXJlbnRfZGVsYXlfaWQgIT09IHVuZGVmaW5lZDtcbiAgICAgIGlmIChpc0RlbGF5ZWRFdmVudCAmJiAhdGhpcy5oYXNDYXBhYmlsaXR5KF9DYXBhYmlsaXRpZXMuTWF0cml4Q2FwYWJpbGl0aWVzLk1TQzQxNTdTZW5kRGVsYXllZEV2ZW50KSkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIk1pc3NpbmcgY2FwYWJpbGl0eVwiXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHZhciBzZW5kRXZlbnRQcm9taXNlO1xuICAgICAgaWYgKHJlcXVlc3QuZGF0YS5zdGF0ZV9rZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuU2VuZFN0YXRlRXZlbnQocmVxdWVzdC5kYXRhLnR5cGUsIHJlcXVlc3QuZGF0YS5zdGF0ZV9rZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2Fubm90IHNlbmQgc3RhdGUgZXZlbnRzIG9mIHRoaXMgdHlwZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0RlbGF5ZWRFdmVudCkge1xuICAgICAgICAgIHNlbmRFdmVudFByb21pc2UgPSB0aGlzLmRyaXZlci5zZW5kRXZlbnQocmVxdWVzdC5kYXRhLnR5cGUsIHJlcXVlc3QuZGF0YS5jb250ZW50IHx8IHt9LCByZXF1ZXN0LmRhdGEuc3RhdGVfa2V5LCByZXF1ZXN0LmRhdGEucm9vbV9pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIF9yZXF1ZXN0JGRhdGEkZGVsYXksIF9yZXF1ZXN0JGRhdGEkcGFyZW50XztcbiAgICAgICAgICBzZW5kRXZlbnRQcm9taXNlID0gdGhpcy5kcml2ZXIuc2VuZERlbGF5ZWRFdmVudCgoX3JlcXVlc3QkZGF0YSRkZWxheSA9IHJlcXVlc3QuZGF0YS5kZWxheSkgIT09IG51bGwgJiYgX3JlcXVlc3QkZGF0YSRkZWxheSAhPT0gdm9pZCAwID8gX3JlcXVlc3QkZGF0YSRkZWxheSA6IG51bGwsIChfcmVxdWVzdCRkYXRhJHBhcmVudF8gPSByZXF1ZXN0LmRhdGEucGFyZW50X2RlbGF5X2lkKSAhPT0gbnVsbCAmJiBfcmVxdWVzdCRkYXRhJHBhcmVudF8gIT09IHZvaWQgMCA/IF9yZXF1ZXN0JGRhdGEkcGFyZW50XyA6IG51bGwsIHJlcXVlc3QuZGF0YS50eXBlLCByZXF1ZXN0LmRhdGEuY29udGVudCB8fCB7fSwgcmVxdWVzdC5kYXRhLnN0YXRlX2tleSwgcmVxdWVzdC5kYXRhLnJvb21faWQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY29udGVudCA9IHJlcXVlc3QuZGF0YS5jb250ZW50IHx8IHt9O1xuICAgICAgICB2YXIgbXNndHlwZSA9IGNvbnRlbnRbJ21zZ3R5cGUnXTtcbiAgICAgICAgaWYgKCF0aGlzLmNhblNlbmRSb29tRXZlbnQocmVxdWVzdC5kYXRhLnR5cGUsIG1zZ3R5cGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2Fubm90IHNlbmQgcm9vbSBldmVudHMgb2YgdGhpcyB0eXBlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRGVsYXllZEV2ZW50KSB7XG4gICAgICAgICAgc2VuZEV2ZW50UHJvbWlzZSA9IHRoaXMuZHJpdmVyLnNlbmRFdmVudChyZXF1ZXN0LmRhdGEudHlwZSwgY29udGVudCwgbnVsbCxcbiAgICAgICAgICAvLyBub3Qgc2VuZGluZyBhIHN0YXRlIGV2ZW50XG4gICAgICAgICAgcmVxdWVzdC5kYXRhLnJvb21faWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBfcmVxdWVzdCRkYXRhJGRlbGF5MiwgX3JlcXVlc3QkZGF0YSRwYXJlbnRfMjtcbiAgICAgICAgICBzZW5kRXZlbnRQcm9taXNlID0gdGhpcy5kcml2ZXIuc2VuZERlbGF5ZWRFdmVudCgoX3JlcXVlc3QkZGF0YSRkZWxheTIgPSByZXF1ZXN0LmRhdGEuZGVsYXkpICE9PSBudWxsICYmIF9yZXF1ZXN0JGRhdGEkZGVsYXkyICE9PSB2b2lkIDAgPyBfcmVxdWVzdCRkYXRhJGRlbGF5MiA6IG51bGwsIChfcmVxdWVzdCRkYXRhJHBhcmVudF8yID0gcmVxdWVzdC5kYXRhLnBhcmVudF9kZWxheV9pZCkgIT09IG51bGwgJiYgX3JlcXVlc3QkZGF0YSRwYXJlbnRfMiAhPT0gdm9pZCAwID8gX3JlcXVlc3QkZGF0YSRwYXJlbnRfMiA6IG51bGwsIHJlcXVlc3QuZGF0YS50eXBlLCBjb250ZW50LCBudWxsLFxuICAgICAgICAgIC8vIG5vdCBzZW5kaW5nIGEgc3RhdGUgZXZlbnRcbiAgICAgICAgICByZXF1ZXN0LmRhdGEucm9vbV9pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNlbmRFdmVudFByb21pc2UudGhlbihmdW5jdGlvbiAoc2VudEV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpczkudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgIHJvb21faWQ6IHNlbnRFdmVudC5yb29tSWRcbiAgICAgICAgfSwgXCJldmVudElkXCIgaW4gc2VudEV2ZW50ID8ge1xuICAgICAgICAgIGV2ZW50X2lkOiBzZW50RXZlbnQuZXZlbnRJZFxuICAgICAgICB9IDoge1xuICAgICAgICAgIGRlbGF5X2lkOiBzZW50RXZlbnQuZGVsYXlJZFxuICAgICAgICB9KSk7XG4gICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvciBzZW5kaW5nIGV2ZW50OiBcIiwgZSk7XG4gICAgICAgIF90aGlzOS5oYW5kbGVEcml2ZXJFcnJvcihlLCByZXF1ZXN0LCBcIkVycm9yIHNlbmRpbmcgZXZlbnRcIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlVXBkYXRlRGVsYXllZEV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZURlbGF5ZWRFdmVudChyZXF1ZXN0KSB7XG4gICAgICB2YXIgX3RoaXMxMCA9IHRoaXM7XG4gICAgICBpZiAoIXJlcXVlc3QuZGF0YS5kZWxheV9pZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIkludmFsaWQgcmVxdWVzdCAtIG1pc3NpbmcgZGVsYXlfaWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuaGFzQ2FwYWJpbGl0eShfQ2FwYWJpbGl0aWVzLk1hdHJpeENhcGFiaWxpdGllcy5NU0M0MTU3VXBkYXRlRGVsYXllZEV2ZW50KSkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIk1pc3NpbmcgY2FwYWJpbGl0eVwiXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAocmVxdWVzdC5kYXRhLmFjdGlvbikge1xuICAgICAgICBjYXNlIF9VcGRhdGVEZWxheWVkRXZlbnRBY3Rpb24uVXBkYXRlRGVsYXllZEV2ZW50QWN0aW9uLkNhbmNlbDpcbiAgICAgICAgY2FzZSBfVXBkYXRlRGVsYXllZEV2ZW50QWN0aW9uLlVwZGF0ZURlbGF5ZWRFdmVudEFjdGlvbi5SZXN0YXJ0OlxuICAgICAgICBjYXNlIF9VcGRhdGVEZWxheWVkRXZlbnRBY3Rpb24uVXBkYXRlRGVsYXllZEV2ZW50QWN0aW9uLlNlbmQ6XG4gICAgICAgICAgdGhpcy5kcml2ZXIudXBkYXRlRGVsYXllZEV2ZW50KHJlcXVlc3QuZGF0YS5kZWxheV9pZCwgcmVxdWVzdC5kYXRhLmFjdGlvbikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMxMC50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge30pO1xuICAgICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvciB1cGRhdGluZyBkZWxheWVkIGV2ZW50OiBcIiwgZSk7XG4gICAgICAgICAgICBfdGhpczEwLmhhbmRsZURyaXZlckVycm9yKGUsIHJlcXVlc3QsIFwiRXJyb3IgdXBkYXRpbmcgZGVsYXllZCBldmVudFwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJJbnZhbGlkIHJlcXVlc3QgLSB1bnN1cHBvcnRlZCBhY3Rpb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVTZW5kVG9EZXZpY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9oYW5kbGVTZW5kVG9EZXZpY2UgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUoKS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZSgpLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBpZiAocmVxdWVzdC5kYXRhLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMztcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJbnZhbGlkIHJlcXVlc3QgLSBtaXNzaW5nIGV2ZW50IHR5cGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzMTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIGlmIChyZXF1ZXN0LmRhdGEubWVzc2FnZXMpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDg7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCByZXF1ZXN0IC0gbWlzc2luZyBldmVudCBjb250ZW50c1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDMxO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgIGlmICghKHR5cGVvZiByZXF1ZXN0LmRhdGEuZW5jcnlwdGVkICE9PSBcImJvb2xlYW5cIikpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDEzO1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkludmFsaWQgcmVxdWVzdCAtIG1pc3NpbmcgZW5jcnlwdGlvbiBmbGFnXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDMxO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgIGlmICh0aGlzLmNhblNlbmRUb0RldmljZUV2ZW50KHJlcXVlc3QuZGF0YS50eXBlKSkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTg7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2Fubm90IHNlbmQgdG8tZGV2aWNlIGV2ZW50cyBvZiB0aGlzIHR5cGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMzE7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDIwO1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjM7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmRyaXZlci5zZW5kVG9EZXZpY2UocmVxdWVzdC5kYXRhLnR5cGUsIHJlcXVlc3QuZGF0YS5lbmNyeXB0ZWQsIHJlcXVlc3QuZGF0YS5tZXNzYWdlcyk7XG4gICAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjU7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7fSk7XG4gICAgICAgICAgICBjYXNlIDI1OlxuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMzE7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDI3O1xuICAgICAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0W1wiY2F0Y2hcIl0oMjApO1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiZXJyb3Igc2VuZGluZyB0by1kZXZpY2UgZXZlbnRcIiwgX2NvbnRleHQudDApO1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZURyaXZlckVycm9yKF9jb250ZXh0LnQwLCByZXF1ZXN0LCBcIkVycm9yIHNlbmRpbmcgZXZlbnRcIik7XG4gICAgICAgICAgICBjYXNlIDMxOlxuICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgdGhpcywgW1syMCwgMjddXSk7XG4gICAgICB9KSk7XG4gICAgICBmdW5jdGlvbiBoYW5kbGVTZW5kVG9EZXZpY2UoX3gpIHtcbiAgICAgICAgcmV0dXJuIF9oYW5kbGVTZW5kVG9EZXZpY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYW5kbGVTZW5kVG9EZXZpY2U7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6IFwicG9sbFR1cm5TZXJ2ZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcG9sbFR1cm5TZXJ2ZXJzID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lKCkubWFyayhmdW5jdGlvbiBfY2FsbGVlMih0dXJuU2VydmVycywgaW5pdGlhbFNlcnZlcikge1xuICAgICAgICB2YXIgX2l0ZXJhdG9yQWJydXB0Q29tcGxldGlvbiwgX2RpZEl0ZXJhdG9yRXJyb3IsIF9pdGVyYXRvckVycm9yLCBfaXRlcmF0b3IsIF9zdGVwLCBzZXJ2ZXI7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lKCkud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBfY29udGV4dDIucHJldiA9IDA7XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMztcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnNlbmQoX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlUb1dpZGdldEFjdGlvbi5VcGRhdGVUdXJuU2VydmVycywgaW5pdGlhbFNlcnZlciAvLyBpdCdzIGNvbXBhdGlibGUsIGJ1dCBtaXNzaW5nIHRoZSBpbmRleCBzaWduYXR1cmVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgLy8gUGljayB0aGUgZ2VuZXJhdG9yIHVwIHdoZXJlIHdlIGxlZnQgb2ZmXG4gICAgICAgICAgICAgIF9pdGVyYXRvckFicnVwdENvbXBsZXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgX2NvbnRleHQyLnByZXYgPSA1O1xuICAgICAgICAgICAgICBfaXRlcmF0b3IgPSBfYXN5bmNJdGVyYXRvcih0dXJuU2VydmVycyk7XG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gOTtcbiAgICAgICAgICAgICAgcmV0dXJuIF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgIGlmICghKF9pdGVyYXRvckFicnVwdENvbXBsZXRpb24gPSAhKF9zdGVwID0gX2NvbnRleHQyLnNlbnQpLmRvbmUpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAxNjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZXJ2ZXIgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAxMztcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnNlbmQoX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlUb1dpZGdldEFjdGlvbi5VcGRhdGVUdXJuU2VydmVycywgc2VydmVyIC8vIGl0J3MgY29tcGF0aWJsZSwgYnV0IG1pc3NpbmcgdGhlIGluZGV4IHNpZ25hdHVyZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgX2l0ZXJhdG9yQWJydXB0Q29tcGxldGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAyMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgICBfY29udGV4dDIucHJldiA9IDE4O1xuICAgICAgICAgICAgICBfY29udGV4dDIudDAgPSBfY29udGV4dDJbXCJjYXRjaFwiXSg1KTtcbiAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IF9jb250ZXh0Mi50MDtcbiAgICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5wcmV2ID0gMjI7XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5wcmV2ID0gMjM7XG4gICAgICAgICAgICAgIGlmICghKF9pdGVyYXRvckFicnVwdENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yW1wicmV0dXJuXCJdICE9IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAyNztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDI3O1xuICAgICAgICAgICAgICByZXR1cm4gX2l0ZXJhdG9yW1wicmV0dXJuXCJdKCk7XG4gICAgICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgICAgICBfY29udGV4dDIucHJldiA9IDI3O1xuICAgICAgICAgICAgICBpZiAoIV9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAzMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICAgIGNhc2UgMzA6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuZmluaXNoKDI3KTtcbiAgICAgICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuZmluaXNoKDIyKTtcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMzc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgICAgX2NvbnRleHQyLnByZXYgPSAzNDtcbiAgICAgICAgICAgICAgX2NvbnRleHQyLnQxID0gX2NvbnRleHQyW1wiY2F0Y2hcIl0oMCk7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvciBwb2xsaW5nIGZvciBUVVJOIHNlcnZlcnNcIiwgX2NvbnRleHQyLnQxKTtcbiAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTIsIHRoaXMsIFtbMCwgMzRdLCBbNSwgMTgsIDIyLCAzMl0sIFsyMywsIDI3LCAzMV1dKTtcbiAgICAgIH0pKTtcbiAgICAgIGZ1bmN0aW9uIHBvbGxUdXJuU2VydmVycyhfeDIsIF94Mykge1xuICAgICAgICByZXR1cm4gX3BvbGxUdXJuU2VydmVycy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBvbGxUdXJuU2VydmVycztcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVXYXRjaFR1cm5TZXJ2ZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfaGFuZGxlV2F0Y2hUdXJuU2VydmVycyA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZSgpLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTMocmVxdWVzdCkge1xuICAgICAgICB2YXIgdHVyblNlcnZlcnMsIF95aWVsZCR0dXJuU2VydmVycyRuZSwgZG9uZSwgdmFsdWU7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lKCkud3JhcChmdW5jdGlvbiBfY2FsbGVlMyQoX2NvbnRleHQzKSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQzLnByZXYgPSBfY29udGV4dDMubmV4dCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDYXBhYmlsaXR5KF9DYXBhYmlsaXRpZXMuTWF0cml4Q2FwYWJpbGl0aWVzLk1TQzM4NDZUdXJuU2VydmVycykpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAzO1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIk1pc3NpbmcgY2FwYWJpbGl0eVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAzMDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIGlmICghdGhpcy50dXJuU2VydmVycykge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSA4O1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge30pO1xuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDMwO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgIF9jb250ZXh0My5wcmV2ID0gMTA7XG4gICAgICAgICAgICAgIHR1cm5TZXJ2ZXJzID0gdGhpcy5kcml2ZXIuZ2V0VHVyblNlcnZlcnMoKTsgLy8gUGVlayBhdCB0aGUgZmlyc3QgcmVzdWx0LCBzbyB3ZSBjYW4gYXQgbGVhc3QgdmVyaWZ5IHRoYXQgdGhlXG4gICAgICAgICAgICAgIC8vIGNsaWVudCBpc24ndCBiYW5uZWQgZnJvbSBnZXR0aW5nIFRVUk4gc2VydmVycyBlbnRpcmVseVxuICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDE0O1xuICAgICAgICAgICAgICByZXR1cm4gdHVyblNlcnZlcnMubmV4dCgpO1xuICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgX3lpZWxkJHR1cm5TZXJ2ZXJzJG5lID0gX2NvbnRleHQzLnNlbnQ7XG4gICAgICAgICAgICAgIGRvbmUgPSBfeWllbGQkdHVyblNlcnZlcnMkbmUuZG9uZTtcbiAgICAgICAgICAgICAgdmFsdWUgPSBfeWllbGQkdHVyblNlcnZlcnMkbmUudmFsdWU7XG4gICAgICAgICAgICAgIGlmICghZG9uZSkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMTk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2xpZW50IHJlZnVzZXMgdG8gcHJvdmlkZSBhbnkgVFVSTiBzZXJ2ZXJzXCIpO1xuICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyMTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHt9KTtcbiAgICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgICAgIC8vIFN0YXJ0IHRoZSBwb2xsIGxvb3AsIHNlbmRpbmcgdGhlIHdpZGdldCB0aGUgaW5pdGlhbCByZXN1bHRcbiAgICAgICAgICAgICAgdGhpcy5wb2xsVHVyblNlcnZlcnModHVyblNlcnZlcnMsIHZhbHVlKTtcbiAgICAgICAgICAgICAgdGhpcy50dXJuU2VydmVycyA9IHR1cm5TZXJ2ZXJzO1xuICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDMwO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICAgIF9jb250ZXh0My5wcmV2ID0gMjU7XG4gICAgICAgICAgICAgIF9jb250ZXh0My50MCA9IF9jb250ZXh0M1tcImNhdGNoXCJdKDEwKTtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yIGdldHRpbmcgZmlyc3QgVFVSTiBzZXJ2ZXIgcmVzdWx0c1wiLCBfY29udGV4dDMudDApO1xuICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDMwO1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlRVUk4gc2VydmVycyBub3QgYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FzZSAzMDpcbiAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlMywgdGhpcywgW1sxMCwgMjVdXSk7XG4gICAgICB9KSk7XG4gICAgICBmdW5jdGlvbiBoYW5kbGVXYXRjaFR1cm5TZXJ2ZXJzKF94NCkge1xuICAgICAgICByZXR1cm4gX2hhbmRsZVdhdGNoVHVyblNlcnZlcnMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYW5kbGVXYXRjaFR1cm5TZXJ2ZXJzO1xuICAgIH0oKVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVVud2F0Y2hUdXJuU2VydmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2hhbmRsZVVud2F0Y2hUdXJuU2VydmVycyA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZSgpLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZSgpLndyYXAoZnVuY3Rpb24gX2NhbGxlZTQkKF9jb250ZXh0NCkge1xuICAgICAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0NC5wcmV2ID0gX2NvbnRleHQ0Lm5leHQpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2FwYWJpbGl0eShfQ2FwYWJpbGl0aWVzLk1hdHJpeENhcGFiaWxpdGllcy5NU0MzODQ2VHVyblNlcnZlcnMpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSA1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMztcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJNaXNzaW5nIGNhcGFiaWxpdHlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMTU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICBpZiAodGhpcy50dXJuU2VydmVycykge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSA4O1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge30pO1xuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDE1O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMTI7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnR1cm5TZXJ2ZXJzW1wicmV0dXJuXCJdKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICB0aGlzLnR1cm5TZXJ2ZXJzID0gbnVsbDtcbiAgICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSAxNTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHt9KTtcbiAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTQsIHRoaXMpO1xuICAgICAgfSkpO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlVW53YXRjaFR1cm5TZXJ2ZXJzKF94NSkge1xuICAgICAgICByZXR1cm4gX2hhbmRsZVVud2F0Y2hUdXJuU2VydmVycy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhbmRsZVVud2F0Y2hUdXJuU2VydmVycztcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVSZWFkUmVsYXRpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfaGFuZGxlUmVhZFJlbGF0aW9ucyA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZSgpLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTUocmVxdWVzdCkge1xuICAgICAgICB2YXIgX3RoaXMxMSA9IHRoaXM7XG4gICAgICAgIHZhciByZXN1bHQsIGNodW5rO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZSgpLndyYXAoZnVuY3Rpb24gX2NhbGxlZTUkKF9jb250ZXh0NSkge1xuICAgICAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0NS5wcmV2ID0gX2NvbnRleHQ1Lm5leHQpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgaWYgKHJlcXVlc3QuZGF0YS5ldmVudF9pZCkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LmFicnVwdChcInJldHVyblwiLCB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCByZXF1ZXN0IC0gbWlzc2luZyBldmVudCBJRFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIGlmICghKHJlcXVlc3QuZGF0YS5saW1pdCAhPT0gdW5kZWZpbmVkICYmIHJlcXVlc3QuZGF0YS5saW1pdCA8IDApKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSA0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuYWJydXB0KFwicmV0dXJuXCIsIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJbnZhbGlkIHJlcXVlc3QgLSBsaW1pdCBvdXQgb2YgcmFuZ2VcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICBpZiAoIShyZXF1ZXN0LmRhdGEucm9vbV9pZCAhPT0gdW5kZWZpbmVkICYmICF0aGlzLmNhblVzZVJvb21UaW1lbGluZShyZXF1ZXN0LmRhdGEucm9vbV9pZCkpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSA2O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuYWJydXB0KFwicmV0dXJuXCIsIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVbmFibGUgdG8gYWNjZXNzIHJvb20gdGltZWxpbmU6IFwiLmNvbmNhdChyZXF1ZXN0LmRhdGEucm9vbV9pZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgX2NvbnRleHQ1LnByZXYgPSA2O1xuICAgICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDk7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmRyaXZlci5yZWFkRXZlbnRSZWxhdGlvbnMocmVxdWVzdC5kYXRhLmV2ZW50X2lkLCByZXF1ZXN0LmRhdGEucm9vbV9pZCwgcmVxdWVzdC5kYXRhLnJlbF90eXBlLCByZXF1ZXN0LmRhdGEuZXZlbnRfdHlwZSwgcmVxdWVzdC5kYXRhLmZyb20sIHJlcXVlc3QuZGF0YS50bywgcmVxdWVzdC5kYXRhLmxpbWl0LCByZXF1ZXN0LmRhdGEuZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgcmVzdWx0ID0gX2NvbnRleHQ1LnNlbnQ7XG4gICAgICAgICAgICAgIC8vIG9ubHkgcmV0dXJuIGV2ZW50cyB0aGF0IHRoZSB1c2VyIGhhcyB0aGUgcGVybWlzc2lvbiB0byByZWNlaXZlXG4gICAgICAgICAgICAgIGNodW5rID0gcmVzdWx0LmNodW5rLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLnN0YXRlX2tleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMxMS5jYW5SZWNlaXZlU3RhdGVFdmVudChlLnR5cGUsIGUuc3RhdGVfa2V5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMTEuY2FuUmVjZWl2ZVJvb21FdmVudChlLnR5cGUsIGUuY29udGVudFsnbXNndHlwZSddKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LmFicnVwdChcInJldHVyblwiLCB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgY2h1bms6IGNodW5rLFxuICAgICAgICAgICAgICAgIHByZXZfYmF0Y2g6IHJlc3VsdC5wcmV2QmF0Y2gsXG4gICAgICAgICAgICAgICAgbmV4dF9iYXRjaDogcmVzdWx0Lm5leHRCYXRjaFxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICBfY29udGV4dDUucHJldiA9IDE0O1xuICAgICAgICAgICAgICBfY29udGV4dDUudDAgPSBfY29udGV4dDVbXCJjYXRjaFwiXSg2KTtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yIGdldHRpbmcgdGhlIHJlbGF0aW9uc1wiLCBfY29udGV4dDUudDApO1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZURyaXZlckVycm9yKF9jb250ZXh0NS50MCwgcmVxdWVzdCwgXCJVbmV4cGVjdGVkIGVycm9yIHdoaWxlIHJlYWRpbmcgcmVsYXRpb25zXCIpO1xuICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlNSwgdGhpcywgW1s2LCAxNF1dKTtcbiAgICAgIH0pKTtcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlYWRSZWxhdGlvbnMoX3g2KSB7XG4gICAgICAgIHJldHVybiBfaGFuZGxlUmVhZFJlbGF0aW9ucy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhbmRsZVJlYWRSZWxhdGlvbnM7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlVXNlckRpcmVjdG9yeVNlYXJjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2hhbmRsZVVzZXJEaXJlY3RvcnlTZWFyY2ggPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUoKS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU2KHJlcXVlc3QpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUoKS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU2JChfY29udGV4dDYpIHtcbiAgICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dDYucHJldiA9IF9jb250ZXh0Ni5uZXh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIGlmICh0aGlzLmhhc0NhcGFiaWxpdHkoX0NhcGFiaWxpdGllcy5NYXRyaXhDYXBhYmlsaXRpZXMuTVNDMzk3M1VzZXJEaXJlY3RvcnlTZWFyY2gpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ2Lm5leHQgPSAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuYWJydXB0KFwicmV0dXJuXCIsIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJNaXNzaW5nIGNhcGFiaWxpdHlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBpZiAoISh0eXBlb2YgcmVxdWVzdC5kYXRhLnNlYXJjaF90ZXJtICE9PSAnc3RyaW5nJykpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ni5hYnJ1cHQoXCJyZXR1cm5cIiwgdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkludmFsaWQgcmVxdWVzdCAtIG1pc3Npbmcgc2VhcmNoIHRlcm1cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICBpZiAoIShyZXF1ZXN0LmRhdGEubGltaXQgIT09IHVuZGVmaW5lZCAmJiByZXF1ZXN0LmRhdGEubGltaXQgPCAwKSkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Ni5uZXh0ID0gNjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2LmFicnVwdChcInJldHVyblwiLCB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCByZXF1ZXN0IC0gbGltaXQgb3V0IG9mIHJhbmdlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgX2NvbnRleHQ2LnByZXYgPSA2O1xuICAgICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDk7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmRyaXZlci5zZWFyY2hVc2VyRGlyZWN0b3J5KHJlcXVlc3QuZGF0YS5zZWFyY2hfdGVybSwgcmVxdWVzdC5kYXRhLmxpbWl0KTtcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgcmVzdWx0ID0gX2NvbnRleHQ2LnNlbnQ7XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuYWJydXB0KFwicmV0dXJuXCIsIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBsaW1pdGVkOiByZXN1bHQubGltaXRlZCxcbiAgICAgICAgICAgICAgICByZXN1bHRzOiByZXN1bHQucmVzdWx0cy5tYXAoZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHIudXNlcklkLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6IHIuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcl91cmw6IHIuYXZhdGFyVXJsXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgIF9jb250ZXh0Ni5wcmV2ID0gMTM7XG4gICAgICAgICAgICAgIF9jb250ZXh0Ni50MCA9IF9jb250ZXh0NltcImNhdGNoXCJdKDYpO1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiZXJyb3Igc2VhcmNoaW5nIGluIHRoZSB1c2VyIGRpcmVjdG9yeVwiLCBfY29udGV4dDYudDApO1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZURyaXZlckVycm9yKF9jb250ZXh0Ni50MCwgcmVxdWVzdCwgXCJVbmV4cGVjdGVkIGVycm9yIHdoaWxlIHNlYXJjaGluZyBpbiB0aGUgdXNlciBkaXJlY3RvcnlcIik7XG4gICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2LnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWU2LCB0aGlzLCBbWzYsIDEzXV0pO1xuICAgICAgfSkpO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlVXNlckRpcmVjdG9yeVNlYXJjaChfeDcpIHtcbiAgICAgICAgcmV0dXJuIF9oYW5kbGVVc2VyRGlyZWN0b3J5U2VhcmNoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFuZGxlVXNlckRpcmVjdG9yeVNlYXJjaDtcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVHZXRNZWRpYUNvbmZpZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2hhbmRsZUdldE1lZGlhQ29uZmlnID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lKCkubWFyayhmdW5jdGlvbiBfY2FsbGVlNyhyZXF1ZXN0KSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lKCkud3JhcChmdW5jdGlvbiBfY2FsbGVlNyQoX2NvbnRleHQ3KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQ3LnByZXYgPSBfY29udGV4dDcubmV4dCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDYXBhYmlsaXR5KF9DYXBhYmlsaXRpZXMuTWF0cml4Q2FwYWJpbGl0aWVzLk1TQzQwMzlVcGxvYWRGaWxlKSkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Ny5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ3LmFicnVwdChcInJldHVyblwiLCB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTWlzc2luZyBjYXBhYmlsaXR5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgX2NvbnRleHQ3LnByZXYgPSAyO1xuICAgICAgICAgICAgICBfY29udGV4dDcubmV4dCA9IDU7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmRyaXZlci5nZXRNZWRpYUNvbmZpZygpO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICByZXN1bHQgPSBfY29udGV4dDcuc2VudDtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ny5hYnJ1cHQoXCJyZXR1cm5cIiwgdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwgcmVzdWx0KSk7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgIF9jb250ZXh0Ny5wcmV2ID0gOTtcbiAgICAgICAgICAgICAgX2NvbnRleHQ3LnQwID0gX2NvbnRleHQ3W1wiY2F0Y2hcIl0oMik7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvciB3aGlsZSBnZXR0aW5nIHRoZSBtZWRpYSBjb25maWd1cmF0aW9uXCIsIF9jb250ZXh0Ny50MCk7XG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlRHJpdmVyRXJyb3IoX2NvbnRleHQ3LnQwLCByZXF1ZXN0LCBcIlVuZXhwZWN0ZWQgZXJyb3Igd2hpbGUgZ2V0dGluZyB0aGUgbWVkaWEgY29uZmlndXJhdGlvblwiKTtcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDcuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTcsIHRoaXMsIFtbMiwgOV1dKTtcbiAgICAgIH0pKTtcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUdldE1lZGlhQ29uZmlnKF94OCkge1xuICAgICAgICByZXR1cm4gX2hhbmRsZUdldE1lZGlhQ29uZmlnLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFuZGxlR2V0TWVkaWFDb25maWc7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlVXBsb2FkRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2hhbmRsZVVwbG9hZEZpbGUgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUoKS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU4KHJlcXVlc3QpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUoKS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU4JChfY29udGV4dDgpIHtcbiAgICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dDgucHJldiA9IF9jb250ZXh0OC5uZXh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIGlmICh0aGlzLmhhc0NhcGFiaWxpdHkoX0NhcGFiaWxpdGllcy5NYXRyaXhDYXBhYmlsaXRpZXMuTVNDNDAzOVVwbG9hZEZpbGUpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ4Lm5leHQgPSAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDguYWJydXB0KFwicmV0dXJuXCIsIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJNaXNzaW5nIGNhcGFiaWxpdHlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBfY29udGV4dDgucHJldiA9IDI7XG4gICAgICAgICAgICAgIF9jb250ZXh0OC5uZXh0ID0gNTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJpdmVyLnVwbG9hZEZpbGUocmVxdWVzdC5kYXRhLmZpbGUpO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICByZXN1bHQgPSBfY29udGV4dDguc2VudDtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OC5hYnJ1cHQoXCJyZXR1cm5cIiwgdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRfdXJpOiByZXN1bHQuY29udGVudFVyaVxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgIF9jb250ZXh0OC5wcmV2ID0gOTtcbiAgICAgICAgICAgICAgX2NvbnRleHQ4LnQwID0gX2NvbnRleHQ4W1wiY2F0Y2hcIl0oMik7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvciB3aGlsZSB1cGxvYWRpbmcgYSBmaWxlXCIsIF9jb250ZXh0OC50MCk7XG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlRHJpdmVyRXJyb3IoX2NvbnRleHQ4LnQwLCByZXF1ZXN0LCBcIlVuZXhwZWN0ZWQgZXJyb3Igd2hpbGUgdXBsb2FkaW5nIGEgZmlsZVwiKTtcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDguc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTgsIHRoaXMsIFtbMiwgOV1dKTtcbiAgICAgIH0pKTtcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZVVwbG9hZEZpbGUoX3g5KSB7XG4gICAgICAgIHJldHVybiBfaGFuZGxlVXBsb2FkRmlsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhbmRsZVVwbG9hZEZpbGU7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlRG93bmxvYWRGaWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfaGFuZGxlRG93bmxvYWRGaWxlID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lKCkubWFyayhmdW5jdGlvbiBfY2FsbGVlOShyZXF1ZXN0KSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lKCkud3JhcChmdW5jdGlvbiBfY2FsbGVlOSQoX2NvbnRleHQ5KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQ5LnByZXYgPSBfY29udGV4dDkubmV4dCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDYXBhYmlsaXR5KF9DYXBhYmlsaXRpZXMuTWF0cml4Q2FwYWJpbGl0aWVzLk1TQzQwMzlEb3dubG9hZEZpbGUpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ5Lm5leHQgPSAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDkuYWJydXB0KFwicmV0dXJuXCIsIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJNaXNzaW5nIGNhcGFiaWxpdHlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBfY29udGV4dDkucHJldiA9IDI7XG4gICAgICAgICAgICAgIF9jb250ZXh0OS5uZXh0ID0gNTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJpdmVyLmRvd25sb2FkRmlsZShyZXF1ZXN0LmRhdGEuY29udGVudF91cmkpO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICByZXN1bHQgPSBfY29udGV4dDkuc2VudDtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0OS5hYnJ1cHQoXCJyZXR1cm5cIiwgdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgICAgICAgIGZpbGU6IHJlc3VsdC5maWxlXG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgX2NvbnRleHQ5LnByZXYgPSA5O1xuICAgICAgICAgICAgICBfY29udGV4dDkudDAgPSBfY29udGV4dDlbXCJjYXRjaFwiXSgyKTtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yIHdoaWxlIGRvd25sb2FkaW5nIGEgZmlsZVwiLCBfY29udGV4dDkudDApO1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZURyaXZlckVycm9yKF9jb250ZXh0OS50MCwgcmVxdWVzdCwgXCJVbmV4cGVjdGVkIGVycm9yIHdoaWxlIGRvd25sb2FkaW5nIGEgZmlsZVwiKTtcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDkuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTksIHRoaXMsIFtbMiwgOV1dKTtcbiAgICAgIH0pKTtcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZURvd25sb2FkRmlsZShfeDEwKSB7XG4gICAgICAgIHJldHVybiBfaGFuZGxlRG93bmxvYWRGaWxlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFuZGxlRG93bmxvYWRGaWxlO1xuICAgIH0oKVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZURyaXZlckVycm9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZURyaXZlckVycm9yKGUsIHJlcXVlc3QsIG1lc3NhZ2UpIHtcbiAgICAgIHZhciBkYXRhID0gdGhpcy5kcml2ZXIucHJvY2Vzc0Vycm9yKGUpO1xuICAgICAgdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICBlcnJvcjogX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9LCBkYXRhKVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZU1lc3NhZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldikge1xuICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSByZXR1cm47XG4gICAgICB2YXIgYWN0aW9uRXYgPSBuZXcgQ3VzdG9tRXZlbnQoXCJhY3Rpb246XCIuY29uY2F0KGV2LmRldGFpbC5hY3Rpb24pLCB7XG4gICAgICAgIGRldGFpbDogZXYuZGV0YWlsLFxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZW1pdChcImFjdGlvbjpcIi5jb25jYXQoZXYuZGV0YWlsLmFjdGlvbiksIGFjdGlvbkV2KTtcbiAgICAgIGlmICghYWN0aW9uRXYuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBzd2l0Y2ggKGV2LmRldGFpbC5hY3Rpb24pIHtcbiAgICAgICAgICBjYXNlIF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5Db250ZW50TG9hZGVkOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ29udGVudExvYWRlZEFjdGlvbihldi5kZXRhaWwpO1xuICAgICAgICAgIGNhc2UgX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLlN1cHBvcnRlZEFwaVZlcnNpb25zOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVwbHlWZXJzaW9ucyhldi5kZXRhaWwpO1xuICAgICAgICAgIGNhc2UgX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLlNlbmRFdmVudDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVNlbmRFdmVudChldi5kZXRhaWwpO1xuICAgICAgICAgIGNhc2UgX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLlNlbmRUb0RldmljZTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVNlbmRUb0RldmljZShldi5kZXRhaWwpO1xuICAgICAgICAgIGNhc2UgX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLkdldE9wZW5JRENyZWRlbnRpYWxzOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlT0lEQyhldi5kZXRhaWwpO1xuICAgICAgICAgIGNhc2UgX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLk1TQzI5MzFOYXZpZ2F0ZTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZU5hdmlnYXRlKGV2LmRldGFpbCk7XG4gICAgICAgICAgY2FzZSBfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uTVNDMjk3NFJlbmVnb3RpYXRlQ2FwYWJpbGl0aWVzOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ2FwYWJpbGl0aWVzUmVuZWdvdGlhdGUoZXYuZGV0YWlsKTtcbiAgICAgICAgICBjYXNlIF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5NU0MyODc2UmVhZEV2ZW50czpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlYWRFdmVudHMoZXYuZGV0YWlsKTtcbiAgICAgICAgICBjYXNlIF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5XYXRjaFR1cm5TZXJ2ZXJzOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlV2F0Y2hUdXJuU2VydmVycyhldi5kZXRhaWwpO1xuICAgICAgICAgIGNhc2UgX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLlVud2F0Y2hUdXJuU2VydmVyczpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVVud2F0Y2hUdXJuU2VydmVycyhldi5kZXRhaWwpO1xuICAgICAgICAgIGNhc2UgX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLk1TQzM4NjlSZWFkUmVsYXRpb25zOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVhZFJlbGF0aW9ucyhldi5kZXRhaWwpO1xuICAgICAgICAgIGNhc2UgX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLk1TQzM5NzNVc2VyRGlyZWN0b3J5U2VhcmNoOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlVXNlckRpcmVjdG9yeVNlYXJjaChldi5kZXRhaWwpO1xuICAgICAgICAgIGNhc2UgX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLkJlZXBlclJlYWRSb29tQWNjb3VudERhdGE6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZWFkUm9vbUFjY291bnREYXRhKGV2LmRldGFpbCk7XG4gICAgICAgICAgY2FzZSBfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uTVNDNDAzOUdldE1lZGlhQ29uZmlnQWN0aW9uOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlR2V0TWVkaWFDb25maWcoZXYuZGV0YWlsKTtcbiAgICAgICAgICBjYXNlIF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5NU0M0MDM5VXBsb2FkRmlsZUFjdGlvbjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVVwbG9hZEZpbGUoZXYuZGV0YWlsKTtcbiAgICAgICAgICBjYXNlIF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5NU0M0MDM5RG93bmxvYWRGaWxlQWN0aW9uOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRG93bmxvYWRGaWxlKGV2LmRldGFpbCk7XG4gICAgICAgICAgY2FzZSBfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uTVNDNDE1N1VwZGF0ZURlbGF5ZWRFdmVudDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVVwZGF0ZURlbGF5ZWRFdmVudChldi5kZXRhaWwpO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkoZXYuZGV0YWlsLCB7XG4gICAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVbmtub3duIG9yIHVuc3VwcG9ydGVkIGFjdGlvbjogXCIgKyBldi5kZXRhaWwuYWN0aW9uXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBUYWtlcyBhIHNjcmVlbnNob3Qgb2YgdGhlIHdpZGdldC5cclxuICAgICAqIEByZXR1cm5zIFJlc29sdmVzIHRvIHRoZSB3aWRnZXQncyBzY3JlZW5zaG90LlxyXG4gICAgICogQHRocm93cyBUaHJvd3MgaWYgdGhlcmUgaXMgYSBwcm9ibGVtLlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwidGFrZVNjcmVlbnNob3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdGFrZVNjcmVlbnNob3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaVRvV2lkZ2V0QWN0aW9uLlRha2VTY3JlZW5zaG90LCB7fSk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBBbGVydHMgdGhlIHdpZGdldCB0byB3aGV0aGVyIG9yIG5vdCBpdCBpcyBjdXJyZW50bHkgdmlzaWJsZS5cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWaXNpYmxlIFdoZXRoZXIgdGhlIHdpZGdldCBpcyB2aXNpYmxlIG9yIG5vdC5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPElXaWRnZXRBcGlSZXNwb25zZURhdGE+fSBSZXNvbHZlcyB3aGVuIHRoZSB3aWRnZXQgYWNrbm93bGVkZ2VzIHRoZSB1cGRhdGUuXHJcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVWaXNpYmlsaXR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVZpc2liaWxpdHkoaXNWaXNpYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaVRvV2lkZ2V0QWN0aW9uLlVwZGF0ZVZpc2liaWxpdHksIHtcbiAgICAgICAgdmlzaWJsZTogaXNWaXNpYmxlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2VuZFdpZGdldENvbmZpZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kV2lkZ2V0Q29uZmlnKGRhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24uV2lkZ2V0Q29uZmlnLCBkYXRhKS50aGVuKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm5vdGlmeU1vZGFsV2lkZ2V0QnV0dG9uQ2xpY2tlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBub3RpZnlNb2RhbFdpZGdldEJ1dHRvbkNsaWNrZWQoaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24uQnV0dG9uQ2xpY2tlZCwge1xuICAgICAgICBpZDogaWRcbiAgICAgIH0pLnRoZW4oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibm90aWZ5TW9kYWxXaWRnZXRDbG9zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBub3RpZnlNb2RhbFdpZGdldENsb3NlKGRhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24uQ2xvc2VNb2RhbFdpZGdldCwgZGF0YSkudGhlbigpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogRmVlZHMgYW4gZXZlbnQgdG8gdGhlIHdpZGdldC4gSWYgdGhlIHdpZGdldCBpcyBub3QgYWJsZSB0byBhY2NlcHQgdGhlIGV2ZW50IGR1ZSB0b1xyXG4gICAgICogcGVybWlzc2lvbnMsIHRoaXMgd2lsbCBuby1vcCBhbmQgcmV0dXJuIGNhbG1seS4gSWYgdGhlIHdpZGdldCBmYWlsZWQgdG8gaGFuZGxlIHRoZVxyXG4gICAgICogZXZlbnQsIHRoaXMgd2lsbCByYWlzZSBhbiBlcnJvci5cclxuICAgICAqIEBwYXJhbSB7SVJvb21FdmVudH0gcmF3RXZlbnQgVGhlIGV2ZW50IHRvICh0cnkgdG8pIHNlbmQgdG8gdGhlIHdpZGdldC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW50Vmlld2VkUm9vbUlkIFRoZSByb29tIElEIHRoZSB1c2VyIGlzIGN1cnJlbnRseSBpbnRlcmFjdGluZyB3aXRoLlxyXG4gICAgICogTm90IHRoZSByb29tIElEIG9mIHRoZSBldmVudC5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXNvbHZlcyB3aGVuIGNvbXBsZXRlLCByZWplY3RzIGlmIHRoZXJlIHdhcyBhbiBlcnJvciBzZW5kaW5nLlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiZmVlZEV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfZmVlZEV2ZW50ID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lKCkubWFyayhmdW5jdGlvbiBfY2FsbGVlMTAocmF3RXZlbnQsIGN1cnJlbnRWaWV3ZWRSb29tSWQpIHtcbiAgICAgICAgdmFyIF9yYXdFdmVudCRjb250ZW50O1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZSgpLndyYXAoZnVuY3Rpb24gX2NhbGxlZTEwJChfY29udGV4dDEwKSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQxMC5wcmV2ID0gX2NvbnRleHQxMC5uZXh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIGlmICghKHJhd0V2ZW50LnJvb21faWQgIT09IGN1cnJlbnRWaWV3ZWRSb29tSWQgJiYgIXRoaXMuY2FuVXNlUm9vbVRpbWVsaW5lKHJhd0V2ZW50LnJvb21faWQpKSkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0MTAubmV4dCA9IDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0MTAuYWJydXB0KFwicmV0dXJuXCIpO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBpZiAoIShyYXdFdmVudC5zdGF0ZV9rZXkgIT09IHVuZGVmaW5lZCAmJiByYXdFdmVudC5zdGF0ZV9rZXkgIT09IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQxMC5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodGhpcy5jYW5SZWNlaXZlU3RhdGVFdmVudChyYXdFdmVudC50eXBlLCByYXdFdmVudC5zdGF0ZV9rZXkpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQxMC5uZXh0ID0gNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxMC5hYnJ1cHQoXCJyZXR1cm5cIik7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIF9jb250ZXh0MTAubmV4dCA9IDk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICBpZiAodGhpcy5jYW5SZWNlaXZlUm9vbUV2ZW50KHJhd0V2ZW50LnR5cGUsIChfcmF3RXZlbnQkY29udGVudCA9IHJhd0V2ZW50LmNvbnRlbnQpID09PSBudWxsIHx8IF9yYXdFdmVudCRjb250ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcmF3RXZlbnQkY29udGVudFtcIm1zZ3R5cGVcIl0pKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQxMC5uZXh0ID0gOTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxMC5hYnJ1cHQoXCJyZXR1cm5cIik7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgIF9jb250ZXh0MTAubmV4dCA9IDExO1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaVRvV2lkZ2V0QWN0aW9uLlNlbmRFdmVudCwgcmF3RXZlbnQgLy8gaXQncyBjb21wYXRpYmxlLCBidXQgbWlzc2luZyB0aGUgaW5kZXggc2lnbmF0dXJlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxMC5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlMTAsIHRoaXMpO1xuICAgICAgfSkpO1xuICAgICAgZnVuY3Rpb24gZmVlZEV2ZW50KF94MTEsIF94MTIpIHtcbiAgICAgICAgcmV0dXJuIF9mZWVkRXZlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmZWVkRXZlbnQ7XG4gICAgfSgpXG4gICAgLyoqXHJcbiAgICAgKiBGZWVkcyBhIHRvLWRldmljZSBldmVudCB0byB0aGUgd2lkZ2V0LiBJZiB0aGUgd2lkZ2V0IGlzIG5vdCBhYmxlIHRvIGFjY2VwdCB0aGVcclxuICAgICAqIGV2ZW50IGR1ZSB0byBwZXJtaXNzaW9ucywgdGhpcyB3aWxsIG5vLW9wIGFuZCByZXR1cm4gY2FsbWx5LiBJZiB0aGUgd2lkZ2V0IGZhaWxlZFxyXG4gICAgICogdG8gaGFuZGxlIHRoZSBldmVudCwgdGhpcyB3aWxsIHJhaXNlIGFuIGVycm9yLlxyXG4gICAgICogQHBhcmFtIHtJUm9vbUV2ZW50fSByYXdFdmVudCBUaGUgZXZlbnQgdG8gKHRyeSB0bykgc2VuZCB0byB0aGUgd2lkZ2V0LlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBlbmNyeXB0ZWQgV2hldGhlciB0aGUgZXZlbnQgY29udGVudHMgd2VyZSBlbmNyeXB0ZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUmVzb2x2ZXMgd2hlbiBjb21wbGV0ZSwgcmVqZWN0cyBpZiB0aGVyZSB3YXMgYW4gZXJyb3Igc2VuZGluZy5cclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImZlZWRUb0RldmljZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2ZlZWRUb0RldmljZSA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZSgpLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTExKHJhd0V2ZW50LCBlbmNyeXB0ZWQpIHtcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUoKS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUxMSQoX2NvbnRleHQxMSkge1xuICAgICAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0MTEucHJldiA9IF9jb250ZXh0MTEubmV4dCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FuUmVjZWl2ZVRvRGV2aWNlRXZlbnQocmF3RXZlbnQudHlwZSkpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dDExLm5leHQgPSAzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF9jb250ZXh0MTEubmV4dCA9IDM7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24uU2VuZFRvRGV2aWNlLCAvLyBpdCdzIGNvbXBhdGlibGUsIGJ1dCBtaXNzaW5nIHRoZSBpbmRleCBzaWduYXR1cmVcbiAgICAgICAgICAgICAgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCByYXdFdmVudCksIHt9LCB7XG4gICAgICAgICAgICAgICAgZW5jcnlwdGVkOiBlbmNyeXB0ZWRcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQxMS5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlMTEsIHRoaXMpO1xuICAgICAgfSkpO1xuICAgICAgZnVuY3Rpb24gZmVlZFRvRGV2aWNlKF94MTMsIF94MTQpIHtcbiAgICAgICAgcmV0dXJuIF9mZWVkVG9EZXZpY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmZWVkVG9EZXZpY2U7XG4gICAgfSgpXG4gIH1dKTtcbiAgcmV0dXJuIENsaWVudFdpZGdldEFwaTtcbn0oX2V2ZW50cy5FdmVudEVtaXR0ZXIpO1xuZXhwb3J0cy5DbGllbnRXaWRnZXRBcGkgPSBDbGllbnRXaWRnZXRBcGk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1DbGllbnRXaWRnZXRBcGkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlN5bWJvbHMgPSB2b2lkIDA7XG4vKlxyXG4gKiBDb3B5cmlnaHQgMjAyMSBUaGUgTWF0cml4Lm9yZyBGb3VuZGF0aW9uIEMuSS5DLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xudmFyIFN5bWJvbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKFN5bWJvbHMpIHtcbiAgU3ltYm9sc1tcIkFueVJvb21cIl0gPSBcIipcIjtcbiAgcmV0dXJuIFN5bWJvbHM7XG59KHt9KTtcbmV4cG9ydHMuU3ltYm9scyA9IFN5bWJvbHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TeW1ib2xzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5XaWRnZXRBcGlSZXNwb25zZUVycm9yID0gZXhwb3J0cy5XaWRnZXRBcGkgPSB2b2lkIDA7XG52YXIgX2V2ZW50cyA9IHJlcXVpcmUoXCJldmVudHNcIik7XG52YXIgX1dpZGdldEFwaURpcmVjdGlvbiA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvV2lkZ2V0QXBpRGlyZWN0aW9uXCIpO1xudmFyIF9BcGlWZXJzaW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9BcGlWZXJzaW9uXCIpO1xudmFyIF9Qb3N0bWVzc2FnZVRyYW5zcG9ydCA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydC9Qb3N0bWVzc2FnZVRyYW5zcG9ydFwiKTtcbnZhciBfV2lkZ2V0QXBpQWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9XaWRnZXRBcGlBY3Rpb25cIik7XG52YXIgX0dldE9wZW5JREFjdGlvbiA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvR2V0T3BlbklEQWN0aW9uXCIpO1xudmFyIF9XaWRnZXRUeXBlID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9XaWRnZXRUeXBlXCIpO1xudmFyIF9Nb2RhbFdpZGdldEFjdGlvbnMgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL01vZGFsV2lkZ2V0QWN0aW9uc1wiKTtcbnZhciBfV2lkZ2V0RXZlbnRDYXBhYmlsaXR5ID0gcmVxdWlyZShcIi4vbW9kZWxzL1dpZGdldEV2ZW50Q2FwYWJpbGl0eVwiKTtcbnZhciBfU3ltYm9scyA9IHJlcXVpcmUoXCIuL1N5bWJvbHNcIik7XG5mdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkgeyBcInVzZSBzdHJpY3RcIjsgLyohIHJlZ2VuZXJhdG9yLXJ1bnRpbWUgLS0gQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuIC0tIGxpY2Vuc2UgKE1JVCk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vTElDRU5TRSAqLyBfcmVnZW5lcmF0b3JSdW50aW1lID0gZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHsgcmV0dXJuIGV4cG9ydHM7IH07IHZhciBleHBvcnRzID0ge30sIE9wID0gT2JqZWN0LnByb3RvdHlwZSwgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHksIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5IHx8IGZ1bmN0aW9uIChvYmosIGtleSwgZGVzYykgeyBvYmpba2V5XSA9IGRlc2MudmFsdWU7IH0sICRTeW1ib2wgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCA/IFN5bWJvbCA6IHt9LCBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCIsIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIiwgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiOyBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7IHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwIH0pLCBvYmpba2V5XTsgfSB0cnkgeyBkZWZpbmUoe30sIFwiXCIpOyB9IGNhdGNoIChlcnIpIHsgZGVmaW5lID0gZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkgeyByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTsgfTsgfSBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7IHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yLCBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSksIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7IHJldHVybiBkZWZpbmVQcm9wZXJ0eShnZW5lcmF0b3IsIFwiX2ludm9rZVwiLCB7IHZhbHVlOiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIH0pLCBnZW5lcmF0b3I7IH0gZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7IHRyeSB7IHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTsgfSBjYXRjaCAoZXJyKSB7IHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTsgfSB9IGV4cG9ydHMud3JhcCA9IHdyYXA7IHZhciBDb250aW51ZVNlbnRpbmVsID0ge307IGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9IGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge30gZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fSB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTsgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7IHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiwgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJiBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpICYmIChJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlKTsgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpOyBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7IFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHsgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbiAoYXJnKSB7IHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpOyB9KTsgfSk7IH0gZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7IGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7IHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpOyBpZiAoXCJ0aHJvd1wiICE9PSByZWNvcmQudHlwZSkgeyB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZywgdmFsdWUgPSByZXN1bHQudmFsdWU7IHJldHVybiB2YWx1ZSAmJiBcIm9iamVjdFwiID09IF90eXBlb2YodmFsdWUpICYmIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikgPyBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7IGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7IH0sIGZ1bmN0aW9uIChlcnIpIHsgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpOyB9KSA6IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHVud3JhcHBlZCkgeyByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQsIHJlc29sdmUocmVzdWx0KTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTsgfSk7IH0gcmVqZWN0KHJlY29yZC5hcmcpOyB9IHZhciBwcmV2aW91c1Byb21pc2U7IGRlZmluZVByb3BlcnR5KHRoaXMsIFwiX2ludm9rZVwiLCB7IHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShtZXRob2QsIGFyZykgeyBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHsgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTsgfSk7IH0gcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9IHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpOyB9IH0pOyB9IGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkgeyB2YXIgc3RhdGUgPSBcInN1c3BlbmRlZFN0YXJ0XCI7IHJldHVybiBmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHsgaWYgKFwiZXhlY3V0aW5nXCIgPT09IHN0YXRlKSB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpOyBpZiAoXCJjb21wbGV0ZWRcIiA9PT0gc3RhdGUpIHsgaWYgKFwidGhyb3dcIiA9PT0gbWV0aG9kKSB0aHJvdyBhcmc7IHJldHVybiBkb25lUmVzdWx0KCk7IH0gZm9yIChjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZCwgY29udGV4dC5hcmcgPSBhcmc7OykgeyB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlOyBpZiAoZGVsZWdhdGUpIHsgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7IGlmIChkZWxlZ2F0ZVJlc3VsdCkgeyBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlOyByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7IH0gfSBpZiAoXCJuZXh0XCIgPT09IGNvbnRleHQubWV0aG9kKSBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7ZWxzZSBpZiAoXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkgeyBpZiAoXCJzdXNwZW5kZWRTdGFydFwiID09PSBzdGF0ZSkgdGhyb3cgc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0LmFyZzsgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7IH0gZWxzZSBcInJldHVyblwiID09PSBjb250ZXh0Lm1ldGhvZCAmJiBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7IHN0YXRlID0gXCJleGVjdXRpbmdcIjsgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpOyBpZiAoXCJub3JtYWxcIiA9PT0gcmVjb3JkLnR5cGUpIHsgaWYgKHN0YXRlID0gY29udGV4dC5kb25lID8gXCJjb21wbGV0ZWRcIiA6IFwic3VzcGVuZGVkWWllbGRcIiwgcmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7IHJldHVybiB7IHZhbHVlOiByZWNvcmQuYXJnLCBkb25lOiBjb250ZXh0LmRvbmUgfTsgfSBcInRocm93XCIgPT09IHJlY29yZC50eXBlICYmIChzdGF0ZSA9IFwiY29tcGxldGVkXCIsIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmcpOyB9IH07IH0gZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkgeyB2YXIgbWV0aG9kTmFtZSA9IGNvbnRleHQubWV0aG9kLCBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2ROYW1lXTsgaWYgKHVuZGVmaW5lZCA9PT0gbWV0aG9kKSByZXR1cm4gY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIFwidGhyb3dcIiA9PT0gbWV0aG9kTmFtZSAmJiBkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSAmJiAoY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCwgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCksIFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHx8IFwicmV0dXJuXCIgIT09IG1ldGhvZE5hbWUgJiYgKGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICdcIiArIG1ldGhvZE5hbWUgKyBcIicgbWV0aG9kXCIpKSwgQ29udGludWVTZW50aW5lbDsgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTsgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHJldHVybiBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbDsgdmFyIGluZm8gPSByZWNvcmQuYXJnOyByZXR1cm4gaW5mbyA/IGluZm8uZG9uZSA/IChjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZSwgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYywgXCJyZXR1cm5cIiAhPT0gY29udGV4dC5tZXRob2QgJiYgKGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWwpIDogaW5mbyA6IChjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIiksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKTsgfSBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykgeyB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9OyAxIGluIGxvY3MgJiYgKGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXSksIDIgaW4gbG9jcyAmJiAoZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl0sIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXSksIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTsgfSBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7IHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9OyByZWNvcmQudHlwZSA9IFwibm9ybWFsXCIsIGRlbGV0ZSByZWNvcmQuYXJnLCBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkOyB9IGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHsgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XSwgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpLCB0aGlzLnJlc2V0KCEwKTsgfSBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHsgaWYgKGl0ZXJhYmxlKSB7IHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTsgaWYgKGl0ZXJhdG9yTWV0aG9kKSByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7IGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGl0ZXJhYmxlLm5leHQpIHJldHVybiBpdGVyYWJsZTsgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7IHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkgeyBmb3IgKDsgKytpIDwgaXRlcmFibGUubGVuZ3RoOykgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkgcmV0dXJuIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXSwgbmV4dC5kb25lID0gITEsIG5leHQ7IHJldHVybiBuZXh0LnZhbHVlID0gdW5kZWZpbmVkLCBuZXh0LmRvbmUgPSAhMCwgbmV4dDsgfTsgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7IH0gfSByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07IH0gZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHsgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogITAgfTsgfSByZXR1cm4gR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZVByb3BlcnR5KEdwLCBcImNvbnN0cnVjdG9yXCIsIHsgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBjb25maWd1cmFibGU6ICEwIH0pLCBkZWZpbmVQcm9wZXJ0eShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCB7IHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvbiwgY29uZmlndXJhYmxlOiAhMCB9KSwgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpLCBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAoZ2VuRnVuKSB7IHZhciBjdG9yID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBnZW5GdW4gJiYgZ2VuRnVuLmNvbnN0cnVjdG9yOyByZXR1cm4gISFjdG9yICYmIChjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIgPT09IChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkpOyB9LCBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbiAoZ2VuRnVuKSB7IHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSkgOiAoZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSksIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKSwgZ2VuRnVuOyB9LCBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24gKGFyZykgeyByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTsgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKSwgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSwgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvciwgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uIChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHsgdm9pZCAwID09PSBQcm9taXNlSW1wbCAmJiAoUHJvbWlzZUltcGwgPSBQcm9taXNlKTsgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSwgUHJvbWlzZUltcGwpOyByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pID8gaXRlciA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkgeyByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTsgfSk7IH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCksIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpLCBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSwgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7IH0pLCBleHBvcnRzLmtleXMgPSBmdW5jdGlvbiAodmFsKSB7IHZhciBvYmplY3QgPSBPYmplY3QodmFsKSwga2V5cyA9IFtdOyBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSBrZXlzLnB1c2goa2V5KTsgcmV0dXJuIGtleXMucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkgeyBmb3IgKDsga2V5cy5sZW5ndGg7KSB7IHZhciBrZXkgPSBrZXlzLnBvcCgpOyBpZiAoa2V5IGluIG9iamVjdCkgcmV0dXJuIG5leHQudmFsdWUgPSBrZXksIG5leHQuZG9uZSA9ICExLCBuZXh0OyB9IHJldHVybiBuZXh0LmRvbmUgPSAhMCwgbmV4dDsgfTsgfSwgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXMsIENvbnRleHQucHJvdG90eXBlID0geyBjb25zdHJ1Y3RvcjogQ29udGV4dCwgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KHNraXBUZW1wUmVzZXQpIHsgaWYgKHRoaXMucHJldiA9IDAsIHRoaXMubmV4dCA9IDAsIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQsIHRoaXMuZG9uZSA9ICExLCB0aGlzLmRlbGVnYXRlID0gbnVsbCwgdGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5hcmcgPSB1bmRlZmluZWQsIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpLCAhc2tpcFRlbXBSZXNldCkgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSBcInRcIiA9PT0gbmFtZS5jaGFyQXQoMCkgJiYgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiYgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSAmJiAodGhpc1tuYW1lXSA9IHVuZGVmaW5lZCk7IH0sIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7IHRoaXMuZG9uZSA9ICEwOyB2YXIgcm9vdFJlY29yZCA9IHRoaXMudHJ5RW50cmllc1swXS5jb21wbGV0aW9uOyBpZiAoXCJ0aHJvd1wiID09PSByb290UmVjb3JkLnR5cGUpIHRocm93IHJvb3RSZWNvcmQuYXJnOyByZXR1cm4gdGhpcy5ydmFsOyB9LCBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gZGlzcGF0Y2hFeGNlcHRpb24oZXhjZXB0aW9uKSB7IGlmICh0aGlzLmRvbmUpIHRocm93IGV4Y2VwdGlvbjsgdmFyIGNvbnRleHQgPSB0aGlzOyBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHsgcmV0dXJuIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiLCByZWNvcmQuYXJnID0gZXhjZXB0aW9uLCBjb250ZXh0Lm5leHQgPSBsb2MsIGNhdWdodCAmJiAoY29udGV4dC5tZXRob2QgPSBcIm5leHRcIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQpLCAhIWNhdWdodDsgfSBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7IHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXSwgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjsgaWYgKFwicm9vdFwiID09PSBlbnRyeS50cnlMb2MpIHJldHVybiBoYW5kbGUoXCJlbmRcIik7IGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7IHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpLCBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTsgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHsgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7IGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpOyB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7IGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgITApOyB9IGVsc2UgeyBpZiAoIWhhc0ZpbmFsbHkpIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpOyBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTsgfSB9IH0gfSwgYWJydXB0OiBmdW5jdGlvbiBhYnJ1cHQodHlwZSwgYXJnKSB7IGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHsgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldOyBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJiBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHsgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5OyBicmVhazsgfSB9IGZpbmFsbHlFbnRyeSAmJiAoXCJicmVha1wiID09PSB0eXBlIHx8IFwiY29udGludWVcIiA9PT0gdHlwZSkgJiYgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiYgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jICYmIChmaW5hbGx5RW50cnkgPSBudWxsKTsgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307IHJldHVybiByZWNvcmQudHlwZSA9IHR5cGUsIHJlY29yZC5hcmcgPSBhcmcsIGZpbmFsbHlFbnRyeSA/ICh0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYywgQ29udGludWVTZW50aW5lbCkgOiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7IH0sIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZShyZWNvcmQsIGFmdGVyTG9jKSB7IGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSB0aHJvdyByZWNvcmQuYXJnOyByZXR1cm4gXCJicmVha1wiID09PSByZWNvcmQudHlwZSB8fCBcImNvbnRpbnVlXCIgPT09IHJlY29yZC50eXBlID8gdGhpcy5uZXh0ID0gcmVjb3JkLmFyZyA6IFwicmV0dXJuXCIgPT09IHJlY29yZC50eXBlID8gKHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZywgdGhpcy5tZXRob2QgPSBcInJldHVyblwiLCB0aGlzLm5leHQgPSBcImVuZFwiKSA6IFwibm9ybWFsXCIgPT09IHJlY29yZC50eXBlICYmIGFmdGVyTG9jICYmICh0aGlzLm5leHQgPSBhZnRlckxvYyksIENvbnRpbnVlU2VudGluZWw7IH0sIGZpbmlzaDogZnVuY3Rpb24gZmluaXNoKGZpbmFsbHlMb2MpIHsgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkgeyB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07IGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSByZXR1cm4gdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyksIHJlc2V0VHJ5RW50cnkoZW50cnkpLCBDb250aW51ZVNlbnRpbmVsOyB9IH0sIFwiY2F0Y2hcIjogZnVuY3Rpb24gX2NhdGNoKHRyeUxvYykgeyBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7IHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTsgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7IHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uOyBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkgeyB2YXIgdGhyb3duID0gcmVjb3JkLmFyZzsgcmVzZXRUcnlFbnRyeShlbnRyeSk7IH0gcmV0dXJuIHRocm93bjsgfSB9IHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTsgfSwgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24gZGVsZWdhdGVZaWVsZChpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykgeyByZXR1cm4gdGhpcy5kZWxlZ2F0ZSA9IHsgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsIG5leHRMb2M6IG5leHRMb2MgfSwgXCJuZXh0XCIgPT09IHRoaXMubWV0aG9kICYmICh0aGlzLmFyZyA9IHVuZGVmaW5lZCksIENvbnRpbnVlU2VudGluZWw7IH0gfSwgZXhwb3J0czsgfVxuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7IH0gfVxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7IGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTsgfSBmdW5jdGlvbiBfdGhyb3coZXJyKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpOyB9IF9uZXh0KHVuZGVmaW5lZCk7IH0pOyB9OyB9XG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHsgdmFyIF9jYWNoZSA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IG5ldyBNYXAoKSA6IHVuZGVmaW5lZDsgX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHsgaWYgKENsYXNzID09PSBudWxsIHx8ICFfaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzczsgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBpZiAodHlwZW9mIF9jYWNoZSAhPT0gXCJ1bmRlZmluZWRcIikgeyBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTsgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7IH0gZnVuY3Rpb24gV3JhcHBlcigpIHsgcmV0dXJuIF9jb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTsgfSBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBXcmFwcGVyLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyByZXR1cm4gX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTsgfTsgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpOyB9XG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHsgaWYgKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkgeyBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3QuYmluZCgpOyB9IGVsc2UgeyBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IHZhciBhID0gW251bGxdOyBhLnB1c2guYXBwbHkoYSwgYXJncyk7IHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTsgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7IGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpOyByZXR1cm4gaW5zdGFuY2U7IH07IH0gcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikgeyByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cbmZ1bmN0aW9uIF9hd2FpdEFzeW5jR2VuZXJhdG9yKHZhbHVlKSB7IHJldHVybiBuZXcgX092ZXJsb2FkWWllbGQodmFsdWUsIDApOyB9XG5mdW5jdGlvbiBfd3JhcEFzeW5jR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgX0FzeW5jR2VuZXJhdG9yKGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpOyB9OyB9XG5mdW5jdGlvbiBfQXN5bmNHZW5lcmF0b3IoZ2VuKSB7IHZhciBmcm9udCwgYmFjazsgZnVuY3Rpb24gcmVzdW1lKGtleSwgYXJnKSB7IHRyeSB7IHZhciByZXN1bHQgPSBnZW5ba2V5XShhcmcpLCB2YWx1ZSA9IHJlc3VsdC52YWx1ZSwgb3ZlcmxvYWRlZCA9IHZhbHVlIGluc3RhbmNlb2YgX092ZXJsb2FkWWllbGQ7IFByb21pc2UucmVzb2x2ZShvdmVybG9hZGVkID8gdmFsdWUudiA6IHZhbHVlKS50aGVuKGZ1bmN0aW9uIChhcmcpIHsgaWYgKG92ZXJsb2FkZWQpIHsgdmFyIG5leHRLZXkgPSBcInJldHVyblwiID09PSBrZXkgPyBcInJldHVyblwiIDogXCJuZXh0XCI7IGlmICghdmFsdWUuayB8fCBhcmcuZG9uZSkgcmV0dXJuIHJlc3VtZShuZXh0S2V5LCBhcmcpOyBhcmcgPSBnZW5bbmV4dEtleV0oYXJnKS52YWx1ZTsgfSBzZXR0bGUocmVzdWx0LmRvbmUgPyBcInJldHVyblwiIDogXCJub3JtYWxcIiwgYXJnKTsgfSwgZnVuY3Rpb24gKGVycikgeyByZXN1bWUoXCJ0aHJvd1wiLCBlcnIpOyB9KTsgfSBjYXRjaCAoZXJyKSB7IHNldHRsZShcInRocm93XCIsIGVycik7IH0gfSBmdW5jdGlvbiBzZXR0bGUodHlwZSwgdmFsdWUpIHsgc3dpdGNoICh0eXBlKSB7IGNhc2UgXCJyZXR1cm5cIjogZnJvbnQucmVzb2x2ZSh7IHZhbHVlOiB2YWx1ZSwgZG9uZTogITAgfSk7IGJyZWFrOyBjYXNlIFwidGhyb3dcIjogZnJvbnQucmVqZWN0KHZhbHVlKTsgYnJlYWs7IGRlZmF1bHQ6IGZyb250LnJlc29sdmUoeyB2YWx1ZTogdmFsdWUsIGRvbmU6ICExIH0pOyB9IChmcm9udCA9IGZyb250Lm5leHQpID8gcmVzdW1lKGZyb250LmtleSwgZnJvbnQuYXJnKSA6IGJhY2sgPSBudWxsOyB9IHRoaXMuX2ludm9rZSA9IGZ1bmN0aW9uIChrZXksIGFyZykgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2YXIgcmVxdWVzdCA9IHsga2V5OiBrZXksIGFyZzogYXJnLCByZXNvbHZlOiByZXNvbHZlLCByZWplY3Q6IHJlamVjdCwgbmV4dDogbnVsbCB9OyBiYWNrID8gYmFjayA9IGJhY2submV4dCA9IHJlcXVlc3QgOiAoZnJvbnQgPSBiYWNrID0gcmVxdWVzdCwgcmVzdW1lKGtleSwgYXJnKSk7IH0pOyB9LCBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGdlbltcInJldHVyblwiXSAmJiAodGhpc1tcInJldHVyblwiXSA9IHZvaWQgMCk7IH1cbl9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGVbXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBfQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoYXJnKSB7IHJldHVybiB0aGlzLl9pbnZva2UoXCJuZXh0XCIsIGFyZyk7IH0sIF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGVbXCJ0aHJvd1wiXSA9IGZ1bmN0aW9uIChhcmcpIHsgcmV0dXJuIHRoaXMuX2ludm9rZShcInRocm93XCIsIGFyZyk7IH0sIF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGVbXCJyZXR1cm5cIl0gPSBmdW5jdGlvbiAoYXJnKSB7IHJldHVybiB0aGlzLl9pbnZva2UoXCJyZXR1cm5cIiwgYXJnKTsgfTtcbmZ1bmN0aW9uIF9PdmVybG9hZFlpZWxkKHZhbHVlLCBraW5kKSB7IHRoaXMudiA9IHZhbHVlLCB0aGlzLmsgPSBraW5kOyB9IC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIENvcHlyaWdodCAyMDIwIC0gMjAyNCBUaGUgTWF0cml4Lm9yZyBGb3VuZGF0aW9uIEMuSS5DLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xudmFyIFdpZGdldEFwaVJlc3BvbnNlRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9FcnJvcikge1xuICBfaW5oZXJpdHMoV2lkZ2V0QXBpUmVzcG9uc2VFcnJvciwgX0Vycm9yKTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihXaWRnZXRBcGlSZXNwb25zZUVycm9yKTtcbiAgZnVuY3Rpb24gV2lkZ2V0QXBpUmVzcG9uc2VFcnJvcihtZXNzYWdlLCBkYXRhKSB7XG4gICAgdmFyIF90aGlzMjtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2lkZ2V0QXBpUmVzcG9uc2VFcnJvcik7XG4gICAgX3RoaXMyID0gX3N1cGVyLmNhbGwodGhpcywgbWVzc2FnZSk7XG4gICAgX3RoaXMyLmRhdGEgPSBkYXRhO1xuICAgIHJldHVybiBfdGhpczI7XG4gIH1cbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhXaWRnZXRBcGlSZXNwb25zZUVycm9yKTtcbn0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEVycm9yKSk7XG4vKipcclxuICogQVBJIGhhbmRsZXIgZm9yIHdpZGdldHMuIFRoaXMgcmFpc2VzIGV2ZW50cyBmb3IgZWFjaCBhY3Rpb25cclxuICogcmVjZWl2ZWQgYXMgYGFjdGlvbjoke2FjdGlvbn1gIChlZzogXCJhY3Rpb246c2NyZWVuc2hvdFwiKS5cclxuICogRGVmYXVsdCBoYW5kbGluZyBjYW4gYmUgcHJldmVudGVkIGJ5IHVzaW5nIHByZXZlbnREZWZhdWx0KClcclxuICogb24gdGhlIHJhaXNlZCBldmVudC4gVGhlIGRlZmF1bHQgaGFuZGxpbmcgdmFyaWVzIGZvciBlYWNoXHJcbiAqIGFjdGlvbjogb25lcyB3aGljaCB0aGUgU0RLIGNhbiBoYW5kbGUgc2FmZWx5IGFyZSBhY2tub3dsZWRnZWRcclxuICogYXBwcm9wcmlhdGVseSBhbmQgb25lcyB3aGljaCBhcmUgdW5oYW5kbGVkIChjdXN0b20gb3IgcmVxdWlyZVxyXG4gKiB0aGUgd2lkZ2V0IHRvIGRvIHNvbWV0aGluZykgYXJlIHJlamVjdGVkIHdpdGggYW4gZXJyb3IuXHJcbiAqXHJcbiAqIEV2ZW50cyB3aGljaCBhcmUgcHJldmVudERlZmF1bHQoKWVkIG11c3QgcmVwbHkgdXNpbmcgdGhlXHJcbiAqIHRyYW5zcG9ydC4gVGhlIGV2ZW50cyByYWlzZWQgd2lsbCBoYXZlIGEgZGV0YWlsIG9mIGFuXHJcbiAqIElXaWRnZXRBcGlSZXF1ZXN0IGludGVyZmFjZS5cclxuICpcclxuICogV2hlbiB0aGUgV2lkZ2V0QXBpIGlzIHJlYWR5IHRvIHN0YXJ0IHNlbmRpbmcgcmVxdWVzdHMsIGl0IHdpbGxcclxuICogcmFpc2UgYSBcInJlYWR5XCIgQ3VzdG9tRXZlbnQuIEFmdGVyIHRoZSByZWFkeSBldmVudCBmaXJlcywgYWN0aW9uc1xyXG4gKiBjYW4gYmUgc2VudCBhbmQgdGhlIHRyYW5zcG9ydCB3aWxsIGJlIHJlYWR5LlxyXG4gKi9cbmV4cG9ydHMuV2lkZ2V0QXBpUmVzcG9uc2VFcnJvciA9IFdpZGdldEFwaVJlc3BvbnNlRXJyb3I7XG5XaWRnZXRBcGlSZXNwb25zZUVycm9yLnByb3RvdHlwZS5uYW1lID0gV2lkZ2V0QXBpUmVzcG9uc2VFcnJvci5uYW1lO1xudmFyIFdpZGdldEFwaSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0V2ZW50RW1pdHRlcikge1xuICBfaW5oZXJpdHMoV2lkZ2V0QXBpLCBfRXZlbnRFbWl0dGVyKTtcbiAgdmFyIF9zdXBlcjIgPSBfY3JlYXRlU3VwZXIoV2lkZ2V0QXBpKTtcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBBUEkgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHdpZGdldC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gd2lkZ2V0SWQgVGhlIHdpZGdldCBJRCB0byBsaXN0ZW4gZm9yLiBJZiBub3Qgc3VwcGxpZWQgdGhlblxyXG4gICAqIHRoZSBBUEkgd2lsbCB1c2UgdGhlIHdpZGdldCBJRCBmcm9tIHRoZSBmaXJzdCB2YWxpZCByZXF1ZXN0IGl0IHJlY2VpdmVzLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRPcmlnaW4gVGhlIG9yaWdpbiBvZiB0aGUgY2xpZW50LCBvciBudWxsIGlmIG5vdCBrbm93bi5cclxuICAgKi9cbiAgZnVuY3Rpb24gV2lkZ2V0QXBpKCkge1xuICAgIHZhciBfdGhpczM7XG4gICAgdmFyIHdpZGdldElkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuICAgIHZhciBjbGllbnRPcmlnaW4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdpZGdldEFwaSk7XG4gICAgX3RoaXMzID0gX3N1cGVyMi5jYWxsKHRoaXMpO1xuICAgIF90aGlzMy5jbGllbnRPcmlnaW4gPSBjbGllbnRPcmlnaW47XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgXCJ0cmFuc3BvcnRcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpLCBcImNhcGFiaWxpdGllc0ZpbmlzaGVkXCIsIGZhbHNlKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpLCBcInN1cHBvcnRzTVNDMjk3NFJlbmVnb3RpYXRlXCIsIGZhbHNlKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpLCBcInJlcXVlc3RlZENhcGFiaWxpdGllc1wiLCBbXSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgXCJhcHByb3ZlZENhcGFiaWxpdGllc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyksIFwiY2FjaGVkQ2xpZW50VmVyc2lvbnNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpLCBcInR1cm5TZXJ2ZXJXYXRjaGVyc1wiLCAwKTtcbiAgICBpZiAoIXdpbmRvdy5wYXJlbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHBhcmVudCB3aW5kb3cuIFRoaXMgd2lkZ2V0IGRvZXNuJ3QgYXBwZWFyIHRvIGJlIGVtYmVkZGVkIHByb3Blcmx5LlwiKTtcbiAgICB9XG4gICAgX3RoaXMzLnRyYW5zcG9ydCA9IG5ldyBfUG9zdG1lc3NhZ2VUcmFuc3BvcnQuUG9zdG1lc3NhZ2VUcmFuc3BvcnQoX1dpZGdldEFwaURpcmVjdGlvbi5XaWRnZXRBcGlEaXJlY3Rpb24uRnJvbVdpZGdldCwgd2lkZ2V0SWQsIHdpbmRvdy5wYXJlbnQsIHdpbmRvdyk7XG4gICAgX3RoaXMzLnRyYW5zcG9ydC50YXJnZXRPcmlnaW4gPSBjbGllbnRPcmlnaW47XG4gICAgX3RoaXMzLnRyYW5zcG9ydC5vbihcIm1lc3NhZ2VcIiwgX3RoaXMzLmhhbmRsZU1lc3NhZ2UuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMykpKTtcbiAgICByZXR1cm4gX3RoaXMzO1xuICB9XG5cbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGUgd2lkZ2V0IHdhcyBncmFudGVkIGEgcGFydGljdWxhciBjYXBhYmlsaXR5LiBOb3RlIHRoYXQgb25cclxuICAgKiBjbGllbnRzIHdoZXJlIHRoZSBjYXBhYmlsaXRpZXMgYXJlIG5vdCBmZWQgYmFjayB0byB0aGUgd2lkZ2V0IHRoaXMgZnVuY3Rpb25cclxuICAgKiB3aWxsIHJlbHkgb24gcmVxdWVzdGVkIGNhcGFiaWxpdGllcyBpbnN0ZWFkLlxyXG4gICAqIEBwYXJhbSB7Q2FwYWJpbGl0eX0gY2FwYWJpbGl0eSBUaGUgY2FwYWJpbGl0eSB0byBjaGVjayBmb3IgYXBwcm92YWwgb2YuXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHdpZGdldCBoYXMgYXBwcm92YWwgZm9yIHRoZSBnaXZlbiBjYXBhYmlsaXR5LlxyXG4gICAqL1xuICBfY3JlYXRlQ2xhc3MoV2lkZ2V0QXBpLCBbe1xuICAgIGtleTogXCJoYXNDYXBhYmlsaXR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0NhcGFiaWxpdHkoY2FwYWJpbGl0eSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5hcHByb3ZlZENhcGFiaWxpdGllcykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwcm92ZWRDYXBhYmlsaXRpZXMuaW5jbHVkZXMoY2FwYWJpbGl0eSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0ZWRDYXBhYmlsaXRpZXMuaW5jbHVkZXMoY2FwYWJpbGl0eSk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXF1ZXN0IGEgY2FwYWJpbGl0eSBmcm9tIHRoZSBjbGllbnQuIEl0IGlzIG5vdCBndWFyYW50ZWVkIHRvIGJlIGFsbG93ZWQsXHJcbiAgICAgKiBidXQgd2lsbCBiZSBhc2tlZCBmb3IuXHJcbiAgICAgKiBAcGFyYW0ge0NhcGFiaWxpdHl9IGNhcGFiaWxpdHkgVGhlIGNhcGFiaWxpdHkgdG8gcmVxdWVzdC5cclxuICAgICAqIEB0aHJvd3MgVGhyb3dzIGlmIHRoZSBjYXBhYmlsaXRpZXMgbmVnb3RpYXRpb24gaGFzIGFscmVhZHkgc3RhcnRlZCBhbmQgdGhlXHJcbiAgICAgKiB3aWRnZXQgaXMgdW5hYmxlIHRvIHJlcXVlc3QgYWRkaXRpb25hbCBjYXBhYmlsaXRpZXMuXHJcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJyZXF1ZXN0Q2FwYWJpbGl0eVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXF1ZXN0Q2FwYWJpbGl0eShjYXBhYmlsaXR5KSB7XG4gICAgICBpZiAodGhpcy5jYXBhYmlsaXRpZXNGaW5pc2hlZCAmJiAhdGhpcy5zdXBwb3J0c01TQzI5NzRSZW5lZ290aWF0ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYXBhYmlsaXRpZXMgaGF2ZSBhbHJlYWR5IGJlZW4gbmVnb3RpYXRlZFwiKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVxdWVzdGVkQ2FwYWJpbGl0aWVzLnB1c2goY2FwYWJpbGl0eSk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXF1ZXN0IGNhcGFiaWxpdGllcyBmcm9tIHRoZSBjbGllbnQuIFRoZXkgYXJlIG5vdCBndWFyYW50ZWVkIHRvIGJlIGFsbG93ZWQsXHJcbiAgICAgKiBidXQgd2lsbCBiZSBhc2tlZCBmb3IgaWYgdGhlIG5lZ290aWF0aW9uIGhhcyBub3QgYWxyZWFkeSBoYXBwZW5lZC5cclxuICAgICAqIEBwYXJhbSB7Q2FwYWJpbGl0eVtdfSBjYXBhYmlsaXRpZXMgVGhlIGNhcGFiaWxpdGllcyB0byByZXF1ZXN0LlxyXG4gICAgICogQHRocm93cyBUaHJvd3MgaWYgdGhlIGNhcGFiaWxpdGllcyBuZWdvdGlhdGlvbiBoYXMgYWxyZWFkeSBzdGFydGVkLlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwicmVxdWVzdENhcGFiaWxpdGllc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXF1ZXN0Q2FwYWJpbGl0aWVzKGNhcGFiaWxpdGllcykge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG4gICAgICBjYXBhYmlsaXRpZXMuZm9yRWFjaChmdW5jdGlvbiAoY2FwKSB7XG4gICAgICAgIHJldHVybiBfdGhpczQucmVxdWVzdENhcGFiaWxpdHkoY2FwKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogUmVxdWVzdHMgdGhlIGNhcGFiaWxpdHkgdG8gaW50ZXJhY3Qgd2l0aCByb29tcyBvdGhlciB0aGFuIHRoZSB1c2VyJ3MgY3VycmVudGx5XHJcbiAgICAgKiB2aWV3ZWQgcm9vbS4gQXBwbGllcyB0byBldmVudCByZWNlaXZpbmcgYW5kIHNlbmRpbmcuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZyB8IFN5bWJvbHMuQW55Um9vbX0gcm9vbUlkIFRoZSByb29tIElELCBvciBgU3ltYm9scy5BbnlSb29tYCB0b1xyXG4gICAgICogZGVub3RlIGFsbCBrbm93biByb29tcy5cclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInJlcXVlc3RDYXBhYmlsaXR5Rm9yUm9vbVRpbWVsaW5lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3RDYXBhYmlsaXR5Rm9yUm9vbVRpbWVsaW5lKHJvb21JZCkge1xuICAgICAgdGhpcy5yZXF1ZXN0Q2FwYWJpbGl0eShcIm9yZy5tYXRyaXgubXNjMjc2Mi50aW1lbGluZTpcIi5jb25jYXQocm9vbUlkKSk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXF1ZXN0cyB0aGUgY2FwYWJpbGl0eSB0byBzZW5kIGEgZ2l2ZW4gc3RhdGUgZXZlbnQgd2l0aCBvcHRpb25hbCBleHBsaWNpdFxyXG4gICAgICogc3RhdGUga2V5LiBJdCBpcyBub3QgZ3VhcmFudGVlZCB0byBiZSBhbGxvd2VkLCBidXQgd2lsbCBiZSBhc2tlZCBmb3IgaWYgdGhlXHJcbiAgICAgKiBuZWdvdGlhdGlvbiBoYXMgbm90IGFscmVhZHkgaGFwcGVuZWQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIFRoZSBzdGF0ZSBldmVudCB0eXBlIHRvIGFzayBmb3IuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdGVLZXkgSWYgc3BlY2lmaWVkLCB0aGUgc3BlY2lmaWMgc3RhdGUga2V5IHRvIHJlcXVlc3QuXHJcbiAgICAgKiBPdGhlcndpc2UgYWxsIHN0YXRlIGtleXMgd2lsbCBiZSByZXF1ZXN0ZWQuXHJcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJyZXF1ZXN0Q2FwYWJpbGl0eVRvU2VuZFN0YXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3RDYXBhYmlsaXR5VG9TZW5kU3RhdGUoZXZlbnRUeXBlLCBzdGF0ZUtleSkge1xuICAgICAgdGhpcy5yZXF1ZXN0Q2FwYWJpbGl0eShfV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LldpZGdldEV2ZW50Q2FwYWJpbGl0eS5mb3JTdGF0ZUV2ZW50KF9XaWRnZXRFdmVudENhcGFiaWxpdHkuRXZlbnREaXJlY3Rpb24uU2VuZCwgZXZlbnRUeXBlLCBzdGF0ZUtleSkucmF3KTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFJlcXVlc3RzIHRoZSBjYXBhYmlsaXR5IHRvIHJlY2VpdmUgYSBnaXZlbiBzdGF0ZSBldmVudCB3aXRoIG9wdGlvbmFsIGV4cGxpY2l0XHJcbiAgICAgKiBzdGF0ZSBrZXkuIEl0IGlzIG5vdCBndWFyYW50ZWVkIHRvIGJlIGFsbG93ZWQsIGJ1dCB3aWxsIGJlIGFza2VkIGZvciBpZiB0aGVcclxuICAgICAqIG5lZ290aWF0aW9uIGhhcyBub3QgYWxyZWFkeSBoYXBwZW5lZC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgVGhlIHN0YXRlIGV2ZW50IHR5cGUgdG8gYXNrIGZvci5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZUtleSBJZiBzcGVjaWZpZWQsIHRoZSBzcGVjaWZpYyBzdGF0ZSBrZXkgdG8gcmVxdWVzdC5cclxuICAgICAqIE90aGVyd2lzZSBhbGwgc3RhdGUga2V5cyB3aWxsIGJlIHJlcXVlc3RlZC5cclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInJlcXVlc3RDYXBhYmlsaXR5VG9SZWNlaXZlU3RhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdENhcGFiaWxpdHlUb1JlY2VpdmVTdGF0ZShldmVudFR5cGUsIHN0YXRlS2V5KSB7XG4gICAgICB0aGlzLnJlcXVlc3RDYXBhYmlsaXR5KF9XaWRnZXRFdmVudENhcGFiaWxpdHkuV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LmZvclN0YXRlRXZlbnQoX1dpZGdldEV2ZW50Q2FwYWJpbGl0eS5FdmVudERpcmVjdGlvbi5SZWNlaXZlLCBldmVudFR5cGUsIHN0YXRlS2V5KS5yYXcpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogUmVxdWVzdHMgdGhlIGNhcGFiaWxpdHkgdG8gc2VuZCBhIGdpdmVuIHRvLWRldmljZSBldmVudC4gSXQgaXMgbm90XHJcbiAgICAgKiBndWFyYW50ZWVkIHRvIGJlIGFsbG93ZWQsIGJ1dCB3aWxsIGJlIGFza2VkIGZvciBpZiB0aGUgbmVnb3RpYXRpb24gaGFzXHJcbiAgICAgKiBub3QgYWxyZWFkeSBoYXBwZW5lZC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgVGhlIHJvb20gZXZlbnQgdHlwZSB0byBhc2sgZm9yLlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwicmVxdWVzdENhcGFiaWxpdHlUb1NlbmRUb0RldmljZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXF1ZXN0Q2FwYWJpbGl0eVRvU2VuZFRvRGV2aWNlKGV2ZW50VHlwZSkge1xuICAgICAgdGhpcy5yZXF1ZXN0Q2FwYWJpbGl0eShfV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LldpZGdldEV2ZW50Q2FwYWJpbGl0eS5mb3JUb0RldmljZUV2ZW50KF9XaWRnZXRFdmVudENhcGFiaWxpdHkuRXZlbnREaXJlY3Rpb24uU2VuZCwgZXZlbnRUeXBlKS5yYXcpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogUmVxdWVzdHMgdGhlIGNhcGFiaWxpdHkgdG8gcmVjZWl2ZSBhIGdpdmVuIHRvLWRldmljZSBldmVudC4gSXQgaXMgbm90XHJcbiAgICAgKiBndWFyYW50ZWVkIHRvIGJlIGFsbG93ZWQsIGJ1dCB3aWxsIGJlIGFza2VkIGZvciBpZiB0aGUgbmVnb3RpYXRpb24gaGFzXHJcbiAgICAgKiBub3QgYWxyZWFkeSBoYXBwZW5lZC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgVGhlIHJvb20gZXZlbnQgdHlwZSB0byBhc2sgZm9yLlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwicmVxdWVzdENhcGFiaWxpdHlUb1JlY2VpdmVUb0RldmljZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXF1ZXN0Q2FwYWJpbGl0eVRvUmVjZWl2ZVRvRGV2aWNlKGV2ZW50VHlwZSkge1xuICAgICAgdGhpcy5yZXF1ZXN0Q2FwYWJpbGl0eShfV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LldpZGdldEV2ZW50Q2FwYWJpbGl0eS5mb3JUb0RldmljZUV2ZW50KF9XaWRnZXRFdmVudENhcGFiaWxpdHkuRXZlbnREaXJlY3Rpb24uUmVjZWl2ZSwgZXZlbnRUeXBlKS5yYXcpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogUmVxdWVzdHMgdGhlIGNhcGFiaWxpdHkgdG8gc2VuZCBhIGdpdmVuIHJvb20gZXZlbnQuIEl0IGlzIG5vdCBndWFyYW50ZWVkIHRvIGJlXHJcbiAgICAgKiBhbGxvd2VkLCBidXQgd2lsbCBiZSBhc2tlZCBmb3IgaWYgdGhlIG5lZ290aWF0aW9uIGhhcyBub3QgYWxyZWFkeSBoYXBwZW5lZC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgVGhlIHJvb20gZXZlbnQgdHlwZSB0byBhc2sgZm9yLlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwicmVxdWVzdENhcGFiaWxpdHlUb1NlbmRFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXF1ZXN0Q2FwYWJpbGl0eVRvU2VuZEV2ZW50KGV2ZW50VHlwZSkge1xuICAgICAgdGhpcy5yZXF1ZXN0Q2FwYWJpbGl0eShfV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LldpZGdldEV2ZW50Q2FwYWJpbGl0eS5mb3JSb29tRXZlbnQoX1dpZGdldEV2ZW50Q2FwYWJpbGl0eS5FdmVudERpcmVjdGlvbi5TZW5kLCBldmVudFR5cGUpLnJhdyk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXF1ZXN0cyB0aGUgY2FwYWJpbGl0eSB0byByZWNlaXZlIGEgZ2l2ZW4gcm9vbSBldmVudC4gSXQgaXMgbm90IGd1YXJhbnRlZWQgdG8gYmVcclxuICAgICAqIGFsbG93ZWQsIGJ1dCB3aWxsIGJlIGFza2VkIGZvciBpZiB0aGUgbmVnb3RpYXRpb24gaGFzIG5vdCBhbHJlYWR5IGhhcHBlbmVkLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBUaGUgcm9vbSBldmVudCB0eXBlIHRvIGFzayBmb3IuXHJcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJyZXF1ZXN0Q2FwYWJpbGl0eVRvUmVjZWl2ZUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3RDYXBhYmlsaXR5VG9SZWNlaXZlRXZlbnQoZXZlbnRUeXBlKSB7XG4gICAgICB0aGlzLnJlcXVlc3RDYXBhYmlsaXR5KF9XaWRnZXRFdmVudENhcGFiaWxpdHkuV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LmZvclJvb21FdmVudChfV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LkV2ZW50RGlyZWN0aW9uLlJlY2VpdmUsIGV2ZW50VHlwZSkucmF3KTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFJlcXVlc3RzIHRoZSBjYXBhYmlsaXR5IHRvIHNlbmQgYSBnaXZlbiBtZXNzYWdlIGV2ZW50IHdpdGggb3B0aW9uYWwgZXhwbGljaXRcclxuICAgICAqIGBtc2d0eXBlYC4gSXQgaXMgbm90IGd1YXJhbnRlZWQgdG8gYmUgYWxsb3dlZCwgYnV0IHdpbGwgYmUgYXNrZWQgZm9yIGlmIHRoZVxyXG4gICAgICogbmVnb3RpYXRpb24gaGFzIG5vdCBhbHJlYWR5IGhhcHBlbmVkLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1zZ3R5cGUgSWYgc3BlY2lmaWVkLCB0aGUgc3BlY2lmaWMgbXNndHlwZSB0byByZXF1ZXN0LlxyXG4gICAgICogT3RoZXJ3aXNlIGFsbCBtZXNzYWdlIHR5cGVzIHdpbGwgYmUgcmVxdWVzdGVkLlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwicmVxdWVzdENhcGFiaWxpdHlUb1NlbmRNZXNzYWdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3RDYXBhYmlsaXR5VG9TZW5kTWVzc2FnZShtc2d0eXBlKSB7XG4gICAgICB0aGlzLnJlcXVlc3RDYXBhYmlsaXR5KF9XaWRnZXRFdmVudENhcGFiaWxpdHkuV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LmZvclJvb21NZXNzYWdlRXZlbnQoX1dpZGdldEV2ZW50Q2FwYWJpbGl0eS5FdmVudERpcmVjdGlvbi5TZW5kLCBtc2d0eXBlKS5yYXcpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogUmVxdWVzdHMgdGhlIGNhcGFiaWxpdHkgdG8gcmVjZWl2ZSBhIGdpdmVuIG1lc3NhZ2UgZXZlbnQgd2l0aCBvcHRpb25hbCBleHBsaWNpdFxyXG4gICAgICogYG1zZ3R5cGVgLiBJdCBpcyBub3QgZ3VhcmFudGVlZCB0byBiZSBhbGxvd2VkLCBidXQgd2lsbCBiZSBhc2tlZCBmb3IgaWYgdGhlXHJcbiAgICAgKiBuZWdvdGlhdGlvbiBoYXMgbm90IGFscmVhZHkgaGFwcGVuZWQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbXNndHlwZSBJZiBzcGVjaWZpZWQsIHRoZSBzcGVjaWZpYyBtc2d0eXBlIHRvIHJlcXVlc3QuXHJcbiAgICAgKiBPdGhlcndpc2UgYWxsIG1lc3NhZ2UgdHlwZXMgd2lsbCBiZSByZXF1ZXN0ZWQuXHJcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJyZXF1ZXN0Q2FwYWJpbGl0eVRvUmVjZWl2ZU1lc3NhZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdENhcGFiaWxpdHlUb1JlY2VpdmVNZXNzYWdlKG1zZ3R5cGUpIHtcbiAgICAgIHRoaXMucmVxdWVzdENhcGFiaWxpdHkoX1dpZGdldEV2ZW50Q2FwYWJpbGl0eS5XaWRnZXRFdmVudENhcGFiaWxpdHkuZm9yUm9vbU1lc3NhZ2VFdmVudChfV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LkV2ZW50RGlyZWN0aW9uLlJlY2VpdmUsIG1zZ3R5cGUpLnJhdyk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXF1ZXN0cyB0aGUgY2FwYWJpbGl0eSB0byByZWNlaXZlIGEgZ2l2ZW4gaXRlbSBpbiByb29tIGFjY291bnQgZGF0YS4gSXQgaXMgbm90IGd1YXJhbnRlZWQgdG8gYmVcclxuICAgICAqIGFsbG93ZWQsIGJ1dCB3aWxsIGJlIGFza2VkIGZvciBpZiB0aGUgbmVnb3RpYXRpb24gaGFzIG5vdCBhbHJlYWR5IGhhcHBlbmVkLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBUaGUgc3RhdGUgZXZlbnQgdHlwZSB0byBhc2sgZm9yLlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwicmVxdWVzdENhcGFiaWxpdHlUb1JlY2VpdmVSb29tQWNjb3VudERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdENhcGFiaWxpdHlUb1JlY2VpdmVSb29tQWNjb3VudERhdGEoZXZlbnRUeXBlKSB7XG4gICAgICB0aGlzLnJlcXVlc3RDYXBhYmlsaXR5KF9XaWRnZXRFdmVudENhcGFiaWxpdHkuV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LmZvclJvb21BY2NvdW50RGF0YShfV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LkV2ZW50RGlyZWN0aW9uLlJlY2VpdmUsIGV2ZW50VHlwZSkucmF3KTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFJlcXVlc3RzIGFuIE9wZW5JRCBDb25uZWN0IHRva2VuIGZyb20gdGhlIGNsaWVudCBmb3IgdGhlIGN1cnJlbnRseSBsb2dnZWQgaW5cclxuICAgICAqIHVzZXIuIFRoaXMgdG9rZW4gY2FuIGJlIHZhbGlkYXRlZCBzZXJ2ZXItc2lkZSB3aXRoIHRoZSBmZWRlcmF0aW9uIEFQSS4gTm90ZVxyXG4gICAgICogdGhhdCB0aGUgd2lkZ2V0IGlzIHJlc3BvbnNpYmxlIGZvciB2YWxpZGF0aW5nIHRoZSB0b2tlbiBhbmQgY2FjaGluZyBhbnkgcmVzdWx0c1xyXG4gICAgICogaXQgbmVlZHMuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJT3BlbklEQ3JlZGVudGlhbHM+fSBSZXNvbHZlcyB0byBhIHRva2VuIGZvciB2ZXJpZmljYXRpb24uXHJcbiAgICAgKiBAdGhyb3dzIFRocm93cyBpZiB0aGUgdXNlciByZWplY3RlZCB0aGUgcmVxdWVzdCBvciB0aGUgcmVxdWVzdCBmYWlsZWQuXHJcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJyZXF1ZXN0T3BlbklEQ29ubmVjdFRva2VuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3RPcGVuSURDb25uZWN0VG9rZW4oKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIF90aGlzNS50cmFuc3BvcnQuc2VuZENvbXBsZXRlKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5HZXRPcGVuSURDcmVkZW50aWFscywge30pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgdmFyIHJkYXRhID0gcmVzcG9uc2UucmVzcG9uc2U7XG4gICAgICAgICAgaWYgKHJkYXRhLnN0YXRlID09PSBfR2V0T3BlbklEQWN0aW9uLk9wZW5JRFJlcXVlc3RTdGF0ZS5BbGxvd2VkKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJkYXRhKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJkYXRhLnN0YXRlID09PSBfR2V0T3BlbklEQWN0aW9uLk9wZW5JRFJlcXVlc3RTdGF0ZS5CbG9ja2VkKSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVXNlciBkZWNsaW5lZCB0byB2ZXJpZnkgdGhlaXIgaWRlbnRpdHlcIikpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmRhdGEuc3RhdGUgPT09IF9HZXRPcGVuSURBY3Rpb24uT3BlbklEUmVxdWVzdFN0YXRlLlBlbmRpbmdVc2VyQ29uZmlybWF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlckZuID0gZnVuY3Rpb24gaGFuZGxlckZuKGV2KSB7XG4gICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gZXYuZGV0YWlsO1xuICAgICAgICAgICAgICBpZiAocmVxdWVzdC5kYXRhLm9yaWdpbmFsX3JlcXVlc3RfaWQgIT09IHJlc3BvbnNlLnJlcXVlc3RJZCkgcmV0dXJuO1xuICAgICAgICAgICAgICBpZiAocmVxdWVzdC5kYXRhLnN0YXRlID09PSBfR2V0T3BlbklEQWN0aW9uLk9wZW5JRFJlcXVlc3RTdGF0ZS5BbGxvd2VkKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LmRhdGEpO1xuICAgICAgICAgICAgICAgIF90aGlzNS50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge30pOyAvLyBhY2tcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmRhdGEuc3RhdGUgPT09IF9HZXRPcGVuSURBY3Rpb24uT3BlbklEUmVxdWVzdFN0YXRlLkJsb2NrZWQpIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVXNlciBkZWNsaW5lZCB0byB2ZXJpZnkgdGhlaXIgaWRlbnRpdHlcIikpO1xuICAgICAgICAgICAgICAgIF90aGlzNS50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge30pOyAvLyBhY2tcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBzdGF0ZSBvbiByZXBseTogXCIgKyByZGF0YS5zdGF0ZSkpO1xuICAgICAgICAgICAgICAgIF90aGlzNS50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJbnZhbGlkIHN0YXRlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfdGhpczUub2ZmKFwiYWN0aW9uOlwiLmNvbmNhdChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaVRvV2lkZ2V0QWN0aW9uLk9wZW5JRENyZWRlbnRpYWxzKSwgaGFuZGxlckZuKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfdGhpczUub24oXCJhY3Rpb246XCIuY29uY2F0KF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24uT3BlbklEQ3JlZGVudGlhbHMpLCBoYW5kbGVyRm4pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBzdGF0ZTogXCIgKyByZGF0YS5zdGF0ZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBBc2tzIHRoZSBjbGllbnQgZm9yIGFkZGl0aW9uYWwgY2FwYWJpbGl0aWVzLiBDYXBhYmlsaXRpZXMgY2FuIGJlIHF1ZXVlZCBmb3IgdGhpc1xyXG4gICAgICogcmVxdWVzdCB3aXRoIHRoZSByZXF1ZXN0Q2FwYWJpbGl0eSgpIGZ1bmN0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXNvbHZlcyB3aGVuIGNvbXBsZXRlLiBOb3RlIHRoYXQgdGhlIHByb21pc2UgcmVzb2x2ZXMgd2hlblxyXG4gICAgICogdGhlIGNhcGFiaWxpdGllcyByZXF1ZXN0IGhhcyBnb25lIHRocm91Z2gsIG5vdCB3aGVuIHRoZSBjYXBhYmlsaXRpZXMgYXJlIGFwcHJvdmVkL2RlbmllZC5cclxuICAgICAqIFVzZSB0aGUgV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24uTm90aWZ5Q2FwYWJpbGl0aWVzIGFjdGlvbiB0byBkZXRlY3QgY2hhbmdlcy5cclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVJlcXVlc3RlZENhcGFiaWxpdGllc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVSZXF1ZXN0ZWRDYXBhYmlsaXRpZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uTVNDMjk3NFJlbmVnb3RpYXRlQ2FwYWJpbGl0aWVzLCB7XG4gICAgICAgIGNhcGFiaWxpdGllczogdGhpcy5yZXF1ZXN0ZWRDYXBhYmlsaXRpZXNcbiAgICAgIH0pLnRoZW4oKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFRlbGwgdGhlIGNsaWVudCB0aGF0IHRoZSBjb250ZW50IGhhcyBiZWVuIGxvYWRlZC5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXNvbHZlcyB3aGVuIHRoZSBjbGllbnQgYWNrbm93bGVkZ2VzIHRoZSByZXF1ZXN0LlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwic2VuZENvbnRlbnRMb2FkZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZENvbnRlbnRMb2FkZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uQ29udGVudExvYWRlZCwge30pLnRoZW4oKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFNlbmRzIGEgc3RpY2tlciB0byB0aGUgY2xpZW50LlxyXG4gICAgICogQHBhcmFtIHtJU3RpY2tlckFjdGlvblJlcXVlc3REYXRhfSBzdGlja2VyIFRoZSBzdGlja2VyIHRvIHNlbmQuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmVzb2x2ZXMgd2hlbiB0aGUgY2xpZW50IGFja25vd2xlZGdlcyB0aGUgcmVxdWVzdC5cclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInNlbmRTdGlja2VyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmRTdGlja2VyKHN0aWNrZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5TZW5kU3RpY2tlciwgc3RpY2tlcikudGhlbigpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQXNrcyB0aGUgY2xpZW50IHRvIHNldCB0aGUgYWx3YXlzLW9uLXNjcmVlbiBzdGF0dXMgZm9yIHRoaXMgd2lkZ2V0LlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZSBUaGUgbmV3IHN0YXRlIHRvIHJlcXVlc3QuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmVzb2x2ZSB3aXRoIHRydWUgaWYgdGhlIGNsaWVudCB3YXMgYWJsZSB0byBmdWxmaWxsXHJcbiAgICAgKiB0aGUgcmVxdWVzdCwgcmVzb2x2ZXMgdG8gZmFsc2Ugb3RoZXJ3aXNlLiBSZWplY3RzIGlmIGFuIGVycm9yIG9jY3VycmVkLlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0QWx3YXlzT25TY3JlZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0QWx3YXlzT25TY3JlZW4odmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5VcGRhdGVBbHdheXNPblNjcmVlbiwge1xuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICByZXR1cm4gcmVzLnN1Y2Nlc3M7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIE9wZW5zIGEgbW9kYWwgd2lkZ2V0LlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRoZSBtb2RhbCB3aWRnZXQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgd2lkZ2V0LlxyXG4gICAgICogQHBhcmFtIHtJTW9kYWxXaWRnZXRPcGVuUmVxdWVzdERhdGFCdXR0b25bXX0gYnV0dG9ucyBUaGUgYnV0dG9ucyB0byBoYXZlIG9uIHRoZSB3aWRnZXQuXHJcbiAgICAgKiBAcGFyYW0ge0lNb2RhbFdpZGdldENyZWF0ZURhdGF9IGRhdGEgRGF0YSB0byBzdXBwbHkgdG8gdGhlIG1vZGFsIHdpZGdldC5cclxuICAgICAqIEBwYXJhbSB7V2lkZ2V0VHlwZX0gdHlwZSBUaGUgdHlwZSBvZiBtb2RhbCB3aWRnZXQuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUmVzb2x2ZXMgd2hlbiB0aGUgbW9kYWwgd2lkZ2V0IGhhcyBiZWVuIG9wZW5lZC5cclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIm9wZW5Nb2RhbFdpZGdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuTW9kYWxXaWRnZXQodXJsLCBuYW1lKSB7XG4gICAgICB2YXIgYnV0dG9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogW107XG4gICAgICB2YXIgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgICB2YXIgdHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogX1dpZGdldFR5cGUuTWF0cml4V2lkZ2V0VHlwZS5DdXN0b207XG4gICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uT3Blbk1vZGFsV2lkZ2V0LCB7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBidXR0b25zOiBidXR0b25zLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KS50aGVuKCk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZXMgdGhlIG1vZGFsIHdpZGdldC4gVGhlIHdpZGdldCdzIHNlc3Npb24gd2lsbCBiZSB0ZXJtaW5hdGVkIHNob3J0bHkgYWZ0ZXIuXHJcbiAgICAgKiBAcGFyYW0ge0lNb2RhbFdpZGdldFJldHVybkRhdGF9IGRhdGEgT3B0aW9uYWwgZGF0YSB0byBjbG9zZSB0aGUgbW9kYWwgd2lkZ2V0IHdpdGguXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUmVzb2x2ZXMgd2hlbiBjb21wbGV0ZS5cclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImNsb3NlTW9kYWxXaWRnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VNb2RhbFdpZGdldCgpIHtcbiAgICAgIHZhciBkYXRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5DbG9zZU1vZGFsV2lkZ2V0LCBkYXRhKS50aGVuKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNlbmRSb29tRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZFJvb21FdmVudChldmVudFR5cGUsIGNvbnRlbnQsIHJvb21JZCwgZGVsYXksIHBhcmVudERlbGF5SWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbmRFdmVudChldmVudFR5cGUsIHVuZGVmaW5lZCwgY29udGVudCwgcm9vbUlkLCBkZWxheSwgcGFyZW50RGVsYXlJZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNlbmRTdGF0ZUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmRTdGF0ZUV2ZW50KGV2ZW50VHlwZSwgc3RhdGVLZXksIGNvbnRlbnQsIHJvb21JZCwgZGVsYXksIHBhcmVudERlbGF5SWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbmRFdmVudChldmVudFR5cGUsIHN0YXRlS2V5LCBjb250ZW50LCByb29tSWQsIGRlbGF5LCBwYXJlbnREZWxheUlkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2VuZEV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmRFdmVudChldmVudFR5cGUsIHN0YXRlS2V5LCBjb250ZW50LCByb29tSWQsIGRlbGF5LCBwYXJlbnREZWxheUlkKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uU2VuZEV2ZW50LCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgdHlwZTogZXZlbnRUeXBlLFxuICAgICAgICBjb250ZW50OiBjb250ZW50XG4gICAgICB9LCBzdGF0ZUtleSAhPT0gdW5kZWZpbmVkICYmIHtcbiAgICAgICAgc3RhdGVfa2V5OiBzdGF0ZUtleVxuICAgICAgfSksIHJvb21JZCAhPT0gdW5kZWZpbmVkICYmIHtcbiAgICAgICAgcm9vbV9pZDogcm9vbUlkXG4gICAgICB9KSwgZGVsYXkgIT09IHVuZGVmaW5lZCAmJiB7XG4gICAgICAgIGRlbGF5OiBkZWxheVxuICAgICAgfSksIHBhcmVudERlbGF5SWQgIT09IHVuZGVmaW5lZCAmJiB7XG4gICAgICAgIHBhcmVudF9kZWxheV9pZDogcGFyZW50RGVsYXlJZFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgVGhpcyBjdXJyZW50bHkgcmVsaWVzIG9uIGFuIHVuc3RhYmxlIE1TQyAoTVNDNDE1NykuXHJcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVEZWxheWVkRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRGVsYXllZEV2ZW50KGRlbGF5SWQsIGFjdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnNlbmQoX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLk1TQzQxNTdVcGRhdGVEZWxheWVkRXZlbnQsIHtcbiAgICAgICAgZGVsYXlfaWQ6IGRlbGF5SWQsXG4gICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFNlbmRzIGEgdG8tZGV2aWNlIGV2ZW50LlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBUaGUgdHlwZSBvZiBldmVudHMgYmVpbmcgc2VudC5cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5jcnlwdGVkIFdoZXRoZXIgdG8gZW5jcnlwdCB0aGUgbWVzc2FnZSBjb250ZW50cy5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZW50TWFwIEEgbWFwIGZyb20gdXNlciBJRHMgdG8gZGV2aWNlIElEcyB0byBtZXNzYWdlIGNvbnRlbnRzLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8SVNlbmRUb0RldmljZUZyb21XaWRnZXRSZXNwb25zZURhdGE+fSBSZXNvbHZlcyB3aGVuIGNvbXBsZXRlLlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwic2VuZFRvRGV2aWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmRUb0RldmljZShldmVudFR5cGUsIGVuY3J5cHRlZCwgY29udGVudE1hcCkge1xuICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnNlbmQoX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLlNlbmRUb0RldmljZSwge1xuICAgICAgICB0eXBlOiBldmVudFR5cGUsXG4gICAgICAgIGVuY3J5cHRlZDogZW5jcnlwdGVkLFxuICAgICAgICBtZXNzYWdlczogY29udGVudE1hcFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlYWRSb29tQWNjb3VudERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZFJvb21BY2NvdW50RGF0YShldmVudFR5cGUsIHJvb21JZHMpIHtcbiAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICB0eXBlOiBldmVudFR5cGVcbiAgICAgIH07XG4gICAgICBpZiAocm9vbUlkcykge1xuICAgICAgICBpZiAocm9vbUlkcy5pbmNsdWRlcyhfU3ltYm9scy5TeW1ib2xzLkFueVJvb20pKSB7XG4gICAgICAgICAgZGF0YS5yb29tX2lkcyA9IF9TeW1ib2xzLlN5bWJvbHMuQW55Um9vbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhLnJvb21faWRzID0gcm9vbUlkcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnNlbmQoX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLkJlZXBlclJlYWRSb29tQWNjb3VudERhdGEsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgcmV0dXJuIHIuZXZlbnRzO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlYWRSb29tRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWRSb29tRXZlbnRzKGV2ZW50VHlwZSwgbGltaXQsIG1zZ3R5cGUsIHJvb21JZHMsIHNpbmNlKSB7XG4gICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgdHlwZTogZXZlbnRUeXBlLFxuICAgICAgICBtc2d0eXBlOiBtc2d0eXBlXG4gICAgICB9O1xuICAgICAgaWYgKGxpbWl0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGF0YS5saW1pdCA9IGxpbWl0O1xuICAgICAgfVxuICAgICAgaWYgKHJvb21JZHMpIHtcbiAgICAgICAgaWYgKHJvb21JZHMuaW5jbHVkZXMoX1N5bWJvbHMuU3ltYm9scy5BbnlSb29tKSkge1xuICAgICAgICAgIGRhdGEucm9vbV9pZHMgPSBfU3ltYm9scy5TeW1ib2xzLkFueVJvb207XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGF0YS5yb29tX2lkcyA9IHJvb21JZHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzaW5jZSkge1xuICAgICAgICBkYXRhLnNpbmNlID0gc2luY2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uTVNDMjg3NlJlYWRFdmVudHMsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgcmV0dXJuIHIuZXZlbnRzO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBSZWFkcyBhbGwgcmVsYXRlZCBldmVudHMgZ2l2ZW4gYSBrbm93biBldmVudElkLlxyXG4gICAgICogQHBhcmFtIGV2ZW50SWQgVGhlIGlkIG9mIHRoZSBwYXJlbnQgZXZlbnQgdG8gYmUgcmVhZC5cclxuICAgICAqIEBwYXJhbSByb29tSWQgVGhlIHJvb20gdG8gbG9vayB3aXRoaW4uIFdoZW4gdW5kZWZpbmVkLCB0aGUgdXNlcidzIGN1cnJlbnRseVxyXG4gICAgICogdmlld2VkIHJvb20uXHJcbiAgICAgKiBAcGFyYW0gcmVsYXRpb25UeXBlIFRoZSByZWxhdGlvbnNoaXAgdHlwZSBvZiBjaGlsZCBldmVudHMgdG8gc2VhcmNoIGZvci5cclxuICAgICAqIFdoZW4gdW5kZWZpbmVkLCBhbGwgcmVsYXRpb25zIGFyZSByZXR1cm5lZC5cclxuICAgICAqIEBwYXJhbSBldmVudFR5cGUgVGhlIGV2ZW50IHR5cGUgb2YgY2hpbGQgZXZlbnRzIHRvIHNlYXJjaCBmb3IuIFdoZW4gdW5kZWZpbmVkLFxyXG4gICAgICogYWxsIHJlbGF0ZWQgZXZlbnRzIGFyZSByZXR1cm5lZC5cclxuICAgICAqIEBwYXJhbSBsaW1pdCBUaGUgbWF4aW11bSBudW1iZXIgb2YgZXZlbnRzIHRvIHJldHJpZXZlIHBlciByb29tLiBJZiBub3RcclxuICAgICAqIHN1cHBsaWVkLCB0aGUgc2VydmVyIHdpbGwgYXBwbHkgYSBkZWZhdWx0IGxpbWl0LlxyXG4gICAgICogQHBhcmFtIGZyb20gVGhlIHBhZ2luYXRpb24gdG9rZW4gdG8gc3RhcnQgcmV0dXJuaW5nIHJlc3VsdHMgZnJvbSwgYXNcclxuICAgICAqIHJlY2VpdmVkIGZyb20gYSBwcmV2aW91cyBjYWxsLiBJZiBub3Qgc3VwcGxpZWQsIHJlc3VsdHMgc3RhcnQgYXQgdGhlIG1vc3RcclxuICAgICAqIHJlY2VudCB0b3BvbG9naWNhbCBldmVudCBrbm93biB0byB0aGUgc2VydmVyLlxyXG4gICAgICogQHBhcmFtIHRvIFRoZSBwYWdpbmF0aW9uIHRva2VuIHRvIHN0b3AgcmV0dXJuaW5nIHJlc3VsdHMgYXQuIElmIG5vdFxyXG4gICAgICogc3VwcGxpZWQsIHJlc3VsdHMgY29udGludWUgdXAgdG8gbGltaXQgb3IgdW50aWwgdGhlcmUgYXJlIG5vIG1vcmUgZXZlbnRzLlxyXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIHRvIHNlYXJjaCBmb3IgYWNjb3JkaW5nIHRvIE1TQzM3MTUuXHJcbiAgICAgKiBAcmV0dXJucyBSZXNvbHZlcyB0byB0aGUgcm9vbSByZWxhdGlvbnMuXHJcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJyZWFkRXZlbnRSZWxhdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWFkRXZlbnRSZWxhdGlvbnMgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUoKS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoZXZlbnRJZCwgcm9vbUlkLCByZWxhdGlvblR5cGUsIGV2ZW50VHlwZSwgbGltaXQsIGZyb20sIHRvLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIHZlcnNpb25zLCBkYXRhO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZSgpLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2xpZW50VmVyc2lvbnMoKTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgdmVyc2lvbnMgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICBpZiAodmVyc2lvbnMuaW5jbHVkZXMoX0FwaVZlcnNpb24uVW5zdGFibGVBcGlWZXJzaW9uLk1TQzM4NjkpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHJlYWRfcmVsYXRpb25zIGFjdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBjbGllbnQuXCIpO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGV2ZW50X2lkOiBldmVudElkLFxuICAgICAgICAgICAgICAgIHJlbF90eXBlOiByZWxhdGlvblR5cGUsXG4gICAgICAgICAgICAgICAgZXZlbnRfdHlwZTogZXZlbnRUeXBlLFxuICAgICAgICAgICAgICAgIHJvb21faWQ6IHJvb21JZCxcbiAgICAgICAgICAgICAgICB0bzogdG8sXG4gICAgICAgICAgICAgICAgZnJvbTogZnJvbSxcbiAgICAgICAgICAgICAgICBsaW1pdDogbGltaXQsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5NU0MzODY5UmVhZFJlbGF0aW9ucywgZGF0YSkpO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgICB9KSk7XG4gICAgICBmdW5jdGlvbiByZWFkRXZlbnRSZWxhdGlvbnMoX3gsIF94MiwgX3gzLCBfeDQsIF94NSwgX3g2LCBfeDcsIF94OCkge1xuICAgICAgICByZXR1cm4gX3JlYWRFdmVudFJlbGF0aW9ucy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlYWRFdmVudFJlbGF0aW9ucztcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogXCJyZWFkU3RhdGVFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZFN0YXRlRXZlbnRzKGV2ZW50VHlwZSwgbGltaXQsIHN0YXRlS2V5LCByb29tSWRzKSB7XG4gICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgdHlwZTogZXZlbnRUeXBlLFxuICAgICAgICBzdGF0ZV9rZXk6IHN0YXRlS2V5ID09PSB1bmRlZmluZWQgPyB0cnVlIDogc3RhdGVLZXlcbiAgICAgIH07XG4gICAgICBpZiAobGltaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkYXRhLmxpbWl0ID0gbGltaXQ7XG4gICAgICB9XG4gICAgICBpZiAocm9vbUlkcykge1xuICAgICAgICBpZiAocm9vbUlkcy5pbmNsdWRlcyhfU3ltYm9scy5TeW1ib2xzLkFueVJvb20pKSB7XG4gICAgICAgICAgZGF0YS5yb29tX2lkcyA9IF9TeW1ib2xzLlN5bWJvbHMuQW55Um9vbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhLnJvb21faWRzID0gcm9vbUlkcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnNlbmQoX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLk1TQzI4NzZSZWFkRXZlbnRzLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIHJldHVybiByLmV2ZW50cztcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogU2V0cyBhIGJ1dHRvbiBhcyBkaXNhYmxlZCBvciBlbmFibGVkIG9uIHRoZSBtb2RhbCB3aWRnZXQuIEJ1dHRvbnMgYXJlIGVuYWJsZWQgYnkgZGVmYXVsdC5cclxuICAgICAqIEBwYXJhbSB7TW9kYWxCdXR0b25JRH0gYnV0dG9uSWQgVGhlIGJ1dHRvbiBJRCB0byBlbmFibGUvZGlzYWJsZS5cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNFbmFibGVkIFdoZXRoZXIgb3Igbm90IHRoZSBidXR0b24gaXMgZW5hYmxlZC5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXNvbHZlcyB3aGVuIGNvbXBsZXRlLlxyXG4gICAgICogQHRocm93cyBUaHJvd3MgaWYgdGhlIGJ1dHRvbiBjYW5ub3QgYmUgZGlzYWJsZWQsIG9yIHRoZSBjbGllbnQgcmVmdXNlcyB0byBkaXNhYmxlIHRoZSBidXR0b24uXHJcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJzZXRNb2RhbEJ1dHRvbkVuYWJsZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0TW9kYWxCdXR0b25FbmFibGVkKGJ1dHRvbklkLCBpc0VuYWJsZWQpIHtcbiAgICAgIGlmIChidXR0b25JZCA9PT0gX01vZGFsV2lkZ2V0QWN0aW9ucy5CdWlsdEluTW9kYWxCdXR0b25JRC5DbG9zZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY2xvc2UgYnV0dG9uIGNhbm5vdCBiZSBkaXNhYmxlZFwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5TZXRNb2RhbEJ1dHRvbkVuYWJsZWQsIHtcbiAgICAgICAgYnV0dG9uOiBidXR0b25JZCxcbiAgICAgICAgZW5hYmxlZDogaXNFbmFibGVkXG4gICAgICB9KS50aGVuKCk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBBdHRlbXB0cyB0byBuYXZpZ2F0ZSB0aGUgY2xpZW50IHRvIHRoZSBnaXZlbiBVUkkuIFRoaXMgY2FuIG9ubHkgYmUgY2FsbGVkIHdpdGggTWF0cml4IFVSSXNcclxuICAgICAqIChjdXJyZW50bHkgb25seSBtYXRyaXgudG8sIGJ1dCBpbiBmdXR1cmUgYSBNYXRyaXggVVJJIHNjaGVtZSB3aWxsIGJlIGRlZmluZWQpLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVyaSBUaGUgVVJJIHRvIG5hdmlnYXRlIHRvLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IFJlc29sdmVzIHdoZW4gY29tcGxldGUuXHJcbiAgICAgKiBAdGhyb3dzIFRocm93cyBpZiB0aGUgVVJJIGlzIGludmFsaWQgb3IgY2Fubm90IGJlIHByb2Nlc3NlZC5cclxuICAgICAqIEBkZXByZWNhdGVkIFRoaXMgY3VycmVudGx5IHJlbGllcyBvbiBhbiB1bnN0YWJsZSBNU0MgKE1TQzI5MzEpLlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwibmF2aWdhdGVUb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuYXZpZ2F0ZVRvKHVyaSkge1xuICAgICAgaWYgKCF1cmkgfHwgIXVyaS5zdGFydHNXaXRoKFwiaHR0cHM6Ly9tYXRyaXgudG8vI1wiKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG1hdHJpeC50byBVUklcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uTVNDMjkzMU5hdmlnYXRlLCB7XG4gICAgICAgIHVyaTogdXJpXG4gICAgICB9KS50aGVuKCk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydHMgd2F0Y2hpbmcgZm9yIFRVUk4gc2VydmVycywgeWllbGRpbmcgYW4gaW5pdGlhbCBzZXQgb2YgY3JlZGVudGlhbHMgYXMgc29vbiBhcyBwb3NzaWJsZSxcclxuICAgICAqIGFuZCB0aGVyZWFmdGVyIHlpZWxkaW5nIG5ldyBjcmVkZW50aWFscyB3aGVuZXZlciB0aGUgcHJldmlvdXMgb25lcyBleHBpcmUuXHJcbiAgICAgKiBAeWllbGRzIHtJVHVyblNlcnZlcn0gVGhlIFRVUk4gc2VydmVyIFVSSXMgYW5kIGNyZWRlbnRpYWxzIGN1cnJlbnRseSBhdmFpbGFibGUgdG8gdGhlIHdpZGdldC5cclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImdldFR1cm5TZXJ2ZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFR1cm5TZXJ2ZXJzKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHJldHVybiBfd3JhcEFzeW5jR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZSgpLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTMoKSB7XG4gICAgICAgIHZhciBzZXRUdXJuU2VydmVyLCBvblVwZGF0ZVR1cm5TZXJ2ZXJzO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZSgpLndyYXAoZnVuY3Rpb24gX2NhbGxlZTMkKF9jb250ZXh0Mykge1xuICAgICAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0My5wcmV2ID0gX2NvbnRleHQzLm5leHQpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgb25VcGRhdGVUdXJuU2VydmVycyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUoKS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyKGV2KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZSgpLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFR1cm5TZXJ2ZXIoZXYuZGV0YWlsLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnRyYW5zcG9ydC5yZXBseShldi5kZXRhaWwsIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sIF9jYWxsZWUyKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uVXBkYXRlVHVyblNlcnZlcnMoX3g5KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0oKTsgLy8gU3RhcnQgbGlzdGVuaW5nIGZvciB1cGRhdGVzIGJlZm9yZSB3ZSBldmVuIHN0YXJ0IHdhdGNoaW5nLCB0byBjYXRjaFxuICAgICAgICAgICAgICAvLyBUVVJOIGRhdGEgdGhhdCBpcyBzZW50IGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgIF90aGlzLm9uKFwiYWN0aW9uOlwiLmNvbmNhdChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaVRvV2lkZ2V0QWN0aW9uLlVwZGF0ZVR1cm5TZXJ2ZXJzKSwgb25VcGRhdGVUdXJuU2VydmVycyk7XG5cbiAgICAgICAgICAgICAgLy8gT25seSBzZW5kIHRoZSAnd2F0Y2gnIGFjdGlvbiBpZiB3ZSBhcmVuJ3QgYWxyZWFkeSB3YXRjaGluZ1xuICAgICAgICAgICAgICBpZiAoIShfdGhpcy50dXJuU2VydmVyV2F0Y2hlcnMgPT09IDApKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAxMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfY29udGV4dDMucHJldiA9IDM7XG4gICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gNjtcbiAgICAgICAgICAgICAgcmV0dXJuIF9hd2FpdEFzeW5jR2VuZXJhdG9yKF90aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5XYXRjaFR1cm5TZXJ2ZXJzLCB7fSkpO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDEyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgX2NvbnRleHQzLnByZXYgPSA4O1xuICAgICAgICAgICAgICBfY29udGV4dDMudDAgPSBfY29udGV4dDNbXCJjYXRjaFwiXSgzKTtcbiAgICAgICAgICAgICAgX3RoaXMub2ZmKFwiYWN0aW9uOlwiLmNvbmNhdChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaVRvV2lkZ2V0QWN0aW9uLlVwZGF0ZVR1cm5TZXJ2ZXJzKSwgb25VcGRhdGVUdXJuU2VydmVycyk7XG4gICAgICAgICAgICAgIHRocm93IF9jb250ZXh0My50MDtcbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgIF90aGlzLnR1cm5TZXJ2ZXJXYXRjaGVycysrO1xuICAgICAgICAgICAgICBfY29udGV4dDMucHJldiA9IDEzO1xuICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgaWYgKCF0cnVlKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDE3O1xuICAgICAgICAgICAgICByZXR1cm4gX2F3YWl0QXN5bmNHZW5lcmF0b3IobmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VHVyblNlcnZlciA9IHJlc29sdmU7XG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMTk7XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuc2VudDtcbiAgICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMTQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgICAgX2NvbnRleHQzLnByZXYgPSAyMTtcbiAgICAgICAgICAgICAgLy8gVGhlIGxvb3Agd2FzIGJyb2tlbiBieSB0aGUgY2FsbGVyIC0gY2xlYW4gdXBcbiAgICAgICAgICAgICAgX3RoaXMub2ZmKFwiYWN0aW9uOlwiLmNvbmNhdChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaVRvV2lkZ2V0QWN0aW9uLlVwZGF0ZVR1cm5TZXJ2ZXJzKSwgb25VcGRhdGVUdXJuU2VydmVycyk7XG5cbiAgICAgICAgICAgICAgLy8gU2luY2Ugc2VuZGluZyB0aGUgJ3Vud2F0Y2gnIGFjdGlvbiB3aWxsIGVuZCB1cGRhdGVzIGZvciBhbGwgb3RoZXJcbiAgICAgICAgICAgICAgLy8gY29uc3VtZXJzLCBvbmx5IHNlbmQgaXQgaWYgd2UncmUgdGhlIG9ubHkgY29uc3VtZXIgcmVtYWluaW5nXG4gICAgICAgICAgICAgIF90aGlzLnR1cm5TZXJ2ZXJXYXRjaGVycy0tO1xuICAgICAgICAgICAgICBpZiAoIShfdGhpcy50dXJuU2VydmVyV2F0Y2hlcnMgPT09IDApKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyNztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDI3O1xuICAgICAgICAgICAgICByZXR1cm4gX2F3YWl0QXN5bmNHZW5lcmF0b3IoX3RoaXMudHJhbnNwb3J0LnNlbmQoX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLlVud2F0Y2hUdXJuU2VydmVycywge30pKTtcbiAgICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuZmluaXNoKDIxKTtcbiAgICAgICAgICAgIGNhc2UgMjg6XG4gICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTMsIG51bGwsIFtbMywgOF0sIFsxMywsIDIxLCAyOF1dKTtcbiAgICAgIH0pKSgpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogU2VhcmNoIGZvciB1c2VycyBpbiB0aGUgdXNlciBkaXJlY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gc2VhcmNoVGVybSBUaGUgdGVybSB0byBzZWFyY2ggZm9yLlxyXG4gICAgICogQHBhcmFtIGxpbWl0IFRoZSBtYXhpbXVtIG51bWJlciBvZiByZXN1bHRzIHRvIHJldHVybi4gSWYgbm90IHN1cHBsaWVkLCB0aGVcclxuICAgICAqIEByZXR1cm5zIFJlc29sdmVzIHRvIHRoZSBzZWFyY2ggcmVzdWx0cy5cclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInNlYXJjaFVzZXJEaXJlY3RvcnlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9zZWFyY2hVc2VyRGlyZWN0b3J5ID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lKCkubWFyayhmdW5jdGlvbiBfY2FsbGVlNChzZWFyY2hUZXJtLCBsaW1pdCkge1xuICAgICAgICB2YXIgdmVyc2lvbnMsIGRhdGE7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lKCkud3JhcChmdW5jdGlvbiBfY2FsbGVlNCQoX2NvbnRleHQ0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQ0LnByZXYgPSBfY29udGV4dDQubmV4dCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDI7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENsaWVudFZlcnNpb25zKCk7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIHZlcnNpb25zID0gX2NvbnRleHQ0LnNlbnQ7XG4gICAgICAgICAgICAgIGlmICh2ZXJzaW9ucy5pbmNsdWRlcyhfQXBpVmVyc2lvbi5VbnN0YWJsZUFwaVZlcnNpb24uTVNDMzk3MykpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHVzZXJfZGlyZWN0b3J5X3NlYXJjaCBhY3Rpb24gaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgY2xpZW50LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBzZWFyY2hfdGVybTogc2VhcmNoVGVybSxcbiAgICAgICAgICAgICAgICBsaW1pdDogbGltaXRcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NC5hYnJ1cHQoXCJyZXR1cm5cIiwgdGhpcy50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uTVNDMzk3M1VzZXJEaXJlY3RvcnlTZWFyY2gsIGRhdGEpKTtcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NC5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlNCwgdGhpcyk7XG4gICAgICB9KSk7XG4gICAgICBmdW5jdGlvbiBzZWFyY2hVc2VyRGlyZWN0b3J5KF94MTAsIF94MTEpIHtcbiAgICAgICAgcmV0dXJuIF9zZWFyY2hVc2VyRGlyZWN0b3J5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VhcmNoVXNlckRpcmVjdG9yeTtcbiAgICB9KClcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY29uZmlnIGZvciB0aGUgbWVkaWEgcmVwb3NpdG9yeS5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgd2l0aCBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgY29uZmlnLlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0TWVkaWFDb25maWdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9nZXRNZWRpYUNvbmZpZyA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZSgpLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTUoKSB7XG4gICAgICAgIHZhciB2ZXJzaW9ucywgZGF0YTtcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUoKS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU1JChfY29udGV4dDUpIHtcbiAgICAgICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dDUucHJldiA9IF9jb250ZXh0NS5uZXh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2xpZW50VmVyc2lvbnMoKTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgdmVyc2lvbnMgPSBfY29udGV4dDUuc2VudDtcbiAgICAgICAgICAgICAgaWYgKHZlcnNpb25zLmluY2x1ZGVzKF9BcGlWZXJzaW9uLlVuc3RhYmxlQXBpVmVyc2lvbi5NU0M0MDM5KSkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZ2V0X21lZGlhX2NvbmZpZyBhY3Rpb24gaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgY2xpZW50LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgZGF0YSA9IHt9O1xuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LmFicnVwdChcInJldHVyblwiLCB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5NU0M0MDM5R2V0TWVkaWFDb25maWdBY3Rpb24sIGRhdGEpKTtcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlNSwgdGhpcyk7XG4gICAgICB9KSk7XG4gICAgICBmdW5jdGlvbiBnZXRNZWRpYUNvbmZpZygpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRNZWRpYUNvbmZpZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGdldE1lZGlhQ29uZmlnO1xuICAgIH0oKVxuICAgIC8qKlxyXG4gICAgICogVXBsb2FkIGEgZmlsZSB0byB0aGUgbWVkaWEgcmVwb3NpdG9yeSBvbiB0aGUgaG9tZXNlcnZlci5cclxuICAgICAqIEBwYXJhbSBmaWxlIC0gVGhlIG9iamVjdCB0byB1cGxvYWQuIFNvbWV0aGluZyB0aGF0IGNhbiBiZSBzZW50IHRvXHJcbiAgICAgKiAgICAgICAgICAgICAgIFhNTEh0dHBSZXF1ZXN0LnNlbmQgKHR5cGljYWxseSBhIEZpbGUpLlxyXG4gICAgICogQHJldHVybnMgUmVzb2x2ZXMgdG8gdGhlIGxvY2F0aW9uIG9mIHRoZSB1cGxvYWRlZCBmaWxlLlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwidXBsb2FkRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3VwbG9hZEZpbGUgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUoKS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU2KGZpbGUpIHtcbiAgICAgICAgdmFyIHZlcnNpb25zLCBkYXRhO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZSgpLndyYXAoZnVuY3Rpb24gX2NhbGxlZTYkKF9jb250ZXh0Nikge1xuICAgICAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0Ni5wcmV2ID0gX2NvbnRleHQ2Lm5leHQpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgX2NvbnRleHQ2Lm5leHQgPSAyO1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDbGllbnRWZXJzaW9ucygpO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICB2ZXJzaW9ucyA9IF9jb250ZXh0Ni5zZW50O1xuICAgICAgICAgICAgICBpZiAodmVyc2lvbnMuaW5jbHVkZXMoX0FwaVZlcnNpb24uVW5zdGFibGVBcGlWZXJzaW9uLk1TQzQwMzkpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ2Lm5leHQgPSA1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSB1cGxvYWRfZmlsZSBhY3Rpb24gaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgY2xpZW50LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBmaWxlOiBmaWxlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuYWJydXB0KFwicmV0dXJuXCIsIHRoaXMudHJhbnNwb3J0LnNlbmQoX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLk1TQzQwMzlVcGxvYWRGaWxlQWN0aW9uLCBkYXRhKSk7XG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTYsIHRoaXMpO1xuICAgICAgfSkpO1xuICAgICAgZnVuY3Rpb24gdXBsb2FkRmlsZShfeDEyKSB7XG4gICAgICAgIHJldHVybiBfdXBsb2FkRmlsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVwbG9hZEZpbGU7XG4gICAgfSgpXG4gICAgLyoqXHJcbiAgICAgKiBEb3dubG9hZCBhIGZpbGUgZnJvbSB0aGUgbWVkaWEgcmVwb3NpdG9yeSBvbiB0aGUgaG9tZXNlcnZlci5cclxuICAgICAqIEBwYXJhbSBjb250ZW50VXJpIC0gTVhDIFVSSSBvZiB0aGUgZmlsZSB0byBkb3dubG9hZC5cclxuICAgICAqIEByZXR1cm5zIFJlc29sdmVzIHRvIHRoZSBjb250ZW50cyBvZiB0aGUgZmlsZS5cclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImRvd25sb2FkRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2Rvd25sb2FkRmlsZSA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZSgpLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTcoY29udGVudFVyaSkge1xuICAgICAgICB2YXIgdmVyc2lvbnMsIGRhdGE7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lKCkud3JhcChmdW5jdGlvbiBfY2FsbGVlNyQoX2NvbnRleHQ3KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQ3LnByZXYgPSBfY29udGV4dDcubmV4dCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBfY29udGV4dDcubmV4dCA9IDI7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENsaWVudFZlcnNpb25zKCk7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIHZlcnNpb25zID0gX2NvbnRleHQ3LnNlbnQ7XG4gICAgICAgICAgICAgIGlmICh2ZXJzaW9ucy5pbmNsdWRlcyhfQXBpVmVyc2lvbi5VbnN0YWJsZUFwaVZlcnNpb24uTVNDNDAzOSkpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dDcubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGRvd25sb2FkX2ZpbGUgYWN0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGNsaWVudC5cIik7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgY29udGVudF91cmk6IGNvbnRlbnRVcmlcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ny5hYnJ1cHQoXCJyZXR1cm5cIiwgdGhpcy50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uTVNDNDAzOURvd25sb2FkRmlsZUFjdGlvbiwgZGF0YSkpO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ3LnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWU3LCB0aGlzKTtcbiAgICAgIH0pKTtcbiAgICAgIGZ1bmN0aW9uIGRvd25sb2FkRmlsZShfeDEzKSB7XG4gICAgICAgIHJldHVybiBfZG93bmxvYWRGaWxlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZG93bmxvYWRGaWxlO1xuICAgIH0oKVxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIHRoZSBjb21tdW5pY2F0aW9uIGNoYW5uZWwuIFRoaXMgc2hvdWxkIGJlIGRvbmUgZWFybHkgdG8gZW5zdXJlXHJcbiAgICAgKiB0aGF0IG1lc3NhZ2VzIGFyZSBub3QgbWlzc2VkLiBDb21tdW5pY2F0aW9uIGNhbiBvbmx5IGJlIHN0b3BwZWQgYnkgdGhlIGNsaWVudC5cclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInN0YXJ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG4gICAgICB0aGlzLnRyYW5zcG9ydC5zdGFydCgpO1xuICAgICAgdGhpcy5nZXRDbGllbnRWZXJzaW9ucygpLnRoZW4oZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHYuaW5jbHVkZXMoX0FwaVZlcnNpb24uVW5zdGFibGVBcGlWZXJzaW9uLk1TQzI5NzQpKSB7XG4gICAgICAgICAgX3RoaXM2LnN1cHBvcnRzTVNDMjk3NFJlbmVnb3RpYXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZU1lc3NhZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldikge1xuICAgICAgdmFyIGFjdGlvbkV2ID0gbmV3IEN1c3RvbUV2ZW50KFwiYWN0aW9uOlwiLmNvbmNhdChldi5kZXRhaWwuYWN0aW9uKSwge1xuICAgICAgICBkZXRhaWw6IGV2LmRldGFpbCxcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmVtaXQoXCJhY3Rpb246XCIuY29uY2F0KGV2LmRldGFpbC5hY3Rpb24pLCBhY3Rpb25Fdik7XG4gICAgICBpZiAoIWFjdGlvbkV2LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgc3dpdGNoIChldi5kZXRhaWwuYWN0aW9uKSB7XG4gICAgICAgICAgY2FzZSBfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaVRvV2lkZ2V0QWN0aW9uLlN1cHBvcnRlZEFwaVZlcnNpb25zOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVwbHlWZXJzaW9ucyhldi5kZXRhaWwpO1xuICAgICAgICAgIGNhc2UgX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlUb1dpZGdldEFjdGlvbi5DYXBhYmlsaXRpZXM6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDYXBhYmlsaXRpZXMoZXYuZGV0YWlsKTtcbiAgICAgICAgICBjYXNlIF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24uVXBkYXRlVmlzaWJpbGl0eTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5yZXBseShldi5kZXRhaWwsIHt9KTtcbiAgICAgICAgICAvLyBhY2sgdG8gYXZvaWQgZXJyb3Igc3BhbVxuICAgICAgICAgIGNhc2UgX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlUb1dpZGdldEFjdGlvbi5Ob3RpZnlDYXBhYmlsaXRpZXM6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkoZXYuZGV0YWlsLCB7fSk7XG4gICAgICAgICAgLy8gYWNrIHRvIGF2b2lkIGVycm9yIHNwYW1cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KGV2LmRldGFpbCwge1xuICAgICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVW5rbm93biBvciB1bnN1cHBvcnRlZCBhY3Rpb246IFwiICsgZXYuZGV0YWlsLmFjdGlvblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXBseVZlcnNpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcGx5VmVyc2lvbnMocmVxdWVzdCkge1xuICAgICAgdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICBzdXBwb3J0ZWRfdmVyc2lvbnM6IF9BcGlWZXJzaW9uLkN1cnJlbnRBcGlWZXJzaW9uc1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldENsaWVudFZlcnNpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENsaWVudFZlcnNpb25zKCkge1xuICAgICAgdmFyIF90aGlzNyA9IHRoaXM7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmNhY2hlZENsaWVudFZlcnNpb25zKSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuY2FjaGVkQ2xpZW50VmVyc2lvbnMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnNlbmQoX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLlN1cHBvcnRlZEFwaVZlcnNpb25zLCB7fSkudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICBfdGhpczcuY2FjaGVkQ2xpZW50VmVyc2lvbnMgPSByLnN1cHBvcnRlZF92ZXJzaW9ucztcbiAgICAgICAgcmV0dXJuIHIuc3VwcG9ydGVkX3ZlcnNpb25zO1xuICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJub24tZmF0YWwgZXJyb3IgZ2V0dGluZyBzdXBwb3J0ZWQgY2xpZW50IHZlcnNpb25zOiBcIiwgZSk7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVDYXBhYmlsaXRpZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2FwYWJpbGl0aWVzKHJlcXVlc3QpIHtcbiAgICAgIHZhciBfdGhpczggPSB0aGlzO1xuICAgICAgaWYgKHRoaXMuY2FwYWJpbGl0aWVzRmluaXNoZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgbWVzc2FnZTogXCJDYXBhYmlsaXR5IG5lZ290aWF0aW9uIGFscmVhZHkgY29tcGxldGVkXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBTZWUgaWYgd2UgY2FuIGV4cGVjdCBhIGNhcGFiaWxpdGllcyBub3RpZmljYXRpb24gb3Igbm90XG4gICAgICByZXR1cm4gdGhpcy5nZXRDbGllbnRWZXJzaW9ucygpLnRoZW4oZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHYuaW5jbHVkZXMoX0FwaVZlcnNpb24uVW5zdGFibGVBcGlWZXJzaW9uLk1TQzI4NzEpKSB7XG4gICAgICAgICAgX3RoaXM4Lm9uY2UoXCJhY3Rpb246XCIuY29uY2F0KF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24uTm90aWZ5Q2FwYWJpbGl0aWVzKSwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBfdGhpczguYXBwcm92ZWRDYXBhYmlsaXRpZXMgPSBldi5kZXRhaWwuZGF0YS5hcHByb3ZlZDtcbiAgICAgICAgICAgIF90aGlzOC5lbWl0KFwicmVhZHlcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gaWYgd2UgY2FuJ3QgZXhwZWN0IG5vdGlmaWNhdGlvbiwgd2UncmUgYXMgZG9uZSBhcyB3ZSBjYW4gYmVcbiAgICAgICAgICBfdGhpczguZW1pdChcInJlYWR5XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW4gZWl0aGVyIGNhc2UsIHJlcGx5IHRvIHRoYXQgY2FwYWJpbGl0aWVzIHJlcXVlc3RcbiAgICAgICAgX3RoaXM4LmNhcGFiaWxpdGllc0ZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzOC50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgIGNhcGFiaWxpdGllczogX3RoaXM4LnJlcXVlc3RlZENhcGFiaWxpdGllc1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gV2lkZ2V0QXBpO1xufShfZXZlbnRzLkV2ZW50RW1pdHRlcik7XG5leHBvcnRzLldpZGdldEFwaSA9IFdpZGdldEFwaTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdpZGdldEFwaS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuV2lkZ2V0RHJpdmVyID0gdm9pZCAwO1xudmFyIF8gPSByZXF1aXJlKFwiLi5cIik7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH0gLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIENvcHlyaWdodCAyMDIwIC0gMjAyNCBUaGUgTWF0cml4Lm9yZyBGb3VuZGF0aW9uIEMuSS5DLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qKlxyXG4gKiBSZXByZXNlbnRzIHRoZSBmdW5jdGlvbnMgYW5kIGJlaGF2aW91ciB0aGUgd2lkZ2V0LWFwaSBpcyB1bmFibGUgdG9cclxuICogZG8sIHN1Y2ggYXMgcHJvbXB0aW5nIHRoZSB1c2VyIGZvciBpbmZvcm1hdGlvbiBvciBpbnRlcmFjdGluZyB3aXRoXHJcbiAqIHRoZSBVSS4gQ2xpZW50cyBhcmUgZXhwZWN0ZWQgdG8gaW1wbGVtZW50IHRoaXMgY2xhc3MgYW5kIG92ZXJyaWRlXHJcbiAqIGFueSBmdW5jdGlvbnMgdGhleSBuZWVkL3dhbnQgdG8gc3VwcG9ydC5cclxuICpcclxuICogVGhpcyBjbGFzcyBhc3N1bWVzIHRoZSBjbGllbnQgd2lsbCBoYXZlIGEgY29udGV4dCBvZiBhIFdpZGdldFxyXG4gKiBpbnN0YW5jZSBhbHJlYWR5LlxyXG4gKi9cbnZhciBXaWRnZXREcml2ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBXaWRnZXREcml2ZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdpZGdldERyaXZlcik7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKFdpZGdldERyaXZlciwgW3tcbiAgICBrZXk6IFwidmFsaWRhdGVDYXBhYmlsaXRpZXNcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcclxuICAgICAqIFZlcmlmaWVzIHRoZSB3aWRnZXQncyByZXF1ZXN0ZWQgY2FwYWJpbGl0aWVzLCByZXR1cm5pbmcgdGhlIG9uZXNcclxuICAgICAqIGl0IGlzIGFwcHJvdmVkIHRvIHVzZS4gTXV0YXRpbmcgdGhlIHJlcXVlc3RlZCBjYXBhYmlsaXRpZXMgd2lsbFxyXG4gICAgICogaGF2ZSBubyBlZmZlY3QuXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBTSE9VTEQgcmVzdWx0IGluIHRoZSB1c2VyIGJlaW5nIHByb21wdGVkIHRvIGFwcHJvdmUvZGVueVxyXG4gICAgICogY2FwYWJpbGl0aWVzLlxyXG4gICAgICpcclxuICAgICAqIEJ5IGRlZmF1bHQgdGhpcyByZWplY3RzIGFsbCBjYXBhYmlsaXRpZXMgKHJldHVybnMgYW4gZW1wdHkgc2V0KS5cclxuICAgICAqIEBwYXJhbSB7U2V0PENhcGFiaWxpdHk+fSByZXF1ZXN0ZWQgVGhlIHNldCBvZiByZXF1ZXN0ZWQgY2FwYWJpbGl0aWVzLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8U2V0PENhcGFiaWxpdHk+Pn0gUmVzb2x2ZXMgdG8gdGhlIGFsbG93ZWQgY2FwYWJpbGl0aWVzLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVDYXBhYmlsaXRpZXMocmVxdWVzdGVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBTZXQoKSk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kcyBhbiBldmVudCBpbnRvIGEgcm9vbS4gSWYgYHJvb21JZGAgaXMgZmFsc3ksIHRoZSBjbGllbnQgc2hvdWxkIHNlbmQgdGhlIGV2ZW50XHJcbiAgICAgKiBpbnRvIHRoZSByb29tIHRoZSB1c2VyIGlzIGN1cnJlbnRseSBsb29raW5nIGF0LiBUaGUgd2lkZ2V0IEFQSSB3aWxsIGhhdmUgYWxyZWFkeVxyXG4gICAgICogdmVyaWZpZWQgdGhhdCB0aGUgd2lkZ2V0IGlzIGNhcGFibGUgb2Ygc2VuZGluZyB0aGUgZXZlbnQgdG8gdGhhdCByb29tLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBUaGUgZXZlbnQgdHlwZSB0byBiZSBzZW50LlxyXG4gICAgICogQHBhcmFtIHsqfSBjb250ZW50IFRoZSBjb250ZW50IGZvciB0aGUgZXZlbnQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBzdGF0ZUtleSBUaGUgc3RhdGUga2V5IGlmIHRoaXMgaXMgYSBzdGF0ZSBldmVudCwgb3RoZXJ3aXNlIG51bGwuXHJcbiAgICAgKiBNYXkgYmUgYW4gZW1wdHkgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gcm9vbUlkIFRoZSByb29tIElEIHRvIHNlbmQgdGhlIGV2ZW50IHRvLiBJZiBmYWxzeSwgdGhlIHJvb20gdGhlXHJcbiAgICAgKiB1c2VyIGlzIGN1cnJlbnRseSBsb29raW5nIGF0LlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8SVNlbmRFdmVudERldGFpbHM+fSBSZXNvbHZlcyB3aGVuIHRoZSBldmVudCBoYXMgYmVlbiBzZW50IHdpdGhcclxuICAgICAqIGRldGFpbHMgb2YgdGhhdCBldmVudC5cclxuICAgICAqIEB0aHJvd3MgUmVqZWN0ZWQgd2hlbiB0aGUgZXZlbnQgY291bGQgbm90IGJlIHNlbnQuXHJcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJzZW5kRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZEV2ZW50KGV2ZW50VHlwZSwgY29udGVudCkge1xuICAgICAgdmFyIHN0YXRlS2V5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuICAgICAgdmFyIHJvb21JZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogbnVsbDtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gb3ZlcnJpZGUgZnVuY3Rpb25cIikpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQGV4cGVyaW1lbnRhbCBQYXJ0IG9mIE1TQzQxNDAgJiBNU0M0MTU3XHJcbiAgICAgKiBTZW5kcyBhIGRlbGF5ZWQgZXZlbnQgaW50byBhIHJvb20uIElmIGByb29tSWRgIGlzIGZhbHN5LCB0aGUgY2xpZW50IHNob3VsZCBzZW5kIGl0XHJcbiAgICAgKiBpbnRvIHRoZSByb29tIHRoZSB1c2VyIGlzIGN1cnJlbnRseSBsb29raW5nIGF0LiBUaGUgd2lkZ2V0IEFQSSB3aWxsIGhhdmUgYWxyZWFkeVxyXG4gICAgICogdmVyaWZpZWQgdGhhdCB0aGUgd2lkZ2V0IGlzIGNhcGFibGUgb2Ygc2VuZGluZyB0aGUgZXZlbnQgdG8gdGhhdCByb29tLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ8bnVsbH0gZGVsYXkgSG93IG11Y2ggbGF0ZXIgdG8gc2VuZCB0aGUgZXZlbnQsIG9yIG51bGwgdG8gbm90IHNlbmQgdGhlXHJcbiAgICAgKiBldmVudCBhdXRvbWF0aWNhbGx5LiBNYXkgbm90IGJlIG51bGwgaWYge0BsaW5rIHBhcmVudERlbGF5SWR9IGlzIG51bGwuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBwYXJlbnREZWxheUlkIFRoZSBJRCBvZiB0aGUgZGVsYXllZCBldmVudCB0aGlzIG9uZSBpcyBncm91cGVkIHdpdGgsXHJcbiAgICAgKiBvciBudWxsIGlmIGl0IHdpbGwgYmUgcHV0IGluIGEgbmV3IGdyb3VwLiBNYXkgbm90IGJlIG51bGwgaWYge0BsaW5rIGRlbGF5fSBpcyBudWxsLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBUaGUgZXZlbnQgdHlwZSBvZiB0aGUgZXZlbnQgdG8gYmUgc2VudC5cclxuICAgICAqIEBwYXJhbSB7Kn0gY29udGVudCBUaGUgY29udGVudCBmb3IgdGhlIGV2ZW50IHRvIGJlIHNlbnQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBzdGF0ZUtleSBUaGUgc3RhdGUga2V5IGlmIHRoZSBldmVudCB0byBiZSBzZW50IGEgc3RhdGUgZXZlbnQsXHJcbiAgICAgKiBvdGhlcndpc2UgbnVsbC4gTWF5IGJlIGFuIGVtcHR5IHN0cmluZy5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IHJvb21JZCBUaGUgcm9vbSBJRCB0byBzZW5kIHRoZSBldmVudCB0by4gSWYgZmFsc3ksIHRoZSByb29tIHRoZVxyXG4gICAgICogdXNlciBpcyBjdXJyZW50bHkgbG9va2luZyBhdC5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPElTZW5kRGVsYXllZEV2ZW50RGV0YWlscz59IFJlc29sdmVzIHdoZW4gdGhlIGRlbGF5ZWQgZXZlbnQgaGFzIGJlZW5cclxuICAgICAqIHByZXBhcmVkIHdpdGggZGV0YWlscyBvZiBob3cgdG8gcmVmZXIgdG8gaXQgZm9yIHVwZGF0aW5nL3NlbmRpbmcvY2FuY2VsaW5nIGl0IGxhdGVyLlxyXG4gICAgICogQHRocm93cyBSZWplY3RlZCB3aGVuIHRoZSBkZWxheWVkIGV2ZW50IGNvdWxkIG5vdCBiZSBzZW50LlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwic2VuZERlbGF5ZWRFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kRGVsYXllZEV2ZW50KGRlbGF5LCBwYXJlbnREZWxheUlkLCBldmVudFR5cGUsIGNvbnRlbnQpIHtcbiAgICAgIHZhciBzdGF0ZUtleSA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogbnVsbDtcbiAgICAgIHZhciByb29tSWQgPSBhcmd1bWVudHMubGVuZ3RoID4gNSAmJiBhcmd1bWVudHNbNV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s1XSA6IG51bGw7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIG92ZXJyaWRlIGZ1bmN0aW9uXCIpKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEBleHBlcmltZW50YWwgUGFydCBvZiBNU0M0MTQwICYgTVNDNDE1N1xyXG4gICAgICogUnVuIHRoZSBzcGVjaWZpZWQge0BsaW5rIGFjdGlvbn0gZm9yIHRoZSBkZWxheWVkIGV2ZW50IG1hdGNoaW5nIHRoZSBwcm92aWRlZCB7QGxpbmsgZGVsYXlJZH0uXHJcbiAgICAgKiBAdGhyb3dzIFJlamVjdGVkIHdoZW4gdGhlcmUgaXMgbm8gbWF0Y2hpbmcgZGVsYXllZCBldmVudCwgb3Igd2hlbiB0aGUgYWN0aW9uIGZhaWxlZCB0byBydW4uXHJcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVEZWxheWVkRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRGVsYXllZEV2ZW50KGRlbGF5SWQsIGFjdGlvbikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byBvdmVycmlkZSBmdW5jdGlvblwiKSk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kcyBhIHRvLWRldmljZSBldmVudC4gVGhlIHdpZGdldCBBUEkgd2lsbCBoYXZlIGFscmVhZHkgdmVyaWZpZWQgdGhhdCB0aGUgd2lkZ2V0XHJcbiAgICAgKiBpcyBjYXBhYmxlIG9mIHNlbmRpbmcgdGhlIGV2ZW50LlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBUaGUgZXZlbnQgdHlwZSB0byBiZSBzZW50LlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBlbmNyeXB0ZWQgV2hldGhlciB0byBlbmNyeXB0IHRoZSBtZXNzYWdlIGNvbnRlbnRzLlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRlbnRNYXAgQSBtYXAgZnJvbSB1c2VyIElEIGFuZCBkZXZpY2UgSUQgdG8gZXZlbnQgY29udGVudC5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXNvbHZlcyB3aGVuIHRoZSBldmVudCBoYXMgYmVlbiBzZW50LlxyXG4gICAgICogQHRocm93cyBSZWplY3RlZCB3aGVuIHRoZSBldmVudCBjb3VsZCBub3QgYmUgc2VudC5cclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInNlbmRUb0RldmljZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kVG9EZXZpY2UoZXZlbnRUeXBlLCBlbmNyeXB0ZWQsIGNvbnRlbnRNYXApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gb3ZlcnJpZGUgZnVuY3Rpb25cIikpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFJlYWRzIGFuIGVsZW1lbnQgb2Ygcm9vbSBhY2NvdW50IGRhdGEuIFRoZSB3aWRnZXQgQVBJIHdpbGwgaGF2ZSBhbHJlYWR5IHZlcmlmaWVkIHRoYXQgdGhlIHdpZGdldCBpc1xyXG4gICAgICogY2FwYWJsZSBvZiByZWNlaXZpbmcgdGhlIGBldmVudFR5cGVgIG9mIHRoZSByZXF1ZXN0ZWQgaW5mb3JtYXRpb24uIElmIGByb29tSWRzYCBpcyBzdXBwbGllZCwgaXQgbWF5XHJcbiAgICAgKiBjb250YWluIGBTeW1ib2xzLkFueVJvb21gIHRvIGRlbm90ZSB0aGF0IHRoZSBwaWVjZSBvZiByb29tIGFjY291bnQgZGF0YSBpbiBlYWNoIG9mIHRoZSBjbGllbnQncyBrbm93blxyXG4gICAgICogcm9vbXMgc2hvdWxkIGJlIHJldHVybmVkLiBXaGVuIGBudWxsYCwgb25seSB0aGUgcm9vbSB0aGUgdXNlciBpcyBjdXJyZW50bHkgbG9va2luZyBhdCBzaG91bGQgYmUgY29uc2lkZXJlZC5cclxuICAgICAqIEBwYXJhbSBldmVudFR5cGUgVGhlIGV2ZW50IHR5cGUgdG8gYmUgcmVhZC5cclxuICAgICAqIEBwYXJhbSByb29tSWRzIFdoZW4gbnVsbCwgdGhlIHVzZXIncyBjdXJyZW50bHkgdmlld2VkIHJvb20uIE90aGVyd2lzZSwgdGhlIGxpc3Qgb2Ygcm9vbSBJRHNcclxuICAgICAqIHRvIGxvb2sgd2l0aGluLCBwb3NzaWJseSBjb250YWluaW5nIFN5bWJvbHMuQW55Um9vbSB0byBkZW5vdGUgYWxsIGtub3duIHJvb21zLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8SVJvb21BY2NvdW50RGF0YVtdPn0gUmVzb2x2ZXMgdG8gdGhlIGVsZW1lbnQgb2Ygcm9vbSBhY2NvdW50IGRhdGEsIG9yIGFuIGVtcHR5IGFycmF5LlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwicmVhZFJvb21BY2NvdW50RGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWFkUm9vbUFjY291bnREYXRhKGV2ZW50VHlwZSkge1xuICAgICAgdmFyIHJvb21JZHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFJlYWRzIGFsbCBldmVudHMgb2YgdGhlIGdpdmVuIHR5cGUsIGFuZCBvcHRpb25hbGx5IGBtc2d0eXBlYCAoaWYgYXBwbGljYWJsZS9kZWZpbmVkKSxcclxuICAgICAqIHRoZSB1c2VyIGhhcyBhY2Nlc3MgdG8uIFRoZSB3aWRnZXQgQVBJIHdpbGwgaGF2ZSBhbHJlYWR5IHZlcmlmaWVkIHRoYXQgdGhlIHdpZGdldCBpc1xyXG4gICAgICogY2FwYWJsZSBvZiByZWNlaXZpbmcgdGhlIGV2ZW50cy4gTGVzcyBldmVudHMgdGhhbiB0aGUgbGltaXQgYXJlIGFsbG93ZWQgdG8gYmUgcmV0dXJuZWQsXHJcbiAgICAgKiBidXQgbm90IG1vcmUuIElmIGByb29tSWRzYCBpcyBzdXBwbGllZCwgaXQgbWF5IGNvbnRhaW4gYFN5bWJvbHMuQW55Um9vbWAgdG8gZGVub3RlIHRoYXRcclxuICAgICAqIGBsaW1pdGAgaW4gZWFjaCBvZiB0aGUgY2xpZW50J3Mga25vd24gcm9vbXMgc2hvdWxkIGJlIHJldHVybmVkLiBXaGVuIGBudWxsYCwgb25seSB0aGVcclxuICAgICAqIHJvb20gdGhlIHVzZXIgaXMgY3VycmVudGx5IGxvb2tpbmcgYXQgc2hvdWxkIGJlIGNvbnNpZGVyZWQuIElmIGBzaW5jZWAgaXMgc3BlY2lmaWVkIGJ1dFxyXG4gICAgICogdGhlIGV2ZW50IElEIGlzbid0IHByZXNlbnQgaW4gdGhlIG51bWJlciBvZiBldmVudHMgZmV0Y2hlZCBieSB0aGUgY2xpZW50IGR1ZSB0byBgbGltaXRgLFxyXG4gICAgICogdGhlIGNsaWVudCB3aWxsIHJldHVybiBhbGwgdGhlIGV2ZW50cy5cclxuICAgICAqIEBwYXJhbSBldmVudFR5cGUgVGhlIGV2ZW50IHR5cGUgdG8gYmUgcmVhZC5cclxuICAgICAqIEBwYXJhbSBtc2d0eXBlIFRoZSBtc2d0eXBlIG9mIHRoZSBldmVudHMgdG8gYmUgcmVhZCwgaWYgYXBwbGljYWJsZS9kZWZpbmVkLlxyXG4gICAgICogQHBhcmFtIGxpbWl0IFRoZSBtYXhpbXVtIG51bWJlciBvZiBldmVudHMgdG8gcmV0cmlldmUgcGVyIHJvb20uIFdpbGwgYmUgemVybyB0byBkZW5vdGUgXCJhcyBtYW55XHJcbiAgICAgKiBhcyBwb3NzaWJsZVwiLlxyXG4gICAgICogQHBhcmFtIHJvb21JZHMgV2hlbiBudWxsLCB0aGUgdXNlcidzIGN1cnJlbnRseSB2aWV3ZWQgcm9vbS4gT3RoZXJ3aXNlLCB0aGUgbGlzdCBvZiByb29tIElEc1xyXG4gICAgICogdG8gbG9vayB3aXRoaW4sIHBvc3NpYmx5IGNvbnRhaW5pbmcgU3ltYm9scy5BbnlSb29tIHRvIGRlbm90ZSBhbGwga25vd24gcm9vbXMuXHJcbiAgICAgKiBAcGFyYW0gc2luY2UgV2hlbiBudWxsLCByZXRyaWV2ZXMgdGhlIG51bWJlciBvZiBldmVudHMgc3BlY2lmaWVkIGJ5IHRoZSBcImxpbWl0XCIgcGFyYW1ldGVyLlxyXG4gICAgICogT3RoZXJ3aXNlLCB0aGUgZXZlbnQgSUQgYXQgd2hpY2ggb25seSBzdWJzZXF1ZW50IGV2ZW50cyB3aWxsIGJlIHJldHVybmVkLCBhcyBtYW55IGFzIHNwZWNpZmllZFxyXG4gICAgICogaW4gXCJsaW1pdFwiLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8SVJvb21FdmVudFtdPn0gUmVzb2x2ZXMgdG8gdGhlIHJvb20gZXZlbnRzLCBvciBhbiBlbXB0eSBhcnJheS5cclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInJlYWRSb29tRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWRSb29tRXZlbnRzKGV2ZW50VHlwZSwgbXNndHlwZSwgbGltaXQpIHtcbiAgICAgIHZhciByb29tSWRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBudWxsO1xuICAgICAgdmFyIHNpbmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgPyBhcmd1bWVudHNbNF0gOiB1bmRlZmluZWQ7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFJlYWRzIGFsbCBldmVudHMgb2YgdGhlIGdpdmVuIHR5cGUsIGFuZCBvcHRpb25hbGx5IHN0YXRlIGtleSAoaWYgYXBwbGljYWJsZS9kZWZpbmVkKSxcclxuICAgICAqIHRoZSB1c2VyIGhhcyBhY2Nlc3MgdG8uIFRoZSB3aWRnZXQgQVBJIHdpbGwgaGF2ZSBhbHJlYWR5IHZlcmlmaWVkIHRoYXQgdGhlIHdpZGdldCBpc1xyXG4gICAgICogY2FwYWJsZSBvZiByZWNlaXZpbmcgdGhlIGV2ZW50cy4gTGVzcyBldmVudHMgdGhhbiB0aGUgbGltaXQgYXJlIGFsbG93ZWQgdG8gYmUgcmV0dXJuZWQsXHJcbiAgICAgKiBidXQgbm90IG1vcmUuIElmIGByb29tSWRzYCBpcyBzdXBwbGllZCwgaXQgbWF5IGNvbnRhaW4gYFN5bWJvbHMuQW55Um9vbWAgdG8gZGVub3RlIHRoYXRcclxuICAgICAqIGBsaW1pdGAgaW4gZWFjaCBvZiB0aGUgY2xpZW50J3Mga25vd24gcm9vbXMgc2hvdWxkIGJlIHJldHVybmVkLiBXaGVuIGBudWxsYCwgb25seSB0aGVcclxuICAgICAqIHJvb20gdGhlIHVzZXIgaXMgY3VycmVudGx5IGxvb2tpbmcgYXQgc2hvdWxkIGJlIGNvbnNpZGVyZWQuXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRUeXBlIFRoZSBldmVudCB0eXBlIHRvIGJlIHJlYWQuXHJcbiAgICAgKiBAcGFyYW0gc3RhdGVLZXkgVGhlIHN0YXRlIGtleSBvZiB0aGUgZXZlbnRzIHRvIGJlIHJlYWQsIGlmIGFwcGxpY2FibGUvZGVmaW5lZC5cclxuICAgICAqIEBwYXJhbSBsaW1pdCBUaGUgbWF4aW11bSBudW1iZXIgb2YgZXZlbnRzIHRvIHJldHJpZXZlLiBXaWxsIGJlIHplcm8gdG8gZGVub3RlIFwiYXMgbWFueVxyXG4gICAgICogYXMgcG9zc2libGVcIi5cclxuICAgICAqIEBwYXJhbSByb29tSWRzIFdoZW4gbnVsbCwgdGhlIHVzZXIncyBjdXJyZW50bHkgdmlld2VkIHJvb20uIE90aGVyd2lzZSwgdGhlIGxpc3Qgb2Ygcm9vbSBJRHNcclxuICAgICAqIHRvIGxvb2sgd2l0aGluLCBwb3NzaWJseSBjb250YWluaW5nIFN5bWJvbHMuQW55Um9vbSB0byBkZW5vdGUgYWxsIGtub3duIHJvb21zLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8SVJvb21FdmVudFtdPn0gUmVzb2x2ZXMgdG8gdGhlIHN0YXRlIGV2ZW50cywgb3IgYW4gZW1wdHkgYXJyYXkuXHJcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJyZWFkU3RhdGVFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZFN0YXRlRXZlbnRzKGV2ZW50VHlwZSwgc3RhdGVLZXksIGxpbWl0KSB7XG4gICAgICB2YXIgcm9vbUlkcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogbnVsbDtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogUmVhZHMgYWxsIGV2ZW50cyB0aGF0IGFyZSByZWxhdGVkIHRvIGEgZ2l2ZW4gZXZlbnQuIFRoZSB3aWRnZXQgQVBJIHdpbGxcclxuICAgICAqIGhhdmUgYWxyZWFkeSB2ZXJpZmllZCB0aGF0IHRoZSB3aWRnZXQgaXMgY2FwYWJsZSBvZiByZWNlaXZpbmcgdGhlIGV2ZW50LFxyXG4gICAgICogb3Igd2lsbCBtYWtlIHN1cmUgdG8gcmVqZWN0IGFjY2VzcyB0byBldmVudHMgd2hpY2ggYXJlIHJldHVybmVkIGZyb20gdGhpc1xyXG4gICAgICogZnVuY3Rpb24sIGJ1dCBhcmUgbm90IGNhcGFibGUgb2YgcmVjZWl2aW5nLiBJZiBgcmVsYXRpb25UeXBlYCBvciBgZXZlbnRUeXBlYFxyXG4gICAgICogYXJlIHNldCwgdGhlIHJldHVybmVkIGV2ZW50cyBzaG91bGQgYWxyZWFkeSBiZSBmaWx0ZXJlZC4gTGVzcyBldmVudHMgdGhhblxyXG4gICAgICogdGhlIGxpbWl0IGFyZSBhbGxvd2VkIHRvIGJlIHJldHVybmVkLCBidXQgbm90IG1vcmUuXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRJZCBUaGUgaWQgb2YgdGhlIHBhcmVudCBldmVudCB0byBiZSByZWFkLlxyXG4gICAgICogQHBhcmFtIHJvb21JZCBUaGUgcm9vbSB0byBsb29rIHdpdGhpbi4gV2hlbiB1bmRlZmluZWQsIHRoZSB1c2VyJ3NcclxuICAgICAqIGN1cnJlbnRseSB2aWV3ZWQgcm9vbS5cclxuICAgICAqIEBwYXJhbSByZWxhdGlvblR5cGUgVGhlIHJlbGF0aW9uc2hpcCB0eXBlIG9mIGNoaWxkIGV2ZW50cyB0byBzZWFyY2ggZm9yLlxyXG4gICAgICogV2hlbiB1bmRlZmluZWQsIGFsbCByZWxhdGlvbnMgYXJlIHJldHVybmVkLlxyXG4gICAgICogQHBhcmFtIGV2ZW50VHlwZSBUaGUgZXZlbnQgdHlwZSBvZiBjaGlsZCBldmVudHMgdG8gc2VhcmNoIGZvci4gV2hlbiB1bmRlZmluZWQsXHJcbiAgICAgKiBhbGwgcmVsYXRlZCBldmVudHMgYXJlIHJldHVybmVkLlxyXG4gICAgICogQHBhcmFtIGZyb20gVGhlIHBhZ2luYXRpb24gdG9rZW4gdG8gc3RhcnQgcmV0dXJuaW5nIHJlc3VsdHMgZnJvbSwgYXNcclxuICAgICAqIHJlY2VpdmVkIGZyb20gYSBwcmV2aW91cyBjYWxsLiBJZiBub3Qgc3VwcGxpZWQsIHJlc3VsdHMgc3RhcnQgYXQgdGhlIG1vc3RcclxuICAgICAqIHJlY2VudCB0b3BvbG9naWNhbCBldmVudCBrbm93biB0byB0aGUgc2VydmVyLlxyXG4gICAgICogQHBhcmFtIHRvIFRoZSBwYWdpbmF0aW9uIHRva2VuIHRvIHN0b3AgcmV0dXJuaW5nIHJlc3VsdHMgYXQuIElmIG5vdFxyXG4gICAgICogc3VwcGxpZWQsIHJlc3VsdHMgY29udGludWUgdXAgdG8gbGltaXQgb3IgdW50aWwgdGhlcmUgYXJlIG5vIG1vcmUgZXZlbnRzLlxyXG4gICAgICogQHBhcmFtIGxpbWl0IFRoZSBtYXhpbXVtIG51bWJlciBvZiBldmVudHMgdG8gcmV0cmlldmUgcGVyIHJvb20uIElmIG5vdFxyXG4gICAgICogc3VwcGxpZWQsIHRoZSBzZXJ2ZXIgd2lsbCBhcHBseSBhIGRlZmF1bHQgbGltaXQuXHJcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gdG8gc2VhcmNoIGZvciBhY2NvcmRpbmcgdG8gTVNDMzcxNVxyXG4gICAgICogQHJldHVybnMgUmVzb2x2ZXMgdG8gdGhlIHJvb20gcmVsYXRpb25zLlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwicmVhZEV2ZW50UmVsYXRpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWRFdmVudFJlbGF0aW9ucyhldmVudElkLCByb29tSWQsIHJlbGF0aW9uVHlwZSwgZXZlbnRUeXBlLCBmcm9tLCB0bywgbGltaXQsIGRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgIGNodW5rOiBbXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBBc2tzIHRoZSB1c2VyIGZvciBwZXJtaXNzaW9uIHRvIHZhbGlkYXRlIHRoZWlyIGlkZW50aXR5IHRocm91Z2ggT3BlbklEIENvbm5lY3QuIFRoZVxyXG4gICAgICogaW50ZXJmYWNlIGZvciB0aGlzIGZ1bmN0aW9uIGlzIGFuIG9ic2VydmFibGUgd2hpY2ggYWNjZXB0cyB0aGUgc3RhdGUgbWFjaGluZSBvZiB0aGVcclxuICAgICAqIE9JREMgZXhjaGFuZ2UgZmxvdy4gRm9yIGV4YW1wbGUsIGlmIHRoZSBjbGllbnQvdXNlciBibG9ja3MgdGhlIHJlcXVlc3QgdGhlbiBpdCB3b3VsZFxyXG4gICAgICogZmVlZCBiYWNrIGEgYHtzdGF0ZTogQmxvY2tlZH1gIGludG8gdGhlIG9ic2VydmFibGUuIFNpbWlsYXJseSwgaWYgdGhlIHVzZXIgYWxyZWFkeVxyXG4gICAgICogYXBwcm92ZWQgdGhlIHdpZGdldCB0aGVuIGEgYHtzdGF0ZTogQWxsb3dlZH1gIHdvdWxkIGJlIGZlZCBpbnRvIHRoZSBvYnNlcnZhYmxlIGFsb25nc2lkZVxyXG4gICAgICogdGhlIHRva2VuIGl0c2VsZi4gSWYgdGhlIGNsaWVudCBpcyBhc2tpbmcgZm9yIHBlcm1pc3Npb24sIGl0IHNob3VsZCBmZWVkIGluIGFcclxuICAgICAqIGB7c3RhdGU6IFBlbmRpbmdVc2VyQ29uZmlybWF0aW9ufWAgZm9sbG93ZWQgYnkgdGhlIHJlbGV2YW50IEFsbG93ZWQgb3IgQmxvY2tlZCBzdGF0ZS5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgd2lkZ2V0IEFQSSB3aWxsIHJlamVjdCB0aGUgd2lkZ2V0J3MgcmVxdWVzdCB3aXRoIGFuIGVycm9yIGlmIHRoaXMgY29udHJhY3QgaXMgbm90XHJcbiAgICAgKiBtZXQgcHJvcGVybHkuIEJ5IGRlZmF1bHQsIHRoZSB3aWRnZXQgZHJpdmVyIHdpbGwgYmxvY2sgYWxsIE9JREMgcmVxdWVzdHMuXHJcbiAgICAgKiBAcGFyYW0ge1NpbXBsZU9ic2VydmFibGU8SU9wZW5JRFVwZGF0ZT59IG9ic2VydmVyIFRoZSBvYnNlcnZhYmxlIHRvIGZlZWQgdXBkYXRlcyBpbnRvLlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiYXNrT3BlbklEXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFza09wZW5JRChvYnNlcnZlcikge1xuICAgICAgb2JzZXJ2ZXIudXBkYXRlKHtcbiAgICAgICAgc3RhdGU6IF8uT3BlbklEUmVxdWVzdFN0YXRlLkJsb2NrZWRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogTmF2aWdhdGVzIHRoZSBjbGllbnQgd2l0aCBhIG1hdHJpeC50byBVUkkuIEluIGZ1dHVyZSB0aGlzIGZ1bmN0aW9uIHdpbGwgYWxzbyBiZSBwcm92aWRlZFxyXG4gICAgICogd2l0aCB0aGUgTWF0cml4IFVSSXMgb25jZSBtYXRyaXgudG8gaXMgcmVwbGFjZWQuIFRoZSBnaXZlbiBVUkkgd2lsbCBoYXZlIGFscmVhZHkgYmVlblxyXG4gICAgICogbGlnaHRseSBjaGVja2VkIHRvIGVuc3VyZSBpdCBsb29rcyBsaWtlIGEgdmFsaWQgVVJJLCB0aG91Z2ggdGhlIGltcGxlbWVudGF0aW9uIGlzIHJlY29tbWVuZGVkXHJcbiAgICAgKiB0byBkbyBmdXJ0aGVyIGNoZWNrcyBvbiB0aGUgVVJJLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVyaSBUaGUgVVJJIHRvIG5hdmlnYXRlIHRvLlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IFJlc29sdmVzIHdoZW4gY29tcGxldGUuXHJcbiAgICAgKiBAdGhyb3dzIFRocm93cyBpZiB0aGVyZSdzIGEgcHJvYmxlbSB3aXRoIHRoZSBuYXZpZ2F0aW9uLCBzdWNoIGFzIGludmFsaWQgZm9ybWF0LlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwibmF2aWdhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmF2aWdhdGUodXJpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOYXZpZ2F0aW9uIGlzIG5vdCBpbXBsZW1lbnRlZFwiKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFBvbGxzIGZvciBUVVJOIHNlcnZlciBkYXRhLCB5aWVsZGluZyBhbiBpbml0aWFsIHNldCBvZiBjcmVkZW50aWFscyBhcyBzb29uIGFzIHBvc3NpYmxlLCBhbmRcclxuICAgICAqIHRoZXJlYWZ0ZXIgeWllbGRpbmcgbmV3IGNyZWRlbnRpYWxzIHdoZW5ldmVyIHRoZSBwcmV2aW91cyBvbmVzIGV4cGlyZS4gVGhlIHdpZGdldCBBUEkgd2lsbFxyXG4gICAgICogaGF2ZSBhbHJlYWR5IHZlcmlmaWVkIHRoYXQgdGhlIHdpZGdldCBoYXMgcGVybWlzc2lvbiB0byBhY2Nlc3MgVFVSTiBzZXJ2ZXJzLlxyXG4gICAgICogQHlpZWxkcyB7SVR1cm5TZXJ2ZXJ9IFRoZSBUVVJOIHNlcnZlciBVUklzIGFuZCBjcmVkZW50aWFscyBjdXJyZW50bHkgYXZhaWxhYmxlIHRvIHRoZSBjbGllbnQuXHJcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJnZXRUdXJuU2VydmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUdXJuU2VydmVycygpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRVUk4gc2VydmVyIHN1cHBvcnQgaXMgbm90IGltcGxlbWVudGVkXCIpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogU2VhcmNoIGZvciB1c2VycyBpbiB0aGUgdXNlciBkaXJlY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gc2VhcmNoVGVybSBUaGUgdGVybSB0byBzZWFyY2ggZm9yLlxyXG4gICAgICogQHBhcmFtIGxpbWl0IFRoZSBtYXhpbXVtIG51bWJlciBvZiByZXN1bHRzIHRvIHJldHVybi4gSWYgbm90IHN1cHBsaWVkLCB0aGVcclxuICAgICAqIEByZXR1cm5zIFJlc29sdmVzIHRvIHRoZSBzZWFyY2ggcmVzdWx0cy5cclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInNlYXJjaFVzZXJEaXJlY3RvcnlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VhcmNoVXNlckRpcmVjdG9yeShzZWFyY2hUZXJtLCBsaW1pdCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgIGxpbWl0ZWQ6IGZhbHNlLFxuICAgICAgICByZXN1bHRzOiBbXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNvbmZpZyBmb3IgdGhlIG1lZGlhIHJlcG9zaXRvcnkuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHdpdGggYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGNvbmZpZy5cclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImdldE1lZGlhQ29uZmlnXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1lZGlhQ29uZmlnKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2V0IG1lZGlhIGNvbmZpZyBpcyBub3QgaW1wbGVtZW50ZWRcIik7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBVcGxvYWQgYSBmaWxlIHRvIHRoZSBtZWRpYSByZXBvc2l0b3J5IG9uIHRoZSBob21lc2VydmVyLlxyXG4gICAgICogQHBhcmFtIGZpbGUgLSBUaGUgb2JqZWN0IHRvIHVwbG9hZC4gU29tZXRoaW5nIHRoYXQgY2FuIGJlIHNlbnQgdG9cclxuICAgICAqICAgICAgICAgICAgICAgWE1MSHR0cFJlcXVlc3Quc2VuZCAodHlwaWNhbGx5IGEgRmlsZSkuXHJcbiAgICAgKiBAcmV0dXJucyBSZXNvbHZlcyB0byB0aGUgbG9jYXRpb24gb2YgdGhlIHVwbG9hZGVkIGZpbGUuXHJcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJ1cGxvYWRGaWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwbG9hZEZpbGUoZmlsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXBsb2FkIGZpbGUgaXMgbm90IGltcGxlbWVudGVkXCIpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogRG93bmxvYWQgYSBmaWxlIGZyb20gdGhlIG1lZGlhIHJlcG9zaXRvcnkgb24gdGhlIGhvbWVzZXJ2ZXIuXHJcbiAgICAgKiBAcGFyYW0gY29udGVudFVyaSAtIE1YQyBVUkkgb2YgdGhlIGZpbGUgdG8gZG93bmxvYWQuXHJcbiAgICAgKiBAcmV0dXJucyBSZXNvbHZlcyB0byB0aGUgY29udGVudHMgb2YgdGhlIGZpbGUuXHJcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJkb3dubG9hZEZpbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG93bmxvYWRGaWxlKGNvbnRlbnRVcmkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvd25sb2FkIGZpbGUgaXMgbm90IGltcGxlbWVudGVkXCIpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogRXhwcmVzc2VzIGFuIGVycm9yIHRocm93biBieSB0aGlzIGRyaXZlciBpbiBhIGZvcm1hdCBjb21wYXRpYmxlIHdpdGggdGhlIFdpZGdldCBBUEkuXHJcbiAgICAgKiBAcGFyYW0gZXJyb3IgVGhlIGVycm9yIHRvIGhhbmRsZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBlcnJvciBleHByZXNzZWQgYXMgYSB7QGxpbmsgSVdpZGdldEFwaUVycm9yUmVzcG9uc2VEYXRhRGV0YWlsc30sXHJcbiAgICAgKiBvciB1bmRlZmluZWQgaWYgaXQgY2Fubm90IGJlIGV4cHJlc3NlZCBhcyBvbmUuXHJcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJwcm9jZXNzRXJyb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJvY2Vzc0Vycm9yKGVycm9yKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gV2lkZ2V0RHJpdmVyO1xufSgpO1xuZXhwb3J0cy5XaWRnZXREcml2ZXIgPSBXaWRnZXREcml2ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1XaWRnZXREcml2ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgX1dpZGdldEFwaSA9IHJlcXVpcmUoXCIuL1dpZGdldEFwaVwiKTtcbk9iamVjdC5rZXlzKF9XaWRnZXRBcGkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9XaWRnZXRBcGlba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2lkZ2V0QXBpW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xudmFyIF9DbGllbnRXaWRnZXRBcGkgPSByZXF1aXJlKFwiLi9DbGllbnRXaWRnZXRBcGlcIik7XG5PYmplY3Qua2V5cyhfQ2xpZW50V2lkZ2V0QXBpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfQ2xpZW50V2lkZ2V0QXBpW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX0NsaWVudFdpZGdldEFwaVtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfU3ltYm9scyA9IHJlcXVpcmUoXCIuL1N5bWJvbHNcIik7XG5PYmplY3Qua2V5cyhfU3ltYm9scykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX1N5bWJvbHNba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfU3ltYm9sc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfSVRyYW5zcG9ydCA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydC9JVHJhbnNwb3J0XCIpO1xuT2JqZWN0LmtleXMoX0lUcmFuc3BvcnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9JVHJhbnNwb3J0W2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX0lUcmFuc3BvcnRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG52YXIgX1Bvc3RtZXNzYWdlVHJhbnNwb3J0ID0gcmVxdWlyZShcIi4vdHJhbnNwb3J0L1Bvc3RtZXNzYWdlVHJhbnNwb3J0XCIpO1xuT2JqZWN0LmtleXMoX1Bvc3RtZXNzYWdlVHJhbnNwb3J0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfUG9zdG1lc3NhZ2VUcmFuc3BvcnRba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfUG9zdG1lc3NhZ2VUcmFuc3BvcnRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG52YXIgX0lDdXN0b21XaWRnZXREYXRhID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9JQ3VzdG9tV2lkZ2V0RGF0YVwiKTtcbk9iamVjdC5rZXlzKF9JQ3VzdG9tV2lkZ2V0RGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX0lDdXN0b21XaWRnZXREYXRhW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX0lDdXN0b21XaWRnZXREYXRhW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xudmFyIF9JSml0c2lXaWRnZXREYXRhID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9JSml0c2lXaWRnZXREYXRhXCIpO1xuT2JqZWN0LmtleXMoX0lKaXRzaVdpZGdldERhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9JSml0c2lXaWRnZXREYXRhW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX0lKaXRzaVdpZGdldERhdGFba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG52YXIgX0lTdGlja2VycGlja2VyV2lkZ2V0RGF0YSA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvSVN0aWNrZXJwaWNrZXJXaWRnZXREYXRhXCIpO1xuT2JqZWN0LmtleXMoX0lTdGlja2VycGlja2VyV2lkZ2V0RGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX0lTdGlja2VycGlja2VyV2lkZ2V0RGF0YVtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9JU3RpY2tlcnBpY2tlcldpZGdldERhdGFba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG52YXIgX0lXaWRnZXQgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL0lXaWRnZXRcIik7XG5PYmplY3Qua2V5cyhfSVdpZGdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX0lXaWRnZXRba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfSVdpZGdldFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfV2lkZ2V0VHlwZSA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvV2lkZ2V0VHlwZVwiKTtcbk9iamVjdC5rZXlzKF9XaWRnZXRUeXBlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfV2lkZ2V0VHlwZVtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XaWRnZXRUeXBlW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xudmFyIF9JV2lkZ2V0QXBpRXJyb3JSZXNwb25zZSA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvSVdpZGdldEFwaUVycm9yUmVzcG9uc2VcIik7XG5PYmplY3Qua2V5cyhfSVdpZGdldEFwaUVycm9yUmVzcG9uc2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9JV2lkZ2V0QXBpRXJyb3JSZXNwb25zZVtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9JV2lkZ2V0QXBpRXJyb3JSZXNwb25zZVtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfSVdpZGdldEFwaVJlcXVlc3QgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL0lXaWRnZXRBcGlSZXF1ZXN0XCIpO1xuT2JqZWN0LmtleXMoX0lXaWRnZXRBcGlSZXF1ZXN0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfSVdpZGdldEFwaVJlcXVlc3Rba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfSVdpZGdldEFwaVJlcXVlc3Rba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG52YXIgX0lXaWRnZXRBcGlSZXNwb25zZSA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvSVdpZGdldEFwaVJlc3BvbnNlXCIpO1xuT2JqZWN0LmtleXMoX0lXaWRnZXRBcGlSZXNwb25zZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX0lXaWRnZXRBcGlSZXNwb25zZVtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9JV2lkZ2V0QXBpUmVzcG9uc2Vba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG52YXIgX1dpZGdldEFwaUFjdGlvbiA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvV2lkZ2V0QXBpQWN0aW9uXCIpO1xuT2JqZWN0LmtleXMoX1dpZGdldEFwaUFjdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX1dpZGdldEFwaUFjdGlvbltrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XaWRnZXRBcGlBY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG52YXIgX1dpZGdldEFwaURpcmVjdGlvbiA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvV2lkZ2V0QXBpRGlyZWN0aW9uXCIpO1xuT2JqZWN0LmtleXMoX1dpZGdldEFwaURpcmVjdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX1dpZGdldEFwaURpcmVjdGlvbltrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XaWRnZXRBcGlEaXJlY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG52YXIgX0FwaVZlcnNpb24gPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL0FwaVZlcnNpb25cIik7XG5PYmplY3Qua2V5cyhfQXBpVmVyc2lvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX0FwaVZlcnNpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfQXBpVmVyc2lvbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfQ2FwYWJpbGl0aWVzID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9DYXBhYmlsaXRpZXNcIik7XG5PYmplY3Qua2V5cyhfQ2FwYWJpbGl0aWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfQ2FwYWJpbGl0aWVzW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX0NhcGFiaWxpdGllc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfQ2FwYWJpbGl0aWVzQWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9DYXBhYmlsaXRpZXNBY3Rpb25cIik7XG5PYmplY3Qua2V5cyhfQ2FwYWJpbGl0aWVzQWN0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfQ2FwYWJpbGl0aWVzQWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX0NhcGFiaWxpdGllc0FjdGlvbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfQ29udGVudExvYWRlZEFjdGlvbiA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvQ29udGVudExvYWRlZEFjdGlvblwiKTtcbk9iamVjdC5rZXlzKF9Db250ZW50TG9hZGVkQWN0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfQ29udGVudExvYWRlZEFjdGlvbltrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9Db250ZW50TG9hZGVkQWN0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xudmFyIF9TY3JlZW5zaG90QWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9TY3JlZW5zaG90QWN0aW9uXCIpO1xuT2JqZWN0LmtleXMoX1NjcmVlbnNob3RBY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9TY3JlZW5zaG90QWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1NjcmVlbnNob3RBY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG52YXIgX1N0aWNrZXJBY3Rpb24gPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL1N0aWNrZXJBY3Rpb25cIik7XG5PYmplY3Qua2V5cyhfU3RpY2tlckFjdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX1N0aWNrZXJBY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfU3RpY2tlckFjdGlvbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfU3RpY2t5QWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9TdGlja3lBY3Rpb25cIik7XG5PYmplY3Qua2V5cyhfU3RpY2t5QWN0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfU3RpY2t5QWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1N0aWNreUFjdGlvbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfU3VwcG9ydGVkVmVyc2lvbnNBY3Rpb24gPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL1N1cHBvcnRlZFZlcnNpb25zQWN0aW9uXCIpO1xuT2JqZWN0LmtleXMoX1N1cHBvcnRlZFZlcnNpb25zQWN0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfU3VwcG9ydGVkVmVyc2lvbnNBY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfU3VwcG9ydGVkVmVyc2lvbnNBY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG52YXIgX1Zpc2liaWxpdHlBY3Rpb24gPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL1Zpc2liaWxpdHlBY3Rpb25cIik7XG5PYmplY3Qua2V5cyhfVmlzaWJpbGl0eUFjdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX1Zpc2liaWxpdHlBY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfVmlzaWJpbGl0eUFjdGlvbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfR2V0T3BlbklEQWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9HZXRPcGVuSURBY3Rpb25cIik7XG5PYmplY3Qua2V5cyhfR2V0T3BlbklEQWN0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfR2V0T3BlbklEQWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX0dldE9wZW5JREFjdGlvbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfT3BlbklEQ3JlZGVudGlhbHNBY3Rpb24gPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL09wZW5JRENyZWRlbnRpYWxzQWN0aW9uXCIpO1xuT2JqZWN0LmtleXMoX09wZW5JRENyZWRlbnRpYWxzQWN0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfT3BlbklEQ3JlZGVudGlhbHNBY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfT3BlbklEQ3JlZGVudGlhbHNBY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG52YXIgX1dpZGdldEtpbmQgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL1dpZGdldEtpbmRcIik7XG5PYmplY3Qua2V5cyhfV2lkZ2V0S2luZCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX1dpZGdldEtpbmRba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2lkZ2V0S2luZFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfTW9kYWxCdXR0b25LaW5kID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9Nb2RhbEJ1dHRvbktpbmRcIik7XG5PYmplY3Qua2V5cyhfTW9kYWxCdXR0b25LaW5kKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfTW9kYWxCdXR0b25LaW5kW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX01vZGFsQnV0dG9uS2luZFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfTW9kYWxXaWRnZXRBY3Rpb25zID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9Nb2RhbFdpZGdldEFjdGlvbnNcIik7XG5PYmplY3Qua2V5cyhfTW9kYWxXaWRnZXRBY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfTW9kYWxXaWRnZXRBY3Rpb25zW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX01vZGFsV2lkZ2V0QWN0aW9uc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfU2V0TW9kYWxCdXR0b25FbmFibGVkQWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9TZXRNb2RhbEJ1dHRvbkVuYWJsZWRBY3Rpb25cIik7XG5PYmplY3Qua2V5cyhfU2V0TW9kYWxCdXR0b25FbmFibGVkQWN0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfU2V0TW9kYWxCdXR0b25FbmFibGVkQWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1NldE1vZGFsQnV0dG9uRW5hYmxlZEFjdGlvbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfV2lkZ2V0Q29uZmlnQWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9XaWRnZXRDb25maWdBY3Rpb25cIik7XG5PYmplY3Qua2V5cyhfV2lkZ2V0Q29uZmlnQWN0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfV2lkZ2V0Q29uZmlnQWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dpZGdldENvbmZpZ0FjdGlvbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfU2VuZEV2ZW50QWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9TZW5kRXZlbnRBY3Rpb25cIik7XG5PYmplY3Qua2V5cyhfU2VuZEV2ZW50QWN0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfU2VuZEV2ZW50QWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1NlbmRFdmVudEFjdGlvbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfU2VuZFRvRGV2aWNlQWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9TZW5kVG9EZXZpY2VBY3Rpb25cIik7XG5PYmplY3Qua2V5cyhfU2VuZFRvRGV2aWNlQWN0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfU2VuZFRvRGV2aWNlQWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1NlbmRUb0RldmljZUFjdGlvbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfUmVhZEV2ZW50QWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9SZWFkRXZlbnRBY3Rpb25cIik7XG5PYmplY3Qua2V5cyhfUmVhZEV2ZW50QWN0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfUmVhZEV2ZW50QWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1JlYWRFdmVudEFjdGlvbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfSVJvb21FdmVudCA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvSVJvb21FdmVudFwiKTtcbk9iamVjdC5rZXlzKF9JUm9vbUV2ZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfSVJvb21FdmVudFtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9JUm9vbUV2ZW50W2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xudmFyIF9JUm9vbUFjY291bnREYXRhID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9JUm9vbUFjY291bnREYXRhXCIpO1xuT2JqZWN0LmtleXMoX0lSb29tQWNjb3VudERhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9JUm9vbUFjY291bnREYXRhW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX0lSb29tQWNjb3VudERhdGFba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG52YXIgX05hdmlnYXRlQWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9OYXZpZ2F0ZUFjdGlvblwiKTtcbk9iamVjdC5rZXlzKF9OYXZpZ2F0ZUFjdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX05hdmlnYXRlQWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX05hdmlnYXRlQWN0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xudmFyIF9UdXJuU2VydmVyQWN0aW9ucyA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvVHVyblNlcnZlckFjdGlvbnNcIik7XG5PYmplY3Qua2V5cyhfVHVyblNlcnZlckFjdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9UdXJuU2VydmVyQWN0aW9uc1trZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9UdXJuU2VydmVyQWN0aW9uc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfUmVhZFJlbGF0aW9uc0FjdGlvbiA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvUmVhZFJlbGF0aW9uc0FjdGlvblwiKTtcbk9iamVjdC5rZXlzKF9SZWFkUmVsYXRpb25zQWN0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfUmVhZFJlbGF0aW9uc0FjdGlvbltrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9SZWFkUmVsYXRpb25zQWN0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xudmFyIF9HZXRNZWRpYUNvbmZpZ0FjdGlvbiA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvR2V0TWVkaWFDb25maWdBY3Rpb25cIik7XG5PYmplY3Qua2V5cyhfR2V0TWVkaWFDb25maWdBY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9HZXRNZWRpYUNvbmZpZ0FjdGlvbltrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9HZXRNZWRpYUNvbmZpZ0FjdGlvbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfVXBkYXRlRGVsYXllZEV2ZW50QWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9VcGRhdGVEZWxheWVkRXZlbnRBY3Rpb25cIik7XG5PYmplY3Qua2V5cyhfVXBkYXRlRGVsYXllZEV2ZW50QWN0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfVXBkYXRlRGVsYXllZEV2ZW50QWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1VwZGF0ZURlbGF5ZWRFdmVudEFjdGlvbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfVXBsb2FkRmlsZUFjdGlvbiA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvVXBsb2FkRmlsZUFjdGlvblwiKTtcbk9iamVjdC5rZXlzKF9VcGxvYWRGaWxlQWN0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfVXBsb2FkRmlsZUFjdGlvbltrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9VcGxvYWRGaWxlQWN0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xudmFyIF9Eb3dubG9hZEZpbGVBY3Rpb24gPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL0Rvd25sb2FkRmlsZUFjdGlvblwiKTtcbk9iamVjdC5rZXlzKF9Eb3dubG9hZEZpbGVBY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9Eb3dubG9hZEZpbGVBY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfRG93bmxvYWRGaWxlQWN0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xudmFyIF9XaWRnZXRFdmVudENhcGFiaWxpdHkgPSByZXF1aXJlKFwiLi9tb2RlbHMvV2lkZ2V0RXZlbnRDYXBhYmlsaXR5XCIpO1xuT2JqZWN0LmtleXMoX1dpZGdldEV2ZW50Q2FwYWJpbGl0eSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX1dpZGdldEV2ZW50Q2FwYWJpbGl0eVtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XaWRnZXRFdmVudENhcGFiaWxpdHlba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG52YXIgX3VybCA9IHJlcXVpcmUoXCIuL21vZGVscy92YWxpZGF0aW9uL3VybFwiKTtcbk9iamVjdC5rZXlzKF91cmwpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF91cmxba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfdXJsW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuL21vZGVscy92YWxpZGF0aW9uL3V0aWxzXCIpO1xuT2JqZWN0LmtleXMoX3V0aWxzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfdXRpbHNba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfdXRpbHNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG52YXIgX1dpZGdldCA9IHJlcXVpcmUoXCIuL21vZGVscy9XaWRnZXRcIik7XG5PYmplY3Qua2V5cyhfV2lkZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfV2lkZ2V0W2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dpZGdldFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfV2lkZ2V0UGFyc2VyID0gcmVxdWlyZShcIi4vbW9kZWxzL1dpZGdldFBhcnNlclwiKTtcbk9iamVjdC5rZXlzKF9XaWRnZXRQYXJzZXIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9XaWRnZXRQYXJzZXJba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2lkZ2V0UGFyc2VyW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xudmFyIF91cmxUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL3RlbXBsYXRpbmcvdXJsLXRlbXBsYXRlXCIpO1xuT2JqZWN0LmtleXMoX3VybFRlbXBsYXRlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfdXJsVGVtcGxhdGVba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfdXJsVGVtcGxhdGVba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG52YXIgX1NpbXBsZU9ic2VydmFibGUgPSByZXF1aXJlKFwiLi91dGlsL1NpbXBsZU9ic2VydmFibGVcIik7XG5PYmplY3Qua2V5cyhfU2ltcGxlT2JzZXJ2YWJsZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX1NpbXBsZU9ic2VydmFibGVba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfU2ltcGxlT2JzZXJ2YWJsZVtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfV2lkZ2V0RHJpdmVyID0gcmVxdWlyZShcIi4vZHJpdmVyL1dpZGdldERyaXZlclwiKTtcbk9iamVjdC5rZXlzKF9XaWRnZXREcml2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9XaWRnZXREcml2ZXJba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2lkZ2V0RHJpdmVyW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlVuc3RhYmxlQXBpVmVyc2lvbiA9IGV4cG9ydHMuTWF0cml4QXBpVmVyc2lvbiA9IGV4cG9ydHMuQ3VycmVudEFwaVZlcnNpb25zID0gdm9pZCAwO1xuLypcclxuICogQ29weXJpZ2h0IDIwMjAgVGhlIE1hdHJpeC5vcmcgRm91bmRhdGlvbiBDLkkuQy5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cbnZhciBNYXRyaXhBcGlWZXJzaW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChNYXRyaXhBcGlWZXJzaW9uKSB7XG4gIE1hdHJpeEFwaVZlcnNpb25bXCJQcmVyZWxlYXNlMVwiXSA9IFwiMC4wLjFcIjtcbiAgTWF0cml4QXBpVmVyc2lvbltcIlByZXJlbGVhc2UyXCJdID0gXCIwLjAuMlwiO1xuICByZXR1cm4gTWF0cml4QXBpVmVyc2lvbjtcbn0oe30pOyAvL1YwMTAgPSBcIjAuMS4wXCIsIC8vIGZpcnN0IHJlbGVhc2VcbmV4cG9ydHMuTWF0cml4QXBpVmVyc2lvbiA9IE1hdHJpeEFwaVZlcnNpb247XG52YXIgVW5zdGFibGVBcGlWZXJzaW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChVbnN0YWJsZUFwaVZlcnNpb24pIHtcbiAgVW5zdGFibGVBcGlWZXJzaW9uW1wiTVNDMjc2MlwiXSA9IFwib3JnLm1hdHJpeC5tc2MyNzYyXCI7XG4gIFVuc3RhYmxlQXBpVmVyc2lvbltcIk1TQzI4NzFcIl0gPSBcIm9yZy5tYXRyaXgubXNjMjg3MVwiO1xuICBVbnN0YWJsZUFwaVZlcnNpb25bXCJNU0MyOTMxXCJdID0gXCJvcmcubWF0cml4Lm1zYzI5MzFcIjtcbiAgVW5zdGFibGVBcGlWZXJzaW9uW1wiTVNDMjk3NFwiXSA9IFwib3JnLm1hdHJpeC5tc2MyOTc0XCI7XG4gIFVuc3RhYmxlQXBpVmVyc2lvbltcIk1TQzI4NzZcIl0gPSBcIm9yZy5tYXRyaXgubXNjMjg3NlwiO1xuICBVbnN0YWJsZUFwaVZlcnNpb25bXCJNU0MzODE5XCJdID0gXCJvcmcubWF0cml4Lm1zYzM4MTlcIjtcbiAgVW5zdGFibGVBcGlWZXJzaW9uW1wiTVNDMzg0NlwiXSA9IFwidG93bi5yb2Jpbi5tc2MzODQ2XCI7XG4gIFVuc3RhYmxlQXBpVmVyc2lvbltcIk1TQzM4NjlcIl0gPSBcIm9yZy5tYXRyaXgubXNjMzg2OVwiO1xuICBVbnN0YWJsZUFwaVZlcnNpb25bXCJNU0MzOTczXCJdID0gXCJvcmcubWF0cml4Lm1zYzM5NzNcIjtcbiAgVW5zdGFibGVBcGlWZXJzaW9uW1wiTVNDNDAzOVwiXSA9IFwib3JnLm1hdHJpeC5tc2M0MDM5XCI7XG4gIHJldHVybiBVbnN0YWJsZUFwaVZlcnNpb247XG59KHt9KTtcbmV4cG9ydHMuVW5zdGFibGVBcGlWZXJzaW9uID0gVW5zdGFibGVBcGlWZXJzaW9uO1xudmFyIEN1cnJlbnRBcGlWZXJzaW9ucyA9IFtNYXRyaXhBcGlWZXJzaW9uLlByZXJlbGVhc2UxLCBNYXRyaXhBcGlWZXJzaW9uLlByZXJlbGVhc2UyLFxuLy9NYXRyaXhBcGlWZXJzaW9uLlYwMTAsXG5VbnN0YWJsZUFwaVZlcnNpb24uTVNDMjc2MiwgVW5zdGFibGVBcGlWZXJzaW9uLk1TQzI4NzEsIFVuc3RhYmxlQXBpVmVyc2lvbi5NU0MyOTMxLCBVbnN0YWJsZUFwaVZlcnNpb24uTVNDMjk3NCwgVW5zdGFibGVBcGlWZXJzaW9uLk1TQzI4NzYsIFVuc3RhYmxlQXBpVmVyc2lvbi5NU0MzODE5LCBVbnN0YWJsZUFwaVZlcnNpb24uTVNDMzg0NiwgVW5zdGFibGVBcGlWZXJzaW9uLk1TQzM4NjksIFVuc3RhYmxlQXBpVmVyc2lvbi5NU0MzOTczLCBVbnN0YWJsZUFwaVZlcnNpb24uTVNDNDAzOV07XG5leHBvcnRzLkN1cnJlbnRBcGlWZXJzaW9ucyA9IEN1cnJlbnRBcGlWZXJzaW9ucztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFwaVZlcnNpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlZpZGVvQ29uZmVyZW5jZUNhcGFiaWxpdGllcyA9IGV4cG9ydHMuU3RpY2tlcnBpY2tlckNhcGFiaWxpdGllcyA9IGV4cG9ydHMuTWF0cml4Q2FwYWJpbGl0aWVzID0gdm9pZCAwO1xuZXhwb3J0cy5nZXRUaW1lbGluZVJvb21JREZyb21DYXBhYmlsaXR5ID0gZ2V0VGltZWxpbmVSb29tSURGcm9tQ2FwYWJpbGl0eTtcbmV4cG9ydHMuaXNUaW1lbGluZUNhcGFiaWxpdHkgPSBpc1RpbWVsaW5lQ2FwYWJpbGl0eTtcbmV4cG9ydHMuaXNUaW1lbGluZUNhcGFiaWxpdHlGb3IgPSBpc1RpbWVsaW5lQ2FwYWJpbGl0eUZvcjtcbi8qXHJcbiAqIENvcHlyaWdodCAyMDIwIC0gMjAyMSBUaGUgTWF0cml4Lm9yZyBGb3VuZGF0aW9uIEMuSS5DLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xudmFyIE1hdHJpeENhcGFiaWxpdGllcyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoTWF0cml4Q2FwYWJpbGl0aWVzKSB7XG4gIE1hdHJpeENhcGFiaWxpdGllc1tcIlNjcmVlbnNob3RzXCJdID0gXCJtLmNhcGFiaWxpdHkuc2NyZWVuc2hvdFwiO1xuICBNYXRyaXhDYXBhYmlsaXRpZXNbXCJTdGlja2VyU2VuZGluZ1wiXSA9IFwibS5zdGlja2VyXCI7XG4gIE1hdHJpeENhcGFiaWxpdGllc1tcIkFsd2F5c09uU2NyZWVuXCJdID0gXCJtLmFsd2F5c19vbl9zY3JlZW5cIjtcbiAgTWF0cml4Q2FwYWJpbGl0aWVzW1wiUmVxdWlyZXNDbGllbnRcIl0gPSBcImlvLmVsZW1lbnQucmVxdWlyZXNfY2xpZW50XCI7XG4gIE1hdHJpeENhcGFiaWxpdGllc1tcIk1TQzI5MzFOYXZpZ2F0ZVwiXSA9IFwib3JnLm1hdHJpeC5tc2MyOTMxLm5hdmlnYXRlXCI7XG4gIE1hdHJpeENhcGFiaWxpdGllc1tcIk1TQzM4NDZUdXJuU2VydmVyc1wiXSA9IFwidG93bi5yb2Jpbi5tc2MzODQ2LnR1cm5fc2VydmVyc1wiO1xuICBNYXRyaXhDYXBhYmlsaXRpZXNbXCJNU0MzOTczVXNlckRpcmVjdG9yeVNlYXJjaFwiXSA9IFwib3JnLm1hdHJpeC5tc2MzOTczLnVzZXJfZGlyZWN0b3J5X3NlYXJjaFwiO1xuICBNYXRyaXhDYXBhYmlsaXRpZXNbXCJNU0M0MDM5VXBsb2FkRmlsZVwiXSA9IFwib3JnLm1hdHJpeC5tc2M0MDM5LnVwbG9hZF9maWxlXCI7XG4gIE1hdHJpeENhcGFiaWxpdGllc1tcIk1TQzQwMzlEb3dubG9hZEZpbGVcIl0gPSBcIm9yZy5tYXRyaXgubXNjNDAzOS5kb3dubG9hZF9maWxlXCI7XG4gIE1hdHJpeENhcGFiaWxpdGllc1tcIk1TQzQxNTdTZW5kRGVsYXllZEV2ZW50XCJdID0gXCJvcmcubWF0cml4Lm1zYzQxNTcuc2VuZC5kZWxheWVkX2V2ZW50XCI7XG4gIE1hdHJpeENhcGFiaWxpdGllc1tcIk1TQzQxNTdVcGRhdGVEZWxheWVkRXZlbnRcIl0gPSBcIm9yZy5tYXRyaXgubXNjNDE1Ny51cGRhdGVfZGVsYXllZF9ldmVudFwiO1xuICByZXR1cm4gTWF0cml4Q2FwYWJpbGl0aWVzO1xufSh7fSk7XG5leHBvcnRzLk1hdHJpeENhcGFiaWxpdGllcyA9IE1hdHJpeENhcGFiaWxpdGllcztcbnZhciBTdGlja2VycGlja2VyQ2FwYWJpbGl0aWVzID0gW01hdHJpeENhcGFiaWxpdGllcy5TdGlja2VyU2VuZGluZ107XG5leHBvcnRzLlN0aWNrZXJwaWNrZXJDYXBhYmlsaXRpZXMgPSBTdGlja2VycGlja2VyQ2FwYWJpbGl0aWVzO1xudmFyIFZpZGVvQ29uZmVyZW5jZUNhcGFiaWxpdGllcyA9IFtNYXRyaXhDYXBhYmlsaXRpZXMuQWx3YXlzT25TY3JlZW5dO1xuXG4vKipcclxuICogRGV0ZXJtaW5lcyBpZiBhIGNhcGFiaWxpdHkgaXMgYSBjYXBhYmlsaXR5IGZvciBhIHRpbWVsaW5lLlxyXG4gKiBAcGFyYW0ge0NhcGFiaWxpdHl9IGNhcGFiaWxpdHkgVGhlIGNhcGFiaWxpdHkgdG8gdGVzdC5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgYSB0aW1lbGluZSBjYXBhYmlsaXR5LCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuZXhwb3J0cy5WaWRlb0NvbmZlcmVuY2VDYXBhYmlsaXRpZXMgPSBWaWRlb0NvbmZlcmVuY2VDYXBhYmlsaXRpZXM7XG5mdW5jdGlvbiBpc1RpbWVsaW5lQ2FwYWJpbGl0eShjYXBhYmlsaXR5KSB7XG4gIC8vIFRPRE86IENoYW5nZSB3aGVuIE1TQzI3NjIgYmVjb21lcyBzdGFibGUuXG4gIHJldHVybiBjYXBhYmlsaXR5ID09PSBudWxsIHx8IGNhcGFiaWxpdHkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcGFiaWxpdHkuc3RhcnRzV2l0aChcIm9yZy5tYXRyaXgubXNjMjc2Mi50aW1lbGluZTpcIik7XG59XG5cbi8qKlxyXG4gKiBEZXRlcm1pbmVzIGlmIGEgY2FwYWJpbGl0eSBpcyBhIHRpbWVsaW5lIGNhcGFiaWxpdHkgZm9yIHRoZSBnaXZlbiByb29tLlxyXG4gKiBAcGFyYW0ge0NhcGFiaWxpdHl9IGNhcGFiaWxpdHkgVGhlIGNhcGFiaWxpdHkgdG8gdGVzdC5cclxuICogQHBhcmFtIHtzdHJpbmcgfCBTeW1ib2xzLkFueVJvb219IHJvb21JZCBUaGUgcm9vbSBJRCwgb3IgYFN5bWJvbHMuQW55Um9vbWAgZm9yIHRoYXQgZGVzaWduYXRpb24uXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIGEgbWF0Y2hpbmcgY2FwYWJpbGl0eSwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cbmZ1bmN0aW9uIGlzVGltZWxpbmVDYXBhYmlsaXR5Rm9yKGNhcGFiaWxpdHksIHJvb21JZCkge1xuICByZXR1cm4gY2FwYWJpbGl0eSA9PT0gXCJvcmcubWF0cml4Lm1zYzI3NjIudGltZWxpbmU6XCIuY29uY2F0KHJvb21JZCk7XG59XG5cbi8qKlxyXG4gKiBHZXRzIHRoZSByb29tIElEIGRlc2NyaWJlZCBieSBhIHRpbWVsaW5lIGNhcGFiaWxpdHkuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjYXBhYmlsaXR5IFRoZSBjYXBhYmlsaXR5IHRvIHBhcnNlLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcm9vbSBJRC5cclxuICovXG5mdW5jdGlvbiBnZXRUaW1lbGluZVJvb21JREZyb21DYXBhYmlsaXR5KGNhcGFiaWxpdHkpIHtcbiAgcmV0dXJuIGNhcGFiaWxpdHkuc3Vic3RyaW5nKGNhcGFiaWxpdHkuaW5kZXhPZihcIjpcIikgKyAxKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNhcGFiaWxpdGllcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNhcGFiaWxpdGllc0FjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbnRlbnRMb2FkZWRBY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Eb3dubG9hZEZpbGVBY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1HZXRNZWRpYUNvbmZpZ0FjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuT3BlbklEUmVxdWVzdFN0YXRlID0gdm9pZCAwO1xuLypcclxuICogQ29weXJpZ2h0IDIwMjAgVGhlIE1hdHJpeC5vcmcgRm91bmRhdGlvbiBDLkkuQy5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cbnZhciBPcGVuSURSZXF1ZXN0U3RhdGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKE9wZW5JRFJlcXVlc3RTdGF0ZSkge1xuICBPcGVuSURSZXF1ZXN0U3RhdGVbXCJBbGxvd2VkXCJdID0gXCJhbGxvd2VkXCI7XG4gIE9wZW5JRFJlcXVlc3RTdGF0ZVtcIkJsb2NrZWRcIl0gPSBcImJsb2NrZWRcIjtcbiAgT3BlbklEUmVxdWVzdFN0YXRlW1wiUGVuZGluZ1VzZXJDb25maXJtYXRpb25cIl0gPSBcInJlcXVlc3RcIjtcbiAgcmV0dXJuIE9wZW5JRFJlcXVlc3RTdGF0ZTtcbn0oe30pO1xuZXhwb3J0cy5PcGVuSURSZXF1ZXN0U3RhdGUgPSBPcGVuSURSZXF1ZXN0U3RhdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1HZXRPcGVuSURBY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1JQ3VzdG9tV2lkZ2V0RGF0YS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlKaXRzaVdpZGdldERhdGEuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1JUm9vbUFjY291bnREYXRhLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SVJvb21FdmVudC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlTdGlja2VycGlja2VyV2lkZ2V0RGF0YS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlXaWRnZXQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzRXJyb3JSZXNwb25zZSA9IGlzRXJyb3JSZXNwb25zZTtcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbi8qXHJcbiAqIENvcHlyaWdodCAyMDIwIC0gMjAyNCBUaGUgTWF0cml4Lm9yZyBGb3VuZGF0aW9uIEMuSS5DLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xuXG4vKipcclxuICogVGhlIGZvcm1hdCBvZiBlcnJvcnMgcmV0dXJuZWQgYnkgTWF0cml4IEFQSSByZXF1ZXN0c1xyXG4gKiBtYWRlIGJ5IGEgV2lkZ2V0RHJpdmVyLlxyXG4gKi9cblxuZnVuY3Rpb24gaXNFcnJvclJlc3BvbnNlKHJlc3BvbnNlRGF0YSkge1xuICB2YXIgZXJyb3IgPSByZXNwb25zZURhdGEuZXJyb3I7XG4gIHJldHVybiBfdHlwZW9mKGVycm9yKSA9PT0gXCJvYmplY3RcIiAmJiBlcnJvciAhPT0gbnVsbCAmJiBcIm1lc3NhZ2VcIiBpbiBlcnJvciAmJiB0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gXCJzdHJpbmdcIjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlXaWRnZXRBcGlFcnJvclJlc3BvbnNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SVdpZGdldEFwaVJlcXVlc3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1JV2lkZ2V0QXBpUmVzcG9uc2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLk1vZGFsQnV0dG9uS2luZCA9IHZvaWQgMDtcbi8qXHJcbiAqIENvcHlyaWdodCAyMDIwIFRoZSBNYXRyaXgub3JnIEZvdW5kYXRpb24gQy5JLkMuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXG52YXIgTW9kYWxCdXR0b25LaW5kID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChNb2RhbEJ1dHRvbktpbmQpIHtcbiAgTW9kYWxCdXR0b25LaW5kW1wiUHJpbWFyeVwiXSA9IFwibS5wcmltYXJ5XCI7XG4gIE1vZGFsQnV0dG9uS2luZFtcIlNlY29uZGFyeVwiXSA9IFwibS5zZWNvbmRhcnlcIjtcbiAgTW9kYWxCdXR0b25LaW5kW1wiV2FybmluZ1wiXSA9IFwibS53YXJuaW5nXCI7XG4gIE1vZGFsQnV0dG9uS2luZFtcIkRhbmdlclwiXSA9IFwibS5kYW5nZXJcIjtcbiAgTW9kYWxCdXR0b25LaW5kW1wiTGlua1wiXSA9IFwibS5saW5rXCI7XG4gIHJldHVybiBNb2RhbEJ1dHRvbktpbmQ7XG59KHt9KTtcbmV4cG9ydHMuTW9kYWxCdXR0b25LaW5kID0gTW9kYWxCdXR0b25LaW5kO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TW9kYWxCdXR0b25LaW5kLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5CdWlsdEluTW9kYWxCdXR0b25JRCA9IHZvaWQgMDtcbi8qXHJcbiAqIENvcHlyaWdodCAyMDIwIFRoZSBNYXRyaXgub3JnIEZvdW5kYXRpb24gQy5JLkMuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXG52YXIgQnVpbHRJbk1vZGFsQnV0dG9uSUQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKEJ1aWx0SW5Nb2RhbEJ1dHRvbklEKSB7XG4gIEJ1aWx0SW5Nb2RhbEJ1dHRvbklEW1wiQ2xvc2VcIl0gPSBcIm0uY2xvc2VcIjtcbiAgcmV0dXJuIEJ1aWx0SW5Nb2RhbEJ1dHRvbklEO1xufSh7fSk7IC8vIFR5cGVzIGZvciBhIG5vcm1hbCBtb2RhbCByZXF1ZXN0aW5nIHRoZSBvcGVuaW5nIGEgbW9kYWwgd2lkZ2V0XG4vLyBUeXBlcyBmb3IgYSBtb2RhbCB3aWRnZXQgcmVjZWl2aW5nIG5vdGlmaWNhdGlvbnMgdGhhdCBpdHMgYnV0dG9ucyBoYXZlIGJlZW4gcHJlc3NlZFxuLy8gVHlwZXMgZm9yIGEgbW9kYWwgd2lkZ2V0IHJlcXVlc3RpbmcgY2xvc2Vcbi8vIFR5cGVzIGZvciBhIG5vcm1hbCB3aWRnZXQgYmVpbmcgbm90aWZpZWQgdGhhdCB0aGUgbW9kYWwgd2lkZ2V0IGl0IG9wZW5lZCBoYXMgYmVlbiBjbG9zZWRcbmV4cG9ydHMuQnVpbHRJbk1vZGFsQnV0dG9uSUQgPSBCdWlsdEluTW9kYWxCdXR0b25JRDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1vZGFsV2lkZ2V0QWN0aW9ucy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5hdmlnYXRlQWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T3BlbklEQ3JlZGVudGlhbHNBY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1SZWFkRXZlbnRBY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1SZWFkUmVsYXRpb25zQWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2NyZWVuc2hvdEFjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNlbmRFdmVudEFjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNlbmRUb0RldmljZUFjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNldE1vZGFsQnV0dG9uRW5hYmxlZEFjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN0aWNrZXJBY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdGlja3lBY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdXBwb3J0ZWRWZXJzaW9uc0FjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVR1cm5TZXJ2ZXJBY3Rpb25zLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5VcGRhdGVEZWxheWVkRXZlbnRBY3Rpb24gPSB2b2lkIDA7XG4vKlxyXG4gKiBDb3B5cmlnaHQgMjAyMCAtIDIwMjQgVGhlIE1hdHJpeC5vcmcgRm91bmRhdGlvbiBDLkkuQy5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cbnZhciBVcGRhdGVEZWxheWVkRXZlbnRBY3Rpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKFVwZGF0ZURlbGF5ZWRFdmVudEFjdGlvbikge1xuICBVcGRhdGVEZWxheWVkRXZlbnRBY3Rpb25bXCJDYW5jZWxcIl0gPSBcImNhbmNlbFwiO1xuICBVcGRhdGVEZWxheWVkRXZlbnRBY3Rpb25bXCJSZXN0YXJ0XCJdID0gXCJyZXN0YXJ0XCI7XG4gIFVwZGF0ZURlbGF5ZWRFdmVudEFjdGlvbltcIlNlbmRcIl0gPSBcInNlbmRcIjtcbiAgcmV0dXJuIFVwZGF0ZURlbGF5ZWRFdmVudEFjdGlvbjtcbn0oe30pO1xuZXhwb3J0cy5VcGRhdGVEZWxheWVkRXZlbnRBY3Rpb24gPSBVcGRhdGVEZWxheWVkRXZlbnRBY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1VcGRhdGVEZWxheWVkRXZlbnRBY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1VcGxvYWRGaWxlQWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VmlzaWJpbGl0eUFjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24gPSBleHBvcnRzLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24gPSB2b2lkIDA7XG4vKlxyXG4gKiBDb3B5cmlnaHQgMjAyMCBUaGUgTWF0cml4Lm9yZyBGb3VuZGF0aW9uIEMuSS5DLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xudmFyIFdpZGdldEFwaVRvV2lkZ2V0QWN0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChXaWRnZXRBcGlUb1dpZGdldEFjdGlvbikge1xuICBXaWRnZXRBcGlUb1dpZGdldEFjdGlvbltcIlN1cHBvcnRlZEFwaVZlcnNpb25zXCJdID0gXCJzdXBwb3J0ZWRfYXBpX3ZlcnNpb25zXCI7XG4gIFdpZGdldEFwaVRvV2lkZ2V0QWN0aW9uW1wiQ2FwYWJpbGl0aWVzXCJdID0gXCJjYXBhYmlsaXRpZXNcIjtcbiAgV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb25bXCJOb3RpZnlDYXBhYmlsaXRpZXNcIl0gPSBcIm5vdGlmeV9jYXBhYmlsaXRpZXNcIjtcbiAgV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb25bXCJUYWtlU2NyZWVuc2hvdFwiXSA9IFwic2NyZWVuc2hvdFwiO1xuICBXaWRnZXRBcGlUb1dpZGdldEFjdGlvbltcIlVwZGF0ZVZpc2liaWxpdHlcIl0gPSBcInZpc2liaWxpdHlcIjtcbiAgV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb25bXCJPcGVuSURDcmVkZW50aWFsc1wiXSA9IFwib3BlbmlkX2NyZWRlbnRpYWxzXCI7XG4gIFdpZGdldEFwaVRvV2lkZ2V0QWN0aW9uW1wiV2lkZ2V0Q29uZmlnXCJdID0gXCJ3aWRnZXRfY29uZmlnXCI7XG4gIFdpZGdldEFwaVRvV2lkZ2V0QWN0aW9uW1wiQ2xvc2VNb2RhbFdpZGdldFwiXSA9IFwiY2xvc2VfbW9kYWxcIjtcbiAgV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb25bXCJCdXR0b25DbGlja2VkXCJdID0gXCJidXR0b25fY2xpY2tlZFwiO1xuICBXaWRnZXRBcGlUb1dpZGdldEFjdGlvbltcIlNlbmRFdmVudFwiXSA9IFwic2VuZF9ldmVudFwiO1xuICBXaWRnZXRBcGlUb1dpZGdldEFjdGlvbltcIlNlbmRUb0RldmljZVwiXSA9IFwic2VuZF90b19kZXZpY2VcIjtcbiAgV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb25bXCJVcGRhdGVUdXJuU2VydmVyc1wiXSA9IFwidXBkYXRlX3R1cm5fc2VydmVyc1wiO1xuICByZXR1cm4gV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb247XG59KHt9KTtcbmV4cG9ydHMuV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24gPSBXaWRnZXRBcGlUb1dpZGdldEFjdGlvbjtcbnZhciBXaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChXaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uKSB7XG4gIFdpZGdldEFwaUZyb21XaWRnZXRBY3Rpb25bXCJTdXBwb3J0ZWRBcGlWZXJzaW9uc1wiXSA9IFwic3VwcG9ydGVkX2FwaV92ZXJzaW9uc1wiO1xuICBXaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uW1wiQ29udGVudExvYWRlZFwiXSA9IFwiY29udGVudF9sb2FkZWRcIjtcbiAgV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbltcIlNlbmRTdGlja2VyXCJdID0gXCJtLnN0aWNrZXJcIjtcbiAgV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbltcIlVwZGF0ZUFsd2F5c09uU2NyZWVuXCJdID0gXCJzZXRfYWx3YXlzX29uX3NjcmVlblwiO1xuICBXaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uW1wiR2V0T3BlbklEQ3JlZGVudGlhbHNcIl0gPSBcImdldF9vcGVuaWRcIjtcbiAgV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbltcIkNsb3NlTW9kYWxXaWRnZXRcIl0gPSBcImNsb3NlX21vZGFsXCI7XG4gIFdpZGdldEFwaUZyb21XaWRnZXRBY3Rpb25bXCJPcGVuTW9kYWxXaWRnZXRcIl0gPSBcIm9wZW5fbW9kYWxcIjtcbiAgV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbltcIlNldE1vZGFsQnV0dG9uRW5hYmxlZFwiXSA9IFwic2V0X2J1dHRvbl9lbmFibGVkXCI7XG4gIFdpZGdldEFwaUZyb21XaWRnZXRBY3Rpb25bXCJTZW5kRXZlbnRcIl0gPSBcInNlbmRfZXZlbnRcIjtcbiAgV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbltcIlNlbmRUb0RldmljZVwiXSA9IFwic2VuZF90b19kZXZpY2VcIjtcbiAgV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbltcIldhdGNoVHVyblNlcnZlcnNcIl0gPSBcIndhdGNoX3R1cm5fc2VydmVyc1wiO1xuICBXaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uW1wiVW53YXRjaFR1cm5TZXJ2ZXJzXCJdID0gXCJ1bndhdGNoX3R1cm5fc2VydmVyc1wiO1xuICBXaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uW1wiQmVlcGVyUmVhZFJvb21BY2NvdW50RGF0YVwiXSA9IFwiY29tLmJlZXBlci5yZWFkX3Jvb21fYWNjb3VudF9kYXRhXCI7XG4gIFdpZGdldEFwaUZyb21XaWRnZXRBY3Rpb25bXCJNU0MyODc2UmVhZEV2ZW50c1wiXSA9IFwib3JnLm1hdHJpeC5tc2MyODc2LnJlYWRfZXZlbnRzXCI7XG4gIFdpZGdldEFwaUZyb21XaWRnZXRBY3Rpb25bXCJNU0MyOTMxTmF2aWdhdGVcIl0gPSBcIm9yZy5tYXRyaXgubXNjMjkzMS5uYXZpZ2F0ZVwiO1xuICBXaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uW1wiTVNDMjk3NFJlbmVnb3RpYXRlQ2FwYWJpbGl0aWVzXCJdID0gXCJvcmcubWF0cml4Lm1zYzI5NzQucmVxdWVzdF9jYXBhYmlsaXRpZXNcIjtcbiAgV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbltcIk1TQzM4NjlSZWFkUmVsYXRpb25zXCJdID0gXCJvcmcubWF0cml4Lm1zYzM4NjkucmVhZF9yZWxhdGlvbnNcIjtcbiAgV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbltcIk1TQzM5NzNVc2VyRGlyZWN0b3J5U2VhcmNoXCJdID0gXCJvcmcubWF0cml4Lm1zYzM5NzMudXNlcl9kaXJlY3Rvcnlfc2VhcmNoXCI7XG4gIFdpZGdldEFwaUZyb21XaWRnZXRBY3Rpb25bXCJNU0M0MDM5R2V0TWVkaWFDb25maWdBY3Rpb25cIl0gPSBcIm9yZy5tYXRyaXgubXNjNDAzOS5nZXRfbWVkaWFfY29uZmlnXCI7XG4gIFdpZGdldEFwaUZyb21XaWRnZXRBY3Rpb25bXCJNU0M0MDM5VXBsb2FkRmlsZUFjdGlvblwiXSA9IFwib3JnLm1hdHJpeC5tc2M0MDM5LnVwbG9hZF9maWxlXCI7XG4gIFdpZGdldEFwaUZyb21XaWRnZXRBY3Rpb25bXCJNU0M0MDM5RG93bmxvYWRGaWxlQWN0aW9uXCJdID0gXCJvcmcubWF0cml4Lm1zYzQwMzkuZG93bmxvYWRfZmlsZVwiO1xuICBXaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uW1wiTVNDNDE1N1VwZGF0ZURlbGF5ZWRFdmVudFwiXSA9IFwib3JnLm1hdHJpeC5tc2M0MTU3LnVwZGF0ZV9kZWxheWVkX2V2ZW50XCI7XG4gIHJldHVybiBXaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uO1xufSh7fSk7XG5leHBvcnRzLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24gPSBXaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2lkZ2V0QXBpQWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5XaWRnZXRBcGlEaXJlY3Rpb24gPSB2b2lkIDA7XG5leHBvcnRzLmludmVydGVkRGlyZWN0aW9uID0gaW52ZXJ0ZWREaXJlY3Rpb247XG4vKlxyXG4gKiBDb3B5cmlnaHQgMjAyMCBUaGUgTWF0cml4Lm9yZyBGb3VuZGF0aW9uIEMuSS5DLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xudmFyIFdpZGdldEFwaURpcmVjdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoV2lkZ2V0QXBpRGlyZWN0aW9uKSB7XG4gIFdpZGdldEFwaURpcmVjdGlvbltcIlRvV2lkZ2V0XCJdID0gXCJ0b1dpZGdldFwiO1xuICBXaWRnZXRBcGlEaXJlY3Rpb25bXCJGcm9tV2lkZ2V0XCJdID0gXCJmcm9tV2lkZ2V0XCI7XG4gIHJldHVybiBXaWRnZXRBcGlEaXJlY3Rpb247XG59KHt9KTtcbmV4cG9ydHMuV2lkZ2V0QXBpRGlyZWN0aW9uID0gV2lkZ2V0QXBpRGlyZWN0aW9uO1xuZnVuY3Rpb24gaW52ZXJ0ZWREaXJlY3Rpb24oZGlyKSB7XG4gIGlmIChkaXIgPT09IFdpZGdldEFwaURpcmVjdGlvbi5Ub1dpZGdldCkge1xuICAgIHJldHVybiBXaWRnZXRBcGlEaXJlY3Rpb24uRnJvbVdpZGdldDtcbiAgfSBlbHNlIGlmIChkaXIgPT09IFdpZGdldEFwaURpcmVjdGlvbi5Gcm9tV2lkZ2V0KSB7XG4gICAgcmV0dXJuIFdpZGdldEFwaURpcmVjdGlvbi5Ub1dpZGdldDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRpcmVjdGlvblwiKTtcbiAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2lkZ2V0QXBpRGlyZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2lkZ2V0Q29uZmlnQWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5XaWRnZXRLaW5kID0gdm9pZCAwO1xuLypcclxuICogQ29weXJpZ2h0IDIwMjAgVGhlIE1hdHJpeC5vcmcgRm91bmRhdGlvbiBDLkkuQy5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cbnZhciBXaWRnZXRLaW5kID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChXaWRnZXRLaW5kKSB7XG4gIFdpZGdldEtpbmRbXCJSb29tXCJdID0gXCJyb29tXCI7XG4gIFdpZGdldEtpbmRbXCJBY2NvdW50XCJdID0gXCJhY2NvdW50XCI7XG4gIFdpZGdldEtpbmRbXCJNb2RhbFwiXSA9IFwibW9kYWxcIjtcbiAgcmV0dXJuIFdpZGdldEtpbmQ7XG59KHt9KTtcbmV4cG9ydHMuV2lkZ2V0S2luZCA9IFdpZGdldEtpbmQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1XaWRnZXRLaW5kLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5NYXRyaXhXaWRnZXRUeXBlID0gdm9pZCAwO1xuLypcclxuICogQ29weXJpZ2h0IDIwMjAgVGhlIE1hdHJpeC5vcmcgRm91bmRhdGlvbiBDLkkuQy5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cbnZhciBNYXRyaXhXaWRnZXRUeXBlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChNYXRyaXhXaWRnZXRUeXBlKSB7XG4gIE1hdHJpeFdpZGdldFR5cGVbXCJDdXN0b21cIl0gPSBcIm0uY3VzdG9tXCI7XG4gIE1hdHJpeFdpZGdldFR5cGVbXCJKaXRzaU1lZXRcIl0gPSBcIm0uaml0c2lcIjtcbiAgTWF0cml4V2lkZ2V0VHlwZVtcIlN0aWNrZXJwaWNrZXJcIl0gPSBcIm0uc3RpY2tlcnBpY2tlclwiO1xuICByZXR1cm4gTWF0cml4V2lkZ2V0VHlwZTtcbn0oe30pO1xuZXhwb3J0cy5NYXRyaXhXaWRnZXRUeXBlID0gTWF0cml4V2lkZ2V0VHlwZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdpZGdldFR5cGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLldpZGdldCA9IHZvaWQgMDtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi92YWxpZGF0aW9uL3V0aWxzXCIpO1xudmFyIF8gPSByZXF1aXJlKFwiLi5cIik7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH0gLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIENvcHlyaWdodCAyMDIwIFRoZSBNYXRyaXgub3JnIEZvdW5kYXRpb24gQy5JLkMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyoqXHJcbiAqIFJlcHJlc2VudHMgdGhlIGJhcmVzdCBmb3JtIG9mIHdpZGdldC5cclxuICovXG52YXIgV2lkZ2V0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gV2lkZ2V0KGRlZmluaXRpb24pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2lkZ2V0KTtcbiAgICB0aGlzLmRlZmluaXRpb24gPSBkZWZpbml0aW9uO1xuICAgIGlmICghdGhpcy5kZWZpbml0aW9uKSB0aHJvdyBuZXcgRXJyb3IoXCJEZWZpbml0aW9uIGlzIHJlcXVpcmVkXCIpO1xuICAgICgwLCBfdXRpbHMuYXNzZXJ0UHJlc2VudCkoZGVmaW5pdGlvbiwgXCJpZFwiKTtcbiAgICAoMCwgX3V0aWxzLmFzc2VydFByZXNlbnQpKGRlZmluaXRpb24sIFwiY3JlYXRvclVzZXJJZFwiKTtcbiAgICAoMCwgX3V0aWxzLmFzc2VydFByZXNlbnQpKGRlZmluaXRpb24sIFwidHlwZVwiKTtcbiAgICAoMCwgX3V0aWxzLmFzc2VydFByZXNlbnQpKGRlZmluaXRpb24sIFwidXJsXCIpO1xuICB9XG5cbiAgLyoqXHJcbiAgICogVGhlIHVzZXIgSUQgd2hvIGNyZWF0ZWQgdGhlIHdpZGdldC5cclxuICAgKi9cbiAgX2NyZWF0ZUNsYXNzKFdpZGdldCwgW3tcbiAgICBrZXk6IFwiY3JlYXRvclVzZXJJZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5jcmVhdG9yVXNlcklkO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogVGhlIHR5cGUgb2Ygd2lkZ2V0LlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi50eXBlO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIG9mIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJpZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5pZDtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB3aWRnZXQsIG9yIG51bGwgaWYgbm90IHNldC5cclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIm5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmluaXRpb24ubmFtZSB8fCBudWxsO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogVGhlIHRpdGxlIGZvciB0aGUgd2lkZ2V0LCBvciBudWxsIGlmIG5vdCBzZXQuXHJcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJ0aXRsZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMucmF3RGF0YS50aXRsZSB8fCBudWxsO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogVGhlIHRlbXBsYXRlZCBVUkwgZm9yIHRoZSB3aWRnZXQuXHJcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJ0ZW1wbGF0ZVVybFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi51cmw7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgb3JpZ2luIGZvciB0aGlzIHdpZGdldC5cclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIm9yaWdpblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIG5ldyBVUkwodGhpcy50ZW1wbGF0ZVVybCkub3JpZ2luO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciBvciBub3QgdGhlIGNsaWVudCBzaG91bGQgd2FpdCBmb3IgdGhlIGlmcmFtZSB0byBsb2FkLiBEZWZhdWx0c1xyXG4gICAgICogdG8gdHJ1ZS5cclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIndhaXRGb3JJZnJhbWVMb2FkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5kZWZpbml0aW9uLndhaXRGb3JJZnJhbWVMb2FkID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKHRoaXMuZGVmaW5pdGlvbi53YWl0Rm9ySWZyYW1lTG9hZCA9PT0gdHJ1ZSkgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTsgLy8gZGVmYXVsdCB0cnVlXG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcmF3IGRhdGEgZm9yIHRoZSB3aWRnZXQuIFRoaXMgd2lsbCBhbHdheXMgYmUgZGVmaW5lZCwgdGhvdWdoXHJcbiAgICAgKiBtYXkgYmUgZW1wdHkuXHJcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJyYXdEYXRhXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uLmRhdGEgfHwge307XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgY29tcGxldGUgd2lkZ2V0IFVSTCBmb3IgdGhlIGNsaWVudCB0byByZW5kZXIuXHJcbiAgICAgKiBAcGFyYW0ge0lUZW1wbGF0ZVBhcmFtc30gcGFyYW1zIFRoZSB0ZW1wbGF0ZSBwYXJhbWV0ZXJzLlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ30gQSB0ZW1wbGF0ZWQgVVJMLlxyXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Q29tcGxldGVVcmxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29tcGxldGVVcmwocGFyYW1zKSB7XG4gICAgICByZXR1cm4gKDAsIF8ucnVuVGVtcGxhdGUpKHRoaXMudGVtcGxhdGVVcmwsIHRoaXMuZGVmaW5pdGlvbiwgcGFyYW1zKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFdpZGdldDtcbn0oKTtcbmV4cG9ydHMuV2lkZ2V0ID0gV2lkZ2V0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2lkZ2V0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5XaWRnZXRFdmVudENhcGFiaWxpdHkgPSBleHBvcnRzLkV2ZW50S2luZCA9IGV4cG9ydHMuRXZlbnREaXJlY3Rpb24gPSB2b2lkIDA7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTsgaWYgKCFpdCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBpdC5jYWxsKG8pOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1wicmV0dXJuXCJdICE9IG51bGwpIGl0W1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTsgcmV0dXJuIGFycjI7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuLypcclxuICogQ29weXJpZ2h0IDIwMjAgVGhlIE1hdHJpeC5vcmcgRm91bmRhdGlvbiBDLkkuQy5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cbnZhciBFdmVudEtpbmQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKEV2ZW50S2luZCkge1xuICBFdmVudEtpbmRbXCJFdmVudFwiXSA9IFwiZXZlbnRcIjtcbiAgRXZlbnRLaW5kW1wiU3RhdGVcIl0gPSBcInN0YXRlX2V2ZW50XCI7XG4gIEV2ZW50S2luZFtcIlRvRGV2aWNlXCJdID0gXCJ0b19kZXZpY2VcIjtcbiAgRXZlbnRLaW5kW1wiUm9vbUFjY291bnRcIl0gPSBcInJvb21fYWNjb3VudFwiO1xuICByZXR1cm4gRXZlbnRLaW5kO1xufSh7fSk7XG5leHBvcnRzLkV2ZW50S2luZCA9IEV2ZW50S2luZDtcbnZhciBFdmVudERpcmVjdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoRXZlbnREaXJlY3Rpb24pIHtcbiAgRXZlbnREaXJlY3Rpb25bXCJTZW5kXCJdID0gXCJzZW5kXCI7XG4gIEV2ZW50RGlyZWN0aW9uW1wiUmVjZWl2ZVwiXSA9IFwicmVjZWl2ZVwiO1xuICByZXR1cm4gRXZlbnREaXJlY3Rpb247XG59KHt9KTtcbmV4cG9ydHMuRXZlbnREaXJlY3Rpb24gPSBFdmVudERpcmVjdGlvbjtcbnZhciBXaWRnZXRFdmVudENhcGFiaWxpdHkgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBXaWRnZXRFdmVudENhcGFiaWxpdHkoZGlyZWN0aW9uLCBldmVudFR5cGUsIGtpbmQsIGtleVN0ciwgcmF3KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdpZGdldEV2ZW50Q2FwYWJpbGl0eSk7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgdGhpcy5ldmVudFR5cGUgPSBldmVudFR5cGU7XG4gICAgdGhpcy5raW5kID0ga2luZDtcbiAgICB0aGlzLmtleVN0ciA9IGtleVN0cjtcbiAgICB0aGlzLnJhdyA9IHJhdztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LCBbe1xuICAgIGtleTogXCJtYXRjaGVzQXNTdGF0ZUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hdGNoZXNBc1N0YXRlRXZlbnQoZGlyZWN0aW9uLCBldmVudFR5cGUsIHN0YXRlS2V5KSB7XG4gICAgICBpZiAodGhpcy5raW5kICE9PSBFdmVudEtpbmQuU3RhdGUpIHJldHVybiBmYWxzZTsgLy8gbm90IGEgc3RhdGUgZXZlbnRcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiAhPT0gZGlyZWN0aW9uKSByZXR1cm4gZmFsc2U7IC8vIGRpcmVjdGlvbiBtaXNtYXRjaFxuICAgICAgaWYgKHRoaXMuZXZlbnRUeXBlICE9PSBldmVudFR5cGUpIHJldHVybiBmYWxzZTsgLy8gZXZlbnQgdHlwZSBtaXNtYXRjaFxuICAgICAgaWYgKHRoaXMua2V5U3RyID09PSBudWxsKSByZXR1cm4gdHJ1ZTsgLy8gYWxsIHN0YXRlIGtleXMgYXJlIGFsbG93ZWRcbiAgICAgIGlmICh0aGlzLmtleVN0ciA9PT0gc3RhdGVLZXkpIHJldHVybiB0cnVlOyAvLyB0aGlzIHN0YXRlIGtleSBpcyBhbGxvd2VkXG5cbiAgICAgIC8vIERlZmF1bHQgbm90IGFsbG93ZWRcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibWF0Y2hlc0FzVG9EZXZpY2VFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXRjaGVzQXNUb0RldmljZUV2ZW50KGRpcmVjdGlvbiwgZXZlbnRUeXBlKSB7XG4gICAgICBpZiAodGhpcy5raW5kICE9PSBFdmVudEtpbmQuVG9EZXZpY2UpIHJldHVybiBmYWxzZTsgLy8gbm90IGEgdG8tZGV2aWNlIGV2ZW50XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT09IGRpcmVjdGlvbikgcmV0dXJuIGZhbHNlOyAvLyBkaXJlY3Rpb24gbWlzbWF0Y2hcbiAgICAgIGlmICh0aGlzLmV2ZW50VHlwZSAhPT0gZXZlbnRUeXBlKSByZXR1cm4gZmFsc2U7IC8vIGV2ZW50IHR5cGUgbWlzbWF0Y2hcblxuICAgICAgLy8gQ2hlY2tzIHBhc3NlZCwgdGhlIGV2ZW50IGlzIGFsbG93ZWRcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtYXRjaGVzQXNSb29tRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWF0Y2hlc0FzUm9vbUV2ZW50KGRpcmVjdGlvbiwgZXZlbnRUeXBlKSB7XG4gICAgICB2YXIgbXNndHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcbiAgICAgIGlmICh0aGlzLmtpbmQgIT09IEV2ZW50S2luZC5FdmVudCkgcmV0dXJuIGZhbHNlOyAvLyBub3QgYSByb29tIGV2ZW50XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT09IGRpcmVjdGlvbikgcmV0dXJuIGZhbHNlOyAvLyBkaXJlY3Rpb24gbWlzbWF0Y2hcbiAgICAgIGlmICh0aGlzLmV2ZW50VHlwZSAhPT0gZXZlbnRUeXBlKSByZXR1cm4gZmFsc2U7IC8vIGV2ZW50IHR5cGUgbWlzbWF0Y2hcblxuICAgICAgaWYgKHRoaXMuZXZlbnRUeXBlID09PSBcIm0ucm9vbS5tZXNzYWdlXCIpIHtcbiAgICAgICAgaWYgKHRoaXMua2V5U3RyID09PSBudWxsKSByZXR1cm4gdHJ1ZTsgLy8gYWxsIG1lc3NhZ2UgdHlwZXMgYXJlIGFsbG93ZWRcbiAgICAgICAgaWYgKHRoaXMua2V5U3RyID09PSBtc2d0eXBlKSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyBtZXNzYWdlIHR5cGUgaXMgYWxsb3dlZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIGFscmVhZHkgcGFzc2VkIHRoZSBjaGVjayBmb3IgaWYgdGhlIGV2ZW50IGlzIGFsbG93ZWRcbiAgICAgIH1cblxuICAgICAgLy8gRGVmYXVsdCBub3QgYWxsb3dlZFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtYXRjaGVzQXNSb29tQWNjb3VudERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWF0Y2hlc0FzUm9vbUFjY291bnREYXRhKGRpcmVjdGlvbiwgZXZlbnRUeXBlKSB7XG4gICAgICBpZiAodGhpcy5raW5kICE9PSBFdmVudEtpbmQuUm9vbUFjY291bnQpIHJldHVybiBmYWxzZTsgLy8gbm90IHJvb20gYWNjb3VudCBkYXRhXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT09IGRpcmVjdGlvbikgcmV0dXJuIGZhbHNlOyAvLyBkaXJlY3Rpb24gbWlzbWF0Y2hcbiAgICAgIGlmICh0aGlzLmV2ZW50VHlwZSAhPT0gZXZlbnRUeXBlKSByZXR1cm4gZmFsc2U7IC8vIGV2ZW50IHR5cGUgbWlzbWF0Y2hcblxuICAgICAgLy8gQ2hlY2tzIHBhc3NlZCwgdGhlIGV2ZW50IGlzIGFsbG93ZWRcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImZvclN0YXRlRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9yU3RhdGVFdmVudChkaXJlY3Rpb24sIGV2ZW50VHlwZSwgc3RhdGVLZXkpIHtcbiAgICAgIC8vIFRPRE86IEVuYWJsZSBzdXBwb3J0IGZvciBtLiogbmFtZXNwYWNlIG9uY2UgdGhlIE1TQyBsYW5kcy5cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRyaXgtb3JnL21hdHJpeC13aWRnZXQtYXBpL2lzc3Vlcy8yMlxuICAgICAgZXZlbnRUeXBlID0gZXZlbnRUeXBlLnJlcGxhY2UoLyMvZywgJ1xcXFwjJyk7XG4gICAgICBzdGF0ZUtleSA9IHN0YXRlS2V5ICE9PSBudWxsICYmIHN0YXRlS2V5ICE9PSB1bmRlZmluZWQgPyBcIiNcIi5jb25jYXQoc3RhdGVLZXkpIDogJyc7XG4gICAgICB2YXIgc3RyID0gXCJvcmcubWF0cml4Lm1zYzI3NjIuXCIuY29uY2F0KGRpcmVjdGlvbiwgXCIuc3RhdGVfZXZlbnQ6XCIpLmNvbmNhdChldmVudFR5cGUpLmNvbmNhdChzdGF0ZUtleSk7XG5cbiAgICAgIC8vIGNoZWF0IGJ5IHNlbmRpbmcgaXQgdGhyb3VnaCB0aGUgcHJvY2Vzc29yXG4gICAgICByZXR1cm4gV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LmZpbmRFdmVudENhcGFiaWxpdGllcyhbc3RyXSlbMF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvclRvRGV2aWNlRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9yVG9EZXZpY2VFdmVudChkaXJlY3Rpb24sIGV2ZW50VHlwZSkge1xuICAgICAgLy8gVE9ETzogRW5hYmxlIHN1cHBvcnQgZm9yIG0uKiBuYW1lc3BhY2Ugb25jZSB0aGUgTVNDIGxhbmRzLlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdHJpeC1vcmcvbWF0cml4LXdpZGdldC1hcGkvaXNzdWVzLzU2XG4gICAgICB2YXIgc3RyID0gXCJvcmcubWF0cml4Lm1zYzM4MTkuXCIuY29uY2F0KGRpcmVjdGlvbiwgXCIudG9fZGV2aWNlOlwiKS5jb25jYXQoZXZlbnRUeXBlKTtcblxuICAgICAgLy8gY2hlYXQgYnkgc2VuZGluZyBpdCB0aHJvdWdoIHRoZSBwcm9jZXNzb3JcbiAgICAgIHJldHVybiBXaWRnZXRFdmVudENhcGFiaWxpdHkuZmluZEV2ZW50Q2FwYWJpbGl0aWVzKFtzdHJdKVswXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9yUm9vbUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvclJvb21FdmVudChkaXJlY3Rpb24sIGV2ZW50VHlwZSkge1xuICAgICAgLy8gVE9ETzogRW5hYmxlIHN1cHBvcnQgZm9yIG0uKiBuYW1lc3BhY2Ugb25jZSB0aGUgTVNDIGxhbmRzLlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdHJpeC1vcmcvbWF0cml4LXdpZGdldC1hcGkvaXNzdWVzLzIyXG4gICAgICB2YXIgc3RyID0gXCJvcmcubWF0cml4Lm1zYzI3NjIuXCIuY29uY2F0KGRpcmVjdGlvbiwgXCIuZXZlbnQ6XCIpLmNvbmNhdChldmVudFR5cGUpO1xuXG4gICAgICAvLyBjaGVhdCBieSBzZW5kaW5nIGl0IHRocm91Z2ggdGhlIHByb2Nlc3NvclxuICAgICAgcmV0dXJuIFdpZGdldEV2ZW50Q2FwYWJpbGl0eS5maW5kRXZlbnRDYXBhYmlsaXRpZXMoW3N0cl0pWzBdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb3JSb29tTWVzc2FnZUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvclJvb21NZXNzYWdlRXZlbnQoZGlyZWN0aW9uLCBtc2d0eXBlKSB7XG4gICAgICAvLyBUT0RPOiBFbmFibGUgc3VwcG9ydCBmb3IgbS4qIG5hbWVzcGFjZSBvbmNlIHRoZSBNU0MgbGFuZHMuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWF0cml4LW9yZy9tYXRyaXgtd2lkZ2V0LWFwaS9pc3N1ZXMvMjJcbiAgICAgIG1zZ3R5cGUgPSBtc2d0eXBlID09PSBudWxsIHx8IG1zZ3R5cGUgPT09IHVuZGVmaW5lZCA/ICcnIDogbXNndHlwZTtcbiAgICAgIHZhciBzdHIgPSBcIm9yZy5tYXRyaXgubXNjMjc2Mi5cIi5jb25jYXQoZGlyZWN0aW9uLCBcIi5ldmVudDptLnJvb20ubWVzc2FnZSNcIikuY29uY2F0KG1zZ3R5cGUpO1xuXG4gICAgICAvLyBjaGVhdCBieSBzZW5kaW5nIGl0IHRocm91Z2ggdGhlIHByb2Nlc3NvclxuICAgICAgcmV0dXJuIFdpZGdldEV2ZW50Q2FwYWJpbGl0eS5maW5kRXZlbnRDYXBhYmlsaXRpZXMoW3N0cl0pWzBdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb3JSb29tQWNjb3VudERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9yUm9vbUFjY291bnREYXRhKGRpcmVjdGlvbiwgZXZlbnRUeXBlKSB7XG4gICAgICB2YXIgc3RyID0gXCJjb20uYmVlcGVyLmNhcGFiaWxpdGllcy5cIi5jb25jYXQoZGlyZWN0aW9uLCBcIi5yb29tX2FjY291bnRfZGF0YTpcIikuY29uY2F0KGV2ZW50VHlwZSk7XG4gICAgICByZXR1cm4gV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LmZpbmRFdmVudENhcGFiaWxpdGllcyhbc3RyXSlbMF07XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZXMgYSBjYXBhYmlsaXRpZXMgcmVxdWVzdCB0byBmaW5kIGFsbCB0aGUgZXZlbnQgY2FwYWJpbGl0eSByZXF1ZXN0cy5cclxuICAgICAqIEBwYXJhbSB7SXRlcmFibGU8Q2FwYWJpbGl0eT59IGNhcGFiaWxpdGllcyBUaGUgY2FwYWJpbGl0aWVzIHJlcXVlc3RlZC90byBwYXJzZS5cclxuICAgICAqIEByZXR1cm5zIHtXaWRnZXRFdmVudENhcGFiaWxpdHlbXX0gQW4gYXJyYXkgb2YgZXZlbnQgY2FwYWJpbGl0eSByZXF1ZXN0cy4gTWF5IGJlIGVtcHR5LCBidXQgbmV2ZXIgbnVsbC5cclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImZpbmRFdmVudENhcGFiaWxpdGllc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kRXZlbnRDYXBhYmlsaXRpZXMoY2FwYWJpbGl0aWVzKSB7XG4gICAgICB2YXIgcGFyc2VkID0gW107XG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoY2FwYWJpbGl0aWVzKSxcbiAgICAgICAgX3N0ZXA7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICAgIHZhciBjYXAgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICB2YXIgX2RpcmVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgdmFyIGV2ZW50U2VnbWVudCA9IHZvaWQgMDtcbiAgICAgICAgICB2YXIgX2tpbmQgPSBudWxsO1xuXG4gICAgICAgICAgLy8gVE9ETzogRW5hYmxlIHN1cHBvcnQgZm9yIG0uKiBuYW1lc3BhY2Ugb25jZSB0aGUgTVNDcyBsYW5kLlxuICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRyaXgtb3JnL21hdHJpeC13aWRnZXQtYXBpL2lzc3Vlcy8yMlxuICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRyaXgtb3JnL21hdHJpeC13aWRnZXQtYXBpL2lzc3Vlcy81NlxuXG4gICAgICAgICAgaWYgKGNhcC5zdGFydHNXaXRoKFwib3JnLm1hdHJpeC5tc2MyNzYyLnNlbmQuZXZlbnQ6XCIpKSB7XG4gICAgICAgICAgICBfZGlyZWN0aW9uID0gRXZlbnREaXJlY3Rpb24uU2VuZDtcbiAgICAgICAgICAgIF9raW5kID0gRXZlbnRLaW5kLkV2ZW50O1xuICAgICAgICAgICAgZXZlbnRTZWdtZW50ID0gY2FwLnN1YnN0cmluZyhcIm9yZy5tYXRyaXgubXNjMjc2Mi5zZW5kLmV2ZW50OlwiLmxlbmd0aCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjYXAuc3RhcnRzV2l0aChcIm9yZy5tYXRyaXgubXNjMjc2Mi5zZW5kLnN0YXRlX2V2ZW50OlwiKSkge1xuICAgICAgICAgICAgX2RpcmVjdGlvbiA9IEV2ZW50RGlyZWN0aW9uLlNlbmQ7XG4gICAgICAgICAgICBfa2luZCA9IEV2ZW50S2luZC5TdGF0ZTtcbiAgICAgICAgICAgIGV2ZW50U2VnbWVudCA9IGNhcC5zdWJzdHJpbmcoXCJvcmcubWF0cml4Lm1zYzI3NjIuc2VuZC5zdGF0ZV9ldmVudDpcIi5sZW5ndGgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY2FwLnN0YXJ0c1dpdGgoXCJvcmcubWF0cml4Lm1zYzM4MTkuc2VuZC50b19kZXZpY2U6XCIpKSB7XG4gICAgICAgICAgICBfZGlyZWN0aW9uID0gRXZlbnREaXJlY3Rpb24uU2VuZDtcbiAgICAgICAgICAgIF9raW5kID0gRXZlbnRLaW5kLlRvRGV2aWNlO1xuICAgICAgICAgICAgZXZlbnRTZWdtZW50ID0gY2FwLnN1YnN0cmluZyhcIm9yZy5tYXRyaXgubXNjMzgxOS5zZW5kLnRvX2RldmljZTpcIi5sZW5ndGgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY2FwLnN0YXJ0c1dpdGgoXCJvcmcubWF0cml4Lm1zYzI3NjIucmVjZWl2ZS5ldmVudDpcIikpIHtcbiAgICAgICAgICAgIF9kaXJlY3Rpb24gPSBFdmVudERpcmVjdGlvbi5SZWNlaXZlO1xuICAgICAgICAgICAgX2tpbmQgPSBFdmVudEtpbmQuRXZlbnQ7XG4gICAgICAgICAgICBldmVudFNlZ21lbnQgPSBjYXAuc3Vic3RyaW5nKFwib3JnLm1hdHJpeC5tc2MyNzYyLnJlY2VpdmUuZXZlbnQ6XCIubGVuZ3RoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNhcC5zdGFydHNXaXRoKFwib3JnLm1hdHJpeC5tc2MyNzYyLnJlY2VpdmUuc3RhdGVfZXZlbnQ6XCIpKSB7XG4gICAgICAgICAgICBfZGlyZWN0aW9uID0gRXZlbnREaXJlY3Rpb24uUmVjZWl2ZTtcbiAgICAgICAgICAgIF9raW5kID0gRXZlbnRLaW5kLlN0YXRlO1xuICAgICAgICAgICAgZXZlbnRTZWdtZW50ID0gY2FwLnN1YnN0cmluZyhcIm9yZy5tYXRyaXgubXNjMjc2Mi5yZWNlaXZlLnN0YXRlX2V2ZW50OlwiLmxlbmd0aCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjYXAuc3RhcnRzV2l0aChcIm9yZy5tYXRyaXgubXNjMzgxOS5yZWNlaXZlLnRvX2RldmljZTpcIikpIHtcbiAgICAgICAgICAgIF9kaXJlY3Rpb24gPSBFdmVudERpcmVjdGlvbi5SZWNlaXZlO1xuICAgICAgICAgICAgX2tpbmQgPSBFdmVudEtpbmQuVG9EZXZpY2U7XG4gICAgICAgICAgICBldmVudFNlZ21lbnQgPSBjYXAuc3Vic3RyaW5nKFwib3JnLm1hdHJpeC5tc2MzODE5LnJlY2VpdmUudG9fZGV2aWNlOlwiLmxlbmd0aCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjYXAuc3RhcnRzV2l0aChcImNvbS5iZWVwZXIuY2FwYWJpbGl0aWVzLnJlY2VpdmUucm9vbV9hY2NvdW50X2RhdGE6XCIpKSB7XG4gICAgICAgICAgICBfZGlyZWN0aW9uID0gRXZlbnREaXJlY3Rpb24uUmVjZWl2ZTtcbiAgICAgICAgICAgIF9raW5kID0gRXZlbnRLaW5kLlJvb21BY2NvdW50O1xuICAgICAgICAgICAgZXZlbnRTZWdtZW50ID0gY2FwLnN1YnN0cmluZyhcImNvbS5iZWVwZXIuY2FwYWJpbGl0aWVzLnJlY2VpdmUucm9vbV9hY2NvdW50X2RhdGE6XCIubGVuZ3RoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKF9kaXJlY3Rpb24gPT09IG51bGwgfHwgX2tpbmQgPT09IG51bGwgfHwgZXZlbnRTZWdtZW50ID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgLy8gVGhlIGNhcGFiaWxpdHkgdXNlcyBgI2AgYXMgYSBzZXBhcmF0b3IgYmV0d2VlbiBldmVudCB0eXBlIGFuZCBzdGF0ZSBrZXkvbXNndHlwZSxcbiAgICAgICAgICAvLyBzbyB3ZSBzcGxpdCBvbiB0aGF0LiBIb3dldmVyLCBhICMgaXMgYWxzbyB2YWxpZCBpbiBlaXRoZXIgb25lIG9mIHRob3NlIHNvIHdlXG4gICAgICAgICAgLy8gam9pbiBhY2NvcmRpbmdseS5cbiAgICAgICAgICAvLyBFZzogYG0ucm9vbS5tZXNzYWdlIyNtLnRleHRgIGlzIFwibS5yb29tLm1lc3NhZ2VcIiBldmVudCB3aXRoIG1zZ3R5cGUgXCIjbS50ZXh0XCIuXG4gICAgICAgICAgdmFyIGV4cGVjdGluZ0tleVN0ciA9IGV2ZW50U2VnbWVudC5zdGFydHNXaXRoKFwibS5yb29tLm1lc3NhZ2UjXCIpIHx8IF9raW5kID09PSBFdmVudEtpbmQuU3RhdGU7XG4gICAgICAgICAgdmFyIF9rZXlTdHIgPSBudWxsO1xuICAgICAgICAgIGlmIChldmVudFNlZ21lbnQuaW5jbHVkZXMoJyMnKSAmJiBleHBlY3RpbmdLZXlTdHIpIHtcbiAgICAgICAgICAgIC8vIERldiBub3RlOiByZWdleCBpcyBkaWZmaWN1bHQgdG8gd3JpdGUsIHNvIGluc3RlYWQgdGhlIHJ1bGVzIGFyZSBtYW51YWxseSB3cml0dGVuXG4gICAgICAgICAgICAvLyBvdXQuIFRoaXMgaXMgcHJvYmFibHkganVzdCBhcyB1bmRlcnN0YW5kYWJsZSBhcyBhIGJvcmluZyByZWdleCB0aG91Z2gsIHNvIHdpbi13aW4/XG5cbiAgICAgICAgICAgIC8vIFRlc3QgY2FzZXM6XG4gICAgICAgICAgICAvLyBzdHIgICAgICAgICAgICAgICAgICAgICAgZXZlbnRTZWdtZW50ICAgICAgICBrZXlTdHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIG0ucm9vbS5tZXNzYWdlIyAgICAgICAgICBtLnJvb20ubWVzc2FnZSAgICAgIDxlbXB0eSBzdHJpbmc+XG4gICAgICAgICAgICAvLyBtLnJvb20ubWVzc2FnZSN0ZXN0ICAgICAgbS5yb29tLm1lc3NhZ2UgICAgICB0ZXN0XG4gICAgICAgICAgICAvLyBtLnJvb20ubWVzc2FnZVxcIyAgICAgICAgIG0ucm9vbS5tZXNzYWdlIyAgICAgdGVzdFxuICAgICAgICAgICAgLy8gbS5yb29tLm1lc3NhZ2UjI3Rlc3QgICAgIG0ucm9vbS5tZXNzYWdlICAgICAgI3Rlc3RcbiAgICAgICAgICAgIC8vIG0ucm9vbS5tZXNzYWdlXFwjI3Rlc3QgICAgbS5yb29tLm1lc3NhZ2UjICAgICB0ZXN0XG4gICAgICAgICAgICAvLyBtLnJvb20ubWVzc2FnZVxcXFwjI3Rlc3QgICBtLnJvb20ubWVzc2FnZVxcIyAgICB0ZXN0XG4gICAgICAgICAgICAvLyBtLnJvb20ubWVzc2FnZVxcXFwjIyN0ZXN0ICBtLnJvb20ubWVzc2FnZVxcIyAgICAjdGVzdFxuXG4gICAgICAgICAgICAvLyBGaXJzdCBzdGVwOiBleHBsb2RlIHRoZSBzdHJpbmdcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGV2ZW50U2VnbWVudC5zcGxpdCgnIycpO1xuXG4gICAgICAgICAgICAvLyBUbyBmb3JtIHRoZSBldmVudFNlZ21lbnQsIHdlJ2xsIGtlZXAgZmluZGluZyBwYXJ0cyBvZiB0aGUgZXhwbG9kZWQgc3RyaW5nIHVudGlsXG4gICAgICAgICAgICAvLyB0aGVyZSdzIG9uZSB0aGF0IGRvZXNuJ3QgZW5kIHdpdGggdGhlIGVzY2FwZSBjaGFyYWN0ZXIgKFxcKS4gV2UnbGwgdGhlbiBqb2luIHRob3NlXG4gICAgICAgICAgICAvLyBzZWdtZW50cyB0b2dldGhlciB3aXRoIHRoZSBleHBsb2RpbmcgY2hhcmFjdGVyLiBXZSBoYXZlIHRvIHJlbWVtYmVyIHRvIGNvbnN1bWUgdGhlXG4gICAgICAgICAgICAvLyBlc2NhcGUgY2hhcmFjdGVyIGFzIHdlbGwuXG4gICAgICAgICAgICB2YXIgaWR4ID0gcGFydHMuZmluZEluZGV4KGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgIHJldHVybiAhcC5lbmRzV2l0aChcIlxcXFxcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGV2ZW50U2VnbWVudCA9IHBhcnRzLnNsaWNlKDAsIGlkeCArIDEpLm1hcChmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICByZXR1cm4gcC5lbmRzV2l0aCgnXFxcXCcpID8gcC5zdWJzdHJpbmcoMCwgcC5sZW5ndGggLSAxKSA6IHA7XG4gICAgICAgICAgICB9KS5qb2luKCcjJyk7XG5cbiAgICAgICAgICAgIC8vIFRoZSBrZXlTdHIgaXMgd2hhdGV2ZXIgaXMgbGVmdCBvdmVyLlxuICAgICAgICAgICAgX2tleVN0ciA9IHBhcnRzLnNsaWNlKGlkeCArIDEpLmpvaW4oJyMnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFyc2VkLnB1c2gobmV3IFdpZGdldEV2ZW50Q2FwYWJpbGl0eShfZGlyZWN0aW9uLCBldmVudFNlZ21lbnQsIF9raW5kLCBfa2V5U3RyLCBjYXApKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfaXRlcmF0b3IuZigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFdpZGdldEV2ZW50Q2FwYWJpbGl0eTtcbn0oKTtcbmV4cG9ydHMuV2lkZ2V0RXZlbnRDYXBhYmlsaXR5ID0gV2lkZ2V0RXZlbnRDYXBhYmlsaXR5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2lkZ2V0RXZlbnRDYXBhYmlsaXR5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5XaWRnZXRQYXJzZXIgPSB2b2lkIDA7XG52YXIgX1dpZGdldCA9IHJlcXVpcmUoXCIuL1dpZGdldFwiKTtcbnZhciBfdXJsID0gcmVxdWlyZShcIi4vdmFsaWRhdGlvbi91cmxcIik7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTsgaWYgKCFpdCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBpdC5jYWxsKG8pOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1wicmV0dXJuXCJdICE9IG51bGwpIGl0W1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTsgcmV0dXJuIGFycjI7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfSAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQ29weXJpZ2h0IDIwMjAgVGhlIE1hdHJpeC5vcmcgRm91bmRhdGlvbiBDLkkuQy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG52YXIgV2lkZ2V0UGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gV2lkZ2V0UGFyc2VyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXaWRnZXRQYXJzZXIpO1xuICB9IC8vIHByaXZhdGUgY29uc3RydWN0b3IgYmVjYXVzZSB0aGlzIGlzIGEgdXRpbCBjbGFzc1xuXG4gIC8qKlxyXG4gICAqIFBhcnNlcyB3aWRnZXRzIGZyb20gdGhlIFwibS53aWRnZXRzXCIgYWNjb3VudCBkYXRhIGV2ZW50LiBUaGlzIHdpbGwgYWx3YXlzXHJcbiAgICogcmV0dXJuIGFuIGFycmF5LCB0aG91Z2ggbWF5IGJlIGVtcHR5IGlmIG5vIHZhbGlkIHdpZGdldHMgd2VyZSBmb3VuZC5cclxuICAgKiBAcGFyYW0ge0lBY2NvdW50RGF0YVdpZGdldHN9IGNvbnRlbnQgVGhlIGNvbnRlbnQgb2YgdGhlIFwibS53aWRnZXRzXCIgYWNjb3VudCBkYXRhLlxyXG4gICAqIEByZXR1cm5zIHtXaWRnZXRbXX0gVGhlIHdpZGdldHMgaW4gYWNjb3VudCBkYXRhLCBvciBhbiBlbXB0eSBhcnJheS5cclxuICAgKi9cbiAgX2NyZWF0ZUNsYXNzKFdpZGdldFBhcnNlciwgbnVsbCwgW3tcbiAgICBrZXk6IFwicGFyc2VBY2NvdW50RGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZUFjY291bnREYXRhKGNvbnRlbnQpIHtcbiAgICAgIGlmICghY29udGVudCkgcmV0dXJuIFtdO1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgZm9yICh2YXIgX2kgPSAwLCBfT2JqZWN0JGtleXMgPSBPYmplY3Qua2V5cyhjb250ZW50KTsgX2kgPCBfT2JqZWN0JGtleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBfd2lkZ2V0SWQgPSBfT2JqZWN0JGtleXNbX2ldO1xuICAgICAgICB2YXIgcm91Z2hXaWRnZXQgPSBjb250ZW50W193aWRnZXRJZF07XG4gICAgICAgIGlmICghcm91Z2hXaWRnZXQpIGNvbnRpbnVlO1xuICAgICAgICBpZiAocm91Z2hXaWRnZXQudHlwZSAhPT0gXCJtLndpZGdldFwiICYmIHJvdWdoV2lkZ2V0LnR5cGUgIT09IFwiaW0udmVjdG9yLm1vZHVsYXIud2lkZ2V0c1wiKSBjb250aW51ZTtcbiAgICAgICAgaWYgKCFyb3VnaFdpZGdldC5zZW5kZXIpIGNvbnRpbnVlO1xuICAgICAgICB2YXIgcHJvYmFibGVXaWRnZXRJZCA9IHJvdWdoV2lkZ2V0LnN0YXRlX2tleSB8fCByb3VnaFdpZGdldC5pZDtcbiAgICAgICAgaWYgKHByb2JhYmxlV2lkZ2V0SWQgIT09IF93aWRnZXRJZCkgY29udGludWU7XG4gICAgICAgIHZhciBhc1N0YXRlRXZlbnQgPSB7XG4gICAgICAgICAgY29udGVudDogcm91Z2hXaWRnZXQuY29udGVudCxcbiAgICAgICAgICBzZW5kZXI6IHJvdWdoV2lkZ2V0LnNlbmRlcixcbiAgICAgICAgICB0eXBlOiBcIm0ud2lkZ2V0XCIsXG4gICAgICAgICAgc3RhdGVfa2V5OiBfd2lkZ2V0SWQsXG4gICAgICAgICAgZXZlbnRfaWQ6IFwiJGV4YW1wbGVcIixcbiAgICAgICAgICByb29tX2lkOiBcIiFleGFtcGxlXCIsXG4gICAgICAgICAgb3JpZ2luX3NlcnZlcl90czogMVxuICAgICAgICB9O1xuICAgICAgICB2YXIgd2lkZ2V0ID0gV2lkZ2V0UGFyc2VyLnBhcnNlUm9vbVdpZGdldChhc1N0YXRlRXZlbnQpO1xuICAgICAgICBpZiAod2lkZ2V0KSByZXN1bHQucHVzaCh3aWRnZXQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFBhcnNlcyBhbGwgdGhlIHdpZGdldHMgcG9zc2libGUgaW4gdGhlIGdpdmVuIGFycmF5LiBUaGlzIHdpbGwgYWx3YXlzIHJldHVyblxyXG4gICAgICogYW4gYXJyYXksIHRob3VnaCBtYXkgYmUgZW1wdHkgaWYgbm8gd2lkZ2V0cyBjb3VsZCBiZSBwYXJzZWQuXHJcbiAgICAgKiBAcGFyYW0ge0lTdGF0ZUV2ZW50W119IGN1cnJlbnRTdGF0ZSBUaGUgcm9vbSBzdGF0ZSB0byBwYXJzZS5cclxuICAgICAqIEByZXR1cm5zIHtXaWRnZXRbXX0gVGhlIHdpZGdldHMgaW4gdGhlIHN0YXRlLCBvciBhbiBlbXB0eSBhcnJheS5cclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInBhcnNlV2lkZ2V0c0Zyb21Sb29tU3RhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2VXaWRnZXRzRnJvbVJvb21TdGF0ZShjdXJyZW50U3RhdGUpIHtcbiAgICAgIGlmICghY3VycmVudFN0YXRlKSByZXR1cm4gW107XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoY3VycmVudFN0YXRlKSxcbiAgICAgICAgX3N0ZXA7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICAgIHZhciBzdGF0ZSA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgIHZhciB3aWRnZXQgPSBXaWRnZXRQYXJzZXIucGFyc2VSb29tV2lkZ2V0KHN0YXRlKTtcbiAgICAgICAgICBpZiAod2lkZ2V0KSByZXN1bHQucHVzaCh3aWRnZXQpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogUGFyc2VzIGEgc3RhdGUgZXZlbnQgaW50byBhIHdpZGdldC4gSWYgdGhlIHN0YXRlIGV2ZW50IGRvZXMgbm90IHJlcHJlc2VudFxyXG4gICAgICogYSB3aWRnZXQgKHdyb25nIGV2ZW50IHR5cGUsIGludmFsaWQgd2lkZ2V0LCBldGMpIHRoZW4gbnVsbCBpcyByZXR1cm5lZC5cclxuICAgICAqIEBwYXJhbSB7SVN0YXRlRXZlbnR9IHN0YXRlRXZlbnQgVGhlIHN0YXRlIGV2ZW50LlxyXG4gICAgICogQHJldHVybnMge1dpZGdldHxudWxsfSBUaGUgd2lkZ2V0LCBvciBudWxsIGlmIGludmFsaWRcclxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInBhcnNlUm9vbVdpZGdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZVJvb21XaWRnZXQoc3RhdGVFdmVudCkge1xuICAgICAgaWYgKCFzdGF0ZUV2ZW50KSByZXR1cm4gbnVsbDtcblxuICAgICAgLy8gVE9ETzogW0xlZ2FjeV0gUmVtb3ZlIGxlZ2FjeSBzdXBwb3J0XG4gICAgICBpZiAoc3RhdGVFdmVudC50eXBlICE9PSBcIm0ud2lkZ2V0XCIgJiYgc3RhdGVFdmVudC50eXBlICE9PSBcImltLnZlY3Rvci5tb2R1bGFyLndpZGdldHNcIikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gRGV2IG5vdGU6IFRocm91Z2hvdXQgdGhpcyBmdW5jdGlvbiB3ZSBoYXZlIG51bGwgc2FmZXR5IHRvIGVuc3VyZSB0aGF0XG4gICAgICAvLyBpZiB0aGUgY2FsbGVyIGRpZCBub3Qgc3VwcGx5IHNvbWV0aGluZyB1c2VmdWwgdGhhdCB3ZSBkb24ndCBlcnJvci4gVGhpc1xuICAgICAgLy8gaXMgZG9uZSBhZ2FpbnN0IHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIGludGVyZmFjZSBiZWNhdXNlIG5vdCBldmVyeW9uZVxuICAgICAgLy8gd2lsbCBoYXZlIGFuIGludGVyZmFjZSB0byB2YWxpZGF0ZSBhZ2FpbnN0LlxuXG4gICAgICB2YXIgY29udGVudCA9IHN0YXRlRXZlbnQuY29udGVudCB8fCB7fTtcblxuICAgICAgLy8gRm9ybSBvdXIgYmVzdCBhcHByb3hpbWF0aW9uIG9mIGEgd2lkZ2V0IHdpdGggdGhlIGluZm9ybWF0aW9uIHdlIGhhdmVcbiAgICAgIHZhciBlc3RpbWF0ZWRXaWRnZXQgPSB7XG4gICAgICAgIGlkOiBzdGF0ZUV2ZW50LnN0YXRlX2tleSxcbiAgICAgICAgY3JlYXRvclVzZXJJZDogY29udGVudFsnY3JlYXRvclVzZXJJZCddIHx8IHN0YXRlRXZlbnQuc2VuZGVyLFxuICAgICAgICBuYW1lOiBjb250ZW50WyduYW1lJ10sXG4gICAgICAgIHR5cGU6IGNvbnRlbnRbJ3R5cGUnXSxcbiAgICAgICAgdXJsOiBjb250ZW50Wyd1cmwnXSxcbiAgICAgICAgd2FpdEZvcklmcmFtZUxvYWQ6IGNvbnRlbnRbJ3dhaXRGb3JJZnJhbWVMb2FkJ10sXG4gICAgICAgIGRhdGE6IGNvbnRlbnRbJ2RhdGEnXVxuICAgICAgfTtcblxuICAgICAgLy8gRmluYWxseSwgcHJvY2VzcyB0aGF0IHdpZGdldFxuICAgICAgcmV0dXJuIFdpZGdldFBhcnNlci5wcm9jZXNzRXN0aW1hdGVkV2lkZ2V0KGVzdGltYXRlZFdpZGdldCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInByb2Nlc3NFc3RpbWF0ZWRXaWRnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJvY2Vzc0VzdGltYXRlZFdpZGdldCh3aWRnZXQpIHtcbiAgICAgIC8vIFZhbGlkYXRlIHRoYXQgdGhlIHdpZGdldCBoYXMgdGhlIGJlc3QgY2hhbmNlIG9mIHBhc3NpbmcgYXMgYSB3aWRnZXRcbiAgICAgIGlmICghd2lkZ2V0LmlkIHx8ICF3aWRnZXQuY3JlYXRvclVzZXJJZCB8fCAhd2lkZ2V0LnR5cGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAoISgwLCBfdXJsLmlzVmFsaWRVcmwpKHdpZGdldC51cmwpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgLy8gVE9ETzogVmFsaWRhdGUgZGF0YSBmb3Iga25vd24gd2lkZ2V0IHR5cGVzXG4gICAgICByZXR1cm4gbmV3IF9XaWRnZXQuV2lkZ2V0KHdpZGdldCk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBXaWRnZXRQYXJzZXI7XG59KCk7XG5leHBvcnRzLldpZGdldFBhcnNlciA9IFdpZGdldFBhcnNlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdpZGdldFBhcnNlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaXNWYWxpZFVybCA9IGlzVmFsaWRVcmw7XG4vKlxyXG4gKiBDb3B5cmlnaHQgMjAyMCBUaGUgTWF0cml4Lm9yZyBGb3VuZGF0aW9uIEMuSS5DLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkVXJsKHZhbCkge1xuICBpZiAoIXZhbCkgcmV0dXJuIGZhbHNlOyAvLyBlYXN5OiBub3QgdmFsaWQgaWYgbm90IHByZXNlbnRcblxuICB0cnkge1xuICAgIHZhciBwYXJzZWQgPSBuZXcgVVJMKHZhbCk7XG4gICAgaWYgKHBhcnNlZC5wcm90b2NvbCAhPT0gXCJodHRwXCIgJiYgcGFyc2VkLnByb3RvY29sICE9PSBcImh0dHBzXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFR5cGVFcnJvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aHJvdyBlO1xuICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmFzc2VydFByZXNlbnQgPSBhc3NlcnRQcmVzZW50O1xuLypcclxuICogQ29weXJpZ2h0IDIwMjAgVGhlIE1hdHJpeC5vcmcgRm91bmRhdGlvbiBDLkkuQy5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cblxuZnVuY3Rpb24gYXNzZXJ0UHJlc2VudChvYmosIGtleSkge1xuICBpZiAoIW9ialtrZXldKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KFN0cmluZyhrZXkpLCBcIiBpcyByZXF1aXJlZFwiKSk7XG4gIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ydW5UZW1wbGF0ZSA9IHJ1blRlbXBsYXRlO1xuZXhwb3J0cy50b1N0cmluZyA9IHRvU3RyaW5nO1xuLypcclxuICogQ29weXJpZ2h0IDIwMjAsIDIwMjEgVGhlIE1hdHJpeC5vcmcgRm91bmRhdGlvbiBDLkkuQy5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cblxuZnVuY3Rpb24gcnVuVGVtcGxhdGUodXJsLCB3aWRnZXQsIHBhcmFtcykge1xuICAvLyBBbHdheXMgYXBwbHkgdGhlIHN1cHBsaWVkIHBhcmFtcyBvdmVyIHRvcCBvZiBkYXRhIHRvIGVuc3VyZSB0aGUgZGF0YSBjYW4ndCBsaWUgYWJvdXQgdGhlbS5cbiAgdmFyIHZhcmlhYmxlcyA9IE9iamVjdC5hc3NpZ24oe30sIHdpZGdldC5kYXRhLCB7XG4gICAgJ21hdHJpeF9yb29tX2lkJzogcGFyYW1zLndpZGdldFJvb21JZCB8fCBcIlwiLFxuICAgICdtYXRyaXhfdXNlcl9pZCc6IHBhcmFtcy5jdXJyZW50VXNlcklkLFxuICAgICdtYXRyaXhfZGlzcGxheV9uYW1lJzogcGFyYW1zLnVzZXJEaXNwbGF5TmFtZSB8fCBwYXJhbXMuY3VycmVudFVzZXJJZCxcbiAgICAnbWF0cml4X2F2YXRhcl91cmwnOiBwYXJhbXMudXNlckh0dHBBdmF0YXJVcmwgfHwgXCJcIixcbiAgICAnbWF0cml4X3dpZGdldF9pZCc6IHdpZGdldC5pZCxcbiAgICAvLyBUT0RPOiBDb252ZXJ0IHRvIHN0YWJsZSAoaHR0cHM6Ly9naXRodWIuY29tL21hdHJpeC1vcmcvbWF0cml4LWRvYy9wdWxsLzI4NzMpXG4gICAgJ29yZy5tYXRyaXgubXNjMjg3My5jbGllbnRfaWQnOiBwYXJhbXMuY2xpZW50SWQgfHwgXCJcIixcbiAgICAnb3JnLm1hdHJpeC5tc2MyODczLmNsaWVudF90aGVtZSc6IHBhcmFtcy5jbGllbnRUaGVtZSB8fCBcIlwiLFxuICAgICdvcmcubWF0cml4Lm1zYzI4NzMuY2xpZW50X2xhbmd1YWdlJzogcGFyYW1zLmNsaWVudExhbmd1YWdlIHx8IFwiXCIsXG4gICAgLy8gVE9ETzogQ29udmVydCB0byBzdGFibGUgKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRyaXgtb3JnL21hdHJpeC1zcGVjLXByb3Bvc2Fscy9wdWxsLzM4MTkpXG4gICAgJ29yZy5tYXRyaXgubXNjMzgxOS5tYXRyaXhfZGV2aWNlX2lkJzogcGFyYW1zLmRldmljZUlkIHx8IFwiXCIsXG4gICAgLy8gVE9ETzogQ29udmVydCB0byBzdGFibGUgKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRyaXgtb3JnL21hdHJpeC1zcGVjLXByb3Bvc2Fscy9wdWxsLzQwMzkpXG4gICAgJ29yZy5tYXRyaXgubXNjNDAzOS5tYXRyaXhfYmFzZV91cmwnOiBwYXJhbXMuYmFzZVVybCB8fCBcIlwiXG4gIH0pO1xuICB2YXIgcmVzdWx0ID0gdXJsO1xuICBmb3IgKHZhciBfaSA9IDAsIF9PYmplY3Qka2V5cyA9IE9iamVjdC5rZXlzKHZhcmlhYmxlcyk7IF9pIDwgX09iamVjdCRrZXlzLmxlbmd0aDsgX2krKykge1xuICAgIHZhciBrZXkgPSBfT2JqZWN0JGtleXNbX2ldO1xuICAgIC8vIFJlZ2V4IGVzY2FwZSBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS82OTY5NDg2LzcwMzczNzlcbiAgICB2YXIgcGF0dGVybiA9IFwiJFwiLmNvbmNhdChrZXkpLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7IC8vICQmIG1lYW5zIHRoZSB3aG9sZSBtYXRjaGVkIHN0cmluZ1xuICAgIHZhciByZXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuLCAnZycpO1xuXG4gICAgLy8gVGhpcyBpcyB0ZWNobmljYWxseSBub3Qgd2hhdCB3ZSdyZSBzdXBwb3NlZCB0byBkbyBmb3IgYSBjb3VwbGUgb2YgcmVhc29uczpcbiAgICAvLyAxLiBXZSBhcmUgYXNzdW1pbmcgdGhhdCB0aGVyZSB3b24ndCBsYXRlciBiZSBhICRrZXkgbWF0Y2ggYWZ0ZXIgd2UgcmVwbGFjZSBhIHZhcmlhYmxlLlxuICAgIC8vIDIuIFdlIGFyZSBhc3N1bWluZyB0aGF0IHRoZSB2YXJpYWJsZSBpcyBpbiBhIHBsYWNlIHdoZXJlIGl0IGNhbiBiZSBlc2NhcGVkIChlZzogcGF0aCBvciBxdWVyeSBzdHJpbmcpLlxuICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKHJleHAsIGVuY29kZVVSSUNvbXBvbmVudCh0b1N0cmluZyh2YXJpYWJsZXNba2V5XSkpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gdG9TdHJpbmcoYSkge1xuICBpZiAoYSA9PT0gbnVsbCB8fCBhID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoYSk7XG4gIH1cbiAgcmV0dXJuIFN0cmluZyhhKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVybC10ZW1wbGF0ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlUcmFuc3BvcnQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlBvc3RtZXNzYWdlVHJhbnNwb3J0ID0gdm9pZCAwO1xudmFyIF9ldmVudHMgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xudmFyIF8gPSByZXF1aXJlKFwiLi5cIik7XG52YXIgX2V4Y2x1ZGVkID0gW1wibWVzc2FnZVwiXTtcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpOyB9IH1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfSAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQ29weXJpZ2h0IDIwMjAgLSAyMDI0IFRoZSBNYXRyaXgub3JnIEZvdW5kYXRpb24gQy5JLkMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyoqXHJcbiAqIFRyYW5zcG9ydCBmb3IgdGhlIFdpZGdldCBBUEkgb3ZlciBwb3N0TWVzc2FnZS5cclxuICovXG52YXIgUG9zdG1lc3NhZ2VUcmFuc3BvcnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9FdmVudEVtaXR0ZXIpIHtcbiAgX2luaGVyaXRzKFBvc3RtZXNzYWdlVHJhbnNwb3J0LCBfRXZlbnRFbWl0dGVyKTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQb3N0bWVzc2FnZVRyYW5zcG9ydCk7XG4gIGZ1bmN0aW9uIFBvc3RtZXNzYWdlVHJhbnNwb3J0KHNlbmREaXJlY3Rpb24sIGluaXRpYWxXaWRnZXRJZCwgdHJhbnNwb3J0V2luZG93LCBpbmJvdW5kV2luZG93KSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb3N0bWVzc2FnZVRyYW5zcG9ydCk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICBfdGhpcy5zZW5kRGlyZWN0aW9uID0gc2VuZERpcmVjdGlvbjtcbiAgICBfdGhpcy5pbml0aWFsV2lkZ2V0SWQgPSBpbml0aWFsV2lkZ2V0SWQ7XG4gICAgX3RoaXMudHJhbnNwb3J0V2luZG93ID0gdHJhbnNwb3J0V2luZG93O1xuICAgIF90aGlzLmluYm91bmRXaW5kb3cgPSBpbmJvdW5kV2luZG93O1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdHJpY3RPcmlnaW5DaGVja1wiLCBmYWxzZSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInRhcmdldE9yaWdpblwiLCBcIipcIik7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInRpbWVvdXRTZWNvbmRzXCIsIDEwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3JlYWR5XCIsIGZhbHNlKTtcbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3dpZGdldElkXCIsIG51bGwpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvdXRib3VuZFJlcXVlc3RzXCIsIG5ldyBNYXAoKSk7XG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0b3BDb250cm9sbGVyXCIsIG5ldyBBYm9ydENvbnRyb2xsZXIoKSk7XG4gICAgX3RoaXMuX3dpZGdldElkID0gaW5pdGlhbFdpZGdldElkO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBfY3JlYXRlQ2xhc3MoUG9zdG1lc3NhZ2VUcmFuc3BvcnQsIFt7XG4gICAga2V5OiBcInJlYWR5XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVhZHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIndpZGdldElkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd2lkZ2V0SWQgfHwgbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibmV4dFJlcXVlc3RJZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIGlkQmFzZSA9IFwid2lkZ2V0YXBpLVwiLmNvbmNhdChEYXRlLm5vdygpKTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgaWQgPSBpZEJhc2U7XG4gICAgICB3aGlsZSAodGhpcy5vdXRib3VuZFJlcXVlc3RzLmhhcyhpZCkpIHtcbiAgICAgICAgaWQgPSBcIlwiLmNvbmNhdChpZEJhc2UsIFwiLVwiKS5jb25jYXQoaW5kZXgrKyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHJlc2VydmUgdGhlIElEXG4gICAgICB0aGlzLm91dGJvdW5kUmVxdWVzdHMuc2V0KGlkLCBudWxsKTtcbiAgICAgIHJldHVybiBpZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2VuZEludGVybmFsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmRJbnRlcm5hbChtZXNzYWdlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltQb3N0bWVzc2FnZVRyYW5zcG9ydF0gU2VuZGluZyBvYmplY3QgdG8gXCIuY29uY2F0KHRoaXMudGFyZ2V0T3JpZ2luLCBcIjogXCIpLCBtZXNzYWdlKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0V2luZG93LnBvc3RNZXNzYWdlKG1lc3NhZ2UsIHRoaXMudGFyZ2V0T3JpZ2luKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVwbHlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVwbHkocmVxdWVzdCwgcmVzcG9uc2VEYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZW5kSW50ZXJuYWwoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCByZXF1ZXN0KSwge30sIHtcbiAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlRGF0YVxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmQoYWN0aW9uLCBkYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZW5kQ29tcGxldGUoYWN0aW9uLCBkYXRhKS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIHJldHVybiByLnJlc3BvbnNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNlbmRDb21wbGV0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kQ29tcGxldGUoYWN0aW9uLCBkYXRhKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICAgIGlmICghdGhpcy5yZWFkeSB8fCAhdGhpcy53aWRnZXRJZCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm90IHJlYWR5IG9yIHVua25vd24gd2lkZ2V0IElEXCIpKTtcbiAgICAgIH1cbiAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICBhcGk6IHRoaXMuc2VuZERpcmVjdGlvbixcbiAgICAgICAgd2lkZ2V0SWQ6IHRoaXMud2lkZ2V0SWQsXG4gICAgICAgIHJlcXVlc3RJZDogdGhpcy5uZXh0UmVxdWVzdElkLFxuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfTtcbiAgICAgIGlmIChhY3Rpb24gPT09IF8uV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24uVXBkYXRlVmlzaWJpbGl0eSkge1xuICAgICAgICByZXF1ZXN0Wyd2aXNpYmxlJ10gPSBkYXRhWyd2aXNpYmxlJ107XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHByUmVzb2x2ZSwgcHJSZWplY3QpIHtcbiAgICAgICAgdmFyIHJlc29sdmUgPSBmdW5jdGlvbiByZXNvbHZlKHJlc3BvbnNlKSB7XG4gICAgICAgICAgY2xlYW5VcCgpO1xuICAgICAgICAgIHByUmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciByZWplY3QgPSBmdW5jdGlvbiByZWplY3QoZXJyKSB7XG4gICAgICAgICAgY2xlYW5VcCgpO1xuICAgICAgICAgIHByUmVqZWN0KGVycik7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB0aW1lcklkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJSZXF1ZXN0IHRpbWVkIG91dFwiKSk7XG4gICAgICAgIH0sIChfdGhpczIudGltZW91dFNlY29uZHMgfHwgMSkgKiAxMDAwKTtcbiAgICAgICAgdmFyIG9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIlRyYW5zcG9ydCBzdG9wcGVkXCIpKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMyLnN0b3BDb250cm9sbGVyLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25TdG9wKTtcbiAgICAgICAgdmFyIGNsZWFuVXAgPSBmdW5jdGlvbiBjbGVhblVwKCkge1xuICAgICAgICAgIF90aGlzMi5vdXRib3VuZFJlcXVlc3RzW1wiZGVsZXRlXCJdKHJlcXVlc3QucmVxdWVzdElkKTtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgICAgX3RoaXMyLnN0b3BDb250cm9sbGVyLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25TdG9wKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMyLm91dGJvdW5kUmVxdWVzdHMuc2V0KHJlcXVlc3QucmVxdWVzdElkLCB7XG4gICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgIHJlamVjdDogcmVqZWN0XG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpczIuc2VuZEludGVybmFsKHJlcXVlc3QpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXJ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG4gICAgICB0aGlzLmluYm91bmRXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIF90aGlzMy5oYW5kbGVNZXNzYWdlKGV2KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fcmVhZHkgPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdG9wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLl9yZWFkeSA9IGZhbHNlO1xuICAgICAgdGhpcy5zdG9wQ29udHJvbGxlci5hYm9ydCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVNZXNzYWdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXYpIHtcbiAgICAgIGlmICh0aGlzLnN0b3BDb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkKSByZXR1cm47XG4gICAgICBpZiAoIWV2LmRhdGEpIHJldHVybjsgLy8gaW52YWxpZCBldmVudFxuXG4gICAgICBpZiAodGhpcy5zdHJpY3RPcmlnaW5DaGVjayAmJiBldi5vcmlnaW4gIT09IHdpbmRvdy5vcmlnaW4pIHJldHVybjsgLy8gYmFkIG9yaWdpblxuXG4gICAgICAvLyB0cmVhdCB0aGUgbWVzc2FnZSBhcyBhIHJlc3BvbnNlIGZpcnN0LCB0aGVuIGRvd25ncmFkZSB0byBhIHJlcXVlc3RcbiAgICAgIHZhciByZXNwb25zZSA9IGV2LmRhdGE7XG4gICAgICBpZiAoIXJlc3BvbnNlLmFjdGlvbiB8fCAhcmVzcG9uc2UucmVxdWVzdElkIHx8ICFyZXNwb25zZS53aWRnZXRJZCkgcmV0dXJuOyAvLyBpbnZhbGlkIHJlcXVlc3QvcmVzcG9uc2VcblxuICAgICAgaWYgKCFyZXNwb25zZS5yZXNwb25zZSkge1xuICAgICAgICAvLyBpdCdzIGEgcmVxdWVzdFxuICAgICAgICB2YXIgcmVxdWVzdCA9IHJlc3BvbnNlO1xuICAgICAgICBpZiAocmVxdWVzdC5hcGkgIT09ICgwLCBfLmludmVydGVkRGlyZWN0aW9uKSh0aGlzLnNlbmREaXJlY3Rpb24pKSByZXR1cm47IC8vIHdyb25nIGRpcmVjdGlvblxuICAgICAgICB0aGlzLmhhbmRsZVJlcXVlc3QocmVxdWVzdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpdCdzIGEgcmVzcG9uc2VcbiAgICAgICAgaWYgKHJlc3BvbnNlLmFwaSAhPT0gdGhpcy5zZW5kRGlyZWN0aW9uKSByZXR1cm47IC8vIHdyb25nIGRpcmVjdGlvblxuICAgICAgICB0aGlzLmhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlUmVxdWVzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICAgIGlmICh0aGlzLndpZGdldElkKSB7XG4gICAgICAgIGlmICh0aGlzLndpZGdldElkICE9PSByZXF1ZXN0LndpZGdldElkKSByZXR1cm47IC8vIHdyb25nIHdpZGdldFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0SWQgPSByZXF1ZXN0LndpZGdldElkO1xuICAgICAgfVxuICAgICAgdGhpcy5lbWl0KFwibWVzc2FnZVwiLCBuZXcgQ3VzdG9tRXZlbnQoXCJtZXNzYWdlXCIsIHtcbiAgICAgICAgZGV0YWlsOiByZXF1ZXN0XG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVJlc3BvbnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgICBpZiAocmVzcG9uc2Uud2lkZ2V0SWQgIT09IHRoaXMud2lkZ2V0SWQpIHJldHVybjsgLy8gd3Jvbmcgd2lkZ2V0XG5cbiAgICAgIHZhciByZXEgPSB0aGlzLm91dGJvdW5kUmVxdWVzdHMuZ2V0KHJlc3BvbnNlLnJlcXVlc3RJZCk7XG4gICAgICBpZiAoIXJlcSkgcmV0dXJuOyAvLyByZXNwb25zZSB0byBhbiB1bmtub3duIHJlcXVlc3RcblxuICAgICAgaWYgKCgwLCBfLmlzRXJyb3JSZXNwb25zZSkocmVzcG9uc2UucmVzcG9uc2UpKSB7XG4gICAgICAgIHZhciBfcmVzcG9uc2UkcmVzcG9uc2UkZXIgPSByZXNwb25zZS5yZXNwb25zZS5lcnJvcixcbiAgICAgICAgICBtZXNzYWdlID0gX3Jlc3BvbnNlJHJlc3BvbnNlJGVyLm1lc3NhZ2UsXG4gICAgICAgICAgZGF0YSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVzcG9uc2UkcmVzcG9uc2UkZXIsIF9leGNsdWRlZCk7XG4gICAgICAgIHJlcS5yZWplY3QobmV3IF8uV2lkZ2V0QXBpUmVzcG9uc2VFcnJvcihtZXNzYWdlLCBkYXRhKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXEucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBQb3N0bWVzc2FnZVRyYW5zcG9ydDtcbn0oX2V2ZW50cy5FdmVudEVtaXR0ZXIpO1xuZXhwb3J0cy5Qb3N0bWVzc2FnZVRyYW5zcG9ydCA9IFBvc3RtZXNzYWdlVHJhbnNwb3J0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UG9zdG1lc3NhZ2VUcmFuc3BvcnQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlNpbXBsZU9ic2VydmFibGUgPSB2b2lkIDA7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTsgaWYgKCFpdCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBpdC5jYWxsKG8pOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1wicmV0dXJuXCJdICE9IG51bGwpIGl0W1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTsgcmV0dXJuIGFycjI7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbi8qXHJcbiAqIENvcHlyaWdodCAyMDIwIFRoZSBNYXRyaXgub3JnIEZvdW5kYXRpb24gQy5JLkMuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXG52YXIgU2ltcGxlT2JzZXJ2YWJsZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNpbXBsZU9ic2VydmFibGUoaW5pdGlhbEZuKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNpbXBsZU9ic2VydmFibGUpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImxpc3RlbmVyc1wiLCBbXSk7XG4gICAgaWYgKGluaXRpYWxGbikgdGhpcy5saXN0ZW5lcnMucHVzaChpbml0aWFsRm4pO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhTaW1wbGVPYnNlcnZhYmxlLCBbe1xuICAgIGtleTogXCJvblVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblVwZGF0ZShmbikge1xuICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChmbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUodmFsKSB7XG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIodGhpcy5saXN0ZW5lcnMpLFxuICAgICAgICBfc3RlcDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIGxpc3RlbmVyID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgbGlzdGVuZXIodmFsKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfaXRlcmF0b3IuZigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbG9zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzID0gW107IC8vIHJlc2V0XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTaW1wbGVPYnNlcnZhYmxlO1xufSgpO1xuZXhwb3J0cy5TaW1wbGVPYnNlcnZhYmxlID0gU2ltcGxlT2JzZXJ2YWJsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNpbXBsZU9ic2VydmFibGUuanMubWFwIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzLm9uY2UgPSBvbmNlO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gb25jZShlbWl0dGVyLCBuYW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZnVuY3Rpb24gZXJyb3JMaXN0ZW5lcihlcnIpIHtcbiAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIobmFtZSwgcmVzb2x2ZXIpO1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZXIoKSB7XG4gICAgICBpZiAodHlwZW9mIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBlcnJvckxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9O1xuXG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIHJlc29sdmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgaWYgKG5hbWUgIT09ICdlcnJvcicpIHtcbiAgICAgIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGVycm9yTGlzdGVuZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBoYW5kbGVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgJ2Vycm9yJywgaGFuZGxlciwgZmxhZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCBsaXN0ZW5lciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgIGVtaXR0ZXIub25jZShuYW1lLCBsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtaXR0ZXIub24obmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gRXZlbnRUYXJnZXQgZG9lcyBub3QgaGF2ZSBgZXJyb3JgIGV2ZW50IHNlbWFudGljcyBsaWtlIE5vZGVcbiAgICAvLyBFdmVudEVtaXR0ZXJzLCB3ZSBkbyBub3QgbGlzdGVuIGZvciBgZXJyb3JgIGV2ZW50cyBoZXJlLlxuICAgIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmdW5jdGlvbiB3cmFwTGlzdGVuZXIoYXJnKSB7XG4gICAgICAvLyBJRSBkb2VzIG5vdCBoYXZlIGJ1aWx0aW4gYHsgb25jZTogdHJ1ZSB9YCBzdXBwb3J0IHNvIHdlXG4gICAgICAvLyBoYXZlIHRvIGRvIGl0IG1hbnVhbGx5LlxuICAgICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIHdyYXBMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBsaXN0ZW5lcihhcmcpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImVtaXR0ZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRXZlbnRFbWl0dGVyLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgZW1pdHRlcik7XG4gIH1cbn1cbiJdfQ==

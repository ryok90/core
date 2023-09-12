"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var pure = {};
try {
    // @ts-ignore
    pure = process.env['REMOTES'] || {};
}
catch (e) {
    // not in webpack bundle
}
var remoteVars = pure;
var extractUrlAndGlobal = function (urlAndGlobal) {
    var index = urlAndGlobal.indexOf('@');
    if (index <= 0 || index === urlAndGlobal.length - 1) {
        throw new Error("Invalid request \"".concat(urlAndGlobal, "\""));
    }
    return [urlAndGlobal.substring(index + 1), urlAndGlobal.substring(0, index)];
};
var loadScript = function (keyOrRuntimeRemoteItem) {
    var runtimeRemotes = getRuntimeRemotes();
    // 1) Load remote container if needed
    var asyncContainer;
    var reference = typeof keyOrRuntimeRemoteItem === 'string'
        ? runtimeRemotes[keyOrRuntimeRemoteItem]
        : keyOrRuntimeRemoteItem;
    if (reference.asyncContainer) {
        asyncContainer =
            typeof reference.asyncContainer.then === 'function'
                ? reference.asyncContainer
                : // @ts-ignore
                    reference.asyncContainer();
    }
    else {
        // This casting is just to satisfy typescript,
        // In reality remoteGlobal will always be a string;
        var remoteGlobal_1 = reference.global;
        // Check if theres an override for container key if not use remote global
        var containerKey_1 = reference.uniqueKey
            ? reference.uniqueKey
            : remoteGlobal_1;
        var __webpack_error__1 = new Error();
        // @ts-ignore
        if (!globalThis.__remote_scope__) {
            // create a global scope for container, similar to how remotes are set on window in the browser
            // @ts-ignore
            globalThis.__remote_scope__ = {
                // @ts-ignore
                _config: {},
            };
        }
        // @ts-ignore
        var globalScope_1 = 
        // @ts-ignore
        typeof window !== 'undefined' ? window : globalThis.__remote_scope__;
        if (typeof window === 'undefined') {
            globalScope_1['_config'][containerKey_1] = reference.url;
        }
        else {
            // to match promise template system, can be removed once promise template is gone
            if (!globalScope_1['remoteLoading']) {
                globalScope_1['remoteLoading'] = {};
            }
            if (globalScope_1['remoteLoading'][containerKey_1]) {
                return globalScope_1['remoteLoading'][containerKey_1];
            }
        }
        // @ts-ignore
        asyncContainer = new Promise(function (resolve, reject) {
            function resolveRemoteGlobal() {
                var asyncContainer = globalScope_1[remoteGlobal_1];
                return resolve(asyncContainer);
            }
            if (typeof globalScope_1[remoteGlobal_1] !== 'undefined') {
                return resolveRemoteGlobal();
            }
            __webpack_require__.l(reference.url, function (event) {
                console.log('to resolve', globalScope_1);
                if (typeof globalScope_1[remoteGlobal_1] !== 'undefined') {
                    return resolveRemoteGlobal();
                }
                var errorType = event && (event.type === 'load' ? 'missing' : event.type);
                var realSrc = event && event.target && event.target.src;
                __webpack_error__1.message =
                    'Loading script failed.\n(' +
                        errorType +
                        ': ' +
                        realSrc +
                        ' or global var ' +
                        remoteGlobal_1 +
                        ')';
                __webpack_error__1.name = 'ScriptExternalLoadError';
                __webpack_error__1.type = errorType;
                __webpack_error__1.request = realSrc;
                reject(__webpack_error__1);
            }, containerKey_1);
        }).catch(function (err) {
            console.error('container is offline, returning fake remote');
            console.error(err);
            return {
                fake: true,
                // @ts-ignore
                get: function (arg) {
                    console.warn('faking', arg, 'module on, its offline');
                    return Promise.resolve(function () {
                        return {
                            __esModule: true,
                            default: function () {
                                return null;
                            },
                        };
                    });
                },
                //eslint-disable-next-line
                init: function () { },
            };
        });
        if (typeof window !== 'undefined') {
            globalScope_1['remoteLoading'][containerKey_1] = asyncContainer;
        }
    }
    return asyncContainer;
};
var getRuntimeRemotes = function () {
    try {
        return Object.entries(remoteVars).reduce(function (acc, item) {
            var key = item[0], value = item[1];
            // if its an object with a thenable (eagerly executing function)
            if (typeof value === 'object' && typeof value.then === 'function') {
                acc[key] = { asyncContainer: value };
            }
            // if its a function that must be called (lazily executing function)
            else if (typeof value === 'function') {
                // @ts-ignore
                acc[key] = { asyncContainer: value };
            }
            // if its a delegate module, skip it
            else if (typeof value === 'string' && value.startsWith('internal ')) {
                var _a = value.replace('internal ', '').split('?'), request = _a[0], query = _a[1];
                if (query) {
                    var remoteSyntax = new URLSearchParams(query).get('remote');
                    if (remoteSyntax) {
                        var _b = extractUrlAndGlobal(remoteSyntax), url = _b[0], global_1 = _b[1];
                        acc[key] = { global: global_1, url: url };
                    }
                }
            }
            else if (typeof value === 'string' && !value.includes('@')) {
                acc[key] = { global: key, url: value };
                console.log('delegates may need work');
            }
            // if its just a string (global@url)
            else if (typeof value === 'string') {
                var _c = extractUrlAndGlobal(value), url = _c[0], global_2 = _c[1];
                acc[key] = { global: global_2, url: url };
            }
            // we dont know or currently support this type
            else {
                //@ts-ignore
                console.warn('remotes process', process.env.REMOTES);
                throw new Error("[mf] Invalid value received for runtime_remote \"".concat(key, "\""));
            }
            return acc;
        }, {});
    }
    catch (err) {
        console.warn('Unable to retrieve runtime remotes: ', err);
    }
    return {};
};
var importDelegatedModule = function (keyOrRuntimeRemoteItem) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // @ts-ignore
        return [2 /*return*/, loadScript(keyOrRuntimeRemoteItem)
                .then(function (asyncContainer) {
                return asyncContainer;
            })
                .then(function (asyncContainer) {
                // most of this is only needed because of legacy promise based implementation
                // can remove proxies once we remove promise based implementations
                if (typeof window === 'undefined') {
                    if (!Object.hasOwnProperty.call(keyOrRuntimeRemoteItem, 'globalThis')) {
                        return asyncContainer;
                    }
                    // return asyncContainer;
                    //TODO: need to solve chunk flushing with delegated modules
                    return {
                        get: function (arg) {
                            //@ts-ignore
                            return asyncContainer.get(arg).then(function (f) {
                                var m = f();
                                var result = {
                                    __esModule: m.__esModule,
                                };
                                var _loop_1 = function (prop) {
                                    if (typeof m[prop] === 'function') {
                                        Object.defineProperty(result, prop, {
                                            get: function () {
                                                return function () {
                                                    if (globalThis.usedChunks) {
                                                        globalThis.usedChunks.add(
                                                        //@ts-ignore
                                                        "".concat(keyOrRuntimeRemoteItem.global, "->").concat(arg));
                                                    }
                                                    //eslint-disable-next-line prefer-rest-params
                                                    return m[prop].apply(m, arguments);
                                                };
                                            },
                                            enumerable: true,
                                        });
                                    }
                                    else {
                                        Object.defineProperty(result, prop, {
                                            get: function () {
                                                if (globalThis.usedChunks) {
                                                    globalThis.usedChunks.add(
                                                    //@ts-ignore
                                                    "".concat(keyOrRuntimeRemoteItem.global, "->").concat(arg));
                                                }
                                                return m[prop];
                                            },
                                            enumerable: true,
                                        });
                                    }
                                };
                                for (var prop in m) {
                                    _loop_1(prop);
                                }
                                if (m.then) {
                                    return Promise.resolve(function () { return result; });
                                }
                                return function () { return result; };
                            });
                        },
                        init: asyncContainer.init,
                    };
                }
                else {
                    return asyncContainer;
                }
            })];
    });
}); };
// eslint-disable-next-line no-async-promise-executor
module.exports = new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
    var currentRequest, _a, global, url;
    return __generator(this, function (_b) {
        currentRequest = new URLSearchParams(__resourceQuery).get('remote');
        _a = currentRequest.split('@'), global = _a[0], url = _a[1];
        importDelegatedModule({
            global: global,
            url: url + '?' + Date.now(),
        })
            // @ts-ignore
            .then(function (remote) {
            resolve(remote);
        })
            // @ts-ignore
            .catch(function (err) { return reject(err); });
        return [2 /*return*/];
    });
}); });

/* @trace/browser version ' + 1.0.0 */
var MITO = (function (exports) {
    'use strict';

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest$1(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
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
    }
    var Subscribe = (function () {
        function Subscribe(ctx, trigger, send) {
            this.notify = this.observer(ctx, trigger, send);
        }
        Subscribe.prototype.observer = function (ctx, trigger, send) {
            return function (name, event) {
                return __awaiter(this, void 0, void 0, function () {
                    var errorPayLoad;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, trigger({ ctx: ctx, name: name, event: event })];
                            case 1:
                                errorPayLoad = _a.sent();
                                return [4, send({ ctx: ctx, errorPayLoad: errorPayLoad })];
                            case 2: return [2, _a.sent()];
                        }
                    });
                });
            };
        };
        return Subscribe;
    }());
    var BaseTrack = (function () {
        function BaseTrack(options) {
            var plugins = options.plugins, otherOpts = __rest(options, ["plugins"]);
            this.options = otherOpts;
            this.initPlugins(plugins);
        }
        BaseTrack.prototype.initPlugins = function (plugins) {
            var _this = this;
            var ctx = this;
            if (Array.isArray(plugins) && plugins.length) {
                plugins.forEach(function (plugin) { return __awaiter(_this, void 0, void 0, function () {
                    var sub;
                    return __generator(this, function (_a) {
                        sub = new Subscribe(ctx, plugin.trigger, plugin.send);
                        plugin.addListener({ ctx: ctx, notify: sub.notify });
                        return [2];
                    });
                }); });
            }
        };
        return BaseTrack;
    }());
    var isBrowserEnv = typeof window !== undefined;
    function getGlobal() {
        if (isBrowserEnv)
            return window;
    }
    var _global = getGlobal();
    var BaseQueue = (function () {
        function BaseQueue(_a) {
            var _b = _a.useRsIdCallback, useRsIdCallback = _b === void 0 ? true : _b;
            this.stack = [];
            this.postState = 'prepare';
            this.useRsIdCallback = useRsIdCallback;
            if (!('Promise' in _global))
                return;
            this.micro = Promise.resolve();
        }
        BaseQueue.prototype.add = function (fn) {
            var _this = this;
            if (typeof fn !== 'function')
                return;
            if (!this.useRsIdCallback) {
                if (!('Promise' in _global)) {
                    fn();
                    return;
                }
            }
            this.stack.push(fn);
            if (this.postState === 'prepare') {
                this.useRsIdCallback
                    ? this.runRsIdQueue()
                    : this.micro.then(function () { return _this.runMicroQueue(); });
            }
        };
        BaseQueue.prototype.clear = function () {
            this.stack = [];
        };
        BaseQueue.prototype.getStack = function () {
            return this.stack;
        };
        BaseQueue.prototype.runRsIdQueue = function () {
            this.postState = 'sending';
            requestIdleCallback(this.doLowPriorityReport.bind(this));
            this.postState = 'prepare';
        };
        BaseQueue.prototype.doLowPriorityReport = function (IdleDeadline) {
            while ((IdleDeadline.timeRemaining() > 0 || IdleDeadline.didTimeout) && this.stack.length > 0) {
                var fn = this.stack.shift();
                fn && fn();
            }
            if (this.stack.length > 0)
                requestIdleCallback(this.doLowPriorityReport.bind(this));
        };
        BaseQueue.prototype.runMicroQueue = function () {
            var temp = this.stack.slice(0);
            this.stack.length = 0;
            this.postState = 'prepare';
            for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
                var fn = temp_1[_i];
                fn();
            }
        };
        return BaseQueue;
    }());
    var BaseTransport = (function () {
        function BaseTransport() {
        }
        BaseTransport.prototype.send = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.sendToServer(data)];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        return BaseTransport;
    }());

    var BrowserQueue = (function (_super) {
        __extends(BrowserQueue, _super);
        function BrowserQueue() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BrowserQueue.prototype.requestIdleCallback = function (cb, opt) {
            var requestIdleCallback = window.requestIdleCallback ||
                function (cb) {
                    var start = Date.now();
                    var timer = setTimeout(function () {
                        cb({
                            didTimeout: false,
                            timeRemaining: function () {
                                return Math.max(0, 50 - (Date.now() - start));
                            }
                        });
                    }, 1);
                    return timer;
                };
            return requestIdleCallback(cb, opt);
        };
        return BrowserQueue;
    }(BaseQueue));

    var BrowserTransport = (function (_super) {
        __extends(BrowserTransport, _super);
        function BrowserTransport(_a) {
            var useRsIdCallback = _a.useRsIdCallback, _b = _a.useImgUpload, useImgUpload = _b === void 0 ? false : _b, url = _a.url;
            var _this = _super.call(this) || this;
            _this.init(useRsIdCallback);
            _this.useImgUpload = useImgUpload;
            _this.url = url;
            return _this;
        }
        BrowserTransport.prototype.init = function (useRsIdCallback) {
            this.queue = new BrowserQueue({ useRsIdCallback: useRsIdCallback });
        };
        BrowserTransport.prototype.post = function (data, url) {
            var requestFn = function () {
                var xhr = new XMLHttpRequest();
                xhr.open('post', url, true);
                xhr.setRequestHeader('content-type', 'application/json; charset=UTF-8');
                xhr.withCredentials = true;
                xhr.send(JSON.stringify(data));
            };
            this.queue.add(requestFn);
        };
        BrowserTransport.prototype.sendToServer = function (data) {
            this.useImgUpload ? this.imgRequest(data, this.url) : this.post(data, this.url);
        };
        BrowserTransport.prototype.imgRequest = function (data, url) {
            var requestFn = function () {
                var img = new Image();
                img.src = "".concat(url, "?data=").concat(encodeURIComponent(data));
                img = null;
            };
            this.queue.add(requestFn);
        };
        return BrowserTransport;
    }(BaseTransport));

    var BrowserTrack = (function (_super) {
        __extends(BrowserTrack, _super);
        function BrowserTrack(options) {
            var _this = _super.call(this, options) || this;
            _this.transport = new BrowserTransport(options);
            return _this;
        }
        BrowserTrack.prototype.report = function (data) {
            this.transport.send(data);
        };
        return BrowserTrack;
    }(BaseTrack));

    var Severity;
    (function (Severity) {
        Severity["Else"] = "else";
        Severity["Error"] = "error";
        Severity["Warning"] = "warning";
        Severity["Info"] = "info";
        Severity["Debug"] = "debug";
        Severity["Low"] = "low";
        Severity["Normal"] = "normal";
        Severity["High"] = "high";
        Severity["Critical"] = "critical";
    })(Severity || (Severity = {}));
    (function (Severity) {
        function fromString(level) {
            switch (level) {
                case 'debug':
                    return Severity.Debug;
                case 'info':
                case 'log':
                case 'assert':
                    return Severity.Info;
                case 'warn':
                case 'warning':
                    return Severity.Warning;
                case Severity.Low:
                case Severity.Normal:
                case Severity.High:
                case Severity.Critical:
                case 'error':
                    return Severity.Error;
                default:
                    return Severity.Else;
            }
        }
        Severity.fromString = fromString;
    })(Severity || (Severity = {}));

    var errorPlugin = {
        name: "error",
        addListener: function (_a) {
            var notify = _a.notify;
            console.log("error");
            window.addEventListener('error', function (e) {
                notify("error", e);
            }, false);
        },
        trigger: function (_a) {
            var _b, _c, _d;
            var name = _a.name, event = _a.event;
            console.log(name, event);
            var ev = event;
            if ((_b = ev === null || ev === void 0 ? void 0 : ev.error) === null || _b === void 0 ? void 0 : _b.localName) {
                return {
                    message: "\u8D44\u6E90\u8BF7\u6C42\u5931\u8D25",
                    stack: (_c = ev === null || ev === void 0 ? void 0 : ev.error) === null || _c === void 0 ? void 0 : _c.stack,
                };
            }
            return {
                message: ((_d = ev === null || ev === void 0 ? void 0 : ev.error) === null || _d === void 0 ? void 0 : _d.message) || (ev === null || ev === void 0 ? void 0 : ev.message) || '',
                level: Severity.Normal,
                line: ev === null || ev === void 0 ? void 0 : ev.lineno,
                colno: ev === null || ev === void 0 ? void 0 : ev.colno,
            };
        },
        send: function (_a) {
            var ctx = _a.ctx, errorPayLoad = _a.errorPayLoad;
            console.log(ctx, errorPayLoad);
            ctx.transport.send(errorPayLoad);
        },
    };

    var createBrowserTrack = function (options) {
        var _a = options.plugins, plugins = _a === void 0 ? [] : _a, otherOpt = __rest$1(options, ["plugins"]);
        return new BrowserTrack(__assign(__assign({}, otherOpt), { plugins: __spreadArray(__spreadArray([], plugins, true), [
                errorPlugin
            ], false) }));
    };
    var init = createBrowserTrack;

    exports.BrowserTrack = BrowserTrack;
    exports.createBrowserTrack = createBrowserTrack;
    exports.init = init;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
/* follow me on Github! @hejiahui */
//# sourceMappingURL=browser.js.map

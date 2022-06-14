/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
! function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function (e) {
                return t[e]
            }.bind(null, i));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 128)
}([function (t, e, n) {
    (function (e) {
        var n = function (t) {
            return t && t.Math == Math && t
        };
        t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || function () {
            return this
        }() || Function("return this")()
    }).call(this, n(25))
}, function (t, e) {
    t.exports = function (t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
}, function (t, e) {
    var n = Array.isArray;
    t.exports = n
}, function (t, e, n) {
    "use strict";
    var r = n(18);
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = {
        IX2EngineActionTypes: !0,
        IX2EngineConstants: !0
    };
    e.IX2EngineConstants = e.IX2EngineActionTypes = void 0;
    var o = n(188);
    Object.keys(o).forEach(function (t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return o[t]
            }
        }))
    });
    var a = n(93);
    Object.keys(a).forEach(function (t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return a[t]
            }
        }))
    });
    var u = n(189);
    Object.keys(u).forEach(function (t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return u[t]
            }
        }))
    });
    var c = n(190);
    Object.keys(c).forEach(function (t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
                return c[t]
            }
        }))
    });
    var s = r(n(191));
    e.IX2EngineActionTypes = s;
    var f = r(n(192));
    e.IX2EngineConstants = f
}, function (t, e, n) {
    "use strict";
    var r = {},
        i = {},
        o = [],
        a = window.Webflow || [],
        u = window.jQuery,
        c = u(window),
        s = u(document),
        f = u.isFunction,
        l = r._ = n(130),
        d = r.tram = n(68) && u.tram,
        p = !1,
        v = !1;

    function h(t) {
        r.env() && (f(t.design) && c.on("__wf_design", t.design), f(t.preview) && c.on("__wf_preview", t.preview)), f(t.destroy) && c.on("__wf_destroy", t.destroy), t.ready && f(t.ready) && function (t) {
            if (p) return void t.ready();
            if (l.contains(o, t.ready)) return;
            o.push(t.ready)
        }(t)
    }

    function E(t) {
        f(t.design) && c.off("__wf_design", t.design), f(t.preview) && c.off("__wf_preview", t.preview), f(t.destroy) && c.off("__wf_destroy", t.destroy), t.ready && f(t.ready) && function (t) {
            o = l.filter(o, function (e) {
                return e !== t.ready
            })
        }(t)
    }
    d.config.hideBackface = !1, d.config.keepInherited = !0, r.define = function (t, e, n) {
        i[t] && E(i[t]);
        var r = i[t] = e(u, l, n) || {};
        return h(r), r
    }, r.require = function (t) {
        return i[t]
    }, r.push = function (t) {
        p ? f(t) && t() : a.push(t)
    }, r.env = function (t) {
        var e = window.__wf_design,
            n = void 0 !== e;
        return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
    };
    var _, g = navigator.userAgent.toLowerCase(),
        y = r.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        m = r.env.chrome = /chrome/.test(g) && /Google/.test(navigator.vendor) && parseInt(g.match(/chrome\/(\d+)\./)[1], 10),
        I = r.env.ios = /(ipod|iphone|ipad)/.test(g);
    r.env.safari = /safari/.test(g) && !m && !I, y && s.on("touchstart mousedown", function (t) {
        _ = t.target
    }), r.validClick = y ? function (t) {
        return t === _ || u.contains(t, _)
    } : function () {
        return !0
    };
    var T, b = "resize.webflow orientationchange.webflow load.webflow";

    function O(t, e) {
        var n = [],
            r = {};
        return r.up = l.throttle(function (t) {
            l.each(n, function (e) {
                e(t)
            })
        }), t && e && t.on(e, r.up), r.on = function (t) {
            "function" == typeof t && (l.contains(n, t) || n.push(t))
        }, r.off = function (t) {
            n = arguments.length ? l.filter(n, function (e) {
                return e !== t
            }) : []
        }, r
    }

    function w(t) {
        f(t) && t()
    }

    function A() {
        T && (T.reject(), c.off("load", T.resolve)), T = new u.Deferred, c.on("load", T.resolve)
    }
    r.resize = O(c, b), r.scroll = O(c, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), r.redraw = O(), r.location = function (t) {
        window.location = t
    }, r.env() && (r.location = function () {}), r.ready = function () {
        p = !0, v ? (v = !1, l.each(i, h)) : l.each(o, w), l.each(a, w), r.resize.up()
    }, r.load = function (t) {
        T.then(t)
    }, r.destroy = function (t) {
        t = t || {}, v = !0, c.triggerHandler("__wf_destroy"), null != t.domready && (p = t.domready), l.each(i, E), r.resize.off(), r.scroll.off(), r.redraw.off(), o = [], a = [], "pending" === T.state() && A()
    }, u(r.ready), A(), t.exports = window.Webflow = r
}, function (t, e) {
    var n = Function.prototype,
        r = n.bind,
        i = n.call,
        o = r && r.bind(i);
    t.exports = r ? function (t) {
        return t && o(i, t)
    } : function (t) {
        return t && function () {
            return i.apply(t, arguments)
        }
    }
}, function (t, e, n) {
    var r = n(98),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r || i || Function("return this")();
    t.exports = o
}, function (t, e) {
    t.exports = function (t) {
        return "function" == typeof t
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
}, function (t, e, n) {
    var r = n(5),
        i = n(156),
        o = r({}.hasOwnProperty);
    t.exports = Object.hasOwn || function (t, e) {
        return o(i(t), e)
    }
}, function (t, e, n) {
    var r = n(195),
        i = n(249),
        o = n(62),
        a = n(2),
        u = n(258);
    t.exports = function (t) {
        return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? a(t) ? i(t[0], t[1]) : r(t) : u(t)
    }
}, function (t, e, n) {
    var r = n(207),
        i = n(212);
    t.exports = function (t, e) {
        var n = i(t, e);
        return r(n) ? n : void 0
    }
}, function (t, e) {
    t.exports = function (t) {
        return null != t && "object" == typeof t
    }
}, function (t, e, n) {
    var r = n(19);
    t.exports = !r(function () {
        return 7 != Object.defineProperty({}, 1, {
            get: function () {
                return 7
            }
        })[1]
    })
}, function (t, e, n) {
    "use strict";
    var r = n(18);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2ElementsReducer = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0;
    var i = r(n(47));
    e.IX2BrowserSupport = i;
    var o = r(n(115));
    e.IX2Easings = o;
    var a = r(n(117));
    e.IX2EasingUtils = a;
    var u = r(n(267));
    e.IX2ElementsReducer = u;
    var c = r(n(119));
    e.IX2VanillaPlugins = c;
    var s = r(n(269));
    e.IX2VanillaUtils = s
}, function (t, e, n) {
    var r = n(23),
        i = n(208),
        o = n(209),
        a = "[object Null]",
        u = "[object Undefined]",
        c = r ? r.toStringTag : void 0;
    t.exports = function (t) {
        return null == t ? void 0 === t ? u : a : c && c in Object(t) ? i(t) : o(t)
    }
}, function (t, e, n) {
    var r = n(97),
        i = n(55);
    t.exports = function (t) {
        return null != t && i(t.length) && !r(t)
    }
}, function (t, e) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function r(e) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function (t) {
            return n(t)
        } : t.exports = r = function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
        }, r(e)
    }
    t.exports = r
}, function (t, e) {
    t.exports = function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                    r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                } return e.default = t, e
    }
}, function (t, e) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function (t, e, n) {
    var r = n(7);
    t.exports = function (t) {
        return "object" == typeof t ? null !== t : r(t)
    }
}, function (t, e) {
    t.exports = function (t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.clone = c, e.addLast = l, e.addFirst = d, e.removeLast = p, e.removeFirst = v, e.insert = h, e.removeAt = E, e.replaceAt = _, e.getIn = g, e.set = y, e.setIn = m, e.update = I, e.updateIn = T, e.merge = b, e.mergeDeep = O, e.mergeIn = w, e.omit = A, e.addDefaults = S;
    /*!
     * Timm
     *
     * Immutability helpers with fast reads and acceptable writes.
     *
     * @copyright Guillermo Grau Panea 2016
     * @license MIT
     */
    var i = "INVALID_ARGS";

    function o(t) {
        throw new Error(t)
    }

    function a(t) {
        var e = Object.keys(t);
        return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
    }
    var u = {}.hasOwnProperty;

    function c(t) {
        if (Array.isArray(t)) return t.slice();
        for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
            var i = e[r];
            n[i] = t[i]
        }
        return n
    }

    function s(t, e, n) {
        var r = n;
        null == r && o(i);
        for (var u = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), p = 3; p < l; p++) d[p - 3] = arguments[p];
        for (var v = 0; v < d.length; v++) {
            var h = d[v];
            if (null != h) {
                var E = a(h);
                if (E.length)
                    for (var _ = 0; _ <= E.length; _++) {
                        var g = E[_];
                        if (!t || void 0 === r[g]) {
                            var y = h[g];
                            e && f(r[g]) && f(y) && (y = s(t, e, r[g], y)), void 0 !== y && y !== r[g] && (u || (u = !0, r = c(r)), r[g] = y)
                        }
                    }
            }
        }
        return r
    }

    function f(t) {
        var e = void 0 === t ? "undefined" : r(t);
        return null != t && ("object" === e || "function" === e)
    }

    function l(t, e) {
        return Array.isArray(e) ? t.concat(e) : t.concat([e])
    }

    function d(t, e) {
        return Array.isArray(e) ? e.concat(t) : [e].concat(t)
    }

    function p(t) {
        return t.length ? t.slice(0, t.length - 1) : t
    }

    function v(t) {
        return t.length ? t.slice(1) : t
    }

    function h(t, e, n) {
        return t.slice(0, e).concat(Array.isArray(n) ? n : [n]).concat(t.slice(e))
    }

    function E(t, e) {
        return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1))
    }

    function _(t, e, n) {
        if (t[e] === n) return t;
        for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o];
        return i[e] = n, i
    }

    function g(t, e) {
        if (!Array.isArray(e) && o(i), null != t) {
            for (var n = t, r = 0; r < e.length; r++) {
                var a = e[r];
                if (void 0 === (n = null != n ? n[a] : void 0)) return n
            }
            return n
        }
    }

    function y(t, e, n) {
        var r = null == t ? "number" == typeof e ? [] : {} : t;
        if (r[e] === n) return r;
        var i = c(r);
        return i[e] = n, i
    }

    function m(t, e, n) {
        return e.length ? function t(e, n, r, i) {
            var o = void 0,
                a = n[i];
            o = i === n.length - 1 ? r : t(f(e) && f(e[a]) ? e[a] : "number" == typeof n[i + 1] ? [] : {}, n, r, i + 1);
            return y(e, a, o)
        }(t, e, n, 0) : n
    }

    function I(t, e, n) {
        return y(t, e, n(null == t ? void 0 : t[e]))
    }

    function T(t, e, n) {
        return m(t, e, n(g(t, e)))
    }

    function b(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u)) : s(!1, !1, t, e, n, r, i, o)
    }

    function O(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u)) : s(!1, !0, t, e, n, r, i, o)
    }

    function w(t, e, n, r, i, o, a) {
        var u = g(t, e);
        null == u && (u = {});
        for (var c = arguments.length, f = Array(c > 7 ? c - 7 : 0), l = 7; l < c; l++) f[l - 7] = arguments[l];
        return m(t, e, f.length ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(f)) : s(!1, !1, u, n, r, i, o, a))
    }

    function A(t, e) {
        for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
            if (u.call(t, n[i])) {
                r = !0;
                break
            } if (!r) return t;
        for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
            var f = c[s];
            n.indexOf(f) >= 0 || (o[f] = t[f])
        }
        return o
    }

    function S(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u)) : s(!0, !1, t, e, n, r, i, o)
    }
    var R = {
        clone: c,
        addLast: l,
        addFirst: d,
        removeLast: p,
        removeFirst: v,
        insert: h,
        removeAt: E,
        replaceAt: _,
        getIn: g,
        set: y,
        setIn: m,
        update: I,
        updateIn: T,
        merge: b,
        mergeDeep: O,
        mergeIn: w,
        omit: A,
        addDefaults: S
    };
    e.default = R
}, function (t, e, n) {
    var r = n(6).Symbol;
    t.exports = r
}, function (t, e, n) {
    var r = n(38),
        i = 1 / 0;
    t.exports = function (t) {
        if ("string" == typeof t || r(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -i ? "-0" : e
    }
}, function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function (t, e, n) {
    var r = n(145),
        i = n(71);
    t.exports = function (t) {
        return r(i(t))
    }
}, function (t, e, n) {
    var r = n(0),
        i = n(7);
    t.exports = function (t, e) {
        return arguments.length < 2 ? (n = r[t], i(n) ? n : void 0) : r[t] && r[t][e];
        var n
    }
}, function (t, e, n) {
    var r = n(0),
        i = n(13),
        o = n(79),
        a = n(29),
        u = n(72),
        c = r.TypeError,
        s = Object.defineProperty;
    e.f = i ? s : function (t, e, n) {
        if (a(t), e = u(e), a(n), o) try {
            return s(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw c("Accessors not supported");
        return "value" in n && (t[e] = n.value), t
    }
}, function (t, e, n) {
    var r = n(0),
        i = n(20),
        o = r.String,
        a = r.TypeError;
    t.exports = function (t) {
        if (i(t)) return t;
        throw a(o(t) + " is not an object")
    }
}, function (t, e) {
    function n() {
        return t.exports = n = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }, n.apply(this, arguments)
    }
    t.exports = n
}, function (t, e, n) {
    var r = n(197),
        i = n(198),
        o = n(199),
        a = n(200),
        u = n(201);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e, n) {
    var r = n(48);
    t.exports = function (t, e) {
        for (var n = t.length; n--;)
            if (r(t[n][0], e)) return n;
        return -1
    }
}, function (t, e, n) {
    var r = n(11)(Object, "create");
    t.exports = r
}, function (t, e, n) {
    var r = n(221);
    t.exports = function (t, e) {
        var n = t.__data__;
        return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }
}, function (t, e, n) {
    var r = n(105),
        i = n(56),
        o = n(16);
    t.exports = function (t) {
        return o(t) ? r(t) : i(t)
    }
}, function (t, e, n) {
    var r = n(239),
        i = n(12),
        o = Object.prototype,
        a = o.hasOwnProperty,
        u = o.propertyIsEnumerable,
        c = r(function () {
            return arguments
        }()) ? r : function (t) {
            return i(t) && a.call(t, "callee") && !u.call(t, "callee")
        };
    t.exports = c
}, function (t, e, n) {
    var r = n(2),
        i = n(61),
        o = n(250),
        a = n(253);
    t.exports = function (t, e) {
        return r(t) ? t : i(t, e) ? [t] : o(a(t))
    }
}, function (t, e, n) {
    var r = n(15),
        i = n(12),
        o = "[object Symbol]";
    t.exports = function (t) {
        return "symbol" == typeof t || i(t) && r(t) == o
    }
}, function (t, e) {
    var n = Function.prototype.call;
    t.exports = n.bind ? n.bind(n) : function () {
        return n.apply(n, arguments)
    }
}, function (t, e, n) {
    var r = n(0),
        i = n(41),
        o = r["__core-js_shared__"] || i("__core-js_shared__", {});
    t.exports = o
}, function (t, e, n) {
    var r = n(0),
        i = Object.defineProperty;
    t.exports = function (t, e) {
        try {
            i(r, t, {
                value: e,
                configurable: !0,
                writable: !0
            })
        } catch (n) {
            r[t] = e
        }
        return e
    }
}, function (t, e, n) {
    var r = n(13),
        i = n(28),
        o = n(70);
    t.exports = r ? function (t, e, n) {
        return i.f(t, e, o(1, n))
    } : function (t, e, n) {
        return t[e] = n, t
    }
}, function (t, e) {
    t.exports = {}
}, function (t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "ActionTypes", function () {
        return o
    }), n.d(e, "default", function () {
        return a
    });
    var r = n(87),
        i = n(183),
        o = {
            INIT: "@@redux/INIT"
        };

    function a(t, e, n) {
        var u;
        if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
            if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
            return n(a)(t, e)
        }
        if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
        var c = t,
            s = e,
            f = [],
            l = f,
            d = !1;

        function p() {
            l === f && (l = f.slice())
        }

        function v() {
            return s
        }

        function h(t) {
            if ("function" != typeof t) throw new Error("Expected listener to be a function.");
            var e = !0;
            return p(), l.push(t),
                function () {
                    if (e) {
                        e = !1, p();
                        var n = l.indexOf(t);
                        l.splice(n, 1)
                    }
                }
        }

        function E(t) {
            if (!Object(r.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (d) throw new Error("Reducers may not dispatch actions.");
            try {
                d = !0, s = c(s, t)
            } finally {
                d = !1
            }
            for (var e = f = l, n = 0; n < e.length; n++) e[n]();
            return t
        }
        return E({
            type: o.INIT
        }), (u = {
            dispatch: E,
            subscribe: h,
            getState: v,
            replaceReducer: function (t) {
                if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
                c = t, E({
                    type: o.INIT
                })
            }
        })[i.default] = function () {
            var t, e = h;
            return (t = {
                subscribe: function (t) {
                    if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");

                    function n() {
                        t.next && t.next(v())
                    }
                    return n(), {
                        unsubscribe: e(n)
                    }
                }
            })[i.default] = function () {
                return this
            }, t
        }, u
    }
}, function (t, e, n) {
    "use strict";

    function r() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        if (0 === e.length) return function (t) {
            return t
        };
        if (1 === e.length) return e[0];
        var r = e[e.length - 1],
            i = e.slice(0, -1);
        return function () {
            return i.reduceRight(function (t, e) {
                return e(t)
            }, r.apply(void 0, arguments))
        }
    }
    n.r(e), n.d(e, "default", function () {
        return r
    })
}, function (t, e, n) {
    "use strict";
    var r = n(1);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0;
    var i = r(n(94)),
        o = "undefined" != typeof window;
    e.IS_BROWSER_ENV = o;
    var a = function (t, e) {
        return o ? t() : e
    };
    e.withBrowser = a;
    var u = a(function () {
        return (0, i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function (t) {
            return t in Element.prototype
        })
    });
    e.ELEMENT_MATCHES = u;
    var c = a(function () {
        var t = document.createElement("i"),
            e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
        try {
            for (var n = e.length, r = 0; r < n; r++) {
                var i = e[r];
                if (t.style.display = i, t.style.display === i) return i
            }
            return ""
        } catch (t) {
            return ""
        }
    }, "flex");
    e.FLEX_PREFIXED = c;
    var s = a(function () {
        var t = document.createElement("i");
        if (null == t.style.transform)
            for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
                var i = e[r] + "Transform";
                if (void 0 !== t.style[i]) return i
            }
        return "transform"
    }, "transform");
    e.TRANSFORM_PREFIXED = s;
    var f = s.split("transform")[0],
        l = f ? f + "TransformStyle" : "transformStyle";
    e.TRANSFORM_STYLE_PREFIXED = l
}, function (t, e) {
    t.exports = function (t, e) {
        return t === e || t != t && e != e
    }
}, function (t, e, n) {
    var r = n(11)(n(6), "Map");
    t.exports = r
}, function (t, e, n) {
    var r = n(213),
        i = n(220),
        o = n(222),
        a = n(223),
        u = n(224);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e) {
    t.exports = function (t, e) {
        for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
        return t
    }
}, function (t, e, n) {
    (function (t) {
        var r = n(6),
            i = n(240),
            o = e && !e.nodeType && e,
            a = o && "object" == typeof t && t && !t.nodeType && t,
            u = a && a.exports === o ? r.Buffer : void 0,
            c = (u ? u.isBuffer : void 0) || i;
        t.exports = c
    }).call(this, n(106)(t))
}, function (t, e) {
    var n = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;
    t.exports = function (t, e) {
        var i = typeof t;
        return !!(e = null == e ? n : e) && ("number" == i || "symbol" != i && r.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
}, function (t, e, n) {
    var r = n(241),
        i = n(242),
        o = n(243),
        a = o && o.isTypedArray,
        u = a ? i(a) : r;
    t.exports = u
}, function (t, e) {
    var n = 9007199254740991;
    t.exports = function (t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
    }
}, function (t, e, n) {
    var r = n(57),
        i = n(244),
        o = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        if (!r(t)) return i(t);
        var e = [];
        for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
        return e
    }
}, function (t, e) {
    var n = Object.prototype;
    t.exports = function (t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || n)
    }
}, function (t, e, n) {
    var r = n(245),
        i = n(49),
        o = n(246),
        a = n(247),
        u = n(108),
        c = n(15),
        s = n(99),
        f = s(r),
        l = s(i),
        d = s(o),
        p = s(a),
        v = s(u),
        h = c;
    (r && "[object DataView]" != h(new r(new ArrayBuffer(1))) || i && "[object Map]" != h(new i) || o && "[object Promise]" != h(o.resolve()) || a && "[object Set]" != h(new a) || u && "[object WeakMap]" != h(new u)) && (h = function (t) {
        var e = c(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? s(n) : "";
        if (r) switch (r) {
            case f:
                return "[object DataView]";
            case l:
                return "[object Map]";
            case d:
                return "[object Promise]";
            case p:
                return "[object Set]";
            case v:
                return "[object WeakMap]"
        }
        return e
    }), t.exports = h
}, function (t, e, n) {
    var r = n(60);
    t.exports = function (t, e, n) {
        var i = null == t ? void 0 : r(t, e);
        return void 0 === i ? n : i
    }
}, function (t, e, n) {
    var r = n(37),
        i = n(24);
    t.exports = function (t, e) {
        for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) t = t[i(e[n++])];
        return n && n == o ? t : void 0
    }
}, function (t, e, n) {
    var r = n(2),
        i = n(38),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    t.exports = function (t, e) {
        if (r(t)) return !1;
        var n = typeof t;
        return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || null != e && t in Object(e)
    }
}, function (t, e) {
    t.exports = function (t) {
        return t
    }
}, function (t, e, n) {
    var r = n(262),
        i = n(8),
        o = n(38),
        a = NaN,
        u = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        f = parseInt;
    t.exports = function (t) {
        if ("number" == typeof t) return t;
        if (o(t)) return a;
        if (i(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = i(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = r(t);
        var n = c.test(t);
        return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? a : +t
    }
}, function (t, e, n) {
    "use strict";
    var r = n(1);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0;
    var i = r(n(30)),
        o = n(3),
        a = n(14),
        u = o.IX2EngineActionTypes,
        c = u.IX2_RAW_DATA_IMPORTED,
        s = u.IX2_SESSION_INITIALIZED,
        f = u.IX2_SESSION_STARTED,
        l = u.IX2_SESSION_STOPPED,
        d = u.IX2_PREVIEW_REQUESTED,
        p = u.IX2_PLAYBACK_REQUESTED,
        v = u.IX2_STOP_REQUESTED,
        h = u.IX2_CLEAR_REQUESTED,
        E = u.IX2_EVENT_LISTENER_ADDED,
        _ = u.IX2_TEST_FRAME_RENDERED,
        g = u.IX2_EVENT_STATE_CHANGED,
        y = u.IX2_ANIMATION_FRAME_CHANGED,
        m = u.IX2_PARAMETER_CHANGED,
        I = u.IX2_INSTANCE_ADDED,
        T = u.IX2_INSTANCE_STARTED,
        b = u.IX2_INSTANCE_REMOVED,
        O = u.IX2_ELEMENT_STATE_CHANGED,
        w = u.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        A = u.IX2_VIEWPORT_WIDTH_CHANGED,
        S = u.IX2_MEDIA_QUERIES_DEFINED,
        R = a.IX2VanillaUtils.reifyState;
    e.rawDataImported = function (t) {
        return {
            type: c,
            payload: (0, i.default)({}, R(t))
        }
    };
    e.sessionInitialized = function (t) {
        var e = t.hasBoundaryNodes,
            n = t.reducedMotion;
        return {
            type: s,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: n
            }
        }
    };
    e.sessionStarted = function () {
        return {
            type: f
        }
    };
    e.sessionStopped = function () {
        return {
            type: l
        }
    };
    e.previewRequested = function (t) {
        var e = t.rawData,
            n = t.defer;
        return {
            type: d,
            payload: {
                defer: n,
                rawData: e
            }
        }
    };
    e.playbackRequested = function (t) {
        var e = t.actionTypeId,
            n = void 0 === e ? o.ActionTypeConsts.GENERAL_START_ACTION : e,
            r = t.actionListId,
            i = t.actionItemId,
            a = t.eventId,
            u = t.allowEvents,
            c = t.immediate,
            s = t.testManual,
            f = t.verbose,
            l = t.rawData;
        return {
            type: p,
            payload: {
                actionTypeId: n,
                actionListId: r,
                actionItemId: i,
                testManual: s,
                eventId: a,
                allowEvents: u,
                immediate: c,
                verbose: f,
                rawData: l
            }
        }
    };
    e.stopRequested = function (t) {
        return {
            type: v,
            payload: {
                actionListId: t
            }
        }
    };
    e.clearRequested = function () {
        return {
            type: h
        }
    };
    e.eventListenerAdded = function (t, e) {
        return {
            type: E,
            payload: {
                target: t,
                listenerParams: e
            }
        }
    };
    e.testFrameRendered = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return {
            type: _,
            payload: {
                step: t
            }
        }
    };
    e.eventStateChanged = function (t, e) {
        return {
            type: g,
            payload: {
                stateKey: t,
                newState: e
            }
        }
    };
    e.animationFrameChanged = function (t, e) {
        return {
            type: y,
            payload: {
                now: t,
                parameters: e
            }
        }
    };
    e.parameterChanged = function (t, e) {
        return {
            type: m,
            payload: {
                key: t,
                value: e
            }
        }
    };
    e.instanceAdded = function (t) {
        return {
            type: I,
            payload: (0, i.default)({}, t)
        }
    };
    e.instanceStarted = function (t, e) {
        return {
            type: T,
            payload: {
                instanceId: t,
                time: e
            }
        }
    };
    e.instanceRemoved = function (t) {
        return {
            type: b,
            payload: {
                instanceId: t
            }
        }
    };
    e.elementStateChanged = function (t, e, n, r) {
        return {
            type: O,
            payload: {
                elementId: t,
                actionTypeId: e,
                current: n,
                actionItem: r
            }
        }
    };
    e.actionListPlaybackChanged = function (t) {
        var e = t.actionListId,
            n = t.isPlaying;
        return {
            type: w,
            payload: {
                actionListId: e,
                isPlaying: n
            }
        }
    };
    e.viewportWidthChanged = function (t) {
        var e = t.width,
            n = t.mediaQueries;
        return {
            type: A,
            payload: {
                width: e,
                mediaQueries: n
            }
        }
    };
    e.mediaQueriesDefined = function () {
        return {
            type: S
        }
    }
}, function (t, e, n) {
    var r = n(125),
        i = n(66);

    function o(t, e) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
    }
    o.prototype = r(i.prototype), o.prototype.constructor = o, t.exports = o
}, function (t, e) {
    t.exports = function () {}
}, function (t, e, n) {
    var r = n(125),
        i = n(66),
        o = 4294967295;

    function a(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = o, this.__views__ = []
    }
    a.prototype = r(i.prototype), a.prototype.constructor = a, t.exports = a
}, function (t, e, n) {
    "use strict";
    var r = n(1)(n(17));
    window.tram = function (t) {
        function e(t, e) {
            return (new F.Bare).init(t, e)
        }

        function n(t) {
            return t.replace(/[A-Z]/g, function (t) {
                return "-" + t.toLowerCase()
            })
        }

        function i(t) {
            var e = parseInt(t.slice(1), 16);
            return [e >> 16 & 255, e >> 8 & 255, 255 & e]
        }

        function o(t, e, n) {
            return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
        }

        function a() {}

        function u(t, e, n) {
            s("Units do not match [" + t + "]: " + e + ", " + n)
        }

        function c(t, e, n) {
            if (void 0 !== e && (n = e), void 0 === t) return n;
            var r = n;
            return $.test(t) || !Z.test(t) ? r = parseInt(t, 10) : Z.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r == r ? r : n
        }

        function s(t) {
            H.debug && window && window.console.warn(t)
        }
        var f = function (t, e, n) {
                function i(t) {
                    return "object" == (0, r.default)(t)
                }

                function o(t) {
                    return "function" == typeof t
                }

                function a() {}
                return function r(u, c) {
                    function s() {
                        var t = new f;
                        return o(t.init) && t.init.apply(t, arguments), t
                    }

                    function f() {}
                    c === n && (c = u, u = Object), s.Bare = f;
                    var l, d = a[t] = u[t],
                        p = f[t] = s[t] = new a;
                    return p.constructor = s, s.mixin = function (e) {
                        return f[t] = s[t] = r(s, e)[t], s
                    }, s.open = function (t) {
                        if (l = {}, o(t) ? l = t.call(s, p, d, s, u) : i(t) && (l = t), i(l))
                            for (var n in l) e.call(l, n) && (p[n] = l[n]);
                        return o(p.init) || (p.init = u), s
                    }, s.open(c)
                }
            }("prototype", {}.hasOwnProperty),
            l = {
                ease: ["ease", function (t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * t)
                }],
                "ease-in": ["ease-in", function (t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                }],
                "ease-out": ["ease-out", function (t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
                }],
                "ease-in-out": ["ease-in-out", function (t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                }],
                linear: ["linear", function (t, e, n, r) {
                    return n * t / r + e
                }],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (t, e, n, r) {
                    return n * (t /= r) * t + e
                }],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (t, e, n, r) {
                    return -n * (t /= r) * (t - 2) + e
                }],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
                }],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (t, e, n, r) {
                    return n * (t /= r) * t * t + e
                }],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t + 1) + e
                }],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
                }],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (t, e, n, r) {
                    return n * (t /= r) * t * t * t + e
                }],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (t, e, n, r) {
                    return -n * ((t = t / r - 1) * t * t * t - 1) + e
                }],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
                }],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (t, e, n, r) {
                    return n * (t /= r) * t * t * t * t + e
                }],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t * t * t + 1) + e
                }],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
                }],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (t, e, n, r) {
                    return -n * Math.cos(t / r * (Math.PI / 2)) + n + e
                }],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (t, e, n, r) {
                    return n * Math.sin(t / r * (Math.PI / 2)) + e
                }],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (t, e, n, r) {
                    return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e
                }],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (t, e, n, r) {
                    return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e
                }],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (t, e, n, r) {
                    return t === r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e
                }],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (t, e, n, r) {
                    return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
                }],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (t, e, n, r) {
                    return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e
                }],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (t, e, n, r) {
                    return n * Math.sqrt(1 - (t = t / r - 1) * t) + e
                }],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (t, e, n, r) {
                    return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                }],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e
                }],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
                }],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
                }]
            },
            d = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            },
            p = document,
            v = window,
            h = "bkwld-tram",
            E = /[\-\.0-9]/g,
            _ = /[A-Z]/,
            g = "number",
            y = /^(rgb|#)/,
            m = /(em|cm|mm|in|pt|pc|px)$/,
            I = /(em|cm|mm|in|pt|pc|px|%)$/,
            T = /(deg|rad|turn)$/,
            b = "unitless",
            O = /(all|none) 0s ease 0s/,
            w = /^(width|height)$/,
            A = " ",
            S = p.createElement("a"),
            R = ["Webkit", "Moz", "O", "ms"],
            N = ["-webkit-", "-moz-", "-o-", "-ms-"],
            x = function (t) {
                if (t in S.style) return {
                    dom: t,
                    css: t
                };
                var e, n, r = "",
                    i = t.split("-");
                for (e = 0; e < i.length; e++) r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
                for (e = 0; e < R.length; e++)
                    if ((n = R[e] + r) in S.style) return {
                        dom: n,
                        css: N[e] + t
                    }
            },
            C = e.support = {
                bind: Function.prototype.bind,
                transform: x("transform"),
                transition: x("transition"),
                backface: x("backface-visibility"),
                timing: x("transition-timing-function")
            };
        if (C.transition) {
            var L = C.timing.dom;
            if (S.style[L] = l["ease-in-back"][0], !S.style[L])
                for (var P in d) l[P][0] = d[P]
        }
        var D = e.frame = function () {
                var t = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
                return t && C.bind ? t.bind(v) : function (t) {
                    v.setTimeout(t, 16)
                }
            }(),
            M = e.now = function () {
                var t = v.performance,
                    e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                return e && C.bind ? e.bind(t) : Date.now || function () {
                    return +new Date
                }
            }(),
            j = f(function (e) {
                function i(t, e) {
                    var n = function (t) {
                            for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
                                var i = t[e];
                                i && r.push(i)
                            }
                            return r
                        }(("" + t).split(A)),
                        r = n[0];
                    e = e || {};
                    var i = Q[r];
                    if (!i) return s("Unsupported property: " + r);
                    if (!e.weak || !this.props[r]) {
                        var o = i[0],
                            a = this.props[r];
                        return a || (a = this.props[r] = new o.Bare), a.init(this.$el, n, i, e), a
                    }
                }

                function o(t, e, n) {
                    if (t) {
                        var o = (0, r.default)(t);
                        if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new B({
                            duration: t,
                            context: this,
                            complete: a
                        }), void(this.active = !0);
                        if ("string" == o && e) {
                            switch (t) {
                                case "hide":
                                    f.call(this);
                                    break;
                                case "stop":
                                    u.call(this);
                                    break;
                                case "redraw":
                                    l.call(this);
                                    break;
                                default:
                                    i.call(this, t, n && n[1])
                            }
                            return a.call(this)
                        }
                        if ("function" == o) return void t.call(this, this);
                        if ("object" == o) {
                            var s = 0;
                            p.call(this, t, function (t, e) {
                                t.span > s && (s = t.span), t.stop(), t.animate(e)
                            }, function (t) {
                                "wait" in t && (s = c(t.wait, 0))
                            }), d.call(this), s > 0 && (this.timer = new B({
                                duration: s,
                                context: this
                            }), this.active = !0, e && (this.timer.complete = a));
                            var v = this,
                                h = !1,
                                E = {};
                            D(function () {
                                p.call(v, t, function (t) {
                                    t.active && (h = !0, E[t.name] = t.nextStyle)
                                }), h && v.$el.css(E)
                            })
                        }
                    }
                }

                function a() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var t = this.queue.shift();
                        o.call(this, t.options, !0, t.args)
                    }
                }

                function u(t) {
                    var e;
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0, r.default)(t) && null != t ? t : this.props, p.call(this, e, v), d.call(this)
                }

                function f() {
                    u.call(this), this.el.style.display = "none"
                }

                function l() {
                    this.el.offsetHeight
                }

                function d() {
                    var t, e, n = [];
                    for (t in this.upstream && n.push(this.upstream), this.props)(e = this.props[t]).active && n.push(e.string);
                    n = n.join(","), this.style !== n && (this.style = n, this.el.style[C.transition.dom] = n)
                }

                function p(t, e, r) {
                    var o, a, u, c, s = e !== v,
                        f = {};
                    for (o in t) u = t[o], o in q ? (f.transform || (f.transform = {}), f.transform[o] = u) : (_.test(o) && (o = n(o)), o in Q ? f[o] = u : (c || (c = {}), c[o] = u));
                    for (o in f) {
                        if (u = f[o], !(a = this.props[o])) {
                            if (!s) continue;
                            a = i.call(this, o)
                        }
                        e.call(this, a, u)
                    }
                    r && c && r.call(this, c)
                }

                function v(t) {
                    t.stop()
                }

                function E(t, e) {
                    t.set(e)
                }

                function g(t) {
                    this.$el.css(t)
                }

                function y(t, n) {
                    e[t] = function () {
                        return this.children ? function (t, e) {
                            var n, r = this.children.length;
                            for (n = 0; r > n; n++) t.apply(this.children[n], e);
                            return this
                        }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
                    }
                }
                e.init = function (e) {
                    if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, H.keepInherited && !H.fallback) {
                        var n = K(this.el, "transition");
                        n && !O.test(n) && (this.upstream = n)
                    }
                    C.backface && H.hideBackface && z(this.el, C.backface.css, "hidden")
                }, y("add", i), y("start", o), y("wait", function (t) {
                    t = c(t, 0), this.active ? this.queue.push({
                        options: t
                    }) : (this.timer = new B({
                        duration: t,
                        context: this,
                        complete: a
                    }), this.active = !0)
                }), y("then", function (t) {
                    return this.active ? (this.queue.push({
                        options: t,
                        args: arguments
                    }), void(this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().")
                }), y("next", a), y("stop", u), y("set", function (t) {
                    u.call(this, t), p.call(this, t, E, g)
                }), y("show", function (t) {
                    "string" != typeof t && (t = "block"), this.el.style.display = t
                }), y("hide", f), y("redraw", l), y("destroy", function () {
                    u.call(this), t.removeData(this.el, h), this.$el = this.el = null
                })
            }),
            F = f(j, function (e) {
                function n(e, n) {
                    var r = t.data(e, h) || t.data(e, h, new j.Bare);
                    return r.el || r.init(e), n ? r.start(n) : r
                }
                e.init = function (e, r) {
                    var i = t(e);
                    if (!i.length) return this;
                    if (1 === i.length) return n(i[0], r);
                    var o = [];
                    return i.each(function (t, e) {
                        o.push(n(e, r))
                    }), this.children = o, this
                }
            }),
            X = f(function (t) {
                function e() {
                    var t = this.get();
                    this.update("auto");
                    var e = this.get();
                    return this.update(t), e
                }

                function n(t) {
                    var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                    return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var i = 500,
                    a = "ease",
                    u = 0;
                t.init = function (t, e, n, r) {
                    this.$el = t, this.el = t[0];
                    var o = e[0];
                    n[2] && (o = n[2]), Y[o] && (o = Y[o]), this.name = o, this.type = n[1], this.duration = c(e[1], this.duration, i), this.ease = function (t, e, n) {
                        return void 0 !== e && (n = e), t in l ? t : n
                    }(e[2], this.ease, a), this.delay = c(e[3], this.delay, u), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = w.test(this.name), this.unit = r.unit || this.unit || H.defaultUnit, this.angle = r.angle || this.angle || H.defaultAngle, H.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + A + this.duration + "ms" + ("ease" != this.ease ? A + l[this.ease][0] : "") + (this.delay ? A + this.delay + "ms" : ""))
                }, t.set = function (t) {
                    t = this.convert(t, this.type), this.update(t), this.redraw()
                }, t.transition = function (t) {
                    this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
                }, t.fallback = function (t) {
                    var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                    t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new U({
                        from: n,
                        to: t,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.get = function () {
                    return K(this.el, this.name)
                }, t.update = function (t) {
                    z(this.el, this.name, t)
                }, t.stop = function () {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, z(this.el, this.name, this.get()));
                    var t = this.tween;
                    t && t.context && t.destroy()
                }, t.convert = function (t, e) {
                    if ("auto" == t && this.auto) return t;
                    var i, o = "number" == typeof t,
                        a = "string" == typeof t;
                    switch (e) {
                        case g:
                            if (o) return t;
                            if (a && "" === t.replace(E, "")) return +t;
                            i = "number(unitless)";
                            break;
                        case y:
                            if (a) {
                                if ("" === t && this.original) return this.original;
                                if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : n(t)
                            }
                            i = "hex or rgb string";
                            break;
                        case m:
                            if (o) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit)";
                            break;
                        case I:
                            if (o) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit or %)";
                            break;
                        case T:
                            if (o) return t + this.angle;
                            if (a && e.test(t)) return t;
                            i = "number(deg) or string(angle)";
                            break;
                        case b:
                            if (o) return t;
                            if (a && I.test(t)) return t;
                            i = "number(unitless) or string(unit or %)"
                    }
                    return function (t, e) {
                        s("Type warning: Expected: [" + t + "] Got: [" + (0, r.default)(e) + "] " + e)
                    }(i, t), t
                }, t.redraw = function () {
                    this.el.offsetHeight
                }
            }),
            G = f(X, function (t, e) {
                t.init = function () {
                    e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), y))
                }
            }),
            k = f(X, function (t, e) {
                t.init = function () {
                    e.init.apply(this, arguments), this.animate = this.fallback
                }, t.get = function () {
                    return this.$el[this.name]()
                }, t.update = function (t) {
                    this.$el[this.name](t)
                }
            }),
            V = f(X, function (t, e) {
                function n(t, e) {
                    var n, r, i, o, a;
                    for (n in t) i = (o = q[n])[0], r = o[1] || n, a = this.convert(t[n], i), e.call(this, r, a, i)
                }
                t.init = function () {
                    e.init.apply(this, arguments), this.current || (this.current = {}, q.perspective && H.perspective && (this.current.perspective = H.perspective, z(this.el, this.name, this.style(this.current)), this.redraw()))
                }, t.set = function (t) {
                    n.call(this, t, function (t, e) {
                        this.current[t] = e
                    }), z(this.el, this.name, this.style(this.current)), this.redraw()
                }, t.transition = function (t) {
                    var e = this.values(t);
                    this.tween = new W({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var n, r = {};
                    for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
                    this.active = !0, this.nextStyle = this.style(r)
                }, t.fallback = function (t) {
                    var e = this.values(t);
                    this.tween = new W({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.update = function () {
                    z(this.el, this.name, this.style(this.current))
                }, t.style = function (t) {
                    var e, n = "";
                    for (e in t) n += e + "(" + t[e] + ") ";
                    return n
                }, t.values = function (t) {
                    var e, r = {};
                    return n.call(this, t, function (t, n, i) {
                        r[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i))
                    }), r
                }
            }),
            U = f(function (e) {
                function n() {
                    var t, e, r, i = c.length;
                    if (i)
                        for (D(n), e = M(), t = i; t--;)(r = c[t]) && r.render(e)
                }
                var r = {
                    ease: l.ease[1],
                    from: 0,
                    to: 1
                };
                e.init = function (t) {
                    this.duration = t.duration || 0, this.delay = t.delay || 0;
                    var e = t.ease || r.ease;
                    l[e] && (e = l[e][1]), "function" != typeof e && (e = r.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
                    var n = t.from,
                        i = t.to;
                    void 0 === n && (n = r.from), void 0 === i && (i = r.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = M(), !1 !== t.autoplay && this.play()
                }, e.play = function () {
                    var t;
                    this.active || (this.start || (this.start = M()), this.active = !0, t = this, 1 === c.push(t) && D(n))
                }, e.stop = function () {
                    var e, n, r;
                    this.active && (this.active = !1, e = this, (r = t.inArray(e, c)) >= 0 && (n = c.slice(r + 1), c.length = r, n.length && (c = c.concat(n))))
                }, e.render = function (t) {
                    var e, n = t - this.start;
                    if (this.delay) {
                        if (n <= this.delay) return;
                        n -= this.delay
                    }
                    if (n < this.duration) {
                        var r = this.ease(n, 0, 1, this.duration);
                        return e = this.startRGB ? function (t, e, n) {
                            return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
                        }(this.startRGB, this.endRGB, r) : function (t) {
                            return Math.round(t * s) / s
                        }(this.begin + r * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
                    }
                    e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                }, e.format = function (t, e) {
                    if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void(this.change = 1);
                    if (!this.unit) {
                        var n = e.replace(E, "");
                        n !== t.replace(E, "") && u("tween", e, t), this.unit = n
                    }
                    e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
                }, e.destroy = function () {
                    this.stop(), this.context = null, this.ease = this.update = this.complete = a
                };
                var c = [],
                    s = 1e3
            }),
            B = f(U, function (t) {
                t.init = function (t) {
                    this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play()
                }, t.render = function (t) {
                    t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                }
            }),
            W = f(U, function (t, e) {
                t.init = function (t) {
                    var e, n;
                    for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new U({
                        name: e,
                        from: this.current[e],
                        to: n,
                        duration: t.duration,
                        delay: t.delay,
                        ease: t.ease,
                        autoplay: !1
                    }));
                    this.play()
                }, t.render = function (t) {
                    var e, n, r = !1;
                    for (e = this.tweens.length; e--;)(n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, r = !0);
                    return r ? void(this.update && this.update.call(this.context)) : this.destroy()
                }, t.destroy = function () {
                    if (e.destroy.call(this), this.tweens) {
                        var t;
                        for (t = this.tweens.length; t--;) this.tweens[t].destroy();
                        this.tweens = null, this.current = null
                    }
                }
            }),
            H = e.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !C.transition,
                agentTests: []
            };
        e.fallback = function (t) {
            if (!C.transition) return H.fallback = !0;
            H.agentTests.push("(" + t + ")");
            var e = new RegExp(H.agentTests.join("|"), "i");
            H.fallback = e.test(navigator.userAgent)
        }, e.fallback("6.0.[2-5] Safari"), e.tween = function (t) {
            return new U(t)
        }, e.delay = function (t, e, n) {
            return new B({
                complete: e,
                duration: t,
                context: n
            })
        }, t.fn.tram = function (t) {
            return e.call(null, this, t)
        };
        var z = t.style,
            K = t.css,
            Y = {
                transform: C.transform && C.transform.css
            },
            Q = {
                color: [G, y],
                background: [G, y, "background-color"],
                "outline-color": [G, y],
                "border-color": [G, y],
                "border-top-color": [G, y],
                "border-right-color": [G, y],
                "border-bottom-color": [G, y],
                "border-left-color": [G, y],
                "border-width": [X, m],
                "border-top-width": [X, m],
                "border-right-width": [X, m],
                "border-bottom-width": [X, m],
                "border-left-width": [X, m],
                "border-spacing": [X, m],
                "letter-spacing": [X, m],
                margin: [X, m],
                "margin-top": [X, m],
                "margin-right": [X, m],
                "margin-bottom": [X, m],
                "margin-left": [X, m],
                padding: [X, m],
                "padding-top": [X, m],
                "padding-right": [X, m],
                "padding-bottom": [X, m],
                "padding-left": [X, m],
                "outline-width": [X, m],
                opacity: [X, g],
                top: [X, I],
                right: [X, I],
                bottom: [X, I],
                left: [X, I],
                "font-size": [X, I],
                "text-indent": [X, I],
                "word-spacing": [X, I],
                width: [X, I],
                "min-width": [X, I],
                "max-width": [X, I],
                height: [X, I],
                "min-height": [X, I],
                "max-height": [X, I],
                "line-height": [X, b],
                "scroll-top": [k, g, "scrollTop"],
                "scroll-left": [k, g, "scrollLeft"]
            },
            q = {};
        C.transform && (Q.transform = [V], q = {
            x: [I, "translateX"],
            y: [I, "translateY"],
            rotate: [T],
            rotateX: [T],
            rotateY: [T],
            scale: [g],
            scaleX: [g],
            scaleY: [g],
            skew: [T],
            skewX: [T],
            skewY: [T]
        }), C.transform && C.backface && (q.z = [I, "translateZ"], q.rotateZ = [T], q.scaleZ = [g], q.perspective = [m]);
        var $ = /ms/,
            Z = /s|\./;
        return t.tram = e
    }(window.jQuery)
}, function (t, e, n) {
    var r = n(13),
        i = n(39),
        o = n(144),
        a = n(70),
        u = n(26),
        c = n(72),
        s = n(9),
        f = n(79),
        l = Object.getOwnPropertyDescriptor;
    e.f = r ? l : function (t, e) {
        if (t = u(t), e = c(e), f) try {
            return l(t, e)
        } catch (t) {}
        if (s(t, e)) return a(!i(o.f, t, e), t[e])
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function (t, e, n) {
    var r = n(0).TypeError;
    t.exports = function (t) {
        if (null == t) throw r("Can't call method on " + t);
        return t
    }
}, function (t, e, n) {
    var r = n(147),
        i = n(73);
    t.exports = function (t) {
        var e = r(t, "string");
        return i(e) ? e : e + ""
    }
}, function (t, e, n) {
    var r = n(0),
        i = n(27),
        o = n(7),
        a = n(148),
        u = n(74),
        c = r.Object;
    t.exports = u ? function (t) {
        return "symbol" == typeof t
    } : function (t) {
        var e = i("Symbol");
        return o(e) && a(e.prototype, c(t))
    }
}, function (t, e, n) {
    var r = n(75);
    t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function (t, e, n) {
    var r = n(149),
        i = n(19);
    t.exports = !!Object.getOwnPropertySymbols && !i(function () {
        var t = Symbol();
        return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41
    })
}, function (t, e, n) {
    var r = n(0),
        i = n(77),
        o = n(9),
        a = n(78),
        u = n(75),
        c = n(74),
        s = i("wks"),
        f = r.Symbol,
        l = f && f.for,
        d = c ? f : f && f.withoutSetter || a;
    t.exports = function (t) {
        if (!o(s, t) || !u && "string" != typeof s[t]) {
            var e = "Symbol." + t;
            u && o(f, t) ? s[t] = f[t] : s[t] = c && l ? l(e) : d(e)
        }
        return s[t]
    }
}, function (t, e, n) {
    var r = n(155),
        i = n(40);
    (t.exports = function (t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: "3.19.0",
        mode: r ? "pure" : "global",
        copyright: "Â© 2021 Denis Pushkarev (zloirock.ru)"
    })
}, function (t, e, n) {
    var r = n(5),
        i = 0,
        o = Math.random(),
        a = r(1..toString);
    t.exports = function (t) {
        return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++i + o, 36)
    }
}, function (t, e, n) {
    var r = n(13),
        i = n(19),
        o = n(80);
    t.exports = !r && !i(function () {
        return 7 != Object.defineProperty(o("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e, n) {
    var r = n(0),
        i = n(20),
        o = r.document,
        a = i(o) && i(o.createElement);
    t.exports = function (t) {
        return a ? o.createElement(t) : {}
    }
}, function (t, e, n) {
    var r = n(5),
        i = n(7),
        o = n(40),
        a = r(Function.toString);
    i(o.inspectSource) || (o.inspectSource = function (t) {
        return a(t)
    }), t.exports = o.inspectSource
}, function (t, e, n) {
    var r = n(77),
        i = n(78),
        o = r("keys");
    t.exports = function (t) {
        return o[t] || (o[t] = i(t))
    }
}, function (t, e, n) {
    var r = n(5),
        i = n(9),
        o = n(26),
        a = n(84).indexOf,
        u = n(43),
        c = r([].push);
    t.exports = function (t, e) {
        var n, r = o(t),
            s = 0,
            f = [];
        for (n in r) !i(u, n) && i(r, n) && c(f, n);
        for (; e.length > s;) i(r, n = e[s++]) && (~a(f, n) || c(f, n));
        return f
    }
}, function (t, e, n) {
    var r = n(26),
        i = n(164),
        o = n(165),
        a = function (t) {
            return function (e, n, a) {
                var u, c = r(e),
                    s = o(c),
                    f = i(a, s);
                if (t && n != n) {
                    for (; s > f;)
                        if ((u = c[f++]) != u) return !0
                } else
                    for (; s > f; f++)
                        if ((t || f in c) && c[f] === n) return t || f || 0;
                return !t && -1
            }
        };
    t.exports = {
        includes: a(!0),
        indexOf: a(!1)
    }
}, function (t, e) {
    var n = Math.ceil,
        r = Math.floor;
    t.exports = function (t) {
        var e = +t;
        return e != e || 0 === e ? 0 : (e > 0 ? r : n)(e)
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(45);
    n.d(e, "createStore", function () {
        return r.default
    });
    var i = n(89);
    n.d(e, "combineReducers", function () {
        return i.default
    });
    var o = n(91);
    n.d(e, "bindActionCreators", function () {
        return o.default
    });
    var a = n(92);
    n.d(e, "applyMiddleware", function () {
        return a.default
    });
    var u = n(46);
    n.d(e, "compose", function () {
        return u.default
    });
    n(90)
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(175),
        i = n(180),
        o = n(182),
        a = "[object Object]",
        u = Function.prototype,
        c = Object.prototype,
        s = u.toString,
        f = c.hasOwnProperty,
        l = s.call(Object);
    e.default = function (t) {
        if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
        var e = Object(i.default)(t);
        if (null === e) return !0;
        var n = f.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && s.call(n) == l
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(176).default.Symbol;
    e.default = r
}, function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "default", function () {
        return o
    });
    var r = n(45);
    n(87), n(90);

    function i(t, e) {
        var n = e && e.type;
        return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
    }

    function o(t) {
        for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
            var a = e[o];
            0, "function" == typeof t[a] && (n[a] = t[a])
        }
        var u, c = Object.keys(n);
        try {
            ! function (t) {
                Object.keys(t).forEach(function (e) {
                    var n = t[e];
                    if (void 0 === n(void 0, {
                            type: r.ActionTypes.INIT
                        })) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                    if (void 0 === n(void 0, {
                            type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                        })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + r.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
                })
            }(n)
        } catch (t) {
            u = t
        }
        return function () {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = arguments[1];
            if (u) throw u;
            for (var r = !1, o = {}, a = 0; a < c.length; a++) {
                var s = c[a],
                    f = n[s],
                    l = t[s],
                    d = f(l, e);
                if (void 0 === d) {
                    var p = i(s, e);
                    throw new Error(p)
                }
                o[s] = d, r = r || d !== l
            }
            return r ? o : t
        }
    }
}, function (t, e, n) {
    "use strict";

    function r(t) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(t);
        try {
            throw new Error(t)
        } catch (t) {}
    }
    n.r(e), n.d(e, "default", function () {
        return r
    })
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        return function () {
            return e(t.apply(void 0, arguments))
        }
    }

    function i(t, e) {
        if ("function" == typeof t) return r(t, e);
        if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
            var a = n[o],
                u = t[a];
            "function" == typeof u && (i[a] = r(u, e))
        }
        return i
    }
    n.r(e), n.d(e, "default", function () {
        return i
    })
}, function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "default", function () {
        return o
    });
    var r = n(46),
        i = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        };

    function o() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return function (t) {
            return function (n, o, a) {
                var u, c = t(n, o, a),
                    s = c.dispatch,
                    f = {
                        getState: c.getState,
                        dispatch: function (t) {
                            return s(t)
                        }
                    };
                return u = e.map(function (t) {
                    return t(f)
                }), s = r.default.apply(void 0, u)(c.dispatch), i({}, c, {
                    dispatch: s
                })
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ActionAppliesTo = e.ActionTypeConsts = void 0;
    e.ActionTypeConsts = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
    };
    e.ActionAppliesTo = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
    }
}, function (t, e, n) {
    var r = n(95)(n(260));
    t.exports = r
}, function (t, e, n) {
    var r = n(10),
        i = n(16),
        o = n(35);
    t.exports = function (t) {
        return function (e, n, a) {
            var u = Object(e);
            if (!i(e)) {
                var c = r(n, 3);
                e = o(e), n = function (t) {
                    return c(u[t], t, u)
                }
            }
            var s = t(e, n, a);
            return s > -1 ? u[c ? e[s] : s] : void 0
        }
    }
}, function (t, e, n) {
    var r = n(31),
        i = n(202),
        o = n(203),
        a = n(204),
        u = n(205),
        c = n(206);

    function s(t) {
        var e = this.__data__ = new r(t);
        this.size = e.size
    }
    s.prototype.clear = i, s.prototype.delete = o, s.prototype.get = a, s.prototype.has = u, s.prototype.set = c, t.exports = s
}, function (t, e, n) {
    var r = n(15),
        i = n(8),
        o = "[object AsyncFunction]",
        a = "[object Function]",
        u = "[object GeneratorFunction]",
        c = "[object Proxy]";
    t.exports = function (t) {
        if (!i(t)) return !1;
        var e = r(t);
        return e == a || e == u || e == o || e == c
    }
}, function (t, e, n) {
    (function (e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }).call(this, n(25))
}, function (t, e) {
    var n = Function.prototype.toString;
    t.exports = function (t) {
        if (null != t) {
            try {
                return n.call(t)
            } catch (t) {}
            try {
                return t + ""
            } catch (t) {}
        }
        return ""
    }
}, function (t, e, n) {
    var r = n(225),
        i = n(12);
    t.exports = function t(e, n, o, a, u) {
        return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, u))
    }
}, function (t, e, n) {
    var r = n(226),
        i = n(229),
        o = n(230),
        a = 1,
        u = 2;
    t.exports = function (t, e, n, c, s, f) {
        var l = n & a,
            d = t.length,
            p = e.length;
        if (d != p && !(l && p > d)) return !1;
        var v = f.get(t),
            h = f.get(e);
        if (v && h) return v == e && h == t;
        var E = -1,
            _ = !0,
            g = n & u ? new r : void 0;
        for (f.set(t, e), f.set(e, t); ++E < d;) {
            var y = t[E],
                m = e[E];
            if (c) var I = l ? c(m, y, E, e, t, f) : c(y, m, E, t, e, f);
            if (void 0 !== I) {
                if (I) continue;
                _ = !1;
                break
            }
            if (g) {
                if (!i(e, function (t, e) {
                        if (!o(g, e) && (y === t || s(y, t, n, c, f))) return g.push(e)
                    })) {
                    _ = !1;
                    break
                }
            } else if (y !== m && !s(y, m, n, c, f)) {
                _ = !1;
                break
            }
        }
        return f.delete(t), f.delete(e), _
    }
}, function (t, e, n) {
    var r = n(51),
        i = n(2);
    t.exports = function (t, e, n) {
        var o = e(t);
        return i(t) ? o : r(o, n(t))
    }
}, function (t, e, n) {
    var r = n(237),
        i = n(104),
        o = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        u = a ? function (t) {
            return null == t ? [] : (t = Object(t), r(a(t), function (e) {
                return o.call(t, e)
            }))
        } : i;
    t.exports = u
}, function (t, e) {
    t.exports = function () {
        return []
    }
}, function (t, e, n) {
    var r = n(238),
        i = n(36),
        o = n(2),
        a = n(52),
        u = n(53),
        c = n(54),
        s = Object.prototype.hasOwnProperty;
    t.exports = function (t, e) {
        var n = o(t),
            f = !n && i(t),
            l = !n && !f && a(t),
            d = !n && !f && !l && c(t),
            p = n || f || l || d,
            v = p ? r(t.length, String) : [],
            h = v.length;
        for (var E in t) !e && !s.call(t, E) || p && ("length" == E || l && ("offset" == E || "parent" == E) || d && ("buffer" == E || "byteLength" == E || "byteOffset" == E) || u(E, h)) || v.push(E);
        return v
    }
}, function (t, e) {
    t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return function (n) {
            return t(e(n))
        }
    }
}, function (t, e, n) {
    var r = n(11)(n(6), "WeakMap");
    t.exports = r
}, function (t, e, n) {
    var r = n(8);
    t.exports = function (t) {
        return t == t && !r(t)
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return function (n) {
            return null != n && n[t] === e && (void 0 !== e || t in Object(n))
        }
    }
}, function (t, e) {
    t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
        return i
    }
}, function (t, e) {
    t.exports = function (t) {
        return function (e) {
            return null == e ? void 0 : e[t]
        }
    }
}, function (t, e) {
    t.exports = function (t, e, n, r) {
        for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
            if (e(t[o], o, t)) return o;
        return -1
    }
}, function (t, e, n) {
    var r = n(261);
    t.exports = function (t) {
        var e = r(t),
            n = e % 1;
        return e == e ? n ? e - n : e : 0
    }
}, function (t, e, n) {
    "use strict";
    var r = n(1);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.inQuad = function (t) {
        return Math.pow(t, 2)
    }, e.outQuad = function (t) {
        return -(Math.pow(t - 1, 2) - 1)
    }, e.inOutQuad = function (t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 2);
        return -.5 * ((t -= 2) * t - 2)
    }, e.inCubic = function (t) {
        return Math.pow(t, 3)
    }, e.outCubic = function (t) {
        return Math.pow(t - 1, 3) + 1
    }, e.inOutCubic = function (t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 3);
        return .5 * (Math.pow(t - 2, 3) + 2)
    }, e.inQuart = function (t) {
        return Math.pow(t, 4)
    }, e.outQuart = function (t) {
        return -(Math.pow(t - 1, 4) - 1)
    }, e.inOutQuart = function (t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 4);
        return -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
    }, e.inQuint = function (t) {
        return Math.pow(t, 5)
    }, e.outQuint = function (t) {
        return Math.pow(t - 1, 5) + 1
    }, e.inOutQuint = function (t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 5);
        return .5 * (Math.pow(t - 2, 5) + 2)
    }, e.inSine = function (t) {
        return 1 - Math.cos(t * (Math.PI / 2))
    }, e.outSine = function (t) {
        return Math.sin(t * (Math.PI / 2))
    }, e.inOutSine = function (t) {
        return -.5 * (Math.cos(Math.PI * t) - 1)
    }, e.inExpo = function (t) {
        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
    }, e.outExpo = function (t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
    }, e.inOutExpo = function (t) {
        if (0 === t) return 0;
        if (1 === t) return 1;
        if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
        return .5 * (2 - Math.pow(2, -10 * --t))
    }, e.inCirc = function (t) {
        return -(Math.sqrt(1 - t * t) - 1)
    }, e.outCirc = function (t) {
        return Math.sqrt(1 - Math.pow(t - 1, 2))
    }, e.inOutCirc = function (t) {
        if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1);
        return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
    }, e.outBounce = function (t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }, e.inBack = function (t) {
        return t * t * ((o + 1) * t - o)
    }, e.outBack = function (t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1
    }, e.inOutBack = function (t) {
        var e = o;
        if ((t /= .5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * .5;
        return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
    }, e.inElastic = function (t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = .3);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)
    }, e.outElastic = function (t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = .3);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        return r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1
    }, e.inOutElastic = function (t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (2 == (t /= .5)) return 1;
        n || (n = .3 * 1.5);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        if (t < 1) return r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5;
        return r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1
    }, e.swingFromTo = function (t) {
        var e = o;
        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
    }, e.swingFrom = function (t) {
        return t * t * ((o + 1) * t - o)
    }, e.swingTo = function (t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1
    }, e.bounce = function (t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }, e.bouncePast = function (t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
    }, e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0;
    var i = r(n(116)),
        o = 1.70158,
        a = (0, i.default)(.25, .1, .25, 1);
    e.ease = a;
    var u = (0, i.default)(.42, 0, 1, 1);
    e.easeIn = u;
    var c = (0, i.default)(0, 0, .58, 1);
    e.easeOut = c;
    var s = (0, i.default)(.42, 0, .58, 1);
    e.easeInOut = s
}, function (t, e) {
    var n = 4,
        r = .001,
        i = 1e-7,
        o = 10,
        a = 11,
        u = 1 / (a - 1),
        c = "function" == typeof Float32Array;

    function s(t, e) {
        return 1 - 3 * e + 3 * t
    }

    function f(t, e) {
        return 3 * e - 6 * t
    }

    function l(t) {
        return 3 * t
    }

    function d(t, e, n) {
        return ((s(e, n) * t + f(e, n)) * t + l(e)) * t
    }

    function p(t, e, n) {
        return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e)
    }
    t.exports = function (t, e, s, f) {
        if (!(0 <= t && t <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
        var l = c ? new Float32Array(a) : new Array(a);
        if (t !== e || s !== f)
            for (var v = 0; v < a; ++v) l[v] = d(v * u, t, s);

        function h(e) {
            for (var c = 0, f = 1, v = a - 1; f !== v && l[f] <= e; ++f) c += u;
            var h = c + (e - l[--f]) / (l[f + 1] - l[f]) * u,
                E = p(h, t, s);
            return E >= r ? function (t, e, r, i) {
                for (var o = 0; o < n; ++o) {
                    var a = p(e, r, i);
                    if (0 === a) return e;
                    e -= (d(e, r, i) - t) / a
                }
                return e
            }(e, h, t, s) : 0 === E ? h : function (t, e, n, r, a) {
                var u, c, s = 0;
                do {
                    (u = d(c = e + (n - e) / 2, r, a) - t) > 0 ? n = c : e = c
                } while (Math.abs(u) > i && ++s < o);
                return c
            }(e, c, c + u, t, s)
        }
        return function (n) {
            return t === e && s === f ? n : 0 === n ? 0 : 1 === n ? 1 : d(h(n), e, f)
        }
    }
}, function (t, e, n) {
    "use strict";
    var r = n(1)(n(118)),
        i = n(1),
        o = n(18);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.optimizeFloat = c, e.createBezierEasing = function (t) {
        return u.default.apply(void 0, (0, r.default)(t))
    }, e.applyEasing = function (t, e, n) {
        if (0 === e) return 0;
        if (1 === e) return 1;
        if (n) return c(e > 0 ? n(e) : e);
        return c(e > 0 && t && a[t] ? a[t](e) : e)
    };
    var a = o(n(115)),
        u = i(n(116));

    function c(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = Math.pow(n, e),
            i = Number(Math.round(t * r) / r);
        return Math.abs(i) > 1e-4 ? i : 0
    }
}, function (t, e, n) {
    var r = n(264),
        i = n(265),
        o = n(266);
    t.exports = function (t) {
        return r(t) || i(t) || o()
    }
}, function (t, e, n) {
    "use strict";
    var r = n(1)(n(21));
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isPluginType = function (t) {
        return t === o.ActionTypeConsts.PLUGIN_LOTTIE
    }, e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginDuration = e.getPluginOrigin = e.getPluginConfig = void 0;
    var i = n(268),
        o = n(3),
        a = n(47),
        u = (0, r.default)({}, o.ActionTypeConsts.PLUGIN_LOTTIE, {
            getConfig: i.getPluginConfig,
            getOrigin: i.getPluginOrigin,
            getDuration: i.getPluginDuration,
            getDestination: i.getPluginDestination,
            createInstance: i.createPluginInstance,
            render: i.renderPlugin,
            clear: i.clearPlugin
        });
    var c = function (t) {
            return function (e) {
                if (!a.IS_BROWSER_ENV) return function () {
                    return null
                };
                var n = u[e];
                if (!n) throw new Error("IX2 no plugin configured for: ".concat(e));
                var r = n[t];
                if (!r) throw new Error("IX2 invalid plugin method: ".concat(t));
                return r
            }
        },
        s = c("getConfig");
    e.getPluginConfig = s;
    var f = c("getOrigin");
    e.getPluginOrigin = f;
    var l = c("getDuration");
    e.getPluginDuration = l;
    var d = c("getDestination");
    e.getPluginDestination = d;
    var p = c("createInstance");
    e.createPluginInstance = p;
    var v = c("render");
    e.renderPlugin = v;
    var h = c("clear");
    e.clearPlugin = h
}, function (t, e, n) {
    var r = n(121),
        i = n(275)(r);
    t.exports = i
}, function (t, e, n) {
    var r = n(273),
        i = n(35);
    t.exports = function (t, e) {
        return t && r(t, e, i)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(1)(n(118)),
        i = n(18),
        o = n(1);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.observeRequests = function (t) {
        P({
            store: t,
            select: function (t) {
                var e = t.ixRequest;
                return e.preview
            },
            onChange: et
        }), P({
            store: t,
            select: function (t) {
                var e = t.ixRequest;
                return e.playback
            },
            onChange: rt
        }), P({
            store: t,
            select: function (t) {
                var e = t.ixRequest;
                return e.stop
            },
            onChange: it
        }), P({
            store: t,
            select: function (t) {
                var e = t.ixRequest;
                return e.clear
            },
            onChange: ot
        })
    }, e.startEngine = at, e.stopEngine = ut, e.stopAllActionGroups = ht, e.stopActionGroup = Et, e.startActionGroup = _t;
    var a = o(n(30)),
        u = o(n(282)),
        c = o(n(94)),
        s = o(n(59)),
        f = o(n(283)),
        l = o(n(289)),
        d = o(n(301)),
        p = o(n(302)),
        v = o(n(303)),
        h = o(n(306)),
        E = n(3),
        _ = n(14),
        g = n(64),
        y = i(n(309)),
        m = o(n(310)),
        I = Object.keys(E.QuickEffectIds),
        T = function (t) {
            return I.includes(t)
        },
        b = E.IX2EngineConstants,
        O = b.COLON_DELIMITER,
        w = b.BOUNDARY_SELECTOR,
        A = b.HTML_ELEMENT,
        S = b.RENDER_GENERAL,
        R = b.W_MOD_IX,
        N = _.IX2VanillaUtils,
        x = N.getAffectedElements,
        C = N.getElementId,
        L = N.getDestinationValues,
        P = N.observeStore,
        D = N.getInstanceId,
        M = N.renderHTMLElement,
        j = N.clearAllStyles,
        F = N.getMaxDurationItemIndex,
        X = N.getComputedStyle,
        G = N.getInstanceOrigin,
        k = N.reduceListToGroup,
        V = N.shouldNamespaceEventParameter,
        U = N.getNamespacedParameterId,
        B = N.shouldAllowMediaQuery,
        W = N.cleanupHTMLElement,
        H = N.stringifyTarget,
        z = N.mediaQueriesEqual,
        K = N.shallowEqual,
        Y = _.IX2VanillaPlugins,
        Q = Y.isPluginType,
        q = Y.createPluginInstance,
        $ = Y.getPluginDuration,
        Z = navigator.userAgent,
        J = Z.match(/iPad/i) || Z.match(/iPhone/),
        tt = 12;

    function et(t, e) {
        var n = t.rawData,
            r = function () {
                at({
                    store: e,
                    rawData: n,
                    allowEvents: !0
                }), nt()
            };
        t.defer ? setTimeout(r, 0) : r()
    }

    function nt() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function rt(t, e) {
        var n = t.actionTypeId,
            r = t.actionListId,
            i = t.actionItemId,
            o = t.eventId,
            a = t.allowEvents,
            u = t.immediate,
            c = t.testManual,
            s = t.verbose,
            f = void 0 === s || s,
            l = t.rawData;
        if (r && i && l && u) {
            var d = l.actionLists[r];
            d && (l = k({
                actionList: d,
                actionItemId: i,
                rawData: l
            }))
        }
        if (at({
                store: e,
                rawData: l,
                allowEvents: a,
                testManual: c
            }), r && n === E.ActionTypeConsts.GENERAL_START_ACTION || T(n)) {
            Et({
                store: e,
                actionListId: r
            }), vt({
                store: e,
                actionListId: r,
                eventId: o
            });
            var p = _t({
                store: e,
                eventId: o,
                actionListId: r,
                immediate: u,
                verbose: f
            });
            f && p && e.dispatch((0, g.actionListPlaybackChanged)({
                actionListId: r,
                isPlaying: !u
            }))
        }
    }

    function it(t, e) {
        var n = t.actionListId;
        n ? Et({
            store: e,
            actionListId: n
        }) : ht({
            store: e
        }), ut(e)
    }

    function ot(t, e) {
        ut(e), j({
            store: e,
            elementApi: y
        })
    }

    function at(t) {
        var e, n = t.store,
            i = t.rawData,
            o = t.allowEvents,
            a = t.testManual,
            u = n.getState().ixSession;
        i && n.dispatch((0, g.rawDataImported)(i)), u.active || (n.dispatch((0, g.sessionInitialized)({
            hasBoundaryNodes: Boolean(document.querySelector(w)),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), o && (function (t) {
            var e = t.getState().ixData.eventTypeMap;
            ft(t), (0, v.default)(e, function (e, n) {
                var i = m.default[n];
                i ? function (t) {
                    var e = t.logic,
                        n = t.store,
                        i = t.events;
                    ! function (t) {
                        if (J) {
                            var e = {},
                                n = "";
                            for (var r in t) {
                                var i = t[r],
                                    o = i.eventTypeId,
                                    a = i.target,
                                    u = y.getQuerySelector(a);
                                e[u] || o !== E.EventTypeConsts.MOUSE_CLICK && o !== E.EventTypeConsts.MOUSE_SECOND_CLICK || (e[u] = !0, n += u + "{cursor: pointer;touch-action: manipulation;}")
                            }
                            if (n) {
                                var c = document.createElement("style");
                                c.textContent = n, document.body.appendChild(c)
                            }
                        }
                    }(i);
                    var o = e.types,
                        a = e.handler,
                        u = n.getState().ixData,
                        l = u.actionLists,
                        d = lt(i, pt);
                    if ((0, f.default)(d)) {
                        (0, v.default)(d, function (t, e) {
                            var o = i[e],
                                a = o.action,
                                f = o.id,
                                d = o.mediaQueries,
                                p = void 0 === d ? u.mediaQueryKeys : d,
                                v = a.config.actionListId;
                            if (z(p, u.mediaQueryKeys) || n.dispatch((0, g.mediaQueriesDefined)()), a.actionTypeId === E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                                var h = Array.isArray(o.config) ? o.config : [o.config];
                                h.forEach(function (e) {
                                    var i = e.continuousParameterGroupId,
                                        o = (0, s.default)(l, "".concat(v, ".continuousParameterGroups"), []),
                                        a = (0, c.default)(o, function (t) {
                                            var e = t.id;
                                            return e === i
                                        }),
                                        u = (e.smoothing || 0) / 100,
                                        d = (e.restingState || 0) / 100;
                                    a && t.forEach(function (t, i) {
                                        var o = f + O + i;
                                        ! function (t) {
                                            var e = t.store,
                                                n = t.eventStateKey,
                                                i = t.eventTarget,
                                                o = t.eventId,
                                                a = t.eventConfig,
                                                u = t.actionListId,
                                                c = t.parameterGroup,
                                                f = t.smoothing,
                                                l = t.restingValue,
                                                d = e.getState(),
                                                p = d.ixData,
                                                v = d.ixSession,
                                                h = p.events[o],
                                                E = h.eventTypeId,
                                                _ = {},
                                                g = {},
                                                m = [],
                                                I = c.continuousActionGroups,
                                                T = c.id;
                                            V(E, a) && (T = U(n, T));
                                            var b = v.hasBoundaryNodes && i ? y.getClosestElement(i, w) : null;
                                            I.forEach(function (t) {
                                                var e = t.keyframe,
                                                    n = t.actionItems;
                                                n.forEach(function (t) {
                                                    var n = t.actionTypeId,
                                                        o = t.config.target;
                                                    if (o) {
                                                        var a = o.boundaryMode ? b : null,
                                                            u = H(o) + O + n;
                                                        if (g[u] = function () {
                                                                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                                                    n = arguments.length > 1 ? arguments[1] : void 0,
                                                                    i = arguments.length > 2 ? arguments[2] : void 0,
                                                                    o = (0, r.default)(e);
                                                                return o.some(function (e, r) {
                                                                    return e.keyframe === n && (t = r, !0)
                                                                }), null == t && (t = o.length, o.push({
                                                                    keyframe: n,
                                                                    actionItems: []
                                                                })), o[t].actionItems.push(i), o
                                                            }(g[u], e, t), !_[u]) {
                                                            _[u] = !0;
                                                            var c = t.config;
                                                            x({
                                                                config: c,
                                                                event: h,
                                                                eventTarget: i,
                                                                elementRoot: a,
                                                                elementApi: y
                                                            }).forEach(function (t) {
                                                                m.push({
                                                                    element: t,
                                                                    key: u
                                                                })
                                                            })
                                                        }
                                                    }
                                                })
                                            }), m.forEach(function (t) {
                                                var n = t.element,
                                                    r = t.key,
                                                    i = g[r],
                                                    a = (0, s.default)(i, "[0].actionItems[0]", {}),
                                                    c = a.actionTypeId,
                                                    d = Q(c) ? q(c)(n, a) : null,
                                                    p = L({
                                                        element: n,
                                                        actionItem: a,
                                                        elementApi: y
                                                    }, d);
                                                gt({
                                                    store: e,
                                                    element: n,
                                                    eventId: o,
                                                    actionListId: u,
                                                    actionItem: a,
                                                    destination: p,
                                                    continuous: !0,
                                                    parameterId: T,
                                                    actionGroups: i,
                                                    smoothing: f,
                                                    restingValue: l,
                                                    pluginInstance: d
                                                })
                                            })
                                        }({
                                            store: n,
                                            eventStateKey: o,
                                            eventTarget: t,
                                            eventId: f,
                                            eventConfig: e,
                                            actionListId: v,
                                            parameterGroup: a,
                                            smoothing: u,
                                            restingValue: d
                                        })
                                    })
                                })
                            }(a.actionTypeId === E.ActionTypeConsts.GENERAL_START_ACTION || T(a.actionTypeId)) && vt({
                                store: n,
                                actionListId: v,
                                eventId: f
                            })
                        });
                        var p = function (t) {
                                var e = n.getState(),
                                    r = e.ixSession;
                                dt(d, function (e, o, c) {
                                    var s = i[o],
                                        f = r.eventState[c],
                                        l = s.action,
                                        d = s.mediaQueries,
                                        p = void 0 === d ? u.mediaQueryKeys : d;
                                    if (B(p, r.mediaQueryKey)) {
                                        var v = function () {
                                            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                i = a({
                                                    store: n,
                                                    element: e,
                                                    event: s,
                                                    eventConfig: r,
                                                    nativeEvent: t,
                                                    eventStateKey: c
                                                }, f);
                                            K(i, f) || n.dispatch((0, g.eventStateChanged)(c, i))
                                        };
                                        if (l.actionTypeId === E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                                            var h = Array.isArray(s.config) ? s.config : [s.config];
                                            h.forEach(v)
                                        } else v()
                                    }
                                })
                            },
                            _ = (0, h.default)(p, tt),
                            m = function (t) {
                                var e = t.target,
                                    r = void 0 === e ? document : e,
                                    i = t.types,
                                    o = t.throttle;
                                i.split(" ").filter(Boolean).forEach(function (t) {
                                    var e = o ? _ : p;
                                    r.addEventListener(t, e), n.dispatch((0, g.eventListenerAdded)(r, [t, e]))
                                })
                            };
                        Array.isArray(o) ? o.forEach(m) : "string" == typeof o && m(e)
                    }
                }({
                    logic: i,
                    store: t,
                    events: e
                }) : console.warn("IX2 event type not configured: ".concat(n))
            }), t.getState().ixSession.eventListeners.length && function (t) {
                var e = function () {
                    ft(t)
                };
                st.forEach(function (n) {
                    window.addEventListener(n, e), t.dispatch((0, g.eventListenerAdded)(window, [n, e]))
                }), e()
            }(t)
        }(n), -1 === (e = document.documentElement).className.indexOf(R) && (e.className += " ".concat(R)), n.getState().ixSession.hasDefinedMediaQueries && function (t) {
            P({
                store: t,
                select: function (t) {
                    return t.ixSession.mediaQueryKey
                },
                onChange: function () {
                    ut(t), j({
                        store: t,
                        elementApi: y
                    }), at({
                        store: t,
                        allowEvents: !0
                    }), nt()
                }
            })
        }(n)), n.dispatch((0, g.sessionStarted)()), function (t, e) {
            ! function n(r) {
                var i = t.getState(),
                    o = i.ixSession,
                    a = i.ixParameters;
                o.active && (t.dispatch((0, g.animationFrameChanged)(r, a)), e ? function (t, e) {
                    var n = P({
                        store: t,
                        select: function (t) {
                            return t.ixSession.tick
                        },
                        onChange: function (t) {
                            e(t), n()
                        }
                    })
                }(t, n) : requestAnimationFrame(n))
            }(window.performance.now())
        }(n, a))
    }

    function ut(t) {
        var e = t.getState().ixSession;
        e.active && (e.eventListeners.forEach(ct), t.dispatch((0, g.sessionStopped)()))
    }

    function ct(t) {
        var e = t.target,
            n = t.listenerParams;
        e.removeEventListener.apply(e, n)
    }
    var st = ["resize", "orientationchange"];

    function ft(t) {
        var e = t.getState(),
            n = e.ixSession,
            r = e.ixData,
            i = window.innerWidth;
        if (i !== n.viewportWidth) {
            var o = r.mediaQueries;
            t.dispatch((0, g.viewportWidthChanged)({
                width: i,
                mediaQueries: o
            }))
        }
    }
    var lt = function (t, e) {
            return (0, l.default)((0, p.default)(t, e), d.default)
        },
        dt = function (t, e) {
            (0, v.default)(t, function (t, n) {
                t.forEach(function (t, r) {
                    e(t, n, n + O + r)
                })
            })
        },
        pt = function (t) {
            var e = {
                target: t.target,
                targets: t.targets
            };
            return x({
                config: e,
                elementApi: y
            })
        };

    function vt(t) {
        var e = t.store,
            n = t.actionListId,
            r = t.eventId,
            i = e.getState(),
            o = i.ixData,
            a = i.ixSession,
            u = o.actionLists,
            c = o.events[r],
            f = u[n];
        if (f && f.useFirstGroupAsInitialState) {
            var l = (0, s.default)(f, "actionItemGroups[0].actionItems", []),
                d = (0, s.default)(c, "mediaQueries", o.mediaQueryKeys);
            if (!B(d, a.mediaQueryKey)) return;
            l.forEach(function (t) {
                var i, o = t.config,
                    a = t.actionTypeId,
                    u = !0 === (null == o ? void 0 : null === (i = o.target) || void 0 === i ? void 0 : i.useEventTarget) ? {
                        target: c.target,
                        targets: c.targets
                    } : o,
                    s = x({
                        config: u,
                        event: c,
                        elementApi: y
                    }),
                    f = Q(a);
                s.forEach(function (i) {
                    var o = f ? q(a)(i, t) : null;
                    gt({
                        destination: L({
                            element: i,
                            actionItem: t,
                            elementApi: y
                        }, o),
                        immediate: !0,
                        store: e,
                        element: i,
                        eventId: r,
                        actionItem: t,
                        actionListId: n,
                        pluginInstance: o
                    })
                })
            })
        }
    }

    function ht(t) {
        var e = t.store,
            n = e.getState().ixInstances;
        (0, v.default)(n, function (t) {
            if (!t.continuous) {
                var n = t.actionListId,
                    r = t.verbose;
                yt(t, e), r && e.dispatch((0, g.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function Et(t) {
        var e = t.store,
            n = t.eventId,
            r = t.eventTarget,
            i = t.eventStateKey,
            o = t.actionListId,
            a = e.getState(),
            u = a.ixInstances,
            c = a.ixSession.hasBoundaryNodes && r ? y.getClosestElement(r, w) : null;
        (0, v.default)(u, function (t) {
            var r = (0, s.default)(t, "actionItem.config.target.boundaryMode"),
                a = !i || t.eventStateKey === i;
            if (t.actionListId === o && t.eventId === n && a) {
                if (c && r && !y.elementContains(c, t.element)) return;
                yt(t, e), t.verbose && e.dispatch((0, g.actionListPlaybackChanged)({
                    actionListId: o,
                    isPlaying: !1
                }))
            }
        })
    }

    function _t(t) {
        var e, n = t.store,
            r = t.eventId,
            i = t.eventTarget,
            o = t.eventStateKey,
            a = t.actionListId,
            u = t.groupIndex,
            c = void 0 === u ? 0 : u,
            f = t.immediate,
            l = t.verbose,
            d = n.getState(),
            p = d.ixData,
            v = d.ixSession,
            h = p.events[r] || {},
            E = h.mediaQueries,
            _ = void 0 === E ? p.mediaQueryKeys : E,
            g = (0, s.default)(p, "actionLists.".concat(a), {}),
            m = g.actionItemGroups,
            I = g.useFirstGroupAsInitialState;
        if (!m || !m.length) return !1;
        c >= m.length && (0, s.default)(h, "config.loop") && (c = 0), 0 === c && I && c++;
        var b = (0 === c || 1 === c && I) && T(null === (e = h.action) || void 0 === e ? void 0 : e.actionTypeId) ? h.config.delay : void 0,
            O = (0, s.default)(m, [c, "actionItems"], []);
        if (!O.length) return !1;
        if (!B(_, v.mediaQueryKey)) return !1;
        var A = v.hasBoundaryNodes && i ? y.getClosestElement(i, w) : null,
            S = F(O),
            R = !1;
        return O.forEach(function (t, e) {
            var u = t.config,
                s = t.actionTypeId,
                d = Q(s),
                p = u.target;
            if (p) {
                var v = p.boundaryMode ? A : null;
                x({
                    config: u,
                    event: h,
                    eventTarget: i,
                    elementRoot: v,
                    elementApi: y
                }).forEach(function (u, p) {
                    var v = d ? q(s)(u, t) : null,
                        h = d ? $(s)(u, t) : null;
                    R = !0;
                    var E = S === e && 0 === p,
                        _ = X({
                            element: u,
                            actionItem: t
                        }),
                        g = L({
                            element: u,
                            actionItem: t,
                            elementApi: y
                        }, v);
                    gt({
                        store: n,
                        element: u,
                        actionItem: t,
                        eventId: r,
                        eventTarget: i,
                        eventStateKey: o,
                        actionListId: a,
                        groupIndex: c,
                        isCarrier: E,
                        computedStyle: _,
                        destination: g,
                        immediate: f,
                        verbose: l,
                        pluginInstance: v,
                        pluginDuration: h,
                        instanceDelay: b
                    })
                })
            }
        }), R
    }

    function gt(t) {
        var e, n, r = t.store,
            i = t.computedStyle,
            o = (0, u.default)(t, ["store", "computedStyle"]),
            c = o.element,
            s = o.actionItem,
            f = o.immediate,
            l = o.pluginInstance,
            d = o.continuous,
            p = o.restingValue,
            v = o.eventId,
            h = !d,
            _ = D(),
            m = r.getState(),
            I = m.ixElements,
            T = m.ixSession,
            b = m.ixData,
            O = C(I, c),
            w = (I[O] || {}).refState,
            A = y.getRefType(c),
            S = T.reducedMotion && E.ReducedMotionTypes[s.actionTypeId];
        if (S && d) switch (null === (e = b.events[v]) || void 0 === e ? void 0 : e.eventTypeId) {
            case E.EventTypeConsts.MOUSE_MOVE:
            case E.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                n = p;
                break;
            default:
                n = .5
        }
        var R = G(c, w, i, s, y, l);
        r.dispatch((0, g.instanceAdded)((0, a.default)({
            instanceId: _,
            elementId: O,
            origin: R,
            refType: A,
            skipMotion: S,
            skipToValue: n
        }, o))), mt(document.body, "ix2-animation-started", _), f ? function (t, e) {
            var n = t.getState().ixParameters;
            t.dispatch((0, g.instanceStarted)(e, 0)), t.dispatch((0, g.animationFrameChanged)(performance.now(), n)), It(t.getState().ixInstances[e], t)
        }(r, _) : (P({
            store: r,
            select: function (t) {
                return t.ixInstances[_]
            },
            onChange: It
        }), h && r.dispatch((0, g.instanceStarted)(_, T.tick)))
    }

    function yt(t, e) {
        mt(document.body, "ix2-animation-stopping", {
            instanceId: t.id,
            state: e.getState()
        });
        var n = t.elementId,
            r = t.actionItem,
            i = e.getState().ixElements[n] || {},
            o = i.ref;
        i.refType === A && W(o, r, y), e.dispatch((0, g.instanceRemoved)(t.id))
    }

    function mt(t, e, n) {
        var r = document.createEvent("CustomEvent");
        r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r)
    }

    function It(t, e) {
        var n = t.active,
            r = t.continuous,
            i = t.complete,
            o = t.elementId,
            a = t.actionItem,
            u = t.actionTypeId,
            c = t.renderType,
            s = t.current,
            f = t.groupIndex,
            l = t.eventId,
            d = t.eventTarget,
            p = t.eventStateKey,
            v = t.actionListId,
            h = t.isCarrier,
            E = t.styleProp,
            _ = t.verbose,
            m = t.pluginInstance,
            I = e.getState(),
            T = I.ixData,
            b = I.ixSession,
            O = (T.events[l] || {}).mediaQueries,
            w = void 0 === O ? T.mediaQueryKeys : O;
        if (B(w, b.mediaQueryKey) && (r || n || i)) {
            if (s || c === S && i) {
                e.dispatch((0, g.elementStateChanged)(o, u, s, a));
                var R = e.getState().ixElements[o] || {},
                    N = R.ref,
                    x = R.refType,
                    C = R.refState,
                    L = C && C[u];
                switch (x) {
                    case A:
                        M(N, C, L, l, a, E, y, c, m)
                }
            }
            if (i) {
                if (h) {
                    var P = _t({
                        store: e,
                        eventId: l,
                        eventTarget: d,
                        eventStateKey: p,
                        actionListId: v,
                        groupIndex: f + 1,
                        verbose: _
                    });
                    _ && !P && e.dispatch((0, g.actionListPlaybackChanged)({
                        actionListId: v,
                        isPlaying: !1
                    }))
                }
                yt(t, e)
            }
        }
    }
}, function (t, e, n) {
    var r = n(124);
    t.exports = function (t, e, n) {
        "__proto__" == e && r ? r(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : t[e] = n
    }
}, function (t, e, n) {
    var r = n(11),
        i = function () {
            try {
                var t = r(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (t) {}
        }();
    t.exports = i
}, function (t, e, n) {
    var r = n(8),
        i = Object.create,
        o = function () {
            function t() {}
            return function (e) {
                if (!r(e)) return {};
                if (i) return i(e);
                t.prototype = e;
                var n = new t;
                return t.prototype = void 0, n
            }
        }();
    t.exports = o
}, function (t, e, n) {
    var r = n(323),
        i = n(324),
        o = r ? function (t) {
            return r.get(t)
        } : i;
    t.exports = o
}, function (t, e, n) {
    var r = n(325),
        i = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--;) {
            var a = n[o],
                u = a.func;
            if (null == u || u == t) return a.name
        }
        return e
    }
}, function (t, e, n) {
    n(129), n(131), n(132), n(133), n(134), n(135), n(137), n(332), n(333), n(334), t.exports = n(335)
}, function (t, e, n) {
    "use strict";
    var r = n(4);
    r.define("brand", t.exports = function (t) {
        var e, n = {},
            i = document,
            o = t("html"),
            a = t("body"),
            u = ".w-webflow-badge",
            c = window.location,
            s = /PhantomJS/i.test(navigator.userAgent),
            f = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

        function l() {
            var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
            t(e).attr("style", n ? "display: none !important;" : "")
        }

        function d() {
            var t = a.children(u),
                n = t.length && t.get(0) === e,
                i = r.env("editor");
            n ? i && t.remove() : (t.length && t.remove(), i || a.append(e))
        }
        return n.ready = function () {
            var n, r, a, u = o.attr("data-wf-status"),
                p = o.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0), u && !s && (e = e || (n = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), r = t("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
                marginRight: "8px",
                width: "16px"
            }), a = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow"), n.append(r, a), n[0]), d(), setTimeout(d, 500), t(i).off(f, l).on(f, l))
        }, n
    })
}, function (t, e, n) {
    "use strict";
    var r = window.$,
        i = n(68) && r.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = function () {
        var t = {
                VERSION: "1.6.0-Webflow"
            },
            e = {},
            n = Array.prototype,
            r = Object.prototype,
            o = Function.prototype,
            a = (n.push, n.slice),
            u = (n.concat, r.toString, r.hasOwnProperty),
            c = n.forEach,
            s = n.map,
            f = (n.reduce, n.reduceRight, n.filter),
            l = (n.every, n.some),
            d = n.indexOf,
            p = (n.lastIndexOf, Array.isArray, Object.keys),
            v = (o.bind, t.each = t.forEach = function (n, r, i) {
                if (null == n) return n;
                if (c && n.forEach === c) n.forEach(r, i);
                else if (n.length === +n.length) {
                    for (var o = 0, a = n.length; o < a; o++)
                        if (r.call(i, n[o], o, n) === e) return
                } else {
                    var u = t.keys(n);
                    for (o = 0, a = u.length; o < a; o++)
                        if (r.call(i, n[u[o]], u[o], n) === e) return
                }
                return n
            });
        t.map = t.collect = function (t, e, n) {
            var r = [];
            return null == t ? r : s && t.map === s ? t.map(e, n) : (v(t, function (t, i, o) {
                r.push(e.call(n, t, i, o))
            }), r)
        }, t.find = t.detect = function (t, e, n) {
            var r;
            return h(t, function (t, i, o) {
                if (e.call(n, t, i, o)) return r = t, !0
            }), r
        }, t.filter = t.select = function (t, e, n) {
            var r = [];
            return null == t ? r : f && t.filter === f ? t.filter(e, n) : (v(t, function (t, i, o) {
                e.call(n, t, i, o) && r.push(t)
            }), r)
        };
        var h = t.some = t.any = function (n, r, i) {
            r || (r = t.identity);
            var o = !1;
            return null == n ? o : l && n.some === l ? n.some(r, i) : (v(n, function (t, n, a) {
                if (o || (o = r.call(i, t, n, a))) return e
            }), !!o)
        };
        t.contains = t.include = function (t, e) {
            return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : h(t, function (t) {
                return t === e
            }))
        }, t.delay = function (t, e) {
            var n = a.call(arguments, 2);
            return setTimeout(function () {
                return t.apply(null, n)
            }, e)
        }, t.defer = function (e) {
            return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
        }, t.throttle = function (t) {
            var e, n, r;
            return function () {
                e || (e = !0, n = arguments, r = this, i.frame(function () {
                    e = !1, t.apply(r, n)
                }))
            }
        }, t.debounce = function (e, n, r) {
            var i, o, a, u, c, s = function s() {
                var f = t.now() - u;
                f < n ? i = setTimeout(s, n - f) : (i = null, r || (c = e.apply(a, o), a = o = null))
            };
            return function () {
                a = this, o = arguments, u = t.now();
                var f = r && !i;
                return i || (i = setTimeout(s, n)), f && (c = e.apply(a, o), a = o = null), c
            }
        }, t.defaults = function (e) {
            if (!t.isObject(e)) return e;
            for (var n = 1, r = arguments.length; n < r; n++) {
                var i = arguments[n];
                for (var o in i) void 0 === e[o] && (e[o] = i[o])
            }
            return e
        }, t.keys = function (e) {
            if (!t.isObject(e)) return [];
            if (p) return p(e);
            var n = [];
            for (var r in e) t.has(e, r) && n.push(r);
            return n
        }, t.has = function (t, e) {
            return u.call(t, e)
        }, t.isObject = function (t) {
            return t === Object(t)
        }, t.now = Date.now || function () {
            return (new Date).getTime()
        }, t.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var E = /(.)^/,
            _ = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            g = /\\|'|\r|\n|\u2028|\u2029/g,
            y = function (t) {
                return "\\" + _[t]
            };
        return t.template = function (e, n, r) {
            !n && r && (n = r), n = t.defaults({}, n, t.templateSettings);
            var i = RegExp([(n.escape || E).source, (n.interpolate || E).source, (n.evaluate || E).source].join("|") + "|$", "g"),
                o = 0,
                a = "__p+='";
            e.replace(i, function (t, n, r, i, u) {
                return a += e.slice(o, u).replace(g, y), o = u + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t
            }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                var u = new Function(n.variable || "obj", "_", a)
            } catch (t) {
                throw t.source = a, t
            }
            var c = function (e) {
                    return u.call(this, e, t)
                },
                s = n.variable || "obj";
            return c.source = "function(" + s + "){\n" + a + "}", c
        }, t
    }()
}, function (t, e, n) {
    "use strict";
    var r = n(4);
    r.define("edit", t.exports = function (t, e, n) {
        if (n = n || {}, (r.env("test") || r.env("frame")) && !n.fixture && ! function () {
                try {
                    return window.top.__Cypress__
                } catch (t) {
                    return !1
                }
            }()) return {
            exit: 1
        };
        var i, o = t(window),
            a = t(document.documentElement),
            u = document.location,
            c = "hashchange",
            s = n.load || function () {
                i = !0, window.WebflowEditor = !0, o.off(c, l),
                    function (t) {
                        var e = window.document.createElement("iframe");
                        e.src = "https://webflow.com/site/third-party-cookie-check.html", e.style.display = "none", e.sandbox = "allow-scripts allow-same-origin";
                        var n = function n(r) {
                            "WF_third_party_cookies_unsupported" === r.data ? (_(e, n), t(!1)) : "WF_third_party_cookies_supported" === r.data && (_(e, n), t(!0))
                        };
                        e.onerror = function () {
                            _(e, n), t(!1)
                        }, window.addEventListener("message", n, !1), window.document.body.appendChild(e)
                    }(function (e) {
                        t.ajax({
                            url: E("https://editor-api.webflow.com/api/editor/view"),
                            data: {
                                siteId: a.attr("data-wf-site")
                            },
                            xhrFields: {
                                withCredentials: !0
                            },
                            dataType: "json",
                            crossDomain: !0,
                            success: d(e)
                        })
                    })
            },
            f = !1;
        try {
            f = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
        } catch (t) {}

        function l() {
            i || /\?edit/.test(u.hash) && s()
        }

        function d(t) {
            return function (e) {
                e ? (e.thirdPartyCookiesSupported = t, p(h(e.bugReporterScriptPath), function () {
                    p(h(e.scriptPath), function () {
                        window.WebflowEditor(e)
                    })
                })) : console.error("Could not load editor data")
            }
        }

        function p(e, n) {
            t.ajax({
                type: "GET",
                url: e,
                dataType: "script",
                cache: !0
            }).then(n, v)
        }

        function v(t, e, n) {
            throw console.error("Could not load editor script: " + e), n
        }

        function h(t) {
            return t.indexOf("//") >= 0 ? t : E("https://editor-api.webflow.com" + t)
        }

        function E(t) {
            return t.replace(/([^:])\/\//g, "$1/")
        }

        function _(t, e) {
            window.removeEventListener("message", e, !1), t.remove()
        }
        return f ? s() : u.search ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) || /\?edit$/.test(u.href)) && s() : o.on(c, l).triggerHandler(c), {}
    })
}, function (t, e, n) {
    "use strict";
    n(4).define("focus-visible", t.exports = function () {
        function t(t) {
            var e = !0,
                n = !1,
                r = null,
                i = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };

            function o(t) {
                return !!(t && t !== document && "HTML" !== t.nodeName && "BODY" !== t.nodeName && "classList" in t && "contains" in t.classList)
            }

            function a(t) {
                t.getAttribute("data-wf-focus-visible") || t.setAttribute("data-wf-focus-visible", "true")
            }

            function u() {
                e = !1
            }

            function c() {
                document.addEventListener("mousemove", s), document.addEventListener("mousedown", s), document.addEventListener("mouseup", s), document.addEventListener("pointermove", s), document.addEventListener("pointerdown", s), document.addEventListener("pointerup", s), document.addEventListener("touchmove", s), document.addEventListener("touchstart", s), document.addEventListener("touchend", s)
            }

            function s(t) {
                t.target.nodeName && "html" === t.target.nodeName.toLowerCase() || (e = !1, document.removeEventListener("mousemove", s), document.removeEventListener("mousedown", s), document.removeEventListener("mouseup", s), document.removeEventListener("pointermove", s), document.removeEventListener("pointerdown", s), document.removeEventListener("pointerup", s), document.removeEventListener("touchmove", s), document.removeEventListener("touchstart", s), document.removeEventListener("touchend", s))
            }
            document.addEventListener("keydown", function (n) {
                n.metaKey || n.altKey || n.ctrlKey || (o(t.activeElement) && a(t.activeElement), e = !0)
            }, !0), document.addEventListener("mousedown", u, !0), document.addEventListener("pointerdown", u, !0), document.addEventListener("touchstart", u, !0), document.addEventListener("visibilitychange", function () {
                "hidden" === document.visibilityState && (n && (e = !0), c())
            }, !0), c(), t.addEventListener("focus", function (t) {
                var n, r, u;
                o(t.target) && (e || (n = t.target, r = n.type, "INPUT" === (u = n.tagName) && i[r] && !n.readOnly || "TEXTAREA" === u && !n.readOnly || n.isContentEditable)) && a(t.target)
            }, !0), t.addEventListener("blur", function (t) {
                var e;
                o(t.target) && t.target.hasAttribute("data-wf-focus-visible") && (n = !0, window.clearTimeout(r), r = window.setTimeout(function () {
                    n = !1
                }, 100), (e = t.target).getAttribute("data-wf-focus-visible") && e.removeAttribute("data-wf-focus-visible"))
            }, !0)
        }
        return {
            ready: function () {
                if ("undefined" != typeof document) try {
                    document.querySelector(":focus-visible")
                } catch (e) {
                    t(document)
                }
            }
        }
    })
}, function (t, e, n) {
    "use strict";
    n(4).define("focus-within", t.exports = function () {
        function t(t) {
            for (var e = [t], n = null; n = t.parentNode || t.host || t.defaultView;) e.push(n), t = n;
            return e
        }

        function e(t) {
            "function" != typeof t.getAttribute || t.getAttribute("data-wf-focus-within") || t.setAttribute("data-wf-focus-within", "true")
        }

        function n(t) {
            "function" == typeof t.getAttribute && t.getAttribute("data-wf-focus-within") && t.removeAttribute("data-wf-focus-within")
        }
        return {
            ready: function () {
                if ("undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within")) try {
                    document.querySelector(":focus-within")
                } catch (i) {
                    r = function (r) {
                        var i;
                        i || (window.requestAnimationFrame(function () {
                            i = !1, "blur" === r.type && Array.prototype.slice.call(t(r.target)).forEach(n), "focus" === r.type && Array.prototype.slice.call(t(r.target)).forEach(e)
                        }), i = !0)
                    }, document.addEventListener("focus", r, !0), document.addEventListener("blur", r, !0), e(document.body)
                }
                var r
            }
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(4);
    r.define("focus", t.exports = function () {
        var t = [],
            e = !1;

        function n(n) {
            e && (n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), t.unshift(n))
        }

        function i(n) {
            (function (t) {
                var e = t.target,
                    n = e.tagName;
                return /^a$/i.test(n) && null != e.href || /^(button|textarea)$/i.test(n) && !0 !== e.disabled || /^input$/i.test(n) && /^(button|reset|submit|radio|checkbox)$/i.test(e.type) && !e.disabled || !/^(button|input|textarea|select|a)$/i.test(n) && !Number.isNaN(Number.parseFloat(e.tabIndex)) || /^audio$/i.test(n) || /^video$/i.test(n) && !0 === e.controls
            })(n) && (e = !0, setTimeout(function () {
                for (e = !1, n.target.focus(); t.length > 0;) {
                    var r = t.pop();
                    r.target.dispatchEvent(new MouseEvent(r.type, r))
                }
            }, 0))
        }
        return {
            ready: function () {
                "undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && r.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", n, !0), document.addEventListener("click", n, !0))
            }
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(136);

    function i(t, e) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n)
    }
    var o = window.jQuery,
        a = {},
        u = {
            reset: function (t, e) {
                r.triggers.reset(t, e)
            },
            intro: function (t, e) {
                r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE")
            },
            outro: function (t, e) {
                r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE")
            }
        };
    a.triggers = {}, a.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    }, o.extend(a.triggers, u), t.exports = a
}, function (t, e, n) {
    "use strict";
    var r = window.jQuery,
        i = {},
        o = [],
        a = {
            reset: function (t, e) {
                e.__wf_intro = null
            },
            intro: function (t, e) {
                e.__wf_intro || (e.__wf_intro = !0, r(e).triggerHandler(i.types.INTRO))
            },
            outro: function (t, e) {
                e.__wf_intro && (e.__wf_intro = null, r(e).triggerHandler(i.types.OUTRO))
            }
        };
    i.triggers = {}, i.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    }, i.init = function () {
        for (var t = o.length, e = 0; e < t; e++) {
            var n = o[e];
            n[0](0, n[1])
        }
        o = [], r.extend(i.triggers, a)
    }, i.async = function () {
        for (var t in a) {
            var e = a[t];
            a.hasOwnProperty(t) && (i.triggers[t] = function (t, n) {
                o.push([e, n])
            })
        }
    }, i.async(), t.exports = i
}, function (t, e, n) {
    "use strict";
    var r = n(4),
        i = n(138);
    i.setEnv(r.env), r.define("ix2", t.exports = function () {
        return i
    })
}, function (t, e, n) {
    "use strict";
    var r = n(18),
        i = n(1);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setEnv = function (t) {
        t() && (0, u.observeRequests)(s)
    }, e.init = function (t) {
        f(), (0, u.startEngine)({
            store: s,
            rawData: t,
            allowEvents: !0
        })
    }, e.destroy = f, e.actions = e.store = void 0, n(139);
    var o = n(86),
        a = i(n(186)),
        u = n(122),
        c = r(n(64));
    e.actions = c;
    var s = (0, o.createStore)(a.default);

    function f() {
        (0, u.stopEngine)(s)
    }
    e.store = s
}, function (t, e, n) {
    var r = n(140);
    t.exports = r
}, function (t, e, n) {
    var r = n(141);
    t.exports = r
}, function (t, e, n) {
    n(142);
    var r = n(174);
    t.exports = r("Array", "includes")
}, function (t, e, n) {
    "use strict";
    var r = n(143),
        i = n(84).includes,
        o = n(169);
    r({
        target: "Array",
        proto: !0
    }, {
        includes: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), o("includes")
}, function (t, e, n) {
    var r = n(0),
        i = n(69).f,
        o = n(42),
        a = n(157),
        u = n(41),
        c = n(161),
        s = n(168);
    t.exports = function (t, e) {
        var n, f, l, d, p, v = t.target,
            h = t.global,
            E = t.stat;
        if (n = h ? r : E ? r[v] || u(v, {}) : (r[v] || {}).prototype)
            for (f in e) {
                if (d = e[f], l = t.noTargetGet ? (p = i(n, f)) && p.value : n[f], !s(h ? f : v + (E ? "." : "#") + f, t.forced) && void 0 !== l) {
                    if (typeof d == typeof l) continue;
                    c(d, l)
                }(t.sham || l && l.sham) && o(d, "sham", !0), a(n, f, d, t)
            }
    }
}, function (t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        o = i && !r.call({
            1: 2
        }, 1);
    e.f = o ? function (t) {
        var e = i(this, t);
        return !!e && e.enumerable
    } : r
}, function (t, e, n) {
    var r = n(0),
        i = n(5),
        o = n(19),
        a = n(146),
        u = r.Object,
        c = i("".split);
    t.exports = o(function () {
        return !u("z").propertyIsEnumerable(0)
    }) ? function (t) {
        return "String" == a(t) ? c(t, "") : u(t)
    } : u
}, function (t, e, n) {
    var r = n(5),
        i = r({}.toString),
        o = r("".slice);
    t.exports = function (t) {
        return o(i(t), 8, -1)
    }
}, function (t, e, n) {
    var r = n(0),
        i = n(39),
        o = n(20),
        a = n(73),
        u = n(151),
        c = n(154),
        s = n(76),
        f = r.TypeError,
        l = s("toPrimitive");
    t.exports = function (t, e) {
        if (!o(t) || a(t)) return t;
        var n, r = u(t, l);
        if (r) {
            if (void 0 === e && (e = "default"), n = i(r, t, e), !o(n) || a(n)) return n;
            throw f("Can't convert object to primitive value")
        }
        return void 0 === e && (e = "number"), c(t, e)
    }
}, function (t, e, n) {
    var r = n(5);
    t.exports = r({}.isPrototypeOf)
}, function (t, e, n) {
    var r, i, o = n(0),
        a = n(150),
        u = o.process,
        c = o.Deno,
        s = u && u.versions || c && c.version,
        f = s && s.v8;
    f && (i = (r = f.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !i && a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (i = +r[1]), t.exports = i
}, function (t, e, n) {
    var r = n(27);
    t.exports = r("navigator", "userAgent") || ""
}, function (t, e, n) {
    var r = n(152);
    t.exports = function (t, e) {
        var n = t[e];
        return null == n ? void 0 : r(n)
    }
}, function (t, e, n) {
    var r = n(0),
        i = n(7),
        o = n(153),
        a = r.TypeError;
    t.exports = function (t) {
        if (i(t)) return t;
        throw a(o(t) + " is not a function")
    }
}, function (t, e, n) {
    var r = n(0).String;
    t.exports = function (t) {
        try {
            return r(t)
        } catch (t) {
            return "Object"
        }
    }
}, function (t, e, n) {
    var r = n(0),
        i = n(39),
        o = n(7),
        a = n(20),
        u = r.TypeError;
    t.exports = function (t, e) {
        var n, r;
        if ("string" === e && o(n = t.toString) && !a(r = i(n, t))) return r;
        if (o(n = t.valueOf) && !a(r = i(n, t))) return r;
        if ("string" !== e && o(n = t.toString) && !a(r = i(n, t))) return r;
        throw u("Can't convert object to primitive value")
    }
}, function (t, e) {
    t.exports = !1
}, function (t, e, n) {
    var r = n(0),
        i = n(71),
        o = r.Object;
    t.exports = function (t) {
        return o(i(t))
    }
}, function (t, e, n) {
    var r = n(0),
        i = n(7),
        o = n(9),
        a = n(42),
        u = n(41),
        c = n(81),
        s = n(158),
        f = n(160).CONFIGURABLE,
        l = s.get,
        d = s.enforce,
        p = String(String).split("String");
    (t.exports = function (t, e, n, c) {
        var s, l = !!c && !!c.unsafe,
            v = !!c && !!c.enumerable,
            h = !!c && !!c.noTargetGet,
            E = c && void 0 !== c.name ? c.name : e;
        i(n) && ("Symbol(" === String(E).slice(0, 7) && (E = "[" + String(E).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!o(n, "name") || f && n.name !== E) && a(n, "name", E), (s = d(n)).source || (s.source = p.join("string" == typeof E ? E : ""))), t !== r ? (l ? !h && t[e] && (v = !0) : delete t[e], v ? t[e] = n : a(t, e, n)) : v ? t[e] = n : u(e, n)
    })(Function.prototype, "toString", function () {
        return i(this) && l(this).source || c(this)
    })
}, function (t, e, n) {
    var r, i, o, a = n(159),
        u = n(0),
        c = n(5),
        s = n(20),
        f = n(42),
        l = n(9),
        d = n(40),
        p = n(82),
        v = n(43),
        h = u.TypeError,
        E = u.WeakMap;
    if (a || d.state) {
        var _ = d.state || (d.state = new E),
            g = c(_.get),
            y = c(_.has),
            m = c(_.set);
        r = function (t, e) {
            if (y(_, t)) throw new h("Object already initialized");
            return e.facade = t, m(_, t, e), e
        }, i = function (t) {
            return g(_, t) || {}
        }, o = function (t) {
            return y(_, t)
        }
    } else {
        var I = p("state");
        v[I] = !0, r = function (t, e) {
            if (l(t, I)) throw new h("Object already initialized");
            return e.facade = t, f(t, I, e), e
        }, i = function (t) {
            return l(t, I) ? t[I] : {}
        }, o = function (t) {
            return l(t, I)
        }
    }
    t.exports = {
        set: r,
        get: i,
        has: o,
        enforce: function (t) {
            return o(t) ? i(t) : r(t, {})
        },
        getterFor: function (t) {
            return function (e) {
                var n;
                if (!s(e) || (n = i(e)).type !== t) throw h("Incompatible receiver, " + t + " required");
                return n
            }
        }
    }
}, function (t, e, n) {
    var r = n(0),
        i = n(7),
        o = n(81),
        a = r.WeakMap;
    t.exports = i(a) && /native code/.test(o(a))
}, function (t, e, n) {
    var r = n(13),
        i = n(9),
        o = Function.prototype,
        a = r && Object.getOwnPropertyDescriptor,
        u = i(o, "name"),
        c = u && "something" === function () {}.name,
        s = u && (!r || r && a(o, "name").configurable);
    t.exports = {
        EXISTS: u,
        PROPER: c,
        CONFIGURABLE: s
    }
}, function (t, e, n) {
    var r = n(9),
        i = n(162),
        o = n(69),
        a = n(28);
    t.exports = function (t, e) {
        for (var n = i(e), u = a.f, c = o.f, s = 0; s < n.length; s++) {
            var f = n[s];
            r(t, f) || u(t, f, c(e, f))
        }
    }
}, function (t, e, n) {
    var r = n(27),
        i = n(5),
        o = n(163),
        a = n(167),
        u = n(29),
        c = i([].concat);
    t.exports = r("Reflect", "ownKeys") || function (t) {
        var e = o.f(u(t)),
            n = a.f;
        return n ? c(e, n(t)) : e
    }
}, function (t, e, n) {
    var r = n(83),
        i = n(44).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function (t) {
        return r(t, i)
    }
}, function (t, e, n) {
    var r = n(85),
        i = Math.max,
        o = Math.min;
    t.exports = function (t, e) {
        var n = r(t);
        return n < 0 ? i(n + e, 0) : o(n, e)
    }
}, function (t, e, n) {
    var r = n(166);
    t.exports = function (t) {
        return r(t.length)
    }
}, function (t, e, n) {
    var r = n(85),
        i = Math.min;
    t.exports = function (t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0
    }
}, function (t, e) {
    e.f = Object.getOwnPropertySymbols
}, function (t, e, n) {
    var r = n(19),
        i = n(7),
        o = /#|\.prototype\./,
        a = function (t, e) {
            var n = c[u(t)];
            return n == f || n != s && (i(e) ? r(e) : !!e)
        },
        u = a.normalize = function (t) {
            return String(t).replace(o, ".").toLowerCase()
        },
        c = a.data = {},
        s = a.NATIVE = "N",
        f = a.POLYFILL = "P";
    t.exports = a
}, function (t, e, n) {
    var r = n(76),
        i = n(170),
        o = n(28),
        a = r("unscopables"),
        u = Array.prototype;
    null == u[a] && o.f(u, a, {
        configurable: !0,
        value: i(null)
    }), t.exports = function (t) {
        u[a][t] = !0
    }
}, function (t, e, n) {
    var r, i = n(29),
        o = n(171),
        a = n(44),
        u = n(43),
        c = n(173),
        s = n(80),
        f = n(82),
        l = f("IE_PROTO"),
        d = function () {},
        p = function (t) {
            return "<script>" + t + "<\/script>"
        },
        v = function (t) {
            t.write(p("")), t.close();
            var e = t.parentWindow.Object;
            return t = null, e
        },
        h = function () {
            try {
                r = new ActiveXObject("htmlfile")
            } catch (t) {}
            var t, e;
            h = "undefined" != typeof document ? document.domain && r ? v(r) : ((e = s("iframe")).style.display = "none", c.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(p("document.F=Object")), t.close(), t.F) : v(r);
            for (var n = a.length; n--;) delete h.prototype[a[n]];
            return h()
        };
    u[l] = !0, t.exports = Object.create || function (t, e) {
        var n;
        return null !== t ? (d.prototype = i(t), n = new d, d.prototype = null, n[l] = t) : n = h(), void 0 === e ? n : o(n, e)
    }
}, function (t, e, n) {
    var r = n(13),
        i = n(28),
        o = n(29),
        a = n(26),
        u = n(172);
    t.exports = r ? Object.defineProperties : function (t, e) {
        o(t);
        for (var n, r = a(e), c = u(e), s = c.length, f = 0; s > f;) i.f(t, n = c[f++], r[n]);
        return t
    }
}, function (t, e, n) {
    var r = n(83),
        i = n(44);
    t.exports = Object.keys || function (t) {
        return r(t, i)
    }
}, function (t, e, n) {
    var r = n(27);
    t.exports = r("document", "documentElement")
}, function (t, e, n) {
    var r = n(0),
        i = n(5);
    t.exports = function (t, e) {
        return i(r[t].prototype[e])
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(88),
        i = n(178),
        o = n(179),
        a = "[object Null]",
        u = "[object Undefined]",
        c = r.default ? r.default.toStringTag : void 0;
    e.default = function (t) {
        return null == t ? void 0 === t ? u : a : c && c in Object(t) ? Object(i.default)(t) : Object(o.default)(t)
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(177),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r.default || i || Function("return this")();
    e.default = o
}, function (t, e, n) {
    "use strict";
    n.r(e),
        function (t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.default = n
        }.call(this, n(25))
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(88),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        u = r.default ? r.default.toStringTag : void 0;
    e.default = function (t) {
        var e = o.call(t, u),
            n = t[u];
        try {
            t[u] = void 0;
            var r = !0
        } catch (t) {}
        var i = a.call(t);
        return r && (e ? t[u] = n : delete t[u]), i
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = Object.prototype.toString;
    e.default = function (t) {
        return r.call(t)
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(181),
        i = Object(r.default)(Object.getPrototypeOf, Object);
    e.default = i
}, function (t, e, n) {
    "use strict";
    n.r(e), e.default = function (t, e) {
        return function (n) {
            return t(e(n))
        }
    }
}, function (t, e, n) {
    "use strict";
    n.r(e), e.default = function (t) {
        return null != t && "object" == typeof t
    }
}, function (t, e, n) {
    "use strict";
    n.r(e),
        function (t, r) {
            var i, o = n(185);
            i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
            var a = Object(o.default)(i);
            e.default = a
        }.call(this, n(25), n(184)(t))
}, function (t, e) {
    t.exports = function (t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function () {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function () {
                    return e.i
                }
            }), Object.defineProperty(e, "exports", {
                enumerable: !0
            }), e.webpackPolyfill = 1
        }
        return e
    }
}, function (t, e, n) {
    "use strict";

    function r(t) {
        var e, n = t.Symbol;
        return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
    }
    n.r(e), n.d(e, "default", function () {
        return r
    })
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var r = n(86),
        i = n(187),
        o = n(193),
        a = n(194),
        u = n(14),
        c = n(280),
        s = n(281),
        f = u.IX2ElementsReducer.ixElements,
        l = (0, r.combineReducers)({
            ixData: i.ixData,
            ixRequest: o.ixRequest,
            ixSession: a.ixSession,
            ixElements: f,
            ixInstances: c.ixInstances,
            ixParameters: s.ixParameters
        });
    e.default = l
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixData = void 0;
    var r = n(3).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
    e.ixData = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case r:
                return e.payload.ixData || Object.freeze({});
            default:
                return t
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.QuickEffectDirectionConsts = e.QuickEffectIds = e.EventLimitAffectedElements = e.EventContinuousMouseAxes = e.EventBasedOn = e.EventAppliesTo = e.EventTypeConsts = void 0;
    e.EventTypeConsts = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL"
    };
    e.EventAppliesTo = {
        ELEMENT: "ELEMENT",
        CLASS: "CLASS",
        PAGE: "PAGE"
    };
    e.EventBasedOn = {
        ELEMENT: "ELEMENT",
        VIEWPORT: "VIEWPORT"
    };
    e.EventContinuousMouseAxes = {
        X_AXIS: "X_AXIS",
        Y_AXIS: "Y_AXIS"
    };
    e.EventLimitAffectedElements = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
    };
    e.QuickEffectIds = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
    };
    e.QuickEffectDirectionConsts = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.InteractionTypeConsts = void 0;
    e.InteractionTypeConsts = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION"
    }
}, function (t, e, n) {
    "use strict";
    var r, i = n(1)(n(21));
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ReducedMotionTypes = void 0;
    var o = n(93).ActionTypeConsts,
        a = o.TRANSFORM_MOVE,
        u = o.TRANSFORM_SCALE,
        c = o.TRANSFORM_ROTATE,
        s = o.TRANSFORM_SKEW,
        f = o.STYLE_SIZE,
        l = o.STYLE_FILTER,
        d = (r = {}, (0, i.default)(r, a, !0), (0, i.default)(r, u, !0), (0, i.default)(r, c, !0), (0, i.default)(r, s, !0), (0, i.default)(r, f, !0), (0, i.default)(r, l, !0), r);
    e.ReducedMotionTypes = d
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0;
    e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
    e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
    e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
    e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
    e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
    e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
    e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
    e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
    e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
    e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
    e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
    e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
    e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
    e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
    e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
    e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
    e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
    e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
    e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED"
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e.HTML_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0;
    e.IX2_ID_DELIMITER = "|";
    e.WF_PAGE = "data-wf-page";
    e.W_MOD_JS = "w-mod-js";
    e.W_MOD_IX = "w-mod-ix";
    e.BOUNDARY_SELECTOR = ".w-dyn-item";
    e.CONFIG_X_VALUE = "xValue";
    e.CONFIG_Y_VALUE = "yValue";
    e.CONFIG_Z_VALUE = "zValue";
    e.CONFIG_VALUE = "value";
    e.CONFIG_X_UNIT = "xUnit";
    e.CONFIG_Y_UNIT = "yUnit";
    e.CONFIG_Z_UNIT = "zUnit";
    e.CONFIG_UNIT = "unit";
    e.TRANSFORM = "transform";
    e.TRANSLATE_X = "translateX";
    e.TRANSLATE_Y = "translateY";
    e.TRANSLATE_Z = "translateZ";
    e.TRANSLATE_3D = "translate3d";
    e.SCALE_X = "scaleX";
    e.SCALE_Y = "scaleY";
    e.SCALE_Z = "scaleZ";
    e.SCALE_3D = "scale3d";
    e.ROTATE_X = "rotateX";
    e.ROTATE_Y = "rotateY";
    e.ROTATE_Z = "rotateZ";
    e.SKEW = "skew";
    e.SKEW_X = "skewX";
    e.SKEW_Y = "skewY";
    e.OPACITY = "opacity";
    e.FILTER = "filter";
    e.WIDTH = "width";
    e.HEIGHT = "height";
    e.BACKGROUND_COLOR = "backgroundColor";
    e.BACKGROUND = "background";
    e.BORDER_COLOR = "borderColor";
    e.COLOR = "color";
    e.DISPLAY = "display";
    e.FLEX = "flex";
    e.WILL_CHANGE = "willChange";
    e.AUTO = "AUTO";
    e.COMMA_DELIMITER = ",";
    e.COLON_DELIMITER = ":";
    e.BAR_DELIMITER = "|";
    e.CHILDREN = "CHILDREN";
    e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
    e.SIBLINGS = "SIBLINGS";
    e.PARENT = "PARENT";
    e.PRESERVE_3D = "preserve-3d";
    e.HTML_ELEMENT = "HTML_ELEMENT";
    e.PLAIN_OBJECT = "PLAIN_OBJECT";
    e.ABSTRACT_NODE = "ABSTRACT_NODE";
    e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
    e.RENDER_GENERAL = "RENDER_GENERAL";
    e.RENDER_STYLE = "RENDER_STYLE";
    e.RENDER_PLUGIN = "RENDER_PLUGIN"
}, function (t, e, n) {
    "use strict";
    var r, i = n(1)(n(21)),
        o = n(1);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixRequest = void 0;
    var a = o(n(30)),
        u = n(3),
        c = n(22),
        s = u.IX2EngineActionTypes,
        f = s.IX2_PREVIEW_REQUESTED,
        l = s.IX2_PLAYBACK_REQUESTED,
        d = s.IX2_STOP_REQUESTED,
        p = s.IX2_CLEAR_REQUESTED,
        v = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        h = Object.create(null, (r = {}, (0, i.default)(r, f, {
            value: "preview"
        }), (0, i.default)(r, l, {
            value: "playback"
        }), (0, i.default)(r, d, {
            value: "stop"
        }), (0, i.default)(r, p, {
            value: "clear"
        }), r));
    e.ixRequest = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
            e = arguments.length > 1 ? arguments[1] : void 0;
        if (e.type in h) {
            var n = [h[e.type]];
            return (0, c.setIn)(t, [n], (0, a.default)({}, e.payload))
        }
        return t
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixSession = void 0;
    var r = n(3),
        i = n(22),
        o = r.IX2EngineActionTypes,
        a = o.IX2_SESSION_INITIALIZED,
        u = o.IX2_SESSION_STARTED,
        c = o.IX2_TEST_FRAME_RENDERED,
        s = o.IX2_SESSION_STOPPED,
        f = o.IX2_EVENT_LISTENER_ADDED,
        l = o.IX2_EVENT_STATE_CHANGED,
        d = o.IX2_ANIMATION_FRAME_CHANGED,
        p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        v = o.IX2_VIEWPORT_WIDTH_CHANGED,
        h = o.IX2_MEDIA_QUERIES_DEFINED,
        E = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        };
    e.ixSession = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case a:
                var n = e.payload,
                    r = n.hasBoundaryNodes,
                    o = n.reducedMotion;
                return (0, i.merge)(t, {
                    hasBoundaryNodes: r,
                    reducedMotion: o
                });
            case u:
                return (0, i.set)(t, "active", !0);
            case c:
                var _ = e.payload.step,
                    g = void 0 === _ ? 20 : _;
                return (0, i.set)(t, "tick", t.tick + g);
            case s:
                return E;
            case d:
                var y = e.payload.now;
                return (0, i.set)(t, "tick", y);
            case f:
                var m = (0, i.addLast)(t.eventListeners, e.payload);
                return (0, i.set)(t, "eventListeners", m);
            case l:
                var I = e.payload,
                    T = I.stateKey,
                    b = I.newState;
                return (0, i.setIn)(t, ["eventState", T], b);
            case p:
                var O = e.payload,
                    w = O.actionListId,
                    A = O.isPlaying;
                return (0, i.setIn)(t, ["playbackState", w], A);
            case v:
                for (var S = e.payload, R = S.width, N = S.mediaQueries, x = N.length, C = null, L = 0; L < x; L++) {
                    var P = N[L],
                        D = P.key,
                        M = P.min,
                        j = P.max;
                    if (R >= M && R <= j) {
                        C = D;
                        break
                    }
                }
                return (0, i.merge)(t, {
                    viewportWidth: R,
                    mediaQueryKey: C
                });
            case h:
                return (0, i.set)(t, "hasDefinedMediaQueries", !0);
            default:
                return t
        }
    }
}, function (t, e, n) {
    var r = n(196),
        i = n(248),
        o = n(110);
    t.exports = function (t) {
        var e = i(t);
        return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function (n) {
            return n === t || r(n, t, e)
        }
    }
}, function (t, e, n) {
    var r = n(96),
        i = n(100),
        o = 1,
        a = 2;
    t.exports = function (t, e, n, u) {
        var c = n.length,
            s = c,
            f = !u;
        if (null == t) return !s;
        for (t = Object(t); c--;) {
            var l = n[c];
            if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1
        }
        for (; ++c < s;) {
            var d = (l = n[c])[0],
                p = t[d],
                v = l[1];
            if (f && l[2]) {
                if (void 0 === p && !(d in t)) return !1
            } else {
                var h = new r;
                if (u) var E = u(p, v, d, t, e, h);
                if (!(void 0 === E ? i(v, p, o | a, u, h) : E)) return !1
            }
        }
        return !0
    }
}, function (t, e) {
    t.exports = function () {
        this.__data__ = [], this.size = 0
    }
}, function (t, e, n) {
    var r = n(32),
        i = Array.prototype.splice;
    t.exports = function (t) {
        var e = this.__data__,
            n = r(e, t);
        return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0))
    }
}, function (t, e, n) {
    var r = n(32);
    t.exports = function (t) {
        var e = this.__data__,
            n = r(e, t);
        return n < 0 ? void 0 : e[n][1]
    }
}, function (t, e, n) {
    var r = n(32);
    t.exports = function (t) {
        return r(this.__data__, t) > -1
    }
}, function (t, e, n) {
    var r = n(32);
    t.exports = function (t, e) {
        var n = this.__data__,
            i = r(n, t);
        return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
    }
}, function (t, e, n) {
    var r = n(31);
    t.exports = function () {
        this.__data__ = new r, this.size = 0
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = this.__data__,
            n = e.delete(t);
        return this.size = e.size, n
    }
}, function (t, e) {
    t.exports = function (t) {
        return this.__data__.get(t)
    }
}, function (t, e) {
    t.exports = function (t) {
        return this.__data__.has(t)
    }
}, function (t, e, n) {
    var r = n(31),
        i = n(49),
        o = n(50),
        a = 200;
    t.exports = function (t, e) {
        var n = this.__data__;
        if (n instanceof r) {
            var u = n.__data__;
            if (!i || u.length < a - 1) return u.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new o(u)
        }
        return n.set(t, e), this.size = n.size, this
    }
}, function (t, e, n) {
    var r = n(97),
        i = n(210),
        o = n(8),
        a = n(99),
        u = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        s = Object.prototype,
        f = c.toString,
        l = s.hasOwnProperty,
        d = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function (t) {
        return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t))
    }
}, function (t, e, n) {
    var r = n(23),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        u = r ? r.toStringTag : void 0;
    t.exports = function (t) {
        var e = o.call(t, u),
            n = t[u];
        try {
            t[u] = void 0;
            var r = !0
        } catch (t) {}
        var i = a.call(t);
        return r && (e ? t[u] = n : delete t[u]), i
    }
}, function (t, e) {
    var n = Object.prototype.toString;
    t.exports = function (t) {
        return n.call(t)
    }
}, function (t, e, n) {
    var r, i = n(211),
        o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    t.exports = function (t) {
        return !!o && o in t
    }
}, function (t, e, n) {
    var r = n(6)["__core-js_shared__"];
    t.exports = r
}, function (t, e) {
    t.exports = function (t, e) {
        return null == t ? void 0 : t[e]
    }
}, function (t, e, n) {
    var r = n(214),
        i = n(31),
        o = n(49);
    t.exports = function () {
        this.size = 0, this.__data__ = {
            hash: new r,
            map: new(o || i),
            string: new r
        }
    }
}, function (t, e, n) {
    var r = n(215),
        i = n(216),
        o = n(217),
        a = n(218),
        u = n(219);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e, n) {
    var r = n(33);
    t.exports = function () {
        this.__data__ = r ? r(null) : {}, this.size = 0
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
}, function (t, e, n) {
    var r = n(33),
        i = "__lodash_hash_undefined__",
        o = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        var e = this.__data__;
        if (r) {
            var n = e[t];
            return n === i ? void 0 : n
        }
        return o.call(e, t) ? e[t] : void 0
    }
}, function (t, e, n) {
    var r = n(33),
        i = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        var e = this.__data__;
        return r ? void 0 !== e[t] : i.call(e, t)
    }
}, function (t, e, n) {
    var r = n(33),
        i = "__lodash_hash_undefined__";
    t.exports = function (t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this
    }
}, function (t, e, n) {
    var r = n(34);
    t.exports = function (t) {
        var e = r(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
}, function (t, e, n) {
    var r = n(34);
    t.exports = function (t) {
        return r(this, t).get(t)
    }
}, function (t, e, n) {
    var r = n(34);
    t.exports = function (t) {
        return r(this, t).has(t)
    }
}, function (t, e, n) {
    var r = n(34);
    t.exports = function (t, e) {
        var n = r(this, t),
            i = n.size;
        return n.set(t, e), this.size += n.size == i ? 0 : 1, this
    }
}, function (t, e, n) {
    var r = n(96),
        i = n(101),
        o = n(231),
        a = n(235),
        u = n(58),
        c = n(2),
        s = n(52),
        f = n(54),
        l = 1,
        d = "[object Arguments]",
        p = "[object Array]",
        v = "[object Object]",
        h = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n, E, _, g) {
        var y = c(t),
            m = c(e),
            I = y ? p : u(t),
            T = m ? p : u(e),
            b = (I = I == d ? v : I) == v,
            O = (T = T == d ? v : T) == v,
            w = I == T;
        if (w && s(t)) {
            if (!s(e)) return !1;
            y = !0, b = !1
        }
        if (w && !b) return g || (g = new r), y || f(t) ? i(t, e, n, E, _, g) : o(t, e, I, n, E, _, g);
        if (!(n & l)) {
            var A = b && h.call(t, "__wrapped__"),
                S = O && h.call(e, "__wrapped__");
            if (A || S) {
                var R = A ? t.value() : t,
                    N = S ? e.value() : e;
                return g || (g = new r), _(R, N, n, E, g)
            }
        }
        return !!w && (g || (g = new r), a(t, e, n, E, _, g))
    }
}, function (t, e, n) {
    var r = n(50),
        i = n(227),
        o = n(228);

    function a(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.__data__ = new r; ++e < n;) this.add(t[e])
    }
    a.prototype.add = a.prototype.push = i, a.prototype.has = o, t.exports = a
}, function (t, e) {
    var n = "__lodash_hash_undefined__";
    t.exports = function (t) {
        return this.__data__.set(t, n), this
    }
}, function (t, e) {
    t.exports = function (t) {
        return this.__data__.has(t)
    }
}, function (t, e) {
    t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
            if (e(t[n], n, t)) return !0;
        return !1
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return t.has(e)
    }
}, function (t, e, n) {
    var r = n(23),
        i = n(232),
        o = n(48),
        a = n(101),
        u = n(233),
        c = n(234),
        s = 1,
        f = 2,
        l = "[object Boolean]",
        d = "[object Date]",
        p = "[object Error]",
        v = "[object Map]",
        h = "[object Number]",
        E = "[object RegExp]",
        _ = "[object Set]",
        g = "[object String]",
        y = "[object Symbol]",
        m = "[object ArrayBuffer]",
        I = "[object DataView]",
        T = r ? r.prototype : void 0,
        b = T ? T.valueOf : void 0;
    t.exports = function (t, e, n, r, T, O, w) {
        switch (n) {
            case I:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case m:
                return !(t.byteLength != e.byteLength || !O(new i(t), new i(e)));
            case l:
            case d:
            case h:
                return o(+t, +e);
            case p:
                return t.name == e.name && t.message == e.message;
            case E:
            case g:
                return t == e + "";
            case v:
                var A = u;
            case _:
                var S = r & s;
                if (A || (A = c), t.size != e.size && !S) return !1;
                var R = w.get(t);
                if (R) return R == e;
                r |= f, w.set(t, e);
                var N = a(A(t), A(e), r, T, O, w);
                return w.delete(t), N;
            case y:
                if (b) return b.call(t) == b.call(e)
        }
        return !1
    }
}, function (t, e, n) {
    var r = n(6).Uint8Array;
    t.exports = r
}, function (t, e) {
    t.exports = function (t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function (t, r) {
            n[++e] = [r, t]
        }), n
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function (t) {
            n[++e] = t
        }), n
    }
}, function (t, e, n) {
    var r = n(236),
        i = 1,
        o = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n, a, u, c) {
        var s = n & i,
            f = r(t),
            l = f.length;
        if (l != r(e).length && !s) return !1;
        for (var d = l; d--;) {
            var p = f[d];
            if (!(s ? p in e : o.call(e, p))) return !1
        }
        var v = c.get(t),
            h = c.get(e);
        if (v && h) return v == e && h == t;
        var E = !0;
        c.set(t, e), c.set(e, t);
        for (var _ = s; ++d < l;) {
            var g = t[p = f[d]],
                y = e[p];
            if (a) var m = s ? a(y, g, p, e, t, c) : a(g, y, p, t, e, c);
            if (!(void 0 === m ? g === y || u(g, y, n, a, c) : m)) {
                E = !1;
                break
            }
            _ || (_ = "constructor" == p)
        }
        if (E && !_) {
            var I = t.constructor,
                T = e.constructor;
            I != T && "constructor" in t && "constructor" in e && !("function" == typeof I && I instanceof I && "function" == typeof T && T instanceof T) && (E = !1)
        }
        return c.delete(t), c.delete(e), E
    }
}, function (t, e, n) {
    var r = n(102),
        i = n(103),
        o = n(35);
    t.exports = function (t) {
        return r(t, o, i)
    }
}, function (t, e) {
    t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
            var a = t[n];
            e(a, n, t) && (o[i++] = a)
        }
        return o
    }
}, function (t, e) {
    t.exports = function (t, e) {
        for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
        return r
    }
}, function (t, e, n) {
    var r = n(15),
        i = n(12),
        o = "[object Arguments]";
    t.exports = function (t) {
        return i(t) && r(t) == o
    }
}, function (t, e) {
    t.exports = function () {
        return !1
    }
}, function (t, e, n) {
    var r = n(15),
        i = n(55),
        o = n(12),
        a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function (t) {
        return o(t) && i(t.length) && !!a[r(t)]
    }
}, function (t, e) {
    t.exports = function (t) {
        return function (e) {
            return t(e)
        }
    }
}, function (t, e, n) {
    (function (t) {
        var r = n(98),
            i = e && !e.nodeType && e,
            o = i && "object" == typeof t && t && !t.nodeType && t,
            a = o && o.exports === i && r.process,
            u = function () {
                try {
                    var t = o && o.require && o.require("util").types;
                    return t || a && a.binding && a.binding("util")
                } catch (t) {}
            }();
        t.exports = u
    }).call(this, n(106)(t))
}, function (t, e, n) {
    var r = n(107)(Object.keys, Object);
    t.exports = r
}, function (t, e, n) {
    var r = n(11)(n(6), "DataView");
    t.exports = r
}, function (t, e, n) {
    var r = n(11)(n(6), "Promise");
    t.exports = r
}, function (t, e, n) {
    var r = n(11)(n(6), "Set");
    t.exports = r
}, function (t, e, n) {
    var r = n(109),
        i = n(35);
    t.exports = function (t) {
        for (var e = i(t), n = e.length; n--;) {
            var o = e[n],
                a = t[o];
            e[n] = [o, a, r(a)]
        }
        return e
    }
}, function (t, e, n) {
    var r = n(100),
        i = n(59),
        o = n(255),
        a = n(61),
        u = n(109),
        c = n(110),
        s = n(24),
        f = 1,
        l = 2;
    t.exports = function (t, e) {
        return a(t) && u(e) ? c(s(t), e) : function (n) {
            var a = i(n, t);
            return void 0 === a && a === e ? o(n, t) : r(e, a, f | l)
        }
    }
}, function (t, e, n) {
    var r = n(251),
        i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        a = r(function (t) {
            var e = [];
            return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function (t, n, r, i) {
                e.push(r ? i.replace(o, "$1") : n || t)
            }), e
        });
    t.exports = a
}, function (t, e, n) {
    var r = n(252),
        i = 500;
    t.exports = function (t) {
        var e = r(t, function (t) {
                return n.size === i && n.clear(), t
            }),
            n = e.cache;
        return e
    }
}, function (t, e, n) {
    var r = n(50),
        i = "Expected a function";

    function o(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
        var n = function () {
            var r = arguments,
                i = e ? e.apply(this, r) : r[0],
                o = n.cache;
            if (o.has(i)) return o.get(i);
            var a = t.apply(this, r);
            return n.cache = o.set(i, a) || o, a
        };
        return n.cache = new(o.Cache || r), n
    }
    o.Cache = r, t.exports = o
}, function (t, e, n) {
    var r = n(254);
    t.exports = function (t) {
        return null == t ? "" : r(t)
    }
}, function (t, e, n) {
    var r = n(23),
        i = n(111),
        o = n(2),
        a = n(38),
        u = 1 / 0,
        c = r ? r.prototype : void 0,
        s = c ? c.toString : void 0;
    t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (o(e)) return i(e, t) + "";
        if (a(e)) return s ? s.call(e) : "";
        var n = e + "";
        return "0" == n && 1 / e == -u ? "-0" : n
    }
}, function (t, e, n) {
    var r = n(256),
        i = n(257);
    t.exports = function (t, e) {
        return null != t && i(t, e, r)
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return null != t && e in Object(t)
    }
}, function (t, e, n) {
    var r = n(37),
        i = n(36),
        o = n(2),
        a = n(53),
        u = n(55),
        c = n(24);
    t.exports = function (t, e, n) {
        for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f;) {
            var d = c(e[s]);
            if (!(l = null != t && n(t, d))) break;
            t = t[d]
        }
        return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t))
    }
}, function (t, e, n) {
    var r = n(112),
        i = n(259),
        o = n(61),
        a = n(24);
    t.exports = function (t) {
        return o(t) ? r(a(t)) : i(t)
    }
}, function (t, e, n) {
    var r = n(60);
    t.exports = function (t) {
        return function (e) {
            return r(e, t)
        }
    }
}, function (t, e, n) {
    var r = n(113),
        i = n(10),
        o = n(114),
        a = Math.max;
    t.exports = function (t, e, n) {
        var u = null == t ? 0 : t.length;
        if (!u) return -1;
        var c = null == n ? 0 : o(n);
        return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c)
    }
}, function (t, e, n) {
    var r = n(63),
        i = 1 / 0,
        o = 1.7976931348623157e308;
    t.exports = function (t) {
        return t ? (t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0 : 0 === t ? t : 0
    }
}, function (t, e, n) {
    var r = n(263),
        i = /^\s+/;
    t.exports = function (t) {
        return t ? t.slice(0, r(t) + 1).replace(i, "") : t
    }
}, function (t, e) {
    var n = /\s/;
    t.exports = function (t) {
        for (var e = t.length; e-- && n.test(t.charAt(e)););
        return e
    }
}, function (t, e) {
    t.exports = function (t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }
}, function (t, e) {
    t.exports = function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createElementState = I, e.mergeActionState = T, e.ixElements = void 0;
    var r = n(22),
        i = n(3),
        o = i.IX2EngineConstants,
        a = (o.HTML_ELEMENT, o.PLAIN_OBJECT),
        u = (o.ABSTRACT_NODE, o.CONFIG_X_VALUE),
        c = o.CONFIG_Y_VALUE,
        s = o.CONFIG_Z_VALUE,
        f = o.CONFIG_VALUE,
        l = o.CONFIG_X_UNIT,
        d = o.CONFIG_Y_UNIT,
        p = o.CONFIG_Z_UNIT,
        v = o.CONFIG_UNIT,
        h = i.IX2EngineActionTypes,
        E = h.IX2_SESSION_STOPPED,
        _ = h.IX2_INSTANCE_ADDED,
        g = h.IX2_ELEMENT_STATE_CHANGED,
        y = {},
        m = "refState";

    function I(t, e, n, i, o) {
        var u = n === a ? (0, r.getIn)(o, ["config", "target", "objectId"]) : null;
        return (0, r.mergeIn)(t, [i], {
            id: i,
            ref: e,
            refId: u,
            refType: n
        })
    }

    function T(t, e, n, i, o) {
        var a = function (t) {
                var e = t.config;
                return b.reduce(function (t, n) {
                    var r = n[0],
                        i = n[1],
                        o = e[r],
                        a = e[i];
                    return null != o && null != a && (t[i] = a), t
                }, {})
            }(o),
            u = [e, m, n];
        return (0, r.mergeIn)(t, u, i, a)
    }
    e.ixElements = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (e.type) {
            case E:
                return y;
            case _:
                var n = e.payload,
                    i = n.elementId,
                    o = n.element,
                    a = n.origin,
                    u = n.actionItem,
                    c = n.refType,
                    s = u.actionTypeId,
                    f = t;
                return (0, r.getIn)(f, [i, o]) !== o && (f = I(f, o, c, i, u)), T(f, i, s, a, u);
            case g:
                var l = e.payload;
                return T(t, l.elementId, l.actionTypeId, l.current, l.actionItem);
            default:
                return t
        }
    };
    var b = [
        [u, l],
        [c, d],
        [s, p],
        [f, v]
    ]
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginDuration = e.getPluginConfig = void 0;
    e.getPluginConfig = function (t) {
        return t.value
    };
    e.getPluginDuration = function (t, e) {
        if ("auto" !== e.config.duration) return null;
        var n = parseFloat(t.getAttribute("data-duration"));
        return n > 0 ? 1e3 * n : 1e3 * parseFloat(t.getAttribute("data-default-duration"))
    };
    e.getPluginOrigin = function (t) {
        return t || {
            value: 0
        }
    };
    e.getPluginDestination = function (t) {
        return {
            value: t.value
        }
    };
    e.createPluginInstance = function (t) {
        var e = window.Webflow.require("lottie").createInstance(t);
        return e.stop(), e.setSubframe(!0), e
    };
    e.renderPlugin = function (t, e, n) {
        if (t) {
            var r = e[n.actionTypeId].value / 100;
            t.goToFrame(t.frames * r)
        }
    };
    e.clearPlugin = function (t) {
        window.Webflow.require("lottie").createInstance(t).stop()
    }
}, function (t, e, n) {
    "use strict";
    var r, i, o, a = n(1),
        u = a(n(17)),
        c = a(n(21)),
        s = n(1);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getInstanceId = function () {
        return "i" + vt++
    }, e.getElementId = function (t, e) {
        for (var n in t) {
            var r = t[n];
            if (r && r.ref === e) return r.id
        }
        return "e" + ht++
    }, e.reifyState = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.events,
            n = t.actionLists,
            r = t.site,
            i = (0, l.default)(e, function (t, e) {
                var n = e.eventTypeId;
                return t[n] || (t[n] = {}), t[n][e.id] = e, t
            }, {}),
            o = r && r.mediaQueries,
            a = [];
        o ? a = o.map(function (t) {
            return t.key
        }) : (o = [], console.warn("IX2 missing mediaQueries in site data"));
        return {
            ixData: {
                events: e,
                actionLists: n,
                eventTypeMap: i,
                mediaQueries: o,
                mediaQueryKeys: a
            }
        }
    }, e.observeStore = function (t) {
        var e = t.store,
            n = t.select,
            r = t.onChange,
            i = t.comparator,
            o = void 0 === i ? Et : i,
            a = e.getState,
            u = (0, e.subscribe)(function () {
                var t = n(a());
                if (null == t) return void u();
                o(t, c) || r(c = t, e)
            }),
            c = n(a());
        return u
    }, e.getAffectedElements = gt, e.getComputedStyle = function (t) {
        var e = t.element,
            n = t.actionItem;
        if (!g.IS_BROWSER_ENV) return {};
        switch (n.actionTypeId) {
            case it:
            case ot:
            case at:
            case ut:
            case ct:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }, e.getInstanceOrigin = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
            o = r.actionTypeId,
            a = r.config;
        if ((0, _.isPluginType)(o)) return (0, _.getPluginOrigin)(o)(e[o]);
        switch (o) {
            case Z:
            case J:
            case tt:
            case et:
                return e[o] || bt[o];
            case rt:
                return mt(e[o], r.config.filters);
            case nt:
                return {
                    value: (0, f.default)(parseFloat(i(t, x)), 1)
                };
            case it:
                var u, c, s = i(t, L),
                    l = i(t, P);
                return u = a.widthUnit === B ? yt.test(s) ? parseFloat(s) : parseFloat(n.width) : (0, f.default)(parseFloat(s), parseFloat(n.width)), c = a.heightUnit === B ? yt.test(l) ? parseFloat(l) : parseFloat(n.height) : (0, f.default)(parseFloat(l), parseFloat(n.height)), {
                    widthValue: u,
                    heightValue: c
                };
            case ot:
            case at:
            case ut:
                return function (t) {
                    var e = t.element,
                        n = t.actionTypeId,
                        r = t.computedStyle,
                        i = t.getStyle,
                        o = lt[n],
                        a = i(e, o),
                        u = St.test(a) ? a : r[o],
                        c = function (t, e) {
                            var n = t.exec(e);
                            return n ? n[1] : ""
                        }(Rt, u).split(W);
                    return {
                        rValue: (0, f.default)(parseInt(c[0], 10), 255),
                        gValue: (0, f.default)(parseInt(c[1], 10), 255),
                        bValue: (0, f.default)(parseInt(c[2], 10), 255),
                        aValue: (0, f.default)(parseFloat(c[3]), 1)
                    }
                }({
                    element: t,
                    actionTypeId: o,
                    computedStyle: n,
                    getStyle: i
                });
            case ct:
                return {
                    value: (0, f.default)(i(t, V), n.display)
                };
            case st:
                return e[o] || {
                    value: 0
                };
            default:
                return
        }
    }, e.getDestinationValues = function (t) {
        var e = t.element,
            n = t.actionItem,
            r = t.elementApi,
            i = n.actionTypeId;
        if ((0, _.isPluginType)(i)) return (0, _.getPluginDestination)(i)(n.config);
        switch (i) {
            case Z:
            case J:
            case tt:
            case et:
                var o = n.config,
                    a = o.xValue,
                    u = o.yValue,
                    c = o.zValue;
                return {
                    xValue: a, yValue: u, zValue: c
                };
            case it:
                var s = r.getStyle,
                    f = r.setStyle,
                    l = r.getProperty,
                    d = n.config,
                    p = d.widthUnit,
                    v = d.heightUnit,
                    h = n.config,
                    E = h.widthValue,
                    y = h.heightValue;
                if (!g.IS_BROWSER_ENV) return {
                    widthValue: E,
                    heightValue: y
                };
                if (p === B) {
                    var m = s(e, L);
                    f(e, L, ""), E = l(e, "offsetWidth"), f(e, L, m)
                }
                if (v === B) {
                    var I = s(e, P);
                    f(e, P, ""), y = l(e, "offsetHeight"), f(e, P, I)
                }
                return {
                    widthValue: E, heightValue: y
                };
            case ot:
            case at:
            case ut:
                var T = n.config,
                    b = T.rValue,
                    O = T.gValue,
                    w = T.bValue,
                    A = T.aValue;
                return {
                    rValue: b, gValue: O, bValue: w, aValue: A
                };
            case rt:
                return n.config.filters.reduce(It, {});
            default:
                var S = n.config.value;
                return {
                    value: S
                }
        }
    }, e.getRenderType = Tt, e.getStyleProp = function (t, e) {
        return t === Q ? e.replace("STYLE_", "").toLowerCase() : null
    }, e.renderHTMLElement = function (t, e, n, r, i, o, a, u, c) {
        switch (u) {
            case K:
                return function (t, e, n, r, i) {
                    var o = At.map(function (t) {
                            var n = bt[t],
                                r = e[t] || {},
                                i = r.xValue,
                                o = void 0 === i ? n.xValue : i,
                                a = r.yValue,
                                u = void 0 === a ? n.yValue : a,
                                c = r.zValue,
                                s = void 0 === c ? n.zValue : c,
                                f = r.xUnit,
                                l = void 0 === f ? "" : f,
                                d = r.yUnit,
                                p = void 0 === d ? "" : d,
                                v = r.zUnit,
                                h = void 0 === v ? "" : v;
                            switch (t) {
                                case Z:
                                    return "".concat(T, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                                case J:
                                    return "".concat(b, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                                case tt:
                                    return "".concat(O, "(").concat(o).concat(l, ") ").concat(w, "(").concat(u).concat(p, ") ").concat(A, "(").concat(s).concat(h, ")");
                                case et:
                                    return "".concat(S, "(").concat(o).concat(l, ", ").concat(u).concat(p, ")");
                                default:
                                    return ""
                            }
                        }).join(" "),
                        a = i.setStyle;
                    Nt(t, g.TRANSFORM_PREFIXED, i), a(t, g.TRANSFORM_PREFIXED, o), u = r, c = n, s = u.actionTypeId, f = c.xValue, l = c.yValue, d = c.zValue, (s === Z && void 0 !== d || s === J && void 0 !== d || s === tt && (void 0 !== f || void 0 !== l)) && a(t, g.TRANSFORM_STYLE_PREFIXED, R);
                    var u, c, s, f, l, d
                }(t, e, n, i, a);
            case Q:
                return function (t, e, n, r, i, o) {
                    var a = o.setStyle,
                        u = r.actionTypeId,
                        c = r.config;
                    switch (u) {
                        case it:
                            var s = r.config,
                                f = s.widthUnit,
                                d = void 0 === f ? "" : f,
                                p = s.heightUnit,
                                v = void 0 === p ? "" : p,
                                h = n.widthValue,
                                E = n.heightValue;
                            void 0 !== h && (d === B && (d = "px"), Nt(t, L, o), a(t, L, h + d)), void 0 !== E && (v === B && (v = "px"), Nt(t, P, o), a(t, P, E + v));
                            break;
                        case rt:
                            ! function (t, e, n, r) {
                                var i = (0, l.default)(e, function (t, e, r) {
                                        return "".concat(t, " ").concat(r, "(").concat(e).concat(wt(r, n), ")")
                                    }, ""),
                                    o = r.setStyle;
                                Nt(t, C, r), o(t, C, i)
                            }(t, n, c, o);
                            break;
                        case ot:
                        case at:
                        case ut:
                            var _ = lt[u],
                                g = Math.round(n.rValue),
                                y = Math.round(n.gValue),
                                m = Math.round(n.bValue),
                                I = n.aValue;
                            Nt(t, _, o), a(t, _, I >= 1 ? "rgb(".concat(g, ",").concat(y, ",").concat(m, ")") : "rgba(".concat(g, ",").concat(y, ",").concat(m, ",").concat(I, ")"));
                            break;
                        default:
                            var T = c.unit,
                                b = void 0 === T ? "" : T;
                            Nt(t, i, o), a(t, i, n.value + b)
                    }
                }(t, 0, n, i, o, a);
            case Y:
                return function (t, e, n) {
                    var r = n.setStyle;
                    switch (e.actionTypeId) {
                        case ct:
                            var i = e.config.value;
                            return void(i === N && g.IS_BROWSER_ENV ? r(t, V, g.FLEX_PREFIXED) : r(t, V, i))
                    }
                }(t, i, a);
            case q:
                var s = i.actionTypeId;
                if ((0, _.isPluginType)(s)) return (0, _.renderPlugin)(s)(c, e, i)
        }
    }, e.clearAllStyles = function (t) {
        var e = t.store,
            n = t.elementApi,
            r = e.getState().ixData,
            i = r.events,
            o = void 0 === i ? {} : i,
            a = r.actionLists,
            u = void 0 === a ? {} : a;
        Object.keys(o).forEach(function (t) {
            var e = o[t],
                r = e.action.config,
                i = r.actionListId,
                a = u[i];
            a && Ct({
                actionList: a,
                event: e,
                elementApi: n
            })
        }), Object.keys(u).forEach(function (t) {
            Ct({
                actionList: u[t],
                elementApi: n
            })
        })
    }, e.cleanupHTMLElement = function (t, e, n) {
        var r = n.setStyle,
            i = n.getStyle,
            o = e.actionTypeId;
        if (o === it) {
            var a = e.config;
            a.widthUnit === B && r(t, L, ""), a.heightUnit === B && r(t, P, "")
        }
        i(t, U) && Pt({
            effect: xt,
            actionTypeId: o,
            elementApi: n
        })(t)
    }, e.getMaxDurationItemIndex = Mt, e.getActionListProgress = function (t, e) {
        var n = t.actionItemGroups,
            r = t.useFirstGroupAsInitialState,
            i = e.actionItem,
            o = e.verboseTimeElapsed,
            a = void 0 === o ? 0 : o,
            u = 0,
            c = 0;
        return n.forEach(function (t, e) {
            if (!r || 0 !== e) {
                var n = t.actionItems,
                    o = n[Mt(n)],
                    s = o.config,
                    f = o.actionTypeId;
                i.id === o.id && (c = u + a);
                var l = Tt(f) === Y ? 0 : s.duration;
                u += s.delay + l
            }
        }), u > 0 ? (0, E.optimizeFloat)(c / u) : 0
    }, e.reduceListToGroup = function (t) {
        var e = t.actionList,
            n = t.actionItemId,
            r = t.rawData,
            i = e.actionItemGroups,
            o = e.continuousParameterGroups,
            a = [],
            u = function (t) {
                return a.push((0, p.mergeIn)(t, ["config"], {
                    delay: 0,
                    duration: 0
                })), t.id === n
            };
        return i && i.some(function (t) {
            return t.actionItems.some(u)
        }), o && o.some(function (t) {
            return t.continuousActionGroups.some(function (t) {
                return t.actionItems.some(u)
            })
        }), (0, p.setIn)(r, ["actionLists"], (0, c.default)({}, e.id, {
            id: e.id,
            actionItemGroups: [{
                actionItems: a
            }]
        }))
    }, e.shouldNamespaceEventParameter = function (t, e) {
        var n = e.basedOn;
        return t === v.EventTypeConsts.SCROLLING_IN_VIEW && (n === v.EventBasedOn.ELEMENT || null == n) || t === v.EventTypeConsts.MOUSE_MOVE && n === v.EventBasedOn.ELEMENT
    }, e.getNamespacedParameterId = function (t, e) {
        return t + H + e
    }, e.shouldAllowMediaQuery = function (t, e) {
        if (null == e) return !0;
        return -1 !== t.indexOf(e)
    }, e.mediaQueriesEqual = function (t, e) {
        return (0, h.default)(t && t.sort(), e && e.sort())
    }, e.stringifyTarget = function (t) {
        if ("string" == typeof t) return t;
        var e = t.id,
            n = void 0 === e ? "" : e,
            r = t.selector,
            i = void 0 === r ? "" : r,
            o = t.useEventTarget;
        return n + z + i + z + (void 0 === o ? "" : o)
    }, Object.defineProperty(e, "shallowEqual", {
        enumerable: !0,
        get: function () {
            return h.default
        }
    }), e.getItemConfigByKey = void 0;
    var f = s(n(270)),
        l = s(n(271)),
        d = s(n(277)),
        p = n(22),
        v = n(3),
        h = s(n(279)),
        E = n(117),
        _ = n(119),
        g = n(47),
        y = v.IX2EngineConstants,
        m = y.BACKGROUND,
        I = y.TRANSFORM,
        T = y.TRANSLATE_3D,
        b = y.SCALE_3D,
        O = y.ROTATE_X,
        w = y.ROTATE_Y,
        A = y.ROTATE_Z,
        S = y.SKEW,
        R = y.PRESERVE_3D,
        N = y.FLEX,
        x = y.OPACITY,
        C = y.FILTER,
        L = y.WIDTH,
        P = y.HEIGHT,
        D = y.BACKGROUND_COLOR,
        M = y.BORDER_COLOR,
        j = y.COLOR,
        F = y.CHILDREN,
        X = y.IMMEDIATE_CHILDREN,
        G = y.SIBLINGS,
        k = y.PARENT,
        V = y.DISPLAY,
        U = y.WILL_CHANGE,
        B = y.AUTO,
        W = y.COMMA_DELIMITER,
        H = y.COLON_DELIMITER,
        z = y.BAR_DELIMITER,
        K = y.RENDER_TRANSFORM,
        Y = y.RENDER_GENERAL,
        Q = y.RENDER_STYLE,
        q = y.RENDER_PLUGIN,
        $ = v.ActionTypeConsts,
        Z = $.TRANSFORM_MOVE,
        J = $.TRANSFORM_SCALE,
        tt = $.TRANSFORM_ROTATE,
        et = $.TRANSFORM_SKEW,
        nt = $.STYLE_OPACITY,
        rt = $.STYLE_FILTER,
        it = $.STYLE_SIZE,
        ot = $.STYLE_BACKGROUND_COLOR,
        at = $.STYLE_BORDER,
        ut = $.STYLE_TEXT_COLOR,
        ct = $.GENERAL_DISPLAY,
        st = "OBJECT_VALUE",
        ft = function (t) {
            return t.trim()
        },
        lt = Object.freeze((r = {}, (0, c.default)(r, ot, D), (0, c.default)(r, at, M), (0, c.default)(r, ut, j), r)),
        dt = Object.freeze((i = {}, (0, c.default)(i, g.TRANSFORM_PREFIXED, I), (0, c.default)(i, D, m), (0, c.default)(i, x, x), (0, c.default)(i, C, C), (0, c.default)(i, L, L), (0, c.default)(i, P, P), i)),
        pt = {},
        vt = 1;
    var ht = 1;
    var Et = function (t, e) {
        return t === e
    };

    function _t(t) {
        var e = (0, u.default)(t);
        return "string" === e ? {
            id: t
        } : null != t && "object" === e ? {
            id: t.id,
            objectId: t.objectId,
            selector: t.selector,
            selectorGuids: t.selectorGuids,
            appliesTo: t.appliesTo,
            useEventTarget: t.useEventTarget
        } : {}
    }

    function gt(t) {
        var e, n, r, i = t.config,
            o = t.event,
            a = t.eventTarget,
            u = t.elementRoot,
            c = t.elementApi;
        if (!c) throw new Error("IX2 missing elementApi");
        var s = i.targets;
        if (Array.isArray(s) && s.length > 0) return s.reduce(function (t, e) {
            return t.concat(gt({
                config: {
                    target: e
                },
                event: o,
                eventTarget: a,
                elementRoot: u,
                elementApi: c
            }))
        }, []);
        var f = c.getValidDocument,
            l = c.getQuerySelector,
            d = c.queryDocument,
            p = c.getChildElements,
            h = c.getSiblingElements,
            E = c.matchSelector,
            _ = c.elementContains,
            y = c.isSiblingNode,
            m = i.target;
        if (!m) return [];
        var I = _t(m),
            T = I.id,
            b = I.objectId,
            O = I.selector,
            w = I.selectorGuids,
            A = I.appliesTo,
            S = I.useEventTarget;
        if (b) return [pt[b] || (pt[b] = {})];
        if (A === v.EventAppliesTo.PAGE) {
            var R = f(T);
            return R ? [R] : []
        }
        var N, x, C, L = (null !== (e = null == o ? void 0 : null === (n = o.action) || void 0 === n ? void 0 : null === (r = n.config) || void 0 === r ? void 0 : r.affectedElements) && void 0 !== e ? e : {})[T || O] || {},
            P = Boolean(L.id || L.selector),
            D = o && l(_t(o.target));
        if (P ? (N = L.limitAffectedElements, x = D, C = l(L)) : x = C = l({
                id: T,
                selector: O,
                selectorGuids: w
            }), o && S) {
            var M = a && (C || !0 === S) ? [a] : d(D);
            if (C) {
                if (S === k) return d(C).filter(function (t) {
                    return M.some(function (e) {
                        return _(t, e)
                    })
                });
                if (S === F) return d(C).filter(function (t) {
                    return M.some(function (e) {
                        return _(e, t)
                    })
                });
                if (S === G) return d(C).filter(function (t) {
                    return M.some(function (e) {
                        return y(e, t)
                    })
                })
            }
            return M
        }
        return null == x || null == C ? [] : g.IS_BROWSER_ENV && u ? d(C).filter(function (t) {
            return u.contains(t)
        }) : N === F ? d(x, C) : N === X ? p(d(x)).filter(E(C)) : N === G ? h(d(x)).filter(E(C)) : d(C)
    }
    var yt = /px/,
        mt = function (t, e) {
            return e.reduce(function (t, e) {
                return null == t[e.type] && (t[e.type] = Ot[e.type]), t
            }, t || {})
        };
    var It = function (t, e) {
        return e && (t[e.type] = e.value || 0), t
    };

    function Tt(t) {
        return /^TRANSFORM_/.test(t) ? K : /^STYLE_/.test(t) ? Q : /^GENERAL_/.test(t) ? Y : /^PLUGIN_/.test(t) ? q : void 0
    }
    e.getItemConfigByKey = function (t, e, n) {
        if ((0, _.isPluginType)(t)) return (0, _.getPluginConfig)(t)(n, e);
        switch (t) {
            case rt:
                var r = (0, d.default)(n.filters, function (t) {
                    return t.type === e
                });
                return r ? r.value : 0;
            default:
                return n[e]
        }
    };
    var bt = (o = {}, (0, c.default)(o, Z, Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
        })), (0, c.default)(o, J, Object.freeze({
            xValue: 1,
            yValue: 1,
            zValue: 1
        })), (0, c.default)(o, tt, Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
        })), (0, c.default)(o, et, Object.freeze({
            xValue: 0,
            yValue: 0
        })), o),
        Ot = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        wt = function (t, e) {
            var n = (0, d.default)(e.filters, function (e) {
                return e.type === t
            });
            if (n && n.unit) return n.unit;
            switch (t) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        },
        At = Object.keys(bt);
    var St = /^rgb/,
        Rt = RegExp("rgba?".concat("\\(([^)]+)\\)"));

    function Nt(t, e, n) {
        if (g.IS_BROWSER_ENV) {
            var r = dt[e];
            if (r) {
                var i = n.getStyle,
                    o = n.setStyle,
                    a = i(t, U);
                if (a) {
                    var u = a.split(W).map(ft); - 1 === u.indexOf(r) && o(t, U, u.concat(r).join(W))
                } else o(t, U, r)
            }
        }
    }

    function xt(t, e, n) {
        if (g.IS_BROWSER_ENV) {
            var r = dt[e];
            if (r) {
                var i = n.getStyle,
                    o = n.setStyle,
                    a = i(t, U);
                a && -1 !== a.indexOf(r) && o(t, U, a.split(W).map(ft).filter(function (t) {
                    return t !== r
                }).join(W))
            }
        }
    }

    function Ct(t) {
        var e = t.actionList,
            n = void 0 === e ? {} : e,
            r = t.event,
            i = t.elementApi,
            o = n.actionItemGroups,
            a = n.continuousParameterGroups;
        o && o.forEach(function (t) {
            Lt({
                actionGroup: t,
                event: r,
                elementApi: i
            })
        }), a && a.forEach(function (t) {
            t.continuousActionGroups.forEach(function (t) {
                Lt({
                    actionGroup: t,
                    event: r,
                    elementApi: i
                })
            })
        })
    }

    function Lt(t) {
        var e = t.actionGroup,
            n = t.event,
            r = t.elementApi;
        e.actionItems.forEach(function (t) {
            var e, i = t.actionTypeId,
                o = t.config;
            e = (0, _.isPluginType)(i) ? (0, _.clearPlugin)(i) : Pt({
                effect: Dt,
                actionTypeId: i,
                elementApi: r
            }), gt({
                config: o,
                event: n,
                elementApi: r
            }).forEach(e)
        })
    }
    var Pt = function (t) {
        var e = t.effect,
            n = t.actionTypeId,
            r = t.elementApi;
        return function (t) {
            switch (n) {
                case Z:
                case J:
                case tt:
                case et:
                    e(t, g.TRANSFORM_PREFIXED, r);
                    break;
                case rt:
                    e(t, C, r);
                    break;
                case nt:
                    e(t, x, r);
                    break;
                case it:
                    e(t, L, r), e(t, P, r);
                    break;
                case ot:
                case at:
                case ut:
                    e(t, lt[n], r);
                    break;
                case ct:
                    e(t, V, r)
            }
        }
    };

    function Dt(t, e, n) {
        var r = n.setStyle;
        xt(t, e, n), r(t, e, ""), e === g.TRANSFORM_PREFIXED && r(t, g.TRANSFORM_STYLE_PREFIXED, "")
    }

    function Mt(t) {
        var e = 0,
            n = 0;
        return t.forEach(function (t, r) {
            var i = t.config,
                o = i.delay + i.duration;
            o >= e && (e = o, n = r)
        }), n
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return null == t || t != t ? e : t
    }
}, function (t, e, n) {
    var r = n(272),
        i = n(120),
        o = n(10),
        a = n(276),
        u = n(2);
    t.exports = function (t, e, n) {
        var c = u(t) ? r : a,
            s = arguments.length < 3;
        return c(t, o(e, 4), n, s, i)
    }
}, function (t, e) {
    t.exports = function (t, e, n, r) {
        var i = -1,
            o = null == t ? 0 : t.length;
        for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
        return n
    }
}, function (t, e, n) {
    var r = n(274)();
    t.exports = r
}, function (t, e) {
    t.exports = function (t) {
        return function (e, n, r) {
            for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
                var c = a[t ? u : ++i];
                if (!1 === n(o[c], c, o)) break
            }
            return e
        }
    }
}, function (t, e, n) {
    var r = n(16);
    t.exports = function (t, e) {
        return function (n, i) {
            if (null == n) return n;
            if (!r(n)) return t(n, i);
            for (var o = n.length, a = e ? o : -1, u = Object(n);
                (e ? a-- : ++a < o) && !1 !== i(u[a], a, u););
            return n
        }
    }
}, function (t, e) {
    t.exports = function (t, e, n, r, i) {
        return i(t, function (t, i, o) {
            n = r ? (r = !1, t) : e(n, t, i, o)
        }), n
    }
}, function (t, e, n) {
    var r = n(95)(n(278));
    t.exports = r
}, function (t, e, n) {
    var r = n(113),
        i = n(10),
        o = n(114),
        a = Math.max,
        u = Math.min;
    t.exports = function (t, e, n) {
        var c = null == t ? 0 : t.length;
        if (!c) return -1;
        var s = c - 1;
        return void 0 !== n && (s = o(n), s = n < 0 ? a(c + s, 0) : u(s, c - 1)), r(t, i(e, 3), s, !0)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(1)(n(17));
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var i = Object.prototype.hasOwnProperty;

    function o(t, e) {
        return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e
    }
    var a = function (t, e) {
        if (o(t, e)) return !0;
        if ("object" !== (0, r.default)(t) || null === t || "object" !== (0, r.default)(e) || null === e) return !1;
        var n = Object.keys(t),
            a = Object.keys(e);
        if (n.length !== a.length) return !1;
        for (var u = 0; u < n.length; u++)
            if (!i.call(e, n[u]) || !o(t[n[u]], e[n[u]])) return !1;
        return !0
    };
    e.default = a
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixInstances = void 0;
    var r = n(3),
        i = n(14),
        o = n(22),
        a = r.IX2EngineActionTypes,
        u = a.IX2_RAW_DATA_IMPORTED,
        c = a.IX2_SESSION_STOPPED,
        s = a.IX2_INSTANCE_ADDED,
        f = a.IX2_INSTANCE_STARTED,
        l = a.IX2_INSTANCE_REMOVED,
        d = a.IX2_ANIMATION_FRAME_CHANGED,
        p = i.IX2EasingUtils,
        v = p.optimizeFloat,
        h = p.applyEasing,
        E = p.createBezierEasing,
        _ = r.IX2EngineConstants.RENDER_GENERAL,
        g = i.IX2VanillaUtils,
        y = g.getItemConfigByKey,
        m = g.getRenderType,
        I = g.getStyleProp,
        T = function (t, e) {
            var n = t.position,
                r = t.parameterId,
                i = t.actionGroups,
                a = t.destinationKeys,
                u = t.smoothing,
                c = t.restingValue,
                s = t.actionTypeId,
                f = t.customEasingFn,
                l = t.skipMotion,
                d = t.skipToValue,
                p = e.payload.parameters,
                E = Math.max(1 - u, .01),
                _ = p[r];
            null == _ && (E = 1, _ = c);
            var g, m, I, T, b = Math.max(_, 0) || 0,
                O = v(b - n),
                w = l ? d : v(n + O * E),
                A = 100 * w;
            if (w === n && t.current) return t;
            for (var S = 0, R = i.length; S < R; S++) {
                var N = i[S],
                    x = N.keyframe,
                    C = N.actionItems;
                if (0 === S && (g = C[0]), A >= x) {
                    g = C[0];
                    var L = i[S + 1],
                        P = L && A !== x;
                    m = P ? L.actionItems[0] : null, P && (I = x / 100, T = (L.keyframe - x) / 100)
                }
            }
            var D = {};
            if (g && !m)
                for (var M = 0, j = a.length; M < j; M++) {
                    var F = a[M];
                    D[F] = y(s, F, g.config)
                } else if (g && m && void 0 !== I && void 0 !== T)
                    for (var X = (w - I) / T, G = g.config.easing, k = h(G, X, f), V = 0, U = a.length; V < U; V++) {
                        var B = a[V],
                            W = y(s, B, g.config),
                            H = (y(s, B, m.config) - W) * k + W;
                        D[B] = H
                    }
            return (0, o.merge)(t, {
                position: w,
                current: D
            })
        },
        b = function (t, e) {
            var n = t,
                r = n.active,
                i = n.origin,
                a = n.start,
                u = n.immediate,
                c = n.renderType,
                s = n.verbose,
                f = n.actionItem,
                l = n.destination,
                d = n.destinationKeys,
                p = n.pluginDuration,
                E = n.instanceDelay,
                g = n.customEasingFn,
                y = n.skipMotion,
                m = f.config.easing,
                I = f.config,
                T = I.duration,
                b = I.delay;
            null != p && (T = p), b = null != E ? E : b, c === _ ? T = 0 : (u || y) && (T = b = 0);
            var O = e.payload.now;
            if (r && i) {
                var w = O - (a + b);
                if (s) {
                    var A = O - a,
                        S = T + b,
                        R = v(Math.min(Math.max(0, A / S), 1));
                    t = (0, o.set)(t, "verboseTimeElapsed", S * R)
                }
                if (w < 0) return t;
                var N = v(Math.min(Math.max(0, w / T), 1)),
                    x = h(m, N, g),
                    C = {},
                    L = null;
                return d.length && (L = d.reduce(function (t, e) {
                    var n = l[e],
                        r = parseFloat(i[e]) || 0,
                        o = (parseFloat(n) - r) * x + r;
                    return t[e] = o, t
                }, {})), C.current = L, C.position = N, 1 === N && (C.active = !1, C.complete = !0), (0, o.merge)(t, C)
            }
            return t
        };
    e.ixInstances = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case u:
                return e.payload.ixInstances || Object.freeze({});
            case c:
                return Object.freeze({});
            case s:
                var n = e.payload,
                    r = n.instanceId,
                    i = n.elementId,
                    a = n.actionItem,
                    p = n.eventId,
                    v = n.eventTarget,
                    h = n.eventStateKey,
                    _ = n.actionListId,
                    g = n.groupIndex,
                    y = n.isCarrier,
                    O = n.origin,
                    w = n.destination,
                    A = n.immediate,
                    S = n.verbose,
                    R = n.continuous,
                    N = n.parameterId,
                    x = n.actionGroups,
                    C = n.smoothing,
                    L = n.restingValue,
                    P = n.pluginInstance,
                    D = n.pluginDuration,
                    M = n.instanceDelay,
                    j = n.skipMotion,
                    F = n.skipToValue,
                    X = a.actionTypeId,
                    G = m(X),
                    k = I(G, X),
                    V = Object.keys(w).filter(function (t) {
                        return null != w[t]
                    }),
                    U = a.config.easing;
                return (0, o.set)(t, r, {
                    id: r,
                    elementId: i,
                    active: !1,
                    position: 0,
                    start: 0,
                    origin: O,
                    destination: w,
                    destinationKeys: V,
                    immediate: A,
                    verbose: S,
                    current: null,
                    actionItem: a,
                    actionTypeId: X,
                    eventId: p,
                    eventTarget: v,
                    eventStateKey: h,
                    actionListId: _,
                    groupIndex: g,
                    renderType: G,
                    isCarrier: y,
                    styleProp: k,
                    continuous: R,
                    parameterId: N,
                    actionGroups: x,
                    smoothing: C,
                    restingValue: L,
                    pluginInstance: P,
                    pluginDuration: D,
                    instanceDelay: M,
                    skipMotion: j,
                    skipToValue: F,
                    customEasingFn: Array.isArray(U) && 4 === U.length ? E(U) : void 0
                });
            case f:
                var B = e.payload,
                    W = B.instanceId,
                    H = B.time;
                return (0, o.mergeIn)(t, [W], {
                    active: !0,
                    complete: !1,
                    start: H
                });
            case l:
                var z = e.payload.instanceId;
                if (!t[z]) return t;
                for (var K = {}, Y = Object.keys(t), Q = Y.length, q = 0; q < Q; q++) {
                    var $ = Y[q];
                    $ !== z && (K[$] = t[$])
                }
                return K;
            case d:
                for (var Z = t, J = Object.keys(t), tt = J.length, et = 0; et < tt; et++) {
                    var nt = J[et],
                        rt = t[nt],
                        it = rt.continuous ? T : b;
                    Z = (0, o.set)(Z, nt, it(rt, e))
                }
                return Z;
            default:
                return t
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixParameters = void 0;
    var r = n(3).IX2EngineActionTypes,
        i = r.IX2_RAW_DATA_IMPORTED,
        o = r.IX2_SESSION_STOPPED,
        a = r.IX2_PARAMETER_CHANGED;
    e.ixParameters = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case i:
                return e.payload.ixParameters || {};
            case o:
                return {};
            case a:
                var n = e.payload,
                    r = n.key,
                    u = n.value;
                return t[r] = u, t;
            default:
                return t
        }
    }
}, function (t, e) {
    t.exports = function (t, e) {
        if (null == t) return {};
        var n, r, i = {},
            o = Object.keys(t);
        for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i
    }
}, function (t, e, n) {
    var r = n(56),
        i = n(58),
        o = n(16),
        a = n(284),
        u = n(285),
        c = "[object Map]",
        s = "[object Set]";
    t.exports = function (t) {
        if (null == t) return 0;
        if (o(t)) return a(t) ? u(t) : t.length;
        var e = i(t);
        return e == c || e == s ? t.size : r(t).length
    }
}, function (t, e, n) {
    var r = n(15),
        i = n(2),
        o = n(12),
        a = "[object String]";
    t.exports = function (t) {
        return "string" == typeof t || !i(t) && o(t) && r(t) == a
    }
}, function (t, e, n) {
    var r = n(286),
        i = n(287),
        o = n(288);
    t.exports = function (t) {
        return i(t) ? o(t) : r(t)
    }
}, function (t, e, n) {
    var r = n(112)("length");
    t.exports = r
}, function (t, e) {
    var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    t.exports = function (t) {
        return n.test(t)
    }
}, function (t, e) {
    var n = "[\\ud800-\\udfff]",
        r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        i = "\\ud83c[\\udffb-\\udfff]",
        o = "[^\\ud800-\\udfff]",
        a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        c = "(?:" + r + "|" + i + ")" + "?",
        s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
        f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
        l = RegExp(i + "(?=" + i + ")|" + f + s, "g");
    t.exports = function (t) {
        for (var e = l.lastIndex = 0; l.test(t);) ++e;
        return e
    }
}, function (t, e, n) {
    var r = n(10),
        i = n(290),
        o = n(291);
    t.exports = function (t, e) {
        return o(t, i(r(e)))
    }
}, function (t, e) {
    var n = "Expected a function";
    t.exports = function (t) {
        if ("function" != typeof t) throw new TypeError(n);
        return function () {
            var e = arguments;
            switch (e.length) {
                case 0:
                    return !t.call(this);
                case 1:
                    return !t.call(this, e[0]);
                case 2:
                    return !t.call(this, e[0], e[1]);
                case 3:
                    return !t.call(this, e[0], e[1], e[2])
            }
            return !t.apply(this, e)
        }
    }
}, function (t, e, n) {
    var r = n(111),
        i = n(10),
        o = n(292),
        a = n(295);
    t.exports = function (t, e) {
        if (null == t) return {};
        var n = r(a(t), function (t) {
            return [t]
        });
        return e = i(e), o(t, n, function (t, n) {
            return e(t, n[0])
        })
    }
}, function (t, e, n) {
    var r = n(60),
        i = n(293),
        o = n(37);
    t.exports = function (t, e, n) {
        for (var a = -1, u = e.length, c = {}; ++a < u;) {
            var s = e[a],
                f = r(t, s);
            n(f, s) && i(c, o(s, t), f)
        }
        return c
    }
}, function (t, e, n) {
    var r = n(294),
        i = n(37),
        o = n(53),
        a = n(8),
        u = n(24);
    t.exports = function (t, e, n, c) {
        if (!a(t)) return t;
        for (var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t; null != d && ++s < f;) {
            var p = u(e[s]),
                v = n;
            if ("__proto__" === p || "constructor" === p || "prototype" === p) return t;
            if (s != l) {
                var h = d[p];
                void 0 === (v = c ? c(h, p, d) : void 0) && (v = a(h) ? h : o(e[s + 1]) ? [] : {})
            }
            r(d, p, v), d = d[p]
        }
        return t
    }
}, function (t, e, n) {
    var r = n(123),
        i = n(48),
        o = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n) {
        var a = t[e];
        o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n)
    }
}, function (t, e, n) {
    var r = n(102),
        i = n(296),
        o = n(298);
    t.exports = function (t) {
        return r(t, o, i)
    }
}, function (t, e, n) {
    var r = n(51),
        i = n(297),
        o = n(103),
        a = n(104),
        u = Object.getOwnPropertySymbols ? function (t) {
            for (var e = []; t;) r(e, o(t)), t = i(t);
            return e
        } : a;
    t.exports = u
}, function (t, e, n) {
    var r = n(107)(Object.getPrototypeOf, Object);
    t.exports = r
}, function (t, e, n) {
    var r = n(105),
        i = n(299),
        o = n(16);
    t.exports = function (t) {
        return o(t) ? r(t, !0) : i(t)
    }
}, function (t, e, n) {
    var r = n(8),
        i = n(57),
        o = n(300),
        a = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        if (!r(t)) return o(t);
        var e = i(t),
            n = [];
        for (var u in t)("constructor" != u || !e && a.call(t, u)) && n.push(u);
        return n
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = [];
        if (null != t)
            for (var n in Object(t)) e.push(n);
        return e
    }
}, function (t, e, n) {
    var r = n(56),
        i = n(58),
        o = n(36),
        a = n(2),
        u = n(16),
        c = n(52),
        s = n(57),
        f = n(54),
        l = "[object Map]",
        d = "[object Set]",
        p = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        if (null == t) return !0;
        if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || f(t) || o(t))) return !t.length;
        var e = i(t);
        if (e == l || e == d) return !t.size;
        if (s(t)) return !r(t).length;
        for (var n in t)
            if (p.call(t, n)) return !1;
        return !0
    }
}, function (t, e, n) {
    var r = n(123),
        i = n(121),
        o = n(10);
    t.exports = function (t, e) {
        var n = {};
        return e = o(e, 3), i(t, function (t, i, o) {
            r(n, i, e(t, i, o))
        }), n
    }
}, function (t, e, n) {
    var r = n(304),
        i = n(120),
        o = n(305),
        a = n(2);
    t.exports = function (t, e) {
        return (a(t) ? r : i)(t, o(e))
    }
}, function (t, e) {
    t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
        return t
    }
}, function (t, e, n) {
    var r = n(62);
    t.exports = function (t) {
        return "function" == typeof t ? t : r
    }
}, function (t, e, n) {
    var r = n(307),
        i = n(8),
        o = "Expected a function";
    t.exports = function (t, e, n) {
        var a = !0,
            u = !0;
        if ("function" != typeof t) throw new TypeError(o);
        return i(n) && (a = "leading" in n ? !!n.leading : a, u = "trailing" in n ? !!n.trailing : u), r(t, e, {
            leading: a,
            maxWait: e,
            trailing: u
        })
    }
}, function (t, e, n) {
    var r = n(8),
        i = n(308),
        o = n(63),
        a = "Expected a function",
        u = Math.max,
        c = Math.min;
    t.exports = function (t, e, n) {
        var s, f, l, d, p, v, h = 0,
            E = !1,
            _ = !1,
            g = !0;
        if ("function" != typeof t) throw new TypeError(a);

        function y(e) {
            var n = s,
                r = f;
            return s = f = void 0, h = e, d = t.apply(r, n)
        }

        function m(t) {
            var n = t - v;
            return void 0 === v || n >= e || n < 0 || _ && t - h >= l
        }

        function I() {
            var t = i();
            if (m(t)) return T(t);
            p = setTimeout(I, function (t) {
                var n = e - (t - v);
                return _ ? c(n, l - (t - h)) : n
            }(t))
        }

        function T(t) {
            return p = void 0, g && s ? y(t) : (s = f = void 0, d)
        }

        function b() {
            var t = i(),
                n = m(t);
            if (s = arguments, f = this, v = t, n) {
                if (void 0 === p) return function (t) {
                    return h = t, p = setTimeout(I, e), E ? y(t) : d
                }(v);
                if (_) return clearTimeout(p), p = setTimeout(I, e), y(v)
            }
            return void 0 === p && (p = setTimeout(I, e)), d
        }
        return e = o(e) || 0, r(n) && (E = !!n.leading, l = (_ = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : l, g = "trailing" in n ? !!n.trailing : g), b.cancel = function () {
            void 0 !== p && clearTimeout(p), h = 0, s = v = f = p = void 0
        }, b.flush = function () {
            return void 0 === p ? d : T(i())
        }, b
    }
}, function (t, e, n) {
    var r = n(6);
    t.exports = function () {
        return r.Date.now()
    }
}, function (t, e, n) {
    "use strict";
    var r = n(1)(n(17));
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setStyle = function (t, e, n) {
        t.style[e] = n
    }, e.getStyle = function (t, e) {
        return t.style[e]
    }, e.getProperty = function (t, e) {
        return t[e]
    }, e.matchSelector = function (t) {
        return function (e) {
            return e[a](t)
        }
    }, e.getQuerySelector = function (t) {
        var e = t.id,
            n = t.selector;
        if (e) {
            var r = e;
            if (-1 !== e.indexOf(c)) {
                var i = e.split(c),
                    o = i[0];
                if (r = i[1], o !== document.documentElement.getAttribute(l)) return null
            }
            return '[data-w-id="'.concat(r, '"], [data-w-id^="').concat(r, '_instance"]')
        }
        return n
    }, e.getValidDocument = function (t) {
        if (null == t || t === document.documentElement.getAttribute(l)) return document;
        return null
    }, e.queryDocument = function (t, e) {
        return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t))
    }, e.elementContains = function (t, e) {
        return t.contains(e)
    }, e.isSiblingNode = function (t, e) {
        return t !== e && t.parentNode === e.parentNode
    }, e.getChildElements = function (t) {
        for (var e = [], n = 0, r = (t || []).length; n < r; n++) {
            var i = t[n].children,
                o = i.length;
            if (o)
                for (var a = 0; a < o; a++) e.push(i[a])
        }
        return e
    }, e.getSiblingElements = function () {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) {
            var o = t[r].parentNode;
            if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
                n.push(o);
                for (var a = o.firstElementChild; null != a;) - 1 === t.indexOf(a) && e.push(a), a = a.nextElementSibling
            }
        }
        return e
    }, e.getRefType = function (t) {
        if (null != t && "object" == (0, r.default)(t)) return t instanceof Element ? s : f;
        return null
    }, e.getClosestElement = void 0;
    var i = n(14),
        o = n(3),
        a = i.IX2BrowserSupport.ELEMENT_MATCHES,
        u = o.IX2EngineConstants,
        c = u.IX2_ID_DELIMITER,
        s = u.HTML_ELEMENT,
        f = u.PLAIN_OBJECT,
        l = u.WF_PAGE;
    var d = Element.prototype.closest ? function (t, e) {
        return document.documentElement.contains(t) ? t.closest(e) : null
    } : function (t, e) {
        if (!document.documentElement.contains(t)) return null;
        var n = t;
        do {
            if (n[a] && n[a](e)) return n;
            n = n.parentNode
        } while (null != n);
        return null
    };
    e.getClosestElement = d
}, function (t, e, n) {
    "use strict";
    var r, i = n(1),
        o = i(n(21)),
        a = i(n(17)),
        u = n(1);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var c, s, f, l = u(n(30)),
        d = u(n(311)),
        p = u(n(59)),
        v = u(n(330)),
        h = n(3),
        E = n(122),
        _ = n(64),
        g = n(14),
        y = h.EventTypeConsts,
        m = y.MOUSE_CLICK,
        I = y.MOUSE_SECOND_CLICK,
        T = y.MOUSE_DOWN,
        b = y.MOUSE_UP,
        O = y.MOUSE_OVER,
        w = y.MOUSE_OUT,
        A = y.DROPDOWN_CLOSE,
        S = y.DROPDOWN_OPEN,
        R = y.SLIDER_ACTIVE,
        N = y.SLIDER_INACTIVE,
        x = y.TAB_ACTIVE,
        C = y.TAB_INACTIVE,
        L = y.NAVBAR_CLOSE,
        P = y.NAVBAR_OPEN,
        D = y.MOUSE_MOVE,
        M = y.PAGE_SCROLL_DOWN,
        j = y.SCROLL_INTO_VIEW,
        F = y.SCROLL_OUT_OF_VIEW,
        X = y.PAGE_SCROLL_UP,
        G = y.SCROLLING_IN_VIEW,
        k = y.PAGE_FINISH,
        V = y.ECOMMERCE_CART_CLOSE,
        U = y.ECOMMERCE_CART_OPEN,
        B = y.PAGE_START,
        W = y.PAGE_SCROLL,
        H = "COMPONENT_ACTIVE",
        z = "COMPONENT_INACTIVE",
        K = h.IX2EngineConstants.COLON_DELIMITER,
        Y = g.IX2VanillaUtils.getNamespacedParameterId,
        Q = function (t) {
            return function (e) {
                return !("object" !== (0, a.default)(e) || !t(e)) || e
            }
        },
        q = Q(function (t) {
            return t.element === t.nativeEvent.target
        }),
        $ = Q(function (t) {
            var e = t.element,
                n = t.nativeEvent;
            return e.contains(n.target)
        }),
        Z = (0, d.default)([q, $]),
        J = function (t, e) {
            if (e) {
                var n = t.getState().ixData.events[e];
                if (n && !at[n.eventTypeId]) return n
            }
            return null
        },
        tt = function (t, e) {
            var n = t.store,
                r = t.event,
                i = t.element,
                o = t.eventStateKey,
                a = r.action,
                u = r.id,
                c = a.config,
                s = c.actionListId,
                f = c.autoStopEventId,
                l = J(n, f);
            return l && (0, E.stopActionGroup)({
                store: n,
                eventId: f,
                eventTarget: i,
                eventStateKey: f + K + o.split(K)[1],
                actionListId: (0, p.default)(l, "action.config.actionListId")
            }), (0, E.stopActionGroup)({
                store: n,
                eventId: u,
                eventTarget: i,
                eventStateKey: o,
                actionListId: s
            }), (0, E.startActionGroup)({
                store: n,
                eventId: u,
                eventTarget: i,
                eventStateKey: o,
                actionListId: s
            }), e
        },
        et = function (t, e) {
            return function (n, r) {
                return !0 === t(n, r) ? e(n, r) : r
            }
        },
        nt = {
            handler: et(Z, tt)
        },
        rt = (0, l.default)({}, nt, {
            types: [H, z].join(" ")
        }),
        it = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }],
        ot = {
            types: it
        },
        at = {
            PAGE_START: B,
            PAGE_FINISH: k
        },
        ut = (c = void 0 !== window.pageXOffset, s = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function () {
            return {
                scrollLeft: c ? window.pageXOffset : s.scrollLeft,
                scrollTop: c ? window.pageYOffset : s.scrollTop,
                stiffScrollTop: (0, v.default)(c ? window.pageYOffset : s.scrollTop, 0, s.scrollHeight - window.innerHeight),
                scrollWidth: s.scrollWidth,
                scrollHeight: s.scrollHeight,
                clientWidth: s.clientWidth,
                clientHeight: s.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            }
        }),
        ct = function (t) {
            var e = t.element,
                n = t.nativeEvent,
                r = n.type,
                i = n.target,
                o = n.relatedTarget,
                a = e.contains(i);
            if ("mouseover" === r && a) return !0;
            var u = e.contains(o);
            return !("mouseout" !== r || !a || !u)
        },
        st = function (t) {
            var e, n, r = t.element,
                i = t.event.config,
                o = ut(),
                a = o.clientWidth,
                u = o.clientHeight,
                c = i.scrollOffsetValue,
                s = "PX" === i.scrollOffsetUnit ? c : u * (c || 0) / 100;
            return e = r.getBoundingClientRect(), n = {
                left: 0,
                top: s,
                right: a,
                bottom: u - s
            }, !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top)
        },
        ft = function (t) {
            return function (e, n) {
                var r = e.nativeEvent.type,
                    i = -1 !== [H, z].indexOf(r) ? r === H : n.isActive,
                    o = (0, l.default)({}, n, {
                        isActive: i
                    });
                return n && o.isActive === n.isActive ? o : t(e, o) || o
            }
        },
        lt = function (t) {
            return function (e, n) {
                var r = {
                    elementHovered: ct(e)
                };
                return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r) || r
            }
        },
        dt = function (t) {
            return function (e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = ut(),
                    i = r.stiffScrollTop,
                    o = r.scrollHeight,
                    a = r.innerHeight,
                    u = e.event,
                    c = u.config,
                    s = u.eventTypeId,
                    f = c.scrollOffsetValue,
                    d = "PX" === c.scrollOffsetUnit,
                    p = o - a,
                    v = Number((i / p).toFixed(2));
                if (n && n.percentTop === v) return n;
                var h, E, _ = (d ? f : a * (f || 0) / 100) / p,
                    g = 0;
                n && (h = v > n.percentTop, g = (E = n.scrollingDown !== h) ? v : n.anchorTop);
                var y = s === M ? v >= g + _ : v <= g - _,
                    m = (0, l.default)({}, n, {
                        percentTop: v,
                        inBounds: y,
                        anchorTop: g,
                        scrollingDown: h
                    });
                return n && y && (E || m.inBounds !== n.inBounds) && t(e, m) || m
            }
        },
        pt = function (t) {
            return function (e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        clickCount: 0
                    },
                    r = {
                        clickCount: n.clickCount % 2 + 1
                    };
                return r.clickCount !== n.clickCount && t(e, r) || r
            }
        },
        vt = function () {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return (0, l.default)({}, rt, {
                handler: et(t ? Z : q, ft(function (t, e) {
                    return e.isActive ? nt.handler(t, e) : e
                }))
            })
        },
        ht = function () {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return (0, l.default)({}, rt, {
                handler: et(t ? Z : q, ft(function (t, e) {
                    return e.isActive ? e : nt.handler(t, e)
                }))
            })
        },
        Et = (0, l.default)({}, ot, {
            handler: (f = function (t, e) {
                var n = e.elementVisible,
                    r = t.event;
                return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : r.eventTypeId === j === n ? (tt(t), (0, l.default)({}, e, {
                    triggered: !0
                })) : e
            }, function (t, e) {
                var n = (0, l.default)({}, e, {
                    elementVisible: st(t)
                });
                return (e ? n.elementVisible !== e.elementVisible : n.elementVisible) && f(t, n) || n
            })
        }),
        _t = (r = {}, (0, o.default)(r, R, vt()), (0, o.default)(r, N, ht()), (0, o.default)(r, S, vt()), (0, o.default)(r, A, ht()), (0, o.default)(r, P, vt(!1)), (0, o.default)(r, L, ht(!1)), (0, o.default)(r, x, vt()), (0, o.default)(r, C, ht()), (0, o.default)(r, U, {
            types: "ecommerce-cart-open",
            handler: et(Z, tt)
        }), (0, o.default)(r, V, {
            types: "ecommerce-cart-close",
            handler: et(Z, tt)
        }), (0, o.default)(r, m, {
            types: "click",
            handler: et(Z, pt(function (t, e) {
                var n, r, i, o = e.clickCount;
                r = (n = t).store, i = n.event.action.config.autoStopEventId, Boolean(J(r, i)) ? 1 === o && tt(t) : tt(t)
            }))
        }), (0, o.default)(r, I, {
            types: "click",
            handler: et(Z, pt(function (t, e) {
                2 === e.clickCount && tt(t)
            }))
        }), (0, o.default)(r, T, (0, l.default)({}, nt, {
            types: "mousedown"
        })), (0, o.default)(r, b, (0, l.default)({}, nt, {
            types: "mouseup"
        })), (0, o.default)(r, O, {
            types: "mouseover mouseout",
            handler: et(Z, lt(function (t, e) {
                e.elementHovered && tt(t)
            }))
        }), (0, o.default)(r, w, {
            types: "mouseover mouseout",
            handler: et(Z, lt(function (t, e) {
                e.elementHovered || tt(t)
            }))
        }), (0, o.default)(r, D, {
            types: "mousemove mouseout scroll",
            handler: function (t) {
                var e = t.store,
                    n = t.element,
                    r = t.eventConfig,
                    i = t.nativeEvent,
                    o = t.eventStateKey,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    },
                    u = r.basedOn,
                    c = r.selectedAxis,
                    s = r.continuousParameterGroupId,
                    f = r.reverse,
                    l = r.restingState,
                    d = void 0 === l ? 0 : l,
                    p = i.clientX,
                    v = void 0 === p ? a.clientX : p,
                    E = i.clientY,
                    g = void 0 === E ? a.clientY : E,
                    y = i.pageX,
                    m = void 0 === y ? a.pageX : y,
                    I = i.pageY,
                    T = void 0 === I ? a.pageY : I,
                    b = "X_AXIS" === c,
                    O = "mouseout" === i.type,
                    w = d / 100,
                    A = s,
                    S = !1;
                switch (u) {
                    case h.EventBasedOn.VIEWPORT:
                        w = b ? Math.min(v, window.innerWidth) / window.innerWidth : Math.min(g, window.innerHeight) / window.innerHeight;
                        break;
                    case h.EventBasedOn.PAGE:
                        var R = ut(),
                            N = R.scrollLeft,
                            x = R.scrollTop,
                            C = R.scrollWidth,
                            L = R.scrollHeight;
                        w = b ? Math.min(N + m, C) / C : Math.min(x + T, L) / L;
                        break;
                    case h.EventBasedOn.ELEMENT:
                    default:
                        A = Y(o, s);
                        var P = 0 === i.type.indexOf("mouse");
                        if (P && !0 !== Z({
                                element: n,
                                nativeEvent: i
                            })) break;
                        var D = n.getBoundingClientRect(),
                            M = D.left,
                            j = D.top,
                            F = D.width,
                            X = D.height;
                        if (!P && ! function (t, e) {
                                return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom
                            }({
                                left: v,
                                top: g
                            }, D)) break;
                        S = !0, w = b ? (v - M) / F : (g - j) / X
                }
                return O && (w > .95 || w < .05) && (w = Math.round(w)), (u !== h.EventBasedOn.ELEMENT || S || S !== a.elementHovered) && (w = f ? 1 - w : w, e.dispatch((0, _.parameterChanged)(A, w))), {
                    elementHovered: S,
                    clientX: v,
                    clientY: g,
                    pageX: m,
                    pageY: T
                }
            }
        }), (0, o.default)(r, W, {
            types: it,
            handler: function (t) {
                var e = t.store,
                    n = t.eventConfig,
                    r = n.continuousParameterGroupId,
                    i = n.reverse,
                    o = ut(),
                    a = o.scrollTop / (o.scrollHeight - o.clientHeight);
                a = i ? 1 - a : a, e.dispatch((0, _.parameterChanged)(r, a))
            }
        }), (0, o.default)(r, G, {
            types: it,
            handler: function (t) {
                var e = t.element,
                    n = t.store,
                    r = t.eventConfig,
                    i = t.eventStateKey,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        scrollPercent: 0
                    },
                    a = ut(),
                    u = a.scrollLeft,
                    c = a.scrollTop,
                    s = a.scrollWidth,
                    f = a.scrollHeight,
                    l = a.clientHeight,
                    d = r.basedOn,
                    p = r.selectedAxis,
                    v = r.continuousParameterGroupId,
                    E = r.startsEntering,
                    g = r.startsExiting,
                    y = r.addEndOffset,
                    m = r.addStartOffset,
                    I = r.addOffsetValue,
                    T = void 0 === I ? 0 : I,
                    b = r.endOffsetValue,
                    O = void 0 === b ? 0 : b,
                    w = "X_AXIS" === p;
                if (d === h.EventBasedOn.VIEWPORT) {
                    var A = w ? u / s : c / f;
                    return A !== o.scrollPercent && n.dispatch((0, _.parameterChanged)(v, A)), {
                        scrollPercent: A
                    }
                }
                var S = Y(i, v),
                    R = e.getBoundingClientRect(),
                    N = (m ? T : 0) / 100,
                    x = (y ? O : 0) / 100;
                N = E ? N : 1 - N, x = g ? x : 1 - x;
                var C = R.top + Math.min(R.height * N, l),
                    L = R.top + R.height * x - C,
                    P = Math.min(l + L, f),
                    D = Math.min(Math.max(0, l - C), P) / P;
                return D !== o.scrollPercent && n.dispatch((0, _.parameterChanged)(S, D)), {
                    scrollPercent: D
                }
            }
        }), (0, o.default)(r, j, Et), (0, o.default)(r, F, Et), (0, o.default)(r, M, (0, l.default)({}, ot, {
            handler: dt(function (t, e) {
                e.scrollingDown && tt(t)
            })
        })), (0, o.default)(r, X, (0, l.default)({}, ot, {
            handler: dt(function (t, e) {
                e.scrollingDown || tt(t)
            })
        })), (0, o.default)(r, k, {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(q, function (t) {
                return function (e, n) {
                    var r = {
                        finished: "complete" === document.readyState
                    };
                    return !r.finished || n && n.finshed || t(e), r
                }
            }(tt))
        }), (0, o.default)(r, B, {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(q, function (t) {
                return function (e, n) {
                    return n || t(e), {
                        started: !0
                    }
                }
            }(tt))
        }), r);
    e.default = _t
}, function (t, e, n) {
    var r = n(312)();
    t.exports = r
}, function (t, e, n) {
    var r = n(65),
        i = n(313),
        o = n(126),
        a = n(127),
        u = n(2),
        c = n(326),
        s = "Expected a function",
        f = 8,
        l = 32,
        d = 128,
        p = 256;
    t.exports = function (t) {
        return i(function (e) {
            var n = e.length,
                i = n,
                v = r.prototype.thru;
            for (t && e.reverse(); i--;) {
                var h = e[i];
                if ("function" != typeof h) throw new TypeError(s);
                if (v && !E && "wrapper" == a(h)) var E = new r([], !0)
            }
            for (i = E ? i : n; ++i < n;) {
                h = e[i];
                var _ = a(h),
                    g = "wrapper" == _ ? o(h) : void 0;
                E = g && c(g[0]) && g[1] == (d | f | l | p) && !g[4].length && 1 == g[9] ? E[a(g[0])].apply(E, g[3]) : 1 == h.length && c(h) ? E[_]() : E.thru(h)
            }
            return function () {
                var t = arguments,
                    r = t[0];
                if (E && 1 == t.length && u(r)) return E.plant(r).value();
                for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
                return o
            }
        })
    }
}, function (t, e, n) {
    var r = n(314),
        i = n(317),
        o = n(319);
    t.exports = function (t) {
        return o(i(t, void 0, r), t + "")
    }
}, function (t, e, n) {
    var r = n(315);
    t.exports = function (t) {
        return null != t && t.length ? r(t, 1) : []
    }
}, function (t, e, n) {
    var r = n(51),
        i = n(316);
    t.exports = function t(e, n, o, a, u) {
        var c = -1,
            s = e.length;
        for (o || (o = i), u || (u = []); ++c < s;) {
            var f = e[c];
            n > 0 && o(f) ? n > 1 ? t(f, n - 1, o, a, u) : r(u, f) : a || (u[u.length] = f)
        }
        return u
    }
}, function (t, e, n) {
    var r = n(23),
        i = n(36),
        o = n(2),
        a = r ? r.isConcatSpreadable : void 0;
    t.exports = function (t) {
        return o(t) || i(t) || !!(a && t && t[a])
    }
}, function (t, e, n) {
    var r = n(318),
        i = Math.max;
    t.exports = function (t, e, n) {
        return e = i(void 0 === e ? t.length - 1 : e, 0),
            function () {
                for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u;) c[a] = o[e + a];
                a = -1;
                for (var s = Array(e + 1); ++a < e;) s[a] = o[a];
                return s[e] = n(c), r(t, this, s)
            }
    }
}, function (t, e) {
    t.exports = function (t, e, n) {
        switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }
}, function (t, e, n) {
    var r = n(320),
        i = n(322)(r);
    t.exports = i
}, function (t, e, n) {
    var r = n(321),
        i = n(124),
        o = n(62),
        a = i ? function (t, e) {
            return i(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(e),
                writable: !0
            })
        } : o;
    t.exports = a
}, function (t, e) {
    t.exports = function (t) {
        return function () {
            return t
        }
    }
}, function (t, e) {
    var n = 800,
        r = 16,
        i = Date.now;
    t.exports = function (t) {
        var e = 0,
            o = 0;
        return function () {
            var a = i(),
                u = r - (a - o);
            if (o = a, u > 0) {
                if (++e >= n) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
}, function (t, e, n) {
    var r = n(108),
        i = r && new r;
    t.exports = i
}, function (t, e) {
    t.exports = function () {}
}, function (t, e) {
    t.exports = {}
}, function (t, e, n) {
    var r = n(67),
        i = n(126),
        o = n(127),
        a = n(327);
    t.exports = function (t) {
        var e = o(t),
            n = a[e];
        if ("function" != typeof n || !(e in r.prototype)) return !1;
        if (t === n) return !0;
        var u = i(n);
        return !!u && t === u[0]
    }
}, function (t, e, n) {
    var r = n(67),
        i = n(65),
        o = n(66),
        a = n(2),
        u = n(12),
        c = n(328),
        s = Object.prototype.hasOwnProperty;

    function f(t) {
        if (u(t) && !a(t) && !(t instanceof r)) {
            if (t instanceof i) return t;
            if (s.call(t, "__wrapped__")) return c(t)
        }
        return new i(t)
    }
    f.prototype = o.prototype, f.prototype.constructor = f, t.exports = f
}, function (t, e, n) {
    var r = n(67),
        i = n(65),
        o = n(329);
    t.exports = function (t) {
        if (t instanceof r) return t.clone();
        var e = new i(t.__wrapped__, t.__chain__);
        return e.__actions__ = o(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
    }
}, function (t, e) {
    t.exports = function (t, e) {
        var n = -1,
            r = t.length;
        for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
        return e
    }
}, function (t, e, n) {
    var r = n(331),
        i = n(63);
    t.exports = function (t, e, n) {
        return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), r(i(t), e, n)
    }
}, function (t, e) {
    t.exports = function (t, e, n) {
        return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t
    }
}, function (t, e, n) {
    "use strict";
    var r = n(4);
    r.define("links", t.exports = function (t, e) {
        var n, i, o, a = {},
            u = t(window),
            c = r.env(),
            s = window.location,
            f = document.createElement("a"),
            l = "w--current",
            d = /index\.(html|php)$/,
            p = /\/$/;

        function v(e) {
            var r = n && e.getAttribute("href-disabled") || e.getAttribute("href");
            if (f.href = r, !(r.indexOf(":") >= 0)) {
                var a = t(e);
                if (f.hash.length > 1 && f.host + f.pathname === s.host + s.pathname) {
                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(f.hash)) return;
                    var u = t(f.hash);
                    u.length && i.push({
                        link: a,
                        sec: u,
                        active: !1
                    })
                } else if ("#" !== r && "" !== r) {
                    var c = f.href === s.href || r === o || d.test(r) && p.test(o);
                    E(a, l, c)
                }
            }
        }

        function h() {
            var t = u.scrollTop(),
                n = u.height();
            e.each(i, function (e) {
                var r = e.link,
                    i = e.sec,
                    o = i.offset().top,
                    a = i.outerHeight(),
                    u = .5 * n,
                    c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
                e.active !== c && (e.active = c, E(r, l, c))
            })
        }

        function E(t, e, n) {
            var r = t.hasClass(e);
            n && r || (n || r) && (n ? t.addClass(e) : t.removeClass(e))
        }
        return a.ready = a.design = a.preview = function () {
            n = c && r.env("design"), o = r.env("slug") || s.pathname || "", r.scroll.off(h), i = [];
            for (var t = document.links, e = 0; e < t.length; ++e) v(t[e]);
            i.length && (r.scroll.on(h), h())
        }, a
    })
}, function (t, e, n) {
    "use strict";
    var r = n(4);
    r.define("scroll", t.exports = function (t) {
        var e = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            },
            n = window.location,
            i = function () {
                try {
                    return Boolean(window.frameElement)
                } catch (t) {
                    return !0
                }
            }() ? null : window.history,
            o = t(window),
            a = t(document),
            u = t(document.body),
            c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (t) {
                window.setTimeout(t, 15)
            },
            s = r.env("editor") ? ".w-editor-body" : "body",
            f = "header, " + s + " > .header, " + s + " > .w-nav:not([data-no-scroll])",
            l = 'a[href="#"]',
            d = 'a[href*="#"]:not(.w-tab-link):not(' + l + ")",
            p = document.createElement("style");
        p.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
        var v = /^#[a-zA-Z0-9][\w:.-]*$/;
        var h = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

        function E(t, e) {
            var n;
            switch (e) {
                case "add":
                    (n = t.attr("tabindex")) ? t.attr("data-wf-tabindex-swap", n): t.attr("tabindex", "-1");
                    break;
                case "remove":
                    (n = t.attr("data-wf-tabindex-swap")) ? (t.attr("tabindex", n), t.removeAttr("data-wf-tabindex-swap")) : t.removeAttr("tabindex")
            }
            t.toggleClass("wf-force-outline-none", "add" === e)
        }

        function _(e) {
            var a = e.currentTarget;
            if (!(r.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(a.className))) {
                var s, l = (s = a, v.test(s.hash) && s.host + s.pathname === n.host + n.pathname ? a.hash : "");
                if ("" !== l) {
                    var d = t(l);
                    d.length && (e && (e.preventDefault(), e.stopPropagation()), function (t) {
                        if (n.hash !== t && i && i.pushState && (!r.env.chrome || "file:" !== n.protocol)) {
                            var e = i.state && i.state.hash;
                            e !== t && i.pushState({
                                hash: t
                            }, "", t)
                        }
                    }(l), window.setTimeout(function () {
                        ! function (e, n) {
                            var r = o.scrollTop(),
                                i = function (e) {
                                    var n = t(f),
                                        r = "fixed" === n.css("position") ? n.outerHeight() : 0,
                                        i = e.offset().top - r;
                                    if ("mid" === e.data("scroll")) {
                                        var a = o.height() - r,
                                            u = e.outerHeight();
                                        u < a && (i -= Math.round((a - u) / 2))
                                    }
                                    return i
                                }(e);
                            if (r === i) return;
                            var a = function (t, e, n) {
                                    if ("none" === document.body.getAttribute("data-wf-scroll-motion") || h.matches) return 0;
                                    var r = 1;
                                    return u.add(t).each(function (t, e) {
                                        var n = parseFloat(e.getAttribute("data-scroll-time"));
                                        !isNaN(n) && n >= 0 && (r = n)
                                    }), (472.143 * Math.log(Math.abs(e - n) + 125) - 2e3) * r
                                }(e, r, i),
                                s = Date.now();
                            c(function t() {
                                var e = Date.now() - s;
                                window.scroll(0, function (t, e, n, r) {
                                    return n > r ? e : t + (e - t) * ((i = n / r) < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
                                    var i
                                }(r, i, e, a)), e <= a ? c(t) : "function" == typeof n && n()
                            })
                        }(d, function () {
                            E(d, "add"), d.get(0).focus({
                                preventScroll: !0
                            }), E(d, "remove")
                        })
                    }, e ? 0 : 300))
                }
            }
        }
        return {
            ready: function () {
                var t = e.WF_CLICK_EMPTY,
                    n = e.WF_CLICK_SCROLL;
                a.on(n, d, _), a.on(t, l, function (t) {
                    t.preventDefault()
                }), document.head.insertBefore(p, document.head.firstChild)
            }
        }
    })
}, function (t, e, n) {
    "use strict";
    n(4).define("touch", t.exports = function (t) {
        var e = {},
            n = window.getSelection;

        function r(e) {
            var r, i, o = !1,
                a = !1,
                u = Math.min(Math.round(.04 * window.innerWidth), 40);

            function c(t) {
                var e = t.touches;
                e && e.length > 1 || (o = !0, e ? (a = !0, r = e[0].clientX) : r = t.clientX, i = r)
            }

            function s(e) {
                if (o) {
                    if (a && "mousemove" === e.type) return e.preventDefault(), void e.stopPropagation();
                    var r = e.touches,
                        c = r ? r[0].clientX : e.clientX,
                        s = c - i;
                    i = c, Math.abs(s) > u && n && "" === String(n()) && (! function (e, n, r) {
                        var i = t.Event(e, {
                            originalEvent: n
                        });
                        t(n.target).trigger(i, r)
                    }("swipe", e, {
                        direction: s > 0 ? "right" : "left"
                    }), l())
                }
            }

            function f(t) {
                if (o) return o = !1, a && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void(a = !1)) : void 0
            }

            function l() {
                o = !1
            }
            e.addEventListener("touchstart", c, !1), e.addEventListener("touchmove", s, !1), e.addEventListener("touchend", f, !1), e.addEventListener("touchcancel", l, !1), e.addEventListener("mousedown", c, !1), e.addEventListener("mousemove", s, !1), e.addEventListener("mouseup", f, !1), e.addEventListener("mouseout", l, !1), this.destroy = function () {
                e.removeEventListener("touchstart", c, !1), e.removeEventListener("touchmove", s, !1), e.removeEventListener("touchend", f, !1), e.removeEventListener("touchcancel", l, !1), e.removeEventListener("mousedown", c, !1), e.removeEventListener("mousemove", s, !1), e.removeEventListener("mouseup", f, !1), e.removeEventListener("mouseout", l, !1), e = null
            }
        }
        return t.event.special.tap = {
            bindType: "click",
            delegateType: "click"
        }, e.init = function (e) {
            return (e = "string" == typeof e ? t(e).get(0) : e) ? new r(e) : null
        }, e.instance = e.init(document), e
    })
}, function (t, e, n) {
    "use strict";
    var r = n(1)(n(336)),
        i = n(4);
    i.define("forms", t.exports = function (t, e) {
        var n, o, a, u, c, s = {},
            f = t(document),
            l = window.location,
            d = window.XDomainRequest && !window.atob,
            p = ".w-form",
            v = /e(-)?mail/i,
            h = /^\S+@\S+$/,
            E = window.alert,
            _ = i.env(),
            g = /list-manage[1-9]?.com/i,
            y = e.debounce(function () {
                E("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);

        function m(e, n) {
            var r = t(n),
                i = t.data(n, p);
            i || (i = t.data(n, p, {
                form: r
            })), I(i);
            var a = r.closest("div.w-form");
            i.done = a.find("> .w-form-done"), i.fail = a.find("> .w-form-fail"), i.fileUploads = a.find(".w-file-upload"), i.fileUploads.each(function (e) {
                ! function (e, n) {
                    if (!n.fileUploads || !n.fileUploads[e]) return;
                    var r, i = t(n.fileUploads[e]),
                        o = i.find("> .w-file-upload-default"),
                        a = i.find("> .w-file-upload-uploading"),
                        u = i.find("> .w-file-upload-success"),
                        s = i.find("> .w-file-upload-error"),
                        f = o.find(".w-file-upload-input"),
                        l = o.find(".w-file-upload-label"),
                        d = l.children(),
                        p = s.find(".w-file-upload-error-msg"),
                        v = u.find(".w-file-upload-file"),
                        h = u.find(".w-file-remove-link"),
                        E = v.find(".w-file-upload-file-name"),
                        g = p.attr("data-w-size-error"),
                        y = p.attr("data-w-type-error"),
                        m = p.attr("data-w-generic-error");
                    _ || l.on("click keydown", function (t) {
                        "keydown" === t.type && 13 !== t.which && 32 !== t.which || (t.preventDefault(), f.click())
                    });
                    if (l.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), h.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), _) f.on("click", function (t) {
                        t.preventDefault()
                    }), l.on("click", function (t) {
                        t.preventDefault()
                    }), d.on("click", function (t) {
                        t.preventDefault()
                    });
                    else {
                        h.on("click keydown", function (t) {
                            if ("keydown" === t.type) {
                                if (13 !== t.which && 32 !== t.which) return;
                                t.preventDefault()
                            }
                            f.removeAttr("data-value"), f.val(""), E.html(""), o.toggle(!0), u.toggle(!1), l.focus()
                        }), f.on("change", function (i) {
                            (r = i.target && i.target.files && i.target.files[0]) && (o.toggle(!1), s.toggle(!1), a.toggle(!0), a.focus(), E.text(r.name), S() || T(n), n.fileUploads[e].uploading = !0, function (e, n) {
                                var r = {
                                    name: e.name,
                                    size: e.size
                                };
                                t.ajax({
                                    type: "POST",
                                    url: c,
                                    data: r,
                                    dataType: "json",
                                    crossDomain: !0
                                }).done(function (t) {
                                    n(null, t)
                                }).fail(function (t) {
                                    n(t)
                                })
                            }(r, w))
                        });
                        var b = l.outerHeight();
                        f.height(b), f.width(1)
                    }

                    function O(t) {
                        var r = t.responseJSON && t.responseJSON.msg,
                            i = m;
                        "string" == typeof r && 0 === r.indexOf("InvalidFileTypeError") ? i = y : "string" == typeof r && 0 === r.indexOf("MaxFileSizeError") && (i = g), p.text(i), f.removeAttr("data-value"), f.val(""), a.toggle(!1), o.toggle(!0), s.toggle(!0), s.focus(), n.fileUploads[e].uploading = !1, S() || I(n)
                    }

                    function w(e, n) {
                        if (e) return O(e);
                        var i = n.fileName,
                            o = n.postData,
                            a = n.fileId,
                            u = n.s3Url;
                        f.attr("data-value", a),
                            function (e, n, r, i, o) {
                                var a = new FormData;
                                for (var u in n) a.append(u, n[u]);
                                a.append("file", r, i), t.ajax({
                                    type: "POST",
                                    url: e,
                                    data: a,
                                    processData: !1,
                                    contentType: !1
                                }).done(function () {
                                    o(null)
                                }).fail(function (t) {
                                    o(t)
                                })
                            }(u, o, r, i, A)
                    }

                    function A(t) {
                        if (t) return O(t);
                        a.toggle(!1), u.css("display", "inline-block"), u.focus(), n.fileUploads[e].uploading = !1, S() || I(n)
                    }

                    function S() {
                        var t = n.fileUploads && n.fileUploads.toArray() || [];
                        return t.some(function (t) {
                            return t.uploading
                        })
                    }
                }(e, i)
            });
            var u = i.form.attr("aria-label") || i.form.attr("data-name") || "Form";
            i.done.attr("aria-label") || i.form.attr("aria-label", u), i.done.attr("tabindex", "-1"), i.done.attr("role", "region"), i.done.attr("aria-label") || i.done.attr("aria-label", u + " success"), i.fail.attr("tabindex", "-1"), i.fail.attr("role", "region"), i.fail.attr("aria-label") || i.fail.attr("aria-label", u + " failure");
            var s = i.action = r.attr("action");
            i.handler = null, i.redirect = r.attr("data-redirect"), g.test(s) ? i.handler = A : s || (o ? i.handler = w : y())
        }

        function I(t) {
            var e = t.btn = t.form.find(':input[type="submit"]');
            t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label)
        }

        function T(t) {
            var e = t.btn,
                n = t.wait;
            e.prop("disabled", !0), n && (t.label = e.val(), e.val(n))
        }

        function b(e, n) {
            var r = null;
            return n = n || {}, e.find(':input:not([type="submit"]):not([type="file"])').each(function (i, o) {
                var a = t(o),
                    u = a.attr("type"),
                    c = a.attr("data-name") || a.attr("name") || "Field " + (i + 1),
                    s = a.val();
                if ("checkbox" === u) s = a.is(":checked");
                else if ("radio" === u) {
                    if (null === n[c] || "string" == typeof n[c]) return;
                    s = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null
                }
                "string" == typeof s && (s = t.trim(s)), n[c] = s, r = r || function (t, e, n, r) {
                    var i = null;
                    "password" === e ? i = "Passwords cannot be submitted." : t.attr("required") ? r ? v.test(t.attr("type")) && (h.test(r) || (i = "Please enter a valid email address for: " + n)) : i = "Please fill out the required field: " + n : "g-recaptcha-response" !== n || r || (i = "Please confirm youâ€™re not a robot.");
                    return i
                }(a, u, c, s)
            }), r
        }
        s.ready = s.design = s.preview = function () {
            ! function () {
                o = t("html").attr("data-wf-site"), u = "https://webflow.com/api/v1/form/" + o, d && u.indexOf("https://webflow.com") >= 0 && (u = u.replace("https://webflow.com", "http://formdata.webflow.com"));
                if (c = "".concat(u, "/signFile"), !(n = t(p + " form")).length) return;
                n.each(m)
            }(), _ || a || function () {
                a = !0, f.on("submit", p + " form", function (e) {
                    var n = t.data(this, p);
                    n.handler && (n.evt = e, n.handler(n))
                });
                var e = [
                    ["checkbox", ".w-checkbox-input"],
                    ["radio", ".w-radio-input"]
                ];
                f.on("change", p + ' form input[type="checkbox"]:not(.w-checkbox-input)', function (e) {
                    t(e.target).siblings(".w-checkbox-input").toggleClass("w--redirected-checked")
                }), f.on("change", p + ' form input[type="radio"]', function (e) {
                    t('input[name="'.concat(e.target.name, '"]:not(').concat(".w-checkbox-input", ")")).map(function (e, n) {
                        return t(n).siblings(".w-radio-input").removeClass("w--redirected-checked")
                    });
                    var n = t(e.target);
                    n.hasClass("w-radio-input") || n.siblings(".w-radio-input").addClass("w--redirected-checked")
                }), e.forEach(function (e) {
                    var n = (0, r.default)(e, 2),
                        i = n[0],
                        o = n[1];
                    f.on("focus", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function (e) {
                        t(e.target).siblings(o).addClass("w--redirected-focus"), t(e.target).filter(":focus-visible, [data-wf-focus-visible]").siblings(o).addClass("w--redirected-focus-visible")
                    }), f.on("blur", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function (e) {
                        t(e.target).siblings(o).removeClass("".concat("w--redirected-focus", " ").concat("w--redirected-focus-visible"))
                    })
                })
            }()
        };
        var O = {
            _mkto_trk: "marketo"
        };

        function w(e) {
            I(e);
            var n = e.form,
                r = {
                    name: n.attr("data-name") || n.attr("name") || "Untitled Form",
                    source: l.href,
                    test: i.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(n.html()),
                    trackingCookies: document.cookie.split("; ").reduce(function (t, e) {
                        var n = e.split("="),
                            r = n[0];
                        if (r in O) {
                            var i = O[r],
                                o = n.slice(1).join("=");
                            t[i] = o
                        }
                        return t
                    }, {})
                },
                a = n.attr("data-wf-flow");
            a && (r.wfFlow = a), R(e);
            var c = b(n, r.fields);
            if (c) return E(c);
            r.fileUploads = function (e) {
                var n = {};
                return e.find(':input[type="file"]').each(function (e, r) {
                    var i = t(r),
                        o = i.attr("data-name") || i.attr("name") || "File " + (e + 1),
                        a = i.attr("data-value");
                    "string" == typeof a && (a = t.trim(a)), n[o] = a
                }), n
            }(n), T(e), o ? t.ajax({
                url: u,
                type: "POST",
                data: r,
                dataType: "json",
                crossDomain: !0
            }).done(function (t) {
                t && 200 === t.code && (e.success = !0), S(e)
            }).fail(function () {
                S(e)
            }) : S(e)
        }

        function A(n) {
            I(n);
            var r = n.form,
                i = {};
            if (!/^https/.test(l.href) || /^https/.test(n.action)) {
                R(n);
                var o, a = b(r, i);
                if (a) return E(a);
                T(n), e.each(i, function (t, e) {
                    v.test(e) && (i.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (o = t), /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t)
                }), o && !i.FNAME && (o = o.split(" "), i.FNAME = o[0], i.LNAME = i.LNAME || o[1]);
                var u = n.action.replace("/post?", "/post-json?") + "&c=?",
                    c = u.indexOf("u=") + 2;
                c = u.substring(c, u.indexOf("&", c));
                var s = u.indexOf("id=") + 3;
                s = u.substring(s, u.indexOf("&", s)), i["b_" + c + "_" + s] = "", t.ajax({
                    url: u,
                    data: i,
                    dataType: "jsonp"
                }).done(function (t) {
                    n.success = "success" === t.result || /already/.test(t.msg), n.success || console.info("MailChimp error: " + t.msg), S(n)
                }).fail(function () {
                    S(n)
                })
            } else r.attr("method", "post")
        }

        function S(t) {
            var e = t.form,
                n = t.redirect,
                r = t.success;
            r && n ? i.location(n) : (t.done.toggle(r), t.fail.toggle(!r), r ? t.done.focus() : t.fail.focus(), e.toggle(!r), I(t))
        }

        function R(t) {
            t.evt && t.evt.preventDefault(), t.evt = null
        }
        return s
    })
}, function (t, e, n) {
    var r = n(337),
        i = n(338),
        o = n(339);
    t.exports = function (t, e) {
        return r(t) || i(t, e) || o()
    }
}, function (t, e) {
    t.exports = function (t) {
        if (Array.isArray(t)) return t
    }
}, function (t, e) {
    t.exports = function (t, e) {
        var n = [],
            r = !0,
            i = !1,
            o = void 0;
        try {
            for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
        } catch (t) {
            i = !0, o = t
        } finally {
            try {
                r || null == u.return || u.return()
            } finally {
                if (i) throw o
            }
        }
        return n
    }
}, function (t, e) {
    t.exports = function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e-4": {
            "id": "e-4",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-5"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae07464529f4a|2dd6ffc3-dcdf-3ef9-f8df-30b602b04717",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae07464529f4a|2dd6ffc3-dcdf-3ef9-f8df-30b602b04717",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571053881649
        },
        "e-5": {
            "id": "e-5",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-164"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae07464529f4a|2dd6ffc3-dcdf-3ef9-f8df-30b602b04717",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae07464529f4a|2dd6ffc3-dcdf-3ef9-f8df-30b602b04717",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571053881650
        },
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-8"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".grid-item",
                "originalId": "627b7316798ae07464529f4a|15dba1cd-83a5-2727-e87f-3f1fb1c0348b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".grid-item",
                "originalId": "627b7316798ae07464529f4a|15dba1cd-83a5-2727-e87f-3f1fb1c0348b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 8,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571143389867
        },
        "e-8": {
            "id": "e-8",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-7"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".grid-item",
                "originalId": "627b7316798ae07464529f4a|15dba1cd-83a5-2727-e87f-3f1fb1c0348b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".grid-item",
                "originalId": "627b7316798ae07464529f4a|15dba1cd-83a5-2727-e87f-3f1fb1c0348b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": -8,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571143389868
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-10"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".grid-cases-link",
                "originalId": "627b7316798ae07464529f4a|5e5269e1-4adf-201a-f01a-74a44fca2053",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".grid-cases-link",
                "originalId": "627b7316798ae07464529f4a|5e5269e1-4adf-201a-f01a-74a44fca2053",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571144596370
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-9"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".grid-cases-link",
                "originalId": "627b7316798ae07464529f4a|5e5269e1-4adf-201a-f01a-74a44fca2053",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".grid-cases-link",
                "originalId": "627b7316798ae07464529f4a|5e5269e1-4adf-201a-f01a-74a44fca2053",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571144596371
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-415"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".header-holder",
                "originalId": "627b7316798ae07464529f4a|5957d72b-f7a1-c366-a162-efad1e731fcf",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".header-holder",
                "originalId": "627b7316798ae07464529f4a|5957d72b-f7a1-c366-a162-efad1e731fcf",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 7,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571217516864
        },
        "e-12": {
            "id": "e-12",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-417"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".header-holder",
                "originalId": "627b7316798ae07464529f4a|5957d72b-f7a1-c366-a162-efad1e731fcf",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".header-holder",
                "originalId": "627b7316798ae07464529f4a|5957d72b-f7a1-c366-a162-efad1e731fcf",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": -7,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571217516864
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-335"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7|0644318e-d9a8-6b55-0685-f7962d0aad47",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7|0644318e-d9a8-6b55-0685-f7962d0aad47",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 7,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571217737862
        },
        "e-14": {
            "id": "e-14",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-334"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7|0644318e-d9a8-6b55-0685-f7962d0aad47",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7|0644318e-d9a8-6b55-0685-f7962d0aad47",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571217737862
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-16"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".frontpage-employee-image-holder",
                "originalId": "627b7316798ae07464529f4a|d3cd5751-7202-9083-d813-842cb2ff2b8a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".frontpage-employee-image-holder",
                "originalId": "627b7316798ae07464529f4a|d3cd5751-7202-9083-d813-842cb2ff2b8a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571218758278
        },
        "e-16": {
            "id": "e-16",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-15"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".frontpage-employee-image-holder",
                "originalId": "627b7316798ae07464529f4a|d3cd5751-7202-9083-d813-842cb2ff2b8a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".frontpage-employee-image-holder",
                "originalId": "627b7316798ae07464529f4a|d3cd5751-7202-9083-d813-842cb2ff2b8a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571218758278
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae07464529f4a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae07464529f4a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-20-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-20-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1571225147695
        },
        "e-22": {
            "id": "e-22",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-23"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".menu-link-holder",
                "originalId": "78ed994d-da38-438d-3040-890d2aae5c18",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".menu-link-holder",
                "originalId": "78ed994d-da38-438d-3040-890d2aae5c18",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571230578225
        },
        "e-23": {
            "id": "e-23",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-22"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".menu-link-holder",
                "originalId": "78ed994d-da38-438d-3040-890d2aae5c18",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".menu-link-holder",
                "originalId": "78ed994d-da38-438d-3040-890d2aae5c18",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571230578226
        },
        "e-24": {
            "id": "e-24",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-25"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".menu-link-holder",
                "originalId": "78ed994d-da38-438d-3040-890d2aae5c18",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".menu-link-holder",
                "originalId": "78ed994d-da38-438d-3040-890d2aae5c18",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571230963509
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-24"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".menu-link-holder",
                "originalId": "78ed994d-da38-438d-3040-890d2aae5c18",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".menu-link-holder",
                "originalId": "78ed994d-da38-438d-3040-890d2aae5c18",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571230963510
        },
        "e-26": {
            "id": "e-26",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-27"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".grid-cases-link",
                "originalId": "627b7316798ae07464529f4a|5e5269e1-4adf-201a-f01a-74a44fca2053",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".grid-cases-link",
                "originalId": "627b7316798ae07464529f4a|5e5269e1-4adf-201a-f01a-74a44fca2053",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571231050146
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".grid-cases-link",
                "originalId": "627b7316798ae07464529f4a|5e5269e1-4adf-201a-f01a-74a44fca2053",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".grid-cases-link",
                "originalId": "627b7316798ae07464529f4a|5e5269e1-4adf-201a-f01a-74a44fca2053",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571231050147
        },
        "e-28": {
            "id": "e-28",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-29"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae07464529f4a|57ba2956-4b4c-961f-e9d3-944bd4b45122",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae07464529f4a|57ba2956-4b4c-961f-e9d3-944bd4b45122",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571644639825
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae07464529f4a|57ba2956-4b4c-961f-e9d3-944bd4b45122",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae07464529f4a|57ba2956-4b4c-961f-e9d3-944bd4b45122",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571644639826
        },
        "e-30": {
            "id": "e-30",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-31"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".logo-wall-image-holder",
                "originalId": "627b7316798ae07464529f4a|2f0c29a2-1ac8-af76-f54c-c15ed3bf852e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".logo-wall-image-holder",
                "originalId": "627b7316798ae07464529f4a|2f0c29a2-1ac8-af76-f54c-c15ed3bf852e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 13,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571645554577
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".logo-wall-image-holder",
                "originalId": "627b7316798ae07464529f4a|2f0c29a2-1ac8-af76-f54c-c15ed3bf852e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".logo-wall-image-holder",
                "originalId": "627b7316798ae07464529f4a|2f0c29a2-1ac8-af76-f54c-c15ed3bf852e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": -13,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571645554578
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-33"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".this-is-us-span",
                "originalId": "627b7316798ae07464529f4a|f375ad5c-4553-441b-a2b3-2e15e7ada5a5",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".this-is-us-span",
                "originalId": "627b7316798ae07464529f4a|f375ad5c-4553-441b-a2b3-2e15e7ada5a5",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 6,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571649354404
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".this-is-us-span",
                "originalId": "627b7316798ae07464529f4a|f375ad5c-4553-441b-a2b3-2e15e7ada5a5",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".this-is-us-span",
                "originalId": "627b7316798ae07464529f4a|f375ad5c-4553-441b-a2b3-2e15e7ada5a5",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": -6,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571649354405
        },
        "e-34": {
            "id": "e-34",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-35"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".footer-social",
                "originalId": "811ee09e-6d3c-9c3a-e5f2-1a0684ce713a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".footer-social",
                "originalId": "811ee09e-6d3c-9c3a-e5f2-1a0684ce713a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571657209087
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-34"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".footer-social",
                "originalId": "811ee09e-6d3c-9c3a-e5f2-1a0684ce713a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".footer-social",
                "originalId": "811ee09e-6d3c-9c3a-e5f2-1a0684ce713a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571657209088
        },
        "e-36": {
            "id": "e-36",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-37"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".footer-social",
                "originalId": "811ee09e-6d3c-9c3a-e5f2-1a0684ce711d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".footer-social",
                "originalId": "811ee09e-6d3c-9c3a-e5f2-1a0684ce711d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571660691877
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-418"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".footer-social",
                "originalId": "811ee09e-6d3c-9c3a-e5f2-1a0684ce711d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".footer-social",
                "originalId": "811ee09e-6d3c-9c3a-e5f2-1a0684ce711d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571660691878
        },
        "e-42": {
            "id": "e-42",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "811ee09e-6d3c-9c3a-e5f2-1a0684ce7102",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "811ee09e-6d3c-9c3a-e5f2-1a0684ce7102",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571730806678
        },
        "e-43": {
            "id": "e-43",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "811ee09e-6d3c-9c3a-e5f2-1a0684ce7102",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "811ee09e-6d3c-9c3a-e5f2-1a0684ce7102",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": -13,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571730806679
        },
        "e-45": {
            "id": "e-45",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".full-width-double-half",
                "originalId": "627b7316798ae08cd7529fa4|83ad6d71-41da-8097-02f4-ca5d8ae993a0",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".full-width-double-half",
                "originalId": "627b7316798ae08cd7529fa4|83ad6d71-41da-8097-02f4-ca5d8ae993a0",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 7,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571749134628
        },
        "e-46": {
            "id": "e-46",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-45"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".full-width-double-half",
                "originalId": "627b7316798ae08cd7529fa4|83ad6d71-41da-8097-02f4-ca5d8ae993a0",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".full-width-double-half",
                "originalId": "627b7316798ae08cd7529fa4|83ad6d71-41da-8097-02f4-ca5d8ae993a0",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": -7,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571749134629
        },
        "e-50": {
            "id": "e-50",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-51"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".case-desktop-mobile-image",
                "originalId": "627b7316798ae08cd7529fa4|2969ec39-2770-5540-4194-7ca211c2e1e7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".case-desktop-mobile-image",
                "originalId": "627b7316798ae08cd7529fa4|2969ec39-2770-5540-4194-7ca211c2e1e7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 7,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571754357427
        },
        "e-51": {
            "id": "e-51",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-50"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".case-desktop-mobile-image",
                "originalId": "627b7316798ae08cd7529fa4|2969ec39-2770-5540-4194-7ca211c2e1e7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".case-desktop-mobile-image",
                "originalId": "627b7316798ae08cd7529fa4|2969ec39-2770-5540-4194-7ca211c2e1e7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": -7,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571754357429
        },
        "e-52": {
            "id": "e-52",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-53"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".info-facts-holder",
                "originalId": "627b7316798ae08cd7529fa4|1f0d7283-b35d-0cee-4bdf-604995739acb",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".info-facts-holder",
                "originalId": "627b7316798ae08cd7529fa4|1f0d7283-b35d-0cee-4bdf-604995739acb",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 8,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571754814385
        },
        "e-53": {
            "id": "e-53",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".info-facts-holder",
                "originalId": "627b7316798ae08cd7529fa4|1f0d7283-b35d-0cee-4bdf-604995739acb",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".info-facts-holder",
                "originalId": "627b7316798ae08cd7529fa4|1f0d7283-b35d-0cee-4bdf-604995739acb",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571754814387
        },
        "e-55": {
            "id": "e-55",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-54"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "627b7316798ae08cd7529fa4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08cd7529fa4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571816437429
        },
        "e-57": {
            "id": "e-57",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-58"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".menu-link-holder",
                "originalId": "78ed994d-da38-438d-3040-890d2aae5c18",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".menu-link-holder",
                "originalId": "78ed994d-da38-438d-3040-890d2aae5c18",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571820098214
        },
        "e-59": {
            "id": "e-59",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08cd7529fa4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08cd7529fa4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571820288657
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae07464529f4a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae07464529f4a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571820449746
        },
        "e-62": {
            "id": "e-62",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-61"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae07464529f4a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae07464529f4a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571820449748
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-64"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae02425529fbf",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae02425529fbf",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571820582027
        },
        "e-64": {
            "id": "e-64",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-63"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae02425529fbf",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae02425529fbf",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571820582028
        },
        "e-65": {
            "id": "e-65",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-66"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "a539b213-2975-5d35-918d-6190bfc8db9f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "a539b213-2975-5d35-918d-6190bfc8db9f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571820686067
        },
        "e-67": {
            "id": "e-67",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-68"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".grid-cases-link",
                "originalId": "627b7316798ae07464529f4a|77eabb41-a51a-9f5c-9584-2805370db8f7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".grid-cases-link",
                "originalId": "627b7316798ae07464529f4a|77eabb41-a51a-9f5c-9584-2805370db8f7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571821120370
        },
        "e-70": {
            "id": "e-70",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-69"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae07464529f4a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae07464529f4a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571824192832
        },
        "e-72": {
            "id": "e-72",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae01d94529fe9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae01d94529fe9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571835038990
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae01d94529fe9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae01d94529fe9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571835038992
        },
        "e-76": {
            "id": "e-76",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae01d94529fe9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae01d94529fe9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-20-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-20-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1571910223431
        },
        "e-78": {
            "id": "e-78",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-79"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0db98529f96",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0db98529f96",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571921031840
        },
        "e-79": {
            "id": "e-79",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-78"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0db98529f96",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0db98529f96",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571921031842
        },
        "e-81": {
            "id": "e-81",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-82"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae06f48529f83",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae06f48529f83",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571921361194
        },
        "e-82": {
            "id": "e-82",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-81"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae06f48529f83",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae06f48529f83",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571921361194
        },
        "e-83": {
            "id": "e-83",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-84"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08cd7529fa4|3c7c142e-9e3a-6db8-ba4d-506cd566c154",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08cd7529fa4|3c7c142e-9e3a-6db8-ba4d-506cd566c154",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 8,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1572968492824
        },
        "e-84": {
            "id": "e-84",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-83"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08cd7529fa4|3c7c142e-9e3a-6db8-ba4d-506cd566c154",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08cd7529fa4|3c7c142e-9e3a-6db8-ba4d-506cd566c154",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1572968492824
        },
        "e-85": {
            "id": "e-85",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-86"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08cd7529fa4|6929fb85-028d-cb08-d92b-5ed718071555",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08cd7529fa4|6929fb85-028d-cb08-d92b-5ed718071555",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 7,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1573037322029
        },
        "e-86": {
            "id": "e-86",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-85"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08cd7529fa4|6929fb85-028d-cb08-d92b-5ed718071555",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08cd7529fa4|6929fb85-028d-cb08-d92b-5ed718071555",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": -7,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1573037322032
        },
        "e-91": {
            "id": "e-91",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-92"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".footer-social",
                "originalId": "811ee09e-6d3c-9c3a-e5f2-1a0684ce711d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".footer-social",
                "originalId": "811ee09e-6d3c-9c3a-e5f2-1a0684ce711d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1573123302199
        },
        "e-95": {
            "id": "e-95",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-94"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08528529f9c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08528529f9c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1573128225638
        },
        "e-100": {
            "id": "e-100",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-101"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08cd7529fa4|c425e41c-a8b7-9963-5579-c204643e598f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08cd7529fa4|c425e41c-a8b7-9963-5579-c204643e598f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 7,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1573137443906
        },
        "e-101": {
            "id": "e-101",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08cd7529fa4|c425e41c-a8b7-9963-5579-c204643e598f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08cd7529fa4|c425e41c-a8b7-9963-5579-c204643e598f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": -8,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1573137443908
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08cd7529fa4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08cd7529fa4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1574172375660
        },
        "e-104": {
            "id": "e-104",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-105"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".h2.smaller.h2service",
                "originalId": "627b7316798ae02425529fbf|995d4d54-e38e-5df2-339f-74240b9bd4da",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".h2.smaller.h2service",
                "originalId": "627b7316798ae02425529fbf|995d4d54-e38e-5df2-339f-74240b9bd4da",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 7,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1576507406182
        },
        "e-106": {
            "id": "e-106",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-107"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".p.service",
                "originalId": "627b7316798ae02425529fbf|995d4d54-e38e-5df2-339f-74240b9bd4dc",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".p.service",
                "originalId": "627b7316798ae02425529fbf|995d4d54-e38e-5df2-339f-74240b9bd4dc",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 7,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1576507576253
        },
        "e-108": {
            "id": "e-108",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-109"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".service-col-holder",
                "originalId": "627b7316798ae02425529fbf|f9dcf6cf-a294-a0d3-3c8a-056dec57cf2d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".service-col-holder",
                "originalId": "627b7316798ae02425529fbf|f9dcf6cf-a294-a0d3-3c8a-056dec57cf2d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 7,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1576507589783
        },
        "e-111": {
            "id": "e-111",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-110"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae07464529f4a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae07464529f4a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588776841678
        },
        "e-112": {
            "id": "e-112",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7|0644318e-d9a8-6b55-0685-f7962d0aad46",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7|0644318e-d9a8-6b55-0685-f7962d0aad46",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-55-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1588846638015
        },
        "e-114": {
            "id": "e-114",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-113"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae07464529f4a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae07464529f4a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1588846866883
        },
        "e-115": {
            "id": "e-115",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae07464529f4a|df83af8f-68e3-cf76-b606-549a3669dbce",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae07464529f4a|df83af8f-68e3-cf76-b606-549a3669dbce",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-59-p",
                "smoothing": 65,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1591773836013
        },
        "e-116": {
            "id": "e-116",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-117"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae06f48529f83|232710ec-7ebe-f5bc-7da2-7b25d2760000",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae06f48529f83|232710ec-7ebe-f5bc-7da2-7b25d2760000",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1591880759507
        },
        "e-117": {
            "id": "e-117",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-116"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae06f48529f83|232710ec-7ebe-f5bc-7da2-7b25d2760000",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae06f48529f83|232710ec-7ebe-f5bc-7da2-7b25d2760000",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": -15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1591880759507
        },
        "e-120": {
            "id": "e-120",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-121"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".footer-social-new-tab",
                "originalId": "811ee09e-6d3c-9c3a-e5f2-1a0684ce7118",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".footer-social-new-tab",
                "originalId": "811ee09e-6d3c-9c3a-e5f2-1a0684ce7118",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1591952201893
        },
        "e-121": {
            "id": "e-121",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-416"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".footer-social-new-tab",
                "originalId": "811ee09e-6d3c-9c3a-e5f2-1a0684ce7118",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".footer-social-new-tab",
                "originalId": "811ee09e-6d3c-9c3a-e5f2-1a0684ce7118",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1591952201896
        },
        "e-122": {
            "id": "e-122",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-123"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae02425529fbf",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae02425529fbf",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1591952537838
        },
        "e-124": {
            "id": "e-124",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-125"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae01d94529fe9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae01d94529fe9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1591953119173
        },
        "e-126": {
            "id": "e-126",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-127"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae06f48529f83",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae06f48529f83",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1591953860244
        },
        "e-128": {
            "id": "e-128",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-129"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae07464529f4a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae07464529f4a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1591954161944
        },
        "e-130": {
            "id": "e-130",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-131"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0db98529f96",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0db98529f96",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1591954594852
        },
        "e-132": {
            "id": "e-132",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae02425529fbf",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae02425529fbf",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-20-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-20-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1592224459124
        },
        "e-133": {
            "id": "e-133",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae06f48529f83",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae06f48529f83",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-20-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-20-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1592224497055
        },
        "e-134": {
            "id": "e-134",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0db98529f96",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0db98529f96",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-20-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-20-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1592224511826
        },
        "e-135": {
            "id": "e-135",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08cd7529fa4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08cd7529fa4",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-20-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-20-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1592224524391
        },
        "e-136": {
            "id": "e-136",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08528529f9c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08528529f9c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-20-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-20-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1592224574422
        },
        "e-137": {
            "id": "e-137",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-138"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "babfc882-7eb0-3986-f48a-3fa039ccc1e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "babfc882-7eb0-3986-f48a-3fa039ccc1e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592227834862
        },
        "e-139": {
            "id": "e-139",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-140"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".contact-contact-info-holder",
                "originalId": "627b7316798ae0db98529f96|368f2354-36b4-f235-65e5-7c8e7767c7b6",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".contact-contact-info-holder",
                "originalId": "627b7316798ae0db98529f96|368f2354-36b4-f235-65e5-7c8e7767c7b6",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592308963217
        },
        "e-140": {
            "id": "e-140",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-139"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".contact-contact-info-holder",
                "originalId": "627b7316798ae0db98529f96|368f2354-36b4-f235-65e5-7c8e7767c7b6",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".contact-contact-info-holder",
                "originalId": "627b7316798ae0db98529f96|368f2354-36b4-f235-65e5-7c8e7767c7b6",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592308963221
        },
        "e-141": {
            "id": "e-141",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-142"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0db98529f96|4c7ac54f-16f3-59cb-9ad9-646638870393",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0db98529f96|4c7ac54f-16f3-59cb-9ad9-646638870393",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592311005361
        },
        "e-143": {
            "id": "e-143",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-144"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0db98529f96|4c7ac54f-16f3-59cb-9ad9-646638870393",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0db98529f96|4c7ac54f-16f3-59cb-9ad9-646638870393",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592311005361
        },
        "e-145": {
            "id": "e-145",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-146"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae06f48529f83|39a6a9ea-6b0a-f5e3-d8a5-2708005b3bb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae06f48529f83|39a6a9ea-6b0a-f5e3-d8a5-2708005b3bb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 7,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592318494920
        },
        "e-146": {
            "id": "e-146",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-145"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae06f48529f83|39a6a9ea-6b0a-f5e3-d8a5-2708005b3bb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae06f48529f83|39a6a9ea-6b0a-f5e3-d8a5-2708005b3bb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592318494920
        },
        "e-148": {
            "id": "e-148",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-147"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae02425529fbf",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae02425529fbf",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592385723080
        },
        "e-150": {
            "id": "e-150",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-149"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae01d94529fe9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae01d94529fe9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592385929894
        },
        "e-152": {
            "id": "e-152",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-151"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae06f48529f83",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae06f48529f83",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592385940126
        },
        "e-154": {
            "id": "e-154",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-153"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0db98529f96",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0db98529f96",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592385949914
        },
        "e-155": {
            "id": "e-155",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-156"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae07464529f4a|59a99e1d-218e-5a68-051a-08f3d8feaac2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae07464529f4a|59a99e1d-218e-5a68-051a-08f3d8feaac2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592394105387
        },
        "e-157": {
            "id": "e-157",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-158"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".a",
                "originalId": "627b7316798ae07464529f4a|96a794ae-8f34-7629-b5cd-adeebf15a5a1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".a",
                "originalId": "627b7316798ae07464529f4a|96a794ae-8f34-7629-b5cd-adeebf15a5a1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592477888301
        },
        "e-158": {
            "id": "e-158",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-157"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".a",
                "originalId": "627b7316798ae07464529f4a|96a794ae-8f34-7629-b5cd-adeebf15a5a1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".a",
                "originalId": "627b7316798ae07464529f4a|96a794ae-8f34-7629-b5cd-adeebf15a5a1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592477888313
        },
        "e-159": {
            "id": "e-159",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-160"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".button.case-frontpage.a",
                "originalId": "627b7316798ae07464529f4a|798d480c-745a-d889-0f51-14618b13abf0",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button.case-frontpage.a",
                "originalId": "627b7316798ae07464529f4a|798d480c-745a-d889-0f51-14618b13abf0",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592490719037
        },
        "e-161": {
            "id": "e-161",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-65",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-162"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "112f17fb-8786-d4bb-4259-bd3a19013b18",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "112f17fb-8786-d4bb-4259-bd3a19013b18",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1554284100881
        },
        "e-163": {
            "id": "e-163",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-66",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-164"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "112f17fb-8786-d4bb-4259-bd3a19013b19",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "112f17fb-8786-d4bb-4259-bd3a19013b19",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1554285209956
        },
        "e-165": {
            "id": "e-165",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-166"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".menu-mobile-link",
                "originalId": "31465f62-5d65-4006-125b-526696ec0ef7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".menu-mobile-link",
                "originalId": "31465f62-5d65-4006-125b-526696ec0ef7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592560153690
        },
        "e-167": {
            "id": "e-167",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-168"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae02425529fbf|88117885-673f-2a01-72cc-4fb57707a883",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae02425529fbf|88117885-673f-2a01-72cc-4fb57707a883",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592562410396
        },
        "e-170": {
            "id": "e-170",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-169"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08528529f9c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08528529f9c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592814350274
        },
        "e-172": {
            "id": "e-172",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-171"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae05a2e529fa8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae05a2e529fa8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592834111838
        },
        "e-173": {
            "id": "e-173",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-174"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae05a2e529fa8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae05a2e529fa8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592834124319
        },
        "e-174": {
            "id": "e-174",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-173"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae05a2e529fa8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae05a2e529fa8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592834124350
        },
        "e-175": {
            "id": "e-175",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae05a2e529fa8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae05a2e529fa8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-20-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-20-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1592903451646
        },
        "e-176": {
            "id": "e-176",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-177"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".article-headline-link",
                "originalId": "627b7316798ae05a2e529fa8|e6a50dd4-6a6d-80b8-8336-c1bd39baf191",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".article-headline-link",
                "originalId": "627b7316798ae05a2e529fa8|e6a50dd4-6a6d-80b8-8336-c1bd39baf191",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592911525853
        },
        "e-178": {
            "id": "e-178",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-179"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".small-article-image.a",
                "originalId": "627b7316798ae05a2e529fa8|756f7804-a7e3-5fec-9518-c3da8dce7bc3",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".small-article-image.a",
                "originalId": "627b7316798ae05a2e529fa8|756f7804-a7e3-5fec-9518-c3da8dce7bc3",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592911542582
        },
        "e-180": {
            "id": "e-180",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-181"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae05a2e529fa8|9b8c2b08-54b8-2153-8061-19b85987d68c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae05a2e529fa8|9b8c2b08-54b8-2153-8061-19b85987d68c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592920554884
        },
        "e-182": {
            "id": "e-182",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-183"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae05a2e529fa8|1a7db203-b755-3e34-bb84-e63ebe609eb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae05a2e529fa8|1a7db203-b755-3e34-bb84-e63ebe609eb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592920565030
        },
        "e-184": {
            "id": "e-184",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-185"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae05a2e529fa8|756f7804-a7e3-5fec-9518-c3da8dce7bc3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae05a2e529fa8|756f7804-a7e3-5fec-9518-c3da8dce7bc3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592921238254
        },
        "e-185": {
            "id": "e-185",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-184"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae05a2e529fa8|756f7804-a7e3-5fec-9518-c3da8dce7bc3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae05a2e529fa8|756f7804-a7e3-5fec-9518-c3da8dce7bc3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592921238261
        },
        "e-186": {
            "id": "e-186",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-67",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-187"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae05a2e529fa8|e26c8745-7cb9-86ba-597b-d022e0246595",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae05a2e529fa8|e26c8745-7cb9-86ba-597b-d022e0246595",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592921293333
        },
        "e-187": {
            "id": "e-187",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-68",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-186"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae05a2e529fa8|e26c8745-7cb9-86ba-597b-d022e0246595",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae05a2e529fa8|e26c8745-7cb9-86ba-597b-d022e0246595",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592921293339
        },
        "e-188": {
            "id": "e-188",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-189"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08f4c529f9f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08f4c529f9f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592921631783
        },
        "e-189": {
            "id": "e-189",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-188"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08f4c529f9f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08f4c529f9f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592921631790
        },
        "e-191": {
            "id": "e-191",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-69",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-190"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae07464529f4a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae07464529f4a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592987150570
        },
        "e-193": {
            "id": "e-193",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-192"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae05a2e529fa8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae05a2e529fa8",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592991237262
        },
        "e-194": {
            "id": "e-194",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-195"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae05a2e529fa8|e26c8745-7cb9-86ba-597b-d022e0246595",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae05a2e529fa8|e26c8745-7cb9-86ba-597b-d022e0246595",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1592991352115
        },
        "e-198": {
            "id": "e-198",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-199"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08f4c529f9f|c0adfcd7-36f1-338f-7b64-8260b50315f0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08f4c529f9f|c0adfcd7-36f1-338f-7b64-8260b50315f0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1593002870487
        },
        "e-199": {
            "id": "e-199",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-198"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08f4c529f9f|c0adfcd7-36f1-338f-7b64-8260b50315f0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08f4c529f9f|c0adfcd7-36f1-338f-7b64-8260b50315f0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1593002870487
        },
        "e-200": {
            "id": "e-200",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08f4c529f9f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08f4c529f9f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-20-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-20-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1593007395999
        },
        "e-203": {
            "id": "e-203",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-204"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae07464529f4a|d397e96f-6960-338a-cfb8-ab408a308540",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae07464529f4a|d397e96f-6960-338a-cfb8-ab408a308540",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1593008535521
        },
        "e-204": {
            "id": "e-204",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-203"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae07464529f4a|d397e96f-6960-338a-cfb8-ab408a308540",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae07464529f4a|d397e96f-6960-338a-cfb8-ab408a308540",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": -15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1593008535521
        },
        "e-206": {
            "id": "e-206",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-205"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae04742529f72",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae04742529f72",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1593093782224
        },
        "e-207": {
            "id": "e-207",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-208"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae04742529f72|588d3a93-1b54-eb21-eb63-b352d21cf434",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae04742529f72|588d3a93-1b54-eb21-eb63-b352d21cf434",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 7,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1593093835046
        },
        "e-208": {
            "id": "e-208",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-207"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae04742529f72|588d3a93-1b54-eb21-eb63-b352d21cf434",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae04742529f72|588d3a93-1b54-eb21-eb63-b352d21cf434",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1593093835046
        },
        "e-209": {
            "id": "e-209",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-210"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae04742529f72|03cbefe6-75ac-b8b5-d1a1-71e82ee08327",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae04742529f72|03cbefe6-75ac-b8b5-d1a1-71e82ee08327",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1593093945082
        },
        "e-211": {
            "id": "e-211",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-212"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae04742529f72",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae04742529f72",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1593156466431
        },
        "e-212": {
            "id": "e-212",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-211"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae04742529f72",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae04742529f72",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1593156466440
        },
        "e-213": {
            "id": "e-213",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae04742529f72",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae04742529f72",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-20-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-20-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1593156498605
        },
        "e-214": {
            "id": "e-214",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-215"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08cd7529fa4|586443e3-5564-a19c-dd0c-22f4c60400d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08cd7529fa4|586443e3-5564-a19c-dd0c-22f4c60400d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1593173336255
        },
        "e-216": {
            "id": "e-216",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-217"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".body",
                "originalId": "627b7316798ae08cd7529fa4|5daecf33a01117f2ecbf4550",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".body",
                "originalId": "627b7316798ae08cd7529fa4|5daecf33a01117f2ecbf4550",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1593515958081
        },
        "e-218": {
            "id": "e-218",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-219"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0286d529fa6|2dd6ffc3-dcdf-3ef9-f8df-30b602b04717",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0286d529fa6|2dd6ffc3-dcdf-3ef9-f8df-30b602b04717",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597655693538
        },
        "e-219": {
            "id": "e-219",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-218"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0286d529fa6|2dd6ffc3-dcdf-3ef9-f8df-30b602b04717",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0286d529fa6|2dd6ffc3-dcdf-3ef9-f8df-30b602b04717",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597655693538
        },
        "e-222": {
            "id": "e-222",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0286d529fa6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0286d529fa6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-20-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-20-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1597655693538
        },
        "e-223": {
            "id": "e-223",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-224"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0286d529fa6|57ba2956-4b4c-961f-e9d3-944bd4b45122",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0286d529fa6|57ba2956-4b4c-961f-e9d3-944bd4b45122",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597655693538
        },
        "e-224": {
            "id": "e-224",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-223"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0286d529fa6|57ba2956-4b4c-961f-e9d3-944bd4b45122",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0286d529fa6|57ba2956-4b4c-961f-e9d3-944bd4b45122",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597655693538
        },
        "e-225": {
            "id": "e-225",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-226"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0286d529fa6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0286d529fa6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597655693538
        },
        "e-226": {
            "id": "e-226",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-225"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0286d529fa6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0286d529fa6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597655693538
        },
        "e-228": {
            "id": "e-228",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-227"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0286d529fa6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0286d529fa6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597655693538
        },
        "e-230": {
            "id": "e-230",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-229"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0286d529fa6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0286d529fa6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597655693538
        },
        "e-233": {
            "id": "e-233",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-71",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-232"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0286d529fa6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0286d529fa6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597655693538
        },
        "e-234": {
            "id": "e-234",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0286d529fa6|df83af8f-68e3-cf76-b606-549a3669dbce",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0286d529fa6|df83af8f-68e3-cf76-b606-549a3669dbce",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-59-p",
                "smoothing": 65,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1597655693538
        },
        "e-235": {
            "id": "e-235",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-236"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0286d529fa6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0286d529fa6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597655693538
        },
        "e-237": {
            "id": "e-237",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-238"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0286d529fa6|59a99e1d-218e-5a68-051a-08f3d8feaac2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0286d529fa6|59a99e1d-218e-5a68-051a-08f3d8feaac2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597655693538
        },
        "e-240": {
            "id": "e-240",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-69",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-239"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0286d529fa6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0286d529fa6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597655693538
        },
        "e-243": {
            "id": "e-243",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-244"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0286d529fa6|d397e96f-6960-338a-cfb8-ab408a308540",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0286d529fa6|d397e96f-6960-338a-cfb8-ab408a308540",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597655693538
        },
        "e-244": {
            "id": "e-244",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-243"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0286d529fa6|d397e96f-6960-338a-cfb8-ab408a308540",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0286d529fa6|d397e96f-6960-338a-cfb8-ab408a308540",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": -15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597655693538
        },
        "e-245": {
            "id": "e-245",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-72",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-246"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae07464529f4a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae07464529f4a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597999881450
        },
        "e-247": {
            "id": "e-247",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-248"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0bd47529fe5|4002f7fd-734e-143c-5f8f-ab7e1f60ba9e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0bd47529fe5|4002f7fd-734e-143c-5f8f-ab7e1f60ba9e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1615970418640
        },
        "e-253": {
            "id": "e-253",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-254"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0bd47529fe5|28962c61-80ca-4ac6-5405-581a7c966630",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0bd47529fe5|28962c61-80ca-4ac6-5405-581a7c966630",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1615972001945
        },
        "e-254": {
            "id": "e-254",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-253"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0bd47529fe5|28962c61-80ca-4ac6-5405-581a7c966630",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0bd47529fe5|28962c61-80ca-4ac6-5405-581a7c966630",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1615972001945
        },
        "e-255": {
            "id": "e-255",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-256"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0bd47529fe5|4507a1b8-62a1-ebc8-4bab-8e92de16f52c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0bd47529fe5|4507a1b8-62a1-ebc8-4bab-8e92de16f52c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1615972550188
        },
        "e-256": {
            "id": "e-256",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-255"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0bd47529fe5|4507a1b8-62a1-ebc8-4bab-8e92de16f52c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0bd47529fe5|4507a1b8-62a1-ebc8-4bab-8e92de16f52c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1615972550188
        },
        "e-259": {
            "id": "e-259",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-260"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0bd47529fe5|49d26910-1638-49df-a8e7-d87098ad1fef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0bd47529fe5|49d26910-1638-49df-a8e7-d87098ad1fef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1615974929536
        },
        "e-260": {
            "id": "e-260",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-259"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0bd47529fe5|49d26910-1638-49df-a8e7-d87098ad1fef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0bd47529fe5|49d26910-1638-49df-a8e7-d87098ad1fef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1615974929536
        },
        "e-261": {
            "id": "e-261",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-262"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0bd47529fe5|e0588551-e393-7223-7ac8-d338cc6ab408",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0bd47529fe5|e0588551-e393-7223-7ac8-d338cc6ab408",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1615976199315
        },
        "e-264": {
            "id": "e-264",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-74",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-263"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08528529f9c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08528529f9c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1619688963638
        },
        "e-266": {
            "id": "e-266",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-75",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-265"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08528529f9c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08528529f9c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1619689438123
        },
        "e-267": {
            "id": "e-267",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-268"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae01122529f99",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae01122529f99",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1630665515217
        },
        "e-268": {
            "id": "e-268",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-267"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae01122529f99",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae01122529f99",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1630665515217
        },
        "e-269": {
            "id": "e-269",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-270"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae01122529f99|232710ec-7ebe-f5bc-7da2-7b25d2760000",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae01122529f99|232710ec-7ebe-f5bc-7da2-7b25d2760000",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1630665515217
        },
        "e-270": {
            "id": "e-270",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-269"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae01122529f99|232710ec-7ebe-f5bc-7da2-7b25d2760000",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae01122529f99|232710ec-7ebe-f5bc-7da2-7b25d2760000",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": -15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1630665515217
        },
        "e-271": {
            "id": "e-271",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-272"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae01122529f99",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae01122529f99",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1630665515217
        },
        "e-273": {
            "id": "e-273",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-76",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae01122529f99",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae01122529f99",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-76-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-76-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1630665515217
        },
        "e-274": {
            "id": "e-274",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-275"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae01122529f99|39a6a9ea-6b0a-f5e3-d8a5-2708005b3bb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae01122529f99|39a6a9ea-6b0a-f5e3-d8a5-2708005b3bb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 7,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1630665515217
        },
        "e-275": {
            "id": "e-275",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-274"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae01122529f99|39a6a9ea-6b0a-f5e3-d8a5-2708005b3bb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae01122529f99|39a6a9ea-6b0a-f5e3-d8a5-2708005b3bb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1630665515217
        },
        "e-277": {
            "id": "e-277",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-276"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae01122529f99",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae01122529f99",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1630665515217
        },
        "e-280": {
            "id": "e-280",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-77",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-281"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae07464529f4a|a7f8cc13-b61e-e2d3-8ec6-fb190751f738",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae07464529f4a|a7f8cc13-b61e-e2d3-8ec6-fb190751f738",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1639402632394
        },
        "e-282": {
            "id": "e-282",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-283"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0a22d529f9a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0a22d529f9a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1643280230830
        },
        "e-285": {
            "id": "e-285",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-284"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0a22d529f9a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0a22d529f9a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1643280302688
        },
        "e-286": {
            "id": "e-286",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0a22d529f9a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0a22d529f9a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-20-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-20-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1643280363800
        },
        "e-287": {
            "id": "e-287",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-288"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0a22d529f9a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0a22d529f9a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1643280376651
        },
        "e-288": {
            "id": "e-288",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-287"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0a22d529f9a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0a22d529f9a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1643280376653
        },
        "e-289": {
            "id": "e-289",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-290"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0a22d529f9a|e4341560-8a40-e4fe-a69d-66eb9a1df5f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0a22d529f9a|e4341560-8a40-e4fe-a69d-66eb9a1df5f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1643281506964
        },
        "e-290": {
            "id": "e-290",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-289"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae0a22d529f9a|e4341560-8a40-e4fe-a69d-66eb9a1df5f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae0a22d529f9a|e4341560-8a40-e4fe-a69d-66eb9a1df5f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": -15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1643281506964
        },
        "e-291": {
            "id": "e-291",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-292"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae08f4c529f9f|1318d16a-e00b-a2d9-1c36-a2c3d3f53162",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae08f4c529f9f|1318d16a-e00b-a2d9-1c36-a2c3d3f53162",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1649153238209
        },
        "e-293": {
            "id": "e-293",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-294"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7|2dd6ffc3-dcdf-3ef9-f8df-30b602b04717",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7|2dd6ffc3-dcdf-3ef9-f8df-30b602b04717",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652183313882
        },
        "e-294": {
            "id": "e-294",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-293"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7|2dd6ffc3-dcdf-3ef9-f8df-30b602b04717",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7|2dd6ffc3-dcdf-3ef9-f8df-30b602b04717",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652183313882
        },
        "e-297": {
            "id": "e-297",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-78",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-78-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-78-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1652183313882
        },
        "e-298": {
            "id": "e-298",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-299"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7|57ba2956-4b4c-961f-e9d3-944bd4b45122",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7|57ba2956-4b4c-961f-e9d3-944bd4b45122",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652183313882
        },
        "e-299": {
            "id": "e-299",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-298"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7|57ba2956-4b4c-961f-e9d3-944bd4b45122",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7|57ba2956-4b4c-961f-e9d3-944bd4b45122",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652183313882
        },
        "e-300": {
            "id": "e-300",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-301"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652183313882
        },
        "e-301": {
            "id": "e-301",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-300"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652183313882
        },
        "e-303": {
            "id": "e-303",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-79",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-302"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652183313882
        },
        "e-305": {
            "id": "e-305",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-322"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652183313882
        },
        "e-308": {
            "id": "e-308",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-325"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652183313882
        },
        "e-310": {
            "id": "e-310",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-331"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652183313882
        },
        "e-315": {
            "id": "e-315",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-80",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-314"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652183313882
        },
        "e-316": {
            "id": "e-316",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-317"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7|d397e96f-6960-338a-cfb8-ab408a308540",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7|d397e96f-6960-338a-cfb8-ab408a308540",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652183313882
        },
        "e-317": {
            "id": "e-317",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-316"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7|d397e96f-6960-338a-cfb8-ab408a308540",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7|d397e96f-6960-338a-cfb8-ab408a308540",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": -15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652183313882
        },
        "e-318": {
            "id": "e-318",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-81",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-319"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652183313882
        },
        "e-320": {
            "id": "e-320",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-77",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-321"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7|a7f8cc13-b61e-e2d3-8ec6-fb190751f738",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7|a7f8cc13-b61e-e2d3-8ec6-fb190751f738",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652183313882
        },
        "e-330": {
            "id": "e-330",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-331"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7|696e70d1-fbdb-72fd-58e0-374c20547288",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7|696e70d1-fbdb-72fd-58e0-374c20547288",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1649755591218
        },
        "e-332": {
            "id": "e-332",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7|0644318e-d9a8-6b55-0685-f7962d0aad46",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7|0644318e-d9a8-6b55-0685-f7962d0aad46",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-55-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1588846638015
        },
        "e-334": {
            "id": "e-334",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-335"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7|0644318e-d9a8-6b55-0685-f7962d0aad47",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7|0644318e-d9a8-6b55-0685-f7962d0aad47",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 7,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571217737862
        },
        "e-335": {
            "id": "e-335",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-334"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7|0644318e-d9a8-6b55-0685-f7962d0aad47",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7|0644318e-d9a8-6b55-0685-f7962d0aad47",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571217737862
        },
        "e-336": {
            "id": "e-336",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-337"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b75eeac68b0746d0edcde",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b75eeac68b0746d0edcde",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652258287706
        },
        "e-337": {
            "id": "e-337",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-336"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b75eeac68b0746d0edcde",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b75eeac68b0746d0edcde",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652258287706
        },
        "e-338": {
            "id": "e-338",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-339"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b75eeac68b0746d0edcde",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b75eeac68b0746d0edcde",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652258287706
        },
        "e-340": {
            "id": "e-340",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-86",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b75eeac68b0746d0edcde",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b75eeac68b0746d0edcde",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-86-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-86-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1652258287706
        },
        "e-342": {
            "id": "e-342",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-341"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b75eeac68b0746d0edcde",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b75eeac68b0746d0edcde",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652258287706
        },
        "e-343": {
            "id": "e-343",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-344"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b75eeac68b0746d0edcde|88117885-673f-2a01-72cc-4fb57707a883",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b75eeac68b0746d0edcde|88117885-673f-2a01-72cc-4fb57707a883",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652258287706
        },
        "e-345": {
            "id": "e-345",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-87",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-346"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b75eeac68b0746d0edcde",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b75eeac68b0746d0edcde",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652260188996
        },
        "e-347": {
            "id": "e-347",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-348"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b87a4fca806260dce0389",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b87a4fca806260dce0389",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652262820701
        },
        "e-348": {
            "id": "e-348",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-347"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b87a4fca806260dce0389",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b87a4fca806260dce0389",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652262820701
        },
        "e-349": {
            "id": "e-349",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-88",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b87a4fca806260dce0389",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b87a4fca806260dce0389",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-88-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-88-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1652262820701
        },
        "e-350": {
            "id": "e-350",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-351"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b87a4fca806260dce0389",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b87a4fca806260dce0389",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652262820701
        },
        "e-353": {
            "id": "e-353",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-352"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b87a4fca806260dce0389",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b87a4fca806260dce0389",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652262820701
        },
        "e-354": {
            "id": "e-354",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-87",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-355"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b87a4fca806260dce0389",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b87a4fca806260dce0389",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652263078439
        },
        "e-356": {
            "id": "e-356",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-357"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b9538fca8068629ce7373",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b9538fca8068629ce7373",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652266297015
        },
        "e-357": {
            "id": "e-357",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-356"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b9538fca8068629ce7373",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b9538fca8068629ce7373",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652266297015
        },
        "e-358": {
            "id": "e-358",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-359"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b9538fca8068629ce7373|232710ec-7ebe-f5bc-7da2-7b25d2760000",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b9538fca8068629ce7373|232710ec-7ebe-f5bc-7da2-7b25d2760000",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652266297015
        },
        "e-359": {
            "id": "e-359",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-358"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b9538fca8068629ce7373|232710ec-7ebe-f5bc-7da2-7b25d2760000",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b9538fca8068629ce7373|232710ec-7ebe-f5bc-7da2-7b25d2760000",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": -15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652266297015
        },
        "e-360": {
            "id": "e-360",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-361"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b9538fca8068629ce7373",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b9538fca8068629ce7373",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652266297015
        },
        "e-362": {
            "id": "e-362",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-90",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b9538fca8068629ce7373",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b9538fca8068629ce7373",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-90-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-90-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1652266297015
        },
        "e-363": {
            "id": "e-363",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-364"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b9538fca8068629ce7373|39a6a9ea-6b0a-f5e3-d8a5-2708005b3bb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b9538fca8068629ce7373|39a6a9ea-6b0a-f5e3-d8a5-2708005b3bb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 7,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652266297015
        },
        "e-364": {
            "id": "e-364",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-363"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b9538fca8068629ce7373|39a6a9ea-6b0a-f5e3-d8a5-2708005b3bb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b9538fca8068629ce7373|39a6a9ea-6b0a-f5e3-d8a5-2708005b3bb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652266297015
        },
        "e-366": {
            "id": "e-366",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-365"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b9538fca8068629ce7373",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b9538fca8068629ce7373",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652266297015
        },
        "e-367": {
            "id": "e-367",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-87",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-368"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b9538fca8068629ce7373",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b9538fca8068629ce7373",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652266351228
        },
        "e-369": {
            "id": "e-369",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-91",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-370"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b9538fca8068629ce7373|c5f299fa-ad33-1b36-a975-b9b1248f63f4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b9538fca8068629ce7373|c5f299fa-ad33-1b36-a975-b9b1248f63f4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652273120880
        },
        "e-370": {
            "id": "e-370",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-95",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-369"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b9538fca8068629ce7373|c5f299fa-ad33-1b36-a975-b9b1248f63f4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b9538fca8068629ce7373|c5f299fa-ad33-1b36-a975-b9b1248f63f4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652273120885
        },
        "e-371": {
            "id": "e-371",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-91",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-372"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b9538fca8068629ce7373|45127736-1951-f1fd-99d1-baf3226e4fb3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b9538fca8068629ce7373|45127736-1951-f1fd-99d1-baf3226e4fb3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652273459652
        },
        "e-373": {
            "id": "e-373",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-91",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-374"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b9538fca8068629ce7373|a9c2351c-7850-8345-f083-435aa19a6ede",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b9538fca8068629ce7373|a9c2351c-7850-8345-f083-435aa19a6ede",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652273476709
        },
        "e-376": {
            "id": "e-376",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-375"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bbc538d528a75d44cfcab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bbc538d528a75d44cfcab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652276308082
        },
        "e-377": {
            "id": "e-377",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-378"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bbc538d528a75d44cfcab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bbc538d528a75d44cfcab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652276308082
        },
        "e-378": {
            "id": "e-378",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-377"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bbc538d528a75d44cfcab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bbc538d528a75d44cfcab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652276308082
        },
        "e-379": {
            "id": "e-379",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-92",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bbc538d528a75d44cfcab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bbc538d528a75d44cfcab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-92-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-92-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1652276308082
        },
        "e-380": {
            "id": "e-380",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-381"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bbc538d528a75d44cfcab|9b8c2b08-54b8-2153-8061-19b85987d68c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bbc538d528a75d44cfcab|9b8c2b08-54b8-2153-8061-19b85987d68c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652276308082
        },
        "e-382": {
            "id": "e-382",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-383"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bbc538d528a75d44cfcab|1a7db203-b755-3e34-bb84-e63ebe609eb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bbc538d528a75d44cfcab|1a7db203-b755-3e34-bb84-e63ebe609eb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652276308082
        },
        "e-384": {
            "id": "e-384",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-385"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bbc538d528a75d44cfcab|756f7804-a7e3-5fec-9518-c3da8dce7bc3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bbc538d528a75d44cfcab|756f7804-a7e3-5fec-9518-c3da8dce7bc3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652276308082
        },
        "e-385": {
            "id": "e-385",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-384"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bbc538d528a75d44cfcab|756f7804-a7e3-5fec-9518-c3da8dce7bc3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bbc538d528a75d44cfcab|756f7804-a7e3-5fec-9518-c3da8dce7bc3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652276308082
        },
        "e-386": {
            "id": "e-386",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-67",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-387"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bbc538d528a75d44cfcab|e26c8745-7cb9-86ba-597b-d022e0246595",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bbc538d528a75d44cfcab|e26c8745-7cb9-86ba-597b-d022e0246595",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652276308082
        },
        "e-387": {
            "id": "e-387",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-68",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-386"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bbc538d528a75d44cfcab|e26c8745-7cb9-86ba-597b-d022e0246595",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bbc538d528a75d44cfcab|e26c8745-7cb9-86ba-597b-d022e0246595",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652276308082
        },
        "e-389": {
            "id": "e-389",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-388"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bbc538d528a75d44cfcab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bbc538d528a75d44cfcab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652276308082
        },
        "e-390": {
            "id": "e-390",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-391"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bbc538d528a75d44cfcab|e26c8745-7cb9-86ba-597b-d022e0246595",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bbc538d528a75d44cfcab|e26c8745-7cb9-86ba-597b-d022e0246595",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652276308082
        },
        "e-392": {
            "id": "e-392",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-87",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-393"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bbc538d528a75d44cfcab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bbc538d528a75d44cfcab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652276416544
        },
        "e-394": {
            "id": "e-394",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-93",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-395"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bbc538d528a75d44cfcab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bbc538d528a75d44cfcab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652280499781
        },
        "e-396": {
            "id": "e-396",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-397"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bcdafc555cc9875991e86",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bcdafc555cc9875991e86",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652280751568
        },
        "e-397": {
            "id": "e-397",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-396"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bcdafc555cc9875991e86",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bcdafc555cc9875991e86",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652280751568
        },
        "e-398": {
            "id": "e-398",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-399"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bcdafc555cc9875991e86",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bcdafc555cc9875991e86",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652280751568
        },
        "e-400": {
            "id": "e-400",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-94",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bcdafc555cc9875991e86",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bcdafc555cc9875991e86",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-94-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-94-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1652280751568
        },
        "e-401": {
            "id": "e-401",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-402"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bcdafc555cc9875991e86|4c7ac54f-16f3-59cb-9ad9-646638870393",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bcdafc555cc9875991e86|4c7ac54f-16f3-59cb-9ad9-646638870393",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652280751568
        },
        "e-403": {
            "id": "e-403",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-404"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bcdafc555cc9875991e86|4c7ac54f-16f3-59cb-9ad9-646638870393",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bcdafc555cc9875991e86|4c7ac54f-16f3-59cb-9ad9-646638870393",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652280751568
        },
        "e-406": {
            "id": "e-406",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-405"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bcdafc555cc9875991e86",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bcdafc555cc9875991e86",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652280751568
        },
        "e-407": {
            "id": "e-407",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-87",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-408"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627bcdafc555cc9875991e86",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627bcdafc555cc9875991e86",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652280915086
        },
        "e-409": {
            "id": "e-409",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-410"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7|157be56b-7073-8b7b-ecab-ca13fdbd2be3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7|157be56b-7073-8b7b-ecab-ca13fdbd2be3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652349425244
        },
        "e-411": {
            "id": "e-411",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-96",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-412"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7|0a93e6da-df59-5230-3ebe-02986d58717f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7|0a93e6da-df59-5230-3ebe-02986d58717f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652356967975
        },
        "e-412": {
            "id": "e-412",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-97",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-411"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7|0a93e6da-df59-5230-3ebe-02986d58717f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7|0a93e6da-df59-5230-3ebe-02986d58717f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652356968009
        },
        "e-413": {
            "id": "e-413",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-77",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-414"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "627b7316798ae054d0529fa7|60275331-51cf-b5da-ae28-6c4b5615bed0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "627b7316798ae054d0529fa7|60275331-51cf-b5da-ae28-6c4b5615bed0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652360569137
        },
        "e-415": {
            "id": "e-415",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-99",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-417"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".header-holder",
                "originalId": "5f43bf9f7f6d3575317f50af|5957d72b-f7a1-c366-a162-efad1e731fcf",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".header-holder",
                "originalId": "5f43bf9f7f6d3575317f50af|5957d72b-f7a1-c366-a162-efad1e731fcf",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": -7,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571217516864
        },
        "e-416": {
            "id": "e-416",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-100",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-121"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".footer-social-new-tab",
                "originalId": "811ee09e-6d3c-9c3a-e5f2-1a0684ce7118",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".footer-social-new-tab",
                "originalId": "811ee09e-6d3c-9c3a-e5f2-1a0684ce7118",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1591952201893
        },
        "e-417": {
            "id": "e-417",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-98",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-415"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".header-holder",
                "originalId": "5f43bf9f7f6d3575317f50af|5957d72b-f7a1-c366-a162-efad1e731fcf",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".header-holder",
                "originalId": "5f43bf9f7f6d3575317f50af|5957d72b-f7a1-c366-a162-efad1e731fcf",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 7,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571217516864
        },
        "e-418": {
            "id": "e-418",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-100",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-37"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".footer-social",
                "originalId": "811ee09e-6d3c-9c3a-e5f2-1a0684ce711d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".footer-social",
                "originalId": "811ee09e-6d3c-9c3a-e5f2-1a0684ce711d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571660691877
        },
        "e-419": {
            "id": "e-419",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "628b383c1971ae205609767f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "628b383c1971ae205609767f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-20-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-20-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1653313560086
        }
    },
    "actionLists": {
        "a-4": {
            "id": "a-4",
            "title": "just that header hover - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".showreel-holder",
                            "selectorGuids": ["b3814902-f5e1-964b-a1a2-dad4a5216b4b"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".showreel-holder",
                            "selectorGuids": ["b3814902-f5e1-964b-a1a2-dad4a5216b4b"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-4-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".header-agency-text",
                            "selectorGuids": ["d81e852f-89d2-aa6e-98cf-bc501fa46b53"]
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-4-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".h1.header-h1",
                            "selectorGuids": ["e7ad139b-71df-145a-b659-888cabcab032", "3d90d3ae-de15-5227-7a07-6aeddb84bf38"]
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571053883989
        },
        "a-5": {
            "id": "a-5",
            "title": "just that header hover - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".showreel-holder",
                            "selectorGuids": ["b3814902-f5e1-964b-a1a2-dad4a5216b4b"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-5-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".header-agency-text",
                            "selectorGuids": ["d81e852f-89d2-aa6e-98cf-bc501fa46b53"]
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 1
                    }
                }, {
                    "id": "a-5-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".h1.header-h1",
                            "selectorGuids": ["e7ad139b-71df-145a-b659-888cabcab032", "3d90d3ae-de15-5227-7a07-6aeddb84bf38"]
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571053883989
        },
        "a-8": {
            "id": "a-8",
            "title": "grid item scroll - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".grid-cases-link",
                            "selectorGuids": ["05f48e98-087c-c214-2ac6-7921424905bd"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".grid-cases-link",
                            "selectorGuids": ["05f48e98-087c-c214-2ac6-7921424905bd"]
                        },
                        "yValue": 12,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".div-block-19",
                            "selectorGuids": ["4e559b4f-3cb2-14f2-39f7-0d7ebe4f0714"]
                        },
                        "yValue": 12,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".div-block-19",
                            "selectorGuids": ["4e559b4f-3cb2-14f2-39f7-0d7ebe4f0714"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "boundaryMode": true,
                            "id": "627bbc538d528a75d44cfcab|756f7804-a7e3-5fec-9518-c3da8dce7bc1"
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".grid-cases-link",
                            "selectorGuids": ["05f48e98-087c-c214-2ac6-7921424905bd"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".grid-cases-link",
                            "selectorGuids": ["05f48e98-087c-c214-2ac6-7921424905bd"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".div-block-19",
                            "selectorGuids": ["4e559b4f-3cb2-14f2-39f7-0d7ebe4f0714"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".div-block-19",
                            "selectorGuids": ["4e559b4f-3cb2-14f2-39f7-0d7ebe4f0714"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "boundaryMode": true,
                            "id": "627bbc538d528a75d44cfcab|756f7804-a7e3-5fec-9518-c3da8dce7bc1"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571143398227
        },
        "a-9": {
            "id": "a-9",
            "title": "grid item scroll - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".grid-cases-link",
                            "selectorGuids": ["05f48e98-087c-c214-2ac6-7921424905bd"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".grid-cases-link",
                            "selectorGuids": ["05f48e98-087c-c214-2ac6-7921424905bd"]
                        },
                        "yValue": 12,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571143398227
        },
        "a-10": {
            "id": "a-10",
            "title": "grid case link hover - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 700,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".grid-case-image",
                            "selectorGuids": ["91907916-9ce1-1b35-6c05-74e82e1f5ca4"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571146145595
        },
        "a-11": {
            "id": "a-11",
            "title": "grid case link hover - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".grid-case-image",
                            "selectorGuids": ["91907916-9ce1-1b35-6c05-74e82e1f5ca4"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571146145595
        },
        "a-12": {
            "id": "a-12",
            "title": "header holder scroll - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 700,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h2",
                            "selectorGuids": ["93863b10-8a46-fdf0-5990-ce4b591a3193"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h2",
                            "selectorGuids": ["93863b10-8a46-fdf0-5990-ce4b591a3193"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571217521894
        },
        "a-13": {
            "id": "a-13",
            "title": "header holder scroll - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h2",
                            "selectorGuids": ["93863b10-8a46-fdf0-5990-ce4b591a3193"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571217521894
        },
        "a-14": {
            "id": "a-14",
            "title": "long intro text scroll - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 700,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae054d0529fa7|0644318e-d9a8-6b55-0685-f7962d0aad47"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-14-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".image-8",
                            "selectorGuids": ["e1278dfc-c133-5f56-2b91-dbe8bac96a10"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "outQuart",
                        "duration": 700,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae054d0529fa7|0644318e-d9a8-6b55-0685-f7962d0aad47"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-14-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 700,
                        "easing": "outQuart",
                        "duration": 700,
                        "target": {
                            "selector": ".image-8",
                            "selectorGuids": ["e1278dfc-c133-5f56-2b91-dbe8bac96a10"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571217740518
        },
        "a-15": {
            "id": "a-15",
            "title": "long intro text scroll - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae054d0529fa7|0644318e-d9a8-6b55-0685-f7962d0aad47"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571217740518
        },
        "a-16": {
            "id": "a-16",
            "title": "employee hover - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".employee-quote",
                            "selectorGuids": ["dd90ff39-4bfd-3ce9-af2f-67a90ff64528"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 700,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".employee-quote",
                            "selectorGuids": ["dd90ff39-4bfd-3ce9-af2f-67a90ff64528"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571218762403
        },
        "a-17": {
            "id": "a-17",
            "title": "employee hover - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 700,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".employee-quote",
                            "selectorGuids": ["dd90ff39-4bfd-3ce9-af2f-67a90ff64528"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571218762403
        },
        "a-20": {
            "id": "a-20",
            "title": "cursor move",
            "continuousParameterGroups": [{
                "id": "a-20-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-20-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "xValue": 0,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-20-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "xValue": 100,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-20-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-20-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "VH"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-20-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1571225158949
        },
        "a-24": {
            "id": "a-24",
            "title": "CHANGE MOUSE HOVER - IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-24-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "block"
                    }
                }, {
                    "id": "a-24-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571226873812
        },
        "a-22": {
            "id": "a-22",
            "title": "CHANGE MOUSE - OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "none"
                    }
                }, {
                    "id": "a-22-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "block"
                    }
                }, {
                    "id": "a-22-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571226873812
        },
        "a": {
            "id": "a",
            "title": "menu link hover - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-link-underline",
                            "selectorGuids": ["bd9aa7df-55d4-cd60-f2c0-ef146fd191e3"]
                        },
                        "xValue": -101,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 350,
                        "target": {
                            "useEventTarget": true,
                            "id": "78ed994d-da38-438d-3040-890d2aae5c1c"
                        },
                        "globalSwatchId": "",
                        "rValue": 12,
                        "bValue": 12,
                        "gValue": 12,
                        "aValue": 1
                    }
                }, {
                    "id": "a-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-link-underline",
                            "selectorGuids": ["bd9aa7df-55d4-cd60-f2c0-ef146fd191e3"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571046906816
        },
        "a-2": {
            "id": "a-2",
            "title": "menu link hover - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-link-underline",
                            "selectorGuids": ["bd9aa7df-55d4-cd60-f2c0-ef146fd191e3"]
                        },
                        "xValue": -101,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 350,
                        "target": {
                            "useEventTarget": true,
                            "id": "78ed994d-da38-438d-3040-890d2aae5c1c"
                        },
                        "globalSwatchId": "",
                        "rValue": 124,
                        "bValue": 124,
                        "gValue": 124,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571046906816
        },
        "a-21": {
            "id": "a-21",
            "title": "CHANGE MOUSE DRAG - IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "block"
                    }
                }, {
                    "id": "a-21-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571226873812
        },
        "a-25": {
            "id": "a-25",
            "title": "logo wall scroll - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae07464529f4a|2f0c29a2-1ac8-af76-f54c-c15ed3bf852e"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae07464529f4a|2f0c29a2-1ac8-af76-f54c-c15ed3bf852e"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571645560688
        },
        "a-26": {
            "id": "a-26",
            "title": "logo wall scroll - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae07464529f4a|2f0c29a2-1ac8-af76-f54c-c15ed3bf852e"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571645560688
        },
        "a-27": {
            "id": "a-27",
            "title": "this is us span - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae07464529f4a|f375ad5c-4553-441b-a2b3-2e15e7ada5a5"
                        },
                        "xValue": 6,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae07464529f4a|f375ad5c-4553-441b-a2b3-2e15e7ada5a5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae07464529f4a|f375ad5c-4553-441b-a2b3-2e15e7ada5a5"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae07464529f4a|f375ad5c-4553-441b-a2b3-2e15e7ada5a5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571649359006
        },
        "a-28": {
            "id": "a-28",
            "title": "this is us span - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae07464529f4a|f375ad5c-4553-441b-a2b3-2e15e7ada5a5"
                        },
                        "xValue": 6,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae07464529f4a|f375ad5c-4553-441b-a2b3-2e15e7ada5a5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571649359006
        },
        "a-29": {
            "id": "a-29",
            "title": "footer link hover - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "811ee09e-6d3c-9c3a-e5f2-1a0684ce711d"
                        },
                        "globalSwatchId": "409d253a",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-29-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-link-underline",
                            "selectorGuids": ["24e41fb5-b98a-e89a-7d94-401a96e0e721"]
                        },
                        "xValue": 101,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-29-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 350,
                        "target": {
                            "useEventTarget": true,
                            "id": "811ee09e-6d3c-9c3a-e5f2-1a0684ce711d"
                        },
                        "globalSwatchId": "",
                        "rValue": 182,
                        "bValue": 182,
                        "gValue": 182,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-29-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-link-underline",
                            "selectorGuids": ["24e41fb5-b98a-e89a-7d94-401a96e0e721"]
                        },
                        "xValue": -101,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571046906816
        },
        "a-30": {
            "id": "a-30",
            "title": "footer link hover - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-link-underline",
                            "selectorGuids": ["24e41fb5-b98a-e89a-7d94-401a96e0e721"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 350,
                        "target": {
                            "useEventTarget": true,
                            "id": "811ee09e-6d3c-9c3a-e5f2-1a0684ce711d"
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571046906816
        },
        "a-31": {
            "id": "a-31",
            "title": "footer scroll - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header-holder.footer",
                            "selectorGuids": ["e25cf829-f0f6-7913-7e5e-82f7cefc2c52", "9661a30d-8a91-4fc7-a5bd-c5e14ea9c70f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-social-items-holder",
                            "selectorGuids": ["55d0c1cf-62ca-baa3-e1ea-af3010d1952c"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-links-holder",
                            "selectorGuids": ["7d0402ed-e58b-92e7-f170-88fde885e7e7"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-adress-holder",
                            "selectorGuids": ["9234232b-7271-2334-0697-481f908769bb"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header-holder.footer",
                            "selectorGuids": ["e25cf829-f0f6-7913-7e5e-82f7cefc2c52", "9661a30d-8a91-4fc7-a5bd-c5e14ea9c70f"]
                        },
                        "value": 0.01,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header-holder.footer",
                            "selectorGuids": ["e25cf829-f0f6-7913-7e5e-82f7cefc2c52", "9661a30d-8a91-4fc7-a5bd-c5e14ea9c70f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 150,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-adress-holder",
                            "selectorGuids": ["9234232b-7271-2334-0697-481f908769bb"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-links-holder",
                            "selectorGuids": ["7d0402ed-e58b-92e7-f170-88fde885e7e7"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 450,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-social-items-holder",
                            "selectorGuids": ["55d0c1cf-62ca-baa3-e1ea-af3010d1952c"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571730822671
        },
        "a-32": {
            "id": "a-32",
            "title": "footer scroll - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-32-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header-holder.footer",
                            "selectorGuids": ["e25cf829-f0f6-7913-7e5e-82f7cefc2c52", "9661a30d-8a91-4fc7-a5bd-c5e14ea9c70f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-32-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-social-items-holder",
                            "selectorGuids": ["55d0c1cf-62ca-baa3-e1ea-af3010d1952c"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-32-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-links-holder",
                            "selectorGuids": ["7d0402ed-e58b-92e7-f170-88fde885e7e7"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-32-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-adress-holder",
                            "selectorGuids": ["9234232b-7271-2334-0697-481f908769bb"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571730822671
        },
        "a-34": {
            "id": "a-34",
            "title": "full width double - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-34-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".case-image",
                            "selectorGuids": ["2ae448dd-6186-db38-c491-7b75bd8c77d1"]
                        },
                        "xValue": 1.4,
                        "yValue": 1.4,
                        "locked": true
                    }
                }, {
                    "id": "a-34-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae08cd7529fa4|83ad6d71-41da-8097-02f4-ca5d8ae993a0"
                        },
                        "xValue": 0.9,
                        "yValue": 0.9,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-34-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".case-image",
                            "selectorGuids": ["2ae448dd-6186-db38-c491-7b75bd8c77d1"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-34-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1500,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae08cd7529fa4|83ad6d71-41da-8097-02f4-ca5d8ae993a0"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571749138540
        },
        "a-35": {
            "id": "a-35",
            "title": "full width double - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-35-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".case-image",
                            "selectorGuids": ["2ae448dd-6186-db38-c491-7b75bd8c77d1"]
                        },
                        "xValue": 1.4,
                        "yValue": 1.4,
                        "locked": true
                    }
                }, {
                    "id": "a-35-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae08cd7529fa4|83ad6d71-41da-8097-02f4-ca5d8ae993a0"
                        },
                        "xValue": 0.9,
                        "yValue": 0.9,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571749138540
        },
        "a-38": {
            "id": "a-38",
            "title": "case image mobile desktop scroll - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-38-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae08cd7529fa4|2969ec39-2770-5540-4194-7ca211c2e1e7"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1400,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae08cd7529fa4|2969ec39-2770-5540-4194-7ca211c2e1e7"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571754365857
        },
        "a-39": {
            "id": "a-39",
            "title": "case image mobile desktop scroll - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-39-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae08cd7529fa4|2969ec39-2770-5540-4194-7ca211c2e1e7"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571754365857
        },
        "a-40": {
            "id": "a-40",
            "title": "info fact holder scroll - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-40-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae08cd7529fa4|1f0d7283-b35d-0cee-4bdf-604995739acb"
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-40-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae08cd7529fa4|1f0d7283-b35d-0cee-4bdf-604995739acb"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-40-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae08cd7529fa4|1f0d7283-b35d-0cee-4bdf-604995739acb"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-40-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae08cd7529fa4|1f0d7283-b35d-0cee-4bdf-604995739acb"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571754819233
        },
        "a-41": {
            "id": "a-41",
            "title": "info fact holder scroll - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-41-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae08cd7529fa4|1f0d7283-b35d-0cee-4bdf-604995739acb"
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-41-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae08cd7529fa4|1f0d7283-b35d-0cee-4bdf-604995739acb"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571754819233
        },
        "a-42": {
            "id": "a-42",
            "title": "LOAD - Case Page",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-42-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "627b7316798ae08cd7529fa4|4e7a195f-3772-cd2b-2f34-bc1d7e9e08c2"
                        },
                        "yValue": 101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-42-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "627b7316798ae08cd7529fa4|1cde2eba-2657-802d-c86b-5b254da20927"
                        },
                        "xValue": 1.3,
                        "yValue": 1.3,
                        "locked": true
                    }
                }, {
                    "id": "a-42-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "627b7316798ae08cd7529fa4|28b6001a-d4ec-5fb4-5970-39d4b9c1269f"
                        },
                        "yValue": 101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-42-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "627b7316798ae08cd7529fa4|505ea654-eb0b-d9b6-bace-a0d7a3fa3cc6"
                        },
                        "xValue": 1.3,
                        "yValue": 1.3,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-42-n-8",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 3500,
                        "target": {
                            "id": "627b7316798ae08cd7529fa4|1cde2eba-2657-802d-c86b-5b254da20927"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-42-n-10",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 3500,
                        "target": {
                            "id": "627b7316798ae08cd7529fa4|505ea654-eb0b-d9b6-bace-a0d7a3fa3cc6"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-42-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "627b7316798ae08cd7529fa4|28b6001a-d4ec-5fb4-5970-39d4b9c1269f"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-42-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "627b7316798ae08cd7529fa4|4e7a195f-3772-cd2b-2f34-bc1d7e9e08c2"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571816441205
        },
        "a-43": {
            "id": "a-43",
            "title": "SHOW PAGE LOAD OVERLAY",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-43-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".page-overlay-in",
                            "selectorGuids": ["21f236b0-0cf1-cf5c-fdb5-c149da16de75"]
                        },
                        "yValue": 400,
                        "xUnit": "PX",
                        "yUnit": "VH",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-43-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".page-overlay-in",
                            "selectorGuids": ["21f236b0-0cf1-cf5c-fdb5-c149da16de75"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-43-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".page-change-overlay-holder",
                            "selectorGuids": ["1b64fd1e-5d78-fcf8-d68c-f12bb59823b8"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-43-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "selector": ".page-overlay-in",
                            "selectorGuids": ["21f236b0-0cf1-cf5c-fdb5-c149da16de75"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "VH",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571820146033
        },
        "a-64": {
            "id": "a-64",
            "title": "PRELOAD OVERLAY",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-64-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".page-overlay-in",
                            "selectorGuids": ["21f236b0-0cf1-cf5c-fdb5-c149da16de75"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-64-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".page-change-overlay-holder",
                            "selectorGuids": ["1b64fd1e-5d78-fcf8-d68c-f12bb59823b8"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-64-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".page-overlay-out",
                            "selectorGuids": ["c151e36b-e7df-6a33-ebed-9b0508bb4c2e"]
                        },
                        "yValue": 200,
                        "xUnit": "PX",
                        "yUnit": "VH",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-64-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".page-overlay-out",
                            "selectorGuids": ["c151e36b-e7df-6a33-ebed-9b0508bb4c2e"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-64-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".page-overlay-out",
                            "selectorGuids": ["c151e36b-e7df-6a33-ebed-9b0508bb4c2e"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "vh",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-64-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".page-overlay-out",
                            "selectorGuids": ["c151e36b-e7df-6a33-ebed-9b0508bb4c2e"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-64-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".page-change-overlay-holder",
                            "selectorGuids": ["1b64fd1e-5d78-fcf8-d68c-f12bb59823b8"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571820295914
        },
        "a-44": {
            "id": "a-44",
            "title": "REMOVE PAGE LOAD OVERLAY",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-44-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".page-overlay-in",
                            "selectorGuids": ["21f236b0-0cf1-cf5c-fdb5-c149da16de75"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-44-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".page-change-overlay-holder",
                            "selectorGuids": ["1b64fd1e-5d78-fcf8-d68c-f12bb59823b8"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-44-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".page-overlay-out",
                            "selectorGuids": ["c151e36b-e7df-6a33-ebed-9b0508bb4c2e"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-44-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".page-overlay-out",
                            "selectorGuids": ["c151e36b-e7df-6a33-ebed-9b0508bb4c2e"]
                        },
                        "yValue": 200,
                        "xUnit": "PX",
                        "yUnit": "VH",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-44-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "selector": ".page-overlay-out",
                            "selectorGuids": ["c151e36b-e7df-6a33-ebed-9b0508bb4c2e"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "VH",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-44-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".page-change-overlay-holder",
                            "selectorGuids": ["1b64fd1e-5d78-fcf8-d68c-f12bb59823b8"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571820295914
        },
        "a-45": {
            "id": "a-45",
            "title": "LOAD - Frontpage",
            "actionItemGroups": [],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571824195584
        },
        "a-36": {
            "id": "a-36",
            "title": "full width single  - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-36-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".case-image",
                            "selectorGuids": ["2ae448dd-6186-db38-c491-7b75bd8c77d1"]
                        },
                        "xValue": 1.4,
                        "yValue": 1.4,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae08cd7529fa4|c2edfc19-9536-de88-760b-5096aaa25fda"
                        },
                        "xValue": 0.9,
                        "yValue": 0.9,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-36-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".case-image",
                            "selectorGuids": ["2ae448dd-6186-db38-c491-7b75bd8c77d1"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1500,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae08cd7529fa4|c2edfc19-9536-de88-760b-5096aaa25fda"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571753207223
        },
        "a-37": {
            "id": "a-37",
            "title": "full width single  - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-37-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".case-image",
                            "selectorGuids": ["2ae448dd-6186-db38-c491-7b75bd8c77d1"]
                        },
                        "xValue": 1.4,
                        "yValue": 1.4,
                        "locked": true
                    }
                }, {
                    "id": "a-37-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae08cd7529fa4|c2edfc19-9536-de88-760b-5096aaa25fda"
                        },
                        "xValue": 0.9,
                        "yValue": 0.9,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571753207223
        },
        "a-47": {
            "id": "a-47",
            "title": "client quote scroll - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-47-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".quote-client-image",
                            "selectorGuids": ["6ead437b-f19a-ad83-85bb-ed1f246cc51d"]
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-47-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".client-quote-person",
                            "selectorGuids": ["190816ba-ee37-149e-b692-4f14360384ef"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-47-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".client-quote-text",
                            "selectorGuids": ["58176f49-f4b0-6c74-8501-71e4ca6c1735"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-47-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 300,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".quote-client-image",
                            "selectorGuids": ["6ead437b-f19a-ad83-85bb-ed1f246cc51d"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-47-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".client-quote-text",
                            "selectorGuids": ["58176f49-f4b0-6c74-8501-71e4ca6c1735"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-47-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".client-quote-person",
                            "selectorGuids": ["190816ba-ee37-149e-b692-4f14360384ef"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1573037325050
        },
        "a-48": {
            "id": "a-48",
            "title": "client quote scroll - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-48-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".quote-client-image",
                            "selectorGuids": ["6ead437b-f19a-ad83-85bb-ed1f246cc51d"]
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-48-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".client-quote-text",
                            "selectorGuids": ["58176f49-f4b0-6c74-8501-71e4ca6c1735"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-48-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".client-quote-person",
                            "selectorGuids": ["190816ba-ee37-149e-b692-4f14360384ef"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1573037325050
        },
        "a-50": {
            "id": "a-50",
            "title": "case intro text scroll - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-50-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h4",
                            "selectorGuids": ["74a8f950-afad-d40c-4875-3fd1deb37ff6"]
                        },
                        "yValue": 6,
                        "xUnit": "PX",
                        "yUnit": "VW",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-50-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h4",
                            "selectorGuids": ["74a8f950-afad-d40c-4875-3fd1deb37ff6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-50-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h4",
                            "selectorGuids": ["74a8f950-afad-d40c-4875-3fd1deb37ff6"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "VW",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-50-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h4",
                            "selectorGuids": ["74a8f950-afad-d40c-4875-3fd1deb37ff6"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1573137447370
        },
        "a-51": {
            "id": "a-51",
            "title": "case intro text scroll - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-51-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h4",
                            "selectorGuids": ["74a8f950-afad-d40c-4875-3fd1deb37ff6"]
                        },
                        "yValue": 6,
                        "xUnit": "PX",
                        "yUnit": "VW",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-51-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h4",
                            "selectorGuids": ["74a8f950-afad-d40c-4875-3fd1deb37ff6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1573137447370
        },
        "a-52": {
            "id": "a-52",
            "title": "LOAD - Case Page - Mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-52-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "627b7316798ae08cd7529fa4|4e7a195f-3772-cd2b-2f34-bc1d7e9e08c2"
                        },
                        "yValue": 101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-52-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "627b7316798ae08cd7529fa4|28b6001a-d4ec-5fb4-5970-39d4b9c1269f"
                        },
                        "yValue": 101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-52-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 650,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "627b7316798ae08cd7529fa4|4e7a195f-3772-cd2b-2f34-bc1d7e9e08c2"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-52-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 650,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "627b7316798ae08cd7529fa4|28b6001a-d4ec-5fb4-5970-39d4b9c1269f"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571816441205
        },
        "a-53": {
            "id": "a-53",
            "title": "h2 service scroll - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-53-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae02425529fbf|995d4d54-e38e-5df2-339f-74240b9bd4da"
                        },
                        "yValue": 15,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-53-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae02425529fbf|995d4d54-e38e-5df2-339f-74240b9bd4da"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-53-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae02425529fbf|995d4d54-e38e-5df2-339f-74240b9bd4da"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-53-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "627b7316798ae02425529fbf|995d4d54-e38e-5df2-339f-74240b9bd4da"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1576507408779
        },
        "a-54": {
            "id": "a-54",
            "title": "header keywords - loop",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-54-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 1000,
                        "target": {
                            "selector": ".car-holder",
                            "selectorGuids": ["19d02ccd-9996-78ce-074b-cff6197ab895"]
                        },
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-54-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "inOutExpo",
                        "duration": 1100,
                        "target": {
                            "selector": ".car-holder",
                            "selectorGuids": ["19d02ccd-9996-78ce-074b-cff6197ab895"]
                        },
                        "yValue": -16.6666666667,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-54-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "inOutExpo",
                        "duration": 1100,
                        "target": {
                            "selector": ".car-holder",
                            "selectorGuids": ["19d02ccd-9996-78ce-074b-cff6197ab895"]
                        },
                        "yValue": -33.3333333334,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-54-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "inOutExpo",
                        "duration": 1100,
                        "target": {
                            "selector": ".car-holder",
                            "selectorGuids": ["19d02ccd-9996-78ce-074b-cff6197ab895"]
                        },
                        "yValue": -50.0000000001,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-54-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "inOutExpo",
                        "duration": 1100,
                        "target": {
                            "selector": ".car-holder",
                            "selectorGuids": ["19d02ccd-9996-78ce-074b-cff6197ab895"]
                        },
                        "yValue": -66.6666666668,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-54-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "inOutExpo",
                        "duration": 1100,
                        "target": {
                            "selector": ".car-holder",
                            "selectorGuids": ["19d02ccd-9996-78ce-074b-cff6197ab895"]
                        },
                        "yValue": -83.3333333335,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-54-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "inOutExpo",
                        "duration": 1100,
                        "target": {
                            "selector": ".car-holder",
                            "selectorGuids": ["19d02ccd-9996-78ce-074b-cff6197ab895"]
                        },
                        "yValue": -100,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-54-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".car-holder",
                            "selectorGuids": ["19d02ccd-9996-78ce-074b-cff6197ab895"]
                        },
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1588776846354
        },
        "a-55": {
            "id": "a-55",
            "title": "intro section scroll - in view",
            "continuousParameterGroups": [{
                "id": "a-55-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-55-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".fixed-header-holder",
                                "selectorGuids": ["9a62d372-f46e-d247-9c4e-ed1daab5cb05"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-55-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".fixed-header-holder",
                                "selectorGuids": ["9a62d372-f46e-d247-9c4e-ed1daab5cb05"]
                            },
                            "yValue": -15,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1588846643210
        },
        "a-56": {
            "id": "a-56",
            "title": "header scroll line - loop",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-56-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".scroll-down-line",
                            "selectorGuids": ["6a1ed835-e207-4a05-2813-fa70d7824aba"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-56-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuint",
                        "duration": 1000,
                        "target": {
                            "selector": ".scroll-down-line",
                            "selectorGuids": ["6a1ed835-e207-4a05-2813-fa70d7824aba"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-56-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 1000,
                        "target": {
                            "selector": ".scroll-down-line",
                            "selectorGuids": ["6a1ed835-e207-4a05-2813-fa70d7824aba"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-56-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".scroll-down-line",
                            "selectorGuids": ["6a1ed835-e207-4a05-2813-fa70d7824aba"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1588846871276
        },
        "a-59": {
            "id": "a-59",
            "title": "selected cases - scrolling in view",
            "continuousParameterGroups": [{
                "id": "a-59-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 10,
                    "actionItems": [{
                        "id": "a-59-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".frontpage-image",
                                "selectorGuids": ["f6464d67-a637-ab31-bfca-23b36f15be70"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-59-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".selected-cases-dark-overlay",
                                "selectorGuids": ["67a87075-36a3-4d15-4db8-fb9b6a57c0b4"]
                            },
                            "value": 0.5,
                            "unit": ""
                        }
                    }, {
                        "id": "a-59-n-5",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".v-em-ob-fit",
                                "selectorGuids": ["0ea3532f-fd4c-1c7f-c5ae-027a4994868e"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-59-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".frontpage-image",
                                "selectorGuids": ["f6464d67-a637-ab31-bfca-23b36f15be70"]
                            },
                            "xValue": 1.5,
                            "yValue": 1.5,
                            "locked": true
                        }
                    }, {
                        "id": "a-59-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".selected-cases-dark-overlay",
                                "selectorGuids": ["67a87075-36a3-4d15-4db8-fb9b6a57c0b4"]
                            },
                            "value": 0.2,
                            "unit": ""
                        }
                    }, {
                        "id": "a-59-n-6",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".v-em-ob-fit",
                                "selectorGuids": ["0ea3532f-fd4c-1c7f-c5ae-027a4994868e"]
                            },
                            "xValue": 1.5,
                            "yValue": 1.5,
                            "locked": true
                        }
                    }]
                }]
            }],
            "createdOn": 1591773840193
        },
        "a-18": {
            "id": "a-18",
            "title": "swiper wrapper scroll - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 700,
                        "target": {
                            "selector": ".frontpage-employee-image-holder",
                            "selectorGuids": ["d22e27b7-57d0-e944-ac49-59e1060352f7"]
                        },
                        "xValue": 1.15,
                        "yValue": 1.15,
                        "locked": true
                    }
                }, {
                    "id": "a-18-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".frontpage-employee-info-holder",
                            "selectorGuids": ["768a3b51-e99f-66bb-5fb7-10d1d991b099"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-18-n-5",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".frontpage-employee-image-holder",
                            "selectorGuids": ["d22e27b7-57d0-e944-ac49-59e1060352f7"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "051b",
                            "value": 100,
                            "unit": "%"
                        }, {
                            "type": "blur",
                            "filterId": "ad81",
                            "value": 2,
                            "unit": "px"
                        }]
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "selector": ".frontpage-employee-image-holder",
                            "selectorGuids": ["d22e27b7-57d0-e944-ac49-59e1060352f7"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-18-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 700,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".frontpage-employee-info-holder",
                            "selectorGuids": ["768a3b51-e99f-66bb-5fb7-10d1d991b099"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-18-n-6",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".frontpage-employee-image-holder",
                            "selectorGuids": ["d22e27b7-57d0-e944-ac49-59e1060352f7"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "051b",
                            "value": 0,
                            "unit": "%"
                        }, {
                            "type": "blur",
                            "filterId": "52db",
                            "value": 0,
                            "unit": "px"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571220473055
        },
        "a-19": {
            "id": "a-19",
            "title": "swiper wrapper scroll - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".frontpage-employee-image-holder",
                            "selectorGuids": ["d22e27b7-57d0-e944-ac49-59e1060352f7"]
                        },
                        "xValue": 1.15,
                        "yValue": 1.15,
                        "locked": true
                    }
                }, {
                    "id": "a-19-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".frontpage-employee-info-holder",
                            "selectorGuids": ["768a3b51-e99f-66bb-5fb7-10d1d991b099"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571220473055
        },
        "a-60": {
            "id": "a-60",
            "title": "ticker loop",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-60-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 7000,
                        "target": {
                            "selector": ".ticker-holder",
                            "selectorGuids": ["7029dbcf-3bce-ad61-17ef-a11a5ab47f7c"]
                        },
                        "xValue": -16.6666666667,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-60-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".ticker-holder",
                            "selectorGuids": ["7029dbcf-3bce-ad61-17ef-a11a5ab47f7c"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1591952541748
        },
        "a-49": {
            "id": "a-49",
            "title": "career link hover - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-49-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 700,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".career-about-page-text",
                            "selectorGuids": ["39166203-754b-4a33-0391-325bb951a7ae"]
                        },
                        "yValue": -101,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-49-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".career-about-page-text",
                            "selectorGuids": ["39166203-754b-4a33-0391-325bb951a7ae"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1573130504048
        },
        "a-61": {
            "id": "a-61",
            "title": "Load Header",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-61-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".ticker-holder",
                            "selectorGuids": ["7029dbcf-3bce-ad61-17ef-a11a5ab47f7c"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-61-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 150,
                        "easing": "outQuart",
                        "duration": 700,
                        "target": {
                            "selector": ".ticker-holder",
                            "selectorGuids": ["7029dbcf-3bce-ad61-17ef-a11a5ab47f7c"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1592385740503
        },
        "a-62": {
            "id": "a-62",
            "title": "mouse a hover - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-62-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "selector": ".cursor-circle",
                            "selectorGuids": ["9ab3026b-df96-9ff3-1410-defae63bacc6"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-62-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "selector": ".cursor-circle",
                            "selectorGuids": ["9ab3026b-df96-9ff3-1410-defae63bacc6"]
                        },
                        "widthValue": 10,
                        "heightValue": 10,
                        "widthUnit": "PX",
                        "heightUnit": "PX",
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1592477892373
        },
        "a-63": {
            "id": "a-63",
            "title": "mouse a hover - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-63-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "selector": ".cursor-circle",
                            "selectorGuids": ["9ab3026b-df96-9ff3-1410-defae63bacc6"]
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-63-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "selector": ".cursor-circle",
                            "selectorGuids": ["9ab3026b-df96-9ff3-1410-defae63bacc6"]
                        },
                        "widthValue": 16,
                        "heightValue": 16,
                        "widthUnit": "PX",
                        "heightUnit": "PX",
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1592477892373
        },
        "a-65": {
            "id": "a-65",
            "title": "menu left - aaben",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-65-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "112f17fb-8786-d4bb-4259-bd3a19013b18"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-65-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "112f17fb-8786-d4bb-4259-bd3a19013b19"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-65-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0ef6"
                        },
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0ef6"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0ef3"
                        },
                        "xValue": -101,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0ef3"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-65-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0ef9"
                        },
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0ef9"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0efc"
                        },
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0efc"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0eff"
                        },
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0eff"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-37",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "0412c438-92ee-0f08-b12c-508650a7641f"
                        },
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-38",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "0412c438-92ee-0f08-b12c-508650a7641f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-39",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "bb24bbfe-9d7d-f1e9-af1d-369fffa1afc2"
                        },
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-40",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "bb24bbfe-9d7d-f1e9-af1d-369fffa1afc2"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-65-n-15",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "112f17fb-8786-d4bb-4259-bd3a19013b18"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-65-n-16",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0ef3"
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-65-n-17",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 300,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0ef3"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-18",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "112f17fb-8786-d4bb-4259-bd3a19013b1d"
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-65-n-19",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "112f17fb-8786-d4bb-4259-bd3a19013b1b"
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-65-n-20",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "112f17fb-8786-d4bb-4259-bd3a19013b1d"
                        },
                        "yValue": -6,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-21",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "112f17fb-8786-d4bb-4259-bd3a19013b1b"
                        },
                        "yValue": 8,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-22",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "112f17fb-8786-d4bb-4259-bd3a19013b17"
                        },
                        "zValue": -180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-65-n-23",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 150,
                        "target": {
                            "id": "112f17fb-8786-d4bb-4259-bd3a19013b1c"
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-65-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0ef6"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-25",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0ef6"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-26",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 50,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0ef9"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-27",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 50,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0ef9"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-28",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0efc"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-29",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 100,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0efc"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-30",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 150,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "0412c438-92ee-0f08-b12c-508650a7641f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-31",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 150,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "0412c438-92ee-0f08-b12c-508650a7641f"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "bb24bbfe-9d7d-f1e9-af1d-369fffa1afc2"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-41",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "bb24bbfe-9d7d-f1e9-af1d-369fffa1afc2"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-36",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 250,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0eff"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-42",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 250,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0eff"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-65-n-34",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "112f17fb-8786-d4bb-4259-bd3a19013b19"
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1554284103615
        },
        "a-66": {
            "id": "a-66",
            "title": "menu left - luk",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-66-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "112f17fb-8786-d4bb-4259-bd3a19013b19"
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-66-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0ef6"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-66-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "id": "112f17fb-8786-d4bb-4259-bd3a19013b17"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-66-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "id": "112f17fb-8786-d4bb-4259-bd3a19013b1b"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-66-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "id": "112f17fb-8786-d4bb-4259-bd3a19013b1d"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-66-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "id": "112f17fb-8786-d4bb-4259-bd3a19013b1d"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-66-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "id": "112f17fb-8786-d4bb-4259-bd3a19013b1b"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-66-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0ef6"
                        },
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-66-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 50,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0ef9"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-66-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 50,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0ef9"
                        },
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-66-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0efc"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-66-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 100,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0efc"
                        },
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-66-n-13",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 100,
                        "easing": "outQuad",
                        "duration": 200,
                        "target": {
                            "id": "112f17fb-8786-d4bb-4259-bd3a19013b1c"
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-66-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 150,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "0412c438-92ee-0f08-b12c-508650a7641f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-66-n-15",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 150,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "0412c438-92ee-0f08-b12c-508650a7641f"
                        },
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-66-n-21",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "bb24bbfe-9d7d-f1e9-af1d-369fffa1afc2"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-66-n-22",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "bb24bbfe-9d7d-f1e9-af1d-369fffa1afc2"
                        },
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-66-n-24",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 250,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0eff"
                        },
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-66-n-23",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 250,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0eff"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-66-n-18",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0ef3"
                        },
                        "xValue": 101,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-66-n-19",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "31465f62-5d65-4006-125b-526696ec0ef3"
                        },
                        "xValue": -101,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-66-n-20",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "112f17fb-8786-d4bb-4259-bd3a19013b18"
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1554284103615
        },
        "a-67": {
            "id": "a-67",
            "title": "featured article image hover - in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-67-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 700,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".featured-article-image",
                            "selectorGuids": ["0c31f12c-decd-7e4e-eb9d-6ccabf8c00e7"]
                        },
                        "xValue": 1.15,
                        "yValue": 1.15,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1592921319191
        },
        "a-68": {
            "id": "a-68",
            "title": "featured article image hover - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-68-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 700,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".featured-article-image",
                            "selectorGuids": ["0c31f12c-decd-7e4e-eb9d-6ccabf8c00e7"]
                        },
                        "xValue": 1.01,
                        "yValue": 1.01,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1592921319191
        },
        "a-69": {
            "id": "a-69",
            "title": "Frontpage lottie animation",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-69-n",
                    "actionTypeId": "PLUGIN_LOTTIE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 4000,
                        "target": {
                            "id": "627b7316798ae07464529f4a|d74f8b41-34d4-e1e0-f4b6-6cb02a2f32cf"
                        },
                        "value": 100
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1592987158428
        },
        "a-70": {
            "id": "a-70",
            "title": "show cursor",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-70-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".custom-cursor-mover",
                            "selectorGuids": ["48d2bd1e-68f1-5e21-731e-500f4827ff8f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-70-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 800,
                        "target": {
                            "selector": ".custom-cursor-mover",
                            "selectorGuids": ["48d2bd1e-68f1-5e21-731e-500f4827ff8f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1593515964571
        },
        "a-71": {
            "id": "a-71",
            "title": "header scroll line - loop 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-71-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".scroll-down-text",
                            "selectorGuids": ["ab431be0-a25b-70e2-1f3a-e001a269afec"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-71-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 3000,
                        "target": {
                            "selector": ".scroll-down-text",
                            "selectorGuids": ["ab431be0-a25b-70e2-1f3a-e001a269afec"]
                        },
                        "xValue": -200,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-71-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".scroll-down-text",
                            "selectorGuids": ["ab431be0-a25b-70e2-1f3a-e001a269afec"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1588846871276
        },
        "a-72": {
            "id": "a-72",
            "title": "scroll down blob",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-72-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "627b7316798ae07464529f4a|cc62fc27-dac0-eb0a-c2ef-fb486a38c280"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-72-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "627b7316798ae07464529f4a|cc62fc27-dac0-eb0a-c2ef-fb486a38c280"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-72-n-8",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "id": "627b7316798ae07464529f4a|cc62fc27-dac0-eb0a-c2ef-fb486a38c280"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-72-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuint",
                        "duration": 1000,
                        "target": {
                            "id": "627b7316798ae07464529f4a|cc62fc27-dac0-eb0a-c2ef-fb486a38c280"
                        },
                        "xValue": 0,
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-72-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 1000,
                        "target": {
                            "id": "627b7316798ae07464529f4a|cc62fc27-dac0-eb0a-c2ef-fb486a38c280"
                        },
                        "xValue": 0.7,
                        "yValue": 1,
                        "locked": false
                    }
                }, {
                    "id": "a-72-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 1000,
                        "target": {
                            "id": "627b7316798ae07464529f4a|cc62fc27-dac0-eb0a-c2ef-fb486a38c280"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-72-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 1000,
                        "target": {
                            "id": "627b7316798ae07464529f4a|cc62fc27-dac0-eb0a-c2ef-fb486a38c280"
                        },
                        "xValue": 0,
                        "yValue": 80,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-72-n-10",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "627b7316798ae07464529f4a|cc62fc27-dac0-eb0a-c2ef-fb486a38c280"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-72-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "627b7316798ae07464529f4a|cc62fc27-dac0-eb0a-c2ef-fb486a38c280"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-72-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "627b7316798ae07464529f4a|cc62fc27-dac0-eb0a-c2ef-fb486a38c280"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1597999884819
        },
        "a-74": {
            "id": "a-74",
            "title": "Ticker 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-74-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 12000,
                        "target": {
                            "selector": ".move-me",
                            "selectorGuids": ["54102bb2-f0f5-e495-d862-e6215b79023a"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-74-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".move-me",
                            "selectorGuids": ["54102bb2-f0f5-e495-d862-e6215b79023a"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1619688966727
        },
        "a-75": {
            "id": "a-75",
            "title": "Enter ticker",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-75-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".ny-ticker-1",
                            "selectorGuids": ["f1fe55b4-8301-6854-f696-2ad508935b64"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-75-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 700,
                        "target": {
                            "selector": ".ny-ticker-1",
                            "selectorGuids": ["f1fe55b4-8301-6854-f696-2ad508935b64"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1619689441741
        },
        "a-76": {
            "id": "a-76",
            "title": "cursor move 2",
            "continuousParameterGroups": [{
                "id": "a-76-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-76-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627b7316798ae01122529f99|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "xValue": 0,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-76-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627b7316798ae01122529f99|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "xValue": 100,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-76-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-76-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627b7316798ae01122529f99|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "VH"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-76-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627b7316798ae01122529f99|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1571225158949
        },
        "a-77": {
            "id": "a-77",
            "title": "CHANGE MOUSE HOVER - IN 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-77-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-77-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "block"
                    }
                }, {
                    "id": "a-77-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571226873812
        },
        "a-78": {
            "id": "a-78",
            "title": "cursor move 3",
            "continuousParameterGroups": [{
                "id": "a-78-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-78-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627b7316798ae054d0529fa7|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "xValue": 0,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-78-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627b7316798ae054d0529fa7|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "xValue": 100,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-78-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-78-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627b7316798ae054d0529fa7|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "VH"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-78-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627b7316798ae054d0529fa7|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1571225158949
        },
        "a-79": {
            "id": "a-79",
            "title": "LOAD - Frontpage 2",
            "actionItemGroups": [],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571824195584
        },
        "a-80": {
            "id": "a-80",
            "title": "Frontpage lottie animation 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-80-n",
                    "actionTypeId": "PLUGIN_LOTTIE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 4000,
                        "target": {
                            "id": "627b7316798ae054d0529fa7|d74f8b41-34d4-e1e0-f4b6-6cb02a2f32cf"
                        },
                        "value": 100
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1592987158428
        },
        "a-81": {
            "id": "a-81",
            "title": "scroll down blob 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-81-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "627b7316798ae054d0529fa7|cc62fc27-dac0-eb0a-c2ef-fb486a38c280"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-81-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "627b7316798ae054d0529fa7|cc62fc27-dac0-eb0a-c2ef-fb486a38c280"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-81-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 500,
                        "target": {
                            "id": "627b7316798ae054d0529fa7|cc62fc27-dac0-eb0a-c2ef-fb486a38c280"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-81-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuint",
                        "duration": 1000,
                        "target": {
                            "id": "627b7316798ae054d0529fa7|cc62fc27-dac0-eb0a-c2ef-fb486a38c280"
                        },
                        "xValue": 0,
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-81-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 1000,
                        "target": {
                            "id": "627b7316798ae054d0529fa7|cc62fc27-dac0-eb0a-c2ef-fb486a38c280"
                        },
                        "xValue": 0.7,
                        "yValue": 1,
                        "locked": false
                    }
                }, {
                    "id": "a-81-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 1000,
                        "target": {
                            "id": "627b7316798ae054d0529fa7|cc62fc27-dac0-eb0a-c2ef-fb486a38c280"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-81-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 1000,
                        "target": {
                            "id": "627b7316798ae054d0529fa7|cc62fc27-dac0-eb0a-c2ef-fb486a38c280"
                        },
                        "xValue": 0,
                        "yValue": 80,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-81-n-8",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "627b7316798ae054d0529fa7|cc62fc27-dac0-eb0a-c2ef-fb486a38c280"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-81-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "627b7316798ae054d0529fa7|cc62fc27-dac0-eb0a-c2ef-fb486a38c280"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-81-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "627b7316798ae054d0529fa7|cc62fc27-dac0-eb0a-c2ef-fb486a38c280"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1597999884819
        },
        "a-86": {
            "id": "a-86",
            "title": "cursor move 5",
            "continuousParameterGroups": [{
                "id": "a-86-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-86-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627b75eeac68b0746d0edcde|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "xValue": 0,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-86-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627b75eeac68b0746d0edcde|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "xValue": 100,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-86-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-86-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627b75eeac68b0746d0edcde|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "VH"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-86-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627b75eeac68b0746d0edcde|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1571225158949
        },
        "a-87": {
            "id": "a-87",
            "title": "New Header Animation",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-87-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".nheadertitle",
                            "selectorGuids": ["fddc02c1-4da4-6fe6-0f6d-54477bf7dc8a"]
                        },
                        "yValue": 130,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-87-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".underscore",
                            "selectorGuids": ["845b89f9-ff0b-14a0-e8cc-018e2f30ce9f"]
                        },
                        "widthValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-87-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "outQuart",
                        "duration": 700,
                        "target": {
                            "selector": ".nheadertitle",
                            "selectorGuids": ["fddc02c1-4da4-6fe6-0f6d-54477bf7dc8a"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-87-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 500,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "selector": ".underscore",
                            "selectorGuids": ["845b89f9-ff0b-14a0-e8cc-018e2f30ce9f"]
                        },
                        "widthValue": 4,
                        "widthUnit": "vw",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1652260200393
        },
        "a-88": {
            "id": "a-88",
            "title": "cursor move 6",
            "continuousParameterGroups": [{
                "id": "a-88-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-88-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627b87a4fca806260dce0389|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "xValue": 0,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-88-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627b87a4fca806260dce0389|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "xValue": 100,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-88-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-88-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627b87a4fca806260dce0389|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "VH"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-88-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627b87a4fca806260dce0389|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1571225158949
        },
        "a-90": {
            "id": "a-90",
            "title": "cursor move 7",
            "continuousParameterGroups": [{
                "id": "a-90-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-90-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627b9538fca8068629ce7373|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "xValue": 0,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-90-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627b9538fca8068629ce7373|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "xValue": 100,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-90-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-90-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627b9538fca8068629ce7373|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "VH"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-90-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627b9538fca8068629ce7373|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1571225158949
        },
        "a-91": {
            "id": "a-91",
            "title": "About Headlines IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-91-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h3",
                            "selectorGuids": ["52b92d41-1521-d7c9-d7fa-658338ef567f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-91-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".underline",
                            "selectorGuids": ["30924741-a1bf-3ed8-695f-66709b1ea1ca"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-91-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h3",
                            "selectorGuids": ["52b92d41-1521-d7c9-d7fa-658338ef567f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-91-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".underline",
                            "selectorGuids": ["30924741-a1bf-3ed8-695f-66709b1ea1ca"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1652273130193
        },
        "a-95": {
            "id": "a-95",
            "title": "About Headlines OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-95-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h3",
                            "selectorGuids": ["52b92d41-1521-d7c9-d7fa-658338ef567f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-95-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".underline",
                            "selectorGuids": ["30924741-a1bf-3ed8-695f-66709b1ea1ca"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-95-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h3",
                            "selectorGuids": ["52b92d41-1521-d7c9-d7fa-658338ef567f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-95-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".underline",
                            "selectorGuids": ["30924741-a1bf-3ed8-695f-66709b1ea1ca"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1652273130193
        },
        "a-92": {
            "id": "a-92",
            "title": "cursor move 8",
            "continuousParameterGroups": [{
                "id": "a-92-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-92-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627bbc538d528a75d44cfcab|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "xValue": 0,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-92-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627bbc538d528a75d44cfcab|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "xValue": 100,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-92-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-92-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627bbc538d528a75d44cfcab|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "VH"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-92-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627bbc538d528a75d44cfcab|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1571225158949
        },
        "a-93": {
            "id": "a-93",
            "title": "Fade In Insights Featured",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-93-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "boundaryMode": true,
                            "id": "627bbc538d528a75d44cfcab|9500a99b-8f18-5309-989d-f77bfb795652"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-93-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "boundaryMode": true,
                            "id": "627bbc538d528a75d44cfcab|9500a99b-8f18-5309-989d-f77bfb795652"
                        },
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-93-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "outSine",
                        "duration": 700,
                        "target": {
                            "boundaryMode": true,
                            "id": "627bbc538d528a75d44cfcab|9500a99b-8f18-5309-989d-f77bfb795652"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-93-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "outSine",
                        "duration": 700,
                        "target": {
                            "boundaryMode": true,
                            "id": "627bbc538d528a75d44cfcab|9500a99b-8f18-5309-989d-f77bfb795652"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1652280508379
        },
        "a-94": {
            "id": "a-94",
            "title": "cursor move 9",
            "continuousParameterGroups": [{
                "id": "a-94-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-94-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627bcdafc555cc9875991e86|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "xValue": 0,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-94-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627bcdafc555cc9875991e86|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "xValue": 100,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-94-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-94-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627bcdafc555cc9875991e86|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "VH"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-94-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "627bcdafc555cc9875991e86|1652d1a6-cf5b-264b-3ac9-ebb40020f7e0"
                            },
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "VH",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1571225158949
        },
        "a-96": {
            "id": "a-96",
            "title": "hide boxes",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-96-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".view_case_button_wrapper",
                            "selectorGuids": ["088d969a-9c76-7c0d-3963-751e4074aebd"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-96-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".scrolling_icon_wrapper",
                            "selectorGuids": ["49d25c0d-576d-d9f5-ce42-7e7a9452c6bb"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-96-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".show_work_button_wrapper",
                            "selectorGuids": ["b3b6c5ae-6c74-4139-5cde-01c0e1a1ff66"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1652356890597
        },
        "a-97": {
            "id": "a-97",
            "title": "hide boxes 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-97-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".view_case_button_wrapper",
                            "selectorGuids": ["088d969a-9c76-7c0d-3963-751e4074aebd"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-97-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".scrolling_icon_wrapper",
                            "selectorGuids": ["49d25c0d-576d-d9f5-ce42-7e7a9452c6bb"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-97-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".show_work_button_wrapper",
                            "selectorGuids": ["b3b6c5ae-6c74-4139-5cde-01c0e1a1ff66"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1652356890597
        },
        "a-99": {
            "id": "a-99",
            "title": "header holder scroll - out 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-99-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h2-2",
                            "selectorGuids": ["2021215e-ded6-a449-f48d-9a369a8f032c"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571217521894
        },
        "a-100": {
            "id": "a-100",
            "title": "footer link hover - in 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-100-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-link-underline",
                            "selectorGuids": ["24e41fb5-b98a-e89a-7d94-401a96e0e721"]
                        },
                        "xValue": 101,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-100-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 350,
                        "target": {
                            "useEventTarget": true,
                            "id": "811ee09e-6d3c-9c3a-e5f2-1a0684ce711d"
                        },
                        "globalSwatchId": "",
                        "rValue": 182,
                        "bValue": 182,
                        "gValue": 182,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-100-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-link-underline",
                            "selectorGuids": ["24e41fb5-b98a-e89a-7d94-401a96e0e721"]
                        },
                        "xValue": -101,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1571046906816
        },
        "a-98": {
            "id": "a-98",
            "title": "header holder scroll - in 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-98-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 700,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h2-2",
                            "selectorGuids": ["2021215e-ded6-a449-f48d-9a369a8f032c"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-98-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".h2-2",
                            "selectorGuids": ["2021215e-ded6-a449-f48d-9a369a8f032c"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1571217521894
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});
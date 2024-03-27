(function () {/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    'use strict'; var k; function aa(a) { var b = 0; return function () { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) { if (a == Array.prototype || a == Object.prototype) return a; a[b] = c.value; return a };
    function ca(a) { a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global]; for (var b = 0; b < a.length; ++b) { var c = a[b]; if (c && c.Math == Math) return c } throw Error("Cannot find global object"); }
    var da = ca(this); function ea(a, b) { if (b) a: { var c = da; a = a.split("."); for (var d = 0; d < a.length - 1; d++) { var e = a[d]; if (!(e in c)) break a; c = c[e] } a = a[a.length - 1]; d = c[a]; b = b(d); b != d && null != b && ba(c, a, { configurable: !0, writable: !0, value: b }) } }
    ea("Symbol", function (a) {
        function b(f) { if (this instanceof b) throw new TypeError("Symbol is not a constructor"); return new c(d + (f || "") + "_" + e++, f) }
        function c(f, g) { this.i = f; ba(this, "description", { configurable: !0, writable: !0, value: g }) }
        if (a) return a; c.prototype.toString = function () { return this.i };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_", e = 0; return b
    });
    ea("Symbol.iterator", function (a) { if (a) return a; a = Symbol("Symbol.iterator"); for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) { var d = da[b[c]]; "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, { configurable: !0, writable: !0, value: function () { return fa(aa(this)) } }) } return a });
    function fa(a) {
        a = { next: a }; a[Symbol.iterator] = function () { return this };
        return a
    }
    function p(a) { var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator]; return b ? b.call(a) : { next: aa(a) } }
    function ha(a) { for (var b, c = []; !(b = a.next()).done;)c.push(b.value); return c }
    function ia(a) { return a instanceof Array ? a : ha(p(a)) }
    var ja = "function" == typeof Object.create ? Object.create : function (a) {
        function b() { }
        b.prototype = a; return new b
    }, ka = function () {
        function a() {
            function c() { }
            new c; Reflect.construct(c, [], function () { });
            return new c instanceof c
        }
        if ("undefined" != typeof Reflect && Reflect.construct) { if (a()) return Reflect.construct; var b = Reflect.construct; return function (c, d, e) { c = b(c, d); e && Reflect.setPrototypeOf(c, e.prototype); return c } } return function (c, d, e) {
            void 0 === e && (e = c);
            e = ja(e.prototype || Object.prototype); return Function.prototype.apply.call(c, e, d) || e
        }
    }(), la;
    if ("function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf; else { var ma; a: { var na = { a: !0 }, oa = {}; try { oa.__proto__ = na; ma = oa.a; break a } catch (a) { } ma = !1 } la = ma ? function (a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null } var pa = la;
    function q(a, b) { a.prototype = ja(b.prototype); a.prototype.constructor = a; if (pa) pa(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) { var d = Object.getOwnPropertyDescriptor(b, c); d && Object.defineProperty(a, c, d) } else a[c] = b[c]; a.T = b.prototype }
    function ra() { this.B = !1; this.o = null; this.j = void 0; this.i = 1; this.G = this.A = 0; this.C = this.l = null }
    function sa(a) { if (a.B) throw new TypeError("Generator is already running"); a.B = !0 }
    ra.prototype.K = function (a) { this.j = a };
    function ta(a, b) { a.l = { Wd: b, me: !0 }; a.i = a.A || a.G }
    ra.prototype.return = function (a) { this.l = { return: a }; this.i = this.G };
    function r(a, b, c) { a.i = c; return { value: b } }
    ra.prototype.ca = function (a) { this.i = a };
    function ua(a, b, c) { a.A = b; void 0 != c && (a.G = c) }
    function va(a) { a.A = 0; var b = a.l.Wd; a.l = null; return b }
    function wa(a) { a.C = [a.l]; a.A = 0; a.G = 0 }
    function xa(a) { var b = a.C.splice(0)[0]; (b = a.l = a.l || b) ? b.me ? a.i = a.A || a.G : void 0 != b.ca && a.G < b.ca ? (a.i = b.ca, a.l = null) : a.i = a.G : a.i = 0 }
    function ya(a) { this.i = new ra; this.j = a }
    function za(a, b) {
        sa(a.i); var c = a.i.o; if (c) return Aa(a, "return" in c ? c["return"] : function (d) { return { value: d, done: !0 } }, b, a.i.return);
        a.i.return(b); return Ba(a)
    }
    function Aa(a, b, c, d) { try { var e = b.call(a.i.o, c); if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object"); if (!e.done) return a.i.B = !1, e; var f = e.value } catch (g) { return a.i.o = null, ta(a.i, g), Ba(a) } a.i.o = null; d.call(a.i, f); return Ba(a) }
    function Ba(a) { for (; a.i.i;)try { var b = a.j(a.i); if (b) return a.i.B = !1, { value: b.value, done: !1 } } catch (c) { a.i.j = void 0, ta(a.i, c) } a.i.B = !1; if (a.i.l) { b = a.i.l; a.i.l = null; if (b.me) throw b.Wd; return { value: b.return, done: !0 } } return { value: void 0, done: !0 } }
    function Ca(a) {
        this.next = function (b) { sa(a.i); a.i.o ? b = Aa(a, a.i.o.next, b, a.i.K) : (a.i.K(b), b = Ba(a)); return b };
        this.throw = function (b) { sa(a.i); a.i.o ? b = Aa(a, a.i.o["throw"], b, a.i.K) : (ta(a.i, b), b = Ba(a)); return b };
        this.return = function (b) { return za(a, b) };
        this[Symbol.iterator] = function () { return this }
    }
    function Da(a, b) { b = new Ca(new ya(b)); pa && a.prototype && pa(b, a.prototype); return b }
    ea("Reflect", function (a) { return a ? a : {} });
    ea("Reflect.construct", function () { return ka });
    ea("Reflect.setPrototypeOf", function (a) { return a ? a : pa ? function (b, c) { try { return pa(b, c), !0 } catch (d) { return !1 } } : null });
    ea("Promise", function (a) {
        function b(g) { this.L = 0; this.Za = void 0; this.i = []; this.A = !1; var h = this.j(); try { g(h.resolve, h.reject) } catch (l) { h.reject(l) } }
        function c() { this.i = null }
        function d(g) { return g instanceof b ? g : new b(function (h) { h(g) }) }
        if (a) return a; c.prototype.j = function (g) { if (null == this.i) { this.i = []; var h = this; this.l(function () { h.A() }) } this.i.push(g) };
        var e = da.setTimeout; c.prototype.l = function (g) { e(g, 0) };
        c.prototype.A = function () { for (; this.i && this.i.length;) { var g = this.i; this.i = []; for (var h = 0; h < g.length; ++h) { var l = g[h]; g[h] = null; try { l() } catch (m) { this.o(m) } } } this.i = null };
        c.prototype.o = function (g) { this.l(function () { throw g; }) };
        b.prototype.j = function () {
            function g(m) { return function (n) { l || (l = !0, m.call(h, n)) } }
            var h = this, l = !1; return { resolve: g(this.H), reject: g(this.l) }
        };
        b.prototype.H = function (g) { if (g === this) this.l(new TypeError("A Promise cannot resolve to itself")); else if (g instanceof b) this.N(g); else { a: switch (typeof g) { case "object": var h = null != g; break a; case "function": h = !0; break a; default: h = !1 }h ? this.C(g) : this.o(g) } };
        b.prototype.C = function (g) { var h = void 0; try { h = g.then } catch (l) { this.l(l); return } "function" == typeof h ? this.U(h, g) : this.o(g) };
        b.prototype.l = function (g) { this.G(2, g) };
        b.prototype.o = function (g) { this.G(1, g) };
        b.prototype.G = function (g, h) { if (0 != this.L) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.L); this.L = g; this.Za = h; 2 === this.L && this.M(); this.B() };
        b.prototype.M = function () { var g = this; e(function () { if (g.K()) { var h = da.console; "undefined" !== typeof h && h.error(g.Za) } }, 1) };
        b.prototype.K = function () { if (this.A) return !1; var g = da.CustomEvent, h = da.Event, l = da.dispatchEvent; if ("undefined" === typeof l) return !0; "function" === typeof g ? g = new g("unhandledrejection", { cancelable: !0 }) : "function" === typeof h ? g = new h("unhandledrejection", { cancelable: !0 }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g)); g.promise = this; g.reason = this.Za; return l(g) };
        b.prototype.B = function () { if (null != this.i) { for (var g = 0; g < this.i.length; ++g)f.j(this.i[g]); this.i = null } };
        var f = new c; b.prototype.N = function (g) { var h = this.j(); g.Yb(h.resolve, h.reject) };
        b.prototype.U = function (g, h) { var l = this.j(); try { g.call(h, l.resolve, l.reject) } catch (m) { l.reject(m) } };
        b.prototype.then = function (g, h) {
            function l(w, v) { return "function" == typeof w ? function (C) { try { m(w(C)) } catch (O) { n(O) } } : v }
            var m, n, t = new b(function (w, v) { m = w; n = v });
            this.Yb(l(g, m), l(h, n)); return t
        };
        b.prototype.catch = function (g) { return this.then(void 0, g) };
        b.prototype.Yb = function (g, h) {
            function l() { switch (m.L) { case 1: g(m.Za); break; case 2: h(m.Za); break; default: throw Error("Unexpected state: " + m.L); } }
            var m = this; null == this.i ? f.j(l) : this.i.push(l); this.A = !0
        };
        b.resolve = d; b.reject = function (g) { return new b(function (h, l) { l(g) }) };
        b.race = function (g) { return new b(function (h, l) { for (var m = p(g), n = m.next(); !n.done; n = m.next())d(n.value).Yb(h, l) }) };
        b.all = function (g) {
            var h = p(g), l = h.next(); return l.done ? d([]) : new b(function (m, n) {
                function t(C) { return function (O) { w[C] = O; v--; 0 == v && m(w) } }
                var w = [], v = 0; do w.push(void 0), v++, d(l.value).Yb(t(w.length - 1), n), l = h.next(); while (!l.done)
            })
        };
        return b
    });
    function Ea(a, b) { return Object.prototype.hasOwnProperty.call(a, b) }
    ea("WeakMap", function (a) {
        function b(l) { this.i = (h += Math.random() + 1).toString(); if (l) { l = p(l); for (var m; !(m = l.next()).done;)m = m.value, this.set(m[0], m[1]) } }
        function c() { }
        function d(l) { var m = typeof l; return "object" === m && null !== l || "function" === m }
        function e(l) { if (!Ea(l, g)) { var m = new c; ba(l, g, { value: m }) } }
        function f(l) { var m = Object[l]; m && (Object[l] = function (n) { if (n instanceof c) return n; Object.isExtensible(n) && e(n); return m(n) }) }
        if (function () { if (!a || !Object.seal) return !1; try { var l = Object.seal({}), m = Object.seal({}), n = new a([[l, 2], [m, 3]]); if (2 != n.get(l) || 3 != n.get(m)) return !1; n.delete(l); n.set(m, 4); return !n.has(l) && 4 == n.get(m) } catch (t) { return !1 } }()) return a;
        var g = "$jscomp_hidden_" + Math.random(); f("freeze"); f("preventExtensions"); f("seal"); var h = 0; b.prototype.set = function (l, m) { if (!d(l)) throw Error("Invalid WeakMap key"); e(l); if (!Ea(l, g)) throw Error("WeakMap key fail: " + l); l[g][this.i] = m; return this };
        b.prototype.get = function (l) { return d(l) && Ea(l, g) ? l[g][this.i] : void 0 };
        b.prototype.has = function (l) { return d(l) && Ea(l, g) && Ea(l[g], this.i) };
        b.prototype.delete = function (l) { return d(l) && Ea(l, g) && Ea(l[g], this.i) ? delete l[g][this.i] : !1 };
        return b
    });
    ea("Map", function (a) {
        function b() { var h = {}; return h.previous = h.next = h.head = h }
        function c(h, l) { var m = h.i; return fa(function () { if (m) { for (; m.head != h.i;)m = m.previous; for (; m.next != m.head;)return m = m.next, { done: !1, value: l(m) }; m = null } return { done: !0, value: void 0 } }) }
        function d(h, l) { var m = l && typeof l; "object" == m || "function" == m ? f.has(l) ? m = f.get(l) : (m = "" + ++g, f.set(l, m)) : m = "p_" + l; var n = h.data_[m]; if (n && Ea(h.data_, m)) for (h = 0; h < n.length; h++) { var t = n[h]; if (l !== l && t.key !== t.key || l === t.key) return { id: m, list: n, index: h, ja: t } } return { id: m, list: n, index: -1, ja: void 0 } }
        function e(h) { this.data_ = {}; this.i = b(); this.size = 0; if (h) { h = p(h); for (var l; !(l = h.next()).done;)l = l.value, this.set(l[0], l[1]) } }
        if (function () { if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1; try { var h = Object.seal({ x: 4 }), l = new a(p([[h, "s"]])); if ("s" != l.get(h) || 1 != l.size || l.get({ x: 4 }) || l.set({ x: 4 }, "t") != l || 2 != l.size) return !1; var m = l.entries(), n = m.next(); if (n.done || n.value[0] != h || "s" != n.value[1]) return !1; n = m.next(); return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0 } catch (t) { return !1 } }()) return a;
        var f = new WeakMap; e.prototype.set = function (h, l) { h = 0 === h ? 0 : h; var m = d(this, h); m.list || (m.list = this.data_[m.id] = []); m.ja ? m.ja.value = l : (m.ja = { next: this.i, previous: this.i.previous, head: this.i, key: h, value: l }, m.list.push(m.ja), this.i.previous.next = m.ja, this.i.previous = m.ja, this.size++); return this };
        e.prototype.delete = function (h) { h = d(this, h); return h.ja && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.data_[h.id], h.ja.previous.next = h.ja.next, h.ja.next.previous = h.ja.previous, h.ja.head = null, this.size--, !0) : !1 };
        e.prototype.clear = function () { this.data_ = {}; this.i = this.i.previous = b(); this.size = 0 };
        e.prototype.has = function (h) { return !!d(this, h).ja };
        e.prototype.get = function (h) { return (h = d(this, h).ja) && h.value };
        e.prototype.entries = function () { return c(this, function (h) { return [h.key, h.value] }) };
        e.prototype.keys = function () { return c(this, function (h) { return h.key }) };
        e.prototype.values = function () { return c(this, function (h) { return h.value }) };
        e.prototype.forEach = function (h, l) { for (var m = this.entries(), n; !(n = m.next()).done;)n = n.value, h.call(l, n[1], n[0], this) };
        e.prototype[Symbol.iterator] = e.prototype.entries; var g = 0; return e
    });
    function Fa(a, b, c) { if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined"); if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression"); return a + "" }
    ea("String.prototype.endsWith", function (a) { return a ? a : function (b, c) { var d = Fa(this, b, "endsWith"); b += ""; void 0 === c && (c = d.length); c = Math.max(0, Math.min(c | 0, d.length)); for (var e = b.length; 0 < e && 0 < c;)if (d[--c] != b[--e]) return !1; return 0 >= e } });
    ea("Array.prototype.find", function (a) { return a ? a : function (b, c) { a: { var d = this; d instanceof String && (d = String(d)); for (var e = d.length, f = 0; f < e; f++) { var g = d[f]; if (b.call(c, g, f, d)) { b = g; break a } } b = void 0 } return b } });
    ea("String.prototype.startsWith", function (a) { return a ? a : function (b, c) { var d = Fa(this, b, "startsWith"); b += ""; var e = d.length, f = b.length; c = Math.max(0, Math.min(c | 0, d.length)); for (var g = 0; g < f && c < e;)if (d[c++] != b[g++]) return !1; return g >= f } });
    ea("Object.setPrototypeOf", function (a) { return a || pa });
    var Ga = "function" == typeof Object.assign ? Object.assign : function (a, b) { for (var c = 1; c < arguments.length; c++) { var d = arguments[c]; if (d) for (var e in d) Ea(d, e) && (a[e] = d[e]) } return a };
    ea("Object.assign", function (a) { return a || Ga });
    function Ha(a, b) {
        a instanceof String && (a += ""); var c = 0, d = !1, e = { next: function () { if (!d && c < a.length) { var f = c++; return { value: b(f, a[f]), done: !1 } } d = !0; return { done: !0, value: void 0 } } };
        e[Symbol.iterator] = function () { return e };
        return e
    }
    ea("Array.prototype.entries", function (a) { return a ? a : function () { return Ha(this, function (b, c) { return [b, c] }) } });
    ea("Object.entries", function (a) { return a ? a : function (b) { var c = [], d; for (d in b) Ea(b, d) && c.push([d, b[d]]); return c } });
    ea("Array.prototype.keys", function (a) { return a ? a : function () { return Ha(this, function (b) { return b }) } });
    ea("Array.prototype.values", function (a) { return a ? a : function () { return Ha(this, function (b, c) { return c }) } });
    ea("Set", function (a) {
        function b(c) { this.i = new Map; if (c) { c = p(c); for (var d; !(d = c.next()).done;)this.add(d.value) } this.size = this.i.size }
        if (function () { if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1; try { var c = Object.seal({ x: 4 }), d = new a(p([c])); if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({ x: 4 }) != d || 2 != d.size) return !1; var e = d.entries(), f = e.next(); if (f.done || f.value[0] != c || f.value[1] != c) return !1; f = e.next(); return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done } catch (g) { return !1 } }()) return a;
        b.prototype.add = function (c) { c = 0 === c ? 0 : c; this.i.set(c, c); this.size = this.i.size; return this };
        b.prototype.delete = function (c) { c = this.i.delete(c); this.size = this.i.size; return c };
        b.prototype.clear = function () { this.i.clear(); this.size = 0 };
        b.prototype.has = function (c) { return this.i.has(c) };
        b.prototype.entries = function () { return this.i.entries() };
        b.prototype.values = function () { return this.i.values() };
        b.prototype.keys = b.prototype.values; b.prototype[Symbol.iterator] = b.prototype.values; b.prototype.forEach = function (c, d) { var e = this; this.i.forEach(function (f) { return c.call(d, f, f, e) }) };
        return b
    });
    ea("Array.from", function (a) {
        return a ? a : function (b, c, d) {
            c = null != c ? c : function (h) { return h };
            var e = [], f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator]; if ("function" == typeof f) { b = f.call(b); for (var g = 0; !(f = b.next()).done;)e.push(c.call(d, f.value, g++)) } else for (f = b.length, g = 0; g < f; g++)e.push(c.call(d, b[g], g)); return e
        }
    });
    ea("Number.isNaN", function (a) { return a ? a : function (b) { return "number" === typeof b && isNaN(b) } });
    ea("Number.MAX_SAFE_INTEGER", function () { return 9007199254740991 });
    ea("Object.is", function (a) { return a ? a : function (b, c) { return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c } });
    ea("Array.prototype.includes", function (a) { return a ? a : function (b, c) { var d = this; d instanceof String && (d = String(d)); var e = d.length; c = c || 0; for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) { var f = d[c]; if (f === b || Object.is(f, b)) return !0 } return !1 } });
    ea("String.prototype.includes", function (a) { return a ? a : function (b, c) { return -1 !== Fa(this, b, "includes").indexOf(b, c || 0) } });
    ea("Object.values", function (a) { return a ? a : function (b) { var c = [], d; for (d in b) Ea(b, d) && c.push(b[d]); return c } });
    var Ia = Ia || {}, u = this || self; function x(a, b, c) { a = a.split("."); c = c || u; a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]); for (var d; a.length && (d = a.shift());)a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b }
    function y(a, b) { a = a.split("."); b = b || u; for (var c = 0; c < a.length; c++)if (b = b[a[c]], null == b) return null; return b }
    function Ja() { }
    function Ka(a) { a.da = void 0; a.getInstance = function () { return a.da ? a.da : a.da = new a } }
    function La(a) { var b = typeof a; return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null" }
    function Ma(a) { var b = La(a); return "array" == b || "object" == b && "number" == typeof a.length }
    function Na(a) { var b = typeof a; return "object" == b && null != a || "function" == b }
    function Oa(a) { return Object.prototype.hasOwnProperty.call(a, Qa) && a[Qa] || (a[Qa] = ++Ra) }
    var Qa = "closure_uid_" + (1E9 * Math.random() >>> 0), Ra = 0; function Sa(a, b, c) { return a.call.apply(a.bind, arguments) }
    function Ta(a, b, c) { if (!a) throw Error(); if (2 < arguments.length) { var d = Array.prototype.slice.call(arguments, 2); return function () { var e = Array.prototype.slice.call(arguments); Array.prototype.unshift.apply(e, d); return a.apply(b, e) } } return function () { return a.apply(b, arguments) } }
    function z(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? z = Sa : z = Ta; return z.apply(null, arguments) }
    function Ua(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function () { var d = c.slice(); d.push.apply(d, arguments); return a.apply(this, d) } }
    function Va() { return Date.now() }
    function A(a, b) {
        function c() { }
        c.prototype = b.prototype; a.T = b.prototype; a.prototype = new c; a.prototype.constructor = a; a.gj = function (d, e, f) { for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)g[h - 2] = arguments[h]; return b.prototype[e].apply(d, g) }
    }
    function Wa(a) { return a }
    function Xa(a) { var b = null, c = u.trustedTypes; if (!c || !c.createPolicy) return b; try { b = c.createPolicy(a, { createHTML: Wa, createScript: Wa, createScriptURL: Wa }) } catch (d) { u.console && u.console.error(d.message) } return b }
    ; function Ya(a, b) { if (Error.captureStackTrace) Error.captureStackTrace(this, Ya); else { var c = Error().stack; c && (this.stack = c) } a && (this.message = String(a)); void 0 !== b && (this.Ef = b) }
    A(Ya, Error); Ya.prototype.name = "CustomError"; var Za; function $a(a, b) { a = a.split("%s"); for (var c = "", d = a.length - 1, e = 0; e < d; e++)c += a[e] + (e < b.length ? b[e] : "%s"); Ya.call(this, c + a[d]) }
    A($a, Ya); $a.prototype.name = "AssertionError"; function ab(a) { a = a.url; var b = /[?&]dsh=1(&|$)/.test(a); this.l = !b && /[?&]ae=1(&|$)/.test(a); this.o = !b && /[?&]ae=2(&|$)/.test(a); if ((this.i = /[?&]adurl=([^&]*)/.exec(a)) && this.i[1]) { try { var c = decodeURIComponent(this.i[1]) } catch (d) { c = null } this.j = c } }
    ; function bb(a) { var b = !1, c; return function () { b || (c = a(), b = !0); return c } }
    ; var cb = Array.prototype.indexOf ? function (a, b, c) { return Array.prototype.indexOf.call(a, b, c) } : function (a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, c); for (; c < a.length; c++)if (c in a && a[c] === b) return c; return -1
    }, db = Array.prototype.lastIndexOf ? function (a, b) { return Array.prototype.lastIndexOf.call(a, b, a.length - 1) } : function (a, b) {
        var c = a.length - 1;
        0 > c && (c = Math.max(0, a.length + c)); if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.lastIndexOf(b, c); for (; 0 <= c; c--)if (c in a && a[c] === b) return c; return -1
    }, B = Array.prototype.forEach ? function (a, b, c) { Array.prototype.forEach.call(a, b, c) } : function (a, b, c) { for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a) }, eb = Array.prototype.filter ? function (a, b, c) { return Array.prototype.filter.call(a, b, c) } : function (a, b, c) {
        for (var d = a.length, e = [], f = 0, g = "string" ===
            typeof a ? a.split("") : a, h = 0; h < d; h++)if (h in g) {
                var l = g[h];
                b.call(c, l, h, a) && (e[f++] = l)
            } return e
    }, fb = Array.prototype.map ? function (a, b, c) { return Array.prototype.map.call(a, b, c) } : function (a, b, c) {
        for (var d = a.length, e = Array(d), f = "string" === typeof a ? a.split("") : a, g = 0; g < d; g++)g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    }, gb = Array.prototype.reduce ? function (a, b, c) { return Array.prototype.reduce.call(a, b, c) } : function (a, b, c) {
        var d = c;
        B(a, function (e, f) { d = b.call(void 0, d, e, f, a) });
        return d
    }, hb = Array.prototype.some ? function (a, b) { return Array.prototype.some.call(a, b, void 0) } : function (a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }, ib = Array.prototype.every ? function (a, b) { return Array.prototype.every.call(a, b, void 0) } : function (a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)if (e in d && !b.call(void 0, d[e], e, a)) return !1;
        return !0
    };
    function jb(a, b, c) { b = kb(a, b, c); return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b] }
    function kb(a, b, c) { for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)if (f in e && b.call(c, e[f], f, a)) return f; return -1 }
    function lb(a, b) { a: { for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)if (d in c && b.call(void 0, c[d], d, a)) { b = d; break a } b = -1 } return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b] }
    function mb(a, b) { return 0 <= cb(a, b) }
    function nb(a, b) { mb(a, b) || a.push(b) }
    function ob(a, b) { b = cb(a, b); var c; (c = 0 <= b) && pb(a, b); return c }
    function pb(a, b) { Array.prototype.splice.call(a, b, 1) }
    function qb(a, b) { b = kb(a, b, void 0); 0 <= b && pb(a, b) }
    function rb(a) { return Array.prototype.concat.apply([], arguments) }
    function sb(a) { var b = a.length; if (0 < b) { for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d]; return c } return [] }
    function tb(a, b) { for (var c = 1; c < arguments.length; c++) { var d = arguments[c]; if (Ma(d)) { var e = a.length || 0, f = d.length || 0; a.length = e + f; for (var g = 0; g < f; g++)a[e + g] = d[g] } else a.push(d) } }
    function ub(a, b, c, d) { return Array.prototype.splice.apply(a, vb(arguments, 1)) }
    function vb(a, b, c) { return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c) }
    function wb(a, b) { if (!Ma(a) || !Ma(b) || a.length != b.length) return !1; for (var c = a.length, d = xb, e = 0; e < c; e++)if (!d(a[e], b[e])) return !1; return !0 }
    function yb(a, b) { return a > b ? 1 : a < b ? -1 : 0 }
    function xb(a, b) { return a === b }
    function zb(a) { for (var b = [], c = 0; c < arguments.length; c++) { var d = arguments[c]; if (Array.isArray(d)) for (var e = 0; e < d.length; e += 8192)for (var f = zb.apply(null, vb(d, e, e + 8192)), g = 0; g < f.length; g++)b.push(f[g]); else b.push(d) } return b }
    ; function Ab(a, b, c) { for (var d in a) b.call(c, a[d], d, a) }
    function Bb(a, b, c) { var d = {}, e; for (e in a) b.call(c, a[e], e, a) && (d[e] = a[e]); return d }
    function Cb(a) { var b = 0, c; for (c in a) b++; return b }
    function Db(a, b) { a: { for (var c in a) if (a[c] == b) { a = !0; break a } a = !1 } return a }
    function Eb(a) { var b = [], c = 0, d; for (d in a) b[c++] = a[d]; return b }
    function Fb(a) { var b = [], c = 0, d; for (d in a) b[c++] = d; return b }
    function Gb(a, b) { for (var c in a) if (b.call(void 0, a[c], c, a)) return c }
    function Hb(a) { for (var b in a) return !1; return !0 }
    function Ib(a, b) { if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"'); a[b] = !0 }
    function Jb(a, b) { for (var c in a) if (!(c in b) || a[c] !== b[c]) return !1; for (var d in b) if (!(d in a)) return !1; return !0 }
    function Kb(a) { var b = {}, c; for (c in a) b[c] = a[c]; return b }
    function Lb(a) { if (!a || "object" !== typeof a) return a; if ("function" === typeof a.clone) return a.clone(); if ("undefined" !== typeof Map && a instanceof Map) return new Map(a); if ("undefined" !== typeof Set && a instanceof Set) return new Set(a); var b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length), c; for (c in a) b[c] = Lb(a[c]); return b }
    var Mb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "); function Nb(a, b) { for (var c, d, e = 1; e < arguments.length; e++) { d = arguments[e]; for (c in d) a[c] = d[c]; for (var f = 0; f < Mb.length; f++)c = Mb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]) } }
    function Ob(a) { var b = arguments.length; if (1 == b && Array.isArray(arguments[0])) return Ob.apply(null, arguments[0]); for (var c = {}, d = 0; d < b; d++)c[arguments[d]] = !0; return c }
    ; var Pb = { area: !0, base: !0, br: !0, col: !0, command: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }; var Qb; function Rb() { void 0 === Qb && (Qb = Xa("goog#html")); return Qb }
    ; function Sb(a, b) { this.i = a === Tb && b || ""; this.j = Ub }
    Sb.prototype.Ga = !0; Sb.prototype.ra = function () { return this.i };
    function Vb(a) { return a instanceof Sb && a.constructor === Sb && a.j === Ub ? a.i : "type_error:Const" }
    function Wb(a) { return new Sb(Tb, a) }
    var Ub = {}, Tb = {}; Wb(""); var Xb = {}; function Yb(a) { this.i = Xb === Xb ? a : ""; this.Ga = !0 }
    Yb.prototype.ra = function () { return this.i.toString() };
    Yb.prototype.toString = function () { return this.i.toString() }; var Zb = RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"), $b = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]"); function ac(a, b) { this.i = b === bc ? a : "" }
    k = ac.prototype; k.Ga = !0; k.ra = function () { return this.i.toString() };
    k.Vc = !0; k.vb = function () { return 1 };
    k.toString = function () { return this.i + "" };
    function cc(a) { if (a instanceof ac && a.constructor === ac) return a.i; La(a); return "type_error:TrustedResourceUrl" }
    var bc = {}; function dc(a) { var b = Rb(); a = b ? b.createScriptURL(a) : a; return new ac(a, bc) }
    ; var ec = String.prototype.trim ? function (a) { return a.trim() } : function (a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1] };
    function fc(a, b) { if (b) a = a.replace(gc, "&amp;").replace(hc, "&lt;").replace(ic, "&gt;").replace(jc, "&quot;").replace(kc, "&#39;").replace(lc, "&#0;"); else { if (!mc.test(a)) return a; -1 != a.indexOf("&") && (a = a.replace(gc, "&amp;")); -1 != a.indexOf("<") && (a = a.replace(hc, "&lt;")); -1 != a.indexOf(">") && (a = a.replace(ic, "&gt;")); -1 != a.indexOf('"') && (a = a.replace(jc, "&quot;")); -1 != a.indexOf("'") && (a = a.replace(kc, "&#39;")); -1 != a.indexOf("\x00") && (a = a.replace(lc, "&#0;")) } return a }
    var gc = /&/g, hc = /</g, ic = />/g, jc = /"/g, kc = /'/g, lc = /\x00/g, mc = /[\x00&<>"']/;
    function nc(a, b) { var c = 0; a = ec(String(a)).split("."); b = ec(String(b)).split("."); for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) { var f = a[e] || "", g = b[e] || ""; do { f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""]; g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""]; if (0 == f[0].length && 0 == g[0].length) break; c = oc(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || oc(0 == f[2].length, 0 == g[2].length) || oc(f[2], g[2]); f = f[3]; g = g[3] } while (0 == c) } return c }
    function oc(a, b) { return a < b ? -1 : a > b ? 1 : 0 }
    ; function pc(a, b) { this.i = b === qc ? a : "" }
    k = pc.prototype; k.Ga = !0; k.ra = function () { return this.i.toString() };
    k.Vc = !0; k.vb = function () { return 1 };
    k.toString = function () { return this.i.toString() };
    function rc(a) { if (a instanceof pc && a.constructor === pc) return a.i; La(a); return "type_error:SafeUrl" }
    var sc = RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$', "i"), tc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i; function uc(a) { a = String(a); a = a.replace(/(%0A|%0D)/g, ""); var b = a.match(tc); return b && sc.test(b[1]) ? new pc(a, qc) : null }
    var vc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i; function wc(a) { if (a instanceof pc) return a; a = "object" == typeof a && a.Ga ? a.ra() : String(a); return vc.test(a) ? new pc(a, qc) : uc(a) }
    function xc(a, b) { if (a instanceof pc) return a; a = "object" == typeof a && a.Ga ? a.ra() : String(a); if (b && /^data:/i.test(a) && (b = uc(a) || yc, b.ra() == a)) return b; vc.test(a) || (a = "about:invalid#zClosurez"); return new pc(a, qc) }
    var qc = {}, yc = new pc("about:invalid#zClosurez", qc); var zc = {}; function Ac(a, b) { this.i = b === zc ? a : ""; this.Ga = !0 }
    Ac.prototype.ra = function () { return this.i };
    Ac.prototype.toString = function () { return this.i.toString() };
    var Bc = new Ac("", zc); function Cc(a) { if (a instanceof pc) return 'url("' + rc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")'; if (a instanceof Sb) a = Vb(a); else { a = String(a); var b = a.replace(Dc, "$1").replace(Dc, "$1").replace(Ec, "url"); if (Fc.test(b)) { if (b = !Gc.test(a)) { for (var c = b = !0, d = 0; d < a.length; d++) { var e = a.charAt(d); "'" == e && c ? b = !b : '"' == e && b && (c = !c) } b = b && c && Hc(a) } a = b ? Ic(a) : "zClosurez" } else a = "zClosurez" } if (/[{;}]/.test(a)) throw new $a("Value does not allow [{;}], got: %s.", [a]); return a }
    function Hc(a) { for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) { var e = a.charAt(d); if ("]" == e) { if (b) return !1; b = !0 } else if ("[" == e) { if (!b) return !1; b = !1 } else if (!b && !c.test(e)) return !1 } return b }
    var Fc = RegExp("^[-,.\"'%_!# a-zA-Z0-9\\[\\]]+$"), Ec = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"), Dc = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-z.%\\[\\], ]+\\)", "g"), Gc = /\/\*/; function Ic(a) {
        return a.replace(Ec, function (b, c, d, e) {
            var f = ""; d = d.replace(/^(['"])(.*)\1$/, function (g, h, l) { f = h; return l });
            b = (wc(d) || yc).ra(); return c + f + b + f + e
        })
    }
    ; var Jc; a: { var Kc = u.navigator; if (Kc) { var Lc = Kc.userAgent; if (Lc) { Jc = Lc; break a } } Jc = "" } function D(a) { return -1 != Jc.indexOf(a) }
    ; function Mc() { return D("Firefox") || D("FxiOS") }
    function Nc() { return D("Safari") && !(Oc() || D("Coast") || D("Opera") || D("Edge") || D("Edg/") || D("OPR") || Mc() || D("Silk") || D("Android")) }
    function Oc() { return (D("Chrome") || D("CriOS")) && !D("Edge") }
    function Pc() { return D("Android") && !(Oc() || Mc() || D("Opera") || D("Silk")) }
    ; var Qc = {}; function Rc(a, b, c) { this.i = c === Qc ? a : ""; this.j = b; this.Ga = this.Vc = !0 }
    Rc.prototype.vb = function () { return this.j };
    Rc.prototype.ra = function () { return this.i.toString() };
    Rc.prototype.toString = function () { return this.i.toString() };
    function Sc(a) { if (a instanceof Rc && a.constructor === Rc) return a.i; La(a); return "type_error:SafeHtml" }
    function Tc(a) { if (a instanceof Rc) return a; var b = "object" == typeof a, c = null; b && a.Vc && (c = a.vb()); return Uc(fc(b && a.Ga ? a.ra() : String(a)), c) }
    function Vc(a) { if (!Wc.test(a)) throw Error(""); if (a.toUpperCase() in Xc) throw Error(""); }
    function Yc(a) {
        function b(f) { Array.isArray(f) ? f.forEach(b) : (f = Tc(f), e.push(Sc(f).toString()), f = f.vb(), 0 == d ? d = f : 0 != f && d != f && (d = null)) }
        var c = Tc(Zc), d = c.vb(), e = []; a.forEach(b); return Uc(e.join(Sc(c).toString()), d)
    }
    function $c(a) { return Yc(Array.prototype.slice.call(arguments)) }
    function Uc(a, b) { var c = Rb(); a = c ? c.createHTML(a) : a; return new Rc(a, b, Qc) }
    function ad(a, b, c) {
        var d = null, e = ""; if (b) for (n in b) if (Object.prototype.hasOwnProperty.call(b, n)) {
            if (!Wc.test(n)) throw Error(""); var f = b[n]; if (null != f) {
                var g = n; if (f instanceof Sb) f = Vb(f); else if ("style" == g.toLowerCase()) {
                    var h = f; if (!Na(h)) throw Error(""); if (!(h instanceof Ac)) {
                        f = void 0; var l = ""; for (f in h) if (Object.prototype.hasOwnProperty.call(h, f)) {
                            if (!/^[-_a-zA-Z0-9]+$/.test(f)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + f); var m = h[f]; null != m && (m = Array.isArray(m) ? m.map(Cc).join(" ") : Cc(m),
                                l += f + ":" + m + ";")
                        } h = l ? new Ac(l, zc) : Bc
                    } h instanceof Ac && h.constructor === Ac ? f = h.i : (La(h), f = "type_error:SafeStyle")
                } else { if (/^on/i.test(g)) throw Error(""); if (g.toLowerCase() in bd) if (f instanceof ac) f = cc(f).toString(); else if (f instanceof pc) f = rc(f); else if ("string" === typeof f) f = (wc(f) || yc).ra(); else throw Error(""); } f.Ga && (f = f.ra()); g = g + '="' + fc(String(f)) + '"'; e += " " + g
            }
        } var n = "<" + a + e; null == c ? c = [] : Array.isArray(c) || (c = [c]); !0 === Pb[a.toLowerCase()] ? n += ">" : (d = $c(c), n += ">" + Sc(d).toString() + "</" + a + ">", d = d.vb());
        (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null); return Uc(n, d)
    }
    var Wc = /^[a-zA-Z0-9-]+$/, bd = { action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0 }, Xc = { APPLET: !0, BASE: !0, EMBED: !0, IFRAME: !0, LINK: !0, MATH: !0, META: !0, OBJECT: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 }, Zc = new Rc(u.trustedTypes && u.trustedTypes.emptyHTML || "", 0, Qc), cd = Uc("<br>", 0); function dd(a, b) { return Uc(b, null) }
    ; var ed = bb(function () { var a = document.createElement("div"), b = document.createElement("div"); b.appendChild(document.createElement("div")); a.appendChild(b); b = a.firstChild.firstChild; a.innerHTML = Sc(Zc); return !b.parentElement });
    function fd(a, b) { if (ed()) for (; a.lastChild;)a.removeChild(a.lastChild); a.innerHTML = Sc(b) }
    function gd(a, b) { b = b instanceof pc ? b : xc(b); a.href = rc(b) }
    function hd(a, b) { b = b instanceof pc ? b : xc(b, /^data:image\//i.test(b)); a.src = rc(b) }
    function id(a, b) { a.rel = "stylesheet"; a.href = cc(b).toString(); (b = jd('style[nonce],link[rel="stylesheet"][nonce]', a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b) }
    function kd(a, b, c, d) { a = a instanceof pc ? a : xc(a); b = b || u; c = c instanceof Sb ? Vb(c) : c || ""; return void 0 !== d ? b.open(rc(a), c, d) : b.open(rc(a), c) }
    var ld = /^[\w+/_-]+[=]{0,2}$/; function jd(a, b) { b = (b || u).document; return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && ld.test(a) ? a : "" : "" }
    ; function md(a) { return encodeURIComponent(String(a)) }
    function nd(a) { return decodeURIComponent(a.replace(/\+/g, " ")) }
    function od(a) { return a = fc(a, void 0) }
    function pd(a) { return -1 != a.indexOf("&") ? "document" in u ? qd(a) : rd(a) : a }
    function qd(a) { var b = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' }; var c = u.document.createElement("div"); return a.replace(sd, function (d, e) { var f = b[d]; if (f) return f; "#" == e.charAt(0) && (e = Number("0" + e.substr(1)), isNaN(e) || (f = String.fromCharCode(e))); f || (f = dd(Wb("Single HTML entity."), d + " "), fd(c, f), f = c.firstChild.nodeValue.slice(0, -1)); return b[d] = f }) }
    function rd(a) { return a.replace(/&([^;]+);/g, function (b, c) { switch (c) { case "amp": return "&"; case "lt": return "<"; case "gt": return ">"; case "quot": return '"'; default: return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? b : String.fromCharCode(c) } }) }
    var sd = /&([^;\s<&]+);?/g, td = { "\x00": "\\0", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\x0B", '"': '\\"', "\\": "\\\\", "<": "\\u003C" }, vd = { "'": "\\'" }; function wd(a) { for (var b = 0, c = 0; c < a.length; ++c)b = 31 * b + a.charCodeAt(c) >>> 0; return b }
    function xd(a) { return String(a).replace(/\-([a-z])/g, function (b, c) { return c.toUpperCase() }) }
    function yd(a) { return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) { return c + d.toUpperCase() }) }
    ; var zd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"); function Ad(a) { return a.match(zd) }
    function Bd(a) { return a ? decodeURI(a) : a }
    function Cd(a) { return Bd(Ad(a)[3] || null) }
    function Dd(a) { var b = Ad(a); a = b[5]; var c = b[6]; b = b[7]; var d = ""; a && (d += a); c && (d += "?" + c); b && (d += "#" + b); return d }
    function Ed(a, b) { if (a) { a = a.split("&"); for (var c = 0; c < a.length; c++) { var d = a[c].indexOf("="), e = null; if (0 <= d) { var f = a[c].substring(0, d); e = a[c].substring(d + 1) } else f = a[c]; b(f, e ? nd(e) : "") } } }
    function Fd(a, b) { if (!b) return a; var c = a.indexOf("#"); 0 > c && (c = a.length); var d = a.indexOf("?"); if (0 > d || d > c) { d = c; var e = "" } else e = a.substring(d + 1, c); a = [a.substr(0, d), e, a.substr(c)]; c = a[1]; a[1] = b ? c ? c + "&" + b : b : c; return a[0] + (a[1] ? "?" + a[1] : "") + a[2] }
    function Gd(a, b, c) { if (Array.isArray(b)) for (var d = 0; d < b.length; d++)Gd(a, String(b[d]), c); else null != b && c.push(a + ("" === b ? "" : "=" + md(b))) }
    function Hd(a, b) { var c = []; for (b = b || 0; b < a.length; b += 2)Gd(a[b], a[b + 1], c); return c.join("&") }
    function Id(a) { var b = [], c; for (c in a) Gd(c, a[c], b); return b.join("&") }
    function Jd(a, b) { var c = 2 == arguments.length ? Hd(arguments[1], 0) : Hd(arguments, 1); return Fd(a, c) }
    function Kd(a, b) { b = Id(b); return Fd(a, b) }
    var Ld = /#|$/; function Md(a, b) {
        var c = void 0; return new (c || (c = Promise))(function (d, e) {
            function f(l) { try { h(b.next(l)) } catch (m) { e(m) } }
            function g(l) { try { h(b["throw"](l)) } catch (m) { e(m) } }
            function h(l) { l.done ? d(l.value) : (new c(function (m) { m(l.value) })).then(f, g) }
            h((b = b.apply(a, void 0)).next())
        })
    }
    ; var Nd = {}; function Od() { }
    function Pd(a, b) { if (b !== Nd) throw Error("Bad secret"); this.i = a }
    q(Pd, Od); Pd.prototype.toString = function () { return this.i };
    var Qd = new Pd("about:invalid#zTSz", Nd); function Rd(a) { if (a instanceof Od) if (a instanceof Pd) a = a.i; else throw Error("wrong type"); else a = rc(a); return a }
    ; function Sd(a, b) { a.src = cc(b); var c; b = (a.ownerDocument && a.ownerDocument.defaultView || window).document; var d = null === (c = b.querySelector) || void 0 === c ? void 0 : c.call(b, "script[nonce]"); (c = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c) }
    ; function Td(a) { Ud(); return Uc(a, null) }
    function Vd(a) { Ud(); return dc(a) }
    var Ud = Ja; function Wd() { var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/); return a ? parseInt(a[1], 10) : 0 }
    function Xd(a) { return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a)) }
    function Yd() { return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null }
    function Zd(a) { a.length ? $d(a.shift(), function () { Zd(a) }) : ae() }
    function be(a) { return "chrome-extension://" + a + "/cast_sender.js" }
    function $d(a, b, c) { var d = document.createElement("script"); d.onerror = b; c && (d.onload = c); Sd(d, Vd(a)); (document.head || document.documentElement).appendChild(d) }
    function ce() { var a = Wd(), b = []; if (1 < a) { var c = a - 1; b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js"); b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js") } return b }
    function ae() { var a = Yd(); a && a(!1, "No cast extension found") }
    function de() {
        if (ee) {
            var a = 2, b = Yd(), c = function () { a--; 0 == a && b && b(!0) };
            window.__onGCastApiAvailable = c; $d("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", ae, c)
        }
    }
    function fe() { de(); var a = ce(); a.push("//www.gstatic.com/eureka/clank/cast_sender.js"); Zd(a) }
    function ge() { de(); var a = ce(); a.push.apply(a, ia(he.map(be))); a.push("//www.gstatic.com/eureka/clank/cast_sender.js"); Zd(a) }
    var ee = Xd("loadCastFramework") || Xd("loadCastApplicationFramework"), he = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"]; function ie(a) { for (var b = [], c = 0, d = 0; d < a.length; d++) { var e = a.charCodeAt(d); 128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128) } return b }
    ; function je() { return D("iPhone") && !D("iPod") && !D("iPad") }
    function ke() { return je() || D("iPad") || D("iPod") }
    ; function le(a) { le[" "](a); return a }
    le[" "] = Ja; function me(a, b) { try { return le(a[b]), !0 } catch (c) { } return !1 }
    function ne(a, b, c, d) { d = d ? d(b) : b; return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b) }
    ; var oe = D("Opera"), pe = D("Trident") || D("MSIE"), qe = D("Edge"), re = qe || pe, se = D("Gecko") && !(-1 != Jc.toLowerCase().indexOf("webkit") && !D("Edge")) && !(D("Trident") || D("MSIE")) && !D("Edge"), te = -1 != Jc.toLowerCase().indexOf("webkit") && !D("Edge"), ue = D("Macintosh"), ve = D("Windows"), we = D("Android"), xe = je(), ye = D("iPad"), ze = D("iPod"), Ae = ke(); function Be() { var a = u.document; return a ? a.documentMode : void 0 }
    var Ce; a: {
        var De = "", Ee = function () { var a = Jc; if (se) return /rv:([^\);]+)(\)|;)/.exec(a); if (qe) return /Edge\/([\d\.]+)/.exec(a); if (pe) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (te) return /WebKit\/(\S+)/.exec(a); if (oe) return /(?:Version)[ \/]?(\S+)/.exec(a) }();
        Ee && (De = Ee ? Ee[1] : ""); if (pe) { var Fe = Be(); if (null != Fe && Fe > parseFloat(De)) { Ce = String(Fe); break a } } Ce = De
    } var Ge = Ce, He = {}; function Ie(a) { return ne(He, a, function () { return 0 <= nc(Ge, a) }) }
    function Je(a) { return Number(Ke) >= a }
    var Le; if (u.document && pe) { var Me = Be(); Le = Me ? Me : parseInt(Ge, 10) || void 0 } else Le = void 0; var Ke = Le; var Ne = Mc(), Oe = je() || D("iPod"), Pe = D("iPad"), Qe = Pc(), Re = Oc(), Se = Nc() && !ke(); var Te = {}, Ue = null;
    function Ve(a, b) {
        Ma(a); void 0 === b && (b = 0); if (!Ue) { Ue = {}; for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) { var f = c.concat(d[e].split("")); Te[e] = f; for (var g = 0; g < f.length; g++) { var h = f[g]; void 0 === Ue[h] && (Ue[h] = g) } } } b = Te[b]; c = Array(Math.floor(a.length / 3)); d = b[64] || ""; for (e = f = 0; f < a.length - 2; f += 3) { var l = a[f], m = a[f + 1]; h = a[f + 2]; g = b[l >> 2]; l = b[(l & 3) << 4 | m >> 4]; m = b[(m & 15) << 2 | h >> 6]; h = b[h & 63]; c[e++] = "" + g + l + m + h } g = 0; h = d; switch (a.length -
            f) { case 2: g = a[f + 1], h = b[(g & 15) << 2] || d; case 1: a = a[f], c[e] = "" + b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d }return c.join("")
    }
    ; var We = { qj: { value: !0, configurable: !0 } }; var Xe = Object, Ye = Xe.freeze, Ze = []; Array.isArray(Ze) && !Object.isFrozen(Ze) && Object.defineProperties(Ze, We); Ye.call(Xe, Ze); var $e = window; Wb("csi.gstatic.com"); Wb("googleads.g.doubleclick.net"); Wb("pagead2.googlesyndication.com"); Wb("partner.googleadservices.com"); Wb("pubads.g.doubleclick.net"); Wb("securepubads.g.doubleclick.net"); Wb("tpc.googlesyndication.com"); try { (new self.OffscreenCanvas(0, 0)).getContext("2d") } catch (a) { } var af = pe || te; function bf(a, b, c) { return a + c * (b - a) }
    ; function cf(a, b) { this.x = void 0 !== a ? a : 0; this.y = void 0 !== b ? b : 0 }
    k = cf.prototype; k.clone = function () { return new cf(this.x, this.y) };
    k.equals = function (a) { return a instanceof cf && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1) };
    function df(a, b) { return new cf(a.x - b.x, a.y - b.y) }
    k.ceil = function () { this.x = Math.ceil(this.x); this.y = Math.ceil(this.y); return this };
    k.floor = function () { this.x = Math.floor(this.x); this.y = Math.floor(this.y); return this };
    k.round = function () { this.x = Math.round(this.x); this.y = Math.round(this.y); return this }; function ef(a, b) { this.width = a; this.height = b }
    k = ef.prototype; k.clone = function () { return new ef(this.width, this.height) };
    k.aspectRatio = function () { return this.width / this.height };
    k.isEmpty = function () { return !(this.width * this.height) };
    k.ceil = function () { this.width = Math.ceil(this.width); this.height = Math.ceil(this.height); return this };
    k.floor = function () { this.width = Math.floor(this.width); this.height = Math.floor(this.height); return this };
    k.round = function () { this.width = Math.round(this.width); this.height = Math.round(this.height); return this }; function ff(a) { return a ? new gf(hf(a)) : Za || (Za = new gf) }
    function E(a) { return jf(document, a) }
    function jf(a, b) { return "string" === typeof b ? a.getElementById(b) : b }
    function kf(a, b, c) { return lf(document, a, b, c) }
    function mf(a, b) { var c = b || document; return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : lf(document, "*", a, b) }
    function F(a, b) { var c = b || document, d = null; c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : d = nf("*", a, b); return d || null }
    function lf(a, b, c, d) { a = d || a; b = b && "*" != b ? String(b).toUpperCase() : ""; if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : "")); if (c && a.getElementsByClassName) { a = a.getElementsByClassName(c); if (b) { d = {}; for (var e = 0, f = 0, g; g = a[f]; f++)b == g.nodeName && (d[e++] = g); d.length = e; return d } return a } a = a.getElementsByTagName(b || "*"); if (c) { d = {}; for (f = e = 0; g = a[f]; f++)b = g.className, "function" == typeof b.split && mb(b.split(/\s+/), c) && (d[e++] = g); d.length = e; return d } return a }
    function nf(a, b, c) { var d = document, e = c || d, f = a && "*" != a ? String(a).toUpperCase() : ""; return e.querySelectorAll && e.querySelector && (f || b) ? e.querySelector(f + (b ? "." + b : "")) : lf(d, a, b, c)[0] || null }
    function of(a, b) { Ab(b, function (c, d) { c && "object" == typeof c && c.Ga && (c = c.ra()); "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : pf.hasOwnProperty(d) ? a.setAttribute(pf[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c }) }
    var pf = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" }; function qf(a) { a = a.document; a = rf(a) ? a.documentElement : a.body; return new ef(a.clientWidth, a.clientHeight) }
    function sf(a) { var b = tf(a); a = uf(a); return pe && Ie("10") && a.pageYOffset != b.scrollTop ? new cf(b.scrollLeft, b.scrollTop) : new cf(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop) }
    function tf(a) { return a.scrollingElement ? a.scrollingElement : !te && rf(a) ? a.documentElement : a.body || a.documentElement }
    function uf(a) { return a.parentWindow || a.defaultView }
    function vf(a, b, c) { var d = arguments, e = document, f = d[1], g = wf(e, String(d[0])); f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : of(g, f)); 2 < d.length && xf(e, g, d, 2); return g }
    function xf(a, b, c, d) {
        function e(h) { h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h) }
        for (; d < c.length; d++) { var f = c[d]; if (!Ma(f) || Na(f) && 0 < f.nodeType) e(f); else { a: { if (f && "number" == typeof f.length) { if (Na(f)) { var g = "function" == typeof f.item || "string" == typeof f.item; break a } if ("function" === typeof f) { g = "function" == typeof f.item; break a } } g = !1 } B(g ? sb(f) : f, e) } }
    }
    function yf(a) { return wf(document, a) }
    function wf(a, b) { b = String(b); "application/xhtml+xml" === a.contentType && (b = b.toLowerCase()); return a.createElement(b) }
    function zf(a) { var b = document, c = wf(b, "DIV"); pe ? (a = $c(cd, a), fd(c, a), c.removeChild(c.firstChild)) : fd(c, a); if (1 == c.childNodes.length) c = c.removeChild(c.firstChild); else { for (b = b.createDocumentFragment(); c.firstChild;)b.appendChild(c.firstChild); c = b } return c }
    function rf(a) { return "CSS1Compat" == a.compatMode }
    function Af(a, b) { xf(hf(a), a, arguments, 1) }
    function Bf(a) { for (var b; b = a.firstChild;)a.removeChild(b) }
    function Cf(a) { a && a.parentNode && a.parentNode.removeChild(a) }
    function Df(a, b) { var c = b.parentNode; c && c.replaceChild(a, b) }
    function Ef(a, b) { b = b.cloneNode(!0).childNodes; for (Bf(a); b.length;)a.appendChild(b[0]) }
    function Ff(a) { return void 0 != a.children ? a.children : Array.prototype.filter.call(a.childNodes, function (b) { return 1 == b.nodeType }) }
    function Gf(a) { return void 0 !== a.firstElementChild ? a.firstElementChild : Hf(a.firstChild, !0) }
    function Hf(a, b) { for (; a && 1 != a.nodeType;)a = b ? a.nextSibling : a.previousSibling; return a }
    function If(a) { return Na(a) && 1 == a.nodeType }
    function Jf(a) { var b; if (af && !(pe && Ie("9") && !Ie("10") && u.SVGElement && a instanceof u.SVGElement) && (b = a.parentElement)) return b; b = a.parentNode; return If(b) ? b : null }
    function Kf(a, b) { if (!a || !b) return !1; if (a.contains && 1 == b.nodeType) return a == b || a.contains(b); if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16); for (; b && a != b;)b = b.parentNode; return b == a }
    function hf(a) { return 9 == a.nodeType ? a : a.ownerDocument || a.document }
    function Lf(a, b) { if ("textContent" in a) a.textContent = b; else if (3 == a.nodeType) a.data = String(b); else if (a.firstChild && 3 == a.firstChild.nodeType) { for (; a.lastChild != a.firstChild;)a.removeChild(a.lastChild); a.firstChild.data = String(b) } else Bf(a), a.appendChild(hf(a).createTextNode(String(b))) }
    function Mf(a, b) { var c = []; return Nf(a, b, c, !0) ? c[0] : void 0 }
    function Nf(a, b, c, d) { if (null != a) for (a = a.firstChild; a;) { if (b(a) && (c.push(a), d) || Nf(a, b, c, d)) return !0; a = a.nextSibling } return !1 }
    var Of = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 }, Pf = { IMG: " ", BR: "\n" };
    function Qf(a) { var b; if ((b = "A" == a.tagName && a.hasAttribute("href") || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!a.hasAttribute("tabindex") || Rf(a)) : a.hasAttribute("tabindex") && Rf(a)) && pe) { var c; "function" !== typeof a.getBoundingClientRect || pe && null == a.parentElement ? c = { height: a.offsetHeight, width: a.offsetWidth } : c = a.getBoundingClientRect(); a = null != c && 0 < c.height && 0 < c.width } else a = b; return a }
    function Rf(a) { a = a.tabIndex; return "number" === typeof a && 0 <= a && 32768 > a }
    function Sf(a) { var b = []; Tf(a, b, !0); a = b.join(""); a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, ""); a = a.replace(/\u200B/g, ""); a = a.replace(/ +/g, " "); " " != a && (a = a.replace(/^\s*/, "")); return a }
    function Tf(a, b, c) { if (!(a.nodeName in Of)) if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue); else if (a.nodeName in Pf) b.push(Pf[a.nodeName]); else for (a = a.firstChild; a;)Tf(a, b, c), a = a.nextSibling }
    function Uf(a, b, c, d) { if (!b && !c) return null; var e = b ? String(b).toUpperCase() : null; return Vf(a, function (f) { return (!e || f.nodeName == e) && (!c || "string" === typeof f.className && mb(f.className.split(/\s+/), c)) }, !0, d) }
    function G(a, b) { return Uf(a, null, b, void 0) }
    function Vf(a, b, c, d) { a && !c && (a = a.parentNode); for (c = 0; a && (null == d || c <= d);) { if (b(a)) return a; a = a.parentNode; c++ } return null }
    function gf(a) { this.i = a || u.document || document }
    k = gf.prototype; k.Rc = function () { return jf(this.i, void 0) };
    k.getElementsByTagName = function (a, b) { return (b || this.i).getElementsByTagName(String(a)) };
    k.createElement = function (a) { return wf(this.i, a) };
    k.appendChild = function (a, b) { a.appendChild(b) };
    k.isElement = If; function Wf(a) { var b = Xf; if (b) for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && a.call(void 0, b[c], c, b) }
    function Yf() {
        var a = []; Wf(function (b) { a.push(b) });
        return a
    }
    var Xf = { Uh: "allow-forms", Vh: "allow-modals", Wh: "allow-orientation-lock", Xh: "allow-pointer-lock", Yh: "allow-popups", Zh: "allow-popups-to-escape-sandbox", ai: "allow-presentation", bi: "allow-same-origin", ci: "allow-scripts", di: "allow-top-navigation", fi: "allow-top-navigation-by-user-activation" }, Zf = bb(function () { return Yf() });
    function $f() {
        var a = yf("IFRAME"), b = {}; B(Zf(), function (c) { a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0) });
        return b
    }
    ; function ag(a, b, c, d) { this.top = a; this.right = b; this.bottom = c; this.left = d }
    k = ag.prototype; k.getHeight = function () { return this.bottom - this.top };
    k.clone = function () { return new ag(this.top, this.right, this.bottom, this.left) };
    function bg(a, b) { return a && b ? b instanceof ag ? b.left >= a.left && b.right <= a.right && b.top >= a.top && b.bottom <= a.bottom : b.x >= a.left && b.x <= a.right && b.y >= a.top && b.y <= a.bottom : !1 }
    function cg(a, b) { return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom }
    k.ceil = function () { this.top = Math.ceil(this.top); this.right = Math.ceil(this.right); this.bottom = Math.ceil(this.bottom); this.left = Math.ceil(this.left); return this };
    k.floor = function () { this.top = Math.floor(this.top); this.right = Math.floor(this.right); this.bottom = Math.floor(this.bottom); this.left = Math.floor(this.left); return this };
    k.round = function () { this.top = Math.round(this.top); this.right = Math.round(this.right); this.bottom = Math.round(this.bottom); this.left = Math.round(this.left); return this }; function dg(a, b, c, d) { this.left = a; this.top = b; this.width = c; this.height = d }
    k = dg.prototype; k.clone = function () { return new dg(this.left, this.top, this.width, this.height) };
    k.distance = function (a) { var b = a.x < this.left ? this.left - a.x : Math.max(a.x - (this.left + this.width), 0); a = a.y < this.top ? this.top - a.y : Math.max(a.y - (this.top + this.height), 0); return Math.sqrt(b * b + a * a) };
    k.ceil = function () { this.left = Math.ceil(this.left); this.top = Math.ceil(this.top); this.width = Math.ceil(this.width); this.height = Math.ceil(this.height); return this };
    k.floor = function () { this.left = Math.floor(this.left); this.top = Math.floor(this.top); this.width = Math.floor(this.width); this.height = Math.floor(this.height); return this };
    k.round = function () { this.left = Math.round(this.left); this.top = Math.round(this.top); this.width = Math.round(this.width); this.height = Math.round(this.height); return this }; function eg(a) { this.isValid = a }
    function fg(a) { return new eg(function (b) { return b.substr(0, a.length + 1).toLowerCase() === a + ":" }) }
    var gg = [fg("data"), fg("http"), fg("https"), fg("mailto"), fg("ftp"), new eg(function (a) { return /^[^:]*([/?#]|$)/.test(a) })];
    function hg(a) { var b = void 0 === b ? gg : b; a: { b = void 0 === b ? gg : b; for (var c = 0; c < b.length; ++c) { var d = b[c]; if (d instanceof eg && d.isValid(a)) { a = new Pd(a, Nd); break a } } a = void 0 } return a || Qd }
    ; function ig(a, b, c) { if ("string" === typeof b) (b = jg(a, b)) && (a.style[b] = c); else for (var d in b) { c = a; var e = b[d], f = jg(c, d); f && (c.style[f] = e) } }
    var kg = {}; function jg(a, b) { var c = kg[b]; if (!c) { var d = xd(b); c = d; void 0 === a.style[d] && (d = (te ? "Webkit" : se ? "Moz" : pe ? "ms" : null) + yd(d), void 0 !== a.style[d] && (c = d)); kg[b] = c } return c }
    function lg(a, b) { var c = hf(a); return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : "" }
    function mg(a, b) { return lg(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b] }
    function ng(a) { try { return a.getBoundingClientRect() } catch (b) { return { left: 0, top: 0, right: 0, bottom: 0 } } }
    function og(a) { if (pe && !Je(8)) return a.offsetParent; var b = hf(a), c = mg(a, "position"), d = "fixed" == c || "absolute" == c; for (a = a.parentNode; a && a != b; a = a.parentNode)if (11 == a.nodeType && a.host && (a = a.host), c = mg(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a; return null }
    function pg(a) {
        for (var b = new ag(0, Infinity, Infinity, 0), c = ff(a), d = c.i.body, e = c.i.documentElement, f = tf(c.i); a = og(a);)if (!(pe && 0 == a.clientWidth || te && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != mg(a, "overflow")) { var g = qg(a), h = new cf(a.clientLeft, a.clientTop); g.x += h.x; g.y += h.y; b.top = Math.max(b.top, g.y); b.right = Math.min(b.right, g.x + a.clientWidth); b.bottom = Math.min(b.bottom, g.y + a.clientHeight); b.left = Math.max(b.left, g.x) } d = f.scrollLeft; f = f.scrollTop; b.left = Math.max(b.left, d); b.top = Math.max(b.top, f);
        c = qf(uf(c.i) || window); b.right = Math.min(b.right, d + c.width); b.bottom = Math.min(b.bottom, f + c.height); return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    }
    function qg(a) { var b = hf(a), c = new cf(0, 0); var d = b ? hf(b) : document; d = !pe || Je(9) || rf(ff(d).i) ? d.documentElement : d.body; if (a == d) return c; a = ng(a); b = sf(ff(b).i); c.x = a.left + b.x; c.y = a.top + b.y; return c }
    function rg(a) { return qg(a).x }
    function sg(a) { a = ng(a); return new cf(a.left, a.top) }
    function tg(a, b, c) { if (b instanceof ef) c = b.height, b = b.width; else if (void 0 == c) throw Error("missing height argument"); a.style.width = ug(b, !0); a.style.height = ug(c, !0) }
    function ug(a, b) { "number" == typeof a && (a = (b ? Math.round(a) : a) + "px"); return a }
    function vg(a) { var b = wg; if ("none" != mg(a, "display")) return b(a); var c = a.style, d = c.display, e = c.visibility, f = c.position; c.visibility = "hidden"; c.position = "absolute"; c.display = "inline"; a = b(a); c.display = d; c.position = f; c.visibility = e; return a }
    function wg(a) { var b = a.offsetWidth, c = a.offsetHeight, d = te && !b && !c; return (void 0 === b || d) && a.getBoundingClientRect ? (a = ng(a), new ef(a.right - a.left, a.bottom - a.top)) : new ef(b, c) }
    function xg(a) { var b = qg(a); a = vg(a); return new dg(b.x, b.y, a.width, a.height) }
    function yg(a) { return "rtl" == mg(a, "direction") }
    function zg(a, b) { if (/^\d+px?$/.test(b)) return parseInt(b, 10); var c = a.style.left, d = a.runtimeStyle.left; a.runtimeStyle.left = a.currentStyle.left; a.style.left = b; b = a.style.pixelLeft; a.style.left = c; a.runtimeStyle.left = d; return +b }
    function Ag(a, b) { return (b = a.currentStyle ? a.currentStyle[b] : null) ? zg(a, b) : 0 }
    var Bg = { thin: 2, medium: 4, thick: 6 }; function Cg(a, b) { if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0; b = a.currentStyle ? a.currentStyle[b + "Width"] : null; return b in Bg ? Bg[b] : zg(a, b) }
    ; var Dg = (new Date).getTime(); function Eg(a) {
        var b = y("window.location.href"); null == a && (a = 'Unknown Error of type "null/undefined"'); if ("string" === typeof a) return { message: a, name: "Unknown error", lineNumber: "Not available", fileName: b, stack: "Not available" }; var c = !1; try { var d = a.lineNumber || a.line || "Not available" } catch (g) { d = "Not available", c = !0 } try { var e = a.fileName || a.filename || a.sourceURL || u.$googDebugFname || b } catch (g) { e = "Not available", c = !0 } b = Fg(a); if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
            c = a.message; if (null ==
                c) { if (a.constructor && a.constructor instanceof Function) { if (a.constructor.name) c = a.constructor.name; else if (c = a.constructor, Gg[c]) c = Gg[c]; else { c = String(c); if (!Gg[c]) { var f = /function\s+([^\(]+)/m.exec(c); Gg[c] = f ? f[1] : "[Anonymous]" } c = Gg[c] } c = 'Unknown Error of type "' + c + '"' } else c = "Unknown Error of unknown type"; "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString()) } return { message: c, name: a.name || "UnknownError", lineNumber: d, fileName: e, stack: b || "Not available" }
        } a.stack =
            b; return { message: a.message, name: a.name, lineNumber: a.lineNumber, fileName: a.fileName, stack: a.stack }
    }
    function Fg(a, b) { b || (b = {}); b[Hg(a)] = !0; var c = a.stack || ""; (a = a.Ef) && !b[Hg(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += Fg(a, b)); return c }
    function Hg(a) { var b = ""; "function" === typeof a.toString && (b = "" + a); return b + a.stack }
    var Gg = {}; function Ig(a, b) { this.l = a; this.o = b; this.j = 0; this.i = null }
    Ig.prototype.get = function () { if (0 < this.j) { this.j--; var a = this.i; this.i = a.next; a.next = null } else a = this.l(); return a };
    function Jg(a, b) { a.o(b); 100 > a.j && (a.j++, b.next = a.i, a.i = b) }
    ; var Kg; function Lg() {
        var a = u.MessageChannel; "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !D("Presto") && (a = function () {
            var e = yf("IFRAME"); e.style.display = "none"; document.documentElement.appendChild(e); var f = e.contentWindow; e = f.document; e.open(); e.close(); var g = "callImmediate" + Math.random(), h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host; e = z(function (l) { if (("*" == h || l.origin == h) && l.data == g) this.port1.onmessage() }, this);
            f.addEventListener("message", e, !1); this.port1 = {}; this.port2 = { postMessage: function () { f.postMessage(g, h) } }
        });
        if ("undefined" !== typeof a && !D("Trident") && !D("MSIE")) {
            var b = new a, c = {}, d = c; b.port1.onmessage = function () { if (void 0 !== c.next) { c = c.next; var e = c.Ld; c.Ld = null; e() } };
            return function (e) { d.next = { Ld: e }; d = d.next; b.port2.postMessage(0) }
        } return function (e) { u.setTimeout(e, 0) }
    }
    ; function Mg(a) { u.setTimeout(function () { throw a; }, 0) }
    ; function Ng() { this.j = this.i = null }
    Ng.prototype.add = function (a, b) { var c = Og.get(); c.set(a, b); this.j ? this.j.next = c : this.i = c; this.j = c };
    Ng.prototype.remove = function () { var a = null; this.i && (a = this.i, this.i = this.i.next, this.i || (this.j = null), a.next = null); return a };
    var Og = new Ig(function () { return new Pg }, function (a) { return a.reset() });
    function Pg() { this.next = this.scope = this.Ka = null }
    Pg.prototype.set = function (a, b) { this.Ka = a; this.scope = b; this.next = null };
    Pg.prototype.reset = function () { this.next = this.scope = this.Ka = null }; function Qg(a, b) { Rg || Sg(); Tg || (Rg(), Tg = !0); Ug.add(a, b) }
    var Rg; function Sg() {
        if (u.Promise && u.Promise.resolve) { var a = u.Promise.resolve(void 0); Rg = function () { a.then(Vg) } } else Rg = function () {
            var b = Vg;
            "function" !== typeof u.setImmediate || u.Window && u.Window.prototype && !D("Edge") && u.Window.prototype.setImmediate == u.setImmediate ? (Kg || (Kg = Lg()), Kg(b)) : u.setImmediate(b)
        }
    }
    var Tg = !1, Ug = new Ng; function Vg() { for (var a; a = Ug.remove();) { try { a.Ka.call(a.scope) } catch (b) { Mg(b) } Jg(Og, a) } Tg = !1 }
    ; function Wg(a) { this.L = 0; this.Za = void 0; this.rb = this.Pa = this.La = null; this.fc = this.Qc = !1; if (a != Ja) try { var b = this; a.call(void 0, function (c) { Xg(b, 2, c) }, function (c) { Xg(b, 3, c) }) } catch (c) { Xg(this, 3, c) } }
    function Yg() { this.next = this.context = this.onRejected = this.j = this.i = null; this.l = !1 }
    Yg.prototype.reset = function () { this.context = this.onRejected = this.j = this.i = null; this.l = !1 };
    var Zg = new Ig(function () { return new Yg }, function (a) { a.reset() });
    function $g(a, b, c) { var d = Zg.get(); d.j = a; d.onRejected = b; d.context = c; return d }
    function ah(a) { if (a instanceof Wg) return a; var b = new Wg(Ja); Xg(b, 2, a); return b }
    function bh(a) { return new Wg(function (b, c) { c(a) }) }
    function ch(a, b, c) { dh(a, b, c, null) || Qg(Ua(b, a)) }
    function eh(a) {
        return new Wg(function (b, c) {
            var d = a.length, e = []; if (d) for (var f = function (m, n) { d--; e[m] = n; 0 == d && b(e) }, g = function (m) { c(m) }, h = 0, l; h < a.length; h++)l = a[h], ch(l, Ua(f, h), g);
            else b(e)
        })
    }
    Wg.prototype.then = function (a, b, c) { return fh(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c) };
    Wg.prototype.$goog_Thenable = !0; function gh(a, b) { b = $g(b, b, void 0); b.l = !0; hh(a, b) }
    function ih(a, b, c) { fh(a, null, b, c) }
    Wg.prototype.cancel = function (a) { if (0 == this.L) { var b = new jh(a); Qg(function () { kh(this, b) }, this) } };
    function kh(a, b) { if (0 == a.L) if (a.La) { var c = a.La; if (c.Pa) { for (var d = 0, e = null, f = null, g = c.Pa; g && (g.l || (d++, g.i == a && (e = g), !(e && 1 < d))); g = g.next)e || (f = g); e && (0 == c.L && 1 == d ? kh(c, b) : (f ? (d = f, d.next == c.rb && (c.rb = d), d.next = d.next.next) : lh(c), mh(c, e, 3, b))) } a.La = null } else Xg(a, 3, b) }
    function hh(a, b) { a.Pa || 2 != a.L && 3 != a.L || nh(a); a.rb ? a.rb.next = b : a.Pa = b; a.rb = b }
    function fh(a, b, c, d) {
        var e = $g(null, null, null); e.i = new Wg(function (f, g) {
            e.j = b ? function (h) { try { var l = b.call(d, h); f(l) } catch (m) { g(m) } } : f;
            e.onRejected = c ? function (h) { try { var l = c.call(d, h); void 0 === l && h instanceof jh ? g(h) : f(l) } catch (m) { g(m) } } : g
        });
        e.i.La = a; hh(a, e); return e.i
    }
    Wg.prototype.Qh = function (a) { this.L = 0; Xg(this, 2, a) };
    Wg.prototype.Rh = function (a) { this.L = 0; Xg(this, 3, a) };
    function Xg(a, b, c) { 0 == a.L && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.L = 1, dh(c, a.Qh, a.Rh, a) || (a.Za = c, a.L = b, a.La = null, nh(a), 3 != b || c instanceof jh || oh(a, c))) }
    function dh(a, b, c, d) { if (a instanceof Wg) return hh(a, $g(b || Ja, c || null, d)), !0; if (a) try { var e = !!a.$goog_Thenable } catch (g) { e = !1 } else e = !1; if (e) return a.then(b, c, d), !0; if (Na(a)) try { var f = a.then; if ("function" === typeof f) return ph(a, f, b, c, d), !0 } catch (g) { return c.call(d, g), !0 } return !1 }
    function ph(a, b, c, d, e) {
        function f(l) { h || (h = !0, d.call(e, l)) }
        function g(l) { h || (h = !0, c.call(e, l)) }
        var h = !1; try { b.call(a, g, f) } catch (l) { f(l) }
    }
    function nh(a) { a.Qc || (a.Qc = !0, Qg(a.Pf, a)) }
    function lh(a) { var b = null; a.Pa && (b = a.Pa, a.Pa = b.next, b.next = null); a.Pa || (a.rb = null); return b }
    Wg.prototype.Pf = function () { for (var a; a = lh(this);)mh(this, a, this.L, this.Za); this.Qc = !1 };
    function mh(a, b, c, d) { if (3 == c && b.onRejected && !b.l) for (; a && a.fc; a = a.La)a.fc = !1; if (b.i) b.i.La = null, qh(b, c, d); else try { b.l ? b.j.call(b.context) : qh(b, c, d) } catch (e) { rh.call(null, e) } Jg(Zg, b) }
    function qh(a, b, c) { 2 == b ? a.j.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c) }
    function oh(a, b) { a.fc = !0; Qg(function () { a.fc && rh.call(null, b) }) }
    var rh = Mg; function jh(a) { Ya.call(this, a) }
    A(jh, Ya); jh.prototype.name = "cancel"; function sh(a) { this.i = a; a.then(z(function () { }, this), function () { }, this) }
    function th(a, b, c) { return a.i.then(function (d) { var e = d[b]; if (!e) throw Error("Method not found: " + b); return e.apply(d, c) }) }
    function uh(a, b, c) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)d[e - 2] = arguments[e]; e = vh(a, b).then(function (f) { return f.apply(null, d) });
        return new sh(e)
    }
    var wh = {}; function vh(a, b) {
        var c = wh[b]; if (c) return c; c = (c = y(b)) ? ah(c) : (new Wg(function (d, e) {
            var f = (new gf(document)).createElement("SCRIPT"); f.async = !0; Sd(f, dc(Vb(a))); f.onload = f.onreadystatechange = function () { f.readyState && "loaded" != f.readyState && "complete" != f.readyState || d() };
            f.onerror = e; (document.head || document.getElementsByTagName("head")[0]).appendChild(f)
        })).then(function () {
            var d = y(b);
            if (!d) throw Error("Failed to load " + b + " from " + a); return d
        });
        return wh[b] = c
    }
    ; function xh(a) { this.i = a }
    xh.prototype.l = function (a) { th(this.i, "startFeedback", arguments) };
    xh.prototype.o = function (a) { th(this.i, "startHelp", arguments) };
    xh.prototype.j = function (a) { th(this.i, "loadChatSupport", arguments) };
    xh.prototype.dismissSurvey = function (a) { ih(th(this.i, "dismissSurvey", arguments), function () { }, this) };
    function yh(a, b) { b = b || {}; a = uh(zh, "help.service.Lazy.create", a, { apiKey: b.apiKey || b.apiKey, environment: b.environment || b.environment, helpCenterPath: b.pj || b.helpCenterPath, locale: b.locale || b.locale || "en".replace(/-/g, "_"), nonce: b.nonce || b.nonce, productData: b.productData || b.productData, receiverUri: b.xj || b.receiverUri, renderApiUri: b.Aj || b.renderApiUri, theme: b.theme || b.theme, window: b.window || b.window }); return new xh(a) }
    var zh = Wb("https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js"); function Ah(a) {
        if (!a) return ""; a = a.split("#")[0].split("?")[0]; a = a.toLowerCase(); 0 == a.indexOf("//") && (a = window.location.protocol + a); /^[\w\-]*:\/\//.test(a) || (a = window.location.href); var b = a.substring(a.indexOf("://") + 3), c = b.indexOf("/"); -1 != c && (b = b.substring(0, c)); c = a.substring(0, a.indexOf("://")); if (!c) throw Error("URI is missing protocol: " + a); if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !==
            c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c); a = ""; var d = b.indexOf(":"); if (-1 != d) { var e = b.substring(d + 1); b = b.substring(0, d); if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e } return c + "://" + b + a
    }
    ;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    var Bh = window, Ch = document, Dh = Bh.location; function Eh() { }
    var Fh = /\[native code\]/; function Gh(a, b, c) { return a[b] = a[b] || c }
    function Hh(a) { a = a.sort(); for (var b = [], c = void 0, d = 0; d < a.length; d++) { var e = a[d]; e != c && b.push(e); c = e } return b }
    function Ih() { var a; if ((a = Object.create) && Fh.test(a)) a = a(null); else { a = {}; for (var b in a) a[b] = void 0 } return a }
    var Jh = Gh(Bh, "gapi", {}); var Kh; Kh = Gh(Bh, "___jsl", Ih()); Gh(Kh, "I", 0); Gh(Kh, "hel", 10); function Lh() { var a = Dh.href; if (Kh.dpo) var b = Kh.h; else { b = Kh.h; var c = RegExp("([#].*&|[#])jsh=([^&#]*)", "g"), d = RegExp("([?#].*&|[?#])jsh=([^&#]*)", "g"); if (a = a && (c.exec(a) || d.exec(a))) try { b = decodeURIComponent(a[2]) } catch (e) { } } return b }
    function Mh(a) { var b = Gh(Kh, "PQ", []); Kh.PQ = []; var c = b.length; if (0 === c) a(); else for (var d = 0, e = function () { ++d === c && a() }, f = 0; f < c; f++)b[f](e) }
    function Nh(a) { return Gh(Gh(Kh, "H", Ih()), a, Ih()) }
    ; function Oh() {
        function a() { e[0] = 1732584193; e[1] = 4023233417; e[2] = 2562383102; e[3] = 271733878; e[4] = 3285377520; n = m = 0 }
        function b(t) {
            for (var w = g, v = 0; 64 > v; v += 4)w[v / 4] = t[v] << 24 | t[v + 1] << 16 | t[v + 2] << 8 | t[v + 3]; for (v = 16; 80 > v; v++)t = w[v - 3] ^ w[v - 8] ^ w[v - 14] ^ w[v - 16], w[v] = (t << 1 | t >>> 31) & 4294967295; t = e[0]; var C = e[1], O = e[2], H = e[3], X = e[4]; for (v = 0; 80 > v; v++) { if (40 > v) if (20 > v) { var qa = H ^ C & (O ^ H); var S = 1518500249 } else qa = C ^ O ^ H, S = 1859775393; else 60 > v ? (qa = C & O | H & (C | O), S = 2400959708) : (qa = C ^ O ^ H, S = 3395469782); qa = ((t << 5 | t >>> 27) & 4294967295) + qa + X + S + w[v] & 4294967295; X = H; H = O; O = (C << 30 | C >>> 2) & 4294967295; C = t; t = qa } e[0] = e[0] + t & 4294967295; e[1] = e[1] + C & 4294967295;
            e[2] = e[2] + O & 4294967295; e[3] = e[3] + H & 4294967295; e[4] = e[4] + X & 4294967295
        }
        function c(t, w) { if ("string" === typeof t) { t = unescape(encodeURIComponent(t)); for (var v = [], C = 0, O = t.length; C < O; ++C)v.push(t.charCodeAt(C)); t = v } w || (w = t.length); v = 0; if (0 == m) for (; v + 64 < w;)b(t.slice(v, v + 64)), v += 64, n += 64; for (; v < w;)if (f[m++] = t[v++], n++, 64 == m) for (m = 0, b(f); v + 64 < w;)b(t.slice(v, v + 64)), v += 64, n += 64 }
        function d() { var t = [], w = 8 * n; 56 > m ? c(h, 56 - m) : c(h, 64 - (m - 56)); for (var v = 63; 56 <= v; v--)f[v] = w & 255, w >>>= 8; b(f); for (v = w = 0; 5 > v; v++)for (var C = 24; 0 <= C; C -= 8)t[w++] = e[v] >> C & 255; return t }
        for (var e = [], f = [], g = [], h = [128], l = 1; 64 > l; ++l)h[l] = 0; var m, n; a(); return { reset: a, update: c, digest: d, Hf: function () { for (var t = d(), w = "", v = 0; v < t.length; v++)w += "0123456789ABCDEF".charAt(Math.floor(t[v] / 16)) + "0123456789ABCDEF".charAt(t[v] % 16); return w } }
    }
    ; function Ph(a, b, c) { var d = String(u.location.href); return d && a && b ? [b, Qh(Ah(d), a, c || null)].join(" ") : null }
    function Qh(a, b, c) {
        var d = [], e = []; if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], B(d, function (h) { e.push(h) }), Rh(e.join(" "));
        var f = [], g = []; B(c, function (h) { g.push(h.key); f.push(h.value) });
        c = Math.floor((new Date).getTime() / 1E3); e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a]; B(d, function (h) { e.push(h) });
        a = Rh(e.join(" ")); a = [c, a]; 0 == g.length || a.push(g.join("")); return a.join("_")
    }
    function Rh(a) { var b = Oh(); b.update(a); return b.Hf().toLowerCase() }
    ; var Sh = {}; function Th(a) { this.i = a || { cookie: "" } }
    k = Th.prototype; k.isEnabled = function () { if (!u.navigator.cookieEnabled) return !1; if (!this.isEmpty()) return !0; this.set("TESTCOOKIESENABLED", "1", { ic: 60 }); if ("1" !== this.get("TESTCOOKIESENABLED")) return !1; this.remove("TESTCOOKIESENABLED"); return !0 };
    k.set = function (a, b, c) { var d = !1; if ("object" === typeof c) { var e = c.Cj; d = c.secure || !1; var f = c.domain || void 0; var g = c.path || void 0; var h = c.ic } if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"'); if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"'); void 0 === h && (h = -1); this.i.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "") };
    k.get = function (a, b) { for (var c = a + "=", d = (this.i.cookie || "").split(";"), e = 0, f; e < d.length; e++) { f = ec(d[e]); if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length); if (f == a) return "" } return b };
    k.remove = function (a, b, c) { var d = void 0 !== this.get(a); this.set(a, "", { ic: 0, path: b, domain: c }); return d };
    k.Fa = function () { return Uh(this).keys };
    k.va = function () { return Uh(this).values };
    k.isEmpty = function () { return !this.i.cookie };
    k.clear = function () { for (var a = Uh(this).keys, b = a.length - 1; 0 <= b; b--)this.remove(a[b]) };
    function Uh(a) { a = (a.i.cookie || "").split(";"); for (var b = [], c = [], d, e, f = 0; f < a.length; f++)e = ec(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1))); return { keys: b, values: c } }
    var Vh = new Th("undefined" == typeof document ? null : document); function Wh(a) { return !!Sh.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a) }
    function Xh(a) { a = void 0 === a ? !1 : a; var b = u.__SAPISID || u.__APISID || u.__3PSAPISID || u.__OVERRIDE_SID; Wh(a) && (b = b || u.__1PSAPISID); if (b) return !0; var c = new Th(document); b = c.get("SAPISID") || c.get("APISID") || c.get("__Secure-3PAPISID") || c.get("SID"); Wh(a) && (b = b || c.get("__Secure-1PAPISID")); return !!b }
    function Yh(a, b, c, d) { (a = u[a]) || (a = (new Th(document)).get(b)); return a ? Ph(a, c, d) : null }
    function Zh(a) {
        var b = void 0 === b ? !1 : b; var c = Ah(String(u.location.href)), d = []; if (Xh(b)) { c = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:") || 0 == c.indexOf("moz-extension:"); var e = c ? u.__SAPISID : u.__APISID; e || (e = new Th(document), e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID")); (e = e ? Ph(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e); c && Wh(b) && ((b = Yh("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && d.push(b), (a = Yh("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && d.push(a)) } return 0 ==
            d.length ? null : d.join(" ")
    }
    ; var $h = Gh(Kh, "perf", Ih()); Gh($h, "g", Ih()); var ai = Gh($h, "i", Ih()); Gh($h, "r", []); Ih(); Ih(); function bi(a, b, c) { b && 0 < b.length && (b = ci(b), c && 0 < c.length && (b += "___" + ci(c)), 28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b, b = Gh(ai, "_p", Ih()), Gh(b, c, Ih())[a] = (new Date).getTime(), b = $h.r, "function" === typeof b ? b(a, "_p", c) : b.push([a, "_p", c])) }
    function ci(a) { return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/,/g, "_") }
    ; var di = Ih(), ei = []; function fi(a) { throw Error("Bad hint" + (a ? ": " + a : "")); }
    ei.push(["jsl", function (a) { for (var b in a) if (Object.prototype.hasOwnProperty.call(a, b)) { var c = a[b]; "object" == typeof c ? Kh[b] = Gh(Kh, b, []).concat(c) : Gh(Kh, b, c) } if (b = a.u) a = Gh(Kh, "us", []), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1]) }]);
    var gi = /^(\/[a-zA-Z0-9_\-]+)+$/, hi = [/\/amp\//, /\/amp$/, /^\/amp$/], ii = /^[a-zA-Z0-9\-_\.,!]+$/, ji = /^gapi\.loaded_[0-9]+$/, ki = /^[a-zA-Z0-9,._-]+$/;
    function li(a, b, c, d, e) { var f = a.split(";"), g = f.shift(), h = di[g], l = null; h ? l = h(f, b, c, d) : fi("no hint processor for: " + g); l || fi("failed to generate load url"); b = l; c = b.match(mi); (d = b.match(ni)) && 1 === d.length && oi.test(b) && c && 1 === c.length || fi("failed sanity: " + a); try { if (e && 0 < e.length) { b = a = 0; for (c = {}; b < e.length;) { var m = e[b++], n = Na(m) ? "o" + Oa(m) : (typeof m).charAt(0) + m; Object.prototype.hasOwnProperty.call(c, n) || (c[n] = !0, e[a++] = m) } e.length = a; l = l + "?le=" + e.join(",") } } catch (t) { } return l }
    function pi(a, b, c, d) {
        function e(f) { return encodeURIComponent(f).replace(/%2C/g, ",") }
        a = qi(a); ji.test(c) || fi("invalid_callback"); b = ri(b); d = d && d.length ? ri(d) : null; return [encodeURIComponent(a.pathPrefix).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.Dd ? "/am=" + e(a.Dd) : "", a.Re ? "/rs=" + e(a.Re) : "", a.df ? "/t=" + e(a.df) : "", "/cb=", e(c)].join("")
    }
    function qi(a) {
        "/" !== a.charAt(0) && fi("relative path"); for (var b = a.substring(1).split("/"), c = []; b.length;) { a = b.shift(); if (!a.length || 0 == a.indexOf(".")) fi("empty/relative directory"); else if (0 < a.indexOf("=")) { b.unshift(a); break } c.push(a) } a = {}; for (var d = 0, e = b.length; d < e; ++d) { var f = b[d].split("="), g = decodeURIComponent(f[0]), h = decodeURIComponent(f[1]); 2 == f.length && g && h && (a[g] = a[g] || h) } b = "/" + c.join("/"); gi.test(b) || fi("invalid_prefix"); c = 0; for (d = hi.length; c < d; ++c)hi[c].test(b) && fi("invalid_prefix"); c = si(a,
            "k", !0); d = si(a, "am"); e = si(a, "rs"); a = si(a, "t"); return { pathPrefix: b, version: c, Dd: d, Re: e, df: a }
    }
    function ri(a) { for (var b = [], c = 0, d = a.length; c < d; ++c) { var e = a[c].replace(/\./g, "_").replace(/-/g, "_"); ki.test(e) && b.push(e) } return b.join(",") }
    function si(a, b, c) { a = a[b]; !a && c && fi("missing: " + b); if (a) { if (ii.test(a)) return a; fi("invalid: " + b) } return null }
    var oi = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/, ni = /\/cb=/g, mi = /\/\//g; function ti() { var a = Lh(); if (!a) throw Error("Bad hint"); return a }
    di.m = function (a, b, c, d) { (a = a[0]) || fi("missing_hint"); return "https://apis.google.com" + pi(a, b, c, d) };
    var ui = decodeURI("%73cript"), vi = /^[-+_0-9\/A-Za-z]+={0,2}$/; function wi(a, b) { for (var c = [], d = 0; d < a.length; ++d) { var e = a[d], f; if (f = e) { a: { for (f = 0; f < b.length; f++)if (b[f] === e) break a; f = -1 } f = 0 > f } f && c.push(e) } return c }
    function xi() { var a = Kh.nonce; return void 0 !== a ? a && a === String(a) && a.match(vi) ? a : Kh.nonce = null : Ch.querySelector ? (a = Ch.querySelector("script[nonce]")) ? (a = a.nonce || a.getAttribute("nonce") || "", a && a === String(a) && a.match(vi) ? Kh.nonce = a : Kh.nonce = null) : null : null }
    function yi(a) { if ("loading" != Ch.readyState) zi(a); else { var b = xi(), c = ""; null !== b && (c = ' nonce="' + b + '"'); a = "<" + ui + ' src="' + encodeURI(a) + '"' + c + "></" + ui + ">"; Ch.write(Ai ? Ai.createHTML(a) : a) } }
    function zi(a) { var b = Ch.createElement(ui); b.setAttribute("src", Ai ? Ai.createScriptURL(a) : a); a = xi(); null !== a && b.setAttribute("nonce", a); b.async = "true"; (a = Ch.getElementsByTagName(ui)[0]) ? a.parentNode.insertBefore(b, a) : (Ch.head || Ch.body || Ch.documentElement).appendChild(b) }
    function Bi(a, b) { var c = b && b._c; if (c) for (var d = 0; d < ei.length; d++) { var e = ei[d][0], f = ei[d][1]; f && Object.prototype.hasOwnProperty.call(c, e) && f(c[e], a, b) } }
    function Ci(a, b, c) { Di(function () { var d = b === Lh() ? Gh(Jh, "_", Ih()) : Ih(); d = Gh(Nh(b), "_", d); a(d) }, c) }
    function Ei(a, b) {
        var c = b || {}; "function" == typeof b && (c = {}, c.callback = b); Bi(a, c); b = []; a ? b = a.split(":") : c.features && (b = c.features); var d = c.h || ti(), e = Gh(Kh, "ah", Ih()); if (e["::"] && b.length) { a = []; for (var f = null; f = b.shift();) { var g = f.split("."); g = e[f] || e[g[1] && "ns:" + g[0] || ""] || d; var h = a.length && a[a.length - 1] || null, l = h; h && h.hint == g || (l = { hint: g, features: [] }, a.push(l)); l.features.push(f) } var m = a.length; if (1 < m) { var n = c.callback; n && (c.callback = function () { 0 == --m && n() }) } for (; b = a.shift();)Fi(b.features, c, b.hint) } else Fi(b ||
            [], c, d)
    }
    function Fi(a, b, c) {
        function d(S, Pa) { if (t) return 0; Bh.clearTimeout(n); w.push.apply(w, O); var ud = ((Jh || {}).config || {}).update; ud ? ud(f) : f && Gh(Kh, "cu", []).push(f); if (Pa) { bi("me0", S, C); try { Ci(Pa, c, m) } finally { bi("me1", S, C) } } return 1 }
        a = Hh(a) || []; var e = b.callback, f = b.config, g = b.timeout, h = b.ontimeout, l = b.onerror, m = void 0; "function" == typeof l && (m = l); var n = null, t = !1; if (g && !h || !g && h) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set"; l = Gh(Nh(c), "r", []).sort(); var w = Gh(Nh(c), "L", []).sort(), v = Kh.le, C = [].concat(l); 0 < g && (n = Bh.setTimeout(function () { t = !0; h() }, g));
        var O = wi(a, w); if (O.length) {
            O = wi(a, l); var H = Gh(Kh, "CP", []), X = H.length; H[X] = function (S) {
                function Pa() { var ij = H[X + 1]; ij && ij() }
                function ud(ij) { H[X] = null; d(O, S) && Mh(function () { e && e(); ij() }) }
                if (!S) return 0; bi("ml1", O, C); 0 < X && H[X - 1] ? H[X] = function () { ud(Pa) } : ud(Pa)
            };
            if (O.length) {
                var qa = "loaded_" + Kh.I++; Jh[qa] = function (S) { H[X](S); Jh[qa] = null };
                a = li(c, O, "gapi." + qa, l, v); l.push.apply(l, O); bi("ml0", O, C); b.sync || Bh.___gapisync ? yi(a) : zi(a)
            } else H[X](Eh)
        } else d(O) && e && e()
    }
    var Ai = Xa("goog#gapi"); function Di(a, b) {
        if (Kh.hee && 0 < Kh.hel) try { return a() } catch (c) { b && b(c), Kh.hel--, Ei("debug_error", function () { try { window.___jsl.hefn(c) } catch (d) { throw c; } }) } else try { return a() } catch (c) {
            throw b && b(c), c;
        }
    }
    Jh.load = function (a, b) { return Di(function () { return Ei(a, b) }) }; function Gi() { this.data_ = []; this.i = -1 }
    Gi.prototype.set = function (a, b) { b = void 0 === b ? !0 : b; 0 <= a && 52 > a && 0 === a % 1 && this.data_[a] != b && (this.data_[a] = b, this.i = -1) };
    Gi.prototype.get = function (a) { return !!this.data_[a] };
    function Hi(a) {
        -1 == a.i && (a.i = gb(a.data_, function (b, c, d) { return c ? b + Math.pow(2, d) : b }, 0));
        return a.i
    }
    ; Ob("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" ")); function Ii(a) { a && "function" == typeof a.dispose && a.dispose() }
    ; function Ji() { this.K = this.K; this.G = this.G }
    Ji.prototype.K = !1; Ji.prototype.isDisposed = function () { return this.K };
    Ji.prototype.dispose = function () { this.K || (this.K = !0, this.O()) };
    function Ki(a, b) { a.K ? b() : (a.G || (a.G = []), a.G.push(b)) }
    Ji.prototype.O = function () { if (this.G) for (; this.G.length;)this.G.shift()() }; function Li(a, b) { this.type = a; this.currentTarget = this.target = b; this.defaultPrevented = this.j = !1 }
    Li.prototype.stopPropagation = function () { this.j = !0 };
    Li.prototype.preventDefault = function () { this.defaultPrevented = !0 }; var Mi = function () {
        if (!u.addEventListener || !Object.defineProperty) return !1; var a = !1, b = Object.defineProperty({}, "passive", { get: function () { a = !0 } });
        try { u.addEventListener("test", Ja, b), u.removeEventListener("test", Ja, b) } catch (c) { } return a
    }(); var Ni; Ni = te ? "webkitTransitionEnd" : "transitionend"; function Oi(a, b) { Li.call(this, a ? a.type : ""); this.relatedTarget = this.currentTarget = this.target = null; this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0; this.key = ""; this.charCode = this.keyCode = 0; this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1; this.state = null; this.pointerId = 0; this.pointerType = ""; this.i = null; a && this.init(a, b) }
    A(Oi, Li); var Pi = { 2: "touch", 3: "pen", 4: "mouse" };
    Oi.prototype.init = function (a, b) {
        var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null; this.target = a.target || a.srcElement; this.currentTarget = b; (b = a.relatedTarget) ? se && (me(b, "nodeName") || (b = null)) : "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement); this.relatedTarget = b; d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ?
            a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0); this.button = a.button; this.keyCode = a.keyCode || 0; this.key = a.key || ""; this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0); this.ctrlKey = a.ctrlKey; this.altKey = a.altKey; this.shiftKey = a.shiftKey; this.metaKey = a.metaKey; this.pointerId = a.pointerId || 0; this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Pi[a.pointerType] || ""; this.state = a.state; this.i = a; a.defaultPrevented && Oi.T.preventDefault.call(this)
    };
    Oi.prototype.stopPropagation = function () { Oi.T.stopPropagation.call(this); this.i.stopPropagation ? this.i.stopPropagation() : this.i.cancelBubble = !0 };
    Oi.prototype.preventDefault = function () { Oi.T.preventDefault.call(this); var a = this.i; a.preventDefault ? a.preventDefault() : a.returnValue = !1 }; var Qi = "closure_listenable_" + (1E6 * Math.random() | 0); var Ri = 0; function Si(a, b, c, d, e) { this.listener = a; this.i = null; this.src = b; this.type = c; this.capture = !!d; this.hc = e; this.key = ++Ri; this.Pb = this.Xb = !1 }
    function Ti(a) { a.Pb = !0; a.listener = null; a.i = null; a.src = null; a.hc = null }
    ; function Ui(a) { this.src = a; this.listeners = {}; this.i = 0 }
    Ui.prototype.add = function (a, b, c, d, e) { var f = a.toString(); a = this.listeners[f]; a || (a = this.listeners[f] = [], this.i++); var g = Vi(a, b, d, e); -1 < g ? (b = a[g], c || (b.Xb = !1)) : (b = new Si(b, this.src, f, !!d, e), b.Xb = c, a.push(b)); return b };
    Ui.prototype.remove = function (a, b, c, d) { a = a.toString(); if (!(a in this.listeners)) return !1; var e = this.listeners[a]; b = Vi(e, b, c, d); return -1 < b ? (Ti(e[b]), pb(e, b), 0 == e.length && (delete this.listeners[a], this.i--), !0) : !1 };
    function Wi(a, b) { var c = b.type; c in a.listeners && ob(a.listeners[c], b) && (Ti(b), 0 == a.listeners[c].length && (delete a.listeners[c], a.i--)) }
    function Vi(a, b, c, d) { for (var e = 0; e < a.length; ++e) { var f = a[e]; if (!f.Pb && f.listener == b && f.capture == !!c && f.hc == d) return e } return -1 }
    ; var Xi = "closure_lm_" + (1E6 * Math.random() | 0), Yi = {}, Zi = 0; function $i(a, b, c, d, e) { if (d && d.once) return aj(a, b, c, d, e); if (Array.isArray(b)) { for (var f = 0; f < b.length; f++)$i(a, b[f], c, d, e); return null } c = bj(c); return a && a[Qi] ? a.ib(b, c, Na(d) ? !!d.capture : !!d, e) : cj(a, b, c, !1, d, e) }
    function cj(a, b, c, d, e, f) { if (!b) throw Error("Invalid event type"); var g = Na(e) ? !!e.capture : !!e, h = dj(a); h || (a[Xi] = h = new Ui(a)); c = h.add(b, c, d, g, f); if (c.i) return c; d = ej(); c.i = d; d.src = a; d.listener = c; if (a.addEventListener) Mi || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e); else if (a.attachEvent) a.attachEvent(fj(b.toString()), d); else if (a.addListener && a.removeListener) a.addListener(d); else throw Error("addEventListener and attachEvent are unavailable."); Zi++; return c }
    function ej() {
        function a(c) { return b.call(a.src, a.listener, c) }
        var b = gj; return a
    }
    function aj(a, b, c, d, e) { if (Array.isArray(b)) { for (var f = 0; f < b.length; f++)aj(a, b[f], c, d, e); return null } c = bj(c); return a && a[Qi] ? a.l.add(String(b), c, !0, Na(d) ? !!d.capture : !!d, e) : cj(a, b, c, !0, d, e) }
    function hj(a, b, c, d, e) { if (Array.isArray(b)) for (var f = 0; f < b.length; f++)hj(a, b[f], c, d, e); else (d = Na(d) ? !!d.capture : !!d, c = bj(c), a && a[Qi]) ? a.l.remove(String(b), c, d, e) : a && (a = dj(a)) && (b = a.listeners[b.toString()], a = -1, b && (a = Vi(b, c, d, e)), (c = -1 < a ? b[a] : null) && jj(c)) }
    function jj(a) { if ("number" !== typeof a && a && !a.Pb) { var b = a.src; if (b && b[Qi]) Wi(b.l, a); else { var c = a.type, d = a.i; b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(fj(c), d) : b.addListener && b.removeListener && b.removeListener(d); Zi--; (c = dj(b)) ? (Wi(c, a), 0 == c.i && (c.src = null, b[Xi] = null)) : Ti(a) } } }
    function fj(a) { return a in Yi ? Yi[a] : Yi[a] = "on" + a }
    function gj(a, b) { if (a.Pb) a = !0; else { b = new Oi(b, this); var c = a.listener, d = a.hc || a.src; a.Xb && jj(a); a = c.call(d, b) } return a }
    function dj(a) { a = a[Xi]; return a instanceof Ui ? a : null }
    var kj = "__closure_events_fn_" + (1E9 * Math.random() >>> 0); function bj(a) {
        if ("function" === typeof a) return a; a[kj] || (a[kj] = function (b) { return a.handleEvent(b) });
        return a[kj]
    }
    ; function lj() { Ji.call(this); this.l = new Ui(this); this.Lc = this; this.ga = null }
    A(lj, Ji); lj.prototype[Qi] = !0; lj.prototype.addEventListener = function (a, b, c, d) { $i(this, a, b, c, d) };
    lj.prototype.removeEventListener = function (a, b, c, d) { hj(this, a, b, c, d) };
    function mj(a, b) { var c = a.ga; if (c) { var d = []; for (var e = 1; c; c = c.ga)d.push(c), ++e } a = a.Lc; c = b.type || b; "string" === typeof b ? b = new Li(b, a) : b instanceof Li ? b.target = b.target || a : (e = b, b = new Li(c, a), Nb(b, e)); e = !0; if (d) for (var f = d.length - 1; !b.j && 0 <= f; f--) { var g = b.currentTarget = d[f]; e = nj(g, c, !0, b) && e } b.j || (g = b.currentTarget = a, e = nj(g, c, !0, b) && e, b.j || (e = nj(g, c, !1, b) && e)); if (d) for (f = 0; !b.j && f < d.length; f++)g = b.currentTarget = d[f], e = nj(g, c, !1, b) && e }
    lj.prototype.O = function () { lj.T.O.call(this); if (this.l) { var a = this.l, b = 0, c; for (c in a.listeners) { for (var d = a.listeners[c], e = 0; e < d.length; e++)++b, Ti(d[e]); delete a.listeners[c]; a.i-- } } this.ga = null };
    lj.prototype.ib = function (a, b, c, d) { return this.l.add(String(a), b, !1, c, d) };
    function nj(a, b, c, d) { b = a.l.listeners[String(b)]; if (!b) return !0; b = b.concat(); for (var e = !0, f = 0; f < b.length; ++f) { var g = b[f]; if (g && !g.Pb && g.capture == c) { var h = g.listener, l = g.hc || g.src; g.Xb && Wi(a.l, g); e = !1 !== h.call(l, d) && e } } return e && !d.defaultPrevented }
    ; function oj(a, b) { lj.call(this); this.j = a || 1; this.i = b || u; this.o = z(this.ef, this); this.A = Va() }
    A(oj, lj); k = oj.prototype; k.enabled = !1; k.xa = null; k.ef = function () { if (this.enabled) { var a = Va() - this.A; 0 < a && a < .8 * this.j ? this.xa = this.i.setTimeout(this.o, this.j - a) : (this.xa && (this.i.clearTimeout(this.xa), this.xa = null), mj(this, "tick"), this.enabled && (this.stop(), this.start())) } };
    k.start = function () { this.enabled = !0; this.xa || (this.xa = this.i.setTimeout(this.o, this.j), this.A = Va()) };
    k.stop = function () { this.enabled = !1; this.xa && (this.i.clearTimeout(this.xa), this.xa = null) };
    k.O = function () { oj.T.O.call(this); this.stop(); delete this.i };
    function pj(a, b, c) { if ("function" === typeof a) c && (a = z(a, c)); else if (a && "function" == typeof a.handleEvent) a = z(a.handleEvent, a); else throw Error("Invalid listener argument"); return 2147483647 < Number(b) ? -1 : u.setTimeout(a, b || 0) }
    ; function qj(a, b, c) { Ji.call(this); this.i = a; this.o = b || 0; this.j = c; this.l = z(this.jd, this) }
    A(qj, Ji); k = qj.prototype; k.Gb = 0; k.O = function () { qj.T.O.call(this); this.stop(); delete this.i; delete this.j };
    k.start = function (a) { this.stop(); this.Gb = pj(this.l, void 0 !== a ? a : this.o) };
    k.stop = function () { this.isActive() && u.clearTimeout(this.Gb); this.Gb = 0 };
    k.isActive = function () { return 0 != this.Gb };
    k.jd = function () { this.Gb = 0; this.i && this.i.call(this.j) }; function rj(a, b, c) { Ji.call(this); this.B = null != c ? a.bind(c) : a; this.A = b; this.o = null; this.j = !1; this.l = 0; this.i = null }
    q(rj, Ji); k = rj.prototype; k.ff = function (a) { this.o = arguments; this.i || this.l ? this.j = !0 : sj(this) };
    k.stop = function () { this.i && (u.clearTimeout(this.i), this.i = null, this.j = !1, this.o = null) };
    k.pause = function () { this.l++ };
    k.resume = function () { this.l--; this.l || !this.j || this.i || (this.j = !1, sj(this)) };
    k.O = function () { Ji.prototype.O.call(this); this.stop() };
    function sj(a) {
        a.i = pj(function () { a.i = null; a.j && !a.l && (a.j = !1, sj(a)) }, a.A);
        var b = a.o; a.o = null; a.B.apply(null, b)
    }
    ; function tj(a, b) { this.j = a[u.Symbol.iterator](); this.l = b; this.o = 0 }
    tj.prototype[Symbol.iterator] = function () { return this };
    tj.prototype.next = function () { var a = this.j.next(); return { value: a.done ? void 0 : this.l.call(void 0, a.value, this.o++), done: a.done } };
    function uj(a, b) { return new tj(a, b) }
    ; function vj() { this.blockSize = -1 }
    ; function wj() { this.blockSize = -1; this.blockSize = 64; this.i = []; this.A = []; this.G = []; this.l = []; this.l[0] = 128; for (var a = 1; a < this.blockSize; ++a)this.l[a] = 0; this.o = this.j = 0; this.reset() }
    A(wj, vj); wj.prototype.reset = function () { this.i[0] = 1732584193; this.i[1] = 4023233417; this.i[2] = 2562383102; this.i[3] = 271733878; this.i[4] = 3285377520; this.o = this.j = 0 };
    function xj(a, b, c) {
        c || (c = 0); var d = a.G; if ("string" === typeof b) for (var e = 0; 16 > e; e++)d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4; else for (e = 0; 16 > e; e++)d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4; for (e = 16; 80 > e; e++) { var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16]; d[e] = (f << 1 | f >>> 31) & 4294967295 } b = a.i[0]; c = a.i[1]; var g = a.i[2], h = a.i[3], l = a.i[4]; for (e = 0; 80 > e; e++) {
            if (40 > e) if (20 > e) { f = h ^ c & (g ^ h); var m = 1518500249 } else f = c ^ g ^ h, m = 1859775393; else 60 > e ? (f = c & g | h & (c | g), m = 2400959708) :
                (f = c ^ g ^ h, m = 3395469782); f = (b << 5 | b >>> 27) + f + l + m + d[e] & 4294967295; l = h; h = g; g = (c << 30 | c >>> 2) & 4294967295; c = b; b = f
        } a.i[0] = a.i[0] + b & 4294967295; a.i[1] = a.i[1] + c & 4294967295; a.i[2] = a.i[2] + g & 4294967295; a.i[3] = a.i[3] + h & 4294967295; a.i[4] = a.i[4] + l & 4294967295
    }
    wj.prototype.update = function (a, b) { if (null != a) { void 0 === b && (b = a.length); for (var c = b - this.blockSize, d = 0, e = this.A, f = this.j; d < b;) { if (0 == f) for (; d <= c;)xj(this, a, d), d += this.blockSize; if ("string" === typeof a) for (; d < b;) { if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.blockSize) { xj(this, e); f = 0; break } } else for (; d < b;)if (e[f] = a[d], ++f, ++d, f == this.blockSize) { xj(this, e); f = 0; break } } this.j = f; this.o += b } };
    wj.prototype.digest = function () { var a = [], b = 8 * this.o; 56 > this.j ? this.update(this.l, 56 - this.j) : this.update(this.l, this.blockSize - (this.j - 56)); for (var c = this.blockSize - 1; 56 <= c; c--)this.A[c] = b & 255, b /= 256; xj(this, this.A); for (c = b = 0; 5 > c; c++)for (var d = 24; 0 <= d; d -= 8)a[b] = this.i[c] >> d & 255, ++b; return a }; function yj(a) { return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || "" }
    function zj(a) { return a.classList ? a.classList : yj(a).match(/\S+/g) || [] }
    function Aj(a, b) { "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b) }
    function I(a, b) { return a.classList ? a.classList.contains(b) : mb(zj(a), b) }
    function Bj(a, b) { if (a.classList) a.classList.add(b); else if (!I(a, b)) { var c = yj(a); Aj(a, c + (0 < c.length ? " " + b : b)) } }
    function Cj(a, b) {
        if (a.classList) Array.prototype.forEach.call(b, function (e) { Bj(a, e) });
        else {
            var c = {}; Array.prototype.forEach.call(zj(a), function (e) { c[e] = !0 });
            Array.prototype.forEach.call(b, function (e) { c[e] = !0 });
            b = ""; for (var d in c) b += 0 < b.length ? " " + d : d; Aj(a, b)
        }
    }
    function Dj(a, b) { a.classList ? a.classList.remove(b) : I(a, b) && Aj(a, Array.prototype.filter.call(zj(a), function (c) { return c != b }).join(" ")) }
    function Ej(a, b) { a.classList ? Array.prototype.forEach.call(b, function (c) { Dj(a, c) }) : Aj(a, Array.prototype.filter.call(zj(a), function (c) { return !mb(b, c) }).join(" ")) }
    function Fj(a, b, c) { c ? Bj(a, b) : Dj(a, b) }
    function Gj(a, b, c) { I(a, b) && (Dj(a, b), Bj(a, c)) }
    function Hj(a, b) { var c = !I(a, b); Fj(a, b, c); return c }
    ; var Ij = !pe && !Nc(); function Jj(a, b) { if (/-[a-z]/.test(b)) return null; if (Ij && a.dataset) { if (Pc() && !(b in a.dataset)) return null; a = a.dataset[b]; return void 0 === a ? null : a } return a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase()) }
    ; var Kj = "StopIteration" in u ? u.StopIteration : { message: "StopIteration", stack: "" }; function Lj() { }
    Lj.prototype.next = function () { return Lj.prototype.i.call(this) };
    Lj.prototype.i = function () { throw Kj; };
    Lj.prototype.ma = function () { return this };
    function Mj(a) {
        if (a instanceof Lj) return a; if ("function" == typeof a.ma) return a.ma(!1); if (Ma(a)) {
            var b = 0, c = new Lj; c.i = function () { for (; ;) { if (b >= a.length) throw Kj; if (b in a) return a[b++]; b++ } };
            c.next = c.i.bind(c); return c
        } throw Error("Not implemented");
    }
    function Nj(a, b, c) { if (Ma(a)) try { B(a, b, c) } catch (d) { if (d !== Kj) throw d; } else { a = Mj(a); try { for (; ;)b.call(c, a.i(), void 0, a) } catch (d) { if (d !== Kj) throw d; } } }
    ; function Oj(a) {
        if (a instanceof Pj || a instanceof Qj || a instanceof Rj) return a; if ("function" == typeof a.next) return new Pj(function () { return Sj(a) });
        if ("function" == typeof a[Symbol.iterator]) return new Pj(function () { return a[Symbol.iterator]() });
        if ("function" == typeof a.ma) return new Pj(function () { return Sj(a.ma()) });
        throw Error("Not an iterator or iterable.");
    }
    function Sj(a) { if (!(a instanceof Lj)) return a; var b = !1; return { next: function () { for (var c; !b;)try { c = a.i(); break } catch (d) { if (d !== Kj) throw d; b = !0 } return { value: c, done: b } } } }
    function Pj(a) { this.l = a }
    Pj.prototype.ma = function () { return new Qj(this.l()) };
    Pj.prototype[Symbol.iterator] = function () { return new Rj(this.l()) };
    Pj.prototype.j = function () { return new Rj(this.l()) };
    function Qj(a) { this.l = a }
    q(Qj, Lj); Qj.prototype.i = function () { var a = this.l.next(); if (a.done) throw Kj; return a.value };
    Qj.prototype.next = function () { return Qj.prototype.i.call(this) };
    Qj.prototype[Symbol.iterator] = function () { return new Rj(this.l) };
    Qj.prototype.j = function () { return new Rj(this.l) };
    function Rj(a) {
        Pj.call(this, function () { return a });
        this.o = a
    }
    q(Rj, Pj); Rj.prototype.next = function () { return this.o.next() }; function Tj(a, b) { this.j = {}; this.i = []; this.bb = this.size = 0; var c = arguments.length; if (1 < c) { if (c % 2) throw Error("Uneven number of arguments"); for (var d = 0; d < c; d += 2)this.set(arguments[d], arguments[d + 1]) } else if (a) if (a instanceof Tj) for (c = a.Fa(), d = 0; d < c.length; d++)this.set(c[d], a.get(c[d])); else for (d in a) this.set(d, a[d]) }
    k = Tj.prototype; k.va = function () { Uj(this); for (var a = [], b = 0; b < this.i.length; b++)a.push(this.j[this.i[b]]); return a };
    k.Fa = function () { Uj(this); return this.i.concat() };
    k.has = function (a) { return Vj(this.j, a) };
    k.equals = function (a, b) { if (this === a) return !0; if (this.size != a.size) return !1; b = b || Wj; Uj(this); for (var c, d = 0; c = this.i[d]; d++)if (!b(this.get(c), a.get(c))) return !1; return !0 };
    function Wj(a, b) { return a === b }
    k.isEmpty = function () { return 0 == this.size };
    k.clear = function () { this.j = {}; this.bb = this.size = this.i.length = 0 };
    k.remove = function (a) { return this.delete(a) };
    k.delete = function (a) { return Vj(this.j, a) ? (delete this.j[a], --this.size, this.bb++, this.i.length > 2 * this.size && Uj(this), !0) : !1 };
    function Uj(a) { if (a.size != a.i.length) { for (var b = 0, c = 0; b < a.i.length;) { var d = a.i[b]; Vj(a.j, d) && (a.i[c++] = d); b++ } a.i.length = c } if (a.size != a.i.length) { var e = {}; for (c = b = 0; b < a.i.length;)d = a.i[b], Vj(e, d) || (a.i[c++] = d, e[d] = 1), b++; a.i.length = c } }
    k.get = function (a, b) { return Vj(this.j, a) ? this.j[a] : b };
    k.set = function (a, b) { Vj(this.j, a) || (this.size += 1, this.i.push(a), this.bb++); this.j[a] = b };
    k.forEach = function (a, b) { for (var c = this.Fa(), d = 0; d < c.length; d++) { var e = c[d], f = this.get(e); a.call(b, f, e, this) } };
    k.clone = function () { return new Tj(this) };
    k.keys = function () { return Oj(this.ma(!0)).j() };
    k.values = function () { return Oj(this.ma(!1)).j() };
    k.entries = function () { var a = this; return uj(this.keys(), function (b) { return [b, a.get(b)] }) };
    k.ma = function (a) {
        Uj(this); var b = 0, c = this.bb, d = this, e = new Lj; e.i = function () { if (c != d.bb) throw Error("The map has changed since the iterator was created"); if (b >= d.i.length) throw Kj; var f = d.i[b++]; return a ? f : d.j[f] };
        e.next = e.i.bind(e); return e
    };
    function Vj(a, b) { return Object.prototype.hasOwnProperty.call(a, b) }
    ; function Xj(a, b, c) { a.push(encodeURIComponent(b) + "=" + encodeURIComponent(c)) }
    function Yj(a) { var b = a.type; if ("string" === typeof b) switch (b.toLowerCase()) { case "checkbox": case "radio": return a.checked ? a.value : null; case "select-one": return b = a.selectedIndex, 0 <= b ? a.options[b].value : null; case "select-multiple": b = []; for (var c, d = 0; c = a.options[d]; d++)c.selected && b.push(c.value); return b.length ? b : null }return null != a.value ? a.value : null }
    ; function Zj(a) { Ji.call(this); this.j = a; this.i = {} }
    A(Zj, Ji); var ak = []; Zj.prototype.ib = function (a, b, c, d) { Array.isArray(b) || (b && (ak[0] = b.toString()), b = ak); for (var e = 0; e < b.length; e++) { var f = $i(a, b[e], c || this.handleEvent, d || !1, this.j || this); if (!f) break; this.i[f.key] = f } return this };
    function bk(a) {
        Ab(a.i, function (b, c) { this.i.hasOwnProperty(c) && jj(b) }, a);
        a.i = {}
    }
    Zj.prototype.O = function () { Zj.T.O.call(this); bk(this) };
    Zj.prototype.handleEvent = function () { throw Error("EventHandler.handleEvent not implemented"); }; function ck(a) { return pd(ec(a.replace(dk, function (b, c) { return ek.test(c) ? "" : " " }).replace(/[\t\n ]+/g, " "))) }
    var ek = /^(?:abbr|acronym|address|b|em|i|small|strong|su[bp]|u)$/i, dk = /<[!\/]?([a-z0-9]+)([\/ ][^>]*)?>/gi; function fk(a) { try { return u.JSON.parse(a) } catch (b) { } a = String(a); if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try { return eval("(" + a + ")") } catch (b) { } throw Error("Invalid JSON string: " + a); }
    function gk(a) { var b = []; hk(new ik, a, b); return b.join("") }
    function ik() { }
    function hk(a, b, c) {
        if (null == b) c.push("null"); else {
            if ("object" == typeof b) { if (Array.isArray(b)) { var d = b; b = d.length; c.push("["); for (var e = "", f = 0; f < b; f++)c.push(e), hk(a, d[f], c), e = ","; c.push("]"); return } if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf(); else { c.push("{"); e = ""; for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), jk(d, c), c.push(":"), hk(a, f, c), e = ",")); c.push("}"); return } } switch (typeof b) {
                case "string": jk(b, c); break; case "number": c.push(isFinite(b) &&
                    !isNaN(b) ? String(b) : "null"); break; case "boolean": c.push(String(b)); break; case "function": c.push("null"); break; default: throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var kk = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\u000b" }, lk = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g; function jk(a, b) { b.push('"', a.replace(lk, function (c) { var d = kk[c]; d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), kk[c] = d); return d }), '"') }
    ; function mk(a) { if (u.JSON) try { return u.JSON.parse(a) } catch (b) { } return fk(a) }
    ; function nk() { }
    nk.prototype.stringify = function (a) { return u.JSON.stringify(a, void 0) };
    nk.prototype.parse = function (a) { return u.JSON.parse(a, void 0) }; function ok(a, b, c, d, e, f, g, h) { this.i = a; this.B = b; this.l = c; this.A = d; this.o = e; this.G = f; this.j = g; this.K = h }
    ok.prototype.clone = function () { return new ok(this.i, this.B, this.l, this.A, this.o, this.G, this.j, this.K) };
    ok.prototype.equals = function (a) { return this.i == a.i && this.B == a.B && this.l == a.l && this.A == a.A && this.o == a.o && this.G == a.G && this.j == a.j && this.K == a.K };
    function pk(a, b) { if (0 == b) return a.i; if (1 == b) return a.j; var c = bf(a.i, a.l, b), d = bf(a.l, a.o, b); a = bf(a.o, a.j, b); c = bf(c, d, b); d = bf(d, a, b); return bf(c, d, b) }
    function qk(a, b) { var c = (b - a.i) / (a.j - a.i); if (0 >= c) return 0; if (1 <= c) return 1; for (var d = 0, e = 1, f = 0, g = 0; 8 > g; g++) { f = pk(a, c); var h = (pk(a, c + 1E-6) - f) / 1E-6; if (1E-6 > Math.abs(f - b)) return c; if (1E-6 > Math.abs(h)) break; else f < b ? d = c : e = c, c -= (f - b) / h } for (g = 0; 1E-6 < Math.abs(f - b) && 8 > g; g++)f < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), f = pk(a, c); return c }
    function rk(a, b) { b = qk(a, b); if (0 == b) a = a.B; else if (1 == b) a = a.K; else { var c = bf(a.B, a.A, b), d = bf(a.A, a.G, b); a = bf(a.G, a.K, b); c = bf(c, d, b); d = bf(d, a, b); a = bf(c, d, b) } return a }
    ; var sk = new WeakMap; function tk(a, b) { a = [a]; for (var c = b.length - 1; 0 <= c; --c)a.push(typeof b[c], b[c]); return a.join("\x0B") }
    ; function uk(a, b) { if ("function" !== typeof a) throw Error("Fn must not be null and must be a function"); return u.setTimeout(function () { a() }, b) }
    ; function vk(a) { mj(wk, new xk(wk, a)) }
    var wk = new lj; function xk(a) { Li.call(this, "statevent", a) }
    q(xk, Li); function yk() { }
    yk.prototype.i = null; yk.prototype.getOptions = function () { var a; (a = this.i) || (a = {}, zk(this) && (a[0] = !0, a[1] = !0), a = this.i = a); return a }; var Ak; function Bk() { }
    A(Bk, yk); function Ck(a) { return (a = zk(a)) ? new ActiveXObject(a) : new XMLHttpRequest }
    function zk(a) { if (!a.j && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) { for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) { var d = b[c]; try { return new ActiveXObject(d), a.j = d } catch (e) { } } throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"); } return a.j }
    Ak = new Bk; function Dk(a, b, c, d) { this.i = a; this.j = b; this.K = c; this.B = d || 1; this.l = 45E3; this.A = new Zj(this); a = this.G = new oj; a.j = 250; a.xa && a.enabled ? (a.stop(), a.start()) : a.xa && a.stop() }
    k = Dk.prototype; k.cb = null; k.Ma = !1; k.Eb = null; k.hd = null; k.Bb = null; k.Cb = null; k.Oa = null; k.Ya = null; k.jb = null; k.la = null; k.Fc = 0; k.Aa = null; k.Ec = null; k.Na = null; k.Hb = -1; k.Te = !0; k.fb = !1; k.Gc = 0; k.uc = null; var Ek = {}, Fk = {}; k = Dk.prototype; k.setTimeout = function (a) { this.l = a };
    function Gk(a, b, c) { a.Cb = 1; a.Oa = Hk(b.clone()); a.jb = c; a.o = !0; Ik(a, null) }
    function Jk(a, b, c, d, e) { a.Cb = 1; a.Oa = Hk(b.clone()); a.jb = null; a.o = c; e && (a.Te = !1); Ik(a, d) }
    function Ik(a, b) { a.Bb = Date.now(); Kk(a); a.Ya = a.Oa.clone(); Lk(a.Ya, "t", a.B); a.Fc = 0; a.la = a.i.Pc(a.i.Qb() ? b : null); 0 < a.Gc && (a.uc = new rj(z(a.cf, a, a.la), a.Gc)); a.A.ib(a.la, "readystatechange", a.Bh); b = a.cb ? Kb(a.cb) : {}; a.jb ? (a.Ec = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.la.send(a.Ya, a.Ec, a.jb, b)) : (a.Ec = "GET", a.Te && !te && (b.Connection = "close"), a.la.send(a.Ya, a.Ec, null, b)); a.i.za(1) }
    k.Bh = function (a) { a = a.target; var b = this.uc; b && 3 == Mk(a) ? b.ff() : this.cf(a) };
    k.cf = function (a) {
        try {
            if (a == this.la) a: {
                var b = Mk(this.la), c = this.la.B, d = this.la.getStatus(); if (pe && !Je(10) || te && !Ie("420+")) { if (4 > b) break a } else if (3 > b || 3 == b && !Nk(this.la)) break a; this.fb || 4 != b || 7 == c || (8 == c || 0 >= d ? this.i.za(3) : this.i.za(2)); Ok(this); var e = this.la.getStatus(); this.Hb = e; var f = Nk(this.la); if (this.Ma = 200 == e) {
                    4 == b && Pk(this); if (this.o) {
                        for (a = !0; !this.fb && this.Fc < f.length;) {
                            var g = Qk(this, f); if (g == Fk) { 4 == b && (this.Na = 4, vk(15), a = !1); break } else if (g == Ek) { this.Na = 4; vk(16); a = !1; break } else Rk(this,
                                g)
                        } 4 == b && 0 == f.length && (this.Na = 1, vk(17), a = !1); this.Ma = this.Ma && a; a || (Pk(this), Sk(this))
                    } else Rk(this, f); this.Ma && !this.fb && (4 == b ? this.i.nc(this) : (this.Ma = !1, Kk(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Na = 3, vk(13)) : (this.Na = 0, vk(14)), Pk(this), Sk(this)
            }
        } catch (h) { } finally { }
    };
    function Qk(a, b) { var c = a.Fc, d = b.indexOf("\n", c); if (-1 == d) return Fk; c = Number(b.substring(c, d)); if (isNaN(c)) return Ek; d += 1; if (d + c > b.length) return Fk; b = b.substr(d, c); a.Fc = d + c; return b }
    function Tk(a, b) {
        a.Bb = Date.now(); Kk(a); var c = b ? window.location.hostname : ""; a.Ya = a.Oa.clone(); Uk(a.Ya, "DOMAIN", c); Uk(a.Ya, "t", a.B); try { a.Aa = new ActiveXObject("htmlfile") } catch (l) { Pk(a); a.Na = 7; vk(22); Sk(a); return } var d = "<html><body>"; if (b) {
            var e = ""; for (b = 0; b < c.length; b++) {
                var f = c.charAt(b); if ("<" == f) f = e + "\\x3c"; else if (">" == f) f = e + "\\x3e"; else {
                    if (f in vd) f = vd[f]; else if (f in td) f = vd[f] = td[f]; else {
                        var g = f.charCodeAt(0); if (31 < g && 127 > g) var h = f; else {
                            if (256 > g) { if (h = "\\x", 16 > g || 256 < g) h += "0" } else h = "\\u", 4096 >
                                g && (h += "0"); h += g.toString(16).toUpperCase()
                        } f = vd[f] = h
                    } f = e + f
                } e = f
            } d += '<script>document.domain="' + e + '"\x3c/script>'
        } d += "</body></html>"; c = dd(Wb("b/12014412"), d); a.Aa.open(); a.Aa.write(Sc(c)); a.Aa.close(); a.Aa.parentWindow.m = z(a.uh, a); a.Aa.parentWindow.d = z(a.Le, a, !0); a.Aa.parentWindow.rpcClose = z(a.Le, a, !1); c = a.Aa.createElement("DIV"); a.Aa.parentWindow.document.body.appendChild(c); d = wc(a.Ya.toString()) || yc; d = od(rc(d)); d = dd(Wb("b/12014412"), '<iframe src="' + d + '"></iframe>'); fd(c, d); a.i.za(1)
    }
    k.uh = function (a) { uk(z(this.th, this, a), 0) };
    k.th = function (a) { this.fb || (Ok(this), Rk(this, a), Kk(this)) };
    k.Le = function (a) { uk(z(this.sh, this, a), 0) };
    k.sh = function (a) { this.fb || (Pk(this), this.Ma = a, this.i.nc(this), this.i.za(4)) };
    k.cancel = function () { this.fb = !0; Pk(this) };
    function Kk(a) { a.hd = Date.now() + a.l; Vk(a, a.l) }
    function Vk(a, b) { if (null != a.Eb) throw Error("WatchDog timer not null"); a.Eb = uk(z(a.xh, a), b) }
    function Ok(a) { a.Eb && (u.clearTimeout(a.Eb), a.Eb = null) }
    k.xh = function () { this.Eb = null; var a = Date.now(); 0 <= a - this.hd ? (2 != this.Cb && this.i.za(3), Pk(this), this.Na = 2, vk(18), Sk(this)) : Vk(this, this.hd - a) };
    function Sk(a) { a.i.ke() || a.fb || a.i.nc(a) }
    function Pk(a) { Ok(a); Ii(a.uc); a.uc = null; a.G.stop(); bk(a.A); if (a.la) { var b = a.la; a.la = null; b.abort(); b.dispose() } a.Aa && (a.Aa = null) }
    k.getLastError = function () { return this.Na };
    function Rk(a, b) { try { a.i.Ge(a, b), a.i.za(4) } catch (c) { } }
    ; function Wk(a) { if (a.va && "function" == typeof a.va) return a.va(); if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values()); if ("string" === typeof a) return a.split(""); if (Ma(a)) { for (var b = [], c = a.length, d = 0; d < c; d++)b.push(a[d]); return b } return Eb(a) }
    function Xk(a) { if (a.Fa && "function" == typeof a.Fa) return a.Fa(); if (!a.va || "function" != typeof a.va) { if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys()); if (!("undefined" !== typeof Set && a instanceof Set)) { if (Ma(a) || "string" === typeof a) { var b = []; a = a.length; for (var c = 0; c < a; c++)b.push(c); return b } return Fb(a) } } }
    function Yk(a, b, c) { if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c); else if (Ma(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c); else for (var d = Xk(a), e = Wk(a), f = e.length, g = 0; g < f; g++)b.call(c, e[g], d && d[g], a) }
    ; function Zk(a, b) { this.j = this.K = this.o = ""; this.B = null; this.G = this.i = ""; this.A = !1; var c; a instanceof Zk ? (this.A = void 0 !== b ? b : a.A, $k(this, a.o), this.K = a.K, al(this, a.j), bl(this, a.B), this.i = a.i, cl(this, a.l.clone()), this.G = a.G) : a && (c = Ad(String(a))) ? (this.A = !!b, $k(this, c[1] || "", !0), this.K = dl(c[2] || ""), al(this, c[3] || "", !0), bl(this, c[4]), this.i = dl(c[5] || "", !0), cl(this, c[6] || "", !0), this.G = dl(c[7] || "")) : (this.A = !!b, this.l = new el(null, this.A)) }
    Zk.prototype.toString = function () { var a = [], b = this.o; b && a.push(fl(b, gl, !0), ":"); var c = this.j; if (c || "file" == b) a.push("//"), (b = this.K) && a.push(fl(b, gl, !0), "@"), a.push(md(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.B, null != c && a.push(":", String(c)); if (c = this.i) this.j && "/" != c.charAt(0) && a.push("/"), a.push(fl(c, "/" == c.charAt(0) ? hl : il, !0)); (c = this.l.toString()) && a.push("?", c); (c = this.G) && a.push("#", fl(c, jl)); return a.join("") };
    Zk.prototype.resolve = function (a) {
        var b = this.clone(), c = !!a.o; c ? $k(b, a.o) : c = !!a.K; c ? b.K = a.K : c = !!a.j; c ? al(b, a.j) : c = null != a.B; var d = a.i; if (c) bl(b, a.B); else if (c = !!a.i) {
            if ("/" != d.charAt(0)) if (this.j && !this.i) d = "/" + d; else { var e = b.i.lastIndexOf("/"); -1 != e && (d = b.i.substr(0, e + 1) + d) } e = d; if (".." == e || "." == e) d = ""; else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                d = 0 == e.lastIndexOf("/", 0); e = e.split("/"); for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++]; "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length &&
                        "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
                } d = f.join("/")
            } else d = e
        } c ? b.i = d : c = "" !== a.l.toString(); c ? cl(b, a.l.clone()) : c = !!a.G; c && (b.G = a.G); return b
    };
    Zk.prototype.clone = function () { return new Zk(this) };
    function $k(a, b, c) { a.o = c ? dl(b, !0) : b; a.o && (a.o = a.o.replace(/:$/, "")) }
    function al(a, b, c) { a.j = c ? dl(b, !0) : b }
    function bl(a, b) { if (b) { b = Number(b); if (isNaN(b) || 0 > b) throw Error("Bad port number " + b); a.B = b } else a.B = null }
    function cl(a, b, c) { b instanceof el ? (a.l = b, kl(a.l, a.A)) : (c || (b = fl(b, ll)), a.l = new el(b, a.A)) }
    function Uk(a, b, c) { a.l.set(b, c) }
    function Lk(a, b, c) { Array.isArray(c) || (c = [String(c)]); ml(a.l, b, c) }
    function Hk(a) { Uk(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Va()).toString(36)); return a }
    function nl(a) { return a instanceof Zk ? a.clone() : new Zk(a, void 0) }
    function ol(a, b, c, d) { var e = new Zk(null, void 0); a && $k(e, a); b && al(e, b); c && bl(e, c); d && (e.i = d); return e }
    function dl(a, b) { return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "" }
    function fl(a, b, c) { return "string" === typeof a ? (a = encodeURI(a).replace(b, pl), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null }
    function pl(a) { a = a.charCodeAt(0); return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16) }
    var gl = /[#\/\?@]/g, il = /[#\?:]/g, hl = /[#\?]/g, ll = /[#\?@]/g, jl = /#/g; function el(a, b) { this.j = this.i = null; this.l = a || null; this.o = !!b }
    function ql(a) { a.i || (a.i = new Tj, a.j = 0, a.l && Ed(a.l, function (b, c) { a.add(nd(b), c) })) }
    k = el.prototype; k.add = function (a, b) { ql(this); this.l = null; a = rl(this, a); var c = this.i.get(a); c || this.i.set(a, c = []); c.push(b); this.j = this.j + 1; return this };
    k.remove = function (a) { ql(this); a = rl(this, a); return this.i.has(a) ? (this.l = null, this.j = this.j - this.i.get(a).length, this.i.remove(a)) : !1 };
    k.clear = function () { this.i = this.l = null; this.j = 0 };
    k.isEmpty = function () { ql(this); return 0 == this.j };
    function sl(a, b) { ql(a); b = rl(a, b); return a.i.has(b) }
    k.forEach = function (a, b) { ql(this); this.i.forEach(function (c, d) { c.forEach(function (e) { a.call(b, e, d, this) }, this) }, this) };
    k.Fa = function () { ql(this); for (var a = this.i.va(), b = this.i.Fa(), c = [], d = 0; d < b.length; d++)for (var e = a[d], f = 0; f < e.length; f++)c.push(b[d]); return c };
    k.va = function (a) { ql(this); var b = []; if ("string" === typeof a) sl(this, a) && (b = b.concat(this.i.get(rl(this, a)))); else { a = this.i.va(); for (var c = 0; c < a.length; c++)b = b.concat(a[c]) } return b };
    k.set = function (a, b) { ql(this); this.l = null; a = rl(this, a); sl(this, a) && (this.j = this.j - this.i.get(a).length); this.i.set(a, [b]); this.j = this.j + 1; return this };
    k.get = function (a, b) { if (!a) return b; a = this.va(a); return 0 < a.length ? String(a[0]) : b };
    function ml(a, b, c) { a.remove(b); 0 < c.length && (a.l = null, a.i.set(rl(a, b), sb(c)), a.j = a.j + c.length) }
    k.toString = function () { if (this.l) return this.l; if (!this.i) return ""; for (var a = [], b = this.i.Fa(), c = 0; c < b.length; c++) { var d = b[c], e = md(d); d = this.va(d); for (var f = 0; f < d.length; f++) { var g = e; "" !== d[f] && (g += "=" + md(d[f])); a.push(g) } } return this.l = a.join("&") };
    k.clone = function () { var a = new el; a.l = this.l; this.i && (a.i = this.i.clone(), a.j = this.j); return a };
    function rl(a, b) { b = String(b); a.o && (b = b.toLowerCase()); return b }
    function kl(a, b) {
        b && !a.o && (ql(a), a.l = null, a.i.forEach(function (c, d) { var e = d.toLowerCase(); d != e && (this.remove(d), ml(this, e, c)) }, a));
        a.o = b
    }
    k.extend = function (a) { for (var b = 0; b < arguments.length; b++)Yk(arguments[b], function (c, d) { this.add(d, c) }, this) }; function tl(a, b, c, d, e) { if (0 == d) c(!1); else { var f = e || 0; d--; ul(a, b, function (g) { g ? c(!0) : u.setTimeout(function () { tl(a, b, c, d, f) }, f) }) } }
    function ul(a, b, c) {
        var d = new Image; d.onload = function () { try { vl(d), c(!0) } catch (e) { } };
        d.onerror = function () { try { vl(d), c(!1) } catch (e) { } };
        d.onabort = function () { try { vl(d), c(!1) } catch (e) { } };
        d.ontimeout = function () { try { vl(d), c(!1) } catch (e) { } };
        u.setTimeout(function () { if (d.ontimeout) d.ontimeout() }, b);
        hd(d, a)
    }
    function vl(a) { a.onload = null; a.onerror = null; a.onabort = null; a.ontimeout = null }
    ; function wl(a) { lj.call(this); this.headers = new Tj; this.U = a || null; this.j = !1; this.N = this.i = null; this.W = ""; this.B = 0; this.o = ""; this.A = this.X = this.C = this.V = !1; this.M = 0; this.H = null; this.Da = ""; this.ea = this.ia = !1 }
    A(wl, lj); var xl = /^https?$/i, yl = ["POST", "PUT"]; k = wl.prototype;
    k.send = function (a, b, c, d) {
        if (this.i) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.W + "; newUri=" + a); b = b ? b.toUpperCase() : "GET"; this.W = a; this.o = ""; this.B = 0; this.V = !1; this.j = !0; this.i = this.U ? Ck(this.U) : Ck(Ak); this.N = this.U ? this.U.getOptions() : Ak.getOptions(); this.i.onreadystatechange = z(this.Fe, this); try { this.getStatus(), this.X = !0, this.i.open(b, String(a), !0), this.X = !1 } catch (f) { this.getStatus(); zl(this, f); return } a = c || ""; var e = this.headers.clone(); d && Yk(d, function (f, g) {
            e.set(g,
                f)
        });
        d = e.Fa().find(function (f) { return "content-type" == f.toLowerCase() });
        c = u.FormData && a instanceof u.FormData; !mb(yl, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"); e.forEach(function (f, g) { this.i.setRequestHeader(g, f) }, this);
        this.Da && (this.i.responseType = this.Da); "withCredentials" in this.i && this.i.withCredentials !== this.ia && (this.i.withCredentials = this.ia); try { Al(this), 0 < this.M && (this.ea = Bl(this.i), this.getStatus(), this.ea ? (this.i.timeout = this.M, this.i.ontimeout = z(this.kd, this)) : this.H = pj(this.kd, this.M, this)), this.getStatus(), this.C = !0, this.i.send(a), this.C = !1 } catch (f) { this.getStatus(), zl(this, f) }
    };
    function Bl(a) { return pe && Ie(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout }
    k.kd = function () { "undefined" != typeof Ia && this.i && (this.o = "Timed out after " + this.M + "ms, aborting", this.B = 8, this.getStatus(), mj(this, "timeout"), this.abort(8)) };
    function zl(a, b) { a.j = !1; a.i && (a.A = !0, a.i.abort(), a.A = !1); a.o = b; a.B = 5; Cl(a); Dl(a) }
    function Cl(a) { a.V || (a.V = !0, mj(a, "complete"), mj(a, "error")) }
    k.abort = function (a) { this.i && this.j && (this.getStatus(), this.j = !1, this.A = !0, this.i.abort(), this.A = !1, this.B = a || 7, mj(this, "complete"), mj(this, "abort"), Dl(this)) };
    k.O = function () { this.i && (this.j && (this.j = !1, this.A = !0, this.i.abort(), this.A = !1), Dl(this, !0)); wl.T.O.call(this) };
    k.Fe = function () { this.isDisposed() || (this.X || this.C || this.A ? El(this) : this.jh()) };
    k.jh = function () { El(this) };
    function El(a) {
        if (a.j && "undefined" != typeof Ia) if (a.N[1] && 4 == Mk(a) && 2 == a.getStatus()) a.getStatus(); else if (a.C && 4 == Mk(a)) pj(a.Fe, 0, a); else if (mj(a, "readystatechange"), a.isComplete()) {
            a.getStatus(); a.j = !1; try {
                var b = a.getStatus(); a: switch (b) { case 200: case 201: case 202: case 204: case 206: case 304: case 1223: var c = !0; break a; default: c = !1 }var d; if (!(d = c)) {
                    var e; if (e = 0 === b) {
                        var f = Ad(String(a.W))[1] || null; if (!f && u.self && u.self.location) { var g = u.self.location.protocol; f = g.substr(0, g.length - 1) } e = !xl.test(f ? f.toLowerCase() :
                            "")
                    } d = e
                } if (d) mj(a, "complete"), mj(a, "success"); else { a.B = 6; try { var h = 2 < Mk(a) ? a.i.statusText : "" } catch (l) { h = "" } a.o = h + " [" + a.getStatus() + "]"; Cl(a) }
            } finally { Dl(a) }
        }
    }
    function Dl(a, b) { if (a.i) { Al(a); var c = a.i, d = a.N[0] ? Ja : null; a.i = null; a.N = null; b || mj(a, "ready"); try { c.onreadystatechange = d } catch (e) { } } }
    function Al(a) { a.i && a.ea && (a.i.ontimeout = null); a.H && (u.clearTimeout(a.H), a.H = null) }
    k.isActive = function () { return !!this.i };
    k.isComplete = function () { return 4 == Mk(this) };
    function Mk(a) { return a.i ? a.i.readyState : 0 }
    k.getStatus = function () { try { return 2 < Mk(this) ? this.i.status : -1 } catch (a) { return -1 } };
    function Nk(a) { try { return a.i ? a.i.responseText : "" } catch (b) { return "" } }
    k.getLastError = function () { return "string" === typeof this.o ? this.o : String(this.o) }; function Fl(a) { this.i = a; this.j = new nk }
    k = Fl.prototype; k.Hc = null; k.qa = null; k.wc = !1; k.Ye = null; k.cc = null; k.Wc = null; k.Ic = null; k.L = null; k.Ia = -1; k.Ib = null; k.Jb = null; k.connect = function (a) { this.Ic = a; a = Gl(this.i, null, this.Ic); vk(3); this.Ye = Date.now(); var b = this.i.B; null != b ? (this.Ib = b[0], (this.Jb = b[1]) ? (this.L = 1, Hl(this)) : (this.L = 2, Il(this))) : (Lk(a, "MODE", "init"), this.qa = new Dk(this, void 0, void 0, void 0), this.qa.cb = this.Hc, Jk(this.qa, a, !1, null, !0), this.L = 0) };
    function Hl(a) { var b = Gl(a.i, a.Jb, "/mail/images/cleardot.gif"); Hk(b); tl(b.toString(), 5E3, z(a.Ff, a), 3, 2E3); a.za(1) }
    k.Ff = function (a) { if (a) this.L = 2, Il(this); else { vk(4); var b = this.i; b.Ca = b.Ra.Ia; Jl(b, 9) } a && this.za(2) };
    function Il(a) { var b = a.i.K; if (null != b) vk(5), b ? (vk(11), Kl(a.i, a, !1)) : (vk(12), Kl(a.i, a, !0)); else if (a.qa = new Dk(a, void 0, void 0, void 0), a.qa.cb = a.Hc, b = a.i, b = Gl(b, b.Qb() ? a.Ib : null, a.Ic), vk(5), !pe || Je(10)) Lk(b, "TYPE", "xmlhttp"), Jk(a.qa, b, !1, a.Ib, !1); else { Lk(b, "TYPE", "html"); var c = a.qa; a = !!a.Ib; c.Cb = 3; c.Oa = Hk(b.clone()); Tk(c, a) } }
    k.Pc = function (a) { return this.i.Pc(a) };
    k.abort = function () { this.qa && (this.qa.cancel(), this.qa = null); this.Ia = -1 };
    k.ke = function () { return !1 };
    k.Ge = function (a, b) { this.Ia = a.Hb; if (0 == this.L) if (b) { try { var c = this.j.parse(b) } catch (d) { a = this.i; a.Ca = this.Ia; Jl(a, 2); return } this.Ib = c[0]; this.Jb = c[1] } else a = this.i, a.Ca = this.Ia, Jl(a, 2); else if (2 == this.L) if (this.wc) vk(7), this.Wc = Date.now(); else if ("11111" == b) { if (vk(6), this.wc = !0, this.cc = Date.now(), a = this.cc - this.Ye, !pe || Je(10) || 500 > a) this.Ia = 200, this.qa.cancel(), vk(12), Kl(this.i, this, !0) } else vk(8), this.cc = this.Wc = Date.now(), this.wc = !1 };
    k.nc = function () { this.Ia = this.qa.Hb; if (this.qa.Ma) 0 == this.L ? this.Jb ? (this.L = 1, Hl(this)) : (this.L = 2, Il(this)) : 2 == this.L && ((!pe || Je(10) ? !this.wc : 200 > this.Wc - this.cc) ? (vk(11), Kl(this.i, this, !1)) : (vk(12), Kl(this.i, this, !0))); else { 0 == this.L ? vk(9) : 2 == this.L && vk(10); var a = this.i; this.qa.getLastError(); a.Ca = this.Ia; Jl(a, 2) } };
    k.Qb = function () { return this.i.Qb() };
    k.isActive = function () { return this.i.isActive() };
    k.za = function (a) { this.i.za(a) }; function Ll(a, b, c) { this.L = 1; this.i = []; this.l = []; this.o = new nk; this.B = a || null; this.K = null != b ? b : null; this.A = c || !1 }
    function Ml(a, b) { this.j = a; this.i = b; this.context = null }
    k = Ll.prototype; k.Ba = null; k.Kb = null; k.na = null; k.aa = null; k.Jc = null; k.ec = null; k.Id = null; k.Sb = null; k.Nb = 0; k.Jg = 0; k.fa = null; k.Ta = null; k.Ja = null; k.hb = null; k.Ra = null; k.Dc = null; k.xb = -1; k.oe = -1; k.Ca = -1; k.ub = 0; k.qb = 0; k.gb = 8; function Nl(a, b) { Li.call(this, "timingevent", a); this.size = b }
    A(Nl, Li); function Ol(a) { Li.call(this, "serverreachability", a) }
    A(Ol, Li); k = Ll.prototype; k.connect = function (a, b, c, d, e) { vk(0); this.Jc = b; this.Kb = c || {}; d && void 0 !== e && (this.Kb.OSID = d, this.Kb.OAID = e); this.A ? (uk(z(this.Vd, this, a), 100), Pl(this)) : this.Vd(a) };
    function Ql(a) { Rl(a); if (3 == a.L) { var b = a.Nb++, c = a.ec.clone(); Uk(c, "SID", a.j); Uk(c, "RID", b); Uk(c, "TYPE", "terminate"); Sl(a, c); b = new Dk(a, a.j, b, void 0); b.Cb = 2; b.Oa = Hk(c.clone()); hd(new Image, b.Oa.toString()); b.Bb = Date.now(); Kk(b) } Tl(a) }
    k.Vd = function (a) { this.Ra = new Fl(this); this.Ra.Hc = this.Ba; this.Ra.j = this.o; this.Ra.connect(a) };
    function Pl(a) { a.Of(1, 0); a.ec = Gl(a, null, a.Jc); Ul(a) }
    function Rl(a) { a.Ra && (a.Ra.abort(), a.Ra = null); a.aa && (a.aa.cancel(), a.aa = null); a.Ja && (u.clearTimeout(a.Ja), a.Ja = null); Vl(a); a.na && (a.na.cancel(), a.na = null); a.Ta && (u.clearTimeout(a.Ta), a.Ta = null) }
    function Wl(a, b) { if (0 == a.L) throw Error("Invalid operation: sending map when state is closed"); a.i.push(new Ml(a.Jg++, b)); 2 != a.L && 3 != a.L || Ul(a) }
    k.ke = function () { return 0 == this.L };
    k.getState = function () { return this.L };
    function Xl(a) { var b = 0; a.aa && b++; a.na && b++; return b }
    function Ul(a) { a.na || a.Ta || (a.Ta = uk(z(a.Ke, a), 0), a.ub = 0) }
    k.Ke = function (a) { this.Ta = null; Yl(this, a) };
    function Yl(a, b) { if (1 == a.L) { if (!b) { a.Nb = Math.floor(1E5 * Math.random()); b = a.Nb++; var c = new Dk(a, "", b, void 0); c.cb = a.Ba; var d = Zl(a), e = a.ec.clone(); Uk(e, "RID", b); Uk(e, "CVER", "1"); Sl(a, e); Gk(c, e, d); a.na = c; a.L = 2 } } else 3 == a.L && (b ? $l(a, b) : 0 == a.i.length || a.na || $l(a)) }
    function $l(a, b) { if (b) if (6 < a.gb) { a.i = a.l.concat(a.i); a.l.length = 0; var c = a.Nb - 1; b = Zl(a) } else c = b.K, b = b.jb; else c = a.Nb++, b = Zl(a); var d = a.ec.clone(); Uk(d, "SID", a.j); Uk(d, "RID", c); Uk(d, "AID", a.xb); Sl(a, d); c = new Dk(a, a.j, c, a.ub + 1); c.cb = a.Ba; c.setTimeout(1E4 + Math.round(1E4 * Math.random())); a.na = c; Gk(c, d, b) }
    function Sl(a, b) { a.fa && (a = a.fa.Zd()) && Ab(a, function (c, d) { Uk(b, d, c) }) }
    function Zl(a) {
        var b = Math.min(a.i.length, 1E3), c = ["count=" + b]; if (6 < a.gb && 0 < b) { var d = a.i[0].j; c.push("ofs=" + d) } else d = 0; for (var e = {}, f = 0; f < b; e = { mb: e.mb }, f++) { e.mb = a.i[f].j; var g = a.i[f].i; e.mb = 6 >= a.gb ? f : e.mb - d; try { Ab(g, function (h) { return function (l, m) { c.push("req" + h.mb + "_" + m + "=" + encodeURIComponent(l)) } }(e)) } catch (h) { c.push("req" + e.mb + "_type=" + encodeURIComponent("_badmap")) } } a.l = a.l.concat(a.i.splice(0, b));
        return c.join("&")
    }
    function am(a) { a.aa || a.Ja || (a.G = 1, a.Ja = uk(z(a.Je, a), 0), a.qb = 0) }
    function bm(a) { if (a.aa || a.Ja || 3 <= a.qb) return !1; a.G++; a.Ja = uk(z(a.Je, a), cm(a, a.qb)); a.qb++; return !0 }
    k.Je = function () { this.Ja = null; this.aa = new Dk(this, this.j, "rpc", this.G); this.aa.cb = this.Ba; this.aa.Gc = 0; var a = this.Id.clone(); Uk(a, "RID", "rpc"); Uk(a, "SID", this.j); Uk(a, "CI", this.Dc ? "0" : "1"); Uk(a, "AID", this.xb); Sl(this, a); if (!pe || Je(10)) Uk(a, "TYPE", "xmlhttp"), Jk(this.aa, a, !0, this.Sb, !1); else { Uk(a, "TYPE", "html"); var b = this.aa, c = !!this.Sb; b.Cb = 3; b.Oa = Hk(a.clone()); Tk(b, c) } };
    function Kl(a, b, c) { a.Dc = c; a.Ca = b.Ia; a.A || Pl(a) }
    k.Ge = function (a, b) {
        if (0 != this.L && (this.aa == a || this.na == a)) if (this.Ca = a.Hb, this.na == a && 3 == this.L) if (7 < this.gb) { try { var c = this.o.parse(b) } catch (d) { c = null } if (Array.isArray(c) && 3 == c.length) if (a = c, 0 == a[0]) a: { if (!this.Ja) { if (this.aa) if (this.aa.Bb + 3E3 < this.na.Bb) Vl(this), this.aa.cancel(), this.aa = null; else break a; bm(this); vk(19) } } else this.oe = a[1], 0 < this.oe - this.xb && 37500 > a[2] && this.Dc && 0 == this.qb && !this.hb && (this.hb = uk(z(this.Mg, this), 6E3)); else Jl(this, 11) } else null != b && Jl(this, 11); else if (this.aa == a &&
            Vl(this), !/^[\s\xa0]*$/.test(b)) for (a = this.o.parse(b), Array.isArray(a), b = 0; b < a.length; b++)c = a[b], this.xb = c[0], c = c[1], 2 == this.L ? "c" == c[0] ? (this.j = c[1], this.Sb = c[2], c = c[3], null != c ? this.gb = c : this.gb = 6, this.L = 3, this.fa && this.fa.Od(), this.Id = Gl(this, this.Qb() ? this.Sb : null, this.Jc), am(this)) : "stop" == c[0] && Jl(this, 7) : 3 == this.L && ("stop" == c[0] ? Jl(this, 7) : "noop" != c[0] && this.fa && this.fa.Nd(c), this.qb = 0)
    };
    k.Mg = function () { null != this.hb && (this.hb = null, this.aa.cancel(), this.aa = null, bm(this), vk(20)) };
    function Vl(a) { null != a.hb && (u.clearTimeout(a.hb), a.hb = null) }
    k.nc = function (a) {
        if (this.aa == a) { Vl(this); this.aa = null; var b = 2 } else if (this.na == a) this.na = null, b = 1; else return; this.Ca = a.Hb; if (0 != this.L) if (a.Ma) 1 == b ? (b = wk, mj(b, new Nl(b, a.jb ? a.jb.length : 0, Date.now() - a.Bb, this.ub)), Ul(this), this.l.length = 0) : am(this); else {
            var c = a.getLastError(), d; if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Ca)) { if (d = 1 == b) this.na || this.Ta || 1 == this.L || 2 <= this.ub ? d = !1 : (this.Ta = uk(z(this.Ke, this, a), cm(this, this.ub)), this.ub++, d = !0); d = !(d || 2 == b && bm(this)) } if (d) switch (c) {
                case 1: Jl(this, 5); break; case 4: Jl(this,
                    10); break; case 3: Jl(this, 6); break; case 7: Jl(this, 12); break; default: Jl(this, 2)
            }
        }
    };
    function cm(a, b) { var c = 5E3 + Math.floor(1E4 * Math.random()); a.isActive() || (c *= 2); return c * b }
    k.Of = function (a) { if (!mb(arguments, this.L)) throw Error("Unexpected channel state: " + this.L); };
    function Jl(a, b) { if (2 == b || 9 == b) { var c = null; a.fa && (c = null); var d = z(a.Oh, a); c || (c = new Zk("//www.google.com/images/cleardot.gif"), Hk(c)); ul(c.toString(), 1E4, d) } else vk(2); dm(a, b) }
    k.Oh = function (a) { a ? vk(2) : (vk(1), dm(this, 8)) };
    function dm(a, b) { a.L = 0; a.fa && a.fa.Md(b); Tl(a); Rl(a) }
    function Tl(a) { a.L = 0; a.Ca = -1; if (a.fa) if (0 == a.l.length && 0 == a.i.length) a.fa.Mc(); else { sb(a.l); var b = sb(a.i); a.l.length = 0; a.i.length = 0; a.fa.Mc(b) } }
    function Gl(a, b, c) {
        var d = nl(c); if ("" != d.j) b && al(d, b + "." + d.j), bl(d, d.B); else { var e = window.location; d = ol(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c) } a.Kb && Ab(a.Kb, function (f, g) { Uk(d, g, f) });
        Uk(d, "VER", a.gb); Sl(a, d); return d
    }
    k.Pc = function (a) { if (a) throw Error("Can't create secondary domain capable XhrIo object."); a = new wl; a.ia = !1; return a };
    k.isActive = function () { return !!this.fa && this.fa.isActive(this) };
    k.za = function (a) { var b = wk; mj(b, new Ol(b, a)) };
    k.Qb = function () { return !(!pe || Je(10)) };
    function em() { }
    k = em.prototype; k.Od = function () { };
    k.Nd = function () { };
    k.Md = function () { };
    k.Mc = function () { };
    k.Zd = function () { return {} };
    k.isActive = function () { return !0 }; var fm = function () { if (ve) { var a = /Windows NT ([0-9.]+)/; return (a = a.exec(Jc)) ? a[1] : "0" } return ue ? (a = /1[0|1][_.][0-9_.]+/, (a = a.exec(Jc)) ? a[0].replace(/_/g, ".") : "10") : we ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(Jc)) ? a[1] : "") : xe || ye || ze ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(Jc)) ? a[1].replace(/_/g, ".") : "") : "" }(); function gm(a) { return (a = a.exec(Jc)) ? a[1] : "" }
    var hm = function () { if (Ne) return gm(/Firefox\/([0-9.]+)/); if (pe || qe || oe) return Ge; if (Re) { if (ke() || D("Macintosh")) { var a = gm(/CriOS\/([0-9.]+)/); if (a) return a } return gm(/Chrome\/([0-9.]+)/) } if (Se && !ke()) return gm(/Version\/([0-9.]+)/); if (Oe || Pe) { if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Jc)) return a[1] + "." + a[2] } else if (Qe) return (a = gm(/Android\s+([0-9.]+)/)) ? a : gm(/Version\/([0-9.]+)/); return "" }();
    function im(a) { return 0 <= nc(hm, a) }
    ; function jm(a, b, c, d, e, f, g) {
        var h; if (h = c.offsetParent) { var l = "HTML" == h.tagName || "BODY" == h.tagName; if (!l || "static" != mg(h, "position")) { var m = qg(h); if (!l) { l = yg(h); var n; if (n = l) { n = Se && im(10); var t; if (t = Ae) t = 0 <= nc(fm, 10); var w = Re && im(85); n = se || n || t || w } l = n ? -h.scrollLeft : l && !re && "visible" != mg(h, "overflowX") ? h.scrollWidth - h.clientWidth - h.scrollLeft : h.scrollLeft; m = df(m, new cf(l, h.scrollTop)) } } } h = m || new cf; m = xg(a); if (l = pg(a)) w = new dg(l.left, l.top, l.right - l.left, l.bottom - l.top), l = Math.max(m.left, w.left), n = Math.min(m.left +
            m.width, w.left + w.width), l <= n && (t = Math.max(m.top, w.top), w = Math.min(m.top + m.height, w.top + w.height), t <= w && (m.left = l, m.top = t, m.width = n - l, m.height = w - t)); l = ff(a); t = ff(c); if (l.i != t.i) { n = l.i.body; t = uf(t.i); w = new cf(0, 0); var v = (v = hf(n)) ? uf(v) : window; if (me(v, "parent")) { var C = n; do { var O = v == t ? qg(C) : sg(C); w.x += O.x; w.y += O.y } while (v && v != t && v != v.parent && (C = v.frameElement) && (v = v.parent)) } n = df(w, qg(n)); !pe || Je(9) || rf(l.i) || (n = df(n, sf(l.i))); m.left += n.x; m.top += n.y } a = km(a, b); b = m.left; a & 4 ? b += m.width : a & 2 && (b += m.width /
                2); b = new cf(b, m.top + (a & 1 ? m.height : 0)); b = df(b, h); e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y); var H; g && (H = pg(c)) && (H.top -= h.y, H.right -= h.x, H.bottom -= h.y, H.left -= h.x); return lm(b, c, d, f, H, g, void 0)
    }
    function lm(a, b, c, d, e, f, g) {
        a = a.clone(); var h = km(b, c); c = vg(b); g = g ? g.clone() : c.clone(); a = a.clone(); g = g.clone(); var l = 0; if (d || 0 != h) h & 4 ? a.x -= g.width + (d ? d.right : 0) : h & 2 ? a.x -= g.width / 2 : d && (a.x += d.left), h & 1 ? a.y -= g.height + (d ? d.bottom : 0) : d && (a.y += d.top); if (f) {
            if (e) {
                d = a; h = g; l = 0; 65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2); 132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5); d.x < e.left && f & 1 && (d.x = e.left, l |= 1); if (f & 16) {
                    var m = d.x; d.x < e.left && (d.x = e.left, l |= 4); d.x + h.width > e.right && (h.width = Math.min(e.right - d.x,
                        m + h.width - e.left), h.width = Math.max(h.width, 0), l |= 4)
                } d.x + h.width > e.right && f & 1 && (d.x = Math.max(e.right - h.width, e.left), l |= 1); f & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + h.width > e.right ? 32 : 0)); d.y < e.top && f & 4 && (d.y = e.top, l |= 2); f & 32 && (m = d.y, d.y < e.top && (d.y = e.top, l |= 8), d.y + h.height > e.bottom && (h.height = Math.min(e.bottom - d.y, m + h.height - e.top), h.height = Math.max(h.height, 0), l |= 8)); d.y + h.height > e.bottom && f & 4 && (d.y = Math.max(e.bottom - h.height, e.top), l |= 2); f & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + h.height > e.bottom ? 128 : 0)); e = l
            } else e =
                256; l = e
        } f = new dg(0, 0, 0, 0); f.left = a.x; f.top = a.y; f.width = g.width; f.height = g.height; e = l; if (e & 496) return e; a = new cf(f.left, f.top); a instanceof cf ? (g = a.x, a = a.y) : (g = a, a = void 0); b.style.left = ug(g, !1); b.style.top = ug(a, !1); g = new ef(f.width, f.height); c == g || c && g && c.width == g.width && c.height == g.height || (c = g, a = rf(ff(hf(b)).i), !pe || Ie("10") || a ? (b = b.style, se ? b.MozBoxSizing = "border-box" : te ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(c.width, 0) + "px", b.height = Math.max(c.height, 0) + "px") :
            (g = b.style, a ? (pe ? (a = Ag(b, "paddingLeft"), f = Ag(b, "paddingRight"), d = Ag(b, "paddingTop"), h = Ag(b, "paddingBottom"), a = new ag(d, f, h, a)) : (a = lg(b, "paddingLeft"), f = lg(b, "paddingRight"), d = lg(b, "paddingTop"), h = lg(b, "paddingBottom"), a = new ag(parseFloat(d), parseFloat(f), parseFloat(h), parseFloat(a))), pe && !Je(9) ? (f = Cg(b, "borderLeft"), d = Cg(b, "borderRight"), h = Cg(b, "borderTop"), b = Cg(b, "borderBottom"), b = new ag(h, d, b, f)) : (f = lg(b, "borderLeftWidth"), d = lg(b, "borderRightWidth"), h = lg(b, "borderTopWidth"), b = lg(b, "borderBottomWidth"),
                b = new ag(parseFloat(h), parseFloat(d), parseFloat(b), parseFloat(f))), g.pixelWidth = c.width - b.left - a.left - a.right - b.right, g.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (g.pixelWidth = c.width, g.pixelHeight = c.height))); return e
    }
    function km(a, b) { return (b & 8 && yg(a) ? b ^ 4 : b) & -9 }
    ; function mm(a) { Ji.call(this); this.A = 1; this.l = []; this.o = 0; this.i = []; this.j = {}; this.B = !!a }
    A(mm, Ji); k = mm.prototype; k.subscribe = function (a, b, c) { var d = this.j[a]; d || (d = this.j[a] = []); var e = this.A; this.i[e] = a; this.i[e + 1] = b; this.i[e + 2] = c; this.A = e + 3; d.push(e); return e };
    function nm(a, b) { var c = !1, d = a.subscribe("ROOT_MENU_REMOVED", function (e) { c || (c = !0, this.wa(d), b.apply(void 0, arguments)) }, a) }
    function om(a, b, c, d) { if (b = a.j[b]) { var e = a.i; (b = b.find(function (f) { return e[f + 1] == c && e[f + 2] == d })) && a.wa(b) } }
    k.wa = function (a) { var b = this.i[a]; if (b) { var c = this.j[b]; 0 != this.o ? (this.l.push(a), this.i[a + 1] = Ja) : (c && ob(c, a), delete this.i[a], delete this.i[a + 1], delete this.i[a + 2]) } return !!b };
    k.ha = function (a, b) { var c = this.j[a]; if (c) { for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++)d[e - 1] = arguments[e]; if (this.B) for (e = 0; e < c.length; e++) { var g = c[e]; pm(this.i[g + 1], this.i[g + 2], d) } else { this.o++; try { for (e = 0, f = c.length; e < f && !this.isDisposed(); e++)g = c[e], this.i[g + 1].apply(this.i[g + 2], d) } finally { if (this.o--, 0 < this.l.length && 0 == this.o) for (; c = this.l.pop();)this.wa(c) } } return 0 != e } return !1 };
    function pm(a, b, c) { Qg(function () { a.apply(b, c) }) }
    k.clear = function (a) { if (a) { var b = this.j[a]; b && (b.forEach(this.wa, this), delete this.j[a]) } else this.i.length = 0, this.j = {} };
    function qm(a, b) { if (b) return (a = a.j[b]) ? a.length : 0; b = 0; for (var c in a.j) b += qm(a, c); return b }
    k.O = function () { mm.T.O.call(this); this.clear(); this.l.length = 0 }; function rm(a) { if (a.da && a.hasOwnProperty("da")) return a.da; var b = new a; return a.da = b }
    ; function sm(a) { this.i = a }
    sm.prototype.set = function (a, b) { void 0 === b ? this.i.remove(a) : this.i.set(a, gk(b)) };
    sm.prototype.get = function (a) { try { var b = this.i.get(a) } catch (c) { return } if (null !== b) try { return JSON.parse(b) } catch (c) { throw "Storage: Invalid value was encountered"; } };
    sm.prototype.remove = function (a) { this.i.remove(a) }; function tm(a) { this.i = a }
    A(tm, sm); function um(a) { this.data = a }
    function vm(a) { return void 0 === a || a instanceof um ? a : new um(a) }
    tm.prototype.set = function (a, b) { tm.T.set.call(this, a, vm(b)) };
    tm.prototype.j = function (a) { a = tm.T.get.call(this, a); if (void 0 === a || a instanceof Object) return a; throw "Storage: Invalid value was encountered"; };
    tm.prototype.get = function (a) { if (a = this.j(a)) { if (a = a.data, void 0 === a) throw "Storage: Invalid value was encountered"; } else a = void 0; return a }; function wm(a) { this.i = a }
    A(wm, tm); function xm(a) { var b = a.creation; a = a.expiration; return !!a && a < Va() || !!b && b > Va() }
    wm.prototype.set = function (a, b, c) { if (b = vm(b)) { if (c) { if (c < Va()) { wm.prototype.remove.call(this, a); return } b.expiration = c } b.creation = Va() } wm.T.set.call(this, a, b) };
    wm.prototype.j = function (a, b) { var c = wm.T.j.call(this, a); if (c) if (!b && xm(c)) wm.prototype.remove.call(this, a); else return c }; function ym(a) { this.i = a }
    A(ym, wm); function zm(a, b) {
        var c = []; Nj(b, function (d) { try { var e = ym.prototype.j.call(this, d, !0) } catch (f) { if ("Storage: Invalid value was encountered" == f) return; throw f; } void 0 === e ? c.push(d) : xm(e) && c.push(d) }, a);
        return c
    }
    function Am(a, b) { zm(a, b).forEach(function (c) { ym.prototype.remove.call(this, c) }, a) }
    ; function Bm() { }
    ; function Cm() { }
    A(Cm, Bm); Cm.prototype[Symbol.iterator] = function () { return Oj(this.ma(!0)).j() };
    Cm.prototype.clear = function () { var a = Array.from(this); a = p(a); for (var b = a.next(); !b.done; b = a.next())this.remove(b.value) }; function Dm(a) { this.i = a }
    A(Dm, Cm); k = Dm.prototype; k.isAvailable = function () { if (!this.i) return !1; try { return this.i.setItem("__sak", "1"), this.i.removeItem("__sak"), !0 } catch (a) { return !1 } };
    k.set = function (a, b) { try { this.i.setItem(a, b) } catch (c) { if (0 == this.i.length) throw "Storage mechanism: Storage disabled"; throw "Storage mechanism: Quota exceeded"; } };
    k.get = function (a) { a = this.i.getItem(a); if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered"; return a };
    k.remove = function (a) { this.i.removeItem(a) };
    k.ma = function (a) {
        var b = 0, c = this.i, d = new Lj; d.i = function () { if (b >= c.length) throw Kj; var e = c.key(b++); if (a) return e; e = c.getItem(e); if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered"; return e };
        d.next = d.i.bind(d); return d
    };
    k.clear = function () { this.i.clear() };
    k.key = function (a) { return this.i.key(a) }; function Em() { var a = null; try { a = window.localStorage || null } catch (b) { } this.i = a }
    A(Em, Dm); function Fm() { var a = null; try { a = window.sessionStorage || null } catch (b) { } this.i = a }
    A(Fm, Dm); function Gm(a, b) { this.j = a; this.i = null; if (pe && !Je(9)) { Hm || (Hm = new Tj); this.i = Hm.get(a); this.i || (b ? this.i = document.getElementById(b) : (this.i = document.createElement("userdata"), this.i.addBehavior("#default#userData"), document.body.appendChild(this.i)), Hm.set(a, this.i)); try { this.i.load(this.j) } catch (c) { this.i = null } } }
    A(Gm, Cm); var Im = { ".": ".2E", "!": ".21", "~": ".7E", "*": ".2A", "'": ".27", "(": ".28", ")": ".29", "%": "." }, Hm = null; function Jm(a) { return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function (b) { return Im[b] }) }
    k = Gm.prototype; k.isAvailable = function () { return !!this.i };
    k.set = function (a, b) { this.i.setAttribute(Jm(a), b); Km(this) };
    k.get = function (a) { a = this.i.getAttribute(Jm(a)); if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered"; return a };
    k.remove = function (a) { this.i.removeAttribute(Jm(a)); Km(this) };
    k.ma = function (a) {
        var b = 0, c = this.i.XMLDocument.documentElement.attributes, d = new Lj; d.i = function () { if (b >= c.length) throw Kj; var e = c[b++]; if (a) return decodeURIComponent(e.nodeName.replace(/\./g, "%")).substr(1); e = e.nodeValue; if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered"; return e };
        d.next = d.i.bind(d); return d
    };
    k.clear = function () { for (var a = this.i.XMLDocument.documentElement, b = a.attributes.length; 0 < b; b--)a.removeAttribute(a.attributes[b - 1].nodeName); Km(this) };
    function Km(a) { try { a.i.save(a.j) } catch (b) { throw "Storage mechanism: Quota exceeded"; } }
    ; function Lm(a, b) { this.j = a; this.i = b + "::" }
    A(Lm, Cm); Lm.prototype.set = function (a, b) { this.j.set(this.i + a, b) };
    Lm.prototype.get = function (a) { return this.j.get(this.i + a) };
    Lm.prototype.remove = function (a) { this.j.remove(this.i + a) };
    Lm.prototype.ma = function (a) {
        var b = this.j.ma(!0), c = this, d = new Lj; d.i = function () { for (var e = b.i(); e.substr(0, c.i.length) != c.i;)e = b.i(); return a ? e.substr(c.i.length) : c.j.get(e) };
        d.next = d.i.bind(d); return d
    }; function Mm(a) { var b = new Em; return b.isAvailable() ? a ? new Lm(b, a) : b : null }
    ; function Nm() { this.i = []; this.j = [] }
    Nm.prototype.isEmpty = function () { return 0 === this.i.length && 0 === this.j.length };
    Nm.prototype.clear = function () { this.i = []; this.j = [] };
    Nm.prototype.remove = function (a) { var b = this.i; var c = db(b, a); 0 <= c ? (pb(b, c), b = !0) : b = !1; return b || ob(this.j, a) };
    Nm.prototype.va = function () { for (var a = [], b = this.i.length - 1; 0 <= b; --b)a.push(this.i[b]); var c = this.j.length; for (b = 0; b < c; ++b)a.push(this.j[b]); return a }; function Om() { }
    Ka(Om); Om.prototype.i = 0; function Pm(a) { lj.call(this); this.M = a || ff(); this.ea = null; this.wb = !1; this.A = null; this.C = void 0; this.X = this.La = null; this.Vb = !1 }
    A(Pm, lj); k = Pm.prototype; k.pg = Om.getInstance(); k.getId = function () { return this.ea || (this.ea = ":" + (this.pg.i++).toString(36)) };
    k.Rc = function () { return this.A };
    function Qm(a, b) { return a.A ? F(b, a.A || a.M.i) : null }
    function Rm(a, b) { if (a.wb) throw Error("Component already rendered"); if (b) { a.Vb = !0; var c = hf(b); a.M && a.M.i == c || (a.M = ff(b)); a.A = b; a.tb() } else throw Error("Invalid element to decorate"); }
    k.tb = function () { this.wb = !0; Sm(this, function (a) { !a.wb && a.Rc() && a.tb() }) };
    k.Sa = function () {
        Sm(this, function (a) { a.wb && a.Sa() });
        this.C && bk(this.C); this.wb = !1
    };
    k.O = function () {
        this.wb && this.Sa(); this.C && (this.C.dispose(), delete this.C); Sm(this, function (a) { a.dispose() });
        !this.Vb && this.A && Cf(this.A); this.La = this.A = this.X = null; Pm.T.O.call(this)
    };
    function Sm(a, b) { a.X && a.X.forEach(b, void 0) }
    ; function Tm(a, b, c) {
        a.timeOfStartCall = (new Date).getTime(); var d = c || u, e = d.document, f = a.nonce || jd("script[nonce]", d); f && !a.nonce && (a.nonce = f); if ("help" == a.flow) { var g = y("document.location.href", d); !a.helpCenterContext && g && (a.helpCenterContext = g.substring(0, 1200)); g = !0; if (b && JSON && JSON.stringify) { var h = JSON.stringify(b); (g = 1200 >= h.length) && (a.psdJson = h) } g || (b = { invalidPsd: !0 }) } b = [a, b, c]; d.GOOGLE_FEEDBACK_START_ARGUMENTS = b; c = a.serverUri || "//www.google.com/tools/feedback"; if (g = d.GOOGLE_FEEDBACK_START) g.apply(d,
            b); else { d = c + "/load.js?"; for (var l in a) b = a[l], null == b || Na(b) || (d += encodeURIComponent(l) + "=" + encodeURIComponent(b) + "&"); a = ff(e).createElement("SCRIPT"); f && a.setAttribute("nonce", f); Sd(a, Vd(d)); e.body.appendChild(a) }
    }
    x("userfeedback.api.startFeedback", Tm, void 0); x("userfeedback.api.isBrowserSupportedForGenie", function () { return Um() }, void 0);
    function Um() { return pe ? im("8") : Ne ? im("15") : Se ? im("5") : Re || qe }
    x("userfeedback.api.isBrowserSupportedForHelp", Um, void 0); function Vm(a, b) { 1 < b.length ? a[b[0]] = b[1] : 1 === b.length && Object.assign(a, b[0]) }
    ; var Wm, Xm, Ym = u.window, Zm = (null === (Wm = null === Ym || void 0 === Ym ? void 0 : Ym.yt) || void 0 === Wm ? void 0 : Wm.config_) || (null === (Xm = null === Ym || void 0 === Ym ? void 0 : Ym.ytcfg) || void 0 === Xm ? void 0 : Xm.data_) || {}; x("yt.config_", Zm, void 0); function $m(a) { for (var b = 0; b < arguments.length; ++b); Vm(Zm, arguments) }
    function J(a, b) { return a in Zm ? Zm[a] : b }
    ; function an(a, b, c) { a && (a.dataset ? a.dataset[bn(b)] = String(c) : a.setAttribute("data-" + b, c)) }
    function K(a, b) { return a ? a.dataset ? a.dataset[bn(b)] : a.getAttribute("data-" + b) : null }
    function cn(a, b) { a && (a.dataset ? delete a.dataset[bn(b)] : a.removeAttribute("data-" + b)) }
    var dn = {}; function bn(a) { return dn[a] || (dn[a] = String(a).replace(/\-([a-z])/g, function (b, c) { return c.toUpperCase() })) }
    ; var en = { stopImmediatePropagation: 1, stopPropagation: 1, preventMouseEvent: 1, preventManipulation: 1, preventDefault: 1, layerX: 1, layerY: 1, screenX: 1, screenY: 1, scale: 1, rotation: 1, webkitMovementX: 1, webkitMovementY: 1 };
    function fn(a) {
        this.type = ""; this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null; this.charCode = this.keyCode = 0; this.metaKey = this.shiftKey = this.ctrlKey = this.altKey = !1; this.rotation = this.clientY = this.clientX = 0; this.changedTouches = this.touches = null; try {
            if (a = a || window.event) {
                this.event = a; for (var b in a) b in en || (this[b] = a[b]); this.rotation = a.rotation; var c = a.target || a.srcElement; c && 3 == c.nodeType && (c = c.parentNode); this.target = c; var d = a.relatedTarget; if (d) try {
                    d = d.nodeName ?
                        d : null
                } catch (e) { d = null } else "mouseover" == this.type ? d = a.fromElement : "mouseout" == this.type && (d = a.toElement); this.relatedTarget = d; this.clientX = void 0 != a.clientX ? a.clientX : a.pageX; this.clientY = void 0 != a.clientY ? a.clientY : a.pageY; this.keyCode = a.keyCode ? a.keyCode : a.which; this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0); this.altKey = a.altKey; this.ctrlKey = a.ctrlKey; this.shiftKey = a.shiftKey; this.metaKey = a.metaKey; this.i = a.pageX; this.j = a.pageY
            }
        } catch (e) { }
    }
    function gn(a) { if (document.body && document.documentElement) { var b = document.body.scrollTop + document.documentElement.scrollTop; a.i = a.clientX + (document.body.scrollLeft + document.documentElement.scrollLeft); a.j = a.clientY + b } }
    fn.prototype.preventDefault = function () { this.event && (this.event.returnValue = !1, this.event.preventDefault && this.event.preventDefault()) };
    fn.prototype.stopPropagation = function () { this.event && (this.event.cancelBubble = !0, this.event.stopPropagation && this.event.stopPropagation()) };
    fn.prototype.stopImmediatePropagation = function () { this.event && (this.event.cancelBubble = !0, this.event.stopImmediatePropagation && this.event.stopImmediatePropagation()) }; var hn = 0; function jn(a) { var b = a.__yt_uid_key; b || (b = kn(), a.__yt_uid_key = b); return b }
    function ln(a) {
        var b = a.cloneNode(!1); "TR" == b.tagName || "SELECT" == b.tagName ? B(a.childNodes, function (c) { b.appendChild(ln(c)) }) : Ef(b, a);
        return b
    }
    function mn(a, b) { a = E(a); b = E(b); return !!Vf(a, function (c) { return c === b }, !0, void 0) }
    function nn(a, b) { a = kf(a, null, b); return a.length ? a[0] : null }
    function on() {
        var a = document, b; hb(["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"], function (c) { b = a[c]; return !!b });
        return b
    }
    function pn() { Fj(document.body, "hide-players", !1); B(mf("preserve-players"), function (a) { Dj(a, "preserve-players") }) }
    var kn = y("ytDomDomGetNextId") || function () { return ++hn };
    x("ytDomDomGetNextId", kn, void 0); var qn = []; function rn(a) { qn.forEach(function (b) { return b(a) }) }
    function sn(a) { return a && window.yterr ? function () { try { return a.apply(this, arguments) } catch (b) { tn(b) } } : a }
    function tn(a) { var b = y("yt.logging.errors.log"); b ? b(a, "ERROR", void 0, void 0, void 0) : (b = J("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0]), $m("ERRORS", b)); rn(a) }
    function un(a) { var b = y("yt.logging.errors.log"); b ? b(a, "WARNING", void 0, void 0, void 0) : (b = J("ERRORS", []), b.push([a, "WARNING", void 0, void 0, void 0]), $m("ERRORS", b)) }
    ; var vn = u.ytEventsEventsListeners || {}; x("ytEventsEventsListeners", vn, void 0); var wn = u.ytEventsEventsCounter || { count: 0 }; x("ytEventsEventsCounter", wn, void 0);
    function xn(a, b, c, d) { d = void 0 === d ? {} : d; a.addEventListener && ("mouseenter" != b || "onmouseenter" in document ? "mouseleave" != b || "onmouseenter" in document ? "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll") : b = "mouseout" : b = "mouseover"); return Gb(vn, function (e) { var f = "boolean" === typeof e[4] && e[4] == !!d, g = Na(e[4]) && Na(d) && Jb(e[4], d); return !!e.length && e[0] == a && e[1] == b && e[2] == c && (f || g) }) }
    function L(a, b, c, d) {
        d = void 0 === d ? {} : d; if (!a || !a.addEventListener && !a.attachEvent) return ""; var e = xn(a, b, c, d); if (e) return e; e = ++wn.count + ""; var f = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document); var g = f ? function (h) { h = new fn(h); if (!Vf(h.relatedTarget, function (l) { return l == a }, !0)) return h.currentTarget = a, h.type = b, c.call(a, h) } : function (h) {
            h = new fn(h);
            h.currentTarget = a; return c.call(a, h)
        };
        g = sn(g); a.addEventListener ? ("mouseenter" == b && f ? b = "mouseover" : "mouseleave" == b && f ? b = "mouseout" : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll"), yn() || "boolean" === typeof d ? a.addEventListener(b, g, d) : a.addEventListener(b, g, !!d.capture)) : a.attachEvent("on" + b, g); vn[e] = [a, b, c, g, d]; return e
    }
    function zn(a, b, c, d) {
        var e = a || document; return L(e, b, function (f) {
            var g = Vf(f.target, function (h) { return h === e || d(h) }, !0);
            g && g !== e && !g.disabled && (f.currentTarget = g, c.call(g, f))
        })
    }
    function M(a) { a && ("string" == typeof a && (a = [a]), B(a, function (b) { if (b in vn) { var c = vn[b], d = c[0], e = c[1], f = c[3]; c = c[4]; d.removeEventListener ? yn() || "boolean" === typeof c ? d.removeEventListener(e, f, c) : d.removeEventListener(e, f, !!c.capture) : d.detachEvent && d.detachEvent("on" + e, f); delete vn[b] } })) }
    function An(a) { a = a || window.event; a = a.target || a.srcElement; 3 == a.nodeType && (a = a.parentNode); return a }
    var yn = bb(function () {
        var a = !1; try {
            var b = Object.defineProperty({}, "capture", { get: function () { a = !0 } });
            window.addEventListener("test", null, b)
        } catch (c) { } return a
    });
    function Bn(a, b, c, d) { return zn(a, b, c, function (e) { return I(e, d) }) }
    function Cn(a, b) { if (document.createEvent) { var c = document.createEvent("HTMLEvents"); c.initEvent(b, !0, !0); a.dispatchEvent(c) } else c = document.createEventObject(), a.fireEvent("on" + b, c) }
    function Dn(a, b, c) { var d = void 0 === d ? {} : d; var e = L(a, b, function () { M(e); c.apply(a, arguments) }, d) }
    ; var En = window.yt && window.yt.msgs_ || window.ytcfg && window.ytcfg.msgs || {}; x("yt.msgs_", En, void 0); function Fn(a) { Vm(En, arguments) }
    function Gn(a, b, c) {
        b = void 0 === b ? {} : b; a = (a = a in En ? En[a] : c) || ""; c = {}; for (var d in b) {
            c.Fb = d; var e = function (f) { return function () { return String(b[f.Fb]) } }(c);
            a = a.replace(new RegExp("\\$\\{" + c.Fb + "\\}", "gi"), e); a = a.replace(new RegExp("\\$" + c.Fb, "gi"), e); c = { Fb: c.Fb }
        } return a
    }
    function Hn(a) { Vm(En, arguments) }
    ; var In = /^[\w.]*$/, Jn = { q: !0, search_query: !0 }; function Kn(a, b) { b = a.split(b); for (var c = {}, d = 0, e = b.length; d < e; d++) { var f = b[d].split("="); if (1 == f.length && f[0] || 2 == f.length) try { var g = Ln(f[0] || ""), h = Ln(f[1] || ""); g in c ? Array.isArray(c[g]) ? tb(c[g], h) : c[g] = [c[g], h] : c[g] = h } catch (t) { var l = t, m = f[0], n = String(Kn); l.args = [{ key: m, value: f[1], query: a, method: Mn == n ? "unchanged" : n }]; Jn.hasOwnProperty(m) || un(l) } } return c }
    var Mn = String(Kn); function Nn(a) {
        var b = []; Ab(a, function (c, d) { var e = md(d), f; Array.isArray(c) ? f = c : f = [c]; B(f, function (g) { "" == g ? b.push(e) : b.push(e + "=" + md(g)) }) });
        return b.join("&")
    }
    function On(a) { "?" == a.charAt(0) && (a = a.substr(1)); return Kn(a, "&") }
    function Pn(a) { return -1 != a.indexOf("?") ? (a = (a || "").split("#")[0], a = a.split("?", 2), On(1 < a.length ? a[1] : a[0])) : {} }
    function Qn(a, b) { return Rn(a, b || {}, !0) }
    function Rn(a, b, c) { var d = a.split("#", 2); a = d[0]; d = 1 < d.length ? "#" + d[1] : ""; var e = a.split("?", 2); a = e[0]; e = On(e[1] || ""); for (var f in b) !c && null !== e && f in e || (e[f] = b[f]); return Kd(a, e) + d }
    function Sn(a) { if (!b) var b = window.location.href; var c = Ad(a)[1] || null, d = Cd(a); c && d ? (a = Ad(a), b = Ad(b), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? Cd(b) == d && (Number(Ad(b)[4] || null) || null) == (Number(Ad(a)[4] || null) || null) : !0; return a }
    function Ln(a) { return a && a.match(In) ? a : nd(a) }
    ; function Tn(a) {
        var b = Un; a = void 0 === a ? y("yt.ads.biscotti.lastId_") || "" : a; var c = Object, d = c.assign, e = {}; e.dt = Dg; e.flash = "0"; a: { try { var f = b.i.top.location.href } catch (S) { f = 2; break a } f = f ? f === b.j.location.href ? 0 : 1 : 2 } e = (e.frm = f, e); try {
            e.u_tz = -(new Date).getTimezoneOffset(); var g = void 0 === g ? $e : g; try { var h = g.history.length } catch (S) { h = 0 } e.u_his = h; e.u_java = !!$e.navigator && "unknown" !== typeof $e.navigator.javaEnabled && !!$e.navigator.javaEnabled && $e.navigator.javaEnabled(); $e.screen && (e.u_h = $e.screen.height, e.u_w =
                $e.screen.width, e.u_ah = $e.screen.availHeight, e.u_aw = $e.screen.availWidth, e.u_cd = $e.screen.colorDepth); $e.navigator && $e.navigator.plugins && (e.u_nplug = $e.navigator.plugins.length); $e.navigator && $e.navigator.mimeTypes && (e.u_nmime = $e.navigator.mimeTypes.length)
        } catch (S) { } h = b.i; try { var l = h.screenX; var m = h.screenY } catch (S) { } try { var n = h.outerWidth; var t = h.outerHeight } catch (S) { } try { var w = h.innerWidth; var v = h.innerHeight } catch (S) { } try { var C = h.screenLeft; var O = h.screenTop } catch (S) { } try { w = h.innerWidth, v = h.innerHeight } catch (S) { } try {
            var H =
                h.screen.availWidth; var X = h.screen.availTop
        } catch (S) { } l = [C, O, l, m, H, X, n, t, w, v]; try { var qa = qf(b.i.top || window).round() } catch (S) { qa = new ef(-12245933, -12245933) } m = qa; qa = {}; n = new Gi; u.SVGElement && u.document.createElementNS && n.set(0); t = $f(); t["allow-top-navigation-by-user-activation"] && n.set(1); t["allow-popups-to-escape-sandbox"] && n.set(2); u.crypto && u.crypto.subtle && n.set(3); u.TextDecoder && u.TextEncoder && n.set(4); n = Hi(n); qa.bc = n; qa.bih = m.height; qa.biw = m.width; qa.brdim = l.join(); b = b.j; b = (qa.vis = {
            visible: 1,
            hidden: 2, prerender: 3, preview: 4, unloaded: 5
        }[b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""] || 0, qa.wgl = !!$e.WebGLRenderingContext, qa); c = d.call(c, e, b); c.ca_type = "image"; a && (c.bid = a); return c
    }
    var Un = new function () { var a = window.document; this.i = window; this.j = a };
    x("yt.ads_.signals_.getAdSignalsString", function (a) { return Nn(Tn(a)) }, void 0); function N(a) { a = Vn(a); return "string" === typeof a && "false" === a ? !1 : !!a }
    function Wn(a, b) { a = Vn(a); return void 0 === a && void 0 !== b ? b : Number(a || 0) }
    function Vn(a) { var b = J("EXPERIMENTS_FORCED_FLAGS", {}); return void 0 !== b[a] ? b[a] : J("EXPERIMENT_FLAGS", {})[a] }
    function Xn() { var a = [], b = J("EXPERIMENTS_FORCED_FLAGS", {}); for (c in b) a.push({ key: c, value: String(b[c]) }); var c = J("EXPERIMENT_FLAGS", {}); for (var d in c) d.startsWith("force_") && void 0 === b[d] && a.push({ key: d, value: String(c[d]) }); return a }
    ; var Yn = "XMLHttpRequest" in u ? function () { return new XMLHttpRequest } : null;
    function Zn() { if (!Yn) return null; var a = Yn(); return "open" in a ? a : null }
    ; function P(a, b) { "function" === typeof a && (a = sn(a)); return window.setTimeout(a, b) }
    function $n(a, b) { "function" === typeof a && (a = sn(a)); return window.setInterval(a, b) }
    function Q(a) { window.clearTimeout(a) }
    function ao(a) { window.clearInterval(a) }
    ; var bo = {
        Authorization: "AUTHORIZATION", "X-Goog-Visitor-Id": "SANDBOXED_VISITOR_ID", "X-Youtube-Domain-Admin-State": "DOMAIN_ADMIN_STATE", "X-Youtube-Chrome-Connected": "CHROME_CONNECTED_HEADER", "X-YouTube-Client-Name": "INNERTUBE_CONTEXT_CLIENT_NAME", "X-YouTube-Client-Version": "INNERTUBE_CONTEXT_CLIENT_VERSION", "X-YouTube-Delegation-Context": "INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", "X-YouTube-Device": "DEVICE", "X-Youtube-Identity-Token": "ID_TOKEN", "X-YouTube-Page-CL": "PAGE_CL", "X-YouTube-Page-Label": "PAGE_BUILD_LABEL",
        "X-YouTube-Variants-Checksum": "VARIANTS_CHECKSUM"
    }, co = "app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia("client_dev_mss_url client_dev_regex_map client_dev_root_url expflag jsfeat jsmode client_rollout_override".split(" "))), eo = !1;
    function fo(a, b) { b = void 0 === b ? {} : b; var c = Sn(a), d = N("web_ajax_ignore_global_headers_if_set"), e; for (e in bo) { var f = J(bo[e]); !f || !c && Cd(a) || d && void 0 !== b[e] || (b[e] = f) } if (c || !Cd(a)) b["X-YouTube-Utc-Offset"] = String(-(new Date).getTimezoneOffset()); if (c || !Cd(a)) { try { var g = (new Intl.DateTimeFormat).resolvedOptions().timeZone } catch (h) { } g && (b["X-YouTube-Time-Zone"] = g) } if (c || !Cd(a)) b["X-YouTube-Ad-Signals"] = Nn(Tn(void 0)); return b }
    function go(a) {
        var b = window.location.search, c = Cd(a); N("debug_handle_relative_url_for_query_forward_killswitch") || c || !Sn(a) || (c = document.location.hostname); var d = Bd(Ad(a)[5] || null); d = (c = c && (c.endsWith("youtube.com") || c.endsWith("youtube-nocookie.com"))) && d && d.startsWith("/api/"); if (!c || d) return a; var e = On(b), f = {}; B(co, function (g) { e[g] && (f[g] = e[g]) });
        return Rn(a, f || {}, !1)
    }
    function ho(a, b) {
        var c = b.format || "JSON"; a = io(a, b); var d = jo(a, b), e = !1, f = ko(a, function (l) {
            if (!e) {
                e = !0; h && Q(h); a: switch (l && "status" in l ? l.status : -1) { case 200: case 201: case 202: case 203: case 204: case 205: case 206: case 304: var m = !0; break a; default: m = !1 }var n = null, t = 400 <= l.status && 500 > l.status, w = 500 <= l.status && 600 > l.status; if (m || t || w) n = lo(a, c, l, b.convertToSafeHtml); if (m) a: if (l && 204 == l.status) m = !0; else { switch (c) { case "XML": m = 0 == parseInt(n && n.return_code, 10); break a; case "RAW": m = !0; break a }m = !!n } n = n || {};
                t = b.context || u; m ? b.onSuccess && b.onSuccess.call(t, l, n) : b.onError && b.onError.call(t, l, n); b.onFinish && b.onFinish.call(t, l, n)
            }
        }, b.method, d, b.headers, b.responseType, b.withCredentials);
        if (b.onTimeout && 0 < b.timeout) { var g = b.onTimeout; var h = P(function () { e || (e = !0, f.abort(), Q(h), g.call(b.context || u, f)) }, b.timeout) } return f
    }
    function io(a, b) { b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a); var c = J("XSRF_FIELD_NAME", void 0); if (b = b.urlParams) b[c] && delete b[c], a = Qn(a, b); return a }
    function jo(a, b) {
        var c = J("XSRF_FIELD_NAME", void 0), d = J("XSRF_TOKEN", void 0), e = b.postBody || "", f = b.postParams, g = J("XSRF_FIELD_NAME", void 0), h; b.headers && (h = b.headers["Content-Type"]); b.excludeXsrf || Cd(a) && !b.withCredentials && Cd(a) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d); f && "string" === typeof e && (e = On(e), Nb(e, f), e = b.postBodyFormat && "JSON" == b.postBodyFormat ? JSON.stringify(e) : Id(e)); f = e || f && !Hb(f); !eo && f &&
            "POST" != b.method && (eo = !0, tn(Error("AJAX request with postData should use POST"))); return e
    }
    function lo(a, b, c, d) {
        var e = null; switch (b) { case "JSON": try { var f = c.responseText } catch (g) { throw d = Error("Error reading responseText"), d.params = a, un(d), g; } a = c.getResponseHeader("Content-Type") || ""; f && 0 <= a.indexOf("json") && (")]}'\n" === f.substring(0, 5) && (f = f.substring(5)), e = JSON.parse(f)); break; case "XML": if (a = (a = c.responseXML) ? mo(a) : null) e = {}, B(a.getElementsByTagName("*"), function (g) { e[g.tagName] = no(g) }) }d && oo(e);
        return e
    }
    function oo(a) { if (Na(a)) for (var b in a) { var c; (c = "html_content" == b) || (c = b.length - 5, c = 0 <= c && b.indexOf("_html", c) == c); c ? a[b] = dd(Wb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"), a[b]) : oo(a[b]) } }
    function mo(a) { return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null }
    function no(a) {
        var b = ""; B(a.childNodes, function (c) { b += c.nodeValue });
        return b
    }
    function po(a, b) { return a ? (a = a.getElementsByTagName(b)) && 0 < a.length ? no(a[0]) : null : null }
    var qo = mo; function ko(a, b, c, d, e, f, g) {
        function h() { 4 == (l && "readyState" in l ? l.readyState : 0) && b && sn(b)(l) }
        c = void 0 === c ? "GET" : c; d = void 0 === d ? "" : d; var l = Zn(); if (!l) return null; "onloadend" in l ? l.addEventListener("loadend", h, !1) : l.onreadystatechange = h; N("debug_forward_web_query_parameters") && (a = go(a)); l.open(c, a, !0); f && (l.responseType = f); g && (l.withCredentials = !0); c = "POST" == c && (void 0 === window.FormData || !(d instanceof FormData)); if (e = fo(a, e)) for (var m in e) l.setRequestHeader(m, e[m]), "content-type" == m.toLowerCase() && (c = !1); c && l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); l.send(d);
        return l
    }
    ; function ro(a, b, c, d, e, f) { Vh.set("" + a, b, { ic: c, path: d, domain: void 0 === e ? "youtube.com" : e, secure: void 0 === f ? !1 : f }) }
    function so(a, b) { return Vh.get("" + a, b) }
    function to(a, b, c) { return Vh.remove("" + a, void 0 === b ? "/" : b, void 0 === c ? "youtube.com" : c) }
    function uo() { if (!Vh.isEnabled()) return !1; if (!Vh.isEmpty()) return !0; Vh.set("TESTCOOKIESENABLED", "1", { ic: 60 }); if ("1" !== Vh.get("TESTCOOKIESENABLED")) return !1; Vh.remove("TESTCOOKIESENABLED"); return !0 }
    ; var vo = Oe || Pe; function wo(a) { var b = Jc; return b ? 0 <= b.toLowerCase().indexOf(a) : !1 }
    ; var xo = {}, yo = 0;
    function zo(a, b, c, d, e) {
        e = void 0 === e ? "" : e; if (a) if (c && !wo("cobalt")) a && (a = rc(wc(a) || yc), "about:invalid#zClosurez" === a || a.startsWith("data") ? a = "" : (a = Sc(Tc(a)).toString(), a = md(gk(a))), /^[\s\xa0]*$/.test(a) || (a = vf("IFRAME", { src: 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"', style: "display:none" }), hf(a).body.appendChild(a))); else if (e) ko(a, b, "POST", e, d); else if (J("USE_NET_AJAX_FOR_PING_TRANSPORT", !1) || d) ko(a, b, "GET", "", d); else {
            b: {
                try {
                    var f = new ab({ url: a }); if (f.l && f.j || f.o) {
                        var g = Bd(Ad(a)[5] || null),
                        h; if (!(h = !g || !g.endsWith("/aclk"))) { var l = a.search(Ld); d: { for (c = 0; 0 <= (c = a.indexOf("ri", c)) && c < l;) { var m = a.charCodeAt(c - 1); if (38 == m || 63 == m) { var n = a.charCodeAt(c + 2); if (!n || 61 == n || 38 == n || 35 == n) { var t = c; break d } } c += 3 } t = -1 } if (0 > t) var w = null; else { var v = a.indexOf("&", t); if (0 > v || v > l) v = l; t += 3; w = nd(a.substr(t, v - t)) } h = "1" !== w } var C = !h; break b
                    }
                } catch (O) { } C = !1
            } C ? Ao(a) ? (b && b(), C = !0) : C = !1 : C = !1; C || Bo(a, b)
        }
    }
    function Co(a, b, c) { c = void 0 === c ? "" : c; Ao(a, c) ? b && b() : zo(a, b, void 0, void 0, c) }
    function Ao(a, b) { try { if (window.navigator && window.navigator.sendBeacon && window.navigator.sendBeacon(a, void 0 === b ? "" : b)) return !0 } catch (c) { } return !1 }
    function Bo(a, b) {
        var c = new Image, d = "" + yo++; xo[d] = c; c.onload = c.onerror = function () { b && xo[d] && b(); delete xo[d] };
        c.src = a
    }
    ; var Do = u.ytPubsubPubsubInstance || new mm, Eo = u.ytPubsubPubsubSubscribedKeys || {}, Fo = u.ytPubsubPubsubTopicToKeys || {}, Go = u.ytPubsubPubsubIsSynchronous || {}; function R(a, b, c) {
        var d = Ho(); if (d && b) {
            var e = d.subscribe(a, function () {
                var f = arguments; var g = function () { Eo[e] && b.apply && "function" == typeof b.apply && b.apply(c || window, f) };
                try { Go[a] ? g() : P(g, 0) } catch (h) { tn(h) }
            }, c);
            Eo[e] = !0; Fo[a] || (Fo[a] = []); Fo[a].push(e); return e
        } return 0
    }
    function Io(a) { var b = R("yt-ui-dialog-hide-complete", function (c) { a.apply(void 0, arguments); Jo(b) }, void 0) }
    function Jo(a) { var b = Ho(); b && ("number" === typeof a ? a = [a] : "string" === typeof a && (a = [parseInt(a, 10)]), B(a, function (c) { b.unsubscribeByKey(c); delete Eo[c] })) }
    function T(a, b) { var c = Ho(); return c ? c.publish.apply(c, arguments) : !1 }
    function Ko(a, b) { Go[a] = !0; var c = Ho(); c = c ? c.publish.apply(c, arguments) : !1; Go[a] = !1; return c }
    function Lo(a) { var b = Ho(); if (b) if (b.clear(a), a) Mo(a); else for (var c in Fo) Mo(c) }
    function Ho() { return u.ytPubsubPubsubInstance }
    function Mo(a) { Fo[a] && (a = Fo[a], B(a, function (b) { Eo[b] && delete Eo[b] }), a.length = 0) }
    mm.prototype.subscribe = mm.prototype.subscribe; mm.prototype.unsubscribeByKey = mm.prototype.wa; mm.prototype.publish = mm.prototype.ha; mm.prototype.clear = mm.prototype.clear; x("ytPubsubPubsubInstance", Do, void 0); x("ytPubsubPubsubTopicToKeys", Fo, void 0); x("ytPubsubPubsubIsSynchronous", Go, void 0); x("ytPubsubPubsubSubscribedKeys", Eo, void 0); var No = /\.vflset|-vfl[a-zA-Z0-9_+=-]+/, Oo = /-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/; function Po(a, b, c) { c = void 0 === c ? null : c; if (window.spf && spf.script) { c = ""; if (a) { var d = a.indexOf("jsbin/"), e = a.lastIndexOf(".js"), f = d + 6; -1 < d && -1 < e && e > f && (c = a.substring(f, e), c = c.replace(No, ""), c = c.replace(Oo, ""), c = c.replace("debug-", ""), c = c.replace("tracing-", "")) } spf.script.load(a, c, b); return null } return Qo(a, b, c) }
    function Qo(a, b, c) { c = void 0 === c ? null : c; var d = Ro(a), e = document.getElementById(d), f = e && K(e, "loaded"), g = e && !f; if (f) return b && b(), e; b && (f = R(d, b), b = "" + Oa(b), So[b] = f); return g ? e : e = To(a, d, function () { K(e, "loaded") || (an(e, "loaded", "true"), T(d), P(Ua(Lo, d), 0)) }, c) }
    function To(a, b, c, d) {
        d = void 0 === d ? null : d; var e = yf("SCRIPT"); e.id = b; e.onload = function () { c && setTimeout(c, 0) };
        e.onreadystatechange = function () { switch (e.readyState) { case "loaded": case "complete": e.onload() } };
        d && e.setAttribute("nonce", d); Sd(e, Vd(a)); a = document.getElementsByTagName("head")[0] || document.body; a.insertBefore(e, a.firstChild); return e
    }
    function Ro(a) { var b = document.createElement("a"); gd(b, a); a = b.href.replace(/^[a-zA-Z]+:\/\//, "//"); return "js-" + wd(a) }
    var So = {}; var Uo = /cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/; function Vo(a, b) { a = a || ""; if (window.spf) { var c = a.match(Uo); spf.style.load(a, c ? c[1] : "", b); return null } return Wo(a, b) }
    function Wo(a, b) { var c = Xo(a), d = document.getElementById(c), e = d && K(d, "loaded"), f = d && !e; if (e) return b && b(), d; b && (R(c, b), Oa(b)); return f ? d : d = Yo(a, c, function () { K(d, "loaded") || (an(d, "loaded", "true"), T(c), P(Ua(Lo, c), 0)) }) }
    function Yo(a, b, c) {
        var d = document.createElement("link"); d.id = b; d.onload = function () { c && setTimeout(c, 0) };
        a = Vd(a); id(d, a); (document.getElementsByTagName("head")[0] || document.body).appendChild(d); return d
    }
    function Xo(a) { var b = yf("A"); Wb("This URL is never added to the DOM"); gd(b, new pc(a, qc)); a = b.href.replace(/^[a-zA-Z]+:\/\//, "//"); return "css-" + wd(a) }
    ; function Zo(a, b) { this.version = a; this.args = b }
    ; function $o(a, b) { this.topic = a; this.i = b }
    $o.prototype.toString = function () { return this.topic }; function ap() { }
    function bp(a, b) { return cp(a, 0, b) }
    function dp(a, b) { return cp(a, 1, b) }
    ; function ep() { ap.apply(this, arguments) }
    q(ep, ap); function cp(a, b, c) { void 0 !== c && Number.isNaN(Number(c)) && (c = void 0); var d = y("yt.scheduler.instance.addJob"); return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : P(a, c || 0) }
    function fp(a) { if (void 0 === a || !Number.isNaN(Number(a))) { var b = y("yt.scheduler.instance.cancelJob"); b ? b(a) : Q(a) } }
    ep.prototype.start = function () { var a = y("yt.scheduler.instance.start"); a && a() };
    ep.prototype.pause = function () { var a = y("yt.scheduler.instance.pause"); a && a() }; ep.i || (ep.i = new ep); var gp = y("ytPubsub2Pubsub2Instance") || new mm; mm.prototype.subscribe = mm.prototype.subscribe; mm.prototype.unsubscribeByKey = mm.prototype.wa; mm.prototype.publish = mm.prototype.ha; mm.prototype.clear = mm.prototype.clear; x("ytPubsub2Pubsub2Instance", gp, void 0); var hp = y("ytPubsub2Pubsub2SubscribedKeys") || {}; x("ytPubsub2Pubsub2SubscribedKeys", hp, void 0); var ip = y("ytPubsub2Pubsub2TopicToKeys") || {}; x("ytPubsub2Pubsub2TopicToKeys", ip, void 0); var jp = y("ytPubsub2Pubsub2IsAsync") || {};
    x("ytPubsub2Pubsub2IsAsync", jp, void 0); x("ytPubsub2Pubsub2SkipSubKey", null, void 0); function kp(a, b) { var c = lp(); return c ? c.publish.call(c, a.toString(), a, b) : !1 }
    function mp(a, b, c) {
        var d = lp(); if (!d) return 0; var e = d.subscribe(a.toString(), function (f, g) {
            var h = y("ytPubsub2Pubsub2SkipSubKey"); h && h == e || (h = function () {
                if (hp[e]) try {
                    if (g && a instanceof $o && a != f) try {
                        var l = a.i, m = g; if (!m.args || !m.version) throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete."); try { if (!l.bb) { var n = new l; l.bb = n.version } var t = l.bb } catch (w) { } if (!t || m.version != t) throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible."); try {
                            g = Reflect.construct(l,
                                sb(m.args))
                        } catch (w) { throw w.message = "yt.pubsub2.Data.deserialize(): " + w.message, w; }
                    } catch (w) { throw w.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + a.toString() + ": " + w.message, w; } b.call(c || window, g)
                } catch (w) { tn(w) }
            }, jp[a.toString()] ? y("yt.scheduler.instance") ? dp(h) : P(h, 0) : h())
        });
        hp[e] = !0; ip[a.toString()] || (ip[a.toString()] = []); ip[a.toString()].push(e); return e
    }
    function np() {
        var a = op, b = mp(pp, function (c) { a.apply(void 0, arguments); qp(b) }, void 0);
        return b
    }
    function qp(a) { var b = lp(); b && ("number" === typeof a && (a = [a]), B(a, function (c) { b.unsubscribeByKey(c); delete hp[c] })) }
    function lp() { return y("ytPubsub2Pubsub2Instance") }
    ; function rp(a, b, c) { var d = c && 0 < c ? c : 0; c = d ? Date.now() + 1E3 * d : 0; if ((d = d ? sp() : tp()) && window.JSON) { "string" !== typeof b && (b = JSON.stringify(b, void 0)); try { d.set(a, b, c) } catch (e) { d.remove(a) } } }
    function up(a) { var b = tp(), c = sp(); if (!b && !c || !window.JSON) return null; try { var d = b.get(a) } catch (e) { } if ("string" !== typeof d) try { d = c.get(a) } catch (e) { } if ("string" !== typeof d) return null; try { d = JSON.parse(d, void 0) } catch (e) { } return d }
    function vp(a) { try { var b = tp(), c = sp(); b && b.remove(a); c && c.remove(a) } catch (d) { } }
    function wp() { var a = sp(); a && Am(a, a.i.ma(!0)) }
    var sp = bb(function () { var a = new Em; return a.isAvailable() ? new ym(a) : null }), tp = bb(function () {
        var a = new Fm;
        return a.isAvailable() ? new ym(a) : null
    }); function xp(a, b) { (a = E(a)) && a.style && (a.style.display = b ? "" : "none", Fj(a, "hid", !b)) }
    function yp(a) { return (a = E(a)) ? "none" != a.style.display && !I(a, "hid") : !1 }
    function zp(a) { if (a = E(a)) yp(a) ? (a.style.display = "none", Bj(a, "hid")) : (a.style.display = "", Dj(a, "hid")) }
    function Ap(a) { Array.prototype.forEach.call(arguments, function (b) { !Ma(b) || b instanceof Element ? xp(b, !0) : B(b, function (c) { Ap(c) }) }) }
    function Bp(a) { Array.prototype.forEach.call(arguments, function (b) { !Ma(b) || b instanceof Element ? xp(b, !1) : B(b, function (c) { Bp(c) }) }) }
    function Cp(a) { Array.prototype.forEach.call(arguments, function (b) { Ma(b) ? B(b, function (c) { Cp(c) }) : zp(b) }) }
    (function (a, b) {
        function c(f) { var g = p(f); f = g.next().value; g = ha(g); return a.apply(f, g) }
        function d(f) { f = p(f); f.next(); f = ha(f); return b(e, f) }
        b = void 0 === b ? tk : b; var e = Oa(a); return function (f) { for (var g = [], h = 0; h < arguments.length; ++h)g[h - 0] = arguments[h]; h = this || u; var l = sk.get(h); l || (l = {}, sk.set(h, l)); return ne(l, [this].concat(ia(g)), c, d) }
    })(function (a) {
        var b = yf("DIV");
        a && (b.className = a); b.style.cssText = "overflow:auto;position:absolute;top:0;width:100px;height:100px"; a = yf("DIV"); tg(a, "200px", "200px"); b.appendChild(a); document.body.appendChild(b); a = b.offsetWidth - b.clientWidth; Cf(b); return a
    }); var Dp = {}, Ep = "ontouchstart" in document; function Fp(a, b, c) { b in Dp || (Dp[b] = new mm); Dp[b].subscribe(a, c) }
    function Gp(a, b, c) { if (b in Dp) { var d = Dp[b]; om(d, a, c); 0 >= qm(d) && (d.dispose(), delete Dp[b]) } }
    function Hp(a, b, c) { switch (a) { case "mouseover": case "mouseout": var d = 3; break; case "mouseenter": case "mouseleave": d = 9 }return Vf(c, function (e) { return I(e, b) }, !0, d) }
    function Ip(a) { var b = "mouseover" == a.type && "mouseenter" in Dp || "mouseout" == a.type && "mouseleave" in Dp, c = a.type in Dp || b; if ("HTML" != a.target.tagName && c) { if (b) { b = "mouseover" == a.type ? "mouseenter" : "mouseleave"; c = Dp[b]; for (var d in c.j) { var e = Hp(b, d, a.target); e && !Vf(a.relatedTarget, function (f) { return f == e }, !0) && c.ha(d, e, b, a) } } if (b = Dp[a.type]) for (d in b.j) (e = Hp(a.type, d, a.target)) && b.ha(d, e, a.type, a) } }
    L(document, "blur", Ip, !0); L(document, "change", Ip, !0); L(document, "click", Ip); L(document, "focus", Ip, !0); L(document, "mouseover", Ip); L(document, "mouseout", Ip); L(document, "mousedown", Ip); L(document, "keydown", Ip); L(document, "keyup", Ip); L(document, "keypress", Ip); L(document, "cut", Ip); L(document, "paste", Ip); Ep && (L(document, "touchstart", Ip), L(document, "touchend", Ip), L(document, "touchcancel", Ip)); function U(a) { this.A = a; this.K = {}; this.B = []; this.H = [] }
    k = U.prototype; k.Z = function (a) { return G(a, V(this)) };
    function V(a, b) { return "yt-uix" + (a.A ? "-" + a.A : "") + (b ? "-" + b : "") }
    k.unregister = function () { Jo(this.B); this.B.length = 0; qp(this.H); this.H.length = 0 };
    k.init = Ja; k.dispose = Ja; k.oa = function (a, b) { this.B.push(R(a, b, this)) };
    function Jp(a, b, c) { a.H.push(mp(b, c, a)) }
    function W(a, b, c, d) { d = V(a, d); var e = z(c, a); Fp(d, b, e); a.K[c] = e }
    function Y(a, b, c, d) { Gp(V(a, d), b, a.K[c]); delete a.K[c] }
    k.Ea = function (a, b, c) { var d = this.D(a, b); if (d && (d = y(d))) { var e = Array.prototype.slice.call(arguments, 2); ub(e, 0, 0, a); d.apply(null, e) } };
    k.D = function (a, b) { return K(a, b) };
    function Kp(a, b) { an(a, "tooltip-text", b) }
    function Lp(a, b, c) { return F(V(a, b), c) }
    ; var Mp = window.ytcsi && window.ytcsi.now ? window.ytcsi.now : window.performance && window.performance.timing && window.performance.now && window.performance.timing.navigationStart ? function () { return window.performance.timing.navigationStart + window.performance.now() } : function () { return (new Date).getTime() }; function Np(a) { this.C = a; this.i = null; this.o = 0; this.B = null; this.A = 0; this.j = []; for (a = 0; 4 > a; a++)this.j.push(0); this.l = 0; this.M = L(window, "mousemove", z(this.N, this)); this.U = $n(z(this.H, this), 25) }
    A(Np, Ji); Np.prototype.N = function (a) { void 0 === a.i && gn(a); var b = a.i; void 0 === a.j && gn(a); this.i = new cf(b, a.j) };
    Np.prototype.H = function () { if (this.i) { var a = Mp(); if (0 != this.o) { var b = this.B, c = this.i, d = b.x - c.x; b = b.y - c.y; d = Math.sqrt(d * d + b * b) / (a - this.o); this.j[this.l] = .5 < Math.abs((d - this.A) / this.A) ? 1 : 0; for (c = b = 0; 4 > c; c++)b += this.j[c] || 0; 3 <= b && this.C(); this.A = d } this.o = a; this.B = this.i; this.l = (this.l + 1) % 4 } };
    Np.prototype.O = function () { ao(this.U); M(this.M) }; var Op = {};
    function Pp(a) {
        var b = void 0 === a ? {} : a; a = void 0 === b.Ah ? !1 : b.Ah; b = void 0 === b.Lf ? !0 : b.Lf; if (null == y("_lact", window)) {
            var c = parseInt(J("LACT"), 10); c = isFinite(c) ? Date.now() - Math.max(c, 0) : -1; x("_lact", c, window); x("_fact", c, window); -1 == c && Qp(); L(document, "keydown", Qp); L(document, "keyup", Qp); L(document, "mousedown", Qp); L(document, "mouseup", Qp); a ? L(window, "touchmove", function () { Rp("touchmove", 200) }, { passive: !0 }) : (L(window, "resize", function () { Rp("resize", 200) }), b && L(window, "scroll", function () { Rp("scroll", 200) }));
            new Np(function () { Rp("mouse", 100) });
            L(document, "touchstart", Qp, { passive: !0 }); L(document, "touchend", Qp, { passive: !0 })
        }
    }
    function Rp(a, b) { Op[a] || (Op[a] = !0, dp(function () { Qp(); Op[a] = !1 }, b)) }
    function Qp() { null == y("_lact", window) && Pp(); var a = Date.now(); x("_lact", a, window); -1 == y("_fact", window) && x("_fact", a, window); (a = y("ytglobal.ytUtilActivityCallback_")) && a() }
    function Sp() { var a = y("_lact", window); return null == a ? -1 : Math.max(Date.now() - a, 0) }
    ; var Tp = window, Up = Tp.ytcsi && Tp.ytcsi.now ? Tp.ytcsi.now : Tp.performance && Tp.performance.timing && Tp.performance.now && Tp.performance.timing.navigationStart ? function () { return Tp.performance.timing.navigationStart + Tp.performance.now() } : function () { return (new Date).getTime() }; var Vp = Wn("initial_gel_batch_timeout", 2E3), Wp = Math.pow(2, 16) - 1, Xp = null, Yp = 0, Zp = void 0, $p = 0, aq = 0, bq = 0, cq = !0, dq = u.ytLoggingTransportGELQueue_ || new Map; x("ytLoggingTransportGELQueue_", dq, void 0); var eq = u.ytLoggingTransportTokensToCttTargetIds_ || {}; x("ytLoggingTransportTokensToCttTargetIds_", eq, void 0);
    function fq(a, b) { if ("log_event" === a.endpoint) { var c = ""; a.Zb ? c = "visitorOnlyApprovedKey" : a.ya && (eq[a.ya.token] = gq(a.ya), c = a.ya.token); var d = dq.get(c) || []; dq.set(c, d); d.push(a.payload); b && (Zp = new b); a = Wn("tvhtml5_logging_max_batch") || Wn("web_logging_max_batch") || 100; b = Up(); d.length >= a ? hq({ writeThenSend: !0 }) : 10 <= b - bq && (iq(), bq = b) } }
    function jq(a, b) { if ("log_event" === a.endpoint) { var c = ""; a.Zb ? c = "visitorOnlyApprovedKey" : a.ya && (eq[a.ya.token] = gq(a.ya), c = a.ya.token); var d = new Map; d.set(c, [a.payload]); b && (Zp = new b); return new Wg(function (e) { Zp && Zp.isReady() ? kq(d, e, { bypassNetworkless: !0 }) : e() }) } }
    function hq(a) { a = void 0 === a ? {} : a; new Wg(function (b) { Q($p); Q(aq); aq = 0; Zp && Zp.isReady() ? (kq(dq, b, a), dq.clear()) : (iq(), b()) }) }
    function iq() {
        N("web_gel_timeout_cap") && !aq && (aq = P(function () { hq({ writeThenSend: !0 }) }, 6E4));
        Q($p); var a = J("LOGGING_BATCH_TIMEOUT", Wn("web_gel_debounce_ms", 1E4)); N("shorten_initial_gel_batch_timeout") && cq && (a = Vp); $p = P(function () { hq({ writeThenSend: !0 }) }, a)
    }
    function kq(a, b, c) {
        var d = Zp; c = void 0 === c ? {} : c; var e = Math.round(Up()), f = a.size; a = p(a); for (var g = a.next(); !g.done; g = a.next()) {
            var h = p(g.value); g = h.next().value; var l = h = h.next().value; h = Lb({ context: lq(d.config_ || mq()) }); h.events = l; (l = eq[g]) && nq(h, g, l); delete eq[g]; g = "visitorOnlyApprovedKey" === g; oq(h, e, g); N("send_beacon_before_gel") && window.navigator && window.navigator.sendBeacon && !c.writeThenSend && Co("/generate_204"); pq(d, "log_event", h, {
                retry: !0, onSuccess: function () { f--; f || b(); Yp = Math.round(Up() - e) },
                onError: function () { f--; f || b() },
                ze: c, Zb: g
            }); cq = !1
        }
    }
    function oq(a, b, c) { a.requestTimeMs = String(b); N("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0); !c && (b = J("EVENT_ID", void 0)) && ((c = J("BATCH_CLIENT_COUNTER", void 0) || 0) || (c = Math.floor(Math.random() * Wp / 2)), c++, c > Wp && (c = 1), $m("BATCH_CLIENT_COUNTER", c), b = { serializedEventId: b, clientCounter: String(c) }, a.serializedClientEventId = b, Xp && Yp && N("log_gel_rtt_web") && (a.previousBatchInfo = { serializedClientEventId: Xp, roundtripMs: String(Yp) }), Xp = b, Yp = 0) }
    function nq(a, b, c) { if (c.videoId) var d = "VIDEO"; else if (c.playlistId) d = "PLAYLIST"; else return; a.credentialTransferTokenTargetId = c; a.context = a.context || {}; a.context.user = a.context.user || {}; a.context.user.credentialTransferTokens = [{ token: b, scope: d }] }
    function gq(a) { var b = {}; a.videoId ? b.videoId = a.videoId : a.playlistId && (b.playlistId = a.playlistId); return b }
    ; var qq = u.ytLoggingGelSequenceIdObj_ || {}; x("ytLoggingGelSequenceIdObj_", qq, void 0); function rq(a, b, c, d) { d = void 0 === d ? {} : d; var e = {}, f = Math.round(d.timestamp || Up()); e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0; e[a] = b; a = Sp(); e.context = { lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a) }; N("log_sequence_info_on_gel_web") && d.yc && (a = e.context, b = d.yc, qq[b] = b in qq ? qq[b] + 1 : 0, a.sequence = { index: qq[b], groupKey: b }, d.Nf && delete qq[d.yc]); (d.Dj ? jq : fq)({ endpoint: "log_event", payload: e, ya: d.ya, Zb: d.Zb }, c) }
    ; function sq(a) { var b = this; this.i = void 0; a.addEventListener("beforeinstallprompt", function (c) { c.preventDefault(); b.i = c }) }
    function tq() { if (!u.matchMedia) return "WEB_DISPLAY_MODE_UNKNOWN"; try { return u.matchMedia("(display-mode: standalone)").matches ? "WEB_DISPLAY_MODE_STANDALONE" : u.matchMedia("(display-mode: minimal-ui)").matches ? "WEB_DISPLAY_MODE_MINIMAL_UI" : u.matchMedia("(display-mode: fullscreen)").matches ? "WEB_DISPLAY_MODE_FULLSCREEN" : u.matchMedia("(display-mode: browser)").matches ? "WEB_DISPLAY_MODE_BROWSER" : "WEB_DISPLAY_MODE_UNKNOWN" } catch (a) { return "WEB_DISPLAY_MODE_UNKNOWN" } }
    ; var uq = y("ytglobal.prefsUserPrefsPrefs_") || {}; x("ytglobal.prefsUserPrefsPrefs_", uq, void 0); function vq() { this.i = J("ALT_PREF_COOKIE_NAME", "PREF"); this.j = J("ALT_PREF_COOKIE_DOMAIN", "youtube.com"); var a = so(this.i); if (a) { a = decodeURIComponent(a).split("&"); for (var b = 0; b < a.length; b++) { var c = a[b].split("="), d = c[0]; (c = c[1]) && (uq[d] = c.toString()) } } }
    vq.prototype.get = function (a, b) { wq(a); xq(a); a = void 0 !== uq[a] ? uq[a].toString() : null; return null != a ? a : b ? b : "" };
    vq.prototype.set = function (a, b) { wq(a); xq(a); if (null == b) throw Error("ExpectedNotNull"); uq[a] = b.toString() };
    function yq(a) { return !!((zq("f" + (Math.floor(a / 31) + 1)) || 0) & 1 << a % 31) }
    vq.prototype.remove = function (a) { wq(a); xq(a); delete uq[a] };
    function Aq(a) { var b = !0; N("web_secure_pref_cookie_killswitch") && (b = !1); var c = a.i, d = [], e; for (e in uq) d.push(e + "=" + encodeURIComponent(String(uq[e]))); ro(c, d.join("&"), 63072E3, "/", a.j, b) }
    vq.prototype.clear = function () { for (var a in uq) delete uq[a] };
    function xq(a) { if (/^f([1-9][0-9]*)$/.test(a)) throw Error("ExpectedRegexMatch: " + a); }
    function wq(a) { if (!/^\w+$/.test(a)) throw Error("ExpectedRegexMismatch: " + a); }
    function zq(a) { a = void 0 !== uq[a] ? uq[a].toString() : null; return null != a && /^[A-Fa-f0-9]+$/.test(a) ? parseInt(a, 16) : null }
    Ka(vq); var Bq = { bluetooth: "CONN_DISCO", cellular: "CONN_CELLULAR_UNKNOWN", ethernet: "CONN_WIFI", none: "CONN_NONE", wifi: "CONN_WIFI", wimax: "CONN_CELLULAR_4G", other: "CONN_UNKNOWN", unknown: "CONN_UNKNOWN", "slow-2g": "CONN_CELLULAR_2G", "2g": "CONN_CELLULAR_2G", "3g": "CONN_CELLULAR_3G", "4g": "CONN_CELLULAR_4G" }, Cq = { "slow-2g": "EFFECTIVE_CONNECTION_TYPE_SLOW_2G", "2g": "EFFECTIVE_CONNECTION_TYPE_2G", "3g": "EFFECTIVE_CONNECTION_TYPE_3G", "4g": "EFFECTIVE_CONNECTION_TYPE_4G" };
    function Dq() { var a = u.navigator; return a ? a.connection : void 0 }
    function Eq() { var a = Dq(); if (a) { var b = Bq[a.type || "unknown"] || "CONN_UNKNOWN"; a = Bq[a.effectiveType || "unknown"] || "CONN_UNKNOWN"; "CONN_CELLULAR_UNKNOWN" === b && "CONN_UNKNOWN" !== a && (b = a); if ("CONN_UNKNOWN" !== b) return b; if ("CONN_UNKNOWN" !== a) return a } }
    function Fq() { var a = Dq(); if (null !== a && void 0 !== a && a.effectiveType) return Cq.hasOwnProperty(a.effectiveType) ? Cq[a.effectiveType] : "EFFECTIVE_CONNECTION_TYPE_UNKNOWN" }
    ; function Gq() { return "INNERTUBE_API_KEY" in Zm && "INNERTUBE_API_VERSION" in Zm }
    function mq() {
        return {
            innertubeApiKey: J("INNERTUBE_API_KEY", void 0), innertubeApiVersion: J("INNERTUBE_API_VERSION", void 0), rg: J("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"), sg: J("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"), innertubeContextClientVersion: J("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0), ug: J("INNERTUBE_CONTEXT_HL", void 0), tg: J("INNERTUBE_CONTEXT_GL", void 0), vg: J("INNERTUBE_HOST_OVERRIDE", void 0) || "", xg: !!J("INNERTUBE_USE_THIRD_PARTY_AUTH", !1), wg: !!J("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
                !1), appInstallData: J("SERIALIZED_CLIENT_CONFIG_DATA", void 0)
        }
    }
    function lq(a) {
        var b = { client: { hl: a.ug, gl: a.tg, clientName: a.sg, clientVersion: a.innertubeContextClientVersion, configInfo: a.rg } }; navigator.userAgent && (b.client.userAgent = String(navigator.userAgent)); var c = u.devicePixelRatio; c && 1 != c && (b.client.screenDensityFloat = String(c)); c = J("EXPERIMENTS_TOKEN", ""); "" !== c && (b.client.experimentsToken = c); c = Xn(); 0 < c.length && (b.request = { internalExperimentFlags: c }); c = b.client.clientName; if ("WEB" === c || "MWEB" === c || 1 === c || 2 === c) {
            if (!N("web_include_display_mode_killswitch")) {
                var d;
                b.client.mainAppWebInfo = null != (d = b.client.mainAppWebInfo) ? d : {}; b.client.mainAppWebInfo.webDisplayMode = tq()
            }
        } else if (d = b.client.clientName, ("WEB_REMIX" === d || 76 === d) && !N("music_web_display_mode_killswitch")) { var e; b.client.ye = null != (e = b.client.ye) ? e : {}; b.client.ye.webDisplayMode = tq() } a.appInstallData && (b.client.configInfo = b.client.configInfo || {}, b.client.configInfo.appInstallData = a.appInstallData); J("DELEGATED_SESSION_ID") && !N("pageid_as_header_web") && (b.user = { onBehalfOfUser: J("DELEGATED_SESSION_ID") });
        if (a = Eq()) b.client.connectionType = a; N("web_log_effective_connection_type") && (a = Fq()) && (b.client.effectiveConnectionType = a); a = Object; e = a.assign; d = b.client; c = {}; for (var f = p(Object.entries(On(J("DEVICE", "")))), g = f.next(); !g.done; g = f.next()) { var h = p(g.value); g = h.next().value; h = h.next().value; "cbrand" === g ? c.deviceMake = h : "cmodel" === g ? c.deviceModel = h : "cbr" === g ? c.browserName = h : "cbrver" === g ? c.browserVersion = h : "cos" === g ? c.osName = h : "cosver" === g ? c.osVersion = h : "cplatform" === g && (c.platform = h) } b.client = e.call(a,
            d, c); return b
    }
    function Hq(a, b, c) { c = void 0 === c ? {} : c; var d = { "X-Goog-Visitor-Id": c.visitorData || J("VISITOR_DATA", "") }; if (b && b.includes("www.youtube-nocookie.com")) return d; (b = c.fj || J("AUTHORIZATION")) || (a ? b = "Bearer " + y("gapi.auth.getToken")().cj : b = Zh([])); b && (d.Authorization = b, d["X-Goog-AuthUser"] = J("SESSION_INDEX", 0), N("pageid_as_header_web") && (d["X-Goog-PageId"] = J("DELEGATED_SESSION_ID"))); return d }
    ; function Iq(a) { a = Object.assign({}, a); delete a.Authorization; var b = Zh(); if (b) { var c = new wj; c.update(J("INNERTUBE_API_KEY", void 0)); c.update(b); a.hash = Ve(c.digest(), 3) } return a }
    ; function Jq(a) { var b; (b = Mm(a)) || (a = new Gm(a || "UserDataSharedStore"), b = a.isAvailable() ? a : null); this.i = (a = b) ? new wm(a) : null; this.j = document.domain || window.location.hostname }
    Jq.prototype.set = function (a, b, c, d) { c = c || 31104E3; this.remove(a); if (this.i) try { this.i.set(a, b, Date.now() + 1E3 * c); return } catch (f) { } var e = ""; if (d) try { e = escape(gk(b)) } catch (f) { return } else e = escape(b); ro(a, e, c, "/", this.j) };
    Jq.prototype.get = function (a, b) { var c = void 0, d = !this.i; if (!d) try { c = this.i.get(a) } catch (e) { d = !0 } if (d && (c = so(a)) && (c = unescape(c), b)) try { c = JSON.parse(c) } catch (e) { this.remove(a), c = void 0 } return c };
    Jq.prototype.remove = function (a) { this.i && this.i.remove(a); to(a, "/", this.j) }; var Kq; function Lq() { Kq || (Kq = new Jq("yt.innertube")); return Kq }
    function Mq(a, b, c, d) { if (d) return null; d = Lq().get("nextId", !0) || 1; var e = Lq().get("requests", !0) || {}; e[d] = { method: a, request: b, authState: Iq(c), requestTime: Math.round(Up()) }; Lq().set("nextId", d + 1, 86400, !0); Lq().set("requests", e, 86400, !0); return d }
    function Nq(a) { var b = Lq().get("requests", !0) || {}; delete b[a]; Lq().set("requests", b, 86400, !0) }
    function Oq(a) { var b = Lq().get("requests", !0); if (b) { for (var c in b) { var d = b[c]; if (!(6E4 > Math.round(Up()) - d.requestTime)) { var e = d.authState, f = Iq(Hq(!1)); Jb(e, f) && (e = d.request, "requestTimeMs" in e && (e.requestTimeMs = Math.round(Up())), pq(a, d.method, e, {})); delete b[c] } } Lq().set("requests", b, 86400, !0) } }
    ; function Pq() { }
    ; var Qq = function () { var a; return function () { a || (a = new Jq("ytidb")); return a } }();
    function Rq() { var a; return null === (a = Qq()) || void 0 === a ? void 0 : a.get("LAST_RESULT_ENTRY_KEY", !0) }
    function Sq(a) { this.i = void 0 === a ? !1 : a; (a = Rq()) || (a = { hasSucceededOnce: this.i }); this.j = a; var b, c; null !== (b = Qq()) && void 0 !== b && b.i && (b = { hasSucceededOnce: this.j.hasSucceededOnce || this.i }, null === (c = Qq()) || void 0 === c ? void 0 : c.set("LAST_RESULT_ENTRY_KEY", b, 2592E3, !0)) }
    Sq.prototype.isSupported = function () { return this.i }; var Tq = [], Uq, Vq = !1; function Wq(a) { Vq || (Uq ? Uq.Ag(a) : (Tq.push({ type: "ERROR", payload: a }), 10 < Tq.length && Tq.shift())) }
    function Xq(a, b) { Vq || (Uq ? Uq.logEvent(a, b) : (Tq.push({ type: "EVENT", eventType: a, payload: b }), 10 < Tq.length && Tq.shift())) }
    ; function Yq(a, b) { for (var c = [], d = 1; d < arguments.length; ++d)c[d - 1] = arguments[d]; d = Error.call(this, a); this.message = d.message; "stack" in d && (this.stack = d.stack); this.args = [].concat(ia(c)) }
    q(Yq, Error); function Zq(a) { if (void 0 !== J("DATASYNC_ID", void 0)) return J("DATASYNC_ID", void 0); throw new Yq("Datasync ID not set", void 0 === a ? "unknown" : a); }
    ; function $q(a) { if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'"); }
    function ar(a) { return a.substr(0, a.indexOf(":")) || a }
    ; var br = {}, cr = (br.AUTH_INVALID = "No user identifier specified.", br.EXPLICIT_ABORT = "Transaction was explicitly aborted.", br.IDB_NOT_SUPPORTED = "IndexedDB is not supported.", br.MISSING_INDEX = "Index not created.", br.MISSING_OBJECT_STORE = "Object store not created.", br.DB_DELETED_BY_MISSING_OBJECT_STORE = "Database is deleted because an expected object store was not created.", br.UNKNOWN_ABORT = "Transaction was aborted for unknown reasons.", br.QUOTA_EXCEEDED = "The current transaction exceeded its quota limitations.",
        br.QUOTA_MAYBE_EXCEEDED = "The current transaction may have failed because of exceeding quota limitations.", br.EXECUTE_TRANSACTION_ON_CLOSED_DB = "Can't start a transaction on a closed database", br.INCOMPATIBLE_DB_VERSION = "The binary is incompatible with the database version", br), dr = {}, er = (dr.AUTH_INVALID = "ERROR", dr.EXECUTE_TRANSACTION_ON_CLOSED_DB = "WARNING", dr.EXPLICIT_ABORT = "IGNORED", dr.IDB_NOT_SUPPORTED = "ERROR", dr.MISSING_INDEX = "WARNING", dr.MISSING_OBJECT_STORE = "ERROR", dr.DB_DELETED_BY_MISSING_OBJECT_STORE =
            "WARNING", dr.QUOTA_EXCEEDED = "WARNING", dr.QUOTA_MAYBE_EXCEEDED = "WARNING", dr.UNKNOWN_ABORT = "WARNING", dr.INCOMPATIBLE_DB_VERSION = "WARNING", dr), fr = {}, gr = (fr.AUTH_INVALID = !1, fr.EXECUTE_TRANSACTION_ON_CLOSED_DB = !1, fr.EXPLICIT_ABORT = !1, fr.IDB_NOT_SUPPORTED = !1, fr.MISSING_INDEX = !1, fr.MISSING_OBJECT_STORE = !1, fr.DB_DELETED_BY_MISSING_OBJECT_STORE = !1, fr.QUOTA_EXCEEDED = !1, fr.QUOTA_MAYBE_EXCEEDED = !0, fr.UNKNOWN_ABORT = !0, fr.INCOMPATIBLE_DB_VERSION = !1, fr);
    function hr(a, b, c, d, e) { b = void 0 === b ? {} : b; c = void 0 === c ? cr[a] : c; d = void 0 === d ? er[a] : d; e = void 0 === e ? gr[a] : e; Yq.call(this, c, Object.assign({ name: "YtIdbKnownError", isSw: void 0 === self.document, isIframe: self !== self.top, type: a }, b)); this.type = a; this.message = c; this.level = d; this.i = e; Object.setPrototypeOf(this, hr.prototype) }
    q(hr, Yq); function ir(a) { hr.call(this, "MISSING_OBJECT_STORE", { Gg: a }, cr.MISSING_OBJECT_STORE); Object.setPrototypeOf(this, ir.prototype) }
    q(ir, hr); function jr(a, b) { var c = Error.call(this); this.message = c.message; "stack" in c && (this.stack = c.stack); this.index = a; this.objectStore = b; Object.setPrototypeOf(this, jr.prototype) }
    q(jr, Error); var kr = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];
    function lr(a, b, c, d) {
        b = ar(b); var e = a instanceof Error ? a : Error("Unexpected error: " + a); if (e instanceof hr) return e; if ("QuotaExceededError" === e.name) return new hr("QUOTA_EXCEEDED", { objectStoreNames: c, dbName: b }); if (Se && "UnknownError" === e.name) return new hr("QUOTA_MAYBE_EXCEEDED", { objectStoreNames: c, dbName: b }); if (e instanceof jr) return new hr("MISSING_INDEX", { dbName: b, dbVersion: d, objectStore: e.objectStore, index: e.index }); if ("InvalidStateError" === e.name && kr.some(function (f) { return e.message.includes(f) })) return new hr("EXECUTE_TRANSACTION_ON_CLOSED_DB",
            {
                objectStoreNames: c,
                dbName: b
            }); if ("AbortError" === e.name) return new hr("UNKNOWN_ABORT", { objectStoreNames: c, dbName: b }, e.message); e.args = [{ name: "IdbError", vj: e.name, dbName: b, objectStoreNames: c }]; e.level = "WARNING"; return e
    }
    function mr(a, b, c) { return new hr("IDB_NOT_SUPPORTED", { context: { caller: a, publicName: b, version: c } }) }
    ; function nr(a) { if (!a) throw Error(); throw a; }
    function or(a) { return a }
    function pr(a) { this.i = a }
    function qr(a) {
        function b(e) { if ("PENDING" === d.state.status) { d.state = { status: "REJECTED", reason: e }; e = p(d.onRejected); for (var f = e.next(); !f.done; f = e.next())f = f.value, f() } }
        function c(e) { if ("PENDING" === d.state.status) { d.state = { status: "FULFILLED", value: e }; e = p(d.i); for (var f = e.next(); !f.done; f = e.next())f = f.value, f() } }
        var d = this; this.state = { status: "PENDING" }; this.i = []; this.onRejected = []; a = a.i; try { a(c, b) } catch (e) { b(e) }
    }
    qr.all = function (a) { return new qr(new pr(function (b, c) { var d = [], e = a.length; 0 === e && b(d); for (var f = { lb: 0 }; f.lb < a.length; f = { lb: f.lb }, ++f.lb)qr.resolve(a[f.lb]).then(function (g) { return function (h) { d[g.lb] = h; e--; 0 === e && b(d) } }(f)).catch(function (g) { c(g) }) })) };
    qr.resolve = function (a) { return new qr(new pr(function (b, c) { a instanceof qr ? a.then(b, c) : b(a) })) };
    qr.reject = function (a) { return new qr(new pr(function (b, c) { c(a) })) };
    qr.prototype.then = function (a, b) { var c = this, d = null !== a && void 0 !== a ? a : or, e = null !== b && void 0 !== b ? b : nr; return new qr(new pr(function (f, g) { "PENDING" === c.state.status ? (c.i.push(function () { rr(c, c, d, f, g) }), c.onRejected.push(function () { sr(c, c, e, f, g) })) : "FULFILLED" === c.state.status ? rr(c, c, d, f, g) : "REJECTED" === c.state.status && sr(c, c, e, f, g) })) };
    qr.prototype.catch = function (a) { return this.then(void 0, a) };
    function rr(a, b, c, d, e) { try { if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled."); var f = c(a.state.value); f instanceof qr ? tr(a, b, f, d, e) : d(f) } catch (g) { e(g) } }
    function sr(a, b, c, d, e) { try { if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected."); var f = c(a.state.reason); f instanceof qr ? tr(a, b, f, d, e) : d(f) } catch (g) { e(g) } }
    function tr(a, b, c, d, e) { b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(function (f) { f instanceof qr ? tr(a, b, f, d, e) : d(f) }, function (f) { e(f) }) }
    ; function ur(a, b, c) {
        function d() { c(a.error); f() }
        function e() { b(a.result); f() }
        function f() { try { a.removeEventListener("success", e), a.removeEventListener("error", d) } catch (g) { } }
        a.addEventListener("success", e); a.addEventListener("error", d)
    }
    function vr(a) { return new Promise(function (b, c) { ur(a, b, c) }) }
    function wr(a) { return new qr(new pr(function (b, c) { ur(a, b, c) })) }
    ; function xr(a, b) {
        return new qr(new pr(function (c, d) {
            function e() { var f = a ? b(a) : null; f ? f.then(function (g) { a = g; e() }, d) : c() }
            e()
        }))
    }
    ; function yr(a, b) { this.i = a; this.options = b; this.transactionCount = 0; this.l = Math.round(Up()); this.j = !1 }
    k = yr.prototype; k.add = function (a, b, c) { return zr(this, [a], { mode: "readwrite", sa: !0 }, function (d) { return d.objectStore(a).add(b, c) }) };
    k.clear = function (a) { return zr(this, [a], { mode: "readwrite", sa: !0 }, function (b) { return b.objectStore(a).clear() }) };
    k.close = function () { var a; this.i.close(); (null === (a = this.options) || void 0 === a ? 0 : a.closed) && this.options.closed() };
    k.count = function (a, b) { return zr(this, [a], { mode: "readonly", sa: !0 }, function (c) { return c.objectStore(a).count(b) }) };
    k.delete = function (a, b) { return zr(this, [a], { mode: "readwrite", sa: !0 }, function (c) { return c.objectStore(a).delete(b) }) };
    k.get = function (a, b) { return zr(this, [a], { mode: "readonly", sa: !0 }, function (c) { return c.objectStore(a).get(b) }) };
    function Ar(a, b) { return zr(a, ["LogsRequestsStore"], { mode: "readwrite", sa: !0 }, function (c) { c = c.objectStore("LogsRequestsStore"); return wr(c.i.put(b, void 0)) }) }
    k.objectStoreNames = function () { return Array.from(this.i.objectStoreNames) };
    function zr(a, b, c, d) {
        return Md(a, function f() {
            var g = this, h, l, m, n, t, w, v, C, O, H, X, qa; return Da(f, function (S) {
                switch (S.i) {
                    case 1: var Pa = { mode: "readonly", sa: !1, tag: "IDB_TRANSACTION_TAG_UNKNOWN" }; "string" === typeof c ? Pa.mode = c : Object.assign(Pa, c); h = Pa; g.transactionCount++; l = h.sa ? 3 : 1; m = 0; case 2: if (n) { S.ca(3); break } m++; t = Math.round(Up()); ua(S, 4); w = g.i.transaction(b, h.mode); Pa = new Br(w); Pa = Cr(Pa, d); return r(S, Pa, 6); case 6: return v = S.j, C = Math.round(Up()), Dr(g, t, C, m, void 0, b.join(), h), S.return(v); case 4: O = va(S);
                        H = Math.round(Up()); X = lr(O, g.i.name, b.join(), g.i.version); if ((qa = X instanceof hr && !X.i) || m >= l) Dr(g, t, H, m, X, b.join(), h), n = X; S.ca(2); break; case 3: return S.return(Promise.reject(n))
                }
            })
        })
    }
    function Dr(a, b, c, d, e, f, g) { b = c - b; e ? (e instanceof hr && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && Xq("QUOTA_EXCEEDED", { dbName: ar(a.i.name), objectStoreNames: f, transactionCount: a.transactionCount, transactionMode: g.mode }), e instanceof hr && "UNKNOWN_ABORT" === e.type && (c -= a.l, 0 > c && c >= Math.pow(2, 31) && (c = 0), Xq("TRANSACTION_UNEXPECTEDLY_ABORTED", { objectStoreNames: f, transactionDuration: b, transactionCount: a.transactionCount, dbDuration: c }), a.j = !0), Er(a, !1, d, f, b, g.tag), Wq(e)) : Er(a, !0, d, f, b, g.tag) }
    function Er(a, b, c, d, e, f) { Xq("TRANSACTION_ENDED", { objectStoreNames: d, connectionHasUnknownAbortedTransaction: a.j, duration: e, isSuccessful: b, tryCount: c, tag: void 0 === f ? "IDB_TRANSACTION_TAG_UNKNOWN" : f }) }
    k.getName = function () { return this.i.name };
    function Fr(a) { this.i = a }
    k = Fr.prototype; k.add = function (a, b) { return wr(this.i.add(a, b)) };
    k.autoIncrement = function () { return this.i.autoIncrement };
    k.clear = function () { return wr(this.i.clear()).then(function () { }) };
    k.count = function (a) { return wr(this.i.count(a)) };
    function Gr(a, b) { return Hr(a, { query: b }, function (c) { return c.delete().then(function () { return c.continue() }) }).then(function () { }) }
    k.delete = function (a) { return a instanceof IDBKeyRange ? Gr(this, a) : wr(this.i.delete(a)) };
    k.get = function (a) { return wr(this.i.get(a)) };
    k.index = function (a) { try { return new Ir(this.i.index(a)) } catch (b) { if (b instanceof Error && "NotFoundError" === b.name) throw new jr(a, this.i.name); throw b; } };
    k.getName = function () { return this.i.name };
    k.keyPath = function () { return this.i.keyPath };
    function Hr(a, b, c) { a = a.i.openCursor(b.query, b.direction); return Jr(a).then(function (d) { return xr(d, c) }) }
    function Br(a) {
        var b = this; this.i = a; this.l = new Map; this.j = !1; this.done = new Promise(function (c, d) {
            b.i.addEventListener("complete", function () { c() });
            b.i.addEventListener("error", function (e) { e.currentTarget === e.target && d(b.i.error) });
            b.i.addEventListener("abort", function () { var e = b.i.error; if (e) d(e); else if (!b.j) { e = hr; for (var f = b.i.objectStoreNames, g = [], h = 0; h < f.length; h++) { var l = f.item(h); if (null === l) throw Error("Invariant: item in DOMStringList is null"); g.push(l) } e = new e("UNKNOWN_ABORT", { objectStoreNames: g.join(), dbName: b.i.db.name, mode: b.i.mode }); d(e) } })
        })
    }
    function Cr(a, b) {
        var c = new Promise(function (d, e) { try { b(a).then(function (f) { d(f) }).catch(e) } catch (f) { e(f), a.abort() } });
        return Promise.all([c, a.done]).then(function (d) { return p(d).next().value })
    }
    Br.prototype.abort = function () { this.i.abort(); this.j = !0; throw new hr("EXPLICIT_ABORT"); };
    Br.prototype.objectStore = function (a) { a = this.i.objectStore(a); var b = this.l.get(a); b || (b = new Fr(a), this.l.set(a, b)); return b };
    function Ir(a) { this.i = a }
    k = Ir.prototype; k.count = function (a) { return wr(this.i.count(a)) };
    k.delete = function (a) { return Kr(this, { query: a }, function (b) { return b.delete().then(function () { return b.continue() }) }) };
    k.get = function (a) { return wr(this.i.get(a)) };
    k.getKey = function (a) { return wr(this.i.getKey(a)) };
    k.keyPath = function () { return this.i.keyPath };
    k.unique = function () { return this.i.unique };
    function Kr(a, b, c) { a = a.i.openCursor(void 0 === b.query ? null : b.query, void 0 === b.direction ? "next" : b.direction); return Jr(a).then(function (d) { return xr(d, c) }) }
    function Lr(a, b) { this.request = a; this.cursor = b }
    function Jr(a) { return wr(a).then(function (b) { return b ? new Lr(a, b) : null }) }
    k = Lr.prototype; k.advance = function (a) { this.cursor.advance(a); return Jr(this.request) };
    k.continue = function (a) { this.cursor.continue(a); return Jr(this.request) };
    k.delete = function () { return wr(this.cursor.delete()).then(function () { }) };
    k.getKey = function () { return this.cursor.key };
    k.getValue = function () { return this.cursor.value };
    k.update = function (a) { return wr(this.cursor.update(a)) }; function Mr(a, b, c) {
        return new Promise(function (d, e) {
            function f() { w || (w = new yr(g.result, { closed: t })); return w }
            var g = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a); var h = c.blocked, l = c.blocking, m = c.Nh, n = c.upgrade, t = c.closed, w; g.addEventListener("upgradeneeded", function (v) {
                try {
                    if (null === v.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null"); if (null === g.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null"); v.dataLoss && "none" !== v.dataLoss && Xq("IDB_DATA_CORRUPTED", { reason: v.dataLossMessage || "unknown reason", dbName: ar(a) }); var C = f(), O = new Br(g.transaction);
                    n && n(C, function (H) { return v.oldVersion < H && v.newVersion >= H }, O);
                    O.done.catch(function (H) { e(H) })
                } catch (H) { e(H) }
            });
            g.addEventListener("success", function () {
                var v = g.result; l && v.addEventListener("versionchange", function () { l(f()) });
                v.addEventListener("close", function () { Xq("IDB_UNEXPECTEDLY_CLOSED", { dbName: ar(a), dbVersion: v.version }); m && m() });
                d(f())
            });
            g.addEventListener("error", function () { e(g.error) });
            h && g.addEventListener("blocked", function () { h() })
        })
    }
    function Nr(a, b, c) { c = void 0 === c ? {} : c; return Mr(a, b, c) }
    function Or(a, b) {
        b = void 0 === b ? {} : b; return Md(this, function d() {
            var e, f, g; return Da(d, function (h) {
                e = self.indexedDB.deleteDatabase(a); f = b; (g = f.blocked) && e.addEventListener("blocked", function () { g() });
                return r(h, vr(e), 0)
            })
        })
    }
    ; function Pr(a, b) { this.name = a; this.options = b; this.l = !0; this.j = !1 }
    Pr.prototype.qc = function (a, b, c) { c = void 0 === c ? {} : c; return Nr(a, b, c) };
    Pr.prototype.delete = function (a) { a = void 0 === a ? {} : a; return Or(this.name, a) };
    function Qr(a, b) { return new hr("INCOMPATIBLE_DB_VERSION", { dbName: a.name, oldVersion: a.options.version, newVersion: b }) }
    Pr.prototype.open = function () {
        function a() {
            return Md(c, function g() {
                var h = this, l, m, n, t, w; return Da(g, function (v) {
                    switch (v.i) {
                        case 1: return ua(v, 2), r(v, h.qc(h.name, h.options.version, e), 4); case 4: l = v.j; a: { var C = h.options; for (var O = p(Object.keys(C.Yc)), H = O.next(); !H.done; H = O.next()) { H = H.value; var X = C.Yc[H], qa = void 0 === X.Dh ? Number.MAX_VALUE : X.Dh; if (l.i.version >= X.Hd && !(l.i.version >= qa) && !l.i.objectStoreNames.contains(H)) { C = H; break a } } C = void 0 } m = C; if (void 0 === m) { v.ca(5); break } if (h.j) { v.ca(6); break } h.j =
                            !0; return r(v, h.delete(), 7); case 7: return Wq(new hr("DB_DELETED_BY_MISSING_OBJECT_STORE", { dbName: h.name, Gg: m })), v.return(a()); case 6: throw new ir(m); case 5: return v.return(l); case 2: n = va(v); if (n instanceof DOMException ? "VersionError" !== n.name : "DOMError" in self && n instanceof DOMError ? "VersionError" !== n.name : !(n instanceof Object && "message" in n) || "An attempt was made to open a database using a lower version than the existing version." !== n.message) { v.ca(8); break } return r(v, h.qc(h.name, void 0, Object.assign(Object.assign({},
                                e), { upgrade: void 0 })), 9); case 9: t = v.j; w = t.i.version; if (void 0 !== h.options.version && w > h.options.version + 1) throw t.close(), h.l = !1, Qr(h, w); return v.return(t); case 8: throw b(), n;
                    }
                })
            })
        }
        function b() { c.i === d && (c.i = void 0) }
        var c = this; if (!this.l) throw Qr(this); if (this.i) return this.i; var d, e = {
            blocking: function (f) { f.close() },
            closed: b, Nh: b, upgrade: this.options.upgrade
        }; return this.i = d = a()
    }; var Rr = new Pr("YtIdbMeta", { Yc: { databases: { Hd: 1 } }, upgrade: function (a, b) { b(1) && a.i.createObjectStore("databases", { keyPath: "actualName" }) } });
    function Sr(a) { return Md(this, function c() { var d; return Da(c, function (e) { if (1 == e.i) return r(e, Rr.open(), 2); d = e.j; return e.return(zr(d, ["databases"], { sa: !0, mode: "readwrite" }, function (f) { var g = f.objectStore("databases"); return g.get(a.actualName).then(function (h) { if (h ? a.actualName !== h.actualName || a.publicName !== h.publicName || a.userIdentifier !== h.userIdentifier : 1) return wr(g.i.put(a, void 0)).then(function () { }) }) })) }) }) }
    function Tr(a) { return Md(this, function c() { var d; return Da(c, function (e) { if (1 == e.i) return a ? r(e, Rr.open(), 2) : e.return(); d = e.j; return e.return(d.delete("databases", a)) }) }) }
    function Ur(a) { return Md(this, function c() { var d, e; return Da(c, function (f) { return 1 == f.i ? (d = [], r(f, Rr.open(), 2)) : 3 != f.i ? (e = f.j, r(f, zr(e, ["databases"], { sa: !0, mode: "readonly" }, function (g) { d.length = 0; return Hr(g.objectStore("databases"), {}, function (h) { a(h.getValue()) && d.push(h.getValue()); return h.continue() }) }), 3)) : f.return(d) }) }) }
    function Vr(a) { return Ur(function (b) { return b.publicName === a && void 0 !== b.userIdentifier }) }
    function Wr(a) { return Ur(function (b) { return b.publicName === a && void 0 === b.userIdentifier }) }
    function Xr(a) { return Ur(function (b) { return b.userIdentifier === a }) }
    function Yr(a) { return Ur(function (b) { return !b.userIdentifier || !a.includes(b.userIdentifier) }) }
    function Zr(a) {
        return Md(this, function c() {
            var d, e; return Da(c, function (f) {
                if (1 == f.i) return d = Zq("YtIdbMeta"), r(f, Ur(function (g) { return g.publicName === a && g.userIdentifier === d }), 2);
                e = f.j; return f.return(0 < e.length)
            })
        })
    }
    ; var $r, as = new Pq(new function () { }), bs = !1;
    function cs() {
        return Md(this, function b() {
            var c, d, e; return Da(b, function (f) {
                switch (f.i) {
                    case 1: c = Rq(); if (null === c || void 0 === c ? 0 : c.hasSucceededOnce) return f.return(new Sq(!0)); var g; if (g = bs || vo) g = /WebKit\/([0-9]+)/.exec(Jc), g = !!(g && 600 <= parseInt(g[1], 10)); g && (g = /WebKit\/([0-9]+)/.exec(Jc), g = !(g && 602 <= parseInt(g[1], 10))); if (g || qe) return f.return(new Sq(!1)); try { if (d = self, !(d.indexedDB && d.IDBIndex && d.IDBKeyRange && d.IDBObjectStore)) return f.return(new Sq(!1)) } catch (h) { return f.return(new Sq(!1)) } if (!("IDBTransaction" in
                        self && "objectStoreNames" in IDBTransaction.prototype)) return f.return(new Sq(!1)); ua(f, 2); e = { actualName: "yt-idb-test-do-not-use", publicName: "yt-idb-test-do-not-use", userIdentifier: void 0 }; return r(f, Sr(e), 4); case 4: return r(f, Tr("yt-idb-test-do-not-use"), 5); case 5: return f.return(new Sq(!0)); case 2: return va(f), f.return(new Sq(!1))
                }
            })
        })
    }
    function ds() { if (void 0 !== $r) return $r; Vq = !0; return $r = cs().then(function (a) { Vq = !1; return a.isSupported() }) }
    function es() { return ds().then(function (a) { return a ? as : void 0 }) }
    ; var fs = 0; function gs(a) { var b = this; fs || (fs = dp(function () { return Md(b, function d() { var e, f, g, h, l; return Da(d, function (m) { switch (m.i) { case 1: return r(m, es(), 2); case 2: e = m.j; if (!e) return m.return(); f = !0; ua(m, 3); return r(m, Yr(a), 5); case 5: g = m.j; if (!g.length) { f = !1; m.ca(6); break } h = g[0]; return r(m, Or(h.actualName), 7); case 7: return r(m, Tr(h.actualName), 6); case 6: m.i = 4; m.A = 0; break; case 3: l = va(m), Wq(l), f = !1; case 4: fp(fs), fs = 0, f && gs(a), m.i = 0 } }) }) })) }
    new function () { var a = this; this.promise = new Promise(function (b, c) { a.resolve = b; a.reject = c }) }; function hs(a) { try { Zq(); var b = !0 } catch (c) { b = !1 } if (!b) throw a = new hr("AUTH_INVALID", { dbName: a }), Wq(a), a; b = Zq(); return { actualName: a + ":" + b, publicName: a, userIdentifier: b } }
    function is(a, b, c, d) { return Md(this, function f() { var g, h, l, m; return Da(f, function (n) { switch (n.i) { case 1: return r(n, es(), 2); case 2: g = n.j; if (!g) throw h = mr("openDbImpl", a, b), Wq(h), h; $q(a); l = c ? { actualName: a, publicName: a, userIdentifier: void 0 } : hs(a); ua(n, 3); return r(n, Sr(l), 5); case 5: return r(n, Nr(l.actualName, b, d), 6); case 6: return n.return(n.j); case 3: return m = va(n), ua(n, 7), r(n, Tr(l.actualName), 9); case 9: n.i = 8; n.A = 0; break; case 7: va(n); case 8: throw m; } }) }) }
    function js(a, b, c) { c = void 0 === c ? {} : c; return is(a, b, !1, c) }
    function ks(a, b, c) { c = void 0 === c ? {} : c; return is(a, b, !0, c) }
    function ls(a, b) { b = void 0 === b ? {} : b; return Md(this, function d() { var e, f; return Da(d, function (g) { if (1 == g.i) return r(g, es(), 2); if (3 != g.i) { e = g.j; if (!e) return g.return(); $q(a); f = hs(a); return r(g, Or(f.actualName, b), 3) } return r(g, Tr(f.actualName), 0) }) }) }
    function ms(a, b) {
        var c = this; a = a.map(function (d) { return Md(c, function f() { return Da(f, function (g) { return 1 == g.i ? r(g, Or(d.actualName, b), 2) : r(g, Tr(d.actualName), 0) }) }) });
        return Promise.all(a).then(function () { })
    }
    function ns(a, b) { b = void 0 === b ? {} : b; return Md(this, function d() { var e; return Da(d, function (f) { if (1 == f.i) return r(f, es(), 2); if (3 != f.i) { e = f.j; if (!e) return f.return(); $q(a); return r(f, Or(a, b), 3) } return r(f, Tr(a), 0) }) }) }
    ; var os = {}; os.isSupported = ds; os.Qe = es; os.Vi = "yt-idb-test-do-not-use"; os.gi = !1; os.yg = ds; os.ji = {
        Ej: function (a) { bs = a },
        Bj: function () { $r = void 0 }
    };
    os.ni = yr; os.Ii = function () { };
    os.Pi = Fr; os.Yi = Br; os.Hi = Ir; os.oi = Lr; os.Oi = { nj: function () { return !1 } };
    os.qc = js; os.uj = ks; os.lj = ls; os.jj = function (a, b) { b = void 0 === b ? {} : b; return Md(this, function d() { var e, f; return Da(d, function (g) { if (1 == g.i) return r(g, es(), 2); if (3 != g.i) { e = g.j; if (!e) return g.return(); $q(a); return r(g, Vr(a), 3) } f = g.j; return r(g, ms(f, b), 0) }) }) };
    os.ij = function (a, b) { b = void 0 === b ? {} : b; return Md(this, function d() { var e, f; return Da(d, function (g) { if (1 == g.i) return r(g, es(), 2); if (3 != g.i) return (e = g.j) ? r(g, Xr(a), 3) : g.return(); f = g.j; return r(g, ms(f, b), 0) }) }) };
    os.kj = ns; os.Gj = function (a) { return Md(this, function c() { var d; return Da(c, function (e) { return 1 == e.i ? r(e, es(), 2) : (d = e.j) ? e.return(Zr(a)) : e.return(!1) }) }) };
    os.Fj = function (a) { return Md(this, function c() { var d, e; return Da(c, function (f) { if (1 == f.i) return r(f, es(), 2); if (3 != f.i) return (d = f.j) ? r(f, Wr(a), 3) : f.return(!1); e = f.j; return f.return(0 < e.length) }) }) };
    os.Df = qr; os.Oc = mr; os.bj = hr; os.ErrorType = { hi: "AUTH_INVALID", wi: "EXPLICIT_ABORT", Ai: "IDB_NOT_SUPPORTED", Ki: "MISSING_INDEX", Li: "MISSING_OBJECT_STORE", ri: "DB_DELETED_BY_MISSING_OBJECT_STORE", Zi: "UNKNOWN_ABORT", Cf: "QUOTA_EXCEEDED", Ri: "QUOTA_MAYBE_EXCEEDED", vi: "EXECUTE_TRANSACTION_ON_CLOSED_DB", Ci: "INCOMPATIBLE_DB_VERSION" }; os.EventType = { zi: "IDB_DATA_CORRUPTED", Bi: "IDB_UNEXPECTEDLY_CLOSED", Ei: "IS_SUPPORTED_COMPLETED", Cf: "QUOTA_EXCEEDED", Wi: "TRANSACTION_ENDED", Xi: "TRANSACTION_UNEXPECTEDLY_ABORTED" };
    os.yj = function (a) { for (Uq = a; 0 < Tq.length;)switch (a = Tq.shift(), a.type) { case "ERROR": Uq.Ag(a.payload); break; case "EVENT": Uq.logEvent(a.eventType, a.payload) } };
    os.hj = gs; os.oj = function (a, b) { return a + ":" + b };
    os.ti = Pq; function ps(a, b) { Pr.call(this, a, b); this.options = b; $q(a) }
    q(ps, Pr); function qs(a) { var b; return function () { b || (b = new ps("LogsDatabaseV2", a)); return b } }
    ps.prototype.qc = function (a, b, c) { c = void 0 === c ? {} : c; return (this.options.Xe ? ks : js)(a, b, Object.assign({}, c)) };
    ps.prototype.delete = function (a) { a = void 0 === a ? {} : a; return (this.options.Xe ? ns : ls)(this.name, a) }; var rs;
    function ss() {
        if (rs) return rs(); var a = {}; rs = qs({
            Yc: (a.LogsRequestsStore = { Hd: 2 }, a), Xe: !1, upgrade: function (b, c, d) { c(2) && b.i.createObjectStore("LogsRequestsStore", { keyPath: "id", autoIncrement: !0 }); c(3); c(5) && (d = d.objectStore("LogsRequestsStore"), d.i.indexNames.contains("newRequest") && d.i.deleteIndex("newRequest"), d.i.createIndex("newRequestV2", ["status", "interface", "timestamp"], { unique: !1 })); c(7) && b.i.objectStoreNames.contains("sapisid") && b.i.deleteObjectStore("sapisid"); c(9) && b.i.objectStoreNames.contains("SWHealthLog") && b.i.deleteObjectStore("SWHealthLog") },
            version: 9
        }); return rs()
    }
    ; function ts(a) { return Md(this, function c() { var d, e, f, g; return Da(c, function (h) { if (1 == h.i) return d = { startTime: Up(), transactionType: "YT_IDB_TRANSACTION_TYPE_WRITE" }, r(h, ss().open(), 2); if (3 != h.i) return e = h.j, f = Object.assign(Object.assign({}, a), { options: JSON.parse(JSON.stringify(a.options)), interface: J("INNERTUBE_CONTEXT_CLIENT_NAME", 0) }), r(h, Ar(e, f), 3); g = h.j; d.Ph = Up(); us(d); return h.return(g) }) }) }
    function vs() {
        return Md(this, function b() {
            var c, d, e, f, g, h, l; return Da(b, function (m) {
                if (1 == m.i) return c = { startTime: Up(), transactionType: "YT_IDB_TRANSACTION_TYPE_READ" }, r(m, ss().open(), 2); if (3 != m.i) return d = m.j, e = J("INNERTUBE_CONTEXT_CLIENT_NAME", 0), f = ["NEW", e, 0], g = ["NEW", e, Up()], h = IDBKeyRange.bound(f, g), l = void 0, r(m, zr(d, ["LogsRequestsStore"], { mode: "readwrite", sa: !0 }, function (n) {
                    return Kr(n.objectStore("LogsRequestsStore").index("newRequestV2"), { query: h, direction: "prev" }, function (t) {
                        t.getValue() &&
                        (l = t.getValue(), l.status = "QUEUED", t.update(l))
                    })
                }), 3);
                c.Ph = Up(); us(c); return m.return(l)
            })
        })
    }
    function ws(a) { return Md(this, function c() { var d; return Da(c, function (e) { if (1 == e.i) return r(e, ss().open(), 2); d = e.j; return e.return(zr(d, ["LogsRequestsStore"], { mode: "readwrite", sa: !0 }, function (f) { var g = f.objectStore("LogsRequestsStore"); return g.get(a).then(function (h) { if (h) return h.status = "QUEUED", wr(g.i.put(h, void 0)).then(function () { return h }) }) })) }) }) }
    function xs(a) { return Md(this, function c() { var d; return Da(c, function (e) { if (1 == e.i) return r(e, ss().open(), 2); d = e.j; return e.return(zr(d, ["LogsRequestsStore"], { mode: "readwrite", sa: !0 }, function (f) { var g = f.objectStore("LogsRequestsStore"); return g.get(a).then(function (h) { return h ? (h.status = "NEW", h.sendCount += 1, wr(g.i.put(h, void 0)).then(function () { return h })) : os.Df.resolve(void 0) }) })) }) }) }
    function ys(a) { return Md(this, function c() { var d; return Da(c, function (e) { if (1 == e.i) return r(e, ss().open(), 2); d = e.j; return e.return(d.delete("LogsRequestsStore", a)) }) }) }
    function us(a) { N("nwl_csi_killswitch") || .01 >= Math.random() && kp("nwl_transaction_latency_payload", a) }
    ; var zs; function As() { zs || (zs = new Jq("yt.offline")); return zs }
    function Bs(a) { if (N("offline_error_handling")) { var b = As().get("errors", !0) || {}; b[a.message] = { name: a.name, stack: a.stack }; a.level && (b[a.message].level = a.level); As().set("errors", b, 2592E3, !0) } }
    ; var Cs = Wn("network_polling_interval", 3E4); function Ds() { lj.call(this); this.B = 0; this.C = this.j = !1; this.i = this.Uc(); Es(this); Fs(this) }
    q(Ds, lj); function Gs() { if (!Ds.i) { var a = y("yt.networkStatusManager.instance") || new Ds; x("yt.networkStatusManager.instance", a, void 0); Ds.i = a } return Ds.i }
    k = Ds.prototype; k.Va = function () { return this.i };
    k.Hg = function (a) { this.j = !0; if (void 0 === a ? 0 : a) this.B || Hs(this) };
    k.Uc = function () { var a = window.navigator.onLine; return void 0 === a ? !0 : a };
    k.Jf = function () { this.C = !0 };
    k.ib = function (a, b) { return lj.prototype.ib.call(this, a, b) };
    function Fs(a) { window.addEventListener("online", function () { return Md(a, function c() { var d = this; return Da(c, function (e) { if (1 == e.i) return r(e, d.kb(), 2); if (d.C && N("offline_error_handling")) { var f = As().get("errors", !0); if (f) { for (var g in f) if (f[g]) { var h = new Yq(g, "sent via offline_errors"); h.name = f[g].name; h.stack = f[g].stack; h.level = f[g].level; tn(h) } As().set("errors", {}, 2592E3, !0) } } e.i = 0 }) }) }) }
    function Es(a) { window.addEventListener("offline", function () { return Md(a, function c() { var d = this; return Da(c, function (e) { return r(e, d.kb(), 0) }) }) }) }
    function Hs(a) { a.B = bp(function () { return Md(a, function c() { var d = this; return Da(c, function (e) { if (1 == e.i) return d.i ? d.Uc() || !d.j ? e.ca(3) : r(e, d.kb(), 3) : r(e, d.kb(), 3); Hs(d); e.i = 0 }) }) }, Cs) }
    k.kb = function (a) {
        var b = this; return this.o ? this.o : this.o = new Promise(function (c) {
            return Md(b, function e() {
                var f, g, h, l = this; return Da(e, function (m) {
                    switch (m.i) {
                        case 1: return f = window.AbortController ? new window.AbortController : void 0, g = null === f || void 0 === f ? void 0 : f.signal, h = !1, ua(m, 2, 3), f && (l.A = dp(function () { f.abort() }, a || 2E4)), r(m, fetch("/generate_204", {
                            method: "HEAD",
                            signal: g
                        }), 5); case 5: h = !0; case 3: wa(m); l.o = void 0; l.A && fp(l.A); h !== l.i && (l.i = h, l.i && l.j ? mj(l, "ytnetworkstatus-online") : l.j && mj(l, "ytnetworkstatus-offline")); c(h); xa(m); break; case 2: va(m), h = !1, m.ca(3)
                    }
                })
            })
        })
    };
    Ds.prototype.sendNetworkCheckRequest = Ds.prototype.kb; Ds.prototype.listen = Ds.prototype.ib; Ds.prototype.enableErrorFlushing = Ds.prototype.Jf; Ds.prototype.getWindowStatus = Ds.prototype.Uc; Ds.prototype.monitorNetworkStatusChange = Ds.prototype.Hg; Ds.prototype.isNetworkAvailable = Ds.prototype.Va; Ds.getInstance = Gs; function Is(a) {
        a = void 0 === a ? {} : a; lj.call(this); var b = this; this.j = this.A = 0; this.i = Gs(); var c = y("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i); c && c(a.Kf); a.Bg && (c = y("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i)) && c(); if (c = y("yt.networkStatusManager.instance.listen").bind(this.i)) a.tc ? (this.tc = a.tc, c("ytnetworkstatus-online", function () { Js(b, "publicytnetworkstatus-online") }), c("ytnetworkstatus-offline", function () { Js(b, "publicytnetworkstatus-offline") })) :
            (c("ytnetworkstatus-online", function () { mj(b, "publicytnetworkstatus-online") }), c("ytnetworkstatus-offline", function () { mj(b, "publicytnetworkstatus-offline") }))
    }
    q(Is, lj); Is.prototype.Va = function () { var a = y("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.i); return a ? a() : !0 };
    Is.prototype.kb = function (a) { return Md(this, function c() { var d = this, e; return Da(c, function (f) { return (e = y("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(d.i)) ? f.return(e(a)) : f.return(!0) }) }) };
    function Js(a, b) { a.tc ? a.j ? (fp(a.A), a.A = dp(function () { a.o !== b && (mj(a, b), a.o = b, a.j = Up()) }, a.tc - (Up() - a.j))) : (mj(a, b), a.o = b, a.j = Up()) : mj(a, b) }
    ; var Ks = 0, Ls = 0, Ms, Ns = u.ytNetworklessLoggingInitializationOptions || { isNwlInitialized: !1, databaseToken: void 0, potentialEsfErrorCounter: Ls, isIdbSupported: !1 }; x("ytNetworklessLoggingInitializationOptions", Ns, void 0); function Os(a, b) {
        function c(d) {
            var e = Ps().Va(); if (!Qs() || !d || e && N("vss_networkless_bypass_write")) Rs(a, b); else {
                var f = { url: a, options: b, timestamp: Up(), status: "NEW", sendCount: 0 }; ts(f).then(function (g) { f.id = g; Ps().Va() && Ss(f) }).catch(function (g) {
                    Ss(f);
                    Ps().Va() ? tn(g) : Bs(g)
                })
            }
        }
        b = void 0 === b ? {} : b; N("skip_is_supported_killswitch") ? (0, os.Qe)().then(function (d) { c(d) }) : c(Ts())
    }
    function Us(a, b) {
        function c(d) {
            if (Qs() && d) {
                var e = { url: a, options: b, timestamp: Up(), status: "NEW", sendCount: 0 }, f = !1, g = b.onSuccess ? b.onSuccess : function () { };
                e.options.onSuccess = function (h, l) { void 0 !== e.id ? ys(e.id) : f = !0; g(h, l) };
                Rs(e.url, e.options); ts(e).then(function (h) { e.id = h; f && ys(e.id) }).catch(function (h) { Ps().Va() ? tn(h) : Bs(h) })
            } else Rs(a, b)
        }
        b = void 0 === b ? {} : b; N("skip_is_supported_killswitch") ? (0, os.Qe)().then(function (d) { c(d) }) : c(Ts())
    }
    function Vs() { var a = this; if (!Ts()) throw (0, os.Oc)("throttleSend"); Ks || (Ks = dp(function () { return Md(a, function c() { var d; return Da(c, function (e) { if (1 == e.i) return r(e, vs(), 2); if (3 != e.i) return d = e.j, d ? r(e, Ss(d), 3) : (fp(Ks), Ks = 0, e.return()); Ks && (Ks = 0, Vs()); e.i = 0 }) }) }, 100)) }
    function Ss(a) {
        return Md(this, function c() {
            var d, e, f; return Da(c, function (g) {
                switch (g.i) {
                    case 1: d = Ts(); if (!d) throw e = (0, os.Oc)("immediateSend"), e; if (void 0 === a.id) { g.ca(2); break } return r(g, ws(a.id), 3); case 3: (f = g.j) ? a = f : un(Error("The request cannot be found in the database.")); case 2: var h = a.timestamp; if (!(2592E6 <= Up() - h)) { g.ca(4); break } un(Error("Networkless Logging: Stored logs request expired age limit")); if (void 0 === a.id) { g.ca(5); break } return r(g, ys(a.id), 5); case 5: return g.return(); case 4: a.skipRetry ||
                        (a = Ws(a)); h = a; var l, m; if (null === (m = null === (l = null === h || void 0 === h ? void 0 : h.options) || void 0 === l ? void 0 : l.postParams) || void 0 === m ? 0 : m.requestTimeMs) h.options.postParams.requestTimeMs = Math.round(Up()); a = h; if (!a) { g.ca(0); break } if (!a.skipRetry || void 0 === a.id) { g.ca(8); break } return r(g, ys(a.id), 8); case 8: Rs(a.url, a.options, !!a.skipRetry), g.i = 0
                }
            })
        })
    }
    function Ws(a) {
        var b = this; if (!Ts()) throw (0, os.Oc)("updateRequestHandlers"); var c = a.options.onError ? a.options.onError : function () { };
        a.options.onError = function (e, f) {
            return Md(b, function h() {
                return Da(h, function (l) {
                    switch (l.i) {
                        case 1: if (!((y("ytNetworklessLoggingInitializationOptions") ? Ns.potentialEsfErrorCounter : Ls) <= Wn("potential_esf_error_limit", 10))) { l.ca(2); break } return r(l, Ps().kb(), 3); case 3: if (Ps().Va()) y("ytNetworklessLoggingInitializationOptions") && Ns.potentialEsfErrorCounter++, Ls++; else return c(e, f), l.return(); case 2: if (void 0 === (null === a || void 0 === a ? void 0 : a.id)) { l.ca(4); break } return 1 > a.sendCount ? r(l, xs(a.id), 8) : r(l,
                            ys(a.id), 4); case 8: dp(function () { Ps().Va() && Vs() }, 5E3);
                        case 4: c(e, f), l.i = 0
                    }
                })
            })
        };
        var d = a.options.onSuccess ? a.options.onSuccess : function () { };
        a.options.onSuccess = function (e, f) { return Md(b, function h() { return Da(h, function (l) { if (1 == l.i) return void 0 === (null === a || void 0 === a ? void 0 : a.id) ? l.ca(2) : r(l, ys(a.id), 2); d(e, f); l.i = 0 }) }) };
        return a
    }
    function Ps() { Ms || (Ms = new Is({ Bg: !0, Kf: !0 })); return Ms }
    function Rs(a, b, c) { if (N("networkless_with_beacon")) { var d = ["method", "postBody"]; if (Object.keys(b).length > d.length) c = !0; else { c = 0; d = p(d); for (var e = d.next(); !e.done; e = d.next())b.hasOwnProperty(e.value) && c++; c = Object.keys(b).length !== c } c ? ho(a, b) : Co(a, void 0, b.postBody) } else c && 0 === Object.keys(b).length ? zo(a) : ho(a, b) }
    function Qs() { return y("ytNetworklessLoggingInitializationOptions") ? Ns.isNwlInitialized : !1 }
    function Ts() { return y("ytNetworklessLoggingInitializationOptions") ? Ns.databaseToken : void 0 }
    ; function Xs(a) { var b = this; this.config_ = null; a ? this.config_ = a : Gq() && (this.config_ = mq()); bp(function () { Oq(b) }, 5E3) }
    Xs.prototype.isReady = function () { !this.config_ && Gq() && (this.config_ = mq()); return !!this.config_ };
    function pq(a, b, c, d) {
        function e(w) {
            w = void 0 === w ? !1 : w; var v; if (d.retry && "www.youtube-nocookie.com" != h && (w || (v = Mq(b, c, m, l)), v)) {
                var C = g.onSuccess, O = g.onFetchSuccess; g.onSuccess = function (H, X) { Nq(v); C(H, X) };
                c.onFetchSuccess = function (H, X) { Nq(v); O(H, X) }
            } try { w && d.retry && !d.ze.bypassNetworkless ? (g.method = "POST", d.ze.writeThenSend ? Os(t, g) : Us(t, g)) : (g.method = "POST", g.postParams || (g.postParams = {}), ho(t, g)) } catch (H) {
                if ("InvalidAccessError" == H.name) v && (Nq(v), v = 0), un(Error("An extension is blocking network request."));
                else throw H;
            } v && bp(function () { Oq(a) }, 5E3)
        }
        !J("VISITOR_DATA") && "visitor_id" !== b && .01 > Math.random() && un(new Yq("Missing VISITOR_DATA when sending innertube request.", b, c, d)); if (!a.isReady()) { var f = new Yq("innertube xhrclient not ready", b, c, d); tn(f); throw f; } var g = {
            headers: { "Content-Type": "application/json" }, method: "POST", postParams: c, postBodyFormat: "JSON", onTimeout: function () { d.onTimeout() },
            onFetchTimeout: d.onTimeout, onSuccess: function (w, v) { if (d.onSuccess) d.onSuccess(v) },
            onFetchSuccess: function (w) { if (d.onSuccess) d.onSuccess(w) },
            onError: function (w, v) { if (d.onError) d.onError(v) },
            onFetchError: function (w) { if (d.onError) d.onError(w) },
            timeout: d.timeout, withCredentials: !0
        }, h = ""; (f = a.config_.vg) && (h = f); var l = a.config_.xg || !1, m = Hq(l, h, d); Object.assign(g.headers, m); g.headers.Authorization && !h && (g.headers["x-origin"] = window.location.origin); f = "/youtubei/" + a.config_.innertubeApiVersion + "/" + b; var n = { alt: "json" }; a.config_.wg && g.headers.Authorization || (n.key = a.config_.innertubeApiKey); var t = Qn("" + h + f, n); Qs() ? (0, os.yg)().then(function (w) { e(w) }) : e(!1)
    }
    ; var Ys = Date.now().toString();
    function Zs() {
        a: { if (window.crypto && window.crypto.getRandomValues) try { var a = Array(16), b = new Uint8Array(16); window.crypto.getRandomValues(b); for (var c = 0; c < a.length; c++)a[c] = b[c]; var d = a; break a } catch (e) { } d = Array(16); for (a = 0; 16 > a; a++) { b = Date.now(); for (c = 0; c < b % 23; c++)d[a] = Math.random(); d[a] = Math.floor(256 * Math.random()) } if (Ys) for (a = 1, b = 0; b < Ys.length; b++)d[a % 16] = d[a % 16] ^ d[(a - 1) % 16] / 4 ^ Ys.charCodeAt(b), a++ } a = []; for (b = 0; b < d.length; b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b] & 63));
        return a.join("")
    }
    ; var $s, at = u.ytLoggingDocDocumentNonce_; at || (at = Zs(), x("ytLoggingDocDocumentNonce_", at, void 0)); $s = at; function bt(a) { this.i = a }
    bt.prototype.getAsJson = function () { var a = {}; void 0 !== this.i.trackingParams ? a.trackingParams = this.i.trackingParams : (a.veType = this.i.veType, void 0 !== this.i.veCounter && (a.veCounter = this.i.veCounter), void 0 !== this.i.elementIndex && (a.elementIndex = this.i.elementIndex)); void 0 !== this.i.dataElement && (a.dataElement = this.i.dataElement.getAsJson()); void 0 !== this.i.youtubeData && (a.youtubeData = this.i.youtubeData); return a };
    bt.prototype.toString = function () { return JSON.stringify(this.getAsJson()) };
    bt.prototype.isClientVe = function () { return !this.i.trackingParams && !!this.i.veType }; function ct(a) { a = void 0 === a ? 0 : a; return 0 == a ? "client-screen-nonce" : "client-screen-nonce." + a }
    function dt(a) { a = void 0 === a ? 0 : a; return 0 == a ? "ROOT_VE_TYPE" : "ROOT_VE_TYPE." + a }
    function et(a) { return J(dt(void 0 === a ? 0 : a), void 0) }
    x("yt_logging_screen.getRootVeType", et, void 0); function ft() { var a = J("csn-to-ctt-auth-info"); a || (a = {}, $m("csn-to-ctt-auth-info", a)); return a }
    function gt(a) { a = void 0 === a ? 0 : a; var b = J(ct(a)); if (!b && !J("USE_CSN_FALLBACK", !0)) return null; b || !N("use_undefined_csn_any_layer") && 0 != a || (b = "UNDEFINED_CSN"); return b ? b : null }
    x("yt_logging_screen.getCurrentCsn", gt, void 0); function ht(a, b, c) { var d = ft(); (c = gt(c)) && delete d[c]; b && (d[a] = b) }
    function it(a) { return ft()[a] }
    x("yt_logging_screen.getCttAuthInfo", it, void 0); x("yt_logging_screen.setCurrentScreen", function (a, b, c, d) { c = void 0 === c ? 0 : c; if (a !== J(ct(c)) || b !== J(dt(c))) ht(a, d, c), $m(ct(c), a), $m(dt(c), b), b = function () { setTimeout(function () { a && rq("foregroundHeartbeatScreenAssociated", { clientDocumentNonce: $s, clientScreenNonce: a }, Xs) }, 0) }, "requestAnimationFrame" in window ? window.requestAnimationFrame(b) : b() }, void 0); function jt() { if (Xh()) return !0; var a = J("INNERTUBE_CLIENT_NAME"); return !a || "WEB" !== a && "MWEB" !== a || vo && wo("applewebkit") && !wo("version") && (!wo("safari") || wo("gsa/")) || we && wo("version/") ? !0 : (a = so("CONSENT")) ? a.startsWith("YES+") : !0 }
    ; function kt(a, b, c) { var d = void 0 === d ? !0 : d; var e = J("VALID_SESSION_TEMPDATA_DOMAINS", []), f = Cd(window.location.href); f && e.push(f); f = Cd(a); if (mb(e, f) || !f && 0 == a.lastIndexOf("/", 0)) if (N("autoescape_tempdata_url") && (e = document.createElement("a"), gd(e, a), a = e.href), a && (a = Dd(a), e = a.indexOf("#"), a = 0 > e ? a : a.substr(0, e))) d && !b.csn && (b.itct || b.ved) && (b = Object.assign({ csn: gt() }, b)), c ? (c = parseInt(c, 10), isFinite(c) && 0 < c && lt(a, b, c)) : lt(a, b) }
    function lt(a, b, c) { a = "ST-" + wd(a).toString(36); b = b ? Id(b) : ""; c = c || 5; N("drop_st_cookie_before_cb") && !jt() || ro(a, b, c, "/") }
    ; function mt(a, b, c, d) { b = void 0 === b ? {} : b; c = void 0 === c ? "" : c; d = void 0 === d ? window : d; a = hg(Kd(a, b) + c); d.location.href = Rd(a) }
    function nt(a, b) { b && kt(a, b); (window.ytspf || {}).enabled ? spf.navigate(a) : mt(a) }
    function ot(a, b, c) { b = void 0 === b ? {} : b; c = void 0 === c ? !1 : c; var d = J("EVENT_ID"); d && (b.ei || (b.ei = d)); b && kt(a, b); if (c) return !1; nt(a); return !0 }
    ; function pt() { U.call(this, "button"); this.i = null; this.j = []; this.l = {} }
    A(pt, U); Ka(pt); k = pt.prototype; k.register = function () { W(this, "click", this.ld); W(this, "keydown", this.ne); W(this, "keypress", this.md); this.oa("page-scroll", this.jg) };
    k.unregister = function () { Y(this, "click", this.ld); Y(this, "keydown", this.ne); Y(this, "keypress", this.md); qt(this); this.l = {}; pt.T.unregister.call(this) };
    k.ld = function (a) { a && !a.disabled && (this.toggle(a), this.click(a)) };
    k.ne = function (a, b, c) {
        if (!(c.altKey || c.ctrlKey || c.shiftKey || c.metaKey) && (b = rt(this, a))) {
            var d = function (g) { var h = ""; g.tagName && (h = g.tagName.toLowerCase()); return "ul" == h || "table" == h }, e;
            d(b) ? e = b : e = Mf(b, d); if (e) { e = e.tagName.toLowerCase(); if ("ul" == e) var f = this.Fg; else "table" == e && (f = this.Eg); f && st(this, a, b, c, z(f, this)) }
        }
    };
    k.jg = function () { var a = this.l; if (0 != Cb(a)) for (var b in a) { var c = a[b], d = tt(this, c); if (void 0 == d || void 0 == c) break; ut(this, d, c, !0) } };
    function st(a, b, c, d, e) { var f = yp(c), g = 9 == d.keyCode; g || 32 == d.keyCode || 13 == d.keyCode ? (d = vt(a, c)) ? (b = Gf(d), "a" == b.tagName.toLowerCase() ? mt(b.href) : Cn(b, "click")) : g && wt(a, b) : f ? 27 == d.keyCode ? (vt(a, c), wt(a, b)) : e(b, c, d) : (a = I(b, V(a, "reverse")) ? 38 : 40, d.keyCode == a && (Cn(b, "click"), d.preventDefault())) }
    k.md = function (a, b, c) { c.altKey || c.ctrlKey || c.shiftKey || c.metaKey || (a = rt(this, a), yp(a) && c.preventDefault()) };
    function vt(a, b) { a = V(a, "menu-item-highlight"); (b = F(a, b)) && Dj(b, a); return b }
    function xt(a, b, c) { Bj(c, V(a, "menu-item-highlight")); var d = c.getAttribute("id"); d || (d = V(a, "item-id-" + Oa(c)), c.setAttribute("id", d)); b.setAttribute("aria-activedescendant", d) }
    k.Eg = function (a, b, c) { var d = vt(this, b), e = nn("table", b); b = kf("td", null, e); d = zt(d, b, kf("td", null, nn("tr", e)).length, c); -1 != d && (xt(this, a, b[d]), c.preventDefault()) };
    k.Fg = function (a, b, c) { if (40 == c.keyCode || 38 == c.keyCode) { var d = vt(this, b); b = Array.prototype.filter.call(kf("li", null, b), yp); xt(this, a, b[zt(d, b, 1, c)]); c.preventDefault() } };
    function zt(a, b, c, d) { var e = b.length; a = Array.prototype.indexOf.call(b, a); if (-1 == a) if (38 == d.keyCode) a = e - c; else { if (37 == d.keyCode || 38 == d.keyCode || 40 == d.keyCode) a = 0 } else 39 == d.keyCode ? (a % c == c - 1 && (a -= c), a += 1) : 37 == d.keyCode ? (0 == a % c && (a += c), --a) : 38 == d.keyCode ? (a < c && (a += e), a -= c) : 40 == d.keyCode && (a >= e - c && (a -= e), a += c); return a }
    function At(a, b) { var c = b.iframeMask; c || (c = yf("IFRAME"), c.src = 'javascript:""', Aj(c, V(a, "menu-mask")), Bp(c), b.iframeMask = c); return c }
    function ut(a, b, c, d) {
        var e = G(b, V(a, "group")), f = !!a.D(b, "button-menu-ignore-group"); e = e && !f ? e : b; f = 9; var g = 8, h = xg(b); if (I(b, V(a, "reverse"))) { f = 8; g = 9; h = h.top + "px"; try { c.style.maxHeight = h } catch (n) { } } I(b, "flip") && (I(b, V(a, "reverse")) ? (f = 12, g = 13) : (f = 13, g = 12)); var l; a.D(b, "button-has-sibling-menu") ? l = og(e) : a.D(b, "button-menu-root-container") && (l = Bt(a, b)); pe && !Ie("8") && (l = null); if (l) { var m = xg(l); m = new ag(-m.top, m.left, m.top, -m.left) } l = new cf(0, 1); I(b, V(a, "center-menu")) && (l.x -= Math.round((vg(c).width - vg(b).width) /
            2)); d && (l.y += sf(document).y); if (a = At(a, b)) b = vg(c), a.style.width = b.width + "px", a.style.height = b.height + "px", jm(e, f, a, g, l, m, 197), d && ig(a, "position", "fixed"); jm(e, f, c, g, l, m, 197)
    }
    function Bt(a, b) { return a.D(b, "button-menu-root-container") ? (a = a.D(b, "button-menu-root-container"), G(b, a)) : document.body }
    k.od = function (a) {
        if (a) {
            var b = rt(this, a); if (b) {
                a.setAttribute("aria-pressed", "true"); a.setAttribute("aria-expanded", "true"); b.originalParentNode = b.parentNode; b.activeButtonNode = a; b.parentNode.removeChild(b); var c; this.D(a, "button-has-sibling-menu") ? c = a.parentNode : c = Bt(this, a); c.appendChild(b); b.style.minWidth = a.offsetWidth - 2 + "px"; var d = At(this, a); d && c.appendChild(d); (c = !!this.D(a, "button-menu-fixed")) && (this.l[jn(a).toString()] = b); ut(this, a, b, c); Ko("yt-uix-button-menu-before-show", a, b); Ap(b); d && Ap(d);
                this.Ea(a, "button-menu-action", !0); Bj(a, V(this, "active")); b = z(this.nd, this, a, !1); d = z(this.nd, this, a, !0); c = z(this.Th, this, a, void 0); this.i && rt(this, this.i) == rt(this, a) || qt(this); T("yt-uix-button-menu-show", a); M(this.j); this.j = [L(document, "click", d), L(document, "contextmenu", b), L(window, "resize", c)]; this.i = a
            }
        }
    };
    function wt(a, b) {
        if (b) {
            var c = rt(a, b); if (c) { a.i = null; b.setAttribute("aria-pressed", "false"); b.setAttribute("aria-expanded", "false"); b.removeAttribute("aria-activedescendant"); Bp(c); a.Ea(b, "button-menu-action", !1); var d = At(a, b), e = jn(c).toString(); delete a.l[e]; P(function () { d && d.parentNode && (Bp(d), d.parentNode.removeChild(d)); c.originalParentNode && (c.parentNode.removeChild(c), c.originalParentNode.appendChild(c), c.originalParentNode = null, c.activeButtonNode = null) }, 1) } e = G(b, V(a, "group"));
            var f = [V(a, "active")]; e && f.push(V(a, "group-active")); Ej(b, f); T("yt-uix-button-menu-hide", b); M(a.j); a.j.length = 0
        }
    }
    k.Th = function (a, b) { var c = rt(this, a); c && (b && (b instanceof Rc ? fd(c, b) : Lf(c, b)), b = !!this.D(a, "button-menu-fixed"), ut(this, a, c, b)) };
    function tt(a, b) { return G(b.activeButtonNode || b.parentNode, V(a)) }
    k.nd = function (a, b, c) { c = An(c); var d = G(c, V(this)); if (d) { d = rt(this, d); var e = rt(this, a); if (d == e) return } d = G(c, V(this, "menu")); e = d == rt(this, a); var f = I(c, V(this, "menu-item")), g = I(c, V(this, "menu-close")); if (!d || e && (f || g)) wt(this, a), d && b && this.D(a, "button-menu-indicate-selected") && ((a = F(V(this, "content"), a)) && Lf(a, Sf(c)), Ct(this, d, c)) };
    function Ct(a, b, c) {
        var d = V(a, "menu-item-selected"); Array.prototype.forEach.call(mf(d, b), function (e) { Dj(e, d) });
        Bj(c.parentNode, d)
    }
    function rt(a, b) { if (!b.widgetMenu) { var c = a.D(b, "button-menu-id"); c = c && E(c); var d = V(a, "menu"); c ? Cj(c, [d, V(a, "menu-external")]) : c = F(d, b); b.widgetMenu = c } return b.widgetMenu }
    k.isToggled = function (a) { return I(a, V(this, "toggled")) };
    k.toggle = function (a) { if (this.D(a, "button-toggle")) { var b = G(a, V(this, "group")), c = V(this, "toggled"), d = I(a, c); if (b && this.D(b, "button-toggle-group")) { var e = this.D(b, "button-toggle-group"); Array.prototype.forEach.call(mf(V(this), b), function (f) { f != a || "optional" == e && d ? (Dj(f, c), f.removeAttribute("aria-pressed")) : (Bj(a, c), f.setAttribute("aria-pressed", "true")) }) } else d ? a.removeAttribute("aria-pressed") : a.setAttribute("aria-pressed", "true"), Hj(a, c) } };
    k.click = function (a) { if (rt(this, a)) { var b = rt(this, a); if (b) { var c = tt(this, b); c && c != a ? (wt(this, c), P(z(this.od, this, a), 1)) : yp(b) ? wt(this, a) : this.od(a) } a.focus() } this.Ea(a, "button-action") };
    function qt(a) { a.i && wt(a, a.i) }
    ; function Dt(a) { U.call(this, a); this.l = null }
    A(Dt, U); k = Dt.prototype; k.Z = function (a) { var b = U.prototype.Z.call(this, a); return b ? b : a };
    k.register = function () { this.oa("yt-uix-kbd-nav-move-out-done", this.hide) };
    k.dispose = function () { Et(this); Dt.T.dispose.call(this) };
    k.D = function (a, b) { var c = Dt.T.D.call(this, a, b); return c ? c : (a = Dt.T.D.call(this, a, "card-config")) && (a = y(a)) && a[b] ? a[b] : null };
    k.show = function (a) { var b = this.Z(a); if (b) { Bj(b, V(this, "active")); var c = Ft(this, a, b); if (c) { c.cardTargetNode = a; c.cardRootNode = b; Gt(this, a, c); var d = V(this, "card-visible"), e = this.D(a, "card-delegate-show") && this.D(b, "card-action"); this.Ea(b, "card-action", a); this.l = a; Bp(c); P(z(function () { e || (Ap(c), T("yt-uix-card-show", b, a, c)); Ht(c); Bj(c, d); T("yt-uix-kbd-nav-move-in-to", c) }, this), 10) } } };
    function Ft(a, b, c) {
        var d = c || b, e = V(a, "card"); c = It(a, d); var f = E(V(a, "card") + jn(d)); if (f) return a = F(V(a, "card-body"), f), Kf(a, c) || (Cf(c), a.appendChild(c)), f; f = document.createElement("div"); f.id = V(a, "card") + jn(d); Aj(f, e); (d = a.D(d, "card-class")) && Cj(f, d.split(/\s+/)); d = document.createElement("div"); d.className = V(a, "card-border"); b = a.D(b, "orientation") || "horizontal"; e = document.createElement("div"); e.className = "yt-uix-card-border-arrow yt-uix-card-border-arrow-" + b; var g = document.createElement("div"); g.className =
            V(a, "card-body"); a = document.createElement("div"); a.className = "yt-uix-card-body-arrow yt-uix-card-body-arrow-" + b; Cf(c); g.appendChild(c); d.appendChild(a); d.appendChild(g); f.appendChild(e); f.appendChild(d); document.body.appendChild(f); return f
    }
    function Gt(a, b, c) {
        var d = a.D(b, "orientation") || "horizontal", e = F(V(a, "anchor"), b) || b, f = a.D(b, "position"), g = !!a.D(b, "force-position"), h = a.D(b, "position-fixed"); d = "horizontal" == d; var l = "bottomright" == f || "bottomleft" == f, m = "topright" == f || "bottomright" == f; if (m && l) { var n = 13; var t = 8 } else m && !l ? (n = 12, t = 9) : !m && l ? (n = 9, t = 12) : (n = 8, t = 13); var w = yg(document.body); f = yg(b); w != f && (n ^= 4); if (d) { f = b.offsetHeight / 2 - 12; var v = new cf(-12, b.offsetHeight + 6) } else f = b.offsetWidth / 2 - 6, v = new cf(b.offsetWidth + 6, -12); var C = vg(c);
        f = Math.min(f, (d ? C.height : C.width) - 24 - 6); 6 > f && (f = 6, d ? v.y += 12 - b.offsetHeight / 2 : v.x += 12 - b.offsetWidth / 2); C = null; g || (C = 10); b = V(a, "card-flip"); a = V(a, "card-reverse"); Fj(c, b, m); Fj(c, a, l); C = jm(e, n, c, t, v, null, C); !g && C && (C & 48 && (m = !m, n ^= 4, t ^= 4), C & 192 && (l = !l, n ^= 1, t ^= 1), Fj(c, b, m), Fj(c, a, l), jm(e, n, c, t, v)); h && (e = parseInt(c.style.top, 10), g = sf(document).y, ig(c, "position", "fixed"), ig(c, "top", e - g + "px")); w && (c.style.right = "", e = xg(c), e.left = e.left || parseInt(c.style.left, 10), g = qf(window), c.style.left = "", c.style.right =
            g.width - e.left - e.width + "px"); e = F("yt-uix-card-body-arrow", c); g = F("yt-uix-card-border-arrow", c); d = d ? l ? "top" : "bottom" : !w && m || w && !m ? "left" : "right"; e.setAttribute("style", ""); g.setAttribute("style", ""); e.style[d] = f + "px"; g.style[d] = f + "px"; l = F("yt-uix-card-arrow", c); m = F("yt-uix-card-arrow-background", c); l && m && (c = "right" == d ? vg(c).width - f - 13 : f + 11, f = c / Math.sqrt(2), l.style.left = c + "px", l.style.marginLeft = "1px", m.style.marginLeft = -f + "px", m.style.marginTop = f + "px")
    }
    k.hide = function (a) { if (a = this.Z(a)) { var b = E(V(this, "card") + jn(a)); b && (Dj(a, V(this, "active")), Dj(b, V(this, "card-visible")), Bp(b), this.l = null, b.cardTargetNode = null, b.cardRootNode = null, b.cardMask && (Cf(b.cardMask), b.cardMask = null)) } };
    function Et(a) { a.l && a.hide(a.l) }
    k.Sh = function (a, b) { var c = this.Z(a); if (c) { if (b) { var d = It(this, c); if (!d) return; b instanceof Rc ? fd(d, b) : Lf(d, b) } I(c, V(this, "active")) && (b = Ft(this, a, c), Gt(this, a, b), Ap(b), Ht(b)) } };
    k.isActive = function (a) { return (a = this.Z(a)) ? I(a, V(this, "active")) : !1 };
    function It(a, b) { var c = b.cardContentNode; if (!c) { var d = V(a, "content"), e = V(a, "card-content"); (c = (c = a.D(b, "card-id")) ? E(c) : F(d, b)) || (c = document.createElement("div")); a = c; Dj(a, d); Bj(a, e); b.cardContentNode = c } return c }
    function Ht(a) { var b = a.cardMask; b || (b = yf("IFRAME"), b.src = 'javascript:""', Cj(b, ["yt-uix-card-iframe-mask"]), a.cardMask = b); b.style.position = a.style.position; b.style.top = a.style.top; b.style.left = a.offsetLeft + "px"; b.style.height = a.clientHeight + "px"; b.style.width = a.clientWidth + "px"; document.body.appendChild(b) }
    ; function Jt() { U.call(this, "kbd-nav") }
    var Kt; A(Jt, U); Ka(Jt); k = Jt.prototype; k.register = function () { W(this, "keydown", this.pd); this.oa("yt-uix-kbd-nav-move-in", this.we); this.oa("yt-uix-kbd-nav-move-in-to", this.Ig); this.oa("yt-uix-kbd-move-next", this.xe); this.oa("yt-uix-kbd-nav-move-to", this.dc) };
    k.unregister = function () { Y(this, "keydown", this.pd); M(Kt) };
    k.pd = function (a, b, c) {
        var d = c.keyCode; if (a = G(a, V(this))) switch (d) {
            case 13: case 32: this.we(a); break; case 27: c.preventDefault(); c.stopImmediatePropagation(); a: { for (c = Jj(a, "kbdNavMoveOut"); !c;) { c = G(a.parentElement, V(this)); if (!c) break a; c = Jj(c, "kbdNavMoveOut") } c = E(c); this.dc(c); T("yt-uix-kbd-nav-move-out-done", c) } break; case 40: case 38: if ((b = c.target) && I(a, V(this, "list"))) switch (d) {
                case 40: this.xe(b, a); break; case 38: d = document.activeElement == a, a = Lt(a), b = a.indexOf(b), 0 > b && !d || (b = d ? a.length - 1 : (a.length +
                    b - 1) % a.length, a[b].focus(), Mt(this, a[b]))
            }c.preventDefault()
        }
    };
    k.we = function (a) { var b = Jj(a, "kbdNavMoveIn"); b = E(b); Nt(this, a, b); this.dc(b) };
    k.Ig = function (a) { var b = document; try { var c = b && b.activeElement; var d = c && c.nodeName ? c : null } catch (e) { d = null } Nt(this, d, a); this.dc(a) };
    k.dc = function (a) {
        if (a) if (Qf(a)) a.focus(); else {
            var b = Mf(a, function (c) { return If(c) ? Qf(c) : !1 });
            b ? b.focus() : (a.setAttribute("tabindex", "-1"), a.focus())
        }
    };
    function Nt(a, b, c) { if (b && c) if (Bj(c, V(a)), a = b.id, a || (a = "kbd-nav-" + Math.floor(1E6 * Math.random() + 1), b.id = a), b = a, Ij && c.dataset) c.dataset.kbdNavMoveOut = b; else { if (/-[a-z]/.test("kbdNavMoveOut")) throw Error(""); c.setAttribute("data-" + "kbdNavMoveOut".replace(/([A-Z])/g, "-$1").toLowerCase(), b) } }
    k.xe = function (a, b) { var c = document.activeElement == b; b = Lt(b); a = b.indexOf(a); 0 > a && !c || (c = c ? 0 : (a + 1) % b.length, b[c].focus(), Mt(this, b[c])) };
    function Mt(a, b) { if (b) { var c = Uf(b, "LI"); c && (Bj(c, V(a, "highlight")), Kt = L(b, "blur", z(function (d) { Dj(d, V(this, "highlight")); M(Kt) }, a, c))) } }
    function Lt(a) {
        if ("UL" != a.tagName.toUpperCase()) return []; a = Array.prototype.filter.call(Ff(a), function (b) { return "LI" == b.tagName.toUpperCase() });
        return eb(a.map(function (b) { return yp(b) ? Mf(b, function (c) { return If(c) ? Qf(c) : !1 }) : !1 }), function (b) { return !!b })
    }
    ; function Ot() { U.call(this, "menu"); this.j = this.i = null; this.l = {}; this.G = {}; this.o = null }
    A(Ot, U); Ka(Ot); function Pt(a) { var b = Ot.getInstance(); if (I(a, V(b))) return a; var c = b.Z(a); return c ? c : G(a, V(b, "content")) == b.i ? b.j : null }
    k = Ot.prototype; k.register = function () {
        W(this, "click", this.qd); W(this, "mouseenter", this.fg); this.oa("page-scroll", this.gf); this.oa("yt-uix-kbd-nav-move-out-done", function (a) { a = this.Z(a); Qt(this, a) });
        this.o = new mm
    };
    k.unregister = function () {
        Y(this, "click", this.qd); this.j = this.i = null; M(zb(Eb(this.l))); this.l = {}; Ab(this.G, function (a) { Cf(a) }, this);
        this.G = {}; Ii(this.o); this.o = null; Ot.T.unregister.call(this)
    };
    k.qd = function (a, b, c) { a && (b = Rt(this, a), !b.disabled && mn(c.target, b) && St(this, a)) };
    k.fg = function (a, b, c) { a && I(a, V(this, "hover")) && mn(c.target, Rt(this, a)) && St(this, a, !0) };
    k.gf = function () { this.i && this.j && Tt(this, this.j, this.i) };
    function Tt(a, b, c) { var d = Ut(a, b); d && tg(d, vg(c)); if (c == a.i) { var e = 9, f = 8; I(b, V(a, "reversed")) && (e ^= 1, f ^= 1); I(b, V(a, "flipped")) && (e ^= 4, f ^= 4); a = new cf(0, 1); d && jm(b, e, d, f, a, null, 197); jm(b, e, c, f, a, null, 197) } }
    function St(a, b, c) { Vt(a, b) && !c ? Qt(a, b) : (Wt(a, b), !a.i || mn(b, a.i) ? a.rd(b) : nm(a.o, z(a.rd, a, b))) }
    k.rd = function (a) {
        if (a) {
            var b = Xt(this, a); if (b) {
                Ko("yt-uix-menu-before-show", a, b); this.i ? mn(a, this.i) || Qt(this, this.j) : (this.j = a, this.i = b, I(a, V(this, "sibling-content")) || (Cf(b), document.body.appendChild(b)), b.style.minWidth = Rt(this, a).offsetWidth - 2 + "px"); var c = Ut(this, a); c && b.parentNode && b.parentNode.insertBefore(c, b.nextSibling); Dj(b, V(this, "content-hidden")); Tt(this, a, b); Cj(Rt(this, a), [V(this, "trigger-selected"), "yt-uix-button-toggled"]); T("yt-uix-menu-show", a); Yt(b); Zt(this, a); T("yt-uix-kbd-nav-move-in-to",
                    b); var d = z(this.hf, this, a), e = z(this.Cg, this, a); c = Oa(a).toString(); this.l[c] = [L(b, "click", e), L(document, "click", d)]; I(a, V(this, "indicate-selected")) && (d = z(this.Dg, this, a), this.l[c].push(L(b, "click", d))); I(a, V(this, "hover")) && (a = z(this.gg, this, a), this.l[c].push(L(document, "mousemove", a)))
            }
        }
    };
    k.gg = function (a, b) { (b = An(b)) && (mn(b, Rt(this, a)) || $t(this, b) || au(this, a)) };
    k.hf = function (a, b) { if (b = An(b)) { if ($t(this, b)) { var c = G(b, V(this, "content")), d = Uf(b, "LI"); d && c && Kf(c, d) && Ko("yt-uix-menu-item-clicked", b); b = G(b, V(this, "close-on-select")); if (!b) return; c = Pt(b) } Qt(this, c || a) } };
    function Wt(a, b) { if (b) { var c = G(b, V(a, "content")); c && Array.prototype.forEach.call(mf(V(a), c), function (d) { !mn(d, b) && Vt(this, d) && au(this, d) }, a) } }
    function Qt(a, b) { if (b) { var c = []; c.push(b); if (b = Xt(a, b)) b = mf(V(a), b), b = sb(b), c = c.concat(b), c.forEach(function (d) { Vt(this, d) && au(this, d) }, a) } }
    function au(a, b) { if (b) { var c = Xt(a, b); Ej(Rt(a, b), [V(a, "trigger-selected"), "yt-uix-button-toggled"]); Bj(c, V(a, "content-hidden")); var d = Xt(a, b); d && of(d, { "aria-expanded": "false" }); (d = Ut(a, b)) && d.parentNode && Cf(d); c && c == a.i && (a.j.appendChild(c), a.i = null, a.j = null, a.o && a.o.ha("ROOT_MENU_REMOVED")); T("yt-uix-menu-hide", b); b = Oa(b).toString(); M(a.l[b]); delete a.l[b] } }
    k.Cg = function (a, b) { (b = An(b)) && bu(this, a, b) };
    k.Dg = function (a, b) { if (b = An(b)) if (a = Rt(this, a)) if (b = Uf(b, "LI")) if (b = Sf(b).trim(), a.hasChildNodes()) { var c = pt.getInstance(); (a = F(V(c, "content"), a)) && Lf(a, b) } else Lf(a, b) };
    function Zt(a, b) {
        var c = Xt(a, b); if (c) {
            Array.prototype.forEach.call(c.children, function (e) { "LI" == e.tagName && of(e, { role: "menuitem" }) });
            of(c, { "aria-expanded": "true" }); var d = c.id; d || (d = "aria-menu-id-" + Oa(c), c.id = d); (a = Rt(a, b)) && of(a, { "aria-controls": d })
        }
    }
    function bu(a, b, c) { var d = Xt(a, b); d && I(b, V(a, "checked")) && (a = Uf(c, "LI")) && (a = F("yt-ui-menu-item-checked-hid", a)) && (Array.prototype.forEach.call(mf("yt-ui-menu-item-checked", d), function (e) { Gj(e, "yt-ui-menu-item-checked", "yt-ui-menu-item-checked-hid") }), Gj(a, "yt-ui-menu-item-checked-hid", "yt-ui-menu-item-checked")) }
    function Vt(a, b) { return (b = Xt(a, b)) ? !I(b, V(a, "content-hidden")) : !1 }
    function Yt(a) { Array.prototype.forEach.call(kf("UL", null, a), function (b) { b.tabIndex = 0; var c = Jt.getInstance(); Cj(b, [V(c), V(c, "list")]) }) }
    function Xt(a, b) { var c = K(b, "menu-content-id"); return c && (c = E(c)) ? (Cj(c, [V(a, "content"), V(a, "content-external")]), c) : b == a.j ? a.i : F(V(a, "content"), b) }
    function Ut(a, b) {
        var c = Oa(b).toString(), d = a.G[c]; if (!d) {
            d = yf("IFRAME"); d.src = 'javascript:""'; var e = [V(a, "mask")]; Array.prototype.forEach.call(zj(b), function (f) { e.push(f + "-mask") });
            Cj(d, e); a.G[c] = d
        } return d || null
    }
    function Rt(a, b) { return F(V(a, "trigger"), b) }
    function $t(a, b) { return mn(b, a.i) || mn(b, a.j) }
    ; function cu() { Dt.call(this, "clickcard"); this.i = {}; this.j = {} }
    A(cu, Dt); Ka(cu); k = cu.prototype; k.register = function () { cu.T.register.call(this); W(this, "click", this.Sd, "target"); W(this, "click", this.Pd, "close") };
    k.unregister = function () { cu.T.unregister.call(this); Y(this, "click", this.Sd, "target"); Y(this, "click", this.Pd, "close"); for (var a in this.i) M(this.i[a]); this.i = {}; for (a in this.j) M(this.j[a]); this.j = {} };
    k.Sd = function (a, b, c) { c.preventDefault(); b = Uf(c.target, "button"); b && b.disabled || (a = (b = this.D(a, "card-target")) ? jf(document, b) : a, b = this.Z(a), this.D(b, "disabled") || (I(b, V(this, "active")) ? (this.hide(a), Dj(b, V(this, "active"))) : (this.show(a), Bj(b, V(this, "active"))))) };
    k.show = function (a) { cu.T.show.call(this, a); var b = this.Z(a), c = Oa(a).toString(); if (!K(b, "click-outside-persists")) { if (this.i[c]) return; b = L(document, "click", z(this.Td, this, a)); var d = L(window, "blur", z(this.Td, this, a)); this.i[c] = [b, d] } a = L(window, "resize", z(this.Sh, this, a, void 0)); this.j[c] = a };
    k.hide = function (a) { cu.T.hide.call(this, a); a = Oa(a).toString(); var b = this.i[a]; b && (M(b), this.i[a] = null); if (b = this.j[a]) M(b), delete this.j[a] };
    k.Td = function (a, b) { var c = "yt-uix" + (this.A ? "-" + this.A : "") + "-card", d = null; b.target && (d = G(b.target, c) || G(Pt(b.target), c)); (d = d || G(document.activeElement, c) || (document.activeElement ? G(Pt(document.activeElement), c) : null)) || this.hide(a) };
    k.Pd = function (a) { (a = G(a, V(this, "card"))) && (a = a.cardTargetNode) && this.hide(a) }; function du() { Dt.call(this, "hovercard") }
    A(du, Dt); Ka(du); k = du.prototype; k.register = function () { W(this, "mouseenter", this.pe, "target"); W(this, "mouseleave", this.re, "target"); W(this, "mouseenter", this.qe, "card"); W(this, "mouseleave", this.se, "card") };
    k.unregister = function () { Y(this, "mouseenter", this.pe, "target"); Y(this, "mouseleave", this.re, "target"); Y(this, "mouseenter", this.qe, "card"); Y(this, "mouseleave", this.se, "card") };
    k.pe = function (a) { if (eu != a) { eu && (this.hide(eu), eu = null); var b = z(this.show, this, a), c = parseInt(this.D(a, "delay-show"), 10); b = P(b, -1 < c ? c : 200); an(a, "card-timer", b.toString()); eu = a; a.alt && (an(a, "card-alt", a.alt), a.alt = ""); a.title && (an(a, "card-title", a.title), a.title = "") } };
    k.re = function (a) { var b = parseInt(this.D(a, "card-timer"), 10); Q(b); this.Z(a).isCardHidable = !0; b = parseInt(this.D(a, "delay-hide"), 10); b = -1 < b ? b : 200; P(z(this.og, this, a), b); if (b = this.D(a, "card-alt")) a.alt = b; if (b = this.D(a, "card-title")) a.title = b };
    k.og = function (a) { this.Z(a).isCardHidable && (this.hide(a), eu = null) };
    k.qe = function (a) { a && (a.cardRootNode.isCardHidable = !1) };
    k.se = function (a) { a && this.hide(a.cardTargetNode) };
    var eu = null; function fu(a, b, c, d, e, f) {
        this.i = a; this.C = null; this.l = F("yt-dialog-fg", this.i) || this.i; if (a = F("yt-dialog-title", this.l)) { var g = "yt-dialog-title-" + Oa(this.l); a.setAttribute("id", g); this.l.setAttribute("aria-labelledby", g) } this.l.setAttribute("tabindex", "-1"); this.U = F("yt-dialog-focus-trap", this.i); this.M = !1; this.o = new mm; this.G = []; this.G.push(Bn(this.i, "click", z(this.Xg, this), "yt-dialog-dismiss")); this.G.push(L(this.U, "focus", z(this.Qf, this), !0)); gu(this, "content"); this.V = b; this.ga = c; this.X = d; this.N =
            e; this.ea = f; this.data_ = this.K = this.B = null
    }
    var hu = { LOADING: "loading", li: "content", aj: "working" }; function iu(a, b, c) { a.isDisposed() || a.o.subscribe((c ? "pre-" : "post-") + "all", b) }
    function gu(a, b) {
        a = F("yt-dialog-fg-content", a.i); var c = []; Ab(hu, function (d) { c.push("yt-dialog-show-" + d) });
        Ej(a, c); Bj(a, "yt-dialog-show-" + b)
    }
    k = fu.prototype;
    k.show = function (a) {
        if (!this.isDisposed()) {
            this.C = document.activeElement; if (!this.X) {
                this.j || (this.j = E("yt-dialog-bg"), this.j || (this.j = yf("div"), this.j.id = "yt-dialog-bg", Aj(this.j, "yt-dialog-bg"), document.body.appendChild(this.j))); var b = window, c = b.document; var d = 0; if (c) {
                    d = c.body; var e = c.documentElement; if (e && d) if (b = qf(b).height, rf(c) && e.scrollHeight) d = e.scrollHeight != b ? e.scrollHeight : e.offsetHeight; else {
                        c = e.scrollHeight; var f = e.offsetHeight; e.clientHeight != f && (c = d.scrollHeight, f = d.offsetHeight); d =
                            c > b ? c > f ? c : f : c < f ? c : f
                    } else d = 0
                } this.j.style.height = d + "px"; Ap(this.j)
            } this.ie(); d = ju(this); ku(d); this.B = L(document, "keydown", z(this.zg, this)); d = this.i; e = R("player-added", this.ie, this); an(d, "player-ready-pubsub-key", e); this.ga && (this.K = L(document, "click", z(this.zh, this))); Ap(this.i); this.l.setAttribute("tabindex", "0"); lu(this); this.N || Bj(document.body, "yt-dialog-active"); qt(pt.getInstance()); Et(cu.getInstance()); Et(du.getInstance()); this.data_ = a; T("yt-ui-dialog-show-complete", this)
        }
    };
    function mu() { return hb(mf("yt-dialog"), function (a) { return yp(a) }) }
    k.ie = function () { if (!this.ea) { var a = this.i; Fj(document.body, "hide-players", !0); a && Fj(a, "preserve-players", !0) } };
    function ju(a) {
        var b = kf("IFRAME", null, a.i); B(b, function (c) { var d = K(c, "onload"); d && (d = y(d)) && L(c, "load", d); if (d = K(c, "src")) c.src = d }, a);
        return sb(b)
    }
    function ku(a) { B(document.getElementsByTagName("iframe"), function (b) { -1 == cb(a, b) && Bj(b, "iframe-hid") }) }
    function nu() { B(mf("iframe-hid"), function (a) { Dj(a, "iframe-hid") }) }
    k.Xg = function (a) { a = a.currentTarget; a.disabled || (a = K(a, "action") || "", this.dismiss(a)) };
    k.dismiss = function (a) {
        if (!this.isDisposed()) {
            this.o.ha("pre-all"); this.o.ha("pre-" + a); Bp(this.i); Et(cu.getInstance()); Et(du.getInstance()); this.l.setAttribute("tabindex", "-1"); mu() || (Bp(this.j), this.N || Dj(document.body, "yt-dialog-active"), pn(), nu()); this.B && (M(this.B), this.B = null); this.K && (M(this.K), this.K = null); var b = this.i; if (b) { var c = K(b, "player-ready-pubsub-key"); c && (Jo(c), cn(b, "player-ready-pubsub-key")) } this.o.ha("post-all"); T("yt-ui-dialog-hide-complete", this); "cancel" == a && T("yt-ui-dialog-cancelled",
                this); this.o && this.o.ha("post-" + a); this.data_ = null; this.C && this.C.focus()
        }
    };
    k.setTitle = function (a) { Lf(F("yt-dialog-title", this.i), a) };
    k.zg = function (a) {
        P(z(function () { this.V || 27 != a.keyCode || this.dismiss("cancel") }, this), 0);
        9 == a.keyCode && a.shiftKey && I(document.activeElement, "yt-dialog-fg") && a.preventDefault()
    };
    k.zh = function (a) { "yt-dialog-base" == a.target.className && this.dismiss("cancel") };
    k.isDisposed = function () { return this.M };
    k.dispose = function () {
        yp(this.i) && this.dismiss("dispose"); M(this.G); this.G.length = 0; P(z(function () { this.C = null }, this), 0);
        this.U = this.l = null; this.o.dispose(); this.o = null; this.M = !0
    };
    k.Qf = function (a) { a.stopPropagation(); lu(this) };
    function lu(a) { P(z(function () { this.l && this.l.focus() }, a), 0) }
    x("yt.ui.Dialog", fu, void 0); function ou(a) { Pm.call(this, a); this.Da = []; this.ia = [] }
    A(ou, Pm); function pu(a, b, c, d, e, f) { e = e || a; f = f || a.Rc(); b = Bn(f, b, z(d, e), c); a.Da.push(b) }
    ou.prototype.Sa = function () { B(this.Da, M); Jo(this.ia); ou.T.Sa.call(this) };
    ou.prototype.oa = function (a, b) { a = R(a, z(b, this)); this.ia.push(a) }; function qu() { U.call(this, "form-input") }
    A(qu, U); Ka(qu); k = qu.prototype;
    k.register = function () {
        pe && !Ie(9) && (W(this, "click", this.Xa, "checkbox"), W(this, "keypressed", this.Xa, "checkbox"), W(this, "click", this.xc, "radio"), W(this, "keypressed", this.xc, "radio")); pe && !Ie(10) && W(this, "click", this.ee, "placeholder"); W(this, "change", this.Xa, "checkbox"); W(this, "blur", this.Kd, "select-element"); W(this, "change", this.ab, "select-element"); W(this, "keyup", this.ab, "select-element"); W(this, "focus", this.Yd, "select-element"); W(this, "keyup", this.zb, "text"); W(this, "keyup", this.zb, "textarea"); W(this,
            "keyup", this.zb, "bidi"); W(this, "click", this.kg, "reset")
    };
    k.unregister = function () {
        pe && !Ie(9) && (Y(this, "click", this.Xa, "checkbox"), Y(this, "keypressed", this.Xa, "checkbox"), Y(this, "click", this.xc, "radio"), Y(this, "keypressed", this.xc, "radio")); pe && !Ie(10) && Y(this, "click", this.ee, "placeholder"); Y(this, "change", this.Xa, "checkbox"); Y(this, "blur", this.Kd, "select-element"); Y(this, "change", this.ab, "select-element"); Y(this, "keyup", this.ab, "select-element"); Y(this, "focus", this.Yd, "select-element"); Y(this, "keyup", this.zb, "text"); Y(this, "keyup", this.zb, "textarea"); Y(this,
            "keyup", this.zb, "bidi"); qu.T.unregister.call(this)
    };
    k.Xa = function (a) { var b = G(a, V(this, "checkbox-container")); a.checked && I(b, "partial") && (a.checked = !1, a.indeterminate = !1, Dj(b, "partial")); Fj(b, "checked", a.checked) };
    k.Ch = function (a) { var b = G(a, V(this, "radio-container")); b && Fj(b, "checked", a.checked) };
    k.xc = function () { ru() };
    k.zb = function (a) { var b = a.value; $b.test(b) ? a.dir = "rtl" : Zb.test(b) ? a.dir = "ltr" : a.removeAttribute("dir"); pe && !Ie(10) && (b = G(a, V(this, "container"))) && Fj(b, V(this, "non-empty"), !!a.value) };
    k.ee = function (a) { (a = G(a, V(this, "container"))) && (a = Lp(this, "text", a) || Lp(this, "textarea", a)) && a.focus() };
    k.Yd = function (a) { var b = G(a, V(this, "select")); Bj(b, "focused"); this.ab(a) };
    k.Kd = function (a) { var b = G(a, V(this, "select")); Dj(b, "focused"); this.ab(a) };
    k.ab = function (a) { var b = G(a, V(this, "select")), c = F(V(this, "select-value"), b), d = su(a); if (d) for ("" != c.innerHTML && d.innerHTML != c.innerHTML && this.Ea(a, "onchange-callback"), d = ln(d), Bf(c); 0 < d.childNodes.length;)c.appendChild(d.childNodes[0]); Fj(b, V(this, "select-disabled"), a.disabled) };
    k.kg = function () { var a = qu.getInstance(); Array.prototype.forEach.call(mf(V(a, "checkbox")), a.Xa, a); ru(); tu() };
    function su(a) { return a.options[Math.max(a.selectedIndex, 0)] }
    function uu(a, b) { a.checked = b; qu.getInstance().Xa(a) }
    function ru() { var a = qu.getInstance(); Array.prototype.forEach.call(mf(V(a, "radio")), a.Ch, a) }
    function tu() { var a = qu.getInstance(); Array.prototype.forEach.call(mf(V(a, "select-element")), a.ab, a) }
    function vu() { var a; return (a = (wu || document).querySelector('input[type="radio"][name="overlay-confirmation-preferences-update-frequency"]:checked')) ? a.value : null }
    ; function xu(a, b) { fu.call(this, a, !0, !1); this.Ha = b; this.A = Jf(a); this.H = null }
    q(xu, fu); xu.prototype.show = function (a) { fu.prototype.show.call(this, a); this.H = new yu(this.Ha, this.W.bind(this)); Rm(this.H, this.i) };
    xu.prototype.dismiss = function (a) { fu.prototype.dismiss.call(this, a); this.H = null; Cf(this.A) };
    xu.prototype.W = function (a, b) {
        var c = this, d = Jf(this.A); Df(a, this.A); this.A = Gf(d); a = new fu(F("yt-dialog", d), !1, !1); iu(a, function (e) { Cf(c.A); b(e) }, !0);
        a.show()
    };
    function yu(a, b) { ou.call(this); this.Ha = a; this.N = b; this.i = this.H = this.j = this.o = this.B = null }
    q(yu, ou); k = yu.prototype;
    k.tb = function () {
        ou.prototype.tb.call(this); this.B = Qm(this, "legal-report-details-form-renderer-description"); this.o = Qm(this, "legal-report-details-form-renderer-issue-type-select"); this.j = Qm(this, "legal-report-details-form-renderer-affiliation-select"); this.H = Qm(this, "legal-report-details-form-renderer-name"); this.i = Qm(this, "legal-report-details-form-renderer-submit-button"); pu(this, "keyup", "legal-report-details-form-renderer-description", this.jc.bind(this)); pu(this, "change", "legal-report-details-form-renderer-issue-type-select",
            this.jc.bind(this)); pu(this, "change", "legal-report-details-form-renderer-affiliation-select", this.jc.bind(this)); pu(this, "click", "yt-dialog-content", this.jc.bind(this)); pu(this, "click", "legal-report-details-form-renderer-submit-button", this.jf.bind(this)); tu()
    };
    k.Sa = function () { this.i = this.H = this.j = this.o = this.B = null; ou.prototype.Sa.call(this) };
    k.jf = function () { var a = K(this.i, "flag-url"), b = K(this.i, "flag-action"), c = this.B.value, d = parseInt(this.o.options[this.o.selectedIndex].value || "0", 10), e = parseInt(this.j.options[this.j.selectedIndex].value || "0", 10), f = this.H.value; a && b && c && d && e && (b = { flagging_action: b, report_issue: d, report_affiliation: e, report_description: c }, f && (b.report_full_name = f), this.i.disabled = !0, ho(a, { format: "JSON", method: "POST", convertToSafeHtml: !0, onSuccess: this.qh.bind(this), onError: this.ph.bind(this), postParams: b })) };
    k.qh = function (a, b) { var c = this; this.i.disabled = !1; b.html_content ? (a = zf(b.html_content), this.N(a, function () { T("commentreported", c.Ha, b.feedback_text) })) : T("commentreported", this.Ha, b.feedback_text) };
    k.ph = function () { this.i.disabled = !1 };
    k.jc = function () { this.i.disabled = this.B && this.o && this.j && this.B.value && this.o.selectedIndex && this.j.selectedIndex ? !1 : !0 }; function zu(a) { ou.call(this); this.W = this.U = this.N = this.ba = null; this.Ha = a; this.j = this.H = this.V = this.B = this.i = this.o = this.Ne = null }
    A(zu, ou); function Au(a) { if ("radio" == a.type) return a = G(a, "option-selectable-item-renderer-radio-container"), F("option-selectable-item-renderer-confirm-dialog", a); a = su(a); return E(a ? a.value || a.text : null) }
    function Bu(a) { a = Uf(a, "LI"); return F("option-item-supported-renderers-sub-options", a) }
    k = zu.prototype; k.Zg = function (a) { a = a.target; tu(); if (this.i) { Dj(this.i, "option-selectable-item-renderer-radio-selected"); var b = Bu(this.i); b && Bp(b) } this.B = null; this.i = a; Bj(this.i, "option-selectable-item-renderer-radio-selected"); (a = Bu(this.i)) ? (Ap(a), a = !!K(su(F("yt-uix-form-input-select-element", a)), "disable-submit"), Cu(this, a)) : Cu(this, !1); this.H && (F("yt-uix-form-input-checkbox", this.H).checked = !1, Fj(this.H, "checked", !1)); Bp(this.j); Ap(this.o); Du(this, this.i) };
    function Eu(a) {
        if (a.N && a.U) {
            var b = { flagging_action: a.N }; ho(a.U, {
                format: "JSON", method: "POST", convertToSafeHtml: !0, onSuccess: z(function (c, d) { d.feedback_text && (this.Ne = d.feedback_text); d.html_content ? (c = zf(d.html_content), this.ba ? Df(c, this.ba) : document.body.appendChild(c), c = E("flagging-response-message-dialog"), c = new fu(c, !1, !0), iu(c, z(this.pc, this), !0), c.show()) : this.pc() }, a),
                onError: z(function () { Cu(this, !1) }, a),
                postParams: b
            })
        } else Fu(a)
    }
    function Fu(a) {
        if (a.W) {
            var b = { feedback_tokens: a.W }; ho("/feed_change_ajax?action_give_feedback=1", {
                format: "JSON", method: "POST", convertToSafeHtml: !0, onSuccess: z(function (c, d) { d.feedback_responses ? (c = new fu(this.ba, !1, !0), iu(c, z(this.pc, this), !0), c.dismiss("close"), Gu(this, d)) : this.pc() }, a),
                onError: z(function () { Cu(this, !1) }, a),
                postParams: b
            })
        }
    }
    function Gu(a, b) {
        var c = F("service-endpoint-replace-enclosing-action-notification", a.Ha); var d = a.Ha; a = G(d, "yt-lockup"); var e = G(d, "feed-item-container"); if (a) { var f = F("yt-lockup-notifications-container", a); d = F("yt-lockup-dismissable", a) } else if (e) f = F("feed-item-dismissal-notices", e), d = F("feed-item-dismissable", e); else return; f && c && (Bf(f), Af(f, c)); var g; f && (g = function () { Ap(f); c && Ap(c) });
        d ? Hu(d, g) : g && g(); T("yt-dom-content-change", a || e); g = document.createElement("div"); b.feedback_responses.length ? (b = b.feedback_responses[0].follow_up_confirmation_html, fd(g, b)) : g.textContent = "Thanks for the report"; g.className = "follow-up-confirmation hid"; b = F("replace-enclosing-action-options", c); c.insertBefore(g, c.firstChild); c.removeChild(b); Bj(F("replace-enclosing-action-message", c), "hid"); Dj(F("follow-up-confirmation", c), "hid")
    }
    function Hu(a, b) { Bp(a); b && b(); T("yt-dom-content-change", a) }
    k.kf = function () { Cu(this, !0); this.U = K(this.i, "flag-url"); this.N = K(this.i, "flag-action"); this.W = K(this.i, "feedback-token"); var a = Au(this.i), b = Bu(this.i); b && (a = Au(F("yt-uix-form-input-select-element", b))); a ? (this.ba ? Df(a, this.ba) : document.body.appendChild(a), b = new fu(a, !1, !0), pu(this, "click", "option-selectable-item-renderer-confirm-button", this.Wg, null, a), b.show()) : Eu(this) };
    k.Wg = function (a) { var b = G(a.target, "option-selectable-item-renderer-confirm-button"), c = K(b, "url"); a = K(b, "flag-action"); b = K(b, "flag-url"); if (c) { var d = wc(c) || yc; d = rc(d); c != d && un(Error("Unsafe window.open URL: " + c)); c = d; d = wd(c).toString(36); window.open(c, d) } a && b && (this.N = a, this.U = b); Eu(this) };
    k.pc = function () { T("commentreported", this.Ha, this.Ne) };
    k.Pg = function (a) { this.B = su(a.target); Du(this, this.B); a = !!K(this.B, "disable-submit"); Cu(this, a) };
    k.Vg = function (a) { a.target.checked ? (Bp(this.o), Ap(this.j)) : (Bp(this.j), Ap(this.o)) };
    function Cu(a, b) { a.o.disabled = b; a.j && (a.j.disabled = b) }
    k.Yg = function () {
        Cu(this, !0); var a = K(this.j, "flag-url"), b = K(this.B ? this.B : this.i, "flag-action"); a && b ? (b = { flagging_action: b, flagging_checkbox_checked: 1 }, ho(a, {
            format: "JSON", method: "POST", convertToSafeHtml: !0, onSuccess: z(function (c, d) { d.html_content && this.ba ? (c = zf(d.html_content), d = Jf(Jf(this.ba)), Df(c, Jf(this.ba)), this.ba = c = F("yt-dialog", d), (new xu(c, this.Ha)).show()) : Cu(this, !1) }, this),
            onError: z(function () { Cu(this, !1) }, this),
            postParams: b
        })) : Cu(this, !1)
    };
    function Du(a, b) { b && (K(b, "action-legal-checkbox-show") ? Ap(a.V) : K(b, "action-legal-checkbox-hide") && Bp(a.V)) }
    k.tb = function () {
        zu.T.tb.call(this); this.o = Qm(this, "options-renderer-submit-button"); this.ba = G(this.o, "yt-dialog"); this.V = Qm(this, "legal-report-checkbox-container"); this.H = Qm(this, "legal-report-checkbox"); this.j = Qm(this, "report-form-modal-renderer-next-button"); pu(this, "click", "options-renderer-submit-button", this.kf); pu(this, "click", "option-selectable-item-renderer-radio", this.Zg); pu(this, "change", "yt-uix-form-input-select-element", this.Pg); pu(this, "click", "legal-report-checkbox", this.Vg); pu(this,
            "click", "report-form-modal-renderer-next-button", this.Yg)
    };
    k.Sa = function () { this.j = this.H = this.V = this.Ha = this.B = this.i = this.o = this.ba = null; zu.T.Sa.call(this) }; function Iu(a) { fu.call(this, a, !1, !0); this.H = E("report-form-modal-renderer"); this.A = null }
    A(Iu, fu); Iu.prototype.W = function () { this.dismiss("close") };
    Iu.prototype.show = function (a) { Iu.T.show.call(this, a); this.A = new zu(this.data_); Rm(this.A, F("yt-dialog-fg-content", this.i)); Io(z(this.W, this)) };
    Iu.prototype.dismiss = function (a) { Iu.T.dismiss.call(this, a); this.A && (this.A = null); Cf(this.H) }; function Ju() { U.call(this, "report-thumb-wrap"); this.i = null; this.j = !1 }
    q(Ju, U); Ju.prototype.register = function () { W(this, "click", this.l) };
    Ju.prototype.unregister = function () { Y(this, "click", this.l); U.prototype.unregister.call(this) };
    Ju.prototype.l = function (a) { var b = Pt(a); b = G(b, "yt-lockup"); this.i = vf("DIV", { "class": "video-renderer-abuse" }); var c = vf("DIV", { "class": "video-renderer-abuse-content" }); this.i.appendChild(c); b.appendChild(this.i); Ku(this, Gf(this.i), a, b); Ap(this.i) };
    function Ku(a, b, c, d) {
        if (!a.j) {
            var e = K(c, "url"); (c = K(c, "params")) && e && (c = { params: c }, a.j = !0, ho(e, {
                format: "JSON", method: "POST", convertToSafeHtml: !0, onSuccess: function (f, g) { a.j = !1; E("report-form-modal-renderer") || (f = zf(g.html_content), b.appendChild(f), f = F("yt-dialog", E("report-form-modal-renderer")), (new Iu(f)).show(d)) },
                onError: function () { a.j = !1 },
                postParams: c
            }))
        }
    }
    Ka(Ju); function Lu() { U.call(this, "overlay"); this.o = this.j = this.l = this.i = null }
    q(Lu, U); k = Lu.prototype; k.register = function () { W(this, "click", this.fd, "target"); W(this, "click", this.hide, "close"); Mu(this) };
    k.unregister = function () { U.prototype.unregister.call(this); Y(this, "click", this.fd, "target"); Y(this, "click", this.hide, "close"); this.o && (Jo(this.o), this.o = null); this.j && (M(this.j), this.j = null) };
    k.fd = function (a) {
        if (!this.i || !yp(this.i.i)) {
            var b = this.Z(a); a = Nu(b, a); b || (b = a ? a.overlayParentNode : null); if (b && a) {
                var c = !!this.D(b, "disable-shortcuts") || !1, d = !!this.D(b, "disable-outside-click-dismiss") || !1; this.i = new fu(a, c); this.l = b; var e = F("yt-dialog-fg", a); if (e) { var f = this.D(b, "overlay-class") || "", g = this.D(b, "overlay-style") || "default", h = this.D(b, "overlay-shape") || "default"; f = f ? f.split(" ") : []; f.push(V(this, g)); f.push(V(this, h)); Cj(e, f) } this.i.show(); T("yt-uix-kbd-nav-move-to", e || a); Mu(this); c ||
                    d || (c = z(function (l) { I(l.target, "yt-dialog-base") && Ou(this) }, this), this.j = L(F("yt-dialog-base", a), "click", c));
                this.Ea(b, "overlay-shown"); T("yt-uix-overlay-shown", b)
            }
        }
    };
    function Mu(a) { a.o || (a.o = R("yt-uix-overlay-hide", Pu)); a.i && iu(a.i, function () { var b = Lu.getInstance(); b.l = null; b.i.dispose(); b.i = null }) }
    function Ou(a) { if (a.i) { var b = a.l; a.i.dismiss("overlayhide"); b && a.Ea(b, "overlay-hidden"); a.l = null; a.j && (M(a.j), a.j = null); a.i = null } }
    function Nu(a, b) { var c; if (a) if (c = F("yt-dialog", a)) { if (b = E("body-container")) b.appendChild(c), a.overlayContentNode = c, c.overlayParentNode = a } else c = a.overlayContentNode; else b && (c = G(b, "yt-dialog")); return c }
    function Qu() { var a = Lu.getInstance(); if (a.l) a = F("yt-dialog-fg-content", a.l.overlayContentNode); else a: { if (a = mf("yt-dialog-fg-content")) for (var b = 0; b < a.length; b++) { var c = G(a[b], "yt-dialog"); if (yp(c)) { a = a[b]; break a } } a = null } return a }
    k.hide = function (a) { a && a.disabled || T("yt-uix-overlay-hide") };
    function Pu() { Ou(Lu.getInstance()) }
    k.show = function (a) { this.fd(a) };
    Lu.getInstance = function () { return rm(Lu) }; function Ru() { U.call(this, "char-counter") }
    A(Ru, U); Ka(Ru); Ru.prototype.register = function () { W(this, "keydown", this.i, "input"); W(this, "paste", this.i, "input"); W(this, "cut", this.i, "input"); W(this, "blur", this.i, "input") };
    Ru.prototype.unregister = function () { Y(this, "keydown", this.i, "input"); Y(this, "paste", this.i, "input"); Y(this, "cut", this.i, "input"); Y(this, "blur", this.i, "input") };
    Ru.prototype.i = function (a) {
        var b = this.Z(a); if (b) {
            var c = "true" == this.D(b, "count-char-by-size"), d = parseInt(this.D(b, "char-limit"), 10); isNaN(d) || 0 >= d || P(z(function () {
                var e = "true" == this.D(b, "use-plaintext-length"); Su(a, c, e); var f = parseInt(this.D(b, "warn-at-chars-remaining"), 10); isNaN(f) && (f = 0); var g = d - Tu(a, c, e); Fj(b, V(this, "maxed-out"), g < f); Fj(b, V(this, "maxed-out-singular"), 1 == Math.abs(g)); "true" == this.D(b, "maxed-out-as-positive") && (g = Math.abs(g)); Array.prototype.forEach.call(mf(V(this, "remaining"), b),
                    function (h) { Lf(h, g) })
            }, this), 0)
        }
    };
    function Su(a, b, c) { var d = parseInt(a.getAttribute("maxlength"), 10); if (!isNaN(d)) { var e = Tu(a, b, c); if (b) { if (e > d) { b = a.value; c = b.length; var f = 0; d = e - d; e = ""; do { e += b[c - f]; var g = unescape(encodeURIComponent(e)).length; f++ } while (g < d); a.value = a.value.substring(0, c - f) } } else e > d && (a.value = a.value.substring(0, d)) } }
    function Tu(a, b, c) { a = a.value; c && (a = ck(a)); return b ? unescape(encodeURIComponent(a)).length : a.length }
    ; function Uu() { U.call(this, "close") }
    A(Uu, U); Ka(Uu); Uu.prototype.register = function () { W(this, "click", this.i) };
    Uu.prototype.unregister = function () { Y(this, "click", this.i) };
    Uu.prototype.i = function (a) { var b, c = this.D(a, "close-parent-class"), d = this.D(a, "close-parent-id"); d ? b = E(d) : c && (b = G(a, c)); b && (Bp(b), c = this.D(a, "close-focus-target-id")) && (c = E(c)) && (d = pt.getInstance(), d.isToggled(c) && d.toggle(c), c.focus()); this.Ea(a, "close-callback", b) }; function Vu() { U.call(this, "expander") }
    A(Vu, U); Ka(Vu); Vu.prototype.register = function () { W(this, "click", this.i, "head"); W(this, "keypress", this.j, "head") };
    Vu.prototype.unregister = function () { Y(this, "click", this.i, "head"); Y(this, "keypress", this.j, "head") };
    Vu.prototype.i = function (a) { Wu(this, a) };
    Vu.prototype.j = function (a, b, c) { c && 13 == c.keyCode && Wu(this, a) };
    function Wu(a, b) { if (b = a.Z(b)) { b && (Qf(b) || of(b, { tabIndex: "0" }), b.focus()); Hj(b, V(a, "collapsed")); var c = !I(b, V(a, "collapsed")); T("yt-uix-expander-toggle", b, c); T("yt-dom-content-change", b); a.Ea(b, "expander-action") } }
    ; function Xu() { U.call(this, "languagepicker"); this.i = {} }
    A(Xu, U); Ka(Xu); k = Xu.prototype; k.register = function () { W(this, "click", this.de, "menu-item"); W(this, "keyup", this.Se, "search-input"); W(this, "keydown", this.he, "search-input"); W(this, "blur", this.ge, "search-input"); W(this, "focus", this.ce); this.oa("yt-uix-button-menu-before-show", this.eg); this.oa("yt-uix-button-menu-hide", this.dg) };
    k.unregister = function () { Y(this, "click", this.de, "menu-item"); Y(this, "keyup", this.Se, "search-input"); Y(this, "keydown", this.he, "search-input"); Y(this, "blur", this.ge, "search-input"); Y(this, "focus", this.ce); M(Eb(this.i)); this.i = {}; Xu.T.unregister.call(this) };
    k.eg = function (a) { if (I(a, "yt-languagepicker-button")) { var b = Oa(a); a = L(a, "keydown", z(this.Yf, this)); this.i[b] = a } };
    k.dg = function (a) { I(a, "yt-languagepicker-button") && (a = Oa(a), M(this.i[a]), delete this.i[a]) };
    function Yu(a, b) { return b.every(function (c) { return !ib(a, function (d) { return 0 != d.lastIndexOf(c, 0) }) }) }
    function Zu(a, b, c) { Array.prototype.forEach.call(a, function (d) { var e = Jj(d, "value"), f = $u(d); xp(d, e != c && f && Yu(f, b)) }) }
    function $u(a) { if ("undefined" === typeof a.i) { var b = Jj(a, "searchTerms"); b ? (a.i = [], b.split(";").forEach(function (c) { tb(a.i, av(c)) })) : a.i = av(Sf(a)) } return a.i }
    function av(a) { return a.toLowerCase().match(/[^ \(\)\[\]]+/g) || [] }
    function bv(a, b) { var c = pt.getInstance(), d = tt(c, a); vt(c, a); xt(c, d, b) }
    k.Se = function (a) { var b = this.Z(a), c = Lp(this, "search-result", b), d = av(a.value); if (d) { var e = Ff(c); a = Jj(b, "fallbackOption"); Zu(e, d, a); d = Array.prototype.find.call(e, yp); a = c.querySelector('li[data-value="' + a + '"]'); xp(c, !(!d && !a)); d ? bv(b, d) : a && (Ap(a), bv(b, a)) } else xp(c, !1) };
    k.he = function (a, b, c) { b = pt.getInstance(); a = this.Z(a); var d = tt(b, a); switch (c.keyCode) { case 13: case 9: (b = vt(b, a)) && Cn(Gf(b), "click"); c.preventDefault(); break; case 27: vt(b, a); wt(b, d); c.preventDefault(); break; case 38: case 40: d.focus(), c.preventDefault() } };
    k.de = function (a) { var b = Jj(a, "value"), c = this.Z(a), d = Jj(c, "languagepickerInputId"); d = E(d); d.value = b; Cn(d, "change"); (d = Lp(this, "suggestions", c)) && !d.querySelector('li[data-value="' + b + '"]') && ((b = Lp(this, "selected", c)) && Cf(b), a = a.cloneNode(!0), Bj(a, V(this, "selected")), d.insertBefore(a, d.childNodes[0] || null)) };
    function cv(a, b) { var c = pt.getInstance(); a = a.Z(b); tt(c, a).focus() }
    k.ge = function (a) { cv(this, a) };
    k.ce = function (a, b, c) { "INPUT" != c.target.tagName && cv(this, a) };
    k.Yf = function (a) { if (38 != a.keyCode && 40 != a.keyCode) { var b = a.target, c = pt.getInstance(); b = rt(c, b); b = Lp(this, "search-input", b); 13 != a.keyCode && 9 != a.keyCode && 32 != a.keyCode && (b.value = ""); b.focus() } }; function dv() { this.l = 1E3 / 24; this.j = null; this.i = [] }
    var ev = new dv; dv.prototype.o = function () { for (var a = Date.now(), b = this.i.length - 1; 0 <= b; b--)fv(this.i[b], a) && gv(this, b) };
    dv.prototype.add = function (a) { this.i.push(a); this.j || (this.j = $n(z(this.o, this), this.l)) };
    dv.prototype.remove = function (a) { a = cb(this.i, a); 0 <= a && gv(this, a) };
    function gv(a, b) { pb(a.i, b); a.i.length || (ao(a.j), delete a.j) }
    ; function hv(a, b) { this.i = new ok(0, 0, a.x, a.y, b.x, b.y, 1, 1) }
    function iv(a) { return a }
    var jv = new hv({ x: .25, y: .1 }, { x: .25, y: 1 }); function kv(a) { return rk(jv.i, a) }
    var lv = new hv({ x: .42, y: 0 }, { x: 1, y: 1 }); function mv(a) { return rk(lv.i, a) }
    var nv = new hv({ x: 0, y: 0 }, { x: .58, y: 1 }); function ov(a) { return rk(nv.i, a) }
    var pv = new hv({ x: .42, y: 0 }, { x: .58, y: 1 }); function qv(a) { return rk(pv.i, a) }
    function rv(a) { switch (a) { case "linear": return iv; case "ease-in": return mv; case "ease-out": return ov; case "ease-in-out": return qv; default: return kv } }
    ; function sv(a, b) { b = b || {}; this.el = a; this.duration = b.duration || .25; this.mc = b.onFinish || null; this.gd = b.gd || "ease"; this.setup(b); b.tj || this.play() }
    sv.prototype.setup = function () { }; var tv; function uv() { if (void 0 === tv) { var a = document.createElement("div"); void 0 !== a.style.MozTransition ? tv = "Moz" : void 0 !== a.style.WebkitTransition ? tv = "Webkit" : void 0 !== a.style.i ? tv = "O" : tv = null } return tv }
    ; function vv(a, b) { sv.call(this, a, b) }
    A(vv, sv); function wv(a, b, c) { b = uv() + b; a.el.style[b] = c }
    vv.prototype.play = function () {
        this.el.style.opacity = this.j; P(z(function () {
            wv(this, "TransitionTimingFunction", this.gd); wv(this, "TransitionDuration", this.duration + "s"); wv(this, "TransitionProperty", "opacity"); Dn(this.el, te ? "webkitTransitionEnd" : oe ? "oTransitionEnd" : "transitionend", z(function () { wv(this, "TransitionTimingFunction", ""); wv(this, "TransitionDuration", ""); wv(this, "TransitionProperty", ""); this.mc && this.mc(this) }, this));
            this.el.style.opacity = this.i
        }, this), 20)
    }; function xv(a, b) { this.j = this.i = 0; this.A = ev; this.B = null; sv.call(this, a, b) }
    A(xv, sv); xv.prototype.setup = function (a) { this.i = 0; this.A = a.loop || ev; this.B = rv(this.gd) };
    xv.prototype.play = function () { this.j = Date.now(); fv(this, this.j); this.A.add(this) };
    xv.prototype.pause = function () { this.A.remove(this) };
    function fv(a, b) { var c = 1E3 * a.duration; a.i = Math.min(a.i + (b - a.j), c); a.j = b; b = a.B(a.i / c); b = a.o - (a.o - a.l) * b; a.G ? a.el.style.filter = "alpha(opacity=" + Math.floor(100 * b) + ")" : a.el.style.opacity = b; if (c = a.i >= c) a.onFinish(), a.mc && P(z(a.mc, u, a), 0); return c }
    xv.prototype.onFinish = function () { }; function yv(a, b) { this.o = 1; this.l = 0; this.G = !1; xv.call(this, a, b) }
    A(yv, xv); yv.prototype.setup = function (a) { var b = parseFloat(a.start), c = parseFloat(a.end); this.o = isNaN(b) ? 1 : b; this.l = isNaN(c) ? 0 : c; this.G = void 0 === this.el.style.opacity; yv.T.setup.call(this, a) };
    yv.prototype.onFinish = function () { this.G && 1 == this.l && (this.el.style.filter = "") };
    function zv(a, b) { this.j = 1; this.i = 0; sv.call(this, a, b) }
    A(zv, vv); zv.prototype.setup = function (a) { var b = parseFloat(a.start), c = parseFloat(a.end); this.j = isNaN(b) ? 1 : b; this.i = isNaN(c) ? 0 : c; zv.T.setup.call(this, a) }; function Av(a, b, c) { var d = { duration: .5 }; d.start = b; d.end = c; uv() ? new zv(a, d) : new yv(a, d) }
    ; function Bv(a, b, c) { c = void 0 === c ? {} : c; var d = Xs; J("ytLoggingEventsDefaultDisabled", !1) && Xs == Xs && (d = null); rq(a, b, d, c) }
    function Cv() { hq() }
    ; var Dv = [{
        Xc: function (a) { return "Cannot read property '" + a.key + "'" },
        sc: {
            Error: [{ regexp: /(Permission denied) to access property "([^']+)"/, groups: ["reason", "key"] }], TypeError: [{ regexp: /Cannot read property '([^']+)' of (null|undefined)/, groups: ["key", "value"] }, { regexp: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/, groups: ["value", "key"] }, {
                regexp: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
                groups: ["value", "key"]
            }, { regexp: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/, groups: ["key"] }, { regexp: /Unable to get property '([^']+)' of (undefined or null) reference/, groups: ["key", "value"] }, { regexp: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/, groups: ["value", "base", "key"] }]
        }
    }, {
        Xc: function (a) { return "Cannot call '" + a.key + "'" },
        sc: {
            TypeError: [{ regexp: /(?:([^ ]+)?\.)?([^ ]+) is not a function/, groups: ["base", "key"] }, { regexp: /([^ ]+) called on (null or undefined)/, groups: ["key", "value"] }, { regexp: /Object (.*) has no method '([^ ]+)'/, groups: ["base", "key"] }, { regexp: /Object doesn't support property or method '([^ ]+)'/, groups: ["key"] }, {
                regexp: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
                groups: ["key"]
            }, { regexp: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./, groups: ["key"] }]
        }
    }, {
        Xc: function (a) { return a.key + " is not defined" },
        sc: { ReferenceError: [{ regexp: /(.*) is not defined/, groups: ["key"] }, { regexp: /Can't find variable: (.*)/, groups: ["key"] }] }
    }]; var Fv = { Wa: [], Qa: [{ callback: Ev, weight: 500 }] }; function Ev(a) { a = a.stack; return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://") }
    ; function Gv() { this.Qa = []; this.Wa = [] }
    var Hv; function Iv() { if (!Hv) { var a = Hv = new Gv; a.Wa.length = 0; a.Qa.length = 0; Fv.Wa && a.Wa.push.apply(a.Wa, Fv.Wa); Fv.Qa && a.Qa.push.apply(a.Qa, Fv.Qa) } return Hv }
    ; var Jv = new mm; function Kv(a) {
        function b() { return a.charCodeAt(d++) }
        var c = a.length, d = 0; do { var e = Lv(b); if (Infinity === e) break; var f = e >> 3; switch (e & 7) { case 0: e = Lv(b); if (2 === f) return e; break; case 1: if (2 === f) return; d += 8; break; case 2: e = Lv(b); if (2 === f) return a.substr(d, e); d += e; break; case 5: if (2 === f) return; d += 4; break; default: return } } while (d < c)
    }
    function Lv(a) { var b = a(), c = b & 127; if (128 > b) return c; b = a(); c |= (b & 127) << 7; if (128 > b) return c; b = a(); c |= (b & 127) << 14; if (128 > b) return c; b = a(); return 128 > b ? c | (b & 127) << 21 : Infinity }
    ; function Mv(a, b, c, d) { if (a) if (Array.isArray(a)) { var e = d; for (d = 0; d < a.length && !(a[d] && (e += Nv(d, a[d], b, c), 500 < e)); d++); d = e } else if ("object" === typeof a) for (e in a) { if (a[e]) { var f = a[e]; var g = b; var h = c; g = "string" !== typeof f || "clickTrackingParams" !== e && "trackingParams" !== e ? 0 : (f = Kv(atob(f.replace(/-/g, "+").replace(/_/g, "/")))) ? Nv(e + ".ve", f, g, h) : 0; d += g; d += Nv(e, a[e], b, c); if (500 < d) break } } else c[b] = Ov(a), d += c[b].length; else c[b] = Ov(a), d += c[b].length; return d }
    function Nv(a, b, c, d) { c += "." + a; a = Ov(b); d[c] = a; return c.length + a.length }
    function Ov(a) { return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500) }
    ; var Pv = new Set, Qv = 0, Rv = 0, Sv = 0, Tv = [], Uv = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"]; function Vv(a) { Wv(a, "WARNING") }
    function Wv(a, b, c, d, e, f) {
        f = void 0 === f ? {} : f; f.name = c || J("INNERTUBE_CONTEXT_CLIENT_NAME", 1); f.version = d || J("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0); c = f || {}; b = void 0 === b ? "ERROR" : b; b = void 0 === b ? "ERROR" : b; if (a && (a.hasOwnProperty("level") && a.level && (b = a.level), N("console_log_js_exceptions") && (d = [], d.push("Name: " + a.name), d.push("Message: " + a.message), a.hasOwnProperty("params") && d.push("Error Params: " + JSON.stringify(a.params)), a.hasOwnProperty("args") && d.push("Error args: " + JSON.stringify(a.args)), d.push("File name: " +
            a.fileName), d.push("Stacktrace: " + a.stack), window.console.log(d.join("\n"), a)), !(5 <= Qv))) {
                var g = Eg(a); d = g.message || "Unknown Error"; e = g.name || "UnknownError"; var h = g.stack || a.j || "Not available"; h.startsWith(e + ": " + d) && (f = h.split("\n"), f.shift(), h = f.join("\n")); f = g.lineNumber || "Not available"; g = g.fileName || "Not available"; var l = 0; if (a.hasOwnProperty("args") && a.args && a.args.length) for (var m = 0; m < a.args.length && !(l = Mv(a.args[m], "params." + m, c, l), 500 <= l); m++); else if (a.hasOwnProperty("params") && a.params) {
                    var n =
                        a.params; if ("object" === typeof a.params) for (m in n) { if (n[m]) { var t = "params." + m, w = Ov(n[m]); c[t] = w; l += t.length + w.length; if (500 < l) break } } else c.params = Ov(n)
                } if (Tv.length) for (m = 0; m < Tv.length && !(l = Mv(Tv[m], "params.context." + m, c, l), 500 <= l); m++); navigator.vendor && !c.hasOwnProperty("vendor") && (c["device.vendor"] = navigator.vendor); m = { message: d, name: e, lineNumber: f, fileName: g, stack: h, params: c, sampleWeight: 1 }; c = Number(a.columnNumber); isNaN(c) || (m.lineNumber = m.lineNumber + ":" + c); if ("IGNORED" === a.level) a = 0; else a: {
                    a =
                    Iv(); c = p(a.Wa); for (d = c.next(); !d.done; d = c.next())if (d = d.value, m.message && m.message.match(d.sj)) { a = d.weight; break a } a = p(a.Qa); for (c = a.next(); !c.done; c = a.next())if (c = c.value, c.callback(m)) { a = c.weight; break a } a = 1
                } m.sampleWeight = a; a = p(Dv); for (c = a.next(); !c.done; c = a.next())if (c = c.value, c.sc[m.name]) for (e = p(c.sc[m.name]), d = e.next(); !d.done; d = e.next())if (f = d.value, d = m.message.match(f.regexp)) {
                    m.params["params.error.original"] = d[0]; e = f.groups; f = {}; for (g = 0; g < e.length; g++)f[e[g]] = d[g + 1], m.params["params.error." +
                        e[g]] = d[g + 1]; m.message = c.Xc(f); break
                } m.params || (m.params = {}); a = Iv(); m.params["params.errorServiceSignature"] = "msg=" + a.Wa.length + "&cb=" + a.Qa.length; m.params["params.serviceWorker"] = "false"; u.document && u.document.querySelectorAll && (m.params["params.fscripts"] = String(document.querySelectorAll("script:not([nonce])").length)); Wb("sample").constructor !== Sb && (m.params["params.fconst"] = "true"); window.yterr && "function" === typeof window.yterr && window.yterr(m); if (0 !== m.sampleWeight && !Pv.has(m.message)) {
                    "ERROR" ===
                    b ? (Jv.ha("handleError", m), N("record_app_crashed_web") && 0 === Sv && 1 === m.sampleWeight && (Sv++, Bv("appCrashed", { appCrashType: "APP_CRASH_TYPE_BREAKPAD" })), Rv++) : "WARNING" === b && Jv.ha("handleWarning", m); if (N("kevlar_gel_error_routing")) {
                        a = b; b: { c = p(Uv); for (d = c.next(); !d.done; d = c.next())if (wo(d.value.toLowerCase())) { c = !0; break b } c = !1 } if (c) c = void 0; else {
                            d = { stackTrace: m.stack }; m.fileName && (d.filename = m.fileName); c = m.lineNumber && m.lineNumber.split ? m.lineNumber.split(":") : []; 0 !== c.length && (1 !== c.length || isNaN(Number(c[0])) ?
                                2 !== c.length || isNaN(Number(c[0])) || isNaN(Number(c[1])) || (d.lineNumber = Number(c[0]), d.columnNumber = Number(c[1])) : d.lineNumber = Number(c[0])); c = { level: "ERROR_LEVEL_UNKNOWN", message: m.message, errorClassName: m.name, sampleWeight: m.sampleWeight }; "ERROR" === a ? c.level = "ERROR_LEVEL_ERROR" : "WARNING" === a && (c.level = "ERROR_LEVEL_WARNNING"); d = { isObfuscated: !0, browserStackInfo: d }; e = { pageUrl: window.location.href, kvPairs: [] }; J("FEXP_EXPERIMENTS") && (e.experimentIds = J("FEXP_EXPERIMENTS")); if (f = m.params) for (g = p(Object.keys(f)),
                                    h = g.next(); !h.done; h = g.next())h = h.value, e.kvPairs.push({ key: "client." + h, value: String(f[h]) }); f = J("SERVER_NAME", void 0); g = J("SERVER_VERSION", void 0); f && g && (e.kvPairs.push({ key: "server.name", value: f }), e.kvPairs.push({ key: "server.version", value: g })); c = { errorMetadata: e, stackTrace: d, logMessage: c }
                        } c && (Bv("clientError", c), ("ERROR" === a || N("errors_flush_gel_always_killswitch")) && hq())
                    } if (!N("suppress_error_204_logging")) {
                        a = m.params || {}; b = {
                            urlParams: {
                                a: "logerror", t: "jserror", type: m.name, msg: m.message.substr(0,
                                    250), line: m.lineNumber, level: b, "client.name": a.name
                            }, postParams: { url: J("PAGE_NAME", window.location.href), file: m.fileName }, method: "POST"
                        }; a.version && (b["client.version"] = a.version); if (b.postParams) {
                            m.stack && (b.postParams.stack = m.stack); c = p(Object.keys(a)); for (d = c.next(); !d.done; d = c.next())d = d.value, b.postParams["client." + d] = a[d]; if (a = J("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS", void 0)) for (c = p(Object.keys(a)), d = c.next(); !d.done; d = c.next())d = d.value, b.postParams[d] = a[d]; a = J("SERVER_NAME", void 0); c = J("SERVER_VERSION",
                                void 0); a && c && (b.postParams["server.name"] = a, b.postParams["server.version"] = c)
                        } ho(J("ECATCHER_REPORT_HOST", "") + "/error_204", b)
                    } Pv.add(m.message); Qv++
                }
        }
    }
    ; function Xv(a) { Zo.call(this, 1, arguments); this.csn = a }
    q(Xv, Zo); var pp = new $o("screen-created", Xv), Yv = [], Zv = 0; function $v(a, b, c) { Yv.push({ payloadName: a, payload: b, options: c }); Zv || (Zv = np()) }
    function op(a) { if (Yv) { for (var b = p(Yv), c = b.next(); !c.done; c = b.next())c = c.value, c.payload && (c.payload.csn = a.csn, rq(c.payloadName, c.payload, null, c.options)); Yv.length = 0 } Zv = 0 }
    ; function aw(a, b) { B(b, function (c) { var d = !0, e = (d = void 0 === d ? !1 : d) ? 16 : 8; c = { csn: a, ve: c.getAsJson(), eventType: e }; d = { ya: it(a), yc: a, Nf: d }; "UNDEFINED_CSN" == a ? $v("visualElementHidden", c, d) : Bv("visualElementHidden", c, d) }) }
    ; function bw() { U.call(this, "mouseover-img-wrap"); this.o = this.i = !1; this.C = this.G = this.j = -1; this.l = "" }
    A(bw, U); Ka(bw); var cw = 0, dw = 0; k = bw.prototype; k.register = function () { W(this, "mouseover", this.ob); W(this, "focusin", this.ob); W(this, "focus", this.ob); W(this, "mouseout", this.nb); W(this, "focusout", this.nb); W(this, "blur", this.nb); W(this, "click", this.sd); W(this, "mousedown", this.te) };
    k.unregister = function () { Q(cw); Q(dw); Y(this, "mouseover", this.ob); Y(this, "focusin", this.ob); Y(this, "focus", this.ob); Y(this, "mouseout", this.nb); Y(this, "focusout", this.nb); Y(this, "blur", this.nb); Y(this, "click", this.sd); Y(this, "mousedown", this.te); bw.T.unregister.call(this) };
    function ew(a) { a = a.getElementsByTagName("img"); return 0 < a.length ? a[0] : null }
    function fw(a) { return (a = a.match(RegExp("/([a-zA-Z0-9_-]{11})/"))) ? a[1] : "" }
    function gw(a, b) {
        if (a.o) {
            var c = { isMovingThumbnail: a.i }; if (a.i && 0 < a.j) { var d = a.C - a.G; 0 < a.G && 0 < d && (c.movingThumbnailLoadingDurationMs = Math.round(d)); c.durationHoveredMs = Math.round(Mp() - a.j) } a.l && (c.videoId = a.l); d = gt(); b = K(b, "visibility-tracking"); if (d && b) {
                b = new bt({ trackingParams: b }); c = { thumbnailHoveredData: c }; var e = "INTERACTION_LOGGING_GESTURE_TYPE_HOVER"; b = { csn: d, ve: b.getAsJson(), gestureType: e }; c && (b.clientData = c); c = { ya: it(d), yc: d }; "UNDEFINED_CSN" == d ? $v("visualElementGestured", b, c) : Bv("visualElementGestured",
                    b, c)
            } a.o = !1; a.i = !1; a.j = -1; a.G = -1; a.C = -1; a.l = ""
        }
    }
    function hw(a, b) { a = a.D(b, "mouseover-src"); return vf("IMG", { "class": "mouseover-img", src: a, width: b.width, height: b.height }) }
    function iw(a) { return F("mouseover-img", a) }
    function jw(a, b, c) { 120 != b.naturalWidth ? (a.j = Mp(), a.C = Mp(), cw = P(a.ng, 2500), Av(b, 0, 1)) : c && Av(c, 0, 1) }
    k.ng = function (a) { Q(cw); cw = 0; var b = iw(a); b && (Av(b, 1, 0), (a = F("mouseover-play", a)) && Av(a, 0, 1)) };
    function kw() { var a = vf("DIV", { "class": "mouseover-play" }), b = document.createElementNS("http://www.w3.org/2000/svg", "svg"); b.setAttribute("width", "48px"); b.setAttribute("height", "48px"); b.setAttribute("viewBox", "0 0 24 24"); b.setAttribute("fill", "#fff"); var c = document.createElementNS("http://www.w3.org/2000/svg", "path"); c.setAttribute("d", "M8 5v14l11-7z"); b.appendChild(c); a.appendChild(b); return a }
    function lw(a) { return "none" != (lg(a, "display") || (a.currentStyle ? a.currentStyle.display : null) || a.style && a.style.display) }
    k.te = function (a) { Q(dw); dw = 0; (a = iw(a)) && !a.complete && (hd(a, ""), a.onload = null, Q(cw), cw = 0) };
    k.ob = function (a) { var b = ew(a); if (b) { var c = this.D(b, "mouseover-src"), d = F("mouseover-play", a), e = iw(a); if (!d || c && !e) c ? (this.i = !0, this.l = fw(c)) : (this.i = !1, b.src && (this.l = fw(b.src))), d || (d = kw(), b.parentNode.appendChild(d)), Q(dw), dw = 0, this.o = !1, dw = P(function () { this.G = Mp(); this.o = !0; d && !c && Av(d, 0, 1); c && !e && (e = hw(this, b), b.parentNode.appendChild(e), e.complete ? jw(this, e, d) : e.onload = function () { jw(this, e, d) }.bind(this)) }.bind(this), 150) } };
    k.nb = function (a) { var b = ew(a); if (null != b) { var c = this.D(b, "mouseover-src"); b = this.D(b, "mouseover-log"); var d = F("mouseover-play", a), e = iw(a); if (d && !lw(d) || c && e && !lw(e)) Q(dw), dw = 0, d && d.parentNode.removeChild(d), e && (e.onload = null, e.complete && 120 != e.naturalWidth || (this.j = 0), Q(cw), cw = 0, hd(e, ""), e.parentNode.removeChild(e)), b && gw(this, G(a, "yt-lockup-video")) } };
    k.sd = function (a) { var b = ew(a); null != b && this.D(b, "mouseover-log") && gw(this, G(a, "yt-lockup-video")) }; function mw() { U.call(this, "redirect-link") }
    A(mw, U); Ka(mw); mw.prototype.register = function () { W(this, "click", this.i) };
    mw.prototype.unregister = function () { Y(this, "click", this.i) };
    mw.prototype.i = function (a) { if (!K(a, "redirect-href-updated")) { an(a, "redirect-href-updated", "true"); var b = J("XSRF_REDIRECT_TOKEN"); if (b) { var c = {}; c.q = a.href; c.redir_token = b; gd(a, Kd("/redirect", c)) } } }; function nw() { U.call(this, "scroller"); this.i = {} }
    A(nw, U); Ka(nw); k = nw.prototype; k.register = function () { W(this, "mouseenter", this.ue); W(this, "mouseleave", this.kc) };
    k.unregister = function () { Y(this, "mouseenter", this.ue); Y(this, "mouseleave", this.kc); for (var a in this.i) this.kc(this.i[a]); this.i = {}; nw.T.unregister.call(this) };
    k.dispose = function () { for (var a in this.i) this.kc(this.i[a]); this.i = {} };
    k.ue = function (a) { var b = L(a, "mousewheel", z(this.hg, this, a)); an(a, "scroller-mousewheel-listener", b); b = L(a, "scroll", z(this.lf, this, a)); an(a, "scroller-scroll-listener", b); a && (b = Oa(a).toString(), this.i[b] = a) };
    k.kc = function (a) { var b = this.D(a, "scroller-mousewheel-listener") || ""; an(a, "scroller-mousewheel-listener", ""); var c = this.D(a, "scroller-scroll-listener") || ""; an(a, "scroller-scroll-listener", ""); M(b); M(c); an(a, "scroller-scroll-listener", ""); a && (a = Oa(a).toString(), delete this.i[a]) };
    k.hg = function (a, b) { var c = b || window.event; var d = 0; "MozMousePixelScroll" == c.type ? d = 0 == (c.axis == c.HORIZONTAL_AXIS) ? c.detail : 0 : window.opera ? d = c.detail : d = 0 == c.wheelDelta % 120 ? "WebkitTransform" in document.documentElement.style ? window.chrome && 0 == navigator.platform.indexOf("Mac") ? c.wheelDeltaY / -30 : c.wheelDeltaY / -1.2 : c.wheelDelta / -1.6 : c.wheelDeltaY / -3; if (c = d) d = a.scrollTop, a.scrollTop += c, d == a.scrollTop && this.D(a, "scroller-allow-pagescroll") || b.preventDefault() };
    k.lf = function (a) { this.Ea(a, "scroll-action"); T("yt-dom-content-change", a) }; function ow() { U.call(this, "sessionlink") }
    A(ow, U); Ka(ow); ow.prototype.register = function () { W(this, "mousedown", this.i); W(this, "click", this.i) };
    ow.prototype.unregister = function () { Y(this, "mousedown", this.i); Y(this, "click", this.i) };
    ow.prototype.i = function (a) { pw(a) };
    function pw(a) { var b; if (b = K(a, "sessionlink-target") || a.href || "") { var c = K(a, "sessionlink") || ""; c = On(c); (a = parseInt(K(a, "sessionlink-lifetime"), 10)) ? kt(b, c, a) : kt(b, c) } }
    ; function qw(a) { U.call(this, a || "slider"); this.j = 0; this.i = null }
    A(qw, U); Ka(qw); k = qw.prototype; k.register = function () { W(this, "click", this.Rd, "prev"); W(this, "click", this.Qd, "next"); W(this, "keyup", this.Ce, "item"); this.i = L(window, "resize", z(this.ig, this)); this.oa("yt-uix-expander-toggle", this.Bc) };
    k.unregister = function () { Y(this, "click", this.Rd, "prev"); Y(this, "click", this.Qd, "next"); Y(this, "click", this.Ce, "item"); M(this.i); qw.T.unregister.call(this) };
    k.Bc = function () { B(mf(V(this)), function (a) { rw(this, a) }, this) };
    k.ig = function () { Q(this.j); this.j = P(z(this.Bc, this), 200) };
    function sw(a, b, c) {
        var d = a.Z(b); if (!I(d, V(a, "is-moving"))) {
            b = Lp(a, "list", d); var e = Lp(a, "body", d), f = sb(mf(V(a, "item"), d)); if (f) {
                var g = f[0]; if ("forward" == c) { var h = tw(d, e, f); c = void 0 !== h.nextElementSibling ? h.nextElementSibling : Hf(h.nextSibling, !0); if (!c) return; h = uw(a, c, e, f); g = c } else if ("back" == c) { h = vw(d, e, f); c = void 0 !== h.previousElementSibling ? h.previousElementSibling : Hf(h.previousSibling, !1); if (!c) return; h = ww(a, c, e, f); g = c } Bj(d, V(a, "is-moving")); yg(d) ? b.style.right = (parseInt(b.style.right, 10) || 0) - h +
                    "px" : b.style.left = (parseInt(b.style.left, 10) || 0) + h + "px"; var l = P(z(a.Oe, a, d, g), 510); Dn(b, Ni, z(function (m) { Q(l); this.Oe(d, m) }, a, g))
            }
        }
    }
    k.Qd = function (a) { sw(this, a, "forward") };
    k.Rd = function (a) { sw(this, a, "back") };
    k.Ce = function (a) { (a = this.Z(a)) && T("yt-dom-content-change", a) };
    function vw(a, b, c) { return yg(a) ? xw(a, b, c) : yw(a, b, c) }
    function tw(a, b, c) { return yg(a) ? yw(a, b, c) : xw(a, b, c) }
    function yw(a, b, c) {
        function d(f) { return rg(f) > e - 1 }
        var e = rg(b); return yg(a) ? lb(c, d) : jb(c, d)
    }
    function xw(a, b, c) {
        function d(f) { f = rg(f) + f.offsetWidth; return e > f - 1 }
        var e = rg(b) + b.offsetWidth; return yg(a) ? jb(c, d) : lb(c, d)
    }
    function ww(a, b, c, d) { var e = a.Z(b); var f = rg(c); var g = f + c.offsetWidth, h = rg(b); b = h + b.offsetWidth; var l = d[0]; d = rg(l); l = d + l.offsetWidth; yg(e) ? (c = a.Sc(e, c) - h, f = g - l) : (c = a.Tc(e, c) - b, f -= d); Fj(e, V(a, "at-tail"), !1); if (Math.abs(c) + 1 < Math.abs(f)) return c; Fj(e, V(a, "at-head"), !0); return f }
    function uw(a, b, c, d) { var e = a.Z(b); var f = rg(c); var g = f + c.offsetWidth, h = rg(b); b = h + b.offsetWidth; var l = d[d.length - 1]; d = rg(l); l = d + l.offsetWidth; yg(e) ? (c = a.Tc(e, c) - b, f -= d) : (c = a.Sc(e, c) - h, f = g - l); Fj(e, V(a, "at-head"), !1); if (Math.abs(c) + 1 < Math.abs(f)) return c; Fj(e, V(a, "at-tail"), !0); return f }
    k.Sc = function (a, b) { return rg(b) };
    k.Tc = function (a, b) { return rg(b) + b.offsetWidth };
    k.Oe = function (a, b) { a && (Dj(a, V(this, "is-moving")), rw(this, a), T("yt-uix-slider-slide-shown", b), T("yt-dom-content-change", a)) };
    function rw(a, b) { var c = Lp(a, "body", b), d = sb(mf(V(a, "item"), b)); if (d && d.length) { var e = vw(b, c, d); c = tw(b, c, d); e = e == d[0]; d = c == d[d.length - 1] } else e = d = !0; Fj(b, V(a, "at-head"), e); Fj(b, V(a, "at-tail"), d); if (a.D(b, "disable-slider-buttons")) { if (c = Lp(a, "prev", b)) c.disabled = e; if (a = Lp(a, "next", b)) a.disabled = d } }
    ; function zw() { U.call(this, "tabs") }
    A(zw, U); Ka(zw); zw.prototype.register = function () { W(this, "click", this.i, "tab"); W(this, "keydown", this.j, "tab") };
    zw.prototype.unregister = function () { Y(this, "click", this.i, "tab"); Y(this, "keydown", this.j, "tab"); zw.T.unregister.call(this) };
    zw.prototype.i = function (a) { if (!I(a, "disabled")) { var b = this.Z(a), c = V(this, "selected"), d = this.D(b, "uix-tabs-selected-extra-class"); if (b = F(c, b)) { var e = Aw(this, b); Dj(b, c); d && Dj(b, d); Bp(e) } b = Aw(this, a); Bj(a, c); d && Bj(a, d); Ap(b); T("yt-uix-tabs-after-shown", a, b) } };
    zw.prototype.j = function (a, b, c) { 13 == c.keyCode && this.i(a) };
    function Aw(a, b) { a = a.D(b, "uix-tabs-target-id"); return E(a) }
    ; function Bw() { U.call(this, "tile") }
    A(Bw, U); Ka(Bw); Bw.prototype.register = function () { W(this, "click", this.i) };
    Bw.prototype.unregister = function () { Y(this, "click", this.i) };
    Bw.prototype.i = function (a, b, c) { Uf(c.target, "a") || Uf(c.target, "button") || !(a = F(V(this, "link"), a)) || (pe && !Ie(9) ? a.click() : (I(a, "yt-uix-sessionlink") && pw(a), I(a, "spf-link") ? nt(a.href) : mt(a.href))) }; function Cw() { var a = void 0 === a ? !1 : a; var b = on(); if (a) for (; b && b.shadowRoot;)b = b.shadowRoot.fullscreenElement; return b ? b : null }
    ; function Dw() { U.call(this, "tooltip"); this.i = 0; this.j = {} }
    A(Dw, U); Ka(Dw); k = Dw.prototype; k.register = function () { W(this, "mouseover", this.Tb); W(this, "mouseout", this.eb); W(this, "focus", this.Xd); W(this, "blur", this.Jd); W(this, "click", this.eb); W(this, "touchstart", this.Ze); W(this, "touchend", this.Ac); W(this, "touchcancel", this.Ac) };
    k.unregister = function () { Y(this, "mouseover", this.Tb); Y(this, "mouseout", this.eb); Y(this, "focus", this.Xd); Y(this, "blur", this.Jd); Y(this, "click", this.eb); Y(this, "touchstart", this.Ze); Y(this, "touchend", this.Ac); Y(this, "touchcancel", this.Ac); this.dispose(); Dw.T.unregister.call(this) };
    k.dispose = function () { for (var a in this.j) this.eb(this.j[a]); this.j = {} };
    k.Tb = function (a) {
        if (!(this.i && 1E3 > Date.now() - this.i)) {
            var b = parseInt(this.D(a, "tooltip-hide-timer"), 10); b && (cn(a, "tooltip-hide-timer"), Q(b)); b = z(function () { Ew(this, a); cn(a, "tooltip-show-timer") }, this);
            var c = parseInt(this.D(a, "tooltip-show-delay"), 10) || 0; b = P(b, c); an(a, "tooltip-show-timer", b.toString()); a.title && (Kp(a, Fw(this, a)), a.title = ""); b = Oa(a).toString(); this.j[b] = a
        }
    };
    k.eb = function (a) {
        var b = parseInt(this.D(a, "tooltip-show-timer"), 10); b && (Q(b), cn(a, "tooltip-show-timer")); b = z(function () { if (a) { var c = E(Gw(this, a)); c && (Hw(c), Cf(c), cn(a, "content-id")); c = E(Gw(this, a, "arialabel")); Cf(c) } cn(a, "tooltip-hide-timer") }, this);
        b = P(b, 50); an(a, "tooltip-hide-timer", b.toString()); if (b = this.D(a, "tooltip-text")) a.title = b; b = Oa(a).toString(); delete this.j[b]
    };
    k.Xd = function (a, b) { this.i = 0; this.Tb(a, b) };
    k.Jd = function (a) { this.i = 0; this.eb(a) };
    k.Ze = function (a, b, c) { c.changedTouches && (this.i = 0, (a = Hp(b, V(this), c.changedTouches[0].target)) && this.Tb(a, b)) };
    k.Ac = function (a, b, c) { c.changedTouches && (this.i = Date.now(), (a = Hp(b, V(this), c.changedTouches[0].target)) && this.eb(a)) };
    function Iw(a, b, c) { Kp(b, c); a = a.D(b, "content-id"); (a = E(a)) && Lf(a, c) }
    function Fw(a, b) { return a.D(b, "tooltip-text") || b.title }
    function Ew(a, b) {
        if (b) {
            var c = Fw(a, b); if (c) {
                var d = E(Gw(a, b)); if (!d) {
                    d = document.createElement("div"); d.id = Gw(a, b); Aj(d, V(a, "tip")); var e = document.createElement("div"); Aj(e, V(a, "tip-body")); var f = document.createElement("div"); Aj(f, V(a, "tip-arrow")); var g = document.createElement("div"); g.setAttribute("aria-hidden", "true"); Aj(g, V(a, "tip-content")); var h = Jw(a, b), l = Gw(a, b, "content"); g.id = l; an(b, "content-id", l); e.appendChild(g); h && d.appendChild(h); d.appendChild(e); d.appendChild(f); var m = Sf(b); l = Gw(a, b, "arialabel");
                    f = document.createElement("div"); Bj(f, V(a, "arialabel")); f.id = l; m = b.hasAttribute("aria-label") ? b.getAttribute("aria-label") : "rtl" == document.body.getAttribute("dir") ? c + " " + m : m + " " + c; Lf(f, m); b.setAttribute("aria-labelledby", l); l = Cw() || document.body; l.appendChild(f); l.appendChild(d); Iw(a, b, c); (c = parseInt(a.D(b, "tooltip-max-width"), 10)) && e.offsetWidth > c && (e.style.width = c + "px", Bj(g, V(a, "normal-wrap"))); g = I(b, V(a, "reverse")); Kw(a, b, d, e, h, g) || Kw(a, b, d, e, h, !g); var n = V(a, "tip-visible"); P(function () { Bj(d, n) },
                        0)
                }
            }
        }
    }
    function Kw(a, b, c, d, e, f) {
        Fj(c, V(a, "tip-reverse"), f); var g = 0; f && (g = 1); var h = vg(b); f = new cf((h.width - 10) / 2, f ? h.height : 0); var l = qg(b); lm(new cf(l.x + f.x, l.y + f.y), c, g); f = qf(window); if (1 == c.nodeType) var m = sg(c); else c = c.changedTouches ? c.changedTouches[0] : c, m = new cf(c.clientX, c.clientY); c = vg(d); var n = Math.floor(c.width / 2); g = !!(f.height < m.y + h.height); h = !!(m.y < h.height); l = !!(m.x < n); f = !!(f.width < m.x + n); m = (c.width + 3) / -2 - -5; a = a.D(b, "force-tooltip-direction"); if ("left" == a || l) m = -5; else if ("right" == a || f) m = 20 - c.width -
            3; a = Math.floor(m) + "px"; d.style.left = a; e && (e.style.left = a, e.style.height = c.height + "px", e.style.width = c.width + "px"); return !(g || h)
    }
    function Gw(a, b, c) { a = V(a) + jn(b); c && (a += "-" + c); return a }
    function Jw(a, b) { var c = null; ve && I(b, V(a, "masked")) && ((c = E("yt-uix-tooltip-shared-mask")) ? (c.parentNode.removeChild(c), Ap(c)) : (c = yf("IFRAME"), c.src = 'javascript:""', c.id = "yt-uix-tooltip-shared-mask", Aj(c, V(a, "tip-mask")))); return c }
    function Hw(a) {
        var b = E("yt-uix-tooltip-shared-mask"), c = b && Vf(b, function (d) { return d == a }, !1, 2);
        b && c && (b.parentNode.removeChild(b), Bp(b), document.body.appendChild(b))
    }
    ; var Lw = window.yt && window.yt.uix && window.yt.uix.widgets_ || {}; x("yt.uix.widgets_", Lw, void 0); function Mw(a) { a = a.getInstance(); var b = V(a); b in Lw || (a.register(), a.oa("yt-uix-init-" + b, a.init), a.oa("yt-uix-dispose-" + b, a.dispose), Lw[b] = a) }
    ; function Nw() { this.l = [] }
    k = Nw.prototype; k.Be = function () { };
    k.dispose = function () { this.l && (M(this.l), this.l = []); this.Be() };
    function Ow(a, b, c, d, e) { a.l.push(Bn(b, c, z(d, a), e)) }
    k.ib = function (a, b, c, d) { this.l.push(L(a, b, z(c, d || this))) };
    k.redirect = function (a) { mt(a) };
    function Pw(a, b) { if (!b) return !1; var c = b.redirect_url; if (!c) try { c = po(qo(b), "redirect_url") } catch (d) { c = null } if (!c) return !1; a.redirect(c); return !0 }
    k.lc = function () { };
    k.Kg = function (a, b, c) { (c = JSON.parse(c.responseText)) && (a && Pw(this, c) || b && b.call(this, c)) };
    function Qw(a, b, c, d, e, f, g) { a = { format: b, method: "POST", onError: g || z(a.lc, a), onFinish: void 0, onSuccess: f, postParams: e || {}, urlParams: d || {}, convertToSafeHtml: !0 }; ho(c, a) }
    ; function Rw(a) { a = a || {}; var b = {}, c = {}; this.url = a.url || ""; this.args = a.args || Kb(b); this.assets = a.assets || {}; this.attrs = a.attrs || Kb(c); this.fallback = a.fallback || null; this.fallbackMessage = a.fallbackMessage || null; this.html5 = !!a.html5; this.disable = a.disable || {}; this.loaded = !!a.loaded; this.messages = a.messages || {} }
    Rw.prototype.clone = function () { var a = new Rw, b; for (b in this) if (this.hasOwnProperty(b)) { var c = this[b]; "object" == La(c) ? a[b] = Kb(c) : a[b] = c } return a }; function Sw() { var a = Number(J("DCLKSTAT", 0)); return isNaN(a) ? 0 : a }
    ; function Tw() { this.j = !1; this.i = null }
    Tw.prototype.initialize = function (a, b, c, d) {
        d = void 0 === d ? !1 : d; var e, f; if (a.program) {
            var g = null !== (e = a.interpreterScript) && void 0 !== e ? e : null, h = null !== (f = a.interpreterUrl) && void 0 !== f ? f : null; if (a.interpreterSafeScript) { g = a.interpreterSafeScript; Wb("From proto message. b/166824318"); g = g.privateDoNotAccessOrElseSafeScriptWrappedValue || ""; var l = Rb(); g = l ? l.createScript(g) : g; g = (new Yb(g)).toString() } a.interpreterSafeUrl && (h = a.interpreterSafeUrl, Wb("From proto message. b/166824318"), h = dc(h.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue ||
                "").toString()); Uw(this, g, h, a.program, b, c, d)
        } else Vv(Error("Cannot initialize botguard without program"))
    };
    function Uw(a, b, c, d, e, f, g) {
        g = void 0 === g ? !1 : g; c ? (a.j = !0, Po(c, function () { a.j = !1; var h = 0 <= c.indexOf("/th/"); if (h ? window.trayride : window.botguard) Vw(a, d, !!g, h, e); else { h = Ro(c); var l = document.getElementById(h); l && (Lo(h), l.parentNode.removeChild(l)); Vv(new Yq("Unable to load Botguard", "from " + c)) } }, f)) : b && (f = yf("SCRIPT"), f.textContent = b, f.nonce = jd("script[nonce]", void 0), document.head.appendChild(f), document.head.removeChild(f), ((b = b.includes("trayride")) ? window.trayride : window.botguard) ? Vw(a, d, !!g, b, e) :
            Vv(Error("Unable to load Botguard from JS")))
    }
    function Vw(a, b, c, d, e) { var f, g; if (d = d ? null === (f = window.trayride) || void 0 === f ? void 0 : f.ad : null === (g = window.botguard) || void 0 === g ? void 0 : g.bg) if (c) try { Ww(a, new d(b, e ? function () { return e(b) } : Ja)) } catch (h) { h instanceof Error && Vv(h) } else { try { Ww(a, new d(b)) } catch (h) { h instanceof Error && Vv(h) } e && e(b) } else Vv(Error("Failed to finish initializing VM")) }
    Tw.prototype.invoke = function (a) { a = void 0 === a ? {} : a; return this.i ? this.i.hasOwnProperty("hot") ? this.i.hot(void 0, void 0, a) : this.i.invoke(void 0, void 0, a) : null };
    Tw.prototype.dispose = function () { this.i = null };
    function Ww(a, b) { a.i = b }
    ; var Xw = new Tw; function Yw() { return !!Xw.i }
    function Zw(a) { a = void 0 === a ? {} : a; return Xw.invoke(a) }
    ; function $w() { Ji.call(this); this.i = [] }
    q($w, Ji); $w.prototype.O = function () { for (; this.i.length;) { var a = this.i.pop(); a.target.removeEventListener(a.name, a.callback, void 0) } Ji.prototype.O.call(this) }; function ax(a, b, c, d) { Ji.call(this); var e = this; this.H = b; this.webPlayerContextConfig = d; this.ea = !1; this.api = {}; this.X = this.A = null; this.M = new mm; this.i = {}; this.U = this.W = this.elementId = this.ia = this.config = null; this.N = !1; this.l = this.B = null; this.ga = {}; this.Vb = ["onReady"]; this.lastError = null; this.Da = NaN; this.C = {}; this.Lc = new $w(this); this.V = 0; this.j = this.o = a; Ki(this, Ua(Ii, this.M)); bx(this); cx(this); Ki(this, Ua(Ii, this.Lc)); c ? this.V = P(function () { e.loadNewVideoConfig(c) }, 0) : d && (dx(this), ex(this)) }
    q(ax, Ji); k = ax.prototype; k.getId = function () { return this.H };
    k.loadNewVideoConfig = function (a) { if (!this.isDisposed()) { this.V && (Q(this.V), this.V = 0); var b = a || {}; b instanceof Rw || (b = new Rw(b)); this.config = b; this.setConfig(a); ex(this); this.isReady() && fx(this) } };
    function dx(a) { var b, c; a.webPlayerContextConfig ? c = a.webPlayerContextConfig.rootElementId : c = a.config.attrs.id; a.elementId = c || a.elementId; "video-player" === a.elementId && (a.elementId = a.H, a.webPlayerContextConfig ? a.webPlayerContextConfig.rootElementId = a.H : a.config.attrs.id = a.H); (null === (b = a.j) || void 0 === b ? void 0 : b.id) === a.elementId && (a.elementId += "-player", a.webPlayerContextConfig ? a.webPlayerContextConfig.rootElementId = a.elementId : a.config.attrs.id = a.elementId) }
    k.setConfig = function (a) { var b; this.ia = a; this.config = gx(a); dx(this); this.W || (this.W = hx(this, (null === (b = this.config.args) || void 0 === b ? void 0 : b.jsapicallback) || "onYouTubePlayerReady")); this.config.args ? this.config.args.jsapicallback = null : this.config.args = { jsapicallback: null }; var c; if (null === (c = this.config) || void 0 === c ? 0 : c.attrs) a = this.config.attrs, (c = a.width) && this.j && (this.j.style.width = ug(Number(c) || c, !0)), (a = a.height) && this.j && (this.j.style.height = ug(Number(a) || a, !0)) };
    function fx(a) { var b; a.config && !0 !== a.config.loaded && (a.config.loaded = !0, !a.config.args || "0" !== a.config.args.autoplay && 0 !== a.config.args.autoplay && !1 !== a.config.args.autoplay ? a.api.loadVideoByPlayerVars(null !== (b = a.config.args) && void 0 !== b ? b : null) : a.api.cueVideoByPlayerVars(a.config.args)) }
    function ix(a) { var b = !0, c = jx(a); c && a.config && (a = kx(a), b = K(c, "version") === a); return b && !!y("yt.player.Application.create") }
    function ex(a) {
        if (!a.isDisposed() && !a.N) {
            var b = ix(a); if (b && "html5" === (jx(a) ? "html5" : null)) a.U = "html5", a.isReady() || lx(a); else if (mx(a), a.U = "html5", b && a.l && a.o) a.o.appendChild(a.l), lx(a); else {
                a.config && (a.config.loaded = !0); var c = !1; a.B = function () { c = !0; var d = nx(a, "player_bootstrap_method") ? y("yt.player.Application.createAlternate") || y("yt.player.Application.create") : y("yt.player.Application.create"); var e = a.config ? gx(a.config) : void 0; d && d(a.o, e, a.webPlayerContextConfig); lx(a) };
                a.N = !0; b ? a.B() : (Po(kx(a), a.B), (b = ox(a)) && Vo(b), px(a) && !c && x("yt.player.Application.create", null, void 0))
            }
        }
    }
    function jx(a) { var b = E(a.elementId); !b && a.j && a.j.querySelector && (b = a.j.querySelector("#" + a.elementId)); return b }
    function lx(a) { var b; if (!a.isDisposed()) { var c = jx(a), d = !1; c && c.getApiInterface && c.getApiInterface() && (d = !0); d ? (a.N = !1, !nx(a, "html5_remove_not_servable_check_killswitch") && (null === c || void 0 === c ? 0 : c.isNotServable) && a.config && (null === c || void 0 === c ? 0 : c.isNotServable(null === (b = a.config.args) || void 0 === b ? void 0 : b.video_id)) || qx(a)) : a.Da = P(function () { lx(a) }, 50) } }
    function qx(a) { bx(a); a.ea = !0; var b = jx(a); if (b) { a.A = rx(a, b, "addEventListener"); a.X = rx(a, b, "removeEventListener"); var c = b.getApiInterface(); c = c.concat(b.getInternalApiInterface()); for (var d = a.api, e = 0; e < c.length; e++) { var f = c[e]; d[f] || (d[f] = rx(a, b, f)) } } for (var g in a.i) a.i.hasOwnProperty(g) && a.A && a.A(g, a.i[g]); fx(a); a.W && a.W(a.api); a.M.ha("onReady", a.api) }
    function rx(a, b, c) { var d = b[c]; return function (e) { for (var f = [], g = 0; g < arguments.length; ++g)f[g - 0] = arguments[g]; try { return a.lastError = null, d.apply(b, f) } catch (h) { "sendAbandonmentPing" !== c && (h.params = c, a.lastError = h, Vv(h)) } } }
    function bx(a) {
        a.ea = !1; if (a.X) for (var b in a.i) a.i.hasOwnProperty(b) && a.X(b, a.i[b]); for (var c in a.C) a.C.hasOwnProperty(c) && Q(Number(c)); a.C = {}; a.A = null; a.X = null; b = a.api; for (var d in b) b.hasOwnProperty(d) && (b[d] = null); b.addEventListener = function (e, f) { a.addEventListener(e, f) };
        b.removeEventListener = function (e, f) { a.removeEventListener(e, f) };
        b.destroy = function () { a.dispose() };
        b.getLastError = function () { return a.getLastError() };
        b.getPlayerType = function () { return a.getPlayerType() };
        b.getCurrentVideoConfig = function () { return a.ia };
        b.loadNewVideoConfig = function (e) { a.loadNewVideoConfig(e) };
        b.isReady = function () { return a.isReady() }
    }
    k.isReady = function () { return this.ea };
    function cx(a) {
        a.addEventListener("WATCH_LATER_VIDEO_ADDED", function (b) { T("WATCH_LATER_VIDEO_ADDED", b) });
        a.addEventListener("WATCH_LATER_VIDEO_REMOVED", function (b) { T("WATCH_LATER_VIDEO_REMOVED", b) });
        a.addEventListener("onAdAnnounce", function (b) { T("a11y-announce", b) })
    }
    k.addEventListener = function (a, b) { var c = this; this.isDisposed(); var d = hx(this, b); d && (mb(this.Vb, a) || this.i[a] || (b = sx(this, a), this.A && this.A(a, b)), this.M.subscribe(a, d), "onReady" === a && this.isReady() && P(function () { d(c.api) }, 0)) };
    k.removeEventListener = function (a, b) { this.isDisposed() || (b = hx(this, b)) && om(this.M, a, b) };
    function hx(a, b) {
        var c = b; if ("string" === typeof b) {
            if (a.ga[b]) return a.ga[b]; c = function (d) { for (var e = [], f = 0; f < arguments.length; ++f)e[f - 0] = arguments[f]; if (f = y(b)) try { f.apply(u, e) } catch (g) { Wv(g) } };
            a.ga[b] = c
        } return c ? c : null
    }
    function sx(a, b) {
        var c = "ytPlayer" + b + a.H; a.i[b] = c; u[c] = function (d) {
            var e = P(function () { a.isDisposed(); if (!a.isDisposed()) { a.M.ha(b, d); var f = a.C, g = String(e); g in f && delete f[g] } }, 0);
            Ib(a.C, String(e))
        };
        return c
    }
    k.getPlayerType = function () { return this.U || (jx(this) ? "html5" : null) };
    k.getLastError = function () { return this.lastError };
    function mx(a) { a.cancel(); bx(a); a.U = null; a.config && (a.config.loaded = !1); var b = jx(a); b && (ix(a) || !px(a) ? a.l = b : (b && b.destroy && b.destroy(), a.l = null)); a.o && Bf(a.o) }
    k.cancel = function () { if (this.B) { var a = this.B; kx(this) && a && (a = "" + Oa(a), (a = So[a]) && Jo(a)) } Q(this.Da); this.N = !1 };
    k.O = function () { mx(this); if (this.l && this.config && this.l.destroy) try { this.l.destroy() } catch (b) { Wv(b) } this.ga = null; for (var a in this.i) this.i.hasOwnProperty(a) && (u[this.i[a]] = null); this.ia = this.config = this.api = null; delete this.o; delete this.j; Ji.prototype.O.call(this) };
    function px(a) { var b, c; a = null === (c = null === (b = a.config) || void 0 === b ? void 0 : b.args) || void 0 === c ? void 0 : c.fflags; return !!a && -1 !== a.indexOf("player_destroy_old_version=true") }
    function kx(a) { return a.webPlayerContextConfig ? a.webPlayerContextConfig.jsUrl : (a = a.config.assets) ? a.js : "" }
    function ox(a) { return a.webPlayerContextConfig ? a.webPlayerContextConfig.cssUrl : (a = a.config.assets) ? a.css : "" }
    function nx(a, b) { var c; if (a.webPlayerContextConfig) var d = a.webPlayerContextConfig.serializedExperimentFlags; else if (null === (c = a.config) || void 0 === c ? 0 : c.args) d = a.config.args.fflags; return "true" === Kn(d || "", "&")[b] }
    function gx(a) { for (var b = {}, c = p(Object.keys(a)), d = c.next(); !d.done; d = c.next()) { d = d.value; var e = a[d]; b[d] = "object" === typeof e ? Kb(e) : e } return b }
    ; var tx = {}, ux = "player_uid_" + (1E9 * Math.random() >>> 0); function vx(a, b) {
        var c = void 0 === c ? !0 : c; a = "string" === typeof a ? jf(document, a) : a; var d = ux + "_" + Oa(a), e = tx[d]; if (e && c) return b && b.args && b.args.fflags && b.args.fflags.includes("web_player_remove_playerproxy=true") ? e.api.loadVideoByPlayerVars(b.args || null) : e.loadNewVideoConfig(b), e.api; e = new ax(a, d, b, void 0); tx[d] = e; T("player-added", e.api); Ki(e, function () { delete tx[e.getId()] });
        return e.api
    }
    function wx() { var a; if (a = document.getElementById("player-api")) { var b = ux + "_" + Oa(a), c = tx[b]; c || (c = new ax(a, b), tx[b] = c); a = c.api } else a = null; return a }
    ; function xx() { this.l = []; this.C = this.K = ""; this.G = null; this.H = this.o = !1; this.B = null; this.N = this.M = "" }
    A(xx, Nw); k = xx.prototype; k.Ae = function () { };
    k.close = function (a) { this.H = !1; this.i.dismiss(a || "close"); this.dispose() };
    k.create = function (a, b, c, d) { this.H && (b && (this.G = b), c && (this.B = c), a && !this.o ? this.Hh({}, d) : this.Nc()) };
    k.open = function (a, b, c, d, e, f, g, h, l) { this.K = a; this.M = b; if (this.A = E(this.K + "-lb")) { (a = wx()) && a.pauseVideo && a.pauseVideo(); if (this.o) this.reset(); else { this.i = new fu(this.A, h); try { this.i.setTitle("") } catch (m) { } } yx(this, "loading"); this.i.show(); this.H = !0 } d && this.create(e, f, g, l) };
    k.reset = function () { this.o && zx(this) };
    k.setClass = function (a, b) { Fj(this.ba, a, b) };
    function Ax(a, b) { iu(a.i, b) }
    k.Hh = function (a, b, c, d, e) { arguments.length && yx(this, e || "loading"); var f = a || {}; this.G && (f.feature = this.G); this.B && (f.next = this.B); Qw(this, "XML", this.M, f, b || {}, z(this.Lg, this, c), d) };
    function yx(a, b) { switch (b) { case "content": gu(a.i, "content"); break; case "loading": gu(a.i, "loading"); break; case "working": gu(a.i, "working") } }
    function zx(a, b) { if (a.o && (b = b || a.N)) { if (a.C) { var c = a.ba; Dj(c, a.C); Bj(c, b) } else Bj(a.ba, b); a.C = b } }
    k.Nc = function (a, b) { if (a) { var c = E(this.K + "-dialog"); fd(c, a) } if (b) try { this.i.setTitle(b) } catch (d) { } this.ba = F("yt-dialog-fg", this.A); this.N = K(F("yt-pd-params", this.A), "start-page") || ""; Ow(this, this.ba, "click", this.ah, "yt-pd-close"); Ow(this, this.ba, "click", this.Ug, "yt-pd-setclass"); Ow(this, this.ba, "click", this.hh, "yt-pd-setpage"); this.Ae(); yx(this, "content"); this.o = !0; zx(this) };
    k.ah = function () { this.close("cancel") };
    k.Ug = function (a) { a = G(a.target, "yt-pd-setclass"); var b = K(a, "off"); b && this.setClass(b, !1); (a = K(a, "on")) && this.setClass(a, !0) };
    k.hh = function (a) { a = G(a.target, "yt-pd-setpage"); (a = K(a, "state-container-id")) && zx(this, a) };
    k.lc = function (a) { xx.T.lc.call(this, a); this.close() };
    k.Lg = function (a, b, c) { var d = qo(b); if (d) { var e = po(d, "not_eligible"), f = po(d, "error_message"); e || f ? this.lc(b) : Pw(this, b) || (c = c.html_content || void 0, d = po(d, "title") || void 0, a ? a(b, z(this.Nc, this, c, d)) : this.Nc(c, d)) } }; function Bx() { this.l = []; this.M = this.C = null; this.H = this.o = !1 }
    A(Bx, Nw); k = Bx.prototype; k.Zc = function () { };
    k.oc = function () { };
    k.init = function (a, b, c, d, e) { this.C = a || null; this.M = b || null; c ? d && e && (Ow(this, d, "mousedown", this.td, e), Ow(this, d, "click", this.We, e)) : (this.td(), this.We()) };
    k.ac = function (a, b) { ("string" === typeof a ? y(a + ".init") : a.init).apply(this, Array.prototype.slice.call(arguments, 1)) };
    k.td = function () { this.o || (this.C && Vo(this.C), this.M && Po(this.M, z(function () { (this.o = !0, this.H) && this.oc() }, this))) };
    k.We = function (a) { this.Zc(a); this.H = !0; this.o && this.H && this.oc() }; var Cx = {}; function Dx(a) { var b = Oa(a), c = Cx[b]; c || (c = new a, Cx[b] = c); return c }
    ; function Ex() { Bx.call(this); this.A = null }
    A(Ex, Bx); Ex.prototype.Zc = function (a) { a && (this.A = K(a.currentTarget, "pageid")) };
    Ex.prototype.oc = function () { this.ac("yt.www.account.AddNewChannelDialog", this.A) }; function Fx() { Bx.call(this); this.j = this.i = null; this.U = !1; this.G = this.B = this.K = null }
    A(Fx, Bx); function Gx(a, b, c, d, e) { var f = Dx(Fx); b && (f.i = b); c && (f.K = c); d && (f.B = d); e && (f.G = e); f.init(J("CREATE_CHANNEL_CSS_URL", void 0), J("CREATE_CHANNEL_JS_URL", void 0), !a, E("body-container"), "create-channel-lightbox") }
    Fx.prototype.Zc = function (a) { this.i || (a && (a = K(a.currentTarget, "upsell"), "settings" == a || "upload" == a || "playlist" == a || "guide" == a || "comment" == a || "message" == a || "captions" == a || "live_chat" == a || "tbd_channel_account" == a) && (this.i = a), this.i || (this.i = "default")) };
    Fx.prototype.oc = function () { switch (this.i) { case "settings": this.j = "/profile"; break; case "guide": this.j = J("CREATE_CHANNEL_NEXT_URL_GUIDE", void 0); break; case "upload": this.j = J("CREATE_CHANNEL_NEXT_URL_UPLOAD", void 0); break; default: this.j = document.location.href }J("CREATE_CHANNEL_NEXT_URL") && (this.j = J("CREATE_CHANNEL_NEXT_URL", void 0)); if (!this.U) { this.U = !0; var a = z(this.Kg, this, !1, this.V || null); Qw(this, "JSON", "/create_channel_ajax", { action_get_type: 1 }, {}, a) } };
    Fx.prototype.N = function () { var a = J("CREATE_CHANNEL_NEXT_URL", void 0); a && ("/" == a ? mt(a) : window.history.back()) };
    Fx.prototype.V = function (a) {
        this.U = !1; if (a.open_generic_dialog) Hx(this); else if ("success" in a && a.success) switch (a.type) {
            case 15: case 17: case 18: this.ac("yt.www.account.CreateCoreIdChannelDialog", this.N, this.i, this.j, this.K, this.B, this.G); break; case 8: mt("/oops"); break; case 5: mt("/create_channel?action_blocked_misc=1"); break; case 9: if ("tbd_channel_account" == this.i) { this.ac("yt.www.account.CreateCoreIdChannelDialog", this.N, this.i, this.j, this.K, this.B, this.G); break } default: this.ac("yt.www.account.CreateChannelDialog",
                this.N, this.i, this.j)
        } else "redirect_url" in a && a.redirect_url ? mt(a.redirect_url) : mt("/oops")
    };
    function Hx(a) { var b = Dx(xx), c = a.j; c && (-1 < c.indexOf("create_channel") || -1 < c.indexOf("upload") || -1 < c.indexOf("profile")) && (c = "/"); b.open("create-channel-identity", "/create_channel_ajax", "create_channel_ajax", !0, !0, a.i, c); c && Ax(b, function () { mt(c) }) }
    ; function Ix() { xx.call(this); this.j = []; Vo(J("IDENTITY_PROMPT_CSS_URL", void 0)) }
    A(Ix, xx); k = Ix.prototype; k.Ae = function () { this.j.push(Bn(this.ba, "click", z(this.Zf, this), "identity-prompt-account-list-item")); this.j.push(Bn(this.ba, "click", z(this.mg, this), "specialized-identity-prompt-account-item")); this.j.push(Bn(this.ba, "click", z(this.Wf, this), "authuser-mismatch-identity-prompt-account-item")) };
    k.Be = function () { M(this.j); this.j.length = 0 };
    k.Zf = function (a) { var b = E("identity-prompt-form"); a = kf("input", void 0, a.currentTarget); b && b.action && a && 1 == a.length && (b.action = Qn(b.action, { pageId: a[0].value })); var c = E("identity-prompt-confirm-button"); c ? c.disabled = !1 : b && a && 1 == a.length && (a[0].checked = !0, b.submit()) };
    k.mg = function (a) { a = K(a.currentTarget, "switch-url"); E("dont_ask_again").checked && (a += "&dont_ask_again=on"); mt(a) };
    k.Wf = function (a) { a = K(a.currentTarget, "switch-url"); mt(a) }; function Jx(a, b) { Ji.call(this); this.j = a; this.A = b; this.i = null; this.l = E("page"); a = E("premium-yva-close"); this.i = L(a, "click", z(this.bf, this)); a = this.j; vq.getInstance().get("HIDDEN_MASTHEAD_ID") == a || Bj(this.l, "masthead-ad-expanded"); this.o = L(window, "message", z(this.Vf, this)) }
    A(Jx, Ji); var Kx = /^https?:\/\/(ad.doubleclick|s0.2mdn).net$/; k = Jx.prototype; k.Vf = function (a) { a && a.origin && Kx.test(a.origin) && "creative2yt_requestClose" == a.data && this.ud() };
    k.O = function () { Jx.T.O.call(this); M(this.i); M(this.o); this.o = this.i = null };
    k.ud = function () { Bp("ad_creative_1"); T("ads-masthead-hide"); T("yt-dom-content-change"); this.A && Bp("ad_creative_collapse_btn_1"); Ap("ad_creative_expand_btn_1"); Dj(this.l, "masthead-ad-expanded"); Lx(this.j) };
    k.bf = function () { Ap("ad_creative_expand_btn_1"); var a = E("premium-yva"); Cf(a); a = E("video-masthead"); Cf(a); T("yt-dom-content-change"); Lx(this.j) };
    function Lx(a) { var b = vq.getInstance(); b.set("HIDDEN_MASTHEAD_ID", a); Aq(b) }
    k.mf = function () { var a = vq.getInstance(); a.set("HIDDEN_MASTHEAD_ID", !1); Aq(a); mt(document.location.href) }; function Mx() { qw.call(this, "shelfslider") }
    q(Mx, qw); Mx.prototype.Sc = function (a) { a = yg(a) ? Lp(this, "next", a) : Lp(this, "prev", a); return window.matchMedia && 0 <= document.body.className.indexOf("exp-responsive") && (void 0).matches ? rg(a) + a.offsetWidth - NaN : rg(a) + a.offsetWidth };
    Mx.prototype.Tc = function (a) { a = yg(a) ? Lp(this, "prev", a) : Lp(this, "next", a); return window.matchMedia && 0 <= document.body.className.indexOf("exp-responsive") && (void 0).matches ? rg(a) + void 0 : rg(a) };
    Ka(Mx); var Nx = !1, Ox = !1; function Px(a) { a = void 0 === a ? {} : a; "function" === typeof a && (a = { callback: a }); a._c && a._c.jsl && a._c.jsl.h || Nb(a, { _c: { jsl: { h: J("GAPI_HINT_PARAMS", void 0) } } }); if (a.gapiHintOverride || J("GAPI_HINT_OVERRIDE")) { var b = Pn(document.location.href).gapi_jsh; b && Nb(a, { _c: { jsl: { h: b } } }) } Ei("client", a) }
    ; var Qx = [], Rx = {}, Sx = [], Tx = !1; function Ux() { Qx.push(Bn(document.body, "click", Vx, "yt-google-help-link")) }
    function Vx(a) { a.preventDefault(); var b = K(a.currentTarget, "ghelp-anchor") || a.currentTarget, c = K(a.currentTarget, "ghelp-tracking-param") || ""; b = document.getElementById(b); var d = a.currentTarget, e = J("GOOGLE_HELP_CONTEXT", void 0); a = J("GOOGLE_HELP_PRODUCT_ID", void 0) || K(a.currentTarget, "feedback-product-id"); d = !!K(d, "load-chat-support"); Wx(b, a, e, J("GOOGLE_HELP_PRODUCT_DATA"), d, !1, c) }
    function Xx(a, b) { var c = J("FEEDBACK_LOCALE_LANGUAGE"), d = Rx; Nb(d, J("FEEDBACK_LOCALE_EXTRAS", {})); a && Nb(d, a); try { var e = wx(); e && e.pauseVideo && e.pauseVideo(); e && (d.playback_id = e.getVideoData().cpn, e.getLastError && (d.api_error = e.getLastError())) } catch (f) { } b && Nb(d, { trackingParam: b }); return { helpCenterPath: "/youtube", locale: c, productData: d } }
    function Yx() { var a = J("SESSION_INDEX"), b = J("FEEDBACK_BUCKET_ID"), c = { abuseLink: "https://support.google.com/youtube/bin/answer.py?answer=140536", customZIndex: "2000000005", allowNonLoggedInFeedback: !0 }; a && (c.authuser = a + ""); b && (c.bucket = b); return c }
    function Zx(a, b, c, d) { a = { context: b, anchor: a, enableSendFeedback: c ? !1 : !0, defaultHelpArticleId: d }; Nb(a, Yx()); return a }
    function Wx(a, b, c, d, e, f, g, h) {
        var l = (b || "59") + "", m = Xx(d, g), n = Zx(a, c, f, h), t = e || N("web_always_load_chat_support"); Px(function () { var w = yh(l, m); if (t && !Tx) try { w.j(n), Tx = !0 } catch (v) { } w.o(n) });
        return !1
    }
    function $x() { (pe ? im("7") : Ne ? im("3.6") : Se ? im("5") : Re || qe) || Array.prototype.forEach.call(mf("reportbug"), function (a) { xp(a, !1) }) }
    ; var ay, by = []; function cy(a) { dy("keyboard"); 27 != a.keyCode || a.event && !1 === a.event.returnValue || !document.activeElement || document.activeElement.blur() }
    function ey(a) { 0 >= a.event.clientX && 0 >= a.event.clientY || dy("mouse") }
    function dy(a) { ay !== a && (ay = a, M(by), by.length = 0, "keyboard" == ay ? (fy(!0), by = [L(window, "click", ey), L(window, "mousemove", ey)]) : "mouse" == ay && (fy(!1), by = [L(window, "keydown", cy)])) }
    function fy(a) { Fj(document.documentElement, "no-focus-outline", !a) }
    ; function gy(a) {
        var b = ["guide"]; b = hy(b); if (b.length) {
            var c = a || {}; c.frags = b.join(","); a = J("XSRF_FIELD_NAME", void 0); var d = J("XSRF_TOKEN", void 0), e = "/watch_fragments_ajax"; N("use_watch_fragments2") && (e = "/watch_fragments2_ajax"); c = Kd(e, c); e = {}; e[a] = d; e.client_url = window.location.href; a = Id(e); iy.push(spf.load(c, { method: "POST", postData: a, onDone: function () { if (mb(b, "guide")) { var f = y("yt.www.guide.setup"); f && f(!1); f = J("GUIDE_SELECTED_ITEM", void 0); var g = y("yt.www.guide.selectGuideItem"); g && g(f); T("appbar-guide-delay-load") } T("yt-www-pageFrameCssNotifications-load") } }));
            jy = rb(jy, b)
        }
    }
    function ky() { var a = Pn(window.location.href); a.tr = "nonwatch"; gy(a) }
    function hy(a) { return eb(a, function (b) { return !mb(jy, b) }) }
    var iy = [], jy = [], ly = []; function my() { this.Mh = !0 }
    function ny(a) { var b = {}, c = Zh([]); c && (b.Authorization = c, c = a = null === a || void 0 === a ? void 0 : a.sessionIndex, void 0 === c && (c = Number(J("SESSION_INDEX", 0)), c = isNaN(c) ? 0 : c), b["X-Goog-AuthUser"] = c, "INNERTUBE_HOST_OVERRIDE" in Zm || (b["X-Origin"] = window.location.origin), void 0 === a && "DELEGATED_SESSION_ID" in Zm && (b["X-Goog-PageId"] = J("DELEGATED_SESSION_ID"))); return b }
    ; var oy = { identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN" }; var py = new Map([["dark", "USER_INTERFACE_THEME_DARK"], ["light", "USER_INTERFACE_THEME_LIGHT"]]), qy = ["/fashion", "/feed/fashion_destination", "/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ"]; function ry() { var a = void 0 === a ? window.location.href : a; if (N("kevlar_disable_theme_param")) return null; var b = Bd(Ad(a)[5] || null); if (sy(b)) return "USER_INTERFACE_THEME_DARK"; try { var c = Pn(a).theme; return py.get(c) || null } catch (d) { } return null }
    function sy(a) {
        var b = qy.map(function (c) { return c.toLowerCase() });
        return !N("disable_dark_fashion_destination_launch") && b.some(function (c) { return a.toLowerCase().startsWith(c) }) ? !0 : !1
    }
    ; function ty() { this.i = {}; if (this.j = uo()) { var a = so("CONSISTENCY"); a && uy(this, { encryptedTokenJarContents: a }) } }
    ty.prototype.handleResponse = function (a, b) { var c, d, e; b = (null === (d = null === (c = b.Ua.context) || void 0 === c ? void 0 : c.request) || void 0 === d ? void 0 : d.consistencyTokenJars) || []; (a = null === (e = a.responseContext) || void 0 === e ? void 0 : e.consistencyTokenJar) && this.replace(b, a) };
    ty.prototype.replace = function (a, b) { a = p(a); for (var c = a.next(); !c.done; c = a.next())delete this.i[c.value.encryptedTokenJarContents]; uy(this, b) };
    function uy(a, b) {
        if (b.encryptedTokenJarContents && (a.i[b.encryptedTokenJarContents] = b, "string" === typeof b.expirationSeconds)) {
            var c = Number(b.expirationSeconds); setTimeout(function () { delete a.i[b.encryptedTokenJarContents] }, 1E3 * c);
            a.j && ro("CONSISTENCY", b.encryptedTokenJarContents, c, "/", void 0, !0)
        }
    }
    ; function vy() { var a = J("LOCATION_PLAYABILITY_TOKEN"); "TVHTML5" === J("INNERTUBE_CLIENT_NAME") && (this.i = wy(this)) && (a = this.i.get("yt-location-playability-token")); a && (this.locationPlayabilityToken = a, this.j = void 0) }
    var xy; vy.getInstance = function () { xy = y("yt.clientLocationService.instance"); xy || (xy = new vy, x("yt.clientLocationService.instance", xy, void 0)); return xy };
    vy.prototype.setLocationOnInnerTubeContext = function (a) { a.client || (a.client = {}); this.j ? (a.client.locationInfo || (a.client.locationInfo = {}), a.client.locationInfo.latitudeE7 = 1E7 * this.j.coords.latitude, a.client.locationInfo.longitudeE7 = 1E7 * this.j.coords.longitude, a.client.locationInfo.horizontalAccuracyMeters = this.j.coords.accuracy, a.client.locationInfo.forceLocationPlayabilityTokenRefresh = !0) : this.locationPlayabilityToken && (a.client.locationPlayabilityToken = this.locationPlayabilityToken) };
    vy.prototype.handleResponse = function (a) { var b; a = null === (b = a.responseContext) || void 0 === b ? void 0 : b.locationPlayabilityToken; void 0 !== a && (this.locationPlayabilityToken = a, this.j = void 0, "TVHTML5" === J("INNERTUBE_CLIENT_NAME") ? (this.i = wy(this)) && this.i.set("yt-location-playability-token", a, 15552E3) : ro("YT_CL", JSON.stringify({ rj: a }), 15552E3, "/", void 0, !0)) };
    function wy(a) { return void 0 === a.i ? new Jq("yt-client-location") : a.i }
    vy.prototype.getCurrentPositionFromGeolocation = function () {
        var a = this; if (!(navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition) || !N("web_enable_browser_geolocation_api") && !N("enable_handoff_location_2fa_on_mweb")) return Promise.reject(Error("Geolocation unsupported")); var b = !1, c = 1E4; N("enable_handoff_location_2fa_on_mweb") && (b = !0, c = 15E3); return new Promise(function (d, e) {
            navigator.geolocation.getCurrentPosition(function (f) { a.j = f; d(f) }, function (f) { e(f) }, {
                enableHighAccuracy: b,
                maximumAge: 0, timeout: c
            })
        })
    };
    vy.prototype.createUnpluggedLocationInfo = function (a) { var b = {}; a = a.coords; if (null === a || void 0 === a ? 0 : a.latitude) b.latitudeE7 = Math.floor(1E7 * a.latitude); if (null === a || void 0 === a ? 0 : a.longitude) b.longitudeE7 = Math.floor(1E7 * a.longitude); if (null === a || void 0 === a ? 0 : a.accuracy) b.locationRadiusMeters = Math.round(a.accuracy); return b }; var yy = {}, zy = (yy.WEB_UNPLUGGED = "^unplugged/", yy.WEB_UNPLUGGED_ONBOARDING = "^unplugged/", yy.WEB_UNPLUGGED_OPS = "^unplugged/", yy.WEB_UNPLUGGED_PUBLIC = "^unplugged/", yy.WEB_CREATOR = "^creator/", yy.WEB_KIDS = "^kids/", yy.WEB_EXPERIMENTS = "^experiments/", yy.WEB_MUSIC = "^music/", yy.WEB_REMIX = "^music/", yy.WEB_MUSIC_EMBEDDED_PLAYER = "^music/", yy.WEB_MUSIC_EMBEDDED_PLAYER = "^main_app/|^sfv/", yy);
    function Ay(a) {
        var b = void 0 === b ? "UNKNOWN_INTERFACE" : b; if (1 === a.length) return a[0]; var c = zy[b]; if (c) { var d = new RegExp(c), e = p(a); for (c = e.next(); !c.done; c = e.next())if (c = c.value, d.exec(c)) return c } var f = []; Object.entries(zy).forEach(function (g) { var h = p(g); g = h.next().value; h = h.next().value; b !== g && f.push(h) });
        d = new RegExp(f.join("|")); a.sort(function (g, h) { return g.length - h.length });
        e = p(a); for (c = e.next(); !c.done; c = e.next())if (c = c.value, !d.exec(c)) return c; return a[0]
    }
    ; function By(a, b) { return { method: void 0 === b ? "POST" : b, mode: Sn(a) ? "same-origin" : "cors", credentials: Sn(a) ? "same-origin" : "include" } }
    ; function Cy() { }
    Cy.prototype.A = function (a, b, c) {
        b = void 0 === b ? {} : b; c = void 0 === c ? oy : c; var d; var e = a.clickTrackingParams, f = this.o, g = !1; g = void 0 === g ? !1 : g; f = void 0 === f ? !1 : f; var h = J("INNERTUBE_CONTEXT"); if (h) {
            h = Lb(h); N("web_no_tracking_params_in_shell_killswitch") || delete h.clickTracking; h.client || (h.client = {}); var l = h.client; "MWEB" === l.clientName && (l.clientFormFactor = J("IS_TABLET") ? "LARGE_FORM_FACTOR" : "SMALL_FORM_FACTOR"); l.screenWidthPoints = window.innerWidth; l.screenHeightPoints = window.innerHeight; l.screenPixelDensity =
                Math.round(window.devicePixelRatio || 1); l.screenDensityFloat = window.devicePixelRatio || 1; l.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset()); var m = void 0 === m ? !1 : m; vq.getInstance(); var n = "USER_INTERFACE_THEME_LIGHT"; yq(165) ? n = "USER_INTERFACE_THEME_DARK" : yq(174) ? n = "USER_INTERFACE_THEME_LIGHT" : !N("kevlar_legacy_browsers") && window.matchMedia && window.matchMedia("(prefers-color-scheme)").matches && window.matchMedia("(prefers-color-scheme: dark)").matches && (n = "USER_INTERFACE_THEME_DARK"); m = m ? n : ry() ||
                    n; l.userInterfaceTheme = m; if (!g) { if (m = Eq()) l.connectionType = m; N("web_log_effective_connection_type") && (m = Fq()) && (h.client.effectiveConnectionType = m) } m = Pn(u.location.href); !N("web_populate_internal_geo_killswitch") && m.internalcountrycode && (l.internalGeo = m.internalcountrycode); "MWEB" === l.clientName || "WEB" === l.clientName ? (l.mainAppWebInfo = { graftUrl: u.location.href }, N("kevlar_woffle") && sq.i && (l.mainAppWebInfo.pwaInstallabilityStatus = sq.i.i ? "PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED" : "PWA_INSTALLABILITY_STATUS_UNKNOWN"),
                        N("web_include_display_mode_killswitch") || (l.mainAppWebInfo.webDisplayMode = tq()), l.mainAppWebInfo.isWebNativeShareAvailable = navigator && void 0 !== navigator.share) : "TVHTML5" === l.clientName && !N("web_lr_app_quality_killswitch") && (m = J("LIVING_ROOM_APP_QUALITY")) && (l.tvAppInfo = Object.assign(Object.assign({}, l.tvAppInfo), { appQuality: m })); if (!N("web_populate_time_zone_itc_killswitch")) {
                            b: { if ("undefined" !== typeof Intl) try { var t = (new Intl.DateTimeFormat).resolvedOptions().timeZone; break b } catch (ud) { } t = void 0 } t &&
                                (l.timeZone = t)
                        } (t = J("EXPERIMENTS_TOKEN", "")) ? l.experimentsToken = t : delete l.experimentsToken; t = Xn(); ty.i || (ty.i = new ty); l = Eb(ty.i.i); h.request = Object.assign(Object.assign({}, h.request), { internalExperimentFlags: t, consistencyTokenJars: l }); !N("web_prequest_context_killswitch") && (t = J("INNERTUBE_CONTEXT_PREQUEST_CONTEXT")) && (h.request.externalPrequestContext = t); l = vq.getInstance(); t = yq(58); l = l.get("gsml", ""); h.user = Object.assign({}, h.user); t && (h.user.enableSafetyMode = t); l && (h.user.lockedSafetyMode = !0); N("warm_op_csn_cleanup") ?
                            f && (g = gt()) && (h.clientScreenNonce = g) : !g && (g = gt()) && (h.clientScreenNonce = g); e && (h.clickTracking = { clickTrackingParams: e }); if (e = y("yt.mdx.remote.remoteClient_")) h.remoteClient = e; N("web_enable_client_location_service") && vy.getInstance().setLocationOnInnerTubeContext(h); try {
                                var w = Tn(void 0), v = w.bid; delete w.bid; h.adSignalsInfo = { params: [], bid: v }; for (var C = p(Object.entries(w)), O = C.next(); !O.done; O = C.next()) {
                                    var H = p(O.value), X = H.next().value, qa = H.next().value; w = X; v = qa; null === (d = h.adSignalsInfo.params) || void 0 ===
                                        d ? void 0 : d.push({ key: w, value: "" + v })
                                }
                            } catch (ud) { Wv(ud) } d = h
        } else Wv(Error("Error: No InnerTubeContext shell provided in ytconfig.")), d = {}; d = { context: d }; if (C = this.i(a)) {
            this.j(d, C, b); var S, Pa; b = "/youtubei/v1/" + Ay(this.l()); (a = null === (Pa = null === (S = a.commandMetadata) || void 0 === S ? void 0 : S.webCommandMetadata) || void 0 === Pa ? void 0 : Pa.apiUrl) && (b = a); S = b; (Pa = J("INNERTUBE_HOST_OVERRIDE")) && (S = String(Pa) + String(Dd(S))); S = Rn(S, { key: J("INNERTUBE_API_KEY") }, !1); S = { input: S, Ab: By(S), Ua: d, config: Object.assign({}, void 0) };
            S.config.Wb ? S.config.Wb.identity = c : S.config.Wb = { identity: c }; return S
        } Wv(new Yq("Error: Failed to create Request from Command.", a))
    };
    da.Object.defineProperties(Cy.prototype, { o: { configurable: !0, enumerable: !0, get: function () { return !1 } } }); function Dy() { }
    q(Dy, Cy); Dy.prototype.A = function () { return { input: "/getDatasyncIdsEndpoint", Ab: By("/getDatasyncIdsEndpoint", "GET"), Ua: {} } };
    Dy.prototype.l = function () { return [] };
    Dy.prototype.i = function () { };
    Dy.prototype.j = function () { }; var Ey = {}, Fy = (Ey.GET_DATASYNC_IDS = Dy, Ey); function Gy(a, b, c, d) { this.i = a; this.o = b; this.l = c; this.A = d; this.j = void 0; a.Rb || (a.Rb = {}); a.Rb = Object.assign(Object.assign({}, Fy), a.Rb) }
    function Hy(a, b, c, d) {
        if (void 0 !== Gy.i) {
            if (d = Gy.i, a = [a !== d.i, b !== d.o, c !== d.l, !1, !1, void 0 !== d.j], a.some(function (e) { return e })) throw new Yq("InnerTubeTransportService is already initialized", a);
        } else Gy.i = new Gy(a, b, c, d)
    }
    function Iy(a) { var b = Jy(); var c = void 0 === c ? oy : c; var d = Ky(b, a); if (!d) return bh(new Yq("Error: No request builder found for command.", a)); var e = d.A(a, void 0, c); return e ? new Wg(function (f) { return Md(b, function h() { var l, m, n = this, t; return Da(h, function (w) { if (1 == w.i) return m = "cors" === (null === (l = e.Ab) || void 0 === l ? void 0 : l.mode) ? "cors" : void 0, r(w, Ly(n, e.config, m), 2); t = w.j; f(My(n, e, t)); w.i = 0 }) }) }) : bh(new Yq("Error: Failed to build request for command.", a)) }
    function My(a, b, c) {
        var d, e; return Md(a, function g() {
            var h = this, l, m, n, t, w, v, C, O, H; return Da(g, function (X) {
                switch (X.i) {
                    case 1: X.ca(2); break; case 3: if ((l = X.j) && !l.isExpired()) return X.return(Promise.resolve(l.i())); case 2: m = p([]); for (n = m.next(); !n.done; n = m.next())t = n.value, t.wj(b.Ua.context); if (null === (d = h.j) || void 0 === d ? 0 : d.o(b.input, b.Ua)) return X.return(h.j.l(b.input, b.Ua)); w = JSON.stringify(b.Ua); b.Ab = Object.assign(Object.assign({}, b.Ab), { headers: c }); v = Object.assign({}, b.Ab); "POST" === b.Ab.method &&
                        (v = Object.assign(Object.assign({}, v), { body: w })); return r(X, h.o.fetch(b.input, v, b.config), 4); case 4: if ((C = X.j) || null === (e = h.j) || void 0 === e || !e.i(b.input, b.Ua)) { X.ca(5); break } return r(X, h.j.j(b.input, b.Ua), 6); case 6: C = X.j; case 5: if (C && h.A) for (O = p(h.A), n = O.next(); !n.done; n = O.next())H = n.value, H.handleResponse(C, b); return X.return(C)
                }
            })
        })
    }
    function Ly(a, b, c) { return Md(a, function e() { var f = this; return Da(e, function (g) { if (f.l.Mh) { var h = g.return, l, m = null === (l = null === b || void 0 === b ? void 0 : b.Wb) || void 0 === l ? void 0 : l.sessionIndex; l = ny({ sessionIndex: m }); l = Object.assign(Object.assign({}, Ny(c)), l); g = h.call(g, l) } else g = g.return(Oy(b, c)); return g }) }) }
    function Oy(a, b) { var c; a = null === (c = null === a || void 0 === a ? void 0 : a.Wb) || void 0 === c ? void 0 : c.sessionIndex; return ah(ny({ sessionIndex: a })).then(function (d) { return Promise.resolve(Object.assign(Object.assign({}, Ny(b)), d)) }) }
    function Ny(a) { var b = { "Content-Type": "application/json" }, c = J("VISITOR_DATA"); c && (b["X-Goog-Visitor-Id"] = c); "cors" !== a && ((a = J("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = J("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a), (a = J("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a), N("forward_domain_admin_state_on_embeds") && (a = J("DOMAIN_ADMIN_STATE")) && (b["X-Youtube-Domain-Admin-State"] = a)); return b }
    function Ky(a, b) { var c, d; if ((null === (c = b.signalServiceEndpoint) || void 0 === c ? 0 : c.signal) && a.i.Rb) { var e = a.i.Rb[b.signalServiceEndpoint.signal]; if (e) return new e } if ((null === (d = b.continuationCommand) || void 0 === d ? 0 : d.request) && a.i.Gf && (e = a.i.Gf[b.continuationCommand.request])) return new e; for (var f in b) if (a.i.Ud[f] && (b = a.i.Ud[f])) return new b }
    ; var Py = ["share/get_web_player_share_panel"], Qy = ["feedback"], Ry = ["notification/modify_channel_preference"], Sy = ["browse/edit_playlist"], Ty = ["subscription/subscribe"], Uy = ["subscription/unsubscribe"]; function Vy() { }
    q(Vy, Cy); Vy.prototype.l = function () { return Ty };
    Vy.prototype.i = function (a) { return a.subscribeEndpoint };
    Vy.prototype.j = function (a, b, c) { c = void 0 === c ? {} : c; b.channelIds && (a.channelIds = b.channelIds); b.siloName && (a.siloName = b.siloName); b.params && (a.params = b.params); c.botguardResponse && (a.botguardResponse = c.botguardResponse); c.feature && (a.clientFeature = c.feature) };
    da.Object.defineProperties(Vy.prototype, { o: { configurable: !0, enumerable: !0, get: function () { return !0 } } }); function Wy() { }
    q(Wy, Cy); Wy.prototype.l = function () { return Uy };
    Wy.prototype.i = function (a) { return a.unsubscribeEndpoint };
    Wy.prototype.j = function (a, b) { b.channelIds && (a.channelIds = b.channelIds); b.siloName && (a.siloName = b.siloName); b.params && (a.params = b.params) };
    da.Object.defineProperties(Wy.prototype, { o: { configurable: !0, enumerable: !0, get: function () { return !0 } } }); function Xy() { }
    q(Xy, Cy); Xy.prototype.l = function () { return Qy };
    Xy.prototype.i = function (a) { return a.feedbackEndpoint };
    Xy.prototype.j = function (a, b, c) { a.feedbackTokens = []; b.feedbackToken && a.feedbackTokens.push(b.feedbackToken); if (b = b.cpn || c.cpn) a.feedbackContext = { cpn: b }; a.isFeedbackTokenUnencrypted = !!c.is_feedback_token_unencrypted; a.shouldMerge = !1; c.extra_feedback_tokens && (a.shouldMerge = !0, a.feedbackTokens = a.feedbackTokens.concat(c.extra_feedback_tokens)) };
    da.Object.defineProperties(Xy.prototype, { o: { configurable: !0, enumerable: !0, get: function () { return !0 } } }); function Yy() { }
    q(Yy, Cy); Yy.prototype.l = function () { return Ry };
    Yy.prototype.i = function (a) { return a.modifyChannelNotificationPreferenceEndpoint };
    Yy.prototype.j = function (a, b) { b.params && (a.params = b.params); b.secondaryParams && (a.secondaryParams = b.secondaryParams) }; function Zy() { }
    q(Zy, Cy); Zy.prototype.l = function () { return Sy };
    Zy.prototype.i = function (a) { return a.playlistEditEndpoint };
    Zy.prototype.j = function (a, b) { b.actions && (a.actions = b.actions); b.params && (a.params = b.params); b.playlistId && (a.playlistId = b.playlistId) }; function $y() { }
    q($y, Cy); $y.prototype.l = function () { return Py };
    $y.prototype.i = function (a) { return a.webPlayerShareEntityServiceEndpoint };
    $y.prototype.j = function (a, b, c) { c = void 0 === c ? {} : c; b.serializedShareEntity && (a.serializedSharedEntity = b.serializedShareEntity); c.includeListId && (a.includeListId = !0) }; function az() { }
    az.prototype.fetch = function (a, b) { var c = this; a = new window.Request(a, b); return Promise.resolve(fetch(a).then(function (d) { return c.handleResponse(d) }).catch(function (d) { Vv(d) })) };
    az.prototype.handleResponse = function (a) {
        var b = a.text().then(function (c) { return JSON.parse(c.replace(")]}'", "")) });
        a.redirected || a.ok || (b = b.then(function (c) { Vv(new Yq("Error: API fetch failed", a.status, a.url, c)); return Object.assign(Object.assign({}, c), { errorMetadata: { status: a.status } }) }));
        return b
    }; var bz; function Jy() { if (!bz) { var a = { Ud: { feedbackEndpoint: Xy, modifyChannelNotificationPreferenceEndpoint: Yy, playlistEditEndpoint: Zy, subscribeEndpoint: Vy, unsubscribeEndpoint: Wy, webPlayerShareEntityServiceEndpoint: $y } }, b = N("web_enable_client_location_service") ? vy.getInstance() : void 0, c = []; b && c.push(b); if (void 0 === d) { my.i || (my.i = new my); var d = my.i } if (void 0 === e) { az.i || (az.i = new az); var e = az.i } Hy(a, e, d, c); bz = Gy.i } return bz }
    ; function cz(a, b) { var c = { list_id: "WL" }; b = Iy({ commandMetadata: { webCommandMetadata: { apiUrl: "/youtubei/v1/browse/edit_playlist", url: "/service_ajax", sendPost: !0 } }, playlistEditEndpoint: { playlistId: "WL", actions: b } }); gh(b.then(function (d) { if (d && "STATUS_SUCCEEDED" === d.status) { if (a.onSuccess) a.onSuccess({}, c) } else if (a.onError) a.onError({}, c) }), function () { if (a.onFinish) a.onFinish({}, c) }) }
    function dz(a, b, c) { N("web_classic_playlist_one_platform_update") ? cz(a, [{ addedVideoId: a.videoIds, action: "ACTION_ADD_VIDEO" }]) : ez("add_to_watch_later_list", a, b, c) }
    function fz(a) { N("web_classic_playlist_one_platform_update") ? cz(a, [{ removedVideoId: a.videoIds, action: "ACTION_REMOVE_VIDEO_BY_VIDEO_ID" }]) : ez("delete_from_watch_later_list", a, void 0, void 0) }
    function ez(a, b, c, d) {
        ho(c ? c + "playlist_video_ajax?action_" + a + "=1" : "/playlist_video_ajax?action_" + a + "=1", {
            method: "POST", urlParams: { feature: b.feature || null, authuser: b.ej || null, pageid: b.pageId || null }, postParams: { video_ids: b.videoIds || null, source_playlist_id: b.sourcePlaylistId || null, full_list_id: b.fullListId || null, delete_from_playlists: b.zj || null, add_to_playlists: b.dj || null, plid: J("PLAYBACK_ID") || null }, context: b.context, onError: b.onError, onSuccess: function (e, f) { b.onSuccess.call(this, e, f) },
            onFinish: b.onFinish, withCredentials: !!d
        })
    }
    ; var gz = [], hz = ""; function iz() { Fp("addto-watch-later-button", "click", jz); Fp("addto-watch-later-button-success", "click", kz); Fp("addto-watch-later-button-remove", "click", lz); Fp("addto-watch-later-button-sign-in", "click", mz); var a = E("shared-addto-watch-later-login"); gz.push(Bn(a, "click", nz, "sign-in-link")); gz.push(Bn(a, "focusout", oz, "sign-in-link")) }
    function mz(a) { hz = K(a, "video-ids"); var b = E("shared-addto-watch-later-login"), c = F("sign-in-link", b); c && (Bj(a, "addto-wl-focused"), P(function () { c.focus() }, 0)) }
    function oz() { var a = F("addto-wl-focused"); a && (Dj(a, "addto-wl-focused"), P(function () { a.focus() }, 0)) }
    function nz(a) { var b = Qn("/addto_ajax", { action_redirect_to_signin_with_add: 1, video_ids: hz, next_url: document.location }), c = yf("form"); c.action = b; c.method = "POST"; b = yf("input"); b.type = "hidden"; b.name = J("XSRF_FIELD_NAME", void 0); b.value = J("XSRF_TOKEN", void 0); c.appendChild(b); document.body.appendChild(c); c.submit(); a.preventDefault() }
    function jz(a) {
        Gj(a, "addto-watch-later-button", "addto-watch-later-button-loading"); of(a, { "aria-pressed": "true" }); var b = K(a, "video-ids"); dz({
            videoIds: b, onSuccess: function (c, d) { c = d.list_id; pz(c, b, a); T("playlist-addto", b, c) },
            onError: function (c, d) { 6 == d.return_code ? pz(d.list_id, b, a) : qz(a, d) }
        })
    }
    function kz(a) {
        Gj(a, "addto-watch-later-button-success", "addto-watch-later-button-loading"); var b = K(a, "video-ids"); fz({
            videoIds: b, onSuccess: function () { Gj(a, "addto-watch-later-button-loading", "addto-watch-later-button"); var c = Gn("ADDTO_WATCH_LATER"); Iw(Dw.getInstance(), a, c); T("WATCH_LATER_VIDEO_REMOVED") },
            onError: function (c, d) { qz(a, d) }
        })
    }
    function lz(a) {
        var b = K(a, "video-ids"); fz({
            videoIds: b, onSuccess: function (c, d) { T("WATCH_LATER_VIDEO_REMOVED", a, d.result.video_count) },
            onError: function (c, d) { qz(a, d) }
        })
    }
    function pz(a, b, c) { Gj(c, "addto-watch-later-button-loading", "addto-watch-later-button-success"); var d = Gn("ADDTO_WATCH_LATER_ADDED"); Iw(Dw.getInstance(), c, d); T("WATCH_LATER_VIDEO_ADDED", a, b.split(",")) }
    function qz(a, b) { Gj(a, "addto-watch-later-button-loading", "addto-watch-later-button-error"); b = b.error_message || Gn("ADDTO_WATCH_LATER_ERROR"); Iw(Dw.getInstance(), a, b) }
    ; function rz(a) { if (!sz || a) sz = qf(window); return sz }
    function tz() { return uz = sf(document) }
    function vz() { wz || (wz = dp(xz, 100)) }
    function xz() { wz = 0; yz ? Ko("page-mouse", yz.i || new cf) : un(Error("MouseTracker missing during publish.")) }
    function zz() { Az || (Az = dp(Bz, 200)) }
    function Bz() { Az = 0; var a = rz(!0); Ko("page-resize", a) }
    function Cz() { Dz || (Dz = dp(Ez, 200)) }
    function Ez() { Dz = 0; var a = tz(); Ko("page-scroll", a) }
    var sz = null, uz = null, Fz = [], yz = null, wz = 0, Az = 0, Dz = 0; var Gz, Hz, Iz, Jz, Kz, Lz, Mz = 0, Nz = !1; function Oz() { Nz || (y("yt.www.page.visibilitymonitor").dispose(), Hz = {}, Iz = {}, Gz = {}, Jz = {}, Lz = [], Kz = Pz(), Lz.push(R("page-resize", Qz)), Lz.push(R("page-scroll", Rz)), Lz.push(R("yt-dom-content-change", Sz)), Nz = !0, Tz(!0)) }
    function Uz() { Nz && (Jo(Lz), Vz(), Hz = {}, Iz = {}, Gz = {}, Jz = {}, Lz.length = 0, Kz = null, Nz = !1) }
    function Qz() { Kz = Pz(); Sz() }
    function Rz() { Kz = Pz(); Wz() }
    function Pz() { var a = tz(), b = rz(); return new ag(a.y, a.x + b.width - 1, a.y + b.height - 1, a.x) }
    function Xz(a) { var b = jn(a), c = Gz[b]; if (c) return c; c = L(a, "scroll", Yz); return c = Gz[b] = { el: a, Gh: c, Db: null } }
    function Vz() { Ab(Gz, function (a, b) { (a = Gz[b]) && M(a.Gh); delete Gz[b] }) }
    function Yz(a) { Sz(a.target) }
    function Zz(a, b) { a = [jn(a), b.complete]; b.transform && (b = b.transform, a.push(b.top, b.right, b.bottom, b.left)); return a.join(":") }
    function $z(a, b) { var c; b ? c = a : c = Jf(a); return c ? (a = G(c, "yt-viewport")) ? Xz(a) : null : null }
    function aA(a, b) { if (a.Db && !b) return a.Db; var c = bA(a.el), d = $z(a.el); d && (b = aA(d, b), c = cA(c, b)); return a.Db = c }
    function bA(a) { var b = qg(a); a = new ef(a.offsetWidth, a.offsetHeight); return new ag(b.y, b.x + a.width - 1, b.y + a.height - 1, b.x) }
    function cA(a) {
        var b = [], c = [], d = [], e = []; Array.prototype.forEach.call(arguments, function (m) { b.push(m.top); c.push(m.right); d.push(m.bottom); e.push(m.left) });
        var f = Math.max.apply(Math, b), g = Math.min.apply(Math, c), h = Math.min.apply(Math, d), l = Math.max.apply(Math, e); return f > h || l > g ? new ag(0, 0, 0, 0) : new ag(f, g, h, l)
    }
    function dA(a, b) { var c = Kz, d = bA(a); if (b.transform) { var e = b.transform; Na(e) ? (d.top -= e.top, d.right += e.right, d.bottom += e.bottom, d.left -= e.left) : (d.top -= e, d.right += Number(void 0), d.bottom += Number(void 0), d.left -= Number(void 0)) } var f; b.complete ? f = bg : f = cg; if (!f.call(ag, c, d)) return !1; a = $z(a); if (!a) return !0; aA(a); c = cA(c, a.Db); return f.call(ag, c, d) }
    function eA(a, b, c) { var d = Zz(a, c); b.hasOwnProperty(d) || (b[d] = dA(a, c)); return b[d] }
    function fA(a, b, c) { a = Zz(a, c); if (!!Jz[a] != b) return b ? "visible" : "hidden" }
    function gA(a, b) { Ab(Hz, function (c) { if (c && (!b || Kf(b, c.el))) { var d = eA(c.el, a, c.options); (d = fA(c.el, d, c.options)) && d == c.type && P(Ua(c.Ka, c.el), 0) } }) }
    function hA(a, b) {
        Ab(Iz, function (c) {
            if (c && (!b || Kf(c.el, b) || Kf(b, c.el))) {
                var d = c.filter(c.el); if (d && d.length) {
                    var e = [], f = [], g = []; B(d, function (h) { var l = eA(h, a, c.options); l ? f.push(h) : g.push(h); (l = fA(h, l, c.options)) && l == c.type && e.push(h) });
                    e.length && P(Ua(c.Ka, e, f, g), 0)
                }
            }
        })
    }
    function Wz(a) { var b = {}; gA(b, a); hA(b, a); Nb(Jz, b) }
    function iA(a, b, c, d) { return Gb(Hz, function (e) { return e.el == a && e.type == b && e.Ka == c && Jb(e.options, d) }) }
    function jA(a, b, c, d, e) { return Gb(Iz, function (f) { return f.el == a && f.type == b && f.Ka == c && f.className == d && Jb(f.options, e) }) }
    function kA(a, b) { B(mf("yt-viewport", b), a) }
    function lA(a) {
        kA(function (b) { Xz(b) }, a);
        If(a) && $z(a, !0)
    }
    function mA(a, b) { Ab(Gz, function (c) { b && !Kf(b, c.el) || b == c.el || a(c) }) }
    function nA(a) { var b = aA(a, !0); a = a.Db; return !(a == b || a && b && a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.left == b.left) }
    function Sz(a) {
        if (Nz) {
            var b; if (a) for (b = $z(a, !0); b && nA(b);)b = $z(a); mA(function (c) { delete c.Db }, b ? b.el : a);
            Wz(a)
        }
    }
    function oA(a, b) { if (!Nz) throw Error("yt.www.page.visibilitymonitor is not initialized."); return dA(a, b || {}) }
    function pA(a, b, c, d) { if (!Nz) return ""; d = d || { transform: void 0, complete: void 0 }; var e = iA(a, b, c, d); if (e) return e; lA(a); e = ++Mz + ""; Hz[e] = { el: a, type: b, Ka: c, options: d }; return e }
    function qA(a, b, c, d, e) {
        if (!Nz) return ""; a = a || document; e = e || { transform: void 0, complete: void 0 }; var f = jA(a, b, c, d, e); if (f) return f; lA(a); f = ++Mz + ""; Iz[f] = {
            el: a, type: b, Ka: c, filter: function (g) { return mf(d, g) },
            className: d, options: e
        }; return f
    }
    function rA(a) { Nz && (delete Hz[a], delete Iz[a]) }
    function Tz(a) {
        var b = y("yt.www.page.visibilitymonitor"); if (a || !b) x("yt.www.page.visibilitymonitor.States.VISIBLE", "visible", void 0), x("yt.www.page.visibilitymonitor.States.HIDDEN", "hidden", void 0), x("yt.www.page.visibilitymonitor.init", Oz, void 0), x("yt.www.page.visibilitymonitor.dispose", Uz, void 0), x("yt.www.page.visibilitymonitor.refresh", Sz, void 0), x("yt.www.page.visibilitymonitor.isVisible", oA, void 0), x("yt.www.page.visibilitymonitor.listen", pA, void 0), x("yt.www.page.visibilitymonitor.delegateByClass",
            qA, void 0), x("yt.www.page.visibilitymonitor.unlistenByKey", rA, void 0)
    }
    Tz(!1); function sA(a) { Zo.call(this, 1, arguments); this.i = a }
    A(sA, Zo); function tA(a) { Zo.call(this, 1, arguments); this.i = a }
    A(tA, Zo); function uA(a, b, c) { Zo.call(this, 3, arguments); this.j = a; this.i = b; this.l = null != c ? !!c : null }
    A(uA, Zo); function vA(a, b) { Zo.call(this, 1, arguments); this.button = a; this.i = b }
    A(vA, Zo); function wA(a, b, c, d, e, f) { Zo.call(this, 2, arguments); this.i = a; this.j = b; this.o = c || null; this.l = d || null; this.source = e || null; this.params = f || null }
    A(wA, Zo); function xA(a, b, c) { Zo.call(this, 1, arguments); this.i = a; this.j = b }
    A(xA, Zo); function yA(a, b, c, d, e, f, g, h) { Zo.call(this, 1, arguments); this.i = a; this.A = b; this.j = c; this.G = d || null; this.o = e || null; this.l = f || null; this.source = g || null; this.params = h || null }
    A(yA, Zo);
    var zA = new $o("subscription-batch-subscribe", sA), AA = new $o("subscription-batch-unsubscribe", sA), BA = new $o("subscription-show-pref-overlay", vA), CA = new $o("subscription-subscribe", wA), DA = new $o("subscription-subscribe-loading", tA), EA = new $o("subscription-subscribe-loaded", tA), FA = new $o("subscription-subscribe-success", xA), GA = new $o("subscription-subscribe-external", wA), HA = new $o("subscription-unsubscribe", yA), IA = new $o("subscription-unsubscirbe-loading", tA), JA = new $o("subscription-unsubscribe-loaded", tA),
        KA = new $o("subscription-unsubscribe-success", tA), LA = new $o("subscription-external-unsubscribe", yA), MA = new $o("subscription-enable-ypc", tA), NA = new $o("subscription-disable-ypc", tA), OA = new $o("subscription-prefs", uA), PA = new $o("subscription-prefs-success", uA), QA = new $o("subscription-prefs-failure", uA); var wu, RA = [], SA = [], TA = null, UA = null; function VA(a) { TA = a.i; UA = a.l }
    function WA() {
        if (TA) {
            var a = jb(mf("overlay-confirmation-preferences-update-frequency", wu), function (b) { return b.value == TA });
            a && (a.checked = !0, ru())
        } (a = F("receive-post-updates-checkbox", wu)) && null !== UA && uu(a, UA)
    }
    function XA() { return F("receive-post-updates-checkbox", wu) }
    function YA() { var a = XA(); a && !a.disabled && (UA = a.checked) }
    function ZA() { var a = XA(); a && ("receive-no-updates" == vu() ? (uu(a, !1), a.disabled = !0) : (a.disabled = !1, null !== UA && uu(a, UA))) }
    function $A(a) { a = G(a.currentTarget, "overlay-confirmation-content"); var b = F("updates-frequency-menu", a); b && (b.disabled = !F("receive-all-updates", a).checked) }
    function aB(a) { var b = a.currentTarget; a = K(b, "frequency"); var c = pt.getInstance(); b = G(b, V(c, "menu")); c = pt.getInstance(); b = tt(c, b); K(b, "frequency") != a && an(b, "frequency", a) }
    function bB(a) {
        wu || (wu = F("yt-dialog", F("subscription-preferences-overlay-container", Jf(a.button)))); cB(!0); Lu.getInstance().show(wu); var b = {}; b.c = a.i; ho("/subscription_ajax?action_get_subscription_preferences_overlay=1", {
            method: "POST", postParams: b, convertToSafeHtml: !0, onSuccess: function (c, d) {
                c = d.content_html; cB(!1); fd(F("subscription-preferences-overlay-content", wu), c); c = Qu(); d = F("overlay-confirmation-save-button", c); M(SA); SA.length = 0; SA.push(L(d, "click", dB), Bn(c, "click", $A, "receive-all-updates"),
                    Bn(c, "keypressed", $A, "receive-all-updates"), Bn(c, "click", YA, "receive-post-updates"), Bn(c, "keypressed", YA, "receive-post-updates"), Bn(c, "click", ZA, "overlay-confirmation-preferences-update-frequency"), Bn(c, "keypressed", ZA, "overlay-confirmation-preferences-update-frequency"), Bn(document.body, "click", aB, "updates-frequency-choice")); TA = vu(); UA = (c = XA()) ? c.checked : null
            },
            onError: function () { Lu.getInstance().hide() }
        })
    }
    function cB(a) { var b = wu, c = F("subscription-preferences-overlay-content", b); xp(F("subscription-preferences-overlay-loading", b), a); xp(c, !a) }
    function dB(a) { var b = G(a.currentTarget, "yt-dialog-fg"); if (b) { a = K(a.currentTarget, "channel-external-id"); var c = vu(), d = XA(); if (c) a = new uA(a, c, d ? d.checked : null); else { c = F("receive-all-updates", b); var e = F("updates-frequency-menu", b); b = !1; var f = !e || I(e, "hidden"); f || "occasionally" != K(e, "frequency") || (b = !0); e = "receive-highlight-updates"; c.checked && !b ? e = "receive-all-updates" : f || c.checked || (e = "receive-no-updates"); a = new uA(a, e, d ? d.checked : null) } kp(OA, a); Lu.getInstance().hide() } }
    ; function eB(a, b) { Zo.call(this, 1, arguments); this.container = a; this.offerId = b || null }
    A(eB, Zo); function fB(a) { Zo.call(this, 1, arguments); this.callback = a }
    A(fB, Zo); function gB(a, b) { Zo.call(this, 2, arguments); this.j = a; this.i = b }
    A(gB, Zo); function hB(a, b, c, d) { Zo.call(this, 1, arguments); this.i = b; this.itemType = c || null; this.itemId = d || null }
    A(hB, Zo); function iB(a, b) { Zo.call(this, 1, arguments); this.j = a; this.i = b || null }
    A(iB, Zo); function jB(a) { Zo.call(this, 1, arguments); this.i = a }
    A(jB, Zo); var kB = new $o("ypc-init-purchase-for-container", eB), lB = new $o("ypc-core-load", fB), mB = new $o("ypc-guide-sync-success", gB), nB = new $o("ypc-purchase-success", hB), oB = new $o("ypc-subscription-cancel", jB), pB = new $o("ypc-subscription-cancel-success", iB), qB = new $o("ypc-init-subscription", jB); var rB = []; function sB(a) { a.j ? kp(lB, new fB(function () { kp(qB, new jB(a.j)) })) : N("web_classic_innertube_subscription_update") ? tB(a.i, a.params) : uB(a.i, a.o, a.l, a.source, a.params) }
    function vB(a) { a.j ? kp(lB, new fB(function () { kp(oB, new jB(a.j)) })) : N("web_classic_innertube_subscription_update") ? wB(a.i, a.params) : xB(a.i, a.A, a.o, a.l, a.source) }
    function yB(a) { zB(sb(a.i)) }
    function AB(a) { BB(sb(a.i)) }
    function CB(a) { DB(a.j, a.i, a.l) }
    function EB(a) { var b = a.itemId, c = a.i.subscriptionId; b && c && kp(FA, new xA(b, c, a.i.channelInfo)) }
    function FB(a) { var b = a.i; Ab(a.j, function (c, d) { kp(FA, new xA(d, c, b[d])) }) }
    function GB(a) { kp(KA, new tA(a.j.itemId)); a.i && a.i.length && (HB(a.i, KA), HB(a.i, MA)) }
    function tB(a, b) { var c = new tA(a); kp(DA, c); gh(Iy({ commandMetadata: { webCommandMetadata: { apiUrl: "/youtubei/v1/subscription/subscribe" } }, subscribeEndpoint: { channelIds: [a], params: b } }).then(function () { kp(FA, new xA(a, Math.round(1E4 * Math.random()).toString(), { thumbnail: "", title: "", url: "", mj: a })) }), function () { kp(EA, c) }) }
    function uB(a, b, c, d, e) {
        var f = new tA(a); kp(DA, f); var g = {}; g.c = a; c && (g.eurl = c); d && (g.source = d); c = {}; (d = J("PLAYBACK_ID")) && (c.plid = d); (d = J("EVENT_ID")) && (c.ei = d); e && (c.params = e); b && IB(b, c); ho("/subscription_ajax?action_create_subscription_to_channel=1", {
            method: "POST", urlParams: g, postParams: c, onSuccess: function (h, l) { h = l.response; kp(FA, new xA(a, h.id, h.channel_info)); h.show_feed_privacy_dialog && T("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG", a) },
            onFinish: function () { kp(EA, f) }
        })
    }
    function wB(a, b) { var c = new tA(a); kp(IA, c); gh(Iy({ commandMetadata: { webCommandMetadata: { apiUrl: "/youtubei/v1/subscription/unsubscribe" } }, unsubscribeEndpoint: { channelIds: [a], params: b } }).then(function () { kp(KA, c) }), function () { kp(JA, c) }) }
    function xB(a, b, c, d, e) {
        var f = new tA(a); kp(IA, f); var g = {}; g.c = a; d && (g.eurl = d); e && (g.source = e); d = {}; d.c = a; d.s = b; (a = J("PLAYBACK_ID")) && (d.plid = a); (a = J("EVENT_ID")) && (d.ei = a); c && IB(c, d); ho("/subscription_ajax?action_remove_subscriptions=1", {
            method: "POST", urlParams: g, postParams: d, onSuccess: function () { kp(KA, f) },
            onFinish: function () { kp(JA, f) }
        })
    }
    function DB(a, b, c) {
        if (a) {
            var d = {}; d.channel_id = a; switch (b) { case "receive-all-updates": d.receive_all_updates = !0; break; case "receive-no-updates": d.receive_no_updates = !0; d.receive_post_updates = !1; break; case "receive-highlight-updates": d.receive_all_updates = !1; d.receive_no_updates = !1; break; default: return }null === c || d.receive_no_updates || (d.receive_post_updates = c); var e = new uA(a, b, c); ho("/subscription_ajax?action_update_subscription_preferences=1", {
                method: "POST", postParams: d, onError: function () { kp(QA, e) },
                onSuccess: function () { kp(PA, e) }
            })
        }
    }
    function zB(a) {
        if (a.length) {
            var b = ub(a, 0, 40); kp("subscription-batch-subscribe-loading"); HB(b, DA); var c = {}; c.a = b.join(","); var d = function () { kp("subscription-batch-subscribe-loaded"); HB(b, EA) };
            ho("/subscription_ajax?action_create_subscription_to_all=1", {
                method: "POST", postParams: c, onSuccess: function (e, f) {
                    d(); e = f.response; f = e.id; if (Array.isArray(f) && f.length == b.length) {
                        var g = e.channel_info_map; B(f, function (h, l) { l = b[l]; kp(FA, new xA(l, h, g[l])) });
                        a.length ? zB(a) : kp("subscription-batch-subscribe-finished")
                    }
                },
                onError: function () { d(); kp("subscription-batch-subscribe-failure") }
            })
        }
    }
    function BB(a) {
        if (a.length) {
            var b = ub(a, 0, 40); kp("subscription-batch-unsubscribe-loading"); HB(b, IA); var c = {}; c.c = b.join(","); var d = function () { kp("subscription-batch-unsubscribe-loaded"); HB(b, JA) };
            ho("/subscription_ajax?action_remove_subscriptions=1", {
                method: "POST", postParams: c, onSuccess: function () { d(); HB(b, KA); a.length && BB(a) },
                onError: function () { d() }
            })
        }
    }
    function HB(a, b) { B(a, function (c) { kp(b, new tA(c)) }) }
    function IB(a, b) { a = On(a); Object.assign(b, a) }
    ; var JB = {}, KB = []; function LB(a) { a = G(a, "yt-uix-button-subscription-container"); return F("yt-dialog", F("unsubscribe-confirmation-overlay-container", a)) }
    function MB(a, b) { M(KB); KB.length = 0; JB[b] || (JB[b] = LB(a)); Lu.getInstance().show(JB[b]); var c = Qu(); return new Wg(function (d) { KB.push(Bn(c, "click", function () { d() }, "overlay-confirmation-unsubscribe-button")) }) }
    ; function NB(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d)c[d - 1] = arguments[d]; if (!OB(a) || c.some(function (e) { return !OB(e) })) throw Error("Only objects may be merged.");
        c = p(c); for (d = c.next(); !d.done; d = c.next())PB(a, d.value); return a
    }
    function PB(a, b) { for (var c in b) if (OB(b[c])) { if (c in a && !OB(a[c])) throw Error("Cannot merge an object into a non-object."); c in a || (a[c] = {}); PB(a[c], b[c]) } else if (QB(b[c])) { if (c in a && !QB(a[c])) throw Error("Cannot merge an array into a non-array."); c in a || (a[c] = []); RB(a[c], b[c]) } else a[c] = b[c]; return a }
    function RB(a, b) { b = p(b); for (var c = b.next(); !c.done; c = b.next())c = c.value, OB(c) ? a.push(PB({}, c)) : QB(c) ? a.push(RB([], c)) : a.push(c); return a }
    function OB(a) { return "object" === typeof a && !Array.isArray(a) }
    function QB(a) { return "object" === typeof a && Array.isArray(a) }
    ; function SB(a, b) { Zo.call(this, 1, arguments) }
    q(SB, Zo); function TB(a, b) { Zo.call(this, 1, arguments) }
    q(TB, Zo); var UB = new $o("aft-recorded", SB), VB = new $o("timing-sent", TB); var WB = window; function XB() {
        this.timing = {}; this.clearResourceTimings = function () { };
        this.webkitClearResourceTimings = function () { };
        this.mozClearResourceTimings = function () { };
        this.msClearResourceTimings = function () { };
        this.oClearResourceTimings = function () { }
    }
    var YB = WB.performance || WB.mozPerformance || WB.msPerformance || WB.webkitPerformance || new XB; var ZB = !1; z(YB.clearResourceTimings || YB.webkitClearResourceTimings || YB.mozClearResourceTimings || YB.msClearResourceTimings || YB.oClearResourceTimings || Ja, YB); function $B(a) { var b = aC(a); if (b.aft) return b.aft; a = J((a || "") + "TIMING_AFT_KEYS", ["ol"]); for (var c = a.length, d = 0; d < c; d++) { var e = b[a[d]]; if (e) return e } return NaN }
    function bC(a) { var b; (b = y("ytcsi." + (a || "") + "data_")) || (b = { tick: {}, info: {} }, x("ytcsi." + (a || "") + "data_", b, void 0)); return b }
    function cC(a) { a = bC(a); a.info || (a.info = {}); return a.info }
    function aC(a) { a = bC(a); a.tick || (a.tick = {}); return a.tick }
    function dC(a) { var b = bC(a).nonce; b || (b = Zs(), bC(a).nonce = b); return b }
    function eC(a) { var b = aC(a || ""), c = $B(a); c && !ZB && (kp(UB, new SB(Math.round(c - b._start), a)), ZB = !0) }
    ; function fC() { var a = y("ytcsi.debug"); a || (a = [], x("ytcsi.debug", a, void 0), x("ytcsi.reference", {}, void 0)); return a }
    function gC(a) { a = a || ""; var b = y("ytcsi.reference"); b || (fC(), b = y("ytcsi.reference")); if (b[a]) return b[a]; var c = fC(), d = { timerName: a, info: {}, tick: {}, span: {} }; c.push(d); return b[a] = d }
    ; var hC = u.ytLoggingLatencyUsageStats_ || {}; x("ytLoggingLatencyUsageStats_", hC, void 0); function iC() { this.i = 0 }
    function jC() { iC.i || (iC.i = new iC); return iC.i }
    iC.prototype.tick = function (a, b, c) { kC(this, "tick_" + a + "_" + b) || Bv("latencyActionTicked", { tickName: a, clientActionNonce: b }, { timestamp: c }) };
    iC.prototype.info = function (a, b) { var c = Object.keys(a).join(""); kC(this, "info_" + c + "_" + b) || (a = Object.assign({}, a), a.clientActionNonce = b, Bv("latencyActionInfo", a)) };
    iC.prototype.span = function (a, b) { var c = Object.keys(a).join(""); kC(this, "span_" + c + "_" + b) || (a.clientActionNonce = b, Bv("latencyActionSpan", a)) };
    function kC(a, b) {
        hC[b] = hC[b] || { count: 0 }; var c = hC[b]; c.count++; c.time = Up(); a.i || (a.i = bp(function () { var d = Up(), e; for (e in hC) hC[e] && 6E4 < d - hC[e].time && delete hC[e]; a && (a.i = 0) }, 5E3));
        return 5 < c.count ? (6 === c.count && 1 > 1E5 * Math.random() && (c = new Yq("CSI data exceeded logging limit with key", b.split("_")), 0 <= b.indexOf("plev") || Vv(c)), !0) : !1
    }
    ; var Z = {}, lC = (Z.ad_allowed = "adTypesAllowed", Z.yt_abt = "adBreakType", Z.ad_cpn = "adClientPlaybackNonce", Z.ad_docid = "adVideoId", Z.yt_ad_an = "adNetworks", Z.ad_at = "adType", Z.aida = "appInstallDataAgeMs", Z.browse_id = "browseId", Z.p = "httpProtocol", Z.t = "transportProtocol", Z.cs = "commandSource", Z.cpn = "clientPlaybackNonce", Z.ccs = "creatorInfo.creatorCanaryState", Z.csn = "clientScreenNonce", Z.docid = "videoId", Z.GetHome_rid = "requestIds", Z.GetSearch_rid = "requestIds", Z.GetPlayer_rid = "requestIds", Z.GetWatchNext_rid = "requestIds",
        Z.GetBrowse_rid = "requestIds", Z.GetLibrary_rid = "requestIds", Z.is_continuation = "isContinuation", Z.is_nav = "isNavigation", Z.b_p = "kabukiInfo.browseParams", Z.is_prefetch = "kabukiInfo.isPrefetch", Z.is_secondary_nav = "kabukiInfo.isSecondaryNav", Z.nav_type = "kabukiInfo.navigationType", Z.prev_browse_id = "kabukiInfo.prevBrowseId", Z.query_source = "kabukiInfo.querySource", Z.voz_type = "kabukiInfo.vozType", Z.yt_lt = "loadType", Z.mver = "creatorInfo.measurementVersion", Z.yt_ad = "isMonetized", Z.nr = "webInfo.navigationReason",
        Z.nrsu = "navigationRequestedSameUrl", Z.ncnp = "webInfo.nonPreloadedNodeCount", Z.pnt = "performanceNavigationTiming", Z.prt = "playbackRequiresTap", Z.plt = "playerInfo.playbackType", Z.pis = "playerInfo.playerInitializedState", Z.paused = "playerInfo.isPausedOnLoad", Z.yt_pt = "playerType", Z.fmt = "playerInfo.itag", Z.yt_pl = "watchInfo.isPlaylist", Z.yt_pre = "playerInfo.preloadType", Z.yt_ad_pr = "prerollAllowed", Z.pa = "previousAction", Z.yt_red = "isRedSubscriber", Z.rce = "mwebInfo.responseContentEncoding", Z.rc = "resourceInfo.resourceCache",
        Z.scrh = "screenHeight", Z.scrw = "screenWidth", Z.st = "serverTimeMs", Z.ssdm = "shellStartupDurationMs", Z.br_trs = "tvInfo.bedrockTriggerState", Z.kebqat = "kabukiInfo.earlyBrowseRequestInfo.abandonmentType", Z.kebqa = "kabukiInfo.earlyBrowseRequestInfo.adopted", Z.label = "tvInfo.label", Z.is_mdx = "tvInfo.isMdx", Z.preloaded = "tvInfo.isPreloaded", Z.upg_player_vis = "playerInfo.visibilityState", Z.query = "unpluggedInfo.query", Z.upg_chip_ids_string = "unpluggedInfo.upgChipIdsString", Z.yt_vst = "videoStreamType", Z.vph = "viewportHeight",
        Z.vpw = "viewportWidth", Z.yt_vis = "isVisible", Z.rcl = "mwebInfo.responseContentLength", Z.GetSettings_rid = "requestIds", Z.GetTrending_rid = "requestIds", Z.GetMusicSearchSuggestions_rid = "requestIds", Z.REQUEST_ID = "requestIds", Z), mC = "isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
        nC = {}, oC = (nC.ccs = "CANARY_STATE_", nC.mver = "MEASUREMENT_VERSION_", nC.pis = "PLAYER_INITIALIZED_STATE_", nC.yt_pt = "LATENCY_PLAYER_", nC.pa = "LATENCY_ACTION_", nC.yt_vst = "VIDEO_STREAM_TYPE_", nC), pC = "all_vc ap aq c cbr cbrand cbrver cmodel cos cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
    function qC(a) { return !!J("FORCE_CSI_ON_GEL", !1) || N("csi_on_gel") || N("enable_csi_on_gel") || N("unplugged_tvhtml5_csi_on_gel") || !!bC(a).useGel }
    function rC(a) { a = bC(a); if (a.gel) { var b = a.gel; b.gelInfos || (b.gelInfos = {}); b.gelTicks || (b.gelTicks = {}) } else a.gel = { gelTicks: {}, gelInfos: {} }; return a.gel }
    ; function sC(a, b, c) {
        if (null !== b) if (cC(c)[a] = b, qC(c)) {
            var d = b; b = rC(c); if (b.gelInfos) b.gelInfos["info_" + a] = !0; else { var e = {}; b.gelInfos = (e["info_" + a] = !0, e) } if (a.match("_rid")) { var f = a.split("_rid")[0]; a = "REQUEST_ID" } if (a in lC) { b = lC[a]; mb(mC, b) && (d = !!d); a in oC && "string" === typeof d && (d = oC[a] + d.toUpperCase()); a = d; d = b.split("."); for (var g = e = {}, h = 0; h < d.length - 1; h++) { var l = d[h]; g[l] = {}; g = g[l] } g[d[d.length - 1]] = "requestIds" === b ? [{ id: a, endpoint: f }] : a; f = NB({}, e) } else mb(pC, a) || Vv(new Yq("Unknown label logged with GEL CSI",
                a)), f = void 0; f && qC(c) && (b = gC(c || ""), NB(b.info, f), b = rC(c), b.gelInfos || (b.gelInfos = {}), NB(b.gelInfos, f), c = dC(c), jC().info(f, c))
        } else gC(c || "").info[a] = b
    }
    function tC(a, b, c) { var d = aC(c); if (!b && "_" !== a[0]) { var e = a; YB.mark && (0 == e.lastIndexOf("mark_", 0) || (e = "mark_" + e), c && (e += " (" + c + ")"), YB.mark(e)) } e = b || Up(); d[a] = e; e = rC(c); e.gelTicks && (e.gelTicks["tick_" + a] = !0); c || b || Up(); if (qC(c)) { gC(c || "").tick[a] = b || Up(); e = dC(c); if ("_start" === a) { var f = jC(); kC(f, "baseline_" + e) || Bv("latencyActionBaselined", { clientActionNonce: e }, { timestamp: b }) } else jC().tick(a, e, b); eC(c); e = !0 } else e = !1; e || c || (uC(!1), gC("").tick[a] = b || Up()); return d[a] }
    function uC(a) { if (!y("yt.timing.pingSent_")) { var b = J("TIMING_ACTION", void 0), c = aC(); if (y("ytglobal.timingready_") && b && "_start" in aC(void 0) && $B()) if (eC(), a) vC(); else { a = !0; b = J("TIMING_WAIT", []); if (b.length) for (var d = 0, e = b.length; d < e; ++d)if (!(b[d] in c)) { a = !1; break } a && vC() } } }
    function vC() {
        if (!qC()) {
            var a = aC(), b = cC(), c = a._start, d = J("CSI_SERVICE_NAME", "youtube"), e = { v: 2, s: d, action: J("TIMING_ACTION", void 0) }, f = b.srt; void 0 !== a.srt && delete b.srt; a.aft = $B(); var g = aC(void 0), h = g.pbr, l = g.vc; g = g.pbs; if (h = h && l && g && h < l && l < g) h = !!cC(void 0).yt_pvis; h && "youtube" === d && (sC("yt_lt", "hot_bg"), d = a.vc, h = a.pbs, delete a.aft, b.aft = Math.round(h - d)); for (var m in b) "_" !== m.charAt(0) && (e[m] = b[m]); a.ps = Up(); m = {}; d = []; for (var n in a) "_" !== n.charAt(0) && (h = Math.round(a[n] - c), m[n] = h, d.push(n + "." + h));
            e.rt = d.join(","); a = !!b.ap; b = ""; for (var t in e) e.hasOwnProperty(t) && (b += "&" + t + "=" + e[t]); e = "/csi_204?" + b.substring(1); window.navigator && a ? Co(e) : zo(e); x("yt.timing.pingSent_", !0, void 0); kp(VB, new TB(m.aft + (Number(f) || 0)))
        }
    }
    var wC = window; wC.ytcsi && (wC.ytcsi.info = sC, wC.ytcsi.tick = tC); function xC(a) { for (var b = 0, c = a.length; b < c; b++) { var d; if (d = nf("IMG", null, a[b])) { var e = K(d, "thumb"); e && (d.src = e, cn(d, "thumb")) } } }
    ; function yC() { var a = J("PLAYER_CONFIG"); return a && a.args && void 0 !== a.args.authuser ? !0 : !(!J("SESSION_INDEX") && !J("LOGGED_IN")) }
    ; function zC() { U.call(this, "simple-thumb-wrap") }
    var AC, BC; q(zC, U);
    zC.prototype.register = function () {
        if (CC = J("WATCH_LATER_BUTTON", void 0)) AC = J("WATCH_QUEUE_BUTTON", void 0), BC = J("WATCH_QUEUE_MENU", void 0), Array.prototype.forEach.call(mf(V(this)), function (a) {
            var b = yC(), c = G(a, "thumb-wrapper"); if (!(c && (b ? F("addto-watch-later-button", c) : F("addto-watch-later-button-sign-in", c)))) {
                var d = this.D(a, "vid"); b = CC.replace(DC, d); c = AC.replace(DC, d); d = BC.replace(DC, d); var e = G(a, "thumb-wrapper"); e.appendChild(zf(Td(b))); e.appendChild(zf(Td(d))); e.appendChild(zf(Td(c))); (a = G(a, "video-list-item")) &&
                    Dj(a, "show-video-time")
            }
        }, this)
    };
    zC.prototype.unregister = function () { U.prototype.unregister.call(this); BC = AC = CC = "" };
    zC.getInstance = function () { return rm(zC) };
    var CC = "", DC = /__VIDEO_ID__/g; function EC(a) {
        var b = FC(); if (b = kd(b, window, "loginPopup", "width=375,height=440,resizable=yes,scrollbars=yes")) {
            var c = R("LOGGED_IN", function (d) { Jo(J("LOGGED_IN_PUBSUB_KEY", void 0)); $m("LOGGED_IN", !0); a(d) });
            $m("LOGGED_IN_PUBSUB_KEY", c); b.moveTo((screen.width - 375) / 2, (screen.height - 440) / 2)
        }
    }
    function FC() { var a = document.location.protocol + "//" + document.domain + "/post_login"; a = Jd(a, "mode", "subscribe"); a = Jd("/signin?context=popup", "next", a); return a = Jd(a, "feature", "sub_button") }
    x("yt.pubsub.publish", T, void 0); function GC() { U.call(this, "subscription-button") }
    q(GC, U); k = GC.prototype; k.register = function () { W(this, "click", this.Kc); Jp(this, DA, this.Ee); Jp(this, EA, this.De); Jp(this, FA, this.pf); Jp(this, IA, this.Ee); Jp(this, JA, this.De); Jp(this, KA, this.vh); Jp(this, MA, this.fh); Jp(this, NA, this.eh) };
    k.unregister = function () { Y(this, "click", this.Kc); U.prototype.unregister.call(this) };
    k.isSubscribed = function (a) { return !!this.D(a, "is-subscribed") };
    k.Kc = function (a) { var b = this.D(a, "href"), c = this.D(a, "insecure"); if (b) a = this.D(a, "target") || "_self", window.open(b, a); else if (!c) if (yC()) { b = this.Lb(a); c = this.D(a, "clicktracking"); var d = HC(this, a), e = this.D(a, "parent-url"); if (this.D(a, "is-subscribed")) { var f = this.D(a, "subscription-id"), g = this.D(a, "unsubscribe-params"), h = new yA(b, f, d, a, c, e, g); this.D(a, "show-unsub-confirm-dialog") ? MB(a, b).then(function () { kp(HA, h) }) : kp(HA, h) } else a = this.D(a, "params"), kp(CA, new wA(b, d, c, e, void 0, a)) } else IC(this, a) };
    k.Ee = function (a) { this.pb(a.i, this.Ue, !0) };
    k.De = function (a) { this.pb(a.i, this.Ue, !1) };
    k.pf = function (a) { this.pb(a.i, this.Ve, !0, a.j) };
    k.vh = function (a) { this.pb(a.i, this.Ve, !1) };
    k.fh = function (a) { this.pb(a.i, this.Mf) };
    k.eh = function (a) { this.pb(a.i, this.If) };
    k.Ve = function (a, b, c) { b ? (an(a, "is-subscribed", "true"), c && an(a, "subscription-id", c)) : (cn(a, "is-subscribed"), cn(a, "subscription-id")); JC(this, a) };
    k.Lb = function (a) { return this.D(a, "channel-external-id") };
    function HC(a, b) { if (!a.D(b, "ypc-enabled")) return null; var c = a.D(b, "ypc-item-type"); a = a.D(b, "ypc-item-id"); return { itemType: c, itemId: a, subscriptionElement: b } }
    k.Ue = function (a, b) { var c = G(a, "yt-uix-button-subscription-container"); Fj(c, "yt-subscription-button-disabled-mask-container", b); a.setAttribute("aria-busy", b ? "true" : "false"); a.disabled = b };
    function JC(a, b) { var c = a.D(b, "style-type"), d = !!a.D(b, "is-subscribed"); c = "-" + c; var e = "yt-uix-button-subscribed" + c; Fj(b, "yt-uix-button-subscribe" + c, !d); Fj(b, e, d); a.D(b, "subscriber-count-tooltip") && !a.D(b, "subscriber-count-show-when-subscribed") && (c = V(Dw.getInstance()), Fj(b, c, !d), b.title = d ? "" : a.D(b, "subscriber-count-title")); d ? P(function () { Bj(b, "hover-enabled") }, 1E3) : Dj(b, "hover-enabled") }
    k.Mf = function (a) { var b = !!this.D(a, "ypc-item-type"), c = !!this.D(a, "ypc-item-id"); !this.D(a, "ypc-enabled") && b && c && (Bj(a, "ypc-enabled"), an(a, "ypc-enabled", "true")) };
    k.If = function (a) { this.D(a, "ypc-enabled") && (Dj(a, "ypc-enabled"), cn(a, "ypc-enabled")) };
    function KC(a, b) { return Array.prototype.filter.call(mf(V(a)), function (c) { return b == this.Lb(c) }, a) }
    k.nf = function (a, b, c) { var d = Array.prototype.slice.call(arguments, 2); a.forEach(function (e) { b.apply(this, rb(e, d)) }, this) };
    k.pb = function (a, b, c) { var d = [KC(this, a)].concat(Array.prototype.slice.call(arguments, 1)); this.nf.apply(this, d) };
    function IC(a, b) {
        a = z(function (c) { c.discoverable_subscriptions && $m("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS", c.discoverable_subscriptions); this.Kc(b) }, a);
        EC(a)
    }
    GC.getInstance = function () { return rm(GC) }; function LC() { U.call(this, "subscription-preferences-button") }
    q(LC, U); k = LC.prototype; k.register = function () { W(this, "click", this.wd); Jp(this, FA, this.rf); Jp(this, PA, this.wh) };
    k.unregister = function () { Y(this, "click", this.wd); U.prototype.unregister.call(this) };
    k.wd = function (a) { var b = this.Lb(a); kp(BA, new vA(a, b)) };
    k.af = function (a, b) { Ej(a, ["yt-uix-subscription-notifications-all", "yt-uix-subscription-notifications-highlights", "yt-uix-subscription-notifications-none"]); Bj(a, b) };
    k.wh = function (a) { this.vd(a.j, this.af, MC[a.i]) };
    k.rf = function (a) { this.vd(a.i, this.af, "yt-uix-subscription-notifications-highlights") };
    k.Lb = function (a) { return this.D(a, "channel-external-id") };
    k.vd = function (a, b, c) { var d = [NC(this, a)].concat(Array.prototype.slice.call(arguments, 1)); this.qf.apply(this, d) };
    function NC(a, b) { return Array.prototype.filter.call(mf(V(a)), function (c) { return b == this.Lb(c) }, a) }
    k.qf = function (a, b, c) { var d = Array.prototype.slice.call(arguments, 2); a.forEach(function (e) { b.apply(this, rb(e, d)) }, this) };
    LC.getInstance = function () { return rm(LC) };
    var MC = { "receive-all-updates": "yt-uix-subscription-notifications-all", "receive-highlight-updates": "yt-uix-subscription-notifications-highlights", "receive-no-updates": "yt-uix-subscription-notifications-none" }; var OC = 0, PC = null, QC = null; var RC = 0, SC = [], TC = [], UC = 0, VC = {}, WC = {}, YC = new qj(XC, 1E3); function ZC() { UC++; var a = qf(window), b = new dg(0, 0, a.width, a.height); sC("vph", a.height); sC("vpw", a.width); tC("vpc"); a = document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]"); var c = a.length, d = []; YC.start(); for (var e = 0; e < c; e++) { var f = a[e]; $C(f, b) && (f = aD(f), f.then(bD), d.push(f), SC.push(f)) } tC("vpcc"); b = eh(d).then(cD); ih(b, dD); b.then(eD); SC.push(b); return b }
    function eD() { YC.stop() }
    function dD() { tC("vpr") }
    function $C(a, b) { var c = a; for (a = []; c != document.body;) { var d = jn(c); if (d in VC) return !0; if (d in WC) return !1; var e = window.getComputedStyle(c); if ("none" == e.display || "hidden" == e.visibility) return WC[d] = !0, !1; e = c.getBoundingClientRect(); if (!(b.left <= e.left + e.width && e.left <= b.left + b.width && b.top <= e.top + e.height && e.top <= b.top + b.height)) return WC[d] = !0, !1; a.push(d); c = c.parentElement } for (b = 0; b < a.length; b++)VC[a[b]] = !0; return !0 }
    function cD(a) { var b = qf(window); b = new dg(0, 0, b.width, b.height); for (var c = 0, d = 0, e = a.length; d < e; d++) { var f = a[d].time; $C(a[d].qg, b) && c < f && (c = f) } return c }
    function aD(a) { var b = UC; return new Wg(function (c, d) { var e = { qg: a, time: 0 }; a.loadTime ? (e.time = parseInt(a.loadTime, 10), c(e)) : (a.slt = function () { UC != b ? d() : (e.time = parseInt(a.loadTime, 10), c(e), a.slt = void 0) }, TC.push(a)) }) }
    function bD(a) { YC.start(); a = a.time; RC < a && (RC = a, tC("lim", a)) }
    function XC() { tC("vptl", RC); tC("vpl", RC) }
    function fD() {
        SC.forEach(function (a) { a.cancel() });
        RC = SC.length = 0; VC = {}; WC = {}; TC.forEach(function (a) { a.slt = void 0 });
        TC.length = 0
    }
    ; function gD() {
        tC("ol"); window.requestAnimationFrame && !document.hidden ? window.requestAnimationFrame(function () { setTimeout(function () { tC("cpt"); T("on_cpt_tick", (new Date).getTime()) }, 0) }) : document.hidden ? (tC("cpt"), T("on_cpt_tick", (new Date).getTime())) : setTimeout(function () {
            tC("cpt");
            T("on_cpt_tick", (new Date).getTime())
        }, 0);
        hD(); J("CSI_VIEWPORT") && (iD = ZC(), iD.then(function (a) { tC("vpl", a); iD = null }, function () { }))
    }
    function hD() { jD("init"); var a = J("PAGE_NAME", void 0); a && jD("init-" + a) }
    var iD = null; function jD(a) { if (y("yt.scheduler.instance")) { var b = Ua(Ko, a); kD.push(dp(function () { b() }, 0)) } else T(a) }
    var kD = []; var lD; function mD() {
        if (!lD) { var a = E("watch-queue"); if (!a) return []; lD = F("watch-queue-items-list", a) } if (!lD) return []; var b = []; a = Ff(lD); B(a, function (c) { (c = K(c, "video-id")) && b.push(c) });
        return b
    }
    ; var nD = { ii: "atp", Ui: "ska", Qi: "que", Ni: "mus", Ti: "sus", yi: "dsp", Si: "seq", Ji: "mic", si: "dpa", ki: "cds", Mi: "mlm" }; function oD(a) { this.port = this.domain = ""; this.i = "/api/lounge"; this.j = !0; a = a || document.location.href; var b = Number(Ad(a)[4] || null) || ""; b && (this.port = ":" + b); this.domain = Cd(a) || ""; a = Jc; 0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > nc(a, "10.0") && (this.j = !1)) }
    function pD(a, b) { var c = a.i; a.j && (c = "https://" + a.domain + a.port + a.i); return Kd(c + b, {}) }
    function qD(a, b, c, d, e) { a = { format: "JSON", method: "POST", context: a, timeout: 5E3, withCredentials: !1, onSuccess: Ua(a.o, d, !0), onError: Ua(a.l, e), onTimeout: Ua(a.A, e) }; c && (a.postParams = c, a.headers = { "Content-Type": "application/x-www-form-urlencoded" }); return ho(b, a) }
    oD.prototype.o = function (a, b, c, d) { b ? a(d) : a({ text: c.responseText }) };
    oD.prototype.l = function (a, b) { a(Error("Request error: " + b.status)) };
    oD.prototype.A = function (a) { a(Error("request timed out")) }; var rD = Date.now(), sD = null, tD = Array(50), uD = -1, vD = !1; function wD() { var a = xD; yD(); sD.push(a); zD() }
    function AD(a, b) { yD(); var c = BD(a, String(b)); 0 == sD.length ? CD(c) : (zD(), B(sD, function (d) { d(c) })) }
    function DD(a) { AD("CP", a) }
    function yD() { sD || (sD = y("yt.mdx.remote.debug.handlers_") || [], x("yt.mdx.remote.debug.handlers_", sD, void 0)) }
    function CD(a) { var b = (uD + 1) % 50; uD = b; tD[b] = a; vD || (vD = 49 == b) }
    function zD() {
        var a = sD; if (tD[0]) {
            var b = vD ? uD : -1; do { b = (b + 1) % 50; var c = tD[b]; B(a, function (d) { d(c) }) } while (b != uD);
            tD = Array(50); uD = -1; vD = !1
        }
    }
    function BD(a, b) { var c = (Date.now() - rD) / 1E3; c.toFixed && (c = c.toFixed(3)); var d = []; d.push("[", c + "s", "] "); d.push("[", "yt.mdx.remote", "] "); d.push(a + ": " + b, "\n"); return d.join("") }
    ; function ED(a) { a = a || {}; this.name = a.name || ""; this.id = a.id || a.screenId || ""; this.token = a.token || a.loungeToken || ""; this.uuid = a.uuid || a.dialId || ""; this.idType = a.screenIdType || "normal" }
    function FD(a, b) { return !!b && (a.id == b || a.uuid == b) }
    function GD(a) { return { name: a.name, screenId: a.id, loungeToken: a.token, dialId: a.uuid, screenIdType: a.idType } }
    function HD(a) { return new ED(a) }
    function ID(a) { return Array.isArray(a) ? fb(a, HD) : [] }
    function JD(a) { return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null" }
    function KD(a) { return Array.isArray(a) ? "[" + fb(a, JD).join(",") + "]" : "null" }
    ; function LD() { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) { var b = 16 * Math.random() | 0; return ("x" == a ? b : b & 3 | 8).toString(16) }) }
    function MD(a, b) { return jb(a, function (c) { return c || b ? !c != !b ? !1 : c.id == b.id : !0 }) }
    function ND(a, b) { return jb(a, function (c) { return FD(c, b) }) }
    ; function OD(a) { a = void 0 === a ? !1 : a; Ji.call(this); this.B = new mm(a); Ki(this, Ua(Ii, this.B)) }
    A(OD, Ji); OD.prototype.subscribe = function (a, b, c) { return this.isDisposed() ? 0 : this.B.subscribe(a, b, c) };
    OD.prototype.Cd = function (a, b) { this.isDisposed() || om(this.B, a, b, void 0) };
    OD.prototype.wa = function (a) { return this.isDisposed() ? !1 : this.B.wa(a) };
    OD.prototype.J = function (a, b) { this.isDisposed() || this.B.ha.apply(this.B, arguments) }; function PD(a) { OD.call(this); this.C = a; this.screens = [] }
    A(PD, OD); PD.prototype.ta = function () { return this.screens };
    PD.prototype.Ub = function (a) { return !!MD(this.screens, a) };
    PD.prototype.get = function (a) { return a ? ND(this.screens, a) : null };
    function QD(a, b) { var c = a.get(b.uuid) || a.get(b.id); if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a; a.screens.push(b); return !0 }
    function RD(a, b) {
        var c = a.screens.length != b.length; a.screens = eb(a.screens, function (f) { return !!MD(b, f) });
        for (var d = 0, e = b.length; d < e; d++)c = QD(a, b[d]) || c; return c
    }
    function SD(a, b) {
        var c = a.screens.length; a.screens = eb(a.screens, function (d) { return !(d || b ? !d != !b ? 0 : d.id == b.id : 1) });
        return a.screens.length < c
    }
    PD.prototype.info = function (a) { AD(this.C, a) }; function TD(a, b, c, d, e) { OD.call(this); this.o = a; this.M = b; this.A = c; this.H = d; this.C = e; this.l = 0; this.i = null; this.j = NaN }
    q(TD, OD); k = TD.prototype; k.start = function () { !this.i && isNaN(this.j) && this.Me() };
    k.stop = function () { this.i && (this.i.abort(), this.i = null); isNaN(this.j) || (Q(this.j), this.j = NaN) };
    k.O = function () { this.stop(); OD.prototype.O.call(this) };
    k.Me = function () { this.j = NaN; this.i = ho(pD(this.o, "/pairing/get_screen"), { method: "POST", postParams: { pairing_code: this.M }, timeout: 5E3, onSuccess: z(this.tf, this), onError: z(this.sf, this), onTimeout: z(this.uf, this) }) };
    k.tf = function (a, b) { this.i = null; a = b.screen || {}; a.dialId = this.A; a.name = this.H; b = -1; this.C && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs); this.J("pairingComplete", new ED(a), b) };
    k.sf = function (a) { this.i = null; a.status && 404 == a.status ? this.l >= UD.length ? this.J("pairingFailed", Error("DIAL polling timed out")) : (a = UD[this.l], this.j = P(z(this.Me, this), a), this.l++) : this.J("pairingFailed", Error("Server error " + a.status)) };
    k.uf = function () { this.i = null; this.J("pairingFailed", Error("Server not responding")) };
    var UD = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4]; function VD(a) {
        this.name = this.id = ""; this.clientName = "UNKNOWN_INTERFACE"; this.app = ""; this.type = "REMOTE_CONTROL"; this.obfuscatedGaiaId = this.avatar = this.username = ""; this.o = !1; this.capabilities = new Set; this.experiments = new Set; this.theme = "u"; new Tj; this.j = this.l = ""; this.i = void 0; this.model = this.brand = ""; this.year = 0; this.chipset = this.osVersion = this.os = ""; this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN"; a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() :
            "UNKNOWN_INTERFACE", this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", WD(this, a.capabilities || ""), XD(this, a.experiments || ""), this.l = a.remoteControllerUrl || "", this.j = a.localChannelEncryptionKey || "", this.i = a.deviceContext, this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType =
            a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
    }
    VD.prototype.copy = function () {
        var a = { id: this.id, name: this.name, app: this.app, type: this.type, user: this.username, userAvatarUri: this.avatar, obfuscatedGaiaId: this.obfuscatedGaiaId, theme: this.theme, capabilities: Array.from(this.capabilities.values()).join(","), experiments: Array.from(this.experiments.values()).join(",") }; this.brand && (a.brand = this.brand); this.model && (a.model = this.model); this.year && (a.year = this.year); this.os && (a.os = this.os); this.osVersion && (a.osVersion = this.osVersion); this.chipset && (a.chipset =
            this.chipset); "UNKNOWN_INTERFACE" !== this.clientName && (a.clientName = this.clientName); "MDX_DIAL_SERVER_TYPE_UNKNOWN" !== this.mdxDialServerType && (a.mdxDialServerType = this.mdxDialServerType); a = new VD(a); a.o = this.o; a.l = this.l; a.j = this.j; a.i = this.i; return a
    };
    VD.prototype.equals = function (a) { return a ? this.id == a.id : !1 };
    function WD(a, b) { a.capabilities.clear(); eb(b.split(","), Ua(Db, nD)).forEach(function (c) { a.capabilities.add(c) }) }
    function XD(a, b) { a.experiments.clear(); b.split(",").forEach(function (c) { a.experiments.add(c) }) }
    ; var YD; function ZD() { var a = $D(), b = aE(); if (bE()) { var c = a; var d = 0; for (var e = c.length, f; d < e;) { var g = d + (e - d >>> 1); var h = yb(b, c[g]); 0 < h ? d = g + 1 : (e = g, f = !h) } d = f ? d : -d - 1; 0 > d && ub(c, -(d + 1), 0, b) } a = cE(a); if (0 == a.length) try { to("remote_sid") } catch (l) { } else try { ro("remote_sid", a.join(","), -1, "/") } catch (l) { } }
    function $D() { var a = up("yt-remote-connected-devices") || []; a.sort(yb); return a }
    function cE(a) { if (0 == a.length) return []; var b = a[0].indexOf("#"), c = -1 == b ? a[0] : a[0].substring(0, b); return fb(a, function (d, e) { return 0 == e ? d : d.substring(c.length) }) }
    function dE(a) { rp("yt-remote-connected-devices", a, 86400) }
    function aE() { if (eE) return eE; var a = up("yt-remote-device-id"); a || (a = LD(), rp("yt-remote-device-id", a, 31536E3)); for (var b = $D(), c = 1, d = a; mb(b, d);)c++, d = a + "#" + c; return eE = d }
    function fE() { return up("yt-remote-session-browser-channel") }
    function bE() { return up("yt-remote-session-screen-id") }
    function gE(a) {
        5 < a.length && (a = a.slice(a.length - 5)); var b = fb(hE(), function (d) { return d.loungeToken }), c = fb(a, function (d) { return d.loungeToken });
        ib(c, function (d) { return !mb(b, d) }) && iE();
        rp("yt-remote-local-screens", a, 31536E3)
    }
    function hE() { return up("yt-remote-local-screens") || [] }
    function iE() { rp("yt-remote-lounge-token-expiration", !0, 86400) }
    function jE(a, b) { rp("yt-remote-session-browser-channel", a); rp("yt-remote-session-screen-id", b); a = $D(); b = aE(); mb(a, b) || a.push(b); dE(a); ZD() }
    function kE(a) { a || (vp("yt-remote-session-screen-id"), vp("yt-remote-session-video-id")); ZD(); a = $D(); ob(a, aE()); dE(a) }
    function lE() { mE(); return YD ? !!YD.get("yt-remote-use-staging-server") : !1 }
    function mE() { if (!YD) { var a = Mm(); a && (YD = new sm(a)) } }
    var eE = ""; function nE(a) { PD.call(this, "LocalScreenService"); this.j = a; this.i = NaN; oE(this); this.info("Initializing with " + KD(this.screens)) }
    A(nE, PD); k = nE.prototype; k.start = function () { oE(this) && this.J("screenChange"); !up("yt-remote-lounge-token-expiration") && pE(this); Q(this.i); this.i = P(z(this.start, this), 1E4) };
    k.add = function (a, b) { oE(this); QD(this, a); qE(this, !1); this.J("screenChange"); b(a); a.token || pE(this) };
    k.remove = function (a, b) { var c = oE(this); SD(this, a) && (qE(this, !1), c = !0); b(a); c && this.J("screenChange") };
    k.Cc = function (a, b, c, d) { var e = oE(this), f = this.get(a.id); f ? (f.name != b && (f.name = b, qE(this, !1), e = !0), c(a)) : d(Error("no such local screen.")); e && this.J("screenChange") };
    k.O = function () { Q(this.i); nE.T.O.call(this) };
    function pE(a) {
        if (a.screens.length) {
            var b = fb(a.screens, function (d) { return d.id }), c = pD(a.j, "/pairing/get_lounge_token_batch");
            qD(a.j, c, { screen_ids: b.join(",") }, z(a.cg, a), z(a.ag, a))
        }
    }
    k.cg = function (a) { oE(this); var b = this.screens.length; a = a && a.screens || []; for (var c = 0, d = a.length; c < d; ++c) { var e = a[c], f = this.get(e.screenId); f && (f.token = e.loungeToken, --b) } qE(this, !b); b && AD(this.C, "Missed " + b + " lounge tokens.") };
    k.ag = function (a) { AD(this.C, "Requesting lounge tokens failed: " + a) };
    function oE(a) {
        if (N("deprecate_pair_servlet_enabled")) return RD(a, []); var b = ID(hE()); b = eb(b, function (c) { return !c.uuid });
        return RD(a, b)
    }
    function qE(a, b) { gE(fb(a.screens, GD)); b && iE() }
    ; function rE(a, b) { OD.call(this); this.C = b; b = (b = up("yt-remote-online-screen-ids") || "") ? b.split(",") : []; for (var c = {}, d = this.C(), e = 0, f = d.length; e < f; ++e) { var g = d[e].id; c[g] = mb(b, g) } this.i = c; this.A = a; this.l = this.o = NaN; this.j = null; sE("Initialized with " + gk(this.i)) }
    q(rE, OD); k = rE.prototype; k.start = function () { var a = parseInt(up("yt-remote-fast-check-period") || "0", 10); (this.o = Va() - 144E5 < a ? 0 : a) ? tE(this) : (this.o = Va() + 3E5, rp("yt-remote-fast-check-period", this.o), this.bd()) };
    k.isEmpty = function () { return Hb(this.i) };
    k.update = function () {
        sE("Updating availability on schedule."); var a = this.C(), b = Bb(this.i, function (c, d) { return c && !!ND(a, d) }, this);
        uE(this, b)
    };
    function vE(a, b, c) { var d = pD(a.A, "/pairing/get_screen_availability"); qD(a.A, d, { lounge_token: b.token }, z(function (e) { e = e.screens || []; for (var f = 0, g = e.length; f < g; ++f)if (e[f].loungeToken == b.token) { c("online" == e[f].status); return } c(!1) }, a), z(function () { c(!1) }, a)) }
    k.O = function () { Q(this.l); this.l = NaN; this.j && (this.j.abort(), this.j = null); OD.prototype.O.call(this) };
    function uE(a, b) { a: if (Cb(b) != Cb(a.i)) var c = !1; else { c = Fb(b); for (var d = 0, e = c.length; d < e; ++d)if (!a.i[c[d]]) { c = !1; break a } c = !0 } c || (sE("Updated online screens: " + gk(a.i)), a.i = b, a.J("screenChange")); wE(a) }
    function tE(a) { isNaN(a.l) || Q(a.l); a.l = P(z(a.bd, a), 0 < a.o && a.o < Va() ? 2E4 : 1E4) }
    k.bd = function () { Q(this.l); this.l = NaN; this.j && this.j.abort(); var a = xE(this); if (Cb(a)) { var b = pD(this.A, "/pairing/get_screen_availability"); this.j = qD(this.A, b, { lounge_token: Fb(a).join(",") }, z(this.nh, this, a), z(this.mh, this)) } else uE(this, {}), tE(this) };
    k.nh = function (a, b) { this.j = null; var c = Fb(xE(this)); if (wb(c, Fb(a))) { b = b.screens || []; c = {}; for (var d = 0, e = b.length; d < e; ++d)c[a[b[d].loungeToken]] = "online" == b[d].status; uE(this, c); tE(this) } else this.Y("Changing Screen set during request."), this.bd() };
    k.mh = function (a) { this.Y("Screen availability failed: " + a); this.j = null; tE(this) };
    function sE(a) { AD("OnlineScreenService", a) }
    k.Y = function (a) { AD("OnlineScreenService", a) };
    function xE(a) {
        var b = {}; B(a.C(), function (c) { c.token ? b[c.token] = c.id : this.Y("Requesting availability of screen w/o lounge token.") });
        return b
    }
    function wE(a) {
        a = Fb(Bb(a.i, function (b) { return b }));
        a.sort(yb); a.length ? rp("yt-remote-online-screen-ids", a.join(","), 60) : vp("yt-remote-online-screen-ids")
    }
    ; function yE(a, b) { b = void 0 === b ? !1 : b; PD.call(this, "ScreenService"); this.o = a; this.H = b; this.i = this.j = null; this.l = []; this.A = {}; zE(this) }
    A(yE, PD); k = yE.prototype; k.start = function () { this.j.start(); this.i.start(); this.screens.length && (this.J("screenChange"), this.i.isEmpty() || this.J("onlineScreenChange")) };
    k.add = function (a, b, c) { this.j.add(a, b, c) };
    k.remove = function (a, b, c) { this.j.remove(a, b, c); this.i.update() };
    k.Cc = function (a, b, c, d) { this.j.Ub(a) ? this.j.Cc(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, AD(this.C, a), d(Error(a))) };
    k.ta = function (a) { return a ? this.screens : rb(this.screens, eb(this.l, function (b) { return !this.Ub(b) }, this)) };
    k.xd = function () { return eb(this.ta(!0), function (a) { return !!this.i.i[a.id] }, this) };
    function AE(a, b, c, d, e, f) {
        a.info("getAutomaticScreenByIds " + c + " / " + b); c || (c = a.A[b]); var g = a.ta(), h = c ? ND(g, c) : null; c && (a.H || h) || (h = ND(g, b)); if (h) { h.uuid = b; var l = BE(a, h); vE(a.i, l, function (m) { e(m ? l : null) }) } else c ? CE(a, c, z(function (m) {
            var n = BE(this, new ED({
                name: d,
                screenId: c, loungeToken: m, dialId: b || ""
            })); vE(this.i, n, function (t) { e(t ? n : null) })
        }, a), f) : e(null)
    }
    k.yd = function (a, b, c, d, e, f) {
        var g = this; this.info("getDialScreenByPairingCode " + a + " / " + b); var h = new TD(this.o, a, b, c, d); h.subscribe("pairingComplete", function (l, m) { Ii(h); e(BE(g, l), m) });
        h.subscribe("pairingFailed", function (l) { Ii(h); f(l) });
        h.start(); return z(h.stop, h)
    };
    function DE(a, b) { for (var c = 0, d = a.screens.length; c < d; ++c)if (a.screens[c].name == b) return a.screens[c]; return null }
    k.vf = function (a, b, c, d) {
        ho(pD(this.o, "/pairing/get_screen"), {
            method: "POST", postParams: { pairing_code: a }, timeout: 5E3, onSuccess: z(function (e, f) { e = new ED(f.screen || {}); if (!e.name || DE(this, e.name)) { a: { f = e.name; for (var g = 2, h = b(f, g); DE(this, h);) { g++; if (20 < g) break a; h = b(f, g) } f = h } e.name = f } c(BE(this, e)) }, this),
            onError: z(function (e) { d(Error("pairing request failed: " + e.status)) }, this),
            onTimeout: z(function () { d(Error("pairing request timed out.")) }, this)
        })
    };
    function EE(a, b, c) { vE(a.i, b, c) }
    k.O = function () { Ii(this.j); Ii(this.i); yE.T.O.call(this) };
    function CE(a, b, c, d) {
        a.info("requestLoungeToken_ for " + b); var e = {
            postParams: { screen_ids: b }, method: "POST", context: a, onSuccess: function (f, g) { f = g && g.screens || []; f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response")) },
            onError: function () { d(Error("Request screen lounge token failed")) }
        };
        ho(pD(a.o, "/pairing/get_lounge_token_batch"), e)
    }
    function FE(a) { a.screens = a.j.ta(); var b = a.A, c = {}, d; for (d in b) c[b[d]] = d; b = 0; for (d = a.screens.length; b < d; ++b) { var e = a.screens[b]; e.uuid = c[e.id] || "" } a.info("Updated manual screens: " + KD(a.screens)) }
    k.lg = function () { FE(this); this.J("screenChange"); this.i.update() };
    function zE(a) { GE(a); a.j = new nE(a.o); a.j.subscribe("screenChange", z(a.lg, a)); FE(a); a.H || (a.l = ID(up("yt-remote-automatic-screen-cache") || [])); GE(a); a.info("Initializing automatic screens: " + KD(a.l)); a.i = new rE(a.o, z(a.ta, a, !0)); a.i.subscribe("screenChange", z(function () { this.J("onlineScreenChange") }, a)) }
    function BE(a, b) { var c = a.get(b.id); c ? (c.uuid = b.uuid, b = c) : ((c = ND(a.l, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.l.push(b), a.H || HE(a)); GE(a); a.A[b.uuid] = b.id; rp("yt-remote-device-id-map", a.A, 31536E3); return b }
    function HE(a) {
        a = eb(a.l, function (b) { return "shortLived" != b.idType });
        rp("yt-remote-automatic-screen-cache", fb(a, GD))
    }
    function GE(a) { a.A = up("yt-remote-device-id-map") || {} }
    yE.prototype.dispose = yE.prototype.dispose; function IE(a, b, c) { OD.call(this); this.ga = c; this.l = a; this.i = b; this.o = null }
    A(IE, OD); k = IE.prototype; k.getScreen = function () { return this.o };
    function JE(a, b) { a.o = b; a.J("sessionScreen", a.o) }
    function KE(a, b) { a.o && (a.o.token = b, BE(a.l, a.o)); a.J("sessionScreen", a.o) }
    k.ka = function (a) { this.isDisposed() || (a && (LE(this, "" + a), this.J("sessionFailed")), this.o = null, this.J("sessionScreen", null)) };
    k.info = function (a) { AD(this.ga, a) };
    function LE(a, b) { AD(a.ga, b) }
    k.zd = function () { return null };
    k.dd = function (a) { var b = this.i; a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null; chrome.cast.setReceiverDisplayStatus(b, z(function () { this.info("Updated receiver status for " + b.friendlyName + ": " + a) }, this), z(function () { LE(this, "Failed to update receiver status for: " + b.friendlyName) }, this)) };
    k.O = function () { this.dd(""); IE.T.O.call(this) }; function ME(a, b, c) {
        IE.call(this, a, b, "CastSession"); var d = this; this.config_ = c; this.j = null; this.V = z(this.wf, this); this.W = z(this.yh, this); this.U = P(function () { NE(d, null) }, 12E4);
        this.H = this.A = this.C = this.M = 0; this.X = !1; this.N = "unknown"
    }
    q(ME, IE); k = ME.prototype; k.cd = function (a) { if (this.j) { if (this.j == a) return; LE(this, "Overriding cast session with new session object"); OE(this); this.X = !1; this.N = "unknown"; this.j.removeUpdateListener(this.V); this.j.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.W) } this.j = a; this.j.addUpdateListener(this.V); this.j.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.W); PE(this, "getMdxSessionStatus") };
    k.yb = function (a) { this.info("launchWithParams no-op for Cast: " + gk(a)) };
    k.stop = function () { this.j ? this.j.stop(z(function () { this.ka() }, this), z(function () { this.ka(Error("Failed to stop receiver app.")) }, this)) : this.ka(Error("Stopping cast device without session.")) };
    k.dd = function () { };
    k.O = function () { this.info("disposeInternal"); OE(this); this.j && (this.j.removeUpdateListener(this.V), this.j.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.W)); this.j = null; IE.prototype.O.call(this) };
    function QE(a, b) { Q(a.H); a.H = 0; 0 == b ? RE(a) : a.H = P(function () { RE(a) }, b) }
    function RE(a) { PE(a, "getLoungeToken"); Q(a.A); a.A = P(function () { SE(a, null) }, 3E4) }
    function PE(a, b) { a.info("sendYoutubeMessage_: " + b + " " + gk(void 0)); var c = {}; c.type = b; a.j ? a.j.sendMessage("urn:x-cast:com.google.youtube.mdx", c, Ja, z(function () { LE(this, "Failed to send message: " + b + ".") }, a)) : LE(a, "Sending yt message without session: " + gk(c)) }
    k.yh = function (a, b) { if (!this.isDisposed()) if (b) if (b = mk(b), Na(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + gk(b)), a) { case "mdxSessionStatus": NE(this, b); break; case "loungeToken": SE(this, b); break; default: LE(this, "Unknown youtube message: " + a) } else LE(this, "Unable to parse message."); else LE(this, "No data in message.") };
    function TE(a, b) { b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.getScreen() && a.getScreen().id == b || a.be(b, function (c) { JE(a, c) }, function () { return a.ka() }, 5)) : a.ka(Error("Waiting for session status timed out.")) }
    function UE(a, b, c) { a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b)); var d = new ED(b); VE(a, d, function (e) { e ? (a.X = !0, BE(a.l, d), JE(a, d), a.N = "unknown", QE(a, c)) : (tn(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.ka()) }, 5) }
    function NE(a, b) {
        Q(a.U); a.U = 0; b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.getScreen() && a.getScreen().uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? UE(a, { name: a.i.friendlyName, screenId: b.screenId, loungeToken: b.loungeToken, dialId: b.deviceId, screenIdType: "shortLived" }, b.loungeTokenRefreshIntervalMs) : (tn(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), TE(a, b.screenId))) : (tn(Error("No device id presents in mdxSessionStatusData: " +
            JSON.stringify(b) + ".")), TE(a, b.screenId)) : TE(a, b.screenId) : a.ka(Error("Waiting for session status timed out."))
    }
    function SE(a, b) { Q(a.A); a.A = 0; var c = null; if (b) if (b.loungeToken) { var d; (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken") } else c = "missingLoungeToken"; else c = "noLoungeTokenResponse"; c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.N = c, QE(a, 3E4)) : (KE(a, b.loungeToken), a.X = !1, a.N = "unknown", QE(a, b.loungeTokenRefreshIntervalMs)) }
    k.be = function (a, b, c, d) { Q(this.M); this.M = 0; AE(this.l, this.i.label, a, this.i.friendlyName, z(function (e) { e ? b(e) : 0 <= d ? (LE(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.M = P(z(this.be, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen.")) }, this), c) };
    function VE(a, b, c, d) { Q(a.C); a.C = 0; EE(a.l, b, function (e) { e || 0 > d ? c(e) : a.C = P(function () { VE(a, b, c, d - 1) }, 300) }) }
    k.zd = function () { return this.j };
    k.wf = function (a) { this.isDisposed() || a || (LE(this, "Cast session died."), this.ka()) };
    function OE(a) { Q(a.M); a.M = 0; Q(a.C); a.C = 0; Q(a.U); a.U = 0; Q(a.A); a.A = 0; Q(a.H); a.H = 0 }
    ; function WE(a, b, c, d) { IE.call(this, a, b, "DialSession"); this.config_ = d; this.j = this.M = null; this.W = ""; this.Da = c; this.ia = null; this.U = Ja; this.N = NaN; this.ea = z(this.xf, this); this.A = Ja; this.H = this.C = 0; this.V = !1; this.X = "unknown" }
    q(WE, IE); k = WE.prototype; k.cd = function (a) { this.j = a; this.j.addUpdateListener(this.ea) };
    k.yb = function (a) { this.ia = a; this.U() };
    k.stop = function () { XE(this); this.j ? this.j.stop(z(this.ka, this, null), z(this.ka, this, "Failed to stop DIAL device.")) : this.ka() };
    k.O = function () { XE(this); this.j && this.j.removeUpdateListener(this.ea); this.j = null; IE.prototype.O.call(this) };
    function YE(a) { var b; return !!(a.config_.enableDialLoungeToken && (null == (b = a.j) ? 0 : b.getDialAppInfo)) }
    function ZE(a) {
        a.A = a.l.yd(a.W, a.i.label, a.i.friendlyName, YE(a), function (b, c) { a.A = Ja; a.V = !0; JE(a, b); "shortLived" == b.idType && 0 < c && $E(a, c) }, function (b) {
            a.A = Ja;
            a.ka(b)
        })
    }
    k.xf = function (a) { this.isDisposed() || a || (LE(this, "DIAL session died."), this.A(), this.A = Ja, this.ka()) };
    function aF(a) { var b = {}; b.pairingCode = a.W; b.theme = a.Da; lE() && (b.env_useStageMdx = 1); return Id(b) }
    function bF(a) {
        return new Promise(function (b) {
            a.W = LD(); if (a.ia) { var c = new chrome.cast.DialLaunchResponse(!0, aF(a)); b(c); ZE(a) } else a.U = function () {
                Q(a.N); a.U = function () { };
                a.N = NaN; var d = new chrome.cast.DialLaunchResponse(!0, aF(a)); b(d); ZE(a)
            }, a.N = P(function () { a.U() }, 100)
        })
    }
    function cF(a, b, c) { a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b)); var d = new ED(b); return (new Promise(function (e) { dF(a, d, function (f) { f ? (a.V = !0, BE(a.l, d), JE(a, d), $E(a, c)) : tn(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")); e(f) }, 5) })).then(function (e) { return e ? new chrome.cast.DialLaunchResponse(!1) : bF(a) }) }
    function eF(a, b) {
        var c = a.M.receiver.label, d = a.i.friendlyName; return (new Promise(function (e) {
            AE(a.l, c, b, d, function (f) { f && f.token && JE(a, f); e(f) }, function (f) {
                LE(a, "Failed to get DIAL screen: " + f);
                e(null)
            })
        })).then(function (e) { return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : bF(a) })
    }
    function dF(a, b, c, d) { Q(a.C); a.C = 0; EE(a.l, b, function (e) { e || 0 > d ? c(e) : a.C = P(function () { dF(a, b, c, d - 1) }, 300) }) }
    function $E(a, b) { a.info("getDialAppInfoWithTimeout_ " + b); YE(a) && (Q(a.H), a.H = 0, 0 == b ? fF(a) : a.H = P(function () { fF(a) }, b)) }
    function fF(a) {
        YE(a) && a.j.getDialAppInfo(function (b) { a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b)); b = b.extraData || {}; var c = null; if (b.loungeToken) { var d; (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken") } else c = "missingLoungeToken"; c ? (a.X = c, $E(a, 3E4)) : (a.V = !1, a.X = "unknown", KE(a, b.loungeToken), $E(a, b.loungeTokenRefreshIntervalMs)) }, function (b) {
            a.info("getDialAppInfo error: " + b);
            a.X = "noLoungeTokenResponse"; $E(a, 3E4)
        })
    }
    function XE(a) {
        Q(a.C); a.C = 0; Q(a.H); a.H = 0; a.A(); a.A = function () { };
        Q(a.N)
    }
    ; function gF(a, b) { IE.call(this, a, b, "ManualSession"); this.j = P(z(this.yb, this, null), 150) }
    q(gF, IE); gF.prototype.stop = function () { this.ka() };
    gF.prototype.cd = function () { };
    gF.prototype.yb = function () { Q(this.j); this.j = NaN; var a = ND(this.l.ta(), this.i.label); a ? JE(this, a) : this.ka(Error("No such screen")) };
    gF.prototype.O = function () { Q(this.j); this.j = NaN; IE.prototype.O.call(this) }; function hF(a, b) { OD.call(this); this.config_ = b; this.j = a; this.M = b.appId || "233637DE"; this.o = b.theme || "cl"; this.N = b.disableCastApi || !1; this.C = b.forceMirroring || !1; this.i = null; this.H = !1; this.l = []; this.A = z(this.kh, this) }
    q(hF, OD); k = hF.prototype;
    k.init = function (a, b) {
        chrome.cast.timeout.requestSession = 3E4; var c = new chrome.cast.SessionRequest(this.M); this.N || (c.dialRequest = new chrome.cast.DialRequest("YouTube")); var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED; a = a || this.C ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION; var e = z(this.lh, this); c = new chrome.cast.ApiConfig(c, z(this.He, this), e, d, a); c.customDialLaunchCallback = z(this.dh, this); chrome.cast.initialize(c, z(function () {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.A),
                wD(), this.j.subscribe("onlineScreenChange", z(this.Ad, this)), this.l = iF(this), chrome.cast.setCustomReceivers(this.l, Ja, z(function (f) { this.Y("Failed to set initial custom receivers: " + gk(f)) }, this)), this.J("yt-remote-cast2-availability-change", jF(this)), b(!0))
        }, this), z(function (f) {
            this.Y("Failed to initialize API: " + gk(f));
            b(!1)
        }, this))
    };
    k.Jh = function (a, b) {
        kF("Setting connected screen ID: " + a + " -> " + b); if (this.i) { var c = this.i.getScreen(); if (!a || c && c.id != a) kF("Unsetting old screen status: " + this.i.i.friendlyName), lF(this, null) } if (a && b) {
            if (!this.i) {
                c = ND(this.j.ta(), a); if (!c) { kF("setConnectedScreenStatus: Unknown screen."); return } if ("shortLived" == c.idType) { kF("setConnectedScreenStatus: Screen with id type to be short lived."); return } a = mF(this, c); a || (kF("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.l.push(a), chrome.cast.setCustomReceivers(this.l, Ja, z(function (d) { this.Y("Failed to set initial custom receivers: " + gk(d)) }, this)));
                kF("setConnectedScreenStatus: new active receiver: " + a.friendlyName); lF(this, new gF(this.j, a), !0)
            } this.i.dd(b)
        } else kF("setConnectedScreenStatus: no screen.")
    };
    function mF(a, b) { return b ? jb(a.l, function (c) { return FD(b, c.label) }, a) : null }
    k.Kh = function (a) { this.isDisposed() ? this.Y("Setting connection data on disposed cast v2") : this.i ? this.i.yb(a) : this.Y("Setting connection data without a session") };
    k.zf = function () { this.isDisposed() ? this.Y("Stopping session on disposed cast v2") : this.i ? (this.i.stop(), lF(this, null)) : kF("Stopping non-existing session") };
    k.requestSession = function () { chrome.cast.requestSession(z(this.He, this), z(this.oh, this)) };
    k.O = function () { this.j.Cd("onlineScreenChange", z(this.Ad, this)); window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.A); ob(y("yt.mdx.remote.debug.handlers_") || [], xD); Ii(this.i); OD.prototype.O.call(this) };
    function kF(a) { AD("Controller", a) }
    k.Y = function (a) { AD("Controller", a) };
    function xD(a) { window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a) }
    function jF(a) { return a.H || !!a.l.length || !!a.i }
    function lF(a, b, c) { b != a.i && (Ii(a.i), (a.i = b) ? (c ? a.J("yt-remote-cast2-receiver-resumed", b.i) : a.J("yt-remote-cast2-receiver-selected", b.i), b.subscribe("sessionScreen", z(a.Ie, a, b)), b.subscribe("sessionFailed", function () { return nF(a, b) }), b.getScreen() ? a.J("yt-remote-cast2-session-change", b.getScreen()) : c && a.i.yb(null)) : a.J("yt-remote-cast2-session-change", null)) }
    function nF(a, b) { a.i == b && a.J("yt-remote-cast2-session-failed") }
    k.Ie = function (a, b) { this.i == a && (b || lF(this, null), this.J("yt-remote-cast2-session-change", b)) };
    k.kh = function (a, b) {
        if (!this.isDisposed()) if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), kF("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
            case chrome.cast.ReceiverAction.CAST: if (this.i) if (this.i.i.label != a.label) kF("onReceiverAction_: Stopping active receiver: " + this.i.i.friendlyName), this.i.stop(); else { kF("onReceiverAction_: Casting to active receiver."); this.i.getScreen() && this.J("yt-remote-cast2-session-change", this.i.getScreen()); break } switch (a.receiverType) {
                case chrome.cast.ReceiverType.CUSTOM: lF(this,
                    new gF(this.j, a)); break; case chrome.cast.ReceiverType.DIAL: lF(this, new WE(this.j, a, this.o, this.config_)); break; case chrome.cast.ReceiverType.CAST: lF(this, new ME(this.j, a, this.config_)); break; default: this.Y("Unknown receiver type: " + a.receiverType)
            }break; case chrome.cast.ReceiverAction.STOP: this.i && this.i.i.label == a.label ? this.i.stop() : this.Y("Stopping receiver w/o session: " + a.friendlyName)
        } else this.Y("onReceiverAction_ called without receiver.")
    };
    k.dh = function (a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed")); var b = a.receiver; b.receiverType != chrome.cast.ReceiverType.DIAL && (this.Y("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL); var c = this.i ? this.i.i : null; if (!c || c.label != b.label) return this.Y("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch")); if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.i.getScreen()) return kF("Reselecting dial screen."),
                this.J("yt-remote-cast2-session-change", this.i.getScreen()), Promise.resolve(new chrome.cast.DialLaunchResponse(!1)); this.Y('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName); lF(this, new WE(this.j, b, this.o, this.config_))
        } b = this.i; b.M = a; b.M.appState == chrome.cast.DialAppState.RUNNING ? (a = b.M.extraData || {}, c = a.screenId || null, YE(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = cF(b, {
            name: b.i.friendlyName, screenId: a.screenId, loungeToken: a.loungeToken, dialId: b.M.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (tn(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = eF(b, c)) : a = eF(b, c)) : a = bF(b); return a
    };
    k.He = function (a) {
        var b = this; if (!this.isDisposed() && !this.C) {
            kF("New cast session ID: " + a.sessionId); var c = a.receiver; if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.i) if (c.receiverType == chrome.cast.ReceiverType.CAST) kF("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), lF(this, new ME(this.j, c, this.config_), !0); else { this.Y("Got non-cast session without previous mdx receiver event, or mdx resume."); return } var d = this.i.i, e = ND(this.j.ta(),
                    d.label); e && FD(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (kF("onSessionEstablished_: manual to cast session change " + c.friendlyName), Ii(this.i), this.i = new ME(this.j, c, this.config_), this.i.subscribe("sessionScreen", z(this.Ie, this, this.i)), this.i.subscribe("sessionFailed", function () { return nF(b, b.i) }), this.i.yb(null));
                this.i.cd(a)
            }
        }
    };
    k.yf = function () { return this.i ? this.i.zd() : null };
    k.oh = function (a) { this.isDisposed() || (this.Y("Failed to estabilish a session: " + gk(a)), a.code != chrome.cast.ErrorCode.CANCEL && lF(this, null), this.J("yt-remote-cast2-session-failed")) };
    k.lh = function (a) { kF("Receiver availability updated: " + a); if (!this.isDisposed()) { var b = jF(this); this.H = a == chrome.cast.ReceiverAvailability.AVAILABLE; jF(this) != b && this.J("yt-remote-cast2-availability-change", jF(this)) } };
    function iF(a) {
        var b = a.j.xd(), c = a.i && a.i.i; a = fb(b, function (d) { c && FD(d, c.label) && (c = null); var e = d.uuid ? d.uuid : d.id, f = mF(this, d); f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM); return f }, a);
        c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c)); return a
    }
    k.Ad = function () { this.isDisposed() || (this.l = iF(this), kF("Updating custom receivers: " + gk(this.l)), chrome.cast.setCustomReceivers(this.l, Ja, z(function () { this.Y("Failed to set custom receivers.") }, this)), this.J("yt-remote-cast2-availability-change", jF(this))) };
    hF.prototype.setLaunchParams = hF.prototype.Kh; hF.prototype.setConnectedScreenStatus = hF.prototype.Jh; hF.prototype.stopSession = hF.prototype.zf; hF.prototype.getCastSession = hF.prototype.yf; hF.prototype.requestSession = hF.prototype.requestSession; hF.prototype.init = hF.prototype.init; hF.prototype.dispose = hF.prototype.dispose; function oF(a, b, c) {
        c.disableCastApi ? pF("Cannot initialize because disabled by Mdx config.") : qF() ? rF(a, c) && (sF(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? tF(b) : (window.__onGCastApiAvailable = function (d, e) { d ? tF(b) : (uF("Failed to load cast API: " + e), vF(!1), sF(!1), vp("yt-remote-cast-available"), vp("yt-remote-cast-receiver"), wF(), b(!1)) }, c.loadCastApiSetupScript ? Po("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") &&
            window.navigator.presentation ? 60 <= Wd() && fe() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? ae() : 89 <= Wd() ? ge() : (de(), Zd(he.map(be))))) : pF("Cannot initialize because not running Chrome")
    }
    function wF() { pF("dispose"); var a = xF(); a && a.dispose(); x("yt.mdx.remote.cloudview.instance_", null, void 0); yF(!1); Jo(zF); zF.length = 0 }
    function AF() { pF("clearCurrentReceiver"); vp("yt-remote-cast-receiver") }
    function BF() { return up("yt-remote-cast-installed") ? xF() ? xF().getCastSession() : (uF("getCastSelector: Cast is not initialized."), null) : (uF("getCastSelector: Cast API is not installed!"), null) }
    function CF(a, b) { DF() ? xF().setConnectedScreenStatus(a, b) : uF("setConnectedScreenStatus called before ready.") }
    function qF() { var a = 0 <= Jc.search(/ (CrMo|Chrome|CriOS)\//); return Re || a }
    function rF(a, b) {
        var c = !1; xF() || (a = new hF(a, b), a.subscribe("yt-remote-cast2-availability-change", function (d) { rp("yt-remote-cast-available", d); Ko("yt-remote-cast2-availability-change", d) }), a.subscribe("yt-remote-cast2-receiver-selected", function (d) {
            pF("onReceiverSelected: " + d.friendlyName);
            rp("yt-remote-cast-receiver", d); Ko("yt-remote-cast2-receiver-selected", d)
        }), a.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
            pF("onReceiverResumed: " + d.friendlyName);
            rp("yt-remote-cast-receiver", d); Ko("yt-remote-cast2-receiver-resumed", d)
        }), a.subscribe("yt-remote-cast2-session-change", function (d) {
            pF("onSessionChange: " + JD(d));
            d || vp("yt-remote-cast-receiver"); Ko("yt-remote-cast2-session-change", d)
        }), x("yt.mdx.remote.cloudview.instance_", a, void 0), c = !0);
        pF("cloudview.createSingleton_: " + c); return c
    }
    function xF() { return y("yt.mdx.remote.cloudview.instance_") }
    function tF(a) { vF(!0); sF(!1); xF().init(!1, function (b) { b ? (yF(!0), T("yt-remote-cast2-api-ready")) : (uF("Failed to initialize cast API."), vF(!1), vp("yt-remote-cast-available"), vp("yt-remote-cast-receiver"), wF()); a(b) }) }
    function pF(a) { AD("cloudview", a) }
    function uF(a) { AD("cloudview", a) }
    function vF(a) { pF("setCastInstalled_ " + a); rp("yt-remote-cast-installed", a) }
    function DF() { return !!y("yt.mdx.remote.cloudview.apiReady_") }
    function yF(a) { pF("setApiReady_ " + a); x("yt.mdx.remote.cloudview.apiReady_", a, void 0) }
    function sF(a) { x("yt.mdx.remote.cloudview.initializing_", a, void 0) }
    var zF = []; function EF(a, b) { this.action = a; this.params = b || {} }
    ; function FF(a, b) { Ji.call(this); this.i = new qj(this.rh, 0, this); Ki(this, Ua(Ii, this.i)); this.j = 5E3; this.l = 0; if ("function" === typeof a) b && (a = z(a, b)); else if (a && "function" === typeof a.handleEvent) a = z(a.handleEvent, a); else throw Error("Invalid listener argument"); this.o = a }
    A(FF, Ji); k = FF.prototype; k.rh = function () { this.j = Math.min(3E5, 2 * this.j); this.o(); this.l && this.start() };
    k.start = function () { var a = this.j + 15E3 * Math.random(), b = this.i; b.isActive() || b.start(a); this.l = Date.now() + a };
    k.stop = function () { this.i.stop(); this.l = 0 };
    k.isActive = function () { return this.i.isActive() };
    k.reset = function () { this.i.stop(); this.j = 5E3 }; function GF(a, b, c, d, e) {
        c = void 0 === c ? !1 : c; d = void 0 === d ? function () { return "" } : d;
        e = void 0 === e ? !1 : e; this.N = a; this.G = b; this.l = new mm; this.j = new FF(this.Fh, this); this.i = null; this.H = !1; this.A = null; this.C = ""; this.K = this.o = 0; this.B = []; this.U = c; this.M = d; this.V = e
    }
    A(GF, em); k = GF.prototype; k.subscribe = function (a, b, c) { return this.l.subscribe(a, b, c) };
    k.Cd = function (a, b) { om(this.l, a, b, void 0) };
    k.wa = function (a) { return this.l.wa(a) };
    k.J = function (a, b) { this.l.ha.apply(this.l, arguments) };
    k.dispose = function () { this.H || (this.H = !0, Ii(this.l), HF(this), Ii(this.j), this.j = null, this.M = function () { return "" }) };
    k.isDisposed = function () { return this.H };
    function IF(a) { return { firstTestResults: [""], secondTestResults: !a.i.Dc, sessionId: a.i.j, arrayId: a.i.xb } }
    k.connect = function (a, b, c) {
        if (!this.i || 2 != this.i.getState()) {
            this.C = ""; this.j.stop(); this.A = a || null; this.o = b || 0; a = this.N + "/test"; b = this.N + "/bind"; var d = new Ll(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.U), e = this.i; e && (e.fa = null); d.fa = this; this.i = d; JF(this); if (this.i) { d = J("ID_TOKEN"); var f = this.i.Ba || {}; d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"]; this.i.Ba = f } e ? (3 != e.getState() && 0 == Xl(e) || e.getState(), this.i.connect(a, b, this.G, e.j, e.xb)) : c ? this.i.connect(a, b,
                this.G, c.sessionId, c.arrayId) : this.i.connect(a, b, this.G)
        }
    };
    function HF(a, b) { a.K = b || 0; a.j.stop(); JF(a); a.i && (3 == a.i.getState() && Yl(a.i), Ql(a.i)); a.K = 0 }
    k.sendMessage = function (a, b) { a = { _sc: a }; b && Nb(a, b); this.j.isActive() || 2 == (this.i ? this.i.getState() : 0) ? this.B.push(a) : KF(this) && (JF(this), Wl(this.i, a)) };
    k.Od = function () { this.j.reset(); this.A = null; this.o = 0; if (this.B.length) { var a = this.B; this.B = []; for (var b = 0, c = a.length; b < c; ++b)Wl(this.i, a[b]) } this.J("handlerOpened") };
    k.Md = function (a) { var b = 2 == a && 401 == this.i.Ca; 4 == a || b || this.j.start(); this.J("handlerError", a, b) };
    k.Mc = function (a) { if (!this.j.isActive()) this.J("handlerClosed"); else if (a) for (var b = 0, c = a.length; b < c; ++b) { var d = a[b].i; d && this.B.push(d) } };
    k.Zd = function () { var a = { v: 2 }; this.C && (a.gsessionid = this.C); 0 != this.o && (a.ui = "" + this.o); 0 != this.K && (a.ui = "" + this.K); this.A && Nb(a, this.A); return a };
    k.Nd = function (a) { "S" == a[0] ? this.C = a[1] : "gracefulReconnect" == a[0] ? (this.j.start(), Ql(this.i)) : this.J("handlerMessage", new EF(a[0], a[1])) };
    function KF(a) { return !!a.i && 3 == a.i.getState() }
    function JF(a) { if (a.i) { var b = a.M(), c = a.i.Ba || {}; b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"]; a.i.Ba = c } }
    k.zc = function (a) { (this.G.loungeIdToken = a) || this.j.stop(); if (this.V && this.i) { var b = this.i.Ba || {}; a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"]; this.i.Ba = b } };
    k.Fh = function () { this.j.isActive(); 0 == Xl(this.i) && this.connect(this.A, this.o) }; function LF(a) { this.index = -1; this.videoId = this.listId = ""; this.volume = this.playerState = -1; this.muted = !1; this.audioTrackId = null; this.l = this.o = 0; this.i = null; this.hasNext = this.G = !1; this.K = this.j = this.C = this.H = 0; this.A = NaN; this.B = !1; this.reset(a) }
    function MF(a) { a.audioTrackId = null; a.i = null; a.playerState = -1; a.G = !1; a.hasNext = !1; a.o = 0; a.l = Va(); a.H = 0; a.C = 0; a.j = 0; a.K = 0; a.A = NaN; a.B = !1 }
    LF.prototype.reset = function (a) {
        this.listId = ""; this.index = -1; this.videoId = ""; MF(this); this.volume = -1; this.muted = !1; a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.i = a.trackData, this.G = a.hasPrevious, this.hasNext = a.hasNext, this.o = a.playerTime, this.l = a.playerTimeAt, this.H = a.seekableStart, this.C = a.seekableEnd, this.j = a.duration, this.K = a.loadedTime, this.A = a.liveIngestionTime, this.B =
            !isNaN(this.A))
    };
    LF.prototype.isAdPlaying = function () { return 1081 == this.playerState };
    function NF(a, b) { a.o = b; a.l = Va() }
    function OF(a) { switch (a.playerState) { case 1: case 1081: return (Va() - a.l) / 1E3 + a.o; case -1E3: return 0 }return a.o }
    LF.prototype.getDuration = function () { return this.B ? this.j + (1 == this.playerState ? (Va() - this.l) / 1E3 : 0) : this.j };
    function PF(a, b, c) { var d = a.videoId; a.videoId = b; a.index = c; b != d && MF(a) }
    function QF(a) { var b = {}; b.index = a.index; b.listId = a.listId; b.videoId = a.videoId; b.playerState = a.playerState; b.volume = a.volume; b.muted = a.muted; b.audioTrackId = a.audioTrackId; b.trackData = Lb(a.i); b.hasPrevious = a.G; b.hasNext = a.hasNext; b.playerTime = a.o; b.playerTimeAt = a.l; b.seekableStart = a.H; b.seekableEnd = a.C; b.duration = a.j; b.loadedTime = a.K; b.liveIngestionTime = a.A; return b }
    LF.prototype.clone = function () { return new LF(QF(this)) }; function RF(a, b) {
        OD.call(this); this.L = 0; this.l = a; this.A = []; this.o = new Nm; this.j = this.i = null; this.M = z(this.Og, this); this.C = z(this.Ob, this); this.H = z(this.Ng, this); this.N = z(this.bh, this); var c = 0; a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.ed, this), SF(this))) : c = 3; 0 != c && (b ? this.ed(c) : P(z(function () { this.ed(c) }, this), 0));
        (a = BF()) && TF(this, a); this.subscribe("yt-remote-cast2-session-change", this.N)
    }
    q(RF, OD); k = RF.prototype; k.getState = function () { return this.L };
    function UF(a) { return new LF(a.l.getPlayerContextData()) }
    k.play = function () { VF(this) ? (this.i ? this.i.play(null, Ja, WF(this, "play")) : XF(this, "play"), YF(this, 1, OF(UF(this))), this.J("remotePlayerChange")) : ZF(this, this.play) };
    k.pause = function () { VF(this) ? (this.i ? this.i.pause(null, Ja, WF(this, "pause")) : XF(this, "pause"), YF(this, 2, OF(UF(this))), this.J("remotePlayerChange")) : ZF(this, this.pause) };
    k.seekTo = function (a) { if (VF(this)) { if (this.i) { var b = UF(this), c = new chrome.cast.media.SeekRequest; c.currentTime = a; c.resumeState = 1 == b.playerState || 3 == b.playerState ? chrome.cast.media.ResumeState.PLAYBACK_START : chrome.cast.media.ResumeState.PLAYBACK_PAUSE; this.i.seek(c, Ja, WF(this, "seekTo", { newTime: a })) } else XF(this, "seekTo", { newTime: a }); YF(this, 3, a); this.J("remotePlayerChange") } else ZF(this, Ua(this.seekTo, a)) };
    k.stop = function () { if (VF(this)) { this.i ? this.i.stop(null, Ja, WF(this, "stopVideo")) : XF(this, "stopVideo"); var a = UF(this); a.index = -1; a.videoId = ""; MF(a); $F(this, a); this.J("remotePlayerChange") } else ZF(this, this.stop) };
    k.setVolume = function (a, b) {
        if (VF(this)) {
            var c = UF(this); if (this.j) { if (c.volume != a) { var d = Math.round(a) / 100; this.j.setReceiverVolumeLevel(d, z(function () { DD("set receiver volume: " + d) }, this), z(function () { this.Y("failed to set receiver volume.") }, this)) } c.muted != b && this.j.setReceiverMuted(b, z(function () { DD("set receiver muted: " + b) }, this), z(function () { this.Y("failed to set receiver muted.") }, this)) } else {
                var e = {
                    volume: a,
                    muted: b
                }; -1 != c.volume && (e.delta = a - c.volume); XF(this, "setVolume", e)
            } c.muted = b; c.volume = a; $F(this, c)
        } else ZF(this, Ua(this.setVolume, a, b))
    };
    k.setAudioTrack = function (a, b) { VF(this) ? (b = b.getLanguageInfo().getId(), XF(this, "setAudioTrack", { videoId: a, audioTrackId: b }), a = UF(this), a.audioTrackId = b, $F(this, a)) : ZF(this, Ua(this.setAudioTrack, a, b)) };
    k.Fd = function (a) { VF(this) ? XF(this, "addVideo", { videoId: a }) : ZF(this, Ua(this.Fd, a)) };
    k.Ed = function (a) { VF(this) ? XF(this, "addVideos", { listId: a }) : ZF(this, Ua(this.Ed, a)) };
    k.Gd = function (a) { 0 == a.length ? this.Y("Ignore add videos request due to empty list") : VF(this) ? XF(this, "addVideos", { videoIds: a.join(",") }) : ZF(this, Ua(this.Gd, a)) };
    k.Pe = function (a) { VF(this) ? XF(this, "removeVideo", { videoId: a }) : ZF(this, Ua(this.Pe, a)) };
    k.playVideo = function (a, b, c, d, e, f, g) { d = void 0 === d ? null : d; e = void 0 === e ? null : e; f = void 0 === f ? null : f; g = void 0 === g ? null : g; var h = UF(this), l = { videoId: a }; void 0 !== c && (l.currentIndex = c); PF(h, a, c || 0); void 0 !== b && (NF(h, b), l.currentTime = b); d && (l.listId = d); e && (l.playerParams = e); f && (l.clickTrackingParams = f); g && (l.locationInfo = gk(g)); XF(this, "setPlaylist", l); d || $F(this, h) };
    k.nextVideo = function (a, b) { if (VF(this)) { if (a && b) { var c = UF(this); PF(c, a, b); $F(this, c) } XF(this, "next") } else ZF(this, Ua(this.nextVideo, a, b)) };
    k.dispose = function () { if (3 != this.L) { var a = this.L; this.L = 3; this.J("proxyStateChange", a, this.L) } OD.prototype.dispose.call(this) };
    k.O = function () { aG(this); this.l = null; this.o.clear(); TF(this, null); OD.prototype.O.call(this) };
    function SF(a) { B("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled".split(" "), function (b) { this.A.push(this.l.subscribe(b, Ua(this.ih, b), this)) }, a) }
    function aG(a) {
        B(a.A, function (b) { this.l.unsubscribeByKey(b) }, a);
        a.A.length = 0
    }
    function VF(a) { return 1 == a.getState() }
    function ZF(a, b) { var c = a.o; 50 > c.i.length + c.j.length && a.o.j.push(b) }
    function YF(a, b, c) { var d = UF(a); NF(d, c); -1E3 != d.playerState && (d.playerState = b); $F(a, d) }
    function XF(a, b, c) { a.l.sendMessage(b, c) }
    function $F(a, b) { aG(a); a.l.setPlayerContextData(QF(b)); SF(a) }
    k.ed = function (a) { if ((a != this.L || 2 == a) && 3 != this.L && 0 != a) { var b = this.L; this.L = a; this.J("proxyStateChange", b, a); if (1 == a) for (; !this.o.isEmpty();)b = a = this.o, 0 === b.i.length && (b.i = b.j, b.i.reverse(), b.j = []), a.i.pop().apply(this); else 3 == a && this.dispose() } };
    k.ih = function (a, b) { this.J(a, b) };
    function TF(a, b) { a.j && (a.j.removeUpdateListener(a.M), a.j.removeMediaListener(a.C), a.Ob(null)); a.j = b; a.j && (DD("Setting cast session: " + a.j.sessionId), a.j.addUpdateListener(a.M), a.j.addMediaListener(a.C), a.j.media.length && a.Ob(a.j.media[0])) }
    k.Og = function (a) { if (!a) this.Ob(null), TF(this, null); else if (this.j.receiver.volume) { a = this.j.receiver.volume; var b = UF(this), c = Math.round(100 * a.level || 0); if (b.volume != c || b.muted != a.muted) DD("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, $F(this, b) } };
    k.Ob = function (a) { DD("Cast media: " + !!a); this.i && this.i.removeUpdateListener(this.H); if (this.i = a) this.i.addUpdateListener(this.H), bG(this), this.J("remotePlayerChange") };
    function bG(a) { var b = a.i.media, c = a.i.customData; if (b && c) { var d = UF(a); b.contentId != d.videoId && DD("Cast changing video to: " + b.contentId); d.videoId = b.contentId; d.playerState = c.playerState; NF(d, a.i.getEstimatedTime()); $F(a, d) } else DD("No cast media video. Ignoring state update.") }
    k.Ng = function (a) { a ? (bG(this), this.J("remotePlayerChange")) : this.Ob(null) };
    k.bh = function () { var a = BF(); a && TF(this, a) };
    k.Y = function (a) { AD("CP", a) };
    function WF(a, b, c) { return z(function (d) { this.Y("Failed to " + b + " with cast v2 channel. Error code: " + d.code); d.code != chrome.cast.ErrorCode.TIMEOUT && (this.Y("Retrying " + b + " using MDx browser channel."), XF(this, b, c)) }, a) }
    ; function cG(a, b, c, d) {
        d = void 0 === d ? !1 : d; OD.call(this); this.A = NaN; this.X = !1; this.M = this.H = this.U = this.V = NaN; this.N = []; this.o = this.C = this.l = this.S = this.i = null; this.ea = a; this.ga = d; this.N.push(L(window, "beforeunload", z(this.Xf, this))); this.j = []; this.S = new LF; this.ia = b.id; this.W = b.idType; this.i = dG(this, c); this.i.subscribe("handlerOpened", this.Tg, this); this.i.subscribe("handlerClosed", this.Qg, this); this.i.subscribe("handlerError", this.Rg, this); this.i.subscribe("handlerMessage", this.Sg, this); this.i.zc(b.token);
        this.subscribe("remoteQueueChange", function () { var e = this.S.videoId; bE() && rp("yt-remote-session-video-id", e) }, this)
    }
    q(cG, OD); k = cG.prototype;
    k.connect = function (a, b) {
        if (b) {
            var c = b.listId, d = b.videoId, e = b.videoIds, f = b.playerParams, g = b.clickTrackingParams, h = b.index, l = { videoId: d }, m = b.currentTime, n = b.locationInfo; b = b.loopMode; void 0 !== m && (l.currentTime = 5 >= m ? 0 : m); f && (l.playerParams = f); n && (l.locationInfo = n); g && (l.clickTrackingParams = g); c && (l.listId = c); e && 0 < e.length && (l.videoIds = e.join(",")); void 0 !== h && (l.currentIndex = h); this.ga && (l.loopMode = b || "LOOP_MODE_OFF"); c && (this.S.listId = c); this.S.videoId = d; this.S.index = h || 0; this.S.state = 3; NF(this.S, m);
            this.o = "UNSUPPORTED"; c = this.ga ? "setInitialState" : "setPlaylist"; eG("Connecting with " + c + " and params: " + gk(l)); this.i.connect({ method: c, params: gk(l) }, a, fE())
        } else eG("Connecting without params"), this.i.connect({}, a, fE()); fG(this)
    };
    k.zc = function (a) { this.i.zc(a) };
    k.dispose = function () { this.isDisposed() || (x("yt.mdx.remote.remoteClient_", null, void 0), this.J("beforeDispose"), gG(this, 3)); OD.prototype.dispose.call(this) };
    k.O = function () { hG(this); iG(this); jG(this); Q(this.H); this.H = NaN; Q(this.M); this.M = NaN; this.l = null; M(this.N); this.N.length = 0; this.i.dispose(); OD.prototype.O.call(this); this.o = this.C = this.j = this.S = this.i = null };
    function kG(a) { return jb(a.j, function (b) { return "LOUNGE_SCREEN" == b.type }) }
    function eG(a) { AD("conn", a) }
    k.Xf = function () { this.sb(2) };
    function dG(a, b) { return new GF(pD(a.ea, "/bc"), b, !1, function () { return a.Bd() }, "shortLived" == a.W) }
    function gG(a, b) { a.J("proxyStateChange", b) }
    function fG(a) { a.A = P(z(function () { eG("Connecting timeout"); this.sb(1) }, a), 2E4) }
    function hG(a) { Q(a.A); a.A = NaN }
    function jG(a) { Q(a.V); a.V = NaN }
    function lG(a) { iG(a); a.U = P(z(function () { mG(this, "getNowPlaying") }, a), 2E4) }
    function iG(a) { Q(a.U); a.U = NaN }
    k.Tg = function () {
        eG("Channel opened"); this.X && (this.X = !1, jG(this), this.V = P(z(function () { eG("Timing out waiting for a screen."); this.sb(1) }, this), 15E3));
        jE(IF(this.i), this.ia)
    };
    k.Qg = function () { eG("Channel closed"); isNaN(this.A) ? kE(!0) : kE(); this.dispose() };
    k.Rg = function (a, b) { kE(); isNaN(this.Mb()) ? (b && "shortLived" == this.W && this.J("browserChannelAuthError", a), eG("Channel error: " + a + " without reconnection"), this.dispose()) : (this.X = !0, eG("Channel error: " + a + " with reconnection in " + this.Mb() + " ms"), gG(this, 2)) };
    function nG(a, b) { var c = null; if (b) { var d = kG(a); d && (c = { clientName: d.clientName, deviceMake: d.brand, deviceModel: d.model, osVersion: d.osVersion }) } x("yt.mdx.remote.remoteClient_", c, void 0); b && (hG(a), jG(a)); c = KF(a.i) && isNaN(a.A); b == c ? b && (gG(a, 1), mG(a, "getSubtitlesTrack")) : b ? (a.ae() && a.S.reset(), gG(a, 1), mG(a, "getNowPlaying"), oG(a)) : a.sb(1) }
    function pG(a, b) { var c = b.params.videoId; delete b.params.videoId; c == a.S.videoId && (Hb(b.params) ? a.S.i = null : a.S.i = b.params, a.J("remotePlayerChange")) }
    function qG(a, b) { var c = b.params.videoId || b.params.video_id, d = parseInt(b.params.currentIndex, 10); a.S.listId = b.params.listId || a.S.listId; PF(a.S, c, d); a.J("remoteQueueChange") }
    function rG(a, b) { b.params = b.params || {}; qG(a, b); sG(a, b); a.J("autoplayDismissed") }
    function sG(a, b) {
        var c = parseInt(b.params.currentTime || b.params.current_time, 10); NF(a.S, isNaN(c) ? 0 : c); c = parseInt(b.params.state, 10); c = isNaN(c) ? -1 : c; -1 == c && -1E3 == a.S.playerState && (c = -1E3); a.S.playerState = c; c = Number(b.params.loadedTime); a.S.K = isNaN(c) ? 0 : c; c = Number(b.params.duration); a.S.j = isNaN(c) ? 0 : c; c = a.S; var d = Number(b.params.liveIngestionTime); c.A = d; c.B = isNaN(d) ? !1 : !0; c = a.S; d = Number(b.params.seekableStartTime); b = Number(b.params.seekableEndTime); c.H = isNaN(d) ? 0 : d; c.C = isNaN(b) ? 0 : b; 1 == a.S.playerState ?
            lG(a) : iG(a); a.J("remotePlayerChange")
    }
    function tG(a, b) { if (-1E3 != a.S.playerState) { var c = 1085; switch (parseInt(b.params.adState, 10)) { case 1: c = 1081; break; case 2: c = 1084; break; case 0: c = 1083 }a.S.playerState = c; b = parseInt(b.params.currentTime, 10); NF(a.S, isNaN(b) ? 0 : b); a.J("remotePlayerChange") } }
    function uG(a, b) { var c = "true" == b.params.muted; a.S.volume = parseInt(b.params.volume, 10); a.S.muted = c; a.J("remotePlayerChange") }
    function vG(a, b) { a.C = b.params.videoId; a.J("nowAutoplaying", parseInt(b.params.timeout, 10)) }
    function wG(a, b) { var c = "true" == b.params.hasNext; a.S.G = "true" == b.params.hasPrevious; a.S.hasNext = c; a.J("previousNextChange") }
    k.je = function (a) { if (!this.j || 0 === this.j.length) return !1; for (var b = p(this.j), c = b.next(); !c.done; c = b.next())if (!c.value.capabilities.has(a)) return !1; return !0 };
    k.Sg = function (a) {
        a.params ? eG("Received: action=" + a.action + ", params=" + gk(a.params)) : eG("Received: action=" + a.action + " {}"); switch (a.action) {
            case "loungeStatus": a = mk(a.params.devices); this.j = fb(a, function (c) { return new VD(c) });
                a = !!jb(this.j, function (c) { return "LOUNGE_SCREEN" == c.type });
                nG(this, a); a = this.je("mlm"); this.J("multiStateLoopEnabled", a); break; case "loungeScreenDisconnected": qb(this.j, function (c) { return "LOUNGE_SCREEN" == c.type });
                nG(this, !1); break; case "remoteConnected": var b = new VD(mk(a.params.device)); jb(this.j, function (c) { return c.equals(b) }) || nb(this.j, b);
                break; case "remoteDisconnected": b = new VD(mk(a.params.device)); qb(this.j, function (c) { return c.equals(b) });
                break; case "gracefulDisconnect": break; case "playlistModified": qG(this, a); break; case "nowPlaying": rG(this, a); break; case "onStateChange": sG(this, a); break; case "onAdStateChange": tG(this, a); break; case "onVolumeChanged": uG(this, a); break; case "onSubtitlesTrackChanged": pG(this, a); break; case "nowAutoplaying": vG(this, a); break; case "autoplayDismissed": this.J("autoplayDismissed"); break; case "autoplayUpNext": this.C = a.params.videoId || null; this.J("autoplayUpNext", this.C); break; case "onAutoplayModeChanged": this.o =
                    a.params.autoplayMode; this.J("autoplayModeChange", this.o); "DISABLED" == this.o && this.J("autoplayDismissed"); break; case "onHasPreviousNextChanged": wG(this, a); break; case "requestAssistedSignIn": this.J("assistedSignInRequested", a.params.authCode); break; case "onLoopModeChanged": this.J("loopModeChange", a.params.loopMode); break; default: eG("Unrecognized action: " + a.action)
        }
    };
    k.Eh = function () { if (this.l) { var a = this.l; this.l = null; this.S.videoId != a && mG(this, "getNowPlaying") } };
    k.Uf = function () { var a = 3; this.isDisposed() || (a = 0, isNaN(this.Mb()) ? KF(this.i) && isNaN(this.A) && (a = 1) : a = 2); return a };
    k.sb = function (a) { eG("Disconnecting with " + a); x("yt.mdx.remote.remoteClient_", null, void 0); hG(this); this.J("beforeDisconnect", a); 1 == a && kE(); HF(this.i, a); this.dispose() };
    k.Tf = function () { var a = this.S; this.l && (a = this.S.clone(), PF(a, this.l, a.index)); return QF(a) };
    k.Lh = function (a) { var b = new LF(a); b.videoId && b.videoId != this.S.videoId && (this.l = b.videoId, Q(this.H), this.H = P(z(this.Eh, this), 5E3)); var c = []; this.S.listId == b.listId && this.S.videoId == b.videoId && this.S.index == b.index || c.push("remoteQueueChange"); this.S.playerState == b.playerState && this.S.volume == b.volume && this.S.muted == b.muted && OF(this.S) == OF(b) && gk(this.S.i) == gk(b.i) || c.push("remotePlayerChange"); this.S.reset(a); B(c, function (d) { this.J(d) }, this) };
    k.ae = function () {
        var a = this.i.G.id, b = jb(this.j, function (c) { return "REMOTE_CONTROL" == c.type && c.id != a });
        return b ? b.id : ""
    };
    k.Mb = function () { var a = this.i; return a.j.isActive() ? a.j.l - Date.now() : NaN };
    k.Rf = function () { return this.o || "UNSUPPORTED" };
    k.Sf = function () { return this.C || "" };
    k.Af = function () { if (!isNaN(this.Mb())) { var a = this.i.j, b = a.i; b.stop(); b.jd(); a.start() } };
    function oG(a) { Q(a.M); a.M = P(z(a.sb, a, 1), 864E5) }
    function mG(a, b, c) { c ? eG("Sending: action=" + b + ", params=" + gk(c)) : eG("Sending: action=" + b); a.i.sendMessage(b, c) }
    k.Ih = function (a, b) { mG(this, a, b); oG(this) };
    k.Bd = function () { var a = so("SID", "") || "", b = so("SAPISID", "") || "", c = so("__Secure-3PAPISID", "") || ""; if (!a && !b && !c) return ""; a = Ve(ie(a), 2); b = Ve(ie(b), 2); c = Ve(ie(c), 2); return Ve(ie(a + "," + b + "," + c), 2) };
    cG.prototype.subscribe = cG.prototype.subscribe; cG.prototype.unsubscribeByKey = cG.prototype.wa; cG.prototype.getProxyState = cG.prototype.Uf; cG.prototype.disconnect = cG.prototype.sb; cG.prototype.getPlayerContextData = cG.prototype.Tf; cG.prototype.setPlayerContextData = cG.prototype.Lh; cG.prototype.getOtherConnectedRemoteId = cG.prototype.ae; cG.prototype.getReconnectTimeout = cG.prototype.Mb; cG.prototype.getAutoplayMode = cG.prototype.Rf; cG.prototype.getAutoplayVideoId = cG.prototype.Sf; cG.prototype.reconnect = cG.prototype.Af;
    cG.prototype.sendMessage = cG.prototype.Ih; cG.prototype.getXsrfToken = cG.prototype.Bd; cG.prototype.isCapabilitySupportedOnConnectedDevices = cG.prototype.je; function xG(a) { PD.call(this, "ScreenServiceProxy"); this.da = a; this.i = []; this.i.push(this.da.$_s("screenChange", z(this.Bf, this))); this.i.push(this.da.$_s("onlineScreenChange", z(this.gh, this))) }
    q(xG, PD); k = xG.prototype; k.ta = function (a) { return this.da.$_gs(a) };
    k.Ub = function (a) { return !!this.da.$_c(a) };
    k.get = function (a) { return this.da.$_g(a) };
    k.start = function () { this.da.$_st() };
    k.add = function (a, b, c) { this.da.$_a(a, b, c) };
    k.remove = function (a, b, c) { this.da.$_r(a, b, c) };
    k.Cc = function (a, b, c, d) { this.da.$_un(a, b, c, d) };
    k.O = function () { for (var a = 0, b = this.i.length; a < b; ++a)this.da.$_ubk(this.i[a]); this.i.length = 0; this.da = null; PD.prototype.O.call(this) };
    k.Bf = function () { this.J("screenChange") };
    k.gh = function () { this.J("onlineScreenChange") };
    yE.prototype.$_st = yE.prototype.start; yE.prototype.$_gspc = yE.prototype.vf; yE.prototype.$_gsppc = yE.prototype.yd; yE.prototype.$_c = yE.prototype.Ub; yE.prototype.$_g = yE.prototype.get; yE.prototype.$_a = yE.prototype.add; yE.prototype.$_un = yE.prototype.Cc; yE.prototype.$_r = yE.prototype.remove; yE.prototype.$_gs = yE.prototype.ta; yE.prototype.$_gos = yE.prototype.xd; yE.prototype.$_s = yE.prototype.subscribe; yE.prototype.$_ubk = yE.prototype.wa; function yG() {
        mE(); if (!YD || !YD.get("yt-remote-disable-remote-module-for-dev")) {
            var a = J("MDX_CONFIG") || a; wp(); ZD(); zG || (zG = new oD(a ? a.loungeApiHost : void 0), lE() && (zG.i = "/api/loungedev")); AG || (AG = y("yt.mdx.remote.deferredProxies_") || [], x("yt.mdx.remote.deferredProxies_", AG, void 0)); BG(); var b = CG(); if (!b) {
                var c = new yE(zG, a ? a.disableAutomaticScreenCache || !1 : !1); x("yt.mdx.remote.screenService_", c, void 0); b = CG(); var d = {}; a && (d = {
                    appId: a.appId, disableDial: a.disableDial, theme: a.theme, loadCastApiSetupScript: a.loadCastApiSetupScript,
                    disableCastApi: a.disableCastApi, enableDialLoungeToken: a.enableDialLoungeToken, enableCastLoungeToken: a.enableCastLoungeToken, forceMirroring: a.forceMirroring
                }); x("yt.mdx.remote.enableConnectWithInitialState_", a ? a.enableConnectWithInitialState || !1 : !1, void 0); oF(c, function (f) { f ? DG() && CF(DG(), "YouTube TV") : c.subscribe("onlineScreenChange", function () { Ko("yt-remote-receiver-availability-change") }) }, d)
            } if (a && !y("yt.mdx.remote.initialized_")) {
                x("yt.mdx.remote.initialized_", !0, void 0);
                EG("Initializing: " + gk(a)); FG.push(R("yt-remote-cast2-api-ready", function () { Ko("yt-remote-api-ready") }));
                FG.push(R("yt-remote-cast2-availability-change", function () { Ko("yt-remote-receiver-availability-change") }));
                FG.push(R("yt-remote-cast2-receiver-selected", function () { GG(); Ko("yt-remote-auto-connect", "cast-selector-receiver") }));
                FG.push(R("yt-remote-cast2-receiver-resumed", function () { Ko("yt-remote-receiver-resumed", "cast-selector-receiver") }));
                FG.push(R("yt-remote-cast2-session-change", HG)); FG.push(R("yt-remote-connection-change", function (f) { f ? CF(DG(), "YouTube TV") : IG() || (CF(null, null), AF()) }));
                FG.push(R("yt-remote-cast2-session-failed", function () { Ko("yt-remote-connection-failed") }));
                d = JG(); a.isAuto && (d.id += "#dial"); var e = a.capabilities || []; N("desktop_enable_autoplay") && e.push("atp"); 0 < e.length && (d.capabilities = e); d.name = a.device; d.app = a.app; (a = a.theme) && (d.theme = a); EG(" -- with channel params: " + gk(d)); d ? (rp("yt-remote-session-app", d.app), rp("yt-remote-session-name", d.name)) : (vp("yt-remote-session-app"), vp("yt-remote-session-name")); x("yt.mdx.remote.channelParams_", d, void 0); b.start(); DG() || KG()
            }
        }
    }
    function LG() {
        Jo(FG); FG.length = 0; Ii(MG); MG = null; AG && (B(AG, function (a) { a(null) }), AG.length = 0, AG = null, x("yt.mdx.remote.deferredProxies_", null, void 0));
        zG = null
    }
    function NG() { var a = DG(); if (!a) return null; var b = CG().ta(); return ND(b, a) }
    function HG(a) { EG("remote.onCastSessionChange_: " + JD(a)); if (a) { var b = NG(); b && b.id == a.id ? (CF(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token) && (b = OG()) && b.zc(a)) : (b && PG(), QG(a, 1)) } else OG() && PG() }
    function PG() { DF() ? xF().stopSession() : uF("stopSession called before API ready."); var a = OG(); a && (a.disconnect(1), RG(null)) }
    function SG() { var a = OG(); return a && 3 != a.getProxyState() ? new RF(OG(), void 0) : null }
    function EG(a) { AD("remote", a) }
    function CG() { if (!MG) { var a = y("yt.mdx.remote.screenService_"); MG = a ? new xG(a) : null } return MG }
    function DG() { return y("yt.mdx.remote.currentScreenId_") }
    function TG(a) { x("yt.mdx.remote.currentScreenId_", a, void 0) }
    function GG() { x("yt.mdx.remote.connectData_", null, void 0) }
    function OG() { return y("yt.mdx.remote.connection_") }
    function RG(a) {
        var b = OG(); GG(); a || TG(""); x("yt.mdx.remote.connection_", a, void 0); AG && (B(AG, function (c) { c(a) }), AG.length = 0);
        b && !a ? Ko("yt-remote-connection-change", !1) : !b && a && Ko("yt-remote-connection-change", !0)
    }
    function IG() { var a = bE(); if (!a) return null; var b = CG(); if (!b) return null; b = b.ta(); return ND(b, a) }
    function QG(a, b) {
        NG() && NG(); TG(a.id); a = new cG(zG, a, JG(), y("yt.mdx.remote.enableConnectWithInitialState_") || !1); a.connect(b, y("yt.mdx.remote.connectData_")); a.subscribe("beforeDisconnect", function (c) { Ko("yt-remote-before-disconnect", c) });
        a.subscribe("beforeDispose", function () { OG() && RG(null) });
        a.subscribe("browserChannelAuthError", function () { var c = NG(); c && "shortLived" == c.idType && (DF() ? xF().handleBrowserChannelAuthError() : uF("refreshLoungeToken called before API ready.")) });
        RG(a)
    }
    function KG() { var a = IG(); a ? (EG("Resume connection to: " + JD(a)), QG(a, 0)) : (kE(), AF(), EG("Skipping connecting because no session screen found.")) }
    var zG = null, AG = null, MG = null; function BG() { var a = JG(); if (Hb(a)) { a = aE(); var b = up("yt-remote-session-name") || "", c = up("yt-remote-session-app") || ""; a = { device: "REMOTE_CONTROL", id: a, name: b, app: c, mdxVersion: 3 }; x("yt.mdx.remote.channelParams_", a, void 0) } }
    function JG() { return y("yt.mdx.remote.channelParams_") || {} }
    var FG = []; var UG; function VG(a, b) { this.type = a; this.videoIds = b || [] }
    function WG(a, b, c) { var d = []; 0 == d.length ? c && c() : "string" === typeof a ? XG(a, b, c) : XG(d, b, c) }
    function XG(a, b, c) { var d = ""; "string" === typeof a && (d = a, a = [d]); var e = new VG(0, a); UG && YG(function () { d ? UG.Fd(d) : UG.Gd(a) }, e, b, c) }
    function ZG(a, b, c) { "string" === typeof a && (a = [a]); var d = new VG(1, a); UG && YG(function () { B(a, function (e) { UG.Pe(e) }) }, d, b, c) }
    function $G(a, b, c) { var d = new VG(2); UG ? YG(function () { UG.Ed(a) }, d, b, c) : c && P(function () { c("Not implemented") }, 0) }
    function aH(a, b) { var c = new VG(2); UG ? YG(function () { }, c, a, b) : b && P(function () { b("Not implemented") }, 0) }
    function bH(a) { UG = a; UG.subscribe("remoteQueueChange", function () { T("queue-change", new VG(2)) }) }
    function cH() { var a = SG(); Ii(UG); UG = null; a ? bH(a) : T("queue-change", new VG(2)) }
    function YG(a, b, c, d) { UG && 1 == UG.getState() ? (a.call(u), c && P(function () { c() }, 0), void 0 !== b && T("queue-change", b)) : d && P(function () { d() }, 0) }
    var dH = []; function eH(a, b) {
        var c = J("RESUME_COOKIE_NAME", void 0); if (c) {
            var d = so(c, "").split(","); d = d.filter(function (e) { return 0 != e.indexOf(a) && !!e.length });
            4 <= d.length && d.shift(); d.push(a + ":" + b); ro(c, d.join(","), 1814400, "/")
        }
    }
    function fH(a) {
        var b = J("RESUME_COOKIE_NAME", void 0); if (b) {
            var c = so(b, "").split(",").filter(function (d) { return 0 != d.indexOf(a) });
            0 == c.length ? to(b) : ro(b, c.join(","), 1814400, "/")
        }
    }
    ; function gH() { yG(); dH.push(R("yt-remote-connection-change", cH)); var a = SG(); a && bH(a); Fp("addto-watch-queue-button", "click", hH); Fp("addto-tv-queue-button", "click", hH); Fp("addto-watch-queue-button-success", "click", iH); Fp("addto-watch-queue-menu-choice", "click", jH); kH.push(R("watch-queue-update", lH)); lH() }
    function mH(a) { return "tv-queue" == K(a, "style") ? "addto-tv-queue-button" : "addto-watch-queue-button" }
    function hH(a) { var b = mH(a); Gj(a, b, "addto-watch-queue-button-loading"); var c = K(a, "video-ids"), d = K(a, "list-id"), e = Fw(Dw.getInstance(), a); d ? $G(d, function () { nH(a) }, function (f) { oH(a, b, e, f) }) : WG(c, function () { nH(a) }, function (f) { oH(a, b, e, f) }) }
    function jH(a) { var b = K(a, "action"); b = pH[b]; var c = K(a, "video-ids"); c && ("string" === typeof c && (c = [c]), 0 == c.length && b(a)) }
    function iH(a) { Gj(a, "addto-watch-queue-button-success", "addto-watch-queue-button-loading"); var b = K(a, "video-ids"), c = K(a, "list-id"), d = Fw(Dw.getInstance(), a); c ? aH(function () { qH(a) }, function (e) { oH(a, "addto-watch-queue-button-success", d, e) }) : ZG(b, function () { qH(a) }, function (e) { oH(a, "addto-watch-queue-button-success", d, e) }) }
    function nH(a) { Gj(a, "addto-watch-queue-button-loading", "addto-watch-queue-button-success"); var b = Gn("ADDTO_WATCH_QUEUE_ADDED"); Iw(Dw.getInstance(), a, b); K(a, "list-id") ? T("watch-queue-addto-playlist-added") : T("watch-queue-addto-video-added") }
    function qH(a) { var b = mH(a); Gj(a, "addto-watch-queue-button-loading", b); b = "addto-watch-queue-button" == b ? Gn("ADDTO_WATCH_QUEUE") : Gn("ADDTO_TV_QUEUE"); Iw(Dw.getInstance(), a, b); K(a, "list-id") ? T("watch-queue-addto-playlist-removed") : T("watch-queue-addto-video-removed") }
    function oH(a, b, c, d) { Gj(a, "addto-watch-queue-button-loading", "addto-watch-queue-button-error"); d = d || Gn("ADDTO_WATCH_QUEUE_ERROR"); Iw(Dw.getInstance(), a, d); P(function () { Gj(a, "addto-watch-queue-button-error", b); Iw(Dw.getInstance(), a, c) }, 5E3) }
    function lH() {
        var a = mD(); if (!wb(rH, a)) {
            rH = a; var b = {}; B(rH, function (c) { b[c] = !0 });
            B(mf("addto-queue-button"), function (c) { var d = K(c, "video-ids"); if (d && "string" === typeof d) { var e = mH(c); b[d] ? (Gj(c, e, "addto-watch-queue-button-success"), d = Gn("ADDTO_WATCH_QUEUE_ADDED")) : (Gj(c, "addto-watch-queue-button-success", e), d = "addto-watch-queue-button" == e ? Gn("ADDTO_WATCH_QUEUE") : Gn("ADDTO_TV_QUEUE")); Iw(Dw.getInstance(), c, d) } })
        }
    }
    var pH = {
        "play-next": function (a) { var b = K(a, "list-id"); a = K(a, "video-ids"); b ? T("watch-queue-addto-playlist-play-next", b, a) : T("watch-queue-addto-video-play-next", a) },
        "play-now": function (a) { var b = K(a, "list-id"); a = K(a, "video-ids"); b ? T("watch-queue-addto-playlist-play-now", b, a) : T("watch-queue-addto-video-play-now", a) }
    }, kH = [], rH = []; var sH = []; var tH = [], uH = !1; function vH(a) {
        var b = J("YPC_LOADER_CSS", void 0), c = J("YPC_LOADER_JS", void 0); uH && (c = "www/ypc_core"); tH.length || (tH.push(new Wg(function (d) { Vo(b, d) })), tH.push(new Wg(function (d) { Po(c, d) })));
        eh(tH).then(function () { a && a() })
    }
    ; function wH(a, b, c, d, e, f, g, h, l, m, n, t, w) { a = { config: { couponCode: e, fromPurchaseIds: f, flowType: d }, itemData: { itemId: c, itemType: b }, offerData: { offerId: a } }; if (g || h) b = {}, g && (b.jwt = g), h && (b.encryptedPurchaseParams = h), a.walletPrefetchdata = b; l && (a.innertubeRequestParams = l); m && (a.transactionAction = m); n && (a.transactionParams = n); t && (a.transactionLoggingParams = t); w && (a.gtmData = w); return a }
    function xH(a, b) { if (!a) return null; var c = K(a, "ypc-item-type"), d = K(a, "ypc-item-id"), e = K(a, "ypc-offer-id"), f = K(a, "coupon-code"), g = K(a, "ypc-from-purchase-ids"), h = K(a, "ypc-gtm-data"), l = K(a, "ypc-offer-jwt"), m = K(a, "ypc-offer-encrypted-purchase-params"), n = K(a, "ypc-irp"), t = K(a, "ypc-transaction-action"), w = K(a, "ypc-transaction-params"); a = K(a, "ypc-serialized-transaction-flow-logging-params"); return wH(e, c, d, b, f, g, l, m, n, t, w, a, h) }
    function yH(a) { var b = a.itemData.itemId, c = a.config.flowType, d = a.offerData ? a.offerData.offerId : null, e = a.innertubeRequestParams, f = a.transactionAction, g = {}; g.ypc_it = a.itemData.itemType; g.ypc_ii = b; g.ypc_ft = c; e && (g.ypc_irp = e); d && (g.ypc_oi = d); f && (g.ypc_ta = f); return g }
    ; function zH(a, b, c, d, e) {
        if (yC()) vH(function () { y("yt.ypc.checkout.showYpcOverlay")(a, b, c, d, e) });
        else { var f = { ypc_it: a, ypc_ii: b, ypc_ft: c }; d && (f.ypc_irp = d); e && (f.ypc_cc = e); f = AH(f); mt(f) }
    }
    function BH(a) {
        if (yC()) vH(function () { y("yt.ypc.checkout.showPrepurchaseOverlay")(a) });
        else { var b = AH({}); mt(b) }
    }
    function CH(a, b) {
        if (yC()) vH(function () { y("yt.ypc.checkout.showYpcOverlayForInnertubeRequestParams")(a, b) });
        else { var c = AH({ ypc_ft: a, ypc_irp: b }); mt(c) }
    }
    function DH(a, b, c) { yC() ? vH(function () { y("yt.ypc.checkout.offerpurchaser.purchaseOffer")(a, c) }) : (b = AH(b), mt(b)) }
    function EH(a, b) {
        if (yC()) vH(function () { y("yt.ypc.subscription.openUnsubscribeOverlay")(a, b) });
        else throw Error("Unsubscribe triggered when user not signed in.");
    }
    function AH(a) { a = Qn(window.location.href, a); var b = J("YPC_SIGNIN_URL", void 0), c = Pn(b)["continue"]; c = Qn(c, { next: a }); return Qn(b, { "continue": c }) }
    ; var FH = [], GH = []; function HH(a) { if (a = a.currentTarget) IH(a), (a = K(a, "ytr-prepurchase-html")) && BH(pd(a)) }
    function JH(a) { var b = a.currentTarget; if (b) if (a = K(b, "ypc-transaction-action"), b = xH(b, "D")) { if (b.gtmData) { var c = JSON.parse(b.gtmData); c && (window.dataLayer = window.dataLayer || [], window.dataLayer.push(c)) } DH(b, yH(b), "start_payment" == a); setTimeout(Cv, 0) } else tn(Error("ypc-offer-button does not contain purchaseFlowData.")) }
    function KH(a) { (a = a.currentTarget) && LH(a) }
    function MH(a) { vH(a.callback) }
    function NH(a) { var b = F("ypc-checkout-button", a.container); (a = F("ytr-purchase-button", a.container)) ? (b = I(a, "ypc-offer-button"), (a.href || b) && a.click()) : b && LH(b) }
    function OH(a) { a = a.i; zH(a.itemType, a.itemId, a.flowType) }
    function LH(a) { var b = K(a, "ypc-item-type"), c = K(a, "ypc-item-id"), d = K(a, "ypc-flow-type"); a = K(a, "ypc-irp") || void 0; zH(b, c, d, a) }
    function PH(a) { var b = a.currentTarget; a = K(b, "ypc-item-type"); b = K(b, "ypc-item-id"); a && b && EH(a, b) }
    function QH(a) { a = a.i; EH(a.itemType, a.itemId) }
    function IH(a) { var b; I(a, "yt-unlimited-more-offer-button") ? b = "YTO_GTM_2_BUTTON_CLICK_DATA" : I(a, "ypc-offer-button") && (b = "YTO_GTM_1_BUTTON_CLICK_DATA"); b && (a = J(b, "")) && (window.dataLayer = window.dataLayer || [], window.dataLayer.push(a)) }
    function RH(a) { a = a.currentTarget; var b = K(a, "tab-id"); if (b) { for (var c = mf("offer-module-tab-content"), d = 0; d < c.length; d++)c[d].classList.remove("active-tab"); c = mf("offer-module-tab"); for (d = 0; d < c.length; d++)c[d].classList.remove("active-tab"); E(b).classList.add("active-tab"); a.classList.add("active-tab") } }
    function SH(a) { if (a = a.currentTarget) { IH(a); var b = xH(a, "U"); b ? (vH(function () { y("yt.ypc.checkout.offerpurchaser.completeTransaction")(b) }), setTimeout(Cv, 0)) : tn(Error("ypc-complete-transaction-button does not contain purchaseFlowData")) } }
    function TH(a) {
        a = a.currentTarget; var b = K(a, "feedback-token"); b && (a = { itct: K(a, "innertube-clicktracking"), feedback_tokens: [b], wait_for_response: 1 }, ho("/feed_change_ajax?action_give_feedback=1", {
            method: "POST", onSuccess: function (c, d) { d && d.actions && kd(d.actions.url_endpoint.url, window, Wb("_self")) },
            postParams: a
        }))
    }
    ; var UH = pe && 8 <= document.documentMode || se && Ie("1.9.2") || te && Ie("532.1"), VH = pe && !UH; function WH(a) { var b = XH; this.l = this.A = this.i = null; this.j = b; this.G = VH ? a : null; this.K = window; this.o = this.K.location; this.M = this.o.href.split("#")[0]; this.B = z(this.H, this) }
    WH.prototype.C = function (a, b) { this.A && (M(this.A), delete this.A); this.l && (ao(this.l), delete this.l); a && (this.i = YH(this), VH && ((a = this.G.contentWindow.document.body) && a.innerHTML || ZH(this, this.i)), b || this.j(this.i), UH ? this.A = L(this.K, "hashchange", this.B) : this.l = $n(this.B, 200)) };
    WH.prototype.H = function () { if (VH) { var a = (a = this.G.contentWindow.document.body) ? nd(Sf(a).substring(1)) : ""; a != this.i ? (this.i = a, $H(this, a), this.j(a)) : (a = YH(this), a != this.i && (this.i = a, ZH(this, a), this.j(a))) } else a = YH(this), a != this.i && (this.i = a, this.j(a)) };
    function YH(a) { a = a.o.href; var b = a.indexOf("#"); return 0 > b ? "" : a.substring(b + 1) }
    function $H(a, b) { b = a.M + "#" + b; var c = a.o.href; c != b && c + "#" != b && (b = hg(b), a.o.href = Rd(b)) }
    function ZH(a, b) { a = a.G.contentWindow.document; var c = a.body ? a.body.innerHTML : ""; b = "#" + md(b); if (c != b) { c = window.document.title || ""; Vc("title"); c = ad("title", {}, c); Vc("body"); var d = ad("body", void 0, void 0); c = $c(c, d); a.open("text/html"); a.write(Sc(c)); Lf(a.body, b); a.close() } }
    WH.prototype.add = function (a, b, c) { this.i = "" + a; VH && ZH(this, a); $H(this, a); c || this.j(this.i) }; function aI() { var a = XH; this.A = this.G = this.i = null; this.l = a; this.o = window; this.j = this.o.location; this.K = z(this.C, this) }
    aI.prototype.B = function (a, b) { this.A && (M(this.A), delete this.A); this.G && (ao(this.G), delete this.G); a && bI && (this.i = this.j.href, b || this.l(this.i), this.A = L(this.o, "popstate", this.K)) };
    aI.prototype.C = function (a) { var b = this.j.href; if ((a = a.state) || b != this.i) this.i = b, this.l(b, a) };
    aI.prototype.add = function (a, b, c) { if (a || b) a = a || this.j.href, this.o.history.pushState(b, "", a), this.i = a, c || this.l(a, b) };
    aI.prototype.replace = function (a, b, c) { if (a || b) a = a || this.j.href, this.o.history.replaceState(b, "", a), this.i = a, c || this.l(a, b) };
    var bI = !!window.history.pushState && (!te || te && Ie("534.11")); function cI() { var a = dI("state"); a.setEnabled.call(a, !0, !0) }
    function eI(a) { var b = null, c = dI(); b = b || window.history && window.history.state; c.replace.call(c, a, b, !0) }
    function dI(a) { var b = y("ytglobal.HistoryHistoryInstance"); b || ("state" == (void 0 === a ? "hash" : a) ? (b = new aI, aI.prototype.setEnabled = aI.prototype.B, aI.prototype.add = aI.prototype.add, aI.prototype.replace = aI.prototype.replace) : (a = E("legacy-history-iframe"), b = new WH(a), WH.prototype.setEnabled = WH.prototype.C, WH.prototype.add = WH.prototype.add, WH.prototype.replace = WH.prototype.add), x("ytglobal.HistoryHistoryInstance", b, void 0)); return b }
    function XH(a, b) { T("navigate", a, b) }
    ; var fI = { mi: "ypc_cc", xi: "ypc_ft", Di: "ypc_irp", Fi: "ypc_ii", Gi: "ypc_it" }; function gI() {
        var a = Pn(window.location.href); if (bI) {
            Ab(fI, function (c) { c in a && delete a[c] });
            var b = Kd(window.location.href.split("?", 2)[0], a); cI(); eI(b)
        }
    }
    ; function hI(a) {
        uH = !!a; F("ypc-delayedloader-target") && vH(); a = Pn(window.location.href); var b = a.ypc_it, c = a.ypc_ii, d = a.ypc_ft || "D", e = a.ypc_oi, f = a.ypc_irp, g = a.ypc_cc, h = a.ypc_ta; "channel" == J("PAGE_NAME") && "ypc_cc" in a && (b = "U", c = J("CHANNEL_ID", void 0)); if (f || c && b) gI(), "start_payment" == h ? (a = wH(e, b, c, d, g, null, "", "", f, h), DH(a, yH(a), !0)) : c && b ? zH(b, c, d, f, g) : CH(d, f); FH.push(Bn(document.body, "click", KH, "ypc-checkout-button"), Bn(document.body, "click", JH, "ypc-offer-button"), Bn(document.body, "click", SH, "ypc-complete-transaction-button"),
            Bn(document.body, "click", HH, "ytr-pre-purchase-button"), Bn(document.documentElement, "click", PH, "ypc-unsubscribe-link"), Bn(document.documentElement, "click", PH, "ypc-unsubscribe-button"), Bn(document.documentElement, "click", RH, "offer-module-tab"), Bn(document.documentElement, "click", TH, "yt-unlimited-more-offer-button")); GH.push(mp(lB, MH), mp(kB, NH), mp(qB, OH), mp(oB, QH))
    }
    ; window.onload = function () { gD() };
    window.onunload = function () {
        J("TIMING_REPORT_ON_UNLOAD") && uC(!0); if (qC()) "_start" in aC(void 0) && tC("aa", void 0, void 0); else if (!y("yt.timing.pingSent_")) { var a = J("CSI_SERVICE_NAME", "youtube"); J("TIMING_ACTION", void 0) && a && (tC("aa", void 0), sC("ap", 1), sC("yt_fss", "u"), vC()) } if ("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND" != QC) {
            QC = "FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"; a = -1; PC && (a = Math.round(Up() - PC)); var b = y("_fact", window); rq("foregroundHeartbeat", {
                firstActivityMs: String(null == b || -1 == b ? -1 : Math.max(Date.now() -
                    b, 0)), clientDocumentNonce: $s, index: String(OC), lastEventDeltaMs: String(a), trigger: "FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"
            }, Xs); x("_fact", -1, window); OC++; PC = Up()
        } a = (a = et(0)) ? new bt({ veType: a, youtubeData: void 0 }) : null; (b = gt()) && a && aw(b, [a]); hq(); a = kD; b = 0; for (var c = a.length; b < c; b++)fp(a[b]); kD.length = 0; fD(); iD && (iD.cancel(), iD = null); (a = J("PAGE_NAME", void 0)) && Ko("dispose-" + a); Ko("dispose"); Ko("pageunload")
    };
    window.onerror = function (a, b, c, d, e) {
        b = void 0 === b ? "Unknown file" : b; c = void 0 === c ? 0 : c; var f = !1, g; if ((g = (g = Zm.EXPERIMENT_FLAGS) ? g.log_window_onerror_fraction : void 0) && Math.random() < g) f = !0; else { g = document.getElementsByTagName("script"); for (var h = 0, l = g.length; h < l; h++)if (0 < g[h].src.indexOf("/debug-")) { f = !0; break } } f && (f = !1, e ? f = !0 : ("string" === typeof a ? g = a : ErrorEvent && a instanceof ErrorEvent ? (f = !0, g = a.message, b = a.filename, c = a.lineno, d = a.colno) : (g = "Unknown error", b = "Unknown file", c = 0), e = new Yq(g), e.name = "UnhandledWindowError",
            e.message = g, e.fileName = b, e.lineNumber = c, isNaN(d) ? delete e.columnNumber : e.columnNumber = d), f ? Wv(e) : Vv(e))
    };
    window.yt = window.yt || {}; x("_gel", E, void 0); x("_hasclass", I, void 0); x("_addclass", Bj, void 0); x("_removeclass", Dj, void 0); x("_toggleclass", Hj, void 0); x("_showdiv", Ap, void 0); x("_hidediv", Bp, void 0); x("_ajax", ko, void 0); x("yt.style.show", Ap, void 0); x("yt.style.hide", Bp, void 0); x("goog.bind", z, void 0); x("goog.dom.getElementByClass", F, void 0); x("goog.dom.getElementsByTagNameAndClass", kf, void 0); x("goog.dom.getFirstElementChild", Gf, void 0); x("goog.array.forEach", B, void 0); x("goog.array.indexOf", cb, void 0);
    x("goog.array.contains", mb, void 0); x("yt.setConfig", $m, void 0); x("yt.config.set", $m, void 0); x("yt.getConfig", J, void 0); x("yt.config.get", J, void 0); x("yt.logging.errors.log", Wv, void 0); x("yt.setTimeout", P, void 0); x("yt.setInterval", $n, void 0); x("yt.clearTimeout", Q, void 0); x("yt.clearInterval", ao, void 0); x("yt.timers.setTimeout", P, void 0); x("yt.timers.setInterval", $n, void 0); x("yt.timers.clearTimeout", Q, void 0); x("yt.timers.clearInterval", ao, void 0); x("yt.setMsg", Fn, void 0); x("yt.setGoogMsg", Hn, void 0);
    x("yt.getMsg", Gn, void 0); x("yt.msgs.set", Fn, void 0); x("yt.msgs.setGoog", Hn, void 0); x("yt.msgs.get", Gn, void 0); x("yt.events.listen", L, void 0); x("yt.events.unlisten", function (a, b, c, d) { d = void 0 === d ? {} : d; (a = xn(a, b, c, d)) && M(a) }, void 0);
    x("yt.events.stopPropagation", function (a) { a = a || window.event; a.cancelBubble = !0; a.stopPropagation && a.stopPropagation() }, void 0);
    x("yt.events.preventDefault", function (a) { a = a || window.event; a.returnValue = !1; a.preventDefault && a.preventDefault(); return !1 }, void 0);
    x("yt.events.getTarget", An, void 0); x("yt.events.clear", function () { for (var a in vn) M(a) }, void 0);
    x("yt.events.Event", fn, void 0); fn.prototype.preventDefault = fn.prototype.preventDefault; fn.prototype.stopPropagation = fn.prototype.stopPropagation; x("yt.pubsub.subscribe", R, void 0); x("yt.pubsub.unsubscribeByKey", Jo, void 0); x("yt.pubsub.publish", T, void 0); x("yt.pubsub2.publish", kp, void 0);
    R("init", function () {
        yz = new Np(vz); Fz.push(L(window, "resize", zz)); Fz.push(L(window, "scroll", Cz)); Bj(document.body, "page-loaded"); var a = vq.getInstance(), b = yq(119), c = 1 < window.devicePixelRatio; document.body && I(document.body, "exp-invert-logo") && (c && !I(document.body, "inverted-hdpi") ? Bj(document.body, "inverted-hdpi") : !c && I(document.body, "inverted-hdpi") && Dj(document.body, "inverted-hdpi")); if (b != c) {
            b = "f" + (Math.floor(119 / 31) + 1); var d = zq(b) || 0; d = c ? d | 67108864 : d & -67108865; 0 == d ? delete uq[b] : (c = d.toString(16),
                uq[b] = c.toString()); Aq(a)
        }
    });
    R("dispose", wp); R("init", wp); dy("keyboard"); x("yt.uix.FormInput.selectOnChangeActionIE", function (a) { qu.getInstance().ab(a) }, void 0);
    R("init", function () { tu() });
    x("goog.i18n.bidi.setDirAttribute", function (a, b) { a = b.value; var c = ""; $b.test(a) ? c = "rtl" : $b.test(a) || (c = "ltr"); b.dir = c }, void 0);
    x("yt.style.toggle", Cp, void 0); x("yt.style.setDisplayed", xp, void 0); x("yt.style.isDisplayed", yp, void 0); x("yt.style.setVisible", function (a, b) { if (a = E(a)) a.style.visibility = b ? "visible" : "hidden" }, void 0);
    x("yt.net.ajax.sendWithOptionsFromUncompiled", function (a, b) { return ho(a, { format: b.format, method: b.method, postBody: b.postBody, onSuccess: b.onSuccess }) }, void 0);
    x("yt.net.ajax.ResponseFormat.JSON", "JSON", void 0); x("yt.net.ajax.ResponseFormat.RAW", "RAW", void 0); x("yt.net.ajax.ResponseFormat.LEGACY_XML", "XML", void 0); x("yt.net.ajax.getRootNode", qo, void 0); x("yt.net.ajax.getNodeValue", po, void 0); x("yt.net.scriptloader.load", Po, void 0); x("yt.net.styleloader.load", Vo, void 0);
    x("goog.dom.forms.getFormDataString", function (a) {
        for (var b = [], c = a.elements, d, e = 0; d = c.item(e); e++)if (d.form == a && !d.disabled && "FIELDSET" != d.tagName) { var f = d.name; switch (d.type.toLowerCase()) { case "file": case "submit": case "reset": case "button": break; case "select-multiple": d = Yj(d); if (null != d) for (var g, h = 0; g = d[h]; h++)Xj(b, f, g); break; default: g = Yj(d), null != g && Xj(b, f, g) } } c = a.getElementsByTagName("INPUT"); for (e = 0; d = c[e]; e++)d.form == a && "image" == d.type.toLowerCase() && (f = d.name, Xj(b, f, d.value), Xj(b, f + ".x", "0"),
            Xj(b, f + ".y", "0")); return b.join("&")
    }, void 0);
    x("yt.uri.buildQueryData", Id, void 0); x("yt.uri.appendQueryData", Kd, void 0); x("yt.www.feedback.init", Ux, void 0); x("yt.www.feedback.start", function (a, b) { try { a = (a || "59") + ""; var c = Xx(b), d = Yx(); N("gfeedback_for_signed_out_users_enabled") ? (d.productId = a, d.locale = c.locale, d.helpCenterPath = c.helpCenterPath, Tm(d, c.productData)) : yh(a, c).l(d); return !1 } catch (e) { return !0 } }, void 0);
    x("yt.www.feedback.startHelp", Wx, void 0); x("yt.www.feedback.displayLink", $x, void 0); R("init", Ux); R("init", $x); R("dispose", function () { Jo(Sx); M(Qx); Sx.length = 0; Qx.length = 0; Rx = {} });
    x("yt.net.cookies.set", ro, void 0); x("yt.net.cookies.get", so, void 0); x("yt.net.cookies.remove", to, void 0); x("yt.window.redirect", mt, void 0);
    x("yt.window.popup", function (a, b) {
        b = void 0 === b ? {} : b; b.target = b.target || "YouTube"; b.width = b.width || "600"; b.height = b.height || "600"; b || (b = {}); var c = window; var d = a instanceof pc ? a : wc("undefined" != typeof a.href ? a.href : String(a)) || yc; a = b.target || a.target; var e = []; for (f in b) switch (f) { case "width": case "height": case "top": case "left": e.push(f + "=" + b[f]); break; case "target": case "noopener": case "noreferrer": break; default: e.push(f + "=" + (b[f] ? 1 : 0)) }var f = e.join(","); ke() && c.navigator && c.navigator.standalone &&
            a && "_self" != a ? (f = yf("A"), gd(f, d), f.setAttribute("target", a), b.noreferrer && f.setAttribute("rel", "noreferrer"), b = document.createEvent("MouseEvent"), b.initMouseEvent("click", !0, !0, c, 1), f.dispatchEvent(b), c = {}) : b.noreferrer ? (c = kd("", c, a, f), b = rc(d), c && (re && -1 != b.indexOf(";") && (b = "'" + b.replace(/'/g, "%27") + "'"), c.opener = null, b = dd(Wb("b/12014412, meta tag with sanitized URL"), '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + od(b) + '">'), (d = c.document) && d.write && (d.write(Sc(b)),
                d.close()))) : (c = kd(d, c, a, f)) && b.noopener && (c.opener = null); b = c; if (!b) return null; b.opener || (b.opener = window); b.focus(); return b
    }, void 0);
    x("yt.window.navigate", nt, void 0); R("init", function () { qw.getInstance().Bc(); Mx.getInstance().Bc() });
    R("init", function () { var a = !!F("guide-module-loading"); window.spf && spf.load && a && (J("GUIDE_DELAY_LOAD") || ky(), ly.push(R("appbar-show-guide", ky))) });
    Mw(pt); Mw(Ru); Mw(cu); Mw(Uu); Mw(Vu); Mw(qu); Mw(du); Mw(Jt); Mw(Xu); Mw(Ot); Mw(bw); Mw(Ju); Mw(Lu); Mw(mw); Mw(nw); Mw(ow); Mw(zC); Mw(Mx); Mw(qw); Mw(GC); Mw(LC); Mw(zw); Mw(Bw); Mw(Dw); x("yt.player.instances.create", function (a, b) { return vx(a, b) }, void 0);
    x("yt.www.watch.player.seekTo", function () { }, void 0);
    x("yt.www.watch.player.saveResumeOffset", function (a) { var b; (b = J("PAGE_NAME")) && "watch" != b ? (Vv(new Yq("getPlayer called on:", b)), b = null) : b = wx(); if (b && b.isReady()) { a && $m("RESUME_COOKIE_NAME", a); a = J("VIDEO_ID", void 0); var c = b.getDuration(); b = Math.floor(b.getCurrentTime()); 0 == c || 120 >= b || b + 120 >= c ? fH(a) : eH(a, Math.floor(b)) } }, void 0);
    x("yt.www.lists.data.addto.saveToWatchLater", dz, void 0); x("yt.www.lists.addtowatchlater.init", iz, void 0); R("init", iz); R("dispose", function () { Gp("addto-watch-later-button", "click", jz); Gp("addto-watch-later-button-success", "click", kz); Gp("addto-watch-later-button-remove", "click", lz); Gp("addto-watch-later-button-sign-in", "click", mz); M(gz); gz = [] });
    x("yt.www.watchqueue.addtowatchqueue.init", gH, void 0); R("init", gH); R("dispose", function () { Jo(kH); kH.length = 0; rH = []; Gp("addto-watch-queue-button", "click", hH); Gp("addto-tv-queue-button", "click", hH); Gp("addto-watch-queue-button-success", "click", iH); Gp("addto-watch-queue-menu-choice", "click", jH); Ii(UG); UG = null; Jo(dH); dH.length = 0; LG() });
    x("yt.dom.datasets.get", K, void 0); x("yt.dom.datasets.set", an, void 0); x("yt.abuse.player.botguardInitialized", y("yt.abuse.player.botguardInitialized") || Yw, void 0); x("yt.abuse.player.invokeBotguard", y("yt.abuse.player.invokeBotguard") || Zw, void 0); x("yt.abuse.dclkstatus.checkDclkStatus", y("yt.abuse.dclkstatus.checkDclkStatus") || Sw, void 0); x("yt.player.exports.navigate", y("yt.player.exports.navigate") || ot, void 0); x("yt.util.activity.init", y("yt.util.activity.init") || Pp, void 0);
    x("yt.util.activity.getTimeSinceActive", y("yt.util.activity.getTimeSinceActive") || Sp, void 0); x("yt.util.activity.setTimestamp", y("yt.util.activity.setTimestamp") || Qp, void 0);
    var iI = R("init", function () { Oz(); y("yt.www.page.visibilitymonitor.delegateByClass")(null, y("yt.www.page.visibilitymonitor.States.VISIBLE"), xC, "yt-thumb"); y("yt.www.page.visibilitymonitor.delegateByClass")(null, y("yt.www.page.visibilitymonitor.States.VISIBLE"), xC, "yt-uix-simple-thumb-wrap"); y("yt.www.page.visibilitymonitor.refresh")(); tC("tdl"); Jo(iI) });
    R("init", function () { for (var a = 0; a < document.forms.length; a++) { for (var b = !1, c = 0; c < sH.length; c++)document.forms[a].name == sH[c] && (b = !0); c = document.forms[a]; if ("post" == c.method.toLowerCase() && 0 == b) { b = !1; for (var d = 0; d < c.elements.length; d++)c.elements[d].name == J("XSRF_FIELD_NAME") && (b = !0); b || (b = J("XSRF_TOKEN"), d = document.createElement("input"), d.setAttribute("name", J("XSRF_FIELD_NAME")), d.setAttribute("type", "hidden"), d.setAttribute("value", b), c.appendChild(d)) } } });
    x("yt.www.ads.MastheadAd", Jx, void 0); Jx.prototype.collapse_ad = Jx.prototype.ud; Jx.prototype.expand_ad = Jx.prototype.mf; Jx.prototype.userCollapsePremiumYva = Jx.prototype.bf; x("yt.www.feed.ui.ads.workaroundIE", function (a) { !Ox && Nx && (Ox = !0, P(function () { a.focus() }, 0)) }, void 0);
    x("yt.www.feed.ui.ads.workaroundLoad", function () { Nx = !0 }, void 0);
    x("yt.net.ping.send", zo, void 0); x("yt.tracking.doubleclick.trackActivity", function (a, b, c) { a = ("https:" == document.location.protocol ? "https://" : "http://") + "fls.doubleclick.net/activityi;src=" + md(J("DBLCLK_ADVERTISER_ID")) + ";type=" + md(a) + ";cat=" + md(b); c && !c.ord && (a += ";ord=1"); for (var d in c) a += ";" + md(d) + "=" + md(c[d]); a += ";num=" + Date.now(); c = yf("IFRAME"); c.src = a; c.style.display = "none"; document.body.appendChild(c) }, void 0);
    x("yt.tracking.share", function (a, b, c, d, e, f) { var g = {}; b && (g.v = b); c && (g.list = c); d && (g.url = d); a = { name: a, locale: e, feature: f }; for (var h in g) a[h] = g[h]; g = Kd("/sharing_services", a); zo(g) }, void 0);
    x("yt.www.subscription.autoaction.continueAction", function (a, b, c) { kp(CA, new wA(a, { itemType: b, itemId: c })) }, void 0);
    R("init", function (a) { a = !!a; rB.push(mp(CA, sB), mp(HA, vB)); a || rB.push(mp(GA, sB), mp(LA, vB), mp(zA, yB), mp(AA, AB), mp(OA, CB), mp(nB, EB), mp(pB, GB), mp(mB, FB)) });
    R("init", function () { RA.push(mp(BA, bB), mp(QA, WA), mp(PA, VA)) });
    R("dispose", function () { qp(RA); RA.length = 0; M(SA); SA.length = 0; wu && (Cf(wu), wu = null) });
    R("init", function () { });
    R("dispose", function () {
        M(KB); KB.length = 0; Object.keys(JB).forEach(function (a) { Cf(JB[a]) });
        JB = {}
    });
    R("init", function () { J("CREATE_CHANNEL_LIGHTBOX") && Gx(); if (J("SHOW_IDENTITY_PROMPT_LIGHTBOX")) { var a = Dx(Ix); var b = J("IDENTITY_PROMPT_NEXT_URL", document.location.href), c = J("IDENTITY_PROMPT_AUTHUSER", void 0), d = J("IDENTITY_PROMPT_PAGEID", void 0), e = {}; c && (e.authuser = c); d && (e.pageid = d); a.open("identity-prompt", "/identity_prompt_ajax", "identity_prompt_ajax", !0, !0, void 0, b, !0, e) } });
    R("dispose", function () { });
    x("yt.www.account.AddNewChannelLoader.init", function () { var a = Dx(Ex); a.A = J("ADD_NEW_CHANNEL_PAGE_ID", void 0) || null; a.init(J("ADD_NEW_CHANNEL_CSS_URL", void 0), J("ADD_NEW_CHANNEL_JS_URL", void 0), !a.A, E("body-container"), "add-secondary-channel") }, void 0);
    x("yt.www.account.CreateChannelLoader.show", function (a, b, c, d) { Gx(!0, a, b, c, d) }, void 0);
    R("init", hI); x("yt.ypc.bootstrap.init", hI, void 0); var jI = R("init", function () {
        J("PAGEFRAME_JS") && Po(J("PAGEFRAME_JS", void 0), function () { y("ytbin.www.pageframe.setup")() });
        Jo(jI)
    });
}).call(this);

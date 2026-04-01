!(function(t) {
  const e = {}; function r(n) {
    if (e[n]) {
      return e[n].exports;
    } const i = e[n] = { i: n, l: !1, exports: {}}; return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
  }r.m = t, r.c = e, r.d = function(t, e, n) {
    r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
  }, r.r = function(t) {
    typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 });
  }, r.t = function(t, e) {
    if (1 & e && (t = r(t)), 8 & e) {
      return t;
    } if (4 & e && typeof t === 'object' && t && t.__esModule) {
      return t;
    } const n = Object.create(null); if (r.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: t }), 2 & e && typeof t !== 'string') {
      for (const i in t) {
        r.d(n, i, (e => t[e]).bind(null, i));
      }
    } return n;
  }, r.n = function(t) {
    const e = t && t.__esModule ?
      function() {
        return t.default;
      } :
      function() {
        return t;
      }; return r.d(e, 'a', e), e;
  }, r.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, r.p = '', r(r.s = 21);
}([ function(t, e, r) {
  'use strict'; const n = r(5); const i = Object.keys || function(t) {
    const e = []; for (const r in t) {
      e.push(r);
    } return e;
  }; t.exports = l; const o = r(3); o.inherits = r(1); const s = r(13); const a = r(9); o.inherits(l, s); for (let u = i(a.prototype), f = 0; f < u.length; f++) {
    const h = u[f]; l.prototype[h] || (l.prototype[h] = a.prototype[h]);
  } function l(t) {
    if (!(this instanceof l)) {
      return new l(t);
    } s.call(this, t), a.call(this, t), t && !1 === t.readable && (this.readable = !1), t && !1 === t.writable && (this.writable = !1), this.allowHalfOpen = !0, t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1), this.once('end', c);
  } function c() {
    this.allowHalfOpen || this._writableState.ended || n.nextTick(d, this);
  } function d(t) {
    t.end();
  }Object.defineProperty(l.prototype, 'writableHighWaterMark', { enumerable: !1, get() {
    return this._writableState.highWaterMark;
  } }), Object.defineProperty(l.prototype, 'destroyed', { get() {
    return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed);
  }, set(t) {
    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t, this._writableState.destroyed = t);
  } }), l.prototype._destroy = function(t, e) {
    this.push(null), this.end(), n.nextTick(e, t);
  };
}, function(t, e) {
  typeof Object.create === 'function' ?
    t.exports = function(t, e) {
      t.super_ = e, t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }});
    } :
    t.exports = function(t, e) {
      t.super_ = e; const r = function() {}; r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t;
    };
}, function(t, e) {
  let r; r = (function() {
    return this;
  }()); try {
    r = r || new Function('return this')();
  } catch {
    typeof window === 'object' && (r = window);
  }t.exports = r;
}, function(t, e, r) {
  (function(t) {
    function r(t) {
      return Object.prototype.toString.call(t);
    }e.isArray = function(t) {
      return Array.isArray ? Array.isArray(t) : r(t) === '[object Array]';
    }, e.isBoolean = function(t) {
      return typeof t === 'boolean';
    }, e.isNull = function(t) {
      return t === null;
    }, e.isNullOrUndefined = function(t) {
      return t == null;
    }, e.isNumber = function(t) {
      return typeof t === 'number';
    }, e.isString = function(t) {
      return typeof t === 'string';
    }, e.isSymbol = function(t) {
      return typeof t === 'symbol';
    }, e.isUndefined = function(t) {
      return void 0 === t;
    }, e.isRegExp = function(t) {
      return r(t) === '[object RegExp]';
    }, e.isObject = function(t) {
      return typeof t === 'object' && t !== null;
    }, e.isDate = function(t) {
      return r(t) === '[object Date]';
    }, e.isError = function(t) {
      return r(t) === '[object Error]' || t instanceof Error;
    }, e.isFunction = function(t) {
      return typeof t === 'function';
    }, e.isPrimitive = function(t) {
      return t === null || typeof t === 'boolean' || typeof t === 'number' || typeof t === 'string' || typeof t === 'symbol' || void 0 === t;
    }, e.isBuffer = t.isBuffer;
  }).call(this, r(16).Buffer);
}, function(t, e) {
  let r; let n; const i = t.exports = {}; function o() {
    throw new Error('setTimeout has not been defined');
  } function s() {
    throw new Error('clearTimeout has not been defined');
  } function a(t) {
    if (r === setTimeout) {
      return setTimeout(t, 0);
    } if ((r === o || !r) && setTimeout) {
      return r = setTimeout, setTimeout(t, 0);
    } try {
      return r(t, 0);
    } catch {
      try {
        return r.call(null, t, 0);
      } catch {
        return r.call(this, t, 0);
      }
    }
  }!(function() {
    try {
      r = typeof setTimeout === 'function' ? setTimeout : o;
    } catch {
      r = o;
    } try {
      n = typeof clearTimeout === 'function' ? clearTimeout : s;
    } catch {
      n = s;
    }
  }()); let u; let f = []; let h = !1; let l = -1; function c() {
    h && u && (h = !1, u.length > 0 ? f = u.concat(f) : l = -1, f.length && d());
  } function d() {
    if (!h) {
      const t = a(c); h = !0; for (let e = f.length; e;) {
        for (u = f, f = []; ++l < e;) {
          u && u[l].run();
        }l = -1, e = f.length;
      }u = null, h = !1, (function(t) {
        if (n === clearTimeout) {
          return clearTimeout(t);
        } if ((n === s || !n) && clearTimeout) {
          return n = clearTimeout, clearTimeout(t);
        } try {
          n(t);
        } catch {
          try {
            return n.call(null, t);
          } catch {
            return n.call(this, t);
          }
        }
      }(t));
    }
  } function p(t, e) {
    this.fun = t, this.array = e;
  } function y() {}i.nextTick = function(t) {
    const e = Array.from({ length: arguments.length - 1 }); if (arguments.length > 1) {
      for (let r = 1; r < arguments.length; r++) {
        e[r - 1] = arguments[r];
      }
    }f.push(new p(t, e)), f.length !== 1 || h || a(d);
  }, p.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, i.title = 'browser', i.browser = !0, i.env = {}, i.argv = [], i.version = '', i.versions = {}, i.on = y, i.addListener = y, i.once = y, i.off = y, i.removeListener = y, i.removeAllListeners = y, i.emit = y, i.prependListener = y, i.prependOnceListener = y, i.listeners = function(t) {
    return [];
  }, i.binding = function(t) {
    throw new Error('process.binding is not supported');
  }, i.cwd = function() {
    return '/';
  }, i.chdir = function(t) {
    throw new Error('process.chdir is not supported');
  }, i.umask = function() {
    return 0;
  };
}, function(t, e, r) {
  'use strict'; (function(e) {
    !e.version || e.version.indexOf('v0.') === 0 || e.version.indexOf('v1.') === 0 && e.version.indexOf('v1.8.') !== 0 ?
      t.exports = { nextTick(t, r, n, i) {
        if (typeof t !== 'function') {
          throw new TypeError('"callback" argument must be a function');
        } let o; let s; const a = arguments.length; switch (a) {
          case 0: case 1: return e.nextTick(t); case 2: return e.nextTick(() => {
            t.call(null, r);
          }); case 3: return e.nextTick(() => {
            t.call(null, r, n);
          }); case 4: return e.nextTick(() => {
            t.call(null, r, n, i);
          }); default: for (o = Array.from({ length: a - 1 }), s = 0; s < o.length;) {
            o[s++] = arguments[s];
          } return e.nextTick(() => {
              t.apply(null, o);
            });
        }
      } } :
      t.exports = e;
  }).call(this, r(4));
}, function(t, e, r) {
  const n = r(16); const i = n.Buffer; function o(t, e) {
    for (const r in t) {
      e[r] = t[r];
    }
  } function s(t, e, r) {
    return i(t, e, r);
  }i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = n : (o(n, e), e.Buffer = s), o(i, s), s.from = function(t, e, r) {
    if (typeof t === 'number') {
      throw new TypeError('Argument must not be a number');
    } return i(t, e, r);
  }, s.alloc = function(t, e, r) {
    if (typeof t !== 'number') {
      throw new TypeError('Argument must be a number');
    } const n = i(t); return void 0 === e ? n.fill(0) : (typeof r === 'string' ? n.fill(e, r) : n.fill(e)), n;
  }, s.allocUnsafe = function(t) {
    if (typeof t !== 'number') {
      throw new TypeError('Argument must be a number');
    } return i(t);
  }, s.allocUnsafeSlow = function(t) {
    if (typeof t !== 'number') {
      throw new TypeError('Argument must be a number');
    } return n.SlowBuffer(t);
  };
}, function(t, e, r) {
  'use strict'; let n; const i = typeof Reflect === 'object' ? Reflect : null; const o = i && typeof i.apply === 'function' ?
    i.apply :
    function(t, e, r) {
      return Function.prototype.apply.call(t, e, r);
    }; n = i && typeof i.ownKeys === 'function' ?
    i.ownKeys :
      (Object.getOwnPropertySymbols ?
        function(t) {
          return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
        } :
        function(t) {
          return Object.getOwnPropertyNames(t);
        }); const s = Number.isNaN || function(t) {
    return t != t;
  }; function a() {
    a.init.call(this);
  }t.exports = a, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0; let u = 10; function f(t) {
    return void 0 === t._maxListeners ? a.defaultMaxListeners : t._maxListeners;
  } function h(t, e, r, n) {
    let i, o, s, a; if (typeof r !== 'function') {
      throw new TypeError(`The "listener" argument must be of type Function. Received type ${typeof r}`);
    } if (void 0 === (o = t._events) ? (o = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit('newListener', e, r.listener ? r.listener : r), o = t._events), s = o[e]), void 0 === s) {
      s = o[e] = r, ++t._eventsCount;
    } else if (typeof s === 'function' ? s = o[e] = n ? [ r, s ] : [ s, r ] : (n ? s.unshift(r) : s.push(r)), (i = f(t)) > 0 && s.length > i && !s.warned) {
      s.warned = !0; const u = new Error(`Possible EventEmitter memory leak detected. ${s.length} ${String(e)} listeners added. Use emitter.setMaxListeners() to increase limit`); u.name = 'MaxListenersExceededWarning', u.emitter = t, u.type = e, u.count = s.length, a = u, console && console.warn && console.warn(a);
    } return t;
  } function l(t, e, r) {
    const n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }; const i = function() {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t.push(arguments[e]);
      } this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, o(this.listener, this.target, t));
    }.bind(n); return i.listener = r, n.wrapFn = i, i;
  } function c(t, e, r) {
    const n = t._events; if (void 0 === n) {
      return [];
    } const i = n[e]; return void 0 === i ?
        [] :
      typeof i === 'function' ?
        r ? [ i.listener || i ] : [ i ] :
        r ?
            (function(t) {
              for (var e = Array.from({ length: t.length }), r = 0; r < e.length; ++r) {
                e[r] = t[r].listener || t[r];
              } return e;
            }(i)) :
          p(i, i.length);
  } function d(t) {
    const e = this._events; if (void 0 !== e) {
      const r = e[t]; if (typeof r === 'function') {
        return 1;
      } if (void 0 !== r) {
        return r.length;
      }
    } return 0;
  } function p(t, e) {
    for (var r = new Array(e), n = 0; n < e; ++n) {
      r[n] = t[n];
    } return r;
  }Object.defineProperty(a, 'defaultMaxListeners', { enumerable: !0, get() {
    return u;
  }, set(t) {
    if (typeof t !== 'number' || t < 0 || s(t)) {
      throw new RangeError(`The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ${t}.`);
    } u = t;
  } }), a.init = function() {
    void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, a.prototype.setMaxListeners = function(t) {
    if (typeof t !== 'number' || t < 0 || s(t)) {
      throw new RangeError(`The value of "n" is out of range. It must be a non-negative number. Received ${t}.`);
    } return this._maxListeners = t, this;
  }, a.prototype.getMaxListeners = function() {
    return f(this);
  }, a.prototype.emit = function(t) {
    for (var e = [], r = 1; r < arguments.length; r++) {
      e.push(arguments[r]);
    } let n = t === 'error'; const i = this._events; if (void 0 !== i) {
      n = n && void 0 === i.error;
    } else if (!n) {
      return !1;
    } if (n) {
      let s; if (e.length > 0 && (s = e[0]), s instanceof Error) {
        throw s;
      } const a = new Error(`Unhandled error.${s ? ` (${s.message})` : ''}`); throw a.context = s, a;
    } const u = i[t]; if (void 0 === u) {
      return !1;
    } if (typeof u === 'function') {
      o(u, this, e);
    } else {
      const f = u.length; const h = p(u, f); for (r = 0; r < f; ++r) {
        o(h[r], this, e);
      }
    } return !0;
  }, a.prototype.addListener = function(t, e) {
    return h(this, t, e, !1);
  }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(t, e) {
    return h(this, t, e, !0);
  }, a.prototype.once = function(t, e) {
    if (typeof e !== 'function') {
      throw new TypeError(`The "listener" argument must be of type Function. Received type ${typeof e}`);
    } return this.on(t, l(this, t, e)), this;
  }, a.prototype.prependOnceListener = function(t, e) {
    if (typeof e !== 'function') {
      throw new TypeError(`The "listener" argument must be of type Function. Received type ${typeof e}`);
    } return this.prependListener(t, l(this, t, e)), this;
  }, a.prototype.removeListener = function(t, e) {
    let r, n, i, o, s; if (typeof e !== 'function') {
      throw new TypeError(`The "listener" argument must be of type Function. Received type ${typeof e}`);
    } if (void 0 === (n = this._events)) {
      return this;
    } if (void 0 === (r = n[t])) {
      return this;
    } if (r === e || r.listener === e) {
      --this._eventsCount == 0 ? this._events = Object.create(null) : (delete n[t], n.removeListener && this.emit('removeListener', t, r.listener || e));
    } else if (typeof r !== 'function') {
      for (i = -1, o = r.length - 1; o >= 0; o--) {
        if (r[o] === e || r[o].listener === e) {
          s = r[o].listener, i = o; break;
        }
      } if (i < 0) {
        return this;
      } i === 0 ?
        r.shift() :
          (function(t, e) {
            for (;e + 1 < t.length; e++) {
              t[e] = t[e + 1];
            }t.pop();
          }(r, i)), r.length === 1 && (n[t] = r[0]), void 0 !== n.removeListener && this.emit('removeListener', t, s || e);
    } return this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function(t) {
    let e, r, n; if (void 0 === (r = this._events)) {
      return this;
    } if (void 0 === r.removeListener) {
      return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[t] && (--this._eventsCount == 0 ? this._events = Object.create(null) : delete r[t]), this;
    } if (arguments.length === 0) {
      let i; const o = Object.keys(r); for (n = 0; n < o.length; ++n) {
        (i = o[n]) !== 'removeListener' && this.removeAllListeners(i);
      } return this.removeAllListeners('removeListener'), this._events = Object.create(null), this._eventsCount = 0, this;
    } if (typeof (e = r[t]) === 'function') {
      this.removeListener(t, e);
    } else if (void 0 !== e) {
      for (n = e.length - 1; n >= 0; n--) {
        this.removeListener(t, e[n]);
      }
    } return this;
  }, a.prototype.listeners = function(t) {
    return c(this, t, !0);
  }, a.prototype.rawListeners = function(t) {
    return c(this, t, !1);
  }, a.listenerCount = function(t, e) {
    return typeof t.listenerCount === 'function' ? t.listenerCount(e) : d.call(t, e);
  }, a.prototype.listenerCount = d, a.prototype.eventNames = function() {
    return this._eventsCount > 0 ? n(this._events) : [];
  };
}, function(t, e, r) {
  (e = t.exports = r(13)).Stream = e, e.Readable = e, e.Writable = r(9), e.Duplex = r(0), e.Transform = r(19), e.PassThrough = r(36);
}, function(t, e, r) {
  'use strict'; (function(e, n, i) {
    const o = r(5); function s(t) {
      const e = this; this.next = null, this.entry = null, this.finish = function() {
        !(function(t, e, r) {
          let n = t.entry; t.entry = null; for (;n;) {
            const i = n.callback; e.pendingcb--, i(r), n = n.next;
          }e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t;
        }(e, t));
      };
    }t.exports = v; let a; const u = !e.browser && [ 'v0.10', 'v0.9.' ].includes(e.version.slice(0, 5)) ? n : o.nextTick; v.WritableState = b; const f = r(3); f.inherits = r(1); const h = { deprecate: r(35) }; const l = r(15); const c = r(6).Buffer; const d = i.Uint8Array || function() {}; let p; const y = r(17); function g() {} function b(t, e) {
      a = a || r(0), t = t || {}; const n = e instanceof a; this.objectMode = Boolean(t.objectMode), n && (this.objectMode = this.objectMode || Boolean(t.writableObjectMode)); const i = t.highWaterMark; const f = t.writableHighWaterMark; const h = this.objectMode ? 16 : 16384; this.highWaterMark = i || i === 0 ? i : (n && (f || f === 0) ? f : h), this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1; const l = !1 === t.decodeStrings; this.decodeStrings = !l, this.defaultEncoding = t.defaultEncoding || 'utf8', this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(t) {
        !(function(t, e) {
          const r = t._writableState; const n = r.sync; const i = r.writecb; if ((function(t) {
            t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0;
          }(r)), e) {
            !(function(t, e, r, n, i) {
              --e.pendingcb, r ? (o.nextTick(i, n), o.nextTick(E, t, e), t._writableState.errorEmitted = !0, t.emit('error', n)) : (i(n), t._writableState.errorEmitted = !0, t.emit('error', n), E(t, e));
            }(t, r, n, e, i));
          } else {
            const s = S(r); s || r.corked || r.bufferProcessing || !r.bufferedRequest || _(t, r), n ? u(m, t, r, s, i) : m(t, r, s, i);
          }
        }(e, t));
      }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new s(this);
    } function v(t) {
      if (a = a || r(0), !(p.call(v, this) || this instanceof a)) {
        return new v(t);
      } this._writableState = new b(t, this), this.writable = !0, t && (typeof t.write === 'function' && (this._write = t.write), typeof t.writev === 'function' && (this._writev = t.writev), typeof t.destroy === 'function' && (this._destroy = t.destroy), typeof t.final === 'function' && (this._final = t.final)), l.call(this);
    } function w(t, e, r, n, i, o, s) {
      e.writelen = n, e.writecb = s, e.writing = !0, e.sync = !0, r ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite), e.sync = !1;
    } function m(t, e, r, n) {
      r || (function(t, e) {
        e.length === 0 && e.needDrain && (e.needDrain = !1, t.emit('drain'));
      }(t, e)), e.pendingcb--, n(), E(t, e);
    } function _(t, e) {
      e.bufferProcessing = !0; let r = e.bufferedRequest; if (t._writev && r && r.next) {
        const n = e.bufferedRequestCount; const i = new Array(n); const o = e.corkedRequestsFree; o.entry = r; for (var a = 0, u = !0; r;) {
          i[a] = r, r.isBuf || (u = !1), r = r.next, a += 1;
        }i.allBuffers = u, w(t, e, !0, e.length, i, '', o.finish), e.pendingcb++, e.lastBufferedRequest = null, o.next ? (e.corkedRequestsFree = o.next, o.next = null) : e.corkedRequestsFree = new s(e), e.bufferedRequestCount = 0;
      } else {
        for (;r;) {
          const f = r.chunk; const h = r.encoding; const l = r.callback; if (w(t, e, !1, e.objectMode ? 1 : f.length, f, h, l), r = r.next, e.bufferedRequestCount--, e.writing) {
            break;
          }
        }r === null && (e.lastBufferedRequest = null);
      }e.bufferedRequest = r, e.bufferProcessing = !1;
    } function S(t) {
      return t.ending && t.length === 0 && t.bufferedRequest === null && !t.finished && !t.writing;
    } function T(t, e) {
      t._final((r) => {
        e.pendingcb--, r && t.emit('error', r), e.prefinished = !0, t.emit('prefinish'), E(t, e);
      });
    } function E(t, e) {
      const r = S(e); return r && (!(function(t, e) {
        e.prefinished || e.finalCalled || (typeof t._final === 'function' ? (e.pendingcb++, e.finalCalled = !0, o.nextTick(T, t, e)) : (e.prefinished = !0, t.emit('prefinish')));
      }(t, e)), e.pendingcb === 0 && (e.finished = !0, t.emit('finish'))), r;
    }f.inherits(v, l), b.prototype.getBuffer = function() {
      for (var t = this.bufferedRequest, e = []; t;) {
        e.push(t), t = t.next;
      } return e;
    }, (function() {
      try {
        Object.defineProperty(b.prototype, 'buffer', { get: h.deprecate(function() {
          return this.getBuffer();
        }, '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.', 'DEP0003') });
      } catch {}
    }()), typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function' ?
        (p = Function.prototype[Symbol.hasInstance], Object.defineProperty(v, Symbol.hasInstance, { value(t) {
          return Boolean(p.call(this, t)) || this === v && (t && t._writableState instanceof b);
        } })) :
      p = function(t) {
        return t instanceof this;
      }, v.prototype.pipe = function() {
      this.emit('error', new Error('Cannot pipe, not readable'));
    }, v.prototype.write = function(t, e, r) {
      let n; const i = this._writableState; let s = !1; const a = !i.objectMode && (n = t, c.isBuffer(n) || n instanceof d); return a && !c.isBuffer(t) && (t = (function(t) {
        return c.from(t);
      }(t))), typeof e === 'function' && (r = e, e = null), a ? e = 'buffer' : e || (e = i.defaultEncoding), typeof r !== 'function' && (r = g), i.ended ?
          (function(t, e) {
            const r = new Error('write after end'); t.emit('error', r), o.nextTick(e, r);
          }(this, r)) :
          (a || (function(t, e, r, n) {
            let i = !0; let s = !1; return r === null ? s = new TypeError('May not write null values to stream') : typeof r === 'string' || void 0 === r || e.objectMode || (s = new TypeError('Invalid non-string/buffer chunk')), s && (t.emit('error', s), o.nextTick(n, s), i = !1), i;
          }(this, i, t, r))) && (i.pendingcb++, s = (function(t, e, r, n, i, o) {
            if (!r) {
              const s = (function(t, e, r) {
                t.objectMode || !1 === t.decodeStrings || typeof e !== 'string' || (e = c.from(e, r)); return e;
              }(e, n, i)); n !== s && (r = !0, i = 'buffer', n = s);
            } const a = e.objectMode ? 1 : n.length; e.length += a; const u = e.length < e.highWaterMark; u || (e.needDrain = !0); if (e.writing || e.corked) {
              const f = e.lastBufferedRequest; e.lastBufferedRequest = { chunk: n, encoding: i, isBuf: r, callback: o, next: null }, f ? f.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1;
            } else {
              w(t, e, !1, a, n, i, o);
            } return u;
          }(this, i, a, t, e, r))), s;
    }, v.prototype.cork = function() {
      this._writableState.corked++;
    }, v.prototype.uncork = function() {
      const t = this._writableState; t.corked && (t.corked--, t.writing || t.corked || t.finished || t.bufferProcessing || !t.bufferedRequest || _(this, t));
    }, v.prototype.setDefaultEncoding = function(t) {
      if (typeof t === 'string' && (t = t.toLowerCase()), !([ 'hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw' ].includes((`${t}`).toLowerCase()))) {
        throw new TypeError(`Unknown encoding: ${t}`);
      } return this._writableState.defaultEncoding = t, this;
    }, Object.defineProperty(v.prototype, 'writableHighWaterMark', { enumerable: !1, get() {
      return this._writableState.highWaterMark;
    } }), v.prototype._write = function(t, e, r) {
      r(new Error('_write() is not implemented'));
    }, v.prototype._writev = null, v.prototype.end = function(t, e, r) {
      const n = this._writableState; typeof t === 'function' ? (r = t, t = null, e = null) : typeof e === 'function' && (r = e, e = null), t != null && this.write(t, e), n.corked && (n.corked = 1, this.uncork()), n.ending || n.finished || (function(t, e, r) {
        e.ending = !0, E(t, e), r && (e.finished ? o.nextTick(r) : t.once('finish', r)); e.ended = !0, t.writable = !1;
      }(this, n, r));
    }, Object.defineProperty(v.prototype, 'destroyed', { get() {
      return void 0 !== this._writableState && this._writableState.destroyed;
    }, set(t) {
      this._writableState && (this._writableState.destroyed = t);
    } }), v.prototype.destroy = y.destroy, v.prototype._undestroy = y.undestroy, v.prototype._destroy = function(t, e) {
      this.end(), e(t);
    };
  }).call(this, r(4), r(33).setImmediate, r(2));
}, function(t, e, r) {
  'use strict'; function n(t) {
    for (const r in t) {
      e.hasOwnProperty(r) || (e[r] = t[r]);
    }
  }Object.defineProperty(e, '__esModule', { value: !0 }), n(r(23)), n(r(12));
}, function(t, e, r) {
  r(24), t.exports = self.fetch.bind(self);
}, function(t, e, r) {
  'use strict'; const n = this && this.__awaiter || function(t, e, r, n) {
    return new (r || (r = Promise))((i, o) => {
      function s(t) {
        try {
          u(n.next(t));
        } catch (t) {
          o(t);
        }
      } function a(t) {
        try {
          u(n.throw(t));
        } catch (t) {
          o(t);
        }
      } function u(t) {
        t.done ?
          i(t.value) :
          new r((e) => {
            e(t.value);
          }).then(s, a);
      }u((n = n.apply(t, e || [])).next());
    });
  }; Object.defineProperty(e, '__esModule', { value: !0 }), r(11); e.FetchDocumentLoader = class {
    load(t) {
      return n(this, void 0, void 0, function* () {
        const e = yield fetch(t, { headers: { accept: 'application/ld+json' }}); if (e.ok) {
          return yield e.json();
        } throw new Error(`No valid context was found at ${t}: ${e.statusText}`);
      });
    }
  };
}, function(t, e, r) {
  'use strict'; (function(e, n) {
    const i = r(5); t.exports = w; let o; const s = r(14); w.ReadableState = v; r(7).EventEmitter; const a = function(t, e) {
      return t.listeners(e).length;
    }; const u = r(15); const f = r(6).Buffer; const h = e.Uint8Array || function() {}; const l = r(3); l.inherits = r(1); const c = r(30); let d = void 0; d = c && c.debuglog ? c.debuglog('stream') : function() {}; let p; const y = r(31); const g = r(17); l.inherits(w, u); const b = [ 'error', 'close', 'destroy', 'pause', 'resume' ]; function v(t, e) {
      t = t || {}; const n = e instanceof (o = o || r(0)); this.objectMode = Boolean(t.objectMode), n && (this.objectMode = this.objectMode || Boolean(t.readableObjectMode)); const i = t.highWaterMark; const s = t.readableHighWaterMark; const a = this.objectMode ? 16 : 16384; this.highWaterMark = i || i === 0 ? i : (n && (s || s === 0) ? s : a), this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new y(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || 'utf8', this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (p || (p = r(18).StringDecoder), this.decoder = new p(t.encoding), this.encoding = t.encoding);
    } function w(t) {
      if (o = o || r(0), !(this instanceof w)) {
        return new w(t);
      } this._readableState = new v(t, this), this.readable = !0, t && (typeof t.read === 'function' && (this._read = t.read), typeof t.destroy === 'function' && (this._destroy = t.destroy)), u.call(this);
    } function m(t, e, r, n, i) {
      let o; const s = t._readableState; e === null ?
          (s.reading = !1, (function(t, e) {
            if (e.ended) {
              return;
            } if (e.decoder) {
              const r = e.decoder.end(); r && r.length && (e.buffer.push(r), e.length += e.objectMode ? 1 : r.length);
            }e.ended = !0, E(t);
          }(t, s))) :
          (i || (o = (function(t, e) {
            let r; n = e, f.isBuffer(n) || n instanceof h || typeof e === 'string' || void 0 === e || t.objectMode || (r = new TypeError('Invalid non-string/buffer chunk')); let n; return r;
          }(s, e))), o ?
            t.emit('error', o) :
              (s.objectMode || e && e.length > 0 ?
                  (typeof e === 'string' || s.objectMode || Object.getPrototypeOf(e) === f.prototype || (e = (function(t) {
                    return f.from(t);
                  }(e))), n ? (s.endEmitted ? t.emit('error', new Error('stream.unshift() after end event')) : _(t, s, e, !0)) : (s.ended ? t.emit('error', new Error('stream.push() after EOF')) : (s.reading = !1, s.decoder && !r ? (e = s.decoder.write(e), s.objectMode || e.length > 0 ? _(t, s, e, !1) : A(t, s)) : _(t, s, e, !1)))) :
                n || (s.reading = !1))); return (function(t) {
        return !t.ended && (t.needReadable || t.length < t.highWaterMark || t.length === 0);
      }(s));
    } function _(t, e, r, n) {
      e.flowing && e.length === 0 && !e.sync ? (t.emit('data', r), t.read(0)) : (e.length += e.objectMode ? 1 : r.length, n ? e.buffer.unshift(r) : e.buffer.push(r), e.needReadable && E(t)), A(t, e);
    }Object.defineProperty(w.prototype, 'destroyed', { get() {
      return void 0 !== this._readableState && this._readableState.destroyed;
    }, set(t) {
      this._readableState && (this._readableState.destroyed = t);
    } }), w.prototype.destroy = g.destroy, w.prototype._undestroy = g.undestroy, w.prototype._destroy = function(t, e) {
      this.push(null), e(t);
    }, w.prototype.push = function(t, e) {
      let r; const n = this._readableState; return n.objectMode ? r = !0 : typeof t === 'string' && ((e = e || n.defaultEncoding) !== n.encoding && (t = f.from(t, e), e = ''), r = !0), m(this, t, e, !1, r);
    }, w.prototype.unshift = function(t) {
      return m(this, t, null, !0, !1);
    }, w.prototype.isPaused = function() {
      return !1 === this._readableState.flowing;
    }, w.prototype.setEncoding = function(t) {
      return p || (p = r(18).StringDecoder), this._readableState.decoder = new p(t), this._readableState.encoding = t, this;
    }; const S = 8388608; function T(t, e) {
      return t <= 0 || e.length === 0 && e.ended ?
        0 :
        e.objectMode ?
          1 :
          t == t ?
              (t > e.highWaterMark && (e.highWaterMark = (function(t) {
                return t >= S ? t = S : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t;
              }(t))), t <= e.length ? t : (e.ended ? e.length : (e.needReadable = !0, 0))) :
            e.flowing && e.length > 0 ? e.buffer.head.data.length : e.length;
    } function E(t) {
      const e = t._readableState; e.needReadable = !1, e.emittedReadable || (d('emitReadable', e.flowing), e.emittedReadable = !0, e.sync ? i.nextTick(x, t) : x(t));
    } function x(t) {
      d('emit readable'), t.emit('readable'), I(t);
    } function A(t, e) {
      e.readingMore || (e.readingMore = !0, i.nextTick(R, t, e));
    } function R(t, e) {
      for (let r = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (d('maybeReadMore read 0'), t.read(0), r !== e.length);) {
        r = e.length;
      }e.readingMore = !1;
    } function O(t) {
      d('readable nexttick read 0'), t.read(0);
    } function P(t, e) {
      e.reading || (d('resume read 0'), t.read(0)), e.resumeScheduled = !1, e.awaitDrain = 0, t.emit('resume'), I(t), e.flowing && !e.reading && t.read(0);
    } function I(t) {
      const e = t._readableState; for (d('flow', e.flowing); e.flowing && t.read() !== null;) {
        ;
      }
    } function C(t, e) {
      return e.length === 0 ?
        null :
          (e.objectMode ?
            r = e.buffer.shift() :
              (!t || t >= e.length ?
                  (r = e.decoder ? e.buffer.join('') : (e.buffer.length === 1 ? e.buffer.head.data : e.buffer.concat(e.length)), e.buffer.clear()) :
                r = (function(t, e, r) {
                  let n; t < e.head.data.length ?
                      (n = e.head.data.slice(0, t), e.head.data = e.head.data.slice(t)) :
                    n = t === e.head.data.length ?
                      e.shift() :
                        (r ?
                            (function(t, e) {
                              let r = e.head; let n = 1; let i = r.data; t -= i.length; for (;r = r.next;) {
                                const o = r.data; const s = t > o.length ? o.length : t; if (s === o.length ? i += o : i += o.slice(0, t), (t -= s) === 0) {
                                  s === o.length ? (++n, r.next ? e.head = r.next : e.head = e.tail = null) : (e.head = r, r.data = o.slice(s)); break;
                                }++n;
                              } return e.length -= n, i;
                            }(t, e)) :
                            (function(t, e) {
                              const r = f.allocUnsafe(t); let n = e.head; let i = 1; n.data.copy(r), t -= n.data.length; for (;n = n.next;) {
                                const o = n.data; const s = t > o.length ? o.length : t; if (o.copy(r, r.length - t, 0, s), (t -= s) === 0) {
                                  s === o.length ? (++i, n.next ? e.head = n.next : e.head = e.tail = null) : (e.head = n, n.data = o.slice(s)); break;
                                }++i;
                              } return e.length -= i, r;
                            }(t, e))); return n;
                }(t, e.buffer, e.decoder))), r); let r;
    } function j(t) {
      const e = t._readableState; if (e.length > 0) {
        throw new Error('"endReadable()" called on non-empty stream');
      } e.endEmitted || (e.ended = !0, i.nextTick(k, e, t));
    } function k(t, e) {
      t.endEmitted || t.length > 0 || (t.endEmitted = !0, e.readable = !1, e.emit('end'));
    } function B(t, e) {
      for (let r = 0, n = t.length; r < n; r++) {
        if (t[r] === e) {
          return r;
        }
      } return -1;
    }w.prototype.read = function(t) {
      d('read', t), t = Number.parseInt(t, 10); const e = this._readableState; const r = t; if (t !== 0 && (e.emittedReadable = !1), t === 0 && e.needReadable && (e.length >= e.highWaterMark || e.ended)) {
        return d('read: emitReadable', e.length, e.ended), e.length === 0 && e.ended ? j(this) : E(this), null;
      } if ((t = T(t, e)) === 0 && e.ended) {
        return e.length === 0 && j(this), null;
      } let n; let i = e.needReadable; return d('need readable', i), (e.length === 0 || e.length - t < e.highWaterMark) && d('length less than watermark', i = !0), e.ended || e.reading ? d('reading or ended', i = !1) : i && (d('do read'), e.reading = !0, e.sync = !0, e.length === 0 && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = T(r, e))), (n = t > 0 ? C(t, e) : null) === null ? (e.needReadable = !0, t = 0) : e.length -= t, e.length === 0 && (e.ended || (e.needReadable = !0), r !== t && e.ended && j(this)), n !== null && this.emit('data', n), n;
    }, w.prototype._read = function(t) {
      this.emit('error', new Error('_read() is not implemented'));
    }, w.prototype.pipe = function(t, e) {
      const r = this; const o = this._readableState; switch (o.pipesCount) {
        case 0: o.pipes = t; break; case 1: o.pipes = [ o.pipes, t ]; break; default: o.pipes.push(t);
      }o.pipesCount += 1, d('pipe count=%d opts=%j', o.pipesCount, e); const u = (!e || !1 !== e.end) && t !== n.stdout && t !== n.stderr ? h : w; function f(e, n) {
        d('onunpipe'), e === r && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0, d('cleanup'), t.removeListener('close', b), t.removeListener('finish', v), t.removeListener('drain', l), t.removeListener('error', g), t.removeListener('unpipe', f), r.removeListener('end', h), r.removeListener('end', w), r.removeListener('data', y), c = !0, !o.awaitDrain || t._writableState && !t._writableState.needDrain || l());
      } function h() {
        d('onend'), t.end();
      }o.endEmitted ? i.nextTick(u) : r.once('end', u), t.on('unpipe', f); var l = (function(t) {
        return function() {
          const e = t._readableState; d('pipeOnDrain', e.awaitDrain), e.awaitDrain && e.awaitDrain--, e.awaitDrain === 0 && a(t, 'data') && (e.flowing = !0, I(t));
        };
      }(r)); t.on('drain', l); var c = !1; let p = !1; function y(e) {
        d('ondata'), p = !1, !1 !== t.write(e) || p || ((o.pipesCount === 1 && o.pipes === t || o.pipesCount > 1 && B(o.pipes, t) !== -1) && !c && (d('false write response, pause', r._readableState.awaitDrain), r._readableState.awaitDrain++, p = !0), r.pause());
      } function g(e) {
        d('onerror', e), w(), t.removeListener('error', g), a(t, 'error') === 0 && t.emit('error', e);
      } function b() {
        t.removeListener('finish', v), w();
      } function v() {
        d('onfinish'), t.removeListener('close', b), w();
      } function w() {
        d('unpipe'), r.unpipe(t);
      } return r.on('data', y), (function(t, e, r) {
        if (typeof t.prependListener === 'function') {
          return t.prependListener(e, r);
        } t._events && t._events[e] ? (s(t._events[e]) ? t._events[e].unshift(r) : t._events[e] = [ r, t._events[e] ]) : t.on(e, r);
      }(t, 'error', g)), t.once('close', b), t.once('finish', v), t.emit('pipe', r), o.flowing || (d('pipe resume'), r.resume()), t;
    }, w.prototype.unpipe = function(t) {
      const e = this._readableState; const r = { hasUnpiped: !1 }; if (e.pipesCount === 0) {
        return this;
      } if (e.pipesCount === 1) {
        return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit('unpipe', this, r), this);
      } if (!t) {
        const n = e.pipes; const i = e.pipesCount; e.pipes = null, e.pipesCount = 0, e.flowing = !1; for (let o = 0; o < i; o++) {
          n[o].emit('unpipe', this, r);
        } return this;
      } const s = B(e.pipes, t); return s === -1 ? this : (e.pipes.splice(s, 1), e.pipesCount -= 1, e.pipesCount === 1 && (e.pipes = e.pipes[0]), t.emit('unpipe', this, r), this);
    }, w.prototype.on = function(t, e) {
      const r = u.prototype.on.call(this, t, e); if (t === 'data') {
        !1 !== this._readableState.flowing && this.resume();
      } else if (t === 'readable') {
        const n = this._readableState; n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.emittedReadable = !1, n.reading ? n.length && E(this) : i.nextTick(O, this));
      } return r;
    }, w.prototype.addListener = w.prototype.on, w.prototype.resume = function() {
      const t = this._readableState; return t.flowing || (d('resume'), t.flowing = !0, (function(t, e) {
        e.resumeScheduled || (e.resumeScheduled = !0, i.nextTick(P, t, e));
      }(this, t))), this;
    }, w.prototype.pause = function() {
      return d('call pause flowing=%j', this._readableState.flowing), !1 !== this._readableState.flowing && (d('pause'), this._readableState.flowing = !1, this.emit('pause')), this;
    }, w.prototype.wrap = function(t) {
      const e = this; const r = this._readableState; let n = !1; for (const i in t.on('end', () => {
        if (d('wrapped end'), r.decoder && !r.ended) {
          const t = r.decoder.end(); t && t.length && e.push(t);
        }e.push(null);
      }), t.on('data', (i) => {
        (d('wrapped data'), r.decoder && (i = r.decoder.write(i)), r.objectMode && i == null) || (r.objectMode || i && i.length) && (e.push(i) || (n = !0, t.pause()));
      }), t) {
        void 0 === this[i] && typeof t[i] === 'function' && (this[i] = (function(e) {
          return function() {
            return t[e].apply(t, arguments);
          };
        }(i)));
      } for (const element of b) {
        t.on(element, this.emit.bind(this, element));
      } return this._read = function(e) {
        d('wrapped _read', e), n && (n = !1, t.resume());
      }, this;
    }, Object.defineProperty(w.prototype, 'readableHighWaterMark', { enumerable: !1, get() {
      return this._readableState.highWaterMark;
    } }), w._fromList = C;
  }).call(this, r(2), r(4));
}, function(t, e) {
  const r = {}.toString; t.exports = Array.isArray || function(t) {
    return r.call(t) == '[object Array]';
  };
}, function(t, e, r) {
  t.exports = r(7).EventEmitter;
}, function(t, e, r) {
  'use strict'; (function(t) {
    // !
    // The buffer module from node.js, for the browser.
    //
    // @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
    // @license  MIT
    //
    const n = r(28); const i = r(29); const o = r(14); function s() {
      return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    } function a(t, e) {
      if (s() < e) {
        throw new RangeError('Invalid typed array length');
      } return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (t === null && (t = new u(e)), t.length = e), t;
    } function u(t, e, r) {
      if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) {
        return new u(t, e, r);
      } if (typeof t === 'number') {
        if (typeof e === 'string') {
          throw new TypeError('If encoding is specified then the first argument must be a string');
        } return l(this, t);
      } return f(this, t, e, r);
    } function f(t, e, r, n) {
      if (typeof e === 'number') {
        throw new TypeError('"value" argument must not be a number');
      } return typeof ArrayBuffer !== 'undefined' && e instanceof ArrayBuffer ?
          (function(t, e, r, n) {
            if (e.byteLength, r < 0 || e.byteLength < r) {
              throw new RangeError('\'offset\' is out of bounds');
            } if (e.byteLength < r + (n || 0)) {
              throw new RangeError('\'length\' is out of bounds');
            } e = void 0 === r && void 0 === n ? new Uint8Array(e) : (void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n)); u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = c(t, e); return t;
          }(t, e, r, n)) :
          (typeof e === 'string' ?
              (function(t, e, r) {
                typeof r === 'string' && r !== '' || (r = 'utf8'); if (!u.isEncoding(r)) {
                  throw new TypeError('"encoding" must be a valid string encoding');
                } const n = 0 | p(e, r); const i = (t = a(t, n)).write(e, r); i !== n && (t = t.slice(0, i)); return t;
              }(t, e, r)) :
              (function(t, e) {
                if (u.isBuffer(e)) {
                  const r = 0 | d(e.length); return (t = a(t, r)).length === 0 ? t : (e.copy(t, 0, 0, r), t);
                } if (e) {
                  if (typeof ArrayBuffer !== 'undefined' && e.buffer instanceof ArrayBuffer || 'length' in e) {
                    return typeof e.length !== 'number' || (n = e.length) != n ? a(t, 0) : c(t, e);
                  } if (e.type === 'Buffer' && o(e.data)) {
                    return c(t, e.data);
                  }
                } let n; throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
              }(t, e)));
    } function h(t) {
      if (typeof t !== 'number') {
        throw new TypeError('"size" argument must be a number');
      } if (t < 0) {
        throw new RangeError('"size" argument must not be negative');
      }
    } function l(t, e) {
      if (h(e), t = a(t, e < 0 ? 0 : 0 | d(e)), !u.TYPED_ARRAY_SUPPORT) {
        for (let r = 0; r < e; ++r) {
          t[r] = 0;
        }
      } return t;
    } function c(t, e) {
      const r = e.length < 0 ? 0 : 0 | d(e.length); t = a(t, r); for (let n = 0; n < r; n += 1) {
        t[n] = 255 & e[n];
      } return t;
    } function d(t) {
      if (t >= s()) {
        throw new RangeError(`Attempt to allocate Buffer larger than maximum size: 0x${s().toString(16)} bytes`);
      } return 0 | t;
    } function p(t, e) {
      if (u.isBuffer(t)) {
        return t.length;
      } if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) {
        return t.byteLength;
      } typeof t !== 'string' && (t = `${t}`); const r = t.length; if (r === 0) {
        return 0;
      } for (let n = !1; ;) {
        switch (e) {
          case 'ascii': case 'latin1': case 'binary': return r; case 'utf8': case 'utf-8': case void 0: return F(t).length; case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': return 2 * r; case 'hex': return r >>> 1; case 'base64': return Y(t).length; default: if (n) {
            return F(t).length;
          } e = (`${e}`).toLowerCase(), n = !0;
        }
      }
    } function y(t, e, r) {
      const n = t[e]; t[e] = t[r], t[r] = n;
    } function g(t, e, r, n, i) {
      if (t.length === 0) {
        return -1;
      } if (typeof r === 'string' ? (n = r, r = 0) : (r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648)), r = Number(r), isNaN(r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
        if (i) {
          return -1;
        } r = t.length - 1;
      } else if (r < 0) {
        if (!i) {
          return -1;
        } r = 0;
      } if (typeof e === 'string' && (e = u.from(e, n)), u.isBuffer(e)) {
        return e.length === 0 ? -1 : b(t, e, r, n, i);
      } if (typeof e === 'number') {
        return e &= 255, u.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function' ? (i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r)) : b(t, [ e ], r, n, i);
      } throw new TypeError('val must be string, number or Buffer');
    } function b(t, e, r, n, i) {
      let o; let s = 1; let a = t.length; let u = e.length; if (void 0 !== n && ((n = String(n).toLowerCase()) === 'ucs2' || n === 'ucs-2' || n === 'utf16le' || n === 'utf-16le')) {
        if (t.length < 2 || e.length < 2) {
          return -1;
        } s = 2, a /= 2, u /= 2, r /= 2;
      } function f(t, e) {
        return s === 1 ? t[e] : t.readUInt16BE(e * s);
      } if (i) {
        let h = -1; for (o = r; o < a; o++) {
          if (f(t, o) === f(e, h === -1 ? 0 : o - h)) {
            if (h === -1 && (h = o), o - h + 1 === u) {
              return h * s;
            }
          } else {
            h !== -1 && (o -= o - h), h = -1;
          }
        }
      } else {
        for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
          for (var l = !0, c = 0; c < u; c++) {
            if (f(t, o + c) !== f(e, c)) {
              l = !1; break;
            }
          } if (l) {
            return o;
          }
        }
      } return -1;
    } function v(t, e, r, n) {
      r = Number(r) || 0; const i = t.length - r; n ? (n = Number(n)) > i && (n = i) : n = i; const o = e.length; if (o % 2 != 0) {
        throw new TypeError('Invalid hex string');
      } n > o / 2 && (n = o / 2); for (var s = 0; s < n; ++s) {
        const a = Number.parseInt(e.slice(2 * s, 2 * s + 2), 16); if (isNaN(a)) {
          return s;
        } t[r + s] = a;
      } return s;
    } function w(t, e, r, n) {
      return q(F(e, t.length - r), t, r, n);
    } function m(t, e, r, n) {
      return q((function(t) {
        for (var e = [], r = 0; r < t.length; ++r) {
          e.push(255 & t.charCodeAt(r));
        } return e;
      }(e)), t, r, n);
    } function _(t, e, r, n) {
      return m(t, e, r, n);
    } function S(t, e, r, n) {
      return q(Y(e), t, r, n);
    } function T(t, e, r, n) {
      return q((function(t, e) {
        for (var r, n, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) {
          r = t.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
        } return o;
      }(e, t.length - r)), t, r, n);
    } function E(t, e, r) {
      return e === 0 && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));
    } function x(t, e, r) {
      r = Math.min(t.length, r); for (var n = [], i = e; i < r;) {
        var o; var s; var a; var u; const f = t[i]; let h = null; let l = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1; if (i + l <= r) {
          switch (l) {
            case 1: f < 128 && (h = f); break; case 2: (192 & (o = t[i + 1])) == 128 && (u = (31 & f) << 6 | 63 & o) > 127 && (h = u); break; case 3: o = t[i + 1], s = t[i + 2], (192 & o) == 128 && (192 & s) == 128 && (u = (15 & f) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (h = u); break; case 4: o = t[i + 1], s = t[i + 2], a = t[i + 3], (192 & o) == 128 && (192 & s) == 128 && (192 & a) == 128 && (u = (15 & f) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (h = u);
          }
        }h === null ? (h = 65533, l = 1) : h > 65535 && (h -= 65536, n.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), n.push(h), i += l;
      } return (function(t) {
        const e = t.length; if (e <= A) {
          return String.fromCharCode.apply(String, t);
        } let r = ''; let n = 0; for (;n < e;) {
          r += String.fromCharCode.apply(String, t.slice(n, n += A));
        } return r;
      }(n));
    }e.Buffer = u, e.SlowBuffer = function(t) {
      Number(t) != t && (t = 0); return u.alloc(Number(t));
    }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 === t.TYPED_ARRAY_SUPPORT ?
        (function() {
          try {
            const t = new Uint8Array(1); return t.__proto__ = { __proto__: Uint8Array.prototype, foo() {
              return 42;
            } }, t.foo() === 42 && typeof t.subarray === 'function' && t.subarray(1, 1).byteLength === 0;
          } catch {
            return !1;
          }
        }()) :
      t.TYPED_ARRAY_SUPPORT, e.kMaxLength = s(), u.poolSize = 8192, u._augment = function(t) {
      return t.__proto__ = u.prototype, t;
    }, u.from = function(t, e, r) {
      return f(null, t, e, r);
    }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, typeof Symbol !== 'undefined' && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, { value: null, configurable: !0 })), u.alloc = function(t, e, r) {
      return (function(t, e, r, n) {
        return h(e), e <= 0 ? a(t, e) : void 0 === r ? a(t, e) : typeof n === 'string' ? a(t, e).fill(r, n) : a(t, e).fill(r);
      }(null, t, e, r));
    }, u.allocUnsafe = function(t) {
      return l(null, t);
    }, u.allocUnsafeSlow = function(t) {
      return l(null, t);
    }, u.isBuffer = function(t) {
      return !(t == null || !t._isBuffer);
    }, u.compare = function(t, e) {
      if (!u.isBuffer(t) || !u.isBuffer(e)) {
        throw new TypeError('Arguments must be Buffers');
      } if (t === e) {
        return 0;
      } for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i) {
        if (t[i] !== e[i]) {
          r = t[i], n = e[i]; break;
        }
      } return r < n ? -1 : (n < r ? 1 : 0);
    }, u.isEncoding = function(t) {
      switch (String(t).toLowerCase()) {
        case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'latin1': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': return !0; default: return !1;
      }
    }, u.concat = function(t, e) {
      if (!o(t)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      } if (t.length === 0) {
        return u.alloc(0);
      } let r; if (void 0 === e) {
        for (e = 0, r = 0; r < t.length; ++r) {
          e += t[r].length;
        }
      } const n = u.allocUnsafe(e); let i = 0; for (r = 0; r < t.length; ++r) {
        const s = t[r]; if (!u.isBuffer(s)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } s.copy(n, i), i += s.length;
      } return n;
    }, u.byteLength = p, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
      const t = this.length; if (t % 2 != 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits');
      } for (let e = 0; e < t; e += 2) {
        y(this, e, e + 1);
      } return this;
    }, u.prototype.swap32 = function() {
      const t = this.length; if (t % 4 != 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits');
      } for (let e = 0; e < t; e += 4) {
        y(this, e, e + 3), y(this, e + 1, e + 2);
      } return this;
    }, u.prototype.swap64 = function() {
      const t = this.length; if (t % 8 != 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits');
      } for (let e = 0; e < t; e += 8) {
        y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
      } return this;
    }, u.prototype.toString = function() {
      const t = 0 | this.length; return t === 0 ?
        '' :
          (arguments.length === 0 ?
            x(this, 0, t) :
              (Reflect.apply(function(t, e, r) {
                let n = !1; if ((void 0 === e || e < 0) && (e = 0), e > this.length) {
                  return '';
                } if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) {
                  return '';
                } if ((r >>>= 0) <= (e >>>= 0)) {
                  return '';
                } for (t || (t = 'utf8'); ;) {
                  switch (t) {
                    case 'hex': return P(this, e, r); case 'utf8': case 'utf-8': return x(this, e, r); case 'ascii': return R(this, e, r); case 'latin1': case 'binary': return O(this, e, r); case 'base64': return E(this, e, r); case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': return I(this, e, r); default: if (n) {
                      throw new TypeError(`Unknown encoding: ${t}`);
                    } t = (`${t}`).toLowerCase(), n = !0;
                  }
                }
              }, this, arguments)));
    }, u.prototype.equals = function(t) {
      if (!u.isBuffer(t)) {
        throw new TypeError('Argument must be a Buffer');
      } return this === t || u.compare(this, t) === 0;
    }, u.prototype.inspect = function() {
      let t = ''; const r = e.INSPECT_MAX_BYTES; return this.length > 0 && (t = this.toString('hex', 0, r).match(/.{2}/g).join(' '), this.length > r && (t += ' ... ')), `<Buffer ${t}>`;
    }, u.prototype.compare = function(t, e, r, n, i) {
      if (!u.isBuffer(t)) {
        throw new TypeError('Argument must be a Buffer');
      } if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) {
        throw new RangeError('out of range index');
      } if (n >= i && e >= r) {
        return 0;
      } if (n >= i) {
        return -1;
      } if (e >= r) {
        return 1;
      } if (this === t) {
        return 0;
      } for (var o = (i >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (e >>>= 0), a = Math.min(o, s), f = this.slice(n, i), h = t.slice(e, r), l = 0; l < a; ++l) {
        if (f[l] !== h[l]) {
          o = f[l], s = h[l]; break;
        }
      } return o < s ? -1 : (s < o ? 1 : 0);
    }, u.prototype.includes = function(t, e, r) {
      return this.indexOf(t, e, r) !== -1;
    }, u.prototype.indexOf = function(t, e, r) {
      return g(this, t, e, r, !0);
    }, u.prototype.lastIndexOf = function(t, e, r) {
      return g(this, t, e, r, !1);
    }, u.prototype.write = function(t, e, r, n) {
      if (void 0 === e) {
        n = 'utf8', r = this.length, e = 0;
      } else if (void 0 === r && typeof e === 'string') {
        n = e, r = this.length, e = 0;
      } else {
        if (!isFinite(e)) {
          throw new TypeError('Buffer.write(string, encoding, offset[, length]) is no longer supported');
        } e = Math.trunc(e), isFinite(r) ? (r = Math.trunc(r), void 0 === n && (n = 'utf8')) : (n = r, r = void 0);
      } const i = this.length - e; if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds');
      } n || (n = 'utf8'); for (let o = !1; ;) {
        switch (n) {
          case 'hex': return v(this, t, e, r); case 'utf8': case 'utf-8': return w(this, t, e, r); case 'ascii': return m(this, t, e, r); case 'latin1': case 'binary': return _(this, t, e, r); case 'base64': return S(this, t, e, r); case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': return T(this, t, e, r); default: if (o) {
            throw new TypeError(`Unknown encoding: ${n}`);
          } n = (`${n}`).toLowerCase(), o = !0;
        }
      }
    }, u.prototype.toJSON = function() {
      return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
    }; var A = 4096; function R(t, e, r) {
      let n = ''; r = Math.min(t.length, r); for (let i = e; i < r; ++i) {
        n += String.fromCharCode(127 & t[i]);
      } return n;
    } function O(t, e, r) {
      let n = ''; r = Math.min(t.length, r); for (let i = e; i < r; ++i) {
        n += String.fromCharCode(t[i]);
      } return n;
    } function P(t, e, r) {
      const n = t.length; (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n); for (var i = '', o = e; o < r; ++o) {
        i += U(t[o]);
      } return i;
    } function I(t, e, r) {
      for (var n = t.slice(e, r), i = '', o = 0; o < n.length; o += 2) {
        i += String.fromCharCode(n[o] + 256 * n[o + 1]);
      } return i;
    } function C(t, e, r) {
      if (t % 1 != 0 || t < 0) {
        throw new RangeError('offset is not uint');
      } if (t + e > r) {
        throw new RangeError('Trying to access beyond buffer length');
      }
    } function j(t, e, r, n, i, o) {
      if (!u.isBuffer(t)) {
        throw new TypeError('"buffer" argument must be a Buffer instance');
      } if (e > i || e < o) {
        throw new RangeError('"value" argument is out of bounds');
      } if (r + n > t.length) {
        throw new RangeError('Index out of range');
      }
    } function k(t, e, r, n) {
      e < 0 && (e = 65535 + e + 1); for (let i = 0, o = Math.min(t.length - r, 2); i < o; ++i) {
        t[r + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i);
      }
    } function B(t, e, r, n) {
      e < 0 && (e = 4294967295 + e + 1); for (let i = 0, o = Math.min(t.length - r, 4); i < o; ++i) {
        t[r + i] = e >>> 8 * (n ? i : 3 - i) & 255;
      }
    } function M(t, e, r, n, i, o) {
      if (r + n > t.length) {
        throw new RangeError('Index out of range');
      } if (r < 0) {
        throw new RangeError('Index out of range');
      }
    } function L(t, e, r, n, o) {
      return o || M(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4;
    } function D(t, e, r, n, o) {
      return o || M(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8;
    }u.prototype.slice = function(t, e) {
      let r; const n = this.length; if ((t = Math.trunc(t)) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : Math.trunc(e)) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t), u.TYPED_ARRAY_SUPPORT) {
        (r = this.subarray(t, e)).__proto__ = u.prototype;
      } else {
        const i = e - t; r = new u(i, void 0); for (let o = 0; o < i; ++o) {
          r[o] = this[o + t];
        }
      } return r;
    }, u.prototype.readUIntLE = function(t, e, r) {
      t = Math.trunc(t), e = Math.trunc(e), r || C(t, e, this.length); for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) {
        n += this[t + o] * i;
      } return n;
    }, u.prototype.readUIntBE = function(t, e, r) {
      t = Math.trunc(t), e = Math.trunc(e), r || C(t, e, this.length); for (var n = this[t + --e], i = 1; e > 0 && (i *= 256);) {
        n += this[t + --e] * i;
      } return n;
    }, u.prototype.readUInt8 = function(t, e) {
      return e || C(t, 1, this.length), this[t];
    }, u.prototype.readUInt16LE = function(t, e) {
      return e || C(t, 2, this.length), this[t] | this[t + 1] << 8;
    }, u.prototype.readUInt16BE = function(t, e) {
      return e || C(t, 2, this.length), this[t] << 8 | this[t + 1];
    }, u.prototype.readUInt32LE = function(t, e) {
      return e || C(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
    }, u.prototype.readUInt32BE = function(t, e) {
      return e || C(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    }, u.prototype.readIntLE = function(t, e, r) {
      t = Math.trunc(t), e = Math.trunc(e), r || C(t, e, this.length); for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) {
        n += this[t + o] * i;
      } return n >= (i *= 128) && (n -= 2 ** (8 * e)), n;
    }, u.prototype.readIntBE = function(t, e, r) {
      t = Math.trunc(t), e = Math.trunc(e), r || C(t, e, this.length); for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) {
        o += this[t + --n] * i;
      } return o >= (i *= 128) && (o -= 2 ** (8 * e)), o;
    }, u.prototype.readInt8 = function(t, e) {
      return e || C(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
    }, u.prototype.readInt16LE = function(t, e) {
      e || C(t, 2, this.length); const r = this[t] | this[t + 1] << 8; return 32768 & r ? 4294901760 | r : r;
    }, u.prototype.readInt16BE = function(t, e) {
      e || C(t, 2, this.length); const r = this[t + 1] | this[t] << 8; return 32768 & r ? 4294901760 | r : r;
    }, u.prototype.readInt32LE = function(t, e) {
      return e || C(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    }, u.prototype.readInt32BE = function(t, e) {
      return e || C(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    }, u.prototype.readFloatLE = function(t, e) {
      return e || C(t, 4, this.length), i.read(this, t, !0, 23, 4);
    }, u.prototype.readFloatBE = function(t, e) {
      return e || C(t, 4, this.length), i.read(this, t, !1, 23, 4);
    }, u.prototype.readDoubleLE = function(t, e) {
      return e || C(t, 8, this.length), i.read(this, t, !0, 52, 8);
    }, u.prototype.readDoubleBE = function(t, e) {
      return e || C(t, 8, this.length), i.read(this, t, !1, 52, 8);
    }, u.prototype.writeUIntLE = function(t, e, r, n) {
      (t = Number(t), e = Math.trunc(e), r = Math.trunc(r), n) || j(this, t, e, r, 2 ** (8 * r) - 1, 0); let i = 1; let o = 0; for (this[e] = 255 & t; ++o < r && (i *= 256);) {
        this[e + o] = t / i & 255;
      } return e + r;
    }, u.prototype.writeUIntBE = function(t, e, r, n) {
      (t = Number(t), e = Math.trunc(e), r = Math.trunc(r), n) || j(this, t, e, r, 2 ** (8 * r) - 1, 0); let i = r - 1; let o = 1; for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) {
        this[e + i] = t / o & 255;
      } return e + r;
    }, u.prototype.writeUInt8 = function(t, e, r) {
      return t = Number(t), e = Math.trunc(e), r || j(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1;
    }, u.prototype.writeUInt16LE = function(t, e, r) {
      return t = Number(t), e = Math.trunc(e), r || j(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : k(this, t, e, !0), e + 2;
    }, u.prototype.writeUInt16BE = function(t, e, r) {
      return t = Number(t), e = Math.trunc(e), r || j(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : k(this, t, e, !1), e + 2;
    }, u.prototype.writeUInt32LE = function(t, e, r) {
      return t = Number(t), e = Math.trunc(e), r || j(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : B(this, t, e, !0), e + 4;
    }, u.prototype.writeUInt32BE = function(t, e, r) {
      return t = Number(t), e = Math.trunc(e), r || j(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : B(this, t, e, !1), e + 4;
    }, u.prototype.writeIntLE = function(t, e, r, n) {
      if (t = Number(t), e = Math.trunc(e), !n) {
        const i = 2 ** (8 * r - 1); j(this, t, e, r, i - 1, -i);
      } let o = 0; let s = 1; let a = 0; for (this[e] = 255 & t; ++o < r && (s *= 256);) {
        t < 0 && a === 0 && this[e + o - 1] !== 0 && (a = 1), this[e + o] = (Math.trunc(t / s)) - a & 255;
      } return e + r;
    }, u.prototype.writeIntBE = function(t, e, r, n) {
      if (t = Number(t), e = Math.trunc(e), !n) {
        const i = 2 ** (8 * r - 1); j(this, t, e, r, i - 1, -i);
      } let o = r - 1; let s = 1; let a = 0; for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) {
        t < 0 && a === 0 && this[e + o + 1] !== 0 && (a = 1), this[e + o] = (Math.trunc(t / s)) - a & 255;
      } return e + r;
    }, u.prototype.writeInt8 = function(t, e, r) {
      return t = Number(t), e = Math.trunc(e), r || j(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
    }, u.prototype.writeInt16LE = function(t, e, r) {
      return t = Number(t), e = Math.trunc(e), r || j(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : k(this, t, e, !0), e + 2;
    }, u.prototype.writeInt16BE = function(t, e, r) {
      return t = Number(t), e = Math.trunc(e), r || j(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : k(this, t, e, !1), e + 2;
    }, u.prototype.writeInt32LE = function(t, e, r) {
      return t = Number(t), e = Math.trunc(e), r || j(this, t, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : B(this, t, e, !0), e + 4;
    }, u.prototype.writeInt32BE = function(t, e, r) {
      return t = Number(t), e = Math.trunc(e), r || j(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : B(this, t, e, !1), e + 4;
    }, u.prototype.writeFloatLE = function(t, e, r) {
      return L(this, t, e, !0, r);
    }, u.prototype.writeFloatBE = function(t, e, r) {
      return L(this, t, e, !1, r);
    }, u.prototype.writeDoubleLE = function(t, e, r) {
      return D(this, t, e, !0, r);
    }, u.prototype.writeDoubleBE = function(t, e, r) {
      return D(this, t, e, !1, r);
    }, u.prototype.copy = function(t, e, r, n) {
      if (r || (r = 0), n || n === 0 || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) {
        return 0;
      } if (t.length === 0 || this.length === 0) {
        return 0;
      } if (e < 0) {
        throw new RangeError('targetStart out of bounds');
      } if (r < 0 || r >= this.length) {
        throw new RangeError('sourceStart out of bounds');
      } if (n < 0) {
        throw new RangeError('sourceEnd out of bounds');
      } n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r); let i; const o = n - r; if (this === t && r < e && e < n) {
        for (i = o - 1; i >= 0; --i) {
          t[i + e] = this[i + r];
        }
      } else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT) {
        for (i = 0; i < o; ++i) {
          t[i + e] = this[i + r];
        }
      } else {
        Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e);
      } return o;
    }, u.prototype.fill = function(t, e, r, n) {
      if (typeof t === 'string') {
        if (typeof e === 'string' ? (n = e, e = 0, r = this.length) : typeof r === 'string' && (n = r, r = this.length), t.length === 1) {
          const i = t.charCodeAt(0); i < 256 && (t = i);
        } if (void 0 !== n && typeof n !== 'string') {
          throw new TypeError('encoding must be a string');
        } if (typeof n === 'string' && !u.isEncoding(n)) {
          throw new TypeError(`Unknown encoding: ${n}`);
        }
      } else {
        typeof t === 'number' && (t &= 255);
      } if (e < 0 || this.length < e || this.length < r) {
        throw new RangeError('Out of range index');
      } if (r <= e) {
        return this;
      } let o; if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), typeof t === 'number') {
        for (o = e; o < r; ++o) {
          this[o] = t;
        }
      } else {
        const s = u.isBuffer(t) ? t : F(new u(t, n).toString()); const a = s.length; for (o = 0; o < r - e; ++o) {
          this[o + e] = s[o % a];
        }
      } return this;
    }; const N = /[^\w+/-]/g; function U(t) {
      return t < 16 ? `0${t.toString(16)}` : t.toString(16);
    } function F(t, e) {
      let r; e = e || 1 / 0; for (var n = t.length, i = null, o = [], s = 0; s < n; ++s) {
        if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
          if (!i) {
            if (r > 56319) {
              (e -= 3) > -1 && o.push(239, 191, 189); continue;
            } if (s + 1 === n) {
              (e -= 3) > -1 && o.push(239, 191, 189); continue;
            }i = r; continue;
          } if (r < 56320) {
            (e -= 3) > -1 && o.push(239, 191, 189), i = r; continue;
          }r = 65536 + (i - 55296 << 10 | r - 56320);
        } else {
          i && (e -= 3) > -1 && o.push(239, 191, 189);
        } if (i = null, r < 128) {
          if ((e -= 1) < 0) {
            break;
          } o.push(r);
        } else if (r < 2048) {
          if ((e -= 2) < 0) {
            break;
          } o.push(r >> 6 | 192, 63 & r | 128);
        } else if (r < 65536) {
          if ((e -= 3) < 0) {
            break;
          } o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
        } else {
          if (!(r < 1114112)) {
            throw new Error('Invalid code point');
          } if ((e -= 4) < 0) {
            break;
          } o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
        }
      } return o;
    } function Y(t) {
      return n.toByteArray(function(t) {
        if ((t = (function(t) {
          return t.trim ? t.trim() : t.replaceAll(/^\s+|\s+$/g, '');
        }(t)).replaceAll(N, '')).length < 2) {
          return '';
        } for (;t.length % 4 != 0;) {
          t += '=';
        } return t;
      }(t));
    } function q(t, e, r, n) {
      for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) {
        e[i + r] = t[i];
      } return i;
    }
  }).call(this, r(2));
}, function(t, e, r) {
  'use strict'; const n = r(5); function i(t, e) {
    t.emit('error', e);
  }t.exports = { destroy(t, e) {
    const r = this; const o = this._readableState && this._readableState.destroyed; const s = this._writableState && this._writableState.destroyed; return o || s ?
        (e ? e(t) : !t || this._writableState && this._writableState.errorEmitted || n.nextTick(i, this, t), this) :
        (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, (t) => {
          !e && t ? (n.nextTick(i, r, t), r._writableState && (r._writableState.errorEmitted = !0)) : e && e(t);
        }), this);
  }, undestroy() {
    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
  } };
}, function(t, e, r) {
  'use strict'; const n = r(6).Buffer; const i = n.isEncoding || function(t) {
    switch ((t = `${t}`) && t.toLowerCase()) {
      case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return !0; default: return !1;
    }
  }; function o(t) {
    let e; switch (this.encoding = (function(t) {
      const e = (function(t) {
        if (!t) {
          return 'utf8';
        } for (var e; ;) {
          switch (t) {
            case 'utf8': case 'utf-8': return 'utf8'; case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': return 'utf16le'; case 'latin1': case 'binary': return 'latin1'; case 'base64': case 'ascii': case 'hex': return t; default: if (e) {
              return;
            } t = (`${t}`).toLowerCase(), e = !0;
          }
        }
      }(t)); if (typeof e !== 'string' && (n.isEncoding === i || !i(t))) {
        throw new Error(`Unknown encoding: ${t}`);
      } return e || t;
    }(t)), this.encoding) {
      case 'utf16le': this.text = u, this.end = f, e = 4; break; case 'utf8': this.fillLast = a, e = 4; break; case 'base64': this.text = h, this.end = l, e = 3; break; default: return this.write = c, void (this.end = d);
    } this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(e);
  } function s(t) {
    return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2;
  } function a(t) {
    const e = this.lastTotal - this.lastNeed; const r = (function(t, e, r) {
      if ((192 & e[0]) != 128) {
        return t.lastNeed = 0, '�';
      } if (t.lastNeed > 1 && e.length > 1) {
        if ((192 & e[1]) != 128) {
          return t.lastNeed = 1, '�';
        } if (t.lastNeed > 2 && e.length > 2 && (192 & e[2]) != 128) {
          return t.lastNeed = 2, '�';
        }
      }
    }(this, t)); return void 0 === r ? (this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length), void (this.lastNeed -= t.length))) : r;
  } function u(t, e) {
    if ((t.length - e) % 2 == 0) {
      const r = t.toString('utf16le', e); if (r) {
        const n = r.charCodeAt(r.length - 1); if (n >= 55296 && n <= 56319) {
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t.at(-2), this.lastChar[1] = t.at(-1), r.slice(0, -1);
        }
      } return r;
    } return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t.at(-1), t.toString('utf16le', e, t.length - 1);
  } function f(t) {
    const e = t && t.length > 0 ? this.write(t) : ''; if (this.lastNeed) {
      const r = this.lastTotal - this.lastNeed; return e + this.lastChar.toString('utf16le', 0, r);
    } return e;
  } function h(t, e) {
    const r = (t.length - e) % 3; return r === 0 ? t.toString('base64', e) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = t.at(-1) : (this.lastChar[0] = t.at(-2), this.lastChar[1] = t.at(-1)), t.toString('base64', e, t.length - r));
  } function l(t) {
    const e = t && t.length > 0 ? this.write(t) : ''; return this.lastNeed ? e + this.lastChar.toString('base64', 0, 3 - this.lastNeed) : e;
  } function c(t) {
    return t.toString(this.encoding);
  } function d(t) {
    return t && t.length > 0 ? this.write(t) : '';
  }e.StringDecoder = o, o.prototype.write = function(t) {
    if (t.length === 0) {
      return '';
    } let e, r; if (this.lastNeed) {
      if (void 0 === (e = this.fillLast(t))) {
        return '';
      } r = this.lastNeed, this.lastNeed = 0;
    } else {
      r = 0;
    } return r < t.length ? (e ? e + this.text(t, r) : this.text(t, r)) : e || '';
  }, o.prototype.end = function(t) {
    const e = t && t.length > 0 ? this.write(t) : ''; return this.lastNeed ? `${e}�` : e;
  }, o.prototype.text = function(t, e) {
    const r = (function(t, e, r) {
      let n = e.length - 1; if (n < r) {
        return 0;
      } let i = s(e[n]); if (i >= 0) {
        return i > 0 && (t.lastNeed = i - 1), i;
      } if (--n < r || i === -2) {
        return 0;
      } if ((i = s(e[n])) >= 0) {
        return i > 0 && (t.lastNeed = i - 2), i;
      } if (--n < r || i === -2) {
        return 0;
      } if ((i = s(e[n])) >= 0) {
        return i > 0 && (i === 2 ? i = 0 : t.lastNeed = i - 3), i;
      } return 0;
    }(this, t, e)); if (!this.lastNeed) {
      return t.toString('utf8', e);
    } this.lastTotal = r; const n = t.length - (r - this.lastNeed); return t.copy(this.lastChar, 0, n), t.toString('utf8', e, n);
  }, o.prototype.fillLast = function(t) {
    if (this.lastNeed <= t.length) {
      return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    } t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length;
  };
}, function(t, e, r) {
  'use strict'; t.exports = s; const n = r(0); const i = r(3); function o(t, e) {
    const r = this._transformState; r.transforming = !1; const n = r.writecb; if (!n) {
      return this.emit('error', new Error('write callback called multiple times'));
    } r.writechunk = null, r.writecb = null, e != null && this.push(e), n(t); const i = this._readableState; i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
  } function s(t) {
    if (!(this instanceof s)) {
      return new s(t);
    } n.call(this, t), this._transformState = { afterTransform: o.bind(this), needTransform: !1, transforming: !1, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = !0, this._readableState.sync = !1, t && (typeof t.transform === 'function' && (this._transform = t.transform), typeof t.flush === 'function' && (this._flush = t.flush)), this.on('prefinish', a);
  } function a() {
    const t = this; typeof this._flush === 'function' ?
      this._flush((e, r) => {
        u(t, e, r);
      }) :
      u(this, null, null);
  } function u(t, e, r) {
    if (e) {
      return t.emit('error', e);
    } if (r != null && t.push(r), t._writableState.length) {
      throw new Error('Calling transform done when ws.length != 0');
    } if (t._transformState.transforming) {
      throw new Error('Calling transform done when still transforming');
    } return t.push(null);
  }i.inherits = r(1), i.inherits(s, n), s.prototype.push = function(t, e) {
    return this._transformState.needTransform = !1, n.prototype.push.call(this, t, e);
  }, s.prototype._transform = function(t, e, r) {
    throw new Error('_transform() is not implemented');
  }, s.prototype._write = function(t, e, r) {
    const n = this._transformState; if (n.writecb = r, n.writechunk = t, n.writeencoding = e, !n.transforming) {
      const i = this._readableState; (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
    }
  }, s.prototype._read = function(t) {
    const e = this._transformState; e.writechunk !== null && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0;
  }, s.prototype._destroy = function(t, e) {
    const r = this; n.prototype._destroy.call(this, t, (t) => {
      e(t), r.emit('close');
    });
  };
}, function(t, e, r) {
  'use strict'; Object.defineProperty(e, '__esModule', { value: !0 }); const n = r(10); class i {
    static termToValue(t, e, r = { compactIds: !1, useNativeTypes: !1 }) {
      switch (t.termType) {
        case 'NamedNode': const o = n.ContextParser.compactIri(t.value, e, r.vocab); return r.compactIds ? o : { '@id': o }; case 'DefaultGraph': return r.compactIds ? t.value : { '@id': t.value }; case 'BlankNode': const s = `_:${t.value}`; return r.compactIds ? s : { '@id': s }; case 'Literal': const a = t.datatype.value === i.XSD_STRING; const u = { '@value': !a && r.useNativeTypes ? i.stringToNativeType(t.value, t.datatype.value) : t.value }; return t.language ? ({ ...u, '@language': t.language }) : (a || typeof u['@value'] !== 'string' ? u : ({ ...u, '@type': t.datatype.value }));
      }
    }

    static stringToNativeType(t, e) {
      if (e.startsWith(i.XSD)) {
        switch (e.slice(i.XSD.length)) {
          case 'boolean': if (t === 'true') {
            return !0;
          } if (t === 'false') {
              return !1;
            } throw new Error(`Invalid xsd:boolean value '${t}'`); case 'integer': case 'number': case 'int': case 'byte': case 'long': const r = Number.parseInt(t, 10); if (isNaN(r)) {
            throw new TypeError(`Invalid xsd:integer value '${t}'`);
          } return r; case 'float': case 'decimal': case 'double': const n = Number.parseFloat(t); if (isNaN(n)) {
            throw new TypeError(`Invalid xsd:float value '${t}'`);
          } return n;
        }
      } return t;
    }
  }i.XSD = 'http://www.w3.org/2001/XMLSchema#', i.XSD_STRING = `${i.XSD}string`, i.RDF = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#', i.RDF_TYPE = `${i.RDF}type`, e.Util = i;
}, function(t, e, r) {
  'use strict'; function n(t) {
    for (const r in t) {
      e.hasOwnProperty(r) || (e[r] = t[r]);
    }
  }Object.defineProperty(e, '__esModule', { value: !0 }), n(r(22)), n(r(20));
}, function(t, e, r) {
  'use strict'; Object.defineProperty(e, '__esModule', { value: !0 }); const n = r(10); const i = r(27); const o = r(41); const s = r(20); class a extends i.Transform {
    constructor(t = {}) {
      super({ objectMode: !0 }), this.indentation = 0, this.options = t, this.options.baseIRI && !this.options.context && (this.options.context = { '@base': this.options.baseIRI }), this.options.context ? (this.originalContext = this.options.context, this.context = (new n.ContextParser()).parse(this.options.context, { baseIri: this.options.baseIRI })) : this.context = Promise.resolve({});
    }

    import(t) {
      const e = new i.PassThrough({ objectMode: !0 }); t.on('error', t => r.emit('error', t)), t.on('data', t => e.write(t)), t.on('end', () => e.emit('end')); const r = e.pipe(new a(this.options)); return r;
    }

    _transform(t, e, r) {
      this.context.then((e) => {
        this.transformQuad(t, e), r();
      }).catch(r);
    }

    list(t) {
      return { '@list': t.map(t => s.Util.termToValue(t, this.options)) };
    }

    _flush(t) {
      return this.opened || this.pushDocumentStart(), this.lastPredicate && this.endPredicate(), this.lastSubject && this.endSubject(), this.lastGraph && this.lastGraph.termType !== 'DefaultGraph' && this.endGraph(), this.endDocument(), t(null, null);
    }

    transformQuad(t, e) {
      this.opened || this.pushDocumentStart(); const r = this.lastGraph && this.lastGraph.termType !== 'DefaultGraph' && this.lastGraph.equals(t.subject); if (!(r || this.lastGraph && t.graph.equals(this.lastGraph))) {
        let r = t.graph.termType !== 'DefaultGraph' && this.lastSubject && this.lastSubject.equals(t.graph); this.lastGraph && (this.lastGraph.termType === 'DefaultGraph' ? (r ? (this.endPredicate(!0), this.lastSubject = null) : (this.endPredicate(), this.endSubject(!0))) : (this.endPredicate(), this.endSubject(), this.endGraph(!0), r = !1)), t.graph.termType !== 'DefaultGraph' && (r || this.pushId(t.graph, e), this.pushSeparator(o.SeparatorType.GRAPH_FIELD), this.indentation++), this.lastGraph = t.graph;
      } this.lastSubject && t.subject.equals(this.lastSubject) || (r ? (this.endPredicate(), this.endSubject(), this.indentation--, this.pushSeparator(o.SeparatorType.ARRAY_END_COMMA), this.lastGraph = t.graph) : (this.lastSubject && (this.endPredicate(), this.endSubject(!0)), this.pushId(t.subject, e)), this.lastSubject = t.subject), this.lastPredicate && t.predicate.equals(this.lastPredicate) || (this.lastPredicate && this.endPredicate(!0), this.pushPredicate(t.predicate, e)), this.pushObject(t.object, e);
    }

    pushDocumentStart() {
      this.opened = !0, this.originalContext && !this.options.excludeContext ? (this.pushSeparator(o.SeparatorType.OBJECT_START), this.indentation++, this.pushSeparator(o.SeparatorType.CONTEXT_FIELD), this.pushIndented(`${JSON.stringify(this.originalContext, null, this.options.space)},`), this.pushSeparator(o.SeparatorType.GRAPH_FIELD), this.indentation++) : (this.pushSeparator(o.SeparatorType.ARRAY_START), this.indentation++);
    }

    pushId(t, e) {
      const r = t.termType === 'BlankNode' ? `_:${t.value}` : n.ContextParser.compactIri(t.value, e, !1); this.pushSeparator(o.SeparatorType.OBJECT_START), this.indentation++, this.pushIndented(`"@id": "${r}",`);
    }

    pushPredicate(t, e) {
      let r = t.value; this.options.useRdfType || r !== s.Util.RDF_TYPE || (r = '@type', this.objectOptions = { ...this.options, compactIds: !0, vocab: !0 }), this.pushIndented(`"${n.ContextParser.compactIri(r, e, !0)}": [`), this.indentation++, this.lastPredicate = t;
    }

    pushObject(t, e) {
      let r; this.hadObjectForPredicate ? this.pushSeparator(o.SeparatorType.COMMA) : this.hadObjectForPredicate = !0; try {
        r = t['@list'] ? t : s.Util.termToValue(t, e, this.objectOptions || this.options);
      } catch (t) {
        return this.emit('error', t);
      } this.pushIndented(JSON.stringify(r, null, this.options.space));
    }

    endDocument() {
      this.opened = !1, this.originalContext && !this.options.excludeContext ? (this.indentation--, this.pushSeparator(o.SeparatorType.ARRAY_END), this.indentation--, this.pushSeparator(o.SeparatorType.OBJECT_END)) : (this.indentation--, this.pushSeparator(o.SeparatorType.ARRAY_END));
    }

    endPredicate(t) {
      this.indentation--, this.pushSeparator(t ? o.SeparatorType.ARRAY_END_COMMA : o.SeparatorType.ARRAY_END), this.hadObjectForPredicate = !1, this.objectOptions = null, this.lastPredicate = null;
    }

    endSubject(t) {
      this.indentation--, this.pushSeparator(t ? o.SeparatorType.OBJECT_END_COMMA : o.SeparatorType.OBJECT_END), this.lastSubject = null;
    }

    endGraph(t) {
      this.indentation--, this.pushSeparator(o.SeparatorType.ARRAY_END), this.indentation--, this.pushSeparator(t ? o.SeparatorType.OBJECT_END_COMMA : o.SeparatorType.OBJECT_END), this.lastGraph = null;
    }

    pushSeparator(t) {
      this.pushIndented(t.label);
    }

    pushIndented(t) {
      const e = this.getIndentPrefix(); const r = t.split('\n').map(t => e + t).join('\n'); this.push(r), this.options.space && this.push('\n');
    }

    getIndentPrefix() {
      return this.options.space ? this.options.space.repeat(this.indentation) : '';
    }
  }e.JsonLdSerializer = a;
}, function(t, e, r) {
  'use strict'; const n = this && this.__awaiter || function(t, e, r, n) {
    return new (r || (r = Promise))((i, o) => {
      function s(t) {
        try {
          u(n.next(t));
        } catch (t) {
          o(t);
        }
      } function a(t) {
        try {
          u(n.throw(t));
        } catch (t) {
          o(t);
        }
      } function u(t) {
        t.done ?
          i(t.value) :
          new r((e) => {
            e(t.value);
          }).then(s, a);
      }u((n = n.apply(t, e || [])).next());
    });
  }; Object.defineProperty(e, '__esModule', { value: !0 }), r(11); const i = r(25); const o = r(12); class s {
    constructor(t) {
      t = t || {}, this.documentLoader = t.documentLoader || new o.FetchDocumentLoader(), this.documentCache = {}, this.validate = !t.skipValidation, this.expandContentTypeToBase = t.expandContentTypeToBase;
    }

    static getPrefix(t, e) {
      const r = t.indexOf(':'); if (r >= 0) {
        if (t.length > r + 1 && t.charAt(r + 1) === '/' && t.charAt(r + 2) === '/') {
          return null;
        } const n = t.slice(0, Math.max(0, r)); if (n === '_') {
          return null;
        } if (e[n]) {
          return n;
        }
      } return null;
    }

    static getContextValueId(t) {
      if (t === null || typeof t === 'string') {
        return t;
      } const e = t['@id']; return e || null;
    }

    static expandTerm(t, e, r) {
      const n = e[t]; if (n === null || n && n['@id'] === null) {
        return null;
      } if (n && r) {
        const e = this.getContextValueId(n); if (e && e !== t) {
          return e;
        }
      } const o = s.getPrefix(t, e); if (o) {
        const r = this.getContextValueId(e[o]); if (r) {
          return r + t.slice(o.length + 1);
        }
      } else {
        if (r && e['@vocab'] && t.charAt(0) !== '@' && !t.includes(':')) {
          return e['@vocab'] + t;
        } if (!r && e['@base'] && t.charAt(0) !== '@' && !t.includes(':')) {
          return i.resolve(t, e['@base']);
        }
      } return t;
    }

    static compactIri(t, e, r) {
      if (r && e['@vocab'] && t.startsWith(e['@vocab'])) {
        return t.slice(e['@vocab'].length);
      } if (!r && e['@base'] && t.startsWith(e['@base'])) {
        return t.slice(e['@base'].length);
      } for (const n in e) {
        const i = e[n]; if (i && !n.startsWith('@')) {
          const e = this.getContextValueId(i); if (t.startsWith(e)) {
            const i = t.slice(e.length); if (i) {
              return `${n}:${i}`;
            } if (r) {
              return n;
            }
          }
        }
      } return t;
    }

    static isPrefixValue(t) {
      return t && (typeof t === 'string' || t['@id'] || t['@type']);
    }

    static isValidIri(t) {
      return s.IRI_REGEX.test(t);
    }

    static idifyReverseTerms(t) {
      for (const e of Object.keys(t)) {
        const r = t[e]; if (r && typeof r === 'object' && r['@reverse'] && !r['@id']) {
          if (typeof r['@reverse'] !== 'string') {
            throw new TypeError(`Invalid @reverse value: '${r['@reverse']}'`);
          } r['@id'] = r['@reverse'], r['@reverse'] = !0;
        }
      } return t;
    }

    static expandPrefixedTerms(t, e) {
      for (const r of Object.keys(t)) {
        if (!s.EXPAND_KEYS_BLACKLIST.includes(r)) {
          if (r[0] === '@' && s.ALIAS_KEYS_BLACKLIST.includes(r)) {
            throw new Error(`Keywords can not be aliased to something else.\nTried mapping ${r} to ${t[r]}`);
          } for (;s.isPrefixValue(t[r]);) {
            const n = t[r]; let i = !1; if (typeof n === 'string') {
              t[r] = s.expandTerm(n, t, !0), i = i || n !== t[r];
            } else {
              const o = n['@id']; const a = n['@type']; o && (t[r]['@id'] = s.expandTerm(o, t, !0), i = i || o !== t[r]['@id']), a && a !== '@vocab' && (t[r]['@type'] = s.expandTerm(a, t, !0), e && a === t[r]['@type'] && (t[r]['@type'] = s.expandTerm(a, t, !1)), i = i || a !== t[r]['@type']);
            } if (!i) {
              break;
            }
          }
        }
      } return t;
    }

    static validate(t) {
      for (const e of Object.keys(t)) {
        const r = t[e]; const n = typeof r; if (e[0] === '@') {
          switch (e.slice(1)) {
            case 'vocab': if (r !== null && n !== 'string') {
              throw new Error(`Found an invalid @vocab IRI: ${r}`);
            } break; case 'base': if (r !== null && n !== 'string') {
              throw new Error(`Found an invalid @base IRI: ${t[e]}`);
            } break; case 'language': if (r !== null && n !== 'string') {
              throw new Error(`Found an invalid @language string: ${r}`);
            }
          }
        } if (r !== null) {
          switch (n) {
            case 'string': break; case 'object': if (!e.includes(':') && !('@id' in r) && (r['@type'] === '@id' ? !t['@base'] : !t['@vocab'])) {
              throw new Error(`Missing @id in context entry: '${e}': '${JSON.stringify(r)}'`);
            } for (const t of Object.keys(r)) {
                const n = r[t]; if (n) {
                  switch (t) {
                    case '@id': if (n[0] === '@' && n !== '@type' && n !== '@id') {
                      throw new Error(`Illegal keyword alias in term value, found: '${e}': '${JSON.stringify(r)}'`);
                    } break; case '@type': if (n !== '@id' && n !== '@vocab' && (n[0] === '_' || !s.isValidIri(n))) {
                      throw new Error(`A context @type must be an absolute IRI, found: '${e}': '${n}'`);
                    } break; case '@reverse': if (typeof n === 'string' && r['@id'] && r['@id'] !== n) {
                      throw new Error(`Found non-matching @id and @reverse term values in '${e}':'${n}' and '${r['@id']}'`);
                    } break; case '@container': if (n === '@list' && r['@reverse']) {
                      throw new Error(`Term value can not be @container: @list and @reverse at the same time on '${e}'`);
                    } if (!s.CONTAINERS.includes(n)) {
                        throw new Error(`Invalid term @container for '${e}' ('${n}'), must be one of ${s.CONTAINERS.join(', ')}`);
                      } break; case '@language': if (n !== null && typeof n !== 'string') {
                      throw new Error(`Found an invalid term @language string in: '${e}': '${JSON.stringify(r)}'`);
                    }
                  }
                }
              } break; default: throw new Error(`Found an invalid term value: '${e}': '${r}'`);
          }
        }
      }
    }

    parse(t, { baseIri: e, parentContext: r, external: o } = {}) {
      return n(this, void 0, void 0, function* () {
        if (t == null) {
          return e ? { '@base': e } : {};
        } if (typeof t === 'string') {
          if (!s.isValidIri(t) && (t = i.resolve(t, e), !s.isValidIri(t))) {
            throw new Error(`Invalid context IRI: ${t}`);
          } return this.parse(yield this.load(t), { baseIri: e, parentContext: r, external: !0 });
        } if (Array.isArray(t)) {
          return (yield Promise.all(t.map(t => typeof t === 'string' ? this.load(t) : t))).reduce((t, r) => t.then(t => this.parse(r, { baseIri: e, parentContext: t, external: o })), Promise.resolve(r));
        } if (typeof t === 'object') {
          if (t['@context']) {
            return yield this.parse(t['@context'], { baseIri: e, parentContext: r, external: o });
          } let n = {}; return o && delete t['@base'], !e || '@base' in n || (n['@base'] = e), n = { ...n, ...r, ...t }, s.idifyReverseTerms(n), s.expandPrefixedTerms(n, this.expandContentTypeToBase), this.validate && s.validate(n), n;
        } throw new Error(`Tried parsing a context that is not a string, array or object, but got ${t}`);
      });
    }

    load(t) {
      return n(this, void 0, void 0, function* () {
        const e = this.documentCache[t]; return e ? (Array.isArray(e) ? [ ...e ] : ({ ...e })) : this.documentCache[t] = (yield this.documentLoader.load(t))['@context'];
      });
    }
  }s.IRI_REGEX = /^([A-Za-z][\d+-.A-Za-z]*|_):[^ "<>[\\\]`{|}]*$/, s.EXPAND_KEYS_BLACKLIST = [ '@base', '@vocab', '@language' ], s.ALIAS_KEYS_BLACKLIST = [ '@container', '@graph', '@id', '@index', '@list', '@nest', '@none', '@prefix', '@reverse', '@set', '@type', '@value' ], s.CONTAINERS = [ '@list', '@set', '@index', '@language' ], e.ContextParser = s;
}, function(t, e, r) {
  'use strict'; r.r(e), r.d(e, 'Headers', () => f), r.d(e, 'Request', () => g), r.d(e, 'Response', () => v), r.d(e, 'DOMException', () => m), r.d(e, 'fetch', () => _); const n = { searchParams: 'URLSearchParams' in self, iterable: 'Symbol' in self && 'iterator' in Symbol, blob: 'FileReader' in self && 'Blob' in self && (function() {
    try {
      return new Blob(), !0;
    } catch {
      return !1;
    }
  }()), formData: 'FormData' in self, arrayBuffer: 'ArrayBuffer' in self }; if (n.arrayBuffer) {
    const i = new Set([ '[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]' ]); var o = ArrayBuffer.isView || function(t) {
      return t && i.has(Object.prototype.toString.call(t));
    };
  } function s(t) {
    if (typeof t !== 'string' && (t = String(t)), /[^\w#$%&'*+.^`|~\-]/i.test(t)) {
      throw new TypeError('Invalid character in header field name');
    } return t.toLowerCase();
  } function a(t) {
    return typeof t !== 'string' && (t = String(t)), t;
  } function u(t) {
    const e = { next() {
      const e = t.shift(); return { done: void 0 === e, value: e };
    } }; return n.iterable && (e[Symbol.iterator] = function() {
      return e;
    }), e;
  } function f(t) {
    this.map = {}, t instanceof f ?
      t.forEach(function(t, e) {
        this.append(e, t);
      }, this) :
        (Array.isArray(t) ?
          t.forEach(function(t) {
            this.append(t[0], t[1]);
          }, this) :
          t && Object.getOwnPropertyNames(t).forEach(function(e) {
            this.append(e, t[e]);
          }, this));
  } function h(t) {
    if (t.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    } t.bodyUsed = !0;
  } function l(t) {
    return new Promise((e, r) => {
      t.onload = function() {
        e(t.result);
      }, t.onerror = function() {
        r(t.error);
      };
    });
  } function c(t) {
    const e = new FileReader(); const r = l(e); return e.readAsArrayBuffer(t), r;
  } function d(t) {
    if (t.slice) {
      return [ ...t ];
    } const e = new Uint8Array(t.byteLength); return e.set(new Uint8Array(t)), e.buffer;
  } function p() {
    return this.bodyUsed = !1, this._initBody = function(t) {
      let e; this._bodyInit = t, t ? typeof t === 'string' ? this._bodyText = t : n.blob && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : n.formData && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : n.searchParams && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : n.arrayBuffer && n.blob && ((e = t) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = d(t.buffer), this._bodyInit = new Blob([ this._bodyArrayBuffer ])) : n.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || o(t)) ? this._bodyArrayBuffer = d(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = '', this.headers.get('content-type') || (typeof t === 'string' ? this.headers.set('content-type', 'text/plain;charset=UTF-8') : (this._bodyBlob && this._bodyBlob.type ? this.headers.set('content-type', this._bodyBlob.type) : n.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')));
    }, n.blob && (this.blob = function() {
      const t = h(this); if (t) {
        return t;
      } if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob);
      } if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([ this._bodyArrayBuffer ]));
      } if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob');
      } return Promise.resolve(new Blob([ this._bodyText ]));
    }, this.arrayBuffer = function() {
      return this._bodyArrayBuffer ? h(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(c);
    }), this.text = function() {
      let t; let e; let r; const n = h(this); if (n) {
        return n;
      } if (this._bodyBlob) {
        return t = this._bodyBlob, e = new FileReader(), r = l(e), e.readAsText(t), r;
      } if (this._bodyArrayBuffer) {
        return Promise.resolve(function(t) {
          for (var e = new Uint8Array(t), r = Array.from({ length: e.length }), n = 0; n < e.length; n++) {
            r[n] = String.fromCharCode(e[n]);
          } return r.join('');
        }(this._bodyArrayBuffer));
      } if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } return Promise.resolve(this._bodyText);
    }, n.formData && (this.formData = function() {
      return this.text().then(b);
    }), this.json = function() {
      return this.text().then(JSON.parse);
    }, this;
  }f.prototype.append = function(t, e) {
    t = s(t), e = a(e); const r = this.map[t]; this.map[t] = r ? `${r}, ${e}` : e;
  }, f.prototype.delete = function(t) {
    delete this.map[s(t)];
  }, f.prototype.get = function(t) {
    return t = s(t), this.has(t) ? this.map[t] : null;
  }, f.prototype.has = function(t) {
    return this.map.hasOwnProperty(s(t));
  }, f.prototype.set = function(t, e) {
    this.map[s(t)] = a(e);
  }, f.prototype.forEach = function(t, e) {
    for (const r in this.map) {
      this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
    }
  }, f.prototype.keys = function() {
    const t = []; return this.forEach((e, r) => {
      t.push(r);
    }), u(t);
  }, f.prototype.values = function() {
    const t = []; return this.forEach((e) => {
      t.push(e);
    }), u(t);
  }, f.prototype.entries = function() {
    const t = []; return this.forEach((e, r) => {
      t.push([ r, e ]);
    }), u(t);
  }, n.iterable && (f.prototype[Symbol.iterator] = f.prototype.entries); const y = new Set([ 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT' ]); function g(t, e) {
    let r; let n; let i = (e = e || {}).body; if (t instanceof g) {
      if (t.bodyUsed) {
        throw new TypeError('Already read');
      } this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new f(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, i || t._bodyInit == null || (i = t._bodyInit, t.bodyUsed = !0);
    } else {
      this.url = String(t);
    } if (this.credentials = e.credentials || this.credentials || 'same-origin', !e.headers && this.headers || (this.headers = new f(e.headers)), this.method = (r = e.method || this.method || 'GET', n = r.toUpperCase(), y.has(n) ? n : r), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, (this.method === 'GET' || this.method === 'HEAD') && i) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    } this._initBody(i);
  } function b(t) {
    const e = new FormData(); return t.trim().split('&').forEach((t) => {
      if (t) {
        const r = t.split('='); const n = r.shift().replaceAll('+', ' '); const i = r.join('=').replaceAll('+', ' '); e.append(decodeURIComponent(n), decodeURIComponent(i));
      }
    }), e;
  } function v(t, e) {
    e || (e = {}), this.type = 'default', this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = 'statusText' in e ? e.statusText : 'OK', this.headers = new f(e.headers), this.url = e.url || '', this._initBody(t);
  }g.prototype.clone = function() {
    return new g(this, { body: this._bodyInit });
  }, p.call(g.prototype), p.call(v.prototype), v.prototype.clone = function() {
    return new v(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new f(this.headers), url: this.url });
  }, v.error = function() {
    const t = new v(null, { status: 0, statusText: '' }); return t.type = 'error', t;
  }; const w = new Set([ 301, 302, 303, 307, 308 ]); v.redirect = function(t, e) {
    if (!w.has(e)) {
      throw new RangeError('Invalid status code');
    } return new v(null, { status: e, headers: { location: t }});
  }; var m = self.DOMException; try {
    new m();
  } catch {
    (m = function(t, e) {
      this.message = t, this.name = e; const r = new Error(t); this.stack = r.stack;
    }).prototype = Object.create(Error.prototype), m.prototype.constructor = m;
  } function _(t, e) {
    return new Promise((r, i) => {
      const o = new g(t, e); if (o.signal && o.signal.aborted) {
        return i(new m('Aborted', 'AbortError'));
      } const s = new XMLHttpRequest(); function a() {
        s.abort();
      }s.onload = function() {
        let t; let e; const n = { status: s.status, statusText: s.statusText, headers: (t = s.getAllResponseHeaders() || '', e = new f(), t.replaceAll(/\r?\n[\t ]+/g, ' ').split(/\r?\n/).forEach((t) => {
          const r = t.split(':'); const n = r.shift().trim(); if (n) {
            const i = r.join(':').trim(); e.append(n, i);
          }
        }), e) }; n.url = 'responseURL' in s ? s.responseURL : n.headers.get('X-Request-URL'); const i = 'response' in s ? s.response : s.responseText; r(new v(i, n));
      }, s.onerror = function() {
        i(new TypeError('Network request failed'));
      }, s.ontimeout = function() {
        i(new TypeError('Network request failed'));
      }, s.onabort = function() {
        i(new m('Aborted', 'AbortError'));
      }, s.open(o.method, o.url, !0), o.credentials === 'include' ? s.withCredentials = !0 : o.credentials === 'omit' && (s.withCredentials = !1), 'responseType' in s && n.blob && (s.responseType = 'blob'), o.headers.forEach((t, e) => {
        s.setRequestHeader(e, t);
      }), o.signal && (o.signal.addEventListener('abort', a), s.onreadystatechange = function() {
        s.readyState === 4 && o.signal.removeEventListener('abort', a);
      }), s.send(void 0 === o._bodyInit ? null : o._bodyInit);
    });
  }_.polyfill = !0, self.fetch || (self.fetch = _, self.Headers = f, self.Request = g, self.Response = v);
}, function(t, e, r) {
  'use strict'; Object.defineProperty(e, '__esModule', { value: !0 }), (function(t) {
    for (const r in t) {
      e.hasOwnProperty(r) || (e[r] = t[r]);
    }
  }(r(26)));
}, function(t, e, r) {
  'use strict'; function n(t) {
    const e = []; let r = 0; for (;r < t.length;) {
      switch (t[r]) {
        case '/': if (t[r + 1] === '.') {
          if (t[r + 2] === '.') {
            if (!o(t[r + 3])) {
              e.at(-1).push(t.slice(r)), r = t.length; break;
            }e.pop(), t[r + 3] || e.push([]), r += 3;
          } else {
            if (!o(t[r + 2])) {
              e.at(-1).push(t.slice(r)), r = t.length; break;
            }t[r + 2] || e.push([]), r += 2;
          }
        } else {
          e.push([]), r++;
        } break; case '#': case '?': e.length || e.push([]), e.at(-1).push(t.slice(r)), r = t.length; break; default: e.length || e.push([]), e.at(-1).push(t[r]), r++;
      }
    } return `/${e.map(t => t.join('')).join('/')}`;
  } function i(t, e) {
    let r = e + 1; e >= 0 ? t[e + 1] === '/' && t[e + 2] === '/' && (r = e + 3) : t[0] === '/' && t[1] === '/' && (r = 2); const i = t.indexOf('/', r); return i < 0 ? t : t.slice(0, Math.max(0, i)) + n(t.slice(i));
  } function o(t) {
    return !t || t === '#' || t === '?' || t === '/';
  }Object.defineProperty(e, '__esModule', { value: !0 }), e.resolve = function(t, e) {
    const r = (e = e || '').indexOf('#'); if (r > 0 && (e = e.slice(0, Math.max(0, r))), t.length === 0) {
      return e;
    } if (t.startsWith('?')) {
      const r = e.indexOf('?'); return r > 0 && (e = e.slice(0, Math.max(0, r))), e + t;
    } if (t.startsWith('#')) {
      return e + t;
    } if (e.length === 0) {
      return i(t, t.indexOf(':'));
    } const o = t.indexOf(':'); if (o >= 0) {
      return i(t, o);
    } const s = e.indexOf(':'); if (s < 0) {
      throw new Error(`Found invalid baseIRI '${e}' for value '${t}'`);
    } const a = e.slice(0, Math.max(0, s + 1)); if (t.indexOf('//') === 0) {
      return a + i(t, o);
    } let u; if (e.indexOf('//', s) !== s + 1) {
      return u = e.indexOf('/', s + 1), e.length > s + 1 ? `${e}/${i(t, o)}` : a + i(t, o);
    } if ((u = e.indexOf('/', s + 3)) < 0) {
      return e.length > s + 3 ? `${e}/${i(t, o)}` : a + i(t, o);
    } if (t.indexOf('/') === 0) {
      return e.slice(0, Math.max(0, u)) + n(t);
    } let f = e.slice(u); const h = f.lastIndexOf('/'); return h >= 0 && h < f.length - 1 && (f = f.slice(0, Math.max(0, h + 1)), t[0] === '.' && t[1] !== '.' && t[1] !== '/' && t[2] && (t = t.slice(1))), t = n(t = f + t), e.slice(0, Math.max(0, u)) + t;
  }, e.removeDotSegments = n, e.removeDotSegmentsOfPath = i;
}, function(t, e, r) {
  t.exports = i; const n = r(7).EventEmitter; function i() {
    n.call(this);
  }r(1)(i, n), i.Readable = r(8), i.Writable = r(37), i.Duplex = r(38), i.Transform = r(39), i.PassThrough = r(40), i.Stream = i, i.prototype.pipe = function(t, e) {
    const r = this; function i(e) {
      t.writable && !1 === t.write(e) && r.pause && r.pause();
    } function o() {
      r.readable && r.resume && r.resume();
    }r.on('data', i), t.on('drain', o), t._isStdio || e && !1 === e.end || (r.on('end', a), r.on('close', u)); let s = !1; function a() {
      s || (s = !0, t.end());
    } function u() {
      s || (s = !0, typeof t.destroy === 'function' && t.destroy());
    } function f(t) {
      if (h(), n.listenerCount(this, 'error') === 0) {
        throw t;
      }
    } function h() {
      r.removeListener('data', i), t.removeListener('drain', o), r.removeListener('end', a), r.removeListener('close', u), r.removeListener('error', f), t.removeListener('error', f), r.removeListener('end', h), r.removeListener('close', h), t.removeListener('close', h);
    } return r.on('error', f), t.on('error', f), r.on('end', h), r.on('close', h), t.on('close', h), t.emit('pipe', r), t;
  };
}, function(t, e, r) {
  'use strict'; e.byteLength = function(t) {
    const e = f(t); const r = e[0]; const n = e[1]; return 3 * (r + n) / 4 - n;
  }, e.toByteArray = function(t) {
    for (var e, r = f(t), n = r[0], s = r[1], a = new o(function(t, e, r) {
        return 3 * (e + r) / 4 - r;
      }(0, n, s)), u = 0, h = s > 0 ? n - 4 : n, l = 0; l < h; l += 4) {
      e = i[t.charCodeAt(l)] << 18 | i[t.charCodeAt(l + 1)] << 12 | i[t.charCodeAt(l + 2)] << 6 | i[t.charCodeAt(l + 3)], a[u++] = e >> 16 & 255, a[u++] = e >> 8 & 255, a[u++] = 255 & e;
    }s === 2 && (e = i[t.charCodeAt(l)] << 2 | i[t.charCodeAt(l + 1)] >> 4, a[u++] = 255 & e); s === 1 && (e = i[t.charCodeAt(l)] << 10 | i[t.charCodeAt(l + 1)] << 4 | i[t.charCodeAt(l + 2)] >> 2, a[u++] = e >> 8 & 255, a[u++] = 255 & e); return a;
  }, e.fromByteArray = function(t) {
    for (var e, r = t.length, i = r % 3, o = [], s = 0, a = r - i; s < a; s += 16383) {
      o.push(h(t, s, s + 16383 > a ? a : s + 16383));
    }i === 1 ? (e = t[r - 1], o.push(`${n[e >> 2] + n[e << 4 & 63]}==`)) : i === 2 && (e = (t[r - 2] << 8) + t[r - 1], o.push(`${n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63]}=`)); return o.join('');
  }; for (var n = [], i = [], o = typeof Uint8Array === 'undefined' ? Array : Uint8Array, s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', a = 0, u = s.length; a < u; ++a) {
    n[a] = s[a], i[s.charCodeAt(a)] = a;
  } function f(t) {
    const e = t.length; if (e % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4');
    } let r = t.indexOf('='); return r === -1 && (r = e), [ r, r === e ? 0 : 4 - r % 4 ];
  } function h(t, e, r) {
    for (var i, o, s = [], a = e; a < r; a += 3) {
      i = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
    } return s.join('');
  }i['-'.charCodeAt(0)] = 62, i['_'.charCodeAt(0)] = 63;
}, function(t, e) {
  e.read = function(t, e, r, n, i) {
    let o; let s; const a = 8 * i - n - 1; const u = (1 << a) - 1; const f = u >> 1; let h = -7; let l = r ? i - 1 : 0; const c = r ? -1 : 1; let d = t[e + l]; for (l += c, o = d & (1 << -h) - 1, d >>= -h, h += a; h > 0; o = 256 * o + t[e + l], l += c, h -= 8) {
      ;
    } for (s = o & (1 << -h) - 1, o >>= -h, h += n; h > 0; s = 256 * s + t[e + l], l += c, h -= 8) {
      ;
    } if (o === 0) {
      o = 1 - f;
    } else {
      if (o === u) {
        return s ? Number.NaN : 1 / 0 * (d ? -1 : 1);
      } s += 2 ** n, o -= f;
    } return (d ? -1 : 1) * s * 2 ** (o - n);
  }, e.write = function(t, e, r, n, i, o) {
    let s; let a; let u; let f = 8 * o - i - 1; const h = (1 << f) - 1; const l = h >> 1; const c = i === 23 ? 2 ** -24 - 2 ** -77 : 0; let d = n ? 0 : o - 1; const p = n ? 1 : -1; const y = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0; for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = 2 ** -s) < 1 && (s--, u *= 2), (e += s + l >= 1 ? c / u : c * 2 ** (1 - l)) * u >= 2 && (s++, u /= 2), s + l >= h ? (a = 0, s = h) : (s + l >= 1 ? (a = (e * u - 1) * 2 ** i, s += l) : (a = e * 2 ** (l - 1) * 2 ** i, s = 0))); i >= 8; t[r + d] = 255 & a, d += p, a /= 256, i -= 8) {
      ;
    } for (s = s << i | a, f += i; f > 0; t[r + d] = 255 & s, d += p, s /= 256, f -= 8) {
      ;
    }t[r + d - p] |= 128 * y;
  };
}, function(t, e) {}, function(t, e, r) {
  'use strict'; const n = r(6).Buffer; const i = r(32); t.exports = (function() {
    function t() {
      !(function(t, e) {
        if (!(t instanceof e)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }(this, t)), this.head = null, this.tail = null, this.length = 0;
    } return t.prototype.push = function(t) {
      const e = { data: t, next: null }; this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length;
    }, t.prototype.unshift = function(t) {
      const e = { data: t, next: this.head }; this.length === 0 && (this.tail = e), this.head = e, ++this.length;
    }, t.prototype.shift = function() {
      if (this.length !== 0) {
        const t = this.head.data; return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, t;
      }
    }, t.prototype.clear = function() {
      this.head = this.tail = null, this.length = 0;
    }, t.prototype.join = function(t) {
      if (this.length === 0) {
        return '';
      } for (var e = this.head, r = `${e.data}`; e = e.next;) {
        r += t + e.data;
      } return r;
    }, t.prototype.concat = function(t) {
      if (this.length === 0) {
        return n.alloc(0);
      } if (this.length === 1) {
        return this.head.data;
      } for (var e, r, i, o = n.allocUnsafe(t >>> 0), s = this.head, a = 0; s;) {
        e = s.data, r = o, i = a, e.copy(r, i), a += s.data.length, s = s.next;
      } return o;
    }, t;
  }()), i && i.inspect && i.inspect.custom && (t.exports.prototype[i.inspect.custom] = function() {
    const t = i.inspect({ length: this.length }); return `${this.constructor.name} ${t}`;
  });
}, function(t, e) {}, function(t, e, r) {
  (function(t) {
    const n = void 0 !== t && t || typeof self !== 'undefined' && self || window; const i = Function.prototype.apply; function o(t, e) {
      this._id = t, this._clearFn = e;
    }e.setTimeout = function() {
      return new o(i.call(setTimeout, n, arguments), clearTimeout);
    }, e.setInterval = function() {
      return new o(i.call(setInterval, n, arguments), clearInterval);
    }, e.clearTimeout = e.clearInterval = function(t) {
      t && t.close();
    }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
      this._clearFn.call(n, this._id);
    }, e.enroll = function(t, e) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
    }, e.unenroll = function(t) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
    }, e._unrefActive = e.active = function(t) {
      clearTimeout(t._idleTimeoutId); const e = t._idleTimeout; e >= 0 && (t._idleTimeoutId = setTimeout(() => {
        t._onTimeout && t._onTimeout();
      }, e));
    }, r(34), e.setImmediate = typeof self !== 'undefined' && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = typeof self !== 'undefined' && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate;
  }).call(this, r(2));
}, function(t, e, r) {
  (function(t, e) {
    !(function(t, r) {
      'use strict'; if (!t.setImmediate) {
        let n; let i; let o; let s; let a; let u = 1; var f = {}; var h = !1; const l = t.document; let c = Object.getPrototypeOf && Object.getPrototypeOf(t); c = c && c.setTimeout ? c : t, {}.toString.call(t.process) === '[object process]' ?
          n = function(t) {
            e.nextTick(() => {
              p(t);
            });
          } :
            (function() {
              if (t.postMessage && !t.importScripts) {
                let e = !0; const r = t.onmessage; return t.onmessage = function() {
                  e = !1;
                }, t.postMessage('', '*'), t.onmessage = r, e;
              }
            }()) ?
                (s = `setImmediate$${Math.random()}$`, a = function(e) {
                  e.source === t && typeof e.data === 'string' && e.data.indexOf(s) === 0 && p(Number(e.data.slice(s.length)));
                }, t.addEventListener ? t.addEventListener('message', a, !1) : t.attachEvent('onmessage', a), n = function(e) {
                  t.postMessage(s + e, '*');
                }) :
              t.MessageChannel ?
                  ((o = new MessageChannel()).port1.onmessage = function(t) {
                    p(t.data);
                  }, n = function(t) {
                    o.port2.postMessage(t);
                  }) :
                l && 'onreadystatechange' in l.createElement('script') ?
                    (i = l.documentElement, n = function(t) {
                      let e = l.createElement('script'); e.onreadystatechange = function() {
                        p(t), e.onreadystatechange = null, i.removeChild(e), e = null;
                      }, i.appendChild(e);
                    }) :
                  n = function(t) {
                    setTimeout(p, 0, t);
                  }, c.setImmediate = function(t) {
          typeof t !== 'function' && (t = new Function(`${t}`)); for (var e = Array.from({ length: arguments.length - 1 }), r = 0; r < e.length; r++) {
            e[r] = arguments[r + 1];
          } const i = { callback: t, args: e }; return f[u] = i, n(u), u++;
        }, c.clearImmediate = d;
      } function d(t) {
        delete f[t];
      } function p(t) {
        if (h) {
          setTimeout(p, 0, t);
        } else {
          const e = f[t]; if (e) {
            h = !0; try {
              !(function(t) {
                const e = t.callback; const n = t.args; switch (n.length) {
                  case 0: e(); break; case 1: e(n[0]); break; case 2: e(n[0], n[1]); break; case 3: e(n[0], n[1], n[2]); break; default: e.apply(r, n);
                }
              }(e));
            } finally {
              d(t), h = !1;
            }
          }
        }
      }
    }(typeof self === 'undefined' ? (void 0 === t ? this : t) : self));
  }).call(this, r(2), r(4));
}, function(t, e, r) {
  (function(e) {
    function r(t) {
      try {
        if (!e.localStorage) {
          return !1;
        }
      } catch {
        return !1;
      } const r = e.localStorage[t]; return r != null && String(r).toLowerCase() === 'true';
    }t.exports = function(t, e) {
      if (r('noDeprecation')) {
        return t;
      } let n = !1; return function() {
        if (!n) {
          if (r('throwDeprecation')) {
            throw new Error(e);
          } r('traceDeprecation') ? console.trace(e) : console.warn(e), n = !0;
        } return Reflect.apply(t, this, arguments);
      };
    };
  }).call(this, r(2));
}, function(t, e, r) {
  'use strict'; t.exports = o; const n = r(19); const i = r(3); function o(t) {
    if (!(this instanceof o)) {
      return new o(t);
    } n.call(this, t);
  }i.inherits = r(1), i.inherits(o, n), o.prototype._transform = function(t, e, r) {
    r(null, t);
  };
}, function(t, e, r) {
  t.exports = r(9);
}, function(t, e, r) {
  t.exports = r(0);
}, function(t, e, r) {
  t.exports = r(8).Transform;
}, function(t, e, r) {
  t.exports = r(8).PassThrough;
}, function(t, e, r) {
  'use strict'; Object.defineProperty(e, '__esModule', { value: !0 }); class n {
    constructor(t) {
      this.label = t;
    }
  }n.COMMA = new n(','), n.OBJECT_START = new n('{'), n.OBJECT_END = new n('}'), n.OBJECT_END_COMMA = new n('},'), n.ARRAY_START = new n('['), n.ARRAY_END = new n(']'), n.ARRAY_END_COMMA = new n('],'), n.GRAPH_FIELD = new n('"@graph": ['), n.CONTEXT_FIELD = new n('"@context":'), e.SeparatorType = n;
} ]));

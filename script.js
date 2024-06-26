/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var U_ = Object.create;
  var nn = Object.defineProperty;
  var W_ = Object.getOwnPropertyDescriptor;
  var H_ = Object.getOwnPropertyNames;
  var X_ = Object.getPrototypeOf,
    j_ = Object.prototype.hasOwnProperty;
  var pe = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Me = (e, t) => {
      for (var r in t) nn(e, r, { get: t[r], enumerable: !0 });
    },
    Cs = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of H_(t))
          !j_.call(e, i) &&
            i !== r &&
            nn(e, i, {
              get: () => t[i],
              enumerable: !(n = W_(t, i)) || n.enumerable,
            });
      return e;
    };
  var oe = (e, t, r) => (
      (r = e != null ? U_(X_(e)) : {}),
      Cs(
        t || !e || !e.__esModule
          ? nn(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    tt = (e) => Cs(nn({}, "__esModule", { value: !0 }), e);
  var Ri = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, y) {
        var _ = new D.Bare();
        return _.init(l, y);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (y) {
          return "-" + y.toLowerCase();
        });
      }
      function n(l) {
        var y = parseInt(l.slice(1), 16),
          _ = (y >> 16) & 255,
          A = (y >> 8) & 255,
          N = 255 & y;
        return [_, A, N];
      }
      function i(l, y, _) {
        return (
          "#" + ((1 << 24) | (l << 16) | (y << 8) | _).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, y) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof y + "] " + y);
      }
      function s(l, y, _) {
        f("Units do not match [" + l + "]: " + y + ", " + _);
      }
      function u(l, y, _) {
        if ((y !== void 0 && (_ = y), l === void 0)) return _;
        var A = _;
        return (
          Ue.test(l) || !ft.test(l)
            ? (A = parseInt(l, 10))
            : ft.test(l) && (A = 1e3 * parseFloat(l)),
          0 > A && (A = 0),
          A === A ? A : _
        );
      }
      function f(l) {
        ne.debug && window && window.console.warn(l);
      }
      function v(l) {
        for (var y = -1, _ = l ? l.length : 0, A = []; ++y < _; ) {
          var N = l[y];
          N && A.push(N);
        }
        return A;
      }
      var g = (function (l, y, _) {
          function A(J) {
            return typeof J == "object";
          }
          function N(J) {
            return typeof J == "function";
          }
          function P() {}
          function K(J, de) {
            function k() {
              var Re = new te();
              return N(Re.init) && Re.init.apply(Re, arguments), Re;
            }
            function te() {}
            de === _ && ((de = J), (J = Object)), (k.Bare = te);
            var re,
              Ee = (P[l] = J[l]),
              et = (te[l] = k[l] = new P());
            return (
              (et.constructor = k),
              (k.mixin = function (Re) {
                return (te[l] = k[l] = K(k, Re)[l]), k;
              }),
              (k.open = function (Re) {
                if (
                  ((re = {}),
                  N(Re) ? (re = Re.call(k, et, Ee, k, J)) : A(Re) && (re = Re),
                  A(re))
                )
                  for (var Er in re) y.call(re, Er) && (et[Er] = re[Er]);
                return N(et.init) || (et.init = J), k;
              }),
              k.open(de)
            );
          }
          return K;
        })("prototype", {}.hasOwnProperty),
        h = {
          ease: [
            "ease",
            function (l, y, _, A) {
              var N = (l /= A) * l,
                P = N * l;
              return (
                y +
                _ * (-2.75 * P * N + 11 * N * N + -15.5 * P + 8 * N + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, y, _, A) {
              var N = (l /= A) * l,
                P = N * l;
              return y + _ * (-1 * P * N + 3 * N * N + -3 * P + 2 * N);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, y, _, A) {
              var N = (l /= A) * l,
                P = N * l;
              return (
                y +
                _ * (0.3 * P * N + -1.6 * N * N + 2.2 * P + -1.8 * N + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, y, _, A) {
              var N = (l /= A) * l,
                P = N * l;
              return y + _ * (2 * P * N + -5 * N * N + 2 * P + 2 * N);
            },
          ],
          linear: [
            "linear",
            function (l, y, _, A) {
              return (_ * l) / A + y;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, y, _, A) {
              return _ * (l /= A) * l + y;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, y, _, A) {
              return -_ * (l /= A) * (l - 2) + y;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, y, _, A) {
              return (l /= A / 2) < 1
                ? (_ / 2) * l * l + y
                : (-_ / 2) * (--l * (l - 2) - 1) + y;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, y, _, A) {
              return _ * (l /= A) * l * l + y;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, y, _, A) {
              return _ * ((l = l / A - 1) * l * l + 1) + y;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, y, _, A) {
              return (l /= A / 2) < 1
                ? (_ / 2) * l * l * l + y
                : (_ / 2) * ((l -= 2) * l * l + 2) + y;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, y, _, A) {
              return _ * (l /= A) * l * l * l + y;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, y, _, A) {
              return -_ * ((l = l / A - 1) * l * l * l - 1) + y;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, y, _, A) {
              return (l /= A / 2) < 1
                ? (_ / 2) * l * l * l * l + y
                : (-_ / 2) * ((l -= 2) * l * l * l - 2) + y;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, y, _, A) {
              return _ * (l /= A) * l * l * l * l + y;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, y, _, A) {
              return _ * ((l = l / A - 1) * l * l * l * l + 1) + y;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, y, _, A) {
              return (l /= A / 2) < 1
                ? (_ / 2) * l * l * l * l * l + y
                : (_ / 2) * ((l -= 2) * l * l * l * l + 2) + y;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, y, _, A) {
              return -_ * Math.cos((l / A) * (Math.PI / 2)) + _ + y;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, y, _, A) {
              return _ * Math.sin((l / A) * (Math.PI / 2)) + y;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, y, _, A) {
              return (-_ / 2) * (Math.cos((Math.PI * l) / A) - 1) + y;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, y, _, A) {
              return l === 0 ? y : _ * Math.pow(2, 10 * (l / A - 1)) + y;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, y, _, A) {
              return l === A
                ? y + _
                : _ * (-Math.pow(2, (-10 * l) / A) + 1) + y;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, y, _, A) {
              return l === 0
                ? y
                : l === A
                ? y + _
                : (l /= A / 2) < 1
                ? (_ / 2) * Math.pow(2, 10 * (l - 1)) + y
                : (_ / 2) * (-Math.pow(2, -10 * --l) + 2) + y;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, y, _, A) {
              return -_ * (Math.sqrt(1 - (l /= A) * l) - 1) + y;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, y, _, A) {
              return _ * Math.sqrt(1 - (l = l / A - 1) * l) + y;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, y, _, A) {
              return (l /= A / 2) < 1
                ? (-_ / 2) * (Math.sqrt(1 - l * l) - 1) + y
                : (_ / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + y;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, y, _, A, N) {
              return (
                N === void 0 && (N = 1.70158),
                _ * (l /= A) * l * ((N + 1) * l - N) + y
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, y, _, A, N) {
              return (
                N === void 0 && (N = 1.70158),
                _ * ((l = l / A - 1) * l * ((N + 1) * l + N) + 1) + y
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, y, _, A, N) {
              return (
                N === void 0 && (N = 1.70158),
                (l /= A / 2) < 1
                  ? (_ / 2) * l * l * (((N *= 1.525) + 1) * l - N) + y
                  : (_ / 2) *
                      ((l -= 2) * l * (((N *= 1.525) + 1) * l + N) + 2) +
                    y
              );
            },
          ],
        },
        E = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        w = document,
        b = window,
        x = "bkwld-tram",
        m = /[\-\.0-9]/g,
        S = /[A-Z]/,
        O = "number",
        L = /^(rgb|#)/,
        q = /(em|cm|mm|in|pt|pc|px)$/,
        C = /(em|cm|mm|in|pt|pc|px|%)$/,
        U = /(deg|rad|turn)$/,
        W = "unitless",
        X = /(all|none) 0s ease 0s/,
        z = /^(width|height)$/,
        Q = " ",
        M = w.createElement("a"),
        T = ["Webkit", "Moz", "O", "ms"],
        F = ["-webkit-", "-moz-", "-o-", "-ms-"],
        H = function (l) {
          if (l in M.style) return { dom: l, css: l };
          var y,
            _,
            A = "",
            N = l.split("-");
          for (y = 0; y < N.length; y++)
            A += N[y].charAt(0).toUpperCase() + N[y].slice(1);
          for (y = 0; y < T.length; y++)
            if (((_ = T[y] + A), _ in M.style))
              return { dom: _, css: F[y] + l };
        },
        B = (t.support = {
          bind: Function.prototype.bind,
          transform: H("transform"),
          transition: H("transition"),
          backface: H("backface-visibility"),
          timing: H("transition-timing-function"),
        });
      if (B.transition) {
        var $ = B.timing.dom;
        if (((M.style[$] = h["ease-in-back"][0]), !M.style[$]))
          for (var Z in E) h[Z][0] = E[Z];
      }
      var ae = (t.frame = (function () {
          var l =
            b.requestAnimationFrame ||
            b.webkitRequestAnimationFrame ||
            b.mozRequestAnimationFrame ||
            b.oRequestAnimationFrame ||
            b.msRequestAnimationFrame;
          return l && B.bind
            ? l.bind(b)
            : function (y) {
                b.setTimeout(y, 16);
              };
        })()),
        _e = (t.now = (function () {
          var l = b.performance,
            y = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return y && B.bind
            ? y.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        p = g(function (l) {
          function y(Y, ie) {
            var ge = v(("" + Y).split(Q)),
              ce = ge[0];
            ie = ie || {};
            var Le = V[ce];
            if (!Le) return f("Unsupported property: " + ce);
            if (!ie.weak || !this.props[ce]) {
              var He = Le[0],
                Fe = this.props[ce];
              return (
                Fe || (Fe = this.props[ce] = new He.Bare()),
                Fe.init(this.$el, ge, Le, ie),
                Fe
              );
            }
          }
          function _(Y, ie, ge) {
            if (Y) {
              var ce = typeof Y;
              if (
                (ie ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                ce == "number" && ie)
              )
                return (
                  (this.timer = new Ce({
                    duration: Y,
                    context: this,
                    complete: P,
                  })),
                  void (this.active = !0)
                );
              if (ce == "string" && ie) {
                switch (Y) {
                  case "hide":
                    k.call(this);
                    break;
                  case "stop":
                    K.call(this);
                    break;
                  case "redraw":
                    te.call(this);
                    break;
                  default:
                    y.call(this, Y, ge && ge[1]);
                }
                return P.call(this);
              }
              if (ce == "function") return void Y.call(this, this);
              if (ce == "object") {
                var Le = 0;
                et.call(
                  this,
                  Y,
                  function (me, B_) {
                    me.span > Le && (Le = me.span), me.stop(), me.animate(B_);
                  },
                  function (me) {
                    "wait" in me && (Le = u(me.wait, 0));
                  }
                ),
                  Ee.call(this),
                  Le > 0 &&
                    ((this.timer = new Ce({ duration: Le, context: this })),
                    (this.active = !0),
                    ie && (this.timer.complete = P));
                var He = this,
                  Fe = !1,
                  rn = {};
                ae(function () {
                  et.call(He, Y, function (me) {
                    me.active && ((Fe = !0), (rn[me.name] = me.nextStyle));
                  }),
                    Fe && He.$el.css(rn);
                });
              }
            }
          }
          function A(Y) {
            (Y = u(Y, 0)),
              this.active
                ? this.queue.push({ options: Y })
                : ((this.timer = new Ce({
                    duration: Y,
                    context: this,
                    complete: P,
                  })),
                  (this.active = !0));
          }
          function N(Y) {
            return this.active
              ? (this.queue.push({ options: Y, args: arguments }),
                void (this.timer.complete = P))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function P() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var Y = this.queue.shift();
              _.call(this, Y.options, !0, Y.args);
            }
          }
          function K(Y) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ie;
            typeof Y == "string"
              ? ((ie = {}), (ie[Y] = 1))
              : (ie = typeof Y == "object" && Y != null ? Y : this.props),
              et.call(this, ie, Re),
              Ee.call(this);
          }
          function J(Y) {
            K.call(this, Y), et.call(this, Y, Er, V_);
          }
          function de(Y) {
            typeof Y != "string" && (Y = "block"), (this.el.style.display = Y);
          }
          function k() {
            K.call(this), (this.el.style.display = "none");
          }
          function te() {
            this.el.offsetHeight;
          }
          function re() {
            K.call(this), e.removeData(this.el, x), (this.$el = this.el = null);
          }
          function Ee() {
            var Y,
              ie,
              ge = [];
            this.upstream && ge.push(this.upstream);
            for (Y in this.props)
              (ie = this.props[Y]), ie.active && ge.push(ie.string);
            (ge = ge.join(",")),
              this.style !== ge &&
                ((this.style = ge), (this.el.style[B.transition.dom] = ge));
          }
          function et(Y, ie, ge) {
            var ce,
              Le,
              He,
              Fe,
              rn = ie !== Re,
              me = {};
            for (ce in Y)
              (He = Y[ce]),
                ce in ue
                  ? (me.transform || (me.transform = {}),
                    (me.transform[ce] = He))
                  : (S.test(ce) && (ce = r(ce)),
                    ce in V ? (me[ce] = He) : (Fe || (Fe = {}), (Fe[ce] = He)));
            for (ce in me) {
              if (((He = me[ce]), (Le = this.props[ce]), !Le)) {
                if (!rn) continue;
                Le = y.call(this, ce);
              }
              ie.call(this, Le, He);
            }
            ge && Fe && ge.call(this, Fe);
          }
          function Re(Y) {
            Y.stop();
          }
          function Er(Y, ie) {
            Y.set(ie);
          }
          function V_(Y) {
            this.$el.css(Y);
          }
          function We(Y, ie) {
            l[Y] = function () {
              return this.children
                ? k_.call(this, ie, arguments)
                : (this.el && ie.apply(this, arguments), this);
            };
          }
          function k_(Y, ie) {
            var ge,
              ce = this.children.length;
            for (ge = 0; ce > ge; ge++) Y.apply(this.children[ge], ie);
            return this;
          }
          (l.init = function (Y) {
            if (
              ((this.$el = e(Y)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              ne.keepInherited && !ne.fallback)
            ) {
              var ie = G(this.el, "transition");
              ie && !X.test(ie) && (this.upstream = ie);
            }
            B.backface &&
              ne.hideBackface &&
              d(this.el, B.backface.css, "hidden");
          }),
            We("add", y),
            We("start", _),
            We("wait", A),
            We("then", N),
            We("next", P),
            We("stop", K),
            We("set", J),
            We("show", de),
            We("hide", k),
            We("redraw", te),
            We("destroy", re);
        }),
        D = g(p, function (l) {
          function y(_, A) {
            var N = e.data(_, x) || e.data(_, x, new p.Bare());
            return N.el || N.init(_), A ? N.start(A) : N;
          }
          l.init = function (_, A) {
            var N = e(_);
            if (!N.length) return this;
            if (N.length === 1) return y(N[0], A);
            var P = [];
            return (
              N.each(function (K, J) {
                P.push(y(J, A));
              }),
              (this.children = P),
              this
            );
          };
        }),
        R = g(function (l) {
          function y() {
            var P = this.get();
            this.update("auto");
            var K = this.get();
            return this.update(P), K;
          }
          function _(P, K, J) {
            return K !== void 0 && (J = K), P in h ? P : J;
          }
          function A(P) {
            var K = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(P);
            return (K ? i(K[1], K[2], K[3]) : P).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var N = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (P, K, J, de) {
            (this.$el = P), (this.el = P[0]);
            var k = K[0];
            J[2] && (k = J[2]),
              j[k] && (k = j[k]),
              (this.name = k),
              (this.type = J[1]),
              (this.duration = u(K[1], this.duration, N.duration)),
              (this.ease = _(K[2], this.ease, N.ease)),
              (this.delay = u(K[3], this.delay, N.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = z.test(this.name)),
              (this.unit = de.unit || this.unit || ne.defaultUnit),
              (this.angle = de.angle || this.angle || ne.defaultAngle),
              ne.fallback || de.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    Q +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? Q + h[this.ease][0] : "") +
                    (this.delay ? Q + this.delay + "ms" : "")));
          }),
            (l.set = function (P) {
              (P = this.convert(P, this.type)), this.update(P), this.redraw();
            }),
            (l.transition = function (P) {
              (this.active = !0),
                (P = this.convert(P, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  P == "auto" && (P = y.call(this))),
                (this.nextStyle = P);
            }),
            (l.fallback = function (P) {
              var K =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (P = this.convert(P, this.type)),
                this.auto &&
                  (K == "auto" && (K = this.convert(this.get(), this.type)),
                  P == "auto" && (P = y.call(this))),
                (this.tween = new ye({
                  from: K,
                  to: P,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return G(this.el, this.name);
            }),
            (l.update = function (P) {
              d(this.el, this.name, P);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                d(this.el, this.name, this.get()));
              var P = this.tween;
              P && P.context && P.destroy();
            }),
            (l.convert = function (P, K) {
              if (P == "auto" && this.auto) return P;
              var J,
                de = typeof P == "number",
                k = typeof P == "string";
              switch (K) {
                case O:
                  if (de) return P;
                  if (k && P.replace(m, "") === "") return +P;
                  J = "number(unitless)";
                  break;
                case L:
                  if (k) {
                    if (P === "" && this.original) return this.original;
                    if (K.test(P))
                      return P.charAt(0) == "#" && P.length == 7 ? P : A(P);
                  }
                  J = "hex or rgb string";
                  break;
                case q:
                  if (de) return P + this.unit;
                  if (k && K.test(P)) return P;
                  J = "number(px) or string(unit)";
                  break;
                case C:
                  if (de) return P + this.unit;
                  if (k && K.test(P)) return P;
                  J = "number(px) or string(unit or %)";
                  break;
                case U:
                  if (de) return P + this.angle;
                  if (k && K.test(P)) return P;
                  J = "number(deg) or string(angle)";
                  break;
                case W:
                  if (de || (k && C.test(P))) return P;
                  J = "number(unitless) or string(unit or %)";
              }
              return a(J, P), P;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        I = g(R, function (l, y) {
          l.init = function () {
            y.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), L));
          };
        }),
        ee = g(R, function (l, y) {
          (l.init = function () {
            y.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (_) {
              this.$el[this.name](_);
            });
        }),
        se = g(R, function (l, y) {
          function _(A, N) {
            var P, K, J, de, k;
            for (P in A)
              (de = ue[P]),
                (J = de[0]),
                (K = de[1] || P),
                (k = this.convert(A[P], J)),
                N.call(this, K, k, J);
          }
          (l.init = function () {
            y.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                ue.perspective &&
                  ne.perspective &&
                  ((this.current.perspective = ne.perspective),
                  d(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (A) {
              _.call(this, A, function (N, P) {
                this.current[N] = P;
              }),
                d(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (A) {
              var N = this.values(A);
              this.tween = new xe({
                current: this.current,
                values: N,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var P,
                K = {};
              for (P in this.current) K[P] = P in N ? N[P] : this.current[P];
              (this.active = !0), (this.nextStyle = this.style(K));
            }),
            (l.fallback = function (A) {
              var N = this.values(A);
              this.tween = new xe({
                current: this.current,
                values: N,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              d(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (A) {
              var N,
                P = "";
              for (N in A) P += N + "(" + A[N] + ") ";
              return P;
            }),
            (l.values = function (A) {
              var N,
                P = {};
              return (
                _.call(this, A, function (K, J, de) {
                  (P[K] = J),
                    this.current[K] === void 0 &&
                      ((N = 0),
                      ~K.indexOf("scale") && (N = 1),
                      (this.current[K] = this.convert(N, de)));
                }),
                P
              );
            });
        }),
        ye = g(function (l) {
          function y(k) {
            J.push(k) === 1 && ae(_);
          }
          function _() {
            var k,
              te,
              re,
              Ee = J.length;
            if (Ee)
              for (ae(_), te = _e(), k = Ee; k--; )
                (re = J[k]), re && re.render(te);
          }
          function A(k) {
            var te,
              re = e.inArray(k, J);
            re >= 0 &&
              ((te = J.slice(re + 1)),
              (J.length = re),
              te.length && (J = J.concat(te)));
          }
          function N(k) {
            return Math.round(k * de) / de;
          }
          function P(k, te, re) {
            return i(
              k[0] + re * (te[0] - k[0]),
              k[1] + re * (te[1] - k[1]),
              k[2] + re * (te[2] - k[2])
            );
          }
          var K = { ease: h.ease[1], from: 0, to: 1 };
          (l.init = function (k) {
            (this.duration = k.duration || 0), (this.delay = k.delay || 0);
            var te = k.ease || K.ease;
            h[te] && (te = h[te][1]),
              typeof te != "function" && (te = K.ease),
              (this.ease = te),
              (this.update = k.update || o),
              (this.complete = k.complete || o),
              (this.context = k.context || this),
              (this.name = k.name);
            var re = k.from,
              Ee = k.to;
            re === void 0 && (re = K.from),
              Ee === void 0 && (Ee = K.to),
              (this.unit = k.unit || ""),
              typeof re == "number" && typeof Ee == "number"
                ? ((this.begin = re), (this.change = Ee - re))
                : this.format(Ee, re),
              (this.value = this.begin + this.unit),
              (this.start = _e()),
              k.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = _e()),
                (this.active = !0),
                y(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), A(this));
            }),
            (l.render = function (k) {
              var te,
                re = k - this.start;
              if (this.delay) {
                if (re <= this.delay) return;
                re -= this.delay;
              }
              if (re < this.duration) {
                var Ee = this.ease(re, 0, 1, this.duration);
                return (
                  (te = this.startRGB
                    ? P(this.startRGB, this.endRGB, Ee)
                    : N(this.begin + Ee * this.change)),
                  (this.value = te + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (te = this.endHex || this.begin + this.change),
                (this.value = te + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (k, te) {
              if (((te += ""), (k += ""), k.charAt(0) == "#"))
                return (
                  (this.startRGB = n(te)),
                  (this.endRGB = n(k)),
                  (this.endHex = k),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var re = te.replace(m, ""),
                  Ee = k.replace(m, "");
                re !== Ee && s("tween", te, k), (this.unit = re);
              }
              (te = parseFloat(te)),
                (k = parseFloat(k)),
                (this.begin = this.value = te),
                (this.change = k - te);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var J = [],
            de = 1e3;
        }),
        Ce = g(ye, function (l) {
          (l.init = function (y) {
            (this.duration = y.duration || 0),
              (this.complete = y.complete || o),
              (this.context = y.context),
              this.play();
          }),
            (l.render = function (y) {
              var _ = y - this.start;
              _ < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        xe = g(ye, function (l, y) {
          (l.init = function (_) {
            (this.context = _.context),
              (this.update = _.update),
              (this.tweens = []),
              (this.current = _.current);
            var A, N;
            for (A in _.values)
              (N = _.values[A]),
                this.current[A] !== N &&
                  this.tweens.push(
                    new ye({
                      name: A,
                      from: this.current[A],
                      to: N,
                      duration: _.duration,
                      delay: _.delay,
                      ease: _.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (_) {
              var A,
                N,
                P = this.tweens.length,
                K = !1;
              for (A = P; A--; )
                (N = this.tweens[A]),
                  N.context &&
                    (N.render(_), (this.current[N.name] = N.value), (K = !0));
              return K
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((y.destroy.call(this), this.tweens)) {
                var _,
                  A = this.tweens.length;
                for (_ = A; _--; ) this.tweens[_].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ne = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !B.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!B.transition) return (ne.fallback = !0);
        ne.agentTests.push("(" + l + ")");
        var y = new RegExp(ne.agentTests.join("|"), "i");
        ne.fallback = y.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new ye(l);
        }),
        (t.delay = function (l, y, _) {
          return new Ce({ complete: y, duration: l, context: _ });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var d = e.style,
        G = e.css,
        j = { transform: B.transform && B.transform.css },
        V = {
          color: [I, L],
          background: [I, L, "background-color"],
          "outline-color": [I, L],
          "border-color": [I, L],
          "border-top-color": [I, L],
          "border-right-color": [I, L],
          "border-bottom-color": [I, L],
          "border-left-color": [I, L],
          "border-width": [R, q],
          "border-top-width": [R, q],
          "border-right-width": [R, q],
          "border-bottom-width": [R, q],
          "border-left-width": [R, q],
          "border-spacing": [R, q],
          "letter-spacing": [R, q],
          margin: [R, q],
          "margin-top": [R, q],
          "margin-right": [R, q],
          "margin-bottom": [R, q],
          "margin-left": [R, q],
          padding: [R, q],
          "padding-top": [R, q],
          "padding-right": [R, q],
          "padding-bottom": [R, q],
          "padding-left": [R, q],
          "outline-width": [R, q],
          opacity: [R, O],
          top: [R, C],
          right: [R, C],
          bottom: [R, C],
          left: [R, C],
          "font-size": [R, C],
          "text-indent": [R, C],
          "word-spacing": [R, C],
          width: [R, C],
          "min-width": [R, C],
          "max-width": [R, C],
          height: [R, C],
          "min-height": [R, C],
          "max-height": [R, C],
          "line-height": [R, W],
          "scroll-top": [ee, O, "scrollTop"],
          "scroll-left": [ee, O, "scrollLeft"],
        },
        ue = {};
      B.transform &&
        ((V.transform = [se]),
        (ue = {
          x: [C, "translateX"],
          y: [C, "translateY"],
          rotate: [U],
          rotateX: [U],
          rotateY: [U],
          scale: [O],
          scaleX: [O],
          scaleY: [O],
          skew: [U],
          skewX: [U],
          skewY: [U],
        })),
        B.transform &&
          B.backface &&
          ((ue.z = [C, "translateZ"]),
          (ue.rotateZ = [U]),
          (ue.scaleZ = [O]),
          (ue.perspective = [q]));
      var Ue = /ms/,
        ft = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Ls = c((PB, Rs) => {
    "use strict";
    var z_ = window.$,
      K_ = Ri() && z_.tram;
    Rs.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        f = n.hasOwnProperty,
        v = r.forEach,
        g = r.map,
        h = r.reduce,
        E = r.reduceRight,
        w = r.filter,
        b = r.every,
        x = r.some,
        m = r.indexOf,
        S = r.lastIndexOf,
        O = Array.isArray,
        L = Object.keys,
        q = i.bind,
        C =
          (e.each =
          e.forEach =
            function (T, F, H) {
              if (T == null) return T;
              if (v && T.forEach === v) T.forEach(F, H);
              else if (T.length === +T.length) {
                for (var B = 0, $ = T.length; B < $; B++)
                  if (F.call(H, T[B], B, T) === t) return;
              } else
                for (var Z = e.keys(T), B = 0, $ = Z.length; B < $; B++)
                  if (F.call(H, T[Z[B]], Z[B], T) === t) return;
              return T;
            });
      (e.map = e.collect =
        function (T, F, H) {
          var B = [];
          return T == null
            ? B
            : g && T.map === g
            ? T.map(F, H)
            : (C(T, function ($, Z, ae) {
                B.push(F.call(H, $, Z, ae));
              }),
              B);
        }),
        (e.find = e.detect =
          function (T, F, H) {
            var B;
            return (
              U(T, function ($, Z, ae) {
                if (F.call(H, $, Z, ae)) return (B = $), !0;
              }),
              B
            );
          }),
        (e.filter = e.select =
          function (T, F, H) {
            var B = [];
            return T == null
              ? B
              : w && T.filter === w
              ? T.filter(F, H)
              : (C(T, function ($, Z, ae) {
                  F.call(H, $, Z, ae) && B.push($);
                }),
                B);
          });
      var U =
        (e.some =
        e.any =
          function (T, F, H) {
            F || (F = e.identity);
            var B = !1;
            return T == null
              ? B
              : x && T.some === x
              ? T.some(F, H)
              : (C(T, function ($, Z, ae) {
                  if (B || (B = F.call(H, $, Z, ae))) return t;
                }),
                !!B);
          });
      (e.contains = e.include =
        function (T, F) {
          return T == null
            ? !1
            : m && T.indexOf === m
            ? T.indexOf(F) != -1
            : U(T, function (H) {
                return H === F;
              });
        }),
        (e.delay = function (T, F) {
          var H = a.call(arguments, 2);
          return setTimeout(function () {
            return T.apply(null, H);
          }, F);
        }),
        (e.defer = function (T) {
          return e.delay.apply(e, [T, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (T) {
          var F, H, B;
          return function () {
            F ||
              ((F = !0),
              (H = arguments),
              (B = this),
              K_.frame(function () {
                (F = !1), T.apply(B, H);
              }));
          };
        }),
        (e.debounce = function (T, F, H) {
          var B,
            $,
            Z,
            ae,
            _e,
            p = function () {
              var D = e.now() - ae;
              D < F
                ? (B = setTimeout(p, F - D))
                : ((B = null), H || ((_e = T.apply(Z, $)), (Z = $ = null)));
            };
          return function () {
            (Z = this), ($ = arguments), (ae = e.now());
            var D = H && !B;
            return (
              B || (B = setTimeout(p, F)),
              D && ((_e = T.apply(Z, $)), (Z = $ = null)),
              _e
            );
          };
        }),
        (e.defaults = function (T) {
          if (!e.isObject(T)) return T;
          for (var F = 1, H = arguments.length; F < H; F++) {
            var B = arguments[F];
            for (var $ in B) T[$] === void 0 && (T[$] = B[$]);
          }
          return T;
        }),
        (e.keys = function (T) {
          if (!e.isObject(T)) return [];
          if (L) return L(T);
          var F = [];
          for (var H in T) e.has(T, H) && F.push(H);
          return F;
        }),
        (e.has = function (T, F) {
          return f.call(T, F);
        }),
        (e.isObject = function (T) {
          return T === Object(T);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var W = /(.)^/,
        X = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        z = /\\|'|\r|\n|\u2028|\u2029/g,
        Q = function (T) {
          return "\\" + X[T];
        },
        M = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (T, F, H) {
          !F && H && (F = H), (F = e.defaults({}, F, e.templateSettings));
          var B = RegExp(
              [
                (F.escape || W).source,
                (F.interpolate || W).source,
                (F.evaluate || W).source,
              ].join("|") + "|$",
              "g"
            ),
            $ = 0,
            Z = "__p+='";
          T.replace(B, function (D, R, I, ee, se) {
            return (
              (Z += T.slice($, se).replace(z, Q)),
              ($ = se + D.length),
              R
                ? (Z +=
                    `'+
((__t=(` +
                    R +
                    `))==null?'':_.escape(__t))+
'`)
                : I
                ? (Z +=
                    `'+
((__t=(` +
                    I +
                    `))==null?'':__t)+
'`)
                : ee &&
                  (Z +=
                    `';
` +
                    ee +
                    `
__p+='`),
              D
            );
          }),
            (Z += `';
`);
          var ae = F.variable;
          if (ae) {
            if (!M.test(ae))
              throw new Error("variable is not a bare identifier: " + ae);
          } else
            (Z =
              `with(obj||{}){
` +
              Z +
              `}
`),
              (ae = "obj");
          Z =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            Z +
            `return __p;
`;
          var _e;
          try {
            _e = new Function(F.variable || "obj", "_", Z);
          } catch (D) {
            throw ((D.source = Z), D);
          }
          var p = function (D) {
            return _e.call(this, D, e);
          };
          return (
            (p.source =
              "function(" +
              ae +
              `){
` +
              Z +
              "}"),
            p
          );
        }),
        e
      );
    })();
  });
  var ze = c((qB, Vs) => {
    "use strict";
    var le = {},
      kt = {},
      Bt = [],
      Ni = window.Webflow || [],
      mt = window.jQuery,
      je = mt(window),
      Y_ = mt(document),
      rt = mt.isFunction,
      Xe = (le._ = Ls()),
      Ps = (le.tram = Ri() && mt.tram),
      an = !1,
      Pi = !1;
    Ps.config.hideBackface = !1;
    Ps.config.keepInherited = !0;
    le.define = function (e, t, r) {
      kt[e] && Fs(kt[e]);
      var n = (kt[e] = t(mt, Xe, r) || {});
      return qs(n), n;
    };
    le.require = function (e) {
      return kt[e];
    };
    function qs(e) {
      le.env() &&
        (rt(e.design) && je.on("__wf_design", e.design),
        rt(e.preview) && je.on("__wf_preview", e.preview)),
        rt(e.destroy) && je.on("__wf_destroy", e.destroy),
        e.ready && rt(e.ready) && $_(e);
    }
    function $_(e) {
      if (an) {
        e.ready();
        return;
      }
      Xe.contains(Bt, e.ready) || Bt.push(e.ready);
    }
    function Fs(e) {
      rt(e.design) && je.off("__wf_design", e.design),
        rt(e.preview) && je.off("__wf_preview", e.preview),
        rt(e.destroy) && je.off("__wf_destroy", e.destroy),
        e.ready && rt(e.ready) && Q_(e);
    }
    function Q_(e) {
      Bt = Xe.filter(Bt, function (t) {
        return t !== e.ready;
      });
    }
    le.push = function (e) {
      if (an) {
        rt(e) && e();
        return;
      }
      Ni.push(e);
    };
    le.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var on = navigator.userAgent.toLowerCase(),
      Ms = (le.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      Z_ = (le.env.chrome =
        /chrome/.test(on) &&
        /Google/.test(navigator.vendor) &&
        parseInt(on.match(/chrome\/(\d+)\./)[1], 10)),
      J_ = (le.env.ios = /(ipod|iphone|ipad)/.test(on));
    le.env.safari = /safari/.test(on) && !Z_ && !J_;
    var Li;
    Ms &&
      Y_.on("touchstart mousedown", function (e) {
        Li = e.target;
      });
    le.validClick = Ms
      ? function (e) {
          return e === Li || mt.contains(e, Li);
        }
      : function () {
          return !0;
        };
    var Ds = "resize.webflow orientationchange.webflow load.webflow",
      eb = "scroll.webflow " + Ds;
    le.resize = qi(je, Ds);
    le.scroll = qi(je, eb);
    le.redraw = qi();
    function qi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Xe.throttle(function (i) {
          Xe.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (Xe.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Xe.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    le.location = function (e) {
      window.location = e;
    };
    le.env() && (le.location = function () {});
    le.ready = function () {
      (an = !0), Pi ? tb() : Xe.each(Bt, Ns), Xe.each(Ni, Ns), le.resize.up();
    };
    function Ns(e) {
      rt(e) && e();
    }
    function tb() {
      (Pi = !1), Xe.each(kt, qs);
    }
    var Ct;
    le.load = function (e) {
      Ct.then(e);
    };
    function Gs() {
      Ct && (Ct.reject(), je.off("load", Ct.resolve)),
        (Ct = new mt.Deferred()),
        je.on("load", Ct.resolve);
    }
    le.destroy = function (e) {
      (e = e || {}),
        (Pi = !0),
        je.triggerHandler("__wf_destroy"),
        e.domready != null && (an = e.domready),
        Xe.each(kt, Fs),
        le.resize.off(),
        le.scroll.off(),
        le.redraw.off(),
        (Bt = []),
        (Ni = []),
        Ct.state() === "pending" && Gs();
    };
    mt(le.ready);
    Gs();
    Vs.exports = window.Webflow = le;
  });
  var Us = c((FB, Bs) => {
    "use strict";
    var ks = ze();
    ks.define(
      "brand",
      (Bs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var E = n.attr("data-wf-status"),
            w = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(w) && a.hostname !== w && (E = !0),
            E &&
              !s &&
              ((f = f || g()),
              h(),
              setTimeout(h, 500),
              e(r).off(u, v).on(u, v));
        };
        function v() {
          var E =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", E ? "display: none !important;" : "");
        }
        function g() {
          return;
        }
        function h() {
          var E = i.children(o),
            w = E.length && E.get(0) === f,
            b = ks.env("editor");
          if (w) {
            b && E.remove();
            return;
          }
          E.length && E.remove(), b || i.append(f);
        }
        return t;
      })
    );
  });
  var Hs = c((MB, Ws) => {
    "use strict";
    var Fi = ze();
    Fi.define(
      "edit",
      (Ws.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Fi.env("test") || Fi.env("frame")) && !r.fixture && !rb())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          f = r.load || h,
          v = !1;
        try {
          v =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        v
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : i.on(s, g).triggerHandler(s);
        function g() {
          u || (/\?edit/.test(a.hash) && f());
        }
        function h() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(s, g),
            S(function (L) {
              e.ajax({
                url: m("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: E(L),
              });
            });
        }
        function E(L) {
          return function (q) {
            if (!q) {
              console.error("Could not load editor data");
              return;
            }
            (q.thirdPartyCookiesSupported = L),
              w(x(q.scriptPath), function () {
                window.WebflowEditor(q);
              });
          };
        }
        function w(L, q) {
          e.ajax({ type: "GET", url: L, dataType: "script", cache: !0 }).then(
            q,
            b
          );
        }
        function b(L, q, C) {
          throw (console.error("Could not load editor script: " + q), C);
        }
        function x(L) {
          return L.indexOf("//") >= 0
            ? L
            : m("https://editor-api.webflow.com" + L);
        }
        function m(L) {
          return L.replace(/([^:])\/\//g, "$1/");
        }
        function S(L) {
          var q = window.document.createElement("iframe");
          (q.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (q.style.display = "none"),
            (q.sandbox = "allow-scripts allow-same-origin");
          var C = function (U) {
            U.data === "WF_third_party_cookies_unsupported"
              ? (O(q, C), L(!1))
              : U.data === "WF_third_party_cookies_supported" &&
                (O(q, C), L(!0));
          };
          (q.onerror = function () {
            O(q, C), L(!1);
          }),
            window.addEventListener("message", C, !1),
            window.document.body.appendChild(q);
        }
        function O(L, q) {
          window.removeEventListener("message", q, !1), L.remove();
        }
        return n;
      })
    );
    function rb() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var js = c((DB, Xs) => {
    "use strict";
    var nb = ze();
    nb.define(
      "focus-visible",
      (Xs.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
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
              "datetime-local": !0,
            };
          function s(O) {
            return !!(
              O &&
              O !== document &&
              O.nodeName !== "HTML" &&
              O.nodeName !== "BODY" &&
              "classList" in O &&
              "contains" in O.classList
            );
          }
          function u(O) {
            var L = O.type,
              q = O.tagName;
            return !!(
              (q === "INPUT" && a[L] && !O.readOnly) ||
              (q === "TEXTAREA" && !O.readOnly) ||
              O.isContentEditable
            );
          }
          function f(O) {
            O.getAttribute("data-wf-focus-visible") ||
              O.setAttribute("data-wf-focus-visible", "true");
          }
          function v(O) {
            O.getAttribute("data-wf-focus-visible") &&
              O.removeAttribute("data-wf-focus-visible");
          }
          function g(O) {
            O.metaKey ||
              O.altKey ||
              O.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function h() {
            n = !1;
          }
          function E(O) {
            s(O.target) && (n || u(O.target)) && f(O.target);
          }
          function w(O) {
            s(O.target) &&
              O.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              v(O.target));
          }
          function b() {
            document.visibilityState === "hidden" && (i && (n = !0), x());
          }
          function x() {
            document.addEventListener("mousemove", S),
              document.addEventListener("mousedown", S),
              document.addEventListener("mouseup", S),
              document.addEventListener("pointermove", S),
              document.addEventListener("pointerdown", S),
              document.addEventListener("pointerup", S),
              document.addEventListener("touchmove", S),
              document.addEventListener("touchstart", S),
              document.addEventListener("touchend", S);
          }
          function m() {
            document.removeEventListener("mousemove", S),
              document.removeEventListener("mousedown", S),
              document.removeEventListener("mouseup", S),
              document.removeEventListener("pointermove", S),
              document.removeEventListener("pointerdown", S),
              document.removeEventListener("pointerup", S),
              document.removeEventListener("touchmove", S),
              document.removeEventListener("touchstart", S),
              document.removeEventListener("touchend", S);
          }
          function S(O) {
            (O.target.nodeName && O.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), m());
          }
          document.addEventListener("keydown", g, !0),
            document.addEventListener("mousedown", h, !0),
            document.addEventListener("pointerdown", h, !0),
            document.addEventListener("touchstart", h, !0),
            document.addEventListener("visibilitychange", b, !0),
            x(),
            r.addEventListener("focus", E, !0),
            r.addEventListener("blur", w, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Ys = c((GB, Ks) => {
    "use strict";
    var zs = ze();
    zs.define(
      "focus",
      (Ks.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            zs.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var Zs = c((VB, Qs) => {
    "use strict";
    var Mi = window.jQuery,
      nt = {},
      sn = [],
      $s = ".w-ix",
      un = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Mi(t).triggerHandler(nt.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Mi(t).triggerHandler(nt.types.OUTRO));
        },
      };
    nt.triggers = {};
    nt.types = { INTRO: "w-ix-intro" + $s, OUTRO: "w-ix-outro" + $s };
    nt.init = function () {
      for (var e = sn.length, t = 0; t < e; t++) {
        var r = sn[t];
        r[0](0, r[1]);
      }
      (sn = []), Mi.extend(nt.triggers, un);
    };
    nt.async = function () {
      for (var e in un) {
        var t = un[e];
        un.hasOwnProperty(e) &&
          (nt.triggers[e] = function (r, n) {
            sn.push([t, n]);
          });
      }
    };
    nt.async();
    Qs.exports = nt;
  });
  var ln = c((kB, tu) => {
    "use strict";
    var Di = Zs();
    function Js(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var ib = window.jQuery,
      cn = {},
      eu = ".w-ix",
      ob = {
        reset: function (e, t) {
          Di.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Di.triggers.intro(e, t), Js(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Di.triggers.outro(e, t), Js(t, "COMPONENT_INACTIVE");
        },
      };
    cn.triggers = {};
    cn.types = { INTRO: "w-ix-intro" + eu, OUTRO: "w-ix-outro" + eu };
    ib.extend(cn.triggers, ob);
    tu.exports = cn;
  });
  var ru = c((BB, dt) => {
    function Gi(e) {
      return (
        (dt.exports = Gi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (dt.exports.__esModule = !0),
        (dt.exports.default = dt.exports),
        Gi(e)
      );
    }
    (dt.exports = Gi),
      (dt.exports.__esModule = !0),
      (dt.exports.default = dt.exports);
  });
  var fn = c((UB, mr) => {
    var ab = ru().default;
    function nu(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (nu = function (i) {
        return i ? r : t;
      })(e);
    }
    function sb(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (ab(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = nu(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (mr.exports = sb),
      (mr.exports.__esModule = !0),
      (mr.exports.default = mr.exports);
  });
  var iu = c((WB, _r) => {
    function ub(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (_r.exports = ub),
      (_r.exports.__esModule = !0),
      (_r.exports.default = _r.exports);
  });
  var he = c((HB, ou) => {
    var dn = function (e) {
      return e && e.Math == Math && e;
    };
    ou.exports =
      dn(typeof globalThis == "object" && globalThis) ||
      dn(typeof window == "object" && window) ||
      dn(typeof self == "object" && self) ||
      dn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Ut = c((XB, au) => {
    au.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Rt = c((jB, su) => {
    var cb = Ut();
    su.exports = !cb(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var pn = c((zB, uu) => {
    var br = Function.prototype.call;
    uu.exports = br.bind
      ? br.bind(br)
      : function () {
          return br.apply(br, arguments);
        };
  });
  var du = c((fu) => {
    "use strict";
    var cu = {}.propertyIsEnumerable,
      lu = Object.getOwnPropertyDescriptor,
      lb = lu && !cu.call({ 1: 2 }, 1);
    fu.f = lb
      ? function (t) {
          var r = lu(this, t);
          return !!r && r.enumerable;
        }
      : cu;
  });
  var Vi = c((YB, pu) => {
    pu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ke = c(($B, gu) => {
    var hu = Function.prototype,
      ki = hu.bind,
      Bi = hu.call,
      fb = ki && ki.bind(Bi);
    gu.exports = ki
      ? function (e) {
          return e && fb(Bi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Bi.apply(e, arguments);
            }
          );
        };
  });
  var Eu = c((QB, yu) => {
    var vu = Ke(),
      db = vu({}.toString),
      pb = vu("".slice);
    yu.exports = function (e) {
      return pb(db(e), 8, -1);
    };
  });
  var _u = c((ZB, mu) => {
    var hb = he(),
      gb = Ke(),
      vb = Ut(),
      yb = Eu(),
      Ui = hb.Object,
      Eb = gb("".split);
    mu.exports = vb(function () {
      return !Ui("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return yb(e) == "String" ? Eb(e, "") : Ui(e);
        }
      : Ui;
  });
  var Wi = c((JB, bu) => {
    var mb = he(),
      _b = mb.TypeError;
    bu.exports = function (e) {
      if (e == null) throw _b("Can't call method on " + e);
      return e;
    };
  });
  var Tr = c((e5, Tu) => {
    var bb = _u(),
      Tb = Wi();
    Tu.exports = function (e) {
      return bb(Tb(e));
    };
  });
  var it = c((t5, Iu) => {
    Iu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Wt = c((r5, Ou) => {
    var Ib = it();
    Ou.exports = function (e) {
      return typeof e == "object" ? e !== null : Ib(e);
    };
  });
  var Ir = c((n5, Au) => {
    var Hi = he(),
      Ob = it(),
      Ab = function (e) {
        return Ob(e) ? e : void 0;
      };
    Au.exports = function (e, t) {
      return arguments.length < 2 ? Ab(Hi[e]) : Hi[e] && Hi[e][t];
    };
  });
  var xu = c((i5, wu) => {
    var wb = Ke();
    wu.exports = wb({}.isPrototypeOf);
  });
  var Cu = c((o5, Su) => {
    var xb = Ir();
    Su.exports = xb("navigator", "userAgent") || "";
  });
  var Mu = c((a5, Fu) => {
    var qu = he(),
      Xi = Cu(),
      Ru = qu.process,
      Lu = qu.Deno,
      Nu = (Ru && Ru.versions) || (Lu && Lu.version),
      Pu = Nu && Nu.v8,
      Ye,
      hn;
    Pu &&
      ((Ye = Pu.split(".")),
      (hn = Ye[0] > 0 && Ye[0] < 4 ? 1 : +(Ye[0] + Ye[1])));
    !hn &&
      Xi &&
      ((Ye = Xi.match(/Edge\/(\d+)/)),
      (!Ye || Ye[1] >= 74) &&
        ((Ye = Xi.match(/Chrome\/(\d+)/)), Ye && (hn = +Ye[1])));
    Fu.exports = hn;
  });
  var ji = c((s5, Gu) => {
    var Du = Mu(),
      Sb = Ut();
    Gu.exports =
      !!Object.getOwnPropertySymbols &&
      !Sb(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Du && Du < 41)
        );
      });
  });
  var zi = c((u5, Vu) => {
    var Cb = ji();
    Vu.exports = Cb && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Ki = c((c5, ku) => {
    var Rb = he(),
      Lb = Ir(),
      Nb = it(),
      Pb = xu(),
      qb = zi(),
      Fb = Rb.Object;
    ku.exports = qb
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = Lb("Symbol");
          return Nb(t) && Pb(t.prototype, Fb(e));
        };
  });
  var Uu = c((l5, Bu) => {
    var Mb = he(),
      Db = Mb.String;
    Bu.exports = function (e) {
      try {
        return Db(e);
      } catch {
        return "Object";
      }
    };
  });
  var Hu = c((f5, Wu) => {
    var Gb = he(),
      Vb = it(),
      kb = Uu(),
      Bb = Gb.TypeError;
    Wu.exports = function (e) {
      if (Vb(e)) return e;
      throw Bb(kb(e) + " is not a function");
    };
  });
  var ju = c((d5, Xu) => {
    var Ub = Hu();
    Xu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : Ub(r);
    };
  });
  var Ku = c((p5, zu) => {
    var Wb = he(),
      Yi = pn(),
      $i = it(),
      Qi = Wt(),
      Hb = Wb.TypeError;
    zu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && $i((r = e.toString)) && !Qi((n = Yi(r, e)))) ||
        ($i((r = e.valueOf)) && !Qi((n = Yi(r, e)))) ||
        (t !== "string" && $i((r = e.toString)) && !Qi((n = Yi(r, e))))
      )
        return n;
      throw Hb("Can't convert object to primitive value");
    };
  });
  var $u = c((h5, Yu) => {
    Yu.exports = !1;
  });
  var gn = c((g5, Zu) => {
    var Qu = he(),
      Xb = Object.defineProperty;
    Zu.exports = function (e, t) {
      try {
        Xb(Qu, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Qu[e] = t;
      }
      return t;
    };
  });
  var vn = c((v5, ec) => {
    var jb = he(),
      zb = gn(),
      Ju = "__core-js_shared__",
      Kb = jb[Ju] || zb(Ju, {});
    ec.exports = Kb;
  });
  var Zi = c((y5, rc) => {
    var Yb = $u(),
      tc = vn();
    (rc.exports = function (e, t) {
      return tc[e] || (tc[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: Yb ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var ic = c((E5, nc) => {
    var $b = he(),
      Qb = Wi(),
      Zb = $b.Object;
    nc.exports = function (e) {
      return Zb(Qb(e));
    };
  });
  var _t = c((m5, oc) => {
    var Jb = Ke(),
      eT = ic(),
      tT = Jb({}.hasOwnProperty);
    oc.exports =
      Object.hasOwn ||
      function (t, r) {
        return tT(eT(t), r);
      };
  });
  var Ji = c((_5, ac) => {
    var rT = Ke(),
      nT = 0,
      iT = Math.random(),
      oT = rT((1).toString);
    ac.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + oT(++nT + iT, 36);
    };
  });
  var eo = c((b5, fc) => {
    var aT = he(),
      sT = Zi(),
      sc = _t(),
      uT = Ji(),
      uc = ji(),
      lc = zi(),
      Ht = sT("wks"),
      Lt = aT.Symbol,
      cc = Lt && Lt.for,
      cT = lc ? Lt : (Lt && Lt.withoutSetter) || uT;
    fc.exports = function (e) {
      if (!sc(Ht, e) || !(uc || typeof Ht[e] == "string")) {
        var t = "Symbol." + e;
        uc && sc(Lt, e)
          ? (Ht[e] = Lt[e])
          : lc && cc
          ? (Ht[e] = cc(t))
          : (Ht[e] = cT(t));
      }
      return Ht[e];
    };
  });
  var gc = c((T5, hc) => {
    var lT = he(),
      fT = pn(),
      dc = Wt(),
      pc = Ki(),
      dT = ju(),
      pT = Ku(),
      hT = eo(),
      gT = lT.TypeError,
      vT = hT("toPrimitive");
    hc.exports = function (e, t) {
      if (!dc(e) || pc(e)) return e;
      var r = dT(e, vT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = fT(r, e, t)), !dc(n) || pc(n))
        )
          return n;
        throw gT("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), pT(e, t);
    };
  });
  var to = c((I5, vc) => {
    var yT = gc(),
      ET = Ki();
    vc.exports = function (e) {
      var t = yT(e, "string");
      return ET(t) ? t : t + "";
    };
  });
  var no = c((O5, Ec) => {
    var mT = he(),
      yc = Wt(),
      ro = mT.document,
      _T = yc(ro) && yc(ro.createElement);
    Ec.exports = function (e) {
      return _T ? ro.createElement(e) : {};
    };
  });
  var io = c((A5, mc) => {
    var bT = Rt(),
      TT = Ut(),
      IT = no();
    mc.exports =
      !bT &&
      !TT(function () {
        return (
          Object.defineProperty(IT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var oo = c((bc) => {
    var OT = Rt(),
      AT = pn(),
      wT = du(),
      xT = Vi(),
      ST = Tr(),
      CT = to(),
      RT = _t(),
      LT = io(),
      _c = Object.getOwnPropertyDescriptor;
    bc.f = OT
      ? _c
      : function (t, r) {
          if (((t = ST(t)), (r = CT(r)), LT))
            try {
              return _c(t, r);
            } catch {}
          if (RT(t, r)) return xT(!AT(wT.f, t, r), t[r]);
        };
  });
  var Or = c((x5, Ic) => {
    var Tc = he(),
      NT = Wt(),
      PT = Tc.String,
      qT = Tc.TypeError;
    Ic.exports = function (e) {
      if (NT(e)) return e;
      throw qT(PT(e) + " is not an object");
    };
  });
  var Ar = c((wc) => {
    var FT = he(),
      MT = Rt(),
      DT = io(),
      Oc = Or(),
      GT = to(),
      VT = FT.TypeError,
      Ac = Object.defineProperty;
    wc.f = MT
      ? Ac
      : function (t, r, n) {
          if ((Oc(t), (r = GT(r)), Oc(n), DT))
            try {
              return Ac(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw VT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var yn = c((C5, xc) => {
    var kT = Rt(),
      BT = Ar(),
      UT = Vi();
    xc.exports = kT
      ? function (e, t, r) {
          return BT.f(e, t, UT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var so = c((R5, Sc) => {
    var WT = Ke(),
      HT = it(),
      ao = vn(),
      XT = WT(Function.toString);
    HT(ao.inspectSource) ||
      (ao.inspectSource = function (e) {
        return XT(e);
      });
    Sc.exports = ao.inspectSource;
  });
  var Lc = c((L5, Rc) => {
    var jT = he(),
      zT = it(),
      KT = so(),
      Cc = jT.WeakMap;
    Rc.exports = zT(Cc) && /native code/.test(KT(Cc));
  });
  var uo = c((N5, Pc) => {
    var YT = Zi(),
      $T = Ji(),
      Nc = YT("keys");
    Pc.exports = function (e) {
      return Nc[e] || (Nc[e] = $T(e));
    };
  });
  var En = c((P5, qc) => {
    qc.exports = {};
  });
  var kc = c((q5, Vc) => {
    var QT = Lc(),
      Gc = he(),
      co = Ke(),
      ZT = Wt(),
      JT = yn(),
      lo = _t(),
      fo = vn(),
      eI = uo(),
      tI = En(),
      Fc = "Object already initialized",
      ho = Gc.TypeError,
      rI = Gc.WeakMap,
      mn,
      wr,
      _n,
      nI = function (e) {
        return _n(e) ? wr(e) : mn(e, {});
      },
      iI = function (e) {
        return function (t) {
          var r;
          if (!ZT(t) || (r = wr(t)).type !== e)
            throw ho("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    QT || fo.state
      ? ((bt = fo.state || (fo.state = new rI())),
        (Mc = co(bt.get)),
        (po = co(bt.has)),
        (Dc = co(bt.set)),
        (mn = function (e, t) {
          if (po(bt, e)) throw new ho(Fc);
          return (t.facade = e), Dc(bt, e, t), t;
        }),
        (wr = function (e) {
          return Mc(bt, e) || {};
        }),
        (_n = function (e) {
          return po(bt, e);
        }))
      : ((Nt = eI("state")),
        (tI[Nt] = !0),
        (mn = function (e, t) {
          if (lo(e, Nt)) throw new ho(Fc);
          return (t.facade = e), JT(e, Nt, t), t;
        }),
        (wr = function (e) {
          return lo(e, Nt) ? e[Nt] : {};
        }),
        (_n = function (e) {
          return lo(e, Nt);
        }));
    var bt, Mc, po, Dc, Nt;
    Vc.exports = { set: mn, get: wr, has: _n, enforce: nI, getterFor: iI };
  });
  var Wc = c((F5, Uc) => {
    var go = Rt(),
      oI = _t(),
      Bc = Function.prototype,
      aI = go && Object.getOwnPropertyDescriptor,
      vo = oI(Bc, "name"),
      sI = vo && function () {}.name === "something",
      uI = vo && (!go || (go && aI(Bc, "name").configurable));
    Uc.exports = { EXISTS: vo, PROPER: sI, CONFIGURABLE: uI };
  });
  var Kc = c((M5, zc) => {
    var cI = he(),
      Hc = it(),
      lI = _t(),
      Xc = yn(),
      fI = gn(),
      dI = so(),
      jc = kc(),
      pI = Wc().CONFIGURABLE,
      hI = jc.get,
      gI = jc.enforce,
      vI = String(String).split("String");
    (zc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (Hc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!lI(r, "name") || (pI && r.name !== s)) && Xc(r, "name", s),
          (u = gI(r)),
          u.source || (u.source = vI.join(typeof s == "string" ? s : ""))),
        e === cI)
      ) {
        o ? (e[t] = r) : fI(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Xc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Hc(this) && hI(this).source) || dI(this);
    });
  });
  var yo = c((D5, Yc) => {
    var yI = Math.ceil,
      EI = Math.floor;
    Yc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? EI : yI)(t);
    };
  });
  var Qc = c((G5, $c) => {
    var mI = yo(),
      _I = Math.max,
      bI = Math.min;
    $c.exports = function (e, t) {
      var r = mI(e);
      return r < 0 ? _I(r + t, 0) : bI(r, t);
    };
  });
  var Jc = c((V5, Zc) => {
    var TI = yo(),
      II = Math.min;
    Zc.exports = function (e) {
      return e > 0 ? II(TI(e), 9007199254740991) : 0;
    };
  });
  var tl = c((k5, el) => {
    var OI = Jc();
    el.exports = function (e) {
      return OI(e.length);
    };
  });
  var Eo = c((B5, nl) => {
    var AI = Tr(),
      wI = Qc(),
      xI = tl(),
      rl = function (e) {
        return function (t, r, n) {
          var i = AI(t),
            o = xI(i),
            a = wI(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    nl.exports = { includes: rl(!0), indexOf: rl(!1) };
  });
  var _o = c((U5, ol) => {
    var SI = Ke(),
      mo = _t(),
      CI = Tr(),
      RI = Eo().indexOf,
      LI = En(),
      il = SI([].push);
    ol.exports = function (e, t) {
      var r = CI(e),
        n = 0,
        i = [],
        o;
      for (o in r) !mo(LI, o) && mo(r, o) && il(i, o);
      for (; t.length > n; ) mo(r, (o = t[n++])) && (~RI(i, o) || il(i, o));
      return i;
    };
  });
  var bn = c((W5, al) => {
    al.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var ul = c((sl) => {
    var NI = _o(),
      PI = bn(),
      qI = PI.concat("length", "prototype");
    sl.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return NI(t, qI);
      };
  });
  var ll = c((cl) => {
    cl.f = Object.getOwnPropertySymbols;
  });
  var dl = c((j5, fl) => {
    var FI = Ir(),
      MI = Ke(),
      DI = ul(),
      GI = ll(),
      VI = Or(),
      kI = MI([].concat);
    fl.exports =
      FI("Reflect", "ownKeys") ||
      function (t) {
        var r = DI.f(VI(t)),
          n = GI.f;
        return n ? kI(r, n(t)) : r;
      };
  });
  var hl = c((z5, pl) => {
    var BI = _t(),
      UI = dl(),
      WI = oo(),
      HI = Ar();
    pl.exports = function (e, t) {
      for (var r = UI(t), n = HI.f, i = WI.f, o = 0; o < r.length; o++) {
        var a = r[o];
        BI(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var vl = c((K5, gl) => {
    var XI = Ut(),
      jI = it(),
      zI = /#|\.prototype\./,
      xr = function (e, t) {
        var r = YI[KI(e)];
        return r == QI ? !0 : r == $I ? !1 : jI(t) ? XI(t) : !!t;
      },
      KI = (xr.normalize = function (e) {
        return String(e).replace(zI, ".").toLowerCase();
      }),
      YI = (xr.data = {}),
      $I = (xr.NATIVE = "N"),
      QI = (xr.POLYFILL = "P");
    gl.exports = xr;
  });
  var El = c((Y5, yl) => {
    var bo = he(),
      ZI = oo().f,
      JI = yn(),
      e0 = Kc(),
      t0 = gn(),
      r0 = hl(),
      n0 = vl();
    yl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        u,
        f,
        v;
      if (
        (n
          ? (a = bo)
          : i
          ? (a = bo[r] || t0(r, {}))
          : (a = (bo[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((v = ZI(a, s)), (u = v && v.value)) : (u = a[s]),
            (o = n0(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && u !== void 0)
          ) {
            if (typeof f == typeof u) continue;
            r0(f, u);
          }
          (e.sham || (u && u.sham)) && JI(f, "sham", !0), e0(a, s, f, e);
        }
    };
  });
  var _l = c(($5, ml) => {
    var i0 = _o(),
      o0 = bn();
    ml.exports =
      Object.keys ||
      function (t) {
        return i0(t, o0);
      };
  });
  var Tl = c((Q5, bl) => {
    var a0 = Rt(),
      s0 = Ar(),
      u0 = Or(),
      c0 = Tr(),
      l0 = _l();
    bl.exports = a0
      ? Object.defineProperties
      : function (t, r) {
          u0(t);
          for (var n = c0(r), i = l0(r), o = i.length, a = 0, s; o > a; )
            s0.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var Ol = c((Z5, Il) => {
    var f0 = Ir();
    Il.exports = f0("document", "documentElement");
  });
  var Nl = c((J5, Ll) => {
    var d0 = Or(),
      p0 = Tl(),
      Al = bn(),
      h0 = En(),
      g0 = Ol(),
      v0 = no(),
      y0 = uo(),
      wl = ">",
      xl = "<",
      Io = "prototype",
      Oo = "script",
      Cl = y0("IE_PROTO"),
      To = function () {},
      Rl = function (e) {
        return xl + Oo + wl + e + xl + "/" + Oo + wl;
      },
      Sl = function (e) {
        e.write(Rl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      E0 = function () {
        var e = v0("iframe"),
          t = "java" + Oo + ":",
          r;
        return (
          (e.style.display = "none"),
          g0.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Rl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      Tn,
      In = function () {
        try {
          Tn = new ActiveXObject("htmlfile");
        } catch {}
        In =
          typeof document < "u"
            ? document.domain && Tn
              ? Sl(Tn)
              : E0()
            : Sl(Tn);
        for (var e = Al.length; e--; ) delete In[Io][Al[e]];
        return In();
      };
    h0[Cl] = !0;
    Ll.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((To[Io] = d0(t)), (n = new To()), (To[Io] = null), (n[Cl] = t))
            : (n = In()),
          r === void 0 ? n : p0(n, r)
        );
      };
  });
  var ql = c((eU, Pl) => {
    var m0 = eo(),
      _0 = Nl(),
      b0 = Ar(),
      Ao = m0("unscopables"),
      wo = Array.prototype;
    wo[Ao] == null && b0.f(wo, Ao, { configurable: !0, value: _0(null) });
    Pl.exports = function (e) {
      wo[Ao][e] = !0;
    };
  });
  var Fl = c(() => {
    "use strict";
    var T0 = El(),
      I0 = Eo().includes,
      O0 = ql();
    T0(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return I0(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    O0("includes");
  });
  var Dl = c((nU, Ml) => {
    var A0 = he(),
      w0 = Ke();
    Ml.exports = function (e, t) {
      return w0(A0[e].prototype[t]);
    };
  });
  var Vl = c((iU, Gl) => {
    Fl();
    var x0 = Dl();
    Gl.exports = x0("Array", "includes");
  });
  var Bl = c((oU, kl) => {
    var S0 = Vl();
    kl.exports = S0;
  });
  var Wl = c((aU, Ul) => {
    var C0 = Bl();
    Ul.exports = C0;
  });
  var xo = c((sU, Hl) => {
    var R0 =
      typeof global == "object" && global && global.Object === Object && global;
    Hl.exports = R0;
  });
  var $e = c((uU, Xl) => {
    var L0 = xo(),
      N0 = typeof self == "object" && self && self.Object === Object && self,
      P0 = L0 || N0 || Function("return this")();
    Xl.exports = P0;
  });
  var Xt = c((cU, jl) => {
    var q0 = $e(),
      F0 = q0.Symbol;
    jl.exports = F0;
  });
  var $l = c((lU, Yl) => {
    var zl = Xt(),
      Kl = Object.prototype,
      M0 = Kl.hasOwnProperty,
      D0 = Kl.toString,
      Sr = zl ? zl.toStringTag : void 0;
    function G0(e) {
      var t = M0.call(e, Sr),
        r = e[Sr];
      try {
        e[Sr] = void 0;
        var n = !0;
      } catch {}
      var i = D0.call(e);
      return n && (t ? (e[Sr] = r) : delete e[Sr]), i;
    }
    Yl.exports = G0;
  });
  var Zl = c((fU, Ql) => {
    var V0 = Object.prototype,
      k0 = V0.toString;
    function B0(e) {
      return k0.call(e);
    }
    Ql.exports = B0;
  });
  var Tt = c((dU, tf) => {
    var Jl = Xt(),
      U0 = $l(),
      W0 = Zl(),
      H0 = "[object Null]",
      X0 = "[object Undefined]",
      ef = Jl ? Jl.toStringTag : void 0;
    function j0(e) {
      return e == null
        ? e === void 0
          ? X0
          : H0
        : ef && ef in Object(e)
        ? U0(e)
        : W0(e);
    }
    tf.exports = j0;
  });
  var So = c((pU, rf) => {
    function z0(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    rf.exports = z0;
  });
  var Co = c((hU, nf) => {
    var K0 = So(),
      Y0 = K0(Object.getPrototypeOf, Object);
    nf.exports = Y0;
  });
  var pt = c((gU, of) => {
    function $0(e) {
      return e != null && typeof e == "object";
    }
    of.exports = $0;
  });
  var Ro = c((vU, sf) => {
    var Q0 = Tt(),
      Z0 = Co(),
      J0 = pt(),
      eO = "[object Object]",
      tO = Function.prototype,
      rO = Object.prototype,
      af = tO.toString,
      nO = rO.hasOwnProperty,
      iO = af.call(Object);
    function oO(e) {
      if (!J0(e) || Q0(e) != eO) return !1;
      var t = Z0(e);
      if (t === null) return !0;
      var r = nO.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && af.call(r) == iO;
    }
    sf.exports = oO;
  });
  var uf = c((Lo) => {
    "use strict";
    Object.defineProperty(Lo, "__esModule", { value: !0 });
    Lo.default = aO;
    function aO(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var cf = c((Po, No) => {
    "use strict";
    Object.defineProperty(Po, "__esModule", { value: !0 });
    var sO = uf(),
      uO = cO(sO);
    function cO(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var jt;
    typeof self < "u"
      ? (jt = self)
      : typeof window < "u"
      ? (jt = window)
      : typeof global < "u"
      ? (jt = global)
      : typeof No < "u"
      ? (jt = No)
      : (jt = Function("return this")());
    var lO = (0, uO.default)(jt);
    Po.default = lO;
  });
  var qo = c((Cr) => {
    "use strict";
    Cr.__esModule = !0;
    Cr.ActionTypes = void 0;
    Cr.default = pf;
    var fO = Ro(),
      dO = df(fO),
      pO = cf(),
      lf = df(pO);
    function df(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var ff = (Cr.ActionTypes = { INIT: "@@redux/INIT" });
    function pf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(pf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function v() {
        return o;
      }
      function g(b) {
        if (typeof b != "function")
          throw new Error("Expected listener to be a function.");
        var x = !0;
        return (
          f(),
          s.push(b),
          function () {
            if (x) {
              (x = !1), f();
              var S = s.indexOf(b);
              s.splice(S, 1);
            }
          }
        );
      }
      function h(b) {
        if (!(0, dO.default)(b))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof b.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, b));
        } finally {
          u = !1;
        }
        for (var x = (a = s), m = 0; m < x.length; m++) x[m]();
        return b;
      }
      function E(b) {
        if (typeof b != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = b), h({ type: ff.INIT });
      }
      function w() {
        var b,
          x = g;
        return (
          (b = {
            subscribe: function (S) {
              if (typeof S != "object")
                throw new TypeError("Expected the observer to be an object.");
              function O() {
                S.next && S.next(v());
              }
              O();
              var L = x(O);
              return { unsubscribe: L };
            },
          }),
          (b[lf.default] = function () {
            return this;
          }),
          b
        );
      }
      return (
        h({ type: ff.INIT }),
        (n = { dispatch: h, subscribe: g, getState: v, replaceReducer: E }),
        (n[lf.default] = w),
        n
      );
    }
  });
  var Mo = c((Fo) => {
    "use strict";
    Fo.__esModule = !0;
    Fo.default = hO;
    function hO(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var vf = c((Do) => {
    "use strict";
    Do.__esModule = !0;
    Do.default = mO;
    var hf = qo(),
      gO = Ro(),
      _U = gf(gO),
      vO = Mo(),
      bU = gf(vO);
    function gf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function yO(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function EO(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: hf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                hf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function mO(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        EO(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          v = arguments[1];
        if (s) throw s;
        if (!1) var g;
        for (var h = !1, E = {}, w = 0; w < o.length; w++) {
          var b = o[w],
            x = r[b],
            m = f[b],
            S = x(m, v);
          if (typeof S > "u") {
            var O = yO(b, v);
            throw new Error(O);
          }
          (E[b] = S), (h = h || S !== m);
        }
        return h ? E : f;
      };
    }
  });
  var Ef = c((Go) => {
    "use strict";
    Go.__esModule = !0;
    Go.default = _O;
    function yf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function _O(e, t) {
      if (typeof e == "function") return yf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = yf(a, t));
      }
      return n;
    }
  });
  var ko = c((Vo) => {
    "use strict";
    Vo.__esModule = !0;
    Vo.default = bO;
    function bO() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var mf = c((Bo) => {
    "use strict";
    Bo.__esModule = !0;
    var TO =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Bo.default = wO;
    var IO = ko(),
      OO = AO(IO);
    function AO(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function wO() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            u = s.dispatch,
            f = [],
            v = {
              getState: s.getState,
              dispatch: function (h) {
                return u(h);
              },
            };
          return (
            (f = t.map(function (g) {
              return g(v);
            })),
            (u = OO.default.apply(void 0, f)(s.dispatch)),
            TO({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var Uo = c((Be) => {
    "use strict";
    Be.__esModule = !0;
    Be.compose =
      Be.applyMiddleware =
      Be.bindActionCreators =
      Be.combineReducers =
      Be.createStore =
        void 0;
    var xO = qo(),
      SO = zt(xO),
      CO = vf(),
      RO = zt(CO),
      LO = Ef(),
      NO = zt(LO),
      PO = mf(),
      qO = zt(PO),
      FO = ko(),
      MO = zt(FO),
      DO = Mo(),
      wU = zt(DO);
    function zt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Be.createStore = SO.default;
    Be.combineReducers = RO.default;
    Be.bindActionCreators = NO.default;
    Be.applyMiddleware = qO.default;
    Be.compose = MO.default;
  });
  var Qe,
    Wo,
    ot,
    GO,
    VO,
    On,
    kO,
    Ho = pe(() => {
      "use strict";
      (Qe = {
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
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Wo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (ot = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (GO = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (VO = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (On = {
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
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (kO = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var De,
    BO,
    An = pe(() => {
      "use strict";
      (De = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (BO = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var UO,
    _f = pe(() => {
      "use strict";
      UO = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var WO,
    HO,
    XO,
    jO,
    zO,
    KO,
    YO,
    Xo,
    bf = pe(() => {
      "use strict";
      An();
      ({
        TRANSFORM_MOVE: WO,
        TRANSFORM_SCALE: HO,
        TRANSFORM_ROTATE: XO,
        TRANSFORM_SKEW: jO,
        STYLE_SIZE: zO,
        STYLE_FILTER: KO,
        STYLE_FONT_VARIATION: YO,
      } = De),
        (Xo = {
          [WO]: !0,
          [HO]: !0,
          [XO]: !0,
          [jO]: !0,
          [zO]: !0,
          [KO]: !0,
          [YO]: !0,
        });
    });
  var be = {};
  Me(be, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => dA,
    IX2_ANIMATION_FRAME_CHANGED: () => aA,
    IX2_CLEAR_REQUESTED: () => nA,
    IX2_ELEMENT_STATE_CHANGED: () => fA,
    IX2_EVENT_LISTENER_ADDED: () => iA,
    IX2_EVENT_STATE_CHANGED: () => oA,
    IX2_INSTANCE_ADDED: () => uA,
    IX2_INSTANCE_REMOVED: () => lA,
    IX2_INSTANCE_STARTED: () => cA,
    IX2_MEDIA_QUERIES_DEFINED: () => hA,
    IX2_PARAMETER_CHANGED: () => sA,
    IX2_PLAYBACK_REQUESTED: () => tA,
    IX2_PREVIEW_REQUESTED: () => eA,
    IX2_RAW_DATA_IMPORTED: () => $O,
    IX2_SESSION_INITIALIZED: () => QO,
    IX2_SESSION_STARTED: () => ZO,
    IX2_SESSION_STOPPED: () => JO,
    IX2_STOP_REQUESTED: () => rA,
    IX2_TEST_FRAME_RENDERED: () => gA,
    IX2_VIEWPORT_WIDTH_CHANGED: () => pA,
  });
  var $O,
    QO,
    ZO,
    JO,
    eA,
    tA,
    rA,
    nA,
    iA,
    oA,
    aA,
    sA,
    uA,
    cA,
    lA,
    fA,
    dA,
    pA,
    hA,
    gA,
    Tf = pe(() => {
      "use strict";
      ($O = "IX2_RAW_DATA_IMPORTED"),
        (QO = "IX2_SESSION_INITIALIZED"),
        (ZO = "IX2_SESSION_STARTED"),
        (JO = "IX2_SESSION_STOPPED"),
        (eA = "IX2_PREVIEW_REQUESTED"),
        (tA = "IX2_PLAYBACK_REQUESTED"),
        (rA = "IX2_STOP_REQUESTED"),
        (nA = "IX2_CLEAR_REQUESTED"),
        (iA = "IX2_EVENT_LISTENER_ADDED"),
        (oA = "IX2_EVENT_STATE_CHANGED"),
        (aA = "IX2_ANIMATION_FRAME_CHANGED"),
        (sA = "IX2_PARAMETER_CHANGED"),
        (uA = "IX2_INSTANCE_ADDED"),
        (cA = "IX2_INSTANCE_STARTED"),
        (lA = "IX2_INSTANCE_REMOVED"),
        (fA = "IX2_ELEMENT_STATE_CHANGED"),
        (dA = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (pA = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (hA = "IX2_MEDIA_QUERIES_DEFINED"),
        (gA = "IX2_TEST_FRAME_RENDERED");
    });
  var Se = {};
  Me(Se, {
    ABSTRACT_NODE: () => pw,
    AUTO: () => rw,
    BACKGROUND: () => $A,
    BACKGROUND_COLOR: () => YA,
    BAR_DELIMITER: () => ow,
    BORDER_COLOR: () => QA,
    BOUNDARY_SELECTOR: () => _A,
    CHILDREN: () => aw,
    COLON_DELIMITER: () => iw,
    COLOR: () => ZA,
    COMMA_DELIMITER: () => nw,
    CONFIG_UNIT: () => SA,
    CONFIG_VALUE: () => OA,
    CONFIG_X_UNIT: () => AA,
    CONFIG_X_VALUE: () => bA,
    CONFIG_Y_UNIT: () => wA,
    CONFIG_Y_VALUE: () => TA,
    CONFIG_Z_UNIT: () => xA,
    CONFIG_Z_VALUE: () => IA,
    DISPLAY: () => JA,
    FILTER: () => XA,
    FLEX: () => ew,
    FONT_VARIATION_SETTINGS: () => jA,
    HEIGHT: () => KA,
    HTML_ELEMENT: () => fw,
    IMMEDIATE_CHILDREN: () => sw,
    IX2_ID_DELIMITER: () => vA,
    OPACITY: () => HA,
    PARENT: () => cw,
    PLAIN_OBJECT: () => dw,
    PRESERVE_3D: () => lw,
    RENDER_GENERAL: () => gw,
    RENDER_PLUGIN: () => yw,
    RENDER_STYLE: () => vw,
    RENDER_TRANSFORM: () => hw,
    ROTATE_X: () => GA,
    ROTATE_Y: () => VA,
    ROTATE_Z: () => kA,
    SCALE_3D: () => DA,
    SCALE_X: () => qA,
    SCALE_Y: () => FA,
    SCALE_Z: () => MA,
    SIBLINGS: () => uw,
    SKEW: () => BA,
    SKEW_X: () => UA,
    SKEW_Y: () => WA,
    TRANSFORM: () => CA,
    TRANSLATE_3D: () => PA,
    TRANSLATE_X: () => RA,
    TRANSLATE_Y: () => LA,
    TRANSLATE_Z: () => NA,
    WF_PAGE: () => yA,
    WIDTH: () => zA,
    WILL_CHANGE: () => tw,
    W_MOD_IX: () => mA,
    W_MOD_JS: () => EA,
  });
  var vA,
    yA,
    EA,
    mA,
    _A,
    bA,
    TA,
    IA,
    OA,
    AA,
    wA,
    xA,
    SA,
    CA,
    RA,
    LA,
    NA,
    PA,
    qA,
    FA,
    MA,
    DA,
    GA,
    VA,
    kA,
    BA,
    UA,
    WA,
    HA,
    XA,
    jA,
    zA,
    KA,
    YA,
    $A,
    QA,
    ZA,
    JA,
    ew,
    tw,
    rw,
    nw,
    iw,
    ow,
    aw,
    sw,
    uw,
    cw,
    lw,
    fw,
    dw,
    pw,
    hw,
    gw,
    vw,
    yw,
    If = pe(() => {
      "use strict";
      (vA = "|"),
        (yA = "data-wf-page"),
        (EA = "w-mod-js"),
        (mA = "w-mod-ix"),
        (_A = ".w-dyn-item"),
        (bA = "xValue"),
        (TA = "yValue"),
        (IA = "zValue"),
        (OA = "value"),
        (AA = "xUnit"),
        (wA = "yUnit"),
        (xA = "zUnit"),
        (SA = "unit"),
        (CA = "transform"),
        (RA = "translateX"),
        (LA = "translateY"),
        (NA = "translateZ"),
        (PA = "translate3d"),
        (qA = "scaleX"),
        (FA = "scaleY"),
        (MA = "scaleZ"),
        (DA = "scale3d"),
        (GA = "rotateX"),
        (VA = "rotateY"),
        (kA = "rotateZ"),
        (BA = "skew"),
        (UA = "skewX"),
        (WA = "skewY"),
        (HA = "opacity"),
        (XA = "filter"),
        (jA = "font-variation-settings"),
        (zA = "width"),
        (KA = "height"),
        (YA = "backgroundColor"),
        ($A = "background"),
        (QA = "borderColor"),
        (ZA = "color"),
        (JA = "display"),
        (ew = "flex"),
        (tw = "willChange"),
        (rw = "AUTO"),
        (nw = ","),
        (iw = ":"),
        (ow = "|"),
        (aw = "CHILDREN"),
        (sw = "IMMEDIATE_CHILDREN"),
        (uw = "SIBLINGS"),
        (cw = "PARENT"),
        (lw = "preserve-3d"),
        (fw = "HTML_ELEMENT"),
        (dw = "PLAIN_OBJECT"),
        (pw = "ABSTRACT_NODE"),
        (hw = "RENDER_TRANSFORM"),
        (gw = "RENDER_GENERAL"),
        (vw = "RENDER_STYLE"),
        (yw = "RENDER_PLUGIN");
    });
  var Of = {};
  Me(Of, {
    ActionAppliesTo: () => BO,
    ActionTypeConsts: () => De,
    EventAppliesTo: () => Wo,
    EventBasedOn: () => ot,
    EventContinuousMouseAxes: () => GO,
    EventLimitAffectedElements: () => VO,
    EventTypeConsts: () => Qe,
    IX2EngineActionTypes: () => be,
    IX2EngineConstants: () => Se,
    InteractionTypeConsts: () => UO,
    QuickEffectDirectionConsts: () => kO,
    QuickEffectIds: () => On,
    ReducedMotionTypes: () => Xo,
  });
  var Ge = pe(() => {
    "use strict";
    Ho();
    An();
    _f();
    bf();
    Tf();
    If();
    An();
    Ho();
  });
  var Ew,
    Af,
    wf = pe(() => {
      "use strict";
      Ge();
      ({ IX2_RAW_DATA_IMPORTED: Ew } = be),
        (Af = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case Ew:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Kt = c((ve) => {
    "use strict";
    Object.defineProperty(ve, "__esModule", { value: !0 });
    var mw =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    ve.clone = xn;
    ve.addLast = Cf;
    ve.addFirst = Rf;
    ve.removeLast = Lf;
    ve.removeFirst = Nf;
    ve.insert = Pf;
    ve.removeAt = qf;
    ve.replaceAt = Ff;
    ve.getIn = Sn;
    ve.set = Cn;
    ve.setIn = Rn;
    ve.update = Df;
    ve.updateIn = Gf;
    ve.merge = Vf;
    ve.mergeDeep = kf;
    ve.mergeIn = Bf;
    ve.omit = Uf;
    ve.addDefaults = Wf;
    var xf = "INVALID_ARGS";
    function Sf(e) {
      throw new Error(e);
    }
    function jo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var _w = {}.hasOwnProperty;
    function xn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = jo(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Ve(e, t, r) {
      var n = r;
      n == null && Sf(xf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var f = a[u];
        if (f != null) {
          var v = jo(f);
          if (v.length)
            for (var g = 0; g <= v.length; g++) {
              var h = v[g];
              if (!(e && n[h] !== void 0)) {
                var E = f[h];
                t && wn(n[h]) && wn(E) && (E = Ve(e, t, n[h], E)),
                  !(E === void 0 || E === n[h]) &&
                    (i || ((i = !0), (n = xn(n))), (n[h] = E));
              }
            }
        }
      }
      return n;
    }
    function wn(e) {
      var t = typeof e > "u" ? "undefined" : mw(e);
      return e != null && (t === "object" || t === "function");
    }
    function Cf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Rf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Lf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Nf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Pf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function qf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Ff(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Sn(e, t) {
      if ((!Array.isArray(t) && Sf(xf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Cn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = xn(i);
      return (o[t] = r), o;
    }
    function Mf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          wn(e) && wn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Mf(a, t, r, n + 1);
      }
      return Cn(e, o, i);
    }
    function Rn(e, t, r) {
      return t.length ? Mf(e, t, r, 0) : r;
    }
    function Df(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Cn(e, t, i);
    }
    function Gf(e, t, r) {
      var n = Sn(e, t),
        i = r(n);
      return Rn(e, t, i);
    }
    function Vf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ve.call.apply(Ve, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Ve(!1, !1, e, t, r, n, i, o);
    }
    function kf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ve.call.apply(Ve, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Ve(!1, !0, e, t, r, n, i, o);
    }
    function Bf(e, t, r, n, i, o, a) {
      var s = Sn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          f = arguments.length,
          v = Array(f > 7 ? f - 7 : 0),
          g = 7;
        g < f;
        g++
      )
        v[g - 7] = arguments[g];
      return (
        v.length
          ? (u = Ve.call.apply(Ve, [null, !1, !1, s, r, n, i, o, a].concat(v)))
          : (u = Ve(!1, !1, s, r, n, i, o, a)),
        Rn(e, t, u)
      );
    }
    function Uf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (_w.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = jo(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function Wf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ve.call.apply(Ve, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Ve(!0, !1, e, t, r, n, i, o);
    }
    var bw = {
      clone: xn,
      addLast: Cf,
      addFirst: Rf,
      removeLast: Lf,
      removeFirst: Nf,
      insert: Pf,
      removeAt: qf,
      replaceAt: Ff,
      getIn: Sn,
      set: Cn,
      setIn: Rn,
      update: Df,
      updateIn: Gf,
      merge: Vf,
      mergeDeep: kf,
      mergeIn: Bf,
      omit: Uf,
      addDefaults: Wf,
    };
    ve.default = bw;
  });
  var Xf,
    Tw,
    Iw,
    Ow,
    Aw,
    ww,
    Hf,
    jf,
    zf = pe(() => {
      "use strict";
      Ge();
      (Xf = oe(Kt())),
        ({
          IX2_PREVIEW_REQUESTED: Tw,
          IX2_PLAYBACK_REQUESTED: Iw,
          IX2_STOP_REQUESTED: Ow,
          IX2_CLEAR_REQUESTED: Aw,
        } = be),
        (ww = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Hf = Object.create(null, {
          [Tw]: { value: "preview" },
          [Iw]: { value: "playback" },
          [Ow]: { value: "stop" },
          [Aw]: { value: "clear" },
        })),
        (jf = (e = ww, t) => {
          if (t.type in Hf) {
            let r = [Hf[t.type]];
            return (0, Xf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Ne,
    xw,
    Sw,
    Cw,
    Rw,
    Lw,
    Nw,
    Pw,
    qw,
    Fw,
    Mw,
    Kf,
    Dw,
    Yf,
    $f = pe(() => {
      "use strict";
      Ge();
      (Ne = oe(Kt())),
        ({
          IX2_SESSION_INITIALIZED: xw,
          IX2_SESSION_STARTED: Sw,
          IX2_TEST_FRAME_RENDERED: Cw,
          IX2_SESSION_STOPPED: Rw,
          IX2_EVENT_LISTENER_ADDED: Lw,
          IX2_EVENT_STATE_CHANGED: Nw,
          IX2_ANIMATION_FRAME_CHANGED: Pw,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: qw,
          IX2_VIEWPORT_WIDTH_CHANGED: Fw,
          IX2_MEDIA_QUERIES_DEFINED: Mw,
        } = be),
        (Kf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (Dw = 20),
        (Yf = (e = Kf, t) => {
          switch (t.type) {
            case xw: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Ne.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case Sw:
              return (0, Ne.set)(e, "active", !0);
            case Cw: {
              let {
                payload: { step: r = Dw },
              } = t;
              return (0, Ne.set)(e, "tick", e.tick + r);
            }
            case Rw:
              return Kf;
            case Pw: {
              let {
                payload: { now: r },
              } = t;
              return (0, Ne.set)(e, "tick", r);
            }
            case Lw: {
              let r = (0, Ne.addLast)(e.eventListeners, t.payload);
              return (0, Ne.set)(e, "eventListeners", r);
            }
            case Nw: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Ne.setIn)(e, ["eventState", r], n);
            }
            case qw: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Ne.setIn)(e, ["playbackState", r], n);
            }
            case Fw: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: f } = n[a];
                if (r >= u && r <= f) {
                  o = s;
                  break;
                }
              }
              return (0, Ne.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case Mw:
              return (0, Ne.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var Zf = c((jU, Qf) => {
    function Gw() {
      (this.__data__ = []), (this.size = 0);
    }
    Qf.exports = Gw;
  });
  var Ln = c((zU, Jf) => {
    function Vw(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Jf.exports = Vw;
  });
  var Rr = c((KU, ed) => {
    var kw = Ln();
    function Bw(e, t) {
      for (var r = e.length; r--; ) if (kw(e[r][0], t)) return r;
      return -1;
    }
    ed.exports = Bw;
  });
  var rd = c((YU, td) => {
    var Uw = Rr(),
      Ww = Array.prototype,
      Hw = Ww.splice;
    function Xw(e) {
      var t = this.__data__,
        r = Uw(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : Hw.call(t, r, 1), --this.size, !0;
    }
    td.exports = Xw;
  });
  var id = c(($U, nd) => {
    var jw = Rr();
    function zw(e) {
      var t = this.__data__,
        r = jw(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    nd.exports = zw;
  });
  var ad = c((QU, od) => {
    var Kw = Rr();
    function Yw(e) {
      return Kw(this.__data__, e) > -1;
    }
    od.exports = Yw;
  });
  var ud = c((ZU, sd) => {
    var $w = Rr();
    function Qw(e, t) {
      var r = this.__data__,
        n = $w(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    sd.exports = Qw;
  });
  var Lr = c((JU, cd) => {
    var Zw = Zf(),
      Jw = rd(),
      ex = id(),
      tx = ad(),
      rx = ud();
    function Yt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Yt.prototype.clear = Zw;
    Yt.prototype.delete = Jw;
    Yt.prototype.get = ex;
    Yt.prototype.has = tx;
    Yt.prototype.set = rx;
    cd.exports = Yt;
  });
  var fd = c((eW, ld) => {
    var nx = Lr();
    function ix() {
      (this.__data__ = new nx()), (this.size = 0);
    }
    ld.exports = ix;
  });
  var pd = c((tW, dd) => {
    function ox(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    dd.exports = ox;
  });
  var gd = c((rW, hd) => {
    function ax(e) {
      return this.__data__.get(e);
    }
    hd.exports = ax;
  });
  var yd = c((nW, vd) => {
    function sx(e) {
      return this.__data__.has(e);
    }
    vd.exports = sx;
  });
  var at = c((iW, Ed) => {
    function ux(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Ed.exports = ux;
  });
  var zo = c((oW, md) => {
    var cx = Tt(),
      lx = at(),
      fx = "[object AsyncFunction]",
      dx = "[object Function]",
      px = "[object GeneratorFunction]",
      hx = "[object Proxy]";
    function gx(e) {
      if (!lx(e)) return !1;
      var t = cx(e);
      return t == dx || t == px || t == fx || t == hx;
    }
    md.exports = gx;
  });
  var bd = c((aW, _d) => {
    var vx = $e(),
      yx = vx["__core-js_shared__"];
    _d.exports = yx;
  });
  var Od = c((sW, Id) => {
    var Ko = bd(),
      Td = (function () {
        var e = /[^.]+$/.exec((Ko && Ko.keys && Ko.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function Ex(e) {
      return !!Td && Td in e;
    }
    Id.exports = Ex;
  });
  var Yo = c((uW, Ad) => {
    var mx = Function.prototype,
      _x = mx.toString;
    function bx(e) {
      if (e != null) {
        try {
          return _x.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Ad.exports = bx;
  });
  var xd = c((cW, wd) => {
    var Tx = zo(),
      Ix = Od(),
      Ox = at(),
      Ax = Yo(),
      wx = /[\\^$.*+?()[\]{}|]/g,
      xx = /^\[object .+?Constructor\]$/,
      Sx = Function.prototype,
      Cx = Object.prototype,
      Rx = Sx.toString,
      Lx = Cx.hasOwnProperty,
      Nx = RegExp(
        "^" +
          Rx.call(Lx)
            .replace(wx, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function Px(e) {
      if (!Ox(e) || Ix(e)) return !1;
      var t = Tx(e) ? Nx : xx;
      return t.test(Ax(e));
    }
    wd.exports = Px;
  });
  var Cd = c((lW, Sd) => {
    function qx(e, t) {
      return e?.[t];
    }
    Sd.exports = qx;
  });
  var It = c((fW, Rd) => {
    var Fx = xd(),
      Mx = Cd();
    function Dx(e, t) {
      var r = Mx(e, t);
      return Fx(r) ? r : void 0;
    }
    Rd.exports = Dx;
  });
  var Nn = c((dW, Ld) => {
    var Gx = It(),
      Vx = $e(),
      kx = Gx(Vx, "Map");
    Ld.exports = kx;
  });
  var Nr = c((pW, Nd) => {
    var Bx = It(),
      Ux = Bx(Object, "create");
    Nd.exports = Ux;
  });
  var Fd = c((hW, qd) => {
    var Pd = Nr();
    function Wx() {
      (this.__data__ = Pd ? Pd(null) : {}), (this.size = 0);
    }
    qd.exports = Wx;
  });
  var Dd = c((gW, Md) => {
    function Hx(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Md.exports = Hx;
  });
  var Vd = c((vW, Gd) => {
    var Xx = Nr(),
      jx = "__lodash_hash_undefined__",
      zx = Object.prototype,
      Kx = zx.hasOwnProperty;
    function Yx(e) {
      var t = this.__data__;
      if (Xx) {
        var r = t[e];
        return r === jx ? void 0 : r;
      }
      return Kx.call(t, e) ? t[e] : void 0;
    }
    Gd.exports = Yx;
  });
  var Bd = c((yW, kd) => {
    var $x = Nr(),
      Qx = Object.prototype,
      Zx = Qx.hasOwnProperty;
    function Jx(e) {
      var t = this.__data__;
      return $x ? t[e] !== void 0 : Zx.call(t, e);
    }
    kd.exports = Jx;
  });
  var Wd = c((EW, Ud) => {
    var eS = Nr(),
      tS = "__lodash_hash_undefined__";
    function rS(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = eS && t === void 0 ? tS : t),
        this
      );
    }
    Ud.exports = rS;
  });
  var Xd = c((mW, Hd) => {
    var nS = Fd(),
      iS = Dd(),
      oS = Vd(),
      aS = Bd(),
      sS = Wd();
    function $t(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    $t.prototype.clear = nS;
    $t.prototype.delete = iS;
    $t.prototype.get = oS;
    $t.prototype.has = aS;
    $t.prototype.set = sS;
    Hd.exports = $t;
  });
  var Kd = c((_W, zd) => {
    var jd = Xd(),
      uS = Lr(),
      cS = Nn();
    function lS() {
      (this.size = 0),
        (this.__data__ = {
          hash: new jd(),
          map: new (cS || uS)(),
          string: new jd(),
        });
    }
    zd.exports = lS;
  });
  var $d = c((bW, Yd) => {
    function fS(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Yd.exports = fS;
  });
  var Pr = c((TW, Qd) => {
    var dS = $d();
    function pS(e, t) {
      var r = e.__data__;
      return dS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Qd.exports = pS;
  });
  var Jd = c((IW, Zd) => {
    var hS = Pr();
    function gS(e) {
      var t = hS(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Zd.exports = gS;
  });
  var tp = c((OW, ep) => {
    var vS = Pr();
    function yS(e) {
      return vS(this, e).get(e);
    }
    ep.exports = yS;
  });
  var np = c((AW, rp) => {
    var ES = Pr();
    function mS(e) {
      return ES(this, e).has(e);
    }
    rp.exports = mS;
  });
  var op = c((wW, ip) => {
    var _S = Pr();
    function bS(e, t) {
      var r = _S(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    ip.exports = bS;
  });
  var Pn = c((xW, ap) => {
    var TS = Kd(),
      IS = Jd(),
      OS = tp(),
      AS = np(),
      wS = op();
    function Qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Qt.prototype.clear = TS;
    Qt.prototype.delete = IS;
    Qt.prototype.get = OS;
    Qt.prototype.has = AS;
    Qt.prototype.set = wS;
    ap.exports = Qt;
  });
  var up = c((SW, sp) => {
    var xS = Lr(),
      SS = Nn(),
      CS = Pn(),
      RS = 200;
    function LS(e, t) {
      var r = this.__data__;
      if (r instanceof xS) {
        var n = r.__data__;
        if (!SS || n.length < RS - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new CS(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    sp.exports = LS;
  });
  var $o = c((CW, cp) => {
    var NS = Lr(),
      PS = fd(),
      qS = pd(),
      FS = gd(),
      MS = yd(),
      DS = up();
    function Zt(e) {
      var t = (this.__data__ = new NS(e));
      this.size = t.size;
    }
    Zt.prototype.clear = PS;
    Zt.prototype.delete = qS;
    Zt.prototype.get = FS;
    Zt.prototype.has = MS;
    Zt.prototype.set = DS;
    cp.exports = Zt;
  });
  var fp = c((RW, lp) => {
    var GS = "__lodash_hash_undefined__";
    function VS(e) {
      return this.__data__.set(e, GS), this;
    }
    lp.exports = VS;
  });
  var pp = c((LW, dp) => {
    function kS(e) {
      return this.__data__.has(e);
    }
    dp.exports = kS;
  });
  var gp = c((NW, hp) => {
    var BS = Pn(),
      US = fp(),
      WS = pp();
    function qn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new BS(); ++t < r; ) this.add(e[t]);
    }
    qn.prototype.add = qn.prototype.push = US;
    qn.prototype.has = WS;
    hp.exports = qn;
  });
  var yp = c((PW, vp) => {
    function HS(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    vp.exports = HS;
  });
  var mp = c((qW, Ep) => {
    function XS(e, t) {
      return e.has(t);
    }
    Ep.exports = XS;
  });
  var Qo = c((FW, _p) => {
    var jS = gp(),
      zS = yp(),
      KS = mp(),
      YS = 1,
      $S = 2;
    function QS(e, t, r, n, i, o) {
      var a = r & YS,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var f = o.get(e),
        v = o.get(t);
      if (f && v) return f == t && v == e;
      var g = -1,
        h = !0,
        E = r & $S ? new jS() : void 0;
      for (o.set(e, t), o.set(t, e); ++g < s; ) {
        var w = e[g],
          b = t[g];
        if (n) var x = a ? n(b, w, g, t, e, o) : n(w, b, g, e, t, o);
        if (x !== void 0) {
          if (x) continue;
          h = !1;
          break;
        }
        if (E) {
          if (
            !zS(t, function (m, S) {
              if (!KS(E, S) && (w === m || i(w, m, r, n, o))) return E.push(S);
            })
          ) {
            h = !1;
            break;
          }
        } else if (!(w === b || i(w, b, r, n, o))) {
          h = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), h;
    }
    _p.exports = QS;
  });
  var Tp = c((MW, bp) => {
    var ZS = $e(),
      JS = ZS.Uint8Array;
    bp.exports = JS;
  });
  var Op = c((DW, Ip) => {
    function eC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    Ip.exports = eC;
  });
  var wp = c((GW, Ap) => {
    function tC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Ap.exports = tC;
  });
  var Lp = c((VW, Rp) => {
    var xp = Xt(),
      Sp = Tp(),
      rC = Ln(),
      nC = Qo(),
      iC = Op(),
      oC = wp(),
      aC = 1,
      sC = 2,
      uC = "[object Boolean]",
      cC = "[object Date]",
      lC = "[object Error]",
      fC = "[object Map]",
      dC = "[object Number]",
      pC = "[object RegExp]",
      hC = "[object Set]",
      gC = "[object String]",
      vC = "[object Symbol]",
      yC = "[object ArrayBuffer]",
      EC = "[object DataView]",
      Cp = xp ? xp.prototype : void 0,
      Zo = Cp ? Cp.valueOf : void 0;
    function mC(e, t, r, n, i, o, a) {
      switch (r) {
        case EC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case yC:
          return !(e.byteLength != t.byteLength || !o(new Sp(e), new Sp(t)));
        case uC:
        case cC:
        case dC:
          return rC(+e, +t);
        case lC:
          return e.name == t.name && e.message == t.message;
        case pC:
        case gC:
          return e == t + "";
        case fC:
          var s = iC;
        case hC:
          var u = n & aC;
          if ((s || (s = oC), e.size != t.size && !u)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= sC), a.set(e, t);
          var v = nC(s(e), s(t), n, i, o, a);
          return a.delete(e), v;
        case vC:
          if (Zo) return Zo.call(e) == Zo.call(t);
      }
      return !1;
    }
    Rp.exports = mC;
  });
  var Fn = c((kW, Np) => {
    function _C(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Np.exports = _C;
  });
  var Te = c((BW, Pp) => {
    var bC = Array.isArray;
    Pp.exports = bC;
  });
  var Jo = c((UW, qp) => {
    var TC = Fn(),
      IC = Te();
    function OC(e, t, r) {
      var n = t(e);
      return IC(e) ? n : TC(n, r(e));
    }
    qp.exports = OC;
  });
  var Mp = c((WW, Fp) => {
    function AC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Fp.exports = AC;
  });
  var ea = c((HW, Dp) => {
    function wC() {
      return [];
    }
    Dp.exports = wC;
  });
  var ta = c((XW, Vp) => {
    var xC = Mp(),
      SC = ea(),
      CC = Object.prototype,
      RC = CC.propertyIsEnumerable,
      Gp = Object.getOwnPropertySymbols,
      LC = Gp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                xC(Gp(e), function (t) {
                  return RC.call(e, t);
                }));
          }
        : SC;
    Vp.exports = LC;
  });
  var Bp = c((jW, kp) => {
    function NC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    kp.exports = NC;
  });
  var Wp = c((zW, Up) => {
    var PC = Tt(),
      qC = pt(),
      FC = "[object Arguments]";
    function MC(e) {
      return qC(e) && PC(e) == FC;
    }
    Up.exports = MC;
  });
  var qr = c((KW, jp) => {
    var Hp = Wp(),
      DC = pt(),
      Xp = Object.prototype,
      GC = Xp.hasOwnProperty,
      VC = Xp.propertyIsEnumerable,
      kC = Hp(
        (function () {
          return arguments;
        })()
      )
        ? Hp
        : function (e) {
            return DC(e) && GC.call(e, "callee") && !VC.call(e, "callee");
          };
    jp.exports = kC;
  });
  var Kp = c((YW, zp) => {
    function BC() {
      return !1;
    }
    zp.exports = BC;
  });
  var Mn = c((Fr, Jt) => {
    var UC = $e(),
      WC = Kp(),
      Qp = typeof Fr == "object" && Fr && !Fr.nodeType && Fr,
      Yp = Qp && typeof Jt == "object" && Jt && !Jt.nodeType && Jt,
      HC = Yp && Yp.exports === Qp,
      $p = HC ? UC.Buffer : void 0,
      XC = $p ? $p.isBuffer : void 0,
      jC = XC || WC;
    Jt.exports = jC;
  });
  var Dn = c(($W, Zp) => {
    var zC = 9007199254740991,
      KC = /^(?:0|[1-9]\d*)$/;
    function YC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? zC),
        !!t &&
          (r == "number" || (r != "symbol" && KC.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Zp.exports = YC;
  });
  var Gn = c((QW, Jp) => {
    var $C = 9007199254740991;
    function QC(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= $C;
    }
    Jp.exports = QC;
  });
  var th = c((ZW, eh) => {
    var ZC = Tt(),
      JC = Gn(),
      eR = pt(),
      tR = "[object Arguments]",
      rR = "[object Array]",
      nR = "[object Boolean]",
      iR = "[object Date]",
      oR = "[object Error]",
      aR = "[object Function]",
      sR = "[object Map]",
      uR = "[object Number]",
      cR = "[object Object]",
      lR = "[object RegExp]",
      fR = "[object Set]",
      dR = "[object String]",
      pR = "[object WeakMap]",
      hR = "[object ArrayBuffer]",
      gR = "[object DataView]",
      vR = "[object Float32Array]",
      yR = "[object Float64Array]",
      ER = "[object Int8Array]",
      mR = "[object Int16Array]",
      _R = "[object Int32Array]",
      bR = "[object Uint8Array]",
      TR = "[object Uint8ClampedArray]",
      IR = "[object Uint16Array]",
      OR = "[object Uint32Array]",
      fe = {};
    fe[vR] =
      fe[yR] =
      fe[ER] =
      fe[mR] =
      fe[_R] =
      fe[bR] =
      fe[TR] =
      fe[IR] =
      fe[OR] =
        !0;
    fe[tR] =
      fe[rR] =
      fe[hR] =
      fe[nR] =
      fe[gR] =
      fe[iR] =
      fe[oR] =
      fe[aR] =
      fe[sR] =
      fe[uR] =
      fe[cR] =
      fe[lR] =
      fe[fR] =
      fe[dR] =
      fe[pR] =
        !1;
    function AR(e) {
      return eR(e) && JC(e.length) && !!fe[ZC(e)];
    }
    eh.exports = AR;
  });
  var nh = c((JW, rh) => {
    function wR(e) {
      return function (t) {
        return e(t);
      };
    }
    rh.exports = wR;
  });
  var oh = c((Mr, er) => {
    var xR = xo(),
      ih = typeof Mr == "object" && Mr && !Mr.nodeType && Mr,
      Dr = ih && typeof er == "object" && er && !er.nodeType && er,
      SR = Dr && Dr.exports === ih,
      ra = SR && xR.process,
      CR = (function () {
        try {
          var e = Dr && Dr.require && Dr.require("util").types;
          return e || (ra && ra.binding && ra.binding("util"));
        } catch {}
      })();
    er.exports = CR;
  });
  var Vn = c((eH, uh) => {
    var RR = th(),
      LR = nh(),
      ah = oh(),
      sh = ah && ah.isTypedArray,
      NR = sh ? LR(sh) : RR;
    uh.exports = NR;
  });
  var na = c((tH, ch) => {
    var PR = Bp(),
      qR = qr(),
      FR = Te(),
      MR = Mn(),
      DR = Dn(),
      GR = Vn(),
      VR = Object.prototype,
      kR = VR.hasOwnProperty;
    function BR(e, t) {
      var r = FR(e),
        n = !r && qR(e),
        i = !r && !n && MR(e),
        o = !r && !n && !i && GR(e),
        a = r || n || i || o,
        s = a ? PR(e.length, String) : [],
        u = s.length;
      for (var f in e)
        (t || kR.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              DR(f, u))
          ) &&
          s.push(f);
      return s;
    }
    ch.exports = BR;
  });
  var kn = c((rH, lh) => {
    var UR = Object.prototype;
    function WR(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || UR;
      return e === r;
    }
    lh.exports = WR;
  });
  var dh = c((nH, fh) => {
    var HR = So(),
      XR = HR(Object.keys, Object);
    fh.exports = XR;
  });
  var Bn = c((iH, ph) => {
    var jR = kn(),
      zR = dh(),
      KR = Object.prototype,
      YR = KR.hasOwnProperty;
    function $R(e) {
      if (!jR(e)) return zR(e);
      var t = [];
      for (var r in Object(e)) YR.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    ph.exports = $R;
  });
  var Pt = c((oH, hh) => {
    var QR = zo(),
      ZR = Gn();
    function JR(e) {
      return e != null && ZR(e.length) && !QR(e);
    }
    hh.exports = JR;
  });
  var Gr = c((aH, gh) => {
    var eL = na(),
      tL = Bn(),
      rL = Pt();
    function nL(e) {
      return rL(e) ? eL(e) : tL(e);
    }
    gh.exports = nL;
  });
  var yh = c((sH, vh) => {
    var iL = Jo(),
      oL = ta(),
      aL = Gr();
    function sL(e) {
      return iL(e, aL, oL);
    }
    vh.exports = sL;
  });
  var _h = c((uH, mh) => {
    var Eh = yh(),
      uL = 1,
      cL = Object.prototype,
      lL = cL.hasOwnProperty;
    function fL(e, t, r, n, i, o) {
      var a = r & uL,
        s = Eh(e),
        u = s.length,
        f = Eh(t),
        v = f.length;
      if (u != v && !a) return !1;
      for (var g = u; g--; ) {
        var h = s[g];
        if (!(a ? h in t : lL.call(t, h))) return !1;
      }
      var E = o.get(e),
        w = o.get(t);
      if (E && w) return E == t && w == e;
      var b = !0;
      o.set(e, t), o.set(t, e);
      for (var x = a; ++g < u; ) {
        h = s[g];
        var m = e[h],
          S = t[h];
        if (n) var O = a ? n(S, m, h, t, e, o) : n(m, S, h, e, t, o);
        if (!(O === void 0 ? m === S || i(m, S, r, n, o) : O)) {
          b = !1;
          break;
        }
        x || (x = h == "constructor");
      }
      if (b && !x) {
        var L = e.constructor,
          q = t.constructor;
        L != q &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof L == "function" &&
            L instanceof L &&
            typeof q == "function" &&
            q instanceof q
          ) &&
          (b = !1);
      }
      return o.delete(e), o.delete(t), b;
    }
    mh.exports = fL;
  });
  var Th = c((cH, bh) => {
    var dL = It(),
      pL = $e(),
      hL = dL(pL, "DataView");
    bh.exports = hL;
  });
  var Oh = c((lH, Ih) => {
    var gL = It(),
      vL = $e(),
      yL = gL(vL, "Promise");
    Ih.exports = yL;
  });
  var wh = c((fH, Ah) => {
    var EL = It(),
      mL = $e(),
      _L = EL(mL, "Set");
    Ah.exports = _L;
  });
  var ia = c((dH, xh) => {
    var bL = It(),
      TL = $e(),
      IL = bL(TL, "WeakMap");
    xh.exports = IL;
  });
  var Un = c((pH, qh) => {
    var oa = Th(),
      aa = Nn(),
      sa = Oh(),
      ua = wh(),
      ca = ia(),
      Ph = Tt(),
      tr = Yo(),
      Sh = "[object Map]",
      OL = "[object Object]",
      Ch = "[object Promise]",
      Rh = "[object Set]",
      Lh = "[object WeakMap]",
      Nh = "[object DataView]",
      AL = tr(oa),
      wL = tr(aa),
      xL = tr(sa),
      SL = tr(ua),
      CL = tr(ca),
      qt = Ph;
    ((oa && qt(new oa(new ArrayBuffer(1))) != Nh) ||
      (aa && qt(new aa()) != Sh) ||
      (sa && qt(sa.resolve()) != Ch) ||
      (ua && qt(new ua()) != Rh) ||
      (ca && qt(new ca()) != Lh)) &&
      (qt = function (e) {
        var t = Ph(e),
          r = t == OL ? e.constructor : void 0,
          n = r ? tr(r) : "";
        if (n)
          switch (n) {
            case AL:
              return Nh;
            case wL:
              return Sh;
            case xL:
              return Ch;
            case SL:
              return Rh;
            case CL:
              return Lh;
          }
        return t;
      });
    qh.exports = qt;
  });
  var Uh = c((hH, Bh) => {
    var la = $o(),
      RL = Qo(),
      LL = Lp(),
      NL = _h(),
      Fh = Un(),
      Mh = Te(),
      Dh = Mn(),
      PL = Vn(),
      qL = 1,
      Gh = "[object Arguments]",
      Vh = "[object Array]",
      Wn = "[object Object]",
      FL = Object.prototype,
      kh = FL.hasOwnProperty;
    function ML(e, t, r, n, i, o) {
      var a = Mh(e),
        s = Mh(t),
        u = a ? Vh : Fh(e),
        f = s ? Vh : Fh(t);
      (u = u == Gh ? Wn : u), (f = f == Gh ? Wn : f);
      var v = u == Wn,
        g = f == Wn,
        h = u == f;
      if (h && Dh(e)) {
        if (!Dh(t)) return !1;
        (a = !0), (v = !1);
      }
      if (h && !v)
        return (
          o || (o = new la()),
          a || PL(e) ? RL(e, t, r, n, i, o) : LL(e, t, u, r, n, i, o)
        );
      if (!(r & qL)) {
        var E = v && kh.call(e, "__wrapped__"),
          w = g && kh.call(t, "__wrapped__");
        if (E || w) {
          var b = E ? e.value() : e,
            x = w ? t.value() : t;
          return o || (o = new la()), i(b, x, r, n, o);
        }
      }
      return h ? (o || (o = new la()), NL(e, t, r, n, i, o)) : !1;
    }
    Bh.exports = ML;
  });
  var fa = c((gH, Xh) => {
    var DL = Uh(),
      Wh = pt();
    function Hh(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Wh(e) && !Wh(t))
        ? e !== e && t !== t
        : DL(e, t, r, n, Hh, i);
    }
    Xh.exports = Hh;
  });
  var zh = c((vH, jh) => {
    var GL = $o(),
      VL = fa(),
      kL = 1,
      BL = 2;
    function UL(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var u = s[0],
          f = e[u],
          v = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(u in e)) return !1;
        } else {
          var g = new GL();
          if (n) var h = n(f, v, u, e, t, g);
          if (!(h === void 0 ? VL(v, f, kL | BL, n, g) : h)) return !1;
        }
      }
      return !0;
    }
    jh.exports = UL;
  });
  var da = c((yH, Kh) => {
    var WL = at();
    function HL(e) {
      return e === e && !WL(e);
    }
    Kh.exports = HL;
  });
  var $h = c((EH, Yh) => {
    var XL = da(),
      jL = Gr();
    function zL(e) {
      for (var t = jL(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, XL(i)];
      }
      return t;
    }
    Yh.exports = zL;
  });
  var pa = c((mH, Qh) => {
    function KL(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Qh.exports = KL;
  });
  var Jh = c((_H, Zh) => {
    var YL = zh(),
      $L = $h(),
      QL = pa();
    function ZL(e) {
      var t = $L(e);
      return t.length == 1 && t[0][2]
        ? QL(t[0][0], t[0][1])
        : function (r) {
            return r === e || YL(r, e, t);
          };
    }
    Zh.exports = ZL;
  });
  var Vr = c((bH, eg) => {
    var JL = Tt(),
      eN = pt(),
      tN = "[object Symbol]";
    function rN(e) {
      return typeof e == "symbol" || (eN(e) && JL(e) == tN);
    }
    eg.exports = rN;
  });
  var Hn = c((TH, tg) => {
    var nN = Te(),
      iN = Vr(),
      oN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      aN = /^\w*$/;
    function sN(e, t) {
      if (nN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        iN(e)
        ? !0
        : aN.test(e) || !oN.test(e) || (t != null && e in Object(t));
    }
    tg.exports = sN;
  });
  var ig = c((IH, ng) => {
    var rg = Pn(),
      uN = "Expected a function";
    function ha(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(uN);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (ha.Cache || rg)()), r;
    }
    ha.Cache = rg;
    ng.exports = ha;
  });
  var ag = c((OH, og) => {
    var cN = ig(),
      lN = 500;
    function fN(e) {
      var t = cN(e, function (n) {
          return r.size === lN && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    og.exports = fN;
  });
  var ug = c((AH, sg) => {
    var dN = ag(),
      pN =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      hN = /\\(\\)?/g,
      gN = dN(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(pN, function (r, n, i, o) {
            t.push(i ? o.replace(hN, "$1") : n || r);
          }),
          t
        );
      });
    sg.exports = gN;
  });
  var ga = c((wH, cg) => {
    function vN(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    cg.exports = vN;
  });
  var gg = c((xH, hg) => {
    var lg = Xt(),
      yN = ga(),
      EN = Te(),
      mN = Vr(),
      _N = 1 / 0,
      fg = lg ? lg.prototype : void 0,
      dg = fg ? fg.toString : void 0;
    function pg(e) {
      if (typeof e == "string") return e;
      if (EN(e)) return yN(e, pg) + "";
      if (mN(e)) return dg ? dg.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -_N ? "-0" : t;
    }
    hg.exports = pg;
  });
  var yg = c((SH, vg) => {
    var bN = gg();
    function TN(e) {
      return e == null ? "" : bN(e);
    }
    vg.exports = TN;
  });
  var kr = c((CH, Eg) => {
    var IN = Te(),
      ON = Hn(),
      AN = ug(),
      wN = yg();
    function xN(e, t) {
      return IN(e) ? e : ON(e, t) ? [e] : AN(wN(e));
    }
    Eg.exports = xN;
  });
  var rr = c((RH, mg) => {
    var SN = Vr(),
      CN = 1 / 0;
    function RN(e) {
      if (typeof e == "string" || SN(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -CN ? "-0" : t;
    }
    mg.exports = RN;
  });
  var Xn = c((LH, _g) => {
    var LN = kr(),
      NN = rr();
    function PN(e, t) {
      t = LN(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[NN(t[r++])];
      return r && r == n ? e : void 0;
    }
    _g.exports = PN;
  });
  var jn = c((NH, bg) => {
    var qN = Xn();
    function FN(e, t, r) {
      var n = e == null ? void 0 : qN(e, t);
      return n === void 0 ? r : n;
    }
    bg.exports = FN;
  });
  var Ig = c((PH, Tg) => {
    function MN(e, t) {
      return e != null && t in Object(e);
    }
    Tg.exports = MN;
  });
  var Ag = c((qH, Og) => {
    var DN = kr(),
      GN = qr(),
      VN = Te(),
      kN = Dn(),
      BN = Gn(),
      UN = rr();
    function WN(e, t, r) {
      t = DN(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = UN(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && BN(i) && kN(a, i) && (VN(e) || GN(e)));
    }
    Og.exports = WN;
  });
  var xg = c((FH, wg) => {
    var HN = Ig(),
      XN = Ag();
    function jN(e, t) {
      return e != null && XN(e, t, HN);
    }
    wg.exports = jN;
  });
  var Cg = c((MH, Sg) => {
    var zN = fa(),
      KN = jn(),
      YN = xg(),
      $N = Hn(),
      QN = da(),
      ZN = pa(),
      JN = rr(),
      eP = 1,
      tP = 2;
    function rP(e, t) {
      return $N(e) && QN(t)
        ? ZN(JN(e), t)
        : function (r) {
            var n = KN(r, e);
            return n === void 0 && n === t ? YN(r, e) : zN(t, n, eP | tP);
          };
    }
    Sg.exports = rP;
  });
  var zn = c((DH, Rg) => {
    function nP(e) {
      return e;
    }
    Rg.exports = nP;
  });
  var va = c((GH, Lg) => {
    function iP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Lg.exports = iP;
  });
  var Pg = c((VH, Ng) => {
    var oP = Xn();
    function aP(e) {
      return function (t) {
        return oP(t, e);
      };
    }
    Ng.exports = aP;
  });
  var Fg = c((kH, qg) => {
    var sP = va(),
      uP = Pg(),
      cP = Hn(),
      lP = rr();
    function fP(e) {
      return cP(e) ? sP(lP(e)) : uP(e);
    }
    qg.exports = fP;
  });
  var Ot = c((BH, Mg) => {
    var dP = Jh(),
      pP = Cg(),
      hP = zn(),
      gP = Te(),
      vP = Fg();
    function yP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? hP
        : typeof e == "object"
        ? gP(e)
          ? pP(e[0], e[1])
          : dP(e)
        : vP(e);
    }
    Mg.exports = yP;
  });
  var ya = c((UH, Dg) => {
    var EP = Ot(),
      mP = Pt(),
      _P = Gr();
    function bP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!mP(t)) {
          var o = EP(r, 3);
          (t = _P(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Dg.exports = bP;
  });
  var Ea = c((WH, Gg) => {
    function TP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Gg.exports = TP;
  });
  var kg = c((HH, Vg) => {
    var IP = /\s/;
    function OP(e) {
      for (var t = e.length; t-- && IP.test(e.charAt(t)); );
      return t;
    }
    Vg.exports = OP;
  });
  var Ug = c((XH, Bg) => {
    var AP = kg(),
      wP = /^\s+/;
    function xP(e) {
      return e && e.slice(0, AP(e) + 1).replace(wP, "");
    }
    Bg.exports = xP;
  });
  var Kn = c((jH, Xg) => {
    var SP = Ug(),
      Wg = at(),
      CP = Vr(),
      Hg = 0 / 0,
      RP = /^[-+]0x[0-9a-f]+$/i,
      LP = /^0b[01]+$/i,
      NP = /^0o[0-7]+$/i,
      PP = parseInt;
    function qP(e) {
      if (typeof e == "number") return e;
      if (CP(e)) return Hg;
      if (Wg(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Wg(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = SP(e);
      var r = LP.test(e);
      return r || NP.test(e) ? PP(e.slice(2), r ? 2 : 8) : RP.test(e) ? Hg : +e;
    }
    Xg.exports = qP;
  });
  var Kg = c((zH, zg) => {
    var FP = Kn(),
      jg = 1 / 0,
      MP = 17976931348623157e292;
    function DP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = FP(e)), e === jg || e === -jg)) {
        var t = e < 0 ? -1 : 1;
        return t * MP;
      }
      return e === e ? e : 0;
    }
    zg.exports = DP;
  });
  var ma = c((KH, Yg) => {
    var GP = Kg();
    function VP(e) {
      var t = GP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Yg.exports = VP;
  });
  var Qg = c((YH, $g) => {
    var kP = Ea(),
      BP = Ot(),
      UP = ma(),
      WP = Math.max;
    function HP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : UP(r);
      return i < 0 && (i = WP(n + i, 0)), kP(e, BP(t, 3), i);
    }
    $g.exports = HP;
  });
  var _a = c(($H, Zg) => {
    var XP = ya(),
      jP = Qg(),
      zP = XP(jP);
    Zg.exports = zP;
  });
  var tv = {};
  Me(tv, {
    ELEMENT_MATCHES: () => KP,
    FLEX_PREFIXED: () => ba,
    IS_BROWSER_ENV: () => Ze,
    TRANSFORM_PREFIXED: () => At,
    TRANSFORM_STYLE_PREFIXED: () => $n,
    withBrowser: () => Yn,
  });
  var ev,
    Ze,
    Yn,
    KP,
    ba,
    At,
    Jg,
    $n,
    Qn = pe(() => {
      "use strict";
      (ev = oe(_a())),
        (Ze = typeof window < "u"),
        (Yn = (e, t) => (Ze ? e() : t)),
        (KP = Yn(() =>
          (0, ev.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (ba = Yn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (At = Yn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (Jg = At.split("transform")[0]),
        ($n = Jg ? Jg + "TransformStyle" : "transformStyle");
    });
  var Ta = c((QH, av) => {
    var YP = 4,
      $P = 0.001,
      QP = 1e-7,
      ZP = 10,
      Br = 11,
      Zn = 1 / (Br - 1),
      JP = typeof Float32Array == "function";
    function rv(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function nv(e, t) {
      return 3 * t - 6 * e;
    }
    function iv(e) {
      return 3 * e;
    }
    function Jn(e, t, r) {
      return ((rv(t, r) * e + nv(t, r)) * e + iv(t)) * e;
    }
    function ov(e, t, r) {
      return 3 * rv(t, r) * e * e + 2 * nv(t, r) * e + iv(t);
    }
    function eq(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = Jn(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > QP && ++s < ZP);
      return a;
    }
    function tq(e, t, r, n) {
      for (var i = 0; i < YP; ++i) {
        var o = ov(t, r, n);
        if (o === 0) return t;
        var a = Jn(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    av.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = JP ? new Float32Array(Br) : new Array(Br);
      if (t !== r || n !== i)
        for (var a = 0; a < Br; ++a) o[a] = Jn(a * Zn, t, n);
      function s(u) {
        for (var f = 0, v = 1, g = Br - 1; v !== g && o[v] <= u; ++v) f += Zn;
        --v;
        var h = (u - o[v]) / (o[v + 1] - o[v]),
          E = f + h * Zn,
          w = ov(E, t, n);
        return w >= $P ? tq(u, E, t, n) : w === 0 ? E : eq(u, f, f + Zn, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : Jn(s(f), r, i);
      };
    };
  });
  var Wr = {};
  Me(Wr, {
    bounce: () => Dq,
    bouncePast: () => Gq,
    ease: () => rq,
    easeIn: () => nq,
    easeInOut: () => oq,
    easeOut: () => iq,
    inBack: () => Sq,
    inCirc: () => Oq,
    inCubic: () => cq,
    inElastic: () => Lq,
    inExpo: () => bq,
    inOutBack: () => Rq,
    inOutCirc: () => wq,
    inOutCubic: () => fq,
    inOutElastic: () => Pq,
    inOutExpo: () => Iq,
    inOutQuad: () => uq,
    inOutQuart: () => hq,
    inOutQuint: () => yq,
    inOutSine: () => _q,
    inQuad: () => aq,
    inQuart: () => dq,
    inQuint: () => gq,
    inSine: () => Eq,
    outBack: () => Cq,
    outBounce: () => xq,
    outCirc: () => Aq,
    outCubic: () => lq,
    outElastic: () => Nq,
    outExpo: () => Tq,
    outQuad: () => sq,
    outQuart: () => pq,
    outQuint: () => vq,
    outSine: () => mq,
    swingFrom: () => Fq,
    swingFromTo: () => qq,
    swingTo: () => Mq,
  });
  function aq(e) {
    return Math.pow(e, 2);
  }
  function sq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function uq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function cq(e) {
    return Math.pow(e, 3);
  }
  function lq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function fq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function dq(e) {
    return Math.pow(e, 4);
  }
  function pq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function hq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function gq(e) {
    return Math.pow(e, 5);
  }
  function vq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function yq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function Eq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function mq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function _q(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function bq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function Tq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function Iq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function Oq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function Aq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function wq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function xq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Sq(e) {
    let t = ht;
    return e * e * ((t + 1) * e - t);
  }
  function Cq(e) {
    let t = ht;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Rq(e) {
    let t = ht;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Lq(e) {
    let t = ht,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function Nq(e) {
    let t = ht,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function Pq(e) {
    let t = ht,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function qq(e) {
    let t = ht;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Fq(e) {
    let t = ht;
    return e * e * ((t + 1) * e - t);
  }
  function Mq(e) {
    let t = ht;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Dq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Gq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Ur,
    ht,
    rq,
    nq,
    iq,
    oq,
    Ia = pe(() => {
      "use strict";
      (Ur = oe(Ta())),
        (ht = 1.70158),
        (rq = (0, Ur.default)(0.25, 0.1, 0.25, 1)),
        (nq = (0, Ur.default)(0.42, 0, 1, 1)),
        (iq = (0, Ur.default)(0, 0, 0.58, 1)),
        (oq = (0, Ur.default)(0.42, 0, 0.58, 1));
    });
  var uv = {};
  Me(uv, {
    applyEasing: () => kq,
    createBezierEasing: () => Vq,
    optimizeFloat: () => Hr,
  });
  function Hr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function Vq(e) {
    return (0, sv.default)(...e);
  }
  function kq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Hr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Wr[e] ? Wr[e](t) : t);
  }
  var sv,
    Oa = pe(() => {
      "use strict";
      Ia();
      sv = oe(Ta());
    });
  var fv = {};
  Me(fv, {
    createElementState: () => lv,
    ixElements: () => eF,
    mergeActionState: () => Aa,
  });
  function lv(e, t, r, n, i) {
    let o =
      r === Bq ? (0, nr.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, nr.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Aa(e, t, r, n, i) {
    let o = rF(i);
    return (0, nr.mergeIn)(e, [t, Jq, r], n, o);
  }
  function rF(e) {
    let { config: t } = e;
    return tF.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var nr,
    JH,
    Bq,
    eX,
    Uq,
    Wq,
    Hq,
    Xq,
    jq,
    zq,
    Kq,
    Yq,
    $q,
    Qq,
    Zq,
    cv,
    Jq,
    eF,
    tF,
    dv = pe(() => {
      "use strict";
      nr = oe(Kt());
      Ge();
      ({
        HTML_ELEMENT: JH,
        PLAIN_OBJECT: Bq,
        ABSTRACT_NODE: eX,
        CONFIG_X_VALUE: Uq,
        CONFIG_Y_VALUE: Wq,
        CONFIG_Z_VALUE: Hq,
        CONFIG_VALUE: Xq,
        CONFIG_X_UNIT: jq,
        CONFIG_Y_UNIT: zq,
        CONFIG_Z_UNIT: Kq,
        CONFIG_UNIT: Yq,
      } = Se),
        ({
          IX2_SESSION_STOPPED: $q,
          IX2_INSTANCE_ADDED: Qq,
          IX2_ELEMENT_STATE_CHANGED: Zq,
        } = be),
        (cv = {}),
        (Jq = "refState"),
        (eF = (e = cv, t = {}) => {
          switch (t.type) {
            case $q:
              return cv;
            case Qq: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, nr.getIn)(u, [r, n]) !== n && (u = lv(u, n, a, r, o)),
                Aa(u, r, s, i, o)
              );
            }
            case Zq: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Aa(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      tF = [
        [Uq, jq],
        [Wq, zq],
        [Hq, Kq],
        [Xq, Yq],
      ];
    });
  var pv = c((Ie) => {
    "use strict";
    Object.defineProperty(Ie, "__esModule", { value: !0 });
    Ie.renderPlugin =
      Ie.getPluginOrigin =
      Ie.getPluginDuration =
      Ie.getPluginDestination =
      Ie.getPluginConfig =
      Ie.createPluginInstance =
      Ie.clearPlugin =
        void 0;
    var nF = (e) => e.value;
    Ie.getPluginConfig = nF;
    var iF = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Ie.getPluginDuration = iF;
    var oF = (e) => e || { value: 0 };
    Ie.getPluginOrigin = oF;
    var aF = (e) => ({ value: e.value });
    Ie.getPluginDestination = aF;
    var sF = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Ie.createPluginInstance = sF;
    var uF = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Ie.renderPlugin = uF;
    var cF = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Ie.clearPlugin = cF;
  });
  var gv = c((Oe) => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.renderPlugin =
      Oe.getPluginOrigin =
      Oe.getPluginDuration =
      Oe.getPluginDestination =
      Oe.getPluginConfig =
      Oe.createPluginInstance =
      Oe.clearPlugin =
        void 0;
    var lF = (e) => document.querySelector(`[data-w-id="${e}"]`),
      fF = () => window.Webflow.require("spline"),
      dF = (e, t) => e.filter((r) => !t.includes(r)),
      pF = (e, t) => e.value[t];
    Oe.getPluginConfig = pF;
    var hF = () => null;
    Oe.getPluginDuration = hF;
    var hv = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      gF = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = dF(n, o);
          return a.length ? a.reduce((u, f) => ((u[f] = hv[f]), u), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = hv[a]), o), {});
      };
    Oe.getPluginOrigin = gF;
    var vF = (e) => e.value;
    Oe.getPluginDestination = vF;
    var yF = (e, t) => {
      var r;
      let n =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (r = r.target) === null ||
        r === void 0
          ? void 0
          : r.pluginElement;
      return n ? lF(n) : null;
    };
    Oe.createPluginInstance = yF;
    var EF = (e, t, r) => {
      let n = fF(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = o && s.findObjectById(o);
          if (!u) return;
          let { PLUGIN_SPLINE: f } = t;
          f.positionX != null && (u.position.x = f.positionX),
            f.positionY != null && (u.position.y = f.positionY),
            f.positionZ != null && (u.position.z = f.positionZ),
            f.rotationX != null && (u.rotation.x = f.rotationX),
            f.rotationY != null && (u.rotation.y = f.rotationY),
            f.rotationZ != null && (u.rotation.z = f.rotationZ),
            f.scaleX != null && (u.scale.x = f.scaleX),
            f.scaleY != null && (u.scale.y = f.scaleY),
            f.scaleZ != null && (u.scale.z = f.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    Oe.renderPlugin = EF;
    var mF = () => null;
    Oe.clearPlugin = mF;
  });
  var xa = c((wa) => {
    "use strict";
    Object.defineProperty(wa, "__esModule", { value: !0 });
    wa.normalizeColor = _F;
    var vv = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function _F(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof vv[o] == "string" ? vv[o].toLowerCase() : null) || o;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3
          ? ((t = parseInt(u[0] + u[0], 16)),
            (r = parseInt(u[1] + u[1], 16)),
            (n = parseInt(u[2] + u[2], 16)))
          : u.length === 6 &&
            ((t = parseInt(u.substring(0, 2), 16)),
            (r = parseInt(u.substring(2, 4), 16)),
            (n = parseInt(u.substring(4, 6), 16)));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10)),
          (i = parseFloat(u[3]));
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10));
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          f = parseFloat(u[0]),
          v = parseFloat(u[1].replace("%", "")) / 100,
          g = parseFloat(u[2].replace("%", "")) / 100;
        i = parseFloat(u[3]);
        let h = (1 - Math.abs(2 * g - 1)) * v,
          E = h * (1 - Math.abs(((f / 60) % 2) - 1)),
          w = g - h / 2,
          b,
          x,
          m;
        f >= 0 && f < 60
          ? ((b = h), (x = E), (m = 0))
          : f >= 60 && f < 120
          ? ((b = E), (x = h), (m = 0))
          : f >= 120 && f < 180
          ? ((b = 0), (x = h), (m = E))
          : f >= 180 && f < 240
          ? ((b = 0), (x = E), (m = h))
          : f >= 240 && f < 300
          ? ((b = E), (x = 0), (m = h))
          : ((b = h), (x = 0), (m = E)),
          (t = Math.round((b + w) * 255)),
          (r = Math.round((x + w) * 255)),
          (n = Math.round((m + w) * 255));
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          f = parseFloat(u[0]),
          v = parseFloat(u[1].replace("%", "")) / 100,
          g = parseFloat(u[2].replace("%", "")) / 100,
          h = (1 - Math.abs(2 * g - 1)) * v,
          E = h * (1 - Math.abs(((f / 60) % 2) - 1)),
          w = g - h / 2,
          b,
          x,
          m;
        f >= 0 && f < 60
          ? ((b = h), (x = E), (m = 0))
          : f >= 60 && f < 120
          ? ((b = E), (x = h), (m = 0))
          : f >= 120 && f < 180
          ? ((b = 0), (x = h), (m = E))
          : f >= 180 && f < 240
          ? ((b = 0), (x = E), (m = h))
          : f >= 240 && f < 300
          ? ((b = E), (x = 0), (m = h))
          : ((b = h), (x = 0), (m = E)),
          (t = Math.round((b + w) * 255)),
          (r = Math.round((x + w) * 255)),
          (n = Math.round((m + w) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var yv = c((Ae) => {
    "use strict";
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.renderPlugin =
      Ae.getPluginOrigin =
      Ae.getPluginDuration =
      Ae.getPluginDestination =
      Ae.getPluginConfig =
      Ae.createPluginInstance =
      Ae.clearPlugin =
        void 0;
    var bF = xa(),
      TF = (e, t) => e.value[t];
    Ae.getPluginConfig = TF;
    var IF = () => null;
    Ae.getPluginDuration = IF;
    var OF = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null)
        return (0, bF.normalizeColor)(i);
    };
    Ae.getPluginOrigin = OF;
    var AF = (e) => e.value;
    Ae.getPluginDestination = AF;
    var wF = () => null;
    Ae.createPluginInstance = wF;
    var xF = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: u, blue: f, alpha: v } = o,
        g;
      a != null && (g = a + i),
        s != null &&
          f != null &&
          u != null &&
          v != null &&
          (g = `rgba(${s}, ${u}, ${f}, ${v})`),
        g != null && document.documentElement.style.setProperty(n, g);
    };
    Ae.renderPlugin = xF;
    var SF = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    Ae.clearPlugin = SF;
  });
  var Ev = c((ei) => {
    "use strict";
    var Ca = fn().default;
    Object.defineProperty(ei, "__esModule", { value: !0 });
    ei.pluginMethodMap = void 0;
    var Sa = (Ge(), tt(Of)),
      CF = Ca(pv()),
      RF = Ca(gv()),
      LF = Ca(yv()),
      oX = (ei.pluginMethodMap = new Map([
        [Sa.ActionTypeConsts.PLUGIN_LOTTIE, { ...CF }],
        [Sa.ActionTypeConsts.PLUGIN_SPLINE, { ...RF }],
        [Sa.ActionTypeConsts.PLUGIN_VARIABLE, { ...LF }],
      ]));
  });
  var mv = {};
  Me(mv, {
    clearPlugin: () => Fa,
    createPluginInstance: () => PF,
    getPluginConfig: () => La,
    getPluginDestination: () => Pa,
    getPluginDuration: () => NF,
    getPluginOrigin: () => Na,
    isPluginType: () => Ft,
    renderPlugin: () => qa,
  });
  function Ft(e) {
    return Ra.pluginMethodMap.has(e);
  }
  var Ra,
    Mt,
    La,
    Na,
    NF,
    Pa,
    PF,
    qa,
    Fa,
    Ma = pe(() => {
      "use strict";
      Qn();
      Ra = oe(Ev());
      (Mt = (e) => (t) => {
        if (!Ze) return () => null;
        let r = Ra.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (La = Mt("getPluginConfig")),
        (Na = Mt("getPluginOrigin")),
        (NF = Mt("getPluginDuration")),
        (Pa = Mt("getPluginDestination")),
        (PF = Mt("createPluginInstance")),
        (qa = Mt("renderPlugin")),
        (Fa = Mt("clearPlugin"));
    });
  var bv = c((uX, _v) => {
    function qF(e, t) {
      return e == null || e !== e ? t : e;
    }
    _v.exports = qF;
  });
  var Iv = c((cX, Tv) => {
    function FF(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    Tv.exports = FF;
  });
  var Av = c((lX, Ov) => {
    function MF(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    Ov.exports = MF;
  });
  var xv = c((fX, wv) => {
    var DF = Av(),
      GF = DF();
    wv.exports = GF;
  });
  var Da = c((dX, Sv) => {
    var VF = xv(),
      kF = Gr();
    function BF(e, t) {
      return e && VF(e, t, kF);
    }
    Sv.exports = BF;
  });
  var Rv = c((pX, Cv) => {
    var UF = Pt();
    function WF(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!UF(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    Cv.exports = WF;
  });
  var Ga = c((hX, Lv) => {
    var HF = Da(),
      XF = Rv(),
      jF = XF(HF);
    Lv.exports = jF;
  });
  var Pv = c((gX, Nv) => {
    function zF(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    Nv.exports = zF;
  });
  var Fv = c((vX, qv) => {
    var KF = Iv(),
      YF = Ga(),
      $F = Ot(),
      QF = Pv(),
      ZF = Te();
    function JF(e, t, r) {
      var n = ZF(e) ? KF : QF,
        i = arguments.length < 3;
      return n(e, $F(t, 4), r, i, YF);
    }
    qv.exports = JF;
  });
  var Dv = c((yX, Mv) => {
    var eM = Ea(),
      tM = Ot(),
      rM = ma(),
      nM = Math.max,
      iM = Math.min;
    function oM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = rM(r)), (i = r < 0 ? nM(n + i, 0) : iM(i, n - 1))),
        eM(e, tM(t, 3), i, !0)
      );
    }
    Mv.exports = oM;
  });
  var Vv = c((EX, Gv) => {
    var aM = ya(),
      sM = Dv(),
      uM = aM(sM);
    Gv.exports = uM;
  });
  function kv(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function lM(e, t) {
    if (kv(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!cM.call(t, r[i]) || !kv(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var cM,
    Va,
    Bv = pe(() => {
      "use strict";
      cM = Object.prototype.hasOwnProperty;
      Va = lM;
    });
  var oy = {};
  Me(oy, {
    cleanupHTMLElement: () => s1,
    clearAllStyles: () => a1,
    clearObjectCache: () => xM,
    getActionListProgress: () => c1,
    getAffectedElements: () => Ha,
    getComputedStyle: () => FM,
    getDestinationValues: () => UM,
    getElementId: () => LM,
    getInstanceId: () => CM,
    getInstanceOrigin: () => GM,
    getItemConfigByKey: () => BM,
    getMaxDurationItemIndex: () => iy,
    getNamespacedParameterId: () => d1,
    getRenderType: () => ty,
    getStyleProp: () => WM,
    mediaQueriesEqual: () => h1,
    observeStore: () => qM,
    reduceListToGroup: () => l1,
    reifyState: () => NM,
    renderHTMLElement: () => HM,
    shallowEqual: () => Va,
    shouldAllowMediaQuery: () => p1,
    shouldNamespaceEventParameter: () => f1,
    stringifyTarget: () => g1,
  });
  function xM() {
    ti.clear();
  }
  function CM() {
    return "i" + SM++;
  }
  function LM(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + RM++;
  }
  function NM({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, oi.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function qM({ store: e, select: t, onChange: r, comparator: n = PM }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let f = t(i());
      if (f == null) {
        a();
        return;
      }
      n(f, s) || ((s = f), r(s, e));
    }
    return a;
  }
  function Hv(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function Ha({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (M, T) =>
          M.concat(
            Ha({
              config: { target: T },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: f,
        getSiblingElements: v,
        matchSelector: g,
        elementContains: h,
        isSiblingNode: E,
      } = i,
      { target: w } = e;
    if (!w) return [];
    let {
      id: b,
      objectId: x,
      selector: m,
      selectorGuids: S,
      appliesTo: O,
      useEventTarget: L,
    } = Hv(w);
    if (x) return [ti.has(x) ? ti.get(x) : ti.set(x, {}).get(x)];
    if (O === Wo.PAGE) {
      let M = a(b);
      return M ? [M] : [];
    }
    let C = (t?.action?.config?.affectedElements ?? {})[b || m] || {},
      U = !!(C.id || C.selector),
      W,
      X,
      z,
      Q = t && s(Hv(t.target));
    if (
      (U
        ? ((W = C.limitAffectedElements), (X = Q), (z = s(C)))
        : (X = z = s({ id: b, selector: m, selectorGuids: S })),
      t && L)
    ) {
      let M = r && (z || L === !0) ? [r] : u(Q);
      if (z) {
        if (L === OM) return u(z).filter((T) => M.some((F) => h(T, F)));
        if (L === Uv) return u(z).filter((T) => M.some((F) => h(F, T)));
        if (L === Wv) return u(z).filter((T) => M.some((F) => E(F, T)));
      }
      return M;
    }
    return X == null || z == null
      ? []
      : Ze && n
      ? u(z).filter((M) => n.contains(M))
      : W === Uv
      ? u(X, z)
      : W === IM
      ? f(u(X)).filter(g(z))
      : W === Wv
      ? v(u(X)).filter(g(z))
      : u(z);
  }
  function FM({ element: e, actionItem: t }) {
    if (!Ze) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case ur:
      case cr:
      case lr:
      case fr:
      case si:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function GM(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Ft(a)) return Na(a)(t[a], n);
    switch (n.actionTypeId) {
      case or:
      case ar:
      case sr:
      case Kr:
        return t[n.actionTypeId] || Xa[n.actionTypeId];
      case Yr:
        return MM(t[n.actionTypeId], n.config.filters);
      case $r:
        return DM(t[n.actionTypeId], n.config.fontVariations);
      case Zv:
        return { value: (0, gt.default)(parseFloat(o(e, ni)), 1) };
      case ur: {
        let s = o(e, st),
          u = o(e, ut),
          f,
          v;
        return (
          n.config.widthUnit === wt
            ? (f = Xv.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (f = (0, gt.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === wt
            ? (v = Xv.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (v = (0, gt.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: f, heightValue: v }
        );
      }
      case cr:
      case lr:
      case fr:
        return n1({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case si:
        return { value: (0, gt.default)(o(e, ii), r.display) };
      case wM:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function UM({ element: e, actionItem: t, elementApi: r }) {
    if (Ft(t.actionTypeId)) return Pa(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case or:
      case ar:
      case sr:
      case Kr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case ur: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: f } = t.config;
        if (!Ze) return { widthValue: u, heightValue: f };
        if (a === wt) {
          let v = n(e, st);
          i(e, st, ""), (u = o(e, "offsetWidth")), i(e, st, v);
        }
        if (s === wt) {
          let v = n(e, ut);
          i(e, ut, ""), (f = o(e, "offsetHeight")), i(e, ut, v);
        }
        return { widthValue: u, heightValue: f };
      }
      case cr:
      case lr:
      case fr: {
        let {
          rValue: n,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: s,
        } = t.config;
        if (s && s.startsWith("--")) {
          let { getStyle: u } = r,
            f = u(e, s),
            v = (0, Kv.normalizeColor)(f);
          return {
            rValue: v.red,
            gValue: v.green,
            bValue: v.blue,
            aValue: v.alpha,
          };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Yr:
        return t.config.filters.reduce(VM, {});
      case $r:
        return t.config.fontVariations.reduce(kM, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function ty(e) {
    if (/^TRANSFORM_/.test(e)) return $v;
    if (/^STYLE_/.test(e)) return Ua;
    if (/^GENERAL_/.test(e)) return Ba;
    if (/^PLUGIN_/.test(e)) return Qv;
  }
  function WM(e, t) {
    return e === Ua ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function HM(e, t, r, n, i, o, a, s, u) {
    switch (s) {
      case $v:
        return YM(e, t, r, i, a);
      case Ua:
        return i1(e, t, r, i, o, a);
      case Ba:
        return o1(e, i, a);
      case Qv: {
        let { actionTypeId: f } = i;
        if (Ft(f)) return qa(f)(u, t, i);
      }
    }
  }
  function YM(e, t, r, n, i) {
    let o = KM.map((s) => {
        let u = Xa[s],
          {
            xValue: f = u.xValue,
            yValue: v = u.yValue,
            zValue: g = u.zValue,
            xUnit: h = "",
            yUnit: E = "",
            zUnit: w = "",
          } = t[s] || {};
        switch (s) {
          case or:
            return `${pM}(${f}${h}, ${v}${E}, ${g}${w})`;
          case ar:
            return `${hM}(${f}${h}, ${v}${E}, ${g}${w})`;
          case sr:
            return `${gM}(${f}${h}) ${vM}(${v}${E}) ${yM}(${g}${w})`;
          case Kr:
            return `${EM}(${f}${h}, ${v}${E})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = i;
    Dt(e, At, i), a(e, At, o), ZM(n, r) && a(e, $n, mM);
  }
  function $M(e, t, r, n) {
    let i = (0, oi.default)(t, (a, s, u) => `${a} ${u}(${s}${zM(u, r)})`, ""),
      { setStyle: o } = n;
    Dt(e, Xr, n), o(e, Xr, i);
  }
  function QM(e, t, r, n) {
    let i = (0, oi.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    Dt(e, jr, n), o(e, jr, i);
  }
  function ZM({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === or && n !== void 0) ||
      (e === ar && n !== void 0) ||
      (e === sr && (t !== void 0 || r !== void 0))
    );
  }
  function r1(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function n1({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Wa[t],
      o = n(e, i),
      a = e1.test(o) ? o : r[i],
      s = r1(t1, a).split(zr);
    return {
      rValue: (0, gt.default)(parseInt(s[0], 10), 255),
      gValue: (0, gt.default)(parseInt(s[1], 10), 255),
      bValue: (0, gt.default)(parseInt(s[2], 10), 255),
      aValue: (0, gt.default)(parseFloat(s[3]), 1),
    };
  }
  function i1(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case ur: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: f, heightValue: v } = r;
        f !== void 0 && (s === wt && (s = "px"), Dt(e, st, o), a(e, st, f + s)),
          v !== void 0 &&
            (u === wt && (u = "px"), Dt(e, ut, o), a(e, ut, v + u));
        break;
      }
      case Yr: {
        $M(e, r, n.config, o);
        break;
      }
      case $r: {
        QM(e, r, n.config, o);
        break;
      }
      case cr:
      case lr:
      case fr: {
        let s = Wa[n.actionTypeId],
          u = Math.round(r.rValue),
          f = Math.round(r.gValue),
          v = Math.round(r.bValue),
          g = r.aValue;
        Dt(e, s, o),
          a(e, s, g >= 1 ? `rgb(${u},${f},${v})` : `rgba(${u},${f},${v},${g})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        Dt(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function o1(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case si: {
        let { value: i } = t.config;
        i === _M && Ze ? n(e, ii, ba) : n(e, ii, i);
        return;
      }
    }
  }
  function Dt(e, t, r) {
    if (!Ze) return;
    let n = ey[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, ir);
    if (!a) {
      o(e, ir, n);
      return;
    }
    let s = a.split(zr).map(Jv);
    s.indexOf(n) === -1 && o(e, ir, s.concat(n).join(zr));
  }
  function ry(e, t, r) {
    if (!Ze) return;
    let n = ey[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, ir);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        ir,
        a
          .split(zr)
          .map(Jv)
          .filter((s) => s !== n)
          .join(zr)
      );
  }
  function a1({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        f = i[u];
      f && jv({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        jv({ actionList: i[o], elementApi: t });
      });
  }
  function jv({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        zv({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            zv({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function zv({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      Ft(o)
        ? (s = (u) => Fa(o)(u, i))
        : (s = ny({ effect: u1, actionTypeId: o, elementApi: r })),
        Ha({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function s1(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === ur) {
      let { config: a } = t;
      a.widthUnit === wt && n(e, st, ""), a.heightUnit === wt && n(e, ut, "");
    }
    i(e, ir) && ny({ effect: ry, actionTypeId: o, elementApi: r })(e);
  }
  function u1(e, t, r) {
    let { setStyle: n } = r;
    ry(e, t, r), n(e, t, ""), t === At && n(e, $n, "");
  }
  function iy(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function c1(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, f) => {
        if (n && f === 0) return;
        let { actionItems: v } = u,
          g = v[iy(v)],
          { config: h, actionTypeId: E } = g;
        i.id === g.id && (s = a + o);
        let w = ty(E) === Ba ? 0 : h.duration;
        a += h.delay + w;
      }),
      a > 0 ? Hr(s / a) : 0
    );
  }
  function l1({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, ai.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: f }) => f.some(a));
        }),
      (0, ai.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function f1(e, { basedOn: t }) {
    return (
      (e === Qe.SCROLLING_IN_VIEW && (t === ot.ELEMENT || t == null)) ||
      (e === Qe.MOUSE_MOVE && t === ot.ELEMENT)
    );
  }
  function d1(e, t) {
    return e + AM + t;
  }
  function p1(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function h1(e, t) {
    return Va(e && e.sort(), t && t.sort());
  }
  function g1(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + ka + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + ka + r + ka + n;
  }
  var gt,
    oi,
    ri,
    ai,
    Kv,
    fM,
    dM,
    pM,
    hM,
    gM,
    vM,
    yM,
    EM,
    mM,
    _M,
    ni,
    Xr,
    jr,
    st,
    ut,
    Yv,
    bM,
    TM,
    Uv,
    IM,
    Wv,
    OM,
    ii,
    ir,
    wt,
    zr,
    AM,
    ka,
    $v,
    Ba,
    Ua,
    Qv,
    or,
    ar,
    sr,
    Kr,
    Zv,
    Yr,
    $r,
    ur,
    cr,
    lr,
    fr,
    si,
    wM,
    Jv,
    Wa,
    ey,
    ti,
    SM,
    RM,
    PM,
    Xv,
    MM,
    DM,
    VM,
    kM,
    BM,
    Xa,
    XM,
    jM,
    zM,
    KM,
    JM,
    e1,
    t1,
    ny,
    ay = pe(() => {
      "use strict";
      (gt = oe(bv())), (oi = oe(Fv())), (ri = oe(Vv())), (ai = oe(Kt()));
      Ge();
      Bv();
      Oa();
      Kv = oe(xa());
      Ma();
      Qn();
      ({
        BACKGROUND: fM,
        TRANSFORM: dM,
        TRANSLATE_3D: pM,
        SCALE_3D: hM,
        ROTATE_X: gM,
        ROTATE_Y: vM,
        ROTATE_Z: yM,
        SKEW: EM,
        PRESERVE_3D: mM,
        FLEX: _M,
        OPACITY: ni,
        FILTER: Xr,
        FONT_VARIATION_SETTINGS: jr,
        WIDTH: st,
        HEIGHT: ut,
        BACKGROUND_COLOR: Yv,
        BORDER_COLOR: bM,
        COLOR: TM,
        CHILDREN: Uv,
        IMMEDIATE_CHILDREN: IM,
        SIBLINGS: Wv,
        PARENT: OM,
        DISPLAY: ii,
        WILL_CHANGE: ir,
        AUTO: wt,
        COMMA_DELIMITER: zr,
        COLON_DELIMITER: AM,
        BAR_DELIMITER: ka,
        RENDER_TRANSFORM: $v,
        RENDER_GENERAL: Ba,
        RENDER_STYLE: Ua,
        RENDER_PLUGIN: Qv,
      } = Se),
        ({
          TRANSFORM_MOVE: or,
          TRANSFORM_SCALE: ar,
          TRANSFORM_ROTATE: sr,
          TRANSFORM_SKEW: Kr,
          STYLE_OPACITY: Zv,
          STYLE_FILTER: Yr,
          STYLE_FONT_VARIATION: $r,
          STYLE_SIZE: ur,
          STYLE_BACKGROUND_COLOR: cr,
          STYLE_BORDER: lr,
          STYLE_TEXT_COLOR: fr,
          GENERAL_DISPLAY: si,
          OBJECT_VALUE: wM,
        } = De),
        (Jv = (e) => e.trim()),
        (Wa = Object.freeze({ [cr]: Yv, [lr]: bM, [fr]: TM })),
        (ey = Object.freeze({
          [At]: dM,
          [Yv]: fM,
          [ni]: ni,
          [Xr]: Xr,
          [st]: st,
          [ut]: ut,
          [jr]: jr,
        })),
        (ti = new Map());
      SM = 1;
      RM = 1;
      PM = (e, t) => e === t;
      (Xv = /px/),
        (MM = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = XM[n.type]), r),
            e || {}
          )),
        (DM = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = jM[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (VM = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (kM = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (BM = (e, t, r) => {
          if (Ft(e)) return La(e)(r, t);
          switch (e) {
            case Yr: {
              let n = (0, ri.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case $r: {
              let n = (0, ri.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Xa = {
        [or]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [ar]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [sr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Kr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (XM = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (jM = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (zM = (e, t) => {
          let r = (0, ri.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (KM = Object.keys(Xa));
      (JM = "\\(([^)]+)\\)"), (e1 = /^rgb/), (t1 = RegExp(`rgba?${JM}`));
      ny =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case or:
            case ar:
            case sr:
            case Kr:
              e(n, At, r);
              break;
            case Yr:
              e(n, Xr, r);
              break;
            case $r:
              e(n, jr, r);
              break;
            case Zv:
              e(n, ni, r);
              break;
            case ur:
              e(n, st, r), e(n, ut, r);
              break;
            case cr:
            case lr:
            case fr:
              e(n, Wa[t], r);
              break;
            case si:
              e(n, ii, r);
              break;
          }
        };
    });
  var Gt = c((Pe) => {
    "use strict";
    var dr = fn().default;
    Object.defineProperty(Pe, "__esModule", { value: !0 });
    Pe.IX2VanillaUtils =
      Pe.IX2VanillaPlugins =
      Pe.IX2ElementsReducer =
      Pe.IX2Easings =
      Pe.IX2EasingUtils =
      Pe.IX2BrowserSupport =
        void 0;
    var v1 = dr((Qn(), tt(tv)));
    Pe.IX2BrowserSupport = v1;
    var y1 = dr((Ia(), tt(Wr)));
    Pe.IX2Easings = y1;
    var E1 = dr((Oa(), tt(uv)));
    Pe.IX2EasingUtils = E1;
    var m1 = dr((dv(), tt(fv)));
    Pe.IX2ElementsReducer = m1;
    var _1 = dr((Ma(), tt(mv)));
    Pe.IX2VanillaPlugins = _1;
    var b1 = dr((ay(), tt(oy)));
    Pe.IX2VanillaUtils = b1;
  });
  var ci,
    vt,
    T1,
    I1,
    O1,
    A1,
    w1,
    x1,
    ui,
    sy,
    S1,
    C1,
    ja,
    R1,
    L1,
    N1,
    P1,
    uy,
    cy = pe(() => {
      "use strict";
      Ge();
      (ci = oe(Gt())),
        (vt = oe(Kt())),
        ({
          IX2_RAW_DATA_IMPORTED: T1,
          IX2_SESSION_STOPPED: I1,
          IX2_INSTANCE_ADDED: O1,
          IX2_INSTANCE_STARTED: A1,
          IX2_INSTANCE_REMOVED: w1,
          IX2_ANIMATION_FRAME_CHANGED: x1,
        } = be),
        ({
          optimizeFloat: ui,
          applyEasing: sy,
          createBezierEasing: S1,
        } = ci.IX2EasingUtils),
        ({ RENDER_GENERAL: C1 } = Se),
        ({
          getItemConfigByKey: ja,
          getRenderType: R1,
          getStyleProp: L1,
        } = ci.IX2VanillaUtils),
        (N1 = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: f,
              skipMotion: v,
              skipToValue: g,
            } = e,
            { parameters: h } = t.payload,
            E = Math.max(1 - a, 0.01),
            w = h[n];
          w == null && ((E = 1), (w = s));
          let b = Math.max(w, 0) || 0,
            x = ui(b - r),
            m = v ? g : ui(r + x * E),
            S = m * 100;
          if (m === r && e.current) return e;
          let O, L, q, C;
          for (let W = 0, { length: X } = i; W < X; W++) {
            let { keyframe: z, actionItems: Q } = i[W];
            if ((W === 0 && (O = Q[0]), S >= z)) {
              O = Q[0];
              let M = i[W + 1],
                T = M && S !== z;
              (L = T ? M.actionItems[0] : null),
                T && ((q = z / 100), (C = (M.keyframe - z) / 100));
            }
          }
          let U = {};
          if (O && !L)
            for (let W = 0, { length: X } = o; W < X; W++) {
              let z = o[W];
              U[z] = ja(u, z, O.config);
            }
          else if (O && L && q !== void 0 && C !== void 0) {
            let W = (m - q) / C,
              X = O.config.easing,
              z = sy(X, W, f);
            for (let Q = 0, { length: M } = o; Q < M; Q++) {
              let T = o[Q],
                F = ja(u, T, O.config),
                $ = (ja(u, T, L.config) - F) * z + F;
              U[T] = $;
            }
          }
          return (0, vt.merge)(e, { position: m, current: U });
        }),
        (P1 = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: f,
              destinationKeys: v,
              pluginDuration: g,
              instanceDelay: h,
              customEasingFn: E,
              skipMotion: w,
            } = e,
            b = u.config.easing,
            { duration: x, delay: m } = u.config;
          g != null && (x = g),
            (m = h ?? m),
            a === C1 ? (x = 0) : (o || w) && (x = m = 0);
          let { now: S } = t.payload;
          if (r && n) {
            let O = S - (i + m);
            if (s) {
              let W = S - i,
                X = x + m,
                z = ui(Math.min(Math.max(0, W / X), 1));
              e = (0, vt.set)(e, "verboseTimeElapsed", X * z);
            }
            if (O < 0) return e;
            let L = ui(Math.min(Math.max(0, O / x), 1)),
              q = sy(b, L, E),
              C = {},
              U = null;
            return (
              v.length &&
                (U = v.reduce((W, X) => {
                  let z = f[X],
                    Q = parseFloat(n[X]) || 0,
                    T = (parseFloat(z) - Q) * q + Q;
                  return (W[X] = T), W;
                }, {})),
              (C.current = U),
              (C.position = L),
              L === 1 && ((C.active = !1), (C.complete = !0)),
              (0, vt.merge)(e, C)
            );
          }
          return e;
        }),
        (uy = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case T1:
              return t.payload.ixInstances || Object.freeze({});
            case I1:
              return Object.freeze({});
            case O1: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: f,
                  isCarrier: v,
                  origin: g,
                  destination: h,
                  immediate: E,
                  verbose: w,
                  continuous: b,
                  parameterId: x,
                  actionGroups: m,
                  smoothing: S,
                  restingValue: O,
                  pluginInstance: L,
                  pluginDuration: q,
                  instanceDelay: C,
                  skipMotion: U,
                  skipToValue: W,
                } = t.payload,
                { actionTypeId: X } = i,
                z = R1(X),
                Q = L1(z, X),
                M = Object.keys(h).filter(
                  (F) => h[F] != null && typeof h[F] != "string"
                ),
                { easing: T } = i.config;
              return (0, vt.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: g,
                destination: h,
                destinationKeys: M,
                immediate: E,
                verbose: w,
                current: null,
                actionItem: i,
                actionTypeId: X,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: f,
                renderType: z,
                isCarrier: v,
                styleProp: Q,
                continuous: b,
                parameterId: x,
                actionGroups: m,
                smoothing: S,
                restingValue: O,
                pluginInstance: L,
                pluginDuration: q,
                instanceDelay: C,
                skipMotion: U,
                skipToValue: W,
                customEasingFn:
                  Array.isArray(T) && T.length === 4 ? S1(T) : void 0,
              });
            }
            case A1: {
              let { instanceId: r, time: n } = t.payload;
              return (0, vt.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case w1: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case x1: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  u = s.continuous ? N1 : P1;
                r = (0, vt.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var q1,
    F1,
    M1,
    ly,
    fy = pe(() => {
      "use strict";
      Ge();
      ({
        IX2_RAW_DATA_IMPORTED: q1,
        IX2_SESSION_STOPPED: F1,
        IX2_PARAMETER_CHANGED: M1,
      } = be),
        (ly = (e = {}, t) => {
          switch (t.type) {
            case q1:
              return t.payload.ixParameters || {};
            case F1:
              return {};
            case M1: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var hy = {};
  Me(hy, { default: () => G1 });
  var dy,
    py,
    D1,
    G1,
    gy = pe(() => {
      "use strict";
      dy = oe(Uo());
      wf();
      zf();
      $f();
      py = oe(Gt());
      cy();
      fy();
      ({ ixElements: D1 } = py.IX2ElementsReducer),
        (G1 = (0, dy.combineReducers)({
          ixData: Af,
          ixRequest: jf,
          ixSession: Yf,
          ixElements: D1,
          ixInstances: uy,
          ixParameters: ly,
        }));
    });
  var yy = c((FX, vy) => {
    var V1 = Tt(),
      k1 = Te(),
      B1 = pt(),
      U1 = "[object String]";
    function W1(e) {
      return typeof e == "string" || (!k1(e) && B1(e) && V1(e) == U1);
    }
    vy.exports = W1;
  });
  var my = c((MX, Ey) => {
    var H1 = va(),
      X1 = H1("length");
    Ey.exports = X1;
  });
  var by = c((DX, _y) => {
    var j1 = "\\ud800-\\udfff",
      z1 = "\\u0300-\\u036f",
      K1 = "\\ufe20-\\ufe2f",
      Y1 = "\\u20d0-\\u20ff",
      $1 = z1 + K1 + Y1,
      Q1 = "\\ufe0e\\ufe0f",
      Z1 = "\\u200d",
      J1 = RegExp("[" + Z1 + j1 + $1 + Q1 + "]");
    function eD(e) {
      return J1.test(e);
    }
    _y.exports = eD;
  });
  var Ry = c((GX, Cy) => {
    var Iy = "\\ud800-\\udfff",
      tD = "\\u0300-\\u036f",
      rD = "\\ufe20-\\ufe2f",
      nD = "\\u20d0-\\u20ff",
      iD = tD + rD + nD,
      oD = "\\ufe0e\\ufe0f",
      aD = "[" + Iy + "]",
      za = "[" + iD + "]",
      Ka = "\\ud83c[\\udffb-\\udfff]",
      sD = "(?:" + za + "|" + Ka + ")",
      Oy = "[^" + Iy + "]",
      Ay = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      wy = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      uD = "\\u200d",
      xy = sD + "?",
      Sy = "[" + oD + "]?",
      cD = "(?:" + uD + "(?:" + [Oy, Ay, wy].join("|") + ")" + Sy + xy + ")*",
      lD = Sy + xy + cD,
      fD = "(?:" + [Oy + za + "?", za, Ay, wy, aD].join("|") + ")",
      Ty = RegExp(Ka + "(?=" + Ka + ")|" + fD + lD, "g");
    function dD(e) {
      for (var t = (Ty.lastIndex = 0); Ty.test(e); ) ++t;
      return t;
    }
    Cy.exports = dD;
  });
  var Ny = c((VX, Ly) => {
    var pD = my(),
      hD = by(),
      gD = Ry();
    function vD(e) {
      return hD(e) ? gD(e) : pD(e);
    }
    Ly.exports = vD;
  });
  var qy = c((kX, Py) => {
    var yD = Bn(),
      ED = Un(),
      mD = Pt(),
      _D = yy(),
      bD = Ny(),
      TD = "[object Map]",
      ID = "[object Set]";
    function OD(e) {
      if (e == null) return 0;
      if (mD(e)) return _D(e) ? bD(e) : e.length;
      var t = ED(e);
      return t == TD || t == ID ? e.size : yD(e).length;
    }
    Py.exports = OD;
  });
  var My = c((BX, Fy) => {
    var AD = "Expected a function";
    function wD(e) {
      if (typeof e != "function") throw new TypeError(AD);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Fy.exports = wD;
  });
  var Ya = c((UX, Dy) => {
    var xD = It(),
      SD = (function () {
        try {
          var e = xD(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Dy.exports = SD;
  });
  var $a = c((WX, Vy) => {
    var Gy = Ya();
    function CD(e, t, r) {
      t == "__proto__" && Gy
        ? Gy(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Vy.exports = CD;
  });
  var By = c((HX, ky) => {
    var RD = $a(),
      LD = Ln(),
      ND = Object.prototype,
      PD = ND.hasOwnProperty;
    function qD(e, t, r) {
      var n = e[t];
      (!(PD.call(e, t) && LD(n, r)) || (r === void 0 && !(t in e))) &&
        RD(e, t, r);
    }
    ky.exports = qD;
  });
  var Hy = c((XX, Wy) => {
    var FD = By(),
      MD = kr(),
      DD = Dn(),
      Uy = at(),
      GD = rr();
    function VD(e, t, r, n) {
      if (!Uy(e)) return e;
      t = MD(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = GD(t[i]),
          f = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var v = s[u];
          (f = n ? n(v, u, s) : void 0),
            f === void 0 && (f = Uy(v) ? v : DD(t[i + 1]) ? [] : {});
        }
        FD(s, u, f), (s = s[u]);
      }
      return e;
    }
    Wy.exports = VD;
  });
  var jy = c((jX, Xy) => {
    var kD = Xn(),
      BD = Hy(),
      UD = kr();
    function WD(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = kD(e, a);
        r(s, a) && BD(o, UD(a, e), s);
      }
      return o;
    }
    Xy.exports = WD;
  });
  var Ky = c((zX, zy) => {
    var HD = Fn(),
      XD = Co(),
      jD = ta(),
      zD = ea(),
      KD = Object.getOwnPropertySymbols,
      YD = KD
        ? function (e) {
            for (var t = []; e; ) HD(t, jD(e)), (e = XD(e));
            return t;
          }
        : zD;
    zy.exports = YD;
  });
  var $y = c((KX, Yy) => {
    function $D(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    Yy.exports = $D;
  });
  var Zy = c((YX, Qy) => {
    var QD = at(),
      ZD = kn(),
      JD = $y(),
      e2 = Object.prototype,
      t2 = e2.hasOwnProperty;
    function r2(e) {
      if (!QD(e)) return JD(e);
      var t = ZD(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !t2.call(e, n))) || r.push(n);
      return r;
    }
    Qy.exports = r2;
  });
  var eE = c(($X, Jy) => {
    var n2 = na(),
      i2 = Zy(),
      o2 = Pt();
    function a2(e) {
      return o2(e) ? n2(e, !0) : i2(e);
    }
    Jy.exports = a2;
  });
  var rE = c((QX, tE) => {
    var s2 = Jo(),
      u2 = Ky(),
      c2 = eE();
    function l2(e) {
      return s2(e, c2, u2);
    }
    tE.exports = l2;
  });
  var iE = c((ZX, nE) => {
    var f2 = ga(),
      d2 = Ot(),
      p2 = jy(),
      h2 = rE();
    function g2(e, t) {
      if (e == null) return {};
      var r = f2(h2(e), function (n) {
        return [n];
      });
      return (
        (t = d2(t)),
        p2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    nE.exports = g2;
  });
  var aE = c((JX, oE) => {
    var v2 = Ot(),
      y2 = My(),
      E2 = iE();
    function m2(e, t) {
      return E2(e, y2(v2(t)));
    }
    oE.exports = m2;
  });
  var uE = c((ej, sE) => {
    var _2 = Bn(),
      b2 = Un(),
      T2 = qr(),
      I2 = Te(),
      O2 = Pt(),
      A2 = Mn(),
      w2 = kn(),
      x2 = Vn(),
      S2 = "[object Map]",
      C2 = "[object Set]",
      R2 = Object.prototype,
      L2 = R2.hasOwnProperty;
    function N2(e) {
      if (e == null) return !0;
      if (
        O2(e) &&
        (I2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          A2(e) ||
          x2(e) ||
          T2(e))
      )
        return !e.length;
      var t = b2(e);
      if (t == S2 || t == C2) return !e.size;
      if (w2(e)) return !_2(e).length;
      for (var r in e) if (L2.call(e, r)) return !1;
      return !0;
    }
    sE.exports = N2;
  });
  var lE = c((tj, cE) => {
    var P2 = $a(),
      q2 = Da(),
      F2 = Ot();
    function M2(e, t) {
      var r = {};
      return (
        (t = F2(t, 3)),
        q2(e, function (n, i, o) {
          P2(r, i, t(n, i, o));
        }),
        r
      );
    }
    cE.exports = M2;
  });
  var dE = c((rj, fE) => {
    function D2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    fE.exports = D2;
  });
  var hE = c((nj, pE) => {
    var G2 = zn();
    function V2(e) {
      return typeof e == "function" ? e : G2;
    }
    pE.exports = V2;
  });
  var vE = c((ij, gE) => {
    var k2 = dE(),
      B2 = Ga(),
      U2 = hE(),
      W2 = Te();
    function H2(e, t) {
      var r = W2(e) ? k2 : B2;
      return r(e, U2(t));
    }
    gE.exports = H2;
  });
  var EE = c((oj, yE) => {
    var X2 = $e(),
      j2 = function () {
        return X2.Date.now();
      };
    yE.exports = j2;
  });
  var bE = c((aj, _E) => {
    var z2 = at(),
      Qa = EE(),
      mE = Kn(),
      K2 = "Expected a function",
      Y2 = Math.max,
      $2 = Math.min;
    function Q2(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        f = 0,
        v = !1,
        g = !1,
        h = !0;
      if (typeof e != "function") throw new TypeError(K2);
      (t = mE(t) || 0),
        z2(r) &&
          ((v = !!r.leading),
          (g = "maxWait" in r),
          (o = g ? Y2(mE(r.maxWait) || 0, t) : o),
          (h = "trailing" in r ? !!r.trailing : h));
      function E(C) {
        var U = n,
          W = i;
        return (n = i = void 0), (f = C), (a = e.apply(W, U)), a;
      }
      function w(C) {
        return (f = C), (s = setTimeout(m, t)), v ? E(C) : a;
      }
      function b(C) {
        var U = C - u,
          W = C - f,
          X = t - U;
        return g ? $2(X, o - W) : X;
      }
      function x(C) {
        var U = C - u,
          W = C - f;
        return u === void 0 || U >= t || U < 0 || (g && W >= o);
      }
      function m() {
        var C = Qa();
        if (x(C)) return S(C);
        s = setTimeout(m, b(C));
      }
      function S(C) {
        return (s = void 0), h && n ? E(C) : ((n = i = void 0), a);
      }
      function O() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = u = i = s = void 0);
      }
      function L() {
        return s === void 0 ? a : S(Qa());
      }
      function q() {
        var C = Qa(),
          U = x(C);
        if (((n = arguments), (i = this), (u = C), U)) {
          if (s === void 0) return w(u);
          if (g) return clearTimeout(s), (s = setTimeout(m, t)), E(u);
        }
        return s === void 0 && (s = setTimeout(m, t)), a;
      }
      return (q.cancel = O), (q.flush = L), q;
    }
    _E.exports = Q2;
  });
  var IE = c((sj, TE) => {
    var Z2 = bE(),
      J2 = at(),
      eG = "Expected a function";
    function tG(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(eG);
      return (
        J2(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        Z2(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    TE.exports = tG;
  });
  var AE = {};
  Me(AE, {
    actionListPlaybackChanged: () => hr,
    animationFrameChanged: () => fi,
    clearRequested: () => wG,
    elementStateChanged: () => os,
    eventListenerAdded: () => li,
    eventStateChanged: () => rs,
    instanceAdded: () => ns,
    instanceRemoved: () => is,
    instanceStarted: () => di,
    mediaQueriesDefined: () => ss,
    parameterChanged: () => pr,
    playbackRequested: () => OG,
    previewRequested: () => IG,
    rawDataImported: () => Za,
    sessionInitialized: () => Ja,
    sessionStarted: () => es,
    sessionStopped: () => ts,
    stopRequested: () => AG,
    testFrameRendered: () => xG,
    viewportWidthChanged: () => as,
  });
  var OE,
    rG,
    nG,
    iG,
    oG,
    aG,
    sG,
    uG,
    cG,
    lG,
    fG,
    dG,
    pG,
    hG,
    gG,
    vG,
    yG,
    EG,
    mG,
    _G,
    bG,
    TG,
    Za,
    Ja,
    es,
    ts,
    IG,
    OG,
    AG,
    wG,
    li,
    xG,
    rs,
    fi,
    pr,
    ns,
    di,
    is,
    os,
    hr,
    as,
    ss,
    pi = pe(() => {
      "use strict";
      Ge();
      (OE = oe(Gt())),
        ({
          IX2_RAW_DATA_IMPORTED: rG,
          IX2_SESSION_INITIALIZED: nG,
          IX2_SESSION_STARTED: iG,
          IX2_SESSION_STOPPED: oG,
          IX2_PREVIEW_REQUESTED: aG,
          IX2_PLAYBACK_REQUESTED: sG,
          IX2_STOP_REQUESTED: uG,
          IX2_CLEAR_REQUESTED: cG,
          IX2_EVENT_LISTENER_ADDED: lG,
          IX2_TEST_FRAME_RENDERED: fG,
          IX2_EVENT_STATE_CHANGED: dG,
          IX2_ANIMATION_FRAME_CHANGED: pG,
          IX2_PARAMETER_CHANGED: hG,
          IX2_INSTANCE_ADDED: gG,
          IX2_INSTANCE_STARTED: vG,
          IX2_INSTANCE_REMOVED: yG,
          IX2_ELEMENT_STATE_CHANGED: EG,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: mG,
          IX2_VIEWPORT_WIDTH_CHANGED: _G,
          IX2_MEDIA_QUERIES_DEFINED: bG,
        } = be),
        ({ reifyState: TG } = OE.IX2VanillaUtils),
        (Za = (e) => ({ type: rG, payload: { ...TG(e) } })),
        (Ja = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: nG,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (es = () => ({ type: iG })),
        (ts = () => ({ type: oG })),
        (IG = ({ rawData: e, defer: t }) => ({
          type: aG,
          payload: { defer: t, rawData: e },
        })),
        (OG = ({
          actionTypeId: e = De.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: sG,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (AG = (e) => ({ type: uG, payload: { actionListId: e } })),
        (wG = () => ({ type: cG })),
        (li = (e, t) => ({
          type: lG,
          payload: { target: e, listenerParams: t },
        })),
        (xG = (e = 1) => ({ type: fG, payload: { step: e } })),
        (rs = (e, t) => ({ type: dG, payload: { stateKey: e, newState: t } })),
        (fi = (e, t) => ({ type: pG, payload: { now: e, parameters: t } })),
        (pr = (e, t) => ({ type: hG, payload: { key: e, value: t } })),
        (ns = (e) => ({ type: gG, payload: { ...e } })),
        (di = (e, t) => ({ type: vG, payload: { instanceId: e, time: t } })),
        (is = (e) => ({ type: yG, payload: { instanceId: e } })),
        (os = (e, t, r, n) => ({
          type: EG,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (hr = ({ actionListId: e, isPlaying: t }) => ({
          type: mG,
          payload: { actionListId: e, isPlaying: t },
        })),
        (as = ({ width: e, mediaQueries: t }) => ({
          type: _G,
          payload: { width: e, mediaQueries: t },
        })),
        (ss = () => ({ type: bG }));
    });
  var qe = {};
  Me(qe, {
    elementContains: () => ls,
    getChildElements: () => DG,
    getClosestElement: () => Qr,
    getProperty: () => NG,
    getQuerySelector: () => cs,
    getRefType: () => fs,
    getSiblingElements: () => GG,
    getStyle: () => LG,
    getValidDocument: () => qG,
    isSiblingNode: () => MG,
    matchSelector: () => PG,
    queryDocument: () => FG,
    setStyle: () => RG,
  });
  function RG(e, t, r) {
    e.style[t] = r;
  }
  function LG(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function NG(e, t) {
    return e[t];
  }
  function PG(e) {
    return (t) => t[us](e);
  }
  function cs({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(wE) !== -1) {
        let n = e.split(wE),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(SE)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function qG(e) {
    return e == null || e === document.documentElement.getAttribute(SE)
      ? document
      : null;
  }
  function FG(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function ls(e, t) {
    return e.contains(t);
  }
  function MG(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function DG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function GG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function fs(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? SG
        : CG
      : null;
  }
  var xE,
    us,
    wE,
    SG,
    CG,
    SE,
    Qr,
    CE = pe(() => {
      "use strict";
      xE = oe(Gt());
      Ge();
      ({ ELEMENT_MATCHES: us } = xE.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: wE,
          HTML_ELEMENT: SG,
          PLAIN_OBJECT: CG,
          WF_PAGE: SE,
        } = Se);
      Qr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[us] && r[us](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var ds = c((lj, LE) => {
    var VG = at(),
      RE = Object.create,
      kG = (function () {
        function e() {}
        return function (t) {
          if (!VG(t)) return {};
          if (RE) return RE(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    LE.exports = kG;
  });
  var hi = c((fj, NE) => {
    function BG() {}
    NE.exports = BG;
  });
  var vi = c((dj, PE) => {
    var UG = ds(),
      WG = hi();
    function gi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    gi.prototype = UG(WG.prototype);
    gi.prototype.constructor = gi;
    PE.exports = gi;
  });
  var DE = c((pj, ME) => {
    var qE = Xt(),
      HG = qr(),
      XG = Te(),
      FE = qE ? qE.isConcatSpreadable : void 0;
    function jG(e) {
      return XG(e) || HG(e) || !!(FE && e && e[FE]);
    }
    ME.exports = jG;
  });
  var kE = c((hj, VE) => {
    var zG = Fn(),
      KG = DE();
    function GE(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = KG), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? GE(s, t - 1, r, n, i)
            : zG(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    VE.exports = GE;
  });
  var UE = c((gj, BE) => {
    var YG = kE();
    function $G(e) {
      var t = e == null ? 0 : e.length;
      return t ? YG(e, 1) : [];
    }
    BE.exports = $G;
  });
  var HE = c((vj, WE) => {
    function QG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    WE.exports = QG;
  });
  var zE = c((yj, jE) => {
    var ZG = HE(),
      XE = Math.max;
    function JG(e, t, r) {
      return (
        (t = XE(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = XE(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), ZG(e, this, s);
        }
      );
    }
    jE.exports = JG;
  });
  var YE = c((Ej, KE) => {
    function eV(e) {
      return function () {
        return e;
      };
    }
    KE.exports = eV;
  });
  var ZE = c((mj, QE) => {
    var tV = YE(),
      $E = Ya(),
      rV = zn(),
      nV = $E
        ? function (e, t) {
            return $E(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: tV(t),
              writable: !0,
            });
          }
        : rV;
    QE.exports = nV;
  });
  var em = c((_j, JE) => {
    var iV = 800,
      oV = 16,
      aV = Date.now;
    function sV(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = aV(),
          i = oV - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= iV) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    JE.exports = sV;
  });
  var rm = c((bj, tm) => {
    var uV = ZE(),
      cV = em(),
      lV = cV(uV);
    tm.exports = lV;
  });
  var im = c((Tj, nm) => {
    var fV = UE(),
      dV = zE(),
      pV = rm();
    function hV(e) {
      return pV(dV(e, void 0, fV), e + "");
    }
    nm.exports = hV;
  });
  var sm = c((Ij, am) => {
    var om = ia(),
      gV = om && new om();
    am.exports = gV;
  });
  var cm = c((Oj, um) => {
    function vV() {}
    um.exports = vV;
  });
  var ps = c((Aj, fm) => {
    var lm = sm(),
      yV = cm(),
      EV = lm
        ? function (e) {
            return lm.get(e);
          }
        : yV;
    fm.exports = EV;
  });
  var pm = c((wj, dm) => {
    var mV = {};
    dm.exports = mV;
  });
  var hs = c((xj, gm) => {
    var hm = pm(),
      _V = Object.prototype,
      bV = _V.hasOwnProperty;
    function TV(e) {
      for (
        var t = e.name + "", r = hm[t], n = bV.call(hm, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    gm.exports = TV;
  });
  var Ei = c((Sj, vm) => {
    var IV = ds(),
      OV = hi(),
      AV = 4294967295;
    function yi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = AV),
        (this.__views__ = []);
    }
    yi.prototype = IV(OV.prototype);
    yi.prototype.constructor = yi;
    vm.exports = yi;
  });
  var Em = c((Cj, ym) => {
    function wV(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    ym.exports = wV;
  });
  var _m = c((Rj, mm) => {
    var xV = Ei(),
      SV = vi(),
      CV = Em();
    function RV(e) {
      if (e instanceof xV) return e.clone();
      var t = new SV(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = CV(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    mm.exports = RV;
  });
  var Im = c((Lj, Tm) => {
    var LV = Ei(),
      bm = vi(),
      NV = hi(),
      PV = Te(),
      qV = pt(),
      FV = _m(),
      MV = Object.prototype,
      DV = MV.hasOwnProperty;
    function mi(e) {
      if (qV(e) && !PV(e) && !(e instanceof LV)) {
        if (e instanceof bm) return e;
        if (DV.call(e, "__wrapped__")) return FV(e);
      }
      return new bm(e);
    }
    mi.prototype = NV.prototype;
    mi.prototype.constructor = mi;
    Tm.exports = mi;
  });
  var Am = c((Nj, Om) => {
    var GV = Ei(),
      VV = ps(),
      kV = hs(),
      BV = Im();
    function UV(e) {
      var t = kV(e),
        r = BV[t];
      if (typeof r != "function" || !(t in GV.prototype)) return !1;
      if (e === r) return !0;
      var n = VV(r);
      return !!n && e === n[0];
    }
    Om.exports = UV;
  });
  var Cm = c((Pj, Sm) => {
    var wm = vi(),
      WV = im(),
      HV = ps(),
      gs = hs(),
      XV = Te(),
      xm = Am(),
      jV = "Expected a function",
      zV = 8,
      KV = 32,
      YV = 128,
      $V = 256;
    function QV(e) {
      return WV(function (t) {
        var r = t.length,
          n = r,
          i = wm.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(jV);
          if (i && !a && gs(o) == "wrapper") var a = new wm([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = gs(o),
            u = s == "wrapper" ? HV(o) : void 0;
          u &&
          xm(u[0]) &&
          u[1] == (YV | zV | KV | $V) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[gs(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && xm(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            v = f[0];
          if (a && f.length == 1 && XV(v)) return a.plant(v).value();
          for (var g = 0, h = r ? t[g].apply(this, f) : v; ++g < r; )
            h = t[g].call(this, h);
          return h;
        };
      });
    }
    Sm.exports = QV;
  });
  var Lm = c((qj, Rm) => {
    var ZV = Cm(),
      JV = ZV();
    Rm.exports = JV;
  });
  var Pm = c((Fj, Nm) => {
    function ek(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Nm.exports = ek;
  });
  var Fm = c((Mj, qm) => {
    var tk = Pm(),
      vs = Kn();
    function rk(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = vs(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = vs(t)), (t = t === t ? t : 0)),
        tk(vs(e), t, r)
      );
    }
    qm.exports = rk;
  });
  var Hm,
    Xm,
    jm,
    zm,
    nk,
    ik,
    ok,
    ak,
    sk,
    uk,
    ck,
    lk,
    fk,
    dk,
    pk,
    hk,
    gk,
    vk,
    yk,
    Km,
    Ym,
    Ek,
    mk,
    _k,
    $m,
    bk,
    Tk,
    Qm,
    Ik,
    ys,
    Zm,
    Mm,
    Dm,
    Jm,
    Jr,
    Ok,
    ct,
    e_,
    Ak,
    ke,
    Je,
    en,
    t_,
    Es,
    Gm,
    ms,
    wk,
    Zr,
    xk,
    Sk,
    Ck,
    r_,
    Vm,
    Rk,
    km,
    Lk,
    Nk,
    Pk,
    Bm,
    _i,
    bi,
    Um,
    Wm,
    n_,
    i_ = pe(() => {
      "use strict";
      (Hm = oe(Lm())), (Xm = oe(jn())), (jm = oe(Fm()));
      Ge();
      _s();
      pi();
      (zm = oe(Gt())),
        ({
          MOUSE_CLICK: nk,
          MOUSE_SECOND_CLICK: ik,
          MOUSE_DOWN: ok,
          MOUSE_UP: ak,
          MOUSE_OVER: sk,
          MOUSE_OUT: uk,
          DROPDOWN_CLOSE: ck,
          DROPDOWN_OPEN: lk,
          SLIDER_ACTIVE: fk,
          SLIDER_INACTIVE: dk,
          TAB_ACTIVE: pk,
          TAB_INACTIVE: hk,
          NAVBAR_CLOSE: gk,
          NAVBAR_OPEN: vk,
          MOUSE_MOVE: yk,
          PAGE_SCROLL_DOWN: Km,
          SCROLL_INTO_VIEW: Ym,
          SCROLL_OUT_OF_VIEW: Ek,
          PAGE_SCROLL_UP: mk,
          SCROLLING_IN_VIEW: _k,
          PAGE_FINISH: $m,
          ECOMMERCE_CART_CLOSE: bk,
          ECOMMERCE_CART_OPEN: Tk,
          PAGE_START: Qm,
          PAGE_SCROLL: Ik,
        } = Qe),
        (ys = "COMPONENT_ACTIVE"),
        (Zm = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Mm } = Se),
        ({ getNamespacedParameterId: Dm } = zm.IX2VanillaUtils),
        (Jm = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (Jr = Jm(({ element: e, nativeEvent: t }) => e === t.target)),
        (Ok = Jm(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (ct = (0, Hm.default)([Jr, Ok])),
        (e_ = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !wk[i.eventTypeId]) return i;
          }
          return null;
        }),
        (Ak = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!e_(e, n);
        }),
        (ke = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            f = e_(e, u);
          return (
            f &&
              gr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + Mm + n.split(Mm)[1],
                actionListId: (0, Xm.default)(f, "action.config.actionListId"),
              }),
            gr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            tn({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (Je = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (en = { handler: Je(ct, ke) }),
        (t_ = { ...en, types: [ys, Zm].join(" ") }),
        (Es = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Gm = "mouseover mouseout"),
        (ms = { types: Es }),
        (wk = { PAGE_START: Qm, PAGE_FINISH: $m }),
        (Zr = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, jm.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (xk = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (Sk = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (Ck = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = Zr(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return xk(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (r_ = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [ys, Zm].indexOf(n) !== -1 ? n === ys : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (Vm = (e) => (t, r) => {
          let n = { elementHovered: Sk(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (Rk = (e) => (t, r) => {
          let n = { ...r, elementVisible: Ck(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (km =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = Zr(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: f } = a,
              v = f === "PX",
              g = i - o,
              h = Number((n / g).toFixed(2));
            if (r && r.percentTop === h) return r;
            let E = (v ? u : (o * (u || 0)) / 100) / g,
              w,
              b,
              x = 0;
            r &&
              ((w = h > r.percentTop),
              (b = r.scrollingDown !== w),
              (x = b ? h : r.anchorTop));
            let m = s === Km ? h >= x + E : h <= x - E,
              S = {
                ...r,
                percentTop: h,
                inBounds: m,
                anchorTop: x,
                scrollingDown: w,
              };
            return (r && m && (b || S.inBounds !== r.inBounds) && e(t, S)) || S;
          }),
        (Lk = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (Nk = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (Pk = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (Bm =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (_i = (e = !0) => ({
          ...t_,
          handler: Je(
            e ? ct : Jr,
            r_((t, r) => (r.isActive ? en.handler(t, r) : r))
          ),
        })),
        (bi = (e = !0) => ({
          ...t_,
          handler: Je(
            e ? ct : Jr,
            r_((t, r) => (r.isActive ? r : en.handler(t, r)))
          ),
        })),
        (Um = {
          ...ms,
          handler: Rk((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === Ym) === r
              ? (ke(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Wm = 0.05),
        (n_ = {
          [fk]: _i(),
          [dk]: bi(),
          [lk]: _i(),
          [ck]: bi(),
          [vk]: _i(!1),
          [gk]: bi(!1),
          [pk]: _i(),
          [hk]: bi(),
          [Tk]: { types: "ecommerce-cart-open", handler: Je(ct, ke) },
          [bk]: { types: "ecommerce-cart-close", handler: Je(ct, ke) },
          [nk]: {
            types: "click",
            handler: Je(
              ct,
              Bm((e, { clickCount: t }) => {
                Ak(e) ? t === 1 && ke(e) : ke(e);
              })
            ),
          },
          [ik]: {
            types: "click",
            handler: Je(
              ct,
              Bm((e, { clickCount: t }) => {
                t === 2 && ke(e);
              })
            ),
          },
          [ok]: { ...en, types: "mousedown" },
          [ak]: { ...en, types: "mouseup" },
          [sk]: {
            types: Gm,
            handler: Je(
              ct,
              Vm((e, t) => {
                t.elementHovered && ke(e);
              })
            ),
          },
          [uk]: {
            types: Gm,
            handler: Je(
              ct,
              Vm((e, t) => {
                t.elementHovered || ke(e);
              })
            ),
          },
          [yk]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: f,
                  restingState: v = 0,
                } = r,
                {
                  clientX: g = o.clientX,
                  clientY: h = o.clientY,
                  pageX: E = o.pageX,
                  pageY: w = o.pageY,
                } = n,
                b = s === "X_AXIS",
                x = n.type === "mouseout",
                m = v / 100,
                S = u,
                O = !1;
              switch (a) {
                case ot.VIEWPORT: {
                  m = b
                    ? Math.min(g, window.innerWidth) / window.innerWidth
                    : Math.min(h, window.innerHeight) / window.innerHeight;
                  break;
                }
                case ot.PAGE: {
                  let {
                    scrollLeft: L,
                    scrollTop: q,
                    scrollWidth: C,
                    scrollHeight: U,
                  } = Zr();
                  m = b ? Math.min(L + E, C) / C : Math.min(q + w, U) / U;
                  break;
                }
                case ot.ELEMENT:
                default: {
                  S = Dm(i, u);
                  let L = n.type.indexOf("mouse") === 0;
                  if (L && ct({ element: t, nativeEvent: n }) !== !0) break;
                  let q = t.getBoundingClientRect(),
                    { left: C, top: U, width: W, height: X } = q;
                  if (!L && !Lk({ left: g, top: h }, q)) break;
                  (O = !0), (m = b ? (g - C) / W : (h - U) / X);
                  break;
                }
              }
              return (
                x && (m > 1 - Wm || m < Wm) && (m = Math.round(m)),
                (a !== ot.ELEMENT || O || O !== o.elementHovered) &&
                  ((m = f ? 1 - m : m), e.dispatch(pr(S, m))),
                {
                  elementHovered: O,
                  clientX: g,
                  clientY: h,
                  pageX: E,
                  pageY: w,
                }
              );
            },
          },
          [Ik]: {
            types: Es,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = Zr(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(pr(r, s));
            },
          },
          [_k]: {
            types: Es,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: f,
                } = Zr(),
                {
                  basedOn: v,
                  selectedAxis: g,
                  continuousParameterGroupId: h,
                  startsEntering: E,
                  startsExiting: w,
                  addEndOffset: b,
                  addStartOffset: x,
                  addOffsetValue: m = 0,
                  endOffsetValue: S = 0,
                } = r,
                O = g === "X_AXIS";
              if (v === ot.VIEWPORT) {
                let L = O ? o / s : a / u;
                return (
                  L !== i.scrollPercent && t.dispatch(pr(h, L)),
                  { scrollPercent: L }
                );
              } else {
                let L = Dm(n, h),
                  q = e.getBoundingClientRect(),
                  C = (x ? m : 0) / 100,
                  U = (b ? S : 0) / 100;
                (C = E ? C : 1 - C), (U = w ? U : 1 - U);
                let W = q.top + Math.min(q.height * C, f),
                  z = q.top + q.height * U - W,
                  Q = Math.min(f + z, u),
                  T = Math.min(Math.max(0, f - W), Q) / Q;
                return (
                  T !== i.scrollPercent && t.dispatch(pr(L, T)),
                  { scrollPercent: T }
                );
              }
            },
          },
          [Ym]: Um,
          [Ek]: Um,
          [Km]: {
            ...ms,
            handler: km((e, t) => {
              t.scrollingDown && ke(e);
            }),
          },
          [mk]: {
            ...ms,
            handler: km((e, t) => {
              t.scrollingDown || ke(e);
            }),
          },
          [$m]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Je(Jr, Nk(ke)),
          },
          [Qm]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Je(Jr, Pk(ke)),
          },
        });
    });
  var b_ = {};
  Me(b_, {
    observeRequests: () => Jk,
    startActionGroup: () => tn,
    startEngine: () => xi,
    stopActionGroup: () => gr,
    stopAllActionGroups: () => E_,
    stopEngine: () => Si,
  });
  function Jk(e) {
    Vt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: rB }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: nB }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: iB }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: oB });
  }
  function eB(e) {
    Vt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Si(e),
          h_({ store: e, elementApi: qe }),
          xi({ store: e, allowEvents: !0 }),
          g_();
      },
    });
  }
  function tB(e, t) {
    let r = Vt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function rB({ rawData: e, defer: t }, r) {
    let n = () => {
      xi({ store: r, rawData: e, allowEvents: !0 }), g_();
    };
    t ? setTimeout(n, 0) : n();
  }
  function g_() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function nB(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: f = !0,
      } = e,
      { rawData: v } = e;
    if (n && i && v && s) {
      let g = v.actionLists[n];
      g && (v = Uk({ actionList: g, actionItemId: i, rawData: v }));
    }
    if (
      (xi({ store: t, rawData: v, allowEvents: a, testManual: u }),
      (n && r === De.GENERAL_START_ACTION) || bs(r))
    ) {
      gr({ store: t, actionListId: n }),
        y_({ store: t, actionListId: n, eventId: o });
      let g = tn({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: f,
      });
      f && g && t.dispatch(hr({ actionListId: n, isPlaying: !s }));
    }
  }
  function iB({ actionListId: e }, t) {
    e ? gr({ store: t, actionListId: e }) : E_({ store: t }), Si(t);
  }
  function oB(e, t) {
    Si(t), h_({ store: t, elementApi: qe });
  }
  function xi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(Za(t)),
      i.active ||
        (e.dispatch(
          Ja({
            hasBoundaryNodes: !!document.querySelector(Ii),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (fB(e), aB(), e.getState().ixSession.hasDefinedMediaQueries && eB(e)),
        e.dispatch(es()),
        sB(e, n));
  }
  function aB() {
    let { documentElement: e } = document;
    e.className.indexOf(o_) === -1 && (e.className += ` ${o_}`);
  }
  function sB(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(fi(n, o)), t ? tB(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Si(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(uB), jk(), e.dispatch(ts());
    }
  }
  function uB({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function cB({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: f, ixSession: v } = e.getState(),
      { events: g } = f,
      h = g[n],
      { eventTypeId: E } = h,
      w = {},
      b = {},
      x = [],
      { continuousActionGroups: m } = a,
      { id: S } = a;
    Wk(E, i) && (S = Hk(t, S));
    let O = v.hasBoundaryNodes && r ? Qr(r, Ii) : null;
    m.forEach((L) => {
      let { keyframe: q, actionItems: C } = L;
      C.forEach((U) => {
        let { actionTypeId: W } = U,
          { target: X } = U.config;
        if (!X) return;
        let z = X.boundaryMode ? O : null,
          Q = zk(X) + Ts + W;
        if (((b[Q] = lB(b[Q], q, U)), !w[Q])) {
          w[Q] = !0;
          let { config: M } = U;
          Oi({
            config: M,
            event: h,
            eventTarget: r,
            elementRoot: z,
            elementApi: qe,
          }).forEach((T) => {
            x.push({ element: T, key: Q });
          });
        }
      });
    }),
      x.forEach(({ element: L, key: q }) => {
        let C = b[q],
          U = (0, yt.default)(C, "[0].actionItems[0]", {}),
          { actionTypeId: W } = U,
          X = wi(W) ? Os(W)(L, U) : null,
          z = Is({ element: L, actionItem: U, elementApi: qe }, X);
        As({
          store: e,
          element: L,
          eventId: n,
          actionListId: o,
          actionItem: U,
          destination: z,
          continuous: !0,
          parameterId: S,
          actionGroups: C,
          smoothing: s,
          restingValue: u,
          pluginInstance: X,
        });
      });
  }
  function lB(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function fB(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    v_(e),
      (0, vr.default)(r, (i, o) => {
        let a = n_[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        yB({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && pB(e);
  }
  function pB(e) {
    let t = () => {
      v_(e);
    };
    dB.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(li(window, [r, t]));
    }),
      t();
  }
  function v_(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(as({ width: n, mediaQueries: i }));
    }
  }
  function yB({ logic: e, store: t, events: r }) {
    EB(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = hB(r, vB);
    if (!(0, u_.default)(s)) return;
    (0, vr.default)(s, (g, h) => {
      let E = r[h],
        { action: w, id: b, mediaQueries: x = o.mediaQueryKeys } = E,
        { actionListId: m } = w.config;
      Kk(x, o.mediaQueryKeys) || t.dispatch(ss()),
        w.actionTypeId === De.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(E.config) ? E.config : [E.config]).forEach((O) => {
            let { continuousParameterGroupId: L } = O,
              q = (0, yt.default)(a, `${m}.continuousParameterGroups`, []),
              C = (0, s_.default)(q, ({ id: X }) => X === L),
              U = (O.smoothing || 0) / 100,
              W = (O.restingState || 0) / 100;
            C &&
              g.forEach((X, z) => {
                let Q = b + Ts + z;
                cB({
                  store: t,
                  eventStateKey: Q,
                  eventTarget: X,
                  eventId: b,
                  eventConfig: O,
                  actionListId: m,
                  parameterGroup: C,
                  smoothing: U,
                  restingValue: W,
                });
              });
          }),
        (w.actionTypeId === De.GENERAL_START_ACTION || bs(w.actionTypeId)) &&
          y_({ store: t, actionListId: m, eventId: b });
    });
    let u = (g) => {
        let { ixSession: h } = t.getState();
        gB(s, (E, w, b) => {
          let x = r[w],
            m = h.eventState[b],
            { action: S, mediaQueries: O = o.mediaQueryKeys } = x;
          if (!Ai(O, h.mediaQueryKey)) return;
          let L = (q = {}) => {
            let C = i(
              {
                store: t,
                element: E,
                event: x,
                eventConfig: q,
                nativeEvent: g,
                eventStateKey: b,
              },
              m
            );
            Yk(C, m) || t.dispatch(rs(b, C));
          };
          S.actionTypeId === De.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(x.config) ? x.config : [x.config]).forEach(L)
            : L();
        });
      },
      f = (0, d_.default)(u, Zk),
      v = ({ target: g = document, types: h, throttle: E }) => {
        h.split(" ")
          .filter(Boolean)
          .forEach((w) => {
            let b = E ? f : u;
            g.addEventListener(w, b), t.dispatch(li(g, [w, b]));
          });
      };
    Array.isArray(n) ? n.forEach(v) : typeof n == "string" && v(e);
  }
  function EB(e) {
    if (!Qk) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = cs(o);
      t[a] ||
        ((i === Qe.MOUSE_CLICK || i === Qe.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function y_({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let f = (0, yt.default)(u, "actionItemGroups[0].actionItems", []),
        v = (0, yt.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!Ai(v, i.mediaQueryKey)) return;
      f.forEach((g) => {
        let { config: h, actionTypeId: E } = g,
          w =
            h?.target?.useEventTarget === !0 && h?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : h,
          b = Oi({ config: w, event: s, elementApi: qe }),
          x = wi(E);
        b.forEach((m) => {
          let S = x ? Os(E)(m, g) : null;
          As({
            destination: Is({ element: m, actionItem: g, elementApi: qe }, S),
            immediate: !0,
            store: e,
            element: m,
            eventId: r,
            actionItem: g,
            actionListId: t,
            pluginInstance: S,
          });
        });
      });
    }
  }
  function E_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, vr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        ws(r, e), i && e.dispatch(hr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function gr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? Qr(r, Ii) : null;
    (0, vr.default)(o, (u) => {
      let f = (0, yt.default)(u, "actionItem.config.target.boundaryMode"),
        v = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && v) {
        if (s && f && !ls(s, u.element)) return;
        ws(u, e),
          u.verbose && e.dispatch(hr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function tn({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: f } = e.getState(),
      { events: v } = u,
      g = v[t] || {},
      { mediaQueries: h = u.mediaQueryKeys } = g,
      E = (0, yt.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: w, useFirstGroupAsInitialState: b } = E;
    if (!w || !w.length) return !1;
    o >= w.length && (0, yt.default)(g, "config.loop") && (o = 0),
      o === 0 && b && o++;
    let m =
        (o === 0 || (o === 1 && b)) && bs(g.action?.actionTypeId)
          ? g.config.delay
          : void 0,
      S = (0, yt.default)(w, [o, "actionItems"], []);
    if (!S.length || !Ai(h, f.mediaQueryKey)) return !1;
    let O = f.hasBoundaryNodes && r ? Qr(r, Ii) : null,
      L = Vk(S),
      q = !1;
    return (
      S.forEach((C, U) => {
        let { config: W, actionTypeId: X } = C,
          z = wi(X),
          { target: Q } = W;
        if (!Q) return;
        let M = Q.boundaryMode ? O : null;
        Oi({
          config: W,
          event: g,
          eventTarget: r,
          elementRoot: M,
          elementApi: qe,
        }).forEach((F, H) => {
          let B = z ? Os(X)(F, C) : null,
            $ = z ? $k(X)(F, C) : null;
          q = !0;
          let Z = L === U && H === 0,
            ae = kk({ element: F, actionItem: C }),
            _e = Is({ element: F, actionItem: C, elementApi: qe }, B);
          As({
            store: e,
            element: F,
            actionItem: C,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: Z,
            computedStyle: ae,
            destination: _e,
            immediate: a,
            verbose: s,
            pluginInstance: B,
            pluginDuration: $,
            instanceDelay: m,
          });
        });
      }),
      q
    );
  }
  function As(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: f,
        eventId: v,
      } = n,
      g = !u,
      h = Dk(),
      { ixElements: E, ixSession: w, ixData: b } = t.getState(),
      x = Mk(E, i),
      { refState: m } = E[x] || {},
      S = fs(i),
      O = w.reducedMotion && Xo[o.actionTypeId],
      L;
    if (O && u)
      switch (b.events[v]?.eventTypeId) {
        case Qe.MOUSE_MOVE:
        case Qe.MOUSE_MOVE_IN_VIEWPORT:
          L = f;
          break;
        default:
          L = 0.5;
          break;
      }
    let q = Bk(i, m, r, o, qe, s);
    if (
      (t.dispatch(
        ns({
          instanceId: h,
          elementId: x,
          origin: q,
          refType: S,
          skipMotion: O,
          skipToValue: L,
          ...n,
        })
      ),
      m_(document.body, "ix2-animation-started", h),
      a)
    ) {
      mB(t, h);
      return;
    }
    Vt({ store: t, select: ({ ixInstances: C }) => C[h], onChange: __ }),
      g && t.dispatch(di(h, w.tick));
  }
  function ws(e, t) {
    m_(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === p_ && Xk(o, n, qe), t.dispatch(is(e.id));
  }
  function m_(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function mB(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(di(t, 0)), e.dispatch(fi(performance.now(), r));
    let { ixInstances: n } = e.getState();
    __(n[t], e);
  }
  function __(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: f,
        groupIndex: v,
        eventId: g,
        eventTarget: h,
        eventStateKey: E,
        actionListId: w,
        isCarrier: b,
        styleProp: x,
        verbose: m,
        pluginInstance: S,
      } = e,
      { ixData: O, ixSession: L } = t.getState(),
      { events: q } = O,
      C = q[g] || {},
      { mediaQueries: U = O.mediaQueryKeys } = C;
    if (Ai(U, L.mediaQueryKey) && (n || r || i)) {
      if (f || (u === Fk && i)) {
        t.dispatch(os(o, s, f, a));
        let { ixElements: W } = t.getState(),
          { ref: X, refType: z, refState: Q } = W[o] || {},
          M = Q && Q[s];
        (z === p_ || wi(s)) && Gk(X, Q, M, g, a, x, qe, u, S);
      }
      if (i) {
        if (b) {
          let W = tn({
            store: t,
            eventId: g,
            eventTarget: h,
            eventStateKey: E,
            actionListId: w,
            groupIndex: v + 1,
            verbose: m,
          });
          m && !W && t.dispatch(hr({ actionListId: w, isPlaying: !1 }));
        }
        ws(e, t);
      }
    }
  }
  var s_,
    yt,
    u_,
    c_,
    l_,
    f_,
    vr,
    d_,
    Ti,
    qk,
    bs,
    Ts,
    Ii,
    p_,
    Fk,
    o_,
    Oi,
    Mk,
    Is,
    Vt,
    Dk,
    Gk,
    h_,
    Vk,
    kk,
    Bk,
    Uk,
    Wk,
    Hk,
    Ai,
    Xk,
    jk,
    zk,
    Kk,
    Yk,
    wi,
    Os,
    $k,
    a_,
    Qk,
    Zk,
    dB,
    hB,
    gB,
    vB,
    _s = pe(() => {
      "use strict";
      (s_ = oe(_a())),
        (yt = oe(jn())),
        (u_ = oe(qy())),
        (c_ = oe(aE())),
        (l_ = oe(uE())),
        (f_ = oe(lE())),
        (vr = oe(vE())),
        (d_ = oe(IE()));
      Ge();
      Ti = oe(Gt());
      pi();
      CE();
      i_();
      (qk = Object.keys(On)),
        (bs = (e) => qk.includes(e)),
        ({
          COLON_DELIMITER: Ts,
          BOUNDARY_SELECTOR: Ii,
          HTML_ELEMENT: p_,
          RENDER_GENERAL: Fk,
          W_MOD_IX: o_,
        } = Se),
        ({
          getAffectedElements: Oi,
          getElementId: Mk,
          getDestinationValues: Is,
          observeStore: Vt,
          getInstanceId: Dk,
          renderHTMLElement: Gk,
          clearAllStyles: h_,
          getMaxDurationItemIndex: Vk,
          getComputedStyle: kk,
          getInstanceOrigin: Bk,
          reduceListToGroup: Uk,
          shouldNamespaceEventParameter: Wk,
          getNamespacedParameterId: Hk,
          shouldAllowMediaQuery: Ai,
          cleanupHTMLElement: Xk,
          clearObjectCache: jk,
          stringifyTarget: zk,
          mediaQueriesEqual: Kk,
          shallowEqual: Yk,
        } = Ti.IX2VanillaUtils),
        ({
          isPluginType: wi,
          createPluginInstance: Os,
          getPluginDuration: $k,
        } = Ti.IX2VanillaPlugins),
        (a_ = navigator.userAgent),
        (Qk = a_.match(/iPad/i) || a_.match(/iPhone/)),
        (Zk = 12);
      dB = ["resize", "orientationchange"];
      (hB = (e, t) => (0, c_.default)((0, f_.default)(e, t), l_.default)),
        (gB = (e, t) => {
          (0, vr.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + Ts + o;
              t(i, n, a);
            });
          });
        }),
        (vB = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Oi({ config: t, elementApi: qe });
        });
    });
  var I_ = c((Et) => {
    "use strict";
    var _B = fn().default,
      bB = iu().default;
    Object.defineProperty(Et, "__esModule", { value: !0 });
    Et.actions = void 0;
    Et.destroy = T_;
    Et.init = wB;
    Et.setEnv = AB;
    Et.store = void 0;
    Wl();
    var TB = Uo(),
      IB = bB((gy(), tt(hy))),
      xs = (_s(), tt(b_)),
      OB = _B((pi(), tt(AE)));
    Et.actions = OB;
    var Ss = (Et.store = (0, TB.createStore)(IB.default));
    function AB(e) {
      e() && (0, xs.observeRequests)(Ss);
    }
    function wB(e) {
      T_(), (0, xs.startEngine)({ store: Ss, rawData: e, allowEvents: !0 });
    }
    function T_() {
      (0, xs.stopEngine)(Ss);
    }
  });
  var x_ = c((Xj, w_) => {
    "use strict";
    var O_ = ze(),
      A_ = I_();
    A_.setEnv(O_.env);
    O_.define(
      "ix2",
      (w_.exports = function () {
        return A_;
      })
    );
  });
  var C_ = c((jj, S_) => {
    "use strict";
    var yr = ze();
    yr.define(
      "links",
      (S_.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = yr.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          f = /index\.(html|php)$/,
          v = /\/$/,
          g,
          h;
        r.ready = r.design = r.preview = E;
        function E() {
          (i = o && yr.env("design")),
            (h = yr.env("slug") || a.pathname || ""),
            yr.scroll.off(b),
            (g = []);
          for (var m = document.links, S = 0; S < m.length; ++S) w(m[S]);
          g.length && (yr.scroll.on(b), b());
        }
        function w(m) {
          if (!m.getAttribute("hreflang")) {
            var S =
              (i && m.getAttribute("href-disabled")) || m.getAttribute("href");
            if (((s.href = S), !(S.indexOf(":") >= 0))) {
              var O = e(m);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var L = e(s.hash);
                L.length && g.push({ link: O, sec: L, active: !1 });
                return;
              }
              if (!(S === "#" || S === "")) {
                var q =
                  s.href === a.href || S === h || (f.test(S) && v.test(h));
                x(O, u, q);
              }
            }
          }
        }
        function b() {
          var m = n.scrollTop(),
            S = n.height();
          t.each(g, function (O) {
            if (!O.link.attr("hreflang")) {
              var L = O.link,
                q = O.sec,
                C = q.offset().top,
                U = q.outerHeight(),
                W = S * 0.5,
                X = q.is(":visible") && C + U - W >= m && C + W <= m + S;
              O.active !== X && ((O.active = X), x(L, u, X));
            }
          });
        }
        function x(m, S, O) {
          var L = m.hasClass(S);
          (O && L) || (!O && !L) || (O ? m.addClass(S) : m.removeClass(S));
        }
        return r;
      })
    );
  });
  var L_ = c((zj, R_) => {
    "use strict";
    var Ci = ze();
    Ci.define(
      "scroll",
      (R_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = w() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (M) {
              window.setTimeout(M, 15);
            },
          u = Ci.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          v = 'a[href="#"]',
          g = 'a[href*="#"]:not(.w-tab-link):not(' + v + ")",
          h = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          E = document.createElement("style");
        E.appendChild(document.createTextNode(h));
        function w() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var b = /^#[a-zA-Z0-9][\w:.-]*$/;
        function x(M) {
          return b.test(M.hash) && M.host + M.pathname === r.host + r.pathname;
        }
        let m =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function S() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            m.matches
          );
        }
        function O(M, T) {
          var F;
          switch (T) {
            case "add":
              (F = M.attr("tabindex")),
                F
                  ? M.attr("data-wf-tabindex-swap", F)
                  : M.attr("tabindex", "-1");
              break;
            case "remove":
              (F = M.attr("data-wf-tabindex-swap")),
                F
                  ? (M.attr("tabindex", F),
                    M.removeAttr("data-wf-tabindex-swap"))
                  : M.removeAttr("tabindex");
              break;
          }
          M.toggleClass("wf-force-outline-none", T === "add");
        }
        function L(M) {
          var T = M.currentTarget;
          if (
            !(
              Ci.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(T.className))
            )
          ) {
            var F = x(T) ? T.hash : "";
            if (F !== "") {
              var H = e(F);
              H.length &&
                (M && (M.preventDefault(), M.stopPropagation()),
                q(F, M),
                window.setTimeout(
                  function () {
                    C(H, function () {
                      O(H, "add"),
                        H.get(0).focus({ preventScroll: !0 }),
                        O(H, "remove");
                    });
                  },
                  M ? 0 : 300
                ));
            }
          }
        }
        function q(M) {
          if (
            r.hash !== M &&
            n &&
            n.pushState &&
            !(Ci.env.chrome && r.protocol === "file:")
          ) {
            var T = n.state && n.state.hash;
            T !== M && n.pushState({ hash: M }, "", M);
          }
        }
        function C(M, T) {
          var F = i.scrollTop(),
            H = U(M);
          if (F !== H) {
            var B = W(M, F, H),
              $ = Date.now(),
              Z = function () {
                var ae = Date.now() - $;
                window.scroll(0, X(F, H, ae, B)),
                  ae <= B ? s(Z) : typeof T == "function" && T();
              };
            s(Z);
          }
        }
        function U(M) {
          var T = e(f),
            F = T.css("position") === "fixed" ? T.outerHeight() : 0,
            H = M.offset().top - F;
          if (M.data("scroll") === "mid") {
            var B = i.height() - F,
              $ = M.outerHeight();
            $ < B && (H -= Math.round((B - $) / 2));
          }
          return H;
        }
        function W(M, T, F) {
          if (S()) return 0;
          var H = 1;
          return (
            a.add(M).each(function (B, $) {
              var Z = parseFloat($.getAttribute("data-scroll-time"));
              !isNaN(Z) && Z >= 0 && (H = Z);
            }),
            (472.143 * Math.log(Math.abs(T - F) + 125) - 2e3) * H
          );
        }
        function X(M, T, F, H) {
          return F > H ? T : M + (T - M) * z(F / H);
        }
        function z(M) {
          return M < 0.5
            ? 4 * M * M * M
            : (M - 1) * (2 * M - 2) * (2 * M - 2) + 1;
        }
        function Q() {
          var { WF_CLICK_EMPTY: M, WF_CLICK_SCROLL: T } = t;
          o.on(T, g, L),
            o.on(M, v, function (F) {
              F.preventDefault();
            }),
            document.head.insertBefore(E, document.head.firstChild);
        }
        return { ready: Q };
      })
    );
  });
  var P_ = c((Kj, N_) => {
    "use strict";
    var xB = ze();
    xB.define(
      "touch",
      (N_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            v;
          o.addEventListener("touchstart", g, !1),
            o.addEventListener("touchmove", h, !1),
            o.addEventListener("touchend", E, !1),
            o.addEventListener("touchcancel", w, !1),
            o.addEventListener("mousedown", g, !1),
            o.addEventListener("mousemove", h, !1),
            o.addEventListener("mouseup", E, !1),
            o.addEventListener("mouseout", w, !1);
          function g(x) {
            var m = x.touches;
            (m && m.length > 1) ||
              ((a = !0),
              m ? ((s = !0), (f = m[0].clientX)) : (f = x.clientX),
              (v = f));
          }
          function h(x) {
            if (a) {
              if (s && x.type === "mousemove") {
                x.preventDefault(), x.stopPropagation();
                return;
              }
              var m = x.touches,
                S = m ? m[0].clientX : x.clientX,
                O = S - v;
              (v = S),
                Math.abs(O) > u &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", x, { direction: O > 0 ? "right" : "left" }), w());
            }
          }
          function E(x) {
            if (a && ((a = !1), s && x.type === "mouseup")) {
              x.preventDefault(), x.stopPropagation(), (s = !1);
              return;
            }
          }
          function w() {
            a = !1;
          }
          function b() {
            o.removeEventListener("touchstart", g, !1),
              o.removeEventListener("touchmove", h, !1),
              o.removeEventListener("touchend", E, !1),
              o.removeEventListener("touchcancel", w, !1),
              o.removeEventListener("mousedown", g, !1),
              o.removeEventListener("mousemove", h, !1),
              o.removeEventListener("mouseup", E, !1),
              o.removeEventListener("mouseout", w, !1),
              (o = null);
          }
          this.destroy = b;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var F_ = c((Yj, q_) => {
    "use strict";
    var xt = ze(),
      SB = ln(),
      we = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    xt.define(
      "navbar",
      (q_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          u,
          f,
          v,
          g = xt.env(),
          h = '<div class="w-nav-overlay" data-wf-ignore />',
          E = ".w-nav",
          w = "w--open",
          b = "w--nav-dropdown-open",
          x = "w--nav-dropdown-toggle-open",
          m = "w--nav-dropdown-list-open",
          S = "w--nav-link-open",
          O = SB.triggers,
          L = e();
        (r.ready = r.design = r.preview = q),
          (r.destroy = function () {
            (L = e()), C(), u && u.length && u.each(z);
          });
        function q() {
          (f = g && xt.env("design")),
            (v = xt.env("editor")),
            (s = e(document.body)),
            (u = o.find(E)),
            u.length && (u.each(X), C(), U());
        }
        function C() {
          xt.resize.off(W);
        }
        function U() {
          xt.resize.on(W);
        }
        function W() {
          u.each(R);
        }
        function X(d, G) {
          var j = e(G),
            V = e.data(G, E);
          V ||
            (V = e.data(G, E, {
              open: !1,
              el: j,
              config: {},
              selectedIdx: -1,
            })),
            (V.menu = j.find(".w-nav-menu")),
            (V.links = V.menu.find(".w-nav-link")),
            (V.dropdowns = V.menu.find(".w-dropdown")),
            (V.dropdownToggle = V.menu.find(".w-dropdown-toggle")),
            (V.dropdownList = V.menu.find(".w-dropdown-list")),
            (V.button = j.find(".w-nav-button")),
            (V.container = j.find(".w-container")),
            (V.overlayContainerId = "w-nav-overlay-" + d),
            (V.outside = p(V));
          var ue = j.find(".w-nav-brand");
          ue &&
            ue.attr("href") === "/" &&
            ue.attr("aria-label") == null &&
            ue.attr("aria-label", "home"),
            V.button.attr("style", "-webkit-user-select: text;"),
            V.button.attr("aria-label") == null &&
              V.button.attr("aria-label", "menu"),
            V.button.attr("role", "button"),
            V.button.attr("tabindex", "0"),
            V.button.attr("aria-controls", V.overlayContainerId),
            V.button.attr("aria-haspopup", "menu"),
            V.button.attr("aria-expanded", "false"),
            V.el.off(E),
            V.button.off(E),
            V.menu.off(E),
            T(V),
            f
              ? (Q(V), V.el.on("setting" + E, F(V)))
              : (M(V),
                V.button.on("click" + E, ae(V)),
                V.menu.on("click" + E, "a", _e(V)),
                V.button.on("keydown" + E, H(V)),
                V.el.on("keydown" + E, B(V))),
            R(d, G);
        }
        function z(d, G) {
          var j = e.data(G, E);
          j && (Q(j), e.removeData(G, E));
        }
        function Q(d) {
          d.overlay && (ne(d, !0), d.overlay.remove(), (d.overlay = null));
        }
        function M(d) {
          d.overlay ||
            ((d.overlay = e(h).appendTo(d.el)),
            d.overlay.attr("id", d.overlayContainerId),
            (d.parent = d.menu.parent()),
            ne(d, !0));
        }
        function T(d) {
          var G = {},
            j = d.config || {},
            V = (G.animation = d.el.attr("data-animation") || "default");
          (G.animOver = /^over/.test(V)),
            (G.animDirect = /left$/.test(V) ? -1 : 1),
            j.animation !== V && d.open && t.defer(Z, d),
            (G.easing = d.el.attr("data-easing") || "ease"),
            (G.easing2 = d.el.attr("data-easing2") || "ease");
          var ue = d.el.attr("data-duration");
          (G.duration = ue != null ? Number(ue) : 400),
            (G.docHeight = d.el.attr("data-doc-height")),
            (d.config = G);
        }
        function F(d) {
          return function (G, j) {
            j = j || {};
            var V = i.width();
            T(d),
              j.open === !0 && Ce(d, !0),
              j.open === !1 && ne(d, !0),
              d.open &&
                t.defer(function () {
                  V !== i.width() && Z(d);
                });
          };
        }
        function H(d) {
          return function (G) {
            switch (G.keyCode) {
              case we.SPACE:
              case we.ENTER:
                return ae(d)(), G.preventDefault(), G.stopPropagation();
              case we.ESCAPE:
                return ne(d), G.preventDefault(), G.stopPropagation();
              case we.ARROW_RIGHT:
              case we.ARROW_DOWN:
              case we.HOME:
              case we.END:
                return d.open
                  ? (G.keyCode === we.END
                      ? (d.selectedIdx = d.links.length - 1)
                      : (d.selectedIdx = 0),
                    $(d),
                    G.preventDefault(),
                    G.stopPropagation())
                  : (G.preventDefault(), G.stopPropagation());
            }
          };
        }
        function B(d) {
          return function (G) {
            if (d.open)
              switch (
                ((d.selectedIdx = d.links.index(document.activeElement)),
                G.keyCode)
              ) {
                case we.HOME:
                case we.END:
                  return (
                    G.keyCode === we.END
                      ? (d.selectedIdx = d.links.length - 1)
                      : (d.selectedIdx = 0),
                    $(d),
                    G.preventDefault(),
                    G.stopPropagation()
                  );
                case we.ESCAPE:
                  return (
                    ne(d),
                    d.button.focus(),
                    G.preventDefault(),
                    G.stopPropagation()
                  );
                case we.ARROW_LEFT:
                case we.ARROW_UP:
                  return (
                    (d.selectedIdx = Math.max(-1, d.selectedIdx - 1)),
                    $(d),
                    G.preventDefault(),
                    G.stopPropagation()
                  );
                case we.ARROW_RIGHT:
                case we.ARROW_DOWN:
                  return (
                    (d.selectedIdx = Math.min(
                      d.links.length - 1,
                      d.selectedIdx + 1
                    )),
                    $(d),
                    G.preventDefault(),
                    G.stopPropagation()
                  );
              }
          };
        }
        function $(d) {
          if (d.links[d.selectedIdx]) {
            var G = d.links[d.selectedIdx];
            G.focus(), _e(G);
          }
        }
        function Z(d) {
          d.open && (ne(d, !0), Ce(d, !0));
        }
        function ae(d) {
          return a(function () {
            d.open ? ne(d) : Ce(d);
          });
        }
        function _e(d) {
          return function (G) {
            var j = e(this),
              V = j.attr("href");
            if (!xt.validClick(G.currentTarget)) {
              G.preventDefault();
              return;
            }
            V && V.indexOf("#") === 0 && d.open && ne(d);
          };
        }
        function p(d) {
          return (
            d.outside && o.off("click" + E, d.outside),
            function (G) {
              var j = e(G.target);
              (v && j.closest(".w-editor-bem-EditorOverlay").length) || D(d, j);
            }
          );
        }
        var D = a(function (d, G) {
          if (d.open) {
            var j = G.closest(".w-nav-menu");
            d.menu.is(j) || ne(d);
          }
        });
        function R(d, G) {
          var j = e.data(G, E),
            V = (j.collapsed = j.button.css("display") !== "none");
          if ((j.open && !V && !f && ne(j, !0), j.container.length)) {
            var ue = ee(j);
            j.links.each(ue), j.dropdowns.each(ue);
          }
          j.open && xe(j);
        }
        var I = "max-width";
        function ee(d) {
          var G = d.container.css(I);
          return (
            G === "none" && (G = ""),
            function (j, V) {
              (V = e(V)), V.css(I, ""), V.css(I) === "none" && V.css(I, G);
            }
          );
        }
        function se(d, G) {
          G.setAttribute("data-nav-menu-open", "");
        }
        function ye(d, G) {
          G.removeAttribute("data-nav-menu-open");
        }
        function Ce(d, G) {
          if (d.open) return;
          (d.open = !0),
            d.menu.each(se),
            d.links.addClass(S),
            d.dropdowns.addClass(b),
            d.dropdownToggle.addClass(x),
            d.dropdownList.addClass(m),
            d.button.addClass(w);
          var j = d.config,
            V = j.animation;
          (V === "none" || !n.support.transform || j.duration <= 0) && (G = !0);
          var ue = xe(d),
            Ue = d.menu.outerHeight(!0),
            ft = d.menu.outerWidth(!0),
            l = d.el.height(),
            y = d.el[0];
          if (
            (R(0, y),
            O.intro(0, y),
            xt.redraw.up(),
            f || o.on("click" + E, d.outside),
            G)
          ) {
            N();
            return;
          }
          var _ = "transform " + j.duration + "ms " + j.easing;
          if (
            (d.overlay &&
              ((L = d.menu.prev()), d.overlay.show().append(d.menu)),
            j.animOver)
          ) {
            n(d.menu)
              .add(_)
              .set({ x: j.animDirect * ft, height: ue })
              .start({ x: 0 })
              .then(N),
              d.overlay && d.overlay.width(ft);
            return;
          }
          var A = l + Ue;
          n(d.menu).add(_).set({ y: -A }).start({ y: 0 }).then(N);
          function N() {
            d.button.attr("aria-expanded", "true");
          }
        }
        function xe(d) {
          var G = d.config,
            j = G.docHeight ? o.height() : s.height();
          return (
            G.animOver
              ? d.menu.height(j)
              : d.el.css("position") !== "fixed" && (j -= d.el.outerHeight(!0)),
            d.overlay && d.overlay.height(j),
            j
          );
        }
        function ne(d, G) {
          if (!d.open) return;
          (d.open = !1), d.button.removeClass(w);
          var j = d.config;
          if (
            ((j.animation === "none" ||
              !n.support.transform ||
              j.duration <= 0) &&
              (G = !0),
            O.outro(0, d.el[0]),
            o.off("click" + E, d.outside),
            G)
          ) {
            n(d.menu).stop(), y();
            return;
          }
          var V = "transform " + j.duration + "ms " + j.easing2,
            ue = d.menu.outerHeight(!0),
            Ue = d.menu.outerWidth(!0),
            ft = d.el.height();
          if (j.animOver) {
            n(d.menu)
              .add(V)
              .start({ x: Ue * j.animDirect })
              .then(y);
            return;
          }
          var l = ft + ue;
          n(d.menu).add(V).start({ y: -l }).then(y);
          function y() {
            d.menu.height(""),
              n(d.menu).set({ x: 0, y: 0 }),
              d.menu.each(ye),
              d.links.removeClass(S),
              d.dropdowns.removeClass(b),
              d.dropdownToggle.removeClass(x),
              d.dropdownList.removeClass(m),
              d.overlay &&
                d.overlay.children().length &&
                (L.length ? d.menu.insertAfter(L) : d.menu.prependTo(d.parent),
                d.overlay.attr("style", "").hide()),
              d.el.triggerHandler("w-close"),
              d.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var G_ = c(($j, D_) => {
    "use strict";
    var St = ze(),
      CB = ln(),
      lt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      M_ =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    St.define(
      "slider",
      (D_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          a,
          s = St.env(),
          u = ".w-slider",
          f = '<div class="w-slider-dot" data-wf-ignore />',
          v =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          g = "w-slider-force-show",
          h = CB.triggers,
          E,
          w = !1;
        (r.ready = function () {
          (a = St.env("design")), b();
        }),
          (r.design = function () {
            (a = !0), setTimeout(b, 1e3);
          }),
          (r.preview = function () {
            (a = !1), b();
          }),
          (r.redraw = function () {
            (w = !0), b(), (w = !1);
          }),
          (r.destroy = x);
        function b() {
          (o = i.find(u)), o.length && (o.each(O), !E && (x(), m()));
        }
        function x() {
          St.resize.off(S), St.redraw.off(r.redraw);
        }
        function m() {
          St.resize.on(S), St.redraw.on(r.redraw);
        }
        function S() {
          o.filter(":visible").each(B);
        }
        function O(p, D) {
          var R = e(D),
            I = e.data(D, u);
          I ||
            (I = e.data(D, u, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: R,
              config: {},
            })),
            (I.mask = R.children(".w-slider-mask")),
            (I.left = R.children(".w-slider-arrow-left")),
            (I.right = R.children(".w-slider-arrow-right")),
            (I.nav = R.children(".w-slider-nav")),
            (I.slides = I.mask.children(".w-slide")),
            I.slides.each(h.reset),
            w && (I.maskWidth = 0),
            R.attr("role") === void 0 && R.attr("role", "region"),
            R.attr("aria-label") === void 0 && R.attr("aria-label", "carousel");
          var ee = I.mask.attr("id");
          if (
            (ee || ((ee = "w-slider-mask-" + p), I.mask.attr("id", ee)),
            !a && !I.ariaLiveLabel && (I.ariaLiveLabel = e(v).appendTo(I.mask)),
            I.left.attr("role", "button"),
            I.left.attr("tabindex", "0"),
            I.left.attr("aria-controls", ee),
            I.left.attr("aria-label") === void 0 &&
              I.left.attr("aria-label", "previous slide"),
            I.right.attr("role", "button"),
            I.right.attr("tabindex", "0"),
            I.right.attr("aria-controls", ee),
            I.right.attr("aria-label") === void 0 &&
              I.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            I.left.hide(), I.right.hide(), I.nav.hide(), (E = !0);
            return;
          }
          I.el.off(u),
            I.left.off(u),
            I.right.off(u),
            I.nav.off(u),
            L(I),
            a
              ? (I.el.on("setting" + u, T(I)), M(I), (I.hasTimer = !1))
              : (I.el.on("swipe" + u, T(I)),
                I.left.on("click" + u, W(I)),
                I.right.on("click" + u, X(I)),
                I.left.on("keydown" + u, U(I, W)),
                I.right.on("keydown" + u, U(I, X)),
                I.nav.on("keydown" + u, "> div", T(I)),
                I.config.autoplay &&
                  !I.hasTimer &&
                  ((I.hasTimer = !0), (I.timerCount = 1), Q(I)),
                I.el.on("mouseenter" + u, C(I, !0, "mouse")),
                I.el.on("focusin" + u, C(I, !0, "keyboard")),
                I.el.on("mouseleave" + u, C(I, !1, "mouse")),
                I.el.on("focusout" + u, C(I, !1, "keyboard"))),
            I.nav.on("click" + u, "> div", T(I)),
            s ||
              I.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var se = R.filter(":hidden");
          se.addClass(g);
          var ye = R.parents(":hidden");
          ye.addClass(g), w || B(p, D), se.removeClass(g), ye.removeClass(g);
        }
        function L(p) {
          var D = {};
          (D.crossOver = 0),
            (D.animation = p.el.attr("data-animation") || "slide"),
            D.animation === "outin" &&
              ((D.animation = "cross"), (D.crossOver = 0.5)),
            (D.easing = p.el.attr("data-easing") || "ease");
          var R = p.el.attr("data-duration");
          if (
            ((D.duration = R != null ? parseInt(R, 10) : 500),
            q(p.el.attr("data-infinite")) && (D.infinite = !0),
            q(p.el.attr("data-disable-swipe")) && (D.disableSwipe = !0),
            q(p.el.attr("data-hide-arrows"))
              ? (D.hideArrows = !0)
              : p.config.hideArrows && (p.left.show(), p.right.show()),
            q(p.el.attr("data-autoplay")))
          ) {
            (D.autoplay = !0),
              (D.delay = parseInt(p.el.attr("data-delay"), 10) || 2e3),
              (D.timerMax = parseInt(p.el.attr("data-autoplay-limit"), 10));
            var I = "mousedown" + u + " touchstart" + u;
            a ||
              p.el.off(I).one(I, function () {
                M(p);
              });
          }
          var ee = p.right.width();
          (D.edge = ee ? ee + 40 : 100), (p.config = D);
        }
        function q(p) {
          return p === "1" || p === "true";
        }
        function C(p, D, R) {
          return function (I) {
            if (D) p.hasFocus[R] = D;
            else if (
              e.contains(p.el.get(0), I.relatedTarget) ||
              ((p.hasFocus[R] = D),
              (p.hasFocus.mouse && R === "keyboard") ||
                (p.hasFocus.keyboard && R === "mouse"))
            )
              return;
            D
              ? (p.ariaLiveLabel.attr("aria-live", "polite"),
                p.hasTimer && M(p))
              : (p.ariaLiveLabel.attr("aria-live", "off"), p.hasTimer && Q(p));
          };
        }
        function U(p, D) {
          return function (R) {
            switch (R.keyCode) {
              case lt.SPACE:
              case lt.ENTER:
                return D(p)(), R.preventDefault(), R.stopPropagation();
            }
          };
        }
        function W(p) {
          return function () {
            H(p, { index: p.index - 1, vector: -1 });
          };
        }
        function X(p) {
          return function () {
            H(p, { index: p.index + 1, vector: 1 });
          };
        }
        function z(p, D) {
          var R = null;
          D === p.slides.length && (b(), $(p)),
            t.each(p.anchors, function (I, ee) {
              e(I.els).each(function (se, ye) {
                e(ye).index() === D && (R = ee);
              });
            }),
            R != null && H(p, { index: R, immediate: !0 });
        }
        function Q(p) {
          M(p);
          var D = p.config,
            R = D.timerMax;
          (R && p.timerCount++ > R) ||
            (p.timerId = window.setTimeout(function () {
              p.timerId == null || a || (X(p)(), Q(p));
            }, D.delay));
        }
        function M(p) {
          window.clearTimeout(p.timerId), (p.timerId = null);
        }
        function T(p) {
          return function (D, R) {
            R = R || {};
            var I = p.config;
            if (a && D.type === "setting") {
              if (R.select === "prev") return W(p)();
              if (R.select === "next") return X(p)();
              if ((L(p), $(p), R.select == null)) return;
              z(p, R.select);
              return;
            }
            if (D.type === "swipe")
              return I.disableSwipe || St.env("editor")
                ? void 0
                : R.direction === "left"
                ? X(p)()
                : R.direction === "right"
                ? W(p)()
                : void 0;
            if (p.nav.has(D.target).length) {
              var ee = e(D.target).index();
              if (
                (D.type === "click" && H(p, { index: ee }),
                D.type === "keydown")
              )
                switch (D.keyCode) {
                  case lt.ENTER:
                  case lt.SPACE: {
                    H(p, { index: ee }), D.preventDefault();
                    break;
                  }
                  case lt.ARROW_LEFT:
                  case lt.ARROW_UP: {
                    F(p.nav, Math.max(ee - 1, 0)), D.preventDefault();
                    break;
                  }
                  case lt.ARROW_RIGHT:
                  case lt.ARROW_DOWN: {
                    F(p.nav, Math.min(ee + 1, p.pages)), D.preventDefault();
                    break;
                  }
                  case lt.HOME: {
                    F(p.nav, 0), D.preventDefault();
                    break;
                  }
                  case lt.END: {
                    F(p.nav, p.pages), D.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function F(p, D) {
          var R = p.children().eq(D).focus();
          p.children().not(R);
        }
        function H(p, D) {
          D = D || {};
          var R = p.config,
            I = p.anchors;
          p.previous = p.index;
          var ee = D.index,
            se = {};
          ee < 0
            ? ((ee = I.length - 1),
              R.infinite &&
                ((se.x = -p.endX), (se.from = 0), (se.to = I[0].width)))
            : ee >= I.length &&
              ((ee = 0),
              R.infinite &&
                ((se.x = I[I.length - 1].width),
                (se.from = -I[I.length - 1].x),
                (se.to = se.from - se.x))),
            (p.index = ee);
          var ye = p.nav
            .children()
            .eq(ee)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          p.nav
            .children()
            .not(ye)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            R.hideArrows &&
              (p.index === I.length - 1 ? p.right.hide() : p.right.show(),
              p.index === 0 ? p.left.hide() : p.left.show());
          var Ce = p.offsetX || 0,
            xe = (p.offsetX = -I[p.index].x),
            ne = { x: xe, opacity: 1, visibility: "" },
            d = e(I[p.index].els),
            G = e(I[p.previous] && I[p.previous].els),
            j = p.slides.not(d),
            V = R.animation,
            ue = R.easing,
            Ue = Math.round(R.duration),
            ft = D.vector || (p.index > p.previous ? 1 : -1),
            l = "opacity " + Ue + "ms " + ue,
            y = "transform " + Ue + "ms " + ue;
          if (
            (d.find(M_).removeAttr("tabindex"),
            d.removeAttr("aria-hidden"),
            d.find("*").removeAttr("aria-hidden"),
            j.find(M_).attr("tabindex", "-1"),
            j.attr("aria-hidden", "true"),
            j.find("*").attr("aria-hidden", "true"),
            a || (d.each(h.intro), j.each(h.outro)),
            D.immediate && !w)
          ) {
            n(d).set(ne), N();
            return;
          }
          if (p.index === p.previous) return;
          if (
            (a || p.ariaLiveLabel.text(`Slide ${ee + 1} of ${I.length}.`),
            V === "cross")
          ) {
            var _ = Math.round(Ue - Ue * R.crossOver),
              A = Math.round(Ue - _);
            (l = "opacity " + _ + "ms " + ue),
              n(G).set({ visibility: "" }).add(l).start({ opacity: 0 }),
              n(d)
                .set({ visibility: "", x: xe, opacity: 0, zIndex: p.depth++ })
                .add(l)
                .wait(A)
                .then({ opacity: 1 })
                .then(N);
            return;
          }
          if (V === "fade") {
            n(G).set({ visibility: "" }).stop(),
              n(d)
                .set({ visibility: "", x: xe, opacity: 0, zIndex: p.depth++ })
                .add(l)
                .start({ opacity: 1 })
                .then(N);
            return;
          }
          if (V === "over") {
            (ne = { x: p.endX }),
              n(G).set({ visibility: "" }).stop(),
              n(d)
                .set({
                  visibility: "",
                  zIndex: p.depth++,
                  x: xe + I[p.index].width * ft,
                })
                .add(y)
                .start({ x: xe })
                .then(N);
            return;
          }
          R.infinite && se.x
            ? (n(p.slides.not(G))
                .set({ visibility: "", x: se.x })
                .add(y)
                .start({ x: xe }),
              n(G)
                .set({ visibility: "", x: se.from })
                .add(y)
                .start({ x: se.to }),
              (p.shifted = G))
            : (R.infinite &&
                p.shifted &&
                (n(p.shifted).set({ visibility: "", x: Ce }),
                (p.shifted = null)),
              n(p.slides).set({ visibility: "" }).add(y).start({ x: xe }));
          function N() {
            (d = e(I[p.index].els)),
              (j = p.slides.not(d)),
              V !== "slide" && (ne.visibility = "hidden"),
              n(j).set(ne);
          }
        }
        function B(p, D) {
          var R = e.data(D, u);
          if (R) {
            if (ae(R)) return $(R);
            a && _e(R) && $(R);
          }
        }
        function $(p) {
          var D = 1,
            R = 0,
            I = 0,
            ee = 0,
            se = p.maskWidth,
            ye = se - p.config.edge;
          ye < 0 && (ye = 0),
            (p.anchors = [{ els: [], x: 0, width: 0 }]),
            p.slides.each(function (xe, ne) {
              I - R > ye &&
                (D++,
                (R += se),
                (p.anchors[D - 1] = { els: [], x: I, width: 0 })),
                (ee = e(ne).outerWidth(!0)),
                (I += ee),
                (p.anchors[D - 1].width += ee),
                p.anchors[D - 1].els.push(ne);
              var d = xe + 1 + " of " + p.slides.length;
              e(ne).attr("aria-label", d), e(ne).attr("role", "group");
            }),
            (p.endX = I),
            a && (p.pages = null),
            p.nav.length && p.pages !== D && ((p.pages = D), Z(p));
          var Ce = p.index;
          Ce >= D && (Ce = D - 1), H(p, { immediate: !0, index: Ce });
        }
        function Z(p) {
          var D = [],
            R,
            I = p.el.attr("data-nav-spacing");
          I && (I = parseFloat(I) + "px");
          for (var ee = 0, se = p.pages; ee < se; ee++)
            (R = e(f)),
              R.attr("aria-label", "Show slide " + (ee + 1) + " of " + se)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              p.nav.hasClass("w-num") && R.text(ee + 1),
              I != null && R.css({ "margin-left": I, "margin-right": I }),
              D.push(R);
          p.nav.empty().append(D);
        }
        function ae(p) {
          var D = p.mask.width();
          return p.maskWidth !== D ? ((p.maskWidth = D), !0) : !1;
        }
        function _e(p) {
          var D = 0;
          return (
            p.slides.each(function (R, I) {
              D += e(I).outerWidth(!0);
            }),
            p.slidesWidth !== D ? ((p.slidesWidth = D), !0) : !1
          );
        }
        return r;
      })
    );
  });
  Us();
  Hs();
  js();
  Ys();
  ln();
  x_();
  C_();
  L_();
  P_();
  F_();
  G_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|9a01658d-75c4-c8be-baed-3cfeae3e6cbb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|9a01658d-75c4-c8be-baed-3cfeae3e6cbb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710254264924,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|559ace18-9713-7a95-bbc4-ce955bc86487",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|559ace18-9713-7a95-bbc4-ce955bc86487",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710254488601,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|cbb86ac3-fb11-3ec7-cff4-326f5fb2431e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|cbb86ac3-fb11-3ec7-cff4-326f5fb2431e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710254535271,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|291e8ae5-81f3-bf6a-1e27-449a64a6f018",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|291e8ae5-81f3-bf6a-1e27-449a64a6f018",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710254773979,
    },
    "e-8": {
      id: "e-8",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-7",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|291e8ae5-81f3-bf6a-1e27-449a64a6f018",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|291e8ae5-81f3-bf6a-1e27-449a64a6f018",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710254773980,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|291e8ae5-81f3-bf6a-1e27-449a64a6f018",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|291e8ae5-81f3-bf6a-1e27-449a64a6f018",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710254981798,
    },
    "e-10": {
      id: "e-10",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-9",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|291e8ae5-81f3-bf6a-1e27-449a64a6f018",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|291e8ae5-81f3-bf6a-1e27-449a64a6f018",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710254981799,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|65176ef3-c62c-9f83-ad0c-0e9578c6983d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|65176ef3-c62c-9f83-ad0c-0e9578c6983d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710261513690,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|64adfd71-3db7-f7c6-ae73-391dca76c435",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|64adfd71-3db7-f7c6-ae73-391dca76c435",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710261514535,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|4b1deec2-d5b6-e340-73f4-5f2400c0834c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|4b1deec2-d5b6-e340-73f4-5f2400c0834c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710261515169,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-18",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|d527d697-3426-9aae-a146-db5c8cb901cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|d527d697-3426-9aae-a146-db5c8cb901cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710261533875,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-20",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|6349d256-3270-bfda-c9ed-fc3f7375e261",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|6349d256-3270-bfda-c9ed-fc3f7375e261",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710261534718,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-22",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|0652c91f-c16a-70d5-4c7f-fa6f17af573d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|0652c91f-c16a-70d5-4c7f-fa6f17af573d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710261535338,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|b9fa280d-2f3a-41e9-8168-6e1d4f752c00",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|b9fa280d-2f3a-41e9-8168-6e1d4f752c00",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710261535858,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-26",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|02032f0c-3e3f-8558-968b-5f3f014fe97b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|02032f0c-3e3f-8558-968b-5f3f014fe97b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710261536484,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-28",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|f0539172-e061-8541-3932-877621ffa9f0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|f0539172-e061-8541-3932-877621ffa9f0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710261536799,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|44c30c1f-f47a-3567-d94f-99bbd32dc008",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|44c30c1f-f47a-3567-d94f-99bbd32dc008",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710261537414,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|ecd8ba2b-0c25-0872-555e-c0590e7dd997",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|ecd8ba2b-0c25-0872-555e-c0590e7dd997",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710261537895,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-34",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|5ecf9c93-dfaa-934c-71b2-ccbb1ef68393",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|5ecf9c93-dfaa-934c-71b2-ccbb1ef68393",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710261538343,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|54b01187-2f60-cff0-34f7-0903f5aa970a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|54b01187-2f60-cff0-34f7-0903f5aa970a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710261555192,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|685e8f86-5d8e-ac4f-f784-fa0d5b25fbe4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|685e8f86-5d8e-ac4f-f784-fa0d5b25fbe4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274857611,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-40",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|685e8f86-5d8e-ac4f-f784-fa0d5b25fbf9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|685e8f86-5d8e-ac4f-f784-fa0d5b25fbf9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274857611,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-42",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|b6989cdb-5a23-11e6-3dc0-69b6a164e046",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|b6989cdb-5a23-11e6-3dc0-69b6a164e046",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274858295,
    },
    "e-43": {
      id: "e-43",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-44",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|b6989cdb-5a23-11e6-3dc0-69b6a164e05b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|b6989cdb-5a23-11e6-3dc0-69b6a164e05b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274858295,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-46",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|5f74f7a4-2fc0-9fa5-521a-7691ed2c6212",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|5f74f7a4-2fc0-9fa5-521a-7691ed2c6212",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274858858,
    },
    "e-47": {
      id: "e-47",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-48",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|5f74f7a4-2fc0-9fa5-521a-7691ed2c6227",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|5f74f7a4-2fc0-9fa5-521a-7691ed2c6227",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274858858,
    },
    "e-49": {
      id: "e-49",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-50",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|5421aa90-56a5-e8b9-591c-b7cc1ea7d226",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|5421aa90-56a5-e8b9-591c-b7cc1ea7d226",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274859690,
    },
    "e-51": {
      id: "e-51",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-52",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|5421aa90-56a5-e8b9-591c-b7cc1ea7d23b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|5421aa90-56a5-e8b9-591c-b7cc1ea7d23b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274859690,
    },
    "e-53": {
      id: "e-53",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-54",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|b4c4ba49-a557-0d69-b3a1-e87a9113b58a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|b4c4ba49-a557-0d69-b3a1-e87a9113b58a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274860261,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-56",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|b4c4ba49-a557-0d69-b3a1-e87a9113b59f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|b4c4ba49-a557-0d69-b3a1-e87a9113b59f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274860261,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-58",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|27fb86af-c998-0ebf-16ab-7bcccd6371cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|27fb86af-c998-0ebf-16ab-7bcccd6371cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274860879,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-60",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|27fb86af-c998-0ebf-16ab-7bcccd6371e2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|27fb86af-c998-0ebf-16ab-7bcccd6371e2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274860879,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-62",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|6c63cb3b-e3c8-86d9-43db-f122eb8a3adc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|6c63cb3b-e3c8-86d9-43db-f122eb8a3adc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274861536,
    },
    "e-63": {
      id: "e-63",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-64",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|6c63cb3b-e3c8-86d9-43db-f122eb8a3af1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|6c63cb3b-e3c8-86d9-43db-f122eb8a3af1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274861536,
    },
    "e-65": {
      id: "e-65",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-66",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|8837ba47-2f1e-a066-7a4a-aa7393181c60",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|8837ba47-2f1e-a066-7a4a-aa7393181c60",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274862104,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-68",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|8837ba47-2f1e-a066-7a4a-aa7393181c75",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|8837ba47-2f1e-a066-7a4a-aa7393181c75",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274862104,
    },
    "e-69": {
      id: "e-69",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-70",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|6c82713e-3619-7f0a-1764-46e6815105c5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|6c82713e-3619-7f0a-1764-46e6815105c5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274862793,
    },
    "e-71": {
      id: "e-71",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-72",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|6c82713e-3619-7f0a-1764-46e6815105da",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|6c82713e-3619-7f0a-1764-46e6815105da",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274862793,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-74",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|0d2508f1-564a-21d8-ac98-2301d9467e2b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|0d2508f1-564a-21d8-ac98-2301d9467e2b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274863369,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-76",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|0d2508f1-564a-21d8-ac98-2301d9467e40",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|0d2508f1-564a-21d8-ac98-2301d9467e40",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274863369,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-78",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|3baff02d-407c-a854-e9b7-4be54c36bf85",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|3baff02d-407c-a854-e9b7-4be54c36bf85",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274863905,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-80",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|3baff02d-407c-a854-e9b7-4be54c36bf9a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|3baff02d-407c-a854-e9b7-4be54c36bf9a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274863905,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-82",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|322c8f87-1a6f-6d0d-a181-2f142df9bc46",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|322c8f87-1a6f-6d0d-a181-2f142df9bc46",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274864536,
    },
    "e-83": {
      id: "e-83",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-84",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|322c8f87-1a6f-6d0d-a181-2f142df9bc5b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|322c8f87-1a6f-6d0d-a181-2f142df9bc5b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274864536,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-86",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|e71905f3-b117-7b67-89ba-0cd5f5539848",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|e71905f3-b117-7b67-89ba-0cd5f5539848",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274865031,
    },
    "e-87": {
      id: "e-87",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-88",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|e71905f3-b117-7b67-89ba-0cd5f553985d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|e71905f3-b117-7b67-89ba-0cd5f553985d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710274865031,
    },
    "e-89": {
      id: "e-89",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-90",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|9fc085e3-c1eb-a63e-4b03-3d92ddd467de",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|9fc085e3-c1eb-a63e-4b03-3d92ddd467de",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710279553425,
    },
    "e-90": {
      id: "e-90",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-89",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|9fc085e3-c1eb-a63e-4b03-3d92ddd467de",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|9fc085e3-c1eb-a63e-4b03-3d92ddd467de",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710279553425,
    },
    "e-91": {
      id: "e-91",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-92",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|9fc085e3-c1eb-a63e-4b03-3d92ddd467de",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|9fc085e3-c1eb-a63e-4b03-3d92ddd467de",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710279553425,
    },
    "e-92": {
      id: "e-92",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-91",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|9fc085e3-c1eb-a63e-4b03-3d92ddd467de",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|9fc085e3-c1eb-a63e-4b03-3d92ddd467de",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710279553425,
    },
    "e-121": {
      id: "e-121",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-122",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|794adbee-15b4-3339-9d7c-1e209f36b25e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|794adbee-15b4-3339-9d7c-1e209f36b25e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710279557318,
    },
    "e-122": {
      id: "e-122",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-121",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|794adbee-15b4-3339-9d7c-1e209f36b25e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|794adbee-15b4-3339-9d7c-1e209f36b25e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710279557318,
    },
    "e-123": {
      id: "e-123",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-124",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|794adbee-15b4-3339-9d7c-1e209f36b25e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|794adbee-15b4-3339-9d7c-1e209f36b25e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710279557318,
    },
    "e-124": {
      id: "e-124",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-123",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|794adbee-15b4-3339-9d7c-1e209f36b25e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|794adbee-15b4-3339-9d7c-1e209f36b25e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710279557318,
    },
    "e-153": {
      id: "e-153",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-154",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|e1dc2432-1dd9-e07c-403d-bfba4db78184",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|e1dc2432-1dd9-e07c-403d-bfba4db78184",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710279559810,
    },
    "e-154": {
      id: "e-154",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-153",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|e1dc2432-1dd9-e07c-403d-bfba4db78184",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|e1dc2432-1dd9-e07c-403d-bfba4db78184",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710279559810,
    },
    "e-155": {
      id: "e-155",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-156",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|e1dc2432-1dd9-e07c-403d-bfba4db78184",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|e1dc2432-1dd9-e07c-403d-bfba4db78184",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710339463338,
    },
    "e-156": {
      id: "e-156",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-155",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|e1dc2432-1dd9-e07c-403d-bfba4db78184",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|e1dc2432-1dd9-e07c-403d-bfba4db78184",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710339463339,
    },
    "e-157": {
      id: "e-157",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "RUBBER_BAND_EFFECT",
        instant: false,
        config: { actionListId: "rubberBand", autoStopEventId: "e-158" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|291e8ae5-81f3-bf6a-1e27-449a64a6f018",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|291e8ae5-81f3-bf6a-1e27-449a64a6f018",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: 0,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710367979190,
    },
    "e-159": {
      id: "e-159",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "RUBBER_BAND_EFFECT",
        instant: false,
        config: { actionListId: "rubberBand", autoStopEventId: "e-160" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|9fc085e3-c1eb-a63e-4b03-3d92ddd467de",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|9fc085e3-c1eb-a63e-4b03-3d92ddd467de",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: 0,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710368074375,
    },
    "e-161": {
      id: "e-161",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "RUBBER_BAND_EFFECT",
        instant: false,
        config: { actionListId: "rubberBand", autoStopEventId: "e-162" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|794adbee-15b4-3339-9d7c-1e209f36b25e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|794adbee-15b4-3339-9d7c-1e209f36b25e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: 0,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710368080862,
    },
    "e-163": {
      id: "e-163",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "RUBBER_BAND_EFFECT",
        instant: false,
        config: { actionListId: "rubberBand", autoStopEventId: "e-164" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|e1dc2432-1dd9-e07c-403d-bfba4db78184",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|e1dc2432-1dd9-e07c-403d-bfba4db78184",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: 0,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710368089062,
    },
    "e-165": {
      id: "e-165",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SHRINK_EFFECT",
        instant: false,
        config: { actionListId: "shrinkIn", autoStopEventId: "e-166" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|f7de709d-c969-92ce-9ac4-fa0bcee645dd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|f7de709d-c969-92ce-9ac4-fa0bcee645dd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 40,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1710368128067,
    },
    "e-167": {
      id: "e-167",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SHRINK_EFFECT",
        instant: false,
        config: { actionListId: "shrinkIn", autoStopEventId: "e-168" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65ef7039ce7d4e6123e009d6|2bf89dc9-fc2c-e71e-b784-d6cd1c4df575",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65ef7039ce7d4e6123e009d6|2bf89dc9-fc2c-e71e-b784-d6cd1c4df575",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 40,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1710368166671,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "Close modal",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".modal-wrapper",
                  selectorGuids: ["c5953178-3102-30c3-b7a7-717f9735e179"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".modal-wrapper",
                  selectorGuids: ["c5953178-3102-30c3-b7a7-717f9735e179"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1710254270489,
    },
    "a-2": {
      id: "a-2",
      title: "Model open Texas",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".modal-wrapper.texas",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "1b86606a-357c-c103-9c10-1cff07f00349",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".modal-wrapper.texas",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "1b86606a-357c-c103-9c10-1cff07f00349",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".modal-wrapper.texas",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "1b86606a-357c-c103-9c10-1cff07f00349",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1710254544733,
    },
    "a-3": {
      id: "a-3",
      title: "Change Bg Color Cardapio",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: true,
                  id: "65ef7039ce7d4e6123e009d6|291e8ae5-81f3-bf6a-1e27-449a64a6f018",
                },
                globalSwatchId: "--orange",
                rValue: 248,
                bValue: 12,
                gValue: 157,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1710254781464,
    },
    "a-4": {
      id: "a-4",
      title: "Change Bg Color Cardapio Originial",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: true,
                  id: "65ef7039ce7d4e6123e009d6|291e8ae5-81f3-bf6a-1e27-449a64a6f018",
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0.25,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1710254850230,
    },
    "a-5": {
      id: "a-5",
      title: "Open Options",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".slider",
                  selectorGuids: ["0e041eb9-af5f-867e-63ca-d35dc8cb87ae"],
                },
                value: "block",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1710254994087,
    },
    "a-6": {
      id: "a-6",
      title: "Close Option",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".slider",
                  selectorGuids: ["0e041eb9-af5f-867e-63ca-d35dc8cb87ae"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1710255101650,
    },
    "a-18": {
      id: "a-18",
      title: "Model open Burger Kids",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".modal-wrapper.burger-kids",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "f6990fc3-a5d4-6a1e-cfa0-c309baaeb7e8",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-18-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".modal-wrapper.burger-kids",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "f6990fc3-a5d4-6a1e-cfa0-c309baaeb7e8",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-18-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".modal-wrapper.burger-kids",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "f6990fc3-a5d4-6a1e-cfa0-c309baaeb7e8",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1710254544733,
    },
    "a-9": {
      id: "a-9",
      title: "Model open Miami",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".modal-wrapper.miami",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "d3b25f88-a945-f5de-b065-085e322678bb",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".modal-wrapper.miami",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "d3b25f88-a945-f5de-b065-085e322678bb",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".modal-wrapper.miami",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "d3b25f88-a945-f5de-b065-085e322678bb",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1710254544733,
    },
    "a-8": {
      id: "a-8",
      title: "Model open Dallas",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".modal-wrapper.dallas",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "49371424-fcea-41d4-78ee-8372e3491e75",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".modal-wrapper.dallas",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "49371424-fcea-41d4-78ee-8372e3491e75",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-8-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".modal-wrapper.dallas",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "49371424-fcea-41d4-78ee-8372e3491e75",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1710254544733,
    },
    "a-17": {
      id: "a-17",
      title: "Model open Pepper Chicken",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".modal-wrapper.pepper-chicken",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "702d799a-2e62-3582-e083-b31ac4c56373",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-17-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".modal-wrapper.pepper-chicken",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "702d799a-2e62-3582-e083-b31ac4c56373",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-17-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".modal-wrapper.pepper-chicken",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "702d799a-2e62-3582-e083-b31ac4c56373",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1710254544733,
    },
    "a-19": {
      id: "a-19",
      title: "Model open Chicken Salad",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-19-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".modal-wrapper.chicken-salad",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "bf503259-66b9-5969-7f80-17858f9e5938",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".modal-wrapper.chicken-salad",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "bf503259-66b9-5969-7f80-17858f9e5938",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".modal-wrapper.chicken-salad",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "bf503259-66b9-5969-7f80-17858f9e5938",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1710254544733,
    },
    "a-16": {
      id: "a-16",
      title: "Model open Chicken Burger",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".modal-wrapper.bec",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "2a34bcdb-b0b0-6f82-3b8b-60a5258f1176",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".modal-wrapper.bec",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "2a34bcdb-b0b0-6f82-3b8b-60a5258f1176",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".modal-wrapper.bec",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "2a34bcdb-b0b0-6f82-3b8b-60a5258f1176",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1710254544733,
    },
    "a-15": {
      id: "a-15",
      title: "Model open kansas",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".modal-wrapper.texas",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "1b86606a-357c-c103-9c10-1cff07f00349",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".modal-wrapper.texas",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "1b86606a-357c-c103-9c10-1cff07f00349",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".modal-wrapper.texas",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "1b86606a-357c-c103-9c10-1cff07f00349",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1710254544733,
    },
    "a-14": {
      id: "a-14",
      title: "Model open Baltimore",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".modal-wrapper.baltimore",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "2606d702-0705-b83f-ff99-2a399cb796fe",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".modal-wrapper.baltimore",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "2606d702-0705-b83f-ff99-2a399cb796fe",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".modal-wrapper.baltimore",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "2606d702-0705-b83f-ff99-2a399cb796fe",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1710254544733,
    },
    "a-7": {
      id: "a-7",
      title: "Model open Oklahoma",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".modal-wrapper.oklahoma",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "c0f5a3f7-1958-7f39-0292-c4ed991ff58a",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".modal-wrapper.oklahoma",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "c0f5a3f7-1958-7f39-0292-c4ed991ff58a",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".modal-wrapper.oklahoma",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "c0f5a3f7-1958-7f39-0292-c4ed991ff58a",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1710254544733,
    },
    "a-13": {
      id: "a-13",
      title: "Model Open Florida",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".modal-wrapper.texas",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "1b86606a-357c-c103-9c10-1cff07f00349",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-13-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".modal-wrapper.texas",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "1b86606a-357c-c103-9c10-1cff07f00349",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-13-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".modal-wrapper.texas",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "1b86606a-357c-c103-9c10-1cff07f00349",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1710254544733,
    },
    "a-12": {
      id: "a-12",
      title: "Model open New Mexico",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".modal-wrapper.new-mexico",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "e58f58a7-b26a-fba6-af25-35f8519fa859",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".modal-wrapper.new-mexico",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "e58f58a7-b26a-fba6-af25-35f8519fa859",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".modal-wrapper.new-mexico",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "e58f58a7-b26a-fba6-af25-35f8519fa859",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1710254544733,
    },
    "a-10": {
      id: "a-10",
      title: "Model open New York",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".modal-wrapper.new-york",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "b0a21464-74f0-c833-3053-c0739737c586",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".modal-wrapper.new-york",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "b0a21464-74f0-c833-3053-c0739737c586",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-10-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".modal-wrapper.new-york",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "b0a21464-74f0-c833-3053-c0739737c586",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1710254544733,
    },
    "a-11": {
      id: "a-11",
      title: "Model open Oregon",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".modal-wrapper.oregon",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "a0435fe1-0695-eaa6-4231-6bbb710a8960",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".modal-wrapper.oregon",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "a0435fe1-0695-eaa6-4231-6bbb710a8960",
                  ],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  selector: ".modal-wrapper.oregon",
                  selectorGuids: [
                    "c5953178-3102-30c3-b7a7-717f9735e179",
                    "a0435fe1-0695-eaa6-4231-6bbb710a8960",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1710254544733,
    },
    "a-21": {
      id: "a-21",
      title: "Show additional",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".modal.adicional",
                  selectorGuids: [
                    "becdba50-027b-ab36-f5c9-fce6389e0d6c",
                    "873dd880-0c0b-0f29-bb58-e740229d3a05",
                  ],
                },
                value: "block",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1710339470728,
    },
    "a-22": {
      id: "a-22",
      title: "Hide Additional",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-22-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".modal.adicional",
                  selectorGuids: [
                    "becdba50-027b-ab36-f5c9-fce6389e0d6c",
                    "873dd880-0c0b-0f29-bb58-e740229d3a05",
                  ],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1710339519963,
    },
    rubberBand: {
      id: "rubberBand",
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 250,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1.25,
                yValue: 0.7500000000000001,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outElastic",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
          ],
        },
      ],
    },
    shrinkIn: {
      id: "shrinkIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1.25,
                yValue: 1.25,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});

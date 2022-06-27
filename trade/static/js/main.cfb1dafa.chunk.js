(window.webpackJsonp = window.webpackJsonp || []).push([
	[51], {
		10: function(t, r, a) {
			"use strict";
			a.d(r, "b", (function() {
				return MustBigNumber
			})), a.d(r, "c", (function() {
				return MustDecimalNumber
			})), a.d(r, "a", (function() {
				return T
			})), a.d(r, "h", (function() {
				return roundToNearestFactor
			})), a.d(r, "e", (function() {
				return getDecimalsForNumber
			})), a.d(r, "d", (function() {
				return abbreviateNumber
			})), a.d(r, "f", (function() {
				return getNumberWithOrdinal
			})), a.d(r, "g", (function() {
				return getRandomInt
			}));
			var o = a(175),
				i = a.n(o),
				c = a(124),
				l = a.n(c),
				E = a(855),
				u = a.n(E),
				d = a(67),
				_ = a(607),
				O = a(82);
			const MustBigNumber = t => new d.BigNumber(t || 0),
				MustDecimalNumber = t => new _.Decimal(t || 0),
				T = {
					ZERO: new d.BigNumber(0),
					ONE: new d.BigNumber(1)
				},
				roundToNearestFactor = ({
					number: t,
					factor: r,
					roundingMode: a = d.BigNumber.ROUND_UP
				}) => MustBigNumber(t).div(r).decimalPlaces(0, a).times(r),
				getDecimalsForNumber = (t = 0) => {
					const r = u()(t.toString(), ".");
					return l()(r) > 1 ? l()(i()(r)) : 0
				},
				I = ["", "K", "M", "B", "T"],
				abbreviateNumber = ({
					num: t,
					decimals: r = 3
				}) => {
					const a = Math.log10(Math.abs(MustBigNumber(t).toNumber())) / 3 | 0;
					if (0 === a) return {
						num: MustBigNumber(t).toFixed(O.g),
						suffix: ""
					};
					const o = I[a] || "",
						i = Math.pow(10, 3 * a);
					return {
						num: MustBigNumber(t).div(i).toFixed(r),
						suffix: o
					}
				},
				getNumberWithOrdinal = t => {
					const r = ["th", "st", "nd", "rd"],
						a = t % 100;
					return t + (r[(a - 20) % 10] || r[a] || r[0])
				};

			function getRandomInt({
				min: t,
				max: r
			}) {
				const a = Math.ceil(t),
					o = Math.floor(r);
				return Math.floor(Math.random() * (o - a) + a)
			}
		},
		104: function(t, r, a) {
			"use strict";
			var o = a(230);
			const i = a.n(o).a.parse(window.location.search.substr(1));
			r.a = {
				wallet: i.wallet,
				fast: i.fast,
				newmarkets: i.newmarkets,
				qrexport: i.qrexport,
				stagingdeposit: i.stagingdeposit,
				testtokens: i.testtokens,
				complianceqa: i.complianceqa,
				checkexploit: i.checkexploit,
				isInternal: i.isInternal
			}
		},
		1043: function(t, r) {},
		1061: function(t, r) {},
		1063: function(t, r) {},
		107: function(t, r, a) {
			"use strict";
			a.d(r, "c", (function() {
				return d
			})), a.d(r, "b", (function() {
				return _
			})), a.d(r, "a", (function() {
				return O
			})), a.d(r, "d", (function() {
				return T
			}));
			var o = a(25),
				i = a.n(o),
				c = a(65),
				l = a(41),
				E = a(57),
				u = a(12);
			const d = Object(c.a)([l.m, l.l], (t, r) => !!t && i()(r, "walletAddress", "").toLowerCase() === t.toLowerCase()),
				_ = Object(c.a)([l.m, l.a], (t, r) => !!t && i()(r, "walletAddress", "").toLowerCase() === t.toLowerCase()),
				O = Object(c.a)([d, _], (t, r) => t && r),
				T = Object(c.a)([O, l.e, l.f, l.g, l.h, E.g], (t, r, a, o, i, c) => r ? u.a.LOADING : !t && a ? u.a.INCORRECT_NETWORK : r || !i || t ? o && !t ? u.a.NOT_CONNECTED : u.a.COMPLETE : c && !t ? u.a.EXISTING_USER_MISSING_KEYS : u.a.NEW_USER_INCOMPLETE_ONBOARDING)
		},
		1076: function(t, r) {},
		1138: function(t, r) {},
		1140: function(t, r) {},
		1149: function(t, r) {},
		115: function(t, r, a) {
			"use strict";
			a.d(r, "c", (function() {
				return i
			})), a.d(r, "e", (function() {
				return c
			})), a.d(r, "h", (function() {
				return l
			})), a.d(r, "f", (function() {
				return E
			})), a.d(r, "g", (function() {
				return u
			})), a.d(r, "a", (function() {
				return d
			})), a.d(r, "d", (function() {
				return _
			})), a.d(r, "b", (function() {
				return O
			}));
			var o = a(24);
			const i = Object(o.a)("SET_LEAGUES_LEADERBOARD"),
				c = Object(o.a)("SET_SELECTED_PERIOD"),
				l = Object(o.a)("SET_USER_LEAGUE_INFO"),
				E = Object(o.a)("SET_TIMESPAN_TOGGLE"),
				u = Object(o.a)("SET_USER_DAILY_COMPETITION_INFO"),
				d = Object(o.a)("SET_CURRENT_HEDGIES"),
				_ = Object(o.a)("SET_PAST_HEDGIES"),
				O = Object(o.a)("SET_HISTORICAL_PRIZES")
		},
		1151: function(t, r) {},
		116: function(t, r, a) {
			"use strict";
			a.d(r, "b", (function() {
				return i
			})), a.d(r, "c", (function() {
				return c
			})), a.d(r, "a", (function() {
				return l
			}));
			var o = a(24);
			const i = Object(o.a)("SET_LOCALE_LOADED"),
				c = Object(o.a)("SET_SELECTED_LOCALE"),
				l = Object(o.a)("SET_LOCALE_DATA")
		},
		118: function(t, r, a) {
			"use strict";
			var o = a(596);
			a.d(r, "a", (function() {
				return o.a
			}))
		},
		1181: function(t, r) {},
		1182: function(t, r) {},
		12: function(t, r, a) {
			"use strict";
			let o, i, c;
			a.d(r, "c", (function() {
					return o
				})), a.d(r, "b", (function() {
					return i
				})), a.d(r, "a", (function() {
					return c
				})),
				function(t) {
					t.BitPie = "BITPIE", t.CloverWallet = "CLOVER_WALLET", t.CoinbaseWallet = "COINBASE_WALLET", t.Coin98 = "COIN98", t.HuobiWallet = "HUOBI_WALLET", t.ImToken = "IMTOKEN", t.Ledger = "LEDGER", t.MathWallet = "MATH_WALLET", t.MetaMask = "METAMASK", t.Rainbow = "RAINBOW_WALLET", t.TokenPocket = "TOKEN_POCKET", t.TrustWallet = "TRUST_WALLET", t.WalletConnect = "WALLET_CONNECT", t.TestWallet = "TEST_WALLET", t.OtherWallet = "OTHER_WALLET"
				}(o || (o = {})),
				function(t) {
					t.NOT_LOADED = "NOT_LOADED", t.NO_WALLET = "NO_WALLET", t.NO_ACCOUNTS = "NO_ACCOUNTS", t.INCORRECT_NETWORK = "INCORRECT_NETWORK", t.READY = "READY", t.DISCONNECTED = "DISCONNECTED"
				}(i || (i = {})),
				function(t) {
					t.LOADING = "LOADING", t.NOT_CONNECTED = "NOT_CONNECTED", t.INCORRECT_NETWORK = "INCORRECT_NETWORK", t.EXISTING_USER_MISSING_KEYS = "EXISTING_USER_MISSING_KEYS", t.NEW_USER_INCOMPLETE_ONBOARDING = "NEW_USER_INCOMPLETE_ONBOARDING", t.COMPLETE = "COMPLETE"
				}(c || (c = {}))
		},
		120: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return i
			})), a.d(r, "b", (function() {
				return c
			})), a.d(r, "c", (function() {
				return l
			}));
			var o = a(24);
			const i = Object(o.a)("PAGE_LOADED"),
				c = Object(o.a)("REACT_MOUNTED"),
				l = Object(o.a)("SET_IS_SIDEBAR_OPEN")
		},
		123: function(t, r, a) {
			"use strict";
			a.d(r, "g", (function() {
				return Modal
			})), a.d(r, "f", (function() {
				return ModalOverlay
			})), a.d(r, "c", (function() {
				return m
			})), a.d(r, "e", (function() {
				return h.d
			})), a.d(r, "d", (function() {
				return h.c
			})), a.d(r, "b", (function() {
				return h.b
			})), a.d(r, "a", (function() {
				return h.a
			}));
			var o = a(182),
				i = a.n(o),
				c = a(0),
				l = a.n(c),
				E = a(1),
				u = a.n(E),
				d = a(13),
				_ = a.n(d),
				O = "_2XknVmc-v5ZR67kHZuLkL6",
				T = "_7AfZcdAOm7Ydvz0vnV2zX",
				I = "Dgmj8o1YKgehxNJbw_Tr7",
				S = "_2a61-AWfZNWbRrnppZF_j1",
				p = "_2wgUZHaU3xRwvfC6q2dQgp",
				R = "_2vI-tsSBc9nQPU7plNf2LH",
				// A = "_2wNKOXAgdCkxKsiBDbHoA8",
        		A = "lbVvki",
				b = "dJWse2gWjiyitR6NPhLMr",
				// N = "_1lYNxaT-zXRyTelPwAHSM8",
       		 	N = "ghCdOs",
				C = "_2wZaHSB97Te-ugQ3tWUYlj",
				y = "mwdGXwHTEbQbQUHb7fJ2H",
				D = "_24HVMzb6wOvNEOEdUoJ25i";
			const m = {
					SMALL: "SMALL",
					MEDIUM: "MEDIUM",
					LARGE: "LARGE",
					EXTRA_LARGE: "EXTRA_LARGE",
					FULL_WIDTH: "FULL_WIDTH"
				},
				Modal = ({
					children: t,
					className: r,
					size: a = m.SMALL
				}) => l.a.createElement("div", {
					className: _()(A, {
						[b]: a === m.SMALL,
						[N]: a === m.MEDIUM,
						[C]: a === m.LARGE,
						[y]: a === m.EXTRA_LARGE,
						[D]: a === m.FULL_WIDTH
					}, r)
				}, t);
			Modal.propTypes = {
				children: u.a.oneOfType([u.a.arrayOf(u.a.node), u.a.node]).isRequired,
				className: u.a.string,
				size: u.a.oneOf(i()(m))
			};
			const ModalOverlay = ({
				children: t,
				footerOverlayOnly: r,
				headerOverlayOnly: a,
				increasedBlur: o,
				onClickOutside: i
			}) => {
				const E = l.a.useRef();
				Object(c.useEffect)(() => (document.body.classList.add("no-scroll"), () => document.body.classList.remove("no-scroll")), []);
				return l.a.createElement("div", {
					role: "button",
					tabIndex: 0,
					className: _()(O, {
						[T]: a,
						[I]: r
					}),
					onClick: t => {
						E.current && !E.current.contains(t.target) && i()
					}
				}, l.a.createElement("div", {
					className: _()(S, {
						[p]: o
					})
				}, !a && !r && l.a.createElement("div", {
					className: R,
					ref: E
				}, t)))
			};
			ModalOverlay.propTypes = {
				children: u.a.node.isRequired,
				footerOverlayOnly: u.a.bool,
				headerOverlayOnly: u.a.bool,
				increasedBlur: u.a.bool,
				onClickOutside: u.a.func
			};
			var h = a(320)
		},
		1291: function(t, r) {},
		130: function(t, r, a) {
			"use strict";
			a.d(r, "c", (function() {
				return i
			})), a.d(r, "a", (function() {
				return c
			})), a.d(r, "d", (function() {
				return l
			})), a.d(r, "e", (function() {
				return E
			})), a.d(r, "b", (function() {
				return u
			})), a.d(r, "f", (function() {
				return d
			}));
			var o = a(24);
			const i = Object(o.a)("SET_DEPOSIT_WITHDRAW_DATA"),
				c = Object(o.a)("CLEAR_DEPOSIT_WITHDRAW_INPUTS"),
				l = Object(o.a)("SET_AVAILABLE_SLOW_WITHDRAW"),
				E = Object(o.a)("UPDATE_PENDING_DEPOSIT"),
				u = Object(o.a)("REMOVE_PENDING_DEPOSIT"),
				d = Object(o.a)("UPDATED_BLOCK_NUMBER")
		},
		139: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return use_adjusted_current_time
			})), a.d(r, "d", (function() {
				return hooks_useGetCountdownDiff
			})), a.d(r, "e", (function() {
				return use_hide_horizontal_overflow
			})), a.d(r, "f", (function() {
				return hooks_useIsFirstRender
			})), a.d(r, "h", (function() {
				return use_on_click_outside
			})), a.d(r, "i", (function() {
				return use_page_title_price_updates
			})), a.d(r, "k", (function() {
				return hooks_usePollCandleData
			})), a.d(r, "l", (function() {
				return use_poll_historical_pnl
			})), a.d(r, "n", (function() {
				return use_poll_trading_rewards_data
			})), a.d(r, "o", (function() {
				return use_poll_wallet_data
			})), a.d(r, "q", (function() {
				return use_save_trade_data
			})), a.d(r, "r", (function() {
				return useStarredMarkets
			})), a.d(r, "b", (function() {
				return ne.c
			})), a.d(r, "c", (function() {
				return useDebouncedEffect
			})), a.d(r, "j", (function() {
				return usePageVisibility
			})), a.d(r, "m", (function() {
				return usePollRestrictions
			})), a.d(r, "g", (function() {
				return useNow
			})), a.d(r, "s", (function() {
				return oe.a
			})), a.d(r, "p", (function() {
				return usePollingFunction
			}));
			var o = a(0),
				i = a(72);

			function asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function _asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			}

			function _slicedToArray(t, r) {
				return function _arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function _iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function _unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return _arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return _arrayLikeToArray(t, r)
				}(t, r) || function _nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}
			const c = a(163).a ? "https://dydx-api.consenlabs.com" : "https://api.dydx.exchange",
				l = new i.DydxClient(c);
			let E, u = !1;
			var use_adjusted_current_time = ({
					updateInterval: t = 1e3
				} = {}) => {
					const r = _slicedToArray(Object(o.useState)(l.clock.getAdjustedIsoString()), 2),
						a = r[0],
						i = r[1];
					return Object(o.useEffect)(_asyncToGenerator((function*() {
						if (!u) {
							u = !0;
							const t = yield l.public.getTimestampAdjustment();
							l.clock.setTimestampAdjustment(t), i(l.clock.getAdjustedIsoString())
						}
						const updateTimestamp = () => {
							i(l.clock.getAdjustedIsoString()), E = setTimeout(updateTimestamp, t)
						};
						return E = setTimeout(updateTimestamp, t), () => {
							clearTimeout(E)
						}
					})), []), a
				},
				d = a(59),
				_ = a(2);

			function useGetCountdownDiff_slicedToArray(t, r) {
				return function useGetCountdownDiff_arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function useGetCountdownDiff_iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function useGetCountdownDiff_unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return useGetCountdownDiff_arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return useGetCountdownDiff_arrayLikeToArray(t, r)
				}(t, r) || function useGetCountdownDiff_nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function useGetCountdownDiff_arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}
			var hooks_useGetCountdownDiff = ({
				futureDateISO: t,
				stringGetter: r
			}) => {
				const a = useGetCountdownDiff_slicedToArray(Object(o.useState)(!1), 2),
					i = a[0],
					c = a[1],
					l = useGetCountdownDiff_slicedToArray(Object(o.useState)(t), 2),
					E = l[0],
					u = l[1],
					O = useGetCountdownDiff_slicedToArray(Object(o.useState)(), 2),
					T = O[0],
					I = O[1],
					S = useGetCountdownDiff_slicedToArray(Object(o.useState)(), 2),
					p = S[0],
					R = S[1],
					A = useGetCountdownDiff_slicedToArray(Object(o.useState)(), 2),
					b = A[0],
					N = A[1],
					C = useGetCountdownDiff_slicedToArray(Object(o.useState)(), 2),
					y = C[0],
					D = C[1],
					m = useGetCountdownDiff_slicedToArray(Object(o.useState)(null), 2),
					h = m[0],
					L = m[1],
					stopCountdown = () => {
						c(!1), h && (clearTimeout(h), L(null))
					},
					updateDiffString = () => {
						const a = d.DateTime.fromISO(t).diffNow(["days", "hours", "minutes"]),
							o = a.days,
							i = a.hours,
							c = a.minutes;
						I(`${Math.max(Math.floor(o),0)}${r({key:_.a.DAYS_ABBREVIATED})} ${Math.max(Math.floor(i),0)}${r({key:_.a.HOURS_ABBREVIATED})} ${Math.max(Math.floor(c),0)}${r({key:_.a.MINUTES_ABBREVIATED})}`), R("" + Math.max(Math.floor(o), 0)), N("" + Math.max(Math.floor(i), 0)), D("" + Math.max(Math.floor(c), 0)), L(setTimeout(updateDiffString, Number("60000")))
					};
				return Object(o.useEffect)(() => (i && E === t || !t || (c(!0), updateDiffString(), u(t)), () => stopCountdown()), [t]), Object(o.useEffect)(() => stopCountdown(), []), {
					value: T,
					days: p,
					hours: b,
					minutes: y
				}
			};

			function use_hide_horizontal_overflow_slicedToArray(t, r) {
				return function use_hide_horizontal_overflow_arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function use_hide_horizontal_overflow_iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function use_hide_horizontal_overflow_unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return use_hide_horizontal_overflow_arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return use_hide_horizontal_overflow_arrayLikeToArray(t, r)
				}(t, r) || function use_hide_horizontal_overflow_nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function use_hide_horizontal_overflow_arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}
			var use_hide_horizontal_overflow = ({
				containerRef: t,
				contentRef: r,
				isLoading: a,
				minElements: i = 3,
				maxElements: c,
				availableWidth: l
			}) => {
				const E = use_hide_horizontal_overflow_slicedToArray(Object(o.useReducer)(t => t + 1, 0), 2)[1],
					u = use_hide_horizontal_overflow_slicedToArray(Object(o.useState)(l), 2),
					d = u[0],
					_ = u[1],
					O = use_hide_horizontal_overflow_slicedToArray(Object(o.useState)(c), 2),
					T = O[0],
					I = O[1];
				return Object(o.useEffect)(() => {
					E()
				}, []), Object(o.useEffect)(() => {
					const a = t.current && t.current.offsetWidth,
						o = r.current && r.current.offsetWidth;
					a && o && (o > a ? I(T <= i ? i : T - 1) : d < l && T < c && I(T + 1))
				}, [l, a, T]), Object(o.useEffect)(() => {
					_(l)
				}, [l]), T
			};
			var hooks_useIsFirstRender = () => {
				const t = Object(o.useRef)(!0);
				return Object(o.useEffect)(() => {
					t.current = !1
				}, []), t.current
			};
			var use_on_click_outside = ({
				onClickOutside: t,
				ref: r,
				dependencies: a = []
			}) => (Object(o.useEffect)(() => {
				const handleClickOutside = a => {
					r.current && !r.current.contains(a.target) && t(a)
				};
				return window.addEventListener("click", handleClickOutside), () => window.removeEventListener("click", handleClickOutside)
			}, a), null);
			var use_page_title_price_updates = ({
					price: t,
					market: r
				}) => (Object(o.useEffect)(() => (document.title = t && r ? `$${t} ${r} \xb7 dYdX` : "dYdX", () => document.title = "dYdX"), [t]), null),
				O = a(14),
				T = a(229),
				I = a(356),
				S = a(58),
				p = a(22),
				R = a(608);

			function usePollCandleData_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}
			const A = parseInt("10000", 10);
			let b;
			const stopPollingCandleData = () => {
				b && (clearTimeout(b), b = null)
			};
			var hooks_usePollCandleData = () => {
					const t = Object(O.e)(),
						r = Object(O.f)(I.d, O.d),
						a = (Object(O.f)(S.b, O.d) || {}).market,
						i = Object(I.c)({
							allCandleData: r,
							market: a
						}),
						c = function() {
							var r = function usePollCandleData_asyncToGenerator(t) {
								return function() {
									var r = this,
										a = arguments;
									return new Promise((function(o, i) {
										var c = t.apply(r, a);

										function _next(t) {
											usePollCandleData_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
										}

										function _throw(t) {
											usePollCandleData_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
										}
										_next(void 0)
									}))
								}
							}((function*({
								isFirstRequest: r = !1
							} = {}) {
								try {
									const o = yield Object(R.a)({
										market: a,
										resolution: i,
										isFirstRequest: r
									});
									t(Object(T.c)({
										candles: o,
										market: a,
										resolution: i
									}))
								} catch (o) {
									p.b.notify({
										error: o,
										location: p.a.POLL_CHART_DATA
									})
								}
							}));
							return function fetchAndUpdateCandles() {
								return r.apply(this, arguments)
							}
						}();
					Object(o.useEffect)(() => () => stopPollingCandleData(), []), Object(o.useEffect)(() => {
						const pollCandleData = () => {
							stopPollingCandleData();
							const t = Object(I.a)({
								allCandleData: r,
								market: a,
								resolution: i
							});
							if (null === t || void 0 === t || !t.length) return c({
								isFirstRequest: !0
							}), void(b = setTimeout(() => pollCandleData(), A));
							Math.abs(d.DateTime.fromMillis(Object(I.b)({
								allCandleData: r,
								market: a,
								resolution: i
							})).diffNow("milliseconds").milliseconds) >= A && c(), b = setTimeout(() => pollCandleData(), A)
						};
						stopPollingCandleData(), b = setTimeout(() => pollCandleData(), A)
					}, [r, a, i])
				},
				N = a(175),
				C = a.n(N),
				y = a(124),
				D = a.n(y),
				m = a(352),
				h = a(168),
				L = a(357),
				g = a(237),
				P = a(366),
				v = a(32);

			function use_poll_historical_pnl_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function use_poll_historical_pnl_asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							use_poll_historical_pnl_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							use_poll_historical_pnl_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			}
			const w = Number("3600000");
			let M;
			var use_poll_historical_pnl = () => {
					const t = Object(O.e)(),
						r = Object(O.f)(h.a, O.d),
						a = null === r || void 0 === r ? void 0 : r.id,
						i = Object(O.f)(L.a),
						c = Object(O.f)(L.b),
						l = Object(O.f)(L.c),
						E = Object(O.f)(L.d);
					let u, _;
					const T = function() {
							var r = use_poll_historical_pnl_asyncToGenerator((function*({
								createdBeforeOrAt: r
							} = {}) {
								try {
									const o = yield v.c.getHistoricalPnl({
										accountId: a,
										createdBeforeOrAt: r
									});
									t(Object(m.a)({
										historicalPnl: o.historicalPnl,
										isUpdatingLatestTicks: !r
									}))
								} catch (o) {
									p.b.notify({
										error: o,
										location: p.a.POLL_HISTORICAL_PNL
									})
								}
							}));
							return function fetchHistoricalPnl() {
								return r.apply(this, arguments)
							}
						}(),
						I = function() {
							var t = use_poll_historical_pnl_asyncToGenerator((function*() {
								M && stopPollingHistoricalPnl(), c && !(({
									historicalPnlLastUpdated: t
								}) => !t || (new Date).getTime() - t > w)({
									historicalPnlLastUpdated: l
								}) || T(), M = setTimeout(() => I(), w)
							}));
							return function pollHistoricalPnl() {
								return t.apply(this, arguments)
							}
						}(),
						stopPollingHistoricalPnl = () => {
							clearTimeout(M), M = null
						};
					Object(o.useEffect)(() => (a && I(), () => stopPollingHistoricalPnl()), [a]), Object(o.useEffect)(() => {
						if (a && i && (D()(u) < D()(c) || _ && E !== _)) {
							const t = C()(c);
							t && Object(P.d)({
								timestamp: Date.parse(t.createdAt).valueOf(),
								timeInterval: g.d[E]
							}) && T({
								createdBeforeOrAt: d.DateTime.fromISO(t.createdAt).minus({
									minutes: 10
								}).toUTC().toISO()
							})
						}
						u = c, _ = E
					}, [a, i, c, E])
				},
				U = a(196),
				G = a(297),
				j = a(41),
				k = a(107);

			function use_poll_trading_rewards_data_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function use_poll_trading_rewards_data_slicedToArray(t, r) {
				return function use_poll_trading_rewards_data_arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function use_poll_trading_rewards_data_iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function use_poll_trading_rewards_data_unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return use_poll_trading_rewards_data_arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return use_poll_trading_rewards_data_arrayLikeToArray(t, r)
				}(t, r) || function use_poll_trading_rewards_data_nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function use_poll_trading_rewards_data_arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}
			let x;
			const H = Number("300000"),
				stopPollingTradingRewardsData = () => {
					x && (clearTimeout(x), x = null)
				};
			var use_poll_trading_rewards_data = () => {
					const t = use_poll_trading_rewards_data_slicedToArray(Object(o.useState)(), 2),
						r = t[0],
						a = t[1],
						i = Object(O.e)(),
						c = Object(O.f)(G.b, O.d),
						l = Object(O.f)(j.m),
						E = Object(O.f)(k.a),
						u = function() {
							var t = function use_poll_trading_rewards_data_asyncToGenerator(t) {
								return function() {
									var r = this,
										a = arguments;
									return new Promise((function(o, i) {
										var c = t.apply(r, a);

										function _next(t) {
											use_poll_trading_rewards_data_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
										}

										function _throw(t) {
											use_poll_trading_rewards_data_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
										}
										_next(void 0)
									}))
								}
							}((function*() {
								if (stopPollingTradingRewardsData(), E) try {
									const t = yield v.c.getTradingRewardsData();
									i(Object(U.b)({
										tradingRewards: t,
										isLatestEpoch: !0
									}))
								} catch (t) {
									p.b.notify({
										error: t,
										location: p.a.GET_REWARDS_DATA
									})
								}
								x = setTimeout(u, H)
							}));
							return function pollTradingRewardsData() {
								return t.apply(this, arguments)
							}
						}();
					Object(o.useEffect)(() => {
						const t = c.lastPulledAt;
						return x || (!t || d.DateTime.local().diff(d.DateTime.fromISO(t)).milliseconds >= H ? u() : x = setTimeout(u, H)), () => stopPollingTradingRewardsData()
					}, []), Object(o.useEffect)(() => {
						E ? r === l && x || u() : stopPollingTradingRewardsData(), a(l)
					}, [E, l])
				},
				B = a(80),
				W = a(10),
				Y = a(403),
				K = a(85);

			function use_poll_wallet_data_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function use_poll_wallet_data_asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							use_poll_wallet_data_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							use_poll_wallet_data_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			}
			const V = Number("20000");
			var use_poll_wallet_data = ({
					assetAllowances: t,
					setAssetAllowances: r,
					setAssetBalances: a,
					setWalletBalances: i,
					walletAddress: c
				}) => {
					let l, E;
					return Object(o.useEffect)(() => {
						const o = function() {
								var a = use_poll_wallet_data_asyncToGenerator((function*() {
									let a;
									l && stopPollingAllowances();
									try {
										yield Promise.all(B.b.map(function() {
											var o = use_poll_wallet_data_asyncToGenerator((function*(o) {
												var i;
												if (o !== B.a.ETH && Object(W.b)(null !== (i = null === t || void 0 === t ? void 0 : t[o]) && void 0 !== i ? i : 0).isZero()) {
													const t = B.c[o],
														i = t.address,
														l = t.decimals;
													a = yield Object(Y.c)({
														decimals: l,
														ownerAddress: c,
														tokenAddress: i
													}), r({
														asset: o,
														allowance: a
													})
												}
											}));
											return function(t) {
												return o.apply(this, arguments)
											}
										}()))
									} catch (i) {
										p.b.notify({
											error: i,
											location: p.a.POLL_ALLOWANCES
										})
									}
									l = setTimeout(() => o(), V)
								}));
								return function pollAllowances() {
									return a.apply(this, arguments)
								}
							}(),
							u = function() {
								var t = use_poll_wallet_data_asyncToGenerator((function*() {
									E && stopPollingBalances();
									try {
										const t = yield K.a.collateralToken.getBalance({
											ownerAddress: c
										});
										i(t), yield Promise.all(B.b.map(function() {
											var t = use_poll_wallet_data_asyncToGenerator((function*(t) {
												if (t !== B.a.ETH && t !== B.a.USDC) {
													const r = B.c[t],
														o = r.address,
														i = r.decimals,
														l = yield v.c.getBalance({
															tokenAddress: o,
															walletAddress: c
														});
													a({
														asset: t,
														balance: l.div(Object(W.b)(10).pow(Object(W.b)(i))).toString()
													})
												} else if (t === B.a.ETH) {
													const r = yield v.c.getEthBalance({
														walletAddress: c
													});
													a({
														asset: t,
														balance: r.div(Object(W.b)(10).pow(Object(W.b)(18))).toString()
													})
												}
											}));
											return function(r) {
												return t.apply(this, arguments)
											}
										}()))
									} catch (t) {
										p.b.notify({
											error: t,
											location: p.a.POLL_WALLET_BALANCES
										})
									}
									E = setTimeout(() => u(), V)
								}));
								return function pollBalances() {
									return t.apply(this, arguments)
								}
							}(),
							stopPollingAllowances = () => {
								clearTimeout(l), l = null
							},
							stopPollingBalances = () => {
								clearTimeout(E), E = null
							};
						return r && o(), u(), () => {
							stopPollingAllowances(), stopPollingBalances()
						}
					}, []), null
				},
				Z = a(48),
				z = a.n(Z),
				X = a(574),
				q = a.n(X),
				$ = a(16);

			function ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function _objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? ownKeys(Object(a), !0).forEach((function(r) {
						_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function _defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			var use_save_trade_data = ({
					clearData: t = !1,
					currentTradeData: r,
					showModalKey: a,
					setTradeData: i
				}) => {
					let c;
					Object(o.useEffect)(() => (c = q()(r, (t, r) => !z()($.k, r)), t && i(_objectSpread({}, $.d)), () => {
						i(_objectSpread(_objectSpread({}, c), {}, {
							[a]: !1
						}))
					}), [])
				},
				Q = a(457),
				J = a.n(Q),
				ee = a(57),
				te = a(55),
				re = a(40);

			function useStarredMarkets_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function useStarredMarkets_asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							useStarredMarkets_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							useStarredMarkets_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			}

			function useStarredMarkets_slicedToArray(t, r) {
				return function useStarredMarkets_arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function useStarredMarkets_iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function useStarredMarkets_unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return useStarredMarkets_arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return useStarredMarkets_arrayLikeToArray(t, r)
				}(t, r) || function useStarredMarkets_nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function useStarredMarkets_arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}
			const useStarredMarkets = () => {
				var t;
				const r = Object(O.e)(),
					a = Object(O.f)(ee.e),
					i = useStarredMarkets_slicedToArray(Object(o.useState)((null === a || void 0 === a || null === (t = a.userData) || void 0 === t ? void 0 : t.starredMarkets) || Object(re.b)({
						key: re.a.MARKET_SELECTOR_STARRED_MARKETS
					}) || []), 2),
					c = i[0],
					l = i[1];
				Object(o.useEffect)(() => {
					var t;
					l((null === a || void 0 === a || null === (t = a.userData) || void 0 === t ? void 0 : t.starredMarkets) || Object(re.b)({
						key: re.a.MARKET_SELECTOR_STARRED_MARKETS
					}) || [])
				}, [a]);
				const E = J()(useStarredMarkets_asyncToGenerator((function*() {
					var t, o;
					if (Object(re.d)({
							key: re.a.MARKET_SELECTOR_STARRED_MARKETS,
							value: c
						}), a && c.toString() !== (null === (t = a.userData) || void 0 === t || null === (o = t.starredMarkets) || void 0 === o ? void 0 : o.toString())) try {
						const t = (yield v.c.updateUser({
							userData: {
								starredMarkets: c
							}
						})).user;
						r(Object(te.c)(t))
					} catch (i) {
						p.b.notify({
							error: i,
							location: p.a.UPDATE_STARRED_MARKETS
						})
					}
				})), 500);
				return Object(o.useEffect)(() => {
					E()
				}, [c]), [c, l]
			};
			var ne = a(164);
			const useDebouncedEffect = (t, r, a) => {
				Object(o.useEffect)(() => {
					const r = setTimeout(() => t(), a);
					return () => clearTimeout(r)
				}, [...r || [], a])
			};

			function usePageVisibility_slicedToArray(t, r) {
				return function usePageVisibility_arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function usePageVisibility_iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function usePageVisibility_unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return usePageVisibility_arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return usePageVisibility_arrayLikeToArray(t, r)
				}(t, r) || function usePageVisibility_nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function usePageVisibility_arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}
			let ae;

			function usePageVisibility({
				delay: t = 100
			} = {}) {
				const r = usePageVisibility_slicedToArray(Object(o.useState)(!document.hidden), 2),
					a = r[0],
					i = r[1];
				return Object(o.useEffect)(() => {
					const onPageVisibilityChanged = () => {
						t ? (ae && clearTimeout(ae), ae = window.setTimeout(() => {
							i(!document.hidden)
						}, t)) : i(!document.hidden)
					};
					return document.addEventListener("visibilitychange", onPageVisibilityChanged), () => {
						ae && clearTimeout(ae), document.removeEventListener("visibilitychange", onPageVisibilityChanged)
					}
				}, []), a
			}

			function usePollRestrictions_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}
			const usePollRestrictions = ({
				setUserRestrictions: t
			}) => {
				let r;
				Object(o.useEffect)(() => {
					const a = function() {
							var o = function usePollRestrictions_asyncToGenerator(t) {
								return function() {
									var r = this,
										a = arguments;
									return new Promise((function(o, i) {
										var c = t.apply(r, a);

										function _next(t) {
											usePollRestrictions_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
										}

										function _throw(t) {
											usePollRestrictions_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
										}
										_next(void 0)
									}))
								}
							}((function*() {
								stopPollingRestrictions();
								try {
									const r = yield v.c.getUserRestrictions();
									t({
										userRestrictions: r,
										ignoreMiddleware: !0
									})
								} catch (o) {
									console.warn("Polling User Restrictions - Error")
								}
								r = setTimeout(() => a(), 6e4)
							}));
							return function pollUserRestrictions() {
								return o.apply(this, arguments)
							}
						}(),
						stopPollingRestrictions = () => {
							r && clearTimeout(r), r = null
						};
					return a(), () => {
						stopPollingRestrictions()
					}
				}, [])
			};

			function useNow_slicedToArray(t, r) {
				return function useNow_arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function useNow_iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function useNow_unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return useNow_arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return useNow_arrayLikeToArray(t, r)
				}(t, r) || function useNow_nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function useNow_arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}
			const useNow = () => {
				const t = useNow_slicedToArray(Object(o.useState)(Date.now()), 2),
					r = t[0],
					a = t[1],
					i = useNow_slicedToArray(Object(o.useState)(!0), 2),
					c = i[0],
					l = i[1];
				return Object(o.useEffect)(() => {
					const update = () => {
						a(Date.now()), c && globalThis.requestAnimationFrame(update)
					};
					return update(), () => l(!1)
				}, []), r
			};
			var oe = a(609);

			function usePollingFunction_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}
			const usePollingFunction = ({
				fetch: t,
				setPolledItem: r,
				stopFetching: a,
				timeout: i
			}) => {
				let c;
				Object(o.useEffect)(() => {
					const o = function() {
							var l = function usePollingFunction_asyncToGenerator(t) {
								return function() {
									var r = this,
										a = arguments;
									return new Promise((function(o, i) {
										var c = t.apply(r, a);

										function _next(t) {
											usePollingFunction_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
										}

										function _throw(t) {
											usePollingFunction_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
										}
										_next(void 0)
									}))
								}
							}((function*() {
								if (stopPollingFunction(), !a) {
									try {
										const a = yield t();
										r(a)
									} catch (l) {
										console.warn("General Polling Function - Error", l)
									}
									c = setTimeout(() => o(), i)
								}
							}));
							return function pollingFunction() {
								return l.apply(this, arguments)
							}
						}(),
						stopPollingFunction = () => {
							c && clearTimeout(c), c = null
						};
					return o(), () => {
						stopPollingFunction()
					}
				}, [])
			}
		},
		1412: function(t, r) {},
		146: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return i
			})), a.d(r, "b", (function() {
				return c
			}));
			var o = a(24);
			const i = Object(o.a)("INITIALIZE_CLIENT"),
				c = Object(o.a)("KEYS_SUCCESSFULLY_GENERATED")
		},
		147: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return getModalConfig
			})), a.d(r, "b", (function() {
				return getSidebarModalConfig
			}));
			const getModalConfig = t => {
					var r;
					return null === (r = t.modals) || void 0 === r ? void 0 : r.modalConfig
				},
				getSidebarModalConfig = t => {
					var r;
					return null === (r = t.modals) || void 0 === r ? void 0 : r.sidebarModalConfig
				}
		},
		1494: function(t, r) {},
		1498: function(t, r) {},
		15: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return E
			})), a.d(r, "b", (function() {
				return _
			})), a.d(r, "e", (function() {
				return p
			})), a.d(r, "i", (function() {
				return A
			})), a.d(r, "k", (function() {
				return N
			})), a.d(r, "j", (function() {
				return y
			})), a.d(r, "m", (function() {
				return m
			})), a.d(r, "n", (function() {
				return g
			})), a.d(r, "o", (function() {
				return v
			})), a.d(r, "q", (function() {
				return M
			})), a.d(r, "s", (function() {
				return G
			})), a.d(r, "t", (function() {
				return k
			})), a.d(r, "v", (function() {
				return H
			})), a.d(r, "x", (function() {
				return W
			})), a.d(r, "y", (function() {
				return K
			})), a.d(r, "E", (function() {
				return Z
			})), a.d(r, "G", (function() {
				return X
			})), a.d(r, "H", (function() {
				return $
			})), a.d(r, "K", (function() {
				return ee
			})), a.d(r, "L", (function() {
				return re
			})), a.d(r, "M", (function() {
				return ae
			})), a.d(r, "N", (function() {
				return ie
			})), a.d(r, "O", (function() {
				return ce
			})), a.d(r, "P", (function() {
				return Ee
			})), a.d(r, "Q", (function() {
				return _e
			})), a.d(r, "R", (function() {
				return Ie
			})), a.d(r, "T", (function() {
				return Re
			})), a.d(r, "U", (function() {
				return Ne
			})), a.d(r, "cb", (function() {
				return ye
			})), a.d(r, "db", (function() {
				return Le
			})), a.d(r, "eb", (function() {
				return Pe
			})), a.d(r, "fb", (function() {
				return we
			})), a.d(r, "jb", (function() {
				return Ue
			})), a.d(r, "kb", (function() {
				return je
			})), a.d(r, "lb", (function() {
				return xe
			})), a.d(r, "mb", (function() {
				return Be
			})), a.d(r, "nb", (function() {
				return ze
			})), a.d(r, "pb", (function() {
				return qe
			})), a.d(r, "ob", (function() {
				return Je
			})), a.d(r, "qb", (function() {
				return Et
			})), a.d(r, "rb", (function() {
				return _t
			})), a.d(r, "sb", (function() {
				return Tt
			})), a.d(r, "vb", (function() {
				return Rt
			})), a.d(r, "wb", (function() {
				return ft
			})), a.d(r, "xb", (function() {
				return Nt
			})), a.d(r, "yb", (function() {
				return mt
			})), a.d(r, "zb", (function() {
				return Lt
			})), a.d(r, "Ab", (function() {
				return Pt
			})), a.d(r, "Bb", (function() {
				return wt
			})), a.d(r, "Cb", (function() {
				return Gt
			})), a.d(r, "c", (function() {
				return kt
			})), a.d(r, "f", (function() {
				return xt
			})), a.d(r, "g", (function() {
				return Ft
			})), a.d(r, "h", (function() {
				return Yt
			})), a.d(r, "l", (function() {
				return Vt
			})), a.d(r, "r", (function() {
				return Xt
			})), a.d(r, "z", (function() {
				return $t
			})), a.d(r, "A", (function() {
				return Jt
			})), a.d(r, "B", (function() {
				return rr
			})), a.d(r, "I", (function() {
				return or
			})), a.d(r, "J", (function() {
				return cr
			})), a.d(r, "p", (function() {
				return Er
			})), a.d(r, "S", (function() {
				return dr
			})), a.d(r, "hb", (function() {
				return Or
			})), a.d(r, "ib", (function() {
				return Sr
			})), a.d(r, "tb", (function() {
				return Ar
			})), a.d(r, "ub", (function() {
				return Nr
			})), a.d(r, "w", (function() {
				return Dr
			})), a.d(r, "u", (function() {
				return hr
			})), a.d(r, "C", (function() {
				return vr
			})), a.d(r, "V", (function() {
				return Mr
			})), a.d(r, "W", (function() {
				return kr
			})), a.d(r, "X", (function() {
				return Hr
			})), a.d(r, "Y", (function() {
				return Wr
			})), a.d(r, "Z", (function() {
				return Vr
			})), a.d(r, "ab", (function() {
				return zr
			})), a.d(r, "bb", (function() {
				return Qr
			})), a.d(r, "gb", (function() {
				return en
			})), a.d(r, "d", (function() {
				return an
			})), a.d(r, "D", (function() {
				return sn
			})), a.d(r, "F", (function() {
				return En
			}));
			var o = a(0),
				i = a.n(o);

			function _extends() {
				return (_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var c = o.createElement("g", {
					clipPath: "url(#account_clip)"
				}, o.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M20.6443 7.46033C21.0692 10.204 19.2384 12.7344 16.6184 13.1588C13.9983 13.5831 11.4924 11.755 11.0674 9.01137C10.6425 6.26769 12.4733 3.73728 15.0933 3.31294C17.7134 2.88861 20.2193 4.71665 20.6443 7.46033ZM21.8782 7.26049C22.405 10.6616 20.1357 13.8554 16.8097 14.394C16.6848 14.4143 16.5602 14.4304 16.436 14.4427C15.5461 16.0055 14.0018 17.1615 12.1188 17.4664C11.9318 17.4967 11.7454 17.518 11.5601 17.5305C10.6455 19.4128 8.82276 20.7782 6.62616 20.9756C3.2716 21.2772 0.315418 18.7407 0.0233436 15.3103C-0.26873 11.8798 2.21391 8.85434 5.56847 8.55276C5.61231 8.54882 5.65609 8.54536 5.69979 8.54238C6.54767 6.79435 8.1829 5.47857 10.2111 5.15009C10.336 5.12986 10.4606 5.11367 10.5847 5.10141C11.4747 3.53861 13.019 2.38264 14.902 2.07767C18.228 1.539 21.3514 3.85942 21.8782 7.26049ZM10.0076 6.46654C9.75718 7.32988 9.68656 8.26248 9.83351 9.21121C10.2611 11.9717 12.3992 14.0203 14.9679 14.406C14.2368 15.3539 13.171 16.0298 11.9275 16.2312C9.30744 16.6555 6.80151 14.8275 6.37653 12.0838C5.97325 9.48014 7.6014 7.06855 10.0076 6.46654ZM1.26832 15.1983C1.04593 12.5863 2.8141 10.3076 5.23293 9.85889C5.05226 10.6308 5.01364 11.451 5.14261 12.2836C5.56449 15.0073 7.65165 17.038 10.1746 17.4621C9.38693 18.7171 8.06282 19.5915 6.52012 19.7302C3.87878 19.9676 1.50404 17.9669 1.26832 15.1983Z",
					fill: "#6f6e84"
				})),
				l = o.createElement("defs", null, o.createElement("clipPath", {
					id: "account_clip"
				}, o.createElement("rect", {
					width: 22,
					height: 22,
					fill: "white"
				})));

			function SvgAccount(t, r) {
				return o.createElement("svg", _extends({
					width: 22,
					height: 22,
					viewBox: "0 0 22 22",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), c, l)
			}
			var E = o.forwardRef(SvgAccount);
			a.p;

			function arrow_down_extends() {
				return (arrow_down_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var u = o.createElement("g", {
					clipPath: "url(#arrow_down_clip)"
				}, o.createElement("path", {
					d: "M5.03529 1.125L5.03527 9.65395M5.03527 9.65395L2.27707 6.79775M5.03527 9.65395L7.81251 6.79774",
					stroke: "#f7f7f7",
					strokeWidth: 1.25,
					strokeLinecap: "round"
				})),
				d = o.createElement("defs", null, o.createElement("clipPath", {
					id: "arrow_down_clip"
				}, o.createElement("rect", {
					width: 10,
					height: 10,
					fill: "white",
					transform: "translate(0 0.5)"
				})));

			function SvgArrowDown(t, r) {
				return o.createElement("svg", arrow_down_extends({
					width: 10,
					height: 11,
					viewBox: "0 0 10 11",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), u, d)
			}
			var _ = o.forwardRef(SvgArrowDown);
			a.p;

			function bar_chart_extends() {
				return (bar_chart_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var O = o.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M2.75 9C3.16421 9 3.5 9.33579 3.5 9.75V14.25C3.5 14.6642 3.16421 15 2.75 15V15C2.33579 15 2 14.6642 2 14.25L2 9.75C2 9.33579 2.33579 9 2.75 9V9Z",
					fill: "#6B6A80"
				}),
				T = o.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M6.25 7C6.66421 7 7 7.33579 7 7.75V14.25C7 14.6642 6.66421 15 6.25 15V15C5.83579 15 5.5 14.6642 5.5 14.25V7.75C5.5 7.33579 5.83579 7 6.25 7V7Z",
					fill: "#6B6A80"
				}),
				I = o.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M9.75 5C10.1642 5 10.5 5.33579 10.5 5.75V14.25C10.5 14.6642 10.1642 15 9.75 15V15C9.33579 15 9 14.6642 9 14.25V5.75C9 5.33579 9.33579 5 9.75 5V5Z",
					fill: "#6B6A80"
				}),
				S = o.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M13.25 2C13.6642 2 14 2.33579 14 2.75V14.25C14 14.6642 13.6642 15 13.25 15V15C12.8358 15 12.5 14.6642 12.5 14.25V2.75C12.5 2.33579 12.8358 2 13.25 2V2Z",
					fill: "#6B6A80"
				});

			function SvgBarChart(t, r) {
				return o.createElement("svg", bar_chart_extends({
					width: 16,
					height: 16,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), O, T, I, S)
			}
			var p = o.forwardRef(SvgBarChart);
			a.p;
			a.p;

			function calculator_extends() {
				return (calculator_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var R = o.createElement("path", {
				d: "M11.4864 1H4.51364C4.1122 1 3.7272 1.16372 3.44333 1.45516C3.15947 1.74659 3 2.14185 3 2.554V13.446C3 13.8581 3.15947 14.2534 3.44333 14.5448C3.7272 14.8363 4.1122 15 4.51364 15H11.4864C11.8878 15 12.2728 14.8363 12.5567 14.5448C12.8405 14.2534 13 13.8581 13 13.446V2.554C13 2.14185 12.8405 1.74659 12.5567 1.45516C12.2728 1.16372 11.8878 1 11.4864 1V1ZM4.36364 2.86667C4.36364 2.7429 4.41153 2.6242 4.49677 2.53668C4.58201 2.44917 4.69763 2.4 4.81818 2.4H11.1818C11.3024 2.4 11.418 2.44917 11.5032 2.53668C11.5885 2.6242 11.6364 2.7429 11.6364 2.86667V4.73333C11.6364 4.8571 11.5885 4.9758 11.5032 5.06332C11.418 5.15083 11.3024 5.2 11.1818 5.2H4.81818C4.69763 5.2 4.58201 5.15083 4.49677 5.06332C4.41153 4.9758 4.36364 4.8571 4.36364 4.73333V2.86667ZM6.18182 13.5533C6.18182 13.5954 6.17368 13.6371 6.15786 13.6759C6.14205 13.7147 6.11887 13.7499 6.08969 13.7794C6.0605 13.8089 6.02589 13.8322 5.98786 13.8479C5.94984 13.8635 5.90915 13.8713 5.86818 13.8707H4.69545C4.65299 13.8739 4.61034 13.8681 4.57018 13.8536C4.53002 13.8391 4.4932 13.8162 4.46205 13.7864C4.43089 13.7566 4.40607 13.7205 4.38914 13.6804C4.3722 13.6403 4.36352 13.597 4.36364 13.5533V12.326C4.36364 12.2406 4.39668 12.1587 4.4555 12.0983C4.51432 12.0379 4.59409 12.004 4.67727 12.004H5.86818C5.95136 12.004 6.03114 12.0379 6.08996 12.0983C6.14877 12.1587 6.18182 12.2406 6.18182 12.326V13.5533ZM6.18182 10.7533C6.18182 10.7954 6.17368 10.8371 6.15786 10.8759C6.14205 10.9147 6.11887 10.9499 6.08969 10.9794C6.0605 11.0089 6.02589 11.0322 5.98786 11.0479C5.94984 11.0635 5.90915 11.0713 5.86818 11.0707H4.69545C4.65299 11.0739 4.61034 11.0681 4.57018 11.0536C4.53002 11.0391 4.4932 11.0162 4.46205 10.9864C4.43089 10.9566 4.40607 10.9205 4.38914 10.8804C4.3722 10.8403 4.36352 10.797 4.36364 10.7533V9.526C4.36364 9.48371 4.37175 9.44184 4.38751 9.40278C4.40327 9.36371 4.42637 9.32821 4.4555 9.29831C4.48462 9.26841 4.5192 9.24469 4.55725 9.22851C4.5953 9.21233 4.63609 9.204 4.67727 9.204H5.86818C5.95136 9.204 6.03114 9.23793 6.08996 9.29831C6.14877 9.3587 6.18182 9.4406 6.18182 9.526V10.7533ZM6.18182 7.95333C6.18182 7.9954 6.17368 8.03705 6.15786 8.07586C6.14205 8.11467 6.11887 8.14986 6.08969 8.17939C6.0605 8.20892 6.02589 8.23219 5.98786 8.24786C5.94984 8.26353 5.90915 8.27129 5.86818 8.27067H4.69545C4.65299 8.27388 4.61034 8.26805 4.57018 8.25355C4.53002 8.23905 4.4932 8.21619 4.46205 8.18639C4.43089 8.1566 4.40607 8.12052 4.38914 8.08041C4.3722 8.04031 4.36352 7.99704 4.36364 7.95333V6.726C4.36364 6.68371 4.37175 6.64184 4.38751 6.60278C4.40327 6.56371 4.42637 6.52821 4.4555 6.49831C4.48462 6.46841 4.5192 6.44469 4.55725 6.42851C4.5953 6.41233 4.63609 6.404 4.67727 6.404H5.86818C5.95136 6.404 6.03114 6.43793 6.08996 6.49831C6.14877 6.5587 6.18182 6.6406 6.18182 6.726V7.95333ZM8.90909 13.5533C8.9091 13.5954 8.90095 13.6371 8.88514 13.6759C8.86932 13.7147 8.84614 13.7499 8.81696 13.7794C8.78777 13.8089 8.75316 13.8322 8.71514 13.8479C8.67711 13.8635 8.63643 13.8713 8.59545 13.8707H7.42273C7.38027 13.8739 7.33762 13.8681 7.29745 13.8536C7.25729 13.8391 7.22048 13.8162 7.18932 13.7864C7.15817 13.7566 7.13335 13.7205 7.11641 13.6804C7.09948 13.6403 7.09079 13.597 7.09091 13.5533V12.326C7.09091 12.2406 7.12395 12.1587 7.18277 12.0983C7.24159 12.0379 7.32136 12.004 7.40455 12.004H8.59545C8.67864 12.004 8.75841 12.0379 8.81723 12.0983C8.87605 12.1587 8.90909 12.2406 8.90909 12.326V13.5533ZM8.90909 10.7533C8.9091 10.7954 8.90095 10.8371 8.88514 10.8759C8.86932 10.9147 8.84614 10.9499 8.81696 10.9794C8.78777 11.0089 8.75316 11.0322 8.71514 11.0479C8.67711 11.0635 8.63643 11.0713 8.59545 11.0707H7.42273C7.38027 11.0739 7.33762 11.0681 7.29745 11.0536C7.25729 11.0391 7.22048 11.0162 7.18932 10.9864C7.15817 10.9566 7.13335 10.9205 7.11641 10.8804C7.09948 10.8403 7.09079 10.797 7.09091 10.7533V9.526C7.09091 9.4406 7.12395 9.3587 7.18277 9.29831C7.24159 9.23793 7.32136 9.204 7.40455 9.204H8.59545C8.67864 9.204 8.75841 9.23793 8.81723 9.29831C8.87605 9.3587 8.90909 9.4406 8.90909 9.526V10.7533ZM8.90909 7.95333C8.9091 7.9954 8.90095 8.03705 8.88514 8.07586C8.86932 8.11467 8.84614 8.14986 8.81696 8.17939C8.78777 8.20892 8.75316 8.23219 8.71514 8.24786C8.67711 8.26353 8.63643 8.27129 8.59545 8.27067H7.42273C7.38027 8.27388 7.33762 8.26805 7.29745 8.25355C7.25729 8.23905 7.22048 8.21619 7.18932 8.18639C7.15817 8.1566 7.13335 8.12052 7.11641 8.08041C7.09948 8.04031 7.09079 7.99704 7.09091 7.95333V6.726C7.09091 6.6406 7.12395 6.5587 7.18277 6.49831C7.24159 6.43793 7.32136 6.404 7.40455 6.404H8.59545C8.67864 6.404 8.75841 6.43793 8.81723 6.49831C8.87605 6.5587 8.90909 6.6406 8.90909 6.726V7.95333ZM11.6364 13.5533C11.6364 13.5954 11.6282 13.6371 11.6124 13.6759C11.5966 13.7147 11.5734 13.7499 11.5442 13.7794C11.515 13.8089 11.4804 13.8322 11.4424 13.8479C11.4044 13.8635 11.3637 13.8713 11.3227 13.8707H10.15C10.1075 13.8739 10.0649 13.8681 10.0247 13.8536C9.98456 13.8391 9.94775 13.8162 9.91659 13.7864C9.88544 13.7566 9.86062 13.7205 9.84368 13.6804C9.82675 13.6403 9.81807 13.597 9.81818 13.5533V9.68467C9.81818 9.5609 9.86607 9.4422 9.95131 9.35468C10.0366 9.26717 10.1522 9.218 10.2727 9.218H11.1818C11.3024 9.218 11.418 9.26717 11.5032 9.35468C11.5885 9.4422 11.6364 9.5609 11.6364 9.68467V13.5533ZM11.6364 7.95333C11.6364 7.9954 11.6282 8.03705 11.6124 8.07586C11.5966 8.11467 11.5734 8.14986 11.5442 8.17939C11.515 8.20892 11.4804 8.23219 11.4424 8.24786C11.4044 8.26353 11.3637 8.27129 11.3227 8.27067H10.15C10.1075 8.27388 10.0649 8.26805 10.0247 8.25355C9.98456 8.23905 9.94775 8.21619 9.91659 8.18639C9.88544 8.1566 9.86062 8.12052 9.84368 8.08041C9.82675 8.04031 9.81807 7.99704 9.81818 7.95333V6.726C9.81818 6.6406 9.85123 6.5587 9.91004 6.49831C9.96886 6.43793 10.0486 6.404 10.1318 6.404H11.3227C11.4059 6.404 11.4857 6.43793 11.5445 6.49831C11.6033 6.5587 11.6364 6.6406 11.6364 6.726V7.95333Z",
				fill: "#6f6e84"
			});

			function SvgCalculator(t, r) {
				return o.createElement("svg", calculator_extends({
					width: 16,
					height: 16,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), R)
			}
			var A = o.forwardRef(SvgCalculator);
			a.p;

			function caret_extends() {
				return (caret_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var b = o.createElement("path", {
				d: "M2 8L10.2222 2L18 8",
				stroke: "#6f6e84",
				strokeWidth: 2.25,
				strokeLinecap: "round"
			});

			function SvgCaret(t, r) {
				return o.createElement("svg", caret_extends({
					width: 20,
					height: 10,
					viewBox: "0 0 20 10",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), b)
			}
			var N = o.forwardRef(SvgCaret);
			a.p;

			function caret_down_extends() {
				return (caret_down_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var C = o.createElement("path", {
				d: "M18 2L9.7778 8L2 2",
				stroke: "#6F6E84",
				strokeWidth: 2.25,
				strokeLinecap: "round"
			});

			function SvgCaretDown(t, r) {
				return o.createElement("svg", caret_down_extends({
					width: 20,
					height: 10,
					viewBox: "0 0 20 10",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), C)
			}
			var y = o.forwardRef(SvgCaretDown);
			a.p;

			function check_extends() {
				return (check_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var D = o.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M15.636 0.421631C15.8691 0.691682 16 1.0579 16 1.43975C16 1.82161 15.8691 2.18783 15.636 2.45788L7.0805 15.5784C6.84734 15.8483 6.53114 16 6.20145 16C5.87176 16 5.55557 15.8483 5.32241 15.5784L0.349022 9.81812C0.122536 9.54653 -0.00278586 9.18276 4.70018e-05 8.80518C0.00287987 8.4276 0.133641 8.06642 0.364168 7.79942C0.594694 7.53242 0.906541 7.38097 1.23254 7.37769C1.55854 7.37441 1.87262 7.51956 2.10711 7.78188L6.20145 12.524L13.8779 0.421631C14.111 0.151661 14.4272 0 14.7569 0C15.0866 0 15.4028 0.151661 15.636 0.421631Z",
				fill: "#6B6A80"
			});

			function SvgCheck(t, r) {
				return o.createElement("svg", check_extends({
					width: 16,
					height: 16,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), D)
			}
			var m = o.forwardRef(SvgCheck);
			a.p;

			function clock_extends() {
				return (clock_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var h = o.createElement("circle", {
					cx: 10,
					cy: 10,
					r: 8.125,
					stroke: "#6f6e84",
					strokeWidth: 1.25
				}),
				L = o.createElement("path", {
					d: "M10 6V10.375H14.375",
					stroke: "#6f6e84",
					strokeWidth: 1.25,
					strokeLinecap: "round"
				});

			function SvgClock(t, r) {
				return o.createElement("svg", clock_extends({
					width: 20,
					height: 20,
					viewBox: "0 0 20 20",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), h, L)
			}
			var g = o.forwardRef(SvgClock);
			a.p;

			function close_extends() {
				return (close_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var P = o.createElement("path", {
				d: "M1 1L11 11M1 11L11 1L1 11Z",
				stroke: "#807E98",
				strokeWidth: 1.5,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			});

			function SvgClose(t, r) {
				return o.createElement("svg", close_extends({
					width: 12,
					height: 12,
					viewBox: "0 0 12 12",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), P)
			}
			var v = o.forwardRef(SvgClose);
			a.p;

			function contained_x_extends() {
				return (contained_x_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var w = o.createElement("path", {
				d: "M5.66667 10.3333L8 8M8 8L10.3333 5.66667M8 8L5.66667 5.66667M8 8L10.3333 10.3333M15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z",
				stroke: "#E45555",
				strokeWidth: 1.25,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			});

			function SvgContainedX(t, r) {
				return o.createElement("svg", contained_x_extends({
					width: 16,
					height: 16,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), w)
			}
			var M = o.forwardRef(SvgContainedX);
			a.p;

			function cube_extends() {
				return (cube_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var U = o.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M8.34483 1.51706C8.54422 1.4235 8.76177 1.375 8.98202 1.375H21.25C21.6642 1.375 22 1.71079 22 2.125V15.7938C22 16.2044 21.7983 16.5889 21.4604 16.8223L16.2757 20.4035C16.0669 20.5477 15.8191 20.625 15.5653 20.625H1.25C0.559644 20.625 0 20.0654 0 19.375V6.22698C0 5.74228 0.280211 5.30127 0.719008 5.09537L8.34483 1.51706ZM8.96545 2.85577L4.63209 5.18269H15.4382L18.8502 2.85577H8.96545ZM20.4356 3.5864L16.4788 6.29572V18.5625L20.4356 15.7043V3.5864ZM14.9144 19.1442V6.66346H1.56444V19.1442H14.9144Z",
				fill: "#6f6e84"
			});

			function SvgCube(t, r) {
				return o.createElement("svg", cube_extends({
					width: 22,
					height: 22,
					viewBox: "0 0 22 22",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), U)
			}
			var G = o.forwardRef(SvgCube);
			a.p;

			function cube_v2_extends() {
				return (cube_v2_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var j = o.createElement("path", {
				d: "M5.96154 0.00145211C5.91005 0.00552709 5.85967 0.0176015 5.81249 0.0371717L0.274033 2.32322C0.192259 2.357 0.122819 2.41212 0.0741669 2.48188C0.0255144 2.55164 -0.000252747 2.63302 1.86888e-06 2.71614V9.28854C0.000672711 9.37089 0.0268735 9.45132 0.0754704 9.52021C0.124067 9.5891 0.193003 9.64353 0.274033 9.67699L5.81249 11.963C5.87152 11.9874 5.9354 12 6 12C6.0646 12 6.12848 11.9874 6.18751 11.963L11.726 9.67699C11.807 9.64353 11.8759 9.5891 11.9245 9.52021C11.9731 9.45132 11.9993 9.37089 12 9.28854V2.71614C12.0003 2.63302 11.9745 2.55164 11.9258 2.48188C11.8772 2.41212 11.8077 2.357 11.726 2.32322L6.18751 0.0371717C6.11662 0.00780917 6.0389 -0.00447615 5.96154 0.00145211ZM6 0.894441L10.4038 2.71614L6 4.53338L1.59616 2.71614L6 0.894441ZM0.923079 3.37249L5.53846 5.27902V10.9138L0.923079 9.00724V3.37249ZM11.0769 3.37249V9.00724L6.46154 10.9138V5.27902L11.0769 3.37249Z",
				fill: "#6f6e84"
			});

			function SvgCubeV2(t, r) {
				return o.createElement("svg", cube_v2_extends({
					width: 18,
					height: 18,
					viewBox: "-2 -2 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), j)
			}
			var k = o.forwardRef(SvgCubeV2);
			a.p;

			function discord_extends() {
				return (discord_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var x = o.createElement("path", {
				d: "M17.5927 0C18.891 0 19.9381 1.08962 20 2.37187V23L17.528 20.8217L16.1706 19.5395L14.6895 18.1997L15.3082 20.3128H2.34545C1.05083 20.3128 0 19.2922 0 17.94V2.37667C0 1.09442 1.05268 0.002875 2.35006 0.002875H17.5862L17.5927 0ZM11.9433 5.44621H11.9156L11.7291 5.63787C13.6433 6.21287 14.5695 7.11083 14.5695 7.11083C13.3358 6.47067 12.224 6.15058 11.1122 6.02121C10.3089 5.89183 9.50552 5.95987 8.82682 6.02121H8.64213C8.20813 6.02121 7.28473 6.21287 6.04737 6.72558C5.61614 6.92013 5.36867 7.04758 5.36867 7.04758C5.36867 7.04758 6.29392 6.08733 8.33279 5.57463L8.20813 5.44525C8.20813 5.44525 6.6642 5.38392 4.99746 6.66233C4.99746 6.66233 3.33072 9.67533 3.33072 13.3898C3.33072 13.3898 4.25412 15.0573 6.78702 15.1206C6.78702 15.1206 7.15638 14.6098 7.53036 14.1603C6.10831 13.7118 5.55427 12.8148 5.55427 12.8148C5.55427 12.8148 5.67801 12.8781 5.86361 13.0065H5.91902C5.94672 13.0065 5.95965 13.0209 5.97442 13.0352V13.041C5.9892 13.0563 6.00212 13.0697 6.02983 13.0697C6.33455 13.2001 6.63927 13.3285 6.88859 13.4531C7.3189 13.6467 7.87202 13.8393 8.55072 13.9668C9.40948 14.0961 10.3938 14.1584 11.5148 13.9668C12.0689 13.8374 12.6229 13.7109 13.177 13.454C13.5371 13.2624 13.9803 13.0707 14.467 12.7477C14.467 12.7477 13.9129 13.6447 12.4309 14.0933C12.7356 14.5398 13.165 15.0516 13.165 15.0516C15.6988 14.9941 16.6831 13.3266 16.7385 13.3975C16.7385 9.68875 15.0626 6.67 15.0626 6.67C13.5528 5.50658 12.14 5.4625 11.8907 5.4625L11.9424 5.44333L11.9433 5.44621ZM12.0984 9.67533C12.7476 9.67533 13.2712 10.2503 13.2712 10.9547C13.2712 11.6639 12.7448 12.2389 12.0984 12.2389C11.4521 12.2389 10.9257 11.6639 10.9257 10.9605C10.9276 10.2513 11.4548 9.67821 12.0984 9.67821V9.67533ZM7.90341 9.67533C8.54979 9.67533 9.07244 10.2503 9.07244 10.9547C9.07244 11.6639 8.5461 12.2389 7.89972 12.2389C7.25334 12.2389 6.727 11.6639 6.727 10.9605C6.727 10.2513 7.25334 9.67821 7.89972 9.67821L7.90341 9.67533Z",
				fill: "#807E98"
			});

			function SvgDiscord(t, r) {
				return o.createElement("svg", discord_extends({
					width: 20,
					height: 23,
					viewBox: "0 0 20 23",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), x)
			}
			var H = o.forwardRef(SvgDiscord);
			a.p;

			function email_extends() {
				return (email_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var B = o.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M2 4.66667C2 3.74619 2.76751 3 3.71429 3H12.2857C13.2325 3 14 3.74619 14 4.66667V11.3333C14 12.2538 13.2325 13 12.2857 13H3.71429C2.76751 13 2 12.2538 2 11.3333V4.66667ZM3.71429 3.83333H12.2857C12.3625 3.83333 12.4369 3.84315 12.5077 3.86156L8.30305 7.94945C8.13568 8.11217 7.86432 8.11217 7.69695 7.94945L3.49227 3.86156C3.56308 3.84315 3.6375 3.83333 3.71429 3.83333ZM2.88618 4.45082C2.86724 4.51966 2.85714 4.59202 2.85714 4.66667V11.3333C2.85714 11.7936 3.2409 12.1667 3.71429 12.1667H12.2857C12.7591 12.1667 13.1429 11.7936 13.1429 11.3333V4.66667C13.1429 4.59202 13.1328 4.51966 13.1138 4.45082L8.90914 8.53871C8.40703 9.02686 7.59297 9.02686 7.09086 8.53871L2.88618 4.45082Z",
				fill: "#6B6A80"
			});

			function SvgEmail(t, r) {
				return o.createElement("svg", email_extends({
					width: 16,
					height: 16,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), B)
			}
			var W = o.forwardRef(SvgEmail);
			a.p;

			function error_triangle_extends() {
				return (error_triangle_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Y = o.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M9.62673 1.75862C10.8878 -0.586207 14.1138 -0.586207 15.3732 1.75862L24.5716 18.8621C25.808 21.1621 24.2205 24 21.7 24H3.30162C0.779482 24 -0.80798 21.1621 0.428361 18.8621L9.62673 1.75862ZM14.1484 18.8293C14.1484 19.2866 13.9748 19.7251 13.6656 20.0485C13.3565 20.3718 12.9372 20.5534 12.5 20.5534C12.0628 20.5534 11.6435 20.3718 11.3344 20.0485C11.0252 19.7251 10.8515 19.2866 10.8515 18.8293C10.8515 18.372 11.0252 17.9335 11.3344 17.6102C11.6435 17.2868 12.0628 17.1052 12.5 17.1052C12.9372 17.1052 13.3565 17.2868 13.6656 17.6102C13.9748 17.9335 14.1484 18.372 14.1484 18.8293ZM12.5 5.03621C12.0628 5.03621 11.6435 5.21786 11.3344 5.5412C11.0252 5.86453 10.8515 6.30307 10.8515 6.76034V11.9328C10.8515 12.39 11.0252 12.8286 11.3344 13.1519C11.6435 13.4752 12.0628 13.6569 12.5 13.6569C12.9372 13.6569 13.3565 13.4752 13.6656 13.1519C13.9748 12.8286 14.1484 12.39 14.1484 11.9328V6.76034C14.1484 6.30307 13.9748 5.86453 13.6656 5.5412C13.3565 5.21786 12.9372 5.03621 12.5 5.03621Z",
				fill: "#E45555"
			});

			function SvgErrorTriangle(t, r) {
				return o.createElement("svg", error_triangle_extends({
					width: 25,
					height: 24,
					viewBox: "0 0 25 24",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Y)
			}
			var K = o.forwardRef(SvgErrorTriangle);
			a.p;
			a.p;

			function gear_extends() {
				return (gear_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var V = o.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M2.98083 12.9826C2.41272 13.2911 1.68993 13.0863 1.36776 12.5275L0.759291 11.4721C0.436526 10.9122 0.620013 10.1856 1.1752 9.84545L1.55868 9.61048C1.7994 9.46299 1.99441 9.11427 1.99426 8.83155L1.99336 7.16756C1.99321 6.88486 1.79835 6.53637 1.55722 6.38862L1.17373 6.15365C0.621247 5.81513 0.435901 5.08599 0.758416 4.52738L1.36754 3.47235C1.69065 2.91271 2.41137 2.70816 2.98358 3.01889L3.37882 3.23351C3.62692 3.36824 4.02656 3.36298 4.27147 3.22176L5.71299 2.39053C5.95788 2.24932 6.16238 1.90653 6.16977 1.62385L6.18152 1.17426C6.19844 0.526553 6.73722 0.00115865 7.38226 0.000757669L8.60051 2.31805e-07C9.24674 -0.000401478 9.78426 0.521358 9.80119 1.1694L9.81302 1.62228C9.8204 1.90461 10.0249 2.24808 10.2698 2.38946L11.7111 3.22163C11.956 3.363 12.3553 3.36858 12.6039 3.23358L13.002 3.01739C13.5701 2.70889 14.2929 2.91369 14.6151 3.47251L15.2235 4.52792C15.5463 5.08777 15.3628 5.81437 14.8076 6.15455L14.4241 6.38952C14.1834 6.53701 13.9884 6.88573 13.9886 7.16845L13.9895 8.83244C13.9896 9.11514 14.1845 9.46364 14.4256 9.61138L14.8091 9.84636C15.3616 10.1849 15.5469 10.914 15.2244 11.4726L14.6153 12.5277C14.2922 13.0873 13.5715 13.2918 12.9992 12.9811L12.604 12.7665C12.3559 12.6318 11.9563 12.637 11.7114 12.7782L10.2698 13.6095C10.0249 13.7507 9.82045 14.0935 9.81306 14.3762L9.80132 14.8257C9.78439 15.4734 9.24561 15.9988 8.60057 15.9992L7.38232 16C6.73609 16.0004 6.19858 15.4786 6.18164 14.8306L6.16981 14.3777C6.16243 14.0954 5.95796 13.7519 5.71307 13.6105L4.27172 12.7784C4.02685 12.637 3.62756 12.6314 3.37895 12.7664L2.98083 12.9826ZM6.23556 11.0412C7.91519 12.011 10.0629 11.4355 11.0326 9.75585C12.0024 8.07623 11.4269 5.92851 9.74727 4.95878C8.06765 3.98905 5.91992 4.56453 4.95019 6.24415C3.98046 7.92377 4.55594 10.0715 6.23556 11.0412Z",
				fill: "#6f6e84"
			});

			function SvgGear(t, r) {
				return o.createElement("svg", gear_extends({
					width: 16,
					height: 16,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), V)
			}
			var Z = o.forwardRef(SvgGear);
			a.p;
			a.p;

			function globe_extends() {
				return (globe_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var z = o.createElement("path", {
				d: "M45 0C36.0998 0 27.3995 2.6392 19.9993 7.58387C12.5991 12.5285 6.83135 19.5566 3.42541 27.7792C0.0194674 36.0019 -0.871683 45.0499 0.864652 53.7791C2.60099 62.5082 6.88682 70.5264 13.1802 76.8198C19.4735 83.1132 27.4918 87.399 36.2209 89.1353C44.9501 90.8717 53.9981 89.9805 62.2207 86.5746C70.4434 83.1686 77.4715 77.4009 82.4161 70.0007C87.3608 62.6005 90 53.9002 90 45C90 33.0653 85.2589 21.6193 76.8198 13.1802C68.3807 4.74106 56.9347 0 45 0ZM55.11 82.66C58.45 77.34 61.04 69.45 62.41 60.14H80.94C78.6239 65.6065 75.0948 70.4747 70.6199 74.3763C66.1449 78.2778 60.8412 81.1105 55.11 82.66ZM27.59 60.14C28.96 69.45 31.59 77.34 34.89 82.66C29.1588 81.1105 23.8551 78.2778 19.3801 74.3763C14.9051 70.4747 11.3761 65.6065 9.05999 60.14H27.59ZM34.94 7.34C31.94 12.14 29.52 19.03 28.08 27.17H10.33C12.8237 22.3414 16.2951 18.0847 20.5234 14.6707C24.7517 11.2568 29.6443 8.76023 34.89 7.34H34.94ZM79.67 27.17H62C60.56 19.03 58.15 12.17 55.14 7.34C60.3802 8.76395 65.2669 11.2622 69.4899 14.676C73.7128 18.0898 77.1796 22.3445 79.67 27.17ZM45 84C43.25 84 40.15 81 37.48 74.54C35.6651 69.9017 34.3901 65.0699 33.68 60.14H56.32C55.6099 65.0699 54.3349 69.9017 52.52 74.54C49.85 81 46.75 84 45 84ZM45 6C46.75 6 49.85 9 52.52 15.46C54.0183 19.2431 55.1372 23.1657 55.86 27.17H34.14C34.8628 23.1657 35.9816 19.2431 37.48 15.46C40.15 9 43.25 6 45 6ZM32.52 45C32.5174 41.0462 32.7511 37.0959 33.22 33.17H56.78C57.2488 37.0959 57.4826 41.0462 57.48 45C57.48 48.09 57.33 51.16 57.06 54.14H32.94C32.67 51.16 32.52 48.09 32.52 45ZM26.9 54.14H7.08999C5.40931 47.2037 5.66877 39.9387 7.83999 33.14H27.17C26.7339 37.0782 26.5169 41.0377 26.52 45C26.52 48.13 26.65 51.19 26.9 54.14ZM62.83 33.14H82.16C84.3312 39.9387 84.5907 47.2037 82.91 54.14H63.1C63.35 51.14 63.48 48.14 63.48 45C63.482 41.0477 63.265 37.0983 62.83 33.17V33.14Z"
			});

			function SvgGlobe(t, r) {
				return o.createElement("svg", globe_extends({
					width: 90,
					height: 90,
					viewBox: "0 0 90 90",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), z)
			}
			var X = o.forwardRef(SvgGlobe);
			a.p;

			function hamburger_menu_extends() {
				return (hamburger_menu_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var q = o.createElement("path", {
				d: "M1.5 1H20.5M1.5 8H20.5M1.5 15H20.5",
				stroke: "#c3c2d4",
				strokeWidth: 2,
				strokeLinecap: "round"
			});

			function SvgHamburgerMenu(t, r) {
				return o.createElement("svg", hamburger_menu_extends({
					width: 22,
					height: 16,
					viewBox: "0 0 22 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), q)
			}
			var $ = o.forwardRef(SvgHamburgerMenu);
			a.p;

			function hide_extends() {
				return (hide_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Q = o.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M2.966.834a.8.8 0 0 0-1.132 1.132l11.2 11.2a.8.8 0 0 0 1.132-1.132l-1.179-1.178A8.01 8.01 0 0 0 15.634 7 8.003 8.003 0 0 0 4.39 2.26L2.966.833Zm3.408 3.408 1.212 1.212a1.602 1.602 0 0 1 1.96 1.96l1.21 1.212a3.2 3.2 0 0 0-4.382-4.383Z",
					fill: "#C8C7D8"
				}),
				J = o.createElement("path", {
					d: "M9.963 12.358 7.8 10.194A3.2 3.2 0 0 1 4.806 7.2L1.868 4.262A7.984 7.984 0 0 0 .366 7a8.004 8.004 0 0 0 9.597 5.358Z",
					fill: "#C8C7D8"
				});

			function SvgHide(t, r) {
				return o.createElement("svg", hide_extends({
					width: 16,
					height: 14,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Q, J)
			}
			var ee = o.forwardRef(SvgHide);
			a.p;

			function history_extends() {
				return (history_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var te = o.createElement("path", {
				d: "M9.59875 0C6.28404 0 3.43488 2.02017 2.26446 4.89432L1.79799 4.06903C1.7381 3.95612 1.648 3.8621 1.53774 3.79746C1.42748 3.73283 1.30141 3.70013 1.17364 3.70303C1.05402 3.7057 0.937156 3.73947 0.834553 3.80102C0.73195 3.86258 0.647145 3.94979 0.588485 4.05408C0.529826 4.15836 0.499334 4.27612 0.500011 4.39577C0.500688 4.51542 0.532512 4.63283 0.592349 4.73644L1.8554 6.99703C1.9432 7.15279 2.08811 7.26831 2.25952 7.31919C2.43093 7.37008 2.61541 7.35235 2.77398 7.26973L5.0202 6.12149C5.1046 6.0828 5.18032 6.02744 5.24279 5.95876C5.30526 5.89007 5.35321 5.80946 5.38375 5.72178C5.41429 5.6341 5.42679 5.54115 5.42051 5.44852C5.41422 5.35588 5.38928 5.26548 5.34718 5.18272C5.30507 5.09997 5.24668 5.02657 5.1755 4.96695C5.10432 4.90733 5.02183 4.86272 4.93298 4.83579C4.84412 4.80885 4.75074 4.80015 4.65844 4.81021C4.56614 4.82027 4.47682 4.84888 4.39585 4.89432L3.57056 5.31773C4.55743 3.0089 6.8827 1.37787 9.59875 1.37787C13.2158 1.37787 16.1221 4.25355 16.1221 7.80795C16.1221 11.3623 13.2158 14.238 9.59875 14.238C6.50452 14.238 3.92708 12.1146 3.24763 9.28629C3.2048 9.10833 3.09303 8.95468 2.93691 8.85913C2.7808 8.76357 2.59311 8.73395 2.41515 8.77678C2.2372 8.8196 2.08354 8.93136 1.98798 9.08748C1.89243 9.2436 1.86281 9.43128 1.90563 9.60924C2.73337 13.0548 5.87427 15.6159 9.59875 15.6159C13.9506 15.6159 17.5 12.117 17.5 7.80795C17.5 3.49891 13.9506 0 9.59875 0ZM9.68487 3.43033C9.59378 3.43127 9.50379 3.45026 9.42009 3.4862C9.33639 3.52214 9.26066 3.57433 9.19726 3.63974C9.13385 3.70514 9.08405 3.78246 9.05073 3.86724C9.01741 3.95201 9.00122 4.04255 9.00312 4.13362V7.80795C9.00306 7.9113 9.02624 8.01334 9.07096 8.10651C9.11569 8.19968 9.18079 8.2816 9.26147 8.34619L11.5579 10.1834C11.6286 10.2399 11.7097 10.282 11.7967 10.3072C11.8836 10.3324 11.9747 10.3402 12.0646 10.3302C12.1546 10.3202 12.2417 10.2926 12.321 10.249C12.4003 10.2053 12.4702 10.1464 12.5268 10.0758C12.5833 10.0051 12.6254 9.92393 12.6506 9.83698C12.6758 9.75004 12.6836 9.65899 12.6736 9.56902C12.6636 9.47905 12.636 9.39193 12.5923 9.31264C12.5486 9.23335 12.4898 9.16344 12.4191 9.10689L10.381 7.47783V4.13362C10.3829 4.04134 10.3663 3.94961 10.3321 3.86389C10.2978 3.77816 10.2468 3.70019 10.1818 3.63459C10.1169 3.56899 10.0394 3.51711 9.95407 3.48202C9.86871 3.44693 9.77716 3.42936 9.68487 3.43033Z",
				fill: "#706d79"
			});

			function SvgHistory(t, r) {
				return o.createElement("svg", history_extends({
					width: 18,
					height: 16,
					viewBox: "0 0 18 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), te)
			}
			var re = o.forwardRef(SvgHistory);
			a.p;

			function info_circle_extends() {
				return (info_circle_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var ne = o.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M18 10C18 12.1217 17.1571 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18C7.87827 18 5.84344 17.1571 4.34315 15.6569C2.84285 14.1566 2 12.1217 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10ZM11 6C11 6.26522 10.8946 6.51957 10.7071 6.70711C10.5196 6.89464 10.2652 7 10 7C9.73478 7 9.48043 6.89464 9.29289 6.70711C9.10536 6.51957 9 6.26522 9 6C9 5.73478 9.10536 5.48043 9.29289 5.29289C9.48043 5.10536 9.73478 5 10 5C10.2652 5 10.5196 5.10536 10.7071 5.29289C10.8946 5.48043 11 5.73478 11 6ZM9 9C8.73478 9 8.48043 9.10536 8.29289 9.29289C8.10536 9.48043 8 9.73478 8 10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11V14C9 14.2652 9.10536 14.5196 9.29289 14.7071C9.48043 14.8946 9.73478 15 10 15H11C11.2652 15 11.5196 14.8946 11.7071 14.7071C11.8946 14.5196 12 14.2652 12 14C12 13.7348 11.8946 13.4804 11.7071 13.2929C11.5196 13.1054 11.2652 13 11 13V10C11 9.73478 10.8946 9.48043 10.7071 9.29289C10.5196 9.10536 10.2652 9 10 9H9Z",
				fill: "#807E98"
			});

			function SvgInfoCircle(t, r) {
				return o.createElement("svg", info_circle_extends({
					width: 20,
					height: 20,
					viewBox: "0 0 20 20",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), ne)
			}
			var ae = o.forwardRef(SvgInfoCircle);
			a.p;

			function info_extends() {
				return (info_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var oe = o.createElement("path", {
				d: "M5.75723 1.51406C5.75723 1.86113 5.6325 2.15938 5.38305 2.40883C5.1336 2.65829 4.83534 2.78301 4.48828 2.78301C4.14122 2.78301 3.84296 2.65829 3.59351 2.40883C3.34406 2.15938 3.21933 1.86113 3.21933 1.51406C3.21933 1.16158 3.34406 0.863322 3.59351 0.619294C3.84296 0.369843 4.14122 0.245117 4.48828 0.245117C4.83534 0.245117 5.1336 0.369843 5.38305 0.619294C5.6325 0.863322 5.75723 1.16158 5.75723 1.51406ZM4.39067 9.53446H5.21223C4.5181 11.0149 3.54741 11.7551 2.30016 11.7551C1.79583 11.7551 1.41623 11.6494 1.16136 11.4379C0.906487 11.2264 0.77905 10.9119 0.77905 10.4943C0.77905 10.2503 0.884795 9.82187 1.09629 9.20909L2.0724 6.40276C2.14832 6.18585 2.18628 6.04486 2.18628 5.97978C2.18628 5.91471 2.17001 5.86861 2.13747 5.8415C2.11036 5.80896 2.06427 5.79269 1.99919 5.79269C1.72263 5.79269 1.39725 6.14518 1.02308 6.85015H0.242188C0.941735 5.33717 1.92869 4.58069 3.20306 4.58069C3.65316 4.58069 4.00293 4.69185 4.25238 4.91419C4.50184 5.13111 4.62656 5.43207 4.62656 5.8171C4.62656 6.09908 4.51539 6.54647 4.29306 7.15925L3.34948 9.72968C3.21391 10.093 3.14612 10.3208 3.14612 10.413C3.14612 10.4726 3.16239 10.5187 3.19493 10.5512C3.23289 10.5838 3.28441 10.6 3.34948 10.6C3.49047 10.6 3.66943 10.478 3.88634 10.234C4.10868 9.98998 4.27679 9.7568 4.39067 9.53446Z",
				fill: "#f7f7f7"
			});

			function SvgInfo(t, r) {
				return o.createElement("svg", info_extends({
					width: 6,
					height: 12,
					viewBox: "0 0 6 12",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), oe)
			}
			var ie = o.forwardRef(SvgInfo);
			a.p;

			function lightning_extends() {
				return (lightning_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var se = o.createElement("path", {
				d: "M8.96215 5.95498C8.90081 5.82474 8.76278 5.74334 8.59409 5.74334H5.08223L6.09438 0.439548C6.10972 0.341871 6.12506 0.211634 6.03304 0.0976773C5.98703 0.0325591 5.91036 0 5.83368 0C5.66499 0 5.57297 0.146516 5.5423 0.195355L0.0828126 7.82379C-0.00920127 7.9703 -0.0245371 8.1331 0.0368055 8.26334C0.098148 8.39357 0.236169 8.47497 0.404861 8.47497H3.79404L2.75121 13.5605C2.73588 13.6581 2.72054 13.7884 2.81256 13.9023C2.85856 13.9674 2.93524 14 3.02726 14C3.19595 14 3.28796 13.8372 3.31863 13.7884L8.93148 6.39453C9.00816 6.24801 9.02349 6.08522 8.96215 5.95498Z",
				fill: "#FFD645"
			});

			function SvgLightning(t, r) {
				return o.createElement("svg", lightning_extends({
					width: 9,
					height: 14,
					viewBox: "0 0 9 14",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), se)
			}
			var ce = o.forwardRef(SvgLightning);
			a.p;

			function link_extends() {
				return (link_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var le = o.createElement("path", {
				fillRule: "evenodd",
				d: "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",
				clipRule: "evenodd",
				fill: "#807E98"
			});

			function SvgLink(t, r) {
				return o.createElement("svg", link_extends({
					xmlns: "http://www.w3.org/2000/svg",
					className: "h-5 w-5",
					viewBox: "0 0 20 20",
					fill: "currentColor",
					ref: r
				}, t), le)
			}
			var Ee = o.forwardRef(SvgLink);
			a.p;

			function link_out_extends() {
				return (link_out_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var ue = o.createElement("path", {
					d: "M5.07692 4.5H4.38462C3.61991 4.5 3 5.11991 3 5.88462V12.1154C3 12.8801 3.61991 13.5 4.38462 13.5H10.6154C11.3801 13.5 12 12.8801 12 12.1154V11",
					stroke: "#6f6e84",
					strokeWidth: 1.25,
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}),
				de = o.createElement("path", {
					d: "M8 8.5L13 3.5M13 3.5H9M13 3.5V7.5",
					stroke: "#6f6e84",
					strokeWidth: 1.25,
					strokeLinecap: "round"
				});

			function SvgLinkOut(t, r) {
				return o.createElement("svg", link_out_extends({
					width: 16,
					height: 17,
					viewBox: "0 0 16 17",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), ue, de)
			}
			var _e = o.forwardRef(SvgLinkOut),
				Oe = (a.p, a(1)),
				Te = a.n(Oe);
			const LogoShortIcon = ({
				id: t
			}) => i.a.createElement("svg", {
				width: "135",
				height: "145",
				viewBox: "0 0 135 145",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M100.986 0L0 144.988H31.0048L132.514 0H100.986Z",
				fill: "white"
			}), i.a.createElement("path", {
				d: "M34.2346 0L63.9475 42.7232L48.4451 66.0268L2.58386 0H34.2346Z",
				fill: `url(#${t?t+"_logo_gradient_0":"paint0_linear"})`
			}), i.a.createElement("path", {
				d: "M103.995 145L71.0526 97.7455L86.555 75.0893L135 145H103.995Z",
				fill: `url(#${t?t+"_logo_gradient_1":"paint1_linear"})`
			}), i.a.createElement("defs", null, i.a.createElement("linearGradient", {
				id: t ? t + "_logo_gradient_0" : "paint0_linear",
				x1: "27.1293",
				y1: "9.0625",
				x2: "69.773",
				y2: "60.4324",
				gradientUnits: "userSpaceOnUse"
			}, i.a.createElement("stop", {
				stopColor: "white"
			}), i.a.createElement("stop", {
				offset: "1",
				stopColor: "white",
				stopOpacity: "0.55"
			})), i.a.createElement("linearGradient", {
				id: t ? t + "_logo_gradient_1" : "paint1_linear",
				x1: "111.1",
				y1: "133.996",
				x2: "58.6959",
				y2: "63.4999",
				gradientUnits: "userSpaceOnUse"
			}, i.a.createElement("stop", {
				stopColor: "#6966FF"
			}), i.a.createElement("stop", {
				offset: "1",
				stopColor: "#6966FF",
				stopOpacity: "0.36"
			}))));
			LogoShortIcon.propTypes = {
				id: Te.a.string
			};
			var Ie = LogoShortIcon;
			a.p;

			function mobile_extends() {
				return (mobile_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Se = o.createElement("path", {
					d: "M16.8001 0H7.2001C5.2149 0 3.6001 1.6148 3.6001 3.6V20.4C3.6001 22.3852 5.2149 24 7.2001 24H16.8001C18.7853 24 20.4001 22.3852 20.4001 20.4V3.6C20.4001 1.6148 18.7853 0 16.8001 0ZM19.2001 20.4C19.2001 21.7256 18.1257 22.8 16.8001 22.8H7.2001C5.87452 22.8 4.8001 21.7256 4.8001 20.4V19.2H19.2001V20.4V20.4ZM19.2001 18H4.8001V4.8H19.2001V18ZM4.8001 3.6C4.8001 2.27442 5.87452 1.2 7.2001 1.2H16.8001C18.1257 1.2 19.2001 2.27442 19.2001 3.6H4.8001Z",
					fill: "#6F6E84"
				}),
				pe = o.createElement("path", {
					d: "M13.8001 20.3999H10.2001C9.8685 20.3999 9.6001 20.6683 9.6001 20.9999C9.6001 21.3315 9.8685 21.5999 10.2001 21.5999H13.8001C14.1317 21.5999 14.4001 21.3315 14.4001 20.9999C14.4001 20.6683 14.1317 20.3999 13.8001 20.3999Z",
					fill: "#6F6E84"
				});

			function SvgMobile(t, r) {
				return o.createElement("svg", mobile_extends({
					width: 24,
					height: 24,
					viewBox: "0 0 24 24",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Se, pe)
			}
			var Re = o.forwardRef(SvgMobile);
			a.p;

			function more_extends() {
				return (more_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Ae = o.createElement("path", {
					d: "M2.85714 9.14282C1.28171 9.14282 0 10.4245 0 12C0 13.5754 1.28171 14.8571 2.85714 14.8571C4.43257 14.8571 5.71429 13.5754 5.71429 12C5.71429 10.4245 4.43257 9.14282 2.85714 9.14282Z",
					fill: "#C3C2D4"
				}),
				fe = o.createElement("path", {
					d: "M12 9.14282C10.4245 9.14282 9.14282 10.4245 9.14282 12C9.14282 13.5754 10.4245 14.8571 12 14.8571C13.5754 14.8571 14.8571 13.5754 14.8571 12C14.8571 10.4245 13.5754 9.14282 12 9.14282Z",
					fill: "#C3C2D4"
				}),
				be = o.createElement("path", {
					d: "M21.1429 9.14282C19.5675 9.14282 18.2858 10.4245 18.2858 12C18.2858 13.5754 19.5675 14.8571 21.1429 14.8571C22.7183 14.8571 24.0001 13.5754 24.0001 12C24.0001 10.4245 22.7183 9.14282 21.1429 9.14282Z",
					fill: "#C3C2D4"
				});

			function SvgMore(t, r) {
				return o.createElement("svg", more_extends({
					width: 24,
					height: 24,
					viewBox: "0 0 24 24",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Ae, fe, be)
			}
			var Ne = o.forwardRef(SvgMore);
			a.p;

			function outcome_carets_extends() {
				return (outcome_carets_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Ce = o.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M4.937 5.43695C5.15266 5.22136 5.44511 5.10025 5.75005 5.10025C6.05499 5.10025 6.34744 5.22136 6.5631 5.43695L12.3131 11.187C12.5287 11.4026 12.6498 11.6951 12.6498 12C12.6498 12.3049 12.5287 12.5974 12.3131 12.8131L6.5631 18.5631C6.34621 18.7725 6.05571 18.8884 5.75419 18.8858C5.45266 18.8832 5.16423 18.7623 4.95101 18.549C4.73779 18.3358 4.61684 18.0474 4.61422 17.7459C4.6116 17.4443 4.72752 17.1538 4.937 16.937L9.87395 12L4.937 7.06305C4.72141 6.8474 4.6003 6.55494 4.6003 6.25C4.6003 5.94507 4.72141 5.65261 4.937 5.43695ZM11.837 5.43695C12.0527 5.22136 12.3451 5.10025 12.65 5.10025C12.955 5.10025 13.2474 5.22136 13.4631 5.43695L19.2131 11.187C19.4287 11.4026 19.5498 11.6951 19.5498 12C19.5498 12.3049 19.4287 12.5974 19.2131 12.8131L13.4631 18.5631C13.2462 18.7725 12.9557 18.8884 12.6542 18.8858C12.3527 18.8832 12.0642 18.7623 11.851 18.549C11.6378 18.3358 11.5168 18.0474 11.5142 17.7459C11.5116 17.4443 11.6275 17.1538 11.837 16.937L16.7739 12L11.837 7.06305C11.6214 6.8474 11.5003 6.55494 11.5003 6.25C11.5003 5.94507 11.6214 5.65261 11.837 5.43695Z",
				fill: "#5CDA96"
			});

			function SvgOutcomeCarets(t, r) {
				return o.createElement("svg", outcome_carets_extends({
					width: 23,
					height: 24,
					viewBox: "0 0 23 24",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Ce)
			}
			var ye = o.forwardRef(SvgOutcomeCarets);
			a.p;

			function overview_extends() {
				return (overview_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var De = o.createElement("rect", {
					x: .5,
					y: 4.16663,
					width: 6.19997,
					height: 6.33335,
					rx: 3.09999,
					fill: "#2d2d3b",
					stroke: "#6b6a80"
				}),
				me = o.createElement("rect", {
					x: 5.2998,
					y: 4.16663,
					width: 6.19997,
					height: 6.33335,
					rx: 3.09999,
					fill: "#2d2d3b",
					stroke: "#6b6a80"
				}),
				he = o.createElement("rect", {
					x: 2.8999,
					y: .5,
					width: 6.19997,
					height: 6.33335,
					rx: 3.09998,
					fill: "#2d2d3b",
					stroke: "#6b6a80"
				});

			function SvgOverview(t, r) {
				return o.createElement("svg", overview_extends({
					width: 12,
					height: 12,
					viewBox: "0 0 12 12",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), De, me, he)
			}
			var Le = o.forwardRef(SvgOverview);
			a.p;

			function pencil_extends() {
				return (pencil_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var ge = o.createElement("path", {
				d: "M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z",
				fill: "#6f6e84"
			});

			function SvgPencil(t, r) {
				return o.createElement("svg", pencil_extends({
					height: 14,
					width: 14,
					viewBox: "0 0 48 48",
					ref: r
				}, t), ge)
			}
			var Pe = o.forwardRef(SvgPencil);
			a.p;

			function percent_extends() {
				return (percent_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var ve = o.createElement("path", {
				d: "M1.29897 10.9157C1.2268 10.8424 1.21649 10.7691 1.26804 10.6957L9.86598 0.497156C9.89691 0.465727 9.93299 0.450012 9.97423 0.450012C10.0155 0.450012 10.0515 0.465727 10.0825 0.497156L10.6237 0.984299C10.6959 1.05763 10.7062 1.13096 10.6546 1.2043L2.0567 11.4029C2.02577 11.4343 1.98969 11.45 1.94845 11.45C1.90722 11.45 1.87113 11.4343 1.84021 11.4029L1.29897 10.9157ZM2.70619 6.07573C2.23196 6.07573 1.78866 5.96573 1.37629 5.74573C0.963917 5.52573 0.628866 5.2062 0.371134 4.78716C0.123711 4.35763 0 3.84954 0 3.26287C0 2.6762 0.123711 2.17335 0.371134 1.7543C0.628866 1.32477 0.963917 1.00001 1.37629 0.780013C1.78866 0.560012 2.23196 0.450012 2.70619 0.450012C3.18041 0.450012 3.62371 0.560012 4.03608 0.780013C4.44845 1.00001 4.77835 1.32477 5.02577 1.7543C5.2835 2.17335 5.41237 2.6762 5.41237 3.26287C5.41237 3.84954 5.2835 4.35763 5.02577 4.78716C4.77835 5.2062 4.44845 5.52573 4.03608 5.74573C3.62371 5.96573 3.18041 6.07573 2.70619 6.07573ZM2.70619 4.91287C3.11856 4.91287 3.46907 4.77668 3.75773 4.5043C4.0567 4.22144 4.20619 3.80763 4.20619 3.26287C4.20619 2.71811 4.0567 2.30954 3.75773 2.03716C3.46907 1.7543 3.11856 1.61287 2.70619 1.61287C2.29381 1.61287 1.93814 1.7543 1.63918 2.03716C1.35052 2.30954 1.20619 2.71811 1.20619 3.26287C1.20619 3.80763 1.35052 4.22144 1.63918 4.5043C1.93814 4.77668 2.29381 4.91287 2.70619 4.91287ZM9.29381 11.45C8.81959 11.45 8.37629 11.34 7.96392 11.12C7.55155 10.9 7.2165 10.5805 6.95876 10.1614C6.71134 9.73192 6.58763 9.22382 6.58763 8.63716C6.58763 8.05049 6.71134 7.54763 6.95876 7.12858C7.2165 6.69906 7.55155 6.3743 7.96392 6.1543C8.37629 5.9343 8.81959 5.8243 9.29381 5.8243C9.76804 5.8243 10.2113 5.9343 10.6237 6.1543C11.0361 6.3743 11.366 6.69906 11.6134 7.12858C11.8711 7.54763 12 8.05049 12 8.63716C12 9.22382 11.8711 9.73192 11.6134 10.1614C11.366 10.5805 11.0361 10.9 10.6237 11.12C10.2113 11.34 9.76804 11.45 9.29381 11.45ZM9.29381 10.2872C9.70619 10.2872 10.0567 10.151 10.3454 9.87858C10.6443 9.59573 10.7938 9.18192 10.7938 8.63716C10.7938 8.09239 10.6443 7.68382 10.3454 7.41144C10.0567 7.12858 9.70619 6.98716 9.29381 6.98716C8.88144 6.98716 8.52577 7.12858 8.2268 7.41144C7.93814 7.68382 7.79381 8.09239 7.79381 8.63716C7.79381 9.18192 7.93814 9.59573 8.2268 9.87858C8.52577 10.151 8.88144 10.2872 9.29381 10.2872Z"
			});

			function SvgPercent(t, r) {
				return o.createElement("svg", percent_extends({
					width: 12,
					height: 12,
					viewBox: "0 0 12 12",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), ve)
			}
			var we = o.forwardRef(SvgPercent);
			a.p;
			a.p;
			a.p;
			a.p;

			function question_mark_extends() {
				return (question_mark_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Me = o.createElement("path", {
				d: "M6.13953 21.3333C7.25581 21.3333 7.95349 20.4382 7.95349 19.3939C7.95349 18.3497 7.25581 17.4545 6.13953 17.4545C5.02326 17.4545 4.32558 18.3497 4.32558 19.3939C4.32558 20.4382 5.02326 21.3333 6.13953 21.3333ZM4.60465 13.9184C4.60465 14.4707 5.05237 14.9184 5.60465 14.9184H6.39535C6.94763 14.9184 7.39535 14.4707 7.39535 13.9184V13.5758C7.39535 10.1445 12 10.2937 12 5.51981C12 2.08858 9.48837 0 6 0C3.12204 0 0.91734 1.67957 0.190897 4.71597C0.0521138 5.29605 0.522061 5.81818 1.11852 5.81818H1.93451C2.42732 5.81818 2.83431 5.45381 2.99177 4.98682C3.44993 3.62802 4.48004 2.68532 6 2.68532C7.95349 2.68532 9.06977 3.87879 9.06977 5.51981C9.06977 9.10023 4.60465 8.5035 4.60465 13.5758V13.9184Z",
				fill: "#AFAEC0"
			});

			function SvgQuestionMark(t, r) {
				return o.createElement("svg", question_mark_extends({
					width: 12,
					height: 22,
					viewBox: "0 0 12 22",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Me)
			}
			var Ue = o.forwardRef(SvgQuestionMark);
			a.p;

			function repeat_extends() {
				return (repeat_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Ge = o.createElement("path", {
				d: "M2.77463 16.6451C3.01631 16.881 3.33441 17 3.65045 17C3.96856 17 4.28666 16.881 4.52834 16.6451C5.01169 16.1712 5.01169 15.4069 4.52834 14.933C1.79553 12.265 1.79553 7.92527 4.52834 5.25729C7.25907 2.59134 11.7063 2.59134 14.4371 5.25729L14.8853 5.6949H11.9274C11.2436 5.6949 10.688 6.23737 10.688 6.90486C10.688 7.57438 11.2436 8.11483 11.9274 8.11483H17.7606C18.4444 8.11483 19 7.57438 19 6.90486V1.20996C19 0.542467 18.4444 0 17.7606 0C17.0769 0 16.5213 0.542467 16.5213 1.20996V3.86987L16.1908 3.54721C12.4913 -0.0645314 6.47414 -0.0645314 2.77463 3.54721C-0.924875 7.15896 -0.924875 13.0333 2.77463 16.6451Z",
				fill: "#FAFAFD"
			});

			function SvgRepeat(t, r) {
				return o.createElement("svg", repeat_extends({
					width: 19,
					height: 17,
					viewBox: "0 0 19 17",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Ge)
			}
			var je = o.forwardRef(SvgRepeat);
			a.p;

			function search_extends() {
				return (search_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var ke = o.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M10.5 6.5C10.5 8.98528 8.48528 11 6 11C3.51472 11 1.5 8.98528 1.5 6.5C1.5 4.01472 3.51472 2 6 2C8.48528 2 10.5 4.01472 10.5 6.5ZM12 6.5C12 9.81371 9.31371 12.5 6 12.5C5.0458 12.5 4.14363 12.2773 3.34264 11.8809L2.04742 14.0142C1.83245 14.3683 1.37116 14.4811 1.0171 14.2661C0.663032 14.0511 0.550271 13.5898 0.765239 13.2358L2.09105 11.0521C0.810824 9.95171 0 8.32054 0 6.5C0 3.18629 2.68629 0.5 6 0.5C9.31371 0.5 12 3.18629 12 6.5Z"
			});

			function SvgSearch(t, r) {
				return o.createElement("svg", search_extends({
					width: 12,
					height: 15,
					viewBox: "0 0 12 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), ke)
			}
			var xe = o.forwardRef(SvgSearch);
			a.p;

			function show_extends() {
				return (show_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Fe = o.createElement("path", {
					d: "M9 8.8a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z",
					fill: "#CCCBDC"
				}),
				He = o.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M.412 7a9.003 9.003 0 0 1 17.176 0A9.003 9.003 0 0 1 .412 7ZM12.6 7a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z",
					fill: "#CCCBDC"
				});

			function SvgShow(t, r) {
				return o.createElement("svg", show_extends({
					width: 18,
					height: 14,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Fe, He)
			}
			var Be = o.forwardRef(SvgShow);
			a.p;

			function sidebar_extends() {
				return (sidebar_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var We = o.createElement("path", {
					d: "M11.8185 0V14",
					stroke: "#706d79"
				}),
				Ye = o.createElement("rect", {
					x: .5,
					y: .5,
					width: 19,
					height: 13,
					rx: 1.5,
					stroke: "#706d79"
				}),
				Ke = o.createElement("path", {
					d: "M3.63641 4.375H9.09096",
					stroke: "#706d79"
				}),
				Ve = o.createElement("path", {
					d: "M3.63641 7H9.09096",
					stroke: "#706d79"
				}),
				Ze = o.createElement("path", {
					d: "M3.63641 9.625H9.09096",
					stroke: "#706d79"
				});

			function SvgSidebar(t, r) {
				return o.createElement("svg", sidebar_extends({
					width: 20,
					height: 14,
					viewBox: "0 0 20 14",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), We, Ye, Ke, Ve, Ze)
			}
			var ze = o.forwardRef(SvgSidebar);
			a.p;

			function star_extends() {
				return (star_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Xe = o.createElement("path", {
				d: "M6.76114 0.772952C6.83374 0.538033 7.16626 0.538034 7.23886 0.772953L8.36196 4.4074C8.39433 4.51215 8.49118 4.58359 8.60082 4.58359H12.2609C12.5001 4.58359 12.6027 4.88709 12.4127 5.03226L9.43037 7.31055C9.34712 7.37415 9.31235 7.48292 9.34328 7.58302L10.4773 11.2527C10.5491 11.4853 10.2801 11.6729 10.0867 11.5252L7.15177 9.28312C7.06217 9.21467 6.93784 9.21467 6.84823 9.28312L3.91334 11.5252C3.71992 11.6729 3.45086 11.4853 3.52272 11.2527L4.65672 7.58302C4.68765 7.48292 4.65288 7.37415 4.56963 7.31055L1.58731 5.03226C1.39728 4.88709 1.49994 4.58359 1.73907 4.58359H5.39918C5.50882 4.58359 5.60567 4.51215 5.63804 4.4074L6.76114 0.772952Z"
			});

			function SvgStar(t, r) {
				return o.createElement("svg", star_extends({
					width: 14,
					height: 13,
					viewBox: "0 0 14 13",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Xe)
			}
			var qe = o.forwardRef(SvgStar);
			a.p;

			function sort_menu_extends() {
				return (sort_menu_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var $e = o.createElement("path", {
					d: "M9 3H17M9 8H17M9 13H17",
					stroke: "#6B6A80",
					strokeWidth: 1.5,
					strokeLinecap: "round"
				}),
				Qe = o.createElement("path", {
					d: "M3.44446 13L3.44446 3M3.44446 3L1 5.5M3.44446 3L6 5.5",
					stroke: "#6B6A80",
					strokeWidth: 1.25,
					strokeLinecap: "round"
				});

			function SvgSortMenu(t, r) {
				return o.createElement("svg", sort_menu_extends({
					width: 18,
					height: 16,
					viewBox: "0 0 18 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), $e, Qe)
			}
			var Je = o.forwardRef(SvgSortMenu);
			a.p;

			function starkware_extends() {
				return (starkware_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var et = o.createElement("path", {
					d: "M26.1604 10.0273C26.1604 11.2566 25.4456 11.9623 24.0395 11.9623H20.6765V10.5054H23.6411C24.0745 10.5054 24.2856 10.3573 24.2856 9.98188C24.2856 9.67456 24.0512 9.48096 23.5356 9.12821L21.7779 7.80775C20.8874 7.14768 20.5123 6.53303 20.5123 5.80451C20.5123 4.56394 21.2623 3.99487 22.7388 3.99487H26.0198V5.45176H23.0668C22.6098 5.45176 22.3873 5.59963 22.3873 5.98668C22.3873 6.28257 22.6216 6.47617 23.1489 6.81748L24.8949 8.00136C25.7855 8.59313 26.1604 9.31022 26.1604 10.0273Z",
					fill: "#807E98"
				}),
				tt = o.createElement("path", {
					d: "M33.2028 5.45176H31.0936V11.9624H29.2188V5.45176H27.1095V3.99487H33.2028V5.45176Z",
					fill: "#807E98"
				}),
				rt = o.createElement("path", {
					d: "M38.1245 9.09382L36.9762 5.94101L35.8161 9.09382H38.1245ZM38.6166 10.4256H35.3121L34.7498 11.9622H32.7107L35.9801 3.99463H37.9487L41.2181 11.9622H39.1791L38.6166 10.4256Z",
					fill: "#807E98"
				}),
				nt = o.createElement("path", {
					d: "M44.792 7.75081C45.8233 7.75081 46.1279 7.3979 46.1279 6.55566C46.1279 5.71342 45.8233 5.36051 44.792 5.36051H43.9719V7.75081H44.792ZM48.2372 11.9622H46.3506L45.9873 10.437C45.753 9.37843 45.5421 9.09382 44.7217 9.08239H43.9719V11.9622H42.0969V3.99463H45.46C47.2059 3.99463 48.0029 4.74586 48.0029 6.38492C48.0029 7.48907 47.5575 8.16057 46.6552 8.43375C47.2998 8.72964 47.6162 9.32158 47.8739 10.437L48.2372 11.9622Z",
					fill: "#807E98"
				}),
				at = o.createElement("path", {
					d: "M51.7176 7.85325L54.7055 3.99463H56.9438L53.8033 7.85325L57.1547 11.9622H54.9165L51.7176 7.85325ZM51.7176 11.9622H49.8428V3.99463H51.7176V11.9622Z",
					fill: "#807E98"
				}),
				ot = o.createElement("path", {
					d: "M69.0484 3.99463L66.5408 11.9622H65.369L63.3887 5.58811L61.4083 11.9622H60.2248L57.7406 3.99463H58.8889L60.8458 10.7214L62.9199 3.99463H63.8573L65.9314 10.7214L67.9001 3.99463H69.0484Z",
					fill: "#807E98"
				}),
				it = o.createElement("path", {
					d: "M74.0637 9.12797L72.5169 5.13292L70.9585 9.12797H74.0637ZM74.3567 9.89064H70.6655L69.8569 11.9622H68.6735L71.9428 3.99463H73.0794L76.3488 11.9622H75.1653L74.3567 9.89064Z",
					fill: "#807E98"
				}),
				st = o.createElement("path", {
					d: "M80.0049 7.89877C81.2938 7.89877 81.7742 7.40943 81.7742 6.33944C81.7742 5.29231 81.2938 4.79154 80.0049 4.79154H78.54V7.89877H80.0049ZM83.1101 11.9623H82.0203L81.7274 10.5964C81.4344 9.17365 81.0711 8.69559 79.9697 8.67288H78.54V11.9623H77.462V3.99473H80.368C82.0906 3.99473 82.8524 4.73453 82.8524 6.24843C82.8524 7.38656 82.3718 8.08094 81.3641 8.30854C82.1609 8.60458 82.5242 9.27609 82.8055 10.5964L83.1101 11.9623Z",
					fill: "#807E98"
				}),
				ct = o.createElement("path", {
					d: "M85.8874 4.83697V7.26141H89.5199V8.04679H85.8874V9.75414C85.8874 10.6988 86.3092 11.1199 87.27 11.1199H90.0003V11.9623H87.106C85.3952 11.9623 84.8094 11.4159 84.8094 9.84515V3.99473H90.0003V4.83697H85.8874Z",
					fill: "#807E98"
				}),
				lt = o.createElement("path", {
					d: "M8.16349 9.01839L6.71872 10.4219L6.71577 10.4241C6.71218 10.4264 6.70809 10.4276 6.70351 10.4276C6.69092 10.4276 6.68078 10.4178 6.68078 10.4056C6.68078 10.4032 6.68111 10.4006 6.68193 10.3984L7.23165 8.40692C7.27841 8.26414 7.24358 8.10166 7.127 7.98842L5.68223 6.5849L5.67978 6.58204C5.67749 6.5787 5.67618 6.57458 5.67618 6.57013C5.67618 6.55806 5.68632 6.54805 5.69891 6.54805C5.70153 6.54805 5.70398 6.54853 5.70627 6.54916L7.75651 7.08313C7.90351 7.12871 8.07094 7.09472 8.18752 6.98148L9.63229 5.57812L9.63523 5.57573C9.63867 5.57351 9.64292 5.57224 9.6475 5.57224C9.66009 5.57224 9.67022 5.58225 9.67022 5.59447C9.67022 5.59686 9.6699 5.59924 9.66908 5.60146L9.11936 7.59311C9.0726 7.73573 9.10742 7.89837 9.22401 8.01161L10.6688 9.41514L10.6712 9.41783C10.6735 9.42133 10.6748 9.42546 10.6748 9.42975C10.6748 9.44198 10.6647 9.45198 10.6521 9.45198C10.6495 9.45198 10.647 9.45151 10.6447 9.45071L8.5945 8.91691C8.4475 8.87132 8.28007 8.90515 8.16349 9.01839ZM16.2886 7.85374L12.8376 4.50161C12.721 4.38837 12.5535 4.35454 12.4067 4.39996L10.1374 4.99111C10.1352 4.99174 10.1321 4.9919 10.1297 4.9919C10.1171 4.9919 10.107 4.98205 10.107 4.96982C10.107 4.96204 10.1112 4.95521 10.1174 4.95124C10.3651 4.79115 10.7406 4.50161 11.6385 3.62935C11.7216 3.54867 11.7216 3.41764 11.6385 3.33696L8.32601 0.11935C8.24295 0.0386672 8.10806 0.0386672 8.02499 0.11935L4.57397 3.47148C4.45722 3.58472 4.42239 3.74736 4.46932 3.89014L5.0779 6.09445C5.07856 6.09652 5.07872 6.09953 5.07872 6.10176C5.07872 6.11399 5.06858 6.12383 5.05599 6.12383C5.04782 6.12383 5.04079 6.11986 5.0367 6.11367C4.87204 5.87305 4.57397 5.50839 3.67597 4.63629C3.59275 4.55545 3.45802 4.55545 3.37479 4.63629L0.06242 7.85374C-0.0208067 7.93458 -0.0208067 8.06545 0.06242 8.14629L3.51345 11.4984C3.63003 11.6117 3.7973 11.6455 3.94429 11.5999L6.21364 11.0088C6.21576 11.0081 6.21887 11.008 6.22132 11.008C6.23375 11.008 6.24405 11.018 6.24405 11.0302C6.24405 11.038 6.2398 11.0448 6.23359 11.0488C5.98587 11.2087 5.61045 11.4984 4.71246 12.3705C4.6294 12.4514 4.6294 12.5822 4.71246 12.6631L8.02499 15.8805C8.10806 15.9614 8.24295 15.9614 8.32601 15.8805L11.777 12.5284C11.8936 12.4152 11.9284 12.2527 11.8817 12.1099L11.2731 9.90558C11.2725 9.90352 11.2723 9.9005 11.2723 9.89828C11.2723 9.88605 11.2824 9.87604 11.295 9.87604C11.303 9.87604 11.3102 9.88017 11.3141 9.88636C11.479 10.127 11.777 10.4916 12.675 11.3637C12.7581 11.4446 12.893 11.4446 12.9762 11.3637L16.2886 8.14629C16.3718 8.06545 16.3718 7.93458 16.2886 7.85374Z",
					fill: "#807E98"
				});

			function SvgStarkware(t, r) {
				return o.createElement("svg", starkware_extends({
					width: 90,
					height: 16,
					viewBox: "0 0 90 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), et, tt, rt, nt, at, ot, it, st, ct, lt)
			}
			var Et = o.forwardRef(SvgStarkware);
			a.p;
			a.p;

			function success_check_extends() {
				return (success_check_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var ut = o.createElement("rect", {
					x: 1,
					y: 1,
					width: 46,
					height: 46,
					rx: 23,
					stroke: "#2A2A34",
					strokeWidth: 2
				}),
				dt = o.createElement("path", {
					d: "M13.935 25.6142L21.4349 33.1142L33.809 16.1918",
					stroke: "#BBB8C6",
					strokeWidth: 2,
					strokeLinecap: "round"
				});

			function SvgSuccessCheck(t, r) {
				return o.createElement("svg", success_check_extends({
					width: 48,
					height: 48,
					viewBox: "0 0 48 48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), ut, dt)
			}
			var _t = o.forwardRef(SvgSuccessCheck);
			a.p;

			function swap_extends() {
				return (swap_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Ot = o.createElement("path", {
				d: "M0.627826 5.19726H13.3722C13.626 5.19726 13.8549 5.02739 13.9522 4.76702C14.0494 4.50639 13.9956 4.20646 13.8159 4.00718L10.392 0.204219C10.1468 -0.068073 9.74965 -0.068073 9.50427 0.204219C9.25888 0.476511 9.25911 0.917655 9.50427 1.1902L11.8567 3.80309H0.627826C0.281095 3.80309 0.000103993 4.11519 0.000103993 4.5003C0.000103993 4.88541 0.281095 5.19726 0.627826 5.19726ZM13.3722 6.80262H0.627826C0.373998 6.80262 0.145051 6.97248 0.0478108 7.23286C-0.049429 7.49349 0.00444092 7.79341 0.184083 7.99269L3.60802 11.7957C3.7306 11.9318 3.89107 12 4.05176 12C4.21246 12 4.37293 11.9318 4.4955 11.7957C4.74066 11.5234 4.74066 11.0822 4.4955 10.8097L2.14326 8.19704H13.3722C13.7189 8.19704 13.9999 7.88494 13.9999 7.49983C13.9999 7.11471 13.7189 6.80262 13.3722 6.80262Z"
			});

			function SvgSwap(t, r) {
				return o.createElement("svg", swap_extends({
					width: 14,
					height: 12,
					viewBox: "0 0 14 12",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Ot)
			}
			var Tt = o.forwardRef(SvgSwap);
			a.p;

			function transfer_extends() {
				return (transfer_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var It = o.createElement("path", {
					d: "M7 3V13M7 13L2 8.55556M7 13L12 8.55556",
					strokeWidth: 2.5,
					strokeLinecap: "round"
				}),
				St = o.createElement("path", {
					d: "M21 12V2M21 2L16 6.44444M21 2L26 6.44444",
					strokeWidth: 2.5,
					strokeLinecap: "round"
				}),
				pt = o.createElement("path", {
					d: "M2 19L26 19",
					strokeWidth: 2.5,
					strokeLinecap: "round"
				});

			function SvgTransfer(t, r) {
				return o.createElement("svg", transfer_extends({
					width: 28,
					height: 21,
					viewBox: "0 0 28 21",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), It, St, pt)
			}
			var Rt = o.forwardRef(SvgTransfer);
			a.p;

			function trash_extends() {
				return (trash_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var At = o.createElement("path", {
				d: "M6.75 7.33333V11.3333M9.25 7.33333V11.3333M3 4.66667H13M12.375 4.66667L11.8331 12.7613C11.8107 13.0977 11.6696 13.4125 11.4382 13.6424C11.2068 13.8722 10.9024 14 10.5863 14H5.41375C5.09759 14 4.79317 13.8722 4.5618 13.6424C4.33044 13.4125 4.18932 13.0977 4.16688 12.7613L3.625 4.66667H12.375ZM9.875 4.66667V2.66667C9.875 2.48986 9.80915 2.32029 9.69194 2.19526C9.57473 2.07024 9.41576 2 9.25 2H6.75C6.58424 2 6.42527 2.07024 6.30806 2.19526C6.19085 2.32029 6.125 2.48986 6.125 2.66667V4.66667H9.875Z",
				stroke: "#807E98",
				strokeWidth: 1.25,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			});

			function SvgTrash(t, r) {
				return o.createElement("svg", trash_extends({
					width: 16,
					height: 16,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), At)
			}
			var ft = o.forwardRef(SvgTrash);
			a.p;

			function triangle_extends() {
				return (triangle_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var bt = o.createElement("path", {
				d: "M2.6038 4.48532C2.80395 4.74532 3.19605 4.74532 3.3962 4.48532L5.84441 1.305C6.09751 0.976213 5.86313 0.5 5.44821 0.5H0.551788C0.136868 0.5 -0.0975129 0.976213 0.155586 1.305L2.6038 4.48532Z",
				fill: "#6f6e84"
			});

			function SvgTriangle(t, r) {
				return o.createElement("svg", triangle_extends({
					width: 6,
					height: 5,
					viewBox: "0 0 6 5",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), bt)
			}
			var Nt = o.forwardRef(SvgTriangle);
			a.p;

			function trophy_extends() {
				return (trophy_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Ct = o.createElement("path", {
					d: "M8.87175 10.9919C8.5912 11.019 8.30389 11.0326 8.01294 11.0326C7.72197 11.0326 7.43466 11.019 7.15414 10.9919C7.07835 10.9846 7.01076 11.0195 7.01076 11.0669V12.0252H6.99696C6.44349 12.0252 5.99478 12.4739 5.99478 13.0273H10.0035C10.0035 12.4786 9.56209 12.0341 9.01513 12.0265V11.0669C9.01513 11.0195 8.94754 10.9846 8.87175 10.9919Z",
					fill: "#6F6E84"
				}),
				yt = o.createElement("path", {
					d: "M11.0057 14.0556H4.99258C4.71583 14.0556 4.49149 14.28 4.49149 14.5567V15.5589C4.49149 15.8357 4.71583 16.06 4.99258 16.06H11.0057C11.2824 16.06 11.5068 15.8357 11.5068 15.5589V14.5567C11.5068 14.28 11.2824 14.0556 11.0057 14.0556Z",
					fill: "#6F6E84"
				}),
				Dt = o.createElement("path", {
					d: "M14.7391 0.263154C13.885 -0.165359 12.9434 0.00349358 12.2875 0.536639H3.72731C3.07057 -0.0121004 2.11714 -0.191511 1.25262 0.242268C-0.258041 1.00729 -0.43859 3.07831 0.909165 4.08902L3.53537 6.05488C3.78775 8.30645 5.69586 10.0574 8.01484 10.0574C10.3368 10.0574 12.2472 8.30208 12.4956 6.04631L15.0825 4.10991C16.4309 3.09863 16.2491 1.0278 14.7391 0.263154ZM3.48249 4.70199L1.54326 3.24361C0.814794 2.7056 0.921983 1.59672 1.72821 1.18811C2.53844 0.78285 3.48249 1.37249 3.48249 2.27131V4.70199ZM14.4484 3.26447L12.5247 4.71122V2.14515C12.6175 1.35286 13.4811 0.817861 14.2635 1.20897C15.0708 1.61819 15.176 2.72716 14.4484 3.26447Z",
					fill: "#6F6E84"
				});

			function SvgTrophy(t, r) {
				return o.createElement("svg", trophy_extends({
					width: 16,
					height: 20,
					viewBox: "0 -3 16 20",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Ct, yt, Dt)
			}
			var mt = o.forwardRef(SvgTrophy);
			a.p;
			a.p;

			function usd_symbol_extends() {
				return (usd_symbol_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var ht = o.createElement("path", {
				d: "M3.39394 14C3.29293 14 3.24242 13.9481 3.24242 13.8444V12.5378C2.61616 12.4444 2.05556 12.237 1.56061 11.9156C1.07576 11.5837 0.691919 11.1689 0.409091 10.6711C0.136364 10.1733 0 9.62889 0 9.03778C0 8.93407 0.050505 8.88222 0.151515 8.88222H1.42424C1.47475 8.88222 1.5101 8.89778 1.5303 8.92889C1.55051 8.94963 1.56566 8.98593 1.57576 9.03778C1.59596 9.53556 1.75253 9.96074 2.04545 10.3133C2.34848 10.6556 2.74747 10.8837 3.24242 10.9978V7.40444C2.25253 7.1037 1.50505 6.72518 1 6.26889C0.494949 5.80222 0.242424 5.18 0.242424 4.40222C0.242424 3.57259 0.525252 2.9037 1.09091 2.39556C1.65657 1.87704 2.37374 1.56074 3.24242 1.44667V0.155555C3.24242 0.0518518 3.29293 0 3.39394 0H4.59091C4.69192 0 4.74242 0.0518518 4.74242 0.155555V1.46222C5.62121 1.61778 6.32323 1.98593 6.84848 2.56667C7.37374 3.13704 7.64647 3.79556 7.66667 4.54222C7.66667 4.64593 7.61616 4.69778 7.51515 4.69778H6.24242C6.19192 4.69778 6.15657 4.68741 6.13636 4.66667C6.11616 4.63556 6.10101 4.59407 6.09091 4.54222C6.0505 4.16889 5.90909 3.84741 5.66667 3.57778C5.42424 3.30815 5.11616 3.1163 4.74242 3.00222V6.28444C5.76263 6.57481 6.56061 6.94815 7.13636 7.40444C7.71212 7.85037 8 8.45185 8 9.20889C8 10.1837 7.70707 10.9615 7.12121 11.5422C6.54545 12.1126 5.75253 12.4496 4.74242 12.5533V13.8444C4.74242 13.9481 4.69192 14 4.59091 14H3.39394ZM3.24242 2.95556C2.80808 3.03852 2.4596 3.19926 2.19697 3.43778C1.94444 3.6763 1.81818 3.97185 1.81818 4.32444C1.81818 4.66667 1.93939 4.95185 2.18182 5.18C2.42424 5.40815 2.77778 5.61555 3.24242 5.80222V2.95556ZM4.74242 11.0444C5.27778 10.9615 5.69192 10.7748 5.98485 10.4844C6.27778 10.1941 6.42424 9.81555 6.42424 9.34889C6.42424 9.00667 6.27778 8.7163 5.98485 8.47778C5.69192 8.22889 5.27778 8.0163 4.74242 7.84V11.0444Z"
			});

			function SvgUsdSymbol(t, r) {
				return o.createElement("svg", usd_symbol_extends({
					width: 8,
					height: 14,
					viewBox: "0 0 8 14",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), ht)
			}
			var Lt = o.forwardRef(SvgUsdSymbol);
			a.p;

			function undo_extends() {
				return (undo_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var gt = o.createElement("path", {
				d: "M11.5571 13.5556C11.3933 13.7194 11.1777 13.802 10.9635 13.802C10.7479 13.802 10.5323 13.7194 10.3685 13.5556C10.0409 13.2266 10.0409 12.696 10.3685 12.367C12.2207 10.5148 12.2207 7.502 10.3685 5.6498C8.51766 3.799 5.50346 3.799 3.65266 5.6498L3.34886 5.9536H5.35366C5.81706 5.9536 6.19366 6.3302 6.19366 6.7936C6.19366 7.2584 5.81706 7.6336 5.35366 7.6336H1.40006C0.936659 7.6336 0.560059 7.2584 0.560059 6.7936V2.84C0.560059 2.3766 0.936659 2 1.40006 2C1.86346 2 2.24006 2.3766 2.24006 2.84V4.6866L2.46406 4.4626C4.97146 1.9552 9.04966 1.9552 11.5571 4.4626C14.0645 6.97 14.0645 11.0482 11.5571 13.5556Z",
				fill: "#c3c2d4"
			});

			function SvgUndo(t, r) {
				return o.createElement("svg", undo_extends({
					width: 14,
					height: 14,
					viewBox: "0 0 14 14",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), gt)
			}
			var Pt = o.forwardRef(SvgUndo);
			a.p;

			function warning_extends() {
				return (warning_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var vt = o.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M8.67165 1.31998L0.445121 14.835C-0.366144 16.1678 0.593236 17.8749 2.15352 17.8749H17.921C19.4476 17.8749 20.4114 16.2335 19.6675 14.9004L12.1266 1.38536C11.3801 0.047507 9.46822 0.0113231 8.67165 1.31998ZM1.29932 15.3549L9.52585 1.83992C9.92413 1.1856 10.8801 1.20369 11.2533 1.87262L18.7943 15.3876C19.1662 16.0542 18.6843 16.8749 17.921 16.8749H2.15352C1.37338 16.8749 0.893687 16.0213 1.29932 15.3549ZM11.3741 13.9315C11.3741 14.5116 10.923 14.9628 10.3429 14.9628C9.76281 14.9628 9.31163 14.5116 9.31163 13.9315C9.31163 13.3514 9.76281 12.9003 10.3429 12.9003C10.923 12.9003 11.3741 13.3514 11.3741 13.9315ZM10.3429 11.9335C9.94705 11.9335 9.62202 11.6206 9.607 11.225L9.44054 6.84168V6.77722C9.44054 6.27887 9.84453 5.87488 10.3429 5.87488C10.8412 5.87488 11.2452 6.27887 11.2452 6.77722V6.84168L11.0788 11.225C11.0638 11.6206 10.7387 11.9335 10.3429 11.9335Z",
				fill: "#ffb648"
			});

			function SvgWarning(t, r) {
				return o.createElement("svg", warning_extends({
					width: 20,
					height: 18,
					viewBox: "0 0 20 18",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), vt)
			}
			var wt = o.forwardRef(SvgWarning);
			a.p;

			function withdraw_extends() {
				return (withdraw_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Mt = o.createElement("path", {
					d: "M8 10.5V1.5M8 1.5L4 5.5M8 1.5L12 5.5",
					stroke: "#6f6e84",
					strokeWidth: 1.25,
					strokeLinecap: "round"
				}),
				Ut = o.createElement("path", {
					d: "M2 14L14 14",
					stroke: "#6f6e84",
					strokeWidth: 1.25,
					strokeLinecap: "round"
				});

			function SvgWithdraw(t, r) {
				return o.createElement("svg", withdraw_extends({
					width: 16,
					height: 16,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Mt, Ut)
			}
			var Gt = o.forwardRef(SvgWithdraw);
			a.p;

			function ban_extends() {
				return (ban_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var jt = o.createElement("path", {
				d: "M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256C511.847,114.678,397.322,0.153,256,0z M256,64   c39.843,0.004,78.686,12.477,111.083,35.669L99.669,367.061c-61.503-86.178-41.499-205.897,44.679-267.4   C176.93,76.409,215.972,63.939,256,64z M256,448c-39.837-0.002-78.673-12.475-111.061-35.669l267.392-267.413   c61.514,86.17,41.527,205.891-44.643,267.406C335.098,435.588,296.042,448.064,256,448z",
				fill: "#807E98"
			});

			function SvgBan(t, r) {
				return o.createElement("svg", ban_extends({
					xmlns: "http://www.w3.org/2000/svg",
					xmlnsXlink: "http://www.w3.org/1999/xlink",
					id: "Capa_1",
					x: "0px",
					y: "0px",
					viewBox: "0 0 512 512",
					style: {
						enableBackground: "new 0 0 16 16"
					},
					xmlSpace: "preserve",
					width: 16,
					height: 16,
					ref: r
				}, t), jt)
			}
			var kt = o.forwardRef(SvgBan);
			a.p;
			const BellAlertIcon = ({
				id: t
			}) => i.a.createElement("svg", {
				width: "16",
				height: "16",
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("mask", {
				id: t || "bell-alert-mask",
				fill: "white"
			}, i.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M8 15.5C9.10457 15.5 10 14.6046 10 13.5H6C6 14.6046 6.89543 15.5 8 15.5Z"
			})), i.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M8 15.5C9.10457 15.5 10 14.6046 10 13.5H6C6 14.6046 6.89543 15.5 8 15.5Z",
				fill: "#6f6e84"
			}), i.a.createElement("path", {
				d: "M10 13.5H11V12.5H10V13.5ZM6 13.5V12.5H5V13.5H6ZM9 13.5C9 14.0523 8.55228 14.5 8 14.5V16.5C9.65685 16.5 11 15.1569 11 13.5H9ZM10 12.5H6V14.5H10V12.5ZM8 14.5C7.44772 14.5 7 14.0523 7 13.5H5C5 15.1569 6.34315 16.5 8 16.5V14.5Z",
				fill: "#6f6e84",
				mask: `url(#${t||"bell-alert-mask"})`
			}), i.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M8.53526 1C8.53378 1 8.5323 1 8.53082 1H7.46918C5.47858 1 3.7909 2.46372 3.50939 4.43431L3.03208 7.77545C3.01096 7.92327 2.95701 8.06449 2.87418 8.18873L1.03647 10.9453C0.593431 11.6099 1.06982 12.5 1.86852 12.5H14.1315C14.9302 12.5 15.4066 11.6099 14.9635 10.9453L13.1258 8.18873C13.043 8.06449 12.989 7.92327 12.9679 7.77545L12.8444 6.91074C12.5722 6.96922 12.2898 7 12.0001 7C11.9487 7 11.8975 6.99903 11.8466 6.99711L11.978 7.91687C12.0202 8.21252 12.1281 8.49495 12.2938 8.74343L14.1315 11.5H1.86852L3.70623 8.74343C3.87189 8.49495 3.97979 8.21252 4.02203 7.91687L4.49933 4.57573C4.71047 3.09779 5.97623 2 7.46918 2H8.12615C8.21747 1.64523 8.35623 1.30951 8.53526 1ZM12.7025 5.91734L12.4906 4.43431C12.2631 2.84155 11.1169 1.57992 9.63463 1.15468C9.42379 1.42457 9.25814 1.73147 9.14904 2.064C10.3611 2.31853 11.3194 3.30708 11.5007 4.57574L11.702 5.98538C11.8001 5.99505 11.8995 6 12.0001 6C12.242 6 12.4772 5.97138 12.7025 5.91734Z",
				fill: "#6f6e84"
			}), i.a.createElement("circle", {
				cx: "12",
				cy: "3",
				r: "3",
				fill: "#FF5353"
			}));
			BellAlertIcon.propTypes = {
				id: Te.a.string
			};
			var xt = BellAlertIcon;
			const BellIcon = ({
				id: t
			}) => i.a.createElement("svg", {
				width: "16",
				height: "16",
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("mask", {
				id: t || "bell-mask",
				fill: "white"
			}, i.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M8 15.5C9.10457 15.5 10 14.6046 10 13.5H6C6 14.6046 6.89543 15.5 8 15.5Z"
			})), i.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M8 15.5C9.10457 15.5 10 14.6046 10 13.5H6C6 14.6046 6.89543 15.5 8 15.5Z",
				fill: "#6f6e84"
			}), i.a.createElement("path", {
				d: "M10 13.5H11V12.5H10V13.5ZM6 13.5V12.5H5V13.5H6ZM9 13.5C9 14.0523 8.55228 14.5 8 14.5V16.5C9.65685 16.5 11 15.1569 11 13.5H9ZM10 12.5H6V14.5H10V12.5ZM8 14.5C7.44772 14.5 7 14.0523 7 13.5H5C5 15.1569 6.34315 16.5 8 16.5V14.5Z",
				fill: "#6f6e84",
				mask: `url(#${t||"bell-mask"})`
			}), i.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M8.53082 2H7.46918C5.97623 2 4.71047 3.09779 4.49933 4.57573L4.02203 7.91687C3.97979 8.21252 3.87189 8.49495 3.70623 8.74343L1.86852 11.5H14.1315L12.2938 8.74343C12.1281 8.49495 12.0202 8.21252 11.978 7.91687L11.5007 4.57574C11.2895 3.09779 10.0238 2 8.53082 2ZM7.46918 1C5.47858 1 3.7909 2.46372 3.50939 4.43431L3.03208 7.77545C3.01096 7.92327 2.95701 8.06449 2.87418 8.18873L1.03647 10.9453C0.593431 11.6099 1.06982 12.5 1.86852 12.5H14.1315C14.9302 12.5 15.4066 11.6099 14.9635 10.9453L13.1258 8.18873C13.043 8.06449 12.989 7.92327 12.9679 7.77545L12.4906 4.43431C12.2091 2.46372 10.5214 1 8.53082 1H7.46918Z",
				fill: "#6f6e84"
			}));
			BellIcon.propTypes = {
				id: Te.a.string
			};
			var Ft = BellIcon;

			function boxed_close_extends() {
				return (boxed_close_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Ht = o.createElement("path", {
					d: "M13.5 1.5H3.5C2.39543 1.5 1.5 2.39543 1.5 3.5V13.5C1.5 14.6046 2.39543 15.5 3.5 15.5H13.5C14.6046 15.5 15.5 14.6046 15.5 13.5V3.5C15.5 2.39543 14.6046 1.5 13.5 1.5Z",
					stroke: "#706D79",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}),
				Bt = o.createElement("path", {
					d: "M6.16602 6.16699L10.8327 10.8336",
					stroke: "#706D79",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}),
				Wt = o.createElement("path", {
					d: "M10.8327 6.16699L6.16602 10.8336",
					stroke: "#706D79",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				});

			function SvgBoxedClose(t, r) {
				return o.createElement("svg", boxed_close_extends({
					width: 17,
					height: 17,
					viewBox: "0 0 17 17",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Ht, Bt, Wt)
			}
			var Yt = o.forwardRef(SvgBoxedClose);
			a.p;

			function chat_bubble_extends() {
				return (chat_bubble_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Kt = o.createElement("path", {
				d: "M0.5 1C0.5 0.723858 0.723858 0.5 1 0.5H15C15.2761 0.5 15.5 0.723857 15.5 1V13.9554C15.5 14.3714 15.0215 14.6055 14.693 14.35L12.0778 12.316C11.8145 12.1112 11.4905 12 11.1569 12H1C0.723857 12 0.5 11.7761 0.5 11.5V1Z",
				stroke: "#6f6e84"
			});

			function SvgChatBubble(t, r) {
				return o.createElement("svg", chat_bubble_extends({
					width: 16,
					height: 16,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Kt)
			}
			var Vt = o.forwardRef(SvgChatBubble);
			a.p;
			a.p;

			function copy_extends() {
				return (copy_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Zt = o.createElement("path", {
					d: "M13.5004 6.40039H8.40039C7.29582 6.40039 6.40039 7.29582 6.40039 8.40039V13.5004C6.40039 14.605 7.29582 15.5004 8.40039 15.5004H13.5004C14.605 15.5004 15.5004 14.605 15.5004 13.5004V8.40039C15.5004 7.29582 14.605 6.40039 13.5004 6.40039Z",
					stroke: "#6f6e84",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}),
				zt = o.createElement("path", {
					d: "M3.6 10.6H2.9C2.1268 10.6 1.5 9.9732 1.5 9.2V2.9C1.5 2.1268 2.1268 1.5 2.9 1.5H9.2C9.9732 1.5 10.6 2.1268 10.6 2.9V3.6",
					stroke: "#6f6e84",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				});

			function SvgCopy(t, r) {
				return o.createElement("svg", copy_extends({
					width: 17,
					height: 17,
					viewBox: "0 0 17 17",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Zt, zt)
			}
			var Xt = o.forwardRef(SvgCopy);
			a.p;

			function etherscan_extends() {
				return (etherscan_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var qt = o.createElement("g", {
				id: "etherscan-logo-circle",
				transform: "translate(-219.378 -213.33)"
			}, o.createElement("path", {
				id: "Path_1",
				"data-name": "Path 1",
				d: "M280.433,353.152A12.45,12.45,0,0,1,292.941,340.7l20.737.068a12.467,12.467,0,0,1,12.467,12.467v78.414c2.336-.692,5.332-1.43,8.614-2.2a10.389,10.389,0,0,0,8.009-10.11V322.073a12.469,12.469,0,0,1,12.468-12.47h20.778a12.469,12.469,0,0,1,12.467,12.467v90.279s5.2-2.106,10.269-4.245a10.408,10.408,0,0,0,6.353-9.577V290.9a12.466,12.466,0,0,1,12.466-12.467h20.778A12.468,12.468,0,0,1,450.815,290.9v88.625c18.014-13.055,36.271-28.758,50.759-47.639a20.926,20.926,0,0,0,3.185-19.537,146.6,146.6,0,0,0-136.644-99.006c-81.439-1.094-148.744,65.385-148.736,146.834a146.371,146.371,0,0,0,19.5,73.45,18.56,18.56,0,0,0,17.707,9.173c3.931-.346,8.825-.835,14.643-1.518a10.383,10.383,0,0,0,9.209-10.306V353.152",
				fill: "#6f6e84"
			}), o.createElement("path", {
				id: "Path_2",
				"data-name": "Path 2",
				d: "M244.417,398.641A146.808,146.808,0,0,0,477.589,279.9c0-3.381-.157-6.724-.383-10.049-53.642,80-152.686,117.4-232.79,128.793",
				transform: "translate(35.564 80.269)",
				fill: "#6f6e84"
			}));

			function SvgEtherscan(t, r) {
				return o.createElement("svg", etherscan_extends({
					xmlns: "http://www.w3.org/2000/svg",
					width: 293.775,
					height: 293.671,
					viewBox: "0 0 293.775 293.671",
					ref: r
				}, t), qt)
			}
			var $t = o.forwardRef(SvgEtherscan);
			a.p;

			function feedback_extends() {
				return (feedback_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Qt = o.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M15 8C15 9.53527 14.6867 10.8758 14.2269 11.7954C13.77 12.7092 13.3116 12.9664 13.0527 12.9968L12.6636 12.8953C12.4116 12.7511 12.092 12.4331 11.7731 11.7954C11.3133 10.8758 11 9.53527 11 8C11 6.46473 11.3133 5.12424 11.7731 4.20457C12.0924 3.56607 12.4124 3.24815 12.6645 3.10417L13.0519 3.00311C13.3107 3.0331 13.7696 3.28991 14.2269 4.20457C14.6867 5.12424 15 6.46473 15 8ZM12.2928 2.16768L1.41963 5.00415C0.628571 5.08768 0 6.39699 0 7.99992C0 9.60346 0.629045 10.9131 1.42053 10.9958L2.50023 11.2774V12.9998C2.50023 13.8283 3.17181 14.4998 4.00023 14.4998C4.82866 14.4998 5.50023 13.8283 5.50023 12.9998V12.0601L12.2914 13.8317C12.5186 13.9417 12.7559 14 13 14C14.6569 14 16 11.3137 16 8C16 4.68629 14.6569 2 13 2C12.7564 2 12.5196 2.05808 12.2928 2.16768ZM10.9931 3.5402L2.49607 5.75681C2.80523 6.30634 3 7.10764 3 7.99992C3 8.89214 2.80525 9.69339 2.49614 10.2429L10.9929 12.4595C10.3833 11.3612 10 9.77013 10 8C10 6.22968 10.3834 4.63843 10.9931 3.5402ZM2 7.99992C2 8.70677 1.85462 9.29725 1.66623 9.67403C1.59961 9.80728 1.54246 9.88955 1.5 9.93955C1.45754 9.88955 1.40039 9.80728 1.33377 9.67403C1.14538 9.29725 1 8.70677 1 7.99992C1 7.29308 1.14538 6.70259 1.33377 6.32582C1.40039 6.19256 1.45754 6.11029 1.5 6.06029C1.54246 6.11029 1.59961 6.19256 1.66623 6.32582C1.85462 6.70259 2 7.29308 2 7.99992ZM1.41964 10.0124C1.41962 10.0124 1.42071 10.0118 1.42296 10.0109C1.42079 10.0121 1.41966 10.0125 1.41964 10.0124ZM1.57704 10.0109C1.57929 10.0118 1.58038 10.0124 1.58036 10.0124C1.58033 10.0125 1.57921 10.0121 1.57704 10.0109ZM1.58036 5.9874C1.58038 5.98747 1.57929 5.98808 1.57704 5.98899C1.57921 5.98778 1.58034 5.98732 1.58036 5.9874ZM1.42296 5.98899C1.42071 5.98808 1.41962 5.98747 1.41964 5.9874C1.41966 5.98732 1.42079 5.98778 1.42296 5.98899ZM3.50023 12.9998V11.5383L4.50023 11.7992V12.9998C4.50023 13.276 4.27638 13.4998 4.00023 13.4998C3.72409 13.4998 3.50023 13.276 3.50023 12.9998Z",
				fill: "#6f6e84"
			});

			function SvgFeedback(t, r) {
				return o.createElement("svg", feedback_extends({
					width: 16,
					height: 16,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Qt)
			}
			var Jt = o.forwardRef(SvgFeedback);
			a.p;

			function file_extends() {
				return (file_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var er = o.createElement("rect", {
					x: 1,
					y: .5,
					width: 15,
					height: 15,
					rx: .5,
					stroke: "#6f6e84"
				}),
				tr = o.createElement("path", {
					d: "M3.92859 4.57141H10.7857M3.92859 7.99998H13.0714M3.92859 11.4286H10.7857",
					stroke: "#6f6e84"
				});

			function SvgFile(t, r) {
				return o.createElement("svg", file_extends({
					width: 17,
					height: 16,
					viewBox: "0 0 17 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), er, tr)
			}
			var rr = o.forwardRef(SvgFile);
			a.p;

			function heartbeat_extends() {
				return (heartbeat_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var nr = o.createElement("g", {
					clipPath: "url(#clip0)"
				}, o.createElement("path", {
					d: "M1.06668 8.32653H3.92061C4.2517 8.32653 4.54362 8.10944 4.63889 7.79236L6.00788 3.23625C6.23878 2.46781 7.35242 2.54979 7.4683 3.34377L8.94429 13.4572C9.06252 14.2673 10.2081 14.329 10.4126 13.5362L11.6115 8.88918C11.697 8.55797 11.9957 8.32653 12.3377 8.32653H14.9333",
					stroke: "#6f6e84",
					strokeLinecap: "round"
				})),
				ar = o.createElement("defs", null, o.createElement("clipPath", {
					id: "clip0"
				}, o.createElement("rect", {
					width: 16,
					height: 16,
					fill: "white"
				})));

			function SvgHeartbeat(t, r) {
				return o.createElement("svg", heartbeat_extends({
					width: 16,
					height: 16,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), nr, ar)
			}
			var or = o.forwardRef(SvgHeartbeat);
			a.p;

			function help_circle_extends() {
				return (help_circle_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var ir = o.createElement("rect", {
					x: .5,
					y: .5,
					width: 15,
					height: 15,
					rx: 7.5,
					stroke: "#6f6e84"
				}),
				sr = o.createElement("path", {
					d: "M8.05814 12C8.52326 12 8.81395 11.6643 8.81395 11.2727C8.81395 10.8811 8.52326 10.5455 8.05814 10.5455C7.59302 10.5455 7.30233 10.8811 7.30233 11.2727C7.30233 11.6643 7.59302 12 8.05814 12ZM7.4186 9.09091C7.4186 9.36898 7.64403 9.59441 7.9221 9.59441H8.0779C8.35597 9.59441 8.5814 9.36898 8.5814 9.09091C8.5814 7.8042 10.5 7.86014 10.5 6.06993C10.5 4.78322 9.45349 4 8 4C6.88596 4 6.01403 4.54361 5.65318 5.53378C5.53189 5.86659 5.81281 6.18182 6.16703 6.18182C6.45355 6.18182 6.68586 5.9675 6.81593 5.71221C7.03159 5.28895 7.4344 5.00699 8 5.00699C8.81395 5.00699 9.27907 5.45455 9.27907 6.06993C9.27907 7.41259 7.4186 7.18881 7.4186 9.09091Z",
					fill: "#6f6e84"
				});

			function SvgHelpCircle(t, r) {
				return o.createElement("svg", help_circle_extends({
					width: 16,
					height: 16,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), ir, sr)
			}
			var cr = o.forwardRef(SvgHelpCircle);
			a.p;

			function competition_extends() {
				return (competition_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var lr = o.createElement("path", {
				d: "M15 7.54551H11V2C11 1.49794 10.5021 0.909091 10 0.909091L6 0.909057C5.70712 0.909057 5 1.42206 5 2C5 2.5 5 5.49993 5 5.49993L1 5.49997C0.497939 5.49997 0 5.99794 0 6.5V13.0001C0 13.5021 0.497939 14.0001 1 14.0001L6 14L11 14.0001H15C15.5021 14.0001 16 13.5021 16 13.0001V8.54554C16 8.04348 15.5021 7.54551 15 7.54551ZM1 6.5L5 6.49997V13L1 13.0001V9.50006V6.5ZM6 6.2273V1.99997L10 2V7.54551V13.0001L6 13V6.2273ZM15 13.0001L11 13.0001V8.54554H15V13.0001Z",
				fill: "#6F6E84"
			});

			function SvgCompetition(t, r) {
				return o.createElement("svg", competition_extends({
					width: 16,
					height: 14,
					viewBox: "0 0 16 14",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), lr)
			}
			var Er = o.forwardRef(SvgCompetition);
			a.p;
			a.p;

			function mainnet_extends() {
				return (mainnet_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var ur = o.createElement("path", {
				d: "M7.99809 9.11285e-07C5.87686 9.11285e-07 3.84252 0.842654 2.34259 2.34259C0.842653 3.84252 0 5.87687 0 7.99809C0 8.25517 -3.83081e-08 8.50654 0.0399904 8.75791C0.187207 10.3005 0.779394 11.7672 1.74456 12.9796C2.70973 14.1919 4.00632 15.0978 5.4767 15.5871C6.94708 16.0763 8.52793 16.1279 10.0271 15.7355C11.5262 15.3432 12.8791 14.5237 13.9212 13.3768C14.9634 12.23 15.6499 10.805 15.8974 9.27527C16.1448 7.74551 15.9425 6.17681 15.3151 4.75986C14.6877 3.34291 13.6622 2.13873 12.3632 1.29372C11.0642 0.448715 9.54773 -0.000738675 7.99809 9.11285e-07V9.11285e-07ZM7.99809 1.14259C9.80448 1.14415 11.5373 1.85862 12.8198 3.13068C12.8198 3.31921 12.8198 3.50773 12.8198 3.70197C10.5618 2.92491 8.10728 2.93498 5.85574 3.73054C5.67588 3.55526 5.45009 3.43445 5.20447 3.38205H5.06165C4.99309 3.14211 4.93025 2.90217 4.87883 2.65651C4.82742 2.41085 4.79885 2.19376 4.77029 1.95953C5.76205 1.42433 6.87113 1.14362 7.99809 1.14259V1.14259ZM6.28421 4.49607C8.35896 3.8013 10.6075 3.82747 12.6655 4.57034C12.3872 6.02177 11.7793 7.38992 10.8888 8.56938C10.6397 8.4639 10.364 8.43858 10.0999 8.49693C9.83576 8.55528 9.59635 8.69442 9.41489 8.89502C9.21494 8.78076 9.01499 8.6665 8.8436 8.53511C7.69034 7.76563 6.72722 6.74391 6.02713 5.54725C6.14028 5.40695 6.22266 5.24441 6.26892 5.07021C6.31518 4.896 6.32428 4.71401 6.29564 4.53606L6.28421 4.49607ZM3.99904 2.43942C3.99904 2.55939 4.03332 2.68507 4.05617 2.80505C4.10759 3.05641 4.17615 3.30207 4.2447 3.54773C4.02593 3.67727 3.84986 3.86801 3.73819 4.09642C3.62653 4.32483 3.58415 4.58093 3.61628 4.83313C2.7145 5.42202 1.90901 6.14657 1.22828 6.98119C1.36487 6.07727 1.68087 5.2098 2.15769 4.42982C2.63451 3.64983 3.26252 2.97309 4.00476 2.43942H3.99904ZM3.99904 11.4144C3.77603 11.4893 3.57672 11.6217 3.42124 11.7982C3.26576 11.9748 3.15962 12.1892 3.11354 12.4199H2.74792C1.82532 11.3195 1.27353 9.95601 1.17115 8.52368L1.23399 8.41513C1.94937 7.30588 2.8846 6.3551 3.98191 5.62152C4.14642 5.79333 4.35433 5.91749 4.58362 5.98085C4.81291 6.0442 5.05506 6.0444 5.28445 5.98143C6.04859 7.27274 7.09312 8.37585 8.34086 9.20923C8.57509 9.36348 8.81504 9.5063 9.05498 9.64341C9.03578 9.86192 9.07112 10.0818 9.15781 10.2833C8.11233 11.1135 6.90638 11.7184 5.6158 12.06C5.46614 11.7803 5.22193 11.563 4.92681 11.4469C4.63168 11.3307 4.30487 11.3233 4.00476 11.4258L3.99904 11.4144ZM7.99809 14.8422C6.83621 14.8425 5.69358 14.5455 4.67888 13.9795L4.83884 13.9452C5.06618 13.8707 5.26933 13.7364 5.42709 13.5565C5.58486 13.3767 5.69146 13.1577 5.73577 12.9226C7.19656 12.5501 8.56032 11.8682 9.73482 10.9231C10.0138 11.0862 10.3433 11.1402 10.6597 11.0748C10.9761 11.0094 11.2572 10.8292 11.4487 10.5689C12.2547 10.7785 13.0839 10.8859 13.9167 10.8888H14.2195C13.6683 12.074 12.7898 13.077 11.6876 13.7794C10.5853 14.4819 9.30517 14.8546 7.99809 14.8536V14.8422ZM11.7172 9.75767C11.7166 9.51823 11.6515 9.28336 11.5287 9.07783C12.4794 7.83592 13.1411 6.39749 13.4654 4.86741C13.751 5.00071 14.0328 5.14925 14.3109 5.31302C14.9392 6.79776 15.0242 8.45645 14.5508 9.99761C13.6023 10.071 12.6482 9.99578 11.7229 9.77481L11.7172 9.75767Z",
				fill: "#6F6E84"
			});

			function SvgMainnet(t, r) {
				return o.createElement("svg", mainnet_extends({
					width: 16,
					height: 16,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), ur)
			}
			var dr = o.forwardRef(SvgMainnet);
			a.p;

			function privacy_extends() {
				return (privacy_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var _r = o.createElement("path", {
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: 2,
				d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
			});

			function SvgPrivacy(t, r) {
				return o.createElement("svg", privacy_extends({
					xmlns: "http://www.w3.org/2000/svg",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "#6f6e84",
					ref: r
				}, t), _r)
			}
			var Or = o.forwardRef(SvgPrivacy);
			a.p;

			function qr_extends() {
				return (qr_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Tr = o.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M16.429 0c-.436 0-.854.173-1.162.48a1.636 1.636 0 0 0-.481 1.158v4.914c0 .434.173.851.48 1.158.309.307.727.48 1.163.48h4.928c.436 0 .854-.173 1.162-.48.308-.307.481-.724.481-1.158V1.638c0-.434-.173-.851-.481-1.158A1.645 1.645 0 0 0 21.357 0H16.43Zm.821 2.389v3.344h3.354V2.389H17.25ZM1.643 0C1.207 0 .789.173.48.48A1.636 1.636 0 0 0 0 1.638v4.914c0 .434.173.851.481 1.158.308.307.726.48 1.162.48H6.57c.436 0 .854-.173 1.162-.48.308-.307.481-.724.481-1.158V1.638c0-.434-.173-.851-.48-1.158A1.645 1.645 0 0 0 6.57 0H1.643Zm.821 2.389v3.344h3.354V2.389H2.464ZM1.643 14.81c-.436 0-.854.173-1.162.48A1.636 1.636 0 0 0 0 16.448v4.914c0 .434.173.851.481 1.158.308.307.726.48 1.162.48H6.57c.436 0 .854-.173 1.162-.48.308-.307.481-.724.481-1.158v-4.914c0-.434-.173-.851-.48-1.158a1.646 1.646 0 0 0-1.163-.48H1.643Zm.821 2.389v3.344h3.354v-3.344H2.464Z",
					fill: "#807E98"
				}),
				Ir = o.createElement("path", {
					d: "M13.143 1.643a1.643 1.643 0 0 0-3.286 0v1.643a1.643 1.643 0 1 0 3.286 0V1.643ZM11.5 6.57a1.643 1.643 0 0 1 1.643 1.643v1.643h3.286a1.642 1.642 0 1 1 0 3.286H11.5A1.643 1.643 0 0 1 9.857 11.5V8.214A1.643 1.643 0 0 1 11.5 6.571Zm9.857 3.286a1.643 1.643 0 1 0 0 3.285 1.643 1.643 0 0 0 0-3.285Zm-11.5 6.572a1.643 1.643 0 0 1 1.643-1.643h1.643a1.643 1.643 0 0 1 0 3.285v3.286a1.643 1.643 0 1 1-3.286 0V16.43Zm-3.286-3.286a1.643 1.643 0 0 0 0-3.286H1.643a1.643 1.643 0 1 0 0 3.286H6.57ZM23 16.429a1.643 1.643 0 0 1-1.643 1.642h-3.286a1.643 1.643 0 1 1 0-3.285h3.286A1.643 1.643 0 0 1 23 16.429ZM21.357 23a1.643 1.643 0 1 0 0-3.286H16.43a1.643 1.643 0 0 0 0 3.286h4.928Z",
					fill: "#807E98"
				});

			function SvgQr(t, r) {
				return o.createElement("svg", qr_extends({
					width: 17,
					height: 17,
					viewBox: "0 0 23 23",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Tr, Ir)
			}
			var Sr = o.forwardRef(SvgQr);
			a.p;
			a.p;
			a.p;

			function terminal_extends() {
				return (terminal_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var pr = o.createElement("rect", {
					x: .5,
					y: 1.5,
					width: 15,
					height: 13,
					rx: .5,
					stroke: "#6f6e84"
				}),
				Rr = o.createElement("path", {
					d: "M3.67793 8.61754C3.46671 8.79542 3.43967 9.11084 3.61754 9.32207C3.79542 9.53329 4.11084 9.56033 4.32207 9.38246L3.67793 8.61754ZM6.375 7L6.69707 7.38246L7.15123 7L6.69707 6.61754L6.375 7ZM7 10.5C6.72386 10.5 6.5 10.7239 6.5 11C6.5 11.2761 6.72386 11.5 7 11.5V10.5ZM12 11.5C12.2761 11.5 12.5 11.2761 12.5 11C12.5 10.7239 12.2761 10.5 12 10.5V11.5ZM4.32207 4.61754C4.11084 4.43967 3.79542 4.46671 3.61754 4.67793C3.43967 4.88916 3.46671 5.20458 3.67793 5.38246L4.32207 4.61754ZM4.32207 9.38246L6.69707 7.38246L6.05293 6.61754L3.67793 8.61754L4.32207 9.38246ZM7 11.5H12V10.5H7V11.5ZM6.69707 6.61754L4.32207 4.61754L3.67793 5.38246L6.05293 7.38246L6.69707 6.61754Z",
					fill: "#6f6e84"
				});

			function SvgTerminal(t, r) {
				return o.createElement("svg", terminal_extends({
					width: 16,
					height: 16,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), pr, Rr)
			}
			var Ar = o.forwardRef(SvgTerminal);
			a.p;

			function testnet_extends() {
				return (testnet_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var fr = o.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M18.019 4V15.0386L6.27437 39.3014C5.48686 40.9283 6.16731 42.8855 7.79421 43.673C8.23876 43.8882 8.72624 44 9.22013 44H38.7874C40.5949 44 42.0602 42.5347 42.0602 40.7273C42.0602 40.2348 41.949 39.7488 41.7351 39.3052L30.0282 15.0386V4H18.019Z",
					strokeWidth: 4,
					strokeLinejoin: "round"
				}),
				br = o.createElement("path", {
					d: "M10.9604 29.9998C13.1241 31.3401 15.2893 32.0103 17.4559 32.0103C19.6226 32.0103 21.7908 31.3401 23.9605 29.9998C26.1088 28.6735 28.2664 28.0103 30.433 28.0103C32.5997 28.0103 34.7755 28.6735 36.9604 29.9998",
					strokeWidth: 4,
					strokeLinecap: "round"
				});

			function SvgTestnet(t, r) {
				return o.createElement("svg", testnet_extends({
					width: "16px",
					height: "16px",
					viewBox: "0 0 48 48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), fr, br)
			}
			var Nr = o.forwardRef(SvgTestnet);
			a.p;

			function download_extends() {
				return (download_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Cr = o.createElement("path", {
					d: "M7.96222 1L7.96225 9M7.96225 9L4.21417 5.55905M7.96225 9L11.7103 5.55905",
					stroke: "#FAFAFD",
					strokeWidth: 1.25,
					strokeLinecap: "round"
				}),
				yr = o.createElement("path", {
					d: "M14 11V14H2V11",
					stroke: "#FAFAFD",
					strokeWidth: 1.15,
					strokeLinecap: "round"
				});

			function SvgDownload(t, r) {
				return o.createElement("svg", download_extends({
					width: 16,
					height: 16,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Cr, yr)
			}
			var Dr = o.forwardRef(SvgDownload);
			a.p;

			function depth_chart_extends() {
				return (depth_chart_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var mr = o.createElement("path", {
				d: "M21.3397 5.5H19.3397V7.5H16.3397V9.5H13.3397M13.3397 9.5V15.5M13.3397 9.5H10.3397V7.5H7.33972V5.5H5.33972M3 19.5H23C24.1046 19.5 25 18.6046 25 17.5V3.5C25 2.39543 24.1046 1.5 23 1.5H3C1.89543 1.5 1 2.39543 1 3.5V17.5C1 18.6046 1.89543 19.5 3 19.5Z",
				stroke: "#6f6e84",
				strokeWidth: 1.25,
				strokeLinecap: "round"
			});

			function SvgDepthChart(t, r) {
				return o.createElement("svg", depth_chart_extends({
					width: 26,
					height: 21,
					viewBox: "0 0 26 21",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), mr)
			}
			var hr = o.forwardRef(SvgDepthChart);
			a.p;

			function funding_chart_extends() {
				return (funding_chart_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Lr = o.createElement("rect", {
					x: 1,
					y: 1.5,
					width: 24,
					height: 18,
					rx: 2,
					stroke: "#6f6e84",
					strokeWidth: 1.25
				}),
				gr = o.createElement("path", {
					d: "M24 9.40909H23.5031C22.6298 9.40909 21.8786 10.0271 21.7103 10.8841L21.5815 11.5397C21.343 12.7537 19.8177 13.1699 18.9957 12.2451V12.2451C18.1753 11.3222 16.6531 11.7347 16.4109 12.9456L16.3782 13.109C16.1826 14.0868 15.1408 14.6407 14.2209 14.256L14.1342 14.2197C13.7298 14.0506 13.4142 13.7207 13.2634 13.3092V13.3092C12.7294 11.853 10.6338 11.9647 10.2577 13.4693L10.2183 13.6266C9.83614 15.1555 7.71964 15.2991 7.13438 13.8359L6.48058 12.2014C6.18407 11.4602 5.50821 10.9385 4.71599 10.8395L2 10.5",
					stroke: "#6f6e84",
					strokeWidth: 1.25,
					strokeLinecap: "round"
				}),
				Pr = o.createElement("path", {
					opacity: .5,
					d: "M24 9H2",
					stroke: "#6f6e84",
					strokeWidth: .75,
					strokeLinecap: "round",
					strokeDasharray: "3 3"
				});

			function SvgFundingChart(t, r) {
				return o.createElement("svg", funding_chart_extends({
					width: 26,
					height: 21,
					viewBox: "0 0 26 21",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Lr, gr, Pr)
			}
			var vr = o.forwardRef(SvgFundingChart);
			a.p;

			function order_book_extends() {
				return (order_book_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var wr = o.createElement("path", {
				d: "M14.6016 6.5H20.6016M5.60156 6.5H11.6016M14.6016 10.5H20.6016M5.60156 10.5H11.6016M14.6016 14.5H20.6016M5.60156 14.5H11.6016M3 19.5H23C24.1046 19.5 25 18.6046 25 17.5V3.5C25 2.39543 24.1046 1.5 23 1.5H3C1.89543 1.5 1 2.39543 1 3.5V17.5C1 18.6046 1.89543 19.5 3 19.5Z",
				stroke: "#6f6e84",
				strokeWidth: 1.25,
				strokeLinecap: "round"
			});

			function SvgOrderBook(t, r) {
				return o.createElement("svg", order_book_extends({
					width: 26,
					height: 21,
					viewBox: "0 0 26 21",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), wr)
			}
			var Mr = o.forwardRef(SvgOrderBook);
			a.p;

			function order_canceled_extends() {
				return (order_canceled_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Ur = o.createElement("circle", {
					cx: 8,
					cy: 8,
					r: 7.5,
					stroke: "#f7f7f7"
				}),
				Gr = o.createElement("path", {
					d: "M5.14285 5.14282L10.8571 10.8571",
					stroke: "#f7f7f7",
					strokeWidth: 1.25,
					strokeLinecap: "round"
				}),
				jr = o.createElement("path", {
					d: "M10.8571 5.14282L5.14286 10.8571",
					stroke: "#f7f7f7",
					strokeWidth: 1.25,
					strokeLinecap: "round"
				});

			function SvgOrderCanceled(t, r) {
				return o.createElement("svg", order_canceled_extends({
					width: 16,
					height: 16,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Ur, Gr, jr)
			}
			var kr = o.forwardRef(SvgOrderCanceled);
			a.p;

			function order_filled_extends() {
				return (order_filled_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var xr = o.createElement("circle", {
					cx: 8,
					cy: 8,
					r: 7.5,
					stroke: "#57ffc3"
				}),
				Fr = o.createElement("circle", {
					cx: 8,
					cy: 8,
					r: 5,
					fill: "#57ffc3"
				});

			function SvgOrderFilled(t, r) {
				return o.createElement("svg", order_filled_extends({
					width: 16,
					height: 16,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), xr, Fr)
			}
			var Hr = o.forwardRef(SvgOrderFilled);
			a.p;

			function order_open_extends() {
				return (order_open_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Br = o.createElement("circle", {
				cx: 8,
				cy: 8,
				r: 7.5,
				stroke: "#f7f7f7"
			});

			function SvgOrderOpen(t, r) {
				return o.createElement("svg", order_open_extends({
					width: 16,
					height: 16,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Br)
			}
			var Wr = o.forwardRef(SvgOrderOpen);
			a.p;

			function order_partially_filled_extends() {
				return (order_partially_filled_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Yr = o.createElement("circle", {
					cx: 8,
					cy: 8,
					r: 7.5,
					stroke: "#ffb648"
				}),
				Kr = o.createElement("path", {
					d: "M8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3V13Z",
					fill: "#ffb648"
				});

			function SvgOrderPartiallyFilled(t, r) {
				return o.createElement("svg", order_partially_filled_extends({
					width: 16,
					height: 16,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Yr, Kr)
			}
			var Vr = o.forwardRef(SvgOrderPartiallyFilled);
			a.p;

			function order_pending_extends() {
				return (order_pending_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Zr = o.createElement("circle", {
				cx: 8,
				cy: 8,
				r: 7.5,
				stroke: "#f7f7f7",
				strokeDasharray: "3 3"
			});

			function SvgOrderPending(t, r) {
				return o.createElement("svg", order_pending_extends({
					width: 16,
					height: 16,
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Zr)
			}
			var zr = o.forwardRef(SvgOrderPending);
			a.p;

			function order_untriggered_extends() {
				return (order_untriggered_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Xr = o.createElement("circle", {
					cx: 8,
					cy: 8.5,
					r: 7.5,
					stroke: "#CCCBDC"
				}),
				qr = o.createElement("path", {
					d: "M3.95947 8.5H12.0407",
					stroke: "#C8C7D8",
					strokeWidth: 1.25,
					strokeLinecap: "round",
					strokeDasharray: "2 4"
				}),
				$r = o.createElement("path", {
					d: "M8 12.5404V4.45919",
					stroke: "#C8C7D8",
					strokeWidth: 1.25,
					strokeLinecap: "round",
					strokeDasharray: "2 4"
				});

			function SvgOrderUntriggered(t, r) {
				return o.createElement("svg", order_untriggered_extends({
					width: 16,
					height: 17,
					viewBox: "0 0 16 17",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Xr, qr, $r)
			}
			var Qr = o.forwardRef(SvgOrderUntriggered);
			a.p;

			function price_chart_extends() {
				return (price_chart_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Jr = o.createElement("path", {
				d: "M3.25 15.5C3.25 15.9142 3.58579 16.25 4 16.25C4.41421 16.25 4.75 15.9142 4.75 15.5H3.25ZM4.75 9.5C4.75 9.08579 4.41421 8.75 4 8.75C3.58579 8.75 3.25 9.08579 3.25 9.5H4.75ZM6.25 13.5C6.25 13.9142 6.58579 14.25 7 14.25C7.41421 14.25 7.75 13.9142 7.75 13.5H6.25ZM7.75 7.5C7.75 7.08579 7.41421 6.75 7 6.75C6.58579 6.75 6.25 7.08579 6.25 7.5H7.75ZM9.25 11.5C9.25 11.9142 9.58579 12.25 10 12.25C10.4142 12.25 10.75 11.9142 10.75 11.5H9.25ZM10.75 5.5C10.75 5.08579 10.4142 4.75 10 4.75C9.58579 4.75 9.25 5.08579 9.25 5.5H10.75ZM12.25 13.5C12.25 13.9142 12.5858 14.25 13 14.25C13.4142 14.25 13.75 13.9142 13.75 13.5H12.25ZM13.75 7.5C13.75 7.08579 13.4142 6.75 13 6.75C12.5858 6.75 12.25 7.08579 12.25 7.5H13.75ZM15.25 15.5C15.25 15.9142 15.5858 16.25 16 16.25C16.4142 16.25 16.75 15.9142 16.75 15.5H15.25ZM16.75 9.5C16.75 9.08579 16.4142 8.75 16 8.75C15.5858 8.75 15.25 9.08579 15.25 9.5H16.75ZM18.25 13.5C18.25 13.9142 18.5858 14.25 19 14.25C19.4142 14.25 19.75 13.9142 19.75 13.5H18.25ZM19.75 7.5C19.75 7.08579 19.4142 6.75 19 6.75C18.5858 6.75 18.25 7.08579 18.25 7.5H19.75ZM21.25 10.5C21.25 10.9142 21.5858 11.25 22 11.25C22.4142 11.25 22.75 10.9142 22.75 10.5H21.25ZM22.75 4.5C22.75 4.08579 22.4142 3.75 22 3.75C21.5858 3.75 21.25 4.08579 21.25 4.5H22.75ZM3 2.25H23V0.75H3V2.25ZM24.25 3.5V17.5H25.75V3.5H24.25ZM23 18.75H3V20.25H23V18.75ZM1.75 17.5V3.5H0.25V17.5H1.75ZM3 18.75C2.30964 18.75 1.75 18.1904 1.75 17.5H0.25C0.25 19.0188 1.48122 20.25 3 20.25V18.75ZM24.25 17.5C24.25 18.1904 23.6904 18.75 23 18.75V20.25C24.5188 20.25 25.75 19.0188 25.75 17.5H24.25ZM23 2.25C23.6904 2.25 24.25 2.80964 24.25 3.5H25.75C25.75 1.98122 24.5188 0.75 23 0.75V2.25ZM3 0.75C1.48122 0.75 0.25 1.98122 0.25 3.5H1.75C1.75 2.80964 2.30964 2.25 3 2.25V0.75ZM4.75 15.5V9.5H3.25V15.5H4.75ZM7.75 13.5V7.5H6.25V13.5H7.75ZM10.75 11.5V5.5H9.25V11.5H10.75ZM13.75 13.5V7.5H12.25V13.5H13.75ZM16.75 15.5V9.5H15.25V15.5H16.75ZM19.75 13.5V7.5H18.25V13.5H19.75ZM22.75 10.5V4.5H21.25V10.5H22.75Z",
				fill: "#6f6e84"
			});

			function SvgPriceChart(t, r) {
				return o.createElement("svg", price_chart_extends({
					width: 26,
					height: 21,
					viewBox: "0 0 26 21",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), Jr)
			}
			var en = o.forwardRef(SvgPriceChart);
			a.p;

			function bar_chart_3_extends() {
				return (bar_chart_3_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var tn = o.createElement("path", {
					d: "M0 11.3333C0 10.597 0.596954 10 1.33333 10H2.66667C3.40305 10 4 10.597 4 11.3333V16.6667C4 17.403 3.40305 18 2.66667 18H1.33333C0.596954 18 0 17.403 0 16.6667V11.3333Z",
					fill: "#FAFAFD"
				}),
				rn = o.createElement("path", {
					d: "M7 7.33333C7 6.59695 7.59695 6 8.33333 6H9.66667C10.403 6 11 6.59695 11 7.33333V16.6667C11 17.403 10.403 18 9.66667 18H8.33333C7.59695 18 7 17.403 7 16.6667V7.33333Z",
					fill: "#FAFAFD"
				}),
				nn = o.createElement("path", {
					d: "M14 1.38462C14 0.619913 14.597 0 15.3333 0H16.6667C17.403 0 18 0.619913 18 1.38462V16.6154C18 17.3801 17.403 18 16.6667 18H15.3333C14.597 18 14 17.3801 14 16.6154V1.38462Z",
					fill: "#FAFAFD"
				});

			function SvgBarChart3(t, r) {
				return o.createElement("svg", bar_chart_3_extends({
					width: 18,
					height: 18,
					viewBox: "0 0 18 18",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), tn, rn, nn)
			}
			var an = o.forwardRef(SvgBarChart3);
			a.p;

			function gear_8_extends() {
				return (gear_8_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var on = o.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M10.6763 1.31629C10.2488 -0.438764 7.75121 -0.438764 7.3237 1.31629C7.25987 1.58002 7.13468 1.82495 6.95831 2.03115C6.78194 2.23735 6.55938 2.399 6.30874 2.50294C6.0581 2.60689 5.78646 2.65018 5.51592 2.62931C5.24538 2.60843 4.9836 2.52398 4.75187 2.38282C3.20832 1.44229 1.44201 3.2086 2.38254 4.75215C2.99006 5.74893 2.45117 7.04947 1.31713 7.3251C-0.439045 7.75149 -0.439045 10.2502 1.31713 10.6755C1.58093 10.7394 1.8259 10.8647 2.03211 11.0412C2.23831 11.2177 2.39991 11.4404 2.50375 11.6912C2.6076 11.9419 2.65074 12.2137 2.62968 12.4843C2.60862 12.7549 2.52394 13.0167 2.38254 13.2484C1.44201 14.792 3.20832 16.5583 4.75187 15.6177C4.98356 15.4763 5.24537 15.3917 5.51597 15.3706C5.78658 15.3495 6.05834 15.3927 6.30912 15.4965C6.5599 15.6004 6.7826 15.762 6.95911 15.9682C7.13561 16.1744 7.26091 16.4193 7.32482 16.6831C7.75121 18.4393 10.2499 18.4393 10.6752 16.6831C10.7393 16.4195 10.8647 16.1747 11.0413 15.9686C11.2178 15.7626 11.4405 15.6011 11.6912 15.4972C11.9419 15.3934 12.2135 15.3502 12.4841 15.3712C12.7546 15.3921 13.0164 15.4766 13.2481 15.6177C14.7917 16.5583 16.558 14.792 15.6175 13.2484C15.4763 13.0167 15.3918 12.7549 15.3709 12.4844C15.35 12.2138 15.3932 11.9422 15.497 11.6915C15.6008 11.4408 15.7623 11.2181 15.9683 11.0416C16.1744 10.865 16.4192 10.7396 16.6829 10.6755C18.439 10.2491 18.439 7.75037 16.6829 7.3251C16.4191 7.2612 16.1741 7.13589 15.9679 6.95939C15.7617 6.78288 15.6001 6.56018 15.4962 6.3094C15.3924 6.05862 15.3493 5.78686 15.3703 5.51625C15.3914 5.24565 15.4761 4.98384 15.6175 4.75215C16.558 3.2086 14.7917 1.44229 13.2481 2.38282C13.0164 2.52422 12.7546 2.6089 12.484 2.62996C12.2134 2.65102 11.9417 2.60788 11.6909 2.50403C11.4401 2.40019 11.2174 2.23859 11.0409 2.03239C10.8644 1.82619 10.7391 1.58121 10.6752 1.31742L10.6763 1.31629ZM9 12.3754C9.89513 12.3754 10.7536 12.0198 11.3866 11.3868C12.0195 10.7539 12.3751 9.89541 12.3751 9.00028C12.3751 8.10515 12.0195 7.24668 11.3866 6.61372C10.7536 5.98077 9.89513 5.62518 9 5.62518C8.10487 5.62518 7.2464 5.98077 6.61344 6.61372C5.98049 7.24668 5.62489 8.10515 5.62489 9.00028C5.62489 9.89541 5.98049 10.7539 6.61344 11.3868C7.2464 12.0198 8.10487 12.3754 9 12.3754Z",
				fill: "#FAFAFD"
			});

			function SvgGear8(t, r) {
				return o.createElement("svg", gear_8_extends({
					width: 18,
					height: 18,
					viewBox: "0 0 18 18",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), on)
			}
			var sn = o.forwardRef(SvgGear8);
			a.p;

			function giftbox_extends() {
				return (giftbox_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			var cn = o.createElement("g", {
					clipPath: "url(#clip0_10710_113044)"
				}, o.createElement("path", {
					d: "M23.75 6.25H20.25C20.875 5.625 21.25 4.75 21.25 3.75C21.25 1.625 19.625 0 17.5 0C16.25 0 14 1.125 12.5 2.625C11 1.125 8.75 0 7.5 0C5.375 0 3.75 1.625 3.75 3.75C3.75 4.75 4.125 5.625 4.75 6.25H1.25C0.5 6.25 0 6.75 0 7.5V11C0 11.125 0.125 11.25 0.25 11.25H10.75C11 11.25 11.25 11 11.25 10.75V6.75C11.25 6.5 11.5 6.25 11.75 6.25H13.25C13.5 6.25 13.75 6.5 13.75 6.75V10.75C13.75 11 14 11.25 14.25 11.25H24.75C24.875 11.25 25 11.125 25 11V7.5C25 6.75 24.5 6.25 23.75 6.25ZM7.5 5C6.75 5 6.25 4.5 6.25 3.75C6.25 3 6.75 2.5 7.5 2.5C8.25 2.5 10.5 4 11.125 4.75C10.75 4.875 7.5 5 7.5 5ZM17.5 5C17.5 5 14.25 4.875 13.875 4.75C14.625 3.875 16.75 2.5 17.5 2.5C18.25 2.5 18.75 3 18.75 3.75C18.75 4.5 18.25 5 17.5 5Z",
					fill: "#FAFAFD"
				}), o.createElement("path", {
					d: "M10.7497 13.7502H1.49976C1.37476 13.7502 1.24976 13.8752 1.24976 14.0002V23.7502C1.24976 24.5002 1.74975 25.0002 2.49975 25.0002H10.7497C10.9997 25.0002 11.2497 24.7502 11.2497 24.5002V14.2502C11.2497 14.0002 10.9997 13.7502 10.7497 13.7502Z",
					fill: "#FAFAFD"
				}), o.createElement("path", {
					d: "M23.4999 13.7502H14.2498C13.9998 13.7502 13.7498 14.0002 13.7498 14.2502V24.5002C13.7498 24.7502 13.9998 25.0002 14.2498 25.0002H22.4999C23.2499 25.0002 23.7499 24.5002 23.7499 23.7502V14.0002C23.7499 13.8752 23.6249 13.7502 23.4999 13.7502Z",
					fill: "#FAFAFD"
				})),
				ln = o.createElement("defs", null, o.createElement("clipPath", {
					id: "clip0_10710_113044"
				}, o.createElement("rect", {
					width: 25,
					height: 25,
					fill: "white"
				})));

			function SvgGiftbox(t, r) {
				return o.createElement("svg", giftbox_extends({
					width: 25,
					height: 25,
					viewBox: "0 0 25 25",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					ref: r
				}, t), cn, ln)
			}
			var En = o.forwardRef(SvgGiftbox);
			a.p;
			a.p
		},
		150: function(t, r, a) {
			"use strict";
			a.d(r, "b", (function() {
				return getHasUnseenNotifications
			})), a.d(r, "a", (function() {
				return getCurrentNotifications
			}));
			var o = a(25),
				i = a.n(o);
			const getHasUnseenNotifications = t => i()(t, "notifications.hasUnseenNotifications"),
				getCurrentNotifications = t => i()(t, "notifications.notifications")
		},
		155: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return S
			}));
			var o = a(592),
				i = a.n(o),
				c = a(0),
				l = a.n(c),
				E = a(1),
				u = a.n(E),
				d = a(13),
				_ = a.n(d),
				O = "_2-Vh69iM6DcZ9FZIUyyClA",
				T = "_9d5HafWqJ4FyjeNgb21HD",
				I = "_2pkRJC28YSHTopZY03YVFg";
			const LoadingDots = ({
				className: t,
				justifyRight: r,
				size: a = 4
			}) => {
				const o = [];
				return i()(3, t => o.push(l.a.createElement("i", {
					key: t,
					style: {
						width: a,
						height: a
					}
				}))), l.a.createElement("div", {
					className: _()(O, t)
				}, l.a.createElement("span", {
					className: _()(T, {
						[I]: r
					})
				}, o))
			};
			LoadingDots.propTypes = {
				className: u.a.string,
				justifyRight: u.a.bool,
				size: u.a.number
			};
			var S = LoadingDots
		},
		1594: function(t, r) {},
		16: function(t, r, a) {
			"use strict";
			a.d(r, "D", (function() {
				return l
			})), a.d(r, "y", (function() {
				return E
			})), a.d(r, "E", (function() {
				return u
			})), a.d(r, "g", (function() {
				return d
			})), a.d(r, "s", (function() {
				return _
			})), a.d(r, "t", (function() {
				return O
			})), a.d(r, "u", (function() {
				return T
			})), a.d(r, "C", (function() {
				return I
			})), a.d(r, "B", (function() {
				return S
			})), a.d(r, "i", (function() {
				return p
			})), a.d(r, "j", (function() {
				return R
			})), a.d(r, "h", (function() {
				return A
			})), a.d(r, "b", (function() {
				return b
			})), a.d(r, "c", (function() {
				return N
			})), a.d(r, "d", (function() {
				return C
			})), a.d(r, "e", (function() {
				return y
			})), a.d(r, "k", (function() {
				return D
			})), a.d(r, "l", (function() {
				return m
			})), a.d(r, "f", (function() {
				return h
			})), a.d(r, "a", (function() {
				return L
			})), a.d(r, "o", (function() {
				return g
			})), a.d(r, "p", (function() {
				return P
			})), a.d(r, "n", (function() {
				return v
			})), a.d(r, "q", (function() {
				return w
			})), a.d(r, "m", (function() {
				return M
			})), a.d(r, "v", (function() {
				return U
			})), a.d(r, "r", (function() {
				return G
			})), a.d(r, "x", (function() {
				return j
			})), a.d(r, "A", (function() {
				return k
			})), a.d(r, "w", (function() {
				return x
			})), a.d(r, "z", (function() {
				return H
			}));
			var o = a(186),
				i = a.n(o),
				c = a(2);
			const l = {
					MARKET: "MARKET",
					LIMIT: "LIMIT",
					STOP_LIMIT: "STOP_LIMIT",
					STOP_MARKET: "STOP_MARKET",
					TAKE_PROFIT: "TAKE_PROFIT",
					TAKE_PROFIT_MARKET: "TAKE_PROFIT_MARKET",
					TRAILING_STOP: "TRAILING_STOP"
				},
				E = [l.LIMIT, l.STOP_LIMIT, l.STOP_MARKET, l.TAKE_PROFIT, l.TAKE_PROFIT_MARKET],
				u = [l.STOP_MARKET, l.TAKE_PROFIT_MARKET],
				d = {
					MAKER: "MAKER",
					TAKER: "TAKER"
				},
				_ = {
					DEFAULT: "DEFAULT",
					FILL_OR_KILL: "FILL_OR_KILL",
					IMMEDIATE_OR_CANCEL: "IMMEDIATE_OR_CANCEL",
					POST_ONLY: "POST_ONLY"
				},
				O = {
					[_.DEFAULT]: c.a.DEFAULT,
					[_.FILL_OR_KILL]: c.a.FILL_OR_KILL,
					[_.IMMEDIATE_OR_CANCEL]: c.a.IMMEDIATE_OR_CANCEL,
					[_.POST_ONLY]: c.a.POST_ONLY
				},
				T = {
					[_.DEFAULT]: "default-execution",
					[_.FILL_OR_KILL]: "fill-or-kill",
					[_.IMMEDIATE_OR_CANCEL]: "immediate-or-cancel",
					[_.POST_ONLY]: "post-only"
				},
				I = {
					GTT: "GTT",
					FOK: "FOK",
					IOC: "IOC"
				},
				S = {
					[I.GTT]: c.a.GOOD_TIL_TIME,
					[I.FOK]: c.a.FILL_OR_KILL,
					[I.IOC]: c.a.IMMEDIATE_OR_CANCEL
				},
				p = {
					MINUTES: "MINUTES",
					HOURS: "HOURS",
					DAYS: "DAYS",
					WEEKS: "WEEKS"
				},
				R = {
					[p.MINUTES]: c.a.MINUTES_SHORT,
					[p.HOURS]: c.a.HOURS,
					[p.DAYS]: c.a.DAYS,
					[p.WEEKS]: c.a.WEEKS
				},
				A = 1e3,
				b = {
					CANCELED_ON_CHAIN: "CANCELED_ON_CHAIN",
					COULD_NOT_FILL: "COULD_NOT_FILL",
					EXPIRED: "EXPIRED",
					FAILED: "FAILED",
					IMMEDIATE_OR_CANCEL: "IMMEDIATE_OR_CANCEL_PARTIALLY_FILLED",
					POST_ONLY_WOULD_CROSS: "POST_ONLY_WOULD_CROSS",
					SELF_TRADE: "SELF_TRADE",
					UNDERCOLLATERALIZED: "UNDERCOLLATERALIZED",
					USER_CANCELED: "USER_CANCELED"
				},
				N = {
					[b.CANCELED_ON_CHAIN]: c.a.CANCELED_ON_CHAIN,
					[b.COULD_NOT_FILL]: c.a.COULD_NOT_FILL,
					[b.EXPIRED]: c.a.ORDER_EXPIRED,
					[b.FAILED]: c.a.FAILED,
					[b.IMMEDIATE_OR_CANCEL]: c.a.IMMEDIATE_OR_CANCEL_PARTIALLY_FILLED,
					[b.POST_ONLY_WOULD_CROSS]: c.a.POST_ONLY_WOULD_CROSS,
					[b.SELF_TRADE]: c.a.SELF_TRADE,
					[b.UNDERCOLLATERALIZED]: c.a.UNDERCOLLATERALIZED,
					[b.USER_CANCELED]: c.a.USER_CANCELED
				},
				C = {
					amountInput: "",
					limitPriceInput: "",
					stopPriceInput: "",
					takeProfitPriceInput: "",
					trailingPercentInput: "",
					usdAmountInput: ""
				},
				y = {
					limitPriceInput: "",
					stopPriceInput: "",
					takeProfitPriceInput: "",
					trailingPercentInput: "",
					usdAmountInput: ""
				},
				D = ["showInlineDepositModal", "showInlineWithdrawModal", "showInlineClosePositionModal", "showInlineMobileTradeBox"],
				m = {
					INDEX_PRICE: "INDEX_PRICE",
					ORACLE_PRICE: "ORACLE_PRICE",
					CHANGE_24H: "CHANGE_24H",
					OPEN_INTEREST: "OPEN_INTEREST",
					FUNDING_RATE: "FUNDING_RATE",
					VOLUME_24H: "VOLUME_24H",
					TRADES_24H: "TRADES_24H",
					NEXT_FUNDING: "NEXT_FUNDING"
				},
				h = i()(D, (t, r) => (t[r] = !1, t), {}),
				L = {
					AMOUNT_INPUT: "AMOUNT_INPUT",
					USD_INPUT: "USD_INPUT"
				},
				g = .05,
				P = .01,
				v = 20,
				w = .005,
				M = .02,
				U = .1,
				G = 20,
				j = .05,
				k = .1,
				x = .1,
				H = .2
		},
		163: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return o
			}));
			const o = "dydx-alpha.consenlabs.com" === window.location.hostname
		},
		164: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return c
			})), a.d(r, "b", (function() {
				return l
			})), a.d(r, "c", (function() {
				return useBreakpoints
			}));
			var o = a(0),
				i = a(17);

			function _slicedToArray(t, r) {
				return function _arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function _iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function _unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return _arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return _arrayLikeToArray(t, r)
				}(t, r) || function _nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}

			function ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function _defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const c = {
					isMobileTiny: window.matchMedia(i.a.mobileTiny),
					isMobile: window.matchMedia(i.a.mobile),
					isNotMobile: window.matchMedia(i.a.notMobile),
					isTablet: window.matchMedia(i.a.tablet),
					isNotTablet: window.matchMedia(i.a.notTablet),
					isDesktopSmall: window.matchMedia(i.a.desktopSmall),
					isDesktopMedium: window.matchMedia(i.a.desktopMedium),
					isDesktopLarge: window.matchMedia(i.a.desktopLarge)
				},
				l = function _objectSpread(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = null != arguments[r] ? arguments[r] : {};
						r % 2 ? ownKeys(Object(a), !0).forEach((function(r) {
							_defineProperty(t, r, a[r])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach((function(r) {
							Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
						}))
					}
					return t
				}({}, c);
			delete l.isNotMobile, delete l.isNotTablet;
			const useBreakpoints = () => {
				const t = Object.fromEntries(Object.entries(c).map(([t, r]) => [t, Object(o.useState)(r.matches)]));
				Object(o.useEffect)(() => {
					const r = {};
					return Object.entries(c).forEach(([a, o]) => {
						const i = _slicedToArray(t[a], 2)[1];
						r[a] = t => {
							i(t.matches)
						}, o.addEventListener ? o.addEventListener("change", r[a]) : o.addListener && o.addListener(r[a])
					}), () => {
						Object.entries(c).forEach(([t, a]) => {
							a.removeEventListener ? a.removeEventListener("change", r[t]) : a.removeListener && a.removeListener(r[t])
						})
					}
				}, []);
				return Object.fromEntries(Object.entries(t).map(([t, [r]]) => [t, r]))
			}
		},
		167: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return getCurrentTradeData
			}));
			var o = a(25),
				i = a.n(o);
			const getCurrentTradeData = t => i()(t, "tradeData")
		},
		1675: function(t, r, a) {
			var o = {
				"./en": [227, 9],
				"./en/": [227, 9],
				"./en/app": [426, 3],
				"./en/app.json": [426, 3],
				"./en/errors": [427, 3],
				"./en/errors.json": [427, 3],
				"./en/index": [227, 9],
				"./en/index.js": [227, 9],
				"./en/tooltips": [428, 3],
				"./en/tooltips.json": [428, 3],
				"./en/warnings": [429, 3],
				"./en/warnings.json": [429, 3],
				"./es": [466, 9, 2, 12],
				"./es/": [466, 9, 2, 12],
				"./es/app": [916, 3, 2],
				"./es/app.json": [916, 3, 2],
				"./es/errors": [888, 3, 27],
				"./es/errors.json": [888, 3, 27],
				"./es/index": [466, 9, 2, 12],
				"./es/index.js": [466, 9, 2, 12],
				"./es/tooltips": [889, 3, 28],
				"./es/tooltips.json": [889, 3, 28],
				"./es/warnings": [890, 3, 29],
				"./es/warnings.json": [890, 3, 29],
				"./fr": [467, 9, 3, 13],
				"./fr/": [467, 9, 3, 13],
				"./fr/app": [917, 3, 3],
				"./fr/app.json": [917, 3, 3],
				"./fr/errors": [891, 3, 30],
				"./fr/errors.json": [891, 3, 30],
				"./fr/index": [467, 9, 3, 13],
				"./fr/index.js": [467, 9, 3, 13],
				"./fr/tooltips": [892, 3, 31],
				"./fr/tooltips.json": [892, 3, 31],
				"./fr/warnings": [893, 3, 32],
				"./fr/warnings.json": [893, 3, 32],
				"./ja": [468, 9, 4, 14],
				"./ja/": [468, 9, 4, 14],
				"./ja/app": [918, 3, 4],
				"./ja/app.json": [918, 3, 4],
				"./ja/errors": [894, 3, 33],
				"./ja/errors.json": [894, 3, 33],
				"./ja/index": [468, 9, 4, 14],
				"./ja/index.js": [468, 9, 4, 14],
				"./ja/tooltips": [895, 3, 34],
				"./ja/tooltips.json": [895, 3, 34],
				"./ja/warnings": [896, 3, 35],
				"./ja/warnings.json": [896, 3, 35],
				"./ko": [469, 9, 5, 15],
				"./ko/": [469, 9, 5, 15],
				"./ko/app": [919, 3, 5],
				"./ko/app.json": [919, 3, 5],
				"./ko/errors": [897, 3, 36],
				"./ko/errors.json": [897, 3, 36],
				"./ko/index": [469, 9, 5, 15],
				"./ko/index.js": [469, 9, 5, 15],
				"./ko/tooltips": [898, 3, 37],
				"./ko/tooltips.json": [898, 3, 37],
				"./ko/warnings": [899, 3, 38],
				"./ko/warnings.json": [899, 3, 38],
				"./pt": [470, 9, 6, 16],
				"./pt/": [470, 9, 6, 16],
				"./pt/app": [920, 3, 6],
				"./pt/app.json": [920, 3, 6],
				"./pt/errors": [900, 3, 39],
				"./pt/errors.json": [900, 3, 39],
				"./pt/index": [470, 9, 6, 16],
				"./pt/index.js": [470, 9, 6, 16],
				"./pt/tooltips": [901, 3, 40],
				"./pt/tooltips.json": [901, 3, 40],
				"./pt/warnings": [902, 3, 41],
				"./pt/warnings.json": [902, 3, 41],
				"./ru": [471, 9, 7, 17],
				"./ru/": [471, 9, 7, 17],
				"./ru/app": [921, 3, 7],
				"./ru/app.json": [921, 3, 7],
				"./ru/errors": [903, 3, 42],
				"./ru/errors.json": [903, 3, 42],
				"./ru/index": [471, 9, 7, 17],
				"./ru/index.js": [471, 9, 7, 17],
				"./ru/tooltips": [904, 3, 43],
				"./ru/tooltips.json": [904, 3, 43],
				"./ru/warnings": [905, 3, 44],
				"./ru/warnings.json": [905, 3, 44],
				"./tr": [472, 9, 8, 18],
				"./tr/": [472, 9, 8, 18],
				"./tr/app": [922, 3, 8],
				"./tr/app.json": [922, 3, 8],
				"./tr/errors": [906, 3, 45],
				"./tr/errors.json": [906, 3, 45],
				"./tr/index": [472, 9, 8, 18],
				"./tr/index.js": [472, 9, 8, 18],
				"./tr/tooltips": [907, 3, 46],
				"./tr/tooltips.json": [907, 3, 46],
				"./tr/warnings": [908, 3, 47],
				"./tr/warnings.json": [908, 3, 47],
				"./zh-CN": [473, 9, 9, 19],
				"./zh-CN/": [473, 9, 9, 19],
				"./zh-CN/app": [923, 3, 9],
				"./zh-CN/app.json": [923, 3, 9],
				"./zh-CN/errors": [909, 3, 48],
				"./zh-CN/errors.json": [909, 3, 48],
				"./zh-CN/index": [473, 9, 9, 19],
				"./zh-CN/index.js": [473, 9, 9, 19],
				"./zh-CN/tooltips": [910, 3, 49],
				"./zh-CN/tooltips.json": [910, 3, 49],
				"./zh-CN/warnings": [911, 3, 50],
				"./zh-CN/warnings.json": [911, 3, 50]
			};

			function webpackAsyncContext(t) {
				if (!a.o(o, t)) return Promise.resolve().then((function() {
					var r = new Error("Cannot find module '" + t + "'");
					throw r.code = "MODULE_NOT_FOUND", r
				}));
				var r = o[t],
					i = r[0];
				return Promise.all(r.slice(2).map(a.e)).then((function() {
					return a.t(i, r[1])
				}))
			}
			webpackAsyncContext.keys = function webpackAsyncContextKeys() {
				return Object.keys(o)
			}, webpackAsyncContext.id = 1675, t.exports = webpackAsyncContext
		},
		168: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return getAccount
			}));
			var o = a(25),
				i = a.n(o);
			const getAccount = t => i()(t, "account.account")
		},
		17: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return i
			})), a.d(r, "c", (function() {
				return l
			})), a.d(r, "d", (function() {
				return E
			})), a.d(r, "f", (function() {
				return u
			})), a.d(r, "e", (function() {
				return d
			})), a.d(r, "b", (function() {
				return O
			})), a.d(r, "g", (function() {
				return I
			}));
			var o = a(19);
			const i = {
				mobileTiny: `(max-width: ${o.e}px)`,
				mobile: `(max-width: ${o.d}px)`,
				notMobile: `(min-width: calc(${o.d}px + 1px))`,
				tablet: `(max-width: ${o.f}px)`,
				notTablet: `(min-width: calc(${o.f}px + 1px))`,
				desktopSmall: `(max-width: ${o.c}px)`,
				desktopMedium: `(max-width: ${o.b}px)`,
				desktopLarge: `(max-width: ${o.a}px)`
			};
			var c = a(8),
				l = c.b`
  --color-layer-darkest: #0b0b13;
  --color-layer-darker: #12121a;
  --color-layer-dark: #171722;
  --color-layer-base: #1c1c28;
  --color-layer-light: #232334;
  --color-layer-lighter: #303044;
  --color-layer-lightest: #454258;

  --color-loading-bar-shine: #51516d;
  --color-border-grey: #2d2d3d;
  --color-border-lighter: #393953;

  --color-text-light: #f7f7f7;
  --color-text-base: #c3c2d4;
  --color-text-dark: #6f6e84;

  --color-purple: #5973fe;
  --color-green: #3fb68b;
  --color-red: #ff5353;
  --color-yellow: #ffb648;

  --color-bronze: #ba6c38;
  --color-silver: #c1c1c1;
  --color-gold: #ffb846;
  --color-platinum: #7af6c2;
  --color-diamond: #915eff;
`,
				E = c.b`
  // Header + footer constants
  --page-header-height: 48px;
  --page-footer-height: 36px;
  --page-footer-height-mobile: 68px;

  // Sidebar constants
  --sidebar-width: 324px;
  --collapsed-sidebar-width: 56px;
  --page-content-max-width: 1280px;

  // Trade constants
  --market-info-row-height: 48px;
  --market-info-row-height-mobile: 72px;

  --inline-tabs-height: 44px;
  --inline-tabs-height-mobile: 72px;

  --orderbook-trades-width: 300px;
  --table-header-height: 40px;
  --table-header-height-mobile: 52px;

  --position-details-width: 368px;

  // Auto grid constants
  --single-unit-min-width: 250px;
  --single-unit-max-width: 375px;
  --single-unit-height: 150px;

  // Modal constants
  --sidebar-modal-width: 300px;
  --modal-small-width: 300px;
  --modal-medium-width: 328px;
  --modal-large-width: 420px;
  --modal-header-height: 64px;
`;
			const u = {
					regular: c.b`
    font-family: 'Relative Pro';
    font-weight: 400;
    font-feature-settings: 'zero' 0;
  `,
					medium: c.b`
    font-family: 'Relative Pro';
    font-weight: 500;
    font-feature-settings: 'zero' 0;
  `,
					bold: c.b`
    font-family: 'Relative Pro';
    font-weight: 700;
    font-feature-settings: 'zero' 0;
  `,
					monoRegular: c.b`
    font-family: 'Relative Mono';
    font-weight: 400;
    font-feature-settings: 'zero' 1;
  `
				},
				d = {
					size10: c.b`
    font-size: 10px;
    line-height: 16px;
  `,
					size11: c.b`
    font-size: 11px;
    line-height: 16px;
  `,
					size12: c.b`
    font-size: 12px;
    line-height: 16px;
  `,
					size13: c.b`
    font-size: 13px;
    line-height: 16px;
  `,
					size14: c.b`
    font-size: 14px;
    line-height: 18px;
  `,
					size15: c.b`
    font-size: 15px;
    line-height: 20px;
  `,
					size16: c.b`
    font-size: 16px;
    line-height: 20px;
  `,
					size17: c.b`
    font-size: 17px;
    line-height: 20px;
  `,
					size18: c.b`
    font-size: 18px;
    line-height: 22px;
  `,
					size20: c.b`
    font-size: 20px;
    line-height: 24px;
  `,
					size22: c.b`
    font-size: 22px;
    line-height: 28px;
  `,
					size24: c.b`
    font-size: 24px;
    line-height: 30px;
  `,
					size26: c.b`
    font-size: 26px;
    line-height: 32px;
  `,
					size28: c.b`
    font-size: 28px;
    line-height: 32px;
  `,
					size32: c.b`
    font-size: 32px;
    line-height: 40px;
  `
				},
				_ = c.b`
  user-select: none;
  transition: all 0.15s ease-in-out !important;
`,
				O = c.b`
  ${_}

  svg,
  svg * {
    transition: all 0.15s ease-in-out !important;
  }
`,
				T = c.b`
  @-moz-document url-prefix() {
    background-color: rgba(11, 11, 19, 0.4);
  }

  backdrop-filter: blur(6px);
`,
				I = (c.b`
  ${T}

  animation: modal-overlay-transition 0.25s ease-in-out;

  @keyframes modal-overlay-transition {
    0% {
      background-color: rgba(11, 11, 19, 0);
    }
    100% {
      ${T}
    }
  }
`, c.b`
  filter: drop-shadow(0px 0px 44px rgba(23, 23, 34, 0.2));
`, c.b`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
`, c.b`
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`)
		},
		1711: function(t, r, a) {
			"use strict";
			a.r(r);
			var o = a(0),
				i = a.n(o),
				c = a(276),
				l = a.n(c),
				E = a(849),
				u = a.n(E),
				d = a(14),
				_ = a(161),
				O = a(28),
				T = a(8),
				I = a(75),
				S = a(359),
				p = a(17),
				R = a(30),
				A = a(13),
				b = a.n(A),
				N = a(218),
				C = a.n(N),
				y = a(1),
				D = a.n(y),
				m = a(89),
				h = a(15),
				L = a(54),
				g = a(33),
				P = "R_-K6ugViueQwqL63v-_";
			const MenuWithOverlay = ({
				closeMenu: t,
				closeModal: r,
				openModal: a,
				children: c,
				headerOverlayOnly: l,
				footerOverlayOnly: E
			}) => {
				const u = i.a.useRef();
				return Object(o.useEffect)(() => (a({
					modalProps: {
						headerOverlayOnly: l,
						footerOverlayOnly: E
					}
				}), () => r()), []), Object(o.useEffect)(() => {
					const onClickOutside = r => {
						u.current && !u.current.contains(r.target) && t(r)
					};
					return window.addEventListener("click", onClickOutside), () => window.removeEventListener("click", onClickOutside)
				}), i.a.createElement("div", {
					ref: u,
					className: P
				}, c)
			};
			MenuWithOverlay.propTypes = {
				children: D.a.node.isRequired,
				closeMenu: D.a.func.isRequired,
				closeModal: D.a.func.isRequired,
				footerOverlayOnly: D.a.bool,
				headerOverlayOnly: D.a.bool,
				openModal: D.a.func.isRequired
			};
			var v = Object(d.c)(null, t => Object(L.b)({
					openModal: g.c,
					closeModal: g.a
				}, t))(MenuWithOverlay),
				w = a(116),
				M = a(235),
				U = a(2);
			const G = {
				href: "https://trade.stage.dydx.exchange",
				primaryIcon: i.a.createElement(h.S, null),
				primaryLabelKey: U.a.MAINNET,
				secondaryIcon: i.a.createElement(h.ub, null),
				secondaryLabelKey: U.a.TESTNET,
				strokeIcon: !1
			};
			var j = {
				logo: "ZQty-DUnqlmjbpnXhS51Z",
				navBefore: "_2fTqNZMFx8KbTbKpTxNxm",
				selectorMenuWrapper: "_12tZqmTA3qdGK7nFfJaCyT",
				selectorMenu: "_3O5JIU_y9KtRygXtHidjJ1",
				menuOpen: "Jt9iqFlspR4Tcm1CFNC5M",
				iconHasStroke: "_2YFzR-hlkwnJ1X8IrkGRSe",
				selected: "uqB6s5mJzCEbrTZE1IQzS",
				selectedEnvironment: "EjnOZ4rhYKZKMHAvNQClP",
				selectionMenu: "_1i5pBJ4qGdWmywv0Jn-k_3",
				option: "Gkcvqvf5o0nqyXgyh5PtL",
				iconStroke: "_3XUOeAoddNfEwQHKBafi7y"
			};
			const HeaderLeft = ({
				isEnvironmentMenuOpen: t,
				isLocaleMenuOpen: r,
				setIsEnvironmentMenuOpen: a,
				setIsLocaleMenuOpen: o,
				stringGetter: c
			}) => {
				const l = Object(d.e)(),
					E = Object(d.f)(M.c),
					closeEnvironmentMenu = () => a(!1);
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(m.a, {
					to: "/",
					className: j.logo
				}, i.a.createElement(h.R, null)), i.a.createElement("div", {
					className: j.navBefore
				}, i.a.createElement("div", {
					role: "button",
					tabIndex: 0,
					className: b()(j.selectorMenuWrapper, j.productSelector, {
						[j.iconHasStroke]: G.strokeIcon
					}),
					onClick: () => a(!t)
				}, t && i.a.createElement(v, {
					headerOverlayOnly: !0,
					closeMenu: closeEnvironmentMenu
				}, i.a.createElement("div", {
					className: j.selectionMenu
				}, i.a.createElement("div", {
					role: "button",
					tabIndex: 0,
					className: b()(j.option, j.selected, {
						[j.iconStroke]: G.strokeIcon
					}),
					onClick: closeEnvironmentMenu
				}, G.primaryIcon, c({
					key: G.primaryLabelKey
				})), i.a.createElement("a", {
					className: b()(j.option, {
						[j.iconStroke]: !G.strokeIcon
					}),
					href: G.href
				}, G.secondaryIcon, c({
					key: G.secondaryLabelKey
				})))), i.a.createElement("div", {
					className: b()(j.selectorMenu, {
						[j.menuOpen]: t,
						[j.iconHasStroke]: G.strokeIcon
					})
				}, i.a.createElement("span", {
					className: b()(j.selectedEnvironment, {
						[j.iconHasStroke]: G.strokeIcon
					})
				}, G.primaryIcon, c({
					key: G.primaryLabelKey
				})), i.a.createElement(h.xb, null))), i.a.createElement("div", {
					role: "button",
					tabIndex: 0,
					className: b()(j.selectorMenuWrapper, j.languageSelector),
					onClick: () => o(!r)
				}, r && i.a.createElement(v, {
					headerOverlayOnly: !0,
					closeMenu: () => o(!1)
				}, i.a.createElement("div", {
					className: j.selectionMenu
				}, C()(U.c, t => i.a.createElement("div", {
					key: t,
					role: "button",
					tabIndex: 0,
					className: b()(j.option, {
						[j.selected]: E === t
					}),
					onClick: () => {
						l(Object(w.c)({
							locale: t
						})), o(!1)
					}
				}, U.e[t])))), i.a.createElement("div", {
					className: b()(j.selectorMenu, {
						[j.menuOpen]: r
					})
				}, i.a.createElement("span", null, " ", U.e[E]), i.a.createElement(h.xb, null)))))
			};
			HeaderLeft.propTypes = {
				isEnvironmentMenuOpen: D.a.bool.isRequired,
				isLocaleMenuOpen: D.a.bool.isRequired,
				setIsLocaleMenuOpen: D.a.func.isRequired,
				setIsEnvironmentMenuOpen: D.a.func.isRequired,
				stringGetter: D.a.func.isRequired
			};
			var k = Object(R.d)(HeaderLeft),
				x = a(57),
				H = a(27),
				B = a(19),
				W = "_1Z67p-mhV_b0fvvumqi62X",
				Y = "_2lYA4Crb4Y4B7hAuLadaDG",
				K = "_26-QBzB2iVkzH8bn17twVD",
				V = "_2LvzDOA3CO7ZTdmFPPTTls",
				Z = "_3Ytw69MizbMGawXd0Vivl3";
			const HeaderLinks = ({
				location: t,
				setIsMoreMenuOpen: r,
				openModal: a,
				stringGetter: o
			}) => {
				const c = Object(d.f)(x.e, d.d),
					closeMoreMenu = t => {
						t.stopPropagation(), r(!1)
					};
				return i.a.createElement("div", {
					className: W
				}, i.a.createElement("div", {
					className: Y
				}, i.a.createElement(m.a, {
					key: B.j.PORTFOLIO,
					className: K,
					to: B.j.PORTFOLIO,
					onClick: closeMoreMenu
				}, i.a.createElement("div", {
					className: b()(V, {
						[Z]: Object(O.f)(t.pathname, {
							path: B.j.PORTFOLIO
						})
					})
				}, o({
					key: U.a.PORTFOLIO
				}))), i.a.createElement(m.a, {
					key: B.j.TRADE,
					className: K,
					to: B.j.TRADE,
					onClick: closeMoreMenu
				}, i.a.createElement("div", {
					className: b()(V, {
						[Z]: Object(O.f)(t.pathname, {
							path: B.j.TRADE
						})
					})
				}, o({
					key: U.a.TRADE
				}))), i.a.createElement(m.a, {
					key: B.j.REWARDS,
					className: K,
					to: B.j.REWARDS,
					onClick: closeMoreMenu
				}, i.a.createElement("div", {
					className: b()(V, {
						[Z]: Object(O.f)(t.pathname, {
							path: B.j.REWARDS
						})
					})
				}, o({
					key: U.a.REWARDS
				}))), c && i.a.createElement(m.a, {
					key: B.j.PROFILE,
					className: K,
					to: B.j.MY_PROFILE,
					onClick: closeMoreMenu
				}, i.a.createElement("div", {
					className: b()(V, {
						[Z]: Object(O.f)(t.pathname, {
							path: B.j.MY_PROFILE
						})
					})
				}, o({
					key: U.a.PROFILE
				}))), i.a.createElement(m.a, {
					key: B.j.RANKINGS,
					className: K,
					to: B.j.RANKINGS,
					onClick: closeMoreMenu
				}, i.a.createElement("div", {
					className: b()(V, {
						[Z]: Object(O.f)(t.pathname, {
							path: B.j.RANKINGS
						})
					})
				}, o({
					key: U.a.COMPETITIONS
				}))), i.a.createElement("div", {
					key: "governance",
					role: "button",
					tabIndex: 0,
					className: K,
					onClick: t => {
						a({
							modalType: H.a.GOVERNANCE_LINK
						}), closeMoreMenu(t)
					}
				}, i.a.createElement("div", {
					className: V
				}, o({
					key: U.a.GOVERNANCE
				})))))
			};
			HeaderLinks.propTypes = {
				location: D.a.shape({
					pathname: D.a.string
				}),
				openModal: D.a.func.isRequired,
				setIsMoreMenuOpen: D.a.func.isRequired,
				stringGetter: D.a.func.isRequired
			};
			var z = Object(R.d)(Object(O.i)(Object(d.c)(null, t => Object(L.b)({
					openModal: g.c
				}, t))(HeaderLinks))),
				X = a(35),
				q = a(599),
				$ = a.n(q),
				Q = a(4),
				J = a(21),
				ee = a(41),
				te = (a(104), "_2golWjaEXXUEtRDeZd3tPC"),
				re = "_1klukwHHyloc34d7ZfwaJC",
				ne = "_2Zl10pYFeF3nYo62LIHjw_",
				ae = "_37j0g2LZniyPZzCKFDwq_O",
				oe = "_2IbbaBhpgptqRBOj1xSYYq";
			const renderLink = ({
					className: t,
					Icon: r,
					label: a,
					onClick: o,
					linkOut: c = !1,
					isFillSvg: l = !1
				}) => i.a.createElement("div", {
					className: b()(re, t, {
						[ae]: l
					}),
					onClick: o,
					role: "button",
					tabIndex: 0
				}, i.a.createElement(r, null), a, c && i.a.createElement("div", {
					className: ne
				}, i.a.createElement(h.Q, null))),
				ConnectedWalletMenu = ({
					closeMenu: t,
					closeNavigation: r,
					stringGetter: a,
					walletOnboardingState: o
				}) => {
					const c = Object(d.f)(x.e, d.d),
						l = Object(d.f)(ee.m),
						E = Object(d.f)(ee.o),
						u = Object(d.e)();
					return i.a.createElement(v, {
						headerOverlayOnly: !0,
						closeMenu: t
					}, i.a.createElement("div", {
						className: te
					}, o !== Q.k.COMPLETE && i.a.createElement(ie.RecoverKeysContainer, null, i.a.createElement("span", null, a({
						key: U.a.MISSING_KEYS_DESCRIPTION
					})), i.a.createElement(ie.Button, {
						fullWidth: !0,
						color: X.b.Purple,
						onClick: () => {
							u(Object(g.c)({
								modalType: H.a.ONBOARDING
							})), t(), null === r || void 0 === r || r()
						},
						size: X.d.Small
					}, a({
						key: U.a.RECOVER_KEYS
					}))), c && renderLink({
						Icon: h.E,
						label: a({
							key: U.a.PREFERENCES
						}),
						onClick: () => {
							u(Object(g.c)({
								modalType: H.a.PREFERENCES
							})), t(), null === r || void 0 === r || r()
						},
						isFillSvg: !0
					}), c && renderLink({
						Icon: h.x,
						label: a({
							key: U.a.EMAIL_NOTIFICATIONS
						}),
						onClick: () => {
							u(Object(g.c)({
								modalType: H.a.EMAIL_NOTIFICATIONS
							})), t(), null === r || void 0 === r || r()
						},
						isFillSvg: !0
					}), renderLink({
						Icon: h.r,
						label: a({
							key: U.a.COPY_ADDRESS
						}),
						onClick: () => {
							$()(l), t()
						}
					}), renderLink({
						Icon: h.z,
						label: a({
							key: U.a.OPEN_IN_ETHERSCAN
						}),
						onClick: () => {
							t(), window.open("https://etherscan.io/address/" + l, "_blank")
						},
						linkOut: !0,
						isFillSvg: !0
					}), i.a.createElement("hr", null), c && renderLink({
						Icon: h.ib,
						label: a({
							key: U.a.TITLE_SIGN_INTO_MOBILE
						}),
						onClick: () => {
							u(Object(g.c)({
								modalType: H.a.SIGN_INTO_MOBILE
							})), t(), null === r || void 0 === r || r()
						},
						isFillSvg: !0
					}), c && !1, renderLink({
						className: oe,
						Icon: h.h,
						label: a({
							key: U.a.DISCONNECT
						}),
						onClick: () => {
							t(), u(Object(J.c)({
								walletAddress: l,
								walletType: E
							}))
						}
					})))
				},
				ie = {};
			ie.Button = Object(T.c)(X.a)`
  margin: 10px 0;
`, ie.RecoverKeysContainer = T.c.div`
  span {
    color: var(--color-text-light);
    ${p.e.size14}
    display: flex;
    text-align: center;

    @media ${p.a.tablet} {
      ${p.e.size15}
    }
  }

  margin-bottom: 6px;
  padding-bottom: 8px;
  border-bottom: solid 1px var(--color-border-lighter);
`, ConnectedWalletMenu.propTypes = {
				closeMenu: D.a.func.isRequired,
				closeNavigation: D.a.func,
				stringGetter: D.a.func.isRequired,
				walletOnboardingState: y.string
			};
			var se = Object(R.d)(ConnectedWalletMenu),
				ce = a(155),
				le = a(603),
				Ee = a(424),
				ue = a(236),
				de = a(87),
				_e = a(147),
				Oe = a(150),
				Te = a(107),
				Ie = a(12),
				Se = {
					headerRight: "_2mfH8m1iB_VZ-sLti0KBbS",
					helpIcon: "_3uZQDc9OpwqP7b99Be4vlc",
					notificationsIcon: "_32dwvuccPF2bUZmpuyryo4",
					selected: "_3Lo7-_Ig24Kj_9oLk9BFwk",
					isMenuOpen: "_27E4R_usFJ5LayhY35TO44",
					wallet: "tkr-fqCvjlrK7ZHAtyuED",
					walletContent: "_3zyVtMhuUv0X4k9Z_FBvko",
					walletIcon: "-dMQXwza-r1rmT0pu2Vkb"
				};
			const HeaderRight = ({
				closeSidebarModal: t,
				hasWalletBeenSelected: r,
				hasUnseenNotifications: a,
				isWalletMenuOpen: o,
				setIsWalletMenuOpen: c,
				isWalletConnecting: l,
				modalConfig: E,
				openModal: u,
				openSidebarModal: _,
				sidebarModalConfig: O,
				stringGetter: T,
				walletAddress: S,
				walletType: p
			}) => {
				const R = Object(d.f)(Te.d),
					A = E && E.type === H.a.HELP,
					N = O && O.type === H.b.NOTIFICATIONS;
				return i.a.createElement("div", {
					className: Se.headerRight
				}, i.a.createElement("div", null, i.a.createElement("div", {
					className: b()(Se.helpIcon, {
						[Se.selected]: A
					})
				}, i.a.createElement(ue.b, {
					disableLabel: !1,
					label: T({
						key: U.a.HELP
					})
				}, i.a.createElement(de.b, {
					onClick: t => {
						t.stopPropagation(), u({
							modalType: H.a.HELP
						})
					},
					icon: i.a.createElement(h.J, null),
					selected: A
				})))), i.a.createElement("div", null, i.a.createElement("div", {
					className: b()(Se.notificationsIcon, {
						[Se.isMenuOpen]: N
					})
				}, i.a.createElement(ue.b, {
					disableLabel: N,
					label: T({
						key: U.a.NOTIFICATIONS
					})
				}, i.a.createElement(de.b, {
					selected: N,
					onClick: r => {
						r.stopPropagation(), N ? t({
							modalType: H.b.NOTIFICATIONS
						}) : (I.b.dismiss(), _({
							modalType: H.b.NOTIFICATIONS
						}))
					},
					icon: a ? i.a.createElement(h.f, null) : i.a.createElement(h.g, null)
				})))), i.a.createElement("div", null, i.a.createElement("div", {
					className: Se.wallet
				}, l ? i.a.createElement(ce.a, null) : i.a.createElement(X.a, {
					fullWidth: !0,
					active: o,
					color: r ? X.b.Transparent : X.b.Purple,
					onClick: t => {
						r ? (t.stopPropagation(), c(!o)) : u({
							modalType: H.a.ONBOARDING
						})
					},
					size: X.d.Small
				}, r ? i.a.createElement("div", {
					className: b()(Se.walletContent, {
						[Se.selected]: o
					})
				}, i.a.createElement("div", {
					className: Se.walletIcon
				}, R === Ie.a.COMPLETE ? i.a.createElement(Ee.a, {
					walletType: p
				}) : i.a.createElement(h.Bb, null)), i.a.createElement(le.a, {
					className: Se.walletAddress,
					hash: S
				}), i.a.createElement(h.xb, null)) : T({
					key: U.a.CONNECT_WALLET
				})), o && i.a.createElement(se, {
					closeMenu: () => c(!1),
					walletOnboardingState: R
				}))))
			};
			HeaderRight.propTypes = {
				closeSidebarModal: D.a.func.isRequired,
				hasWalletBeenSelected: D.a.bool.isRequired,
				hasUnseenNotifications: D.a.bool.isRequired,
				isWalletConnecting: D.a.bool.isRequired,
				isWalletMenuOpen: D.a.bool.isRequired,
				modalConfig: D.a.object,
				openModal: D.a.func.isRequired,
				openSidebarModal: D.a.func.isRequired,
				sidebarModalConfig: D.a.object,
				setIsWalletMenuOpen: D.a.func.isRequired,
				stringGetter: D.a.func.isRequired,
				walletAddress: D.a.string,
				walletType: D.a.string
			};
			var pe = Object(R.d)(Object(d.c)(t => ({
					hasWalletBeenSelected: Object(ee.d)(t),
					hasUnseenNotifications: Object(Oe.b)(t),
					isWalletConnecting: Object(ee.e)(t),
					modalConfig: Object(_e.a)(t),
					sidebarModalConfig: Object(_e.b)(t),
					walletAddress: Object(ee.m)(t),
					walletType: Object(ee.o)(t)
				}), t => Object(L.b)({
					closeSidebarModal: g.b,
					openModal: g.c,
					openSidebarModal: g.d
				}, t))(HeaderRight)),
				Re = a(848);
			const Ae = {},
				fe = T.b`
  ${p.b}
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: start;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
`;
			Ae.HelpButton = T.c.div`
  ${fe}
  margin: 0;
  padding: 8px 0;

  &:hover {
    background-color: initial;
    color: var(--color-text-light);

    & > svg {
      circle,
      rect {
        stroke: var(--color-text-light);
      }
    }

    & > svg path {
      fill: var(--color-text-light);
      stroke: transparent;
    }
  }

  & > svg {
    width: 16px;
    margin-right: 12px;
  }
`, Ae.MoreButton = T.c.div`
  ${fe}
  padding: 6px 12px;
  margin-right: 3px;

  & > svg {
    width: 8px;
    margin-left: 6px;
    margin-top: 1px;

    path {
      fill: var(--color-text-dark);
    }
  }

  &:hover {
    background-color: var(--color-layer-lighter);
    color: var(--color-text-light);

    svg path {
      fill: var(--color-text-light);
    }
  }

  ${({selected:t})=>t&&T.b`
			background - color: var (--color - layer - darker);
			transition: transform 0.2 s ease - in -out;
			color: var (--color - text - light);

			&
			: hover {
				background - color: var (--color - layer - darker);
			}

			&
			> svg {
				transform: rotate(180 deg);

				path {
					fill: var (--color - text - light);
				}
			}
			`}
`, Ae.MoreLinksDropdown = T.c.div`
  ${p.e.size15}
  ${p.f.medium}
  position: absolute;
  top: 36px;
  left: calc(50% - 110px);
  background-color: var(--color-layer-light);
  border-radius: 8px;
  padding: 12px 20px;
  width: 220px;
`, Ae.MoreButtonWrapper = T.c.div`
  grid-area: NavMoreLinks;
  display: flex;
  align-items: center;
  height: var(--page-header-height);
`;
			var be = Object(R.d)(({
					isMoreMenuOpen: t,
					setIsMoreMenuOpen: r,
					stringGetter: a
				}) => {
					const o = Object(d.e)(),
						closeMoreMenu = t => {
							t.stopPropagation(), r(!1)
						};
					return i.a.createElement(Ae.MoreButtonWrapper, null, i.a.createElement(Ae.MoreButton, {
						selected: t,
						role: "button",
						tabIndex: 0,
						onClick: () => {
							r(!t)
						}
					}, a({
						key: U.a.MORE
					}), " ", i.a.createElement(h.xb, null)), t && i.a.createElement(v, {
						headerOverlayOnly: !0,
						closeMenu: closeMoreMenu
					}, i.a.createElement(Ae.MoreLinksDropdown, null, i.a.createElement(Re.a, {
						onButtonClick: closeMoreMenu
					}), i.a.createElement(Ae.HelpButton, {
						key: "help",
						role: "button",
						tabIndex: 0,
						onClick: t => {
							o(Object(g.c)({
								modalType: H.a.HELP
							})), closeMoreMenu(t)
						}
					}, i.a.createElement(h.J, null), a({
						key: U.a.HELP
					})))))
				}),
				Ne = "_2K2b3FrILBx-50So5X3tjx",
				Ce = "ucZ81Wt2h_ZBR69tl8KIV";

			function _slicedToArray(t, r) {
				return function _arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function _iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function _unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return _arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return _arrayLikeToArray(t, r)
				}(t, r) || function _nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}
			var header = () => {
					const t = _slicedToArray(Object(o.useState)(!1), 2),
						r = t[0],
						a = t[1],
						c = _slicedToArray(Object(o.useState)(!1), 2),
						l = c[0],
						E = c[1],
						u = _slicedToArray(Object(o.useState)(!1), 2),
						d = u[0],
						_ = u[1],
						O = _slicedToArray(Object(o.useState)(!1), 2),
						T = O[0],
						I = O[1];
					return i.a.createElement("div", {
						className: b()(Ne, {
							[Ce]: r || l || d || T
						})
					}, i.a.createElement(k, {
						isEnvironmentMenuOpen: T,
						isLocaleMenuOpen: r,
						setIsLocaleMenuOpen: a,
						setIsEnvironmentMenuOpen: I
					}), i.a.createElement(z, {
						setIsMoreMenuOpen: E
					}), i.a.createElement(be, {
						isMoreMenuOpen: l,
						setIsMoreMenuOpen: E
					}), i.a.createElement(pe, {
						isWalletMenuOpen: d,
						setIsWalletMenuOpen: _
					}))
				},
				ye = a(182),
				De = a.n(ye),
				me = a(118),
				he = a(362),
				Le = "eMWRAqAhoDqWRqO7kVkWl",
				ge = "_3Bfz9qs0k18JaAuXhxt_7P",
				Pe = "_2eMNkaqiWNGbf_B2C9GUQ8",
				ve = "YWY3QvA6Zcd9mbYrBDKMJ",
				we = "_31gav8fKhmVOUMWB6CNQ2D",
				Me = "_3BMGq_5NLLFvm3FHnMRFnG",
				Ue = "_1JKlhW7CKa2G8tAcc1MFZQ",
				Ge = "LA7oTkPiepZ0XwM2AnP5H",
				je = "_1ZfVKs31MQJLSiW_5JmZd-";
			B.h.OPERATIONAL;
			const Footer = ({
				headline: t,
				status: r,
				stringGetter: a
			}) => i.a.createElement("footer", {
				className: Le
			}, i.a.createElement("div", {
				className: ge
			}, i.a.createElement("a", {
				target: "_blank",
				rel: "noopener noreferrer",
				href: "https://status.dydx.exchange/"
			}, i.a.createElement("div", {
				className: Pe
			}, i.a.createElement("div", {
				className: b()(ve, {
					[we]: r === B.h.OPERATIONAL,
					[Me]: r === B.h.DEGRADED
				})
			}), a({
				key: r === B.h.OPERATIONAL ? U.a.OPERATIONAL : U.a.DEGRADED
			}), i.a.createElement(h.Q, null)))), i.a.createElement("div", {
				className: Ue
			}, t && i.a.createElement(i.a.Fragment, null, i.a.createElement(me.a, {
				className: Ge
			}, a({
				key: U.a.NEW
			})), t)), i.a.createElement("a", {
				target: "_blank",
				rel: "noopener noreferrer",
				href: "https://starkware.co/",
				className: je
			}, a({
				key: U.a.POWERED_BY
			}), i.a.createElement(h.qb, null)));
			Footer.propTypes = {
				headline: D.a.string,
				status: D.a.oneOf(De()(B.h)).isRequired,
				stringGetter: D.a.func.isRequired
			};
			var ke = Object(R.d)(Object(d.c)(t => ({
					status: Object(he.a)(t)
				}), t => Object(L.b)({
					openModal: g.c
				}, t))(Footer)),
				xe = a(140),
				Fe = a.n(xe),
				He = a(139),
				Be = a(183),
				We = a(847),
				Ye = a(372),
				Ke = a.n(Ye),
				Ve = {
					mobileNavigation: "_2fpKiuvxuwxXX35cr56KYL",
					header: "TEmr6yGSYFP9tprOWt7Sg",
					headerContent: "_39dj4iE7AttSc6WJNz0ao2",
					environmentIcon: "_3iY2OeD0-SX63sKJdppBfJ",
					statusButton: "_3VT6kxusVmaEhSyuXhuoDq",
					statusDot: "AkBNlU1Yy7xL5bIMna7W-",
					greenDot: "_39b4J-wELHcZgHbSeAvBmM",
					yellowDot: "_14uCHHBetm3NQm4M16kfTz",
					hoverMenu: "XfzhENHueOd9ZyWnd-c74",
					hoverMenuInner: "_1r4JL6due1p5L_fyM7ETvH",
					hoverMenuOption: "_3DVPQ21Ds9I8mah0xmSh0y",
					iconHasStroke: "_3XqEAaulvvFVqUF80gUuv_",
					selected: "_2i2KIKU6L3ZZYgwEKMZ1VK",
					navLinksAndButtons: "Hgmy7X9gh42CFsTz65iof",
					navLinks: "_3JSeOVcqBB0UHAu6HCVTlH",
					navLink: "_1fkgOPz6koEhyp0Icr-uT6",
					subLinkContainer: "_3vJXVkPOSGXMf9mgfVrTfx",
					iconButtons: "_1XPey-uE2G5lNxr9pddgXa",
					iconButton: "_117Lmts7C0p4tqKrT3Py65"
				};

			function mobile_navigation_slicedToArray(t, r) {
				return function mobile_navigation_arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function mobile_navigation_iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function mobile_navigation_unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return mobile_navigation_arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return mobile_navigation_arrayLikeToArray(t, r)
				}(t, r) || function mobile_navigation_nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function mobile_navigation_arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}
			const Ze = "COMPETITIONS",
				ze = "PORTFOLIO",
				Xe = "RANKINGS",
				MobileNavigation = ({
					closeMobileNavigation: t,
					location: r,
					setShowHelpMenu: a,
					setShowMoreMenu: c,
					stringGetter: l
				}) => {
					const E = i.a.useRef(),
						u = i.a.useRef(),
						_ = Object(d.f)(Te.a),
						T = Object(d.f)(x.c),
						I = Object(d.f)(ee.h),
						S = Object(d.f)(M.c),
						p = Object(d.f)(he.a),
						R = Object(d.f)(x.e, d.d);
					let A;
					const N = Object(O.f)(r.pathname, {
							path: B.m.BRONZE
						}) || Object(O.f)(r.pathname, {
							path: B.m.SILVER
						}) || Object(O.f)(r.pathname, {
							path: B.m.GOLD
						}) || Object(O.f)(r.pathname, {
							path: B.m.PLATINUM
						}) || Object(O.f)(r.pathname, {
							path: B.m.DIAMOND
						}),
						C = Object(O.f)(r.pathname, {
							path: B.m.HEDGIES
						}) || Object(O.f)(r.pathname, {
							path: B.m.COMPETITION
						}),
						y = Object(O.f)(r.pathname, {
							path: B.j.RANKINGS
						}) && !N && !C,
						D = Object(O.f)(r.pathname, {
							path: B.j.PORTFOLIO
						}) || Object(O.f)(r.pathname, {
							path: B.j.REFERRAL
						});
					D ? A = ze : y ? A = Xe : (N || C) && (A = Ze);
					const L = mobile_navigation_slicedToArray(Object(o.useState)(!1), 2),
						P = L[0],
						v = L[1],
						j = mobile_navigation_slicedToArray(Object(o.useState)(!1), 2),
						k = j[0],
						W = j[1],
						Y = mobile_navigation_slicedToArray(Object(o.useState)(A), 2),
						K = Y[0],
						V = Y[1],
						Z = Object(d.e)();
					Object(He.h)({
						onClickOutside: () => v(!1),
						ref: E
					}), Object(He.h)({
						onClickOutside: () => W(!1),
						ref: u
					});
					return i.a.createElement("div", {
						className: Ve.mobileNavigation
					}, i.a.createElement("div", {
						className: Ve.header
					}, i.a.createElement(h.R, {
						id: "mobile-nav"
					}), i.a.createElement("div", {
						className: Ve.headerContent
					}, i.a.createElement("a", {
						className: Ve.statusButton,
						target: "blank",
						href: "https://status.dydx.exchange/"
					}, i.a.createElement("div", {
						className: b()(Ve.statusDot, {
							[Ve.greenDot]: p === B.h.OPERATIONAL,
							[Ve.yellowDot]: p === B.h.DEGRADED
						})
					}), l({
						key: p === B.h.OPERATIONAL ? U.a.OPERATIONAL : U.a.DEGRADED
					})))), i.a.createElement("div", {
						className: Ve.navLinksAndButtons
					}, i.a.createElement("div", {
						className: Ve.navLinks
					}, i.a.createElement("div", {
						role: "button",
						tabIndex: "0",
						onClick: () => V(K === ze ? null : ze),
						className: b()(Ve.navLink, {
							[Ve.selected]: D
						})
					}, l({
						key: U.a.PORTFOLIO
					}), i.a.createElement(qe.MenuOpenIndicator, {
						isOpen: K === ze,
						isOnCurrentRoute: D
					}, i.a.createElement(h.xb, null))), i.a.createElement(Ke.a, {
						isOpened: K === ze
					}, i.a.createElement(i.a.Fragment, null, i.a.createElement(qe.ExpandedMenuSpacer, null), i.a.createElement("div", {
						className: Ve.subLinkContainer
					}, i.a.createElement(m.a, {
						to: B.l.OVERVIEW,
						onClick: t,
						className: b()(Ve.navLink, {
							[Ve.selected]: Object(O.f)(r.pathname, {
								path: B.l.OVERVIEW
							})
						})
					}, l({
						key: U.a.OVERVIEW
					})), i.a.createElement(m.a, {
						to: B.l.POSITIONS,
						onClick: t,
						className: b()(Ve.navLink, {
							[Ve.selected]: Object(O.f)(r.pathname, {
								path: B.l.POSITIONS
							})
						})
					}, l({
						key: U.a.POSITIONS
					})), i.a.createElement(m.a, {
						to: B.l.ORDERS,
						onClick: t,
						className: b()(Ve.navLink, {
							[Ve.selected]: Object(O.f)(r.pathname, {
								path: B.l.ORDERS
							})
						})
					}, l({
						key: U.a.ORDERS
					})), i.a.createElement(m.a, {
						to: B.l.FEES,
						onClick: t,
						className: b()(Ve.navLink, {
							[Ve.selected]: Object(O.f)(r.pathname, {
								path: B.l.FEES
							})
						})
					}, l({
						key: U.a.FEES
					}), i.a.createElement(me.a, {
						purple: !0,
						usePillStyles: !0
					}, l({
						key: U.a.NEW
					}))), i.a.createElement(m.a, {
						to: B.l.HISTORY,
						onClick: t,
						className: b()(Ve.navLink, {
							[Ve.selected]: Object(O.f)(r.pathname, {
								path: B.l.HISTORY
							})
						})
					}, l({
						key: U.a.HISTORY
					}))))), i.a.createElement(m.a, {
						to: B.j.TRADE,
						onClick: t,
						className: b()(Ve.navLink, {
							[Ve.selected]: Object(O.f)(r.pathname, {
								path: B.j.TRADE
							})
						})
					}, l({
						key: U.a.TRADE
					})), i.a.createElement(m.a, {
						to: B.j.REWARDS,
						onClick: t,
						className: b()(Ve.navLink, {
							[Ve.selected]: Object(O.f)(r.pathname, {
								path: B.j.REWARDS
							})
						})
					}, l({
						key: U.a.REWARDS
					})), R && i.a.createElement(m.a, {
						to: B.j.MY_PROFILE,
						onClick: t,
						className: b()(Ve.navLink, {
							[Ve.selected]: Object(O.f)(r.pathname, {
								path: B.j.MY_PROFILE
							})
						})
					}, l({
						key: U.a.PROFILE
					}), i.a.createElement(me.a, {
						purple: !0,
						usePillStyles: !0
					}, l({
						key: U.a.NEW
					}))), i.a.createElement("div", {
						role: "button",
						tabIndex: "0",
						onClick: () => V(K === Ze ? null : Ze),
						className: b()(Ve.navLink, {
							[Ve.selected]: N || C
						})
					}, l({
						key: U.a.COMPETITIONS
					}), i.a.createElement(qe.MenuOpenIndicator, {
						isOpen: K === Ze,
						isOnCurrentRoute: N || C
					}, i.a.createElement(h.xb, null))), i.a.createElement(Ke.a, {
						isOpened: K === Ze
					}, i.a.createElement(i.a.Fragment, null, i.a.createElement(qe.ExpandedMenuSpacer, null), i.a.createElement("div", {
						className: Ve.subLinkContainer
					}, i.a.createElement(m.a, {
						to: B.m.HEDGIES,
						onClick: t,
						className: b()(Ve.navLink, {
							[Ve.selected]: Object(O.f)(r.pathname, {
								path: B.m.HEDGIES
							})
						})
					}, l({
						key: U.a.HEDGIES
					})), i.a.createElement(m.a, {
						to: B.m.COMPETITION,
						onClick: t,
						className: b()(Ve.navLink, {
							[Ve.selected]: Object(O.f)(r.pathname, {
								path: B.m.COMPETITION
							})
						})
					}, l({
						key: U.a.DAILY
					})), i.a.createElement(m.a, {
						to: B.m.LEAGUES,
						onClick: t,
						className: b()(Ve.navLink, {
							[Ve.selected]: N
						})
					}, l({
						key: U.a.LEAGUES
					}))))), i.a.createElement("div", {
						role: "button",
						tabIndex: "0",
						onClick: () => V(K === Xe ? null : Xe),
						className: b()(Ve.navLink, {
							[Ve.selected]: y
						})
					}, l({
						key: U.a.RANKINGS
					}), i.a.createElement(qe.MenuOpenIndicator, {
						isOpen: K === Xe,
						isOnCurrentRoute: y
					}, i.a.createElement(h.xb, null))), i.a.createElement(Ke.a, {
						isOpened: K === Xe
					}, i.a.createElement(i.a.Fragment, null, i.a.createElement(qe.ExpandedMenuSpacer, null), i.a.createElement("div", {
						className: Ve.subLinkContainer
					}, i.a.createElement(m.a, {
						to: B.m.PNL_ABSOLUTE,
						onClick: t,
						className: b()(Ve.navLink, {
							[Ve.selected]: Object(O.f)(r.pathname, {
								path: B.m.PNL_ABSOLUTE
							})
						})
					}, l({
						key: U.a.PROFIT_AND_LOSS_ABSOLUTE
					})), i.a.createElement(m.a, {
						to: B.m.PNL_PERCENT,
						onClick: t,
						className: b()(Ve.navLink, {
							[Ve.selected]: Object(O.f)(r.pathname, {
								path: B.m.PNL_PERCENT
							})
						})
					}, l({
						key: U.a.PROFIT_AND_LOSS_PERCENT
					}))))), i.a.createElement("div", {
						role: "button",
						tabIndex: 0,
						className: b()(Ve.navLink),
						onClick: () => {
							Z(Object(g.c)({
								modalType: H.a.GOVERNANCE_LINK
							})), t()
						}
					}, l({
						key: U.a.GOVERNANCE
					}))), i.a.createElement("div", {
						className: Ve.iconButtons
					}, (I || _) && T && i.a.createElement(qe.IconButton, {
						backgroundLighter: !0,
						pill: !0,
						size: de.a.LARGE,
						icon: i.a.createElement(qe.TransferIcon, null),
						iconUsesStroke: !0,
						onClick: () => Z(Object(g.c)({
							modalType: H.a.TRANSFER
						}))
					}), i.a.createElement("div", {
						ref: E,
						className: Ve.hoverMenuWrapper
					}, i.a.createElement(qe.IconButton, {
						backgroundLighter: !0,
						pill: !0,
						size: de.a.LARGE,
						icon: i.a.createElement(h.G, null),
						selected: P,
						iconUsesFill: !0,
						onClick: () => v(!P)
					}), P && i.a.createElement("div", {
						className: Ve.hoverMenu,
						style: {
							bottom: 0,
							right: 60
						}
					}, i.a.createElement("div", {
						className: Ve.hoverMenuInner
					}, Object.values(U.c).map(t => i.a.createElement("div", {
						key: t,
						role: "button",
						tabIndex: 0,
						className: b()(Ve.hoverMenuOption, {
							[Ve.selected]: S === t
						}),
						onClick: () => {
							Z(Object(w.c)({
								locale: t
							})), v(!1)
						}
					}, U.e[t]))))), i.a.createElement("div", {
						ref: u,
						className: Ve.hoverMenuWrapper
					}, i.a.createElement(qe.IconButton, {
						backgroundLighter: !0,
						pill: !0,
						size: de.a.LARGE,
						icon: G.primaryIcon,
						iconUsesStroke: G.strokeIcon,
						selected: k,
						onClick: () => W(!k)
					}), k && i.a.createElement("div", {
						className: Ve.hoverMenu,
						style: {
							bottom: 35,
							right: 60
						}
					}, i.a.createElement("div", {
						className: Ve.hoverMenuInner
					}, i.a.createElement("div", {
						role: "button",
						tabIndex: 0,
						className: b()(Ve.hoverMenuOption, Ve.selected, {
							[Ve.iconHasStroke]: G.strokeIcon
						}),
						onClick: () => W(!1)
					}, G.primaryIcon, l({
						key: G.primaryLabelKey
					})), i.a.createElement("a", {
						className: Ve.hoverMenuOption,
						href: G.href
					}, i.a.createElement("span", {
						className: b()(Ve.environmentIcon, {
							[Ve.iconHasStroke]: G.strokeIcon
						})
					}, G.secondaryIcon), l({
						key: G.secondaryLabelKey
					}))))), i.a.createElement(qe.IconButton, {
						backgroundLighter: !0,
						pill: !0,
						size: de.a.LARGE,
						icon: i.a.createElement(h.jb, null),
						iconUsesFill: !0,
						onClick: () => a(!0)
					}), i.a.createElement(qe.IconButton, {
						backgroundLighter: !0,
						pill: !0,
						size: de.a.LARGE,
						icon: i.a.createElement(h.U, null),
						iconUsesFill: !0,
						onClick: () => c(!0)
					}))))
				},
				qe = {};
			qe.IconButton = Object(T.c)(de.b)`
  --icon-color: var(--color-text-base);
`, qe.TransferIcon = Object(T.c)(h.vb)`
  width: 20px;
`, qe.ExpandedMenuSpacer = T.c.div`
  height: 24px;
  width: 100%;
`, qe.MenuOpenIndicator = T.c.span`
  display: flex;
  align-items: center;
  margin-left: 8px;
  margin-top: 4px;
  animation: transform 2s;

  > svg {
    height: 8px;
    width: 8px;
    transform: rotate(0deg);
  }

  ${({isOpen:t})=>t&&T.b` >
				svg {
					transform: rotate(180 deg);
				}
			`}

  ${({isOnCurrentRoute:t})=>t&&T.b` >
			svg path {
				fill: var (--color - text - light);
			}
			`}
`, MobileNavigation.propTypes = {
				closeMobileNavigation: D.a.func.isRequired,
				location: D.a.shape({
					pathname: D.a.string
				}),
				setShowHelpMenu: D.a.func.isRequired,
				setShowMoreMenu: D.a.func.isRequired,
				stringGetter: D.a.func.isRequired
			};
			var $e = Object(R.d)(Object(O.i)(MobileNavigation)),
				Qe = a(219),
				Je = a(167),
				et = a(58),
				tt = a(16),
				rt = "RsYL1VLI5eWZptbq78YbQ",
				nt = "Ure4yGDCj8xONoy_ANyDI",
				at = "_2Ta5aeFuRBgTtLRDtH7x4Q",
				ot = "_3bBjsLu0xy5rkXJDrms1H6",
				it = "_3r_iMrzSjKlPR1xNl_jLiW";
			const st = [{
					tradeType: tt.D.MARKET,
					labelKey: U.a.MARKET_ORDER,
					descriptionKey: U.a.MARKET_ORDER_DESCRIPTION
				}, {
					tradeType: tt.D.LIMIT,
					labelKey: U.a.LIMIT_ORDER,
					descriptionKey: U.a.LIMIT_ORDER_DESCRIPTION
				}, {
					tradeType: tt.D.STOP_LIMIT,
					labelKey: U.a.STOP_LIMIT,
					descriptionKey: U.a.STOP_LIMIT_DESCRIPTION
				}, {
					tradeType: tt.D.STOP_MARKET,
					labelKey: U.a.STOP_MARKET,
					descriptionKey: U.a.STOP_MARKET_DESCRIPTION
				}, {
					tradeType: tt.D.TAKE_PROFIT,
					labelKey: U.a.TAKE_PROFIT_LIMIT,
					descriptionKey: U.a.TAKE_PROFIT_LIMIT_DESCRIPTION
				}, {
					tradeType: tt.D.TAKE_PROFIT_MARKET,
					labelKey: U.a.TAKE_PROFIT_MARKET,
					descriptionKey: U.a.TAKE_PROFIT_MARKET_DESCRIPTION
				}, {
					tradeType: tt.D.TRAILING_STOP,
					labelKey: U.a.TRAILING_STOP,
					descriptionKey: U.a.TRAILING_STOP_DESCRIPTION
				}],
				MobileTradeTypeSelector = ({
					closeSelector: t,
					currentMarketConfig: {
						baseSymbol: r
					},
					currentTradeData: {
						selectedTradeType: a
					},
					setTradeData: o,
					stringGetter: c
				}) => i.a.createElement("div", {
					className: rt
				}, C()(st, ({
					tradeType: l,
					labelKey: E,
					descriptionKey: u
				}) => i.a.createElement("div", {
					key: l,
					role: "button",
					tabIndex: 0,
					className: b()(nt, {
						[at]: a === l
					}),
					onClick: () => {
						a !== l && o({
							selectedTradeType: l
						}), t()
					}
				}, i.a.createElement("div", {
					className: it
				}, c({
					key: E
				})), i.a.createElement("div", {
					className: ot
				}, c({
					key: u,
					params: {
						SYMBOL: r
					}
				})))));
			MobileTradeTypeSelector.propTypes = {
				closeSelector: D.a.func.isRequired,
				currentMarketConfig: D.a.object.isRequired,
				currentTradeData: D.a.object.isRequired,
				setTradeData: D.a.func.isRequired,
				stringGetter: D.a.func.isRequired
			};
			var ct = Object(R.d)(Object(d.c)(t => ({
					currentMarketConfig: Object(et.b)(t),
					currentTradeData: Object(Je.a)(t)
				}), t => Object(L.b)({
					setTradeData: Qe.a
				}, t))(MobileTradeTypeSelector)),
				lt = a(47),
				Et = a(34),
				ut = a(257),
				dt = a(277),
				_t = a(846),
				Ot = a(597),
				Tt = a(168),
				It = a(586),
				St = a(26);
			const MobileFooterButtons = ({
				account: t,
				accountData: r,
				areKeyPairsValid: a,
				isUserRegistered: o,
				isWalletConnecting: c,
				isWalletIncorrectNetwork: l,
				isWalletInvalid: E,
				isWalletReady: u,
				location: d,
				openModal: _,
				setShowMobileNavigation: T,
				setTradeData: I,
				stringGetter: S,
				userAlreadyExists: p
			}) => c || u && !t && a ? i.a.createElement(ce.a, {
				size: 6
			}) : c || !u && !l || a ? E && !a ? i.a.createElement(X.a, {
				color: X.b.Purple,
				onClick: () => _({
					modalType: H.a.ONBOARDING
				}),
				size: X.d.Medium
			}, S({
				key: U.a.CONNECT_WALLET
			})) : r && r.equity.isZero() ? i.a.createElement(X.a, {
				color: X.b.Purple,
				onClick: () => {
					T(!0), _({
						modalType: H.a.TRANSFER
					})
				},
				size: X.d.Medium
			}, S({
				key: U.a.DEPOSIT
			})) : Object(O.f)(d.pathname, {
				path: B.j.TRADE
			}) ? i.a.createElement(i.a.Fragment, null, i.a.createElement(X.a, {
				color: X.b.Red,
				onClick: () => I({
					selectedOrderSide: St.a.SELL,
					showInlineMobileTradeBox: !0
				}),
				size: X.d.Medium
			}, S({
				key: U.a.SELL
			})), i.a.createElement(X.a, {
				color: X.b.Green,
				onClick: () => I({
					selectedOrderSide: St.a.BUY,
					showInlineMobileTradeBox: !0
				}),
				size: X.d.Medium
			}, S({
				key: U.a.BUY
			}))) : Object(O.f)(d.pathname, {
				path: B.l.HISTORY
			}) ? i.a.createElement(_t.a, null) : Object(O.f)(d.pathname, {
				path: B.l.ORDERS
			}) ? i.a.createElement(Ot.a, null) : i.a.createElement(X.a, {
				onClick: () => {
					_({
						modalType: H.a.TRANSFER
					})
				},
				size: X.d.Medium
			}, S({
				key: U.a.TRANSFER
			})) : i.a.createElement(X.a, {
				color: X.b.Purple,
				onClick: () => _({
					modalType: H.a.ONBOARDING
				}),
				size: X.d.Medium
			}, S({
				key: p && o ? U.a.RECOVER_KEYS : U.a.ONBOARDING
			}));
			MobileFooterButtons.propTypes = {
				account: D.a.object,
				accountData: D.a.object,
				areKeyPairsValid: D.a.bool.isRequired,
				isUserRegistered: D.a.bool,
				isWalletConnecting: D.a.bool.isRequired,
				isWalletIncorrectNetwork: D.a.bool.isRequired,
				isWalletInvalid: D.a.bool.isRequired,
				isWalletReady: D.a.bool.isRequired,
				location: D.a.object.isRequired,
				openModal: D.a.func.isRequired,
				setShowMobileNavigation: D.a.func.isRequired,
				setTradeData: D.a.func.isRequired,
				stringGetter: D.a.func.isRequired,
				userAlreadyExists: D.a.bool
			};
			var pt = Object(O.i)(Object(d.c)(t => ({
				account: Object(Tt.a)(t),
				accountData: Object(It.a)(t),
				areKeyPairsValid: Object(Te.a)(t),
				isUserRegistered: Object(x.c)(t),
				isWalletConnecting: Object(ee.e)(t),
				isWalletIncorrectNetwork: Object(ee.f)(t),
				isWalletInvalid: Object(ee.g)(t),
				isWalletReady: Object(ee.h)(t),
				userAlreadyExists: Object(x.g)(t)
			}), t => Object(L.b)({
				openModal: g.c,
				setTradeData: Qe.a
			}, t))(MobileFooterButtons));
			const Rt = {};
			Rt.You = Object(T.c)(me.a)`
  background-color: var(--color-layer-lighter);
  ${p.e.size12}
  color: var(--color-text-light);
  padding: 2px 6px;
  border-radius: 15px;
  margin-left: 8px;
  margin-bottom: -2px;
`, Rt.Badge = T.c.img`
  height: 40px;
  width: 40px;
  margin-right: 6px;
`, Rt.ViewingLeagueContainer = T.c.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
`, Rt.ColoredSpan = T.c.span`
  display: flex;
  align-items: center;
  ${p.e.size20}
  color: var(--color-text-dark);
  ${({light:t})=>t&&"color: var(--color-text-base);"}
`, Rt.RightContentContainer = T.c.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1 1 auto;
  padding: 0 12px;

  @media ${p.a.mobile} {
    justify-content: space-between;
  }

  > button {
    min-width: 120px;

    &:not(:last-child) {
      margin-right: 10px;
    }

    @media ${p.a.mobile} {
      min-width: 0;

      &:not(:last-child) {
        margin-right: 0;
      }

      &:only-child {
        width: 100%;
      }

      &:not(:only-child) {
        flex: 0 0 calc(50% - 6px);
      }
    }
  }
`;
			var At = Object(O.i)(Object(R.d)(({
					location: t,
					setShowMobileNavigation: r,
					stringGetter: a
				}) => {
					const o = Object(d.f)(ut.k),
						c = Object(d.f)(ut.f, d.d),
						l = Object(d.f)(ut.d),
						E = Object(d.f)(x.e, d.d),
						u = Object(O.f)(t.pathname, {
							path: B.m.BRONZE
						}) || Object(O.f)(t.pathname, {
							path: B.m.SILVER
						}) || Object(O.f)(t.pathname, {
							path: B.m.GOLD
						}) || Object(O.f)(t.pathname, {
							path: B.m.PLATINUM
						}) || Object(O.f)(t.pathname, {
							path: B.m.DIAMOND
						}),
						_ = Object(O.f)(t.pathname, {
							path: B.m.HEDGIES
						}),
						T = _ || Object(O.f)(t.pathname, {
							path: B.m.COMPETITION
						}),
						I = Object(O.f)(t.pathname, {
							path: B.j.PROFILE
						}) || Object(O.f)(t.pathname, {
							path: B.m.PROFILE
						});
					if (T) {
						const t = _ ? "/hedgies-logo.png" : "/badges/daily.png";
						return i.a.createElement(Rt.ViewingLeagueContainer, null, i.a.createElement(Rt.Badge, {
							alt: "",
							src: t
						}), " ", i.a.createElement(Rt.ColoredSpan, null, a({
							key: _ ? U.a.HEDGIES : U.a.DAILY
						})))
					}
					if (u) {
						const t = (null === c || void 0 === c ? void 0 : c.period) && c.period === o;
						return i.a.createElement(Rt.ViewingLeagueContainer, null, i.a.createElement(Rt.Badge, {
							alt: "",
							src: Object(dt.a)(o)
						}), " ", t && !l ? i.a.createElement(Rt.ColoredSpan, {
							light: !0
						}, Object(dt.b)({
							period: o,
							stringGetter: a
						}), i.a.createElement(Rt.You, null, a({
							key: U.a.YOU
						}))) : i.a.createElement(Rt.ColoredSpan, null, Object(dt.b)({
							period: o,
							stringGetter: a
						})))
					}
					if (I) {
						const r = ((null === t || void 0 === t ? void 0 : t.pathname) || "").includes("u/" + (null === E || void 0 === E ? void 0 : E.publicId));
						return i.a.createElement(Rt.ViewingLeagueContainer, null, i.a.createElement(Rt.ColoredSpan, null, a({
							key: U.a.PROFILE
						}), r && i.a.createElement(Rt.You, null, a({
							key: U.a.YOU
						}))))
					}
					const S = {
						setShowMobileNavigation: r,
						stringGetter: a
					};
					return i.a.createElement(Rt.RightContentContainer, null, i.a.createElement(pt, S))
				})),
				ft = a(365),
				bt = "_1mGQ8l_PFS46TqG6Rm_0CW",
				Nt = "UaFwJrxZClrhyMOs-cjkp",
				Ct = "f0WmkLXnBZ8dXVNlwYH8R",
				yt = "NgjSfdg44rq6vIBL2YJC2",
				Dt = "_2AZ1aTnryMQJ3HikmlOcph",
				mt = "_115QCVNKYdHSwSM7BJlqtk",
				ht = "_1dgd5yk6Og7W6QCci-9ClD",
				Lt = "_2DhQ3BHPia6kFjc3By0AE4",
				gt = "FFRmeBUHRNFu5lBFDGW-Z",
				Pt = "_3wLloHlUweRxFMcIYFnu5x",
				vt = "_17t_JeG3IeL39H6O1hZZH7",
				wt = "N-aqsBjKP0TGAePwXaU3Y";

			function mobile_wallet_button_and_menu_slicedToArray(t, r) {
				return function mobile_wallet_button_and_menu_arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function mobile_wallet_button_and_menu_iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function mobile_wallet_button_and_menu_unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return mobile_wallet_button_and_menu_arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return mobile_wallet_button_and_menu_arrayLikeToArray(t, r)
				}(t, r) || function mobile_wallet_button_and_menu_nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function mobile_wallet_button_and_menu_arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}
			const MobileWalletButtonAndMenu = ({
				closeNavigation: t,
				hasWalletBeenSelected: r,
				isWalletConnecting: a,
				openModal: c,
				stringGetter: l,
				walletType: E
			}) => {
				if (a) return i.a.createElement(ft.a, {
					compact: !0,
					id: "mobile-footer-wallet-loading"
				});
				const u = Object(d.f)(Te.d),
					_ = i.a.useRef(),
					O = mobile_wallet_button_and_menu_slicedToArray(Object(o.useState)(!1), 2),
					T = O[0],
					I = O[1];
				return Object(He.h)({
					ref: _,
					onClickOutside: () => I(!1)
				}), i.a.createElement("div", null, i.a.createElement(X.a, {
					active: T,
					className: Pt,
					onClick: () => {
						r ? I(!T) : (t(), c({
							modalType: H.a.ONBOARDING
						}))
					},
					ref: _,
					shape: X.c.Pill,
					size: X.d.ExtraSmall
				}, r ? i.a.createElement(i.a.Fragment, null, u === Ie.a.COMPLETE ? i.a.createElement(Ee.a, {
					walletType: E
				}) : i.a.createElement(h.Bb, null), i.a.createElement("span", {
					className: b()(vt, {
						[wt]: T
					})
				}, i.a.createElement(h.xb, null))) : l({
					key: U.a.CONNECT_WALLET
				})), r && T && i.a.createElement(se, {
					closeNavigation: t,
					closeMenu: () => I(!1),
					walletOnboardingState: u
				}))
			};
			MobileWalletButtonAndMenu.propTypes = {
				closeNavigation: D.a.func.isRequired,
				hasWalletBeenSelected: D.a.bool.isRequired,
				isWalletConnecting: D.a.bool.isRequired,
				openModal: D.a.func.isRequired,
				stringGetter: D.a.func.isRequired,
				walletType: D.a.string
			};
			var Mt = Object(R.d)(Object(d.c)(t => ({
				hasWalletBeenSelected: Object(ee.d)(t),
				isWalletConnecting: Object(ee.e)(t),
				walletType: Object(ee.o)(t)
			}), t => Object(L.b)({
				openModal: g.c
			}, t))(MobileWalletButtonAndMenu));

			function _extends() {
				return (_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}

			function ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function _objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? ownKeys(Object(a), !0).forEach((function(r) {
						_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function _defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function mobile_footer_slicedToArray(t, r) {
				return function mobile_footer_arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function mobile_footer_iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function mobile_footer_unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return mobile_footer_arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return mobile_footer_arrayLikeToArray(t, r)
				}(t, r) || function mobile_footer_nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function mobile_footer_arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}
			const Ut = Object(o.lazy)(() => a.e(24).then(a.bind(null, 2169))),
				Gt = Object(o.lazy)(() => Promise.all([a.e(11), a.e(58)]).then(a.bind(null, 2170))),
				jt = Object(o.lazy)(() => a.e(26).then(a.bind(null, 2135))),
				kt = Object(o.lazy)(() => a.e(98).then(a.bind(null, 2149))),
				MobileFooter = ({
					closeModal: t,
					currentNotifications: r,
					currentTradeData: {
						selectedTradeType: a,
						showInlineDepositModal: c,
						showInlineWithdrawModal: l,
						showInlineClosePositionModal: E,
						showInlineMobileTradeBox: u,
						showMobileMarketSelector: d
					},
					hasUnseenNotifications: _,
					modalConfig: O,
					removeNonPermanentNotificationTypes: T,
					setTradeData: S,
					stringGetter: p
				}) => {
					const R = mobile_footer_slicedToArray(Object(o.useState)(!1), 2),
						A = R[0],
						N = R[1],
						C = mobile_footer_slicedToArray(Object(o.useState)(!1), 2),
						y = C[0],
						D = C[1],
						m = mobile_footer_slicedToArray(Object(o.useState)(!1), 2),
						L = m[0],
						g = m[1],
						P = mobile_footer_slicedToArray(Object(o.useState)(!1), 2),
						v = P[0],
						w = P[1],
						M = mobile_footer_slicedToArray(Object(o.useState)(!1), 2),
						G = M[0],
						j = M[1],
						k = mobile_footer_slicedToArray(Object(He.r)(), 2),
						x = k[0],
						B = k[1];
					let W, Y, K, V;
					if (Object(o.useEffect)(() => {
							O && O.type === H.a.TRANSFER && j(!0)
						}, [O]), d) W = U.a.SELECT_MARKET, Y = () => S({
						showMobileMarketSelector: !1
					});
					else if (c) W = U.a.DEPOSIT, Y = () => S(_objectSpread({}, tt.f));
					else if (l) W = U.a.WITHDRAW, Y = () => S(_objectSpread({}, tt.f));
					else if (E) W = U.a.CLOSE_POSITION, Y = () => S(_objectSpread({}, tt.f));
					else if (u) {
						if (A) W = U.a.ORDER_TYPE;
						else switch (a) {
							case tt.D.MARKET:
								W = U.a.MARKET_ORDER;
								break;
							case tt.D.LIMIT:
								W = U.a.LIMIT_ORDER;
								break;
							case tt.D.STOP_LIMIT:
								W = U.a.STOP_LIMIT;
								break;
							case tt.D.STOP_MARKET:
								W = U.a.STOP_MARKET;
								break;
							case tt.D.TAKE_PROFIT:
								W = U.a.TAKE_PROFIT_LIMIT;
								break;
							case tt.D.TAKE_PROFIT_MARKET:
								W = U.a.TAKE_PROFIT_MARKET;
								break;
							case tt.D.TRAILING_STOP:
								W = U.a.TRAILING_STOP
						}
						Y = () => {
							A ? N(!1) : S(_objectSpread({}, tt.f))
						}, K = i.a.createElement(X.a, {
							onClick: () => N(!0),
							shape: X.c.Pill,
							size: X.d.ExtraSmall
						}, p({
							key: U.a.MODIFY
						}))
					} else if (y) {
						const t = Fe()(r, ({
							type: t
						}) => !Et.c.includes(t)).length > 0;
						W = U.a.NOTIFICATIONS, Y = () => D(!1), K = t && i.a.createElement(X.a, {
							onClick: T,
							shape: X.c.Pill,
							size: X.d.ExtraSmall
						}, p({
							key: U.a.CLEAR
						}))
					} else G && (O && O.type === H.a.TRANSFER ? (W = U.a.TRANSFER, Y = () => {
						t({
							modalType: H.a.TRANSFER
						}), j(!1)
					}) : L ? (W = U.a.HELP, Y = () => {
						g(!1), j(!1)
					}) : v ? (W = U.a.MORE, Y = () => {
						w(!1), j(!1)
					}) : (W = U.a.MENU, Y = () => j(!1), K = i.a.createElement(Mt, {
						closeNavigation: () => j(!1)
					})));
					return d ? V = i.a.createElement(We.a, {
						setIsMarketSelectionMenuOpen: t => S({
							showMobileMarketSelector: t
						}),
						starredMarketSymbols: x,
						setStarredMarketSymbols: B
					}) : A ? V = i.a.createElement(ct, {
						closeSelector: () => N(!1)
					}) : y ? V = i.a.createElement(Ut, null) : G && (V = O && O.type === H.a.TRANSFER ? i.a.createElement(Gt, _extends({}, O.props, {
						inline: !0,
						closeModal: () => {
							t({
								modalType: H.a.TRANSFER
							}), j(!1)
						}
					})) : L ? i.a.createElement(jt, {
						inline: !0,
						closeMobileNavigation: () => j(!1)
					}) : v ? i.a.createElement(kt, {
						inline: !0,
						closeMobileNavigation: () => j(!1)
					}) : i.a.createElement($e, {
						closeMobileNavigation: () => j(!1),
						setShowHelpMenu: g,
						setShowMoreMenu: w
					})), W ? i.a.createElement("div", {
						className: b()(bt, {
							[Nt]: G
						})
					}, V && i.a.createElement("div", {
						className: gt
					}, i.a.createElement(o.Suspense, {
						fallback: i.a.createElement(Be.a, {
							id: "mobile-footer"
						})
					}, V)), i.a.createElement("footer", {
						className: Ct
					}, i.a.createElement("div", {
						role: "button",
						tabIndex: 0,
						className: b()(yt, Dt),
						onClick: Y
					}, i.a.createElement(h.o, null)), i.a.createElement("div", {
						className: ht
					}, i.a.createElement("div", {
						className: Lt
					}, p({
						key: W
					})), K))) : i.a.createElement("div", {
						className: b()(bt, {
							[Nt]: G
						})
					}, i.a.createElement("footer", {
						className: Ct
					}, i.a.createElement("div", {
						role: "button",
						tabIndex: 0,
						className: yt,
						onClick: () => {
							j(!0)
						}
					}, i.a.createElement(h.H, null)), i.a.createElement("div", {
						role: "button",
						tabIndex: 0,
						className: b()(yt, mt),
						onClick: () => {
							I.b.dismiss(), D(!0)
						}
					}, _ ? i.a.createElement(h.f, {
						id: "mobile-bell"
					}) : i.a.createElement(h.g, {
						id: "mobile-bell"
					})), i.a.createElement(At, {
						setShowMobileNavigation: j
					})))
				};
			MobileFooter.propTypes = {
				closeModal: D.a.func.isRequired,
				currentNotifications: D.a.array.isRequired,
				currentTradeData: D.a.object.isRequired,
				hasUnseenNotifications: D.a.bool.isRequired,
				modalConfig: D.a.object,
				removeNonPermanentNotificationTypes: D.a.func.isRequired,
				setTradeData: D.a.func.isRequired,
				stringGetter: D.a.func.isRequired,
				userAlreadyExists: D.a.bool
			};
			var xt = Object(R.d)(Object(O.i)(Object(d.c)(t => ({
					currentNotifications: Object(Oe.a)(t),
					currentTradeData: Object(Je.a)(t),
					hasUnseenNotifications: Object(Oe.b)(t),
					modalConfig: Object(_e.a)(t),
					userAlreadyExists: Object(x.g)(t)
				}), t => Object(L.b)({
					closeModal: g.a,
					removeNonPermanentNotificationTypes: lt.b,
					setTradeData: Qe.a
				}, t))(MobileFooter))),
				Ft = "VgAOW93lxRQAw8DErDEIj",
				Ht = "_3uGIXGTXf4DMoSaREmymtl",
				Bt = "fGWClQ3uQnAQ6N2mAPxeC";
			const Wt = Object(o.lazy)(() => a.e(88).then(a.bind(null, 2150))),
				Yt = Object(o.lazy)(() => a.e(24).then(a.bind(null, 2169))),
				Kt = Object(o.lazy)(() => a.e(81).then(a.bind(null, 2171))),
				SidebarModalManager = ({
					closeSidebarModal: t,
					sidebarModalConfig: r
				}) => {
					if (!r) return null;
					const a = r.type,
						c = r.props;
					let l;
					switch (a) {
						case H.b.FILL_DETAILS:
							l = i.a.createElement(Wt, c);
							break;
						case H.b.NOTIFICATIONS:
							l = i.a.createElement(Yt, c);
							break;
						case H.b.ORDER_DETAILS:
							l = i.a.createElement(Kt, c)
					}
					return i.a.createElement("div", {
						className: Ft
					}, i.a.createElement("div", {
						role: "button",
						tabIndex: 0,
						className: Ht,
						onClick: t
					}), i.a.createElement("div", {
						className: Bt
					}, i.a.createElement(o.Suspense, {
						fallback: i.a.createElement(Be.a, null)
					}, l)))
				};
			SidebarModalManager.propTypes = {
				closeSidebarModal: D.a.func.isRequired,
				sidebarModalConfig: D.a.object
			};
			var Vt = Object(d.c)(t => ({
				sidebarModalConfig: Object(_e.b)(t)
			}), t => Object(L.b)({
				closeSidebarModal: g.b
			}, t))(SidebarModalManager);
			const Zt = Object(o.lazy)(() => a.e(95).then(a.bind(null, 2124))),
				zt = Object(o.lazy)(() => a.e(69).then(a.bind(null, 1789))),
				Xt = Object(o.lazy)(() => a.e(100).then(a.bind(null, 2125))),
				qt = Object(o.lazy)(() => a.e(70).then(a.bind(null, 2126))),
				$t = Object(o.lazy)(() => a.e(64).then(a.bind(null, 2127))),
				Qt = Object(o.lazy)(() => a.e(60).then(a.bind(null, 2166))),
				Jt = Object(o.lazy)(() => a.e(66).then(a.bind(null, 2128))),
				er = Object(o.lazy)(() => a.e(94).then(a.bind(null, 2129))),
				tr = Object(o.lazy)(() => a.e(82).then(a.bind(null, 2130))),
				rr = T.a`
  :root {
    ${p.c}
    ${p.d}
  }
`,
				nr = {};
			nr.Content = T.c.div`
  display: grid;
  grid-template:
    'Header' auto
    'Main' 1fr
    'Footer' auto
    / 100%;
  height: 100%;
`, nr.Main = T.c.main`
  grid-area: Main;
  min-height: 0;
  display: flex;
`;
			var main = () => i.a.createElement(d.a, {
					store: S.a
				}, i.a.createElement(_.a, {
					history: S.b
				}, i.a.createElement(rr, null), i.a.createElement(R.a, null), i.a.createElement(R.b, null, i.a.createElement(nr.Content, null, i.a.createElement(R.c, null), i.a.createElement(header, null), i.a.createElement(nr.Main, null, i.a.createElement(o.Suspense, {
					fallback: i.a.createElement(Be.a, {
						headerSpacing: !0,
						id: "main-page-content"
					})
				}, i.a.createElement(O.d, null, i.a.createElement(O.b, {
					path: B.j.TRADE,
					component: Zt
				}), i.a.createElement(O.b, {
					path: B.j.MY_PROFILE,
					component: Xt
				}), i.a.createElement(O.b, {
					path: B.j.PORTFOLIO,
					component: zt
				}), i.a.createElement(O.b, {
					path: B.j.PROFILE,
					component: Xt
				}), i.a.createElement(O.b, {
					path: B.j.RANKINGS,
					component: qt
				}), i.a.createElement(O.b, {
					path: B.j.REFERRAL,
					component: $t
				}), i.a.createElement(O.b, {
					path: B.j.REWARDS,
					component: Qt
				}), i.a.createElement(O.b, {
					path: B.j.EMAIL_VERIFICATION,
					component: er
				}), i.a.createElement(O.b, {
					path: B.j.MANAGE_NOTIFICATIONS,
					component: Jt
				}), i.a.createElement(O.b, {
					path: B.j.FORCE_WITHDRAW,
					component: tr
				}), i.a.createElement(O.a, {
					to: B.j.PORTFOLIO
				}))), i.a.createElement(Vt, null), i.a.createElement(I.a, {
					hideProgressBar: !0,
					autoClose: !1,
					closeButton: !1,
					closeOnClick: !1,
					className: "custom-toast-container",
					toastClassName: "custom-toast",
					bodyClassName: "custom-toast-body"
				})), i.a.createElement(xt, null), i.a.createElement(ke, null))))),
				ar = a(123),
				or = a(584),
				ir = "_33zk3cwwOLSWADzsOe0psd",
				sr = "_3Jw-YBFSaAV6BvuZoFJduW",
				cr = "_1YdoHtsa6p6Tw_29N0MREW";

			function OutOfDateModal_slicedToArray(t, r) {
				return function OutOfDateModal_arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function OutOfDateModal_iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function OutOfDateModal_unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return OutOfDateModal_arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return OutOfDateModal_arrayLikeToArray(t, r)
				}(t, r) || function OutOfDateModal_nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function OutOfDateModal_arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}
			const OutOfDateModal = ({
				body: t,
				buttonText: r,
				title: a
			}) => {
				const c = OutOfDateModal_slicedToArray(Object(o.useState)(!1), 2),
					l = c[0],
					E = c[1];
				return i.a.createElement(ar.g, {
					size: ar.c.MEDIUM
				}, i.a.createElement(or.a, {
					noBorder: !0,
					title: a
				}), i.a.createElement("div", {
					className: ir
				}, i.a.createElement("div", {
					className: sr
				}, t), i.a.createElement("div", {
					className: cr
				}, i.a.createElement(X.a, {
					fullWidth: !0,
					color: X.b.Purple,
					isLoading: l,
					onClick: () => {
						E(!0), window.location.reload()
					}
				}, r))))
			};
			OutOfDateModal.propTypes = {
				body: D.a.string,
				buttonText: D.a.string,
				title: D.a.string
			};
			var lr = OutOfDateModal,
				Er = a(22),
				ur = a(234);
			class dr extends i.a.Component {
				constructor(t) {
					super(t), this.state = {
						isOutOfDate: !1
					}
				}
				static getDerivedStateFromError(t) {
					return Object(ur.a)({
						error: t
					}) ? {
						isOutOfDate: !0
					} : {
						isOutOfDate: !1
					}
				}
				componentDidCatch(t) {
					Object(ur.a)({
						error: t
					}) || Er.b.notify({
						error: t
					})
				}
				render() {
					const t = this.state.isOutOfDate,
						r = this.props.children;
					return t ? i.a.createElement("div", {
						style: {
							display: "flex",
							flex: 1,
							alignItems: "center",
							justifyContent: "center",
							height: "100%",
							backgroundColor: "#1c1c28"
						}
					}, i.a.createElement(lr, {
						title: "App out of date",
						body: "A new version of the app is available - please refresh the page to pull the latest version. Some features may not be available until you refresh",
						buttonText: "Refresh page"
					})) : r
				}
			}
			dr.propTypes = {
				children: D.a.oneOfType([D.a.arrayOf(D.a.node), D.a.node]).isRequired
			};
			var _r = dr;
			a(820), a(1710);
			window.Intercom("boot", {
				app_id: "y587jv5s"
			}), u.a.polyfill(), Er.b.initialize(), window.onerror = (t, r, a, o, i) => {
				i.hasBeenLogged || Object(ur.a)({
					error: i
				}) || Er.b.notify({
					error: i
				}), i.hasBeenLogged = !0
			}, l.a.render(i.a.createElement(_r, null, i.a.createElement(main, null)), document.getElementById("root"))
		},
		174: function(t, r, a) {
			"use strict";
			a.d(r, "c", (function() {
				return calculatePositionLeverage
			})), a.d(r, "d", (function() {
				return calculatePositionLiquidationPrice
			})), a.d(r, "b", (function() {
				return calculateNewPositionAndEquityAfterOrder
			})), a.d(r, "a", (function() {
				return calculateAdjustedInitialMarginFraction
			})), a.d(r, "f", (function() {
				return calculatePositionUnrealizedPnlData
			})), a.d(r, "e", (function() {
				return calculatePositionRealizedPnlPercent
			}));
			var o = a(48),
				i = a.n(o),
				c = a(186),
				l = a.n(c),
				E = a(67),
				u = a.n(E),
				d = a(26),
				_ = a(184),
				O = a(10),
				T = a(453);
			const calculatePositionLeverage = ({
					accountEquity: t,
					positionSize: r,
					oraclePrice: a
				}) => {
					const o = Object(O.b)(r);
					return o.eq(0) ? null : o.abs().times(a).div(t)
				},
				calculatePositionLiquidationPrice = ({
					accountEquity: t,
					allMarketsData: r,
					allPositions: a,
					currentMarketConfig: o
				}) => {
					if (!t || !a || !r || !o) return null;
					const i = o.market,
						c = a[i];
					if (!c) return null;
					const E = c.size,
						u = c.side,
						d = r[i],
						T = d.oraclePrice,
						I = d.maintenanceMarginFraction,
						S = l()(a, (t, {
							size: a,
							market: o
						}) => {
							if (o !== i) {
								const i = r[o],
									c = i.oraclePrice,
									l = i.maintenanceMarginFraction;
								return t.plus(Object(O.b)(a).abs().times(c).times(l))
							}
							return t
						}, O.a.ZERO),
						p = Object(O.b)(E),
						R = u === _.a.LONG ? S.plus(p.times(T)).minus(t).div(p.minus(p.times(I))) : S.plus(p.times(T)).minus(t).div(p.times(I).plus(p));
					return R.lt(0) ? null : R
				},
				calculateNewPositionAndEquityAfterOrder = ({
					accountEquity: t,
					positionSize: r,
					positionSide: a,
					oraclePrice: o,
					order: {
						side: i,
						price: c,
						remainingSize: l
					}
				}) => {
					let E = Object(O.b)(t),
						u = Object(O.b)(r),
						T = a;
					const I = Object(O.b)(l);
					return i === d.a.BUY ? (E = E.plus(I.times(Object(O.b)(o).minus(c))), u = u.plus(l)) : (E = E.plus(I.times(Object(O.b)(c).minus(o))), u = u.minus(l)), T = u.isZero() ? null : u.gt(0) ? _.a.LONG : _.a.SHORT, {
						newEquity: E,
						newPositionSize: u,
						newPositonSide: T
					}
				},
				calculateAdjustedInitialMarginFraction = ({
					account: t,
					marketData: r,
					positionSize: a
				}) => {
					if (!r) return null;
					const o = r.initialMarginFraction,
						i = r.incrementalInitialMarginFraction,
						c = r.baselinePositionSize,
						l = r.incrementalPositionSize,
						E = r.maxPositionSize,
						d = Object(O.b)(o);
					if (Object(T.a)({
							account: t
						}) || !a) return d;
					const _ = u.a.min(Object(O.b)(a).abs(), E);
					if (_.lte(c)) return d;
					const I = _.minus(c).dividedToIntegerBy(l);
					return d.plus(I.times(i))
				},
				calculatePositionUnrealizedPnlData = ({
					position: t,
					marketData: r
				}) => {
					if (!r || !t) return null;
					const a = t.size,
						o = t.entryPrice,
						c = t.status,
						l = r.indexPrice;
					if (i()([_.b.CLOSED, _.b.LIQUIDATED], c)) return null;
					const E = Object(O.b)(a).times(o),
						u = Object(O.b)(a).times(l).minus(E),
						d = u.div(E.abs());
					return {
						unrealizedPnl: u,
						unrealizedPnlPercent: d
					}
				},
				calculatePositionRealizedPnlPercent = ({
					position: t
				}) => {
					const r = t.size,
						a = t.entryPrice,
						o = t.status,
						c = t.realizedPnl;
					if (i()([_.b.CLOSED, _.b.LIQUIDATED], o)) return null;
					const l = Object(O.b)(r).times(a);
					return Object(O.b)(c).div(l.abs())
				}
		},
		183: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return I
			}));
			var o = a(0),
				i = a.n(o),
				c = a(1),
				l = a.n(c),
				E = a(13),
				u = a.n(E),
				d = a(365),
				_ = "t4qOrgaSCra4Qc5Om3GFA",
				O = "_3MYob9MvC7uHh8GzuTKhr3",
				T = "_3haRGfHHGLv7PGtiGCi_77";
			const LoadingSpace = ({
				className: t,
				headerSpacing: r,
				headerOffset: a,
				id: o,
				minHeight: c
			}) => {
				const l = {
					className: u()(_, {
						[O]: r,
						[T]: a
					}, t)
				};
				return c && (l.style = {
					minHeight: c
				}), i.a.createElement("div", l, i.a.createElement(d.a, {
					id: o
				}))
			};
			LoadingSpace.propTypes = {
				className: l.a.string,
				headerSpacing: l.a.bool,
				headerOffset: l.a.bool,
				id: l.a.string,
				minHeight: l.a.number
			};
			var I = LoadingSpace
		},
		184: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return o
			})), a.d(r, "b", (function() {
				return i
			}));
			const o = {
					LONG: "LONG",
					SHORT: "SHORT"
				},
				i = {
					OPEN: "OPEN",
					CLOSED: "CLOSED",
					LIQUIDATED: "LIQUIDATED"
				}
		},
		19: function(t, r, a) {
			"use strict";
			a.d(r, "o", (function() {
				return i
			})), a.d(r, "n", (function() {
				return c
			})), a.d(r, "k", (function() {
				return l
			})), a.d(r, "e", (function() {
				return E
			})), a.d(r, "d", (function() {
				return u
			})), a.d(r, "f", (function() {
				return d
			})), a.d(r, "c", (function() {
				return _
			})), a.d(r, "b", (function() {
				return O
			})), a.d(r, "a", (function() {
				return T
			})), a.d(r, "j", (function() {
				return I
			})), a.d(r, "q", (function() {
				return S
			})), a.d(r, "l", (function() {
				return p
			})), a.d(r, "i", (function() {
				return R
			})), a.d(r, "m", (function() {
				return A
			})), a.d(r, "g", (function() {
				return b
			})), a.d(r, "p", (function() {
				return N
			})), a.d(r, "h", (function() {
				return C
			}));
			var o = a(88);

			function ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function _objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? ownKeys(Object(a), !0).forEach((function(r) {
						_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function _defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const i = 324,
				c = 56,
				l = 1280,
				E = 414,
				u = 768,
				d = 1024,
				_ = 1280,
				O = 1440,
				T = 1920,
				I = {
					EMAIL_VERIFICATION: "/verify-email",
					FORCE_WITHDRAW: "/force-withdraw",
					MANAGE_NOTIFICATIONS: "/manage-notifications",
					MY_PROFILE: "/my-profile",
					PORTFOLIO: "/portfolio",
					PROFILE: "/u/:publicId",
					RANKINGS: "/rankings",
					REFERRAL: "/r/:referrer",
					REWARDS: "/rewards",
					TRADE: "/trade"
				},
				S = I.TRADE + "/:market",
				p = {
					OVERVIEW: I.PORTFOLIO + "/overview",
					POSITIONS: I.PORTFOLIO + "/positions",
					ORDERS: I.PORTFOLIO + "/orders",
					FEES: I.PORTFOLIO + "/fees",
					HISTORY: I.PORTFOLIO + "/history"
				},
				R = {
					BRONZE: I.RANKINGS + "/bronze",
					DIAMOND: I.RANKINGS + "/diamond",
					GOLD: I.RANKINGS + "/gold",
					PLATINUM: I.RANKINGS + "/platinum",
					SILVER: I.RANKINGS + "/silver"
				},
				A = _objectSpread(_objectSpread({}, R), {}, {
					COMPETITION: I.RANKINGS + "/competition",
					HEDGIES: I.RANKINGS + "/hedgies",
					LEAGUES: I.RANKINGS + "/leagues",
					PNL_ABSOLUTE: I.RANKINGS + "/pnl-absolute",
					PNL_PERCENT: I.RANKINGS + "/pnl-percent",
					PROFILE: I.RANKINGS + "/u/:publicId"
				}),
				b = "/trade/" + o.e.ETH_USD,
				N = {
					DEGRADED_PERFORMANCE: "degraded_performance",
					OPERATIONAL: "operational"
				},
				C = {
					OPERATIONAL: "OPERATIONAL",
					DEGRADED: "DEGRADED"
				}
		},
		196: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return i
			})), a.d(r, "b", (function() {
				return c
			}));
			var o = a(24);
			const i = Object(o.a)("SET_RETROACTIVE_REWARDS"),
				c = Object(o.a)("SET_TRADING_REWARDS")
		},
		2: function(t, r, a) {
			"use strict";
			a.d(r, "c", (function() {
				return i
			})), a.d(r, "d", (function() {
				return c
			})), a.d(r, "b", (function() {
				return l
			})), a.d(r, "e", (function() {
				return E
			})), a.d(r, "a", (function() {
				return u
			})), a.d(r, "f", (function() {
				return o
			}));
			const o = {
				LEGACY_SIGNING_BODY: "TOOLTIPS.GENERAL.LEGACY_SIGNING.BODY",
				LEGACY_SIGNING_TITLE: "TOOLTIPS.GENERAL.LEGACY_SIGNING.TITLE",
				REMEMBER_ME_BODY: "TOOLTIPS.GENERAL.REMEMBER_ME.BODY",
				REMEMBER_ME_TITLE: "TOOLTIPS.GENERAL.REMEMBER_ME.TITLE",
				SWAP_BODY: "TOOLTIPS.DEPOSIT.SWAP.BODY",
				SWAP_TITLE: "TOOLTIPS.DEPOSIT.SWAP.TITLE",
				HOLDING_HEDGIES_BODY: "TOOLTIPS.PORTFOLIO.HOLDING_HEDGIES.BODY",
				HOLDING_HEDGIES_TITLE: "TOOLTIPS.PORTFOLIO.HOLDING_HEDGIES.TITLE",
				FAST_WITHDRAW_FEE_BODY: "TOOLTIPS.WITHDRAW.FAST_WITHDRAW_FEE.BODY",
				FAST_WITHDRAW_FEE_TITLE: "TOOLTIPS.WITHDRAW.FAST_WITHDRAW_FEE.TITLE",
				WITHDRAW_TYPES_BODY: "TOOLTIPS.WITHDRAW.WITHDRAW_TYPES.BODY",
				WITHDRAW_TYPES_TITLE: "TOOLTIPS.WITHDRAW.WITHDRAW_TYPES.TITLE",
				ACCOUNT_LEVERAGE_BODY: "TOOLTIPS.TRADE.ACCOUNT_LEVERAGE.BODY",
				ACCOUNT_LEVERAGE_TITLE: "TOOLTIPS.TRADE.ACCOUNT_LEVERAGE.TITLE",
				BUYING_POWER_BODY: "TOOLTIPS.TRADE.BUYING_POWER.BODY",
				BUYING_POWER_TITLE: "TOOLTIPS.TRADE.BUYING_POWER.TITLE",
				DEFAULT_EXECUTION_BODY: "TOOLTIPS.TRADE.DEFAULT_EXECUTION.BODY",
				DEFAULT_EXECUTION_TITLE: "TOOLTIPS.TRADE.DEFAULT_EXECUTION.TITLE",
				EQUITY_BODY: "TOOLTIPS.TRADE.EQUITY.BODY",
				EQUITY_TITLE: "TOOLTIPS.TRADE.EQUITY.TITLE",
				EXPECTED_PRICE_BODY: "TOOLTIPS.TRADE.EXPECTED_PRICE.BODY",
				EXPECTED_PRICE_TITLE: "TOOLTIPS.TRADE.EXPECTED_PRICE.TITLE",
				FEE_BODY: "TOOLTIPS.TRADE.FEE.BODY",
				FEE_TITLE: "TOOLTIPS.TRADE.FEE.TITLE",
				FILL_OR_KILL_BODY: "TOOLTIPS.TRADE.FILL_OR_KILL.BODY",
				FILL_OR_KILL_TITLE: "TOOLTIPS.TRADE.FILL_OR_KILL.TITLE",
				FREE_COLLATERAL_BODY: "TOOLTIPS.TRADE.FREE_COLLATERAL.BODY",
				FREE_COLLATERAL_TITLE: "TOOLTIPS.TRADE.FREE_COLLATERAL.TITLE",
				GOOD_TIL_BODY: "TOOLTIPS.TRADE.GOOD_TIL.BODY",
				GOOD_TIL_TITLE: "TOOLTIPS.TRADE.GOOD_TIL.TITLE",
				IMMEDIATE_OR_CANCEL_BODY: "TOOLTIPS.TRADE.IMMEDIATE_OR_CANCEL.BODY",
				IMMEDIATE_OR_CANCEL_TITLE: "TOOLTIPS.TRADE.IMMEDIATE_OR_CANCEL.TITLE",
				INDEX_PRICE_BODY: "TOOLTIPS.TRADE.INDEX_PRICE.BODY",
				INDEX_PRICE_TITLE: "TOOLTIPS.TRADE.INDEX_PRICE.TITLE",
				INITIAL_MARGIN_FRACTION_BODY: "TOOLTIPS.TRADE.INITIAL_MARGIN_FRACTION.BODY",
				INITIAL_MARGIN_FRACTION_TITLE: "TOOLTIPS.TRADE.INITIAL_MARGIN_FRACTION.TITLE",
				INITIAL_STOP_BODY: "TOOLTIPS.TRADE.INITIAL_STOP.BODY",
				INITIAL_STOP_TITLE: "TOOLTIPS.TRADE.INITIAL_STOP.TITLE",
				LEVERAGE_BODY: "TOOLTIPS.TRADE.LEVERAGE.BODY",
				LEVERAGE_TITLE: "TOOLTIPS.TRADE.LEVERAGE.TITLE",
				LIMIT_PRICE_BODY: "TOOLTIPS.TRADE.LIMIT_PRICE.BODY",
				LIMIT_PRICE_TITLE: "TOOLTIPS.TRADE.LIMIT_PRICE.TITLE",
				LIQUIDATION_PRICE_BODY: "TOOLTIPS.TRADE.LIQUIDATION_PRICE.BODY",
				LIQUIDATION_PRICE_TITLE: "TOOLTIPS.TRADE.LIQUIDATION_PRICE.TITLE",
				LIQUIDATION_PRICE_GENERAL_BODY: "TOOLTIPS.TRADE.LIQUIDATION_PRICE_GENERAL.BODY",
				LIQUIDATION_PRICE_GENERAL_TITLE: "TOOLTIPS.TRADE.LIQUIDATION_PRICE_GENERAL.TITLE",
				LIQUIDITY_BODY: "TOOLTIPS.TRADE.LIQUIDITY.BODY",
				LIQUIDITY_TITLE: "TOOLTIPS.TRADE.LIQUIDITY.TITLE",
				MAINTENANCE_MARGIN_FRACTION_BODY: "TOOLTIPS.TRADE.MAINTENANCE_MARGIN_FRACTION.BODY",
				MAINTENANCE_MARGIN_FRACTION_TITLE: "TOOLTIPS.TRADE.MAINTENANCE_MARGIN_FRACTION.TITLE",
				MAKER_FEE_BODY: "TOOLTIPS.TRADE.MAKER_FEE.BODY",
				MAKER_FEE_TITLE: "TOOLTIPS.TRADE.MAKER_FEE.TITLE",
				MARGIN_USAGE_BODY: "TOOLTIPS.TRADE.MARGIN_USAGE.BODY",
				MARGIN_USAGE_TITLE: "TOOLTIPS.TRADE.MARGIN_USAGE.TITLE",
				MAX_WITHDRAW_BODY: "TOOLTIPS.TRADE.MAX_WITHDRAW.BODY",
				MAX_WITHDRAW_TITLE: "TOOLTIPS.TRADE.MAX_WITHDRAW.TITLE",
				MAXIMUM_LEVERAGE_BODY: "TOOLTIPS.TRADE.MAXIMUM_LEVERAGE.BODY",
				MAXIMUM_LEVERAGE_TITLE: "TOOLTIPS.TRADE.MAXIMUM_LEVERAGE.TITLE",
				NET_FUNDING_BODY: "TOOLTIPS.TRADE.NET_FUNDING.BODY",
				NET_FUNDING_TITLE: "TOOLTIPS.TRADE.NET_FUNDING.TITLE",
				OPEN_INTEREST_BODY: "TOOLTIPS.TRADE.OPEN_INTEREST.BODY",
				OPEN_INTEREST_TITLE: "TOOLTIPS.TRADE.OPEN_INTEREST.TITLE",
				ORACLE_PRICE_BODY: "TOOLTIPS.TRADE.ORACLE_PRICE.BODY",
				ORACLE_PRICE_TITLE: "TOOLTIPS.TRADE.ORACLE_PRICE.TITLE",
				ORDER_AMOUNT_BODY: "TOOLTIPS.TRADE.ORDER_AMOUNT.BODY",
				ORDER_AMOUNT_TITLE: "TOOLTIPS.TRADE.ORDER_AMOUNT.TITLE",
				POST_ONLY_BODY: "TOOLTIPS.TRADE.POST_ONLY.BODY",
				POST_ONLY_TITLE: "TOOLTIPS.TRADE.POST_ONLY.TITLE",
				PRICE_IMPACT_BODY: "TOOLTIPS.TRADE.PRICE_IMPACT.BODY",
				PRICE_IMPACT_TITLE: "TOOLTIPS.TRADE.PRICE_IMPACT.TITLE",
				REALIZED_PNL_BODY: "TOOLTIPS.TRADE.REALIZED_PNL.BODY",
				REALIZED_PNL_TITLE: "TOOLTIPS.TRADE.REALIZED_PNL.TITLE",
				STEP_SIZE_BODY: "TOOLTIPS.TRADE.STEP_SIZE.BODY",
				STEP_SIZE_TITLE: "TOOLTIPS.TRADE.STEP_SIZE.TITLE",
				TAKER_FEE_BODY: "TOOLTIPS.TRADE.TAKER_FEE.BODY",
				TAKER_FEE_TITLE: "TOOLTIPS.TRADE.TAKER_FEE.TITLE",
				TICK_SIZE_BODY: "TOOLTIPS.TRADE.TICK_SIZE.BODY",
				TICK_SIZE_TITLE: "TOOLTIPS.TRADE.TICK_SIZE.TITLE",
				TIME_IN_FORCE_BODY: "TOOLTIPS.TRADE.TIME_IN_FORCE.BODY",
				TIME_IN_FORCE_TITLE: "TOOLTIPS.TRADE.TIME_IN_FORCE.TITLE",
				TRAILING_PERCENT_BODY: "TOOLTIPS.TRADE.TRAILING_PERCENT.BODY",
				TRAILING_PERCENT_TITLE: "TOOLTIPS.TRADE.TRAILING_PERCENT.TITLE",
				TRIGGER_PRICE_BODY: "TOOLTIPS.TRADE.TRIGGER_PRICE.BODY",
				TRIGGER_PRICE_TITLE: "TOOLTIPS.TRADE.TRIGGER_PRICE.TITLE",
				UNREALIZED_PNL_BODY: "TOOLTIPS.TRADE.UNREALIZED_PNL.BODY",
				UNREALIZED_PNL_TITLE: "TOOLTIPS.TRADE.UNREALIZED_PNL.TITLE",
				VERIFY_EMAIL_BODY: "TOOLTIPS.EMAIL_NOTIFICATIONS.VERIFY_EMAIL.BODY",
				VERIFY_EMAIL_TITLE: "TOOLTIPS.EMAIL_NOTIFICATIONS.VERIFY_EMAIL.TITLE"
			};

			function ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function _objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? ownKeys(Object(a), !0).forEach((function(r) {
						_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function _defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const i = {
					EN: "en",
					ZH_CN: "zh-CN",
					JA: "ja",
					KO: "ko",
					RU: "ru",
					TR: "tr",
					FR: "fr",
					PT: "pt",
					ES: "es"
				},
				c = {
					[i.EN]: "en",
					[i.ZH_CN]: "zh",
					[i.JA]: "ja",
					[i.KO]: "ko",
					[i.RU]: "ru",
					[i.TR]: "tr",
					[i.FR]: "fr",
					[i.PT]: "pt",
					[i.ES]: "es"
				},
				l = Object.fromEntries(Object.entries(c).map(([t, r]) => [r, t])),
				E = {
					[i.EN]: "English",
					[i.ZH_CN]: "\u4e2d\u6587",
					[i.JA]: "\u65e5\u672c\u8a9e",
					[i.KO]: "\ud55c\uad6d\uc5b4",
					[i.RU]: "\u0440\u0443\u0441\u0441\u043a\u0438\u0439",
					[i.TR]: "T\xfcrk\xe7e",
					[i.FR]: "Fran\xe7ais",
					[i.PT]: "Portugu\xeas",
					[i.ES]: "Espa\xf1ol"
				},
				u = _objectSpread(_objectSpread(_objectSpread({}, {
					ALL_TIME: "GENERAL.TIME_STRINGS.ALL_TIME",
					DAYS_ABBREVIATED: "GENERAL.TIME_STRINGS.DAYS_ABBREVIATED",
					DAYS: "GENERAL.TIME_STRINGS.DAYS",
					HOURS_ABBREVIATED: "GENERAL.TIME_STRINGS.HOURS_ABBREVIATED",
					HOURS: "GENERAL.TIME_STRINGS.HOURS",
					LAST_24H: "GENERAL.TIME_STRINGS.LAST_24H",
					LAST_WEEK: "GENERAL.TIME_STRINGS.LAST_WEEK",
					MINUTES_ABBREVIATED: "GENERAL.TIME_STRINGS.MINUTES_ABBREVIATED",
					MINUTES_SHORT: "GENERAL.TIME_STRINGS.MINUTES_SHORT",
					MONTHS_ABBREVIATED: "GENERAL.TIME_STRINGS.MONTHS_ABBREVIATED",
					PAST_30D: "GENERAL.TIME_STRINGS.PAST_30D",
					PAST_HOUR: "GENERAL.TIME_STRINGS.PAST_HOUR",
					PAST_MONTH: "GENERAL.TIME_STRINGS.PAST_MONTH",
					PAST_THREE_MONTHS: "GENERAL.TIME_STRINGS.PAST_THREE_MONTHS",
					PAST_WEEK: "GENERAL.TIME_STRINGS.PAST_WEEK",
					THIS_WEEK: "GENERAL.TIME_STRINGS.THIS_WEEK",
					TODAY: "GENERAL.TIME_STRINGS.TODAY",
					WEEK: "GENERAL.TIME_STRINGS.WEEK",
					WEEKS_ABBREVIATED: "GENERAL.TIME_STRINGS.WEEKS_ABBREVIATED",
					WEEKS: "GENERAL.TIME_STRINGS.WEEKS",
					ABOUT: "GENERAL.ABOUT",
					ACCOUNT_LEVERAGE: "GENERAL.ACCOUNT_LEVERAGE",
					ACCOUNT: "GENERAL.ACCOUNT",
					ACTION: "GENERAL.ACTION",
					ADVANCED: "GENERAL.ADVANCED",
					ALL_MARKETS: "GENERAL.ALL_MARKETS",
					ALL: "GENERAL.ALL",
					AMOUNT: "GENERAL.AMOUNT",
					ANONYMOUS: "GENERAL.ANONYMOUS",
					ARE_UNCHANGED: "GENERAL.ARE_UNCHANGED",
					ARE_YOU_SURE: "GENERAL.ARE_YOU_SURE",
					ASSET: "GENERAL.ASSET",
					AVAILABLE: "GENERAL.AVAILABLE",
					BACK: "GENERAL.BACK",
					BALANCE: "GENERAL.BALANCE",
					BUY: "GENERAL.BUY",
					BUYING_POWER: "GENERAL.BUYING_POWER",
					CANCEL: "GENERAL.CANCEL",
					CANCELED: "GENERAL.CANCELED",
					CARDS: "GENERAL.CARDS",
					CATEGORY: "GENERAL.CATEGORY",
					CLEAR: "GENERAL.CLEAR",
					CLOSE: "GENERAL.CLOSE",
					COMPETITION: "GENERAL.COMPETITION",
					COMPETITIONS: "GENERAL.COMPETITIONS",
					CONFIRM_DEPOSIT: "GENERAL.CONFIRM_DEPOSIT",
					CONFIRM_WITHDRAW: "GENERAL.CONFIRM_WITHDRAW",
					CONFIRMED: "GENERAL.CONFIRMED",
					CONNECT_WALLET: "GENERAL.CONNECT_WALLET",
					CONNECT: "GENERAL.CONNECT",
					CONNECTED: "GENERAL.CONNECTED",
					COPIED: "GENERAL.COPIED",
					CREATED_AT: "GENERAL.CREATED_AT",
					CURRENT: "GENERAL.CURRENT",
					CUSTOM: "GENERAL.CUSTOM",
					DAILY: "GENERAL.DAILY",
					DECREASED: "GENERAL.DECREASED",
					DECREASING: "GENERAL.DECREASING",
					DEFAULT: "GENERAL.DEFAULT",
					DEFI: "GENERAL.DEFI",
					DEGRADED: "GENERAL.DEGRADED",
					DEPOSIT_FUNDS: "GENERAL.DEPOSIT_FUNDS",
					DEPOSIT: "GENERAL.DEPOSIT",
					DEPTH_CHART_SHORT: "GENERAL.DEPTH_CHART_SHORT",
					DETAILED_VIEW: "GENERAL.DETAILED_VIEW",
					DETAILS: "GENERAL.DETAILS",
					DIRECTION: "GENERAL.DIRECTION",
					DISCOUNT: "GENERAL.DISCOUNT",
					DISMISS: "GENERAL.DISMISS",
					DONE: "GENERAL.DONE",
					EMAIL: "GENERAL.EMAIL",
					ENDED: "GENERAL.ENDED",
					EQUITY: "GENERAL.EQUITY",
					EXPAND_SECTION: "GENERAL.EXPAND_SECTION",
					EXPAND: "GENERAL.EXPAND",
					FAVORITES: "GENERAL.FAVORITES",
					FAST_WITHDRAW: "GENERAL.FAST_WITHDRAW",
					FEES_30D: "GENERAL.FEES_30D",
					FEES_PAID: "GENERAL.FEES_PAID",
					FEES: "GENERAL.FEES",
					FILLS: "GENERAL.FILLS",
					FORCE_WITHDRAW_DESCRIPTION: "GENERAL.FORCE_WITHDRAW_DESCRIPTION",
					FREE_COLLATERAL: "GENERAL.FREE_COLLATERAL",
					FUNDING_RATE_CHART_SHORT: "GENERAL.FUNDING_RATE_CHART_SHORT",
					GASLESS_DEPOSITS: "GENERAL.GASLESS_DEPOSITS",
					GENERAL: "GENERAL.GENERAL",
					GO_BACK: "GENERAL.GO_BACK",
					GO_TO_MARKET: "GENERAL.GO_TO_MARKET",
					GOVERNANCE: "GENERAL.GOVERNANCE",
					HEDGIES: "GENERAL.HEDGIES",
					HIDE_SECTION: "GENERAL.HIDE_SECTION",
					HIDE: "GENERAL.HIDE",
					HISTORY: "GENERAL.HISTORY",
					INCREASED: "GENERAL.INCREASED",
					INCREASING: "GENERAL.INCREASING",
					INITIAL_MARGIN_FRACTION: "GENERAL.INITIAL_MARGIN_FRACTION",
					KEEP_TRADING: "GENERAL.KEEP_TRADING",
					LAYER_1: "GENERAL.LAYER_1",
					LEARN_MORE: "GENERAL.LEARN_MORE",
					LEGACY: "GENERAL.LEGACY",
					LEVERAGE: "GENERAL.LEVERAGE",
					LIVE: "GENERAL.LIVE",
					LONG_POSITION_SHORT: "GENERAL.LONG_POSITION_SHORT",
					MAINTENANCE_MARGIN_FRACTION: "GENERAL.MAINTENANCE_MARGIN_FRACTION",
					MAKE_ONE_TRADE: "GENERAL.MAKE_ONE_TRADE",
					MARGIN_USAGE: "GENERAL.MARGIN_USAGE",
					MARGIN: "GENERAL.MARGIN",
					MARKET_NAME: "GENERAL.MARKET_NAME",
					MARKET_SEARCH_DOES_NOT_EXIST_YET: "GENERAL.MARKET_SEARCH_DOES_NOT_EXIST_YET",
					MARKET_SEARCH_PLACEHOLDER: "GENERAL.MARKET_SEARCH_PLACEHOLDER",
					MARKET: "GENERAL.MARKET",
					MARKETS: "GENERAL.MARKETS",
					MAX_WITHDRAW: "GENERAL.MAX_WITHDRAW",
					MAX: "GENERAL.MAX",
					MAXIMUM_LEVERAGE: "GENERAL.MAXIMUM_LEVERAGE",
					MENU: "GENERAL.MENU",
					METRICS: "GENERAL.METRICS",
					MINIMUM_ORDER_SIZE: "GENERAL.MINIMUM_ORDER_SIZE",
					MODIFY: "GENERAL.MODIFY",
					NEW: "GENERAL.NEW",
					NONE: "GENERAL.NONE",
					OPERATIONAL: "GENERAL.OPERATIONAL",
					OPTIONAL: "GENERAL.OPTIONAL",
					OR: "GENERAL.OR",
					ORDERS: "GENERAL.ORDERS",
					OTHER_DETAILS: "GENERAL.OTHER_DETAILS",
					OTHER: "GENERAL.OTHER",
					OVERVIEW: "GENERAL.OVERVIEW",
					PENDING: "GENERAL.PENDING",
					PERPETUALS_UNAVAILABLE_IN_US: "GENERAL.PERPETUALS_UNAVAILABLE_IN_US",
					PERPETUALS: "GENERAL.PERPETUALS",
					POSITION: "GENERAL.POSITION",
					POWERED_BY: "GENERAL.POWERED_BY",
					PROFILE: "GENERAL.PROFILE",
					PROFIT_AND_LOSS_ABSOLUTE: "GENERAL.PROFIT_AND_LOSS_ABSOLUTE",
					PROFIT_AND_LOSS_ABSOLUTE_BY: "GENERAL.PROFIT_AND_LOSS_ABSOLUTE_BY",
					PROFIT_AND_LOSS_ABSOLUTE_LABEL: "GENERAL.PROFIT_AND_LOSS_ABSOLUTE_LABEL",
					PROFIT_AND_LOSS_PERCENT: "GENERAL.PROFIT_AND_LOSS_PERCENT",
					PROFIT_AND_LOSS_PERCENT_BY: "GENERAL.PROFIT_AND_LOSS_PERCENT_BY",
					PROFIT_AND_LOSS_PERCENT_LABEL: "GENERAL.PROFIT_AND_LOSS_PERCENT_LABEL",
					PRICE_CHART_SHORT: "GENERAL.PRICE_CHART_SHORT",
					PRICE: "GENERAL.PRICE",
					PRIVACY: "GENERAL.PRIVACY",
					PROMOTION: "GENERAL.PROMOTION",
					QUEUED: "GENERAL.QUEUED",
					QUERY_NOT_FOUND: "GENERAL.QUERY_NOT_FOUND",
					RANKINGS: "GENERAL.RANKINGS",
					RECENT_TRADES_SHORT: "GENERAL.RECENT_TRADES_SHORT",
					REFERRAL_CODE: "GENERAL.REFERRAL_CODE",
					REFERRALS: "GENERAL.REFERRALS",
					REFERRER_PERCENT_OFF: "GENERAL.REFERRER_PERCENT_OFF",
					RESULTS: "GENERAL.RESULTS",
					REWARDS: "GENERAL.REWARDS",
					SAVE: "GENERAL.SAVE",
					SAVED: "GENERAL.SAVED",
					SELL: "GENERAL.SELL",
					SEND: "GENERAL.SEND",
					SHARE: "GENERAL.SHARE",
					SHORT_POSITION_SHORT: "GENERAL.SHORT_POSITION_SHORT",
					SIDE: "GENERAL.SIDE",
					SIZE: "GENERAL.SIZE",
					SLOW_WITHDRAW: "GENERAL.SLOW_WITHDRAW",
					SORT_BY: "GENERAL.SORT_BY",
					START_TRADING: "GENERAL.START_TRADING",
					STATISTICS: "GENERAL.STATISTICS",
					STATUS: "GENERAL.STATUS",
					STEP_SIZE: "GENERAL.STEP_SIZE",
					STOP_ORDER_SHORT: "GENERAL.STOP_ORDER_SHORT",
					SWITCH_LEADERBOARD: "GENERAL.SWITCH_LEADERBOARD",
					TAKE_ME_THERE: "GENERAL.TAKE_ME_THERE",
					TICK_SIZE: "GENERAL.TICK_SIZE",
					TIER: "GENERAL.TIER",
					TIME: "GENERAL.TIME",
					TIMESTAMP_ERROR: "GENERAL.TIMESTAMP_ERROR",
					TRADE_AN_AMOUNT: "GENERAL.TRADE_AN_AMOUNT",
					TRADE: "GENERAL.TRADE",
					TRADER: "GENERAL.TRADER",
					TRADING: "GENERAL.TRADING",
					TRADING_FEE_REDUCTION: "GENERAL.TRADING_FEE_REDUCTION",
					TRADING_FEE_REDUCTION_DESCRIPTION_2: "GENERAL.TRADING_FEE_REDUCTION_DESCRIPTION_2",
					TRADING_REWARDS: "GENERAL.TRADING_REWARDS",
					TRAILING_STOP_SHORT: "GENERAL.TRAILING_STOP_SHORT",
					TRANSFER: "GENERAL.TRANSFER",
					TRANSFER_IN: "GENERAL.TRANSFER_IN",
					TRANSFER_OUT: "GENERAL.TRANSFER_OUT",
					TRANSFERS: "GENERAL.TRANSFERS",
					TYPE: "GENERAL.TYPE",
					UNAVAILABLE: "GENERAL.UNAVAILABLE",
					UNCONFIRMED: "GENERAL.UNCONFIRMED",
					UNKNOWN_ERROR: "GENERAL.UNKNOWN_ERROR",
					UNKNOWN: "GENERAL.UNKNOWN",
					USERNAME: "GENERAL.USERNAME",
					VIEW: "GENERAL.VIEW",
					VIEW_DETAILS: "GENERAL.VIEW_DETAILS",
					VIEW_LEAGUE: "GENERAL.VIEW_LEAGUE",
					VIEW_OPTIONS: "GENERAL.VIEW_OPTIONS",
					VIEWS: "GENERAL.VIEWS",
					VOLUME_30D: "GENERAL.VOLUME_30D",
					WALLET_BALANCE: "GENERAL.WALLET_BALANCE",
					WALLET: "GENERAL.WALLET",
					WEBSITE: "GENERAL.WEBSITE",
					WHITEPAPER: "GENERAL.WHITEPAPER",
					WITHDRAW: "GENERAL.WITHDRAW",
					YOU: "GENERAL.YOU",
					"0X_PRIMARY_DESCRIPTION": "ASSET_DESCRIPTIONS.0X_PRIMARY_DESCRIPTION",
					"0X_SECONDARY_DESCRIPTION": "ASSET_DESCRIPTIONS.0X_SECONDARY_DESCRIPTION",
					"1INCH_PRIMARY_DESCRIPTION": "ASSET_DESCRIPTIONS.1INCH_PRIMARY_DESCRIPTION",
					"1INCH_SECONDARY_DESCRIPTION": "ASSET_DESCRIPTIONS.1INCH_SECONDARY_DESCRIPTION",
					AAVE_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.AAVE_PRIMARY_DESCRIPTION",
					AAVE_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.AAVE_SECONDARY_DESCRIPTION",
					ALGORAND_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.ALGORAND_PRIMARY_DESCRIPTION",
					ALGORAND_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.ALGORAND_SECONDARY_DESCRIPTION",
					AVAX_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.AVAX_PRIMARY_DESCRIPTION",
					AVAX_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.AVAX_SECONDARY_DESCRIPTION",
					BITCOIN_CASH_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.BITCOIN_CASH_PRIMARY_DESCRIPTION",
					BITCOIN_CASH_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.BITCOIN_CASH_SECONDARY_DESCRIPTION",
					BITCOIN_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.BITCOIN_PRIMARY_DESCRIPTION",
					BITCOIN_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.BITCOIN_SECONDARY_DESCRIPTION",
					CARDANO_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.CARDANO_PRIMARY_DESCRIPTION",
					CARDANO_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.CARDANO_SECONDARY_DESCRIPTION",
					CELO_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.CELO_PRIMARY_DESCRIPTION",
					CELO_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.CELO_SECONDARY_DESCRIPTION",
					CHAINLINK_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.CHAINLINK_PRIMARY_DESCRIPTION",
					CHAINLINK_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.CHAINLINK_SECONDARY_DESCRIPTION",
					COMPOUND_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.COMPOUND_PRIMARY_DESCRIPTION",
					COMPOUND_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.COMPOUND_SECONDARY_DESCRIPTION",
					COSMOS_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.COSMOS_PRIMARY_DESCRIPTION",
					COSMOS_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.COSMOS_SECONDARY_DESCRIPTION",
					CURVE_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.CURVE_PRIMARY_DESCRIPTION",
					CURVE_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.CURVE_SECONDARY_DESCRIPTION",
					DOGECOIN_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.DOGECOIN_PRIMARY_DESCRIPTION",
					DOGECOIN_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.DOGECOIN_SECONDARY_DESCRIPTION",
					ENJ_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.ENJ_PRIMARY_DESCRIPTION",
					ENJ_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.ENJ_SECONDARY_DESCRIPTION",
					EOS_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.EOS_PRIMARY_DESCRIPTION",
					EOS_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.EOS_SECONDARY_DESCRIPTION",
					ETC_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.ETC_PRIMARY_DESCRIPTION",
					ETC_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.ETC_SECONDARY_DESCRIPTION",
					ETHEREUM_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.ETHEREUM_PRIMARY_DESCRIPTION",
					ETHEREUM_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.ETHEREUM_SECONDARY_DESCRIPTION",
					FILECOIN_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.FILECOIN_PRIMARY_DESCRIPTION",
					FILECOIN_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.FILECOIN_SECONDARY_DESCRIPTION",
					ICP_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.ICP_PRIMARY_DESCRIPTION",
					ICP_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.ICP_SECONDARY_DESCRIPTION",
					LITECOIN_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.LITECOIN_PRIMARY_DESCRIPTION",
					LITECOIN_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.LITECOIN_SECONDARY_DESCRIPTION",
					LUNA_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.LUNA_PRIMARY_DESCRIPTION",
					LUNA_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.LUNA_SECONDARY_DESCRIPTION",
					MAKER_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.MAKER_PRIMARY_DESCRIPTION",
					MAKER_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.MAKER_SECONDARY_DESCRIPTION",
					MONERO_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.MONERO_PRIMARY_DESCRIPTION",
					MONERO_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.MONERO_SECONDARY_DESCRIPTION",
					NEAR_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.NEAR_PRIMARY_DESCRIPTION",
					NEAR_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.NEAR_SECONDARY_DESCRIPTION",
					POLKADOT_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.POLKADOT_PRIMARY_DESCRIPTION",
					POLKADOT_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.POLKADOT_SECONDARY_DESCRIPTION",
					POLYGON_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.POLYGON_PRIMARY_DESCRIPTION",
					POLYGON_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.POLYGON_SECONDARY_DESCRIPTION",
					RUNE_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.RUNE_PRIMARY_DESCRIPTION",
					RUNE_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.RUNE_SECONDARY_DESCRIPTION",
					SOLANA_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.SOLANA_PRIMARY_DESCRIPTION",
					SOLANA_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.SOLANA_SECONDARY_DESCRIPTION",
					SUSHISWAP_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.SUSHISWAP_PRIMARY_DESCRIPTION",
					SUSHISWAP_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.SUSHISWAP_SECONDARY_DESCRIPTION",
					STELLAR_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.STELLAR_PRIMARY_DESCRIPTION",
					STELLAR_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.STELLAR_SECONDARY_DESCRIPTION",
					SYNTHETIX_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.SYNTHETIX_PRIMARY_DESCRIPTION",
					SYNTHETIX_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.SYNTHETIX_SECONDARY_DESCRIPTION",
					TRX_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.TRX_PRIMARY_DESCRIPTION",
					TRX_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.TRX_SECONDARY_DESCRIPTION",
					UMA_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.UMA_PRIMARY_DESCRIPTION",
					UMA_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.UMA_SECONDARY_DESCRIPTION",
					UNISWAP_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.UNISWAP_PRIMARY_DESCRIPTION",
					UNISWAP_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.UNISWAP_SECONDARY_DESCRIPTION",
					XTZ_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.XTZ_PRIMARY_DESCRIPTION",
					XTZ_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.XTZ_SECONDARY_DESCRIPTION",
					YEARN_FINANCE_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.YEARN_FINANCE_PRIMARY_DESCRIPTION",
					YEARN_FINANCE_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.YEARN_FINANCE_SECONDARY_DESCRIPTION",
					ZCASH_PRIMARY_DESCRIPTION: "ASSET_DESCRIPTIONS.ZCASH_PRIMARY_DESCRIPTION",
					ZCASH_SECONDARY_DESCRIPTION: "ASSET_DESCRIPTIONS.ZCASH_SECONDARY_DESCRIPTION",
					API_DOCUMENTATION: "HEADER.API_DOCUMENTATION",
					CHAT: "HEADER.CHAT",
					COMMUNITY: "HEADER.COMMUNITY",
					COMPATIBILITY: "HEADER.COMPATIBILITY",
					COMPETITION_TERMS: "HEADER.COMPETITION_TERMS",
					COPY_ADDRESS: "HEADER.COPY_ADDRESS",
					DISCONNECT: "HEADER.DISCONNECT",
					DOCUMENTATION: "HEADER.DOCUMENTATION",
					EXCHANGE_METRICS: "HEADER.EXCHANGE_METRICS",
					EXCHANGE_STATUS: "HEADER.EXCHANGE_STATUS",
					FEEDBACK: "HEADER.FEEDBACK",
					GASLESS_DEPOSIT_RULES: "HEADER.GASLESS_DEPOSIT_RULES",
					HELP: "HEADER.HELP",
					HELP_CENTER: "HEADER.HELP_CENTER",
					HELP_CHAT: "HEADER.HELP_CHAT",
					LEAGUE_RULES: "HEADER.LEAGUE_RULES",
					MAINNET: "HEADER.MAINNET",
					MORE: "HEADER.MORE",
					NOTIFICATIONS: "HEADER.NOTIFICATIONS",
					OFF: "HEADER.OFF",
					ON: "HEADER.ON",
					OPEN_IN_ETHERSCAN: "HEADER.OPEN_IN_ETHERSCAN",
					TERMS_OF_USE: "HEADER.TERMS_OF_USE",
					TESTNET: "HEADER.TESTNET",
					BITPIE: "WALLETS.BITPIE",
					CLOVER_WALLET: "WALLETS.CLOVER_WALLET",
					COINBASE_WALLET: "WALLETS.COINBASE_WALLET",
					COIN98: "WALLETS.COIN98",
					HUOBI_WALLET: "WALLETS.HUOBI_WALLET",
					IMTOKEN: "WALLETS.IMTOKEN",
					LEDGER: "WALLETS.LEDGER",
					MATH_WALLET: "WALLETS.MATH_WALLET",
					METAMASK: "WALLETS.METAMASK",
					RAINBOW_WALLET: "WALLETS.RAINBOW_WALLET",
					TOKEN_POCKET: "WALLETS.TOKEN_POCKET",
					TRUST_WALLET: "WALLETS.TRUST_WALLET",
					WALLET_CONNECT: "WALLETS.WALLET_CONNECT",
					TEST_WALLET: "WALLETS.TEST_WALLET",
					OTHER_WALLET: "WALLETS.OTHER_WALLET",
					ABOUT_WALLETS: "ONBOARDING.ABOUT_WALLETS",
					ACKNOWLEDGE_TERMS: "ONBOARDING.ACKNOWLEDGE_TERMS",
					API_KEYS_NOT_FOUND: "ONBOARDING.API_KEYS_NOT_FOUND",
					APPEARS_OUTSIDE_ACCESS: "ONBOARDING.APPEARS_OUTSIDE_ACCESS",
					COMPLETE_ONBOARDING: "ONBOARDING.COMPLETE_ONBOARDING",
					CONFIRM_OWNERSHIP: "ONBOARDING.CONFIRM_OWNERSHIP",
					CONNECT_YOUR_WALLET_EXTENDED: "ONBOARDING.CONNECT_YOUR_WALLET_EXTENDED",
					CONNECT_YOUR_WALLET_SEARCH: "ONBOARDING.CONNECT_YOUR_WALLET_SEARCH",
					CONNECT_YOUR_WALLET: "ONBOARDING.CONNECT_YOUR_WALLET",
					CONNECTING: "ONBOARDING.CONNECTING",
					COULD_NOT_FIND_AFFILIATE: "ONBOARDING.COULD_NOT_FIND_AFFILIATE",
					DONT_MISS: "ONBOARDING.DONT_MISS",
					ENABLE_API: "ONBOARDING.ENABLE_API",
					ENABLE_TRADING: "ONBOARDING.ENABLE_TRADING",
					FINISH_ONBOARDING_DESCRIPTION: "ONBOARDING.FINISH_ONBOARDING_DESCRIPTION",
					GASLESS_ONBOARDING_RULES: "ONBOARDING.GASLESS_ONBOARDING_RULES",
					GET_STARTED: "ONBOARDING.GET_STARTED",
					HAVING_TROUBLE: "ONBOARDING.HAVING_TROUBLE",
					I_AGREE: "ONBOARDING.I_AGREE",
					INVITED_YOU: "ONBOARDING.INVITED_YOU",
					JOIN_ME: "ONBOARDING.JOIN_ME",
					LEDGER_DERIVATION_PATH: "ONBOARDING.LEDGER_DERIVATION_PATH",
					LEGACY_SIGNING: "ONBOARDING.LEGACY_SIGNING",
					LINK_WALLET: "ONBOARDING.LINK_WALLET",
					MISSING_KEYS_DESCRIPTION: "ONBOARDING.MISSING_KEYS_DESCRIPTION",
					NO_FUTURE_ACCESS: "ONBOARDING.NO_FUTURE_ACCESS",
					NO_VPN_USE: "ONBOARDING.NO_VPN_USE",
					NOT_A_RESIDENT: "ONBOARDING.NOT_A_RESIDENT",
					NOT_SUPPORTED_DESCRIPTION: "ONBOARDING.NOT_SUPPORTED_DESCRIPTION",
					NOT_SUPPORTED: "ONBOARDING.NOT_SUPPORTED",
					ONBOARDING: "ONBOARDING.ONBOARDING",
					PERMITTED_TO_USE: "ONBOARDING.PERMITTED_TO_USE",
					PRIVACY_POLICY: "ONBOARDING.PRIVACY_POLICY",
					RECOVER_KEYS: "ONBOARDING.RECOVER_KEYS",
					REFERRAL_DISCOUNT: "ONBOARDING.REFERRAL_DISCOUNT",
					REGISTER: "ONBOARDING.REGISTER",
					REMEMBER_ME: "ONBOARDING.REMEMBER_ME",
					SEARCHING_FOR_LEDGER_DESCRIPTION: "ONBOARDING.SEARCHING_FOR_LEDGER_DESCRIPTION",
					SEARCHING_FOR_LEDGER: "ONBOARDING.SEARCHING_FOR_LEDGER",
					SELECT_A_LANGUAGE: "ONBOARDING.SELECT_A_LANGUAGE",
					SELECT_ACCOUNT_DESCRIPTION: "ONBOARDING.SELECT_ACCOUNT_DESCRIPTION",
					SELECT_ACCOUNT: "ONBOARDING.SELECT_ACCOUNT",
					SEND_REQUEST: "ONBOARDING.SEND_REQUEST",
					SEND_REQUESTS: "ONBOARDING.SEND_REQUESTS",
					SET_UP_ACCOUNT: "ONBOARDING.SET_UP_ACCOUNT",
					SKIP_FOR_NOW: "ONBOARDING.SKIP_FOR_NOW",
					START_TRADING_BLURB: "ONBOARDING.START_TRADING_BLURB",
					TRY_AGAIN: "ONBOARDING.TRY_AGAIN",
					TWO_SIGNATURE_REQUESTS: "ONBOARDING.TWO_SIGNATURE_REQUESTS",
					UNDERSTAND_RISKS: "ONBOARDING.UNDERSTAND_RISKS",
					VALUE_PROP_ADVANCED: "ONBOARDING.VALUE_PROP_ADVANCED",
					VALUE_PROP_ADVANCED_DESC: "ONBOARDING.VALUE_PROP_ADVANCED_DESC",
					VALUE_PROP_LIQUID: "ONBOARDING.VALUE_PROP_LIQUID",
					VALUE_PROP_LIQUID_DESC: "ONBOARDING.VALUE_PROP_LIQUID_DESC",
					VALUE_PROP_REWARDS_DESC: "ONBOARDING.VALUE_PROP_REWARDS_DESC",
					VALUE_PROP_TRUSTLESS: "ONBOARDING.VALUE_PROP_TRUSTLESS",
					VALUE_PROP_TRUSTLESS_DESC: "ONBOARDING.VALUE_PROP_TRUSTLESS_DESC",
					VERIFY_OWNERSHIP: "ONBOARDING.VERIFY_OWNERSHIP",
					WELCOME: "ONBOARDING.WELCOME",
					WELCOME_DYDX: "ONBOARDING.WELCOME_DYDX",
					WRONG_NETWORK_EXPLANATION_PRODUCTION: "ONBOARDING.WRONG_NETWORK_EXPLANATION_PRODUCTION",
					WRONG_NETWORK_EXPLANATION_STAGING: "ONBOARDING.WRONG_NETWORK_EXPLANATION_STAGING",
					WRONG_NETWORK: "ONBOARDING.WRONG_NETWORK",
					YOU_AGREE_TO_TERMS: "ONBOARDING.YOU_AGREE_TO_TERMS",
					CLICK_TO_SHOW: "SIGN_INTO_MOBILE.CLICK_TO_SHOW",
					DESCRIPTION_ABOUT_TO_TRANSFER: "SIGN_INTO_MOBILE.DESCRIPTION_ABOUT_TO_TRANSFER",
					DESCRIPTION_NEVER_SHARE: "SIGN_INTO_MOBILE.DESCRIPTION_NEVER_SHARE",
					HIDE_CODE: "SIGN_INTO_MOBILE.HIDE_CODE",
					SYNC_WITH_DESKTOP: "SIGN_INTO_MOBILE.SYNC_WITH_DESKTOP",
					NEVER_SHARE: "SIGN_INTO_MOBILE.NEVER_SHARE",
					NOT_READY: "SIGN_INTO_MOBILE.NOT_READY",
					READY: "SIGN_INTO_MOBILE.READY",
					SHOW_CODE: "SIGN_INTO_MOBILE.SHOW_CODE",
					TITLE_CONNECTED: "SIGN_INTO_MOBILE.TITLE_CONNECTED",
					TITLE_FAILED_TO_CONNECT: "SIGN_INTO_MOBILE.TITLE_FAILED_TO_CONNECT",
					TITLE_SCAN_FROM_APP: "SIGN_INTO_MOBILE.TITLE_SCAN_FROM_APP",
					TITLE_SIGN_INTO_MOBILE: "SIGN_INTO_MOBILE.TITLE_SIGN_INTO_MOBILE",
					WAIT_SECONDS_SINGULAR: "SIGN_INTO_MOBILE.WAIT_SECONDS_SINGULAR",
					WAIT_SECONDS: "SIGN_INTO_MOBILE.WAIT_SECONDS",
					WHILE_ONBOARDING: "SIGN_INTO_MOBILE.WHILE_ONBOARDING",
					GOVERNANCE_LINK_DESCRIPTION: "LEGAL.GOVERNANCE_LINK_DESCRIPTION",
					LEAVING_WEBSITE: "LEGAL.LEAVING_WEBSITE",
					ENABLE_FOR_THIS_DEPOSIT: "DEPOSIT_MODAL.ENABLE_FOR_THIS_DEPOSIT",
					ENABLE_SYMBOL_ON_DYDX: "DEPOSIT_MODAL.ENABLE_SYMBOL_ON_DYDX",
					ENABLE_SYMBOL: "DEPOSIT_MODAL.ENABLE_SYMBOL",
					ENABLING_SYMBOL: "DEPOSIT_MODAL.ENABLING_SYMBOL",
					EXCHANGE_RATE: "DEPOSIT_MODAL.EXCHANGE_RATE",
					GASLESS_DEPOSITS_DESCRIPTION_PLURAL: "DEPOSIT_MODAL.GASLESS_DEPOSITS_DESCRIPTION_PLURAL",
					GASLESS_DEPOSITS_DESCRIPTION_SINGULAR: "DEPOSIT_MODAL.GASLESS_DEPOSITS_DESCRIPTION_SINGULAR",
					GASLESS_DEPOSITS_RESET: "DEPOSIT_MODAL.GASLESS_DEPOSITS_RESET",
					GASLESS_DEPOSITS_TEMPORARILY_DISABLED: "DEPOSIT_MODAL.GASLESS_DEPOSITS_TEMPORARILY_DISABLED",
					GASLESS_ETH_DEPOSITS: "DEPOSIT_MODAL.GASLESS_ETH_DEPOSITS",
					MAX_SLIPPAGE: "DEPOSIT_MODAL.MAX_SLIPPAGE",
					MINIMUM_DEPOSIT_MET: "DEPOSIT_MODAL.MINIMUM_DEPOSIT_MET",
					MINIMUM_DEPOSIT_UNMET: "DEPOSIT_MODAL.MINIMUM_DEPOSIT_UNMET",
					NON_GASLESS_DEPOSITS: "DEPOSIT_MODAL.NON_GASLESS_DEPOSITS",
					SET_ALLOWANCE_EXPLANATION: "DEPOSIT_MODAL.SET_ALLOWANCE_EXPLANATION",
					SETTING_ALLOWANCE_EXPLANATION: "DEPOSIT_MODAL.SETTING_ALLOWANCE_EXPLANATION",
					SLIPPAGE: "DEPOSIT_MODAL.SLIPPAGE",
					SUBJECT_TO_RULES: "DEPOSIT_MODAL.SUBJECT_TO_RULES",
					SWAP: "DEPOSIT_MODAL.SWAP",
					FAST: "WITHDRAW_MODAL.FAST",
					FAST_WITHDRAW_CONFIRMATION: "WITHDRAW_MODAL.FAST_WITHDRAW_CONFIRMATION",
					SLOW: "WITHDRAW_MODAL.SLOW",
					SLOW_WITHDRAW_DESCRIPTION: "WITHDRAW_MODAL.SLOW_WITHDRAW_DESCRIPTION",
					SLOW_WITHDRAW_CONFIRMATION: "WITHDRAW_MODAL.SLOW_WITHDRAW_CONFIRMATION",
					WITHDRAW_IRREVERSIBLE: "WITHDRAW_MODAL.WITHDRAW_IRREVERSIBLE",
					FEEDBACK_PLACEHOLDER: "FEEDBACK_MODAL.FEEDBACK_PLACEHOLDER",
					GIVE_FEEDBACK: "FEEDBACK_MODAL.GIVE_FEEDBACK",
					POP_UP_NOTIFICATIONS: "PREFERENCES_MODAL.POP_UP_NOTIFICATIONS",
					PREFERENCES: "PREFERENCES_MODAL.PREFERENCES",
					ORDERBOOK_ANIMATIONS: "PREFERENCES_MODAL.ORDERBOOK_ANIMATIONS",
					PROFILE_SHARE_USERNAME: "PREFERENCES_MODAL.PROFILE_SHARE_USERNAME",
					PROFILE_SHARE_ADDRESS: "PREFERENCES_MODAL.PROFILE_SHARE_ADDRESS",
					SAVE_ORDER_AMOUNT: "PREFERENCES_MODAL.SAVE_ORDER_AMOUNT",
					API_DOCUMENTATION_DESCRIPTION: "HELP_MODAL.API_DOCUMENTATION_DESCRIPTION",
					HELP_CENTER_DESCRIPTION: "HELP_MODAL.HELP_CENTER_DESCRIPTION",
					JOIN_DISCORD: "HELP_MODAL.JOIN_DISCORD",
					JOIN_DISCORD_DESCRIPTION: "HELP_MODAL.JOIN_DISCORD_DESCRIPTION",
					LIVE_CHAT: "HELP_MODAL.LIVE_CHAT",
					LIVE_CHAT_DESCRIPTION: "HELP_MODAL.LIVE_CHAT_DESCRIPTION",
					PROVIDE_FEEDBACK: "HELP_MODAL.PROVIDE_FEEDBACK",
					PROVIDE_FEEDBACK_DESCRIPTION: "HELP_MODAL.PROVIDE_FEEDBACK_DESCRIPTION",
					DOCUMENTATION_DESCRIPTION: "MORE_LINKS_MODAL.DOCUMENTATION_DESCRIPTION",
					COMMUNITY_DESCRIPTION: "MORE_LINKS_MODAL.COMMUNITY_DESCRIPTION",
					TERMS_OF_USE_DESCRIPTION: "MORE_LINKS_MODAL.TERMS_OF_USE_DESCRIPTION",
					PRIVACY_POLICY_DESCRIPTION: "MORE_LINKS_MODAL.PRIVACY_POLICY_DESCRIPTION",
					GASLESS_DEPOSIT_RULES_DESCRIPTION: "MORE_LINKS_MODAL.GASLESS_DEPOSIT_RULES_DESCRIPTION",
					COMPETITION_TERMS_DESCRIPTION: "MORE_LINKS_MODAL.COMPETITION_TERMS_DESCRIPTION",
					LEAGUE_RULES_DESCRIPTION: "MORE_LINKS_MODAL.LEAGUE_RULES_DESCRIPTION",
					EXCHANGE_METRICS_DESCRIPTION: "MORE_LINKS_MODAL.EXCHANGE_METRICS_DESCRIPTION",
					EXCHANGE_STATUS_DESCRIPTION: "MORE_LINKS_MODAL.EXCHANGE_STATUS_DESCRIPTION",
					ABOUT_TRADING_DATA_DESCRIPTION: "PORTFOLIO.ABOUT_TRADING_DATA_DESCRIPTION",
					ABOUT_TRADING_DATA: "PORTFOLIO.ABOUT_TRADING_DATA",
					ACTIVE_EPOCH: "PORTFOLIO.ACTIVE_EPOCH",
					ALLOCATION: "PORTFOLIO.ALLOCATION",
					AVERAGE_OPEN_INTEREST: "PORTFOLIO.AVERAGE_OPEN_INTEREST",
					CAN_BE_CLAIMABLE_BY_YOU: "PORTFOLIO.CAN_BE_CLAIMABLE_BY_YOU",
					CLAIM_DATA_DESCRIPTION: "PORTFOLIO.CLAIM_DATA_DESCRIPTION",
					CLAIM_DATA: "PORTFOLIO.CLAIM_DATA",
					COMPILING: "PORTFOLIO.COMPILING",
					COUNTDOWN: "PORTFOLIO.COUNTDOWN",
					CURRENT_EPOCH: "PORTFOLIO.CURRENT_EPOCH",
					CURRENTLY_HELD: "PORTFOLIO.CURRENTLY_HELD",
					DISCOVER_NEW_ASSETS: "PORTFOLIO.DISCOVER_NEW_ASSETS",
					DOWNLOAD_CSV: "PORTFOLIO.DOWNLOAD_CSV",
					EARN_DYDX_FOR_TRADING_DESCRIPTION: "PORTFOLIO.EARN_DYDX_FOR_TRADING_DESCRIPTION",
					EARN_DYDX_FOR_TRADING: "PORTFOLIO.EARN_DYDX_FOR_TRADING",
					EPOCH_NUMBER: "PORTFOLIO.EPOCH_NUMBER",
					ESTIMATED_FOR_THIS_EPOCH: "PORTFOLIO.ESTIMATED_FOR_THIS_EPOCH",
					ESTIMATED_REWARDS: "PORTFOLIO.ESTIMATED_REWARDS",
					ESTIMATED_UNLOCKED_REWARDS: "PORTFOLIO.ESTIMATED_UNLOCKED_REWARDS",
					EXPORT: "PORTFOLIO.EXPORT",
					FEE_DISCOUNT: "PORTFOLIO.FEE_DISCOUNT",
					FEE_STRUCTURE: "PORTFOLIO.FEE_STRUCTURE",
					GASLESS_DEPOSITS_NEW_PROMO: "PORTFOLIO.GASLESS_DEPOSITS_NEW_PROMO",
					GASLESS_DEPOSITS_PROMO: "PORTFOLIO.GASLESS_DEPOSITS_PROMO",
					HOLDING: "PORTFOLIO.HOLDING",
					IN_THIS_EPOCH: "PORTFOLIO.IN_THIS_EPOCH",
					MARKET_NOW_LIVE: "PORTFOLIO.MARKET_NOW_LIVE",
					NONE_HELD: "PORTFOLIO.NONE_HELD",
					OPEN_INTEREST_LABEL: "PORTFOLIO.OPEN_INTEREST_LABEL",
					OVER_THE_LAST_30_DAYS: "PORTFOLIO.OVER_THE_LAST_30_DAYS",
					PORTFOLIO_VALUE: "PORTFOLIO.PORTFOLIO_VALUE",
					PORTFOLIO: "PORTFOLIO.PORTFOLIO",
					PROMOTION_RULES: "PORTFOLIO.PROMOTION_RULES",
					READ_ANNOUNCEMENT: "PORTFOLIO.READ_ANNOUNCEMENT",
					RETROACTIVE_REWARDS: "PORTFOLIO.RETROACTIVE_REWARDS",
					REWARDS_BOOST: "PORTFOLIO.REWARDS_BOOST",
					REWARDS_BOOST_LABEL: "PORTFOLIO.REWARDS_BOOST_LABEL",
					REWARDS_MADE_AVAILABLE: "PORTFOLIO.REWARDS_MADE_AVAILABLE",
					REWARDS_NOT_PROVIDED: "PORTFOLIO.REWARDS_NOT_PROVIDED",
					REWARDS_UPDATE: "PORTFOLIO.REWARDS_UPDATE",
					SEARCH_MARKETS: "PORTFOLIO.SEARCH_MARKETS",
					STOP_MARKET_ORDERS: "PORTFOLIO.STOP_MARKET_ORDERS",
					STOP_MARKET_ORDERS_DESCRIPTION: "PORTFOLIO.STOP_MARKET_ORDERS_DESCRIPTION",
					TARGET_VOLUME: "PORTFOLIO.TARGET_VOLUME",
					TESTNET_DEPOSIT_PROMO: "PORTFOLIO.TESTNET_DEPOSIT_PROMO",
					TESTNET_LOWERCASE: "PORTFOLIO.TESTNET_LOWERCASE",
					TRADES_LABEL: "PORTFOLIO.TRADES_LABEL",
					TRADING_COMPETITION: "PORTFOLIO.TRADING_COMPETITION",
					TRADING_DATA_DESCRIPTION: "PORTFOLIO.TRADING_DATA_DESCRIPTION",
					TRADING_DATA: "PORTFOLIO.TRADING_DATA",
					TRADING_FORMULA_DESCRIPTION: "PORTFOLIO.TRADING_FORMULA_DESCRIPTION",
					TRADING_FORMULA_UPDATE_DESCRIPTION: "PORTFOLIO.TRADING_FORMULA_UPDATE_DESCRIPTION",
					TRADING_FORMULA_UPDATE: "PORTFOLIO.TRADING_FORMULA_UPDATE",
					TRADING_FORMULA: "PORTFOLIO.TRADING_FORMULA",
					TRADING_LEAGUES: "PORTFOLIO.TRADING_LEAGUES",
					TRADING_LEAGUES_DESCRIPTION: "PORTFOLIO.TRADING_LEAGUES_DESCRIPTION",
					TRADING_LEAGUES_PRIZE: "PORTFOLIO.TRADING_LEAGUES_PRIZE",
					TRADING_VOLUME_LABEL: "PORTFOLIO.TRADING_VOLUME_LABEL",
					TRADING_VOLUME: "PORTFOLIO.TRADING_VOLUME",
					TRAILING_VOLUME: "PORTFOLIO.TRAILING_VOLUME",
					TRANSACTION: "PORTFOLIO.TRANSACTION",
					UNLOCKED_ENTIRE_ALLOCATION: "PORTFOLIO.UNLOCKED_ENTIRE_ALLOCATION",
					UNLOCKED: "PORTFOLIO.UNLOCKED",
					UNTIL_NEXT_EPOCH_ON_DATE: "PORTFOLIO.UNTIL_NEXT_EPOCH_ON_DATE",
					VIEW_FEE_STRUCTURE: "PORTFOLIO.VIEW_FEE_STRUCTURE",
					VIEW_REWARDS: "PORTFOLIO.VIEW_REWARDS",
					AMOUNT_FILLED: "TRADE.AMOUNT_FILLED",
					ANNUALIZED: "TRADE.ANNUALIZED",
					AVERAGE_CLOSE: "TRADE.AVERAGE_CLOSE",
					AVERAGE_OPEN: "TRADE.AVERAGE_OPEN",
					BASELINE_POSITION_SIZE: "TRADE.BASELINE_POSITION_SIZE",
					CANCEL_ALL: "TRADE.CANCEL_ALL",
					CANCEL_ORDER: "TRADE.CANCEL_ORDER",
					CANCEL_REASON: "TRADE.CANCEL_REASON",
					CANCELED_ON_CHAIN: "TRADE.CANCELED_ON_CHAIN",
					CHANGE_24H: "TRADE.CHANGE_24H",
					CLEAN_UP: "TRADE.CLEAN_UP",
					CLOSE_POSITION: "TRADE.CLOSE_POSITION",
					COULD_NOT_FILL: "TRADE.COULD_NOT_FILL",
					CURRENT_ANNUALIZED_RATE: "TRADE.CURRENT_ANNUALIZED_RATE",
					CURRENT_RATE_1H: "TRADE.CURRENT_RATE_1H",
					CURRENT_RATE_8H: "TRADE.CURRENT_RATE_8H",
					CURRENTLY_TRADING_ROPSTEN: "TRADE.CURRENTLY_TRADING_ROPSTEN",
					EXECUTION: "TRADE.EXECUTION",
					EXPECTED_PRICE: "TRADE.EXPECTED_PRICE",
					EXPIRED: "TRADE.EXPIRED",
					FAILED: "TRADE.FAILED",
					FEE_AMOUNT: "TRADE.FEE_AMOUNT",
					FEE_PERCENT: "TRADE.FEE_PERCENT",
					FEE: "TRADE.FEE",
					FILL_OR_KILL: "TRADE.FILL_OR_KILL",
					FILLS_EMPTY_STATE: "TRADE.FILLS_EMPTY_STATE",
					FUNDING_PAYMENTS_EMPTY_STATE: "TRADE.FUNDING_PAYMENTS_EMPTY_STATE",
					FUNDING_PAYMENTS_SHORT: "TRADE.FUNDING_PAYMENTS_SHORT",
					FUNDING_PAYMENTS: "TRADE.FUNDING_PAYMENTS",
					FUNDING_RATE_1H_SHORT: "TRADE.FUNDING_RATE_1H_SHORT",
					FUNDING_RATE: "TRADE.FUNDING_RATE",
					GOOD_TIL_DATE_ABBREVIATED: "TRADE.GOOD_TIL_DATE_ABBREVIATED",
					GOOD_TIL_TIME: "TRADE.GOOD_TIL_TIME",
					GOOD_TIL: "TRADE.GOOD_TIL",
					IMMEDIATE_OR_CANCEL: "TRADE.IMMEDIATE_OR_CANCEL",
					IMMEDIATE_OR_CANCEL_PARTIALLY_FILLED: "TRADE.IMMEDIATE_OR_CANCEL_PARTIALLY_FILLED",
					INCREMENTAL_INITIAL_MARGIN_FRACTION: "TRADE.INCREMENTAL_INITIAL_MARGIN_FRACTION",
					INCREMENTAL_POSITION_SIZE: "TRADE.INCREMENTAL_POSITION_SIZE",
					INDEX_PRICE_ABBREVIATED: "TRADE.INDEX_PRICE_ABBREVIATED",
					INDEX_PRICE: "TRADE.INDEX_PRICE",
					INITIAL_STOP: "TRADE.INITIAL_STOP",
					LIMIT_ORDER_DESCRIPTION: "TRADE.LIMIT_ORDER_DESCRIPTION",
					LIMIT_ORDER_SHORT: "TRADE.LIMIT_ORDER_SHORT",
					LIMIT_ORDER: "TRADE.LIMIT_ORDER",
					LIMIT_PRICE: "TRADE.LIMIT_PRICE",
					LIQUIDATED: "TRADE.LIQUIDATED",
					LIQUIDATION_PRICE_SHORT: "TRADE.LIQUIDATION_PRICE_SHORT",
					LIQUIDATION_PRICE: "TRADE.LIQUIDATION_PRICE",
					LIQUIDITY: "TRADE.LIQUIDITY",
					MAKER_FEE: "TRADE.MAKER_FEE",
					MAKER: "TRADE.MAKER",
					MANAGE_YOUR_RISK_STOP: "TRADE.MANAGE_YOUR_RISK_STOP",
					MARKET_ORDER_DESCRIPTION: "TRADE.MARKET_ORDER_DESCRIPTION",
					MARKET_ORDER_SHORT: "TRADE.MARKET_ORDER_SHORT",
					MARKET_ORDER: "TRADE.MARKET_ORDER",
					MARKET_PRICE_SHORT: "TRADE.MARKET_PRICE_SHORT",
					MARKET_PROFIT: "TRADE.MARKET_PROFIT",
					MAXIMUM_POSITION_SIZE: "TRADE.MAXIMUM_POSITION_SIZE",
					NET_FUNDING: "TRADE.NET_FUNDING",
					NEXT_FUNDING: "TRADE.NEXT_FUNDING",
					NEXT_IN: "TRADE.NEXT_IN",
					NOTIONAL_VALUE: "TRADE.NOTIONAL_VALUE",
					OPEN_INTEREST: "TRADE.OPEN_INTEREST",
					OPEN_POSITIONS: "TRADE.OPEN_POSITIONS",
					OPEN_STATUS: "TRADE.OPEN_STATUS",
					ORACLE_PRICE_ABBREVIATED: "TRADE.ORACLE_PRICE_ABBREVIATED",
					ORACLE_PRICE: "TRADE.ORACLE_PRICE",
					ORDER_EXPIRED: "TRADE.ORDER_EXPIRED",
					ORDER_FILLED: "TRADE.ORDER_FILLED",
					ORDER_TYPE: "TRADE.ORDER_TYPE",
					ORDERBOOK_ASK_PRICE: "TRADE.ORDERBOOK_ASK_PRICE",
					ORDERBOOK_BID_PRICE: "TRADE.ORDERBOOK_BID_PRICE",
					ORDERBOOK_MID_MARKET_PRICE: "TRADE.ORDERBOOK_MID_MARKET_PRICE",
					ORDERBOOK_MY_ORDER_SIZE: "TRADE.ORDERBOOK_MY_ORDER_SIZE",
					ORDERBOOK_ORDER_SIZE: "TRADE.ORDERBOOK_ORDER_SIZE",
					ORDERBOOK_SHORT: "TRADE.ORDERBOOK_SHORT",
					ORDERBOOK_SPREAD_PERCENT: "TRADE.ORDERBOOK_SPREAD_PERCENT",
					ORDERBOOK_SPREAD: "TRADE.ORDERBOOK_SPREAD",
					ORDERS_EMPTY_STATE: "TRADE.ORDERS_EMPTY_STATE",
					PARTIALLY_FILLED: "TRADE.PARTIALLY_FILLED",
					PAYMENT: "TRADE.PAYMENT",
					PAYMENTS: "TRADE.PAYMENTS",
					PERCENT_TRAIL: "TRADE.PERCENT_TRAIL",
					PLACE_LIMIT_ORDER: "TRADE.PLACE_LIMIT_ORDER",
					PLACE_MARKET_ORDER: "TRADE.PLACE_MARKET_ORDER",
					PLACE_STOP_ORDER: "TRADE.PLACE_STOP_ORDER",
					PLACE_TAKE_PROFIT_ORDER: "TRADE.PLACE_TAKE_PROFIT_ORDER",
					POSITIONS_EMPTY_STATE: "TRADE.POSITIONS_EMPTY_STATE",
					POSITIONS: "TRADE.POSITIONS",
					POST_ONLY: "TRADE.POST_ONLY",
					POST_ONLY_WOULD_CROSS: "TRADE.POST_ONLY_WOULD_CROSS",
					PRICE_IMPACT: "TRADE.PRICE_IMPACT",
					PROFIT_AND_LOSS: "TRADE.PROFIT_AND_LOSS",
					RATE_1H: "TRADE.RATE_1H",
					RATE_8H: "TRADE.RATE_8H",
					REALIZED_PNL: "TRADE.REALIZED_PNL",
					SELECT_MARKET: "TRADE.SELECT_MARKET",
					SELF_TRADE: "TRADE.SELF_TRADE",
					SET_ORDER_SIZE: "TRADE.SET_ORDER_SIZE",
					SLIDER: "TRADE.SLIDER",
					STOP_LIMIT_DESCRIPTION: "TRADE.STOP_LIMIT_DESCRIPTION",
					STOP_LIMIT: "TRADE.STOP_LIMIT",
					STOP_MARKET: "TRADE.STOP_MARKET",
					STOP_MARKET_DESCRIPTION: "TRADE.STOP_MARKET_DESCRIPTION",
					STOP_PRICE_ABBREVIATED: "TRADE.STOP_PRICE_ABBREVIATED",
					STOP_PRICE: "TRADE.STOP_PRICE",
					TAKE_PROFIT: "TRADE.TAKE_PROFIT",
					TAKE_PROFIT_LIMIT_DESCRIPTION: "TRADE.TAKE_PROFIT_LIMIT_DESCRIPTION",
					TAKE_PROFIT_LIMIT_SHORT: "TRADE.TAKE_PROFIT_LIMIT_SHORT",
					TAKE_PROFIT_LIMIT: "TRADE.TAKE_PROFIT_LIMIT",
					TAKE_PROFIT_MARKET: "TRADE.TAKE_PROFIT_MARKET",
					TAKE_PROFIT_MARKET_DESCRIPTION: "TRADE.TAKE_PROFIT_MARKET_DESCRIPTION",
					TAKE_PROFIT_MARKET_SHORT: "TRADE.TAKE_PROFIT_MARKET_SHORT",
					TAKER_FEE: "TRADE.TAKER_FEE",
					TAKER: "TRADE.TAKER",
					TAP_TO_CLOSE: "TRADE.TAP_TO_CLOSE",
					TIME_IN_FORCE: "TRADE.TIME_IN_FORCE",
					TOTAL_COST: "TRADE.TOTAL_COST",
					TOTAL_SIZE: "TRADE.TOTAL_SIZE",
					TOTAL: "TRADE.TOTAL",
					TRADES_24H: "TRADE.TRADES_24H",
					TRADES_EMPTY_STATE: "TRADE.TRADES_EMPTY_STATE",
					TRADES: "TRADE.TRADES",
					TRAILING_PERCENT: "TRADE.TRAILING_PERCENT",
					TRAILING_STOP_DESCRIPTION: "TRADE.TRAILING_STOP_DESCRIPTION",
					TRAILING_STOP: "TRADE.TRAILING_STOP",
					TRANSFERS_EMPTY_STATE: "TRADE.TRANSFERS_EMPTY_STATE",
					TRIGGER_PRICE_SHORT: "TRADE.TRIGGER_PRICE_SHORT",
					TRIGGER_PRICE: "TRADE.TRIGGER_PRICE",
					UNDERCOLLATERALIZED: "TRADE.UNDERCOLLATERALIZED",
					UNREALIZED_PNL: "TRADE.UNREALIZED_PNL",
					UNTRIGGERED: "TRADE.UNTRIGGERED",
					UP_TO_X: "TRADE.UP_TO_X",
					USER_CANCELED: "TRADE.USER_CANCELED",
					VOLUME_24H: "TRADE.VOLUME_24H",
					VOLUME: "TRADE.VOLUME",
					WANT_TO_AVOID_LIQUIDATION: "TRADE.WANT_TO_AVOID_LIQUIDATION",
					YOUR_POSITION_WAS_LIQUIDATED: "TRADE.YOUR_POSITION_WAS_LIQUIDATED",
					ACTIVE: "LEAGUES.ACTIVE",
					AND: "LEAGUES.AND",
					BROWSE_LEAGUES: "LEAGUES.BROWSE_LEAGUES",
					BRONZE: "LEAGUES.BRONZE",
					BY_RECENT: "LEAGUES.BY_RECENT",
					COMPETE_AGAINST: "LEAGUES.COMPETE_AGAINST",
					DAILY_HEDGIES: "LEAGUES.DAILY_HEDGIES",
					DAILY_SUBHEADER: "LEAGUES.DAILY_SUBHEADER",
					DEMOTION: "LEAGUES.DEMOTION",
					DIAMOND: "LEAGUES.DIAMOND",
					EARN_AVATAR: "LEAGUES.EARN_AVATAR",
					EMPTY_LADDER_STATE: "LEAGUES.EMPTY_LADDER_STATE",
					GIVEN_TO: "LEAGUES.GIVEN_TO",
					GOLD: "LEAGUES.GOLD",
					HELD_BY: "LEAGUES.HELD_BY",
					INACTIVE: "LEAGUES.INACTIVE",
					LAST_SEASON: "LEAGUES.LAST_SEASON",
					LAST_SEASON_OUTCOME: "LEAGUES.LAST_SEASON_OUTCOME",
					LEAGUE_SIZE: "LEAGUES.LEAGUE_SIZE",
					LEAGUE: "LEAGUES.LEAGUE",
					LEAGUES: "LEAGUES.LEAGUES",
					LEAGUES_LAUNCH_TITLE: "LEAGUES.LEAGUES_LAUNCH_TITLE",
					LEAGUES_LAUNCH_BODY: "LEAGUES.LEAGUES_LAUNCH_BODY",
					MIN_BALANCE: "LEAGUES.MIN_BALANCE",
					MIN_EQUITY: "LEAGUES.MIN_EQUITY",
					NO_CHANGE: "LEAGUES.NO_CHANGE",
					NO_WINNER: "LEAGUES.NO_WINNER",
					NOT_ELIGIBLE: "LEAGUES.NOT_ELIGIBLE",
					ON_TRACK: "LEAGUES.ON_TRACK",
					PAST_HEDGIES: "LEAGUES.PAST_HEDGIES",
					PERIOD_LEAGUES: "LEAGUES.PERIOD_LEAGUES",
					PLACE: "LEAGUES.PLACE",
					PLATINUM: "LEAGUES.PLATINUM",
					PRIOR_SEASON_HEDGIES: "LEAGUES.PRIOR_SEASON_HEDGIES",
					PRIZE_CASH: "LEAGUES.PRIZE_CASH",
					PRIZE_DAILY_HEDGIE: "LEAGUES.PRIZE_DAILY_HEDGIE",
					PRIZE_HEDGIE: "LEAGUES.PRIZE_HEDGIE",
					PRIZE_LEAGUE_MIXED: "LEAGUES.PRIZE_LEAGUE_MIXED",
					PROMOTION_TO: "LEAGUES.PROMOTION_TO",
					RANK: "LEAGUES.RANK",
					RANK_NUM: "LEAGUES.RANK_NUM",
					REQUIRED_FOR: "LEAGUES.REQUIRED_FOR",
					REQUIREMENTS: "LEAGUES.REQUIREMENTS",
					SEASON: "LEAGUES.SEASON",
					SEASON_ENDS: "LEAGUES.SEASON_ENDS",
					SEASON_NUM: "LEAGUES.SEASON_NUM",
					SILVER: "LEAGUES.SILVER",
					THIS_SEASON: "LEAGUES.THIS_SEASON",
					THIS_SEASON_HEDGIES: "LEAGUES.THIS_SEASON_HEDGIES",
					TO_RANGE: "LEAGUES.TO_RANGE",
					TO_STAY_IN: "LEAGUES.TO_STAY_IN",
					TODAYS_HEDGIE: "LEAGUES.TODAYS_HEDGIE",
					TOP: "LEAGUES.TOP",
					VIEWING_LEAGUE: "LEAGUES.VIEWING_LEAGUE",
					WILL_ARRIVE: "LEAGUES.WILL_ARRIVE",
					WILL_ARRIVE_SHORTLY: "LEAGUES.WILL_ARRIVE_SHORTLY",
					WILL_COST_GAS: "LEAGUES.WILL_COST_GAS",
					YOU_WON: "LEAGUES.YOU_WON",
					YOUR_LEAGUE: "LEAGUES.YOUR_LEAGUE",
					YOURE_IN: "LEAGUES.YOURE_IN",
					"66_REDUCTION": "NOTIFICATIONS.66_REDUCTION",
					ADJUSTED_IMR: "NOTIFICATIONS.ADJUSTED_IMR",
					ADJUSTED_IMR_BODY: "NOTIFICATIONS.ADJUSTED_IMR_BODY",
					COMPLIANCE_ALERT: "NOTIFICATIONS.COMPLIANCE_ALERT",
					DEPOSIT_IN_PROGRESS_DESCRIPTION: "NOTIFICATIONS.DEPOSIT_IN_PROGRESS_DESCRIPTION",
					DEPOSIT_IN_PROGRESS: "NOTIFICATIONS.DEPOSIT_IN_PROGRESS",
					DEPOSIT_SUCCESS_DESCRIPTION: "NOTIFICATIONS.DEPOSIT_SUCCESS_DESCRIPTION",
					DEPOSIT_SUCCESS: "NOTIFICATIONS.DEPOSIT_SUCCESS",
					EPOCH_REWARDS: "NOTIFICATIONS.EPOCH_REWARDS",
					EPOCH_REWARDS_BODY: "NOTIFICATIONS.EPOCH_REWARDS_BODY",
					FAST_WITHDRAW_PENDING_DESCRIPTION: "NOTIFICATIONS.FAST_WITHDRAW_PENDING_DESCRIPTION",
					FAST_WITHDRAW_PENDING: "NOTIFICATIONS.FAST_WITHDRAW_PENDING",
					FAST_WITHDRAW_SUCCESS_DESCRIPTION: "NOTIFICATIONS.FAST_WITHDRAW_SUCCESS_DESCRIPTION",
					FAST_WITHDRAW_SUCCESS: "NOTIFICATIONS.FAST_WITHDRAW_SUCCESS",
					LEGAL_UPDATES: "NOTIFICATIONS.LEGAL_UPDATES",
					LEGAL_UPDATES_DESCRIPTION: "NOTIFICATIONS.LEGAL_UPDATES_DESCRIPTION",
					MAINTENANCE_MARGIN_ADJUSTMENTS: "NOTIFICATIONS.MAINTENANCE_MARGIN_ADJUSTMENTS",
					NOTIFICATIONS_EMPTY_STATE: "NOTIFICATIONS.NOTIFICATIONS_EMPTY_STATE",
					OUT_OF_TEN_CONFIRMATIONS: "NOTIFICATIONS.OUT_OF_TEN_CONFIRMATIONS",
					PERMANENTLY_BLOCKED: "NOTIFICATIONS.PERMANENTLY_BLOCKED",
					PERMANENTLY_BLOCKED_ELLIPTIC: "NOTIFICATIONS.PERMANENTLY_BLOCKED_ELLIPTIC",
					PERMANENTLY_BLOCKED_DESCRIPTION: "NOTIFICATIONS.PERMANENTLY_BLOCKED_DESCRIPTION",
					SLOW_WITHDRAW_AVAILABLE_DESCRIPTION: "NOTIFICATIONS.SLOW_WITHDRAW_AVAILABLE_DESCRIPTION",
					SLOW_WITHDRAW_AVAILABLE: "NOTIFICATIONS.SLOW_WITHDRAW_AVAILABLE",
					SLOW_WITHDRAW_PENDING_DESCRIPTION: "NOTIFICATIONS.SLOW_WITHDRAW_PENDING_DESCRIPTION",
					SLOW_WITHDRAW_PENDING: "NOTIFICATIONS.SLOW_WITHDRAW_PENDING",
					SUSPICIOUS_TRADE: "NOTIFICATIONS.SUSPICIOUS_TRADE",
					SUSPICIOUS_TRADE_BODY: "NOTIFICATIONS.SUSPICIOUS_TRADE_BODY",
					ACCOUNT_DESCRIPTION: "EMAIL_NOTIFICATIONS.ACCOUNT_DESCRIPTION",
					EMAIL_NOTIFICATIONS: "EMAIL_NOTIFICATIONS.EMAIL_NOTIFICATIONS",
					EMAIL_UPDATES: "EMAIL_NOTIFICATIONS.EMAIL_UPDATES",
					ERROR_MANY_REQUESTS: "EMAIL_NOTIFICATIONS.ERROR_MANY_REQUESTS",
					GENERAL_DESCRIPTION: "EMAIL_NOTIFICATIONS.GENERAL_DESCRIPTION",
					GET_NOTIFIED: "EMAIL_NOTIFICATIONS.GET_NOTIFIED",
					MANAGE_NOTIFICATIONS: "EMAIL_NOTIFICATIONS.MANAGE_NOTIFICATIONS",
					MANAGE_NOTIFICATIONS_ONBOARD: "EMAIL_NOTIFICATIONS.MANAGE_NOTIFICATIONS_ONBOARD",
					RESEND_VERIFICATION: "EMAIL_NOTIFICATIONS.RESEND_VERIFICATION",
					REQUIRED: "EMAIL_NOTIFICATIONS.REQUIRED",
					SENT_VERIFICATION: "EMAIL_NOTIFICATIONS.SENT_VERIFICATION",
					SETTINGS: "EMAIL_NOTIFICATIONS.SETTINGS",
					SETUP: "EMAIL_NOTIFICATIONS.SETUP",
					TRADING_DESCRIPTION: "EMAIL_NOTIFICATIONS.TRADING_DESCRIPTION",
					UNVERIFIED: "EMAIL_NOTIFICATIONS.UNVERIFIED",
					VERIFICATION_FAIL: "EMAIL_NOTIFICATIONS.VERIFICATION_FAIL",
					VERIFICATION_FAIL_BODY: "EMAIL_NOTIFICATIONS.VERIFICATION_FAIL_BODY",
					VERIFICATION_HAS_SENT_BODY: "EMAIL_NOTIFICATIONS.VERIFICATION_HAS_SENT_BODY",
					VERIFICATION_SUCCESS: "EMAIL_NOTIFICATIONS.VERIFICATION_SUCCESS",
					VERIFICATION_SUCCESS_BODY: "EMAIL_NOTIFICATIONS.VERIFICATION_SUCCESS_BODY",
					VERIFIED: "EMAIL_NOTIFICATIONS.VERIFIED",
					VERIFY_EMAIL: "EMAIL_NOTIFICATIONS.VERIFY_EMAIL",
					VERIFY_EMAIL_BODY: "EMAIL_NOTIFICATIONS.VERIFY_EMAIL_BODY",
					VERIFY_EMAIL_CTA: "EMAIL_NOTIFICATIONS.VERIFY_EMAIL_CTA",
					ALERT_FORCE_WITHDRAW_REQUESTED: "FORCE_WITHDRAW.ALERT_FORCE_WITHDRAW_REQUESTED",
					ALERT_FUNDS_WITHDRAWN: "FORCE_WITHDRAW.ALERT_FUNDS_WITHDRAWN",
					AUTHENTICATE: "FORCE_WITHDRAW.AUTHENTICATE",
					DESCRIPTION_WAIT: "FORCE_WITHDRAW.DESCRIPTION_WAIT",
					FORCE_WITHDRAW: "FORCE_WITHDRAW.FORCE_WITHDRAW",
					REQUEST_FORCE_WITHDRAW: "FORCE_WITHDRAW.REQUEST_FORCE_WITHDRAW",
					STEP_1_CONNECT: "FORCE_WITHDRAW.STEP_1_CONNECT",
					STEP_2_AUTHENTICATE: "FORCE_WITHDRAW.STEP_2_AUTHENTICATE",
					STEP_3_INITIATE: "FORCE_WITHDRAW.STEP_3_INITIATE",
					STEP_4_WAIT: "FORCE_WITHDRAW.STEP_4_WAIT",
					STEP_5_WITHDRAW: "FORCE_WITHDRAW.STEP_5_WITHDRAW",
					VIEW_TRANSACTION: "FORCE_WITHDRAW.VIEW_TRANSACTION",
					WITHDRAW_AMOUNT: "FORCE_WITHDRAW.WITHDRAW_AMOUNT",
					TESTNET_DEPOSITS: "TEST_FUNDS_MODAL.TESTNET_DEPOSITS",
					TESTNET_DEPOSITS_BODY: "TEST_FUNDS_MODAL.TESTNET_DEPOSITS_BODY",
					DEMOTED_DESC: "LEAGUE_OUTCOME_MODAL.DEMOTED_DESC",
					DEMOTED_SUB_DESC: "LEAGUE_OUTCOME_MODAL.DEMOTED_SUB_DESC",
					INACTIVE_DESC: "LEAGUE_OUTCOME_MODAL.INACTIVE_DESC",
					PROMOTED_DESC: "LEAGUE_OUTCOME_MODAL.PROMOTED_DESC",
					PROMOTED_SUB_DESC: "LEAGUE_OUTCOME_MODAL.PROMOTED_SUB_DESC",
					YOU_DEMOTED: "LEAGUE_OUTCOME_MODAL.YOU_DEMOTED",
					YOU_INACTIVE: "LEAGUE_OUTCOME_MODAL.YOU_INACTIVE",
					YOU_PROMOTED: "LEAGUE_OUTCOME_MODAL.YOU_PROMOTED",
					HEDGIES_NFT: "HEDGIES.HEDGIES_NFT",
					COMPLIANCE_BODY: "COMPLIANCE_MODAL.COMPLIANCE_BODY",
					COMPLIANCE_BODY_FIRST_OFFENSE_1: "COMPLIANCE_MODAL.COMPLIANCE_BODY_FIRST_OFFENSE_1",
					COMPLIANCE_BODY_FIRST_OFFENSE_2: "COMPLIANCE_MODAL.COMPLIANCE_BODY_FIRST_OFFENSE_2",
					COMPLIANCE_REQUEST: "COMPLIANCE_MODAL.COMPLIANCE_REQUEST",
					CONTINUE: "COMPLIANCE_MODAL.CONTINUE",
					COUNTRY_OF_RESIDENCE: "COMPLIANCE_MODAL.COUNTRY_OF_RESIDENCE",
					SUBMIT: "COMPLIANCE_MODAL.SUBMIT",
					TRADING_LOCATION: "COMPLIANCE_MODAL.TRADING_LOCATION",
					TYPE_TO_SEARCH: "COMPLIANCE_MODAL.TYPE_TO_SEARCH",
					ADDRESS: "PROFILES_PAGE.ADDRESS",
					APPLICATION_PENDING: "PROFILES_PAGE.APPLICATION_PENDING",
					APPLICATION_REJECTED: "PROFILES_PAGE.APPLICATION_REJECTED",
					CERTIFY_AND_ACCEPT: "PROFILES_PAGE.CERTIFY_AND_ACCEPT",
					CERTIFY_CAPACITY_AND_AUTHORITY: "PROFILES_PAGE.CERTIFY_CAPACITY_AND_AUTHORITY",
					CITIZENSHIP: "PROFILES_PAGE.CITIZENSHIP",
					CITY: "PROFILES_PAGE.CITY",
					COMPETITIVE_LEAGUES: "PROFILES_PAGE.COMPETITIVE_LEAGUES",
					COPY_LINK: "PROFILES_PAGE.COPY_LINK",
					COULD_NOT_FIND_USER: "PROFILES_PAGE.COULD_NOT_FIND_USER",
					COUNTRY: "PROFILES_PAGE.COUNTRY",
					EARN_COMMISSION: "PROFILES_PAGE.EARN_COMMISSION",
					EARN_DYDX_REWARDS: "PROFILES_PAGE.EARN_DYDX_REWARDS",
					EARN_USDC: "PROFILES_PAGE.EARN_USDC",
					EARNINGS: "PROFILES_PAGE.EARNINGS",
					ENTITY: "PROFILES_PAGE.ENTITY",
					ENTITY_NAME: "PROFILES_PAGE.ENTITY_NAME",
					EPOCH_REVENUE: "PROFILES_PAGE.EPOCH_REVENUE",
					FEE_SHARING_FOR_EACH_NEW_TRADER: "PROFILES_PAGE.FEE_SHARING_FOR_EACH_NEW_TRADER",
					FIRST_NAME: "PROFILES_PAGE.FIRST_NAME",
					FULL_NAME: "PROFILES_PAGE.FULL_NAME",
					HISTORICAL_TRADING_PERF: "PROFILES_PAGE.HISTORICAL_TRADING_PERF",
					I_HAVE_READ_AND_AGREE: "PROFILES_PAGE.I_HAVE_READ_AND_AGREE",
					INCORPORATION_COUNTRY: "PROFILES_PAGE.INCORPORATION_COUNTRY",
					INDIVIDUAL: "PROFILES_PAGE.INDIVIDUAL",
					LAST_EPOCH: "PROFILES_PAGE.LAST_EPOCH",
					LAST_NAME: "PROFILES_PAGE.LAST_NAME",
					LAST_UPDATED: "PROFILES_PAGE.LAST_UPDATED",
					MANDATORY_MINIMIZED_W8_FORM: "PROFILES_PAGE.MANDATORY_MINIMIZED_W8_FORM",
					NO_HEDGIES_OTHER: "PROFILES_PAGE.NO_HEDGIES_OTHER",
					NO_HEDGIES_YOU: "PROFILES_PAGE.NO_HEDGIES_YOU",
					NUDGE_TITLE: "PROFILES_PAGE.NUDGE_TITLE",
					NUDGE_DESCRIPTION: "PROFILES_PAGE.NUDGE_DESCRIPTION",
					OPENSEA: "PROFILES_PAGE.OPENSEA",
					POSTAL_CODE: "PROFILES_PAGE.POSTAL_CODE",
					PRINT_NAME: "PROFILES_PAGE.PRINT_NAME",
					REWARDS_BY_EPOCH: "PROFILES_PAGE.REWARDS_BY_EPOCH",
					SELECT_ONE: "PROFILES_PAGE.SELECT_ONE",
					SIGN_AND_SUBMIT: "PROFILES_PAGE.SIGN_AND_SUBMIT",
					SIGNATURE: "PROFILES_PAGE.SIGNATURE",
					STATE: "PROFILES_PAGE.STATE",
					STREET_ADDRESS: "PROFILES_PAGE.STREET_ADDRESS",
					TOTAL_REVENUE: "PROFILES_PAGE.TOTAL_REVENUE",
					TRADE_TO_WIN: "PROFILES_PAGE.TRADE_TO_WIN",
					TRADERS_JOINED: "PROFILES_PAGE.TRADERS_JOINED",
					USERS_REFERRED: "PROFILES_PAGE.USERS_REFERRED",
					YOU_CAN_WIN_THESE: "PROFILES_PAGE.YOU_CAN_WIN_THESE",
					BOOST: "REWARDS_BOOST_MODAL.BOOST",
					EARN_ADDITIONAL_REWARDS: "REWARDS_BOOST_MODAL.EARN_ADDITIONAL_REWARDS",
					STAKED: "REWARDS_BOOST_MODAL.STAKED",
					EPOCH_END_EARNED: "EPOCH_END_MODAL.EPOCH_END_EARNED",
					YOU_EARNED: "EPOCH_END_MODAL.YOU_EARNED",
					ALLOWANCE_AFTER: "ALLOWANCE_ALERT_MODAL.ALLOWANCE_AFTER",
					ALLOWANCE_ALERT_BODY: "ALLOWANCE_ALERT_MODAL.ALLOWANCE_ALERT_BODY",
					ALLOWANCE_ALERT_TITLE: "ALLOWANCE_ALERT_MODAL.ALLOWANCE_ALERT_TITLE",
					ALLOWANCE_WARNING: "ALLOWANCE_ALERT_MODAL.ALLOWANCE_WARNING",
					FUNDS_RECOVERABLE: "ALLOWANCE_ALERT_MODAL.FUNDS_RECOVERABLE",
					PROTECT_YOUR_FUNDS: "ALLOWANCE_ALERT_MODAL.PROTECT_YOUR_FUNDS",
					RECOVER_FUNDS: "ALLOWANCE_ALERT_MODAL.RECOVER_FUNDS",
					UNSET: "ALLOWANCE_ALERT_MODAL.UNSET",
					WALLET_CAN_BE_USED_NORMALLY: "ALLOWANCE_ALERT_MODAL.WALLET_CAN_BE_USED_NORMALLY",
					GET_AFFILIATE_LINK: "DISCOVERABILITY.GET_AFFILIATE_LINK",
					REFER_AND_EARN: "DISCOVERABILITY.REFER_AND_EARN",
					SET_UP_REFERRALS_BODY: "DISCOVERABILITY.SET_UP_REFERRALS_BODY",
					SET_UP_REFERRALS_PARAM: "DISCOVERABILITY.SET_UP_REFERRALS_PARAM"
				}), {
					SOMETHING_WENT_WRONG_WITH_MESSAGE: "ERRORS.GENERAL.SOMETHING_WENT_WRONG_WITH_MESSAGE",
					SOMETHING_WENT_WRONG: "ERRORS.GENERAL.SOMETHING_WENT_WRONG",
					TIMESTAMP_DISCREPANCY: "ERRORS.GENERAL.TIMESTAMP_DISCREPANCY",
					AMOUNT_INPUT_STEP_SIZE: "ERRORS.TRADE_BOX.AMOUNT_INPUT_STEP_SIZE",
					BUY_TRIGGER_TOO_CLOSE_TO_LIQUIDATION_PRICE: "ERRORS.TRADE_BOX.BUY_TRIGGER_TOO_CLOSE_TO_LIQUIDATION_PRICE",
					INVALID_LARGE_POSITION_LEVERAGE: "ERRORS.TRADE_BOX.INVALID_LARGE_POSITION_LEVERAGE",
					INVALID_NEW_ACCOUNT_MARGIN_USAGE: "ERRORS.TRADE_BOX.INVALID_NEW_ACCOUNT_MARGIN_USAGE",
					INVALID_NEW_POSITION_LEVERAGE: "ERRORS.TRADE_BOX.INVALID_NEW_POSITION_LEVERAGE",
					LIMITED_ORDERS_FOR_PAIR: "ERRORS.TRADE_BOX.LIMITED_ORDERS_FOR_PAIR",
					MARKET_ORDER_ERROR_INDEX_PRICE_SLIPPAGE: "ERRORS.TRADE_BOX.MARKET_ORDER_ERROR_INDEX_PRICE_SLIPPAGE",
					MARKET_ORDER_ERROR_ORDERBOOK_SLIPPAGE: "ERRORS.TRADE_BOX.MARKET_ORDER_ERROR_ORDERBOOK_SLIPPAGE",
					MARKET_ORDER_NOT_ENOUGH_LIQUIDITY: "ERRORS.TRADE_BOX.MARKET_ORDER_NOT_ENOUGH_LIQUIDITY",
					MARKET_ORDER_PRICE_IMPACT_AT_MAX_LEVERAGE: "ERRORS.TRADE_BOX.MARKET_ORDER_PRICE_IMPACT_AT_MAX_LEVERAGE",
					NEW_POSITION_SIZE_OVER_MAX: "ERRORS.TRADE_BOX.NEW_POSITION_SIZE_OVER_MAX",
					NO_EQUITY_DEPOSIT_FIRST: "ERRORS.TRADE_BOX.NO_EQUITY_DEPOSIT_FIRST",
					ORDER_BELOW_COLLATERALIZATION: "ERRORS.TRADE_BOX.ORDER_BELOW_COLLATERALIZATION",
					ORDER_CROSSES_OWN_ORDER: "ERRORS.TRADE_BOX.ORDER_CROSSES_OWN_ORDER",
					ORDER_SIZE_BELOW_MIN_SIZE: "ERRORS.TRADE_BOX.ORDER_SIZE_BELOW_MIN_SIZE",
					ORDER_WITH_CURRENT_ORDERS_INVALID: "ERRORS.TRADE_BOX.ORDER_WITH_CURRENT_ORDERS_INVALID",
					SELL_TRIGGER_TOO_CLOSE_TO_LIQUIDATION_PRICE: "ERRORS.TRADE_BOX.SELL_TRIGGER_TOO_CLOSE_TO_LIQUIDATION_PRICE",
					TAKER_FEE_INVALID: "ERRORS.TRADE_BOX.TAKER_FEE_INVALID",
					TRIGGER_MUST_ABOVE_INDEX_PRICE: "ERRORS.TRADE_BOX.TRIGGER_MUST_ABOVE_INDEX_PRICE",
					TRIGGER_MUST_BELOW_INDEX_PRICE: "ERRORS.TRADE_BOX.TRIGGER_MUST_BELOW_INDEX_PRICE",
					TRIGGER_TOO_CLOSE_TO_LIQUIDATION_PRICE: "ERRORS.TRADE_BOX.TRIGGER_TOO_CLOSE_TO_LIQUIDATION_PRICE",
					USER_MAX_ORDERS: "ERRORS.TRADE_BOX.USER_MAX_ORDERS",
					BANNED_USER: "ERRORS.ONBOARDING.BANNED_USER",
					INVALID_EMAIL: "ERRORS.ONBOARDING.INVALID_EMAIL",
					INVALID_USERNAME: "ERRORS.ONBOARDING.INVALID_USERNAME",
					KEY_RECOVERY_FAILED: "ERRORS.ONBOARDING.KEY_RECOVERY_FAILED",
					LEDGER_U2F_REQUIRED: "ERRORS.ONBOARDING.LEDGER_U2F_REQUIRED",
					USERNAME_TAKEN: "ERRORS.ONBOARDING.USERNAME_TAKEN",
					WALLET_NO_TRANSACTIONS: "ERRORS.ONBOARDING.WALLET_NO_TRANSACTIONS",
					DEPOSIT_ACCOUNT_OUT_OF_SYNC: "ERRORS.DEPOSIT_MODAL.DEPOSIT_ACCOUNT_OUT_OF_SYNC",
					DEPOSIT_MORE_THAN_BALANCE: "ERRORS.DEPOSIT_MODAL.DEPOSIT_MORE_THAN_BALANCE",
					DEPOSIT_WRONG_NETWORK_PRODUCTION: "ERRORS.DEPOSIT_MODAL.DEPOSIT_WRONG_NETWORK_PRODUCTION",
					DEPOSIT_WRONG_NETWORK_STAGING: "ERRORS.DEPOSIT_MODAL.DEPOSIT_WRONG_NETWORK_STAGING",
					FAST_WITHDRAW_NOT_ENOUGH_LIQUIDITY: "ERRORS.WITHDRAW_MODAL.FAST_WITHDRAW_NOT_ENOUGH_LIQUIDITY",
					MAX_FAST_WITHDRAW_AMOUNT: "ERRORS.WITHDRAW_MODAL.MAX_FAST_WITHDRAW_AMOUNT",
					MIN_SLOW_WITHDRAW_AMOUNT: "ERRORS.WITHDRAW_MODAL.MIN_SLOW_WITHDRAW_AMOUNT",
					RESTRICTED_OPEN_POSITIONS_WITHDRAW: "ERRORS.WITHDRAW_MODAL.RESTRICTED_OPEN_POSITIONS_WITHDRAW",
					WITHDRAW_MORE_THAN_FREE_DUE_TO_FEE: "ERRORS.WITHDRAW_MODAL.WITHDRAW_MORE_THAN_FREE_DUE_TO_FEE",
					WITHDRAW_MORE_THAN_FREE: "ERRORS.WITHDRAW_MODAL.WITHDRAW_MORE_THAN_FREE"
				}), {
					ALWAYS_VERIFY_URL: "WARNINGS.ONBOARDING.ALWAYS_VERIFY_URL",
					MARKET_ORDER_CLOSE_TO_MAX_LEVERAGE: "WARNINGS.TRADE_BOX.MARKET_ORDER_CLOSE_TO_MAX_LEVERAGE",
					MARKET_ORDER_WARNING_INDEX_PRICE_SLIPPAGE: "WARNINGS.TRADE_BOX.MARKET_ORDER_WARNING_INDEX_PRICE_SLIPPAGE",
					MARKET_ORDER_WARNING_ORDERBOOK_SLIPPAGE: "WARNINGS.TRADE_BOX.MARKET_ORDER_WARNING_ORDERBOOK_SLIPPAGE",
					MARKET_STATUS_CLOSE_ONLY: "WARNINGS.TRADE_BOX.MARKET_STATUS_CLOSE_ONLY",
					STOP_MARKET_ORDER_MAY_NOT_EXECUTE: "WARNINGS.TRADE_BOX.STOP_MARKET_ORDER_MAY_NOT_EXECUTE",
					TAKE_PROFIT_MARKET_ORDER_MAY_NOT_EXECUTE: "WARNINGS.TRADE_BOX.TAKE_PROFIT_MARKET_ORDER_MAY_NOT_EXECUTE"
				})
		},
		21: function(t, r, a) {
			"use strict";
			a.d(r, "b", (function() {
				return i
			})), a.d(r, "c", (function() {
				return c
			})), a.d(r, "m", (function() {
				return l
			})), a.d(r, "l", (function() {
				return E
			})), a.d(r, "d", (function() {
				return u
			})), a.d(r, "g", (function() {
				return d
			})), a.d(r, "k", (function() {
				return _
			})), a.d(r, "f", (function() {
				return O
			})), a.d(r, "j", (function() {
				return T
			})), a.d(r, "e", (function() {
				return I
			})), a.d(r, "a", (function() {
				return S
			})), a.d(r, "h", (function() {
				return p
			})), a.d(r, "i", (function() {
				return R
			}));
			var o = a(24);
			const i = Object(o.a)("CONNECT_WALLET"),
				c = Object(o.a)("DISCONNECT_WALLET"),
				l = Object(o.a)("WALLET_LOADED"),
				E = Object(o.a)("USER_ACCOUNT_CHANGED"),
				u = Object(o.a)("NETWORK_ID_CHANGED"),
				d = Object(o.a)("SET_ASSET_BALANCES"),
				_ = Object(o.a)("SET_WALLET_BALANCES"),
				O = Object(o.a)("SET_ASSET_ALLOWANCES"),
				T = Object(o.a)("SET_STARK_KEY_PAIR"),
				I = Object(o.a)("SET_API_KEY_PAIR"),
				S = Object(o.a)("CLEAR_KEY_PAIRS"),
				p = Object(o.a)("SET_ONBOARDING_CONNECTION_ERROR"),
				R = Object(o.a)("SET_SHOULD_SAVE_KEY_PAIRS_IN_LOCAL_STORAGE")
		},
		211: function(t, r, a) {
			"use strict";
			a.d(r, "b", (function() {
				return getDepositWithdrawData
			})), a.d(r, "c", (function() {
				return getPendingDeposits
			})), a.d(r, "a", (function() {
				return getAvailableSlowWithdrawAmount
			}));
			var o = a(25),
				i = a.n(o);
			const getDepositWithdrawData = t => i()(t, "depositWithdrawData.depositWithdrawData"),
				getPendingDeposits = t => i()(t, "depositWithdrawData.pendingDeposits"),
				getAvailableSlowWithdrawAmount = t => i()(t, "depositWithdrawData.availableSlowWithdrawAmount")
		},
		213: function(t, r, a) {
			"use strict";
			a.d(r, "b", (function() {
				return E
			})), a.d(r, "a", (function() {
				return u
			}));
			var o = a(176),
				i = a(86),
				c = a(403),
				l = a(298);

			function asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function _asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			}
			const E = Object(o.createAsyncAction)("PROXY_DEPOSIT", ({
					amount: t,
					asset: r,
					isUserRegistered: a,
					positionId: o,
					sendGaslessTransaction: i,
					starkPublicKey: E,
					usdcAmount: u,
					usePredefinedGas: d,
					walletAddress: _,
					zeroExResponseObject: O
				}) => ({
					meta: {
						amount: t,
						asset: r,
						usdcAmount: u
					},
					makeRequest: function() {
						var T = _asyncToGenerator((function*() {
							const T = yield Object(l.a)();
							return Object(c.a)({
								amount: t,
								asset: r,
								gasPrice: T,
								isUserRegistered: a,
								positionId: o,
								sendGaslessTransaction: i,
								starkPublicKey: E,
								usdcAmount: u,
								usePredefinedGas: d,
								walletAddress: _,
								zeroExResponseObject: O
							})
						}));
						return function makeRequest() {
							return T.apply(this, arguments)
						}
					}()
				})),
				u = Object(o.createAsyncAction)("CHECK_GASLESS_DEPOSITS_LIMIT", ({
					depositType: t,
					walletAddress: r
				}) => ({
					makeRequest: function() {
						var a = _asyncToGenerator((function*() {
							const a = i.a[t];
							return (yield fetch(`https://api.biconomy.io/api/v1/dapp/checkLimits?userAddress=${r}&apiId=${a}`, {
								headers: {
									"x-api-key": "EW-uP9RXf.0914ee5b-82ea-4739-8054-df397008bcd6"
								}
							})).json()
						}));
						return function makeRequest() {
							return a.apply(this, arguments)
						}
					}()
				}))
		},
		219: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return i
			}));
			var o = a(24);
			const i = Object(o.a)("SET_TRADE_DATA")
		},
		22: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return l
			}));
			var o = a(577),
				i = a.n(o),
				c = a(41);

			function ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function _defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const l = {
				CHECK_REGISTRATION: "CHECK_REGISTRATION",
				CHECK_USER_EXISTS: "CHECK_USER_EXISTS",
				COMPLIANCE_MODAL: "COMPLIANCE_MODAL",
				CREATE_ACCOUNT: "CREATE_ACCOUNT",
				DEPOSIT_MODAL: "DEPOSIT_MODAL",
				GAS_PRICE: "GAS_PRICE",
				GENERATE_API_KEY: "GENERATE_API_KEY",
				GENERATE_STARK_KEY: "GENERATE_STARK_KEY",
				GET_COMPETITION_PRIZES: "GET_COMPETITION_PRIZES",
				GET_FAST_WITHDRAW_FEE: "GET_FAST_WITHDRAW_FEE",
				GET_FILLS: "GET_FILLS",
				GET_FILLS_HISTORY: "GET_FILLS_HISTORY",
				GET_LEAGUE_SEASON_OUTCOME: "GET_LEAGUE_SEASON_OUTCOME",
				GET_LOCAL_STORAGE: "GET_LOCAL_STORAGE",
				GET_MAX_FAST_WITHDRAW_AMOUNT: "GET_MAX_FAST_WITHDRAW_AMOUNT",
				GET_REWARDS_DATA: "GET_REWARDS_DATA",
				GET_USER_PROMO_ELIGIBILITY: "GET_USER_PROMO_ELIGIBILITY",
				GET_USER: "GET_USER",
				GET_USER_ACCOUNT_LEADERBOARD_INFO: "GET_USER_ACCOUNT_LEADERBOARD_INFO",
				GET_USER_PRIVATE_ACCOUNT: "GET_USER_PRIVATE_ACCOUNT",
				HISTORY_EXPORT: "HISTORY_EXPORT",
				INVALID_AFFILIATE_LINK: "INVALID_AFFILIATE_LINK",
				LEDGER_DERIVATION: "LEDGER_DERIVATION",
				PLACE_ORDER: "PLACE_ORDER",
				POLL_ALLOWANCES: "POLL_ALLOWANCES",
				POLL_CHART_DATA: "POLL_CHART_DATA",
				POLL_HISTORICAL_FUNDING_DATA: "POLL_HISTORICAL_FUNDING_DATA",
				POLL_HISTORICAL_PNL: "POLL_HISTORICAL_PNL",
				POLL_SLOW_WITHDRAW: "POLL_SLOW_WITHDRAW",
				POLL_WALLET_BALANCES: "POLL_WALLET_BALANCES",
				PROVIDER_ENGINE: "PROVIDER_ENGINE",
				SELF_SERVICE_AFFILIATE_RESGISTRATION: "SELF_SERVICE_AFFILIATE_RESGISTRATION",
				SET_ALLOWANCE: "SET_ALLOWANCE",
				SLOW_WITHDRAW: "SLOW_WITHDRAW",
				UPDATE_PREFERENCES: "UPDATE_PREFERENCES",
				UPDATE_MARKET_STATS: "UPDATE_MARKET_STATS",
				UPDATE_STARRED_MARKETS: "UPDATE_STARRED_MARKETS",
				UPDATE_USER_TRADE_OPTIONS: "UPDATE_USER_TRADE_OPTIONS",
				VERIFY_EMAIL: "VERIFY_EMAIL",
				WALLET_CONNECTION: "WALLET_CONNECTION",
				WEBSOCKET: "WEBSOCKET",
				WITHDRAW_MODAL: "WITHDRAW_MODAL"
			};
			const E = new class {
				constructor() {
					this.initialize = () => {
						i.a.start({
							apiKey: "dbaeb70dfc8e0919020e71d36eaf7a78"
						})
					}, this.setStore = t => {
						this.store = t
					}, this.notify = ({
						error: t,
						location: r,
						metaData: a = {}
					}) => {
						{
							const o = this.store.getState(),
								l = Object(c.o)(o),
								E = Object(c.m)(o);
							i.a.notify(t, t => {
								const o = function _objectSpread(t) {
									for (var r = 1; r < arguments.length; r++) {
										var a = null != arguments[r] ? arguments[r] : {};
										r % 2 ? ownKeys(Object(a), !0).forEach((function(r) {
											_defineProperty(t, r, a[r])
										})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach((function(r) {
											Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
										}))
									}
									return t
								}({
									location: r,
									walletType: l,
									walletAddress: E
								}, a);
								t.addMetadata("custom", o)
							})
						}
					}, this.store = null
				}
			};
			r.b = E
		},
		227: function(t, r, a) {
			"use strict";
			a.r(r);
			var o = a(426),
				i = a(427),
				c = a(428),
				l = a(429);

			function ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function _objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? ownKeys(Object(a), !0).forEach((function(r) {
						_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function _defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			r.default = _objectSpread(_objectSpread({}, o), {}, {
				ERRORS: i,
				TOOLTIPS: c,
				WARNINGS: l
			})
		},
		228: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return i
			})), a.d(r, "b", (function() {
				return c
			})), a.d(r, "c", (function() {
				return l
			}));
			var o = a(24);
			const i = Object(o.a)("CLEAR_ALL_ORDERS"),
				c = Object(o.a)("CLEAR_ORDER"),
				l = Object(o.a)("VIEWED_ORDERS")
		},
		229: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return i
			})), a.d(r, "b", (function() {
				return c
			})), a.d(r, "c", (function() {
				return l
			}));
			var o = a(24);
			const i = Object(o.a)("SET_CANDLE_RESOLUTION"),
				c = Object(o.a)("SET_CANDLES"),
				l = Object(o.a)("UPDATE_CANDLES")
		},
		233: function(t, r, a) {
			"use strict";
			var o = a(148);
			const i = new o.StarkwareLib(null, Number("1"), {
				gasMultiplier: 1.1
			});
			r.a = i
		},
		234: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return getIsOutOfDateError
			})), a.d(r, "b", (function() {
				return getWalletConnectionError
			}));
			var o = a(48),
				i = a.n(o),
				c = a(2);
			const l = "ChunkLoadError",
				getIsOutOfDateError = ({
					error: t
				}) => {
					const r = null === t || void 0 === t ? void 0 : t.name,
						a = null === t || void 0 === t ? void 0 : t.message;
					return r === l || i()(a, "Loading CSS chunk") || i()(a, "Unexpected token '<'") || i()(a, "expected expression, got '<'")
				},
				getWalletConnectionError = ({
					error: t
				}) => {
					const r = null === t || void 0 === t ? void 0 : t.message;
					return r.includes("API key not found") ? {
						key: c.a.KEY_RECOVERY_FAILED
					} : {
						key: c.a.SOMETHING_WENT_WRONG,
						params: {
							ERROR_MESSAGE: r
						}
					}
				}
		},
		235: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return getIsLocaleLoaded
			})), a.d(r, "c", (function() {
				return getSelectedLocale
			})), a.d(r, "b", (function() {
				return d
			}));
			var o = a(71),
				i = a.n(o),
				c = a(25),
				l = a.n(c),
				E = a(65),
				u = a(227);
			const getIsLocaleLoaded = t => l()(t, "localization.isLocaleLoaded"),
				getSelectedLocale = t => l()(t, "localization.selectedLocale"),
				d = Object(E.a)([t => l()(t, "localization.localeData")], t => ({
					key: r,
					params: a = {}
				}) => {
					let o = l()(t, r) || l()(u.default, r, "");
					return i()(a, (t, r) => {
						o = o.replace(new RegExp(`{${r}}`, "g"), t)
					}), o
				})
		},
		236: function(t, r, a) {
			"use strict";
			a.d(r, "b", (function() {
				return y
			})), a.d(r, "a", (function() {
				return C
			}));
			var o = a(182),
				i = a.n(o),
				c = a(0),
				l = a.n(c),
				E = a(1),
				u = a.n(E),
				d = a(13),
				_ = a.n(d),
				O = "QPMMDYtyr6SLkN-CFiIpd",
				T = "_1-Y__Lio8NMPTKhDOGvWgl",
				I = "_2zyGZgFatvGeYZSZOCE247",
				S = "-CpwTCh2IWZL7af_1OSlS",
				p = "_1T_-M2cOa94pbtwC3HTN9i",
				R = "_2untN7XCw_6xXBtNqib3SV",
				A = "nDGgOtrKy-lXycg94QJNS",
				b = "uzM1_3_wZsIaLfMq59YsN",
				N = "_30nVFLwNTwYttTY1fOL1Gv";
			const C = {
					TOP: "TOP",
					BOTTOM: "BOTTOM",
					LEFT: "LEFT",
					RIGHT: "RIGHT"
				},
				WithHoverLabel = ({
					backgroundLight: t = !1,
					children: r,
					className: a,
					disableLabel: o,
					label: i,
					position: c = C.BOTTOM
				}) => l.a.createElement("div", {
					className: _()(O, {
						[T]: c !== C.LEFT
					}, a)
				}, l.a.createElement("div", {
					className: I
				}, r), !o && l.a.createElement("div", {
					className: _()(S, {
						[p]: t,
						[R]: c === C.TOP,
						[A]: c === C.BOTTOM,
						[b]: c === C.LEFT,
						[N]: c === C.RIGHT
					})
				}, i));
			WithHoverLabel.propTypes = {
				backgroundLight: u.a.bool,
				children: u.a.oneOfType([u.a.arrayOf(u.a.node), u.a.node]).isRequired,
				className: u.a.string,
				disableLabel: u.a.bool,
				label: u.a.oneOfType([u.a.arrayOf(u.a.node), u.a.node, u.a.string]).isRequired,
				position: u.a.oneOf(i()(C))
			};
			var y = WithHoverLabel
		},
		237: function(t, r, a) {
			"use strict";
			a.d(r, "b", (function() {
				return o
			})), a.d(r, "d", (function() {
				return i
			})), a.d(r, "c", (function() {
				return c
			})), a.d(r, "a", (function() {
				return l
			}));
			const o = {
					HOUR: "HOUR",
					DAY: "DAY",
					WEEK: "WEEK",
					MONTH: "MONTH",
					THREE_MONTHS: "THREE_MONTHS",
					ALL: "ALL"
				},
				i = {
					[o.HOUR]: {
						hours: 1
					},
					[o.DAY]: {
						hours: 24
					},
					[o.WEEK]: {
						days: 7
					},
					[o.MONTH]: {
						days: 30
					},
					[o.THREE_MONTHS]: {
						months: 3
					},
					[o.ALL]: {
						years: 1 / 0
					}
				},
				c = {
					[o.HOUR]: {
						hour: "numeric",
						minute: "numeric",
						second: "numeric"
					},
					[o.DAY]: {
						hour: "numeric",
						minute: "numeric"
					},
					[o.WEEK]: {
						weekday: "short",
						hour: "numeric"
					},
					[o.MONTH]: {
						month: "numeric",
						day: "numeric"
					},
					[o.THREE_MONTHS]: {
						month: "numeric",
						day: "numeric"
					},
					[o.ALL]: {
						year: "numeric",
						month: "numeric",
						day: "numeric"
					}
				},
				l = [o.DAY, o.WEEK, o.MONTH, o.THREE_MONTHS]
		},
		257: function(t, r, a) {
			"use strict";
			a.d(r, "e", (function() {
				return getLeaderboards
			})), a.d(r, "i", (function() {
				return getPrevLeaderboards
			})), a.d(r, "f", (function() {
				return getLeaguesUserInfo
			})), a.d(r, "j", (function() {
				return getPrevLeaguesUserInfo
			})), a.d(r, "k", (function() {
				return getSelectedPeriod
			})), a.d(r, "d", (function() {
				return getIsTimespanToggled
			})), a.d(r, "b", (function() {
				return getDailyCompetitionUserInfo
			})), a.d(r, "a", (function() {
				return getCurrentHedgies
			})), a.d(r, "g", (function() {
				return getPastDailyHedgies
			})), a.d(r, "h", (function() {
				return getPastWeeklyHedgies
			})), a.d(r, "c", (function() {
				return i
			}));
			var o = a(65);
			const getLeaderboards = t => t.leagues.leaderboards,
				getPrevLeaderboards = t => t.leagues.prevLeaderboards,
				getLeaguesUserInfo = t => t.leagues.leaguesUserInfo,
				getPrevLeaguesUserInfo = t => t.leagues.prevLeaguesUserInfo,
				getSelectedPeriod = t => t.leagues.selectedPeriod,
				getIsTimespanToggled = t => t.leagues.timespanToggle,
				getDailyCompetitionUserInfo = t => t.leagues.dailyCompetitionUserInfo,
				getCurrentHedgies = t => t.leagues.currentHedgies,
				getPastDailyHedgies = t => t.leagues.pastHedgies.daily,
				getPastWeeklyHedgies = t => t.leagues.pastHedgies.weekly,
				i = (Object(o.a)([getLeaguesUserInfo], t => null === t || void 0 === t ? void 0 : t.percentRank), t => t.leagues.historicalPrizes)
		},
		258: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return o
			})), a.d(r, "b", (function() {
				return i
			}));
			const o = {
					CANCELED: "CANCELED",
					CONFIRMED: "CONFIRMED",
					PENDING: "PENDING",
					QUEUED: "QUEUED",
					UNCONFIRMED: "UNCONFIRMED"
				},
				i = {
					DEPOSIT: "DEPOSIT",
					FAST_WITHDRAWAL: "FAST_WITHDRAWAL",
					TRANSFER_IN: "TRANSFER_IN",
					TRANSFER_OUT: "TRANSFER_OUT",
					WITHDRAWAL: "WITHDRAWAL"
				}
		},
		26: function(t, r, a) {
			"use strict";
			a.d(r, "e", (function() {
				return i
			})), a.d(r, "a", (function() {
				return c
			})), a.d(r, "c", (function() {
				return l
			})), a.d(r, "f", (function() {
				return E
			})), a.d(r, "d", (function() {
				return u
			})), a.d(r, "g", (function() {
				return d
			})), a.d(r, "b", (function() {
				return _
			}));
			var o = a(2);
			const i = {
					MARKET: "MARKET",
					LIMIT: "LIMIT",
					STOP_LIMIT: "STOP_LIMIT",
					STOP_MARKET: "STOP_MARKET",
					TAKE_PROFIT: "TAKE_PROFIT",
					TAKE_PROFIT_MARKET: "TAKE_PROFIT_MARKET",
					TRAILING_STOP: "TRAILING_STOP",
					LIQUIDATED: "LIQUIDATED"
				},
				c = {
					BUY: "BUY",
					SELL: "SELL"
				},
				l = {
					PENDING: "PENDING",
					OPEN: "OPEN",
					FILLED: "FILLED",
					CANCELED: "CANCELED",
					UNTRIGGERED: "UNTRIGGERED"
				},
				E = {
					[i.MARKET]: o.a.MARKET_ORDER_SHORT,
					[i.LIMIT]: o.a.LIMIT_ORDER_SHORT,
					[i.LIQUIDATED]: o.a.LIQUIDATED,
					[i.MARKET]: o.a.MARKET_ORDER_SHORT,
					[i.STOP_LIMIT]: o.a.STOP_LIMIT,
					[i.STOP_MARKET]: o.a.STOP_MARKET,
					[i.TAKE_PROFIT]: o.a.TAKE_PROFIT_LIMIT,
					[i.TAKE_PROFIT_MARKET]: o.a.TAKE_PROFIT_MARKET,
					[i.TRAILING_STOP]: o.a.TRAILING_STOP
				},
				u = {
					AMOUNT_FILLED: "AMOUNT_FILLED",
					CANCEL: "CANCEL",
					GOOD_TIL: "GOOD_TIL",
					MARKET: "MARKET",
					MARKET_DETAILS: "MARKET_DETAILS",
					PRICE: "PRICE",
					PRICE_TRIGGER: "PRICE_TRIGGER",
					SIDE: "SIDE",
					STATUS: "STATUS",
					STATUS_DETAILS: "STATUS_DETAILS",
					TRIGGER: "TRIGGER"
				},
				d = [i.STOP_LIMIT, i.STOP_MARKET, i.TAKE_PROFIT, i.TAKE_PROFIT_MARKET, i.TRAILING_STOP],
				_ = {
					WEB: "00",
					IOS: "01",
					ANDROID: "02"
				}
		},
		27: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return o
			})), a.d(r, "b", (function() {
				return i
			}));
			const o = {
					ALLOWANCE_ALERT: "ALLOWANCE_ALERT",
					COMPLIANCE: "COMPLIANCE",
					DEPOSIT: "DEPOSIT",
					EMAIL_NOTIFICATIONS: "EMAIL_NOTIFICATIONS",
					EPOCH_END: "EPOCH_END",
					FEEDBACK: "FEEDBACK",
					GOVERNANCE_LINK: "GOVERNANCE_LINK",
					HELP: "HELP",
					LEAGUE_OUTCOME: "LEAGUE_OUTCOME",
					LEAGUE_REQUIREMENTS: "LEAGUE_REQUIREMENTS",
					LEAGUE_WINNER: "LEAGUE_WINNER",
					ONBOARDING: "ONBOARDING",
					PREFERENCES: "PREFERENCES",
					REWARDS_BOOST: "REWARDS_BOOST",
					SELF_SERVICE_AFFILIATE_REGISTRATION: "SELF_SERVICE_AFFILIATE_REGISTRATION",
					SHARE_REFERRAL_LINK: "SHARE_REFERRAL_LINK",
					SIGN_INTO_MOBILE: "SIGN_INTO_MOBILE",
					TEST_RESTRICTIONS: "TEST_RESTRICTIONS",
					TRANSFER: "TRANSFER",
					WITHDRAW: "WITHDRAW"
				},
				i = {
					FILL_DETAILS: "FILL_DETAILS",
					NOTIFICATIONS: "NOTIFICATIONS",
					ORDER_DETAILS: "ORDER_DETAILS"
				}
		},
		271: function(t, r, a) {
			"use strict";
			a.d(r, "e", (function() {
				return h
			})), a.d(r, "b", (function() {
				return getWalletConnectProvider
			})), a.d(r, "a", (function() {
				return getProviderByWalletType
			})), a.d(r, "c", (function() {
				return initializeAndReconnectWallet
			})), a.d(r, "d", (function() {
				return startProvider
			}));
			var o = a(25),
				i = a.n(o),
				c = a(48),
				l = a.n(c),
				E = a(863),
				u = a.n(E),
				d = a(572),
				_ = a.n(d),
				O = a(864),
				T = a.n(O),
				I = a(455),
				S = a(120),
				p = a(33),
				R = a(21),
				A = a(12),
				b = a(573),
				N = a(27),
				C = a(104),
				y = a(22),
				D = a(312),
				m = a(40);

			function ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function _objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? ownKeys(Object(a), !0).forEach((function(r) {
						_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function _defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const h = new u.a({
					appName: "dYdX",
					appLogoUrl: "https://trade.dydx.exchange/cbw-image.png",
					darkMode: !1
				}),
				L = Number("1"),
				g = {
					rpc: {
						[L]: "https://eth-mainnet.alchemyapi.io/v2/L1SIgIOzW9TRnWpcIPU7tx0EZK3NbVu_"
					},
					bridge: "wss://api.dydx.exchange/wc/"
				},
				P = h.makeWeb3Provider("https://eth-mainnet.alchemyapi.io/v2/L1SIgIOzW9TRnWpcIPU7tx0EZK3NbVu_", L);
			let v;
			const getWalletConnectProvider = () => v,
				getProviderByWalletType = ({
					walletType: t,
					options: r = {}
				}) => {
					const a = window.ethereum,
						o = window.web3;
					switch (t) {
						case A.c.BitPie:
						case A.c.CloverWallet:
						case A.c.Coin98:
						case A.c.HuobiWallet:
						case A.c.ImToken:
						case A.c.MathWallet:
						case A.c.MetaMask:
						case A.c.Rainbow:
						case A.c.TokenPocket:
						case A.c.TrustWallet: {
							var i, c;
							const r = null !== (i = b.b[t]) && void 0 !== i ? i : "";
							return null !== a && void 0 !== a && a[r] ? (a.autoRefreshOnNetworkChange = !1, {
								provider: a
							}) : null !== o && void 0 !== o && null !== (c = o.currentProvider) && void 0 !== c && c[r] ? {
								provider: o.currentProvider
							} : (v = new I.a(_objectSpread(_objectSpread({}, g), {}, {
								qrcodeModalOptions: {
									mobileLinks: b.c[t]
								}
							})), {
								provider: v,
								isWalletConnect: !0
							})
						}
						case A.c.CoinbaseWallet: {
							var l;
							let t;
							return a ? (a.autoRefreshOnNetworkChange = !1, t = a) : null !== o && void 0 !== o && o.currentProvider && (t = null === o || void 0 === o ? void 0 : o.currentProvider), null !== (l = t) && void 0 !== l && l.isCoinbaseWallet ? {
								provider: t
							} : {
								provider: P,
								isWalletLink: !0
							}
						}
						case A.c.OtherWallet:
							return a ? (a.autoRefreshOnNetworkChange = !1, {
								provider: a
							}) : null !== o && void 0 !== o && o.currentProvider ? {
								provider: o.currentProvider
							} : (v = new I.a(g), {
								provider: v,
								isWalletConnect: !0
							});
						case A.c.Ledger: {
							const t = {
								ledgerEthereumClientFactoryAsync: D.e,
								networkId: L,
								baseDerivationPath: r.derivationPath,
								walletAddress: r.walletAddress
							};
							return {
								provider: new D.a(t)
							}
						}
						case A.c.WalletConnect:
							return v = new I.a(g), {
								provider: v,
								isWalletConnect: !0
							};
						case A.c.TestWallet:
						default:
							return {
								provider: void 0
							}
					}
				},
				initializeAndReconnectWallet = t => {
					const r = Object(m.b)({
						key: m.a.LAST_WALLET_USED
					});
					if (C.a.wallet) t.dispatch(Object(R.b)({
						walletType: A.c.TestWallet,
						autoReconnect: !0
					})), t.dispatch(Object(S.a)());
					else if (r) {
						if (r === A.c.Ledger) t.dispatch(Object(p.c)({
							modalType: N.a.ONBOARDING,
							modalProps: {
								preselectLedger: !0
							}
						}));
						else {
							const a = getProviderByWalletType({
								walletType: r
							});
							(l()([A.c.MetaMask, A.c.WalletConnect, A.c.ImToken, A.c.TokenPocket], r) || i()(a, "selectedAddress")) && t.dispatch(Object(R.b)({
								walletType: r,
								autoReconnect: !0
							}))
						}
						t.dispatch(Object(S.a)())
					} else t.dispatch(Object(S.a)())
				},
				startProvider = ({
					provider: t,
					walletType: r
				}) => {
					const a = new _.a({
						blockTracker: {
							on: () => {}
						}
					});
					switch (a.on("error", t => {
							y.b.notify({
								error: t,
								location: y.a.PROVIDER_ENGINE
							})
						}), r) {
						case A.c.BitPie:
						case A.c.CloverWallet:
						case A.c.CoinbaseWallet:
						case A.c.Coin98:
						case A.c.HuobiWallet:
						case A.c.ImToken:
						case A.c.MetaMask:
						case A.c.Rainbow:
						case A.c.TokenPocket:
						case A.c.TrustWallet:
						case A.c.WalletConnect:
						case A.c.OtherWallet:
							a.addProvider(new D.c(t)), a.addProvider(new D.b(t)), a.addProvider(new D.d(t));
							break;
						case A.c.Ledger:
							a.addProvider(t);
							break;
						case A.c.TestWallet:
							break;
						default:
							throw new Error("Unsupported walletType")
					}
					return a.addProvider(new T.a({
						rpcUrl: "https://eth-mainnet.alchemyapi.io/v2/L1SIgIOzW9TRnWpcIPU7tx0EZK3NbVu_"
					})), a.start(), a
				}
		},
		274: function(t, r, a) {
			"use strict";
			var o = a(440);
			a.d(r, "a", (function() {
				return o.a
			}))
		},
		275: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return p
			}));
			var o = a(0),
				i = a.n(o),
				c = a(1),
				l = a.n(c),
				E = a(13),
				u = a.n(E),
				d = "_3HvxmhbYLRD0yFibCNTFAR",
				_ = "_2sivkdglfFbsWTsJg0FNUP",
				O = "_3j4C5wkHMPtY0gLQc2G16A",
				T = "_1433asiQdi56l9qJKOWnqK",
				I = "_1G--azpBgiYc7pAfMUBEH9",
				S = "_3-oLXeKXls23ibixjjldJb";
			const WithLabel = ({
				className: t,
				label: r,
				indented: a,
				large: o,
				children: c,
				noMargin: l,
				textDark: E
			}) => i.a.createElement("div", {
				className: u()(d, {
					[_]: l
				}, t)
			}, i.a.createElement("div", {
				className: u()(O, {
					[I]: a,
					[S]: o,
					[T]: E
				})
			}, r), c);
			WithLabel.propTypes = {
				children: l.a.oneOfType([l.a.arrayOf(l.a.node), l.a.node]),
				className: l.a.string,
				indented: l.a.bool,
				label: l.a.oneOfType([l.a.string, l.a.node]).isRequired,
				large: l.a.bool,
				noMargin: l.a.bool,
				textDark: l.a.bool
			};
			var p = WithLabel
		},
		277: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return getPeriodBadgeImage
			})), a.d(r, "b", (function() {
				return getPeriodString
			}));
			var o = a(4),
				i = a(2);
			const getPeriodBadgeImage = t => {
					switch (t) {
						case o.h.Diamond:
							return "/badges/diamond.png";
						case o.h.Platinum:
							return "/badges/platinum.png";
						case o.h.Gold:
							return "/badges/gold.png";
						case o.h.Silver:
							return "/badges/silver.png";
						case o.h.Bronze:
							return "/badges/bronze.png";
						default:
							return "/badges/blank-badge.png"
					}
				},
				getPeriodString = ({
					period: t,
					stringGetter: r
				}) => {
					switch (t) {
						case o.h.Diamond:
							return r({
								key: i.a.DIAMOND
							});
						case o.h.Platinum:
							return r({
								key: i.a.PLATINUM
							});
						case o.h.Gold:
							return r({
								key: i.a.GOLD
							});
						case o.h.Silver:
							return r({
								key: i.a.SILVER
							});
						case o.h.Bronze:
							return r({
								key: i.a.BRONZE
							});
						default:
							return ""
					}
				}
		},
		297: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return getRetroactiveRewards
			})), a.d(r, "b", (function() {
				return getTradingRewardsData
			}));
			const getRetroactiveRewards = t => t.rewards.retroactiveRewards,
				getTradingRewardsData = t => t.rewards.tradingRewards
		},
		298: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return getGasPrice
			}));
			var o = a(59),
				i = a(22),
				c = a(10);

			function asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function _asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			}
			let l, E;
			const u = Number("10");

			function getGasPrice() {
				return _getGasPrice.apply(this, arguments)
			}

			function _getGasPrice() {
				return (_getGasPrice = _asyncToGenerator((function*() {
					const t = o.DateTime.local();
					if (E && t.diff(E, "seconds").seconds < u) return l;
					const r = (yield getGasPrices()).regular;
					if (!r) return l;
					const a = Object(c.b)(r).times("1.05").integerValue();
					return l = a, E = t, a
				}))).apply(this, arguments)
			}

			function getGasPrices() {
				return _getGasPrices.apply(this, arguments)
			}

			function _getGasPrices() {
				return (_getGasPrices = _asyncToGenerator((function*() {
					try {
						return (yield fetch("https://api.dydx.exchange/v3/gas-price")).json()
					} catch (t) {
						return i.b.notify({
							error: t,
							location: i.a.GAS_PRICE
						}), {}
					}
				}))).apply(this, arguments)
			}
		},
		30: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return initialize_page
			})), a.d(r, "b", (function() {
				return LocalizationWrapper
			})), a.d(r, "d", (function() {
				return withLocalization
			})), a.d(r, "c", (function() {
				return J
			}));
			var o = a(0),
				i = a.n(o),
				c = a(14),
				l = a(862),
				E = a.n(l),
				u = a(359),
				d = a(441),
				_ = a(443),
				O = a(120),
				T = a(444),
				I = a(32),
				S = a(271);

			function asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function _asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			}
			var initialize_page = () => {
					const t = Object(c.e)();
					return Object(o.useEffect)(() => {
						var r, a, o;
						Object(S.c)(u.a), t(Object(_.a)()), t(Object(T.a)()), t(Object(O.b)());
						const i = (new E.a).getResult();
						if ("iOS" === (null === i || void 0 === i || null === (r = i.os) || void 0 === r ? void 0 : r.name) && null !== i && void 0 !== i && null !== (a = i.os) && void 0 !== a && null !== (o = a.version) && void 0 !== o && o.startsWith("15.")) {
							const t = document.getElementById("root");
							t && (t.style.height = "100%")
						}
					}, []), Object(o.useEffect)(_asyncToGenerator((function*() {
						t(Object(d.a)(yield I.c.getExchangeConfig()))
					})), []), null
				},
				p = a(91),
				R = a.n(p),
				A = a(183),
				b = a(235);

			function _extends() {
				return (_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			const N = i.a.createContext(R.a),
				LocalizationWrapper = ({
					children: t
				}) => {
					const r = Object(c.f)(b.a, c.d),
						a = Object(c.f)(b.b, c.d);
					return i.a.createElement(N.Provider, {
						value: a
					}, r ? t : i.a.createElement(A.a, null))
				},
				withLocalization = t => i.a.forwardRef((r, a) => i.a.createElement(N.Consumer, null, o => i.a.createElement(t, _extends({}, r, {
					ref: a,
					stringGetter: o
				}))));
			var C = a(1),
				y = a.n(C),
				D = a(54),
				m = a(4),
				h = a(123),
				L = a(33),
				g = a(147),
				P = a(57),
				v = a(27);

			function modal_manager_extends() {
				return (modal_manager_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}

			function ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function _defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const w = Object(o.lazy)(() => a.e(96).then(a.bind(null, 2131))),
				M = Object(o.lazy)(() => a.e(77).then(a.bind(null, 2132))),
				U = Object(o.lazy)(() => Promise.all([a.e(11), a.e(61)]).then(a.bind(null, 2104))),
				G = Object(o.lazy)(() => a.e(65).then(a.bind(null, 2172))),
				j = Object(o.lazy)(() => a.e(90).then(a.bind(null, 2133))),
				k = Object(o.lazy)(() => a.e(86).then(a.bind(null, 2167))),
				x = Object(o.lazy)(() => a.e(93).then(a.bind(null, 2134))),
				H = Object(o.lazy)(() => a.e(26).then(a.bind(null, 2135))),
				B = Object(o.lazy)(() => a.e(97).then(a.bind(null, 2136))),
				W = Object(o.lazy)(() => a.e(68).then(a.bind(null, 2137))),
				Y = Object(o.lazy)(() => a.e(91).then(a.bind(null, 2138))),
				K = Object(o.lazy)(() => Promise.all([a.e(23), a.e(101)]).then(a.bind(null, 2105))),
				V = Object(o.lazy)(() => a.e(75).then(a.bind(null, 2139))),
				Z = Object(o.lazy)(() => Promise.all([a.e(0), a.e(10), a.e(84), a.e(89)]).then(a.bind(null, 2140))),
				z = Object(o.lazy)(() => a.e(78).then(a.bind(null, 2164))),
				X = Object(o.lazy)(() => a.e(99).then(a.bind(null, 2147))),
				q = Object(o.lazy)(() => Promise.all([a.e(56), a.e(23), a.e(92)]).then(a.bind(null, 2173))),
				$ = Object(o.lazy)(() => a.e(83).then(a.bind(null, 2148))),
				Q = Object(o.lazy)(() => a.e(59).then(a.bind(null, 1883))),
				ModalManager = ({
					modalConfig: t,
					closeModal: r
				}) => {
					if (!t) return null;
					const a = t.type,
						l = t.props,
						E = l.headerOverlayOnly,
						u = l.footerOverlayOnly,
						d = Object(c.f)(P.l, c.d),
						handleCloseModal = () => r({
							modalType: t.type
						}),
						_ = function _objectSpread(t) {
							for (var r = 1; r < arguments.length; r++) {
								var a = null != arguments[r] ? arguments[r] : {};
								r % 2 ? ownKeys(Object(a), !0).forEach((function(r) {
									_defineProperty(t, r, a[r])
								})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach((function(r) {
									Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
								}))
							}
							return t
						}({
							key: a,
							closeModal: handleCloseModal
						}, l);
					let O, T = h.c.SMALL,
						I = !1;
					if (!E && !u) switch (a) {
						case v.a.ALLOWANCE_ALERT:
							O = i.a.createElement(w, modal_manager_extends({
								isStandardModal: !0
							}, _)), T = h.c.LARGE;
							break;
						case v.a.COMPLIANCE:
							null !== d && void 0 !== d && d[m.j.HasDoneRestrictionCompliance] || (O = i.a.createElement(M, _));
							break;
						case v.a.DEPOSIT:
							O = i.a.createElement(U, modal_manager_extends({
								isStandardModal: !0
							}, _)), T = h.c.MEDIUM;
							break;
						case v.a.EMAIL_NOTIFICATIONS:
							O = i.a.createElement(G, _), T = h.c.MEDIUM;
							break;
						case v.a.EPOCH_END:
							O = i.a.createElement(j, _);
							break;
						case v.a.FEEDBACK:
							O = i.a.createElement(k, _);
							break;
						case v.a.GOVERNANCE_LINK:
							O = i.a.createElement(x, _);
							break;
						case v.a.HELP:
							O = i.a.createElement(H, _);
							break;
						case v.a.LEAGUE_OUTCOME:
							O = i.a.createElement(B, _);
							break;
						case v.a.LEAGUE_REQUIREMENTS:
							O = i.a.createElement(W, _), I = !0;
							break;
						case v.a.LEAGUE_WINNER:
							O = i.a.createElement(Y, _);
							break;
						case v.a.ONBOARDING:
							O = i.a.createElement(K, _), T = h.c.MEDIUM;
							break;
						case v.a.PREFERENCES:
							O = i.a.createElement(V, _), T = h.c.MEDIUM;
							break;
						case v.a.REWARDS_BOOST:
							O = i.a.createElement(Z, _);
							break;
						case v.a.SELF_SERVICE_AFFILIATE_REGISTRATION:
							O = i.a.createElement(z, _);
							break;
						case v.a.SHARE_REFERRAL_LINK:
							O = i.a.createElement(X, _);
							break;
						case v.a.SIGN_INTO_MOBILE:
							O = i.a.createElement(q, _), T = h.c.MEDIUM;
							break;
						case v.a.TEST_RESTRICTIONS:
							O = i.a.createElement($, _);
							break;
						case v.a.WITHDRAW:
							O = i.a.createElement(Q, modal_manager_extends({
								isStandardModal: !0
							}, _)), T = h.c.MEDIUM;
							break;
						default:
							return null
					}
					return i.a.createElement(h.f, {
						key: a,
						headerOverlayOnly: E,
						increasedBlur: I,
						footerOverlayOnly: u,
						onClickOutside: () => {
							_.onClickOutside && _.onClickOutside(), _.preventClose || handleCloseModal()
						}
					}, i.a.createElement(o.Suspense, {
						fallback: i.a.createElement(h.g, {
							size: T
						}, i.a.createElement(A.a, {
							minHeight: 300
						}))
					}, O))
				};
			ModalManager.propTypes = {
				modalConfig: y.a.object,
				closeModal: y.a.func.isRequired
			};
			var J = Object(c.c)(t => ({
				modalConfig: Object(g.a)(t)
			}), t => Object(D.b)({
				closeModal: L.a
			}, t))(ModalManager)
		},
		312: function(t, r, a) {
			"use strict";
			a.d(r, "e", (function() {
				return o.b
			})), a.d(r, "a", (function() {
				return o.a
			})), a.d(r, "b", (function() {
				return i
			})), a.d(r, "c", (function() {
				return C
			})), a.d(r, "d", (function() {
				return y
			}));
			var o = a(555);

			function asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}
			class i {
				constructor(t) {
					this.provider = t
				}
				handleRequest(t, r, a) {
					var o = this;
					return function _asyncToGenerator(t) {
						return function() {
							var r = this,
								a = arguments;
							return new Promise((function(o, i) {
								var c = t.apply(r, a);

								function _next(t) {
									asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
								}

								function _throw(t) {
									asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
								}
								_next(void 0)
							}))
						}
					}((function*() {
						if ("eth_chainId" === t.method) try {
							o.provider.sendAsync(t, (t, r) => {
								t ? a(t) : a(null, r.result)
							})
						} catch (i) {
							a(i)
						} else r()
					}))()
				}
				setEngine() {}
			}
			var c = a(48),
				l = a.n(c),
				E = a(879),
				u = a.n(E),
				d = a(267),
				_ = a(268),
				O = a(370),
				T = a.n(O),
				I = a(67),
				S = a.n(I);
			const p = {
				convertHexToNumber: t => new S.a(t).toNumber(),
				convertAmountToBigNumber: t => {
					const r = t || 0;
					if (S.a.isBigNumber(r)) return new S.a(r);
					if (T()(r) && (0 === r.indexOf("0x") || 0 === r.indexOf("-0x"))) return new S.a(r.replace("0x", ""), 16);
					return new S.a(Number(r).toString(10), 10)
				},
				encodeAmountAsHexString: t => {
					const r = p.convertAmountToBigNumber(t),
						a = r.toString(16);
					return r.isLessThan(0) ? "-0x" + a.substr(1) : "0x" + a
				}
			};

			function ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function _objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? ownKeys(Object(a), !0).forEach((function(r) {
						_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function _defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const R = {
				unmarshalTxData(t) {
					if (void 0 === t.from) throw new Error("txData must include valid 'from' value.");
					return _objectSpread(_objectSpread({}, t), {}, {
						value: void 0 !== t.value ? p.convertAmountToBigNumber(t.value) : void 0,
						gas: void 0 !== t.gas ? p.convertHexToNumber(t.gas) : void 0,
						gasPrice: void 0 !== t.gasPrice ? p.convertAmountToBigNumber(t.gasPrice) : void 0,
						nonce: void 0 !== t.nonce ? p.convertHexToNumber(t.nonce) : void 0
					})
				},
				marshalTxData: t => {
					if (void 0 === t.from) throw new Error("txData must include valid 'from' value.");
					const r = _objectSpread({}, t);
					delete r.from;
					const a = _objectSpread(_objectSpread({}, R._marshalCallTxDataBase(r)), {}, {
							from: R.marshalAddress(t.from)
						}),
						o = ["gasPrice", "gas", "value", "nonce"];
					return u()(a, (t, r) => {
						void 0 === t && l()(o, r) && delete a[r]
					}), a
				},
				marshalAddress: t => {
					if (_.addressUtils.isAddress(t)) return Object(d.addHexPrefix)(t);
					throw new Error("Invalid address encountered: " + t)
				},
				_marshalCallTxDataBase: t => _objectSpread(_objectSpread({}, t), {}, {
					to: void 0 === t.to ? void 0 : R.marshalAddress(t.to),
					gasPrice: void 0 === t.gasPrice ? void 0 : p.encodeAmountAsHexString(t.gasPrice),
					gas: void 0 === t.gas ? void 0 : p.encodeAmountAsHexString(t.gas),
					value: void 0 === t.value ? void 0 : p.encodeAmountAsHexString(t.value),
					nonce: void 0 === t.nonce ? void 0 : p.encodeAmountAsHexString(t.nonce)
				})
			};

			function web3_wrapper_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function web3_wrapper_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function web3_wrapper_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function web3_wrapper_asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							web3_wrapper_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							web3_wrapper_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			}
			class A {
				constructor(t, r) {
					this.abiDecoder = new _.AbiDecoder([]), this._supportedProvider = t, this._provider = _.providerUtils.standardizeOrThrow(t), this._callAndTxnDefaults = r, this._jsonRpcRequestId = 1
				}
				getNodeVersionAsync() {
					var t = this;
					return web3_wrapper_asyncToGenerator((function*() {
						return yield t.sendRawPayloadAsync({
							method: "web3_clientVersion"
						})
					}))()
				}
				getAvailableAddressesAsync() {
					var t = this;
					return web3_wrapper_asyncToGenerator((function*() {
						const r = yield t.sendRawPayloadAsync({
							method: "eth_accounts",
							params: []
						});
						return null === r || void 0 === r ? void 0 : r.map(t => null === t || void 0 === t ? void 0 : t.toLowerCase())
					}))()
				}
				sendTransactionAsync(t) {
					var r = this;
					return web3_wrapper_asyncToGenerator((function*() {
						const a = R.marshalTxData(t);
						return yield r.sendRawPayloadAsync({
							method: "eth_sendTransaction",
							params: [a]
						})
					}))()
				}
				sendRawPayloadAsync(t) {
					var r = this;
					return web3_wrapper_asyncToGenerator((function*() {
						const a = r._provider.sendAsync.bind(r._provider),
							o = function web3_wrapper_objectSpread(t) {
								for (var r = 1; r < arguments.length; r++) {
									var a = null != arguments[r] ? arguments[r] : {};
									r % 2 ? web3_wrapper_ownKeys(Object(a), !0).forEach((function(r) {
										web3_wrapper_defineProperty(t, r, a[r])
									})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : web3_wrapper_ownKeys(Object(a)).forEach((function(r) {
										Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
									}))
								}
								return t
							}({
								id: r._jsonRpcRequestId += 1,
								params: [],
								jsonrpc: "2.0"
							}, t),
							i = yield Object(_.promisify)(a)(o);
						if (i.error) throw new Error(i.error.message);
						return i.result
					}))()
				}
			}
			var b = a(451);

			function _slicedToArray(t, r) {
				return function _arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function _iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function _unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return _arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return _arrayLikeToArray(t, r)
				}(t, r) || function _nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}

			function signer_subprovider_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}
			class N extends b.a {
				constructor(t) {
					var r;
					super(), r = this, this.handleRequest = function() {
						var t = function signer_subprovider_asyncToGenerator(t) {
							return function() {
								var r = this,
									a = arguments;
								return new Promise((function(o, i) {
									var c = t.apply(r, a);

									function _next(t) {
										signer_subprovider_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
									}

									function _throw(t) {
										signer_subprovider_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
									}
									_next(void 0)
								}))
							}
						}((function*(t, a, o) {
							switch (t.method) {
								case "web3_clientVersion":
									try {
										const t = yield r._web3Wrapper.getNodeVersionAsync();
										o(null, t)
									} catch (i) {
										o(i)
									}
									return;
								case "eth_accounts":
									try {
										const t = yield r._web3Wrapper.getAvailableAddressesAsync();
										o(null, t)
									} catch (i) {
										o(i)
									}
									return;
								case "eth_sendTransaction": {
									const a = _slicedToArray(t.params, 1)[0];
									try {
										const t = R.unmarshalTxData(a),
											i = yield r._web3Wrapper.sendTransactionAsync(t);
										o(null, i)
									} catch (i) {
										o(i)
									}
									return
								}
								case "personal_sign":
									try {
										r.provider.send(t, (t, r) => {
											t ? o(t) : o(null, r.result)
										})
									} catch (i) {
										o(i)
									}
									return;
								default:
									a()
							}
						}));
						return function(r, a, o) {
							return t.apply(this, arguments)
						}
					}(), this.provider = t, this._web3Wrapper = new A(t)
				}
			}
			var C = N;

			function typed_data_subprovider_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}
			class y {
				constructor(t) {
					this.provider = t
				}
				handleRequest(t, r, a) {
					var o = this;
					return function typed_data_subprovider_asyncToGenerator(t) {
						return function() {
							var r = this,
								a = arguments;
							return new Promise((function(o, i) {
								var c = t.apply(r, a);

								function _next(t) {
									typed_data_subprovider_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
								}

								function _throw(t) {
									typed_data_subprovider_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
								}
								_next(void 0)
							}))
						}
					}((function*() {
						if (t.method.startsWith("eth_signTypedData")) try {
							o.provider.sendAsync(t, (t, r) => {
								t ? a(t) : a(null, r.result)
							})
						} catch (i) {
							a(i)
						} else r()
					}))()
				}
				setEngine() {}
			}
		},
		314: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return getAllOrders
			})), a.d(r, "d", (function() {
				return getHasUnseenOrderUpdates
			})), a.d(r, "b", (function() {
				return _
			})), a.d(r, "c", (function() {
				return O
			}));
			var o = a(140),
				i = a.n(o),
				c = a(25),
				l = a.n(c),
				E = a(65),
				u = a(58),
				d = a(26);
			const getAllOrders = t => l()(t, "orders.orders"),
				getHasUnseenOrderUpdates = t => l()(t, "orders.hasUnseenOrderUpdates"),
				_ = Object(E.a)([u.b, getAllOrders], (t, r) => r ? i()(r, ({
					market: r
				}) => !!t && r === t.market) : null),
				O = Object(E.a)(_, t => i()(t, t => t.status === d.c.OPEN))
		},
		315: function(t, r, a) {
			"use strict";
			a.d(r, "f", (function() {
				return getRecentlyRemovedOrders
			})), a.d(r, "d", (function() {
				return getOrderbookVersion
			})), a.d(r, "c", (function() {
				return getIsOrderbookLoaded
			})), a.d(r, "e", (function() {
				return getOrderbookZoomValue
			})), a.d(r, "a", (function() {
				return c
			})), a.d(r, "b", (function() {
				return l
			}));
			var o = a(65),
				i = a(58);
			const getRecentlyRemovedOrders = t => t.orderbook.recentlyRemovedOrders,
				getOrderbookVersion = t => t.orderbook.version,
				getIsOrderbookLoaded = t => t.orderbook.isOrderbookLoaded,
				getAllOrderbookOrders = t => t.orderbook.orders,
				getOrderbookZoomValue = t => t.orderbook.zoomValue,
				c = Object(o.a)([i.b, getAllOrderbookOrders], (t, r) => {
					var a;
					return (null === t || void 0 === t ? void 0 : t.market) && (null === r || void 0 === r || null === (a = r[t.market]) || void 0 === a ? void 0 : a.bids)
				}),
				l = Object(o.a)([i.b, getAllOrderbookOrders], (t, r) => {
					var a;
					return (null === t || void 0 === t ? void 0 : t.market) && (null === r || void 0 === r || null === (a = r[t.market]) || void 0 === a ? void 0 : a.asks)
				})
		},
		32: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return S
			})), a.d(r, "b", (function() {
				return p
			}));
			var o = a(71),
				i = a.n(o),
				c = a(72),
				l = a(59),
				E = a(57),
				u = a(369),
				d = a(26),
				_ = a(858),
				O = a(22),
				T = a(10),
				I = a(163);

			function ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function _objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? ownKeys(Object(a), !0).forEach((function(r) {
						_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function _defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function _asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			}
			const S = {
					DAILY: "DAILY",
					DAILY_COMPETITION: "DAILY_COMPETITION",
					WEEKLY: "WEEKLY",
					MONTHLY: "MONTHLY",
					ALL_TIME: "ALL_TIME",
					COMPETITION: "COMPETITION",
					LEAGUES: "LEAGUES"
				},
				p = {
					ABSOLUTE: "ABSOLUTE",
					PERCENT: "PERCENT"
				},
				R = Number("1"),
				A = I.a ? "https://dydx-api.consenlabs.com" : "https://api.dydx.exchange",
				b = new c.DydxClient(A, {
					networkId: R
				});
			const N = new class {
				constructor() {
					var t = this;
					this.setStore = t => {
						this.store = t
					}, this.setCurrentProvider = t => {
						this.currentProvider = t
					}, this.getCurrentProvider = () => this.currentProvider, this.initializeClient = function() {
						var r = _asyncToGenerator((function*({
							provider: r = null,
							apiKeyPair: a,
							starkKeyPair: o
						} = {}) {
							t.currentClient = new c.DydxClient(A, {
								web3Provider: r || t.currentProvider,
								starkPrivateKey: o && o.privateKey,
								apiKeyCredentials: a,
								networkId: R
							});
							const i = yield t.currentClient.public.getTimestampAdjustment();
							t.currentClient.clock.setTimestampAdjustment(i)
						}));
						return function() {
							return r.apply(this, arguments)
						}
					}(), this.getClient = () => this.currentClient, this.clearClientKeys = () => {
						this.currentClient = new c.DydxClient(A, {
							web3Provider: this.currentProvider,
							networkId: R
						})
					}, this.resetClient = () => {
						this.currentClient = b, this.currentProvider = null
					}, this.getTransactionByHash = function() {
						var r = _asyncToGenerator((function*({
							transactionHash: r
						}) {
							return yield t.currentClient.web3.eth.getTransaction(r)
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.getEthBalance = function() {
						var r = _asyncToGenerator((function*({
							walletAddress: r
						}) {
							const a = yield t.currentClient.web3.eth.getBalance(r);
							return Object(T.b)(a)
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.getBalance = function() {
						var r = _asyncToGenerator((function*({
							tokenAddress: r,
							walletAddress: a
						}) {
							const o = new t.currentClient.web3.eth.Contract(_, r),
								i = yield o.methods.balanceOf(a).call();
							return Object(T.b)(i)
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.getBlockNumber = _asyncToGenerator((function*() {
						return yield t.currentClient.web3.eth.getBlockNumber()
					})), this.getExchangeConfig = _asyncToGenerator((function*() {
						return yield t.currentClient.public.getConfig()
					})), this.getStarkKey = function() {
						var r = _asyncToGenerator((function*({
							walletAddress: r,
							signingMethod: a
						}) {
							return yield t.currentClient.onboarding.deriveStarkKey(r, a)
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.getApiKey = function() {
						var r = _asyncToGenerator((function*({
							walletAddress: r,
							signingMethod: a
						}) {
							return yield t.currentClient.onboarding.recoverDefaultApiCredentials(r, a)
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.getNetworkIdAndAccounts = _asyncToGenerator((function*() {
						return {
							networkId: yield t.currentClient.web3.eth.getChainId(),
							accounts: yield t.currentClient.web3.eth.getAccounts()
						}
					})), this.getDoesUserExist = function() {
						var r = _asyncToGenerator((function*({
							walletAddress: r
						}) {
							return yield t.currentClient.public.doesUserExistWithAddress(r)
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.getIsUsernameTaken = function() {
						var r = _asyncToGenerator((function*({
							username: r
						}) {
							return (yield t.currentClient.public.doesUserExistWithUsername(r)).exists
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.getCandles = function() {
						var r = _asyncToGenerator((function*({
							market: r,
							resolution: a,
							fromISO: o,
							toISO: i
						}) {
							return (yield t.currentClient.public.getCandles({
								market: r,
								resolution: a,
								fromISO: o,
								toISO: i
							})).candles
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.createUserAndInitializeClient = function() {
						var r = _asyncToGenerator((function*({
							referredByAffiliateLink: r,
							starkKeyPair: a,
							walletAddress: o,
							signingMethod: i
						}) {
							const l = yield t.currentClient.onboarding.createUser({
								starkKey: a.publicKey,
								starkKeyYCoordinate: a.publicKeyYCoordinate,
								referredByAffiliateLink: r
							}, o, null, i);
							t.currentClient = new c.DydxClient(A, {
								web3Provider: t.currentProvider,
								starkPrivateKey: a,
								networkId: R
							});
							const E = l.apiKey;
							return t.currentClient.apiKeyCredentials = E, l
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.updateUser = function() {
						var r = _asyncToGenerator((function*({
							email: r,
							username: a,
							isSharingAddress: o,
							userData: i = {}
						}) {
							var c;
							const l = null === (c = t.store) || void 0 === c ? void 0 : c.getState(),
								u = l ? Object(E.h)(l) : {};
							return yield t.currentClient.private.updateUser({
								email: r,
								username: a || void 0,
								isSharingAddress: o,
								userData: _objectSpread(_objectSpread(_objectSpread({}, u), i), {}, {
									preferences: _objectSpread(_objectSpread({}, null === u || void 0 === u ? void 0 : u.preferences), null === i || void 0 === i ? void 0 : i.preferences)
								})
							})
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.getUserRestrictions = _asyncToGenerator((function*() {
						return yield t.currentClient.private.get("restrictions", {})
					})), this.getRegistrationSignature = _asyncToGenerator((function*() {
						return yield t.currentClient.private.getRegistration()
					})), this.getWebsocketSignatureAndTimestamp = () => {
						const t = this.currentClient.clock.getAdjustedIsoString();
						return {
							timestamp: t,
							signature: this.currentClient.private.sign({
								requestPath: "/ws/accounts",
								isoTimestamp: t,
								method: "GET"
							})
						}
					}, this.getUser = _asyncToGenerator((function*() {
						return yield t.currentClient.private.getUser()
					})), this.getRetroactiveRewardsData = _asyncToGenerator((function*() {
						return yield t.currentClient.private.get("/rewards/retroactive-mining", {})
					})), this.getTradingRewardsData = function() {
						var r = _asyncToGenerator((function*({
							epoch: r
						} = {}) {
							const a = {};
							r && (a.epoch = r);
							return yield t.currentClient.private.getTradingRewards(a)
						}));
						return function() {
							return r.apply(this, arguments)
						}
					}(), this.getHistoricalPnl = function() {
						var r = _asyncToGenerator((function*({
							accountId: r,
							createdBeforeOrAt: a
						}) {
							return yield t.currentClient.private.getHistoricalPnl({
								accountId: r,
								createdBeforeOrAt: a
							})
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.slowWithdraw = function() {
						var r = _asyncToGenerator((function*({
							amount: r,
							asset: a,
							account: o,
							walletAddress: i
						}) {
							return yield t.currentClient.private.createWithdrawal({
								amount: r,
								asset: a,
								toAddress: i.toLowerCase(),
								expiration: new Date(Date.now() + 20736e5).toISOString()
							}, o.positionId)
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.fastWithdraw = function() {
						var r = _asyncToGenerator((function*({
							account: r,
							asset: a,
							quote: {
								creditAmount: o,
								debitAmount: i,
								lpStarkKey: c,
								lpPositionId: l
							},
							walletAddress: E
						}) {
							return yield t.currentClient.private.createFastWithdrawal({
								creditAmount: o,
								debitAmount: i,
								creditAsset: a,
								toAddress: E.toLowerCase(),
								lpPositionId: l,
								lpStarkKey: c,
								expiration: new Date(Date.now() + 20736e5).toISOString()
							}, r.positionId)
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.getFastWithdrawQuote = function() {
						var r = _asyncToGenerator((function*({
							creditAmount: r,
							debitAmount: a,
							asset: o
						}) {
							const c = (yield t.currentClient.public.getFastWithdrawals({
								creditAsset: o,
								creditAmount: r,
								debitAmount: a
							})).liquidityProviders;
							let l;
							return i()(c, ({
								quote: t,
								starkKey: r
							}, a) => !t || (l = {
								creditAmount: t.creditAmount,
								debitAmount: t.debitAmount,
								lpStarkKey: r,
								lpPositionId: a
							}, !1)), l
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.getFastWithdrawAvailableFunds = _asyncToGenerator((function*() {
						var r, a;
						const o = (yield t.currentClient.public.getFastWithdrawals({})).liquidityProviders,
							i = void 0 === o ? {} : o;
						return null === (r = Object.values(i)) || void 0 === r || null === (a = r[0]) || void 0 === a ? void 0 : a.availableFunds
					})), this.placeOrder = function() {
						var r = _asyncToGenerator((function*({
							account: r,
							expiration: a,
							limitFee: o,
							market: i,
							postOnly: c = !1,
							price: l,
							side: E,
							size: u,
							timeInForce: _,
							trailingPercent: O,
							triggerPrice: T,
							type: I
						}) {
							const S = {
								expiration: a,
								limitFee: o,
								market: i,
								postOnly: c,
								price: l,
								side: E,
								size: u,
								timeInForce: _,
								trailingPercent: O,
								triggerPrice: T,
								type: I
							};
							yield t.currentClient.private.createOrder(S, r.positionId, {
								client: d.b.WEB
							})
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.cancelOrder = ({
						orderId: t
					}) => {
						this.currentClient.private.cancelOrder(t)
					}, this.cancelAllOrders = (t = null) => {
						this.currentClient.private.cancelAllOrders(t)
					}, this.cancelActiveOrders = ({
						id: t = null,
						market: r,
						side: a = null
					}) => {
						t || a ? this.currentClient.private.cancelActiveOrders(r, a, t) : this.currentClient.private.cancelActiveOrders(r)
					}, this.getFundingPayments = function() {
						var r = _asyncToGenerator((function*({
							market: r = null,
							date: a = null,
							limit: o = null
						}) {
							const i = a ? l.DateTime.fromISO(a).toUTC().toISO() : null,
								c = {};
							r && (c.market = r), i && (c.effectiveBeforeOrAt = i), o && (c.limit = o);
							return yield t.currentClient.private.getFundingPayments(c)
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.getFundingPaymentsHistory = _asyncToGenerator((function*() {
						const r = yield t.getFundingPayments({}), a = [];
						let o = null === r || void 0 === r ? void 0 : r.fundingPayments,
							i = !0;
						for (; i;)
							if (i = !1, o && 100 === o.length) {
								var c;
								a.push(...o);
								const r = o[99].effectiveAt;
								let E;
								o = null;
								try {
									E = yield t.getFundingPayments({
										date: r
									})
								} catch (l) {}
								o = null === (c = E) || void 0 === c ? void 0 : c.fundingPayments, o && (i = !0)
							} else a.push(...o);
						return a
					})), this.getFills = function() {
						var r = _asyncToGenerator((function*({
							date: r = null
						}) {
							const a = r ? l.DateTime.fromISO(r).toUTC().toISO() : null,
								o = {};
							a && (o.createdBeforeOrAt = a);
							return yield t.currentClient.private.getFills(o)
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.getFillsHistory = _asyncToGenerator((function*() {
						const r = yield t.getFills({}), a = [];
						let o = null === r || void 0 === r ? void 0 : r.fills,
							i = !0;
						for (; i;)
							if (i = !1, o && 100 === o.length) {
								var c;
								if (o[0].createdAt === o[99].createdAt) {
									const t = new Error("Failed to fetch fills history. You have over 100 trades in the same millisecond. Please contact customer service for further assistance.");
									throw O.b.notify({
										error: t,
										location: O.a.GET_FILLS_HISTORY
									}), t
								}
								const r = new Date(new Date(o[99].createdAt).getTime() + 1).toISOString();
								let E;
								o = o.filter(({
									createdAt: t
								}) => t > r), a.push(...o), o = null;
								try {
									E = yield t.getFills({
										date: r
									})
								} catch (l) {
									O.b.notify({
										error: l,
										location: O.a.GET_FILLS_HISTORY
									})
								}
								o = null === (c = E) || void 0 === c ? void 0 : c.fills, o && (i = !0)
							} else a.push(...o);
						return a
					})), this.getTransfers = function() {
						var r = _asyncToGenerator((function*({
							date: r = null
						}) {
							const a = r ? l.DateTime.fromISO(r).toUTC().toISO() : null,
								o = {};
							a && (o.createdBeforeOrAt = a);
							return yield t.currentClient.private.getTransfers(o)
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.getTransfersHistory = _asyncToGenerator((function*() {
						const r = yield t.getTransfers({}), a = [];
						let o = null === r || void 0 === r ? void 0 : r.transfers,
							i = !0;
						for (; i;)
							if (i = !1, o && 100 === o.length) {
								var c;
								a.push(...o);
								const r = o[99].createdAt;
								let E;
								o = null;
								try {
									E = yield t.getTransfers({
										date: r
									})
								} catch (l) {}
								o = null === (c = E) || void 0 === c ? void 0 : c.transfers, o && (i = !0)
							} else a.push(...o);
						return a
					})), this.getLeaderboardPnls = function() {
						var r = _asyncToGenerator((function*({
							period: r = S.DAILY,
							sortBy: a = p.ABSOLUTE,
							startingBeforeOrAt: o
						} = {}) {
							const i = r !== S.DAILY ? null !== o && void 0 !== o ? o : (new Date).toISOString() : void 0;
							return yield t.currentClient.public.getLeaderboardPnls({
								period: r,
								sortBy: a,
								startingBeforeOrAt: i
							})
						}));
						return function() {
							return r.apply(this, arguments)
						}
					}(), this.getAccountLeaderboardPnl = function() {
						var r = _asyncToGenerator((function*({
							period: r = S.DAILY,
							startedBeforeOrAt: a = (new Date).toISOString()
						} = {}) {
							return yield t.currentClient.private.getAccountLeaderboardPnl(r, {
								startedBeforeOrAt: a
							})
						}));
						return function() {
							return r.apply(this, arguments)
						}
					}(), this.getLeaderboardPnlsCompetition = function() {
						var r = _asyncToGenerator((function*({
							sortBy: r = p.ABSOLUTE
						} = {}) {
							return (yield t.currentClient.public.getLeaderboardPnls({
								period: S.COMPETITION,
								startingBeforeOrAt: (new Date).toISOString(),
								sortBy: r
							})).topPnls
						}));
						return function() {
							return r.apply(this, arguments)
						}
					}(), this.getAccountLeaderboardPnlCompetition = _asyncToGenerator((function*() {
						return yield t.currentClient.private.getAccountLeaderboardPnl(S.COMPETITION, {
							startedBeforeOrAt: (new Date).toISOString()
						})
					})), this.getAccountHistoricalLeaderboardPnl = function() {
						var r = _asyncToGenerator((function*({
							limit: r = null,
							period: a
						}) {
							const o = r ? {
								limit: r
							} : {};
							return (yield t.currentClient.private.getAccountHistoricalLeaderboardPnl(a, o)).leaderboardPnls
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.sendVerificationEmail = _asyncToGenerator((function*() {
						yield t.currentClient.private.sendVerificationEmail()
					})), this.verifyEmail = function() {
						var r = _asyncToGenerator((function*({
							token: r
						}) {
							yield t.currentClient.public.verifyEmail(r)
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.recovery = function() {
						var r = _asyncToGenerator((function*({
							ethereumAddress: r,
							signingMethod: a
						}) {
							return yield t.currentClient.ethPrivate.recovery(r, a)
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.getTestTokens = _asyncToGenerator((function*() {
						return yield t.currentClient.private.post("testnet/tokens", {})
					})), this.getCurrentHedgies = _asyncToGenerator((function*() {
						return yield t.currentClient.public.getCurrentlyRevealedHedgies()
					})), this.getHedgiesHistory = function() {
						var r = _asyncToGenerator((function*({
							nftRevealType: r,
							start: a = null,
							end: o = null
						}) {
							const i = {};
							i.nftRevealType = r, a && (i.start = a), o && (i.end = o);
							return yield t.currentClient.public.getHistoricallyRevealedHedgies(i)
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.postRestrictionsCompliance = function() {
						var r = _asyncToGenerator((function*({
							residenceCountry: r,
							tradingCountry: a
						}) {
							return yield t.currentClient.private.post("restrictions/compliance", {
								residenceCountry: r,
								tradingCountry: a
							})
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.getProfilePrivate = _asyncToGenerator((function*() {
						return yield t.currentClient.private.getProfilePrivate()
					})), this.getProfilePublic = function() {
						var r = _asyncToGenerator((function*({
							publicId: r
						}) {
							return yield t.currentClient.public.getProfilePublic({
								publicId: r
							})
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.setRestriction = function() {
						var r = _asyncToGenerator((function*(r) {
							yield t.currentClient.private.put("restrictions", r)
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.submitAffiliateRegistration = function() {
						var r = _asyncToGenerator((function*({
							isEntity: r,
							formData: {
								entityName: a,
								chapter3Status: o,
								firstName: i,
								lastName: c,
								country: l,
								streetAddress: E,
								cityAddress: d,
								stateAddress: _,
								postalCode: O,
								countryAddress: T,
								eW8BENCertification: I,
								applicationWasSigned: S,
								capacityCheckBox: p,
								nameOfSigner: R
							}
						}) {
							const A = r ? {
								nameOfEntity: a,
								chapter3Status: o,
								incorporationCountryCode: u.a[l]
							} : {
								firstName: i,
								lastName: c,
								citizenCountryCode: u.a[l]
							};
							return (yield t.currentClient.private.post(r ? "affiliates/entity" : "affiliates/individual", _objectSpread({
								permanentResidentAddressStreet: E,
								permanentResidentAddressCity: d,
								permanentResidentAddressLocale: _,
								permanentResidentAddressPostalCode: O,
								permanentResidentAddressCountry: u.a[T],
								eW8BENCertification: I,
								applicationWasSigned: S,
								capacityCheckBox: p,
								nameOfSigner: R
							}, A))).affiliateApplicationStatus
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.getSelfServiceAffiliateStatus = _asyncToGenerator((function*() {
						return (yield t.currentClient.private.get("affiliates", {})).affiliateApplicationStatus
					})), this.isValidAffiliateLink = function() {
						var r = _asyncToGenerator((function*(r) {
							if (!r) return null;
							return yield t.currentClient.public.get("affiliates/" + r, {})
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.currentClient = b, this.currentProvider = null, this.store = null
				}
			};
			r.c = N
		},
		320: function(t, r, a) {
			"use strict";
			a.d(r, "d", (function() {
				return c
			})), a.d(r, "c", (function() {
				return l
			})), a.d(r, "b", (function() {
				return E
			})), a.d(r, "a", (function() {
				return u
			}));
			var o = a(8),
				i = a(17);
			const c = o.c.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex: 1 1 auto;

  @media ${i.a.mobile} {
    min-height: 100%;
  }
`,
				l = o.c.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`,
				E = o.c.div`
  padding: 0 28px 24px 28px;
`,
				u = o.c.div`
  ${i.e.size15};
  color: var(--color-text-base);

  @media ${i.a.tablet} {
    ${i.e.size16};
  }
`
		},
		33: function(t, r, a) {
			"use strict";
			a.d(r, "c", (function() {
				return i
			})), a.d(r, "a", (function() {
				return c
			})), a.d(r, "d", (function() {
				return l
			})), a.d(r, "b", (function() {
				return E
			}));
			var o = a(24);
			const i = Object(o.a)("OPEN_MODAL"),
				c = Object(o.a)("CLOSE_MODAL"),
				l = Object(o.a)("OPEN_SIDEBAR_MODAL"),
				E = Object(o.a)("CLOSE_SIDEBAR_MODAL")
		},
		34: function(t, r, a) {
			"use strict";
			a.d(r, "b", (function() {
				return o
			})), a.d(r, "c", (function() {
				return i
			})), a.d(r, "d", (function() {
				return c
			})), a.d(r, "a", (function() {
				return l
			}));
			const o = {
					ADJUSTED_IMR: "ADJUSTED_IMR",
					COMPETITION_PRIZES: "COMPETITION_PRIZES",
					COMPLIANCE_ALERT: "COMPLIANCE_ALERT",
					DEPOSIT_FUNDS_PROMPT: "DEPOSIT_FUNDS_PROMPT",
					DEPOSIT_PENDING: "DEPOSIT_PENDING",
					DEPOSIT_SUCCESS: "DEPOSIT_SUCCESS",
					EMAIL_AVAILABLE_REMINDER: "EMAIL_AVAILABLE_REMINDER",
					EPOCH_END: "EPOCH_END",
					FAST_WITHDRAW_PENDING: "FAST_WITHDRAW_PENDING",
					FAST_WITHDRAW_SUCCESS: "FAST_WITHDRAW_SUCCESS",
					FLAGGED_ACCOUNT: "FLAGGED_ACCOUNT",
					ORDER_UPDATE: "ORDER_UPDATE",
					SELF_SERVICE_APPLICATION_LAUNCH: "SELF_SERVICE_APPLICATION_LAUNCH",
					SLOW_WITHDRAW_AVAILABLE: "SLOW_WITHDRAW_AVAILABLE",
					SLOW_WITHDRAW_PENDING: "SLOW_WITHDRAW_PENDING",
					SURVEY_100K_MAKER_TAKER: "SURVEY_100K_MAKER_TAKER",
					TRADING_FEE_REDUCTION: "TRADING_FEE_REDUCTION",
					VERIFY_EMAIL: "VERIFY_EMAIL",
					VERIFY_EMAIL_RESPONSE: "VERIFY_EMAIL_RESPONSE",
					WASH_TRADE_WARNING: "WASH_TRADE_WARNING"
				},
				i = [o.DEPOSIT_FUNDS_PROMPT, o.SLOW_WITHDRAW_AVAILABLE, o.VERIFY_EMAIL],
				c = {
					VERIFY_EMAIL: "VERIFY_EMAIL",
					VERIFY_EMAIL_FAIL: "VERIFY_EMAIL_FAIL",
					VERIFY_EMAIL_SENT: "VERIFY_EMAIL_SENT",
					VERIFY_EMAIL_SUCCESS: "VERIFY_EMAIL_SUCCESS"
				},
				l = 6e3
		},
		35: function(t, r, a) {
			"use strict";
			a.d(r, "b", (function() {
				return u
			})), a.d(r, "c", (function() {
				return d
			})), a.d(r, "d", (function() {
				return _
			})), a.d(r, "a", (function() {
				return O
			}));
			var o = a(0),
				i = a.n(o),
				c = a(8),
				l = a(17),
				E = a(155);

			function _extends() {
				return (_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}

			function _objectWithoutProperties(t, r) {
				if (null == t) return {};
				var a, o, i = function _objectWithoutPropertiesLoose(t, r) {
					if (null == t) return {};
					var a, o, i = {},
						c = Object.keys(t);
					for (o = 0; o < c.length; o++) a = c[o], r.indexOf(a) >= 0 || (i[a] = t[a]);
					return i
				}(t, r);
				if (Object.getOwnPropertySymbols) {
					var c = Object.getOwnPropertySymbols(t);
					for (o = 0; o < c.length; o++) a = c[o], r.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(t, a) && (i[a] = t[a])
				}
				return i
			}
			let u, d, _;
			! function(t) {
				t.Green = "Green", t.Light = "Light", t.Lighter = "Lighter", t.Lightest = "Lightest", t.Purple = "Purple", t.Red = "Red", t.RedText = "RedText", t.Transparent = "Transparent", t.TransparentLight = "TransparentLight"
			}(u || (u = {})),
			function(t) {
				t.Pill = "Pill", t.Rectangle = "Rectangle"
			}(d || (d = {})),
			function(t) {
				t.Tiny = "Tiny", t.ExtraSmall = "ExtraSmall", t.Small = "Small", t.Medium = "Medium", t.Large = "Large"
			}(_ || (_ = {}));
			const O = i.a.forwardRef((t, r) => {
					let a = t.allowClickOnLoading,
						o = t.children,
						c = t.href,
						l = t.isLoading,
						u = t.isProgress,
						d = t.progress,
						O = t.size,
						I = void 0 === O ? _.Medium : O,
						S = t.onClick,
						p = _objectWithoutProperties(t, ["allowClickOnLoading", "children", "href", "isLoading", "isProgress", "progress", "size", "onClick"]);
					const R = p.disabled || u && void 0 !== d && d < 1;
					let A;
					return A = c ? T.ButtonLink : T.Button, i.a.createElement(A, _extends({
						ref: r,
						size: I,
						href: c,
						target: c ? "_blank" : void 0,
						rel: c ? "noopener noreferrer" : void 0,
						onClick: R || l && !a || !S ? Function.prototype : S,
						isLoading: l,
						isProgress: u,
						progress: d
					}, p), l ? i.a.createElement(E.a, {
						size: I === _.Large ? 5 : 4
					}) : i.a.createElement(i.a.Fragment, null, o))
				}),
				T = {},
				I = c.b`
  background-color: var(--button-active-background-color, var(--color-layer-light));
  color: var(--button-active-text-color, var(--color-text-light));
`;
			T.Button = c.c.button`
  ${l.f.medium}
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--button-background-color, var(--color-layer-lighter));
  color: var(--button-text-color, var(--color-text-base));
  cursor: pointer;
  border: none;
  user-select: none;
  white-space: nowrap;
  width: ${({fullWidth:t})=>t?"100%":"auto"};

  ${({size:t})=>{switch(t){case _.Tiny:return`\
			n $ {
				l.e.size12
			}\
			n height: 28 px;\
			n min - height: 28 px;\
			n padding: 0 8 px;\
			n letter - spacing: 0.1 ch;\
			n text - transform: uppercase;\
			n\ n @media $ {
				l.a.tablet
			} {
				\
				n $ {
					l.e.size14
				}\
				n height: 32 px;\
				n min - height: 32 px;\
				n
			}\
			n `;case _.ExtraSmall:return`\
			n $ {
				l.e.size13
			}\
			n height: 28 px;\
			n min - height: 28 px;\
			n\ n @media $ {
				l.a.tablet
			} {
				\
				n $ {
					l.e.size15
				}\
				n height: 36 px;\
				n min - height: 36 px;\
				n
			}\
			n `;case _.Small:return`\
			n $ {
				l.e.size14
			}\
			n height: 32 px;\
			n min - height: 32 px;\
			n\ n @media $ {
				l.a.tablet
			} {
				\
				n $ {
					l.e.size16
				}\
				n height: 36 px;\
				n min - height: 36 px;\
				n
			}\
			n `;case _.Medium:return`\
			n $ {
				l.e.size14
			}\
			n height: 36 px;\
			n min - height: 36 px;\
			n\ n @media $ {
				l.a.tablet
			} {
				\
				n $ {
					l.e.size17
				}\
				n height: 44 px;\
				n min - height: 44 px;\
				n
			}\
			n `;case _.Large:return`\
			n $ {
				l.e.size15
			}\
			n height: 40 px;\
			n min - height: 40 px;\
			n\ n @media $ {
				l.a.tablet
			} {
				\
				n $ {
					l.e.size18
				}\
				n height: 48 px;\
				n min - height: 48 px;\
				n
			}\
			n `;default:return`\
			n $ {
				l.e.size14
			}\
			n height: 36 px;\
			n min - height: 36 px;\
			n\ n @media $ {
				l.a.tablet
			} {
				\
				n $ {
					l.e.size17
				}\
				n height: 44 px;\
				n min - height: 44 px;\
				n
			}\
			n `}}}

  ${({shape:t})=>{switch(t){case d.Pill:return`\
			n $ {
				l.e.size13
			}\
			n border - radius: 24 px;\
			n padding: 0 10 px;\
			n--button - active - background - color: var (--color - layer - dark);\
			n\ n @media $ {
				l.a.tablet
			} {
				\
				n $ {
					l.e.size16
				}\
				n padding: 0 12 px;\
				n
			}\
			n `;case d.Rectangle:default:return"\n          border-radius: 8px;\n          padding: 0 16px;\n        "}}}

  ${({isLoading:t,allowClickOnLoading:r})=>t&&`\
			n min - width: 64 px;\
			n cursor: $ {
				r ? "pointer" : "default"
			};\
			n--button - hover - filter: none;\
			n `}

  ${({color:t})=>{switch(t){case u.Green:return"\n          --button-background-color: var(--color-green);\n          --button-active-background-color: rgba(63, 182, 139, 0.8);\n          --button-text-color: var(--color-text-light);\n        ";case u.Light:return"\n          --button-background-color: var(--color-layer-light);\n          --button-text-color: var(--color-text-light);\n        ";case u.Lighter:return"\n          --button-background-color: var(--color-layer-lighter);\n          --button-text-color: var(--color-text-base);\n        ";case u.Lightest:return"\n          --button-background-color: var(--color-layer-lightest);\n          --button-text-color: var(--color-text-base);\n        ";case u.Purple:return"\n          --button-background-color: var(--color-purple);\n          --button-active-background-color: rgba(89, 115, 254, 0.8);\n          --button-text-color: var(--color-text-light);\n        ";case u.Red:return"\n          --button-background-color: var(--color-red);\n          --button-active-background-color: rgba(255, 83, 83, 0.8);\n          --button-text-color: var(--color-text-light);\n        ";case u.RedText:return"\n          --button-text-color: var(--color-red);\n          --button-active-text-color: var(--color-red);\n        ";case u.Transparent:return"\n          --button-background-color: transparent;\n          --button-hover-background-color: var(--color-layer-lighter);\n          --button-active-background-color: var(--color-layer-darker);\n          --button-active-text-color: var(--color-text-light);\n          --button-text-color: var(--color-text-dark);\n          --button-hover-text-color: var(--color-text-light);\n        ";case u.TransparentLight:return"\n          --button-background-color: transparent;\n          --button-hover-background-color: var(--color-layer-light);\n          --button-active-background-color: var(--color-layer-lighter);\n          --button-text-color: var(--color-text-dark);\n          --button-hover-text-color: var(--color-text-light);\n        ";default:return""}}}


  &:active::not(::disabled) {
    ${I}
  }

  ${({active:t})=>t?I:c.b` &
				: hover: not(: disabled) {
					filter: var (--button - hover - filter, brightness(1.1));
					color: var (--button - hover - text - color,
						var (--button - text - color,
							var (--color - text - base)));

					background - color: var (
						--button - hover - background - color,
						var (--button - background - color,
							var (--color - layer - lighter))
					);
				}
			`}

  :disabled {
    cursor: not-allowed;
    --button-background-color: var(--color-layer-lighter);
    --button-active-background-color: var(--color-layer-lighter);
    --button-text-color: var(--color-text-dark);
    --button-active-text-color: var(--color-text-dark);
    --button-hover-filter: none;
  }

  ${({isProgress:t,progress:r=1})=>t&&r<1&&c.b`
			--progress: $ {
				r
			};

			cursor: wait;
			filter: none!important;

			background - image: linear - gradient(
				to right,
				var (--color - layer - lightest) calc(100 % *
					var (--progress)),
				var (--color - layer - lighter) calc(100 % *
					var (--progress))
			);
			`}
`
		},
		350: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return i
			})), a.d(r, "b", (function() {
				return c
			}));
			var o = a(24);
			const i = Object(o.a)("SET_FILLS"),
				c = Object(o.a)("VIEWED_FILLS")
		},
		352: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return i
			})), a.d(r, "b", (function() {
				return c
			}));
			var o = a(24);
			const i = Object(o.a)("UPDATE_HISTORICAL_PNL"),
				c = Object(o.a)("UPDATE_HISTORICAL_PNL_SELECTED_TIMEFRAME")
		},
		356: function(t, r, a) {
			"use strict";
			a.d(r, "d", (function() {
				return getAllCandleData
			})), a.d(r, "c", (function() {
				return findSelectedResolution
			})), a.d(r, "a", (function() {
				return findCandlesForMarket
			})), a.d(r, "b", (function() {
				return findLastRequestTimeForMarket
			})), a.d(r, "e", (function() {
				return E
			})), a.d(r, "f", (function() {
				return u
			}));
			var o = a(25),
				i = a.n(o),
				c = a(65),
				l = a(58);
			const getAllCandleData = t => i()(t, "candleData.candleDataByMarket"),
				findSelectedResolution = ({
					allCandleData: t,
					market: r
				}) => i()(t, `[${r}].selectedResolution`),
				findCandlesForMarket = ({
					allCandleData: t,
					market: r,
					resolution: a
				}) => i()(t, `[${r}].data.${a||findSelectedResolution({allCandleData:t,market:r})}.candles`),
				findLastRequestTimeForMarket = ({
					allCandleData: t,
					market: r,
					resolution: a
				}) => i()(t, `[${r}].data.[${a}].lastRequest`),
				E = Object(c.a)([getAllCandleData, l.b], (t, r) => {
					const a = i()(r, "market"),
						o = findSelectedResolution({
							allCandleData: t,
							market: a
						});
					return findCandlesForMarket({
						allCandleData: t,
						market: a,
						resolution: o
					})
				}),
				u = Object(c.a)([getAllCandleData, l.b], (t, r) => findSelectedResolution({
					allCandleData: t,
					market: i()(r, "market")
				}))
		},
		357: function(t, r, a) {
			"use strict";
			a.d(r, "b", (function() {
				return getHistoricalPnl
			})), a.d(r, "c", (function() {
				return getHistoricalPnlLastUpdated
			})), a.d(r, "d", (function() {
				return getHistoricalPnlTimeframe
			})), a.d(r, "a", (function() {
				return getHasMoreHistoricalPnlToFetch
			}));
			var o = a(25),
				i = a.n(o);
			const getHistoricalPnl = t => i()(t, "historicalPnl.historicalPnl"),
				getHistoricalPnlLastUpdated = t => i()(t, "historicalPnl.lastUpdatedAt"),
				getHistoricalPnlTimeframe = t => i()(t, "historicalPnl.selectedTimeframe"),
				getHasMoreHistoricalPnlToFetch = t => i()(t, "historicalPnl.hasMoreHistoryToFetch")
		},
		358: function(t, r, a) {
			"use strict";
			const o = new class {
				constructor() {
					this.setProvider = t => {
						this.provider = t
					}, this.getSignature = () => {
						var t;
						return null === (t = this.provider) || void 0 === t ? void 0 : t.EIP712_SIGN
					}, this.provider = null
				}
			};
			r.a = o
		},
		359: function(t, r, a) {
			"use strict";
			a.d(r, "b", (function() {
				return Kr
			}));
			var o = a(54),
				i = a(841),
				c = a(851),
				l = a(176),
				E = a(136),
				u = a(853),
				d = a(229),
				_ = a(38),
				O = a(161),
				T = a(1718),
				I = a(21);

			function ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function _objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? ownKeys(Object(a), !0).forEach((function(r) {
						_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function _defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function _objectWithoutProperties(t, r) {
				if (null == t) return {};
				var a, o, i = function _objectWithoutPropertiesLoose(t, r) {
					if (null == t) return {};
					var a, o, i = {},
						c = Object.keys(t);
					for (o = 0; o < c.length; o++) a = c[o], r.indexOf(a) >= 0 || (i[a] = t[a]);
					return i
				}(t, r);
				if (Object.getOwnPropertySymbols) {
					var c = Object.getOwnPropertySymbols(t);
					for (o = 0; o < c.length; o++) a = c[o], r.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(t, a) && (i[a] = t[a])
				}
				return i
			}
			const S = {
				account: null
			};
			var p = Object(T.a)({
					[_.a]: (t, r) => {
						let a = r.payload,
							o = (a.openPositions, _objectWithoutProperties(a, ["openPositions"]));
						return _objectSpread(_objectSpread({}, t), {}, {
							account: o
						})
					},
					[_.j]: (t, {
						payload: r
					}) => _objectSpread(_objectSpread({}, t), {}, {
						account: _objectSpread(_objectSpread({}, t.account), r)
					}),
					[I.c]: () => _objectSpread({}, S),
					[I.l]: () => _objectSpread({}, S)
				}, S),
				R = a(71),
				A = a.n(R),
				b = a(169),
				N = a.n(b),
				C = a(25),
				y = a.n(C),
				D = a(270),
				m = a.n(D),
				h = a(145),
				L = a.n(h),
				g = a(186),
				P = a.n(g),
				v = a(88),
				w = a(51);

			function candle_data_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function candle_data_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? candle_data_ownKeys(Object(a), !0).forEach((function(r) {
						candle_data_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : candle_data_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function candle_data_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const M = {
				hasFetchedDataAtLeastOnce: !1,
				candleDataByMarket: P()(v.b, (t, {
					market: r
				}) => (t[r] = {
					data: {},
					selectedResolution: w.c["1D"],
					earliestRequestedCandle: null
				}, t), {})
			};
			var reducers_candle_data = (t = M, {
					type: r,
					payload: a
				}) => {
					switch (r) {
						case Object(d.a)().type: {
							const r = a.market,
								o = a.resolution,
								i = L()(t.candleDataByMarket);
							return m()(i, `[${r}].selectedResolution`, o), m()(i, `[${r}].earliestRequestedCandle`, null), candle_data_objectSpread(candle_data_objectSpread({}, t), {}, {
								candleDataByMarket: i
							})
						}
						case Object(d.b)().type: {
							const r = a.candles,
								o = a.market,
								i = a.resolution,
								c = a.setLastRequest;
							if (!r) return t;
							const l = `${o}.data.${i}`,
								E = L()(t.candleDataByMarket);
							return m()(E, l, {
								candles: [...r],
								lastRequest: c ? (new Date).getTime() : y()(E, l + ".lastRequest")
							}), candle_data_objectSpread(candle_data_objectSpread({}, t), {}, {
								hasFetchedDataAtLeastOnce: !0,
								candleDataByMarket: E
							})
						}
						case Object(d.c)().type: {
							var o;
							const r = a.candles,
								i = a.market,
								c = a.resolution;
							if (!r) return t;
							const l = `${i}.data.${c}`,
								E = L()(t.candleDataByMarket);
							let u = y()(E, l + ".candles", []);
							const d = null === (o = u[u.length - 1]) || void 0 === o ? void 0 : o.startedAt;
							return N()(u) ? u = r : A()(r, t => {
								const r = u.findIndex(({
										startedAt: r
									}) => r === t.startedAt),
									a = d && t.startedAt > d;
								r >= 0 ? u[r] = t : a && u.push(t)
							}), m()(E, l, {
								candles: u,
								lastRequest: (new Date).getTime()
							}), candle_data_objectSpread(candle_data_objectSpread({}, t), {}, {
								hasFetchedDataAtLeastOnce: !0,
								candleDataByMarket: E
							})
						}
						default:
							return t
					}
				},
				U = a(441);

			function configs_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function configs_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? configs_ownKeys(Object(a), !0).forEach((function(r) {
						configs_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : configs_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function configs_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			var G = Object(T.a)({
					[U.a]: (t, {
						payload: r
					}) => configs_objectSpread(configs_objectSpread({}, t), {}, {
						exchangeConfig: r
					})
				}, {
					exchangeConfig: null
				}),
				j = a(140),
				k = a.n(j),
				x = a(199),
				H = a.n(x),
				B = a(130),
				W = a(213),
				Y = a(33),
				K = a(258),
				V = a(27);

			function deposit_withdraw_data_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function deposit_withdraw_data_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? deposit_withdraw_data_ownKeys(Object(a), !0).forEach((function(r) {
						deposit_withdraw_data_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : deposit_withdraw_data_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function deposit_withdraw_data_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const Z = {
					withdrawInput: "",
					usdcDepositAmount: "",
					fastWithdrawFeeData: null
				},
				z = {
					depositWithdrawData: deposit_withdraw_data_objectSpread(deposit_withdraw_data_objectSpread({}, Z), {}, {
						hasAllowanceBeenSet: {}
					}),
					availableSlowWithdrawAmount: null,
					pendingDeposits: []
				};
			var reducers_deposit_withdraw_data = (t = z, {
					type: r,
					payload: a,
					meta: o
				}) => {
					switch (r) {
						case Object(B.c)().type:
							return deposit_withdraw_data_objectSpread(deposit_withdraw_data_objectSpread({}, t), {}, {
								depositWithdrawData: deposit_withdraw_data_objectSpread(deposit_withdraw_data_objectSpread({}, t.depositWithdrawData), a)
							});
						case W.b.SUCCESS_TYPE: {
							const r = o.amount,
								a = o.resp.transactionHash;
							return deposit_withdraw_data_objectSpread(deposit_withdraw_data_objectSpread({}, t), {}, {
								pendingDeposits: [...t.pendingDeposits, {
									id: a,
									amount: r,
									transactionHash: a,
									confirmationBlockNumber: null
								}]
							})
						}
						case Object(B.a)().type:
							return deposit_withdraw_data_objectSpread(deposit_withdraw_data_objectSpread({}, t), {}, {
								depositWithdrawData: deposit_withdraw_data_objectSpread(deposit_withdraw_data_objectSpread({}, t.depositWithdrawData), Z)
							});
						case Object(B.e)().type: {
							const r = H()(t.pendingDeposits, ({
								transactionHash: t
							}) => t === a.transactionHash);
							if (r < 0) return t;
							const o = [...t.pendingDeposits];
							return o[r] = deposit_withdraw_data_objectSpread(deposit_withdraw_data_objectSpread({}, o[r]), a.updatedData), deposit_withdraw_data_objectSpread(deposit_withdraw_data_objectSpread({}, t), {}, {
								pendingDeposits: o
							})
						}
						case Object(B.b)().type:
							return deposit_withdraw_data_objectSpread(deposit_withdraw_data_objectSpread({}, t), {}, {
								pendingDeposits: k()(t.pendingDeposits, ({
									id: t
								}) => t !== a.id)
							});
						case Object(_.r)().type: {
							const r = [...t.pendingDeposits];
							return A()(a, ({
								transactionHash: t,
								status: a
							}) => {
								if (a === K.a.CONFIRMED && t) {
									const a = H()(r, ({
										transactionHash: r
									}) => r.toLowerCase() === t.toLowerCase());
									a > -1 && r.splice(a, 1)
								}
							}), r.length === t.pendingDeposits.length ? t : deposit_withdraw_data_objectSpread(deposit_withdraw_data_objectSpread({}, t), {}, {
								pendingDeposits: r
							})
						}
						case Object(B.d)().type:
							return deposit_withdraw_data_objectSpread(deposit_withdraw_data_objectSpread({}, t), {}, {
								availableSlowWithdrawAmount: a
							});
						case Object(Y.a)().type:
							return a && a.modalType === V.a.TRANSFER ? deposit_withdraw_data_objectSpread(deposit_withdraw_data_objectSpread({}, t), {}, {
								depositWithdrawData: deposit_withdraw_data_objectSpread({}, Z)
							}) : t;
						case Object(I.c)().type:
						case Object(I.l)().type:
							return deposit_withdraw_data_objectSpread(deposit_withdraw_data_objectSpread({}, t), z);
						default:
							return t
					}
				},
				X = a(350);

			function fills_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function fills_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? fills_ownKeys(Object(a), !0).forEach((function(r) {
						fills_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : fills_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function fills_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			var q = Object(T.a)({
				[X.a]: (t, {
					payload: r
				}) => fills_objectSpread(fills_objectSpread({}, t), {}, {
					fills: r
				}),
				[_.l]: (t, {
					payload: r
				}) => {
					const a = t.fills ? [...t.fills] : [];
					return A()(r, t => {
						const r = H()(a, ({
							id: r
						}) => r === t.id);
						r > -1 ? a[r] = t : a.unshift(t)
					}), fills_objectSpread(fills_objectSpread({}, t), {}, {
						fills: a,
						hasUnseenFillUpdates: !0
					})
				},
				[X.b]: t => fills_objectSpread(fills_objectSpread({}, t), {}, {
					hasUnseenFillUpdates: !1
				}),
				[I.c]: t => fills_objectSpread(fills_objectSpread({}, t), {}, {
					fills: null
				}),
				[I.l]: t => fills_objectSpread(fills_objectSpread({}, t), {}, {
					fills: null
				})
			}, {
				fills: null,
				hasUnseenFillUpdates: !1
			});

			function funding_payments_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function funding_payments_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? funding_payments_ownKeys(Object(a), !0).forEach((function(r) {
						funding_payments_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : funding_payments_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function funding_payments_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const $ = {
				fundingPayments: null,
				fundingPaymentsByMarket: null,
				fetchedMarkets: []
			};
			var Q = Object(T.a)({
					[_.b]: (t, {
						payload: r
					}) => funding_payments_objectSpread(funding_payments_objectSpread({}, t), {}, {
						fundingPayments: r
					}),
					[_.c]: (t, {
						payload: {
							market: r,
							fundingPayments: a
						}
					}) => {
						const o = funding_payments_objectSpread(funding_payments_objectSpread({}, t.fundingPaymentsByMarket), {}, {
							[r]: a
						});
						return funding_payments_objectSpread(funding_payments_objectSpread({}, t), {}, {
							fetchedMarkets: [r, ...t.fetchedMarkets],
							fundingPaymentsByMarket: o
						})
					},
					[_.m]: (t, {
						payload: r
					}) => {
						const a = funding_payments_objectSpread({}, t.fundingPaymentsByMarket);
						return r.forEach(t => {
							const r = null === t || void 0 === t ? void 0 : t.market;
							null !== a && void 0 !== a && a[r] ? (100 === a[r].length && a[r].pop(), a[r].unshift(t)) : a[r] = [t]
						}), funding_payments_objectSpread(funding_payments_objectSpread({}, t), {}, {
							fundingPayments: [...r, ...t.fundingPayments],
							fundingPaymentsByMarket: a
						})
					},
					[I.c]: () => funding_payments_objectSpread({}, $),
					[I.l]: () => funding_payments_objectSpread({}, $)
				}, $),
				J = a(443);
			const ee = {
				geo: null
			};
			var reducers_geo = (t = ee, {
					type: r,
					payload: a
				}) => {
					switch (r) {
						case J.a.SUCCESS_TYPE:
							return {
								geo: a.geo
							};
						default:
							return t
					}
				},
				te = a(59),
				re = a(230),
				ne = a.n(re),
				ae = a(163);

			function asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}
			const oe = ae.a ? "https://dydx-api.consenlabs.com/v3/historical-funding" : "https://api.dydx.exchange/v3/historical-funding",
				ie = Object(l.createAsyncAction)("FETCH_HISTORICAL_FUNDING_DATA", ({
					market: t,
					startingBefore: r
				}) => ({
					meta: {
						market: t,
						startingBefore: r
					},
					makeRequest: function() {
						var a = function _asyncToGenerator(t) {
							return function() {
								var r = this,
									a = arguments;
								return new Promise((function(o, i) {
									var c = t.apply(r, a);

									function _next(t) {
										asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
									}

									function _throw(t) {
										asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
									}
									_next(void 0)
								}))
							}
						}((function*() {
							const a = {};
							r && (a.effectiveBeforeOrAt = te.DateTime.fromISO(r).toUTC().toISO());
							return (yield fetch(`${oe}/${t}?${ne.a.stringify(a)}`)).json()
						}));
						return function makeRequest() {
							return a.apply(this, arguments)
						}
					}()
				}));

			function historical_funding_rates_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function historical_funding_rates_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? historical_funding_rates_ownKeys(Object(a), !0).forEach((function(r) {
						historical_funding_rates_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : historical_funding_rates_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function historical_funding_rates_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const se = {
				fundingDataByMarket: P()(v.b, (t, {
					market: r
				}) => (t[r] = {
					fundingRates: [],
					lastRequest: null
				}, t), {})
			};
			var historical_funding_rates = (t = se, {
					type: r,
					payload: a,
					meta: o
				}) => {
					switch (r) {
						case ie.SUCCESS_TYPE: {
							const r = a.historicalFunding,
								i = o.market;
							if (!r) return t;
							const c = L()(t.fundingDataByMarket);
							return m()(c, i, {
								fundingRates: r,
								lastRequest: (new Date).getTime()
							}), historical_funding_rates_objectSpread(historical_funding_rates_objectSpread({}, t), {}, {
								fundingDataByMarket: c
							})
						}
						default:
							return t
					}
				},
				ce = a(206),
				le = a.n(ce),
				Ee = a(124),
				ue = a.n(Ee),
				de = a(352),
				_e = a(237);

			function historical_pnl_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function historical_pnl_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? historical_pnl_ownKeys(Object(a), !0).forEach((function(r) {
						historical_pnl_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : historical_pnl_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function historical_pnl_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const Oe = {
				historicalPnl: null,
				selectedTimeframe: _e.b.WEEK,
				lastUpdatedAt: null,
				hasMoreHistoryToFetch: !0
			};
			var Te = Object(T.a)({
					[de.a]: (t, {
						payload: r
					}) => {
						const a = r.historicalPnl,
							o = r.isUpdatingLatestTicks,
							i = (new Date).getTime(),
							c = 100 === ue()(a);
						if (!t.historicalPnl) return historical_pnl_objectSpread(historical_pnl_objectSpread({}, t), {}, {
							historicalPnl: a,
							lastUpdatedAt: i,
							hasMoreHistoryToFetch: c
						});
						const l = [];
						o && A()(a, r => {
							const a = r.createdAt;
							return !le()(t.historicalPnl, ({
								createdAt: t
							}) => t === a) && (l.push(r), !0)
						});
						const E = o ? [...l, ...t.historicalPnl] : [...t.historicalPnl, ...a];
						return historical_pnl_objectSpread(historical_pnl_objectSpread({}, t), {}, {
							historicalPnl: E,
							lastUpdatedAt: i,
							hasMoreHistoryToFetch: c
						})
					},
					[de.b]: (t, {
						payload: {
							selectedTimeframe: r
						}
					}) => historical_pnl_objectSpread(historical_pnl_objectSpread({}, t), {}, {
						selectedTimeframe: r
					}),
					[I.c]: () => historical_pnl_objectSpread({}, Oe),
					[I.l]: () => historical_pnl_objectSpread({}, Oe)
				}, Oe),
				Ie = a(115);

			function leagues_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function leagues_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? leagues_ownKeys(Object(a), !0).forEach((function(r) {
						leagues_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : leagues_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function leagues_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const Se = {
				currentHedgies: {
					daily: {},
					weekly: {}
				},
				dailyCompetitionUserInfo: null,
				historicalPrizes: null,
				leaderboards: {},
				leaguesUserInfo: null,
				pastHedgies: {
					daily: [],
					weekly: []
				},
				prevLeaderboards: {},
				prevLeaguesUserInfo: null,
				selectedPeriod: void 0,
				timespanToggle: !1
			};
			var reducers_leagues = (t = Se, {
					type: r,
					payload: a
				}) => {
					switch (r) {
						case Object(Ie.a)().type:
							return leagues_objectSpread(leagues_objectSpread({}, t), {}, {
								currentHedgies: a
							});
						case Object(Ie.b)().type:
							return leagues_objectSpread(leagues_objectSpread({}, t), {}, {
								historicalPrizes: a
							});
						case Object(Ie.d)().type: {
							const r = a.daily,
								o = a.weekly;
							return leagues_objectSpread(leagues_objectSpread({}, t), {}, {
								pastHedgies: {
									daily: r,
									weekly: o
								}
							})
						}
						case Object(Ie.c)().type: {
							const r = a.rank,
								o = a.leaderboardRankings,
								i = a.isPrevWeek,
								c = void 0 !== i && i,
								l = c ? t.prevLeaderboards : t.leaderboards;
							return l[r] = o, leagues_objectSpread(leagues_objectSpread({}, t), {}, c ? {
								prevLeaderboards: l
							} : {
								leaderboards: l
							})
						}
						case Object(Ie.e)().type:
							return leagues_objectSpread(leagues_objectSpread({}, t), {}, {
								selectedPeriod: a
							});
						case Object(Ie.g)().type:
							return leagues_objectSpread(leagues_objectSpread({}, t), {}, {
								dailyCompetitionUserInfo: a
							});
						case Object(Ie.h)().type: {
							const r = a.leaguesUserInfo,
								o = a.isPrevWeek,
								i = void 0 !== o && o;
							return leagues_objectSpread(leagues_objectSpread({}, t), {}, i ? {
								prevLeaguesUserInfo: r
							} : {
								leaguesUserInfo: r
							})
						}
						case Object(Ie.f)().type:
							return leagues_objectSpread(leagues_objectSpread({}, t), {}, {
								timespanToggle: a
							});
						case Object(I.c)().type:
						case Object(I.l)().type:
							return leagues_objectSpread(leagues_objectSpread({}, t), {}, {
								historicalPrizes: null,
								leaguesUserInfo: null,
								prevLeaguesUserInfo: null
							});
						default:
							return t
					}
				},
				pe = a(116),
				Re = a(2),
				Ae = a(40),
				fe = a(227);

			function localization_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function localization_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? localization_ownKeys(Object(a), !0).forEach((function(r) {
						localization_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : localization_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function localization_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const be = Object(Ae.b)({
					key: Ae.a.SELECTED_LOCALE
				}),
				Ne = {
					isLocaleLoaded: !be || be === Re.c.EN,
					selectedLocale: be || Re.c.EN,
					localeData: fe.default
				};
			var Ce = Object(T.a)({
					[pe.b]: (t, {
						payload: r
					}) => localization_objectSpread(localization_objectSpread({}, t), {}, {
						isLocaleLoaded: r
					}),
					[pe.a]: (t, {
						payload: r
					}) => localization_objectSpread(localization_objectSpread({}, t), {}, {
						localeData: r,
						isLocaleLoaded: !0
					}),
					[pe.c]: (t, {
						payload: {
							locale: r
						}
					}) => localization_objectSpread(localization_objectSpread({}, t), {}, {
						selectedLocale: r
					})
				}, Ne),
				ye = a(859),
				De = a.n(ye);

			function markets_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function markets_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? markets_ownKeys(Object(a), !0).forEach((function(r) {
						markets_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : markets_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function markets_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			var me = Object(T.a)({
					[_.d]: (t, {
						payload: r
					}) => markets_objectSpread(markets_objectSpread({}, t), {}, {
						marketsData: y()(r, "contents.markets")
					}),
					[_.n]: (t, {
						payload: r
					}) => markets_objectSpread(markets_objectSpread({}, t), {}, {
						marketsData: De()({}, t.marketsData, y()(r, "contents"))
					})
				}, {
					marketsData: null
				}),
				he = a(113);

			function modals_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function modals_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? modals_ownKeys(Object(a), !0).forEach((function(r) {
						modals_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : modals_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function modals_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const Le = {
				modalConfig: null,
				sidebarModalConfig: null
			};
			var reducers_modals = (t = Le, {
					type: r,
					payload: a
				}) => {
					switch (r) {
						case Object(Y.c)().type: {
							const r = a.modalType,
								o = a.modalProps,
								i = void 0 === o ? {} : o;
							return modals_objectSpread(modals_objectSpread({}, t), {}, {
								modalConfig: {
									type: r,
									props: i
								},
								sidebarModalConfig: null
							})
						}
						case Object(Y.a)().type: {
							var o;
							const r = (a || {}).modalType;
							return (null === t || void 0 === t || null === (o = t.modalConfig) || void 0 === o ? void 0 : o.type) === r ? modals_objectSpread(modals_objectSpread({}, t), {}, {
								modalConfig: null
							}) : t
						}
						case Object(Y.d)().type: {
							const r = a.modalType,
								o = a.modalProps,
								i = void 0 === o ? {} : o;
							return modals_objectSpread(modals_objectSpread({}, t), {}, {
								sidebarModalConfig: {
									type: r,
									props: i
								}
							})
						}
						case he.b:
						case Object(Y.b)().type:
							return modals_objectSpread(modals_objectSpread({}, t), {}, {
								sidebarModalConfig: null
							});
						default:
							return t
					}
				},
				ge = a(47),
				Pe = a(34);

			function notifications_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function notifications_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? notifications_ownKeys(Object(a), !0).forEach((function(r) {
						notifications_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : notifications_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function notifications_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const ve = {
				notifications: [],
				hasUnseenNotifications: !1
			};
			var we = Object(T.a)({
					[ge.a]: (t, {
						payload: r
					}) => notifications_objectSpread(notifications_objectSpread({}, t), {}, {
						notifications: [r, ...t.notifications],
						hasUnseenNotifications: !0
					}),
					[ge.f]: (t, {
						payload: r
					}) => {
						const a = H()(t.notifications, ({
							id: t
						}) => t === r.id);
						if (a < 0) return t;
						const o = [...t.notifications];
						return o[a] = notifications_objectSpread(notifications_objectSpread({}, o[a]), r.updatedData), notifications_objectSpread(notifications_objectSpread({}, t), {}, {
							notifications: o,
							hasUnseenNotifications: !0
						})
					},
					[ge.b]: t => notifications_objectSpread(notifications_objectSpread({}, t), {}, {
						notifications: k()(t.notifications, ({
							type: t
						}) => Pe.c.includes(t))
					}),
					[ge.c]: (t, {
						payload: r
					}) => notifications_objectSpread(notifications_objectSpread({}, t), {}, {
						notifications: k()(t.notifications, ({
							id: t
						}) => t !== r.id)
					}),
					[ge.d]: (t, {
						payload: r
					}) => notifications_objectSpread(notifications_objectSpread({}, t), {}, {
						notifications: k()(t.notifications, ({
							type: t
						}) => t !== r.type)
					}),
					[ge.e]: t => notifications_objectSpread(notifications_objectSpread({}, t), {}, {
						hasUnseenNotifications: !1
					}),
					[I.c]: () => notifications_objectSpread({}, ve),
					[I.l]: () => notifications_objectSpread({}, ve)
				}, ve),
				Me = a(220),
				Ue = a.n(Me),
				Ge = a(598),
				je = a(26);

			function _slicedToArray(t, r) {
				return function _arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function _iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || _unsupportedIterableToArray(t, r) || function _nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function _createForOfIteratorHelper(t, r) {
				var a = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
				if (!a) {
					if (Array.isArray(t) || (a = _unsupportedIterableToArray(t)) || r && t && "number" === typeof t.length) {
						a && (t = a);
						var o = 0,
							i = function F() {};
						return {
							s: i,
							n: function n() {
								return o >= t.length ? {
									done: !0
								} : {
									done: !1,
									value: t[o++]
								}
							},
							e: function e(t) {
								throw t
							},
							f: i
						}
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}
				var c, l = !0,
					E = !1;
				return {
					s: function s() {
						a = a.call(t)
					},
					n: function n() {
						var t = a.next();
						return l = t.done, t
					},
					e: function e(t) {
						E = !0, c = t
					},
					f: function f() {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw c
						}
					}
				}
			}

			function _unsupportedIterableToArray(t, r) {
				if (t) {
					if ("string" === typeof t) return _arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? _arrayLikeToArray(t, r) : void 0
				}
			}

			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}

			function orderbook_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function orderbook_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? orderbook_ownKeys(Object(a), !0).forEach((function(r) {
						orderbook_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : orderbook_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function orderbook_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			var ke = Object(T.a)({
					[_.e]: (t, {
						payload: r
					}) => orderbook_objectSpread(orderbook_objectSpread({}, t), {}, {
						isOrderbookLoaded: r
					}),
					[_.f]: (t, {
						payload: r
					}) => {
						const a = r.id,
							o = r.contents,
							i = o.asks,
							c = o.bids,
							l = r.offset;
						return orderbook_objectSpread(orderbook_objectSpread({}, t), {}, {
							version: 0,
							recentlyRemovedOrders: [],
							orders: orderbook_objectSpread(orderbook_objectSpread({}, t.orders), {}, {
								[a]: {
									offset: 0,
									asks: Ue()(i, t => Number(t.price)).map(t => orderbook_objectSpread(orderbook_objectSpread({}, t), {}, {
										version: 0,
										offset: l
									})),
									bids: Ue()(c, t => Number(t.price)).map(t => orderbook_objectSpread(orderbook_objectSpread({}, t), {}, {
										version: 0,
										offset: l
									}))
								}
							}),
							zeroOrders: orderbook_objectSpread(orderbook_objectSpread({}, t.zeroOrders), {}, {
								[a]: {
									asks: {},
									bids: {}
								}
							})
						})
					},
					[Ge.a]: (t, {
						payload: r
					}) => orderbook_objectSpread(orderbook_objectSpread({}, t), {}, {
						zoomValue: r
					}),
					[_.k]: (t, {
						payload: r
					}) => {
						const a = r.id,
							o = r.contents;
						if (null === o || void 0 === o || !o.length) return t;
						const i = t.orders,
							c = t.version,
							l = t.zeroOrders,
							E = c > 1e4 ? 1 : c + 1,
							u = L()(i[a]),
							d = L()(l[a]),
							_ = [];
						var O, T = _createForOfIteratorHelper(o);
						try {
							for (T.s(); !(O = T.n()).done;) {
								const t = O.value,
									r = t.offset;
								for (var I = 0, S = [
										[je.a.BUY, t.bids, u.bids, d.bids],
										[je.a.SELL, t.asks, u.asks, d.asks]
									]; I < S.length; I++) {
									const t = _slicedToArray(S[I], 4),
										o = t[0],
										i = t[1],
										c = t[2],
										l = t[3];
									var p, R = _createForOfIteratorHelper(i);
									try {
										for (R.s(); !(p = R.n()).done;) {
											const t = _slicedToArray(p.value, 2),
												i = t[0],
												u = t[1],
												d = c.findIndex(t => t.price === i),
												O = c[d];
											if (O) "0" === u ? (l[i] = r, c.splice(d, 1), _.push(orderbook_objectSpread(orderbook_objectSpread({
												market: a
											}, O), {}, {
												side: o,
												version: E
											}))) : Number(O.offset) <= Number(r) && (c[d] = {
												price: i,
												size: u,
												version: E,
												offset: r
											});
											else if ("0" === u) l[i] = Math.max(l[i], r) || r;
											else if (!l[i] || Number(l[i]) <= Number(r)) {
												const t = {
													price: i,
													size: u,
													version: E,
													offset: r
												};
												c.push(t), c.sort((t, r) => t.price - r.price)
											}
										}
									} catch (N) {
										R.e(N)
									} finally {
										R.f()
									}
								}
							}
						} catch (N) {
							T.e(N)
						} finally {
							T.f()
						}
						const A = u.asks,
							b = u.bids;
						for (; A[0] && b[b.length - 1] && b[b.length - 1].price >= A[0].price;) b[b.length - 1].offset === A[0].offset ? b[b.length - 1].size > A[0].size ? A.shift() : b.pop() : b[b.length - 1].offset > A[0].offset ? A.shift() : b.pop();
						return orderbook_objectSpread(orderbook_objectSpread({}, t), {}, {
							recentlyRemovedOrders: _,
							version: E,
							orders: orderbook_objectSpread(orderbook_objectSpread({}, t.orders), {}, {
								[a]: u
							}),
							zeroOrders: orderbook_objectSpread(orderbook_objectSpread({}, t.zeroOrders), {}, {
								[a]: d
							})
						})
					}
				}, {
					version: null,
					orders: {},
					zeroOrders: {},
					recentlyRemovedOrders: [],
					isOrderbookLoaded: !1,
					zoomValue: 0
				}),
				xe = a(228);

			function orders_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function orders_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? orders_ownKeys(Object(a), !0).forEach((function(r) {
						orders_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : orders_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function orders_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const Fe = {
				orders: null,
				hasUnseenOrderUpdates: !1
			};
			var reducers_orders = (t = Fe, {
					type: r,
					payload: a
				}) => {
					switch (r) {
						case Object(_.g)().type:
							return orders_objectSpread(orders_objectSpread({}, t), {}, {
								orders: a
							});
						case Object(_.o)().type: {
							const r = t.orders ? [...t.orders] : [];
							return A()(a, t => {
								const a = H()(r, r => r.id === t.id);
								a > -1 ? r[a] = t : r.unshift(t)
							}), orders_objectSpread(orders_objectSpread({}, t), {}, {
								orders: r,
								hasUnseenOrderUpdates: !0
							})
						}
						case Object(xe.a)().type: {
							const r = a,
								o = t.orders.filter(({
									market: t,
									status: a
								}) => {
									if (a === je.c.CANCELED || a === je.c.FILLED) {
										if (r && t === r) return !1;
										if (!r) return !1
									}
									return !0
								});
							return orders_objectSpread(orders_objectSpread({}, t), {}, {
								orders: o
							})
						}
						case Object(xe.b)().type:
							return orders_objectSpread(orders_objectSpread({}, t), {}, {
								orders: k()(t.orders, ({
									id: t
								}) => t !== a.orderId)
							});
						case he.b:
						case Object(xe.c)().type:
							return orders_objectSpread(orders_objectSpread({}, t), {}, {
								hasUnseenOrderUpdates: !1
							});
						case Object(I.l)().type:
						case Object(I.c)().type:
							return orders_objectSpread({}, Fe);
						default:
							return t
					}
				},
				He = a(444),
				Be = a(120),
				We = a(19);

			function page_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function page_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? page_ownKeys(Object(a), !0).forEach((function(r) {
						page_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : page_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function page_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const Ye = {
				pageLoaded: !1,
				pageLoadedAt: !1,
				isSidebarOpen: !0,
				exchangeStatus: We.h.OPERATIONAL
			};

			function pageReducer(t = Ye, {
				type: r,
				payload: a
			}) {
				switch (r) {
					case Object(Be.a)().type:
						return page_objectSpread(page_objectSpread({}, t), {}, {
							pageLoaded: !0,
							pageLoadedAt: t.pageLoaded ? t.pageLoadedAt : te.DateTime.local()
						});
					case Object(Be.c)().type:
						return page_objectSpread(page_objectSpread({}, t), {}, {
							isSidebarOpen: a
						});
					case He.a.SUCCESS_TYPE: {
						const r = le()(y()(a, "components"), ({
							name: t
						}) => "trade.dydx.exchange" === t);
						return r ? page_objectSpread(page_objectSpread({}, t), {}, {
							exchangeStatus: r.status === We.p.OPERATIONAL ? We.h.OPERATIONAL : We.h.DEGRADED
						}) : t
					}
					default:
						return t
				}
			}
			var Ke = a(368),
				Ve = a.n(Ke);

			function positions_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function positions_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? positions_ownKeys(Object(a), !0).forEach((function(r) {
						positions_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : positions_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function positions_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			var Ze = Object(T.a)({
					[_.a]: (t, {
						payload: {
							openPositions: r
						}
					}) => positions_objectSpread(positions_objectSpread({}, t), {}, {
						positions: r
					}),
					[_.p]: (t, {
						payload: r
					}) => {
						const a = positions_objectSpread({}, t.positions);
						return Ve()(r, t => {
							const r = t.market;
							a[r] = t
						}), positions_objectSpread(positions_objectSpread({}, t), {}, {
							positions: a
						})
					},
					[I.c]: t => positions_objectSpread(positions_objectSpread({}, t), {}, {
						positions: null
					}),
					[I.l]: t => positions_objectSpread(positions_objectSpread({}, t), {}, {
						positions: null
					})
				}, {
					positions: null
				}),
				ze = a(196);

			function rewards_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function rewards_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? rewards_ownKeys(Object(a), !0).forEach((function(r) {
						rewards_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : rewards_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function rewards_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const Xe = {
				retroactiveRewards: {},
				tradingRewards: {
					tradingRewardsByEpoch: {},
					lastPulledAt: null
				}
			};

			function rewardsReducer(t = Xe, {
				type: r,
				payload: a
			}) {
				switch (r) {
					case Object(ze.a)().type:
						return rewards_objectSpread(rewards_objectSpread({}, t), {}, {
							retroactiveRewards: rewards_objectSpread(rewards_objectSpread({}, a), {}, {
								lastPulledAt: (new Date).toISOString()
							})
						});
					case Object(ze.b)().type: {
						const r = a.tradingRewards,
							o = a.isLatestEpoch;
						return null !== r && void 0 !== r && r.epoch || 0 === (null === r || void 0 === r ? void 0 : r.epoch) ? rewards_objectSpread(rewards_objectSpread({}, t), {}, {
							tradingRewards: {
								tradingRewardsByEpoch: rewards_objectSpread(rewards_objectSpread({}, t.tradingRewards.tradingRewardsByEpoch), {}, {
									[r.epoch]: rewards_objectSpread({}, r)
								}),
								latestEpoch: o ? null === r || void 0 === r ? void 0 : r.epoch : t.tradingRewards.latestEpoch,
								lastPulledAt: (new Date).toISOString()
							}
						}) : t
					}
					case Object(I.c)().type:
					case Object(I.l)().type:
						return rewards_objectSpread({}, Xe);
					default:
						return t
				}
			}
			var qe = a(587),
				$e = a.n(qe);

			function trades_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function trades_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? trades_ownKeys(Object(a), !0).forEach((function(r) {
						trades_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : trades_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function trades_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			var Qe = Object(T.a)({
					[_.h]: (t, {
						payload: r
					}) => {
						const a = y()(r, "contents.trades", []).map(t => trades_objectSpread(trades_objectSpread({}, t), {}, {
							version: 0,
							uuid: te.DateTime.fromISO(t.createdAt).toMillis()
						}));
						return trades_objectSpread(trades_objectSpread({}, t), {}, {
							liveTrades: trades_objectSpread(trades_objectSpread({}, t.liveTrades), {}, {
								[r.id]: {
									trades: a,
									version: 0
								}
							})
						})
					},
					[_.q]: (t, {
						payload: r
					}) => {
						const a = y()(r, "contents.trades"),
							o = L()(t.liveTrades[r.id]),
							i = o.version + 1;
						if (ue()(a) > 0) {
							const t = $e()(a).map(t => trades_objectSpread(trades_objectSpread({}, t), {}, {
								version: i,
								uuid: te.DateTime.fromISO(t.createdAt).toMillis()
							}));
							o.trades = [...t, ...o.trades]
						}
						return o.version = i, trades_objectSpread(trades_objectSpread({}, t), {}, {
							liveTrades: {
								[r.id]: o
							}
						})
					}
				}, {
					liveTrades: {}
				}),
				Je = a(571),
				et = a.n(Je),
				tt = a(219),
				rt = a(16);

			function trade_data_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function trade_data_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? trade_data_ownKeys(Object(a), !0).forEach((function(r) {
						trade_data_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : trade_data_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function trade_data_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const nt = trade_data_objectSpread(trade_data_objectSpread(trade_data_objectSpread({
				selectedOrderSide: je.a.BUY,
				selectedTradeType: rt.D.MARKET
			}, rt.d), rt.f), {}, {
				selectedTimeInForceOption: rt.C.GTT,
				goodTilTimeInput: "28",
				goodTilTimeTimescale: rt.i.DAYS,
				postOnlyChecked: !1,
				showMobileMarketSelector: !1
			});
			var reducers_trade_data = (t = nt, {
					type: r,
					payload: a
				}) => {
					switch (r) {
						case Object(tt.a)().type: {
							const r = {};
							return A()(rt.k, t => {
								a[t] || (r[t] = !1)
							}), et()({}, t, a, ue()(r) === rt.k.length ? {} : r)
						}
						case he.b:
						case Object(I.l)().type:
						case Object(I.c)().type:
							return trade_data_objectSpread(trade_data_objectSpread(trade_data_objectSpread({}, t), rt.d), rt.f);
						default:
							return t
					}
				},
				at = a(860),
				ot = a.n(at);

			function transfers_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function transfers_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? transfers_ownKeys(Object(a), !0).forEach((function(r) {
						transfers_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : transfers_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function transfers_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const it = {
				transfers: null
			};
			var st = Object(T.a)({
					[_.i]: (t, {
						payload: r
					}) => transfers_objectSpread(transfers_objectSpread({}, t), {}, {
						transfers: r
					}),
					[_.r]: (t, {
						payload: r
					}) => {
						const a = t.transfers ? [...t.transfers] : [];
						return A()(r, t => ot()(a, ({
							id: r
						}) => r === t.id)), transfers_objectSpread(transfers_objectSpread({}, t), {}, {
							transfers: [...r, ...a]
						})
					},
					[I.c]: () => transfers_objectSpread({}, it),
					[I.l]: () => transfers_objectSpread({}, it)
				}, it),
				ct = a(4),
				lt = a(55),
				Et = a(86);

			function user_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function user_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? user_ownKeys(Object(a), !0).forEach((function(r) {
						user_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : user_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function user_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const ut = {
					gaslessResetTime: null,
					user: null,
					userAlreadyExists: null,
					isUserRegistered: null,
					isUserEligibleForPromo: null,
					numGaslessDeposits: {},
					userRequiresVerification: !1,
					userRestrictions: {},
					userAffiliateApplicationStatus: null
				},
				fillMissingPreferences = t => {
					var r, a, o, i;
					const c = t.preferences ? user_objectSpread({}, t.preferences) : {};
					return null !== (a = c[r = ct.j.PopUpNotifications]) && void 0 !== a || (c[r] = !0), null !== (i = c[o = ct.j.OrderbookAnimations]) && void 0 !== i || (c[o] = !0), user_objectSpread(user_objectSpread({}, t), {}, {
						preferences: c
					})
				};
			var reducers_user = (t = ut, {
					type: r,
					payload: a
				}) => {
					switch (r) {
						case Object(I.m)().type:
							return user_objectSpread(user_objectSpread({}, t), {}, {
								userAlreadyExists: a.userAlreadyExists
							});
						case Object(lt.c)().type:
							return user_objectSpread(user_objectSpread({}, t), {}, {
								user: user_objectSpread(user_objectSpread({}, a), {}, {
									userData: fillMissingPreferences(a.userData)
								})
							});
						case Object(lt.e)().type:
							return user_objectSpread(user_objectSpread({}, t), {}, {
								userAlreadyExists: a
							});
						case Object(lt.f)().type:
							return user_objectSpread(user_objectSpread({}, t), {}, {
								userAlreadyExists: !0
							});
						case Object(lt.b)().type:
							return user_objectSpread(user_objectSpread({}, t), {}, {
								isUserRegistered: a
							});
						case Object(lt.a)().type:
							return user_objectSpread(user_objectSpread({}, t), {}, {
								isUserEligibleForPromo: a
							});
						case Object(lt.g)().type: {
							const r = a.userRestrictions;
							return user_objectSpread(user_objectSpread({}, t), {}, {
								userRestrictions: r
							})
						}
						case Object(lt.d)().type:
							return user_objectSpread(user_objectSpread({}, t), {}, {
								userAffiliateApplicationStatus: a
							});
						case W.b.SUCCESS_TYPE:
							return user_objectSpread(user_objectSpread({}, t), {}, {
								isUserRegistered: !0
							});
						case W.a.SUCCESS_TYPE: {
							var o;
							const r = L()(t.numGaslessDeposits);
							let c;
							var i;
							if (void 0 !== (null === a || void 0 === a ? void 0 : a.allowed)) c = null === a || void 0 === a || null === (i = a.limit) || void 0 === i ? void 0 : i.resetTime, Object.keys(Et.a).forEach(t => {
								r[t] = a.allowed
							});
							return user_objectSpread(user_objectSpread({}, t), {}, {
								gaslessResetTime: null !== (o = c) && void 0 !== o ? o : null,
								numGaslessDeposits: r
							})
						}
						case Object(I.c)().type:
						case Object(I.l)().type:
							return user_objectSpread({}, ut);
						default:
							return t
					}
				},
				dt = a(104);

			function wallet_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function wallet_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? wallet_ownKeys(Object(a), !0).forEach((function(r) {
						wallet_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : wallet_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function wallet_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			const _t = {
					accounts: dt.a.wallet ? [dt.a.wallet] : [],
					assetAllowances: null,
					assetBalances: null,
					walletBalances: null,
					onboardingConnectionError: null
				},
				Ot = wallet_objectSpread(wallet_objectSpread({
					walletType: null,
					networkId: dt.a.wallet ? Number("1") : null,
					isWalletDisconnected: !dt.a.wallet,
					isWalletLoaded: !!dt.a.wallet
				}, _t), {}, {
					starkKeyPair: null,
					apiKeyPair: null,
					shouldSaveKeyPairsInLocalStorage: !1
				});
			var Tt = Object(T.a)({
					[I.m]: (t, {
						payload: {
							accounts: r,
							networkId: a
						}
					}) => wallet_objectSpread(wallet_objectSpread({}, t), {}, {
						accounts: r,
						networkId: a,
						isWalletLoaded: !0
					}),
					[I.d]: (t, {
						payload: r
					}) => wallet_objectSpread(wallet_objectSpread({}, t), {}, {
						networkId: r
					}),
					[I.b]: (t, {
						payload: r
					}) => wallet_objectSpread(wallet_objectSpread({}, t), {}, {
						walletType: r.walletType,
						isWalletDisconnected: !1,
						isWalletLoaded: !!dt.a.wallet
					}),
					[I.l]: (t, {
						payload: {
							accounts: r
						}
					}) => wallet_objectSpread(wallet_objectSpread(wallet_objectSpread({}, t), _t), {}, {
						accounts: r,
						starkKeyPair: null,
						apiKeyPair: null
					}),
					[I.c]: t => wallet_objectSpread(wallet_objectSpread(wallet_objectSpread({}, t), _t), {}, {
						walletType: null,
						isWalletDisconnected: !0,
						isWalletLoaded: !1,
						starkKeyPair: null,
						apiKeyPair: null
					}),
					[I.k]: (t, {
						payload: r
					}) => wallet_objectSpread(wallet_objectSpread({}, t), {}, {
						walletBalances: r
					}),
					[I.j]: (t, {
						payload: r
					}) => wallet_objectSpread(wallet_objectSpread({}, t), {}, {
						starkKeyPair: r
					}),
					[I.e]: (t, {
						payload: r
					}) => wallet_objectSpread(wallet_objectSpread({}, t), {}, {
						apiKeyPair: r
					}),
					[I.a]: t => wallet_objectSpread(wallet_objectSpread({}, t), {}, {
						apiKeyPair: null,
						starkKeyPair: null
					}),
					[I.f]: (t, {
						payload: r
					}) => {
						var a;
						const o = null !== (a = t.assetAllowances) && void 0 !== a ? a : {};
						return o[r.asset] = r.allowance, wallet_objectSpread(wallet_objectSpread({}, t), {}, {
							assetAllowances: o
						})
					},
					[I.g]: (t, {
						payload: r
					}) => {
						var a;
						const o = null !== (a = t.assetBalances) && void 0 !== a ? a : {};
						return o[r.asset] = r.balance, wallet_objectSpread(wallet_objectSpread({}, t), {}, {
							assetBalances: o
						})
					},
					[I.i]: (t, {
						payload: r
					}) => wallet_objectSpread(wallet_objectSpread({}, t), {}, {
						shouldSaveKeyPairsInLocalStorage: r
					}),
					[I.h]: (t, {
						payload: r
					}) => wallet_objectSpread(wallet_objectSpread({}, t), {}, {
						onboardingConnectionError: r
					})
				}, Ot),
				It = a(48),
				St = a.n(It),
				pt = a(75),
				Rt = a(96),
				At = a(146),
				ft = a(168),
				bt = a(41),
				Nt = a(32),
				Ct = a(22),
				yt = a(234);

			function account_data_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}
			const isApiKeyNotFoundError = ({
				error: t
			}) => St()(null === t || void 0 === t ? void 0 : t.message, "API key not found");
			var Dt = a(450),
				mt = a.n(Dt),
				ht = a(80),
				Lt = a(827),
				gt = a(85);

			function allowanceAlert_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function allowanceAlert_asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							allowanceAlert_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							allowanceAlert_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			}
			const Pt = new(new mt.a("https://eth-mainnet.alchemyapi.io/v2/L1SIgIOzW9TRnWpcIPU7tx0EZK3NbVu_").eth.Contract)(Lt, "0xbCC7b2EC3C43eDF5652d65460E2B42EAa607CCf6"),
				vt = function() {
					var t = allowanceAlert_asyncToGenerator((function*({
						walletAddress: t
					}) {
						const r = {};
						let a = !1;
						return yield Promise.all(Object.values(ht.c).map(function() {
							var o = allowanceAlert_asyncToGenerator((function*({
								symbol: o,
								address: i,
								decimals: c
							}) {
								if ("ETH" === o) return;
								const l = yield(({
									decimals: t,
									ownerAddress: r,
									tokenAddress: a
								}) => gt.a.exchange.getERC20Allowance({
									ownerAddress: r,
									spenderAddress: "0x53773fE5ff4451c896127Dd2c91b8dE7ac51Ba2C",
									tokenAddress: a,
									decimals: t
								}))({
									decimals: c,
									ownerAddress: t,
									tokenAddress: i
								});
								r[o] = {
									allowance: l,
									tokenAddress: i
								}, "0" !== l && (a = !0)
							}));
							return function(t) {
								return o.apply(this, arguments)
							}
						}())), {
							allowances: r,
							hasAnyAllowancesSet: a
						}
					}));
					return function getAllowances(r) {
						return t.apply(this, arguments)
					}
				}(),
				wt = function() {
					var t = allowanceAlert_asyncToGenerator((function*({
						walletAddress: t
					}) {
						let r = !1;
						return !!Pt && (yield Promise.all(Object.values(ht.c).map(function() {
							var a = allowanceAlert_asyncToGenerator((function*({
								address: a
							}) {
								if ("ETH" === a) return;
								"0" !== (yield Pt.methods.pendingWithdrawals(a, t).call()) && (r = !0)
							}));
							return function(t) {
								return a.apply(this, arguments)
							}
						}())), r)
					}));
					return function getHasRecoverableFunds(r) {
						return t.apply(this, arguments)
					}
				}();
			var Mt = a(164),
				Ut = a(63);

			function analyticsMiddleware_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}
			let Gt = !0;
			var jt = a(257),
				kt = a(57),
				xt = a(366);

			function leagues_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}
			var middlewares_leagues = t => r => function() {
				var a = function leagues_asyncToGenerator(t) {
					return function() {
						var r = this,
							a = arguments;
						return new Promise((function(o, i) {
							var c = t.apply(r, a);

							function _next(t) {
								leagues_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
							}

							function _throw(t) {
								leagues_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
							}
							_next(void 0)
						}))
					}
				}((function*(a) {
					if (r(a), a.type === Object(lt.c)().type) {
						const r = t.getState(),
							a = Object(jt.f)(r),
							u = Object(jt.c)(r);
						let d, _;
						if (!a) try {
							const a = yield Nt.c.getAccountLeaderboardPnl({
								period: Nt.a.LEAGUES
							});
							t.dispatch(Object(Ie.h)({
								leaguesUserInfo: a
							}));
							const o = yield Nt.c.getAccountLeaderboardPnl({
								period: Nt.a.LEAGUES,
								startedBeforeOrAt: Object(xt.b)()
							}), i = yield Nt.c.getAccountLeaderboardPnl({
								period: Nt.a.DAILY_COMPETITION
							});
							t.dispatch(Object(Ie.g)(i)), t.dispatch(Object(Ie.h)({
								leaguesUserInfo: o,
								isPrevWeek: !0
							}));
							const c = null === a || void 0 === a ? void 0 : a.period,
								l = null === o || void 0 === o ? void 0 : o.period,
								E = null === a || void 0 === a ? void 0 : a.startedAt,
								u = null === o || void 0 === o ? void 0 : o.endsAt,
								_ = Object(kt.l)(r);
							E !== (null === _ || void 0 === _ ? void 0 : _.leaguesCurrentStartDate) && u === E && c !== l && (t.dispatch(Object(Y.c)({
								modalType: V.a.LEAGUE_OUTCOME,
								modalProps: {
									previousPeriod: l,
									newPeriod: c
								}
							})), d = E)
						} catch (E) {
							Ct.b.notify({
								error: E,
								location: Ct.a.GET_LEAGUE_SEASON_OUTCOME
							})
						}
						if (!u) try {
							var o;
							const a = Object(kt.l)(r),
								E = (new Date).setDate((new Date).getMonth() - 1),
								u = new Date(E).toISOString(),
								d = yield Nt.c.getAccountHistoricalLeaderboardPnl({
									period: Nt.a.DAILY_COMPETITION
								}), O = yield Nt.c.getAccountHistoricalLeaderboardPnl({
									period: Nt.a.LEAGUES
								}), T = null !== (o = null === a || void 0 === a ? void 0 : a.leaguesLatestPrizeRevealDate) && void 0 !== o ? o : u, I = [...d.filter(t => {
									var r;
									return ((null === t || void 0 === t ? void 0 : t.prizeWon) || (null === t || void 0 === t ? void 0 : t.hedgieWon)) && (null !== (r = null === t || void 0 === t ? void 0 : t.endsAt) && void 0 !== r ? r : u) > T
								}), ...O.filter(t => {
									var r;
									return ((null === t || void 0 === t ? void 0 : t.prizeWon) || (null === t || void 0 === t ? void 0 : t.hedgieWon)) && (null !== (r = null === t || void 0 === t ? void 0 : t.endsAt) && void 0 !== r ? r : u) > T
								})].sort((t, r) => t.endsAt && r.endsAt ? t.endsAt < r.endsAt ? 1 : t.endsAt > r.endsAt ? -1 : 0 : 0);
							var i, c, l;
							if ((null === I || void 0 === I ? void 0 : I.length) > 0) _ = (null !== (i = null === I || void 0 === I || null === (c = I[0]) || void 0 === c ? void 0 : c.endsAt) && void 0 !== i ? i : u) > T && (null === I || void 0 === I || null === (l = I[0]) || void 0 === l ? void 0 : l.endsAt);
							t.dispatch(Object(Ie.b)(I))
						} catch (E) {
							Ct.b.notify({
								error: E,
								location: Ct.a.GET_COMPETITION_PRIZES
							})
						}
						const O = {};
						if (d && (O.leaguesCurrentStartDate = d), _ && (O.leaguesLatestPrizeRevealDate = _), null !== O && void 0 !== O && O.leaguesCurrentStartDate || null !== O && void 0 !== O && O.leaguesLatestPrizeRevealDate) {
							const r = (yield Nt.c.updateUser({
								username: void 0,
								isSharingAddress: void 0,
								userData: {
									preferences: O
								}
							})).user;
							t.dispatch(Object(lt.c)(r))
						}
					}
				}));
				return function(t) {
					return a.apply(this, arguments)
				}
			}();

			function localization_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function localization_asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							localization_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							localization_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			}
			const Ft = function() {
				var t = localization_asyncToGenerator((function*({
					store: t,
					locale: r,
					isAutoDetect: o
				}) {
					t.dispatch(Object(pe.b)(!1));
					const i = yield a(1675)("./" + r);
					t.dispatch(Object(pe.a)(i.default)), o || Object(Ae.d)({
						key: Ae.a.SELECTED_LOCALE,
						value: r
					})
				}));
				return function getNewLocaleData(r) {
					return t.apply(this, arguments)
				}
			}();
			var Ht = a(588),
				Bt = a.n(Ht),
				Wt = a(602),
				Yt = a(211),
				Kt = a(147),
				Vt = a(150),
				Zt = a(314),
				zt = a(297),
				Xt = a(452),
				qt = a(82);
			const $t = ["0xa6c8b4e5155152e470dd2b13a166b504353c4f88", "0xc2201fc8dd263b014f626c4237f716693e4b951b", "0x348e98c7eee356e86ff42c4f5ebc8c39e21e95b0", "0xf5789485f28cc601ab10ed1f5a9006d759758c68", "0x7d78cce81c158c9dfd0bc6ce295c35c5063fd0c3", "0x7989c68859515fa0935041a1ae3ed648eabe3caa", "0x14a1ec6b5ea0cfd9063541a1cbb6f2ab6caf236f", "0x3f0b3d7624ee30d5dff8a8581593d4b20ed64476", "0xec948fd2e980923d530737fae2c165d0510c554b", "0x57a307512482c73c8d118c18adcd962ebc98c624", "0xbd73b17fa754b9de09cfbaddb82144cff0d0b3c8", "0x716bfcb99e8b09451b8692c767c96b871d9282e7", "0xb55408bfde37ff43b319b6d409448469d54679d7", "0x7329819b2cf0023bd2b9ebcb62923a046c33189f", "0x4a76a490b705e2e598dbb6ed94a86f4bb2d8ce3d", "0x905e3a42cb7e42161613408de471bbeac449a368", "0x3f2f3a32ab787766decaac1b18dc6052968cd553", "0x1a13f13908f67933a2b48215945fed59459df748", "0x04832a640a4c53f1cffd9fcf44f35b1154675be0", "0x28ec354e09e45c0b4fc9a52f163a3c8de3c65ce9", "0xe63584e25082cd862aa039676946a4ddbc9cf933", "0x6f4bbbbb5447b615cbb4646051e90281e00860c5", "0xda80c36745ceb86dfef570bcadf9c01861500d04", "0x1aaa6f73cc3bcfd64d541d004e28f7f10355a1a6", "0x613d95114619f0472fc5ab31a8578857acc50b7e", "0x67add8b2cd8e99b34d1b34552101f9965871c345"];
			var Qt = a(10);

			function notifications_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function notifications_asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							notifications_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							notifications_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			}

			function middlewares_notifications_ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function middlewares_notifications_objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? middlewares_notifications_ownKeys(Object(a), !0).forEach((function(r) {
						middlewares_notifications_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : middlewares_notifications_ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function middlewares_notifications_defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}
			let Jt = {};
			var er = a(884),
				tr = a.n(er),
				rr = a(107),
				nr = a(12),
				ar = a(233);

			function onboarding_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function onboarding_asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							onboarding_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							onboarding_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			}
			const or = Number("1");
			const removeKeyForWallet = ({
					walletAddress: t,
					localStorageKey: r
				}) => {
					const a = Object(Ae.b)({
						key: r
					});
					Object(Ae.d)({
						key: r,
						value: tr()(a, (r, a) => a.toLowerCase() === t.toLowerCase())
					})
				},
				startOnboardingIfNeeded = ({
					store: t
				}) => {
					const r = t.getState(),
						a = Object(bt.l)(r),
						o = Object(bt.a)(r),
						i = Object(rr.c)(r),
						c = Object(rr.b)(r);
					if (!Object(bt.f)(r) && (a && !i || o && !c)) {
						const a = Object(bt.m)(r);
						i || (t.dispatch(Object(I.j)(null)), removeKeyForWallet({
							walletAddress: a,
							key: Ae.a.STARK_KEY_PAIRS
						})), c || (t.dispatch(Object(I.e)(null)), removeKeyForWallet({
							walletAddress: a,
							key: Ae.a.API_KEY_PAIRS
						})), t.dispatch(Object(Y.c)({
							modalType: V.a.ONBOARDING
						}))
					}
				},
				getStoredKeysForWallet = ({
					walletAddress: t
				}) => {
					const r = Object(Ae.b)({
							key: Ae.a.STARK_KEY_PAIRS
						}),
						a = Object(Ae.b)({
							key: Ae.a.API_KEY_PAIRS
						});
					return t ? {
						starkKeyPair: le()(r, ({
							walletAddress: r
						}) => r.toLowerCase() === t.toLowerCase()),
						apiKeyPair: le()(a, ({
							walletAddress: r
						}) => r && r.toLowerCase() === t.toLowerCase())
					} : {}
				},
				ir = function() {
					var t = onboarding_asyncToGenerator((function*({
						store: t,
						starkKeyPair: r,
						walletAddress: a
					}) {
						if (y()(r, "walletAddress", "").toLowerCase() === a.toLowerCase()) try {
							(yield gt.a.exchange.getEthKey({
								starkKey: r.publicKey
							})) ? t.dispatch(Object(lt.b)(!0)): t.dispatch(Object(lt.b)(!1))
						} catch (o) {
							Ct.b.notify({
								error: o,
								location: Ct.a.CHECK_REGISTRATION
							})
						}
					}));
					return function checkIsUserRegistered(r) {
						return t.apply(this, arguments)
					}
				}();

			function poll_deposit_withdraw_data_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function poll_deposit_withdraw_data_asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							poll_deposit_withdraw_data_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							poll_deposit_withdraw_data_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			}
			const sr = Number("900000"),
				cr = Number("20000");
			let lr, Er;
			const ur = function() {
					var t = poll_deposit_withdraw_data_asyncToGenerator((function*(t) {
						lr && stopPollingPendingDeposits();
						const r = t.getState(),
							a = Object(Yt.c)(r);
						let o = !1;
						try {
							yield Promise.all((null !== a && void 0 !== a ? a : []).map(function() {
								var r = poll_deposit_withdraw_data_asyncToGenerator((function*({
									transactionHash: r,
									confirmationBlockNumber: a
								}) {
									if (a) o = !0;
									else {
										const a = yield Nt.c.getTransactionByHash({
											transactionHash: r
										});
										null !== a && void 0 !== a && a.blockNumber && (t.dispatch(Object(B.e)({
											transactionHash: r,
											updatedData: {
												confirmationBlockNumber: a.blockNumber
											}
										})), o = !0)
									}
								}));
								return function(t) {
									return r.apply(this, arguments)
								}
							}()))
						} catch (i) {}
						if (o) {
							const r = yield Nt.c.getBlockNumber();
							r && t.dispatch(Object(B.f)(r))
						}
						lr = setTimeout(() => ur(t), cr)
					}));
					return function pollPendingDeposits(r) {
						return t.apply(this, arguments)
					}
				}(),
				stopPollingPendingDeposits = () => {
					lr && (clearTimeout(lr), lr = null)
				},
				dr = function() {
					var t = poll_deposit_withdraw_data_asyncToGenerator((function*(t) {
						Er && stopPollingAvailableWithdraw();
						const r = t.getState(),
							a = Object(bt.l)(r);
						if (a) {
							try {
								const r = yield gt.a.exchange.getWithdrawalBalance({
									starkKey: a.publicKey
								});
								t.dispatch(Object(B.d)(r))
							} catch (o) {
								Ct.b.notify({
									error: o,
									location: Ct.a.POLL_SLOW_WITHDRAW
								})
							}
							Er = setTimeout(() => dr(t), sr)
						}
					}));
					return function pollAvailableWithdraw(r) {
						return t.apply(this, arguments)
					}
				}(),
				stopPollingAvailableWithdraw = () => {
					Er && (clearTimeout(Er), Er = null)
				};
			var _r = a(28),
				Or = a(58),
				Tr = a(438);

			function poll_historical_funding_rates_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function poll_historical_funding_rates_asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							poll_historical_funding_rates_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							poll_historical_funding_rates_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			}
			let Ir;
			const Sr = parseInt("60000", 10);
			const pr = function() {
					var t = poll_historical_funding_rates_asyncToGenerator((function*(t) {
						const r = t.getState(),
							a = (Object(Or.b)(r) || {}).market;
						a && checkAndFetchFundingRateHistory({
							store: t,
							market: a
						}), Ir = setTimeout(() => pr(t), Sr)
					}));
					return function pollFundingData(r) {
						return t.apply(this, arguments)
					}
				}(),
				stopPollingFundingData = () => {
					clearTimeout(Ir), Ir = null
				},
				checkAndFetchFundingRateHistory = ({
					store: t,
					market: r
				}) => {
					const a = t.getState(),
						o = Object(Tr.c)(a),
						i = Object(Tr.a)({
							allFundingData: o,
							market: r
						});
					if (!ue()(i)) return void Rr({
						store: t,
						market: r
					});
					Math.abs(te.DateTime.fromMillis(Object(Tr.b)({
						allFundingData: o,
						market: r
					})).diffNow("milliseconds").milliseconds) >= Sr && Rr({
						store: t,
						market: r
					})
				},
				Rr = function() {
					var t = poll_historical_funding_rates_asyncToGenerator((function*({
						store: t,
						market: r
					}) {
						try {
							yield t.dispatch(ie({
								market: r
							}))
						} catch (a) {
							Ct.b.notify({
								error: a,
								location: Ct.a.POLL_HISTORICAL_FUNDING_DATA
							})
						}
					}));
					return function callFetchFundingRateHistory(r) {
						return t.apply(this, arguments)
					}
				}();

			function tradingRewards_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function tradingRewards_asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							tradingRewards_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							tradingRewards_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			}
			const Ar = function() {
				var t = tradingRewards_asyncToGenerator((function*() {
					try {
						const t = yield Nt.c.getTradingRewardsData();
						return {
							lastEpochRewards: yield Nt.c.getTradingRewardsData({
								epoch: (null === t || void 0 === t ? void 0 : t.epoch) - 1
							}),
							latestEpochRewards: t
						}
					} catch (t) {
						return Ct.b.notify({
							error: t,
							location: Ct.a.GET_REWARDS_DATA
						}), {}
					}
				}));
				return function requestTradingRewardsData() {
					return t.apply(this, arguments)
				}
			}();
			var fr = a(885),
				br = a(271),
				Nr = a(358);

			function wallet_connection_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}
			const Cr = "ping",
				yr = "subscribe",
				Dr = "unsubscribe",
				mr = "subscribed",
				hr = "error",
				Lr = "channel_data",
				gr = "channel_batch_data",
				Pr = "pong",
				vr = "v3_accounts",
				wr = "v3_orderbook",
				Mr = "v3_trades",
				Ur = "v3_markets";

			function websocket_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}
			let Gr, jr, kr, xr, Fr, Hr, Br = !1,
				Wr = !1;
			const Yr = window && window.WebSocket;
			const pollInitialize = () => {
					Gr && Gr.readyState !== Yr.CLOSING && Gr.readyState !== Yr.CLOSED || (initializeWebsocket(xr), setTimeout(pollInitialize, 2e3)), Gr && Gr.readyState === Yr.CONNECTING && setTimeout(pollInitialize, 2e3)
				},
				pollSubscribeAccount = () => {
					const t = Object(bt.a)(xr.getState());
					if (Gr && Gr.readyState === Yr.OPEN && t) {
						if (!Br) {
							const r = Nt.c.getWebsocketSignatureAndTimestamp(),
								a = r.signature,
								o = r.timestamp;
							Gr.send(JSON.stringify({
								type: yr,
								channel: vr,
								accountNumber: "0",
								timestamp: o,
								signature: a,
								passphrase: t.passphrase,
								apiKey: t.key
							})), Br = !0
						}
					} else Hr = setTimeout(pollSubscribeAccount, 500)
				},
				manageOrderbookTradeSubscriptions = () => {
					if (Gr && Gr.readyState === Yr.OPEN) {
						const t = xr.getState(),
							r = Object(Or.b)(t);
						if (r) {
							const t = r.market;
							Fr !== t && (Fr && (Gr.send(JSON.stringify({
								type: Dr,
								channel: wr,
								id: Fr
							})), Gr.send(JSON.stringify({
								type: Dr,
								channel: Mr,
								id: Fr
							}))), Gr.send(JSON.stringify({
								type: yr,
								channel: wr,
								id: t,
								batched: !0
							})), Gr.send(JSON.stringify({
								type: yr,
								channel: Mr,
								id: t
							})), Fr = t)
						}
					}
				},
				initializeWebsocket = t => {
					!Gr && Yr && (Gr = new Yr(ae.a ? "wss://dydx-api.consenlabs.com/v3/ws" : "wss://api.dydx.exchange/v3/ws"), Gr.onopen = () => {
						if (Gr && Gr.readyState === Yr.OPEN) {
							Wr = !1, Gr.send(JSON.stringify({
								type: yr,
								channel: Ur
							}));
							const r = t.getState();
							Object(rr.a)(r) && pollSubscribeAccount(), manageOrderbookTradeSubscriptions(), pingPong(), setDisconnectTimeout()
						}
					}, Gr.onclose = () => resetWebSocket(), Gr.onerror = () => resetWebSocket(), Gr.onmessage = r => {
						let a;
						try {
							a = JSON.parse(r.data)
						} catch (o) {
							Ct.b.notify({
								error: new Error("Failed to parse websocket message"),
								location: Ct.a.WEBSOCKET,
								metaData: {
									message: r
								}
							})
						}
						if (a.type === Pr) clearTimeout(jr), setDisconnectTimeout();
						else if (a.type === hr) {
							const r = t.getState(),
								o = (Object(bt.a)(r) || {}).legacySigning;
							Ct.b.notify({
								error: new Error(a.message),
								location: Ct.a.WEBSOCKET,
								metaData: {
									legacySigning: o,
									message: a
								}
							})
						} else handleIncomingData(t, a)
					})
				},
				handleIncomingData = (t, r) => {
					switch (r.channel) {
						case Ur:
							switch (r.type) {
								case mr:
									t.dispatch(Object(_.d)(r));
									break;
								case Lr:
									t.dispatch(Object(_.n)(r))
							}
							break;
						case vr:
							if (r.type === mr) t.dispatch(Object(_.a)(y()(r, "contents.account"))), t.dispatch(Object(_.g)(y()(r, "contents.orders"))), t.dispatch(Object(_.i)(y()(r, "contents.transfers"))), t.dispatch(Object(_.b)(y()(r, "contents.fundingPayments")));
							else if (r.type === Lr) {
								const a = y()(r, "contents.accounts[0]");
								a && t.dispatch(Object(_.j)(a));
								const o = y()(r, "contents.orders");
								N()(o) || t.dispatch(Object(_.o)(o));
								const i = y()(r, "contents.transfers");
								N()(i) || t.dispatch(Object(_.r)(i));
								const c = y()(r, "contents.fills");
								N()(c) || t.dispatch(Object(_.l)(c));
								const l = y()(r, "contents.positions");
								N()(l) || t.dispatch(Object(_.p)(l));
								const E = y()(r, "contents.fundingPayments");
								N()(E) || t.dispatch(Object(_.m)(E))
							}
							break;
						case wr:
							switch (r.type) {
								case mr:
									t.dispatch(Object(_.f)(r)), Fr === r.id && t.dispatch(Object(_.e)(!0));
									break;
								case gr:
									t.dispatch(Object(_.k)(r))
							}
							break;
						case Mr:
							switch (r.type) {
								case mr:
									t.dispatch(Object(_.h)(r));
									break;
								case Lr:
									t.dispatch(Object(_.q)(r))
							}
					}
				},
				resetWebSocket = () => {
					Gr && Gr.close(), jr && clearTimeout(jr), Gr = null, jr = null, Fr = null, Br = !1, kr && clearTimeout(kr), kr = null, Wr || (Wr = !0, pollInitialize())
				},
				setDisconnectTimeout = () => {
					jr = setTimeout(() => {
						resetWebSocket()
					}, 5e3)
				},
				pingPong = () => {
					Gr && Gr.readyState === Yr.OPEN && (Gr.send(JSON.stringify({
						type: Cr
					})), kr = setTimeout(pingPong, 2e3))
				},
				Kr = Object(E.a)(),
				Vr = [Object(i.a)(Kr), Object(l.createAsyncMiddleware)(), t => r => function() {
					var a = allowanceAlert_asyncToGenerator((function*(a) {
						r(a);
						const o = a.type,
							i = a.payload;
						if (o === Object(I.m)().type) {
							const r = i.accounts,
								a = null === r || void 0 === r ? void 0 : r[0],
								o = yield vt({
									walletAddress: a
								}), c = o.allowances, l = o.hasAnyAllowancesSet, E = dt.a.checkexploit, u = yield wt({
									walletAddress: a
								});
							(l || u || E) && (t.dispatch(Object(Y.a)()), t.dispatch(Object(Y.c)({
								modalType: V.a.ALLOWANCE_ALERT,
								modalProps: {
									allowances: c,
									hasRecoverableFunds: u,
									walletAddress: a,
									preventClose: !0
								}
							})))
						}
					}));
					return function(t) {
						return a.apply(this, arguments)
					}
				}(), t => r => function() {
					var a = function wallet_connection_asyncToGenerator(t) {
						return function() {
							var r = this,
								a = arguments;
							return new Promise((function(o, i) {
								var c = t.apply(r, a);

								function _next(t) {
									wallet_connection_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
								}

								function _throw(t) {
									wallet_connection_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
								}
								_next(void 0)
							}))
						}
					}((function*(a) {
						r(a);
						const o = a.type,
							i = a.payload;
						if (o === Object(I.b)().type) {
							const r = i.walletType,
								a = i.options,
								o = i.autoReconnect,
								l = Object(br.a)({
									walletType: r,
									options: a
								}),
								E = l.provider,
								u = l.isWalletConnect,
								d = l.isWalletLink;
							if (!E && r !== nr.c.TestWallet) return;
							if (u) try {
								yield E.enable()
							} catch (c) {
								return void(St()(c.message, "User closed WalletConnect modal") || St()(c.message, "User closed modal") ? t.dispatch(Object(I.c)({
									walletType: r
								})) : Ct.b.notify({
									error: new Error("Unknown WalletConnect Error: " + c.message),
									location: Ct.a.WALLET_CONNECTION
								}))
							} else if (r !== nr.c.MetaMask || o) {
								if (r === nr.c.CoinbaseWallet) {
									const a = Mt.a.isTablet.matches;
									if (d && a) window.open("https://wallet.coinbase.com/#signup", "_blank");
									else try {
										yield E.enable()
									} catch (c) {
										return void(St()(c.message, "User denied account authorization") ? t.dispatch(Object(I.c)({
											walletType: r
										})) : Ct.b.notify({
											error: new Error("Unknown Coinbase Wallet Error: " + c.message),
											location: Ct.a.WALLET_CONNECTION
										}))
									}
								} else if (r === nr.c.ImToken) try {
									yield E.enable()
								} catch (c) {
									return void(St()(c.message, "User rejected the request") ? t.dispatch(Object(I.c)({
										walletType: r
									})) : Ct.b.notify({
										error: new Error("Unknown imToken Error: " + c.message),
										location: Ct.a.WALLET_CONNECTION
									}))
								} else if (r === nr.c.TokenPocket) try {
									yield E.enable()
								} catch (c) {
									return void(St()(c.message, "User rejected the request") ? t.dispatch(Object(I.c)({
										walletType: r
									})) : Ct.b.notify({
										error: new Error("Unknown TokenPocket Error: " + c.message),
										location: Ct.a.WALLET_CONNECTION
									}))
								}
							} else try {
								yield E.enable()
							} catch (c) {
								return void(St()(c.message, "User rejected the request") ? t.dispatch(Object(I.c)({
									walletType: r
								})) : Ct.b.notify({
									error: new Error("Unknown Metamask Error: " + c.message),
									location: Ct.a.WALLET_CONNECTION
								}))
							}
							null !== E && void 0 !== E && E.on && (E.on("accountsChanged", r => t.dispatch(Object(I.l)({
								accounts: r
							}))), E.on("networkChanged", r => t.dispatch(Object(I.d)(Number(r)))));
							const _ = Object(br.d)({
								provider: E,
								walletType: r
							});
							t.dispatch(Object(At.a)({
								provider: _,
								walletType: r,
								options: a
							}));
							const O = new fr.Biconomy(E, {
								walletProvider: E,
								apiKey: "EW-uP9RXf.0914ee5b-82ea-4739-8054-df397008bcd6",
								strictMode: !1
							});
							return Nr.a.setProvider(O), void ar.a.setProvider(O, Number("1"))
						}
						if (o === Object(I.c)().type) {
							Object(Ae.c)({
								key: Ae.a.LAST_WALLET_USED
							});
							if ((i || {}).walletType === nr.c.CoinbaseWallet) yield br.e.disconnect();
							else {
								const t = Object(br.b)();
								t && t.disconnect && (t.qrcode = !1, yield t.disconnect())
							}
						}
					}));
					return function(t) {
						return a.apply(this, arguments)
					}
				}(), middlewares_leagues, t => r => function() {
					var a = localization_asyncToGenerator((function*(a) {
						const o = a.type;
						if (o === Object(Be.a)().type) {
							var i;
							const r = Object(Ae.b)({
								key: Ae.a.SELECTED_LOCALE
							});
							if (r) t.dispatch(Object(pe.c)({
								locale: r
							}));
							else if (null !== (i = window.navigator) && void 0 !== i && i.language) {
								const r = window.navigator.language.split("-")[0].toLowerCase(),
									a = Re.b[r];
								a && t.dispatch(Object(pe.c)({
									locale: a,
									isAutoDetect: !0
								}))
							}
						}
						if (o === Object(pe.c)().type) {
							const r = a.payload,
								o = r.locale,
								i = r.isAutoDetect;
							Ft({
								store: t,
								locale: o,
								isAutoDetect: i
							})
						}
						r(a)
					}));
					return function(t) {
						return a.apply(this, arguments)
					}
				}(), t => r => function() {
					var a = onboarding_asyncToGenerator((function*(a) {
						r(a);
						const o = a.type,
							i = a.payload;
						switch (o) {
							case Object(At.a)().type: {
								var c;
								const r = i.provider,
									a = i.walletType,
									o = i.options;
								let E, u;
								if (r && Nt.c.setCurrentProvider(r), yield Nt.c.initializeClient({
										provider: r
									}), dt.a.wallet) E = or, u = [dt.a.wallet];
								else {
									const t = yield Nt.c.getNetworkIdAndAccounts();
									E = t.networkId, u = t.accounts
								}
								const d = a === nr.c.Ledger ? o.walletAddress : u[0];
								if (!d) {
									t.dispatch(Object(I.c)({
										walletType: a
									}));
									break
								}
								const _ = getStoredKeysForWallet({
										walletAddress: d
									}),
									O = _.starkKeyPair,
									T = _.apiKeyPair;
								let S;
								O && T && Nt.c.initializeClient({
									provider: r,
									apiKeyPair: T,
									starkKeyPair: O
								}), O && t.dispatch(Object(I.j)(O)), T && t.dispatch(Object(I.e)(T));
								try {
									S = yield Nt.c.getDoesUserExist({
										walletAddress: d
									})
								} catch (l) {
									Ct.b.notify({
										error: l,
										location: Ct.a.CHECK_USER_EXISTS
									})
								}
								gt.a.setProvider(r || Nt.c.getCurrentProvider(), or), gt.a.contracts.setDefaultAccount(d), ar.a.contracts.setDefaultAccount(d), yield ir({
									store: t,
									starkKeyPair: O,
									walletAddress: d
								}), Object(Ae.d)({
									key: Ae.a.LAST_WALLET_USED,
									value: a
								}), t.dispatch(Object(I.m)({
									accounts: a === nr.c.Ledger ? [d] : u,
									networkId: E,
									userAlreadyExists: Boolean(null === (c = S) || void 0 === c ? void 0 : c.exists)
								})), startOnboardingIfNeeded({
									store: t
								}), T && O && t.dispatch(Object(At.b)());
								break
							}
							case Object(I.l)().type: {
								const r = i.accounts[0],
									a = t.getState(),
									o = Object(Kt.a)(a),
									c = null === o || void 0 === o ? void 0 : o.type;
								if (c && c !== V.a.ONBOARDING && t.dispatch(Object(Y.a)({
										modalType: c
									})), !r) {
									const r = Object(bt.o)(a);
									t.dispatch(Object(I.c)({
										walletType: r
									}));
									break
								}
								const E = getStoredKeysForWallet({
										walletAddress: r
									}),
									u = E.starkKeyPair,
									d = E.apiKeyPair;
								t.dispatch(Object(Y.a)({
									modalType: V.a.ONBOARDING
								}));
								try {
									const a = yield Nt.c.getDoesUserExist({
										walletAddress: r
									});
									t.dispatch(Object(lt.e)(a.exists))
								} catch (l) {
									St()(l.message, "Cannot read property") || Ct.b.notify({
										error: l,
										location: Ct.a.CHECK_USER_EXISTS
									})
								}
								if (yield ir({
										store: t,
										starkKeyPair: u,
										walletAddress: r
									}), u && d) yield ir({
									store: t,
									starkKeyPair: u,
									walletAddress: r
								}), Nt.c.initializeClient({
									apiKeyPair: d,
									starkKeyPair: u
								}), t.dispatch(Object(At.b)());
								else {
									const r = Object(bt.f)(a);
									Nt.c.clearClientKeys(), r || t.dispatch(Object(Y.c)({
										modalType: V.a.ONBOARDING
									}))
								}
								u && t.dispatch(Object(I.j)(u)), d && t.dispatch(Object(I.e)(d)), gt.a.contracts.setDefaultAccount(r), ar.a.contracts.setDefaultAccount(r);
								break
							}
							case Object(I.a)().type: {
								const r = t.getState(),
									a = Object(bt.m)(r);
								Nt.c.clearClientKeys(), a && (removeKeyForWallet({
									walletAddress: a,
									localStorageKey: Ae.a.STARK_KEY_PAIRS
								}), removeKeyForWallet({
									walletAddress: a,
									localStorageKey: Ae.a.API_KEY_PAIRS
								}));
								break
							}
							case Object(I.c)().type: {
								const t = (i || {}).walletAddress;
								Nt.c.resetClient(), t && (removeKeyForWallet({
									walletAddress: t,
									localStorageKey: Ae.a.STARK_KEY_PAIRS
								}), removeKeyForWallet({
									walletAddress: t,
									localStorageKey: Ae.a.API_KEY_PAIRS
								}));
								break
							}
						}
					}));
					return function(t) {
						return a.apply(this, arguments)
					}
				}(), t => r => function() {
					var a = function account_data_asyncToGenerator(t) {
						return function() {
							var r = this,
								a = arguments;
							return new Promise((function(o, i) {
								var c = t.apply(r, a);

								function _next(t) {
									account_data_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
								}

								function _throw(t) {
									account_data_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
								}
								_next(void 0)
							}))
						}
					}((function*(a) {
						if (r(a), a.type === Object(At.b)().type) {
							var o;
							let r;
							try {
								const r = yield Nt.c.getFills({});
								t.dispatch(Object(X.a)(y()(r, "fills", [])))
							} catch (l) {
								r = Object(yt.b)({
									error: l
								}), isApiKeyNotFoundError({
									error: l
								}) || Ct.b.notify({
									error: l,
									location: Ct.a.GET_FILLS
								})
							}
							try {
								var i;
								const r = yield Nt.c.getUser(), o = y()(r, "user", {}), c = null === a || void 0 === a || null === (i = a.payload) || void 0 === i ? void 0 : i.hasJustFinishedOnboarding;
								o.hasJustFinishedOnboarding = null !== c && void 0 !== c && c, t.dispatch(Object(lt.c)(o));
								const l = yield Nt.c.getUserRestrictions();
								t.dispatch(Object(lt.g)({
									userRestrictions: l
								}));
								const E = yield Nt.c.getSelfServiceAffiliateStatus();
								t.dispatch(Object(lt.d)(E));
								if (!y()(o, "userData", {}).walletType) {
									const r = t.getState(),
										a = Object(bt.o)(r),
										o = (yield Nt.c.updateUser({
											userData: {
												walletType: a
											}
										})).user;
									t.dispatch(Object(lt.c)(o))
								}
							} catch (l) {
								var c;
								r = Object(yt.b)({
									error: l
								}), null !== l && void 0 !== l && null !== (c = l.message) && void 0 !== c && c.includes("Timestamp must be") && Object(pt.b)(({
									closeToast: t
								}) => Object(Rt.o)({
									closeToast: t
								})), isApiKeyNotFoundError({
									error: l
								}) || Ct.b.notify({
									error: l,
									location: Ct.a.GET_USER
								})
							}
							t.dispatch(Object(I.h)(r)), r && (null === (o = r) || void 0 === o ? void 0 : o.key) === Re.a.KEY_RECOVERY_FAILED && t.dispatch(Object(I.a)())
						}
						if (a.type === Object(_.a)().type) try {
							const r = t.getState(),
								a = Object(ft.a)(r),
								o = yield fetch(`${ae.a?"https://dydx-api.consenlabs.com":"https://api.dydx.exchange"}/v3/internal/account-exception?${ne.a.stringify({id:a.id})}`), i = (yield o.json()).exception;
							t.dispatch(Object(lt.a)(i))
						} catch (l) {
							Ct.b.notify({
								error: l,
								location: Ct.a.GET_USER_PROMO_ELIGIBILITY
							})
						}
					}));
					return function(t) {
						return a.apply(this, arguments)
					}
				}(), t => r => function() {
					var a = function websocket_asyncToGenerator(t) {
						return function() {
							var r = this,
								a = arguments;
							return new Promise((function(o, i) {
								var c = t.apply(r, a);

								function _next(t) {
									websocket_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
								}

								function _throw(t) {
									websocket_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
								}
								_next(void 0)
							}))
						}
					}((function*(a) {
						const o = a.type;
						if (o === Object(Be.b)().type && (xr = t, Wr = !0, pollInitialize()), [Object(I.a)().type, Object(I.c)().type, Object(I.l)().type].includes(o)) {
							if (Hr && (clearTimeout(Hr), Hr = null), Gr && Gr.readyState === Yr.OPEN) {
								const r = t.getState(),
									a = Object(ft.a)(r);
								a && Gr.send(JSON.stringify({
									type: Dr,
									channel: vr,
									id: a.id
								}))
							}
							Br = !1
						}
						r(a), o !== Object(At.b)().type ? o === he.b && manageOrderbookTradeSubscriptions() : pollSubscribeAccount()
					}));
					return function(t) {
						return a.apply(this, arguments)
					}
				}(), () => t => r => {
					t(r);
					switch (r.type) {
						case he.b: {
							const t = (null === r || void 0 === r ? void 0 : r.payload.location).pathname,
								a = "1564787350",
								o = "dydx";
							if (a && o) {
								const r = document.querySelector('meta[name="apple-itunes-app"]');
								r && (r.content = `app-id=${a}, app-argument=${o}://${t}`)
							}
							break
						}
					}
				}, () => t => function() {
					var r = function analyticsMiddleware_asyncToGenerator(t) {
						return function() {
							var r = this,
								a = arguments;
							return new Promise((function(o, i) {
								var c = t.apply(r, a);

								function _next(t) {
									analyticsMiddleware_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
								}

								function _throw(t) {
									analyticsMiddleware_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
								}
								_next(void 0)
							}))
						}
					}((function*(r) {
						t(r);
						const a = r.type,
							o = r.payload,
							i = void 0 === o ? {} : o;
						switch (a) {
							case Object(Be.a)().type:
								Ut.c.identifyBreakpoint(), Object.values(Mt.b).forEach(t => {
									t.addEventListener ? t.addEventListener("change", () => Ut.c.identifyBreakpoint()) : t.addListener && t.addListener(() => Ut.c.identifyBreakpoint())
								});
								break;
							case Object(pe.c)().type: {
								const t = i.locale;
								Ut.c.identifyUserProperty(Ut.b.Locale, t);
								break
							}
							case he.b: {
								const t = i.location,
									r = t.search,
									a = t.pathname,
									o = ne.a.parse(r);
								Ut.c.trackEvent(Ut.a.PageView, {
									path: a,
									isInitialPageView: Gt,
									origin: o["trk-origin"]
								}), Gt = !1;
								break
							}
							case Object(I.b)().type: {
								const t = i.walletType,
									r = i.autoReconnect;
								Ut.c.identifyUserProperty(Ut.b.WalletType, t), Ut.c.trackEvent(Ut.a.OnboardingConnectWallet, {
									selectedWalletType: t,
									autoReconnect: Boolean(r)
								}), Object(Ut.d)("connect_wallet");
								break
							}
							case Object(I.c)().type: {
								const t = i.walletType;
								Ut.c.trackEvent(Ut.a.OnboardingDisconnectWallet, {
									selectedWalletType: t
								});
								break
							}
							case Object(At.a)().type:
								Ut.c.trackEvent(Ut.a.OnboardingInitializeClient);
								break;
							case Object(I.m)().type: {
								const t = i.accounts,
									r = i.userAlreadyExists,
									a = null === t || void 0 === t ? void 0 : t[0];
								Ut.c.setUserId(a), Ut.c.trackEvent(Ut.a.OnboardingWalletLoaded, {
									userAlreadyExists: r
								});
								break
							}
							case Object(I.l)().type: {
								const t = i.accounts,
									r = null === t || void 0 === t ? void 0 : t[0];
								Ut.c.setUserId(r);
								break
							}
							case Object(At.b)().type:
								Ut.c.trackEvent(Ut.a.OnboardingKeysSuccessfullyGenerated), Object(Ut.d)("keys_successfully_generated");
								break;
							case Object(Y.c)().type: {
								const t = i.modalType;
								Ut.c.trackEvent(Ut.a.ModalOpenModal, {
									modalType: t
								});
								break
							}
							case Object(Y.a)().type: {
								const t = i.modalType;
								Ut.c.trackEvent(Ut.a.ModalCloseModal, {
									modalType: t
								});
								break
							}
							case Object(Y.d)().type: {
								const t = i.modalType;
								Ut.c.trackEvent(Ut.a.ModalOpenModal, {
									modalType: t
								});
								break
							}
							case Object(Y.b)().type: {
								const t = i.modalType;
								Ut.c.trackEvent(Ut.a.ModalCloseModal, {
									modalType: t
								});
								break
							}
						}
					}));
					return function(t) {
						return r.apply(this, arguments)
					}
				}(), t => r => function() {
					var a = poll_deposit_withdraw_data_asyncToGenerator((function*(a) {
						r(a);
						const o = a.type;
						[W.b.SUCCESS_TYPE].includes(o) && (stopPollingPendingDeposits(), ur(t)), o !== Object(lt.c)().type || Er || dr(t), [Object(I.c)().type, Object(I.l)().type].includes(o) && (stopPollingAvailableWithdraw(), stopPollingPendingDeposits())
					}));
					return function(t) {
						return a.apply(this, arguments)
					}
				}(), t => r => function() {
					var a = notifications_asyncToGenerator((function*(a) {
						var o;
						const i = a.type,
							c = a.payload,
							l = a.meta;
						switch (i) {
							case Object(lt.c)().type: {
								var E;
								if (null !== (E = c.userData) && void 0 !== E && E.preferences) {
									var u, d, O;
									const r = c.email,
										a = c.ethereumAddress,
										o = c.isEmailVerified,
										i = c.userData,
										l = c.hasJustFinishedOnboarding,
										E = null !== (u = null === i || void 0 === i ? void 0 : i.notifications) && void 0 !== u ? u : {},
										_ = null !== (d = null === i || void 0 === i || null === (O = i.preferences) || void 0 === O ? void 0 : O[ct.j.OneTimeNotifications]) && void 0 !== d ? d : [],
										T = Object.values(E).some(({
											email: t
										}) => t);
									if (!(r && T && !o || !1) || l || Jt[Pe.b.VERIFY_EMAIL]) T || _.includes(Pe.b.EMAIL_AVAILABLE_REMINDER) || Jt[Pe.b.EMAIL_AVAILABLE_REMINDER] || Object(pt.b)(({
										closeToast: r
									}) => (Jt[Pe.b.EMAIL_AVAILABLE_REMINDER] = {
										closeToast: r
									}, Object(Rt.e)({
										closeToast: function() {
											var a = notifications_asyncToGenerator((function*() {
												var a, o;
												r();
												const i = t.getState(),
													c = null !== (a = null === (o = Object(kt.l)(i)) || void 0 === o ? void 0 : o[ct.j.OneTimeNotifications]) && void 0 !== a ? a : _,
													l = (yield Nt.c.updateUser({
														userData: {
															preferences: {
																oneTimeNotifications: [...c, Pe.b.EMAIL_AVAILABLE_REMINDER]
															}
														}
													})).user;
												t.dispatch(Object(lt.c)(l))
											}));
											return function closeToast() {
												return a.apply(this, arguments)
											}
										}()
									})));
									else {
										const r = {
											id: Pe.d.VERIFY_EMAIL,
											type: Pe.b.VERIFY_EMAIL
										};
										t.dispatch(Object(ge.a)(r)), Object(pt.b)(({
											closeToast: t
										}) => (Jt[Pe.b.VERIFY_EMAIL] = {
											closeToast: t
										}, Object(Rt.q)({
											closeToast: t,
											notification: r
										})))
									}
									_.includes(Pe.b.WASH_TRADE_WARNING) || Jt[Pe.b.WASH_TRADE_WARNING] || !$t.includes(a) || Object(pt.b)(({
										closeToast: r
									}) => (Jt[Pe.b.WASH_TRADE_WARNING] = {
										closeToast: r
									}, Object(Rt.p)({
										closeToast: function() {
											var a = notifications_asyncToGenerator((function*() {
												var a, o;
												r();
												const i = t.getState(),
													c = null !== (a = null === (o = Object(kt.l)(i)) || void 0 === o ? void 0 : o[ct.j.OneTimeNotifications]) && void 0 !== a ? a : _,
													l = (yield Nt.c.updateUser({
														userData: {
															preferences: {
																oneTimeNotifications: [...c, Pe.b.WASH_TRADE_WARNING]
															}
														}
													})).user;
												t.dispatch(Object(lt.c)(l))
											}));
											return function closeToast() {
												return a.apply(this, arguments)
											}
										}()
									})))
								}
								const r = c.makerVolume30D,
									a = c.takerVolume30D;
								Object(Ae.b)({
									key: Ae.a.SEEN_SURVEY_1
								}) || !Object(Qt.b)(r).plus(a).gt("100000") || Jt[Pe.b.SURVEY_100K_MAKER_TAKER] || Object(pt.b)(({
									closeToast: t
								}) => (Jt[Pe.b.SURVEY_100K_MAKER_TAKER] = {
									closeToast: t
								}, Object(Rt.n)({
									closeToast: () => {
										delete Jt[Pe.b.SURVEY_100K_MAKER_TAKER], Object(Ae.d)({
											key: Ae.a.SEEN_SURVEY_1,
											value: !0
										}), t()
									}
								})));
								break
							}
							case W.b.SUCCESS_TYPE: {
								const r = l.amount,
									a = l.asset,
									o = l.resp.transactionHash;
								t.dispatch(Object(ge.a)({
									id: o,
									type: Pe.b.DEPOSIT_PENDING,
									amount: Object(Qt.b)(r).toFormat(qt.f),
									asset: a,
									transactionHash: o,
									confirmations: 0
								})), Object(pt.b)(({
									closeToast: t
								}) => (Jt[o] = {
									closeToast: t
								}, Object(Rt.c)({
									closeToast: () => {
										delete Jt[o], t()
									},
									transactionHash: o
								})));
								break
							}
							case Object(Wt.a)().type: {
								const r = c.withdrawal,
									a = r.id,
									o = r.creditAmount,
									i = {
										id: a,
										type: Pe.b.FAST_WITHDRAW_PENDING,
										amount: o
									};
								t.dispatch(Object(ge.a)(i)), Object(pt.b)(({
									closeToast: t
								}) => (Jt[a] = {
									closeToast: t
								}, Object(Rt.g)({
									autoClose: Pe.a,
									closeToast: t,
									notification: i
								})));
								break
							}
							case Object(B.f)().type: {
								const r = t.getState(),
									a = Object(Vt.a)(r),
									o = Object(Yt.c)(r);
								a.forEach(({
									type: r,
									transactionHash: a
								}) => {
									if (r === Pe.b.DEPOSIT_PENDING) {
										const r = o.find(({
											transactionHash: t
										}) => a === t);
										if (r) {
											const o = r.confirmationBlockNumber;
											o && t.dispatch(Object(ge.f)({
												id: a,
												updatedData: {
													confirmations: c - o + 1
												}
											}))
										} else {
											var i;
											null === (i = Jt[a]) || void 0 === i || i.closeToast(), t.dispatch(Object(ge.c)({
												id: a
											}))
										}
									}
								});
								break
							}
							case Object(_.i)().type:
							case Object(_.r)().type: {
								const r = t.getState(),
									a = Object(Vt.a)(r);
								c.forEach(({
									id: r,
									status: o,
									transactionHash: i
								}) => {
									o === K.a.CONFIRMED && a.forEach(({
										id: a,
										type: o,
										transactionHash: c,
										amount: l,
										asset: E
									}) => {
										if (o === Pe.b.DEPOSIT_PENDING && i === c) {
											var u;
											null === (u = Jt[i]) || void 0 === u || u.closeToast(), t.dispatch(Object(ge.c)({
												id: i
											}));
											const r = {
												id: i,
												type: Pe.b.DEPOSIT_SUCCESS,
												amount: l,
												asset: E,
												transactionHash: i
											};
											t.dispatch(Object(ge.a)(r)), Object(pt.b)(({
												closeToast: t
											}) => Object(Rt.d)({
												autoClose: Pe.a,
												closeToast: t,
												notification: r
											}))
										} else if (o === Pe.b.FAST_WITHDRAW_PENDING && r === a) {
											var d;
											null === (d = Jt[r]) || void 0 === d || d.closeToast(), t.dispatch(Object(ge.c)({
												id: r
											}));
											const a = {
												id: r,
												type: Pe.b.FAST_WITHDRAW_SUCCESS,
												amount: l,
												transactionHash: i
											};
											t.dispatch(Object(ge.a)(a)), Object(pt.b)(({
												closeToast: t
											}) => Object(Rt.h)({
												autoClose: Pe.a,
												closeToast: t,
												notification: a
											}))
										}
									})
								});
								break
							}
							case Object(B.d)().type: {
								const r = t.getState();
								if (Object(Yt.a)(r) !== c)
									if ("0" === c) t.dispatch(Object(ge.d)({
										type: Pe.b.SLOW_WITHDRAW_AVAILABLE
									}));
									else {
										var T;
										const r = {
											type: Pe.b.SLOW_WITHDRAW_AVAILABLE,
											amount: c
										};
										t.dispatch(Object(ge.a)(r)), null === (T = Jt[Pe.b.SLOW_WITHDRAW_AVAILABLE]) || void 0 === T || T.closeToast(), Object(pt.b)(({
											closeToast: t
										}) => (Jt[Pe.b.SLOW_WITHDRAW_AVAILABLE] = {
											closeToast: t
										}, Object(Rt.l)({
											autoClose: Pe.a,
											closeToast: () => {
												delete Jt[Pe.b.SLOW_WITHDRAW_AVAILABLE], t()
											},
											notification: r
										})))
									} break
							}
							case Object(_.o)().type:
								c.forEach(r => {
									if (r.status !== je.c.PENDING) {
										var a;
										const o = r.id,
											i = {
												id: o,
												type: Pe.b.ORDER_UPDATE,
												order: r
											};
										t.dispatch(Object(ge.c)({
											id: o
										})), t.dispatch(Object(ge.a)(i)), null === (a = Jt[o]) || void 0 === a || a.closeToast(), (t => {
											const r = t.getState();
											if (!(Object(kt.l)(r) || {})[ct.j.PopUpNotifications]) return !1;
											const a = Object(Kt.b)(r);
											return (null === a || void 0 === a ? void 0 : a.type) !== V.b.NOTIFICATIONS
										})(t) && (({
											order: t,
											store: r
										}) => {
											const a = r.getState(),
												o = Object(Zt.a)(a);
											switch (t.type) {
												case je.e.TRAILING_STOP: {
													var i;
													const r = null === (i = o.filter(({
														id: r
													}) => r === t.id)) || void 0 === i ? void 0 : i[0];
													if (!r) return !0;
													const a = middlewares_notifications_objectSpread({}, r),
														c = middlewares_notifications_objectSpread({}, t);
													return delete a.triggerPrice, delete c.triggerPrice, !Bt()(c, a)
												}
												default:
													return !0
											}
										})({
											order: r,
											store: t
										}) && Object(pt.b)(({
											closeToast: t
										}) => (Jt[o] = {
											closeToast: t
										}, Object(Rt.j)({
											autoClose: Pe.a,
											closeToast: () => {
												delete Jt[o], t()
											},
											notification: i
										})))
									}
								});
								break;
							case Object(lt.g)().type: {
								const r = c.userRestrictions;
								if (c.ignoreMiddleware) break;
								const a = r.reason;
								switch (r.restrictionType) {
									case ct.i.Complied:
										null === (o = Jt[Pe.b.COMPLIANCE_ALERT]) || void 0 === o || o.closeToast();
										break;
									case ct.i.FirstOffense:
										Object(pt.b)(({
											closeToast: r
										}) => (Jt[Pe.b.COMPLIANCE_ALERT] = {
											closeToast: r
										}, Object(Rt.a)({
											closeToast: r,
											title: "Compliance alert",
											body: a,
											onClick: () => {
												t.dispatch(Object(Y.c)({
													modalType: V.a.COMPLIANCE
												}))
											}
										}))), t.dispatch(Object(Y.c)({
											modalType: V.a.COMPLIANCE
										}));
										break;
									case ct.i.Restricted:
										var S;
										null === (S = Jt[Pe.b.COMPLIANCE_ALERT]) || void 0 === S || S.closeToast(), Object(pt.b)(({
											closeToast: t
										}) => (Jt[Pe.b.FLAGGED_ACCOUNT] = {
											closeToast: t
										}, Object(Rt.i)({
											closeToast: t,
											notification: {
												id: ct.i.Restricted,
												reason: a
											}
										})));
										break;
									case ct.i.Transfers:
									case ct.i.Withdrawals:
									default:
										null !== c && void 0 !== c && c.isRestricted && null !== c && void 0 !== c && c.reason && Object(pt.b)(({
											closeToast: t
										}) => Object(Rt.a)({
											closeToast: t,
											title: "Compliance alert",
											body: c.reason
										}))
								}
								break
							}
							case Object(Ie.b)().type:
								c && c.length > 0 && c.forEach(r => {
									const a = middlewares_notifications_objectSpread({
										id: `${null===r||void 0===r?void 0:r.period}_${null===r||void 0===r?void 0:r.endsAt}`,
										type: Pe.b.COMPETITION_PRIZES
									}, r);
									t.dispatch(Object(ge.a)(a)), Object(pt.b)(({
										closeToast: t
									}) => Object(Rt.b)({
										closeToast: t,
										notification: a
									}))
								});
								break;
							case Object(ze.b)().type: {
								var p, R;
								const r = t.getState(),
									a = Object(zt.b)(r),
									o = Object(kt.l)(r),
									i = (a || {}).latestEpoch,
									l = null === c || void 0 === c || null === (p = c.tradingRewards) || void 0 === p ? void 0 : p.epoch,
									E = (null === o || void 0 === o ? void 0 : o[ct.j.LatestConcludedEpoch]) || i - 2;
								if (o && l === i - 1 && l > E && Object(Qt.b)(null === c || void 0 === c || null === (R = c.tradingRewards) || void 0 === R ? void 0 : R.estimatedRewards).gt(0)) {
									var A;
									const r = middlewares_notifications_objectSpread({
										id: `EPOCH_${null===c||void 0===c||null===(A=c.tradingRewards)||void 0===A?void 0:A.epoch}_END`,
										type: Pe.b.EPOCH_END
									}, null === c || void 0 === c ? void 0 : c.tradingRewards);
									t.dispatch(Object(ge.a)(r)), Object(pt.b)(({
										closeToast: t
									}) => Object(Rt.f)({
										closeToast: t,
										notification: r
									}))
								}
								break
							}
							case Object(lt.d)().type:
								if (null === c) {
									var b;
									const r = t.getState(),
										a = Object(kt.l)(r),
										o = null !== (b = null === a || void 0 === a ? void 0 : a[ct.j.OneTimeNotifications]) && void 0 !== b ? b : [];
									o.includes(Pe.b.SELF_SERVICE_APPLICATION_LAUNCH) || Jt[Pe.b.SELF_SERVICE_APPLICATION_LAUNCH] || Object(pt.b)(({
										closeToast: r
									}) => (Jt[Pe.b.SELF_SERVICE_APPLICATION_LAUNCH] = {
										closeToast: r
									}, Object(Rt.k)({
										closeToast: function() {
											var a = notifications_asyncToGenerator((function*() {
												var a, i;
												delete Jt[Pe.b.SELF_SERVICE_APPLICATION_LAUNCH];
												const c = t.getState(),
													l = null !== (a = null === (i = Object(kt.l)(c)) || void 0 === i ? void 0 : i[ct.j.OneTimeNotifications]) && void 0 !== a ? a : o,
													E = (yield Nt.c.updateUser({
														userData: {
															preferences: {
																oneTimeNotifications: [...l, Pe.b.SELF_SERVICE_APPLICATION_LAUNCH]
															}
														}
													})).user;
												t.dispatch(Object(lt.c)(E)), r()
											}));
											return function closeToast() {
												return a.apply(this, arguments)
											}
										}(),
										notification: {
											id: Pe.b.SELF_SERVICE_APPLICATION_LAUNCH
										},
										onClick: () => {
											t.dispatch(Object(Y.c)({
												type: V.a.SELF_SERVICE_AFFILIATE_REGISTRATION
											}))
										}
									})))
								}
								break;
							case Object(ge.c)().type:
							case Object(ge.d)().type: {
								const r = t.getState(),
									a = Object(Vt.a)(r),
									o = Object(Vt.b)(r);
								0 === a.filter(({
									type: t
								}) => !Pe.c.includes(t)).filter(({
									type: t,
									id: r
								}) => c.id ? r !== (null === c || void 0 === c ? void 0 : c.id) : t !== (null === c || void 0 === c ? void 0 : c.type)).length && o && t.dispatch(Object(ge.e)());
								break
							}
							case Object(I.c)().type:
							case Object(I.l)().type:
								Jt = {}, pt.b.dismiss()
						}
						if (r(a), [Object(_.i)().type, Object(_.r)().type, Object(B.d)().type].includes(i)) {
							const r = t.getState(),
								a = Object(Vt.a)(r),
								o = Object(Xt.a)(r);
							var N;
							if (!Object(Qt.b)(o).isZero()) a.some(({
								type: t
							}) => t === Pe.b.SLOW_WITHDRAW_PENDING) || t.dispatch(Object(ge.a)({
								type: Pe.b.SLOW_WITHDRAW_PENDING
							})), null === (N = Jt[Pe.b.SLOW_WITHDRAW_PENDING]) || void 0 === N || N.closeToast(), Object(pt.b)(({
								closeToast: t
							}) => (Jt[Pe.b.SLOW_WITHDRAW_PENDING] = {
								closeToast: t
							}, Object(Rt.m)({
								autoClose: Pe.a,
								closeToast: () => {
									delete Jt[Pe.b.SLOW_WITHDRAW_PENDING], t()
								},
								notification: {
									type: Pe.b.SLOW_WITHDRAW_PENDING
								}
							})))
						}
					}));
					return function(t) {
						return a.apply(this, arguments)
					}
				}(), t => r => function() {
					var a = poll_historical_funding_rates_asyncToGenerator((function*(a) {
						if (r(a), a.type === he.b) {
							const r = a.payload.location.pathname;
							Object(_r.f)(r, {
								path: We.j.TRADE
							}) ? (stopPollingFundingData(), pr(t)) : stopPollingFundingData()
						}
					}));
					return function(t) {
						return a.apply(this, arguments)
					}
				}(), t => r => function() {
					var a = tradingRewards_asyncToGenerator((function*(a) {
						if (r(a), a.type === Object(lt.c)().type) {
							const r = t.getState();
							if (!Object(zt.b)(r).latestEpoch) {
								const r = yield Ar(), a = r.lastEpochRewards, o = r.latestEpochRewards;
								a && o && (t.dispatch(Object(ze.b)({
									tradingRewards: o,
									isLatestEpoch: !0
								})), t.dispatch(Object(ze.b)({
									tradingRewards: a
								})))
							}
						}
					}));
					return function(t) {
						return a.apply(this, arguments)
					}
				}()];
			Object(c.createLogger)({
				predicate: (t, r) => !1
			});
			const Zr = Object(o.d)(Object(o.a)(...Vr, u.a)),
				zr = Object(o.e)((Xr = Kr, Object(o.c)({
					account: p,
					candleData: reducers_candle_data,
					configs: G,
					depositWithdrawData: reducers_deposit_withdraw_data,
					fills: q,
					fundingPayments: Q,
					geo: reducers_geo,
					historicalFundingRates: historical_funding_rates,
					historicalPnl: Te,
					leagues: reducers_leagues,
					localization: Ce,
					markets: me,
					modals: reducers_modals,
					notifications: we,
					orderbook: ke,
					orders: reducers_orders,
					page: pageReducer,
					positions: Ze,
					rewards: rewardsReducer,
					router: Object(O.b)(Xr),
					tradeData: reducers_trade_data,
					trades: Qe,
					transfers: st,
					user: reducers_user,
					wallet: Tt
				})), {}, Zr);
			var Xr;
			Nt.c.setStore(zr), Ct.b.setStore(zr);
			r.a = zr
		},
		362: function(t, r, a) {
			"use strict";
			a.d(r, "b", (function() {
				return getIsSidebarOpen
			})), a.d(r, "a", (function() {
				return getExchangeStatus
			}));
			const getIsSidebarOpen = t => t.page.isSidebarOpen,
				getExchangeStatus = t => t.page.exchangeStatus
		},
		363: function(t, r, a) {
			"use strict";
			a.d(r, "c", (function() {
				return h
			})), a.d(r, "a", (function() {
				return y
			})), a.d(r, "b", (function() {
				return D
			}));
			var o = a(182),
				i = a.n(o),
				c = a(585),
				l = a.n(c),
				E = a(175),
				u = a.n(E),
				d = a(0),
				_ = a.n(d),
				O = a(1),
				T = a.n(O),
				I = a(13),
				S = a.n(I),
				p = a(30),
				R = a(155),
				A = a(118),
				b = a(2),
				N = a(10),
				C = {
					inputField: "_37GPA1iZkStXXJO9X3hhlv",
					input: "_3HfG1EXp6b3PMuqWZZgg1p",
					backgroundDark: "_3_nBB7-Eq4nryB2pHtqClG",
					backgroundLighter: "s2PZoT7vaJmBZpSzH_1lP",
					active: "_1ni5QFBMMsFpbc26Qp-l2a",
					centered: "b0KMVYwkV4014jLO3cfYF",
					button: "T_THfxhCJ_IP7xEz6YnnK",
					small: "_32u9fdrXywEzumHRpYR_0y",
					pill: "-kvls0-JhEUNZuCraZ7yb",
					large: "_3903jx-cmZYVP52Aynl7s9",
					regularFont: "_1aK_xBLa_J-hI7oBr6PoEj",
					disabled: "_3yIu8rRKbOG47sN-m3FoDc",
					maxButtonLoading: "Sh8S4VdwAf44tvhW1yls3",
					maxButton: "_1Lty75QVv9LImbj9cAaGo3"
				};

			function _slicedToArray(t, r) {
				return function _arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function _iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function _unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return _arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return _arrayLikeToArray(t, r)
				}(t, r) || function _nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}
			const y = {
					BUTTON: "BUTTON",
					SMALL: "SMALL",
					LARGE: "LARGE"
				},
				D = {
					PERCENT: "PERCENT",
					TEXT: "TEXT",
					NUMBER: "NUMBER",
					LEVERAGE: "LEVERAGE"
				},
				m = _.a.forwardRef(({
					active: t,
					autofocus: r,
					centered: a,
					className: o,
					backgroundDark: i,
					backgroundLighter: c,
					disabled: E,
					highlightTextOnFocus: O,
					innerComponent: T,
					isMaxLoading: I,
					maxDecimals: p,
					onBlur: m,
					onChange: h,
					onClickMax: L,
					onEscape: g,
					onFocus: P,
					pill: v,
					placeholder: w = "0.0000",
					regularFont: M,
					size: U = y.LARGE,
					spellCheck: G,
					stringGetter: j,
					tabIndex: k = 0,
					tag: x,
					type: H = D.NUMBER,
					value: B
				}, W) => {
					const Y = W || _.a.useRef(),
						K = _slicedToArray(Object(d.useState)(!1), 2),
						V = K[0],
						Z = K[1],
						z = _slicedToArray(Object(d.useState)(), 2),
						X = z[0],
						q = z[1],
						$ = _slicedToArray(Object(d.useState)(null), 2),
						Q = $[0],
						J = $[1],
						setCursorBeforeSuffix = () => {
							const t = null === B || void 0 === B ? void 0 : B.length;
							Y.current.setSelectionRange(t, t)
						};
					Object(d.useEffect)(() => {
						const handleKeyPress = t => {
							if ([D.LEVERAGE, D.PERCENT].includes(H)) {
								var r, a, o, i;
								const l = null === (r = Y.current) || void 0 === r ? void 0 : r.selectionStart,
									E = (null === (a = Y.current) || void 0 === a || null === (o = a.value) || void 0 === o ? void 0 : o.length) || 0;
								var c;
								if ((null === (i = Y.current) || void 0 === i || !i.value[l]) && E > 0 && q(!0), X && ("Delete" === t.key || "Backspace" === t.key))
									if (E > 0) null === (c = Y.current) || void 0 === c || c.setSelectionRange(E, E - 1), q(!1)
							}
						};
						return Y.current.addEventListener("keydown", handleKeyPress), () => {
							var t;
							return null === (t = Y.current) || void 0 === t ? void 0 : t.removeEventListener("keydown", handleKeyPress)
						}
					}, [X]), Object(d.useEffect)(() => {
						var t;
						r && (null === (t = Y.current) || void 0 === t || t.focus())
					}, [r]), Object(d.useEffect)(() => {
						const handleEscape = t => {
							g && "Escape" === t.key && g(t)
						};
						return Y.current.addEventListener("keydown", handleEscape), () => {
							var t;
							return null === Y || void 0 === Y || null === (t = Y.current) || void 0 === t ? void 0 : t.removeEventListener("keydown", handleEscape)
						}
					}, []);
					const persistCursorBeforeSuffix = () => {
						setCursorBeforeSuffix(), Q && Number(B) !== Number(Q) && J(null)
					};
					Object(d.useEffect)(() => {
						H === D.PERCENT && persistCursorBeforeSuffix(), H === D.LEVERAGE && V && persistCursorBeforeSuffix()
					}, [B]);
					const ee = S()(C.input, {
							[C.regularFont]: M || H === D.TEXT
						}),
						te = Q || B;
					let re;
					L && (re = I ? _.a.createElement("div", {
						className: C.maxButtonLoading
					}, _.a.createElement(R.a, {
						size: 3
					})) : _.a.createElement("div", {
						role: "button",
						tabIndex: -1,
						className: C.maxButton,
						onClick: L
					}, j({
						key: b.a.MAX
					})));
					let ne = te;
					if (te && "" !== te) switch (H) {
						case D.PERCENT:
							ne = te + "%";
							break;
						case D.LEVERAGE:
							ne = te + "\xd7";
							break;
						default:
							ne = te
					}
					return _.a.createElement("div", {
						className: S()(C.inputField, {
							[C.active]: t,
							[C.centered]: a,
							[C.disabled]: E,
							[C.backgroundDark]: i,
							[C.backgroundLighter]: c,
							[C.button]: U === y.BUTTON,
							[C.small]: U === y.SMALL,
							[C.large]: U === y.LARGE,
							[C.pill]: v
						}, o)
					}, _.a.createElement("input", {
						ref: Y,
						inputMode: H === D.TEXT ? void 0 : "decimal",
						className: ee,
						spellCheck: G,
						onChange: t => {
							let r;
							switch (H) {
								case D.LEVERAGE:
									r = t.target.value.replace("\xd7", "");
									break;
								case D.PERCENT:
									r = t.target.value.replace("%", "");
									break;
								default:
									r = t.target.value
							}
							if (H !== D.TEXT) {
								if ([D.PERCENT, D.NUMBER, D.LEVERAGE].includes(H)) {
									if (r = r.replace(",", "."), 0 !== p && "." === r) return h("0."), void J("0.");
									if (Number.isNaN(Number(r)) || Number(r) < 0) return void h(B);
									Q && J(null)
								}
								return H === D.PERCENT || H === D.LEVERAGE ? Object(N.e)(r) > p ? void q(!0) : void h(r) : H === D.NUMBER ? "" === r ? void h(r) : "." === u()(r) ? 0 === p ? void h(B) : (h(r.slice(0, -1)), void J(r)) : l()(p) ? void h(r) : Object(N.e)(r) > p ? void h(B) : void h(r) : void h(r)
							}
							h(r)
						},
						onBlur: () => {
							null === m || void 0 === m || m(), Z(!1)
						},
						onFocus: t => {
							Z(!0), null === P || void 0 === P || P(t), O && setTimeout(() => {
								var t;
								return null === (t = Y.current) || void 0 === t ? void 0 : t.select()
							}, 100), H !== D.PERCENT && H !== D.LEVERAGE || window.requestAnimationFrame(setCursorBeforeSuffix), setTimeout(() => {
								document.getElementById("root").scrollIntoView()
							}, 100)
						},
						placeholder: w,
						value: ne,
						disabled: E,
						tabIndex: k
					}), x && _.a.createElement(A.a, {
						marginLeft: !0,
						compact: !0,
						className: C.tag
					}, x), T && T, re)
				});
			m.propTypes = {
				active: T.a.bool,
				autofocus: T.a.bool,
				backgroundDark: T.a.bool,
				backgroundLighter: T.a.bool,
				centered: T.a.bool,
				className: T.a.string,
				disabled: T.a.bool,
				highlightTextOnFocus: T.a.bool,
				innerComponent: T.a.node,
				isMaxLoading: T.a.bool,
				maxDecimals: T.a.number,
				onBlur: T.a.func,
				onChange: T.a.func.isRequired,
				onClickMax: T.a.func,
				onEscape: T.a.func,
				onFocus: T.a.func,
				pill: T.a.bool,
				placeholder: T.a.string,
				regularFont: T.a.bool,
				size: T.a.oneOf(i()(y)),
				spellCheck: T.a.bool,
				stringGetter: T.a.func,
				tabIndex: T.a.number,
				tag: T.a.string,
				type: T.a.oneOf(i()(D)),
				value: T.a.string.isRequired
			};
			var h = Object(p.d)(m)
		},
		364: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return getAllPositions
			})), a.d(r, "b", (function() {
				return _
			})), a.d(r, "c", (function() {
				return O
			}));
			var o = a(71),
				i = a.n(o),
				c = a(25),
				l = a.n(c),
				E = a(65),
				u = a(58),
				d = a(184);
			const getAllPositions = t => l()(t, "positions.positions"),
				_ = Object(E.a)([getAllPositions, u.b], (t, r) => {
					if (!r || !t) return null;
					return t[r.market]
				}),
				O = Object(E.a)([getAllPositions], t => {
					if (!t) return !1;
					let r = !1;
					return i()(t, ({
						status: t
					}) => t !== d.b.OPEN || (r = !0, !1)), r
				})
		},
		365: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return I
			}));
			var o = a(0),
				i = a.n(o),
				c = a(1),
				l = a.n(c),
				E = a(13),
				u = a.n(E),
				d = "_1XvHzDnqZBWuoxMHAd1fMv",
				_ = "_1C4tONUnDb2rtYCUf5Ayp0",
				O = "Sho_rHslNelcTUrJz6F21",
				T = "_1OBhMi8FvpXdxykEJM8fQT";
			const LoadingSpinner = ({
				id: t,
				className: r,
				compact: a,
				thick: o,
				tiny: c,
				huge: l,
				white: E
			}) => i.a.createElement("div", {
				className: r
			}, i.a.createElement("svg", {
				className: u()(d, {
					[_]: a,
					[O]: c,
					[T]: l
				}),
				width: "36",
				height: "36",
				viewBox: "0 0 36 36",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("circle", {
				cx: "18",
				cy: "18",
				r: o ? "15" : "17",
				strokeWidth: o ? "5" : "1.5",
				stroke: E ? "#f7f7f7" : "#2d2d3d",
				strokeOpacity: E ? "0.2" : "1"
			}), i.a.createElement("circle", {
				cx: "18",
				cy: "18",
				r: o ? "15" : "17",
				stroke: `url(#${t?t+"_spinner_gradient":"spinner_gradient"})`,
				strokeWidth: o ? "5" : "1.5"
			}), i.a.createElement("defs", null, i.a.createElement("linearGradient", {
				id: t ? t + "_spinner_gradient" : "spinner_gradient",
				x1: "36",
				y1: "18",
				x2: "24.75",
				y2: "22.25",
				gradientUnits: "userSpaceOnUse"
			}, i.a.createElement("stop", {
				stopColor: E ? "#f7f7f7" : "#5973FE"
			}), i.a.createElement("stop", {
				offset: "0.78125",
				stopColor: E ? "#f7f7f7" : "#5973FE",
				stopOpacity: "0"
			})))));
			LoadingSpinner.propTypes = {
				id: l.a.string,
				className: l.a.string,
				compact: l.a.bool,
				huge: l.a.bool,
				thick: l.a.bool,
				tiny: l.a.bool,
				white: l.a.bool
			};
			var I = LoadingSpinner
		},
		366: function(t, r, a) {
			"use strict";
			a.d(r, "c", (function() {
				return getStringsForDateTimeDiff
			})), a.d(r, "d", (function() {
				return isWithinTimeIntervalBeforeNow
			})), a.d(r, "a", (function() {
				return formatTimeframe
			})), a.d(r, "b", (function() {
				return getLastWeekDate
			}));
			var o = a(59),
				i = a(2),
				c = a(237);
			const getStringsForDateTimeDiff = ({
					dateTime: t,
					stringGetter: r
				}) => {
					const a = o.DateTime.local().diff(t, ["weeks", "days", "hours", "minutes"]),
						i = getStringsForTimeInterval({
							timeInterval: a,
							stringGetter: r
						});
					return {
						timeString: i.timeString,
						unitString: i.unitString,
						hasExpirationWarning: 0 === a.weeks && Math.abs(a.days) < 3
					}
				},
				getStringsForTimeInterval = ({
					timeInterval: t,
					stringGetter: r
				}) => {
					var a, o, c, l, E;
					const u = Math.abs(null !== (a = t.months) && void 0 !== a ? a : 0),
						d = Math.abs(null !== (o = t.weeks) && void 0 !== o ? o : 0),
						_ = Math.abs(null !== (c = t.days) && void 0 !== c ? c : 0),
						O = Math.abs(null !== (l = t.hours) && void 0 !== l ? l : 0),
						T = Math.abs(null !== (E = t.minutes) && void 0 !== E ? E : 0);
					let I, S;
					return u > 0 ? (I = Math.round(u).toString(), S = i.a.MONTHS_ABBREVIATED) : d > 0 ? (I = Math.round(d + _ / 7).toString(), S = i.a.WEEKS_ABBREVIATED) : _ > 0 ? (I = Math.round(_ + O / 24).toString(), S = i.a.DAYS_ABBREVIATED) : O > 0 ? (I = Math.round(O + T / 60).toString(), S = i.a.HOURS_ABBREVIATED) : (I = Math.ceil(T).toString(), S = i.a.MINUTES_ABBREVIATED), {
						timeString: I,
						unitString: r({
							key: S
						})
					}
				},
				isWithinTimeIntervalBeforeNow = ({
					timestamp: t,
					timeInterval: r
				}) => {
					const a = Date.now();
					return a - o.Duration.fromObject(r).toMillis() <= t && t <= a
				},
				formatTimeframe = ({
					timeframe: t,
					stringGetter: r
				}) => {
					if (t === c.b.ALL) return r({
						key: i.a.ALL
					});
					const a = getStringsForTimeInterval({
						timeInterval: c.d[t],
						stringGetter: r
					});
					return `${a.timeString}${a.unitString}`
				},
				getLastWeekDate = () => {
					const t = (new Date).setDate((new Date).getDate() - 7);
					return new Date(t).toISOString()
				}
		},
		369: function(t, r, a) {
			"use strict";
			a.d(r, "b", (function() {
				return i
			})), a.d(r, "a", (function() {
				return c
			}));
			var o = a(4);
			const i = {
					US: o.b.US,
					AFGHANISTAN: o.b.AF,
					BELARUS: o.b.BY,
					CENTRAL_AFRICAN_REPUBLIC: o.b.CF,
					CUBA: o.b.CU,
					DEM_REPUBLIC_CONGO: o.b.CD,
					ERITREA: o.b.ER,
					IRAN: o.b.IR,
					IRAQ: o.b.IQ,
					IVORY_COAST: o.b.CI,
					LEBANON: o.b.LB,
					LIBERIA: o.b.LR,
					LIBYA: o.b.LY,
					MALI: o.b.ML,
					MYANMAR: o.b.MM,
					NICARAGUA: o.b.NI,
					NORTH_KOREA: o.b.KP,
					SOMALIA: o.b.SO,
					SOUTH_SUDAN: o.b.SS,
					SUDAN: o.b.SD,
					SYRIA: o.b.SY,
					VENEZUELA: o.b.VE,
					ZIMBABWE: o.b.ZW
				},
				c = (i.AFGHANISTAN, i.BELARUS, i.CENTRAL_AFRICAN_REPUBLIC, i.CUBA, i.DEM_REPUBLIC_CONGO, i.ERITREA, i.IRAN, i.IRAQ, i.IVORY_COAST, i.LEBANON, i.LIBERIA, i.LIBYA, i.MALI, i.MYANMAR, i.NICARAGUA, i.NORTH_KOREA, i.SOMALIA, i.SOUTH_SUDAN, i.SUDAN, i.SYRIA, i.VENEZUELA, i.ZIMBABWE, {
					"Afghanistan (\u202b\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646\u202c\u200e)": o.b.AF,
					Akrotiri: o.b.GB,
					"Albania (Shqip\xebri)": o.b.AL,
					"Algeria (\u202b\u0627\u0644\u062c\u0632\u0627\u0626\u0631\u202c\u200e)": o.b.DZ,
					"American Samoa": o.b.AS,
					Andorra: o.b.AD,
					Angola: o.b.AO,
					Anguilla: o.b.AI,
					Antarctica: o.b.AQ,
					"Antigua & Barbuda": o.b.AG,
					Argentina: o.b.AR,
					"Armenia (\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576)": o.b.AM,
					Aruba: o.b.AW,
					"Ashmore and Cartier Islands": o.b.AU,
					Australia: o.b.AU,
					"Austria (\xd6sterreich)": o.b.AT,
					"Azerbaijan (Az\u0259rbaycan)": o.b.AZ,
					Bahamas: o.b.BS,
					"Bahrain (\u202b\u0627\u0644\u0628\u062d\u0631\u064a\u0646\u202c\u200e)": o.b.BH,
					"Baker Island": o.b.UM,
					"Bangladesh (\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6)": o.b.BD,
					Barbados: o.b.BB,
					Belarus: o.b.BY,
					"Belgium (Belgi\xeb)": o.b.BE,
					Belize: o.b.BZ,
					"Benin (B\xe9nin)": o.b.BJ,
					Bermuda: o.b.BM,
					"Bhutan (\u0f60\u0f56\u0fb2\u0f74\u0f42)": o.b.BT,
					Bolivia: o.b.BO,
					"Bosnia-Herzegovina (\u0411\u043e\u0441\u043d\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u0430)": o.b.BA,
					Botswana: o.b.BW,
					"Bouvet Island": o.b.BV,
					"Brazil (Brasil)": o.b.BR,
					"British Indian Ocean Territory": o.b.IO,
					"British Virgin Islands": o.b.VG,
					Brunei: o.b.BN,
					"Bulgaria (\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f)": o.b.BG,
					"Burkina Faso": o.b.BF,
					Burma: o.b.MM,
					"Burundi (Uburundi)": o.b.BI,
					"Cambodia (\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6)": o.b.KH,
					"Cameroon (Cameroun)": o.b.CM,
					Canada: o.b.CA,
					"Cape Verde (Kabu Verdi)": o.b.CV,
					"Cayman Islands": o.b.KY,
					"Central African Republic (R\xe9publique centrafricaine)": o.b.CF,
					"Chad (Tchad)": o.b.TD,
					Chile: o.b.CL,
					"China (\u4e2d\u56fd)": o.b.CN,
					"Christmas Island": o.b.CX,
					"Clipperton Island": o.b.FR,
					"Cocos (Keeling) Islands": o.b.CC,
					Colombia: o.b.CO,
					"Comoros (\u202b\u062c\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202c\u200e)": o.b.KM,
					"Congo (Brazzaville)": o.b.CG,
					"Congo (Kinshasa)": o.b.CD,
					"Cook Islands": o.b.CK,
					"Coral Sea Islands": o.b.AU,
					"Costa Rica": o.b.CR,
					"Cote D'Ivoire (Ivory Coast)": o.b.CI,
					"Croatia (Hrvatska)": o.b.HR,
					Cuba: o.b.CU,
					Curacao: o.b.CW,
					"Cyprus (\u039a\u03cd\u03c0\u03c1\u03bf\u03c2)": o.b.CY,
					"Czech Republic (\u010cesk\xe1 republika)": o.b.CZ,
					"Denmark (Danmark)": o.b.DK,
					Dhekelia: o.b.GB,
					Djibouti: o.b.DJ,
					Dominica: o.b.DM,
					"Dominican Republic (Rep\xfablica Dominicana)": o.b.DO,
					"East Timor": o.b.TL,
					Ecuador: o.b.EC,
					"Egypt (\u202b\u0645\u0635\u0631\u202c\u200e)": o.b.EG,
					"El Salvador": o.b.SV,
					"Equatorial Guinea (Guinea Ecuatorial)": o.b.GQ,
					Eritrea: o.b.ER,
					"Estonia (Eesti)": o.b.EE,
					Ethiopia: o.b.ET,
					"Falkland Islands (Islas Malvinas)": o.b.FK,
					"Faroe Islands (F\xf8royar)": o.b.FO,
					"Federated States of Micronesia": o.b.FM,
					Fiji: o.b.FJ,
					"Finland (Suomi)": o.b.FI,
					France: o.b.FR,
					"French Polynesia (Polyn\xe9sie fran\xe7aise)": o.b.PF,
					"French Southern and Antarctic Lands": o.b.TF,
					Gabon: o.b.GA,
					"The Gambia": o.b.GM,
					"Georgia (\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd)": o.b.GE,
					"Germany (Deutschland)": o.b.DE,
					"Ghana (Gaana)": o.b.GH,
					Gibraltar: o.b.GI,
					"Greece (\u0395\u03bb\u03bb\u03ac\u03b4\u03b1)": o.b.GR,
					"Greenland (Kalaallit Nunaat)": o.b.GL,
					Grenada: o.b.GD,
					Guam: o.b.GU,
					Guatemala: o.b.GT,
					Guernsey: o.b.GG,
					"Guinea (Guin\xe9e)": o.b.GN,
					"Guinea-Bissau (Guin\xe9 Bissau)": o.b.GW,
					Guyana: o.b.GY,
					Haiti: o.b.HT,
					"Heard Island and McDonald Islands": o.b.HM,
					"Holy See": o.b.VA,
					Honduras: o.b.HN,
					"Hong Kong (\u9999\u6e2f)": o.b.HK,
					"Howland Island": o.b.UM,
					"Hungary (Magyarorsz\xe1g)": o.b.HU,
					"Iceland (\xcdsland)": o.b.IS,
					"India (\u092d\u093e\u0930\u0924)": o.b.IN,
					Indonesia: o.b.ID,
					Iran: o.b.IR,
					Iraq: o.b.IQ,
					Ireland: o.b.IE,
					"Israel (\u202b\u05d9\u05e9\u05e8\u05d0\u05dc\u202c\u200e)": o.b.IL,
					"Italy (Italia)": o.b.IT,
					Jamaica: o.b.JM,
					"Jan Mayen": o.b.SJ,
					"Japan (\u65e5\u672c)": o.b.JP,
					"Jarvis Island": o.b.UM,
					Jersey: o.b.JE,
					"Johnston Atoll": o.b.UM,
					"Jordan (\u202b\u0627\u0644\u0623\u0631\u062f\u0646\u202c\u200e)": o.b.JO,
					"Kazakhstan (\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d)": o.b.KZ,
					Kenya: o.b.KE,
					"Kingman Reef": o.b.UM,
					Kiribati: o.b.KI,
					"Korea, Democratic People's Republic of (North)": o.b.KP,
					"Korea, Republic of (South) (\ub300\ud55c\ubbfc\uad6d)": o.b.KR,
					Kosovo: o.b.XK,
					"Kuwait (\u202b\u0627\u0644\u0643\u0648\u064a\u062a\u202c\u200e)": o.b.KW,
					"Kyrgyzstan (\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d)": o.b.KG,
					"Laos (\u0ea5\u0eb2\u0ea7)": o.b.LA,
					"Latvia (Latvija)": o.b.LV,
					"Lebanon (\u202b\u0644\u0628\u0646\u0627\u0646\u202c\u200e)": o.b.LB,
					Lesotho: o.b.LS,
					Liberia: o.b.LR,
					"Libya (\u202b\u0644\u064a\u0628\u064a\u0627\u202c\u200e)": o.b.LY,
					Liechtenstein: o.b.LI,
					"Lithuania (Lietuva)": o.b.LT,
					Luxembourg: o.b.LU,
					"Macau (\u6fb3\u9580)": o.b.MO,
					"Macedonia (FYROM) (\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430)": o.b.MK,
					"Madagascar (Madagasikara)": o.b.MG,
					Malawi: o.b.MW,
					Malaysia: o.b.MY,
					Maldives: o.b.MV,
					Mali: o.b.ML,
					Malta: o.b.MT,
					"Man, Isle of": o.b.IM,
					"Marshall Islands": o.b.MH,
					"Mauritania (\u202b\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627\u202c\u200e)": o.b.MR,
					"Mauritius (Moris)": o.b.MU,
					"Mexico (M\xe9xico)": o.b.MX,
					"Midway Islands": o.b.UM,
					"Moldova (Republica Moldova)": o.b.MD,
					Monaco: o.b.MC,
					"Mongolia (\u041c\u043e\u043d\u0433\u043e\u043b)": o.b.MN,
					"Montenegro (Crna Gora)": o.b.ME,
					Montserrat: o.b.MS,
					"Morocco (\u202b\u0627\u0644\u0645\u063a\u0631\u0628\u202c\u200e)": o.b.MA,
					"Mozambique (Mo\xe7ambique)": o.b.MZ,
					"Namibia (Namibi\xeb)": o.b.NA,
					Nauru: o.b.NR,
					"Navassa Island": o.b.UM,
					"Nepal (\u0928\u0947\u092a\u093e\u0932)": o.b.NP,
					"Netherlands (Nederland)": o.b.NL,
					"New Caledonia (Nouvelle-Cal\xe9donie)": o.b.NC,
					"New Zealand": o.b.NZ,
					Nicaragua: o.b.NI,
					"Niger (Nijar)": o.b.NE,
					Nigeria: o.b.NG,
					Niue: o.b.NU,
					"Norfolk Island": o.b.NF,
					"Northern Mariana Islands": o.b.MP,
					"Norway (Norge)": o.b.NO,
					"Oman (\u202b\u0639\u064f\u0645\u0627\u0646\u202c\u200e)": o.b.OM,
					"Pakistan (\u202b\u067e\u0627\u06a9\u0633\u062a\u0627\u0646\u202c\u200e)": o.b.PK,
					Palau: o.b.PW,
					"Palmyra Atoll": o.b.UM,
					"Panama (Panam\xe1)": o.b.PA,
					"Papua-New Guinea": o.b.PG,
					Paraguay: o.b.PY,
					"Peru (Per\xfa)": o.b.PE,
					Philippines: o.b.PH,
					"Pitcairn Islands": o.b.PN,
					"Poland (Polska)": o.b.PL,
					Portugal: o.b.PT,
					"Puerto Rico": o.b.PR,
					"Qatar (\u202b\u0642\u0637\u0631\u202c\u200e)": o.b.QA,
					"Romania (Rom\xe2nia)": o.b.RO,
					"Russia (\u0420\u043e\u0441\u0441\u0438\u044f)": o.b.RU,
					Rwanda: o.b.RW,
					"Saint Barthelemy": o.b.BL,
					"Saint Martin (Saint-Martin (partie fran\xe7aise))": o.b.MF,
					Samoa: o.b.WS,
					"San Marino": o.b.SM,
					"Sao Tome and Principe (S\xe3o Tom\xe9 e Pr\xedncipe)": o.b.ST,
					"Saudi Arabia (\u202b\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629\u202c\u200e)": o.b.SA,
					"Senegal (S\xe9n\xe9gal)": o.b.SN,
					"Serbia (\u0421\u0440\u0431\u0438\u0458\u0430)": o.b.RS,
					Seychelles: o.b.SC,
					"Sierra Leone": o.b.SL,
					Singapore: o.b.SG,
					"Sint Maarten": o.b.SX,
					"Slovakia (Slovensko)": o.b.SK,
					"Slovenia (Slovenija)": o.b.SI,
					"Solomon Islands": o.b.SB,
					"Somalia (Soomaaliya)": o.b.SO,
					"South Africa": o.b.ZA,
					"South Georgia and the South Sandwich Islands": o.b.GS,
					"South Sudan": o.b.SS,
					"Spain (Espa\xf1a)": o.b.ES,
					"Sri Lanka (\u0dc1\u0dca\u200d\u0dbb\u0dd3 \u0dbd\u0d82\u0d9a\u0dcf\u0dc0)": o.b.LK,
					"St. Helena": o.b.SH,
					"St. Kitts and Nevis": o.b.KN,
					"St. Lucia Island": o.b.LC,
					"St. Pierre and Miquelon (Saint-Pierre-et-Miquelon)": o.b.PM,
					"St. Vincent and the Grenadines": o.b.VC,
					Sudan: o.b.SD,
					Suriname: o.b.SR,
					Svalbard: o.b.SJ,
					Swaziland: o.b.SZ,
					"Sweden (Sverige)": o.b.SE,
					"Switzerland (Schweiz)": o.b.CH,
					Syria: o.b.SY,
					"Taiwan (\u53f0\u7063)": o.b.TW,
					Tajikistan: o.b.TJ,
					Tanzania: o.b.TZ,
					"Thailand (\u0e44\u0e17\u0e22)": o.b.TH,
					Togo: o.b.TG,
					Tokelau: o.b.TK,
					Tonga: o.b.TO,
					"Trinidad and Tobago": o.b.TT,
					"Tunisia (\u202b\u062a\u0648\u0646\u0633\u202c\u200e)": o.b.TN,
					"Turkey (T\xfcrkiye)": o.b.TR,
					Turkmenistan: o.b.TM,
					"Turks and Caicos Islands": o.b.TC,
					Tuvalu: o.b.TV,
					Uganda: o.b.UG,
					"Ukraine (\u0423\u043a\u0440\u0430\u0457\u043d\u0430)": o.b.UA,
					"United Arab Emirates (\u202b\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629\u202c\u200e)": o.b.AE,
					"United Kingdom (England, Northern Ireland, Scotland, and Wales)": o.b.GB,
					"United States of America": o.b.US,
					Uruguay: o.b.UY,
					"Uzbekistan (O\u02bbzbekiston)": o.b.UZ,
					Vanuatu: o.b.VU,
					Venezuela: o.b.VE,
					"Vietnam (Vi\u1ec7t Nam)": o.b.VN,
					"Virgin Islands": o.b.VI,
					"Wake Island": o.b.UM,
					"Wallis and Futuna (Wallis-et-Futuna)": o.b.WF,
					"Western Sahara (\u202b\u0627\u0644\u0635\u062d\u0631\u0627\u0621 \u0627\u0644\u063a\u0631\u0628\u064a\u0629\u202c\u200e)": o.b.EH,
					"Yemen (Aden) (\u202b\u0627\u0644\u064a\u0645\u0646\u202c\u200e)": o.b.YE,
					Zambia: o.b.ZM,
					Zimbabwe: o.b.ZW
				})
		},
		38: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return i
			})), a.d(r, "j", (function() {
				return c
			})), a.d(r, "p", (function() {
				return l
			})), a.d(r, "g", (function() {
				return E
			})), a.d(r, "o", (function() {
				return u
			})), a.d(r, "i", (function() {
				return d
			})), a.d(r, "r", (function() {
				return _
			})), a.d(r, "h", (function() {
				return O
			})), a.d(r, "q", (function() {
				return T
			})), a.d(r, "d", (function() {
				return I
			})), a.d(r, "n", (function() {
				return S
			})), a.d(r, "b", (function() {
				return p
			})), a.d(r, "m", (function() {
				return R
			})), a.d(r, "c", (function() {
				return A
			})), a.d(r, "f", (function() {
				return b
			})), a.d(r, "k", (function() {
				return N
			})), a.d(r, "e", (function() {
				return C
			})), a.d(r, "l", (function() {
				return y
			}));
			var o = a(24);
			const i = Object(o.a)("SET_ACCOUNT"),
				c = Object(o.a)("UPDATE_ACCOUNT"),
				l = Object(o.a)("UPDATE_POSITIONS"),
				E = Object(o.a)("SET_ORDERS"),
				u = Object(o.a)("UPDATE_ORDERS"),
				d = Object(o.a)("SET_TRANSFERS"),
				_ = Object(o.a)("UPDATE_TRANSFERS"),
				O = Object(o.a)("SET_TRADES"),
				T = Object(o.a)("UPDATE_TRADES"),
				I = Object(o.a)("SET_MARKETS"),
				S = Object(o.a)("UPDATE_MARKETS"),
				p = Object(o.a)("SET_FUNDING_PAYMENTS"),
				R = Object(o.a)("UPDATE_FUNDING_PAYMENTS"),
				A = Object(o.a)("SET_FUNDING_PAYMENTS_BY_MARKET"),
				b = Object(o.a)("SET_ORDERBOOK_ORDERS"),
				N = Object(o.a)("UPDATE_BATCH_ORDERBOOK_ORDERS"),
				C = Object(o.a)("SET_ORDERBOOK_LOADED"),
				y = Object(o.a)("UPDATE_FILLS")
		},
		4: function(t, r, a) {
			"use strict";
			let o, i, c, l, E, u, d, _, O, T;
			a.d(r, "c", (function() {
					return o
				})), a.d(r, "b", (function() {
					return i
				})), a.d(r, "g", (function() {
					return c
				})), a.d(r, "f", (function() {
					return l
				})), a.d(r, "h", (function() {
					return E
				})), a.d(r, "e", (function() {
					return u
				})), a.d(r, "d", (function() {
					return d
				})), a.d(r, "a", (function() {
					return _
				})), a.d(r, "i", (function() {
					return O
				})), a.d(r, "j", (function() {
					return T
				})), a.d(r, "k", (function() {
					return I.a
				})),
				function(t) {
					t.ProxyDeposit = "ProxyDeposit", t.ProxyDepositERC20 = "ProxyDepositERC20", t.ProxyDepositETH = "ProxyDepositETH"
				}(o || (o = {})),
				function(t) {
					t.AD = "AD", t.AE = "AE", t.AF = "AF", t.AG = "AG", t.AI = "AI", t.AL = "AL", t.AM = "AM", t.AO = "AO", t.AQ = "AQ", t.AR = "AR", t.AS = "AS", t.AT = "AT", t.AU = "AU", t.AW = "AW", t.AZ = "AZ", t.BA = "BA", t.BB = "BB", t.BD = "BD", t.BE = "BE", t.BF = "BF", t.BG = "BG", t.BH = "BH", t.BI = "BI", t.BJ = "BJ", t.BL = "BL", t.BM = "BM", t.BN = "BN", t.BO = "BO", t.BR = "BR", t.BS = "BS", t.BT = "BT", t.BV = "BV", t.BW = "BW", t.BY = "BY", t.BZ = "BZ", t.CA = "CA", t.CC = "CC", t.CD = "CD", t.CF = "CF", t.CG = "CG", t.CH = "CH", t.CI = "CI", t.CK = "CK", t.CL = "CL", t.CM = "CM", t.CN = "CN", t.CO = "CO", t.CR = "CR", t.CU = "CU", t.CV = "CV", t.CW = "CW", t.CX = "CX", t.CY = "CY", t.CZ = "CZ", t.DE = "DE", t.DJ = "DJ", t.DK = "DK", t.DM = "DM", t.DO = "DO", t.DZ = "DZ", t.EC = "EC", t.EE = "EE", t.EG = "EG", t.EH = "EH", t.ER = "ER", t.ES = "ES", t.ET = "ET", t.FI = "FI", t.FJ = "FJ", t.FK = "FK", t.FM = "FM", t.FO = "FO", t.FR = "FR", t.GA = "GA", t.GB = "GB", t.GD = "GD", t.GE = "GE", t.GG = "GG", t.GH = "GH", t.GI = "GI", t.GL = "GL", t.GM = "GM", t.GN = "GN", t.GQ = "GQ", t.GR = "GR", t.GS = "GS", t.GT = "GT", t.GU = "GU", t.GW = "GW", t.GY = "GY", t.HK = "HK", t.HM = "HM", t.HN = "HN", t.HR = "HR", t.HT = "HT", t.HU = "HU", t.ID = "ID", t.IE = "IE", t.IL = "IL", t.IM = "IM", t.IN = "IN", t.IO = "IO", t.IQ = "IQ", t.IR = "IR", t.IS = "IS", t.IT = "IT", t.JE = "JE", t.JM = "JM", t.JO = "JO", t.JP = "JP", t.KE = "KE", t.KG = "KG", t.KH = "KH", t.KI = "KI", t.KM = "KM", t.KN = "KN", t.KP = "KP", t.KR = "KR", t.KW = "KW", t.KY = "KY", t.KZ = "KZ", t.LA = "LA", t.LB = "LB", t.LC = "LC", t.LI = "LI", t.LK = "LK", t.LR = "LR", t.LS = "LS", t.LT = "LT", t.LU = "LU", t.LV = "LV", t.LY = "LY", t.MA = "MA", t.MC = "MC", t.MD = "MD", t.ME = "ME", t.MF = "MF", t.MG = "MG", t.MH = "MH", t.MK = "MK", t.ML = "ML", t.MM = "MM", t.MN = "MN", t.MO = "MO", t.MP = "MP", t.MR = "MR", t.MS = "MS", t.MT = "MT", t.MU = "MU", t.MV = "MV", t.MW = "MW", t.MX = "MX", t.MY = "MY", t.MZ = "MZ", t.NA = "NA", t.NC = "NC", t.NE = "NE", t.NF = "NF", t.NG = "NG", t.NI = "NI", t.NL = "NL", t.NO = "NO", t.NP = "NP", t.NR = "NR", t.NU = "NU", t.NZ = "NZ", t.OM = "OM", t.PA = "PA", t.PE = "PE", t.PF = "PF", t.PG = "PG", t.PH = "PH", t.PK = "PK", t.PL = "PL", t.PM = "PM", t.PN = "PN", t.PR = "PR", t.PT = "PT", t.PW = "PW", t.PY = "PY", t.QA = "QA", t.RO = "RO", t.RS = "RS", t.RU = "RU", t.RW = "RW", t.SA = "SA", t.SB = "SB", t.SC = "SC", t.SD = "SD", t.SE = "SE", t.SG = "SG", t.SH = "SH", t.SI = "SI", t.SJ = "SJ", t.SK = "SK", t.SL = "SL", t.SM = "SM", t.SN = "SN", t.SO = "SO", t.SR = "SR", t.SS = "SS", t.ST = "ST", t.SV = "SV", t.SX = "SX", t.SY = "SY", t.SZ = "SZ", t.TC = "TC", t.TD = "TD", t.TF = "TF", t.TG = "TG", t.TH = "TH", t.TJ = "TJ", t.TK = "TK", t.TL = "TL", t.TM = "TM", t.TN = "TN", t.TO = "TO", t.TR = "TR", t.TT = "TT", t.TV = "TV", t.TW = "TW", t.TZ = "TZ", t.UA = "UA", t.UG = "UG", t.UM = "UM", t.US = "US", t.UY = "UY", t.UZ = "UZ", t.VA = "VA", t.VC = "VC", t.VE = "VE", t.VG = "VG", t.VI = "VI", t.VN = "VN", t.VU = "VU", t.WF = "WF", t.WS = "WS", t.XK = "XK", t.YE = "YE", t.ZA = "ZA", t.ZM = "ZM", t.ZW = "ZW"
				}(i || (i = {})),
				function(t) {
					t.Daily = "daily", t.Weekly = "weekly"
				}(c || (c = {})),
				function(t) {
					t.CancelOnly = "CANCEL_ONLY", t.CloseOnly = "CLOSE_ONLY", t.Initializing = "INITIALIZING", t.Offline = "OFFLINE", t.Online = "ONLINE", t.PostOnly = "POST_ONLY"
				}(l || (l = {})),
				function(t) {
					t.Diamond = "DIAMOND", t.Platinum = "PLATINUM", t.Gold = "GOLD", t.Silver = "SILVER", t.Bronze = "BRONZE"
				}(E || (E = {})),
				function(t) {
					t.Demotion = "DEMOTION", t.Promotion = "PROMOTION", t.Relegation = "RELEGATION", t.SameLeague = "SAME_LEAGUE"
				}(u || (u = {})),
				function(t) {
					t.Currency = "Currency", t.dYdX = "dYdX", t.NoOp = "NoOp", t.Percent = "Percent", t.Status = "Status"
				}(d || (d = {})),
				function(t) {
					t.Cash = "CASH", t.Hedgie = "HEDGIE", t.Mix = "MIX"
				}(_ || (_ = {})),
				function(t) {
					t.Complied = "COMPLIED", t.Country = "RESTRICTED_COUNTRY", t.FirstOffense = "FIRST_OFFENSE", t.Restricted = "RESTRICTED", t.Transfers = "RESTRICTED_TRANSFER", t.Withdrawals = "RESTRICTED_WITHDRAWAL"
				}(O || (O = {})),
				function(t) {
					t.Username = "username", t.ShareUserAddress = "isSharingAddress", t.PopUpNotifications = "popUpNotifications", t.OrderbookAnimations = "orderbookAnimations", t.SaveOrderAmount = "saveOrderAmount", t.MarketStatsVisibility = "marketStatsVisibility", t.UserTradeOptions = "userTradeOptions", t.HasDoneRestrictionCompliance = "hasDoneRestrictionCompliance", t.OneTimeNotifications = "oneTimeNotifications", t.LatestConcludedEpoch = "latestConcludedEpoch"
				}(T || (T = {}));
			var I = a(12)
		},
		40: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return i
			})), a.d(r, "d", (function() {
				return setLocalStorage
			})), a.d(r, "b", (function() {
				return getLocalStorage
			})), a.d(r, "c", (function() {
				return removeLocalStorage
			}));
			var o = a(22);
			const i = {
					API_KEY_PAIRS: "API_KEY_PAIRS",
					HAS_DISMISSED_STOP_MARKET_WARNING: "HAS_DISMISSED_STOP_MARKET_WARNING",
					HAS_DISMISSED_TAKE_PROFIT_MARKET_WARNING: "HAS_DISMISSED_TAKE_PROFIT_MARKET_WARNING",
					HIDDEN_PROMOTIONS: "HIDDEN_PROMOTIONS",
					LAST_MARKET_USED: "LAST_MARKET_USED",
					LAST_WALLET_USED: "LAST_WALLET_USED",
					MARKET_SELECTOR_DETAILED_VIEW: "MARKET_SELECTOR_DETAILED_VIEW",
					MARKET_SELECTOR_STARRED_MARKETS: "MARKET_SELECTOR_STARRED_MARKETS",
					MARKET_STATS_VISIBILITY: "MARKET_STATS_VISIBILITY",
					SEEN_FILLS: "SEEN_FILLS",
					SEEN_IOS_BETA_ACCEPTANCE: "SEEN_IOS_BETA_ACCEPTANCE",
					SEEN_IOS_BETA_ANNOUNCEMENT: "SEEN_IOS_BETA_ANNOUNCEMENT",
					SEEN_ONBOARDING: "SEEN_ONBOARDING",
					SEEN_PRIVACY_POLICY_UPDATE_03_08_2022: "SEEN_PRIVACY_POLICY_UPDATE_03_08_2022",
					SEEN_SURVEY_1: "SEEN_SURVEY_1",
					SEEN_TRADING_FEE_REDUCTION: "SEEN_TRADING_FEE_REDUCTION",
					SEEN_TRADING_REWARDS_CARD: "SEEN_TRADING_REWARDS_CARD",
					SEEN_VALUE_PROPS: "SEEN_VALUE_PROPS",
					SELECTED_LOCALE: "SELECTED_LOCALE",
					STARK_KEY_PAIRS: "STARK_KEY_PAIRS",
					TV_CHART_CONFIG: "TV_CHART_CONFIG",
					USER_TRADE_OPTIONS: "USER_TRADE_OPTIONS"
				},
				setLocalStorage = ({
					key: t,
					value: r
				}) => {
					const a = JSON.stringify(r);
					try {
						window.localStorage.setItem(t, a)
					} catch (o) {}
				},
				getLocalStorage = ({
					key: t
				}) => {
					let r;
					try {
						let o;
						try {
							o = window.localStorage.getItem(t)
						} catch (a) {
							return null
						}
						r = JSON.parse(o)
					} catch (i) {
						return o.b.notify({
							error: i,
							location: o.a.GET_LOCAL_STORAGE
						}), null
					}
					return r
				},
				removeLocalStorage = ({
					key: t
				}) => {
					try {
						window.localStorage.removeItem(t)
					} catch (r) {}
				}
		},
		403: function(t, r, a) {
			"use strict";
			a.d(r, "c", (function() {
				return getERC20Allowance
			})), a.d(r, "e", (function() {
				return T
			})), a.d(r, "a", (function() {
				return S
			})), a.d(r, "b", (function() {
				return p
			})), a.d(r, "d", (function() {
				return R
			}));
			var o = a(148),
				i = a(80),
				c = a(86),
				l = a(32),
				E = a(358),
				u = a(233),
				d = a(298),
				_ = a(10),
				O = a(85);

			function asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function _asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			}
			const estimateConversionAmount = ({
					decimals: t,
					humanSellAmount: r,
					sellTokenAddress: a,
					slippagePercentage: o
				}) => O.a.exchange.estimateConversionAmount({
					decimals: t,
					humanSellAmount: r,
					sellToken: a,
					slippagePercentage: o
				}),
				getERC20Allowance = ({
					decimals: t,
					ownerAddress: r,
					tokenAddress: a
				}) => O.a.exchange.getERC20Allowance({
					ownerAddress: r,
					spenderAddress: c.b,
					tokenAddress: a,
					decimals: t
				}),
				T = function() {
					var t = _asyncToGenerator((function*({
						tokenAddress: t,
						walletAddress: r
					}) {
						const a = yield Object(d.a)();
						return O.a.exchange.setERC20Allowance({
							tokenAddress: t,
							address: c.b,
							amount: c.e
						}, {
							from: r,
							gasPrice: a,
							confirmationType: o.ConfirmationType.Hash
						})
					}));
					return function setERC20Allowance(r) {
						return t.apply(this, arguments)
					}
				}(),
				I = function() {
					var t = _asyncToGenerator((function*({
						decimals: t,
						gasPrice: r,
						positionId: a,
						registerUserSignature: i,
						sendGaslessTransaction: l,
						starkPublicKey: d,
						tokenAddress: T,
						usdcAmount: I,
						usePredefinedGas: S,
						zeroExResponseObject: p
					}) {
						const R = yield(({
							allowanceTarget: t,
							decimals: r,
							tokenAddress: a
						}) => O.a.exchange.getERC20Allowance({
							ownerAddress: c.b,
							spenderAddress: t,
							tokenAddress: a,
							decimals: r
						}))({
							allowanceTarget: p.allowanceTarget,
							decimals: t,
							tokenAddress: T
						}), A = yield(({
							allowanceTarget: t,
							decimals: r,
							tokenAddress: a
						}) => O.a.exchange.getERC20Allowance({
							ownerAddress: c.h,
							spenderAddress: t,
							tokenAddress: a,
							decimals: r
						}))({
							allowanceTarget: p.allowanceTarget,
							decimals: t,
							tokenAddress: T
						}), b = Object(_.b)(A).isZero(), N = Object(_.b)(R).isZero();
						return l ? u.a.exchange.proxyDepositERC20({
							getExchangeApproval: N,
							getTokenApproval: b,
							starkKey: d,
							positionId: a,
							humanMinUsdcAmount: I,
							registerUserSignature: i,
							zeroExResponseObject: p
						}, {
							confirmationType: o.ConfirmationType.Hash,
							gasLimit: 5e5,
							sendGaslessTransaction: l,
							signatureType: E.a.getSignature(),
							txGas: 5e5
						}) : O.a.exchange.proxyDepositERC20({
							getExchangeApproval: N,
							getTokenApproval: b,
							starkKey: d,
							positionId: a,
							humanMinUsdcAmount: I,
							registerUserSignature: i,
							zeroExResponseObject: p
						}, {
							gas: S ? 5e5 : void 0,
							gasPrice: r,
							confirmationType: o.ConfirmationType.Hash
						})
					}));
					return function depositAndSwapERC20(r) {
						return t.apply(this, arguments)
					}
				}(),
				S = function() {
					var t = _asyncToGenerator((function*({
						amount: t,
						asset: r,
						gasPrice: a,
						isUserRegistered: c,
						positionId: d,
						sendGaslessTransaction: _,
						starkPublicKey: T,
						usdcAmount: S,
						usePredefinedGas: p,
						zeroExResponseObject: R
					}) {
						let A;
						const b = T,
							N = i.c[r],
							C = N.address,
							y = N.decimals;
						if (!c) {
							A = (yield l.c.getRegistrationSignature()).signature
						}
						switch (r) {
							case i.a.USDC:
								return (({
									amount: t,
									gasPrice: r,
									positionId: a,
									registerUserSignature: i,
									sendGaslessTransaction: c,
									starkKey: l,
									usePredefinedGas: d
								}) => c ? u.a.exchange.proxyDeposit({
									humanAmount: t,
									positionId: a,
									registerUserSignature: i,
									starkKey: l
								}, {
									confirmationType: o.ConfirmationType.Hash,
									gasLimit: 4e5,
									sendGaslessTransaction: c,
									signatureType: E.a.getSignature(),
									txGas: 4e5
								}) : O.a.exchange.proxyDeposit({
									humanAmount: t,
									positionId: a,
									registerUserSignature: i,
									starkKey: l
								}, {
									gas: d ? 4e5 : void 0,
									gasPrice: r,
									confirmationType: o.ConfirmationType.Hash
								}))({
									amount: t,
									gasPrice: a,
									positionId: d,
									registerUserSignature: A,
									sendGaslessTransaction: _,
									starkKey: b,
									usePredefinedGas: p
								});
							case i.a.ETH:
								return (({
									gasPrice: t,
									positionId: r,
									registerUserSignature: a,
									starkKey: i,
									usdcAmount: c,
									zeroExResponseObject: l
								}) => O.a.exchange.proxyDepositEth({
									humanMinUsdcAmount: c,
									positionId: r,
									registerUserSignature: a,
									starkKey: i,
									zeroExResponseObject: l
								}, {
									gasPrice: t,
									confirmationType: o.ConfirmationType.Hash
								}))({
									gasPrice: a,
									positionId: d,
									registerUserSignature: A,
									starkKey: b,
									usdcAmount: S,
									zeroExResponseObject: R
								});
							default:
								return I({
									decimals: y,
									gasPrice: a,
									positionId: d,
									registerUserSignature: A,
									sendGaslessTransaction: _,
									starkPublicKey: T,
									tokenAddress: C,
									usdcAmount: S,
									usePredefinedGas: p,
									zeroExResponseObject: R
								})
						}
					}));
					return function depositAsset(r) {
						return t.apply(this, arguments)
					}
				}(),
				p = function() {
					var t = _asyncToGenerator((function*({
						assetAddress: t,
						assetDecimals: r,
						depositInput: a,
						slippage: o
					}, i) {
						const c = Object(_.b)(a),
							l = Object(_.b)(o).div(100).toString();
						i(yield estimateConversionAmount({
							decimals: r,
							humanSellAmount: c,
							sellTokenAddress: t,
							slippagePercentage: l
						}))
					}));
					return function fetchEstimateConversionAmount(r, a) {
						return t.apply(this, arguments)
					}
				}(),
				R = function() {
					var t = _asyncToGenerator((function*({
						depositInput: t,
						selectedAsset: r,
						setConversionInfo: a,
						setDepositWithdrawData: o,
						setIsLoadingExchangeRate: l,
						setSlippage: E,
						slippage: u,
						slippageOptions: d
					}) {
						if (r === i.a.USDC) return;
						const O = Object(_.b)(t);
						u || E(d.DEFAULT);
						const T = Object(_.b)(u).div(100).toString();
						if (O.gt(0)) {
							l(!0);
							const t = i.c[r],
								c = t.address,
								E = t.decimals;
							try {
								const t = yield estimateConversionAmount({
									decimals: E,
									humanSellAmount: O,
									sellTokenAddress: c,
									slippagePercentage: T
								}), r = t.expectedUsdcHumanAmount, i = t.worstUsdcHumanAmount, d = t.zeroExResponseObject;
								o({
									usdcDepositAmount: r
								}), a({
									rate: d.price,
									slippage: u,
									worstUsdcHumanAmount: i,
									zeroExResponseObject: d
								})
							} finally {
								l(!1)
							}
						} else o({
							usdcDepositAmount: ""
						}), a(c.d);
						l(!1)
					}));
					return function handleConversion(r) {
						return t.apply(this, arguments)
					}
				}()
		},
		41: function(t, r, a) {
			"use strict";
			a.d(r, "n", (function() {
				return getWalletBalances
			})), a.d(r, "i", (function() {
				return getNetworkId
			})), a.d(r, "o", (function() {
				return getWalletType
			})), a.d(r, "m", (function() {
				return getWalletAddress
			})), a.d(r, "h", (function() {
				return getIsWalletReady
			})), a.d(r, "g", (function() {
				return getIsWalletInvalid
			})), a.d(r, "f", (function() {
				return getIsWalletIncorrectNetwork
			})), a.d(r, "d", (function() {
				return getHasWalletBeenSelected
			})), a.d(r, "l", (function() {
				return getStarkKeyPair
			})), a.d(r, "a", (function() {
				return getApiKeyPair
			})), a.d(r, "k", (function() {
				return getShouldSaveKeyPairsInLocalStorage
			})), a.d(r, "e", (function() {
				return getIsWalletConnecting
			})), a.d(r, "j", (function() {
				return getOnboardingConnectionError
			})), a.d(r, "b", (function() {
				return getAssetAllowances
			})), a.d(r, "c", (function() {
				return getAssetBalances
			}));
			var o = a(12);
			const getWalletBalances = t => t.wallet.walletBalances,
				getNetworkId = t => t.wallet.networkId,
				getWalletType = t => t.wallet.walletType,
				getWalletAddress = t => {
					var r;
					return null === (r = t.wallet.accounts) || void 0 === r ? void 0 : r[0]
				},
				getIsWalletReady = t => getWalletStatus(t) === o.b.READY,
				getIsWalletInvalid = t => getWalletStatus(t) !== o.b.NOT_LOADED && getWalletStatus(t) !== o.b.READY,
				getIsWalletIncorrectNetwork = t => getWalletStatus(t) === o.b.INCORRECT_NETWORK,
				getHasWalletBeenSelected = t => {
					const r = getWalletStatus(t);
					return r === o.b.INCORRECT_NETWORK || r === o.b.READY
				},
				getWalletStatus = t => {
					var r;
					return t.page.pageLoaded ? t.wallet.isWalletDisconnected ? o.b.DISCONNECTED : t.wallet.isWalletLoaded ? t.wallet.networkId !== Number("1") ? o.b.INCORRECT_NETWORK : 0 === (null === (r = t.wallet.accounts) || void 0 === r ? void 0 : r.length) ? o.b.NO_ACCOUNTS : o.b.READY : o.b.NO_WALLET : o.b.NOT_LOADED
				},
				getStarkKeyPair = t => t.wallet.starkKeyPair,
				getApiKeyPair = t => t.wallet.apiKeyPair,
				getShouldSaveKeyPairsInLocalStorage = t => {
					var r;
					return null === t || void 0 === t || null === (r = t.wallet) || void 0 === r ? void 0 : r.shouldSaveKeyPairsInLocalStorage
				},
				getIsWalletConnecting = t => {
					const r = getWalletType(t),
						a = getWalletStatus(t);
					return !(!r || a !== o.b.NO_WALLET) || a === o.b.NOT_LOADED
				},
				getOnboardingConnectionError = t => {
					var r;
					return null === t || void 0 === t || null === (r = t.wallet) || void 0 === r ? void 0 : r.onboardingConnectionError
				},
				getAssetAllowances = t => t.wallet.assetAllowances,
				getAssetBalances = t => t.wallet.assetBalances
		},
		424: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return WalletIcon
			}));
			var o = a(0),
				i = a.n(o),
				c = a(12);
			const l = {
					[c.c.BitPie]: "/wallets/bitpie.svg",
					[c.c.CloverWallet]: "/wallets/clover-wallet.svg",
					[c.c.CoinbaseWallet]: "/wallets/coinbase-wallet.png",
					[c.c.Coin98]: "/wallets/coin98.svg",
					[c.c.HuobiWallet]: "/wallets/huobi-wallet.svg",
					[c.c.ImToken]: "/wallets/imtoken.svg",
					[c.c.Ledger]: "/wallets/ledger.svg",
					[c.c.OtherWallet]: "/wallets/generic-wallet.svg",
					[c.c.MathWallet]: "/wallets/mathwallet.svg",
					[c.c.MetaMask]: "/wallets/metamask.svg",
					[c.c.Rainbow]: "/wallets/rainbow-wallet.png",
					[c.c.TestWallet]: "/wallets/test-wallet.svg",
					[c.c.TrustWallet]: "/wallets/trust-wallet.svg",
					[c.c.TokenPocket]: "/wallets/tokenpocket.svg",
					[c.c.WalletConnect]: "/wallets/walletconnect.svg"
				},
				WalletIcon = ({
					walletType: t
				}) => {
					const r = l[t];
					if (!r) throw new Error("Unsupported walletType");
					return i.a.createElement("img", {
						src: r,
						alt: ""
					})
				}
		},
		426: function(t) {
			t.exports = JSON.parse('{"GENERAL":{"TIME_STRINGS":{"ALL_TIME":"All Time","DAYS_ABBREVIATED":"d","DAYS":"Days","HOURS_ABBREVIATED":"h","HOURS":"Hours","LAST_24H":"Last 24H","LAST_WEEK":"Last week","MINUTES_ABBREVIATED":"m","MINUTES_SHORT":"Mins","MONTHS_ABBREVIATED":"M","PAST_30D":"Past 30 days","PAST_HOUR":"Past Hour","PAST_MONTH":"Past Month","PAST_THREE_MONTHS":"Past 3 Months","PAST_WEEK":"Past Week","THIS_WEEK":"This week","TODAY":"Today","WEEK":"Week","WEEKS_ABBREVIATED":"w","WEEKS":"Weeks"},"ABOUT":"About","ACCOUNT_LEVERAGE":"Account Leverage","ACCOUNT":"Account","ACTION":"Action","ADVANCED":"Advanced","ALL_MARKETS":"All markets","ALL":"All","AMOUNT":"Amount","ANONYMOUS":"Anonymous","ARE_UNCHANGED":"are unchanged","ARE_YOU_SURE":"Are you sure?","ASSET":"Asset","AVAILABLE":"Available","BACK":"Back","BALANCE":"Balance","BUY":"Buy","BUYING_POWER":"Buying Power","CANCEL":"Cancel","CANCELED":"Canceled","CARDS":"Cards","CATEGORY":"Category","CLEAR":"Clear","CLOSE":"Close","COMPETITION":"Competition","COMPETITIONS":"Competitions","CONFIRM_DEPOSIT":"Confirm deposit","CONFIRM_WITHDRAW":"Confirm withdraw","CONFIRMED":"Confirmed","CONNECT_WALLET":"Connect wallet","CONNECT":"Connect","CONNECTED":"Connected","COPIED":"Copied","CREATED_AT":"Created At","CURRENT":"Current","CUSTOM":"Custom","DAILY":"Daily","DECREASED":"decreased","DECREASING":"Decreasing","DEFAULT":"Default","DEFI":"DeFi","DEGRADED":"Degraded","DEPOSIT_FUNDS":"Deposit funds","DEPOSIT":"Deposit","DEPTH_CHART_SHORT":"Depth","DETAILED_VIEW":"Detailed view","DETAILS":"Details","DIRECTION":"Direction","DISCOUNT":"Discount","DISMISS":"Dismiss","DONE":"Done","EMAIL":"Email","ENDED":"Ended","EQUITY":"Equity","EXPAND_SECTION":"Expand section","EXPAND":"Expand","FAST_WITHDRAW":"Fast Withdraw","FAVORITES":"Favorites","FEES_30D":"Fees (30d)","FEES_PAID":"Fees Paid","FEES":"Fees","FILLS":"Fills","FREE_COLLATERAL":"Free Collateral","FUNDING_RATE_CHART_SHORT":"Funding","GASLESS_DEPOSITS":"Gasless deposits","GENERAL":"General","GO_BACK":"Go back","GO_TO_MARKET":"Go to market","GOVERNANCE":"Governance","HEDGIES":"Hedgies","HIDE_SECTION":"Hide section","HIDE":"Hide","HISTORY":"History","INCREASED":"increased","INCREASING":"Increasing","INITIAL_MARGIN_FRACTION":"Initial Margin Fraction","KEEP_TRADING":"Keep trading","LAYER_1":"Layer 1","LEARN_MORE":"Learn more","LEGACY":"Legacy","LEVERAGE":"Leverage","LIVE":"Live","LONG_POSITION_SHORT":"Long","MAINTENANCE_MARGIN_FRACTION":"Maintenance Margin Fraction","MAKE_ONE_TRADE":"Make 1 trade","MARGIN_USAGE":"Margin Usage","MARGIN":"Margin","MARKET_NAME":"Market Name","MARKET_SEARCH_DOES_NOT_EXIST_YET":"We might not support this asset yet, or it does not yet exist.","MARKET_SEARCH_PLACEHOLDER":"e.g. \u201cETH\u201d or \u201cEthereum\u201d","MARKET":"Market","MARKETS":"Markets","MAX_WITHDRAW":"Max Withdraw","MAX":"Max","MAXIMUM_LEVERAGE":"Maximum Leverage","MENU":"Menu","METRICS":"Metrics","MINIMUM_ORDER_SIZE":"Minimum Order Size","MODIFY":"Modify","NEW":"New","NONE":"None","OPERATIONAL":"Operational","OPTIONAL":"Optional","OR":"or","ORDERS":"Orders","OTHER_DETAILS":"Other details","OTHER":"Other","OVERVIEW":"Overview","PENDING":"Pending","PERPETUALS_UNAVAILABLE_IN_US":"Perpetuals are not available to people or companies who are residents of, or are located, incorporated or have a registered agent in, the United States or a restricted territory. More details can be found in our Terms of Use ","PERPETUALS":"Perpetuals","POSITION":"Position","POWERED_BY":"Powered By","PRICE_CHART_SHORT":"Price","PRICE":"Price","PRIVACY":"Privacy","PROFILE":"Profile","PROFIT_AND_LOSS_ABSOLUTE_BY":"By Profit / Loss","PROFIT_AND_LOSS_ABSOLUTE_LABEL":"Profit / Loss ($)","PROFIT_AND_LOSS_ABSOLUTE":"Absolute P&L","PROFIT_AND_LOSS_PERCENT_BY":"By Profit / Loss (Percent)","PROFIT_AND_LOSS_PERCENT_LABEL":"Profit / Loss (%)","PROFIT_AND_LOSS_PERCENT":"Relative P&L","PROMOTION":"Promotion","QUEUED":"Queued","QUERY_NOT_FOUND":"\u201c{QUERY}\u201d was not found","RANKINGS":"Rankings","RECENT_TRADES_SHORT":"Trades","REFERRAL_CODE":"Referral Code","REFERRALS":"Referrals","REFERRER_PERCENT_OFF":"10% off","RESULTS":"Results","REWARDS":"Rewards","SAVE":"Save","SAVED":"Saved","SELL":"Sell","SEND":"Send","SHARE":"Share","SHORT_POSITION_SHORT":"Short","SIDE":"Side","SIZE":"Size","SLOW_WITHDRAW":"Slow Withdraw","SORT_BY":"Sort by","START_TRADING":"Start trading","STATISTICS":"Statistics","STATUS":"Status","STEP_SIZE":"Step Size","STOP_ORDER_SHORT":"Stop","SWITCH_LEADERBOARD":"Switch leaderboard","TAKE_ME_THERE":"Take me there","TICK_SIZE":"Tick Size","TIER":"Tier","TIME":"Time","TIMESTAMP_ERROR":"Timestamp error","TRADE_AN_AMOUNT":"Trade {AMOUNT}","TRADE":"Trade","TRADER":"Trader","TRADING":"Trading","TRADING_FEE_REDUCTION":"Trading fee reduction","TRADING_FEE_REDUCTION_DESCRIPTION_2":"We\'ve updated our fee structure! Enjoy an up to {REDUCTION} in fees across all tiers.","TRADING_REWARDS":"Trading rewards","TRAILING_STOP_SHORT":"Trailing","TRANSFER":"Transfer","TRANSFER_IN":"Transfer In","TRANSFER_OUT":"Transfer Out","TRANSFERS":"Transfers","TYPE":"Type","UNAVAILABLE":"Unavailable","UNCONFIRMED":"Unconfirmed","UNKNOWN_ERROR":"Unknown error","UNKNOWN":"Unknown","USERNAME":"Username","VIEW":"View","VIEW_DETAILS":"View details","VIEW_LEAGUE":"View League","VIEW_OPTIONS":"View options","VIEWS":"Views","VOLUME_30D":"Volume (30d)","WALLET_BALANCE":"Wallet Balance","WALLET":"Wallet","WEBSITE":"Website","WHITEPAPER":"Whitepaper","WITHDRAW":"Withdraw","YOU":"You"},"ASSET_DESCRIPTIONS":{"0X_PRIMARY_DESCRIPTION":"0x is a professional grade liquidity aggregator protocol that allows users to easily trade ERC20 tokens and other assets. 0x uses a unique hybrid off-chain relay, on-chain settlement architecture to achieve a flexible and gas-efficient experience for traders.","0X_SECONDARY_DESCRIPTION":"ZRX is 0x\'s native governance and staking token, allowing holders to vote on 0x Improvement Proposals (ZEIPs) and influence the development of the protocol. Additionally, ZRX can be staked or delegated to earn liquidity rewards through their market maker liquidity program.","1INCH_PRIMARY_DESCRIPTION":"The 1inch Network unites decentralized protocols whose synergy enables the most lucrative, fastest and protected operations in the DeFi space.","1INCH_SECONDARY_DESCRIPTION":"The initial protocol of the 1inch Network is a DEX aggregator solution that searches deals across multiple liquidity sources, offering users better rates than any individual exchange. This protocol incorporates the Pathfinder algorithm which finds the best paths among different markets over 50+ liquidity sources on Ethereum and 20+ liquidity sources on Binance Smart Chain. In less than two years the 1inch DEX aggregator surpassed $30B in overall volume.","AAVE_PRIMARY_DESCRIPTION":"Aave is an open-source and non-custodial protocol to earn interest on deposits and borrow assets.","AAVE_SECONDARY_DESCRIPTION":"Aave is a decentralised non-custodial liquidity market protocol where users can participate as depositors or borrowers. Depositors provide liquidity to the market to earn a passive income, while borrowers are able to borrow in an overcollateralised (perpetually) or undercollateralised (one-block liquidity) fashion.","ALGORAND_PRIMARY_DESCRIPTION":"Algorand removes the technical barriers that for years undermined mainstream blockchain adoption: decentralization, scale, and security.","ALGORAND_SECONDARY_DESCRIPTION":"Algorand uses a Permissionless, Pure Proof of Stake consensus mechanism, ensuring full participation, protection, and speed within a truly decentralized network. Additionally, Algorand is the first blockchain to offer immediate transaction finality alongside a throughput of up to 1,000 transactions per second.","AVAX_PRIMARY_DESCRIPTION":"Avalanche is an open-source platform for launching highly decentralized applications, new financial primitives, and new interoperable blockchains.","AVAX_SECONDARY_DESCRIPTION":"Developers who build on Avalanche can easily create powerful, reliable, and secure applications and custom blockchain networks with complex rulesets, or build on existing private or public subnets.","BITCOIN_CASH_PRIMARY_DESCRIPTION":"With Bitcoin Cash, you can send money to anyone, anywhere in the world, 24 hours a day, 365 days a year. Like the Internet itself, the network is always on.","BITCOIN_CASH_SECONDARY_DESCRIPTION":"Bitcoin Cash offers more privacy and anonymity than traditional payment systems like bank transfers and credit card payments, since it\u2019s normally impossible to know who controls a Bitcoin address. Bitcoin Cash offers various levels of privacy depending on how it is used. It\u2019s important to educate yourself thoroughly before using BCH for privacy purposes.","BITCOIN_PRIMARY_DESCRIPTION":"Bitcoin is a decentralized digital currency, without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.","BITCOIN_SECONDARY_DESCRIPTION":"Transactions are verified by a network nodes through cryptography and recorded in a public distributed ledger called a blockchain. Bitcoins are created as a reward for a process known as mining. They can be exchanged for other currencies, products, and services.","CARDANO_PRIMARY_DESCRIPTION":"Cardano is a proof-of-stake blockchain platform: the first to be founded on peer-reviewed research and developed through evidence-based methods. It combines pioneering technologies to provide unparalleled security and sustainability to decentralized applications, systems, and societies.","CARDANO_SECONDARY_DESCRIPTION":"With a leading team of engineers, Cardano exists to redistribute power from unaccountable structures to the margins \u2013 to individuals \u2013 and be an enabling force for positive change and progress.","CELO_PRIMARY_DESCRIPTION":"Celo is a proof-of-stake blockchain that offers full EVM compatibility.","CELO_SECONDARY_DESCRIPTION":"CELO also offers users access to native and non-native stablecoins, an ultralight mobile client, and gas payable in multiple currencies.","CHAINLINK_PRIMARY_DESCRIPTION":"Chainlink connects smart contracts on any blockchain to data providers, web APIs, enterprise systems, cloud services, IoT devices, payment systems, and other blockchains.","CHAINLINK_SECONDARY_DESCRIPTION":"Chainlink expands the capability of smart contracts by enabling access to real-world data, events, payments, and more without sacrificing the security and reliability guarantees inherent to blockchain technology.","COMPOUND_PRIMARY_DESCRIPTION":"Compound is an algorithmic, autonomous interest rate protocol built for developers, to unlock a universe of open financial applications.","COMPOUND_SECONDARY_DESCRIPTION":"Suppliers (and borrowers) of an asset interact directly with the protocol, earning (and paying) a floating interest rate, without having to negotiate terms such as maturity, interest rate, or collateral with a peer or counterparty.","COSMOS_PRIMARY_DESCRIPTION":"Cosmos is an ever-expanding ecosystem of interconnected apps and services, built for a decentralized future.","COSMOS_SECONDARY_DESCRIPTION":"Cosmos apps and services connect using IBC, the Inter-Blockchain Communication protocol. This innovation enables you to freely exchange assets and data across sovereign, decentralized blockchains.","CURVE_PRIMARY_DESCRIPTION":"Curve is an exchange liquidity pool on Ethereum (like Uniswap) designed for extremely efficient stablecoin trading and low risk, supplemental fee income for liquidity providers, without an opportunity cost.","CURVE_SECONDARY_DESCRIPTION":"Curve allows users (and smart contracts like 1inch, Paraswap, Totle and Dex.ag) to trade between DAI and USDC with a bespoke low slippage, low fee algorithm designed specifically for stablecoins and earn fees.","DOGECOIN_PRIMARY_DESCRIPTION":"Dogecoin is an open source peer-to-peer digital currency.","DOGECOIN_SECONDARY_DESCRIPTION":"Forked from Litecoin, Dogecoin is a cryptocurrency based on the popular \\"Doge\\" Internet meme and features a Shiba Inu on its logo.","ENJ_PRIMARY_DESCRIPTION":"Enjin has crafted simple products to help you manage your NFTs and cryptocurrencies\u2014and get involved with the new, rapidly growing virtual economy.","ENJ_SECONDARY_DESCRIPTION":"ENJ\xa0is used to infuse digital assets like NFTs. It powers NFTs as they move across games, apps, marketplaces, and wallets. Every asset minted contains ENJ, giving it real-world value that can be retrieved at any time through \\"melting.\\"","EOS_PRIMARY_DESCRIPTION":"EOSIO is a highly performant open-source blockchain platform, built to support and operate safe, compliant, and predictable digital infrastructures.","EOS_SECONDARY_DESCRIPTION":"An open-source platform for blockchain innovation and performance - businesses and developers around the world use EOSIO to create secure, transparent, and deterministic digital infrastructures.","ETC_PRIMARY_DESCRIPTION":"Ethereum Classic is a hard fork of Ethereum that launched in July 2016. It functions as a smart contract network, with the ability to host and support decentralized applications.","ETC_SECONDARY_DESCRIPTION":"ETC launched with the goal of preserving a primary value proposition of blockchain smart contract platforms: \\"Code is Law\\". The hard fork was the result of a belief that the majority of blockchain protocols, including Ethereum, have deviated from this core principle.","ETHEREUM_PRIMARY_DESCRIPTION":"Ethereum is a global, open-source platform for decentralized applications.","ETHEREUM_SECONDARY_DESCRIPTION":"Ethereum is a decentralized blockchain platform founded in 2014. Ethereum is an open-source project that is not owned or operated by a single individual. This means that anyone, anywhere can download the software and begin interacting with the network. Ethereum allows developers to make and operate \'smart contracts\', a core piece of infrastructure for any decentralized application.","FILECOIN_PRIMARY_DESCRIPTION":"Filecoin is a decentralized storage network designed to store humanity\u2019s most important information.","FILECOIN_SECONDARY_DESCRIPTION":"The Filecoin network is made up of a large number of diverse storage providers and developers. This creates a robust and reliable service, while cryptographic proofs guarantee your data remains available and unchanged over time.","ICP_PRIMARY_DESCRIPTION":"The DFINITY Foundation is a not for profit organization that develops the Internet Computer, a public blockchain network designed to host smart contracts.","ICP_SECONDARY_DESCRIPTION":"ICP is the native cryptocurrency of the platform.","LITECOIN_PRIMARY_DESCRIPTION":"Litecoin is a peer-to-peer Internet currency that enables instant, near-zero cost payments to anyone in the world.","LITECOIN_SECONDARY_DESCRIPTION":"Litecoin is an open source, global payment network that is fully decentralized. Litecoin features faster transaction confirmation times and improved storage efficiency than the leading math-based currency. With substantial industry support, trade volume and liquidity, Litecoin is a proven medium of commerce complementary to Bitcoin.","LUNA_PRIMARY_DESCRIPTION":"Terra is a public blockchain protocol deploying a suite of algorithmic decentralized stablecoins which underpin a thriving ecosystem that brings DeFi to the masses.","LUNA_SECONDARY_DESCRIPTION":"LUNA is the Terra protocol\u2019s native staking token that absorbs the price volatility of Terra.","MAKER_PRIMARY_DESCRIPTION":"The Maker Protocol, also known as the Multi-Collateral Dai (MCD) system, allows users to generate Dai by leveraging collateral assets approved by \u201cMaker Governance.\u201d Maker Governance is the community organized and operated process of managing the various aspects of the Maker Protocol. ","MAKER_SECONDARY_DESCRIPTION":"Dai is a decentralized, unbiased, collateral-backed cryptocurrency soft-pegged to the US Dollar. Resistant to hyperinflation due to its low volatility, Dai offers economic freedom and opportunity to anyone, anywhere.","MONERO_PRIMARY_DESCRIPTION":"Monero is the leading cryptocurrency focused on private and censorship-resistant transactions.","MONERO_SECONDARY_DESCRIPTION":"Unlike selectively transparent alternatives (e.g. Zcash), Monero is the only cryptocurrency where every user is anonymous by default. The sender, receiver, and amount of every single transaction are hidden through the use of three important technologies: Stealth Addresses, Ring Signatures, and RingCT.","NEAR_PRIMARY_DESCRIPTION":"NEAR is a development platform built on a sharded, proof-of-stake, layer-one blockchain designed for usability.","NEAR_SECONDARY_DESCRIPTION":"The NEAR token is used to secure the network via its proof-of-stake mechanism.","POLKADOT_PRIMARY_DESCRIPTION":"Polkadot is built to connect private and consortium chains, public and permissionless networks, oracles, and future technologies that are yet to be created. Polkadot facilitates an internet where independent blockchains can exchange information and transactions in a trustless way via the Polkadot relay chain.","POLKADOT_SECONDARY_DESCRIPTION":"Polkadot makes it easier than ever to create and connect decentralized applications, services, and institutions. By empowering innovators to build better solutions, we seek to free society from its reliance on a broken web where its large institutions can\u2019t violate our trust.","POLYGON_PRIMARY_DESCRIPTION":"Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. Aggregating scalable solutions on Ethereum supporting a multi-chain Ethereum ecosystem.","POLYGON_SECONDARY_DESCRIPTION":"Polygon combines the best of Ethereum and sovereign blockchains into a open, secure, full-fledged multi-chain system that is able to fully benefit from Ethereum\u2019s network effects","RUNE_PRIMARY_DESCRIPTION":"Thorchain is a decentralized and autonomous cross-chain liquidity network.","RUNE_SECONDARY_DESCRIPTION":"RUNE is the asset which powers the THORChain ecosystem and provides the economic incentives required to secure the network economically.","SOLANA_PRIMARY_DESCRIPTION":"Solana is a fast, secure, and censorship resistant blockchain providing the open infrastructure required for global adoption.","SOLANA_SECONDARY_DESCRIPTION":"Solana is an open source project implementing a new, high-performance, permissionless blockchain. The Solana Foundation is based in Geneva, Switzerland and maintains the open source project.","STELLAR_PRIMARY_DESCRIPTION":"Stellar is an open network for storing and moving money.","STELLAR_SECONDARY_DESCRIPTION":"Stellar makes it possible to create, send, and trade digital representations of all forms of money: dollars, pesos, bitcoin, pretty much anything. It\u2019s designed so all the world\u2019s financial systems can work together on a single network.","SUSHISWAP_PRIMARY_DESCRIPTION":"SushiSwap is an automated market making decentralized exchange currently operating on Ethereum.","SUSHISWAP_SECONDARY_DESCRIPTION":"SushiSwap is a community run project that is governed by vote of its token holders. Core products include Exchange, Liquidity Pools, Farms, and SushiBar Staking.","SYNTHETIX_PRIMARY_DESCRIPTION":"Synthetix is a decentralised synthetic asset issuance protocol built on Ethereum.","SYNTHETIX_SECONDARY_DESCRIPTION":"Synthetix allows users to capture the price movements of popular cryptopcurrencies, fiat currencies, stocks, commodities and more with zero slippage. Synthetic assets or Synths, are assets voted into existence by the community which represent the price of different types of assets.","TRX_PRIMARY_DESCRIPTION":"TRON is a public blockchain dedicated to providing the underlying infrastructure that enables developers to create smart contracts and decentralized applications, freely publish, own, and store data & other content.","TRX_SECONDARY_DESCRIPTION":"TRON relies on a Delegated Proof-of-Stake (DPoS) mechanism in which 27 Super Representatives rotate every 6 hours to validate blocks and transactions.","UMA_PRIMARY_DESCRIPTION":"UMA is open-source infrastructure for deploying and enforcing synthetic assets on Ethereum.","UMA_SECONDARY_DESCRIPTION":"UMA builds open-source infrastructure for \\"priceless\\" financial contracts on Ethereum in the form of two technologies: priceless financial contract templates used to create synthetic tokens, and a decentralized oracle service used to manage and enforce contracts on UMA.","UNISWAP_PRIMARY_DESCRIPTION":"Uniswap is a decentralized protocol for automated liquidity provision on Ethereum.","UNISWAP_SECONDARY_DESCRIPTION":"Uniswap is a protocol for exchanging ERC-20 tokens on Ethereum. It eliminates trusted intermediaries and unnecessary forms of rent extraction, allowing for fast, efficient trading.","XTZ_PRIMARY_DESCRIPTION":"Tezos is an open-source platform for assets and applications that can evolve by upgrading itself.","XTZ_SECONDARY_DESCRIPTION":"By design, Tezos embraces long-term upgradability, open participation, collaboration, and smart contract safety. Tezos is a Proof of Stake blockchain.","YEARN_FINANCE_PRIMARY_DESCRIPTION":"Yearn Finance is a suite of products in Decentralized Finance (DeFi) that provides lending aggregation, yield generation, and insurance on the Ethereum blockchain.","YEARN_FINANCE_SECONDARY_DESCRIPTION":"The protocol is maintained by various independent developers and is governed by YFI holders.","ZCASH_PRIMARY_DESCRIPTION":"Zcash is a digital currency - fast and confidential with low fees. ","ZCASH_SECONDARY_DESCRIPTION":"Zcash gives you the option of confidential transactions and financial privacy through shielded addresses. Zero-knowledge proofs allow transactions to be verified without revealing the sender, receiver or transaction amount. Selective disclosure features within Zcash allow a user to share some transaction details, for purposes of compliance or audit."},"HEADER":{"API_DOCUMENTATION":"API Documentation","CHAT":"Chat","COMMUNITY":"Community","COMPATIBILITY":"Compatibility","COMPETITION_TERMS":"Competition Terms","COPY_ADDRESS":"Copy address","DISCONNECT":"Disconnect","DOCUMENTATION":"Documentation","EXCHANGE_METRICS":"Metrics","EXCHANGE_STATUS":"Status","FEEDBACK":"Feedback","GASLESS_DEPOSIT_RULES":"Gasless Deposits","HELP":"Help","HELP_CENTER":"Help center","HELP_CHAT":"Help Chat","MAINNET":"Mainnet","LEAGUE_RULES":"League Rules","MORE":"More","NOTIFICATIONS":"Notifications","OFF":"Off","ON":"On","OPEN_IN_ETHERSCAN":"Open in Etherscan","TERMS_OF_USE":"Terms of Use","TESTNET":"Testnet"},"WALLETS":{"BITPIE":"BitPie","CLOVER_WALLET":"Clover Wallet","COINBASE_WALLET":"Coinbase Wallet","COIN98":"Coin98","HUOBI_WALLET":"Huobi Wallet","IMTOKEN":"imToken","LEDGER":"Ledger","MATH_WALLET":"MathWallet","METAMASK":"MetaMask","RAINBOW_WALLET":"Rainbow","TOKEN_POCKET":"TokenPocket","TRUST_WALLET":"Trust","WALLET_CONNECT":"WalletConnect","TEST_WALLET":"Test Wallet","OTHER_WALLET":"Other"},"ONBOARDING":{"ABOUT_WALLETS":"About wallets","ACKNOWLEDGE_TERMS":"Acknowledge terms","API_KEYS_NOT_FOUND":"API Key not found","APPEARS_OUTSIDE_ACCESS":"It appears that you are accessing dYdX from outside the United States or a restricted territory. You hereby agree, represent and warrant that:","COMPLETE_ONBOARDING":"Complete onboarding","CONFIRM_OWNERSHIP":"Confirm you are the owner of this wallet","CONNECT_YOUR_WALLET_EXTENDED":"Connect your Ethereum wallet to deposit funds & start trading.","CONNECT_YOUR_WALLET_SEARCH":"Search wallets...","CONNECT_YOUR_WALLET":"Connect your wallet","CONNECTING":"Connecting...","COULD_NOT_FIND_AFFILIATE":"We couldn\'t find this affiliate, please check the link.","DONT_MISS":"Don\'t miss your chance to get a {DISCOUNT} on trading fees!","ENABLE_API":"Enable secure access to our API for lightning quick trading","ENABLE_TRADING":"Enable trading","FINISH_ONBOARDING_DESCRIPTION":"Complete the onboarding flow to start trading on dYdX","GASLESS_ONBOARDING_RULES":"Gasless Onboarding Rules","GET_STARTED":"Get started","HAVING_TROUBLE":"Having trouble?","I_AGREE":"I agree","INVITED_YOU":"has referred you to start trading on the world\'s most powerful open exchange.","JOIN_ME":"Join me on dYdX to receive a {DISCOUNT} on all trading fees!","LEDGER_DERIVATION_PATH":"Path","LEGACY_SIGNING":"Legacy signing","LINK_WALLET":"Link wallet","MISSING_KEYS_DESCRIPTION":"Welcome back! One or more of your keys needs to be recovered","NO_FUTURE_ACCESS":"You will not in the future access this site or trade on dYdX while located within the United States or a restricted location.","NO_VPN_USE":"You are not using, and will not in the future use, a VPN to mask your physical location from a restricted location.","NOT_A_RESIDENT":"You are not a person or company who is a resident of, or is located, incorporated or has a registered agent in, the United States or a restricted location.","NOT_SUPPORTED_DESCRIPTION":"Your wallet does not support the latest signing standard (common issue with hardware wallets). Try a legacy signing method with the button below.","NOT_SUPPORTED":"Not supported","ONBOARDING":"Onboarding","PERMITTED_TO_USE":"You are lawfully permitted to access this site and trade on dYdX under the laws of the jurisdiction in which you reside and are located.","PRIVACY_POLICY":"Privacy Policy","RECOVER_KEYS":"Recover keys","REFERRAL_DISCOUNT":"{DISCOUNT} discount","REGISTER":"Register","REMEMBER_ME":"Remember me","SEARCHING_FOR_LEDGER_DESCRIPTION":"Make sure your ledger is unlocked with the Ethereum app open","SEARCHING_FOR_LEDGER":"Searching for Ledger...","SELECT_A_LANGUAGE":"Select a language","SELECT_ACCOUNT_DESCRIPTION":"Select the account to use with dYdX","SELECT_ACCOUNT":"Select account","SEND_REQUEST":"Send request","SEND_REQUESTS":"Send requests","SET_UP_ACCOUNT":"Set up account","SKIP_FOR_NOW":"Skip for now","START_TRADING_BLURB":"Start trading on the world\'s most powerful open exchange.","TRY_AGAIN":"Try again","TWO_SIGNATURE_REQUESTS":"You will receive two signature requests. Signing is free and will not send a transaction.","UNDERSTAND_RISKS":"You understand the risks associated with entering into perpetual contracts and using leverage.","VALUE_PROP_ADVANCED_DESC":"Trade with leverage and manage risk using advanced tools","VALUE_PROP_ADVANCED":"Advanced","VALUE_PROP_LIQUID_DESC":"World-class liquidity on the most popular pairs","VALUE_PROP_LIQUID":"Liquid","VALUE_PROP_REWARDS_DESC":"Earn $DYDX rewards for each trade you make on the platform*","VALUE_PROP_TRUSTLESS_DESC":"Built with open-source, audited smart contracts on Ethereum","VALUE_PROP_TRUSTLESS":"Trustless","VERIFY_OWNERSHIP":"Verify ownership","WELCOME_DYDX":"Welcome to dYdX","WELCOME":"Welcome","WRONG_NETWORK_EXPLANATION_PRODUCTION":"To complete dYdX onboarding, set your wallet network to \'Ethereum Mainnet\'.","WRONG_NETWORK_EXPLANATION_STAGING":"To complete dYdX onboarding, set your wallet network to \'Ropsten Test Network\'.","WRONG_NETWORK":"Wrong network","YOU_AGREE_TO_TERMS":"By trading on dYdX, you agree to the {TERMS_LINK}, {PRIVACY_POLICY_LINK} and {GASLESS_DEPOSIT_RULES}."},"SIGN_INTO_MOBILE":{"TITLE_SIGN_INTO_MOBILE":"Sign into mobile","TITLE_SCAN_FROM_APP":"Scan from app","TITLE_CONNECTED":"Connected","TITLE_FAILED_TO_CONNECT":"Failed to connect","DESCRIPTION_ABOUT_TO_TRANSFER":"You are about to transfer your keys via QR code to the mobile app.","DESCRIPTION_NEVER_SHARE":"Never share this code with anyone. dYdX will never ask you for this.","WAIT_SECONDS":"Wait {SECONDS} seconds...","WAIT_SECONDS_SINGULAR":"Wait {SECONDS} second...","SYNC_WITH_DESKTOP":"Sync with Desktop","WHILE_ONBOARDING":"While onboarding to the mobile app, select the {SYNC_WITH_DESKTOP} option.","NEVER_SHARE":"Never ever share this code with anyone!","READY":"Ready to scan?","NOT_READY":"Not in a safe place?","SHOW_CODE":"Show code","HIDE_CODE":"Hide code","CLICK_TO_SHOW":"Click to show"},"LEGAL":{"GOVERNANCE_LINK_DESCRIPTION":"To participate in governance, you will leave the dYdX Trading Inc. website and join a website made available by dYdX Foundation, which is independent from and unaffiliated with dYdX Trading Inc. dYdX Trading Inc. is not responsible for any action taken or content on the third-party website.","LEAVING_WEBSITE":"Leaving website"},"DEPOSIT_MODAL":{"ENABLE_FOR_THIS_DEPOSIT":"Enable for this deposit","ENABLE_SYMBOL_ON_DYDX":"Enable {SYMBOL} on dYdX","ENABLE_SYMBOL":"Enable {SYMBOL}","ENABLING_SYMBOL":"Enabling {SYMBOL}...","EXCHANGE_RATE":"Exchange Rate","GASLESS_DEPOSITS_DESCRIPTION_PLURAL":"You have {NUM_DEPOSITS} gasless deposits available.","GASLESS_DEPOSITS_DESCRIPTION_SINGULAR":"You have {NUM_DEPOSITS} gasless deposit available.","GASLESS_DEPOSITS_RESET":"Your gasless deposit limit resets every three days.","GASLESS_DEPOSITS_TEMPORARILY_DISABLED":"Gasless deposits are temporarily unavailable. Don\'t worry, they\'ll be back soon!","GASLESS_ETH_DEPOSITS":"Gasless deposits are not available for ETH. You can convert your ETH to WETH on {1INCH_WETH_LINK} or {UNISWAP_WETH_LINK} and use WETH gasless deposits, or directly deposit ETH by paying your own gas costs.","MAX_SLIPPAGE":"Max Slippage","MINIMUM_DEPOSIT_MET":"Nice! Your deposit meets the gasless deposit minimum of {GASLESS_DEPOSIT_THRESHOLD} {SYMBOL}. dYdX will cover the gas fees for this deposit.","MINIMUM_DEPOSIT_UNMET":"Your deposit amount is below the gasless deposit minimum. Deposit more than {GASLESS_DEPOSIT_THRESHOLD} {SYMBOL} and dYdX will pay the gas fees for this deposit. You can also continue with this deposit and pay your own gas fees.","SET_ALLOWANCE_EXPLANATION":"You must enable {SYMBOL} the first time you deposit on dYdX. You will only have to do this once.","SETTING_ALLOWANCE_EXPLANATION":"You will be able to deposit once your enable {SYMBOL} transaction confirms. You only have to do this once per asset.","SLIPPAGE":"Slippage","SUBJECT_TO_RULES":"Subject to these rules","SWAP":"Swap"},"WITHDRAW_MODAL":{"FAST":"Fast","FAST_WITHDRAW_CONFIRMATION":"A fee of {FEE} will be collected for this fast withdraw. Your funds will be sent immediately and will appear in your wallet once the withdraw transaction has confirmed.","SLOW":"Slow","SLOW_WITHDRAW_DESCRIPTION":"Slow withdraws are a two step process. This step initiates your withdraw request and will be processed on Layer 2. Once your funds are ready (can take up to {HOURS} hours), you will receive a notification to withdraw your funds to your wallet. You are responsible for the withdraw transaction gas fees.","SLOW_WITHDRAW_CONFIRMATION":"This {STYLED_SLOW} withdraw may take up to {HOURS} hours before it is available to withdraw. You will be responsible for the withdraw transaction gas fees. If you need your funds sooner, try a {STYLED_FAST} withdraw.","WITHDRAW_IRREVERSIBLE":"Initiating a withdraw is irreversible."},"FEEDBACK_MODAL":{"FEEDBACK_PLACEHOLDER":"Tell us how we can build a better trading experience for you. For questions or bug reports, please use the help chat.","GIVE_FEEDBACK":"Give feedback"},"PREFERENCES_MODAL":{"POP_UP_NOTIFICATIONS":"Pop-up notifications","PREFERENCES":"Preferences","ORDERBOOK_ANIMATIONS":"Orderbook animations","PROFILE_SHARE_USERNAME":"Show my username","PROFILE_SHARE_ADDRESS":"Show my wallet address","SAVE_ORDER_AMOUNT":"Save order amount"},"MORE_LINKS_MODAL":{"DOCUMENTATION_DESCRIPTION":"Trade with our API","COMMUNITY_DESCRIPTION":"Chat with other traders","TERMS_OF_USE_DESCRIPTION":"Rules for using the platform","PRIVACY_POLICY_DESCRIPTION":"Our policies around data","GASLESS_DEPOSIT_RULES_DESCRIPTION":"Gasless deposit promo rules","COMPETITION_TERMS_DESCRIPTION":"Trading competition terms","LEAGUE_RULES_DESCRIPTION":"Trading league rules","EXCHANGE_METRICS_DESCRIPTION":"Key data and charts","EXCHANGE_STATUS_DESCRIPTION":"Outages and exchange maintenance"},"HELP_MODAL":{"API_DOCUMENTATION_DESCRIPTION":"Trade programmatically with our API","HELP_CENTER_DESCRIPTION":"Explore tutorials and help articles","JOIN_DISCORD":"Join Discord","JOIN_DISCORD_DESCRIPTION":"Chat with our community of traders","LIVE_CHAT":"Live chat","LIVE_CHAT_DESCRIPTION":"Get live support and help","PROVIDE_FEEDBACK":"Provide feedback","PROVIDE_FEEDBACK_DESCRIPTION":"Product feedback and requests"},"PORTFOLIO":{"ABOUT_TRADING_DATA_DESCRIPTION":"See how your trading data is used to calculate rewards.","ABOUT_TRADING_DATA":"About Trading Rewards Data","ACTIVE_EPOCH":"Active epoch","ALLOCATION":"Allocation","AVERAGE_OPEN_INTEREST":"Average Open Interest","CAN_BE_CLAIMABLE_BY_YOU":"can be claimable by you","CLAIM_DATA_DESCRIPTION":"Data used to calculate Retroactive Rewards of DYDX. Retroactive rewards are provided by the dYdX Foundation.","CLAIM_DATA":"Retroactive Rewards Data","COMPILING":"Compiling data...","COUNTDOWN":"Countdown","CURRENT_EPOCH":"Current epoch","CURRENTLY_HELD":"currently held","DISCOVER_NEW_ASSETS":"Discover new assets available to trade on dYdX","DOWNLOAD_CSV":"Download as .csv","EARN_DYDX_FOR_TRADING_DESCRIPTION":"Trading rewards are distributed by the dYdX Foundation.","EARN_DYDX_FOR_TRADING":"Earn DYDX for trading","EPOCH_NUMBER":"Epoch {EPOCH_NUMBER}","ESTIMATED_FOR_THIS_EPOCH":"estimated for this epoch","ESTIMATED_REWARDS":"Estimated Rewards","ESTIMATED_UNLOCKED_REWARDS":"estimated unlocked rewards","EXPORT":"Export","FEE_DISCOUNT":"Fee Discount","FEE_STRUCTURE":"Fee Structure","GASLESS_DEPOSITS_NEW_PROMO":"If your first deposit is $1000 or more, dYdX will pay your deposit gas fees!","GASLESS_DEPOSITS_PROMO":"Enjoy zero gas costs on your deposit of $2000 or more, once every three days.","HOLDING":"Holding {NUMBER}","IN_THIS_EPOCH":"in this epoch","MARKET_NOW_LIVE":"{SYMBOL} now live","NONE_HELD":"None held","OPEN_INTEREST_LABEL":"in open positions on dYdX","OVER_THE_LAST_30_DAYS":"over the last 30 days","PORTFOLIO_VALUE":"Portfolio Value","PORTFOLIO":"Portfolio","PROMOTION_RULES":"Promotion rules","READ_ANNOUNCEMENT":"Read announcement","RETROACTIVE_REWARDS":"Retroactive Rewards","REWARDS_BOOST":"Rewards Boost","REWARDS_BOOST_LABEL":"for holding {AMOUNT} staked {ASSET}","REWARDS_MADE_AVAILABLE":"All rewards are made available through {FOUNDATION_LINK}.","REWARDS_NOT_PROVIDED":"Rewards are not provided by dYdX Trading Inc.","REWARDS_UPDATE":"Rewards update","SEARCH_MARKETS":"Search markets","STOP_MARKET_ORDERS":"Stop market orders","STOP_MARKET_ORDERS_DESCRIPTION":"Stop market and take profit market orders are here! Quickly and easily set triggers to limit your losses and lock in profits.","TARGET_VOLUME":"Target Volume","TESTNET_DEPOSIT_PROMO":"Free, one-click testnet deposits are now available on our Ropsten app.","TESTNET_LOWERCASE":"Testnet app","TRADES_LABEL":"executed in the last 24h","TRADING_COMPETITION":"Trading Competition","TRADING_DATA_DESCRIPTION":"Data used to calculate Trading Rewards of DYDX. Trading rewards are provided by the dYdX Foundation.","TRADING_DATA":"Trading Rewards Data","TRADING_FORMULA_DESCRIPTION":"The following combination of fees paid and average open interest determines the DYDX rewards that are available to you each epoch from the smart contracts {FOUNDATION_LINK} deployed.","TRADING_FORMULA_UPDATE_DESCRIPTION":"Staking DYDX now increases token rewards earned from trading.","TRADING_FORMULA_UPDATE":"Trading rewards update","TRADING_FORMULA":"Trading Rewards Formula","TRADING_LEAGUES":"Trading leagues","TRADING_LEAGUES_DESCRIPTION":"Trading leagues are now live! Climb the rankings and earn your share of the {PRIZE}.","TRADING_LEAGUES_PRIZE":"$100K weekly prize pool","TRADING_VOLUME_LABEL":"exchanged in the last 24h","TRADING_VOLUME":"Trading Volume","TRAILING_VOLUME":"Trailing Volume","TRANSACTION":"Transaction","UNLOCKED_ENTIRE_ALLOCATION":"Allocation unlocked, claim at end of epoch","UNLOCKED":"unlocked","UNTIL_NEXT_EPOCH_ON_DATE":"until the next epoch on {NEXT_EPOCH_DATE}.","VIEW_FEE_STRUCTURE":"View fee structure","VIEW_REWARDS":"View rewards"},"TRADE":{"AMOUNT_FILLED":"Filled","ANNUALIZED":"Annualized","AVERAGE_CLOSE":"Average Close","AVERAGE_OPEN":"Average Open","BASELINE_POSITION_SIZE":"Baseline Position Size","CANCEL_ALL":"Cancel all","CANCEL_ORDER":"Cancel order","CANCEL_REASON":"Cancel Reason","CANCELED_ON_CHAIN":"Canceled on chain","CHANGE_24H":"24h Change","CLEAN_UP":"Clean up","CLOSE_POSITION":"Close position","COULD_NOT_FILL":"Could not fill","CURRENT_ANNUALIZED_RATE":"Current Annualized Rate","CURRENT_RATE_1H":"Current 1h Rate","CURRENT_RATE_8H":"Current 8h Rate","CURRENTLY_TRADING_ROPSTEN":"You are trading on our Ropsten testnet app with test funds. Create an account on our mainnet app to start trading with real funds","EXECUTION":"Execution","EXPECTED_PRICE":"Expected Price","EXPIRED":"Expired","FAILED":"Failed","FEE_AMOUNT":"Fee Amount","FEE_PERCENT":"Fee Percent","FEE":"Fee","FILL_OR_KILL":"Fill Or Kill","FILLS_EMPTY_STATE":"You have no fills.","FUNDING_PAYMENTS_EMPTY_STATE":"You have no past funding payments.","FUNDING_PAYMENTS_SHORT":"Funding","FUNDING_PAYMENTS":"Funding Payments","FUNDING_RATE_1H_SHORT":"1h Funding","FUNDING_RATE":"Funding Rate","GOOD_TIL_DATE_ABBREVIATED":"Good Til","GOOD_TIL_TIME":"Good Til Time","GOOD_TIL":"Good Til","IMMEDIATE_OR_CANCEL":"Immediate Or Cancel","IMMEDIATE_OR_CANCEL_PARTIALLY_FILLED":"Immediate or cancel partially filled","INCREMENTAL_INITIAL_MARGIN_FRACTION":"Incremental Initial Margin Fraction","INCREMENTAL_POSITION_SIZE":"Incremental Position Size","INDEX_PRICE_ABBREVIATED":"Index","INDEX_PRICE":"Index Price","INITIAL_STOP":"Initial Stop","LIMIT_ORDER_DESCRIPTION":"Buy or sell {SYMBOL} at a specific price (or better) and fine tune your order with advanced trade options.","LIMIT_ORDER_SHORT":"Limit","LIMIT_ORDER":"Limit Order","LIMIT_PRICE":"Limit Price","LIQUIDATED":"Liquidated","LIQUIDATION_PRICE_SHORT":"Liq. Price","LIQUIDATION_PRICE":"Liquidation Price","LIQUIDITY":"Liquidity","MAKER_FEE":"Maker Fee","MAKER":"Maker","MANAGE_YOUR_RISK_STOP":"Manage your risk with a stop order","MARKET_ORDER_DESCRIPTION":"The easiest way to buy or sell {SYMBOL} at market price.","MARKET_ORDER_SHORT":"Market","MARKET_ORDER":"Market Order","MARKET_PRICE_SHORT":"Market","MARKET_PROFIT":"Market Profit","MAXIMUM_POSITION_SIZE":"Maximum Position Size","NET_FUNDING":"Net Funding","NEXT_FUNDING":"Next Funding","NEXT_IN":"Next in {TIME}","NOTIONAL_VALUE":"Notional Value","OPEN_INTEREST":"Open Interest","OPEN_POSITIONS":"Open Positions","OPEN_STATUS":"Open","ORACLE_PRICE_ABBREVIATED":"Oracle","ORACLE_PRICE":"Oracle Price","ORDER_EXPIRED":"Order expired","ORDER_FILLED":"Filled","ORDER_TYPE":"Order type","ORDERBOOK_ASK_PRICE":"Ask Price","ORDERBOOK_BID_PRICE":"Bid Price","ORDERBOOK_MID_MARKET_PRICE":"Mid-Market Price","ORDERBOOK_MY_ORDER_SIZE":"Mine","ORDERBOOK_ORDER_SIZE":"Size","ORDERBOOK_SHORT":"Book","ORDERBOOK_SPREAD_PERCENT":"Spread %","ORDERBOOK_SPREAD":"Spread","ORDERS_EMPTY_STATE":"You have no orders.","PARTIALLY_FILLED":"Partially Filled","PAYMENT":"Payment","PAYMENTS":"Payments","PERCENT_TRAIL":"{PERCENT}% Trail","PLACE_LIMIT_ORDER":"Place limit order","PLACE_MARKET_ORDER":"Place market order","PLACE_STOP_ORDER":"Place stop order","PLACE_TAKE_PROFIT_ORDER":"Place take profit order","POSITIONS_EMPTY_STATE":"You have no open positions.","POSITIONS":"Positions","POST_ONLY":"Post-Only","POST_ONLY_WOULD_CROSS":"Post-only would cross","PRICE_IMPACT":"Price Impact","PROFIT_AND_LOSS":"Profit & Loss","RATE_1H":"1h Rate","RATE_8H":"8h Rate","REALIZED_PNL":"Realized P&L","SELECT_MARKET":"Select market","SELF_TRADE":"Self-trade","SET_ORDER_SIZE":"Set order size","SLIDER":"Slider","STOP_LIMIT_DESCRIPTION":"A stop limit order helps protect against losses like stop market orders, but with the versatility and features of a limit order.","STOP_LIMIT":"Stop Limit","STOP_MARKET":"Stop Market","STOP_MARKET_DESCRIPTION":"A stop market order can be used to limit losses by closing your position once the index price or last trade price crosses your trigger price.","STOP_PRICE_ABBREVIATED":"Stop","STOP_PRICE":"Stop Price","TAKE_PROFIT_LIMIT_DESCRIPTION":"A take profit limit order converts to a traditional limit order whenever the index price or last trade price crosses your trigger price.","TAKE_PROFIT_LIMIT_SHORT":"Profit","TAKE_PROFIT_LIMIT":"Take Profit Limit","TAKE_PROFIT":"Take Profit","TAKE_PROFIT_MARKET":"Take Profit Market","TAKE_PROFIT_MARKET_DESCRIPTION":"Take profit market orders lock in profits by closing your position once the index price or last trade price crosses your trigger price.","TAKE_PROFIT_MARKET_SHORT":"Market Profit","TAKER_FEE":"Taker Fee","TAKER":"Taker","TAP_TO_CLOSE":"Tap to close","TIME_IN_FORCE":"Time In Force","TOTAL_COST":"Total Cost","TOTAL_SIZE":"Total Size","TOTAL":"Total","TRADES_24H":"24h Trades","TRADES_EMPTY_STATE":"You have no trade history.","TRADES":"Trades","TRAILING_PERCENT":"Trailing Percent","TRAILING_STOP_DESCRIPTION":"Set a trailing stop to limit the percent you can lose to your specified trailing percent.","TRAILING_STOP":"Trailing Stop","TRANSFERS_EMPTY_STATE":"You have no transfer history.","TRIGGER_PRICE_SHORT":"Trigger","TRIGGER_PRICE":"Trigger Price","UNDERCOLLATERALIZED":"Undercollateralized","UNREALIZED_PNL":"Unrealized P&L","UNTRIGGERED":"Untriggered","UP_TO_X":"Up to {LEVERAGE}\xd7","USER_CANCELED":"User canceled","VOLUME_24H":"24h Volume","VOLUME":"Volume","WANT_TO_AVOID_LIQUIDATION":"Want to avoid liquidation?","YOUR_POSITION_WAS_LIQUIDATED":"Your position was liquidated."},"LEAGUES":{"ACTIVE":"Active","AND":"and","BROWSE_LEAGUES":"Browse Leagues","BRONZE":"Bronze","BY_RECENT":"by most recent","COMPETE_AGAINST":"Compete against the best for prizes.","DAILY_HEDGIES":"A Hedgie is awarded to the #1 trader in each daily competition","DAILY_SUBHEADER":"Get the top P&L today to win a Hedgie","DEMOTION":"Demotion","DIAMOND":"Diamond","EARN_AVATAR":"Earn a unique avatar by trading competitively","EMPTY_LADDER_STATE":"Coming soon!","GIVEN_TO":"Given away to the trader with the top Relative P&L","GOLD":"Gold","HELD_BY":"Held by","INACTIVE":"Inactive","LAST_SEASON":"Last season","LAST_SEASON_OUTCOME":"Last season\'s outcome","LEAGUE_SIZE":"League Size","LEAGUE":"League","LEAGUES":"Leagues","LEAGUES_LAUNCH_TITLE":"Trading leagues are live!","LEAGUES_LAUNCH_BODY":"Climb the rankings ladder to earn your share of the {PRIZE}.","MIN_BALANCE":"Min. Balance","MIN_EQUITY":"Min. Equity","NO_CHANGE":"No change","NO_WINNER":"No winner yet","NOT_ELIGIBLE":"Not eligible for a Hedgie","ON_TRACK":"On track for","PERIOD_LEAGUES":"{PERIOD} League","PAST_HEDGIES":"Past Hedgies","PLACE":"{PLACEMENT} place","PLATINUM":"Platinum","PRIOR_SEASON_HEDGIES":"These are the Hedgie prizes distributed in season {NUM}","PRIZE_CASH":"Given your outstanding performance within your League, you have been awarded a cash prize.","PRIZE_DAILY_HEDGIE":"Given your outstanding performance in the Daily competition, you have been awarded a Hedgie.","PRIZE_HEDGIE":"Given your outstanding performance, you have been awarded a Hedgie.","PRIZE_LEAGUE_MIXED":"Given your outstanding performance in your League, you have been awarded a Hedgie and a cash prize.","PROMOTION_TO":"Promotion to {PERIOD}","RANK":"Rank","RANK_NUM":"Rank {NUM}","REQUIRED_FOR":"Required for {PERIOD}","REQUIREMENTS":"Requirements","SEASON":"Season","SEASON_ENDS":"Season ends","SEASON_NUM":"Season {NUMBER}","SILVER":"Silver","THIS_SEASON":"This season","THIS_SEASON_HEDGIES":"These are the Hedgie prizes to be distributed this season","TO_RANGE":"to","TO_STAY_IN":"To stay in {PERIOD}","TODAYS_HEDGIE":"The Hedgie to be given to the winner of today\'s Daily competition","TOP":"Top {PERCENT}%","VIEWING_LEAGUE":"Viewing {LEAGUE}","WILL_ARRIVE":"will arrive in your dYdX account shortly.","WILL_ARRIVE_SHORTLY":"It will arrive shortly, and be added to your current dYdX balance.","WILL_COST_GAS":"It will cost gas fees to claim.","YOU_WON":"You won!","YOUR_LEAGUE":"Your League","YOURE_IN":"You\'re in {LEAGUE}"},"NOTIFICATIONS":{"66_REDUCTION":"66% reduction","ADJUSTED_IMR":"Adjusted Margin","ADJUSTED_IMR_BODY":"We have temporarily {ACTION} the Initial Margin Requirements on {MARKET} to {PERCENT} due to volatility. {ADDITIONAL_NOTE}","COMPLIANCE_ALERT":"Compliance alert","DEPOSIT_IN_PROGRESS_DESCRIPTION":"Your deposit of {AMOUNT_ELEMENT} will be available after 10 confirmations.","DEPOSIT_IN_PROGRESS":"Deposit in progress","DEPOSIT_SUCCESS_DESCRIPTION":"Your deposit of {AMOUNT_ELEMENT} has been confirmed and is now available for trading.","DEPOSIT_SUCCESS":"Deposit success!","EPOCH_REWARDS":"Epoch {EPOCH_NUMBER} Rewards","EPOCH_REWARDS_BODY":"You earned {DYDX} $DYDX rewards during Epoch {EPOCH_NUMBER}!","FAST_WITHDRAW_PENDING_DESCRIPTION":"Your fast withdraw of {AMOUNT_ELEMENT} is pending confirmation on Layer 1.","FAST_WITHDRAW_PENDING":"Fast withdraw pending","FAST_WITHDRAW_SUCCESS_DESCRIPTION":"Your fast withdraw of {AMOUNT_ELEMENT} has been confirmed.","FAST_WITHDRAW_SUCCESS":"Fast withdraw success!","LEGAL_UPDATES":"Legal updates","LEGAL_UPDATES_DESCRIPTION":"Please check out our updated {TOU} and {PRIVACY_POLICY}.","MAINTENANCE_MARGIN_ADJUSTMENTS":"Maintenance margin requirements {ACTION} at {PERCENT}%.","NOTIFICATIONS_EMPTY_STATE":"You have no notifications.","OUT_OF_TEN_CONFIRMATIONS":"{CURRENT_CONFIRMATIONS} of 10 confirmations","PERMANENTLY_BLOCKED":"Permanently blocked","PERMANENTLY_BLOCKED_DESCRIPTION":"Because you appear to be a resident of, or trading from, a jurisdiction that violates our terms of use and previously have been given an opportunity to redress circumstances that led to restrictions on your account, you have been permanently blocked from performing transfers within the protocol, making fast withdrawals to remove funds from the protocol, and placing orders other than market orders that reduce your positions. You may withdraw your funds from the protocol at any time.","PERMANENTLY_BLOCKED_ELLIPTIC":"For compliance reasons you are blocked from using the dYdX protocol.","SLOW_WITHDRAW_AVAILABLE_DESCRIPTION":"Your slow withdraw request(s) have been confirmed. {AMOUNT_ELEMENT} is available for withdrawal.","SLOW_WITHDRAW_AVAILABLE":"Slow withdraw ready","SLOW_WITHDRAW_PENDING_DESCRIPTION":"You have {AMOUNT_ELEMENT} in pending slow withdraws. You will receive a notification when your funds have been confirmed on Layer 2.","SLOW_WITHDRAW_PENDING":"Slow withdraw(s) pending","SUSPICIOUS_TRADE":"Suspicious activity","SUSPICIOUS_TRADE_BODY":"We have noticed suspicious trading activity related to your account on dYdX, including potential wash trading activity. We will be reviewing your activity on an ongoing basis. If we notice similar activity in the future, then you will be permanently blocked from performing transfers within the protocol and from placing orders other than market orders that reduce your positions."},"EMAIL_NOTIFICATIONS":{"ACCOUNT_DESCRIPTION":"Deposits, Withdrawals, Account updates","EMAIL_NOTIFICATIONS":"Email notifications","EMAIL_UPDATES":"Important updates delivered by email","ERROR_MANY_REQUESTS":"Too many requests. Try again later","GENERAL_DESCRIPTION":"Newsletter, Market Updates, Product Updates","GET_NOTIFIED":"Don\'t miss a beat while you\'re trading! Get notified via email about market changes, account activity, trading updates, and more.","MANAGE_NOTIFICATIONS":"Manage notifications","MANAGE_NOTIFICATIONS_ONBOARD":"You are not signed in. Please complete onboarding to manage your email notifications.","RESEND_VERIFICATION":"Resend verification email \u2192","REQUIRED":"Required","SENT_VERIFICATION":"Verification email sent.","SETTINGS":"Settings","SETUP":"Setup","TRADING_DESCRIPTION":"Order Updates and Liquidation Updates","UNVERIFIED":"Unverified","VERIFICATION_FAIL":"Failed to verify","VERIFICATION_FAIL_BODY":"Your email verification link is invalid. Please make sure you are using the link provided in the email we sent you.","VERIFICATION_HAS_SENT_BODY":"A verification link has been sent to the email address you provided. It can take a few minutes to arrive.","VERIFICATION_SUCCESS":"Verification success","VERIFICATION_SUCCESS_BODY":"You have successfully verified your email and will start receiving email notifications.","VERIFIED":"Verified","VERIFY_EMAIL":"Verify your email","VERIFY_EMAIL_BODY":"Verify your email to begin receiving email notifications.","VERIFY_EMAIL_CTA":"Verify email"},"FORCE_WITHDRAW":{"ALERT_FORCE_WITHDRAW_REQUESTED":"Force withdraw requested.","ALERT_FUNDS_WITHDRAWN":"Funds withdrawn successfully.","AUTHENTICATE":"Authenticate","DESCRIPTION_WAIT":"Your funds will be available with withdraw once the next Layer 2 block is mined. This can take up to 12 hours.","FORCE_WITHDRAW":"Force withdraw","REQUEST_FORCE_WITHDRAW":"Request force withdraw","STEP_1_CONNECT":"1. Connect wallet","STEP_2_AUTHENTICATE":"2. Authenticate wallet","STEP_3_INITIATE":"3. Initiate force withdraw","STEP_4_WAIT":"4. Wait for funds to be withdrawable","STEP_5_WITHDRAW":"5. Withdraw funds","VIEW_TRANSACTION":"View Transaction","WITHDRAW_AMOUNT":"Withdraw {AMOUNT}"},"TEST_FUNDS_MODAL":{"TESTNET_DEPOSITS":"Testnet deposits","TESTNET_DEPOSITS_BODY":"Testnet deposits are processed on Layer 2. You do not need to have any funds in your wallet to continue. Test funds will be sent directly to your dYdX account, not your wallet."},"LEAGUE_OUTCOME_MODAL":{"DEMOTED_DESC":"You were unable to make the cut to remain in the {PERIOD} league.","DEMOTED_SUB_DESC":"Use caution, and good luck!","INACTIVE_DESC":"Your activity seemed to be low this week, so you have been marked as inactive","PROMOTED_DESC":"You can win bigger prizes in higher leagues, and will face stronger competition.","PROMOTED_SUB_DESC":"Great work!","YOU_DEMOTED":"You got demoted","YOU_INACTIVE":"You\'re inactive","YOU_PROMOTED":"You got promoted!"},"HEDGIES":{"HEDGIES_NFT":"Hedgies NFT"},"COMPLIANCE_MODAL":{"COMPLIANCE_BODY":"Because you appear to be a resident of, or trading from, a jurisdiction that violates our terms of use, you must confirm (1) your country of residence and (2) the location from which you trade. If you do not complete the confirmation within 24 hours of being flagged as violating our terms of use, then for compliance purposes you will be blocked from performing transfers within the protocol, making fast withdrawals to remove funds from the protocol, and placing orders other than market orders that reduce your positions.","COMPLIANCE_BODY_FIRST_OFFENSE_1":"Because you appear to be a resident of, or trading from, a jurisdiction that violates our terms of use and have not yet complete confirmation of your country of residence and the location from which you trade as we required, you have been blocked from performing transfers within the protocol, making fast withdrawals to remove funds from the protocol, and placing orders other than market orders that reduce your positions.","COMPLIANCE_BODY_FIRST_OFFENSE_2":"If you would like to be unblocked, then please confirm (1) your country of residence and (2) the location from which you trade. If you complete the confirmation and your account is unblocked, then please be aware that any future violation of our terms of use will result in an immediate block, which we will not unblock, though your funds will always be available for withdrawal.","COMPLIANCE_REQUEST":"Compliance request","CONTINUE":"Continue","COUNTRY_OF_RESIDENCE":"Country of Residence","SUBMIT":"Submit","TRADING_LOCATION":"Trading Location","TYPE_TO_SEARCH":"Type to search"},"PROFILES_PAGE":{"ADDRESS":"Address","APPLICATION_PENDING":"Application pending","APPLICATION_REJECTED":"Application rejected","CERTIFY_AND_ACCEPT":"You must certify that you accept and agree to the displayed terms.","CERTIFY_CAPACITY_AND_AUTHORITY":"You must certify and sign that you have the capacity and authority to fill out this form.","CITIZENSHIP":"Citizenship","CITY":"City","COMPETITIVE_LEAGUES":"Competitive Leagues","COPY_LINK":"Copy link","COULD_NOT_FIND_USER":"User profile could not be found","COUNTRY":"Country","EARN_COMMISSION":"Refer traders and earn up to 40% commission","EARN_DYDX_REWARDS":"Earn $DYDX rewards as you trade","EARN_USDC":"Earn USDC for inviting traders to dYdX","EARNINGS":"Earnings","ENTITY":"Entity","ENTITY_NAME":"Entity Name","EPOCH_REVENUE":"Epoch Revenue","FEE_SHARING_FOR_EACH_NEW_TRADER":"When a trader you referred makes a trade, you can earn up to 40% commission on their fees paid.","FIRST_NAME":"First Name","FULL_NAME":"Full Name","HISTORICAL_TRADING_PERF":"Historical trading performance","I_HAVE_READ_AND_AGREE":"I have read & agree","INCORPORATION_COUNTRY":"Country of Incorporation","INDIVIDUAL":"Individual","LAST_EPOCH":"Last epoch","LAST_NAME":"Last Name","LAST_UPDATED":"Last updated {TIME_STRING} ago","MANDATORY_MINIMIZED_W8_FORM":"The affiliate registration process requires completion of an electronic W8 form that must be completed accurately in order to continue","NO_HEDGIES_OTHER":"User does not own any Hedgies","NO_HEDGIES_YOU":"You do not own any Hedgies","NUDGE_TITLE":"Introducing Hedgies, a NFT collection by dYdX","NUDGE_DESCRIPTION":"Win a Hedgie in Leagues or Daily Competitions. Holding one also bumps your $DYDX fee discount tier by one!","OPENSEA":"OpenSea","POSTAL_CODE":"Postal Code","PRINT_NAME":"Print Name","REWARDS_BY_EPOCH":"Rewards by Epoch","SELECT_ONE":"Select one","SIGN_AND_SUBMIT":"Sign & submit","SIGNATURE":"Signature","STATE":"State","STREET_ADDRESS":"Street Address","TOTAL_REVENUE":"Total Revenue","TRADE_TO_WIN":"Trade to win","TRADERS_JOINED":"Traders Joined","USERS_REFERRED":"Users Referred","YOU_CAN_WIN_THESE":"You can win these in our {LEAGUES_LINK}"},"REWARDS_BOOST_MODAL":{"BOOST":"Boost","EARN_ADDITIONAL_REWARDS":"Earn additional rewards by staking DYDX, made available through dYdX Foundation","STAKED":"Staked"},"EPOCH_END_MODAL":{"EPOCH_END_EARNED":"You earned {AMOUNT} $DYDX rewards during Epoch {EPOCH_NUMBER}! Claim your rewards on the governance dashboard.","YOU_EARNED":"You earned rewards!"},"ALLOWANCE_ALERT_MODAL":{"ALLOWANCE_AFTER":"\u2022 Once you have unset allowances, your wallet is safe from the vulnerability and can be used normally.","ALLOWANCE_ALERT_BODY":"Your funds are vulnerable due to a smart contract vulnerability in an older deposit contract.","ALLOWANCE_ALERT_TITLE":"Important notice","ALLOWANCE_WARNING":"\u2022 DO NOT send additional funds to your wallet until you unset allowances for all tokens listed below.","FUNDS_RECOVERABLE":"\u2022 Your funds are safe and can be recovered.","PROTECT_YOUR_FUNDS":"To protect your funds, and to start the recovery process - unset allowance by clicking on each button below. Once each allowance has been unset, you will be able to send the final transaction to recover your funds.","RECOVER_FUNDS":"Recover funds","UNSET":"Unset","WALLET_CAN_BE_USED_NORMALLY":"\u2022 Your wallet is safe from the vulnerability and can be used normally."},"DISCOVERABILITY":{"GET_AFFILIATE_LINK":"Get your affiliate link","REFER_AND_EARN":"Refer & earn","SET_UP_REFERRALS_BODY":"Refer other traders and earn up to {COMMISSION} on their trading fees!","SET_UP_REFERRALS_PARAM":"40% commission"}}')
		},
		427: function(t) {
			t.exports = JSON.parse('{"GENERAL":{"SOMETHING_WENT_WRONG_WITH_MESSAGE":"Something went wrong: {ERROR_MESSAGE}","SOMETHING_WENT_WRONG":"Something went wrong. Please try again later.","TIMESTAMP_DISCREPANCY":"For security purposes, we verify timestamps when authenticating your account. Please make sure your system clock is synced correctly and refresh the app."},"TRADE_BOX":{"AMOUNT_INPUT_STEP_SIZE":"Order amount must be a factor of {STEP_SIZE}.","BUY_TRIGGER_TOO_CLOSE_TO_LIQUIDATION_PRICE":"Your trigger price is too close to your liquidation price - this order may not execute fully before you get liquidated. Please enter a trigger price below ${TRIGGER_PRICE_LIMIT} or use a Stop Limit order.","INVALID_LARGE_POSITION_LEVERAGE":"This trade would result in an invalid leverage on your position. To limit risk, larger positions have lower maximum leverages.","INVALID_NEW_ACCOUNT_MARGIN_USAGE":"This trade would result in over 100% margin usage on your account.","INVALID_NEW_POSITION_LEVERAGE":"This trade would result in an invalid leverage on your position.","LIMITED_ORDERS_FOR_PAIR":"This pair only allows a limited amount of orders per side.","MARKET_ORDER_ERROR_INDEX_PRICE_SLIPPAGE":"This market order would result in {SLIPPAGE} index price slippage given current liquidity. Please use a limit order if you still intend to place this order.","MARKET_ORDER_ERROR_ORDERBOOK_SLIPPAGE":"This market order would result in {SLIPPAGE} of orderbook price impact given current liquidity. Please use a limit order if you still intend to place this order.","MARKET_ORDER_NOT_ENOUGH_LIQUIDITY":"There is not enough liquidity to fill this market order, please try a smaller order amount.","MARKET_ORDER_PRICE_IMPACT_AT_MAX_LEVERAGE":"This order has a non-zero price impact and could potentially put your position over max leverage. Please try a smaller order amount.","NEW_POSITION_SIZE_OVER_MAX":"This trade could result in a position size over the maximum size of {MAX_SIZE} {SYMBOL}.","NO_EQUITY_DEPOSIT_FIRST":"You must deposit funds before you can place orders.","ORDER_BELOW_COLLATERALIZATION":"This order may put your account below this market\u2019s collateralization threshold. Please try a smaller amount.","ORDER_CROSSES_OWN_ORDER":"This order may fill one or more of your own existing orders. Please cancel any conflicting orders or adjust your order amount.","ORDER_SIZE_BELOW_MIN_SIZE":"Your order size is below the minimum order size of {MIN_SIZE} {SYMBOL}","ORDER_WITH_CURRENT_ORDERS_INVALID":"Given your current open orders, this order may result in an invalid leverage on your position. Please close some or all orders that would fill before this order, or reduce your order size.","SELL_TRIGGER_TOO_CLOSE_TO_LIQUIDATION_PRICE":"Your trigger price is too close to your liquidation price - this order may not execute fully before you get liquidated. Please enter a trigger price above ${TRIGGER_PRICE_LIMIT} or use a Stop Limit order.","TAKER_FEE_INVALID":"Your fee rates may have changed. Please refresh the app and try again.","TRIGGER_MUST_ABOVE_INDEX_PRICE":"Your trigger price must be above the current index price: {INDEX_PRICE}.","TRIGGER_MUST_BELOW_INDEX_PRICE":"Your trigger price must be below the current index price: {INDEX_PRICE}.","TRIGGER_TOO_CLOSE_TO_LIQUIDATION_PRICE":"Your trigger price is too close to your liquidation price - this order may not execute fully before you get liquidated. Please update your trigger price or use a stop limit order.","USER_MAX_ORDERS":"This order would put you above the max limit of 20 open orders per market, per side."},"ONBOARDING":{"BANNED_USER":"Because you appear to be a resident of, or trading from, a jurisdiction that violates our terms of use, you have been permanently blocked from performing transfers within the protocol, making fast withdrawals to remove funds from the protocol, and placing orders other than market orders that reduce your positions. You may withdraw your funds from the protocol at any time.","INVALID_EMAIL":"Please enter a valid email address.","INVALID_USERNAME":"Usernames must start with a letter, be less than 24 characters long, and contain only letters, numbers, and underscores.","KEY_RECOVERY_FAILED":"Key recovery failed. Try again with \'Legacy Signing\' enabled.","LEDGER_U2F_REQUIRED":"U2F browser support is required for Ledger connections. Please ensure this feature is supported in your current browser.","USERNAME_TAKEN":"This username has already been taken.","WALLET_NO_TRANSACTIONS":"This wallet has no funds and no previous transactions. Please deposit funds in your wallet to continue onboarding."},"DEPOSIT_MODAL":{"DEPOSIT_ACCOUNT_OUT_OF_SYNC":"Your account is out of sync. Please reconnect your wallet and try again.","DEPOSIT_MORE_THAN_BALANCE":"You cannot deposit more than your available wallet balance.","DEPOSIT_WRONG_NETWORK_PRODUCTION":"Your wallet network is incorrect. Please make sure it\u2019s set to \'Ethereum Mainnet\'.","DEPOSIT_WRONG_NETWORK_STAGING":"Your wallet network is incorrect. Please make sure it\u2019s set to \'Ropsten Test Network\'."},"WITHDRAW_MODAL":{"FAST_WITHDRAW_NOT_ENOUGH_LIQUIDITY":"There is not enough liquidity to process this fast withdraw. Please try a smaller amount.","MAX_FAST_WITHDRAW_AMOUNT":"Please enter a withdraw amount less than {MAX_FAST_WITHDRAW_AMOUNT}.","MIN_SLOW_WITHDRAW_AMOUNT":"Slow withdraw amount must be greater than or equal to 10, or your entire account balance.","RESTRICTED_OPEN_POSITIONS_WITHDRAW":"Your account is restricted. You must close all your positions before you can withdraw.","WITHDRAW_MORE_THAN_FREE_DUE_TO_FEE":"You cannot withdraw more than your free collateral. Make sure you account for the fast withdraw fee when entering an amount.","WITHDRAW_MORE_THAN_FREE":"You cannot withdraw more than your free collateral."}}')
		},
		428: function(t) {
			t.exports = JSON.parse('{"GENERAL":{"LEGACY_SIGNING":{"TITLE":"Legacy Signing","BODY":"Only check this option if you previously used hardware wallet signing / legacy signing to generate your keys."},"REMEMBER_ME":{"TITLE":"Remember Me","BODY":"Only use \\"Remember Me\\" if you are using a secure device that you own. Selecting this option can expose your keys and information to others if you are on a public or non-secured device."}},"PORTFOLIO":{"HOLDING_HEDGIES":{"TITLE":"Hedgies discount","BODY":"Holding a {NFT} will bump your fee discount tier up by one. Holding multiple will have no additional effect."}},"TRADE":{"ACCOUNT_LEVERAGE":{"TITLE":"Account Leverage","BODY":"Leverage of your account based on all your open positions. Because your account is cross-margined, each open position has its own leverage while also affecting your overall account leverage."},"BUYING_POWER":{"TITLE":"Buying Power","BODY":"Total available buying power to increase your position on {MARKET}. Your buying power will change based on the market you have selected."},"DEFAULT_EXECUTION":{"TITLE":"Default Execution","BODY":"Your order will fill any crossing orders at the time of opening. If your order is not fully filled, it will remain open until it is filled, cancelled, or expires."},"EQUITY":{"TITLE":"Equity","BODY":"Total value of your account."},"EXPECTED_PRICE":{"TITLE":"Expected Price","BODY":"Expected price of execution for your order. This price is only an estimate as the orderbook may change before your order is processed by the matching engine."},"FEE":{"TITLE":"Fee","BODY":"Fees on dYdX are charged based on liquidity type. Maker orders carry a smaller fee than taker orders."},"FILL_OR_KILL":{"TITLE":"Fill Or Kill","BODY":"Fill or kill orders must be completely filled upon execution or they will be automatically canceled."},"FREE_COLLATERAL":{"TITLE":"Free Collateral","BODY":"The maximum amount you can withdraw. When free collateral is 0 or negative, your account is using maximum leverage."},"GOOD_TIL":{"TITLE":"Good Til","BODY":"Time until your order expires."},"IMMEDIATE_OR_CANCEL":{"TITLE":"Immediate or Cancel","BODY":"Your order will fill any crossing orders at the time of opening, and then cancel any unfilled order amount."},"INDEX_PRICE":{"TITLE":"Index Price","BODY":"Stop orders are triggered based on the index price. The index price aggregates price data from multiple exchanges, protecting you from events like flash crashes."},"INITIAL_MARGIN_FRACTION":{"TITLE":"Initial Margin Fraction","BODY":"Margin fraction is calculated as your position notional value divided by equity. If your margin fraction exceeds the initial margin fraction, you will no longer be allowed to increase your position. To limit risk, the initial margin fraction increases linearly with position size after a certain threshold."},"INITIAL_STOP":{"TITLE":"Initial Stop","BODY":"Initial stop price based on your trailing percent."},"LEVERAGE":{"TITLE":"Leverage","BODY":"Leverage changes the multiplier on your gains or losses. Increasing your leverage increases how much you would gain / lose on a trade with the same price movement."},"LIMIT_PRICE":{"TITLE":"Limit Price","BODY":"This order can only be filled at the specified limit price or better. If your order crosses at the time of placement, your order will fill any crossing orders at the most favorable price."},"LIQUIDATION_PRICE":{"TITLE":"Liquidation Price","BODY":"If the oracle price of {SYMBOL} drops below the liquidation price, your position will be liquidated. Upon liquidation, your position will be automatically closed and a liquidation fee of at least 1% will be assessed (may be higher depending on liquidity at the time of liquidation)."},"LIQUIDATION_PRICE_GENERAL":{"TITLE":"Liquidation Price","BODY":"If the oracle price of the position market crosses the liquidation price, your position will be liquidated. Upon liquidation, your position will be automatically closed and a liquidation fee of at least 1% will be assessed (may be higher depending on liquidity at the time of liquidation)."},"LIQUIDITY":{"TITLE":"Liquidity","BODY":"Trades that take liquidity from the book (e.g. market or crossing limit orders) execute as taker orders. Limit orders that add liquidity to the book and are filled by another party will be filled as maker orders."},"MAINTENANCE_MARGIN_FRACTION":{"TITLE":"Maintenance Margin Fraction","BODY":"Margin fraction is calculated as your position notional value divided by equity. If your margin fraction exceeds the maintenance margin fraction, your position will be automatically closed (liquidated) and a liquidation fee of at least 1% will be assessed (may be higher depending on liquidity at the time of liquidation)."},"MAKER_FEE":{"TITLE":"Maker Fee","BODY":"Limit orders that add liquidity to the book and are filled by another party will be filled as maker orders. Maker orders have a lower fee than taker orders."},"MARGIN_USAGE":{"TITLE":"Margin Usage","BODY":"Percentage of your total margin used by open positions."},"MAX_WITHDRAW":{"TITLE":"Maximum Fast Withdraw","BODY":"Maximum amount allowed for a single fast withdraw."},"MAXIMUM_LEVERAGE":{"TITLE":"Maximum Leverage","BODY":"Maximum allowed leverage for this market. To limit risk, maximum leverage decreases linearly with position size after a certain threshold."},"NET_FUNDING":{"TITLE":"Net Funding","BODY":"Total funding earned / paid for the lifetime of the current position. Resets if you close your position or change position sides (long to short, or vice versa)."},"OPEN_INTEREST":{"TITLE":"Open Interest","BODY":"Open interest represents the total size of all open positions on this market."},"ORACLE_PRICE":{"TITLE":"Oracle Price","BODY":"Leverage and liquidations are determined based on the on-chain oracle price. The oracle price aggregates price data from multiple exchanges, protecting you from events like flash crashes."},"ORDER_AMOUNT":{"TITLE":"Order Amount","BODY":"Amount of {SYMBOL} to buy or sell. This is the amount your position will increase or decrease by when the order is filled, not your resulting position amount."},"POST_ONLY":{"TITLE":"Post-Only","BODY":"Orders with post-only enabled can only be placed as maker orders. If the order crosses other orders at the time of placement, it will be automatically cancelled."},"PRICE_IMPACT":{"TITLE":"Price Impact","BODY":"The difference between the expected execution price for your order and the best order on the bid or ask side. This will increase for larger trade sizes."},"REALIZED_PNL":{"TITLE":"Realized Profit / Loss","BODY":"Total realized profit / loss for this position through partial closes, fees and funding. Resets if you fully close your position or change position sides (long to short, or vice versa)."},"STEP_SIZE":{"TITLE":"Step Size","BODY":"Step size is the smallest factor allowed for order amounts on this market."},"TRIGGER_PRICE":{"TITLE":"Trigger Price","BODY":"When the index price of this market crosses your trigger price, your stop order will either convert to a limit order (stop limit orders/take profit orders) or execute as a market order (trailing stop orders)."},"TAKER_FEE":{"TITLE":"Taker Fee","BODY":"Trades that take liquidity from the book (e.g. market or crossing limit orders) execute as taker orders. Taker orders have a higher fee than maker orders."},"TICK_SIZE":{"TITLE":"Tick Size","BODY":"Tick size is the minimum price movement on this market."},"TIME_IN_FORCE":{"TITLE":"Time In Force","BODY":"The selected time in force option controls how long an order will remain active for until it either expires or is filled."},"TRAILING_PERCENT":{"TITLE":"Trailing Percent","BODY":"Trailing percent sets the percent your stop price will \u201ctrail\u201d the index price. Whenever the index price moves in favor of your position, the stop price for your order will update according to your specified trailing percent."},"UNREALIZED_PNL":{"TITLE":"Unrealized Profit / Loss","BODY":"Total profit / loss if you were to fully close the remainder of your current position at the current index price. Resets if you close your position or change position sides (long to short, or vice versa)."}},"DEPOSIT":{"SWAP":{"TITLE":"Swap & Deposit","BODY":"When depositing a non-USDC asset, your asset is automatically converted to USDC via the 0x API. Setting max slippage allows you to specify the slippage you will allow before the conversion fails."}},"WITHDRAW":{"FAST_WITHDRAW_FEE":{"TITLE":"Fast Withdraw Fee","BODY":"Fast withdraws are sent immediately and dYdX will cover the gas costs in exchange for a fee. For fee-free withdraws, please use a slow withdraw (you pay your own gas costs and will have to wait for Layer 2 confirmation)."},"WITHDRAW_TYPES":{"TITLE":"Withdraw Types","BODY":"dYdX supports two types of withdraws from Layer 2. Fast withdraws carry a small fee but do not require gas and are sent immediately. Slow withdraws are free but require two steps, take much longer, and the user will have to pay their own gas fees."}},"EMAIL_NOTIFICATIONS":{"VERIFY_EMAIL":{"TITLE":"Verify email address","BODY":"Please click the link in the email we sent you, which will help us verify ownership of your email address."}}}')
		},
		429: function(t) {
			t.exports = JSON.parse('{"ONBOARDING":{"ALWAYS_VERIFY_URL":"Always check and verify you are on https://trade.dydx.exchange when recovering your keys."},"TRADE_BOX":{"MARKET_ORDER_CLOSE_TO_MAX_LEVERAGE":"This order would put your position close to the max allowed leverage. If there is slippage on top of the expected price at the time of execution, your order may fail.","MARKET_ORDER_WARNING_INDEX_PRICE_SLIPPAGE":"This market order would result in {SLIPPAGE} index price slippage given current liquidity.","MARKET_ORDER_WARNING_ORDERBOOK_SLIPPAGE":"This market order would result in {SLIPPAGE} of orderbook price impact given current liquidity.","MARKET_STATUS_CLOSE_ONLY":"{MARKET} is currently in close only mode. No new positions can be created.","STOP_MARKET_ORDER_MAY_NOT_EXECUTE":"Stop Market orders on dYdX are not guaranteed to fill depending on liquidity at time of triggering. For more control, try a Stop Limit order.","TAKE_PROFIT_MARKET_ORDER_MAY_NOT_EXECUTE":"Take Profit Market orders on dYdX are not guaranteed to fill depending on liquidity at time of triggering. For more control, try a Take Profit Limit order."}}')
		},
		438: function(t, r, a) {
			"use strict";
			a.d(r, "c", (function() {
				return getAllFundingRateHistory
			})), a.d(r, "a", (function() {
				return findFundingRateHistoryForMarket
			})), a.d(r, "b", (function() {
				return findLastRequestTimeForMarket
			}));
			var o = a(25),
				i = a.n(o);
			const getAllFundingRateHistory = t => i()(t, "historicalFundingRates.fundingDataByMarket"),
				findFundingRateHistoryForMarket = ({
					allFundingData: t,
					market: r
				}) => i()(t, `[${r}].fundingRates`),
				findLastRequestTimeForMarket = ({
					allFundingData: t,
					market: r
				}) => i()(t, `[${r}].lastRequest`)
		},
		440: function(t, r, a) {
			"use strict";
			var o = a(0),
				i = a.n(o),
				c = a(1),
				l = a.n(c),
				E = a(13),
				u = a.n(E),
				d = "_1WIhq_BSoc6G4Z_9FtHB63",
				_ = "_242klziznfQnEkLJuh1ZoS",
				O = "_2S3zXNkYl2CUoDlgNQRHjZ",
				T = "_1VtvtwyYm3WnYIx0NatQiI";
			const AssetIcon = ({
				className: t,
				huge: r,
				medium: a,
				large: o,
				symbol: c
			}) => {
				let l;
				switch (c) {
					case "1INCH":
						l = i.a.createElement("img", {
							src: "/currencies/1inch.svg",
							alt: ""
						});
						break;
					case "AAVE":
						l = i.a.createElement("img", {
							src: "/currencies/aave.svg",
							alt: ""
						});
						break;
					case "ADA":
						l = i.a.createElement("img", {
							src: "/currencies/ada.svg",
							alt: ""
						});
						break;
					case "ALGO":
						l = i.a.createElement("img", {
							src: "/currencies/algo.svg",
							alt: ""
						});
						break;
					case "ATOM":
						l = i.a.createElement("img", {
							src: "/currencies/atom.svg",
							alt: ""
						});
						break;
					case "AVAX":
						l = i.a.createElement("img", {
							src: "/currencies/avax.svg",
							alt: ""
						});
						break;
					case "BCH":
						l = i.a.createElement("img", {
							src: "/currencies/bch.svg",
							alt: ""
						});
						break;
					case "BTC":
						l = i.a.createElement("img", {
							src: "/currencies/btc.svg",
							alt: ""
						});
						break;
					case "CELO":
						l = i.a.createElement("img", {
							src: "/currencies/celo.svg",
							alt: ""
						});
						break;
					case "COMP":
						l = i.a.createElement("img", {
							src: "/currencies/comp.svg",
							alt: ""
						});
						break;
					case "CRV":
						l = i.a.createElement("img", {
							src: "/currencies/crv.svg",
							alt: ""
						});
						break;
					case "DAI":
						l = i.a.createElement("img", {
							src: "/currencies/dai.svg",
							alt: ""
						});
						break;
					case "DOGE":
						l = i.a.createElement("img", {
							src: "/currencies/doge.svg",
							alt: ""
						});
						break;
					case "DOT":
						l = i.a.createElement("img", {
							src: "/currencies/dot.svg",
							alt: ""
						});
						break;
					case "DYDX":
						l = i.a.createElement("img", {
							src: "/currencies/dydx.svg",
							alt: ""
						});
						break;
					case "ENJ":
						l = i.a.createElement("img", {
							src: "/currencies/enj.svg",
							alt: ""
						});
						break;
					case "EOS":
						l = i.a.createElement("img", {
							src: "/currencies/eos.svg",
							alt: ""
						});
						break;
					case "ETC":
						l = i.a.createElement("img", {
							src: "/currencies/etc.svg",
							alt: ""
						});
						break;
					case "ETH":
						l = i.a.createElement("img", {
							src: "/currencies/eth.svg",
							alt: ""
						});
						break;
					case "FIL":
						l = i.a.createElement("img", {
							src: "/currencies/fil.svg",
							alt: ""
						});
						break;
					case "ICP":
						l = i.a.createElement("img", {
							src: "/currencies/icp.svg",
							alt: ""
						});
						break;
					case "LINK":
						l = i.a.createElement("img", {
							src: "/currencies/link.svg",
							alt: ""
						});
						break;
					case "LTC":
						l = i.a.createElement("img", {
							src: "/currencies/ltc.svg",
							alt: ""
						});
						break;
					case "LUNA":
						l = i.a.createElement("img", {
							src: "/currencies/luna.svg",
							alt: ""
						});
						break;
					case "MATIC":
						l = i.a.createElement("img", {
							src: "/currencies/matic.svg",
							alt: ""
						});
						break;
					case "MKR":
						l = i.a.createElement("img", {
							src: "/currencies/mkr.svg",
							alt: ""
						});
						break;
					case "NEAR":
						l = i.a.createElement("img", {
							src: "/currencies/near.svg",
							alt: ""
						});
						break;
					case "RUNE":
						l = i.a.createElement("img", {
							src: "/currencies/rune.svg",
							alt: ""
						});
						break;
					case "SNX":
						l = i.a.createElement("img", {
							src: "/currencies/snx.svg",
							alt: ""
						});
						break;
					case "SOL":
						l = i.a.createElement("img", {
							src: "/currencies/sol.svg",
							alt: ""
						});
						break;
					case "SUSHI":
						l = i.a.createElement("img", {
							src: "/currencies/sushi.svg",
							alt: ""
						});
						break;
					case "TRX":
						l = i.a.createElement("img", {
							src: "/currencies/trx.svg",
							alt: ""
						});
						break;
					case "UMA":
						l = i.a.createElement("img", {
							src: "/currencies/uma.svg",
							alt: ""
						});
						break;
					case "UNI":
						l = i.a.createElement("img", {
							src: "/currencies/uni.svg",
							alt: ""
						});
						break;
					case "USDC":
						l = i.a.createElement("img", {
							src: "/currencies/usdc.svg",
							alt: ""
						});
						break;
					case "USDT":
						l = i.a.createElement("img", {
							src: "/currencies/usdt.svg",
							alt: ""
						});
						break;
					case "WBTC":
						l = i.a.createElement("img", {
							src: "/currencies/wbtc.svg",
							alt: ""
						});
						break;
					case "WETH":
						l = i.a.createElement("img", {
							src: "/currencies/weth.svg",
							alt: ""
						});
						break;
					case "XLM":
						l = i.a.createElement("img", {
							src: "/currencies/xlm.svg",
							alt: ""
						});
						break;
					case "XMR":
						l = i.a.createElement("img", {
							src: "/currencies/xmr.svg",
							alt: ""
						});
						break;
					case "XTZ":
						l = i.a.createElement("img", {
							src: "/currencies/xtz.svg",
							alt: ""
						});
						break;
					case "YFI":
						l = i.a.createElement("img", {
							src: "/currencies/yfi.svg",
							alt: ""
						});
						break;
					case "ZEC":
						l = i.a.createElement("img", {
							src: "/currencies/zec.svg",
							alt: ""
						});
						break;
					case "ZRX":
						l = i.a.createElement("img", {
							src: "/currencies/zrx.svg",
							alt: ""
						});
						break;
					default:
						l = null
				}
				return i.a.createElement("div", {
					className: u()(d, t, {
						[T]: r,
						[O]: o,
						[_]: a
					})
				}, l)
			};
			AssetIcon.propTypes = {
				className: l.a.string,
				huge: l.a.bool,
				large: l.a.bool,
				medium: l.a.bool,
				symbol: l.a.string.isRequired
			};
			r.a = AssetIcon
		},
		441: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return i
			}));
			var o = a(24);
			const i = Object(o.a)("SET_EXCHANGE_CONFIG")
		},
		443: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return c
			}));
			var o = a(176),
				i = a(163);

			function asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}
			const c = Object(o.createAsyncAction)("FETCH_GEO", t => ({
				makeRequest: function() {
					var t = function _asyncToGenerator(t) {
						return function() {
							var r = this,
								a = arguments;
							return new Promise((function(o, i) {
								var c = t.apply(r, a);

								function _next(t) {
									asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
								}

								function _throw(t) {
									asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
								}
								_next(void 0)
							}))
						}
					}((function*() {
						return (yield fetch(i.a ? "https://dydx-api.consenlabs.com/v1/geo" : "https://api.dydx.exchange/v3/geo")).json()
					}));
					return function makeRequest() {
						return t.apply(this, arguments)
					}
				}(),
				meta: {
					wallet: t
				}
			}))
		},
		444: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return i
			}));
			var o = a(176);

			function asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}
			const i = Object(o.createAsyncAction)("FETCH_PAGE_STATUS", () => ({
				makeRequest: function() {
					var t = function _asyncToGenerator(t) {
						return function() {
							var r = this,
								a = arguments;
							return new Promise((function(o, i) {
								var c = t.apply(r, a);

								function _next(t) {
									asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
								}

								function _throw(t) {
									asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
								}
								_next(void 0)
							}))
						}
					}((function*() {
						return (yield fetch("https://ck587cc5qvfd.statuspage.io/api/v2/components.json")).json()
					}));
					return function makeRequest() {
						return t.apply(this, arguments)
					}
				}()
			}))
		},
		451: function(t, r, a) {
			"use strict";

			function ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function _defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function _asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			}
			a.d(r, "a", (function() {
				return o
			}));
			const promisify = (t, r) => function() {
				var a = _asyncToGenerator((function*(...a) {
					return new Promise((o, i) => {
						t.apply(r, [...a, (t, r) => {
							null === t || void 0 === t ? o(r) : i(t)
						}])
					})
				}));
				return function promisifiedFunction() {
					return a.apply(this, arguments)
				}
			}();
			class o {
				constructor() {
					var t = this;
					this.emitPayloadAsync = function() {
						var r = _asyncToGenerator((function*(r) {
							const a = o._createFinalPayload(r);
							return yield promisify(t.engine.sendAsync, t.engine)(a)
						}));
						return function(t) {
							return r.apply(this, arguments)
						}
					}(), this.setEngine = t => {
						this.engine = t
					}
				}
			}
			o._createFinalPayload = t => function _objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? ownKeys(Object(a), !0).forEach((function(r) {
						_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}({
				id: o._getRandomId(),
				jsonrpc: "2.0",
				params: []
			}, t), o._getRandomId = () => (new Date).getTime() * Math.pow(10, 3) + Math.floor(Math.random() * Math.pow(10, 3))
		},
		452: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return _
			}));
			var o = a(71),
				i = a.n(o),
				c = a(65),
				l = a(600),
				E = a(211),
				u = a(258),
				d = a(10);
			const _ = Object(c.a)([l.a, E.a], (t, r) => {
				if (!r) return null;
				let a = d.a.ZERO;
				return i()(t, ({
					type: t,
					status: r,
					creditAmount: o
				}) => {
					t === u.b.WITHDRAWAL && r === u.a.QUEUED && (a = a.plus(o))
				}), a.isZero() ? "0" : a.minus(r).toString()
			})
		},
		453: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return getIsMarketMakerAccount
			}));
			var o = a(10);
			const getIsMarketMakerAccount = ({
				account: t
			}) => t && Object(o.b)(t.positionId).lt(512)
		},
		454: function(t, r, a) {
			"use strict";
			a.d(r, "b", (function() {
				return calculateDerivedHDKeyInfos
			})), a.d(r, "c", (function() {
				return findDerivedKeyInfoForAddressIfExists
			})), a.d(r, "a", (function() {
				return addressOfHDKey
			}));
			var o = a(267);
			const getDerivedKey = ({
					initialDerivedKey: t,
					index: r
				}) => {
					const a = t.baseDerivationPath,
						o = `m/${a}/${r}`,
						i = "m/" + r,
						c = t.hdKey.derive(i);
					return {
						address: addressOfHDKey(c),
						hdKey: c,
						baseDerivationPath: a,
						derivationPath: o
					}
				},
				calculateDerivedHDKeyInfos = (t, r) => {
					const a = [];
					let o = 0;
					for (; o < r;) a.push(getDerivedKey({
						initialDerivedKey: t,
						index: o
					})), o += 1;
					return a
				},
				findDerivedKeyInfoForAddressIfExists = (t, r, a) => {
					const o = t.toLowerCase();
					let i, c = 0;
					for (; c < a;) {
						const t = getDerivedKey({
							initialDerivedKey: r,
							index: c
						});
						if (t.address === o) {
							i = t;
							break
						}
						c += 1
					}
					return i
				},
				addressOfHDKey = t => {
					const r = t.publicKey,
						a = Object(o.publicToAddress)(r, !0).toString("hex");
					return Object(o.addHexPrefix)(a).toLowerCase()
				}
		},
		458: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return N
			})), a.d(r, "b", (function() {
				return calculateCurrentMarketOrderPriceImpact
			})), a.d(r, "c", (function() {
				return C
			})), a.d(r, "d", (function() {
				return y
			})), a.d(r, "e", (function() {
				return D
			}));
			var o = a(175),
				i = a.n(o),
				c = a(610),
				l = a.n(c),
				E = a(25),
				u = a.n(E),
				d = a(65),
				_ = a(57),
				O = a(58),
				T = a(167),
				I = a(315),
				S = a(82),
				p = a(16),
				R = a(26),
				A = a(10),
				b = a(459);
			const N = Object(d.a)([O.c, T.a, I.a, I.b], (t, r, a, o) => {
					const i = r.selectedOrderSide,
						c = r.selectedTradeType,
						l = r.amountInput,
						E = null === t || void 0 === t ? void 0 : t.indexPrice;
					return [p.D.MARKET, p.D.STOP_MARKET, p.D.TAKE_PROFIT_MARKET].includes(c) && "" !== l ? Object(b.c)({
						amount: l,
						indexPrice: E,
						side: i,
						orderbookBuys: a,
						orderbookSells: o
					}) : null
				}),
				calculateCurrentMarketOrderPriceImpact = t => u()(N(t), "priceImpact"),
				C = Object(d.a)([T.a, O.c, t => u()(N(t), "marketOrderPrice")], (t, r, a) => {
					const o = t.limitPriceInput,
						i = t.trailingPercentInput,
						c = t.selectedTradeType,
						l = t.selectedOrderSide,
						E = t.stopPriceInput;
					switch (c) {
						case p.D.MARKET:
							if (a) return a;
							break;
						case p.D.LIMIT:
						case p.D.STOP_LIMIT:
						case p.D.TAKE_PROFIT:
							if ("" !== o) return Object(A.b)(o);
							break;
						case p.D.STOP_MARKET:
						case p.D.TAKE_PROFIT_MARKET:
							if ("" !== E) return Object(A.b)(E);
							break;
						case p.D.TRAILING_STOP:
							if (r && "" !== i) {
								const t = r.indexPrice,
									a = Object(A.b)(i).div(100);
								let o = Object(A.b)(t);
								return o = l === R.a.BUY ? o.times(A.a.ONE.plus(a)) : o.times(A.a.ONE.minus(a)), o
							}
					}
					return null
				}),
				y = Object(d.a)([T.a, _.e, C, I.a, I.b, N, O.c], (t, r, a, o, c, E, d) => {
					const _ = t.selectedOrderSide,
						O = t.selectedTradeType,
						T = t.amountInput,
						I = t.limitPriceInput,
						S = t.stopPriceInput,
						N = t.takeProfitPriceInput,
						C = (d || {}).market,
						y = {
							feePercent: null,
							feeAmount: null,
							hasReferralDiscount: !!u()(r, "referredByAffiliateLink")
						};
					if (!r || "" === T) return y;
					const D = r.makerFeeRate,
						m = r.takerFeeRate,
						h = r.referredByAffiliateLink,
						L = Object(A.b)(T);
					let g;
					switch (O) {
						case p.D.TRAILING_STOP:
						case p.D.MARKET:
							if (!a) return {
								feeType: p.g.TAKER,
								feePercent: m,
								feeAmount: null
							};
							g = {
								feeType: p.g.TAKER,
								feePercent: m,
								feeAmount: L.times(a).times(m)
							};
							break;
						case p.D.STOP_MARKET:
						case p.D.TAKE_PROFIT_MARKET: {
							if (!a || !C) return {
								feeType: p.g.TAKER,
								feePercent: m,
								feeAmount: null
							};
							const t = Object(b.e)({
								currentOrderPrice: a,
								currentMarketOrderPriceData: E,
								market: C,
								orderSide: _,
								tradeType: O
							});
							g = {
								feeType: p.g.TAKER,
								feePercent: m,
								feeAmount: L.times(t).times(m)
							};
							break
						}
						case p.D.LIMIT: {
							if ("" === I) return y;
							let t = p.g.TAKER,
								r = m;
							if (_ === R.a.BUY) {
								const a = l()(c);
								if (a) {
									const o = !c || Object(A.b)(I).lt(a.price);
									t = o ? p.g.MAKER : p.g.TAKER, r = o ? D : m
								} else t = p.g.MAKER, r = D
							} else {
								const a = i()(o);
								if (a) {
									const i = !o || Object(A.b)(I).gt(a.price);
									t = i ? p.g.MAKER : p.g.TAKER, r = i ? D : m
								} else t = p.g.MAKER, r = D
							}
							g = {
								feeType: t,
								feePercent: r,
								feeAmount: L.times(a).times(r)
							};
							break
						}
						case p.D.STOP_LIMIT: {
							if ("" === S || "" === I) return y;
							let t = p.g.TAKER;
							t = _ === R.a.BUY ? Object(A.b)(I).lt(S) ? p.g.MAKER : p.g.TAKER : Object(A.b)(I).gt(S) ? p.g.MAKER : p.g.TAKER;
							const r = t === p.g.MAKER ? D : m;
							g = {
								feeType: t,
								feePercent: r,
								feeAmount: L.times(I).times(r)
							};
							break
						}
						case p.D.TAKE_PROFIT: {
							if ("" === N || "" === I) return y;
							const t = m;
							g = {
								feeType: p.g.TAKER,
								feePercent: t,
								feeAmount: L.times(I).times(t)
							};
							break
						}
						default:
							return y
					}
					return h && (g.hasReferralDiscount = !0), g
				}),
				D = Object(d.a)([O.c, T.a, N], (t, r, a) => {
					let o = "";
					if (!t || !r || null === r || void 0 === r || !r.amountInput) return o;
					const i = t.indexPrice,
						c = r.amountInput,
						l = r.limitPriceInput,
						E = r.selectedTradeType,
						u = r.stopPriceInput,
						d = Object(A.b)(l),
						_ = Object(A.b)(c),
						O = Object(A.b)(u),
						T = null === a || void 0 === a ? void 0 : a.marketOrderPrice;
					if (!_.isZero()) switch (E) {
						case p.D.MARKET:
							o = Object(A.b)(null !== T && void 0 !== T ? T : i).times(_).toFixed(S.g);
							break;
						case p.D.LIMIT:
						case p.D.STOP_LIMIT:
						case p.D.TAKE_PROFIT:
							l && (o = _.times(d).toFixed(S.g));
							break;
						case p.D.STOP_MARKET:
						case p.D.TAKE_PROFIT_MARKET:
							u && (o = _.times(O).toFixed(S.g))
					}
					return o
				})
		},
		459: function(t, r, a) {
			"use strict";
			a.d(r, "c", (function() {
				return calculateMarketOrderPriceDataForAmount
			})), a.d(r, "b", (function() {
				return calculateMarketOrderExecutionPrice
			})), a.d(r, "g", (function() {
				return getCurrentTradeErrorData
			})), a.d(r, "h", (function() {
				return getCurrentTradeWarningData
			})), a.d(r, "i", (function() {
				return getOnPlaceOrderErrorData
			})), a.d(r, "f", (function() {
				return extractUserTradeOptionsFromCurrentTradeData
			})), a.d(r, "a", (function() {
				return m
			})), a.d(r, "e", (function() {
				return calculateStopMarketPrice
			})), a.d(r, "d", (function() {
				return calculateStopMarketOrderExecutionPrice
			}));
			var o = a(371),
				i = a.n(o),
				c = a(175),
				l = a.n(c),
				E = a(368),
				u = a.n(E),
				d = a(71),
				_ = a.n(d),
				O = a(169),
				T = a.n(O),
				I = a(4),
				S = a(16),
				p = a(26),
				R = a(2),
				A = a(88),
				b = a(82),
				N = a(453),
				C = a(40),
				y = a(10),
				D = a(174);
			const calculateMarketOrderPriceDataForAmount = ({
					amount: t,
					indexPrice: r = null,
					side: a,
					orderbookBuys: o,
					orderbookSells: i
				}) => {
					var c;
					let E, d = Object(y.b)(t),
						O = y.a.ZERO;
					if (a === p.a.BUY) {
						if (T()(i)) return null;
						_()(i, ({
							price: t,
							size: r
						}) => d.lte(r) ? (O = O.plus(d.times(t)), d = y.a.ZERO, E = t, !1) : (O = O.plus(Object(y.b)(r).times(t)), d = d.minus(r), !0))
					} else {
						if (T()(o)) return null;
						u()(o, ({
							price: t,
							size: r
						}) => d.lte(r) ? (O = O.plus(d.times(t)), d = y.a.ZERO, E = t, !1) : (O = O.plus(Object(y.b)(r).times(t)), d = d.minus(r), !0))
					}
					if (d.gt(0)) return null;
					const I = Object(y.b)(E),
						S = O.div(t);
					let R, A;
					if (a === p.a.BUY) {
						const t = i[0].price;
						A = I.minus(t).div(t), R = r && Object(y.b)(S).minus(r).div(r)
					} else {
						const t = l()(o).price;
						A = Object(y.b)(t).minus(E).div(t), R = r && Object(y.b)(r).minus(S).div(r)
					}
					return {
						indexPriceSlippage: null !== (c = R) && void 0 !== c ? c : y.a.ZERO,
						priceImpact: A,
						worstPrice: I,
						marketOrderPrice: S
					}
				},
				calculateMarketOrderExecutionPrice = ({
					account: t,
					accountData: r,
					currentMarketData: a,
					currentOrderPrice: o,
					currentPosition: i,
					currentTradeData: c
				}) => {
					const l = c.selectedOrderSide,
						E = c.amountInput;
					let u = o.times(l === p.a.BUY ? y.a.ONE.plus(S.o) : y.a.ONE.minus(S.o));
					const d = {
						side: l,
						remainingSize: E,
						price: u
					};
					return getIsOrderOverMaxLeverage({
						account: t,
						accountData: r,
						currentMarketData: a,
						currentPosition: i,
						order: d
					}) ? (u = o.times(l === p.a.BUY ? y.a.ONE.plus(S.p) : y.a.ONE.minus(S.p)), d.price = u, getIsOrderOverMaxLeverage({
						account: t,
						accountData: r,
						currentMarketData: a,
						currentPosition: i,
						order: d
					}) ? o : u) : u
				},
				getCurrentTradeErrorData = ({
					account: t,
					accountData: r,
					canUserTrade: a,
					currentMarketConfig: {
						baseSymbol: o
					},
					currentMarketData: i,
					currentMarketLiquidationPrice: c,
					currentMarketOrders: l,
					currentOrderPrice: E,
					currentOrderPriceData: u,
					currentPosition: d,
					currentTradeData: _,
					newPositionData: O,
					postTradeAccountData: T,
					warningMessageData: A
				}) => {
					const C = _.amountInput,
						m = _.stopPriceInput,
						h = _.selectedTradeType,
						L = _.selectedOrderSide,
						g = _.takeProfitPriceInput;
					if (!i || "" === C) return null;
					const P = i.indexPrice,
						v = i.initialMarginFraction,
						w = i.market,
						M = i.maxPositionSize,
						U = i.minOrderSize,
						G = i.stepSize,
						j = i.status,
						k = d || {},
						x = k.side,
						H = k.size,
						B = (T || {}).newMarginUsage,
						W = O || {},
						Y = W.newPositionSize,
						K = W.newPositionSide,
						V = W.newLeverage,
						Z = Object(y.b)(C);
					if (l && h !== S.D.MARKET) {
						let t = 0;
						if (l.forEach(r => {
								[p.c.OPEN, p.c.PENDING, p.c.UNTRIGGERED].includes(r.status) && r.side === L && (t += 1)
							}), t >= S.r) return {
							stringKey: R.a.USER_MAX_ORDERS
						}
					}
					const z = (!1 === a || j === I.f.CloseOnly) && Object(y.b)(H).abs().lt(U);
					if (Z.lt(U) && !z) return {
						stringKey: R.a.ORDER_SIZE_BELOW_MIN_SIZE,
						stringParams: {
							MIN_SIZE: U,
							SYMBOL: o
						}
					};
					if (!Z.modulo(G).isZero()) return {
						stringKey: R.a.AMOUNT_INPUT_STEP_SIZE,
						stringParams: {
							STEP_SIZE: G
						}
					};
					if (!Object(N.a)({
							account: t
						}) && Y && Y.abs().gt(M)) return {
						stringKey: R.a.NEW_POSITION_SIZE_OVER_MAX,
						stringParams: {
							MAX_SIZE: M,
							SYMBOL: o
						}
					};
					const X = !d || K && K !== x || Y && Y.abs().gt(Object(y.b)(H).abs());
					switch (h) {
						case S.D.MARKET: {
							if (!E) return {
								stringKey: R.a.MARKET_ORDER_NOT_ENOUGH_LIQUIDITY
							};
							const t = u.indexPriceSlippage,
								r = u.priceImpact;
							if (X) {
								if (t.gte(S.m)) return {
									stringKey: R.a.MARKET_ORDER_ERROR_INDEX_PRICE_SLIPPAGE,
									stringParams: {
										SLIPPAGE: t.times(100).toFixed(b.c) + "%"
									}
								};
								if (r.gte(S.m)) return {
									stringKey: R.a.MARKET_ORDER_ERROR_ORDERBOOK_SLIPPAGE,
									stringParams: {
										SLIPPAGE: r.times(100).toFixed(b.c) + "%"
									}
								};
								if (A && A.stringKey === R.a.MARKET_ORDER_CLOSE_TO_MAX_LEVERAGE && !r.isZero()) return {
									stringKey: R.a.MARKET_ORDER_PRICE_IMPACT_AT_MAX_LEVERAGE
								}
							}
							break
						}
						case S.D.STOP_LIMIT:
						case S.D.TRAILING_STOP:
						case S.D.STOP_MARKET:
							if ("" !== m) {
								const t = Object(y.b)(m);
								if (L === p.a.BUY && t.lt(P)) return {
									stringKey: R.a.TRIGGER_MUST_ABOVE_INDEX_PRICE,
									stringParams: {
										INDEX_PRICE: "$" + Object(y.b)(P).toNumber().toLocaleString("en")
									}
								};
								if (L === p.a.SELL && t.gt(P)) return {
									stringKey: R.a.TRIGGER_MUST_BELOW_INDEX_PRICE,
									stringParams: {
										INDEX_PRICE: "$" + Object(y.b)(P).toNumber().toLocaleString("en")
									}
								}
							}
							break;
						case S.D.TAKE_PROFIT:
						case S.D.TAKE_PROFIT_MARKET: {
							const t = h === S.D.TAKE_PROFIT ? g : m;
							if ("" !== t) {
								const r = Object(y.b)(t);
								if (L === p.a.BUY && r.gt(P)) return {
									stringKey: R.a.TRIGGER_MUST_BELOW_INDEX_PRICE,
									stringParams: {
										INDEX_PRICE: "$" + Object(y.b)(P).toNumber().toLocaleString("en")
									}
								};
								if (L === p.a.SELL && r.lt(P)) return {
									stringKey: R.a.TRIGGER_MUST_ABOVE_INDEX_PRICE,
									stringParams: {
										INDEX_PRICE: "$" + Object(y.b)(P).toNumber().toLocaleString("en")
									}
								}
							}
							break
						}
					}
					if (E) {
						if (r && r.equity.isZero()) return {
							stringKey: R.a.NO_EQUITY_DEPOSIT_FIRST
						};
						if (X) {
							const r = Object(D.a)({
								account: t,
								marketData: i,
								positionSize: Y
							});
							if (!V || V.gt(y.a.ONE.div(r)) || !V.isFinite()) return {
								stringKey: Object(y.b)(v).lt(r) ? R.a.INVALID_LARGE_POSITION_LEVERAGE : R.a.INVALID_NEW_POSITION_LEVERAGE
							};
							if (!B || B.gt(1) || !B.isFinite()) return {
								stringKey: R.a.INVALID_NEW_ACCOUNT_MARGIN_USAGE
							}
						}
						if (h === S.D.STOP_MARKET && c && !X) {
							const t = calculateStopMarketPrice({
								currentOrderPrice: E,
								currentMarketOrderPriceData: u,
								market: w,
								orderSide: L,
								tradeType: h
							});
							if (L === p.a.BUY && (t.gte(c) || E.gte(c))) return {
								stringKey: R.a.BUY_TRIGGER_TOO_CLOSE_TO_LIQUIDATION_PRICE,
								stringParams: {
									TRIGGER_PRICE_LIMIT: c.toFixed(b.g)
								}
							};
							if (L === p.a.SELL && (t.lte(c) || E.lte(c))) return {
								stringKey: R.a.SELL_TRIGGER_TOO_CLOSE_TO_LIQUIDATION_PRICE,
								stringParams: {
									TRIGGER_PRICE_LIMIT: c.toFixed(b.g)
								}
							}
						}
						const a = getOrderWithCurrentOrdersErrorData({
							account: t,
							currentMarketData: i,
							currentMarketOrders: l,
							currentOrderPrice: E,
							currentOrderPriceData: u,
							currentTradeData: _,
							isIncreasingPosition: X,
							newPositionData: O,
							postTradeAccountData: T
						});
						if (a) return a
					}
					return null
				},
				getCurrentTradeWarningData = ({
					account: t,
					accountData: r,
					currentMarketData: a,
					currentOrderPrice: o,
					currentOrderPriceData: i,
					currentPosition: c,
					currentTradeData: {
						amountInput: l,
						selectedTradeType: E,
						selectedOrderSide: u
					}
				}) => {
					if (!r || !a || "" === l) return null;
					if (E === S.D.MARKET) {
						if (o && getIsOrderOverMaxLeverage({
								account: t,
								accountData: r,
								currentPosition: c,
								currentMarketData: a,
								order: {
									side: u,
									remainingSize: l,
									price: o.times(u === p.a.BUY ? y.a.ONE.plus(S.p) : y.a.ONE.minus(S.p))
								}
							})) return {
							stringKey: R.a.MARKET_ORDER_CLOSE_TO_MAX_LEVERAGE,
							noMarketOrderBuffer: !0
						};
						if (i) {
							const t = i.indexPriceSlippage,
								r = i.priceImpact;
							if (t.gt(S.q) && t.lt(S.m)) return {
								stringKey: R.a.MARKET_ORDER_WARNING_INDEX_PRICE_SLIPPAGE,
								stringParams: {
									SLIPPAGE: t.times(100).toFixed(b.c) + "%"
								}
							};
							if (r.gt(S.q) && r.lt(S.m)) return {
								stringKey: R.a.MARKET_ORDER_WARNING_ORDERBOOK_SLIPPAGE,
								stringParams: {
									SLIPPAGE: r.times(100).toFixed(b.c) + "%"
								}
							}
						}
					}
					return S.E.includes(E) && !Object(C.b)({
						key: E === S.D.STOP_MARKET ? C.a.HAS_DISMISSED_STOP_MARKET_WARNING : C.a.HAS_DISMISSED_TAKE_PROFIT_MARKET_WARNING
					}) ? {
						learnMoreLink: "https://help.dydx.exchange/articles/4797992-perpetual-order-types",
						onDismiss: () => {
							Object(C.d)({
								key: E === S.D.STOP_MARKET ? C.a.HAS_DISMISSED_STOP_MARKET_WARNING : C.a.HAS_DISMISSED_TAKE_PROFIT_MARKET_WARNING,
								value: !0
							})
						},
						stringKey: E === S.D.STOP_MARKET ? R.a.STOP_MARKET_ORDER_MAY_NOT_EXECUTE : R.a.TAKE_PROFIT_MARKET_ORDER_MAY_NOT_EXECUTE
					} : null
				},
				getIsOrderOverMaxLeverage = ({
					account: t,
					accountData: r,
					currentMarketData: a,
					currentPosition: o,
					order: i
				}) => {
					if (!r || !a) return null;
					const c = a.oraclePrice,
						l = o || {},
						E = l.size,
						u = l.side,
						d = Object(D.b)({
							accountEquity: r.equity,
							positionSize: E,
							positionSide: u,
							oraclePrice: c,
							order: i
						}),
						_ = d.newEquity,
						O = d.newPositionSize;
					if (O && O.isZero()) return !1;
					const T = Object(D.c)({
							accountEquity: _,
							positionSize: O,
							oraclePrice: c
						}),
						I = Object(D.a)({
							account: t,
							marketData: a,
							positionSize: O
						});
					return !T || T.gt(y.a.ONE.div(I)) || T.lt(0)
				},
				getOrderWithCurrentOrdersErrorData = ({
					account: t,
					currentMarketData: r,
					currentMarketOrders: a,
					currentOrderPrice: o,
					currentOrderPriceData: i,
					currentTradeData: {
						selectedOrderSide: c,
						selectedTradeType: l,
						stopPriceInput: E
					},
					isIncreasingPosition: u,
					newPositionData: d,
					postTradeAccountData: O
				}) => {
					let T = o;
					l === S.D.MARKET && (T = i.worstPrice);
					const I = [];
					let A = !1;
					if (_()(a, ({
							status: t,
							type: r,
							price: a,
							side: o,
							remainingSize: i
						}) => {
							if (t === p.c.OPEN && r === p.e.LIMIT) {
								if (c === p.a.BUY && o === p.a.SELL && T.gte(a) || c === p.a.SELL && o === p.a.BUY && T.lte(a))
									if ("" !== E) {
										const t = Object(y.b)(E);
										(c === p.a.BUY && t.lt(a) || c === p.a.SELL && t.gt(a)) && (A = !0)
									} else A = !0;
								if (c === o && (c === p.a.BUY && T.lte(a) || c === p.a.SELL && T.gte(a)))
									if ("" !== E) {
										const t = Object(y.b)(E);
										(c === p.a.BUY && t.lt(a) || c === p.a.SELL && t.gt(a)) && I.push({
											price: a,
											remainingSize: i,
											side: o
										})
									} else I.push({
										price: a,
										remainingSize: i,
										side: o
									})
							}
						}), A) return {
						stringKey: R.a.ORDER_CROSSES_OWN_ORDER
					};
					if (l !== S.D.MARKET && d && O) {
						const a = O.newEquity,
							o = d.newPositionSize,
							i = d.newPositionSide,
							c = r.oraclePrice;
						let E = a,
							T = o;
						_()(I, t => {
							const r = Object(D.b)({
									accountEquity: a,
									positionSize: o,
									positionSide: i,
									oraclePrice: c,
									order: t
								}),
								l = r.newEquity,
								u = r.newPositionSize;
							E = l, T = u
						}), T = T.abs();
						const p = Object(D.a)({
								account: t,
								marketData: r,
								positionSize: T
							}),
							A = Object(D.c)({
								accountEquity: E,
								positionSize: T,
								oraclePrice: c
							});
						if (!(!u && l === S.D.LIMIT) && A && A.gt(y.a.ONE.div(p))) return {
							stringKey: R.a.ORDER_WITH_CURRENT_ORDERS_INVALID
						}
					}
					return null
				},
				getOnPlaceOrderErrorData = t => {
					var r;
					const a = null !== (r = null === t || void 0 === t ? void 0 : t.message) && void 0 !== r ? r : "";
					return a.includes("order would put account below collateralization") ? {
						stringKey: R.a.ORDER_BELOW_COLLATERALIZATION
					} : a.includes("is below user takerFeeRate") ? {
						stringKey: R.a.TAKER_FEE_INVALID
					} : a.includes("order would put user above max") ? {
						stringKey: R.a.USER_MAX_ORDERS
					} : a.includes("Cannot have other open/pending/untriggered") ? {
						stringKey: R.a.LIMITED_ORDERS_FOR_PAIR
					} : {
						stringKey: R.a.SOMETHING_WENT_WRONG
					}
				},
				extractUserTradeOptionsFromCurrentTradeData = ({
					goodTilTimeInput: t,
					goodTilTimeTimescale: r,
					postOnlyChecked: a,
					selectedTimeInForceOption: o
				}) => ({
					goodTilTimeInput: t,
					goodTilTimeTimescale: r,
					postOnlyChecked: a,
					selectedTimeInForceOption: o
				}),
				m = i()(({
					currentMarketData: t,
					currentTradeData: r,
					marketOrderPrice: a,
					newUsdInputAmount: o,
					setTradeData: i
				}) => {
					if (!t || !r || !o) return;
					const c = t.indexPrice,
						l = t.stepSize,
						E = r.amountInput,
						u = r.limitPriceInput,
						d = r.selectedTradeType,
						_ = r.stopPriceInput,
						O = Object(y.e)(l),
						T = Object(y.b)(u),
						I = Object(y.b)(_),
						p = Object(y.b)(o);
					let R, A = "";
					if (!p.isZero()) switch (d) {
						case S.D.MARKET: {
							R = p.div(null !== a && void 0 !== a ? a : c);
							const t = R.toFixed(O);
							R.isNaN() || "0" === t || (A = t);
							break
						}
						case S.D.LIMIT:
						case S.D.STOP_LIMIT:
						case S.D.TAKE_PROFIT:
							u && (A = p.div(T).toFixed(O));
							break;
						case S.D.STOP_MARKET:
						case S.D.TAKE_PROFIT_MARKET:
							_ && (A = p.div(I).toFixed(O))
					}
					A !== E && i({
						amountInput: A
					})
				}, 100),
				calculateStopMarketPrice = ({
					currentOrderPrice: t,
					currentMarketOrderPriceData: r,
					market: a,
					orderSide: o,
					tradeType: i
				}) => {
					const c = (({
							market: t,
							tradeType: r
						}) => {
							switch (t) {
								case A.e.BTC_USD:
								case A.e.ETH_USD:
									return r === S.D.STOP_MARKET ? S.x : S.A;
								default:
									return r === S.D.STOP_MARKET ? S.w : S.z
							}
						})({
							market: a,
							tradeType: i
						}),
						l = (r || {}).priceImpact,
						E = void 0 === l ? y.a.ZERO : l,
						u = o === p.a.SELL ? y.a.ONE.minus(E.abs().plus(Object(y.b)(c))) : y.a.ONE.plus(E.abs().plus(Object(y.b)(c)));
					return Object(y.b)(t).times(u)
				},
				calculateStopMarketOrderExecutionPrice = ({
					account: t,
					accountData: r,
					currentMarketData: a,
					currentOrderPrice: o,
					currentPosition: i,
					currentTradeData: c
				}) => {
					const l = c.selectedOrderSide,
						E = {
							side: l,
							remainingSize: c.amountInput,
							price: o
						};
					if (!getIsOrderOverMaxLeverage({
							account: t,
							accountData: r,
							currentMarketData: a,
							currentPosition: i,
							order: E
						})) return o;
					const u = o.times(l === p.a.BUY ? y.a.ONE.plus(S.p) : y.a.ONE.minus(S.p));
					return E.price = u, getIsOrderOverMaxLeverage({
						account: t,
						accountData: r,
						currentMarketData: a,
						currentPosition: i,
						order: E
					}) ? o : u
				}
		},
		462: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return getLimitOrderStatusKey
			})), a.d(r, "b", (function() {
				return getOrderStatusIcon
			}));
			var o = a(15),
				i = a(16),
				c = a(26),
				l = a(2),
				E = a(10);
			const getLimitOrderStatusKey = ({
					status: t,
					filledAmount: r,
					cancelReason: a
				}) => {
					if (a === i.b.EXPIRED) return l.a.EXPIRED;
					switch (t) {
						case c.c.PENDING:
							return l.a.PENDING;
						case c.c.OPEN:
							return Object(E.b)(r).isZero() ? l.a.OPEN_STATUS : l.a.PARTIALLY_FILLED;
						case c.c.FILLED:
							return l.a.ORDER_FILLED;
						case c.c.CANCELED:
							return l.a.CANCELED;
						case c.c.UNTRIGGERED:
							return l.a.UNTRIGGERED;
						default:
							return null
					}
				},
				getOrderStatusIcon = ({
					status: t,
					filledAmount: r
				}) => {
					switch (t) {
						case c.c.PENDING:
							return o.ab;
						case c.c.OPEN:
							return Object(E.b)(r).isZero() ? o.Y : o.Z;
						case c.c.FILLED:
							return o.X;
						case c.c.CANCELED:
							return o.W;
						case c.c.UNTRIGGERED:
							return o.bb;
						default:
							return null
					}
				}
		},
		47: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return i
			})), a.d(r, "f", (function() {
				return c
			})), a.d(r, "c", (function() {
				return l
			})), a.d(r, "d", (function() {
				return E
			})), a.d(r, "b", (function() {
				return u
			})), a.d(r, "e", (function() {
				return d
			}));
			var o = a(24);
			const i = Object(o.a)("ADD_NOTIFICATION"),
				c = Object(o.a)("UPDATE_NOTIFICATION"),
				l = Object(o.a)("REMOVE_NOTIFICATION_BY_ID"),
				E = Object(o.a)("REMOVE_NOTIFICATION_BY_TYPE"),
				u = Object(o.a)("REMOVE_NON_PERMANENT_NOTIFICATION_TYPES"),
				d = Object(o.a)("SET_NOTIFICATIONS_SEEN")
		},
		51: function(t, r, a) {
			"use strict";
			a.d(r, "c", (function() {
				return i
			})), a.d(r, "b", (function() {
				return c
			})), a.d(r, "a", (function() {
				return l
			})), a.d(r, "d", (function() {
				return E
			}));
			var o = a(72);
			const i = {
					"1M": "1",
					"5M": "5",
					"15M": "15",
					"30M": "30",
					"1H": "60",
					"4H": "240",
					"1D": "1D"
				},
				c = {
					[i["1M"]]: 6e4,
					[i["5M"]]: 3e5,
					[i["15M"]]: 9e5,
					[i["30M"]]: 18e5,
					[i["1H"]]: 36e5,
					[i["4H"]]: 144e5,
					[i["1D"]]: 864e5
				},
				l = {
					[i["1M"]]: {
						defaultTimeframe: {
							hours: 1
						}
					},
					[i["5M"]]: {
						defaultTimeframe: {
							hours: 5
						}
					},
					[i["15M"]]: {
						defaultTimeframe: {
							hours: 15
						}
					},
					[i["30M"]]: {
						defaultTimeframe: {
							hours: 30
						}
					},
					[i["1H"]]: {
						defaultTimeframe: {
							days: 3
						}
					},
					[i["4H"]]: {
						defaultTimeframe: {
							days: 12
						}
					},
					[i["1D"]]: {
						defaultTimeframe: {
							months: 2
						}
					}
				},
				E = {
					[i["1M"]]: o.CandleResolution.ONE_MIN,
					[i["5M"]]: o.CandleResolution.FIVE_MINS,
					[i["15M"]]: o.CandleResolution.FIFTEEN_MINS,
					[i["30M"]]: o.CandleResolution.THIRTY_MINS,
					[i["1H"]]: o.CandleResolution.ONE_HOUR,
					[i["4H"]]: o.CandleResolution.FOUR_HOURS,
					[i["1D"]]: o.CandleResolution.ONE_DAY
				}
		},
		55: function(t, r, a) {
			"use strict";
			a.d(r, "c", (function() {
				return i
			})), a.d(r, "f", (function() {
				return c
			})), a.d(r, "e", (function() {
				return l
			})), a.d(r, "b", (function() {
				return E
			})), a.d(r, "a", (function() {
				return u
			})), a.d(r, "g", (function() {
				return d
			})), a.d(r, "d", (function() {
				return _
			}));
			var o = a(24);
			const i = Object(o.a)("SET_USER"),
				c = (Object(o.a)("UPDATE_USER_DATA"), Object(o.a)("SET_USER_HAS_ONBOARDED")),
				l = Object(o.a)("SET_USER_ALREADY_EXISTS"),
				E = Object(o.a)("SET_IS_USER_REGISTERED"),
				u = Object(o.a)("SET_IS_USER_ELIGIBLE_FOR_PROMO"),
				d = (Object(o.a)("USER_SENT_REGISTRATION"), Object(o.a)("SET_USER_RESTRICTIONS")),
				_ = Object(o.a)("SET_USER_AFFILIATE_APPLICATION_STATUS")
		},
		555: function(t, r, a) {
			"use strict";
			(function(t) {
				a.d(r, "b", (function() {
					return R
				})), a.d(r, "a", (function() {
					return A
				}));
				var o = a(218),
					i = a.n(o),
					c = a(450),
					l = a.n(c),
					E = a(349),
					u = a(873),
					d = a.n(u),
					_ = a(874),
					O = a(876),
					T = a(267),
					I = a(878),
					S = a(451),
					p = a(454);

				function ownKeys(t, r) {
					var a = Object.keys(t);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(t);
						r && (o = o.filter((function(r) {
							return Object.getOwnPropertyDescriptor(t, r).enumerable
						}))), a.push.apply(a, o)
					}
					return a
				}

				function _objectSpread(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = null != arguments[r] ? arguments[r] : {};
						r % 2 ? ownKeys(Object(a), !0).forEach((function(r) {
							_defineProperty(t, r, a[r])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach((function(r) {
							Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
						}))
					}
					return t
				}

				function _defineProperty(t, r, a) {
					return r in t ? Object.defineProperty(t, r, {
						value: a,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : t[r] = a, t
				}

				function _slicedToArray(t, r) {
					return function _arrayWithHoles(t) {
						if (Array.isArray(t)) return t
					}(t) || function _iterableToArrayLimit(t, r) {
						var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
						if (null == a) return;
						var o, i, c = [],
							l = !0,
							E = !1;
						try {
							for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
						} catch (u) {
							E = !0, i = u
						} finally {
							try {
								l || null == a.return || a.return()
							} finally {
								if (E) throw i
							}
						}
						return c
					}(t, r) || function _unsupportedIterableToArray(t, r) {
						if (!t) return;
						if ("string" === typeof t) return _arrayLikeToArray(t, r);
						var a = Object.prototype.toString.call(t).slice(8, -1);
						"Object" === a && t.constructor && (a = t.constructor.name);
						if ("Map" === a || "Set" === a) return Array.from(t);
						if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return _arrayLikeToArray(t, r)
					}(t, r) || function _nonIterableRest() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function _arrayLikeToArray(t, r) {
					(null == r || r > t.length) && (r = t.length);
					for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
					return o
				}

				function asyncGeneratorStep(t, r, a, o, i, c, l) {
					try {
						var E = t[c](l),
							u = E.value
					} catch (d) {
						return void a(d)
					}
					E.done ? r(u) : Promise.resolve(u).then(o, i)
				}

				function _asyncToGenerator(t) {
					return function() {
						var r = this,
							a = arguments;
						return new Promise((function(o, i) {
							var c = t.apply(r, a);

							function _next(t) {
								asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
							}

							function _throw(t) {
								asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
							}
							_next(void 0)
						}))
					}
				}
				const R = function() {
					var t = _asyncToGenerator((function*() {
						const t = yield O.a.create();
						return new _.a(t)
					}));
					return function ledgerEthereumBrowserClientFactoryAsync() {
						return t.apply(this, arguments)
					}
				}();
				class A extends S.a {
					constructor(r) {
						var a;
						super(), a = this, this.getPath = () => this._baseDerivationPath, this.setPath = t => {
							this._baseDerivationPath = t
						}, this.getAccountsAsync = function() {
							var t = _asyncToGenerator((function*(t = 10) {
								const r = yield a._initialDerivedKeyInfoAsync(), o = Object(p.b)(r, t);
								return i()(o, t => t.address)
							}));
							return function() {
								return t.apply(this, arguments)
							}
						}(), this.signTransactionAsync = function() {
							var r = _asyncToGenerator((function*(r) {
								if (void 0 === r.from || !(({
										walletAddress: t
									}) => {
										try {
											l.a.utils.toChecksumAddress(t)
										} catch (r) {
											return !1
										}
										return !0
									})({
										walletAddress: r.from
									})) throw new Error("From address missing or invalid");
								const o = yield a._initialDerivedKeyInfoAsync(), i = a._findDerivedKeyInfoForAddress(o, r.from);
								a._ledgerClientIfExists = yield a._createLedgerClientAsync();
								const c = new E.Transaction(r, 3 === a._networkId ? {
									chain: "ropsten"
								} : {});
								c.raw[6] = t.from([a._networkId]);
								c.raw[7] = t.from([]);
								c.raw[8] = t.from([]);
								const u = c.serialize().toString("hex");
								try {
									const r = i.derivationPath,
										o = yield a._ledgerClientIfExists.signTransaction(r, u);
									c.r = t.from(o.r, "hex"), c.s = t.from(o.s, "hex"), c.v = t.from(o.v, "hex");
									const l = 35;
									if (Math.floor((c.v[0] - l) / 2) !== a._networkId) {
										yield a._destroyLedgerClientAsync();
										throw new Error("Ledger firmware too old")
									}
									const E = "0x" + c.serialize().toString("hex");
									return yield a._destroyLedgerClientAsync(), E
								} catch (d) {
									throw yield a._destroyLedgerClientAsync(), d
								}
							}));
							return function(t) {
								return r.apply(this, arguments)
							}
						}(), this.signPersonalMessageAsync = function() {
							var r = _asyncToGenerator((function*(r, o) {
								if (void 0 === o) throw new Error("Data missing for personal sign message");
								const i = yield a._initialDerivedKeyInfoAsync(), c = a._findDerivedKeyInfoForAddress(i, r);
								a._ledgerClientIfExists = yield a._createLedgerClientAsync();
								try {
									const r = c.derivationPath,
										i = yield a._ledgerClientIfExists.signPersonalMessage(r, Object(T.stripHexPrefix)(t.from(o).toString("hex"))), l = 27, E = i.v - l, u = 16;
									let d = E.toString(u);
									d.length < 2 && (d = "0" + E);
									const _ = `0x${i.r}${i.s}${d}`;
									return yield a._destroyLedgerClientAsync(), _
								} catch (l) {
									throw yield a._destroyLedgerClientAsync(), l
								}
							}));
							return function(t, a) {
								return r.apply(this, arguments)
							}
						}(), this.signTypedDataAsync = _asyncToGenerator((function*() {
							throw new Error("Method not supported")
						})), this._createLedgerClientAsync = _asyncToGenerator((function*() {
							if (yield a._connectionLock.acquire(), void 0 !== a._ledgerClientIfExists) throw a._connectionLock.release(), new Error("Multiple Ledger connections are not allowed");
							const t = yield a._ledgerEthereumClientFactoryAsync();
							return a._connectionLock.release(), t
						})), this._destroyLedgerClientAsync = _asyncToGenerator((function*() {
							yield a._connectionLock.acquire(), void 0 !== a._ledgerClientIfExists ? (yield a._ledgerClientIfExists.transport.close(), a._ledgerClientIfExists = void 0, a._connectionLock.release()) : a._connectionLock.release()
						})), this._initialDerivedKeyInfoAsync = _asyncToGenerator((function*() {
							a._ledgerClientIfExists = yield a._createLedgerClientAsync();
							const r = "m/" + a._baseDerivationPath;
							let o;
							try {
								o = yield a._ledgerClientIfExists.getAddress(r, a._shouldAlwaysAskForConfirmation, !0)
							} finally {
								yield a._destroyLedgerClientAsync()
							}
							const i = new d.a;
							i.publicKey = t.from(o.publicKey, "hex"), i.chainCode = t.from(o.chainCode, "hex");
							return {
								hdKey: i,
								address: Object(p.a)(i),
								derivationPath: r,
								baseDerivationPath: a._baseDerivationPath
							}
						})), this._findDerivedKeyInfoForAddress = (t, r) => {
							const a = Object(p.c)(r, t, this._addressSearchLimit);
							if (void 0 === a) throw new Error("Address not found: " + r);
							return a
						}, this.handleRequest = function() {
							var t = _asyncToGenerator((function*(t, r, o) {
								let i, c, l, E;
								switch (t.method) {
									case "eth_coinbase":
										try {
											i = yield a.getAccountsAsync(), o(null, i[0])
										} catch (d) {
											o(d)
										}
										return;
									case "eth_accounts":
										try {
											i = yield a.getAccountsAsync(), o(null, i)
										} catch (d) {
											o(d)
										}
										return;
									case "eth_sendTransaction":
										c = t.params[0];
										try {
											const t = yield a._populateMissingTxParamsAsync(c), r = yield a.signTransactionAsync(t);
											o(null, (yield a._emitSendTransactionAsync(r)).result)
										} catch (d) {
											o(d)
										}
										return;
									case "eth_signTransaction":
										c = t.params[0];
										try {
											const t = yield a._populateMissingTxParamsAsync(c), r = yield a.signTransactionAsync(t);
											o(null, {
												raw: r,
												tx: c
											})
										} catch (d) {
											o(d)
										}
										return;
									case "eth_sign":
									case "personal_sign": {
										const r = "eth_sign" === t.method ? t.params[1] : t.params[0];
										l = "eth_sign" === t.method ? t.params[0] : t.params[1];
										try {
											o(null, yield a.signPersonalMessageAsync(r, l))
										} catch (d) {
											o(d)
										}
										return
									}
									case "eth_signTypedData":
										var u = _slicedToArray(t.params, 2);
										l = u[0], E = u[1];
										try {
											o(null, yield a.signTypedDataAsync(l, E))
										} catch (d) {
											o(d)
										}
										return;
									default:
										r()
								}
							}));
							return function(r, a, o) {
								return t.apply(this, arguments)
							}
						}(), this._emitSendTransactionAsync = function() {
							var t = _asyncToGenerator((function*(t) {
								const r = {
									method: "eth_sendRawTransaction",
									params: [t]
								};
								return yield a.emitPayloadAsync(r)
							}));
							return function(r) {
								return t.apply(this, arguments)
							}
						}(), this._populateMissingTxParamsAsync = function() {
							var t = _asyncToGenerator((function*(t) {
								let r = t;
								if (void 0 === t.gasPrice) {
									const t = (yield a.emitPayloadAsync({
										method: "eth_gasPrice",
										params: []
									})).result.toString();
									r = _objectSpread(_objectSpread({}, r), {}, {
										gasPrice: t
									})
								}
								if (void 0 === t.nonce) {
									const o = (yield a.emitPayloadAsync({
										method: "eth_getTransactionCount",
										params: [t.from, "pending"]
									})).result;
									r = _objectSpread(_objectSpread({}, r), {}, {
										nonce: o
									})
								}
								if (void 0 === t.gas) {
									const o = (yield a.emitPayloadAsync({
										method: "eth_estimateGas",
										params: [t]
									})).result.toString();
									r = _objectSpread(_objectSpread({}, r), {}, {
										gas: o
									})
								}
								return r
							}));
							return function(r) {
								return t.apply(this, arguments)
							}
						}(), this._connectionLock = new I.Lock, this._networkId = r.networkId, this._ledgerEthereumClientFactoryAsync = r.ledgerEthereumClientFactoryAsync, this._baseDerivationPath = r.baseDerivationPath || "44'/60'/0'", this._shouldAlwaysAskForConfirmation = void 0 !== r.accountFetchingConfigs && void 0 !== r.accountFetchingConfigs.shouldAskForOnDeviceConfirmation && r.accountFetchingConfigs.shouldAskForOnDeviceConfirmation, this._addressSearchLimit = void 0 !== r.accountFetchingConfigs && void 0 !== r.accountFetchingConfigs.addressSearchLimit ? r.accountFetchingConfigs.addressSearchLimit : 1e3
					}
				}
			}).call(this, a(9).Buffer)
		},
		56: function(t, r, a) {
			"use strict";
			var o = a(0),
				i = a.n(o),
				c = a(1),
				l = a.n(c),
				E = a(13),
				u = a.n(E),
				d = a(15),
				_ = "_24Rs6XJobDArwNvvKEsi3q",
				O = "_1V3RENF6J0rr6aMPMuKkz3",
				T = "_2incCcpTM6DYNYZcT-8E5v";
			const ToastContainer = ({
				autoClose: t,
				children: r,
				closeToast: a,
				isClickable: o
			}) => (t && setTimeout(a, t), i.a.createElement("div", {
				className: u()(_, {
					[T]: o
				})
			}, i.a.createElement("div", {
				role: "button",
				tabIndex: 0,
				className: O,
				onClick: a
			}, i.a.createElement(d.o, null)), r));
			ToastContainer.propTypes = {
				autoClose: l.a.number,
				closeToast: l.a.func.isRequired,
				isClickable: l.a.bool,
				children: l.a.oneOfType([l.a.arrayOf(l.a.node), l.a.node, l.a.string]).isRequired
			};
			r.a = ToastContainer
		},
		57: function(t, r, a) {
			"use strict";
			a.d(r, "e", (function() {
				return getUser
			})), a.d(r, "h", (function() {
				return getUserData
			})), a.d(r, "i", (function() {
				return getUserEmailNotifications
			})), a.d(r, "l", (function() {
				return getUserPreferences
			})), a.d(r, "g", (function() {
				return getUserAlreadyExists
			})), a.d(r, "c", (function() {
				return getIsUserRegistered
			})), a.d(r, "d", (function() {
				return getIsUserRestricted
			})), a.d(r, "b", (function() {
				return getIsUserEligibleForPromo
			})), a.d(r, "m", (function() {
				return getUserRestrictions
			})), a.d(r, "j", (function() {
				return getUserIsSharingAddress
			})), a.d(r, "n", (function() {
				return getUsername
			})), a.d(r, "a", (function() {
				return getGaslessResetTime
			})), a.d(r, "k", (function() {
				return getUserNumGaslessDeposits
			})), a.d(r, "f", (function() {
				return getUserAffiliateApplicationStatus
			}));
			const getUser = t => t.user.user,
				getUserData = t => {
					var r;
					return null === (r = t.user.user) || void 0 === r ? void 0 : r.userData
				},
				getUserEmailNotifications = t => {
					var r, a;
					return null === (r = t.user.user) || void 0 === r || null === (a = r.userData) || void 0 === a ? void 0 : a.notifications
				},
				getUserPreferences = t => {
					var r, a;
					return null === (r = t.user.user) || void 0 === r || null === (a = r.userData) || void 0 === a ? void 0 : a.preferences
				},
				getUserAlreadyExists = t => t.user.userAlreadyExists,
				getIsUserRegistered = t => t.user.isUserRegistered,
				getIsUserRestricted = t => {
					var r;
					return null === (r = t.user.userRestrictions) || void 0 === r ? void 0 : r.isRestricted
				},
				getIsUserEligibleForPromo = t => t.user.isUserEligibleForPromo,
				getUserRestrictions = t => t.user.userRestrictions,
				getUserIsSharingAddress = t => {
					var r, a;
					return null === (r = null === (a = t.user.user) || void 0 === a ? void 0 : a.isSharingAddress) || void 0 === r || r
				},
				getUsername = t => {
					var r;
					return null === (r = t.user.user) || void 0 === r ? void 0 : r.username
				},
				getGaslessResetTime = t => {
					var r;
					return null === (r = t.user) || void 0 === r ? void 0 : r.gaslessResetTime
				},
				getUserNumGaslessDeposits = t => {
					var r;
					return null === (r = t.user) || void 0 === r ? void 0 : r.numGaslessDeposits
				},
				getUserAffiliateApplicationStatus = t => {
					var r;
					return null === (r = t.user) || void 0 === r ? void 0 : r.userAffiliateApplicationStatus
				}
		},
		570: function(t, r, a) {
			"use strict";
			a.d(r, "b", (function() {
				return A
			})), a.d(r, "a", (function() {
				return O.a
			}));
			var o = a(0),
				i = a.n(o),
				c = a(1),
				l = a.n(c),
				E = a(13),
				u = a.n(E),
				d = a(15),
				_ = a(87),
				O = a(363),
				T = "_2QkD0jruu4lcYgNF7NCFWJ",
				I = "_1dGy5cRE67Jzu74Rcmfv3F",
				S = "_2ytuhSsxhb07-7ocnUkfPh",
				p = "zdc4li1krGTgZv7MZL-qU",
				R = "_30h5NSfu-1Gl6Y3oYiyrZV";

			function _slicedToArray(t, r) {
				return function _arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function _iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function _unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return _arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return _arrayLikeToArray(t, r)
				}(t, r) || function _nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}
			const Search = ({
				alternateLayout: t = !1,
				getSearchableFields: r = (t => [t.toString()]),
				isSearching: a,
				onSearch: c,
				pill: l,
				placeholder: E = "Search...",
				searchItems: A = [],
				setIsSearching: b,
				size: N,
				transition: C = !1
			}) => {
				const y = _slicedToArray(Object(o.useState)(""), 2),
					D = y[0],
					m = y[1];
				return Object(o.useEffect)(() => {
					c(D ? A.filter(t => {
						const a = r(t),
							o = D.trim().toLowerCase();
						return a.some(t => t.toLowerCase().includes(o))
					}) : A, D)
				}, [A, D]), Object(o.useEffect)(() => {
					a || m("")
				}, [a]), i.a.createElement("div", {
					className: u()(T, {
						[p]: a,
						[S]: C,
						[I]: t
					})
				}, a ? i.a.createElement(_.b, {
					backgroundLighter: !0,
					iconUsesStroke: !0,
					className: R,
					icon: i.a.createElement(d.o, null),
					onClick: () => b(!1),
					pill: l,
					size: N
				}) : i.a.createElement(_.b, {
					iconUsesFill: !0,
					icon: i.a.createElement(d.lb, null),
					onClick: () => b(!0),
					pill: l,
					size: N
				}), (a || C) && i.a.createElement(O.c, {
					type: O.b.TEXT,
					size: N,
					pill: l,
					backgroundDark: !0,
					placeholder: E,
					autofocus: a,
					value: D,
					onChange: t => m(t),
					onEscape: () => b(!1)
				}))
			};
			Search.propTypes = {
				alternateLayout: l.a.bool,
				getSearchableFields: l.a.func,
				isSearching: l.a.bool.isRequired,
				onSearch: l.a.func,
				pill: l.a.bool,
				placeholder: l.a.string,
				searchItems: l.a.arrayOf(l.a.any),
				setIsSearching: l.a.func.isRequired,
				size: l.a.string,
				transition: l.a.bool
			};
			var A = Search
		},
		573: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return i
			})), a.d(r, "b", (function() {
				return c
			})), a.d(r, "c", (function() {
				return l
			}));
			var o = a(12);
			const i = [o.c.MetaMask, o.c.ImToken, o.c.CoinbaseWallet, o.c.TrustWallet, o.c.Rainbow, o.c.HuobiWallet, o.c.Coin98, o.c.TokenPocket, o.c.WalletConnect, o.c.OtherWallet],
				c = {
					[o.c.BitPie]: "isBitpie",
					[o.c.CloverWallet]: "isClover",
					[o.c.Coin98]: "isCoin98",
					[o.c.HuobiWallet]: "isHbWallet",
					[o.c.ImToken]: "isImToken",
					[o.c.MathWallet]: "isMathWallet",
					[o.c.MetaMask]: "isMetaMask",
					[o.c.Rainbow]: "isRainbowWallet",
					[o.c.TokenPocket]: "isTokenPocket",
					[o.c.TrustWallet]: "isTrust"
				},
				l = {
					[o.c.BitPie]: ["bitpie"],
					[o.c.Coin98]: ["coin98"],
					[o.c.HuobiWallet]: ["huobi"],
					[o.c.ImToken]: ["imtoken"],
					[o.c.MathWallet]: ["math"],
					[o.c.MetaMask]: ["metamask"],
					[o.c.Rainbow]: ["rainbow"],
					[o.c.TokenPocket]: ["tokenpocket"],
					[o.c.TrustWallet]: ["trust"]
				}
		},
		575: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return T
			}));
			var o = a(218),
				i = a.n(o),
				c = a(0),
				l = a.n(c),
				E = a(1),
				u = a.n(E),
				d = a(13),
				_ = a.n(d),
				O = {
					selectorOption: "_13tf4Nyp7qcIEuk3_W8jnP",
					prefix: "_1ZYtynJnbBVBdfNRLPhdjx",
					radioButton: "_1n1hCkAlqdWDd_0t0jZgim",
					selected: "_39q_J8Cvsw0NOItf8BB-Yf",
					optionLabel: "_2pqK6AfeNKLRTyKsBf6J3x"
				};
			const RadioSelector = ({
				className: t,
				onChangeSelection: r,
				selectedKey: a,
				radioConfig: o
			}) => l.a.createElement("div", {
				className: _()(O.radioSelector, t)
			}, i()(o, ({
				className: t,
				key: o,
				label: i,
				labelClassName: c,
				prefix: E
			}) => l.a.createElement("div", {
				key: o,
				role: "button",
				tabIndex: 0,
				className: _()(O.selectorOption, t),
				onClick: () => r(o)
			}, E && l.a.createElement("div", {
				className: O.prefix
			}, E), l.a.createElement("div", {
				className: _()(O.radioButton, {
					[O.selected]: a === o
				})
			}), l.a.createElement("div", {
				className: _()(O.optionLabel, c)
			}, i))));
			RadioSelector.propTypes = {
				className: u.a.string,
				onChangeSelection: u.a.func.isRequired,
				radioConfig: u.a.arrayOf(u.a.shape({
					className: u.a.string,
					key: u.a.oneOfType([u.a.string, u.a.number]).isRequired,
					label: u.a.oneOfType([u.a.arrayOf(u.a.node), u.a.node, u.a.string]),
					labelClassName: u.a.string
				})).isRequired,
				selectedKey: u.a.oneOfType([u.a.string, u.a.number])
			};
			var T = RadioSelector
		},
		58: function(t, r, a) {
			"use strict";
			a.d(r, "b", (function() {
				return getCurrentMarketConfig
			})), a.d(r, "a", (function() {
				return getAllMarketsData
			})), a.d(r, "d", (function() {
				return getIsMarketsLoaded
			})), a.d(r, "c", (function() {
				return getCurrentMarketData
			}));
			var o = a(28),
				i = a(88),
				c = a(19);
			const getCurrentMarketConfig = t => {
					const r = Object(o.f)(t.router.location.pathname, {
							path: c.q
						}),
						a = null === r || void 0 === r ? void 0 : r.params.market;
					return a ? i.b[a] : null
				},
				getAllMarketsData = t => t.markets.marketsData,
				getIsMarketsLoaded = t => !!t.markets.marketsData,
				getCurrentMarketData = t => {
					const r = getAllMarketsData(t);
					if (!r) return null;
					const a = Object(o.f)(t.router.location.pathname, {
							path: c.q
						}),
						i = null === a || void 0 === a ? void 0 : a.params.market;
					return i ? r[i] : null
				}
		},
		584: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return T
			}));
			var o = a(0),
				i = a.n(o),
				c = a(8),
				l = a(30),
				E = a(15),
				u = a(17),
				d = a(35),
				_ = a(2);
			const O = {};
			O.TitleDiv = c.c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`, O.TitleContainer = c.c.div`
  display: flex;
  flex-direction: column;
`, O.IconDiv = c.c.div`
  display: flex;
  align-items: center;
  margin-right: 8px;

  > svg,
  > img {
    min-height: 20px;
    height: 20px;
    width: 20px;
  }
`, O.ClearButton = Object(c.c)(d.a)`
  margin-right: -4px;
`, O.CloseButton = c.c.div`
  ${u.b}
  cursor: pointer;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 6px;
  margin: -2px 0 -6px 12px;

  @media ${u.a.tablet} {
    height: 40px;
    width: 40px;

    > svg {
      height: 20px;
      width: 20px;
    }
  }

  &:hover {
    background-color: var(--color-layer-lighter);

    > svg path {
      stroke: var(--color-text-light);
    }
  }
`, O.SubtitleSpan = c.c.span`
  ${u.e.size14}
  color: var(--color-text-dark);
  margin-top: 8px;

  @media ${u.a.tablet} {
    ${u.e.size16}
  }
`, O.ModalHeader = c.c.div`
  ${u.f.medium}
  ${u.e.size20};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 28px 20px 28px;
  color: var(--color-text-light);
  border-bottom: solid 1px var(--color-border-grey);

  @media ${u.a.tablet} {
    ${u.e.size22}
  }

  ${({hideMobile:t})=>t&&`\
			n @media $ {
				u.a.tablet
			} {
				\
				n display: none;\
				n
			}\
			n `}

  ${({noBorder:t})=>t&&"\n      border: none;\n  "}

  ${({sidebarModalStyles:t})=>t&&"\n      padding-left: 20px;\n      padding-right: 16px;   \n  "}

  ${({alignedPadding:t})=>t&&"\n      padding-left: 28px;\n      padding-right: 20px;   \n  "}

  ${({withSubtitle:t})=>t&&`\
			n $ {
				O.TitleContainer
			} {
				\
				n flex - direction: column;\
				n align - items: flex - start;\
				n
			}\
			n\ n $ {
				O.CloseButton
			} {
				\
				n align - self: flex - start;\
				n
			}\
			n `}
  
  ${({withSearchTransition:t})=>t&&"\n      justify-content: flex-end;\n\n      > :not(:last-child) {\n        margin-right: 12px;\n        white-space: nowrap;\n      }\n\n      > :last-child {\n        margin-left: auto;\n      }\n  "}
`;
			var T = Object(l.d)(({
				closeModal: t,
				contentRight: r,
				hideMobile: a,
				icon: o,
				noBorder: c,
				onClear: l,
				title: u,
				sidebarModalStyles: T,
				stringGetter: I,
				subtitle: S,
				withSearchTransition: p
			}) => i.a.createElement(O.ModalHeader, {
				alignedPadding: o || !!t,
				hideMobile: a,
				noBorder: c,
				sidebarModalStyles: T,
				withSubtitle: S,
				withSearchTransition: p
			}, (o || u || S) && i.a.createElement(O.TitleContainer, null, i.a.createElement(O.TitleDiv, null, o && i.a.createElement(O.IconDiv, null, o), u), S && i.a.createElement(O.SubtitleSpan, null, S)), r, t && i.a.createElement(O.CloseButton, {
				role: "button",
				tabIndex: 0,
				onClick: t
			}, i.a.createElement(E.o, null)), l && i.a.createElement(O.ClearButton, {
				onClick: l,
				shape: d.c.Pill,
				size: d.d.ExtraSmall
			}, I({
				key: _.a.CLEAR
			}))))
		},
		586: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return N
			})), a.d(r, "b", (function() {
				return C
			}));
			var o = a(25),
				i = a.n(o),
				c = a(186),
				l = a.n(c),
				E = a(71),
				u = a.n(E),
				d = a(65),
				_ = a(168),
				O = a(58),
				T = a(364),
				I = a(167),
				S = a(211),
				p = a(458),
				R = a(26),
				A = a(10),
				b = a(174);
			const getAdjustedMarginFraction = ({
					account: t,
					market: r,
					allMarketsData: a,
					positionSize: o
				}) => {
					if (r) {
						const i = a[r];
						return o ? Object(b.a)({
							account: t,
							marketData: i,
							positionSize: o
						}) : i.initialMarginFraction
					}
					return (({
						allMarketsData: t
					}) => {
						let r;
						return u()(t, ({
							initialMarginFraction: t
						}) => {
							r && !r.gt(t) || (r = Object(A.b)(t))
						}), r
					})({
						allMarketsData: a
					})
				},
				N = Object(d.a)([_.a, T.a, O.a, O.b], (t, r, a, o) => {
					if (!t || !a) return null;
					const c = t.quoteBalance,
						E = l()(r, (r, {
							market: o,
							size: i
						}) => {
							const c = a[o],
								l = c.oraclePrice,
								E = Object(A.b)(i),
								u = E.abs().times(l);
							r.positionNotionalTotal = r.positionNotionalTotal.plus(u), r.positionValueTotal = r.positionValueTotal.plus(E.times(l));
							const d = Object(b.a)({
								account: t,
								marketData: c,
								positionSize: i
							});
							return r.positionInitialRiskTotal = r.positionInitialRiskTotal.plus(u.times(d)), r
						}, {
							positionNotionalTotal: A.a.ZERO,
							positionValueTotal: A.a.ZERO,
							positionInitialRiskTotal: A.a.ZERO
						}),
						u = E.positionNotionalTotal,
						d = E.positionValueTotal,
						_ = E.positionInitialRiskTotal,
						O = d.plus(c),
						T = O.minus(_),
						I = O.minus(_),
						S = (o || {}).market,
						p = getAdjustedMarginFraction({
							account: t,
							market: S,
							allMarketsData: a,
							positionSize: i()(r, `[${S}].size`)
						});
					return {
						buyingPower: I.lte(0) ? A.a.ZERO : I.div(p),
						equity: O,
						freeCollateral: T.lt(0) ? A.a.ZERO : T,
						leverage: u.eq(0) ? null : u.div(O),
						marginUsage: O.eq(0) ? A.a.ZERO : A.a.ONE.minus(T.div(O)),
						positionNotionalTotal: u,
						positionInitialRiskTotal: _
					}
				}),
				C = Object(d.a)([_.a, O.a, T.a, I.a, O.b, T.b, S.b, N, p.d, p.c], (t, r, a, o, c, l, E, u, d, _) => {
					if (!u || !r) return null;
					const O = E.withdrawInput,
						T = E.fastWithdrawFeeData,
						I = E.usdcDepositAmount,
						S = u.equity,
						p = u.positionNotionalTotal,
						b = u.positionInitialRiskTotal,
						N = o.amountInput,
						C = o.selectedOrderSide,
						y = (l || {}).size,
						D = (c || {}).market,
						m = d.feeAmount,
						h = r[D],
						L = Object(A.b)(N);
					if ("" !== I || "" !== O || "" !== N && !L.isZero() && _) {
						const o = Object(A.b)(y);
						let c, l, E;
						if ("" !== I) c = S.plus(I), l = o, E = p;
						else if ("" !== O) c = S.minus(O), T && (c = c.minus(T.fee)), l = o, E = p;
						else {
							if (!h) return null;
							const t = Object(A.b)(h.oraclePrice);
							c = S.minus(m), c = C === R.a.BUY ? c.plus(L.times(t.minus(_))) : c.plus(L.times(_.minus(t))), l = C === R.a.BUY ? o.plus(N) : o.minus(N), E = p.plus(t.times(l.abs().minus(o.abs())))
						}
						const u = getAdjustedMarginFraction({
								account: t,
								market: D,
								allMarketsData: r,
								positionSize: i()(a, `[${D}].size`)
							}),
							d = getAdjustedMarginFraction({
								account: t,
								market: D,
								allMarketsData: r,
								positionSize: l
							}),
							g = E.times(d).minus(p.times(u)),
							P = b.plus(g),
							v = c.lt(0) ? Object(A.b)(1 / 0) : E.div(c),
							w = c.minus(P),
							M = c.minus(P),
							U = c.lte(0) ? A.a.ONE : A.a.ONE.minus(w.div(c));
						return {
							newEquity: c,
							newLeverage: v,
							newFreeCollateral: w,
							newMarginUsage: U,
							newBuyingPower: M.div(d)
						}
					}
					return null
				})
		},
		589: function(t, r, a) {
			"use strict";
			a.d(r, "c", (function() {
				return getSigningMethodForWallet
			})), a.d(r, "b", (function() {
				return S
			})), a.d(r, "d", (function() {
				return parseWalletError
			})), a.d(r, "a", (function() {
				return addressesAreEqual
			}));
			var o = a(91),
				i = a.n(o),
				c = a(48),
				l = a.n(c),
				E = a(25),
				u = a.n(E),
				d = a(72),
				_ = a(2),
				O = a(12),
				T = a(85),
				I = a(22);

			function ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function _objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? ownKeys(Object(a), !0).forEach((function(r) {
						_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function _defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}
			const getSigningMethodForWallet = ({
					walletType: t,
					legacySigning: r
				}) => {
					if (r) return d.SigningMethod.Personal;
					switch (t) {
						case O.c.BitPie:
						case O.c.CloverWallet:
						case O.c.Coin98:
						case O.c.HuobiWallet:
						case O.c.MetaMask:
						case O.c.MathWallet:
						case O.c.ImToken:
						case O.c.Rainbow:
						case O.c.TokenPocket:
						case O.c.TrustWallet:
						case O.c.WalletConnect:
							return d.SigningMethod.MetaMaskLatest;
						case O.c.CoinbaseWallet:
							return d.SigningMethod.CoinbaseWallet;
						case O.c.Ledger:
							return d.SigningMethod.Personal;
						default:
							return d.SigningMethod.MetaMaskLatest
					}
				},
				S = function() {
					var t = function _asyncToGenerator(t) {
						return function() {
							var r = this,
								a = arguments;
							return new Promise((function(o, i) {
								var c = t.apply(r, a);

								function _next(t) {
									asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
								}

								function _throw(t) {
									asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
								}
								_next(void 0)
							}))
						}
					}((function*({
						starkKeyPair: t,
						walletAddress: r
					}) {
						if (u()(t, "walletAddress", "").toLowerCase() === r.toLowerCase()) try {
							return !!(yield T.a.exchange.getEthKey({
								starkKey: t.publicKey
							}))
						} catch (a) {
							I.b.notify({
								error: a,
								location: I.a.CHECK_REGISTRATION
							})
						}
						return !1
					}));
					return function getIsUserRegistered(r) {
						return t.apply(this, arguments)
					}
				}(),
				p = 4001,
				R = -32e3;
			let A;
			! function(t) {
				t.USER_CANCELED = "USER_CANCELED", t.INSUFFICIENT_GAS = "INSUFFICIENT_GAS", t.MAYBE_INSUFFICIENT_GAS = "MAYBE_INSUFFICIENT_GAS", t.CONTRACT_DATA_NOT_ENABLED = "CONTRACT_DATA_NOT_ENABLED", t.U2F_INELIGIBLE = "U2F_INELIGIBLE", t.NEEDS_COMPATIBILITY_MODE = "NEEDS_COMPATIBILITY_MODE", t.UNKNOWN = "UNKNOWN"
			}(A || (A = {}));
			const parseWalletError = ({
					asset: t = "",
					error: r,
					location: a,
					sendGaslessTransaction: o = null,
					stringGetter: c = i.a
				}) => {
					const E = (t => {
						if (!t) return null;
						const r = t.code,
							a = t.message;
						switch (r) {
							case p:
								return A.USER_CANCELED;
							case R:
								return l()(a, "execution reverted") ? A.MAYBE_INSUFFICIENT_GAS : l()(a, "gas required exceeds allowance") ? A.INSUFFICIENT_GAS : A.UNKNOWN;
							default:
								return l()(a, "Invalid data received") || l()(a, "Please enable Contract data on the Ethereum app Settings") ? A.CONTRACT_DATA_NOT_ENABLED : l()(a, "Condition of use not satisfied (denied by the user?)") ? A.USER_CANCELED : l()(a, "Error: [ethjs-rpc] rpc error with payload") || l()(a, "Error: Not supported on this device") ? A.NEEDS_COMPATIBILITY_MODE : l()(a, "Failed to sign with Ledger device: U2F DEVICE_INELIGIBLE") ? A.U2F_INELIGIBLE : l()(a, " Insufficient funds. The account you tried to send transaction from does not have enough funds.") ? A.INSUFFICIENT_GAS : l()(a, "User denied transaction signature") || l()(a, "User denied message signature") ? A.USER_CANCELED : l()(a, "gas required exceeds allowance") ? A.INSUFFICIENT_GAS : l()(a, "insufficient funds for transfer") ? A.MAYBE_INSUFFICIENT_GAS : l()(a, "\u7528\u6237\u53d6\u6d88\u4e86\u64cd\u4f5c") || l()(a, "User rejected the transaction") || l()(a, "Rejected by the user") || l()(a, "Sign message cancelled") || l()(a, "User canceled") || l()(a, "cancelled") || l()(a, "cancel") || l()(a, "Canceled") ? A.USER_CANCELED : A.UNKNOWN
						}
					})(r);
					switch (E) {
						case A.USER_CANCELED:
							return {
								type: E, message: null
							};
						default: {
							const i = {
								error: _objectSpread({}, r)
							};
							return t && (i.selectedAsset = t), null !== o && (i.sendGaslessTransaction = o), I.b.notify({
								error: new Error("Unknown Wallet Error: " + r.message),
								location: a,
								metaData: i
							}), {
								type: A.UNKNOWN,
								message: c({
									key: _.a.SOMETHING_WENT_WRONG_WITH_MESSAGE,
									params: {
										ERROR_MESSAGE: r.message || c({
											key: _.a.UNKNOWN_ERROR
										}) || ""
									}
								})
							}
						}
					}
				},
				addressesAreEqual = (t = "", r = "") => !(!t || !r) && t.toLowerCase() === r.toLowerCase()
		},
		590: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return S
			}));
			var o = a(0),
				i = a.n(o),
				c = a(1),
				l = a.n(c),
				E = a(13),
				u = a.n(E),
				d = a(15),
				_ = "_2ygJXTYuQifYbn4v2-7Wi7",
				O = "sNbvvqi0MtGE7IQfu9t9K",
				T = "WirAJtxhWUitY13T85HjI",
				I = "oGoKMjrDeD85GglGTEgZ5";
			const TriangleIndicator = ({
				className: t,
				marginRight: r,
				positive: a,
				negative: o
			}) => i.a.createElement("div", {
				className: u()(_, {
					[O]: r,
					[T]: a,
					[I]: o
				}, t)
			}, i.a.createElement(d.xb, null));
			TriangleIndicator.propTypes = {
				className: l.a.string,
				marginRight: l.a.bool,
				positive: l.a.bool,
				negative: l.a.bool
			};
			var S = TriangleIndicator
		},
		591: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return h
			}));
			var o = a(91),
				i = a.n(o),
				c = a(0),
				l = a.n(c),
				E = a(1),
				u = a.n(E),
				d = a(13),
				_ = a.n(d),
				O = "SydX_TcbXuc_A1NkEjzYU",
				T = "_1fca12ACmRR1YsLjtV9u6c",
				I = "_19zBwxSEnO1L7_1vkeSEBQ",
				S = "_3mJXfBztqJyrMwAR9JxoKx",
				p = "_5JsR8yJlH1usz04F0VWW2",
				R = "QoVBP4w7YZpCa-pEUwGwP",
				A = "_2xa9ZdFggTtHVRSxy-BeCg",
				b = "_2JVRfNZ-zOLDCNbUaA_P1I",
				N = "_17zq1IvMXWrClO6ZrYL_ql",
				C = "_2JAVM8iRWrt0uoZHotZwsH",
				y = "_2gogMeBEl8m2wOLtntmh_r",
				D = "ZyfPvCvJ2DEcJIK5Vqwwa",
				m = "oXvV-mdUic_ZSvwf5wDM9";
			const Checkbox = ({
				checkboxClickOnly: t,
				checked: r,
				className: a,
				disabled: o,
				label: c,
				labelClassName: E,
				lightBackground: u,
				longLabel: d,
				onClick: h,
				opaqueWhenDisabled: L
			}) => l.a.createElement("div", {
				className: _()(O, a, {
					[N]: o
				})
			}, l.a.createElement("div", {
				className: _()(T, {
					[I]: d,
					[C]: o,
					[y]: L && o
				}),
				role: "button",
				tabIndex: 0,
				onClick: t ? i.a : h
			}, l.a.createElement("input", {
				type: "checkbox",
				checked: r,
				onChange: t ? h : i.a
			}), l.a.createElement("span", {
				className: _()(S, {
					[m]: r,
					[D]: u,
					[p]: d
				})
			}), c && l.a.createElement("div", {
				className: _()(R, {
					[b]: d,
					[A]: t
				}, E)
			}, c)));
			Checkbox.propTypes = {
				checkboxClickOnly: u.a.bool,
				checked: u.a.bool,
				className: u.a.string,
				disabled: u.a.bool,
				label: u.a.oneOfType([u.a.arrayOf(u.a.node), u.a.node, u.a.string]),
				labelClassName: u.a.string,
				lightBackground: u.a.bool,
				longLabel: u.a.bool,
				onClick: u.a.func.isRequired,
				opaqueWhenDisabled: u.a.bool
			};
			var h = Checkbox
		},
		593: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return calculatePriceChangePercent
			}));
			var o = a(10);
			const calculatePriceChangePercent = ({
				indexPrice: t,
				priceChange24H: r
			}) => {
				const a = Object(o.b)(t),
					i = a.minus(r);
				return a.minus(i).div(i)
			}
		},
		594: function(t, r, a) {
			"use strict";
			var o = a(0),
				i = a.n(o),
				c = a(1),
				l = a.n(c),
				E = a(13),
				u = a.n(E),
				d = "_13SqfWnXEUlQ2NrDbVDTer";
			const TruncateHash = ({
				className: t,
				hash: r,
				charsPerSide: a = 4
			}) => {
				if (!r) return null;
				let o = 0;
				"0" === r[0] && "x" === r[1] && (o = 2);
				const c = r.slice(o, o + a),
					l = r.slice(-1 * a);
				return i.a.createElement("div", {
					className: u()(d, t)
				}, "0x", c, "\xb7\xb7\xb7\xb7", l)
			};
			TruncateHash.propTypes = {
				charsPerSide: l.a.number,
				className: l.a.string,
				hash: l.a.string
			};
			r.a = TruncateHash
		},
		596: function(t, r, a) {
			"use strict";
			var o = a(0),
				i = a.n(o),
				c = a(1),
				l = a.n(c),
				E = a(13),
				u = a.n(E),
				d = "_38idpiULmwLdV8ZLER8eXp",
				_ = "_2J0VeeFcg178yBOqvdzmP3",
				O = "_2p9QAAMCqbu8kWNa-OxhxO",
				T = "aZJzIkLG4sRsoY7PeO5H6",
				I = "_32up0C7b9thlMZFDjYKA0I",
				S = "_1Dx1ZkL7lNi2D4tIiFYDts",
				p = "_2_sZDkMUxoSoTdMp39UJz8",
				R = "_63sTztTkMbPgeR7cBHefE",
				A = "_2Gi3cegFvdlcrb3EjLNLsd",
				b = "_1VosSf4-1CWxOwRe0aiRXO",
				N = "_2oZkD3QZspjo_B6uVVdYGK",
				C = "guFxPSvRmDZrKn2B8YxTt";
			const Tag = ({
				backgroundLight: t,
				children: r,
				className: a,
				compact: o,
				darkText: c,
				green: l,
				large: E,
				marginLeft: y,
				marginRight: D,
				purple: m,
				red: h,
				regularFont: L,
				usePillStyles: g
			}) => i.a.createElement("div", {
				className: u()(d, {
					[N]: t,
					[O]: o,
					[S]: c,
					[R]: l,
					[p]: E,
					[T]: y,
					[I]: D,
					[C]: g,
					[b]: m,
					[A]: h,
					[_]: L
				}, a)
			}, r);
			Tag.propTypes = {
				backgroundLight: l.a.bool,
				children: l.a.node.isRequired,
				className: l.a.string,
				compact: l.a.bool,
				darkText: l.a.bool,
				green: l.a.bool,
				large: l.a.bool,
				marginLeft: l.a.bool,
				marginRight: l.a.bool,
				purple: l.a.bool,
				red: l.a.bool,
				regularFont: l.a.bool,
				usePillStyles: l.a.bool
			};
			r.a = Tag
		},
		597: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return v
			}));
			var o = a(0),
				i = a.n(o),
				c = a(14),
				l = a(1),
				E = a.n(l),
				u = a(8),
				d = a(30),
				_ = a(139),
				O = a(15),
				T = a(17),
				I = a(2),
				S = a(26),
				p = a(35),
				R = a(87),
				A = a(155),
				b = a(236),
				N = a(228),
				C = a(314),
				y = a(32);

			function asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function _asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			}

			function _slicedToArray(t, r) {
				return function _arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function _iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function _unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return _arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return _arrayLikeToArray(t, r)
				}(t, r) || function _nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}
			const D = "ACCEPT",
				m = "CANCEL",
				h = "CANCEL_ALL",
				L = "CLEAR",
				OrderCancelOrClear = ({
					market: t,
					onDisplayConfirm: r,
					onRejectConfirm: a,
					stringGetter: l
				}) => {
					var E, u, d;
					const T = _slicedToArray(Object(o.useState)(!1), 2),
						R = T[0],
						A = T[1],
						P = _slicedToArray(Object(o.useState)(!1), 2),
						v = P[0],
						w = P[1],
						M = Object(c.e)(),
						U = Object(c.f)(C.a, c.d),
						G = Object(c.f)(C.b, c.d),
						j = Object(_.b)().isTablet,
						k = null !== (E = null === (u = t ? G : U) || void 0 === u || null === (d = u.filter(({
							status: t
						}) => t !== S.c.CANCELED && t !== S.c.FILLED)) || void 0 === d ? void 0 : d.length) && void 0 !== E ? E : 0,
						x = t ? G && k < G.length : U && k < U.length;
					Object(o.useEffect)(() => {
						R && 0 === k && A(!1)
					}, [R, k]);
					const setDisplayConfirmFalse = () => {
							w(!1), null === a || void 0 === a || a()
						},
						setDisplayConfirmTrue = () => {
							w(!0), null === r || void 0 === r || r()
						};
					if (t) {
						const r = v ? i.a.createElement(O.o, null) : i.a.createElement(O.wb, null),
							a = v ? i.a.createElement(O.m, null) : i.a.createElement(O.q, null);
						let o, c;
						return v ? (c = function() {
							var r = _asyncToGenerator((function*() {
								A(!0), setDisplayConfirmFalse(), yield y.c.cancelActiveOrders({
									market: t
								})
							}));
							return function buttonTwoOnClick() {
								return r.apply(this, arguments)
							}
						}(), o = () => {
							setDisplayConfirmFalse()
						}) : (o = () => {
							M(Object(N.a)(t))
						}, c = () => {
							setDisplayConfirmTrue()
						}), R ? i.a.createElement(g.LoadingDots, {
							size: j ? 5 : 3
						}) : j ? i.a.createElement(g.ClearAndCancel, null, v && i.a.createElement(g.LabelSpan, null, l({
							key: I.a.ARE_YOU_SURE
						})), (x || v) && i.a.createElement(g.MobileIconButton, {
							actionType: v ? m : L,
							icon: r,
							isTablet: !0,
							onClick: t => {
								var r;
								t.stopPropagation(), null === (r = o) || void 0 === r || r()
							},
							selected: !1
						}), (k > 0 || v) && (v ? i.a.createElement(g.MobileIconButton, {
							actionType: D,
							icon: a,
							isTablet: !0,
							onClick: t => {
								var r;
								t.stopPropagation(), null === (r = c) || void 0 === r || r()
							},
							selected: !1
						}) : i.a.createElement(g.MobileButton, {
							isTablet: !0,
							actionType: h,
							isLoading: R,
							onClick: t => {
								t.stopPropagation(), v ? setDisplayConfirmFalse() : setDisplayConfirmTrue()
							},
							shape: p.c.Pill,
							size: p.d.ExtraSmall
						}, l({
							key: I.a.CANCEL_ALL
						})))) : i.a.createElement(g.ClearAndCancel, null, v && i.a.createElement(g.LabelSpan, null, l({
							key: I.a.ARE_YOU_SURE
						})), (x || v) && i.a.createElement(g.IconButtonContainer, null, i.a.createElement(g.WithHoverLabel, {
							disableLabel: v,
							label: l({
								key: I.a.CLEAN_UP
							}),
							position: b.a.LEFT
						}, i.a.createElement(g.IconButton, {
							actionType: v ? m : L,
							icon: r,
							onClick: t => {
								var r;
								t.stopPropagation(), null === (r = o) || void 0 === r || r()
							},
							selected: !1
						}))), (k > 0 || v) && i.a.createElement(g.IconButtonContainer, null, i.a.createElement(g.WithHoverLabel, {
							disableLabel: v,
							label: l({
								key: I.a.CANCEL_ALL
							}),
							position: b.a.LEFT
						}, i.a.createElement(g.IconButton, {
							actionType: v ? D : h,
							icon: a,
							onClick: t => {
								var r;
								t.stopPropagation(), null === (r = c) || void 0 === r || r()
							},
							selected: !1
						}))))
					}
					return j ? i.a.createElement(i.a.Fragment, null, (x || v) && i.a.createElement(g.Button, {
						isTablet: !0,
						actionType: v ? m : L,
						isLoading: R,
						onClick: t => {
							t.stopPropagation(), v ? setDisplayConfirmFalse() : M(Object(N.a)())
						},
						size: p.d.Medium
					}, v ? i.a.createElement(O.o, null) : i.a.createElement(O.wb, null)), (k > 0 || v) && i.a.createElement(g.Button, {
						isTablet: !0,
						actionType: v ? D : h,
						isLoading: R,
						onClick: function() {
							var t = _asyncToGenerator((function*(t) {
								t.stopPropagation(), v ? (A(!0), yield y.c.cancelAllOrders(), setDisplayConfirmFalse()) : setDisplayConfirmTrue()
							}));
							return function(r) {
								return t.apply(this, arguments)
							}
						}(),
						size: p.d.Medium
					}, v ? i.a.createElement(O.m, null) : l({
						key: I.a.CANCEL_ALL
					}))) : i.a.createElement(i.a.Fragment, null, !v && i.a.createElement(g.ButtonContainer, null, x && i.a.createElement(g.Button, {
						actionType: L,
						isLoading: R,
						isOnlyButton: 0 === k,
						onClick: t => {
							t.stopPropagation(), M(Object(N.a)())
						},
						size: p.d.Medium
					}, i.a.createElement(O.wb, null)), k > 0 && i.a.createElement(g.Button, {
						actionType: h,
						isLoading: R,
						onClick: function() {
							var t = _asyncToGenerator((function*(t) {
								t.stopPropagation(), setDisplayConfirmTrue()
							}));
							return function(r) {
								return t.apply(this, arguments)
							}
						}(),
						size: p.d.Medium
					}, l({
						key: I.a.CANCEL_ALL
					}))), v && i.a.createElement(g.ClearAndCancel, {
						portfolioHeader: !0
					}, i.a.createElement(g.LabelSpan, {
						portfolioHeader: !0
					}, l({
						key: I.a.ARE_YOU_SURE
					})), i.a.createElement(g.IconButtonContainer, null, i.a.createElement(g.IconButton, {
						actionType: m,
						icon: i.a.createElement(O.o, null),
						onClick: t => {
							t.stopPropagation(), setDisplayConfirmFalse()
						},
						selected: !1
					})), i.a.createElement(g.IconButtonContainer, null, i.a.createElement(g.IconButton, {
						actionType: D,
						icon: i.a.createElement(O.m, null),
						onClick: t => {
							t.stopPropagation(), A(!0), y.c.cancelAllOrders(), setDisplayConfirmFalse()
						},
						selected: !1
					}))))
				},
				g = {},
				P = u.b`
  ${({actionType:t,isTablet:r})=>{switch(t){case D:return u.b` &&
				{
					svg {
						height: $ {
							r ? "18px" : "12px"
						};
						width: $ {
							r ? "18px" : "12px"
						};

						path {
							fill: var (--color - green);
							stroke: none;
						}
					}
				}
			`;case m:return u.b` &&
			{
				svg {
					height: $ {
						r ? "15px" : "10px"
					};
					width: $ {
						r ? "15px" : "10px"
					};

					path {
						stroke: var (--color - red);
					}
				}
			}
			`;case h:return u.b`
			$ {
				r && u.b
            color: var(--color-red);

            svg path {
              stroke: var(--color-red);
            }
          `
			}

			&
			: hover {
				color: var (--color - red);

				svg {
					path {
						stroke: var (--color - red);
					}
				}
			}
			`;case L:return u.b`
			$ {
				r && u.b`
            svg path {
              stroke: var(--color-text-base);
            }
          `
			}

			&
			: hover {
				svg {
					path {
						stroke: var (--color - text - light);
					}
				}
			}
			`;default:return null}}}
`;
			g.LabelSpan = u.c.span`
  ${T.e.size13}
  color: var(--color-text-dark);
  align-self: center;
  display: flex;
  width: 100%;
  justify-content: flex-end;

  ${({portfolioHeader:t})=>t&&T.e.size14}

  @media ${T.a.tablet} {
    ${T.e.size16}
    margin-right: 4px;
  }
`, g.MobileIconButton = Object(u.c)(R.b)`
  && {
    margin-left: 12px;
    align-self: center;
    flex-shrink: 0;
    height: 36px;
    width: 36px;
    border-radius: 18px;
  }

  svg {
    width: 30px;
    height: 30px;

    path {
      stroke: var(--color-text-dark);
    }
  }

  ${P}
`, g.MobileButton = Object(u.c)(p.a)`
  margin-left: 10px;
  min-width: 50px;
  ${P}
`, g.IconButton = Object(u.c)(R.b)`
  && {
    width: 28px;
    height: 28px;
    border-radius: 14px;
  }

  svg {
    path {
      stroke: var(--color-text-dark);
    }
  }

  ${P}
`, g.WithHoverLabel = Object(u.c)(b.b)`
  height: 24px;
`, g.IconButtonContainer = u.c.div`
  margin-left: 8px;
`, g.LoadingDots = Object(u.c)(A.a)`
  width: 50px;
`, g.ClearAndCancel = u.c.div`
  display: flex;
  white-space: nowrap;
  flex-direction: row;
  justify-content: flex-end;

  ${({portfolioHeader:t})=>t&&u.b`
			margin: -6 px 0;
			`}
`, g.ButtonContainer = u.c.div`
  position: relative;
  margin: -6px 0;
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
`, g.Button = Object(u.c)(p.a)`
  display: flex;
  justify-content: center;

  ${({isTablet:t})=>!t&&u.b`
			width: 90 px;
			`}

  ${({actionType:t})=>{switch(t){case D:return u.b` >
			svg {
				height: 20 px;
				width: 20 px;

				path {
					fill: var (--color - green);
				}
			}
			`;case m:case h:return u.b`
			color: var (--color - red);

			>
			svg {
				height: 16 px;
				width: 16 px;

				path {
					stroke: var (--color - red);
				}
			}

			&
			: hover {
				color: var (--color - red);

				>
				svg path {
					stroke: var (--color - red);
				}
			}
			`;case L:return u.b`
			$ {
				({
					isOnlyButton: t
				}) => t ? "margin-right: 0" : "margin-right: 10px"
			};

			>
			svg {
				height: 24 px;
				width: 24 px;

				path {
					stroke: var (--color - text - base);
				}
			}
			`;default:return null}}}
`, OrderCancelOrClear.propTypes = {
				market: E.a.string,
				onDisplayConfirm: E.a.func,
				onRejectConfirm: E.a.func,
				stringGetter: E.a.func.isRequired
			};
			var v = Object(d.d)(OrderCancelOrClear)
		},
		598: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return i
			}));
			var o = a(24);
			const i = Object(o.a)("SET_ORDERBOOK_ZOOM_VALUE")
		},
		600: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return getAllTransfers
			}));
			var o = a(25),
				i = a.n(o);
			const getAllTransfers = t => i()(t, "transfers.transfers")
		},
		601: function(t, r, a) {
			"use strict";
			var o = a(0),
				i = a.n(o),
				c = a(1),
				l = a.n(c),
				E = a(56),
				u = a(69);
			const VerifyEmailToast = ({
				autoClose: t,
				closeToast: r,
				notification: a
			}) => i.a.createElement(E.a, {
				isClickable: !0,
				autoClose: t,
				closeToast: r
			}, i.a.createElement(u.o, {
				isToast: !0,
				closeToast: r,
				notification: a
			}));
			VerifyEmailToast.propTypes = {
				autoClose: l.a.number,
				closeToast: l.a.func.isRequired,
				notification: l.a.object.isRequired
			}, r.a = VerifyEmailToast
		},
		602: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return i
			}));
			var o = a(24);
			const i = Object(o.a)("FAST_WITHDRAW_SUCCESS")
		},
		603: function(t, r, a) {
			"use strict";
			var o = a(594);
			a.d(r, "a", (function() {
				return o.a
			}))
		},
		608: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return E
			}));
			var o = a(59),
				i = a(72),
				c = a(51),
				l = a(32);

			function ownKeys(t, r) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					r && (o = o.filter((function(r) {
						return Object.getOwnPropertyDescriptor(t, r).enumerable
					}))), a.push.apply(a, o)
				}
				return a
			}

			function _objectSpread(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = null != arguments[r] ? arguments[r] : {};
					r % 2 ? ownKeys(Object(a), !0).forEach((function(r) {
						_defineProperty(t, r, a[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r))
					}))
				}
				return t
			}

			function _defineProperty(t, r, a) {
				return r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}
			const E = function() {
				var t = function _asyncToGenerator(t) {
					return function() {
						var r = this,
							a = arguments;
						return new Promise((function(o, i) {
							var c = t.apply(r, a);

							function _next(t) {
								asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
							}

							function _throw(t) {
								asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
							}
							_next(void 0)
						}))
					}
				}((function*({
					isFirstRequest: t,
					market: r,
					resolution: a,
					startingBefore: E
				}) {
					const u = c.d[a];
					let d, _;
					if (E) _ = o.DateTime.fromISO(E).toUTC().toISO();
					else {
						d = o.DateTime.local().minus(((t, r) => {
							switch (t) {
								case i.CandleResolution.ONE_MIN:
									return r ? {
										hours: 2
									} : {
										hours: 1
									};
								case i.CandleResolution.FIVE_MINS:
									return r ? {
										hours: 10
									} : {
										hours: 1
									};
								case i.CandleResolution.FIFTEEN_MINS:
									return r ? {
										hours: 30
									} : {
										hours: 1
									};
								case i.CandleResolution.THIRTY_MINS:
									return r ? {
										hours: 60
									} : {
										hours: 1
									};
								case i.CandleResolution.ONE_HOUR:
									return r ? {
										months: 1
									} : {
										hours: 2
									};
								case i.CandleResolution.FOUR_HOURS:
									return r ? {
										months: 4
									} : {
										hours: 5
									};
								case i.CandleResolution.ONE_DAY:
									return r ? {
										years: 1
									} : {
										days: 2
									};
								default:
									return {}
							}
						})(u, t)).toUTC().toISO()
					}
					return [...yield l.c.getCandles({
						market: r,
						resolution: u,
						fromISO: d,
						toISO: _
					})].reverse().map(t => _objectSpread(_objectSpread({}, t), {}, {
						startedAt: o.DateTime.fromISO(t.startedAt).toMillis()
					}))
				}));
				return function fetchAndFormatCandles(r) {
					return t.apply(this, arguments)
				}
			}()
		},
		609: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return useViewportDimensions
			}));
			var o = a(371),
				i = a.n(o),
				c = a(0);

			function _slicedToArray(t, r) {
				return function _arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function _iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function _unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return _arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return _arrayLikeToArray(t, r)
				}(t, r) || function _nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}
			const useViewportDimensions = () => {
				const t = _slicedToArray(Object(c.useState)({
						width: document.scrollingElement.clientWidth,
						height: document.scrollingElement.clientHeight
					}), 2),
					r = t[0],
					a = t[1];
				return Object(c.useEffect)(() => {
					if (window.ResizeObserver) {
						const t = new window.ResizeObserver(([t]) => {
							a({
								width: t.contentRect.width,
								height: t.contentRect.height
							})
						});
						return t.observe(document.scrollingElement), () => {
							t.disconnect()
						}
					}
					const t = i()(() => {
						a({
							width: document.scrollingElement.clientWidth,
							height: document.scrollingElement.clientHeight
						})
					}, 100);
					return window.addEventListener("resize", t), () => {
						window.removeEventListener("resize", t)
					}
				}, []), r
			}
		},
		63: function(t, r, a) {
			"use strict";
			a.d(r, "d", (function() {
				return gaTrackEvent
			})), a.d(r, "a", (function() {
				return l
			})), a.d(r, "b", (function() {
				return E
			})), a.d(r, "c", (function() {
				return d
			}));
			var o, i = a(273),
				c = a(164);

			function _slicedToArray(t, r) {
				return function _arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function _iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function _unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return _arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return _arrayLikeToArray(t, r)
				}(t, r) || function _nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}

			function asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function _asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			} {
				const t = "G-GJ8NEMJT3B",
					r = document.createElement("script");
				r.src = "https://www.googletagmanager.com/gtag/js?id=" + t, document.head.appendChild(r);
				const a = document.createElement("script");
				a.innerHTML = `\n    window.dataLayer = window.dataLayer || [];\n    function gtag() {\n      dataLayer.push(arguments);\n    }\n    window.gtag = gtag;\n    gtag('js', new Date());\n    gtag('set', 'allow_google_signals', false);\n    gtag('set', 'allow_ad_personalization_signals', false);\n    gtag('config', '${t}', { 'allow_google_signals': false, 'allow_ad_personalization_signals': false });\n  `, document.head.appendChild(a)
			}
			const gaTrackEvent = t => {
				var r, a;
				null === (r = (a = window).gtag) || void 0 === r || r.call(a, "event", t)
			};
			let l, E;
			! function(t) {
				t.ActionDeposit = "Action/Deposit", t.ActionPlaceOrder = "Action/PlaceOrder", t.ActionSetAllowance = "Action/SetAllowance", t.ActionWithdraw = "Action/Withdraw", t.AffiliatesAffiliateOnboardingStepChanged = "Affiliates/AffiliateOnboardingStepChanged", t.ModalOpenModal = "Modal/OpenModal", t.ModalCloseModal = "Modal/CloseModal", t.OnboardingConnectWallet = "Onboarding/ConnectWallet", t.OnboardingCreateAccount = "Onboarding/CreateAccount", t.OnboardingDisconnectWallet = "Onboarding/DisconnectWallet", t.OnboardingInitializeClient = "Onboarding/InitializeClient", t.OnboardingKeysSuccessfullyGenerated = "Onboarding/KeysSuccessfullyGenerated", t.OnboardingWalletLoaded = "Onboarding/WalletLoaded", t.OnboardingOnboardingStepChanged = "Onboarding/OnboardingStepChanged", t.PageView = "Page/PageView"
			}(l || (l = {})),
			function(t) {
				t.WalletType = "walletType", t.Locale = "locale", t.Breakpoint = "breakpoint"
			}(E || (E = {}));
			const u = null !== (o = "https://290tin5r89.execute-api.us-east-1.amazonaws.com/production/2/httpapi") ? o : "";
			i.c("134398c388f9af8c010e87c6cbafbfa2", void 0, u ? {
				serverUrl: u
			} : void 0), i.d(!1);
			const d = {
				setUserId: t => _asyncToGenerator((function*() {
					i.e(t)
				}))(),
				identifyUserProperty: (t, r) => _asyncToGenerator((function*() {
					return i.b((new i.a).set(t, r)).promise
				}))(),
				identifyBreakpoint() {
					var t = this;
					return _asyncToGenerator((function*() {
						return t.identifyUserProperty(E.Breakpoint, c.a.isMobile.matches ? "BREAKPOINT_MOBILE" : c.a.isTablet.matches ? "BREAKPOINT_TABLET" : c.a.isDesktopSmall.matches ? "BREAKPOINT_DESKTOP_SMALL" : c.a.isDesktopMedium.matches ? "BREAKPOINT_DESKTOP_MEDIUM" : c.a.isDesktopLarge.matches ? "BREAKPOINT_DESKTOP_LARGE" : "NOT_SUPPORTED")
					}))()
				},
				trackEvent: (t, r = {}) => _asyncToGenerator((function*() {
					const a = _slicedToArray(t.split("/"), 2)[1];
					return i.f(a, r).promise
				}))()
			}
		},
		69: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return D
			})), a.d(r, "b", (function() {
				return v
			})), a.d(r, "c", (function() {
				return q
			})), a.d(r, "d", (function() {
				return J
			})), a.d(r, "e", (function() {
				return te
			})), a.d(r, "f", (function() {
				return ce
			})), a.d(r, "g", (function() {
				return Ee
			})), a.d(r, "h", (function() {
				return de
			})), a.d(r, "i", (function() {
				return Oe
			})), a.d(r, "j", (function() {
				return he
			})), a.d(r, "k", (function() {
				return Pe
			})), a.d(r, "l", (function() {
				return Fe
			})), a.d(r, "m", (function() {
				return We
			})), a.d(r, "n", (function() {
				return Ke
			})), a.d(r, "o", (function() {
				return Ze
			}));
			var o = a(0),
				i = a.n(o),
				c = a(8),
				l = a(97),
				E = a.n(l),
				u = a(30),
				d = a(17),
				_ = a(440),
				O = a(2),
				T = a(88),
				I = a(1),
				S = a.n(I),
				p = a(14),
				R = a(15),
				A = a(87),
				b = a(47);
			const Notification = ({
				icon: t,
				id: r,
				isToast: a,
				isClearable: o,
				title: c,
				body: l,
				link: E,
				linkInline: u = !0,
				onClick: d,
				onClickSecondary: _,
				secondaryLink: O
			}) => {
				const T = Object(p.e)();
				let I;
				if (E && O && _) I = i.a.createElement(N.Links, null, E && i.a.createElement(N.Link, {
					hasSecondary: !0
				}, E, " \u2192"), O && i.a.createElement(N.SecondaryLink, {
					onClick: t => {
						t.stopPropagation(), _()
					}
				}, O));
				else if (E) {
					const t = u ? N.Link : N.LinkDiv;
					I = i.a.createElement(i.a.Fragment, null, " ", i.a.createElement(t, null, E, " \u2192"))
				}
				return i.a.createElement(N.Notification, {
					isToast: a,
					isClearable: o,
					onClick: d
				}, i.a.createElement(N.Title, null, t, c), i.a.createElement(N.Body, null, l, I), o && !a && i.a.createElement(N.ClearButton, {
					icon: i.a.createElement(R.o, null),
					onClick: t => {
						t.stopPropagation(), T(Object(b.c)({
							id: r
						}))
					}
				}))
			};
			Notification.propTypes = {
				body: S.a.oneOfType([S.a.string, S.a.node]),
				icon: S.a.element,
				id: S.a.string,
				isClearable: S.a.bool,
				isToast: S.a.bool,
				link: S.a.string,
				linkInline: S.a.bool,
				onClick: S.a.func,
				onClickSecondary: S.a.func,
				secondaryLink: S.a.oneOfType([S.a.string, S.a.node]),
				title: S.a.string
			};
			const N = {};
			N.Notification = c.c.div`
  display: grid;
  gap: 8px;
  border-bottom: ${({isToast:t})=>t?"none":"solid 1px var(--color-border-grey)"};
  cursor: ${({onClick:t})=>t?"pointer":"normal"};
  position: relative;

  ${({isToast:t})=>!t&&c.b`
			padding: 16 px 20 px;

			@media $ {
				d.a.tablet
			} {
				padding: 20 px 24 px;
			}
			`}

  ${({isClearable:t,isToast:r,onClick:a})=>!r&&(t||a)&&c.b` &
			: hover {
				background - color: var (--color - layer - light);
			}
			`};
`, N.LinkDiv = c.c.div`
  color: var(--color-purple);
  white-space: nowrap;
  margin-top: 6px;

  ${({hasSecondary:t})=>t?c.b` &
				: hover {
					text - decoration: underline;
				}
			`:c.b`
			$ {
				N.Notification
			}: hover & {
				text - decoration: underline;
			}
			`}
`, N.Link = c.c.span`
  color: var(--color-purple);
  white-space: nowrap;

  ${({hasSecondary:t})=>t?c.b` &
				: hover {
					text - decoration: underline;
				}
			`:c.b`
			$ {
				N.Notification
			}: hover & {
				text - decoration: underline;
			}
			`}
`, N.SecondaryLink = c.c.span`
  color: var(--color-text-dark);
  display: flex;
  align-items: center;

  &:hover {
    color: var(--color-text-light);

    > svg path {
      stroke: currentColor;
    }
  }
`, N.Title = c.c.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  gap: 8px;

  color: var(--color-text-base);
  ${d.e.size15};

  @media ${d.a.tablet} {
    ${d.e.size18};
  }
`, N.Body = c.c.span`
  color: var(--color-text-dark);
  ${d.e.size13};

  @media ${d.a.tablet} {
    ${d.e.size16};
  }

  > svg {
    width: 100%;
  }
`, N.Links = c.c.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`, N.ClearButton = Object(c.c)(A.b)`
  position: absolute;
  top: 12px;
  right: 16px;
  padding: 4px;

  > svg path {
    stroke: currentColor;
  }

  &:hover {
    color: var(--color-text-light);
  }

  ${({isClearable:t})=>t&&c.b`
			$ {
				N.Notification
			}: not(: hover) & {
				display: none;
			}
			`}
`;
			const C = c.b`
  --icon-width: 16px;
  --icon-fill: currentColor;
  --icon-stroke: currentColor;

  width: var(--icon-width);
  height: 20px;
  transform: translateY(1px);

  path {
    fill: var(--icon-fill);
    stroke: var(--icon-stroke);
  }

  @media ${d.a.tablet} {
    width: 24px;
    height: 24px;
  }
`,
				y = {};
			y.AssetIcon = Object(c.c)(_.a)`
  margin-top: 1px;
  margin-left: 2px;

  @media ${d.a.tablet} {
    margin-top: 0;
    margin-left: 3px;
  }
`, y.LightSpan = c.c.span`
  color: var(--color-text-light);
`;
			var D = Object(u.d)(({
					closeToast: t,
					isToast: r,
					notification: {
						id: a,
						isIncreasing: o,
						market: c,
						percentIMR: l,
						percentMMR: u
					},
					stringGetter: d
				}) => {
					const _ = T.b[c].baseSymbol;
					return i.a.createElement(Notification, {
						id: a,
						isToast: r,
						icon: i.a.createElement(y.AssetIcon, {
							medium: !0,
							symbol: _
						}),
						title: d({
							key: O.a.ADJUSTED_IMR
						}),
						body: i.a.createElement("span", {
							dangerouslySetInnerHTML: {
								__html: d({
									key: O.a.ADJUSTED_IMR_BODY,
									params: {
										ACTION: d({
											key: o ? O.a.INCREASED : O.a.DECREASED
										}),
										MARKET: E.a.renderToString(i.a.createElement(y.LightSpan, null, c)),
										PERCENT: E.a.renderToString(i.a.createElement(y.LightSpan, null, "" + l, "%")),
										ADDITIONAL_NOTE: d({
											key: O.a.MAINTENANCE_MARGIN_ADJUSTMENTS,
											params: {
												ACTION: d({
													key: O.a.ARE_UNCHANGED
												}),
												PERCENT: "" + u
											}
										})
									}
								})
							}
						}),
						onClick: () => {
							null === t || void 0 === t || t()
						}
					})
				}),
				m = a(4),
				h = a(33),
				L = a(27),
				g = a(277);
			const P = {};
			P.Img = c.c.img`
  height: 20px;
  width: 20px;

  @media ${d.a.tablet} {
    width: 28px;
    height: 28px;
  }
`, P.BaseSpan = c.c.span`
  color: var(--color-text-base);
`;
			var v = Object(u.d)(({
					closeToast: t,
					isToast: r,
					notification: a = {},
					stringGetter: o
				}) => {
					var c;
					const l = Object(p.e)(),
						E = a.id,
						u = a.hedgieWon,
						d = a.period,
						_ = a.prizeWon;
					let T;
					const I = Object.values(m.h).includes(d) ? Object(g.a)(null !== (c = d) && void 0 !== c ? c : void 0) : "/badges/daily.png";
					let S;
					switch (T = u && _ ? m.a.Mix : u && !_ ? m.a.Hedgie : m.a.Cash, T) {
						case m.a.Cash:
							S = o({
								key: O.a.PRIZE_CASH
							});
							break;
						case m.a.Hedgie:
							S = o({
								key: O.a.PRIZE_DAILY_HEDGIE
							});
							break;
						case m.a.Mix:
							S = o({
								key: O.a.PRIZE_LEAGUE_MIXED
							});
							break;
						default:
							S = ""
					}
					return i.a.createElement(Notification, {
						id: E,
						icon: i.a.createElement(P.Img, {
							alt: "",
							src: I
						}),
						isClearable: !0,
						isToast: r,
						link: o({
							key: O.a.VIEW
						}),
						body: S,
						onClick: () => {
							l(Object(h.c)({
								modalType: L.a.LEAGUE_WINNER,
								modalProps: {
									userPnlData: a
								}
							})), l(Object(b.c)({
								id: E
							})), null === t || void 0 === t || t()
						},
						title: o({
							key: O.a.YOU_WON
						})
					})
				}),
				w = a(92),
				M = a(13),
				U = a.n(M),
				G = "RuzGObOl8qn59CL4_Mq6r",
				j = "_18Q9-WPX_9rw0FX7Eo5rmU",
				k = "_3iuRE2UCdITjrir_rR4pVL",
				x = "_2IJzBOKP93s_1huTCrPtv7",
				H = "_3Y7OgANdxHij7VCrl2j94-",
				B = "oeJFKWRkLCtBTErCSOEBr",
				W = "_3vn_uF-CRGcvPftacHnN9f",
				Y = "_2ToEd9aNhFrJ-P7X43CyEL",
				K = "_2KcnjpgTYwb5sOZQqaD4Sj",
				V = "_1_bjV_KRCmWuiIoAI-AIMG",
				Z = "_2K8yK4tDYmT_1NllRySQJV",
				z = "_2b-9Uc8JTx556Rpk5rOFky",
				X = "_1hQ_4f7dOfzxsug7xKFQzY";
			const DepositPendingNotification = ({
				isToast: t,
				notification: {
					amount: r,
					asset: a,
					transactionHash: o,
					confirmations: c
				},
				stringGetter: l
			}) => i.a.createElement("div", {
				role: "button",
				tabIndex: 0,
				className: U()(H, {
					[B]: t,
					[V]: !t
				}),
				onClick: () => window.open("https://etherscan.io/tx/" + o, "_blank")
			}, i.a.createElement("div", {
				className: Y
			}, i.a.createElement(R.n, null), l({
				key: O.a.DEPOSIT_IN_PROGRESS
			})), i.a.createElement("div", {
				className: K
			}, i.a.createElement("span", {
				dangerouslySetInnerHTML: {
					__html: l({
						key: O.a.DEPOSIT_IN_PROGRESS_DESCRIPTION,
						params: {
							AMOUNT_ELEMENT: E.a.renderToString(i.a.createElement("span", {
								className: X
							}, i.a.createElement(w.a, {
								thousandSeparator: !0,
								displayType: "text",
								suffix: " " + a,
								value: r
							})))
						}
					})
				}
			})), i.a.createElement("div", {
				className: G
			}, i.a.createElement("div", {
				className: j
			}, i.a.createElement("div", {
				className: k,
				style: {
					width: Math.min(10 * c, 100) + "%"
				}
			})), i.a.createElement("div", {
				className: x
			}, l({
				key: O.a.OUT_OF_TEN_CONFIRMATIONS,
				params: {
					CURRENT_CONFIRMATIONS: Math.max(c, 0)
				}
			}))));
			DepositPendingNotification.propTypes = {
				isToast: S.a.bool,
				notification: S.a.object.isRequired,
				stringGetter: S.a.func.isRequired
			};
			var q = Object(u.d)(DepositPendingNotification),
				$ = a(54),
				Q = "A27AjygFpHiub39doTOby";
			const DepositSuccessNotification = ({
				isToast: t,
				notification: {
					id: r,
					amount: a,
					asset: o,
					transactionHash: c
				},
				removeNotification: l,
				stringGetter: u
			}) => i.a.createElement("div", {
				role: "button",
				tabIndex: 0,
				className: U()(H, {
					[B]: t,
					[V]: !t,
					[Z]: !t
				}),
				onClick: () => c && window.open("https://etherscan.io/tx/" + c, "_blank")
			}, !t && i.a.createElement("div", {
				role: "button",
				tabIndex: 0,
				className: z,
				onClick: t => {
					t.stopPropagation(), l({
						id: r
					})
				}
			}, i.a.createElement(R.o, null)), i.a.createElement("div", {
				className: Y
			}, i.a.createElement("div", {
				className: Q
			}, i.a.createElement(R.rb, null)), u({
				key: O.a.DEPOSIT_SUCCESS
			})), i.a.createElement("div", {
				className: K
			}, i.a.createElement("span", {
				dangerouslySetInnerHTML: {
					__html: u({
						key: O.a.DEPOSIT_SUCCESS_DESCRIPTION,
						params: {
							AMOUNT_ELEMENT: E.a.renderToString(i.a.createElement("span", {
								className: X
							}, i.a.createElement(w.a, {
								thousandSeparator: !0,
								displayType: "text",
								suffix: " " + o,
								value: a
							})))
						}
					})
				}
			})));
			DepositSuccessNotification.propTypes = {
				isToast: S.a.bool,
				notification: S.a.object.isRequired,
				removeNotification: S.a.func.isRequired,
				stringGetter: S.a.func.isRequired
			};
			var J = Object(u.d)(Object(p.c)(null, t => Object($.b)({
				removeNotification: b.c
			}, t))(DepositSuccessNotification));
			const EmailReminderNotification = ({
					closeToast: t,
					isToast: r,
					stringGetter: a
				}) => {
					const o = Object(p.e)();
					return i.a.createElement(ee.NotificationContainer, {
						isToast: r,
						onClick: () => {
							o(Object(h.c)({
								modalType: L.a.EMAIL_NOTIFICATIONS
							})), null === t || void 0 === t || t()
						}
					}, i.a.createElement(ee.NotificationTitle, null, i.a.createElement(R.x, null), a({
						key: O.a.EMAIL_NOTIFICATIONS
					})), i.a.createElement(ee.NotificationBody, null, a({
						key: O.a.GET_NOTIFIED
					}), " ", i.a.createElement(ee.NotificationLinkColorText, null, a({
						key: O.a.SETUP
					}) + " \u2192")))
				},
				ee = {};
			ee.NotificationTitle = c.c.div`
  ${d.e.size15};
  display: flex;
  align-items: center;
  color: var(--color-text-base);

  @media ${d.a.tablet} {
    ${d.e.size18};
  }

  > svg {
    height: 20px;
    width: 20px;
    margin-right: 8px;
    margin-top: 1px;
    margin-bottom: -1px;

    path {
      fill: var(--color-text-base);
    }

    @media ${d.a.tablet} {
      height: 22px;
      width: 22px;
    }
  }
`, ee.NotificationBody = c.c.span`
  ${d.e.size13};
  color: var(--color-text-dark);
  margin-top: 8px;

  @media ${d.a.tablet} {
    ${d.e.size16};
  }

  > svg {
    width: 100%;
  }
`, ee.NotificationContainer = c.c.div`
  display: flex;
  flex-direction: column;
  padding: ${({isToast:t})=>t?"0":"16px 20px"};
  border-bottom: ${({isToast:t})=>t?"none":"solid 1px var(--color-border-grey)"};
  cursor: ${({onClick:t})=>t?"pointer":"normal"};

  @media ${d.a.tablet} {
    padding: ${({isToast:t})=>t?"0":"20px 24px"};
  }

  &:hover {
    position: relative;
    ${({isToast:t,onClick:r})=>r&&!t&&"var(--color-layer-light)"};
  }
`, ee.NotificationLinkColorText = c.c.span`
  color: var(--color-purple);
  margin-top: 6px;
  white-space: nowrap;

  ${ee.NotificationContainer}:hover & {
    text-decoration: underline;
  }
`, EmailReminderNotification.propTypes = {
				closeToast: S.a.func,
				isToast: S.a.bool,
				stringGetter: S.a.func.isRequired
			};
			var te = Object(u.d)(EmailReminderNotification),
				re = a(274),
				ne = a(55),
				ae = a(82),
				oe = a(32),
				ie = a(10);

			function asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}
			const se = {};
			se.LightSpan = c.c.span`
  color: var(--color-text-light);
`, se.Dydx = Object(c.c)(re.a)`
  height: 20px;
  width: 20px;

  @media ${d.a.tablet} {
    width: 28px;
    height: 28px;
  }
`, se.BaseSpan = c.c.span`
  color: var(--color-text-base);
`;
			var ce = Object(u.d)(({
					closeToast: t,
					isToast: r,
					notification: a = {},
					stringGetter: c
				}) => {
					const l = Object(p.e)();
					Object(o.useEffect)(() => () => {
						r || S()
					}, []);
					const u = a.id,
						d = a.epoch,
						_ = a.estimatedRewards,
						T = Object(ie.b)(_),
						I = T.gte(100) ? 0 : ae.f,
						S = function() {
							var t = function _asyncToGenerator(t) {
								return function() {
									var r = this,
										a = arguments;
									return new Promise((function(o, i) {
										var c = t.apply(r, a);

										function _next(t) {
											asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
										}

										function _throw(t) {
											asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
										}
										_next(void 0)
									}))
								}
							}((function*() {
								const t = d,
									r = (yield oe.c.updateUser({
										username: void 0,
										isSharingAddress: void 0,
										userData: {
											preferences: {
												[m.j.LatestConcludedEpoch]: t
											}
										}
									})).user;
								l(Object(ne.c)(r))
							}));
							return function setLatestViewedEpochModal() {
								return t.apply(this, arguments)
							}
						}();
					return i.a.createElement(Notification, {
						linkInline: !1,
						id: u,
						icon: i.a.createElement(se.Dydx, {
							symbol: "DYDX"
						}),
						isClearable: !0,
						isToast: r,
						link: c({
							key: O.a.VIEW_DETAILS
						}),
						body: i.a.createElement("span", {
							dangerouslySetInnerHTML: {
								__html: c({
									key: O.a.EPOCH_REWARDS_BODY,
									params: {
										DYDX: E.a.renderToString(i.a.createElement(se.LightSpan, null, T.toFixed(I))),
										EPOCH_NUMBER: d
									}
								})
							}
						}),
						onClick: () => {
							l(Object(h.c)({
								modalType: L.a.EPOCH_END,
								modalProps: {
									rewardsData: a
								}
							})), r && S(), l(Object(b.c)({
								id: u
							})), null === t || void 0 === t || t()
						},
						title: c({
							key: O.a.EPOCH_REWARDS,
							params: {
								EPOCH_NUMBER: d
							}
						})
					})
				}),
				le = a(80);
			const FastWithdrawPendingNotification = ({
				isToast: t,
				notification: {
					id: r,
					amount: a
				},
				removeNotification: o,
				stringGetter: c
			}) => i.a.createElement("div", {
				className: U()(H, {
					[B]: t,
					[Z]: !t
				})
			}, !t && i.a.createElement("div", {
				role: "button",
				tabIndex: 0,
				className: z,
				onClick: () => o({
					id: r
				})
			}, i.a.createElement(R.o, null)), i.a.createElement("div", {
				className: Y
			}, i.a.createElement(R.Cb, null), c({
				key: O.a.FAST_WITHDRAW_PENDING
			})), i.a.createElement("div", {
				className: K
			}, i.a.createElement("span", {
				dangerouslySetInnerHTML: {
					__html: c({
						key: O.a.FAST_WITHDRAW_PENDING_DESCRIPTION,
						params: {
							AMOUNT_ELEMENT: E.a.renderToString(i.a.createElement("span", {
								className: X
							}, i.a.createElement(w.a, {
								thousandSeparator: !0,
								displayType: "text",
								suffix: " " + le.a.USDC,
								value: Object(ie.b)(a).toFixed(ae.f)
							})))
						}
					})
				}
			})));
			FastWithdrawPendingNotification.propTypes = {
				isToast: S.a.bool,
				notification: S.a.object.isRequired,
				removeNotification: S.a.func.isRequired,
				stringGetter: S.a.func.isRequired
			};
			var Ee = Object(u.d)(Object(p.c)(null, t => Object($.b)({
					removeNotification: b.c
				}, t))(FastWithdrawPendingNotification)),
				ue = "_1bTQqY4hkLPbxbWrMDGyGa";
			const fast_withdraw_success_notification_DepositSuccessNotification = ({
				isToast: t,
				notification: {
					id: r,
					amount: a,
					transactionHash: o
				},
				removeNotification: c,
				stringGetter: l
			}) => i.a.createElement("div", {
				role: "button",
				tabIndex: 0,
				className: U()(H, {
					[B]: t,
					[V]: !t,
					[Z]: !t
				}),
				onClick: () => window.open("https://etherscan.io/tx/" + o, "_blank")
			}, !t && i.a.createElement("div", {
				role: "button",
				tabIndex: 0,
				className: z,
				onClick: t => {
					t.stopPropagation(), c({
						id: r
					})
				}
			}, i.a.createElement(R.o, null)), i.a.createElement("div", {
				className: Y
			}, i.a.createElement("div", {
				className: ue
			}, i.a.createElement(R.rb, null)), l({
				key: O.a.FAST_WITHDRAW_SUCCESS
			})), i.a.createElement("div", {
				className: K
			}, i.a.createElement("span", {
				dangerouslySetInnerHTML: {
					__html: l({
						key: O.a.FAST_WITHDRAW_SUCCESS_DESCRIPTION,
						params: {
							AMOUNT_ELEMENT: E.a.renderToString(i.a.createElement("span", {
								className: X
							}, i.a.createElement(w.a, {
								thousandSeparator: !0,
								displayType: "text",
								suffix: " " + le.a.USDC,
								value: a
							})))
						}
					})
				}
			})));
			fast_withdraw_success_notification_DepositSuccessNotification.propTypes = {
				isToast: S.a.bool,
				notification: S.a.object.isRequired,
				removeNotification: S.a.func.isRequired,
				stringGetter: S.a.func.isRequired
			};
			var de = Object(u.d)(Object(p.c)(null, t => Object($.b)({
				removeNotification: b.c
			}, t))(fast_withdraw_success_notification_DepositSuccessNotification));
			const _e = {};
			_e.WarningIcon = Object(c.c)(R.Bb)`
  width: 13px;
  margin-top: 1px;
  margin-left: 2px;

  @media ${d.a.tablet} {
    width: 15px;
    margin-top: 0;
    margin-left: 3px;
  }
`;
			var Oe = Object(u.d)(({
					closeToast: t,
					isToast: r,
					notification: {
						id: a,
						reason: o
					} = {},
					stringGetter: c
				}) => {
					let l = !1;
					return null !== o && void 0 !== o && o.includes("For compliance reasons you are blocked") && (l = !0), i.a.createElement(Notification, {
						id: a,
						isToast: r,
						icon: i.a.createElement(_e.WarningIcon, null),
						title: c({
							key: O.a.PERMANENTLY_BLOCKED
						}),
						body: c({
							key: l ? O.a.PERMANENTLY_BLOCKED_ELLIPTIC : O.a.PERMANENTLY_BLOCKED_DESCRIPTION
						}),
						onClick: () => {
							null === t || void 0 === t || t()
						}
					})
				}),
				Te = a(118),
				Ie = a(58),
				Se = a(26),
				pe = a(462),
				Re = "Q3HfM7Ur2nVUWZvjduO2g",
				Ae = "_3OaUVWGMzCCBfwUii1d1m_",
				fe = "h_K7H1T-RvgEvjMnGahb-",
				be = "_1T_ELsmlDNBuJyhddoh6f0",
				Ne = "_1aBKMFM9FqhxrsgxglsRV-",
				Ce = "_3BPNc0iY0InUzJc9m8MYIr",
				ye = "_3hla1QK8YsTgqhdOvkOi6n",
				De = "_12EpZatCVQQeIdQJoeA53P",
				me = "_3nOB2x8rHAYV9kd-F0sRkv";
			const OrderUpdateNotification = ({
				allMarketsData: t,
				isToast: r,
				notification: {
					order: {
						id: a,
						price: o,
						size: c,
						side: l,
						status: E,
						type: u,
						market: d,
						remainingSize: _,
						cancelReason: I
					}
				},
				removeNotification: S,
				stringGetter: p
			}) => {
				if (!t) return null;
				const A = t[d].tickSize,
					b = T.b[d].baseSymbol,
					N = Object(ie.b)(A).decimalPlaces();
				let C;
				switch (u) {
					case Se.e.MARKET:
						C = p({
							key: O.a.MARKET_ORDER
						});
						break;
					case Se.e.LIMIT:
						C = p({
							key: O.a.LIMIT_ORDER
						});
						break;
					case Se.e.STOP_LIMIT:
						C = p({
							key: O.a.STOP_LIMIT
						});
						break;
					case Se.e.TAKE_PROFIT:
						C = p({
							key: O.a.TAKE_PROFIT_LIMIT
						});
						break;
					case Se.e.TRAILING_STOP:
						C = p({
							key: O.a.TRAILING_STOP
						});
						break;
					case Se.e.STOP_MARKET:
						C = p({
							key: O.a.STOP_MARKET
						});
						break;
					case Se.e.TAKE_PROFIT_MARKET:
						C = p({
							key: O.a.TAKE_PROFIT_MARKET
						})
				}
				const y = Object(ie.b)(c).minus(_),
					D = Object(pe.b)({
						status: E,
						filledAmount: y
					});
				return i.a.createElement("div", {
					className: U()(H, {
						[B]: r,
						[Z]: !r,
						[Re]: !r
					})
				}, !r && i.a.createElement("div", {
					role: "button",
					tabIndex: 0,
					className: z,
					onClick: () => S({
						id: a
					})
				}, i.a.createElement(R.o, null)), i.a.createElement("div", {
					className: U()(fe, Y)
				}, i.a.createElement("span", {
					className: be
				}, i.a.createElement(re.a, {
					className: Ne,
					symbol: b
				}), C), i.a.createElement("span", {
					className: Ae
				}, p({
					key: Object(pe.a)({
						status: E,
						filledAmount: y,
						cancelReason: I
					})
				}), i.a.createElement(D, null))), i.a.createElement("div", {
					className: Ce
				}, i.a.createElement("span", {
					className: ye
				}, p({
					key: O.a.SIZE
				}), i.a.createElement(Te.a, {
					regularFont: !0,
					compact: !0,
					marginLeft: !0,
					green: l === Se.a.BUY,
					red: l === Se.a.SELL
				}, l === Se.a.BUY ? p({
					key: O.a.BUY
				}) : p({
					key: O.a.SELL
				}))), i.a.createElement("span", {
					className: De
				}, i.a.createElement(w.a, {
					thousandSeparator: !0,
					displayType: "text",
					value: Object(ie.b)(c).toFixed(ae.f)
				}), i.a.createElement(Te.a, {
					marginLeft: !0,
					compact: !0
				}, b))), i.a.createElement("div", {
					className: Ce
				}, i.a.createElement("span", {
					className: ye
				}, p({
					key: O.a.PRICE
				})), i.a.createElement("span", {
					className: U()(De, {
						[me]: [Se.e.MARKET, Se.e.STOP_MARKET, Se.e.TAKE_PROFIT_MARKET].includes(u)
					})
				}, [Se.e.MARKET, Se.e.STOP_MARKET, Se.e.TAKE_PROFIT_MARKET].includes(u) ? p({
					key: O.a.MARKET_PRICE_SHORT
				}) : i.a.createElement(w.a, {
					thousandSeparator: !0,
					displayType: "text",
					prefix: "$",
					value: Object(ie.b)(o).toFixed(N)
				}))))
			};
			OrderUpdateNotification.propTypes = {
				allMarketsData: S.a.object,
				isToast: S.a.bool,
				notification: S.a.object.isRequired,
				removeNotification: S.a.func.isRequired,
				stringGetter: S.a.func.isRequired
			};
			var he = Object(u.d)(Object(p.c)(t => ({
					allMarketsData: Object(Ie.a)(t)
				}), t => Object($.b)({
					removeNotification: b.c
				}, t))(OrderUpdateNotification)),
				Le = a(28);
			const ge = {};
			ge.LightSpan = c.c.span`
  color: var(--color-text-light);
`, ge.LinkIcon = Object(c.c)(R.P)`
  width: 18px;
  height: 18px;
  margin-top: 1px;
  margin-left: 2px;

  path {
    fill: var(--color-text-light);
  }

  @media ${d.a.tablet} {
    width: 20px;
    height: 20px;
    margin-top: 0;
    margin-left: 3px;
  }
`;
			var Pe = Object(u.d)(({
					closeToast: t,
					isToast: r,
					notification: {
						id: a
					} = {},
					stringGetter: o
				}) => {
					const c = Object(Le.g)();
					return i.a.createElement(Notification, {
						id: a,
						icon: i.a.createElement(ge.LinkIcon, null),
						isToast: r,
						title: o({
							key: O.a.GET_AFFILIATE_LINK
						}),
						body: i.a.createElement("span", {
							dangerouslySetInnerHTML: {
								__html: o({
									key: O.a.SET_UP_REFERRALS_BODY,
									params: {
										COMMISSION: E.a.renderToString(i.a.createElement(ge.LightSpan, null, o({
											key: O.a.SET_UP_REFERRALS_PARAM
										})))
									}
								})
							}
						}),
						onClick: () => {
							c.push("/my-profile#referrals"), null === t || void 0 === t || t()
						}
					})
				}),
				ve = a(148),
				we = a(155),
				Me = a(41),
				Ue = a(85),
				Ge = a(22),
				je = a(298),
				ke = a(589),
				xe = "_12aMbJ8t8txqqJ8t0AP4Eb";

			function slow_withdraw_available_notification_asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function _slicedToArray(t, r) {
				return function _arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function _iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function _unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return _arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return _arrayLikeToArray(t, r)
				}(t, r) || function _nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}
			const SlowWithdrawAvailableNotification = ({
				isToast: t,
				notification: {
					type: r,
					amount: a
				},
				removeNotification: c,
				starkKeyPair: l,
				stringGetter: u
			}) => {
				const d = _slicedToArray(Object(o.useState)(!1), 2),
					_ = d[0],
					T = d[1],
					I = function() {
						var t = function slow_withdraw_available_notification_asyncToGenerator(t) {
							return function() {
								var r = this,
									a = arguments;
								return new Promise((function(o, i) {
									var c = t.apply(r, a);

									function _next(t) {
										slow_withdraw_available_notification_asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
									}

									function _throw(t) {
										slow_withdraw_available_notification_asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
									}
									_next(void 0)
								}))
							}
						}((function*() {
							T(!0);
							try {
								const t = yield Object(je.a)();
								yield Ue.a.exchange.withdraw({
									starkKey: l.publicKey
								}, {
									gasPrice: t,
									confirmationType: ve.ConfirmationType.Hash
								}), c({
									type: r
								})
							} catch (t) {
								Object(ke.d)({
									error: t,
									location: Ge.a.SLOW_WITHDRAW
								})
							} finally {
								T(!1)
							}
						}));
						return function onClickWithdraw() {
							return t.apply(this, arguments)
						}
					}();
				return i.a.createElement("div", {
					role: "button",
					tabIndex: 0,
					className: U()(H, {
						[B]: t,
						[V]: !t
					}),
					onClick: I
				}, i.a.createElement("div", {
					className: Y
				}, i.a.createElement(R.Cb, null), u({
					key: O.a.SLOW_WITHDRAW_AVAILABLE
				})), i.a.createElement("div", {
					className: K
				}, i.a.createElement("span", {
					dangerouslySetInnerHTML: {
						__html: u({
							key: O.a.SLOW_WITHDRAW_AVAILABLE_DESCRIPTION,
							params: {
								AMOUNT_ELEMENT: E.a.renderToString(i.a.createElement("span", {
									className: X
								}, i.a.createElement(w.a, {
									thousandSeparator: !0,
									displayType: "text",
									suffix: " " + le.a.USDC,
									value: a
								})))
							}
						})
					}
				}), " ", _ ? i.a.createElement(we.a, {
					className: xe,
					size: 3
				}) : i.a.createElement("span", {
					className: W
				}, u({
					key: O.a.WITHDRAW
				}), " \u2192")))
			};
			SlowWithdrawAvailableNotification.propTypes = {
				isToast: S.a.bool,
				notification: S.a.object.isRequired,
				removeNotification: S.a.func.isRequired,
				starkKeyPair: S.a.object,
				stringGetter: S.a.func.isRequired
			};
			var Fe = Object(u.d)(Object(p.c)(t => ({
					starkKeyPair: Object(Me.l)(t)
				}), t => Object($.b)({
					removeNotification: b.d
				}, t))(SlowWithdrawAvailableNotification)),
				He = a(452),
				Be = a(34);
			const SlowWithdrawPendingNotification = ({
				isToast: t,
				removeNotification: r,
				stringGetter: a,
				totalPendingSlowWithdraw: c
			}) => (Object(o.useEffect)(() => {
				c && !Object(ie.b)(c).isZero() || r({
					type: Be.b.SLOW_WITHDRAW_PENDING
				})
			}, [c]), i.a.createElement("div", {
				className: U()(H, {
					[B]: t,
					[Z]: !t
				})
			}, !t && i.a.createElement("div", {
				role: "button",
				tabIndex: 0,
				className: z,
				onClick: () => r({
					type: Be.b.SLOW_WITHDRAW_PENDING
				})
			}, i.a.createElement(R.o, null)), i.a.createElement("div", {
				className: Y
			}, i.a.createElement(R.Cb, null), a({
				key: O.a.SLOW_WITHDRAW_PENDING
			})), i.a.createElement("div", {
				className: K
			}, i.a.createElement("span", {
				dangerouslySetInnerHTML: {
					__html: a({
						key: O.a.SLOW_WITHDRAW_PENDING_DESCRIPTION,
						params: {
							AMOUNT_ELEMENT: E.a.renderToString(i.a.createElement("span", {
								className: X
							}, i.a.createElement(w.a, {
								thousandSeparator: !0,
								displayType: "text",
								suffix: " " + le.a.USDC,
								value: c
							})))
						}
					})
				}
			}))));
			SlowWithdrawPendingNotification.propTypes = {
				isToast: S.a.bool,
				removeNotification: S.a.func.isRequired,
				stringGetter: S.a.func.isRequired,
				totalPendingSlowWithdraw: S.a.string
			};
			var We = Object(u.d)(Object(p.c)(t => ({
				totalPendingSlowWithdraw: Object(He.a)(t)
			}), t => Object($.b)({
				removeNotification: b.d
			}, t))(SlowWithdrawPendingNotification));
			const Ye = {};
			Ye.WarningIcon = Object(c.c)(R.Bb)`
  width: 13px;
  margin-top: 1px;
  margin-left: 2px;

  @media ${d.a.tablet} {
    width: 15px;
    margin-top: 0;
    margin-left: 3px;
  }
`;
			var Ke = Object(u.d)(({
					closeToast: t,
					isToast: r,
					notification: {
						id: a
					} = {},
					stringGetter: o
				}) => i.a.createElement(Notification, {
					id: a,
					isToast: r,
					icon: i.a.createElement(Ye.WarningIcon, null),
					title: o({
						key: O.a.SUSPICIOUS_TRADE
					}),
					body: o({
						key: O.a.SUSPICIOUS_TRADE_BODY
					}),
					onClick: () => {
						null === t || void 0 === t || t()
					}
				})),
				Ve = a(107);
			const VerifyEmailNotification = ({
				closeToast: t,
				isToast: r,
				notification: {
					id: a,
					type: o
				},
				stringGetter: c
			}) => {
				const l = Object(p.e)(),
					E = Object(p.f)(Ve.a),
					u = !r && o !== Be.b.VERIFY_EMAIL,
					openEmailNotificationsModal = () => {
						l(Object(h.c)({
							modalType: L.a.EMAIL_NOTIFICATIONS
						}))
					};
				let d, _, T, I, onNotificationClick = () => {
					E ? openEmailNotificationsModal() : l(Object(h.c)({
						modalType: L.a.ONBOARDING,
						modalProps: {
							onValidKeyPairsCallback: openEmailNotificationsModal
						}
					})), null === t || void 0 === t || t()
				};
				switch (a) {
					case Be.d.VERIFY_EMAIL:
						d = ze.EmailIcon, _ = O.a.VERIFY_EMAIL, T = O.a.VERIFY_EMAIL_BODY, I = O.a.VERIFY_EMAIL_CTA;
						break;
					case Be.d.VERIFY_EMAIL_FAIL:
						d = ze.WarningIcon, _ = O.a.VERIFICATION_FAIL, T = O.a.VERIFICATION_FAIL_BODY, onNotificationClick = t ? () => null === t || void 0 === t ? void 0 : t() : null;
						break;
					case Be.d.VERIFY_EMAIL_SENT:
						d = ze.EmailIcon, _ = O.a.VERIFY_EMAIL, T = O.a.VERIFICATION_HAS_SENT_BODY, onNotificationClick = t ? () => null === t || void 0 === t ? void 0 : t() : null;
						break;
					case Be.d.VERIFY_EMAIL_SUCCESS:
						d = ze.CheckIcon, _ = O.a.VERIFICATION_SUCCESS, T = O.a.VERIFICATION_SUCCESS_BODY, I = O.a.SETTINGS
				}
				return i.a.createElement(Notification, {
					id: a,
					isToast: r,
					isClearable: u,
					title: c({
						key: _
					}),
					body: c({
						key: T
					}),
					link: c({
						key: I
					}),
					onClick: onNotificationClick,
					icon: i.a.createElement(d, null)
				})
			};
			VerifyEmailNotification.propTypes = {
				closeToast: S.a.func,
				isToast: S.a.bool,
				notification: S.a.object.isRequired,
				stringGetter: S.a.func.isRequired
			};
			var Ze = Object(u.d)(VerifyEmailNotification);
			const ze = {};
			ze.EmailIcon = Object(c.c)(R.x)`
  ${C}

  --icon-width: 20px;
  --icon-stroke: transparent;
`, ze.WarningIcon = Object(c.c)(R.Bb)`
  ${C}

  --icon-fill: var(--color-red);
  --icon-stroke: transparent;
`, ze.CheckIcon = Object(c.c)(R.m)`
  ${C}

  --icon-fill: var(--color-green);
  --icon-stroke: none;
`
		},
		80: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return i
			})), a.d(r, "b", (function() {
				return c
			})), a.d(r, "c", (function() {
				return l
			}));
			var o = a(86);
			const i = {
					COMP: "COMP",
					DAI: "DAI",
					ETH: "ETH",
					LINK: "LINK",
					MATIC: "MATIC",
					MKR: "MKR",
					UNI: "UNI",
					USDC: "USDC",
					USDT: "USDT",
					WBTC: "WBTC",
					WETH: "WETH"
				},
				c = [i.COMP, i.DAI, i.ETH, i.LINK, i.MATIC, i.MKR, i.UNI, i.USDC, i.USDT, i.WBTC, i.WETH],
				l = {
					[i.USDC]: {
						symbol: "USDC",
						name: "USD Coin",
						address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
						decimals: 6,
						market: "USD",
						slippageOptions: o.g
					},
					[i.USDT]: {
						address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
						symbol: "USDT",
						name: "Tether",
						decimals: 6,
						market: "USD",
						slippageOptions: o.g
					},
					[i.DAI]: {
						symbol: "DAI",
						name: "DAI",
						address: "0x6b175474e89094c44da98b954eedeac495271d0f",
						decimals: 18,
						market: "USD",
						slippageOptions: o.g
					},
					[i.WETH]: {
						symbol: "WETH",
						name: "Wrapped Ether",
						address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
						decimals: 18,
						market: "ETH-USD",
						slippageOptions: o.g
					},
					[i.ETH]: {
						symbol: "ETH",
						name: "Ether",
						address: "ETH",
						decimals: 18,
						market: "ETH-USD",
						slippageOptions: o.g
					},
					[i.WBTC]: {
						symbol: "WBTC",
						name: "Wrapped BTC",
						address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
						decimals: 8,
						market: "BTC-USD",
						slippageOptions: o.i
					},
					[i.UNI]: {
						symbol: "UNI",
						name: "Uniswap",
						address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
						decimals: 18,
						market: "UNI-USD",
						slippageOptions: o.i
					},
					[i.LINK]: {
						symbol: "LINK",
						name: "ChainLink",
						address: "0x514910771af9ca656af840dff83e8264ecf986ca",
						decimals: 18,
						market: "LINK-USD",
						slippageOptions: o.i
					},
					[i.MATIC]: {
						symbol: "MATIC",
						name: "Matic",
						address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
						decimals: 18,
						market: "MATIC-USD",
						slippageOptions: o.i
					},
					[i.MKR]: {
						symbol: "MKR",
						name: "Maker",
						address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
						decimals: 18,
						market: "MKR-USD",
						slippageOptions: o.i
					},
					[i.COMP]: {
						symbol: "COMP",
						name: "Compound",
						address: "0xc00e94cb662c3520282e6f5717214004a7f26888",
						decimals: 18,
						market: "COMP-USD",
						slippageOptions: o.i
					}
				}
		},
		82: function(t, r, a) {
			"use strict";
			a.d(r, "g", (function() {
				return o
			})), a.d(r, "c", (function() {
				return i
			})), a.d(r, "d", (function() {
				return c
			})), a.d(r, "e", (function() {
				return l
			})), a.d(r, "b", (function() {
				return E
			})), a.d(r, "f", (function() {
				return u
			})), a.d(r, "a", (function() {
				return d
			}));
			const o = 2,
				i = 2,
				c = 4,
				l = 6,
				E = 2,
				u = 4,
				d = 2
		},
		827: function(t) {
			t.exports = JSON.parse('[{"inputs":[{"internalType":"contract ERC20Like[]","name":"tokens","type":"address[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract ERC20Like","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"pendingWithdrawals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"contract ERC20Like[]","name":"tokens","type":"address[]"}],"name":"performEscrow","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
		},
		846: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return L
			}));
			var o = a(0),
				i = a.n(o),
				c = a(13),
				l = a.n(c),
				E = a(1),
				u = a.n(E),
				d = a(14),
				_ = a(30),
				O = a(15),
				T = a(35),
				I = a(41),
				S = a(2),
				p = a(59),
				R = a(139),
				A = a(275);
			const b = {
					TRADES: "Trades",
					FUNDING: "Funding",
					TRANSFERS: "Transfers"
				},
				N = {
					[b.FUNDING]: S.a.FUNDING_PAYMENTS_SHORT,
					[b.TRADES]: S.a.TRADES,
					[b.TRANSFERS]: S.a.TRANSFERS
				},
				C = {
					[b.FUNDING]: ["effectiveAt", "market", "payment", "rate", "positionSize", "price"],
					[b.TRADES]: ["createdAt", "side", "liquidity", "type", "market", "price", "size", "fee"],
					[b.TRANSFERS]: ["createdAt", "type", "debitAsset", "creditAsset", "debitAmount", "creditAmount", "transactionHash", "status", "confirmedAt", "fromAddress", "toAddress"]
				};
			var y = a(32),
				D = a(22);
			const exportJsonArrayAsCsv = (t, r = null, a = "export.csv") => {
				const o = ((t, r) => {
						const a = t,
							replacer = (t, r) => null === r ? "" : r,
							o = r || (null === a || void 0 === a ? void 0 : a.length) > 0 && Object.keys(a[0]);
						if (!o) return "";
						return [o.join(","), ...a.map(t => o.map(r => JSON.stringify(t[r], replacer)).join(","))].join("\r\n")
					})(t, r),
					i = new Blob([o]);
				if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveBlob(i, a);
				else {
					const t = window.document.createElement("a");
					t.href = window.URL.createObjectURL(i, {
						type: "text/plain"
					}), t.download = a, document.body.appendChild(t), t.click(), document.body.removeChild(t)
				}
			};
			var m = {
				exportMenuButtonContainer: "_3CrEqLhQWh7s09qyv2Wcv5",
				exportButton: "_1Nc4Ea1WxO_0Y0zwf_rvgH",
				isActive: "W6f050F4m-BnPZBhn6b2y",
				exportModalMenu: "_2ZLyX-Jf6Ma34UPGR6Ge9m",
				exportButtonsContainer: "-eTARSmafWr1uRm8l9w_r",
				innerExportButton: "fZZuqUW8MnZsqRoOcc4k"
			};

			function asyncGeneratorStep(t, r, a, o, i, c, l) {
				try {
					var E = t[c](l),
						u = E.value
				} catch (d) {
					return void a(d)
				}
				E.done ? r(u) : Promise.resolve(u).then(o, i)
			}

			function _asyncToGenerator(t) {
				return function() {
					var r = this,
						a = arguments;
					return new Promise((function(o, i) {
						var c = t.apply(r, a);

						function _next(t) {
							asyncGeneratorStep(c, o, i, _next, _throw, "next", t)
						}

						function _throw(t) {
							asyncGeneratorStep(c, o, i, _next, _throw, "throw", t)
						}
						_next(void 0)
					}))
				}
			}
			const HistoryExportModal = ({
				contentToDownload: t,
				isExportModalOpen: r,
				setContentToDownload: a,
				setIsExportModalOpen: c,
				setMainButtonIsLoading: E,
				stringGetter: u,
				walletAddress: d
			}) => {
				const _ = Object(o.useRef)(null);
				Object(R.h)({
					onClickOutside: () => c(!r),
					ref: _
				});
				const O = function() {
						var t = _asyncToGenerator((function*(t) {
							let r = [];
							try {
								switch (t) {
									case b.FUNDING:
										r = yield y.c.getFundingPaymentsHistory();
										break;
									case b.TRADES:
										r = yield y.c.getFillsHistory();
										break;
									case b.TRANSFERS:
										r = yield y.c.getTransfersHistory()
								}
							} catch (a) {
								D.b.notify({
									error: a,
									location: D.a.HISTORY_EXPORT
								})
							}
							return r
						}));
						return function getHistory(r) {
							return t.apply(this, arguments)
						}
					}(),
					I = function() {
						var t = _asyncToGenerator((function*(t) {
							a(t), E(!0);
							((t, r, o) => {
								r && exportJsonArrayAsCsv(r, o, `dYdX_${t}_History_${p.DateTime.local().toFormat("MM-dd-yyyy")}_${d}.csv`), a(null), E(!1)
							})(t, yield O(t), C[t])
						}));
						return function onExportClicked(r) {
							return t.apply(this, arguments)
						}
					}(),
					h = u(t ? {
						key: S.a.COMPILING
					} : {
						key: S.a.DOWNLOAD_CSV
					}),
					L = Object.keys(b).map(r => i.a.createElement(T.a, {
						fullWidth: !0,
						key: r,
						className: l()(m.innerExportButton, {
							[m.isLoading]: t === b[r]
						}),
						disabled: !!t,
						isLoading: t === b[r],
						onClick: () => I(b[r])
					}, u({
						key: N[b[r]]
					})));
				return i.a.createElement("div", {
					className: m.exportModalMenu,
					ref: _
				}, i.a.createElement(A.a, {
					label: h
				}, i.a.createElement("div", {
					className: m.exportButtonsContainer
				}, L)))
			};
			HistoryExportModal.propTypes = {
				contentToDownload: u.a.string,
				isExportModalOpen: u.a.bool.isRequired,
				setContentToDownload: u.a.func.isRequired,
				setIsExportModalOpen: u.a.func.isRequired,
				setMainButtonIsLoading: u.a.func.isRequired,
				stringGetter: u.a.func.isRequired,
				walletAddress: u.a.string
			};
			var h = HistoryExportModal;

			function _slicedToArray(t, r) {
				return function _arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function _iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function _unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return _arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return _arrayLikeToArray(t, r)
				}(t, r) || function _nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}
			const HistoryExport = ({
				stringGetter: t,
				walletAddress: r
			}) => {
				const a = _slicedToArray(Object(o.useState)(!1), 2),
					c = a[0],
					E = a[1],
					u = _slicedToArray(Object(o.useState)(!1), 2),
					d = u[0],
					_ = u[1],
					I = _slicedToArray(Object(o.useState)(null), 2),
					p = I[0],
					R = I[1];
				return r ? i.a.createElement("div", {
					className: m.exportMenuButtonContainer
				}, i.a.createElement(T.a, {
					allowClickOnLoading: !0,
					active: d,
					className: l()(m.exportButton, {
						[m.isActive]: d,
						[m.isLoading]: c
					}),
					isLoading: c,
					onClick: t => {
						t.stopPropagation(), _(!d)
					},
					size: T.d.Medium
				}, i.a.createElement(O.w, null), " ", t({
					key: S.a.EXPORT
				})), d && i.a.createElement(h, {
					contentToDownload: p,
					isExportModalOpen: d,
					setContentToDownload: R,
					setIsExportModalOpen: _,
					setMainButtonIsLoading: E,
					stringGetter: t,
					walletAddress: r
				})) : null
			};
			HistoryExport.propTypes = {
				stringGetter: u.a.func.isRequired,
				walletAddress: u.a.string
			};
			var L = Object(_.d)(Object(d.c)(t => ({
				walletAddress: Object(I.m)(t)
			}))(HistoryExport))
		},
		847: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return Ie
			}));
			var o = a(220),
				i = a.n(o),
				c = a(0),
				l = a.n(c),
				E = a(1),
				u = a.n(E),
				d = a(14),
				_ = a(28),
				O = a(13),
				T = a.n(O),
				I = a(30),
				S = a(15),
				p = a(139),
				R = a(35),
				A = a(591),
				b = a(87),
				N = a(92),
				C = a(274),
				y = a(590),
				D = a(118),
				m = a(82),
				h = a(2),
				L = a(10),
				g = "_1i_jfKy_CR-3JEUUoLyTyo",
				P = "_1uC2xzVGl7L8alfssRyH8r",
				v = "_9gtigQmZKBGLOi8I0l9Dc",
				w = "_2jve0XRK1SS7xTFWQHU7sV",
				M = "iQf-YzyF_N-syktHoSgoL",
				U = "_3703-MxhX16pYBOSod3SpG",
				G = "_2d-dptgdt6bp7FHSPkHbT6",
				j = "_1spo-4DNNHD_uNqIyedTNs",
				k = "LEvNyLKA7Nf-VNmnhSne2",
				x = "JgW455sLNCFwLKMBszwTI",
				H = "_2IUfFxkgGlGlUtHSyhyFPF",
				B = "_2WJGXrupeNRzJIHJoHUz_m",
				W = "_3MKJCaAOdwIIerBJXh-Pam",
				Y = "_3ZMhmO5axjO4M-52JQ52eK",
				K = "_2h5WSnpmPeubiAFY5RjfpI",
				V = "_3CAUNSCsacK-I2JgikLL4R";
			const MarketSelectionMenuItem = ({
				config: {
					baseSymbol: t,
					baseSymbolName: r
				},
				indexPrice: a,
				nextFundingRate: o,
				openInterest: i,
				priceChange24H: c,
				priceChangePercent: E,
				volume24H: u,
				stepSize: d,
				tickSize: _,
				isSelected: O,
				isExpandedView: I,
				isStarred: p,
				setIsStarred: R,
				onClick: A,
				stringGetter: Z
			}) => {
				const z = Object(L.e)(_);
				return l.a.createElement("div", {
					role: "button",
					tabIndex: 0,
					className: T()(g, {
						[P]: O,
						[v]: I,
						[Y]: p
					}),
					onClick: A
				}, l.a.createElement("div", {
					className: w
				}, l.a.createElement("div", {
					className: M
				}, l.a.createElement(b.b, {
					className: T()(W, {
						[Y]: p
					}),
					iconUsesStroke: !0,
					icon: l.a.createElement(S.pb, null),
					onClick: t => {
						R(!p), t.stopPropagation()
					},
					pill: !0,
					size: b.a.EXTRA_SMALL
				}), l.a.createElement("div", {
					className: U
				}, l.a.createElement(C.a, {
					medium: !0,
					symbol: t
				}), l.a.createElement("span", null, r), l.a.createElement(D.a, {
					marginLeft: !0
				}, t))), l.a.createElement("div", {
					className: G
				}, a ? l.a.createElement(N.a, {
					thousandSeparator: !0,
					displayType: "text",
					prefix: "$",
					value: Object(L.b)(a).toFixed(z)
				}) : "-", c && l.a.createElement("div", {
					className: T()(j, {
						[K]: E.gt(0),
						[V]: E.lt(0)
					})
				}, l.a.createElement(y.a, {
					marginRight: !0,
					positive: E.gt(0),
					negative: E.lt(0)
				}), l.a.createElement(N.a, {
					thousandSeparator: !0,
					displayType: "text",
					suffix: "%",
					value: E.abs().times(100).toFixed(m.c)
				})))), I && l.a.createElement("div", {
					className: k
				}, l.a.createElement("div", {
					className: x
				}, l.a.createElement("div", {
					className: H
				}, Z({
					key: h.a.VOLUME_24H
				})), l.a.createElement("div", {
					className: B
				}, u ? l.a.createElement(N.a, {
					thousandSeparator: !0,
					displayType: "text",
					prefix: "$",
					value: Object(L.b)(u).toFixed(0)
				}) : "-")), l.a.createElement("div", {
					className: x
				}, l.a.createElement("div", {
					className: H
				}, Z({
					key: h.a.OPEN_INTEREST
				})), l.a.createElement("div", {
					className: B
				}, i ? l.a.createElement(N.a, {
					thousandSeparator: !0,
					displayType: "text",
					value: Object(L.b)(i).toFixed(Object(L.e)(d))
				}) : "-", l.a.createElement(D.a, {
					marginLeft: !0,
					compact: !0
				}, t))), l.a.createElement("div", {
					className: x
				}, l.a.createElement("div", {
					className: H
				}, Z({
					key: h.a.FUNDING_RATE
				})), l.a.createElement("div", {
					className: B
				}, o ? l.a.createElement(N.a, {
					thousandSeparator: !0,
					displayType: "text",
					suffix: "%",
					value: Object(L.b)(o).times(100).toFixed(m.e)
				}) : "-"))))
			};
			MarketSelectionMenuItem.propTypes = {
				config: u.a.shape({
					baseSymbol: u.a.string.isRequired,
					baseSymbolName: u.a.string.isRequired,
					route: u.a.string.isRequired
				}).isRequired,
				indexPrice: u.a.string.isRequired,
				nextFundingRate: u.a.string.isRequired,
				openInterest: u.a.string.isRequired,
				priceChange24H: u.a.string.isRequired,
				priceChangePercent: u.a.object.isRequired,
				volume24H: u.a.string.isRequired,
				stepSize: u.a.string.isRequired,
				tickSize: u.a.string.isRequired,
				isSelected: u.a.bool.isRequired,
				isExpandedView: u.a.bool.isRequired,
				isStarred: u.a.bool.isRequired,
				setIsStarred: u.a.func.isRequired,
				onClick: u.a.func.isRequired,
				stringGetter: u.a.func.isRequired
			};
			var Z = MarketSelectionMenuItem,
				z = a(575),
				X = a(570),
				q = a(275),
				$ = a(33),
				Q = a(58),
				J = a(27),
				ee = a(88),
				te = a(40),
				re = a(593),
				ne = "_14rwWgDcatef27EFjPdYOM",
				ae = "_1nkwDNgLRyxJubZRjRgOnG",
				oe = "_2z2i1mkEDgu2j-xrgxxJ3G",
				ie = "_3r9wm8xHnjKgNFzEX5R76l",
				se = "_3SguaKQvkpf7A4VgoqTLOX",
				ce = "_2watBYa2Cqpmu005LBOeln",
				le = "VpUeKyJeOLGCp0Z6_jzw2",
				Ee = "_6_s1igBgOZG_l67nN_HjG",
				ue = "_3gQMo2riV5NJWK3ug-pg9h";

			function _extends() {
				return (_extends = Object.assign || function(t) {
					for (var r = 1; r < arguments.length; r++) {
						var a = arguments[r];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}

			function _slicedToArray(t, r) {
				return function _arrayWithHoles(t) {
					if (Array.isArray(t)) return t
				}(t) || function _iterableToArrayLimit(t, r) {
					var a = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (null == a) return;
					var o, i, c = [],
						l = !0,
						E = !1;
					try {
						for (a = a.call(t); !(l = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); l = !0);
					} catch (u) {
						E = !0, i = u
					} finally {
						try {
							l || null == a.return || a.return()
						} finally {
							if (E) throw i
						}
					}
					return c
				}(t, r) || function _unsupportedIterableToArray(t, r) {
					if (!t) return;
					if ("string" === typeof t) return _arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					"Object" === a && t.constructor && (a = t.constructor.name);
					if ("Map" === a || "Set" === a) return Array.from(t);
					if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return _arrayLikeToArray(t, r)
				}(t, r) || function _nonIterableRest() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o
			}
			const de = {
					FAVORITES: "FAVORITES",
					VOLUME_24H: "VOLUME_24H",
					CHANGE_24H: "CHANGE_24H",
					OPEN_INTEREST: "OPEN_INTEREST",
					FUNDING_RATE: "FUNDING_RATE"
				},
				_e = {
					[de.FAVORITES]: h.a.FAVORITES,
					[de.VOLUME_24H]: h.a.VOLUME_24H,
					[de.CHANGE_24H]: h.a.CHANGE_24H,
					[de.OPEN_INTEREST]: h.a.OPEN_INTEREST,
					[de.FUNDING_RATE]: h.a.FUNDING_RATE
				},
				Oe = {
					DECREASING: "DECREASING",
					INCREASING: "INCREASING"
				},
				Te = {
					[Oe.DECREASING]: h.a.DECREASING,
					[Oe.INCREASING]: h.a.INCREASING
				},
				MarketSelectionMenu = ({
					history: t,
					setIsMarketSelectionMenuOpen: r,
					starredMarketSymbols: a,
					setStarredMarketSymbols: o,
					stringGetter: E
				}) => {
					const u = l.a.useRef(),
						_ = Object(d.f)(Q.a),
						O = Object(d.f)(Q.b),
						I = Object(d.e)(),
						N = _slicedToArray(Object(c.useState)(ee.c.ALL), 2),
						C = N[0],
						y = N[1],
						D = _slicedToArray(Object(c.useState)(de.FAVORITES), 2),
						m = D[0],
						g = D[1],
						P = _slicedToArray(Object(c.useState)(Oe.DECREASING), 2),
						v = P[0],
						w = P[1],
						M = _slicedToArray(Object(c.useState)(!1), 2),
						U = M[0],
						G = M[1],
						j = _slicedToArray(Object(c.useState)(Object(te.b)({
							key: te.a.MARKET_SELECTOR_DETAILED_VIEW
						}) || !1), 2),
						k = j[0],
						x = j[1],
						H = _slicedToArray(Object(c.useState)(!1), 2),
						B = H[0],
						W = H[1],
						Y = _slicedToArray(Object(c.useState)(""), 2),
						K = Y[0],
						V = Y[1],
						Ie = _slicedToArray(Object(c.useState)([]), 2),
						Se = Ie[0],
						pe = Ie[1],
						Re = _slicedToArray(Object(c.useState)([]), 2),
						Ae = Re[0],
						fe = Re[1],
						be = _slicedToArray(Object(c.useState)([]), 2),
						Ne = be[0],
						Ce = be[1];
					Object(c.useEffect)(() => {
						if (_) {
							const t = Object.fromEntries(Object.entries(_).map(([t, {
									indexPrice: r,
									nextFundingRate: a,
									openInterest: o,
									priceChange24H: i,
									volume24H: c,
									stepSize: l,
									tickSize: E
								}]) => [t, {
									symbol: t,
									config: ee.b[t],
									indexPrice: r,
									nextFundingRate: a,
									openInterest: o,
									priceChange24H: i,
									priceChangePercent: Object(re.a)({
										indexPrice: r,
										priceChange24H: i
									}),
									volume24H: c,
									stepSize: l,
									tickSize: E
								}])),
								r = Object.values(ee.e);
							fe(r.map(r => t[r]));
							const a = ee.a[C] || ee.e;
							Ce(a.map(r => t[r]))
						}
					}, [_, C]);
					const ye = _slicedToArray(Object(c.useState)([]), 2),
						De = ye[0],
						me = ye[1];
					Object(c.useEffect)(() => {
						let t;
						if (B) t = [...Se];
						else {
							switch (t = [...Ne], m) {
								case de.FAVORITES:
								case de.VOLUME_24H:
									t = i()(t, ({
										volume24H: t
									}) => Object(L.b)(t).toNumber());
									break;
								case de.CHANGE_24H:
									t = i()(t, ({
										priceChangePercent: t
									}) => t.toNumber());
									break;
								case de.OPEN_INTEREST:
									t = i()(t, ({
										indexPrice: t,
										openInterest: r
									}) => Object(L.b)(r).times(t).toNumber());
									break;
								case de.FUNDING_RATE:
									t = i()(t, ({
										nextFundingRate: t
									}) => Object(L.b)(t).toNumber())
							}
							v === Oe.DECREASING && t.reverse(), m === de.FAVORITES && (t = [...t.filter(({
								symbol: t
							}) => a.includes(t)), ...t.filter(({
								symbol: t
							}) => !a.includes(t))])
						}
						me(t)
					}, [B, Se, a, Ne, m, v]), Object(p.h)({
						onClickOutside: t => {
							U && (t.stopPropagation(), G(!1))
						},
						ref: u,
						dependencies: [U]
					});
					return l.a.createElement("div", {
						className: T()(ne, {
							[ae]: k
						})
					}, l.a.createElement("div", {
						className: T()(oe, {
							[ie]: B
						})
					}, l.a.createElement("div", {
						className: se
					}, Object.values(ee.c).map(t => l.a.createElement(R.a, {
						key: t,
						active: C === t,
						onClick: () => y(t),
						shape: R.c.Pill,
						size: R.d.ExtraSmall
					}, E({
						key: ee.d[t]
					})))), l.a.createElement(b.b, {
						iconUsesStroke: !0,
						selected: U,
						icon: l.a.createElement(S.ob, null),
						onClick: () => G(!U)
					}), l.a.createElement(X.b, {
						searchItems: Ae,
						getSearchableFields: t => [t.symbol, t.config.baseSymbolName],
						isSearching: B,
						setIsSearching: W,
						onSearch: (t, r) => {
							pe(t), V(r)
						},
						placeholder: E({
							key: h.a.MARKET_SEARCH_PLACEHOLDER
						}),
						pill: !0,
						size: X.a.SMALL,
						transition: !0,
						alternateLayout: !0
					}), U && l.a.createElement("div", {
						className: ce,
						ref: u
					}, l.a.createElement(q.a, {
						large: !0,
						label: E({
							key: h.a.SORT_BY
						})
					}, l.a.createElement(z.a, {
						selectedKey: m,
						onChangeSelection: g,
						radioConfig: Object.values(de).map(t => ({
							key: t,
							label: E({
								key: _e[t]
							})
						}))
					})), m !== de.FAVORITES && l.a.createElement(q.a, {
						large: !0,
						label: E({
							key: h.a.DIRECTION
						})
					}, l.a.createElement(z.a, {
						selectedKey: v,
						onChangeSelection: w,
						radioConfig: Object.values(Oe).map(t => ({
							key: t,
							label: E({
								key: Te[t]
							})
						}))
					})), l.a.createElement(q.a, {
						large: !0,
						label: E({
							key: h.a.CARDS
						})
					}, l.a.createElement(A.a, {
						className: le,
						label: E({
							key: h.a.DETAILED_VIEW
						}),
						checked: k,
						onClick: () => {
							x(!k), Object(te.d)({
								key: te.a.MARKET_SELECTOR_DETAILED_VIEW,
								value: !k
							})
						}
					})))), l.a.createElement("div", {
						className: Ee
					}, De.map(i => l.a.createElement(Z, _extends({
						key: i.symbol
					}, i, {
						isSelected: i.symbol === O.market,
						isExpandedView: k,
						isStarred: a.includes(i.symbol),
						setIsStarred: t => {
							o(t ? [...a, i.symbol] : a.filter(t => i.symbol !== t))
						},
						onClick: () => {
							U ? G(!1) : (r(!1), t.push(i.config.route))
						},
						stringGetter: E
					}))), B && K && 0 === De.length && l.a.createElement("div", {
						className: ue
					}, l.a.createElement("h2", null, E({
						key: h.a.QUERY_NOT_FOUND,
						params: {
							QUERY: K
						}
					})), l.a.createElement("p", null, E({
						key: h.a.MARKET_SEARCH_DOES_NOT_EXIST_YET
					})), l.a.createElement(R.a, {
						onClick: () => I(Object($.c)({
							modalType: J.a.FEEDBACK
						})),
						size: R.d.Small
					}, E({
						key: h.a.GIVE_FEEDBACK
					})))))
				};
			MarketSelectionMenu.propTypes = {
				history: u.a.object.isRequired,
				setIsMarketSelectionMenuOpen: u.a.func.isRequired,
				starredMarketSymbols: u.a.array.isRequired,
				setStarredMarketSymbols: u.a.func.isRequired,
				stringGetter: u.a.func.isRequired
			};
			var Ie = Object(I.d)(Object(_.i)(MarketSelectionMenu))
		},
		848: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return O
			}));
			var o = a(0),
				i = a.n(o),
				c = a(8),
				l = a(15),
				E = a(30),
				u = a(17),
				d = a(2);
			const _ = {};
			_.TrophyIcon = Object(c.c)(l.yb)`
  path {
    fill: var(--color-text-dark);
  }
`, _.LinkWrapper = c.c.a`
  display: flex;
  align-items: center;

  @media ${u.a.tablet} {
    height: 92px;
    padding: 0 28px;
    border-bottom: solid 1px var(--color-border-grey);
  }
`, _.LinkTitle = c.c.div`
  display: flex;
  align-items: center;
`, _.LinkOutIconDiv = c.c.div`
  display: flex;
  align-items: center;

  width: 14px;
  height: 14px;
  margin-left: 4px;
  margin-top: 2px;

  @media ${u.a.tablet} {
    width: 16px;
    height: 16px;
    margin-left: 6px;
    margin-top: 4px;
  }
`, _.LinkSubtitle = c.c.div`
  display: none;

  @media ${u.a.tablet} {
    display: inline-block;

    ${u.e.size15};
    color: var(--color-text-dark);
    margin-top: 2px;
  }
`, _.ButtonDiv = c.c.div`
  ${u.b}
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: start;
  align-items: center;
  padding: 8px 0;
  margin: 0;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: initial;
    color: var(--color-text-light);

    & > svg {
      circle,
      rect {
        stroke: var(--color-text-light);
      }
    }

    ${_.LinkOutIconDiv} {
      svg path {
        stroke: var(--color-text-light);
      }
    }

    ${_.LinkSubtitle} {
      color: var(--color-text-light);
    }
  }

  & > svg {
    width: 16px;
    margin-right: 12px;

    @media ${u.a.tablet} {
      width: 20px;
      height: 20px;
      margin-right: 16px;
    }
  }

  ${({iconHasStroke:t})=>t?c.b` &
				: hover > svg path {
					fill: transparent;
					stroke: var (--color - text - light);
				}
			`:c.b` &
			: hover > svg path {
				fill: var (--color - text - light);
				stroke: transparent;
			}
			`}
`;
			var O = Object(E.d)(({
				onButtonClick: t,
				stringGetter: r
			}) => i.a.createElement(i.a.Fragment, null, [{
				Icon: l.tb,
				titleStringKey: d.a.DOCUMENTATION,
				subtitleStringKey: d.a.DOCUMENTATION_DESCRIPTION,
				key: "api-docs",
				link: "https://docs.dydx.exchange/"
			}, {
				Icon: l.v,
				titleStringKey: d.a.COMMUNITY,
				subtitleStringKey: d.a.COMMUNITY_DESCRIPTION,
				key: "community",
				link: "https://discord.gg/yah42Rb"
			}, {
				Icon: l.B,
				titleStringKey: d.a.TERMS_OF_USE,
				subtitleStringKey: d.a.TERMS_OF_USE_DESCRIPTION,
				key: "tos",
				link: "https://dydx.exchange/terms",
				iconHasStroke: !0
			}, {
				Icon: l.hb,
				titleStringKey: d.a.PRIVACY_POLICY,
				subtitleStringKey: d.a.PRIVACY_POLICY_DESCRIPTION,
				key: "privacy-policy",
				link: "https://dydx.exchange/privacy",
				iconHasStroke: !0
			}, {
				Icon: l.B,
				titleStringKey: d.a.GASLESS_DEPOSIT_RULES,
				subtitleStringKey: d.a.GASLESS_DEPOSIT_RULES_DESCRIPTION,
				key: "gasless-deposit-rules",
				link: "https://dydx.exchange/gasless-deposit-rules",
				iconHasStroke: !0
			}, {
				Icon: l.p,
				titleStringKey: d.a.COMPETITION_TERMS,
				subtitleStringKey: d.a.COMPETITION_TERMS_DESCRIPTION,
				key: "competition-terms",
				link: "https://dydx.exchange/trading-competition-terms"
			}, {
				Icon: _.TrophyIcon,
				titleStringKey: d.a.LEAGUE_RULES,
				subtitleStringKey: d.a.LEAGUE_RULES_DESCRIPTION,
				key: "league-rules",
				link: "https://dydx.exchange/trading-league-competition-rules"
			}, {
				Icon: l.e,
				titleStringKey: d.a.EXCHANGE_METRICS,
				subtitleStringKey: d.a.EXCHANGE_METRICS_DESCRIPTION,
				key: "exchange-metrics",
				link: "https://metrics.dydx.exchange/"
			}, {
				Icon: l.I,
				titleStringKey: d.a.EXCHANGE_STATUS,
				subtitleStringKey: d.a.EXCHANGE_STATUS_DESCRIPTION,
				key: "exchange-status",
				link: "https://status.dydx.exchange/",
				iconHasStroke: !0
			}].map(({
				Icon: a,
				titleStringKey: o,
				subtitleStringKey: c,
				key: E,
				link: u,
				iconHasStroke: d = !1
			}) => i.a.createElement(_.LinkWrapper, {
				key: E,
				href: u,
				target: "_blank",
				rel: "noopener noreferrer",
				onClick: t
			}, i.a.createElement(_.ButtonDiv, {
				iconHasStroke: d
			}, i.a.createElement(a, null), i.a.createElement("div", null, i.a.createElement(_.LinkTitle, null, i.a.createElement("div", null, r({
				key: o
			})), i.a.createElement(_.LinkOutIconDiv, null, i.a.createElement(l.Q, null))), i.a.createElement(_.LinkSubtitle, null, r({
				key: c
			}))))))))
		},
		85: function(t, r, a) {
			"use strict";
			var o = a(148);
			const i = new o.StarkwareLib(null, Number("1"), {
				gasMultiplier: 1.1
			});
			r.a = i
		},
		858: function(t) {
			t.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
		},
		86: function(t, r, a) {
			"use strict";
			a.d(r, "e", (function() {
				return c
			})), a.d(r, "b", (function() {
				return l
			})), a.d(r, "h", (function() {
				return E
			})), a.d(r, "g", (function() {
				return u
			})), a.d(r, "f", (function() {
				return d
			})), a.d(r, "i", (function() {
				return _
			})), a.d(r, "d", (function() {
				return O
			})), a.d(r, "c", (function() {
				return T
			})), a.d(r, "a", (function() {
				return I
			}));
			var o = a(4),
				i = a(10);
			const c = Object(i.b)("115792089237316195423570985008687907853269984665640564039457584007913129639935"),
				l = "0x8e8bd01b5A9eb272CC3892a2E40E64A716aa2A40",
				E = "0x032b17633c956c10845643f0bf9ea7c16a3cfb62",
				u = {
					DEFAULT: "0.25",
					MINIMUM: "0.10"
				},
				d = 5,
				_ = {
					DEFAULT: "0.50",
					MINIMUM: "0.25"
				},
				O = {
					rate: "",
					slipapge: "",
					worstUsdcHumanAmount: "",
					zeroExResponseObject: null
				},
				T = {
					Existing: 1e3,
					New: 500
				},
				I = {
					[o.c.ProxyDeposit]: "c5fd8eb1-8e46-4734-8b10-643f3fb93e2c",
					[o.c.ProxyDepositERC20]: "372e9688-e715-482f-bc02-31a6f0eccb63",
					[o.c.ProxyDepositETH]: "2b87ff9d-abf7-41bf-bcd8-fe293675130b"
				}
		},
		87: function(t, r, a) {
			"use strict";
			a.d(r, "b", (function() {
				return m
			})), a.d(r, "a", (function() {
				return D
			}));
			var o = a(91),
				i = a.n(o),
				c = a(0),
				l = a.n(c),
				E = a(1),
				u = a.n(E),
				d = a(13),
				_ = a.n(d),
				O = "kwOQiVl5Q1SR9UgIVPVF4",
				T = "XWdF0mepyzHipiuwqvSOn",
				I = "_2HawKU1qxkXTvu9Dy1JTYo",
				S = "_27rPgVJ26O74okbiBtqpdr",
				p = "IR0CUSqLz7j3rEXfcFxu",
				R = "_2eSWClBUDi4Vi76I6U6G55",
				A = "_3wxyzARW0iBnRT-T5ZuNiZ",
				b = "Gvjrem0Pk2DBYfbMoYklK",
				N = "_3liGLLHFpcPV2pxgEFTCMJ",
				C = "_2SVXFKp5uRYk4yCweXEdCf",
				y = "_2RFtvPWYT-lz51OowGTRMR";
			const D = {
					EXTRA_SMALL: "EXTRA_SMALL",
					SMALL: "SMALL",
					LARGE: "LARGE"
				},
				IconButton = ({
					backgroundLighter: t,
					backgroundLightest: r,
					className: a,
					icon: o,
					iconUsesFill: c,
					iconUsesStroke: E,
					onClick: u = i.a,
					noBackgroundHover: d = !1,
					pill: m,
					selected: h,
					size: L = D.SMALL
				}) => l.a.createElement("div", {
					role: "button",
					tabIndex: 0,
					className: _()(O, {
						[R]: t,
						[A]: r,
						[C]: c,
						[y]: E,
						[I]: m,
						[N]: h,
						[T]: L === D.EXTRA_SMALL,
						[S]: L === D.SMALL,
						[p]: L === D.LARGE,
						[b]: !d
					}, a),
					onClick: u
				}, o);
			IconButton.propTypes = {
				backgroundLighter: u.a.bool,
				backgroundLightest: u.a.bool,
				className: u.a.string,
				icon: u.a.node.isRequired,
				iconUsesFill: u.a.bool,
				iconUsesStroke: u.a.bool,
				noBackgroundHover: u.a.bool,
				onClick: u.a.func,
				pill: u.a.bool,
				selected: u.a.bool,
				size: u.a.string
			};
			var m = IconButton
		},
		88: function(t, r, a) {
			"use strict";
			a.d(r, "f", (function() {
				return E
			})), a.d(r, "b", (function() {
				return u
			})), a.d(r, "e", (function() {
				return d
			})), a.d(r, "c", (function() {
				return T
			})), a.d(r, "d", (function() {
				return I
			})), a.d(r, "a", (function() {
				return S
			}));
			var o = a(2),
				i = a(51),
				c = a(104);
			const l = {
					"1INCH_USD": "1INCH-USD",
					AAVE_USD: "AAVE-USD",
					ADA_USD: "ADA-USD",
					ALGO_USD: "ALGO-USD",
					ATOM_USD: "ATOM-USD",
					AVAX_USD: "AVAX-USD",
					BCH_USD: "BCH-USD",
					BTC_USD: "BTC-USD",
					CELO_USD: "CELO-USD",
					COMP_USD: "COMP-USD",
					CRV_USD: "CRV-USD",
					DOGE_USD: "DOGE-USD",
					DOT_USD: "DOT-USD",
					ENJ_USD: "ENJ-USD",
					EOS_USD: "EOS-USD",
					ETC_USD: "ETC-USD",
					ETH_USD: "ETH-USD",
					FIL_USD: "FIL-USD",
					ICP_USD: "ICP-USD",
					LINK_USD: "LINK-USD",
					LTC_USD: "LTC-USD",
					LUNA_USD: "LUNA-USD",
					MATIC_USD: "MATIC-USD",
					MKR_USD: "MKR-USD",
					NEAR_USD: "NEAR-USD",
					RUNE_USD: "RUNE-USD",
					SNX_USD: "SNX-USD",
					SOL_USD: "SOL-USD",
					SUSHI_USD: "SUSHI-USD",
					TRX_USD: "TRX-USD",
					UMA_USD: "UMA-USD",
					UNI_USD: "UNI-USD",
					XLM_USD: "XLM-USD",
					XMR_USD: "XMR-USD",
					XTZ_USD: "XTZ-USD",
					YFI_USD: "YFI-USD",
					ZEC_USD: "ZEC-USD",
					ZRX_USD: "ZRX-USD"
				},
				E = {
					[l["1INCH_USD"]]: {
						market: l["1INCH_USD"],
						baseSymbol: "1INCH",
						baseSymbolName: "1inch",
						quoteSymbol: "USD",
						largeSize: 1e4,
						route: "/trade/1INCH-USD",
						websiteLink: "https://1inch.io/",
						whitepaperLink: "https://github.com/1inch",
						primaryDescriptionKey: o.a["1INCH_PRIMARY_DESCRIPTION"],
						secondaryDescriptionKey: o.a["1INCH_SECONDARY_DESCRIPTION"],
						chartInfo: {
							tradingViewName: "1INCH-USD",
							tradingViewSymbol: "1INCH-USD",
							supportedResolutions: i.c,
							priceScale: 1e3
						}
					},
					[l.AAVE_USD]: {
						market: l.AAVE_USD,
						baseSymbol: "AAVE",
						baseSymbolName: "Aave",
						quoteSymbol: "USD",
						largeSize: 150,
						route: "/trade/AAVE-USD",
						websiteLink: "https://aave.com/",
						whitepaperLink: "https://github.com/aave/protocol-v2/blob/master/aave-v2-whitepaper.pdf",
						primaryDescriptionKey: o.a.AAVE_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.AAVE_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "AAVE-USD",
							tradingViewSymbol: "AAVE-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.ADA_USD]: {
						market: l.ADA_USD,
						baseSymbol: "ADA",
						baseSymbolName: "Cardano",
						quoteSymbol: "USD",
						largeSize: 3e3,
						route: "/trade/ADA-USD",
						websiteLink: "https://cardano.org/",
						whitepaperLink: "https://why.cardano.org/en/introduction/motivation/",
						primaryDescriptionKey: o.a.CARDANO_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.CARDANO_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "ADA-USD",
							tradingViewSymbol: "ADA-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.ALGO_USD]: {
						market: l.ALGO_USD,
						baseSymbol: "ALGO",
						baseSymbolName: "Algorand",
						quoteSymbol: "USD",
						largeSize: 25e3,
						route: "/trade/ALGO-USD",
						websiteLink: "https://algorand.com/",
						whitepaperLink: "https://algorand.com/technology/white-papers",
						primaryDescriptionKey: o.a.ALGORAND_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.ALGORAND_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "ALGO-USD",
							tradingViewSymbol: "ALGO-USD",
							supportedResolutions: i.c,
							priceScale: 1e3
						}
					},
					[l.ATOM_USD]: {
						market: l.ATOM_USD,
						baseSymbol: "ATOM",
						baseSymbolName: "Cosmos",
						quoteSymbol: "USD",
						largeSize: 4e3,
						route: "/trade/ATOM-USD",
						websiteLink: "https://cosmos.network/",
						whitepaperLink: "https://v1.cosmos.network/resources/whitepaper",
						primaryDescriptionKey: o.a.COSMOS_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.COSMOS_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "ATOM-USD",
							tradingViewSymbol: "ATOM-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.AVAX_USD]: {
						market: l.AVAX_USD,
						baseSymbol: "AVAX",
						baseSymbolName: "Avalanche",
						quoteSymbol: "USD",
						largeSize: 1e3,
						route: "/trade/AVAX-USD",
						websiteLink: "https://www.avalabs.org/",
						whitepaperLink: "https://assets.website-files.com/5d80307810123f5ffbb34d6e/6008d7bbf8b10d1eb01e7e16_Avalanche%20Platform%20Whitepaper.pdf",
						primaryDescriptionKey: o.a.AVAX_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.AVAX_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "AVAX-USD",
							tradingViewSymbol: "AVAX-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.BCH_USD]: {
						market: l.BCH_USD,
						baseSymbol: "BCH",
						baseSymbolName: "Bitcoin Cash",
						quoteSymbol: "USD",
						largeSize: 80,
						route: "/trade/BCH-USD",
						websiteLink: "https://bitcoincash.org/",
						whitepaperLink: "https://bitcoincash.org/",
						primaryDescriptionKey: o.a.BITCOIN_CASH_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.BITCOIN_CASH_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "BCH-USD",
							tradingViewSymbol: "BCH-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.BTC_USD]: {
						market: l.BTC_USD,
						baseSymbol: "BTC",
						baseSymbolName: "Bitcoin",
						quoteSymbol: "USD",
						largeSize: 1,
						route: "/trade/BTC-USD",
						websiteLink: "https://bitcoin.org/",
						whitepaperLink: "https://bitcoin.org/bitcoin.pdf",
						primaryDescriptionKey: o.a.BITCOIN_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.BITCOIN_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "BTC-USD",
							tradingViewSymbol: "BTC-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.CELO_USD]: {
						market: l.CELO_USD,
						baseSymbol: "CELO",
						baseSymbolName: "Celo",
						quoteSymbol: "USD",
						largeSize: 15e3,
						route: "/trade/CELO-USD",
						websiteLink: "https://celo.org/",
						whitepaperLink: "https://celo.org/papers/whitepaper",
						primaryDescriptionKey: o.a.CELO_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.CELO_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "CELO-USD",
							tradingViewSymbol: "CELO-USD",
							supportedResolutions: i.c,
							priceScale: 1e3
						}
					},
					[l.COMP_USD]: {
						market: l.COMP_USD,
						baseSymbol: "COMP",
						baseSymbolName: "Compound",
						quoteSymbol: "USD",
						largeSize: 150,
						route: "/trade/COMP-USD",
						websiteLink: "https://compound.finance/",
						whitepaperLink: "https://compound.finance/documents/Compound.Whitepaper.pdf",
						primaryDescriptionKey: o.a.COMPOUND_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.COMPOUND_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "COMP-USD",
							tradingViewSymbol: "COMP-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.CRV_USD]: {
						market: l.CRV_USD,
						baseSymbol: "CRV",
						baseSymbolName: "Curve",
						quoteSymbol: "USD",
						largeSize: 1e4,
						route: "/trade/CRV-USD",
						websiteLink: "https://curve.fi/",
						whitepaperLink: "https://curve.fi/whitepaper",
						primaryDescriptionKey: o.a.CURVE_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.CURVE_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "CRV-USD",
							tradingViewSymbol: "CRV-USD",
							supportedResolutions: i.c,
							priceScale: 1e3
						}
					},
					[l.DOGE_USD]: {
						market: l.DOGE_USD,
						baseSymbol: "DOGE",
						baseSymbolName: "Dogecoin",
						quoteSymbol: "USD",
						largeSize: 1e4,
						route: "/trade/DOGE-USD",
						websiteLink: "https://dogecoin.com/",
						whitepaperLink: "https://github.com/dogecoin/dogecoin",
						primaryDescriptionKey: o.a.DOGECOIN_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.DOGECOIN_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "DOGE-USD",
							tradingViewSymbol: "DOGE-USD",
							supportedResolutions: i.c,
							priceScale: 1e4
						}
					},
					[l.DOT_USD]: {
						market: l.DOT_USD,
						baseSymbol: "DOT",
						baseSymbolName: "Polkadot",
						quoteSymbol: "USD",
						largeSize: 2500,
						route: "/trade/DOT-USD",
						websiteLink: "https://polkadot.network/",
						whitepaperLink: "https://polkadot.network/PolkaDotPaper.pdf",
						primaryDescriptionKey: o.a.POLKADOT_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.POLKADOT_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "DOT-USD",
							tradingViewSymbol: "DOT-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.ENJ_USD]: {
						market: l.ENJ_USD,
						baseSymbol: "ENJ",
						baseSymbolName: "Enjin",
						quoteSymbol: "USD",
						largeSize: 1e4,
						route: "/trade/ENJ-USD",
						websiteLink: "https://enjin.io/",
						whitepaperLink: "https://cdn.enjin.io/downloads/whitepapers/enjin-coin/en.pdf",
						primaryDescriptionKey: o.a.ENJ_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.ENJ_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "ENJ-USD",
							tradingViewSymbol: "ENJ-USD",
							supportedResolutions: i.c,
							priceScale: 1e3
						}
					},
					[l.EOS_USD]: {
						market: l.EOS_USD,
						baseSymbol: "EOS",
						baseSymbolName: "EOS",
						quoteSymbol: "USD",
						largeSize: 1e4,
						route: "/trade/EOS-USD",
						websiteLink: "https://eos.io/",
						whitepaperLink: "https://github.com/EOSIO/Documentation/blob/master/TechnicalWhitePaper.md",
						primaryDescriptionKey: o.a.EOS_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.EOS_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "EOS-USD",
							tradingViewSymbol: "EOS-USD",
							supportedResolutions: i.c,
							priceScale: 1e3
						}
					},
					[l.ETC_USD]: {
						market: l.ETC_USD,
						baseSymbol: "ETC",
						baseSymbolName: "Ethereum Classic",
						baseSymbolNameMobile: "Eth. Classic",
						quoteSymbol: "USD",
						largeSize: 2e3,
						route: "/trade/ETC-USD",
						websiteLink: "https://ethereumclassic.org/",
						whitepaperLink: "https://ethereumclassic.org/why-classic",
						primaryDescriptionKey: o.a.ETC_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.ETC_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "ETC-USD",
							tradingViewSymbol: "ETC-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.ETH_USD]: {
						market: l.ETH_USD,
						baseSymbol: "ETH",
						baseSymbolName: "Ethereum",
						quoteSymbol: "USD",
						largeSize: 20,
						route: "/trade/ETH-USD",
						websiteLink: "https://ethereum.org/",
						whitepaperLink: "https://ethereum.org/whitepaper/",
						primaryDescriptionKey: o.a.ETHEREUM_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.ETHEREUM_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "ETH-USD",
							tradingViewSymbol: "ETH-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.FIL_USD]: {
						market: l.FIL_USD,
						baseSymbol: "FIL",
						baseSymbolName: "Filecoin",
						quoteSymbol: "USD",
						largeSize: 1e3,
						route: "/trade/FIL-USD",
						websiteLink: "https://filecoin.io/",
						whitepaperLink: "https://filecoin.io/filecoin.pdf",
						primaryDescriptionKey: o.a.FILECOIN_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.FILECOIN_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "FIL-USD",
							tradingViewSymbol: "FIL-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.ICP_USD]: {
						market: l.ICP_USD,
						baseSymbol: "ICP",
						baseSymbolName: "Internet Computer",
						baseSymbolNameMobile: "Internet",
						baseSymbolNameTablet: "Internet Comp.",
						quoteSymbol: "USD",
						largeSize: 4e3,
						route: "/trade/ICP-USD",
						websiteLink: "https://dfinity.org/",
						whitepaperLink: "https://dfinity.org/whitepaper.pdf",
						primaryDescriptionKey: o.a.ICP_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.ICP_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "ICP-USD",
							tradingViewSymbol: "ICP-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.LINK_USD]: {
						market: l.LINK_USD,
						baseSymbol: "LINK",
						baseSymbolName: "Chainlink",
						quoteSymbol: "USD",
						largeSize: 1e3,
						route: "/trade/LINK-USD",
						websiteLink: "https://chain.link/",
						whitepaperLink: "https://link.smartcontract.com/whitepaper",
						primaryDescriptionKey: o.a.CHAINLINK_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.CHAINLINK_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "LINK-USD",
							tradingViewSymbol: "LINK-USD",
							supportedResolutions: i.c,
							priceScale: 1e3
						}
					},
					[l.LTC_USD]: {
						market: l.LTC_USD,
						baseSymbol: "LTC",
						baseSymbolName: "Litecoin",
						quoteSymbol: "USD",
						largeSize: 3e3,
						route: "/trade/LTC-USD",
						websiteLink: "https://litecoin.org/",
						whitepaperLink: "https://litecoin.info/index.php/Main_Page",
						primaryDescriptionKey: o.a.LITECOIN_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.LITECOIN_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "LTC-USD",
							tradingViewSymbol: "LTC-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.LUNA_USD]: {
						market: l.LUNA_USD,
						baseSymbol: "LUNA",
						baseSymbolName: "Terra",
						quoteSymbol: "USD",
						largeSize: 650,
						route: "/trade/LUNA-USD",
						websiteLink: "https://www.terra.money/",
						whitepaperLink: "https://assets.website-files.com/611153e7af981472d8da199c/618b02d13e938ae1f8ad1e45_Terra_White_paper.pdf",
						primaryDescriptionKey: o.a.LUNA_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.LUNA_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "LUNA-USD",
							tradingViewSymbol: "LUNA-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.MATIC_USD]: {
						market: l.MATIC_USD,
						baseSymbol: "MATIC",
						baseSymbolName: "Polygon",
						quoteSymbol: "USD",
						largeSize: 3e4,
						route: "/trade/MATIC-USD",
						websiteLink: "https://polygon.technology/",
						whitepaperLink: "https://polygon.technology/lightpaper-polygon.pdf",
						primaryDescriptionKey: o.a.POLYGON_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.POLYGON_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "MATIC-USD",
							tradingViewSymbol: "MATIC-USD",
							supportedResolutions: i.c,
							priceScale: 1e3
						}
					},
					[l.MKR_USD]: {
						market: l.MKR_USD,
						baseSymbol: "MKR",
						baseSymbolName: "Maker",
						quoteSymbol: "USD",
						largeSize: 20,
						route: "/trade/MKR-USD",
						websiteLink: "https://makerdao.com",
						whitepaperLink: "https://makerdao.com/whitepaper",
						primaryDescriptionKey: o.a.MAKER_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.MAKER_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "MKR-USD",
							tradingViewSymbol: "MKR-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.NEAR_USD]: {
						market: l.NEAR_USD,
						baseSymbol: "NEAR",
						baseSymbolName: "Near",
						quoteSymbol: "USD",
						largeSize: 3e3,
						route: "/trade/NEAR-USD",
						websiteLink: "https://near.org/",
						whitepaperLink: "https://near.org/papers/the-official-near-white-paper/",
						primaryDescriptionKey: o.a.NEAR_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.NEAR_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "NEAR-USD",
							tradingViewSymbol: "NEAR-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.RUNE_USD]: {
						market: l.RUNE_USD,
						baseSymbol: "RUNE",
						baseSymbolName: "THORChain",
						quoteSymbol: "USD",
						largeSize: 6e3,
						route: "/trade/RUNE-USD",
						websiteLink: "https://thorchain.org/",
						whitepaperLink: "https://github.com/thorchain/Resources/blob/master/Whitepapers/THORChain-Whitepaper-May2020.pdf",
						primaryDescriptionKey: o.a.RUNE_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.RUNE_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "RUNE-USD",
							tradingViewSymbol: "RUNE-USD",
							supportedResolutions: i.c,
							priceScale: 1e3
						}
					},
					[l.SNX_USD]: {
						market: l.SNX_USD,
						baseSymbol: "SNX",
						baseSymbolName: "Synthetix",
						quoteSymbol: "USD",
						largeSize: 1e3,
						route: "/trade/SNX-USD",
						websiteLink: "https://synthetix.io/",
						whitepaperLink: "https://docs.synthetix.io/litepaper",
						primaryDescriptionKey: o.a.SYNTHETIX_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.SYNTHETIX_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "SNX-USD",
							tradingViewSymbol: "SNX-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.SOL_USD]: {
						market: l.SOL_USD,
						baseSymbol: "SOL",
						baseSymbolName: "Solana",
						quoteSymbol: "USD",
						largeSize: 1e3,
						route: "/trade/SOL-USD",
						websiteLink: "https://solana.com/",
						whitepaperLink: "https://solana.com/solana-whitepaper.pdf",
						primaryDescriptionKey: o.a.SOLANA_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.SOLANA_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "SOL-USD",
							tradingViewSymbol: "SOL-USD",
							supportedResolutions: i.c,
							priceScale: 1e3
						}
					},
					[l.SUSHI_USD]: {
						market: l.SUSHI_USD,
						baseSymbol: "SUSHI",
						baseSymbolName: "Sushi",
						quoteSymbol: "USD",
						largeSize: 4e3,
						route: "/trade/SUSHI-USD",
						websiteLink: "https://sushi.com/",
						whitepaperLink: "https://docs.sushi.com/",
						primaryDescriptionKey: o.a.SUSHISWAP_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.SUSHISWAP_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "SUSHI-USD",
							tradingViewSymbol: "SUSHI-USD",
							supportedResolutions: i.c,
							priceScale: 1e3
						}
					},
					[l.TRX_USD]: {
						market: l.TRX_USD,
						baseSymbol: "TRX",
						baseSymbolName: "Tron",
						quoteSymbol: "USD",
						largeSize: 3e3,
						route: "/trade/TRX-USD",
						websiteLink: "https://tron.network/",
						whitepaperLink: "https://tron.network/static/doc/white_paper_v_2_0.pdf",
						primaryDescriptionKey: o.a.TRX_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.TRX_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "TRX-USD",
							tradingViewSymbol: "TRX-USD",
							supportedResolutions: i.c,
							priceScale: 1e4
						}
					},
					[l.UMA_USD]: {
						market: l.UMA_USD,
						baseSymbol: "UMA",
						baseSymbolName: "UMA",
						quoteSymbol: "USD",
						largeSize: 3e3,
						route: "/trade/UMA-USD",
						websiteLink: "https://umaproject.org/",
						whitepaperLink: "https://github.com/UMAprotocol/whitepaper",
						primaryDescriptionKey: o.a.UMA_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.UMA_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "UMA-USD",
							tradingViewSymbol: "UMA-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.UNI_USD]: {
						market: l.UNI_USD,
						baseSymbol: "UNI",
						baseSymbolName: "Uniswap",
						quoteSymbol: "USD",
						largeSize: 1e3,
						route: "/trade/UNI-USD",
						websiteLink: "https://uniswap.org/",
						whitepaperLink: "https://uniswap.org/whitepaper-v3.pdf",
						primaryDescriptionKey: o.a.UNISWAP_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.UNISWAP_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "UNI-USD",
							tradingViewSymbol: "UNI-USD",
							supportedResolutions: i.c,
							priceScale: 1e3
						}
					},
					[l.XLM_USD]: {
						market: l.XLM_USD,
						baseSymbol: "XLM",
						baseSymbolName: "Stellar",
						quoteSymbol: "USD",
						largeSize: 2e5,
						route: "/trade/XLM-USD",
						websiteLink: "https://www.stellar.org/",
						whitepaperLink: "https://www.stellar.org/papers/stellar-consensus-protocol",
						primaryDescriptionKey: o.a.STELLAR_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.STELLAR_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "XLM-USD",
							tradingViewSymbol: "XLM-USD",
							supportedResolutions: i.c,
							priceScale: 1e4
						}
					},
					[l.XMR_USD]: {
						market: l.XMR_USD,
						baseSymbol: "XMR",
						baseSymbolName: "Monero",
						quoteSymbol: "USD",
						largeSize: 200,
						route: "/trade/XMR-USD",
						websiteLink: "https://www.getmonero.org/",
						whitepaperLink: "https://www.getmonero.org/resources/research-lab/",
						primaryDescriptionKey: o.a.MONERO_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.MONERO_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "XMR-USD",
							tradingViewSymbol: "XMR-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.XTZ_USD]: {
						market: l.XTZ_USD,
						baseSymbol: "XTZ",
						baseSymbolName: "Tezos",
						quoteSymbol: "USD",
						largeSize: 2e4,
						route: "/trade/XTZ-USD",
						websiteLink: "https://tezos.com/",
						whitepaperLink: "https://tezos.com/whitepaper.pdf",
						primaryDescriptionKey: o.a.XTZ_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.XTZ_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "XTZ-USD",
							tradingViewSymbol: "XTZ-USD",
							supportedResolutions: i.c,
							priceScale: 1e3
						}
					},
					[l.YFI_USD]: {
						market: l.YFI_USD,
						baseSymbol: "YFI",
						baseSymbolName: "Yearn",
						quoteSymbol: "USD",
						largeSize: 1,
						route: "/trade/YFI-USD",
						websiteLink: "https://yearn.finance/",
						whitepaperLink: "https://docs.yearn.finance/",
						primaryDescriptionKey: o.a.YEARN_FINANCE_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.YEARN_FINANCE_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "YFI-USD",
							tradingViewSymbol: "YFI-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.ZEC_USD]: {
						market: l.ZEC_USD,
						baseSymbol: "ZEC",
						baseSymbolName: "Zcash",
						quoteSymbol: "USD",
						largeSize: 300,
						route: "/trade/ZEC-USD",
						websiteLink: "https://z.cash/",
						whitepaperLink: "https://z.cash/technology/",
						primaryDescriptionKey: o.a.ZCASH_PRIMARY_DESCRIPTION,
						secondaryDescriptionKey: o.a.ZCASH_SECONDARY_DESCRIPTION,
						chartInfo: {
							tradingViewName: "ZEC-USD",
							tradingViewSymbol: "ZEC-USD",
							supportedResolutions: i.c,
							priceScale: 100
						}
					},
					[l.ZRX_USD]: {
						market: l.ZRX_USD,
						baseSymbol: "ZRX",
						baseSymbolName: "0x",
						quoteSymbol: "USD",
						largeSize: 3e4,
						route: "/trade/ZRX-USD",
						websiteLink: "https://0x.org/",
						whitepaperLink: "https://0x.org/pdfs/0x_white_paper.pdf",
						primaryDescriptionKey: o.a["0X_PRIMARY_DESCRIPTION"],
						secondaryDescriptionKey: o.a["0X_SECONDARY_DESCRIPTION"],
						chartInfo: {
							tradingViewName: "ZRX-USD",
							tradingViewSymbol: "ZRX-USD",
							supportedResolutions: i.c,
							priceScale: 1e3
						}
					}
				};
			c.a.newmarkets;
			const u = E,
				d = l,
				_ = [l.ADA_USD, l.ALGO_USD, l.ATOM_USD, l.AVAX_USD, l.BCH_USD, l.BTC_USD, l.CELO_USD, l.DOGE_USD, l.DOT_USD, l.EOS_USD, l.ETC_USD, l.ETH_USD, l.FIL_USD, l.ICP_USD, l.LTC_USD, l.LUNA_USD, l.NEAR_USD, l.SOL_USD, l.RUNE_USD, l.XLM_USD, l.XMR_USD, l.ZEC_USD],
				O = [l.AAVE_USD, l.COMP_USD, l.CRV_USD, l.LINK_USD, l.MKR_USD, l.SNX_USD, l.SUSHI_USD, l.UMA_USD, l.UNI_USD, l.YFI_USD, l.ZRX_USD, l["1INCH_USD"]],
				T = {
					ALL: "ALL",
					LAYER_1: "LAYER_1",
					DEFI: "DEFI"
				},
				I = {
					[T.ALL]: o.a.ALL,
					[T.LAYER_1]: o.a.LAYER_1,
					[T.DEFI]: o.a.DEFI
				},
				S = {
					[T.ALL]: Object.values(d),
					[T.LAYER_1]: _,
					[T.DEFI]: O
				}
		},
		936: function(t, r, a) {
			t.exports = a(1711)
		},
		96: function(t, r, a) {
			"use strict";
			a.d(r, "a", (function() {
				return R
			})), a.d(r, "b", (function() {
				return toasts_CompetitionPrizesToast
			})), a.d(r, "c", (function() {
				return m
			})), a.d(r, "d", (function() {
				return h
			})), a.d(r, "e", (function() {
				return L
			})), a.d(r, "f", (function() {
				return toasts_EpochEndToast
			})), a.d(r, "g", (function() {
				return g
			})), a.d(r, "h", (function() {
				return P
			})), a.d(r, "i", (function() {
				return toasts_FlaggedAccountToast
			})), a.d(r, "j", (function() {
				return v
			})), a.d(r, "k", (function() {
				return toasts_SelfServiceAffiliateApplicationToast
			})), a.d(r, "l", (function() {
				return w
			})), a.d(r, "m", (function() {
				return M
			})), a.d(r, "n", (function() {
				return survey_toast
			})), a.d(r, "o", (function() {
				return toasts_TimestampErrorToast
			})), a.d(r, "p", (function() {
				return TradeActivityToast
			})), a.d(r, "q", (function() {
				return V.a
			}));
			var o = a(91),
				i = a.n(o),
				c = a(0),
				l = a.n(c),
				E = a(69),
				u = a(56);
			var d = a(1),
				_ = a.n(d),
				O = a(15),
				T = "_1KzHhACY_g76sbKO4-bzH-",
				I = "StcUaIkqNYxh-jQvOTTME",
				S = "_2wxbkBN6212kmuXClrYiPx",
				p = "_1k_LOxI_a1RcwjWcCeN-pt";
			const AlertToast = ({
				autoClose: t,
				closeToast: r,
				title: a,
				body: o,
				cta: i,
				onClick: c
			}) => l.a.createElement(u.a, {
				isClickable: !0,
				autoClose: t,
				closeToast: r
			}, l.a.createElement("div", {
				className: T,
				role: "button",
				tabIndex: 0,
				onClick: c
			}, l.a.createElement("div", {
				className: S
			}, l.a.createElement(O.Bb, null), a), l.a.createElement("div", {
				className: p
			}, o, i && l.a.createElement("div", {
				className: I
			}, i))));
			AlertToast.propTypes = {
				autoClose: _.a.number,
				closeToast: _.a.func.isRequired,
				title: _.a.string.isRequired,
				body: _.a.string.isRequired,
				cta: _.a.string,
				onClick: _.a.func
			};
			var R = AlertToast;
			var toasts_CompetitionPrizesToast = ({
					autoClose: t,
					closeToast: r,
					notification: a
				}) => l.a.createElement(u.a, {
					isClickable: !0,
					autoClose: t,
					closeToast: r
				}, l.a.createElement(E.b, {
					isToast: !0,
					closeToast: r,
					notification: a
				})),
				A = a(206),
				b = a.n(A),
				N = a(14),
				C = a(150),
				y = a(34);
			const DepositPendingToast = ({
				closeToast: t,
				currentNotifications: r,
				transactionHash: a
			}) => {
				const o = b()(r, ({
					id: t,
					type: r
				}) => r === y.b.DEPOSIT_PENDING && t.toLowerCase() === a.toLowerCase());
				return o ? l.a.createElement(u.a, {
					isClickable: !0,
					closeToast: t
				}, l.a.createElement(E.c, {
					isToast: !0,
					notification: o
				})) : null
			};
			DepositPendingToast.propTypes = {
				closeToast: _.a.func.isRequired,
				currentNotifications: _.a.array.isRequired,
				transactionHash: _.a.string.isRequired
			};
			const D = Object(N.c)(t => ({
					currentNotifications: Object(C.a)(t)
				}))(DepositPendingToast),
				DepositPendingToastWrapper = ({
					closeToast: t,
					transactionHash: r
				}) => l.a.createElement(D, {
					closeToast: t,
					transactionHash: r
				});
			DepositPendingToastWrapper.propTypes = {
				closeToast: _.a.func.isRequired,
				transactionHash: _.a.string.isRequired
			};
			var m = DepositPendingToastWrapper;
			const DepositSuccessToast = ({
				autoClose: t,
				closeToast: r,
				notification: a
			}) => l.a.createElement(u.a, {
				isClickable: !0,
				autoClose: t,
				closeToast: r
			}, l.a.createElement(E.d, {
				isToast: !0,
				notification: a
			}));
			DepositSuccessToast.propTypes = {
				autoClose: _.a.number,
				closeToast: _.a.func.isRequired,
				notification: _.a.object.isRequired
			};
			var h = DepositSuccessToast;
			const EmailReminderToast = ({
				autoClose: t,
				closeToast: r
			}) => l.a.createElement(u.a, {
				isClickable: !0,
				autoClose: t,
				closeToast: r
			}, l.a.createElement(E.e, {
				isToast: !0,
				closeToast: r
			}));
			EmailReminderToast.propTypes = {
				autoClose: _.a.number,
				closeToast: _.a.func.isRequired
			};
			var L = EmailReminderToast;
			var toasts_EpochEndToast = ({
				autoClose: t,
				closeToast: r,
				notification: a
			}) => l.a.createElement(u.a, {
				isClickable: !0,
				autoClose: t,
				closeToast: r
			}, l.a.createElement(E.f, {
				isToast: !0,
				closeToast: r,
				notification: a
			}));
			const FastWithdrawPendingToast = ({
				autoClose: t,
				closeToast: r,
				notification: a
			}) => l.a.createElement(u.a, {
				isClickable: !0,
				autoClose: t,
				closeToast: r
			}, l.a.createElement(E.g, {
				isToast: !0,
				notification: a
			}));
			FastWithdrawPendingToast.propTypes = {
				autoClose: _.a.number,
				closeToast: _.a.func.isRequired,
				notification: _.a.object.isRequired
			};
			var g = FastWithdrawPendingToast;
			const FastWithdrawSuccessToast = ({
				autoClose: t,
				closeToast: r,
				notification: a
			}) => l.a.createElement(u.a, {
				isClickable: !0,
				autoClose: t,
				closeToast: r
			}, l.a.createElement(E.h, {
				isToast: !0,
				notification: a
			}));
			FastWithdrawSuccessToast.propTypes = {
				autoClose: _.a.number,
				closeToast: _.a.func.isRequired,
				notification: _.a.object.isRequired
			};
			var P = FastWithdrawSuccessToast;
			var toasts_FlaggedAccountToast = ({
				autoClose: t,
				closeToast: r = i.a,
				notification: a
			}) => l.a.createElement(u.a, {
				isClickable: !0,
				autoClose: t,
				closeToast: r
			}, l.a.createElement(E.i, {
				isToast: !0,
				closeToast: r,
				notification: a
			}));
			const OrderUpdateToast = ({
				autoClose: t,
				closeToast: r,
				notification: a
			}) => l.a.createElement(u.a, {
				autoClose: t,
				closeToast: r
			}, l.a.createElement(E.j, {
				isToast: !0,
				notification: a
			}));
			OrderUpdateToast.propTypes = {
				autoClose: _.a.number,
				closeToast: _.a.func.isRequired,
				notification: _.a.object.isRequired
			};
			var v = OrderUpdateToast;
			var toasts_SelfServiceAffiliateApplicationToast = ({
				autoClose: t,
				closeToast: r = (() => i.a),
				notification: a
			}) => l.a.createElement(u.a, {
				isClickable: !0,
				autoClose: t,
				closeToast: r
			}, l.a.createElement(E.k, {
				isToast: !0,
				closeToast: r,
				notification: a
			}));
			const SlowWithdrawAvailableToast = ({
				autoClose: t,
				closeToast: r,
				notification: a
			}) => l.a.createElement(u.a, {
				isClickable: !0,
				autoClose: t,
				closeToast: r
			}, l.a.createElement(E.l, {
				isToast: !0,
				notification: a
			}));
			SlowWithdrawAvailableToast.propTypes = {
				autoClose: _.a.number,
				closeToast: _.a.func.isRequired,
				notification: _.a.object.isRequired
			};
			var w = SlowWithdrawAvailableToast;
			const SlowWithdrawPendingToast = ({
				autoClose: t,
				closeToast: r,
				notification: a
			}) => l.a.createElement(u.a, {
				isClickable: !0,
				autoClose: t,
				closeToast: r
			}, l.a.createElement(E.m, {
				isToast: !0,
				notification: a
			}));
			SlowWithdrawPendingToast.propTypes = {
				autoClose: _.a.number,
				closeToast: _.a.func.isRequired,
				notification: _.a.object.isRequired
			};
			var M = SlowWithdrawPendingToast,
				U = a(30),
				G = a(2),
				j = "_3pQkorsOCQ4vtgJzJbDblZ",
				k = "_3ZYfcbWCYF1svDi1OCPkD8",
				x = "_1dGE1Yt879aBAC68Jn5jnl";
			const SurveyToast = ({
				autoClose: t,
				closeToast: r,
				stringGetter: a
			}) => l.a.createElement(u.a, {
				isClickable: !0,
				autoClose: t,
				closeToast: r
			}, l.a.createElement("div", {
				role: "button",
				tabIndex: 0,
				onClick: () => {
					window.open("https://docs.google.com/forms/d/1oRv6jj6EVG-3x6s_VBZTWysteLQyI-qtqyL1I2aA86Y"), r()
				}
			}, l.a.createElement("div", {
				className: j
			}, "Help provide feedback"), l.a.createElement("div", {
				className: k
			}, "We\u2019re constantly looking for ways to improve your trading experience on dYdX! Please consider taking our 10 minute user survey.", " ", l.a.createElement("span", {
				className: x
			}, a({
				key: G.a.TAKE_ME_THERE
			}), " \u2192"))));
			SurveyToast.propTypes = {
				autoClose: _.a.number,
				closeToast: _.a.func.isRequired,
				stringGetter: _.a.func.isRequired
			};
			const H = Object(U.d)(SurveyToast);
			var survey_toast = t => l.a.createElement(H, t),
				B = a(8),
				W = a(17);
			const Y = {};
			Y.Title = B.c.div`
  ${W.e.size15}
  display: flex;
  align-items: center;
  color: var(--color-text-base);

  @media ${W.a.tablet} {
    ${W.e.size18};
  }
  > svg {
    height: 20px;
    width: 16px;
    margin-right: 8px;
    margin-top: 1px;
    margin-bottom: -1px;

    @media ${W.a.tablet} {
      height: 22px;
      width: 22px;
    }
  }
`, Y.Body = B.c.div`
  ${W.e.size13}
  color: var(--color-text-dark);
  margin-top: 6px;

  @media ${W.a.tablet} {
    ${W.e.size16}
    margin-top: 8px;
  }

  > svg {
    width: 100%;
  }
`;
			const K = Object(U.d)(({
				closeToast: t,
				stringGetter: r
			}) => l.a.createElement(u.a, {
				isClickable: !0,
				closeToast: t
			}, l.a.createElement("div", {
				role: "button",
				tabIndex: 0,
				onClick: () => {
					t()
				}
			}, l.a.createElement(Y.Title, null, l.a.createElement(O.y, null), r({
				key: G.a.TIMESTAMP_ERROR
			})), l.a.createElement(Y.Body, null, r({
				key: G.a.TIMESTAMP_DISCREPANCY
			})))));
			var toasts_TimestampErrorToast = t => l.a.createElement(K, t);
			var TradeActivityToast = ({
					autoClose: t,
					closeToast: r = i.a,
					notification: a
				}) => l.a.createElement(u.a, {
					isClickable: !0,
					autoClose: t,
					closeToast: r
				}, l.a.createElement(E.n, {
					isToast: !0,
					closeToast: r,
					notification: a
				})),
				V = a(601)
		}
	},
	[
		[936, 52, 53]
	]
]);
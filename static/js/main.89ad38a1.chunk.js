(this.webpackJsonpwelptv = this.webpackJsonpwelptv || []).push([
    [0], {
        24: function(e, t, r) {},
        25: function(e, t, r) {},
        28: function(e, t, r) {},
        29: function(e, t, r) {},
        35: function(e, t, r) {},
        36: function(e, t, r) {},
        37: function(e, t, r) {},
        38: function(e, t, r) {},
        39: function(e, t, r) {},
        40: function(e, t, r) {},
        41: function(e, t, r) {},
        42: function(e, t, r) {},
        43: function(e, t, r) {},
        44: function(e, t, r) {},
        45: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(1),
                i = r.n(n),
                s = r(17),
                a = r.n(s),
                c = (r(24), r(25), r(9)),
                l = r(2),
                o = r(8),
                u = r.n(o),
                d = r(12),
                f = r(7),
                j = Object(n.createContext)();
            var p = function() {
                    var e = Object(n.useState)([]),
                        t = Object(f.a)(e, 2),
                        r = t[0],
                        i = t[1],
                        s = Object(n.useState)([]),
                        a = Object(f.a)(s, 2),
                        c = a[0],
                        l = a[1],
                        o = Object(n.useState)([]),
                        u = Object(f.a)(o, 2),
                        d = u[0],
                        j = u[1];
                    return Object(n.useEffect)((function() {
                        l(function() {
                            var e = JSON.parse(localStorage.getItem("recently"));
                            return e || (e = []), e
                        }()), j(function() {
                            var e = JSON.parse(localStorage.getItem("watchlist"));
                            return e || (e = []), e
                        }())
                    }), []), {
                        getEpisodes: r,
                        setEpisode: function(e, t) {
                            var r = JSON.parse(localStorage.getItem(e));
                            r || (r = []), (r = r.filter((function(e) {
                                return e.url !== t.url
                            }))).unshift(t), localStorage.setItem(e, JSON.stringify(r)), i(r)
                        },
                        getRecents: c,
                        setRecent: function(e) {
                            var t = JSON.parse(localStorage.getItem("recently"));
                            t = t ? t.filter((function(t) {
                                return t.url !== e.url
                            })) : [];
                            var r, n, i = function(e) {
                                var t = JSON.parse(localStorage.getItem(e));
                                return t || (t = []), t
                            }(e.name);
                            e.progress = (r = e.episodes, (n = i[0]) ? r.findIndex((function(e) {
                                return e.url === n.url
                            })) + 1 : 1), t.unshift(e), t.length > 12 && (t = t.slice(0, 12)), localStorage.setItem("recently", JSON.stringify(t)), l(t)
                        },
                        getWatchlist: d,
                        setWatchlist: function(e) {
                            var t = JSON.parse(localStorage.getItem("watchlist"));
                            if (t || (t = []), t.find((function(t) {
                                    return t.url === e.url
                                }))) {
                                var r = t.findIndex((function(t) {
                                    return t.url === e.url
                                }));
                                t.splice(r, 1)
                            } else t.unshift(e);
                            localStorage.setItem("watchlist", JSON.stringify(t)), j(t)
                        }
                    }
                },
                v = r(0);

            function h() {
                return (h = Object(d.a)(u.a.mark((function e() {
                    return u.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return "https://api.allorigins.win/get?url=", "https://api.allorigins.win/get?url=https://www.animekisa.cc/home", e.abrupt("return", fetch("https://api.allorigins.win/get?url=https://www.animekisa.cc/home").then((function(e) {
                                    if (e.ok) return e.text()
                                })).then((function(e) {
                                    for (var t = [], r = (new DOMParser).parseFromString(C(e), "text/html").querySelector("div.main-container div.maindark div.mwb-2col div.mwb-left div.episode"), n = 0; n < r.children.length; n++) {
                                        var i = (new DOMParser).parseFromString(r.children[n].outerHTML, "text/html"),
                                            s = i.querySelector("div.epi-img img").getAttribute("src"),
                                            a = i.querySelector("div.epi-inf div.epi-tit").innerHTML,
                                            c = i.querySelector("a").getAttribute("href").replace("/category/", ""),
                                            l = i.querySelector("div.epi-inf div.epi-no").innerHTML.trim();
                                        t[n] = {
                                            image: s,
                                            name: a,
                                            url: c,
                                            extra: l
                                        }
                                    }
                                    return t
                                })));
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function m() {
                return (m = Object(d.a)(u.a.mark((function e(t) {
                    var r;
                    return u.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return "https://api.allorigins.win/get?url=", r = "https://api.allorigins.win/get?url=https://www.animekisa.cc/search?name=" + t, e.abrupt("return", fetch(r).then((function(e) {
                                    if (e.ok) return e.text()
                                })).then((function(e) {
                                    for (var t = [], r = (new DOMParser).parseFromString(C(e), "text/html").querySelector("div.main-container div.maindark div.zr-list ul"), n = 0; n < r.children.length; n++) {
                                        var i = (new DOMParser).parseFromString(r.children[n].innerHTML, "text/html"),
                                            s = i.querySelector("a div img").getAttribute("src"),
                                            a = i.querySelector("a div span.result-title").innerHTML,
                                            c = i.querySelector("a.asfo").getAttribute("href").replace("/category/", ""),
                                            l = i.querySelector("a div span.result-latest").innerHTML.trim();
                                        t[n] = {
                                            image: s,
                                            name: a,
                                            url: c,
                                            extra: l
                                        }
                                    }
                                    return t
                                })));
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function b() {
                return (b = Object(d.a)(u.a.mark((function e(t) {
                    var r;
                    return u.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return "https://api.allorigins.win/get?url=", r = "https://api.allorigins.win/get?url=" + t, e.abrupt("return", fetch(r).then((function(e) {
                                    if (e.ok) return e.text()
                                })).then((function(e) {
                                    for (var r = (new DOMParser).parseFromString(C(e), "text/html"), n = r.querySelector("div.main-container div.maindark div.mwb-left div.anime-group div.infoboxc div.infopicbox img.posteri"), i = r.querySelector("div.main-container div.maindark div.mwb-left div.anime-group div.infoboxc div.infodesbox h1.infodes"), s = r.querySelector("div.main-container div.maindark div.mwb-left div.anime-group div.infoboxc div.infodesbox div.infodes2"), a = r.querySelectorAll("div.main-container div.maindark div.mwb-left div.anime-group div.infoboxc div.infodesbox div.infodes2 div.textc"), c = a[0], l = a[1], o = r.querySelector("div.main-container div.maindark div.mwb-left div.anime-group div.infoepboxmain div.infoepbox"), u = n.getAttribute("src"), d = i.innerHTML, f = s.innerHTML, j = [], p = l.innerHTML, v = [], h = 0; h < c.children.length; h++) {
                                        var m = (new DOMParser).parseFromString(c.children[h].innerHTML, "text/html").querySelector("span.as").textContent;
                                        j[h] = m
                                    }
                                    for (var b = 0; b < o.children.length; b++) {
                                        var O = (new DOMParser).parseFromString(o.children[b].outerHTML, "text/html"),
                                            g = O.querySelector("a.infovan").getAttribute("href"),
                                            x = O.querySelector("a div.infoept2 div.centerv").textContent,
                                            w = O.querySelector("a div.infoept3 div.centerv").textContent;
                                        v[b] = {
                                            url: g,
                                            number: x,
                                            aired: w
                                        }
                                    }
                                    return {
                                        url: t,
                                        image: u,
                                        name: d,
                                        description: f,
                                        genres: j,
                                        status: p,
                                        episodes: v.reverse()
                                    }
                                })));
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function O() {
                return (O = Object(d.a)(u.a.mark((function e(t) {
                    var r;
                    return u.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return "https://api.allorigins.win/get?url=", r = "https://api.allorigins.win/get?url=" + t, e.abrupt("return", fetch(r).then((function(e) {
                                    if (e.ok) return e.text()
                                })).then((function(e) {
                                    var r = (new DOMParser).parseFromString(C(e), "text/html").querySelector("div.main-container div.maindark div#my-video1 iframe#iframe-to-load").getAttribute("src");
                                    return {
                                        url: t,
                                        videoUrl: r
                                    }
                                })));
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function C(e) {
                return e.replaceAll("&amp;", "&").replaceAll('\\"', "").replaceAll("&apos;", "'").replaceAll("&gt;", ">").replaceAll("&lt;", "<")
            }
            var g = function(e) {
                var t = p(),
                    r = function() {
                        var e = Object(n.useState)(),
                            t = Object(f.a)(e, 2),
                            r = t[0],
                            i = t[1],
                            s = Object(n.useState)(),
                            a = Object(f.a)(s, 2),
                            c = a[0],
                            l = a[1],
                            o = Object(n.useState)(),
                            u = Object(f.a)(o, 2),
                            d = u[0],
                            j = u[1],
                            p = Object(n.useState)(),
                            v = Object(f.a)(p, 2);
                        return {
                            latest: r,
                            setLatest: i,
                            series: c,
                            setSeries: l,
                            episode: d,
                            setEpisode: j,
                            searchResults: v[0],
                            setSearchResults: v[1]
                        }
                    }(),
                    i = function(e, n) {
                        var i;
                        (null === (i = r.episode) || void 0 === i ? void 0 : i.url) !== n && (r.setEpisode(null), function(e) {
                            return O.apply(this, arguments)
                        }(n).then((function(n) {
                            t.setEpisode(e, n), r.setEpisode(n)
                        })))
                    },
                    s = function() {
                        (function() {
                            return h.apply(this, arguments)
                        })().then((function(e) {
                            r.setLatest(e)
                        }))
                    },
                    a = function(e) {
                        r.setSearchResults(null),
                            function(e) {
                                return m.apply(this, arguments)
                            }(e).then((function(e) {
                                r.setSearchResults(e)
                            }))
                    },
                    c = {
                        values: r,
                        scrapeLatest: s,
                        scrapeSearch: a,
                        scrapeSeries: function(e) {
                            var n;
                            (null === (n = r.series) || void 0 === n ? void 0 : n.url) !== e && (r.setEpisode(null), function(e) {
                                return b.apply(this, arguments)
                            }(e).then((function(e) {
                                t.setRecent(e), i(e.name, e.episodes[0].url), r.setSeries(e)
                            })))
                        },
                        scrapeEpisode: i
                    };
                return Object(n.useEffect)((function() {
                    s(), a("death")
                }), []), Object(v.jsx)(j.Provider, {
                    value: c,
                    children: e.children
                })
            };
            r(28);
            var x, w = function() {
                    var e = Object(n.useRef)();
                    return Object(n.useEffect)((function() {
                        return window.addEventListener("resize", (function() {
                                e && e.current && (e.current.style.width = window.innerWidth + "px", e.current.style.height = window.innerHeight + "px")
                            })),
                            function() {
                                window.removeEventListener("resize", (function() {}))
                            }
                    }), []), Object(n.useEffect)((function() {
                        e && (e.current.style.width = window.innerWidth + "px", e.current.style.height = window.innerHeight + "px")
                    }), [e]), {
                        ref: e
                    }
                },
                y = (r(29), ["title", "titleId"]);

            function S() {
                return S = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, S.apply(this, arguments)
            }

            function N(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }

            function L(e, t) {
                var r = e.title,
                    i = e.titleId,
                    s = N(e, y);
                return n.createElement("svg", S({
                    viewBox: "0 0 300 300",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": i
                }, s), r ? n.createElement("title", {
                    id: i
                }, r) : null, x || (x = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M133.724 34.9899C138.256 31.1033 144.029 28.9668 149.999 28.9668C155.97 28.9668 161.743 31.1033 166.274 34.9899L245.474 102.865L276.562 127.74C277.844 128.766 278.911 130.034 279.703 131.473C280.495 132.911 280.996 134.492 281.177 136.124C281.358 137.756 281.216 139.407 280.759 140.984C280.301 142.561 279.538 144.033 278.512 145.315C277.486 146.597 276.218 147.664 274.779 148.456C273.341 149.248 271.76 149.749 270.128 149.93C268.496 150.111 266.845 149.969 265.268 149.511C263.691 149.054 262.219 148.291 260.937 147.265L249.999 138.515V237.502C249.999 244.133 247.366 250.492 242.677 255.18C237.989 259.868 231.63 262.502 224.999 262.502H174.999V200.002C174.999 193.372 172.366 187.013 167.677 182.325C162.989 177.636 156.63 175.002 149.999 175.002C143.369 175.002 137.01 177.636 132.322 182.325C127.633 187.013 124.999 193.372 124.999 200.002V262.502H74.9994C68.369 262.502 62.0102 259.868 57.3218 255.18C52.6333 250.492 49.9994 244.133 49.9994 237.502V138.502L39.0619 147.252C37.7886 148.34 36.3098 149.16 34.7133 149.665C33.1169 150.17 31.4353 150.349 29.7683 150.191C28.1014 150.033 26.4831 149.542 25.0095 148.747C23.5359 147.952 22.2371 146.869 21.1901 145.563C20.1431 144.256 19.3693 142.752 18.9146 141.141C18.4599 139.53 18.3336 137.843 18.5431 136.182C18.7527 134.521 19.2939 132.919 20.1345 131.47C20.9752 130.022 22.0982 128.758 23.4369 127.752L54.5244 102.877L133.724 34.9899Z"
                })))
            }
            var E, k = n.forwardRef(L),
                R = (r.p, ["title", "titleId"]);

            function I() {
                return I = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, I.apply(this, arguments)
            }

            function M(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }

            function P(e, t) {
                var r = e.title,
                    i = e.titleId,
                    s = M(e, R);
                return n.createElement("svg", I({
                    viewBox: "0 0 300 300",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": i
                }, s), r ? n.createElement("title", {
                    id: i
                }, r) : null, E || (E = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M25 137.5C25.0019 119.529 29.3088 101.821 37.5599 85.8568C45.8111 69.8928 57.7665 56.1376 72.4253 45.7429C87.0841 35.3481 104.02 28.6161 121.814 26.1106C139.609 23.6051 157.745 25.3988 174.705 31.3417C191.664 37.2846 206.952 47.2037 219.291 60.2687C231.629 73.3337 240.659 89.1643 245.623 106.435C250.587 123.707 251.341 141.915 247.823 159.538C244.304 177.16 236.616 193.684 225.4 207.725L271.338 253.662C273.614 256.02 274.874 259.177 274.846 262.455C274.817 265.732 273.503 268.867 271.185 271.185C268.868 273.502 265.732 274.817 262.455 274.845C259.178 274.874 256.02 273.614 253.662 271.337L207.725 225.4C191.173 238.624 171.224 246.907 150.172 249.293C129.121 251.68 107.823 248.073 88.7312 238.889C69.6391 229.705 53.5285 215.316 42.2537 197.379C30.9789 179.442 24.9982 158.686 25 137.5ZM112.5 74.9996C115.815 74.9996 118.995 76.3165 121.339 78.6607C123.683 81.0049 125 84.1843 125 87.4996C125 90.8148 123.683 93.9942 121.339 96.3384C118.995 98.6826 115.815 99.9995 112.5 99.9995C109.185 99.9995 106.005 101.317 103.661 103.661C101.317 106.005 100 109.184 100 112.5C100 115.815 98.683 118.994 96.3388 121.338C93.9946 123.683 90.8152 125 87.5 125C84.1848 125 81.0054 123.683 78.6612 121.338C76.317 118.994 75 115.815 75 112.5C75 102.554 78.9509 93.0157 85.9835 85.9831C93.0161 78.9504 102.554 74.9996 112.5 74.9996Z"
                })))
            }
            var T, H = n.forwardRef(P),
                q = (r.p, ["title", "titleId"]);

            function W() {
                return W = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, W.apply(this, arguments)
            }

            function A(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }

            function D(e, t) {
                var r = e.title,
                    i = e.titleId,
                    s = A(e, q);
                return n.createElement("svg", W({
                    viewBox: "0 0 300 300",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": i
                }, s), r ? n.createElement("title", {
                    id: i
                }, r) : null, T || (T = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M150 62.5C140.226 62.4969 130.666 65.3585 122.501 70.731C114.336 76.1035 107.924 83.7512 104.059 92.7285C100.195 101.706 99.0456 111.619 100.755 121.242C102.463 130.866 106.955 139.777 113.675 146.875C99.7023 154.602 88.5613 166.588 81.8747 181.088C75.1881 195.588 73.3052 211.843 76.5001 227.487C77.0739 230.313 78.6069 232.854 80.8394 234.678C83.072 236.503 85.8667 237.5 88.7501 237.5H211.25C214.133 237.5 216.928 236.503 219.161 234.678C221.393 232.854 222.926 230.313 223.5 227.487C226.698 211.841 224.816 195.583 218.13 181.081C211.443 166.579 200.3 154.59 186.325 146.862C193.041 139.764 197.529 130.854 199.236 121.233C200.942 111.611 199.792 101.701 195.928 92.726C192.063 83.7512 185.654 76.1054 177.491 70.7335C169.329 65.3617 159.772 62.4992 150 62.5ZM207.3 134.738C210.625 128.038 212.5 120.487 212.5 112.5C212.5 104.513 210.625 96.9625 207.3 90.2625C210.238 86.3097 213.925 82.9742 218.151 80.4464C222.378 77.9187 227.061 76.2482 231.933 75.5302C236.805 74.8123 241.771 75.0611 246.547 76.2623C251.323 77.4636 255.816 79.5937 259.769 82.5313C263.722 85.4688 267.057 89.1561 269.585 93.3826C272.113 97.6092 273.783 102.292 274.501 107.164C275.219 112.037 274.97 117.002 273.769 121.779C272.568 126.555 270.438 131.047 267.5 135C273.71 139.657 278.75 145.697 282.221 152.639C285.693 159.582 287.5 167.238 287.5 175V187.5C287.5 190.815 286.183 193.995 283.839 196.339C281.495 198.683 278.315 200 275 200H236.463C234.578 188.886 230.215 178.34 223.697 169.143C217.179 159.947 208.674 152.336 198.813 146.875C202.05 143.455 204.789 139.597 206.95 135.413C207.132 135.274 207.316 135.136 207.5 135L207.3 134.738ZM101.175 146.862C97.943 143.446 95.2078 139.591 93.0501 135.413C92.8677 135.274 92.6844 135.136 92.5001 135L92.7001 134.738C89.2676 127.828 87.4874 120.215 87.5001 112.5C87.5001 104.513 89.3751 96.9625 92.7001 90.2625C89.7626 86.3097 86.0753 82.9742 81.8487 80.4464C77.6221 77.9187 72.9391 76.2482 68.0669 75.5302C63.1947 74.8123 58.2288 75.0611 53.4528 76.2623C48.6768 77.4636 44.1841 79.5937 40.2313 82.5313C36.2785 85.4688 32.943 89.1561 30.4153 93.3826C27.8875 97.6092 26.217 102.292 25.4991 107.164C24.7811 112.037 25.0299 117.002 26.2311 121.779C27.4324 126.555 29.5626 131.047 32.5001 135C23.9684 141.381 17.7016 150.323 14.616 160.521C11.5303 170.718 11.7875 181.635 15.3501 191.675C16.2125 194.109 17.8076 196.216 19.916 197.707C22.0245 199.197 24.5429 199.999 27.1251 200H63.5251C65.4085 188.888 69.7698 178.342 76.2854 169.145C82.8009 159.949 91.3036 152.337 101.163 146.875L101.175 146.862Z"
                })))
            }
            var B, F = n.forwardRef(D),
                V = (r.p, ["title", "titleId"]);

            function Z() {
                return Z = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, Z.apply(this, arguments)
            }

            function J(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }

            function X(e, t) {
                var r = e.title,
                    i = e.titleId,
                    s = J(e, V);
                return n.createElement("svg", Z({
                    viewBox: "0 0 300 300",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": i
                }, s), r ? n.createElement("title", {
                    id: i
                }, r) : null, B || (B = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M87.5 25C77.5544 25 68.0161 28.9509 60.9835 35.9835C53.9509 43.0161 50 52.5544 50 62.5V251.725C49.9989 255.01 50.8606 258.237 52.4988 261.084C54.1371 263.93 56.4944 266.297 59.3348 267.946C62.1752 269.595 65.399 270.47 68.6835 270.481C71.968 270.493 75.198 269.642 78.05 268.012L143.8 230.438C145.688 229.359 147.825 228.792 150 228.792C152.175 228.792 154.312 229.359 156.2 230.438L221.95 268.012C224.802 269.642 228.032 270.493 231.316 270.481C234.601 270.47 237.825 269.595 240.665 267.946C243.506 266.297 245.863 263.93 247.501 261.084C249.139 258.237 250.001 255.01 250 251.725V62.5C250 52.5544 246.049 43.0161 239.017 35.9835C231.984 28.9509 222.446 25 212.5 25H87.5Z"
                })))
            }
            var Y, G = n.forwardRef(X),
                U = (r.p, ["title", "titleId"]);

            function z() {
                return z = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, z.apply(this, arguments)
            }

            function $(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }

            function _(e, t) {
                var r = e.title,
                    i = e.titleId,
                    s = $(e, U);
                return n.createElement("svg", z({
                    viewBox: "0 0 300 300",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": i
                }, s), r ? n.createElement("title", {
                    id: i
                }, r) : null, Y || (Y = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M137.5 25C130.87 25 124.511 27.6339 119.822 32.3223C115.134 37.0107 112.5 43.3696 112.5 50V59.4625L103.663 68.3L112.5 59.4625L105.8 52.775C101.112 48.0882 94.7541 45.4553 88.125 45.4553C81.4959 45.4553 75.1382 48.0882 70.45 52.775L52.775 70.45C48.0882 75.1382 45.4553 81.4959 45.4553 88.125C45.4553 94.7541 48.0882 101.112 52.775 105.8L59.4625 112.5H50C43.3696 112.5 37.0107 115.134 32.3223 119.822C27.6339 124.511 25 130.87 25 137.5V162.5C25 169.13 27.6339 175.489 32.3223 180.178C37.0107 184.866 43.3696 187.5 50 187.5H59.4625L52.775 194.2C48.0882 198.888 45.4553 205.246 45.4553 211.875C45.4553 218.504 48.0882 224.862 52.775 229.55L70.45 247.225C75.1382 251.912 81.4959 254.545 88.125 254.545C94.7541 254.545 101.112 251.912 105.8 247.225L96.9625 238.387L105.8 247.225L112.5 240.538V250C112.5 256.63 115.134 262.989 119.822 267.678C124.511 272.366 130.87 275 137.5 275H162.5C169.13 275 175.489 272.366 180.178 267.678C184.866 262.989 187.5 256.63 187.5 250V240.538L194.2 247.225C198.888 251.912 205.246 254.545 211.875 254.545C218.504 254.545 224.862 251.912 229.55 247.225L247.225 229.55C249.548 227.228 251.39 224.472 252.647 221.438C253.904 218.404 254.551 215.153 254.551 211.869C254.551 208.585 253.904 205.333 252.647 202.299C251.39 199.266 249.548 196.509 247.225 194.188L240.538 187.5H250C256.63 187.5 262.989 184.866 267.678 180.178C272.366 175.489 275 169.13 275 162.5V137.5C275 130.87 272.366 124.511 267.678 119.822C262.989 115.134 256.63 112.5 250 112.5H240.538L247.225 105.8C251.912 101.112 254.545 94.7541 254.545 88.125C254.545 81.4959 251.912 75.1382 247.225 70.45L229.55 52.775C224.862 48.0882 218.504 45.4553 211.875 45.4553C205.246 45.4553 198.888 48.0882 194.2 52.775L187.5 59.4625V50C187.5 43.3696 184.866 37.0107 180.178 32.3223C175.489 27.6339 169.13 25 162.5 25H137.5ZM200 150C200 163.261 194.732 175.979 185.355 185.355C175.979 194.732 163.261 200 150 200C136.739 200 124.021 194.732 114.645 185.355C105.268 175.979 100 163.261 100 150C100 136.739 105.268 124.021 114.645 114.645C124.021 105.268 136.739 100 150 100C163.261 100 175.979 105.268 185.355 114.645C194.732 124.021 200 136.739 200 150ZM150 175C156.63 175 162.989 172.366 167.678 167.678C172.366 162.989 175 156.63 175 150C175 143.37 172.366 137.011 167.678 132.322C162.989 127.634 156.63 125 150 125C143.37 125 137.011 127.634 132.322 132.322C127.634 137.011 125 143.37 125 150C125 156.63 127.634 162.989 132.322 167.678C137.011 172.366 143.37 175 150 175Z"
                })))
            }
            var K = n.forwardRef(_),
                Q = (r.p, [{
                    name: "Home",
                    path: "/",
                    icon: Object(v.jsx)(k, {})
                }, {
                    name: "Search",
                    path: "/search",
                    icon: Object(v.jsx)(H, {})
                }, {
                    name: "Live",
                    path: "/live",
                    icon: Object(v.jsx)(F, {})
                }, {
                    name: "Watchlist",
                    path: "/watchlist",
                    icon: Object(v.jsx)(G, {})
                }, {
                    name: "Settings",
                    path: "/settings",
                    icon: Object(v.jsx)(K, {})
                }]),
                ee = function() {
                    return Object(v.jsxs)("div", {
                        className: "navbar",
                        children: [Object(v.jsx)("div", {
                            className: "logo",
                            children: Object(v.jsx)("a", {
                                href: "/",
                                children: Object(v.jsx)("img", {
                                    src: "https://cdn-icons-png.flaticon.com/512/786/786954.png",
                                    alt: "logo",
                                    width: "90px"
                                })
                            })
                        }), Q.map((function(e) {
                            return Object(v.jsx)(c.b, {
                                className: "nav-item",
                                activeClassName: "is-active",
                                to: e.path,
                                children: e.icon
                            }, e.name)
                        }))]
                    })
                },
                te = (r(35), function(e) {
                    var t = Object(n.useRef)();
                    return Object(n.useEffect)((function() {
                        if (t && (null === t || void 0 === t ? void 0 : t.current)) {
                            var e = t.current.getBoundingClientRect().width;
                            t.current.firstElementChild.style.height = e / .75 + "px"
                        }
                    }), [t]), e.data ? "thumbnail" === e.type ? Object(v.jsx)("div", {
                        onClick: e.onClick,
                        className: "thumbnail",
                        style: {
                            backgroundImage: e.data.image
                        },
                        children: Object(v.jsxs)("div", {
                            className: "thumbnailOverlay",
                            style: {
                                backgroundColor: e.data.color
                            },
                            children: [Object(v.jsx)("h1", {
                                className: "thumbnailTitle",
                                children: "THE TOP 10"
                            }), Object(v.jsx)("h1", {
                                className: "cardSubTitle",
                                children: e.data.title
                            })]
                        })
                    }) : "poster" === e.type ? Object(v.jsxs)("div", {
                        ref: t,
                        className: "poster",
                        onClick: e.onClick,
                        children: [Object(v.jsx)("img", {
                            className: "posterImage",
                            src: e.data.image,
                            alt: e.data.name
                        }), Object(v.jsx)("h1", {
                            className: "cardTitle",
                            children: e.data.name
                        }), Object(v.jsx)("h1", {
                            className: "cardSubTitle",
                            children: e.data.extra
                        })]
                    }) : Object(v.jsxs)("div", {
                        className: "ticket",
                        onClick: e.onClick,
                        children: [Object(v.jsx)("img", {
                            className: "ticketImage",
                            src: e.data.image,
                            alt: e.data.name
                        }), Object(v.jsxs)("div", {
                            className: "ticketDetails",
                            children: [Object(v.jsx)("h1", {
                                className: "cardTitle",
                                children: e.data.name
                            }), Object(v.jsx)("h1", {
                                className: "cardSubTitle",
                                children: "Episode " + e.data.progress
                            })]
                        })]
                    }) : Object(v.jsx)("div", {})
                }),
                re = (r(36), function() {
                    return Object(v.jsx)("div", {
                        className: "loadingContainer",
                        children: Object(v.jsx)("div", {
                            className: "dualRing"
                        })
                    })
                }),
                ne = (r(37), function(e) {
                    return Object(v.jsxs)("div", {
                        style: {
                            margin: e.margin ? e.margin : "0"
                        },
                        className: "infoCard",
                        children: [Object(v.jsx)("h2", {
                            children: "Welcome To Weeb.Eu.org"
                        }), Object(v.jsx)("p", {
                            children: "Watch 1000+ Anime Show For Free On Weeb.eu.org"
                        })]
                    })
                }),
                ie = (r(38), function(e) {
                    return Object(v.jsxs)("div", {
                        className: "headingContainer",
                        style: {
                            margin: e.margin
                        },
                        children: [Object(v.jsx)("h1", {
                            className: "headingTitle",
                            children: e.title
                        }), Object(v.jsx)("div", {
                            className: "headingContent",
                            style: {
                                padding: e.padding ? e.padding : "1.5rem 2rem"
                            },
                            children: e.children
                        })]
                    })
                });

            function se(e) {
                var t = e.list,
                    r = e.scrapeSeries,
                    n = Object(l.f)();
                return t ? Object(v.jsx)(ie, {
                    title: "Recently Updated",
                    margin: "0rem 0rem 3rem 0rem",
                    padding: "0",
                    children: Object(v.jsx)("div", {
                        className: "homeSeriesGrid",
                        children: null === t || void 0 === t ? void 0 : t.map((function(e) {
                            return Object(v.jsx)(te, {
                                type: "poster",
                                data: e,
                                onClick: function() {
                                    ! function(e) {
                                        var t = "https://www.animekisa.cc/anime/" + ce(e.name).toLowerCase();
                                        r(t), n.push("/series")
                                    }(e)
                                }
                            }, e.url)
                        }))
                    })
                }) : Object(v.jsx)(re, {})
            }

            function ae(e) {
                var t = e.list,
                    r = e.scrapeSeries,
                    n = Object(l.f)();
                return t ? 0 === t.length ? Object(v.jsx)("div", {}) : Object(v.jsx)(ie, {
                    title: "Recently Viewed",
                    margin: "0rem 0rem 3rem 0rem",
                    padding: "0",
                    children: Object(v.jsx)("div", {
                        className: "historyGrid",
                        children: null === t || void 0 === t ? void 0 : t.map((function(e) {
                            return Object(v.jsx)(te, {
                                type: "ticket",
                                data: e,
                                onClick: function() {
                                    ! function(e) {
                                        var t = "https://www.animekisa.cc/anime/" + ce(e.name).toLowerCase();
                                        r(t), n.push("/series")
                                    }(e)
                                }
                            }, e.url)
                        }))
                    })
                }) : Object(v.jsx)(re, {})
            }

            function ce(e) {
                for (var t = ["\u2606", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", " - ", " -", "- ", "+", "=", "[", "]", "{", "}", '"', ":", ";", ",", ".", "/", "?", ">", "<", "'", "|"], r = e.toString(), n = 0; n < t.length; n++) r = r.replaceAll(t[n], "");
                return r = r.replaceAll(" ", "-")
            }
            var le = function() {
                    var e = p(),
                        t = w(),
                        r = "Welcome to Weeb.eu.org",
                        n = "Watch 1000+ Anime Show For Free On Weeb.eu.org";
                    return Object(v.jsx)(j.Consumer, {
                        children: function(i) {
                            var s;
                            return Object(v.jsxs)("div", {
                                ref: t.ref,
                                className: "home",
                                children: [Object(v.jsx)("div", {
                                    className: "homeNavContainer",
                                    children: Object(v.jsx)(ee, {})
                                }), Object(v.jsxs)("div", {
                                    className: "homeMain",
                                    children: [Object(v.jsx)(ne, {
                                        title: r,
                                        desc: n,
                                        btnText: "",
                                        margin: "0rem 0rem 1rem 0rem",
                                        onClick: function() {}
                                    }), Object(v.jsx)(ae, {
                                        list: e.getRecents,
                                        scrapeSeries: i.scrapeSeries
                                    }), Object(v.jsx)(se, {
                                        list: null === (s = i.values) || void 0 === s ? void 0 : s.latest,
                                        scrapeSeries: i.scrapeSeries
                                    })]
                                })]
                            })
                        }
                    })
                },
                oe = (r(39), r(40), function(e) {
                    return Object(v.jsxs)("form", {
                        className: "searchBox",
                        autoComplete: "off",
                        onSubmit: function(t) {
                            if (t) {
                                t.preventDefault();
                                var r = t.target.elements.searchTxt.value;
                                "" !== r && e.onSubmitted(r)
                            }
                        },
                        style: {
                            margin: e.margin
                        },
                        children: [Object(v.jsx)("input", {
                            id: "searchTxt",
                            autoComplete: "off",
                            className: "searchInput",
                            type: "text",
                            placeholder: "Enter a Series Name"
                        }), Object(v.jsx)("button", {
                            className: "searchBtn",
                            href: "#",
                            children: Object(v.jsx)(H, {})
                        })]
                    })
                });

            function ue(e) {
                var t = e.list,
                    r = e.scrapeSeries,
                    n = Object(l.f)();
                return t ? Object(v.jsx)(ie, {
                    title: t.length + " Results",
                    margin: "0rem 0rem 3rem 0rem",
                    padding: "1.5rem 0",
                    children: Object(v.jsx)("div", {
                        className: "searchSeriesGrid",
                        children: null === t || void 0 === t ? void 0 : t.map((function(e) {
                            return Object(v.jsx)(te, {
                                type: "poster",
                                data: e,
                                onClick: function() {
                                    ! function(e) {
                                        r(e.url), n.push("/series")
                                    }(e)
                                }
                            }, e.url)
                        }))
                    })
                }) : Object(v.jsx)(re, {})
            }
            var de = function() {
                var e = w();
                return Object(v.jsx)(j.Consumer, {
                    children: function(t) {
                        var r;
                        return Object(v.jsxs)("div", {
                            ref: e.ref,
                            className: "search",
                            children: [Object(v.jsx)("div", {
                                className: "searchNavContainer",
                                children: Object(v.jsx)(ee, {})
                            }), Object(v.jsxs)("div", {
                                className: "searchMain",
                                children: [Object(v.jsx)(oe, {
                                    margin: "0 0 2rem 0",
                                    onSubmitted: function(e) {
                                        return t.scrapeSearch(e)
                                    }
                                }), Object(v.jsx)(ue, {
                                    list: null === (r = t.values) || void 0 === r ? void 0 : r.searchResults,
                                    scrapeSeries: t.scrapeSeries
                                })]
                            })]
                        })
                    }
                })
            };
            r(41);

            function fe(e) {
                var t = e.list,
                    r = e.scrapeSeries,
                    n = Object(l.f)();
                return t ? Object(v.jsx)(ie, {
                    title: t.length + " Saved in Watchlist",
                    margin: "0rem 0rem 3rem 0rem",
                    padding: "1.5rem 0",
                    children: Object(v.jsx)("div", {
                        className: "watchlistSeriesGrid",
                        children: null === t || void 0 === t ? void 0 : t.map((function(e) {
                            return Object(v.jsx)(te, {
                                type: "poster",
                                data: e,
                                onClick: function() {
                                    ! function(e) {
                                        r(e.url), n.push("/series")
                                    }(e)
                                }
                            }, e.url)
                        }))
                    })
                }) : Object(v.jsx)(re, {})
            }
            var je, pe = function() {
                    var e = p(),
                        t = w();
                    return Object(v.jsx)(j.Consumer, {
                        children: function(r) {
                            return Object(v.jsxs)("div", {
                                ref: t.ref,
                                className: "watchlist",
                                children: [Object(v.jsx)("div", {
                                    className: "watchlistNavContainer",
                                    children: Object(v.jsx)(ee, {})
                                }), Object(v.jsx)("div", {
                                    className: "watchlistMain",
                                    children: Object(v.jsx)(fe, {
                                        list: e.getWatchlist,
                                        scrapeSeries: r.scrapeSeries
                                    })
                                })]
                            })
                        }
                    })
                },
                ve = (r(42), function() {
                    var e = w();
                    return Object(v.jsx)(j.Consumer, {
                        children: function(t) {
                            return Object(v.jsxs)("div", {
                                ref: e.ref,
                                className: "settings",
                                children: [Object(v.jsx)("div", {
                                    className: "settingsNavContainer",
                                    children: Object(v.jsx)(ee, {})
                                }), Object(v.jsxs)("div", {
                                    className: "settingsMain",
                                    children: [Object(v.jsx)(ne, {
                                        title: "About",
                                        desc: "Weeb.eu.org | v.1.0.3",
                                        btnText: "",
                                        margin: "0rem 0rem 2rem 0rem",
                                        onClick: function() {}
                                    }), Object(v.jsx)(ne, {
                                        title: "History",
                                        desc: "This option will remove your most recently watched anime series. This is permanent by the way.\n\nThis option was highly requested.. for some reason..",
                                        btnText: "Clear History",
                                        margin: "0rem 0rem 1rem 0rem",
                                        onClick: function() {}
                                    })]
                                })]
                            })
                        }
                    })
                }),
                he = (r(43), ["title", "titleId"]);

            function me() {
                return me = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, me.apply(this, arguments)
            }

            function be(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }

            function Oe(e, t) {
                var r = e.title,
                    i = e.titleId,
                    s = be(e, he);
                return n.createElement("svg", me({
                    viewBox: "0 0 300 300",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": i
                }, s), r ? n.createElement("title", {
                    id: i
                }, r) : null, je || (je = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M25 150C25 80.9625 80.9625 25 150 25C219.037 25 275 80.9625 275 150C275 219.037 219.037 275 150 275C80.9625 275 25 219.037 25 150ZM118.75 114.188C118.75 98.2875 137.288 89.6125 149.5 99.7875L192.475 135.6C194.585 137.36 196.283 139.562 197.448 142.05C198.613 144.538 199.217 147.252 199.217 150C199.217 152.748 198.613 155.462 197.448 157.95C196.283 160.438 194.585 162.64 192.475 164.4L149.5 200.213C137.288 210.388 118.75 201.712 118.75 185.812V114.188Z"
                })))
            }
            var Ce, ge = n.forwardRef(Oe),
                xe = (r.p, ["title", "titleId"]);

            function we() {
                return we = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, we.apply(this, arguments)
            }

            function ye(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }

            function Se(e, t) {
                var r = e.title,
                    i = e.titleId,
                    s = ye(e, xe);
                return n.createElement("svg", we({
                    viewBox: "0 0 300 300",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": i
                }, s), r ? n.createElement("title", {
                    id: i
                }, r) : null, Ce || (Ce = n.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M150 50C106.463 50 74.25 69.7125 52.375 90.775C37.0522 105.653 24.3676 123.025 14.8625 142.15C13.6741 144.594 13.0566 147.276 13.0566 149.994C13.0566 152.711 13.6741 155.393 14.8625 157.837C24.3628 176.966 37.0432 194.343 52.3625 209.225C74.25 230.288 106.475 250 150 250C193.538 250 225.75 230.288 247.625 209.225C262.948 194.348 275.633 176.976 285.138 157.85C286.326 155.406 286.943 152.724 286.943 150.006C286.943 147.289 286.326 144.607 285.138 142.163C275.638 123.033 262.957 105.657 247.638 90.775C225.75 69.7125 193.538 50 150 50ZM150 100C136.739 100 124.021 105.268 114.645 114.645C105.268 124.021 100 136.739 100 150C100 163.261 105.268 175.979 114.645 185.355C124.021 194.732 136.739 200 150 200C163.261 200 175.979 194.732 185.355 185.355C194.732 175.979 200 163.261 200 150C200 136.739 194.732 124.021 185.355 114.645C175.979 105.268 163.261 100 150 100V100ZM150 175C156.63 175 162.989 172.366 167.678 167.678C172.366 162.989 175 156.63 175 150C175 143.37 172.366 137.011 167.678 132.322C162.989 127.634 156.63 125 150 125C143.37 125 137.011 127.634 132.322 132.322C127.634 137.011 125 143.37 125 150C125 156.63 127.634 162.989 132.322 167.678C137.011 172.366 143.37 175 150 175Z"
                })))
            }
            var Ne = n.forwardRef(Se);
            r.p;

            function Le(e) {
                var t = e.episode,
                    r = Object(n.useRef)();
                return t ? Object(v.jsx)("div", {
                    className: "video",
                    children: Object(v.jsx)("iframe", {
                        ref: r,
                        src: t.videoUrl,
                        scrolling: "no",
                        frameBorder: "0",
                        allowFullScreen: !0,
                        title: "anything",
                        onLoad: function() {
                            var e = r.current.getBoundingClientRect().width;
                            r.current.style.height = e / 1.75 + "px"
                        }
                    })
                }) : Object(v.jsx)(re, {})
            }

            function Ee(e) {
                var t = e.series,
                    r = p();
                return t ? Object(v.jsxs)("div", {
                    className: "seriesDetails",
                    children: [Object(v.jsxs)("div", {
                        className: "seriesDetailsRow",
                        children: [Object(v.jsx)("img", {
                            src: t.image,
                            alt: "sumn"
                        }), Object(v.jsxs)("div", {
                            className: "info",
                            children: [Object(v.jsx)("h1", {
                                className: "seriesTitle",
                                children: t.name
                            }), Object(v.jsx)("h1", {
                                className: "seriesStatus",
                                children: t.status
                            }), Object(v.jsxs)("div", {
                                className: "genres",
                                children: [Object(v.jsx)("h1", {
                                    children: "1"
                                }), Object(v.jsx)("h1", {
                                    children: "2"
                                }), Object(v.jsx)("h1", {
                                    children: "3"
                                })]
                            })]
                        }), Object(v.jsx)("h3", {
                            onClick: function() {
                                r.setWatchlist(t)
                            },
                            children: r.getWatchlist.find((function(e) {
                                return e.url === t.url
                            })) ? "💽Unsave" : "💾Save To Watchlist"
                        })]
                    }), Object(v.jsx)("p", {
                        className: "description",
                        children: t.description
                    })]
                }) : Object(v.jsx)(re, {})
            }

            function ke(e) {
                var t = e.episodes,
                    r = e.scrapeEpisode,
                    n = e.currentEpisode;
                return t && r ? Object(v.jsxs)("div", {
                    className: "episodesSection",
                    children: [Object(v.jsx)("div", {
                        className: "episodeDetails"
                    }), Object(v.jsx)("div", {
                        className: "episodeList",
                        children: t.map((function(e, t) {
                            return (null === n || void 0 === n ? void 0 : n.url) === e.url ? Object(v.jsxs)("div", {
                                className: "episode episode-current",
                                children: [Object(v.jsx)(ge, {}), Object(v.jsxs)("h1", {
                                    children: ["episode ", t + 1]
                                }), Object(v.jsx)(Ne, {})]
                            }, e.url) : Object(v.jsxs)("div", {
                                className: "episode",
                                onClick: function() {
                                    r(e.url)
                                },
                                children: [Object(v.jsx)(ge, {}), Object(v.jsxs)("h1", {
                                    children: ["episode ", t + 1]
                                }), Object(v.jsx)(Ne, {})]
                            }, e.url)
                        }))
                    }), Object(v.jsx)("div", {
                        className: "episodeSegments"
                    })]
                }) : Object(v.jsx)(re, {})
            }
            var Re, Ie = function() {
                    var e = w();
                    return Object(v.jsx)(j.Consumer, {
                        children: function(t) {
                            var r, n;
                            return Object(v.jsxs)("div", {
                                ref: e.ref,
                                className: "series",
                                children: [Object(v.jsx)("div", {
                                    className: "seriesNavContainer",
                                    children: Object(v.jsx)(ee, {})
                                }), Object(v.jsxs)("div", {
                                    className: "seriesMain",
                                    children: [Object(v.jsxs)("div", {
                                        className: "seriesContent",
                                        children: [Object(v.jsx)(Le, {
                                            episode: t.values.episode
                                        }), Object(v.jsx)(Ee, {
                                            series: t.values.series
                                        })]
                                    }), Object(v.jsx)(ke, {
                                        episodes: null === (r = t.values) || void 0 === r || null === (n = r.series) || void 0 === n ? void 0 : n.episodes,
                                        scrapeEpisode: function(e) {
                                            t.scrapeEpisode(t.values.series.name, e)
                                        },
                                        currentEpisode: t.values.episode
                                    })]
                                })]
                            })
                        }
                    })
                },
                Me = (r(44), ["title", "titleId"]);

            function Pe() {
                return Pe = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, Pe.apply(this, arguments)
            }

            function Te(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }

            function He(e, t) {
                var r = e.title,
                    i = e.titleId,
                    s = Te(e, Me);
                return n.createElement("svg", Pe({
                    viewBox: "0 0 300 300",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": i
                }, s), r ? n.createElement("title", {
                    id: i
                }, r) : null, Re || (Re = n.createElement("path", {
                    d: "M66.1623 66.1628C68.5064 63.8194 71.6852 62.503 74.9998 62.503C78.3143 62.503 81.4932 63.8194 83.8373 66.1628L150 132.325L216.162 66.1628C217.315 64.9689 218.695 64.0166 220.22 63.3615C221.745 62.7064 223.385 62.3616 225.045 62.3472C226.705 62.3327 228.35 62.649 229.887 63.2775C231.423 63.906 232.819 64.8342 233.992 66.0078C235.166 67.1815 236.094 68.5772 236.723 70.1134C237.351 71.6496 237.667 73.2956 237.653 74.9553C237.638 76.615 237.294 78.2553 236.639 79.7803C235.983 81.3054 235.031 82.6847 233.837 83.8378L167.675 150L233.837 216.163C236.114 218.52 237.374 221.678 237.346 224.955C237.317 228.233 236.003 231.368 233.685 233.686C231.367 236.003 228.232 237.318 224.955 237.346C221.677 237.375 218.52 236.115 216.162 233.838L150 167.675L83.8373 233.838C81.4797 236.115 78.3222 237.375 75.0448 237.346C71.7673 237.318 68.6321 236.003 66.3145 233.686C63.9969 231.368 62.6823 228.233 62.6538 224.955C62.6254 221.678 63.8853 218.52 66.1623 216.163L132.325 150L66.1623 83.8378C63.8189 81.4937 62.5024 78.3148 62.5024 75.0003C62.5024 71.6857 63.8189 68.5069 66.1623 66.1628V66.1628Z"
                })))
            }
            var qe = n.forwardRef(He);
            r.p;
            var We = function() {
                var e = Object(l.g)(),
                    t = Object(n.useRef)(),
                    r = Object(n.useState)({}),
                    i = Object(f.a)(r, 2),
                    s = i[0],
                    a = i[1],
                    c = function(e) {
                        if (t) {
                            var r = t.current.getBoundingClientRect();
                            a({
                                offsetX: r.left - e.pageX,
                                offsetY: r.top - e.pageY
                            })
                        }
                    },
                    o = function(e) {
                        e.pageX > 0 && e.pageY > 0 && a({
                            x: e.pageX,
                            y: e.pageY,
                            offsetX: s.offsetX,
                            offsetY: s.offsetY
                        })
                    },
                    u = function() {
                        var e = t.current.getBoundingClientRect();
                        if (s.x + e.width < window.innerWidth && s.y + e.height < window.innerHeight && s.x + e.width > 0 && s.y + e.height > 0) {
                            var r = s.x + s.offsetX,
                                n = s.y + s.offsetY;
                            t.current.style.left = r + "px", t.current.style.top = n + "px"
                        }
                    };
                return e.pathname.includes("/series") ? Object(v.jsx)("div", {}) : Object(v.jsx)(j.Consumer, {
                    children: function(e) {
                        return e.values.series && e.values.episode ? Object(v.jsxs)("div", {
                            ref: t,
                            className: "viewingCardContainer",
                            draggable: !0,
                            onDragStart: c,
                            onDrag: o,
                            onDragEnd: u,
                            children: [Object(v.jsx)("img", {
                                className: "viewingCardImage",
                                src: e.values.series.image,
                                alt: e.values.series.name
                            }), Object(v.jsxs)("div", {
                                className: "viewingDetails",
                                children: [Object(v.jsx)("h1", {
                                    className: "viewingTitle",
                                    children: e.values.series.name
                                }), Object(v.jsx)("h1", {
                                    className: "viewingSubTitle",
                                    children: "Episode " + (r = e.values.series.episodes, n = e.values.episode, r.findIndex((function(e) {
                                        return e.url === n.url
                                    })) + 1)
                                })]
                            }), Object(v.jsx)(qe, {
                                onClick: function() {
                                    e.values.setSeries(null), e.values.setEpisode(null)
                                }
                            })]
                        }) : Object(v.jsx)("div", {});
                        var r, n
                    }
                })
            };
            var Ae = function() {
                    return Object(v.jsx)(g, {
                        children: Object(v.jsxs)(c.a, {
                            children: [Object(v.jsx)(We, {}), Object(v.jsxs)(l.c, {
                                children: [Object(v.jsxs)(l.a, {
                                    path: "/home",
                                    children: [" ", Object(v.jsx)(le, {}), " "]
                                }), Object(v.jsxs)(l.a, {
                                    path: "/search",
                                    children: [" ", Object(v.jsx)(de, {}), " "]
                                }), Object(v.jsxs)(l.a, {
                                    path: "/series",
                                    children: [" ", Object(v.jsx)(Ie, {}), " "]
                                }), Object(v.jsxs)(l.a, {
                                    path: "/watchlist",
                                    children: [" ", Object(v.jsx)(pe, {}), " "]
                                }), Object(v.jsxs)(l.a, {
                                    path: "/settings",
                                    children: [" ", Object(v.jsx)(ve, {}), " "]
                                }), Object(v.jsxs)(l.a, {
                                    path: "/",
                                    children: [" ", Object(v.jsx)(le, {}), " "]
                                })]
                            })]
                        })
                    })
                },
                De = function(e) {
                    e && e instanceof Function && r.e(3).then(r.bind(null, 46)).then((function(t) {
                        var r = t.getCLS,
                            n = t.getFID,
                            i = t.getFCP,
                            s = t.getLCP,
                            a = t.getTTFB;
                        r(e), n(e), i(e), s(e), a(e)
                    }))
                };
            a.a.render(Object(v.jsx)(i.a.StrictMode, {
                children: Object(v.jsx)(Ae, {})
            }), document.getElementById("root")), De()
        }
    },
    [
        [45, 1, 2]
    ]
]);
//# sourceMappingURL=main.89ad38a1.chunk.js.map

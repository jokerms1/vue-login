function H5sPlayerAjax(t) {
  (t = t || {}).t = t.t || "json";
  var s,
    i = (function(t) {
      var s = [];
      for (var i in t)
        s.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
      return s.push(("v=" + Math.random()).replace(".", "")), s.join("&");
    })(t.data);
  (s = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : ActiveXObject("Microsoft.XMLHTTP")),
    "GET" == t.type
      ? (s.open("GET", t.url + "?" + i, !0), s.send(null))
      : "POST" == t.type &&
        (s.open("POST", t.url, !0),
        s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        s.send(i)),
    (s.onreadystatechange = function() {
      if (4 == s.readyState) {
        var i = s.status;
        i >= 200 && i < 300
          ? t.s && t.s(s.responseText, s.responseXML)
          : t.error && t.error(i);
      }
    });
}
var H5sPlayerCanvasLinkWebHost = "192.168.0.106:8080";
function H5sPlayerCanvas(t) {
  var s;
  (this.buffer = []),
    this.video,
    this.i,
    this.o,
    (this.h = !1),
    (this.l = !1),
    (this.v = H5sPlayerCanvasLinkWebHost),
    (this.u = !0),
    void 0 !== t.consolelog && "false" === t.consolelog && (this.u = !1),
    (this.C = t),
    !0 === this.u && console.log("[CS] Websocket Conf:", t),
    (this.S = t.videoid),
    (this.H = t.pbconf),
    (this.p = t.token),
    void 0 === this.S
      ? ((this.k = t.videodom),
        !0 === this.u && console.log("[CS] use dom directly", t.token))
      : ((this.k = document.getElementById(this.S)),
        !0 === this.u && console.log("[CS] use videoid", t.token)),
    (this.video = this.k),
    (this.P = this.video.getContext("2d")),
    (void 0 != this.H && "false" == this.H.showposter) ||
      ((s =
        this.C.protocol +
        "//" +
        this.C.host +
        this.C.rootpath +
        "api/v1/GetImage?token=" +
        this.p +
        "&session=" +
        this.C.session),
      !0 === this.u && console.log("[CS] connect src", t.token),
      this.m(s));
}
function H5sPlayerCanvasGetLinkWebVersion(t, s) {
  H5sPlayerAjax({
    url: "http://" + H5sPlayerCanvasLinkWebHost + "/api/v1/GetVersion",
    type: "GET",
    t: "json",
    s: function(s, i) {
      var e = JSON.parse(s);
      console.log("[CS] Linkweb Version:", e.strVer), t(e.strVer);
    },
    error: function(t) {
      s();
    }
  });
}
(H5sPlayerCanvas.prototype.m = function(t) {
  var s = new Image(),
    i = this.P,
    e = this.video;
  (s.onload = function() {
    i.drawImage(s, 0, 0, this.width, this.height, 0, 0, e.width, e.height);
  }),
    (s.src = t);
}),
  (H5sPlayerCanvas.prototype.g = function() {
    !0 === this.h &&
      (!0 === this.u && console.log("[CS] Reconnect..."),
      this.W(this.p),
      (this.h = !1));
  }),
  (H5sPlayerCanvas.prototype.I = function(t) {
    var s;
    !0 === this.u && console.log("[CS] H5SWebSocketClient");
    try {
      "http:" == this.C.protocol &&
        (s =
          "undefined" != typeof MozWebSocket
            ? new MozWebSocket("ws://" + this.v + t)
            : new WebSocket("ws://" + this.v + t)),
        "https:" == this.C.protocol &&
          (!0 === this.u && console.log(this.v),
          (s =
            "undefined" != typeof MozWebSocket
              ? new MozWebSocket("wss://" + this.v + t)
              : new WebSocket("wss://" + this.v + t))),
        !0 === this.u && console.log(this.v);
    } catch (t) {
      return void alert("error web socket", t);
    }
    return s;
  }),
  (H5sPlayerCanvas.prototype.R = function() {
    try {
      var t = { cmd: "H5_KEEPALIVE" };
      this.i.send(JSON.stringify(t));
    } catch (t) {
      !0 === this.u && console.log(t);
    }
  }),
  (H5sPlayerCanvas.prototype.L = function(t) {
    if ((t.data, ArrayBuffer, "string" == typeof t.data))
      return (
        !0 === this.u && console.log("[CS] string"),
        void (
          void 0 != this.H &&
          void 0 != this.H.callback &&
          this.H.callback(t.data, this.H.userdata)
        )
      );
    if (!0 !== this.l) {
      var s,
        i = new Image(),
        e = this.P,
        n = this.video;
      i.onload = function() {
        e.drawImage(i, 0, 0, n.width, n.height),
          (URL || webkitURL).revokeObjectURL(s);
      };
      var o = new Blob([t.data], { type: "image/jpeg" });
      (s = (URL || webkitURL).createObjectURL(o)), (i.src = s);
    }
  }),
  (H5sPlayerCanvas.prototype.W = function(t) {
    var s = "api/v1/linkwebcanvas",
      i = this.video,
      e = "main";
    if (
      (void 0 === this.C.streamprofile || (e = this.C.streamprofile),
      void 0 === this.H)
    )
      s =
        this.C.rootpath +
        s +
        "?token=" +
        t +
        "&profile=" +
        e +
        "&session=" +
        this.C.session +
        "&targethost=" +
        this.C.host +
        "&targetwidth=" +
        i.offsetWidth +
        "&targetheight=" +
        i.offsetHeight;
    else {
      var n = "false",
        o = "fake";
      void 0 === this.H.serverpb || (n = this.H.serverpb),
        void 0 === this.H.filename || (o = this.H.filename),
        (s =
          this.C.rootpath +
          s +
          "?token=" +
          t +
          "&playback=true&profile=" +
          e +
          "&serverpb=" +
          n +
          "&begintime=" +
          encodeURIComponent(this.H.begintime) +
          "&endtime=" +
          encodeURIComponent(this.H.endtime) +
          "&filename=" +
          o +
          "&session=" +
          this.C.session +
          "&targethost=" +
          encodeURIComponent(this.C.host) +
          "&targetwidth=" +
          i.offsetWidth +
          "&targetheight=" +
          i.offsetHeight);
    }
    this.C.session,
      !0 === this.u && console.log(s),
      (this.i = this.I(s)),
      !0 === this.u && console.log("[CS] setupWebSocket", this.i),
      (this.i.binaryType = "arraybuffer"),
      (this.i.T = this),
      (this.i.onmessage = this.L.bind(this)),
      (this.i.onopen = function() {
        !0 === this.T.u && console.log("[CS] wsSocket.onopen", this.T),
          (this.T.o = setInterval(this.T.R.bind(this.T), 1e3)),
          void 0 != this.T.H && "true" === this.T.H.autoplay && this.T.start();
      }),
      (this.i.onclose = function() {
        !0 === this.T.u && console.log("[CS] wsSocket.onclose", this.T),
          !0 === this.T.l
            ? !0 === this.T.u && console.log("[CS] wsSocket.onclose disconnect")
            : (this.T.h = !0),
          this.T.U(this.T),
          (this.T.O = ""),
          (this.T.M = !1);
      });
  }),
  (H5sPlayerCanvas.prototype.U = function(t) {
    !0 === t.u && console.log("[CS] CleanupWebSocket", t), clearInterval(t.o);
  }),
  (H5sPlayerCanvas.prototype.connect = function() {
    this.W(this.p), (this.A = setInterval(this.g.bind(this), 3e3));
  }),
  (H5sPlayerCanvas.prototype.disconnect = function() {
    !0 === this.u && console.log("[CS] disconnect", this),
      (this.l = !0),
      clearInterval(this.A),
      null != this.i && (this.i.close(), (this.i = null)),
      !0 === this.u && console.log("[CS] disconnect", this);
  }),
  (H5sPlayerCanvas.prototype.start = function() {
    try {
      var t = { cmd: "H5_START" };
      this.i.send(JSON.stringify(t));
    } catch (t) {
      !0 === this.u && console.log(t);
    }
  }),
  (H5sPlayerCanvas.prototype.pause = function() {
    try {
      var t = { cmd: "H5_PAUSE" };
      this.i.send(JSON.stringify(t));
    } catch (t) {
      !0 === this.u && console.log(t);
    }
  }),
  (H5sPlayerCanvas.prototype.resume = function() {
    try {
      var t = { cmd: "H5_RESUME" };
      this.i.send(JSON.stringify(t));
    } catch (t) {
      !0 === this.u && console.log(t);
    }
  }),
  (H5sPlayerCanvas.prototype.seek = function(t) {
    try {
      var s = { cmd: "H5_SEEK" };
      (s.nSeekTime = t), this.i.send(JSON.stringify(s));
    } catch (t) {
      !0 === this.u && console.log(t);
    }
  }),
  (H5sPlayerCanvas.prototype.speed = function(t) {
    try {
      var s = { cmd: "H5_SPEED" };
      (s.nSpeed = t), this.i.send(JSON.stringify(s));
    } catch (t) {
      !0 === this.u && console.log(t);
    }
  });
export { H5sPlayerCanvas, H5sPlayerCanvasGetLinkWebVersion };

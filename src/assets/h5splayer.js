function createRTCSessionDescription(t) {
  return new RTCSessionDescription(t);
}
var gStrH5SPlayerVersion = "h5splayer r11.5.0611";
function H5sPlayerWS(t) {
  this.sourceBuffer,
    (this.buffer = []),
    this.t,
    this.video,
    this.s,
    this.i,
    this.o,
    (this.h = 0),
    (this.l = 0),
    (this.u = 0),
    (this.S = !1),
    (this.v = !1),
    (this.C = !1),
    this.H,
    (this.P = 1),
    (this.p = !0),
    void 0 !== t.consolelog && "false" === t.consolelog && (this.p = !1),
    (this.R = t),
    !0 === this.p && console.log("[WS] Websocket Conf:", t),
    (this.T = t.videoid),
    (this.k = t.pbconf),
    (this.W = t.token),
    void 0 === this.T
      ? ((this.A = t.videodom),
        !0 === this.p && console.log("[WS] use dom directly", t.token))
      : ((this.A = document.getElementById(this.T)),
        !0 === this.p && console.log("[WS] use videoid", t.token)),
    (this.video = this.A),
    this.I,
    (void 0 != this.k && "false" == this.k.showposter) ||
      ((this.I =
        this.R.protocol +
        "//" +
        this.R.host +
        this.R.rootpath +
        "api/v1/GetImage?token=" +
        this.W +
        "&session=" +
        this.R.session),
      !0 === this.p && console.log("[WS] connect src", t.token),
      this.A.setAttribute("poster", this.I));
}
function H5sPlayerRTC(t) {
  this.s,
    this.o,
    (this.S = !1),
    (this.v = !1),
    (this.p = !0),
    void 0 !== t.consolelog && "false" === t.consolelog && (this.p = !1),
    (this.R = t),
    (this.T = t.videoid),
    (this.k = t.pbconf),
    (this.W = t.token),
    (this.P = 1),
    void 0 === this.T
      ? ((this.A = t.videodom),
        !0 === this.p && console.log("[RTC] use dom directly", t.token))
      : ((this.A = document.getElementById(this.T)),
        !0 === this.p && console.log("[RTC] use videoid", t.token)),
    (this.video = this.A),
    (this.U = null),
    (this.m = { optional: [{ DtlsSrtpKeyAgreement: !0 }] }),
    (this.O = {
      mandatory: { offerToReceiveAudio: !0, offerToReceiveVideo: !0 },
    }),
    (this.N = { iceServers: [] }),
    (this.M = []),
    this.I,
    (void 0 != this.k && "false" == this.k.showposter) ||
      ((this.I =
        this.R.protocol +
        "//" +
        this.R.host +
        this.R.rootpath +
        "api/v1/GetImage?token=" +
        this.W +
        "&session=" +
        this.R.session),
      !0 === this.p && console.log("[WS] connect src", t.token),
      this.A.setAttribute("poster", this.I));
}
function H5sPlayerHls(t) {
  this.s,
    this.o,
    (this.R = t),
    (this.T = t.videoid),
    (this.W = t.token),
    this.g,
    (this.J = t.hlsver),
    (this.p = !0),
    void 0 !== t.consolelog && "false" === t.consolelog && (this.p = !1),
    void 0 === this.T
      ? ((this.A = t.videodom),
        !0 === this.p && console.log("[HLS] use dom directly", t.token))
      : ((this.A = document.getElementById(this.T)),
        !0 === this.p && console.log("[HLS] use videoid", t.token)),
    (this.F = this.A),
    (this.F.type = "application/x-mpegURL"),
    (this.D = 0),
    (this._ = 0);
  var s =
    this.R.protocol +
    "//" +
    window.location.host +
    "/api/v1/GetImage?token=" +
    this.W +
    "&session=" +
    this.R.session;
  this.A.setAttribute("poster", s);
}
function H5sPlayerAudio(t) {
  (this.buffer = []),
    this.s,
    (this.S = !1),
    (this.v = !1),
    (this.R = t),
    (this.p = !0),
    void 0 !== t.consolelog && "false" === t.consolelog && (this.p = !1),
    !0 === this.p && console.log("[AUD] Aduio Player Conf:", t),
    (this.W = t.token),
    (this.L = new AudioContext());
}
function H5sPlayerAudBack(t) {
  (this.buffer = []),
    this.s,
    (this.S = !1),
    (this.v = !1),
    (this.R = t),
    (this.B = 0),
    (this.K = 48e3),
    (this.V = !1),
    (this.p = !0),
    void 0 !== t.consolelog && "false" === t.consolelog && (this.p = !1),
    !0 === this.p && console.log("[AUDBACK] Aduio Back Conf:", t),
    (this.W = t.token),
    (this.L = new AudioContext()),
    !0 === this.p && console.log("[AUDBACK] sampleRate", this.L.sampleRate),
    this.G();
}
function float32ToInt16(t) {
  for (var s = t.length, i = new Int16Array(s); s--; )
    i[s] = 32767 * Math.min(1, t[s]);
  return i;
}
function H5sConference(t) {
  this.s,
    this.o,
    (this.S = !1),
    (this.v = !1),
    (this.j = !1),
    this.q,
    this.X,
    (this.p = !0),
    void 0 !== t.consolelog && "false" === t.consolelog && (this.p = !1),
    (this.R = t),
    void 0 === t.localvideoid
      ? ((this.Y = t.localvideodom),
        !0 === this.p && console.log(t.token, "[CFE] local use dom directly"))
      : ((this.Y = document.getElementById(t.localvideoid)),
        !0 === this.p && console.log(t.token, "[CFE] local use videoid")),
    void 0 === t.remotevideoid
      ? ((this.Z = t.remotevideodom),
        !0 === this.p && console.log(t.token, "[CFE] remote use dom directly"))
      : ((this.Z = document.getElementById(t.remotevideoid)),
        !0 === this.p && console.log(t.token, "[CFE] remote use videoid")),
    (this.U = null),
    (this.m = { optional: [{ DtlsSrtpKeyAgreement: !0 }] }),
    (this.O = {
      mandatory: { offerToReceiveAudio: !0, offerToReceiveVideo: !0, $: !1 },
    }),
    (this.N = { iceServers: [] }),
    (this.M = []);
}
function H5sRTCPush(t) {
  this.s,
    this.o,
    (this.S = !1),
    (this.v = !1),
    (this.p = !0),
    void 0 !== t.consolelog && "false" === t.consolelog && (this.p = !1),
    (this.R = t),
    (this.T = t.localvideoid),
    (this.tt = t.user),
    (this.P = 1),
    void 0 === this.T
      ? ((this.st = t.localvideodom),
        !0 === this.p && console.log("[PUSH] use dom directly", t.user))
      : ((this.st = document.getElementById(this.T)),
        !0 === this.p && console.log("[PUSH] use videoid", t.user)),
    (this.video = this.st),
    (this.U = null),
    (this.m = { optional: [{ DtlsSrtpKeyAgreement: !0 }] }),
    (this.O = {
      mandatory: { offerToReceiveAudio: !1, offerToReceiveVideo: !1 },
    }),
    (this.N = { iceServers: [] }),
    (this.M = []);
}
function H5sRTCGetCapability(t, s) {
  var i = {},
    o = [],
    n = [],
    h = [],
    c = [];
  if (
    (navigator.mediaDevices
      .getUserMedia({ audio: !0, video: !0 })
      .then(function (t) {
        t &&
          t.getTracks().forEach((t) => {
            t.stop();
          });
      })
      .catch(function (t) {
        alert("[PUSH] getUserMedia failed try HTTPS", e);
      }),
    window.RTCRtpTransceiver &&
      "setCodecPreferences" in window.RTCRtpTransceiver.prototype)
  ) {
    const t = window.RTCRtpSender.getCapabilities("video").codecs;
    var r = !1,
      a = !1;
    for (let s = 0; s !== t.length; ++s) {
      const i = t[s];
      ["video/red", "video/ulpfec", "video/rtx"].includes(i.mimeType) ||
        (["video/VP9"].includes(i.mimeType)
          ? (r = !0)
          : ["video/H264"].includes(i.mimeType) && (a = !0));
    }
    1 == r && o.push("VP9"), 1 == a && o.push("H264");
  } else o.push("Default");
  navigator.mediaDevices
    .enumerateDevices()
    .then(function (s) {
      for (let t = 0; t !== s.length; ++t) {
        const i = s[t];
        var e = {};
        (e.id = i.deviceId),
          (e.name = i.label),
          "audioinput" === i.kind
            ? n.push(e)
            : "audiooutput" === i.kind
            ? h.push(e)
            : "videoinput" === i.kind && c.push(e);
      }
      (i.videocodec = o),
        (i.videoin = c),
        (i.audioin = n),
        (i.audioout = h),
        t(i);
    })
    .catch(function (t) {
      alert("[PUSH] enumerateDevices failed", e);
    });
}
console.log("[h5s]", gStrH5SPlayerVersion),
  (H5sPlayerWS.prototype.it = function () {
    if (!0 === this.S) {
      !0 === this.p && console.log("[WS] Reconnect...");
      var t = this.I + "&update=" + this.P;
      this.A.setAttribute("poster", t),
        !0 === this.p && console.log("[WS] Reconnect image", t),
        this.P++,
        this.et(this.W),
        (this.S = !1);
    }
  }),
  (H5sPlayerWS.prototype.ot = function (t) {
    var s;
    !0 === this.p && console.log("[WS] H5SWebSocketClient");
    try {
      "http:" == this.R.protocol &&
        (s =
          "undefined" != typeof MozWebSocket
            ? new MozWebSocket("ws://" + this.R.host + t)
            : new WebSocket("ws://" + this.R.host + t)),
        "https:" == this.R.protocol &&
          (!0 === this.p && console.log(this.R.host),
          (s =
            "undefined" != typeof MozWebSocket
              ? new MozWebSocket("wss://" + this.R.host + t)
              : new WebSocket("wss://" + this.R.host + t))),
        !0 === this.p && console.log(this.R.host);
    } catch (t) {
      return void alert("error");
    }
    return s;
  }),
  (H5sPlayerWS.prototype.nt = function () {
    if (null !== this.sourceBuffer && void 0 !== this.sourceBuffer) {
      if (0 !== this.buffer.length && !this.sourceBuffer.updating)
        try {
          var t = this.buffer.shift(),
            s = new Uint8Array(t);
          this.sourceBuffer.appendBuffer(s);
        } catch (t) {
          !0 === this.p && console.log(t), this.s.close();
        }
    } else
      !0 === this.p &&
        console.log("[WS] is null or undefined", this.sourceBuffer);
  }),
  (H5sPlayerWS.prototype.ht = function () {
    try {
      var t = { cmd: "H5_KEEPALIVE" };
      this.s.send(JSON.stringify(t));
    } catch (t) {
      !0 === this.p && console.log(t);
    }
  }),
  (H5sPlayerWS.prototype.ct = function (t) {
    return (
      t.data,
      ArrayBuffer,
      "string" == typeof t.data
        ? (!0 === this.p && console.log("[WS] string"),
          void (
            void 0 != this.k &&
            void 0 != this.k.callback &&
            this.k.callback(t.data, this.k.userdata)
          ))
        : !0 !== this.v
        ? !1 === this.C
          ? ((this.H = String.fromCharCode.apply(null, new Uint8Array(t.data))),
            this.rt(this),
            void (this.C = !0))
          : (this.buffer.push(t.data), void this.nt())
        : void 0
    );
  }),
  (H5sPlayerWS.prototype.rt = function (t) {
    try {
      (window.MediaSource = window.MediaSource || window.WebKitMediaSource),
        window.MediaSource ||
          (!0 === t.p && console.log("[WS] MediaSource API is not available"));
      var s = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
      "MediaSource" in window && MediaSource.isTypeSupported(s)
        ? !0 === t.p && console.log("[WS] MIME type or codec: ", s)
        : !0 === t.p && console.log("[WS] Unsupported MIME type or codec: ", s),
        (t.t = new window.MediaSource()),
        (t.video.autoplay = !0),
        !0 === t.p && console.log(t.T);
      (t.video.src = window.URL.createObjectURL(t.t)),
        t.video.play(),
        t.t.addEventListener("sourceopen", t.at.bind(t), !1);
    } catch (s) {
      !0 === t.p && console.log(s);
    }
  }),
  (H5sPlayerWS.prototype.at = function () {
    !0 === this.p && console.log("[WS] Add SourceBuffer"),
      (this.sourceBuffer = this.t.addSourceBuffer(this.H)),
      (this.t.duration = 1 / 0),
      this.t.removeEventListener("sourceopen", this.at, !1),
      this.sourceBuffer.addEventListener("updateend", this.nt.bind(this), !1);
  }),
  (H5sPlayerWS.prototype.et = function (t) {
    this.video.autoplay = !0;
    var s = "api/v1/h5swsapi",
      i = "main";
    if (
      (void 0 === this.R.streamprofile || (i = this.R.streamprofile),
      void 0 === this.k)
    )
      s =
        this.R.rootpath +
        s +
        "?token=" +
        t +
        "&profile=" +
        i +
        "&session=" +
        this.R.session;
    else {
      var e = "false",
        o = "fake";
      void 0 === this.k.serverpb || (e = this.k.serverpb),
        void 0 === this.k.filename || (o = this.k.filename),
        (s =
          this.R.rootpath +
          s +
          "?token=" +
          t +
          "&playback=true&profile=" +
          i +
          "&serverpb=" +
          e +
          "&begintime=" +
          encodeURIComponent(this.k.begintime) +
          "&endtime=" +
          encodeURIComponent(this.k.endtime) +
          "&filename=" +
          o +
          "&session=" +
          this.R.session);
    }
    this.R.session,
      !0 === this.p && console.log(s),
      (this.s = this.ot(s)),
      !0 === this.p && console.log("[WS] setupWebSocket", this.s),
      (this.s.binaryType = "arraybuffer"),
      (this.s.lt = this),
      (this.s.onmessage = this.ct.bind(this)),
      (this.s.onopen = function () {
        !0 === this.lt.p && console.log("[WS] wsSocket.onopen", this.lt),
          (this.lt.i = setInterval(this.lt.dt.bind(this.lt), 1e4)),
          (this.lt.o = setInterval(this.lt.ht.bind(this.lt), 1e3)),
          void 0 != this.lt.k &&
            "true" === this.lt.k.autoplay &&
            this.lt.start();
      }),
      (this.s.onclose = function () {
        !0 === this.lt.p && console.log("[WS] wsSocket.onclose", this.lt),
          !0 === this.lt.v
            ? !0 === this.lt.p &&
              console.log("[WS] wsSocket.onclose disconnect")
            : (this.lt.S = !0),
          this.lt.ut(this.lt),
          this.lt.ft(this.lt),
          (this.lt.H = ""),
          (this.lt.C = !1);
      });
  }),
  (H5sPlayerWS.prototype.ut = function (t) {
    !0 === t.p && console.log("[WS] Cleanup Source Buffer", t);
    try {
      t.sourceBuffer.removeEventListener("updateend", t.nt, !1),
        t.sourceBuffer.abort(),
        document.documentMode || /Edge/.test(navigator.userAgent)
          ? !0 === t.p && console.log("[WS] IE or EDGE!")
          : t.t.removeSourceBuffer(t.sourceBuffer),
        (t.sourceBuffer = null),
        (t.t = null),
        (t.buffer = []);
    } catch (s) {
      !0 === t.p && console.log(s);
    }
  }),
  (H5sPlayerWS.prototype.ft = function (t) {
    !0 === t.p && console.log("[WS] CleanupWebSocket", t),
      clearInterval(t.o),
      clearInterval(t.i),
      (t.h = 0),
      (t.l = 0),
      (t.u = 0);
  }),
  (H5sPlayerWS.prototype.dt = function () {
    if (void 0 === this.k) {
      !0 === this.v &&
        (!0 === this.p &&
          console.log("[WS] CheckSourceBuffer has been disconnect", this),
        clearInterval(this.o),
        clearInterval(this.i),
        clearInterval(this.St));
      try {
        if (
          (!0 === this.p && console.log("[WS] CheckSourceBuffer", this),
          this.sourceBuffer.buffered.length <= 0)
        ) {
          if ((this.h++, this.h > 8))
            return (
              !0 === this.p && console.log("[WS] CheckSourceBuffer Close 1"),
              void this.s.close()
            );
        } else {
          this.h = 0;
          this.sourceBuffer.buffered.start(0);
          var t = this.sourceBuffer.buffered.end(0),
            s = t - this.video.currentTime;
          if (s > 5 || s < 0)
            return (
              !0 === this.p && console.log("[WS] CheckSourceBuffer Close 2", s),
              void this.s.close()
            );
          if (t == this.l) {
            if ((this.u++, this.u > 3))
              return (
                !0 === this.p && console.log("[WS] CheckSourceBuffer Close 3"),
                void this.s.close()
              );
          } else this.u = 0;
          this.l = t;
        }
      } catch (t) {
        !0 === this.p && console.log(t);
      }
    }
  }),
  (H5sPlayerWS.prototype.connect = function () {
    this.et(this.W), (this.St = setInterval(this.it.bind(this), 800));
  }),
  (H5sPlayerWS.prototype.disconnect = function () {
    !0 === this.p && console.log("[WS] disconnect", this),
      (this.v = !0),
      clearInterval(this.St),
      null != this.s && (this.s.close(), (this.s = null)),
      !0 === this.p && console.log("[WS] disconnect", this);
  }),
  (H5sPlayerWS.prototype.start = function () {
    try {
      var t = { cmd: "H5_START" };
      this.s.send(JSON.stringify(t));
    } catch (t) {
      !0 === this.p && console.log(t);
    }
  }),
  (H5sPlayerWS.prototype.pause = function () {
    try {
      var t = { cmd: "H5_PAUSE" };
      this.s.send(JSON.stringify(t));
    } catch (t) {
      !0 === this.p && console.log(t);
    }
  }),
  (H5sPlayerWS.prototype.resume = function () {
    try {
      var t = { cmd: "H5_RESUME" };
      this.s.send(JSON.stringify(t));
    } catch (t) {
      !0 === this.p && console.log(t);
    }
  }),
  (H5sPlayerWS.prototype.seek = function (t) {
    try {
      var s = { cmd: "H5_SEEK" };
      (s.nSeekTime = t), this.s.send(JSON.stringify(s));
    } catch (t) {
      !0 === this.p && console.log(t);
    }
  }),
  (H5sPlayerWS.prototype.speed = function (t) {
    try {
      var s = { cmd: "H5_SPEED" };
      (s.nSpeed = t), this.s.send(JSON.stringify(s));
    } catch (t) {
      !0 === this.p && console.log(t);
    }
  }),
  (H5sPlayerRTC.prototype.it = function () {
    if (!0 === this.S) {
      !0 === this.p && console.log("[RTC] Reconnect...");
      var t = this.I + "&update=" + this.P;
      this.A.setAttribute("poster", t),
        !0 === this.p && console.log("[RTC] Reconnect image", t),
        this.P++,
        this.et(this.W),
        (this.S = !1);
    }
  }),
  (H5sPlayerRTC.prototype.ot = function (t) {
    var s;
    !0 === this.p && console.log("[RTC] H5SWebSocketClient");
    try {
      "http:" == this.R.protocol &&
        (s =
          "undefined" != typeof MozWebSocket
            ? new MozWebSocket("ws://" + this.R.host + t)
            : new WebSocket("ws://" + this.R.host + t)),
        "https:" == this.R.protocol &&
          (!0 === this.p && console.log(this.R.host),
          (s =
            "undefined" != typeof MozWebSocket
              ? new MozWebSocket("wss://" + this.R.host + t)
              : new WebSocket("wss://" + this.R.host + t))),
        !0 === this.p && console.log(this.R.host);
    } catch (t) {
      return void alert("error");
    }
    return s;
  }),
  (H5sPlayerRTC.prototype.ht = function () {
    try {
      var t = { type: "keepalive" };
      this.s.send(JSON.stringify(t));
    } catch (t) {
      !0 === this.p && console.log(t);
    }
  }),
  (H5sPlayerRTC.prototype.vt = function (t) {
    if (t.candidate) {
      var s;
      !0 === this.p &&
        console.log("[RTC] onIceCandidate currentice", t.candidate),
        (s = t.candidate),
        !0 === this.p &&
          console.log("[RTC] onIceCandidate currentice", JSON.stringify(s));
      var i = JSON.parse(JSON.stringify(s));
      (i.type = "remoteice"),
        !0 === this.p &&
          console.log("[RTC] onIceCandidate currentice new", JSON.stringify(i)),
        this.s.send(JSON.stringify(i));
    } else !0 === this.p && console.log("End of candidates.");
  }),
  (H5sPlayerRTC.prototype.Ct = function (t) {
    var s;
    !0 === this.p &&
      console.log("[RTC] Remote track added:" + JSON.stringify(t)),
      (s = t.Ht ? t.Ht[0] : t.stream);
    var i = this.A;
    (i.srcObject = s), i.play();
  }),
  (H5sPlayerRTC.prototype.yt = function () {
    !0 === this.p &&
      console.log(
        "[RTC] createPeerConnection  config: " +
          JSON.stringify(this.N) +
          " option:" +
          JSON.stringify(this.m)
      );
    var t = new RTCPeerConnection(this.N, this.m),
      s = this;
    return (
      (t.onicecandidate = function (t) {
        s.vt.call(s, t);
      }),
      void 0 !== t.Pt
        ? (t.Pt = function (t) {
            s.Ct.call(s, t);
          })
        : (t.onaddstream = function (t) {
            s.Ct.call(s, t);
          }),
      (t.oniceconnectionstatechange = function (i) {
        !0 === s.p &&
          console.log(
            "[RTC] oniceconnectionstatechange  state: " + t.iceConnectionState
          );
      }),
      !0 === this.p &&
        console.log(
          "[RTC] Created RTCPeerConnnection with config: " +
            JSON.stringify(this.N) +
            "option:" +
            JSON.stringify(this.m)
        ),
      t
    );
  }),
  (H5sPlayerRTC.prototype.pt = function (t) {
    !0 === this.p && console.log("[RTC] ProcessRTCOffer", t);
    try {
      (this.U = this.yt()), (this.M.length = 0);
      var s = this;
      !0 === this.p && console.log("[RTC] createRTCSessionDescription "),
        this.U.setRemoteDescription(createRTCSessionDescription(t)),
        this.U.createAnswer(this.O).then(
          function (t) {
            !0 === s.p &&
              console.log("[RTC] Create answer:" + JSON.stringify(t)),
              s.U.setLocalDescription(
                t,
                function () {
                  !0 === s.p &&
                    console.log("[RTC] ProcessRTCOffer createAnswer", t),
                    s.s.send(JSON.stringify(t));
                },
                function () {}
              );
          },
          function (t) {
            alert("[RTC] Create awnser error:" + JSON.stringify(t));
          }
        );
    } catch (t) {
      this.disconnect(), alert("[RTC] connect error: " + t);
    }
  }),
  (H5sPlayerRTC.prototype.wt = function (t) {
    !0 === this.p && console.log("[RTC] ProcessRemoteIce", t);
    try {
      var s = new RTCIceCandidate({
        sdpMLineIndex: t.sdpMLineIndex,
        candidate: t.candidate,
      });
      !0 === this.p && console.log("[RTC] ProcessRemoteIce", s),
        !0 === this.p &&
          console.log("[RTC] Adding ICE candidate :" + JSON.stringify(s)),
        this.U.addIceCandidate(
          s,
          function () {},
          function (t) {
            console.log("[RTC] addIceCandidate error:" + JSON.stringify(t));
          }
        );
    } catch (t) {
      alert("connect ProcessRemoteIce error: " + t);
    }
  }),
  (H5sPlayerRTC.prototype.ct = function (t) {
    t.data,
      ArrayBuffer,
      t.data,
      !0 === this.p && console.log("[RTC] RTC received ", t.data);
    var s = JSON.parse(t.data);
    return (
      !0 === this.p && console.log("[RTC] Get Message type ", s.type),
      "offer" === s.type
        ? (!0 === this.p && console.log("[RTC] Process Message type ", s.type),
          void this.pt(s))
        : "iceserver" === s.type
        ? (!0 === this.p && console.log("[RTC] Process Message type ", s.type),
          (this.N.iceServers = s.iceServers),
          (this.N.iceTransportPolicy = s.iceTransportPolicy),
          void (!0 === this.p && console.log("[RTC] Iceserver:", this.N)))
        : "remoteice" === s.type
        ? (!0 === this.p && console.log("[RTC] Process Message type ", s.type),
          void this.wt(s))
        : void (
            void 0 != this.k &&
            void 0 != this.k.callback &&
            this.k.callback(t.data, this.k.userdata)
          )
    );
  }),
  (H5sPlayerRTC.prototype.et = function (t) {
    this.video.autoplay = !0;
    var s = "api/v1/h5srtcapi",
      i = "main";
    if (
      (void 0 === this.R.streamprofile || (i = this.R.streamprofile),
      void 0 === this.k)
    )
      s =
        this.R.rootpath +
        s +
        "?token=" +
        t +
        "&profile=" +
        i +
        "&session=" +
        this.R.session;
    else {
      var e = "false",
        o = "fake";
      void 0 === this.k.serverpb || (e = this.k.serverpb),
        void 0 === this.k.filename || (o = this.k.filename),
        (s =
          this.R.rootpath +
          s +
          "?token=" +
          t +
          "&playback=true&profile=" +
          i +
          "&serverpb=" +
          e +
          "&begintime=" +
          encodeURIComponent(this.k.begintime) +
          "&endtime=" +
          encodeURIComponent(this.k.endtime) +
          "&filename=" +
          o +
          "&session=" +
          this.R.session);
    }
    !0 === this.p && console.log(s),
      (this.s = this.ot(s)),
      !0 === this.p && console.log("[RTC] setupWebSocket", this.s),
      (this.s.binaryType = "arraybuffer"),
      (this.s.lt = this),
      (this.s.onmessage = this.ct.bind(this)),
      (this.s.onopen = function () {
        !0 === this.lt.p && console.log("[RTC] wsSocket.onopen", this.lt);
        var t = { type: "open" };
        this.lt.s.send(JSON.stringify(t)),
          (this.lt.o = setInterval(this.lt.ht.bind(this.lt), 1e3)),
          void 0 != this.lt.k &&
            "true" === this.lt.k.autoplay &&
            this.lt.start();
      }),
      (this.s.onclose = function () {
        !0 === this.p && console.log("[RTC] wsSocket.onclose", this.lt),
          !0 === this.lt.v
            ? !0 === this.lt.p &&
              console.log("[RTC] wsSocket.onclose disconnect")
            : (this.lt.S = !0),
          this.lt.ft(this.lt);
      });
  }),
  (H5sPlayerRTC.prototype.ft = function (t) {
    !0 === t.p && console.log("[RTC] CleanupWebSocket", t), clearInterval(t.o);
  }),
  (H5sPlayerRTC.prototype.connect = function () {
    this.et(this.W), (this.St = setInterval(this.it.bind(this), 3e3));
  }),
  (H5sPlayerRTC.prototype.disconnect = function () {
    if (
      (!0 === this.p && console.log("[RTC] disconnect", this),
      (this.v = !0),
      clearInterval(this.St),
      null != this.s && (this.s.close(), (this.s = null)),
      this.A && (this.A.src = ""),
      this.U)
    ) {
      try {
        this.U.close();
      } catch (t) {
        !0 === this.p && console.log("[RTC] close peer connection failed:" + t);
      }
      this.U = null;
    }
    !0 === this.p && console.log("[RTC] disconnect", this);
  }),
  (H5sPlayerRTC.prototype.start = function () {
    try {
      var t = { cmd: "H5_START" };
      this.s.send(JSON.stringify(t));
    } catch (t) {
      !0 === this.p && console.log(t);
    }
  }),
  (H5sPlayerRTC.prototype.pause = function () {
    try {
      var t = { cmd: "H5_PAUSE" };
      this.s.send(JSON.stringify(t));
    } catch (t) {
      !0 === this.p && console.log(t);
    }
  }),
  (H5sPlayerRTC.prototype.resume = function () {
    try {
      var t = { cmd: "H5_RESUME" };
      this.s.send(JSON.stringify(t));
    } catch (t) {
      !0 === this.p && console.log(t);
    }
  }),
  (H5sPlayerRTC.prototype.seek = function (t) {
    try {
      var s = { cmd: "H5_SEEK" };
      (s.nSeekTime = t), this.s.send(JSON.stringify(s));
    } catch (t) {
      !0 === this.p && console.log(t);
    }
  }),
  (H5sPlayerRTC.prototype.speed = function (t) {
    try {
      var s = { cmd: "H5_SPEED" };
      (s.nSpeed = t), this.s.send(JSON.stringify(s));
    } catch (t) {
      !0 === this.p && console.log(t);
    }
  }),
  (H5sPlayerHls.prototype.ot = function (t) {
    var s;
    !0 === this.p && console.log("[HLS] H5SWebSocketClient");
    try {
      "http:" == this.R.protocol &&
        (s =
          "undefined" != typeof MozWebSocket
            ? new MozWebSocket("ws://" + this.R.host + t)
            : new WebSocket("ws://" + this.R.host + t)),
        "https:" == this.R.protocol &&
          (!0 === this.p && console.log("[HLS] ", this.R.host),
          (s =
            "undefined" != typeof MozWebSocket
              ? new MozWebSocket("wss://" + this.R.host + t)
              : new WebSocket("wss://" + this.R.host + t))),
        !0 === this.p && console.log(this.R.host);
    } catch (t) {
      return void alert("error");
    }
    return s;
  }),
  (H5sPlayerHls.prototype.ht = function () {
    try {
      var t = { type: "keepalive" };
      this.s.send(JSON.stringify(t));
    } catch (t) {
      !0 === this.p && console.log(t);
    }
  }),
  (H5sPlayerHls.prototype.ct = function (t) {
    !0 === this.p && console.log("[HLS] HLS received ", t.data);
  }),
  (H5sPlayerHls.prototype.et = function (t) {
    var s = "api/v1/h5swscmnapi";
    (s = this.R.rootpath + s + "?token=" + t + "&session=" + this.R.session),
      !0 === this.p && console.log(s),
      (this.s = this.ot(s)),
      !0 === this.p && console.log("[HLS] setupWebSocket", this.s),
      (this.s.binaryType = "arraybuffer"),
      (this.s.lt = this),
      (this.s.onmessage = this.ct.bind(this)),
      (this.s.onopen = function () {
        !0 === this.lt.p && console.log("[HLS] wsSocket.onopen", this.lt),
          (this.lt.o = setInterval(this.lt.ht.bind(this.lt), 1e3));
      }),
      (this.s.onclose = function () {
        !0 === this.lt.p && console.log("[HLS] wsSocket.onclose", this.lt),
          this.lt.ft(this.lt);
      });
  }),
  (H5sPlayerHls.prototype.ft = function (t) {
    !0 === t.p && console.log("[HLS] H5sPlayerHls CleanupWebSocket", t),
      clearInterval(t.o);
  }),
  (H5sPlayerHls.prototype.Rt = function () {
    !0 === this.p && console.log("[HLS]  video.ended", this.F.ended),
      !0 === this.p &&
        console.log("[HLS] video.currentTime", this.F.currentTime);
    var t = this.F.currentTime,
      s = t - this.D;
    !0 === this.p && console.log("[HLS]  diff", s),
      0 === s && this._++,
      (this.D = t),
      this._ > 3 &&
        (null != this.s && (this.s.close(), (this.s = null)),
        this.et(this.W),
        !0 === this.p && console.log("[HLS] reconnect"),
        (this.F.src = ""),
        (this.D = 0),
        (this._ = 0),
        (this.F.src =
          this.R.protocol +
          "//" +
          this.R.host +
          this.R.rootpath +
          "hls/" +
          this.J +
          "/" +
          this.W +
          "/hls.m3u8"),
        this.F.play());
  }),
  (H5sPlayerHls.prototype.connect = function () {
    this.et(this.W),
      (this.D = 0),
      (this._ = 0),
      (this.F.onended = function (t) {
        !0 === this.p && console.log("[HLS] The End");
      }),
      (this.F.onpause = function (t) {
        !0 === this.p && console.log("[HLS] Pause");
      }),
      (this.F.onplaying = function (t) {
        !0 === this.p && console.log("[HLS] Playing");
      }),
      (this.F.onseeking = function (t) {
        !0 === this.p && console.log("[HLS] seeking");
      }),
      (this.F.onvolumechange = function (t) {
        !0 === this.p && console.log("[HLS] volumechange");
      }),
      (this.F.src =
        this.R.protocol +
        "//" +
        this.R.host +
        this.R.rootpath +
        "hls/" +
        this.J +
        "/" +
        this.W +
        "/hls.m3u8"),
      this.F.play(),
      (this.g = setInterval(this.Rt.bind(this), 3e3));
  }),
  (H5sPlayerHls.prototype.disconnect = function () {
    clearInterval(this.g),
      (this.D = 0),
      (this._ = 0),
      null != this.s && (this.s.close(), (this.s = null)),
      !0 === this.p && console.log("[HLS] disconnect", this);
  }),
  (H5sPlayerAudio.prototype.ot = function (t) {
    var s;
    !0 === this.p && console.log("[AUD] H5SWebSocketClient");
    try {
      "http:" == this.R.protocol &&
        (s =
          "undefined" != typeof MozWebSocket
            ? new MozWebSocket("ws://" + this.R.host + t)
            : new WebSocket("ws://" + this.R.host + t)),
        "https:" == this.R.protocol &&
          (!0 === this.p && console.log(this.R.host),
          (s =
            "undefined" != typeof MozWebSocket
              ? new MozWebSocket("wss://" + this.R.host + t)
              : new WebSocket("wss://" + this.R.host + t))),
        !0 === this.p && console.log(this.R.host);
    } catch (t) {
      return void alert("error");
    }
    return s;
  }),
  (H5sPlayerAudio.prototype.ht = function () {
    try {
      this.s.send("keepalive");
    } catch (t) {
      !0 === this.p && console.log(t);
    }
  }),
  (H5sPlayerAudio.prototype.ct = function (t) {
    for (
      var s = new Int16Array(t.data),
        i = s.length,
        e = this.L.createBuffer(1, i, 8e3),
        o = 0;
      o < 1;
      o++
    )
      for (var n = e.getChannelData(o), h = 0; h < i; h++)
        n[h] = s[h] / 16383.5;
    var c = this.L.createBufferSource();
    (c.buffer = e), c.connect(this.L.destination), c.start();
  }),
  (H5sPlayerAudio.prototype.ft = function (t) {
    !0 === t.p && console.log("[AUD] CleanupWebSocket", t), clearInterval(t.o);
  }),
  (H5sPlayerAudio.prototype.et = function (t) {
    var s = "api/v1/h5saudapi";
    (s = this.R.rootpath + s + "?token=" + t + "&session=" + this.R.session),
      !0 === this.p && console.log(s),
      (this.s = this.ot(s)),
      !0 === this.p && console.log("[AUD] setupWebSocket for audio", this.s),
      (this.s.binaryType = "arraybuffer"),
      (this.s.lt = this),
      (this.s.onmessage = this.ct.bind(this)),
      (this.s.onopen = function () {
        !0 === this.lt.p && console.log("[AUD] wsSocket.onopen", this.lt),
          (this.lt.o = setInterval(this.lt.ht.bind(this.lt), 1e3));
      }),
      (this.s.onclose = function () {
        !0 === this.lt.p && console.log("[AUD] wsSocket.onclose", this.lt),
          this.lt.ft(this.lt);
      });
  }),
  (H5sPlayerAudio.prototype.connect = function () {
    this.et(this.W);
  }),
  (H5sPlayerAudio.prototype.disconnect = function () {
    !0 === this.p && console.log("[AUD] disconnect", this),
      null != this.s && (this.s.close(), (this.s = null)),
      !0 === this.p && console.log("[AUD] disconnect", this);
  }),
  (H5sPlayerAudBack.prototype.ot = function (t) {
    var s;
    !0 === this.p && console.log("[AUDBACK] H5SWebSocketClient");
    try {
      "http:" == this.R.protocol &&
        (s =
          "undefined" != typeof MozWebSocket
            ? new MozWebSocket("ws://" + this.R.host + t)
            : new WebSocket("ws://" + this.R.host + t)),
        "https:" == this.R.protocol &&
          (!0 === this.p && console.log(this.R.host),
          (s =
            "undefined" != typeof MozWebSocket
              ? new MozWebSocket("wss://" + this.R.host + t)
              : new WebSocket("wss://" + this.R.host + t))),
        !0 === this.p && console.log(this.R.host);
    } catch (t) {
      return void alert("error");
    }
    return s;
  }),
  (H5sPlayerAudBack.prototype.ht = function () {
    try {
      this.s.send("keepalive");
    } catch (t) {
      !0 === this.p && console.log(t);
    }
  }),
  (H5sPlayerAudBack.prototype.ct = function (t) {}),
  (H5sPlayerAudBack.prototype.ft = function (t) {
    !0 === this.p && console.log("[AUDBACK] CleanupWebSocket", t),
      clearInterval(t.o);
  }),
  (H5sPlayerAudBack.prototype.G = function () {
    !0 === this.p && console.log("[AUDBACK] sampleRate", this.L.sampleRate),
      (navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.Tt);
    try {
      navigator.getUserMedia({ video: !1, audio: !0 }, this.kt.bind(this));
    } catch (t) {
      return void alert("[AUDBACK] Audio back false getUserMedia", t);
    }
  }),
  (H5sPlayerAudBack.prototype.Et = function () {
    this.V = !0;
  }),
  (H5sPlayerAudBack.prototype.et = function (t) {
    var s = "api/v1/h5saudbackapi";
    (s =
      this.R.rootpath +
      s +
      "?token=" +
      t +
      "&samplerate=" +
      this.K +
      "&session=" +
      this.R.session),
      !0 === this.p && console.log(s),
      (this.s = this.ot(s)),
      !0 === this.p &&
        console.log("[AUDBACK] setupWebSocket for audio back", this.s),
      (this.s.binaryType = "arraybuffer"),
      (this.s.lt = this),
      (this.s.onmessage = this.ct.bind(this)),
      (this.s.onopen = this.Et.bind(this)),
      (this.s.onclose = function () {
        !0 === this.p && console.log("[AUDBACK] wsSocket.onclose", this.lt),
          this.lt.ft(this.lt);
      });
  }),
  (H5sPlayerAudBack.prototype.Wt = function (t) {
    var s = float32ToInt16(t.inputBuffer.getChannelData(0));
    !0 === this.V && this.s && this.s.send(s);
  }),
  (H5sPlayerAudBack.prototype.kt = function (t) {
    try {
      var s = this.L.createMediaStreamSource(t),
        i = this.L.createScriptProcessor(1024, 1, 1);
      s.connect(i),
        i.connect(this.L.destination),
        (i.onaudioprocess = this.Wt.bind(this));
    } catch (t) {
      return void alert("Audio intecomm error", t);
    }
  }),
  (H5sPlayerAudBack.prototype.connect = function () {
    this.et(this.W);
  }),
  (H5sPlayerAudBack.prototype.disconnect = function () {
    !0 === this.p && console.log("[AUDBACK] disconnect", this),
      null != this.s && (this.s.close(), (this.s = null)),
      !0 === this.p && console.log("[AUDBACK] disconnect", this);
  }),
  (H5sConference.prototype.it = function () {
    !0 === this.S &&
      (!0 === this.p && console.log("Reconnect..."),
      this.et(this.W),
      (this.S = !1));
  }),
  (H5sConference.prototype.ot = function (t) {
    var s;
    !0 === this.p && console.log("[CFE] H5SWebSocketClient");
    try {
      "http:" == this.R.protocol &&
        (s =
          "undefined" != typeof MozWebSocket
            ? new MozWebSocket("ws://" + this.R.host + t)
            : new WebSocket("ws://" + this.R.host + t)),
        "https:" == this.R.protocol &&
          (!0 === this.p && console.log(this.R.host),
          (s =
            "undefined" != typeof MozWebSocket
              ? new MozWebSocket("wss://" + this.R.host + t)
              : new WebSocket("wss://" + this.R.host + t))),
        !0 === this.p && console.log(this.R.host);
    } catch (t) {
      return void alert("error");
    }
    return s;
  }),
  (H5sConference.prototype.ht = function () {
    try {
      var t = { type: "CFE_CMD_KEEPALIVE" },
        s = {};
      (s.strId = this.q), (t.keepalive = s), this.s.send(JSON.stringify(t));
    } catch (t) {
      !0 === this.p && console.log(t);
    }
  }),
  (H5sConference.prototype.vt = function (t) {
    if (t.candidate) {
      var s;
      !0 === this.p &&
        console.log("[CFE] onIceCandidate currentice", t.candidate),
        (s = t.candidate),
        !0 === this.p &&
          console.log("[CFE] onIceCandidate currentice", JSON.stringify(s));
      var i = { type: "CFE_CMD_REMOTE_ICE" },
        e = {};
      console.log("[CFE] remote Ice to", this.X),
        (e.strTo = this.X),
        (e.msg = s),
        (i.remoteIce = e),
        this.s.send(JSON.stringify(i));
    } else !0 === this.p && console.log("[CFE] End of candidates.");
  }),
  (H5sConference.prototype.Ct = function (t) {
    var s;
    !0 === this.p &&
      console.log("[CFE] Remote track added:" + JSON.stringify(t)),
      (s = t.Ht ? t.Ht[0] : t.stream);
    var i = this.Z;
    (i.srcObject = s), i.play();
  }),
  (H5sConference.prototype.yt = function () {
    !0 === this.p &&
      console.log(
        "[CFE] createPeerConnection  config: " +
          JSON.stringify(this.N) +
          " option:" +
          JSON.stringify(this.m)
      );
    var t = new RTCPeerConnection(this.N, this.m),
      s = this;
    return (
      (t.onicecandidate = function (t) {
        s.vt.call(s, t);
      }),
      void 0 !== t.Pt
        ? (t.Pt = function (t) {
            s.Ct.call(s, t);
          })
        : (t.onaddstream = function (t) {
            s.Ct.call(s, t);
          }),
      (t.oniceconnectionstatechange = function (s) {
        !0 === this.p &&
          console.log(
            "[CFE] oniceconnectionstatechange  state: " + t.iceConnectionState
          );
      }),
      !0 === this.p &&
        console.log(
          "[CFE] Created RTCPeerConnnection with config: " +
            JSON.stringify(this.N) +
            "option:" +
            JSON.stringify(this.m)
        ),
      t
    );
  }),
  (H5sConference.prototype.At = function (t) {
    !0 === this.p && console.log("[CFE] ProcessOffer", t);
    try {
      (this.U = this.yt()), (this.M.length = 0);
      var s = this;
      const i = this.It.getVideoTracks(),
        e = this.It.getAudioTracks();
      i.length > 0 && console.log("[CFE] Using video device:", i[0].label),
        e.length > 0 && console.log("[CFE] Using audio device:", e[0].label),
        this.It.getTracks().forEach((t) => this.U.addTrack(t, this.It)),
        !0 === this.p && console.log("[CFE] createRTCSessionDescription "),
        this.U.setRemoteDescription(createRTCSessionDescription(t)),
        this.U.createAnswer(this.O).then(
          function (t) {
            !0 === s.p &&
              console.log("[CFE] Create answer:" + JSON.stringify(t)),
              s.U.setLocalDescription(
                t,
                function () {
                  !0 === s.p &&
                    console.log("[CFE] ProcessOffer createAnswer", t);
                  var i = { type: "CFE_CMD_CALL_ANSWER" },
                    e = {};
                  console.log("[CFE] createAnswer to", s.X),
                    (e.strTo = s.X),
                    (e.msg = t),
                    (i.answer = e),
                    s.s.send(JSON.stringify(i));
                },
                function () {}
              );
          },
          function (t) {
            alert("[CFE ]Create awnser error:" + JSON.stringify(t));
          }
        );
    } catch (t) {
      this.disconnect(), alert("connect error: " + t);
    }
  }),
  (H5sConference.prototype.Ut = function (t) {
    !0 === this.p && console.log("[CFE] ProcessAnswer", t);
    try {
      this.U.setRemoteDescription(createRTCSessionDescription(t));
    } catch (t) {
      this.disconnect(), alert("connect error: " + t);
    }
  }),
  (H5sConference.prototype.bt = function () {
    !0 === this.p && console.log("[CFE] CreateOffer");
    try {
      (this.U = this.yt()), (this.M.length = 0);
      var t = this;
      const s = this.It.getVideoTracks(),
        i = this.It.getAudioTracks();
      return (
        s.length > 0 && console.log("[CFE] Using video device:", s[0].label),
        i.length > 0 && console.log("[CFE] Using audio device:", i[0].label),
        this.It.getTracks().forEach((t) => this.U.addTrack(t, this.It)),
        void this.U.createOffer(this.O).then(
          function (s) {
            !0 === t.p &&
              console.log("[CFE] Create answer:" + JSON.stringify(s)),
              t.U.setLocalDescription(
                s,
                function () {
                  !0 === t.p &&
                    console.log("[CFE] ProcessOffer createAnswer", s);
                  var i = s;
                  !0 === t.p &&
                    console.log("[CFE] createOffer ", JSON.stringify(i));
                  var e = { type: "CFE_CMD_CALL_OFFER" },
                    o = {};
                  !0 === t.p && console.log("[CFE] createOffer to", t.X),
                    (o.strTo = t.X),
                    (o.msg = i),
                    (e.offer = o),
                    t.s.send(JSON.stringify(e));
                },
                function () {}
              );
          },
          function (t) {
            alert("[CFE ]Create offer error:" + JSON.stringify(t));
          }
        )
      );
    } catch (t) {
      this.disconnect(), alert("connect error: " + t);
    }
  }),
  (H5sConference.prototype.wt = function (t) {
    !0 === this.p && console.log("[CFE] ProcessRemoteIce", t);
    try {
      var s = new RTCIceCandidate({
        sdpMLineIndex: t.sdpMLineIndex,
        candidate: t.candidate,
      });
      !0 === this.p && console.log("[CFE] ProcessRemoteIce", s),
        !0 === this.p &&
          console.log("[CFE] Adding ICE candidate :" + JSON.stringify(s)),
        this.U.addIceCandidate(
          s,
          function () {},
          function (t) {
            console.log("[CFE] addIceCandidate error:" + JSON.stringify(t));
          }
        );
    } catch (t) {
      alert("connect ProcessRemoteIce error: " + t);
    }
  }),
  (H5sConference.prototype.ct = function (t) {
    !0 === this.p && console.log("[CFE] received ", t.data);
    var s = JSON.parse(t.data);
    if (
      (!0 === this.p && console.log("[CFE] Get Message type ", s.type),
      "CFE_CMD_INVITE_REQ" !== s.type)
    ) {
      if ("CFE_CMD_INVITE_RESP" === s.type)
        return (this.X = s.inviteResp.strFrom), void this.bt();
      if ("CFE_CMD_CALL_OFFER" !== s.type)
        if ("CFE_CMD_CALL_ANSWER" !== s.type)
          if ("CFE_CMD_REMOTE_ICE" !== s.type) {
            if ("CFE_EVENT_ID_ASSIGN" === s.type) {
              (this.q = s.idAssign.strId),
                1 == s.idAssign.bEnableRelay &&
                  ((this.N.iceServers = s.idAssign.iceServers),
                  (this.N.iceTransportPolicy = s.idAssign.iceTransportPolicy),
                  !0 === this.p && console.log("[CFE] Iceserver:", this.N));
              var i = { type: "CFE_EVENT_ID_ASSIGN", idAssign: {} };
              return (
                (i.idAssign.strId = s.idAssign.strId),
                void (
                  void 0 != this.R.callback &&
                  this.R.callback(JSON.stringify(i), this.R.userdata)
                )
              );
            }
            void 0 != this.R.callback &&
              this.R.callback(t.data, this.R.userdata);
          } else this.wt(s.remoteIce.msg);
        else this.Ut(s.answer.msg);
      else this.At(s.offer.msg);
    }
  }),
  (H5sConference.prototype.et = function (t) {
    (this.Y.autoplay = !0), (this.Z.autoplay = !0);
    var s = "api/v1/h5sconference";
    (s =
      void 0 === this.q
        ? this.R.rootpath +
          s +
          "?name=" +
          this.R.user +
          "&session=" +
          this.R.session
        : this.R.rootpath +
          s +
          "?name=" +
          this.R.user +
          "?id=" +
          this.q +
          "&session=" +
          this.R.session),
      !0 === this.p && console.log(s),
      (this.s = this.ot(s)),
      !0 === this.p && console.log("[CFE] setupWebSocket", this.s),
      (this.s.binaryType = "arraybuffer"),
      (this.s.lt = this),
      (this.s.onmessage = this.ct.bind(this)),
      (this.s.onopen = function () {
        !0 === this.lt.p && console.log("[CFE] wsSocket.onopen", this.lt),
          (this.lt.o = setInterval(this.lt.ht.bind(this.lt), 1e3)),
          void 0 != this.lt.k &&
            "true" === this.lt.k.autoplay &&
            this.lt.start();
      }),
      (this.s.onclose = function () {
        !0 === this.lt.p && console.log("[CFE] wsSocket.onclose", this.lt),
          !0 === this.lt.v
            ? !0 === this.lt.p &&
              console.log("[CFE] wsSocket.onclose disconnect")
            : (this.lt.S = !0),
          this.lt.ft(this.lt);
      });
  }),
  (H5sConference.prototype.ft = function (t) {
    !0 === t.p && console.log("[CFE] CleanupWebSocket", t), clearInterval(t.o);
  }),
  (H5sConference.prototype.connect = function () {
    this.et(this.W), (this.St = setInterval(this.it.bind(this), 3e3));
  }),
  (H5sConference.prototype.call = function (t, s, i, o, n) {
    if (1 != this.j) {
      (this.Ot = i), (this.Nt = n), (this.Mt = o);
      var h = 1280,
        c = 720;
      "QVGA" == o
        ? ((h = 320), (c = 240))
        : "VGA" == o
        ? ((h = 640), (c = 480))
        : "D1" == o
        ? ((h = 720), (c = 576))
        : "720P" == o
        ? ((h = 1280), (c = 720))
        : "1080P" == o
        ? ((h = 1920), (c = 1080))
        : "4K" == o
        ? ((h = 4096), (c = 2160))
        : "8K" == o && ((h = 7680), (c = 4320));
      try {
        try {
          var r;
          r = 0 != t && {
            deviceId: { exact: i },
            width: { exact: h },
            height: { exact: c },
          };
          var a = this;
          navigator.mediaDevices
            .getUserMedia({ audio: { deviceId: { exact: n } }, video: r })
            .then(function (i) {
              1 == t && (a.Y.srcObject = i), (a.It = i);
              var e = { type: "CFE_CMD_INVITE_REQ" },
                o = {};
              (o.strFrom = a.q),
                (o.strTo = s),
                (e.inviteReq = o),
                a.s.send(JSON.stringify(e));
            })
            .catch(function (t) {
              alert("[CFE] getUserMedia error try HTTPS", e);
            });
        } catch (t) {
          alert("[CFE] getUserMedia error try HTTPS");
        }
      } catch (t) {
        !0 === this.p && console.log(t);
      }
      this.j = !0;
    }
  }),
  (H5sConference.prototype.answer = function (t, s, i, o, n) {
    if (1 != this.j) {
      (this.Ot = i), (this.Nt = n), (this.Mt = o);
      var h = 1280,
        c = 720;
      "QVGA" == o
        ? ((h = 320), (c = 240))
        : "VGA" == o
        ? ((h = 640), (c = 480))
        : "D1" == o
        ? ((h = 720), (c = 576))
        : "720P" == o
        ? ((h = 1280), (c = 720))
        : "1080P" == o
        ? ((h = 1920), (c = 1080))
        : "4K" == o
        ? ((h = 4096), (c = 2160))
        : "8K" == o && ((h = 7680), (c = 4320));
      try {
        try {
          var r;
          r = 0 != t && {
            deviceId: { exact: i },
            width: { exact: h },
            height: { exact: c },
          };
          var a = this;
          navigator.mediaDevices
            .getUserMedia({ audio: { deviceId: { exact: n } }, video: r })
            .then(function (i) {
              1 == t && (a.Y.srcObject = i), (a.It = i);
              var e = { type: "CFE_CMD_INVITE_RESP" },
                o = {};
              (o.strFrom = a.q),
                (o.strTo = s),
                (a.X = s),
                (e.inviteResp = o),
                a.s.send(JSON.stringify(e));
            })
            .catch(function (t) {
              alert("[CFE] getUserMedia failed try HTTPS", e);
            });
        } catch (t) {
          alert("[CFE] getUserMedia failed try HTTPS");
        }
      } catch (t) {
        !0 === this.p && console.log(t);
      }
      this.j = !0;
    }
  }),
  (H5sConference.prototype.hangup = function () {
    if (0 != this.j) {
      try {
        var t = { cmd: "H5_PAUSE" };
        this.s.send(JSON.stringify(t));
      } catch (t) {
        !0 === this.p && console.log(t);
      }
      if (
        (this.Y && (this.Y.src = ""),
        this.Z && (this.Z.src = ""),
        this.It && (this.It = null),
        this.U)
      ) {
        try {
          this.U.close();
        } catch (t) {
          !0 === this.p &&
            console.log("[CFE] close peer connection failed:" + t);
        }
        this.U = null;
      }
      this.j = !1;
    }
  }),
  (H5sConference.prototype.disconnect = function () {
    !0 === this.p && console.log("[CFE] disconnect", this),
      (this.v = !0),
      clearInterval(this.St),
      this.hangup(),
      null != this.s && (this.s.close(), (this.s = null)),
      !0 === this.p && console.log("[CFE] disconnect", this);
  }),
  (H5sRTCPush.prototype.it = function () {
    !0 === this.S &&
      (!0 === this.p && console.log("[PUSH] Reconnect..."),
      this.et(this.tt),
      (this.S = !1));
  }),
  (H5sRTCPush.prototype.ot = function (t) {
    var s;
    !0 === this.p && console.log("[PUSH] H5SWebSocketClient");
    try {
      "http:" == this.R.protocol &&
        (s =
          "undefined" != typeof MozWebSocket
            ? new MozWebSocket("ws://" + this.R.host + t)
            : new WebSocket("ws://" + this.R.host + t)),
        "https:" == this.R.protocol &&
          (!0 === this.p && console.log(this.R.host),
          (s =
            "undefined" != typeof MozWebSocket
              ? new MozWebSocket("wss://" + this.R.host + t)
              : new WebSocket("wss://" + this.R.host + t))),
        !0 === this.p && console.log(this.R.host);
    } catch (t) {
      return void alert("error");
    }
    return s;
  }),
  (H5sRTCPush.prototype.ht = function () {
    try {
      var t = { type: "keepalive" };
      this.s.send(JSON.stringify(t));
    } catch (t) {
      !0 === this.p && console.log(t);
    }
  }),
  (H5sRTCPush.prototype.vt = function (t) {
    if (t.candidate) {
      var s;
      !0 === this.p &&
        console.log("[PUSH] onIceCandidate currentice", t.candidate),
        (s = t.candidate),
        !0 === this.p &&
          console.log("[PUSH] onIceCandidate currentice", JSON.stringify(s));
      var i = JSON.parse(JSON.stringify(s));
      (i.type = "remoteice"),
        !0 === this.p &&
          console.log(
            "[PUSH] onIceCandidate currentice new",
            JSON.stringify(i)
          ),
        this.s.send(JSON.stringify(i));
    } else !0 === this.p && console.log("End of candidates.");
  }),
  (H5sRTCPush.prototype.Ct = function (t) {
    !0 === this.p &&
      console.log("[PUSH] Remote track added:" + JSON.stringify(t)),
      t.Ht ? t.Ht[0] : t.stream;
  }),
  (H5sRTCPush.prototype.yt = function () {
    !0 === this.p &&
      console.log(
        "[PUSH] createPeerConnection  config: " +
          JSON.stringify(this.N) +
          " option:" +
          JSON.stringify(this.m)
      );
    var t = new RTCPeerConnection(this.N, this.m),
      s = this;
    return (
      (t.onicecandidate = function (t) {
        s.vt.call(s, t);
      }),
      void 0 !== t.Pt
        ? (t.Pt = function (t) {
            s.Ct.call(s, t);
          })
        : (t.onaddstream = function (t) {
            s.Ct.call(s, t);
          }),
      (t.oniceconnectionstatechange = function (i) {
        !0 === s.p &&
          console.log(
            "[PUSH] oniceconnectionstatechange  state: " + t.iceConnectionState
          );
      }),
      !0 === this.p &&
        console.log(
          "[PUSH] Created RTCPeerConnnection with config: " +
            JSON.stringify(this.N) +
            "option:" +
            JSON.stringify(this.m)
        ),
      t
    );
  }),
  (H5sRTCPush.prototype.gt = function (t, s) {
    if (
      ("chrome" === adapter.browserDetails.browser ||
        "safari" === adapter.browserDetails.browser ||
        ("firefox" === adapter.browserDetails.browser &&
          adapter.browserDetails.version >= 64)) &&
      "RTCRtpSender" in window &&
      "setParameters" in window.RTCRtpSender.prototype
    ) {
      const i = t.getSenders();
      for (let t = 0; t !== i.length; ++t) {
        const e = i[t];
        if ("video" == e.track.kind) {
          const t = e.getParameters();
          t.encodings || (t.encodings = [{}]),
            (t.encodings[0].maxBitrate = 1e3 * s),
            e
              .setParameters(t)
              .then(() => {})
              .catch((t) => console.error(t));
        }
      }
    }
  }),
  (H5sRTCPush.prototype.bt = function () {
    !0 === this.p && console.log("[PUSH] CreateOffer");
    try {
      (this.U = this.yt()), (this.M.length = 0);
      var t = this;
      const e = this.It.getVideoTracks(),
        o = this.It.getAudioTracks();
      if (
        (e.length > 0 && console.log("[PUSH] Using video device:", e[0].label),
        o.length > 0 && console.log("[PUSH] Using audio device:", o[0].label),
        this.It.getTracks().forEach((t) => this.U.addTrack(t, this.It)),
        window.RTCRtpTransceiver &&
          "setCodecPreferences" in window.RTCRtpTransceiver.prototype)
      ) {
        var s = "video/H264";
        "VP9" == this.Jt
          ? (s = "video/VP9")
          : "H264" == this.Jt && (s = "video/H264");
        const e = window.RTCRtpSender.getCapabilities("video").codecs;
        var i = [];
        for (let t = 0; t !== e.length; ++t) {
          const o = e[t];
          [s].includes(o.mimeType) && i.push(o);
        }
        !0 === t.p && console.log("[PUSH] Select codec:", i),
          this.U.getTransceivers()
            .find(
              (t) => t.sender && t.sender.track === this.It.getVideoTracks()[0]
            )
            .setCodecPreferences(i);
      }
      return void this.U.createOffer(this.O).then(
        function (s) {
          !0 === t.p && console.log("[PUSH] Create offer:" + JSON.stringify(s)),
            t.U.setLocalDescription(
              s,
              function () {
                var i = s;
                t.s.send(JSON.stringify(i));
              },
              function () {}
            );
        },
        function (t) {
          alert("[PUSH ]Create offer error:" + JSON.stringify(t));
        }
      );
    } catch (t) {
      this.disconnect(), alert("connect error: " + t);
    }
  }),
  (H5sRTCPush.prototype.Ut = function (t) {
    !0 === this.p && console.log("[PUSH] ProcessAnswer", t);
    try {
      this.U.setRemoteDescription(createRTCSessionDescription(t));
    } catch (t) {
      this.disconnect(), alert("connect error: " + t);
    }
    this.gt(this.U, this.Ft);
  }),
  (H5sRTCPush.prototype.wt = function (t) {
    !0 === this.p && console.log("[PUSH] ProcessRemoteIce", t);
    try {
      var s = new RTCIceCandidate({
        sdpMid: t.sdpMid,
        sdpMLineIndex: t.sdpMLineIndex,
        candidate: t.candidate,
      });
      !0 === this.p && console.log("[PUSH] ProcessRemoteIce", s),
        !0 === this.p &&
          console.log("[PUSH] Adding ICE candidate :" + JSON.stringify(s)),
        this.U.addIceCandidate(
          s,
          function () {},
          function (t) {
            console.log("[PUSH] addIceCandidate error:" + JSON.stringify(t)),
              console.log(t);
          }
        );
    } catch (t) {
      alert("connect ProcessRemoteIce error: " + t);
    }
  }),
  (H5sRTCPush.prototype.ct = function (t) {
    t.data,
      ArrayBuffer,
      t.data,
      !0 === this.p && console.log("[PUSH] RTC received ", t.data);
    var s = JSON.parse(t.data);
    return (
      !0 === this.p && console.log("[PUSH] Get Message type ", s.type),
      "iceserver" === s.type
        ? (!0 === this.p && console.log("[PUSH] Process Message type ", s.type),
          (this.N.iceServers = s.iceServers),
          !0 === this.p && console.log("[PUSH] Iceserver:", this.N),
          void this.bt())
        : "answer" === s.type
        ? (!0 === this.p && console.log("[PUSH] Process Message type ", s.type),
          void this.Ut(s))
        : "remoteice" === s.type
        ? (!0 === this.p && console.log("[PUSH] Process Message type ", s.type),
          void this.wt(s))
        : void 0
    );
  }),
  (H5sRTCPush.prototype.et = function (t) {
    this.video.autoplay = !0;
    var s = "api/v1/h5srtcpushapi";
    (s =
      this.R.rootpath +
      s +
      "?token=" +
      t +
      "&type=" +
      this.R.type +
      "&audio=" +
      this.R.audio +
      "&session=" +
      this.R.session),
      !0 === this.p && console.log(s),
      (this.s = this.ot(s)),
      !0 === this.p && console.log("[PUSH] setupWebSocket", this.s),
      (this.s.binaryType = "arraybuffer"),
      (this.s.lt = this),
      (this.s.onmessage = this.ct.bind(this)),
      (this.s.onopen = function () {
        !0 === this.lt.p && console.log("[PUSH] wsSocket.onopen", this.lt);
        var t = { type: "open" };
        this.lt.s.send(JSON.stringify(t)),
          (this.lt.o = setInterval(this.lt.ht.bind(this.lt), 1e3)),
          void 0 != this.lt.k &&
            "true" === this.lt.k.autoplay &&
            this.lt.start();
      }),
      (this.s.onclose = function () {
        !0 === this.p && console.log("[PUSH] wsSocket.onclose", this.lt),
          !0 === this.lt.v
            ? !0 === this.lt.p &&
              console.log("[PUSH] wsSocket.onclose disconnect")
            : (this.lt.S = !0),
          this.lt.ft(this.lt);
      });
  }),
  (H5sRTCPush.prototype.ft = function (t) {
    !0 === t.p && console.log("[PUSH] CleanupWebSocket", t), clearInterval(t.o);
  }),
  (H5sRTCPush.prototype.connect = function (t, s, i, o, n) {
    (this.Ot = t),
      (this.Jt = s),
      (this.Ft = i),
      (this.Mt = o),
      (this.Nt = n),
      !0 === this.p &&
        console.log(
          "[PUSH] videoin:",
          t,
          "codec:",
          s,
          "bitrate:",
          i,
          "resolution:",
          o,
          "audioin:",
          n
        );
    var h,
      c = 1280,
      r = 720;
    "QVGA" == o
      ? ((c = 320), (r = 240))
      : "VGA" == o
      ? ((c = 640), (r = 480))
      : "D1" == o
      ? ((c = 720), (r = 576))
      : "720P" == o
      ? ((c = 1280), (r = 720))
      : "1080P" == o
      ? ((c = 1920), (r = 1080))
      : "4K" == o
      ? ((c = 4096), (r = 2160))
      : "8K" == o && ((c = 7680), (r = 4320)),
      (h = "true" == this.R.audio && { deviceId: { exact: n } });
    try {
      const s = {
        audio: h,
        video: {
          deviceId: { exact: t },
          width: { exact: c },
          height: { exact: r },
        },
      };
      try {
        var a = this;
        navigator.mediaDevices
          .getUserMedia(s)
          .then(function (t) {
            (a.st.srcObject = t), (a.It = t), a.et(a.tt);
          })
          .catch(function (t) {
            alert("[PUSH] getUserMedia failed try HTTPS", e);
          });
      } catch (t) {
        return void alert("[PUSH] getUserMedia failed try HTTPS", t);
      }
    } catch (t) {
      return void (!0 === this.p && console.log(t));
    }
  }),
  (H5sRTCPush.prototype.disconnect = function () {
    if (
      (!0 === this.p && console.log("[PUSH] disconnect", this),
      (this.v = !0),
      clearInterval(this.St),
      null != this.s && (this.s.close(), (this.s = null)),
      this.st && (this.st.src = ""),
      this.U)
    ) {
      try {
        this.U.close();
      } catch (t) {
        !0 === this.p &&
          console.log("[PUSH] close peer connection failed:" + t);
      }
      this.U = null;
    }
    !0 === this.p && console.log("[PUSH] disconnect", this);
  });
export {
  H5sPlayerWS,
  H5sPlayerHls,
  H5sPlayerRTC,
  H5sPlayerAudBack,
  H5sConference,
  H5sRTCPush,
  H5sRTCGetCapability,
};

<template>
  <div class="h5videowrapper h5container">
    <canvas class="canh5video" width=960 height=540 :id="canvasplay"></canvas>
    <video class="h5video videoname" :id="videoid" autoplay webkit-playsinline playsinline></video>
  </div>
</template>

<script>
import {H5sPlayerWS, H5sPlayerHls, H5sPlayerRTC, H5sPlayerAudBack} from "@/assets/h5splayer.js"
import {H5sPlayerCanvas} from "@/assets/linkplayer.js"
import {H5siOS, H5sPlayerCreate} from "@/assets/h5splayerhelper.js"
import { mapState } from 'vuex'
export default {
  name: 'liveplayer',
  props:['h5id', 'h5videoid',"cols","rows","canvasid"],
  data () {
    return {
      h5handler: undefined,  // 视频处理器
      h5handlercavas: undefined,
      currtoken: undefined,
      proto: 'WS',
      audioback: undefined, // 视频内容
      videoname: "", // 视频名称
      canvasdate: "",
      tokenshou: undefined,
      // wathlinkwed:this.$store.state.link,
      videoid: this.h5videoid,
      canvasplay: "canvasplay"+this.h5videoid,
      Shoutwheatclass:"mdi mdi-microphone-off",
      inputtoken: '',
      inputlabel: '',
      streamprofile: ''
    }
  },

  computed: {
    ...mapState('h5s', {
      token: 'token'
    }),
    ...mapState('h5s', {
      wathlinkwed: 'link'
    })
  },

  beforeDestroy () {
    clearInterval(this.canvasdate)
    if (this.h5handler !== undefined) {
      this.h5handler.disconnect();
      delete this.h5handler
      this.h5handler = undefined
    }
    this.currtoken = undefined
  },
  mounted () {
    if (window.ActiveXObject || "ActiveXObject" in window) {
      this.wathlinkwed = 'true'
      console.log("liveviewplay",typeof( this.wathlinkwed), this.wathlinkwed)
    }
    let _this = this
    this.$root.bus.$on('liveplaylink', function (link) {
      _this.wathlinkwed = link
    })
    this.$root.bus.$on('liveplay', function(token, streamprofile, label, name, id) {
      console.log('2233')
      _this.playVideo(token, streamprofile, label, name)
      _this.tokenshou = token;
      console.log("------------", _this.tokenshou)
    })
  },
  methods: {
    playVideo (token, streamprofile, label, name) {
      var videosize = document.querySelector('#'+this.h5id)
      var canvas = document.querySelector('#'+ this.canvasplay)
      console.log('videosize', videosize)
      console.log('canvas', canvas)
      this.inputtoken = token
      this.inputlabel = label
      this.streamprofile = streamprofile
      this.videoname = label
      if (this.h5handler !== undefined) {
        this.h5handler.disconnect();
        delete this.h5handler;
        this.h5handler = undefined
      }
      this.currtoken = token;
      // if (this.wathlinkwed === 'true') {
      //   var confk = this.playClick(this.canvasplay, token, streamprofile)
      //   this.h5handler = new H5sPlayerCanvas(confk)
      //   this.playjkwh(videosize, confk)
      // }
      var confk = this.playClick(this.videoid, token, streamprofile)
      this.h5handler = new H5sPlayerRTC(confk)
      
      // this.h5handler.start()
      // this.playjkwh(videosize, confk)
      this.h5handler.connect()
    },
    playjkwh(videosize, confk) {
      var resizeElement = document.createElement('iframe')
      var _this = this
      resizeElement.style.width = '100%';
      resizeElement.style.height = '100%';
      resizeElement.style.position = 'hidden';
      resizeElement.style.margin = '0';
      resizeElement.style.padding = '0';
      resizeElement.style.border = '0'
      videosize.appendChild(resizeElement)
      resizeElement.contentWindow.onresize = function () {
        if (_this.h5handler !== undefined) {
          _this.h5handler.disconnect()
          delete _this.h5handler;
          _this.h5handler = undefined
          _this.h5handler = new H5sPlayerCanvas(confk)
          _this.h5handler.connect()
        } else {
          console.log(_this.h5handler,"**********")
          return false;
        }
      }
    },
    playClick(playid, token, streamprofile) {
      var wsroot = process.env.WS_HOT_ROOT;
      if(wsroot === undefined) {
        wsroot = window.location.host;
      }
      console.log('wsroot', wsroot)
      let conf = {
        videoid: playid,
        protocol: window.location.protocol,
        host: wsroot,
        streamprofile, streamprofile,
        rootpath: '/',
        token: token,
        hlsver: 'v1',
        session: localStorage.h5stoken
      }
      console.log(conf)
      return conf;
    },
    closeVideo(event) {
      var _this = this
      clearInterval(this.canvasdate);
      if (this.audioback !== undefined) {
        this.audioback.disconnect()
        delete this.audioback
        this.audioback = undefined
        this.Shoutwheatclass="mdi mdi-microphone-off";
      }
      this.videoname = ""
      this.valuebutton = ''
    }
  }
}
</script>

<style lang="less" scoped>


.h5video {
  object-fit: fill;
}

.h5videowrapper{
    padding: 0px;
    height: 100%;
    width: 100%;
}

.h5container {
  position:relative;
  display:inline-block;
}

.canh5video{
  width: 100%;
  height: 100%;
}

.videoname{ 
  /* justify-content: flex-start;
  align-items:flex-end; */
  position: absolute;
  bottom: 0px;
  font-size:14px;
  background-color: rgba(0,0,0,0.3);
  color: #FFFFFF;
  /* width: 37px; */
  padding: 8px 24px;
  /* float:right;
  word-wrap:break-word;
  word-break:nomal; */
  text-align: center;
   
}

</style>
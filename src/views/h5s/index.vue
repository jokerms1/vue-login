<template>
  <div class="h5s">
    <button @click="nodeClick">视频</button>
    <live-player v-bind:id="'h11'" :h5id="'h11'" :h5videoid="'hvideo11'" :canvasid="''" ></live-player>
  </div>
</template>

<script>
import livePlayer from "@/views/components/live-player/index"
import {login, loadDevice} from "@/api/h5s.js"
import { mapMutations } from "vuex";
import * as types from "@/store/types"
export default {
  components: {
    livePlayer
  },

  data () {
    return {
      proto: this.$store.state.rtc,
      h5sData: {
        disabled_me: true,
        label: "rtsp33",
        name: "rtsp33--主码流",
        streamprofile: "main",
        token: "d2cc",
      }
    }
  },

  created () {
    this.init()
    // this.nodeClick()
  },
  

  methods: {
    init () {
      var root = process.env.API_ROOT;
      console.log('root', root)
      login().then(res => {
        if (res.status === 200) {
          // console.log(res.data.strSession)
          this.h5slogin(res.data.strSession)
          // this.h5sData = loadDevice()
        } 
      })
    },
    nodeClick () {
      var root = process.env.API_ROOT
      let _this = this;
      const data = this.h5sData
      let vid = 'h11'
      _this.$root.bus.$emit('liveplay', data.token, data.streamprofile, data.name, data.label, vid);

    },
    ...mapMutations('h5s', ["h5slogin"])
  }
}
</script>

<style lang="less" scoped>
.h5s {
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>
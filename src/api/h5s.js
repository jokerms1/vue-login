import store from '@/store/index'
import {mapState} from 'vuex'
import axios from "axios";
import md5 from "js-md5"
const root = process.env.API_ROOT



var listdatag = [] 
/**
 * 登录h5s平台，获取token值
 */
export function login() {
  const url = root + "/api/v1/Login?user=admin" + "&password=" + md5('12345')
  return axios.get(url)
}


/**
 * 加载设备
 */
export function loadDevice() {
  if (store.state.root === "Operator") {
    return false
  }
  const url = root + "/api/v1/GetDevice?session="+ localStorage.h5stoken;
  axios.get(url).then(result => {
    if(result.status == 200){
    var srcData = [];
    var data=result.data;
    for(var i = 0; i < data.dev.length; i++){
        var item=data.dev[i];
        var srclevel=[];
        srclevel["strToken"]=item.strToken;
        srclevel["strName"]=item.strName;
        loadSrc(srclevel,srcData);
    }
  }
  })
  return listdatag;
}


/**
 * 加载设备目录
 * @param {Object} srclevel 
 * @param {*} srcData 
 */
function loadSrc(srclevel, srcData) {
  const url = root + "/api/v1/GetDeviceSrc?token="+ srclevel.strToken + "&session=" + localStorage.h5stoken;
  axios.get(url).then(res => {
    if (res.status === 200) {
      var data = res.data
      var srcGroup = {children: []}
      srcGroup.label = srclevel.name
      for (let i = 0; i < data.src.length; i++) {
        var item = data.src[i]
        var node = [{
          token: item.strToken,
          streamprofile: "main",
          label: item.strName + "--" + "主码流"
        }, {
          token: item.strToken,
          streamprofile: "sub",
          label: item.strName + "--" + "辅码流"
        }]
        var newItem = {
          token: item.strToken,
          streamprofile: "main",
          label: item.strName,
          name: item.strName + "--" + "主码流",
          children: node,
          disabled_me: false
        }
        srcGroup.children.push(newItem)
      }
      listdatag.push(srcGroup)
    } else {
      return ''
    }
  })
}



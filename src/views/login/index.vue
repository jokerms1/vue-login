<template>
<div class="body_box">
  <head class="fe-head">
    <img src="../../assets/login-header.png" />
  </head>
  <main class="login-body">
    <div class="fe-flex-column login-box">
      <div class="fe-flex-center login-box-head">
        <span class="login-box-title">用户登录</span>
      </div>
      <el-form :model="formInline" :rules="rules" class="fe-flex-column" ref="loginForm">
        <el-form-item prop="name">
          <el-input class="user" v-model="formInline.name" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input class="password" v-model="formInline.password" placeholder="用户密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox label="记住我" name="type"></el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:262px" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
      <!-- 了解插槽的实现功能 -->
      <!-- <MsCard title="newYear">
        <span slot="title">kkkkyyy</span>
      </MsCard>-->
    </div>
  </main>
  <footer class="login-footer fe-flex-center">
    <div class="login-footer-text">苏ICP备16001056号-6版权所有@南京物盟信息技术有限公司</div>
  </footer>
</div>
</template>

<script>
import { mapMutations } from "vuex";
import MsCard from "../components/MsCard";
import MD5 from '@/utils/md5';
export default {
  data () {
    return {
      formInline: {
        name: "",
        password: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  created () {
    // console.log("112233");
    this.getLogin();
  },
  components: {
    MsCard
  },
  methods: {
    handleLogin () {
      this.$refs["loginForm"].validate(valid => {
        if (valid) {
          this.$http
            .post("/farming/user/loginUser?username=admin&password=123456", {
              username: this.formInline.name,
              password: this.formInline.password
            })
            .then(res => {
              console.log(res);
              if (res.data.messageCode === 10000) {
                const result = res.data.resData;
                this.setUserInfo({
                  userName: result.username,
                  id: result.id,
                  nickname: result.nickname,
                  phone: result.phone
                });
                this.$router.push("main");
              } else {
                this.$message({
                  message: "登录失败",
                  type: "warning"
                });
              }
            });
        }
      });
    },
    getLogin () {
      const params = {
        username: "admin",
        passwd: "e10adc3949ba59ab"
      }
      const token = MD5("/openapi/base/loginByPasswd" + JSON.stringify(params));
      console.log(token)
      const url = "/openapi/base/loginByPasswd?token=a6c5ab99eed3b0987194e0e343280ab0";
      this.$http.post(url, {
        username: "admin",
        passwd: "e10adc3949ba59ab",
        vscscrip: "192.168.0.152"
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    ...mapMutations("user", ["setUserInfo"])
  }
};
</script>

<style lang="less" scoped>
.body_box {
  background-size: 100% 100%;
  background-color: white;
  height: 100%;
  position: fixed;
  width: 100%;
}
.fe-head {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  height: 5%;
  padding: 0 44px;
}
.login-body {
  position: relative;
  width: 100%;
  height: 90%;
  background: url("../../assets/login.png") no-repeat center;
  background-size: 100% 100%;
  overflow: hidden;
}
.login-box {
  position: absolute;
  z-index: 2;
  width: 302px;
  height: 312px;
  left: 60%;
  top: 20%;
  background: white;
  border-radius: 3px;
  padding: 0px 20px;
  box-sizing: border-box;
}
.login-box-head {
  width: 100%;
  height: 75px;
}
.login-box-title {
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}

.login-footer {
  position: relative;
  height: 5%;
  background: white;
}
.login-footer-text {
  font-size: 12px;
  font-family: PingFang SC;
  /* font-weight: 500; */
  color: rgba(153, 153, 153, 1);
}
.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
}
.user /deep/ .el-input__inner {
  background: url("../../assets/user.png") no-repeat 0 0;
  background-size: 15px 15px;
  background-position: 15px 12px;
  text-indent: 20px;
}
.password /deep/ .el-input__inner {
  background: url("../../assets/password.png") no-repeat 0 0;
  background-size: 15px 15px;
  background-position: 15px 12px;
  text-indent: 20px;
}

/deep/ .el-form-item:nth-child(3) {
  margin-bottom: 10px;
}
/deep/ .el-form-item:nth-child(4) {
  margin-bottom: 0px;
}
/deep/ .el-form-item__content {
  line-height: 30px;
  position: relative;
  font-size: 14px;
}
</style>

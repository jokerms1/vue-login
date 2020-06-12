<template>
<div>
  <div class="fe-layout">
    <head class="fe-head main-head">
      <div class="fe-flex-center">
        <div style="width:90px">用户名</div>
        <el-input class="fe-ml" placeholder="请输入用户名"></el-input>
        <el-button class="fe-ml" type="primary" icon="el-icon-search">搜索</el-button>
      </div>
      <div class="fe-flex-center">
        <el-button type="primary" icon="el-icon-circle-plus-outline">添加</el-button>
        <el-button class="fe-ml" type="primary" icon="el-icon-delete">删除</el-button>
      </div>
    </head>
    <div class="fe-px fe-pb">
      <el-table ref="multipleTable" tooltip-effect="dark" style="width: 100%" :data="userData" :height="tableHeight">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="序号" width="120"></el-table-column>
        <el-table-column prop="nickname" label="账号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="username" label="用户名" show-overflow-tooltip></el-table-column>
        <el-table-column prop="phone" label="手机号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="createtime" label="日期" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div style="width:120px" class="fe-head">
              <i @click="dialogVisble = true" class="el-icon-edit"></i>
              <i class="el-icon-share"></i>
              <i class="el-icon-delete"></i>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
  <el-dialog title="编辑用户" :visible.sync="dialogVisble" width="400px">
    <el-form :inline="true" :rules="rules" :label-position="labelPosition" label-width="65px" class="fe-flex-center fe-flex-column" no-padding>
      <el-form-item label="账号" prop="account">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dislog-footer">
      <el-button @click="dialogVisble = false">取消</el-button>
      <el-button type="primary">确定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
export default {
  computed: {
    tableHeight () {
      let height = `calc(100vh - 82px)`;
      return height;
    }
  },
  created () {
    this.getUserData();
  },

  data () {
    return {
      labelPosition: 'right',
      tableData: [
        {
          name: 12222,
          address: 1
        }
      ],
      rules: {
        account: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        username: [{ required: true, message: "请输入密码", trigger: "blur" }],
        phone: [{ required: true, message: "请输入手机号", trigger: "blur" }]
      },
      userData: [],
      dialogVisble: false
    };
  },
  methods: {
    getUserData () {
      this.$http
        .post("/farming/user/page?username=admin&pageNum=1&pageSize=5", {
          username: "admin",
          pageNum: 1,
          pageSize: 5
        })
        .then(res => {
          // console.log(res);
          if (res.data.messageCode === 10000) {
            this.userData = res.data.resData.data;
          } else {
            this.$message({
              message: "获取数据失败",
              type: "warning"
            });
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
.main-head {
  height: 80px;
}
/deep/ .el-dialog__title {
  line-height: 20px;
  font-size: 16px;
  color: white;
}
/deep/ .el-table {
  position: relative;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  width: 100%;
  max-width: 100%;
  font-size: 14px;
  border: 1px solid LightSkyBlue;
}
/deep/ .el-table th {
  overflow: hidden;
  -ms-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background: LightSkyBlue;
}
/deep/ .el-dialog__header {
  padding: 20px 20px 20px;
  background: #409eff;
}
/deep/ .el-dialog__headerbtn .el-dialog__close {
  color: white;
}
/deep/ .el-form-item:last-child {
  margin-bottom: 0px;
}
/deep/ .el-dialog__headerbtn {
  position: absolute;
  top: 23px;
  right: 20px;
  padding: 0;
  background: 0 0;
  border: none;
  outline: 0;
  cursor: pointer;
  font-size: 16px;
}
</style>

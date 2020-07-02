<template>
  <div>
    <!-- <div class="fe-layout ms">
    <head class="fe-head main-head">
      <div class="fe-flex-center">
        <div style="width:90px">用户名</div>
        <el-input class="fe-ml" placeholder="请输入用户名"></el-input>
        <el-button class="fe-ml" type="primary" icon="el-icon-search">搜索</el-button>
      </div>
      <div class="fe-flex-center">
        <el-button icon="el-icon-circle-plus-outline" @click="changeTheme('theme1')">修改</el-button>
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
    </div>-->
    <!-- <el-dialog class="ms" title="编辑用户" :visible.sync="dialogVisble" width="400px">
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
    </el-dialog>-->
    <wcp-tree :data="data" :props="defaultProps" default-expand-all style="margin-left:10px" show-checkbox>
    <!-- <el-tree :data="data" :props="defaultProps" default-expand-all style="margin-left:10px" show-checkbox></el-tree> -->
      <!-- <ul slot-scope="{ node, data }">
        <span v-if="data.children" style="color:#FFFFFF;font-size:15px;">{{ node.label }}</span>
        <div v-else class="fe-flex-center" style="height:32px;font-size:13px;">
          <div class="circle"></div>
          <span style="margin-left:5px;">{{node.label}}</span>
        </div>
      </ul>-->
    </wcp-tree>
    <tree-transfer
      ref="wl-tree-transfer"
      filter
      high-light
      default-transfer
      :mode="mode"
      :title="title"
      :to_data="toData"
      :from_data="fromData"
      :filterNode="filterNode"
      :defaultProps="defaultProps"
      :defaultCheckedKeys="defaultCheckedKeys"
      :defaultExpandedKeys="[2,3]"
      @right-check-change="rightCheckChange"
      @left-check-change="leftCheckChange"
      @removeBtn="remove"
      @addBtn="add"
      height="540px"
      node_key="id"
    >
      <span slot="title-right" class="my-title-right" @click="handleTitleRight">自定义内容</span>
    </tree-transfer>
  </div>
</template>

<script>
import WcpTree from "@/views/components/tree/tree"
import TreeTransfer from '@/views/components/tree-transfer/tree-transfer'
export default {
  computed: {
    tableHeight () {
      let height = `calc(100vh - 98px)`;
      return height;
    },
    title() {
      if (this.mode == "transfer") {
        return ["源列表", "目标列表"];
      } else {
        return ["通讯录", "收件人", "抄送人", "密送人"];
      }
    }
  },
  created () {
    this.getUserData();
  },

  mounted() {
    setTimeout(() => {
      this.defaultCheckedKeys = [1];
    }, 1000);
  },

  components: {
    WcpTree,
    TreeTransfer
  },

  data () {
    return {
      labelPosition: "right",
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
      dialogVisble: false,
      data: [{
        label: '资源管理',
        children: [{
          label: '资源组管理',
        }, {
          label: '视频资源管理',
          children: [
            {
              label: '1111',
              children: [
                {
                  label: '2222'
                }
              ]
            }
          ]
        }, {
          label: '报警资源管理',
        }, {
          label: '设备管理',
        }, {
          label: '服务器管理',
          children: [
            {
              label: '资源组管理'
            }
          ]
        }]
      }, {
        label: '用户管理',
        children: [{
          label: '角色管理',
        }, {
          label: '用户管理',
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      mode: "transfer", // transfer addressList
      defaultProps: { label: "name", children: "children" },
      fromData: [
        {
          id: 1,
          pid: 0,
          name: "测试左侧",
          children: [
            {
              id: 2,
              pid: 1,
              name: "水电费是打发斯蒂芬斯蒂芬gas噶水电费噶地方死光光",
              // disabled: true,
              children: []
            },
            {
              id: 3,
              pid: 1,
              name: "11-3",
              children: []
            }
            /*    {
              id: 4,
              pid: 1,
              name: "11-4",
              children: [
                {
                  id: 5,
                  pid: 4,
                  name: "11-5",
                  children: [
                    {
                      id: 111,
                      pid: 5,
                      name: "11-111"
                    }
                  ]
                },
                {
                  id: 6,
                  pid: 4,
                  name: "11-6",
                  children: []
                }
              ]
            } */
          ]
        },
        {
          id: 7127,
          pid: 0,
          name: "debug",
          children: [
            {
              id: 71272,
              pid: 7127,
              name: "debug22",
              // disabled: true,
              children: []
            },
            {
              id: 71273,
              pid: 7127,
              name: "debug11",
              children: []
            }
          ]
        }
      ], // 穿梭框 - 源数据 - 树形
      toData: [
        /*  {
          id: 1,
          pid: 0,
          name: "测试左侧",
          children: [
            {
              id: 2,
              pid: 1,
              name: "水电费是打发斯蒂芬斯蒂芬gas噶水电费噶地方死光光",
              children: [
                {
                  id: 22222222,
                  pid: 2,
                  name: "2222222222"
                }
              ]
            }
          ]
        } */
      ], // 穿梭框 - 目标数据 - 树形
      fromArray: [
        {
          id: "1",
          name: "1",
          pid: "0"
        },
        {
          id: "2",
          name: "2",
          pid: "0"
        },
        {
          id: "1-1",
          name: "1-1",
          pid: "1"
        },
        {
          id: "1-2",
          name: "1-2",
          pid: "1"
        },
        {
          id: "1-1-1",
          name: "1-1-1",
          pid: "1-1"
        },
        {
          id: "1-1-1-1",
          name: "1-1-1-1",
          pid: "1-1-1"
        },
        {
          id: "2-1",
          name: "2-1",
          pid: "2"
        },
        {
          id: "2-2",
          name: "2-2",
          pid: "2"
        }
      ],
      toArray: [],
      defaultCheckedKeys: [] // 左侧默认选中数据
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
    },
    changeTheme (theme) {
      window.document.documentElement.setAttribute("data-theme", "theme3");
    },
    // 清除选中
    clearChecked(){
      this.$refs['wl-tree-transfer'].clearChecked()
    },
    // 自定义筛选函数
    filterNode(value, data, where) {
      console.log(value, data, where);
      if (!value) return true;
      return data[this.defaultProps.label].indexOf(value) !== -1;
    },
    // 懒加载回调
    lazyFn(node, resolve) {
      setTimeout(() => {
        resolve([
          {
            id: 71272,
            pid: 7127,
            name: "debug22",
            // disabled: true,
            children: []
          },
          {
            id: 71273,
            pid: 7127,
            name: "debug11",
            children: []
          }
        ]);
      }, 500);
    },
    // 切换模式 现有树形穿梭框模式transfer 和通讯录模式addressList
    changeMode() {
      if (this.mode == "transfer") {
        this.mode = "addressList";
      } else {
        this.mode = "transfer";
      }
    },
    // 添加按钮
    add(fromData, toData, obj) {
      // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象
      // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
      console.log("fromData:", fromData);
      console.log("toData:", toData);
      console.log("obj:", obj);
    },
    // 移除按钮
    remove(fromData, toData, obj) {
      // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象
      // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
      console.log("fromData:", fromData);
      console.log("toData:", toData);
      console.log("obj:", obj);
    },
    // 左侧源数据选中事件
    leftCheckChange(nodeObj, treeObj, checkAll) {
      console.log(nodeObj);
      console.log(treeObj);
      console.log(checkAll);
    },
    // 右侧目标数据选中事件
    rightCheckChange(nodeObj, treeObj, checkAll) {
      console.log(nodeObj);
      console.log(treeObj);
      console.log(checkAll);
    },
    // 自定义节点 仅树形结构支持
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.append(data)}
            >
              Append
            </el-button>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.remove(node, data)}
            >
              Delete
            </el-button>
          </span>
        </span>
      );
    },
    // 标题自定义区点击事件
    handleTitleRight() {
      alert("标题自定义区点击事件");
    }
  }
};
</script>

<style lang="scss">
.ms {
  .main-head {
    height: 80px;
  }
  .test-bg {
    width: 100px;
    height: 100px;
    @include bg_color($background-color-theme);
    @include font_color($font-color-theme);
  }
  /deep/ .el-dialog__title {
    line-height: 20px;
    font-size: 16px;
    // color: white;
    @include bg_color($background-color-theme);
    @include font_color($font-color-theme);
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
    // background: LightSkyBlue;
    @include bg_color($background-color-theme);
    @include font_color($font-color-theme);
  }
  /deep/ .el-dialog__header {
    padding: 20px 20px 20px;
    // background: #409eff;
    @include bg_color($background-color-theme);
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
  // /deep/ .el-button {
  //   display: inline-block;
  //   line-height: 1;
  //   white-space: nowrap;
  //   cursor: pointer;
  //   @include bg($background-color-theme);
  //   border: 1px solid #dcdfe6;
  //   @include font_color($font-color-theme);
  //   -webkit-appearance: none;
  //   text-align: center;
  //   -webkit-box-sizing: border-box;
  //   box-sizing: border-box;
  //   outline: 0;
  //   margin: 0;
  //   -webkit-transition: 0.1s;
  //   transition: 0.1s;
  //   font-weight: 500;
  //   padding: 12px 20px;
  //   font-size: 14px;
  //   border-radius: 4px;
  // }
  .fe-ml {
    margin-left: 10px;
  }
}
// .main-head {
//   height: 80px;
// }
// .test-bg {
//   width: 100px;
//   height: 100px;
//   @include bg_color($background-color-theme);
//   @include font_color($font-color-theme);
// }
// /deep/ .el-dialog__title {
//   line-height: 20px;
//   font-size: 16px;
//   // color: white;
//   @include font_color($font-color-theme);
// }
// /deep/ .el-table {
//   position: relative;
//   overflow: hidden;
//   -webkit-box-sizing: border-box;
//   box-sizing: border-box;
//   -webkit-box-flex: 1;
//   -ms-flex: 1;
//   flex: 1;
//   width: 100%;
//   max-width: 100%;
//   font-size: 14px;
//   border: 1px solid LightSkyBlue;
// }
// /deep/ .el-table th {
//   overflow: hidden;
//   -ms-user-select: none;
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   user-select: none;
//   // background: LightSkyBlue;
//   @include bg_color($background-color-theme);
// }
// /deep/ .el-dialog__header {
//   padding: 20px 20px 20px;
//   // background: #409eff;
//   @include bg_color($background-color-theme);
// }
// /deep/ .el-dialog__headerbtn .el-dialog__close {
//   color: white;
// }
// /deep/ .el-form-item:last-child {
//   margin-bottom: 0px;
// }
// /deep/ .el-dialog__headerbtn {
//   position: absolute;
//   top: 23px;
//   right: 20px;
//   padding: 0;
//   background: 0 0;
//   border: none;
//   outline: 0;
//   cursor: pointer;
//   font-size: 16px;
// }
.my-title-right {
  float: right;
  font-size: 12px;
  cursor: pointer;
}
</style>

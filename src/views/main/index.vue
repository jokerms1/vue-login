<template>
  <div class="fe-p">
    <div class="fe-layout">
      <div class="fe-head">
        <div class="fe-flex-center">
          <div style="width:90px">用户名</div>
          <el-input class="fe-ml" placeholder="请输入用户名"></el-input>
          <el-button class="fe-ml" type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <div class="fe-flex-center">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button class="fe-ml" type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </div>
      <div class="fe-px fe-pb">
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="日期" width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="序号" width="120"></el-table-column>
          <el-table-column prop="address" label="账号" show-overflow-tooltip></el-table-column>
          <el-table-column prop="address" label="用户名" show-overflow-tooltip></el-table-column>
          <el-table-column prop="address" label="手机号" show-overflow-tooltip></el-table-column>
          <el-table-column prop="address" label="日期" show-overflow-tooltip></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope"></template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>

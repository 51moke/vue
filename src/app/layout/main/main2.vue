<template>
  <div class="main2">

    <el-container>
      <el-aside width="auto">
        <slot name="aside"></slot>
      </el-aside>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom:20px;">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <slot name="main"></slot>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss">
.main2 {
  height: 100%;
  .el-header {
    background-color: #3b4453;
    color: #333;
    text-align: center;
  }
  .el-footer {
    height: auto !important;
  }
  .el-menu {
    border: none;
  }
  .el-aside {
    background-color: #3b4453;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
  }
  .el-header {
    padding: 0;
  }
  .el-container {
    height: inherit;
  }
}
</style>

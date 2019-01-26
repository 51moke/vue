<template>
  <div class="main1">

    <el-container>
      <el-header><slot name="header"></slot></el-header>
      <el-container>
        <el-aside width="auto"><slot name="aside"></slot></el-aside>
        <el-container>
          <el-main><slot name="main"></slot></el-main>
          <el-footer><slot name="footer"></slot></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
.main1 {
  height: 100%;
  .el-header {
    background-color: #3b4453;
    color: #333;
    text-align: center;
  }
  .el-footer{
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

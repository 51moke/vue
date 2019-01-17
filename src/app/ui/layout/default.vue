<template>
  <div class="default">
    <el-container>
      <el-header>
        <slot name="header"></slot>
      </el-header>
      <el-container>
        <el-aside width="auto">
          <slot name="aside"></slot>
        </el-aside>
        <el-main>
          <slot name="main"></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
.default {
  height: 100%;
  .el-header {
    background-color: #3b4453;
    color: #333;
    text-align: center;
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
    // background-color: #e9eef3;
    color: #333;
  }
  .el-header {
    padding: 0;
  }
  .el-container {
    height: inherit;
  }
}
</style>

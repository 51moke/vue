<template>
  <div class="default">
    <!-- <div>
      <h1>左边</h1>
      <slot name="demo1"></slot>
    </div>
    <div>
      <h1>右边</h1>
      <slot name="demo2"></slot>
    </div> -->
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

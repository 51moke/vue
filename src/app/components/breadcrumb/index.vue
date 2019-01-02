<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item,index) in BreadcrumbList" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

</template>
<script>
export default {
  computed: {
    BreadcrumbList () {
      console.log(this.$store.state.system.Breadcrumb, 'Breadcrumb')
      return this.$store.state.system.Breadcrumb
    }
  }
}
</script>
<style>
.el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    font-weight: 400;
    color: white;
    cursor: text;
}
.el-breadcrumb {
    font-size: 14px;
    line-height:60px;
  }
  .el-breadcrumb__item .el-breadcrumb__inner {
    color: #fff;
    display: inline-block;
  }
</style>

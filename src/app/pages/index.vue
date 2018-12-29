<template>
  <main-layout>
    <template slot="header">
      <Header />
    </template>
    <template slot="aside">
      <Aside />
    </template>
    <template slot="main">
      <div class="main-con">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view/>
      </div>

    </template>
    <template slot="footer">
      <Footer/>
    </template>
  </main-layout>
</template>

<script>

import main from '@ui/layout/index.js'
import Aside from '@components/menu'
import Header from '@components/header'
import Footer from '@components/footer'
import Table from '@modules/Table/table'
import demo from '@modules/demo'
const mainLayout = main()

export default {
  name: 'Index',
  components: {
    mainLayout,
    Aside,
    Header,
    Footer,
    Table,
    demo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main-con {
  width: -webkit-fill-available;
  height: 95%;
  margin-bottom: 20px;
}
.el-main {
  background: #f8f8f8 !important;
  padding: 20px;
}
.el-tabs__new-tab {
  margin-right: 30px;
}
.el-tabs__nav-wrap {
  margin-bottom: 0 !important;
}
li.el-menu-item,
.el-submenu .el-submenu__title {
  border-left: 2px solid #3b4453;
}
li.el-menu-item:hover,
.el-submenu .el-submenu__title:hover {
  color: #409eff !important;
  border-left: 2px solid #409eff !important;
}
li.el-menu-item:hover i,
.el-submenu .el-submenu__title:hover i {
  color: inherit;
}
.el-submenu .el-menu-item:hover {
  color: #409eff !important;
  border-left: 2px solid #3b4453 !important;
}
</style>

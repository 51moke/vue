<template>
  <div class="aside" :class="{width:isCollapse}">
    <el-menu background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"  :collapse-transition="false" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <!-- <span slot="title">分组一</span> -->
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  computed: {
    isCollapse () {
      console.log('数据更新了')
      // this.$myMethod('************((((((((((((((((')
      return this.$store.state.layout.isCollapse
    }
  }
}
</script>
<style lang="scss">
.aside {
  overflow-x: hidden;
  overflow-y: auto;
  width: 200px;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  &.width {
    width: 64px;
  }
  .el-menu{
    i:first-of-type:before{
      color: #fff;
    }
  }
  .el-submenu__title{
    padding-left: 20px !important;
  }
}
</style>

<template>
  <div class="header">
    <div class="logoBox" :class="{width:isCollapse}">
      <div class="logo" v-if="!isCollapse">上海恺域信息科技</div>
      <div class="icon" @click="toggleMenu"><img v-show="isCollapse" src="./icon/show.png" /><img v-show="!isCollapse" src="./icon/hide.png" /></div>
    </div>
    <div class="header-con">
      <div class="txt">您好，admin 欢迎您！</div>
      <div class="photo">
        <el-dropdown>
          <el-button type="primary"> </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>注销登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

    </div>

  </div>
</template>

<script>
export default {

  methods: {
    toggleMenu () {
      // this.isShow = !this.isShow
      // this.isCollapse = this.isShow
      this.$store.dispatch('layout/changeIsCollapse')
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
<style lang="scss" scoped>
.header {
  height: inherit;
  line-height: 100%;
  display: flex;
  & > div {
    height: inherit;
    line-height: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .logoBox {
    width: 200px;
    background: #2a2d33;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo {
      /* margin-right: 10px; */
      flex: 3;
      justify-content: center;
      align-items: center;
    }
    .icon {
      flex: 1;
      height: 100%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.width {
      width: 64px;
    }
  }

  .header-con {
    flex: 1;
    justify-content: flex-end;
    color: #fff;
    font-size: 12px;
    line-height: 100%;
    display: flex;
    & > div {
    }
    .photo {
      width: 48px;
      height: 48px;
      background: white;
      border-radius: 50%;
      float: right;
      margin-right: 20px;
      margin-left: 10px;
    }
  }
  .el-button--primary {
    width: 48px;
    height: 48px;
    background: none;
    border-radius: 50%;
  }
}
</style>

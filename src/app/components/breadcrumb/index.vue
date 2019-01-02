<template>
  <div class="breadcrumb">
    <!-- <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item,index) in BreadcrumbList" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb> -->
    <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList" v-if="item.meta.title" :key="item.path">

        <a v-if="index==0"  @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
         <span v-else  class="no-redirect">{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
  </div>

</template>
<script>
import pathToRegexp from 'path-to-regexp'
export default {
  data () {
    return {
      levelList: null
    }
  },
  methods: {
    pathCompile (path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink (item) {
      /* const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      } */
      // this.$router.push(this.pathCompile(path))
      this.$router.push('/dashBoard')
    },
    getBreadcrumb () {
      let matched = this.$route.matched.filter(item => {
        if (item.name) {
          return true
        }
      })
      /* const first = matched[0]
      if (first && first.name !== 'dashBoard') {
        matched = [
          { path: '/dashBoard', meta: { title: '首页' } }
        ].concat(matched)
      } */
      this.levelList = matched
      console.log(this.levelList, 'mmm')
    }
  },
  created () {
    this.getBreadcrumb()
  },
  watch: {
    $route (to, from) {
      this.getBreadcrumb()
      console.log(to.path, ',,,', this.navList)
    }
  },
  computed: {
    navList () {
      console.log(JSON.parse(JSON.stringify(this.$store.state.system.routerList)), '////////////')
      return (this.$store.state.system.routerList[0] && this.$store.state.system.routerList[0].children) || []
    },
    BreadcrumbList () {
      console.log(this.$store.state.system.Breadcrumb, 'Breadcrumb')
      return this.$store.state.system.Breadcrumb
    }
  }
}
</script>
<style>
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
  color: #fff;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
  font-weight: 400;
  color: white;
  cursor: text;
}
.el-breadcrumb {
  font-size: 14px;
  line-height: 60px;
}
.el-breadcrumb__item .el-breadcrumb__inner {
  color: #fff;
  display: inline-block;
}
</style>

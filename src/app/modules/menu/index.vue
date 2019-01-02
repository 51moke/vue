<template>
  <div class="menu" :class="{width:isCollapse}">
    <el-col :span="24" style="text-align: left;">
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router background-color="#3b4453" text-color="#fff" active-text-color="#2c94fe" :collapse-transition="false" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <template v-for="(item,i) in navList">
          <el-menu-item @click="showTitle(item)" v-if="!item.children.length" :index="item.path" :key="i">
            <i class="fa" :class=" item.meta.icon"></i>
            <span slot="title"> {{item.meta.title}}</span>
          </el-menu-item>
          <el-submenu v-else :index="item.path" :key="i">
            <template slot="title">
              <i class="fa" :class="item.meta.icon"></i>
              <span>{{item.meta.title}}</span>
            </template>
            <template v-for="(item2,j) in item.children">
              <el-menu-item @click="showTitle(item,item2)" v-if="!item2.children.length" :index="item2.path" :key="j">{{item2.meta.title}}</el-menu-item>
              <el-submenu v-else :index="item2.path" :key="j">
                <span slot="title">{{item2.meta.title}}</span>
                <el-menu-item @click="showTitle(item,item2)" v-for="(item3,k) in item2.children" :key="k" :index="item3.path">{{item3.meta.title}}</el-menu-item>
              </el-submenu>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </el-col>
  </div>
</template>

<script>

export default {

  data () {
    return {

    }
  },
  mounted () {
    this.$store.dispatch('system/getList')
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath, 'open')
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath, 'close')
    },
    showTitle (item, subitem) {
      // console.log(item.meta.title, subitem && subitem.meta.title)
      var arr = []
      arr.push(item.meta.title)
      if (subitem && subitem.meta.title) {
        arr.push(subitem.meta.title)
      }
      // console.log(arr)
      this.$store.dispatch('system/getBreadcrumb', arr)
    }
  },

  computed: {
    isCollapse () {
      // console.log(this.$store.state.layout.isCollapse, 'this.$store.state.layout.isCollapse')
      return this.$store.state.layout.isCollapse
    },
    navList () {
      // console.log(JSON.parse(JSON.stringify(this.$store.state.system.routerList)), '////////////')
      return (this.$store.state.system.routerList[0] && this.$store.state.system.routerList[0].children) || []
    }
  }

}
</script>
<style lang="scss">
.menu {
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
  .el-submenu__title {
    padding-left: 20px !important;
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
  .fa {
    margin-right: 10px;
  }
}
</style>

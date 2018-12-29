<template>
  <div v-if="!!navList.length" class="menu-aside">
    <template v-for="(item,i) in navList">
        <el-menu-item v-if="!item.children.length" :index="item.path" :key="i">
          <i class="fa" :class=" item.meta.icon"></i>
          <span slot="title"> {{item.meta.title}}</span>
        </el-menu-item>
        <el-submenu v-else :index="item.path" :key="i">
          <template slot="title">
            <i class="fa" :class="item.meta.icon"></i>
            <span>{{item.meta.title}}</span>
          </template>
          <template v-for="(item2,j) in item.children">
            <el-menu-item v-if="!item2.children.length" :index="item2.path" :key="j">{{item2.meta.title}}</el-menu-item>
            <el-submenu v-else :index="item2.path" :key="j">
              <span slot="title">{{item2.meta.title}}</span>
              <el-menu-item v-for="(item3,k) in item2.children" :key="k" :index="item3.path">{{item3.meta.title}}</el-menu-item>
            </el-submenu>
          </template>
        </el-submenu>
      </template>

  </div>
</template>

<script>

export default {
  name: 'menu-aside',
  props: {
    navList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {

    }
  },
  mounted () {
    console.log(this.$route, 'path')
    this.$store.dispatch('system/getList')
  }

}
</script>

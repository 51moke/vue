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
import EditableTabs from '@components/editableTabs'

const mainLayout = main()

export default {
  name: 'Index',
  components: {
    mainLayout,
    Aside,
    Header,
    Footer,
    Table,
    EditableTabs

  },
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  },
  computed: {
    isCollapse () {
      return this.$store.state.layout.isCollapse
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.main-con {
  width: -webkit-fill-available;
  height: 95%;
  margin-bottom: 20px;
  position: relative;
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

</style>

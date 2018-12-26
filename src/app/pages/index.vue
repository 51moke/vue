<template>
  <main-layout>
    <template slot="header">
      <Header />
    </template>
    <template slot="aside">
      <Aside />
    </template>
    <template slot="main">
      <Table />
    </template>
    <template slot="footer">
      <Footer/>
    </template>
  </main-layout>
</template>

<script>

import main from '@layout/main'
import Aside from '@modules/main/Aside'
import Header from '@modules/main/Header'
import Footer from '@modules/main/Footer'
import Table from '@modules/Table/table'
const mainLayout = main()

export default {
  name: 'Index',
  components: {
    mainLayout,
    Aside,
    Header,
    Footer,
    Table
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

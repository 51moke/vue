<template>
  <main-layout>
    <template slot="demo1">
      <demo />
    </template>
    <template slot="demo2">
      <demo />
    </template>

  </main-layout>
</template>

<script>
import Demo from '@modules/Demo'
import main from '@layout/main'
const mainLayout = main()

export default {
  name: 'Index',
  components: {
    Demo,
    mainLayout
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

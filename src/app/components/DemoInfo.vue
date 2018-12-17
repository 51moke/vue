<template>
  <div v-if="item">
    <h3>当前选择</h3>
    <h1>姓名：{{ item.name }}</h1>
    <h1>年龄：{{ item.age }}</h1>
  </div>
</template>

<script>
export default {
  // template: `<div>标题：{{ item&&item.title }}</div>`,
  computed: {
    item () {
      return this.$store.state.demo.item
    }
  }
}
</script>
<style scoped>

</style>

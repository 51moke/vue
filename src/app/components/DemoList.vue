<template>
  <div>
    <ul>
      <li
        v-for="item in itemList"
        :key="item.id"
        @click="getById(item);"
      >
        {{ item.name }} - {{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    itemList () {
      return this.$store.state.demo.itemList
    }
  },
  methods: {
    getById (item) {
      this.$store.dispatch('demo/getById', item.id)
    }
  }
}
</script>
<style scoped>
li{cursor: pointer;}
</style>

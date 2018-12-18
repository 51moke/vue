<template>
  <div>
    <div v-if="loading">loading...</div>
    <ul v-if="!loading">
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
  data () {
    return {loading: true}
  },
  mounted () {
    this.$store.dispatch('demo/getList')
      .then(res => {
        // console.log('接口完成', res)
        this.loading = false
      })
      .catch(err => {
        console.log('接口异常', err)
      })
  },
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

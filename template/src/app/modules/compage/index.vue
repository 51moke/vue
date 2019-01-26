<!-- 通用分页组件-->
<template>
    <el-pagination background @size-change="pageSizeChang" @current-change="pageNumChang" :current-page="pageParam.pageNum" :page-sizes="opts" :page-size="pageParam.pageSize" :layout="layout" :total="pageParam.total">
    </el-pagination>
</template>
<script>
export default {
  data () {
    return {
      opts: [20, 50, 80, 100]
    }
  },
  props: {
    pageParam: {
      type: Object,
      default: () => {
        return {
          pageNum: 1,
          pageSize: 20,
          total: 0
        }
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    }
  },
  computed: {},
  mounted: function () {},
  methods: {
    pageSizeChang: function (ps) {
      let pn = this.pageParam.page
      this.chang(pn, ps)
    },
    pageNumChang: function (pn) {
      let ps = this.pageParam.pageSize
      this.chang(pn, ps)
    },
    chang: function (pn, ps) {
      let p = {
        pageNum: pn,
        pageSize: ps
      }
      this.$emit('page-chang', p)
    }
  }
}
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>

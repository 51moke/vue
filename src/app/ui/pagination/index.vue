<template>

  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
  </el-pagination>
</template>
<script>
export default {
  props: ['current-page', 'page-sizes', 'page-size', 'total'],
  methods: {
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
      this.$emit('handleSizeChange', val)
    },
    handleCurrentChange (val) {
      // console.log(`当前页: ${val}`)
      this.$emit('handleCurrentChange', val)
    }
  }
}
</script>

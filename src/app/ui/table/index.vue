  <template>
  <div class="mytable">
    <el-table size="small" :data="userInfo.itemList" style="width: 100%"  height="440">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
    <div class="block" style="margin-top:10px">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="userInfo.currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="userInfo.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="userInfo.total">
      </el-pagination>
    </div>
  </div>

</template>
<script>
let _pageSize = 0
let _currentPage = 0
let _timeout
// console.log(_pageSize)
export default {
  name: 'mytable',
  data () {
    return {
    }
  },
  mounted () {
    // console.log(1)
    this.getList()
  },
  methods: {
    getList (page = 1, pageSize = 10) {
      this.$store.dispatch('user/getList', {page, pageSize})
    },
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
      _pageSize = val
      _timeout = setTimeout(() => {
        // console.log('%%%%%%%%%%%%%%%')
        this.getList(_currentPage, _pageSize)
      })
    },
    handleCurrentChange (val) {
      // console.log(`当前页: ${val}`, _pageSize)
      _currentPage = val
      clearTimeout(_timeout)
      this.getList(val, _pageSize)
    }
  },
  computed: {
    userInfo () {
      _pageSize = this.$store.state.user.userInfo.pageSize
      return this.$store.state.user.userInfo
    },
    orderHight () {
      let cH = document.body.clientHeight
      if (cH) {
        let H = cH - 60
        console.log(H)
        return H
      }
    }

  }

}
</script>
<style lang="scss">
.el-table th {
  text-align: center;
}
</style>

  <template>
  <div class="list">
    <myTable :tableData="userInfo&&userInfo.itemList" :columns="columns"/>
    <pagination v-on:handle-sizeChange="handleSizeChange" v-on:handle-currentChange="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total"/>
  </div>

</template>
<script>
import pagination from '@ui/pagination'
import myTable from '@ui/table'
let _pageSize = 0
let _currentPage = 0
let _timeout
// console.log(_pageSize)
export default {
  name: 'list',
  components: {
    pagination, myTable
  },
  data () {
    return {
      currentPage: _currentPage,
      pageSizes: [10, 20, 30, 40],
      pageSize: _pageSize,
      total: 98,
      columns: [
        {
          id: '1',
          label: '姓名',
          prop: 'name',
          width: 'auto'
        },

        {
          id: '2',
          label: '日期',
          prop: 'date',
          width: 'auto'
        },
        {
          id: '3',
          label: '地址',
          prop: 'address',
          width: 'auto'
        }

      ]
    }
  },
  mounted () {
    // console.log(1)
    this.getList()
    console.log(this.userInfo, 'userInfo')
  },
  methods: {
    getList (page = 1, pageSize = 10) {
      this.$store.dispatch('user/getList', {page, pageSize})
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      _pageSize = val
      _timeout = setTimeout(() => {
        // console.log('%%%%%%%%%%%%%%%')
        this.getList(_currentPage, _pageSize)
      })
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`, _pageSize)
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

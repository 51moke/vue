<template>
  <div class="table">

    <list-page :queryParam='queryParam' :data="itemList"
            :columns="columns" :queryValue="testParam" :funcList='funcList'   @query="loadData"></list-page>
    <!-- <el-search-table-pagination
    url="example.xxx.com/list"
    :columns="columns"
    :formOptions="formOptions">
  </el-search-table-pagination> -->

  </div>
</template>
<script>
import listPage from '@modules/listPage'

export default {
  components: {
    listPage
  },
  data () {
    return {
      testParam: {
        name: '测试名字',
        total: 100,
        pageNum: 1,
        pageSize: 15
      },
      itemList: [],
      r: {},
      queryParam: {

        name: {
          type: 'text',
          title: '名称',
          placeholder: '名称'
        },
        type: {
          type: 'text',
          title: '类型',
          placeholder: '类型'
        },
        date: {
          type: 'date',
          title: '时间',
          placeholder: '时间'
        },
        s: {
          type: 'text',
          title: '名称',
          placeholder: '名称'
        },
        t: {
          type: 'date',
          title: '时间',
          placeholder: '时间'
        }
        // y: {
        //   type: 'text',
        //   title: '名称',
        //   placeholder: '名称'
        // }

      },
      funcList: [
        {
          title: '新增',
          key: 'transferSelf',
          type: 'primary'
        },
        {
          title: '删除',
          key: 'transferEmployee',
          type: 'warning'
        }

      ],
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'

        }, {
          title: '姓名',
          key: 'name',
          align: 'center'
        },
        {
          title: '日期',
          key: 'date',
          align: 'center'

        }, {
          title: '地址',
          key: 'address',
          align: 'center'

        }]
    }
  },
  methods: {
    loadData (param) {
      console.log('>>>>lala', param)
    }
  },
  mounted () {
    this.$store.dispatch('user/getList').then(res => {
      this.r = res
      this.itemList = res.payload.itemList
    })
  }

}
</script>

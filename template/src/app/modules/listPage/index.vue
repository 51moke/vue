<!--
 * @Author: skye
 * @Date: 2019-01-07 09:23:32
 * @LastEditors: skye
 * @LastEditTime: 2019-01-09 15:37:03
 * @Description: 通用列表页面组件
 -->

<!--
props:{
    loading:组件加载状态,
    queryParam:查询条件定义对像，可参考默认定义值,
    funcList:功能列表，可参考默认定义值,
    data:列表数据,
    columns:列表数据展示列定义，可参考iView框架中Table组件中columns定义 https://www.iviewui.com/components/table,
},
event:{
    // 查询
    query(p){
        p:组件封装好的查询条件
    },
    // 功能执行
    func-click(f,selectedData,selectedDataList){
        f:功能列表中执行的对像
        selectedData:单选的数据
        selectedDataList:多选数据
    }
}
-->
<template>
    <div>
      <el-row :gutter="8" style="margin-bottom:15px;"  v-if="isHaveSearch">
          <!-- <el-row :span='24'> -->
            <searchTop :param="comSerachParam"  :value="comSerachValue" @query="query"></searchTop>
          <!-- </el-row> -->
      </el-row>
      <el-row style="margin-bottom:10px;"  v-if='funcList.length>0'>
        <el-button v-show="false" type="text" icon="el-icon-arrow-right">占位</el-button>
        <el-button
          v-for="(item,index) in funcList"
          :key="item.title"
          :type="item.type"
          @click="funcClick(index)"
          size="mini"
          :icon="item.icon"
          :style="{textAlign:item.align=='right'?'right':'left'}">{{item.title}}</el-button>
      </el-row>
      <i-table
            slot="content"
            :columns="columns"
            :data="data"
            highlight-row
            @on-current-change="onCurrentChange"
            @on-selection-change="onSelectionChange"
            :height="tableHeight"
            border
            ref="table"
        ></i-table>
        <comPage style="margin-top:20px;" slot="bottom" v-if="openPage" :pageParam="pageArgs" @page-chang="page"></comPage>
    </div>
</template>
<script>
// import centerLayout from '@layout/centerLayout.vue'
import comPage from '../compage'
import searchTop from '../search/searchTop.vue'
// import searchMore from './searchMore.vue'
// import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  components: { searchTop, comPage },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    functionShow: {
      type: Boolean,
      default: false
    },
    isHaveSearch: {
      type: Boolean,
      default: true
    },
    openPage: {
      type: Boolean,
      default: true
    },
    isDown: {
      type: Boolean,
      default: false
    },
    // 查询参数
    queryParam: {
      type: Object,
      default: () => {
        return {
          name: {
            type: 'text',
            title: '常用查询',
            placeholder: '关键字'
          },
          id: {
            type: 'text',
            more: true,
            title: '更多查询',
            placeholder: '关键字'
          },
          pageNum: 1,
          pageSize: 15,
          total: 0
        }
      }
    },
    // 查询初始值
    queryValue: {
      type: Object,
      default: () => {
        return {
          name: '',
          id: '',
          pageNum: 1,
          pageSize: 15,
          total: 96
        }
      }
    },
    // 功能参数
    funcList: {
      type: Array,
      default: () => {
        return [
          {
            //    safecode:""
          }
        ]
      }
    },
    // 数据
    data: {
      type: Array,
      default: () => {
        return [
          {
            name: 'John Brown',
            age: 18,
            date: '2016-10-03',
            address: 'New York No. 1 Lake Park',
            comment: '这是演示数据……'
          }
        ]
      }
    },
    // 数据列展示
    columns: {
      type: Array,
      default: () => {
        return [
          {
            type: 'selection',
            width: 60,
            align: 'center',
            fixed: 'left'
          },
          {
            title: '名称',
            key: 'name',
            fixed: 'left'
          },
          {
            title: '表头分组',
            align: 'center',
            children: [
              {
                title: '年龄',
                key: 'age'
              },
              {
                title: '生日',
                key: 'date'
              }
            ]
          },
          {
            title: '地址',
            key: 'address'
          },
          {
            title: '备注',
            key: 'comment'
          },
          {
            title: '操作',
            fixed: 'right',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h(
                  'el-button',
                  {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    on: {
                      click: () => {
                        console.log('table action')
                      }
                    }
                  },
                  '操作'
                )
              ])
            }
          }
        ]
      }
    }
  },
  data () {
    return {
      moreSearchShow: false,
      tableHeight: 400,
      param: {},
      selectedData: {}, // 单选数据
      selectedDataList: [] // 多选数据
    }
  },
  computed: {
    // ...mapGetters(['functions']),
    comSerachParam () {
      let param = {}
      for (let k in this.queryParam) {
        let v = this.queryParam[k]
        if (v instanceof Object) {
          param[k] = v
        }
      }
      console.log('>>>>>>.param111', param)
      return param
    },
    comSerachValue () {
      let param = {}
      for (let k in this.queryParam) {
        let v = this.queryParam[k]
        if (v instanceof Object && !v.more) {
          param[k] = this.queryValue[k]
        }
      }
      console.log('>>>>>>.param222', param)
      return param
    },
    pageArgs: function () {
      let p = {
        pageNum: this.queryValue.pageNum,
        pageSize: this.queryValue.pageSize,
        total: this.queryValue.total
      }
      return p
    }
  },
  watch: {},
  mounted: function () {
    this.$nextTick(function () {

    })
  },
  beforeDestroy () {},
  methods: {
    query (p) {
      if (p) {
        console.log('ListPage query->', p)
        for (let k in p) {
          this.param[k] = p[k]
        }
      }
      this.$emit('query', this.param)
    },
    // 功能执行
    funcClick (index) {
      let f = this.funcList[index]
      console.log('funcClick->', f)
      this.$emit(
        'func-click',
        f,
        this.selectedData,
        this.selectedDataList,
        index
      )
    },
    page (param) {
      console.log('ListPage param->', param)
      let page = {
        pageNum: param.pageNum ? param.pageNum : 1,
        pageSize: param.pageSize ? param.pageSize : 20

      }
      this.query(page)
    },
    onCurrentChange (currentRow, oldCurrentRow) {
      console.log('onCurrentChange->', currentRow, oldCurrentRow)
      this.selectedData = currentRow
    },

    onSelectionChange (selection) {
      console.log('onSelectionChange->', selection)
      this.selectedDataList = selection
      this.$emit('on-selection-change', selection)
    }
  }
}
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>

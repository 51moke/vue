<!--
 * @Author: skye
 * @Date: 2019-01-08 10:24:26
 * @LastEditors: skye
 * @LastEditTime: 2019-01-09 15:45:10
 * @Description: 头部搜索
 -->
<!-- 模板组件
props:{

    param:查询条件,
},
event:{
    // 查询
    query(p){
        p:组件封装好的查询条件
    },
    more-search(){
        更多模块开关
    },
}
-->
<template>
    <el-row :gutter="8">
        <el-col
            :span="span"
            v-for="(item,key,index) in param"
            :key="item.key"
            :style="{marginTop:(index+1)*span > 24?'5px':'0'}">
            <comSearch :pk="key" :value="queryParam[key]" :param="item" @query="query" @change="change"></comSearch>
        <p></p>
        </el-col>
        <el-col
            :span="span"
            :style="{whiteSpace: 'nowrap',marginTop:count*span > 24?'5px':'0'}">
            <el-button type="primary" icon="el-icon-search" @click="search" round size="mini"></el-button>
            <el-button type="primary" @click="search" size="mini">刷新</el-button>
            <el-button type="info" @click="clear" size="mini">清空</el-button>
        </el-col>
    </el-row>
</template>
<script>
import comSearch from './comSearch.vue'
export default {
  components: { comSearch },
  data () {
    return {
      span: 4,
      count: 6,
      queryParam: {}
    }
  },
  props: {
    more: {
      type: Boolean,
      default: false
    },
    param: {
      type: Object,
      default: () => {
        return {
          name: {
            type: 'text',
            title: '名称',
            placeholder: '这是常用查询演示数据'
          }
        }
      }

    },
    value: {
      type: Object,
      default: () => {
        return {
          name: ''
        }
      }
    }
  },
  computed: {},
  mounted: function () {
    this.$nextTick(function () {
      this.queryParam = this.value
      console.log('TopSearch nextTick->', this.param)
      // console.log('TopSearch children->', this.$children)
      this.count = Object.getOwnPropertyNames(this.param).length + 1
      if (24 / this.count < this.span) {
        this.span = Math.floor(48 / this.count)
      }
      console.log('Span count->', this.count, this.span)
    })
  },
  methods: {

    search () {
      console.log('TopSearch search->', this.queryParam)
      this.$emit('query', this.queryParam)
    },
    query (p) {
      if (p) {
        Object.assign(this.queryParam, p)
        console.log('TopSearch query->', this.queryParam)
      }
      this.search()
    },
    change (p) {
      if (p) {
        Object.assign(this.queryParam, p)
        console.log('TopSearch change->', this.queryParam)
      }
    },
    clear () {
      for (let k in this.queryParam) {
        this.queryParam[k] = ''
      }
      // this.value = ''
      // 遍历子组件重至数据
      // for (
      //   let i = 1;
      //   this.$children.length >= 3 && i < $children.length - 1;
      //   i++
      // ) {
      //   this.$children[i].$children[0].clear()
      // }

      this.queryParam.pageNum = 1
      this.queryParam.pageSize = 20
      this.search()
    }
  }
}
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>

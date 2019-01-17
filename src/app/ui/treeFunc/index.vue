<!--
 * @Author: skye
 * @Date: 2019-01-04 09:34:40
 * @LastEditors: skye
 * @LastEditTime: 2019-01-09 16:20:35
 * @Description: 树
 -->
<template>
  <div>
      <div class="btnFunc" style="" v-if="btnClick.length>0">
         <el-button v-for='btn in btnClick' :key='btn.name' @click="v(btn)" :size="btn.size" :type="btn.type">{{btn.name}}</el-button>
      </div>
      <el-tree ref="tree" :data="pageTree" @node-click="menuClick" @check='check' :filter-node-method="filterNode" node-key="id" :show-checkbox='isCheck' default-expand-all :props="defaultProps" :expand-on-click-node="false" :highlight-current="true">

      </el-tree>
  </div>
</template>

<script>
export default {
  props: {
    isCheck: {// 是否可以选择
      type: Boolean,
      default: true
    },
    btnClick: {
      type: Array,
      default: () => {
        return [

        ]
      }
    },

    pageTree: {
      type: Array,
      default: () => {
        return []
      }
    },
    defaultProps: {
      type: Object,
      default: () => {
        return {
          children: 'children',
          label: 'label'
        }
      }
    }

  },
  data () {
    return {

    }
  },
  methods: {
    menuClick (menu) {
      console.log('>>>>>>menu', menu)
      this.$emit('get-info', menu)
    },
    filterNode (value, data) {
      console.log('zheshi shenmne ')
    },
    check (val, arr) {
      console.log('>>>>>>val', val, arr)
      this.$emit('check', val, arr)
    },
    v (val) {
      this.$emit('funClick', val)
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
.btnFunc{
  text-align: right
}
</style>

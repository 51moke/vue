<!--
 * @Author: skye
 * @Date: 2019-01-08 10:27:24
 * @LastEditors: skye
 * @LastEditTime: 2019-01-09 16:30:31
 * @Description: 查询组件
 -->

<!--
props:{
    pk:查询条件键值,
    value:查询条件初始值,
    param:查询条件其他属性,
},
event:{
    query(p){
        p:组件封装好的查询条件
    },
    change(p){
        p:组件变更的查询条件
    }
}
-->

<template>
    <div>
        <!-- text -->
        <el-input v-model="v" v-if="param.type == 'text'" type="text" clearable :placeholder="param.placeholder" @change="change" @blur="blur" @keyup.enter.native="query">
            <template slot="prepend" v-if="param.title">{{param.title}}</template>
        </el-input>
        <!-- number -->
        <el-input v-model="v" v-if="param.type == 'number'" type="number" clearable :placeholder="param.placeholder" @change="change" @blur="blur" @keyup.enter.native="query">
            <template slot="prepend" v-if="param.title">{{param.title}}</template>
        </el-input>
        <!-- email -->
        <el-input v-model="v" v-if="param.type == 'email'" type="email" clearable :placeholder="param.placeholder" @change="change" @blur="blur" @keyup.enter.native="query">
            <template slot="prepend" v-if="param.title">{{param.title}}</template>
        </el-input>
        <!-- date -->
        <el-date-picker v-model="v" value="v" v-if="param.type == 'date'" type="date" @change="select" :placeholder="param.placeholder" style="width:100%"></el-date-picker>
        <!-- select
        <comSelect v-if="param.type == 'select'" :title="param.title" :value="v" :options="param.options" @change="select"></comSelect> -->
    </div>
</template>
<script>

export default {
  components: { },
  data () {
    return {
      v: ''
    }
  },
  props: {
    pk: {
      type: String,
      default: 'key'
    },
    value: {
      type: String | Number,
      default: ''
    },
    param: {
      type: Object,
      default: () => {
        return {
          type: 'text',
          title: '标题',
          placeholder: '提示'
        }
      }
    }
  },
  computed: {},
  mounted: function () {
    this.$nextTick(function () {
      this.v = this.value
    })
  },
  methods: {
    query: function () {
      let p = {}
      p[this.pk] = this.v
      console.log('ComSearch query->', this.v)
      this.$emit('query', p)
    },
    blur (e) {
      console.log('blur->', e)
    },
    change: function () {
      let p = {}
      p[this.pk] = this.v
      console.log('ComSearch change->', this.v)
      this.$emit('change', p)
    },
    select (data) { // 后续选择框的扩展
      if (this.param.type === 'select' || this.param.type === 'date') {
        this.v = data
      }
      // else if (this.param.key == 'name') {
      //   this.v = data.name
      // } else {
      //   this.v = data.id
      // }
      this.change()
      this.query()
    },
    clear () {
      this.v = ''
    }
  },
  watch: {
    value (v) {
      this.v = v
    }
  }
}
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>

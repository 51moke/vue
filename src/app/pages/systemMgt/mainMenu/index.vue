<template>
  <div>
    <!-- <el-dialog :append-to-body='true' :visible.sync="show" width='50%'>
        <menu-info></menu-info>
      <div slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="show = false">确 定</el-button>
      </div>
    </el-dialog> -->
    <add-mune v-if="addMuneParam.show" :param='addMuneParam'></add-mune>
    <el-row :gutter="20">

      <el-col style='border-right:1px solid #eee' :span="8">
        <tree-func :pageTree='allMune' :btnClick='btnClick' @funClick='funClick' @check='check' @ @get-info='getMuneInfo'  style=";border-bottom:1px solid #eee;padding-bottom:20px;margin-bottom:20px">
        </tree-func>

        <tree-func :pageTree='muneList' :isCheck='false'  @get-info='getMuneInfo' ></tree-func>
         <p>{{test.label}}{{test.id}}</p>
      </el-col>
      <el-col :span="16"><div><menuInfo/></div></el-col>

    </el-row>

  </div>
</template>
<script>
import treeFunc from '@ui/treeFunc'
import addMune from './addMune'
import {mapGetters} from 'vuex'
import menuInfo from '@modules/menuInfo'
export default {
  components: {
    treeFunc, addMune, menuInfo
  },
  computed: {
    ...mapGetters({
      allMune: 'system/allMune'
    }

    )
  },
  data () {
    return {
      addMuneParam: {
        show: false,
        id: ''
      },

      btnClick: [
        {index: 1, name: '新增', type: 'primary', size: 'mini'},
        {index: 2, name: '删除', type: 'danger', size: 'mini'}
      ],
      muneList: [
        {
          id: 1,
          label: '系统管理',
          children: [{
            id: 4,
            label: '主菜单管理'
          }, {
            id: 9,
            label: '部门管理'
          }]
        }, {
          id: 3,
          label: '产品中心',
          children: [{
            id: 7,
            label: '定向产品'
          }, {
            id: 8,
            label: '集合产品'
          }]
        }
      ],
      test: {
        id: '',
        label: ''
      }
    }
  },
  methods: {
    // ...mapActions(['getAllMune'])
    getMuneInfo (mune) {
      this.test = mune
      this.$store.commit('system/getitemInfo', mune)
    },
    check (val, arr) {
      console.log('>>>>>>>.arr', arr)
    },
    funClick (val) {
      console.log('>>>>>>clicl', val)
      let index = val.index
      switch (index) {
        case 1:this.add(val); break
      }
    },
    add (val) {
      this.addMuneParam.show = true
    }
  },
  mounted () {
    this.$store.dispatch('system/getAllMune')
  }
}
</script>

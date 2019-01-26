<template>
  <div>
    <el-dialog :append-to-body='true' :visible.sync="param.show" width='50%'>
      <el-row :gutter="20">
        <el-col style='border-right:1px solid #eee' :span="8">
          <tree-func :pageTree='allMune' :isCheck='false'  @get-info='getMuneInfo' ></tree-func>
        </el-col>
        <el-col :span="16"><div><menuInfo/></div></el-col>
      </el-row>
        <!-- <menu-info></menu-info> -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="param.show = false">取 消</el-button>
        <el-button type="primary" @click="param.show = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import treeFunc from '@ui/treeFunc'
import { mapGetters } from 'vuex'
import menuInfo from '@modules/menuInfo'
export default {
  components: {treeFunc, menuInfo},
  data () {
    return {

    }
  },
  props: {
    param: {
      type: Object,
      default: () => {
        return {
          show: false,
          id: ''
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      allMune: 'system/allMune'
    }

    )
  },
  methods: {

  }
}
</script>

<style>

</style>

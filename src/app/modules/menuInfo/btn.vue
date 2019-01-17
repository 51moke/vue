<!--
 * @Author: yanglin
 * @Date: 2019-01-08 15:09:21
 * @LastEditors: yanglin
 * @LastEditTime: 2019-01-08 17:30:51
 * @Description:'按钮事件'
 -->

<template>
  <div class="buttomBox">
    <el-button
      size="mini"
      type="primary"
      icon="fa fa-save"
      @click="saveInfo"
    >保存</el-button>
    <el-button
      size="mini"
      type="primary"
      icon="el-icon-edit"
      @click="dialogVisible = true"
    >配置角色</el-button>
    <el-dialog
      title="配置角色"
      :visible.sync="dialogVisible"
      width="30%"
      :modal-append-to-body="false"
    >
      <el-checkbox-group v-model="checkList.checkArr">
        <div
          class="checkboxItem"
          v-for="(item,i) in checkList.itemList"
          :key="i"
        >
          <el-popover
            placement="right-end"
            width="200"
            trigger="hover"
            :disabled="(computedByteLen(item.label)<19)"
            :content="item.label"
          >
            <!-- <el-button slot="reference">hover 激活</el-button> -->

            <el-checkbox
              :label="item.label"
              :disabled="item.disable||false"
              slot="reference"
            ></el-checkbox>
          </el-popover>
        </div>
        <div class="clearBoth"></div>

      </el-checkbox-group>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false"
        >确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
export default {

  data () {
    return {
      dialogVisible: false,
      // checkList: ['选中且禁用', '复选框 A'],
      checkList: {
        checkArr: ['选中且禁用', '复选框 A'],
        itemList: [
          { label: '复选框 A', disable: false },
          { label: '复选框 B', disable: false },
          { label: '复选框C', disable: false },
          { label: '复选框 D', disable: false },
          { label: '复选框 E', disable: false },
          { label: '复选框 F', disable: false },
          { label: '复选框 G', disable: false },
          { label: '复选框 H', disable: false },
          { label: '复选框 I', disable: false },
          { label: '复选框复选框复选框复选框复选框复选框显示全部', disable: false },
          { label: '复选框 K', disable: false }, { label: '选中且禁用', disable: true }]
      }
    }
  },

  methods: {
    computedByteLen (str) {
      // console.log(str, str.replace(/[^\x00-\xff]/g, '01').length, 'computedByteLen')
      let strLen = str.replace(/[^\x00-\xff]/g, '01').length
      return strLen
    },
    onSubmit () {
      console.log('submit!')
    },
    saveInfo () {
      this.$message({
        message: '保存成功',
        type: 'success'
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.checkboxItem {
  width: 50%;
  float: left;
  margin-bottom: 10px;
  .el-checkbox {
    text-overflow: ellipsis;
    width: 100%;
    overflow: hidden;
  }
}
</style>

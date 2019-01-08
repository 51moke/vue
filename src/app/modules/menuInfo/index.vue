<!--
 * @Author: yanglin
 * @Date: 2019-01-03 22:35:04
 * @LastEditors: yanglin
 * @LastEditTime: 2019-01-07 16:39:04
 * @Description:'菜单信息表单'
 -->
<template>
  <div class="menuInfo">
    <div class="title">
      <i
        class="fa fa-dot-circle-o"
        aria-hidden="true"
      ></i>菜单信息</div>
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
      >配置信息</el-button>
      <el-dialog
        title="配置信息"
        :visible.sync="dialogVisible"
        width="30%"
        :modal-append-to-body="false"
      >
        <span>这是一段信息</span>
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
    <div class="formBox">
      <el-form
        :inline="true"
        :model="FormData"
        ref="FormData"
        label-width="80px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="排序号"
          prop="sortNum"
          :rules="[
      { required: true, message: '排序号不能为空'},
      { type: 'number', message: '排序号必须为数字值'}
    ]"
        >
          <el-input
            type="sortNum"
            v-model.number="FormData.sortNum"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="菜单名称"
          prop="name"
          :rules="[
      { required: true, message: '菜单名称不能为空'}
    ]"
        >
          <el-input v-model="FormData.name"></el-input>
        </el-form-item>
        <el-form-item label="URL路径">
          <el-input v-model="FormData.url"></el-input>
        </el-form-item>
        <el-form-item label="是否可用">
          <el-radio-group v-model="FormData.status">
            <el-radio :label="3">锁定</el-radio>
            <el-radio :label="6">正常</el-radio>
            <el-radio :label="9">停用</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="菜单图标">
          <el-input v-model="FormData.icon">
            <el-button
              slot="append"
              icon="el-icon-search"
            ></el-button>
          </el-input>
        </el-form-item>

        <el-form-item label="备注">
          <el-input
            type="textarea"
            v-model="FormData.desc"
          ></el-input>
        </el-form-item>
        <div v-if="true">
          <el-form-item label="登记用户">
            <el-input
              v-model="FormData.regInfo.name"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="登记机构">
            <el-input
              v-model="FormData.regInfo.org"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="登记时间">
            <el-input
              v-model="FormData.regInfo.date"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="更新用户">
            <el-input
              v-model="FormData.updateInfo.name"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="更新机构">
            <el-input
              v-model="FormData.updateInfo.org"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="更新时间">
            <el-input
              v-model="FormData.updateInfo.date"
              :disabled="true"
            ></el-input>
          </el-form-item>
        </div>

      </el-form>

    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['menuName', 'menuId'],
  data () {
    return {
      FormData: {
        sortNum: '',
        name: '',
        URL: '',
        status: 6,
        icon: '',
        desc: '',
        regInfo: {
          name: 'admin',
          org: '',
          date: ''
        },
        updateInfo: {
          name: '',
          org: '',
          date: ''
        }

      },
      dialogVisible: false

    }
  },
  mounted () {
    // this.FormData.sortNum = this.menuId || ''
    // this.FormData.name = this.menuName || ''
    // this.menuName = this.FormData.name || ''
    // this.menuId = this.FormData.sortNum || ''

    console.log('demo', this.demo)
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    saveInfo () {
      this.$message({
        message: '保存成功',
        type: 'success'
      })
    }
  },
  computed: {
    ...mapGetters({ num: 'system/num', demo: 'demo' })
  }

}
</script>
<style lang="scss" scoped>
.menuInfo {
  border: 1px solid #dcdfe6;
  margin: 10px;
  .title {
    border-bottom: 1px solid #dcdfe6;
    line-height: 40px;
    text-indent: 10px;
    i {
      padding-right: 5px;
    }
  }
  .buttomBox {
    padding: 20px;
  }
}
</style>
<style>
.menuInfo .fa {
  padding-right: 5px;
}
</style>

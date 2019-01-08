<!--
 * @Author: yanglin
 * @Date: 2019-01-08 15:02:47
 * @LastEditors: yanglin
 * @LastEditTime: 2019-01-08 18:03:25
 * @Description:'form表单'
 -->

<template>
  <div class="formBox">
      <el-form v-if="FormData"
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
          <el-radio-group v-model="FormData.radioInfo.status">
            <el-radio v-for="(item,index) in FormData.radioInfo.labels" :label="index" :key="index">{{item}}</el-radio>

          </el-radio-group>
        </el-form-item>
        <el-form-item label="菜单图标">
          <el-button
          @click="dialogVisible = true"
              icon="fa fa-book"
            ></el-button><i class="fa fa-book"></i>
<el-dialog
      title="选择图标"
      :visible.sync="dialogVisible"
      width="30%"
      :modal-append-to-body="false"
    >
      <div>
        <div class="itemList" v-for="(itemList,index) in fontIcon" :key="index">
          <div class="icontitle">{{itemList.title}}</div>
          <div class="iconList">
            <i v-for="(icon,i) in itemList.icons" :key="i" class="fa" :class="`fa-${icon}`">{{icon}}</i>
          </div>
        </div>
      </div>
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
        </el-form-item>

        <el-form-item label="备注">
          <el-input
            type="textarea"
            v-model="FormData.desc"
            @click="dialogVisible = true"
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
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      dialogVisible: false
    }
  },
  computed: {
    ...mapGetters({ FormData: 'system/FormData', fontIcon: 'system/fontIcon' })
  }

}
</script>

<!--
 * @Author: yanglin
 * @Date: 2019-01-03 22:35:04
 * @LastEditors: yanglin
 * @LastEditTime: 2019-01-08 15:57:18
 * @Description:'菜单信息表单'
 -->
<template>
  <div class="menuInfo">
    <div class="title">
      <i
        class="fa fa-dot-circle-o"
        aria-hidden="true"
      ></i>菜单信息</div>
    <Btn />
    <Form />
  </div>
</template>

<script>

import Form from './form'
import Btn from './btn'
export default {
  components: {
    Form, Btn
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
.menuInfo .el-form--inline .el-form-item {
  min-width: 46%;
}
.menuInfo .el-textarea__inner {
  padding: 5px 26px 5px 15px;
}
</style>

<!--
 * @Author: yanglin
 * @Date: 2019-01-09 09:39:11
 * @LastEditors: yanglin
 * @LastEditTime: 2019-01-09 17:58:00
 * @Description:'图标库'
 -->
<template>
  <div class="icons">
    <el-tooltip
      class="item"
      effect="dark"
      content="点击选择图标"
      placement="right"
    >
      <el-button
        @click="dialogVisible = true"
        :icon="icon"
      ></el-button>
    </el-tooltip>
    <el-dialog
      title="选择图标"
      :visible.sync="dialogVisible"
      width="70%"
      :modal-append-to-body="false"
      :fullscreen="isfullscreen"
    >
      <el-button
        class="fullIcon"
        @click="isfullscreen=!isfullscreen"
      >
        <i
          class="fa fa-window-restore"
          v-if="isfullscreen"
        ></i>
        <i
          class="fa fa-window-maximize"
          v-else
        ></i>
      </el-button>

      <div>
        <div
          class="itemList"
          v-for="(itemList,index) in fontIcon"
          :key="index"
        >
          <div class="icontitle">{{itemList.title}}</div>
          <div class="iconList">
            <i
              v-for="(icon,i) in itemList.icons"
              :key="i"
              class="fa"
              :class="`fa-${icon}`"
              @click="itemClick(icon,index,i)"
              :style="{color:(itemIndex==index&&i==active?color1:color2)}"
            >{{icon}}</i>
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
          @click="commitIcon()"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      icon: 'el-icon-search',
      dialogVisible: false,
      itemIndex: null,
      active: null,
      color1: 'blue',
      color2: null,
      chooseIcon: null,
      isfullscreen: false

    }
  },
  methods: {
    itemClick (icon, index, i) {
      this.chooseIcon = icon
      this.itemIndex = index
      this.active = i
      this.style = i
      this.alerMsg(icon)
    },
    alerMsg (icon) {
      this.$message({
        message: '已选中 ' + icon,
        type: 'success'
      })
    },
    commitIcon () {
      this.icon = 'fa fa-' + this.chooseIcon
      this.dialogVisible = false
    }
  },
  computed: {
    ...mapGetters({ fontIcon: 'system/fontIcon' })
  }
}
</script>

<style lang="scss" >
.icons {
  .el-dialog__body .itemList {
    .fa {
      margin-right: 15px;
    }
    .fa:hover,
    .fa.active {
      cursor: pointer;
      color: #2b7fd6;
    }
    .fa:before {
      margin-right: 10px;
    }
  }
  .fullIcon {
    &.el-button:focus,
    .el-button:hover {
      background: none;
    }
    &.el-button {
      position: absolute;
      right: 40px;
      top: 30px;
      width: auto;
      padding: 0;
      border: none;
      .fa{
        color:#909399
      }
      .fa:hover{
        color: #409EFF;
      }
    }
  }
}
</style>

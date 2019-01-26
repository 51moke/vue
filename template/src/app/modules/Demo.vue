<template>
  <div>
    <h3>{{title}}</h3>
    <el-button type="primary">测试ele</el-button>
    <div class="demo-box">
      <div class="demo-list">
        <DemoList />
      </div>
      <div class="demo-info">
        <DemoInfo />
      </div>
    </div>
  </div>
</template>

<script>
import DemoList from '@components/DemoList'
import DemoInfo from '@components/DemoInfo'

export default {
  // template: `<div>标题：{{ item&&item.title }}</div>`,
  components: {
    DemoList,
    DemoInfo
  },
  computed: {
    title () {
      return this.$store.state.demo.title
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/var.scss";
.demo-box {
  width: 600px;
  overflow: hidden;
  border: 2px solid #ccc;
  margin: 20px auto;
  text-align: left;
}
.demo-box > div {
  width: 300px;
  float: left;
}
.demo-box{
  div{
    color: $red;
    &:active{
      color: $yellow
    }
  }
}
</style>

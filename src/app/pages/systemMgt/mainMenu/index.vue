<template>
<el-row :gutter="20">
  <el-col :span="8"><Tree/></el-col>
  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
</el-row>

</template>
<script>
import Tree from '@ui/tree'
export default {
  components: {
    Tree
  }
}
</script>

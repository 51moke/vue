  <template>
  <div class="myTable">
    <el-table size="small" :data="tableData" style="width: 100%" height="440">
      <el-table-column v-for="column in columns" :key="column.id" :prop="column.prop" :label="column.label" :width="column.width">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>

export default {
  name: 'myTable',
  props:
    {
      tableData: {
        type: Array,
        default: function () { return [] }
      },
      columns: {
        type: Array,
        default: function () { return [] }
      }
    },
  data () {
    return {
    }
  }

}
</script>
<style lang="scss">
.el-table th {
  text-align: center;
}
</style>

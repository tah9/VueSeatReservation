<template>
  <div class="root">
    <el-card style="margin-top: 10%">
      <div slot="header" class="clearfix">
        <span>二层西自习区</span>
        <el-button style="float: right; padding: 3px 0" type="text">切换</el-button>
      </div>
      <Area @blankClick="blankClick">

      </Area>

    </el-card>
  </div>
</template>

<script>
import Area from "@/components/Area";

export default {
  name: "SeatNumber",
  components: {Area},
  data() {
    return {}
  },
  methods: {
    blankClick(index, row, column) {
      console.log(row + '-' + column)
    },
  },
  created() {

  }
}
</script>

<style scoped>
.root {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}


</style>

<template>
  <div>
    <navbar title="预约座位"></navbar>
    <el-card style="margin-top: 10%;overflow: scroll;">
      <div slot="header" class="clearfix">
        <ToggleArea @changeArea="getSeatRows" ref="toggleArea" :area-rows="areaRows" v-if="areaRows"></ToggleArea>
        <HeadTip></HeadTip>
      </div>
      <Area ref="room" v-if="seatRows" :seat-rows="seatRows" @seatClick="seatClick">
        <div slot="seatMenu" class="blankMenu">
          <div @click="clickPop">
            <i class="el-icon-s-flag"></i>预约
          </div>
        </div>
      </Area>
    </el-card>
    <el-card>
      <van-cell title="座位" :value="seatName"/>
      <van-divider>起止时间</van-divider>
      <div class="block">
        <el-slider
            v-model="value" :marks="marks"
            range :min="16" :max="45" :format-tooltip="formatToolTip"
            show-stops>
        </el-slider>
      </div>
    </el-card>

  </div>
</template>

<script>

import Area from "@/components/Area";
import Navbar from "@/components/navbar";
import request from "@/req";
import HeadTip from "@/components/HeadTip";
import ToggleArea from "@/components/ToggleArea";

export default {
  name: "Reservation",
  components: {ToggleArea, HeadTip, Navbar, Area},
  data() {
    return {
      value: [20, 30],
      marks: {18: '9:00', 24: '12:00', 30: '15:00', 36: '18:00', 42: '21:00'},
      areaRows: null,
      seatRows: null,
      seatCurIndex: 0,
      seatName: '请选择座位'
    }
  },
  methods: {
    clickPop() {
      this.seatName = this.areaRows[this.areaCurIndex].subName +
          this.seatRows[this.seatCurIndex].row + this.seatRows[this.seatCurIndex].column
    },
    formatToolTip(v) {
      let pre = Math.trunc(v / 2)
      let suf = v % 2 === 0 ? ':00' : ':30'
      return pre + suf
    },
    getSeatRows() {
      this.$nextTick(() => {
        request.post('/public/getAreaSeats', {
          area: this.$refs.toggleArea.getArea().aid
        }).then(res => {
          this.seatRows = res.rows
        })
      })
    },
    seatClick(index) {
      if (this.seatRows[index].type === 1) {
        this.seatRows[index].show = false;
        return
      }
      this.seatCurIndex = index
    },
    changeArea(index) {
      this.areaCurIndex = index - 1
      this.getSeatRows()
    },
  },
  created() {
    request.get('/public/getArea').then(res => {
      this.areaRows = res.rows
      this.getSeatRows()
    })
  }
}
</script>

<style scoped>

</style>

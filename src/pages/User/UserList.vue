<template>
  <div>
    <chart :options="polar"></chart>
  </div>
</template>
<script>
export default {
  name:"banner",
  data() {
    return {
      polar: {
        title: {
        text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  }
}
</script>
<style>
  .ivu-layout-content .echarts {
    height: 700px;
  }
  .ivu-layout-content .echarts div{
    width: 700px;
  }
</style>


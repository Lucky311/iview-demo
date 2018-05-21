<template>
  <div>
    <!-- 进度条 -->
    <Progress :percent="25" :stroke-width="5"></Progress>
    <Progress :percent="100">
        <Icon type="checkmark-circled"></Icon>
        <span>成功</span>
    </Progress>
  </div>
</template>
<script>
export default {
  name:"activity"
}
</script>
<style>

</style>


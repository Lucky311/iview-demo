<template>
  <div>
     <template>
    <Progress :percent="25" :stroke-width="5"></Progress>
    <Progress :percent="100">
        <Icon type="checkmark-circled"></Icon>
        <span>成功</span>
    </Progress>
</template>
  </div>
</template>
<script>
export default {
  name:"activity"
}
</script>
<style>

</style>


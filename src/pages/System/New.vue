<template>
  <div>
       <vue-editor v-model="content"></vue-editor>
  </div>
</template>
<script>
import { VueEditor } from 'vue2-editor'
export default {
  name:"news",
  components: {
      VueEditor
   },
   data() {
       return {
         content: '<h1>咨询管理</h1>'  
       }
     }
}
</script>
<style>

</style>


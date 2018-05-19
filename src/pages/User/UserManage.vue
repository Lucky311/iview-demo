<template>
  <div>
      {{chat}}
  </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name:"uesr-manage",
  methods:{
    ...mapActions(['getMsg']),
  },
  computed: {
    ...mapGetters(['chat'])
  },
  mounted(){
    this.getMsg();   
    // if(this.chat != ""){
    //   this.getMsg();
    // }
  }
}
</script>
<style>

</style>


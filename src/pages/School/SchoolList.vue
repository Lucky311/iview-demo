<template>
  <div>
       <Button @click="modal10 = true">Vertical center</Button>
    <Modal
        title="Title"
        v-model="modal10"
        class-name="vertical-center-modal">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
  </div>
</template>
<script>
export default {
  name:"school",
  data () {
    return {
        modal9: false,
        modal10: false,
    }
  }
}
</script>
<style>
  .vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center
  }
  .ivu-modal{
            top: 0;
        }
</style>


<template> 
    <div class="modal">
        <div class="modal-close" @click="this.$emit('close')">X</div>
        {{title}}
    </div>
  
</template>
 

<script>
  export default {
    props: {
      title: {type:String, required:true }
    },
    name: 'MyModal',
    // mixins: [mixins, methods],
    data() {
        return {
          
        }
    },
  }
</script>
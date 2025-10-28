<template> 

    <div class="modal">
        <div class="close" @click="this.$emit('close')">X</div>
        <h1>THIS IS WORKING</h1>
    </div>
</template>
<script>
import mixins from '../mixins/data.js'
import methods from '../mixins/methodsB.js'

  export default {
    props: {
    },
    name: 'MyModal',
    data() {
        return {
        }
    },
  }
</script>
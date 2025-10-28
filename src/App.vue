<template>
  <div class="mainContainer">
    <app-selection :list='myList' />
    <app-movie-list :list='myList' det="off" />
  </div>
</template> 
<script>
import PlaySelection from './Comps/PlaySelection.vue'
import Playbook from './Comps/Playbook.vue'
import mixins from './mixins/data.js'
export default {
  mixins: [mixins],
  name: 'App',
  data() {
    return {
    }
  },
components: {
    'app-selection': PlaySelection,
    'app-movie-list': Playbook,
  },
}
</script>

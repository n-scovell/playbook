<template>
    <div class="playSelection">
      <my-modal v-show="isModalVisible" @close="closeModal" :title="selectedPlay"  />
      <div class="playContainer" v-for="(p,index) in list" :key="index+'_pl'" @click="selectPlay(p.playName)">
        <h3>{{p.playName}}</h3>
      </div>
    </div>
</template>
<script>
import mixins from '../mixins/data.js'
import Modal from './Modal'
export default {
    name: 'play-book',
    mixins: [mixins],
    props: {list: {type: Array,required: true},},
    data() {
      return {
      }
    },
    components: {
      'my-modal':Modal
    }
}
</script>

<style>
 @import '../css/play';
</style>
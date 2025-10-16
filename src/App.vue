<template>
<div id="n8" class="playGrid" :class="chosenClass">
  <div class="chooser">
    <p class="light" @click="changeCls('light')" >LIGHT</p>
    <p class="dark" @click="changeCls('dark')" >DARK</p>
  </div>
  
  <div v-for="(p,index) in plays" :key="index+'_ply'" class="play">
    <h2>{{p.playName}}</h2>
    <div class="row" v-if="sides" :class="{'frame': frame}"></div>
    <div class="row" v-for="(r,index) in p.rows" :key="index+'_row'"  :class="{'frame': frame}">
      <div class="circle" :class="c.pos + ' ' + c.stand + ' ' + c.route" v-for="(c,index) in r.slot" :key="index+'_rte'">{{c.pos}}</div>
    </div>
    <div class="row" v-if="sides" :class="{'frame': frame}"></div>
  </div>
</div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      act:true,
      frame:true,
      sides:false,
      chosenClass:'dark',
      plays: [
        {
          playName:"Highway Posts",
          rows: [
            {slot: [{pos:'wr', stand:'', route:'postRLong'}]},
            {slot: [{pos:'wr', stand:'', route:'postR'}]},
            {slot: [{pos:'wr', stand:'', route:'postRLong'}]},
            {slot: [{pos:'cs', stand:'', route:'postR'},{pos:'qb', stand:'back'},]},
            {slot: [{pos:'rb', stand:'back', route:'flyLong'},]},
            {slot: [{pos:'wr', stand:'', route:'postLLong'},]},
            {}
          ]
        },
      ]
    }
  },
  methods: {
    changeCls(a) {
      this.chosenClass = a
    },
    getSize(a,b) {
      let mySize = {
        'left':a+'%',
        'top':65 + b + '%',
      };
      return mySize;
    },
  }
}
</script>
<style>
 @import 'css/play';
</style>
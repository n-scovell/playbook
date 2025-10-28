
<template>
    <div id="n8" class="playGrid" :class="chosenClass" v-show="det==='on'">
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
    name: 'play-book',
    props: {
        list: {type: Array,required: true},
        det: {type: String, required: true}
    },
  data() {
    return {
        plays: this.list,
            act:true,
          frame:true,
          sides:false,
          chosenClass:'dark',
        //   plays: [
        //     {
        //       playName:"Highway Posts",
        //       rows: [
        //         {slot: [{pos:'wr', stand:'', route:'postRLong'}]},
        //         {slot: [{pos:'wr', stand:'', route:'postR'}]},
        //         {slot: [{pos:'wr', stand:'', route:'postRLong'}]},
        //         {slot: [{pos:'cs', stand:'', route:'postR'},{pos:'qb', stand:'back'},]},
        //         {slot: [{pos:'rb', stand:'back', route:'rr'},]},
        //         {slot: [{pos:'wr', stand:'', route:'postLLong'},]},
        //         {}
        //       ]
        //     },
        //     {
        //       playName:"Utah Jazz",
        //       rows: [
        //         {slot: []},
        //         {slot: [{pos:'wr', stand:'', route:'hookR'}]},
        //         {slot: [{pos:'wr', stand:'back', route:'fl'}]},
        //         {slot: [{pos:'cs', stand:'', route:'flyLong'},{pos:'qb', stand:'up'},{pos:'rb', stand:'back', route:'slantL'},{pos:'wr', stand:'backB', route:'rollR'}]},
        //         {slot: []},
        //         {slot: [{pos:'wr', stand:'', route:'postL'},]},
        //         {}
        //       ]
        //     },
        //     {
        //       playName:"Left Sweep",
        //       rows: [
        //         {slot: []},
        //         {slot: [{pos:'wr', stand:'', route:'f'}]},
        //         {slot: [{pos:'wr', stand:'up', route:'rl'}, {pos:'wr', stand:'', route:'sl'}]},
        //         {slot: [{pos:'cs', stand:'', route:'pl'},{pos:'qb', stand:'up'},{pos:'rb', stand:'back', route:'rl'},]},
        //         {slot: []},
        //         {slot: [{pos:'wr', stand:'', route:'fl'},]},
        //         {}
        //       ]
        //     },
        //      {
        //       playName:"Trips Right",
        //       rows: [
        //         {slot: []},
        //         {slot: []},
        //         {slot: [{pos:'wr', stand:'up', route:'rl'}, {pos:'wr', stand:'', route:'sl'}]},
        //         {slot: [
        //         {pos:'cs', stand:'', route:'pr'},
        //         {pos:'qb', stand:'up'},
        //         {pos:'rb', stand:'back left', route:'rr'},
        //         {pos:'wr', stand:'back right', route:'rr'}
        //         ]},
        //         {slot: []},
        //         {slot: [{pos:'wr', stand:'', route:'pll'},]},
        //         {}
        //       ]
        //     },
        //   ]
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
 @import '../css/play';
</style>
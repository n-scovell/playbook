let plays = [
  {
    playName:"Highway Posts",
    rows: [
      {slot: [{pos:'wr', stand:'', route:'postRLong'}]},
      {slot: [{pos:'wr', stand:'', route:'postR'}]},
      {slot: [{pos:'wr', stand:'', route:'postRLong'}]},
      {slot: [{pos:'cs', stand:'', route:'postR'},{pos:'qb', stand:'back'},]},
      {slot: [{pos:'rb', stand:'back', route:'rr'},]},
      {slot: [{pos:'wr', stand:'', route:'postLLong'},]},
      {}
    ]
  },
  {
    playName:"Utah Jazz",
    rows: [
      {slot: []},
      {slot: [{pos:'wr', stand:'', route:'hookR'}]},
      {slot: [{pos:'wr', stand:'back', route:'fl'}]},
      {slot: [{pos:'cs', stand:'', route:'flyLong'},{pos:'qb', stand:'up'},{pos:'rb', stand:'back', route:'slantL'},{pos:'wr', stand:'backB', route:'rollR'}]},
      {slot: []},
      {slot: [{pos:'wr', stand:'', route:'postL'},]},
      {}
    ]
  },
  {
    playName:"Left Sweep",
    rows: [
      {slot: []},
      {slot: [{pos:'wr', stand:'', route:'f'}]},
      {slot: [{pos:'wr', stand:'up', route:'rl'}, {pos:'wr', stand:'', route:'sl'}]},
      {slot: [{pos:'cs', stand:'', route:'pl'},{pos:'qb', stand:'up'},{pos:'rb', stand:'back', route:'rl'},]},
      {slot: []},
      {slot: [{pos:'wr', stand:'', route:'fl'},]},
      {}
    ]
  },
    {
    playName:"Trips Right",
    rows: [
      {slot: []},
      {slot: []},
      {slot: [{pos:'wr', stand:'up', route:'rl'}, {pos:'wr', stand:'', route:'sl'}]},
      {slot: [
      {pos:'cs', stand:'', route:'pr'},
      {pos:'qb', stand:'up'},
      {pos:'rb', stand:'back left', route:'rr'},
      {pos:'wr', stand:'back right', route:'rr'}
      ]},
      {slot: []},
      {slot: [{pos:'wr', stand:'', route:'pll'},]},
      {}
    ]
  },
  // {pos:'wr', stand:'', route:'f'}
  {
    playName:"River Run",
    rows: [
      {slot: []},
      {slot: []},
      {slot: []},
      {slot: [
        {pos:'cs', stand:'', route:'pll'},
        {pos:'wr', stand:'left', route:'fl'},
        {pos:'wr', stand:'right', route:'pr'},
        {pos:'qb', stand:'up', route:''},
        {pos:'rb', stand:'back', route:'rr'},
        {pos:'rb', stand:'backB', route:'rl'},
      ]},
      {slot: [{pos:'wr', stand:'left', route:'fl'},]},
      {slot: []},
      {slot: []},
    ]
  },
  {
    playName:"Rover Rover",
    rows: [
      {slot: []},
      {slot: []},
      {slot: []},
      {slot: [
        {pos:'cs', stand:'', route:'f'},
        {pos:'qb', stand:'up', route:''},
        {pos:'wr', stand:'up left', route:'pll'},
        {pos:'wr', stand:'up right', route:'prl'},
        {pos:'rb', stand:'back left', route:'sl'},
        {pos:'rb', stand:'back right', route:'sr'},

      ]},
      {slot: [{pos:'wr', stand:'back left', route:'rr'},]},
      {slot: []},
      {slot: []},
    ]
  },
  {
    playName:"Flood Right",
    rows: [
      {slot: []},
      {slot: []},
      {slot: []},
      {slot: [
        {pos:'cs', stand:'', route:'sl'},
        {pos:'qb', stand:'up', route:''},
        {pos:'rb', stand:'right', route:'pll'},
      ]},
      {slot: [{pos:'wr', stand:'', route:'fl'},]},
      {slot: [
        {pos:'wr', stand:'', route:'fl'},
        {pos:'wr', stand:'left', route:'fl'},
      ]},
      {slot: [{pos:'wr', stand:'', route:'fl'},]},
    ]
  },
]
export default plays
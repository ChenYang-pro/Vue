<template>
  <div class="hello">
    <Count :num="num" v-on:incre="increment" @decre="decrement"/>
    <p><span>Parent num: {{num}}</span></p>
  </div>
</template>

<script>
import Count from './Count'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: 100
    }
  },
  components: {
    Count
  },
  methods: {
    increment () {
      this.num++
    },
    decrement () {
      this.num--
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

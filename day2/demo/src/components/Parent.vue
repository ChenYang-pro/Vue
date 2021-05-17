<template>
  <div>Hello Vue!
    <Son message1='JavaScript' message2='HTML/CSS' :func1="myFunc"/>
    {{count}}
  </div>
  
</template>

<script>
// 父子组件通信方式1：父组件通过props的方式向子组件传递值
import Son from "./Son";
export default {
  components: {
    Son
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    myFunc(c){
      this.count+=c
    }
  },
};
</script>
<style>
</style>

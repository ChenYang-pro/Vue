<template>
  <div>
    {{ message1 }}
    {{ message2 }} 
    <p></p>
    <button @click="myClick(count)">点击加1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count:1,
    }
  },
  props: {
      message1: String,
      message2: String,
      func1: Function
  },
  methods: {
      myClick(){
          this.func1(this.count)
      }
  },
}
</script>
<style>
</style>

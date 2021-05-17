<template>
  <div>
    <button v-on:click="increment">点击加1</button>
    <button @click="decrement">点击减1</button>
    <p>
      <span>{{ num }}</span>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['num'],
  methods: {
    increment () {
      this.$emit('incre')
    },
    decrement () {
      this.$emit('decre')
    }
  }
}
</script>
<style>
</style>

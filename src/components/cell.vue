<template>
    <div class="hello">
      <a href="index.html">index</a>
    <a href="cell.html">cell.html</a>
        <h1>{{ msg }}</h1>
        <p>你为什么不用话</p>
    </div>
</template>

<script>
export default {
  name: 'cell',
  data () {
    return {
      msg: '多页面测试'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

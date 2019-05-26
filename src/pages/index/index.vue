<template>
  <div id="app">
    sdasdasd
    <!-- <router-view></router-view> -->
    <Hello></Hello>

    <Index-part></Index-part>
  </div>
</template>


<script>
import Hello from '@/components/Hello'
import IndexPart from '@/components/IndexPart'
export default {
  name: 'app',
  data:{
    indexData:{
      name:"yjh"
    }
  },
  components: { 
    Hello ,
    IndexPart
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

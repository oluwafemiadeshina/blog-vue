<template>
  <HeaderView/>
  <CardLarge/>
  <div class="container">
  <div   class="row"> 
    <cardMini/>
    <cardMini/>
    <cardMini/>
    <cardMini/>
    <cardMini/>
    <cardMini/>
  </div>
  </div>
  <JoinWriters/>
</template>

<script>
import HeaderView from './components/HeaderView.vue'
import CardLarge from './components/CardLarge.vue'
import JoinWriters from './components/JoinWriters.vue'
import cardMini from './components/cardMini.vue' 

export default {
  name: 'App',
  components: {
    HeaderView,
    CardLarge,
    JoinWriters,
    cardMini
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.container{
  width: 80%;
}
      .border{
        border: 1px solid #F5F5F5 !important;
      }
</style>

<template>
<div class="col-md-4 pb-4" v-for="blog in allBlogs" :key="blog.id">
      <div class="card border p-1">
        <div style="background-color: #E5F4FF;">
          <img src="../assets/img/mini.png">
        </div>
        <span style="font-family: SF Pro Text; font-size: 12px; font-weight: 500; line-height: 14px; letter-spacing: 0em; text-align: left; padding-top:16px;">Front-end · 1 Hour Ago</span>
        <h5 style="font-family: SF Pro Text; font-size: 18px; font-weight: 700; line-height: 21px; letter-spacing: 0em; text-align: left;">{{fetchBlogs.title}}</h5>
        <p style="font-family: SF Pro Text; font-size: 14px; font-weight: 400; line-height: 21px; letter-spacing: 0em; text-align: left; color:#6E6E6E;">The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
        <div>
          <span style="font-family: SF Pro Text; font-size: 12px; font-weight: 500; line-height: 14px; letter-spacing: 0em; text-align: left;">3 Min Read</span>
          <span style="float:right; color:#1473E6;font-family: SF Pro Text; font-size: 12px; font-weight: 700; line-height: 14px; letter-spacing: 0em; text-align: left;">Read Full<img src="../assets/icons/arrow-blue.svg" width="24px"></span>
        </div> 
      </div>
    </div>
</template>

<script>
 
// import {mapGetters, mapActions} from 'vuex' 

 

export default {
  name: 'cardMini',
  // methods:{
  //   ...mapActions(['fetchBlogs'])
  // },
  // computed: mapGetters(['allBlogs']),
  // created(){
  //   this.fetchBlogs();
  // } 
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

import Vuex from 'vuex'
import Vue from 'vue'
import blogs from './modules/blogs'


Vue.use(Vuex);
export default new Vuex.Store({
     modules:{
         blogs
     }
})
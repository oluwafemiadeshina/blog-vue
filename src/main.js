import { createApp } from 'vue'
// import VueRouter from 'vue-router'
// import SingleView from './components/SingleView'
import store from './assets/store'
import App from './App.vue'


// Vue.use(VueRouter);



// const routers = [
//     {
//         path: '/single', component: SingleView
//     },
// ]

createApp(store, App).mount('#app')

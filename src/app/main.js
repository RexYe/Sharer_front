import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from '../router'
import store from '../store'

Vue.use(MintUI)

new Vue({
  el: '#app',
  router,
  data(){
    return {

    }
  },
  store,
  template: '<App/>',
  components: { App },
  created() {
    // console.log(this)
  },
  computed:{
  	computedMethod(){
  		return 'hhhh'
  	}
  },
  updated(){
  }
})

<template>
  <div id="app">
    <transition mode='out-in' :name="transitionName">
    <router-view class='child-view'></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      transitionName:'slide-left',
    }
  },
  beforeMount(){
		!(function(doc, win) {
						 var docEle = doc.documentElement,//获取html元素
								 event = "onorientationchange" in window ? "orientationchange" : "resize",//判断是屏幕旋转还是resize;
								 fn = function() {
										 var width = docEle.clientWidth;
										 width && (docEle.style.fontSize = 16  * (width / 320) + "px");//设置html的fontSize，随着event的改变而改变。
										 console.log(width);
								 };

						 win.addEventListener(event, fn, false);
						 doc.addEventListener("DOMContentLoaded", fn, false);
				 }(document, window));
	},
  methods:{
    changeComputed(){

    }
  },
  watch:{
    '$route'(to,from){
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  computed:{
    appComputed(){

    }
  },
}
</script>

<style>
#app{
  font-size: 1rem;
}
/*.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}*/
</style>

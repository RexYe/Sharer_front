<template>
		<dl id='my_bottom_menu' :style='{backgroundColor:background}' >
		  <dd v-for='(item,index) in list' :class='{on:(type===item.type||+type===index+1),on:$route.path === `/${item.to}`}' @click='toOther(item.to,type===item.type||+type===index+1)'>
		    <i :class='item.type'></i>
					<span>{{item.name}}</span>
		  </dd>
		</dl>
</template>

<script>
import Vue from 'vue'
import './bottomMenu.css'

export default {
	name: 'bottomMenu',
	props: ['background',"type"],
	data () {
		return {
			list: [{
				name: '首页',
				type: 'index',
				to:'',
			},
			{
				name:"发布",
				type:'publish',
				to:'publish',
			},
			{
				name: '我的',
				type: 'me',
				to: 'me',
			}]
		}
	},
	methods:{
		toOther:function(to,run) {
			if(this.$route.path!==`/${to}`){
				location.hash = to;
			}
		}
	}
}
</script>

<style scoped>
.hello{
	background: black;
}
</style>

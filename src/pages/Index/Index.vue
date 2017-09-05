<template>
	<div class="index">
		<div class="search-div">
			<!-- <input type="text" name="" value="" placeholder="搜索">
			<a href="#"><img src="../../img/search.png" alt=""></a> -->
			<mt-search
		  v-model="value"
		  cancel-text="取消"
		  placeholder="搜索">
		</mt-search>
		</div>
		<div class="choose-school">
			<mt-popup
			v-model="popupVisible"
			popup-transition="popup-fade"
			position="right">
			<div class="school-list">
				<div class="shcool-detail" v-for="(item,index) in school_list">
					<span>{{item.name}}</span>
					<div class="college-list-container">
						<div class="college-list" v-for="i in item.college ">
							{{i.college}}
						</div>
					</div>
				</div>
			</div>
		</mt-popup>
		</div>
		<div class="jiaocaiandfenlei">
			<div class="top-mt-navbar">
				<mt-navbar v-model="selected">
				  <mt-tab-item id="jiaocai">教材</mt-tab-item>
				  <mt-tab-item id="fenlei">分类</mt-tab-item>
				</mt-navbar>
				<div class="school-choose-div" v-model="popupVisible" @click="change_popupVisible()">
					计算机∨
				</div>
			</div>
<!-- tab-container -->
<div class="course-container">
	<mt-tab-container v-model="selected"  swipeable>
	  <mt-tab-container-item id="jiaocai">
				<mt-cell v-for="item in material" :title="item.name" @click.native="changepage(item.key)">
			</mt-cell>
	  </mt-tab-container-item>
	  <mt-tab-container-item id="fenlei">
	    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
	  </mt-tab-container-item>
	</mt-tab-container>
	<div class="course-selected">
		<div class="book-detail" v-for="(item,index) in book_datail[0][this.book_datail_flag]"  :class='{on:(type===item.type||+type===index+1),on:$route.path === `/${item.to}`}' @click='toOther(item.to,type===item.type||+type===index+1)'>
			<img :src="item.imgsrc" alt="">
			<div class="book-name">
				{{item.name}}
			</div>
		</div>
	</div>
</div>
		</div>
		<bottomMenu1 type="1"/>
	</div>
</template>

<script>
import Vue from 'vue'

import './Index.css'
import 'mint-ui/lib/style.css'
import bottomMenu1 from '../../components/bottomMenu/bottomMenu'
import { TabContainer, TabContainerItem,Navbar, TabItem,Popup,Picker,Search } from 'mint-ui';


Vue.component(Picker.name, Picker);
Vue.component(Popup.name, Popup);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Search.name, Search);

// 全局组件
Vue.component('todo-item', {
	props:['todo'],
	template: '<div><li>{{todo.text}}</li></div>'
})

export default {
	name: 'hello',
	data () {
		return {
			selected:'jiaocai',
			popupVisible:false,
			//教材分类
			material:[{
				name:'通识课程',
				key:'tskc',
			},{
				name:'大类基础',
				key:'dljc'
			},{
				name:'数字媒体',
				key:'szmt'
			},{
				name:'软件工程',
				key:'rjgc'
			},{
				name:'物联网',
				key:'wlw'
			},{
				name:'网络工程',
				key:'wlgc'
			},{
				name:'计算机与自动化',
				key:'jsjyzdh'
			},{
				name:'计算机科学与技术',
				key:'jsjkxyjs'
			}],
			book_datail_flag:'tskc',
			book_datail:[{
				tskc:[{
					name:'马克思主义基本原理概论',
					key:'mkszyjbylgl',
					imgsrc:''
				},{
					name:'毛泽东思想和中国社会主义理论体系概论',
					key:'maogai',
					imgsrc:'',
				}],
				wlw:[{
					name:'自动控制原理',
					key:'zdkzyl',
					imgsrc:'http://www.dayila.net/_static/kh_book_cover/2012_07/13929643555306f303521bb0.96867513.jpg',
					type:'bookdetail',
					to:'bookdetail'
				},{
					name:'无线传感网络',
					key:'wxcgwl',
					imgsrc:'',
				}],
				rjgc:[{
					name:'软件工程导论',
					key:'rjgcdl'
				},{
					name:'java',
					key:'java'
				}]
			}],
			school_list:[
				{
					name:'浙江工业大学',
					college:[
						{
							college:'计算机学院'
						},
						{
							college:'经贸管理学院'
						},
						{
							college:'机械学院'
						},
						{
							college:'艺术学院'
						},
						{
							college:'信息学院'
						}
					]
				},
				{
					name:'浙江大学',
					college:[
						{
							college:'计算机学院'
						},
						{
							college:'经贸管理学院'
						},
					]
				}
			]
		}
	},
	components: {
		bottomMenu1
	},
	methods: {
		changepage(key){
			this.book_datail_flag=key;
		},
		change_popupVisible(){
			this.popupVisible = true;
			console.log(this.popupVisible);
		},
		toOther:function(to,run) {
      if(this.$route.path!==`/${to}`){
        location.hash = to;
      }
    }

	},
	computed:{
	},
	watch:{
	}
}
</script>

<style scoped>

</style>

<template>
	<div>
		<span>3</span>
		<router-link to="/">上一页</router-link>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
	name:'TestVuex',
	components:{

	},
	computed:{
		// ...mapGetters([
		// 	'getter1',
		// 	'get1'
		// 	]),
		// ...mapState([
		// 	'count',
		// 	'part2'
		// ])
	},
	data(){
		return {
		}
	},
	methods:{
		// changeStore(){
		// 	this.$store.commit('increment')
		// },
		// ...mapMutations([
		// 	'decrement',
		// 	'add'
		// 	]),
		// ...mapActions([
		// 	'incrementAsync',
		// 	'addSync'
		// 	])
	}
}
</script>
<style lang='sass' scoped>
</style>

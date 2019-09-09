<template>
	<view>
		<view class="good-info">
			<input type="text" v-model="good.name" placeholder="请输入产品标题">
			<textarea v-model="good.info" placeholder="产品详细描述,材质,大小,适合怎可佩戴,能够多没多,美美哒." />
		</view>
		<view class="img-box">
			<image src="../../static/img/icon2.png" mode=""></image>
		</view>
		<view class="">
			<text></text>
			
		</view>
		<button class="add" @click="addStore">保存到仓库</button>
	</view>
</template>

<script>
	import {showToast} from '@/common/common.js' 
	export default {
		data() {
			return {
				good:{}
			};
		},
		methods:{
			addStore(){
				if(this.good.name != ""){
					showToast("请填写产品标题")
					return ;
				}
				if(this.good.info != ""){
					showToast("请填写产品详情")
					return ;
				}
				// uni.request()
			}
		}
	}
</script>

<style lang="scss">

</style>

<template>
	<view>
		<image src="../../static/img/test.jpg" mode=""></image>
		<view class="good-content">
			<view>
				<text class="sale-price">¥1000</text>
				<text class="origin-price">¥2000</text>
			</view>
			<view>
				商品简单的描述,啦啦啦,擦书,如何拉单极大,简单两行,哈哈哈哈阿道夫还是,ADSL开发库砥砺奋进
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad(){
			uni.setNavigationBarTitle({
				title:"JAMES的仓库"
			})
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">

</style>

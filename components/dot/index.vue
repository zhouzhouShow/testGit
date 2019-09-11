<template>
	<view class="dot-main">
		<view :class="['dot-item',current==index?'active':'']" v-for="(item,index) in list" :key="index"></view>
	</view>
</template>
<style>
	.dot-main {
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.dot-item {
		width: 15upx;
		height: 15upx;
		border: 1upx solid #FFFFFF;
		margin: 0 2upx;
		background: #F4F4F4;
		box-sizing: border-box;
		border-radius: 50%;
	}
	.active {
		background: #2B69F8;
	}
</style>
<script>
	export default {
		props: [ 'list','current'],
		data() {
			return {
				
			};
		}
	}
</script>

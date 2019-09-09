<template>
	<view class="sreach">
		<input type="text" class="input-box" placeholder="搜索内容" />
		<view class="tips-text">
			历史搜索
		</view>
		<view class="sreach-tag">
			<text v-if="list.length" v-for="item in list" :key="item">{{item}}</text>
			<view class="no-data" v-if="!list.length">暂无历史搜索</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:["钻石","戒指","晶手链"]
			};
		}
	}
</script>

<style lang="scss">
	.sreach{
		padding:40upx 40upx;
	}
	.input-box{
		background: #F2F2F2;
		border-radius: 30upx;
		font-size: 30upx;
		padding:10upx;
		padding-left:30upx;
		margin:0 auto;
	}
	.tips-text{
		margin:20upx 0;
		font-size:32upx;
	}
	.sreach-tag{
		display:flex;
		flex-wrap:wrap;
		text{
			margin:0 30upx 20upx 0;
			padding:10upx 20upx;
			text-align: center;
			font-size: 28upx;
			background: #F2F2F2;
			
		}
	}
</style>

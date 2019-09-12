<template>
	<view class="sreach">
		<view class="sreach-box">
			<view class="left-input">
				<!-- <image src="../../static/img/icon2_hover.png" class="icon" mode=""></image> -->
				<text class="iconfont icon iconsousuo"></text>
				<input type="text" class="input-box" placeholder="搜索内容" />
			</view>
			<view class="sreach-btn">搜索</view>
		</view>
		
		<view class="tips-text">
			<text>历史搜索</text>
			<text v-if="historyList.length">清空</text>
		</view>
		<view class="sreach-tag">
			<text v-if="historyList.length" v-for="item in historyList" :key="item">{{item}}</text>
			<view class="no-data" v-if="!historyList.length">暂无历史搜索</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				historyList:["钻石","戒指","晶手链"],
				// historyList:[]
			};
		}
	}
</script>

<style lang="scss">
	@import '@/common/common.scss';
	.sreach{
		padding:30upx;
	}
	.sreach-box{
		@include setDisplay;
		justify-content: space-between;
		white-space: nowrap;
		.left-input{
			width:600upx;
			height:78upx;
			border-radius: 10upx;
			// padding:23upx;
			overflow:hidden;
			position:relative;
			.icon{
				position: absolute;
				left:20upx;
				top:50%;
				margin-top:-20upx;
				width:40upx;
				height: 40upx;
				font-size: 36upx;
				color: #2F69F8;
			}
			.input-box{
				background: #F2F2F2;
				padding-left:81upx;
				width:100%;
				height:100%;
				// padding-left:30upx;
				font-size: 32upx;
			}
		}
		
		.sreach-btn{
			font-size: 32upx;
			color: #666;
		}
	}
	
	.tips-text{
		display: flex;
		justify-content: space-between;
		margin:39upx 0 28upx 0;
		font-size:32upx;
	}
	.sreach-tag{
		display:flex;
		flex-wrap:wrap;
		text{
			margin:0 30upx 20upx 0;
			padding:17upx 33upx;
			text-align: center;
			font-size: 32upx;
			background: #F2F2F2;
			border-radius: 10upx;
			
		}
	}
	.no-data{
		color: #999;
		font-size: 32upx;
	}
</style>

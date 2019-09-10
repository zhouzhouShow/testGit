<template>
	<view class="content">
		<!-- <view class="">
			<image src="../../static/img/test.jpg" mode=""></image>
			<image src="../../static/img/test.jpg" mode=""></image>
		</view> -->
		<!-- <image src="../../static/img/test.jpg" mode=""></image> -->
		<view class="top-operation">
			<text>分享同行货源</text>
			<text>上传你的货源</text>
		</view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in bannerList" >
				<view class="swiper-item" :key="item">
					<image src="../../static/img/test.jpg" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="search">
			<input type="text" placeholder="单号/备注/货号/名称/电话/姓名">
			<text class="iconfont iconsousuo"></text>
		</view>
		<view class="text-area">
			<text class="title" @click="toGood">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				bannerList:[1,2,3,4]
			}
		},
		onLoad() {

		},
		methods: {
			toGood(){
				uni.navigateTo({
					url:'/pages/good/good'
				})
			}
		}
	}
</script>

<style lang="scss">
	.top-operation{
		display: flex;
		justify-content: space-between;
		width:100%;
		text{
			width:46%;
			text-align: center;
			font-size: 35upx;
			color: #fff;
			height:100upx;
			line-height: 100upx;
			border-radius: 20upx;
		}
		text:nth-child(1){
			background:#2F69F8;
		}
		text:nth-child(2){
			background:#FFB701;
		}
	}
	.search{
		font-size: 30upx;
		background: #F2F2F2;
		border-radius: 10upx;
		margin:20upx 0;
		padding:10upx 20upx;
	}
</style>

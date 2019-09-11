<template>
	<view class="success">
		<image src="../../static/img/test.jpg" mode=""></image>
		<view class="tips-text">
			<view>支付成功</view>
			<view>平台保护资金安全,收货确认再放款商家</view>
		</view>
		<view class="oparetion">
			<text class="back-home">回到首页</text>
			<text class="to-order-detail">查看订单</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.success{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 32upx;
	}
	.tips-text{
		margin:40upx 0;
		text-align: center;
	}
	.oparetion{
		text{
			border-radius: 10upx;
			text-align: center;
			color: #fff;
			font-size: 28upx;
			padding:10upx 30upx;
		}
		.back-home{
			background: #2F69F8;
		}
		.to-order-detail{
			background: #FFB701;
			margin-left:20upx;
		}
	}
</style>

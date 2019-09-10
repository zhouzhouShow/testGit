<template>
	<view class="withdraw">
		<view class="top-box">
			<view class="iconfont icondiqiu"></view>
			<view>可提现金额</view>
			<view>¥543</view>
			<view class="withdraw-content">
				<view>提现到您的微信零钱</view>
				<view>
					<text>提现至</text>
					<text class="iconfont icondiqiu"></text>
				</view>
				<view>
					<text>提现手续费</text>
					<text>0元</text>
				</view>
			</view>
			<button class="btn">提现</button>
			<view>提现至西联汇款,paypal,支付宝</view>
			<view>
				<radio-group @change="radioChange">
					<label for="">
						<radio value="2"/>西联汇款
					</label>
					<label for="">
						<radio value="2"/>paypal
					</label>
					<label for="">
						<radio value="1"/>支付宝
					</label>
				</radio-group>
			</view>
			<input class="input-user" type="text" placeholder="点击填写收款账户姓名">
			<input class="input-user" type="text" placeholder="点击填写收款账户">
			<view>提现手续费0.5%</view>
			<button class="btn">提现</button>
		</view>
		<view class="step">
			<view class="tips-title">提现记录</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			radioChange (e){
				console.log(e.target.value);
			}
		}
	}
</script>

<style lang="scss">
	.withdraw{
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		font-size: 28upx;
	}
	.top-box{
		width:70%;
		margin:0 auto;
		>view{
			margin-bottom:14upx;
		}
	}
	.input-user{
		// margin:0 auto;
		border:1px solid #FFB701;
		border-radius: 15upx;
		padding:12upx 30upx;
		font-size:28upx;
		margin-bottom:20upx;
	}
	.btn{
		width:150upx;
		color: #fff;
		font-size: 26upx;
		background: #FFB701;
	}
	.withdraw-content{
		background: #F8F8F8;
		padding:20upx 0;
	}
</style>

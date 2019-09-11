<template>
	<view class="paying">
		<input type="text" class="user-input" placeholder="点击填写收货人">
		<input type="text" class="user-input" placeholder="点击输入填写联系电话"/>
		<input type="text" class="user-input" placeholder="点击输入填写邮寄地址"/>
		<button class="sure-reset">确定/编辑</button>
		<view class="buy">
			<text>购买数量</text>
			<view class="num-btn">
				<Count :num="1"></Count>
			</view>
		</view>
		<view class="pay-type">
			<radio-group @change="changeRadio">
				<view class="radio-box">
					<label class="radio">
							<image src="../../static/img/icon1_hover.png" mode=""></image>
							<text>微信支付</text>
							<radio value="wx" checked="checked" />
					</label>
				</view>
				<view class="radio-box">
					<label class="radio">
							<image src="../../static/img/icon1_hover.png" mode=""></image>
							<text>汇款账户</text>
							<radio value=""  />
					</label>
				</view>
				<view class="radio-box">
					<label class="radio">
							<image src="../../static/img/icon1_hover.png" mode=""></image>
							<text>汇款账户</text>
							<radio value="" />
					</label>
				</view>
			</radio-group>
		</view>
		<view class="tips1">
			*PAYPAL平台手续费:0.1%
		</view>
		<view class="pay-money-content">
			<view class="top-box">
				<text class="pay-text">支付总额</text>
				<text class="pay-money">¥3539</text>
			</view>
			<view class="pay-input-box" v-if="payType != 'wx'">
				<input type="text" class="pay-input" placeholder="点击填写你的付款账户姓名">
				<input type="text" class="pay-input" placeholder="点击填写你的付款账户">
			</view>
			<button class="wx-pay btn" v-if="payType == 'wx'">确定支付</button>
			<button class="other-pay btn" v-if="payType != 'wx'">提交您的转账账户信息</button>
			<view class="tips2">
				平台冻结款项,收货确认后才放款给商家
			</view>
		</view>
	</view>
	
</template>

<script>
	import Count from '@/components/count'
	export default {
		data() {
			return {
				payType:'wx'
			};
		},
		methods:{
			changeRadio(e){
				console.log(e.target.value);
				let val=e.target.value;
				switch(val){
					case 'wx':
						this.payType=val;
						break;
					case '':
						this.payType=val;
						break;
					default:
						break;
				}
			}
		},
		components:{
			Count
		}
	}
</script>

<style lang="scss">
	$itemBgColor:#F8F8F8;
	.paying{
		padding:10upx 30upx;
	}
	.user-input{
		border:1px solid #FFB701;
		border-radius: 12upx;
		text-align: center;
		padding:10upx 0; 
		font-size: 28upx;
		margin-bottom:20upx;
		
	}
	
	.sure-reset{
		background: #FFB701;
		font-size: 28upx;
		color: #fff;
		width:180upx;
		border:none;
		
	}
	.buy{
		display:flex;
		justify-content:space-between;
		align-items:center;
		background:$itemBgColor;
		border-radius:10upx;
		font-size: 30upx;
		margin-bottom:20upx;
		padding:20upx 20upx 20upx 40upx;
		.num-btn{
			width:180upx;
		}
	}
	.pay-type{
		background:$itemBgColor;
		border-radius:10upx;
		padding:20upx 6upx;
		font-size:30upx;
		.radio{
			width:100%;
			display:flex;
			justify-content:space-between;
			align-items:center;
			image{
				width:80upx;
				height:80upx
			}
		}
	}
	.tips1{
		font-size: 24upx;
		color: #959595;
	}
	.pay-money-content{
		text-align:center;
		.top-box{
			display:flex;
			flex-direction:column;
			.pay-text{
				font-size: 30upx;
			}
			.pay-money{
				font-size: 40upx;
			}
		}
		.pay-input-box{
			width:70%;
			margin:0 auto;
			.pay-input{
				@extend .user-input;	
			}
		}
		.btn{
			width:90%;
			margin:0 auto;
			font-size: 32upx;
			color: #fff;
			margin-bottom:20upx;
		}
		.wx-pay{
			background: #00C51E;
		}
		.other-pay{
			background: #FFB701;
		}
		.tips2{
			@extend .tips1;
			text-align: center;
		}
		
	}
	
	
</style>

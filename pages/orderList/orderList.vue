<template>
	<view class="orderList">
		<view class="nav1">
			<view class="list-box">
				<view class="item-box">
					<text>¥7000</text>
					<text>总销售额</text>
				</view>
				<view class="item-box">
					<text>¥7000</text>
					<text>冻结金额</text>
				</view>
				<view class="item-box">
					<text>¥7000</text>
					<text>可提现</text>
				</view>
			</view>
			<button class="withdraw-btn" @click="toWithdraw">提现</button>
		</view>
		<view class="nav1">
			<view class="list-box">
				<view class="item-box">
					<text>¥7000</text>
					<text>总销售额</text>
				</view>
				<view class="item-box">
					<text>¥7000</text>
					<text>冻结金额</text>
				</view>
				<view class="item-box">
					<text>¥7000</text>
					<text>可提现</text>
				</view>
			</view>
			<button class="withdraw-btn">退货地址</button>
		</view>
		<view class="order-box">
			<view class="nav-title">
				<text @click="changeNav(0)" :class="status == 0 ? 'active' : '' ">全部</text>
				<text @click="changeNav(1)" :class="status == 1 ? 'active' : '' ">代发货</text>
				<text @click="changeNav(2)" :class="status == 2 ? 'active' : '' ">待确认</text>
				<text @click="changeNav(3)" :class="status == 3 ? 'active' : '' ">已完成</text>
				<text @click="changeNav(4)" :class="status == 4 ? 'active' : '' ">退货</text>
			</view>
			<view class="search">
				<input type="text" placeholder="单号/备注/货号/名称/电话/姓名">
				<text class="iconfont iconsousuo"></text>
			</view>
			<view class="item-order">
				<view class="item-content">
					<view class="item-number">
						<text class="item-crateTime">2019-10-11 11:10</text>
						<text class="item-number">订单号: 15151411</text>
						<text class="item-status status">代发货</text>
					</view>
					<view class="item-info">
						<image class="item-img" src="../../static/img/test.jpg" mode=""></image>
						<view class="item-text">
							<view class="item-name">
								商品名称商品名称
							</view>
							<view class="item-price">¥1000</view>
						</view>
					</view>
				</view>
				<view class="item-express">
					<text>物流单号: 未填</text>
					<text>实付金额: ¥2000</text>
				</view>
				<view class="operation">
					<text>确认收货</text>
					<text>订单详情</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>	
	export default {
		data() {
			return {
				status:0
			};
		},
		methods:{
			changeNav(num){
				this.status=num;
			},
			toWithdraw(){
				uni.navigateTo({
					url:'../withdraw/withdraw'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import './index.scss';
</style>

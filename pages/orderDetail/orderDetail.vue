<template>
	<view class="orderDetail">
		<view class="order-info-box">
			<image class="user-img" src="../../static/img/test.jpg" mode=""></image>
			<view class="order-info">
				<view class="user-name">
					<text class="user">JAME的厂库</text>
					<text class="price">¥ 1000</text>
				</view>
				<view class="order-name">商品名商品名</view>
				<view class="order-des">简单的产品描述,参数,大药要求,如何落单极大简单两行描述</view>
			</view>
		</view>
		<view class="order-img">
			<image v-for="item in imgList" :key="item" src="../../static/img/test.jpg" class="imgs" mode=""></image>
		</view>
		<view class="order-details">
			<view class="row">
				<text>订单日期: 2019-10-02 23:05</text>
				<text>订单状态: 已完成</text>
			</view>
			<view class="row">
				<text>订单金额: 5000元</text>
				<text>邮寄单号: 32434234 </text>
			</view>
			<view class="row">
				<text>收货人: 刘德华</text>
				<text>联系电话: 13502832122</text>
			</view>
			<view class="row">收货地址</view>
			<view class="row">备注: 52多福路</view>
			<!-- 已退货 -->
			<view class="refunded">
				<text>状态: 退货退款</text>
				<text>物流公司: 韵达快递</text>
				<text>物流单号: 324324</text>
				<text>卖家收货人: 乌拉拉</text>
				<text>联系电话: 1543543543</text>
				<text>退货地址: 广东省广州市天河区珠江稀拉拉</text>
			</view>
		</view>
		
		<view class="refound-box" v-if="isRefound">
			<picker class="picker" mode="selector" :value="logisticsIndex" range-key="bankName" :range="logisticsList" @change="changePiker">
				<view>{{logisticsList[logisticsIndex].bankName}}</view>
			</picker>
			<input type="text" class="logistics-num" placeholder="点击输入填写邮寄单号"/>
		</view>
		<view class="operation">
			<button v-if="!isRefound" @click="toRefund">申请退货</button>
			<button v-if="!isRefound">查看物流</button>
			<button @click="sureRefund" v-if="isRefound">确定退货</button>
		</view>
		<view class="seller-info" v-if="isRefound">
			<view>卖家收货人: 乌拉拉</view>
			<view>联系电话: 16444321424</view>
			<view>退货地址: 广东省广州市天河区珠江道稀拉拉乌拉拉</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList:[1,2,3,4,5,6],
				isRefound:false,
				logisticsIndex:0,
				logisticsList: [{
							code: 'ICBC',
							bankName: '中国工商银行'
						},
						{
							code: 'CMB',
							bankName: '招商银行'
						},
						{
							code: 'ABC',
							bankName: '中国农业银行'
						},
						{
							code: 'CCB',
							bankName: '中国建设银行'
						},
						{
							code: 'CMBC',
							bankName: '中国民生银行'
						},
						{
							code: 'SPDB',
							bankName: '浦发银行'
						},
						{
							code: 'GDB',
							bankName: '广发银行'
						},
						{
							code: 'HXB',
							bankName: '华夏银行'
						},
						{
							code: 'PSBC',
							bankName: '邮政银行'
						},
						{
							code: 'BOC',
							bankName: '中国银行'
						},
						{
							code: 'CEB',
							bankName: '光大银行'
						},
						{
							code: 'BEA',
							bankName: '东亚银行'
						},
						{
							code: 'COMM',
							bankName: '交通银行'
						},
						{
							code: 'CITIC',
							bankName: '中信银行'
						},
						{
							code: 'BJB',
							bankName: '北京银行'
						},
						{
							code: 'SPAB',
							bankName: '平安银行'
						}
				],
				
			};
		},
		methods:{
			toRefund(){
				let _this=this;
				uni.showModal({
					title:'提示',
					content:"确认要申请退货?",
					success(res){
						if(res.confirm){
							console.log("确定退货");
							_this.isRefound = true;
						}
					}
				})
			},
			sureRefund(){
				
			}
		}
	}
</script>

<style lang="scss">
	@import './index.scss';
</style>

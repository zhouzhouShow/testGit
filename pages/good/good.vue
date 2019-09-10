<template>
	<view class="good">
		<view class="good-info">
			<input class="good-title" type="text" v-model="good.name" placeholder="请输入产品标题">
			<textarea v-model="good.info" class="good-info" placeholder="产品详细描述,材质,大小,适合怎可佩戴,能够多没多,美美哒." />
		</view>
		<view class="img-box">
			<image class="chooseImg" v-if="imgList.length" :src="item" mode="" v-for="item in imgList"></image>
			<view class="add-btn" @click="chooseImg" v-if="imgList.length<9">
				<text class="iconfont iconziyuan"></text>
			</view>
		</view>
		<view class="">
			<text></text>
			
		</view>
		<view class="sale-price">
			<label for="">谁可以看</label>
			<picker @change="updateAuth" :value="index" :range="authList" class="picker">
				<view class="uni-input">{{authList[index]}}</view>
			</picker>
			<!-- <input type="text" placeholder="填写你的专属价格"> -->
		</view>
		<view class="sale-price">
			<label for="">现售价格</label>
			<input type="text" v-model="good.salePrice" placeholder="填写你的专属价格">
		</view>
		<view class="sale-price">
			<label for="">市场价格</label>
			<input type="text" v-model="good.marketPrice" placeholder="填写市场价格供别人参考">
		</view>
		
		<button class="add" @click="addStore">保存到仓库</button>
	</view>
</template>

<script>
	import {showToast} from '@/common/common.js' 
	export default {
		data() {
			return {
				good:{},
				imgList:[],
				authList:["所有人可见","粉丝可见"],
				index:0
				// imgList:[1,2,3,4,5,6,7,8]
			};
		},
		methods:{
			addStore(){
				if(this.good.name != ""){
					showToast("请填写产品标题")
					return ;
				}
				if(this.good.info != ""){
					showToast("请填写产品详情")
					return ;
				}
				if(this.good.salePrice != ""){
					showToast("请填写销售价格")
					return ;
				}
				if(this.good.marketPrice != ""){
					showToast("请填写市场销售价格")
					return ;
				}
				// uni.request()
			},
			updateAuth(){
				
			},
			chooseImg(){
				let _this=this;
				uni.chooseImage({
					count:1,
					sizeType:["compressed"],
					success: function (res) {
						_this.imgList.push(res.tempFilePaths)
					        console.log(JSON.stringify(res.tempFilePaths));
					    }
				})
			}
		}
	}
</script>

<style lang="scss">
	.good{
		padding:20upx 40upx;
		.good-info{
			font-size:32upx;
			.good-title{
				width:90%;
				margin:0 auto;
				border:1px solid #FFB701;
				border-radius: 10upx;
				padding:20upx 30upx;	
			}
			.good-info{
				height: 150upx;
				margin-top:30upx;
				@extend .good-title
			}
			
		}
		.img-box{
			display:flex;
			justify-content:flex-start;
			flex-wrap:wrap;
			margin-top:30upx;
			.add-btn{
				width:32%;
				height:180upx;
				margin-bottom:10upx;
				display:flex;
				justify-content:center;
				align-items:center;
				text{
					font-size: 80upx;
					color: #2F69F8;
				}
			}
			.chooseImg{
				width:32.2%;
				height:180upx;
				margin-bottom:10upx;
				margin-right:1%;
			}
		}
		.sale-price{
			display: flex;
			font-size: 30upx;
			align-items: center;
			border-bottom: 1px solid #F2F2F2;
			margin-bottom:20upx;
			padding:14upx 0;
			input{
				margin-left:30upx;
			}
			.picker{
				margin-left:30upx;
				width:75%;
			}
		}
		.add{
			background: #2F69F8;
			color: #fff;
			width:300upx;
			font-size: 30upx;
			padding:10upx 0;
			margin-top:80upx;
		}
	}
	
</style>

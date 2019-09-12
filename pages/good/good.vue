<template>
	<view class="good">
		<view class="good-info">
			<input class="good-title" type="text" v-model="good.name" placeholder="请输入产品标题">
			<view class="text-area">
				<textarea v-model="good.info" class="good-info" placeholder="产品详细描述,材质,大小,适合怎可佩戴,能够多没多,美美哒." />
				<view class="text-max">
					{{good.info != '' ? good.info.length :'0'}}/200
				</view>
			</view>
			
		</view>
		<view class="img-box">
			<image class="chooseImg" v-if="imgList.length" :src="handlerImgUrl(item)" mode="" v-for="item in imgList"></image>
			<view class="add-btn" @click="chooseImg" v-if="imgList.length<9">
				<text class="iconfont iconicon-test"></text>
			</view>
		</view>
		<view class="">
			<text></text>
			
		</view>
		<view class="sale-price">
			<image class="icon" src="../../static/img/icon2_hover.png" mode=""></image>
			<label for="">谁可以看</label>
			<picker @change="updateAuth" :value="index" :range="authList" class="picker">
				<view class="uni-input">{{authList[index]}}</view>
			</picker>
			<text class="iconfont iconweibiaoti34 right"></text>
			<!-- <input type="text" placeholder="填写你的专属价格"> -->
		</view>
		<view class="sale-price">
			<image class="icon" src="../../static/img/icon2_hover.png" mode=""></image>
			<label for="">现售价格</label>
			<input type="text" v-model="good.salePrice" placeholder="填写你的专属价格">
		</view>
		<view class="sale-price">
			<image class="icon" src="../../static/img/icon2_hover.png" mode=""></image>
			<label for="">市场价格</label>
			<input type="text" v-model="good.marketPrice" placeholder="填写市场价格供别人参考">
		</view>
		
		<button class="add" @click="addStore">保存到仓库</button>
	</view>
</template>

<script>
	import {showToast} from '@/common/common.js' 
	import {uploadImg,addGood} from '@/service/base.js'
	export default {
		data() {
			return {
				good:{
					info:''
				},
				imgList:['/uploads/20190912/d823bdee9e3e16698ec72f79e4006fdc.jpg','/uploads/20190912/d823bdee9e3e16698ec72f79e4006fdc.jpg','/uploads/20190912/d823bdee9e3e16698ec72f79e4006fdc.jpg'],
				authList:["所有人可见","粉丝可见"],
				index:0
				// imgList:[1,2,3,4,5,6,7,8]
			};
		},
		onLoad() {
			setInterval(()=>{
				// this.addStore();
			},100)
		},
		methods:{
			addStore(){
				// if(this.good.name != ""){
				// 	showToast("请填写产品标题")
				// 	return ;
				// }
				// if(this.good.info != ""){
				// 	showToast("请填写产品详情")
				// 	return ;
				// }
				// if(this.good.salePrice != ""){
				// 	showToast("请填写销售价格")
				// 	return ;
				// }
				// if(this.good.marketPrice != ""){
				// 	showToast("请填写市场销售价格")
				// 	return ;
				// }
				let data={
					name:'紅翡翠',
					marks:'中小城市钻石的的撒红纱胜多负少都是对水晶打电话撒蓝宝石sdflhdsklhsd红宝石',
					is_kan:1,
					images:this.imgList,
					price:'12',
					originalPrice:'120',
					fas_id:'1',
					tex_id:'2',
				}
				addGood(data).then((res)=>{
					console.log(res);
					showToast(res.msg)
				}).catch((err)=>{
					console.log(err);
				})
		
			},
			updateAuth(){
				
			},
			chooseImg(){
				let _this=this;
				uni.chooseImage({
					count:1,
					sizeType:["compressed"],
					success: function (res) {
						let path=res.tempFilePaths[0];
						console.log(JSON.stringify(res.tempFilePaths));
						let params = {
							filePath: path,
							name: 'file'
						}
						uploadImg(params).then((res)=>{
							console.log(res);
							_this.imgList.push(res.data[0])
						}).catch((err)=>{
							console.log(err);
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.good{
		padding:30upx 20upx;
		.good-info{
			font-size:32upx;
			.good-title{
				width:90%;
				margin:0 auto;
				border-radius: 10upx;
				padding:20upx 30upx;
				margin-bottom:10upx;
				background: #F2F2F2;
				font-size: 28upx;
			}
			.text-area{
				position:relative;
				.good-info{
					@extend .good-title;
					height: 250upx;
					margin-bottom:22upx;
				}
				.text-max{
					position: absolute;
					right:9upx;
					bottom:9upx;
					color: #808080;
					font-size: 24upx;
				}
			}
			
		}
		.img-box:after{
			content: "";
			width:200upx;
			height:0upx;
			margin-bottom:10upx;
			margin-right:10upx;
		}
		.img-box{
			padding:0 47upx;
			display:flex;
			justify-content:space-between;
			flex-wrap:wrap;
			margin-top:30upx;
			margin-bottom:60upx;
			.add-btn{
				width:200upx;
				height:200upx;
				margin-bottom:10upx;
				display:flex;
				justify-content:center;
				align-items:center;
				background:#F2F2F2;
				text{
					font-size: 80upx;
					color: #2F69F8;
				}
			}
			.chooseImg{
				width:200upx;
				height:200upx;
				margin-bottom:10upx;
			}
		}
		.sale-price{
			display: flex;
			font-size: 28upx;
			align-items: center;
			border-bottom: 1px solid #F2F2F2;
			// margin-bottom:20upx;
			padding:28upx 0;
			.icon{
				width:30upx;
				height:30upx;
				margin-right:13upx;
			}
			.right{
				margin-left:auto;
			}
			input{
				margin-left:30upx;
			}
			.picker{
				margin-left:30upx;
				width:65%;
			}
		}
		.add{
			// background: #2F69F8;
			background: #CCCDD1;
			color: #fff;
			width:100%;
			font-size: 30upx;
			padding:10upx 0;
			margin-top:130upx;
		}
	}
	
</style>

<template>
	<view class="content">
		<view class="header">
			<image class="logo" src="../../static/img/test.jpg" mode=""></image>
			<view class="language">
				<text @click="changeLanguage('EN')" :class="languages == 'EN' ? 'active' : ''">Englist</text>
				<text @click="changeLanguage('CN')" :class="languages == 'CN' ? 'active' : ''">汉</text>
			</view>
		</view>
		<image class="photo-wall" src="../../static/img/test.jpg" mode=""></image>
		<view class="msg-box">
			<view class="price-today">
				<view>
					<text class="tips-test1">今日金价</text>
					<text class="price-today-num">¥317</text>
				</view>
				<view class="time">
					<text>CHINA SHENZHEN SHUIBEI</text>
					<text>2019/07/28 3:00AM</text>
				</view>
			</view>
			<view class="top-operation">
				<text>分享同行货源</text>
				<text @click="toGood">上传你的货源</text>
			</view>
			<swiper @change="change" class="swiper" :circular='true' :autoplay="false" :interval="3000" :duration="1000">
				<swiper-item v-for="item in bannerList" >
					<image src="../../static/img/test.jpg" mode="scaleToFill"></image>
				</swiper-item>
			</swiper>
			<!-- 自定义指示点 -->
			<Dot class="dot" :current="current" :list="bannerList" ></Dot>
			<view class="icon-hot">HOT</view>
			<view class="search">
				<!-- <input type="text" placeholder="单号/备注/货号/名称/电话/姓名"> -->
				<text class="sreach-tips">搜索需要的资源?</text>
				<text class="iconfont iconsousuo icon"></text>
			</view>
			
			<view class="nav">
				<view class="nav-title">
					<text @click="changeNav('0')" :class="status == 0 ? 'nav-active' : ''">发现新货</text>
					<text @click="changeNav('1')" :class="status == 1 ? 'nav-active' : ''">猜你喜欢</text>
				</view>
				<view class="filter-box">
					<view class="filter-item">
						<view class="left-type-text">
							<text class="dot"></text>
							<text>种类</text>
							<text class="line">|</text>
						</view>
						<view class="right-type-box">
							<scroll-view scroll-x="true"  show-scrollbar="false">
								<text>戒指</text>
								<text>手链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>耳饰</text>
							</scroll-view>
						</view>
					</view>
					<view class="filter-item">
						<view class="left-type-text">
							<text class="dot"></text>
							<text>材质</text>
							<text class="line">|</text>
						</view>
						<view class="right-type-box">
							<scroll-view scroll-x="true"  show-scrollbar="false">
								<text>戒指</text>
								<text>手链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>耳饰</text>
							</scroll-view>
						</view>
					</view>
					<view class="filter-item">
						<view class="left-type-text">
							<text class="dot"></text>
							<text>价格</text>
							<text class="line">|</text>
						</view>
						<view class="right-type-box">
							<scroll-view scroll-x="true"  show-scrollbar="false">
								<text>戒指</text>
								<text>手链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>项链</text>
								<text>耳饰</text>
							</scroll-view>
						</view>
					</view>
				</view>
				<view class="sort-type">
					<text class="iconfont iconxiala2 active">综合排序</text>
					<text>销量</text>
					<text>新品</text>
					<text>价格</text>
				</view>
			</view>
		</view>
		<view class="good-list">
			<view class="good-item">
				<view class="style1 " v-if="!item.isShowMore">
					<image class="user-img" src="../../static/img/test.jpg" mode=""></image>
					<view class="order-info">
						<view class="user-name">
							<text class="user">JAME的厂库</text>
							<text class="price">¥1000</text>
							<text class="old-price">¥2000</text>
						</view>
						<view class="order-name">商品名商品名</view>
						<view class="order-des">简单的产品描述,参数,大药要求,如何落单极大简单两行描述</view>
						<button class="unfold" @click="showMore">展开</button>
					</view>
				</view>
				<view class="style2" v-if="item.isShowMore">
					<image class="user-img" src="../../static/img/test.jpg" mode=""></image>
					<view class="order-info">
						<view class="user-name">
							<text class="user">JAME的厂库</text>
						</view>
						<view class="order-name">商品名商品名</view>
						<view class="user-name">
							<text class="price">¥1000</text>
							<text class="old-price">¥2000</text>
						</view>
						<view class="order-des">简单的产品描述,参数,大药要求,如何落单极大简单两行描述</view>
						<view class="img-box">
							<image src="../../static/img/test.jpg" class="good-img-item" mode="" v-for="item in imgBox" :key="item"></image>
						</view>
						<view class="operation">
							<button class="unfold">分享图片</button>
							<button class="unfold">加入仓库</button>
							<button class="info">详情</button>
						</view>
						<button class="hideMore">收起</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Dot from'@/components/dot/index.vue'
	export default {
		data() {
			return {
				bannerList:[1,2,3,4],
				languages:'CN',
				current:4,
				status:0,
				imgBox:[1,2,3,4,5,6,7,8,9],
				item:{
					isShowMore:false
				}
			}
		},
		onLoad() {
			
		},
		components:{
			Dot
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			},
			changeLanguage(str){
				console.log(str);
				this.languages=str;
			},
			toGood(){
				uni.navigateTo({
					url:'/pages/good/good'
				})
			},
			changeNav(num){
				this.status = num;
			},
			showMore(){
				this.item.isShowMore=!this.item.isShowMore;
			}
		}
	}
</script>

<style lang="scss">
	@import './index.scss'
	
</style>

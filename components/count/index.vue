<template>
	<view class="count">
		<text class="reduct" @click="reduce">-</text>
		<text class="num">{{num}}</text>
		<text class="add" @click="add">+</text>
	</view>
</template>

<script>
	export default{
		props:{
			num:{
				type: Number,
				default: 1
			},
			max:{
				type:Number,
			},
			min:{
				type:Number,
				default:1
			},
		},
		data(){
			return{
				
			}
		},
		methods:{
			reduce(){
				let number=this.num;
				if(number > this.min){
					number++
					this.$emit("changeCount",number)
				}
				
			},
			add(){
				let number=this.num;
				if(number < this.max){
					
				}
			}
		}
	}
</script>

<style lang="scss">
	.count{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.reduct,.add{
		width:50upx;
		height:50upx;
		// border:1px solid #000;
		border-radius: 10upx;
		text-align: center;
		background: #E9E9E9;
		
	}
	.num{
		margin-left:20upx;
		margin-right:20upx;
		font-size: 28upx;
	}
</style>

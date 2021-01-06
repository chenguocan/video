<template>
	<view>
		<view v-for="(item,index) in 10" :key="index">
			<Work :title="item" :time="item"></Work>
			<view class="line"></view>
			<view class="options">
				<view class="btn">
					修改
				</view>
				<view class="btn">
					删除
				</view>
			</view>
			<view class="fat-line"></view>
		</view>
	</view>
</template>

<script>
	import Work from "@/components/Work"
	export default {
		components:{
			Work,
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.line{
	height: 1rpx;
	border-bottom:1px solid #f5f5f4;
}
.options{
	display: flex;
	.btn{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50%;
		height: 100rpx;
	}
}
.fat-line{
	height: 1rpx;
	border-bottom:20rpx solid #f5f5f4;
}
</style>

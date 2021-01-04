<template>
	<view >
		<view class="classify">
			<view class="title">
				热门分类
			</view>
			<view class="cate">
				<view class="cate-img" v-for="item in 4" :key="item">
					<image  src="../../static/demo/cate/1.png"/>
					<view class="name">
						分类
					</view>
				</view>
			</view>
		</view>
		<view style="width: 100%; height: 20rpx; background: #f5f5f4;">
			
		</view>
		<view class="classify">
			<view class="title">
				全部分类
			</view>
			<view class="cate">
				<view class="cate-img" v-for="item in 15" :key="item">
					<image  src="../../static/demo/cate/1.png"/>
					<view class="name">
						分类
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.classify{
	margin: 10rpx 20rpx 0rpx 20rpx;	
	
	.cate{
		display: flex;
		flex-wrap: wrap;
		.cate-img{
			margin-top: 30rpx;
			margin-bottom: 30rpx;
			width: 25%;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			image{
				width: 82rpx;
				height: 64rpx;
			}
			.name{
				font-size: 16rpx;
			}
		}
	}
}
.title{
	font-size: 40rpx;
	font-weight: 700;
}
</style>

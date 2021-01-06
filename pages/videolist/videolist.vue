<template>
	<view>
		<video id="myVideo" src="http://domhttp.kksmg.com/2018/06/19/h264_450k_mp4_SHDongFangHD30000002018061928784257091_aac.mp4">
		</video>
		<view class="detail">
			<text class="title">标题</text>
			<text class="sub-title">子标题</text>
		</view>
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
		<view class="add">
			<view>
				<i class="iconfont iconjia"></i>
				<text class="new">添加新章节</text>
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
.line{
	height: 1rpx;
	border-bottom:1px solid #f5f5f4;
}
#myVideo{
	width: 100%;
}
.detail{
	padding: 20rpx;
	display: flex;
	align-items: baseline;
	.title{
		font-size: 34rpx;
	}
	.sub-title{
		margin-left: 43rpx;
		font-size: 24rpx;
	}
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
.add{
	color:white;
	background: #0a7bc5;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	.new{
		margin-left: 10rpx;
	}
}
.fat-line{
	height: 1rpx;
	border-bottom:20rpx solid #f5f5f4;
}
</style>

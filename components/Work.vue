<template>
	<view>
		<view class="work">
			<view class="poster">
				<image class="poster-img" src="/static/demo/topicpic/3.jpeg"></image>
			</view>
			<view class="detail">
				<view class="title">
					{{title}}
				</view>
				<view class="time">
					{{time}}
				</view>
				<view class="footer">
					<view class="play-num">
						<i class="iconfont iconbofangshu"></i>
						<text>{{playNum}}</text>
					</view>
					<view class="barrage-num">
						<i class="iconfont icondanmushu"></i>
					</view>
					<view class="more">
						<i class="iconfont icongengduo"></i>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			title:{
				type:[String,Number],
				default:''
			},
			time:{
				type:[String,Number],
				default:''
			},
			playNum:{
				type:[String,Number],
				default:'0'
			}
			
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
.work{
	width: 100%;
	height: 270rpx;
	display: flex;
	align-items: center;
	.poster{
		width: 270rpx;
		height: 160rpx;
		border-radius: 10rpx;
		margin-left: 40rpx;
		margin-right: 30rpx;
		.poster-img{
			width: 100%;
			height: 100%;
			border-radius: 10rpx;
		}
	}
	.detail{
		height: 160rpx;
		width: 400rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.title{
			font-size: 40rpx;
			overflow: hidden;
			-webkit-line-clamp: 2;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
		}
		.time,.footer{
			font-size: 28rpx;
			color:#8e949b;
			display: flex;
			align-items: center;
			.play-num,.barrage-num,.more{
				display: flex;
				align-items: center;
				font-size: 28rpx;
				text{
					font-size: 20rpx;
				}
			}
		}
		.footer{
			display: flex;
			justify-content: space-between;
		}
	}
}
</style>

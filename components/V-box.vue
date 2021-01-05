<template>
	<view>
		<view class="video-box">
			<view class="video">
				<view class="video-cover">
					<image  src="../static/demo/datapic/7.jpg" />
				</view>
				<view class="video-footer">
					<view class="play-num">
						<i class="iconfont iconbofangshu"></i>
						<span>{{playNum}}</span>
					</view>
					<view class="barrage">
						<i class="iconfont icondanmushu"></i>
						<span>{{barrage}}</span>
					</view>
				</view>
				<view class="title">
					{{title}}
				</view>
				<view class="classify">
					<span class="name">{{typeName}}</span>
					<i style="font-weight: 700;" class="iconfont icongengduo"></i>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			playNum:{
				type:[Number,String],
				default:0,
			},
			barrage:{
				type:[Number,String],
				default:0
			},
			typeName:{
				type:String,
				default:'推荐'
			},
			title:{
				type:String,
				default:'无'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.video-box{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.video{
		border:1rpx solid #f5f4f7;
		margin-top: 10px;
		width: 345rpx;
		height: 410rpx;
		border-radius: 6px;
		position: relative;
		box-shadow: 1px 1px 10px #ebebeb;
		.video-cover{
			width: 345rpx;
			height: 220rpx;
			border-radius: inherit;
			image{
				width: 345rpx;
				border-radius: inherit;
				height: inherit;
			}
		}
		.video-footer{
			position: absolute;
			color: #F1F1F1;
			display: flex;
			align-items: center;
			left: 0;
			right: 0;
			height: 40rpx;
			top: 180rpx;
			background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(52, 52, 52, 0.8));
			.play-num{
				display: flex;
				align-items: center;
				width: 150rpx;
				margin:0 20rpx;
			}
			.barrage{
				align-items: center;
				display: flex;
			}
			span{
				margin-left: 5rpx;
				font-size: 23rpx;
			}
			
		}
		.title{
			font-size: 32rpx;
			margin: 10rpx 20rpx;
			overflow: hidden;
			-webkit-line-clamp: 2;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
		}
		.classify{
			font-size: 35rpx;
			width: 100%;
			color: #dcdcdc;
			padding:10rpx  20rpx;
			position: absolute;
			display: flex;
			justify-content: space-between;
			bottom: 0;
		}
	}
}
</style>

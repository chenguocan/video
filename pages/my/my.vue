<template>
	<view>
		<view class="header">
			<view class="options">
				<i class="iconfont iconxiaoxi"></i>
				<i class="iconfont iconshezhi setting"></i>
			</view>
			<view class="my-detail">
				<view class="avatar">
					<u-avatar :src="src" mode="circle"></u-avatar>
				</view>
				<view>
					<view class="message">
						<view class="name">
							陈国灿
						</view>
						<view class="my">
							男
						</view>
						<view class="my">
							厦门
						</view>
					</view>
					<view class="my">
						我的个性签名
					</view>
				</view>
			</view>
		</view>
		<view style="width: 100%; height: 20rpx; background: #f5f5f4;">		
		</view>
		<view class="main">
			<view class="bar" v-for="(item,index) in list" :key="index">
				<view class="right">
					<i class="iconfont" :class="item.icon"></i>
					<view>
						{{item.title}}
					</view>
				</view>
				<i class="iconfont iconjinru"></i>
			</view>
		</view>
		<view style="width: 100%; height: 20rpx; background: #f5f5f4;">		
		</view>
		<view class="footer">
			<view class="submit" @click="submit">
				立即投稿
			</view>
		</view>
		<navigator url="../login/login">
			登录
		</navigator>
		<u-popup v-model="show" mode="bottom" :closeable="true" height="30%">
			<view class="create">
				<view class="simple" @click="toRelease(1)">
					<i class="iconfont icondingdanwenjian"></i>
					<view>
						单集
					</view>
				</view>
				<view class="serial" @click="toRelease(2)">
					<i class="iconfont icon918caidan_wenjian"></i>
					<view>
						连载
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				list:[{
					icon:'iconshipin',
					title:'我的作品',
				},{
					icon:'iconshoucang1',
					title:'我的收藏',
				},{
					icon:'iconguanzhu',
					title:'我的关注',
				},{
					icon:'iconlishi',
					title:'历史记录',
				}],
				show:false
			}
		},
		methods: {
			submit(){
				this.show=true
			},
			toRelease(index){
				if(index===1){
					uni.navigateTo({
						url:'../simple/simple'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
.header{
	margin-top: 80rpx;
	height: 270rpx;
	position: relative;
	.options{
		display: flex;
		position: absolute;
		top: 20rpx;
		right: 10rpx;
		.iconfont{
			font-size: 40rpx;
		}
		.setting{
			margin-left: 20rpx;
		}
	}
}
.my-detail{
	display: flex;
	align-items: center;
	height: 100%;
	margin-left: 20rpx;
	.message{
		display: flex;
		align-items: center;
		margin-left: 10rpx;
	}
	.my{
		color: #a7a7a7;
		margin-left: 10rpx;
		font-size: 25rpx;
	}
}
.main{
	.bar{
		display: flex;
		padding: 46rpx;
		align-items: center;
		justify-content: space-between;
		.right{
			display: flex;
			align-items: center;
		}
		.iconfont{
			margin-right: 10rpx;
		}
	}
}
.footer{
	display: flex;
	align-items: center;
	justify-content: center;
	
	.submit{
		color:white;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50rpx;
		background-color: #0a7bc5;
		margin-top: 20rpx;
		width: 680rpx;
		height: 75rpx;
	}
}
.create{
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: center;
	.simple,.serial{
		.iconfont{
			font-size: 50rpx;
			color:white;
		}
		font-size: 20rpx;
		color: white;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		height: 150rpx;
		width: 150rpx;
		border-radius: 50%;
	}
	.simple{
		background: #007AFF;
		margin-right: 50rpx;
	}
	.serial{
		margin-left: 50rpx;
		background: #ff557f;
	}
}
</style>

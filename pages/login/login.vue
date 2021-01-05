<template>
	<view>
		<view class="welcome">
			<p class="title">
				欢迎回来
			</p>
		</view>
		<view class="loginForm">
			<u-form :model="loginForm" ref="uForm">
				<u-form-item><u-input  v-model="loginForm.username" placeholder="手机号/用户名/邮箱" /></u-form-item>
				<u-form-item><u-input v-model="loginForm.password" placeholder="密码" /></u-form-item>
			</u-form>
		</view>
		<view class="footer">
			<view class="login" @click="login">
				登录
			</view>
			<view class="register" @click="toRegister">
					注册账号
			</view>
		</view>
		<view class="other-login">
			<view class="other">
				<view class="line">
					
				</view>
				<view>
					社交账号登录
				</view>
				<view class="line">
					
				</view>
			</view>
			<view class="third-login">
				<view class="login">
					<i class="iconfont iconweixin"></i>
				</view>
				<view class="login">
					<i class="iconfont iconQQ"></i>
				</view>
				<view class="login">
					<i class="iconfont iconxinlangweibo"></i>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginForm:{
					username:'',
					password:'',
				}
			}
		},
		methods: {
			toRegister(){
				uni.navigateTo({
					url:'../register/register'
				})
			},
			login(){
				console.log('登录')
			}
		}
	}
</script>

<style lang="scss">
.welcome{
	height: 280rpx;
	position: relative;
	display: flex;
	justify-content: center;
	.title{
		font-weight: 700;
		font-size: 45rpx;
		position: absolute;
		bottom:100rpx;
	}
}
.loginForm{
	padding: 0 100rpx 80rpx 100rpx;
}
.footer{
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	.login{
		color:white;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50rpx;
		background-color: #0a7bc5;
		margin-top: 20rpx;
		width: 580rpx;
		height: 75rpx;
	}
	.register{
		margin-top: 20rpx;
	}
}
.other-login{
	padding:40rpx 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	.other{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.third-login{
		width: 60%;
		display: flex;
		margin-top: 30rpx;
		justify-content: space-between;
		.login{
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100rpx;
			width: 100rpx;
			border-radius: 50%;
			background-color: #f8f9fa;
			margin-top: 10rpx;
		}
	}
	.line{
		width: 100rpx;
		height: 1rpx;
		margin: 0 20rpx;
		border:1rpx solid #dedede;
	}
}
</style>

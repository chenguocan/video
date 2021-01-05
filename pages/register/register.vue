<template>
	<view>
		<view class="welcome">
			<p class="title">
				注册
			</p>
		</view>
		<view class="loginForm">
			<u-form :model="loginForm" ref="uForm">
				<u-form-item><u-input  v-model="loginForm.username" placeholder="手机号/用户名/邮箱" /></u-form-item>
				<u-form-item><u-input v-model="loginForm.password" placeholder="密码" /></u-form-item>
			    <u-form-item><u-input v-model="loginForm.repassword" placeholder="确认密码" /></u-form-item>
			</u-form>
		</view>
		<view class="footer">
			<view class="submit" @click="register">
				注册
			</view>
			<view class="register">
				去登陆
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
					repassword:'',
				}
			}
		},
		methods: {
			register(){
				
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
	.submit{
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
		text-decoration: underline;
	}
}
</style>

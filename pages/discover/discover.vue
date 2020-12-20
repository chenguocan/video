<template>
	<view>
		<!-- 轮播图 -->
		<view class="swiper">
			<u-swiper :title='true' indicator-pos="bottomRight"
			 :list="list" height="260" mode="dot" img-mode="aspectFill"
			 :title-style="{'color':'white','height':'20px'}"
			 >
			 </u-swiper>
		</view>
		<view>
			<Card>
				<view class="video-box">
					<view class="video" v-for="i in 6" :key="i">
						i
					</view>
				</view>
			</Card>
		</view>
	</view>
</template>

<script>
	import Card from  "@/components/Card"
	export default {
		components:{
			Card,
		},
		data() {
			return {
				list:[
					{
						image:"/static/demo/datapic/22.jpg",
						title:'hello',
					},{
						image:"/static/demo/datapic/24.jpg",
						title:'nihao'
					}],
			}
		},
		onLoad(){
			
		},
		methods: {
			onNavigationBarSearchInputClicked(){
				console.log("点击导航栏");
			},
			onNavigationBarButtonTap(){
				console.log("点击");
			}
		}
	}
</script>

<style lang="scss">
.swiper{
	margin: 20rpx;
}
.video-box{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.video{
		margin-top: 10px;
		width: 345rpx;
		height: 410rpx;
		background-color: #007AFF;
		border-radius: 6px;
	}
}
</style>

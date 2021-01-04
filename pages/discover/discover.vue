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
				<VBox :playNum="250" :barrage="1000" title="欢迎光临" typeName="搞笑"></VBox>
			</Card>
		</view>
	</view>
</template>

<script>
	import Card from  "@/components/Card";
	import VBox from "@/components/V-box"
	export default {
		components:{
			Card,
			VBox
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
</style>

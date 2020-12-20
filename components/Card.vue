<template>
	<view class='card'>
		<p class="title">为你推荐</p>
		<slot></slot>
		<view class="refresh">
			<i class="iconfont iconshuaxin"></i>
			<p>换一批</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.card{
	margin: 0 10px;
}
.title{
	font-size: 24px;
	font-weight: 700;
}
.refresh{
	display: flex;
	justify-content: center;
	color:#007AFF;
	align-items: center;
}
</style>

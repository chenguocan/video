<template>
	<view>
		<view class="poster" @click="add">
			<view class="add">
				＋
			</view>
			<view>
				点击添加封面图
			</view>
		</view>
		<view class="detail">
			<u-form :model="detailForm" ref="detailForm">
					<u-form-item label="标题"><u-input v-model="detailForm.title" placeholder="请填写视频标题"  /></u-form-item>
					<u-form-item label="分类"><u-input v-model="detailForm.classify" @click='classifyShow=true' placeholder="请选择分类" type="select" /></u-form-item>
					<u-action-sheet :list="classifyList" v-model="classifyShow" @click="selectClassify"></u-action-sheet>
					<u-form-item label="描述"><u-input v-model="detailForm.desc" type="textarea" placeholder="请填写视频描述......" /></u-form-item>
			</u-form>
		</view>
		<view style="display: flex;justify-content: center;">
			<view class="release">
				发布
			</view>
		</view>
	</view>
</template>

<script>
	import getBase64 from "@/plugins/getBase64"
	
	export default {
		data() {
			return {
				classifyShow:false,
				detailForm:{
					title:'',
					classify:'',
					desc:'',
				},
				classifyList:[
					{
						text: '男'
					},
					{
						text: '女'
					},
					{
						text: '保密'
					}
				]
			}
		},
		created() {
			
			
		},
		methods: {
			selectClassify(index){
				this.detailForm.classify=this.classifyList[index].text
			},
			async add(){
				let base64Img=''
				let [err,res]=await uni.chooseImage()
				if(res.errMsg.indexOf('ok')!==-1){
					// #ifdef H5
					getBase64(res.tempFiles[0]).then(res=>{
							base64Img=res
							console.log(base64Img)
					})
					// #endif
				}else{
					uni.showToast({
						icon:'none',
						title:'添加失败'
					})
				}
			},
			
		}
	}
</script>

<style lang="scss">
.poster{
	width: 100%;
	height: 350rpx;
	color:#6a737b;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #f8f9fa;
	.add{
		font-size: 60rpx;
	}
}
.detail{
	padding: 40rpx;
}
.release{
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
</style>

<template>
	<view class="index">
		<view class="tags">
			<block v-for="value in data" :key="value.key">
				<view class="tag" @tap="goList(value)">
					<image class="tag-img" :src="value.icon"></image>
					<text class="tag-text">{{value.type}}</text>
				</view>
			</block>
		</view>
	</view>
</template>

<script>   //please note that this page is also copied from the uni-template open source project, this page needs to cooperate with the list class
	export default {  
		data() {
			return {
				data: [{
						type: '动物',
						id: 1,
						key: 1,
						icon: 'http://placehold.it/150x150'
					},
					{
						type: '风景',
						id: 2,
						key: 2,
						icon: 'http://placehold.it/150x150'
					},
					{
						type: '建筑',
						id: 3,
						key: 3,
						icon: 'http://placehold.it/150x150'
					},
					{
						type: '美女',
						id: 4,
						key: 4,
						icon: 'http://placehold.it/150x150'
					},
					{
						type: '汽车',
						id: 5,
						key: 5,
						icon: 'http://placehold.it/150x150'
					},
					{
						type: '运动',
						id: 6,
						key: 6,
						icon: 'http://placehold.it/150x150'
					},
					{
						type: '动物',
						id: 1,
						key: 7,
						icon: 'http://placehold.it/150x150'
					},
					{
						type: '风景',
						id: 2,
						key: 8,
						icon: 'http://placehold.it/150x150'
					}
				]
			}
		},
		methods: {     //the golist method send exactly the same data as the one in uni-picture, but it doesn't show up in list.vue, but why?
			goList(value) {
				uni.navigateTo({
					url: '../list/list?type=' + value.type + '&id=' + value.id
				})
			console.log('../list/list?type=' + value.type + '&id=' + value.id);				
			}
		}
	}
</script>

<style>
.tag-img {
	border-radius: 60upx;
	width: 120upx;
	height: 120upx;
}

.tag-text {
	font-size: 28upx;
	color: #555555;
}
</style>
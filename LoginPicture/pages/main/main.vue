<template>
    <view class="content">
        <view v-if="hasLogin" class="hello">
            <view class="title">
                您好 {{userName}}，您已成功登录。
            </view>
			<view class="center-list">
				<view class="center-list-item border-bottom" @click="goNew">
					<text class="list-icon">&#xe60c;</text>
					<text class="list-text">最新</text>
					<text class="navigat-arrow">&#xe65e;</text>
				</view>
				<view class="center-list-item" @click="goTag">
					<text class="list-icon">&#xe60d;</text>
					<text class="list-text">分类</text>
					<text class="navigat-arrow">&#xe65e;</text>
				</view>
			</view>
			<view class="center-list">
				<view class="center-list-item border-bottom" @click="goAbout">
					<text class="list-icon">&#xe603;</text>
					<text class="list-text">关于</text>
					<text class="navigat-arrow">&#xe65e;</text>
				</view>
				<view class="center-list-item" @click="goHot">
					<text class="list-icon">&#xe61a;</text>
					<text class="list-text">推荐</text>
					<text class="navigat-arrow">&#xe65e;</text>
				</view>
			</view>
            <view class="ul">
                <view>这是 uni-app 带登录模板的示例App首页。</view>
                <view>在 “我的” 中点击 “退出” 可以 “注销当前账户”</view>
            </view>
        </view>
        <view v-if="!hasLogin" class="hello">
            <view class="title">
                您好 游客。
            </view>
            <view class="ul">
                <view>这是 uni-app 带登录模板的示例App首页。</view>
                <view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>
            </view>
        </view>
    </view>
</template>

<script>
    import {
        mapState
    } from 'vuex'

    export default {
        computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
        onLoad() {
            if (!this.hasLogin) {
                uni.showModal({
                    title: '未登录',
                    content: '您未登录，需要登录后才能继续',
                    /**
                     * 如果需要强制登录，不显示取消按钮
                     */
                    showCancel: !this.forcedLogin,
                    success: (res) => {
                        if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
                            if (this.forcedLogin) {   //the way to jump to login pages
                                uni.reLaunch({
                                    url: '../login/login'
                                });
                            } else {
                                uni.navigateTo({
                                    url: '../login/login'
                                });
                            }
                        }
                    }
                });
            }
        },
		methods:{
			goAbout() {
				uni.navigateTo({
					url: '/pages/about/about'
				});
			},
			goNew() {
				uni.navigateTo({     //need to figure out why the picture is showing waiting
					url: '/pages/new/new'
				});
			},
			goHot() {
				uni.navigateTo({
					url: '/pages/hot/hot'
				});
			},
			goTag() {
				uni.navigateTo({
					url: '/pages/tag/tag'
				});
			},
		}
    }
</script>

<style>
    .hello {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .title {
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul {
        font-size: 30upx;
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul>view {
        line-height: 50upx;
    }
</style>

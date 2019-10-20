<template>
	<nav class="mod_nav">
		<router-link tag="div" class="tab-item" to="/recommend">
			<span>推荐</span>
		</router-link>
		<router-link tag="div" class="tab-item" to="/ranking">
			<span>排行榜</span>
		</router-link>
		<router-link tag="div" class="tab-item" to="/search">
			<span>搜索</span>
		</router-link>
	</nav>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	.mod_nav{
	padding-top: 80px;
	width: 100%;
	height: 40px;
	display: flex;
	line-height:40px;
	display: -webkit-box;
	font-size: 16px;
	background: #fff;
	}
	.tab-item {
		flex: 1;
		text-align: center;
		color: rgba(0,0,0,.6);
	}
	.span {
		padding-bottom: 3px;
	}
	.router-link-active {
	    color:#31c27c;
		border-bottom: 2px solid #31c27c;
	}
</style>

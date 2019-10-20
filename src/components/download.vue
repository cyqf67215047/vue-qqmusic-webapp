<template>
	<div class="bottom_bar">
		<a href="https://y.qq.com/apg/296/index.html?keyword=QQ" target="_blank" class="bottom_bar__action">安装QQ音乐 发现更多精彩</a>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	.bottom_bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255,255,255,.9);
    z-index: 110;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    padding: 15px 0;
	}
	.bottom_bar__action {
    display: block;
    padding: 0 15px;
    border-radius: 99px;
    background-color: #30c27c;
    color: #fff;
    height: 33px;
    line-height: 33px;
    font-size: 14px;
	}
	a {
    text-decoration: none;
	}
</style>

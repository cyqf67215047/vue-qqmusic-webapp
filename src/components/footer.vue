<template>
	<footer class="mod_footer">
		<div class="version_tab">
			<a href="https://y.qq.com/?ADTAG=myqq&amp;nomobile=1#type=index">查看电脑版网页</a></div>
			<div class="footer_logo">QQ音乐</div>
			<p class="copyright">Copyright © 1998 - <span>2019</span> Tencent. All Rights Reserved.</p>
	</footer>
</template>

<script>
	export default{
	}
</script>

<style scoped>
	.mod_footer {
    padding: 15px 0 70px;
	}
	.version_tab {
    text-align: center;
    margin-bottom: 16px;
	}
	a{
		text-decoration: none;
		color:black;
	}
	.footer_logo {
    display: block;
    width: 82px;
    height: 24px;
    margin: 0 auto 10px;
    background-image: url("//y.gtimg.cn/mediastyle/mod/mobile/img/logo_ch.svg?max_age=2592000");
    background-repeat: no-repeat;
    background-size: cover;
    text-indent: -9999px;
	}
	.copyright {
    font-size: 10px;
    text-align: center;
    color: rgba(0,0,0,.6);
}
</style>


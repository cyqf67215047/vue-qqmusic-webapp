<template>
	<div class="top_box">
		<div class="top_box__bd">
			<img class="logo" src="//y.gtimg.cn/mediastyle/mod/mobile/img/logo_ch.svg?max_age=2592000" alt="QQ音乐">
			<a class="top_box__btn" href="https://y.qq.com/apg/296/index.html?keyword=QQ" target="_blank">下载APP</a>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.top_box{
			width: 100%;
			height: 80px;
			position: fixed;
			z-index: 100;
		}
	.top_box .top_box__bd{
		position: relative;
	    top: 0;
	    right: 0;
	    left: 0;
	    z-index: 100;
	    display: -webkit-box;
	    -webkit-box-pack: justify;
	    -webkit-box-align: center;
	    box-shadow: 0 5px 5px rgba(0,0,0,.02);
	    background: #fff;
	    height: 80px;
	    padding: 0 10px;
		}
	.logo {
	    display: block;
	    height: 35px;
		width: 127px;
		}
	img {
	    color: #ccc;
		}
	fieldset, img {
	    border: 0;
		}
	.top_box__btn {
	    display: block;
	    min-width: 40px;
	    height: 25px;
	    line-height: 25px;
	    padding: 0 10px;
	    text-align: center;
	    font-size: 14px;
	    color: #000;
	    border: solid 1px rgba(0,0,0,.3);
	    border-radius: 25px;
	}
	a {
	    text-decoration: none;
	}
</style>

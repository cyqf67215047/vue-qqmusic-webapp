<template>
	<div style="background:#F4F4F4;">
		<Slider/>
		<div class="mod_twocol_list mod_twocol_list_normal" style="margin-top: 15px;">
			<h2 class="list_title">电台</h2>
			<ul class="list_container">
				<li>
					<a class="list_main" href="">
						<div class="list_media">
							<img class="video_list__media_img" src="https://y.gtimg.cn/music/photo/radio/track_radio_199_12_8.jpg?max_age=2592000" alt="热歌">
							<span class="icon icon_play"></span>
						</div>
						<div class="list_info">
							<h3 class="list_tit tit_two_row">热歌</h3>
						</div>
					</a>
				</li>
				<li>
					<a class="list_main" href="javascript:;">
						<div class="list_media">
							<img class="video_list__media_img" src="https://y.gtimg.cn/music/photo/radio/track_radio_307_12_5.jpg?max_age=2592000" alt="一人一首招牌歌">
							<span class="icon icon_play"></span>
						</div>
						<div class="list_info">
							<h3 class="list_tit tit_two_row">一人一首招牌歌</h3>
						</div>
					</a>
				</li>
			</ul>
			
			
		</div>
		
		<div class="mod_twocol_list mod_twocol_list_special">
			<h2 class="list_title">热门歌单</h2>
			<ul class="list_container">
				<li>
					<a class="list_main" href="javascript:;">
						<div class="list_media">
							<img src="https://y.gtimg.cn/music/photo_new/T006R300x300M00000333So02drvak.jpg?max_age=2592000">
								<span class="listen_count"><i class="icon icon_listen"></i>1038.3万</span>
									<span class="icon icon_play"></span>
						</div>
						<div class="list_info">
							<h3 class="list_tit">催泪大杀器！盘点演唱会经典万人大合唱</h3>
								<p class="list_text">金青松</p>
						</div>
					</a>
				</li>
				<li>
					<a class="list_main" href="javascript:;">
						<div class="list_media">
							<img src="https://y.gtimg.cn/music/photo_new/T006R300x300M0000013j8zs1jRnLQ.jpg?max_age=2592000">
							<span class="listen_count"><i class="icon icon_listen"></i>68.7万</span>
							<span class="icon icon_play"></span>
						</div>
						<div class="list_info">
							<h3 class="list_tit">纳尼？这些华语歌手竟然会唱日语歌！</h3>
							<p class="list_text">风吹草地</p>
						</div>
					</a>
				</li>
			</ul>
			
			<ul class="list_container">
				<li>
					<a class="list_main" href="javascript:;">
						<div class="list_media">
							<img src="https://y.gtimg.cn/music/photo_new/T005R600x600M000002CJKAY1LKpcz.jpg?n=1">
								<span class="listen_count"><i class="icon icon_listen"></i>1038.3万</span>
									<span class="icon icon_play"></span>
						</div>
						<div class="list_info">
							<h3 class="list_tit">催泪大杀器！盘点演唱会经典万人大合唱</h3>
								<p class="list_text">金青松</p>
						</div>
					</a>
				</li>
				<li>
					<a class="list_main" href="javascript:;">
						<div class="list_media">
							<img src="https://y.gtimg.cn/music/photo_new/T006R300x300M000000xFtbN1l8ye8.jpg?max_age=2592000">
							<span class="listen_count"><i class="icon icon_listen"></i>68.7万</span>
							<span class="icon icon_play"></span>
						</div>
						<div class="list_info">
							<h3 class="list_tit">纳尼？这些华语歌手竟然会唱日语歌！</h3>
							<p class="list_text">风吹草地</p>
						</div>
					</a>
				</li>
			</ul>
			
		</div>
		
		<Footer/>
	</div>		
</template>

<script>
	import Slider from "@/components/slider";
	import Footer from "@/components/footer";
	export default{
		components:{
			Slider,
			Footer
		}
	}
</script>

<style scoped>
	@import url("../../static/recommend.css");
	

</style>

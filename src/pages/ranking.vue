<template>
	<div class="mod_topic">
		<ul>
			<li v-for="(item,index) in toplists"class="topic_item" :key="index" @click="goTo('toplists/toplist',item.id)">
				<div class="topic_main">
					<a href="javascript:;" class="topic_media"><img :src=item.picUrl><span class="listen_count"><i class="icon icon_listen"></i></span></a>
					<div class="topic_info">
						<div class="topic_cont">
							<h3  class="topic_tit" v-for="(song,index) in item.songList" :key="index">
								<p>{{index+1}}<span class="text_name">{{song.songname}}</span>-{{song.singername}}</p>
							</h3>
						</div>
						<i class="topic_arrow"></i>
					</div>
				</div>
				
			</li>
		</ul>
	</div>
</template>

<script>
	import getToplistsData from '@/api/getToplistsData'
	export default{
		data(){
			return {
				toplists:[]
			}
		},
		created(){
			this._getToplistsData();
		},
		methods:{
			_getToplistsData(){
				getToplistsData().then((res)=>{
					this.toplists=res.data.topList
				})
			},
			goTo(place,id){
				let url=`/${place}/${id}`
				this.$router.push(url)
			}
		}
	}
</script>

<style scoped>
	.mod_topic {
    margin: 10px;
    padding-bottom: 55px;
}
.mod_topic li {
    margin-bottom: 10px;
    overflow: hidden;
}
li {
    list-style: none;
}
.mod_topic li .topic_main {
    display: -webkit-box;
    background: #fff;
}
.mod_topic li .topic_media {
    position: relative;
    width: 100px;
    height: 100px;
    display: block;
	}
.mod_topic li .topic_cont p, .mod_topic li .topic_tit {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}	
.mod_topic li .topic_media img {
    display: block;
    width: 100px;
    height: 100px;
}
.mod_topic li .topic_media .listen_count {
    left: 5px;
    bottom: 7px;
    line-height: 12px;
    color: #fff;
    opacity: .6;
    font-size: 9px;
    z-index: 10;
}
.mod_topic li .topic_media .icon_listen {
    display: block;
    float: left;
    width: 10px;
    height: 10px;
    background-position: 0 -50px;
    margin-right: 3px;
}
.mod_topic li .topic_info {
    position: relative;
    -webkit-box-flex: 1;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
}
.mod_topic li .topic_cont {
    -webkit-box-flex: 1;
    margin: 0 10px 0 15px;
}
.mod_topic li .topic_tit {
    font-size: 16px;
    color: #000;
    font-weight: 400;
    margin-bottom: 5px;
}
.mod_topic li .topic_cont p {
    font-size: 14px;
    color: rgba(0,0,0,.5);
}
.mod_topic li .topic_cont .text_name {
    color: #000;
    margin-left: 8px;
    margin-right: 5px;
}
.mod_topic li .topic_arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -4px;
    width: 6px;
    height: 6px;
    border-right: 1px solid #b2b2b2;
    border-bottom: 1px solid #b2b2b2;
    -webkit-transform: rotate(-45deg);
}
</style>
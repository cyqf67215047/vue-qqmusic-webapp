<template>
	<swiper :options="swiperOption">
	  <swiper-slide v-for="(item,index) in slider" :key="index">
		<a :href="item.linkUrl"><img :src="item.picUrl" alt=""></a>
	</swiper-slide>
	  <div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	import { getRecommendData } from '@/api/getRecommendData.js'
	export default{
	data () {
	    return {
	      slider:[],
	      swiperOption: {
	        pagination: {
	          el: '.swiper-pagination',
	        },
	        loop:true
	      }
	    }
	  },
		created(){
			this._getRecommendData();
		},
		methods:{
				_getRecommendData(){
				getRecommendData().then((res)=>{
					let data=res.data;
					this.slider=data.slider;
				})
			}
		}
	}
</script>

<style>
	.swiper-pagination-bullet-active {
	        background-color: #FFFFFF;
		}
	img{
			width: 100%;
			height:150px;
		}
</style>

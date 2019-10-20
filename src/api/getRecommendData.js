import jsonp from '@/assets/js/jsonp.js'

export function getRecommendData(){
	const url="https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";
	let data={
		format: "json",
		inCharset: "utf-8",
		outCharset: "utf-8",
		notice: 0,
		platform: "h5",
		needNewCode: 1,
	}
	return jsonp(url,data,{param:"jsonpCallback"})
}


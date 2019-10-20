import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const Recommend = ()=>import("@/pages/recommend")
const Ranking =()=>import("@/pages/ranking")
const Search =()=>import("@/pages/search")
export default new Router({
  routes: [
		{
		  path: '/',
		  redirect:'/recommend'
		},
		{
			path:'/recommend',
			component: Recommend
		},
   {
   	path:'/ranking',
   	component: Ranking
   },
	 {
	 	path:'/search',
	 	component: Search
	 }
  ]
})

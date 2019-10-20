<template>
  <div id="app">
    <Header/>
			<Tab/>
    <router-view/>
		<Download/>
  </div>
</template>

<script>
	import Tab from "@/components/tab";
	import Header from"@/components/header";
	import Download from"@/components/download";
export default {
		components:{
			Tab,
			Header,
			Download
		}
}
</script>

<style>
	*{margin: 0px;padding: 0px;}
</style>

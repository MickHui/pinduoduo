<template>
	<div id="app">
    <router-view></router-view>
     <tab-bar></tab-bar>
	</div>

</template>

<script> 
import tabBar from './components/tabBar/tabBar' 
export default{
	name:"App",
  components:{
    tabBar
  }
}
</script>

<style lang='stylus' scoped>
   #app
     height:100%
     width 100%
   	 background #F5F5F5
</style>
<template>
<div class="tabBar">
   	  <ul class="tab-wrap">
   	  	<li class="tab-items active">
   	  		 <span class="iconfont icon">&#xe7d8;</span>
   	  		 <span>首页</span>
   	  	</li>
   	  	<li class="tab-items">
   	  		 <span class="iconfont icon">&#xe60e;</span>
   	  		 <span>推荐</span>
   	  	</li>
   	  	<li class="tab-items">
   	  		 <span class="iconfont icon">&#xe632;</span>
   	  		 <span>搜索</span>
   	  	</li>

   	  	<li class="tab-items">
   	  		 <span class="iconfont icon">&#xe7d9;</span>
   	  		 <span>购物车</span>
   	  	</li>
   	  	<li class="tab-items">
   	  		 <span class="iconfont icon">&#xe60a;</span>
   	  		 <span>个人中心</span>
   	  	</li>
   	  </ul>
</div>

</template>

<script>
export default{
	name:"tabBar"
}

</script>
<style lang="stylus" scoped>
	.tabBar
		position fixed
		bottom 0
		left 0
		background #F5F5F5
		width 100%
		height 1.2rem
		.tab-wrap
			display flex
			flex-direction row
			justify-content space-between
			align-items center
			height 1.2rem
			padding  0 .2rem 
			.tab-items
				display flex
				flex-direction column	
				justify-content center	
				align-items center
				height .8rem 
				span
					margin-top .1rem
					font-size .28rem		
				.icon 
					font-size .4rem  
      .active
		  	color #d00	
</style>
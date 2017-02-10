<template>
  <div class="search">
    <div class="search-box">
    	<div class="search-warp">
    		<i class="font ss" v-show="!search"></i>
    		<div :class="['search-input-box',search?'noss':'']">
    			<input type="text" name="" placeholder="搜索" class="search-input" @focus="searchFocus()" v-model.trim="msg">
    		</div>  		
    	</div>
    	<a href="javascript:;" class="search-btn" v-show="search" @click="searchClick()">{{msg==''?'取消':'搜索'}}</a>
    </div>
    <div class="search-result" v-if="result">
    	搜索结果
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search',
    data(){
    	return{
    		search:false, //是否点击搜索框
    		result:false, //是否有搜索结果
    		msg:'' //搜索内容
    	}
    },
    methods:{
		searchFocus(){ //搜索点击框
			this.$set(this,'search',true);
		},
		searchClick(){ //搜索
			this.$set(this,'search',false);
			if(this.msg!=''){
				this.$set(this,'msg','');
				this.$set(this,'result',true);
			}
		}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../assets/css/compute';
     
  .search{
  	.search-box{
  		@include px2rem(padding,14px 24px);
  		background: #fff;
  		border-bottom: 1px solid #dfdfdf;
  		display: flex;
  		.search-warp{
  			@include px2rem(height,70px);
  			@include px2rem(line-height,70px);
  			background: rgba(0,0,0,0.05);
  			flex:4;
  			position: relative;
  			.font.ss{
  				position: absolute;
  				left: 0;
  				@include px2rem(top,-2px);
  				@include px2rem(margin,0px 10px 15px);
  				@include px2px(font-size, 40px);
				&:before{
					content: '\31';
				}
  			}
  			.search-input-box{  				
  				width: 100%;
  				@include px2rem(padding-left,52px);
  				&.noss{
  					@include px2rem(padding-left,12px);
  				}
  				.search-input{
  					width: 100%;
  					@include px2rem(margin-top,10px);
  					@include px2rem(height,50px);
  					@include px2rem(line-height,50px);
  					vertical-align: top;
  				}
  			}
  			
  		}
  		.search-btn{
			flex:1;
			text-align: center;
			color: #FFB90A;
			@include px2rem(line-height,70px);
		}
  	}
  	.search-result{
  		@include px2rem(padding,14px 24px);
  		background: #fff;
  	}
  }
</style>

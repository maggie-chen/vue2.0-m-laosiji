<template>
  <div class="container">
    <header class="top-box">
       <div v-if="login" class="login-info-box">
        <a href="javascript:;" class="logo"><img src="../assets/images/logo2.png"></a>
        <div class="fr l-info-r">
          <router-link to="/search"><i class="font fx"></i></router-link>
          <a href="javascript:;"><i class="font xx"></i></a>
          <router-link to="/user"><i class="font me"></i></router-link>
        </div>
      </div>
      <nav class="nav">
          <router-link to="/follow" exact>关注</router-link>
          <router-link to="/" exact>精选</router-link>
      </nav>
    </header>
    <div :class="['con-wrap',login?'has-up':'no-up']">
        <router-view class="view" keep-alive></router-view>
    </div>   
  </div>
</template>

<script>

  export default {
    name: 'container',
    data () {
      return {
        login:false
      }
    },
    created(){
      this.$set(this,'login',this.$store.state.authLoggedIn);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/css/compute';

  .container{
    .top-box{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: #fff;
      z-index: 100;
      .login-info-box{
      clear: both;
      overflow: hidden;
      background: #f8f8f8;
      @include px2rem(height,100px);
      @include px2rem(line-height,100px);
      @include px2rem(padding,0px 24px);
      .logo img{
        @include px2rem(height,70px);
        @include px2rem(margin-top,15px); 
      }
      .l-info-r{
        a{          
          @include px2rem(padding,0px 34px);
          .font{
            color: #888;
            @include px2px(font-size, 48px);
            &.fx:before{
              @include px2px(font-size, 52px);
              content: '\31';
            }
            &.xx:before{
              content: '\36';
            }
            &.me:before{
              @include px2px(font-size, 50px);
              content: '\35';
            }
          }

        }
      }
    }
    .nav{
      text-align: center;
      overflow: hidden;
      border-bottom: 1px solid #dfdfdf;
      background: #fff;
      @include px2rem(height,94px);
      @include px2rem(line-height,89px);
      a{
        display: inline-block;
        @include px2rem(margin,0px 50px);
        @include px2px(font-size, 32px);
        &.router-link-active{
          border-bottom: 5px solid #FFB90A;
        }
      }
    }
    }
    .con-wrap{
      &.has-up{
        @include px2rem(padding-top,194px); 
      }
      &.no-up{
        @include px2rem(padding-top,94px); 
      }     
    }  
  }
</style>

<template>
  <div class="user-set">
    <div class="user-card-box">
      <div class="card">
        <router-link to="/user/set" class="card-item">账号与安全<i class="font fr to"></i></router-link>        
      </div>
    </div>
    <div class="user-card-box">
      <div class="card card-bor">
        <router-link to="/user/set" class="card-item">消息推送<i class="font fr to"></i></router-link>      
      </div>
      <div class="card">
        <router-link to="/user/set" class="card-item">图片浏览设置<i class="font fr to"></i></router-link>        
      </div>
    </div>
    <div class="user-card-box">
      <div class="card card-bor">
        <router-link to="/user/set" class="card-item">关于我们<i class="font fr to"></i></router-link>      
      </div>
      <div class="card card-bor">
        <router-link to="/user/set" class="card-item">清除缓存<i class="font fr to"></i></router-link>        
      </div>
      <div class="card card-bor">
        <router-link to="/user/set" class="card-item">意见反馈<i class="font fr to"></i></router-link>      
      </div>
       <div class="card">
        <router-link to="/user/set" class="card-item">用户协议<i class="font fr to"></i></router-link>        
      </div>
    </div>
    <div class="logout-btn-box">
      <a class="btn logout-btn" @click="logouts()">退 出</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'user-set',
    data () {
      return {
      }
    },
    methods:{
      logouts(){
        window.localStorage.removeItem('laosiji');
        this.$store.dispatch('loggedOut');
        this.$router.push('/');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../assets/css/compute';

  .user-set{
    .user-card-box{
      background: #fff;
      @include px2rem(margin-bottom, 20px);
      .card{
        @include px2rem(height, 110px);
        @include px2rem(line-height, 110px);
        .card-item{
          display: block;
          @include px2rem(padding,0px 30px);
          .font.to{
            color: #ccc;
            @include px2px(font-size, 38px);
            &:before{
              content: '\30';
            }
          }
        }
      }
      .card-bor{
        border-bottom: 1px solid #dfdfdf;
      }
    }
    .logout-btn-box{
      overflow: hidden;
      @include px2rem(padding,0px 30px);
      .logout-btn{
        background:#d63d3d;
      }
    }
  }      
</style>

<template>
  <div class="user-home">
    <div class="user-card-box">
      <div class="header-card">
      个人资料
      </div>
    </div>
    <div class="user-card-box">
      <div class="card">
        <router-link to="/user/set" class="card-item">修改资料<i class="font fr to"></i></router-link>        
      </div>
    </div>
    <div class="user-card-box">
      <div class="card card-bor">
        <router-link to="/user/set" class="card-item">我的收藏<i class="font fr to"></i></router-link>      
      </div>
      <div class="card">
        <router-link to="/user/set" class="card-item">我的草稿<i class="font fr to"></i></router-link>        
      </div>
    </div>
    <div class="user-card-box">
      <div class="card">
        <router-link to="/user/set" class="card-item">黑名单<i class="font fr to"></i></router-link>      
      </div>

    </div>
    <div class="user-card-box">
      <div class="card">
        <router-link to="/user/set" class="card-item">设置<i class="font fr to"></i></router-link>       
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'user-home',
    data () {
      return {
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../assets/css/compute';

  .user-home{
    .user-card-box{
      background: #fff;
      @include px2rem(margin-bottom, 20px);
      .header-card{
        @include px2rem(height, 250px);
      }
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
  }      
</style>

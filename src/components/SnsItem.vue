<template>
  <li class="sns-item">
    <header class="sns-top">
      <a href="javascript:;" class="user-logo"><img :src="sns.user.image.url" alt=""></a>
      <div class="user-info">
        <a href="javascript:;">
          <h5>{{sns.user.name}}</h5>
        </a>
        <p class="publish-time">
          {{sns.publishtime}}
        </p>
      </div>
    </header>
    <SnsArticle :article="sns"></SnsArticle>
    <footer class="sns-operate">
      <a href="javascript:;" class="sns-o-col">
        <i class="font zf"></i><em>{{forwardcount}} </em>
      </a>
      <span class="sns-o-line"></span>
      <a href="javascript:;" class="sns-o-col">
        <i class="font pl"></i><em>{{commentcount}}</em>
      </a>
      <span class="sns-o-line"></span>
      <a href="javascript:;" :class="['sns-o-col',like?'active':'']" @click="addLike()"><i class="font dz"></i><em>{{praisecount}}</em>
      </a>
      </footer>
    </li>
  </template>

  <script>
    import SnsArticle from './SnsArticle'
    
    export default {
      name: 'sns-item',
      data () {
        return {
          list: '',
          forwardcount:0,
          commentcount:0,
          praisecount:0,
          like:false
        }
      },
      components:{
        SnsArticle
      },
      props:['sns'],
      watch:{
        sns(){
          this.$set(this,'forwardcount',sns.forward);
          this.$set(this,'commentcount',sns.commentcount);
          this.$set(this,'praisecount',sns.praisecount);
        }
      },
      methods:{
        addLike(){
          if(this.$store.state.authLoggedIn){
            this.like?this.praisecount--:this.praisecount++;
            this.$set(this,'like',!this.like); 
          }else{
            this.$router.push({path: '/login',query: { redirect: this.$route.fullPath }});    
          }              
        }
      }
    }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss">
    @import '../assets/css/compute';

    .sns-item{
      background: #fff;
      @include px2rem(padding-top,24px);
      @include px2rem(margin-bottom, 20px);
      .sns-top{
        @include px2rem(padding,0px 24px);
        clear: both;
        overflow: hidden;
        .user-logo{
          float: left;
          img{
            @include px2rem(width, 84px);
            @include px2rem(height, 84px);
            border-radius: 50%;
          }     
        }
        .user-info{
          float: left;
          @include px2rem(padding-left, 30px);
          .h5{
            @include px2px(font-size, 28px);
            font-weight: 400;
          }
          .publish-time{
            color: #999;
            @include px2px(font-size, 20px);
          }
        }
      }    
      .sns-operate{
        display: flex;
        @include px2rem(height, 70px);
        justify-content:center;
        align-items: center;
        text-align: center;
        border-top: 1px solid #dfdfdf;
        .sns-o-col{
          flex:1;
          color: #999;
          &.active{
            color: #FFB90A;
            .font{
              color: #FFB90A;
            }
          }
          .font{
            @include px2px(font-size, 40px);
            color: #999;
            &.zf:before{
              content: '\A4';
            }
            &.pl:before{
              content: '\2B';
            }
            &.dz:before{
              content: '\3A';
            }
          }
          em{
            font-weight: normal;;
            @include px2px(font-size, 24px);
            @include px2rem(margin-left,10px);
          }
        }
        .sns-o-line{
          display: flex;
          @include px2rem(height, 40px);
          @include px2rem(width, 1px);
          background:#dfdfdf;
        }
      }
    }
  </style>

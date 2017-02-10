<template>
  <div class="sns-article">
      <p class="desc">{{article.description==''?'我发布了文章':article.description}}</p>
      <div class="long-art" v-if="article.snstype==0">
        <a href="javascript:;" class="long-art-link">
          <div class="long-img-box">
            <img :src="article.image.url">
            <em class="long-sign">长文章</em>
          </div>
          <div class="long-title-box">
            <p>{{article.title}}</p>
          </div>
        </a>
      </div>
    </div>
  </template>

  <script>
    
    export default {
      name: 'sns-article',
      data () {
        return {
        }
      },
      props:['article']
    }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss">
    @import '../assets/css/compute';

    .sns-article{
        @include px2rem(padding,24px);
        p{
          word-break: break-all;
        }
        .desc{
          @include px2rem(margin-bottom,16px);
        }
        .long-art{
          .long-img-box{
            position: relative;
            img{
              width: 100%;
              @include px2rem(height,450px);
            }
            .long-sign{
              position: absolute;
              bottom: 0;
              right: 0;
              @include px2px(font-size,18px);
              @include px2rem(padding,4px 10px);
              color: #fff;
              background: #FFB90A;
            }
          }
          .long-title-box{
            border:1px solid #dfdfdf;
            border-top: none;
            @include px2rem(padding,16px 20px);
          }
        }
      }
  </style>



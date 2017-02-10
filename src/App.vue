<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
@import './assets/css/compute';
  
  html,body{
    // height: 100%;
    min-height: 100%;
    background: #f3f3f3;
  }
  body{
    min-height: 100%;
  }
  #app {
    font-family: Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,WenQuanYi Micro Hei,Microsoft Yahei,sans-serif;
    line-height: 1.5;
    color: #333;
  }
  @font-face {
    font-family: 'ywf';
    src: url('/static/font/ywf.eot');
    src: url('/static/font/ywf.eot?#iefix') format('embedded-opentype'),
    url('/static/font/ywf.woff') format('woff'),
    url('/static/font/ywf.ttf') format('truetype');
  }
  .font{
    font-family: 'ywf';
    @include px2px(font-size, 36px);
    color: #666;
  }
  .btn{
    display: block;
    color: #fff;
    @include px2rem(padding,16px 0px);
    @include px2rem(margin,20px 0px);
    text-align: center;
    border-radius: 5px;
  }
  .view {
    transition: all .2s linear;
  }
  .slide-enter-active, .slide-leave-active {
    transform: translate3d(-100%, 0, 0);
  }
  .slide-enter, .slide-leave-active {
    transform: translate3d(100%, 0, 0);
  }
  /* v-r-transition, default is {forward: 'forward', back: 'back'}*/
  // .forward-enter, .forward-leave {
  //   transform: translate3d(-100%, 0, 0);
  // }
  // .back-enter, .back-leave {
  //   transform: translate3d(100%, 0, 0);
  // }
</style>

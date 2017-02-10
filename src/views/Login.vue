<template>
  <div class="login">
    <router-link to="/" class="close">x</router-link>
    <img src="../assets/images/logo.png" class="logo">
    <h1>欢迎上车 老司机</h1>
    <div class="login-group">
      <input type="number" placeholder="手机号" class="phone" v-model.number.trim="phone">
    </div>
    <div class="login-group">
      <input type="number" placeholder="验证码" v-model.number.trim="code">
      <a href="javascript:;" :class="['send-code',timeCount>0?'sended':'']" @click="sendCode()">{{codeText}}</a>
    </div>
    <div class="login-btn-box">
      <a class="btn login-btn" @click="logins()">登 录</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        timeCount:0, //验证码计数
        phone: '18911205208', //手机号码
        code:'' //验证码
      }
    },
    watch:{
      phone(){  
        // 修改手机号码时，重置验证码
        if(this.timeCount>0){ 
          this.$set(this,'timeCount',0);
        }
      }
    },
    computed:{
      codeText(){ //验证码文本
        return this.timeCount<=0?'发送验证码':('重新发送'+this.timeCount+'s')
      }
    },
    methods:{
      sendCode(){ //发送验证码
        if(this.verifyPhone(this.phone)&&this.timeCount<=0){
          this.$set(this,'code',1111);
          this.$set(this,'timeCount',61);
          this.timer();
        }    
      },
      timer(){ //验证码倒计时
        if(this.timeCount<0){
          this.$set(this,'timeCount',0);
          return false;
        }
        this.timeCount--;
        setTimeout(this.timer, 1000);
      },
      verifyPhone(value){
        if(value==''){
          alert('手机号不能为空');
          return false; 
        }
        if(!(/^1(3|4|5|7|8)\d{9}$/.test(value))){
          alert('手机号有误');
          return false; 
        }
        return true;
      },
      logins() { //登录
        if(this.code==''){
          alert('验证码不能为空');
          return false; 
        }
        window.localStorage.setItem('laosiji',this.phone);
        this.$store.dispatch('loggedIn');
        const redirect = this.$route.query.redirect;
        if(redirect!=undefined){
          this.$router.push(redirect);
        }else{
          this.$router.push('/');
        }
      }
    }
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss">
    @import '../assets/css/compute';

    .login{
      @include px2rem(padding,160px 100px);
      background: #fff;
      position: relative;
      .close{
        position: absolute;
        @include px2rem(left,30px);
        @include px2rem(top,30px);
        @include px2px(font-size, 48px);
        @include px2rem(padding,20px);
      }
      .logo{
        @include px2rem(width,100px);
        @include px2rem(margin,0px 0px 30px -10px);
      }
      h1{
        color: #000;
        font-weight: 400;
        @include px2px(font-size, 48px);
        @include px2rem(margin-bottom,40px);
      }
      .login-group{
        border-bottom: 1px solid #dfdfdf;
        @include px2rem(padding,10px 0px);
        @include px2rem(margin-bottom,24px);
        clear: both;
        overflow: hidden;
        input{
         @include px2rem(width,300px);
         &.phone{
          width: 100%;
        }
      }
      .send-code{
        @include px2px(font-size, 24px);
        color: #FFB90A;
        border: 1px solid #FFB90A;
        border-radius: 5px;
        @include px2rem(padding,4px 10px);
        float: right;
        &.sended{
          border-color: #999;
          color: #999;
        }
      }
    }
    .login-btn-box{
      overflow: hidden;
      .login-btn{
        background: #FFB90A;
        border-bottom: none;
      }
    }

  }
</style>

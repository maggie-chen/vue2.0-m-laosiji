<template>
  <div class="choice">
    <ul>
    <sns-item v-for="item in list" :sns="item"></sns-item>
  </ul>
  </div>
</template>

<script>
  import snsItem from '../../components/SnsItem'

  export default {
    name: 'choice',
    data () {
      return {
        list: ''
      }
    },
    components:{
      snsItem
    },
    created(){
      this.getData();
    },
    methods:{
      getData(){
       this.$http.post('/api/topic/feed/list').then((response) => {
          // 响应成功回调
          console.log(response.body);
          if(response.body.code==1){
            this.$set(this,'list',response.body.body.sns.list);
          }
        }, (response) => {
            // 响应错误回调
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../assets/css/compute';
</style>

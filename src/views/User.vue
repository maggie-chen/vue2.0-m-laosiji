<template>
  <div class="user">
    <router-view class="view" keep-alive></router-view>
  </div>
</template>

<script>
  export default {
    name: 'user'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../assets/css/compute';
     
</style>

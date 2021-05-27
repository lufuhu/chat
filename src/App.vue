<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
  .input-b-border input{
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 0;
  }
  .el-card__body{
    width: 100%;
    height: 100%;
  }
  .chat-textarea textarea{
    resize: none;
    border:none;
    padding: 0.25rem 0;
  }
</style>
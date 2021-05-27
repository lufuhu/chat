<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <el-button @click="toLogin()">登录</el-button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Cookies from 'js-cookie'

export default {
  name: "login",
  watch: {
    onLoginData: function (val) {
      Cookies.set("token", val.data.token);
      Cookies.set("userinfo", val.data.userInfo);
      this.$router.push('/');
    }
  },
  methods: {
    ...mapActions(['onLogin']),
    toLogin() {
      this.onLogin();
    },
  },
  computed: {
    ...mapGetters(['onLoginData'])
  }
}
</script>

<style scoped>

</style>
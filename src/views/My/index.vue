<template>
  <div>
    我的
    <button @click="toLogin">登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    toLogin() {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style></style>

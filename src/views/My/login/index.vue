<template>
  <div>
    <!-- header -->
    <van-nav-bar title="账号登录" left-arrow @click-left="backToPage" />

    <!-- main -->
    <van-form class="form" @submit="login">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请输入账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <div class="btn">
        <van-button block type="info" native-type="submit" color="#21b97a"
          >登录</van-button
        >
      </div>
    </van-form>
    <!-- footer -->
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    backToPage() {
      this.$router.back()
    },
    async login() {
      try {
        const res = await login(this.username, this.password)
        if (res.data.status === 200) {
          this.backToPage()
          this.$toast.success('登录成功！')
        } else {
          this.$toast.fail('账户或密码不正确！')
        }
        console.log(res)
      } catch (e) {
        console.log(e.message)
        this.$toast.fail('登录失败！')
      }
    }
  }
}
</script>

<style scoped lang="less">
.van-nav-bar {
  background-color: #21b97a;
  height: 90px;
  :deep(.van-nav-bar__title) {
    font-size: 38px;
    color: #fff;
  }
  :deep(.van-nav-bar__arrow) {
    color: #fff;
  }
}
.form {
  padding-top: 50px;
  font-size: 38px;

  :deep(.van-field__value) {
    line-height: 80px;
    font-size: 36px;
  }
  .btn {
    padding-top: 40px;
  }
  .van-button--block {
    width: 90%;
    margin: 0 auto;
    height: 100px;
    font-size: 32px;
  }
}
</style>

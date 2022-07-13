<template>
  <div>
    <van-tabbar router>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/selectHome">找房</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/real-time-info"
        >资讯</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

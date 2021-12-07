<template>
  <div id="app">
    <transition :name="transitionName" v-if="!$route.meta.keepAlive">
      <router-view class="router" ></router-view>
    </transition>
    <transition :name="transitionName" v-else>
      <keep-alive>
        <router-view class="router" ></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-left',
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
  },
  watch: {
    $route(to, from) {
      // 切换动画
      const { isBack } = this.$router; // 监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = 'slide-right';
      } else {
        this.transitionName = 'slide-left';
      }
    },
  },
};
</script>
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  margin: auto;
  position: relative;
}
</style>

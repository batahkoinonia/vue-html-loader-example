<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/example1">Example 1</router-link> |
    <router-link to="/example2">Example 2</router-link>
    <router-view class="route-container"></router-view>
  </div>
</template>

<script>
export default {
  name: "AppRoot"
};
</script>

<style>
html,
body,
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

#app {
  text-align: center;
}

.route-container {
  margin-top: 20px;
}
</style>

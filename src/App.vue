<template>
  <div id="app">
    <Welcome msg="What Coin Which Coin?"/>
    <Bitstamp />
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue";
import Bitstamp from "./components/BitStamp";

export default {
  name: "app",
  components: {
    Welcome,
    Bitstamp
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

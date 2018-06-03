<template>
  <div id="app">
    <Header />
    <Bitstamp />
  </div>
</template>

<script>
import Header from './components/Header';
import Bitstamp from "./components/BitStamp";

export default {
  name: "app",
  components: {
    Header,
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
  display: grid;
}
</style>

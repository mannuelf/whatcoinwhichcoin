<template>
    <div>
        <header class="site-header">
            <h1>
                <router-link to="/">
                   <span style="color:#FFED65;">WHAT</span>Coin WhichCoin
                </router-link>
            </h1>
            <figure class="coin-logo">
              <img src="../assets/logos/bitstamp.png" alt="Bitstamp"></figure>
        </header>
    </div>
</template>

<script>
export default {
  name: "SiteHeader",
  data () {
    return {}
  }
};
</script>

<style lang="sass" scoped>

h1
  font-family: VT323
  font-size: 1.8em
  margin: 0
  width: fit-content
  a
    color: #FFF
  @media(min-width: 640px)
    font-size: 2.1em


.coin-logo
  background-color: #fdfff7
  display: inline-block
  height: 40px
  margin: 0
  overflow: hidden
  padding: 10px
  position: absolute
  right: 10px
  top: 19px
  width: 100px
  border-radius: 8px 8px 0 0
</style>

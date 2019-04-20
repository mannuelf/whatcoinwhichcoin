<template>
  <header class="site-header">
    <h1>
      <nuxt-link to="/">
        <span style="color:#FFED65;">{{ $t('site-name.p1') }}</span>{{ $t('site-name.p3') }}
        <span style="color:#FFED65;">{{ $t('site-name.p2') }}</span>{{ $t('site-name.p3') }}
      </nuxt-link>
    </h1>
    <app-logo />
  </header>
</template>

<script>
import Logo from '@/components/Logo'
export default {
  name: 'SiteHeader',
  components: {
    'app-logo': Logo
  },
  data() {
    return {
      exchange: ''
    }
  }
}
</script>

<style lang="sass" scoped>

h1
  font-family: VT323
  font-size: 2em
  margin: 0
  width: fit-content
  a
    color: #FFF
  @media(min-width: 640px)
    font-size: 2.1em


.coin-logo
  z-index: 10
  background-color: #fdfff7
  display: inline-block
  height: 40px
  margin: 0
  overflow: hidden
  padding: 10px
  position: absolute
  right: 2em
  top: 2.9em
  width: 100px
  border-radius: 4px 4px
</style>

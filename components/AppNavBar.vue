<template>
  <div class="app-nav-bar">
    <!-- <nuxt-link
      v-for="nav in navbar"
      :key="nav.id"
      :to="{ name: '' }"
      class="app-nav-bar__item"
      exact
    >
      {{ nav.text }}
    </nuxt-link> -->
    <!-- <nuxt-link
      :to="path"
      class="app-nav-bar__item--language"
    >
      {{ label }}
    </nuxt-link> -->
    <nuxt-link
      v-if="$i18n.locale === 'en'"
      :to="`/pt` + $route.fullPath"
      class="app-nav-bar__item--language"
      exact
    >
      PT
    </nuxt-link>
    <nuxt-link
      v-else
      :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
      class="app-nav-bar__item--language"
      exact
    >
      EN
    </nuxt-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'AppNavBar',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      locale: state => state.locale
    }),
    language() {
      return this.$i18n.locale === 'en'
    },
    path() {
      return this.locale
        ? `/pt/${this.$route.fullPath}`
        : this.$route.fullPath.replace(/^\/[^\/]+/, '')
    },
    label() {
      return this.language === 'en' ? 'EN' : 'PT'
    }
  },
  mounted() {
    console.log('mounted: ', this.locale)
  },
  methods: {}
}
</script>
<style lang="sass" scoped>
.app-nav-bar
  display: flex
  justify-content: center
  align-items: center
  background: #3a98e0
  border-radius: 0px
  bottom: 0px
  // box-shadow: 0px 0px 4px rgba(0, 0, 0, .1)
  height: 50px
  // left: 50%
  margin: 0 auto
  position: fixed
  // transform: translate(-50%, -50%)
  width: 100%
  z-index: 10000

  &__item--language
    text-transform: uppercase
    padding: 0.5em
    line-height: 60px
    cursor: pointer
    color: #FFF
</style>

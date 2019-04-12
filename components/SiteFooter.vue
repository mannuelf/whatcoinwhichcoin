<template>
  <div>
    <section class="site-footer">
      <div>
        <nuxt-link
          v-if="$i18n.locale === 'en'"
          :to="`/pt` + $route.fullPath"
          exact
        >
          Portuguese
        </nuxt-link>
        <nuxt-link
          v-else
          :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
          exact
        >
          English
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style lang="sass">
.site-footer
    display: grid
    grid-area: footer
    background: #eee

    > div
        padding: 0 0.5em

        &:first-child
        padding: 1em 0.5em
        text-align: center
    p
        margin: 0
        font-size: 0.8em

    a
        &:hover
            text-decoration: underline
</style>

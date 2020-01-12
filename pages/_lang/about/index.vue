<template>
  <div class="container about-api">
    <site-about />
    <h3>API List</h3>
    <p><a href="https://www.bitstamp.net/" title="Bitstamp">Bitstamp</a></p>
    <p><a href="https://www.luno.com/" title="Luno">Luno</a></p>
  </div>
</template>

<script>
import SiteAbout from '@/components/siteAbout'
export default {
  name: 'About',
  components: {
    'site-about': SiteAbout
  }
}
</script>

<style lang="sass" scoped>

</style>

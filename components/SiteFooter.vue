<template>
  <div>
    <section class="site-footer">
      <div>
        <p>
          The Prices are realtime data, sourced from the respective providers public API.
          <router-link to="/about-api">
            <strong>Click here</strong>
          </router-link> to see a list.
        </p>
      </div>
      <div>
        <p>
          Built with VueJs by Mannuel Ferreira
          <a href="https://mannuelferreira.com"><strong>say hello</strong></a>.
          <a href="https://github.com/mannuelf/whatcoinwhichcoin"><strong>fork it.</strong></a>
        </p>
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

<template>
  <div>
    <section class="site-footer">
      <div>
        .
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SiteFooter'
}
</script>

<style lang="sass">
.site-footer
    display: grid
    grid-area: footer
    background: #59ffa0
    color: #59ffa0
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

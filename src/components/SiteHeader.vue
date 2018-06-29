<template>
    <div>
        <header class="site-header">
            <h1>
                <router-link to="/">
                    <strong>WHATCoin</strong> WHICHCoin
                </router-link>
            </h1>
        </header>
    </div>    
</template>

<script>
export default {
  name: "SiteHeader"
}
</script>

<style lang="sass" scoped>
h1
    font-size: 1.6em
    @media(min-width: 640px)
        font-size: 2em
    margin: 0
    padding: 0.2em 0.5em
</style>

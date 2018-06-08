<template>
    <div class="block coindesk">
        <section v-if="errored">
            <p>Sorry something broke, please check back later</p>
        </section>

        <section v-else>
            <div v-if="loading">Loading...</div>
            <div v-else v-for="currency in info" v-bind:key="info.id" class="currency">
                <span v-html="currency.symbol"></span>
                {{ currency.rate_float | currencydecimal }}
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'CoinDesk',
    data() {
        return {
            info: null,
            loading: true,
            errored: false
        }
    },
    mounted() {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => {
                this.info = response.data.bpi
            })
            .catch(error => { 
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    },
    filters: {
        currencydecimal(value) {
            return value.toFixed(2)
        }
    }
}
</script>

<style lang="sass" scoped>

</style>

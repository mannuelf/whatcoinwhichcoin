<template>
    <div>
        <h2>Bitstamp</h2>
        <div v-if="errors">{{ errors }}</div>
        <h3>Bitcoin</h3>
        <h3>Bitcoin Cash</h3>
        <h3>Etherium</h3>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "Bitstamp",
    data() {
        return {
            prices: [],
            errors: []
        }
    },
    created() {
        let currencyPair = 'currency_pair/';
        let currency = 'btceur';
        let urlBitstamp = `https://www.bitstamp.net/api/v2/ticker/${currency}`;
        axios.get(urlBitstamp)
            .then(response => {
                this.prices = response.data
                console.log(prices.data);
            })
            .catch(e => {
                this.errors.push(e);
            });
    }
};

</script>
<style>

</style>

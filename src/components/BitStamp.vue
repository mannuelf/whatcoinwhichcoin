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
        const currency = [
            'btcusd', 'btceur', 'eurusd', 'xrpusd', 'xrpeur', 
            'xrpbtc', 'ltcusd', 'ltceur', 'ltcbtc', 'ethusd', 
            'etheur', 'ethbtc', 'bchusd', 'bcheur', 'bchbtc'
        ];
        const urlBitstamp = `https://www.bitstamp.net/api/v2/ticker/${currency}`;
        
        currency.forEach((currency) => {
            console.log(currency);
        });

        axios.get(urlBitstamp)
            .then(response => {
                this.prices = response.data
                console.log(prices.data);
            })
            .catch(e => {
                let errorsNote = e;
                this.errors.push(errorsNote);
                console.log(errorsNote);
            });
    }
};

</script>
<style>

</style>

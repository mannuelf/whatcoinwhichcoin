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
        const currencies = [
            'https://www.bitstamp.net/api/v2/ticker/btcusd', 'https://www.bitstamp.net/api/v2/ticker/btceur', 'https://www.bitstamp.net/api/v2/ticker/eurusd', 'https://www.bitstamp.net/api/v2/ticker/xrpusd', 'https://www.bitstamp.net/api/v2/ticker/xrpeur', 
            'https://www.bitstamp.net/api/v2/ticker/xrpbtc', 'https://www.bitstamp.net/api/v2/ticker/ltcusd', 'https://www.bitstamp.net/api/v2/ticker/ltceur', 'https://www.bitstamp.net/api/v2/ticker/ltcbtc', 'https://www.bitstamp.net/api/v2/ticker/ethusd', 
            'https://www.bitstamp.net/api/v2/ticker/etheur', 'https://www.bitstamp.net/api/v2/ticker/ethbtc', 'https://www.bitstamp.net/api/v2/ticker/bchusd', 'https://www.bitstamp.net/api/v2/ticker/bcheur', 'https://www.bitstamp.net/api/v2/ticker/bchbtc'
        ];

        axios.get(currencies[0])
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

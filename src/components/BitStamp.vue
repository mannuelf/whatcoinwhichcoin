<template>
    <div>
        <h2>Bitstamp</h2>
        
        <h3>Bitcoin</h3>
        <p>{{ results.high }}</p>
        
        <h3>Bitcoin Cash</h3>
        <p>{{ results.high }}</p>
        
        <h3>Etherium</h3>
        <p>{{ results.high }}</p>
        <div v-if="errors">{{ errors }}</div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "Bitstamp",
    data() {
        return {
            results: [],
            errors: []
        }
    },
    created() {
        const currency = [
            'btcusd', 'btceur', 'eurusd', 'xrpusd', 'xrpeur', 
            'xrpbtc', 'ltcusd', 'ltceur', 'ltcbtc', 'ethusd', 
            'etheur', 'ethbtc', 'bchusd', 'bcheur', 'bchbtc'
        ]
        currency.forEach((currency) => {
            const urlBitstamp = `https://www.bitstamp.net/api/v2/ticker/${currency}`
        
            axios.get(urlBitstamp)
                .then((response) => {
                    console.log("<-- // DATA RECEIVED FROM SERVER // -->")
                    this.results = response.data
                })
                .catch((e) => {
                    console.log("// ERROR RECEIVED FROM SERVER //")
                    let errorsNote = e
                    this.errors.push(errorsNote)
                })
        })
    }
}
</script>
<style>

</style>

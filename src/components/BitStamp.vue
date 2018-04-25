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
        let currency = [
            'btcusd', 'btceur', 'eurusd', 'xrpusd', 'xrpeur', 
            'xrpbtc', 'ltcusd', 'ltceur', 'ltcbtc', 'ethusd', 
            'etheur', 'ethbtc', 'bchusd', 'bcheur', 'bchbtc'
        ]
        let results = {}
        currency.forEach((currency) => {
            // let config = {
            //     headers: {}
            // }
            let urlBitstamp = `https://www.bitstamp.net/api/v2/ticker/${currency}`
            axios.get(urlBitstamp)
                .then((response) => {
                    results = response.request.response
                    console.log(results)
                    return results
                })
                .catch((e) => {
                    let errorsNote = e
                    this.errors.push(errorsNote)
                    console.log(errorsNote)
                })
        })
    }
}
</script>
<style>

</style>

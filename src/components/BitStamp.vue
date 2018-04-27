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
        let data = {}
        currency.forEach((currency) => {
            // let config = {
            //     headers: {}
            // }
            
            let urlBitstamp = `https://www.bitstamp.net/api/v2/ticker/${currency}`
            axios.get(urlBitstamp)
                .then((response) => {
                    data = response.request.response
                    console.log(data)
                    return data
                })
                .catch((e) => {
                    let errorsNote = e
                    this.errors.push(errorsNote)
                    console.log(errorsNote)
                })
        })
        results.map((data) => {
            console.log(data)
        })
    }
}
</script>
<style>

</style>

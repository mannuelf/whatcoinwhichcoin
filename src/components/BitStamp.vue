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
    beforeMount(){
        const app = this;

        let currency = [
            'btcusd', 'btceur', 'eurusd', 'xrpusd', 'xrpeur',
            'xrpbtc', 'ltcusd', 'ltceur', 'ltcbtc', 'ethusd',
            'etheur', 'ethbtc', 'bchusd', 'bcheur', 'bchbtc'
        ];

        const conversionUrl = 'https://cors-anywhere.herokuapp.com/';
        const url = 'https://www.bitstamp.net/api/v2/ticker/';
    
        for(let i = 0; i < currency.length; i++){
                axios.get(conversionUrl+url+currency[i])
                .then((response) => {
                    console.log(response.data,'response');
                    app.results = response.data;
                })
                .catch((e) => {
                    let errorsNote = e
                    this.errors.push(errorsNote)
                    console.log(errorsNote)
                })
        }
    },
    created() {
    }
}
</script>
<style>

</style>

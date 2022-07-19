<template>
    <div class="small">
        <ChartTest :chart-data="dataCollection"></ChartTest>
        <button @click="fillData()">Randomize</button>
    </div>
</template>

<script>
import ChartTest from '../../components/LineChart.vue'
/* stylelint-disable */
export default {
    components: {
        ChartTest,
    },
    data() {
        return {
            dataCollection: null,
        }
    },
    created() {
        this.fillData()
    },
    methods: {
        fillData() {
            this.dataCollection = {
                labels: [
                    this.getRandomInt(),
                    this.getRandomInt(),
                    this.getRandomInt(),
                    this.getRandomInt(),
                    this.getRandomInt(),
                    this.getRandomInt(),
                    this.getRandomInt(),
                    this.getRandomInt(),
                ],
                datasets: [
                    {
                        label: 'Main One',
                        backgroundColor: '#f87979',
                        data: [
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                        ],
                    },
                    {
                        label: 'Main One',
                        backgroundColor: '#00ff26',
                        data: [
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                        ],
                    },
                ],
            }
            console.log('ChartTestMain', this.dataCollection)
        },
        getRandomInt() {
            return Math.floor(Math.random() * (50 - 4)) + 5
        },
    },
}
</script>

<style>
.small {
    max-width: 900px;
    margin: 150px auto;
}
</style>

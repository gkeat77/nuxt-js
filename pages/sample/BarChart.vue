<template>
    <Bar
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
    />
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
    name: 'BarChart',
    components: { Bar },
    props: {
        chartId: {
            type: String,
            default: 'bar-chart',
        },
        datasetIdKey: {
            type: String,
            default: 'label',
        },
        width: {
            type: Number,
            default: 400,
        },
        height: {
            type: Number,
            default: 400,
        },
        cssClasses: {
            default: '',
            type: String,
        },
        styles: {
            type: Object,
            default: () => {},
        },
        plugins: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            chartData: {
                labels: [
                    '4 / 8',
                    '4 / 9',
                    '4 / 10',
                    '4 / 11',
                    '4 / 12',
                    '4 / 13',
                    '4 / 14',
                    '4 / 15',
                    '4 / 16',
                    '4 / 17',
                ],
                datasets: [
                    {
                        borderWidth: 1, // 라인 넓이
                        label: '총 수면 시간', // 데이터 라벨
                        backgroundColor: 'rgb(255,255,255, 0)',
                        pointBackgroundColor: '#64CCA2',
                        fill: false, // 채우기
                        // barPercentage: 1, 바 안쪽 넓이
                        // categoryPercentage: 0.5, 바 외부 넓이
                        tension: 0.1,
                        borderColor: '#64CCA2',
                        pointBorderColor: '#64CCA2',
                        pointBorderWidth: 1,
                        data: [45, 50, 60, 50, 45, 80, 50, 40, 68, 70],
                    },
                ],
                /*
                backgroundColor: 'rgb(255,0,0, 0)',
                labels: ['January', 'February', 'March'],
                datasets: [{ data: [40, 20, 12] }],
                */
            },

            chartOptions: {
                responsive: true,
            },
        };
    },
};
</script>

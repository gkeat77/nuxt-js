<template>
    <v-app dark>
        <v-row>
            <v-col cols="2">
                <ChartTest></ChartTest>
            </v-col>
            <v-col>
                <nuxt />
            </v-col>
        </v-row>
    </v-app>
</template>
<script>
import ChartTest from '../components/default/MyNavBar.vue'

export default {
    components: {
        ChartTest,
    },
}
</script>
<style></style>

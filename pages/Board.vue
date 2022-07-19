<template>
    <v-card>
        <v-toolbar flat color="primary" dark>
            <v-toolbar-title>User Profile</v-toolbar-title>
        </v-toolbar>
        <v-tabs vertical>
            <v-tab v-for="item in items" :key="item.grp_cod">
                <v-icon left> mdi-account </v-icon>
                {{ item.title }}
            </v-tab>
            <v-tab-item v-for="item in items" :key="item.grp_cod">
                <v-card flat>
                    <v-card-text>
                        <span v-html="item.content"></span>
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
                    title: '122222222222',
                    content:
                        'cnt1<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>',
                },
                { title: '2', content: 'cnt2' },
                { title: '3', content: 'cnt3' },
                {
                    title: '4',
                    content:
                        " <p class='mb-0'>Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.</p>",
                },
                { title: '5', content: 'cnt5' },
                { title: '16', content: 'cnt6' },
            ],
        }
    },
    methods: {
        test() {},
    },
}
</script>

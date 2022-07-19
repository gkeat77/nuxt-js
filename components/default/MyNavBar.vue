<template>
    <nav class="nav">
        <v-row>
            <v-treeview
                rounded
                activatable
                return-object
                :items="treeItems"
                :open-all="true"
                :open-on-click="false"
                dense
                @update:active="selected"
            ></v-treeview>
            <!-- 
            
            <v-col class="pa-6" cols="6">
                <template v-if="!selection.length"> No nodes selected. </template>
                <template v-else>
                    <div v-for="node in selection" :key="node.id">
                        {{ node.name }}
                    </div>
                </template>
            </v-col>
                    -->
        </v-row>
    </nav>
</template>

<script>
export default {
    name: 'Product',
    components: {},
    data: () => ({
        selection: [],
        treeItems: [],
        active: [],
    }),
    created() {
        this.treeItems = [
            {
                id: 1,
                name: '전체',
                url: '/',
                children: [
                    { id: 2, name: 'Child #1', url: '/sample/Line' },
                    { id: 3, name: 'Child #2', url: '/sample/Select' },
                    {
                        id: 4,
                        name: 'Child #3',
                        children: [
                            { id: 5, name: 'Grandchild #1' },
                            { id: 6, name: 'Grandchild #2' },
                        ],
                    },
                ],
            },
        ]
    },
    mounted() {},
    methods: {
        selected(node) {
            this.selection = node
            let url = this.selection[0].url
            let myUrl = ''
            myUrl = url
            console.log(url)
            // this.$router.go()
            this.$router.push(url)
            // this.$router.replace(myUrl)
        },
    },
}
</script>

<style>
.nav {
    cursor: pointer;
}
</style>

<template>
    <div>
        <v-select :items="items" item-text="name" label="label"></v-select>

        <ul>
            <li v-for="item in computed_items" :key="item.name">
                <span>{{ item.name }}</span>
                <span>{{ item.type }}</span>
                <span>{{ item.size }}</span>
            </li>
        </ul>
        <v-select
            :items="selectItm"
            item-text="prodoctNm"
            item-value="prodcutId"
            label="label"
            v-model="cmb01"
            @change="cmb1Change"
        ></v-select>
        <v-select :items="filteredItems" item-text="prodoctNm" label="label"></v-select>
    </div>
    <!-- <v-select :items="selectItm" item-text="prodoctNm" label="label"></v-select> -->
</template>
<script>
export default {
    name: '',
    components: {},
    watch: {
        selectItm: {
            handler() {
                console.log('list changed')
            },
            deep: true,
        },
    },
    data() {
        return {
            selected: 3,
            cmb01: '',
            example: '',
            selectedType: '',
            selectedSize: '',
            author: {
                name: 'John Doe',
                books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery'],
            },
            selectItm: [
                {
                    prodcutId: 'NAME1',
                    prodoctNm: '만족도',
                    isActive: false,
                },
                {
                    prodcutId: 'NAME2',
                    prodoctNm: '조회수',
                    isActive: false,
                },
                {
                    prodcutId: 'NAME3',
                    prodoctNm: '추천수',
                    isActive: false,
                },
            ],

            items: [
                {
                    name: 'name1',
                    type: 'type1',
                    size: 'size1',
                },
                {
                    name: 'name2',
                    type: 'type2',
                    size: 'size2',
                },
                {
                    name: 'name3',
                    type: 'type1',
                    size: 'size1',
                },
                {
                    name: 'name44',
                    type: 'type2',
                    size: 'size2',
                },
            ],
        }
    },
    computed: {
        filteredItems() {
            return this.selectItm.filter(function (el) {
                return el.isActive === false
            }, this)
        },
        computed_items() {
            const filterType = this.selectedType
            const filterSize = this.selectedSize
            return this.items.filter(function (item) {
                let filtered = true
                if (filterType && filterType.length > 0) {
                    filtered = item.type == filterType
                }
                if (filtered) {
                    if (filterSize && filterSize.length > 0) {
                        filtered = item.size == filterSize
                    }
                }
                return filtered
            })
        },
    },
    created() {},
    mounted() {},
    methods: {
        cmb1Change() {
            const myCbm = this.cmb01
            this.selectItm.forEach(function (element) {
                console.log(element.prodcutId)
                if (element.prodcutId == myCbm) {
                    element.isActive = true
                } else {
                    element.isActive = false
                }
            })
            /*
            this.selectItm.isActive = true;

                */
        },
    },
}
</script>

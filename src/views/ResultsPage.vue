<template>
    <div class="search flex-box">
        <div class="col-lg-3 box">
            <filter-sidebar/>
        </div>
        <div class="col-lg-9 box">
            <result-item
                    v-for="item in items"
                    :key="item.id"
                    :item="item"
            />
        </div>
    </div>
</template>

<script>
    import FilterSidebar from './FilterSidebar'
    import ResultItem from './ResultItem'
    import {mapGetters} from 'vuex'

    export default {
        name: 'Results',
        components: {FilterSidebar, ResultItem},
        computed: {
            ...mapGetters({
                items: 'carsList'
            })
        },
        methods: {
            fetchCarsList() {
                this.$store.dispatch('fetchCarsList')
            }
        },
        mounted() {
            this.fetchCarsList()
        }
    }
</script>

<style scoped>
    .col-lg-3 {
        width: 25%;
    }
    .col-lg-9 {
        width: 75%;
    }
    .search {
        background-color: #f4f5f6;
    }
</style>

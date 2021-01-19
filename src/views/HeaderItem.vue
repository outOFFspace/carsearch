<template>
    <header>
        <div class="top-header">
            Hey, James
        </div>
        <div class="main-header box">
            <div class="box-header white">
                {{total}} Results for:
            </div>
            <ul class="filters">
                <li v-for="(filter, index) in filters" :key="index">
                    <div class="filter-label">{{filter.name}}</div>
                    <div class="filter-value">{{filter.value}}</div>
                </li>
                <li class="filter-value"><a>Redo search</a></li>
            </ul>
        </div>
    </header>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'HeaderItem',
        data() {
            return {
                filters: [{
                    name: 'Product',
                    value: 'Mercedes Benz'
                }, {
                    name: 'Color',
                    value: 'Black'
                }, {
                    name: 'Year',
                    value: '2009'
                }, {
                    name: 'Miles',
                    value: 'Less than 1,000'
                }]
            }
        },
        computed: {
            ...mapGetters({
                total: 'total'
            })
        },
    }
</script>

<style scoped>
    .filters {
        margin-top: 20px;
    }
    .filters li {
        display: inline-block;
        margin-right: 50px;
    }
    .top-header {
        padding: 10px 20px;
        font-size: 12px;
        text-align: right;
    }
    .main-header {
        height: 85px;
        background-image: linear-gradient(to right, #00658d, #003554);
    }
    .filter-value {
        font-size: 17px;
        color: #fff;
        letter-spacing: 0.25px;
    }
    .filter-label {
        color: #fff;
        opacity: 0.5;
        font-size: 11px;
    }
</style>

<template>
    <div>
        <div class="box-header">Filters</div>
        <ul>
            <li
                    v-for="(filter, index) in filters"
                    :key="index"
            >
                <label :for="`filter-${index}`">
                    <input :id="`filter-${index}`" type="checkbox"/> {{filter}}
                </label>
            </li>
        </ul>
        <ul>
            <li>
                <label>People dig it</label>
                <vue-slider v-model="slider"/>
            </li>
            <li>
                <label>Helps me with job search</label>
                <vue-slider v-model="slider2"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/default.css'

    export default {
        name: 'FilterSidebar',
        components: {
            VueSlider
        },
        data() {
            return {
                slider: [0, 100],
                slider2: [15, 85],
                filters: [
                    'Free', 'Cool', 'Fun', 'Sexy'
                ]
            }
        }
    }
</script>

<style scoped>
 ul {
     margin-bottom: 20px;
 }
 ul +  ul > li {
     margin-bottom: 20px;
 }
</style>

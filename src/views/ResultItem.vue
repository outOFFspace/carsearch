<template>
    <div class="item">
        <div class="flex-box">
            <div class="car-image">
                <img :src="image" :class="{zoomed: hoveredImage}">
            </div>
            <div class="car-description">
                <div class="item-header">
                    {{item.title}}
                </div>
                <div class="short">
                    This is a random description of this car. It’s only a couple words because this is a test project.
                    Good luck! <a class="hovered" @click="toggleDetails">View Details</a>
                </div>
                <div class="sold-by">
                    Sold by: <a>{{item.soldBy.name}}</a> <star-rating :rating="item.rating || 0"/>
                </div>
            </div>
            <a class="car-control">
                <span class="center">Buy</span>
            </a>
        </div>
        <div class="details" :class="{open: showDetails}">
            <a class="close-details hovered" @click="toggleDetails(false)">Close</a>
            <div>
                <ul style="position: relative">
                    <li
                            @click="activeTab=index"
                            v-for="(tab, index) in tabs"
                            :key="index"
                            class="tab"
                    >{{tab.name}}</li>
                    <li class="underline"
                        :style="underlineTransform"
                    ></li>
                </ul>
                <component :is="currentItemTab"/>
                <result-item-slider @hovered="image => hoveredImage = image"/>
            </div>
        </div>
    </div>
</template>

<script>
    import { CarObject } from '@/types'
    import ResultItemParts from './itemDetails/ResultItemParts.vue'
    import ResultItemReviews from './itemDetails/ResultItemReviews.vue'
    import ResultItemSpecs from './itemDetails/ResultItemSpecs.vue'
    import ResultItemSlider from './itemDetails/ResultItemSlider'
    import StarRating from '../components/StarRating'

    const BROKEN_IMAGE_URL = 'https://cdn.zeplin.io/5ae3722dc6b7aac6295da0da/assets/D48F0BA1-974E-4AF4-92A4-777FC17D443F.png'

    export default {
        name: 'ResultItem',
        components: {
            StarRating,
            ResultItemSlider,
            ResultItemParts,
            ResultItemReviews,
            ResultItemSpecs,
        },
        props: {
            item: {
                type: CarObject,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                hoveredImage: null,
                showDetails: false,
                activeTab: 0,
                tabs: [{
                    name: 'Specs',
                    component: ResultItemSpecs
                }, {
                    name: 'Reviews',
                    component: ResultItemReviews
                }, {
                    name: 'Parts',
                    component: ResultItemParts
                }],
            }
        },
        computed: {
            // workaround! as the image is broken
            image() {
                return this.hoveredImage || (this.item.id !== 2 ? this.item.image : BROKEN_IMAGE_URL)
            },
            currentItemTab() {
                return this.tabs[this.activeTab].component || ResultItemSpecs
            },
            underlineTransform() {
                let translate = (this.activeTab * (100 / this.tabs.length))
                translate += (translate > 0 ? '%' : '')
                return `transform: translateX(${translate}) scaleX(0.2);`
            }
        },
        methods: {
            toggleDetails(state = true) {
                this.showDetails = state
            },
        }
    }
</script>

<style scoped>
    .car-image {
        width: 147px;
        height: 120px;
        position: relative;
    }
    .car-image img {
        width: 147px;
    }
    img.zoomed {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 280px;
        z-index: 1;
    }
    .item {
        border: 1px solid #dddddd;
        background: #fff;
        margin-bottom: 15px;
    }
    .sold-by {
        font-size: 12px;
        background-color: #f9f9f9;
    }
    .sold-by a {
        margin-right: 10px;
    }
    .car-control {
        width: 121px;
        height: auto;
        display: grid;
        background: #003554;
        color: #fff;
        font-size: 16px;
    }
    .car-control > span {
        opacity: 0.5;
        display: inline-block;
        border-bottom: 1px solid;
    }
    .car-control:hover > span {
        opacity: 1;
    }
    .car-description {
        height: auto;
        width: 498px;
    }
    .car-description > div {
        padding: 10px 20px;
    }
    .item-header {
        font-size: 13px;
        font-weight: 500;
    }
    .details {
        position: relative;
        transition-property: all;
        transition-duration: .7s;
        transition-timing-function: cubic-bezier(0, 1, 0.7, 1);
        height: auto;
        background: #fff;
        overflow-y: hidden;
        max-height: 0;
    }
    .details.open {
        max-height: 500px;
        padding: 20px;
    }
    .close-details {
        position: absolute;
        right: 20px;
        top: 20px;
    }
    .details ul {
        display: inline-block;
    }
    .details ul > li.tab {
        display: inline-block;
        margin-right: 50px;
        padding: 2px 5px;
        font-size: 13px ;
        cursor: pointer;
        font-weight: 500;
    }
    .underline {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #000;
        transform-origin: 0 0;
        transition: transform .25s;
    }
</style>

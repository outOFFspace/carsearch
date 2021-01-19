<template>
    <div class="item-slider">
        <div class="inner-slider" :style="sliderStyle">
            <div class="slide"
                 v-for="(slide, index) in sliderImages"
                 :key="index"
            >
                <img
                        :src="slide"
                        @mouseover="$emit('hovered', slide)"
                        @mouseleave="$emit('hovered', null)"
                />
            </div>
        </div>
        <span class="nav-right" v-show="showNext" @click="nextSlide"></span>
        <span class="nav-left" v-show="showPrev" @click="prevSlide"></span>
    </div>
</template>

<script>
    const MAX_VISIBLE_SLIDES = 5

    export default {
        name: 'ResultItemSlider',
        data() {
            return {
                currentSlide: MAX_VISIBLE_SLIDES - 1,
                sliderImages: [
                    'https://cdn.zeplin.io/5ae3722dc6b7aac6295da0da/assets/D48F0BA1-974E-4AF4-92A4-777FC17D443F.png',
                    'https://cdn.zeplin.io/5ae3722dc6b7aac6295da0da/assets/B26B0F38-3D96-4C08-8A17-D3F602FA8B49.png',
                    'https://cdn.zeplin.io/5ae3722dc6b7aac6295da0da/assets/D48F0BA1-974E-4AF4-92A4-777FC17D443F.png',
                    'https://cdn.zeplin.io/5ae3722dc6b7aac6295da0da/assets/B26B0F38-3D96-4C08-8A17-D3F602FA8B49.png',
                    'https://cdn.zeplin.io/5ae3722dc6b7aac6295da0da/assets/D48F0BA1-974E-4AF4-92A4-777FC17D443F.png',
                    'https://cdn.zeplin.io/5ae3722dc6b7aac6295da0da/assets/B26B0F38-3D96-4C08-8A17-D3F602FA8B49.png',
                    'https://cdn.zeplin.io/5ae3722dc6b7aac6295da0da/assets/D48F0BA1-974E-4AF4-92A4-777FC17D443F.png',
                ]
            }
        },
        computed: {
            showNext() {
                return this.sliderImages.length > MAX_VISIBLE_SLIDES && this.currentSlide < this.sliderImages.length
            },
            showPrev() {
                return this.currentSlide > MAX_VISIBLE_SLIDES - 1
            },
            sliderStyle() {
                let translate = (this.currentSlide - (MAX_VISIBLE_SLIDES - 1)) * 127
                if (this.currentSlide > MAX_VISIBLE_SLIDES - 1) {
                    translate *= -1
                }
                return `transform: translateX(${translate}px)`
            }
        },
        methods: {
            nextSlide() {
                if (this.currentSlide < this.sliderImages.length) {
                    this.currentSlide++
                }
            },
            prevSlide() {
                if (this.currentSlide > MAX_VISIBLE_SLIDES - 1) {
                    this.currentSlide--
                }
            }
        }
    }
</script>

<style scoped>
    .slide {
        display: inline-block;
        width: 127px;
        margin-right: 15px;
        cursor: pointer;
    }
    .slide img {
        width: 127px;
    }
    .item-slider {
        margin-top: 20px;
        overflow: hidden;
        position: relative;
        height: 117px;
    }
    .inner-slider {
        width: 9999px;
        left: 0;
        position: absolute;
        -webkit-transition:all 0.5s ease-in-out;
        -moz-transition:all 0.5s ease-in-out;
        -o-transition:all 0.5s ease-in-out;
        transition:all 0.5s ease-in-out;
    }
    [class*='nav-'] {
        position: absolute;
        cursor: pointer;
        height: 100%;
        width: 25px;
    }
    .nav-right {
        right: 0;
        top: 0;
        background: #003554 url('/arrow-right.svg') no-repeat 0 50%;
    }
    .nav-left {
        left: 0;
        top: 0;
        background: #003554 url('/arrow-right.svg') no-repeat 0 50%;
        transform: rotate(180deg);
    }
</style>

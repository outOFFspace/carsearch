<template>
    <div class="rating">
        <span
                v-for="n in count" :key="n"
                :class="{filled: n <= rating}"
        >★</span>
    </div>
</template>

<script>
    export default {
        name: 'StarRating',
        props: {
            rating: {
                type: Number,
                default: 0
            },
            count: {
                type: Number,
                default: 5
            }
        },
    }
</script>

<style scoped>
    .rating {
        display: inline-block;
    }
    span {
        color: #C7E2F4;
    }
    .filled {
        color: #008cdd;
    }
</style>

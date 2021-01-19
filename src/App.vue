<template>
    <div id="app">
        <div class="container">
            <header-item/>
            <router-view/>
        </div>
    </div>
</template>

<script>
    import HeaderItem from './views/HeaderItem'

    export default {
        components: {HeaderItem}
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
    .container {
        border: 1px solid #ccc;
        width: 1024px;
        margin: 0 auto;
    }
</style>

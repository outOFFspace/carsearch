<template>
    <div class="specs">
        <div
                class="flex-box"
                v-for="(item, index) in items"
                :key="index"
        >
            <div class="label">{{item.label}}</div>
            <div>{{item.content}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ResultItemSpecs',
        data() {
            return {
                items: [{
                    label: 'Turbo-Engine',
                    content: 'This car rips hard'
                }, {
                    label: 'Nitrus',
                    content: 'It’s like Fast & Furious'
                }, {
                    label: '8 cup-holders',
                    content: 'For all your friends'
                }, {
                    label: 'Vin Diesel Mode',
                    content: 'Will make you a protein shake '
                }]
            }
        }
    }
</script>

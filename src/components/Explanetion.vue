<template lang='pug'>
.explanetion
    v-divider.py-2
    .img(v-for='i in explanetionDoc' :key = 'i')
        v-card.pt-2(width='100vw' height='50vw' flat)
            v-layout(justify-center)
                v-card.red(width='50vw' height='50vw')
                    i img
                v-card.blue(width='50%')
                    i text
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Explanetion extends Vue {
    protected explanetionDoc = [
        {img: 'a', title: '', text: 'f'},
        {img: 'b', title: '', text: 'g'},
        {img: 'c', title: '', text: 'h'},
    ];
}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

.explanetion {}
</style>

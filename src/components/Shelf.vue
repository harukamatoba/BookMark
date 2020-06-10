<template lang='pug'>
.shelf
    v-card(height="30vh")

    v-layout(justify-center)
        v-card.brown.lighten-2(width="95vw" min-height="100vh")

            .lineTitle
                v-flex.mt-4(xs12)
                    v-card.ml-3.mb-3.mt-0(width='90px' height='50px')
            .line
                v-layout(justify-center)
                    v-card.brown(flat width='90%')
                        v-card-text.overflow-hidden.py-0
                            v-layout.horiz-scroll(row align-content)
                                .px-1.py-2(v-for='book in 9' :key='book')
                                    .pos-relative
                                        v-card.mx-1(width='30vw' height="30vw" @click="overlay = true")
                                            v-img(src="http://s.wordpress.com/mshots/v1/https://www.facebook.com/" :aspect-ratio= 1)
                                                v-card-text hoge

            v-overlay( :value="overlay")
                v-btn(icon  @click="overlay = false")
                    v-icon mdi-close

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Shelf extends Vue {
    protected overlay: boolean = false;
}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

.shelf {
    .overflow-hidden {
        overflow: hidden;
    }
    .horiz-scroll {
        overflow-x: auto;
        overflow-y : hidden;
    }


    .bottom-enter-active, .bottom-leave-active {
        transform: translate(0px, 0px);
        transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    }

    .bottom-enter, .bottom-leave-to {
        transform: translateY(100vh) translateY(0px);
    }

}
</style>

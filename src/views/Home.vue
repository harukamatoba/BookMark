<template lang='pug'>
v-layout#Home(fill-height column)
    v-layout.mt-3.pb-0(justify-center)
        v-card.icon-box
            // アイコンの箱
            v-layout.mt-3.pb-0(justify-center)
                v-avatar.icon.flex-column(size = "30vw")
                    v-icon.gray--text(size = "15vw") mdi-book-open-page-variant
                    //- 本のアイコン
                    i.icon-font bookmark
                    i.icon-font-bottom shelf
                .circle-shadow
                //-印籠の影
                .circle-center
                //- 印籠
                .circle-2
                .circle-3
                //- 回転体

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
    components: {
        HelloWorld,
    },
})
export default class Home extends Vue {}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_view.styl';

html
    scroll-view: true;
    // static-view: true;

#Home

    circle-size = 50vw;
    center-circle-size = 45vw;
    center-circle-shadow = 30vw;
    center-circle-shadow-top = 11vw;
    center-circle-shadow-border = 2vw;
    .main-pane
        main-pane();


    .icon-box   // アイコン全体
                height: 60vw;
                width: 60vw;
                position: absolute;
                mix-blend-mode: multiply;
        .icon-font  // アイコン文字
                font-size : 5vw;
        .icon-font-bottom  // アイコン文字(一番下)
                font-size : 5vw;
                padding-bottom : 5vw;
        .icon   // 本のアイコン自体
                position: absolute;
                mix-blend-mode: multiply;
                top: 12vw;
        .circle-shadow  // 封蠟の影の部分
                width: center-circle-shadow;
                height: center-circle-shadow;
                position: absolute;
                top : center-circle-shadow-top;
                mix-blend-mode: multiply;
                border: center-circle-shadow-border solid #bbb;
                border-radius: center-circle-shadow;
        .circle-center  // 封蠟
                width: center-circle-size;
                height : center-circle-size;
                position: absolute;
                mix-blend-mode: multiply;
                background: #d53;
                border-radius: 60% 20% 50% 40%/70% 60% 40% 50%;
        .circle-2   // 前から二番目の円
                width: circle-size;
                height : circle-size;
                position: absolute;
                mix-blend-mode: multiply;
                background: #f80;
                border-radius: 30% 80% 40% 90%/50% 50%;
                animation: border-animation 5s infinite linear;
        .circle-3   // 前から三番目の円
                width: circle-size;
                height : circle-size;
                position: absolute;
                mix-blend-mode: multiply;
                background: #fc2;
                border-radius: 40% 60% 50% 40%/30% 50% 50% 50%;
                animation: border-animation 3s infinite linear;

    @keyframes border-animation // アイコンが回転するアニメーション
        to { transform: rotate(360deg); }

</style>

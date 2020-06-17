<template lang='pug'>
v-layout#Home(fill-height column)
    v-card(height="20vw" flat)
        v-layout.mt-3.pb-0(justify-center)
            v-card.icon-box(flat)
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
    v-card.title-box(flat)
            i.display-3.text-center bookmark shelf

            i.subtitle-1 URLを本棚に置こう

    v-card.goShelf.pt-3(flat width="100vw")
        v-layout(justify-center)
            v-btn.thema01(@click="goShelf") 本棚をみる
    Explanetion

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Login from '@/components/Login.vue';
import Explanetion from '@/components/Explanetion.vue';


@Component({
    components: {
        Login,
        Explanetion,
    },
})
export default class Home extends Vue {
    protected goShelf() {
        if (this.$store.state.login === true) {
            this.$router.push('Shelf');
        } else {
            this.$router.push('Login');
        }
    }
}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_view.styl';

html
    scroll-view: true;
    // static-view: true;

#Home

    circle-size = 40vw;
    center-circle-size = 35vw;
    center-circle-shadow = 25vw;
    center-circle-shadow-top = 8vw;
    center-circle-shadow-border = 0.5vw;
    .main-pane
        main-pane();

    circleSet(diameter)
        height : unit(diameter, 'vw')
        width : unit(diameter, 'vw')
        position: absolute;
        mix-blend-mode: multiply;


    .icon-box   // アイコン全体
                circleSet(60)
        .icon-font  // アイコン文字
                font-size : 5vw;
                font-family : MS Serif;
        .icon-font-bottom  // アイコン文字(一番下)
                font-size : 5vw;
                padding-bottom : 5vw;
                font-family : MS Serif;
        .icon   // 本のアイコン自体
                position: absolute;
                mix-blend-mode: multiply;
                top: 7vw;
        .circle-shadow  // 封蠟の影の部分
                circleSet(center-circle-shadow)
                top : center-circle-shadow-top;
                border: center-circle-shadow-border solid #bbb;
                border-radius: center-circle-shadow;
        .circle-center  // 封蠟
                circleSet(center-circle-size)
                background: #fc913a;
                border-radius: 60% 20% 50% 40%/70% 60% 40% 50%;
        .circle-2   // 前から二番目の円
                circleSet(circle-size)
                background: #f9d423;
                border-radius: 30% 80% 40% 90%/50% 50%;
                animation: border-animation 5s infinite linear;
        .circle-3   // 前から三番目の円
                circleSet(circle-size)
                background: #ede574;
                border-radius: 40% 60% 50% 40%/30% 50% 50% 50%;
                animation: border-animation 3s infinite linear;

    .title-box
                margin-top : 30vw
                padding-top : 10px;
    @keyframes border-animation // アイコンが回転するアニメーション
        to { transform: rotate(360deg); }

</style>

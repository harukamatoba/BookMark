<template lang='pug'>
v-layout#add-book(fill-height column)
    v-overlay(:model="$store.state.isAdBook")
        v-card.white(width="70vw" height="45vh")
                v-layout(align-start justify-top)
                    v-btn(icon  @click="$store.state.isAdBook = false" width="5vw")
                        v-icon.black--text mdi-close
                    v-card-text.title 棚に追加する
                v-divider.thema01.ma-1
                v-form.form
                    v-text-field.ma-2(light label="本の名前" v-model="BookTitle" prepend-icon="mdi-book-open-page-variant" type="text" )
                    v-text-field.ma-2(light label="URL" v-model="BookURL" prepend-icon="mdi-book-open-page-variant" type="text" )
                    v-text-field.ma-2(light label="説明" v-model="BookDetail" prepend-icon="mdi-book-open-page-variant" type="text" )
                v-card-action
                        v-layout.mt-2(justify-center)
                            v-spacer
                            v-btn.thema01(@click="addAccept" ) 追加
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class AddBook extends Vue {
    @Prop({default: 0})
    protected index!: number;

    protected BookTitle: string = '';
    protected BookURL: string = '';
    protected BookDetail: string = '';
    protected addAccept() {
        let month: string = '';
        let day: string = '';
        if (this.BookURL === '') {
            this.$vdialog.alert('URLだけでも入れてください');
        } else {
            const today = new Date();
            if (today.getMonth() / 10 < 1) {
                month = '0' + today.getMonth().toString();
            } else {
                month = '' + today.getMonth().toString();
            }
            if (today.getDay() / 10 < 1) {
                day = '0' + today.getDay().toString();
            } else {
                day = '' + today.getDay().toString();
            }
            const len = this.$store.state.selBook.bmList[this.index].length;
            this.$store.state.selBook.bmList[this.index].push({title: '', URL: '', ListId: 0, detail: '', addDate: 0});
            this.$store.state.selBook.bmList[this.index][len].title = this.BookTitle;
            this.$store.state.selBook.bmList[this.index][len].URL = this.BookURL;
            this.$store.state.selBook.bmList[this.index][len].detail = this.BookDetail;
            this.$store.state.selBook.bmList[this.index][len].AddDate = month + day;
            this.$store.state.isAdBook = false;
        }
    }

}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

#add-book {}
</style>

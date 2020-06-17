<template lang='pug'>
.shelf
    v-card(height="30vh")

    v-layout(justify-center)
        v-card.brown.lighten-2(width="95vw" min-height="100vh")
            .lineRepeat(v-for="(line, index) in book.bmListTitle")
                .lineTitle
                    v-flex.mt-4(xs12)
                        v-card.ml-3.mb-3.mt-0(width='90px' height='50px')
                            v-card-text {{line}}
                    //-その本棚の列のタイトル

                .line
                    v-layout(justify-center)
                        v-card.brown(flat width='90%')
                            v-card-text.overflow-hidden.py-0
                                v-layout.horiz-scroll(row align-content)
                                    .px-1.py-2(v-for='(book, index) in book.bmList[index]' )
                                        .pos-relative
                                            v-card.mx-1(width='30vw' height="30vw" @click="bookClick(index, book)")
                                                v-img(:src="'http://capture.heartrails.com/100×100?'+ book.URL" :aspect-ratio= 1)

            v-btn.brown.darken-1(dark  @click="addLine()")
                v-icon.darken-3 mdi-plus-circle-outline
    //- ここがクリック後の中身
    v-overlay( :value="overlay")
            v-card.white(width="70vw" height="45vh")
                v-layout(align-start justify-top)
                    v-btn(icon  @click="overlay = false" width="5vw")
                        v-icon.black--text mdi-close
                    .bookDetail
                        v-img.pt-2(:src="'http://capture.heartrails.com/100×100?'+ select.URL" :aspect-ratio= 1
                            width='60vw' height="20vh")
                v-card.white(width="70vw" height="25vh")
                    v-layout()
                        v-card-text.title.ma-0.pa-0.pl-1 {{ select.title }}
                        v-btn.thema01(@click="jumpURL(select.URL)" icon)
                            v-icon mdi-open-in-new
                        v-btn.thema01(@click="copyURL(select.URL)" icon)
                            v-icon mdi-content-copy
                    v-divider.ma-1.mb-5.thema01
                    v-card-text.subtitle.pa-0.pl-1 {{ select.detail }}
                    v-snackbar(v-model="cpyAlert") URLをコピーしました。
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import BookInfo from '../logic/item/bookInfo';
import BookList from '../logic/item/bookMarkList';
import BookInfoApi from '../logic/ReturnItem/BookInfoApi';

@Component
export default class Shelf extends Vue {
    protected overlay: boolean = false;
    protected cpyAlert: boolean = false;
    protected isAdLine: boolean = false;
    protected book: BookInfo | object = [];
    protected select: BookList = {title: '', URL: '', ListId: 0, detail: '', addDate: 0};
    protected async beforeMount() {
        this.book = await BookInfoApi.get();
    }
    protected bookClick(index: number, books: BookList) {
        if (this.select !== books) {
            this.select = books;
            if (this.select.title === '') {
                this.select.title = this.select.URL;
            }
            if (window.parent.screen.width <= 500) {
                if (this.select.title.length > 10) {
                    this.select.title = this.select.title.slice(0, 10);
                    this.select.title += '...';
                }
            }
        }
        this.overlay = true;
    }
    protected jumpURL(url: string) {
        window.open(url);
    }

    protected copyURL(url: string) {
    const copyFrom = document.createElement('textarea');
    copyFrom.textContent = url;
    const bodyElm = document.getElementsByTagName('body')[0];
    bodyElm.appendChild(copyFrom);
    copyFrom.select();
    const retVal = document.execCommand('copy');
    bodyElm.removeChild(copyFrom);
    this.cpyAlert = true;
    }
    protected addLine() {
        this.isAdLine = true;
    }
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

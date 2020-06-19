<template lang='pug'>
v-layout#add-line(fill-height column)
    v-overlay(:model="$store.state.isAdLine")
        v-card.white(width="70vw" height="40vh")
                v-layout(align-start justify-top)
                    v-btn(icon  @click="$store.state.isAdLine = false" width="5vw")
                        v-icon.black--text mdi-close
                    v-card-text.title 棚に追加する
                v-divider.thema01.ma-1
                v-form.form
                    v-text-field.ma-2(light label="分類名" v-model="bmListTitle" prepend-icon="mdi-book-open-page-variant" type="text" )
                v-card-action
                        v-layout.mt-2(justify-center)
                            v-spacer
                            v-btn.thema01(@click="addAccept" ) 追加
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class AddLine extends Vue {
    @Prop({ default: 0 })
    protected add!: number;

    // protected adRule = {
    //     length: v => (v || '').length >= 1 || '0文字以上',
    // };
    protected bmListTitle: string = '';
    protected addAccept() {
        if (this.bmListTitle.length === 0) {
            this.$vdialog.alert('何らかの題名を入れてください');
        } else {
            this.$store.state.selBook.bmListTitle.push(this.bmListTitle);
            this.$store.state.selBook.bmList.push([]);
            this.$store.state.isAdLine = false;
        }
    }


}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

#add-line {
}
</style>

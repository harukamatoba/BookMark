<template lang='pug'>
.login
    v-container.fill-height(fluid)
        v-row(ailgn="center" justify="center")
            v-col(cols="12" sm="8" md="4")
                v-card.elevation-12
                    v-toolbar.thema02(dark flat)
                            v-toolbar-title ログイン
                    v-card-text
                        v-form
                            v-text-field(label="account" v-model="account" prepend-icon="mdi-account" type="text" )
                            v-text-field(label="password" v-model="pass" prepend-icon="mdi-lock" type="password" )

                    v-card-action
                        v-layout(justify-center ailgn-center)

                            v-spacer
                            v-btn.thema03(@click="LoginBtn()" :disabled="$store.state.login") Login
                        v-alert(type="success" v-model="$store.state.login") ログイン済み
                            v-btn.success.elevation-0.py-0.my-0(flat dark) log out

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
    protected pass: string = '';
    protected account: string = '';
    // protected acRule = {
    //     length: v => (v || '').length >= 6 || '6文字以上',
    // };
    // protected pasRule = {
    //     length: v => (v || '').length >= 6 || '6文字以上',
    // };
    protected LoginBtn() {
        if (this.pass.length >= 6 && this.account.length >= 6) {
            this.$store.state.login = true;
            this.$router.push('Shelf');
        } else {
            this.$vdialog.alert('正しいアカウント名とパスワードを入れてください');
        }
    }

}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

.login {}
</style>

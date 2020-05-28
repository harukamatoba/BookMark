<template lang='pug'>
v-app#app
    v-navigation-drawer(app temporary v-model='drawer')
    v-app-bar.thema02(app height='54px')
        v-app-bar-nav-icon.hidden-sm-and-up.nav-icon.thema04--text(@click.stop='drawer = !drawer')
        v-toolbar-title.thema04--text {{ appName }}
        v-spacer

        v-btn.ma-2.tile(outlined color="thema04")
            v-icon {{ accountBtn.icon }}
            v-btn-text {{ accountBtn.text }}

        v-menu.hidden-xs-only


    v-content#content
        router-view
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
    public appName = process.env.APP_NAME;
    protected drawer = false;
    protected signInCheck = false;
    protected accountBtn = {
        icon: '',
        text: '',
    };

    protected beforeMount() {
        this.signInCheck = true;
        if (this.signInCheck) {
            this.accountBtn.icon = 'mdi-logout';
            this.accountBtn.text = 'log out';
        } else {
            this.accountBtn.icon = 'mdi-account';
            this.accountBtn.text = 'log in';
        }
    }
}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_app.styl';

#app
    background-color: transparent;

    .nav-icon:before
        opacity: 0;
</style>

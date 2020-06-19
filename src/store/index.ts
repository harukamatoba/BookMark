import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        login : false,
        selBook: {
            userId: 0,
            userName: '',
            bmListTitle: [''],
            bmList: [],
        },
        isAdLine: false,
        isAdBook: false,
    },
    mutations: {

    },
    actions: {

    },
});

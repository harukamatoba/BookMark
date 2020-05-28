import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import 'vuetify/dist/vuetify.min.css';

import InstantVuetify from 'instant-vuetify-overlays';

Vue.use(Vuetify);
Vue.use(InstantVuetify);

export default new Vuetify({

    theme: {
        themes: {
            light: {
                thema01: '#ff4e50',
                thema02: '#fc913a',
                thema03: '#f9d423',
                thema04: '#ede574',
            },
        },
    },

});

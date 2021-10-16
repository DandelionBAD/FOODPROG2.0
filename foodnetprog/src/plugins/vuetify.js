import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import it from "vuetify/es5/locale/it";
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md'
    },
    lang: {
        locales: { it },
        current: "it"
    },

    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#EB8815',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
})

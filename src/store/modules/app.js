import Vue from 'vue';

const app = {
    state: {
        lang: '',
    },
    mutations: {
        switchLang (state, lang) {
            state.lang = lang;
            Vue.config.lang = lang;
        }
    }
};

export default app;

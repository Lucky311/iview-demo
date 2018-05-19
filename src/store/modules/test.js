import Vue from 'vue';
import aaa from '@/utils/dom';

let test = {

    state: {
        msg: '',
    },
    getters:{
        chat: state => state.msg
    },
    mutations: {
        changeMsg (state, {msgs}) {
            state.msg = msgs;
        }
    },

    actions: {
        getMsg({commit},payload){
                aaa(commit,payload)
        }
    },

};

export default test;

import Vue from 'vue'
import Vuex from 'vuex'
import http from '../utils/http'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        onLogin: {},
        loginOut: {},
        updateUserinfo: {},
        roomList: {},
        roomAdd: {},
        messageList: {},
        messageAdd: {},
    },
    getters: {
        onLoginData: (state) => {
            return state.onLogin
        },
        roomListData: (state) => {
            return state.roomList
        },
        roomAddData: (state) => {
            return state.roomAdd
        },
        messageListData: (state) => {
            return state.messageList
        },
        messageAddData: (state) => {
            return state.messageAdd
        },
    },
    mutations: {
        onLogin(state, val) {
            http('post', '/auth/login', val).then(res => {
                state.onLogin = res
            })
        },
        roomList(state, val) {
            http('get', '/chat/room', val).then(res => {
                state.roomList = res
            })
        },
        roomAdd(state, val) {
            http('post', '/chat/room', val).then(res => {
                state.roomAdd = res
            })
        },
        messageList(state, val) {
            http('get', '/chat/message', val).then(res => {
                state.messageList = res
            })
        },
        messageAdd(state, val) {
            http('post', '/chat/message', val).then(res => {
                state.messageAdd = res
            })
        },
    },
    actions: {
        onLogin({commit}, val) {
            commit("onLogin", val)
        },
        roomList({commit}, val) {
            commit("roomList", val)
        },
        roomAdd({commit}, val) {
            commit("roomAdd", val)
        },
        messageList({commit}, val) {
            commit("messageList", val)
        },
        messageAdd({commit}, val) {
            commit("messageAdd", val)
        },
    }
})
export default store;
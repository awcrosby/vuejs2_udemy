import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import globalAxios from 'axios'

import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null,
        user: null
    },
    mutations: {
        authUser (state, userData) {
            state.idToken = userData.token,
            state.userId = userData.userId
        },
        storeUser (state, user) {
            state.user = user
        },
        clearAuthData (state) {
            state.idToken = null
            state.userId = null
        }
    },
    actions: {
        setLogoutTimer ({commit}, expirationTime) {
            setTimeout(() => {
                commit('clearAuthData')
                router.replace('/signin')
            }, expirationTime * 1000)
        },
        signup ({commit, dispatch}, authData) {
            axios.post('/signupNewUser?key=AIzaSyAIlYQ69e2aocQJnBeI90d3y84pnYFqBks', {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                })
                .then(res => {
                    console.log('signup post', res)
                    commit('authUser', {
                        token: res.data.idToken,
                        userId: res.data.localId
                    })
                    const now = new Date()
                    const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
                    localStorage.setItem('token', res.data.idToken)
                    localStorage.setItem('userId', res.data.localId)
                    localStorage.setItem('expirationDate', expirationDate)
                    dispatch('storeUser', authData)
                    dispatch('setLogoutTimer', res.data.expiresIn)
                })
                .catch(error => console.log(error));
        },
        login ({commit, dispatch}, authData) {
            axios.post('/verifyPassword?key=AIzaSyAIlYQ69e2aocQJnBeI90d3y84pnYFqBks', {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                })
                .then(res => {
                    console.log('login post', res)
                    const now = new Date()
                    const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
                    localStorage.setItem('token', res.data.idToken)
                    localStorage.setItem('userId', res.data.localId)
                    localStorage.setItem('expirationDate', expirationDate)
                    commit('authUser', {
                        token: res.data.idToken,
                        userId: res.data.localId
                    })
                    dispatch('setLogoutTimer', res.data.expiresIn)
                })
                .catch(error => console.log('error:', error))
        },
        tryAutoLogin ({commit}) {
            const token = localStorage.getItem('token')
            if (!token) {
                console.log('NO TOKEN')
                return
            }
            const expirationDate = localStorage.getItem('expirationDate')
            const now = new Date()
            if (now >= expirationDate) {
                console.log('EXPIRED')
                return  // since token is expired
            }
            console.log('TRYING TO AUTOLOGIN')
            const userId = localStorage.getItem('userId')
            commit('authUser', {
                token: token,
                userId: userId
            })
        },
        logout ({commit}) {
            commit('clearAuthData')
            router.replace('/signin')
        },
        storeUser ({commit, state}, userData) {
            if (!state.idToken) {
                return
            }
            globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
                .then(res => console.log(res))
                .catch(error => console.log(error))
        },
        fetchUser ({commit, state}) {
            if (!state.idToken) {
                return
            }
            globalAxios.get('/users.json' + '?auth=' + state.idToken)
                .then(res => {
                    console.log(res);
                    const data = res.data;
                    const users = [];
                    for (let key in data) {
                        const user = data[key];
                        user.id = key;
                        users.push(user);
                    }
                    console.log(users);
                    commit('storeUser', users[0])
                })
                .catch(error => console.log(error));
        }
    },
    getters: {
        user (state) {
            return state.user
        },
        isAuthenticated (state) {
            return state.idToken !== null
        }
    }
})

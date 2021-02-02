import VuexPersist from 'vuex-persist'
const vuexLocalStorage = new VuexPersist({
    key: 'vuex', storage: window.localStorage
})

export default {
    state: {
        logs: []
    },
    mutations: {
        addToLogs (state, payload) {
            state.logs.push(payload)
        },
        removeFromLogs (state, idx) {
            state.logs.splice(idx, 1)
        },
        clearLogs (state) {
            state.logs = []
        }
    },
    getters: {
        logs: state => {
            return state.logs
        }
    },
    plugins: [ vuexLocalStorage.plugin ]
}
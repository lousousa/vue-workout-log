import VuexPersist from 'vuex-persist'
const vuexLocalStorage = new VuexPersist({
    key: 'vuex', storage: window.localStorage
})

export default {
    state: {
        cart: []
    },
    mutations: {
        addToCart (state, payload) {
            state.cart.push(payload)
        },
        removeFromCart (state, idx) {
            state.cart.splice(idx, 1)
        },
        clearCart (state) {
            state.cart = []
        }
    },
    getters: {
        cart: state => {
            return state.cart
        }
    },
    plugins: [ vuexLocalStorage.plugin ]
}
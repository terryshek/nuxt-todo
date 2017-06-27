import Vuex from 'vuex'

const store = () => new Vuex.Store({
    state: {
        todos: [
            {task:'eat'},
            {task:'sleep'},
            {task:'code'},
            ]
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        }
    }
})
export default store